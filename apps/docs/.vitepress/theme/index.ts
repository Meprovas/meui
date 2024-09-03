import DefaultTheme from 'vitepress/theme';
import './styles/style.css';

import ComponentPreview from './components/ComponentPreview.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: any) {
    app.component('ComponentPreview', ComponentPreview);
  },
};
