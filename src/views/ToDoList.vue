<template>
  <h1>ToDo List</h1>
  <ul v-for="todo in todos" :key="todo.id">
    <li :class="{ done: taskCompleted }" @click="taskCOmpleted">{{ todo.task }}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
      taskCompleted: false
    }
  },
  mounted() {
    this.getToDos();
  },
  methods: {
    getToDos() {
      axios
        .get("http://localhost:3000/todo-lists")
        .then((response) => {
          this.todos = response.data;
        })
    },
    taskCOmpleted() {
      this.taskCompleted = !this.taskCompleted;
    }
  }
}
</script>

<style>
  .done {
    color: aquamarine;
  }
</style>