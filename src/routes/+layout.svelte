<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/images/favicon.png';
	import SvgFilters from './svgFilters.svelte';

	import Embed from '$lib/assets/images/embed.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://use.typekit.net/pmn1nhh.css" />
	<title>Mint's Portfolio</title>
	<meta property="og:title" content="Mint's Portfolio" />
	<meta property="og:site_name" content="mintexists" />
	<meta property="og:url" content="https://mintexists.me/" />
	<meta
		property="og:description"
		content="Hi! I'm a third year New Media Interactive Development student at RIT."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content={Embed} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#A2FA73" />
</svelte:head>
{@render children()}

<SvgFilters />
