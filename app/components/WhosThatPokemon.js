import React, { Component } from "react";
import "../../public/WhosThatPokemon.css";

export default class WhosThatPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: "",
      inputField: "",
      hasValue: false,
      isCorrect: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.setState({
      pokemonName: this.props.pokemon.name.toUpperCase(),
    });
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      console.log("target1", e.target.value);
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("target2", this.state.inputField);
    //Evaluate
    let guess = this.state.inputField.toUpperCase();
    if (guess === this.state.pokemonName) {
      this.setState({
        hasValue: true,
        isCorrect: true
      });
    } else {
      this.setState({
        hasValue: true,
      });
    }
    this.setState({
      inputField: "",
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    const pokemon = this.props.pokemon;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="whosThatPokemon">
          <h3>Who's That Pokemon?</h3>
          <h4 hidden={this.state.hasValue ? false : true}>
            {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}
          </h4>
          <img
            className={
              this.state.hasValue
                ? "whosThatPokemon__img__active"
                : "whosThatPokemon__img__disabled"
            }
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          />
          <h4 hidden={this.state.hasValue ? false : true}>
            {this.state.isCorrect ? "CORRECT" : "INCORRECT"}
          </h4>
          <input
            name="inputField"
            type="text"
            value={this.state.inputField}
            onChange={this.onChange}
            placeholder={"Who's that pokemon?"}
            hidden={this.state.hasValue ? true : false}
            onKeyPress={this.handleKeyPress}
          />
          <button hidden={this.state.hasValue ? true : false} type="submit">
            Submit
          </button>
          <button hidden={this.state.hasValue ? false : true} type="button">
            Next
          </button>
        </div>
      </form>
    );
  }
}
