import { SVGProps } from "react";

type Props = {
	name: string;
};

export const SvgSprite: React.FC<Props & SVGProps<SVGSVGElement>> = ({
	name,
	className,
	...props
}) => {
	return (
		<svg className={className} {...props}>
			<use href={`/sprite.svg#${name}`} />
		</svg>
	);
};
