<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MinusIcon, PlusIcon } from '@heroicons/vue/20/solid';

const faqs = [
  {
    question: 'What is Lorem Ipsum?',
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: 'Why do we use it?',
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  // More questions...
];
</script>

<template>
  <dl class="space-y-4">
    <Disclosure
      ref="scoped"
      as="div"
      v-for="faq in faqs"
      :key="faq.question"
      v-slot="{ open }"
    >
      <dt
        :class="[
          open ? 'me-shadow-sm bg-[#f4f4f0]' : '',
          'rounded me-border-1 hover:bg-[#f4f4f0] transition ease duration-300',
        ]"
      >
        <DisclosureButton
          class="disclosure-button flex w-full items-start justify-between text-left text-black p-4"
        >
          <span class="text-base font-semibold leading-7">{{
            faq.question
          }}</span>
          <span class="pl-6 flex h-7 items-center relative">
            <MinusIcon class="h-6 w-6 left-0 absolute" aria-hidden="true" />
            <MinusIcon
              :class="[
                !open ? '-rotate-90' : '',
                'h-6 w-6 left-0 absolute transition duration-300 ease',
              ]"
              aria-hidden="true"
            />
          </span>
        </DisclosureButton>
        <!-- Use the built-in `transition` component to add transitions. -->
        <transition
          enter-active-class="transition-[max-height] overflow-hidden duration-300 ease"
          enter-from-class="max-h-[0]"
          enter-to-class="max-h-[100vh]"
          leave-active-class="transition-[max-height] overflow-hidden duration-300 ease-in-out"
          leave-from-class="max-h-[100vh]"
          leave-to-class="max-h-[0]"
        >
          <DisclosurePanel as="dd" class="pr-12 p-4 pt-0">
            <p class="text-base leading-0 !m-0 text-black">
              {{ faq.answer }}
            </p>
          </DisclosurePanel>
        </transition>
      </dt>
    </Disclosure>
  </dl>
</template>
