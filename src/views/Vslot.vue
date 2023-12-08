<template>
    <!-- <VslotButton>
        <span>
            Click Me Quick!!!
        </span>
        <i class="fa-solid fa-hippo"></i>
    </VslotButton>
    <VslotNamed>
        <template v-slot:header>
            <h1>VslotName: Header</h1>
        </template>
        <template #footer>
            <h1>Vslot:FOoter</h1>
        </template>
        <h2>No Name</h2>
    </VslotNamed>
    <VslotNamed v-for="item in arr">
        <template v-slot:[item.type]>
            <h1 class="namedDynamic">{{ item.name }}</h1>
        </template>
    </VslotNamed>
    <ScopedSlot v-slot="slotProps">
        {{ slotProps.text }} & {{ slotProps.count }}
        <h1>TTTT</h1>
    </ScopedSlot>
    <ScopedSlot v-slot="{text, count}">
        {{ text }} xxxx {{ count }}
    </ScopedSlot> -->
    <button type="button" @click="openModal">BTN</button>
    <VslotModal v-show="isSHow" @alertMessage="openModal">

    </VslotModal>
</template>
<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import VslotButton from '../components/VslotButton.vue';
import VslotNamed from '../components/VslotNamed.vue';
import ScopedSlot from '../components/scopedSlot.vue';
import VslotModal from '../components/VslotModal.vue';
export default {
    data() {
        return {
            arr: [
                {
                    type: "header",
                    name: "可口可樂的臘腸狗"
                },
                {
                    type: "footer",
                    name: "可爾必思的約克夏"
                },
            ],
            isSHow:false
        }
    },
    methods: {
        ...mapActions(counter, ['setLocation']),
        openModal(){
            this.isSHow = !this.isSHow
        }
    },
    components: {
        VslotButton,
        VslotNamed,
        ScopedSlot,
        VslotModal
    },
    mounted() {
        this.setLocation(12)
    }

}
</script>
<style lang="scss" scoped>
.namedDynamic{
    color: red;
}</style>