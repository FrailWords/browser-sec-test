var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
const port = 3000
app.use(cookieParser());
app.get('/', function(req, resp) {
   console.log(req.query);
   console.log(req.params);
   console.log(req.cookies);
   resp.send('elephant')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
