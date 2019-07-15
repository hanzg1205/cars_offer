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
    <Slider :class="flag?'childrenList':'children'" :dataList="getLists" />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Slider from '@/components/slider.vue'; // @ is an alias to /src
import { mapActions, mapState } from 'vuex';

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
      this.flag=!this.flag
      this.getItemData(item.MasterID)
    }
  },
  computed: {
    ...mapState({
      brandList: (state:any) => state.index.brandList,
      getLists:(state:any)=>state.index.listData
    })
  },
  components:{
    Slider
  }
// import { Component, Vue } from 'vue-property？-decorator';


  // created(){
  //   this.getList();
  // },
  // methods:{
  //   ...mapActions({
  //     getList:'index/getList'
  //   })
  // }
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
    transition-duration: 3s;
  }
</style>


