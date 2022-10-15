var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

//Read File
// http.createServer(function (req, res) {
//   fs.readFile('info.txt', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8000);

//Create File
  // fs.appendFile('newfile1.txt',"Hello Narasingam!!!",function(err){
  //   if(err){
  //     console.log(err,"error")
  //   }
  //   console.log("New File Added")
  // })

//Open File
//  fs.open('/home/vasanth/newfile1.txt','w',function(err){
//     if(err){
//       console.log(err,"error")
//     }
//     console.log("File Opened")
//   })

//Write File
// fs.writeFile('newfile2.txt','Hello Bro!!!',function(err){
//   if(err){
//     console.log('error',err)
//   }
//   console.log("File Written Successfully")
// })


//Upload File

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="/filetoupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  // console.log(req.url,'req')
  if(req.url=='/filetoupload'){
    console.log('filetoupload filetoupload filetoupload')
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    // console.log(files,"files")
    // console.log(files.filetoupload,"files.filetoupload")
     var oldpath = files.filetoupload.filepath;
      var newpath = '/home/vasanth/'+files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
      });
      }
//  if (req.url=='filetoupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       res.write('File uploaded');
//     });
//   } 

}).listen(8001);

