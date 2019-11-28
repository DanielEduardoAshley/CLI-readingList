const ora = require('ora'); //Importing spinner package ora for waiting for api 
const getBookData = require('../utils/books'); //Importing api data from books.js 
const fs = require('fs') //Node fs

module.exports= async (args)=>{
<<<<<<< master
    const spinner = ora().start()
    const query = args.search || args.s //Gets user query from command line 
    let booksReturned = []

=======
    ora().start()
    // spinner.stop()
    const query = args.search || args.s //Gets user query from command line 
    let booksReturned = []
    
>>>>>>> local
    try{
        //Try Catch to await book data pushing to booksReturned array when it returns and writing to users folder
        //Book data is an array with index 0 being all the book info(title/author/publisher) and index 1 being only the book titles
        const books =  await getBookData(query)
<<<<<<< readinglistbranch
        console.log('These are the results of your search :', books[0])
=======
<<<<<<< master
        console.log('These are the results of your search :', books)
>>>>>>> local
        spinner.stop()
        //Pushes book titles to booksReturned array
        booksReturned.push(books[1])
        const data = books
        //Writes book titles to users filesystem under lastCalledBooks.txt
        fs.writeFile(__dirname + '/lastCalledBooks.txt', JSON.stringify(data), {encoding: 'utf8'}, function(err) { if(err)console.log(err) });
    
    }
    catch(err){
        spinner.stop()
        console.log('Was not able to retrieve the booklist based on your inquiry, please try your search again!')

<<<<<<< readinglistbranch

    }
    //Returns booksReturned array which contains
    return await booksReturned
=======
=======
        console.log('These are the results of your search :', books[0])
        ora().stop()
        //Pushes book titles to booksReturned array
        booksReturned.push(books[1])
        const data = books
        //Writes book titles to users filesystem under lastCalledBooks.txt
        fs.writeFile(__dirname + '/lastCalledBooks.txt', JSON.stringify(data), {encoding: 'utf8'}, function(err) { if(err)console.log(err) });
    
    }
    catch(err){
        // ora().stop()
        console.log('Was not able to retrieve the booklist based on your inquiry, please try your search again!')


    }
    
    //Returns booksReturned array which contains book info and book titles
    return await booksReturned
>>>>>>> local
>>>>>>> local
}