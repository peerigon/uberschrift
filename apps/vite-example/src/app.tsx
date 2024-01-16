import { Hx, HxBoundary } from "uberschrift";
import { SubComponent } from "./sub-component";

export const App = () => {
	return (
		<main className="prose max-w-screen-lg m-auto">
			<Hx>Main Title (h1)</Hx>

			<HxBoundary>
				<p>
					Lorem ipsum dolor sit amet convallis dictumst duis risus
					nulla aliqua tortor.
				</p>

				<Hx>Chapter 1 (h2)</Hx>

				<p>
					Senectus netus aliquet nunc egestas habitasse sapien morbi
					eu sagittis adipiscing. Maecenas diam tellus nulla ac
					incididunt molestie libero.
				</p>

				<HxBoundary>
					<Hx>Chapter 1.1 (h3)</Hx>
					<p>
						Lorem ipsum dolor sit amet pulvinar venenatis eiusmod
						feugiat dapibus duis. Aenean fusce nunc hendrerit mollis
						senectus consectetur magna fames at convallis.
					</p>

					<SubComponent />

					<p>Lorem ipsum dolor sit amet ac consequat netus mi.</p>
				</HxBoundary>

				<Hx>Chapter 2 (h2)</Hx>

				<p>
					Urna senectus lobortis risus consequat laoreet quam volutpat
					convallis. Fermentum ullamcorper duis vel consequat
					incididunt donec nisl vestibulum. Auctor egestas pretium
					erat arcu adipiscing eros et libero nunc.
				</p>
			</HxBoundary>
		</main>
	);
};
