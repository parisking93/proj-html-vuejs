<template>
  <div  class="card-property">
      <div class="box-text box-property">
        <div class="box-text-inside box-property-inside" v-for="element,index in whatWeDoList" :key="index"> 
          <h3>{{element.title}}</h3>
          <span>{{element.span}}</span>
        </div>
      </div>
    <div class="box-text">
        <ul class="box-text-inside">
          <li v-for="element,index in propertyList" :key="index">
              <div class="box-icon-proprety">
                  <i :class="element.icon"></i>
              </div>
              <div class="box-description">
                  <h4>{{element.title}}</h4>
                  <span>{{element.description}}</span>
              </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {whatWeDo} from '../arrayJs/whatWeDoArr.js'
import {listProperty} from '../arrayJs/propertyArr.js'

export default {
    name : 'Property',
    data() {
        return {    
            
            whatWeDoList : '',
            propertyList : ''
        }
    },
    created(){
        this.whatWeDoList = whatWeDo;
        this.propertyList = listProperty;

    }

}
</script>

<style lang="scss" scoped>
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';
    .card-property {
        display:flex;
        span {
            font-size: $font-size-3;
            letter-spacing: -1px;
        }
        .box-property {
            .box-property-inside{
                margin-top : 3rem;
                margin-bottom : 3rem;
                h3 {
                    font-size: $font-size-5;
                    margin: $margin-upDown-big;
                }

            }
        }
        ul {
            li{
                margin: $margin-upDown-mini-huge;
                @include flex-align-center;
                .box-icon-proprety {
                    border: 2px solid $orangeLight;
                    border-radius: 20px;
                    margin-right: 1.5rem;
                    i {
                        font-size: $font-size-5;
                        padding: $padding-same-medium;
                        color: $orangeLight;
                    }
                }
                .box-description {
                    h4 {
                        font-size: $font-size-3;
                        margin-bottom: 0.8rem;
                    }
                }

            }
        }
    }


</style>