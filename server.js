var express = require('express');
var app = express();

app.use(express.static("./dist/my-first-app"));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: "./dist/my-first-app/"}
  );
  });
  app.listen(process.env.PORT || 8080);
