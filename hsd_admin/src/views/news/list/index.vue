<template>
    <div class="news" v-if="vueRouter.currentRoute.value.fullPath === '/news/list'">
        <el-tabs type="border-card" v-model="activeStatus">
            <el-tab-pane :label="item.label" :name="item.value" v-for="item in data" :key="item.id">
                <TabComponent :activeStatus="activeStatus" v-if="item.value === activeStatus"></TabComponent>
            </el-tab-pane>
        </el-tabs>
    </div>
    <div class="newsChildren" v-else>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import TabComponent from './component/index.vue'
    import { useRouter } from 'vue-router'

    const vueRouter = useRouter()

    const data = [
        {
            id: 1,
            value: 1,
            label: '草稿箱',
        },
        {
            id: 2,
            value: 2,
            label: '已发布',
        },
    ]

    const activeStatus = ref(1)
</script>

<style scoped lang="scss">
    .news {
        flex: 1;
        .el-tabs {
            height: 100%;
            display: flex;
            flex-direction: column;
            :deep(.el-tabs__item) {
                font-size: 18px;
            }
            :deep(.el-tabs__content) {
                flex: 1;
            }
            :deep(.el-tab-pane) {
                height: 100%;
            }
        }
    }
    .newsChildren {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
