const express = require('express')
const proxy = require('express-http-proxy');
const cors = require('cors')
const app = express()
const port = process.env.port || 8080;
const proxyPath = process.env.proxyPath || '/';
const proxyTarget = process.env.proxyTarget || 'https://api.hubapi.com';


app.use(cors());
app.use(proxyPath, proxy(proxyTarget));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})