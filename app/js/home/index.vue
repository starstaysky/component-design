<template lang="html">
    <div :class="$style.home">
        <Heador/>
        <Hslider/>
        <Notice/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Hslider from "./hslider.vue"
import Notice from "./notice.vue"
export default {
    components: {
        Heador,
        Hslider,
        Notice,
    },
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    font-size: 80px;
  }
</style>
