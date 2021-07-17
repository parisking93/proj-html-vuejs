<template>
  <div class="container jumbotron">
      <div>
            <h2>Unlock Your Online Growth Potential</h2>
            <p>
            Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture.
            </p>
            <button>
              our services
              <i class="fas fa-arrow-right"></i>
            </button>
      </div>
      <div>
          <CardCallBack/>
      </div>
  </div>
</template>

<script>
import CardCallBack from '@/components/CardCallBack.vue'
export default {
    name : 'SectionTxtImg',
    components : {
        CardCallBack
    }
}   

</script>

<style lang="scss" scoped>
    @import '@/styles/variabilesColors.scss';
    @import '@/styles/flex.scss';
    @import '@/styles/commons.scss';
    @import '@/styles/buttons.scss';
    .jumbotron {
        display: flex;
        button {
            @include buttonColorTrasparent($dark,$white,$white);
        
            font-size: $font-size-2;
            padding: $padding-big;
            &:hover {
                color: $white;

            }

        }
    }



</style>