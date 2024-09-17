<script setup>
import { ref, watch, watchEffect } from "vue";

const keyword = ref("");
const results = ref([]);
const loading = ref(false);

// Fungsi simulasi untuk mengambil data dari API
const fetchResults = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`Product: ${query} 1`, `Product: ${query} 2`]);
    }, 1000);
  });
};

// Menggunakan watch untuk memantau perubahan keyword dan memicu pencarian
watch(keyword, async (newKeyword) => {
  if (newKeyword) {
    loading.value = true;
    results.value = await fetchResults(newKeyword);
    loading.value = false;
  } else {
    results.value = [];
  }
});

// Menggunakan watchEffect untuk melacak loading status dan hasil
watchEffect(() => {
  if (loading.value) {
    console.log("Fetching results...");
  } else {
    console.log("Results:", results.value);
  }
});
</script>

<template>
  <h1>Search Products</h1>
  <input v-model="keyword" placeholder="Enter product name" />
  <p v-if="loading">Loading...</p>
  <ul>
    <li v-for="result in results" :key="result">{{ result }}</li>
  </ul>
</template>

<style scoped>
input {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  max-width: 300px;
}
</style>
