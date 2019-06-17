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
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
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
