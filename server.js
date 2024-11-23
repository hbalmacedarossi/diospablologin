const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Manejo de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validación simple (puedes conectar a una base de datos aquí)
  if (username === 'admin' && password === '1234') {
    return res.send(`<h1>¡Bienvenido, ${username}!</h1>`);
  }

  res.send('<h1>Credenciales inválidas. Intenta nuevamente.</h1>');
});

// Servidor activo
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
