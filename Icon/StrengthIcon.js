import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class StrengthIcon extends LitElement {
	static get properties() {
		return {
			/**
			 * Additional classes that will be applied to `span#slds-icon-strength`
			 */
			className: { type: String },
			/**
			 * Indicates the strength of the icon
			 */
			strength: { type: Number },
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
		};
	}

	constructor() {
		super();
		this.className = null;
		this.assistiveText = null;
		this.title = null;
		this.strength = 1;
		//this.animated = true;
	}

	createRenderRoot() {
		return this;
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
	<div class=${joinClassNames(sldsClasses)}>
		<span
		class="slds-icon-strength ${animated}"
		data-slds-strength=${this.strength}
		title=${this.title}
		>
		<svg viewBox="0 0 27 7" aria-hidden="true">
			<circle r="3.025" cx="3.5" cy="3.5" />
			<circle r="3.025" cx="13.5" cy="3.5" />
			<circle r="3.025" cx="23.5" cy="3.5" />
		</svg>
		${assistive && html`<span class="slds-assistive-text">${assistive}</span>`}
		</span>
	</div>`;
	}
}

customElements.define('ldswc-strengthicon', StrengthIcon);

