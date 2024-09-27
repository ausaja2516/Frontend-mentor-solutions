<template>
  <div v-if="tasks.length" class="space-y-5 mb-5">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <ul class="bg-slate-800 divide-y divide-slate-700 rounded-md">
      <Task v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<script setup>
import Task from "@/components/Task.vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
  tasks: {
    type: Array,
    default: [],
  },
});
</script>
