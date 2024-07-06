const KANA_TABLE = [
  ["a", "ア", "あ"],
  ["i", "イ", "い"],
  ["u", "ウ", "う"],
  ["e", "エ", "え"],
  ["o", "オ", "お"],
  ["ka", "カ", "か"],
  ["ki", "キ", "き"],
  ["ku", "ク", "く"],
  ["ke", "ケ", "け"],
  ["ko", "コ", "こ"],
  ["sa", "サ", "さ"],
  ["shi", "シ", "し"],
  ["su", "ス", "す"],
  ["se", "セ", "せ"],
  ["so", "ソ", "そ"],
  ["ta", "タ", "た"],
  ["chi", "チ", "ち"],
  ["tsu", "ツ", "つ"],
  ["te", "テ", "て"],
  ["to", "ト", "と"],
  ["na", "ナ", "な"],
  ["ni", "ニ", "に"],
  ["nu", "ヌ", "ぬ"],
  ["ne", "ネ", "ね"],
  ["no", "ノ", "の"],
  ["ha", "ハ", "は"],
  ["hi", "ヒ", "ひ"],
  ["fu", "フ", "ふ"],
  ["he", "ヘ", "へ"],
  ["ho", "ホ", "ほ"],
  ["ma", "マ", "ま"],
  ["mi", "ミ", "み"],
  ["mu", "ム", "む"],
  ["me", "メ", "め"],
  ["mo", "モ", "も"],
  ["ya", "ヤ", "や"],
  ["yu", "ユ", "ゆ"],
  ["yo", "ヨ", "よ"],
  ["ra", "ラ", "ら"],
  ["ri", "リ", "り"],
  ["ru", "ル", "る"],
  ["re", "レ", "れ"],
  ["ro", "ロ", "ろ"],
  ["wa", "ワ", "わ"],
  ["wo", "ヲ", "を"],
  ["n", "ン", "ん"],
  ["ga", "ガ", "が"],
  ["gi", "ギ", "ぎ"],
  ["gu", "グ", "ぐ"],
  ["ge", "ゲ", "げ"],
  ["go", "ゴ", "ご"],
  ["za", "ザ", "ざ"],
  ["ji", "ジ", "じ"],
  ["zu", "ズ", "ず"],
  ["ze", "ゼ", "ぜ"],
  ["zo", "ゾ", "ぞ"],
  ["da", "ダ", "だ"],
  ["de", "デ", "で"],
  ["do", "ド", "ど"],
  ["ba", "バ", "ば"],
  ["bi", "ビ", "び"],
  ["bu", "ブ", "ぶ"],
  ["be", "ベ", "べ"],
  ["bo", "ボ", "ぼ"],
  ["pa", "パ", "ぱ"],
  ["pi", "ピ", "ぴ"],
  ["pu", "プ", "ぷ"],
  ["pe", "ペ", "ぺ"],
  ["po", "ポ", "ぽ"],
  ["kya", "キャ", "きゃ"],
  ["kyu", "キュ", "きゅ"],
  ["kyo", "キョ", "きょ"],
  ["sha", "シャ", "しゃ"],
  ["shu", "シュ", "しゅ"],
  ["sho", "ショ", "しょ"],
  ["cha", "チャ", "ちゃ"],
  ["chu", "チュ", "ちゅ"],
  ["cho", "チョ", "ちょ"],
  ["nya", "ニャ", "にゃ"],
  ["nyu", "ニュ", "にゅ"],
  ["nyo", "ニョ", "にょ"],
  ["hya", "ヒャ", "ひゃ"],
  ["hyu", "ヒュ", "ヒュ"],
  ["hyo", "ヒョ", "ひょ"],
  ["mya", "ミャ", "みゃ"],
  ["myu", "ミュ", "みゅ"],
  ["myo", "ミョ", "みょ"],
  ["rya", "リャ", "りゃ"],
  ["ryu", "リュ", "りゅ"],
  ["ryo", "リョ", "りょ"],
  ["gya", "ギャ", "ぎゃ"],
  ["gyu", "ギュ", "ぎゅ"],
  ["gyo", "ギョ", "ぎょ"],
  ["ja", "ジャ", "じゃ"],
  ["ju", "ジュ", "じゅ"],
  ["jo", "ジョ", "じょ"],
  ["bya", "ビャ", "びゃ"],
  ["byu", "ビュ", "びゅ"],
  ["byo", "ビョ", "びょ"],
  ["pya", "ピャ", "ぴゃ"],
  ["pyu", "ピュ", "ぴゅ"],
  ["pyo", "ピョ", "ぴょ"],
];

const scope = typeof window !== "undefined" ? window : global;

scope.KanaDriller = function KanaDriller(totalDrills = 30) {
  const randomInt = (max) => Math.floor(Math.random() * max);

  const kanaDrill = (kanaIndex) => {
    const [romaji, katakana, _hiragana] = KANA_TABLE[kanaIndex];
    let candidates = new Set([romaji]);

    while (candidates.size < 4) {
      candidates.add(KANA_TABLE[randomInt(KANA_TABLE.length)][0]);
    }
    candidates = [...candidates];

    const randomCandidates = new Set();
    while (randomCandidates.size < 4) {
      randomCandidates.add(candidates[randomInt(candidates.length)]);
    }

    return {
      kana: katakana,
      correctAnswer: romaji,
      candidates: [...randomCandidates],
      answer: null,
    };
  };

  const kanaIndices = new Set();
  while (kanaIndices.size < totalDrills) {
    kanaIndices.add(randomInt(KANA_TABLE.length));
  }

  const drills = [...kanaIndices].map(kanaDrill);
  let currentDrillIndex = 0;

  return {
    currentDrill() {
      return drills[currentDrillIndex];
    },
    isDone() {
      return !drills.some((x) => x.answer === null);
    },
    nextDrill() {
      if (currentDrillIndex < totalDrills - 1) {
        currentDrillIndex++;
      }

      return this.currentDrill();
    },
    previousDrill() {
      if (currentDrillIndex > 0) {
        currentDrillIndex--;
      }
      return this.currentDrill();
    },

    isFirst() {
      return currentDrillIndex === 0;
    },
    isLast() {
      return currentDrillIndex === drills.length - 1;
    },
    respond(answer) {
      this.currentDrill().answer = answer;
    },
    result() {
      const failed = drills.filter(
        (x) => x.answer && x.correctAnswer !== x.answer,
      );
      const skipped = drills.filter((x) => x.answer === null);
      const points = totalDrills - failed.length - skipped.length;

      return {
        failed,
        skipped,
        points,
        drills,
      };
    },
  };
};
