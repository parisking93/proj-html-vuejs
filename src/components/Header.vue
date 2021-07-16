<template>
  <nav>
      <div id="box-logo">
        <img src="@/assets/logo.png" alt="marketing">
      </div>
      <ul>
        <li v-for="links, index in linkNav" :key="index">
          <template v-if="index < 2">
            <a href="#">
              {{links}}
              <i class="fas fa-chevron-down"></i>
            </a>
          </template>
          <a v-else href="#">{{links}}</a>

        </li>
      </ul>
      <button>free quote</button>
  </nav>
</template>

<script>
export default {
    name: 'Header',
    data() {
      return {
        linkNav : ['home','services','why us','case studies','about','blog','(555)802-1234']
      }
    }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/variabiles.scss';
  @import '@/styles/flex.scss';


  nav {
    height: 110px;
    max-width: 1170px;
    @include my-flex;
    margin: auto;

    li {
      display: inline-block;
      cursor: pointer;
      a {
        padding: 10px 20px;
      }
    }
    button {
      background-color: lighten($orangeLight,30%);
      padding: 10px 25px;
      border-radius: 5px;
      border: none;
      color: $orangeDark;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background-color : $orangeLight;
        color: white;
      }

    }

  }

</style>