<script lang="ts">
	import Paper from './Paper.svelte';

	import PaperContainer from './PaperContainer.svelte';

	import { cn, setContainerContext } from '$lib';

	import PDF from '$lib/assets/pdf.pdf';

	let containerEl: HTMLElement = $state(undefined);

	setContainerContext(() => containerEl);

	let scrollTopCopy = $state(0);

	let shouldScrollSnap = $state(true);

	let timeout: NodeJS.Timeout | undefined = $state(undefined);

	const smoothScrollTimeout = 500;

	// $inspect($scrollYProgress);
	// let lastScrollTime =

	const jitterXPercent = 10;
	const jitterYPercent = 5;

	import Green from '$lib/assets/images/Green.png';
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

	<div class="h-screen snap-start"></div>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		shadow={false}
		offsetX={-100}
		style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
			jitterYPercent -
			50}%;"
		class="top-0 left-20"
	>
		<div
			class="paper flex h-60 w-80 items-center justify-center bg-center bg-no-repeat pt-10 text-6xl drop-shadow-lg drop-shadow-black/50"
			style={styleString({
				backgroundImage: `url(${Green});`,
				backgroundSize: '100% 100%',
				fontFamily: '"Schoolbell", cursive'
			})}
		>
			Mint Bates
		</div>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute top-80 left-15"
	>
		<Paper class="h-60 w-60 bg-yellow-200">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={100}
		style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
			jitterYPercent -
			50}%;"
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetX={100}
		style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
			jitterYPercent -
			50}%;"
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={100}
		style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
			jitterYPercent -
			50}%;"
	>
		<Paper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={100}
		style="translate: {(Math.random() * 2 - 1) * 10}% {(Math.random() * 2 - 1) * 10}%;"
		class="absolute right-20 bottom-40"
	>
		<Paper class="h-60 w-60 bg-pink-400">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur eos harum tempore
			molestiae omnis pariatur! Fugiat qui soluta harum aliquid, ipsam recusandae? Qui ut illum
			praesentium molestias, veritatis iusto.
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>

	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
			jitterYPercent -
			50}%;"
	>
		<Paper>
			<img
				src="https://cdn.discordapp.com/emojis/1426649831287423056.gif?size=48&animated=true&name=bunnyexplode"
				class="w-full"
				alt="bunny"
				draggable="false"
			/>
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
			jitterYPercent -
			50}%;"
	>
		<Paper>
			<!-- <object title="resume" data={PDF} type="application/pdf" width="100%" height="100%"> </object> -->
			<div class="noise rough"></div>
		</Paper>
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
			jitterYPercent -
			50}%;"
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
	</PaperContainer>
	<PaperContainer
		bind:scrollTopCopy
		bind:shouldScrollSnap
		bind:timeout
		{smoothScrollTimeout}
		offsetY={-100}
		style="translate: {(Math.random() * 2 - 1) * jitterXPercent - 50}% {(Math.random() * 2 - 1) *
			jitterYPercent -
			50}%;"
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
	</PaperContainer>
</div>

<style>
	:global(body) {
		overflow: clip;
	}
</style>
