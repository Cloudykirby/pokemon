import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pokemon from './Pokemon';

const Routes = () => {
	return (
		<Router>
			<div>
				{/* <nav>Welcome!</nav> */}
				<main>
					<Pokemon />
				</main>
			</div>
		</Router>
	);
};

export default Routes;
