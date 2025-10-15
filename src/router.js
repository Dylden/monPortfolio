import { createMemoryHistory, createRouter } from "vue-router";

import CvView from "./pages/CvView.vue";

const routes = [{ path: "/", component: CvView }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
