const Sequelize = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('railway', 'root', 'J4m9RulfBSkHW6AZtJvf', {
  host: 'containers-us-west-180.railway.app',
  port: 7391,
  dialect: 'mysql', // Cambia esto según tu base de datos (puede ser 'mysql', 'postgres', etc.)
});

module.exports = sequelize;