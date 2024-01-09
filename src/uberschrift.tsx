import { HTMLProps, ReactNode, createContext, useContext } from "react";

export const Context = createContext<number>(1);

export const HxBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
	const level = useContext(Context) + 1;

	return <Context.Provider value={level}>{children}</Context.Provider>;
};

type HxProps = HTMLProps<HTMLHeadingElement> & {
	increment?: number;
};

export const Hx: React.FC<HxProps> = ({ increment, ...props }) => {
	const level = useContext(Context) + (increment ?? 0);
	const Element = `h${level}`;

	if (level < 7) {
		return <Element {...props} />;
	}

	return <div role="heading" aria-level={level} {...props} />;
};

export const useHx = () => {
	const level = useContext(Context);

	const Element = level > 6 ? "h6" : `h${level}`;

	return {
		Element,
		level,
	};
};
