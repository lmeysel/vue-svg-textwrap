import Vue from 'vue';
import { ConfiguredWrapper } from '../src/polyfills';
const appTemplate = require('./app.vue').default;
new Vue(Object.assign(appTemplate, {
	directives: {
		wrap: ConfiguredWrapper({
			lineHeight: '1.5em'
		}),
		wrapPad: ConfiguredWrapper({
			width: 200,
			padding: 20
		})
	},
	el: '#app',
	data: {
		text: null,
		fmtText: null
	},
	methods: {
		afterReflow(sender) {
			console.log('Reflow:', sender);
		}
	},
	mounted() {
		window.setTimeout(() => {
			this.text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipiscienimlaudantium, quisrepell endusipsum oditremomnis velitiusto! Similique porro sint libero quas, voluptate fugiat aliquid laborum. Non, asperiores.';
			this.fmtText = '<tspan style="font-weight:bold">Lorem ipsum, dolor</tspan><tspan fill="red"> sit amet consectetur adipisicing elit. Adipisci</tspan><tspan style="font-style:italic"> enim laudantium, quisrepelle ndusipsum oditremomnisv elitiusto!</tspan> Similique porro sint libero quas, voluptate fugiat aliquid laborum. Non, asperiores.';
		}, 500);
	}
}));