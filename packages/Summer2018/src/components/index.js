const req = require.context(".", true, /\.\/[^/]+\/[^/]+\/index\.js$/);

req.keys().forEach(key => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, "$1");
  module.exports[componentName] = req(key).default;
});

const themes = require.context(".", true, /^.+\/themes\/([^/]+).js/);

module.exports.themes = {};

themes.keys().forEach(key => {
  const componentName = key.replace(/^.+\/([^/]+)\.js/, "$1");
  module.exports.themes[componentName] = themes(key).default;
});
