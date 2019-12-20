'use strict;'

const express=require('express');

app=express();
PORT=3000;

app.get('/',(request,response)=>{
    response.status(200).send('Home Page')
})
app.get('/data',(request,response)=>{
    const names={name:'obada',age:23}
    response.status(200).send(names)
})
app.use('*', (request,response) => {
 

    response.status(404).send('NOT FOUND!');
  });

  app.listen(PORT, () => {
    console.log('Server up on', PORT);
  });