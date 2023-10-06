const baseConfig = require('../../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/twitter-lib/ngx-domain/src/'],
  coverageDirectory: '<rootDir>/coverage/twitter-lib/ngx-domain',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/twitter-lib/ngx-domain/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
