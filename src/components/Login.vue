<template>
    <div class="login-container">
        <el-card class="login-card">
            <template #header>
                <h2 class="login-title">登入 / 註冊</h2>
            </template>
            <div class="login-content">
                <div class="login-image">
                    <img src="/img/pikachu_login_icon.png" alt="Pikachu Login Icon" />
                </div>
                <el-form :model="form" :rules="rules" ref="loginForm" label-position="top" class="login-form">
                    <el-form-item label="電子郵件" prop="email">
                        <el-input v-model="form.email" type="email" placeholder="請輸入您的電子郵件">
                            <template #prefix>
                                <el-icon>
                                    <Message />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密碼" prop="password">
                        <el-input v-model="form.password" type="password" placeholder="請輸入您的密碼" show-password>
                            <template #prefix>
                                <el-icon>
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleLogin" :loading="loading"
                            class="login-button">登入</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="handleGoogleLogin" :loading="loading"
                            class="google-login-button">
                            <i class="el-icon-google"></i> 使用 Google 帳號登入
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" @click="handleRegister" :loading="loading"
                            class="register-button">註冊新帳號</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { Message, Lock } from '@element-plus/icons-vue';
import { auth, googleProvider, db } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const router = useRouter();
const loginForm = ref();
const loading = ref(false);

const form = reactive({
  email: '',
  password: '',
});

const rules = {
  email: [
    { required: true, message: '請輸入電子郵件', trigger: 'blur' },
    {
      type: 'email',
      message: '請輸入有效的電子郵件地址',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { min: 6, message: '密碼長度至少為 6 個字符', trigger: 'blur' },
  ],
};

const handleLogin = async () => {
  if (!loginForm.value) return;
  const valid = await loginForm.value.validate();
  if (valid) {
    loading.value = true;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      
      // 檢查用戶是否存在於 Firestore 中
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        // 如果用戶不存在，創建新文檔
        await setDoc(userDocRef, {
          email: user.email,
          createdAt: new Date(),
        });
      }
      
      ElMessage.success('登入成功');
      router.push('/');
    } catch (error) {
      console.error('登入失敗：', error);
      ElMessage.error('登入失敗，請檢查您的電子郵件和密碼');
    } finally {
      loading.value = false;
    }
  } else {
    ElMessage.error('請正確填寫所有欄位');
  }
};

const handleRegister = async () => {
  if (!loginForm.value) return;
  const valid = await loginForm.value.validate();
  if (valid) {
    loading.value = true;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      // 在 Firestore 中創建用戶文檔
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      ElMessage.success('註冊成功，已自動登入');
      router.push('/');
    } catch (error) {
      console.error('註冊失敗：', error);
      ElMessage.error('註冊失敗，請稍後再試或使用不同的電子郵件');
    } finally {
      loading.value = false;
    }
  } else {
    ElMessage.error('請正確填寫所有欄位');
  }
};

const handleGoogleLogin = async () => {
  loading.value = true;
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // 檢查用戶是否已經存在於 Firestore 中
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // 如果用戶不存在，創建新文檔
      await setDoc(userDocRef, {
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        createdAt: new Date(),
        hasSetPassword: false, // 新增此字段
      });

      // 導向設定密碼頁面
      router.push({
        name: 'SetPassword',
        params: {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
      });
      ElMessage.success('請設定您的密碼');
    } else {
      // 如果用戶已存在，檢查是否已設定密碼
      const userData = userDoc.data();
      if (!userData.hasSetPassword) {
        router.push({
          name: 'SetPassword',
          params: {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
        });
        ElMessage.success('請設定您的密碼');
      } else {
        ElMessage.success('Google 登入成功');
        router.push('/');
      }
    }
  } catch (error) {
    console.error('Google 登入時出錯：', error);
    ElMessage.error('Google 登入失敗，請稍後再試');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* 減去header高度 */
  background-color: var(--background-color);
}

.login-card {
  width: 100%;
  max-width: 800px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-form {
  flex: 1;
  padding-right: 20px;
}

.login-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
}

.login-image img {
  max-width: 100%;
  height: auto;
}

.login-button,
.register-button {
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
    background-color: #000000 !important; /* 將輸入框背景設置為黑色 */
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

:deep(.el-button--info) {
  background-color: transparent;
  border-color: var(--primary-color);
  color: var(--primary-color);
}

:deep(.el-button--info:hover) {
  background-color: var(--primary-color);
  color: var(--background-color);
}

:deep(.el-input__prefix) {
  color: var(--primary-color);
}

/* 新增樣式以確保輸入框內的文字顏色正確 */
:deep(.el-input__inner::placeholder) {
  color: rgba(255, 215, 0, 0.5); /* 使用半透明的主色調作為佔位符顏色 */
}

/* 新增樣式以設定輸入框左側的圖標部分 */
:deep(.el-input__wrapper) {
  background-color: #000000 !important;
  box-shadow: 0 0 0 1px var(--primary-color) inset !important;
}

:deep(.el-input__inner) {
  background-color: #000000 !important;
  color: var(--text-color);
}

:deep(.el-input__prefix) {
  background-color: #000000;
  color: var(--primary-color);
}

:deep(.el-input__prefix-inner) {
  background-color: #000000;
}

/* ... 其他樣式保持不變 ... */

.google-login-button {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 10px;
}

:deep(.el-button--danger) {
  background-color: #DB4437;
  border-color: #DB4437;
  color: white;
}

:deep(.el-button--danger:hover) {
  background-color: #C53929;
  border-color: #C53929;
}

/* 如果需要 Google 圖標，您可能需要引入相應的圖標庫或使用自定義圖標 */
.el-icon-google::before {
  content: "\f1a0"; /* 這是一個示例，實際內容可能需要調整 */
  font-family: 'Font Awesome 5 Brands';
}
</style>