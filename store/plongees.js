const axios = require('axios').default;

export const state = () => ({
	plongees: [],
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
	currentPlongee: {},
})

export const getters = {
}

export const mutations = {
	setRows(state, payload) {
		console.log('SETROWS');
		console.log(state.plongees.length);
		state.rows = state.plongees.length;
	},
	setupTotalRows(state, payload) {
		console.log('setupTotalRows');
		console.log(state.plongees.length);
		state.totalRows = state.plongees.length;
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
	setPlongees(state, payload) {
		console.log('setPlongees', payload);
		state.plongees = payload;
	},
	setCurentPlongee(state, payload) {
		console.log('setCurentPlongee!!', payload);
		state.currentPlongee = payload;
	},
	setCurentPlongeeImages(state, payload) {
		console.log('setCurentPlongeeImages', payload);
		state.currentPlongee.images = payload;
	},
	setCurentPlongeeLogos(state, payload) {
		console.log('setCurentPlongeeLogos', payload);
		state.currentPlongee.logos = payload;
	},
	setCurentPlongeeLogosPush(state, payload) {
		console.log('setCurentPlongeeLogos', payload);
		state.currentPlongee.logos.push(payload);
	},
	setCurentPlongeeImagesPush(state, payload) {
		console.log('setCurentPlongeeimages', payload);
		state.currentPlongee.images.push(payload);
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
	async fetchPlongees(state, payload) {
		state.commit('setIsBusy', true)
		console.log('payload', payload);
		// setTimeout(async function () {
		const plongees = await axios.get(process.env.API_URL + 'plongees?archive=' + payload.archive)

		console.log('STORE ACTION');
		state.commit('setPlongees', plongees.data)
		state.commit('setRows')
		state.commit('setupTotalRows')
		state.commit('setIsBusy', false)
		// }, 1000)

	},
	async fetchPlongee(state, payload) {
		console.log('mypayload', payload);
		const plongee = await axios.get(process.env.API_URL + 'plongee/' + payload.id)

		console.log('STORE ACTION setCurentPlongee');
		state.commit('setCurentPlongee', plongee.data)
	},
	async updateCurrentPlongee(state, payload) {
		console.log('mypayload', payload);
		console.log(state);
		// console.log(state.state.currentPlongee);
		const plongee = { ...state.state.currentPlongee };
		plongee[payload.key] = payload.val
		console.log('plongee', plongee);
		const edit = await axios.patch(process.env.API_URL + 'plongee/' + plongee.id, { datas: plongee }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const plongees = [...state.state.plongees];
				console.log('plongees', plongees);
				var index = _.findIndex(plongees, { id: rep.data.id });
				console.log('index=', index);
				plongees.splice(index, 1, rep.data);
				state.commit('setPlongees', plongees)
				state.commit('setCurentPlongee', rep.data)

				state.dispatch('global/alert', {
					text: 'Plongée enregistré',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOnePlongee(state, payload) {
		console.log('mypayload removeOnePlongee', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		// const jeu = { ...state.state.currentJeu };
		// jeu[payload.key] = payload.val
		// console.log('jeu', jeu);
		const deleted = await axios.delete(process.env.API_URL + 'plongee/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const plongees = [...state.state.plongees];
				console.log('plongees', plongees);
				var index = _.findIndex(plongees, { id: rep.data });
				console.log('index=', index);
				plongees.splice(index, 1);
				state.commit('setPlongees', plongees)
				state.commit('setCurentPlongee', {})

				state.dispatch('global/alert', {
					text: 'Plongée supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updatePlongeeStatus(state, payload) {
		console.log('mypayload', payload);
		let valueToupdate = ''
		let responseValue = ''

		switch (payload.action) {
			case 'archiver':
				valueToupdate = 'archive';
				responseValue = 'Plongée archivé';
				break;
			case 'desarchiver':
				valueToupdate = 'inactif';
				responseValue = 'Plongée désarchivé';
				break;
			case 'activer':
				valueToupdate = 'actif';
				responseValue = 'Plongée activé';
				break;
			case 'desactiver':
				valueToupdate = 'inactif';
				responseValue = 'Plongée désactivé';
				break;

			default:
				break;
		}

		const edit = await axios.patch(process.env.API_URL + 'plongee/' + payload.id, { datas: { status: valueToupdate } }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const plongees = [...state.state.plongees];
				console.log('plongees', plongees);
				var index = _.findIndex(plongees, { id: rep.data.id });
				console.log('index=', index);
				plongees.splice(index, 1, rep.data);
				state.commit('setPlongees', plongees)
				// state.commit('setCurentPlongee', rep.data)

				state.dispatch('global/alert', {
					text: responseValue,
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},

	async createPlongee(state, payload) {

		// return { toto: 'toto' }
		console.log('mypayload createPlongee', payload);
		return await axios.post(process.env.API_URL + 'plongee', payload.value).then(function (rep) {
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
					text: 'Plongée ajouté',
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
						text: 'Le nom du plongée doit être unique',
						variant: 'danger',
						countDown: 5
					}, { root: true })
					return { err: 'Le nom du plongée doit être unique' };

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
				console.log('state', state.state.currentPlongee.images);
				const imageList = [...state.state.currentPlongee.images];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentPlongeeImages', imageList)

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
				console.log('state', state.state.currentPlongee.logos);
				const imageList = [...state.state.currentPlongee.logos];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentPlongeeLogos', imageList)

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


		state.commit('setCurentPlongeeLogosPush', payload)


	},
	async updateImage(state, payload) {
		console.log('updateImage===>>>><', payload);


		state.commit('setCurentPlongeeImagesPush', payload)


	},
}