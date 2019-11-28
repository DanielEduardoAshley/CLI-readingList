const cliSelect = require('cli-select');
const fs = require('fs');
const chalk = require('chalk');



module.exports=async()=>{
//Read from lastCalledBooks text file
      fs.readFile(__dirname + '/lastCalledBooks.txt', {encoding: 'utf8'}, function(err, contents) {
          if(err){
              console.log('No books in search history to add')
              return
          }

       let data = JSON.parse(contents)
        data[1]['6'] = 'Don\'t favorite'
        
//Pass data from the lastCalledBooks text file to cliSelect which formats a selection for the user
       cliSelect({
            values: data[1],
            valueRenderer: (value, selected) => {
                if (selected) {
                    return chalk.underline(value);
                }
                
                return value;
            },
        }).then((val)=>{
            doit( data[0][val.id-1])
        })
       
    })
    
console.log(process.cwd(), 'location')
   
}
//Function doit takes the data and if the savedBooks text file does not exist creates one and adds the data to it
//Else if savedBooks does exist reads it and adds to it the selected book data
function doit(data){
    if(!data){
        return
    }

    fs.access(__dirname + '/savedBooks.txt', fs.F_OK, (err)=>{
            if(err){
                let d = [data]
                fs.writeFile(__dirname + '/savedBooks.txt', JSON.stringify(d), {encoding: 'utf8'}, function(err) { if(err)console.log(err) });

            }else{
                fs.readFile(__dirname + '/savedBooks.txt', {encoding: 'utf8'}, function(err, contents) {
                    let list = JSON.parse(contents)
                    list.push(data)
                     fs.writeFile(__dirname + '/savedBooks.txt', JSON.stringify(list), {encoding: 'utf8'}, function(err) { if(err)console.log(err) });

                     console.log(list)

                    
                })
            }
        
             
        
        })
  

   
}

