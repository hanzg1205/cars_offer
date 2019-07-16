<template>
  <div class="home">
    <div class="car-brand">
      <div v-for="(item,key,index) in brandList" :key="index" :id="key">
        <p>{{key}}</p>
        <ul>
          <li v-for="file in item" :key="file.MasterID" @click="clcikItem(file)">
            <img :src="file.CoverPhoto" alt="">
            <span>{{file.Name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <Floor :brandList="brandList"></Floor>
    <Slider :class="flag?'childrenList':'children'" :dataList="getLists" />
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Slider from '@/components/slider.vue'; // @ is an alias to /src
import { mapActions, mapState } from 'vuex';
import Floor from "@/components/Floor.vue";

export default Vue.extend({
  data(){
    return {
      flag:false,
    }
  },
  created(){
    this.getBrandList();
    this.getItemData(9)
  },
  methods: {
    ...mapActions({
        getBrandList: 'index/getBrandList',
        getItemData:'index/getList'
    }),
    clcikItem(item:any){
      console.log(item.MasterID)
      this.flag=true
      this.getItemData(item.MasterID)
    }
  },
  computed: {
    ...mapState({
      brandList: (state:any) => state.index.brandList,
      getLists:(state:any)=>state.index.listData
    })
  },
  components: {
    Floor,
    Slider
  }
})
</script>

<style lang="scss" scoped>
  .home{
    .car-brand{
      p{
        font-size: .14rem;
        line-height: .3rem;
        background: #f4f4f4;
        padding-left: .15rem;
        color: #aaa;
      }
      ul{
        margin: 0 0.15rem;
        li{
          height: 0.5rem;
          box-sizing: border-box;
          border-bottom: 1px solid #ddd;
          align-items: center;
          display: flex;
          img{
            width:0.4rem;
            height:0.4rem;
          }
          span{
            font-size: .16rem;
            margin-left: .2rem;
          }  
          &:last-child{
            border:0;
          }       
        }
      }
    }
  }
  .children ,  .childrenList{
    width: 80%;
    height: 100%;
    transform: translateX(100%);
    transition-duration: 3s;
  }
  .childrenList{
    transform: translateX(0%);
    transition-duration: 1s;
  }
</style>


