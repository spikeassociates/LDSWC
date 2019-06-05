import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class Timeline extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
		}
	}

	constructor() {
		super();
		this.className = null;
	}

	render() {
		const sldsClasses = [
			'slds-timeline',
			this.className
		];

		return html`
<link rel="stylesheet" href="${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css">
<ul class=${joinClassNames(sldsClasses)}>
<slot></slot>
</ul>`;
	}
}

customElements.define('ldswc-timeline', Timeline);