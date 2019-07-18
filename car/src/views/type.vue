<template>
    <div class="type">
        <p @click="clickRoute('全部车款',cid,'all')">全部车款</p>
        <div class="color-box">
            <p class="c-type">
                <span  v-for="(item,index) in yearList" :key="item" @click="tab(index+1)" :class="index+1==ind?'active':''">{{item}}</span>
            </p>
            <div class="list" v-for="(item,key,index) in getAllData" :key="index">
                <p>{{key}}</p>
                <ul >
                    <li v-for="(val) in item" :key="val.car_id" @click="clickRoute(val.market_attribute.year+'款'+val.car_name,val,'item')">
                        <P class="top">
                            <span>{{val.market_attribute.year}}款{{val.car_name}}</span>
                            <span>{{val.market_attribute.dealer_price_min}}万起</span>
                        </P>
                        <p class="bom">
                            <span>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</span>
                            <span>指导价 {{val.market_attribute.dealer_price_max}}万</span>
                        </p>
                    </li>
                </ul>
            </div>           
        </div>
    </div>
</template>

<script lang="ts">
import { mapState , mapMutations, mapActions} from 'vuex';

export default {
    data(){
        return {
            ind:1
        }
    },
    computed: {
        ...mapState({
            getAllData: (state:any)=>state.index.getAllData,
            yearList: (state:any)=>state.index.list.slice(1),
            cid:(state:any)=>state.index.cid
        })
    },
    watch: {
        getAllData(val){
            console.log("val00...",val)
        }
    },
    created(){
        console.log("0123456")
        this.indx(this.ind)
    },
    methods:{
        ...mapActions({
            getItemType:'image/getItemType'
        }),
        ...mapMutations({
            indx:'index/getIndex'
        }),
        tab(index){
            console.log(index)
            this.ind=index
            this.indx(index)
        },
        clickRoute(name:any,item:any,type:any){
                sessionStorage.setItem('data',JSON.stringify({name:name,data:item}))
                let data = JSON.parse(sessionStorage.getItem('data'))
                let SerialID = this.$route.query.SerialID
                this.$router.push({path:'/image',query:{SerialID}})
            if(type=='item'){
                this.getItemType({SerialID:this.$route.query.SerialID,CarID:data.data.car_id})
            }else{
                this.getItemType({SerialID:this.$route.query.SerialID})
            }
        }
    }
}
</script>
<style scoped  lang="scss">
    .type{
        width: 100%;
        height:100%;
        background: #f4f4f4;
        overflow-y: scroll;
        >p{
            margin: .08rem 0;
            font-size: .17rem;
            color: #00afff;
            background: #fff;
            text-align: center;
            line-height: .4rem;
            height: .4rem;
        }
        .color-box{
            .c-type{
                margin-top: .08rem;
                padding-left: .15rem;
                font-size: .15rem;
                line-height: .4rem;
                height: .4rem;
                background: #fff;
                overflow-x: scroll;
                span{
                    padding-right: .2rem;
                }
                .active{
                    color: #00afff;
                }
            }
            .list{
                >p{
                    height: 0.3rem;
                    line-height: 0.3rem; 
                    padding-left: 0.15rem;
                    font-size: 0.12rem;
                }
                ul{
                    background: #fff;
                    li{
                        margin: 0 .1rem;
                        padding: .14rem .03rem;
                        border-bottom: 1px solid #eee;
                        box-sizing: border-box;
                        height: 0.65rem;
                        line-height: 1; 
                        p{
                            font-size: .15rem;
                            &.bom{
                                padding-top: .08rem;
                                font-size: .12rem;
                                span{
                                    &:nth-child(1){
                                        color: #b3b3b3; 
                                    } 
                                    &:nth-child(2){
                                        color: #818181;
                                        float: right;
                                    } 
                                }
                            }
                            &.top{
                                span{
                                    &:nth-child(1){
                                        width: 2.5rem;
                                        display: inline-block;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        white-space: nowrap;  
                                    } 
                                    &:nth-child(2){
                                        float: right;
                                        color: red;
                                        font-size: .13rem;
                                    }  
                                }
                            }
                        }
                    }
                }
            }  
        }
    }
</style>