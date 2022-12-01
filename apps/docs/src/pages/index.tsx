import { readFile } from "node:fs/promises";
import path from "node:path";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { Markdown } from "../Markdown";

const Home: NextPage<{ content: string }> = ({ content }) => {
	return (
		<Container py={16} as="main" margin="auto">
			<Head>
				<title>🖍 uberschrift</title>
			</Head>

			<Markdown>{content}</Markdown>
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const fullPath = path.resolve(process.cwd(), "../..", `README.md`);
	const content = await readFile(fullPath, "utf8");

	return {
		props: {
			content,
		},
	};
};

export default Home;
