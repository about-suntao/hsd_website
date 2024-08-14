<template>
    <div class="header">
        <div class="user">
            <div class="img">
                <img :src="usrInfo?.avatar" alt="logo" />
            </div>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <p>{{ usrInfo.name }}</p>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="openDrawer"> 修改信息 </el-dropdown-item>
                        <el-dropdown-item @click="logOut"> 退出登录 </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <el-drawer v-model="drawer" title="修改个人信息" size="400px">
            <div class="e_body">
                <el-form :model="userForm" ref="ruleFormRef" :rules="rules" label-width="80">
                    <el-form-item label="用户名:" prop="name">
                        <el-input v-model="userForm.name" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="手机号:" prop="phone">
                        <el-input v-model.number="userForm.phone" placeholder="请输入手机号" />
                    </el-form-item>
                    <el-form-item label="密码:" prop="password">
                        <el-input type="password" v-model="userForm.password" placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item label="确认密码:" prop="password">
                        <el-input type="password" v-model="userForm.passwordAgain" placeholder="请确认密码" />
                    </el-form-item>
                    <el-form-item label="头像:" prop="avatar">
                        <el-upload class="avatar-uploader" :show-file-list="false" :http-request="uploadPicture">
                            <img v-if="userForm.avatar" :src="userForm.avatar" class="avatar" alt="" />
                            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                        </el-upload>
                    </el-form-item>
                </el-form>
            </div>
            <div class="btn">
                <el-button type="primary" @click="submitForm">确认修改</el-button>
            </div>
        </el-drawer>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive } from 'vue'
    import { ArrowDown } from '@element-plus/icons-vue'
    import { useRouter } from 'vue-router'
    import { uploadImg } from '@/axios/commonHttps'
    import type { UploadRequestOptions, FormRules } from 'element-plus'
    import { editAdminUser } from '@/views/admin/admin'

    const router = useRouter()
    const drawer = ref(false)

    const userForm = ref({
        id: null,
        name: '',
        phone: '',
        password: null,
        passwordAgain: null,
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

    const usrInfo = JSON.parse(localStorage.getItem('Authorization') as string)

    const logOut = () => {
        router.push('/login')
    }

    const openDrawer = () => {
        drawer.value = true
        userForm.value.id = usrInfo.id
        userForm.value.name = usrInfo.name
        userForm.value.phone = usrInfo.phone
        userForm.value.avatar = usrInfo.avatar
        userForm.value.password = null
        userForm.value.passwordAgain = null
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

    const submitForm = () => {
        if (userForm.value.password && userForm.value.password !== userForm.value.passwordAgain) {
            ElMessage.error('请确认密码输入一致')
            return
        }
        editAdminUser(userForm.value).then((res: any) => {
            if (res.code === 200) {
                drawer.value = false
                ElMessage.success('修改成功')
                setTimeout(() => {
                    router.push('/login')
                }, 1000)
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
    .menuDrawer {
        .el-drawer__body {
            padding: 0;
        }
    }
</style>

<style scoped lang="scss">
    .header {
        height: 80px;
        border-bottom: 1px solid #dcdfe6;
        color: white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 40px;
        .user {
            display: flex;
            align-items: center;
            .img {
                width: 48px;
                height: 48px;
                margin-right: 16px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .el-dropdown {
                :focus-visible {
                    outline: none !important;
                }
                .el-dropdown-link {
                    display: flex;
                    align-items: center;
                    font-size: 20px;
                    p {
                        margin-right: 10px;
                    }
                    .el-icon--right {
                        margin-top: 6px;
                    }
                }
            }
        }
        .e_body {
            width: 100%;
            .el-form {
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
        .btn {
            margin-top: 50px;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>
