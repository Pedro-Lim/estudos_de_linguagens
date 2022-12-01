import fs from 'fs'

console.log('inicio')

fs.writeFile("arquivo.txt", 'encviado assincrono', function(err){
    setTimeout(()=>{
        console.log("esperando")
    },1000);
});

console.log("fim")