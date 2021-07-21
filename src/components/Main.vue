<template>
  <div class="overflow-hidden" id="main-page">
        <section class="jumbo section-jumbo">
          <SectionJumbo/>
        </section>
        <!-- 3 sezioni uguali  -->
        <section class="section100 padding-section" v-for="section,index in consulArr" :key="index">
          <div class="container container-consultation" v-if="index % 2 == 0">
            <div class="box-image" data-aos-duration="1200" data-aos="zoom-in-right" data-aos-easing="ease-in-out">
              <img class="box-image-inside" :src="require('@/assets/svg/img'+ (index + 1) +'.svg')" :alt="section.icon.icontext">
            </div>
            <CardConsultation :oggettoConsul="section" data-aos-delay="300" data-aos-duration="1200" data-aos="fade-left" data-aos-easing="ease-in-out"/>
          </div>
          <div class="container container-consultation" v-else>
            <CardConsultation :oggettoConsul="section" data-aos-delay="300" data-aos-duration="1200" data-aos="fade-right" data-aos-easing="ease-in-out"/>
            <div class="box-image" data-aos-duration="1200" data-aos="zoom-in-left" data-aos-easing="ease-in-out">
              <img class="box-image-inside" :src="require('@/assets/svg/img'+ (index + 1) +'.svg')" :alt="section.icon.icontext">
            </div>
          </div>
        </section>
        <!-- fine 3 section uguali -->

        <section class="padding-section">
          <SectionBrand/>
        </section>

        <section class="trusted padding-section">
          <div class="container" >
            <h2 class="text-align-center title-section">Trusted by Leading Organisations</h2>
            <div class="row">
              <div class="col padding-col" v-for="element,index in advantagesArr" :key="index" data-aos-delay="300" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <CardPhotoCol :elementArr="element"/>
                <div class="box-score">
                  <h2>{{element.attributeScore}}</h2>
                  <span>{{element.description}}</span>
                </div>
              </div>
            </div>
            <div class="box-button" data-aos="fade-down" data-aos-delay="600" data-aos-easing="linear" data-aos-duration="1200">
              <button class="button-orange">read more case studies</button>
            </div>
          </div>
        </section >

        <!-- SECTION BOOST  -->
        <section class='padding-section section-boost'>
          <div class="container container-boost">
            <div class="box-text">
              <div class="box-text-inside" data-aos-delay="300" data-aos-duration="1500" data-aos="fade-right">
                <h2>We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential.</h2>
                <p>Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet pellentesque sem neque eget.</p>
                <button class="button-orange">why work  with us</button>
              </div>
            </div>
            <div class="box-image" data-aos-duration="1200" data-aos="zoom-in-right">
              <img src="@/assets/we-boost-our-clients.jpg" class="box-image-inside border-r">
            </div>
          </div>
          <div class="container padding-inside-section">
            <Property/>
          </div>
          <div class="container">
            <h3 class="aware-title w-100 text-align-center">Aware</h3>
            <div class="row">
              <div class="col m-1" v-for="aware, index in awaresArr" :key="index">
                <CardAware :trophy="aware" data-aos-easing="ease-in-out" data-aos="fade" data-aos-delay="1000" data-aos-duration="1800"/>
              </div>
            </div>
          </div>
          <div class="container container-boost padding-inside-section-top">
            <div class="box-image" data-aos-easing="ease-in-out" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500">
              <img src="@/assets/large-testimonial.jpg" class="box-image-inside border-r">
            </div>
            <div class="box-text">
              <div class="box-text-inside">
                <h3 class="paragraph" data-aos-easing="ease-in-out" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500">“The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”</h3>
                <div class="box-name-writer" data-aos-easing="ease-in-out" data-aos="fade-left" data-aos-delay="900" data-aos-duration="1500">
                  <h4>Kate Schadler</h4>
                  <span>Marketing Consultant – Abstract</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        <!-- FINE SECTION BOOST INIZIO SECTION RESOURCES  -->

        <section class="section-resources padding-section">
          <div class="container container-resources">
            <div class="box-text" data-aos-easing="ease-in-out" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500">
              <h2 >Marketing Resources: Insider Advice on How to Increase Online Sales</h2>
            </div>
            <div class="box-text box-resources relative" data-aos-easing="ease-in-out" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1500">
              <button class="button-orange absolute">explore all resources</button>
            </div>
          </div>
          <div class="container container-resources padding-inside-section-top" data-aos-easing="ease-in-out" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1500">
            <div class="col padding-col" v-for="element,index in resourceArr" :key="index">
              <CardPhotoCol :elementArr="element"/>
            </div>
          </div>
        </section>
        <!-- FINE SECTION RESOURCES INIZIO SECTION make-thing-happen -->

        <section class="section-make-thing-happen padding-section section100">
          <div class="container container-section-make-thing-happen">
            <div class="box-text box-end-main">
              <h1 data-aos-easing="ease-in-out" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500">Let’s Make Things Happen</h1>
              <p class="p-bigger" data-aos-easing="ease-in-out" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1500">Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
              <div class="line" data-aos-easing="ease-in-out" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1500"></div>
              <p class="cursive" data-aos-easing="ease-in-out" data-aos="fade-right" data-aos-delay="900" data-aos-duration="1500">“The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”</p>
              <div class="box-name-writer" data-aos-easing="ease-in-out" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1500">
                <h4>Kate Schadler</h4>
                <span>Marketing Consultant – Abstract</span>
              </div>
            </div>
            <div class="box-card box-card-make-thing-happen">
              <CardCallBack class="card"/>
            </div>
          </div>
        </section>
        
  </div>
</template>

<script>
import {consultation} from '../arrayJs/consultationArr';
import {advantages} from '../arrayJs/advantagesArr';
import {awarelist} from '../arrayJs/awareArr.js';
import {resources} from '../arrayJs/rsourcesArr.js';



import SectionJumbo from '@/components/SectionJumbo.vue';
import CardConsultation from '@/components/CardConsultation.vue';
import SectionBrand from '@/components/SectionBrand.vue';
import CardPhotoCol from '@/components/CardPhotoCol.vue';
import Property from '@/components/Property.vue';
import CardAware from '@/components/CardAware.vue';
import CardCallBack from '@/components/CardCallBack.vue';







export default {
    name: 'Main',
    components :{
      SectionJumbo,
      CardConsultation,
      SectionBrand,
      CardPhotoCol,
      Property,
      CardAware,
      CardCallBack
    },
    data() {
      return {
        consulArr : '',
        advantagesArr : '',
        awaresArr : '',
        risourceArr : ''

      }
    },
    created() {
      this.consulArr = consultation;
      this.advantagesArr = advantages;
      this.awaresArr = awarelist;
      this.resourceArr = resources;

    },
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
    padding-top: $padding-same-mini-huge;
    button {
      font-size: $font-size-2;
    }
  }
  // fine sezione trusted
  //container boost
  .section-boost {
    background: linear-gradient(to bottom,rgba($color: $whiteDark, $alpha: 0.8), transparent );
    .container-boost {
      @include flex-align-center;
      button {
        font-size: $font-size-2;

      }
      .paragraph {
      font-size: $font-size-5;
      width: 80%;
      margin: $margin-upDown-medium;
      }
    }
    .aware-title {
      font-size: $font-size-5;
    }

  }
  // fine container boos
  // section resources 
  .section-resources {
    background-color: $whiteDark;
    .container-resources {
      display: flex;
      .box-resources {

        button {
          font-size: $font-size-2;
          margin: $margin-9;
          right: 0;
          bottom: 0;

        }
      }

    }
  }
  // fine section resources 
  // inizio section section-make-thing-happen
  .section-make-thing-happen{
    background-color: $dark;
    color: $white;
    .container-section-make-thing-happen {
      @include flex-align-center;
      .box-end-main {
        padding: $margin-rightLeft-huge;
        p {
          padding: $padding-upDown-small;
          }
      }
      .box-card-make-thing-happen{
        padding: $margin-rightLeft-huge ;
      }
    }
  }
  // fine section make-thing-happen

</style>