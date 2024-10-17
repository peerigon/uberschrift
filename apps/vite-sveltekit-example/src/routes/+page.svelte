<script lang="ts">
	import HxBoundary from '$lib/HxBoundary.svelte';
	import Hx from '$lib/Hx.svelte';
</script>

<main class="prose max-w-screen-lg m-auto py-8">
	<Hx>Vite — Main Title (h1)</Hx>

	<HxBoundary>
		<p>Lorem ipsum dolor sit amet convallis dictumst duis risus nulla aliqua tortor.</p>

		<Hx class="bg-red-100">Chapter 1 (h2)</Hx>

		<p>
			Senectus netus aliquet nunc egestas habitasse sapien morbi eu sagittis adipiscing.
			Maecenas diam tellus nulla ac incididunt molestie libero.
		</p>

		<HxBoundary>
			<Hx>Chapter 1.1 (h3)</Hx>
			<p>
				Lorem ipsum dolor sit amet pulvinar venenatis eiusmod feugiat dapibus duis. Aenean
				fusce nunc hendrerit mollis senectus consectetur magna fames at convallis.
			</p>

			<p>Lorem ipsum dolor sit amet ac consequat netus mi.</p>
		</HxBoundary>
		<HxBoundary>
			<Hx>...</Hx>
			<HxBoundary>
				<Hx>...</Hx>
				<HxBoundary>
					<Hx>...</Hx>
					<HxBoundary>
						<Hx>...</Hx>
						<HxBoundary>
							<Hx>...</Hx>
						</HxBoundary>
					</HxBoundary>
				</HxBoundary>
			</HxBoundary>
		</HxBoundary>

		<Hx>Chapter 2 (h2)</Hx>

		<p>
			Urna senectus lobortis risus consequat laoreet quam volutpat convallis. Fermentum
			ullamcorper duis vel consequat incididunt donec nisl vestibulum. Auctor egestas pretium
			erat arcu adipiscing eros et libero nunc.
		</p>
	</HxBoundary>
</main>
