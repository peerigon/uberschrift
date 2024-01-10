import { describe, expect, test } from "vitest";
import { renderHook, render } from "@testing-library/react";
import { ReactNode } from "react";
import { Context, useHx } from "./uberschrift";
import { TestCase } from "./test-case";

const elements = ["h1", "h2", "h3", "h4", "h5", "h6"];

test("renders correct headings", () => {
	const { queryAllByText } = render(<TestCase />);

	elements.forEach((level) =>
		queryAllByText(level).forEach((headline) => {
			expect(headline.tagName).toBe(level.toUpperCase());
		}),
	);

	queryAllByText("h7").forEach((headline) => {
		expect(headline.tagName).toBe("div");
		expect(headline.getAttribute("role")).toBe("heading");
		expect(headline.getAttribute("aria-level")).toBe("7");
	});
});

describe("useHx()", () => {
	test(`level undefined`, () => {
		const run = () => renderHook(() => useHx()).result.current;

		expect(run()).toStrictEqual({
			Element: "h1",
			level: 1,
		});
	});

	[1, 2, 3, 4, 5, 6, 7, 8].forEach((i) => {
		test(`level ${i}`, () => {
			const wrapper: React.FC<{ children: ReactNode }> = ({
				children,
			}) => <Context.Provider value={i}>{children}</Context.Provider>;
			const run = () =>
				renderHook(() => useHx(), { wrapper }).result.current;

			if (i < 7) {
				expect(run()).toStrictEqual({
					Element: `h${i}`,
					level: i,
				});
			} else {
				expect(run()).toStrictEqual({
					Element: "h6",
					level: i,
				});
			}
		});
	});
});
