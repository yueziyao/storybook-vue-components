import { configure } from '@storybook/vue';

// automatically import all files ending in *.Welcome.js
const req = require.context('../packages', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
