const PORT = process.env.PORT;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello world' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});