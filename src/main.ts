import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { KanbanPlugin  } from '@syncfusion/ej2-vue-kanban';

createApp(App).use(store).use(router).use(KanbanPlugin).mount('#app');
