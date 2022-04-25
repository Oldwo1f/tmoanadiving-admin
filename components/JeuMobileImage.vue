<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
				<h4 class="card-title">Images pour mobile</h4>
				<ImageCroper :itemId="state['jeux']['currentJeu']['id']" itemType="jeu"  imgwidth="300" imgheight="300" quality="3" />
				<ImageList storeproperty="currentJeu" storename="jeux" name="imagesmobile" updateStoreAction="" />
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