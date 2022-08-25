const express = require('express');
const path = require('path')
const app = express();
const hbs = require('hbs')
app.use(express.static(path.join(__dirname , 'js'  )));


// console.log(path.join(__dirname  , '../'));
app.set('view engine' , 'hbs');
app.set('views' , path.join(__dirname , './templates/views'));
hbs.registerPartials(path.join(__dirname , './templates/partials'))
app.get('/',(req , res )=>{
    res.render('index' , {
        title:'Heading'
    })
})
// app.get('/lists' , (req , res)=>{
//     if(req.query.search){
//         res.send(req.query.search )
//     } 
//     else{
//         res.send('invalid search')
//     }
// })

app.listen(3000,()=>{
    console.log('i am up ');
})

