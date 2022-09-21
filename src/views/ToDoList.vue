<template>
  <div class="d-flex mt-5 mb-2"> 
    <input type="text" placeholder="Add a Todo" class="form-control" v-model="task">
    <button v-if="editedTask == null" class="btn btn-warning rounded-0" @click="submitTask">Add</button>
    <button v-if="editedTask != null" class="btn btn-warning rounded-0" @click="updateTask(editedTask + 1)">Edit</button>
  </div>
  <div v-if="todos">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">S.N.</th>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col">#</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody v-for="(todo, index) in todos" :key="index">
        <tr>
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ todo.task }}</td>
          <td class="pointer">{{ todo.status }}</td>
          <td @click="editTask(index)"><span class="fa fa-pen pointer"></span></td>
          <td @click="deleteTask(todo.id)"><i class="fa fa-trash pointer"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h2>Fetching todos...</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: null,
      task: "",
      editedTask: null
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
    submitTask() {
      if(this.task.length === 0) return;
      if(this.editedTask == null) {
        axios 
        .post("http://localhost:3000/todo-lists", {
          task: this.task,
          status: "to-do"
        })
        .then((response) => {
          this.todos.push({
            task: this.task,
            status: "to-do"
          });
          this.task = "";
        })
      }
    },
    editTask(index) {
      this.task = this.todos[index].task;
      this.editedTask = index;
    },
    updateTask(id) {
      console.log(id);
      axios
        .put("http://localhost:3000/todo-lists/" + id)
        .then((response) => {
          this.getToDos();
        })
    },
    deleteTask(id) {
      axios 
        .delete("http://localhost:3000/todo-lists/" + id)
        .then((response) => {
          this.getToDos();
        })
    }
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>