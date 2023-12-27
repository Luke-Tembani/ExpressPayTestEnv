const router = require("express").Router();


router.post("/transaction_results",(req,res)=>{
    console.log(req.body);
});



module.exports = router;