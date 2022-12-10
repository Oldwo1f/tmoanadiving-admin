<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
				<h4 class="card-title">Images de fin</h4>
				<ImageCroper :itemId="state['jeux']['currentJeu']['id']" itemType="jeu" itemType2="Imagefin" updateStoreAction="updateImagesFin" storeproperty="currentJeu" storename="jeux" :imgwidth="500" :imgheight="325" :quality="4" />
				<ImageFinList storeproperty="currentJeu" storename="jeux" name="imagesfin" updateStoreAction="" deleteStoreAction="removeOneImageFin" />
			</div>
	</div>
	</div>
</template>

<script setup> 
const { $store } = useNuxtApp()
const state = $store.state;
const model=ref()
const imageSrc=ref('')

const update = function(e){

	console.log('UPDATE');
	console.log('e',e);
	console.log('model',model);

	
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