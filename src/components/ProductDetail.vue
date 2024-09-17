<script setup>
import { toRef } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const product = toRef(props.product);
console.log(product);
</script>

<template>
  <div class="product-detail">
    <h2>{{ product.name }}</h2>
    <p>Price: ${{ product.price }}</p>
  </div>
</template>

<style scoped>
.product-detail {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
