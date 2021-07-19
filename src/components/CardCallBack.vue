<template>
  <div class="card">
        <div class="card-box-img">
            <img src="../assets/callUser.jpg" alt="marketing consultant">
        </div>
        <h3 class="card-title">Richard Madsen</h3>
        <span class="card-subtitle">Marketing Consultant Expert</span>
        <div class="box-phone"> 
            <i class ='phone' :class="phoneIcon"></i>
            <span>{{phoneNumber}}</span>
        </div>
        <form action="#">
            <input type="text" placeholder=" Your Name*">
            <input type="text" placeholder=" Your Email*">
            <input type="text" placeholder=" Your Phone Number*">
            <button>get a callback</button>
        </form>
        <span class="card-footer">By submitting my data I agree to be contacted</span>
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
//   @import '@/styles/commons.scss';
//   @import '@/styles/variabilesColors.scss';
  @import '@/styles/flex.scss';
  @import '@/styles/buttons.scss';
//   @import '@/styles/commonsClass.scss';
  @import '@/styles/input.scss';

    .card {

        background-color: $white;
        border-radius : 20px;
        padding: 1.6rem;
        text-align: center;
        font-size: $font-size-3;

        .card-box-img {

            img{
                border-radius: 50%;
                width: 80px;
            }
        }
        .card-title {
            margin: $margin-upDown-medium;
            font-size: $font-size-4;
        }
        .box-phone {
            color: $orangeLight;
            margin: 1.2rem;
        }
        .card-subtitle {
            margin: 0.5rem 0;
            color: $greyDark;
        }
        input {
            @include inputStandard($padding-medium,8px,100%);
            font-size: $font-size-2;
            margin: 0.7rem 0;
            &:hover {
                border-color: $orangeLight;
            }
            &:focus {
                border-color: none;
                outline: 1px solid $orangeDark;
            }
        }
        button {
            @include buttonColorDarken($white,$orangeLight,$orangeLight);
            padding :$padding-medium;
            width: 100%;
            font-size: $font-size-2;
            margin: 0.5rem 0;


        }
        .card-footer{
            color: $greyDark;
            font-size: $font-size-08;
        };
    }

</style>