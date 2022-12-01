import http from 'http'

const port = 3000;

const server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Meu primeiro html em node JS testando</h1>')

});
server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
