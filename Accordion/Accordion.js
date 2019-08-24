import { html } from '../libs/lit-element/lit-element.js';
import LDSWCElement from '../libs/ldswcelement/ldswcelement.js';
import { joinClassNames } from '../libs/ldswcutils/ldswcutils.js';

export default class Accordion extends LDSWCElement {
	static get properties() {
		return {
			/**
			 * which section(s) should be open by default, defaults to first
			 */
			defaultOpen: { type: Array },
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * support opening multiple sections simultaneously
			 */
			multiple: { type: Boolean },
			/**
			 * wraps the component in a card
			 */
			styled: { type: Boolean },
			/**
			 * controlled mode: section click handler
			 */
			onSectionClick: { type: String },
			/**
			 * function for the button on the right of summary. must be in the window global scope, inside the ldswcproperties object
			 */
			summaryOnClick: { type: String },
		};
	}

	constructor() {
		super();
		this.defaultOpen = null;
		this.className = null;
		this.styled = null;
		this.multiple = null;
		this.onSectionClick = null;
		this.summaryOnClick = null;
		this.state = null;
	}

	handleClick(e) {
		let id = e;
		if (e && e.target) {
			id = e.target.id;
		}
		if (typeof this.onSectionClick === 'function') { // controlled
			this.onSectionClick(e);
			return;
		}
		// uncontrolled
		if (!this.state.activeSections.includes(id)) {
			if (this.multiple) {
				this.state = { activeSections: [...this.state.activeSections, id] };
			} else {
				this.state = { activeSections: [id] };
			}
		} else {
			this.state = { activeSections: this.state.activeSections.filter(a => a !== id) };
		}
		var self = this;
		this.querySelectorAll('ldswc-accordionsection').forEach(function (wc) {
			wc.isOpen = (self.state.activeSections.indexOf(wc.id)!=-1);
		});
	}

	connectedCallback() {
		super.connectedCallback();
		var self=this;
		if (this.onSectionClick || this.handleClick) {
			this.querySelectorAll('ldswc-accordionsection').forEach(function (wc) {
				wc.addEventListener('switchClicked', self.handleClick.bind(self), true);
			});
		}
	}

	render() {
		const sldsClasses = [
			'slds-accordion',
			this.className
		];
		if (this.state === null) {
			if (this.defaultOpen) {
				if (typeof defaultOpen === 'string') {
					this.state = { activeSections: [this.defaultOpen] };
				} else { // is array of strings
					this.state = { activeSections: this.defaultOpen };
				}
			} else {
				this.state = { activeSections: [this.children[0].id] };
			}
		}

		if (this.styled) {
			return html`
<div class="slds-card">
<ul class=${joinClassNames(sldsClasses)}>
	<slot></slot>
</ul>
</div>`;
		}
		return html`
<ul class=${joinClassNames(sldsClasses)}>
	<slot></slot>
</ul>`;
	}
}

customElements.define('ldswc-accordion', Accordion);
