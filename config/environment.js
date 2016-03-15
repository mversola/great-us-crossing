const config = {
  "staging": {
    "server": {
      "host": "http://localhost:8080",
      "basePath": "/"
    },
    "client": {
      "host": "https://everydayhero.github.io",
      "basePath": "/great-us-crossing"
    }
  },
  "production": {
    "server": {
      "host": "http://localhost:8080",
      "basePath": "/"
    },
    "client": {
      "host": "http://greatuscrossing.com",
      "basePath": "/"
    }
  },
  "development": {
    "server": {
      "host": "http://localhost:8080",
      "basePath": "/"
    },
    "client": {
      "host": "http://lvh.me:8080",
      "basePath": "/"
    }
  }
}

module.exports = config[process.env.NODE_ENV || 'development']
