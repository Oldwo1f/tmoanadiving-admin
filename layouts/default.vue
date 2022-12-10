<template>
<div id="background">
    <Menu ></Menu>
    <Header></Header>
    <div id="content" :class="{collapsed:state.global.menuCollapsed}">
        <perfect-scrollbar>
            <div class="contentPadding">
            <!-- <transition name="page"> -->
                <Nuxt v-if="!$slots.default" />
                <Slot />
            <!-- </transition> -->
            </div>
        </perfect-scrollbar>
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

    .fade-enter-active, .fade-leave-active{
	transition: all 3sec
}
.fade-enter, .fade-leave-active{
	opacity:0;
	/* transform:scale(50%) */
}


.layout-enter-active, .layout-leave-active{
	transition: all 3sec
}
.layout-enter, .layout-leave-active{
	opacity:0;
	transform:scale(50%)
}
    #background{
        background: url("./assets/images/bg1.jpg") no-repeat;
        background-size: cover;
        width:100vw;
        height:100vh;
    }
    #content{
        width:calc(100vw - 200px);
        height:calc(100vh - 70px);
        background:rgba(240, 240, 240, 0.9);
        position: fixed;
        top:70px;
        left : 200px;
        padding:0px 0px 0px 0px;
        transition: all 0.1s ease-out 0s;
        // transition: width 0.2s ease-in 0s;
        
        &.collapsed{
            width:calc(100vw - 50px);
            left : 50px;
        }
        .ps{
            height:calc(100vh - 70px);
        }
        .contentPadding{
            padding:20px;width:100%;height:100%;
        }
    }
</style>