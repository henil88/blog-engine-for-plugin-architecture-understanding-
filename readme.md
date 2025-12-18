# Plugin-Based Blog Engine (Learning Project)

This is a **small learning project** built to understand how **plugin-based architecture** works in a clean and extensible way using **TypeScript**.

The idea is simple:

* Core engine stays minimal
* Features are added via **plugins**
* Plugins can modify data step-by-step without changing core logic

---

## 🚀 Project Goal

To understand:

* How plugin-based architecture works
* How to design extensible systems
* How to apply **Open–Closed Principle** (open for extension, closed for modification)

This project simulates a **Blog Engine** where content passes through multiple plugins before producing the final result.

---

## 🧠 Architecture Overview

```
Input Content
     ↓
BlogEngine
     ↓
PluginManager
     ↓
Plugin 1 → Plugin 2 → Plugin 3 → ...
     ↓
Final Output
```

Each plugin receives a shared **context object**, modifies it, and passes it forward.

---

## 📁 Project Structure

```
src/
│
├── app.ts                # Entry point
├── blogEngine.ts         # Core engine
├── pluginManager.ts      # Plugin registration & execution
├── types.ts              # Shared types & interfaces
└── plugins/
    └── uppercase-plugin.ts  # Sample plugin
```

---

## 🔧 Core Concepts

### 1. BGContext

Shared object passed between plugins.

```ts
export interface BGContext {
  context: string;
}
```

---

### 2. BGPlugin Interface

Every plugin **must** follow this contract.

```ts
export interface BGPlugin {
  name: string;
  execute: (context: BGContext) => BGContext;
}
```

This ensures:

* Predictable plugin behavior
* Type safety
* Easy plugin composition

---

### 3. PluginManager

Responsible for:

* Registering plugins
* Executing plugins in order

```ts
for (const plugin of this.plugins) {
  result = plugin.execute(result);
}
```

Each plugin receives the output of the previous plugin.

---

### 4. BlogEngine

Acts as a **facade** over PluginManager.

Responsibilities:

* Accept raw content
* Create initial context
* Trigger plugin execution

```ts
blogEngine.use(plugin).process("content");
```

---

## 🧩 Example Plugin (Uppercase)

```ts
const plugin: BGPlugin = {
  name: "upperCase",
  execute: (context) => {
    return {
      ...context,
      context: context.context.toUpperCase(),
    };
  },
};
```

This plugin converts blog content to uppercase.

---

## ▶️ How It Works (Flow)

1. App creates `BlogEngine`
2. Plugins are registered using `.use()`
3. Content is passed to `.process()`
4. PluginManager runs plugins sequentially
5. Final transformed content is returned

---

## 🧪 Example Usage

```ts
const blogEngine = new BlogEngine();

blogEngine.use(upperCasePlugin);

const result = blogEngine.process("Hey how are you");
console.log(result.context);
```

Output:

```
HEY HOW ARE YOU
```

---

## ✅ Why Plugin-Based Architecture?

* Easy to add new features
* No changes to core engine
* Highly maintainable
* Clean separation of concerns
* Real-world pattern (used in frameworks, bundlers, editors)


## 🧑‍💻 Author

Built as a **learning project** to understand clean architecture and extensible system design.

If you’re learning backend architecture or TypeScript design patterns — this project is a great starting point.

---

⭐ Feel free to fork, extend, or build your own plugins!
