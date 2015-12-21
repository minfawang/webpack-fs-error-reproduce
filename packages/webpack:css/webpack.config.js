var weight = 200;

function dependencies(settings) {
  var deps = {
    'style-loader' : '^0.13.0',
    'css-loader': '^0.23.0'
  };

  if (settings.css && settings.css.module) {
    deps['extract-text-webpack-plugin'] = '^0.9.1';
  } else {
    deps['style-collector-loader'] = '^0.1.0';
  }

  return deps;
}

function config(settings) {
  var cssLoader = '';
  var loaders = [];
  var plugins = [];

  if (settings.css && settings.css.module) {
    if (settings.isDebug) {
      if (settings.platform === 'server') {
        cssLoader = 'css/locals?module&localIdentName=[name]__[local]__[hash:base64:5]';
      } else {
        cssLoader = 'style!css?module&localIdentName=[name]__[local]__[hash:base64:5]';
      }
    } else {
      if (settings.platform === 'server') {
        cssLoader = 'css/locals?module&localIdentName=[hash:base64:5]';
      } else {
        plugins.push(new ExtractTextPlugin('style.css'));
        cssLoader = ExtractTextPlugin.extract('style', 'css?module&localIdentName=[hash:base64:5]');
      }
    }
  } else {
    if (settings.platform === 'server') {
      cssLoader = 'style-collector!css';
    } else {
      cssLoader = 'style!css';
    }
  }

  if (cssLoader) {
    loaders.push({ test: /\.css$/, loader: cssLoader });
  }

  return {
    loaders: loaders,
    plugins: plugins,
    extensions: ['.css']
  };
}
