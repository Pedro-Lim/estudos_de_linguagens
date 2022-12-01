import express from "express";
import {engine} from "express-handlebars";

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (request,response) =>{
    const user ={
        name: "Pedro",
        lastName: "Lima",
    }
    const teste = "teste"
    response.render('home', {user: user, teste})
})

app.listen(3000, ()=>{
    console.log('servidor rodando')
})