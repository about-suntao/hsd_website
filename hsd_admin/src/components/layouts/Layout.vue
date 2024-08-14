<template>
    <div class="layout">
        <el-container>
            <el-aside>
                <SideBar></SideBar>
            </el-aside>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .layout {
        width: 100vw;
        height: 100vh;
        .el-container {
            .el-header {
                height: 80px;
                padding: 0;
            }
            .el-aside {
                width: 240px;
                padding: 0;
                height: 100vh;
                background: #5d6dea;
            }

            .el-main {
                padding: 10px;
                height: calc(100vh - 80px);
                overflow: scroll;
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>
