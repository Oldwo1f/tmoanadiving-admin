


<template>
	
	<b-alert class="customAlert"
	    :show="alertCountDown"
        :variant="alertVariant"
        dismissible 
		@dismissed="alertCountDown=0"
		@dismiss-count-down="countDownChanged"
		fade
		>
        {{alertText}}
      </b-alert>
</template>

<script setup>
import { ValidationProvider } from 'vee-validate';
const { $store } = useNuxtApp()
const state = $store.state;
// const emit = defineEmits()

const model = ref(true);
const alertText = computed({
		get:() =>  state.global.alertText,
		set: (val) => {$store.commit('global/setAlertText',val)},
	})
const alert = computed({
		get:() =>  state.global.alert,
		set: (val) => {$store.commit('global/setAlert',val)},
	})

const alertVariant = computed({
		get:() =>  state.global.alertVariant,
		set: (val) => {$store.commit('global/setAlertVariant',val)},
	})
let alertCountDown = computed({
		get:() =>  state.global.alertCountDown,
		set: (val) => {$store.commit('global/setAlertCountDown',val)},
	})
// const countDownChanged = computed({
// 		get:() =>  state.global.alertCountDown,
// 		set: (val) => {alertCountDown = dismissCountDown;console.log('countDownChanged');},
// 	})
const countDownChanged = (dismissCountDown) =>{
	// console.log('countDownChanged');
	// console.log('dismissCountDown',dismissCountDown);
	// console.log('alertCountDown',alertCountDown);
	// alertCountDown = dismissCountDown;
}
        
    //   };
</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.customAlert{
	margin-bottom:0px;

}

</style>