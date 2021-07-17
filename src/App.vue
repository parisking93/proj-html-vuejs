<template>
  <div id="app">
    <Header class="header"/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
  @import '@/styles/variabilesColors.scss';
  @import '@/styles/flex.scss';
  @import '@/styles/commons.scss';
  @import '@/styles/buttons.scss';
  @import '@/styles/commonsClass.scss';

#app {
  // .header {
  //     position: fixed;
  //     top: 0;
  //     background-color: $white;
  //     width: 100%;
  // }
}
</style>
