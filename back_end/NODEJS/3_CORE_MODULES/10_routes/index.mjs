import http from 'http'
import url from 'url'
import fs from 'fs'

const port = 3000;

const server = http.createServer((request,response) => {
    const query = url.parse(request.url, true)
    const fileName = query.pathname.substring(1)

    if(fileName.includes('html')){
        if(fs.existsSync(fileName)){
            fs.readFile(fileName, (err,data) =>{
                response.writeHead(200, {'Content-Type': 'text/html'})
                response.write(data)
                return response.end
            })
        }else{
            fs.readFile('404.html', (err,data) =>{
                response.writeHead(404, {'Content-Type': 'text/html'})
                response.write(data)
                return response.end
            })      
        }
        
    }
    
});
server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
