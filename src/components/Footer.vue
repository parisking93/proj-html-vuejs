<template>
  <div class="padding-section section-footer">
    <div class="container row">
      <div class="col-left">
        <h3>Grow Your Online Business Strategically, and Improve Customer Retention.</h3>
        <div class="row">
          <div class="box-icon-footer" v-for="icon, index in iconsArr" :key="index">
            <i :class="icon"></i>
          </div>
        </div>
      </div>
      <div class="col-right">
        <ListUtility/>
      </div>
    </div>
  </div>
</template>

<script>
import  ListUtility  from '@/components/ListUtility.vue'

export default {
    name:'Footer',
    components : {
      ListUtility
    },
    data() {
      return {
        iconsArr : ['fab fa-facebook-f','fab fa-twitter','fab fa-instagram','fab fa-youtube','fab fa-linkedin-in','fab fa-tiktok']
      }
    }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/flex.scss';
  @import '@/styles/buttons.scss';

  .section-footer {

    .col-left {
      width: 39%;
      h3 {
        font-size: $font-size-5;
        margin: $margin-upDown-big;
        font-weight: bold;
      }
      .box-icon-footer {
        width: 40px;
        font-size: $font-size-3;
      }
    }
    .col-right {
      width: 61%;
    }

  }

</style>