<script setup>
import Todos from "@/components/Todos.vue";
</script>

<template>
  <main class="max-w-screen-sm mx-auto -mt-[4.825rem] sm:-mt-12 px-8">
    <Todos />
    <Teleport to="body">
      <p
        class="text-center w-full absolute bottom-5 text-sm font-semibold text-LT_darkGrayishBlue dark:text-DT_veryDarkGrayishBlue font-Josefin"
      >
        Drag and drop to reorder list
      </p>
    </Teleport>
  </main>
</template>
