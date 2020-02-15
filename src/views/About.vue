<template>
    <div class="about">
        <img style="width: 200px; height: 360px" v-if="dataURL" :src="dataURL"/>
        <div v-else ref="courseInfo" class="img">
            <img style="width: 10rem; height: 10rem;" src="../assets/favicon.png"/>
            <span class="text">
                这是我的头像
            </span>
            <p class="scan">长按识别二维码</p>
            <qrcode class="qr_code" value="www.baidu.com" :options="{ size: 65 }"></qrcode>
        </div>
        <van-button type="info" size="small" @click="toImage()">{{ dataURL ? '返回' : '生成海报'}}</van-button>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Vue from 'vue';
    import {Button} from 'vant';
    import html2canvas from 'html2canvas';
    import QRcode from '@xkeshi/vue-qrcode';

    Vue.use(Button);

    export default {
        name: 'About',
        components: {
            qrcode : QRcode
        },
        data() {
            return {
                dataURL: ''
            };
        },
        methods: {
            toImage() {
                if (this.dataURL) {
                    this.dataURL = '';
                } else {
                    html2canvas(this.$refs.courseInfo, {
                        backgroundColor: null
                    }).then((canvas) => {
                        const dataURL = canvas.toDataURL('assets/png');
                        this.dataURL = dataURL;
                    });
                }
            }
        }
    };
</script>

<style lang="scss">
    .about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;

        .img {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;

            .text {
                margin-top: 20px;
            }
        }
    }
</style>
