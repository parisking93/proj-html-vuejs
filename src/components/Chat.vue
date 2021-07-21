<template>
    <div class="box-chat">
        <div class="relative">
            <div class="box-img-chat font-center">
                <i class="color-icon fas fa-comments"></i>
            </div>
            <div class="chat-window absolute border-r">
                <header class="header-chat">
                    <div class="box-ichat">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h5 class=" title-chat">Live Chat</h5>
                    <div class="box-for-close">
                        <i class="min-chat fas fa-minus"></i>
                        <i class="chiudi fas fa-times"></i>
                    </div>
                </header>
                <div class="box-text-chat w-100">
                        <label for="email" class="description-chat">Email</label>
                        <input id="email" type="text" placeholder="Inserisci la tua email">
                        <label for="text-area-chat">Come posso aiutarti?</label>
                        <textarea id="text-area-chat" name="email" cols="33" rows="7" placeholder="Inserisci il tuo Messaggio...." required></textarea>
                </div>
                <div class="box-button">
                     <button class="button-orange-small">Start Chat</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Chat'
}
</script>

<style lang="scss">
    @import '@/styles/flex.scss';
    @import '@/styles/buttons.scss';
    @import '@/styles/input.scss';

    .box-chat {
        height: 60px;
        width: 60px;
        position: fixed;
        z-index : 1000;
        bottom: 2vw;
        right: 2vw;
        background-color: $orangeLight;
        font-size: $font-size-5;
        border-radius: 50%;
        @include flex-center-center;
        cursor: pointer;
        .color-icon {
            color: $white;
        }
        .chat-window {
            background-color: $white;
            top: 0;
            left: 0;
            transform:translate(-100%,-90%);
            overflow: hidden;
            display: none;
            .header-chat {
                @include flex-space;
                color: $white;
                background-color: $orangeLight;
                font-size: $font-size-3;
                padding: 5px ;
                h5 {
                    margin-left: $margin-9;
                }
                .box-for-close {
                    i {
                        margin: 0 5px;
                    }
                }

            }
            .box-text-chat {
                padding :$padding-same;
                label {
                    font-size: $font-size-1;
                }
                input {
                    @include inputStandard(0.3rem, 5px,100%);
                    padding-left: $padding-same;
                }
                textarea {
                    border: 1px solid #e3e4e2;
                    padding: $padding-same;
                }
            }
        }
        .box-button {
            @include flex-to-end;
            padding: $padding-same;
        }


    }

</style>