import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class MenuSubHeader extends LitElement {
	static get properties() {
		return {
			/**
			 * The content of a menu item sub header, should be string or an element
			 */
			title: {type: String}, // isRequired,
			/**
			 * class name
			 */
			className: {type: String},
			/**
			 * set to true if a divider should appear above this list item
			 */
			divider: {type: Boolean},
		};
	}

	constructor() {
		super();
		this.divider = false;
		this.className = null;
		this.title = null;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const sldsClasses = [
			'slds-dropdown__header',
			'slds-truncate',
			{ 'slds-has-divider_top-space': this.divider },
			this.className
		];
		return html`
<li class=${joinClassNames(sldsClasses)}
	title=${this.title}
	role="separator">
<span>${this.title}</span>
</li>`;
	}
}

customElements.define('ldswc-menusubheader', MenuSubHeader);
