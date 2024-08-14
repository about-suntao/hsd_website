<template>
    <div class="product">
        <pageTitle name="师资团队"></pageTitle>
        <div class="searchForm">
            <div class="search">
                <el-form :model="searchParams" @submit.native.prevent>
                    <el-form-item label="姓名：">
                        <el-input
                            v-model="searchParams.name"
                            @change="getTableData"
                            clearable
                            placeholder="请输入姓名"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="clearSearch">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="buttonGroup">
                <el-button type="primary" @click="openAddPopup">新增</el-button>
            </div>
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
                <el-table-column prop="name" label="姓名" />
                <el-table-column prop="picture" label="照片">
                    <template #default="scoped">
                        <el-image class="Img" :src="scoped.row.picture"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="position" label="职位" />
                <el-table-column prop="description" label="描述" show-overflow-tooltip />
                <el-table-column prop="createTime" label="创建时间" />
                <el-table-column label="操作" width="200">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="openEditPopup(scope.row)">编辑</el-button>
                        <el-button type="danger" size="small" @click="delUser(scope.row)">删除</el-button>
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
        <el-dialog v-model="Popup" :title="PopupStatus === 'add' ? '新建' : '编辑'" width="550">
            <div class="e_body">
                <el-form :model="userForm" ref="ruleFormRef" :rules="rules" label-width="70">
                    <el-form-item label="姓名:" prop="name">
                        <el-input v-model="userForm.name" placeholder="请输入姓名" />
                    </el-form-item>
                    <el-form-item label="职位:" prop="position">
                        <el-input v-model.number="userForm.position" placeholder="请输入职位" />
                    </el-form-item>
                    <el-form-item label="描述:" prop="description">
                        <el-input
                            v-model.number="userForm.description"
                            :rows="4"
                            type="textarea"
                            placeholder="请输入个人描述"
                        />
                    </el-form-item>
                    <el-form-item label="照片:" prop="picture">
                        <el-upload class="avatar-uploader" :show-file-list="false" :http-request="uploadPicture">
                            <img v-if="userForm.picture" :src="userForm.picture" class="avatar" alt="" />
                            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                        </el-upload>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="Popup = false">取消</el-button>
                    <el-button type="primary" @click="submitForm"> 确认 </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
    import { reactive, ref, onMounted } from 'vue'
    import { getInfo, addInfo, editInfo, delInfo } from './team'
    import { uploadImg } from '@/axios/commonHttps'
    import type { UploadRequestOptions, FormRules } from 'element-plus'

    const tableData = ref([])
    const searchParams = reactive({
        name: null,
        pageNum: 1,
        pageSize: 20,
        total: 0,
    })

    const Popup = ref(false)
    const PopupStatus = ref('')

    const userForm = ref({
        id: null,
        name: '',
        position: '',
        picture: null,
        description: '',
    })

    const ruleFormRef = ref<any>(null)

    const checkPicture = (rule: any, value: any, callback: any) => {
        if (value) {
            callback()
        } else {
            callback(new Error('请先上传照片!'))
        }
    }

    const rules = reactive<FormRules>({
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        position: [{ required: true, message: '请输入职称', trigger: 'blur' }],
        description: [{ required: true, message: '请输入描述', trigger: 'blur' }],
        picture: [{ required: true, validator: checkPicture, trigger: 'blur' }],
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
        getTableData()
    }

    const openAddPopup = () => {
        userForm.value = {
            id: null,
            name: '',
            position: '',
            description: '',
            picture: null,
        }
        ruleFormRef.value?.clearValidate()
        PopupStatus.value = 'add'
        Popup.value = true
    }

    const openEditPopup = (data: any) => {
        userForm.value = {
            id: data.id,
            name: data.name,
            position: data.position,
            picture: data.picture,
            description: data.description,
        }
        PopupStatus.value = 'edit'
        Popup.value = true
    }

    const uploadPicture = (params: UploadRequestOptions) => {
        const file = params.file
        const formData = new FormData()
        formData.append('file', file)
        uploadImg(formData).then((res: any) => {
            if (res.code === 200) {
                userForm.value.picture = res.data.url
                ElMessage.success('照片上传成功')
                ruleFormRef.value?.clearValidate('picture')
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
            message: `确认删除${data.name}吗？`,
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

    const submitForm = () => {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validate((valid: any) => {
            // 表单验证成功
            if (valid) {
                // 获取规格信息
                PopupStatus.value === 'add' ? addUser() : editUser()
                Popup.value = false
            } else {
                return false
            }
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
                    width: 200px;
                    height: auto;
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
                width: 90%;
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
