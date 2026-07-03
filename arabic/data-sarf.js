/* الصرف — Track definition, Units S1–S4 */
defineTrack({
  id: 'sarf',
  ar: 'الصرف',
  en: 'Ṣarf — Morphology',
  color: '#a371f7',
  desc: 'Word-building: the root system, the morphological scale (الميزان الصرفي), verb conjugation, the ten derived forms, derived nouns, and weak-root changes (الإعلال). Sequence informed by the classical primers Bināʾ al-Afʿāl and Matn al-Maqṣūd (public domain).',
  units: [

  /* ───────────── UNIT S1 ───────────── */
  { id: 's1', ar: 'الميزان الصرفي والتصريف', en: 'The Scale & Basic Conjugation', lessons: [

    { id: 's1-1', ar: 'الجذر والميزان الصرفي', en: 'Roots & the Morphological Scale',
      body: `<p>Nearly every Arabic word grows from a (usually 3-letter) <b class="ar">جذر</b> (root). Morphology weighs words against the scale <b class="ar">فَ عَ لَ</b>:</p>
<ul>
<li>1st root letter ↔ <span class="ar">ف</span> (فاء الكلمة), 2nd ↔ <span class="ar">ع</span>, 3rd ↔ <span class="ar">ل</span>.</li>
<li><span class="ar">كَتَبَ</span> weighs <span class="ar">فَعَلَ</span>; <span class="ar">كاتِب</span> weighs <span class="ar">فاعِل</span>; <span class="ar">مَكْتُوب</span> weighs <span class="ar">مَفْعُول</span>; <span class="ar">اِسْتَخْرَجَ</span> weighs <span class="ar">اِسْتَفْعَلَ</span>.</li>
<li>Added letters (from the set <span class="ar">سألتمونيها</span>) appear on the scale as themselves; doubled root letters double the scale letter: <span class="ar">قَدَّمَ ← فَعَّلَ</span>.</li>
</ul>
<p>Mastering the scale lets you decode any unfamiliar word: strip the pattern, find the root, look it up.</p>`,
      examples: [
        { ar: 'كَتَبَ ← فَعَلَ • كاتِب ← فاعِل • مَكْتُوب ← مَفْعُول', src: 'root ك-ت-ب', note: 'One root, many patterns — the heart of ṣarf.' },
        { ar: 'إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', src: 'Qurʾan 97:1', note: 'أنزل ← أَفْعَلَ from root ن-ز-ل: the hamza is an addition letter.' },
        { ar: 'اِسْتَغْفِرُوا رَبَّكُمْ', src: 'Qurʾan 11:52', note: 'استغفر ← اِسْتَفْعَلَ from غ-ف-ر: three added letters (ا س ت).' }
      ],
      quiz: [
        { q: 'The scale letters فعل correspond to…', opts: ['Any three letters', 'The three root letters in order', 'Prefixes', 'Vowels only'], a: 1, exp: 'ف = 1st radical, ع = 2nd, ل = 3rd.' },
        { q: 'What is the wazn of مَكْتُوب?', opts: ['فاعِل', 'مَفْعُول', 'فَعِيل', 'مِفْعال'], a: 1, exp: 'م added + root ك ت ب + و.' },
        { q: 'The root of اسْتَغْفَرَ is…', opts: ['س-غ-ف', 'غ-ف-ر', 'س-ت-غ', 'ا-س-ت'], a: 1, exp: 'Strip the استـ addition: غ ف ر.' },
        { q: 'قَدَّمَ weighs…', opts: ['فَعَلَ', 'فاعَلَ', 'فَعَّلَ', 'أَفْعَلَ'], a: 2, exp: 'The doubled middle radical doubles the ع of the scale.' }
      ] },

    { id: 's1-2', ar: 'تصريف الماضي', en: 'Conjugating the Past Tense',
      body: `<p>The <b class="ar">فعل ماضٍ</b> conjugates with suffixes only — 14 forms. From <span class="ar">كَتَبَ</span>:</p>
<table class="conj"><tr><th></th><th>Singular</th><th>Dual</th><th>Plural</th></tr>
<tr><td>3m</td><td class="ar">كَتَبَ</td><td class="ar">كَتَبَا</td><td class="ar">كَتَبُوا</td></tr>
<tr><td>3f</td><td class="ar">كَتَبَتْ</td><td class="ar">كَتَبَتَا</td><td class="ar">كَتَبْنَ</td></tr>
<tr><td>2m</td><td class="ar">كَتَبْتَ</td><td class="ar" rowspan="2">كَتَبْتُمَا</td><td class="ar">كَتَبْتُمْ</td></tr>
<tr><td>2f</td><td class="ar">كَتَبْتِ</td><td class="ar">كَتَبْتُنَّ</td></tr>
<tr><td>1</td><td class="ar">كَتَبْتُ</td><td></td><td class="ar">كَتَبْنَا</td></tr></table>
<p>The suffixes (<span class="ar">ـتَ، ـتِ، ـتُ، ـنا، ـوا…</span>) are themselves pronouns serving as the fāʿil.</p>`,
      examples: [
        { ar: 'قَالُوا سَمِعْنَا وَأَطَعْنَا', src: 'Qurʾan 2:285', note: 'قالوا 3mp; سمعنا وأطعنا 1p — the نا is the fāʿil.' },
        { ar: 'قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَىٰ', src: 'Qurʾan 3:36', note: 'قالتْ 3fs (feminine tāʾ); وضعتُ 1s.' },
        { ar: 'فَلَمَّا بَلَغَا مَجْمَعَ بَيْنِهِمَا نَسِيَا حُوتَهُمَا', src: 'Qurʾan 18:61', note: 'بلغا / نسيا — dual past with alif.' }
      ],
      quiz: [
        { q: '"You (f. sg.) wrote" =', opts: ['كَتَبْتَ', 'كَتَبْتِ', 'كَتَبَتْ', 'كَتَبْتُ'], a: 1, exp: 'ـتِ with kasra = 2nd fem. sg.' },
        { q: 'كَتَبْنَ means…', opts: ['We wrote', 'They (f. pl.) wrote', 'They (m. pl.) wrote', 'She wrote'], a: 1, exp: 'نون النسوة = 3rd fem. plural.' },
        { q: 'In «سمعنا», the fāʿil is…', opts: ['Hidden هو', 'The suffix نا', 'سمع itself', 'Missing'], a: 1, exp: 'نا الفاعلين is an attached pronoun in rafʿ position.' },
        { q: '"They (two, m.) reached" =', opts: ['بَلَغُوا', 'بَلَغَا', 'بَلَغْتُمَا', 'بَلَغْنَ'], a: 1, exp: 'Alif of the dual: بلغا.' }
      ] },

    { id: 's1-3', ar: 'تصريف المضارع', en: 'Conjugating the Present Tense',
      body: `<p>The <b class="ar">فعل مضارع</b> adds one of the prefixes <b class="ar">أ ن ي ت</b> (letters of <span class="ar">أنيت</span>) and, for some persons, suffixes:</p>
<table class="conj"><tr><th></th><th>Singular</th><th>Dual</th><th>Plural</th></tr>
<tr><td>3m</td><td class="ar">يَكْتُبُ</td><td class="ar">يَكْتُبَانِ</td><td class="ar">يَكْتُبُونَ</td></tr>
<tr><td>3f</td><td class="ar">تَكْتُبُ</td><td class="ar">تَكْتُبَانِ</td><td class="ar">يَكْتُبْنَ</td></tr>
<tr><td>2m</td><td class="ar">تَكْتُبُ</td><td class="ar" rowspan="2">تَكْتُبَانِ</td><td class="ar">تَكْتُبُونَ</td></tr>
<tr><td>2f</td><td class="ar">تَكْتُبِينَ</td><td class="ar">تَكْتُبْنَ</td></tr>
<tr><td>1</td><td class="ar">أَكْتُبُ</td><td></td><td class="ar">نَكْتُبُ</td></tr></table>
<p>The middle vowel varies by verb and must be memorized: <span class="ar">يَكْتُبُ</span> (u), <span class="ar">يَجْلِسُ</span> (i), <span class="ar">يَفْتَحُ</span> (a). The five forms ending in <span class="ar">ـانِ ـونَ ـينَ</span> are الأفعال الخمسة.</p>`,
      examples: [
        { ar: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ', src: 'Qurʾan 2:3', note: 'يؤمنون، يقيمون — five-verbs forms, marfūʿ by nūn retention.' },
        { ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', src: 'Qurʾan 1:5', note: 'نعبد، نستعين — 1st plural with نـ prefix.' },
        { ar: 'سَتُبْدِي لَكَ الْأَيَّامُ مَا كُنْتَ جَاهِلَا', src: 'Ṭarafa', note: 'تُبدي — 3fs prefix تـ agreeing with الأيام.' }
      ],
      quiz: [
        { q: 'The present-tense prefixes are…', opts: ['ستم', 'أنيت', 'قد س', 'ال'], a: 1, exp: 'أ (I), ن (we), ي (he/they), ت (you/she).' },
        { q: '"She writes" =', opts: ['يَكْتُبُ', 'تَكْتُبُ', 'تَكْتُبِينَ', 'أَكْتُبُ'], a: 1, exp: '3fs uses تـ — identical in form to 2ms.' },
        { q: 'Which is one of الأفعال الخمسة?', opts: ['نكتب', 'يكتبون', 'أكتب', 'كتبوا'], a: 1, exp: 'The five verbs end in ـان/ـون/ـين in the present.' },
        { q: 'The middle vowel of the muḍāriʿ (يَكتُب vs يَجلِس)…', opts: ['Is always ḍamma', 'Follows a strict rule', 'Varies by verb — memorized with the verb', 'Is always fatḥa'], a: 2, exp: 'Dictionaries list it: كتب يكتُب، جلس يجلِس، فتح يفتَح.' }
      ] },

    { id: 's1-4', ar: 'الأمر ونواصب المضارع وجوازمه', en: 'The Command & Governed Present',
      body: `<p><b class="ar">فعل الأمر</b> is built from the present: drop the prefix; if the remainder starts with a cluster, add a helping alif whose vowel follows the middle vowel: <span class="ar">يَكْتُبُ ← اُكْتُبْ</span>، <span class="ar">يَجْلِسُ ← اِجْلِسْ</span>. Verbs like <span class="ar">يُقَدِّمُ</span> need no alif: <span class="ar">قَدِّمْ</span>.</p>
<p>The present verb changes state after particles:</p>
<ul>
<li><b>Naṣb</b> after <span class="ar">أَنْ، لَنْ، كَيْ، حتى، لام التعليل</span>: <span class="ar">لن يذهبَ</span>.</li>
<li><b>Jazm</b> after <span class="ar">لَمْ، لَمَّا، لام الأمر، لا الناهية</span> and condition words (<span class="ar">إنْ، مَن، مهما…</span>): <span class="ar">لم يذهبْ، لا تحزنْ</span>.</li>
</ul>`,
      examples: [
        { ar: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', src: 'Qurʾan 96:1', note: 'اقرأ — amr of يقرأ with helping alif.' },
        { ar: 'لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا', src: 'Qurʾan 9:40', note: 'تحزنْ majzūm by لا الناهية — sukūn.' },
        { ar: 'دَعِ الْأَيَّامَ تَفْعَلُ مَا تَشَاءُ • وَطِبْ نَفْسًا إِذَا حَكَمَ الْقَضَاءُ', src: 'attrib. al-Shāfiʿī', note: 'دَعْ and طِبْ — commands of weak verbs (يدَع، يطيب) lose letters.' }
      ],
      quiz: [
        { q: 'The command of يَجْلِسُ is…', opts: ['اُجْلُسْ', 'اِجْلِسْ', 'جْلِسْ', 'اَجْلَسْ'], a: 1, exp: 'Helping alif takes kasra because the middle vowel is kasra.' },
        { q: 'After لن, the present verb is…', opts: ['marfūʿ', 'manṣūb', 'majzūm', 'mabnī'], a: 1, exp: 'لن ينصب المضارع.' },
        { q: '«لا تحزنْ» — the sukūn shows…', opts: ['naṣb', 'jazm by لا الناهية', 'rafʿ', 'Nothing'], a: 1, exp: 'The prohibitive لا governs jazm.' },
        { q: 'Why does قَدِّمْ (command of يُقَدِّم) need no helping alif?', opts: ['It is irregular', 'After dropping the prefix, it starts with a voweled letter', 'Commands never take alif', 'It is a noun'], a: 1, exp: 'The alif is only needed to break an initial cluster.' }
      ] }
  ]},

  /* ───────────── UNIT S2 ───────────── */
  { id: 's2', ar: 'الأوزان المزيدة', en: 'The Derived Verb Forms', lessons: [

    { id: 's2-1', ar: 'فَعَّلَ، فاعَلَ، أَفْعَلَ', en: 'Forms II, III & IV',
      body: `<p>Adding letters to the bare root shifts meaning systematically:</p>
<ul>
<li><b class="ar">فَعَّلَ</b> (II — doubled ʿayn): intensive or causative: <span class="ar">عَلِمَ</span> know → <span class="ar">عَلَّمَ</span> teach; <span class="ar">نَزَلَ</span> descend → <span class="ar">نَزَّلَ</span> send down repeatedly.</li>
<li><b class="ar">فاعَلَ</b> (III — alif after فاء): mutual/directed action: <span class="ar">قَتَلَ</span> → <span class="ar">قاتَلَ</span> fight (each other); <span class="ar">كاتَبَ</span> correspond.</li>
<li><b class="ar">أَفْعَلَ</b> (IV — hamza prefix): causative: <span class="ar">خَرَجَ</span> exit → <span class="ar">أَخْرَجَ</span> expel; <span class="ar">نَزَلَ</span> → <span class="ar">أَنْزَلَ</span> send down.</li>
</ul>
<p>Note the Qurʾanic pairing: <span class="ar">نَزَّلَ</span> (gradual revelation) vs <span class="ar">أَنْزَلَ</span> (sending down as a whole).</p>`,
      examples: [
        { ar: 'نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ … وَأَنْزَلَ التَّوْرَاةَ وَالْإِنْجِيلَ', src: 'Qurʾan 3:3', note: 'Form II and Form IV of ن-ز-ل side by side.' },
        { ar: 'وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا', src: 'Qurʾan 2:31', note: 'علّم — Form II causative of علم: made him know.' },
        { ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا', src: 'Qurʾan 2:104', note: 'آمن — Form IV of أ-م-ن (the two hamzas fuse into آ).' }
      ],
      quiz: [
        { q: 'Form فَعَّلَ typically adds what meaning?', opts: ['Reflexive', 'Intensive/causative', 'Passive', 'Request'], a: 1, exp: 'التكثير والتعدية: علّم، كسّر، نزّل.' },
        { q: 'قاتَلَ (Form III) most often implies…', opts: ['Doing to oneself', 'Mutual/directed action', 'Becoming', 'Seeking'], a: 1, exp: 'المشاركة: fighting one another.' },
        { q: 'The Form IV of خرج is…', opts: ['خرّج', 'خارج', 'أخرج', 'استخرج'], a: 2, exp: 'أَفْعَلَ: hamza prefix → أخرج "to expel".' },
        { q: 'أنزل vs نزّل — the classical distinction is…', opts: ['No difference', 'أنزل once/whole, نزّل gradually', 'نزّل is passive', 'أنزل is a noun'], a: 1, exp: 'Form II adds a repetition/gradual nuance; Form IV is single causation.' }
      ] },

    { id: 's2-2', ar: 'تَفَعَّلَ وتَفاعَلَ', en: 'Forms V & VI',
      body: `<p>Prefixing <span class="ar">تـ</span> to Forms II and III makes them reflexive:</p>
<ul>
<li><b class="ar">تَفَعَّلَ</b> (V) — receive Form II on oneself / gradual acquisition: <span class="ar">عَلَّمَ</span> teach → <span class="ar">تَعَلَّمَ</span> learn; <span class="ar">وَكَّلَ</span> → <span class="ar">تَوَكَّلَ</span> entrust oneself, rely.</li>
<li><b class="ar">تَفاعَلَ</b> (VI) — mutual action among parties / feigning: <span class="ar">عاوَنَ</span> → <span class="ar">تَعاوَنَ</span> cooperate; <span class="ar">تَمارَضَ</span> pretend to be ill.</li>
</ul>`,
      examples: [
        { ar: 'وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ', src: 'Qurʾan 25:58', note: 'توكَّل — Form V command: rely (entrust yourself).' },
        { ar: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ', src: 'Qurʾan 5:2', note: 'تعاونوا — Form VI: mutual cooperation.' },
        { ar: 'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ', src: 'Qurʾan 4:82', note: 'يتدبّر — Form V: take on reflection deliberately.' }
      ],
      quiz: [
        { q: 'تَعَلَّمَ relates to عَلَّمَ as…', opts: ['Passive to active', 'Reflexive of the causative: receive teaching = learn', 'No relation', 'Intensive'], a: 1, exp: 'The تـ turns Form II back on the subject.' },
        { q: 'Form VI تَفاعَلَ often expresses…', opts: ['Seeking', 'Mutual action among several', 'Single causation', 'Negation'], a: 1, exp: 'تعاونوا، تراسلوا، تصالحوا.' },
        { q: 'The wazn of تَوَكَّلَ is…', opts: ['تَفاعَلَ', 'تَفَعَّلَ', 'اِفْتَعَلَ', 'فَعَّلَ'], a: 1, exp: 'تـ + doubled middle radical (root و-ك-ل).' },
        { q: 'تَمارَضَ means…', opts: ['He became very ill', 'He pretended to be ill', 'He healed', 'He visited the sick'], a: 1, exp: 'Form VI can express feigning (التظاهر).' }
      ] },

    { id: 's2-3', ar: 'اِنْفَعَلَ، اِفْتَعَلَ، اِسْتَفْعَلَ', en: 'Forms VII, VIII & X',
      body: `<ul>
<li><b class="ar">اِنْفَعَلَ</b> (VII) — passive-like result (مطاوعة): <span class="ar">كَسَرَ</span> → <span class="ar">اِنْكَسَرَ</span> get broken; <span class="ar">اِنْشَقَّ</span> split apart.</li>
<li><b class="ar">اِفْتَعَلَ</b> (VIII) — reflexive/effort, tāʾ after the first radical: <span class="ar">جَمَعَ</span> → <span class="ar">اِجْتَمَعَ</span> assemble; <span class="ar">كَسَبَ</span> → <span class="ar">اِكْتَسَبَ</span> earn for oneself.</li>
<li><b class="ar">اِسْتَفْعَلَ</b> (X) — seeking/requesting or deeming: <span class="ar">غَفَرَ</span> → <span class="ar">اِسْتَغْفَرَ</span> seek forgiveness; <span class="ar">اِسْتَحْسَنَ</span> deem good.</li>
<li>(Form IX <span class="ar">اِفْعَلَّ</span> is rare — colors/defects: <span class="ar">اِحْمَرَّ</span> turn red.)</li>
</ul>`,
      examples: [
        { ar: 'اقْتَرَبَتِ السَّاعَةُ وَانْشَقَّ الْقَمَرُ', src: 'Qurʾan 54:1', note: 'اقترب (VIII) and انشق (VII) in one āya.' },
        { ar: 'فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا', src: 'Qurʾan 71:10', note: 'استغفروا — Form X: seek forgiveness. Note غفّار — intensive فعّال pattern of the same root.' },
        { ar: 'لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ', src: 'Qurʾan 2:286', note: 'كسب vs اكتسب — the Form VIII adds self-directed effort.' }
      ],
      quiz: [
        { q: 'اِنْكَسَرَ means…', opts: ['He broke (something)', 'It got broken', 'He asked to break', 'He broke repeatedly'], a: 1, exp: 'Form VII expresses the result received (مطاوعة).' },
        { q: 'Where does the extra تاء of Form VIII sit?', opts: ['Before the root', 'After the first radical', 'At the end', 'It replaces the ʿayn'], a: 1, exp: 'اِفْتَعَلَ: ج-م-ع → اجتمع.' },
        { q: 'اِسْتَفْعَلَ typically means…', opts: ['Mutuality', 'Seeking or deeming', 'Intensity', 'Color'], a: 1, exp: 'استغفر seek forgiveness; استعظم deem great.' },
        { q: 'The wazn of اقْتَرَبَ is…', opts: ['انفعل', 'افتعل', 'استفعل', 'تفاعل'], a: 1, exp: 'Root ق-ر-ب with tāʾ after the qāf.' }
      ] }
  ]},

  /* ───────────── UNIT S3 ───────────── */
  { id: 's3', ar: 'المشتقات', en: 'The Derived Nouns', lessons: [

    { id: 's3-1', ar: 'المصدر', en: 'The Maṣdar (Verbal Noun)',
      body: `<p>The <b class="ar">مصدر</b> names the action itself, free of time: <span class="ar">كتابة، علم، تعليم، قتال، استغفار</span>.</p>
<ul>
<li>Form I maṣdars are irregular (heard, سماعي): <span class="ar">فَهْم، جُلوس، قِراءة</span> — learn them with the verb.</li>
<li>Derived forms are regular (قياسي): II → <span class="ar">تَفْعِيل</span>; III → <span class="ar">مُفاعَلة/فِعال</span>; IV → <span class="ar">إفْعال</span>; V → <span class="ar">تَفَعُّل</span>; VI → <span class="ar">تَفاعُل</span>; VII → <span class="ar">انْفِعال</span>; VIII → <span class="ar">افْتِعال</span>; X → <span class="ar">اسْتِفْعال</span>.</li>
</ul>`,
      examples: [
        { ar: 'وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا', src: 'Qurʾan 4:164', note: 'تكليم — the regular maṣdar of Form II كلّم.' },
        { ar: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ … أُولَٰئِكَ هُمْ خَيْرُ الْبَرِيَّةِ', src: 'Qurʾan 98:7', note: 'Contrast maṣdar إيمان (of آمن, Form IV: إفعال) with the verb آمنوا.' },
        { ar: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا', src: 'Qurʾan 20:114', note: 'علم — a Form I samāʿī maṣdar of عَلِمَ.' }
      ],
      quiz: [
        { q: 'The maṣdar of Form II (فعّل) follows the pattern…', opts: ['إفعال', 'تَفْعِيل', 'انفعال', 'فُعول'], a: 1, exp: 'علّم → تعليم، نزّل → تنزيل.' },
        { q: 'The maṣdar of استغفر is…', opts: ['غفران', 'مغفرة', 'استغفار', 'تغفير'], a: 2, exp: 'Form X → استفعال.' },
        { q: 'Form I maṣdars are…', opts: ['Always تفعيل', 'Irregular — memorized per verb', 'Always فعول', 'Nonexistent'], a: 1, exp: 'سماعية: فهم، جلوس، قراءة، ذهاب…' },
        { q: 'إيمان is the maṣdar of which form?', opts: ['I', 'II', 'IV (آمن)', 'X'], a: 2, exp: 'إفعال pattern with the root أ-م-ن.' }
      ] },

    { id: 's3-2', ar: 'اسم الفاعل واسم المفعول', en: 'Active & Passive Participles',
      body: `<ul>
<li><b class="ar">اسم الفاعل</b> — the one doing: Form I → <span class="ar">فاعِل</span> (<span class="ar">كاتِب، عالِم</span>); derived forms → present-tense shape with <span class="ar">مُـ</span> prefix and kasra before the end: <span class="ar">مُعَلِّم، مُسْتَغْفِر</span>.</li>
<li><b class="ar">اسم المفعول</b> — the one done-to: Form I → <span class="ar">مَفْعُول</span> (<span class="ar">مَكْتُوب</span>); derived forms → same but fatḥa before the end: <span class="ar">مُعَلَّم، مُسْتَخْرَج</span>.</li>
<li>So <span class="ar">مُعَلِّم</span> teacher vs <span class="ar">مُعَلَّم</span> taught — one vowel flips the direction!</li>
</ul>`,
      examples: [
        { ar: 'غَافِرِ الذَّنْبِ وَقَابِلِ التَّوْبِ', src: 'Qurʾan 40:3', note: 'غافر، قابل — Form I active participles (فاعل).' },
        { ar: 'وَالطُّورِ ۝ وَكِتَابٍ مَسْطُورٍ ۝ فِي رَقٍّ مَنْشُورٍ', src: 'Qurʾan 52:1-3', note: 'مسطور، منشور — passive participles (مفعول).' },
        { ar: 'إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ … الْخَلَّاقُ الْعَلِيمُ', src: 'Qurʾan variants', note: 'Related intensive patterns فَعُول/فَعَّال (صيغ المبالغة) amplify the fāʿil meaning.' }
      ],
      quiz: [
        { q: 'اسم المفعول of كتب is…', opts: ['كاتب', 'مكتوب', 'مُكتِب', 'كتّاب'], a: 1, exp: 'Form I passive participle = مفعول.' },
        { q: 'مُعَلِّم vs مُعَلَّم — the difference is…', opts: ['Plural vs singular', 'Kasra = doer, fatḥa = done-to', 'No difference', 'Feminine marker'], a: 1, exp: 'One vowel switches active to passive participle.' },
        { q: 'The active participle of استخرج is…', opts: ['مستخرَج', 'مستخرِج', 'خارج', 'مخروج'], a: 1, exp: 'مُـ prefix + kasra before the last radical.' },
        { q: 'غَفَّار and غَفُور are…', opts: ['Passive participles', 'Intensive forms (مبالغة) of the fāʿil meaning', 'Maṣdars', 'Place nouns'], a: 1, exp: 'صيغ المبالغة: فعّال، فعول، مِفعال…' }
      ] },

    { id: 's3-3', ar: 'مشتقات أخرى', en: 'Comparison, Time, Place & Instrument',
      body: `<ul>
<li><b class="ar">اسم التفضيل</b> — <span class="ar">أَفْعَل</span>: <span class="ar">أَكْبَر، أَحْسَن، أَعْلَم</span> ("greater/est"). Feminine: <span class="ar">فُعْلى</span> (<span class="ar">كُبْرى</span>).</li>
<li><b class="ar">اسما الزمان والمكان</b> — <span class="ar">مَفْعَل/مَفْعِل</span>: <span class="ar">مَسْجِد</span> place of sujūd, <span class="ar">مَغْرِب</span> time/place of setting, <span class="ar">مَجْلِس</span>.</li>
<li><b class="ar">اسم الآلة</b> — instruments: <span class="ar">مِفْتاح</span> (مِفْعال), <span class="ar">مِيزان</span> (from و-ز-ن!), <span class="ar">مِكْنَسة</span> (مِفْعَلة).</li>
<li><b class="ar">الصفة المشبهة</b> — stable qualities: <span class="ar">كَريم، جَميل، شُجاع، أحمر</span>.</li>
</ul>`,
      examples: [
        { ar: 'وَلَذِكْرُ اللَّهِ أَكْبَرُ', src: 'Qurʾan 29:45', note: 'أكبر — ism tafḍīl (أفعل). Also a diptote: no tanwīn.' },
        { ar: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ', src: 'Qurʾan 17:1', note: 'مسجد — ism makān on مَفْعِل: place of prostration.' },
        { ar: 'وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ', src: 'Qurʾan 21:47', note: 'موازين plural of ميزان — ism āla from و-ز-ن (the app\'s namesake).' }
      ],
      quiz: [
        { q: 'أَحْسَن follows which pattern?', opts: ['فاعل', 'أفعل التفضيل', 'مفعول', 'فعيل'], a: 1, exp: 'Comparative/superlative اسم تفضيل.' },
        { q: 'مَسْجِد is…', opts: ['اسم آلة', 'اسم مكان', 'مصدر', 'اسم فاعل'], a: 1, exp: 'مَفْعِل — the place of the action.' },
        { q: 'The root of مِيزان is…', opts: ['م-ز-ن', 'و-ز-ن', 'ز-ي-ن', 'م-ي-ز'], a: 1, exp: 'The wāw became yāʾ after the kasra: مِوْزان ← ميزان.' },
        { q: 'كريم، شجاع، جميل are examples of…', opts: ['اسم مفعول', 'الصفة المشبهة', 'اسم تفضيل', 'مصادر'], a: 1, exp: 'Fixed, inherent qualities — الصفة المشبهة باسم الفاعل.' }
      ] }
  ]},

  /* ───────────── UNIT S4 ───────────── */
  { id: 's4', ar: 'الصحيح والمعتل والإعلال', en: 'Sound, Weak & Vowel-Change Rules', lessons: [

    { id: 's4-1', ar: 'أقسام الفعل من حيث الصحة', en: 'Classifying Roots: Sound vs Weak',
      body: `<p>Roots are classified by whether they contain weak letters (<span class="ar">و، ا، ي</span>) or hamza/doubling:</p>
<ul>
<li><b class="ar">الصحيح السالم</b> — no weak letter, hamza, or doubling: <span class="ar">كتب، جلس</span>.</li>
<li><b class="ar">المهموز</b> — contains hamza: <span class="ar">أخذ، سأل، قرأ</span>.</li>
<li><b class="ar">المضعَّف</b> — 2nd = 3rd radical: <span class="ar">مدَّ، ظنَّ، حجَّ</span>.</li>
<li><b class="ar">المثال</b> — weak 1st radical: <span class="ar">وعد، وجد، يسر</span>.</li>
<li><b class="ar">الأجوف</b> — weak middle: <span class="ar">قال (ق-و-ل)، باع (ب-ي-ع)</span>.</li>
<li><b class="ar">الناقص</b> — weak last: <span class="ar">دعا، رمى، هدى</span>.</li>
<li><b class="ar">اللفيف</b> — two weak letters: <span class="ar">وقى، طوى</span>.</li>
</ul>`,
      examples: [
        { ar: 'قَالَ • بَاعَ • خَافَ', src: 'ajwaf examples', note: 'The alif you see is a transformed و or ي: ق-و-ل، ب-ي-ع، خ-و-ف.' },
        { ar: 'وَإِذْ سَأَلَ مُوسَىٰ … خُذِ الْكِتَابَ', src: 'Qurʾan (2:60 / 19:12)', note: 'سأل mahmūz middle; خذ — the amr of أخذ drops the hamza entirely.' },
        { ar: 'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ', src: 'Qurʾan 16:125', note: 'ادعُ — nāqiṣ verb دعا loses its wāw in the command.' }
      ],
      quiz: [
        { q: 'قال is classified as…', opts: ['سالم', 'أجوف', 'ناقص', 'مثال'], a: 1, exp: 'Middle radical is weak: ق-و-ل.' },
        { q: 'A verb like وعد (weak first radical) is called…', opts: ['أجوف', 'مثال', 'لفيف', 'مضعف'], a: 1, exp: 'المثال — it "resembles" the sound verb in the past.' },
        { q: 'مَدَّ is…', opts: ['مهموز', 'مضعَّف', 'أجوف', 'سالم'], a: 1, exp: 'م-د-د: doubled 2nd/3rd radical.' },
        { q: 'The root of باع is…', opts: ['ب-ا-ع', 'ب-ي-ع', 'ب-و-ع', 'ع-ي-ب'], a: 1, exp: 'The alif of باع is an inverted yāʾ — the muḍāriʿ يبيع reveals it.' }
      ] },

    { id: 's4-2', ar: 'تصريف الأجوف والمثال', en: 'Hollow & Assimilated Verbs in Action',
      body: `<p><b class="ar">الأجوف</b> (hollow): the middle weak letter shortens whenever the final radical closes (sukūn):</p>
<ul>
<li><span class="ar">قال</span> → <span class="ar">قُلْتُ</span> (not قَالْتُ) — the ḍamma hints at the lost wāw; <span class="ar">باع → بِعْتُ</span> — kasra hints at the yāʾ.</li>
<li>Jussive/command shorten too: <span class="ar">يقول → لم يَقُلْ → قُلْ</span>؛ <span class="ar">يبيع → بِعْ</span>.</li>
</ul>
<p><b class="ar">المثال</b> (assimilated): the initial wāw drops in the muḍāriʿ of i-class verbs: <span class="ar">وَعَدَ → يَعِدُ</span>، <span class="ar">وَجَدَ → يَجِدُ</span>، and the amr: <span class="ar">عِدْ، جِدْ</span>.</p>`,
      examples: [
        { ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ', src: 'Qurʾan 112:1', note: 'قُلْ — hollow قال shortened in the command.' },
        { ar: 'قَالُوا سَمِعْنَا … وَقُلْنَا اهْبِطُوا', src: 'Qurʾan 2:285 / 2:38', note: 'قالوا (open final) keeps the alif; قلنا (closed) shortens.' },
        { ar: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ … يَجِدُ', src: 'Qurʾan 93:7 / 4:100', note: 'وجد past keeps wāw; يجد present drops it.' }
      ],
      quiz: [
        { q: '"I said" =', opts: ['قالْتُ', 'قُلْتُ', 'قِلْتُ', 'أقولُ'], a: 1, exp: 'Hollow verb shortens; ḍamma points to the wāw of ق-و-ل.' },
        { q: '"I sold" =', opts: ['بُعْتُ', 'بِعْتُ', 'باعْتُ', 'أبيعُ'], a: 1, exp: 'Kasra points to the yāʾ of ب-ي-ع.' },
        { q: 'The present of وَعَدَ is…', opts: ['يَوْعِدُ', 'يَعِدُ', 'يُوعَدُ', 'يَعُودُ'], a: 1, exp: 'Mithāl wāw drops before kasra: يعِد.' },
        { q: 'The command of يقول is…', opts: ['اُقْوُلْ', 'قُلْ', 'قالْ', 'قُولْ'], a: 1, exp: 'Drop prefix; the weak middle also drops with the final sukūn.' }
      ] },

    { id: 's4-3', ar: 'الناقص وأساسيات الإعلال', en: 'Defective Verbs & Iʿlāl Essentials',
      body: `<p><b class="ar">الناقص</b> (weak-final) verbs — <span class="ar">دعا (و)، رمى (ي)، هدى، نسي</span>:</p>
<ul>
<li>Jussive & command drop the weak letter: <span class="ar">لم يَدْعُ، لم يَرْمِ، اهْدِ، ادْعُ</span>.</li>
<li>Before wāw of plural it drops too: <span class="ar">دَعَوْا، يَدْعُونَ ← يرضَوْنَ</span>.</li>
</ul>
<p>Core <b class="ar">إعلال</b> (vowel-change) intuitions:</p>
<ul>
<li>و/ي with a vowel after fatḥa → alif: <span class="ar">قَوَلَ ← قال، بَيَعَ ← باع، دَعَوَ ← دعا</span>.</li>
<li>Initial wāw after kasra → yāʾ: <span class="ar">مِوْزان ← ميزان</span>.</li>
<li>These are lawful, predictable changes — not exceptions. Knowing them unlocks the dictionary: see قال, think ق-و-ل.</li>
</ul>`,
      examples: [
        { ar: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ … وَادْعُوهُ خَوْفًا وَطَمَعًا', src: 'Qurʾan 114:1 / 7:56', note: 'ادعوه — nāqiṣ imperative + object pronoun.' },
        { ar: 'فَاقْضِ مَا أَنْتَ قَاضٍ', src: 'Qurʾan 20:72', note: 'اقضِ — command of قضى loses the yāʾ; قاضٍ — its participle becomes manqūṣ (قاضي → قاضٍ).' },
        { ar: 'قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ', src: 'Imruʾ al-Qays', note: 'نبكِ — the jussive of the nāqiṣ يبكي, weak letter dropped.' }
      ],
      quiz: [
        { q: 'The jussive of يدعو is…', opts: ['لم يدعوْ', 'لم يدعُ', 'لم يدعى', 'لم يدعْو'], a: 1, exp: 'Nāqiṣ verbs drop the weak letter in jazm.' },
        { q: 'قال was originally…', opts: ['قَوَلَ', 'قَيَلَ', 'قَلَّ', 'قالَ always'], a: 0, exp: 'The wāw with fatḥa-fatḥa context became alif (إعلال بالقلب).' },
        { q: 'Why is ميزان spelled with yāʾ though the root is و-ز-ن?', opts: ['Spelling error', 'Wāw after kasra becomes yāʾ', 'The root changed', 'Loanword'], a: 1, exp: 'مِوزان ← ميزان — a regular iʿlāl rule.' },
        { q: 'The command of هدى (to guide) is…', opts: ['اهدِ', 'اهدى', 'اهدُ', 'هَدِّ'], a: 0, exp: 'Weak final yāʾ drops: اهدِنا الصراط المستقيم.' }
      ] }
  ]}
]});
