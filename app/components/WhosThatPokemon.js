import React, { Component } from "react";
import "../../public/WhosThatPokemon.css";

export default class WhosThatPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      pokemonName: "",
      inputField: "",
      hasValue: false,
      isCorrect: false,
      isFinished: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    this.setState({
      pokemonName: this.props.pokemon[this.state.currentIndex].name,
      isFinished: false,
    });
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  }
  handleNext(e) {
    let nextIndex = this.state.currentIndex + 1;
    console.log('current index ', this.state.currentIndex)
    console.log('nextIndex', nextIndex)
    if (this.props.pokemon.length <= nextIndex) {
      this.setState({ isFinished: true });
    }else{
      this.setState({
        currentIndex: nextIndex,
        hasValue: false,
        isCorrect: false,
        pokemonName: this.props.pokemon[nextIndex].name,
      });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //Evaluate
    let guess = this.state.inputField.toUpperCase();
    console.log("inputField", this.state.inputField);
    console.log("pokemonName");
    console.log(this.state.pokemonName);
    if (guess === this.state.pokemonName.toUpperCase()) {
      this.setState({
        hasValue: true,
        isCorrect: true,
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
    const pokemon = this.props.pokemon[this.state.currentIndex];
    console.log("currentPokemon", this.props.pokemon);
    return (
      <div>
        {this.state.isFinished ? (
          <h4>is Finished</h4>
        ) : (
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
              <button
                hidden={this.state.hasValue ? false : true}
                type="button"
                onClick={this.handleNext}
              >
                Next
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}
