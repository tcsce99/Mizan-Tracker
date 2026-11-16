package app.fusha.arabic;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.os.Bundle;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.OnBackPressedCallback;
import androidx.appcompat.app.AppCompatActivity;
import androidx.webkit.WebViewAssetLoader;

import org.json.JSONObject;

import java.util.ArrayList;

/**
 * Fuṣḥā — Classical Arabic.
 *
 * Shows the bundled web app (assets/www) in a WebView. Assets are served
 * through WebViewAssetLoader on https://appassets.androidplatform.net so
 * localStorage (the learner's progress) and fetch() behave as on the web.
 *
 * WebView has no Web Speech API, so speech recognition is bridged natively:
 * the page calls FushaNative.startListening(lang) and receives the result in
 * window.__fushaSpeech(text, error).
 */
public class MainActivity extends AppCompatActivity {

    private static final String HOST = "appassets.androidplatform.net";
    private static final int REQ_MIC = 7;

    private WebView web;
    private SpeechRecognizer recognizer;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        final WebViewAssetLoader assetLoader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();

        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#0d1117"));
        web.getSettings().setJavaScriptEnabled(true);
        web.getSettings().setDomStorageEnabled(true);
        web.getSettings().setAllowFileAccess(false);
        web.getSettings().setAllowContentAccess(false);
        web.addJavascriptInterface(new Bridge(), "FushaNative");

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return assetLoader.shouldInterceptRequest(request.getUrl());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                if (HOST.equals(request.getUrl().getHost())) return false;
                // Resource links open in the system browser; only the bundled
                // app ever runs inside this WebView (and can reach the bridge).
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, request.getUrl()));
                } catch (Exception ignored) { }
                return true;
            }
        });

        setContentView(web);

        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                if (web.canGoBack()) web.goBack();
                else finish();
            }
        });

        if (savedInstanceState == null) {
            web.loadUrl("https://" + HOST + "/assets/www/index.html");
        } else {
            web.restoreState(savedInstanceState);
        }
    }

    /** Methods callable from the page as window.FushaNative.* */
    private class Bridge {
        @JavascriptInterface
        public void startListening(final String lang) {
            runOnUiThread(() -> listen(lang));
        }
    }

    private void reply(String text, String error) {
        final String js = "window.__fushaSpeech&&window.__fushaSpeech("
                + (text == null ? "null" : JSONObject.quote(text)) + ","
                + (error == null ? "null" : JSONObject.quote(error)) + ")";
        web.post(() -> web.evaluateJavascript(js, null));
    }

    private void listen(String lang) {
        if (checkSelfPermission(Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, REQ_MIC);
            reply(null, "permission");
            return;
        }
        if (!SpeechRecognizer.isRecognitionAvailable(this)) {
            reply(null, "unsupported");
            return;
        }
        if (recognizer != null) recognizer.destroy();
        recognizer = SpeechRecognizer.createSpeechRecognizer(this);
        recognizer.setRecognitionListener(new RecognitionListener() {
            @Override public void onResults(Bundle results) {
                ArrayList<String> r = results.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
                if (r != null && !r.isEmpty()) reply(r.get(0), null);
                else reply(null, "no-speech");
            }
            @Override public void onError(int error) {
                switch (error) {
                    case SpeechRecognizer.ERROR_NO_MATCH:
                    case SpeechRecognizer.ERROR_SPEECH_TIMEOUT:
                        reply(null, "no-speech"); break;
                    case SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS:
                        reply(null, "permission"); break;
                    case SpeechRecognizer.ERROR_NETWORK:
                    case SpeechRecognizer.ERROR_NETWORK_TIMEOUT:
                        reply(null, "network"); break;
                    default:
                        reply(null, "error " + error);
                }
            }
            @Override public void onReadyForSpeech(Bundle params) { }
            @Override public void onBeginningOfSpeech() { }
            @Override public void onRmsChanged(float rmsdB) { }
            @Override public void onBufferReceived(byte[] buffer) { }
            @Override public void onEndOfSpeech() { }
            @Override public void onPartialResults(Bundle partialResults) { }
            @Override public void onEvent(int eventType, Bundle params) { }
        });
        Intent i = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, lang);
        i.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1);
        recognizer.startListening(i);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        web.saveState(outState);
    }

    @Override
    protected void onDestroy() {
        if (recognizer != null) recognizer.destroy();
        super.onDestroy();
    }
}
