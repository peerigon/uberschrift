/* eslint-disable @typescript-eslint/naming-convention */

export enum Levels {
	"h1" = "h1",
	"h2" = "h2",
	"h3" = "h3",
	"h4" = "h4",
	"h5" = "h5",
	"h6" = "h6",
}

export type Level = keyof typeof Levels;

export const levels: Array<Level> = Object.values(Levels);

export const DEFAULT_LEVEL: Level = "h1";

export const increaseLevel = (level: Level, amount = 1): Level => {
	// find the current index and add amount but stay between 0 and 5
	const nextIndex = Math.max(
		Math.min(levels.indexOf(level) + amount, levels.length - 1),
		0
	);

	return levels[nextIndex];
};
