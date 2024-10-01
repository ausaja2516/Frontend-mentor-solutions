<template>
  <div>
    <TabWrapper>
      <ItemList :items="todos.items" tab="All" />
      <ItemList :items="todos.activeItems" tab="Active" />
      <ItemList :items="todos.completeItems" tab="Completed" />
      <ItemList :items="todos.removedItems" tab="Removed" />
    </TabWrapper>
  </div>
</template>

<script setup>
import ItemList from "@/components/ItemList.vue";
import TabWrapper from "./TabWrapper.vue";
import { useTodoStore } from "@/stores/TodoStore";

const todos = useTodoStore();
</script>
