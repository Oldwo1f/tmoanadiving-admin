<template>
<div>
	<div class="row">
		<PartenaireHeader />
		<!-- <ClientOnly> -->
			<masonry
				:cols="2"
				:gutter="30"
				class="masonrycontainer"
				>
       
		<PartenaireMainInfo  />
		<PartenaireLogo  />
		
		<PartenaireMainContent />
		<PartenaireMainImage  />
		<PartenaireInfoFacture  />


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

$store.dispatch('partenaires/fetchPartenaire',{id:route.params.id})


	// const user= computed({
	// 	set: (val) => {},
	// 	get:() =>  state.users.currentUser,
	// })
	let partenaire = ref()
watchEffect(() => {console.log('watchEffect'); partenaire.value= state.partenaires.currentPartenaire;})
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