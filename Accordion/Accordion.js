import { LitElement, html } from '../libs/lit-element/lit-element.js';
import { joinClassNames } from '../libs/ldswcutils/ldswcutils.js';

export default class Accordion extends LitElement {
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
			 * controlled mode: id(s) of open section(s)
			 */
			open: { type: Array },
			/**
			 * controlled mode: section click handler
			 */
			onSectionClick: { type: String },
			/**
			 * array of accordion section(s)
			 */
			children: { type: Array },
			/**
			 * function for the button on the right of summary. must be in the window global scope, inside the ldswcproperties object
			 */
			summaryOnClick: { type: String },
		}
	}

	constructor() {
		super();
		this.defaultOpen = null;
		this.className = null;
		this.styled = null;
		this.multiple = null;
		this.open = null;
		this.onSectionClick = null;
		this.summaryOnClick = null;
		this.state = null;
	}

	createRenderRoot() {
		return this;
	}

	handleClick(e) {
		let id = e;
		if (e && e.target) {
			id = e.target.id;
		}
		if (this.open !== null && typeof this.onSectionClick === 'function') { // controlled
			this.onSectionClick(id);
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
		this.requestUpdate();
	}

	sumClick(e) {
		if (window.ldswcproperties.accordion[this.id] && typeof window.ldswcproperties.accordion[this.id][this.summaryOnClick] === 'function') {
			window.ldswcproperties.accordion[this.id][this.summaryOnClick](e);
		} else {
			console.error('LDSWC: '+this.summaryOnClick+' is not a function.');
		}
	}

	renderSections() {
		let sClick = this.onSectionClick || this.handleClick;
		let activeSections = this.open || this.state.activeSections;
		if (typeof activeSections === 'string') {
			activeSections = [activeSections];
		}
		return this.children.map(child => html`<ldswc-accordionsection
			id=${child.id}
			isOpen=${activeSections.includes(child.id) ? 'true' : 'false'}
			isFirst=${child.isFirst ? 'true' : 'false'}
			summary=${child.summary}
			summaryOnClick=${this.summaryOnClick}
			@summaryClicked=${this.sumClick}
			children=${child.children}
			@switchClicked=${sClick}
		></ldswc-accordionsection>`);
	}

	render() {
		const sldsClasses = [
			'slds-accordion',
			this.className
		];
		if (this.open === null && this.state === null) { // controlled
			if (this.defaultOpen) {
				if (typeof defaultOpen === 'string') {
					this.state = { activeSections: [defaultOpen] };
				} else { // is array of strings
					this.state = { activeSections: defaultOpen };
				}
			} else {
				this.state = { activeSections: [this.children[0].id] };
			}
		}

	if (this.styled) {
		return html`
<div class="slds-card">
<ul class=${joinClassNames(sldsClasses)}>
	${this.renderSections()}
</ul>
</div>`;
	}

return html`
<ul class=${joinClassNames(sldsClasses)}>
${this.renderSections()}
</ul>`;
	}
}

customElements.define('ldswc-accordion', Accordion);

