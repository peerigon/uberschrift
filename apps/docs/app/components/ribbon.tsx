import { cn, tw } from "../utils/tailwind";
import { SvgSprite } from "./svg-sprite";

const className = cn(
	tw`bg-black text-sm font-bold text-white fixed top-0 right-0 p-2 z-50 w-[16rem] flex no-underline leading-normal justify-center rotate-45 transform translate-x-1/4 translate-y-full`,
	tw`hover:bg-gray-900 hover:text-white hover:scale-110 transition-transform`,
);

export const Ribbon = () => {
	return (
		<a
			href="https://github.com/peerigon/uberschrift/"
			className={className}
			aria-label="View source on GitHub"
		>
			<SvgSprite
				className="w-5 h-5 mr-3"
				aria-hidden="true"
				name="github"
			/>
			GitHub
		</a>
	);
};
