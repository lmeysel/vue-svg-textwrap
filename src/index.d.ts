interface ITextWrapperConfiguration {
	/**
	 * True, to set text-attribute as text instead of HTML.
	 */
	plain: boolean = false,
	/**
	 * The maximum width the text element can flow. Null to ignore width (i.e. does no wrapping).
	 */
	width: Number | null = null,
	/**
	 * The vertical alignment of the resulting textblock. Use 'none' to avoid touching the
	 * text-element's transform-property. Otherwise any set value will be overwritten.
	 */
	align: 'top' | 'middle' | 'bottom' | 'baseline' | 'none' = 'none',
	/**
	 * The line height (i.e. will be passed to the dy-property of new-line tspan-elements).
	 */
	lineHeight: String | Number = '1.125em'
}