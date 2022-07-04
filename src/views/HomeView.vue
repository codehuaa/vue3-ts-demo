<template>
    <HeaderCP />
    <el-container>
        <el-aside width="200px">
            <el-menu 
                default-active="/goods" 
                class="el-menu-vertical-demo" 
                active-text-color="#ffd04b"
                background-color="#545c64"
                text-color="#fff"
                router
            >
                <el-menu-item v-for="item in list" :key="item.path" :index="item.path">
                    <span>{{ item.meta.title }}</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>Main</el-main>
    </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import HeaderCP from '../components/HeaderCP.vue'

export default defineComponent({
    components: {
        HeaderCP
    },
    setup() {

        const router = useRouter()

        const list = router.getRoutes().filter(v => v.meta.isShow)

        return { list }
    }
})
</script>

<style lang="scss" scoped>
.el-menu {
    height: calc(100vh - 80rem);
}
</style>