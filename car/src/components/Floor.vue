<template>
<div>
    <ul class="floor"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd">
        <li v-for="(item,index) in letterList" :key="index" :class="current==item?'active':''">{{item}}</li>
    </ul>
    <span v-if="isTouch" class="letter">{{current}}</span>
</div>
    
</template>

<script lang="ts">
export default {
    data(){
        return {
            current: '',
            isTouch: false
        }
    },
    props:{
        letterList: {
            type: Array,
            value: []
        }
    },
    methods: {    
        touchStart(e: Event): void{      
            if(e.target.tagName === 'LI'){
                this.isTouch = true;
                // console.log("000",e.currentTarget)
                this.current = e.target.innerText;
                this.$bus.$emit("props",e.target.innerText);
            }
        },
        touchMove(e:Event): void{
            let { current, isTouch, letterList }:any = this;
            let pageY = e.touches[0].pageY;
            let letterHeight = 0.22 * window.innerWidth / 375*100;
            let letterOffsetTop = (window.innerHeight - letterHeight * letterList.length) / 2;
            let letterIndex = Math.floor((pageY-letterOffsetTop)/letterHeight);
            // console.log("letter...",e.currentTarget);
            // 处理上边界
            if (letterIndex < 0){
                letterIndex = 0;
            }
            // 处理下边界
            if (letterIndex > letterList.length-1){
                letterIndex = letterList.length-1;
            }
            this.current = letterList[letterIndex];
            this.$bus.$emit("props",letterList[letterIndex]);
            // window.location.href="#"+letterList[letterIndex];
        },
        touchEnd(e:Event): void{
            this.isTouch = false;
            this.current = ''; 
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .floor{
        width:0.4rem;
        height:100%;
        position: fixed;
        right:0;
        top:0;
        text-align: center;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: center;
        li{
            line-height: 0.22rem;
            text-decoration: none;
            color:#2c3e50;
            font-size: 0.13rem;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            -webkit-user-select: none;
            -moz-user-focus: none;
            -moz-user-select: none;
            &.active{
                font-size: 0.18rem;
                font-weight: 600;
            }
        }
    }
    .letter{
        display: inline-block;
        width: .8rem;
        height: .8rem;
        background: rgba(0,0,0, .5);
        border-radius: .1rem;
        top: 50%;
        left: 50%;
        position: fixed;
        color: #fff;
        font-size: .4rem;
        text-align: center;
        line-height: .8rem;
        transform: translate3d(-50%, -50%, 0);
    }
    
</style>
