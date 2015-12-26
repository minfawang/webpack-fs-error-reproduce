Package.describe({
    name: 'webpack:sass',
    version: '0.1.0',
    summary: 'Seamlessly integrate Webpack with Meteor build system',
    git: 'https://github.com/thereactivestack/meteor-webpack.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('webpack:core-config@0.1.0');
  api.add_files(['webpack.config.js']);
});
