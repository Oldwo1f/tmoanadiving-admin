<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Gagnant</h4>
			
			<InstantField label="Prénom" rules="alpha_spaces|min:2"  placeholder="Prénom du gagnant" name="winnerfirstname" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Nom" rules="alpha_spaces|min:2"  placeholder="Nom du gagnant" name="winnerlastname" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Ville" rules="alpha_spaces|min:2"  placeholder="Ville du gagnant" name="winnercity" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			</div>
		</div>
		</div>
</template>

<script setup>                                                                       
	import { ValidationProvider } from 'vee-validate';
const { $store } = useNuxtApp()
const state = $store.state;
// const { $store } = useNuxtApp()
// const emit = defineEmits()  
// const collapsed = ref(false);
const model=ref()

const update = function(e){

	console.log('UPDATE');
	console.log('e',e);
	
}
const emitEvent = function(e){

	console.log('emitEvent');
	console.log('e',e);
	
}
</script>
<style scoped lang="less">
@import '~static/less/variable.less';


</style>