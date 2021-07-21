<template>
  <div class="container container-brand h-100">
        <h2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">some brands we work with</h2>
        <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">Quisque aliquet, libero consequat elementum convallis.</p>
        <div class="box-brand padding-updown-content w-100">
            <div class="box-brand-in" v-for="brand,index in brandsArray" :key="index">
                <img  :src="require('@/assets/brands/' + brand + '.png')" :alt="brand">
            </div>
        </div>
        <div class="padding-updown-content w-100">
            <CardCallBackHorizontal/>
        </div>
    </div>
</template>

<script>
import CardCallBackHorizontal from '@/components/CardCallBackHorizontal.vue'
export default {
    name : 'SectionBrand',
    components : {
        CardCallBackHorizontal
    },
    data() {
        return {
            brandsArray : ['abstract','cglobal', 'digitalbox', 'hemisferio', 'next', 'spaces']
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';
    .container-brand {
        @include flex-column-center;       
        .box-brand {
        @include flex-space-center;
        .box-brand-in {
            width: calc(100% / 6);
            text-align: center;
        }
        img {
            width: 75%;
        }
    }
    }
    
</style>