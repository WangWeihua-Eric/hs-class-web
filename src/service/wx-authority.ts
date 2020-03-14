import {$vue} from "@/main";
import {WxSnsapiUserinfoData} from "@/data/wx-snsapi-userinfo-data";
import {Dictionary} from "vue-router/types/router";

/**
 * 单例模式
 */
let wxAuthority: WxAuthority | null = null;

/**
 * 获取微信用户信息服务
 */
export class WxAuthority {

    constructor() {
        if (wxAuthority) {
            return wxAuthority;
        } else {
            wxAuthority = this;
        }
    }

    getWxSnsapiUserinfo(): void {
        const deliveryAsn = $vue.$route.query;
        if (deliveryAsn.code) {
            console.log(deliveryAsn.code);
        }
    }
}