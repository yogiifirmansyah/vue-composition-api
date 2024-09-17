<script setup>
import { toRef } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["add-to-cart"]);

const addToCart = () => {
  // Emit event ke parent dengan membawa data produk
  // console.log("props.product: ", props.product);
  emit("add-to-cart", props.product, (status) => {
    alert(`${status} Product added to cart.`);
  });
};

const product = toRef(props.product);
console.log(product);
</script>

<template>
  <div class="product-detail">
    <h2>{{ product.name }}</h2>
    <p>Price: ${{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<style scoped>
.product-detail {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
