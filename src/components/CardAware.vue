<template>
  <div class="text-align-center p-3">
    <div>
      <img :src="require('@/assets/imgAware/' + trophy.img)" :alt="trophy.name" :style=" 'filter :' +trophy.filter">
    </div>
    <span>{{trophy.text}}</span>
  </div>
</template>

<script>
export default {
    name : 'CardAware',
    props : ['trophy'],
}
</script>

<style lang="scss" scoped>
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';
  img {
    width: 150px;    
  }
</style>