<template>
<div>
	<div class="row">
		<PlongeeHeader />
		<!-- <ClientOnly> -->
			<masonry
				:cols="2"
				:gutter="30"
				class="masonrycontainer"
				>
       
		<!-- <PartenaireMainInfo  />
		<PartenaireLogo  />
		
		<PartenaireMainContent />
		<PartenaireMainImage  /> -->
	</masonry>
      </div>
	<!-- </ClientOnly> -->
		
		
		<!-- <UserPersonalInfo />
		<UserExtras /> -->
		
	<!-- </div> -->
</div>
</template>

<script setup>
// 	definePageMeta({
//   layout: "secondary"
// });
// definePageMeta({
//   title: 'My home page'
// })

    //   if (typeof this.$redrawVueMasonry === 'function') {
    //     this.$redrawVueMasonry()
    //   }
const { $store  } = useNuxtApp()

const { state } = $store
// const router = useRouter()
  const route = useRoute()
  const router = useRouter()
  console.log('route',route);

console.log('$route.params.id=',route.params.id);

$store.dispatch('plongees/fetchPlongee',{id:route.params.id})


	// const user= computed({
	// 	set: (val) => {},
	// 	get:() =>  state.users.currentUser,
	// })
	let plongee = ref()
watchEffect(() => {console.log('watchEffect'); plongee.value= state.plongees.currentPlongee;})
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

.masonrycontainer{
	width:100%;
	margin-left:-15px !important;
}
.masonryBlock{
	margin-top:20px;
}

</style>