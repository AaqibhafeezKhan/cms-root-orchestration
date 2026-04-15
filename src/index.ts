import { registerApplication, start, LifeCycles } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";
import layout from "./root-config";

const layoutElement = document.getElementById('single-spa-layout') as HTMLTemplateElement;
const routes = constructRoutes(layoutElement as any);
const applications = constructApplications({
  routes,
  loadApp: ({ name }: { name: string }) => System.import(name) as Promise<LifeCycles>
});
const layoutEngine = constructLayoutEngine({ 
  routes, 
  applications, 
  active: true 
});

applications.forEach(registerApplication);
layoutEngine.activate();

const singleSpaMain = document.querySelector('body > main');
const container = document.getElementById('single-spa-container');
if (singleSpaMain && container) {
  container.appendChild(singleSpaMain);
}

start();
