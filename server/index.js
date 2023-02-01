const express =require("express") ;
const cors = require("cors")
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");


require('./connection')
const io = new Server(server,{
    cors:"*",
    method:"*"
})

// const User = require('./Models/User');
// const userRoutes = require('./routes/userRoutes');
// const imageRoutes = require('./routes/imageRoutes')


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use('/users',userRoutes)
// app.use('/products', productRoutes);
// app.use('/images', imageRoutes)


server.listen(8000,()=>{
    console.log("server is running on port:- ",8000)
})