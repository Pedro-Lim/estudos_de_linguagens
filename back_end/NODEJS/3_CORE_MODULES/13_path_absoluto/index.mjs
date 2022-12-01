import path from 'path'

// path absoluto

console.log(path.resolve('arquivo.txt'))

//formar path
 const midfolder = 'relatorios';
 const fileName = 'arquivo.txt';
 const finalPath = path.join('/', 'arquivos', midfolder, fileName);
 console.log(finalPath)