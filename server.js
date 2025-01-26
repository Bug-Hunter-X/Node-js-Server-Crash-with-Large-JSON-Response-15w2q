const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This line causes the bug
  res.send(largeObject); // largeObject is a very large JSON object
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});