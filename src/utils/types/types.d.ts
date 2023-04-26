export type FixStupidPrisma<T> = {
  [P in keyof T]: T[P] extends Date ? string : T[P];
};
