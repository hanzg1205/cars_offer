<template>
  <div class="wrap">
      <div class="list">
          <p>一汽-大众奥迪</p>
          <div class="list_item">
              <dl>
                  <dt><img src="https://img2.bitautoimg.com/autoalbum/files/20180802/883/0255378836_3.jpg" alt=""></dt>
                  <dd>
                      <h3>奥迪A6L</h3>
                      <p>21.08-41.1万</p>
                  </dd>
              </dl>
              <dl>
                  <dt><img src="https://img2.bitautoimg.com/autoalbum/files/20180802/883/0255378836_3.jpg" alt=""></dt>
                  <dd>
                      <h3>奥迪A6L</h3>
                      <p>21.08-41.1万</p>
                  </dd>
              </dl>
              <dl>
                  <dt><img src="https://img2.bitautoimg.com/autoalbum/files/20180802/883/0255378836_3.jpg" alt=""></dt>
                  <dd>
                      <h3>奥迪A6L</h3>
                      <p>21.08-41.1万</p>
                  </dd>
              </dl>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Slider extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .wrap{
//     width: 100%;
//     height: 100%;
// }
// .list{
//     width: 100%;
//     display: flex;
//     height: 100%;
//     flex-direction: column;
//     p{
//         width: 100%;
//         height: 35px;
//         background: #eee;
//     }
//     .list_item{
//         width: 100%;
//         height: 100%;
//         display: flex;
//         flex-direction:column;
//         dl{
//             width: 100%;
//             display: flex;
//             dd h3{
//                 font-weight: normal;
                
//             }
//         }
//     }
// }
// </style>
