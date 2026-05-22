<script lang="ts">
	import { motion, styleString, useScroll, useTransform } from '@humanspeak/svelte-motion';
	import { type Snippet } from 'svelte';
	// import HandImage from '$lib/assets/hand.png';
	import PawImage from '$lib/assets/images/paw.png';
	import { dev } from '$app/environment';
	import { cn, getContainerContext } from '$lib';
	import type { ClassValue } from 'svelte/elements';

	let {
		children,
		scrollTopCopy = $bindable(),
		shouldScrollSnap = $bindable(),
		timeout = $bindable(),
		smoothScrollTimeout,
		offsetX = 0,
		offsetY = 0,
		class: className,
		shadow = true,
		rotateJitter = 5,
		rotate = 0,
		zIndex,
		styleObject = {}
	}: {
		children?: Snippet;
		scrollTopCopy: number;
		shouldScrollSnap: boolean;
		timeout: NodeJS.Timeout | undefined;
		smoothScrollTimeout: number;
		offsetX?: number;
		offsetY?: number;
		class?: ClassValue;
		// style?: string;
		shadow?: boolean;
		zIndex?: number;
		rotateJitter?: number;
		rotate?: number;
		styleObject?: Record<string, string | number>;
	} = $props();

	let targetEl: HTMLElement | undefined;

	let containerEl = $derived(getContainerContext()());

	// const dragWiggleRoom = 1; // in units of rect width

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
	// $inspect(containerElBoundingRect());

	const { scrollYProgress } = useScroll({
		target: () => targetEl,
		container: getContainerContext(),
		offset: ['start end', 'end start']
	});

	// [TODO] this is a bad fix and should not be done!
	// svelte-ignore state_referenced_locally
	const translateX = useTransform(scrollYProgress, [0, 0.4, 1], [1.5 * offsetX, 0, 0], {
		clamp: true
	});
	// svelte-ignore state_referenced_locally
	const translateY = useTransform(scrollYProgress, [0, 0.4, 1], [1.5 * offsetY, 0, 0], {
		clamp: true
	});

	// svelte-ignore state_referenced_locally
	const handTransformX = useTransform(
		scrollYProgress,
		[0, 0.4, 0.49, 0.5],
		[offsetX * 0.01, 0, 2 * offsetX, 10 * offsetX],
		{ clamp: true }
	);
	// svelte-ignore state_referenced_locally
	const handTransformY = useTransform(
		scrollYProgress,
		[0, 0.399, 0.49, 0.5],
		[offsetY * 0.01, 0, 2 * offsetY, 10 * offsetY],
		{ clamp: true }
	);

	const stepDiscrete = (from: string, to: string) => (t: number) => (t < 0.5 ? from : to);

	const shadowStyle = useTransform(
		scrollYProgress,
		[0, 0.4, 0.49, 0.5],
		[
			'--shadow-elevation-high',
			'--shadow-elevation-high',
			'--shadow-elevation-medium',
			'--shadow-elevation-medium'
		],
		{
			//@ts-expect-error nuh uh (its just type issues, i blame the library)
			mixer: stepDiscrete
		}
	);

	if (dev) {
		if ((() => false)()) {
			console.log(shouldScrollSnap);
		}
	}
</script>

<div class="pointer-events-none h-screen w-full snap-start snap-always" bind:this={targetEl}>
	<div
		class="pointer-events-none absolute top-0 h-screen w-full items-center justify-center"
		style="transform: translate({$translateX}%, {$translateY}%); z-index: {zIndex ?? 'unset'}"
	>
		<motion.div
			tabindex="-1"
			drag
			dragMomentum={false}
			dragTransition={{
				timeConstant: 0.05
			}}
			class={cn(
				'pointer-events-auto relative h-min w-min cursor-grab',
				!className && 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
				className
			)}
			//style="--shadow-style: var({$shadowStyle})"
			// style="{className
			// 	? ''
			// 	: 'translate: -50% -50%; top: 50%; left: 50%;'} --shadow-style: var({$shadowStyle}); {style}"
			//[TODO] this breaks things, cant set style on the div it fucks things up, gotta do something else :3
			whileInView={{ '--shadow-style': `var(${$shadowStyle})` }}
			whileHover={{ cursor: 'grab', '--shadow-style': `var(${$shadowStyle})` }}
			whileTap={{ cursor: 'grabbing', '--shadow-style': `var(--shadow-elevation-high)` }}
			// dragConstraints={{
			// 	top: (-containerElBoundingRect()?.height / 2) * dragWiggleRoom,
			// 	bottom: (containerElBoundingRect()?.height / 2) * dragWiggleRoom,
			// 	left: (-containerElBoundingRect()?.width / 2) * dragWiggleRoom,
			// 	right: (containerElBoundingRect()?.width / 2) * dragWiggleRoom
			// }}
			dragConstraints={containerEl}
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
			<div class="contents" style="--bwah-shadow-style: var({$shadowStyle});">
				<div
					class="absolute z-1 flex h-full w-full items-center justify-center select-none"
					style="transform: translate({$handTransformX}%, {$handTransformY}%);"
				>
					<img
						src={PawImage}
						alt="hand"
						class="pointer-events-none relative block w-[100vmin] max-w-[unset] origin-center scale-400 drop-shadow-md"
						style="rotate: calc(atan2({$handTransformX}, {$handTransformY}));"
					/>
				</div>
				<div
					class={cn(shadow && 'shadow-box')}
					style={styleString({
						transform: `${`rotate(${(Math.random() * 2 - 1) * rotateJitter + rotate}deg)`}`,
						...styleObject
					})}
				>
					{#if children}
						{@render children()}
					{/if}
				</div>
			</div>
		</motion.div>
	</div>
</div>
