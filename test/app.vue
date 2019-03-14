<template>
	<svg viewBox="0 0 960 900" width="960" height="900" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<path id="origin-mark" stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3" />
		</defs>
		<g transform="translate(10, 250)">
			<use href="#origin-mark" />
			<text v-wrap.top.200="fmtText" />
		</g>
		<g transform="translate(260, 250)">
			<use href="#origin-mark" />
			<text v-wrap.middle.200="fmtText" />
		</g>
		<g transform="translate(510, 250)">
			<use href="#origin-mark" />
			<text v-wrap.bottom.200="fmtText" />
		</g>
		<g transform="translate(510, 290)">
			<use href="#origin-mark" />
			<text v-wrap-pad="{text: '<tspan style=\'text-decoration:underline;font-weight:bold\'>With padding</tspan>: '+fmtText, align: 'none'}" />
			<rect y="-1em" height="200" width="20" fill="#c8c8c8" opacity=".4"></rect>
			<rect y="-1em" height="200" width="20" x="180" fill="#c8c8c8" opacity=".4"></rect>
		</g>
		<g transform="translate(760, 250)">
			<use href="#origin-mark" />
			<text v-wrap.200="fmtText" />
		</g>
		<g transform="translate(260, 370)">
			<use href="#origin-mark" />
			<text v-wrap="{ width: 150, text: '<tspan style=\'text-decoration:underline;font-weight:bold\'>Dynamicly overridden width</tspan>: '+fmtText, afterReflow}" />
		</g>
		<g transform="translate(10,20)">
			<use href="#origin-mark" />
			<text v-wrap.middle="{ padding: 10, width: 520, text: 'Non wrapping text: Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}"></text>
		</g>
	</svg>
</template> 