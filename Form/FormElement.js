import { html } from '../libs/lit-element/lit-element.js';
import LDSWCElement from '../libs/ldswcelement/ldswcelement.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';

export default class FormElement extends LDSWCElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * can render errors for the given form element
			 */
			error: { type: String },
			/**
			 * renders as a fieldset instead
			 */
			fieldset: { type: Boolean },
			/**
			 * Renders in a static, "view" mode
			 */
			isStatic: { type: Boolean },
			/**
			 * adds required-attribute to the form element
			 */
			required: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.error = null;
		this.fieldset = false;
		this.isStatic = false;
		this.required = false;
	}

	render() {
		const sldsClasses = [
			'slds-form-element',
			{ 'slds-has-error': !!this.error },
			{ 'slds-is-required': this.required },
			{ 'slds-form-element_readonly': this.isStatic },
			this.className
		];

		return html`${this.fieldset ?
			html`<fieldset class=${joinClassNames(sldsClasses)}><slot></slot></fieldset>`:
			html`<div class=${joinClassNames(sldsClasses)}><slot></slot></div>`
		}`;
	}
}

customElements.define('ldswc-formelement', FormElement);
