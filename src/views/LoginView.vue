<template>
    <div class="container">
        <span class="title">XX系统</span>
        <div class="login-box">
            <el-form 
                ref="loginFormRef" 
                :model="loginForm" 
                status-icon 
                :rules="rules" 
                label-width="80rem" 
                size="large"
            >
                <el-form-item label="账号：" prop="username">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <div class="btns">
                        <el-button class="login-btn" type="primary" @click="submitForm(loginFormRef)">登录</el-button>
                        <el-button class="login-btn" @click="resetForm(loginFormRef)">重置</el-button>
                    </div>

                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { LoginData } from "../types/login"
import { login } from "../apis/login"
// import type.... : 「 仅仅导入 / 导出声明 」
import type { FormInstance } from 'element-plus'
import { useRouter } from "vue-router"




export default defineComponent({
    setup() {
        const data = reactive(new LoginData())

        const rules = {
            username: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 3, max: 10, message: '账号长度在3-10字符之间', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 20, message: '密码长度在6-20字符之间', trigger: 'blur' },
            ]
        }

        /**
         * 登录
         */
        const loginFormRef = ref<FormInstance>()
        // 设置路由跳转
        const router = useRouter();
        const submitForm = (formEl: FormInstance | undefined) => {
            if (!formEl) return
            formEl.validate((valid) => {
                if (valid) {
                    login(data.loginForm).then (res => {
                        localStorage.setItem("token", res.data.token)
                        router.push("/")
                    })
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        }

        /**
         * 重置表单
         */
        const resetForm = (formEl: FormInstance | undefined) => {
            if (!formEl)    return
            formEl.resetFields()
        }

        return { ...toRefs(data), rules, loginFormRef, submitForm, resetForm }
    }
})
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: black;
    position: relative;

    .login-box {
        width: 450rem;
        height: 200rem;
        border-radius: 30rem;
        padding: 60rem 20rem;
        background-color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);

        .btns {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 20rem;
            position: relative;
            left: -8%;
        }

        .login-btn {
            width: 45%;
            height: 50rem;
        }
    }

    .title {
        display: block;
        color: white;
        font-size: 60rem;
        text-align: center;
        position: relative;
        left: 50%;
        top: 20%;
        transform: translate(-50%, 0);
    }

}
</style>