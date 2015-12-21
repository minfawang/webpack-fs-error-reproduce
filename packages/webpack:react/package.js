Package.describe({
    name: 'webpack:react',
    version: '0.1.0',
    summary: 'Seamlessly integrate Webpack with Meteor build system',
    git: 'https://github.com/thereactivestack/meteor-webpack.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'webpack:core-config@0.1.0',
    'react-meteor-data@0.2.4',
    'react-runtime@0.14.0',
  ]);

  api.imply([
    'react-meteor-data@0.2.4',
    'react-runtime@0.14.0'
  ]);

  api.add_files(['webpack.config.js']);
});
