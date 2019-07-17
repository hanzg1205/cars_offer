<template>
    <div class="quotation">
        <header>
            <p>可向多个商家咨询最低价，商家及时回复</p>
            <img src="img/icon-help.png" alt="">
        </header>
        <div class="content">
            <div class="q-info" v-if="quotationDetails.serial">
                <img :src="quotationDetails.serial.Picture" alt="">
                <div class="flex-column">
                    <p>{{quotationDetails.serial.AliasName}}</p>
                    <p>{{quotationDetails.market_attribute.year}}款 {{quotationDetails.car_name}}</p>
                </div>
            </div>
            <div class="self-info">
                <p class="tip">个人信息</p>
                <ul>
                    <li>
                        <span>姓名</span>
                        <input type="text" placeholder="输入你的真实中文姓名" maxlength="4">
                    </li>
                    <li>
                        <span>手机</span>
                        <input type="tel" placeholder="输入你的真实手机号码" maxlength="11">
                    </li>
                    <li>
                        <span>城市</span>
                        <span @click="goAddress">{{address}}</span>
                    </li>
                </ul>
                <div class="quotation-btn">
                    <button>询最低价</button>
                </div>
            </div>
            <DealerInfo :dealerList="dealerList"/>
            <Address v-if="addressFlag" :getAddress="getAddress"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DealerInfo from "@/components/DealerInfo.vue";
import Address from "@/components/Address.vue";
import { mapActions, mapState } from 'vuex';
export default Vue.extend({
    data(){
        return {
            addressFlag: false,
            address: '北京'
        }
    },
    components: {
        DealerInfo,
        Address
    },
    methods: {
        ...mapActions({
            getQuotation: 'quotation/getDealer'
        }),
        goAddress(){
           this.addressFlag = true; 
        },
        getData(params:Object){
            this.getQuotation(params);
        },
        getAddress(params:Object){
            this.addressFlag = false;
            console.log('params...000',params);
            this.address = params.CityName;
            let car_id = this.$route.query.id;
            this.getData({
                carId: car_id,
                cityId: params.CityID
            })
        }
    },
    computed: {
        ...mapState({
            quotationDetails:(state:any) => state.quotation.quotationDetails,
            dealerList: (state:any) => state.quotation.dealerList
        })
    },
    created(){
        let car_id = this.$route.query.id;
        this.getData({
            carId: car_id,
            cityId: 201
        })
    }
})
</script>
<style scoped  lang="scss">
    .quotation{
        display: flex;
        flex-direction: column;
        height:100%;
        header{
            height: .3rem;
            line-height: .3rem;
            width: 100%;
            background: #79cd92;
            text-align: center;
            p{
                color: #fff;
                font-size: .15rem;
                display: inline-block;
            }
            img{
                width: .15rem;
                margin-left: .05rem;
                vertical-align: -9%;
            }
        }
        .content{
            flex: 1;
            background: #f4f4f4;
            overflow-y: scroll;
            .q-info{
                background: #fff;
                padding: .16rem .09rem .12rem;
                position: relative;
                height: 1rem;
                display: flex;
                &:before{
                    content: "";
                    display: inline-block;
                    padding-top: .08rem;
                    padding-right: .08rem;
                    border-top: 2px solid #ccc;
                    border-right: 2px solid #ccc;
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                    position: absolute;
                    right: .13rem;
                    top: 0.45rem;
                }
                img{
                    width: 1.2rem;
                    height: 0.7rem;
                    border: 1px solid #eee;
                    border-radius: 0.05rem;
                }
                .flex-column{
                    margin-left: .1rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    p{
                        line-height: 1;
                        font-size: .18rem;
                        &:nth-child(2){
                            margin-top: .13rem;
                            font-size: .16rem;
                            line-height: 1.4;
                            color: #333;
                            padding-right: 0.1rem;
                        }
                    }
                }
            }
            .self-info{
                .tip{
                    padding: 0 .1rem;
                    height: .3rem;
                    line-height: .3rem;
                    font-size: .12rem;
                    color: #666;
                    background: #eee;
                }
                ul{
                    background: #fff;
                    padding: 0 .1rem;
                    li{
                        font-size: .16rem;
                        height: .44rem;
                        line-height: .44rem;
                        border-bottom: 1px solid #eee;
                        color: #000;
                        input{
                            font-size: .16rem;
                            padding-right: .1rem;
                            width: 88%;
                            text-align: right;
                            color: #555;
                        }
                        span:nth-child(2){
                            display: inline-block;
                            width: 88%;
                            color: #555;
                            text-align: right;
                            &:after{
                                content: "";
                                display: inline-block;
                                padding-top: .08rem;
                                padding-right: .08rem;
                                border-top: 1px solid silver;
                                border-right: 1px solid silver;
                                -webkit-transform: rotate(45deg);
                                transform: rotate(45deg);
                            }
                        }
                    }
                }
                .quotation-btn{
                    background: #fff;
                    text-align: center;
                    padding-top: .15rem;
                    padding-bottom: .14rem;
                    button{
                        font-size: .16rem;
                        color: #fff;
                        width: 80%;
                        background: #3aacff;
                        height: .35rem;
                        border-radius: .05rem;
                    }
                }
            }
        }
    }
</style>