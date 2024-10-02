<script setup>
import { RouterView } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleTheme = useToggle(isDark);
</script>

<template>
  <div
    class="min-h-screen grid bg-LT_veryLightGrayishBlue text-LT_veryDarkGrayishBlue dark:bg-DT_veryDarkBlue dark:text-DT_lightGrayishBlue font-Josefin text-sm sm:text-base"
  >
    <header
      :class="isDark ? 'bg-header_dark' : 'bg-header_light'"
      class="bg-gradient-to-br from-check_P_bgClr to-check_S_bgClr"
    >
      <div class="flex flex-col max-w-screen-sm mx-auto px-6 sm:px-0 -mt-4">
        <div class="flex justify-between items-baseline">
          <h1
            class="text-3xl uppercase font-bold tracking-[0.4em] text-LT_veryLightGray leading-none"
          >
            Todo
          </h1>
          <button
            title="theme-switcher"
            @click="toggleTheme()"
            class="cursor-pointer"
          >
            <svg
              v-if="!isDark"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <p
      class="text-center self-end pb-3 text-sm font-semibold text-LT_darkGrayishBlue dark:text-DT_veryDarkGrayishBlue"
    >
      Drag and drop to reorder list
    </p>
  </div>
</template>

<style>
header {
  padding-block: 6rem;
  background-size: cover;
}
.bg-header_dark {
  background-image: url(./assets/images/bg-desktop-dark.jpg);
}
.bg-header_light {
  background-image: url(./assets/images/bg-desktop-light.jpg);
}
* button {
  outline: none;
}

::-webkit-scrollbar {
  display: none;
}

@media (max-width: 640px) {
  header {
    padding-block: 3rem;
  }
  .bg-header_dark {
    background-image: url(./assets/images/bg-mobile-dark.jpg);
  }
  .bg-header_light {
    background-image: url(./assets/images/bg-mobile-light.jpg);
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 600ms ease-in-out;
}

.page-enter-from,
.page-leave-from {
  opacity: 0;
  scale: 0.5;
}
</style>
