# Getting Started

To start using MeUI in your project, follow these simple steps to set up the necessary dependencies and configure your Tailwind CSS settings.

### Prerequisites

Before installing MeUI, ensure that your project is set up with Tailwind CSS (version 2.x or later). MeUI builds on Tailwind's utility-first framework, so having Tailwind CSS installed is essential for proper integration.

If you need to set up Tailwind CSS, refer to the official [Tailwind CSS installation guide](https://tailwindcss.com) for instructions.

## 1. Install MeUI

Install the MeUI library using npm or yarn. This library includes a Tailwind CSS plugin that defines the MeUI color palette and utility classes for borders and shadows.

```bash
npm install @meprovas/meui
# or
yarn add @meprovas/meui
```

## 2. Configure Tailwind CSS

Add the MeUI plugin to your Tailwind CSS configuration. This will automatically integrate the MeUI styles into your project.

```js
// tailwind.config.js
module.exports = {
  // other configurations...
  plugins: [
    require('@meprovas/meui'), // MeUI plugin
    // other plugins...
  ],
};
```

## 3. Optional Dependencies

For enhanced functionality and richer component examples, you can install additional optional dependencies:

1. **@headless/vue**: Provides headless Vue components for building custom UI elements.
2. **@heroicons/vue**: A set of free, MIT-licensed high-quality SVG icons for Vue.

```bash
npm install @headless/vue @heroicons/vue
# or
yarn add @headless/vue @heroicons/vue
```

While these are optional, they are used in our interactive component examples, which are currently demonstrated using Vue. However, MeUI itself is framework-agnostic and can be utilized in React or any other framework that supports Tailwind CSS.
