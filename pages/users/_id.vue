<template>
	<div>
		<div class="row">
			<UserHeader />
			<masonry :cols="2" :gutter="30" class="masonrycontainer">


				<UserPersonalInfo />
				<UserPersonalInfo2 />
				<!-- <UserCredit /> -->
				<UserExtras />
				<UserQrcode />
			</masonry>
		</div>
	</div>
</template>

<script setup>
// 	definePageMeta({
//   layout: "secondary"
// });
// definePageMeta({
//   title: 'My home page'
// })
const { $store } = useNuxtApp()
const { state } = $store
// const router = useRouter()
const route = useRoute()
const router = useRouter()
console.log('route', route);

console.log('$route.params.id=', route.params.id);

$store.dispatch('users/fetchUser', { id: route.params.id })


// const user= computed({
// 	set: (val) => {},
// 	get:() =>  state.users.currentUser,
// })
let user = ref()
watchEffect(() => { console.log('watchEffect'); user.value = state.users.currentUser; })
	// console.log('user',user);
	// const totalRows = computed({
	// 	set: (val) => {$store.commit('users/setTotalRows',val)},
	// 	get:() =>  state.users.totalRows,
	// })
	// const rows= computed({
	// 	set: (val) => {$store.commit('users/setRows')},
	// 	get:() =>  state.users.rows,
	// })

</script>

<style scoped lang="less">
@import '~static/less/variable.less';

.masonryBlock {
	margin-top: 20px;
}

.masonrycontainer {
	width: 100%;
	margin-left: -15px !important;
}
</style>