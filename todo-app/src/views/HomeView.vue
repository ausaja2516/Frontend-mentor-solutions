<script setup>
import Todos from "@/components/Todos.vue";
import { useTodoStore } from "@/stores/TodoStore";
import { ref } from "vue";

const inputValue = ref("");
const todos = useTodoStore();
</script>

<template>
  <main
    class="max-w-screen-sm w-full mx-auto px-6 sm:px-0 -mt-20 flex flex-col gap-4"
  >
    <form
      @submit.prevent="todos.addItems(inputValue), (inputValue = '')"
      class="flex items-center gap-5 py-3 px-4 bg-LT_veryLightGray dark:bg-DT_veryDarkDesaturatedBlue shadow-xl rounded-md justify-items-start"
    >
      <span
        class="h-6 w-6 rounded-[50%] border border-LT_veryLightGrayishBlue dark:border-DT_veryDarkGrayishBlue"
      ></span>
      <input
        v-model="inputValue"
        type="text"
        class="flex-1 bg-transparent outline-none caret-P_brightBlue placeholder:text-LT_darkGrayishBlue"
        placeholder="Create a new todo"
      />
    </form>
    <Todos />
  </main>
</template>
