<script setup>
import { computed, reactive } from "vue";

// Membuat state keranjang belanja menggunakan reactive
const cart = reactive([
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Headphones", price: 100, quantity: 3 },
]);

// Membuat properti komputasi untuk menghitung total harga
const totalPrice = computed(() => {
  return cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
});
</script>

<template>
  <h1>Shopping Cart</h1>
  <ul>
    <li v-for="(product, index) in cart" :key="index">{{ product.name }} - {{ product.price }} USD x {{ product.quantity }} = {{ product.price * product.quantity }} USD</li>
  </ul>

  <h2>Total Price: {{ totalPrice }} USD</h2>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
