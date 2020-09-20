<template>
  <div class="profile">
    <h1>这是档案标题</h1>
    <p>这是档案的内容，哈哈哈</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>