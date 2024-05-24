const { server, io } = require("./app");
const { PORT } = process.env;
const { dbConnect } = require("./database/db");

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
    socket.on('serviceData', (data) =>{
        console.log(data)
        socket.broadcast.emit('serviceData', data)
    })
    socket.on('editData', data =>{
        console.log(data);
        socket.broadcast.emit('editData', data)
    })
    socket.on('removeData', data =>{
        console.log(data);
        socket.broadcast.emit('removeData', data)
    })
    socket.on('serviceAllData', data =>{
        console.log(data);
        socket.broadcast.emit('serviceAllData', data)
    })
})

server.listen(PORT, () => {
    console.log("servidor corriendo en el puerto ", PORT)
    dbConnect();
});