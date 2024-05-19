import './assets/styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import router from './router'

const app = createApp(App)

app.use(router);

app.use(
    Vue3Toastify,
    {
      autoClose: 2000,
      style: {
        opacity: '1',
        userSelect: 'initial',
      },
    } as ToastContainerOptions,
  );

app.mount('#app')
