<script setup>
  // import AboutView from "./views/AboutView.vue";
  // import HomeView from "./views/HomeView.vue";
</script>

<template>
  <header>HEADER</header>
  <aside>
    <nav>
      <router-link to="/">Home</router-link>
      <br/>
      <br/>
      <router-link to="/about">About</router-link>
    </nav>
  </aside>
  <main>
    <router-view/>
  </main>
  <footer>FOOTER</footer>
</template>

<style scoped></style>
