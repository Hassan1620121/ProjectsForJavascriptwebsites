// console.log('Hello World');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selectors and More Designing</title>
      <style>
          .container {
              border:2px solid red;
              background-color: rgb(188, 221, 96);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a {
              text-decoration:none;
              color:black;
              background-color: white;
          }
          a:hover {
              color:white;
              background-color:black;
          }
          a:visited {
              color:yellow;
          }
          a:active{
              color:darkblue;
              background-color: darkslateblue;
          }
          .btn {
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              font-weight: bold;
              background-color:crimson;
              padding:6px;
              border: none;
              cursor:pointer;
              font-size: 13px;
              border-radius:4px;
          }
          .btn:hover {
              color:forestgreen;
              background-color: rgb(201, 219, 40);
              border:2px solid burlywood;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa dolore atque sit! Quod obcaecati corrupti illum fugit ipsa veniam harum maxime amet. Ipsam, natus excepturi. Omnis incidunt a necessitatibus corrupti ea fugiat alias?</p>
          <a href="https://www.googl.com" class="btn">Read more</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});