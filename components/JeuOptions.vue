<template>
	<div class=" masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Options</h4>
			
			<div class="blockSwitch"><label class="label" for="">Email</label><b-form-checkbox @change="saveOptions" v-model="optionsValues.email" name="email" switch class="switch"></b-form-checkbox></div>
			<div class="blockSwitch"><label class="label" for="">Nom</label><b-form-checkbox @change="saveOptions" v-model="optionsValues.lastName" name="lastName" switch class="switch"></b-form-checkbox></div>
			<div class="blockSwitch"><label class="label" for="">Prénom</label><b-form-checkbox @change="saveOptions" v-model="optionsValues.firstName" name="firstName" switch class="switch"></b-form-checkbox></div>
			<div class="blockSwitch"><label class="label" for="">Date de naissance</label><b-form-checkbox @change="saveOptions" v-model="optionsValues.birthDate" name="birthDate" switch class="switch"></b-form-checkbox></div>
			<div class="blockSwitch"><label class="label" for="">Sexe</label><b-form-checkbox @change="saveOptions" v-model="optionsValues.sexe" name="sexe" switch class="switch"></b-form-checkbox></div>
			<div class="blockSwitch"><label class="label" for="">Ville</label><b-form-checkbox @change="saveOptions" v-model="optionsValues.city" name="city" switch class="switch"></b-form-checkbox></div>
			<div class="blockSwitch"><label class="label" for="">Adresse</label><b-form-checkbox @change="saveOptions" v-model="optionsValues.adresse" name="adresse" switch class="switch"></b-form-checkbox></div>
			<div class="blockSwitch"><label class="label" for="">Téléphone</label><b-form-checkbox @change="saveOptions" v-model="optionsValues.phone" name="phone" switch class="switch"></b-form-checkbox></div>

			
			</div>
		</div>
		</div>
</template>

<script setup>                                                                       
	import { ValidationProvider } from 'vee-validate';
const { $store } = useNuxtApp()
const state = $store.state;

let optionsValues=computed({
		get:() =>  { return{...state['jeux']['currentJeu']['options']} },
		set: (val) => { console.log('setVal',val);},
	})
	// let model=ref();
	// watchEffect(() => {console.log('watchEffect!!!!!!!'); model.value= state['jeux']['currentJeu']['options'];console.log('model.value',model.value);})

const saveOptions = async function(e){

	console.log('UPDATE');
	console.log('e',e);
	// console.log('model',model.value);
	console.log('optionsValues',optionsValues.value);

	const result = await $store.dispatch('jeux/updateCurrentJeu',{val:optionsValues.value, key:'options'}).then(async function(t){
			console.log('reponse',t);
		})
		console.log('result',result);
	
}
const emitEvent = function(e){

	console.log('emitEvent');
	console.log('e',e);
	
}
</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.blockSwitch{
	display: inline-block;
}

label.label{display: inline-block;font-weight: 600;width:auto; line-height: 20px;}
.switch{display: inline-block;margin-left: 10px; margin-right: 20px;}
label.label:after{content:' :';}

</style>