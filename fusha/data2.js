/* ============================================================
   FUSHA — data2.js — Lessons: Naḥw (grammar) + Qur'anic Reading
   ============================================================ */

FUSHA.lessons.push(

/* ══════════ TRACK N — NAḤW (GRAMMAR) ══════════ */
{ id:'n1', track:'n', order:1, xp:25, title:'The Nominal Sentence', ar:'الجملة الاسمية', prereq:['r7'],
  content:`<p>Arabic has two sentence types. The <b>nominal sentence (الجملة الاسمية)</b> starts with a noun and needs <b>no verb "to be"</b> in the present:</p>
  <p class="ar big centered">البَيْتُ كَبِيرٌ</p>
  <p class="centered"><i>al-baytu kabīrun</i> — The house [is] big.</p>
  <p>Its two parts: <b>المبتدأ</b> (mubtadaʾ, the subject/topic — definite, marked -u) and <b>الخبر</b> (khabar, the predicate — typically indefinite, also marked -u with tanwīn: -un).</p>
  <p>The definite/indefinite contrast does the work of "is": <span class="ar">البَيْتُ الكَبِيرُ</span> (both definite) is just a phrase, "the big house" — while <span class="ar">البَيْتُ كَبِيرٌ</span> is a complete sentence.</p>`,
  examples:[
    { ar:'اللَّهُ الصَّمَدُ', en:'allāhu ṣ-ṣamad — "God is the Eternal Refuge": mubtadaʾ + khabar.', src:'Qur\'an 112:2' },
    { ar:'العِلْمُ نُورٌ', en:'"Knowledge is light" — classical maxim, pure nominal sentence.', src:'Arabic maxim' }
  ],
  quiz:[
    { q:'A nominal sentence in the present tense needs the verb "to be":', c:['no — it is omitted','yes, always','only with plurals','only in poetry'], a:0, x:'al-ʿilmu nūrun = "knowledge [is] light".' },
    { q:'In العِلْمُ نُورٌ, the khabar (predicate) is:', c:['نُورٌ','العِلْمُ','both','neither'], a:0, x:'nūrun — indefinite, with tanwīn.' },
    { q:'البَيْتُ الكَبِيرُ (both definite) means:', c:['"the big house" — a phrase, not a sentence','"the house is big"','"a big house"','"houses are big"'], a:0, x:'Definiteness match makes it an adjective phrase.' },
    { q:'The mubtadaʾ is normally:', c:['definite and in the -u case','indefinite','a verb','in the -a case'], a:0, x:'Topics are typically definite and marfūʿ.' },
    { q:'اللَّهُ الصَّمَدُ is:', c:['a nominal sentence','a verbal sentence','a question','a command'], a:0, x:'Noun-first: mubtadaʾ + khabar.' }
  ]},

{ id:'n2', track:'n', order:2, xp:25, title:'The Verbal Sentence', ar:'الجملة الفعلية', prereq:['n1','s2'],
  content:`<p>The <b>verbal sentence (الجملة الفعلية)</b> begins with a verb. Default classical order is <b>Verb – Subject – Object</b> (VSO):</p>
  <p class="ar big centered">كَتَبَ الطَّالِبُ الدَّرْسَ</p>
  <p class="centered"><i>kataba ṭ-ṭālibu d-darsa</i> — The student wrote the lesson.</p>
  <p>Parts: <b>الفعل</b> (verb) — <b>الفاعل</b> (fāʿil, doer: -u ending) — <b>المفعول به</b> (mafʿūl bihi, object: -a ending).</p>
  <p>Because case endings mark the roles, word order can flex for emphasis — the endings, not the position, tell you who did what. This is why iʿrāb matters so much for reading unvocalized text: you must reconstruct these endings from context.</p>
  <p>Key rule: a verb before its subject stays <b>singular</b> even if the subject is plural: <span class="ar">قَالَ الرِّجَالُ</span>, not <span class="ar">قَالُوا الرِّجَالُ</span>.</p>`,
  examples:[
    { ar:'خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ', en:'khalaqa (verb) llāhu (doer, -u) s-samāwāti wa-l-arḍa (objects): "God created the heavens and the earth in truth."', src:'Qur\'an 29:44' },
    { ar:'قَالَ مُحَمَّدٌ هُوَ ابْنُ مَالِكِ', en:'"Muḥammad, who is Ibn Mālik, said…" — the Alfiyya opens with a verbal sentence.', src:'Alfiyyat Ibn Mālik, v.1' }
  ],
  quiz:[
    { q:'Default classical Arabic word order is:', c:['Verb–Subject–Object','Subject–Verb–Object','Object first','free with no default'], a:0, x:'VSO: kataba ṭ-ṭālibu d-darsa.' },
    { q:'The fāʿil (doer) takes which ending?', c:['-u (ḍamma)','-a (fatḥa)','-i (kasra)','sukūn'], a:0, x:'The doer is marfūʿ.' },
    { q:'The object (مفعول به) takes:', c:['-a (fatḥa)','-u','-i','tanwīn only'], a:0, x:'manṣūb: ad-darsa.' },
    { q:'كَتَبَ الدَّرْسَ الطَّالِبُ — who wrote?', c:['الطَّالِبُ (it has -u)','الدَّرْسَ','ambiguous','no one'], a:0, x:'Order moved, but case endings still mark doer vs object.' },
    { q:'With a plural subject after the verb, the verb is:', c:['singular','plural','dual','feminine'], a:0, x:'qāla r-rijālu — verb-first stays singular.' }
  ]},

{ id:'n3', track:'n', order:3, xp:30, title:'Iʿrāb — The Case System', ar:'الإعراب', prereq:['n2'],
  content:`<p><b>Iʿrāb</b> is the system of grammatical endings — the skeleton key of classical Arabic. Three cases for nouns:</p>
  <table><tr><th>Case</th><th>Mark</th><th>Used for</th></tr>
  <tr><td>رَفْع rafʿ</td><td>-u / -un</td><td>subjects, topics, predicates</td></tr>
  <tr><td>نَصْب naṣb</td><td>-a / -an</td><td>objects, after إِنَّ, adverbs</td></tr>
  <tr><td>جَرّ jarr</td><td>-i / -in</td><td>after prepositions, second word of iḍāfa</td></tr></table>
  <p>Sound masculine plurals and duals show case with letters instead: <span class="ar">مُسْلِمُونَ / مُسْلِمِينَ</span>, <span class="ar">كِتَابَانِ / كِتَابَيْنِ</span>.</p>
  <p>Why it matters: in unvocalized text these endings are invisible. A fluent reader <i>deduces</i> them from sentence logic — which is exactly what you will train in the "Reading without Tashkīl" track. Grammarians summarize: <b>الإعرابُ فرعُ المعنى</b> — "iʿrāb follows from meaning".</p>`,
  examples:[
    { ar:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', en:'al-ḥamdu (rafʿ, topic) li-llāhi (jarr after لِـ) rabbi (jarr, apposition) l-ʿālamīna (jarr, iḍāfa).', src:'Qur\'an 1:2' },
    { ar:'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', en:'allāha is naṣb after inna; aṣ-ṣābirīna shows jarr with ـِينَ.', src:'Qur\'an 2:153' }
  ],
  quiz:[
    { q:'The three cases are:', c:['rafʿ, naṣb, jarr','past, present, future','I, II, III','fatḥa, kasra, shadda'], a:0, x:'-u, -a, -i families.' },
    { q:'After a preposition, a noun takes:', c:['jarr (-i)','rafʿ (-u)','naṣb (-a)','sukūn'], a:0, x:'fī l-bayti, li-llāhi, ʿalā nūrin.' },
    { q:'مُسْلِمِينَ (with ī) versus مُسْلِمُونَ (with ū) differ in:', c:['case — ūna is rafʿ, īna is naṣb/jarr','number','gender','tense'], a:0, x:'Sound plurals mark case with letters.' },
    { q:'In إِنَّ اللَّهَ, why does اللَّهَ end in -a?', c:['إِنَّ puts its noun in naṣb','it is the object of a verb','error','pause form'], a:0, x:'inna and its sisters govern naṣb.' },
    { q:'Why is iʿrāb essential for unvocalized reading?', c:['you must reconstruct invisible endings from meaning','it is not','it changes the letters','only poets need it'], a:0, x:'The endings are unwritten; grammar supplies them.' }
  ]},

{ id:'n4', track:'n', order:4, xp:30, title:'Iḍāfa — Possession', ar:'الإضافة', prereq:['n3'],
  content:`<p>The <b>iḍāfa</b> construction chains two nouns as "X of Y":</p>
  <p class="ar big centered">كِتَابُ الطَّالِبِ</p>
  <p class="centered"><i>kitābu ṭ-ṭālibi</i> — the book of the student / the student's book.</p>
  <p>Rules of the first noun (المضاف): <b>no ال, no tanwīn</b> — its definiteness comes from the second noun (المضاف إليه), which is always in <b>jarr</b>.</p>
  <p>Iḍāfa chains freely: <span class="ar">بَابُ بَيْتِ صَدِيقِي</span> "the door of the house of my friend". Attached pronouns work the same: <span class="ar">كِتَابُهُ</span> "his book", <span class="ar">رَبُّنَا</span> "our Lord".</p>
  <p>The Qur'an's openings live on iḍāfa: <span class="ar">رَبِّ العَالَمِينَ، مَالِكِ يَوْمِ الدِّينِ، بِسْمِ اللهِ</span>.</p>`,
  examples:[
    { ar:'مَالِكِ يَوْمِ الدِّينِ', en:'Double iḍāfa: "Master of the Day of Judgment" — yawmi and ad-dīni both in jarr.', src:'Qur\'an 1:4' },
    { ar:'رَأْسُ الحِكْمَةِ مَخَافَةُ اللهِ', en:'"The beginning of wisdom is the fear of God" — two iḍāfas as topic and predicate.', src:'Classical maxim' }
  ],
  quiz:[
    { q:'In كِتَابُ الطَّالِبِ, the first noun must NOT take:', c:['ال or tanwīn','a case ending','a vowel','a consonant'], a:0, x:'muḍāf is stripped: definiteness flows from the second noun.' },
    { q:'The second noun of an iḍāfa is always in:', c:['jarr','rafʿ','naṣb','pause form'], a:0, x:'aṭ-ṭālibi, yawmi d-dīni.' },
    { q:'رَبُّنَا means:', c:['our Lord','the Lord','two Lords','O Lord'], a:0, x:'rabb + nā (our) — pronoun iḍāfa.' },
    { q:'مَالِكِ يَوْمِ الدِّينِ contains how many iḍāfas?', c:['2 (mālik→yawm, yawm→ad-dīn)','1','0','3'], a:0, x:'A chain: Master-of-Day-of-Judgment.' },
    { q:'"The door of the house" is:', c:['بَابُ البَيْتِ','البَابُ البَيْتِ','بَابٌ البَيْتُ','البَابُ مِنَ البَيْتِ'], a:0, x:'First noun bare, second with ال in jarr.' }
  ]},

{ id:'n5', track:'n', order:5, xp:25, title:'Adjectives & Agreement', ar:'النعت والمطابقة', prereq:['n4'],
  content:`<p>The adjective (<b>النعت / الصفة</b>) <b>follows</b> its noun and agrees in four ways: gender, number, case, and definiteness:</p>
  <table><tr><th>Phrase</th><th>Meaning</th></tr>
  <tr><td class="ar">رَجُلٌ كَرِيمٌ</td><td>a generous man</td></tr>
  <tr><td class="ar">الرَّجُلُ الكَرِيمُ</td><td>the generous man</td></tr>
  <tr><td class="ar">امْرَأَةٌ كَرِيمَةٌ</td><td>a generous woman</td></tr>
  <tr><td class="ar">رِجَالٌ كِرَامٌ</td><td>generous men</td></tr></table>
  <p>Feminine is usually marked with ة. Remember the plural quirk: non-human plurals take <b>feminine singular</b> adjectives: <span class="ar">جِبَالٌ عَالِيَةٌ</span> "high mountains".</p>
  <p>Definiteness agreement is what separates phrase from sentence: <span class="ar">الرَّجُلُ الكَرِيمُ</span> = "the generous man" (phrase) vs <span class="ar">الرَّجُلُ كَرِيمٌ</span> = "the man is generous" (sentence).</p>`,
  examples:[
    { ar:'الصِّرَاطَ الْمُسْتَقِيمَ', en:'"the straight path" — adjective matches in definiteness and case (naṣb).', src:'Qur\'an 1:6' },
    { ar:'فِي عِيشَةٍ رَاضِيَةٍ', en:'"in a pleasant life" — both indefinite, both jarr, both feminine.', src:'Qur\'an 69:21' }
  ],
  quiz:[
    { q:'Arabic adjectives come:', c:['after the noun','before the noun','anywhere','only with verbs'], a:0, x:'rajulun karīmun — noun first.' },
    { q:'Adjectives agree with the noun in:', c:['gender, number, case, definiteness','gender only','case only','nothing'], a:0, x:'Four-way agreement.' },
    { q:'"High mountains" is:', c:['جِبَالٌ عَالِيَةٌ','جِبَالٌ عَالُونَ','جِبَالٌ عَالٍ','جَبَلٌ عَالِيَةٌ'], a:0, x:'Non-human plural → feminine singular adjective.' },
    { q:'الرَّجُلُ كَرِيمٌ means:', c:['the man is generous (sentence)','the generous man (phrase)','a generous man','generosity of man'], a:0, x:'Definiteness mismatch = sentence.' },
    { q:'In الصِّرَاطَ الْمُسْتَقِيمَ both words end in -a because:', c:['the adjective copies the noun\'s naṣb case','coincidence','pause form','poetic rhyme'], a:0, x:'Case agreement.' }
  ]},

{ id:'n6', track:'n', order:6, xp:25, title:'Prepositions', ar:'حروف الجر', prereq:['n3'],
  content:`<p>The <b>ḥurūf al-jarr</b> always put the following noun in jarr (-i). The core set:</p>
  <table><tr><th>Prep.</th><th>Meaning</th><th>Example</th></tr>
  <tr><td class="ar">مِنْ</td><td>from, of</td><td class="ar">مِنَ النَّاسِ</td></tr>
  <tr><td class="ar">إِلَى</td><td>to</td><td class="ar">إِلَى المَسْجِدِ</td></tr>
  <tr><td class="ar">عَنْ</td><td>about, away from</td><td class="ar">عَنِ العِلْمِ</td></tr>
  <tr><td class="ar">عَلَى</td><td>on</td><td class="ar">عَلَى الأَرْضِ</td></tr>
  <tr><td class="ar">فِي</td><td>in</td><td class="ar">فِي البَيْتِ</td></tr>
  <tr><td class="ar">بِـ</td><td>with, by</td><td class="ar">بِالقَلَمِ</td></tr>
  <tr><td class="ar">لِـ</td><td>for, of</td><td class="ar">لِلَّهِ</td></tr>
  <tr><td class="ar">كَـ</td><td>like</td><td class="ar">كَالبَحْرِ</td></tr></table>
  <p>Grammar students memorize them through Ibn Mālik's Alfiyya: <span class="ar">هَاكَ حُرُوفَ الجَرِّ وَهْيَ: مِنْ، إِلَى، حَتَّى، خَلَا، حَاشَا، عَدَا، فِي، عَنْ، عَلَى...</span></p>
  <p>Prepositional phrases often serve as the khabar: <span class="ar">الحَمْدُ لِلَّهِ</span> "praise [belongs] to God".</p>`,
  examples:[
    { ar:'مِنَ الْجِنَّةِ وَالنَّاسِ', en:'"from jinn and mankind" — min + jarr.', src:'Qur\'an 114:6' },
    { ar:'عَلَى قَدْرِ أَهْلِ العَزْمِ تَأْتِي العَزَائِمُ', en:'"Resolves come in measure with the resolve of their people" — al-Mutanabbī; ʿalā + iḍāfa chain in jarr.', src:'al-Mutanabbī' }
  ],
  quiz:[
    { q:'A noun after any preposition is in:', c:['jarr (-i)','naṣb','rafʿ','no case'], a:0, x:'This is exceptionless.' },
    { q:'بِالقَلَمِ means:', c:['with/by the pen','on the pen','from the pen','the pen itself'], a:0, x:'bi- instrumental — عَلَّمَ بِالقَلَمِ "taught by the pen".' },
    { q:'عَنْ means:', c:['about / away from','into','under','despite'], a:0, x:'saʾala ʿan = ask about.' },
    { q:'كَالبَحْرِ means:', c:['like the sea','in the sea','the sea\'s','toward the sea'], a:0, x:'ka- = like.' },
    { q:'In الحَمْدُ لِلَّهِ the phrase لِلَّهِ functions as:', c:['the predicate (khabar)','the subject','an object','a verb'], a:0, x:'"Praise [is] to-God" — prep phrase as khabar.' }
  ]},

{ id:'n7', track:'n', order:7, xp:25, title:'Pronouns — Attached & Detached', ar:'الضمائر', prereq:['n4'],
  content:`<p>Detached (independent) pronouns: <span class="ar">أَنَا، أَنْتَ، أَنْتِ، هُوَ، هِيَ، نَحْنُ، أَنْتُمْ، هُمْ، هُنَّ</span>.</p>
  <p><b>Attached pronouns</b> (suffixes) do triple duty:</p>
  <table><tr><th>Suffix</th><th>On a noun</th><th>On a verb</th><th>On a preposition</th></tr>
  <tr><td class="ar">ـِي / ـنِي</td><td class="ar">كِتَابِي my book</td><td class="ar">خَلَقَنِي he created me</td><td class="ar">لِي for me</td></tr>
  <tr><td class="ar">ـكَ</td><td class="ar">رَبُّكَ your Lord</td><td class="ar">أَعْطَيْنَاكَ we gave you</td><td class="ar">لَكَ for you</td></tr>
  <tr><td class="ar">ـهُ</td><td class="ar">كِتَابُهُ his book</td><td class="ar">أَنْزَلْنَاهُ we sent it down</td><td class="ar">لَهُ for him</td></tr>
  <tr><td class="ar">ـهَا</td><td class="ar">أُمُّهَا her mother</td><td class="ar">رَأَيْتُهَا I saw her</td><td class="ar">فِيهَا in it (f.)</td></tr>
  <tr><td class="ar">ـهُمْ</td><td class="ar">قُلُوبُهُمْ their hearts</td><td class="ar">هَدَاهُمْ he guided them</td><td class="ar">عَلَيْهِمْ upon them</td></tr>
  <tr><td class="ar">ـنَا</td><td class="ar">رَبُّنَا our Lord</td><td class="ar">اهْدِنَا guide us!</td><td class="ar">مَعَنَا with us</td></tr></table>
  <p>Parsing suffixed words is a core reading skill: <span class="ar">أَنْزَلْنَاهُ</span> = أَنْزَلَ + نَا + هُ — "we sent it down".</p>`,
  examples:[
    { ar:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', en:'ihdi-nā: "guide us" — command + attached "us".', src:'Qur\'an 1:6' },
    { ar:'لَكُمْ دِينُكُمْ وَلِيَ دِينِ', en:'"To you your religion, and to me my religion" — four pronoun suffixes in four words.', src:'Qur\'an 109:6' }
  ],
  quiz:[
    { q:'كِتَابُهُ means:', c:['his book','her book','my book','your book'], a:0, x:'-hu = his.' },
    { q:'أَعْطَيْنَاكَ splits into:', c:['gave + we + you','gave + he + them','give! + me','gift + your'], a:0, x:'aʿṭay-nā-ka: "we gave you".' },
    { q:'"In it (feminine)" is:', c:['فِيهَا','فِيهِ','فِيكَ','فِينَا'], a:0, x:'fī + hā.' },
    { q:'اهْدِنَا means:', c:['guide us!','he guided','our guidance','they guide'], a:0, x:'Imperative ihdi + nā.' },
    { q:'قُلُوبُهُمْ means:', c:['their hearts','our hearts','two hearts','heartless'], a:0, x:'qulūb + hum.' }
  ]},

{ id:'n8', track:'n', order:8, xp:30, title:'إِنَّ & كَانَ and Their Sisters', ar:'إن وكان وأخواتهما', prereq:['n3'],
  content:`<p>Two famous families of "governors" transform the nominal sentence:</p>
  <p><b>إِنَّ and its sisters</b> (<span class="ar">إِنَّ، أَنَّ، لَكِنَّ، كَأَنَّ، لَيْتَ، لَعَلَّ</span>) put the subject in <b>naṣb</b>, keep the predicate in rafʿ:</p>
  <p class="ar centered">إِنَّ اللهَ غَفُورٌ — Indeed God (naṣb) is forgiving (rafʿ).</p>
  <p><b>كَانَ and its sisters</b> (<span class="ar">كَانَ، أَصْبَحَ، صَارَ، لَيْسَ، مَا زَالَ...</span>) do the mirror image — subject rafʿ, predicate <b>naṣb</b>:</p>
  <p class="ar centered">كَانَ اللهُ غَفُورًا — God was/is ever forgiving (naṣb).</p>
  <p>Meanings: <span class="ar">لَكِنَّ</span> but, <span class="ar">كَأَنَّ</span> as if, <span class="ar">لَيْتَ</span> if only, <span class="ar">لَعَلَّ</span> perhaps, <span class="ar">لَيْسَ</span> is not, <span class="ar">صَارَ</span> became, <span class="ar">مَا زَالَ</span> still is.</p>`,
  examples:[
    { ar:'إِنَّ اللَّهَ كَانَ غَفُورًا رَحِيمًا', en:'Both governors at once: inna → allāha (naṣb); kāna → ghafūran raḥīman (naṣb predicate).', src:'Qur\'an 4:23' },
    { ar:'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ', en:'"Indeed your enemy is the one cut off" — inna + naṣb noun.', src:'Qur\'an 108:3' }
  ],
  quiz:[
    { q:'إِنَّ puts its noun (subject) in:', c:['naṣb','rafʿ','jarr','the dual'], a:0, x:'inna llāha — with fatḥa.' },
    { q:'كَانَ puts its predicate in:', c:['naṣb','rafʿ','jarr','tanwīn only'], a:0, x:'kāna llāhu ghafūran.' },
    { q:'لَيْسَ means:', c:['is not','became','still is','if only'], a:0, x:'The negating sister of kāna.' },
    { q:'لَعَلَّ means:', c:['perhaps, in hope that','certainly','never','because'], a:0, x:'laʿallakum taʿqilūn "so that you may understand".' },
    { q:'In إِنَّ اللَّهَ كَانَ غَفُورًا رَحِيمًا, why does غَفُورًا end in -an?', c:['it is the predicate of كَانَ','it follows a preposition','it is a doer','error'], a:0, x:'kāna\'s khabar takes naṣb.' }
  ]},

{ id:'n9', track:'n', order:9, xp:25, title:'Demonstratives & Relatives', ar:'أسماء الإشارة والموصول', prereq:['n5'],
  content:`<p><b>Demonstratives (أسماء الإشارة)</b>:</p>
  <table><tr><th>Near</th><th>Far</th><th></th></tr>
  <tr><td class="ar">هَذَا</td><td class="ar">ذَلِكَ</td><td>this / that (m.)</td></tr>
  <tr><td class="ar">هَذِهِ</td><td class="ar">تِلْكَ</td><td>this / that (f.)</td></tr>
  <tr><td class="ar">هَؤُلَاءِ</td><td class="ar">أُولَئِكَ</td><td>these / those</td></tr></table>
  <p><b>Relative pronouns (الأسماء الموصولة)</b>: <span class="ar">الَّذِي</span> (m.), <span class="ar">الَّتِي</span> (f.), <span class="ar">الَّذِينَ</span> (m.pl.), plus <span class="ar">مَنْ</span> "whoever" and <span class="ar">مَا</span> "whatever".</p>
  <p>Crucial rule: the relative pronoun is used only after a <b>definite</b> noun; after an indefinite noun, the clause attaches bare: <span class="ar">رَجُلٌ يَقْرَأُ</span> "a man who reads" vs <span class="ar">الرَّجُلُ الَّذِي يَقْرَأُ</span> "the man who reads".</p>`,
  examples:[
    { ar:'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ', en:'"That is the Book in which there is no doubt" — dhālika.', src:'Qur\'an 2:2' },
    { ar:'إِلَّا الَّذِينَ آمَنُوا', en:'"except those who believed" — alladhīna + verb clause.', src:'Qur\'an 103:3' },
    { ar:'مَنْ جَدَّ وَجَدَ', en:'"Whoever strives, finds" — man as conditional relative.', src:'Arabic proverb' }
  ],
  quiz:[
    { q:'ذَلِكَ means:', c:['that (m.)','this (m.)','those','she'], a:0, x:'Far demonstrative.' },
    { q:'الَّذِينَ is used for:', c:['masculine plural "those who"','feminine singular','dual','objects only'], a:0, x:'alladhīna āmanū — "those who believe".' },
    { q:'"Whoever strives, finds" uses مَنْ as:', c:['a conditional "whoever"','a question "who?"','a negation','a preposition'], a:0, x:'man in proverbs = whoever.' },
    { q:'After an INDEFINITE noun, a describing clause takes:', c:['no relative pronoun','الَّذِي','مَا','ذَلِكَ'], a:0, x:'rajulun yaqraʾu — the clause attaches bare.' },
    { q:'تِلْكَ means:', c:['that (f.)','this (m.)','these','you (f.)'], a:0, x:'Feminine far demonstrative.' }
  ]},

{ id:'n10', track:'n', order:10, xp:30, title:'Negation, Future & Conditions', ar:'النفي والشرط', prereq:['n8','s3'],
  content:`<p>Each negative particle has its own tense logic — a real reading skill:</p>
  <table><tr><th>Particle</th><th>Use</th><th>Example</th></tr>
  <tr><td class="ar">مَا + past</td><td>didn't</td><td class="ar">مَا كَتَبَ he didn't write</td></tr>
  <tr><td class="ar">لَمْ + jussive</td><td>didn't (formal)</td><td class="ar">لَمْ يَكْتُبْ he didn't write</td></tr>
  <tr><td class="ar">لَا + present</td><td>doesn't</td><td class="ar">لَا يَكْتُبُ he doesn't write</td></tr>
  <tr><td class="ar">لَنْ + subjunctive</td><td>will never</td><td class="ar">لَنْ يَكْتُبَ he will never write</td></tr>
  <tr><td class="ar">لَيْسَ</td><td>is not</td><td class="ar">لَيْسَ كَبِيرًا it is not big</td></tr></table>
  <p>Note how لَمْ pulls a <i>past</i> meaning out of a <i>present-form</i> verb — <span class="ar">لَمْ يَلِدْ وَلَمْ يُولَدْ</span> "He did not beget nor was He begotten".</p>
  <p><b>Conditionals</b>: <span class="ar">إِنْ</span> "if", <span class="ar">إِذَا</span> "when/if", <span class="ar">لَوْ</span> "if (hypothetical)"، <span class="ar">مَنْ</span> "whoever". Condition and result often both take the jussive: <span class="ar">مَنْ يَطْلُبْ يَجِدْ</span> "whoever seeks, finds".</p>`,
  examples:[
    { ar:'لَمْ يَلِدْ وَلَمْ يُولَدْ', en:'lam + jussive: "He did not beget, nor was He begotten."', src:'Qur\'an 112:3' },
    { ar:'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ', en:'"When the victory of God comes…" — idhā + past form with future sense.', src:'Qur\'an 110:1' },
    { ar:'الوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ', en:'"Time is like a sword: if you do not cut it, it cuts you" — in + lam + jussive.', src:'Arabic proverb' }
  ],
  quiz:[
    { q:'لَمْ يَكْتُبْ means:', c:['he did not write','he will not write','he is not writing','write!'], a:0, x:'lam + jussive negates the past.' },
    { q:'لَنْ negates:', c:['the future ("will never")','the past','commands','nouns'], a:0, x:'lan yaktuba — emphatic future negation.' },
    { q:'In لَمْ يَلِدْ, the verb form looks present but the meaning is:', c:['past','future','command','ongoing'], a:0, x:'lam converts muḍāriʿ to past negation.' },
    { q:'لَيْسَ negates:', c:['nominal sentences ("is not")','past verbs','future verbs','commands'], a:0, x:'laysa l-baytu kabīran.' },
    { q:'إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ is:', c:['a conditional sentence','a question','a wish','an oath'], a:0, x:'in (if) + condition + result.' }
  ]},

/* ══════════ TRACK Q — QUR'ANIC READING ══════════ */
{ id:'q1', track:'q', order:1, xp:35, title:'Sūrat al-Fātiḥa', ar:'سورة الفاتحة', prereq:['r8','n4'],
  content:`<p>The most-recited text in Arabic. Read it now as a grammarian:</p>
  <p class="ar big centered">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
  <p>بِـ (prep) + اسْم in jarr, iḍāfa to اللهِ; the two names follow in jarr as adjectives.</p>
  <p class="ar big centered">الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</p>
  <p>Nominal sentence: الحَمْدُ topic (rafʿ), لِلَّهِ predicate; رَبِّ apposition in jarr, iḍāfa to العَالَمِينَ.</p>
  <p class="ar big centered">مَالِكِ يَوْمِ الدِّينِ</p>
  <p>Triple jarr chain — Master / of the Day / of Judgment.</p>
  <p class="ar big centered">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</p>
  <p>إِيَّاكَ is the object <i>fronted</i> for exclusivity: "You <b>alone</b> we worship" — word order as rhetoric.</p>
  <p class="ar big centered">اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ</p>
  <p>Imperative of supplication + نَا; double object; adjective agreeing in naṣb.</p>
  <p>Full text with word-by-word gloss is in the <b>Reader</b> tab.</p>`,
  examples:[
    { ar:'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ', en:'"the path of those You have blessed" — iḍāfa to a relative clause.', src:'Qur\'an 1:7' },
    { ar:'غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', en:'"not of those who earned anger, nor of the astray" — passive participle + sound plural in jarr.', src:'Qur\'an 1:7' }
  ],
  quiz:[
    { q:'Fronting إِيَّاكَ before نَعْبُدُ expresses:', c:['exclusivity — "You ALONE we worship"','politeness','past tense','a question'], a:0, x:'Fronted objects restrict: only You.' },
    { q:'الْحَمْدُ لِلَّهِ is grammatically:', c:['nominal sentence: topic + prep-phrase predicate','verbal sentence','a command','iḍāfa phrase'], a:0, x:'al-ḥamdu (mubtadaʾ) li-llāhi (khabar).' },
    { q:'Why do يَوْمِ and الدِّينِ end in -i?', c:['each is a muḍāf ilayhi in a jarr chain','they follow إن','pausal form','sound plural'], a:0, x:'mālik→yawm→ad-dīn: iḍāfa chain.' },
    { q:'اهْدِنَا is:', c:['imperative + "us"','past + "he"','a noun','future'], a:0, x:'ihdi (guide!) + nā.' },
    { q:'الْمُسْتَقِيمَ agrees with الصِّرَاطَ in:', c:['case (naṣb), definiteness, gender, number','rhyme only','tense','person'], a:0, x:'Full adjective agreement.' }
  ]},

{ id:'q2', track:'q', order:2, xp:30, title:'Sūrat al-Ikhlāṣ', ar:'سورة الإخلاص', prereq:['q1'],
  content:`<p>Four verses said to equal a third of the Qur'an — and a perfect grammar text:</p>
  <p class="ar big centered">قُلْ هُوَ اللَّهُ أَحَدٌ</p>
  <p>Imperative قُلْ; then pronoun + nominal sentence: "He is God, One."</p>
  <p class="ar big centered">اللَّهُ الصَّمَدُ</p>
  <p>Pure mubtadaʾ + khabar, both definite for total identification: "God is <i>the</i> Eternal Refuge."</p>
  <p class="ar big centered">لَمْ يَلِدْ وَلَمْ يُولَدْ</p>
  <p>لَمْ + jussive, twice: active then <b>passive</b> (yalid/yūlad) — voice contrast in two words.</p>
  <p class="ar big centered">وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ</p>
  <p>كَانَ negated; predicate كُفُوًا in naṣb; the subject أَحَدٌ held to the very end.</p>`,
  examples:[
    { ar:'أَحَدٌ vs الوَاحِد', en:'aḥad: absolute, unqualified oneness — a word choice no translation fully carries.', src:'Commentary tradition' }
  ],
  quiz:[
    { q:'In لَمْ يَلِدْ وَلَمْ يُولَدْ, the contrast is:', c:['active vs passive of the same verb','past vs future','singular vs plural','two different roots'], a:0, x:'yalid "beget" / yūlad "be begotten".' },
    { q:'اللَّهُ الصَّمَدُ has both nouns definite because:', c:['it identifies exhaustively: God IS the Eternal Refuge','it is an iḍāfa','error','poetry'], a:0, x:'Definite khabar = exclusive identification.' },
    { q:'كُفُوًا ends in -an because it is:', c:['the predicate of يَكُنْ (a sister of كان)','a doer','after a preposition','a plural'], a:0, x:'kāna-family predicate takes naṣb.' },
    { q:'قُلْ is grammatically:', c:['an imperative','a noun','a particle','past tense'], a:0, x:'"Say!" — command of qāla.' }
  ]},

{ id:'q3', track:'q', order:3, xp:30, title:'The Two Refuges — al-Falaq & an-Nās', ar:'المعوذتان', prereq:['q2'],
  content:`<p>The final two sūras are built on one syntactic frame — <span class="ar">قُلْ أَعُوذُ بِرَبِّ...مِنْ شَرِّ...</span> "Say: I take refuge with the Lord of… from the evil of…" — then vary it. Watch iḍāfa and مِنْ carry the whole structure:</p>
  <p class="ar big centered">قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ . مِن شَرِّ مَا خَلَقَ</p>
  <p>أَعُوذُ "I take refuge" (Form I present); بِـ + iḍāfa; then a chain of مِنْ شَرِّ + muḍāf ilayhi.</p>
  <p class="ar big centered">قُلْ أَعُوذُ بِرَبِّ النَّاسِ . مَلِكِ النَّاسِ . إِلَٰهِ النَّاسِ</p>
  <p>Three parallel appositions in jarr — Lord / King / God of mankind — repetition as intensification.</p>
  <p>Note <span class="ar">مَا خَلَقَ</span>: "whatever He created" — مَا as a relative covering all creation.</p>`,
  examples:[
    { ar:'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', en:'"and from the evil of an envier when he envies" — indefinite noun + إذا clause.', src:'Qur\'an 113:5' },
    { ar:'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', en:'"who whispers in the breasts of mankind" — relative clause with a four-letter-root verb.', src:'Qur\'an 114:5' }
  ],
  quiz:[
    { q:'أَعُوذُ means:', c:['I take refuge','he protects','refuge (noun)','protect me!'], a:0, x:'First-person present of ʿādha.' },
    { q:'رَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَٰهِ النَّاسِ are all in jarr because:', c:['they stand in apposition after بِـ','they are objects','tanwīn requires it','they are verbs'], a:0, x:'Parallel appositions to the first jarr noun.' },
    { q:'مَا in مِنْ شَرِّ مَا خَلَقَ means:', c:['whatever / that which','not','what? (question)','when'], a:0, x:'Relative mā: the evil of whatever He created.' },
    { q:'The repeated frame مِنْ شَرِّ + noun is grammatically:', c:['preposition + iḍāfa chain','verb + object','topic + predicate','oath formula'], a:0, x:'min sharri X: "from the evil-of X".' }
  ]},

{ id:'q4', track:'q', order:4, xp:30, title:'al-ʿAṣr & al-Kawthar', ar:'العصر والكوثر', prereq:['q2'],
  content:`<p><b>Sūrat al-ʿAṣr</b> — an oath, a verdict, and one exception carrying all of ethics:</p>
  <p class="ar big centered">وَالْعَصْرِ . إِنَّ الْإِنسَانَ لَفِي خُسْرٍ . إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ</p>
  <p>The وَ of oath takes jarr (وَالْعَصْرِ "by Time!"); إِنَّ + naṣb; the لَـ of emphasis on the predicate (لَفِي خُسْرٍ); then إِلَّا carving out the exception with four past verbs — the last two Form VI (mutual exhortation).</p>
  <p><b>Sūrat al-Kawthar</b> — the shortest sūra:</p>
  <p class="ar big centered">إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ . فَصَلِّ لِرَبِّكَ وَانْحَرْ . إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ</p>
  <p>إِنَّا = إِنَّ + نَا; the فَـ of consequence ("so pray…"); and the pronoun هُوَ inserted for emphasis: "<i>he</i> is the one cut off."</p>`,
  examples:[
    { ar:'وَالْعَصْرِ', en:'The oath-wāw governs jarr: "By the (declining) time!"', src:'Qur\'an 103:1' },
    { ar:'فَصَلِّ لِرَبِّكَ وَانْحَرْ', en:'fa- of result + two imperatives: "so pray to your Lord and sacrifice."', src:'Qur\'an 108:2' }
  ],
  quiz:[
    { q:'The وَ in وَالْعَصْرِ is:', c:['an oath particle governing jarr','"and" joining nouns','a mistake','future marker'], a:0, x:'wāw al-qasam: "By Time!"' },
    { q:'إِنَّا is a contraction of:', c:['إِنَّ + نَا ("indeed we")','إِنْ + لَا','أَنَا + إِنَّ','إِلَى + نَا'], a:0, x:'inna + nā.' },
    { q:'The لَـ in لَفِي خُسْرٍ adds:', c:['emphasis to the predicate','negation','a question','possession'], a:0, x:'lām of emphasis after inna.' },
    { q:'تَوَاصَوْا بِالْحَقِّ uses Form VI to express:', c:['exhorting one another','commanding oneself','being exhorted','refusing'], a:0, x:'Mutual counsel — community ethics in one verb form.' },
    { q:'فَصَلِّ — the فَ means:', c:['"so/therefore" (consequence)','"or"','"but"','nothing'], a:0, x:'We gave you al-Kawthar, SO pray…' }
  ]},

{ id:'q5', track:'q', order:5, xp:35, title:'Āyat al-Kursī', ar:'آية الكرسي', prereq:['q3','n8'],
  content:`<p>The Throne Verse (2:255) is the summit of early reading — long, majestic, and almost entirely made of structures you now know:</p>
  <p class="ar big centered">اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ</p>
  <p><span class="ar">لَا إِلَٰهَ إِلَّا هُوَ</span> — the لا of absolute negation puts إِلَٰهَ in naṣb with no tanwīn: "no god at all, except He".</p>
  <p class="ar big centered">لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ</p>
  <p>"Neither slumber nor sleep seizes Him" — verb + attached object pronoun + two negated subjects.</p>
  <p class="ar big centered">لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ</p>
  <p>Fronted predicate لَهُ ("to Him belongs…") + relative مَا — ownership stated by word order alone.</p>
  <p class="ar big centered">وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ</p>
  <p>حِفْظُهُمَا — maṣdar + dual pronoun: "the preserving of them both". The full verse is in the Reader with a word-by-word gloss.</p>`,
  examples:[
    { ar:'مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ', en:'"Who is it that can intercede with Him except by His permission?" — rhetorical man + relative.', src:'Qur\'an 2:255' },
    { ar:'وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ', en:'"His Kursī encompasses the heavens and the earth" — verb + doer + two objects in naṣb.', src:'Qur\'an 2:255' }
  ],
  quiz:[
    { q:'In لَا إِلَٰهَ إِلَّا هُوَ, the form إِلَٰهَ (naṣb, no tanwīn) signals:', c:['absolute categorical negation','a question','possession','dual'], a:0, x:'lā of genus-negation: "no god whatsoever".' },
    { q:'لَهُ مَا فِي السَّمَاوَاتِ fronts لَهُ to express:', c:['"to Him ALONE belongs…"','a question','past tense','apology'], a:0, x:'Fronted predicate = restriction, like إِيَّاكَ نَعْبُدُ.' },
    { q:'حِفْظُهُمَا means:', c:['the preservation of them both','their two guards','he preserved','two preservers'], a:0, x:'maṣdar ḥifẓ + dual suffix -humā.' },
    { q:'سِنَةٌ وَلَا نَوْمٌ ("slumber nor sleep") are grammatically:', c:['subjects of تَأْخُذُهُ','objects','predicates','oaths'], a:0, x:'"slumber does not seize Him" — the seizers are subjects.' }
  ]},

{ id:'q6', track:'q', order:6, xp:30, title:'Qur\'anic Formulas & Style', ar:'الأساليب القرآنية', prereq:['q4'],
  content:`<p>Certain frames recur again and again; recognizing them makes whole pages readable:</p>
  <table><tr><th>Formula</th><th>Meaning</th></tr>
  <tr><td class="ar">يَا أَيُّهَا الَّذِينَ آمَنُوا</td><td>O you who believe (about ninety times)</td></tr>
  <tr><td class="ar">إِنَّ اللهَ غَفُورٌ رَحِيمٌ</td><td>seal-endings: divine-name pairs closing verses</td></tr>
  <tr><td class="ar">أَفَلَا تَعْقِلُونَ / يَتَفَكَّرُونَ</td><td>will you not reason / reflect?</td></tr>
  <tr><td class="ar">وَمَا أَدْرَاكَ مَا...</td><td>and what will make you know what X is?</td></tr>
  <tr><td class="ar">فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ</td><td>refrain of ar-Raḥmān (31×), in the dual</td></tr>
  <tr><td class="ar">كَذَٰلِكَ / لَعَلَّكُمْ</td><td>thus… / so that you may…</td></tr></table>
  <p>Style notes: oaths by created things (وَالفَجْرِ، وَالتِّينِ); rhetorical questions with أَ + فَ; and <b>iltifāt</b> — sudden person-shifts (He→We→I) that commentators treasure.</p>`,
  examples:[
    { ar:'وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ', en:'"And what will make you know what the Night of Decree is?" — the suspense formula.', src:'Qur\'an 97:2' },
    { ar:'يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا', en:'Address formula + plural imperative.', src:'Qur\'an 3:200' }
  ],
  quiz:[
    { q:'يَا أَيُّهَا الَّذِينَ آمَنُوا is:', c:['a vocative address to believers','a question','an oath','a negation'], a:0, x:'yā ayyuhā + relative: "O you who believe".' },
    { q:'وَمَا أَدْرَاكَ مَا... functions to:', c:['build awe/suspense before defining something','negate','list items','apologize'], a:0, x:'"What will make you know what X is?"' },
    { q:'تُكَذِّبَانِ is in which number?', c:['dual ("you two deny")','singular','plural','collective'], a:0, x:'-āni: addressed to jinn and mankind together.' },
    { q:'Verse endings like غَفُورٌ رَحِيمٌ are grammatically:', c:['paired indefinite predicates/adjectives','verbs','commands','iḍāfa'], a:0, x:'Intensive adjective patterns faʿūl/faʿīl.' }
  ]}
);
