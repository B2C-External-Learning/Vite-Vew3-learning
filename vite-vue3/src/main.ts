import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

/* https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b
 * 레이아웃 만드는 법 설명 잘나와 있음
 * 레이아웃 잘 활용하면 생산성 높아짐
 * 
 * https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
 */

// 부트스트랩5
import 'bootstrap';

// 스윗 알림창(확인창)
import 'sweetalert2';

// 폰트 어썸
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
library.add(fas, fab, far);

createApp(App)
    // 폰트 어썸
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('font-awesome-layers', FontAwesomeLayers)
    .component('font-awesome-layers-text', FontAwesomeLayersText)
    .use(router)
    .mount('#app');
