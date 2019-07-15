<template>
  <div class="home">
    <div class="car-brand">
      <div v-for="(item,key,index) in brandList" :key="index" :id="key">
        <p>{{key}}</p>
        <ul>
          <li v-for="file in item" :key="file.MasterID">
            <img :src="file.CoverPhoto" alt="">
            <span>{{file.Name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <Floor :brandList="brandList"></Floor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import Floor from "@/components/Floor.vue";

export default Vue.extend({
  created(){
    this.getBrandList();
  },
  methods: {
    ...mapActions({
      getBrandList: 'index/getBrandList'
    })
  },
  computed: {
    ...mapState({
      brandList: (state:any) => state.index.brandList
    })
  },
  components: {
    Floor
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
</style>


