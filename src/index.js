import { runAll } from '@shopify/theme-lint'
import chalk from 'chalk'
import Reporter from './lib/reporter'

/**
 * Runs theme-lint as mocha tests
 *
 * @param {String} path - Glob
 */
const mochaShopifyLint = path => {
  describe('theme-lint', () => {
    it('Should pass', () => {
      runAll(path, new Reporter())
        .then(reporter => reporter.output())
        .catch(err => {
          throw new Error(chalk.red(err))
        })
    })
  })
}

export default mochaShopifyLint
