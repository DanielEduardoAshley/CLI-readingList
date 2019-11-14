const minimist = require('minimist');

const favBooks = {
    list : []

}

module.exports = () => {
  console.log('Welcome to your reading list')
  const args = minimist(process.argv.slice(2))
  console.log(args)
  let cmd = args._[0] || 'help'

  if(args.version || args.v){
      cmd = 'version'
  }

  if(args.help || args.h){
      cmd = 'help'
  }
  switch (cmd){
    case 'booklist':
     require('./cmd/booklist')(args)
     break
    case 'favorite':
     require('./cmd/favorites')(args)
     break
    case 'version':
     require('./cmd/version')(args)
     break
    case 'help':
     require('./cmd/help')(args)
     break
    default:
     console.error(`${cmd} command does not exist!`)
 
 }


}


