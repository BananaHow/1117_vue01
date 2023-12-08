<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data() {
        return {
            arr:["aaa","bbb","ccc"]
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
    mounted() {
        this.getWeather()
    }

}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="routerItem" :class="{ 'cass': this.location === 1 }">Home</RouterLink>
        <RouterLink to="/VtextAndVmodel" class="routerItem" :class="{ 'cass': this.location === 2 }">VtextAndVmodel
        </RouterLink>
        <RouterLink to="/Vfor" class="routerItem" :class="{ 'cass': this.location === 3 }">VFor</RouterLink>
        <RouterLink to="/Von" class="routerItem" :class="{ 'cass': this.location === 4 }">VOn</RouterLink>
        <RouterLink to="/Vbind" class="routerItem" :class="{ 'cass': this.location === 5 }">VBind</RouterLink>
        <RouterLink to="/VifANdVshow" class="routerItem" :class="{ 'cass': this.location === 6 }">VIfAndVShow</RouterLink>
        <RouterLink to="/WatchAndComputed" class="routerItem" :class="{ 'cass': this.location === 7 }">WatchAndComputed
        </RouterLink>
        <RouterLink to="/Props" class="routerItem" :class="{ 'cass': this.location === 8 }">Props</RouterLink>
        <RouterLink to="/Emit" class="routerItem" :class="{ 'cass': this.location === 9 }">Emit</RouterLink>
        <RouterLink to="/DataFlow" class="routerItem" :class="{ 'cass': this.location === 10 }">DataFlow</RouterLink>
        <RouterLink to="/ProvideAndInject" class="routerItem" :class="{ 'cass': this.location === 11 }">ProvideAndInject
        </RouterLink>
        <RouterLink to="/Vslot" class="routerItem" :class="{ 'cass': this.location === 12 }">Vslot
        </RouterLink>

        <RouterLink v-for="i in arr" :to="`/User/${i}`" class="routerItem" :class="{ 'cass': this.location === 11 }">User{{ i }}
        </RouterLink>
        <RouterLink  to="/RouteFam" class="routerItem" :class="{ 'cass': this.location === 11 }">RouteFam</RouterLink>

    </div>
    <span>{{ locationInfo }}</span>
</template>

<style scoped lang="scss">
.headerShow {
    width: 100%;
    height: 100%;
    background-color: #e0f2fe;
    display: flex;
    flex-wrap: wrap;

    .routerItem {
        font-size: 24pt;
        color: #0369a1;
        text-decoration: none;
        margin-left: 10px;
        margin-right: 10px;

    }

    .cass {
        background-color: #0369a1;
        color: white;
        border-radius: 10px;
    }
}</style>