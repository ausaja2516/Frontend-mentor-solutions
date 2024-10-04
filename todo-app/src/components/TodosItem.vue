<template>
  <div>
    <li class="flex gap-4 items-center p-4 group cursor-move">
      <div class="contents">
        <p
          @click="item.isComplete = !item.isComplete"
          class="cursor-pointer order-2 flex-1"
          :class="{
            'line-through text-LT_lightGrayishBlue dark:text-DT_darkGrayishBlue decoration-LT_darkGrayishBlue dark:decoration-DT_darkGrayishBlue':
              item.isComplete,
          }"
        >
          {{ item.title }}
        </p>
        <button
          @click="item.isComplete = !item.isComplete"
          title="mark as complete"
          :class="{
            ' bg-gradient-to-br from-check_P_bgClr to-check_S_bgClr ':
              item.isComplete,
          }"
          class="h-6 w-6 order-1 rounded-[50%] border overflow-hidden border-LT_lightGrayishBlue dark:border-DT_veryDarkGrayishBlue group-hover:bg-gradient-to-br group-hover:from-check_P_bgClr group-hover:to-check_S_bgClr flex items-center justify-center cursor-pointer"
        >
          <span
            v-if="!item.isComplete"
            class="bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue w-5 h-5 rounded-full"
          >
          </span>
          <svg
            v-if="item.isComplete"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="9"
          >
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </button>
      </div>
      <slot />
    </li>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.drag > div > li {
  rotate: 8deg;
}
.drag[draggable="true"] {
  border: none;
}
.ghost > div {
  background: rgb(100, 100, 100);
  opacity: 0.1;
}
.ghost > div > li {
  visibility: hidden;
}
</style>
