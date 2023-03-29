const baseConfig = require('../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/ngx-decskill/src/'],
  coverageDirectory: '<rootDir>/coverage/ngx-decskill',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/ngx-decskill/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
