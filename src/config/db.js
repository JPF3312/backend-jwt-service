const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'postgres_db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'secretpass',
  database: process.env.DB_NAME || 'jwtdb',
  port: process.env.DB_PORT || 5432,
});

// Crear tabla de usuarios
const createTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(queryText);
    console.log('✅ Tabla "users" verificada/creada en PostgreSQL');
  } catch (error) {
    console.error('❌ Error creando tabla users:', error.message);
  }
};

createTable();

module.exports = pool;
