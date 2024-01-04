import { useSSRContext, ref, resolveComponent, unref, createSSRApp } from "vue";
import { createMemoryHistory, createRouter as createRouter$1 } from "vue-router";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, renderToString } from "vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<h3${ssrRenderAttrs(_attrs)}>Home</h3>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("client/src/views/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>Not found</h1>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("client/src/views/NotFound.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound
  }
];
const history = createMemoryHistory();
const createRouter = () => createRouter$1({
  history,
  routes
});
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    let counter = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[--><button type="button">count: ${ssrInterpolate(unref(counter))}</button>`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("client/src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function createApp() {
  const app = createSSRApp(_sfc_main);
  const router = createRouter();
  app.use(router);
  return {
    app,
    router
  };
}
async function renderAppHtml(ctx) {
  const {
    app,
    router
  } = createApp();
  router.push(ctx.url);
  await router.isReady();
  const appHtml = await renderToString(app);
  return appHtml;
}
export {
  renderAppHtml
};
