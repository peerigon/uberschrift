import { Level, increaseLevel, DEFAULT_LEVEL } from "@uberschrift/core";
import { createContext, useContext, useMemo } from "react";

export const Context = createContext<Level | undefined>(undefined);

export const useHx = (increment?: number): Level => {
	const currentLevel = useContext(Context);

	return useMemo(
		() =>
			currentLevel
				? increaseLevel(currentLevel, increment)
				: increaseLevel(DEFAULT_LEVEL, increment ?? 0),
		[currentLevel, increment]
	);
};
