const ora = require('ora');
const getBookData = require('../utils/books');
const cliSelect = require('cli-select');
const chalk = require('chalk');

module.exports= async (args)=>{
    const spinner = ora().start()
    const query = args.search || args.s

    try{
        const books =  await getBookData(query)
        console.log('These are the results of your search :', books[0])
        spinner.stop()
        return books[1]
        

    }
    catch(err){
        spinner.stop()
        console.error(err)


    }
    
    
}