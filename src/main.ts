import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueCropper from 'vue-cropper'
import 'vue-cropper/dist/index.css'
createApp(App).use(store).use(router).use(Antd).use(VueCropper).mount('#app')
