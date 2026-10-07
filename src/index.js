const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const verifyToken = require('./middlewares/auth.middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas públicas
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API corriendo en Ubuntu Linux 🚀' });
});

// Ruta privada (solo accesible con JWT válido)
app.get('/api/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Bienvenido al área privada',
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});