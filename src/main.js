import { createApp } from "vue";
import App from "./App.vue";

//bootstrap
import * as bootstrap from "bootstrap";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faAward, faLock, faFileSignature, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {  } from '@fortawesome/free-regular-svg-icons';
import {} from "@fortawesome/free-brands-svg-icons";

library.add( faAward, faLock, faFileSignature, faGraduationCap );

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
