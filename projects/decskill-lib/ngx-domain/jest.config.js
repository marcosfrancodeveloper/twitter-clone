const baseConfig = require('../../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/decskill-lib/ngx-domain/src/'],
  coverageDirectory: '<rootDir>/coverage/decskill-lib/ngx-domain',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/decskill-lib/ngx-domain/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
};
