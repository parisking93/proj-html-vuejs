<template>
  <div id="app">
    <Header class="header" :style ="'opacity : ' + opacity"/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import debounce from 'lodash/debounce';


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      opacity : 1,
      oldPosition : 0

    }
  },
  created(){
      this.handleDebouncedScroll = debounce(this.handleScroll, 50);
      window.addEventListener('scroll', this.handleDebouncedScroll);
      
  },
  methods : {
    handleScroll() {
      if (window.scrollY > 700) {
        this.opacity = 0;
        console.log(this.opacity);
      } else  {
        this.opacity = 1;
        console.log(this.opacity);

      }
      if(this.oldPosition > window.scrollY) {
        this.opacity = 1;
        console.log(this.opacity);
      }
      this.oldPosition = window.scrollY;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  },

}
</script>

<style lang="scss">
  @import '@/styles/variabilesColors.scss';
  @import '@/styles/flex.scss';
  @import '@/styles/commons.scss';
  @import '@/styles/buttons.scss';
  @import '@/styles/commonsClass.scss';

#app {
  .header {

    transition: all 0.3s ease-in-out;
  }
  // .header {
  //     position: fixed;
  //     top: 0;
  //     background-color: $white;
  //     width: 100%;
  // }
}
</style>
