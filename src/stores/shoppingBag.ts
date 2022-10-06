import type { BagItemType, SizeNameEnum } from "@/types";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ShoeType, SizeType } from "@/types";
import _, { size } from "lodash";

interface State {
  bagItems: BagItemType[];
}

export const useShoppingBagStore = defineStore("shoppingBag", {
  state: (): State => ({
    bagItems: [],
  }),
  actions: {
    addItemToBag(bagItem: BagItemType) {
      this.bagItems.push(bagItem);
    },
    removeItemFromBag(shoeId: number, size: SizeNameEnum) {
      this.bagItems = this.bagItems
        .filter((item) => item.shoe.id === shoeId)
        .filter((item) => item.size.name !== size);
    },
    // setItemQuantity(shoeId: number, size: SizeNameEnum) {
    //    this.getBagItem(shoeId, size);

    // },
    getBagItem(shoeId: number, size: SizeNameEnum): BagItemType {
      return this.bagItems
        .filter((item) => item.shoe.id === shoeId)
        .filter((item) => item.size.name === size)[0];
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
