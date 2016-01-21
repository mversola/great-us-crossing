const config = {
  "staging": {
    "server": {
      "host": "http://localhost:8080",
      "basePath": ""
    },
    "client": {
      "host": "http://everydayhero.github.io",
      "basePath": "/boiler-room"
    }
  },
  "production": {
    "server": {
      "host": "http://localhost:8080",
      "basePath": ""
    },
    "client": {
      "host": "http://everydayhero.github.io",
      "basePath": "/boiler-room"
    }
  },
  "development": {
    "server": {
      "host": "http://localhost:8080",
      "basePath": ""
    },
    "client": {
      "host": "http://localhost:8080",
      "basePath": ""
    }
  }
}

module.exports = config[process.env.NODE_ENV || 'development']
