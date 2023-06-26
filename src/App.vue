<script setup>
  // import AboutView from "./views/AboutView.vue";
  // import HomeView from "./views/HomeView.vue";
</script>

<template>
  <header><router-link to="/header">Titulo Gamer</router-link></header>
  <aside>
    <nav class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </aside>
  <main>
    <router-view/>
  </main>
  <footer><router-link to="/footer">Pé</router-link></footer>
</template>

<style scoped>
.menu{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
