<template>
  <div>
        <FooterUp/>
        <FooterDown/>
  </div>
</template>

<script>
import FooterUp from '@/components/FooterUp.vue'
import FooterDown from '@/components/FooterDown.vue'

export default {
    name:'Footer',
    components : {
        FooterUp,
        FooterDown
    }
}
</script>

<style>

</style>