<script>
import { mapState, mapActions } from 'pinia'
import count from "../stores/counter"
export default {
    data() { // 
        return {
            point: 0,
            ntd: 0,
            cool: "",
        }
    },
    watch: {    // 對變數做監聽
        point() {
            this.ntd = this.point * 10;
            console.log(this.ntd)
        }
    },
    computed: { // 類似偽元素概念，是假的
        ...mapState(count, ["weatherInfo"]),
        jyp() {
            return this.ntd * 4.5;
        }
    },
    methods: {
        ...mapActions(count, ["setLocation", "getWeather"]),
        clickPoint() {
            this.point += 1;
        }
    },
    beforeCreate() {     // vue檔建立，但事件、變數、屬性等等尚未建立
        console.log("beforeCreate")
    },
    created() {          // vue檔建立且事件、變數、屬性等等已建立
        console.log("created")
        this.getWeather()
    },
    beforeMount() {      // DOM Tree 尚未連接
        console.log("beforeMount")
    },
    mounted() {         // DOM Tree 已連接
        console.log("mounted")
        this.setLocation(7)
    },
    beforeUpdate() { // 變數已更動，但畫面未更新
        console.log("beforeUpdate")
    },
    updated() {      // 變數已更動且畫面也同步更新完成
        console.log("updated")
    },
    beforeUnmount() {
        console.log("beforeUnmount")
    },
    unmounted() {
        console.log("unmounted")
    }
}
</script>

<template>
    <p>this.point: {{ this.point }}</p>
    <p>this.ntd:{{ this.ntd }}</p>
    <p>this.jyp:{{ this.jyp }}</p>
    <div class="circle" @click="this.clickPoint()"></div>
    <!-- <span v-for="item in this.weatherInfo.records.location">{{ item }}</span> -->
    <!-- <span v-if="this.cool !== ''" v-for="item in this.cool.records.location">{{ item }}</span> -->
    <!-- <span>{{ this.weatherInfo }}</span> -->
</template>

<style scoped lang="scss">
.circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    background: rgb(212, 133, 130);
    transition: 0.5s;

    &:active {
        scale: 0.95;
    }

    &:hover {
        scale: 1.08;
    }
}
</style>