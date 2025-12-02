import { PluginManager } from "./pluginManager";
import { BGContext, BGPlugin } from "./types";

export class BlogEngine {
  pluginManager: PluginManager;
  constructor() {
    this.pluginManager = new PluginManager();
  }
  use(plugin: BGPlugin) {
    this.pluginManager.register(plugin);
    return this;
  }

  process(content: string): BGContext {
    console.log("content is proccesing....\n");
    const context: BGContext = {
      context: content,
    };

    const finalResult = this.pluginManager.excute(context);
    return finalResult;
  }
}
