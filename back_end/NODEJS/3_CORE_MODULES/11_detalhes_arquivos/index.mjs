import fs from 'fs'


fs.stat('text.txt', (err, stats) =>{
    if(err){
        console.log(err);
        return
    }
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.size)
})