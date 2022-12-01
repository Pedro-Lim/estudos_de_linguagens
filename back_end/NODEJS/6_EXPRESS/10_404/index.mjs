import express, { response }  from "express";
import path from "path";
import { fileURLToPath } from "url";
import users from './users/index.mjs'

// criando basePath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, 'templates');

const port = 3000 // variavel de ambiente

const app = express(); //criando app

// incluindo rotas de users
app.use('/users',users)

// arquivos estativos

app.use(express.static('public'))



// ler body
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())




app.get("/",(request, response) =>{
    response.sendFile(`${basePath}/index.html`)
})

app.use(function(request, response,next){
    response.status(404);
    response.sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`)
})