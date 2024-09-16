<script setup>
import { computed, onMounted, onUnmounted, onUpdated, reactive, watch, watchEffect } from "vue";

const props = defineProps({
  cartItem: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["removeProduct"]);

const item = reactive(props.cartItem);

const increment = () => item.quantity++;
const decrement = () => item.quantity--;
const priceChage = () => (item.price += 10);

const swapProduct = () => {
  (item.name = "Product Four"), (item.price = 40), (item.quantity = 1);
};

const total = computed(() => item.price * item.quantity);

const removeProduct = () => emit("removeProduct", item);

watch(
  () => item.quantity,
  () => {
    if (item.quantity == 5) {
      alert("You cannot add more item!");
      item.quantity -= 1;
    }
  },
  { immediate: true }
);

watchEffect(() => {
  console.log("Price Changed: ", item.price);
});

onMounted(() => {
  console.log("Component on mounted");
});

onUpdated(() => {
  console.log("Component on updated");
});

onUnmounted(() => {
  console.log("Component on unmounted");
});
</script>

<template>
  <ul>
    <li>
      <p>{{ item.name }} - {{ item.price }} - {{ item.quantity }}</p>
      <button @click="priceChage">Change Price</button>
      <button @click="swapProduct">Swap</button>
      <button @click="removeProduct">Remove</button>

      <p>{{ total }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </li>
  </ul>
</template>

<style></style>
