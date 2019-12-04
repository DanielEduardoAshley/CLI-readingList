const fs = require('fs')
const util =require('util')

module.exports= ( filename='/savedBooks.txt')=>{
    
//View command first checks to see if savedBooks.txt exists if not return no saved books, if so read from the savedBooks txt file and display contents
    const readFile = util.promisify(fs.readFile);

    return new Promise((resolve, reject)=>{  
        
        fs.access(__dirname + filename, fs.F_OK, (err)=>{
                if(err){
                   console.log('No saved books')
                    reject()
                    
                }else{
                    
                   
                   readFile( __dirname + filename,{ encoding : "utf8" })
                   .then(contents=>{
                        list = JSON.parse(contents)
                        console.log(list )
                        resolve('hello world!')
                    })
                    .catch(err=>{
                        console.log('There was an error looking up saved books')
                        
        
                    })                   
                }    
            })
        
       
        })

      
    
}


// const checkAndReadFile=(filename)=>{
//     const readFile = util.promisify(fs.readFile);

//     return new Promise((resolve, reject)=>{   
//         fs.access(__dirname + filename, fs.F_OK, (err)=>{
//                 if(err){
//                     console.log('No saved books')
//                     reject()
//                     return
//                 }else{
                    
                   
//                    readFile( __dirname + filename,{ encoding : "utf8" })
//                    .then(contents=>{
//                         list = JSON.parse(contents)
//                         console.log(list )
//                         resolve(list)
//                     })
//                     .catch(err=>{
//                         console.log('There was an error looking up saved books')
//                         return
        
//                     })
                   
                    
                        
                    
//                 }
        
//             })
//         })



// }

