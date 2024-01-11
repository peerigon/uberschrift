import type { MetaFunction, LinksFunction } from "@remix-run/node";

import ReadMe from "../README.mdx";
import stylesheet from "../tailwind.css";

export const meta: MetaFunction = () => {
	return [
		{ title: "Uberschrift" },
		{ name: "description", content: "Magic heading levels for React." },
	];
};

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: stylesheet },
		{
			rel: "icon",
			href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧢</text></svg>",
		},
	];
};

const Index = () => {
	return (
		<main className="flex gap-4 flex-col py-4 lg:py-12 max-w-screen-sm m-auto">
			<ReadMe />
		</main>
	);
};

export default Index;
