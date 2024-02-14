<template>
    <slot/>
</template>
<script setup>
useHead({
    htmlAttrs: {
        class: "dark"
    }
})
</script>