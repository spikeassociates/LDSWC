import { LitElement, html } from '../libs/lit-element/lit-element.js';
import { getThemeClass } from '../libs/ldswcutils/theme.js';
import {joinClassNames, getAssistive} from '../libs/ldswcutils/ldswcutils.js';
import Button from '../Button/Base/ButtonIcon.js';
import ButtonIcon from '../Button/IconButtons/IconButton.js';

export default class SummaryDetail extends LitElement {
	static get properties() {
		return {
			/**
			 * Additional css classes
			 */
			className: { type: String },
			/**
			 * Triggered on open icon and title click
			 */
			onOpen: { type: String},
			/**
			 * Whether the content is expanded
			 */
			isOpen: { type: Boolean },
			/**
			 * Title to be used by the renderTitle function
			 */
			title: { type: String }, 
			/**
			 * Summary of the component
			 */
			summary: { type: String },
			/**
			 * Additional className for the expand icon
			 */
			iconButtonClassName: { type: String },
		}
	}

	constructor() {
		super();
		// this.onOpen = null;
		this.isOpen = false;
		this.iconButtonClassName = null;
		this.title='';
		this.summary='';
	}

	createRenderRoot() {
		return this;
	}

	renderTitle() {
		if (this.title.indexOf('<div')!=-1 || this.title.indexOf('<span')!=-1) {
			var children = eval('html`'+this.title+'`');
		} else {
			var children = html`<h3 class="slds-text-heading_small slds-truncate">${this.title}</h3>`;
		}
		return children;
	}

	renderContent() {
		return html`<p>${this.summary}</p>`;
	}

	onOpen(e) {
		this.isOpen = !this.isOpen;
	}

	render() {
		const sldsClasses = [
			'slds-summary-detail',
			{ 'slds-is-open': this.isOpen },
			this.className
		];
		const iconButtonClass = [
			'slds-m-right_small',
			'slds-summary-detail__action-icon',
			this.iconButtonClassName
		];
		return html`
			<div class=${joinClassNames(sldsClasses)}>
				<ldswc-iconbutton
					@click=${this.onOpen}
					className=${joinClassNames(iconButtonClass)}
					icon="switch"
					sprite="utility"
					title="open"
				>
				</ldswc-iconbutton>
				<div>
				<div class="slds-summary-detail__title">
					${this.renderTitle()}
				</div>
				${html`
					<div aria-hidden=${this.isOpen} class="slds-summary-detail__content">
					${this.renderContent()}
					</div>
				`}
				</div>
			</div>`;
	}
}

customElements.define('ldswc-summarydetail', SummaryDetail);
