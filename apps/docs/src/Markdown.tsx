import ReactMarkdownRenderer from "react-markdown";
import { Level, levels } from "@uberschrift/core";
import { HeadingComponent } from "react-markdown/lib/ast-to-react";
import { chakra, Heading, HeadingProps } from "@chakra-ui/react";
import { useHx } from "@uberschrift/react";
import { fromEntries } from "./utils";

const sizeMap: Record<Level, HeadingProps["size"]> = {
	h1: "xl",
	h2: "lg",
	h3: "md",
	h4: "md",
	h5: "md",
	h6: "md",
};

const headingComponents: Record<Level, HeadingComponent> = fromEntries(
	levels.map((level) => [
		level,
		({ children, level: markdownLevel }) => {
			const derivedLevel = useHx(markdownLevel - 1);

			// eslint-disable-next-line no-console
			console.log({ markdownLevel, derivedLevel, children });

			return (
				<Heading
					data-heading
					size={sizeMap[derivedLevel]}
					as={derivedLevel}
				>
					{children}
				</Heading>
			);
		},
	])
);

const ReactMarkdown = chakra(ReactMarkdownRenderer);

export const Markdown: React.FC<{ children: string }> = ({ children }) => {
	return (
		<ReactMarkdown
			sx={{
				"> *": { marginBottom: "1rem" },

				pre: {
					fontSize: `${14 / 16}rem`,
					backgroundColor: "#eee",
					borderRadius: "0.5rem",
					lineHeight: "1.66",
					whiteSpace: "pre-wrap",
					border: "2px solid #ccc",
					padding: "1.5em",
				},

				a: {
					color: "inherit",
					textDecoration: "none",
				},
			}}
			components={{
				...headingComponents,
			}}
		>
			{children}
		</ReactMarkdown>
	);
};
