<template>
    <div class="car-img">
        <div class="tit">
            <p @click="goColor">
                <span>颜色</span>
            </p>
            <p @click="goType">
                <span>{{car_name?car_name:data}}</span>
            </p>
        </div>
        <div class="img-default" >
            <ul v-for="(item,index) in imgTypeList" :key="index">
                <li v-for="(val,idx) in item.List" :idx="idx" :key="val.Id">
                    <img :style="{'backgroundImage': 'url('+val.Url.replace(/{\d}/,val.LowSize)+')'}" @click="goSwiper(item.Id,idx)">
                    <div v-if="idx===0" @click="showImgList(item.Id)">
                        <p>{{item.Name}}</p>
                        <p>{{item.Count}}></p>
                    </div>
                </li>
            </ul>
        </div>
        <ImgList v-if="imgFlag" :imgAllList="imgAllList" :goSwiper="goSwiper" :ImageID="ImageID"/>
        <ImgSwiper v-if="SwiperFlag" :imgAllList="imgAllList" :imgIndex="imgIndex" :hideSwiper="hideSwiper"/>
        <div class="img">
            <img src="http://h5.chelun.com/2017/official/img/no-img.png" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
import ImgList from "@/components/ImgList.vue";
import ImgSwiper from "@/components/ImgSwiper.vue";

export default {
    data(){
        return {
            imgFlag: false,
            SwiperFlag: false,
            SerialID: this.$route.query.SerialID,
            imgIndex: 0,
            ImageID: 0,
            car_name:'车款'
        }
    },
    components: {
        ImgList,
        ImgSwiper
    },
    methods: {
        ...mapActions({
            getImage: 'image/getImage',
            getCategoryImageList: 'image/getCategoryImageList'
        }),
        goColor(){
            this.$router.push({path:'/color',query:{SerialID:this.SerialID}})
        },
        goType(){
            this.$router.push({path:'/type',query:{SerialID:this.SerialID}})
        },
        showImgList(ImageID:any){
            // console.log(ImageID)
            this.imgFlag = true;
            this.ImageID = ImageID;
            this.getImgList(ImageID);
        },
        goSwiper(ImageID:any,idx:any){
            this.SwiperFlag = true;
            this.getImgList(ImageID);
            console.log("000000");
            this.imgIndex = idx;
            
        },
        getImgList(ImageID:any){
            this.getCategoryImageList({
                SerialID: this.SerialID,
                ImageID: ImageID,
                Page: 1,
                PageSize: 30
            })
        },
        hideSwiper(){
            this.SwiperFlag = false; 
        },
    },
    computed: {
        ...mapState({
            imgTypeList: (state:any) => state.image.imgTypeList,
            imgAllList: (state:any) => state.image.imgAllList
        })  ,
        data(){
            let data = JSON.parse(sessionStorage.getItem('data'))
            this.car_name=data.name
        }
    },
    created(){
        // this.imgFlag = false;
        // console.log('..023..')
        // let SerialID = this.$route.query.SerialID
        // console.log(SerialID)
        // this.$router.push({path:'/type',query:{SerialID}})
        this.getImage({
            SerialID: this.SerialID
        })
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
        .img{
            width:30%;
            height: 20%;
            margin: 0 auto;
            line-height: 50%;
            img{
                width: 100%;
                height: 100%;
                margin-top: 50%;
            }
        }
    }
        
</style>