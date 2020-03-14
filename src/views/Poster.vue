<template>
    <div class="content">
        <div class="log">
            <img class="log-img" src="../assets/logo.png"/>
        </div>
        <div class="title">
            恒颜清透遮瑕透亮
        </div>
        <div class="sub-title">
            <div class="line"></div>
            <div class="sub-title-content">减龄粉底课程</div>
            <div class="line"></div>
        </div>
        <div class="time">
            2月17日 上午10点-10点40
        </div>
        <div class="card">
            <div class="card-item">
                <div class="card-info">
                    <div class="name">
                        <img class="card-img" src="../assets/favicon.png"/>
                        <div class="card-title">
                            2020届红松课堂班级群
                        </div>
                    </div>
                    <qrcode class="qr-code" size="150" value="https://vux.li?x-page=demo_qrcode"></qrcode>
                    <div class="qr-code-safe">
                        本二维码已通过安全验证
                    </div>
                    <div class="qr-code-tip">
                        长按识别二维码入群
                    </div>
                </div>
                <div class="card-tip">
                    已有<span class="number">163</span>位学员加入
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Qrcode} from 'vux';
    import {WxAuthority} from '../service/wx-authority';

    export default {
        name: 'Poster',
        components: {
            Qrcode
        },
        beforeCreate() {
            const deliveryAsn = this.$route.query;
            console.log(deliveryAsn);

            this.$http.get('https://douban.uieee.com/v2/movie/in_theaters').then(({data}) => {
                const wxAuthority = new WxAuthority();
                wxAuthority.getWxSnsapiUserinfo();
                console.log(data);
            });
        }
    };
</script>

<style lang="scss" scoped>
    .content {
        background-color: #FFECD8;
        height: 100%;
        padding: 17px 50px 50px 50px;

        .log {
            display: flex;

            .log-img {
                width: 439px;
                height: 82px;
            }
        }

        .title {
            height: 125px;
            font-size: 81px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: rgba(117, 62, 39, 1);
            margin-top: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sub-title {
            display: flex;
            justify-content: center;
            align-items: center;

            .line {
                width: 163px;
                height: 2px;
                background-color: #753E27;
            }

            .sub-title-content {
                /*width:300px;*/
                height: 85px;
                font-size: 44px;
                font-family: SourceHanSansCN-Bold, SourceHanSansCN;
                font-weight: bold;
                color: rgba(65, 32, 32, 1);
                line-height: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 24px;
            }
        }

        .time {
            height: 40px;
            font-size: 40px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: rgba(179, 72, 72, 1);
            line-height: 60px;
        }
        .card {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 26px;

            .card-item {
                width: 632px;
                height: 801px;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.23);
                border-radius: 14px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;

                .card-info {
                    padding: 30px;
                    width: 100%;
                    box-sizing: border-box;

                    .name {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        .card-img {
                            width: 129px;
                            height: 129px;
                        }

                        .card-title {
                            margin-left: 35px;
                            height: 33px;
                            font-size: 33px;
                            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
                            font-weight: 500;
                            color: rgba(89, 89, 89, 1);
                            line-height: 50px;
                        }
                    }

                    .qr-code {
                        margin-top: 30px;
                    }

                    .qr-code-safe {
                        height:33px;
                        font-size:33px;
                        font-family:SourceHanSansCN-Medium,SourceHanSansCN;
                        font-weight:500;
                        color:rgba(97,215,48,1);
                        line-height:50px;
                        margin-top: 28px;
                    }

                    .qr-code-tip {
                        height:40px;
                        font-size:40px;
                        font-family:SourceHanSansCN-Medium,SourceHanSansCN;
                        font-weight:500;
                        color:rgba(121,121,121,1);
                        line-height:60px;
                        margin-top: 17px;
                    }
                }

                .card-tip {
                    width: 100%;
                    height: 140px;
                    background: rgba(255, 243, 229, 1);
                    border-radius: 0px 0px 14px 14px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 40px;
                    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                    color: rgba(121, 121, 121, 1);

                    .number {
                        font-family: SourceHanSansCN-Heavy, SourceHanSansCN;
                        font-weight: 800;
                        color: rgba(179, 72, 72, 1);
                        padding: 0 10px;
                    }
                }
            }
        }
    }
</style>
