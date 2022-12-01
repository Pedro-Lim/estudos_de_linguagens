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

app.get('/post', (reques, response) =>{
    const post = {
        title: 'titulo',
        content: 'post content',
        authorName: 'Pedro Lima',
        subject: 'Action',
        comments: 4,
    }
    response.render('blog_post', {post: post})
})
app.get('/', (request,response) =>{

    const auth = true;

    response.render('home',{auth})
})

app.listen(3000, ()=>{
    console.log('servidor rodando')
})