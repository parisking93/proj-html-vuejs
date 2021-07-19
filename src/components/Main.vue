<template>
  <div>
        <section class="jumbo section100">
          <SectionJumbo/>
        </section>
        <!-- 3 sezioni uguali  -->
        <section class="section100 padding-section" v-for="section,index in consulArr" :key="index">
          <div class="container container-consultation" v-if="index % 2 == 0">
            <div class="box-image">
              <img class="box-image-inside" :src="require('@/assets/svg/img'+ (index + 1) +'.svg')" :alt="section.icon.icontext">
            </div>
            <CardConsultation :oggettoConsul="section"/>
          </div>
          <div class="container container-consultation" v-else>
            <CardConsultation :oggettoConsul="section"/>
            <div class="box-image">
              <img class="box-image-inside" :src="require('@/assets/svg/img'+ (index + 1) +'.svg')" :alt="section.icon.icontext">
            </div>
          </div>
        </section>
        <!-- fine 3 section uguali -->

        <section class="section100 padding-section">
          <SectionBrand/>
          <!-- <Card/> -->
        </section>
        <section>
          <!-- diverso -->
          <!--componente cardtesto -->
        <!-- componente cardimg --> 
        </section>
        <section>
          <!-- award -->
      </section>
        <section>
          <!-- opposto footer up -->
        <!-- componente cardimg --> 
        <!--componente cardtesto -->
        </section>
        <section class="trusted small">

        </section>
        
  </div>
</template>

<script>
import {consultation} from '../consultationArr';
import SectionJumbo from '@/components/SectionJumbo.vue';
import CardConsultation from '@/components/CardConsultation.vue';
import SectionBrand from '@/components/SectionBrand.vue';



export default {
    name: 'Main',
    components :{
      SectionJumbo,
      CardConsultation,
      SectionBrand
    },
    data() {
      return {
        consulArr : '',
      }
    },
    created() {
      this.consulArr = consultation;
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';

  .jumbo {
    background-image: url('../assets/marketing-intro.jpg');
    background-position: center;
    background-size: cover;
    padding-top:110px;
  }
  .container-consultation {
    display: flex;
    height: 100%;
    align-items: center;
  }
</style>