<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {
            title: "",
            text: "",
            firstName: "Foo",
            lastName: "Bar",
            cool: ""
        }
    },
    methods: {
        ...mapActions(counter, ["setLocation"]),
        print() {
            console.log("btn")
            this.title = "btn";
        },
        sky() {
            console.log("sky")
        },
        write() {
            console.log(this.text)
            alert(this.text)
        },
        goOtherWay() {
            this.$router.push('/Vfor')
        }
    },
    computed: {
        ...mapState(counter, ["weatherInfo"])
    },
    mounted() {
        this.setLocation(4)
    }
}
</script>

<template>
    <h1>V-on</h1>
    <!-- <button type="button" v-on:click="print()">btn</button> -->
    <button type="button" @click="print()">@btn</button>
    <p>{{ this.title }}</p>

    <select name="" id="" @change="sky()">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

    <input type="text" v-model="this.text" @keydown.enter="write()">

    <button type="button" @click="goOtherWay()">
        <i class="fa-solid fa-arrow-up"></i>
    </button>

    <p>{{ this.weatherInfo }}</p>
</template>

<style scoped lang="scss">
.cool {
    width: 500px;
    height: 500px;
    border: 1px solid black
}
</style>