<template>
    <el-header style="height: 80rem;">
        <el-row :gutter="20" justify="center">
            <el-col :span="4">
                <img class="logo" src="../assets/logo.png" alt="">
            </el-col>
            <el-col :span="16">
                <span class="title">XX系统</span>
            </el-col>
            <el-col :span="4">
                <span class="quit-btn">
                    <el-button size="large" type="info" round :icon="SwitchButton" @click="quitLogin()">退出登录
                    </el-button>
                </span>
            </el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SwitchButton } from '@element-plus/icons-vue'

export default defineComponent({
    setup() {

        const quitLogin = () => {
            localStorage.removeItem("token")
            window.location.reload()
        }

        return {SwitchButton, quitLogin,}
    }
})
</script>

<style lang="scss" scoped>
.el-header {
    height: 80rem;
    background-color: #666;

    .title {
        color: white;
        display: block;
        font-size: 30rem;
        text-align: center;
        height: 80rem;
        line-height: 80rem;
    }

    .logo {
        height: 80rem;
    }

    .quit-btn {
        display: block;
        text-align: center;
        height: 80rem;
        line-height: 80rem;
    }
}
</style>