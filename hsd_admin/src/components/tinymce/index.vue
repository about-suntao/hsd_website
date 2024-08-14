<template>
    <editor v-model="myValue" :init="init" :disabled="disabled" :id="tinymceId"></editor>
</template>

<script setup lang="ts">
    import { ref, reactive, watch, onMounted } from 'vue'
    import { uploadImg } from '@/axios/commonHttps'

    import tinymce from 'tinymce/tinymce'
    import 'tinymce/skins/content/default/content.css'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/icons/default/icons'
    import 'tinymce/models/dom' // 这里是个坑 一定要引入
    import 'tinymce/themes/silver' // 界面UI主题
    import 'tinymce/plugins/image'
    import 'tinymce/plugins/table'
    import 'tinymce/plugins/lists' // 列表插件
    import 'tinymce/plugins/wordcount' // 文字计数
    import 'tinymce/plugins/preview' // 预览
    import 'tinymce/plugins/emoticons' // emoji表情
    import 'tinymce/plugins/emoticons/js/emojis.js' //必须引入这个文件才有表情图库
    import 'tinymce/plugins/code' // 编辑源码
    import 'tinymce/plugins/link' // 链接插件
    import 'tinymce/plugins/advlist' //高级列表
    import 'tinymce/plugins/codesample' //代码示例
    import 'tinymce/plugins/autoresize' // 自动调整编辑器大小
    import 'tinymce/plugins/quickbars' // 光标处快捷提示
    import 'tinymce/plugins/nonbreaking' //插入不间断空格
    import 'tinymce/plugins/searchreplace' //查找替换
    import 'tinymce/plugins/autolink' //自动链接
    import 'tinymce/plugins/directionality' //文字方向
    import 'tinymce/plugins/visualblocks' //显示元素范围
    import 'tinymce/plugins/visualchars' //显示不可见字符
    import 'tinymce/plugins/charmap' // 特殊符号
    import 'tinymce/plugins/insertdatetime' //插入日期时间
    import 'tinymce/plugins/importcss' //引入自定义样式的css文件

    const emits = defineEmits(['getContent'])
    //这里我选择将数据定义在props里面，方便在不同的页面也可以配置出不同的编辑器，当然也可以直接在组件中直接定义
    const props = defineProps({
        value: {
            type: String,
            default: () => {
                return ''
            },
        },
        baseUrl: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        plugins: {
            type: [String, Array],
            default:
                'preview searchreplace  quickbars autolink directionality code visualblocks visualchars image link codesample table nonbreaking charmap insertdatetime advlist lists wordcount emoticons',
        },
        knwlgId: {
            type: String,
        },
        toolbar: {
            type: [String, Array],
            default:
                'undo redo | forecolor backcolor bold emoticons italic underline strikethrough link codesample table image | alignleft aligncenter alignright alignjustify outdent indent | \
        blocks fontfamily fontsize | bullist numlist | blockquote subscript superscript removeformat | \
        charmap insertdatetime | cut copy paste pastetext',
        },
    })

    const loading = ref(false)
    const myValue = ref(props.value)
    const tinymceId = ref('vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + ''))

    //定义一个对象 init初始化
    const init = reactive({
        selector: '#' + tinymceId.value, //富文本编辑器的id,
        license_key: 'gpl',
        language_url: '/tinymce/langs/zh_CN.js', // 语言包的路径，具体路径看自己的项目
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide', // skin路径，具体路径看自己的项目
        width: '100%',
        height: 600,
        branding: false, // 是否禁用“Powered by TinyMCE”
        promotion: false, //去掉 upgrade
        menubar: 'edit view insert format tools table',
        paste_data_images: true, //允许粘贴图像
        image_dimensions: false, //去除宽高属性
        plugins: props.plugins, //这里的数据是在props里面就定义好了的
        toolbar: props.toolbar, //这里的数据是在props里面就定义好了的
        // 选中图片的快捷提示
        quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
        editimage_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
        // 文字样式
        font_formats: 'Arial=arial,helvetica,sans-serif; 宋体=SimSun; 微软雅黑=Microsoft Yahei; Impact=impact,chicago;', //字体
        fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px 64px 72px', //文字大小
        image_caption: true,
        editimage_cors_hosts: ['picsum.photos'],
        noneditable_class: 'mceNonEditable',
        toolbar_mode: 'wrap', // 工具栏模式 floating / sliding / scrolling / wrap
        // contextmenu: "bold copy",  // 上下文菜单
        // contextmenu: "link image table",
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
        image_advtab: true,
        importcss_append: true,
        paste_webkit_styles: 'all',
        paste_merge_formats: true,
        nonbreaking_force_tab: false,
        paste_auto_cleanup_on_paste: false,
        file_picker_types: 'file',
        // 选中文字的快捷提示
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        // 编辑器高度自适应
        // autoresize_bottom_margin: 50,
        // autoresize_max_height: 500,
        // autoresize_min_height: 350,
        // autoresize_on_init: true,
        // autoresize_overflow_padding: 50,
        content_css: '/tinymce/skins/content/default/content.css', //以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入
        //图片上传
        images_upload_handler: (blobInfo: any, progress: any) =>
            new Promise((resolve, reject) => {
                let file = blobInfo.blob()
                console.log(blobInfo.blob(), 'file')
                if (file.size / 1024 / 1024 > 100) {
                    reject({
                        message: '上传失败，图片大小请在 100M 以内',
                        remove: true,
                    })
                }
                const formData = new FormData()
                formData.append('file', file)
                loading.value = true
                uploadImg(formData)
                    .then((res: any) => {
                        if (res.code === 200) {
                            loading.value = false
                            // resolve(import.meta.env.VITE_APP_BASE_API + '/ekms/images/v1/preview/' + res.data.imgId)
                            resolve(res.data.url)
                        }
                    })
                    .catch(() => {
                        loading.value = false
                    })
            }),
    })

    //监听外部传递进来的的数据变化
    watch(
        () => props.value,
        () => {
            myValue.value = props.value
            emits('getContent', myValue.value)
        }
    )
    //监听富文本中的数据变化
    watch(
        () => myValue.value,
        () => {
            emits('getContent', myValue.value)
        }
    )
    //初始化编辑器
    onMounted(() => {
        tinymce.init({})
    })
</script>

<style lang="scss" scoped>
    :deep(.tox-tinymce) {
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        .tox-statusbar {
            display: none;
        }
    }
</style>
