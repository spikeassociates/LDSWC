import { html } from '../libs/lit-element/lit-element.js';
import LDSWCElement from '../libs/ldswcelement/ldswcelement.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';

export default class FormElementControl extends LDSWCElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * set this to true if the form element has a left icon
			 */
			hasIconLeft: { type: Boolean },
			/**
			 * set this to true if the form element has a right icon
			 */
			hasIconRight: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.hasIconLeft = false;
		this.hasIconRight = false;
	}

	render() {
		const sldsClasses = [
			'slds-form-element__control',
			{ 'slds-input-has-icon': this.hasIconLeft || this.hasIconRight },
			{ 'slds-input-has-icon_right': this.hasIconRight && !this.hasIconLeft },
			{ 'slds-input-has-icon_left': this.hasIconLeft && !this.hasIconRight },
			{ 'slds-input-has-icon_left-right': this.hasIconLeft && this.hasIconRight },
			this.className
		];
		return html`<div class=${joinClassNames(sldsClasses)}><slot></slot></div>`;
	}
}

customElements.define('ldswc-formelementcontrol', FormElementControl);