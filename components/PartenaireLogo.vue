<template>
	<div class="masonryBlock">
	<div class="card">
			<div class="card-body">
				
				<h4 class="card-title">Logo</h4>
				<div class="myflex">
					<ImageCroper :itemId="state['partenaires']['currentPartenaire']['id']" itemType="partenaire" itemType2="Logo"  :imgwidth="300" :imgheight="200" :quality="2" />
					<LogoList storeproperty="currentPartenaire" storename="partenaires" name="logos" updateStoreAction="" deleteStoreAction="deleteOneLogo" />
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