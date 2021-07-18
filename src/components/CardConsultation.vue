<template>
  <div class="box-text">
    <div class="box-text-inside">
        <div>
            <div>
                <span></span>
            </div>
            <span class="icon-description">
                {{oggettoConsul.icon.icontext}}
            </span>
            </div>
            <h2>{{oggettoConsul.title}}</h2>
            <p>{{oggettoConsul.textCard}}</p>
            <button class="button-orange">get a consultation</button>
        </div>
  </div>
</template>

<script>
export default {
    name :'CardConsultation',
    props :['oggettoConsul']
}
</script>

<style lang="scss" scoped>
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';

</style>