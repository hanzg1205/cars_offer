<template>
    <div class="car-img">
        <div class="tit">
            <p @click="goColor">
                <span>颜色</span>
            </p>
            <p @click="goType">
                <span>车款</span>
            </p>
        </div>
        <div class="img-default" >
            <ul v-for="(item,index) in imgTypeList" :key="index">
                <li v-for="(val,index) in item.List" :index="index" :key="val.Id">
                    <img :style="{'backgroundImage': 'url('+val.Url.replace(/{\d}/,val.LowSize)+')'}">
                    <div v-if="index===0">
                        <p>{{item.Name}}</p>
                        <p>{{item.Count}}></p>
                    </div>
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

        }
    },
    methods: {
        ...mapActions({
            getImage: 'image/getImage'
        }),
        goColor(){
            let SerialID = this.$route.query.SerialID
            this.$router.push({path:'/color',query:{SerialID}})
        },
        goType(){
            this.$router.push({path:'/type'})
        }
    },
    computed: {
        ...mapState({
             imgTypeList: (state:any) => state.image.imgTypeList
        })  
    },
    created(){
        // console.log('....', this.$route.query.SerialID)
        this.getImage({
            SerialID: this.$route.query.SerialID
        });
    }
}
</script>
<style scoped  lang="scss">
    .car-img{
        width:100%;
        height:100%;
        background: #f4f4f4;
        .tit{
            position: fixed;
            background: #fff;
            top: 0;
            width: 100%;
            height: .4rem;
            -webkit-box-align: center;
            align-items: center;
            box-sizing: border-box;
            z-index: 99;
            display: flex;
            p{
                flex: 1;
                text-align: center;
                box-sizing: border-box;
                color: #454545;
                display: inline-block;  
                span{
                    max-width: 1.3rem;
                    display: inline-block;
                    vertical-align: middle;
                    line-height: 1.25;
                    font-size: .14rem;
                }
                &:nth-child(2){
                    border-left: 1px solid #ececec;
                }
                &:after{
                    content: "";
                    display: inline-block;
                    padding-top: .08rem;
                    padding-right: .08rem;
                    border-top: 2px solid #ccc;
                    border-right: 2px solid #ccc;
                    -webkit-transform: rotate(135deg);
                    transform: rotate(135deg);
                    margin-left: .1rem;
                    vertical-align: 5%;
                }
            }
        }
        .img-default{
            overflow: hidden;
            position: absolute;
            background: #fff;
            top: .5rem;
            bottom: 0;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            border-bottom: .1rem solid #f4f4f4;
            ul{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                    position: relative;
                    margin-bottom: .03rem;
                    width: 1.22rem;
                    height: 1.22rem;
                    padding: 0;
                    img{
                        width: 100%;
                        height: 100%;
                        background-size: cover;
                    }
                    div{
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        background: rgba(56,90,130,.5);
                        p{
                            color: #fff;
                            display: block;
                            font-size: .14rem;
                            line-height: 0.2rem;
                            &:first-child{
                                margin-top: .4rem;
                            }
                            &:last-child{
                                font-size: .13rem;
                            }
                            
                        }
                    }
                }
            }
            
        }
    }
</style>