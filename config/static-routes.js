const featuredCharities = require('../source/content/featured-charities.json').map(
  (charity) => charity.link
)

module.exports = [
  '/',
  '/404'
].concat(featuredCharities)
