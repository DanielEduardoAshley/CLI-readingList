const fs = require('fs')

module.exports=(args)=>{
//View command first checks to see if savedBooks.txt exists if not return no saved books, if so read from the savedBooks txt file and display contents
    fs.access(__dirname + '/savedBooks.txt', fs.F_OK, (err)=>{
        if(err){
            console.log('No saved books')
            return
        }else{
           
            fs.readFile( __dirname + '/savedBooks.txt',{ encoding : "utf8" }, function(err, contents){
                if(err){
                    console.log('There was an error looking up saved books')
                    return
                }
                let list = JSON.parse(contents)
                console.log(list )
            })
        }

    })
       



}