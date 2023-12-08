<script>
import injectChild from '../components/InjectChild.vue'
export default {
    components: {
        injectChild
    }
}
</script>

<template>
    <div class="fatherArea">
        <h3>這是老爸的區域</h3>
        <injectChild />
    </div>
</template>


<style scoped lang="scss">
.fatherArea {
    height: 400px;
    width: 350px;
    border: 1px solid blue;
}
</style>