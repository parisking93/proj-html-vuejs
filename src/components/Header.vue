<template>
  <nav>
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
            <a class="last" :class="links.linkActive" href="#">
            <i class="phone fas fa-phone-alt"></i>
            {{links.name}}
            </a>
          </template>
          <a v-else  :class="links.linkActive" href="#">{{links.name}}</a>

        </li>
      </ul>
      <button>free quote</button>
  </nav>
</template>

<script>
import "@fontsource/dm-sans";
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
          linkActive : ''
        }]
      }
    }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/variabilesColors.scss';
  @import '@/styles/flex.scss';
  @import '@/styles/commons.scss';
  @import '@/styles/buttons.scss';

  *{
    font-family: "DM Sans"
  }

  nav {
    @include flex-space-center;

    height: 110px;
    max-width: 1170px;
    margin: auto;

    li {
      display: inline-block;
      cursor: pointer;
      a {
        margin: $margin03;
        padding: 0.7rem 0.7rem;
        color: black;
        text-transform: capitalize;
        &:hover{
          color: $orangeLight;
          border-bottom: 2px solid $orangeLight;
          transition: all 0.3s ease;
        }

      }
      .last {
          margin-left: 2rem;
          .phone{
            margin-right: 0.3rem
          }
      }
    }
    button {
      @include buttonColorInverse($orangeDark,$orangeLight,lighten($orangeLight,30%));
      padding: $padding-medium;
      border-radius: 0.2rem;
      text-transform: capitalize;

      &:hover {
        color: white;
      }

    }

  }

</style>