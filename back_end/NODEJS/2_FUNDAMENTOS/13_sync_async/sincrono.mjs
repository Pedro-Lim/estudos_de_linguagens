import fs from 'fs'

console.log("inicio")

fs.writeFileSync('arquivo.txt', 'criado')

console.log("fim")