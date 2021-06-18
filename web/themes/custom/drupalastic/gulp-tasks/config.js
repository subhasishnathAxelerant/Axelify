const nodeSassGlobbing = require('node-sass-globbing');

module.exports = {
  scss: {
    source: ['source/_patterns/**/[^_]*.scss'],
    all: ['source/_patterns/**/*.scss'],
    destination: 'dist/css',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules', './scss'],
      errLogToConsole: true,
      importer: nodeSassGlobbing,
    },
  },
  ts: {
    source: ['source/_patterns/**/*.ts'],
    destination: 'dist/js',
  },
  svg: {
    source: ['svg/**/*.svg'],
    destination: 'dist/svg',
  },
  images: {
    source: ['images/**/*'],
    destination: 'dist/images',
  },
  stylelint: {
    options: {
      reporters: [
        {
          formatter: 'verbose',
          console: true,
        },
      ],
      failOnError: process.env.CI === 'true',
    },
  }
};
