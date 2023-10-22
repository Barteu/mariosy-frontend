const PROXY_CONFIG = {
    '/api/*': {
      'target': process.env.NG_BACKEND_API_URL,
      'secure': false,
      'logLevel': 'debug',
      'changeOrigin': true,
      'pathRewrite': { "^/api": "" }
    }
  }

  module.exports = PROXY_CONFIG;