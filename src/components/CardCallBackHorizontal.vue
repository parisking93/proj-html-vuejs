<template>
  <div>
    <div class="card">
      <div class="card-box-left">
          <div class="card-box-img">
              <img  src="../assets/marketing-expert-cta.png" alt="marketing consultant">
          </div>
          <div class="card-box-left-text">
            <h4>Sandy Reiff</h4>
            <span class="card-box-left-text-subtitle">Marketing Consultant Expert</span>
          </div>
      </div>
      <div class="card-box-center">
        <h3>Drive Leads and Sales with Avada</h3>
      </div>
      <div>
        <button>
            <i class ='phone' :class="phoneIcon"></i>
            <span>{{phoneNumber}}</span>
      </button>
      </div>

    </div>
  </div>
</template>

<script>
import { bus } from '../main.js';
export default {
    name : 'CardCallBackHorizontal',
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

<style lang='scss' scoped>
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';

    .card {
      @include flex-align-center;
      font-size: $font-size-3;
      box-shadow: 0px 24px 32px -6px rgba(0,0,0,0.1);
      border-radius : 15px;
      padding: 1rem 3.2rem;

      .card-box-left {
        @include flex-align-center;
        .card-box-img {
          img {
            border-radius: 50%;
            width: 80px;
          }

        }
        .card-box-left-text {
          margin: $margin-rightLeft-medium;
          .card-box-left-text-subtitle {
            font-size: $font-size-1;
          }
        }

      }
      .card-box-center {
        flex-grow: 1;
        margin: $margin-rightLeft-huge;
        .card-title {
            font-size: $font-size-4;
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

    

</style>