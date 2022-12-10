<template>
	<div class=" masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Règlement du jeu</h4>
			<!-- <vue-editor v-model="form.descriptionoffre"></vue-editor> -->
			<InstantEditor  rules=""  placeholder="Règlement du jeu" name="reglement" storename="jeux" storeproperty="currentJeu" updateStoreAction="updateCurrentJeu"/>
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
// let model = ref()
// watchEffect(() => {console.log('watchEffect'); model.value= state[props.storename][props.storeproperty][props.name];})

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

.imageBox{
	border:2px dashed black;
	width: 300px;
	height:300px;
}
</style>