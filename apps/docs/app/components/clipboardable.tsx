import React, { ReactNode, useEffect } from "react";
import { SvgSprite } from "./svg-sprite";

export const Clipboardable: React.FC<{
	children?: ReactNode;
	content: string;
}> = ({ children, content }) => {
	const [copied, setCopied] = React.useState(false);
	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (copied) {
			const timer = setTimeout(() => {
				setCopied(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [copied]);

	return (
		<div className="relative">
			<button
				type="button"
				aria-live="polite"
				aria-label={copied ? "Copied!" : "Copy to clipboard"}
				className="absolute right-2 top-[0.75rem] w-7 h-7 rounded-md flex justify-center items-center bg-slate-600"
				onClick={() => {
					navigator.clipboard.writeText(content);
					setCopied(true);
				}}
			>
				{copied ? (
					<SvgSprite
						className="w-4 h-auto text-green-400"
						aria-hidden="true"
						name="check"
					/>
				) : (
					<SvgSprite
						className="w-4 h-auto text-white"
						aria-hidden="true"
						name="copy"
					/>
				)}
			</button>
			{children}
		</div>
	);
};
