import { ref } from "vue";

export default function useCart() {
  const items = ref([]);

  const addProduct = (data) => {
    data.forEach((item) => {
      items.value.push(item);
    });
  };

  const removeProduct = (item) => {
    const index = items.value.findIndex((i) => i.id == item.id);
    items.value.splice(index, 1);
  };

  return {
    items,
    addProduct,
    removeProduct,
  };
}
