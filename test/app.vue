<template>
	<svg viewBox="0 0 960 900" width="960" height="900" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<path id="origin-mark" stroke="black" stroke-width="2" d="M-3,-3L3,3M-3,3L3,-3"></path>
		</defs>
		<g transform="translate(10, 250)">
			<use href="#origin-mark"></use>
			<text v-wrap.top.200="fmtText"></text>
		</g>
		<g transform="translate(260, 250)">
			<use href="#origin-mark"></use>
			<text v-wrap.middle.200="fmtText"></text>
		</g>
		<g transform="translate(510, 250)">
			<use href="#origin-mark"></use>
			<text v-wrap.bottom.200="fmtText"></text>
		</g>
		<g transform="translate(510, 290)">
			<use href="#origin-mark"></use>
			<text
				v-wrap-pad="{text: '<tspan style=\'text-decoration:underline;font-weight:bold\'>With padding</tspan>: '+fmtText, align: 'none'}"
			></text>
			<rect y="-1em" height="200" width="20" fill="#c8c8c8" opacity=".4"></rect>
			<rect y="-1em" height="200" width="20" x="180" fill="#c8c8c8" opacity=".4"></rect>
		</g>
		<g transform="translate(760, 250)">
			<use href="#origin-mark"></use>
			<text v-wrap.200="fmtText"></text>
		</g>
		<g transform="translate(260, 370)">
			<use href="#origin-mark"></use>
			<text
				v-wrap="{ width: 150, text: '<tspan style=\'text-decoration:underline;font-weight:bold\'>Dynamicly overridden width</tspan>: '+fmtText, afterReflow}"
			></text>
		</g>
		<g transform="translate(10, 10)">
			<path d="M0,0 l10,20" stroke="gray" stroke-width="2" />
			<use href="#origin-mark"></use>
			<use href="#origin-mark" transform="translate(10,20)"></use>
			<text transform="translate(10,20)" v-noalign="{ width:200, text: '<tspan style=\'font-weight:bold\'>align: none;</tspan> Text should not override text\'s transform property, which is <tspan style=\'font-family: monospace\'>translate(10,20)</tspan>.' }"></text>
		</g>
	</svg>
</template> 