import { LitElement, svg } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class IconSVG extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * icon name
			 */
			icon: { type: String }, // isRequired
			/**
			 * icon size
			 */
			size: { type: String }, // oneOf(['xx-small', 'x-small', 'small', 'medium', 'large', 'none']),
			/**
			 * icon sprite name
			 */
			sprite: { type: String }, // isRequired
			/**
			 * removes slds_icon class
			 */
			isButton: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.icon = '';
		this.size = 'small';
		this.sprite = 'standard';
		this.isButton = false;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const hasSize = this.size != null && this.size !== 'none';
		const sldsClasses = [
			{ 'slds-icon': !this.isButton },
			{ [`slds-icon_${this.size}`]: hasSize },
			this.className
		];

		return svg`
<svg aria-hidden="true" class=${joinClassNames(sldsClasses)}>
	<use xmlns:xlink="http://www.w3.org/1999/xlink" href="${ldswcconfig.ldsBasePath}/icons/${this.sprite}-sprite/svg/symbols.svg#${this.icon}" />
</svg>`;
	}
}

customElements.define('ldswc-iconsvg', IconSVG);