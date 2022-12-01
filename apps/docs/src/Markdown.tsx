import ReactMarkdownRenderer from "react-markdown";
import { Level, levels } from "@uberschrift/core";
import { HeadingComponent } from "react-markdown/lib/ast-to-react";
import { chakra, Heading, HeadingProps } from "@chakra-ui/react";
import { useHx } from "@uberschrift/react";
import { css } from "@emotion/react";

const chakraHeadingSizes: Record<Level, HeadingProps["size"]> = {
	h1: "xl",
	h2: "lg",
	h3: "md",
	h4: "md",
	h5: "md",
	h6: "md",
};

const headingComponents = Object.fromEntries(
	levels.map((level) => [
		level,
		({ children, level }) => {
			const as = useHx(level - 1);

			return (
				<Heading size={chakraHeadingSizes[as]} as={as}>
					{children}
				</Heading>
			);
		},
	])
) as Record<Level, HeadingComponent>;

const ReactMarkdown = chakra(ReactMarkdownRenderer);

export const Markdown: React.FC<{ children: string }> = ({ children }) => {
	return (
		<ReactMarkdown
			css={css`
				* {
					margin-bottom: 1rem;
				}

				pre {
					font-size: ${14 / 16}rem;
					border: 2px solid #ccc;
					background-color: #eee;
					padding: 1.5em;
					border-radius: 0.5rem;
					line-height: 1.66;
					white-space: pre-wrap;
				}

				a {
					color: inherit;
					text-decoration: none;
				}
			`}
			components={{
				...headingComponents,
			}}
		>
			{children}
		</ReactMarkdown>
	);
};
