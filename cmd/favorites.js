const cliSelect = require('cli-select');
const fs = require('fs');
const chalk = require('chalk');

module.exports=async()=>{
    
      fs.readFile(__dirname + '/lastCalledBooks.txt', {encoding: 'utf8'}, function(err, contents) {
       let data = JSON.parse(contents)
        data[1]['6'] = 'Don\'t favorite'
        
      
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