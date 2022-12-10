<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
			<h4 class="card-title">Qrcode <small>(<strong>id client :</strong> {{model.idclient}})</small></h4>
			
				<img :src="model.qrcode" alt="">
			
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
  



let model = ref()
watchEffect(() => {console.log('watchEffectherehere------------>'); model.value= state['users']['currentUser']; console.log(model.value);})
</script>
<style scoped lang="less">
@import '~static/less/variable.less';

.min-width{
	width:40%;
}
</style>