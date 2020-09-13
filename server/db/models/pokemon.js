const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('pokemon', {
	pokemonId: {
		type: Sequelize.INTEGER,
	},
	name: {
		type: Sequelize.STRING,
	},
});
