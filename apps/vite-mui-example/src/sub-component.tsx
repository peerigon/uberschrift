import { Typography } from "@mui/material";
import { useHx } from "uberschrift";

export const SubComponent = () => {
	const { Element, level } = useHx();

	return (
		<Typography variant="h3" component={Element}>
			This is an {Element} (level = {level})
		</Typography>
	);
};
