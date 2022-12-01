import express from "express";
import {engine} from "express-handlebars";

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/dashboard',(request,response) =>{
    const itens = ['item a', 'item b', 'item c']
    response.render('dashboard', {itens})
})

app.get('/', (request,response) =>{

    const auth = true;

    response.render('home',{auth})
})

app.listen(3000, ()=>{
    console.log('servidor rodando')
})