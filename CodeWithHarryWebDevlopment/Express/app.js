const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;
//Express specific Stuff
app.use('/static',express.static('static'))//For serving static files
app.use(express.urlencoded());
//PUG specific Stuff
app.set('view engine', 'pug');//Set the template engine as pug

app.set('views', path.join(__dirname,'views') );//Set the views directory
//Our pug demo endpoint

//Endpoints

app.get('/',(req,res)=>{
    const con = 'This is the best content on internet so far, so use it wisely'
    const params = {'title': 'Pubg is the best game', 'content':con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    names = req.body.names;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputToWrite = `the name of the client is ${names}, ${age} years old,${gender}, ${address} and more about him/her${more}`;
    fs.writeFileSync('output.txt',outputToWrite);



    
    const params = {'message': 'Your form has been submitted successfully'};

    res.status(200).render('index.pug',params);

})

//Start the server
app.listen(port, ()=>{
    console.log(`the applicaiton started successfully on port ${port}`);
})