<template>
  <div class="card">
      <div class="box-image">
          <img src="#" alt="">
      </div>
        <h3>Richard Madsen</h3>
        <span>Marketing Consultant Expert</span>
        <div class="box-phone"> 
            <i class ='phone' :class="phoneIcon"></i>
            <span>{{phoneNumber}}</span>
        </div>
    </div>
</template>

<script>
import { bus } from '../main.js';
export default {
    name :'CardCallBack',
    data(){
        return {
            phoneNumber : '',
            phoneIcon : ''
        }
    },
    created() {
        bus.$on('sending',(numberPhone,iconPhone)=>{
        this.phoneNumber = numberPhone;
        this.phoneIcon = iconPhone;
      });    
    }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/variabilesColors.scss';
  @import '@/styles/flex.scss';
  @import '@/styles/commons.scss';
  @import '@/styles/buttons.scss';
  @import '@/styles/commonsClass.scss';
    .card {
        background-color: $white;
        .box-phone {
            color: $orangeLight;
        }
    }
</style>