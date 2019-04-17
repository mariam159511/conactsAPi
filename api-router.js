var router = require('express').Router();

router.get('/', function(req,res){
    res.json({
        staatus:'API is working',
        message: 'Welcome to my API!'
    });
});



module.exports= router;