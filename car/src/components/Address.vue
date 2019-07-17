<template>
<div class="address">
    <div class="province">
        <div class="location">
            <p>自动定位</p>
            <span>北京</span>
        </div>
        <div class="list">
            <p>省市</p>
            <ul>
                <li v-for="item in provinceList" :key="item.CityID" @click="showCity(item.CityID)">
                    {{item.CityName}}
                </li>
            </ul>
        </div>
    </div>
    <div class="city-box" @click="hideCity" v-show="flag">     
    </div>
    <div :class="['city',flag?'active':'']">
        <ul class="city-list">
            <li v-for="item in cityList" :key="item.CityID" @click="checkedFn(item)">{{item.CityName}}</li>
        </ul>
    </div>
</div>
    
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';

export default {
    data(){
        return {
            flag: false
        }
    },
    props: {
        getAddress:{
            type: Function,
            default: ()=>{}
        }
    },
    methods: {
        ...mapActions({
            getProvince: 'quotation/getProvince',
            getCity: 'quotation/getCity'
        }),
        showCity(City_id:any){
            this.flag = true;
            this.getCity({provinceid: City_id})
        },
        hideCity(){
            this.flag = false;
        },
        checkedFn(item:Object){
            this.getAddress(item);
            this.flag = false;
        }
    },
    created(){
        this.getProvince()
    },
    computed: {
        ...mapState({
            provinceList: (state:any) => state.quotation.provinceList,
            cityList: (state:any) => state.quotation.cityList
        })
    }
}
</script>
<style scoped lang="scss">
.address{
    width: 100%;
    height:100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    background: #fff;
    .province{
        width:100%;
        height:100%;      
        overflow-y: scroll;
        .location{
            p{
                height: .3rem;
                line-height: .3rem;
                font-size: .12rem;
                padding-left: .1rem;
                background: #f4f4f4;
            }
            span{
                padding-left: .2rem;
                font-size: .14rem;
                height: .4rem;
                line-height: .4rem;
                background: #fff;
            }
        }
        .list{
            p{
                height: .3rem;
                line-height: .3rem;
                font-size: .12rem;
                padding-left: .1rem;
                background: #f4f4f4;
            }
            li{
                padding-left: .15rem;
                font-size: .14rem;
                height: .4rem;
                line-height: .4rem;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                margin-left: .05rem;
                position: relative;
                &:after{
                    content: "";
                    display: inline-block;
                    padding-top: .08rem;
                    padding-right: .08rem;
                    border-top: 1px solid #999;
                    border-right: 1px solid #999;
                    transform: rotate(45deg);
                    position: absolute;
                    right: .16rem;
                    top: .16rem;
                }
            }
        }
    }
    .city-box{
        width:100%;
        height:100%;
        background: rgba(0,0,0,.5);
        position: absolute;
        top:0;
        left: 0;
        z-index: 100;   
    }
    .city{
        width:70%;
        height:100%;
        background: #fff;
        position: fixed;
        z-index: 102; 
        top:0;
        right:-70%;  
        &.active{
            transition: all 0.5s ;
            right:0;
        }
        .city-list{
            height: 100%;
            overflow-y: scroll;
            background: #fff;
            li{
                padding-left: .15rem;
                font-size: .14rem;
                height: .4rem;
                line-height: .4rem;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                margin-left: .05rem;
            }
        }
    }
        
}
</style>