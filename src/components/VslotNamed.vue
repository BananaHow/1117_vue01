<template>
    <slot name="header" class="headerSlot">
        <p>header</p>
    </slot>

    <slot />
    
    <slot name="footer">
        <p>footer</p>
    </slot>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

</style>