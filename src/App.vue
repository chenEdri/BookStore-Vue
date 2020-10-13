<template>
  <div id="app">
      <header-app/>
       <user-msg />
    <router-view/>
    <footer>
      coffeerights for pets 2020
    </footer>
  </div>
</template>

<script>
import UserMsg from '@/cmps/UserMsg'
import HeaderApp from '@/cmps/HeaderApp'
export default {
  components:{
    HeaderApp,
     UserMsg
  }
  
}
</script>


<style lang="scss">

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
