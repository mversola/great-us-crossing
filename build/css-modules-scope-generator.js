const path = require('path')

module.exports = (local, filename) => {
  console.log(filename)
  filename = path.dirname(filename.replace(/.+?source/, '')).replace(/\/|\\/g, '_')
  return `${filename}__${ local }`
}
