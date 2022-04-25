<template>
  <div id="menu" :class="{collapsed:state.global.menuCollapsed}">
    <div class="head">
      <div class="mainLogo">a</div>
      <div class="mainLogoText" v-if="!state.global.menuCollapsed">MADMIN</div>
    </div>
    <div class="menu">
      <perfect-scrollbar>
      <ul >
        <li v-for="item in menuItems" :key="item.label? item.label : Math.random()*100" >
          <div v-if="item.isTitle" class="menuTitle"  :title="item.label">
              <label for="" v-if="!state.global.menuCollapsed">{{item.label}}</label>
              <hr v-if="state.global.menuCollapsed && item.isHR">
          </div>
          <div v-if="!item.isTitle && !item.subitems" class="menuSingle" >
            <nuxt-link :to="item.link" >
              <span class="material-icons" :title="item.label">{{item.icon}}</span> 
              <label for="" v-if="!state.global.menuCollapsed">{{item.label}}</label>
            </nuxt-link>
          </div>

          <div v-if="!item.isTitle && item.subitems" class="menuMultiple">
              <div class="menuline" @click="item.collapsed = !item.collapsed" >
                <!-- @click="collapseItem(item)"  -->
                <span class="material-icons" :title="item.label">{{item.icon}}</span> 
                <label for="" v-if="!state.global.menuCollapsed">{{item.label}}</label>
                <div class="iconCollaps" v-if="!state.global.menuCollapsed">
                  <span class="material-icons" v-if="item.collapsed">expand_more</span>
                  <span class="material-icons" v-if="!item.collapsed">expand_less</span>
                </div>
              </div>
              <ul :class="{collapsed: item.collapsed}">
                <li class="headlabel">{{item.label}}</li>
                <li v-for="subitem in item.subitems" :key="subitem.key" >
                  <nuxt-link :to="subitem.link"><label for="">{{subitem.label}}</label></nuxt-link>
                </li>
              </ul>
          </div>
        </li>
      </ul>
      </perfect-scrollbar>
      <div class="bottom">
        <span class="version">V 0.55</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { $store } = useNuxtApp()
  const state = $store.state;
  // const { $store } = useNuxtApp()
  // const emit = defineEmits()  
  // const collapsed = ref(false);

  const collapseItem = (item)=>{

    const oldvalue = item.collapsed
    menuItems.value.forEach(v => {
         v.collapsed=true;
      console.log(v.label, v.collapsed);
     
   });
    item.collapsed = !oldvalue;
  console.log('item.collapsed',item.collapsed);

  }
  const menuItems = ref([
    {
      label:"Général",
      isTitle: true,
      isHR:false
    },
    {
      label:"Dashboard",
      link:'/',
      icon: 'web'
    },
    
    {
      label:"Utilisateurs",
      link:'/users',
      icon:'people'
    },
    {
      label:"contenus",
      isTitle: true,
      isHR:true
    },
    {
      label:"Jeux",
      link:'/jeux',
      icon: 'sports_esports'
    },
    {
      label:"Catégorie",
      link:'/jeux',
      icon: 'category'
    },
    {
      label:"Partenaires",
      link:'/partenaires',
      icon: 'recent_actors'
    },

    {
      label:"Article",
      link:'users',
      icon: 'description'
    },
    {
      label:"Commentaire",
      link:'users',
      icon: 'question_answer'
    },
    {
      label:"Mediathèque",
      link:'users',
      icon: 'perm_media'
    },
    {
      label:"Configuration",
      isTitle: true,
      isHR:true
    },
    {
      label:"Configurations",
      link:'users',
      icon: 'settings',
      collapsed:true,
      subitems : [
        {
          label:"Utilisateurs56",
          link:'users',
          icon: 'people'
        },
        
        {
          label:"Utilisateurs8",
          link:'users',
          icon:'portrait'
        },
      ]
    },
    {
      label:"Administrateurs",
      link:'/administrators',
      icon:'portrait',
      collapsed:true,
    },
    {
      label:"Utilisateurs45",
      link:'users',
      icon:'portrait',
      collapsed:true,
      subitems : [
        {
          label:"Utilisateurs56",
          link:'users',
          icon: 'people'
        },
        
        {
          label:"Utilisateurs8",
          link:'users',
          icon:'portrait'
        },
      ]
    },
    {
      label:"",
      link:'users',
      isTitle: true,
      isHR:true
    },
  ])
</script>
<style scoped lang="less">
  @import '~static/less/variable.less';
  
#menu{
  z-index:50;
  background:@secondary;
  height:100vh;
  width:200px;
  position: fixed;
  top:0px;
  left:0px;
  box-shadow: 8px 8px 10px #3333332b;
  transition: all 0.1s ease-out 0s;
  .menu .ps{
    height: calc(100vh - 70px);
    // overflow-x: visible !important;
  }
}

#menu .head{
   background:@primary;
  height: 70px;
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .mainLogo{
    height : 40px;
  color:@menuTextColor;
  font-family: Mom;
  font-size: 40px;
  line-height: 45px;
  
}
  .mainLogoText{
  margin-left: 10px;

  font-weight: bold;
  text-transform: uppercase;
  color:@menuTextColor;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  letter-spacing:0.5px;
}

}
#menu ul{
  list-style:none;
  padding:0px;

}
#menu .menuTitle{
  margin-top: 8px;
  margin-bottom: 0px;
  text-indent : 10px;
  font-weight: bold;
  text-transform: uppercase;
  color:@menuNeutralColor;
  font-family: Poppins;
 font-size: 12px;
 font-weight: 600;
 letter-spacing:0.5px;
  label{margin-bottom: 0;}
}
#menu .headlabel{
  margin-top: 1px;
  margin-bottom: 10px;
  text-indent : 5px;
  font-weight: bold;
  text-transform: uppercase;
  color:@menuTextColorSecondary;
  font-family: Poppins;
 font-size: 12px;
 font-weight: 600;
 letter-spacing:0.5px;
  label{margin-bottom: 0;}
}

#menu .menuMultiple{
 display: flex;
 flex-direction: column;
//  align-items: center;
 /* justify-content: center; */
 padding-left: 20px;
  .menuline{
    width:100%;
    display: flex;
    flex-direction: row;
    align-items:center ;
    justify-content: flex-start;
    position: relative;
    height:40px;
    color:@menuTextColor;
    cursor: pointer;
        &:hover{
          color:@menuTextColorSecondary;
        }
    
    .iconCollaps{ 
      align-self: flex-end;
       
      position: absolute;
      right: 10px;
      top: 12px;
      cursor: pointer;
      .material-icons{
        font-size: 18px;   
      }
    }
    label{
      margin-bottom: 0;
      // line-height: 1px;
      margin-left:10px;
      font-family: Poppins;
      font-size: 13px;
      font-weight: 400;
      cursor: pointer;
      // height:20px;
    }
    
  }
  ul{
    &.collapsed{
      display:none;
      
    }
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left:0px;
    
    li{
      margin-bottom: 5px;
      a{
        color:@menuTextColor;
        text-decoration:none;
        display: inline-block;
        width:100%;
        &:hover{
          color:@menuTextColorSecondary;
        }
        label{
        margin-bottom: 0;
        line-height: 1px;
        margin-left:10px;
        font-family: Poppins;
        font-size: 13px;
        font-weight: 400;
        cursor: pointer;

        }
      }
    }
    
  }
 
}
#menu hr{
  margin-top:0rem;
  margin-bottom:0rem;
}
#menu .menuSingle{
 
 a{
  display: flex;
 align-items: center;
 /* justify-content: center; */
 height:40px;
 padding-left:20px;
 color:@menuTextColor;
 text-decoration:none;

 &:hover{
  color:@menuTextColorSecondary;
 }
 }
 label{
    margin-bottom: 0;
    line-height: 1px;
    margin-left:10px;
    font-family: Poppins;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;

  }
}


#menu.collapsed{
  
  width:50px;
  .menuTitle{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .menuSingle {
    a {
    padding-left: 0px;
    justify-content: center;
    }
  } 
  .menuMultiple {
    padding-left: 0;
    .menuline{
    justify-content: center;
    width:100%;

      a {
      padding-left: 0px;
      }
    }
    ul{
      
      background:@secondary;
      position: fixed;
      left : 50px;
      margin-top:2px;
      width:150px;
      padding:10px 10px;
      box-shadow: 8px 8px 10px #3333332b;

    }
    ul{
        display:none;
        // &.collapsed{
        //   display:block;
        // }
    }
    &:hover{
      ul{
        display: block;
      }
    }
  }
}
.bottom{
  position: absolute;
    bottom: 0px;
    color: white;
    font-size: 12px;
    text-align: center;
    width: 100%;
}

</style>