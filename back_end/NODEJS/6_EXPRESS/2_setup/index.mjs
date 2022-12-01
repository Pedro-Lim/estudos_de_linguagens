import Express  from "express";
const app = Express();
const port = 3000 // variavel de ambiente

app.get("/",(request, response) =>{
    response.send("Ola mundo!!")
})

app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`)
})