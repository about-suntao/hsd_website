<template>
    <div class="title">
        <div class="block"></div>
        <p>{{ props.name }}</p>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        name: string
    }>()
</script>

<style scoped lang="scss">
    .title {
        display: flex;
        align-items: center;
        .block {
            margin-right: 10px;
            width: 8px;
            height: 26px;
            background: #5d6dea;
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
        }
        p {
            font-size: 24px;
            font-family: Microsoft YaHei, sans-serif;
            font-weight: 400;
            color: #222222;
        }
    }
</style>
