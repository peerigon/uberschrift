import { InjectionKey } from "vue";

export const uberschriftSymbol = Symbol("uberschriftLevel");

export const uberschriftLevel = uberschriftSymbol as InjectionKey<number>;
