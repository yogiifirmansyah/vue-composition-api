<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const user = reactive({
      name: "Jane Doe",
      email: "jane.doe@example.com",
    });

    const updateProfile = () => {
      alert(`Updated: ${user.name}, ${user.email}`);
    };

    return {
      ...toRefs(user),
      updateProfile,
    };
  },
};
</script>

<template>
  <h1>Edit User Profile</h1>
  <form @submit.prevent="updateProfile">
    <label>
      Name:
      <input v-model="name" type="text" />
    </label>
    <label>
      Email:
      <input v-model="email" type="email" />
    </label>
    <button type="submit">Update</button>
  </form>

  <h2>Updated Profile</h2>
  <p><strong>Name:</strong> {{ name }}</p>
  <p><strong>Email:</strong> {{ email }}</p>
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
