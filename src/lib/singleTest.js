import { runAll } from '@shopify/theme-lint'
import chalk from 'chalk'

/**
 * Test a file against theme-lint from shopify
 * @param {String} path a single file location
 */
const singleTest = path => {
  it(`${path} should pass theme-lint rules`, () => {
    return runAll(path)
      .then(reporter => {
        reporter.finalize()
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
