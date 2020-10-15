import * as modules from "./module";

export interface Context {
  modules: typeof modules;
}
