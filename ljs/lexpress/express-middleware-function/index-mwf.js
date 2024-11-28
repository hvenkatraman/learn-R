const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;
const middleware1= (req,res,next)=>
{
     console.log('Middleware1');
     next();
}
    const middleware2= (obj)=>
     {
        return(req,res,next)=>
        {
            console.log('Middleware2');
            req.name=obj.name
            req.email=obj.email
            next();
    }
}

    app.get('/middleware_test',(req, res,next) =>
    {

        console.log(req.name);
        console.log(req.email);

        res.send('Finally reached main respose after four middlewares');
    });

    app.listen(port, () =>
    {
        console.log(`Server is running on port ${port}`);
    });
