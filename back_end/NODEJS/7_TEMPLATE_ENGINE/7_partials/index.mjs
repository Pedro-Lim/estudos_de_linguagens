import express from "express";
import {create} from "express-handlebars";

const app = express()

const hbs = create({
    partialsDir:[
        "views/partials",
    ],
});

app.engine('handlebars', hbs.engine)
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

app.get('/blog', (request,response) =>{
    const posts = [
        {
            title: 'meu primeiro post',
            content: 'post content',
            authorName: 'Pedro Lima',
            subject: 'Action',
            comments: 4,
        },
        {
            title: 'como ter uma vida sustentavel',
            content: 'Saude',
            authorName: 'Pedro Lima',
            subject: 'Saude',
            comments: 4,
        },
        {
            title: 'como ter uma vida mais proxima de Deus',
            content: 'Religiao',
            authorName: 'Pedro Lima',
            subject: 'Religiao',
            comments: 4,
        }
    ];
    response.render('blog',{posts: posts})
})

app.get('/', (request,response) =>{

    const auth = true;

    response.render('home',{auth})
})

app.listen(3000, ()=>{
    console.log('servidor rodando')
})