<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import child from '../components/child.vue'
export default {
    data() {
        return {
            tttle: "title",
            isBlue: false,
            isLarge: false,
            styleArr: [],
            imgText: "",
            arrText: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            test: ""
        }
    },
    methods: {
        ...mapActions(counter, ["setLocation"]),
        show(x) {
            console.log(x)
        }
    },
    components: {
        child
    },
    mounted() {
        this.setLocation(5)
    }
}
</script>

<template>
    <!-- v-model 標籤的值 <= 雙向綁定 => 變數 -->
    <!-- v-bind 標籤的屬性 單向綁定 => 變數  -->
    <h1 class="title">Title</h1>
    <h1 v-bind:class="tttle">Head</h1>

    <h3>class{}</h3>
    <label for="">isBlue</label>
    <input type="checkbox" value="true" v-model="isBlue">
    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">

    <input type="text" value="xxxx" :disabled="isBlue">
    <!-- 一開始的 h2 標籤是沒有 class 名稱的 -->
    <h2 :class="{
        blue: isBlue,
        large: isLarge
    }">永欽銀行</h2>
    <!-- 當 isBlue/isLarge 變為 true 時，便會賦予 h2 blue/large 的 class 名稱 -->

    <h3>class{{ styleArr }}</h3>
    <label for="">Blue</label>
    <input type="checkbox" value="blue" v-model="styleArr" name="test">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr" name="test">
    <label for="">italic</label>
    <input type="checkbox" value="italic" v-model="styleArr" name="test">

    <h2 :class="styleArr">志偉烘焙坊</h2>

    <label for="">傑泥規</label>
    <input type="radio"
        value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
        v-model="imgText" name="imgs">
    <label for="">暴鯉龍</label>
    <input type="radio"
        value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/ee070a971884e2c4da87d7a728e5821f9636f56d.png"
        v-model="imgText" name="imgs">
    <label for="">妙蛙種子</label>
    <input type="radio"
        value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"
        v-model="imgText" name="imgs">

    <img :src="imgText" alt="">

    <p>{{ this.test }}</p>
    <select name="" id="" v-model="this.test">
        <option value="">請選擇</option>
        <option :value="index" v-for="(item, index) in arrText">{{ item }}</option>
    </select>

    <a href="https://bananahow.github.io/1129Demo/">cool</a>

    <button type="button" v-for="(item, index) in arrText" :id="item" @click="show(index)">{{ item }}</button>


    <div class="modalllll" v-for="(item, index) in arrText">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#exampleModal${item}`">
            {{ item }} btn
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="`exampleModal${item}`" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"> {{ item }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.title {
    color: red;
}

.blue {
    color: blue;
}

.large {
    font-size: 100pt;
}

.italic {
    font-style: italic;
}
</style>