<template>
  <el-container class="app-container">
    <el-header class="header">
      <div class="header-content">
        <h2 class="app-title">PTCG Pocket Dex</h2>
        <div class="nav-menu">
          <router-link to="/cards" class="nav-item">卡牌列表</router-link>
          <router-link to="/deck-building" class="nav-item">牌組構築</router-link>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
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
  padding: 0 20px;
  height: 100%;
}

.app-title {
  color: var(--primary-color);
  margin: 0;
  font-size: 24px;
  margin-right: 20px;
}

.nav-menu {
  display: flex;
}

.nav-item {
  color: var(--text-color);
  text-decoration: none;
  padding: 10px 15px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
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
    align-items: flex-start;
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
</style>
