import { InjectionKey } from "vue";

export const vueberschriftSymbol = Symbol("vueberschriftLevel");

export const vueberschriftLevel = vueberschriftSymbol as InjectionKey<number>;
