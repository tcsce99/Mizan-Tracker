/* ============================================================
   FUSHA — data3.js — Lessons: Poetry & Prose, Reading without
   Tashkīl, Speaking & Expression
   ============================================================ */

FUSHA.lessons.push(

/* ══════════ TRACK P — POETRY & CLASSICAL PROSE ══════════ */
{ id:'p1', track:'p', order:1, xp:30, title:'Anatomy of the Classical Poem', ar:'مدخل إلى الشعر', prereq:['n5','v3'],
  content:`<p>Classical Arabic poetry is the "dīwān of the Arabs" — their archive of language, history and values. Its unit is the <b>bayt</b> (verse), split into two half-lines (<b>shaṭr</b>); every bayt of a poem ends on the same rhyme letter (<b>qāfiya</b>) and follows one of sixteen meters (<b>buḥūr</b>), fifteen of them catalogued by al-Khalīl ibn Aḥmad (d. c. 786).</p>
  <p>The famous meters you will meet: <span class="ar">الطويل</span> (aṭ-ṭawīl — the meter of several Muʿallaqāt), <span class="ar">الكامل، البسيط، الوافر، الرجز</span> (ar-rajaz — the "workhorse" of didactic verse like the Alfiyya).</p>
  <p>Genres: <b>فخر</b> boasting, <b>مدح</b> praise, <b>هجاء</b> satire, <b>رثاء</b> elegy, <b>غزل</b> love poetry, <b>حكمة</b> wisdom verse, <b>وصف</b> description.</p>
  <p>Reading poetry needs two habits: (1) expect flexible word order licensed by iʿrāb, (2) read the bayt as one grammatical breath across both halves.</p>`,
  examples:[
    { ar:'وَمَهْمَا تَكُنْ عِنْدَ امْرِئٍ مِنْ خَلِيقَةٍ ۝ وَإِنْ خَالَهَا تَخْفَى عَلَى النَّاسِ تُعْلَمِ', en:'"Whatever trait a man has — though he thinks it hidden from people — it becomes known." Zuhayr\'s wisdom verse; note the conditional مهما + jussive.', src:'Zuhayr ibn Abī Sulmā, Muʿallaqa' },
    { ar:'خَيْرُ الكَلَامِ مَا قَلَّ وَدَلَّ', en:'"The best speech is that which is brief and indicative" — the classical ideal of concision.', src:'Arabic maxim' }
  ],
  quiz:[
    { q:'A bayt is:', c:['one verse of two half-lines','a whole poem','a rhyme letter','a meter'], a:0, x:'bayt = verse; each half is a shaṭr.' },
    { q:'The qāfiya is:', c:['the rhyme carried by every verse-end','the opening line','the poet\'s name','a vowel mark'], a:0, x:'One rhyme letter binds the entire poem.' },
    { q:'The meters of Arabic poetry were first catalogued by:', c:['al-Khalīl ibn Aḥmad','Sībawayh','al-Mutanabbī','Imruʾ al-Qays'], a:0, x:'al-Khalīl, teacher of Sībawayh, founded ʿarūḍ (prosody).' },
    { q:'هجاء is the genre of:', c:['satire / invective','love','elegy','description'], a:0, x:'hijāʾ mocks; madīḥ praises; rithāʾ mourns.' },
    { q:'Classical poetry is called دِيوَان العَرَب because:', c:['it is the register/archive of Arab language and lore','it was written in offices','it rhymes','it is sung'], a:0, x:'The poetic corpus preserved vocabulary, history, values.' }
  ]},

{ id:'p2', track:'p', order:2, xp:30, title:'Didactic Verse — the Alfiyya', ar:'الشعر التعليمي: الألفية', prereq:['p1','n3'],
  content:`<p>Muslim scholars poured entire sciences into rajaz verse for memorization. The most celebrated is the <b>Alfiyya of Ibn Mālik</b> (d. 1274) — about a thousand verses containing all of Arabic grammar. Students worldwide still memorize it. It opens:</p>
  <p class="ar big centered">قَالَ مُحَمَّدٌ هُوَ ابْنُ مَالِكِ ۝ أَحْمَدُ رَبِّي اللهَ خَيْرَ مَالِكِ</p>
  <p><i>"Muḥammad, who is Ibn Mālik, says: I praise my Lord, God, the best of masters."</i> — note the pun: مَالِك the poet's forefather / خَيْرَ مَالِكِ the best Master.</p>
  <p>And defines speech itself in one bayt you can now parse:</p>
  <p class="ar big centered">كَلَامُنَا لَفْظٌ مُفِيدٌ كَاسْتَقِمْ ۝ وَاسْمٌ وَفِعْلٌ ثُمَّ حَرْفٌ الْكَلِمْ</p>
  <p><i>"Our 'speech' is a meaningful utterance, like 'be upright!'; and the word-classes are noun, verb, then particle."</i> — the three parts of speech (اسم، فعل، حرف) in verse.</p>
  <p>Reading didactic verse is the classic bridge from grammar-book Arabic to poetry: the language is precise, the meter light, and the content is the grammar you are learning.</p>`,
  examples:[
    { ar:'وَالِاسْمُ مِنْهُ مُعْرَبٌ وَمَبْنِي ۝ لِشَبَهٍ مِنَ الْحُرُوفِ مُدْنِي', en:'"Nouns are either declinable (muʿrab) or fixed (mabnī)…" — grammar taught in rhyme.', src:'Alfiyyat Ibn Mālik' }
  ],
  quiz:[
    { q:'The Alfiyya is:', c:['a roughly 1000-verse grammar poem by Ibn Mālik','a love poem','a Qur\'an commentary','a dictionary'], a:0, x:'Among the most memorized grammar texts in history.' },
    { q:'Per the Alfiyya, the three word-classes of Arabic are:', c:['noun, verb, particle','subject, object, verb','past, present, future','root, pattern, vowel'], a:0, x:'ism, fiʿl, ḥarf.' },
    { q:'كَاسْتَقِمْ ("like: be upright!") is cited because:', c:['a single command verb is already complete meaningful speech','it rhymes','it is the shortest word','it is a noun'], a:0, x:'istaqim! alone = complete sentence — the definition\'s example.' },
    { q:'Didactic verse was written mainly to:', c:['make sciences memorizable','entertain courts','mock rivals','record battles'], a:0, x:'Rajaz meter as mnemonic technology.' },
    { q:'In خَيْرَ مَالِكِ the poet puns on:', c:['the name Mālik and God as Master','two meters','city names','a rhyme flaw'], a:0, x:'Ibn Mālik / khayra mālik — "best of masters".' }
  ]},

{ id:'p3', track:'p', order:3, xp:30, title:'Proverbs & Wisdom', ar:'الأمثال والحكم', prereq:['p1'],
  content:`<p>Proverbs (<b>الأمثال</b>) are perfect miniature texts: authentic classical syntax in a single line. Learn these as templates:</p>
  <table>
  <tr><td class="ar">مَنْ جَدَّ وَجَدَ</td><td>Whoever strives, finds.</td></tr>
  <tr><td class="ar">العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ عَلَى الحَجَرِ</td><td>Learning in youth is like engraving on stone.</td></tr>
  <tr><td class="ar">خَيْرُ الكَلَامِ مَا قَلَّ وَدَلَّ</td><td>The best speech is brief and telling.</td></tr>
  <tr><td class="ar">رُبَّ أَخٍ لَكَ لَمْ تَلِدْهُ أُمُّكَ</td><td>Many a brother of yours was not borne by your mother.</td></tr>
  <tr><td class="ar">الوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ</td><td>Time is a sword: cut it or it cuts you.</td></tr>
  <tr><td class="ar">لِكُلِّ مَقَامٍ مَقَالٌ</td><td>For every occasion, its own speech.</td></tr>
  </table>
  <p>Notice the machinery: conditional مَنْ, comparison كَـ, the rare particle رُبَّ ("many a…" — always + indefinite jarr), and balanced nominal sentences. Proverbs also preserve old vocabulary and values — they are quoted constantly in classical prose.</p>`,
  examples:[
    { ar:'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى', en:'"Actions are only by intentions, and each person has only what he intended" — the first hadith of Ṣaḥīḥ al-Bukhārī; إنما = restriction.', src:'Hadith, al-Bukhārī 1' },
    { ar:'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللهُ لَهُ بِهِ طَرِيقًا إِلَى الجَنَّةِ', en:'"Whoever travels a path seeking knowledge, God eases for him a path to Paradise."', src:'Hadith, Muslim' }
  ],
  quiz:[
    { q:'رُبَّ أَخٍ — the particle رُبَّ means:', c:['many a… (with indefinite jarr noun)','never','because','so that'], a:0, x:'rubba + akh-in: "many a brother…".' },
    { q:'إِنَّمَا in إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ expresses:', c:['restriction — "only"','question','wish','negation of past'], a:0, x:'innamā = nothing but / only.' },
    { q:'العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ عَلَى الحَجَرِ works by:', c:['simile with كَـ','oath','command','dialogue'], a:0, x:'ka- likens learning to engraving.' },
    { q:'لِكُلِّ مَقَامٍ مَقَالٌ is built as:', c:['fronted prep-phrase predicate + delayed subject','verb + object','oath + reply','iḍāfa only'], a:0, x:'"For every station [there is] a speech."' },
    { q:'مَا نَوَى in the hadith means:', c:['what he intended','he did not intend','when he intends','his intention (noun)'], a:0, x:'relative mā + past verb.' }
  ]},

{ id:'p4', track:'p', order:4, xp:35, title:'The Muʿallaqa of Imruʾ al-Qays', ar:'معلقة امرئ القيس', prereq:['p2'],
  content:`<p>The <b>Muʿallaqāt</b> ("the Suspended Odes") are seven (or ten) pre-Islamic masterpieces, honored — tradition says — by being hung on the Kaʿba. Their language is a benchmark of pure fuṣḥā: when grammarians needed proof of correct usage, they quoted poems like these.</p>
  <p>The most famous opening in all Arabic literature, by Imruʾ al-Qays (6th c.), in ṭawīl meter:</p>
  <p class="ar big centered">قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ ۝ بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ</p>
  <p><i>"Halt, you two — let us weep over the memory of a beloved and a dwelling, at the dune's edge of the winding sands, between ad-Dakhūl and Ḥawmal."</i></p>
  <p>Grammar of the first two words: <span class="ar">قِفَا</span> is a <b>dual imperative</b> ("you two, stop!" — addressed to two companions, a convention of the genre); <span class="ar">نَبْكِ</span> is jussive ("let us weep") answering the command; then a chain of jarr phrases paints the scene. This is the <b>nasīb</b> — the elegiac prelude over an abandoned campsite (الوقوف على الأطلال) that opens the classical ode.</p>`,
  examples:[
    { ar:'وَإِنَّ شِفَائِي عَبْرَةٌ مُهَرَاقَةٌ ۝ فَهَلْ عِنْدَ رَسْمٍ دَارِسٍ مِنْ مُعَوَّلِ', en:'"My cure is a tear poured out — but is there, at an effaced trace, anything to lean on?" — inna + iḍāfa + passive participles.', src:'Imruʾ al-Qays, Muʿallaqa' }
  ],
  quiz:[
    { q:'قِفَا is grammatically:', c:['a dual imperative — "you two, halt!"','past tense','a noun','feminine singular'], a:0, x:'The -ā suffix addresses two companions.' },
    { q:'The Muʿallaqāt matter to grammar because:', c:['they are a benchmark corpus of pure pre-Islamic fuṣḥā','they invented writing','they are legal texts','they are in dialect'], a:0, x:'Grammarians cited them as authoritative usage (shawāhid).' },
    { q:'نَبْكِ ("let us weep") answers قِفَا in which mood?', c:['jussive (as the response to a command)','indicative','subjunctive after أن','imperative'], a:0, x:'Command + jussive response: "halt… that we may weep".' },
    { q:'The نسيب / الوقوف على الأطلال convention is:', c:['weeping over the beloved\'s abandoned campsite','praising the king','describing a battle','a legal preamble'], a:0, x:'The elegiac prelude of the classical qaṣīda.' },
    { q:'الدَّخُول and حَوْمَل in the verse are:', c:['place names','verbs','months','tribes\' war cries'], a:0, x:'Geography of the beloved\'s vanished camp.' }
  ]},

{ id:'p5', track:'p', order:5, xp:35, title:'al-Mutanabbī', ar:'المتنبي', prereq:['p4'],
  content:`<p>Abū ṭ-Ṭayyib <b>al-Mutanabbī</b> (d. 965) is widely held to be the greatest of the Arabic poets — proverbially quotable, grammatically daring, boundlessly proud. His most famous boast:</p>
  <p class="ar big centered">الخَيْلُ وَاللَّيْلُ وَالبَيْدَاءُ تَعْرِفُنِي ۝ وَالسَّيْفُ وَالرُّمْحُ وَالقِرْطَاسُ وَالقَلَمُ</p>
  <p><i>"The horses, the night, and the desert know me — and the sword, the spear, the paper, and the pen."</i> Seven subjects, one verb, one object pronoun (ـنِي) — war and letters in a single breath.</p>
  <p class="ar big centered">أَنَا الَّذِي نَظَرَ الأَعْمَى إِلَى أَدَبِي ۝ وَأَسْمَعَتْ كَلِمَاتِي مَنْ بِهِ صَمَمُ</p>
  <p><i>"I am he whose learning the blind have seen, and whose words have made the deaf hear."</i> — أنا الذي + paradox: sight for the blind, hearing for the deaf.</p>
  <p class="ar big centered">عَلَى قَدْرِ أَهْلِ العَزْمِ تَأْتِي العَزَائِمُ ۝ وَتَأْتِي عَلَى قَدْرِ الكِرَامِ المَكَارِمُ</p>
  <p><i>"Resolutions come in the measure of the resolute; noble deeds in the measure of the noble."</i> — perfect chiasmus; quoted for a millennium.</p>`,
  examples:[
    { ar:'وَإِذَا كَانَتِ النُّفُوسُ كِبَارًا ۝ تَعِبَتْ فِي مُرَادِهَا الأَجْسَامُ', en:'"When souls are great, bodies weary in pursuit of their desire" — kāna + naṣb predicate in verse.', src:'al-Mutanabbī' }
  ],
  quiz:[
    { q:'In الخَيْلُ وَاللَّيْلُ وَالبَيْدَاءُ تَعْرِفُنِي, the ـنِي is:', c:['"me" — object pronoun on the verb','emphasis','a rhyme filler','"we"'], a:0, x:'taʿrifu-nī: "know me".' },
    { q:'The rhetorical figure in أَسْمَعَتْ كَلِمَاتِي مَنْ بِهِ صَمَمُ is:', c:['paradox — making the deaf hear','simple simile','pun','oath'], a:0, x:'His words give hearing to the deaf.' },
    { q:'عَلَى قَدْرِ أَهْلِ العَزْمِ تَأْتِي العَزَائِمُ teaches that:', c:['achievement scales with resolve','fate is fixed','war beats letters','poetry needs patrons'], a:0, x:'The proverb-verse of ambition.' },
    { q:'al-Mutanabbī lived in the:', c:['10th century CE (Abbasid era)','pre-Islamic era','20th century','Umayyad Spain only'], a:0, x:'d. 965, court poet of Sayf ad-Dawla in Aleppo.' },
    { q:'كِبَارًا in إِذَا كَانَتِ النُّفُوسُ كِبَارًا is naṣb because:', c:['it is the predicate of كَانَتْ','it follows مِنْ','it is a doer','rhyme demands it'], a:0, x:'kāna-family predicate.' }
  ]},

{ id:'p6', track:'p', order:6, xp:30, title:'Classical Prose', ar:'النثر الكلاسيكي', prereq:['p3','n10'],
  content:`<p>Beyond poetry lies the vast prose heritage — and it is <i>easier</i> to read, making it your on-ramp to real books:</p>
  <ul>
  <li><b>Hadith</b>: short narratives with plain syntax — the gentlest authentic prose. <span class="ar">إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ...</span></li>
  <li><b>Sīra & history</b>: Ibn Hishām, aṭ-Ṭabarī — narrative chains: <span class="ar">قَالَ: حَدَّثَنَا... فَلَمَّا... ثُمَّ...</span></li>
  <li><b>Adab</b>: al-Jāḥiẓ (d. 869), Kalīla wa-Dimna of Ibn al-Muqaffaʿ — essays and fables.</li>
  <li><b>Maqāmāt</b> of al-Ḥarīrī — virtuoso rhymed prose (سجع), the advanced boss-level.</li>
  </ul>
  <p>Narrative connectives to internalize: <span class="ar">فَـ</span> (and then — immediate), <span class="ar">ثُمَّ</span> (then — later), <span class="ar">لَمَّا</span> (when), <span class="ar">حَتَّى</span> (until), <span class="ar">بَيْنَمَا</span> (while), <span class="ar">إِذْ / إِذَا</span> (when / lo!).</p>
  <p>A line of Kalīla wa-Dimna-style fable prose: <span class="ar">زَعَمُوا أَنَّ أَسَدًا كَانَ فِي أَجَمَةٍ وَمَعَهُ ثَلَاثَةٌ مِنَ الوُحُوشِ</span> — "They claim a lion lived in a thicket, and with him three beasts…" — زَعَمُوا أَنَّ is the classic fable-opener.</p>`,
  examples:[
    { ar:'حَدَّثَنَا عَبْدُ اللهِ قَالَ سَمِعْتُ رَسُولَ اللهِ ﷺ يَقُولُ...', en:'The isnād chain formula: "ʿAbdullāh related to us, saying: I heard the Messenger of God say…"', src:'Hadith-literature formula' },
    { ar:'الخَبَرُ كَالمَاءِ وَالرَّأْيُ كَالمِصْبَاحِ', en:'Adab-style balanced prose: parallel similes.', src:'Adab style (composed example)' }
  ],
  quiz:[
    { q:'The easiest authentic classical prose to begin with is:', c:['hadith narrative','Maqāmāt rhymed prose','legal manuals','philosophical treatises'], a:0, x:'Short, formulaic, plain syntax.' },
    { q:'فَـ versus ثُمَّ:', c:['fa = immediate sequence; thumma = delayed "then"','identical','fa is future; thumma past','both mean "but"'], a:0, x:'dakhala fa-jalasa (entered and at once sat) vs thumma qāma (then later rose).' },
    { q:'زَعَمُوا أَنَّ... opening a fable means:', c:['"they claim/allege that…"','"it is certain that…"','"once upon a time" literally','"beware of…"'], a:0, x:'zaʿamū flags a tale told, not vouched for.' },
    { q:'حَدَّثَنَا in hadith chains means:', c:['"he related to us" (Form II + nā)','"we spoke"','"he wrote"','"it happened"'], a:0, x:'ḥaddatha-nā — the transmission verb.' },
    { q:'سجع (sajʿ) is:', c:['rhymed prose','a meter','a rhyme letter','a genre of elegy'], a:0, x:'Prose with rhyming clause-ends — the Maqāmāt art.' }
  ]},

/* ══════════ TRACK U — READING WITHOUT TASHKĪL ══════════ */
{ id:'u1', track:'u', order:1, xp:30, title:'Why Arabic Works Unvocalized', ar:'لماذا تُقرأ العربية بلا تشكيل؟', prereq:['s1','n3'],
  content:`<p>Real Arabic — books, manuscripts, newspapers — is written <b>without vowel marks</b>. Yet fluent readers read at full speed. How?</p>
  <ol>
  <li><b>Patterns constrain vowels.</b> A skeleton like <span class="ar">مكتوب</span> can practically only be مَكْتُوب (mafʿūl pattern). The wazn system you learned in Ṣarf is a vowel-prediction machine.</li>
  <li><b>Grammar constrains endings.</b> After a preposition you <i>know</i> the noun ends -i; a fronted noun before a verb is the topic, so -u. Iʿrāb is reconstructed, not seen.</li>
  <li><b>Context kills ambiguity.</b> <span class="ar">علم</span> could be ʿilm (knowledge), ʿalima (he knew), ʿallama (he taught), ʿalam (flag) — but only one fits any real sentence.</li>
  </ol>
  <p>So unvocalized reading = morphology + grammar + meaning, applied instantly. That is why this track sits late in the tree: it <i>consumes</i> everything else. The Reader tab's tashkīl toggle is your gym: read bare, guess, reveal, check.</p>`,
  examples:[
    { ar:'ذهب الرجل إلى المسجد', en:'Try it: dhahaba r-rajulu ilā l-masjidi. Every vowel is forced: verb pattern, doer -u, preposition → -i.', src:'' },
    { ar:'العلم نور والجهل ظلام', en:'al-ʿilmu nūrun wa-l-jahlu ẓalāmun — nominal sentence balance makes the vowels predictable.', src:'Arabic maxim' }
  ],
  quiz:[
    { q:'Fluent readers of unvocalized text:', c:['reconstruct vowels from pattern, grammar and context','memorize every word\'s spelling','guess randomly','read only consonants aloud'], a:0, x:'Three constraint systems working together.' },
    { q:'The skeleton مكتوب is almost certainly vowelled:', c:['مَكْتُوب (mafʿūl pattern)','مِكْتَاب','مُكَتِّب','مَكَاتِب'], a:0, x:'The pattern is unmistakable.' },
    { q:'In إلى المسجد, the final vowel of المسجد must be:', c:['-i (after a preposition)','-u','-a','tanwīn -un'], a:0, x:'ilā governs jarr.' },
    { q:'The word علم without context could be read:', c:['several ways: ʿilm, ʿalima, ʿallama, ʿalam','only one way','it has no meaning','only as a verb'], a:0, x:'Context selects; this is the skill you train.' }
  ]},

{ id:'u2', track:'u', order:2, xp:30, title:'Vowels from Morphology', ar:'التشكيل من الصرف', prereq:['u1','s7'],
  content:`<p>Drill: read the skeleton, name the pattern, produce the vowels.</p>
  <table><tr><th>Skeleton</th><th>Pattern</th><th>Reading</th><th>Meaning</th></tr>
  <tr><td class="ar">مدرسة</td><td class="ar">مَفْعَلَة</td><td>madrasa</td><td>school (place-noun)</td></tr>
  <tr><td class="ar">مفتاح</td><td class="ar">مِفْعَال</td><td>miftāḥ</td><td>key (instrument-noun)</td></tr>
  <tr><td class="ar">مسلمون</td><td class="ar">مُفْعِلُونَ</td><td>muslimūna</td><td>Form IV participle + pl.</td></tr>
  <tr><td class="ar">استغفار</td><td class="ar">اِسْتِفْعَال</td><td>istighfār</td><td>Form X maṣdar</td></tr>
  <tr><td class="ar">تكذيب</td><td class="ar">تَفْعِيل</td><td>takdhīb</td><td>Form II maṣdar</td></tr>
  <tr><td class="ar">منتظر</td><td class="ar">مُفْتَعِل/مُفْتَعَل</td><td>muntaẓir/muntaẓar</td><td>waiting / awaited — context!</td></tr></table>
  <p>Rules of thumb: initial م + sukūn-shaped skeleton → participle or place/instrument noun; initial است → Form X; ت...ي between radicals → Form II maṣdar; final ـون/ـين → sound plural. The exceptions are common words you will simply know by sight — exactly how native readers do it.</p>`,
  examples:[
    { ar:'مستشفى، مستقبل، مستقيم', en:'All Form X shapes: mustashfā (hospital), mustaqbal (future), mustaqīm (straight).', src:'' }
  ],
  quiz:[
    { q:'A word beginning است (like استغفار) is almost always Form:', c:['X','II','V','I'], a:0, x:'ista- is Form X\'s signature.' },
    { q:'مفتاح follows مِفْعَال, the pattern of:', c:['instruments (key, scale, lamp)','places','doers','plurals'], a:0, x:'mifʿāl: miftāḥ, mīzān, miṣbāḥ.' },
    { q:'منتظر can be read muntaẓir or muntaẓar. What decides?', c:['context: who waits vs who is awaited','the reader\'s dialect','it cannot be decided','the first letter'], a:0, x:'Active vs passive participle of Form VIII.' },
    { q:'The skeleton تعليم is vowelled:', c:['تَعْلِيم (taʿlīm)','تُعَلِّم','تَعَلَّمَ','تِعْلَام'], a:0, x:'tafʿīl — Form II maṣdar: teaching.' },
    { q:'A final ـون on a noun skeleton signals:', c:['sound masculine plural (rafʿ)','a verb','feminine','dual'], a:0, x:'muslimūna, ṣāliḥūna…' }
  ]},

{ id:'u3', track:'u', order:3, xp:30, title:'Endings from Grammar', ar:'الإعراب من السياق', prereq:['u2','n8'],
  content:`<p>Second half of the skill: assign the <b>final</b> vowels by parsing. A checklist that resolves most words:</p>
  <ol>
  <li>After <b>any preposition</b> or as second noun of iḍāfa → <b>-i</b>.</li>
  <li>Doer of a verb, topic, or predicate of a nominal sentence → <b>-u</b>.</li>
  <li>Object of a verb, noun after إِنَّ, predicate after كَانَ, adverbs of time/place → <b>-a</b>.</li>
  <li>After لَمْ / لا of prohibition → verb ends in <b>sukūn</b>; after أَنْ / لَنْ / حَتَّى → verb ends in <b>-a</b>.</li>
  <li>Indefinite? Add n (tanwīn) — unless the word is a diptote (many proper names and plural patterns like مَسَاجِد).</li>
  </ol>
  <p>Worked example, bare: <span class="ar">ان الله يحب المحسنين</span> → إِنَّ (fixed), اللهَ (naṣb after إنّ), يُحِبُّ (Form IV present), المُحْسِنِينَ (object, sound plural → ـِينَ): <i>inna llāha yuḥibbu l-muḥsinīn</i> — "God loves the doers of good." (Qur'an 2:195)</p>`,
  examples:[
    { ar:'كتب الطالب الدرس في البيت', en:'kataba ṭ-ṭālibu d-darsa fī l-bayti — verb, doer -u, object -a, jarr after fī: fully forced.', src:'' },
    { ar:'لم يذهب الرجل الى السوق', en:'lam yadhhab (jussive sukūn) ir-rajulu (doer) ilā s-sūqi (jarr).', src:'' }
  ],
  quiz:[
    { q:'In bare text, a noun right after إن takes:', c:['-a (naṣb)','-u','-i','sukūn'], a:0, x:'inna llāha…' },
    { q:'A verb after لم ends in:', c:['sukūn (jussive)','-u','-a','tanwīn'], a:0, x:'lam yadhhab.' },
    { q:'In كتب الطالب الدرس, the vowels of الدرس are:', c:['ad-darsa — object, naṣb','ad-darsu','ad-darsi','ad-dars'], a:0, x:'Object of kataba.' },
    { q:'Diptotes like مساجد differ because they:', c:['take no tanwīn and show -a for jarr when indefinite','always end -u','are verbs','never appear in texts'], a:0, x:'mamnūʿ min aṣ-ṣarf: fī masājida (not masājidin).' },
    { q:'المحسنين ends ـِينَ (not ـُونَ) in ان الله يحب المحسنين because it is:', c:['the object (naṣb)','the doer','the topic','a dual'], a:0, x:'Object of yuḥibbu → naṣb → -īna.' }
  ]},

{ id:'u4', track:'u', order:4, xp:35, title:'Unvocalized: Familiar Texts', ar:'قراءة نصوص مألوفة', prereq:['u3','q4'],
  content:`<p>Now read texts you already know — stripped bare. First silently vowel each word, then check in the Reader (toggle tashkīl off, tap words to verify).</p>
  <p class="ar big centered">الحمد لله رب العالمين . الرحمن الرحيم . مالك يوم الدين</p>
  <p class="ar big centered">قل هو الله احد . الله الصمد . لم يلد ولم يولد . ولم يكن له كفوا احد</p>
  <p class="ar big centered">انا اعطيناك الكوثر . فصل لربك وانحر . ان شانئك هو الابتر</p>
  <p>Notes on bare-text spelling conventions: hamza seats may simplify (احد = أحد), and آ may print as ا. The word <span class="ar">فصل</span> here is فَصَلِّ (fa + ṣalli, "so pray!") — only grammar tells you it is not فَصْل (faṣl, "chapter"). This is the method: <b>known text → bare skeleton → reconstruct → verify</b>. Repeat with every text in the Reader.</p>`,
  examples:[
    { ar:'من جد وجد ومن زرع حصد', en:'man jadda wajada wa-man zaraʿa ḥaṣada — "who strives finds; who sows reaps."', src:'Arabic proverb' }
  ],
  quiz:[
    { q:'Bare فصل in فصل لربك must be read:', c:['فَصَلِّ "so pray!" — the لربك forces the verb reading','فَصْل "chapter"','فَصَلَ "he separated"','it is ambiguous forever'], a:0, x:'fa + imperative ṣalli + li-rabbika.' },
    { q:'Bare احد at the end of قل هو الله احد is:', c:['أَحَدٌ aḥadun','إِحْدَى','آحَاد','أُحُد the mountain'], a:0, x:'Known text + tanwīn as khabar.' },
    { q:'The training loop for unvocalized reading is:', c:['known text → bare → reconstruct → verify','memorize shapes only','read translation first always','skip hard words'], a:0, x:'Familiar texts give instant feedback.' },
    { q:'Bare ولم يكن له كفوا احد — كفوا ends in:', c:['-an (predicate of يكن)','-un','-in','sukūn'], a:0, x:'kufuwan — kāna-family naṣb.' }
  ]},

{ id:'u5', track:'u', order:5, xp:40, title:'Unvocalized: Unseen Texts', ar:'قراءة نصوص جديدة', prereq:['u4','p6'],
  content:`<p>The final skill: cold-reading prose you have never seen. Strategy for every sentence:</p>
  <ol>
  <li><b>Find the verb(s)</b> — or declare it a nominal sentence.</li>
  <li><b>Assign roles</b>: doer (-u), object (-a), everything after prepositions/iḍāfa (-i).</li>
  <li><b>Pattern-scan the big words</b> for wazn (مست…، م…و…، ت…ي…).</li>
  <li><b>Read aloud, committing to vowels.</b> Wrong-but-committed beats mumbling: errors teach.</li>
  </ol>
  <p>Cold read (classical-style narrative, composed for this lesson):</p>
  <p class="ar big centered">خرج الملك يوما الى الصيد فراى في الطريق رجلا فقيرا يحمل حطبا على ظهره فسأله عن حاله فقال انا رجل فقير ولي عيال ولا املك غير هذا الحطب</p>
  <p><i>kharaja l-maliku yawman ilā ṣ-ṣaydi fa-raʾā fī ṭ-ṭarīqi rajulan faqīran yaḥmilu ḥaṭaban ʿalā ẓahrihi fa-saʾalahu ʿan ḥālihi fa-qāla anā rajulun faqīrun wa-lī ʿiyālun wa-lā amliku ghayra hādhā l-ḥaṭab…</i></p>
  <p>Every choice above is forced by rules you know: يوما adverb -an; رجلا فقيرا object + agreeing adjective; عن حاله jarr. From here, fluency is a volume game: hadith collections, Kalīla wa-Dimna, then poetry with commentaries. The Reader and the timeline will pace you.</p>`,
  examples:[
    { ar:'قال بعض الحكماء: من عرف نفسه عرف ربه', en:'"One of the sages said: whoever knows himself knows his Lord" — cold-readable with the checklist.', src:'Classical wisdom literature' }
  ],
  quiz:[
    { q:'Step one when cold-reading a bare sentence:', c:['locate the verb or determine it is nominal','vowel the last word first','translate word by word','count the letters'], a:0, x:'Sentence type drives every ending.' },
    { q:'In خرج الملك يوما, the word يوما is:', c:['an adverb of time → -an (yawman)','the doer','jarr','a verb'], a:0, x:'ẓarf zamān takes naṣb.' },
    { q:'رجلا فقيرا shows:', c:['object + adjective agreeing in naṣb and indefiniteness','two doers','iḍāfa','dual'], a:0, x:'raʾā rajulan faqīran.' },
    { q:'Why "commit to vowels aloud" instead of mumbling?', c:['committed errors surface and get corrected — mumbling hides them','it sounds better','to go faster','tradition'], a:0, x:'Feedback requires commitment.' },
    { q:'ولي عيال is read:', c:['wa-lī ʿiyālun — "and I have dependents"','waliyyu ʿiyālin','wa-layya ʿayāl','walī ʿālin'], a:0, x:'wa + lī (for me) + ʿiyāl with tanwīn as delayed subject.' }
  ]},

/* ══════════ TRACK E — SPEAKING & EXPRESSION ══════════ */
{ id:'e1', track:'e', order:1, xp:25, title:'Classical Greetings & Courtesies', ar:'التحيات', prereq:['v6'],
  content:`<p>Speaking fuṣḥā begins with the formulas — fixed phrases correct in any century:</p>
  <table>
  <tr><td class="ar">السَّلَامُ عَلَيْكُمْ</td><td>Peace be upon you — reply: وَعَلَيْكُمُ السَّلَامُ</td></tr>
  <tr><td class="ar">أَهْلًا وَسَهْلًا</td><td>Welcome! (elliptical naṣb: "you have come to family and easy ground")</td></tr>
  <tr><td class="ar">حَيَّاكَ اللهُ</td><td>May God greet/preserve you</td></tr>
  <tr><td class="ar">جَزَاكَ اللهُ خَيْرًا</td><td>May God reward you with good — the classical "thank you"</td></tr>
  <tr><td class="ar">بَارَكَ اللهُ فِيكَ</td><td>God bless you</td></tr>
  <tr><td class="ar">كَيْفَ حَالُكَ؟</td><td>How are you? — بِخَيْرٍ وَالحَمْدُ لِلهِ I am well, praise God</td></tr>
  <tr><td class="ar">فِي أَمَانِ اللهِ</td><td>In God's protection (farewell)</td></tr></table>
  <p>Grammar hiding in the formulas: أَهْلًا وَسَهْلًا are naṣb objects of a dropped verb; جَزَاكَ is verb + object pronoun + second object خَيْرًا. Even courtesy is iʿrāb.</p>
  <p><b>Speaking drill</b>: after the quiz, open the Speak tab and practice this exchange aloud with the AI tutor — greet, ask after health, thank, and bid farewell.</p>`,
  examples:[
    { ar:'ـ السَّلَامُ عَلَيْكُمْ. كَيْفَ حَالُكَ يَا أَخِي؟\nـ وَعَلَيْكُمُ السَّلَامُ. أَنَا بِخَيْرٍ، وَالحَمْدُ لِلَّهِ. وَأَنْتَ؟', en:'A complete classical exchange.', src:'' }
  ],
  quiz:[
    { q:'The reply to السَّلَامُ عَلَيْكُمْ is:', c:['وَعَلَيْكُمُ السَّلَامُ','شُكْرًا','مَعَ السَّلَامَةِ','أَهْلًا'], a:0, x:'Return the greeting, fuller if you wish.' },
    { q:'جَزَاكَ اللهُ خَيْرًا literally means:', c:['may God reward you with good','goodbye','God is great','well done'], a:0, x:'jazā (reward) + ka (you) + khayran (with good).' },
    { q:'أَهْلًا وَسَهْلًا ends in -an because:', c:['the nouns are objects of an omitted verb','they are plurals','question form','no reason'], a:0, x:'Ellipsis: "[you have come to] kinsfolk and level ground".' },
    { q:'"How are you?" is:', c:['كَيْفَ حَالُكَ؟','مَا اسْمُكَ؟','أَيْنَ أَنْتَ؟','مَنْ أَنْتَ؟'], a:0, x:'kayfa ḥāluka — "how is your state?"' }
  ]},

{ id:'e2', track:'e', order:2, xp:25, title:'Introducing Yourself', ar:'التعريف بالنفس', prereq:['e1','n1'],
  content:`<p>Nominal sentences are the engine of self-introduction — no "to be" needed:</p>
  <table>
  <tr><td class="ar">اسْمِي ...</td><td>My name is …</td></tr>
  <tr><td class="ar">أَنَا مِنْ بِلَادِ ...</td><td>I am from the land of …</td></tr>
  <tr><td class="ar">أَنَا طَالِبُ عِلْمٍ</td><td>I am a student of knowledge (iḍāfa!)</td></tr>
  <tr><td class="ar">أَتَعَلَّمُ العَرَبِيَّةَ الفُصْحَى</td><td>I am learning classical Arabic</td></tr>
  <tr><td class="ar">أُحِبُّ القُرْآنَ وَالشِّعْرَ</td><td>I love the Qur'an and poetry</td></tr>
  <tr><td class="ar">أَسْكُنُ فِي مَدِينَةِ ...</td><td>I live in the city of …</td></tr>
  <tr><td class="ar">عُمْرِي ثَلَاثُونَ سَنَةً</td><td>I am thirty years old ("my age is thirty years")</td></tr></table>
  <p>Ask back with: <span class="ar">مَا اسْمُكَ؟ مِنْ أَيْنَ أَنْتَ؟ مَاذَا تَعْمَلُ؟ لِمَاذَا تَتَعَلَّمُ العَرَبِيَّةَ؟</span></p>
  <p><b>Drill</b>: introduce yourself aloud in five sentences. The Speak tab has the prompt, a model answer, and the tutor to correct you.</p>`,
  examples:[
    { ar:'أَنَا طَالِبٌ، أَتَعَلَّمُ العَرَبِيَّةَ لِأَفْهَمَ القُرْآنَ وَكَلَامَ العَرَبِ', en:'"I am a student; I learn Arabic in order to understand the Qur\'an and the speech of the Arabs" — لِـ + subjunctive expresses purpose.', src:'' }
  ],
  quiz:[
    { q:'"My name is Aḥmad" is:', c:['اسْمِي أَحْمَد','أَنَا اسْم أَحْمَد','اسْمُكَ أَحْمَد','أَحْمَد اسْم'], a:0, x:'ismī (my name) + name: nominal sentence.' },
    { q:'طَالِبُ عِلْمٍ has no tanwīn on طَالِب because:', c:['it is muḍāf (iḍāfa strips tanwīn)','it is definite with ال','spelling error','it is a verb'], a:0, x:'ṭālibu ʿilmin — student-of knowledge.' },
    { q:'لِأَفْهَمَ in "أَتَعَلَّمُ...لِأَفْهَمَ" expresses:', c:['purpose — "in order to understand"','past','fear','negation'], a:0, x:'li + subjunctive -a.' },
    { q:'"Where are you from?" is:', c:['مِنْ أَيْنَ أَنْتَ؟','مَنْ أَنْتَ؟','كَيْفَ أَنْتَ؟','مَتَى أَنْتَ؟'], a:0, x:'min ayna = from where.' }
  ]},

{ id:'e3', track:'e', order:3, xp:25, title:'Questions & Answers', ar:'الاستفهام', prereq:['e2'],
  content:`<p>The interrogatives (أدوات الاستفهام):</p>
  <table>
  <tr><td class="ar">مَنْ</td><td>who?</td><td class="ar">مَنْ هَذَا الرَّجُلُ؟</td></tr>
  <tr><td class="ar">مَا / مَاذَا</td><td>what?</td><td class="ar">مَاذَا تَقْرَأُ؟</td></tr>
  <tr><td class="ar">أَيْنَ</td><td>where?</td><td class="ar">أَيْنَ المَسْجِدُ؟</td></tr>
  <tr><td class="ar">مَتَى</td><td>when?</td><td class="ar">مَتَى تَرْجِعُ؟</td></tr>
  <tr><td class="ar">كَيْفَ</td><td>how?</td><td class="ar">كَيْفَ وَجَدْتَ الكِتَابَ؟</td></tr>
  <tr><td class="ar">لِمَاذَا / لِمَ</td><td>why?</td><td class="ar">لِمَ تَبْكِي؟</td></tr>
  <tr><td class="ar">كَمْ</td><td>how many? (+ singular naṣb!)</td><td class="ar">كَمْ كِتَابًا قَرَأْتَ؟</td></tr>
  <tr><td class="ar">هَلْ / أَ</td><td>yes-no question</td><td class="ar">هَلْ قَرَأْتَ القُرْآنَ؟</td></tr></table>
  <p>Answers: <span class="ar">نَعَمْ</span> yes / <span class="ar">لَا</span> no / <span class="ar">بَلَى</span> — the special "yes" that contradicts a negative question: <span class="ar">أَلَسْتُ بِرَبِّكُمْ؟ قَالُوا بَلَى</span> "Am I not your Lord? They said: Yes indeed!" (7:172).</p>
  <p>Oddity to master: <span class="ar">كَمْ</span> takes a <b>singular</b> noun in naṣb: كَمْ كِتَابًا "how many books".</p>`,
  examples:[
    { ar:'وَمَا تِلْكَ بِيَمِينِكَ يَا مُوسَىٰ', en:'"And what is that in your right hand, O Mūsā?" — mā + demonstrative.', src:'Qur\'an 20:17' },
    { ar:'هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ', en:'"Is the reward of excellence anything but excellence?" — hal + illā rhetorical frame.', src:'Qur\'an 55:60' }
  ],
  quiz:[
    { q:'بَلَى is used to answer:', c:['a negative question, affirmatively','any question','greetings','commands'], a:0, x:'"Am I not…?" — balā: "yes indeed you are".' },
    { q:'After كَمْ the counted noun is:', c:['singular in naṣb (كَمْ كِتَابًا)','plural in rafʿ','dual','jarr always'], a:0, x:'kam kitāban qaraʾta?' },
    { q:'"Why?" is:', c:['لِمَاذَا / لِمَ','مَتَى','أَيْنَ','كَمْ'], a:0, x:'li-mādhā, or the terse classical لِمَ.' },
    { q:'هَلْ turns a statement into:', c:['a yes/no question','a command','a wish','a negation'], a:0, x:'hal qaraʾta…? Did you read…?' },
    { q:'مَتَى تَرْجِعُ؟ means:', c:['when do you return?','where do you return?','do you return?','who returns?'], a:0, x:'matā = when.' }
  ]},

{ id:'e4', track:'e', order:4, xp:30, title:'Narrating & Describing', ar:'السرد والوصف', prereq:['e3','s3'],
  content:`<p>To speak at length you need narrative glue. The classical storytelling toolkit:</p>
  <table>
  <tr><td class="ar">فِي يَوْمٍ مِنَ الأَيَّامِ</td><td>one day…</td></tr>
  <tr><td class="ar">كَانَ... ثُمَّ... فَـ... وَبَعْدَ ذَلِكَ</td><td>was… then… and so… and after that</td></tr>
  <tr><td class="ar">لَمَّا وَصَلْتُ</td><td>when I arrived…</td></tr>
  <tr><td class="ar">بَيْنَمَا أَنَا أَقْرَأُ إِذْ...</td><td>while I was reading, suddenly…</td></tr>
  <tr><td class="ar">أَوَّلًا... ثَانِيًا... أَخِيرًا</td><td>firstly… secondly… finally</td></tr></table>
  <p>Description leans on كَانَ for past states (<span class="ar">كَانَ الجَوُّ جَمِيلًا</span> "the weather was beautiful" — predicate in naṣb!) and on the <b>ḥāl</b> construction — a naṣb participle answering "in what state?": <span class="ar">رَجَعَ الرَّجُلُ فَرِحًا</span> "the man returned <i>rejoicing</i>".</p>
  <p><b>Drill</b>: narrate your day so far in six sentences, past tense, using ثُمَّ، فَـ، لَمَّا at least once each. Then describe your room in nominal sentences.</p>`,
  examples:[
    { ar:'خَرَجْتُ مِنَ البَيْتِ صَبَاحًا، ثُمَّ ذَهَبْتُ إِلَى عَمَلِي، فَلَمَّا رَجَعْتُ قَرَأْتُ فِي كِتَابٍ حَتَّى نِمْتُ', en:'A model narration: out in the morning, then work, and when I returned I read until I slept.', src:'' }
  ],
  quiz:[
    { q:'رَجَعَ الرَّجُلُ فَرِحًا — the -an on فَرِحًا marks:', c:['the ḥāl: "he returned rejoicing"','the object','a preposition','an error'], a:0, x:'ḥāl describes the doer\'s state, always naṣb.' },
    { q:'بَيْنَمَا أَنَا أَقْرَأُ إِذْ دَخَلَ الرَّجُلُ means:', c:['while I was reading, suddenly the man entered','because I read, he left','I never read','the man reads with me'], a:0, x:'baynamā… idh — the surprise frame.' },
    { q:'"The weather was beautiful" is:', c:['كَانَ الجَوُّ جَمِيلًا','كَانَ الجَوُّ جَمِيلٌ','الجَوُّ كَانَ جَمِيلٌ','يَكُونُ الجَوَّ جَمِيلًا'], a:0, x:'kāna\'s predicate takes naṣb: jamīlan.' },
    { q:'لَمَّا + past verb means:', c:['when (something happened)','if only','not yet + future','so that'], a:0, x:'lammā waṣaltu = when I arrived.' }
  ]},

{ id:'e5', track:'e', order:5, xp:30, title:'Opinion, Wish & Duʿāʾ', ar:'الرأي والتمني والدعاء', prereq:['e4','n8'],
  content:`<p>The last register: saying what you think, want, and pray for.</p>
  <table>
  <tr><td class="ar">أَظُنُّ أَنَّ... / أَرَى أَنَّ...</td><td>I think that… / I hold that…</td></tr>
  <tr><td class="ar">فِي رَأْيِي</td><td>in my opinion</td></tr>
  <tr><td class="ar">أُرِيدُ أَنْ أَقْرَأَ</td><td>I want to read (أَنْ + subjunctive)</td></tr>
  <tr><td class="ar">عَلَيَّ أَنْ... / يَنْبَغِي أَنْ...</td><td>I must… / one ought to…</td></tr>
  <tr><td class="ar">أَلَا لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا</td><td>"If only youth would one day return!" — the classic لَيْتَ verse (Abū l-ʿAtāhiya)</td></tr>
  <tr><td class="ar">لَعَلَّ اللهَ يَفْتَحُ عَلَيْنَا</td><td>perhaps God will open [understanding] for us</td></tr></table>
  <p>Duʿāʾ — the speech act the classical language perfected. The Qur'anic prayers follow رَبِّ / رَبَّنَا + imperative:</p>
  <p class="ar centered">رَبِّ زِدْنِي عِلْمًا (20:114) — رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً (2:201) — رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي (20:25–26)</p>
  <p>Note رَبِّ = رَبِّي with the ي dropped in address — the vocative of intimacy.</p>
  <p><b>Capstone drill</b>: state three opinions with أَرَى أَنَّ, three wants with أُرِيدُ أَنْ, and close with a duʿāʾ of your own composition, all aloud.</p>`,
  examples:[
    { ar:'أَرَى أَنَّ العَرَبِيَّةَ أَجْمَلُ اللُّغَاتِ، وَأُرِيدُ أَنْ أَقْرَأَ المُتَنَبِّي بِلَا تَرْجَمَةٍ', en:'"I hold that Arabic is the most beautiful of languages, and I want to read al-Mutanabbī without translation."', src:'' }
  ],
  quiz:[
    { q:'After أُرِيدُ أَنْ, the verb takes:', c:['subjunctive -a (أَقْرَأَ)','sukūn','-u','past form'], a:0, x:'an + manṣūb verb.' },
    { q:'لَيْتَ expresses:', c:['an (often impossible) wish','certainty','a command','a question'], a:0, x:'layta sh-shabāba yaʿūdu — if only youth returned!' },
    { q:'رَبِّ in رَبِّ زِدْنِي عِلْمًا is:', c:['"my Lord" — vocative with dropped ي','"the lord" generic','a verb','plural'], a:0, x:'rabbi = yā rabbī, intimate address.' },
    { q:'أَظُنُّ أَنَّكَ عَلَى حَقٍّ means:', c:['I think you are right','you think I am right','I am certainly right','do you think so?'], a:0, x:'aẓunnu anna-ka ʿalā ḥaqq.' },
    { q:'لَعَلَّ colors a sentence with:', c:['hope/possibility — "perhaps"','impossibility','sarcasm','past tense'], a:0, x:'laʿalla + naṣb noun + predicate.' }
  ]}
);
