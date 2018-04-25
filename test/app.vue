<template>
	<svg viewBox="0 0 960 900" width="960" height="900" xmlns="http://www.w3.org/2000/svg">
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
		<g transform="translate(510, 290)">
			<path stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3" />
			<text v-wrap-pad.top="'<tspan style=\'text-decoration:underline;font-weight:bold\'>With padding</tspan>: '+fmtText" />
			<rect height="200" width="20" fill="#c8c8c8" opacity=".4"></rect>
			<rect height="200" width="20" x="180" fill="#c8c8c8" opacity=".4"></rect>
		</g>
		<g transform="translate(760, 250)">
			<path stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3" />
			<text v-wrap.baseline.200="fmtText" />
		</g>
		<g transform="translate(260, 370)">
			<path stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3" />
			<text v-wrap.baseline="{width: 150, text: '<tspan style=\'text-decoration:underline;font-weight:bold\'>Dynamicly overridden width</tspan>: '+fmtText}" />
		</g>
	</svg>
</template> 