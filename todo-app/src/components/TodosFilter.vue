<template>
  <div
    class="flex items-center justify-center text-xs sm:justify-between p-4 bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue text-LT_darkGrayishBlue dark:text-DT_darkGrayishBlue rounded-b-md border-t border-LT_lightGrayishBlue dark:border-DT_veryDarkGrayishBlue shadow-xl"
  >
    <p v-if="todos.activeItems.length <= 1" class="flex-1 sm:flex-initial">
      {{ todos.activeItems.length }} item left
    </p>
    <p v-else class="flex-1 sm:flex-initial">
      {{ todos.activeItems.length }} items left
    </p>

    <Teleport to="body" :disabled="isDesktop">
      <ul
        class="flex items-center justify-center gap-4 font-bold text-sm absolute bottom-16 left-6 right-6 max-w-screen-sm font-Josefin text-LT_darkGrayishBlue dark:text-DT_darkGrayishBlue bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue rounded-md p-4 flex-wrap sm:static sm:p-0"
      >
        <li
          v-for="(tab, i) in tabs"
          :key="i"
          class="cursor-pointer transition-all duration-300"
          :class="{
            'text-blue-600': tab === currentTab,
            'hover:text-LT_veryDarkGrayishBlue dark:hover:text-DT_lightGrayishBlueHover':
              tab !== currentTab,
          }"
          @click="currentTab = tab"
        >
          {{ tab }}
        </li>
      </ul>
    </Teleport>

    <p
      @click="todos.clearCompleted()"
      class="cursor-pointer hover:text-LT_veryDarkGrayishBlue dark:hover:text-DT_lightGrayishBlueHover transition-all duration-300"
    >
      Clear Completed
    </p>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/stores/TodoStore";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { inject, ref } from "vue";

const currentTab = ref(inject("currentTab"));
const todos = useTodoStore();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greater("sm");

const tabs = ["All", "Active", "Completed", "Removed"];
</script>
