<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SvgFilters from './svgFilters.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://use.typekit.net/pmn1nhh.css" />
</svelte:head>
{@render children()}

<SvgFilters />
