import { BGPlugin } from "./types";

export class PluginManager {
  plugin: BGPlugin[] = [];

  register(plugin: BGPlugin) {
    if (!plugin.name) throw new Error("plugin name is required");
    this.plugin.push(plugin);
  }
}
