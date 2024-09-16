<script setup>
import { reactive } from "vue";

const user = reactive({
  name: "",
  age: null,
  address: "",
});

const submitForm = () => {
  alert(`User: ${user.name}, Age: ${user.age}, Address: ${user.address}`);
};
</script>

<template>
  <h1>User Form</h1>
  <form @submit.prevent="submitForm">
    <label>
      Name:
      <input v-model="user.name" type="text" />
    </label>
    <label>
      Age:
      <input v-model="user.age" type="number" />
    </label>
    <label>
      Address:
      <input v-model="user.address" type="text" />
    </label>
    <button type="submit">Submit</button>
  </form>

  <h2>User Info</h2>
  <p><strong>Name:</strong> {{ user.name }}</p>
  <p><strong>Age:</strong> {{ user.age }}</p>
  <p><strong>Address:</strong> {{ user.address }}</p>
</template>

<style scoped>
form {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 10px;
}
</style>
