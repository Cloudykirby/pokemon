const router = require('express').Router()
const {Op} = require('sequelize')
const { Pokemon } = require('../db')
const lodash = require('lodash')


// /api/pokemon/random
router.get('/random', async (req, res, next) =>{
  try {

    let randomArray = []
    while(randomArray.length !== 3){
      let num = lodash.random.bind(0, 151, true)
      if (!randomArray.includes(num)){
        randomArray.push(num)
      }
    }
    const pokemon = await Pokemon.findAll({
      where: {
        pokemonId: {
          [Op.in]: randomArray
        }
      }
    })

    // const pokemon = await Pokemon.findAll()
    console.log('randomNumber', randomArray)
    console.log('pokemon', pokemon)
    res.json(pokemon)

  } catch (error) {
    next(error)
  }
})

module.exports = router
