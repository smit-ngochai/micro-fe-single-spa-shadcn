import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@client-gate/client-gate-layout",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@client-gate/client-gate-layout"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
