const config = require('../../config/environment')

const context = typeof window === 'undefined' ? 'server' : 'client'

module.exports = config[context]
