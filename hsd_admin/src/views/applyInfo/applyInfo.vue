<template>
    <div class="product">
        <pageTitle name="报名订单列表"></pageTitle>
        <div class="searchForm">
            <div class="search">
                <el-form :model="searchParams">
                    <el-form-item label="学生姓名：">
                        <el-input
                            v-model="searchParams.name"
                            @change="getTableData"
                            clearable
                            placeholder="请输入学生姓名"
                        />
                    </el-form-item>
                    <el-form-item label="订单号：">
                        <el-input
                            v-model="searchParams.code"
                            @change="getTableData"
                            clearable
                            placeholder="请输入订单号"
                        />
                    </el-form-item>
                    <el-form-item label="报名项目：">
                        <el-select
                            v-model="searchParams.itemName"
                            @change="getTableData"
                            placeholder="请选择报名项目"
                            clearable
                        >
                            <el-option v-for="item in itemArr" :key="item.id" :label="item.name" :value="item.name" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="订单状态：">
                        <el-select
                            v-model="searchParams.status"
                            @change="getTableData"
                            placeholder="请选择订单状态"
                            clearable
                        >
                            <el-option v-for="item in statusArr" :key="item.id" :label="item.label" :value="item.id" />
                        </el-select>
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
                <el-table-column prop="itemName" label="报名项目" />
                <el-table-column prop="code" label="订单号" />
                <el-table-column prop="amount" label="价格" />
                <el-table-column prop="paymentMethod" label="支付方式">
                    <template #default="scope">
                        <p>
                            {{ scope.row.paymentMethod === 1 ? '支付宝' : scope.row.paymentMethod === 2 ? '微信' : '' }}
                        </p>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="订单状态">
                    <template #default="scope">
                        <p v-if="scope.row.status == 1">未支付</p>
                        <p v-else-if="scope.row.status == 2" style="color: #67c23a">已支付</p>
                        <p v-else-if="scope.row.status == 3">已完成</p>
                        <p v-else-if="scope.row.status == 4" style="color: gray">已过期</p>
                        <p v-else-if="scope.row.status == 5" style="color: red">退款申请中</p>
                        <p v-else="scope.row.status == 6" style="color: gray">已退款</p>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="300">
                    <template #default="scope">
                        <el-button type="success" size="small" @click="viewDetail(scope.row)">详情</el-button>
                        <el-button
                            v-if="scope.row.isRefund"
                            type="success"
                            size="small"
                            @click="refundRecord(scope.row)"
                        >
                            退款记录
                        </el-button>
                        <el-button
                            v-if="scope.row.status == 2"
                            type="primary"
                            size="small"
                            @click="complete(scope.row)"
                        >
                            完成
                        </el-button>
                        <el-button
                            v-if="scope.row.status == 5"
                            type="primary"
                            size="small"
                            @click="refund(scope.row, 1)"
                        >
                            同意退款
                        </el-button>
                        <el-button
                            v-if="scope.row.status == 5"
                            type="danger"
                            size="small"
                            @click="refund(scope.row, 2)"
                        >
                            禁止退款
                        </el-button>
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
        <el-dialog v-model="Popup" title="报名信息" width="900">
            <div class="e_body">
                <el-form label-width="100">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="学生姓名:">
                                <p>{{ popupData.name }}</p>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="身份证号:">
                                <p>{{ popupData.idCard }}</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="首选项目:">
                                <p>{{ popupData.item }}</p>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="护照号:">
                                <p>{{ popupData.passportNumber }}</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="父亲姓名:">
                                <p>{{ popupData.fatherName }}</p>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="父亲工作单位:">
                                <p>{{ popupData.fatherWork }}</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="母亲姓名:">
                                <p>{{ popupData.motherName }}</p>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="母亲工作单位:">
                                <p>{{ popupData.motherWork }}</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="高考英语成绩:">
                                <p>{{ popupData.englishScore }}</p>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="托福成绩:">
                                <p>{{ popupData.toeflScore }}</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="雅思成绩:">
                                <p>{{ popupData.ieltsScore }}</p>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="个人陈述:">
                                <p>{{ popupData.personalStatement }}</p>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="身份证正面:">
                                <img :src="popupData.idFrontside" alt="" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="身份证反面:">
                                <img :src="popupData.idBackside" alt="" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="护照照片:">
                                <img :src="popupData.passportPhoto" alt="" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="一寸免冠照:">
                                <img :src="popupData.bareheadedPhoto" alt="" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <!-- <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="Popup = false"> 确认 </el-button>
                </div>
            </template> -->
        </el-dialog>
        <el-dialog v-model="recordPopup" title="退款记录" width="900">
            <div class="e_body">
                <ul class="record">
                    <li v-for="item in recordData" :key="item.id">
                        <p>
                            <span class="label">申请：</span>用户于<span>{{ item.createTime }}</span
                            >申请退款，申请退款原因为：<span>{{ item.reason }}</span>
                        </p>
                        <p v-if="item.result === 2 && item.reasonReject === '用户取消退款'">
                            <span class="label">结果：</span> 用户于<span>{{ item.updateTime }}</span
                            >取消退款
                        </p>
                        <p v-else-if="item.result === 2">
                            <span class="label">结果：</span> 管理员于<span>{{ item.updateTime }}</span
                            >驳回退款申请，驳回原因为：<span>{{ item.reasonReject }}</span>
                        </p>
                        <p v-else-if="item.result === 1" style="color: #67c23a">
                            <span class="label">结果：</span>管理员于{{ item.updateTime }}同意退款申请，退款成功
                        </p>
                        <p v-else style="color: #67c23a"><span class="label">结果：</span>退款申请审核中......</p>
                    </li>
                </ul>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
    import { reactive, ref, onMounted } from 'vue'
    import { getInfo, getItemInfo, getDetail, refundOrder, completeOrder, getRefundRecord } from './applyInfo.ts'

    const tableData = ref([])
    const searchParams = reactive({
        name: null,
        code: null,
        status: null,
        itemName: null,
        pageNum: 1,
        pageSize: 20,
        total: 0,
    })

    const itemArr = ref<any>([])
    const statusArr = [
        { id: 1, label: '未支付' },
        { id: 2, label: '已支付' },
        { id: 3, label: '已完成' },
        { id: 4, label: '已过期' },
        { id: 5, label: '待退款' },
        { id: 6, label: '已退款' },
    ]

    const Popup = ref(false)
    const popupData = ref<any>({})

    const recordPopup = ref(false)
    const recordData = ref<any>({})

    const getTableData = () => {
        getInfo(searchParams).then((res: any) => {
            if (res.code) {
                tableData.value = res.data.list
                searchParams.total = res.data.total
            }
        })
    }

    const getItemData = () => {
        getItemInfo({ pageNum: 1, pageSize: 100 }).then((res: any) => {
            if (res.code) {
                itemArr.value = res.data.list
            }
        })
    }

    onMounted(() => {
        getTableData()
        getItemData()
    })

    const clearSearch = () => {
        searchParams.name = null
        searchParams.code = null
        searchParams.status = null
        searchParams.itemName = null
        getTableData()
    }

    const viewDetail = (data: any) => {
        getDetail(data.signUpId).then((res: any) => {
            if (res.code === 200) {
                Popup.value = true
                popupData.value = res.data
            }
        })
    }

    const complete = (data: any) => {
        ElMessageBox({
            title: '提示！',
            message: `确认该订单已经完成？`,
            showCancelButton: true,
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            customStyle: { width: '300px' },
            beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                    completeOrder({ id: data.id }).then((res: any) => {
                        instance.confirmButtonLoading = false
                        done()
                        if (res.code === 200) {
                            ElMessage.success('订单已完成')
                            getTableData()
                        }
                    })
                } else {
                    done()
                }
            },
        })
    }

    const refund = (data: any, status: number) => {
        if (status === 1) {
            const params = {
                reqSeqId: data.reqSeqId,
                result: status,
            }
            ElMessageBox({
                title: '提示',
                message: `确认同意-${data.name}-同学的退款吗？`,
                showCancelButton: true,
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                customStyle: { width: '300px' },
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        refundOrder(params).then((res: any) => {
                            instance.confirmButtonLoading = false
                            done()
                            if (res.code === 200) {
                                ElMessage.success('订单退款成功')
                                getTableData()
                            }
                        })
                    } else {
                        done()
                    }
                },
            })
        } else {
            ElMessageBox.prompt('请输入禁止学生退款的原因！', '退款原因', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                const params = {
                    reqSeqId: data.reqSeqId,
                    result: status,
                    reasonReject: value,
                }
                refundOrder(params).then((res: any) => {
                    if (res.code === 200) {
                        ElMessage.warning('已驳回该订单退款')
                        getTableData()
                    }
                })
            })
        }
    }

    const refundRecord = (data: any) => {
        getRefundRecord(data.id).then((res: any) => {
            if (res.code === 200) {
                recordPopup.value = true
                recordData.value = res.data
            }
        })
    }
</script>

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
            height: 500px;
            display: flex;
            justify-content: center;
            overflow: scroll;
            .el-form {
                :deep(.el-form-item__label) {
                    font-weight: bold;
                }
                img {
                    width: 90%;
                    height: auto;
                }
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
            .record {
                width: 90%;
                list-style: disc;
                li + li {
                    margin-top: 1rem;
                }
                p {
                    line-height: 1.5rem;
                    font-size: 1rem;
                    span {
                        color: red;
                        font-size: 0.9rem;
                    }
                    .label {
                        color: #606266;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>
