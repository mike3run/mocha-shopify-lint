import globAll from 'glob-all'
import { singleTest } from './lib'

/**
 * Runs theme-lint as mocha tests
 *
 * @param {Array} patterns - Globs are fine
 * @returns {Promise} the result of linting a file
 */
const mochaShopifyLint = patterns => {
  describe('theme-lint', function () {
    globAll.sync(patterns)
      .forEach(singleTest)
  })
}

export default mochaShopifyLint
