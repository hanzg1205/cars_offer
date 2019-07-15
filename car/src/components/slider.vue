<template>
  <div class="wrap">
      <div class="list" v-for="(item,index) in dataList.data" :key="index">
          <p class="title">{{item.GroupName}}</p>
          <div class="list_item" v-for="(Gitem,Gindex) in item.GroupList" :key="Gindex">
              <dl>
                  <dt><img :src="Gitem.CoverPhoto" alt=""></dt>
                  <dd>
                      <h3>{{Gitem.AliasName}}</h3>
                      <p class="nameTitle">{{Gitem.DealerPrice}}</p>
                  </dd>
              </dl>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState ,mapActions } from 'vuex'
// import { Component, Prop, Vue } from 'vue-property-decorator';

// @Component
export default Vue.extend({
    props:['dataList'],
    mounted(){
        console.log(this)
    },
    methods:{
       
    },
    computed:{
        
    },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap{
    width: 0%;
    height: auto;
    position: fixed;
    top:0;
    right: 0;
    background: #fff;
    overflow: scroll;
    box-shadow: 0 0 0.5rem #eee;
}
.list{
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;
    .title{
        width: 100%;
        height: 35px;
        background: #eee;
        line-height: 35px;
    }
    .list_item{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction:column;
        dl{
            width: 100%;
            display: flex;
            box-sizing: border-box;
            dd h3{
                font-weight: normal;
                margin-top: 10px;
                font-size: 23px;
            };
            dd .nameTitle{
                font-size: 18px;
                color:#FF0000;
            }
            dt{
                width: 40%;
                height: 80%;
                padding: 10px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
