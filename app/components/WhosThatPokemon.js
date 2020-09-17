import React, { Component } from 'react';
import '../../public/WhosThatPokemon.css';

export default class WhosThatPokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			score: 0,
			pokemonName: '',
			inputField: '',
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
		if (e.key === 'Enter') {
			this.handleSubmit(e);
		}
	}
	handleNext(e) {
		let nextIndex = this.state.currentIndex + 1;
		console.log('current index ', this.state.currentIndex);
		console.log('nextIndex', nextIndex);
		if (this.props.pokemon.length <= nextIndex) {
			this.setState({ isFinished: true });
		} else {
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
		console.log(this.state.pokemonName);
		if (guess === this.state.pokemonName.toUpperCase()) {
			let nextScore = this.state.score + 1;
			this.setState({
				hasValue: true,
				isCorrect: true,
				score: nextScore,
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
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const pokemon = this.props.pokemon[this.state.currentIndex];
		console.log('this is the current score, ', this.state.score);
		return (
			<div>
				{this.state.isFinished ? (
					<React.Fragment>
						<h4>is Finished</h4>
						<h4>{this.state.score}</h4>
					</React.Fragment>
				) : (
					<form onSubmit={this.handleSubmit}>
						<div className="whosThatPokemon">
							<div className="whosThatPokemon__score">
								<h4>Current Score: {this.state.score}</h4>
							</div>
							<div className="whosThatPokemon__name">
								<h4 hidden={this.state.hasValue ? false : true}>
									{pokemon.name.slice(0, 1).toUpperCase() +
										pokemon.name.slice(1)}
								</h4>
							</div>
							<div className="whosThatPokemon__img">
								<img
									className={
										this.state.hasValue
											? 'whosThatPokemon__img__active'
											: 'whosThatPokemon__img__disabled'
									}
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
								/>
							</div>
						</div>
						<div className="whosThatPokemon__input">
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
