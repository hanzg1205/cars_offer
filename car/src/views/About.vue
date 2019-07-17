<template>
  <div class="wrap">
    <div class="top">
      <img :src="DetailData.CoverPhoto" alt="">
    </div>
    <div class="content">
      <div class="top_One" v-if="DetailData.market_attribute">
        <div class="content_top">
          <p>{{DetailData.market_attribute.dealer_price}}</p>
          <span>指导价{{DetailData.market_attribute.official_refer_price}}</span>
        </div>
        <li @click="goQuotation(getAllData[0].car_id)">询问低价</li>
      </div>
      <div class="list">
        <p v-for="(item,index) in list" :key="index" @click="clcikIndex(index)" :class="index==ind?'active':''">{{item}}</p>
      </div>
      <div class="list_item" v-for="(item,index) in getAllData" :key="index">
        <p>{{item.exhaust_str}}\{{item.horse_power}}W {{item.inhale_type}}</p>
        <div class="text_box">
          <div class="text_top">
            <p>{{item.market_attribute.year}}款 {{item.car_name}}</p>
            <li>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</li>
          </div>
          <div class="text_bottom">
            <p><span>指导价{{item.market_attribute.dealer_price_max}}</span><span class="pirce">{{item.market_attribute.dealer_price_min}}万</span></p>
            <p class="buttom" @click="goQuotation(item.car_id)">询问低价</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed">
      <p>询问低价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState , mapActions , mapMutations } from 'vuex'
export default Vue.extend({
    data(){
      return {
        ind:0
      }
    },
    created(){
      let { Adetail , indx } = this
       Adetail(this.$route.query.id)
       indx(this.ind)
       console.log(this.DetailData)
    },
    methods:{
        ...mapActions({
            Adetail:'index/getDetail',
        }),
        ...mapMutations({
          indx:'index/getIndex'
        }),
        clcikIndex(index){
          let { indx } = this
          this.ind=index
          indx(this.ind)
        },
        goQuotation(id){
          this.$router.push({path:'/quotation',query:{id:id}})
        }
    },
    computed:{
      ...mapState({
        DetailData:state=>state.index.DetailData,
        list:state=>state.index.list,
        getAllData:state=>state.index.getAllData
      })
    }
})
</script>
<style scoped lang="scss" >
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
  .top{
    width: 100%;
    height: 2rem;
    img{
      width: 100%;
      height:100%;
      background-size: 100% 100%;
    }
  }
  .content{
    width: 100%;
    flex: 1;
    .top_One{
      width: 100%;
      height: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .4rem .15rem;
      background: #fff;
      p{
        font-size: .2rem;
        color:#FF0000;
      }
      span{
        color:#ccc;
      }
      li{
        width: 50%;
        padding: .09rem;
        background: #00afff;
        color:#fff;
        text-align: center;
        border-radius: .05rem;
      }
    }
    .list{
      border-top: .15rem solid #f4f4f4;
      width: 100%;
      font-size: .15rem;
      height: .57rem; 
      align-items: center;
      display: flex;
      background: #fff;
      p{
        padding: 0 .1rem;
      }
    }
  }
  .list_item{
    width: 100%;
    height: auto;
    background: #fff;
    p{
      width: 100%;
      background: #eee;
      padding: .02rem ;
    }
    .text_box{
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      padding: .08rem .1rem;
      .text_top,.text_bottom{
        p{
          font-size: .15rem;
          background: #fff;
        }
        li{
          color:#ccc;
        }
      }
      .text_bottom{
        text-align: right;
        .pirce{
          color:#FF0000;
          margin-left: .1rem;
        }
      }
      .buttom{
        width: 100%;
        padding: .05rem 0;
        text-align: center;
        border-top:solid #ccc .01rem;
        font-size: .18rem;
        color:#00afff;
      }
    }
  }
  .fixed{
    width: 100%;
    height: .6rem;
    background: #00afff;
    color:#fff;
    position: fixed;
    bottom:0;
    left:0;
    text-align: center;
   :first-child{
     margin-top: .12rem;
   }
  }
}
.active{
  color: #00afff;
}
</style>


