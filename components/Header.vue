<template>
  <div id="header" :class="{collapsed:state.global.menuCollapsed}">
    <div class="left">
      <div class="button_collaps_menu" @click="toogleColapsed">
        <span class="material-icons" v-if="!state.global.menuCollapsed">menu_open</span>
        <span class="material-icons" v-if="state.global.menuCollapsed">menu</span>
      </div>
      <Searchbar />
    </div>
    <div class="centermenu">
        <Alert />
    </div>
    <div class="right">
      <div class="menuIcons" title="Plein écran"  @click="initFullScreen">
        <span class="material-icons"  >fullscreen</span>
      </div>
      <div class="menuIcons" title="Services tiers">
        <span class="material-icons">apps</span>
      </div>
      <div class="menuIcons" title="Plein écran">
        <span class="material-icons">notifications_none</span>
      </div>
      <div>
        <span>Profile</span>
      </div>
      <div class="menuIcons" title="déconnexion" @click="logout">
        <span class="material-icons">power_settings_new</span>
      </div>
    </div>
     
  </div>
</template>

<script setup>
  const { $store, $auth,$router } = useNuxtApp()
  const state = $store.state;

  const toogleColapsed = ()=>{
    $store.dispatch('global/toogleMenuCollapsed')
  }
  const logout = async ()=>{
    console.log('LOGOUT');
    console.log('$auth=',$auth.loggedIn);
    console.log($auth);
    await $auth.logout();


    console.log('$auth=',$auth.loggedIn);
      $router.push({ name: "login" });
  }
  const isFullScreen = ref(false);
  const initFullScreen = () =>{

      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        isFullScreen.value = true
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        isFullScreen.value = false
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
</script>
<style scoped lang="less">
  @import '~static/less/variable.less';
#header{
  // background:@whitebg;
  background:rgba(255,255,255,0.95);
  height:70px;
  width:calc(100% - 200px);
  position: fixed;
  top:0px;
  right:0px;
  display: flex;
  align-items: center;
  flex-direction:row;
  justify-content: space-between;
  transition: width 0.1s ease-out 0s;
  .left{
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: flex-start;

    .button_collaps_menu{
      margin:0px 10px;
      width: 30px;
      height: 30px;
      padding-top: 3px;
      // background:olive;
      text-align: center;
      cursor: pointer;
      span{
      width: 24px;
      height: 24px;
      // background:blue;
      }
    }
  }
  .right{
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: flex-end;
    padding-right:10px;


   
    .menuIcons{
      position: relative;
      cursor: pointer;
      margin:0px 10px;
      span.material-icons{
        width: 24px;
        height: 24px;
      }
    }
      
  }
}
#header.collapsed{
  width:calc(100% - 50px);
}
</style>