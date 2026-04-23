import { SURVEY_QUESTIONS } from '../data/survey.js';

export function detectSkinType(answers) {
  const counts = { Dry: 0, Normal: 0, Oily: 0, Combination: 0 };
  const map = [[0, 2, 3, 1], [0, 1, 3, 2], [0, 1, 3, 2], [0, 1, 3, 2], [0, 1, 2, 3]];
  const types = ["Dry", "Normal", "Oily", "Combination"];
  answers.forEach((ans, qi) => {
    const idx = SURVEY_QUESTIONS[qi].opts.indexOf(ans);
    if (idx >= 0) counts[types[map[qi][idx]]]++;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}