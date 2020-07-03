const PORT = process.env.PORT || 3333;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});