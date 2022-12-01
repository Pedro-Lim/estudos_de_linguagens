import http from 'http'
import url from 'url'
import fs from 'fs'

const port = 3000;

const server = http.createServer((request,response) => {
    const url_info = url.parse(request.url, true)
    const name = url_info.query.name

    if(!name){
        fs.readFile('index.html', (err,data) =>{
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data)
            return response.end
        })
    }else{
        const nameNewFile = `${name}\r\n,`;
        fs.appendFile('arquivo.txt',nameNewFile, (err, data) =>{
            response.writeHead(302,{
                location: '/',
            })
            return response.end
        } )
    }
    
});
server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
