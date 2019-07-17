////////// create file and transfer data to one file to anotherfile//
var fs = require("fs");

var readStream = fs.createReadStream("D://data.txt");
var writeStream = fs.createWriteStream("D://dataoutput.txt");
readStream.pipe(writeStream);

////////////////// to create file and add data//////////////
var fs = require("fs");
var stream;
stream = fs.createWriteStream("D://data.txt");
stream.write("Tutorial on Node.js")
stream.write("Introduction")
stream.write("Events")
stream.write("Generators")
stream.write("Data Connectivity")
stream.write("Using Jasmine") 

/////////////////////////to delete file//////////////////////////////
var fs = require('fs');

fs.unlink('D:\\data.txt', function(error) {
   if (error) {
       throw error;
   }
   console.log('Deleted dog.jpg!!');
});