<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter'
import InjectFather from '../components/InjectFather.vue'
import { computed } from 'vue'
import { ref, provide } from 'vue'
export default {
    components: {
        InjectFather
    },
    mounted() {
        this.setLocation(11)
    },
    methods: {
        ...mapActions(counter, ["setLocation"]),
        addArr() {
            this.dataArr.push(this.setupMsg)
        },
        addAtt() {
            this.dog.type = "約克夏"
        }
    },
    data() {
        return {
            message: "hello!",
            dataArr: ["a", "b"],
            dog: {
                name: "可口可樂",
                age: 42
            }
        }
    },
    provide() {
        return {
            // 利用匯入 computed 傳遞響應式變數值
            proMessage: computed(() => this.message),
            cool: "cool",
            arr: this.dataArr,
            pet: this.dog
        }
    },
    setup() {
        // 使用setup() 提供響應式變數
        // let setupMsg = "upMsg"
        let setupMsg = ref('upMsg')
        // {setMSG:setupMsg}
        provide('setMSG', setupMsg)
        return {
            setupMsg
        }
    }
}
</script>

<template>
    <div class="grandArea">
        <h3>爺爺的變數們</h3>
        <h4>{{ this.message }}</h4>
        <input type="text" v-model="this.message">
        <!-- 另類的響應式傳遞變數 -->
        <input type="text" v-model="this.setupMsg">
        <h4>
            {{ this.dataArr }}
        </h4>
        <button type="button" @click="this.addArr()">BTN</button>
        <h4>
            {{ this.dog }}
        </h4>
        <button type="button" @click="this.addAtt()">BTN2</button>
        <InjectFather />
    </div>
</template>


<style scoped lang="scss">
.grandArea {
    height: 800px;
    width: 400px;
    border: 1px solid black;
    margin: 0 auto;
}
</style>