import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ShoeType, SizeType } from "@/types";
import _ from "lodash";

interface BagItem {
  shoe: ShoeType;
  size: SizeType;
  quantity: number;
}
interface State {
  bagItems: BagItem[];
}

export const useShoppingBagStore = defineStore("shoppingBag", {
  state: (): State => ({
    bagItems: [],
  }),
  actions: {
    addItemToBag(bagItem: BagItem) {
      this.bagItems.push(bagItem);
    },
  },
  getters: {
    total(state): number | string {
      return (_.sumBy(state.bagItems, "price") || 0).toFixed(2);
    },
    itemCount(state): number {
      return state.bagItems.length;
    },
  },
});
// export const useShoppingBagStore = defineStore('shoppingBag', () => {

//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
