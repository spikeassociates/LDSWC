import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import getUniqueHash from '../libs/ldswcutils/hashFromString.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';

export default class RadioRaw extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * adds disabled attribute to the slider
			 */
			disabled: { type: Boolean },
			/**
			 * renders an error for the slider
			 */
			error: { type: String },
			/**
			 * id of the parent component carrying the error
			 */
			id: { type: String },
			/**
			 * hides the error message
			 */
			hideErrorMessage: { type: Boolean },
			/**
			 * sets the label to render as assistive text
			 */
			hideLabel: { type: Boolean },
			/**
			 * label for the select
			 */
			label: { type: String },
			/**
			 * onChange handler for the textarea
			 */
			whenChange: { type: String },
			/**
			 * radio group name
			 */
			name: { type: String },
			/**
			 * adds required attribute to the textarea
			 */
			required: { type: Boolean },
			/**
			 * checks the radio button
			 */
			checked: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.error = undefined;
		this.label = undefined;
		this.hideLabel = false;
		this.hideErrorMessage = false;
		this.required = false;
		this.checked = false;
		this.className = undefined;
		this.disabled = false;
		this.whenChange = undefined;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const renderRadio = () => html`<input
			aria-describedby=${ifDefined(this.error && !this.hideErrorMessage ? getUniqueHash(this.error, this.id) : undefined)}
			?checked=${this.checked}
			class=${ifDefined(this.className)}
			?disabled=${this.disabled}
			id=${this.id}
			name=${this.name}
			onChange=${ifDefined(this.whenChange)}
			type="radio"
		>`;
		const labelClasses = [
			'slds-form-element__label',
			{ 'slds-assistive-text': this.hideLabel },
		];
		const renderLabel = () => html`
			<label class="slds-radio__label" for=${ifDefined(this.id)}>
				<span class="slds-radio_faux" ></span>
				<span class=${joinClassNames(labelClasses)}>${ifDefined(this.label)}</span>
			</label>`;
		const renderRequired = () => {
			if (!this.required) {
				return null;
			}
			return html`<abbr class="slds-required" title="required">*</abbr>`;
		};
		return html`
			<span class="slds-radio">
				${renderRequired()}
				${renderRadio()}
				${renderLabel()}
			</span>`;
	}
}

customElements.define('ldswc-radioraw', RadioRaw);