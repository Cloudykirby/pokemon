const axios = require('axios');
const { green, red } = require('chalk');
const { db, Pokemon } = require('./server/db');

const seed = async () => {
	try {
		await db.sync({ force: true });

		// https://pokeapi.co/api/v2/pokemon?offset=0&limit=151
		const { data } = await axios.get(
			'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
		);
		const pokemons = data.results;

		for (let i = 0; i < pokemons.length; i++) {
			let pokemonName =
				pokemons[i].name.slice(0, 1).toUpperCase() + pokemons[i].name.slice(1);
			let url = pokemons[i].url;
			let pokemonId = url.slice(34, -1);
			await Pokemon.create({
				name: pokemonName,
				pokemonId,
			});
		}

		// seed your database here!
	} catch (err) {
		console.log(red(err));
	}
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
	seed()
		.then(() => {
			console.log(green('Seeding success!'));
			db.close();
		})
		.catch((err) => {
			console.error(red('Oh noes! Something went wrong!'));
			console.error(err);
			db.close();
		});
}
