<script>
export default{
    props:[
        "name",
        "phone",
        "sex",
        "address",
        "age"
    ],
    methods:{
        back(){
            this.$emit('back')
        }
    }
}
</script>

<template>
<div class="child2">
    <h2>Child2這邊確認資料</h2>
    <p>姓名:{{ this.name }}</p>
    <p>手機:{{ this.phone }}</p>
    <p>性別:{{ this.sex }}</p>
    <p>地址:{{ this.address }}</p>
    <p>年齡:{{ this.age }}</p>
    <button type="button" @click="this.back()">返回填寫</button>
</div>
</template>


<style lang="scss" scoped>
.child2{
    width:500px;
    height: 500px;
    border: 1px solid blue;
}
</style>