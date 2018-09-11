'use strict'
let argv = process.argv[2] || ''
if (argv == 'test') {
  module.exports = {
    NODE_ENV: '"production"',
    PROFILE_ACTIVE: '"test"'
  }
} else {
  module.exports = {
    NODE_ENV: '"production"',
    PROFILE_ACTIVE: '"prod"'
  }
}
