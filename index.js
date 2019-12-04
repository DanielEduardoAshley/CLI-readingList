//Takes args from the command line and returns an object
const minimist = require('minimist');



module.exports = () => {
  console.log('Welcome to your reading list')
//Using the args from the command line, saves the args object to the const args
  const args = minimist(process.argv.slice(2))


//If terminal command is empty, help, or h cmd equals help, if the command is version or v cmd is equal to version  
  let cmd = args._[0] || 'help'

  if(args.version || args.v){
      cmd = 'version'
  }

  if(args.help || args.h){
      cmd = 'help'
  }

//Switch statement if cmd is booklist, favorite, view, version, or help import and invoke function from respective files in cmd folder
 switch (cmd){
    case 'booklist':
     require('./cmd/booklist')(args)
     break
    case 'favorite':
     require('./cmd/favorites')(args)
     break
    case 'view':
    require('./cmd/view')()
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


