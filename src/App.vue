<template>
  <div id="app">
    <Header class="header" :style ="'opacity : ' + opacity"/>
    <Main/>
    <Chat/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Chat from './components/Chat.vue';



export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    Chat
  },
  data() {
    return {
      opacity : 1,
      oldPosition : 0,

    }
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
  },
  methods : {
    handleScroll() {
      if (window.scrollY > 700) {
        this.opacity = 0;
      } else  {
        this.opacity = 1;
      }
      if(this.oldPosition > window.scrollY) {
        this.opacity = 1;
      }
      this.oldPosition = window.scrollY;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

}
</script>

<style lang="scss">
  @import '@/styles/flex.scss';
  @import '@/styles/buttons.scss';

#app {
  .header {
    transition: all 0.3s ease-in-out;
  }

}
</style>
