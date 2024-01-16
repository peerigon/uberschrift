import { useHx } from "uberschrift";

export const SubComponent = () => {
	const { Element, level } = useHx();

	return (
		<Element>
			This is an {Element} (level = {level})
		</Element>
	);
};
