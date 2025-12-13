import { BGContext, BGPlugin } from "./types";

export class PluginManager {
  plugins: BGPlugin[] = [];

  register(plugin: BGPlugin) {
    if (!plugin.name) throw new Error("plugin name is required");
    this.plugins.push(plugin);
    console.log(`plugin ${plugin.name} register`);
  }

  excute(contex: BGContext): BGContext {
    let result = { ...contex };
    for (const plugin of this.plugins) {
      result = plugin.execute(result);
    }
    return result;
  }
}
