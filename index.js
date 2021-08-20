//all the requires for this project
const express = require('express');
const path = require('path');
const treeify = require('treeify');
const some = require('./some')

//the port number
const theport = 3015;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'numbers.html'))
});

//app post to grab inputed numbers and put into binary search tree
app.post("/", some.someThing)

//to get port and see website
app.listen(theport, () => {
    console.log(`Listened at http://localhost:${theport}`)
});