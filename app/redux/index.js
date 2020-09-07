import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';

const appReducer = combineReducers({
	// projects: projectsReducer,
	// robots: robotsReducer,
	pokemon: pokemonReducer,
});

export default appReducer;
