<template>
    <div class="dealer-info">
        <p class="tip">选择报价经销商</p>
        <ul>
            <li class="" v-for="(item,index) in dealerList" :key="index">
                <p class="top">
                    <span>{{item.dealerShortName}}</span>
                    <span>{{item.vendorPrice}}万</span>
                </p>
                <p class="desc">
                    <span>{{item.address}}</span>
                    <span>售{{item.saleRange}}</span>
                </p>
            </li>
            <li class="active">
                <p class="top">
                    <span>运通嘉奥</span>
                    <span>22万</span>
                </p>
                <p class="desc">
                    <span>北京市顺义区赵全营镇牛板路板桥段43号 运通京承国际汽车广场内</span>
                    <span>售全国</span>
                </p>
            </li>
            <li class="">
                <p class="top">
                    <span>运通嘉奥</span>
                    <span>22万</span>
                </p>
                <p class="desc">
                    <span>北京市顺义区赵全营镇牛板路板桥段43号 运通京承国际汽车广场内</span>
                    <span>售全国</span>
                </p>
            </li>
            <li class="">
                <p class="top">
                    <span>运通嘉奥</span>
                    <span>22万</span>
                </p>
                <p class="desc">
                    <span>北京市顺义区赵全营镇牛板路板桥段43号 运通京承国际汽车广场内</span>
                    <span>售全国</span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    },
    props: {
        dealerList: {
            type: Array,
            default: []
        }
    }
}
</script>
<style scoped  lang="scss">
    .dealer-info{
        .tip{
            padding: 0 .1rem;
            height: .3rem;
            line-height: .3rem;
            font-size: .12rem;
            color: #666;
            background: #eee;
        }
        ul{
            background: #fff;
            padding: 0 .09rem;
            li{
                position: relative;
                padding: .13rem 0 .13rem .27rem;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                height: 0.82rem;
                &:before{
                    content: "";
                    display: inline-block;
                    width: .16rem;
                    height: .16rem;
                    border-radius: 50%;
                    border: 2px solid #ccc;
                    box-sizing: border-box;
                    position: absolute;
                    left: .02rem;
                    top: 50%;
                    transform: translate3d(0,-50%,0);    
                }
                &.active:before{
                    background: #3aacff;
                    border:none;
                }
                &.active:after{
                    content: "";
                    display: inline-block;
                    padding-top: .085rem;
                    padding-right: .05rem;
                    border: 2px solid #fff;
                    transform: rotate(40deg) translate3d(0,-50%,0);
                    position: absolute;
                    left: .03rem;
                    border-left: none;
                    border-top: none;
                    top: 47%;
                }
                p{
                    display: flex;
                    justify-content: space-between;
                    &.top{
                        font-size: .15rem;
                        line-height: 0.18rem;
                        span:last-child{
                            font-size: .12rem;
                            color: red;
                        }
                    }
                    &.desc{
                        margin-top: .05rem;
                        font-size: .12rem;
                        color: #a2a2a2;
                        span:first-child{
                            display: inline-block;
                            max-width: 2.3rem;
                            line-height: 0.16rem;
                        }
                    }
                }
            }
        }
    }
</style>  