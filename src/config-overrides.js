module.exports = function override(config, env) {
    // Modify the Webpack configuration here
    if (env === 'development') {
      config.devServer = {
        ...config.devServer,
        before(app) {
          // Serve JSON files with the correct content type
          app.get('*.json', function (req, res, next) {
            res.header('Content-Type', 'application/json');
            next();
          });
        },
      };
    }
    return config;
  };
  