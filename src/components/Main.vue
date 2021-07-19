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

        <section class="padding-section">
          <SectionBrand/>
        </section>
        <section class="trusted padding-section">
          <div class="container">
            <h2 class="text-align-center title-section">Trusted by Leading Organisations</h2>
            <div class="row">
              <div class="col padding-col" v-for="element,index in advantagesArr" :key="index">
                <CardPhotoCol :elementArr="[element, index]"/>
                <div class="box-score">
                  <h2>{{element.attributeScore}}</h2>
                  <span>{{element.description}}</span>
                </div>
              </div>
            </div>
            <div class="box-button">
              <button class="button-orange">read more case studies</button>
            </div>
          </div>
        </section >
        <section class='padding-section'>
          <div class="container container-boost">
            <div class="box-text">
              <div class="box-text-inside">
                <h2>We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential.</h2>
                <p>Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet pellentesque sem neque eget.</p>
                <button class="button-orange">why work  with us</button>
              </div>
            </div>
            <div class="box-image">
              <img src="@/assets/we-boost-our-clients.jpg" class="box-image-inside">
            </div>
          </div>
          <div class="container padding-inside-section">
            <Property/>
          </div>
          
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
import {consultation} from '../arrayJs/consultationArr';
import {advantages} from '../arrayJs/advantagesArr';

import SectionJumbo from '@/components/SectionJumbo.vue';
import CardConsultation from '@/components/CardConsultation.vue';
import SectionBrand from '@/components/SectionBrand.vue';
import CardPhotoCol from '@/components/CardPhotoCol.vue';
import Property from '@/components/Property.vue';





export default {
    name: 'Main',
    components :{
      SectionJumbo,
      CardConsultation,
      SectionBrand,
      CardPhotoCol,
      Property
    },
    data() {
      return {
        consulArr : '',
        advantagesArr : ''
      }
    },
    created() {
      this.consulArr = consultation;
      this.advantagesArr = advantages;
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
  // per sezione trusted
  .title-section {
    padding-bottom: 4rem;
  }
  .padding-col {
    padding: 1rem;
  }
  .col {
    width: calc(100% / 3);
  }
  .box-score {
    border-top: 1px dashed $greyLight;
  }
  .box-button {
    @include flex-center;
    padding: $margin-upDown-mini-huge;
    button {
      font-size: $font-size-2;
    }
  }
  // fine sezione trusted
  .container-boost {
    @include flex-align-center;
    button {
      font-size: $font-size-2;

    }
  }
</style>