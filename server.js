const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`\n  HAVOC server running →  http://localhost:${PORT}\n`);
});
