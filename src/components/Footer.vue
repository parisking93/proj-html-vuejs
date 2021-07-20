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
    <div class="container row container-footer-low">
      <div>© 2020 • Avada Consultant • Powered by WordPress</div>
      <div class="text-align-center">call us + {{phoneNumber}}</div>
      <div class="text-align-end">info@yourcompany.com</div>
    </div>
  </div>
</template>

<script>
import  ListUtility  from '@/components/ListUtility.vue';
import { bus } from '../main.js';


export default {
    name:'Footer',
    components : {
      ListUtility
    },
    data() {
      return {
        iconsArr : ['fab fa-facebook-f','fab fa-twitter','fab fa-instagram','fab fa-youtube','fab fa-linkedin-in','fab fa-tiktok'],
        phoneNumber : ''
      }
    },
    created() {
      bus.$on('sending',(numberPhone)=>{
        this.phoneNumber = numberPhone;
      });
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
        i:hover {
          color: $orangeLight;
          cursor: pointer;
          transition: all 0.3s ease;
        }
      }
    }
    .col-right {
      width: 61%;
    }
    .container-footer-low {
      margin-top: $padding-same-mini-huge;
      &>* {
        width: 33%;
      }
    }

  }

</style>