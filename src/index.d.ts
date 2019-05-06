interface ITextWrapperConfiguration {
	/**
	 * True, to set text-attribute as text instead of HTML, defaults to false.
	 */
	plain: boolean,
	/**
	 * The maximum width the text element can flow. Null to ignore width (i.e. does no wrapping).
	 */
	width: Number | null,
	/**
	 * The vertical alignment of the resulting textblock. Use 'none' to avoid touching the
	 * text-element's transform-property. Otherwise any set value will be overwritten.
	 */
	align: 'top' | 'middle' | 'bottom' | 'baseline' | 'none',
	/**
	 * The line height (i.e. will be passed to the dy-property of new-line tspan-elements).
	 */
	lineHeight: String | Number,

	/** 
	 * Sets padding for the left and the right side.
	 */
	padding: Number,
	/**
	 * Padding on the left side.
	 */
	paddingLeft: Number,
	/**
	 * Padding on the right side.
	 */
	paddingRight: Number,
	
	/**
	 * A callback, called after the text has been updated and reflow is done.
	 */
	afterReflow: (sender: SVGTextElement, binding: ITextWrapperConfiguration) => any,

	/**
	 * True to measure on physical units (i.e. without resect to potential scaling)
	 */
	physicalMeasurement: Boolean
}