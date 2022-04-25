const axios = require('axios').default;

export const state = () => ({
	jeux: [],
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
	currentJeu: {},
})

export const getters = {
}

export const mutations = {
	setRows(state, payload) {
		console.log('SETROWS');
		console.log(state.jeux.length);
		state.rows = state.jeux.length;
	},
	setupTotalRows(state, payload) {
		console.log('setupTotalRows');
		console.log(state.jeux.length);
		state.totalRows = state.jeux.length;
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
	setJeux(state, payload) {
		console.log('setJeux', payload);
		state.jeux = payload;
	},
	setCurentJeu(state, payload) {
		console.log('setCurentJeu', payload);
		state.currentJeu = payload;
	},
	setCurentJeuImages(state, payload) {
		console.log('setCurentJeuImages', payload);
		state.currentJeu.images = payload;
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
	async fetchJeux(state, payload) {
		state.commit('setIsBusy', true)
		console.log('payload', payload);
		// setTimeout(async function () {
		const jeux = await axios.get('http://localhost:1337/api/v1/jeux?archive=' + payload.archive)

		console.log('STORE ACTION');
		state.commit('setJeux', jeux.data)
		state.commit('setRows')
		state.commit('setupTotalRows')
		state.commit('setIsBusy', false)
		// }, 1000)

	},
	async fetchJeu(state, payload) {
		console.log('mypayload', payload);
		const jeu = await axios.get('http://localhost:1337/api/v1/jeu/' + payload.id)

		console.log('STORE ACTION setCurentJeu');
		state.commit('setCurentJeu', jeu.data)
	},
	async updateCurrentJeu(state, payload) {
		console.log('mypayload', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		const jeu = { ...state.state.currentJeu };
		jeu[payload.key] = payload.val
		console.log('jeu', jeu);
		const edit = await axios.patch('http://localhost:1337/api/v1/jeu/' + jeu.id, { datas: jeu }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const jeux = [...state.state.jeux];
				console.log('jeux', jeux);
				var index = _.findIndex(jeux, { id: rep.data.id });
				console.log('index=', index);
				jeux.splice(index, 1, rep.data);
				state.commit('setJeux', jeux)
				state.commit('setCurentJeu', rep.data)

				state.dispatch('global/alert', {
					text: 'Jeu enregistré',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOneJeu(state, payload) {
		console.log('mypayload removeOneJeu', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		// const jeu = { ...state.state.currentJeu };
		// jeu[payload.key] = payload.val
		// console.log('jeu', jeu);
		const deleted = await axios.delete('http://localhost:1337/api/v1/jeu/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const jeux = [...state.state.jeux];
				console.log('jeux', jeux);
				var index = _.findIndex(jeux, { id: rep.data });
				console.log('index=', index);
				jeux.splice(index, 1);
				state.commit('setJeux', jeux)
				state.commit('setCurentJeu', {})

				state.dispatch('global/alert', {
					text: 'Jeu supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updateJeuStatus(state, payload) {
		console.log('mypayload', payload);
		let valueToupdate = ''
		let responseValue = ''

		switch (payload.action) {
			case 'archiver':
				valueToupdate = 'archive';
				responseValue = 'Jeu archivé';
				break;
			case 'desarchiver':
				valueToupdate = 'inactif';
				responseValue = 'Jeu désarchivé';
				break;
			case 'activer':
				valueToupdate = 'actif';
				responseValue = 'Jeu activé';
				break;
			case 'desactiver':
				valueToupdate = 'inactif';
				responseValue = 'Jeu désactivé';
				break;

			default:
				break;
		}

		const edit = await axios.patch('http://localhost:1337/api/v1/jeu/' + payload.id, { datas: { status: valueToupdate } }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const jeux = [...state.state.jeux];
				console.log('jeux', jeux);
				var index = _.findIndex(jeux, { id: rep.data.id });
				console.log('index=', index);
				jeux.splice(index, 1, rep.data);
				state.commit('setJeux', jeux)
				// state.commit('setCurentJeu', rep.data)

				state.dispatch('global/alert', {
					text: responseValue,
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},

	async createJeu(state, payload) {

		// return { toto: 'toto' }
		console.log('mypayload createJeu', payload);
		return await axios.post('http://localhost:1337/api/v1/jeu', payload.value).then(function (rep) {
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
					text: 'Jeu ajouté',
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
						text: 'Le nom du jeu doit être unique',
						variant: 'danger',
						countDown: 5
					}, { root: true })
					return { err: 'Le nom du jeu doit être unique' };

				}
			}
		)
	},

	async removeOneImage(state, payload) {
		console.log('mypayload removeOneImage', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete('http://localhost:1337/api/v1/image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentJeu.images);
				const imageList = [...state.state.currentJeu.images];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentJeuImages', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOneLogo(state, payload) {
		console.log('mypayload removeOneLogo', payload);
		console.log(state);
		// console.log(state.state.currentUser);
		// const user = { ...state.state.currentUser };
		// user[payload.key] = payload.val
		// console.log('user', user);
		const deleted = await axios.delete('http://localhost:1337/api/v1/image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentJeu.images);
				const imageList = [...state.state.currentJeu.images];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentJeuImages', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
}