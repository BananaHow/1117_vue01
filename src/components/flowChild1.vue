<script>
export default {
    data() {
        return {
            obj: {
                name: "",
                phone: "",
                sex: "",
                address: "",
                age: ""
            },
            coolName: "",
            coolPhone: ""
        }
    },
    methods: {
        get() {
            console.log(this.obj)
            this.$emit('get', this.obj)
        }
    },
    props:[
        // 捕捉事件傳遞值應用
        "text"
    ]
}
</script>

<template>
    <div class="child1">
        <h2>Child1這邊輸入資料</h2>
        <!-- <h3>{{ this.obj }}</h3> -->
        <label for="">姓名</label>
        <input type="text" v-model="this.obj.name">
        <label for="">手機</label>
        <input type="number" v-model="this.obj.phone">
        <label for="">性別</label>
        <div class="sexArea">
            <span>男:</span>
            <input type="radio" v-model="this.obj.sex" value="男" name="sex">
            <span>女:</span>
            <input type="radio" v-model="this.obj.sex" value="女" name="sex">
        </div>
        <label for="">地址</label>
        <input type="text" v-model="this.obj.address">
        <label for="">年齡</label>
        <input type="number" v-model="this.obj.age">
        <button type="button" @click="this.get()">送出</button>
        <!-- <button type="button" @click="$emit('get', this.obj)">送出</button> -->

        <input type="text"  @input="$emit(`update:text`, $event.target.value)">

        <button type="button" @click="console.log($event)">event</button>
        <input type="text" @input="console.log($event)">
    </div>
</template>


<style lang="scss" scoped>
.child1 {
    width: 500px;
    padding: 10px 30px;
    height: 500px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
}
</style>