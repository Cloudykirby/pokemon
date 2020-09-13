import React, { Component } from 'react'
import '../../public/WhosThatPokemon.css'

export default class WhosThatPokemon extends Component {
  constructor(){
    super()
    this.state = {
      inputField: ''
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange = (e) => {
    console.log(e.target.value)
    this.setState = ({
      inputField: e.target.value
    })
    console.log(this.state)
  }
  render(){
    console.log("checking props",this.props.pokemon)
    const pokemon = this.props.pokemon
    return (
      <div className = "whosThatPokemon">
        <h4>{pokemon.name.slice(0,1).toUpperCase() + pokemon.name.slice(1)}</h4>
        <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
        <input
        name = 'inputField'
        type = 'text'
        value = {this.state.inputField}
        onChange = {this.onChange}
        placeholder = {'Who\'s that pokemon?'}
        />
        <button type = 'submit'>Submit</button>
      </div>
    )
  }
}
