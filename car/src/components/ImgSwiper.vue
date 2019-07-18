<template>
    <div class="img-swiper" @click="hideSwiper">
        <swiper :options="swiperOption" v-if="imgAllList" ref="mySwiper">
            <swiper-slide v-for="(item,index) in imgAllList" :key="index">
                <img v-lazy="item.Url.replace(/{\d}/,item.LowSize)">
            </swiper-slide>
          </swiper>
        <div class="swiper-pagination"></div>
        <!-- <swiper :options="swiperOption" v-if="imgAllList">
            <swiper-slide v-for="(item,index) in imgAllList" :key="index">
                <img :src="item.Url.replace(/{\d}/,item.LowSize)">
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper> -->
    </div>
</template>

<script lang="ts">
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data(){
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    props: {
        imgAllList:{
            type: Array,
            value: []
        },
        imgIndex: {
            type: Number,
            value: 1
        },
        hideSwiper: {
            type: Function,
            default: ()=>{}
        }
    },
    mounted() {
        this.$refs.mySwiper.swiper.slideTo(this.imgIndex)
    }
}
</script>
<style scoped  lang="scss">
    .img-swiper{
        background: #000;
        top: 0;
        text-align: center;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 101;
        div{
            img{
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
        }
    }
    .swiper-container{
        margin:50% auto;
    }
    .swiper-pagination-fraction{
        color:#fff;
    }
</style>