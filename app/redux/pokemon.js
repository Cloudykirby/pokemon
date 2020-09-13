import axios from 'axios';

//Action Types
const GOT_POKEMON = 'GOT_POKEMON';

// Action Creators
const gotPokemon = (pokemon) => ({
	type: GOT_POKEMON,
	pokemon,
});

export const setPokemon = () => {};

export const fetchPokemon = () => {};

//Thunk Creator
export const retrievePokemon = () => {
	return async (dispatch) => {
		try {
			const { data: pokemon } = await axios.get(
				'https://pokeapi.co/api/v2/pokemon/1'
			);
			console.log(pokemon);
			dispatch(gotPokemon(pokemon));
		} catch (error) {
			console.error(error);
		}
	};
};

const initalState = [];

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function pokemonReducer(state = initalState, action) {
	switch (action.type) {
		case GOT_POKEMON:
			return action.pokemon;
		default:
			return state;
	}
}
