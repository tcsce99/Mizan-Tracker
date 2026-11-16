/* ============================================================
   FUSHA — data4.js — Vocabulary decks, Reader texts, Timeline
   milestones, Speaking prompts, Free resources
   ============================================================ */

/* ── VOCABULARY ── deck ties words to v-track lessons. */
(function(){
const V = {
faith: [
['اللّٰه','God'],['رَبّ','Lord, master, sustainer'],['إِلٰه','god, deity'],['عَبْد','servant, slave'],
['إِيمَان','faith, belief'],['مُؤْمِن','believer'],['إِسْلَام','submission (to God)'],['صَلَاة','prayer'],
['زَكَاة','alms, purifying charity'],['كِتَاب','book, scripture'],['قُرْآن','recitation; the Qur\'an'],
['آيَة','sign; verse'],['رَسُول','messenger'],['نَبِيّ','prophet'],['دِين','religion; judgment, recompense'],
['حَقّ','truth, right'],['خَيْر','good, better, best'],['شَرّ','evil, worse'],['رَحْمَة','mercy'],
['جَنَّة','garden; Paradise'],['نَار','fire'],['ذَنْب','sin, offense'],['صَبْر','patience, steadfastness'],
['شُكْر','gratitude'],['هُدًى','guidance']],
people: [
['إِنْسَان','human being'],['نَاس','people, mankind'],['رَجُل','man (pl. رِجَال)'],['امْرَأَة','woman'],
['وَلَد','child, boy (pl. أَوْلَاد)'],['ابْن','son (pl. أَبْنَاء)'],['بِنْت','daughter, girl (pl. بَنَات)'],
['أَب','father (أَبُو in iḍāfa)'],['أُمّ','mother (pl. أُمَّهَات)'],['أَخ','brother (pl. إِخْوَة)'],
['أُخْت','sister (pl. أَخَوَات)'],['أَهْل','family, people of'],['قَوْم','a people, folk'],['مَلِك','king'],
['نَفْس','soul, self (pl. أَنْفُس)'],['قَلْب','heart (pl. قُلُوب)'],['وَجْه','face (pl. وُجُوه)'],
['عَيْن','eye; spring (pl. أَعْيُن)'],['يَد','hand (pl. أَيْدٍ)'],['صَاحِب','companion, owner of (pl. أَصْحَاب)'],
['عَدُوّ','enemy (pl. أَعْدَاء)'],['شَاعِر','poet (pl. شُعَرَاء)'],['عَالِم','scholar (pl. عُلَمَاء)']],
nature: [
['سَمَاء','sky, heaven (pl. سَمَاوَات)'],['أَرْض','earth, land'],['شَمْس','sun'],['قَمَر','moon'],
['نَجْم','star (pl. نُجُوم)'],['لَيْل','night'],['نَهَار','daytime'],['يَوْم','day (pl. أَيَّام)'],
['مَاء','water'],['بَحْر','sea (pl. بِحَار)'],['نَهْر','river (pl. أَنْهَار)'],['جَبَل','mountain (pl. جِبَال)'],
['رِيح','wind (pl. رِيَاح)'],['نُور','light'],['ظُلُمَات','darknesses'],['شَجَرَة','tree'],
['ثَمَرَة','fruit (pl. ثَمَرَات)'],['طَرِيق','road, way (pl. طُرُق)'],['بَيْت','house (pl. بُيُوت)'],
['مَدِينَة','city (pl. مُدُن)'],['دُنْيَا','this world'],['آخِرَة','the hereafter'],['مَوْت','death'],['حَيَاة','life']],
verbs1: [
['قَالَ / يَقُولُ','to say'],['كَانَ / يَكُونُ','to be'],['فَعَلَ / يَفْعَلُ','to do'],['عَمِلَ / يَعْمَلُ','to do, work'],
['عَلِمَ / يَعْلَمُ','to know'],['عَرَفَ / يَعْرِفُ','to recognize, know'],['آمَنَ / يُؤْمِنُ','to believe (بِ in)'],
['خَلَقَ / يَخْلُقُ','to create'],['جَعَلَ / يَجْعَلُ','to make, place'],['رَأَى / يَرَى','to see'],
['سَمِعَ / يَسْمَعُ','to hear'],['جَاءَ / يَجِيءُ','to come'],['أَتَى / يَأْتِي','to come; bring (بِ)'],
['شَاءَ / يَشَاءُ','to will, wish'],['أَرَادَ / يُرِيدُ','to want, intend'],['أَحَبَّ / يُحِبُّ','to love'],
['خَافَ / يَخَافُ','to fear'],['ظَنَّ / يَظُنُّ','to think, suppose'],['ذَكَرَ / يَذْكُرُ','to mention, remember'],
['دَعَا / يَدْعُو','to call, invoke, pray']],
verbs2: [
['ذَهَبَ / يَذْهَبُ','to go'],['دَخَلَ / يَدْخُلُ','to enter'],['خَرَجَ / يَخْرُجُ','to go out'],['رَجَعَ / يَرْجِعُ','to return'],
['أَخَذَ / يَأْخُذُ','to take'],['أَعْطَى / يُعْطِي','to give'],['وَجَدَ / يَجِدُ','to find'],['نَزَلَ / يَنْزِلُ','to descend'],
['كَتَبَ / يَكْتُبُ','to write; prescribe'],['قَرَأَ / يَقْرَأُ','to read, recite'],['عَبَدَ / يَعْبُدُ','to worship'],
['هَدَى / يَهْدِي','to guide'],['سَأَلَ / يَسْأَلُ','to ask'],['أَكَلَ / يَأْكُلُ','to eat'],['شَرِبَ / يَشْرَبُ','to drink'],
['نَظَرَ / يَنْظُرُ','to look'],['وَقَفَ / يَقِفُ','to stop, stand'],['حَمَلَ / يَحْمِلُ','to carry, bear'],
['بَكَى / يَبْكِي','to weep'],['مَاتَ / يَمُوتُ','to die']],
particles: [
['فِي','in'],['مِنْ','from, of'],['إِلَى','to, toward'],['عَلَى','on, upon'],['عَنْ','about, away from'],
['بِـ','with, by, in'],['لِـ','for, belonging to'],['كَـ','like, as'],['مَعَ','with'],['عِنْدَ','at, with, in the possession of'],
['بَعْدَ / قَبْلَ','after / before'],['إِنَّ','indeed, truly'],['لَكِنَّ','but'],['إِذَا','when, if'],['إِنْ','if'],
['لَوْ','if (hypothetical)'],['لَمْ','did not (+jussive)'],['لَنْ','will never (+subjunctive)'],['لَا / مَا','not'],
['إِلَّا','except'],['كُلّ','each, all'],['بَعْض','some'],['غَيْر','other than, non-'],
['الَّذِي / الَّتِي / الَّذِينَ','who, which (m / f / m.pl)'],['هٰذَا / ذٰلِكَ','this / that'],['ثُمَّ','then, thereafter'],
['قَدْ','(with past) already, indeed; (with present) may'],['سَوْفَ / سَـ','will (future)'],['يَا','O! (vocative)'],
['نَعَمْ / لَا / بَلَى','yes / no / yes-to-a-negative']]
};
FUSHA.vocab = [];
for (const deck in V) V[deck].forEach(([ar,en])=>FUSHA.vocab.push({ ar, en, deck }));
})();

/* ── READER TEXTS ──
   ar: fully vocalized. Bare version is derived by stripping marks.
   gloss: word-by-word [arabic, english]. level: 1 easy … 5 hard. */
FUSHA.texts = [
{ id:'t-fatiha', title:'Sūrat al-Fātiḥa', ar_title:'سورة الفاتحة', src:'Qur\'an 1', level:1, kind:'quran',
  ar:`بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾`,
  gloss:[['بِسْمِ','in the name of'],['اللَّهِ','God'],['الرَّحْمَٰنِ','the Most Merciful'],['الرَّحِيمِ','the Most Compassionate'],['الْحَمْدُ','all praise'],['لِلَّهِ','belongs to God'],['رَبِّ','Lord of'],['الْعَالَمِينَ','the worlds'],['مَالِكِ','Master of'],['يَوْمِ','the Day of'],['الدِّينِ','Judgment'],['إِيَّاكَ','You alone'],['وَإِيَّاكَ','and You alone'],['نَعْبُدُ','we worship'],['نَسْتَعِينُ','we ask for help'],['اهْدِنَا','guide us'],['الصِّرَاطَ','the path'],['الْمُسْتَقِيمَ','the straight'],['صِرَاطَ','the path of'],['الَّذِينَ','those who'],['أَنْعَمْتَ','You blessed'],['عَلَيْهِمْ','upon them'],['غَيْرِ','not of'],['الْمَغْضُوبِ','those who earned anger'],['وَلَا','nor'],['الضَّالِّينَ','the astray']] },

{ id:'t-ikhlas', title:'Sūrat al-Ikhlāṣ', ar_title:'سورة الإخلاص', src:'Qur\'an 112', level:1, kind:'quran',
  ar:`قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾`,
  gloss:[['قُلْ','say!'],['هُوَ','He is'],['اللَّهُ','God'],['أَحَدٌ','One / anyone'],['الصَّمَدُ','the Eternal Refuge'],['لَمْ','did not'],['يَلِدْ','beget'],['وَلَمْ','and not'],['يُولَدْ','was He begotten'],['يَكُن','there is'],['لَّهُ','unto Him'],['كُفُوًا','any equal']] },

{ id:'t-falaq', title:'Sūrat al-Falaq', ar_title:'سورة الفلق', src:'Qur\'an 113', level:1, kind:'quran',
  ar:`قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾`,
  gloss:[['قُلْ','say!'],['أَعُوذُ','I take refuge'],['بِرَبِّ','with the Lord of'],['الْفَلَقِ','the daybreak'],['مِن','from'],['وَمِن','and from'],['شَرِّ','the evil of'],['مَا','what'],['خَلَقَ','He created'],['غَاسِقٍ','darkness'],['إِذَا','when'],['وَقَبَ','it settles'],['النَّفَّاثَاتِ','the blowers'],['فِي','on'],['الْعُقَدِ','knots'],['حَاسِدٍ','an envier'],['حَسَدَ','he envies']] },

{ id:'t-nas', title:'Sūrat an-Nās', ar_title:'سورة الناس', src:'Qur\'an 114', level:1, kind:'quran',
  ar:`قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾`,
  gloss:[['قُلْ','say!'],['أَعُوذُ','I take refuge'],['بِرَبِّ','with the Lord of'],['النَّاسِ','mankind'],['وَالنَّاسِ','and mankind'],['مَلِكِ','the King of'],['إِلَٰهِ','the God of'],['مِن','from'],['مِنَ','from'],['شَرِّ','the evil of'],['الْوَسْوَاسِ','the whisperer'],['الْخَنَّاسِ','who withdraws'],['الَّذِي','who'],['يُوَسْوِسُ','whispers'],['فِي','in'],['صُدُورِ','the breasts of'],['الْجِنَّةِ','the jinn']] },

{ id:'t-asr', title:'Sūrat al-ʿAṣr', ar_title:'سورة العصر', src:'Qur\'an 103', level:1, kind:'quran',
  ar:`وَالْعَصْرِ ﴿١﴾ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ﴿٢﴾ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ ﴿٣﴾`,
  gloss:[['وَالْعَصْرِ','by Time!'],['إِنَّ','indeed'],['الْإِنسَانَ','mankind'],['لَفِي','is surely in'],['خُسْرٍ','loss'],['إِلَّا','except'],['الَّذِينَ','those who'],['آمَنُوا','believed'],['وَعَمِلُوا','and did'],['الصَّالِحَاتِ','righteous deeds'],['وَتَوَاصَوْا','and exhorted one another'],['بِالْحَقِّ','to truth'],['بِالصَّبْرِ','to patience']] },

{ id:'t-kawthar', title:'Sūrat al-Kawthar', ar_title:'سورة الكوثر', src:'Qur\'an 108', level:1, kind:'quran',
  ar:`إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَانْحَرْ ﴿٢﴾ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ ﴿٣﴾`,
  gloss:[['إِنَّا','indeed We'],['أَعْطَيْنَاكَ','gave you'],['الْكَوْثَرَ','abundance / al-Kawthar'],['فَصَلِّ','so pray'],['لِرَبِّكَ','to your Lord'],['وَانْحَرْ','and sacrifice'],['إِنَّ','indeed'],['شَانِئَكَ','your enemy'],['هُوَ','he is'],['الْأَبْتَرُ','the one cut off']] },

{ id:'t-kursi', title:'Āyat al-Kursī', ar_title:'آية الكرسي', src:'Qur\'an 2:255', level:3, kind:'quran',
  ar:`اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
  gloss:[['اللَّهُ','God'],['لَا','no / not'],['وَلَا','and not'],['إِلَٰهَ','god'],['إِلَّا','except'],['هُوَ','He'],['وَهُوَ','and He is'],['الْحَيُّ','the Ever-Living'],['الْقَيُّومُ','the Sustainer'],['تَأْخُذُهُ','seizes Him'],['سِنَةٌ','slumber'],['نَوْمٌ','sleep'],['لَّهُ','to Him belongs'],['مَا','what'],['وَمَا','and what'],['فِي','in'],['السَّمَاوَاتِ','the heavens'],['الْأَرْضِ','the earth'],['وَالْأَرْضَ','and the earth'],['مَن','who'],['ذَا','is it'],['الَّذِي','that'],['يَشْفَعُ','intercedes'],['عِندَهُ','with Him'],['بِإِذْنِهِ','by His permission'],['يَعْلَمُ','He knows'],['بَيْنَ','between'],['أَيْدِيهِمْ','their hands (before them)'],['خَلْفَهُمْ','is behind them'],['يُحِيطُونَ','they encompass'],['بِشَيْءٍ','anything'],['مِّنْ','of'],['عِلْمِهِ','His knowledge'],['بِمَا','what'],['شَاءَ','He wills'],['وَسِعَ','encompasses'],['كُرْسِيُّهُ','His Kursī'],['يَئُودُهُ','wearies Him'],['حِفْظُهُمَا','preserving them both'],['الْعَلِيُّ','the Most High'],['الْعَظِيمُ','the Magnificent']] },

{ id:'t-luqman', title:'Luqmān\'s counsel', ar_title:'من وصية لقمان', src:'Qur\'an 31:17–18', level:3, kind:'quran',
  ar:`يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ ۖ إِنَّ ذَٰلِكَ مِنْ عَزْمِ الْأُمُورِ ﴿١٧﴾ وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ ﴿١٨﴾`,
  gloss:[['يَا','O'],['بُنَيَّ','my dear son'],['أَقِمِ','establish'],['الصَّلَاةَ','the prayer'],['وَأْمُرْ','and enjoin'],['بِالْمَعْرُوفِ','what is right'],['وَانْهَ','and forbid'],['عَنِ','from'],['الْمُنكَرِ','what is wrong'],['وَاصْبِرْ','and be patient'],['عَلَىٰ','over'],['مَا','what'],['أَصَابَكَ','befalls you'],['إِنَّ','indeed'],['ذَٰلِكَ','that'],['مِنْ','is of'],['عَزْمِ','the resolve of'],['الْأُمُورِ','affairs'],['وَلَا','and do not'],['تُصَعِّرْ','turn away'],['خَدَّكَ','your cheek'],['لِلنَّاسِ','from people'],['تَمْشِ','walk'],['فِي','on'],['الْأَرْضِ','the earth'],['مَرَحًا','exultantly'],['اللَّهَ','God'],['لَا','does not'],['يُحِبُّ','love'],['كُلَّ','any'],['مُخْتَالٍ','conceited'],['فَخُورٍ','boaster']] },

{ id:'t-niyyat', title:'Hadith: Deeds by Intentions', ar_title:'حديث النيات', src:'Ṣaḥīḥ al-Bukhārī 1', level:2, kind:'prose',
  ar:`إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ`,
  gloss:[['إِنَّمَا','only'],['وَإِنَّمَا','and only'],['الأَعْمَالُ','deeds are'],['بِالنِّيَّاتِ','by intentions'],['لِكُلِّ','for each'],['امْرِئٍ','person'],['مَا','what'],['نَوَى','he intended'],['فَمَنْ','so whoever'],['كَانَتْ','was'],['هِجْرَتُهُ','his emigration'],['فَهِجْرَتُهُ','then his emigration is'],['إِلَى','to'],['دُنْيَا','worldly gain'],['يُصِيبُهَا','to attain'],['أَوْ','or'],['امْرَأَةٍ','a woman'],['يَنْكِحُهَا','to marry'],['هَاجَرَ','he emigrated'],['إِلَيْهِ','for']] },

{ id:'t-ilm', title:'Hadith: The Path of Knowledge', ar_title:'حديث طلب العلم', src:'Ṣaḥīḥ Muslim', level:2, kind:'prose',
  ar:`مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللهُ لَهُ بِهِ طَرِيقًا إِلَى الجَنَّةِ`,
  gloss:[['مَنْ','whoever'],['سَلَكَ','travels'],['طَرِيقًا','a path'],['يَلْتَمِسُ','seeking'],['فِيهِ','in it'],['عِلْمًا','knowledge'],['سَهَّلَ','eases'],['اللهُ','God'],['لَهُ','for him'],['بِهِ','thereby'],['إِلَى','to'],['الجَنَّةِ','Paradise']] },

{ id:'t-proverbs', title:'Classical Proverbs', ar_title:'أمثال عربية', src:'Amthāl al-ʿArab', level:2, kind:'prose',
  ar:`مَنْ جَدَّ وَجَدَ، وَمَنْ زَرَعَ حَصَدَ. العِلْمُ فِي الصِّغَرِ كَالنَّقْشِ عَلَى الحَجَرِ. خَيْرُ الكَلَامِ مَا قَلَّ وَدَلَّ. رُبَّ أَخٍ لَكَ لَمْ تَلِدْهُ أُمُّكَ. الوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ. لِكُلِّ مَقَامٍ مَقَالٌ.`,
  gloss:[['مَنْ','whoever'],['وَمَنْ','and whoever'],['جَدَّ','strives'],['وَجَدَ','finds'],['زَرَعَ','sows'],['حَصَدَ','reaps'],['العِلْمُ','learning'],['فِي','in'],['الصِّغَرِ','youth'],['كَالنَّقْشِ','is like engraving'],['عَلَى','on'],['الحَجَرِ','stone'],['خَيْرُ','the best of'],['الكَلَامِ','speech'],['مَا','is what'],['قَلَّ','is brief'],['وَدَلَّ','and telling'],['رُبَّ','many a'],['أَخٍ','brother'],['لَكَ','of yours'],['لَمْ','did not'],['تَلِدْهُ','bear him'],['أُمُّكَ','your mother'],['الوَقْتُ','time'],['كَالسَّيْفِ','is like the sword'],['إِنْ','if'],['تَقْطَعْهُ','you cut it'],['قَطَعَكَ','it cuts you'],['لِكُلِّ','for every'],['مَقَامٍ','occasion'],['مَقَالٌ','a speech']] },

{ id:'t-kalila', title:'Fable in the style of Kalīla wa-Dimna', ar_title:'على أسلوب كليلة ودمنة', src:'Composed after Ibn al-Muqaffaʿ (d. c. 756)', level:3, kind:'prose',
  ar:`زَعَمُوا أَنَّ أَسَدًا كَانَ فِي أَجَمَةٍ، وَمَعَهُ ثَلَاثَةٌ مِنَ الوُحُوشِ: ذِئْبٌ وَغُرَابٌ وَابْنُ آوَى. فَخَرَجَ الأَسَدُ يَوْمًا يَطْلُبُ الصَّيْدَ، فَرَأَى جَمَلًا قَدْ ضَلَّ عَنْ أَصْحَابِهِ، فَقَالَ لَهُ: مِنْ أَيْنَ أَقْبَلْتَ؟ قَالَ الجَمَلُ: ضَلَلْتُ عَنِ القَافِلَةِ، فَأَنَا أَطْلُبُ مَنْ يُجِيرُنِي. قَالَ الأَسَدُ: قَدْ أَجَرْتُكَ، فَكُنْ مَعَنَا آمِنًا مُطْمَئِنًّا.`,
  gloss:[['زَعَمُوا','they claim'],['أَنَّ','that'],['أَسَدًا','a lion'],['كَانَ','was'],['فِي','in'],['أَجَمَةٍ','a thicket'],['وَمَعَهُ','and with him'],['ثَلَاثَةٌ','three'],['مِنَ','of'],['الوُحُوشِ','the beasts'],['ذِئْبٌ','a wolf'],['وَغُرَابٌ','a crow'],['وَابْنُ','and the son of (jackal: ibn āwā)'],['آوَى','(jackal)'],['فَخَرَجَ','so went out'],['الأَسَدُ','the lion'],['يَوْمًا','one day'],['يَطْلُبُ','seeking'],['أَطْلُبُ','I seek'],['الصَّيْدَ','prey'],['فَرَأَى','and saw'],['جَمَلًا','a camel'],['الجَمَلُ','the camel'],['قَدْ','had / have'],['ضَلَّ','strayed'],['عَنْ','from'],['عَنِ','from'],['أَصْحَابِهِ','its companions'],['فَقَالَ','so he said'],['قَالَ','said'],['لَهُ','to it'],['مِنْ','from'],['أَيْنَ','where'],['أَقْبَلْتَ','have you come'],['ضَلَلْتُ','I strayed'],['القَافِلَةِ','the caravan'],['فَأَنَا','so I'],['مَنْ','someone who'],['يُجِيرُنِي','will protect me'],['أَجَرْتُكَ','I grant you protection'],['فَكُنْ','so be'],['مَعَنَا','with us'],['آمِنًا','safe'],['مُطْمَئِنًّا','at ease']] },

{ id:'t-alfiyya', title:'Alfiyyat Ibn Mālik (opening)', ar_title:'مطلع الألفية', src:'Ibn Mālik, d. 1274', level:3, kind:'poetry',
  ar:`قَالَ مُحَمَّدٌ هُوَ ابْنُ مَالِكِ ۝ أَحْمَدُ رَبِّي اللهَ خَيْرَ مَالِكِ
كَلَامُنَا لَفْظٌ مُفِيدٌ كَاسْتَقِمْ ۝ وَاسْمٌ وَفِعْلٌ ثُمَّ حَرْفٌ الْكَلِمْ`,
  gloss:[['قَالَ','said'],['مُحَمَّدٌ','Muḥammad'],['هُوَ','he is'],['ابْنُ','the son of'],['مَالِكِ','Mālik / master'],['أَحْمَدُ','I praise'],['رَبِّي','my Lord'],['اللهَ','God'],['خَيْرَ','the best'],['كَلَامُنَا','our "speech" is'],['لَفْظٌ','an utterance'],['مُفِيدٌ','meaningful'],['كَاسْتَقِمْ','like "be upright!"'],['وَاسْمٌ','noun'],['وَفِعْلٌ','and verb'],['ثُمَّ','then'],['حَرْفٌ','particle'],['الْكَلِمْ','are the word-classes']] },

{ id:'t-mutanabbi', title:'al-Mutanabbī — selected verses', ar_title:'مختارات من المتنبي', src:'al-Mutanabbī, d. 965', level:4, kind:'poetry',
  ar:`الخَيْلُ وَاللَّيْلُ وَالبَيْدَاءُ تَعْرِفُنِي ۝ وَالسَّيْفُ وَالرُّمْحُ وَالقِرْطَاسُ وَالقَلَمُ
أَنَا الَّذِي نَظَرَ الأَعْمَى إِلَى أَدَبِي ۝ وَأَسْمَعَتْ كَلِمَاتِي مَنْ بِهِ صَمَمُ
عَلَى قَدْرِ أَهْلِ العَزْمِ تَأْتِي العَزَائِمُ ۝ وَتَأْتِي عَلَى قَدْرِ الكِرَامِ المَكَارِمُ`,
  gloss:[['الخَيْلُ','the horses'],['وَاللَّيْلُ','and the night'],['وَالبَيْدَاءُ','and the desert'],['تَعْرِفُنِي','know me'],['وَالسَّيْفُ','and the sword'],['وَالرُّمْحُ','and the spear'],['وَالقِرْطَاسُ','and the paper'],['وَالقَلَمُ','and the pen'],['أَنَا','I am'],['الَّذِي','he whose'],['نَظَرَ','looked'],['الأَعْمَى','the blind man'],['إِلَى','at'],['أَدَبِي','my learning'],['وَأَسْمَعَتْ','and made hear'],['كَلِمَاتِي','my words'],['مَنْ','one who'],['بِهِ','has'],['صَمَمُ','deafness'],['عَلَى','according to'],['قَدْرِ','the measure of'],['أَهْلِ','the people of'],['العَزْمِ','resolve'],['تَأْتِي','come'],['وَتَأْتِي','and come'],['العَزَائِمُ','resolutions'],['الكِرَامِ','the noble'],['المَكَارِمُ','noble deeds']] },

{ id:'t-muallaqa', title:'Muʿallaqa of Imruʾ al-Qays (opening)', ar_title:'معلقة امرئ القيس', src:'Imruʾ al-Qays, 6th c.', level:5, kind:'poetry',
  ar:`قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ ۝ بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ
وَإِنَّ شِفَائِي عَبْرَةٌ مُهَرَاقَةٌ ۝ فَهَلْ عِنْدَ رَسْمٍ دَارِسٍ مِنْ مُعَوَّلِ`,
  gloss:[['قِفَا','halt, you two!'],['نَبْكِ','let us weep'],['مِنْ','at / any'],['ذِكْرَى','the memory of'],['حَبِيبٍ','a beloved'],['وَمَنْزِلِ','and a dwelling'],['بِسِقْطِ','at the edge of'],['اللِّوَى','the winding sand'],['بَيْنَ','between'],['الدَّخُولِ','ad-Dakhūl'],['فَحَوْمَلِ','and Ḥawmal'],['وَإِنَّ','and truly'],['شِفَائِي','my cure is'],['عَبْرَةٌ','a tear'],['مُهَرَاقَةٌ','poured out'],['فَهَلْ','so is there'],['عِنْدَ','at'],['رَسْمٍ','a trace'],['دَارِسٍ','effaced'],['مُعَوَّلِ','thing to lean on']] },

{ id:'t-zuhayr', title:'Zuhayr — wisdom verses', ar_title:'من حكمة زهير', src:'Zuhayr ibn Abī Sulmā, Muʿallaqa', level:5, kind:'poetry',
  ar:`وَمَهْمَا تَكُنْ عِنْدَ امْرِئٍ مِنْ خَلِيقَةٍ ۝ وَإِنْ خَالَهَا تَخْفَى عَلَى النَّاسِ تُعْلَمِ
وَمَنْ لَمْ يُصَانِعْ فِي أُمُورٍ كَثِيرَةٍ ۝ يُضَرَّسْ بِأَنْيَابٍ وَيُوطَأْ بِمَنْسِمِ`,
  gloss:[['وَمَهْمَا','and whatever'],['تَكُنْ','there be'],['عِنْدَ','in'],['امْرِئٍ','a man'],['مِنْ','of'],['خَلِيقَةٍ','character'],['وَإِنْ','even if'],['خَالَهَا','he thinks it'],['تَخْفَى','hidden'],['عَلَى','from'],['النَّاسِ','people'],['تُعْلَمِ','it becomes known'],['وَمَنْ','and whoever'],['لَمْ','does not'],['يُصَانِعْ','deal tactfully'],['فِي','in'],['أُمُورٍ','matters'],['كَثِيرَةٍ','many'],['يُضَرَّسْ','is bitten'],['بِأَنْيَابٍ','by fangs'],['وَيُوطَأْ','and trampled'],['بِمَنْسِمِ','by a camel\'s hoof']] }
];

/* ── TIMELINE MILESTONES ──
   xpNeeded: lesson XP needed (max available is 1500).
   reqTracks: {trackId: fraction complete required}. */
FUSHA.milestones = [
{ id:'m1', xpNeeded:120, title:'Read fully vocalized text', ar:'قراءة النص المشكول', reqTracks:{ r:1.0 },
  desc:'Sound out any fully vocalized Arabic slowly but correctly — short sūras, children\'s readers, textbook exercises.' },
{ id:'m2', xpNeeded:300, title:'Understand short sūras & simple sentences', ar:'فهم قصار السور', reqTracks:{ r:1.0, v:0.5, n:0.3, s:0.25 },
  desc:'Read Juzʾ ʿAmma\'s short sūras and simple nominal/verbal sentences, recognizing most words without a dictionary.' },
{ id:'m3', xpNeeded:520, title:'Read didactic poetry (Alfiyya-style)', ar:'قراءة الشعر التعليمي', reqTracks:{ s:0.6, n:0.6, p:0.35 },
  desc:'Follow rajaz didactic verse — Alfiyyat Ibn Mālik and its family — with occasional dictionary help. Didactic meters are the easiest poetry.' },
{ id:'m4', xpNeeded:760, title:'Read classical prose with tashkīl', ar:'قراءة النثر المشكول', reqTracks:{ v:0.8, s:0.8, n:0.8, q:0.6, p:0.5 },
  desc:'Hadith narratives, Kalīla wa-Dimna fables, and sīra excerpts in vocalized editions, at a comfortable pace.' },
{ id:'m5', xpNeeded:1000, title:'Read Abbasid poetry with commentary', ar:'قراءة شعر العصر العباسي', reqTracks:{ p:0.85, n:1.0, s:1.0 },
  desc:'al-Mutanabbī, Abū Tammām, al-Buḥturī — with a commentary (sharḥ) at your elbow, as the classical tradition itself read them.' },
{ id:'m6', xpNeeded:1180, title:'Read unvocalized prose', ar:'قراءة النثر بلا تشكيل', reqTracks:{ u:1.0, v:1.0 },
  desc:'Cold-read unvocalized classical prose — the standard printed page — reconstructing iʿrāb as you go.' },
{ id:'m7', xpNeeded:1320, title:'Converse in fuṣḥā', ar:'المحادثة بالفصحى', reqTracks:{ e:1.0, v:1.0, n:1.0 },
  desc:'Hold everyday conversation in correct classical Arabic: greet, narrate, ask, argue, and make duʿāʾ, with sound iʿrāb.' },
{ id:'m8', xpNeeded:1440, title:'Read the Muʿallaqāt with commentary', ar:'قراءة المعلقات', reqTracks:{ p:1.0, u:1.0 },
  desc:'Pre-Islamic odes — the hardest classical Arabic there is — readable with a commentary for the rare desert vocabulary.' },
{ id:'m9', xpNeeded:1500, title:'Course complete: the foundation for any text', ar:'تمام المنهج',
  reqTracks:{ r:1,v:1,s:1,n:1,q:1,p:1,u:1,e:1 },
  desc:'Everything in the app mastered. You have the full toolkit for unvocalized text of any genre and for speaking fuṣḥā; from here fluency comes from volume — the Resources list is your library.' }
];

/* ── SPEAKING PROMPTS (Speak tab) ── */
FUSHA.speakPrompts = [
{ lesson:'e1', title:'Greetings exchange', ar:'حِوَار التَّحِيَّة',
  prompt:'Greet a guest, ask how they are, thank them, and say farewell.',
  model:'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ. كَيْفَ حَالُكَ يَا صَدِيقِي؟ — أَنَا بِخَيْرٍ وَالحَمْدُ لِلَّهِ. — جَزَاكَ اللهُ خَيْرًا عَلَى زِيَارَتِكَ. — فِي أَمَانِ اللهِ.' },
{ lesson:'e2', title:'Introduce yourself', ar:'عَرِّفْ بِنَفْسِكَ',
  prompt:'Five sentences: name, origin, occupation, why you study Arabic, what you love to read.',
  model:'اسْمِي ___. أَنَا مِنْ ___. أَعْمَلُ ___. أَتَعَلَّمُ الفُصْحَى لِأَفْهَمَ القُرْآنَ وَالشِّعْرَ. أُحِبُّ أَنْ أَقْرَأَ كُتُبَ الأَدَبِ.' },
{ lesson:'e3', title:'Interview a scholar', ar:'حِوَارُ سُؤَالٍ وَجَوَاب',
  prompt:'Ask a scholar six questions using مَنْ، مَا، أَيْنَ، مَتَى، كَيْفَ، لِمَاذَا.',
  model:'مَنْ شَيْخُكَ؟ مَا أَحَبُّ الكُتُبِ إِلَيْكَ؟ أَيْنَ طَلَبْتَ العِلْمَ؟ مَتَى تَقْرَأُ؟ كَيْفَ تَحْفَظُ؟ لِمَاذَا تُحِبُّ العَرَبِيَّةَ؟' },
{ lesson:'e4', title:'Narrate your day', ar:'اُسْرُدْ يَوْمَكَ',
  prompt:'Narrate your day in six past-tense sentences using ثُمَّ، فَـ، لَمَّا at least once each. Add one ḥāl (رَجَعْتُ فَرِحًا).',
  model:'اِسْتَيْقَظْتُ صَبَاحًا، فَقَرَأْتُ قَلِيلًا، ثُمَّ خَرَجْتُ إِلَى عَمَلِي. لَمَّا رَجَعْتُ دَرَسْتُ العَرَبِيَّةَ، ثُمَّ نِمْتُ مَسْرُورًا.' },
{ lesson:'e4', title:'Describe a place', ar:'صِفْ مَكَانًا',
  prompt:'Describe your room or city in five nominal sentences with agreeing adjectives.',
  model:'غُرْفَتِي صَغِيرَةٌ جَمِيلَةٌ. فِيهَا مَكْتَبٌ كَبِيرٌ وَكُتُبٌ كَثِيرَةٌ. النَّافِذَةُ وَاسِعَةٌ، وَالنُّورُ فِيهَا حَسَنٌ.' },
{ lesson:'e5', title:'Argue an opinion', ar:'اِعْرِضْ رَأْيَكَ',
  prompt:'State three opinions with أَرَى أَنَّ / أَظُنُّ أَنَّ, support one with لِأَنَّ, concede one with لَكِنَّ.',
  model:'أَرَى أَنَّ القِرَاءَةَ خَيْرُ مُعَلِّمٍ، لِأَنَّهَا تَجْمَعُ لَكَ عُقُولَ النَّاسِ. أَظُنُّ أَنَّ الشِّعْرَ صَعْبٌ، لَكِنَّهُ جَمِيلٌ.' },
{ lesson:'e5', title:'Compose a duʿāʾ', ar:'اُدْعُ دُعَاءً',
  prompt:'Compose your own three-line duʿāʾ on the Qur\'anic pattern رَبِّ / رَبَّنَا + imperative.',
  model:'رَبِّ زِدْنِي عِلْمًا، وَيَسِّرْ لِي أَمْرِي، وَاجْعَلْنِي مِنَ الصَّابِرِينَ.' }
];

/* ── FREE RESOURCES ── */
FUSHA.resources = [
{ name:'Quranic Arabic Corpus', url:'https://corpus.quran.com', desc:'Word-by-word grammar, morphology and syntax of the entire Qur\'an — the best free companion to this app\'s method.' },
{ name:'Quran.com', url:'https://quran.com', desc:'Full Qur\'an with word-by-word translation and multiple tafsīrs.' },
{ name:'Tanzil', url:'https://tanzil.net', desc:'Clean, verified Qur\'an text, with and without tashkīl — ideal for bare-text practice.' },
{ name:'Madinah Arabic Books (LQToronto)', url:'https://www.lqtoronto.com', desc:'Dr. V. Abdur Rahim\'s classic three-book classical-Arabic course, free PDFs and video classes.' },
{ name:'Lane\'s Arabic-English Lexicon', url:'https://lexicon.quranic-research.net', desc:'The great 19th-century dictionary of classical Arabic, free and searchable.' },
{ name:'al-Maktaba al-Shamela', url:'https://shamela.ws', desc:'Thousands of classical Arabic books — hadith, tafsīr, adab, poetry — free full text.' },
{ name:'Aldiwan', url:'https://www.aldiwan.net', desc:'Large free archive of Arabic poetry from pre-Islamic to modern, by poet, era, and meter.' },
{ name:'Wikisource (Arabic)', url:'https://ar.wikisource.org', desc:'Free classical texts including the Muʿallaqāt, the Alfiyya, and Kalīla wa-Dimna.' },
{ name:'Sunnah.com', url:'https://sunnah.com', desc:'The major hadith collections in vocalized Arabic with English — ideal first prose.' },
{ name:'Hans Wehr / multi-dictionary lookup (Ejtaal)', url:'https://ejtaal.net/aa/', desc:'Root-based lookup across Lane, Hans Wehr, Lisān al-ʿArab and more, side by side.' }
];
