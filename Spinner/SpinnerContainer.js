import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class SpinnerContainer extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * fixed positioning by adding the .slds-is-fixed class to the container,
			 * needed if dynamically loading portions of component after spinner is showing
			 */
			fixed: { type: Boolean },
		}
	}

	constructor() {
		super();
		this.className = null;
		//this.fixed = true;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
		
		const sldsClasses = [
			'slds-spinner_container',
			{ 'slds-is-fixed': this.fixed },
			this.className
		];

		return html`
<div class=${joinClassNames(sldsClasses)}>
<slot></slot>
</div>`;
	}
}

customElements.define('ldswc-spinnercontainer', SpinnerContainer);