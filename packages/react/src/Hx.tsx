import React, { HTMLProps } from "react";
import { useHx } from "./context";

export type HxProps = HTMLProps<HTMLHeadingElement> & {
	increment?: number;
};

export const Hx: React.FC<HxProps> = ({ increment, ...props }) => {
	const Heading = useHx(increment);

	return <Heading {...props} />;
};
