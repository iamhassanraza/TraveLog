const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')

const TourRoutes = require('./Router/Tours')
const  OperatorRoutes = require('./Router/Operator')
const DestinationsRouter = require('./Router/Destinations')
const imageRoutes = require('./Router/images')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:'travelog'
  });




  app.use(bodyParser.json()); 

  app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');   //allows access to any client
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');  //define methods like post get put delete or all by *
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');  // or you can use * for all
    next();
    });



  app.use('/tours', TourRoutes)
  app.use('/operators', OperatorRoutes)
  app.use('/destination', DestinationsRouter)
  app.use('/images', imageRoutes)

  app.use('operatoricon/:Operatorid', (req,res)=>{
    var operator_id = req.params.operator_id


    var sqlQuery = `SELECT operator.name, rating_review.numeric_rating from operator INNER JOIN rating_review ON rating_review.category = "operator" AND rating_review.reference = ${operator_id}` 


  })

  app.use('/review/:category/:reference', (req, res) => {

    var category = req.params.category
    var reference = req.params.reference
    var sqlQuery = `SELECT rating_review.numeric_rating,rating_review.descriptive_review,userprofile.name from rating_review INNER JOIN userprofile ON rating_review.user_id = userprofile.userprofile_id INNER JOIN category ON category.name = '${category}' WHERE rating_review.reference_id = ${reference}  `

    con.query(sqlQuery, (err,result) => {
        if(!err) {
            res.status(200).send(result);
            console.log('successsfull query')
        }
        else
            console.log(err)
    })

}
)

  app.get('/destinations', (req,res) => {
    con.query('Select * from destination', (err,result)=> {
        if(!err){
        console.log(result);
        console.log("Destinations agaye"); }
        else 
        console.log(err);      
    })
  })

app.listen(3001, ()=>console.log('Server connected successfully'));