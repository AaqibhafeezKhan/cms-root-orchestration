import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";
import layout from "./root-config";

const routes = constructRoutes(layout);
const applications = constructApplications({ routes, loadApp: (name) => System.import(name) });
const layoutEngine = constructLayoutEngine({ routes, applications, active: true });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
