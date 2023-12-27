const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("App is live");
    res.status(200).send("Ok");

});


router.post("/transaction_results",(req,res)=>{
    console.log(req.body);
    res.status(200).send("Ok");
});



module.exports = router;