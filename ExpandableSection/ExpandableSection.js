import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import Button from '../Button/Base/Button.js';
import ButtonIcon from '../Button/Base/ButtonIcon.js';

export default class ExpandableSection extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * section open, ignored if uncollapsable
			 */
			open: { type: Boolean },
			/**
			 * uncollapsable
			 */
			uncollapsable: { type: Boolean },
			/**
			 * id linking button and expandable content
			 */
			id: { type: String },
			/**
			 * section title
			 */
			title: { type: String },
			/**
			 * section body
			 */
			body: { type: String },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.open = false;
		this.uncollapsable = false;
		this.id = '';
		this.title = '';
	}

	createRenderRoot() {
		return this;
	}

	toggleSection(e) {
		this.open = !this.open;
	}

	renderTitle() {
		if (this.title.indexOf('<div')!=-1 || this.title.indexOf('<span')!=-1) {
			var children = eval('html`'+this.title+'`');
		} else {
			var children = html`${this.title}`;
		}
		return children;
	}

	renderContent() {
		if (this.body.indexOf('<div')!=-1 || this.body.indexOf('<span')!=-1) {
			var children = eval('html`'+this.body+'`');
		} else {
			var children = html`${this.body}`;
		}
		return children;
	}

	render() {
		const isOpen = this.open === null ? this.open : null;
		const sldsClasses = [
			'slds-section',
			{ 'slds-is-open': this.uncollapsable || isOpen || this.open },
			this.className
		];
		const headerClasses = [
			'slds-section__title',
			{ 'slsds-theme_shade': this.uncollapsable}
		];
		const mtitle = this.renderTitle();
		return html`
<div class=${joinClassNames(sldsClasses)}>
	<h3 class=${joinClassNames(headerClasses)}>
	${this.uncollapsable
	?
		html`<span class="slds-truncate slds-p-horizontal_small" title=${mtitle}>${mtitle}</span>`
	:
		html`
			<ldswc-iconbutton
				aria-controls=${this.id}
				aria-expanded=${isOpen || this.open}
				aria-hidden="true"
				className="slds-section__title-action"
				@click=${this.toggleSection}
				title=${this.title}
				position="left"
				icon=${isOpen || this.open ? 'chevrondown' : 'chevronright'}
				sprite="utility"
			></ldswc-iconbutton>
			<span class="slds-truncate" title="${mtitle}">${mtitle}</span>`
		}
	</h3>
	<div aria-hidden=${!this.open} class="slds-section__content" id=${this.id}>
	${this.renderContent()}
	</div>
</div>`;
	}
}

customElements.define('ldswc-expandablesection', ExpandableSection);