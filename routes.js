const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("App is live");
});


router.post("/transaction_results",(req,res)=>{
    console.log(req.body);
});



module.exports = router;