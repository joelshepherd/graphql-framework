async function main() {
  run({
    context,
    modules,
    schema,
    routes,
    authSettings, // ?
  });
}

main().then((err) => {
  console.error(err);
  process.exit(1);
});
