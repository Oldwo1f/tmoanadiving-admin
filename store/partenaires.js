const axios = require('axios').default;

export const state = () => ({
	partenaires: [],
	currentPage: 1,
	perPage: 25,
	totalRows: 1,
	filterOn: [],
	sortBy: 1,
	pageOptions: [10, 25, 50, 100],
	filter: null,
	sortBy: 'age',
	sortDesc: false,
	rows: 1,
	isBusy: false,
	currentPartenaire: {},
})

export const getters = {
}

export const mutations = {
	setRows(state, payload) {
		console.log('SETROWS');
		console.log(state.partenaires.length);
		state.rows = state.partenaires.length;
	},
	setupTotalRows(state, payload) {
		console.log('setupTotalRows');
		console.log(state.partenaires.length);
		state.totalRows = state.partenaires.length;
	},
	setSortBy(state, payload) {
		console.log('SETSORTBY', payload);
		state.sortBy = payload;
		// state.commit('setRows')
	},
	setSortDesc(state, payload) {
		state.sortDesc = payload;
	},
	setCurrentPage(state, payload) {
		state.currentPage = payload;
	},
	setPerPage(state, payload) {
		console.log('setPerPage', payload);
		state.perPage = payload;
	},
	setFilter(state, payload) {
		console.log('setFilter', payload);
		state.filter = payload;
		// state.rows = state.jeux.length
		// console.log('state.rows=', state.rows);
	},
	setFilterOn(state, payload) {
		console.log('setFilterOn', payload);
		state.filterOn = payload;
	},
	setTotalRows(state, payload) {
		console.log('setTtotalRows', payload);
		state.totalRows = payload;
	},
	setPartenaires(state, payload) {
		console.log('setPartenaires', payload);
		state.partenaires = payload;
	},
	setCurentPartenaire(state, payload) {
		console.log('setCurentJeu', payload);
		state.currentPartenaire = payload;
	},
	setCurentPartenaireImages(state, payload) {
		console.log('setCurentPartenaireImages', payload);
		state.currentPartenaire.images = payload;
	},
	setCurentPartenaireLogos(state, payload) {
		console.log('setCurentPartenaireLogos', payload);
		state.currentPartenaire.logos = payload;
	},
	setIsBusy(state, payload) {
		console.log('setIsBusy', payload);
		state.isBusy = payload;
	},

}


export const actions = {
	// toogleMenuCollapsed(state) {

	// 	console.log('STORE ACTION');
	// 	state.commit('toogleMenuCollapsed')
	// },
	async fetchPartenaires(state, payload) {
		state.commit('setIsBusy', true)
		console.log('payload', payload);
		// setTimeout(async function () {
		const partenaires = await axios.get('http://localhost:1337/api/v1/partenaires?archive=' + payload.archive)

		console.log('STORE ACTION');
		state.commit('setPartenaires', partenaires.data)
		state.commit('setRows')
		state.commit('setupTotalRows')
		state.commit('setIsBusy', false)
		// }, 1000)

	},
	async fetchPartenaire(state, payload) {
		console.log('mypayload', payload);
		const partenaire = await axios.get('http://localhost:1337/api/v1/partenaire/' + payload.id)

		console.log('STORE ACTION setCurentPartenaire');
		state.commit('setCurentPartenaire', partenaire.data)
	},
	async updateCurrentPartenaire(state, payload) {
		console.log('mypayload', payload);
		console.log(state);
		// console.log(state.state.currentPartenaire);
		const partenaire = { ...state.state.currentPartenaire };
		partenaire[payload.key] = payload.val
		console.log('partenaire', partenaire);
		const edit = await axios.patch('http://localhost:1337/api/v1/partenaire/' + partenaire.id, { datas: partenaire }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const partenaires = [...state.state.partenaires];
				console.log('partenaires', partenaires);
				var index = _.findIndex(partenaires, { id: rep.data.id });
				console.log('index=', index);
				partenaires.splice(index, 1, rep.data);
				state.commit('setPartenaires', partenaires)
				state.commit('setCurentPartenaire', rep.data)

				state.dispatch('global/alert', {
					text: 'Partenaire enregistré',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOnePartenaire(state, payload) {
		console.log('mypayload removeOnePartenaire', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		// const jeu = { ...state.state.currentJeu };
		// jeu[payload.key] = payload.val
		// console.log('jeu', jeu);
		const deleted = await axios.delete('http://localhost:1337/api/v1/partenaire/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const partenaires = [...state.state.partenaires];
				console.log('partenaires', partenaires);
				var index = _.findIndex(partenaires, { id: rep.data });
				console.log('index=', index);
				partenaires.splice(index, 1);
				state.commit('setPartenaires', partenaires)
				state.commit('setCurentPartenaire', {})

				state.dispatch('global/alert', {
					text: 'Partenaire supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updatePartenaireStatus(state, payload) {
		console.log('mypayload', payload);
		let valueToupdate = ''
		let responseValue = ''

		switch (payload.action) {
			case 'archiver':
				valueToupdate = 'archive';
				responseValue = 'Partenaire archivé';
				break;
			case 'desarchiver':
				valueToupdate = 'inactif';
				responseValue = 'Partenaire désarchivé';
				break;
			case 'activer':
				valueToupdate = 'actif';
				responseValue = 'Partenaire activé';
				break;
			case 'desactiver':
				valueToupdate = 'inactif';
				responseValue = 'Partenaire désactivé';
				break;

			default:
				break;
		}

		const edit = await axios.patch('http://localhost:1337/api/v1/partenaire/' + payload.id, { datas: { status: valueToupdate } }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const partenaires = [...state.state.partenaires];
				console.log('partenaires', partenaires);
				var index = _.findIndex(partenaires, { id: rep.data.id });
				console.log('index=', index);
				partenaires.splice(index, 1, rep.data);
				state.commit('setPartenaires', partenaires)
				// state.commit('setCurentPartenaire', rep.data)

				state.dispatch('global/alert', {
					text: responseValue,
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},

	async createPartenaire(state, payload) {

		// return { toto: 'toto' }
		console.log('mypayload createPartenaire', payload);
		return await axios.post('http://localhost:1337/api/v1/partenaire', payload.value).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				// const jeux = [...state.state.jeux];
				// console.log('jeux', jeux);
				// var index = _.findIndex(jeux, { id: rep.data.id });
				// console.log('index=', index);
				// jeux.splice(index, 1, rep.data);
				// state.commit('setJeus', jeux)
				// state.commit('setCurentJeu', rep.data)

				state.dispatch('global/alert', {
					text: 'Partenaire ajouté',
					variant: 'success',
					countDown: 2

				}, { root: true })

				console.log(' rep.data.id', rep.data.id);

				return { id: rep.data.id };
			}

		}).catch(
			function (err, v) {
				console.log(err);
				console.log(err.response);
				if (err.response.status === 409) {

					console.log('heyho');
					state.dispatch('global/alert', {
						text: 'Le nom du partenaire doit être unique',
						variant: 'danger',
						countDown: 5
					}, { root: true })
					return { err: 'Le nom du partenaire doit être unique' };

				}
			}
		)
	},

	async deleteOneImage(state, payload) {
		console.log('mypayload removeOneImage', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete('http://localhost:1337/api/v1/image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentPartenaire.images);
				const imageList = [...state.state.currentPartenaire.images];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentPartenaireImages', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async deleteOneLogo(state, payload) {
		console.log('mypayload removeOneLogo', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete('http://localhost:1337/api/v1/image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentPartenaire.logos);
				const imageList = [...state.state.currentPartenaire.logos];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentPartenaireLogos', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
}