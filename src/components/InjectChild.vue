<script>
export default {
    inject: [
        "proMessage",
        "cool",
        "setMSG",
        "arr",
        "pet"
    ]
}
</script>

<template>
    <div class="childArea">
        <h3>兒子的領域</h3>
        <h4>{{ this.proMessage }}</h4>
        <h4>{{ this.cool }}</h4>
        <h4>{{ this.setMSG }}</h4>
        <h4>{{ this.arr }}</h4>
        <h4>{{ this.pet }}</h4>
    </div>
</template>


<style scoped lang="scss">
.childArea {
    height: 300px;
    width: 300px;
    border: 1px solid red;
}
</style>