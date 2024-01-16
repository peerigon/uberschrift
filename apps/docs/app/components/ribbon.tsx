import { cn, tw } from "../utils/tailwind";
import { SvgSprite } from "./svg-sprite";

const className = cn(
	tw`inline-flex align-middle leading-tight justify-center`,
	tw`font-bold top-0 right-0 z-50 no-underline`,
	tw`lg:bg-blue-700 lg:text-white lg:text-sm lg:fixed lg:p-2 lg:w-[16rem] lg:rotate-45 lg:translate-x-1/4 lg:translate-y-full`,
	tw`hover:scale-110 transition-transform`,
);

export const Ribbon = () => {
	return (
		<a
			href="https://github.com/peerigon/uberschrift/"
			className={className}
			aria-label="View source on GitHub"
			target="_blank"
			rel="noreferrer"
		>
			<SvgSprite
				className="inline-block w-6 h-6 lg:mr-3"
				aria-hidden="true"
				name="github"
			/>
			<span className="sr-only lg:not-sr-only">GitHub</span>
		</a>
	);
};
