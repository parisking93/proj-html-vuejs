<template>
  <div class="card">
        <div class="box-image">
            <img src="../assets/callUser.jpg" alt="marketing consultant">
        </div>
        <h2>Richard Madsen</h2>
        <p>Marketing Consultant Expert</p>
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
        <span class="footer-card">By submitting my data I agree to be contacted</span>
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
        font-size: $font-size-2;
        border-radius : 20px;
        padding: 1.6rem;
        text-align: center;
        .box-image {
            img{
                border-radius: 50%;
                width: 80px;
            }
        }
        h2 {
            margin: $margin-upDown-medium;
        }
        .box-phone {
            color: $orangeLight;
            margin: 1.2rem;
        }
        p {
            margin: 0.5rem 0;
            color: $greyDark;
        }
        input {
            @include inputStandard($padding-big,8px,100%);
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
            padding :$padding-big;
            width: 100%;
            font-size: $font-size-2;
            margin: 0.5rem 0;


        }
        .footer-card {
            color: $greyDark;
            font-size: $font-size-08;
        };
    }

</style>