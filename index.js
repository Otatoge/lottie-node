const fs = require('node:fs');

require('jsdom-global')();

const lottieScript = fs.readFileSync(require.resolve('lottie-web/build/player/lottie.min'), 'utf8');

new Function(lottieScript)();

/**
 * Returns an object in lottie-web
 * @returns {{lottie: import('lottie-web').LottiePlayer, window: Window & typeof globalThis}}
 */
module.exports = () => {lottie, window}
