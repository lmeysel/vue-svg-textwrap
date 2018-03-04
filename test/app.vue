<template>
	<svg viewBox="0 0 960 500" width="960" height="500" xmlns="http://www.w3.org/2000/svg">
		<g transform="translate(10, 250)">
			<path stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3" />
			<text v-wrap.top.200="fmtText" />
		</g>
		<g transform="translate(260, 250)">
			<path stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3" />
			<text v-wrap.middle.200="fmtText" />
		</g>
		<g transform="translate(510, 250)">
			<path stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3" />
			<text v-wrap.bottom.200="fmtText" />
		</g>
		<g transform="translate(760, 250)">
			<path stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3" />
			<text v-wrap.baseline.200="fmtText" />
		</g>
	</svg>
</template> 