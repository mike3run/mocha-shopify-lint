import { runAll } from '@shopify/theme-lint'
import chalk from 'chalk'
import Reporter from './lib/reporter'

/**
 * Runs theme-lint as mocha tests
 *
 * @param {String} path - Glob
 */
const mochaShopifyLint = path => {
  runAll(path, new Reporter())
    .then(reporter => reporter.output())
    .catch(err => {
      throw new Error(chalk.red(err))
    })
}

export default mochaShopifyLint
