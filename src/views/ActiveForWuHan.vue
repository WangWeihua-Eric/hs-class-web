<template>
    <div class="content">
        <div class="title">
            圣馨家园小区出入证
        </div>
        <div class="card-info">
            <div></div>
            <div class="info-right">
                <div class="info-item">
                    <div>姓<span class="info-text">名：</span></div>
                    <div class="bottom-line-1"></div>
                </div>
                <div class="info-item">
                    <div>房间号：</div>
                    <div class="bottom-line-2"></div>
                </div>
                <div class="info-item">
                    <div>户籍所在地：</div>
                    <div class="bottom-line-3"></div>
                </div>
                <div class="info-item">
                    <div>身份证号码：</div>
                    <div class="bottom-line-4"></div>
                </div>
                <div class="info-item">
                    <div>联系电话：</div>
                    <div class="bottom-line-5"></div>
                </div>
                <div class="info-item">
                    <div>编号：</div>
                    <div class="bottom-line-6"></div>
                </div>
            </div>
        </div>
        <div class="hidden-content"></div>
        <img class="zhang" src="../assets/zhang.png"/>
    </div>
</template>

<script>
    export default {
        name: "ActiveForWuHan"
    }
</script>

<style scoped>
    .content {
        width: 300px;
        height: 200px;
        background-color: rgb(72, 132, 80);
        position: relative;
    }
    .title {
        color: rgb(16, 23, 16);
        font-size: 20px;
        font-weight: 800;
        box-sizing: border-box;
        padding-top: 20px;
        letter-spacing: 3px;
    }
    .card-info {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .info-right {
        width: 200px;
    }
    .info-item {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        color: rgb(16, 23, 16);
        font-size: 12px;
        font-weight: 900;
        margin-top: 4px;
    }
    .info-text {
        margin-left: 12px;
    }
    .bottom-line-1 {
        width: 130px;
        border-bottom: 1px solid rgb(16, 23, 16);
    }
    .bottom-line-2 {
        width: 130px;
        border-bottom: 1px solid rgb(16, 23, 16);
    }
    .bottom-line-3 {
        width: 120px;
        border-bottom: 1px solid rgb(16, 23, 16);
    }
    .bottom-line-4 {
        width: 120px;
        border-bottom: 1px solid rgb(16, 23, 16);
    }
    .bottom-line-5 {
        width: 120px;
        border-bottom: 1px solid rgb(16, 23, 16);
    }
    .bottom-line-6 {
        width: 140px;
        border-bottom: 1px solid rgb(16, 23, 16);
    }
    .hidden-content {
        background-color: rgb(72, 132, 80);
        height: 100%;
        width: 33px;
        position: absolute;
        top: 0;
        right: 0;
    }
    .zhang {
        position: absolute;
        bottom: 20px;
        right: 10px;
        width: 120px;
        height: 120px;
        opacity: 0.9;
        transform: rotate(-10deg);
    }
</style>