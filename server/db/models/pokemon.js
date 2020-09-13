const Sequelize = require('sequelize')
const db = require('../database')

module.export = db.define('pokemon', {
  pokemonId: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  }
})
