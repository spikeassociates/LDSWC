import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import getUniqueHash from '../libs/ldswcutils/hashFromString.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';

export default class CheckboxRaw extends LitElement {
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
			/**
			 * sets class name for wrapper <span/> element
			 */
			wrapperClassName: { type: String },
		};
	}

	constructor() {
		super();
		this.error = undefined;
		this.hideLabel = false;
		this.hideErrorMessage = false;
		this.required = false;
		this.checked = false;
		this.className = undefined;
		this.disabled = false;
		this.whenChange = undefined;
		this.wrapperClassName = undefined;
	}

	createRenderRoot() {
		return this;
	}

	updatevalue(e) {
		this.checked=!this.checked;
	}

	firstUpdated() {
		super.firstUpdated();
		this.querySelectorAll('input')[0].addEventListener('pointerup', this.updatevalue.bind(this), true);
	}

	render() {
		const renderCheckbox = () => html`<input
			aria-describedby=${ifDefined(this.error && !this.hideErrorMessage ? getUniqueHash(this.error, this.id) : undefined)}
			?checked=${this.checked}
			class=${ifDefined(this.className)}
			?disabled=${this.disabled}
			id=${this.id}
			name="options"
			onChange=${ifDefined(this.whenChange)}
			type="checkbox"
		/>`;
		const labelClasses = [
			'slds-form-element__label',
			{ 'slds-assistive-text': this.hideLabel },
		];
		const renderLabel = () => html`
			<label class="slds-checkbox__label" for=${ifDefined(this.id)}>
				<span class="slds-checkbox_faux" ></span>
				<span class=${joinClassNames(labelClasses)}>${ifDefined(this.label)}</span>
			</label>`;
		const renderRequired = () => {
			if (!this.required) {
				return null;
			}
			return html`<abbr class="slds-required" title="required">*</abbr>`;
		};
		const spanClass = joinClassNames([
			'slds-checkbox',
			this.wrapperClassName,
		]);
		return html`
			<span class="${spanClass}">
				${renderRequired()}
				${renderCheckbox()}
				${renderLabel()}
			</span>`;
	}
}

customElements.define('ldswc-checkboxraw', CheckboxRaw);
