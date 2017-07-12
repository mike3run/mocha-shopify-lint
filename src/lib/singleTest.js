import { runAll } from 'theme-lint'
import chalk from 'chalk'

const singleTest = path => {
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
}

export default singleTest
