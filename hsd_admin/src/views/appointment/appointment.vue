<template>
    <div class="product">
        <pageTitle name="报名订单列表"></pageTitle>
        <div class="searchForm">
            <div class="search">
                <el-form :model="searchParams" @submit.prevent="() => {}">
                    <el-form-item label="学生姓名：">
                        <el-input
                            v-model="searchParams.name"
                            @change="getTableData"
                            clearable
                            placeholder="请输入学生姓名"
                        />
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
                <el-table-column prop="name" label="学生姓名" />
                <el-table-column prop="grade" label="现就读年级" />
                <el-table-column prop="school" label="现就读学校" />
                <el-table-column prop="fatherName" label="父亲姓名" />
                <el-table-column prop="fatherPhone" label="父亲联系电话" />
                <el-table-column prop="motherName" label="母亲姓名" />
                <el-table-column prop="motherPhone" label="母亲联系电话" />
                <el-table-column prop="createTime" label="预约时间" />
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
    import { getInfo } from './appointment.ts'

    const tableData = ref([])
    const searchParams = reactive({
        name: null,
        pageNum: 1,
        pageSize: 20,
        total: 0,
    })
    const getTableData = () => {
        getInfo(searchParams).then((res: any) => {
            if (res.code) {
                tableData.value = res.data.list
                searchParams.total = res.data.total
            }
        })
    }

    onMounted(() => {
        getTableData()
    })
</script>

<style scoped lang="scss">
    .product {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        padding: 10px 30px;
        .searchForm {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            .search {
                .el-form {
                    display: flex;
                    flex-wrap: wrap;
                    .el-form-item {
                        width: 250px;
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

        @media screen and (max-width: 1300px) {
            .pagination {
                padding-bottom: 20px;
            }
        }

        .e_body {
            width: 100%;
            height: 500px;
            display: flex;
            justify-content: center;
            overflow: scroll;
            .el-form {
                :deep(.el-form-item__label) {
                    font-weight: bold;
                }
                img {
                    width: 90%;
                    height: auto;
                }
                .avatar-uploader {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                    .avatar {
                        width: 178px;
                        height: 178px;
                        display: block;
                    }
                }
            }
            .record {
                width: 90%;
                list-style: disc;
                li + li {
                    margin-top: 1rem;
                }
                p {
                    line-height: 1.5rem;
                    font-size: 1rem;
                    span {
                        color: red;
                        font-size: 0.9rem;
                    }
                    .label {
                        color: #606266;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>
