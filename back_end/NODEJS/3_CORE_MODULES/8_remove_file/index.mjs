import fs from 'fs'

fs.unlink('arquivo.txt', (err) =>{
    if(err){
        console.log(err)
        return
    }
    else{
        console.log('tudo certo')
    }
});

