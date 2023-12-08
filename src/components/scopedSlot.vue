<template lang="">
    <div>
        <slot :text="this.message" :count="1">
        </slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:"message"
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>