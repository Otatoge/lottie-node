const fs = require('node:fs');

require('jsdom-global')();

const lottieScript = fs.readFileSync(require.resolve('lottie-web/build/player/lottie.min'), 'utf8');

/**
 * @type {import('lottie-web').LottiePlayer}
 */
let lottie

new Function(lottieScript)();

module.exports = lottie
