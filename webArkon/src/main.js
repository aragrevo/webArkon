import App from './App.svelte';
import routes from './routes';
import Router from './router';

const app = new App({
  target: document.body,
  props: {
    name: 'Arkon Arquitectura Integral',
    routes,
  },
});

const router = new Router();

export default app;
