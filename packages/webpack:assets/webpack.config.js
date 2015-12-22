var weight = 999;

function dependencies() {
  return {
    devDependencies: {
      'url-loader': '^0.5.7',
      'file-loader': '^0.8.5'
    }
  };
}

function config(settings) {
  return {
    loaders: [
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=' + (settings.assets && settings.assets.limit ? settings.assets.limit : '8182') },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  };
}
