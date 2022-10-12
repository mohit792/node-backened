const mysql = require('mysql2')


const pool = mysql.createPool({
     host:'localhost',
     password:'admin@123',
     user:'root',
     database:'DBTest'
});


// pool.execute('select * from users' , (error , res)=>{

//     if(error) console.log('error' , error);
//     console.log('response ',  res);


// })



module.exports = pool.promise()

















