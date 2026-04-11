declare var System: {
  import: <T>(moduleName: string) => Promise<T>;
};

declare module "single-spa" {
  export interface LifeCycles {
    bootstrap: (props: any) => Promise<any>;
    mount: (props: any) => Promise<any>;
    unmount: (props: any) => Promise<any>;
  }
  export function registerApplication(config: any): void;
  export function start(): void;
}

declare module "single-spa-layout" {
  export function constructRoutes(layout: string): any;
  export function constructApplications(config: any): any[];
  export function constructLayoutEngine(config: any): any;
}
