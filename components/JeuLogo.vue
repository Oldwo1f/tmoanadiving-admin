<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
				<h4 class="card-title" style="margin-bottom:40px;">Logo annonceur</h4>
				<div class="myflex">
					<ImageCroper :itemId="state['jeux']['currentJeu']['id']" itemType="jeu" itemType2="Logo" updateStoreAction="updateLogo" storeproperty="currentJeu" storename="jeux" :imgwidth="400" :imgheight="300" :quality="1" />
					<LogoList storeproperty="currentJeu" storename="jeux" name="logos" updateStoreAction="" deleteStoreAction="removeOneLogo" />
				</div>
				
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
.myflex{
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>