const express= require('express');

const app= express();
const port=process.env.PORT || 3000;


app.get('/gres',(req,res)=>{

   // res.set('name','hvr');
   const rjson=res.json({
        name : "venkat",
        email:"hvenkatraman9@gmail.com"
    })
     console.log(req.hostname);
    //res.send('get request to( /gres )done sucessfully');
});

app.get('/redirect_res',(req,res)=>{

    res.redirect('/gres');
})

app.listen(port,()=>{

    console.log(`Server started sucessfully at port ${port}`); });




