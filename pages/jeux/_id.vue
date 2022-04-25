<template>
<div>
	<div class="row">
		<JeuHeader />
		<!-- <ClientOnly> -->
			<masonry
				:cols="2"
				:gutter="30"
				class="masonrycontainer"
				>
        <!-- <div v-masonry-tile class="item" :key="index" v-for="(item, index) in blocks">
          <p>{{item}} - {{index}}</p>
        </div> -->
		<JeuMainInfo  />
		<JeuMainImage  />
		<JeuMainContent />
		<!-- <JeuMobileImage  /> -->
		<JeuGagnant   v-if="jeu.dateTirage < $dayjs().valueOf()"/>
		<JeuOptions />
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

$store.dispatch('jeux/fetchJeu',{id:route.params.id})


	// const user= computed({
	// 	set: (val) => {},
	// 	get:() =>  state.users.currentUser,
	// })
	let jeu = ref()
watchEffect(() => {console.log('watchEffect'); jeu.value= state.jeux.currentJeu;})
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