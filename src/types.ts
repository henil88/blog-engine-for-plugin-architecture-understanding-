export interface BGContext {
  context: string;
}

export interface BGPlugin {
  name: string;
  execute: (context: BGContext) => BGContext;
}
