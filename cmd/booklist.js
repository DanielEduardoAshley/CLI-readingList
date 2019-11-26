const ora = require('ora');
const getBookData = require('../utils/books');
const fs = require('fs')

module.exports= async (args)=>{
    const spinner = ora().start()
    const query = args.search || args.s
    let booksReturned = []

    try{
        const books =  await getBookData(query)
        console.log('These are the results of your search :', books[0])
        spinner.stop()
        booksReturned.push(books[1])
        const data = books
        fs.writeFile(__dirname + '/lastCalledBooks.txt', JSON.stringify(data), {encoding: 'utf8'}, function(err) { if(err)console.log(err) });
       
        

    }
    catch(err){
        spinner.stop()
        console.error(err)


    }
    
    return await booksReturned
}