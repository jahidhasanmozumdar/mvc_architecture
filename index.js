const express = require('express');
const app = express();
const userRouter = require('./router/userRoutes')
const PORT = 5000;

app.use(express.urlencoded({extended:true}))
app.use(userRouter)


app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});