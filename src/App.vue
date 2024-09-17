<script setup>
import { ref } from "vue";
import CartItem from "./components/CartItem.vue";
import useCart from "./useCart";
import TodoList from "./components/TodoList.vue";
import Form from "./components/Form.vue";
import Profile from "./components/Profile.vue";
import Cart from "./components/Cart.vue";
import Search from "./components/Search.vue";
import ProductDetail from "./components/ProductDetail.vue";

const products = [
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
];

const { items, addProduct, removeProduct } = useCart();

addProduct(products);

const cart = ref([]);

const handleAddToCart = (product, callback) => {
  // Menjalankan logika di parent, lalu memanggil callback dengan status
  setTimeout(() => {
    cart.value.push(product); // Menambahkan produk ke keranjang
    callback("SUCCESS!!");
  }, 1000);
};
</script>

<template>
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
  <hr />

  <!-- Computed Properties -->
  <Cart />
  <hr />

  <!-- Working with watch and watchEffect -->
  <Search />
  <hr />

  <!-- Working with props && Emitting events -->
  <h1>Product List</h1>
  <ProductDetail v-for="(product, index) in products" :key="index" :product="product" @add-to-cart="handleAddToCart" />
  <h2>Shopping Cart</h2>
  <ul>
    <li v-for="(item, index) in cart" :key="index">{{ item.name }} - ${{ item.price }}</li>
  </ul>
  <hr />
</template>

<style scoped></style>
