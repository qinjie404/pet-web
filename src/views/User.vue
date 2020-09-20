<template>
  <div class="user">
    <h1>这是用户标题</h1>
    <p>这是用户标题的内容，哈哈哈</p>
    <p>{{$route.params.userName}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      getUserName() {
        return this.$route.params.userName
      }
    }
  }
</script>

<style scoped>

</style>