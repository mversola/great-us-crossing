const config = {
  'staging': {
    'server': {
      'basePath': '/'
    },
    'client': {
      'basePath': '/great-us-crossing'
    }
  },
  'production': {
    'server': {
      'basePath': '/'
    },
    'client': {
      'basePath': '/'
    }
  },
  'development': {
    'server': {
      'basePath': '/'
    },
    'client': {
      'basePath': '/'
    }
  }
}

module.exports = config[process.env.NODE_ENV || 'development']
