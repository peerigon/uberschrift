import { inject } from "vue";
import { uberschriftLevel } from "./uberschriftSymbol";

type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const useHx = () => {
	const level = inject(uberschriftLevel) ?? 1; // default does not work here
	const headingTagName = level > 6 ? "h6" : (`h${level}` as HeadingTagName);

	return { headingTagName, level };
};
