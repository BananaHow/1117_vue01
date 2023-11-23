<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {
        }
    },
    components: {
        RouterLink,
    },
    computed: {
        ...mapState(counter, ["location", "locationInfo", "weatherInfo"])
    },
    methods: {
        ...mapActions(counter, ["getWeather"]),

    },

}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="routerItem">Home</RouterLink>
        <RouterLink to="/VtextAndVmodel" class="routerItem">VtextAndVmodel</RouterLink>
        <RouterLink to="/Vfor" class="routerItem">VFor</RouterLink>
        <RouterLink to="/Von" class="routerItem">VOn</RouterLink>

    </div>
    <span>{{ location }}</span>
    <span>{{ locationInfo }}</span>
    <span>{{ this.test }}</span>
</template>

<style scoped lang="scss">
.headerShow {
    width: 100%;
    height: 100%;
    background-color: #e0f2fe;

    .routerItem {
        font-size: 24pt;
        color: #0369a1;
        text-decoration: none;
        margin-left: 10px;
    }
}
</style>