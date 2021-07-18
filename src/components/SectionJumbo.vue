<template>
  <div class="container jumbotron padding-section">
      <div class="box-text-jumbo">
            <h1>Unlock Your Online Growth Potential</h1>
            <p>
            Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture.
            </p>
            <button>
              our services
              <i class="fas fa-arrow-right"></i>
            </button>
      </div>
      <div class="box-card">
          <CardCallBack class="card"/>
      </div>
  </div>
</template>

<script>
import CardCallBack from '@/components/CardCallBack.vue'
export default {
    name : 'SectionJumbo',
    components : {
        CardCallBack
    }
}   
</script>
<style lang="scss" scoped>
    // @import '@/styles/variabilesColors.scss';
    // @import '@/styles/commons.scss';
    // @import '@/styles/commonsClass.scss';
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';
    .jumbotron {
        @include flex-space;
        .box-text-jumbo {

            color: $white;
            width: 50%;
            h1 {
                font-size: 4.6rem;
                word-spacing: -5px;
                letter-spacing: -2px;
                line-height: 4.8rem;
            }
            p {
                margin : $margin-upDown-big;
                font-size: 1.8rem;
                letter-spacing: -1px;
            }
            button {
                @include buttonColorTrasparent($dark,$white,$white);
                padding: $padding-big;
                margin: $margin-upDown-big;
                font-size: $font-size-2;
                margin: $margin-upDown-big;
                font-size: $font-size-2;
                &:hover {
                    color: $white;
                }
                i {
                    margin-left: 0.1rem;
                }
            }   


        }
    }



</style>