const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('Working');
    next();    
});


app.use((req,res,next) => {
    console.log("Working");
    res.send('<h1>Hello from the server</h1>');    
});

app.listen(3000);