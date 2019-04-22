import { LitElement, html } from '../libs/lit-element/lit-element.js';
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
			size: { type: String }, // oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
			/**
			 * icon sprite name
			 */
			sprite: { type: String }, // isRequired
			/**
			 * removes slds_icon class
			 */
			isButton: { type: Boolean },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.icon = '';
		this.size = 'small';
		this.sprite = 'standard';
		this.isButton = false;
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
		
		const sldsClasses = [
			{ 'slds-icon': !this.isButton },
			{ [`slds-icon_${this.size}`]: !!this.size },
			this.className
		];

		return html`
<style>
@import '${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css';
</style>
<svg aria-hidden="true" class=${joinClassNames(sldsClasses)}>
	<use xmlns:xlink="http://www.w3.org/1999/xlink" href="${ldswcconfig.ldsBasePath}/icons/${this.sprite}-sprite/svg/symbols.svg#${this.icon}" />
</svg>
`;
	}
}

customElements.define('ldswc-iconsvg', IconSVG);