import globAll from 'glob-all'
import { singleTest } from './lib'

const mochaShopifyLint = patterns => {
  describe('theme-lint', function () {
    globAll.sync(patterns)
      .forEach(singleTest)
  })
}

export default mochaShopifyLint
