<template>
  <div class="home">
    <BrandList :brandList="brandList" :clcikItem="clcikItem"/>
    <Floor :letterList="letterList"></Floor>
    <Slider :class="flag?'childrenList':'children'" :dataList="getLists" />
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import Slider from '@/components/slider.vue'; // @ is an alias to /src
import Floor from "@/components/Floor.vue";
import BrandList from "@/components/BrandList.vue";

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
      this.flag=true
      this.getItemData(item.MasterID)
    }
  },
  computed: {
    ...mapState({
      brandList: (state:any) => state.index.brandList,
      letterList: (state:any) => state.index.letterList,
      getLists:(state:any)=>state.index.listData
    })
  },
  components: {
    Floor,
    Slider,
    BrandList
  }
})
</script>

<style lang="scss" scoped>
  .home{
    width:100%;
    height: 100%;
  }
  .children ,  .childrenList{
    width: 75%;
    height: 100%;
    transform: translateX(100%);
    transition-duration: 3s;
  }
  .childrenList{
    transform: translateX(0%);
    transition-duration: 1s;
  }
</style>


