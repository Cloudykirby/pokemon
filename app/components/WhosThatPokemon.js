import React, { Component } from 'react';
import '../../public/WhosThatPokemon.css';

export default class WhosThatPokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemonName: '',
			inputField: '',
			hasValue: false,
		};
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({
			pokemonName: this.props.pokemon.name.toUpperCase(),
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		//Evaluate
		let guess = this.state.inputField.toUpperCase();
		if (guess === this.state.pokemonName) {
			this.setState({
				isCorrect: true,
				hasValue: true,
			});
		} else {
			this.setState({
				hasValue: true,
			});
		}
		this.setState({
			inputField: '',
		});
	};

	onChange = (e) => {
		this.setState({
			[event.target.name]: event.target.value,
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
								? 'whosThatPokemon__img__active'
								: 'whosThatPokemon__img__disabled'
						}
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
					/>
					<h4 hidden={this.state.hasValue ? false : true}>
						{this.state.isCorrect ? 'CORRECT' : 'INCORRECT'}
					</h4>
					<input
						name="inputField"
						type="text"
						value={this.state.inputField}
						onChange={this.onChange}
						placeholder={"Who's that pokemon?"}
						hidden={this.state.hasValue ? true : false}
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
