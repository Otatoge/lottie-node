const fs = require('node:fs');

require('jsdom-global')();

const lottieScript = fs.readFileSync(require.resolve('lottie-web/build/player/lottie.min'), 'utf8');

new Function(lottieScript)();

/**
 * Lottie
 * @type {import('lottie-web').LottiePlayer}
 */
module.exports = lottie
