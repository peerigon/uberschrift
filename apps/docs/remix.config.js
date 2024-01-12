/** @type {import('@remix-run/dev').AppConfig} */

export default {
	ignoredRouteFiles: ["**/.*"],
	serverDependenciesToBundle: [/@uberschrift\/.*/, "uberschrift"],
	mdx: async (filename) => {
		const [rehypeHighlight] = await Promise.all([
			import("rehype-highlight").then((mod) => mod.default),
		]);
		return {
			rehypePlugins: [rehypeHighlight],
		};
	},
};
