const axios = require('axios').default;

export const state = () => ({
	pages: [],
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
	currentPage: {},
})

export const getters = {
}

export const mutations = {
	setRows(state, payload) {
		console.log('SETROWS');
		console.log(state.pages.length);
		state.rows = state.pages.length;
	},
	setupTotalRows(state, payload) {
		console.log('setupTotalRows');
		console.log(state.pages.length);
		state.totalRows = state.pages.length;
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
	setPages(state, payload) {
		console.log('setPages', payload);
		state.pages = payload;
	},
	setCurentPage(state, payload) {
		console.log('setCurentJeu', payload);
		state.currentPage = payload;
	},
	setCurentPageImages(state, payload) {
		console.log('setCurentPageImages', payload);
		state.currentPage.images = payload;
	},
	setCurentPageLogos(state, payload) {
		console.log('setCurentPageLogos', payload);
		state.currentPage.logos = payload;
	},
	setCurentPageLogosPush(state, payload) {
		console.log('setCurentPageLogos', payload);
		state.currentPage.logos.push(payload);
	},
	setCurentPageImagesPush(state, payload) {
		console.log('setCurentPageimages', payload);
		state.currentPage.images.push(payload);
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
	async fetchPages(state, payload) {
		state.commit('setIsBusy', true)
		console.log('payload', payload);
		// setTimeout(async function () {
		const pages = await axios.get(process.env.API_URL + 'pages?archive=' + payload.archive)

		console.log('STORE ACTION');
		state.commit('setPages', pages.data)
		state.commit('setRows')
		state.commit('setupTotalRows')
		state.commit('setIsBusy', false)
		// }, 1000)

	},
	async fetchPage(state, payload) {
		console.log('mypayload', payload);
		const page = await axios.get(process.env.API_URL + 'page/' + payload.id)

		console.log('STORE ACTION setCurentPage');
		state.commit('setCurentPage', page.data)
	},
	async updateCurrentPage(state, payload) {
		console.log('mypayload', payload);
		console.log(state);
		// console.log(state.state.currentPage);
		const page = { ...state.state.currentPage };
		page[payload.key] = payload.val
		console.log('page', page);
		const edit = await axios.patch(process.env.API_URL + 'page/' + page.id, { datas: page }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const pages = [...state.state.pages];
				console.log('pages', pages);
				var index = _.findIndex(pages, { id: rep.data.id });
				console.log('index=', index);
				pages.splice(index, 1, rep.data);
				state.commit('setPages', pages)
				state.commit('setCurentPage', rep.data)

				state.dispatch('global/alert', {
					text: 'Page enregistré',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async removeOnePage(state, payload) {
		console.log('mypayload removeOnePage', payload);
		console.log(state);
		// console.log(state.state.currentJeu);
		// const jeu = { ...state.state.currentJeu };
		// jeu[payload.key] = payload.val
		// console.log('jeu', jeu);
		const deleted = await axios.delete(process.env.API_URL + 'page/' + payload.id).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const pages = [...state.state.pages];
				console.log('pages', pages);
				var index = _.findIndex(pages, { id: rep.data });
				console.log('index=', index);
				pages.splice(index, 1);
				state.commit('setPages', pages)
				state.commit('setCurentPage', {})

				state.dispatch('global/alert', {
					text: 'Page supprimé',
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},
	async updatePageStatus(state, payload) {
		console.log('mypayload', payload);
		let valueToupdate = ''
		let responseValue = ''

		switch (payload.action) {
			case 'archiver':
				valueToupdate = 'archive';
				responseValue = 'Page archivé';
				break;
			case 'desarchiver':
				valueToupdate = 'inactif';
				responseValue = 'Page désarchivé';
				break;
			case 'activer':
				valueToupdate = 'actif';
				responseValue = 'Page activé';
				break;
			case 'desactiver':
				valueToupdate = 'inactif';
				responseValue = 'Page désactivé';
				break;

			default:
				break;
		}

		const edit = await axios.patch(process.env.API_URL + 'page/' + payload.id, { datas: { status: valueToupdate } }).then(function (rep) {
			console.log('rep axios', rep);
			if (rep.status === 200) {

				const pages = [...state.state.pages];
				console.log('pages', pages);
				var index = _.findIndex(pages, { id: rep.data.id });
				console.log('index=', index);
				pages.splice(index, 1, rep.data);
				state.commit('setPages', pages)
				// state.commit('setCurentPage', rep.data)

				state.dispatch('global/alert', {
					text: responseValue,
					variant: 'success',
					countDown: 2
				}, { root: true })
			}
		})
	},

	async createPage(state, payload) {

		// return { toto: 'toto' }
		console.log('mypayload createPage', payload);
		return await axios.post(process.env.API_URL + 'page', payload.value).then(function (rep) {
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
					text: 'Page ajouté',
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
						text: 'Le nom du page doit être unique',
						variant: 'danger',
						countDown: 5
					}, { root: true })
					return { err: 'Le nom du page doit être unique' };

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
				console.log('state', state.state.currentPage.images);
				const imageList = [...state.state.currentPage.images];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentPageImages', imageList)

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
				console.log('state', state.state.currentPage.logos);
				const imageList = [...state.state.currentPage.logos];
				console.log('IMGLIST', imageList);

				var index = _.findIndex(imageList, { id: rep.data });
				console.log('index=', index);
				imageList.splice(index, 1);
				state.commit('setCurentPageLogos', imageList)

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


		state.commit('setCurentPageLogosPush', payload)


	},
	async updateImage(state, payload) {
		console.log('updateImage===>>>><', payload);


		state.commit('setCurentPageImagesPush', payload)


	},
}