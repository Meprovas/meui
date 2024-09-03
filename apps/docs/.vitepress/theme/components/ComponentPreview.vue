<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';

import ComponentLoader from './ComponentLoader.vue';
import { codeToHtml } from 'shiki';

import { createCssVariablesTheme } from 'shiki';

const cssVariables = createCssVariablesTheme({
  name: 'shiki-themes github-light github-dark vp-code',
  variablePrefix: '--shiki-',
  variableDefaults: {},
});

const tabs = ['Preview', 'Code'];

const props = defineProps<{
  class?: string;
  name: string;
}>();

const currentTab = ref<string>(tabs[0]);
const rawString = ref<string>('');
const codeHtml = ref<string>('');
const transformedRawString = computed(() => rawString.value);

watch(
  () => props,
  async () => {
    try {
      rawString.value = await import(
        `../../../src/lib/example/${props.name}.vue?raw`
      ).then((res) => res.default.trim());

      codeHtml.value = await codeToHtml(transformedRawString.value, {
        lang: 'vue',
        theme: cssVariables,
      });
    } catch {
      console.log('error');
    }
  },
);

onMounted(async () => {
  try {
    rawString.value = await import(
      `../../../src/lib/example/${props.name}.vue?raw`
    ).then((res) => res.default.trim());

    codeHtml.value = await codeToHtml(transformedRawString.value, {
      lang: 'vue',
      theme: 'github-light',
    });
  } catch {
    console.log('error');
  }
});
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <div
      class="bg-white border-[1px] border-solid border-black me-shadow rounded overflow-hidden"
    >
      <div class="border-b-[1px] border-solid border-black">
        <nav class="-mb-px flex space-x-3 p-3" aria-label="Tabs">
          <a
            v-for="(tab, i) of tabs"
            :key="i"
            :class="[
              currentTab === tab
                ? '!text-white bg-black'
                : 'hover:border-black',
              'flex items-center justify-center no-underline whitespace-nowrap px-2.5 py-1.5 !text-black text-sm font-medium border-[1px] border-transparent rounded',
            ]"
            :aria-current="currentTab === tab ? 'page' : undefined"
            @click="() => (currentTab = tab)"
            >{{ tab }}
          </a>
        </nav>
      </div>
    </div>
    <div
      v-show="currentTab === 'Preview'"
      class="bg-white border-[1px] border-solid border-black me-shadow rounded overflow-hidden p-3"
    >
      <ComponentLoader v-if="props.name" :name="name" />
    </div>
    <div
      v-show="currentTab === 'Code'"
      class="bg-white border-[1px] border-solid border-black me-shadow rounded overflow-hidden [&>.language-vue]:py-0 [&>.language-vue]:!m-0 !m-0"
    >
      <div class="language-vue vp-adaptive-theme" style="flex: 1">
        <button title="Copy Code" class="copy"></button>
        <span class="lang">vue</span>
        <div v-html="codeHtml"></div>
      </div>
    </div>
  </div>
  <div :class="class" id="preview">
    <slot></slot>
  </div>
</template>
