<template>
  <header>
      <nav class="container" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1500" data-aos-easing="ease-in-out">
        <a href="#" id="box-logo">
          <img src="@/assets/logo.png" alt="marketing">
        </a>
        <ul>
          <li class="relative" v-for="links, index in linkNav" :key="index">
            <template v-if="index < 2">
              <a href="#" :class="links.linkActive">
                {{links.name}}
                <i class="fas fa-chevron-down"></i>
              </a>
              <DropDown class="absolute drop-down-box" :sublink ='links.dropDownLink' :show ='open'/>
            </template>
            <template v-else-if="index == linkNav.length - 1">
              <a class="last" :class="links.linkActive" href="#" >
                <i class="phone" :class="links.icon"></i>
                {{links.name}}
              </a>
            </template>
            <a v-else  :class="links.linkActive" href="#">{{links.name}}</a>

          </li>
        </ul>
        <button>free quote</button>
        </nav>
    </header>
</template>

<script>
import "@fontsource/dm-sans";
import { bus } from '../main.js';
import {links} from '../arrayJs/headerArr.js'
import DropDown from '@/components/DropDown.vue'
export default {
    name: 'Header',
    components : {
      DropDown
    },
    data() {
      return {
        linkNav : '',
        open : 'up'
      }
    },
    created() {
      this.linkNav = links;
    },
     mounted() {
      let numberPhone = this.linkNav[this.linkNav.length -1].name;
      let iconPhone = this.linkNav[this.linkNav.length -1].icon
      bus.$emit('sending', numberPhone, iconPhone);
    },
    methods : {
      showDropDown() {
        this.open = 'down';
      }
    }

}

</script>

<style lang="scss" scoped>
 
  @import '@/styles/flex.scss';
  @import '@/styles/buttons.scss';

  header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index:100; 
    background-color: $white;
    nav {
      @include flex-space-center;
      height: 110px;
      li {
        display: inline-block;
        cursor: pointer;
        a {
          font-size: $font-size-2;
          margin: $margin-9;
          padding: 0.6rem 0.1rem;
          color: $dark;
          text-transform: capitalize;
          &:hover{
            color: $orangeLight;
            border-bottom: 2px solid $orangeLight;
            transition: all 0.3s ease;
          }


        }
        &:hover .drop-down-box{
          display: block;
        }
        .drop-down-box {
          display: none;

        }
      }
      button {
        @include buttonColorInverse($orangeDark,$orangeLight,lighten($orangeLight,40%));
        
        font-size: $font-size-2;
        padding: $padding-medium;
        &:hover {
          color: $white;
        }

      }

    }
  }


</style>