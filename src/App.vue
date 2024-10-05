<template>
  <header>
    <h1>Pokémon TCG Pocket</h1>
    <nav>
      <router-link to="/cards" class="nav-button">卡牌列表</router-link>
      <router-link to="/deck-building" class="nav-button">牌組構築</router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <p>&copy; ©2024 Pokémon. ©1995–2024 Nintendo / Creatures Inc. / GAME FREAK inc. TM, ®, and character names are
      trademarks of Nintendo.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
:root {
  --primary-color: #FF0000; /* Pokemon 寶貝球的紅色 */
  --secondary-color: #34495e; /* 恢復原來的次要顏色 */
  --accent-color: #42b983; /* 恢復原來的強調色 */
  --text-color: #333;
  --bg-color: #f4f4f4;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

header, footer {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

h1 {
  margin: 0;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3); /* 添加文字陰影以增強可讀性 */
}

nav {
  margin-top: 1rem;
}

.nav-button {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
  background-color: var(--secondary-color);
}

.nav-button:hover, .nav-button.router-link-exact-active {
  background-color: var(--accent-color);
  color: white; /* 恢復原來的文字顏色 */
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
