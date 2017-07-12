import globAll from 'glob-all'

const mochaShopifyLint = patterns => {
  describe('theme-lint', function () {
    globAll.sync(patterns)
      .forEach(function (file) {
        it(`${file} should pass theme-lint rules`, function () {
        })
      })
  })
}

export default mochaShopifyLint
