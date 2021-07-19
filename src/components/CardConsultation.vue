<template>
  <div class="box-text">
    <div class="box-text-inside">
        <div>
            <div class="box-icon-all">
                <div class="box-icon box-icon-in" :style="'background-color : ' + oggettoConsul.icon.color">
                    <i></i>
                </div>
                <span class="icon-description">
                    {{oggettoConsul.icon.icontext}}
                </span>
            </div>
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

    button {
        font-size: $font-size-2;
    }

</style>