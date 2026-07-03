/* النحو — Track definition + Units 1–4 */
defineTrack({
  id: 'nahw',
  ar: 'النحو',
  en: 'Naḥw — Syntax',
  color: '#58a6ff',
  desc: 'Sentence grammar: how words take on roles (subject, predicate, object…) and how case endings (الإعراب) mark those roles. Sequence follows the classical primer Al-Ājurrūmiyyah (matn al-Ājurrūmiyyah, public domain).',
  units: [

  /* ───────────── UNIT N1 ───────────── */
  { id: 'n1', ar: 'الكلام وأقسامه', en: 'Speech & Its Parts', lessons: [

    { id: 'n1-1', ar: 'أقسام الكلام', en: 'The Three Parts of Speech',
      body: `<p>Classical grammar divides every word (كَلِمة) into exactly three kinds:</p>
<ul>
<li><b class="ar">اِسْم</b> (noun) — names a person, thing, quality, or idea. Signs: it accepts <span class="ar">ال</span>, tanwīn (<span class="ar">ــٌــٍــً</span>), a preposition before it, or being called with <span class="ar">يا</span>.</li>
<li><b class="ar">فِعْل</b> (verb) — an action tied to a time. Signs: it accepts <span class="ar">قَدْ</span>, <span class="ar">سَـ / سَوْفَ</span>, or the feminine tāʾ (<span class="ar">قالَتْ</span>).</li>
<li><b class="ar">حَرْف</b> (particle) — carries meaning only inside a sentence (<span class="ar">في، مِن، هَلْ، لَمْ</span>). It accepts none of the above signs.</li>
</ul>
<p>Meaningful speech (<span class="ar">الكَلام</span>) is defined in the Ājurrūmiyyah as <span class="ar">«اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ»</span> — a compound utterance that conveys a complete meaning.</p>`,
      examples: [
        { ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', src: 'Qurʾan 1:2', note: 'الحمد — noun (has ال and tanwīn potential); لِـ — particle; الله، رب، العالمين — nouns.' },
        { ar: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ', src: 'Qurʾan 23:1', note: 'أفلح is a verb — proven by قَدْ before it. المؤمنون is a noun (has ال).' },
        { ar: 'سَيَقُولُ السُّفَهَاءُ', src: 'Qurʾan 2:142', note: 'يقول is a verb — the future prefix سَـ attaches only to verbs.' }
      ],
      quiz: [
        { q: 'Which sign proves a word is a noun (اسم)?', opts: ['It accepts قَدْ before it', 'It accepts tanwīn or ال', 'It accepts سَوْفَ', 'It ends in sukūn'], a: 1, exp: 'Tanwīn, ال, prepositions, and النداء are signs of nouns; قد and سوف mark verbs.' },
        { q: 'In «قَدْ أَفْلَحَ الْمُؤْمِنُونَ», what part of speech is أَفْلَحَ?', opts: ['اسم', 'فعل', 'حرف', 'None'], a: 1, exp: 'قَدْ enters only on verbs.' },
        { q: 'What is «مِنْ» in «مِنَ الْمَسْجِدِ»?', opts: ['Noun', 'Verb', 'Particle (حرف)', 'Adjective'], a: 2, exp: 'مِن is a preposition — a حرف with meaning only in composition.' },
        { q: 'الكلام in grammar must be…', opts: ['Any sound', 'A single word', 'Compound and conveying complete meaning', 'Only a verbal sentence'], a: 2, exp: 'اللفظ المركب المفيد بالوضع.' }
      ] },

    { id: 'n1-2', ar: 'الجملة الاسمية والفعلية', en: 'Nominal & Verbal Sentences',
      body: `<p>Arabic has two sentence archetypes:</p>
<ul>
<li><b class="ar">الجملة الاسمية</b> — begins with a noun: a topic (<span class="ar">مُبْتَدَأ</span>) plus news about it (<span class="ar">خَبَر</span>): <span class="ar">العِلْمُ نُورٌ</span> "Knowledge is light".</li>
<li><b class="ar">الجملة الفعلية</b> — begins with a verb, followed by its doer (<span class="ar">فاعِل</span>) and possibly an object: <span class="ar">كَتَبَ الطّالِبُ الدَّرْسَ</span>.</li>
</ul>
<p>The choice is not cosmetic: nominal sentences assert states and characteristics; verbal sentences narrate events. Much of naḥw is learning the case-roles inside each type.</p>`,
      examples: [
        { ar: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ', src: 'Qurʾan 24:35', note: 'Nominal: الله mubtadaʾ, نور khabar.' },
        { ar: 'خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ', src: 'Qurʾan 29:44', note: 'Verbal: verb خلق, doer الله, object السماوات.' },
        { ar: 'الْخَيْلُ وَاللَّيْلُ وَالْبَيْدَاءُ تَعْرِفُنِي', src: 'al-Mutanabbī', note: 'Nominal sentence whose khabar is itself a verbal sentence (تعرفني).' }
      ],
      quiz: [
        { q: '«الصِّدْقُ مَنْجَاةٌ» is a…', opts: ['Verbal sentence', 'Nominal sentence', 'Particle phrase', 'Command'], a: 1, exp: 'It opens with the noun الصدق (mubtadaʾ).' },
        { q: 'A جملة فعلية must begin with…', opts: ['A noun', 'A verb', 'A preposition', 'إنَّ'], a: 1, exp: 'By definition it opens with the verb.' },
        { q: 'In «خَلَقَ اللَّهُ السَّمَاوَاتِ», the word اللهُ functions as…', opts: ['مبتدأ', 'خبر', 'فاعل', 'مفعول به'], a: 2, exp: 'It is the doer of خلق in a verbal sentence.' },
        { q: 'Which sentence type typically asserts a stable state or attribute?', opts: ['الجملة الفعلية', 'الجملة الاسمية', 'Both equally', 'Neither'], a: 1, exp: 'Nominal sentences characterize; verbal ones narrate events.' }
      ] },

    { id: 'n1-3', ar: 'المعرب والمبني', en: 'Declinable & Indeclinable Words',
      body: `<p><b class="ar">الإعراب</b> is the change of a word's ending according to its role in the sentence. Words split into:</p>
<ul>
<li><b class="ar">مُعْرَب</b> — the ending changes: <span class="ar">جاءَ الرَّجُلُ / رأيتُ الرَّجُلَ / مررتُ بالرَّجُلِ</span>.</li>
<li><b class="ar">مَبْنِيّ</b> — the ending is fixed no matter the role: pronouns (<span class="ar">هُوَ، أنتَ</span>), demonstratives (<span class="ar">هذا</span>), relatives (<span class="ar">الَّذي</span>), all particles, the past verb, and the command verb.</li>
</ul>
<p>The four states of iʿrāb: <span class="ar">رَفْع</span> (nominative), <span class="ar">نَصْب</span> (accusative), <span class="ar">جَرّ</span> (genitive — nouns only), <span class="ar">جَزْم</span> (jussive — verbs only).</p>`,
      examples: [
        { ar: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا', src: 'Qurʾan 20:114', note: 'قُلْ and زِدْ are command verbs — mabnī. عِلْمًا is muʿrab, manṣūb.' },
        { ar: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ', src: 'Qurʾan 2:2', note: 'ذلك is mabnī (demonstrative) though it sits as mubtadaʾ.' },
        { ar: 'جاءَ الرَّجُلُ • رأيتُ الرَّجُلَ • مررتُ بالرَّجُلِ', src: 'classic paradigm', note: 'One word, three endings — the essence of iʿrāb.' }
      ],
      quiz: [
        { q: 'إعراب means…', opts: ['Fixed word endings', 'Change of ending according to grammatical role', 'Vowel harmony', 'Word derivation'], a: 1, exp: 'The ending tracks the word\'s function.' },
        { q: 'Which of these is always مبني?', opts: ['The present verb', 'The dual noun', 'The past verb', 'The broken plural'], a: 2, exp: 'الفعل الماضي is always mabnī; the present verb is muʿrab unless a pronoun of emphasis/feminine plural attaches.' },
        { q: 'Which case applies to verbs only?', opts: ['رفع', 'نصب', 'جر', 'جزم'], a: 3, exp: 'جزم is exclusive to verbs; جر is exclusive to nouns.' },
        { q: 'In «مررتُ بالرَّجُلِ», the kasra on الرجلِ marks…', opts: ['رفع', 'نصب', 'جر', 'جزم'], a: 2, exp: 'After the preposition بـ the noun is majrūr.' }
      ] }
  ]},

  /* ───────────── UNIT N2 ───────────── */
  { id: 'n2', ar: 'علامات الإعراب', en: 'The Signs of Iʿrāb', lessons: [

    { id: 'n2-1', ar: 'الرفع وعلاماته', en: 'Rafʿ & Its Signs',
      body: `<p><b class="ar">الرَّفْع</b> marks subjects and topics: the فاعل, the مبتدأ and خبر, and the unafflicted present verb. Its signs:</p>
<ul>
<li><b>ḍamma</b> <span class="ar">ــُ</span> — the default: singular nouns, broken plurals, feminine sound plurals, present verbs.</li>
<li><b class="ar">واو</b> — in the five nouns (<span class="ar">أبوكَ، أخوكَ…</span>) and the masculine sound plural (<span class="ar">المؤمنونَ</span>).</li>
<li><b class="ar">ألف</b> — in the dual (<span class="ar">رَجُلانِ</span>).</li>
<li><b>retention of نون</b> — in the five verbs (<span class="ar">يفعلانِ، تفعلانِ، يفعلونَ، تفعلونَ، تفعلينَ</span>).</li>
</ul>`,
      examples: [
        { ar: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ', src: 'Qurʾan 23:1', note: 'المؤمنون — fāʿil, marfūʿ by the wāw (masc. sound plural).' },
        { ar: 'قَالَ رَجُلَانِ', src: 'Qurʾan 5:23', note: 'رجلان — fāʿil, marfūʿ by the alif (dual).' },
        { ar: 'وَأَبُونَا شَيْخٌ كَبِيرٌ', src: 'Qurʾan 28:23', note: 'أبونا — mubtadaʾ, marfūʿ by the wāw (five nouns).' }
      ],
      quiz: [
        { q: 'The default sign of رفع is…', opts: ['fatḥa', 'ḍamma', 'kasra', 'sukūn'], a: 1, exp: 'الضمة هي علامة الرفع الأصلية.' },
        { q: 'In «قَالَ رَجُلَانِ», what marks the rafʿ of رجلان?', opts: ['ḍamma', 'wāw', 'alif', 'nūn retention'], a: 2, exp: 'Duals take alif in rafʿ.' },
        { q: 'المؤمنونَ is marfūʿ by…', opts: ['ḍamma', 'alif', 'wāw', 'kasra'], a: 2, exp: 'Masculine sound plurals take wāw in rafʿ.' },
        { q: 'Which verb shows rafʿ by retention of the nūn?', opts: ['يَكْتُبُ', 'يَكْتُبَانِ', 'لَمْ يَكْتُبْ', 'كَتَبَ'], a: 1, exp: 'يكتبان is one of الأفعال الخمسة — rafʿ = ثبوت النون.' }
      ] },

    { id: 'n2-2', ar: 'النصب وعلاماته', en: 'Naṣb & Its Signs',
      body: `<p><b class="ar">النَّصْب</b> marks objects, circumstances, and the present verb after particles like <span class="ar">أَنْ، لَنْ، كَيْ</span>. Its signs:</p>
<ul>
<li><b>fatḥa</b> <span class="ar">ــَ</span> — the default.</li>
<li><b class="ar">ألف</b> — in the five nouns (<span class="ar">رأيتُ أباكَ</span>).</li>
<li><b>kasra</b> — in the feminine sound plural (<span class="ar">خلقَ اللهُ السماواتِ</span>) — naṣb shown by kasra!</li>
<li><b class="ar">ياء</b> — in the dual and masculine sound plural (<span class="ar">رأيتُ المعلمَيْنِ / المعلمِينَ</span>).</li>
<li><b>dropping the نون</b> — in the five verbs (<span class="ar">لن تفعلوا</span>).</li>
</ul>`,
      examples: [
        { ar: 'خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ', src: 'Qurʾan 29:44', note: 'السماواتِ — object, manṣūb by kasra (fem. sound plural).' },
        { ar: 'قَالُوا يَا أَبَانَا', src: 'Qurʾan 12:11', note: 'أبانا — munādā muḍāf, manṣūb by the alif (five nouns).' },
        { ar: 'لَنْ نُؤْمِنَ لَكَ', src: 'Qurʾan 2:55', note: 'نؤمنَ — present verb manṣūb by fatḥa after لن.' }
      ],
      quiz: [
        { q: 'In «خَلَقَ اللهُ السماواتِ», the kasra on السماواتِ indicates…', opts: ['جر', 'رفع', 'نصب', 'جزم'], a: 2, exp: 'Feminine sound plurals take kasra in place of fatḥa for naṣb.' },
        { q: 'The naṣb sign in «يا أبانا» is…', opts: ['fatḥa', 'alif', 'yāʾ', 'kasra'], a: 1, exp: 'The five nouns show naṣb with alif.' },
        { q: 'What happens to «تفعلونَ» after لن?', opts: ['Nothing', 'It becomes تفعلونَّ', 'The nūn drops: لن تفعلوا', 'It gains tanwīn'], a: 2, exp: 'The five verbs show naṣb by dropping the nūn.' },
        { q: 'رأيتُ المعلمِينَ — the yāʾ marks…', opts: ['رفع of sound plural', 'نصب of sound plural', 'جر only', 'جزم'], a: 1, exp: 'Masc. sound plural takes yāʾ in both naṣb and jarr; here it is object → naṣb.' }
      ] },

    { id: 'n2-3', ar: 'الجر والجزم', en: 'Jarr & Jazm',
      body: `<p><b class="ar">الجَرّ</b> (nouns only) occurs after prepositions, in iḍāfa, and in following words (توابع). Signs:</p>
<ul>
<li><b>kasra</b> — the default.</li>
<li><b class="ar">ياء</b> — five nouns, dual, masculine sound plural (<span class="ar">مررتُ بأبيكَ / بالمعلمَيْنِ</span>).</li>
<li><b>fatḥa</b> — in the diptote (<span class="ar">الممنوع من الصرف</span>): <span class="ar">بِمَصَابِيحَ</span>.</li>
</ul>
<p><b class="ar">الجَزْم</b> (verbs only) occurs after <span class="ar">لَمْ، لَمَّا، لام الأمر، لا الناهية</span> and in conditionals. Signs: <b>sukūn</b> (<span class="ar">لم يَكْتُبْ</span>), <b>dropping the weak letter</b> (<span class="ar">لم يَدْعُ، لم يَرْمِ</span>), <b>dropping the نون</b> (<span class="ar">لم يفعلوا</span>).</p>`,
      examples: [
        { ar: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', src: 'Qurʾan 112:3', note: 'Both verbs majzūm by sukūn after لم.' },
        { ar: 'وَزَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ', src: 'Qurʾan 67:5', note: 'مصابيحَ — majrūr by fatḥa: a diptote pattern (مَفاعِيل).' },
        { ar: 'قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ', src: 'Imruʾ al-Qays, Muʿallaqa', note: 'نَبْكِ — majzūm (reply to the command) by dropping the weak yāʾ (أصلها نبكي).' }
      ],
      quiz: [
        { q: 'Which case never applies to nouns?', opts: ['رفع', 'نصب', 'جر', 'جزم'], a: 3, exp: 'Jazm is verbs-only, as jarr is nouns-only.' },
        { q: 'Why is «بِمَصَابِيحَ» majrūr with fatḥa?', opts: ['Scribal error', 'It is a diptote (ممنوع من الصرف)', 'It is a dual', 'It is mabnī'], a: 1, exp: 'Diptotes take fatḥa instead of kasra and no tanwīn.' },
        { q: 'In «لَمْ يَدْعُ», the jazm sign is…', opts: ['sukūn', 'dropping the weak final letter', 'dropping the nūn', 'fatḥa'], a: 1, exp: 'Weak-final (ناقص) verbs lose their final letter in jazm: أصلها يدعو.' },
        { q: 'In the poetry line «قفا نبكِ…», why is نبكِ shortened?', opts: ['Poetic license only', 'It is majzūm — the weak letter dropped', 'It is manṣūb', 'It is a noun'], a: 1, exp: 'It is the jussive response to the imperative قفا.' }
      ] },

    { id: 'n2-4', ar: 'الأسماء الخمسة والمثنى والجموع', en: 'The Five Nouns, Dual & Plurals',
      body: `<p>Classes that decline with <em>letters</em> instead of vowels:</p>
<ul>
<li><b class="ar">الأسماء الخمسة</b> (<span class="ar">أب، أخ، حَم، فُو، ذُو</span>) when muḍāf to other than yāʾ: rafʿ <span class="ar">أبوكَ</span>, naṣb <span class="ar">أباكَ</span>, jarr <span class="ar">أبيكَ</span>.</li>
<li><b class="ar">المثنى</b>: rafʿ by alif <span class="ar">ـانِ</span>, naṣb/jarr by yāʾ <span class="ar">ـيْنِ</span>.</li>
<li><b class="ar">جمع المذكر السالم</b>: rafʿ by wāw <span class="ar">ـونَ</span>, naṣb/jarr by yāʾ <span class="ar">ـِينَ</span>.</li>
<li><b class="ar">جمع المؤنث السالم</b>: rafʿ by ḍamma, naṣb & jarr both by kasra.</li>
<li><b class="ar">جمع التكسير</b> (broken plural): declines like a singular (ḍamma/fatḥa/kasra).</li>
</ul>`,
      examples: [
        { ar: 'وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ', src: 'Qurʾan 6:74', note: 'أبيه — majrūr by yāʾ after لـ (five nouns).' },
        { ar: 'إِذْ أَرْسَلْنَا إِلَيْهِمُ اثْنَيْنِ', src: 'Qurʾan 36:14', note: 'اثنين — majrūr by yāʾ (dual after إلى).' },
        { ar: 'إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ', src: 'Qurʾan 33:35', note: 'المسلمين manṣūb by yāʾ; المسلماتِ manṣūb by kasra.' }
      ],
      quiz: [
        { q: 'أبوكَ، أباكَ، أبيكَ — this three-way change uses…', opts: ['Vowels', 'Letters (و/ا/ي)', 'Tanwīn', 'Nothing'], a: 1, exp: 'The five nouns decline with letters.' },
        { q: '«رأيتُ الطالبَيْنِ» — the yāʾ here shows…', opts: ['Dual in naṣb', 'Plural in rafʿ', 'Dual in rafʿ', 'Diptote jarr'], a: 0, exp: 'Duals take yāʾ (ـيْن) in naṣb and jarr.' },
        { q: 'How does جمع التكسير decline?', opts: ['Always with letters', 'Like a singular noun, with vowels', 'It is mabnī', 'Only with kasra'], a: 1, exp: 'Broken plurals take normal vowel endings.' },
        { q: 'In «إن المسلماتِ», the kasra shows…', opts: ['جر', 'نصب', 'رفع', 'جزم'], a: 1, exp: 'اسم إنّ is manṣūb; fem. sound plural shows naṣb by kasra.' }
      ] }
  ]},

  /* ───────────── UNIT N3 ───────────── */
  { id: 'n3', ar: 'الجملة الاسمية ونواسخها', en: 'The Nominal Sentence & Its Modifiers', lessons: [

    { id: 'n3-1', ar: 'المبتدأ والخبر', en: 'Mubtadaʾ & Khabar',
      body: `<p>The nominal sentence = <b class="ar">مبتدأ</b> (topic, marfūʿ) + <b class="ar">خبر</b> (predicate, marfūʿ). The khabar comes in three shapes:</p>
<ul>
<li><b>Single word</b>: <span class="ar">العلمُ نورٌ</span>.</li>
<li><b>Sentence</b> (nominal or verbal) containing a pronoun linking back: <span class="ar">الطالبُ يجتهدُ</span>.</li>
<li><b>Quasi-sentence</b> (شبه جملة — prepositional phrase or ẓarf): <span class="ar">الكتابُ على الطاولةِ</span>.</li>
</ul>
<p>The mubtadaʾ is usually definite; the khabar usually indefinite. When the khabar is a shibh jumla and the mubtadaʾ indefinite, they invert: <span class="ar">في الدارِ رجلٌ</span>.</p>`,
      examples: [
        { ar: 'اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا', src: 'Qurʾan 2:257', note: 'الله mubtadaʾ; وليُّ khabar (muḍāf).' },
        { ar: 'لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ', src: 'Qurʾan 2:2', note: 'فيه — shibh jumla in khabar position.' },
        { ar: 'أَنَا الْبَحْرُ فِي أَحْشَائِهِ الدُّرُّ كَامِنُ', src: 'Ḥāfiẓ Ibrāhīm (on the Arabic language)', note: 'أنا mubtadaʾ (mabnī pronoun in rafʿ position); البحر khabar.' }
      ],
      quiz: [
        { q: 'Both mubtadaʾ and khabar are, by default…', opts: ['manṣūb', 'marfūʿ', 'majrūr', 'majzūm'], a: 1, exp: 'رفع is the mark of the nominal sentence pillars.' },
        { q: 'In «الطالبُ يجتهدُ», the khabar is…', opts: ['A single word', 'A verbal sentence', 'A prepositional phrase', 'Missing'], a: 1, exp: 'جملة فعلية with the hidden pronoun linking to الطالب.' },
        { q: 'Why is «في الدارِ رجلٌ» inverted?', opts: ['Style only', 'Indefinite mubtadaʾ with shibh-jumla khabar must invert', 'رجل is majrūr', 'It is a verbal sentence'], a: 1, exp: 'An indefinite mubtadaʾ needs the khabar fronted.' },
        { q: 'In «اللهُ وليُّ الذين آمنوا», what is وليُّ?', opts: ['مبتدأ', 'خبر', 'فاعل', 'نعت'], a: 1, exp: 'It predicates about الله.' }
      ] },

    { id: 'n3-2', ar: 'كان وأخواتها', en: 'Kāna & Its Sisters',
      body: `<p><b class="ar">كان وأخواتها</b> (<span class="ar">كان، أصبح، أمسى، ظلّ، بات، صار، ليس، ما زال، ما دام…</span>) enter a nominal sentence and:</p>
<ul>
<li>keep the mubtadaʾ marfūʿ — now called <b class="ar">اسم كان</b>;</li>
<li>make the khabar manṣūb — now called <b class="ar">خبر كان</b>.</li>
</ul>
<p><span class="ar">العلمُ نورٌ ← كان العلمُ نورًا</span>. They add time/continuity: <span class="ar">أصبح</span> "became (by morning)", <span class="ar">ليس</span> negation, <span class="ar">ما زال</span> "still is".</p>`,
      examples: [
        { ar: 'وَكَانَ اللَّهُ عَلِيمًا حَكِيمًا', src: 'Qurʾan 4:17', note: 'الله ism kāna (marfūʿ); عليمًا khabar kāna (manṣūb).' },
        { ar: 'لَيْسَ كَمِثْلِهِ شَيْءٌ', src: 'Qurʾan 42:11', note: 'شيءٌ — ism laysa delayed; كمثله — khabar fronted.' },
        { ar: 'وَأَصْبَحَ فُؤَادُ أُمِّ مُوسَىٰ فَارِغًا', src: 'Qurʾan 28:10', note: 'فؤادُ ism aṣbaḥa; فارغًا its khabar.' }
      ],
      quiz: [
        { q: 'كان makes the khabar…', opts: ['marfūʿ', 'manṣūb', 'majrūr', 'majzūm'], a: 1, exp: 'ترفع الاسم وتنصب الخبر.' },
        { q: 'In «وكان اللهُ عليمًا حكيمًا», why is عليمًا manṣūb?', opts: ['It is an object', 'It is khabar kāna', 'It is tamyīz', 'It is ḥāl'], a: 1, exp: 'The predicate after كان takes naṣb.' },
        { q: 'Which sister negates?', opts: ['أصبح', 'ظلّ', 'ليس', 'صار'], a: 2, exp: 'ليس = "is not".' },
        { q: 'Transform: «الجوُّ جميلٌ» after ما زال becomes…', opts: ['ما زال الجوُّ جميلٌ', 'ما زال الجوَّ جميلًا', 'ما زال الجوُّ جميلًا', 'ما زال الجوِّ جميلٍ'], a: 2, exp: 'Ism stays marfūʿ, khabar becomes manṣūb.' }
      ] },

    { id: 'n3-3', ar: 'إنّ وأخواتها', en: 'Inna & Its Sisters',
      body: `<p><b class="ar">إنّ وأخواتها</b> (<span class="ar">إنَّ، أنَّ، كأنَّ، لكنَّ، ليتَ، لعلَّ</span>) do the <em>mirror image</em> of kāna:</p>
<ul>
<li>they make the mubtadaʾ manṣūb — <b class="ar">اسم إنّ</b>;</li>
<li>the khabar stays marfūʿ — <b class="ar">خبر إنّ</b>.</li>
</ul>
<p>Meanings: <span class="ar">إنّ/أنّ</span> emphasis, <span class="ar">كأنّ</span> resemblance, <span class="ar">لكنّ</span> contrast, <span class="ar">ليت</span> wish, <span class="ar">لعلّ</span> hope. <span class="ar">العلمُ نورٌ ← إنَّ العلمَ نورٌ</span>.</p>`,
      examples: [
        { ar: 'إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ', src: 'Qurʾan 2:173', note: 'اللهَ ism inna (manṣūb); غفورٌ khabar (marfūʿ).' },
        { ar: 'كَأَنَّهُنَّ الْيَاقُوتُ وَالْمَرْجَانُ', src: 'Qurʾan 55:58', note: 'The attached pronoun هنّ is ism kaʾanna; الياقوت khabar.' },
        { ar: 'لَعَلَّكُمْ تُفْلِحُونَ', src: 'Qurʾan 3:200', note: 'كم ism laʿalla; the verbal sentence تفلحون is khabar.' }
      ],
      quiz: [
        { q: 'إنّ makes its ism…', opts: ['marfūʿ', 'manṣūb', 'majrūr', 'unchanged'], a: 1, exp: 'تنصب الاسم وترفع الخبر — mirror of كان.' },
        { q: 'Which sister expresses a wish?', opts: ['لعلّ', 'ليت', 'لكنّ', 'كأنّ'], a: 1, exp: 'ليت = "would that…".' },
        { q: '«إنَّ العلمَ نورٌ» — why is نورٌ marfūʿ?', opts: ['It is fāʿil', 'It is khabar inna', 'It follows a preposition', 'Error in the sentence'], a: 1, exp: 'Khabar of إنّ keeps its rafʿ.' },
        { q: 'In «لعلكم تفلحون», the khabar of لعل is…', opts: ['كم', 'A verbal sentence', 'A single noun', 'Missing'], a: 1, exp: 'تفلحون is a jumla in khabar position.' }
      ] }
  ]},

  /* ───────────── UNIT N4 ───────────── */
  { id: 'n4', ar: 'الجملة الفعلية', en: 'The Verbal Sentence', lessons: [

    { id: 'n4-1', ar: 'الفاعل', en: 'The Doer (Fāʿil)',
      body: `<p>The <b class="ar">فاعل</b> is the marfūʿ noun following its verb, denoting who/what did the action (or is described by it). Rules:</p>
<ul>
<li>Always marfūʿ; always after the verb (if a noun precedes, it is a mubtadaʾ, not fāʿil).</li>
<li>The verb stays singular even for dual/plural doers: <span class="ar">كتبَ الطالبانِ / الطلابُ</span>.</li>
<li>The verb takes feminine tāʾ for a feminine doer: <span class="ar">قالتْ عائشةُ</span>.</li>
<li>The fāʿil may be a visible noun, an attached pronoun (<span class="ar">كتبْتُ</span> — the tāʾ), or a hidden pronoun (<span class="ar">اكتُبْ</span> — أنتَ implied).</li>
</ul>`,
      examples: [
        { ar: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ', src: 'Qurʾan 23:1', note: 'المؤمنون fāʿil, marfūʿ by wāw.' },
        { ar: 'وَقَالَتِ امْرَأَتُ فِرْعَوْنَ', src: 'Qurʾan 28:9', note: 'Feminine tāʾ on the verb; امرأت fāʿil.' },
        { ar: 'سَتُبْدِي لَكَ الْأَيَّامُ مَا كُنْتَ جَاهِلَا', src: 'Ṭarafa, Muʿallaqa', note: 'الأيامُ — fāʿil of ستبدي, delayed after لك.' }
      ],
      quiz: [
        { q: 'The fāʿil is always…', opts: ['manṣūb', 'marfūʿ', 'majrūr', 'mabnī'], a: 1, exp: 'رفع is the fāʿil\'s permanent state.' },
        { q: 'In «كتب الطالبانِ», why is the verb singular?', opts: ['Grammar error', 'The verb precedes and stays singular', 'الطالبان is an object', 'Dual verbs are forbidden'], a: 1, exp: 'When the verb comes first it does not pluralize.' },
        { q: 'In «كتبْتُ الدرسَ», the fāʿil is…', opts: ['الدرس', 'The attached تُ', 'Hidden هو', 'There is none'], a: 1, exp: 'تاء الفاعل is a pronoun in rafʿ position.' },
        { q: 'In «ستبدي لك الأيامُ…», the fāʿil is…', opts: ['لك', 'الأيامُ', 'ما', 'أنت'], a: 1, exp: 'الأيام does the revealing; delayed placement doesn\'t change the role.' }
      ] },

    { id: 'n4-2', ar: 'نائب الفاعل', en: 'The Passive & Its Subject',
      body: `<p>When the doer is removed, the verb goes passive (<span class="ar">مبني للمجهول</span>) and the object steps up as <b class="ar">نائب الفاعل</b> — marfūʿ.</p>
<ul>
<li>Past verb pattern: <span class="ar">فُعِلَ</span> — <span class="ar">كَتَبَ ← كُتِبَ</span>.</li>
<li>Present verb pattern: <span class="ar">يُفْعَلُ</span> — <span class="ar">يَكْتُبُ ← يُكْتَبُ</span>.</li>
<li><span class="ar">ضَرَبَ الولدُ الكلبَ ← ضُرِبَ الكلبُ</span> — the old object is now marfūʿ.</li>
</ul>`,
      examples: [
        { ar: 'قُتِلَ أَصْحَابُ الْأُخْدُودِ', src: 'Qurʾan 85:4', note: 'قُتِل passive; أصحابُ nāʾib fāʿil, marfūʿ.' },
        { ar: 'وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ', src: 'Qurʾan 11:44', note: 'قيل — passive of قال; the quoted sentence stands as nāʾib fāʿil.' },
        { ar: 'كُتِبَ عَلَيْكُمُ الصِّيَامُ', src: 'Qurʾan 2:183', note: 'الصيامُ nāʾib fāʿil of كُتب.' }
      ],
      quiz: [
        { q: 'نائب الفاعل takes which case?', opts: ['نصب', 'رفع', 'جر', 'جزم'], a: 1, exp: 'It inherits the fāʿil\'s rafʿ.' },
        { q: 'The passive of كَتَبَ is…', opts: ['كاتَبَ', 'كُتِبَ', 'كَتَّبَ', 'اكتَتَبَ'], a: 1, exp: 'فُعِل pattern: ḍamma then kasra.' },
        { q: 'In «كُتِبَ عليكم الصيامُ», the word الصيامُ is…', opts: ['فاعل', 'مفعول به', 'نائب فاعل', 'مبتدأ'], a: 2, exp: 'The verb is passive, so its marfūʿ noun is nāʾib fāʿil.' },
        { q: 'Passive present of يَعْلَمُ is…', opts: ['يُعْلَمُ', 'يَعْلُمُ', 'أُعْلِمَ', 'يُعَلِّمُ'], a: 0, exp: 'يُفْعَل: ḍamma on the prefix, fatḥa before the last.' }
      ] },

    { id: 'n4-3', ar: 'المفعول به', en: 'The Direct Object',
      body: `<p>The <b class="ar">مفعول به</b> is the manṣūb noun that receives the action: <span class="ar">قرأ الطالبُ الكتابَ</span>.</p>
<ul>
<li>Always manṣūb (fatḥa, or its substitutes: yāʾ for duals/sound plurals, kasra for fem. sound plural, alif for five nouns).</li>
<li>Some verbs take <b>two objects</b>: <span class="ar">أعطى، منح، ظنّ، جعل، وجد</span> — <span class="ar">أعطيتُ الفقيرَ درهمًا</span>.</li>
<li>It may precede the verb for emphasis: <span class="ar">إِيَّاكَ نَعْبُدُ</span> — the object إياك is fronted.</li>
</ul>`,
      examples: [
        { ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', src: 'Qurʾan 1:5', note: 'إياك — object pronoun fronted before the verb for exclusivity.' },
        { ar: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', src: 'Qurʾan 108:1', note: 'أعطى with two objects: الكاف and الكوثرَ.' },
        { ar: 'دَعِ الْأَيَّامَ تَفْعَلُ مَا تَشَاءُ', src: 'attrib. al-Shāfiʿī', note: 'الأيامَ — object of the command دَعْ.' }
      ],
      quiz: [
        { q: 'The direct object is always…', opts: ['marfūʿ', 'manṣūb', 'majrūr', 'mabnī'], a: 1, exp: 'النصب علامة المفعول به.' },
        { q: 'In «إنا أعطيناكَ الكوثرَ», how many objects does أعطى take here?', opts: ['One', 'Two', 'Three', 'None'], a: 1, exp: 'الكاف (you) and الكوثر.' },
        { q: 'In «إياكَ نعبدُ», the object…', opts: ['Follows the verb', 'Precedes the verb', 'Is missing', 'Is marfūʿ'], a: 1, exp: 'Fronting the object restricts worship to Him alone.' },
        { q: 'Find the object: «دع الأيامَ تفعل ما تشاء»', opts: ['دع', 'الأيامَ', 'تفعل', 'ما'], a: 1, exp: 'الأيام receives the action of دَعْ.' }
      ] },

    { id: 'n4-4', ar: 'المفاعيل الأخرى', en: 'The Other Objects (Maf ʿūlāt)',
      body: `<p>Beyond the direct object, Arabic has manṣūb "objects" of manner, reason, and setting:</p>
<ul>
<li><b class="ar">المفعول المطلق</b> — a maṣdar of the same verb, for emphasis/count/type: <span class="ar">وكلَّم اللهُ موسى تكليمًا</span>.</li>
<li><b class="ar">المفعول لأجله</b> — a maṣdar giving the reason: <span class="ar">قمتُ إجلالًا له</span>.</li>
<li><b class="ar">المفعول فيه (الظرف)</b> — time/place container: <span class="ar">سافرتُ ليلًا، جلستُ أمامَ البيتِ</span>.</li>
</ul>
<p>All are manṣūb; each answers a different question — "how much/truly?", "why?", "when/where?".</p>`,
      examples: [
        { ar: 'وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا', src: 'Qurʾan 4:164', note: 'تكليمًا — mafʿūl muṭlaq emphasizing the verb.' },
        { ar: 'يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ مِنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ', src: 'Qurʾan 2:19', note: 'حذرَ — mafʿūl li-ajlih: the reason (fearing death).' },
        { ar: 'وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا', src: 'Qurʾan 33:42', note: 'بكرةً وأصيلًا — ẓarf zamān (morning and evening).' }
      ],
      quiz: [
        { q: 'تكليمًا in «وكلم الله موسى تكليمًا» is…', opts: ['مفعول به', 'مفعول مطلق', 'حال', 'تمييز'], a: 1, exp: 'A cognate maṣdar emphasizing the verb.' },
        { q: 'المفعول لأجله answers which question?', opts: ['When?', 'Why?', 'How?', 'How many?'], a: 1, exp: 'It states the motive of the action.' },
        { q: 'In «سافرتُ ليلًا», the word ليلًا is…', opts: ['مفعول به', 'ظرف زمان', 'ظرف مكان', 'فاعل'], a: 1, exp: 'A time container for the action.' },
        { q: 'All the mafʿūlāt share which case?', opts: ['رفع', 'نصب', 'جر', 'جزم'], a: 1, exp: 'They are all manṣūb.' }
      ] }
  ]}
]});
