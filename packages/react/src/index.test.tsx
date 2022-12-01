import { render } from "@testing-library/react";
import { levels } from "@uberschrift/core";
import { HxBoundary, Hx } from ".";

describe("Hx", () => {
	it("renders correct headings", () => {
		const { queryAllByText } = render(
			<>
				<Hx>Outside of the top level: h1</Hx>

				<HxBoundary>
					<Hx>Within the top level: h2</Hx>

					<HxBoundary>
						<Hx>Within the 2nd level: h3</Hx>

						<HxBoundary>
							<Hx>Within the 3rd level: h4</Hx>
						</HxBoundary>

						<Hx>Again within the 2nd level: h3</Hx>
					</HxBoundary>
				</HxBoundary>
			</>
		);

		expect(levels.length > 5).toBe(true);

		levels.forEach((level) =>
			queryAllByText(level, { exact: false }).forEach((headline) => {
				expect(headline.tagName).toBe(level.toUpperCase());
			})
		);
	});
});
