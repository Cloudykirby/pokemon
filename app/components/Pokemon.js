import React from 'react';
import '../../public/Pokemon.css';
import store from '../store';
import { retrievePokemon } from '../redux/pokemon';
import { connect } from 'react-redux';
import WhosThatPokemon from './WhosThatPokemon';

class Pokemon extends React.Component {
	constructor() {
		super();
		this.state = {
			loaded: false,
		};
	}
	async componentDidMount() {
		await this.props.retrievePokemon();
		this.setState({ loaded: true });
	}

	render() {
		console.log('props', this.props.pokemon);
		return (
			<div className="pokemon">
				{!this.state.loaded ? (
					<h4>Loading</h4>
				) : (
					<WhosThatPokemon pokemon={this.props.pokemon} score={this.score} />
				)}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		pokemon: state.pokemon,
	};
};

const mapDispatch = (dispatch) => {
	return {
		retrievePokemon: () => dispatch(retrievePokemon()),
	};
};

export default connect(mapState, mapDispatch)(Pokemon);
