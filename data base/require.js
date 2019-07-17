// var request = require('request')
// request("http://www.google.com", function(error ,response, body)
// {
//     console.log(body)
// });
const mongobd =  require('mongodb')
const MongoClient = mongobd.MongoClient
// access to the function necesityy to connect to the database

const connectionURl = 'mongodb://127.0.0.1:27017'
var url = 'mongodb://localhost/EmployeeDB';
const database = 'stucred'

//connect to the database
MongoClient.connect(connectionURl, { useNewUrlParser:true }, (error,client) =>{

   //() => () is a call back function
if(error){
 return console.log('unable to connect to the database')
}

console.log('connected correctly')
const db = client.db(database)
// here database is the name of the db to manipulate
// db.collection('students').insertOne({
// name: 'nikki',
// age: '23'
// })
// db.collection('students').insertMany([
    
//        { name: "mounika",
//         age:25
// },
// {
//     name:"mahi",
//     age:25
// }
// ])

// db.collection('students').updateOne({
   
//     "name": "nikki"
//     }, {
//         $set: {
//             "name": "Mohan"
//         }
//     });
db.collection('students').deleteOne(

    {
        "name": "Mohan"
    }

);
}); 
