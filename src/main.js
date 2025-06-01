import './presentation/styles/global.css';
import { createApp } from 'vue';
import App from './presentation/App.vue';
import router from './presentation/router/index.js';
import { Container } from './shared/container/Container.js';
import { PDFKey } from './shared/container/InjectionKeys.js';

function main() {
  const app = createApp(App);
  const { creatorPdfController } = Container.dependencies();
  app.provide(PDFKey, creatorPdfController);
  app.use(router).mount('#app');
}
main();
