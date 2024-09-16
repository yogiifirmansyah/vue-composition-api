<script setup>
import { ref } from "vue";
import CartItem from "./components/CartItem.vue";
import useCart from "./useCart";
import TodoList from "./components/TodoList.vue";
import Form from "./components/Form.vue";
import Profile from "./components/Profile.vue";

const message = ref("Hello World!");

const { items, addProduct, removeProduct } = useCart();

addProduct([
  {
    id: 1,
    name: "Product One",
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product Two",
    price: 20,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product Three",
    price: 30,
    quantity: 1,
  },
]);
</script>

<template>
  <input type="text" v-model="message" />
  {{ message }}

  <CartItem v-for="item in items" :key="item.id" :cart-item="item" @remove-product="removeProduct" />
  <hr />

  <!-- Creating reactive reference with the ref function -->
  <TodoList />
  <hr />

  <!-- Creating reactive object with the reactive function -->
  <Form />
  <hr />

  <!-- Creating reactive reference from reactive object -->
  <Profile />
</template>

<style scoped></style>
