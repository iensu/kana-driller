const KANA_ROWS = [
  { name: "a",   indices: [0, 1, 2, 3, 4] },
  { name: "ka",  indices: [5, 6, 7, 8, 9] },
  { name: "sa",  indices: [10, 11, 12, 13, 14] },
  { name: "ta",  indices: [15, 16, 17, 18, 19] },
  { name: "na",  indices: [20, 21, 22, 23, 24] },
  { name: "ha",  indices: [25, 26, 27, 28, 29] },
  { name: "ma",  indices: [30, 31, 32, 33, 34] },
  { name: "ya",  indices: [35, 36, 37] },
  { name: "ra",  indices: [38, 39, 40, 41, 42] },
  { name: "wa",  indices: [43, 44, 45] },
  { name: "ga",  indices: [46, 47, 48, 49, 50] },
  { name: "za",  indices: [51, 52, 53, 54, 55] },
  { name: "da",  indices: [56, 57, 58] },
  { name: "ba",  indices: [59, 60, 61, 62, 63] },
  { name: "pa",  indices: [64, 65, 66, 67, 68] },
  { name: "kya", indices: [69, 70, 71] },
  { name: "sha", indices: [72, 73, 74] },
  { name: "cha", indices: [75, 76, 77] },
  { name: "nya", indices: [78, 79, 80] },
  { name: "hya", indices: [81, 82, 83] },
  { name: "mya", indices: [84, 85, 86] },
  { name: "rya", indices: [87, 88, 89] },
  { name: "gya", indices: [90, 91, 92] },
  { name: "ja",  indices: [93, 94, 95] },
  { name: "bya", indices: [96, 97, 98] },
  { name: "pya", indices: [99, 100, 101] },
];

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

function computeWeight(stat, nowMs) {
  if (!stat || stat.seen === 0) return 100;

  const errorRate = 1 - stat.correct / stat.seen;
  const daysSince = (nowMs - stat.lastSeen) / 86_400_000;
  const recency = Math.min(daysSince, 30) / 30;

  return 1 + errorRate * 5 + recency * 4;
}

function weightedSample(weights, n) {
  const w = [...weights];
  const selected = [];
  for (let i = 0; i < n; i++) {
    const total = w.reduce((s, x) => s + x, 0);
    let r = Math.random() * total;
    for (let j = 0; j < w.length; j++) {
      r -= w[j];
      if (r <= 0) { selected.push(j); w[j] = 0; break; }
    }
  }
  return selected;
}

const scope = typeof window !== "undefined" ? window : global;

scope.KANA_ROWS = KANA_ROWS;

scope.KanaDriller = function KanaDriller(totalDrills = 30, scriptType = "katakana", kanaStats = {}, selectedRows = null) {
  let table;
  if (selectedRows && selectedRows.length > 0) {
    const allowed = new Set(
      KANA_ROWS.filter((r) => selectedRows.includes(r.name)).flatMap((r) => r.indices),
    );
    table = KANA_TABLE.filter((_, i) => allowed.has(i));
  } else {
    table = KANA_TABLE;
  }
  const kanaColIndex = scriptType === "hiragana" ? 2 : 1;
  const randomInt = (max) => Math.floor(Math.random() * max);

  const kanaDrill = (tableIndex) => {
    const entry = table[tableIndex];
    const romaji = entry[0];
    const kana = entry[kanaColIndex];
    let candidates = new Set([romaji]);

    while (candidates.size < Math.min(4, table.length)) {
      candidates.add(table[randomInt(table.length)][0]);
    }
    candidates = [...candidates];

    const randomCandidates = new Set();
    while (randomCandidates.size < 4) {
      randomCandidates.add(candidates[randomInt(candidates.length)]);
    }

    return {
      kana,
      correctAnswer: romaji,
      candidates: [...randomCandidates],
      answer: null,
    };
  };

  const useAll = totalDrills === "ALL" || totalDrills >= table.length;
  const nowMs = Date.now();
  const weights = table.map(([romaji]) => computeWeight(kanaStats[romaji] ?? null, nowMs));

  let kanaIndices;
  if (useAll) {
    kanaIndices = Array.from({ length: table.length }, (_, i) => i);
  } else {
    kanaIndices = weightedSample(weights, totalDrills);
  }

  const drills = kanaIndices.map(kanaDrill);
  let currentDrillIndex = 0;

  return {
    currentDrill() {
      return drills[currentDrillIndex];
    },
    isDone() {
      return !drills.some((x) => x.answer === null);
    },
    nextDrill() {
      if (currentDrillIndex < drills.length - 1) {
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
      const points = drills.length - failed.length - skipped.length;

      return {
        failed,
        skipped,
        points,
        drills,
      };
    },
  };
};
