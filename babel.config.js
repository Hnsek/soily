/** @type {import('react-native-worklets/plugin').PluginOptions} */
/** @type {import('nativewind/preset')} */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:@react-native/babel-preset',
      "nativewind/babel"
    ],
    plugins: [
      '@babel/plugin-transform-export-namespace-from',
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      'react-native-worklets/plugin',
    ],
  };
};

