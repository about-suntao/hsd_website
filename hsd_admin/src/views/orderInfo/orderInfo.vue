<template>
    <div class="product">
        <pageTitle name="预约信息列表"></pageTitle>
        <div class="searchForm">
            <div class="search">
                <el-form :model="searchParams">
                    <el-form-item label="学生姓名：">
                        <el-input
                            v-model="searchParams.name"
                            @change="getTableData"
                            clearable
                            placeholder="请输入用户名"
                        />
                    </el-form-item>
                    <el-form-item label="身份证：">
                        <el-input
                            v-model="searchParams.idCard"
                            @change="getTableData"
                            clearable
                            placeholder="请输入身份证号"
                        />
                    </el-form-item>
                    <el-form-item label="手机号：">
                        <el-input
                            v-model="searchParams.phone"
                            @change="getTableData"
                            clearable
                            placeholder="请输入手机号"
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
                <el-table-column prop="name" label="学生姓名" />
                <el-table-column prop="visitTime" label="参观日期" />
                <el-table-column prop="idCard" label="身份证号" />
                <el-table-column prop="phone" label="手机号" />
                <el-table-column prop="visitorIdentity" label="来访人身份" />
                <el-table-column prop="visitorPhone" label="来访人电话" />
                <el-table-column prop="visitorNumber" label="来访人数" />
                <el-table-column prop="comeWay" label="是否自驾" />
                <el-table-column prop="licenseNumber" label="车牌号" />
                <el-table-column prop="item" label="首选项目" />
                <el-table-column prop="province" label="生源省份" />
                <el-table-column prop="enrollmentYear" label="入学年份">
                    <template #default="scoped">
                        <p>{{ scoped.row.enrollmentYear }}-{{ scoped.row.enrollmentTerm }}</p>
                    </template>
                </el-table-column>
                <!-- <el-table-column label="操作" width="200">
                    <template #default="scope">
                        <el-button type="danger" size="small" @click="delUser(scope.row)">删除</el-button>
                    </template>
                </el-table-column> -->
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
    import { getInfo, addInfo, editInfo, delInfo } from './orderInfo.ts'
    import { uploadImg } from '@/axios/commonHttps'
    import type { UploadRequestOptions, FormRules } from 'element-plus'

    const tableData = ref([])
    const searchParams = reactive({
        name: null,
        idCard: null,
        phone: null,
        pageNum: 1,
        pageSize: 20,
        total: 0,
    })

    const userForm = ref({
        id: null,
        name: '',
        phone: '',
        avatar: null,
    })

    const ruleFormRef = ref<any>(null)

    const checkPicture = (rule: any, value: any, callback: any) => {
        if (value) {
            callback()
        } else {
            callback(new Error('请先上传图片!'))
        }
    }

    const rules = reactive<FormRules>({
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        avatar: [{ required: true, validator: checkPicture, trigger: 'blur' }],
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

    const clearSearch = () => {
        searchParams.name = null
        searchParams.idCard = null
        searchParams.phone = null
        getTableData()
    }

    const uploadPicture = (params: UploadRequestOptions) => {
        const file = params.file
        const formData = new FormData()
        formData.append('file', file)
        uploadImg(formData).then((res: any) => {
            if (res.code === 200) {
                userForm.value.avatar = res.data.url
                ElMessage.success('图片上传成功')
                ruleFormRef.value?.clearValidate('avatar')
            }
        })
    }

    const addUser = () => {
        addInfo(userForm.value).then((res: any) => {
            if (res.code === 200) {
                ElMessage.success('新增成功')
                getTableData()
            }
        })
    }

    const editUser = () => {
        editInfo(userForm.value).then((res: any) => {
            if (res.code === 200) {
                ElMessage.success('修改成功')
                getTableData()
            }
        })
    }

    const delUser = (data: any) => {
        ElMessageBox({
            title: '提示',
            message: `确认删除${data.name}的预约信息吗？`,
            showCancelButton: true,
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            customStyle: { width: '200px' },
            beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                    delInfo({ id: data.id }).then((res: any) => {
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

<style lang="scss">
    .avatar-uploader .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }

    .avatar-uploader .el-upload:hover {
        border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
</style>

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
            display: flex;
            justify-content: center;
            .el-form {
                width: 80%;
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
        }
    }
</style>
