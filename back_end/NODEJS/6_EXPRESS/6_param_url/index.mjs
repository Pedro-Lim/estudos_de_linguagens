import Express  from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Express();
const port = 3000 // variavel de ambiente

const basePath = path.join(__dirname, 'templates')

app.get("/users/:id",(request, response) =>{
    const id = request.params.id 

    //leitura da tabela users, resgatando um susuario do banco

    console.log(`estamos buscando pelo usuario ${id}`)

    response.sendFile(`${basePath}/users.html`)
})

app.get("/",(request, response) =>{
    response.sendFile(`${basePath}/index.html`)
})



app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`)
})