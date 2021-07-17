<template>
  <div>
        <section class="jumbo">
          <SectionTxtImg/>
            <!-- componente cardtesto
            componente cardimg -->
        </section>
        <section>
        <!-- componente cardimg --> 
        <!-- componente cardtesto -->
        </section>
        <!-- fine section da 1 a 4  -->

        <section class="trusted">
          <h2>title</h2>
          <!-- v-for 3  -->
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
import SectionTxtImg from '@/components/SectionTxtImg.vue'
export default {
    name: 'Main',
    components :{
      SectionTxtImg
    }
}
</script>

<style lang="scss" scoped>
  .jumbo {
    background-image: url('../assets/marketing-intro.jpg');
    background-position: center;
    background-size: cover;
    padding: 5rem  2rem;
  }

</style>