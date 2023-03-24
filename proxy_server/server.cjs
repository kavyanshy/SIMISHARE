var express = require('express');
const bodyParser = require('body-parser');
const url = require('url');



var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.post('/', async function(req, res){
   console.log(req.params)
   let data =req.body
   async function dev(url){
      const res = await fetch(url)
      const nm = await res.text()
      return nm

   }
   const jk = await dev(data.url)
   console.log(jk)
   res.json({jk})

});

app.listen(3000);
