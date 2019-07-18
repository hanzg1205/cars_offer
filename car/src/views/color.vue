<template>
    <div class="color">
        <p>全部颜色</p>
        <div class="color-box">
            <p class="c-type">
                <span 
                    :class="index===idx?'active':''" 
                    v-for="(item,key,index) in colorList" 
                    :key="index" 
                    @click="tabFn(key,index)"
                >{{key}}</span>
            </p>
            <ul>
                <li v-for="(item,index) in typeList" :key="index">
                    <span :style="{'background':item.Value}"></span>
                    {{item.Name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';

export default {
    data(){
        return {
            idx: 0,
            typeList: []
        }
    },
    methods: {
        ...mapActions({
            getColor: 'image/getColor'
        }),
        tabFn(key:any,index:any){
            this.idx = index;
            this.typeList = this.colorList[key];
        }
    },
    computed: {
        ...mapState({
            colorList: (state:any) => state.image.colorList
        })
    },
    created(){
        let SerialID = this.$route.query.SerialID
        this.getColor({SerialID});
        this.typeList = this.colorList[Object.keys(this.colorList)[0]]
    }
}
</script>
<style scoped  lang="scss">
    .color{
        width: 100%;
        height:100%;
        background: #f4f4f4;
        overflow: hidden;
        >p{
            margin: .08rem 0;
            font-size: .17rem;
            color: #00afff;
            background: #fff;
            text-align: center;
            line-height: .4rem;
            height: .4rem;
        }
        .color-box{
            .c-type{
                margin-top: .08rem;
                padding-left: .15rem;
                font-size: .15rem;
                line-height: .4rem;
                height: .4rem;
                background: #fff;
                overflow-x: scroll;
                span{
                    padding-right: .2rem;
                }
                .active{
                    color: #00afff;
                }
            }
            ul{
                margin-top: .08rem;
                padding: 0 .1rem;
                overflow: hidden;
                background: #fff;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding: 0 0.15rem;
                li{
                    width: 48%;
                    font-size: .16rem;
                    line-height: .34rem;
                    border: 1px solid #3aacff;
                    box-sizing: border-box;
                    margin: .1rem 0;
                    border-radius: .03rem;
                    span{
                        display: inline-block;
                        width: .2rem;
                        height: .2rem;
                        margin-left: .1rem;
                        vertical-align: -12%;
                        background: #fe9210;
                        box-sizing: border-box;
                        border: 1px solid #818181;
                    }
                }
            }
        }
    }
</style>