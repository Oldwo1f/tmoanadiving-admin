<template>
	<div>
		<div class="plainBG">
			<div class="leftBigBar">
				<nuxt />
			</div>
		</div>
		
	</div>
</template>

<script setup>
const { $store } = useNuxtApp()
const state = ref($store.state)
// console.log('$store.state.menuCollapsed init=',$store.state.menuCollapsed);
// const getMenuCollapsed = ()=>{
//   console.log('$store.menuCollapsed',$store.state.menuCollapsed);
//   return $store.state.menuCollapsed
// }

</script>

<style scoped lang="less">
	@import '~static/less/variable.less';


	.plainBG{
		background: url("./assets/images/bg1.jpg") no-repeat center center;
        background-size: cover;
		width:100vw;
		height: 100vh;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.leftBigBar{
		
		// height: 400px;
		width:400px;
		background: rgba(255,255,255,0.5);
		border-radius:5px;
	}
</style>