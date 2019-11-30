import { html } from '../libs/lit-element/lit-element.js';
import LDSWCElement from '../libs/ldswcelement/ldswcelement.js';
import { joinClassNames } from '../libs/ldswcutils/ldswcutils.js';
import { getAriaLabel, getTabsClass } from './utils.js';

export default class Tab extends LDSWCElement {
	static get properties() {
		return {
			/**
			 * Additional classes
			 */
			className: { type: String },
			/**
			 * Unique id, used to reference navigation
			 */
			id: { type: String },
			/**
			 * (PRIVATE) Set by parent Tabs
			 */
			isActive: { type: Boolean },
			/**
			 * (PRIVATE) Set by parent Tabs
			 */
			scoped: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.isActive = false;
		this.scoped = false;
	}

	render() {
		const sldsClasses = [
			{'slds-hide': !this.isActive},
			{'slds-show' : !!this.isActive},
			getTabsClass('__content', !!this.scoped),
			this.className
		];
		return html`
			<div
				aria-labelledby=${getAriaLabel(this.id)}
				class =${joinClassNames(sldsClasses)}
				id =${this.id}
				role="tabpanel"
			>
				<slot></slot>
			</div>
		`;
	}
}
customElements.define('ldswc-tab', Tab);