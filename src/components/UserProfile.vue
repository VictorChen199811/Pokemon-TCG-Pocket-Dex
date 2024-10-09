<template>
  <div class="user-profile-container">
    <el-card class="user-profile-card">
      <template #header>
        <h2 class="user-profile-title">用戶資料</h2>
      </template>
      <div class="user-profile-content">
        <div class="avatar-container">
          <img v-if="userInfo.photoURL" :src="userInfo.photoURL" alt="User Avatar" class="avatar" />
          <el-avatar v-else :size="100" icon="el-icon-user-solid"></el-avatar>
        </div>
        <div class="user-info">
          <p><strong>使用者名稱：</strong> 
            <span v-if="!isEditing">{{ userInfo.displayName }}</span>
            <el-input v-else v-model="newDisplayName" placeholder="輸入新的顯示名稱"></el-input>
          </p>
          <el-button v-if="!isEditing" @click="startEditing" type="primary">編輯名稱</el-button>
          <div v-else class="edit-buttons">
            <el-button @click="saveDisplayName" type="primary">保存</el-button>
            <el-button @click="cancelEditing">取消</el-button>
          </div>
          <p><strong>電子郵件：</strong> {{ userInfo.email }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { auth, db } from '../firebase'
import { updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { ElMessage } from 'element-plus'

const userInfo = ref({
  displayName: '',
  email: '',
  photoURL: ''
})

const isEditing = ref(false)
const newDisplayName = ref('')

onMounted(() => {
  const user = auth.currentUser
  if (user) {
    userInfo.value = {
      displayName: user.displayName || '',
      email: user.email || '',
      photoURL: user.photoURL || ''
    }
  }
})

const startEditing = () => {
  isEditing.value = true
  newDisplayName.value = userInfo.value.displayName
}

const cancelEditing = () => {
  isEditing.value = false
  newDisplayName.value = ''
}

const saveDisplayName = async () => {
  const user = auth.currentUser
  if (user) {
    try {
      await updateProfile(user, { displayName: newDisplayName.value })
      
      // 更新 Firestore 中的用戶文檔
      const userDocRef = doc(db, 'users', user.uid)
      await updateDoc(userDocRef, { displayName: newDisplayName.value })

      userInfo.value.displayName = newDisplayName.value
      isEditing.value = false
      ElMessage.success('顯示名稱已更新')
    } catch (error) {
      console.error('更新顯示名稱失敗：', error)
      ElMessage.error('更新顯示名稱失敗，請稍後再試')
    }
  }
}
</script>

<style scoped>
.user-profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  background-color: var(--background-color);
}

.user-profile-card {
  width: 100%;
  max-width: 400px;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  overflow: hidden;
}

.user-profile-title {
  color: var(--primary-color);
  text-align: center;
  margin: 0;
  font-size: 24px;
}

.user-profile-content {
  padding: 20px;
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info p {
  margin: 10px 0;
  color: var(--text-color);
}

:deep(.el-card) {
  background-color: var(--background-color);
  color: var(--text-color);
}

:deep(.el-card__header) {
  background-color: rgba(255, 215, 0, 0.1);
  border-bottom: 1px solid var(--primary-color);
}

.user-info .el-button {
  margin-top: 10px;
  width: 100%;
}

.edit-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.edit-buttons .el-button {
  width: 48%;
}

:deep(.el-button) {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--background-color);
}

:deep(.el-button:hover) {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

:deep(.el-input__wrapper) {
  background-color: #000000;
  box-shadow: none;
  border: 1px solid var(--primary-color);
}

:deep(.el-input__inner) {
  background-color: #000000;
  color: var(--text-color);
  border: none;
  padding-left: 10px;
  padding-right: 10px;
}

/* ... 其他樣式保持不變 ... */
</style>