import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import TestCase from "./TestCase.vue";
import { useHx } from "./useHx";
import { vueberschriftSymbol } from "./vueberschriftSymbol";

const elements = ["h1", "h2", "h3", "h4", "h5", "h6"];

test("renders correct headings", () => {
	const { queryAllByText } = render(TestCase);

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
		expect(useHx()).toStrictEqual({
			headingTagName: "h1",
			level: 1,
		});
	});

	[1, 2, 3, 4, 5, 6, 7, 8].forEach((i) => {
		test(`level ${i}`, () => {
			const TestComponent = defineComponent({
				setup: () => {
					return {
						...useHx(),
					};
				},
			});

			const wrapper = mount(TestComponent, {
				global: {
					provide: {
						[vueberschriftSymbol]: i,
					},
				},
			});

			if (i < 7) {
				expect(wrapper.vm.headingTagName).toEqual(`h${i}`);
				expect(wrapper.vm.level).toEqual(i);
			} else {
				expect(wrapper.vm.headingTagName).toEqual("h6");
				expect(wrapper.vm.level).toEqual(i);
			}
		});
	});
});
