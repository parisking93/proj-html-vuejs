<template>
  <header>
      <nav class="container">
        <a href="#" id="box-logo">
          <img src="@/assets/logo.png" alt="marketing">
        </a>
        <ul>
          <li v-for="links, index in linkNav" :key="index">
            <template v-if="index < 2">
              <a href="#" :class="links.linkActive">
                {{links.name}}
                <i class="fas fa-chevron-down"></i>
              </a>
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
export default {
    name: 'Header',
    data() {
      return {
        linkNav : [{
          name : 'home',
          linkActive : 'link-active'
        },
        {
          name : 'services',
          linkActive : ''
        },
        {
          name: 'why us',
          linkActive : ''
        },
        {
          name : 'case studies',
          linkActive : ''
        },
        {
          name : 'about',
          linkActive : ''
        },
         {
          name : 'blog',
          linkActive : ''
        },
         {
          name : '(555) 802-1234',
          linkActive : '',
          icon : 'fas fa-phone-alt'

        }]
      }
    },
     mounted() {
      let numberPhone = this.linkNav[this.linkNav.length -1].name;
      let iconPhone = this.linkNav[this.linkNav.length -1].icon
      bus.$emit('sending', numberPhone, iconPhone);
    }

}

</script>

<style lang="scss" scoped>
  @import '@/styles/variabilesColors.scss';
  @import '@/styles/flex.scss';
  @import '@/styles/commons.scss';
  @import '@/styles/buttons.scss';
  @import '@/styles/commonsClass.scss';

  header {
    position: fixed;
    width: 100%;
    top: 0;
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
      }
      button {
        @include buttonColorInverse($orangeDark,$orangeLight,lighten($orangeLight,30%));
        
        font-size: $font-size-2;
        padding: $padding-big;
        &:hover {
          color: $white;
        }

      }

    }
  }


</style>