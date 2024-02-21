import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { Hx } from "uberschrift";
import highlightCss from "highlight.js/styles/github-dark.css";
import { Ribbon } from "./components/ribbon";
import stylesheet from "./tailwind.css";

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: stylesheet },
		{ rel: "stylesheet", href: highlightCss },
		{
			rel: "icon",
			href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧢</text></svg>",
		},
		...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	];
};

export const meta: MetaFunction = () => {
	return [
		{ title: "uberschrift" },
		{
			name: "description",
			content: "Zero-dependency magic heading levels for React",
		},
	];
};

const App = () => {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<main className="prose lg:prose-xl p-4 lg:py-12 max-w-screen-md m-auto">
					<div className="flex flex-row justify-between items-center">
						<Hx className="mb-0">uberschrift 🧢</Hx>
						<Ribbon />
					</div>
					<Outlet />
				</main>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
};

export default App;
