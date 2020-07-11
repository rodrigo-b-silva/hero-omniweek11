const PORT = process.env.PORT || 3333;
const ENV = process.env.NODE_ENV || 'development';
const app = require('./app');

app.listen(PORT, () => {
  console.log(`App running on port ${PORT} - Environment ${ENV}`);
});