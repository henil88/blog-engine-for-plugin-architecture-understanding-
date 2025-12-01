import { BGPlugin } from "./types";

export class BlogEngine {
  use(plugin: BGPlugin) {}

  process(content: string): string {
    return content;
  }
}
