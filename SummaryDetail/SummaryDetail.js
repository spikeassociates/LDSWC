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
			 * Renders custom title markup if provided. Receives title as an argument
			 */
			renderTitle: { type: String },
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
	}

	createRenderRoot() {
		return this;
	}

	renderTitle() {
		return html`
		<h3 className="slds-text-heading_small slds-truncate">
		${this.title}
		</h3>`;
	}

	render() {
		const sldsClasses = [
			'slds-summary-detail',
			{ 'slds-is-open': this.isOpen },
			this.className
		];
		const iconButtonClass = [
			'slds-m-right_small',
			this.iconButtonClassName
		];
		return html`
			<div class=${joinClassNames(sldsClasses)}>
				<ldswc-iconbutton
					@click=${this.onOpen}
					class=${joinClassNames(iconButtonClass)}
					icon="switch"
					sprite="utility"
					title="open"
				>
					<ldswc-buttonicon
					class="slds-summary-detail__action-icon"
					icon="switch"
					sprite="utility"
					/>
				</ldswc-iconbutton>
				<div>
				<div class="slds-summary-detail__title">
					${this.renderTitle()}
				</div>
				${ html`
					<div aria-hidden=${this.isOpen} class="slds-summary-detail__content">
					${this.renderContent()}
					</div>
				`}
				</div>
			</div>`;
	}

	renderContent() {
		return html`
		<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
		`;
	}

	onOpen(e) {
		this.isOpen = !this.isOpen;
	}
}

customElements.define('ldswc-summarydetail', SummaryDetail);
