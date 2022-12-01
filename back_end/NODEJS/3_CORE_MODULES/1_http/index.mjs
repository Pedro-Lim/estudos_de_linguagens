import http from 'http'

const port = 3000;

const server = http.createServer((request,response) => {
    response.write("HELLOW HTTP");
    response.end();

});
server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
