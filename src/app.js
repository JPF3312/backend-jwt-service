// Ruta raíz de bienvenida
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: '🚀 API RESTful de Autenticación funcionando correctamente en Render',
    version: '1.0.0',
    documentation: 'https://github.com/JPF3312/backend-jwt-service'
  });
});
