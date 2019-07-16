<template>
  <div class="wrap">
      <div class="list" v-for="(item,index) in dataList.data" :key="index">
          <p class="title">{{item.GroupName}}</p>
          <div class="list_item" v-for="(Gitem,Gindex) in item.GroupList" :key="Gindex" @click="clcikItem(Gitem)">
                <dl>
                    <dt><img :src="Gitem.Picture" alt=""></dt>
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
export default Vue.extend ({
    props:['dataList'],
    mounted(){
        console.log(this)
    },
    methods:{
        clcikItem(item:any):void{
            let { Adetail }:any = this
            this.$router.push({path:'/about',query:{id:item.SerialID}})
        }
    }
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
    z-index: 100;
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
        height: .35rem;
        background: #eee;
        line-height: .35rem;
        padding-left: 0.15rem;
    }
    .list_item{
        width: 100%;
        height: .7rem;
        display: flex;
        flex-direction:column;
        align-items: center;
        dl{
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            border-bottom: 1px solid #ddd;
            dd h3{
                font-weight: normal;
                // margin-top: .1rem;
                font-size: 0.17rem;
            };
            dd .nameTitle{
                font-size: 0.14rem;
                color:#FF0000;
            }
            dt{
                width: 0.9rem;
                height: 0.6rem;
                padding: 0.1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
