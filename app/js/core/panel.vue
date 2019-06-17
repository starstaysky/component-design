<template>
    <section :class="[pannelClass,cname]">
        <h4>{{ title }}</h4>
        <slot/>
    </section>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
    },

    data() {
        return {
            pannelClass: "pannel",
        }
    },

}

</script>
<style lang="scss" moudle>
@import '../../css/element.scss';
.pannel{
   @include panel;
}
</style>
