import { runAll } from '@shopify/theme-lint'
import chalk from 'chalk'
import Reporter from './reporter'

/**
 * Test a file against theme-lint from shopify
 * @param {String} path a single file location
 */
const singleTest = path => {
  it(`${path} should pass theme-lint rules`, () => {
    return runAll(path, new Reporter())
      .then(reporter => {
        reporter.output()
      })
      .catch(e => {
        throw new Error(
          chalk.white('Coded did not pass lint rules') +
          chalk.red(e)
        )
      })
  })
}

export default singleTest
