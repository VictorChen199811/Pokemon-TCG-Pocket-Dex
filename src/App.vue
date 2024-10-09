<template>
  <el-container class="app-container">
    <el-header class="header">
      <div class="header-content">
        <h2 class="app-title">PTCG Pocket Dex</h2>
        <div class="nav-menu">
          <router-link to="/cards" class="nav-item">卡牌列表</router-link>
          <router-link to="/deck-building" class="nav-item">牌組構築</router-link>
          <router-link to="/decks" class="nav-item">牌組一覽</router-link>
        </div>
        <div class="login-container">
          <router-link v-if="!isLoggedIn" to="/login" class="nav-item login-button">註冊 / 登入</router-link>
          <template v-else>
            <el-button type="text" @click="handleLogout" class="nav-item login-button">登出</el-button>
            <el-button type="text" @click="goToUserProfile" class="nav-item user-profile-button">
              <el-icon><User /></el-icon>
            </el-button>
          </template>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ElMessage } from 'element-plus';
import { User } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'App',
  components: {
    User
  },
  setup() {
    useHead({
      title: 'Pokémon TCG Pocket Dex - 寶可夢卡牌口袋版資料庫',
      meta: [
        { name: 'description', content: '探索寶可夢卡牌遊戲的完整資料庫，包括卡牌列表和牌組構築工具。' },
        { name: 'keywords', content: '寶可夢, Pokémon, TCG,Pokémon TCG Pokect,PTCG Pocket, 卡牌遊戲, 牌組構築, 資料庫' },
      ],
    })

    const router = useRouter();
    const isLoggedIn = ref(false);

    const goToLogin = () => {
      router.push('/login');
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        ElMessage.success('Logged out successfully');
        router.push('/');
      } catch (error) {
        ElMessage.error('Logout failed, please try again');
      }
    };

    const goToUserProfile = () => {
      router.push('/user-profile');
    };

    let unsubscribe: (() => void) | null = null;

    onMounted(() => {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
      });
    });

    onUnmounted(() => {
      if (unsubscribe) {
        unsubscribe();
      }
    });

    return {
      isLoggedIn,
      goToLogin,
      handleLogout,
      goToUserProfile
    }
  }
})
</script>

<style>
:root {
  --primary-color: #FFD700; /* 黃色 */
  --secondary-color: #FFA500; /* 深黃色 */
  --text-color: #FFD700; /* 黃色文字 */
  --accent-color: #FFFFFF; /* 白色強調 */
  --background-color: #000000; /* 黑色背景 */
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: var(--background-color);
  border-bottom: 2px solid var(--primary-color);
  padding: 0;
  height: auto !important;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px; /* 設置一個固定高度 */
}

.app-title {
  color: var(--primary-color);
  margin: 0;
  font-size: 24px;
  margin-right: 20px;
}

.nav-menu {
  display: flex;
  height: 100%; /* 讓導航菜單填滿header的高度 */
}

.nav-item {
  color: var(--text-color);
  text-decoration: none;
  padding: 0 15px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  height: 100%; /* 讓每個項目填滿導航菜單的高度 */
}

.nav-item:hover,
.nav-item.router-link-active {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.el-main {
  flex: 1;
  padding: 20px;
  background-color: var(--background-color);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    padding: 10px 20px;
  }

  .nav-menu,
  .login-container {
    height: auto;
  }

  .nav-item,
  .login-button {
    height: 40px; /* 在移動設備上設置一個合適的高度 */
    justify-content: center;
  }

  .app-title {
    margin-bottom: 10px;
  }

  .nav-menu {
    width: 100%;
  }

  .nav-item {
    width: 100%;
    text-align: center;
  }
}

.login-container {
  margin-left: auto;
  height: 100%; /* 讓登入容器填滿header的高度 */
  display: flex;
  align-items: center;
}

.login-button {
  color: var(--text-color);
  text-decoration: none;
  padding: 0 15px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  height: 100%; /* 讓每個項目填滿導航菜單的高度 */
}

.login-button:hover {
  background-color: var(--primary-color);
  color: var(--background-color);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    padding: 10px 20px;
  }

  .nav-menu,
  .login-container {
    height: auto;
  }

  .nav-item,
  .login-button {
    height: 40px; /* 在移動設備上設置一個合適的高度 */
    justify-content: center;
  }

  .login-container {
    width: 100%;
    margin-top: 10px;
  }

  .login-button {
    width: 100%;
    text-align: center;
  }
}

.nav-item,
.login-button {
  color: var(--text-color);
  text-decoration: none;
  padding: 0 15px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  height: 100%; /* 讓每個項目填滿導航菜單的高度 */
}

.nav-item:hover,
.nav-item.router-link-active,
.login-button:hover,
.login-button.router-link-active {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.login-container {
  margin-left: auto;
  height: 100%; /* 讓登入容器填滿header的高度 */
  display: flex;
  align-items: center;
}

.login-button {
  border: none;
  background: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    padding: 10px 20px;
  }

  .nav-menu,
  .login-container {
    height: auto;
  }

  .nav-item,
  .login-button {
    height: 40px; /* 在移動設備上設置一個合適的高度 */
    justify-content: center;
  }

  .login-container {
    width: 100%;
    margin-top: 10px;
  }

  .login-button {
    width: 100%;
    text-align: center;
  }
}

.user-profile-button {
  padding: 0 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--text-color);
}

.user-profile-button:hover {
  background-color: var(--primary-color);
  color: var(--background-color);
}

@media (max-width: 768px) {
  .user-profile-button {
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }
}
</style>