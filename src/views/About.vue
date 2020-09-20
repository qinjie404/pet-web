<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/message">Message</router-link>
    |
    <router-link to="/about/news">News</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "About",
    created() {
      console.log("aboutCreated");
    },
    unmounted() {
      console.log("aboutDestroyed");
    }
  };
</script>
