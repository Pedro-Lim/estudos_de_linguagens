import express, { response }  from "express";
import path from "path";
import { fileURLToPath } from "url";

// criando basePath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, 'templates')

const app = express();
const port = 3000 // variavel de ambiente

// ler body

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())


app.get("/users/create", (request, response)=>{
    response.sendFile(`${basePath}/user_form.html`)
})
app.post("/users/save", (request,response) =>{
    const name = request.body.name
    const age = request.body.age

    response.sendFile(`${basePath}/user_form.html`)

})

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