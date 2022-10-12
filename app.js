const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json())

app.use('/' , require('./src/Routes/UserRoutes'))











app.listen(3000,()=>{
    console.log('server is up');
})



