<template>
  <div class="box-list-footer">
      <ul v-for="utility, index in utilitiesArr" :key="index">
        <li>
            <h3 class="relative">
                <a href="">{{utility.title}}</a>
                <div class="orange-line absolute"></div>
            </h3>
            <div></div>
        </li>
        <li class="relative" v-for="link,number in utility.links" :key="number">
              <a href="">{{link}}</a>
              <div class="orange-line absolute"></div>
        </li>
      </ul>
  </div>
</template>

<script>
import {utilities} from '../arrayJs/utilityArr.js'
export default {
    name: 'ListUtility',
    data(){
        return {
            utilitiesArr : ''
        }
    },
    created() {
        this.utilitiesArr = utilities;
    }
}
</script>

<style lang="scss" scoped>
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';

    .box-list-footer {
        @include flex-evenly;
        ul {
            li{
                margin: $margin-upDown-big;
                text-transform: capitalize;
                font-size: $font-size-2;
                a {
                    color: $dark;
                    transition: all 0.3s ease;
                }
                .orange-line {
                    top :100%;
                    left: 100%;
                    width: 2px;
                    height: 10px;
                    transition: all 0.3s ease;
                    border-right: 2px solid $orangeLight;
                    transform: translate(0,-100%);
                    opacity: 0;

                }
                &:hover div{
                    height: 100%;
                    transform: translate(20px,-100%);
                    opacity: 1;
                }
                &:hover a{
                    color: $orangeLight;
                }

            }
        }
    }

</style>