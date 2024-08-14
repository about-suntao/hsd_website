<template>
    <div class="preView">
        <div class="btn_group">
            <el-button type="info" @click="backPage">返回列表页</el-button>
        </div>
        <div class="article">
            <h2 class="title">{{ form.title }}</h2>
            <div class="time">
                <p>发布时间：{{ form.createTime }}</p>
                <p>浏览数：{{ form.viewCount }}</p>
            </div>
            <div class="content">
                <div v-html="form.content"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { getNewsDetail } from '../../news'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const form = ref({
        title: '',
        picture: '',
        keywords: '',
        description: '',
        content: '',
        typeId: null,
        isHot: '0',
        createTime: '',
        viewCount: null,
    })

    const getDetail = (id: string) => {
        getNewsDetail(id).then((res: any) => {
            if (res.code === 200) {
                form.value = res.data
            }
        })
    }

    onMounted(() => {
        if (router.currentRoute.value.query.id) {
            const id: any = router.currentRoute.value.query.id
            getDetail(id)
        }
    })

    const backPage = () => {
        router.push('/news/list')
    }
</script>

<style scoped lang="scss">
    .preView {
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        background-color: #fbfbfb;
        .btn_group {
            position: fixed;
            right: 50px;
            top: 100px;
        }
        .article {
            margin: 20px 0;
            width: 950px;
            background: #ffffff;
            border-radius: 12px;
            padding: 56px 48px;
            .title {
                text-align: center;
                font-family: Microsoft YaHei, sans-serif;
                font-weight: bold;
                font-size: 36px;
                color: #1e2c43;
                line-height: 58px;
                letter-spacing: 2px;
            }
            .time {
                margin: 36px 0;
                display: flex;
                font-family: Microsoft YaHei, sans-serif;
                font-weight: 400;
                font-size: 20px;
                color: #949ca9;
                line-height: 23px;
                text-align: left;
                p:last-child {
                    margin-left: 88px;
                }
            }
            .content {
            }
        }
    }
</style>
