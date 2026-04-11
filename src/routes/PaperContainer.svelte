<script lang="ts">
	import { motion, useScroll, useTransform } from '@humanspeak/svelte-motion';
	import { type Snippet } from 'svelte';
	import HandImage from '$lib/assets/hand.png';
	import { dev } from '$app/environment';
	import { getContainerContext } from '$lib';

	let {
		children,
		scrollTopCopy = $bindable(),
		shouldScrollSnap = $bindable(),
		timeout = $bindable(),
		smoothScrollTimeout,
		offsetX = 0,
		offsetY = 0
	}: {
		children?: Snippet;
		scrollTopCopy: number;
		shouldScrollSnap: boolean;
		timeout: NodeJS.Timeout | undefined;
		smoothScrollTimeout: number;
		offsetX?: number;
		offsetY?: number;
	} = $props();

	let targetEl: HTMLElement | undefined;

	let containerEl = $derived(getContainerContext()());

	const dragWiggleRoom = 1.2; // in units of rect width

	let containerElBoundingRect = $derived(() => {
		if (!containerEl)
			return {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				width: 0,
				height: 0
			};
		const r = containerEl.getBoundingClientRect();
		return {
			top: r.top,
			left: r.left,
			right: r.right,
			bottom: r.bottom,
			width: r.width,
			height: r.height
		};
	});
	$inspect(containerElBoundingRect());

	const { scrollYProgress } = useScroll({
		target: () => targetEl,
		container: getContainerContext(),
		offset: ['start end', 'end start']
	});

	// [TODO] this is a bad fix and should not be done!
	const translateX = useTransform(scrollYProgress, [0, 0.4, 1], [1.5 * offsetX, 0, 0], {
		clamp: true
	});
	const translateY = useTransform(scrollYProgress, [0, 0.4, 1], [1.5 * offsetY, 0, 0], {
		clamp: true
	});

	const handTransformX = useTransform(
		scrollYProgress,
		[0, 0.4, 0.49, 0.5],
		[offsetX * 0.01, 0, 2 * offsetX, 10 * offsetX],
		{ clamp: true }
	);
	const handTransformY = useTransform(
		scrollYProgress,
		[0, 0.399, 0.49, 0.5],
		[offsetY * 0.01, 0, 2 * offsetY, 10 * offsetY],
		{ clamp: true }
	);

	if (dev) {
		if ((() => false)()) {
			console.log(shouldScrollSnap);
		}
	}
</script>

<div class="pointer-events-none h-screen w-full snap-start snap-always" bind:this={targetEl}>
	<div
		class="pointer-events-none absolute top-0 flex h-screen w-full items-center justify-center"
		style="transform: translate({$translateX}%, {$translateY}%)"
	>
		<motion.div
			drag
			dragMomentum={false}
			dragTransition={{
				timeConstant: 0.05
			}}
			class="pointer-events-auto relative h-min w-min"
			whileHover={{ cursor: 'grab' }}
			whileTap={{ cursor: 'grabbing' }}
			dragConstraints={{
				top: (-containerElBoundingRect()?.height / 2) * dragWiggleRoom,
				bottom: (containerElBoundingRect()?.height / 2) * dragWiggleRoom,
				left: (-containerElBoundingRect()?.width / 2) * dragWiggleRoom,
				right: (containerElBoundingRect()?.width / 2) * dragWiggleRoom
			}}
			onwheel={(e: WheelEvent & { currentTarget: EventTarget & HTMLDivElement }) => {
				clearTimeout(timeout);
				shouldScrollSnap = false;
				e.preventDefault();
				scrollTopCopy += e.deltaY;
				scrollTopCopy = Math.max(0, scrollTopCopy);
				scrollTopCopy = Math.min(
					containerEl.scrollHeight - containerEl.clientHeight,
					scrollTopCopy
				);
				containerEl.scrollTop = scrollTopCopy;
				timeout = setTimeout(() => (shouldScrollSnap = true), smoothScrollTimeout);
			}}
		>
			<div
				class="absolute z-1 flex h-full w-full items-center justify-center select-none"
				style="transform: translate({$handTransformX}%, {$handTransformY}%)"
			>
				<img
					src={HandImage}
					alt="hand"
					class="pointer-events-none w-screen origin-center scale-300 drop-shadow-md"
					style="rotate: calc(atan2({$handTransformX}, {$handTransformY}));"
				/>
			</div>
			{#if children}
				{@render children()}
			{/if}
		</motion.div>
	</div>
</div>
