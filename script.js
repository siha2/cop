// Complete Coptic alphabet data (32 letters) - corrected shapes
const copticLetters = [
  { letter: 'Ⲁ', name: 'Alpha', word: 'Ⲁⲛⲟⲕ', sound: 'a' },
  { letter: 'Ⲃ', name: 'Vida', word: 'Ⲃⲉⲗⲉ', sound: 'v' },
  { letter: 'Ⲅ', name: 'Gamma', word: 'Ⲅⲁⲙⲁ', sound: 'g' },
  { letter: 'Ⲇ', name: 'Dalda', word: 'Ⲇⲁⲗⲇⲁ', sound: 'd' },
  { letter: 'Ⲉ', name: 'Eie', word: 'Ⲉⲓⲉ', sound: 'e' },
  { letter: 'Ⲋ', name: 'Soi', word: 'Ⲋⲟⲓ', sound: 's' },
  { letter: 'Ⲍ', name: 'Zita', word: 'Ⲍⲓⲧⲁ', sound: 'z' },
  { letter: 'Ⲏ', name: 'Eta', word: 'Ⲏⲧⲁ', sound: 'ē' },
  { letter: 'Ⲑ', name: 'Theta', word: 'Ⲑⲉⲧⲁ', sound: 'th' },
  { letter: 'Ⲓ', name: 'Iota', word: 'Ⲓⲟⲧⲁ', sound: 'i' },
  { letter: 'Ⲕ', name: 'Kappa', word: 'Ⲕⲁⲡⲡⲁ', sound: 'k' },
  { letter: 'Ⲗ', name: 'Lola', word: 'Ⲗⲟⲗⲁ', sound: 'l' },
  { letter: 'Ⲙ', name: 'Mey', word: 'Ⲙⲉⲓ', sound: 'm' },
  { letter: 'Ⲛ', name: 'Ney', word: 'Ⲛⲉⲓ', sound: 'n' },
  { letter: 'Ⲝ', name: 'Ksi', word: 'Ⲝⲓ', sound: 'ks' },
  { letter: 'Ⲟ', name: 'O', word: 'Ⲟⲙⲓⲕⲣⲟⲛ', sound: 'o' },
  { letter: 'Ⲡ', name: 'Pi', word: 'Ⲡⲓ', sound: 'p' },
  { letter: 'Ⲣ', name: 'Ro', word: 'Ⲣⲟ', sound: 'r' },
  { letter: 'Ⲥ', name: 'Seima', word: 'Ⲥⲉⲓⲙⲁ', sound: 's' },
  { letter: 'Ⲧ', name: 'Tau', word: 'Ⲧⲁⲩ', sound: 't' },
  { letter: 'Ⲩ', name: 'Upsilon', word: 'Ⲩⲡⲥⲓⲗⲟⲛ', sound: 'u' },
  { letter: 'Ⲫ', name: 'Phi', word: 'Ⲫⲓ', sound: 'ph' },
  { letter: 'Ⲭ', name: 'Khi', word: 'Ⲭⲓ', sound: 'kh' },
  { letter: 'Ⲯ', name: 'Psi', word: 'Ⲯⲓ', sound: 'ps' },
  { letter: 'Ⲱ', name: 'Oou', word: 'Ⲱⲟⲩ', sound: 'ō' },
  { letter: 'Ϣ', name: 'Shima', word: 'Ϣⲓⲙⲁ', sound: 'sh' },
  { letter: 'Ϥ', name: 'Fai', word: 'Ϥⲁⲓ', sound: 'f' },
  { letter: 'Ϧ', name: 'Khai', word: 'Ϧⲁⲓ', sound: 'kh' },
  { letter: 'Ϩ', name: 'Hori', word: 'Ϩⲟⲣⲓ', sound: 'h' },
  { letter: 'Ϫ', name: 'Janja', word: 'Ϫⲁⲛϫⲁ', sound: 'j' },
  { letter: 'Ϭ', name: 'Chima', word: 'Ϭⲓⲙⲁ', sound: 'ch' },
  { letter: 'Ϯ', name: 'Ti', word: 'Ϯⲓ', sound: 'ti' },
  { letter: 'Ⳁ', name: 'Psa', word: 'Ⳁⲁ', sound: 'psa' },
  { letter: 'Ⳃ', name: 'Aou', word: 'Ⳃⲟⲩ', sound: 'aou' },
  { letter: 'Ⳅ', name: 'Neb', word: 'Ⳅⲉⲃ', sound: 'neb' },
  { letter: 'Ⳇ', name: 'Khe', word: 'Ⳇⲉ', sound: 'khe' },
  { letter: 'Ⳉ', name: 'Akhe', word: 'Ⳉⲉ', sound: 'akhe' },
  { letter: 'Ⳋ', name: 'Tau', word: 'Ⳋⲁⲩ', sound: 'tau' },
  { letter: 'Ⳍ', name: 'Shai', word: 'Ⳍⲁⲓ', sound: 'shai' },
  { letter: 'Ⳏ', name: 'Fai', word: 'Ⳏⲁⲓ', sound: 'fai' },
  { letter: 'Ⳑ', name: 'Khai', word: 'Ⳑⲁⲓ', sound: 'khai' },
  { letter: 'Ⳓ', name: 'Hori', word: 'Ⳓⲟⲣⲓ', sound: 'hori' },
  { letter: 'Ⳕ', name: 'Gangia', word: 'Ⳕⲁⲛϫⲓⲁ', sound: 'gangia' },
  { letter: 'Ϭ', name: 'Shima', word: 'Ϭⲓⲙⲁ', sound: 'sh' },
  { letter: 'Ⳙ', name: 'Dei', word: 'Ⳙⲉⲓ', sound: 'dei' }
];

const questionsData = {
  easy: [
    { letter: 'Ⲁ', question: 'ما اسم هذا الحرف؟', answers: ['ألفا', 'بيتا'], correct: 0 },
    { letter: 'Ⲃ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲃⲉⲗⲉ', 'Ⲁⲛⲟⲕ'], correct: 0 },
    { letter: 'Ⲅ', question: 'ما اسم هذا الحرف؟', answers: ['جاما', 'دلتا'], correct: 0 },
    { letter: 'Ⲇ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲇⲁⲗⲇⲁ', 'Ⲃⲉⲗⲉ'], correct: 0 },
    { letter: 'Ⲉ', question: 'ما اسم هذا الحرف؟', answers: ['إيي', 'إيتا'], correct: 0 },
    { letter: 'Ⲋ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲋⲟⲓ', 'Ⲉⲓⲉ'], correct: 0 },
    { letter: 'Ⲍ', question: 'ما اسم هذا الحرف؟', answers: ['زيتا', 'ثيتا'], correct: 0 },
    { letter: 'Ⲏ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲏⲧⲁ', 'Ⲍⲓⲧⲁ'], correct: 0 },
    { letter: 'Ⲑ', question: 'ما اسم هذا الحرف؟', answers: ['ثيتا', 'إيوتا'], correct: 0 },
    { letter: 'Ⲓ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲓⲟⲧⲁ', 'Ⲑⲉⲧⲁ'], correct: 0 },
    { letter: 'Ⲕ', question: 'ما اسم هذا الحرف؟', answers: ['كابا', 'لامدا'], correct: 0 },
    { letter: 'Ⲗ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲗⲟⲗⲁ', 'Ⲕⲁⲡⲡⲁ'], correct: 0 },
    { letter: 'Ⲙ', question: 'ما اسم هذا الحرف؟', answers: ['مي', 'ني'], correct: 0 },
    { letter: 'Ⲛ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲛⲉⲓ', 'Ⲙⲉⲓ'], correct: 0 },
    { letter: 'Ⲝ', question: 'ما اسم هذا الحرف؟', answers: ['كسي', 'أوميكرون'], correct: 0 },
    { letter: 'Ⲟ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲟⲙⲓⲕⲣⲟⲛ', 'Ⲝⲓ'], correct: 0 },
    { letter: 'Ⲡ', question: 'ما اسم هذا الحرف؟', answers: ['بي', 'رو'], correct: 0 },
    { letter: 'Ⲣ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲣⲟ', 'Ⲡⲓ'], correct: 0 },
    { letter: 'Ⲥ', question: 'ما اسم هذا الحرف؟', answers: ['سيما', 'تاو'], correct: 0 },
    { letter: 'Ⲧ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲧⲁⲩ', 'Ⲥⲉⲓⲙⲁ'], correct: 0 },
    { letter: 'Ⲩ', question: 'ما اسم هذا الحرف؟', answers: ['أبسيلون', 'في'], correct: 0 },
    { letter: 'Ⲫ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲫⲓ', 'Ⲩⲡⲥⲓⲗⲟⲛ'], correct: 0 },
    { letter: 'Ⲭ', question: 'ما اسم هذا الحرف؟', answers: ['خي', 'بسي'], correct: 0 },
    { letter: 'Ⲯ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ⲯⲓ', 'Ⲭⲓ'], correct: 0 },
    { letter: 'Ⲱ', question: 'ما اسم هذا الحرف؟', answers: ['أو', 'شيما'], correct: 0 },
    { letter: 'Ϣ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ϣⲓⲙⲁ', 'Ⲱⲟⲩ'], correct: 0 },
    { letter: 'Ϥ', question: 'ما اسم هذا الحرف؟', answers: ['فاي', 'خاي'], correct: 0 },
    { letter: 'Ϧ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ϧⲁⲓ', 'Ϥⲁⲓ'], correct: 0 },
    { letter: 'Ϩ', question: 'ما اسم هذا الحرف؟', answers: ['هوري', 'جانجا'], correct: 0 },
    { letter: 'Ϫ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ϫⲁⲛϫⲁ', 'Ϩⲟⲣⲓ'], correct: 0 },
    { letter: 'Ϭ', question: 'ما اسم هذا الحرف؟', answers: ['شيما', 'تي'], correct: 0 },
    { letter: 'Ϯ', question: 'أي كلمة تحتوي على هذا الحرف؟', answers: ['Ϯⲓ', 'Ϭⲓⲙⲁ'], correct: 0 }
  ],
  middle: [
    { letter: 'Ⲁ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['أ', 'إ'], correct: 0 },
    { letter: 'Ⲃ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ڤ', 'ب'], correct: 0 },
    { letter: 'Ⲅ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ج', 'د'], correct: 0 },
    { letter: 'Ⲇ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['د', 'ت'], correct: 0 },
    { letter: 'Ⲉ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['إ', 'ي'], correct: 0 },
    { letter: 'Ⲋ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['س', 'ز'], correct: 0 },
    { letter: 'Ⲍ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ز', 'س'], correct: 0 },
    { letter: 'Ⲏ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['إي', 'إ'], correct: 0 },
    { letter: 'Ⲑ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ث', 'ت'], correct: 0 },
    { letter: 'Ⲓ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ي', 'و'], correct: 0 },
    { letter: 'Ⲕ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ك', 'ق'], correct: 0 },
    { letter: 'Ⲗ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ل', 'ر'], correct: 0 },
    { letter: 'Ⲙ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['م', 'ن'], correct: 0 },
    { letter: 'Ⲛ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ن', 'م'], correct: 0 },
    { letter: 'Ⲝ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['كس', 'خ'], correct: 0 },
    { letter: 'Ⲟ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['و', 'أ'], correct: 0 },
    { letter: 'Ⲡ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ب', 'ڤ'], correct: 0 },
    { letter: 'Ⲣ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ر', 'ل'], correct: 0 },
    { letter: 'Ⲥ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['س', 'ز'], correct: 0 },
    { letter: 'Ⲧ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ت', 'د'], correct: 0 },
    { letter: 'Ⲩ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['و', 'ي'], correct: 0 },
    { letter: 'Ⲫ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ف', 'ڤ'], correct: 0 },
    { letter: 'Ⲭ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['خ', 'ك'], correct: 0 },
    { letter: 'Ⲯ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['بس', 'س'], correct: 0 },
    { letter: 'Ⲱ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['أو', 'و'], correct: 0 },
    { letter: 'Ϣ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ش', 'س'], correct: 0 },
    { letter: 'Ϥ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ف', 'ڤ'], correct: 0 },
    { letter: 'Ϧ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['خ', 'ه'], correct: 0 },
    { letter: 'Ϩ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ه', 'خ'], correct: 0 },
    { letter: 'Ϫ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['ج', 'غ'], correct: 0 },
    { letter: 'Ϭ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['تش', 'ك'], correct: 0 },
    { letter: 'Ϯ', question: 'ما الصوت الذي يصدره هذا الحرف؟', answers: ['تي', 'ت'], correct: 0 }
  ],
  hard: [
    { letter: 'Ⲁ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲁⲛⲟⲕ', 'Ⲃⲉⲗⲉ'], correct: 1 },
    { letter: 'Ⲃ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲃⲉⲗⲉ', 'Ⲁⲛⲟⲕ'], correct: 1 },
    { letter: 'Ⲅ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲅⲁⲙⲁ', 'Ⲃⲉⲗⲉ'], correct: 1 },
    { letter: 'Ⲇ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲇⲁⲗⲇⲁ', 'Ⲅⲁⲙⲁ'], correct: 1 },
    { letter: 'Ⲉ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲉⲓⲉ', 'Ⲇⲁⲗⲇⲁ'], correct: 1 },
    { letter: 'Ⲋ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲋⲟⲓ', 'Ⲉⲓⲉ'], correct: 1 },
    { letter: 'Ⲍ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲍⲓⲧⲁ', 'Ⲋⲟⲓ'], correct: 1 },
    { letter: 'Ⲏ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲏⲧⲁ', 'Ⲍⲓⲧⲁ'], correct: 1 },
    { letter: 'Ⲑ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲑⲉⲧⲁ', 'Ⲏⲧⲁ'], correct: 1 },
    { letter: 'Ⲓ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲓⲟⲧⲁ', 'Ⲑⲉⲧⲁ'], correct: 1 },
    { letter: 'Ⲕ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲕⲁⲡⲡⲁ', 'Ⲓⲟⲧⲁ'], correct: 1 },
    { letter: 'Ⲗ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲗⲟⲗⲁ', 'Ⲕⲁⲡⲡⲁ'], correct: 1 },
    { letter: 'Ⲙ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲙⲉⲓ', 'Ⲗⲟⲗⲁ'], correct: 1 },
    { letter: 'Ⲛ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲛⲉⲓ', 'Ⲙⲉⲓ'], correct: 1 },
    { letter: 'Ⲝ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲝⲓ', 'Ⲛⲉⲓ'], correct: 1 },
    { letter: 'Ⲟ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲟⲙⲓⲕⲣⲟⲛ', 'Ⲝⲓ'], correct: 1 },
    { letter: 'Ⲡ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲡⲓ', 'Ⲟⲙⲓⲕⲣⲟⲛ'], correct: 1 },
    { letter: 'Ⲣ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲣⲟ', 'Ⲡⲓ'], correct: 1 },
    { letter: 'Ⲥ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲥⲉⲓⲙⲁ', 'Ⲣⲟ'], correct: 1 },
    { letter: 'Ⲧ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲧⲁⲩ', 'Ⲥⲉⲓⲙⲁ'], correct: 1 },
    { letter: 'Ⲩ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲩⲡⲥⲓⲗⲟⲛ', 'Ⲧⲁⲩ'], correct: 1 },
    { letter: 'Ⲫ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲫⲓ', 'Ⲩⲡⲥⲓⲗⲟⲛ'], correct: 1 },
    { letter: 'Ⲭ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲭⲓ', 'Ⲫⲓ'], correct: 1 },
    { letter: 'Ⲯ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲯⲓ', 'Ⲭⲓ'], correct: 1 },
    { letter: 'Ⲱ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ⲱⲟⲩ', 'Ⲯⲓ'], correct: 1 },
    { letter: 'Ϣ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ϣⲓⲙⲁ', 'Ⲱⲟⲩ'], correct: 1 },
    { letter: 'Ϥ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ϥⲁⲓ', 'Ϣⲓⲙⲁ'], correct: 1 },
    { letter: 'Ϧ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ϧⲁⲓ', 'Ϥⲁⲓ'], correct: 1 },
    { letter: 'Ϩ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ϩⲟⲣⲓ', 'Ϧⲁⲓ'], correct: 1 },
    { letter: 'Ϫ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ϫⲁⲛϫⲁ', 'Ϩⲟⲣⲓ'], correct: 1 },
    { letter: 'Ϭ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ϭⲓⲙⲁ', 'Ϫⲁⲛϫⲁ'], correct: 1 },
    { letter: 'Ϯ', question: 'أي كلمة لا تحتوي على هذا الحرف؟', answers: ['Ϯⲓ', 'Ϭⲓⲙⲁ'], correct: 1 }
  ]
};

let currentMode = 'learning';
let currentLevel = 'easy';

const alphabetTable = document.getElementById('alphabetTable');
const learningBtn = document.getElementById('learningModeBtn');
const questionsBtn = document.getElementById('questionsModeBtn');
const levelSelect = document.getElementById('levelSelect');
const modal = document.getElementById('popupModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

function renderTable() {
  alphabetTable.innerHTML = '';
  copticLetters.forEach((item, idx) => {
    const cell = document.createElement('div');
    cell.className = 'letter-cell';
    cell.textContent = item.letter;
    cell.addEventListener('click', () => onLetterClick(item));
    alphabetTable.appendChild(cell);
  });
}

function onLetterClick(item) {
  if (currentMode === 'learning') {
    showLearningPopup(item);
  } else {
    showQuestionPopup(item);
  }
}

function showLearningPopup(item) {
  modalContent.innerHTML = `
    <span class="close" id="closeModal">&times;</span>
    <div style="font-size:4rem; margin-bottom:20px;">${item.letter}</div>
    <div style="margin:12px 0; font-size:1.3rem;">الاسم: ${item.name}</div>
    <div style="margin:12px 0; font-size:1.1rem;">كلمة مثال: <b>${item.word}</b></div>
    <div style="margin:12px 0; font-size:1.1rem;">الصوت: <b>${item.sound}</b></div>
    <button id="playAudioBtn" style="margin-top:20px; padding:12px 24px; font-size:16px; border-radius:8px; border:none; background:#1976d2; color:white; cursor:pointer;">🔊 تشغيل الصوت</button>
  `;
  modal.style.display = 'flex';
  document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
  document.getElementById('playAudioBtn').onclick = () => playLetterAudio(item.letter);
}

function showQuestionPopup(item) {
  // Find a question for this letter in the current level
  const questions = questionsData[currentLevel] || [];
  const q = questions.find(q => q.letter === item.letter);
  if (!q) {
    modalContent.innerHTML = `
      <span class="close" id="closeModal">&times;</span>
      <div>No question for this letter at this level.</div>
    `;
    modal.style.display = 'flex';
    document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
    return;
  }
  modalContent.innerHTML = `
    <span class="close" id="closeModal">&times;</span>
    <div style="font-size:2rem;">${item.letter}</div>
    <div style="margin:12px 0; font-size:1.1rem;">${q.question}</div>
    <button class="answer-btn" id="ans0">${q.answers[0]}</button>
    <button class="answer-btn" id="ans1">${q.answers[1]}</button>
  `;
  modal.style.display = 'flex';
  document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
  document.getElementById('ans0').onclick = () => handleAnswer(0, q.correct);
  document.getElementById('ans1').onclick = () => handleAnswer(1, q.correct);
}

function handleAnswer(selected, correct) {
  for (let i = 0; i < 2; i++) {
    const btn = document.getElementById('ans' + i);
    btn.classList.remove('correct', 'wrong');
    if (i === correct) btn.classList.add('correct');
    if (i === selected && i !== correct) btn.classList.add('wrong');
    btn.disabled = true;
  }
}

function playLetterAudio(letter) {
  // Placeholder: play a beep for now
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const o = ctx.createOscillator();
  o.type = 'sine';
  o.frequency.value = 440;
  o.connect(ctx.destination);
  o.start();
  setTimeout(() => o.stop(), 300);
}

learningBtn.onclick = () => {
  currentMode = 'learning';
  learningBtn.classList.add('active');
  questionsBtn.classList.remove('active');
  levelSelect.style.display = 'none';
};
questionsBtn.onclick = () => {
  currentMode = 'questions';
  learningBtn.classList.remove('active');
  questionsBtn.classList.add('active');
  levelSelect.style.display = 'inline-block';
};
levelSelect.onchange = (e) => {
  currentLevel = e.target.value;
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Initial render
renderTable(); 