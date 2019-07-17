<!-- The ref attr used to find the swiper instance -->
<template>
    <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide v-for="item in items" :key="item.href">
            <router-link :to="{name:item.href}">
                <img :src="item.src"/>
            </router-link>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination" v-if="swiperOption.pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    <!-- https://www.cnblogs.com/xiaocaiyuxiaoniao/p/10521462.html -->
    </swiper>
</template>

<script>

import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    name: "Slider",
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        items: {
            type: Array,
            default() {
                return [
                    { },
                ]
            },
        },
        cname: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            swiperOption: {
                autoplay: true,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                },
                // scrollbar: {
                //     el: ".swiper-scrollbar",
                //     hide: true, // 滚动条是否自动隐藏。默认：false，不会自动隐藏。
                //     draggable: true, // 该参数设置为true时允许拖动滚动条。
                //     snapOnRelease: true, // 如果设置为false，释放滚动条时slide不会自动贴合。
                //     dragSize: 30, // 设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
                // },
                // navigation: {
                //     nextEl: ".swiper-button-next", // 前进按钮的css选择器或HTML元素。
                //     prevEl: ".swiper-button-prev", // 后退按钮的css选择器或HTML元素。
                //     hideOnClick: true, // 点击slide时显示/隐藏按钮
                //     disabledClass: "my-button-disabled", // 前进后退按钮不可用时的类名。
                //     hiddenClass: "my-button-hidden", // 按钮隐藏时的Class
                // },
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
            },
        }
    },


    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        },
    },
    mounted() {
        this.swiper.slideTo(3, 1000, false)
    },
}
</script>
<style lang="scss">
@import '~swiper/dist/css/swiper.css';
</style>
