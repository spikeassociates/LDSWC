import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import {joinClassNames} from '../../libs/ldswcutils/ldswcutils.js';
import IconSVG from '../../Icon/IconSVG.js';
import {ldswcconfig} from '../../ldswcconfig.js';

export default class ButtonIcon extends LitElement {
	static get properties() {
		return {
			/**
			 * Optional additional className
			 */
			className: { type: String },
			/**
			 * icon name
			 */
			icon: { type: String }, // isRequired
			/**
			 * Position in `Button`. Either left or right, can also be `null`
			 */
			position: { type: String },
			/**
			 * icon size
			 */
			size: { type: String }, // oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
			/**
			 * icon sprite name
			 */
			sprite: { type: String }, // isRequired
		}
	}

	constructor() {
		super();
		this.className = null;
		this.icon = '';
		this.position = null;
		this.size = 'small';
		this.sprite = 'standard';
	}

	createRenderRoot() {
		return this;
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
		
		const sldsClasses = [
			'slds-button__icon',
			{ [`slds-button__icon_${this.size}`]: !!this.size },
			{ [`slds-button__icon_${this.position}`]: !!this.position },
			this.className
		];

		return html`
<ldswc-iconsvg
	className=${joinClassNames(sldsClasses)}
	isButton
	icon=${this.icon}
	sprite=${this.sprite}
	size=${this.size}
></ldswc-iconsvg>`;
	}
}

customElements.define('ldswc-buttonicon', ButtonIcon);
