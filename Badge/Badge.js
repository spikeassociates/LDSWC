import { LitElement, html } from '../libs/lit-element/lit-element.js';
import { getThemeClass } from '../libs/ldswcutils/theme.js';
import {applyDecorators, joinClassNames, getAssistive} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class Badge extends LitElement {
	static get properties() {
		return {
			/**
			 * label to show inside badge
			 */
			label: { type: String },
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * Badge flavor: array of flavors, you can also provide a single flavor string.
			 * Flavors: inverse, lightest
			 */
			flavor: { type: String }, // isRequired
			/**
			 * theme
			 */
			theme: { type: String },
			/**
			 * Optional title that will be rendered as assistive-text
			 */
			title: { type: String },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.flavor = null;
		this.theme = null;
		this.title = null;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
		
		const sldsClasses = [
			'slds-badge',
			...getThemeClass(this.theme),
			applyDecorators(this.flavor, 'badge'),
			this.className
		];

		return html`
<span class=${joinClassNames(sldsClasses)} title=${this.title}>
	${this.label}
	${this.title && getAssistive(this.title)}
</span>`;
	}
}

customElements.define('ldswc-badge', Badge);
