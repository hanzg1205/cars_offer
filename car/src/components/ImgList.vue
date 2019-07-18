<template>
    <ul class="img-list">
        <li v-for="(item,index) in imgAllList" :key="index" @click="goImage(index)">
            <img :style="{'backgroundImage': 'url('+item.Url.replace(/{\d}/,item.LowSize)+')'}">
        </li>
    </ul>
</template>

<script lang="ts">

export default {
    data(){
        return {

        }
    },
    props: {
        imgAllList:{
            type: Array,
            value: []
        },
        goSwiper: {
            type: Function,
            default: () => {}
        },
        ImageID: {
            type: Number,
            value: 0
        }
    },
    methods: {
        goImage(index:any){
            this.goSwiper(this.ImageID,index);
        }
    }
}
</script>
<style scoped  lang="scss">
    .img-list{
        width:100%;
        height:100%;
        background: #fff;
        position: fixed;
        z-index: 99;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow-y: scroll;
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
        }
    }
</style>