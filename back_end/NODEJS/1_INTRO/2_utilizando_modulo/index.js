const fs = require('fs') // file system

fs.readFile('arquivo1.txt','utf-8',(err, data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})