<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Gagnant <b-button style="float:right" @click="tirage">Faire le tirage au sort</b-button></h4>
			
			
			<InstantField label="Email" rules="email"  placeholder="Email du gagnant" name="winneremail" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Prénom" rules="alpha_spaces|min:2"  placeholder="Prénom du gagnant" name="winnerfirstname" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Nom" rules="alpha_spaces|min:2"  placeholder="Nom du gagnant" name="winnerlastname" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Ville" rules="alpha_spaces|min:2"  placeholder="Ville du gagnant" name="winnercity" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<span style="margin-bottom:40px;display:block;"></span>
			<ImageCroper :itemId="state['jeux']['currentJeu']['id']" itemType="jeu" itemType2="Imagegagnant" updateStoreAction="updateImagesGagnant" storeproperty="currentJeu" storename="jeux" :imgwidth="400" :imgheight="300" :quality="5" />
			<ImageGagnantList storeproperty="currentJeu" storename="jeux" name="imagesgagnant" updateStoreAction="" deleteStoreAction="removeOneImageGagnant" />
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


const tirage = async function(){
	console.log('TIRAGE');
	const result = await $store.dispatch('jeux/tirage').then(async function(t){
			console.log('reponse',t);
		})
		console.log('result',result);
	
}
</script>
<style scoped lang="less">
@import '~static/less/variable.less';


</style>