import { registerApplication, start, LifeCycles } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";

// Initialize single-spa-layout
const layoutElement = document.getElementById('single-spa-layout') as HTMLTemplateElement;

if (!layoutElement) {
  console.error('Single-SPA layout template not found!');
}

const routes = constructRoutes(layoutElement);
const applications = constructApplications({
  routes,
  loadApp: ({ name }: { name: string }) => {
    console.log(`[Shell] Loading MFE: ${name}`);
    return System.import(name) as Promise<LifeCycles>;
  }
});

const layoutEngine = constructLayoutEngine({ 
  routes, 
  applications, 
  active: true 
});

// Sync UI state before starting
window.addEventListener('single-spa:before-routing-event', () => {
  const container = document.getElementById('single-spa-container');
  if (container) {
    container.style.opacity = '0';
  }
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();

console.log('[Shell] Microfrontend orchestration initialized');
