const axios = require('axios');

module.exports= async (query)=>{
//Axios get method to the google api passing  the query into the api string
  const results = await  axios({
          method : 'get',
          url : `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=1&maxResults=5&key=AIzaSyCE60enP5MaNF4qypREUpzbV6NECg-xmeU`,
          
    })

    const resultsArray = []
    const titles = {}


//Loop to format the api data as an array of objects with the book title, author, and publisher
    for(let i =0 ; i< results.data.items.length; i++){
        resultsArray.push({
            title : results.data.items[i].volumeInfo.title, authors: (results.data.items[i].volumeInfo.authors || []).join(', ') || '', publisher: (results.data.items[i].volumeInfo.publisher || '')
        })

        titles[i+1] = results.data.items[i].volumeInfo.title
    }

    return [  resultsArray,  titles]


}
