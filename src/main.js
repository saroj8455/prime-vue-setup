import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// Import styles for PrimeVue 4.x
// import '@primevue/themes/saga-blue/theme.css'; // Theme
// import 'primevue/resources/primevue.min.css'; // Core PrimeVue styles
import 'primeicons/primeicons.css'; // Icons
import '/node_modules/primeflex/primeflex.css';
import 'typeface-inter';

const app = createApp(App);
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
});
app.use(router);

app.mount('#app');
