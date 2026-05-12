<script lang="ts">
	import DisplacementMap from '$lib/assets/images/displacement.png';
	import Disp2 from '$lib/assets/images/disp2.png';
</script>

<svg width="100%" height="100%" x="0" y="0">
	<filter id="wavy" width="100%" height="100%" x="0" y="0">
		<feImage href={Disp2} result="DISPMAP" preserveAspectRatio="none"></feImage>

		<feDisplacementMap
			in="SourceGraphic"
			in2="DISPMAP"
			scale="25"
			xChannelSelector="R"
			yChannelSelector="B"
			result="DISPLACED"
			width="100%"
			height="100%"
			x="0"
			y="0"
		></feDisplacementMap>
		<!-- 
		<feBlend
			in="SourceGraphic"
			in2="DISPMAP"
			mode="multiply"
			result="BLEND"
			width="100%"
			height="100%"
			x="0"
			y="0"
		>
		</feBlend> -->
	</filter>
</svg>
