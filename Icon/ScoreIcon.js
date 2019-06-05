import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

const SCORES = ['negative', 'positive'];

export default class ScoreIcon extends LitElement {
	static get properties() {
		return {
			/**
			 * Additional classes that will be applied to `span#slds-icon-score`
			 */
			className: { type: String },
			/**
			 * Indicates the icon that will be rendered: `positive` or `negative`
			 */
			score: { type: String }, // isRequired oneOf ['negative', 'positive']
			/**
			 * AssistiveText of icon. Defaults to `title` if not present
			 */
			assistiveText: { type: String },
			/**
			 * Sets a `title` tooltip. Also sets `assistiveText` if prop not present
			 */
			title: { type: String },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.assistiveText = null;
		this.title = null;
		this.score = 'positive';
	}

	renderScore(score) {
		return html`
<svg key=${score} viewBox="0 0 5 5" class=${`slds-icon-score__${score}`} aria-hidden="true" >
	<circle cx="50%" cy="50%" r="1.875" />
</svg>`;
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);

		const assistive = this.assistiveText || this.title;

		const sldsClasses = [
			{ 'slds-icon_container': true },
			this.className
		];
	
		return html`
<link rel="stylesheet" href="${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css">
	<div class=${joinClassNames(sldsClasses)}>
		<span
		class="slds-icon-score"
		data-slds-state=${this.score}
		title=${this.title}
		>
		${SCORES.map(this.renderScore)}
		${assistive && html`<span class="slds-assistive-text">${assistive}</span>`}
		</span>
	</div>
`;
	}
}

customElements.define('ldswc-scoreicon', ScoreIcon);

