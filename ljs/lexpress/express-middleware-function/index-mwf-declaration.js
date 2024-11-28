const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//mwf= Middleware Declaration
//(It is having next object additionally with req & res objects
//as shown below)(req,res,next) to pass execution through next
const middleware1= (req,res,next)=>
    {   console.log('Middleware1');
        next();
    }
const middleware2= (req,res,next)=>
    {   console.log('Middleware2');
        next();
    }
const middleware3= (req,res,next)=>
    {
        console.log('Middleware3');
        next();};
const middleware4= (req,res,next)=>
    {
        res.send('middlware4');
        console.log('Middleware4');
        next();
    };

// Middleware

app.use(middleware1);
app.use(middleware2)
app.use(middleware3);
app.use(middleware4);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
