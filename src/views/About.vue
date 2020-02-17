<template>
    <div>
        <div v-show="!startTransfer" class="about">
            <div class="input-item">

                <group>
                    <x-input style="font-size: 15px" title="海报标题" v-model="title" placeholder="请输入海报标题"></x-input>
                    <x-input style="font-size: 15px" title="海报文案" v-model="content" placeholder="请输入海报标题"></x-input>
                    <x-input style="font-size: 15px" title="海报标题" v-model="description" placeholder="请输入海报标题"></x-input>
                    <x-input style="font-size: 15px" title="海报标题" v-model="nfrom" placeholder="请输入海报标题"></x-input>
                </group>
            </div>
            <x-button :gradients="['#1d88eb', '#1d88eb']" @click.native="toImage()">生成海报</x-button>
        </div>

        <div v-if="startTransfer">
            <div v-if="dataURL">
                <img style="width: 100%" :src="dataURL"/>
                <div style="padding: 10px">
                    <x-button :gradients="['#1d88eb', '#1d88eb']" @click.native="toImage()">返回重新生成</x-button>
                </div>
            </div>
            <div v-show="!dataURL">
                <div id="capture" class="img" style="width: 100%; height: 100%">
                    <img style="width: 100%;" :onload="imgOnload()" src="../assets/WechatIMG42.jpeg"/>
                    <qrcode class="qr-code" size="79" value="https://vux.li?x-page=demo_qrcode"></qrcode>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import html2canvas from 'html2canvas';
    import {XButton} from 'vux';
    import {XInput} from 'vux';
    import {Qrcode} from 'vux';

    export default {
        name: 'About',
        components: {
            XButton,
            XInput,
            Qrcode
        },
        data() {
            return {
                dataURL: '',
                title: '',
                content: '',
                description: '',
                nfrom: '',
                startTransfer: false,
                load: false
            };
        },
        watch: {
            load(newV) {
                if (newV) {
                    html2canvas(document.getElementById('capture')).then((canvas) => {
                        const dataURL = canvas.toDataURL('assets/png', 1.0);
                        this.dataURL = dataURL;
                    });
                }
            }
        },
        methods: {
            imgOnload() {
                setTimeout(() => {
                    this.load = true;
                }, 1000);
            },
            toImage() {
                if (this.dataURL) {
                    this.dataURL = '';
                    this.startTransfer = false;
                    this.load = false;
                } else {
                    this.startTransfer = true;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>

    span {
        width: 100px;
    }

    .about {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;

        .input-item {
            width: 100%;
            padding: 10px 0;
        }
    }

    .img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .qr-code {
            position: absolute;
            left: 44px;
            top: 1145px;

            .content {
                width: 150px;
                height: 150px
            }
        }
    }
</style>
