import { increaseLevel } from ".";

test("increaseLevel()", () => {
	expect(increaseLevel("h1")).toBe("h2");
	expect(increaseLevel("h5")).toBe("h6");
	expect(increaseLevel("h6")).toBe("h6");
	expect(increaseLevel("h1", 1)).toBe("h2");
	expect(increaseLevel("h2", 2)).toBe("h4");
	expect(increaseLevel("h1", Number.MAX_SAFE_INTEGER)).toBe("h6");
	expect(increaseLevel("h4", -2)).toBe("h2");
	expect(increaseLevel("h4", -99)).toBe("h1");
	expect(increaseLevel("h4", -Number.MAX_SAFE_INTEGER)).toBe("h1");
	expect(increaseLevel("h6", 1)).toBe("h6");
});
