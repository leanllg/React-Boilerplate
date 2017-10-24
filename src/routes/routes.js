if (process.env.NODE_ENV === 'production') {
  module.exports = require('./routes.prod')
} else {
  module.exports = require('./routes.dev')
}
