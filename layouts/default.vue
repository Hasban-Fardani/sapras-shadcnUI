<template>
    <slot/>
</template>
<script setup>
const preference = useColorMode()
preference.value = "light"
</script>