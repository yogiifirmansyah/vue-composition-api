<script setup>
import { ref } from "vue";

const newTask = ref(""); // State untuk task baru dari input
const tasks = ref([]); // State untuk daftar tugas

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value); // Tambahkan tugas ke daftar
    newTask.value = ""; // Reset input setelah menambah tugas
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1); // Menghapus tugas dari daftar
};
</script>

<template>
  <h1>Todo List</h1>
  <input v-model="newTask" placeholder="Enter a new task" />
  <button @click="addTask">Add Task</button>

  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}
      <button @click="removeTask(index)">Remove</button>
    </li>
  </ul>
</template>

<style scoped>
input {
  margin-right: 10px;
}
</style>
