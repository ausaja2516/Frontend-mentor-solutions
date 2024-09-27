<template>
  <div>
    <Transition>
      <li class="flex justify-between items-center p-4">
        <p>{{ task.title }}</p>
        <input
          type="checkbox"
          v-model="task.isComplete"
          class="ml-2 cursor-pointer"
        />
      </li>
    </Transition>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    default: {},
  },
});
</script>
<style scoped></style>
