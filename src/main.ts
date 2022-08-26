import { createApp } from 'vue';
// import App from './App.vue';

// import App from './Test';

import TEST from './Test';

export function add(num1: number, num2: number): number {
  return num1 + num2;
}

createApp(TEST).mount('#app');

export default TEST;
