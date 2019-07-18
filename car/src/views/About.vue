<template>
  <div class="wrap">
    <div class="top">
      <img :src="DetailData.CoverPhoto" alt="" @click="goImage(DetailData.SerialID)">
    </div>
    <div class="content">
      <div class="top_One" v-if="DetailData.market_attribute">
        <div class="content_top">
          <p>{{DetailData.market_attribute.dealer_price}}</p>
          <span>指导价{{DetailData.market_attribute.official_refer_price}}</span>
        </div>
        <li @click="goQuotation(cid.car_id)">询问低价</li>
      </div>
      <div class="list">
        <p v-for="(item,index) in list" :key="index" @click="clcikIndex(index)" :class="index==ind?'active':''">{{item}}</p>
      </div>
        <Item :data="getAllData" />
    </div>
    <div class="fixed"  @click="goQuotation(cid.car_id)">
      <p class="fixed_text">询问低价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState , mapActions , mapMutations } from 'vuex'
import Item from '@/components/item.vue'
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
    },
    methods:{
        ...mapActions({
            Adetail:'index/getDetail',
        }),
        ...mapMutations({
          indx:'index/getIndex'
        }),
        clcikIndex(index:any){
          let { indx } = this
          this.ind=index
          indx(this.ind)
        },
        goQuotation(id:any){
          this.$router.push({path:'/quotation',query:{id:id}})
        },
        goImage(SerialID:any){
          this.$router.push({path:'/image',query:{SerialID}})
        }
    },
    computed:{
      ...mapState({
        DetailData:(state:any)=>state.index.DetailData,
        list:(state:any)=>state.index.list,
        getAllData:(state:any)=>state.index.getAllData,
        cid:(state:any)=>state.index.cid
      })
    },
    components:{
      Item
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
      padding: .32rem .1rem;
      background: #fff;
         p{
        font-size: .2rem;
        color:#FF0000;
        font-weight:500;
        }
        span{
          color:#ccc;
          font-size: .08rem;
        }
      li{
        width: 50%;
        padding: .1rem;
        background: #00afff;
        color:#fff;
        text-align: center;
        border-radius: .05rem;
        font-size: .16rem
      }
    }
    .list{
      border-top: .08rem solid #f4f4f4;
      width: 100%;
      font-size: .16rem;
      height: .57rem; 
      align-items: center;
      display: flex;
      background: #fff;
      p{
        padding: 0 .1rem;
      }
    }
  }
  .list_box{
    width: 100%;
    height: auto;
    border-bottom:solid #ccc .5rem;
  }
  .fixed{
    width: 100%;
    height: .5rem;
    background: #00afff;
    color:#fff;
    position: fixed;
    bottom:0;
    text-align: center;
   :first-child{
     margin-top: .12rem;
     font-size: .18rem;
   }
  }
}
.active{
  color: #00afff;
}
</style>


