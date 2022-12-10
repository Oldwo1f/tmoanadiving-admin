<template>
	<input class="searchbar" v-model="filter" type="text" placeholder="Rechercher">
</template>
  
<script setup>
const { $store } = useNuxtApp()
const state = $store.state;

const filter = computed({
	set: (val) => {
		$store.commit('users/setFilter', val)
		$store.commit('administrators/setFilter', val)
		$store.commit('partenaires/setFilter', val)
		$store.commit('plongees/setFilter', val)
		$store.commit('passes/setFilter', val)
	},
	get: () => state.users.filter,
})

</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.searchbar {
	width: 300px;
	border-radius: 20px;
	padding: 5px 15px;
	border: 1px solid #ccc;
	// box-shadow:0;
	outline: 0;
	height: 40px;

	&:focus {
		border-color: #bbb;
	}
}
</style>