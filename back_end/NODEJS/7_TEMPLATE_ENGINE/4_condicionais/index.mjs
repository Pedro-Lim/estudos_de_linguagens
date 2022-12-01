import express from "express";
import {engine} from "express-handlebars";

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/dashboard',(request,response) =>{
    response.render('dashboard')
})

app.get('/', (request,response) =>{

    const auth = false;

    response.render('home',{auth})
})

app.listen(3000, ()=>{
    console.log('servidor rodando')
})