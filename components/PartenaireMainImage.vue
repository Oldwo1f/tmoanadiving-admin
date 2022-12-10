<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
				<h4 class="card-title">Images</h4>
				<ImageCroper :itemId="state['partenaires']['currentPartenaire']['id']" itemType="partenaire" updateStoreAction="updateImage" storeproperty="currentPartenaire" storename="partenaires" :imgwidth="400" :imgheight="300" :quality="5" />
				<ImageList storeproperty="currentPartenaire" storename="partenaires" name="images" updateStoreAction="" deleteStoreAction="deleteOneImage" />
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