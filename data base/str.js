const mongobd =  require('mongodb')
const MongoClient = mongobd.MongoClient
// access to the function necesityy to connect to the database

const connectionURl = 'mongodb://127.0.0.1:27017'
var url = 'mongodb://localhost/stucredDB';
const database = 'stucred'

//connect to the database
MongoClient.connect(connectionURl, { useNewUrlParser:true }, (error,client) =>{


MongoClient.connect(url, function(err, db) {
    if(err) throw err;
  db.collection('students').findinsertOne({

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 
})