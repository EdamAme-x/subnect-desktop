const buildForWindows = new Deno.Command(Deno.execPath(), {
  args: [
    `run`, 
    `-A`, 
    `--import-map=https://deno.land/x/wincompile/import_map.json`, 
    `https://deno.land/x/wincompile/wincompile.ts`,
    `--FileDescription="Subnect Desktop for Windows"`,
    `--Icon=./favicon.ico`,
    `--`,
    `-A`,
    `main.ts`
  ],
  stdout: "inherit",
  stderr: "inherit",
});

await buildForWindows.spawn();
