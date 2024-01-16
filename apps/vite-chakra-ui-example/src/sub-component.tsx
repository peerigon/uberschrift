import { Heading } from "@chakra-ui/react";
import { useHx } from "uberschrift";

export const SubComponent = () => {
	const { Element, level } = useHx();

	return (
		<Heading size="sm" as={Element}>
			This is an {Element} (level = {level})
		</Heading>
	);
};
