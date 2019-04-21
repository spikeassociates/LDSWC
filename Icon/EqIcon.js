import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';

export default class EqIcon extends LitElement {
	static get properties() {
		return {
			/**
			 * Additional classes that will be applied to `span#slds-icon-strength`
			 */
			className: { type: String },
			/**
			 * AssistiveText of icon. Defaults to `title` if not present
			 */
			assistiveText: { type: String },
			/**
			 * Sets a `title` tooltip. Also sets `assistiveText` if prop not present
			 */
			title: { type: String },
			/**
			 * indicate if you want to animate or not
			 */
			animated: { type: Boolean },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.assistiveText = null;
		this.title = null;
		//this.animated = true;
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);

		const assistive = this.assistiveText || this.title;
		const animated = this.animated ? 'slds-is-animated' : '';

		const sldsClasses = [
			{ 'slds-icon_container': true },
			this.className
		];
	
		return html`
<style>
@import 'include/LD/assets/styles/salesforce-lightning-design-system.css';
</style>
	<div class=${joinClassNames(sldsClasses)}>
		<span
		class="slds-icon-eq ${animated}"
		title=${this.title}
		>
		<div class="slds-icon-eq__bar"></div>
		<div class="slds-icon-eq__bar"></div>
		<div class="slds-icon-eq__bar"></div>
		${assistive && html`<span class="slds-assistive-text">${assistive}</span>`}
		</span>
	</div>
`;
	}
}

customElements.define('ldswc-eqicon', EqIcon);

