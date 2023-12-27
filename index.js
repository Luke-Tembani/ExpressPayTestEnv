const express = require("express");
const router = require("./routes");
const app = express();
const PORT = 9045;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", router);


app.listen(PORT,()=>{
    console.log(`App live on ${PORT}`);
});


module.exports = app;