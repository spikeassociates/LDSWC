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
			contents: { type: Object },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.contents = '';
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const sldsClasses = [
			'slds-timeline',
			this.className
		];
		return html`
<ul class=${joinClassNames(sldsClasses)}>
${this.contents.map(tlcmp => html`<ldswc-timelineitem
	id=${tlcmp.id}
	title=${tlcmp.title}
	date=${tlcmp.date}
	className=${tlcmp.className}
	buttonTitle=${tlcmp.buttonTitle}
	buttonFlavor=${tlcmp.buttonFlavor}
	buttonSprite=${tlcmp.buttonSprite}
	buttonIcon=${tlcmp.buttonIcon}
	iconTitle=${tlcmp.iconTitle}
	iconClasses=${tlcmp.iconClasses}
	iconAssetPath=${tlcmp.iconAssetPath}
	iconSprite=${tlcmp.iconSprite}
	iconIcon=${tlcmp.iconIcon}
	actionButtonTitle=${tlcmp.actionButtonTitle}
	actionButtonClasses=${tlcmp.actionButtonClasses}
	actionButtonFlavor=${tlcmp.actionButtonFlavor}
	actionButtonSprite=${tlcmp.actionButtonSprite}
	actionButtonIcon=${tlcmp.actionButtonIcon}
	contentstrigger=${window.ldswcproperties.timeline[tlcmp.contentstrigger].contentstrigger}
	contentstimeline=${window.ldswcproperties.timeline[tlcmp.contentstimeline].contentstimeline}
	contentsdetails=${window.ldswcproperties.timeline[tlcmp.contentsdetails].contentsdetails}
></ldswc-timelineitem>`)}
</ul>`;
	}
}

customElements.define('ldswc-timeline', Timeline);