const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Base de datos simulada en memoria
const users = [];

// Registro de usuario
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
    }

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = { id: Date.now(), email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'Usuario registrado exitosamente', userId: newUser.id });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

// Login de usuario
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Verificar la contraseña encriptada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret_key',
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

module.exports = { register, login };