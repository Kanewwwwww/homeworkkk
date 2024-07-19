import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store, key} from './store'
import HighchartsVue from 'highcharts-vue';
import { KanbanPlugin  } from '@syncfusion/ej2-vue-kanban';

createApp(App).use(store,key).use(router).use(HighchartsVue).use(KanbanPlugin).mount('#app')
