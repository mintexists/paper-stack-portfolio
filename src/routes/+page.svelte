<script lang="ts">
	import Paper from './Paper.svelte';

	import PaperContainer from './PaperContainer.svelte';

	import { cn, setContainerContext } from '$lib';

	import Resume from '$lib/assets/resume.pdf';

	let containerEl: HTMLElement = $state(undefined);

	setContainerContext(() => containerEl);

	let scrollTopCopy = $state(0);

	let shouldScrollSnap = $state(true);

	let timeout: NodeJS.Timeout | undefined = $state(undefined);

	const smoothScrollTimeout = 500;

	// $inspect($scrollYProgress);
	// let lastScrollTime =

	// const jitterXPercent = 10;
	// const jitterYPercent = 5;

	import Green from '$lib/assets/images/Green.png';
	import Blue2 from '$lib/assets/images/Blue2.png';
	import ZerO2 from '$lib/assets/images/zero2.png';
	import RoombiRumble from '$lib/assets/images/roombi rumble.png';
	import TSTPhone from '$lib/assets/images/tst-phone.png';
	import TSTTablet from '$lib/assets/images/tst-tablet.png';

	const zero2Images = import.meta.glob(
		'$lib/assets/images/zero2/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	import { styleString } from '@humanspeak/svelte-motion';
</script>

<div
	id="containy"
	class={cn(
		'h-screen w-full overflow-x-clip overflow-y-scroll',
		shouldScrollSnap && 'snap-y snap-mandatory scroll-smooth'
	)}
	bind:this={containerEl}
	onscroll={(e) => (scrollTopCopy = containerEl.scrollTop)}
>
	<span class="contents">
		<div class="even-more-background"></div>
		<div class="background">
			<div class="noise"></div>
			<div class="noise" style="background-size: 100%; opacity: .1;"></div>
			<div class="bigger-grid">
				<div class="ticks horizontal" style="--ticks: 40; --height: 0.5"></div>
				<div class="ticks horizontal" style="--ticks: 80; --height: 0.3"></div>
				<div class="ticks horizontal" style="--ticks: 160; --height: 0.25"></div>
				<div class="ticks horizontal bottom" style="--ticks: 40; --height: 0.5"></div>
				<div class="ticks horizontal bottom" style="--ticks: 80; --height: 0.3"></div>
				<div class="ticks horizontal bottom" style="--ticks: 160; --height: 0.25"></div>
				<div class="ticks vertical" style="--ticks: 40; --height: 0.5"></div>
				<div class="ticks vertical" style="--ticks: 80; --height: 0.3"></div>
				<div class="ticks vertical" style="--ticks: 160; --height: 0.25"></div>
				<div class="ticks vertical right" style="--ticks: 40; --height: 0.5"></div>
				<div class="ticks vertical right" style="--ticks: 80; --height: 0.3"></div>
				<div class="ticks vertical right" style="--ticks: 160; --height: 0.25"></div>
				<div class="grid">
					<div class="compass"></div>
					<div class="angle-markers" style="--angle: -60deg;"></div>
					<div class="angle-markers" style="--angle: -45deg;"></div>
					<div class="angle-markers" style="--angle: 45deg; left: 100%;"></div>
					<div class="angle-markers" style="--angle: 30deg; left: 100%;"></div>
				</div>
			</div>
		</div>
	</span>

	<div class="h-screen snap-start overflow-hidden">
		<div
			class="relative top-1/3 left-1/2 -translate-x-1/2 scale-300 animate-pulse text-center text-lg font-thin"
			style="color: rgba(from #96b9af r g b / 0.5);"
		>
			<p style="font-family: 'jeff-script', sans-serif;">Scroll To Begin</p>
			<p class="text-2xl">↓</p>
			<p style="font-family: 'jeff-script', sans-serif;" class="text-xs">(Or Press Space)</p>
		</div>
	</div>

	<!-- #region -->
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		shadow={false}
		offsetX={-100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
		class="top-0 left-20"
		rotateJitter={0}
		zIndex={1}
	>
		<div
			class="paper flex h-60 w-60 items-center justify-center bg-center bg-no-repeat pt-10 text-6xl drop-shadow-lg drop-shadow-black/50"
			style={styleString({
				backgroundImage: `url(${Green});`,
				backgroundSize: '100% 100%',
				fontFamily: '"jeff-script", sans-serif'
			})}
		>
			<span class="mix-blend-overlay">Mint B.</span>
		</div>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="top-55 left-15"
		rotate={5}
		rotateJitter={2}
		zIndex={0}
	>
		<Paper class="aspect-auto h-60 w-60 bg-yellow-200 text-lg">
			<p>
				Hi! I'm a third year New Media Interactive Development student at Rochester Institute of
				Technology.
			</p>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="top-98 left-20"
		rotate={-4}
		rotateJitter={2}
		zIndex={0}
	>
		<Paper class="aspect-auto h-min w-60 bg-orange-300 text-lg">
			<p>
				I love to design and build interactive software experiences of all kinds, from art to games
				to the web. The internet can be fun and intuitive, and I want to make that happen :3
			</p>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>

	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={-100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute top-10 right-15"
		rotate={-4}
		rotateJitter={2}
		zIndex={2}
		drag={false}
		id="aboutMe"
	>
		<Paper class="aspect-auto h-min w-60 bg-amber-100 text-lg">
			<ul
				class="list-inside list-disc pr-2"
				style="background: linear-gradient(to top, rgba(0,0,0,0.2) 1px, transparent 1px); background-size: 100% calc(100% / 7);"
			>
				<p><a href="#aboutMe">About Me</a></p>
				<p><a href="#projects">Projects</a></p>
				<li><a href="#employeeManagement">Employee Management Prototype</a></li>
				<li><a href="#zero2">ZerO2</a></li>
				<li><a href="#roombiRumble">Roombi Rumble</a></li>
				<p><a href="#resume">Resume</a></p>
			</ul>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>

	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		shadow={false}
		offsetX={-100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 100}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
		class="top-0 left-1/2 -translate-x-1/2"
		rotateJitter={0}
		zIndex={1}
		id="projects"
	>
		<div
			class="paper flex h-35 w-100 items-center justify-center bg-center bg-no-repeat pt-5 text-6xl drop-shadow-md drop-shadow-black/20"
			style={styleString({
				backgroundImage: `url(${Blue2});`,
				backgroundSize: '100% 100%',
				fontFamily: '"jeff-script", sans-serif'
			})}
		>
			<span class="mix-blend-overlay">Projects!</span>
		</div>
	</PaperContainer>

	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
		class="top-25 left-5/10 -translate-x-1/2"
		rotateJitter={2}
		rotate={-1}
		styleObject={{
			translate: `${(Math.random() * 2 - 1) * 4}% ${(Math.random() * 2 - 1) * 3}%`
		}}
	>
		<Paper class="h-200 px-5 py-10">
			<div class="flex h-full flex-col gap-4">
				<div class="flex h-full flex-col gap-2 px-5 text-xl">
					<div class="[&>p]:my-2">
						<!-- <img
							src={RoombiRumble}
							class="float-left -ml-12 aspect-auto h-45 w-auto rounded-md"
							alt="Roombi Rumble logo. The Godot game engine mascot on top of a roomba with a knife duct taped to it."
							draggable="false"
							style="clip-path: polygon(15% 40%, 28% 24%, 30% 16%, 37% 5%, 45% 0%, 58% 0%, 67% 5%, 69% 22%, 79% 28%, 82% 55%, 75% 67%, 85% 86%, 87% 100%, 82% 100%, 63% 77%, 51% 80%, 28% 73%, 16% 61%); shape-outside: polygon(15% 40%, 28% 24%, 30% 16%, 37% 5%, 45% 0%, 58% 0%, 67% 5%, 69% 22%, 79% 28%, 82% 55%, 75% 67%, 85% 86%, 87% 100%, 82% 100%, 63% 77%, 51% 80%, 28% 73%, 16% 61%);"
						/> -->
						<h1 class="text-6xl">Prototype Employee Management Platform</h1>
						<p>
							This prototype was created for TradeShowTemps during an internship. It comprises of a
							web dashboard for scheduling trade show events, assigning employees to shifts, and
							managing workers.
						</p>
						<p>
							In addition, there is a dashboard for employees to join shifts and check in. It was
							designed to be mobile-first.
						</p>
						<p>
							I worked as a web and fullstack developer throughout my duration of the internship.
						</p>
						<ul class="list-inside list-disc">
							<li>
								Designing and developing a HR employee management and scheduling platform written in
								Typescript using the Svelte framework
							</li>
							<li>Utilizing serverless infrastructure for hosting and databases</li>
							<li>Managing tasks and billable hours using Trello and Assista</li>
						</ul>
					</div>
				</div>
				<div class="noise rough"></div>
			</div></Paper
		>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={-100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute top-80 left-7/10 -translate-x-1/2"
		rotate={2}
		rotateJitter={2}
	>
		<Paper class="flex aspect-auto h-auto w-180 flex-col bg-transparent p-0 text-xl">
			<enhanced:img src={TSTTablet} draggable="false" class="scale-105" />
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={-100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute top-90 left-2/10"
		rotate={-5}
		rotateJitter={2}
		id="employeeManagement"
	>
		<Paper class="flex h-auto w-60 flex-col bg-transparent p-0 text-xl">
			<enhanced:img src={TSTPhone} draggable="false" class="scale-110" />
		</Paper>
	</PaperContainer>

	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
		class="top-25 left-2/5 -translate-x-1/2"
		rotateJitter={1}
		rotate={-3}
		styleObject={{
			translate: `${(Math.random() * 2 - 1) * 4}% ${(Math.random() * 2 - 1) * 3}%`
		}}
	>
		<Paper class="h-200 px-5 py-10">
			<div class="flex h-full flex-col gap-4">
				<img
					src={ZerO2}
					class="w-full rounded-md"
					alt="ZerO2 logo. The text ZerO2 on the left, and an oxygen container on the right, leaning on some sci-fi storage crates in a dark room"
					draggable="false"
				/>
				<div class="flex h-full flex-col gap-2 px-5 text-xl">
					<p>
						ZerO2 is a atmospheric horror game I made with a team of friends for the 2025 Scream
						Jam.
					</p>
					<p>
						After waking up from a cryo-chamber on your space ship, you discover that you are slowly
						running out of oxygen, with only the tank on your suit to survive off of. You must solve
						puzzles to navigate the ship and attempt to restore the oxygen, before you take your
						final breath.
					</p>
					<p>I took the role of 3d modeling, texturing, environment design, and tech art.</p>
					<ul class="list-inside list-disc">
						<li>Designed levels and lit environments for Godot Engine</li>
						<li>Modeled and textured 3D assets using Blender</li>
						<li>Created shaders and post processing effects using GLSL</li>
					</ul>
					<iframe
						tabindex="-1"
						class="mt-auto self-end"
						title="ZerO2 Itch.io"
						frameborder="0"
						src="https://itch.io/embed/3964390?bg_color=000000&amp;fg_color=ffffff&amp;link_color=2ce8f4&amp;border_color=333333"
						width="552"
						height="167"
						><a href="https://meepking.itch.io/zero2"
							>ZerO2 by MEEPking, NikNikskywalker, mint 🏳️‍⚧️, binarie</a
						>
					</iframe>
				</div>
				<div class="noise rough"></div>
			</div></Paper
		>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute top-160 left-2/10"
		rotate={0}
		rotateJitter={2}
		id="zero2"
	>
		<Paper class="flex h-60 w-60 flex-col bg-yellow-200 text-xl">
			<p>
				ZerO2 was ranked 8th in Aesthetics and 10th in Sound Design out of 952 entries in the jam!
			</p>
			<div class="flex flex-1 items-center justify-center text-5xl">🏆🎉</div>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>
	{#each Object.entries(zero2Images) as [_path, module] (_path)}
		<!-- <enhanced:img src={module.default} alt="some alt text" /> -->
		{@const xOrY = Math.random() > 0.5}
		<PaperContainer
			bind:scrollTopCopy
			bind:shouldScrollSnap
			bind:timeout
			{smoothScrollTimeout}
			shadow={true}
			offsetX={xOrY ? 100 : undefined}
			offsetY={!xOrY ? 100 : undefined}
			// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 100}% {(Math.random() * 2 - 1) *
			// 	jitterYPercent -
			// 	50}%;"
			styleObject={{
				translate: `${(Math.random() * 2 - 1) * 8}% ${(Math.random() * 2 - 1) * 6}%`
			}}
			class="top-90 left-[calc(50%+var(--spacing)*75)] -translate-x-1/2"
			rotateJitter={5}
		>
			<Paper class="aspect-auto h-min w-160 scale-102 overflow-clip rounded-sm bg-taupe-200 p-5">
				<div class="relative overflow-clip rounded-sm">
					<enhanced:img src={module.default} draggable="false" class="" />
					<div class="noise fine" style="opacity: 1"></div>
				</div>
				<div class="noise rough"></div>
			</Paper>
		</PaperContainer>
	{/each}

	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
		class="top-25 left-7/10 -translate-x-1/2"
		rotateJitter={1}
		rotate={2}
		styleObject={{
			translate: `${(Math.random() * 2 - 1) * 4}% ${(Math.random() * 2 - 1) * 3}%`
		}}
	>
		<Paper class="h-200 px-5 py-10">
			<div class="flex h-full flex-col gap-4">
				<div class="flex h-full flex-col gap-2 px-5 text-xl">
					<div class="[&>p]:my-2">
						<img
							src={RoombiRumble}
							class="float-left -ml-12 aspect-auto h-45 w-auto rounded-md"
							alt="Roombi Rumble logo. The Godot game engine mascot on top of a roomba with a knife duct taped to it."
							draggable="false"
							style="clip-path: polygon(15% 40%, 28% 24%, 30% 16%, 37% 5%, 45% 0%, 58% 0%, 67% 5%, 69% 22%, 79% 28%, 82% 55%, 75% 67%, 85% 86%, 87% 100%, 82% 100%, 63% 77%, 51% 80%, 28% 73%, 16% 61%); shape-outside: polygon(15% 40%, 28% 24%, 30% 16%, 37% 5%, 45% 0%, 58% 0%, 67% 5%, 69% 22%, 79% 28%, 82% 55%, 75% 67%, 85% 86%, 87% 100%, 82% 100%, 63% 77%, 51% 80%, 28% 73%, 16% 61%);"
						/>
						<h1 class="text-6xl">Roombi Rumble</h1>
						<p>
							A 4-Player Couch Co-op Party Fighting Game made in the Godot Engine. Created in a
							weekend for the Roll Your Fate Game Jam 2026
						</p>
						<p>I worked as a tech artist and programmer on this project.</p>
						<ul class="list-inside list-disc">
							<li>Programmed a particle distribution and collection system</li>
							<li>Modeled 3D assets for player character</li>
							<li>Created custom particle systems for fire and smoke effects</li>
						</ul>
					</div>
					<iframe
						tabindex="-1"
						title="Roombi Rumble Itch.io"
						class="mt-auto"
						frameborder="0"
						src="https://itch.io/embed/4409330"
						width="552"
						height="167"
						><a href="https://mintexists.itch.io/roombi-rumble"
							>Roombi Rumble by mint 🏳️‍⚧️, MEEPking, NikNikskywalker</a
						></iframe
					>
				</div>
				<div class="noise rough"></div>
			</div></Paper
		>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute top-120 left-7/10"
		rotate={-3}
		rotateJitter={2}
		id="roombiRumble"
	>
		<Paper class="flex h-60 w-60 flex-col bg-pink-400 text-xl">
			<p>
				Due to this game being controller-only, you'll each need a controller if you want to play
				with friends!
			</p>
			<div class="flex flex-1 items-center justify-center text-4xl">🎮🕹️</div>

			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>

	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		zIndex={1}
		rotate={-2}
		rotateJitter={1}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
	>
		<Paper class="h-200 p-10">
			<object title="resume" data={Resume} type="application/pdf" width="100%" height="100%">
			</object>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>

	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute top-20 left-6/10"
		rotate={3}
		rotateJitter={2}
		zIndex={1}
		id="resume"
	>
		<Paper class="h-60 w-60 bg-red-400 text-5xl">
			<div
				class="flex h-full w-full items-center justify-center bg-contain bg-no-repeat text-center"
				style={styleString({
					backgroundImage:
						'url(https://cdn.discordapp.com/emojis/1426649831287423056.gif?size=48&animated=true&name=bunnyexplode)',
					backgroundPosition: 'bottom center'
				})}
			>
				Hire me!!
			</div>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>

	<!-- <PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
		styleObject={{
			translate: `${(Math.random() * 2 - 1) * 8}% ${(Math.random() * 2 - 1) * 6}%`
		}}
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer> -->
	<!-- <PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer> -->
	<!-- <PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={100}
		// style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute right-20 bottom-40"
	>
		<Paper class="h-60 w-60 bg-pink-400">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer> -->

	<!-- <PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
	>
		<Paper>
			<iframe
				width="100%"
				class="aspect-video"
				src="https://www.youtube.com/embed/pUF5esTscZI?si=VWP93BiX53oRkLy2"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer> -->
	<!-- <PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		// style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
		// 	jitterYPercent -
		// 	50}%;"
	>
		<Paper>
			<iframe
				width="100%"
				height="100%"
				src="https://flappybird.io/"
				title="fuck"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer> -->
</div>

<style>
	:global(body) {
		overflow: clip;
	}
</style>
