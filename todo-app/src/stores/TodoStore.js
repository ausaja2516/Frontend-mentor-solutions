import { defineStore } from "pinia";

export let useCounterStore = defineStore("todos", {
  // data
  state() {
    return {
      items: [
        { id: 1, title: "Complete online JS course", isComplete: true },
        { id: 2, title: "Drink coffee at 2pm", isComplete: false },
        { id: 3, title: "Jog around the part", isComplete: false },
        { id: 4, title: "Read for 1 hour", isComplete: false },
        { id: 5, title: "Pick up groceries", isComplete: false },
        { id: 6, title: "Complete this Todo App on FM", isComplete: false },
      ],
      removedItems: [
        {
          id: 7,
          title: "This is a removed item",
          isComplete: false,
        },
      ],
    };
  },

  //   methods
  actions: {
    addItems(inputValue) {
      if (inputValue !== "") {
        this.items.push({
          id: this.items.length + 1,
          title: inputValue,
          isComplete: false,
        });
      }
    },

    removeItem(itemClicked) {
      this.items = this.items.filter((item) => {
        if (item === itemClicked) {
          this.removedItems.push(item);
        }
        return item !== itemClicked;
      });
    },

    clearCompleted() {
      this.items = this.items.filter((item) => {
        if (item.isComplete) {
          this.removedItems.push(item);
        }
        return !item.isComplete;
      });
    },
    undoRemoved(itemClicked) {
      this.items.push(itemClicked);
      console.log(this.items);
      this.removedItems = this.removedItems.filter(
        (item) => item !== itemClicked
      );
      console.log(this.removedItems);
    },
  },

  //   computed
  getters: {
    activeItems() {
      return this.items.filter((item) => item.isComplete !== true);
    },
    completeItems() {
      return this.items.filter((item) => item.isComplete === true);
    },
  },
});
