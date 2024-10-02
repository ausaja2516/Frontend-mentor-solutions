<template>
  <div v-if="todos.items.length && tab === selectedTab">
    <ul
      class="max-h-[340px] overflow-y-auto bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue rounded-t-md shadow-xl"
    >
      <Draggable
        v-model="localItems"
        item-key="id"
        drag-class="drag"
        ghost-class="ghost"
        class="divide-y divide-LT_lightGrayishBlue dark:divide-DT_veryDarkGrayishBlue"
      >
        <template #item="{ element }">
          <Item :item="element">
            <button
              title="undo-items"
              v-if="tab === 'Removed'"
              class="order-3 text-xl flex items-center justify-center h-5 relative"
              @click="todos.undoRemoved(element)"
            >
              &leftarrow;
              <span
                class="absolute bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue w-6 h-6 rounded-full z-10 scale-1 opacity-20 hover:scale-150 hover:invisible hover:opacity-0 hover:bg-LT_veryDarkGrayishBlue dark:hover:bg-DT_lightGrayishBlue transition-all duration-500"
              ></span>
            </button>
            <button
              title="delete-items"
              v-if="tab === 'Removed'"
              class="order-3 text-xl flex items-center justify-center h-5 relative"
              @click="todos.deleteItem(element)"
            >
              &rightarrow;
              <span
                class="absolute bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue w-6 h-6 rounded-full z-10 scale-1 opacity-20 hover:scale-150 hover:invisible hover:opacity-0 hover:bg-LT_veryDarkGrayishBlue dark:hover:bg-DT_lightGrayishBlue transition-all duration-500"
              ></span>
            </button>
            <button
              v-else
              title="remove-items"
              @click="todos.removeItem(element)"
              class="order-3 flex items-center justify-center relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  fill="#494C6B"
                  fill-rule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
              <span
                class="absolute bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue w-6 h-6 rounded-full z-10 scale-1 opacity-20 hover:scale-150 hover:invisible hover:opacity-0 hover:bg-LT_veryDarkGrayishBlue dark:hover:bg-DT_lightGrayishBlue transition-all duration-500"
              ></span>
            </button>
          </Item>
        </template>
      </Draggable>
    </ul>
  </div>
</template>

<script setup>
import Item from "@/components/Item.vue";
import { useTodoStore } from "@/stores/TodoStore";
import { inject, ref, watch } from "vue";
import Draggable from "vuedraggable";

const todos = useTodoStore();

const selectedTab = inject("selectedTab");

const props = defineProps({
  tab: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Array,
    default: [],
  },
});
const localItems = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    localItems.value = newValue;
  }
  // { deep: true } // items will be back to their index
);
</script>
