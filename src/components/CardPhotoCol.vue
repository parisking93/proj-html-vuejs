<template>
<div>
  <div class="relative">
    <div class="absolute layover w-100 h-100"></div>
    <img class="h-100 w-100" :src="require('../assets/' + elementArr.img)" :alt="'consulent-' + elementArr.name">
  </div>
  <h3>{{elementArr.title}}</h3>
</div>
</template>
<script>
export default {
name: 'CardPhotoCol',
props : ['elementArr']
}
</script>

<style lang="scss" scoped>
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';
    .layover {
      top: 0;
      cursor: pointer;
      transition: all 2s ease;
      &:hover {
        background: linear-gradient(to top,rgba($color: $orangeLight, $alpha: 0.6),60%, transparent );
      }
    }
    img {
      display: block;
    }
    h3{
      cursor: pointer;
      font-size: $font-size-5;
      padding: $padding-upDown-big;
      &:hover {
        color: $orangeLight;
      }
    }
</style>