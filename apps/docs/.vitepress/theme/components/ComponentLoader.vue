<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import Spinner from './Spinner.vue';

const props = defineProps<{
  name: string;
}>();

const Component = defineAsyncComponent({
  loadingComponent: Spinner,
  loader: () => import(`../../../src/lib/example/${props.name}.vue`),
  timeout: 5000,
});
</script>

<template>
  <Component :is="Component" />
</template>
