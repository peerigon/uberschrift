import React, { ReactNode } from "react";
import { Context, useHx } from "./context";

export const HxBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
	const level = useHx();

	return <Context.Provider value={level}>{children}</Context.Provider>;
};
