import fs from'fs'
const log = console.log;
fs.rename('arquivo.txt', 'novo_arquivo.txt', (err) =>{
    if(err){
        log(err);
        return
    }
    log('Arquivo renomeado com sucesso')
})