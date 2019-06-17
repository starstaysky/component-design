<template>
    <div :class="$style.header">
        <span :class="$style.left">
            <em>注册</em>&nbsp;&nbsp;<em>登录</em>
        </span>
        <btn :class="$style.btnDownload">APP 下载</btn>
    </div>
</template>

<script>
import btn from "../core/btn.vue"
export default {
    components: {
        btn,
    },
}
</script>

<style lang="scss" module>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #666;
  font-size: 24px;
  height: 100px;
  line-height: 100px;
  background: #fff;
  background-size: auto 50%;
  z-index:100;
  .left{
    font-size:28px;
    height:30px;
    line-height: 30px;
    margin:17px 0 0 18px;
  }
  .btnDownload{
   float:right;
   font-size:24px;
   border-width: 0;
   height:56px;
   line-height: 56px;
   padding:0;
   border-radius:4px;
   margin:28px 24px 0 0;
  }
}
</style>
