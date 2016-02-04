const config = {
  "staging": {
    "server": {
      "host": "http://lvh.me:8080",
      "basePath": ""
    },
    "client": {
      "host": "http://everydayhero.github.io",
      "basePath": "/boiler-room"
    }
  },
  "production": {
    "server": {
      "host": "http://lvh.me:8080",
      "basePath": ""
    },
    "client": {
      "host": "http://everydayhero.github.io",
      "basePath": "/boiler-room"
    }
  },
  "development": {
    "server": {
      "host": "http://lvh.me:8080",
      "basePath": ""
    },
    "client": {
      "host": "http://lvh.me:8080",
      "basePath": ""
    }
  }
}

module.exports = config[process.env.NODE_ENV || 'development']
