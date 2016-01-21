const config = require('../../config/environment')

const runContext = typeof window === 'undefined' ? 'server' : 'client'

export default config

export const context = config[runContext]
