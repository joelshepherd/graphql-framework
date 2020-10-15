import * as modules from "./module";
import { run } from "../lib/run";

async function main() {
  run({
    // context,
    modules,
    // schema,
    // routes,
  });
}

main().then((err) => {
  console.error(err);
  process.exit(1);
});
