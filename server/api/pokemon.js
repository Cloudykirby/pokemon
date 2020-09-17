const router = require('express').Router()
const {Op} = require('sequelize')
const { Pokemon } = require('../db')


// /api/pokemon/random
router.get('/random', async (req, res, next) =>{
  try {
    let randomArray = []
    while(randomArray.length !== 3){
      let num = Math.floor(Math.random() * 151) + 1
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
