# Vue 2.x text-wrap-directive for svg text elements

## Install
`npm install --save vue-svg-textwrap`

## Usage
Import module via
```javascript
import wrapper from 'vue-svg-textwrap';
```

... register as directive globally:
```javascript
Vue.directive('textwrap', wrapper);
```
... or locally within a component:
```javascript
directives: {
  wrapper
}
```
... and then in your vue template:
```html
<svg>
  <text v-wrapper="myTextProperty" />
</svg>
```

## Configuration
For now, there is no text wrapping - how should the directive know the desired maximum width?
You can tell it via a numeric modifier (i.e. `v-wrapper.250="myTextProperty"`) which will be interpreted as the maximum width in pixels, `250` here.

The same way you can tell the wrapper about the vertical alignment, which accepts `'top'`, `'middle'`, `'bottom'`, `'baseline'` and `'none'`, defaults to `'baseline'`.

By default the given value will be interpreted as HTML/SVG, i.e. it will be applied via the innerHTML property of the node. Why that? Uhm... you may set formatted text? Some words bold, some others highlighted? Yes, the wrapper respects your formatting. But if you prefer to set the textContent you can do with the `plain`-modifier.

...thank you, very good question: What is the line-height? It defaults to `1.125em`. Not happy with that? Then you might be interested in setting it yourself, unfortunately this cannot be done via a modifier. Go ahead:

## Per-directive configuration
There is not only the directive itself, but also some kind of generator, which allows override the standard-configuration. You can access it via
```javascript
import { ConfiguredWrapper } from 'vue-svg-textwrap'
```
which is a function, accepting a configuration object as parameter and returning a configured directive:
```javascript
directives: {
  wrapper: ConfiguredWrapper({ lineHeight: '2em' })
}
```
This is how you may override the default line-height, but you can also do so with the other properties. Of course, you can create multiple differently configured wrapper directives this way.
<table>
	<thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
	<tbody>
		<tr>
			<td>plain</td>
			<td>boolean</td>
			<td>false</td>
			<td>True, to apply given text as textContent instead of innerHTML.</td>
		</tr>
		<tr>
			<td>width</td>
			<td>int</td>
			<td>(null)</td>
			<td>The maximum width of the text-element.</td>
		</tr>
		<tr>
			<td>align</td>
			<td>string</td>
			<td>'baseline'</td>
			<td>The vertical alignment of the node.</td>
		</tr>
		<tr>
			<td>lineHeight</td>
			<td>string|int</td>
			<td>'1.125em'</td>
			<td>The line height.</td>
		</tr>
		<tr>
			<td>padding</td>
			<td>int</td>
			<td>0</td>
			<td>Padding on left and right side. This has lesser priority when set with paddingLeft and/or paddingRight. <i>(Since 0.8)</i></td>
		</tr>
		<tr>
			<td>paddingLeft</td>
			<td>int</td>
			<td>0</td>
			<td>Padding on the left side. Overwrites eventually given option 'padding'. <i>(Since 0.8)</i></td>
		</tr>
		<tr>
			<td>paddingRight</td>
			<td>int</td>
			<td>0</td>
			<td>Padding on the right side. Overwrites eventually given option 'padding'. <i>(Since 0.8)</i></td>
		</tr>
		<tr>
			<td>afterReflow</td>
			<td>(SVGTextElement, configuration) => any</td>
			<td></td>
			<td>Callback routine to call after text is updated and wrapping calculation is done. `this` is the owning Vue component within the callback. <i>(Since 0.14)</i></td>
		</tr>
	</tbody>
</table>

## Configuration bindings
Since 0.0.12 you are able to override the settings with dynamic property values (i.e. bind to instance properties). Using the directive as following you can e.g. bind the width for the text-wrapper: 
```html
<text v-wrapper="{ text: myTextProperty, width: myWidthProperty }" />
```

## About the wrapper
* When saying "line-height", I am just talking about the value applied on `tspan`-elements for the `dy`-attribute.
* The wrapper will set or override the attributes/properties
	* `tspan.dy = config.lineHeight`
	* `tspan.y` (will be removed)
	* `tspan.x` (will be set to 0 for the first tspan on each line)
	* `tspan.style.display` (will be set to 'none' temporarily to ignore too long lines in further measurements)

## Be careful with `text`'s `transform`-property.
... because this will be overwritten, to fit the alignment and (if given) the left padding. If want to set the translation by yourself, use `align = 'none'`. The transform property will not be touched then. The left padding then will be applied via the tspan's x-property.

## Polyfilling
For IE there are two functions which are needed to be polyfilled:
* `SVGElement.innerHTML` could be done with innersvg-polyfill (npm-package)
* `Object.assign(...)` could be done with core-js/(library/)fn/object/assign

You may want to control your polyfills yourself, therefore the default exported comes without polyfills, but there are also polyfilled versions available: `dist/index.pf.js` and `dist/index.pf.min.js`.

## Very long words
Currently the wrapper has a problem with too long words, i.e words which are too long to wrap within the desired width (especially when formatting a text about a German *Donaudampfschifffahrtsgesellschaftskapitänskajüttenbodenreiniger*). Maybe I am just thinking too complicated for now or the problem is really difficult... Whatever, too long words cause unreliable behavior currently :(