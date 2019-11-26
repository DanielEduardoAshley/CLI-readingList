const fs = require('fs')

module.exports=(args)=>{
    fs.access('./savedBooks.txt', fs.F_OK, (err)=>{
        if(err){
            console.log(err,'No saved books')
            return
        }else{
           
            fs.readFile('./savedBooks.txt',{ encoding : "utf8" }, function(err, contents){
                let list = JSON.parse(contents)
                console.log(list, )
            })
        }

    })
       



}