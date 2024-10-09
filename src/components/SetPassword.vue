<template>
    <div class="login-container">
        <el-card class="login-card">
            <template #header>
                <h2 class="login-title">設置密碼</h2>
            </template>
            <div class="login-content">
                <el-form :model="form" :rules="rules" ref="passwordForm" label-position="top" class="login-form">
                    <el-form-item label="密碼" prop="password">
                        <el-input v-model="form.password" type="password" placeholder="請輸入密碼" show-password>
                            <template #prefix>
                                <el-icon>
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="確認密碼" prop="confirmPassword">
                        <el-input v-model="form.confirmPassword" type="password" placeholder="請再次輸入密碼" show-password>
                            <template #prefix>
                                <el-icon>
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleSetPassword" :loading="loading" class="login-button">設置密碼</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Lock } from '@element-plus/icons-vue'
import { auth, db } from '../firebase'
import { 
    EmailAuthProvider, 
    linkWithCredential,
    type User
} from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'

const router = useRouter()
const route = useRoute()
const passwordForm = ref()
const loading = ref(false)

const form = reactive({
    password: '',
    confirmPassword: ''
})

const rules = {
    password: [
        { required: true, message: '請輸入密碼', trigger: 'blur' },
        { min: 6, message: '密碼長度至少為 6 個字符', trigger: 'blur' }
    ],
    confirmPassword: [
        { required: true, message: '請再次輸入密碼', trigger: 'blur' },
        {
            validator: (rule: any, value: string, callback: Function) => {
                if (value !== form.password) {
                    callback(new Error('兩次輸入的密碼不一致'))
                } else {
                    callback()
                }
            },
            trigger: 'blur'
        }
    ]
}

const handleSetPassword = async () => {
    if (!passwordForm.value) return
    await passwordForm.value.validate(async (valid: boolean) => {
        if (valid) {
            loading.value = true
            try {
                const user = auth.currentUser as User
                if (user && user.email) {
                    // 創建 EmailAuthProvider 憑證
                    const credential = EmailAuthProvider.credential(user.email, form.password)
                    
                    // 將 Gmail 帳戶與密碼關聯
                    await linkWithCredential(user, credential)
                    
                    // 更新 Firestore 中的用戶文檔
                    await updateDoc(doc(db, 'users', user.uid), {
                        hasSetPassword: true
                    })

                    ElMessage.success('密碼設置成功')
                    router.push('/')
                }
            } catch (error: any) {
                console.error('Set password error:', error)
                ElMessage.error(`密碼設置失敗：${error.message}`)
            } finally {
                loading.value = false
            }
        }
    })
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 60px);
    background-color: var(--background-color);
}

.login-card {
    width: 100%;
    max-width: 400px; /* 調整卡片寬度 */
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    overflow: hidden;
}

.login-title {
    color: var(--primary-color);
    text-align: center;
    margin: 0;
    font-size: 24px;
}

.login-content {
    padding: 20px; /* 添加內邊距 */
}

.login-form {
    width: 100%; /* 表單佔滿整個卡片寬度 */
}

.login-button {
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
}

:deep(.el-card) {
    background-color: var(--background-color);
    color: var(--text-color);
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.1);
}

:deep(.el-card__header) {
    background-color: rgba(255, 215, 0, 0.1);
    border-bottom: 1px solid var(--primary-color);
    padding: 15px;
}

:deep(.el-input__inner) {
    background-color: #000000 !important;
    color: var(--text-color);
    border-color: var(--primary-color);
    height: 50px;
    font-size: 18px;
}

:deep(.el-input__inner:focus) {
    border-color: var(--secondary-color);
}

:deep(.el-form-item__label) {
    color: var(--text-color);
}

:deep(.el-button--primary) {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--background-color);
}

:deep(.el-button--primary:hover) {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
}

:deep(.el-input__prefix) {
    color: var(--primary-color);
}

:deep(.el-input__inner::placeholder) {
    color: rgba(255, 215, 0, 0.5);
}

:deep(.el-input__wrapper) {
    background-color: #000000 !important;
    box-shadow: 0 0 0 1px var(--primary-color) inset !important;
}

:deep(.el-input__prefix) {
    background-color: #000000;
    color: var(--primary-color);
}

:deep(.el-input__prefix-inner) {
    background-color: #000000;
}
</style>