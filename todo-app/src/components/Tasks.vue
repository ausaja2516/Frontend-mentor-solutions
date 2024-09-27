<template>
  <div class="px-4 z-10">
    <h1 class="text-2xl font-semibold mb-4">ToDo App</h1>
    <form @submit.prevent="addNewTask" class="flex flex-wrap gap-3 mb-4">
      <input
        v-model="addTask"
        type="text"
        class="py-2 ps-2 rounded-md flex-1 text-black"
      />
      <button
        type="submit"
        class="bg-slate-800 py-2 px-4 rounded-md flex-1 text-nowrap"
      >
        Add Todo
      </button>
    </form>
    <p class="mb-4">{{ active.length }} tasks left</p>
    <div class="max-h-80 overflow-y-auto">
      <TaskList :tasks="active" title="Active" />
      <TaskList :tasks="complete" title="Completed" />
      <TaskList :tasks="tasks" title="All" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import TaskList from "@/components/TaskList.vue";

const addTask = ref("");

const tasks = ref([
  { id: 1, title: "make a todo app", isComplete: true },
  { id: 2, title: "drink coffee at 2pm", isComplete: false },
  { id: 3, title: "sleep early", isComplete: false },
]);

const complete = computed(() =>
  tasks.value.filter((task) => task.isComplete === true)
);
const active = computed(() =>
  tasks.value.filter((task) => task.isComplete === false)
);

const addNewTask = () => {
  if (addTask.value !== "") {
    tasks.value.push({
      id: tasks.value.length + 1,
      title: addTask.value,
      isComplete: false,
    });
  }
  addTask.value = "";
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
