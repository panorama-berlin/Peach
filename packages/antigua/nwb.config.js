const path = require('path')

const addBpsc = config => {
  const bpsc = [
    '@quickbaseoss/babel-plugin-styled-components-css-namespace',
    [
      'babel-plugin-styled-components',
      {
        displayName: true
      }
    ]
  ]

  const plugins = [bpsc]
  plugins.push(config.plugins)
  return { ...config, plugins }
}

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    cjs: false,
    umd: false
  },
  babel: {
    config (config) {
      return addBpsc(config)
    }
  },
  webpack: {
    compat: {
      'react-intl': ['de', 'en-gb']
    },
    aliases: {
      // Enable use of 'img/file.png' paths in JavaScript and
      // "~images/file.png" paths in stylesheets to require an image from
      // src/images from anywhere in the the app.
      // img: path.resolve("src/images"),
      // Enable use of require('src/path/to/module.js') for top-down imports
      // from anywhere in the app, to promote writing location-independent
      // code by avoiding ../ directory traversal.
      src: path.resolve('src')
      // components: path.resolve("src/components")
    },
    uglify: {
      uglifyOptions: {
        mangle: true,
        beautify: true
      }
    }
  }
}
