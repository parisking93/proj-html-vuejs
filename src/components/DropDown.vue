<template>
    <div class="drop-down">
        <div class="sub-drop-down">
            <ul class="drop-down-list"  v-for="sublinks, number in links" :key="number">
                <template v-if="sublinks.icon != '' ">
                <li>
                    <div class="box-icon box-icon-nav" :style="'background-color : ' + sublinks.iconColor">
                        <i :class="sublinks.icon"></i>
                    </div>
                    <h3>{{sublinks.title}}</h3>
                    <span>{{sublinks.text}}</span>
                </li>
                </template>
                <template v-else>
                    <li><h3 class="h-solo">{{sublinks.title}}</h3></li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : 'DropDown',
    props : ['sublink','show'],
    data() {
        return {
            links : ''
        }

    },
    created() {
        this.links = this.sublink;
    }

}
</script>

<style lang="scss">
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';
    .drop-down {
        bottom: -10px;
        left : 0;
        transform: translate(0,100%);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 24px 32px -6px rgba(0,0,0,0.1);
        .sub-drop-down {
            padding: $padding-same-medium;
            display: flex;
            background: $white;

            .drop-down-list {
                width: 20vw;
                min-width: 220px;
                max-width: 300px;
                .box-icon-nav {
                    margin: $margin-upDown-small;
                }
                h3 {
                    font-size: $font-size-3;
                    margin: $margin-upDown-small;
                }
                .h-solo {
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }

</style>