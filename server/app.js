const express = require('express');



const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.write('welcome');
    res.end();
})

app.listen(port, ()=>{
    console.log('listning on port' + port);
})