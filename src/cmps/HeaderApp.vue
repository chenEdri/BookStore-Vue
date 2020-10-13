<template>
  <nav class="flex main-header">
    <div class="left-nav">
    <h2 c>MissBooks</h2>
    </div>
    <div class="right-nav">
      <router-link to ="/book">BookApp</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
