import React from 'react';
import '../../public/Pokemon.css';
import store from '../store';
import { retrievePokemon } from '../redux/pokemon';
import { connect } from 'react-redux';

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
		return (
			<div className="pokemon">
				<h4>I am Pokemon</h4>
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
