const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const conURL = 'mongodb://127.0.0.1:27017'
const database = 'testing'
MongoClient.connect(conURL , (error , client)=>{
    if(error){
        return console.log('Unable to connect ' , error)
    }
    const db = client.db(database)
    
    db.collection('users').find({ name :'Mohit' })
    .toArray((err , data)=>{
        console.log(err);
        console.log(data);

    })


})