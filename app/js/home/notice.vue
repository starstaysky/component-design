<template>
    <panel title="- 新手特权 -" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4><span :class="$style.red">下载APP送礼包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/37103/7/7876/115887/5ccff8bfE320f1d7b/147aad3576c76277.png!q70.jpg.dpg" alt="">
            </div>
            <div :class="$style.item">
                <!--结构太简单、复杂度太低不必要抽象成组件-->
                <ul>
                    <li>
                        <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/37103/7/7876/115887/5ccff8bfE320f1d7b/147aad3576c76277.png!q70.jpg.dpg" alt="">
                        <h4><span :class="$style.red">下载APP送礼包</span></h4>
                        <p :class="$style.gray">新手专享</p>
                    </li>
                    <li>
                        <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/37103/7/7876/115887/5ccff8bfE320f1d7b/147aad3576c76277.png!q70.jpg.dpg" alt="">
                        <h4><span :class="$style.red">下载APP送礼包</span></h4>
                        <p :class="$style.gray">新手专享</p>
                    </li>
                </ul>
            </div>
        </section>
    </panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },

}
</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel{
    >h4{
      border-bottom:1px solid #ddd;
    }
    .content{
      @include list(row);
      .item{
        width:50%;
        box-sizing: border-box;
        &:first-child{
          padding:32px 20px;
          text-align: center;
          border:1px solid #ddd;
        }
        img{
          width:132px;
          height:132px;
          margin:20px auto 0;
        }
        h4{
          font-size:26px;
          line-height:40px;
        }
        .red{
          color:red;
        }
        .gray{
          color:#999;
          font-size:24px;
        }
        p{
          margin-top:6px;
          font-size:24px;
        }
        ul{
          width:100%;
          li{
            height:144px;
            width: 100%;
            padding:32px 28px;
            box-sizing: border-box;
            &:first-child{
              border-bottom:1px solid #ddd;
            }
            h4{
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow:hidden;
              text-align:left;
            }
            img{
              width:80px;
              height:80px;
              float:right;
              }
          }
        }
      }
    }
}

</style>
