const baseConfig = require('../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/ngx-twitter/src/'],
  coverageDirectory: '<rootDir>/coverage/ngx-twitter',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/ngx-twitter/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
