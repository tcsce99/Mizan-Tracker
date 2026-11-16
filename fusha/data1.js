/* ============================================================
   FUSHA — Classical Arabic Learning App
   data1.js — Tracks + Lessons: Reading, Vocabulary intro, Sarf
   All example texts are public-domain classical sources
   (Qur'an, pre-Islamic & Abbasid poetry, hadith, proverbs).
   ============================================================ */
window.FUSHA = window.FUSHA || {};

FUSHA.tracks = [
  { id:'r', name:'Reading Foundations', ar:'الحروف والقراءة', icon:'ا', color:'#c9a84c',
    desc:'The script: letters, vowels, and reading fully-vocalized text.' },
  { id:'v', name:'Core Vocabulary', ar:'المفردات', icon:'ك', color:'#58a6ff',
    desc:'High-frequency Qur\'anic & classical vocabulary with spaced repetition.' },
  { id:'s', name:'Morphology — Ṣarf', ar:'الصرف', icon:'ص', color:'#3fb950',
    desc:'The root-and-pattern system: verb forms, participles, plurals.' },
  { id:'n', name:'Grammar — Naḥw', ar:'النحو', icon:'ن', color:'#a371f7',
    desc:'Sentence structure and iʿrāb — the key to reading without vowels.' },
  { id:'q', name:'Qur\'anic Reading', ar:'القراءة القرآنية', icon:'ق', color:'#e8c96a',
    desc:'Guided word-by-word readings of Qur\'anic passages.' },
  { id:'p', name:'Poetry & Classical Prose', ar:'الشعر والنثر', icon:'ش', color:'#f0883e',
    desc:'From didactic verse to the Muʿallaqāt and al-Mutanabbī.' },
  { id:'u', name:'Reading without Tashkīl', ar:'القراءة بلا تشكيل', icon:'ع', color:'#f85149',
    desc:'Predicting vowels from pattern and grammar; unvocalized texts.' },
  { id:'e', name:'Speaking & Expression', ar:'التعبير والمحادثة', icon:'م', color:'#39c5cf',
    desc:'Producing correct fuṣḥā: sentences, questions, narration.' }
];

FUSHA.lessons = [

/* ══════════ TRACK R — READING FOUNDATIONS ══════════ */
{ id:'r1', track:'r', order:1, xp:20, title:'The Alphabet I — ا to ز', ar:'الحروف ١',
  prereq:[],
  content:`<p>Arabic has <b>28 letters</b>, written right-to-left. All are consonants; vowels are added as marks. This lesson covers the first eleven letters in dictionary order.</p>
  <table><tr><th>Letter</th><th>Name</th><th>Sound</th></tr>
  <tr><td class="ar">ا</td><td>alif</td><td>long "aa" / seat for hamza</td></tr>
  <tr><td class="ar">ب</td><td>bāʾ</td><td>b</td></tr>
  <tr><td class="ar">ت</td><td>tāʾ</td><td>t</td></tr>
  <tr><td class="ar">ث</td><td>thāʾ</td><td>th as in "think"</td></tr>
  <tr><td class="ar">ج</td><td>jīm</td><td>j</td></tr>
  <tr><td class="ar">ح</td><td>ḥāʾ</td><td>deep breathy h</td></tr>
  <tr><td class="ar">خ</td><td>khāʾ</td><td>kh as in "Bach"</td></tr>
  <tr><td class="ar">د</td><td>dāl</td><td>d</td></tr>
  <tr><td class="ar">ذ</td><td>dhāl</td><td>th as in "this"</td></tr>
  <tr><td class="ar">ر</td><td>rāʾ</td><td>rolled r</td></tr>
  <tr><td class="ar">ز</td><td>zāy</td><td>z</td></tr></table>
  <p>Notice the letters differ only by <b>dots</b>: ب ت ث share one skeleton; ج ح خ share another; د ذ and ر ز pair up. Learning skeletons first makes the rest fast.</p>`,
  examples:[
    { ar:'ب ت ث', en:'One skeleton, distinguished by dots: below (b), two above (t), three above (th).', src:'' },
    { ar:'ج ح خ', en:'One skeleton: dot inside (j), none (ḥ), above (kh).', src:'' }
  ],
  quiz:[
    { q:'Which letter is thāʾ (th as in "think")?', c:['ث','ت','ب','ن'], a:0, x:'thāʾ has three dots above the skeleton.' },
    { q:'The letter خ sounds like:', c:['kh as in "Bach"','deep h','j','k'], a:0, x:'خ (khāʾ) has the dot above.' },
    { q:'Which pair differs only by a single dot?', c:['د and ذ','ا and ل','ب and ج','ر and و'], a:0, x:'ذ is د plus one dot above.' },
    { q:'Arabic is written…', c:['right to left','left to right','top to bottom','either direction'], a:0, x:'All Arabic text runs right-to-left.' },
    { q:'Which letter is rāʾ?', c:['ر','ز','د','و'], a:0, x:'ر has no dot; ز is the same shape with a dot.' }
  ]},

{ id:'r2', track:'r', order:2, xp:20, title:'The Alphabet II — س to ي', ar:'الحروف ٢',
  prereq:['r1'],
  content:`<p>The remaining seventeen letters:</p>
  <table><tr><th>Letter</th><th>Name</th><th>Sound</th></tr>
  <tr><td class="ar">س</td><td>sīn</td><td>s</td></tr>
  <tr><td class="ar">ش</td><td>shīn</td><td>sh</td></tr>
  <tr><td class="ar">ص</td><td>ṣād</td><td>emphatic s</td></tr>
  <tr><td class="ar">ض</td><td>ḍād</td><td>emphatic d — unique to Arabic</td></tr>
  <tr><td class="ar">ط</td><td>ṭāʾ</td><td>emphatic t</td></tr>
  <tr><td class="ar">ظ</td><td>ẓāʾ</td><td>emphatic dh</td></tr>
  <tr><td class="ar">ع</td><td>ʿayn</td><td>voiced pharyngeal — from deep in the throat</td></tr>
  <tr><td class="ar">غ</td><td>ghayn</td><td>gh, like a French r</td></tr>
  <tr><td class="ar">ف</td><td>fāʾ</td><td>f</td></tr>
  <tr><td class="ar">ق</td><td>qāf</td><td>deep k, from the uvula</td></tr>
  <tr><td class="ar">ك</td><td>kāf</td><td>k</td></tr>
  <tr><td class="ar">ل</td><td>lām</td><td>l</td></tr>
  <tr><td class="ar">م</td><td>mīm</td><td>m</td></tr>
  <tr><td class="ar">ن</td><td>nūn</td><td>n</td></tr>
  <tr><td class="ar">ه</td><td>hāʾ</td><td>h</td></tr>
  <tr><td class="ar">و</td><td>wāw</td><td>w / long "oo"</td></tr>
  <tr><td class="ar">ي</td><td>yāʾ</td><td>y / long "ee"</td></tr></table>
  <p>Arabic is famously <b>لغة الضاد</b> — "the language of the ḍād" — because ض exists in no other language. The four <b>emphatic</b> letters ص ض ط ظ darken the vowels around them; distinguishing them from س د ت ذ changes meaning.</p>`,
  examples:[
    { ar:'قَلْب / كَلْب', en:'qalb "heart" vs kalb "dog" — ق vs ك changes everything.', src:'' },
    { ar:'صَيْف / سَيْف', en:'ṣayf "summer" vs sayf "sword".', src:'' }
  ],
  quiz:[
    { q:'Which letter exists in no language other than Arabic (by tradition)?', c:['ض','ع','ق','ظ'], a:0, x:'Arabic is called لغة الضاد, the language of ḍād.' },
    { q:'Which of these is an emphatic letter?', c:['ط','ت','د','س'], a:0, x:'The four emphatics are ص ض ط ظ.' },
    { q:'قَلْب means "heart". كَلْب means:', c:['dog','book','pen','door'], a:0, x:'Only ق vs ك distinguishes them — precision matters.' },
    { q:'The letter ع (ʿayn) is:', c:['a voiced sound from deep in the throat','silent','like English a','like g'], a:0, x:'ʿayn is a voiced pharyngeal consonant.' },
    { q:'Which letter can act as the long vowel "oo"?', c:['و','ي','ه','ن'], a:0, x:'wāw doubles as consonant w and long ū.' }
  ]},

{ id:'r3', track:'r', order:3, xp:20, title:'Connecting Letters', ar:'اتصال الحروف',
  prereq:['r2'],
  content:`<p>Arabic is cursive: letters change shape by position — <b>initial, medial, final, isolated</b>. Example with ب:</p>
  <table><tr><th>Isolated</th><th>Initial</th><th>Medial</th><th>Final</th></tr>
  <tr><td class="ar">ب</td><td class="ar">بـ</td><td class="ar">ـبـ</td><td class="ar">ـب</td></tr></table>
  <p>Six letters <b>never connect forward</b> (to the letter after them): <span class="ar big">ا د ذ ر ز و</span>. After any of these, the next letter takes its initial/isolated form, creating a visible gap inside the word.</p>
  <p>So <span class="ar">د + ا + ر</span> becomes <span class="ar big">دار</span> (house) — three letters, but the pen lifts after د and after ا.</p>`,
  examples:[
    { ar:'كتب ← ك + ت + ب', en:'"kataba" (he wrote): all three connect.', src:'' },
    { ar:'ورد ← و + ر + د', en:'"ward" (roses): none of these connect forward — three separate strokes.', src:'' },
    { ar:'بِسْمِ', en:'bi-smi: بـ initial, ـسـ medial, ـم final.', src:'Qur\'an 1:1' }
  ],
  quiz:[
    { q:'How many letters never connect to the letter after them?', c:['6','2','10','none'], a:0, x:'ا د ذ ر ز و.' },
    { q:'Which word contains NO forward-connecting letters at all?', c:['ورد','كتب','سلم','فهم'], a:0, x:'و ر د are all non-connectors.' },
    { q:'The form ـبـ is used when ب is:', c:['in the middle of a connected group','at the start','isolated','at the end'], a:0, x:'ـبـ connects on both sides.' },
    { q:'In دار, why is there a gap after د?', c:['د never connects forward','د is a vowel','printing error','words always split'], a:0, x:'د is one of the six non-connectors.' }
  ]},

{ id:'r4', track:'r', order:4, xp:25, title:'Short Vowels & Sukūn', ar:'الحركات والسكون',
  prereq:['r3'],
  content:`<p>The short vowels (<b>ḥarakāt</b>) are marks above or below a letter:</p>
  <table><tr><th>Mark</th><th>Name</th><th>Sound</th><th>Example</th></tr>
  <tr><td class="ar big">بَ</td><td>fatḥa</td><td>a</td><td class="ar">كَتَبَ kataba</td></tr>
  <tr><td class="ar big">بِ</td><td>kasra</td><td>i</td><td class="ar">بِسْمِ bismi</td></tr>
  <tr><td class="ar big">بُ</td><td>ḍamma</td><td>u</td><td class="ar">كُتُب kutub</td></tr>
  <tr><td class="ar big">بْ</td><td>sukūn</td><td>no vowel</td><td class="ar">مِنْ min</td></tr></table>
  <p>These marks are the <b>tashkīl</b>. Children's books and the Qur'an are fully marked; nearly everything else is not — which is why this app's end goal is reading <i>without</i> them. But first you must know them perfectly.</p>
  <p>A vowel changes meaning and grammar: <span class="ar">كَتَبَ</span> "he wrote" vs <span class="ar">كُتِبَ</span> "it was written".</p>`,
  examples:[
    { ar:'قُلْ هُوَ اللَّهُ أَحَدٌ', en:'qul huwa llāhu aḥad — every consonant carries a mark or sukūn.', src:'Qur\'an 112:1' },
    { ar:'كَتَبَ / كُتِبَ', en:'kataba "he wrote" / kutiba "it was written" — same skeleton, different vowels.', src:'' }
  ],
  quiz:[
    { q:'Which mark writes the sound "i"?', c:['kasra — below the letter','fatḥa — above','ḍamma — a small و above','sukūn'], a:0, x:'kasra sits below: بِ = bi.' },
    { q:'sukūn (بْ) means:', c:['no vowel follows the consonant','long vowel','doubled letter','the letter is silent'], a:0, x:'The consonant closes the syllable: مِنْ = min.' },
    { q:'كُتِبَ differs from كَتَبَ in:', c:['voice — "was written" vs "wrote"','tense','plural','no difference'], a:0, x:'Vowel pattern alone marks passive voice.' },
    { q:'The collective name for these vowel marks is:', c:['tashkīl / ḥarakāt','iʿrāb','abjad','naskh'], a:0, x:'tashkīl (also ḥarakāt).' },
    { q:'How is كُتُب (books) vowelled?', c:['u–u','a–a','i–a','a–i'], a:0, x:'kutub: ḍamma, ḍamma.' }
  ]},

{ id:'r5', track:'r', order:5, xp:25, title:'Long Vowels & Tanwīn', ar:'المدود والتنوين',
  prereq:['r4'],
  content:`<p><b>Long vowels</b> are a short vowel followed by its matching letter of prolongation:</p>
  <table><tr><th>Combination</th><th>Sound</th><th>Example</th></tr>
  <tr><td class="ar big">ـَا</td><td>ā</td><td class="ar">قَالَ qāla — he said</td></tr>
  <tr><td class="ar big">ـِي</td><td>ī</td><td class="ar">فِي fī — in</td></tr>
  <tr><td class="ar big">ـُو</td><td>ū</td><td class="ar">نُور nūr — light</td></tr></table>
  <p><b>Tanwīn</b> ("nunation") doubles the final vowel mark and adds an "n" sound. It marks a noun as <b>indefinite</b>:</p>
  <table><tr><th>Mark</th><th>Sound</th><th>Example</th></tr>
  <tr><td class="ar big">ـٌ</td><td>-un</td><td class="ar">كِتَابٌ kitābun — a book</td></tr>
  <tr><td class="ar big">ـً</td><td>-an</td><td class="ar">كِتَابًا kitāban</td></tr>
  <tr><td class="ar big">ـٍ</td><td>-in</td><td class="ar">كِتَابٍ kitābin</td></tr></table>
  <p>Tanwīn -an usually adds a silent alif seat: <span class="ar">كِتَابًا</span>.</p>`,
  examples:[
    { ar:'وَقُل رَّبِّ زِدْنِي عِلْمًا', en:'"And say: My Lord, increase me in knowledge" — ʿilman ends in tanwīn -an.', src:'Qur\'an 20:114' },
    { ar:'نُورٌ عَلَى نُورٍ', en:'"Light upon light" — nūrun … nūrin: same word, different tanwīn by grammar.', src:'Qur\'an 24:35' }
  ],
  quiz:[
    { q:'The long ā in قَالَ is written with:', c:['fatḥa + alif','fatḥa alone','alif alone','ḍamma + wāw'], a:0, x:'Short vowel + matching letter = long vowel.' },
    { q:'Tanwīn on a noun signals that it is:', c:['indefinite ("a book")','definite ("the book")','plural','a verb'], a:0, x:'Definite nouns (with ال) never take tanwīn.' },
    { q:'كِتَابٍ is pronounced:', c:['kitābin','kitābun','kitāban','kitāb'], a:0, x:'Double kasra = -in.' },
    { q:'In نُورٌ عَلَى نُورٍ the two tanwīns differ because of:', c:['grammatical case','a spelling error','poetry meter','dialect'], a:0, x:'-un is the subject case; -in follows the preposition عَلَى.' },
    { q:'فِي (in) contains which long vowel?', c:['ī','ā','ū','none'], a:0, x:'kasra + yāʾ = ī.' }
  ]},

{ id:'r6', track:'r', order:6, xp:25, title:'Shadda, Hamza, Tāʾ Marbūṭa', ar:'الشدة والهمزة والتاء المربوطة',
  prereq:['r5'],
  content:`<p><b>Shadda</b> <span class="ar big">ـّ</span> doubles a consonant: <span class="ar">رَبّ</span> = rabb. The doubled letter closes one syllable and opens the next. Doubling changes meaning: <span class="ar">دَرَسَ</span> "he studied" → <span class="ar">دَرَّسَ</span> "he taught".</p>
  <p><b>Hamza</b> <span class="ar big">ء</span> is the glottal stop. It sits on a seat (ا، و، ئ) or alone: <span class="ar">أَخَذَ، سُؤَال، شَيْء</span>. At the start of a word it is always pronounced; the wavy mark <span class="ar">آ</span> (madda) = hamza + long ā: <span class="ar">آمَنَ</span> āmana.</p>
  <p><b>Tāʾ marbūṭa</b> <span class="ar big">ة</span> ends most feminine nouns: <span class="ar">مَدِينَة</span> madīna. It is pronounced "t" when the word is connected to what follows, "h" (or silent) at a pause.</p>
  <p><b>Alif maqṣūra</b> <span class="ar big">ى</span> is a final ā written like a dotless yāʾ: <span class="ar">هُدًى، مُوسَى</span>.</p>`,
  examples:[
    { ar:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', en:'iyyāka — the shadda on yāʾ is essential to the word "You alone".', src:'Qur\'an 1:5' },
    { ar:'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ', en:'hudan ends in alif maqṣūra with tanwīn.', src:'Qur\'an 2:2' }
  ],
  quiz:[
    { q:'Shadda ـّ indicates:', c:['a doubled consonant','a long vowel','silence','question intonation'], a:0, x:'rabb, umma, ḥajj — the consonant is held twice.' },
    { q:'دَرَّسَ (with shadda) means:', c:['he taught','he studied','he wrote','he read'], a:0, x:'Form II (doubling) often makes a verb causative: study → teach.' },
    { q:'The sign آ (madda) represents:', c:['hamza followed by long ā','silent alif','doubled alif sound "aa-aa"','w + a'], a:0, x:'آمَنَ = ʾāmana.' },
    { q:'ة (tāʾ marbūṭa) typically marks:', c:['feminine nouns','plural verbs','past tense','definiteness'], a:0, x:'madīna, raḥma, ṣalāh…' },
    { q:'The final ى in مُوسَى is:', c:['alif maqṣūra — pronounced ā','yāʾ — pronounced ī','silent','hamza'], a:0, x:'A dotless yāʾ shape read as ā.' }
  ]},

{ id:'r7', track:'r', order:7, xp:25, title:'ال and the Sun & Moon Letters', ar:'اللام الشمسية والقمرية',
  prereq:['r6'],
  content:`<p>The definite article is <b>الـ</b> (al-), attached to the noun: <span class="ar">الكِتَاب</span> "the book".</p>
  <p>Before <b>14 "sun letters"</b> (ت ث د ذ ر ز س ش ص ض ط ظ ل ن) the lām assimilates: it is written but not pronounced, and the next letter takes shadda: <span class="ar">الشَّمْس</span> = ash-shams, not al-shams.</p>
  <p>Before the other 14 <b>"moon letters"</b> the lām is pronounced normally: <span class="ar">القَمَر</span> = al-qamar.</p>
  <p>Also: the alif of ال is a <b>hamzat waṣl</b> — dropped in connected speech: <span class="ar">فِي الْبَيْتِ</span> = fī l-bayti.</p>`,
  examples:[
    { ar:'وَالشَّمْسِ وَضُحَاهَا . وَالْقَمَرِ إِذَا تَلَاهَا', en:'wash-shamsi (sun letter ش assimilates) … wal-qamari (moon letter ق does not).', src:'Qur\'an 91:1–2' },
    { ar:'الرَّحْمَٰنِ الرَّحِيمِ', en:'ar-raḥmāni r-raḥīm — ر is a sun letter.', src:'Qur\'an 1:3' }
  ],
  quiz:[
    { q:'الشَّمْس is pronounced:', c:['ash-shams','al-shams','a-shams','il-shams'], a:0, x:'ش is a sun letter; the lām assimilates.' },
    { q:'القَمَر is pronounced:', c:['al-qamar','aq-qamar','a-qamar','el-kamar'], a:0, x:'ق is a moon letter; lām stays.' },
    { q:'How do you spot assimilation in vocalized text?', c:['shadda on the letter after ال','a dot over the lām','the lām is deleted in writing','tanwīn appears'], a:0, x:'الرَّحِيم: shadda on ر shows the lām merged.' },
    { q:'Which of these begins with a sun letter?', c:['نور','قمر','كتاب','باب'], a:0, x:'ن is a sun letter: النُّور = an-nūr.' },
    { q:'In فِي الْبَيْتِ, the alif of ال is:', c:['silent (hamzat waṣl)','pronounced "a"','pronounced "i"','a long vowel'], a:0, x:'fī l-bayti — connecting alif drops in flow.' }
  ]},

{ id:'r8', track:'r', order:8, xp:30, title:'First Full Readings', ar:'قراءات أولى',
  prereq:['r7'],
  content:`<p>You now know everything needed to read fully vocalized Arabic. Read these aloud, slowly, right to left, mark by mark:</p>
  <p class="ar big centered">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
  <p class="centered"><i>bismi llāhi r-raḥmāni r-raḥīm</i> — In the name of God, the Most Merciful, the Most Compassionate. (Qur'an 1:1)</p>
  <p class="ar big centered">الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</p>
  <p class="centered"><i>al-ḥamdu li-llāhi rabbi l-ʿālamīn</i> — All praise belongs to God, Lord of the worlds. (Qur'an 1:2)</p>
  <p>Checklist while reading: sun-letter assimilation (الرَّحْمَٰن), shadda (رَبِّ), long vowels (الْعَالَمِينَ), dropped waṣl-alifs inside the flow.</p>
  <p>From here on, every lesson uses real classical text. Use the <b>Reader</b> tab to practice these passages with the tashkīl toggle, and its <b>Read aloud & check</b> button to have the app listen to you.</p>`,
  examples:[
    { ar:'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', en:'qul aʿūdhu bi-rabbi l-falaq — "Say: I seek refuge in the Lord of the daybreak."', src:'Qur\'an 113:1' },
    { ar:'وَالْعَصْرِ . إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', en:'wal-ʿaṣr, inna l-insāna la-fī khusr.', src:'Qur\'an 103:1–2' }
  ],
  quiz:[
    { q:'In رَبِّ الْعَالَمِينَ, the mark under ب of رَبِّ is:', c:['shadda + kasra','fatḥa','sukūn','tanwīn'], a:0, x:'rabbi — doubled b with i.' },
    { q:'Why is الرَّحْمَٰنِ read "ar-raḥmān" and not "al-raḥmān"?', c:['ر is a sun letter','ح is emphatic','poetic license','the ل is missing'], a:0, x:'Sun-letter assimilation.' },
    { q:'الْعَالَمِينَ contains how many long vowels?', c:['2 (ā and ī)','1','0','5'], a:0, x:'ʿā-la-mīn: long ā, short a, long ī.' },
    { q:'بِسْمِ is read "bismi" — the alif of اسم is:', c:['a dropped connecting alif','pronounced "a"','a long vowel','hamza'], a:0, x:'hamzat waṣl vanishes after بِـ.' }
  ]},

/* ══════════ TRACK V — VOCABULARY ══════════ */
{ id:'v1', track:'v', order:1, xp:20, title:'God, Faith & Worship', ar:'ألفاظ العقيدة والعبادة', prereq:['r4'], deck:'faith',
  content:`<p>A few hundred words cover most of what you will read in the Qur'an and early prose. This track drills them with spaced repetition — the <b>Review</b> tab schedules each word just before you would forget it.</p>
  <p>This deck: the vocabulary of faith — <span class="ar">الله، رَبّ، إِلَٰه، عَبْد، صَلاة، إِيمَان…</span></p>
  <p>Completing this lesson adds the deck to your review queue. Words you already know will disappear quickly; struggle words return often.</p>`,
  examples:[
    { ar:'إِيَّاكَ نَعْبُدُ', en:'"You alone we worship" — from ع-ب-د, the root of عَبْد (servant) and عِبَادَة (worship).', src:'Qur\'an 1:5' }
  ],
  quiz:[
    { q:'رَبّ means:', c:['Lord, master, sustainer','prophet','book','prayer'], a:0, x:'rabb — as in رَبِّ الْعَالَمِينَ.' },
    { q:'عَبْد means:', c:['servant, slave','worship','mosque','master'], a:0, x:'ʿabd; ʿibāda is the act of worship.' },
    { q:'The root of إِيمَان (faith) is:', c:['أ-م-ن','ع-ل-م','ك-ت-ب','س-ل-م'], a:0, x:'ʾ-m-n also gives أَمِنَ "be safe" and مُؤْمِن "believer".' },
    { q:'دِين in مَالِكِ يَوْمِ الدِّينِ means:', c:['judgment / recompense','religion only','debt','world'], a:0, x:'yawm ad-dīn = Day of Judgment; the root also gives "debt/obligation".' }
  ]},

{ id:'v2', track:'v', order:2, xp:20, title:'People & Family', ar:'الناس والأهل', prereq:['v1'], deck:'people',
  content:`<p>Words for human beings and kinship saturate classical narrative and poetry: <span class="ar">إِنْسَان، رَجُل، امْرَأَة، أَب، أُمّ، ابْن، أَخ، قَوْم، نَاس…</span></p>
  <p>Note the irregular but crucial family words: <span class="ar">أَب</span> (father) becomes <span class="ar">أَبُو / أَبَا / أَبِي</span> when possessing — the famous "five nouns" that show case with long vowels.</p>`,
  examples:[
    { ar:'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', en:'"Indeed mankind is in loss" — al-insān, the human being.', src:'Qur\'an 103:2' },
    { ar:'رُبَّ أَخٍ لَكَ لَمْ تَلِدْهُ أُمُّكَ', en:'"Many a brother you have whom your mother did not bear" — classical proverb on friendship.', src:'Arabic proverb' }
  ],
  quiz:[
    { q:'امْرَأَة means:', c:['woman','man','mother','girl'], a:0, x:'imraʾa; رَجُل is man.' },
    { q:'قَوْم means:', c:['a people, folk','a mountain','food','strength'], a:0, x:'qawm — constant in Qur\'anic narrative: قَوْمِ نُوحٍ etc.' },
    { q:'أَخٍ in the proverb رُبَّ أَخٍ لَكَ means:', c:['brother','friend only','cousin','neighbor'], a:0, x:'akh — here "a true brother" figuratively.' },
    { q:'ابْن means:', c:['son','father','name','tribe'], a:0, x:'ibn — as in ابْنُ مَالِك, Ibn Mālik.' }
  ]},

{ id:'v3', track:'v', order:3, xp:20, title:'The Natural World', ar:'الطبيعة والكون', prereq:['v1'], deck:'nature',
  content:`<p>Sky, earth, night, day, sun, moon, water, wind — the imagery of the Qur'an and of pre-Islamic poetry alike: <span class="ar">سَمَاء، أَرْض، شَمْس، قَمَر، لَيْل، نَهَار، مَاء، رِيح، جَبَل، بَحْر، نَجْم…</span></p>
  <p>These words are ancient, stable, and everywhere. The oath-clusters that open many sūras are built from them: <span class="ar">وَالشَّمْسِ وَضُحَاهَا</span>, <span class="ar">وَاللَّيْلِ إِذَا يَغْشَى</span>.</p>`,
  examples:[
    { ar:'لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ', en:'"To Him belongs what is in the heavens and what is on earth."', src:'Qur\'an 2:255' },
    { ar:'وَاللَّيْلِ إِذَا يَغْشَى . وَالنَّهَارِ إِذَا تَجَلَّى', en:'"By the night as it covers, and the day as it reveals."', src:'Qur\'an 92:1–2' }
  ],
  quiz:[
    { q:'سَمَاء means:', c:['sky, heaven','sea','star','earth'], a:0, x:'samāʾ; plural سَمَاوَات.' },
    { q:'Which pair is "night / day"?', c:['لَيْل / نَهَار','شَمْس / قَمَر','مَاء / رِيح','أَرْض / جَبَل'], a:0, x:'layl / nahār.' },
    { q:'مَاء means:', c:['water','wind','rain cloud','light'], a:0, x:'māʾ — وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ.' },
    { q:'بَحْر means:', c:['sea','river','desert','mountain'], a:0, x:'baḥr; جَبَل is mountain.' }
  ]},

{ id:'v4', track:'v', order:4, xp:25, title:'Core Verbs I — Being & Doing', ar:'أفعال أساسية ١', prereq:['v1','s2'], deck:'verbs1',
  content:`<p>A handful of verbs carry classical Arabic. The absolute essentials: <span class="ar">قَالَ</span> (say — the single most frequent verb in the Qur'an), <span class="ar">كَانَ</span> (be), <span class="ar">جَعَلَ</span> (make/place), <span class="ar">عَلِمَ</span> (know), <span class="ar">آمَنَ</span> (believe), <span class="ar">عَمِلَ</span> (do/work), <span class="ar">خَلَقَ</span> (create), <span class="ar">جَاءَ</span> (come), <span class="ar">رَأَى</span> (see), <span class="ar">سَمِعَ</span> (hear).</p>
  <p><span class="ar">قَالَ</span> and its derivatives occur well over a thousand times in the Qur'an. Knowing قَالَ، قَالُوا، قُلْ، يَقُولُ instantly unlocks vast amounts of text.</p>`,
  examples:[
    { ar:'وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً', en:'"And when your Lord said to the angels: I am placing a successor on the earth."', src:'Qur\'an 2:30' },
    { ar:'خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ', en:'"He created man from a clinging clot."', src:'Qur\'an 96:2' }
  ],
  quiz:[
    { q:'The most frequent verb in the Qur\'an is:', c:['قَالَ (say)','كَتَبَ (write)','ذَهَبَ (go)','أَكَلَ (eat)'], a:0, x:'qāla and its forms occur well over a thousand times.' },
    { q:'خَلَقَ means:', c:['he created','he destroyed','he wrote','he traveled'], a:0, x:'khalaqa — root of خَالِق (Creator) and خَلْق (creation).' },
    { q:'عَلِمَ means:', c:['he knew','he taught','he asked','he forgot'], a:0, x:'ʿalima — root of عِلْم (knowledge) and عَالِم (scholar).' },
    { q:'قَالُوا means:', c:['they said','he said','say!','she says'], a:0, x:'qālū — the -ū suffix marks masculine plural.' }
  ]},

{ id:'v5', track:'v', order:5, xp:25, title:'Core Verbs II — Motion & Sense', ar:'أفعال أساسية ٢', prereq:['v4'], deck:'verbs2',
  content:`<p>Second tier of indispensable verbs: <span class="ar">ذَهَبَ</span> (go), <span class="ar">دَخَلَ</span> (enter), <span class="ar">خَرَجَ</span> (exit), <span class="ar">رَجَعَ</span> (return), <span class="ar">أَخَذَ</span> (take), <span class="ar">أَعْطَى</span> (give), <span class="ar">وَجَدَ</span> (find), <span class="ar">نَزَلَ</span> (descend), <span class="ar">كَتَبَ</span> (write), <span class="ar">قَرَأَ</span> (read/recite), <span class="ar">عَبَدَ</span> (worship), <span class="ar">هَدَى</span> (guide).</p>
  <p>Note <span class="ar">نَزَلَ</span>: revelation "descends" — hence <span class="ar">أَنْزَلَ</span> "He sent down" and <span class="ar">تَنْزِيل</span> "revelation".</p>`,
  examples:[
    { ar:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', en:'"Recite in the name of your Lord who created" — the first revelation. iqraʾ is the command of قَرَأَ.', src:'Qur\'an 96:1' },
    { ar:'مَنْ جَدَّ وَجَدَ', en:'"Whoever strives, finds" — proverb built on وَجَدَ.', src:'Arabic proverb' }
  ],
  quiz:[
    { q:'وَجَدَ means:', c:['he found','he lost','he went','he took'], a:0, x:'wajada — as in مَنْ جَدَّ وَجَدَ.' },
    { q:'اقْرَأْ is the command form of:', c:['قَرَأَ (read/recite)','خَرَجَ (exit)','كَتَبَ (write)','قَرُبَ (be near)'], a:0, x:'iqraʾ! — "Recite!"' },
    { q:'أَنْزَلَ means:', c:['he sent down','he lifted up','he wrote','he entered'], a:0, x:'Form IV of نَزَلَ: to make descend — used of revelation.' },
    { q:'Which pair means "enter / exit"?', c:['دَخَلَ / خَرَجَ','ذَهَبَ / رَجَعَ','أَخَذَ / أَعْطَى','نَزَلَ / صَعِدَ'], a:0, x:'dakhala / kharaja.' }
  ]},

{ id:'v6', track:'v', order:6, xp:25, title:'Particles & Pronouns', ar:'الحروف والضمائر', prereq:['v2'], deck:'particles',
  content:`<p>The little words are half of every sentence. Master these and Arabic text stops looking like a wall:</p>
  <table><tr><th>Word</th><th>Meaning</th></tr>
  <tr><td class="ar">فِي</td><td>in</td></tr><tr><td class="ar">مِنْ</td><td>from, of</td></tr>
  <tr><td class="ar">إِلَى</td><td>to, toward</td></tr><tr><td class="ar">عَلَى</td><td>on, upon</td></tr>
  <tr><td class="ar">بِـ</td><td>with, by, in</td></tr><tr><td class="ar">لِـ</td><td>for, belonging to</td></tr>
  <tr><td class="ar">وَ</td><td>and</td></tr><tr><td class="ar">فَ</td><td>then, so</td></tr>
  <tr><td class="ar">لَا / مَا</td><td>not</td></tr><tr><td class="ar">إِنَّ</td><td>indeed</td></tr>
  <tr><td class="ar">الَّذِي</td><td>who / which</td></tr><tr><td class="ar">هُوَ / هِيَ</td><td>he / she</td></tr>
  <tr><td class="ar">أَنَا / أَنْتَ</td><td>I / you</td></tr><tr><td class="ar">هُمْ / نَحْنُ</td><td>they / we</td></tr></table>`,
  examples:[
    { ar:'قُلْ هُوَ اللَّهُ أَحَدٌ', en:'huwa — "He". Say: He is God, One.', src:'Qur\'an 112:1' },
    { ar:'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', en:'inna — "indeed": Indeed God is with the patient.', src:'Qur\'an 2:153' }
  ],
  quiz:[
    { q:'عَلَى means:', c:['on, upon','under','from','with'], a:0, x:'ʿalā — نُورٌ عَلَى نُورٍ "light upon light".' },
    { q:'إِنَّ at the start of a sentence adds:', c:['emphasis — "indeed, truly"','negation','a question','future tense'], a:0, x:'inna emphasizes: إِنَّ اللهَ مَعَ الصَّابِرِينَ.' },
    { q:'نَحْنُ means:', c:['we','they','you (pl.)','she'], a:0, x:'naḥnu.' },
    { q:'الَّذِي means:', c:['who / which (masc.)','where','when','why'], a:0, x:'alladhī — the relative pronoun.' },
    { q:'The one-letter prefix بِـ means:', c:['with / by / in','and','for','not'], a:0, x:'bi- : بِسْمِ اللهِ "in/with the name of God".' }
  ]},

/* ══════════ TRACK S — ṢARF (MORPHOLOGY) ══════════ */
{ id:'s1', track:'s', order:1, xp:25, title:'The Root System', ar:'الجذر والميزان', prereq:['r6'],
  content:`<p>Nearly every Arabic word grows from a <b>three-consonant root</b> carrying a core meaning. From <span class="ar">ك-ت-ب</span> ("writing"):</p>
  <table><tr><th>Word</th><th>Meaning</th><th>Pattern</th></tr>
  <tr><td class="ar">كَتَبَ</td><td>he wrote</td><td class="ar">فَعَلَ</td></tr>
  <tr><td class="ar">كِتَاب</td><td>book</td><td class="ar">فِعَال</td></tr>
  <tr><td class="ar">كَاتِب</td><td>writer</td><td class="ar">فَاعِل</td></tr>
  <tr><td class="ar">مَكْتُوب</td><td>written</td><td class="ar">مَفْعُول</td></tr>
  <tr><td class="ar">مَكْتَب</td><td>desk/office</td><td class="ar">مَفْعَل</td></tr>
  <tr><td class="ar">مَكْتَبَة</td><td>library</td><td class="ar">مَفْعَلَة</td></tr></table>
  <p>Grammarians name patterns using the model root <span class="ar">ف-ع-ل</span> ("doing"): ف = 1st root letter, ع = 2nd, ل = 3rd. This "scale" (<b>الميزان الصرفي</b>) is the single most powerful idea in Arabic: <b>know the pattern and you can vowel — and often translate — a word you have never seen.</b></p>`,
  examples:[
    { ar:'ع-ل-م ← عَلِمَ، عِلْم، عَالِم، مَعْلُوم، تَعْلِيم', en:'One root ("knowing") → knew, knowledge, scholar, known, teaching.', src:'' },
    { ar:'س-ج-د ← سَجَدَ، مَسْجِد، سُجُود', en:'"prostrating" → he prostrated, mosque (place of prostration), prostration.', src:'' }
  ],
  quiz:[
    { q:'Most Arabic words are built from a root of:', c:['3 consonants','2 vowels','4 syllables','5 letters'], a:0, x:'Triliteral roots dominate; a minority have 4.' },
    { q:'On the scale ف-ع-ل, the pattern of كَاتِب is:', c:['فَاعِل','مَفْعُول','فِعَال','فَعَلَ'], a:0, x:'fāʿil — the doer pattern: writer.' },
    { q:'مَسْجِد (mosque) relates to سَجَدَ (prostrate) as:', c:['place where the action happens','opposite meaning','plural','diminutive'], a:0, x:'maCCiC/maCCaC is the place-pattern.' },
    { q:'The pattern مَفْعُول generally means:', c:['the thing acted upon (written, known…)','the doer','the place','the tool'], a:0, x:'maktūb = written; maʿlūm = known.' },
    { q:'The root of عَالِم، عِلْم، تَعْلِيم is:', c:['ع-ل-م','ع-م-ل','ك-ل-م','ل-ع-م'], a:0, x:'ʿ-l-m, "knowing". Order matters: ع-م-ل is "doing/working".' }
  ]},

{ id:'s2', track:'s', order:2, xp:30, title:'The Past Tense', ar:'الفعل الماضي', prereq:['s1'],
  content:`<p>The past (<b>الماضي</b>) conjugates with <b>suffixes</b>. Model: <span class="ar">كَتَبَ</span> "to write".</p>
  <table><tr><th>Person</th><th>Arabic</th><th>Reading</th></tr>
  <tr><td>he</td><td class="ar">كَتَبَ</td><td>kataba</td></tr>
  <tr><td>she</td><td class="ar">كَتَبَتْ</td><td>katabat</td></tr>
  <tr><td>they (m.)</td><td class="ar">كَتَبُوا</td><td>katabū</td></tr>
  <tr><td>they (f.)</td><td class="ar">كَتَبْنَ</td><td>katabna</td></tr>
  <tr><td>you (m.)</td><td class="ar">كَتَبْتَ</td><td>katabta</td></tr>
  <tr><td>you (f.)</td><td class="ar">كَتَبْتِ</td><td>katabti</td></tr>
  <tr><td>you (pl.)</td><td class="ar">كَتَبْتُمْ</td><td>katabtum</td></tr>
  <tr><td>I</td><td class="ar">كَتَبْتُ</td><td>katabtu</td></tr>
  <tr><td>we</td><td class="ar">كَتَبْنَا</td><td>katabnā</td></tr>
  <tr><td>they two</td><td class="ar">كَتَبَا</td><td>katabā</td></tr></table>
  <p>The suffix tells you the subject — Arabic often omits pronouns entirely: <span class="ar">ذَهَبْتُ</span> alone means "I went".</p>`,
  examples:[
    { ar:'آمَنُوا وَعَمِلُوا الصَّالِحَاتِ', en:'"they believed and did righteous deeds" — the ـُوا marks "they".', src:'Qur\'an 103:3' },
    { ar:'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', en:'aʿṭaynā-ka: "We gave you" — ـنَا = we, ـكَ = you.', src:'Qur\'an 108:1' }
  ],
  quiz:[
    { q:'كَتَبْتُ means:', c:['I wrote','he wrote','she wrote','they wrote'], a:0, x:'-tu = I.' },
    { q:'The ending ـُوا in عَمِلُوا marks:', c:['they (masc. plural)','he','you (fem.)','we'], a:0, x:'-ū: ʿamilū "they did".' },
    { q:'"She said" is:', c:['قَالَتْ','قَالَ','قُلْتَ','قَالُوا'], a:0, x:'qālat — the -at suffix.' },
    { q:'كَتَبْنَا means:', c:['we wrote','they two wrote','you all wrote','she wrote'], a:0, x:'-nā = we.' },
    { q:'Why can Arabic drop subject pronouns?', c:['the verb suffix already encodes the subject','pronouns are impolite','word order shows it','it cannot'], a:0, x:'dhahabtu = "I went" — the ت says "I".' }
  ]},

{ id:'s3', track:'s', order:3, xp:30, title:'The Present Tense', ar:'الفعل المضارع', prereq:['s2'],
  content:`<p>The present/ongoing (<b>المضارع</b>) uses <b>prefixes</b> (plus some suffixes):</p>
  <table><tr><th>Person</th><th>Arabic</th><th>Reading</th></tr>
  <tr><td>he</td><td class="ar">يَكْتُبُ</td><td>yaktubu</td></tr>
  <tr><td>she / you (m.)</td><td class="ar">تَكْتُبُ</td><td>taktubu</td></tr>
  <tr><td>I</td><td class="ar">أَكْتُبُ</td><td>aktubu</td></tr>
  <tr><td>we</td><td class="ar">نَكْتُبُ</td><td>naktubu</td></tr>
  <tr><td>they (m.)</td><td class="ar">يَكْتُبُونَ</td><td>yaktubūna</td></tr>
  <tr><td>you (f. sg.)</td><td class="ar">تَكْتُبِينَ</td><td>taktubīna</td></tr></table>
  <p>The prefixes are <span class="ar">أ ن ي ت</span> — memorized as <span class="ar">أَنَيْتُ</span>. The middle vowel varies by verb (yaktubu, yaḍribu, yaftaḥu) and must be learned per verb — dictionaries list it.</p>
  <p>Future = مضارع + <span class="ar">سَـ</span> or <span class="ar">سَوْفَ</span>: <span class="ar">سَيَكْتُبُ</span> "he will write".</p>`,
  examples:[
    { ar:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', en:'naʿbudu, nastaʿīnu — the نـ prefix: "we worship… we seek help".', src:'Qur\'an 1:5' },
    { ar:'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', en:'yuwaswisu — "who whispers in the breasts of mankind".', src:'Qur\'an 114:5' }
  ],
  quiz:[
    { q:'يَكْتُبُ means:', c:['he writes / is writing','he wrote','write!','it was written'], a:0, x:'ya- prefix = he, present.' },
    { q:'The present-tense prefixes are:', c:['أ ن ي ت','ب ت ث ج','س ش ص ض','م ن ه و'], a:0, x:'Remembered as أَنَيْتُ.' },
    { q:'نَعْبُدُ means:', c:['we worship','I worship','they worship','worship!'], a:0, x:'na- = we.' },
    { q:'"He will write" is:', c:['سَيَكْتُبُ','كَتَبَ','اُكْتُبْ','كَاتِب'], a:0, x:'sa- + present = future.' },
    { q:'تَكْتُبُ can mean:', c:['both "she writes" and "you (m.) write"','only "she writes"','only "they write"','"I write"'], a:0, x:'ta- is shared; context decides.' }
  ]},

{ id:'s4', track:'s', order:4, xp:25, title:'Command & Prohibition', ar:'الأمر والنهي', prereq:['s3'],
  content:`<p>The <b>imperative (الأمر)</b> is built from the present tense: drop the prefix; if the result starts with a consonant cluster, add a helping alif: <span class="ar">تَكْتُبُ → اُكْتُبْ</span> "write!"</p>
  <table><tr><th>Verb</th><th>Command</th><th>Meaning</th></tr>
  <tr><td class="ar">قَرَأَ</td><td class="ar">اِقْرَأْ</td><td>read! / recite!</td></tr>
  <tr><td class="ar">قَالَ</td><td class="ar">قُلْ</td><td>say!</td></tr>
  <tr><td class="ar">ذَهَبَ</td><td class="ar">اِذْهَبْ</td><td>go!</td></tr>
  <tr><td class="ar">عَبَدَ</td><td class="ar">اُعْبُدْ</td><td>worship!</td></tr></table>
  <p><b>Prohibition (النهي)</b>: <span class="ar">لَا</span> + jussive present: <span class="ar">لَا تَخَفْ</span> "do not fear!", <span class="ar">لَا تَحْزَنْ</span> "do not grieve!"</p>
  <p><span class="ar">قُلْ</span> "Say!" opens many sūras and occurs over 300 times in the Qur'an.</p>`,
  examples:[
    { ar:'اقْرَأْ بِاسْمِ رَبِّكَ', en:'"Recite in the name of your Lord!" — the first word revealed.', src:'Qur\'an 96:1' },
    { ar:'لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا', en:'"Do not grieve; indeed God is with us."', src:'Qur\'an 9:40' },
    { ar:'قُلْ هُوَ اللَّهُ أَحَدٌ', en:'"Say: He is God, One."', src:'Qur\'an 112:1' }
  ],
  quiz:[
    { q:'The command "Say!" is:', c:['قُلْ','قَالَ','يَقُولُ','قَوْل'], a:0, x:'qul — from qāla, the weak middle و drops.' },
    { q:'لَا تَحْزَنْ means:', c:['do not grieve','he does not grieve','they grieved','grief'], a:0, x:'lā + jussive = prohibition.' },
    { q:'Commands are formed from which tense?', c:['the present (مضارع)','the past (ماضي)','the participle','the maṣdar'], a:0, x:'Drop the prefix of the muḍāriʿ, add helping alif if needed.' },
    { q:'اِذْهَبْ means:', c:['go!','he went','going','I go'], a:0, x:'idhhab — imperative of ذَهَبَ.' }
  ]},

{ id:'s5', track:'s', order:5, xp:30, title:'Derived Forms II–IV', ar:'أوزان المزيد ١', prereq:['s3'],
  content:`<p>Arabic stretches each root through <b>ten standard verb forms</b> (أوزان). Forms II–IV modify the base meaning systematically:</p>
  <table><tr><th>Form</th><th>Pattern</th><th>Typical sense</th><th>Example</th></tr>
  <tr><td>II</td><td class="ar">فَعَّلَ</td><td>intensive / causative</td><td class="ar">عَلَّمَ he taught (عَلِمَ he knew)</td></tr>
  <tr><td>III</td><td class="ar">فَاعَلَ</td><td>doing to/with someone</td><td class="ar">قَاتَلَ he fought (someone)</td></tr>
  <tr><td>IV</td><td class="ar">أَفْعَلَ</td><td>causative</td><td class="ar">أَنْزَلَ he sent down (نَزَلَ it descended)</td></tr></table>
  <p>Recognizing the form gives the vowels <b>and</b> the grammatical flavor of unseen words — the core skill for unvocalized reading. Present tense: II <span class="ar">يُعَلِّمُ</span>, III <span class="ar">يُقَاتِلُ</span>, IV <span class="ar">يُنْزِلُ</span> — all with ḍamma on the prefix.</p>`,
  examples:[
    { ar:'الَّذِي عَلَّمَ بِالْقَلَمِ . عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ', en:'"Who taught by the pen; taught man what he did not know" — Form II عَلَّمَ vs Form I يَعْلَمْ side by side.', src:'Qur\'an 96:4–5' },
    { ar:'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', en:'"We sent it down on the Night of Decree" — Form IV of نَزَلَ.', src:'Qur\'an 97:1' }
  ],
  quiz:[
    { q:'عَلَّمَ (Form II) means:', c:['he taught','he knew','he learned','he asked'], a:0, x:'Doubling the middle root letter makes "know" causative: teach.' },
    { q:'Form IV of نَزَلَ "descend" is أَنْزَلَ, meaning:', c:['he sent down','he climbed','he stayed','it rained'], a:0, x:'aCCaCa causative: make descend.' },
    { q:'The pattern فَاعَلَ (Form III) typically implies:', c:['action directed at someone','place','passive','smallness'], a:0, x:'qātala "fight someone", kātaba "correspond with".' },
    { q:'The Form II pattern is:', c:['فَعَّلَ','أَفْعَلَ','اِفْتَعَلَ','تَفَاعَلَ'], a:0, x:'Shadda on the middle radical.' },
    { q:'In 96:5, عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ contrasts:', c:['Form II "taught" with Form I "know"','past with future','singular with plural','active with passive'], a:0, x:'ʿallama (taught) vs yaʿlam (know).' }
  ]},

{ id:'s6', track:'s', order:6, xp:30, title:'Derived Forms V–X', ar:'أوزان المزيد ٢', prereq:['s5'],
  content:`<p>The remaining common forms:</p>
  <table><tr><th>Form</th><th>Pattern</th><th>Typical sense</th><th>Example</th></tr>
  <tr><td>V</td><td class="ar">تَفَعَّلَ</td><td>reflexive of II</td><td class="ar">تَعَلَّمَ he learned</td></tr>
  <tr><td>VI</td><td class="ar">تَفَاعَلَ</td><td>mutual action</td><td class="ar">تَوَاصَوْا they exhorted one another</td></tr>
  <tr><td>VII</td><td class="ar">اِنْفَعَلَ</td><td>passive-like</td><td class="ar">اِنْكَسَرَ it broke</td></tr>
  <tr><td>VIII</td><td class="ar">اِفْتَعَلَ</td><td>reflexive / middle</td><td class="ar">اِسْتَمَعَ he listened</td></tr>
  <tr><td>X</td><td class="ar">اِسْتَفْعَلَ</td><td>seeking / considering</td><td class="ar">اِسْتَغْفَرَ he sought forgiveness</td></tr></table>
  <p>Form X's <span class="ar">اِسْتَـ</span> prefix means "to seek X": <span class="ar">اِسْتَعَانَ</span> seek help, <span class="ar">اِسْتَغْفَرَ</span> seek forgiveness — as in <span class="ar">نَسْتَعِينُ</span> of al-Fātiḥa.</p>`,
  examples:[
    { ar:'وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', en:'Form VI: "and exhorted one another to truth… to patience" — mutual action.', src:'Qur\'an 103:3' },
    { ar:'إِيَّاكَ نَسْتَعِينُ', en:'Form X of ع-و-ن "help": "You alone we ask for help."', src:'Qur\'an 1:5' }
  ],
  quiz:[
    { q:'تَعَلَّمَ (Form V) means:', c:['he learned','he taught','he wrote','he searched'], a:0, x:'Reflexive of ʿallama "teach": teach oneself → learn.' },
    { q:'The Form X prefix اِسْتَـ typically means:', c:['to seek or ask for','to refuse','place of','doer of'], a:0, x:'istaghfara = seek forgiveness; istaʿāna = seek help.' },
    { q:'تَوَاصَوْا (Form VI) implies:', c:['mutual/reciprocal action','a single actor','passive voice','future'], a:0, x:'taCāCaCa: doing to one another.' },
    { q:'نَسْتَعِينُ is Form:', c:['X','II','V','VII'], a:0, x:'na-sta-ʿīnu — the ست of Form X.' },
    { q:'اِنْكَسَرَ (Form VII) means:', c:['it broke / got broken','he broke it','breaking','unbreakable'], a:0, x:'inCaCaCa is passive-like: the vase broke.' }
  ]},

{ id:'s7', track:'s', order:7, xp:25, title:'Participles & Maṣdar', ar:'المشتقات والمصدر', prereq:['s5'],
  content:`<p>Three noun-derivatives exist for every verb:</p>
  <table><tr><th>Derivative</th><th>Form I pattern</th><th>Example</th></tr>
  <tr><td>Active participle (doer)</td><td class="ar">فَاعِل</td><td class="ar">عَابِد worshipper</td></tr>
  <tr><td>Passive participle (done-to)</td><td class="ar">مَفْعُول</td><td class="ar">مَعْبُود worshipped</td></tr>
  <tr><td>Maṣdar (verbal noun)</td><td class="ar">varies</td><td class="ar">عِبَادَة worship</td></tr></table>
  <p>For derived forms, participles use مُـ + the present-tense skeleton: active with kasra (<span class="ar">مُعَلِّم</span> teacher), passive with fatḥa (<span class="ar">مُعَلَّم</span> taught). This one rule decodes thousands of words: <span class="ar">مُسْلِم</span> (one who submits, Form IV active), <span class="ar">مُؤْمِن</span> (believer), <span class="ar">مُتَّقِي</span> (God-conscious).</p>
  <p>Maṣdars of derived forms are regular: II <span class="ar">تَفْعِيل</span>, III <span class="ar">مُفَاعَلَة</span>, IV <span class="ar">إِفْعَال</span>, X <span class="ar">اِسْتِفْعَال</span>.</p>`,
  examples:[
    { ar:'مَالِكِ يَوْمِ الدِّينِ', en:'mālik — active participle of ملك: "Master of the Day of Judgment".', src:'Qur\'an 1:4' },
    { ar:'هُدًى لِلْمُتَّقِينَ', en:'al-muttaqīn — Form VIII active participle: "the God-conscious".', src:'Qur\'an 2:2' }
  ],
  quiz:[
    { q:'The pattern فَاعِل means:', c:['the one doing the action','the thing done','the place','the time'], a:0, x:'kātib writer, ʿābid worshipper, ṣābir patient one.' },
    { q:'مُعَلِّم vs مُعَلَّم:', c:['teacher vs taught — kasra vs fatḥa on the middle','identical','place vs time','singular vs plural'], a:0, x:'mu-ʿallim (active) vs mu-ʿallam (passive).' },
    { q:'The maṣdar is:', c:['the verbal noun (the action itself)','the doer','a command','a plural'], a:0, x:'ʿibāda "worship", taʿlīm "teaching".' },
    { q:'مُسْلِم literally means:', c:['one who submits (Form IV active participle)','submitted-to','submission','place of submitting'], a:0, x:'mu-slim from aslama "to submit".' },
    { q:'The maṣdar of Form II فَعَّلَ is:', c:['تَفْعِيل','إِفْعَال','مُفَاعَلَة','اِسْتِفْعَال'], a:0, x:'taʿlīm, tanzīl, takbīr…' }
  ]},

{ id:'s8', track:'s', order:8, xp:30, title:'Broken Plurals', ar:'جموع التكسير', prereq:['s7'],
  content:`<p>Arabic has "sound" plurals with suffixes (<span class="ar">مُسْلِمُونَ، مُسْلِمَات</span>) — but most nouns take <b>broken plurals</b>: the word's internal shape changes. Common patterns:</p>
  <table><tr><th>Singular</th><th>Plural</th><th>Pattern</th></tr>
  <tr><td class="ar">كِتَاب book</td><td class="ar">كُتُب</td><td class="ar">فُعُل</td></tr>
  <tr><td class="ar">رَجُل man</td><td class="ar">رِجَال</td><td class="ar">فِعَال</td></tr>
  <tr><td class="ar">قَلْب heart</td><td class="ar">قُلُوب</td><td class="ar">فُعُول</td></tr>
  <tr><td class="ar">عَالِم scholar</td><td class="ar">عُلَمَاء</td><td class="ar">فُعَلَاء</td></tr>
  <tr><td class="ar">مَسْجِد mosque</td><td class="ar">مَسَاجِد</td><td class="ar">مَفَاعِل</td></tr>
  <tr><td class="ar">نَبِيّ prophet</td><td class="ar">أَنْبِيَاء</td><td class="ar">أَفْعِلَاء</td></tr></table>
  <p>Plurals must be learned with each noun, but the patterns recur so often that recognition becomes automatic. A key quirk: <b>non-human plurals take feminine singular agreement</b> — "the books, <i>she</i> is useful": <span class="ar">الكُتُبُ نَافِعَةٌ</span>.</p>`,
  examples:[
    { ar:'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ... لَآيَاتٍ لِأُولِي الْأَلْبَابِ', en:'āyāt (sound fem. plural), albāb "hearts/minds" (broken plural of لُبّ).', src:'Qur\'an 3:190' },
    { ar:'قُلُوبٌ / أَبْوَاب / نُجُوم', en:'qulūb hearts, abwāb doors, nujūm stars — recurring broken patterns.', src:'' }
  ],
  quiz:[
    { q:'A "broken" plural is formed by:', c:['changing the internal vowel shape','adding ـون','adding ـات','doubling the word'], a:0, x:'kitāb → kutub: the skeleton re-vowels.' },
    { q:'The plural of رَجُل (man) is:', c:['رِجَال','رَجُلُونَ','رُجُل','رَاجِل'], a:0, x:'rijāl — the فِعَال pattern.' },
    { q:'Non-human plurals agree as:', c:['feminine singular','masculine plural','dual','no agreement'], a:0, x:'الجِبَالُ عَالِيَةٌ "the mountains are high (f. sg.)".' },
    { q:'عُلَمَاء is the plural of:', c:['عَالِم scholar','عِلْم knowledge','عَلَم flag','مُعَلِّم teacher'], a:0, x:'ʿālim → ʿulamāʾ, like شُعَرَاء poets.' },
    { q:'قُلُوب (hearts) follows which pattern?', c:['فُعُول','فِعَال','أَفْعَال','مَفَاعِل'], a:0, x:'qalb → qulūb, like بَيْت → بُيُوت.' }
  ]}
];
