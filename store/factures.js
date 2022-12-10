const axios = require('axios').default;

export const state = () => ({
	factures: [],
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
	currentFacture: {},
})

export const getters = {
}

export const mutations = {
	setRows(state, payload) {
		console.log('SETROWS');
		console.log(state.factures.length);
		state.rows = state.factures.length;
	},
	setupTotalRows(state, payload) {
		console.log('setupTotalRows');
		console.log(state.factures.length);
		state.totalRows = state.factures.length;
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
	setFactures(state, payload) {
		console.log('setFactures', payload);
		state.factures = payload;
	},
	setCurentFacture(state, payload) {
		console.log('setCurentFacture!!', payload);
		state.currentFacture = payload;
	},
	setCurentFactureImages(state, payload) {
		console.log('setCurentFactureImages', payload);
		state.currentFacture.images = payload;
	},
	setCurentFactureLogos(state, payload) {
		console.log('setCurentFactureLogos', payload);
		state.currentFacture.logos = payload;
	},
	setCurentFactureLogosPush(state, payload) {
		console.log('setCurentFactureLogos', payload);
		state.currentFacture.logos.push(payload);
	},
	setCurentFactureImagesPush(state, payload) {
		console.log('setCurentFactureimages', payload);
		state.currentFacture.images.push(payload);
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
	async fetchFactures(state, payload) {
		state.commit('setIsBusy', true)
		console.log('payload', payload);
		// setTimeout(async function () {
		const factures = await axios.get(process.env.API_URL + 'factures?archive=' + payload.archive)

		console.log('STORE ACTION');
		state.commit('setFactures', factures.data)
		state.commit('setRows')
		state.commit('setupTotalRows')
		state.commit('setIsBusy', false)
		// }, 1000)

	},
	async fetchFacture(state, payload) {
		console.log('mypayload', payload);
		const facture = await axios.get(process.env.API_URL + 'facture/' + payload.id)

		console.log('STORE ACTION setCurentFacture');
		state.commit('setCurentFacture', facture.data)
	},
	async updateCurrentFacture(state, payload) {
		console.log('mypayload', payload);
		console.log(state);
		// console.log(state.state.currentFacture);
		const facture = { ...state.state.currentFacture };
		facture[payload.key] = payload.val
		console.log('facture', facture);
		const edit = await axios.patch(process.env.API_URL + 'facture/' + facture.id, { datas: facture }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const factures = [...state.state.factures];
				console.log('factures', factures);
				var index = _.findIndex(factures, { id: rep.data.id });
				console.log('index=', index);
				factures.splice(index, 1, rep.data);
				state.commit('setFactures', factures)
				state.commit('setCurentFacture', rep.data)

				state.dispatch('global/alert', {
					text: 'Facture enregistré',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOneFacture(state, payload) {
		console.log('mypayload removeOneFacture', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		// const jeu = { ...state.state.currentJeu };
		// jeu[payload.key] = payload.val
		// console.log('jeu', jeu);
		const deleted = await axios.delete(process.env.API_URL + 'facture/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const factures = [...state.state.factures];
				console.log('factures', factures);
				var index = _.findIndex(factures, { id: rep.data });
				console.log('index=', index);
				factures.splice(index, 1);
				state.commit('setFactures', factures)
				state.commit('setCurentFacture', {})

				state.dispatch('global/alert', {
					text: 'Facture supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updateFactureStatus(state, payload) {
		console.log('mypayload', payload);
		let valueToupdate = ''
		let responseValue = ''

		switch (payload.action) {
			case 'archiver':
				valueToupdate = 'archive';
				responseValue = 'Facture archivé';
				break;
			case 'desarchiver':
				valueToupdate = 'inactif';
				responseValue = 'Facture désarchivé';
				break;
			case 'activer':
				valueToupdate = 'actif';
				responseValue = 'Facture activé';
				break;
			case 'desactiver':
				valueToupdate = 'inactif';
				responseValue = 'Facture désactivé';
				break;

			default:
				break;
		}

		const edit = await axios.patch(process.env.API_URL + 'facture/' + payload.id, { datas: { status: valueToupdate } }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const factures = [...state.state.factures];
				console.log('factures', factures);
				var index = _.findIndex(factures, { id: rep.data.id });
				console.log('index=', index);
				factures.splice(index, 1, rep.data);
				state.commit('setFactures', factures)
				// state.commit('setCurentFacture', rep.data)

				state.dispatch('global/alert', {
					text: responseValue,
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},

	async createFacture(state, payload) {

		// return { toto: 'toto' }
		console.log('mypayload createFacture', payload);
		return await axios.post(process.env.API_URL + 'facture', payload.value).then(function (rep) {
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
					text: 'Facture ajouté',
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
						text: 'Le nom du facture doit être unique',
						variant: 'danger',
						countDown: 5
					}, { root: true })
					return { err: 'Le nom du facture doit être unique' };

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
		const deleted = await axios.delete(process.env.API_URL + 'image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentFacture.images);
				const imageList = [...state.state.currentFacture.images];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentFactureImages', imageList)

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
		const deleted = await axios.delete(process.env.API_URL + 'image/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {
				console.log('state', state.state.currentFacture.logos);
				const imageList = [...state.state.currentFacture.logos];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentFactureLogos', imageList)

				state.dispatch('global/alert', {
					text: 'Image supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updateLogo(state, payload) {
		console.log('updateLogo===>>>><', payload);


		state.commit('setCurentFactureLogosPush', payload)


	},
	async updateImage(state, payload) {
		console.log('updateImage===>>>><', payload);


		state.commit('setCurentFactureImagesPush', payload)


	},
}