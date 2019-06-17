<template>
    <article class="slider">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.tile }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [
                {
                    href: "home",
                    src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/48521/1/1840/84798/5cf9fe36E4974745f/23ec9cb6e0fce3ff.jpg!cr_1125x549_0_72!q70.jpg.dpg",
                },
                {
                    href: "home",
                    src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/34174/30/12112/164765/5d036879E10b1aaca/ffa15aca068b4a68.jpg!cr_1125x549_0_72!q70.jpg.dpg",
                },
                {
                    href: "home",
                    src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/57080/11/2636/254704/5d075a17E7f83ad8b/fa6e4dfaa7abeebd.jpg!cr_1125x549_0_72!q70.jpg.dpg",
                },
            ],
            enters: [
                {
                    href: "home",
                    title: "京东超市",
                    img: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/36092/37/12219/8045/5d039428E1b8c6cda/2a40fb8b91ded763.png.webp",
                },
                {
                    href: "home",
                    title: "数码电器",
                    img: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/59959/29/1950/8264/5d03943eE53af41bc/2f0423ce54c73be8.png.webp",
                },
                {
                    href: "home",
                    title: "京东服饰",
                    img: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/70468/35/1910/8087/5d039446E96698477/a2bbc4dc19dd77c0.png.webp",
                },
                {
                    href: "home",
                    title: "京东生鲜",
                    img: "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/42595/26/6713/8031/5d039452Ee500ddbf/d08ef3d758def482.png.webp",
                },
            ],
        }
    },
}

</script>
<style lang="scss" module>
@import '../../css/element.scss';
.slider {
  margin-top:120px;
}
.list{
    @include list(row);
    background:#fff;
    padding-top:40px;
    padding-bottom:20px;
    justify-content: space-around;
    a{
      text-decoration:none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height:90px;
      }
    }
}
</style>
