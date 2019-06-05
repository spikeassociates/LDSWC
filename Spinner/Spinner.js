import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import SpinnerContainer from './SpinnerContainer.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class Spinner extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * inline variation
			 */
			inline: { type: Boolean },
			/**
			 * convenience prop to wrap Spinner in SpinnerContainer
			 */
			container: { type: Boolean },
			/**
			 * Label that will be shown on hover
			 */
			assistiveLabel: { type: String },
			/**
			 * Adds a 300ms start delay
			 */
			delayed: { type: Boolean },
			/**
			 * Flavor. Can be either 'brand' or 'inverse'
			 */
			flavor: { type: String },
			/**
			 * spinner sizes: xx-small, x-small, small, medium, large
			 */
			size: { type: String },
		}
	}

	constructor() {
		super();
		this.assistiveLabel = 'Loading';
		this.className = null;
		//this.container = false;
		//this.delayed = false;
		//this.inline = false;
		this.flavor = 'brand';
		this.size = 'medium';
	}

	spinner(classes) {
		return html`
<link rel="stylesheet" href="${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css">
<div role="status" class=${joinClassNames(classes)}>
	<span class="slds-assistive-text">${this.assistiveLabel}</span>
	<div class="slds-spinner__dot-a" ></div>
	<div class="slds-spinner__dot-b" ></div>
</div>`
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
		const baseClass = 'slds-spinner';
		const sldsClasses = [
			baseClass,
			{ [`${baseClass}_${this.size}`]: !!this.size },
			{ [`${baseClass}_${this.flavor}`]: !!this.flavor },
			{ [`${baseClass}_delayed`]: !!this.delayed },
			{ [`${baseClass}_inline`]: !!this.inline },
			this.className
		];

		if (this.container) {
			return html`<ldswc-spinnercontainer>${this.spinner(sldsClasses)}</ldswc-spinnercontainer>`;
		} else {
			return this.spinner(sldsClasses);
		}
	}
}

customElements.define('ldswc-spinner', Spinner);
