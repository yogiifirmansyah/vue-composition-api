<script setup>
import { onMounted, onUpdated, ref } from "vue";

const tasks = ref([]);

const fetchTasks = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/tasks");
    const result = await response.json();
    tasks.value = result.data;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
  }
};

// Fungsi untuk mengubah status isCompleted dari task
const toggleTaskCompletion = async (task) => {
  const previousStatus = task.isCompleted;
  const updatedStatus = !task.isCompleted;

  // Optimistically update UI
  task.isCompleted = updatedStatus;

  try {
    const response = await fetch(`http://localhost:8000/api/v1/tasks/${task.id}/complete`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: updatedStatus }),
    });

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    const updatedTask = await response.json();

    // Perbarui data task di client side
    const taskIndex = tasks.value.findIndex((t) => t.id === task.id);
    tasks.value[taskIndex] = updatedTask.data;
  } catch (error) {
    alert(`Error updating task: ${error}`);
    // Rollback if there's an error
    task.isCompleted = previousStatus;
  }
};

const removeTask = async (id) => {
  // Simpan task sebelum dihapus untuk rollback jika diperlukan
  const previousTasks = [...tasks.value];

  // Optimistically remove task dari UI
  tasks.value = tasks.value.filter((task) => task.id !== id);

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/tasks/${id}`, {
      method: "DELETE",
    });

    if (response.status != 204) {
      throw new Error("Failed to update task");
    }

    // Menghapus task dari client-side setelah berhasil dihapus dari server
    tasks.value = tasks.value.filter((task) => task.id !== id);
  } catch (error) {
    alert(`Error deleting task: ${error}`);
    // Jika ada error, rollback ke state sebelumnya
    tasks.value = previousTasks;
  }
};

// Melacak ketika komponen selesai diperbarui
onUpdated(() => {
  console.log("Component updated, DOM has been refreshed!");
});

// Memuat data setelah komponen dirender
onMounted(() => {
  console.log("Component mounted, fetching tasks...");
  fetchTasks();
});
</script>

<template>
  <h1>Task List API</h1>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <input type="checkbox" :checked="task.isCompleted" @change="toggleTaskCompletion(task)" :id="'taskCompleted-' + task.id" />
      <label :class="{ taskCompleted: task.isCompleted }" :for="'taskCompleted-' + task.id">{{ task.name }}</label> - <a href="" @click.prevent="removeTask(task.id)">x</a>
    </li>
  </ul>
</template>

<style scoped>
.taskCompleted {
  text-decoration: line-through;
}

a {
  text-decoration: none;
}
</style>
