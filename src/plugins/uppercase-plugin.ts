import { BGPlugin, BGContext } from "./../types";
const plugin: BGPlugin = {
  name: "upperCase",
  execute: (contex: BGContext): BGContext => {
    const result = contex.context.toUpperCase();
    return { ...contex, context: result };
  },
};
export default plugin;
