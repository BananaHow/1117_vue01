<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    // 語法糖
    data() { // data = function(){ }
        return {
            arr: [1, 2, 3],
            arr2: [
                {
                    name: "可口可樂",
                    type: "臘腸",
                    age: 2
                },
                {
                    name: "擺飾可樂",
                    type: "吉娃娃",
                    age: 5
                },
                {
                    name: "零卡可樂",
                    type: "馬爾濟斯",
                    age: 1
                },
            ],
        }
    },
    methods:{
        ...mapActions(counter, ["getWeather","setLocation"])
    },
    mounted(){
        this.setLocation(3)
    }
}
</script>

<template>
    <button type="button" @click="getWeather">BTN</button>
    <h3>V-for</h3>
    <!-- arr -->
    <p v-for="item in arr">{{ item }}</p>
    <p v-for="(item, index) in arr">{{ index }}</p>

    <!-- arr2 -->
    <ol v-for="element in arr2">
        <li>{{ element.name }}</li>
        <li>{{ element.type }}</li>
        <li>{{ element.age }}</li>
        <p>-----------------</p>
    </ol>

    <div class="cool" v-for="item in arr">

    </div>
</template>


<style scoped lang="scss">
.cool {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin-bottom: 5px;
}
</style>