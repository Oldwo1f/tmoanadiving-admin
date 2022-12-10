<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Question & réponses</h4>
			
			<InstantRadio 
						:options="[{ text: 'Activé', value: 'actif'},{ text: 'Désactivé', value: 'inactif'}]"
						name="questionGame" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Question" rules=""  placeholder="Question" name="question" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Reponse A" rules=""  placeholder="Réponse A" name="repA" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Reponse B" rules=""  placeholder="Réponse B" name="repB" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Reponse C" rules=""  placeholder="Réponse C" name="repC" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantField label="Reponse D" rules=""  placeholder="Réponse D" name="repD" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />
			<InstantSelect label="Bonne Réponse" rules=""  name="bonneRep" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu" />


			
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