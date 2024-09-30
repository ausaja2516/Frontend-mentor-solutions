<template>
  <div>
    <slot />
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
          class="flex items-center justify-center gap-4 font-bold text-sm fixed bottom-16 left-8 right-8 max-w-screen-sm font-Josefin text-LT_darkGrayishBlue dark:text-DT_darkGrayishBlue bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue rounded-md p-4 flex-wrap sm:static sm:p-0"
        >
          <li
            v-for="(tab, i) in tabTitle"
            :key="i"
            class="cursor-pointer transition-all duration-300"
            :class="{
              'text-blue-600': tab === selectedTab,
              'hover:text-LT_veryDarkGrayishBlue dark:hover:text-DT_lightGrayishBlueHover':
                tab !== selectedTab,
            }"
            @click="selectedTab = tab"
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
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/TodoStore";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useSlots, ref, provide } from "vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greater("sm");

const todos = useCounterStore();
const slots = useSlots();
const tabTitle = slots.default().map((t) => t.props.tab);
const selectedTab = ref(tabTitle[0]);

provide("selectedTab", selectedTab);
</script>
