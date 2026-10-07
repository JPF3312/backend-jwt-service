const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Obtener el token del header Authorization (Bearer <token>)
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado: No se proporcionó un token' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'clave_secreta_para_desarrollo_123');
    req.user = verified; // Adjunta los datos del usuario a la petición
    next(); // Pasa al siguiente middleware o controlador
  } catch (error) {
    res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = verifyToken;