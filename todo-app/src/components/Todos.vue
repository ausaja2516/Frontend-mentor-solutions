<template>
  <div>
    <TabWrapper>
      <ItemList v-model="items" tab="All" />
      <ItemList v-model="activeItems" tab="Active" />
      <ItemList v-model="completeItems" tab="Completed" />
      <ItemList v-model="removedItems" tab="Removed" />
    </TabWrapper>
  </div>
</template>

<script setup>
import ItemList from "@/components/ItemList.vue";
import TabWrapper from "./TabWrapper.vue";
import { useTodoStore } from "@/stores/TodoStore";
import { storeToRefs } from "pinia";

const todos = useTodoStore();

const { items, removedItems, activeItems, completeItems } = storeToRefs(todos);
</script>
