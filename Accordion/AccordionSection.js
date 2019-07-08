
import { LitElement, html } from '../libs/lit-element/lit-element.js';
import Button from '../Button/Base/Button.js';
import IconButton from '../Button/Base/ButtonIcon.js';
import { joinClassNames, getAssistive, getEmptySpan} from '../libs/ldswcutils/ldswcutils.js';

export default class AccordionSection extends LitElement {
	static get properties() {
		return {
			/**
			 * section content
			 */
			children: { type: String },
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
			isOpen: { type: String },
			/**
			 * indicates if this is the first element in the accordion. for CSS formatting
			 */
			isFirst: { type: String },
			/**
			 * section summary
			 */
			summary: { type: String },
			/**
			 * function for the button on the right of summary
			 */
			summaryOnClick: { type: String },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.isOpen = false;
		this.summary = null;
		this.summaryOnClick = null;
	}

	createRenderRoot() {
		return this;
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
		let isOpen = (this.isOpen!==null && this.isOpen!=='false' && this.isOpen!=='0');
		let isFirst = (this.isFirst!==null && this.isFirst!=='false' && this.isFirst!=='0');
		const sectionClasses = [
			'slds-accordion__section',
			{ 'slds-is-open': isOpen },
		];
		const btnchildren = `<span class="slds-truncate" title="${this.summary}">${this.summary}</span>`;
		const children = eval('html`'+this.children+'`');
		return html`${(isFirst ? '' : getEmptySpan())}
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
			aria-expanded=${isOpen ? 'true' : 'false'}
			children=${btnchildren}
			@click="${this.switchClick}"
		></ldswc-button>
		</h3>
		${this.summaryOnClick!='null' && this.summaryOnClick!='none' ? this.summaryIcon() : ''}
	</div>
	<div
		aria-hidden=${isOpen ? 'true' : 'false'}
		class="slds-accordion__content"
		id=${this.id}
	>
		${children}
	</div>
	</section>
</li>`;
	}
}

customElements.define('ldswc-accordionsection', AccordionSection);




