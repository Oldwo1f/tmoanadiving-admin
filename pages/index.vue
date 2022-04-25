<template>
  <div>
    <h1>Dashboard</h1>
    <p></p>
    <p>à venir</p>
  </div>
</template>

<script setup>
  const { $store ,$auth} = useNuxtApp()
  console.log('$auth=',$auth.loggedIn);
  console.log('$auth=',$auth.user);
  // const state = ref($store.state)
  // console.log('$store.state.menuCollapsed init=',$store.state.menuCollapsed);
  // const getMenuCollapsed = ()=>{
  //   console.log('$store.menuCollapsed',$store.state.menuCollapsed);
  //   return $store.state.menuCollapsed
  // }
 
</script>

<style scoped>
.toto{
  position:fixed;
  bottom : 50px;
  right:50px;
}
</style>