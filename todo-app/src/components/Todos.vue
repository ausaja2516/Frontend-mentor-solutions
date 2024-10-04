<template>
  <div>
    <!-- items list -->
    <ul
      class="max-h-[340px] overflow-y-auto bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue rounded-t-md shadow-xl"
    >
      <Draggable
        v-model="todos.items"
        item-key="id"
        drag-class="drag"
        ghost-class="ghost"
        class="divide-y divide-LT_lightGrayishBlue dark:divide-DT_veryDarkGrayishBlue"
      >
        <template #item="{ element }">
          <div
            v-if="
              currentTab === 'All' ||
              (currentTab === 'Active' && !element.isComplete) ||
              (currentTab === 'Completed' && element.isComplete)
            "
          >
            <TodosItem :item="element">
              <button
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
            </TodosItem>
          </div>
        </template>
      </Draggable>
    </ul>
    <!-- removed Items List -->
    <ul
      v-if="currentTab === 'Removed'"
      class="max-h-[340px] overflow-y-auto bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue rounded-t-md shadow-xl"
    >
      <Draggable
        v-model="todos.removedItems"
        item-key="id"
        drag-class="drag"
        ghost-class="ghost"
        class="divide-y divide-LT_lightGrayishBlue dark:divide-DT_veryDarkGrayishBlue"
        tag="ul"
      >
        <template #item="{ element }">
          <TodosItem :item="element">
            <button
              title="undo-items"
              v-if="currentTab === 'Removed'"
              class="order-3 text-xl flex items-center justify-center h-5 relative text-LT_veryDarkGrayishBlue dark:text-DT_veryDarkGrayishBlue"
              @click="todos.undoRemoved(element)"
            >
              &leftarrow;
              <span
                class="absolute bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue w-6 h-6 rounded-full z-10 scale-1 opacity-20 hover:scale-150 hover:invisible hover:opacity-0 hover:bg-LT_veryDarkGrayishBlue dark:hover:bg-DT_lightGrayishBlue transition-all duration-500"
              ></span>
            </button>
            <button
              title="delete-items"
              v-if="currentTab === 'Removed'"
              class="order-3 text-xl flex items-center justify-center h-5 relative text-LT_veryDarkGrayishBlue dark:text-DT_veryDarkGrayishBlue"
              @click="todos.deleteItem(element)"
            >
              &rightarrow;
              <span
                class="absolute bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue w-6 h-6 rounded-full z-10 scale-1 opacity-20 hover:scale-150 hover:invisible hover:opacity-0 hover:bg-LT_veryDarkGrayishBlue dark:hover:bg-DT_lightGrayishBlue transition-all duration-500"
              ></span>
            </button>
          </TodosItem>
        </template>
      </Draggable>
    </ul>

    <TodosFilter :currentTab="currentTab" />
  </div>
</template>

<script setup>
import TodosItem from "@/components/TodosItem.vue";
import { useTodoStore } from "@/stores/TodoStore";
import { provide, ref } from "vue";
import Draggable from "vuedraggable";
import TodosFilter from "./TodosFilter.vue";

const todos = useTodoStore();
const currentTab = ref("All");

provide("currentTab", currentTab);
</script>
