<script>
export default{
    data(){
        return{
            text:"childOrange",
            text2:"OrangeChild"
        }
    },
    methods:{
        emitGo(){
            console.log(this.text)
            this.$emit("orange", this.text);
        }
    },
    mounted(){
        
    },
}
</script>


<template>
    <div class="childArea">
        <p>In Child2</p>
        <p>{{ this.text }}</p>
        <button type="button" @click="this.emitGo()">Btn</button>
        <button type="button" @click="$emit('orange', this.text2)">Btn2</button>
    </div>
</template>


<style scoped lang="scss">
.childArea{
    width: 300px;
    height: 300px;
    border: 1px solid red;
    margin: 0 auto;
}
</style>