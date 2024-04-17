import { inject } from "vue";
import { uberschriftSymbol } from "./uberschriftSymbol";

type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const useHx = () => {
	const level = inject<number>(uberschriftSymbol) ?? 1;
	const headingTagName = level > 6 ? "h6" : (`h${level}` as HeadingTagName);

	return { headingTagName, level };
};
