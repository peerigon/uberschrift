import { Hx, HxBoundary } from "uberschrift";
import {
	Heading as ChakraHeading,
	HeadingProps,
	VStack,
} from "@chakra-ui/react";
import { SubComponent } from "./sub-component";

const Heading = (props: HeadingProps) => <ChakraHeading {...props} as={Hx} />;

export const App = () => {
	return (
		<VStack as="main" align="left" maxW="2xl" py="8" mx="auto">
			<Heading size="xl">Main Title (h1)</Heading>

			<HxBoundary>
				<p>
					Lorem ipsum dolor sit amet convallis dictumst duis risus
					nulla aliqua tortor.
				</p>

				<Heading size="lg">Chapter 1 (h2)</Heading>

				<p>
					Senectus netus aliquet nunc egestas habitasse sapien morbi
					eu sagittis adipiscing. Maecenas diam tellus nulla ac
					incididunt molestie libero.
				</p>

				<HxBoundary>
					<Heading size="md">Chapter 1.1 (h3)</Heading>
					<p>
						Lorem ipsum dolor sit amet pulvinar venenatis eiusmod
						feugiat dapibus duis. Aenean fusce nunc hendrerit mollis
						senectus consectetur magna fames at convallis.
					</p>

					<SubComponent />

					<p>Lorem ipsum dolor sit amet ac consequat netus mi.</p>
				</HxBoundary>

				<Heading size="lg">Chapter 2 (h2)</Heading>

				<p>
					Urna senectus lobortis risus consequat laoreet quam volutpat
					convallis. Fermentum ullamcorper duis vel consequat
					incididunt donec nisl vestibulum. Auctor egestas pretium
					erat arcu adipiscing eros et libero nunc.
				</p>
			</HxBoundary>
		</VStack>
	);
};
