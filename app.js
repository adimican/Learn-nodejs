const fs = require('fs');

const path = require('path');


const express = require('express');

const app = express();

app.use(express.urlencoded());

app.get('/currenttime', function(req, res) {
    res.send('<h1>' + new Date().toISOString() +'</h1>');
});

app.get('/', function(req, res) {
    res.send('<form action="/store-user"  method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
});

app.post('/store-user', function(req, res) {
   const userName = req.body.username;
   const filePath = path.join(__dirname, 'data', 'user.json');
   const fileData = fs.readFileSync(filePath);
   const existingUsers = JSON.parse(fileData);
   existingUsers.push(userName);
   fs.writeFileSync(filePath, JSON.stringify(existingUsers));
//    console.log(userName);
   res.send('Name was stored !')
})

app.listen(3000);




