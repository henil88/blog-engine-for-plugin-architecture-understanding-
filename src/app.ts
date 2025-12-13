import { BlogEngine } from "./blogEngine";
import upperCasePlugin from "./plugins/uppercase-plugin";
const blogEngine = new BlogEngine();
blogEngine.use(upperCasePlugin);

const result = blogEngine.process("Hey how are you");
console.log(result);
