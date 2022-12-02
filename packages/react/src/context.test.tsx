import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { useHx, Context } from "./context";

describe("context.ts", () => {
	test("useHx()", () => {
		const run = (level?: number) =>
			renderHook(() => useHx(level)).result.current;

		expect(run()).toBe("h1");
		expect(run(1)).toBe("h2");
		expect(run(5)).toBe("h6");
	});

	test("", () => {
		const wrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
			<Context.Provider value="h3">{children}</Context.Provider>
		);
		const run = (level?: number) =>
			renderHook(() => useHx(level), { wrapper }).result.current;

		expect(run(1)).toBe("h4");
	});
});
