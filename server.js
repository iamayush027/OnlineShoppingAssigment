var express = require('express');
var app=express();
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors = require('cors');
const port = 3000;

var router=express.Router();
///const jsonFile = require('./P_list.json')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'navigus_Products'
});

con.connect(function(err) {
  if (err) {throw err;}
  else{
      console.log("Connected!");
  }

     });


    app.get('/product',function(req,res){
    //  var name=req.params.Pname;

      con.query("SELECT * FROM pList", function (err, result) {
      if (err){
        console.log(err)
      }else{
                  res.setHeader('Content-Type', 'text/json');
                 res.send(result);

      }

      });
    });

    app.post('/addtofav',function(req,res){

      console.log(req.body);
      console.logreq.params.prId;
        con.query("insert into pfav values('"+name+"')", function (err, result) {
        if (err)
        {
          console.log(err)
        }
        });
      res.end()


    });
    app.get('/search/:pid',function(req,res){

  
      var result = JSON.parse(JSON.stringify(req.params))
      var data =result["pid"];
        con.query("SELECT * FROM pList WHERE pID LIKE '%"+data+"%';", function (err, result) {
        if (err){
          console.log(err)
        }else{
                    res.setHeader('Content-Type', 'text/json');
                    
                   res.send(result);
  
        }
  
        });
      });


    app.get('/favourite',function(req,res){

      con.query("SELECT * FROM pfav", function (err, result) {
      if (err){
        console.log(err)
      }else{
             res.setHeader('Content-Type', 'text/json');
              res.send(result);

      }

      });
    });


app.listen(port, () =>{
  console.log("Server started at port")
});
