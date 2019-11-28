const { version } = require('../package.json')
//Sends back cli version
module.exports = (args) => {
  console.log(`v${version}`)
}