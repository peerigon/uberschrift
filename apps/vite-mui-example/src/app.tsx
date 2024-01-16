import { Hx, HxBoundary } from "uberschrift";
import {
	Typography as MuiTypography,
	Stack,
	TypographyProps,
} from "@mui/material";
import { SubComponent } from "./sub-component";

const Typography = (props: TypographyProps) => (
	<MuiTypography component={Hx} {...props} />
);

export const App = () => {
	return (
		<Stack component="main">
			<Typography variant="h1">MUI — Main Title (h1)</Typography>

			<HxBoundary>
				<p>
					Lorem ipsum dolor sit amet convallis dictumst duis risus
					nulla aliqua tortor.
				</p>

				<Typography variant="h2">Chapter 1 (h2)</Typography>

				<p>
					Senectus netus aliquet nunc egestas habitasse sapien morbi
					eu sagittis adipiscing. Maecenas diam tellus nulla ac
					incididunt molestie libero.
				</p>

				<HxBoundary>
					<Typography variant="h3">Chapter 1.1 (h3)</Typography>
					<p>
						Lorem ipsum dolor sit amet pulvinar venenatis eiusmod
						feugiat dapibus duis. Aenean fusce nunc hendrerit mollis
						senectus consectetur magna fames at convallis.
					</p>

					<SubComponent />

					<p>Lorem ipsum dolor sit amet ac consequat netus mi.</p>
				</HxBoundary>

				<Typography variant="h2">Chapter 2 (h2)</Typography>

				<p>
					Urna senectus lobortis risus consequat laoreet quam volutpat
					convallis. Fermentum ullamcorper duis vel consequat
					incididunt donec nisl vestibulum. Auctor egestas pretium
					erat arcu adipiscing eros et libero nunc.
				</p>
			</HxBoundary>
		</Stack>
	);
};
