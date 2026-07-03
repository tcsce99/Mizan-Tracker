/* النحو — Units 5–7 */
addUnits('nahw', [

  /* ───────────── UNIT N5 ───────────── */
  { id: 'n5', ar: 'المجرورات والإضافة', en: 'Jarr Constructions & Iḍāfa', lessons: [

    { id: 'n5-1', ar: 'حروف الجر', en: 'The Prepositions',
      body: `<p>A noun after a <b class="ar">حرف جر</b> is always majrūr. The core set:</p>
<p class="ar big">مِنْ ، إلى ، عَنْ ، على ، في ، رُبَّ ، الباء ، الكاف ، اللام ، واو القسم ، حتى ، مُذْ/مُنْذُ</p>
<ul>
<li><span class="ar">مِن</span> origin/partition — <span class="ar">إلى</span> destination — <span class="ar">عن</span> passing away from — <span class="ar">على</span> upon — <span class="ar">في</span> in.</li>
<li>The one-letter prepositions attach to the word: <span class="ar">بِالقلمِ، كَالأسدِ، لِلّهِ</span>.</li>
<li>The phrase <span class="ar">الجار والمجرور</span> ("shibh jumla") attaches to a verb or serves as a khabar.</li>
</ul>`,
      examples: [
        { ar: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى', src: 'Qurʾan 17:1', note: 'Three prepositional phrases: بعبده، من المسجد، إلى المسجد — every noun after them majrūr.' },
        { ar: 'وَلِلَّهِ مَا فِي السَّمَاوَاتِ', src: 'Qurʾan 4:131', note: 'لله — lām of possession; fronted khabar.' },
        { ar: 'فَاصْبِرْ صَبْرًا جَمِيلًا • إِنَّهُمْ يَرَوْنَهُ بَعِيدًا', src: 'Qurʾan 70:5-6', note: 'Contrast: صبرًا is manṣūb (mafʿūl muṭlaq) — no preposition, no jarr.' }
      ],
      quiz: [
        { q: 'A noun immediately after في is…', opts: ['marfūʿ', 'manṣūb', 'majrūr', 'majzūm'], a: 2, exp: 'Prepositions govern jarr.' },
        { q: 'Which is NOT a preposition?', opts: ['عن', 'رُبَّ', 'إنَّ', 'حتى'], a: 2, exp: 'إنّ is a nāsikh of the nominal sentence, not a ḥarf jarr.' },
        { q: 'In «أسرى بعبدِه», the kasra on عبد is caused by…', opts: ['iḍāfa', 'the preposition بِـ', 'being an object', 'tanwīn'], a: 1, exp: 'بـ is a one-letter preposition attached to the noun.' },
        { q: '«كَالأسدِ» contains which preposition?', opts: ['اللام', 'الكاف', 'الباء', 'مِن'], a: 1, exp: 'الكاف = "like" — a jarr particle.' }
      ] },

    { id: 'n5-2', ar: 'الإضافة', en: 'Iḍāfa (The Genitive Construct)',
      body: `<p><b class="ar">الإضافة</b> chains two nouns: possessed + possessor — <span class="ar">كتابُ الطالبِ</span> "the student's book".</p>
<ul>
<li>The first noun (<b class="ar">مضاف</b>) takes its case from its role in the sentence, but <em>never</em> takes ال or tanwīn.</li>
<li>The second (<b class="ar">مضاف إليه</b>) is always majrūr.</li>
<li>Chains are possible: <span class="ar">مالِكِ يَوْمِ الدِّينِ</span> — each link majrūr by the one before.</li>
<li>Dual/sound-plural muḍāf drops its nūn: <span class="ar">معلمو المدرسةِ</span> (not معلمونَ).</li>
</ul>`,
      examples: [
        { ar: 'مَالِكِ يَوْمِ الدِّينِ', src: 'Qurʾan 1:4', note: 'Double iḍāfa: يوم muḍāf ilayh of مالك and muḍāf to الدين.' },
        { ar: 'عَلَىٰ قَدْرِ أَهْلِ الْعَزْمِ تَأْتِي الْعَزَائِمُ', src: 'al-Mutanabbī', note: 'A three-link chain: قدرِ أهلِ العزمِ — all majrūr.' },
        { ar: 'وَاللَّهُ يُحِبُّ الصَّابِرِينَ … أُولُو الْعِلْمِ', src: 'Qurʾan 3:146 / 3:18', note: 'أولو العلم — sound-plural-type muḍāf: nūn dropped before the muḍāf ilayh.' }
      ],
      quiz: [
        { q: 'المضاف إليه is always…', opts: ['marfūʿ', 'manṣūb', 'majrūr', 'mabnī'], a: 2, exp: 'The second term of iḍāfa is permanently majrūr.' },
        { q: 'Which is wrong for a muḍāf?', opts: ['Dropping tanwīn', 'Dropping ال', 'Keeping tanwīn', 'Taking any case its role demands'], a: 2, exp: 'A muḍāf never carries tanwīn or ال.' },
        { q: 'In «مالكِ يومِ الدينِ», why is يوم majrūr?', opts: ['Preposition', 'It is muḍāf ilayh', 'It is a diptote', 'Poetic license'], a: 1, exp: 'It is possessed by مالك — second link of the chain.' },
        { q: '«معلمو المدرسة» — where did the nūn of معلمون go?', opts: ['Dropped for iḍāfa', 'Never existed', 'Assimilated', 'It is a typo'], a: 0, exp: 'Sound plural muḍāf drops its nūn.' }
      ] }
  ]},

  /* ───────────── UNIT N6 ───────────── */
  { id: 'n6', ar: 'التوابع', en: 'The Followers (Tawābiʿ)', lessons: [

    { id: 'n6-1', ar: 'النعت', en: 'The Adjective (Naʿt)',
      body: `<p>The <b class="ar">نعت</b> (also صفة) describes the noun before it and <em>follows it in four things</em>:</p>
<ul>
<li>Case (rafʿ/naṣb/jarr), definiteness, gender, and number.</li>
<li><span class="ar">جاءَ الطالبُ المجتهدُ</span> / <span class="ar">رأيتُ طالبًا مجتهدًا</span>.</li>
<li>A full sentence after an <em>indefinite</em> noun acts as its naʿt: <span class="ar">مررتُ برجلٍ يقرأُ</span> — "الجمل بعد النكرات صفات".</li>
</ul>`,
      examples: [
        { ar: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', src: 'Qurʾan 1:1', note: 'الرحمن الرحيم — two naʿts of الله, both majrūr matching it.' },
        { ar: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', src: 'Qurʾan 1:6', note: 'المستقيم — naʿt of الصراط, manṣūb matching it.' },
        { ar: 'فِيهَا كُتُبٌ قَيِّمَةٌ', src: 'Qurʾan 98:3', note: 'قيمة follows كتب: indefinite, feminine (broken plural treated fem.), marfūʿ.' }
      ],
      quiz: [
        { q: 'The naʿt agrees with its noun in…', opts: ['Case only', 'Case, definiteness, gender, number', 'Gender only', 'Nothing'], a: 1, exp: 'Four-way agreement.' },
        { q: 'In «اهدنا الصراطَ المستقيمَ», المستقيم is manṣūb because…', opts: ['It is an object itself', 'It follows الصراط which is manṣūb', 'إنّ precedes', 'It is mabnī'], a: 1, exp: 'A tābiʿ copies its noun\'s case.' },
        { q: '«مررتُ برجلٍ يقرأُ» — the sentence يقرأ is…', opts: ['khabar', 'naʿt of رجل', 'ḥāl', 'fāʿil'], a: 1, exp: 'Sentences after indefinites are descriptions.' },
        { q: 'Correct naʿt: «هذه مدينةٌ …»', opts: ['كبيرًا', 'كبيرٌ', 'كبيرةٌ', 'كبيرةً'], a: 2, exp: 'Feminine + marfūʿ + indefinite to match مدينةٌ.' }
      ] },

    { id: 'n6-2', ar: 'العطف', en: 'Conjunction (ʿAṭf)',
      body: `<p><b class="ar">العطف</b> joins a word to an earlier one via a particle; the joined word copies the first one's case.</p>
<ul>
<li>Particles: <span class="ar">وَ</span> (and), <span class="ar">فَ</span> (then, immediate), <span class="ar">ثُمَّ</span> (then, delayed), <span class="ar">أَوْ</span> (or), <span class="ar">بَلْ</span> (rather), <span class="ar">لَكِنْ</span> (but), <span class="ar">لا</span> (not), <span class="ar">أَمْ</span> (or, in questions), <span class="ar">حتى</span>.</li>
<li><span class="ar">جاء محمدٌ وعليٌّ</span> — عليّ marfūʿ like محمد.</li>
</ul>`,
      examples: [
        { ar: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ', src: 'Qurʾan 5:2', note: 'التقوى joined to البر — both majrūr after على.' },
        { ar: 'الْخَيْلُ وَاللَّيْلُ وَالْبَيْدَاءُ تَعْرِفُنِي — وَالسَّيْفُ وَالرُّمْحُ وَالْقِرْطَاسُ وَالْقَلَمُ', src: 'al-Mutanabbī', note: 'Six nouns chained by واو, all marfūʿ following the first mubtadaʾ.' },
        { ar: 'ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ ثُمَّ إِذَا شَاءَ أَنْشَرَهُ', src: 'Qurʾan 80:21-22', note: 'ثم (delay) vs فـ (immediacy) sequencing the verbs.' }
      ],
      quiz: [
        { q: 'The word after a conjunction particle takes…', opts: ['Always rafʿ', 'The case of the word it joins to', 'Always naṣb', 'No case'], a: 1, exp: 'المعطوف يتبع المعطوف عليه.' },
        { q: 'Which particle implies delay in sequence?', opts: ['فَ', 'وَ', 'ثُمَّ', 'أَوْ'], a: 2, exp: 'ثم = "then, later"; ف = immediate succession.' },
        { q: '«جاء محمدٌ و…» — complete correctly:', opts: ['عليًّا', 'عليٍّ', 'عليٌّ', 'عليَّ'], a: 2, exp: 'Joined to a marfūʿ fāʿil → marfūʿ.' },
        { q: 'In «على البرِّ والتقوى», التقوى is…', opts: ['marfūʿ', 'manṣūb', 'majrūr (following البر)', 'majzūm'], a: 2, exp: 'ʿAṭf onto a majrūr noun (jarr shown by implied kasra on the alif maqṣūra).' }
      ] },

    { id: 'n6-3', ar: 'التوكيد والبدل', en: 'Emphasis (Tawkīd) & Substitution (Badal)',
      body: `<p>Two more followers:</p>
<ul>
<li><b class="ar">التوكيد</b> — emphasis. Lafẓī: repeat the word (<span class="ar">جاء عليٌّ عليٌّ</span>). Maʿnawī: with <span class="ar">نَفْس، عَيْن، كُلّ، جميع</span> + matching pronoun: <span class="ar">جاء الطلابُ كلُّهم</span>.</li>
<li><b class="ar">البدل</b> — the follower <em>is</em> the intended one: <span class="ar">جاء أخوكَ محمدٌ</span>. Types: whole-for-whole (<span class="ar">بدل كل من كل</span>), part-for-whole, inclusion (اشتمال).</li>
</ul>
<p>Both copy the case of what they follow.</p>`,
      examples: [
        { ar: 'فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ', src: 'Qurʾan 15:30', note: 'كلُّهم — tawkīd maʿnawī of الملائكة, marfūʿ; أجمعون a second tawkīd.' },
        { ar: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ', src: 'Qurʾan 1:6-7', note: 'صراطَ الذين — badal (kull min kull) of الصراط المستقيم, matching its naṣb.' },
        { ar: 'قُتِلَ أَصْحَابُ الْأُخْدُودِ ۝ النَّارِ ذَاتِ الْوَقُودِ', src: 'Qurʾan 85:4-5', note: 'النارِ — badal ishtimāl of الأخدودِ, majrūr like it.' }
      ],
      quiz: [
        { q: '«جاء الطلابُ كلُّهم» — كلُّهم is…', opts: ['naʿt', 'tawkīd maʿnawī', 'badal', 'ḥāl'], a: 1, exp: 'كل with a matching pronoun emphasizes totality.' },
        { q: 'In «اهدنا الصراطَ المستقيمَ صراطَ الذين…», صراطَ is…', opts: ['mafʿūl of a new verb', 'badal of الصراط', 'tawkīd lafẓī', 'munādā'], a: 1, exp: 'It restates and specifies the first — بدل كل من كل.' },
        { q: 'Badal and tawkīd take which case?', opts: ['Always jarr', 'The case of the followed word', 'Always naṣb', 'None'], a: 1, exp: 'All tawābiʿ copy the case.' },
        { q: 'Tawkīd lafẓī means…', opts: ['Using نفس/عين', 'Literal repetition of the word', 'Substitution', 'Negation'], a: 1, exp: 'Repeating the very word: جاء عليٌّ عليٌّ.' }
      ] }
  ]},

  /* ───────────── UNIT N7 ───────────── */
  { id: 'n7', ar: 'أساليب وتراكيب', en: 'Special Constructions', lessons: [

    { id: 'n7-1', ar: 'الحال والتمييز', en: 'Ḥāl & Tamyīz',
      body: `<p>Two manṣūb clarifiers, often confused:</p>
<ul>
<li><b class="ar">الحال</b> — describes the <em>state</em> of the doer/object at the time of the action; answers "how?"; usually a derived, indefinite word tied to a definite owner: <span class="ar">جاء الطالبُ مسرعًا</span>. A sentence can be ḥāl: <span class="ar">جاءوا يبكون</span>.</li>
<li><b class="ar">التمييز</b> — removes vagueness from a quantity or a whole sentence; a solid (jāmid) indefinite noun: <span class="ar">اشتريتُ عشرين كتابًا</span>، <span class="ar">طابَ محمدٌ نفسًا</span>.</li>
</ul>
<p>Test: ḥāl ≈ "while/being…", tamyīz ≈ "in terms of…".</p>`,
      examples: [
        { ar: 'وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ', src: 'Qurʾan 12:16', note: 'يبكون — a verbal sentence as ḥāl: they came *crying*.' },
        { ar: 'وَاشْتَعَلَ الرَّأْسُ شَيْبًا', src: 'Qurʾan 19:4', note: 'شيبًا — tamyīz: the head "ignited" — in terms of white hair.' },
        { ar: 'إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا', src: 'Qurʾan 12:4', note: 'كوكبًا — tamyīz of the number eleven.' }
      ],
      quiz: [
        { q: '«جاء الطالبُ مسرعًا» — مسرعًا is…', opts: ['tamyīz', 'ḥāl', 'mafʿūl bihi', 'naʿt'], a: 1, exp: 'It describes his state while coming.' },
        { q: '«واشتعل الرأسُ شيبًا» — شيبًا is…', opts: ['ḥāl', 'tamyīz', 'fāʿil', 'badal'], a: 1, exp: 'It specifies what the "igniting" refers to.' },
        { q: 'After numbers 11–99 the counted noun is…', opts: ['Plural majrūr', 'Singular manṣūb tamyīz', 'Plural marfūʿ', 'Dual'], a: 1, exp: 'أحد عشر كوكبًا — singular, manṣūb.' },
        { q: 'The ḥāl is typically…', opts: ['Definite and jāmid', 'Indefinite and derived (مشتق)', 'Always a sentence', 'marfūʿ'], a: 1, exp: 'نكرة مشتقة، صاحبها معرفة.' }
      ] },

    { id: 'n7-2', ar: 'الاستثناء', en: 'Exception (Istithnāʾ)',
      body: `<p><b class="ar">الاستثناء</b> excludes with <span class="ar">إلّا</span> (and <span class="ar">غير، سوى، خلا، عدا، حاشا</span>):</p>
<ul>
<li><b>Full affirmative</b> sentence → the excluded (مستثنى) is manṣūb: <span class="ar">حضر الطلابُ إلا زيدًا</span>.</li>
<li><b>Negative full</b> sentence → naṣb allowed, or badal following the first noun: <span class="ar">ما قام القومُ إلا زيدٌ/زيدًا</span>.</li>
<li><b>Elliptical</b> (مفرَّغ) — nothing before إلا governs: the word takes whatever the sentence role demands: <span class="ar">ما جاء إلا زيدٌ</span> (fāʿil).</li>
<li><span class="ar">غير/سوى</span> themselves take the case the mustathnā would take; what follows them is muḍāf ilayh.</li>
</ul>`,
      examples: [
        { ar: 'فَسَجَدُوا إِلَّا إِبْلِيسَ', src: 'Qurʾan 2:34', note: 'إبليسَ — manṣūb: exception from a full affirmative statement.' },
        { ar: 'فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِنْهُمْ', src: 'Qurʾan 2:249', note: 'قليلًا manṣūb — the classic mustathnā.' },
        { ar: 'أَلَا كُلُّ شَيْءٍ مَا خَلَا اللهَ بَاطِلُ', src: 'Labīd (quoted approvingly by the Prophet ﷺ)', note: 'خلا used verbally → اللهَ manṣūb as its object.' }
      ],
      quiz: [
        { q: 'In «حضر الطلابُ إلا زيدًا», why is زيدًا manṣūb?', opts: ['It is an object', 'Mustathnā after a full affirmative', 'It follows a preposition', 'Error'], a: 1, exp: 'الاستثناء التام المثبت ينصب المستثنى.' },
        { q: '«ما جاء إلا زيدٌ» — why rafʿ?', opts: ['Wrong, should be naṣb', 'Elliptical exception: زيد is simply the fāʿil', 'Poetic license', 'إلا always gives rafʿ'], a: 1, exp: 'مفرّغ: the sentence needs its fāʿil; إلا just restricts.' },
        { q: 'What case does the noun after غير take?', opts: ['naṣb', 'rafʿ', 'jarr (muḍāf ilayh)', 'jazm'], a: 2, exp: 'غير is muḍāf; the following noun is majrūr.' },
        { q: 'In Labīd\'s line, اللهَ after خلا is…', opts: ['majrūr', 'manṣūb', 'marfūʿ', 'mabnī'], a: 1, exp: 'خلا treated as a verb takes its exception as an object.' }
      ] },

    { id: 'n7-3', ar: 'النداء ولا النافية للجنس', en: 'Vocative & Lā of Absolute Negation',
      body: `<p><b class="ar">النداء</b> — calling with <span class="ar">يا</span> (and <span class="ar">أيا، هيا، أي، الهمزة</span>):</p>
<ul>
<li>Single proper name / directed indefinite → mabnī on ḍamm: <span class="ar">يا نوحُ، يا رجلُ</span>.</li>
<li>Muḍāf or resembling-muḍāf → manṣūb: <span class="ar">يا عبدَ اللهِ، يا طالبًا للعلمِ</span>.</li>
<li>With ال, use <span class="ar">أيُّها/أيتُها</span>: <span class="ar">يا أيُّها الناسُ</span>.</li>
</ul>
<p><b class="ar">لا النافية للجنس</b> negates the whole genus; works like إنّ: its noun is mabnī on fatḥ (when single) with no tanwīn: <span class="ar">لا إلهَ إلا اللهُ، لا ريبَ فيه</span>.</p>`,
      examples: [
        { ar: 'قِيلَ يَا نُوحُ اهْبِطْ بِسَلَامٍ', src: 'Qurʾan 11:48', note: 'نوحُ — munādā mabnī on ḍamm (single proper name).' },
        { ar: 'قَالُوا يَا أَبَانَا', src: 'Qurʾan 12:11', note: 'أبانا — munādā muḍāf → manṣūb by alif (five nouns).' },
        { ar: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ', src: 'Qurʾan 2:2', note: 'ريبَ — ism of lā al-nāfiya lil-jins, mabnī on fatḥ, no tanwīn.' }
      ],
      quiz: [
        { q: '«يا نوحُ» — why the ḍamma?', opts: ['fāʿil', 'Munādā mufrad ʿalam — mabnī on ḍamm', 'khabar', 'tanwīn dropped'], a: 1, exp: 'Single proper names called are built on ḍamm.' },
        { q: '«يا عبدَ اللهِ» — why is عبد manṣūb?', opts: ['It is an object', 'Munādā muḍāf takes naṣb', 'Preposition', 'Diptote'], a: 1, exp: 'A muḍāf vocative is manṣūb.' },
        { q: 'In «لا ريبَ فيه», the fatḥa on ريب shows…', opts: ['Regular naṣb with tanwīn', 'Ism of lā, mabnī on fatḥ', 'ḥāl', 'tamyīz'], a: 1, exp: 'لا النافية للجنس builds its single ism on fatḥ.' },
        { q: 'To call someone with ال (like الناس) you must say…', opts: ['يا الناس', 'يا أيها الناس', 'أيها ناس', 'يا ناسًا'], a: 1, exp: 'أيها bridges يا and ال-nouns.' }
      ] }
  ]}
]);
