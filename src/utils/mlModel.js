import * as tf from '@tensorflow/tfjs';

export function statusToNumber(status) {
  switch (status) {
    case "Extinct": return 0;
    case "Critically Endangered": return 0.2;
    case "Severely Endangered": return 0.4;
    case "Endangered": return 0.6;
    case "Vulnerable": return 0.8;
    case "Safe (Official in many countries)": return 1;
    default: return 0.5;
  }
}

export function prepareData(languages) {
  const xs = languages.map(l => [Math.log1p(l.speakers), statusToNumber(l.status)]);
  const ys = languages.map(l => statusToNumber(l.status));

  const xsTensor = tf.tensor2d(xs);
  const ysTensor = tf.tensor2d(ys, [ys.length, 1]);

  return { xsTensor, ysTensor };
}

export async function trainModel(languages) {
  const { xsTensor, ysTensor } = prepareData(languages);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, activation: 'relu', inputShape: [2] }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  await model.fit(xsTensor, ysTensor, { epochs: 50 });
  return model;
}

export function predictLanguage(model, language) {
  const input = tf.tensor2d([[Math.log1p(language.speakers), statusToNumber(language.status)]]);
  const prediction = model.predict(input);
  return prediction.dataSync()[0];
}
