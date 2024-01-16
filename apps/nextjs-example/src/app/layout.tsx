import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "uberschrift Next.js example",
	description: "Base on create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
