import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import { joinClassNames, getAssistive } from '../../libs/ldswcutils/ldswcutils.js';
import IconSVG from '../../Icon/IconSVG.js';

export default class CheckboxButton extends LitElement {
	static get properties() {
		return {
		/**
		 * Optional additional className
		 */
		className: { type: String },
		/**
		 * Checkbox state
		 */
		checked: { type: Boolean },
		/**
		 * `id` of input. Links input and label
		 */
		id: { type: String },
		/**
		 * Input label, will be present for screen readers
		 */
		label: { type: String },
		}
	}

	constructor() {
		super();
		this.checked = null;
		this.className = null;
		this.id = null;
		this.label = null;
	}

	firstUpdated(changedProperties) {
		this.addEventListener('click', this.toggleCheck);
	}

	toggleCheck(e) {
		this.checked = !this.checked;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const sldsClasses = [
			'slds-assistive-text',
			this.className,
		];

	return html`
<div class="slds-checkbox_add-button">
	<input
		class=${joinClassNames(sldsClasses)}
		id=${this.id}
		type="checkbox"
		?checked="${this.checked}" >
	<label class="slds-checkbox_faux" for=${this.id}>
		${getAssistive(this.label)}
	</label>
</div>`;
	};
}

customElements.define('ldswc-checkboxbutton', CheckboxButton);