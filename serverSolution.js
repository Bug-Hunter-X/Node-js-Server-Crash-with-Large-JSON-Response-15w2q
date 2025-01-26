const express = require('express');
const app = express();
const JSONStream = require('JSONStream');
const fs = require('fs');

app.get('/', (req, res) => {
  // Stream the large JSON object instead of loading it entirely into memory
  const stream = fs.createReadStream('./largeObject.json');
  stream.pipe(JSONStream.parse()).pipe(res);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});