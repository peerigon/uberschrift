import { Hx, HxBoundary } from "./uberschrift";

export const TestCase = () => {
	return (
		<>
			<Hx>Outside of the top level: this will be an h1</Hx>

			<HxBoundary>
				<Hx>Within the top level: this will be an h2</Hx>

				<HxBoundary>
					<Hx>Within the 2nd level: this will be an h3</Hx>

					<HxBoundary>
						<Hx>Within the 3rd level: this will be an h4</Hx>

						<HxBoundary>
							<Hx>Within the 4th level: this will be an h5</Hx>

							<HxBoundary>
								<Hx>
									Within the 5th level: this will be an h6
								</Hx>

								<HxBoundary>
									<Hx>
										Within the 6th level: this will be a div
										with aria properties
									</Hx>
								</HxBoundary>
							</HxBoundary>
						</HxBoundary>
					</HxBoundary>

					<Hx>Again within the 2nd level: this will be an h3</Hx>
				</HxBoundary>
			</HxBoundary>
		</>
	);
};
