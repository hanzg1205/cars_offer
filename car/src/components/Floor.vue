<template>
    <div class="floor">
        <a :href="'#'+key" v-for="(item,key,index) in brandList" :key="index" :id="key">{{key}}</a>
    </div>
</template>

<script lang="ts">
export default {
    props:['brandList']
    
}
</script>

<style lang="scss" scoped>
    .floor{
        width:0.4rem;
        position: fixed;
        right:0;
        top:50%;
        transform: translateY(-50%);
        text-align: center;
        z-index: 99;
        a{
            display: block;
            line-height: 0.22rem;
            text-decoration: none;
            color:#2c3e50;
            font-size: 0.13rem;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            -webkit-user-select: none;
            -moz-user-focus: none;
            -moz-user-select: none;
        }
    }
</style>
