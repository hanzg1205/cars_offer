<template>
    <div class="list_box">
        <div class="list_item" v-for="(item,index) in data" :key="index">
            <p class="title">{{item[0].exhaust_str}}\{{item[0].max_power_str}}{{item.inhale_type}}</p>
            <div class="text_box" v-for="(item,index) in item" :key="index">
                <p class="text_title">{{item.market_attribute.year}}款 {{item.car_name}}</p>
                <p class="text_type">{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</p>
                <p class="text_pirce"><span class="pirce_Pirce">指导价{{item.market_attribute.dealer_price_max}}</span><span class="All_Pirce">{{item.market_attribute.dealer_price_min}}</span></p>
                <li class="buttom" @click="goQuotation(item.car_id)">询问低价</li>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        props:['data'],
        created(){
            console.log(this.data)
        },
        methods:{
          goQuotation(id:any){
            this.$router.push({path:'/quotation',query:{id:id}})
          }
        }
    })
</script>

<style scoped lang="scss">
.list_box{
    width: 100%;
    height: auto;
    // border-bottom:solid #ccc .5rem;
}
.list_item{
    width: 100%;
    height: auto;
    background: #fff;
    .title{
      width: 100%;
      background: #f4f4f4;
      padding:.05rem .1rem;
      color: #999;
    }
    .text_box{
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      border-bottom:solid #eee .1rem;
      &:last-child{
          border-bottom:none;
      }
      p{
        width: 100%;
        text-indent: .12rem;
      }
      .text_title{
        padding: .13rem 0;
      }
      .text_type{
        color:#ccc;
      }
      .text_pirce{
        text-align: right;
        padding-bottom: .1rem ;
        .pirce_Pirce{
          font-size: .13rem;
          color: #818181;
        }
        .All_Pirce{
          font-size: .16rem;
          color:#FF0000;
          padding-right: .1rem;
          margin-left: .08rem;
        }
      }
      .buttom{
        width: 100%;
        padding: .12rem 0;
        text-align: center;
        border-top:solid #ccc .01rem;
        font-size: .18rem;
        color:#00afff;
      }
    }
  }
</style>

