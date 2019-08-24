
import { html } from '../libs/lit-element/lit-element.js';
import LDSWCElement from '../libs/ldswcelement/ldswcelement.js';
import Button from '../Button/Base/Button.js';
import IconButton from '../Button/Base/ButtonIcon.js';
import { joinClassNames, getAssistive, getEmptySpan} from '../libs/ldswcutils/ldswcutils.js';

export default class AccordionSection extends LDSWCElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * section id
			 */
			id: { type: String }, // isRequired
			/**
			 * section is open
			 */
			isOpen: { type: Boolean },
			/**
			 * indicates if this is the first element in the accordion. for CSS formatting
			 */
			isFirst: { type: Boolean },
			/**
			 * section summary
			 */
			summary: { type: String },
			/**
			 * function for the button on the right of summary
			 */
			summaryOnClick: { type: String },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.isOpen = false;
		this.isFirst = false;
		this.summary = null;
		this.summaryOnClick = null;
	}

	switchClick(e) {
		let event = new CustomEvent('switchClicked', {});
		this.dispatchEvent(event);
	}

	summaryClick(e) {
		let event = new CustomEvent('summaryClicked', {});
		this.dispatchEvent(event);
	}

	summaryIcon() {
		return html`
<ldswc-buttonicon
	sprite="utility"
	icon="down"
	aria-haspopup="true"
	border="filled"
	className="slds-shrink-none"
	@click="${this.summaryClick}"
	size="x-small"
	title="More Options"
></ldswc-buttonicon>`;
	}

	render() {
		const liClasses = [
			'slds-accordion__list-item',
			this.className,
		];
		const sectionClasses = [
			'slds-accordion__section',
			{ 'slds-is-open': !!this.isOpen },
		];
		const btnchildren = `<span class="slds-truncate" title="${this.summary}">${this.summary}</span>`;
		//const children = eval('html`'+this.children+'`');
		return html`${(!this.isFirst ? '' : getEmptySpan())}
<li class=${joinClassNames(liClasses)} key=${this.id}>
	<section class=${joinClassNames(sectionClasses)} id=${this.id}>
	<div class="slds-accordion__summary">
		<h3 class="slds-accordion__summary-heading">
		<ldswc-button
			sprite="utility"
			icon="switch"
			className="slds-button_reset slds-accordion__summary-action"
			figureClass="slds-accordion__summary-action-icon"
			iconSize="none"
			flavor="none"
			aria-controls=${'accordion-details-'+this.id}
			?aria-expanded=${this.isOpen}
			children=${btnchildren}
			@click="${this.switchClick}"
		></ldswc-button>
		</h3>
		${this.summaryOnClick!='null' && this.summaryOnClick!='none' ? this.summaryIcon() : ''}
	</div>
	<div
		?aria-hidden=${this.isOpen}
		class="slds-accordion__content"
		id=${this.id}
	>
		<slot></slot>
	</div>
	</section>
</li>`;
	}
}

customElements.define('ldswc-accordionsection', AccordionSection);
