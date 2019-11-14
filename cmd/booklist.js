const ora = require('ora');
const getBookData = require('../utils/books');

module.exports= async (args)=>{
    const spinner = ora().start()
    const query = args.search || args.s

    try{
        const books =  await getBookData(query)
        console.log('These are the results of your search :', books)
        spinner.stop()

    }
    catch(err){
        spinner.stop()
        console.error(err)
    }

}