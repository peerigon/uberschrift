import { inject } from "vue";
import { vueberschriftLevel } from "./vueberschriftSymbol";

type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const useHx = () => {
	const level = inject(vueberschriftLevel) ?? 1; // default does not work here
	const headingTagName = level > 6 ? "h6" : (`h${level}` as HeadingTagName);

	return { headingTagName, level };
};
