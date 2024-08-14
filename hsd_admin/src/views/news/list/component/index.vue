<template>
    <div class="tabsChildren">
        <div class="searchForm">
            <div class="search">
                <el-form :model="searchParams">
                    <el-form-item label="标题：">
                        <el-input
                            v-model="searchParams.title"
                            @change="getTableData"
                            clearable
                            placeholder="请输入标题"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="clearSearch">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="buttonGroup"></div>
        </div>
        <div class="commonTable">
            <el-table
                :data="tableData"
                class="elTable"
                :header-cell-style="{
                    textAlign: 'center',
                    height: '60px',
                    fontSize: '18PX',
                    fontWeight: 'Bold',
                    color: 'black',
                    background: '#EEF4FF',
                }"
                :cell-style="{ textAlign: 'center', fontWeight: '400' }"
                border
            >
                <el-table-column type="selection" width="55" />
                <el-table-column prop="title" label="标题" width="300" show-overflow-tooltip />
                <el-table-column prop="description" label="描述" width="300" show-overflow-tooltip />
                <el-table-column prop="keywords" label="关键字" width="300" show-overflow-tooltip />

                <el-table-column prop="picture" label="封面">
                    <template #default="scoped">
                        <el-image class="Img" :src="scoped.row.picture"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="createTime" label="创建时间" />
                <el-table-column label="操作" width="200">
                    <template #default="scope">
                        <el-button
                            v-if="props.activeStatus === 1"
                            type="success"
                            size="small"
                            @click="preView(scope.row)"
                        >
                            预览
                        </el-button>
                        <el-button
                            v-if="props.activeStatus === 1"
                            type="primary"
                            size="small"
                            @click="editNews(scope.row)"
                        >
                            编辑
                        </el-button>
                        <el-button
                            v-if="props.activeStatus === 1"
                            type="warning"
                            size="small"
                            @click="changeStatus(scope.row)"
                        >
                            发布
                        </el-button>
                        <el-button
                            v-if="props.activeStatus === 1"
                            type="danger"
                            size="small"
                            @click="deleteNews(scope.row)"
                        >
                            删除
                        </el-button>
                        <el-button
                            v-if="props.activeStatus === 2"
                            type="warning"
                            size="small"
                            @click="changeStatus(scope.row)"
                        >
                            撤回
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                layout="total,prev, pager, next,sizes"
                :total="searchParams.total"
                v-model:current-page="searchParams.pageNum"
                v-model:page-size="searchParams.pageSize"
                @change="getTableData"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive, ref, onMounted } from 'vue'
    import { getNewsList, delNews, changeNewsStatus } from '../../news'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const props = defineProps(['activeStatus'])

    const tableData = ref([])
    const searchParams = reactive({
        title: null,
        pageNum: 1,
        pageSize: 20,
        total: 0,
        status: props.activeStatus,
    })

    const getTableData = () => {
        getNewsList(searchParams).then((res: any) => {
            if (res.code) {
                tableData.value = res.data.list
                searchParams.total = res.data.total
            }
        })
    }

    const clearSearch = () => {
        searchParams.title = null
        getTableData()
    }

    onMounted(() => {
        getTableData()
    })

    const preView = (row: any) => {
        router.push({ path: '/news/list/preViewNews', query: { id: row.id } })
    }

    const editNews = (row: any) => {
        router.push({ path: '/news/list/editNews', query: { id: row.id } })
    }

    const changeStatus = (row: any) => {
        let params = {}
        let text = ''
        if (props.activeStatus === 2) {
            params = { id: row.id, status: 1 }
            text = '撤回'
        } else {
            params = { id: row.id, status: 2 }
            text = '发布'
        }
        changeNewsStatus(params).then((res: any) => {
            if (res.code === 200) {
                ElMessage.success(`${text}成功`)
                getTableData()
            }
        })
    }

    const deleteNews = (row: any) => {
        ElMessageBox({
            title: '提示',
            message: `确认删除当前文章吗，删除之后文章无法找回！！！`,
            showCancelButton: true,
            confirmButtonText: '删除',
            cancelButtonText: '取消',
            confirmButtonClass: 'el-button--danger',
            customStyle: { width: '400px' },
            beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                    delNews(row.id).then((res: any) => {
                        instance.confirmButtonLoading = false
                        done()
                        if (res.code === 200) {
                            ElMessage.success('删除成功')
                            getTableData()
                        }
                    })
                } else {
                    done()
                }
            },
        })
    }
</script>

<style scoped lang="scss">
    .tabsChildren {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        .searchForm {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            .search {
                .el-form {
                    display: flex;
                    flex-wrap: wrap;
                    .el-form-item {
                        width: 300px;
                        margin-right: 20px;
                    }
                    .el-form-item:last-child {
                        width: auto;
                    }
                }
            }
            .buttonGroup {
                display: flex;
                justify-content: flex-end;
            }
        }
        .commonTable {
            margin: 10px 0;
            flex: 1;
            overflow: hidden;
            .elTable {
                width: 100%;
                height: 100%;
                .Img {
                    width: 80px;
                    height: 80px;
                }
            }
            :deep(.el-scrollbar__wrap) {
                display: flex;
            }
        }
        .pagination {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
