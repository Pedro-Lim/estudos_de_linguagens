import express from "express"
import { fileURLToPath } from "url";
import path from "path";

const rounter = express.Router()

// criando basePath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, 'templates')

rounter.get("/create", (request, response)=>{
    response.sendFile(`${basePath}/user_form.html`)
})
rounter.post("/save", (request,response) =>{
    console.log(request.body)
    const name = request.body.name
    const age = request.body.age

    response.sendFile(`${basePath}/user_form.html`)

})

rounter.get("/:id",(request, response) =>{
    const id = request.params.id 

    //leitura da tabela users, resgatando um susuario do banco

    console.log(`estamos buscando pelo usuario ${id}`)

    response.sendFile(`${basePath}/users.html`)
})

export default rounter