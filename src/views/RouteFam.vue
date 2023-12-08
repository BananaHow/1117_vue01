<template >
    <div class="famArea">

        <div class="leftBar">
            <RouteFamBar />
        </div>

        <div class="rightContent">
            <RouterView />
        </div>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import RouteFamBar from '../components/RouteFamBar.vue'
export default {
    components: {
        RouterView,
        RouteFamBar
    }
}
</script>
<style lang="scss" scoped>
.famArea {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;

    .leftBar {
        height: 100%;
        width: 20%;
    }

    .rightContent {
        height: 100%;
        width: 20%;
    }
}
</style>