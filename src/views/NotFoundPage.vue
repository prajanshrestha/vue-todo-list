<template>
  <h1>404...</h1>
  <h3>Page not found</h3>
  <p>
    <router-link :to="{ name: 'Home' }">Go to Homepage</router-link> 
    &nbsp;or&nbsp;
    <router-link :to="{ name: 'ToDoList' }">Go to Todo Lists</router-link> 
  </p>
</template>

<script>
export default {

}
</script>

<style>

</style>