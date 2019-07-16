<template>
    <div class="wrapper" ref='father'>
        <div class="car-brand" @onscroll='scroll' >
            <div v-for="(item,key,index) in brandList" :key="index" :id="key" :ref="key">
                <p>{{key}}</p>
                <ul>
                    <li v-for="file in item" :key="file.MasterID" @click="clcikItem(file)">
                        <img v-lazy="file.CoverPhoto" :alt="file.Name">
                        <span>{{file.Name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        brandList: {
            type: Object,
            value: {}
        },
        clcikItem: {
            type: Function,
            default: ()=>{}
        }
    },
    methods:{
        scroll(){

            console.log(this.$refs)
        }
    },
    created(){
        
        this.$nextTick(()=>{
            this.$bus.$on("props",(data:any)=>{
                this.$refs.father.scrollTop = this.$refs[data][0].offsetTop
            })
        })
    },
    mounted(){

    }
})
</script>
<style scoped lang="scss">
.wrapper{
    width:100%;
    height:100%;
    overflow-y: scroll;
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