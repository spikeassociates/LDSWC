import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import getUniqueHash from '../libs/ldswcutils/hashFromString.js';

export default class FormElementError extends LitElement {
	static get properties() {
		return {
			/**
			 * element triggered on the containing form element
			 */
			error: { type: String },
			/**
			 * id of the parent component carrying the error
			 */
			id: { type: String },
		};
	}

	constructor() {
		super();
		this.error = null;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		if (this.error) {
			const sldsClasses = [
				'slds-form-element__help',
				this.className
			];
			return html`<div id=${getUniqueHash(this.error, this.id)} class=${joinClassNames(sldsClasses)} >${this.error}</div>`;
		}
		return null;
	}
}

customElements.define('ldswc-formelementerror', FormElementError);
