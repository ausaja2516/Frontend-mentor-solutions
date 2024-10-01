<template>
  <div v-if="todos.items.length && tab === selectedTab">
    <ul
      class="max-h-[340px] overflow-y-auto bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue divide-y divide-LT_lightGrayishBlue dark:divide-DT_veryDarkGrayishBlue rounded-t-md shadow-xl"
    >
      <Item
        v-for="(item, index) in items"
        :key="item.id"
        :item="item"
        draggable="true"
        @dragstart="startDrag($event, index)"
        @drop="onDrop($event, index)"
        @dragenter.prevent
        @dragover.prevent
      >
        <button
          title="undo-items"
          v-if="tab === 'Removed'"
          class="order-3 text-xl flex items-center justify-center h-5 relative opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
          @click="todos.undoRemoved(item)"
        >
          &leftarrow;
          <span
            class="absolute bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue w-6 h-6 rounded-full z-10 scale-1 opacity-20 hover:scale-150 hover:invisible hover:opacity-0 hover:bg-LT_veryDarkGrayishBlue dark:hover:bg-DT_lightGrayishBlue transition-all duration-500"
          ></span>
        </button>
        <button
          v-else
          title="remove-items"
          @click="todos.removeItem(item)"
          class="order-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out relative"
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
    </ul>
  </div>
</template>

<script setup>
import Item from "@/components/Item.vue";
import { useTodoStore } from "@/stores/TodoStore";
import { inject, onUpdated } from "vue";
const todos = useTodoStore();

const selectedTab = inject("selectedTab");

const props = defineProps({
  tab: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: [],
  },
});

const startDrag = (event, index) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("draggableItemIndex", index);
};
const onDrop = (event, targetIndex) => {
  event.dataTransfer.dropEffect = "move";
  const draggableItemIndex = event.dataTransfer.getData("draggableItemIndex");
  if (selectedTab.value === "Removed") {
    const getDraggableitem = props.items.splice(draggableItemIndex, 1)[0];
    return props.items.splice(targetIndex, 0, getDraggableitem);
  }
  if (selectedTab.value === "All") {
    const getDraggableitem = props.items.splice(draggableItemIndex, 1)[0];
    return props.items.splice(targetIndex, 0, getDraggableitem);
  }
  if (selectedTab.value === "Active") {
    const getDraggableitem = props.items.splice(draggableItemIndex, 1)[0];

    return props.items.splice(targetIndex, 0, getDraggableitem);
  }
  if (selectedTab.value === "Completed") {
    const getDraggableitem = props.items.splice(draggableItemIndex, 1)[0];
    return props.items.splice(targetIndex, 0, getDraggableitem);
  }
};
</script>
