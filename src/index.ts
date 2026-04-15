// Root bootstrapping logic for single-spa orchestration
import { registerApplication, start, LifeCycles } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";
import layout from "./root-config";

const routes = constructRoutes(layout);
const applications = constructApplications({ 
  routes, 
  loadApp: ({ name }: { name: string }) => System.import(name) as Promise<LifeCycles> 
});
const layoutEngine = constructLayoutEngine({ routes, applications, active: true });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
