const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });



app.set("view engine", "ejs");

app.get('/home', (req, res) => {
    res.render('home');
});

server.listen(3001, () => {
    console.log("Server running....");
});

var users = {};
var ran = 0;
var us = '';

io.on("connection", (socket) => {
    // console.log("User connected... user id = " + socket.id);

    socket.on("message", (data) => {
        // console.log("User id = {" + data[0] + "} send : " + data[1]);
        
    });

    socket.on("signin", (data) => {
        
        if (us.indexOf(String(socket.id) == -1)){
        us += String(socket.id+' ');
        var usvl = Object.keys(users).length;

        ran += 1;
        socket.emit('id', 'user'+ran);
        users[String('user' + ran)] = data;
        }
        else{
            
        }
    });
    
    socket.on('disconnect', () =>{
        
    });
    
});