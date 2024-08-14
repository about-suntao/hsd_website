<template>
    <div class="login">
        <div class="logo">
            <img
                src="http://localhost:3003/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9491a454.webp&w=640&q=75"
                alt=""
            />
        </div>
        <div class="login_form">
            <div class="title">
                <h2>欢迎登录</h2>
                <p>官网后台管理系统</p>
            </div>
            <div class="notice">账号密码登录</div>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
                <el-form-item>
                    <el-input
                        v-model="ruleForm.phone"
                        placeholder="手机号"
                        size="large"
                        :prefix-icon="Avatar"
                        clearable
                    />
                </el-form-item>
                <el-form-item>
                    <el-input
                        v-model="ruleForm.password"
                        size="large"
                        type="password"
                        placeholder="密码"
                        show-password
                        :prefix-icon="Lock"
                        clearable
                    />
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="ruleForm.rememberPassword" label="记住密码" size="large" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit(ruleFormRef)"> 登 录 </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Avatar, Lock } from '@element-plus/icons-vue'
    import type { FormInstance, FormRules } from 'element-plus'
    import { Login } from './login.ts'

    import { ref, reactive, onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    interface RuleForm {
        phone: string
        password: string
        rememberPassword: boolean
    }

    const router = useRouter()

    const ruleFormRef = ref<FormInstance>()

    const ruleForm = reactive<RuleForm>({
        phone: '',
        password: '',
        rememberPassword: false,
    })

    const rules = reactive<FormRules<RuleForm>>({
        phone: [
            {
                required: true,
                message: '请输入账号',
                trigger: 'blur',
            },
        ],
        password: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'blur',
            },
        ],
    })

    onMounted(() => {
        if (localStorage.getItem('userInfo')) {
            const { phone, password } = JSON.parse(localStorage.getItem('userInfo') as string)
            ruleForm.phone = phone
            ruleForm.password = password
            ruleForm.rememberPassword = true
        }
        localStorage.removeItem('Authorization')
    })

    const onSubmit = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid) => {
            if (valid) {
                const params = {
                    phone: ruleForm.phone,
                    password: ruleForm.password,
                }
                Login(params).then((res: any) => {
                    if (res.code === 200) {
                        localStorage.setItem('Authorization', JSON.stringify(res.data))
                        if (ruleForm.rememberPassword) {
                            localStorage.setItem('userInfo', JSON.stringify(params))
                        } else {
                            localStorage.removeItem('userInfo')
                        }
                        ElMessage({
                            message: '登录成功',
                            type: 'success',
                        })
                        router.push('/')
                    } else {
                        ElMessage({
                            message: res.message,
                            type: 'error',
                        })
                    }
                })
            }
        })
    }
</script>

<style scoped lang="scss">
    .login {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-image: url('@/assets/img/login/loginBack.webp');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        .logo {
            height: 100%;
            padding-left: 119px;
            padding-top: 76px;
            img {
                width: 360px;
                height: auto;
            }
            h1 {
                font-size: 2.5rem;
                color: #5d6dea;
                font-weight: bold;
            }
            p {
                margin-top: 0.63rem;
                font-size: 1.2rem;
                color: #5d6dea;
                font-weight: bold;
            }
        }

        .login_form {
            width: 537px;
            height: 663px;
            background: #ffffff;
            border-radius: 8px;
            margin-right: 243px;
            padding: 0 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                h2 {
                    font-family: Microsoft YaHei, sans-serif;
                    font-weight: bold;
                    font-size: 40px;
                    color: #051226;
                    line-height: 47px;
                    letter-spacing: 3px;
                }
                p {
                    font-family: Microsoft YaHei, monospace;
                    font-weight: 400;
                    font-size: 24px;
                    color: #949ca9;
                    line-height: 28px;
                    letter-spacing: 1px;
                    text-align: left;
                }
            }
            .notice {
                padding: 44px 0 24px 0;
                font-family: Microsoft YaHei, sans-serif;
                font-weight: 400;
                font-size: 20px;
                color: #3e6ffe;
                line-height: 23px;
            }
            .el-form {
                :deep(.el-input__wrapper) {
                    height: 59px;
                    box-shadow: none;
                    background: #f6f6f6;
                    border-radius: 8px;
                    font-size: 20px;
                }

                :deep(.is-focus) {
                    box-shadow: 0 0 0 1px #9db6fd;
                }

                :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
                    background-color: #5d6dea;
                    border-color: #5d6dea;
                }

                :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
                    color: #5d6dea;
                }

                .el-form-item {
                    margin-bottom: 32px;
                }

                .el-button {
                    width: 100%;
                    height: 59px;
                    background: #5d6dea;
                    border-radius: 8px;
                    font-family: Microsoft YaHei, sans-serif;
                    font-weight: 400;
                    font-size: 24px;
                    color: #ffffff;
                    line-height: 28px;
                }
            }
        }
    }
</style>
