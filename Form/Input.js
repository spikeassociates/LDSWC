import { LitElement, html } from '../libs/lit-element/lit-element.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';

export default class Input extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * renders a bare input
			 */
			bare: { type: Boolean },
			/**
			 * dds disabled attribute to the input field
			 */
			disabled: { type: Boolean },
			/**
			 * renders an error for the input
			 */
			error: { type: String },
			/**
			 * hides the error message
			 */
			hideErrorMessage: { type: Boolean },
			/**
			 * renders an additional error icon if an error is set
			 */
			errorIcon: { type: Boolean },
			/**
			 * icon rendered on the left side of the input (from utility sprite)
			 */
			iconLeft: { type: String },
			/**
			 * icon rendered on the right side of the input (from utility sprite)
			 */
			iconRight: { type: String },
			/**
			 * onClick handler for the right icon
			 */
			iconRightOnClick: { type: String },
			/**
			 * id of the input field
			 */
			id: { type: String },
			/**
			 * label for the input
			 */
			label: { type: String },
			/**
			 * onChange handler for input
			 */
			whenChange: { type: String },
			/**
			 * onFocus handler for input
			 */
			whenFocus: { type: String },
			/**
			 * onKeyPress handler
			 */
			whenKeyPress: { type: String },
			/**
			 * placeholder for the input
			 */
			placeholder: { type: String },
			/**
			 * adds required attribute to input and label
			 */
			required: { type: Boolean },
			/**
			 * role of the input field
			 */
			role: { type: String },
			/**
			 * whether to show a spinner element inside the field, on the right end
			 */
			showSpinner: { type: Boolean },
			/**
			 * input type. all HTML5 types are allowed, defaults to "text"
			 * text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color
			 */
			type: { type: String },
			/**
			 * value of the input field
			 */
			value: { type: String },
			/**
			 * sets the label to render as assistive text
			 */
			hideLabel: { type: Boolean },
			/**
			 * Renders in a static, "view" mode
			 */
			isStatic: { type: Boolean },
			/**
			 * Renders a read-only input element
			 */
			readOnly: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.bare = false;
		this.className = null;
		this.disabled = false;
		this.error = undefined;
		this.errorIcon = false;
		this.hideErrorMessage = false;
		this.iconLeft = undefined;
		this.iconRight = undefined;
		this.iconRightOnClick = null;
		this.label = undefined;
		this.whenChange = undefined;
		this.whenFocus = undefined;
		this.whenKeyPress = undefined;
		this.placeholder = undefined;
		this.role = undefined;
		this.required = false;
		this.showSpinner = false;
		this.type ='text';
		this.value = '';
		this.isStatic = false;
		this.hideLabel = false;
		this.readOnly = null;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const hasIconLeft = !!this.iconLeft || (this.error && this.errorIcon);
		const hasIconRight = !!this.iconRight || !!this.showSpinner;
		return html`
		<ldswc-formelement ?isStatic=${this.isStatic} ?required=${this.required} error=${ifDefined(this.error)}>
			<ldswc-formelementlabel
				?hideLabel=${this.hideLabel}
				id=${ifDefined(this.id)}
				label=${ifDefined(this.label)}
				?readOnly=${this.isStatic}
				?required=${this.required}
			></ldswc-formelementlabel>
			<ldswc-formelementcontrol ?hasIconLeft=${hasIconLeft} ?hasIconRight=${hasIconRight} >
				${!this.isStatic ?
					html`<ldswc-inputraw
						error=${ifDefined(this.error)}
						?errorIcon=${this.errorIcon}
						?hideErrorMessage=${this.hideErrorMessage}
						iconLeft=${ifDefined(this.iconLeft)}
						iconRight=${ifDefined(this.iconRight)}
						iconRightOnClick=${ifDefined(this.iconRightOnClick)}
						id=${ifDefined(this.id)}
						label=${ifDefined(this.label)}
						placeholder=${ifDefined(this.placeholder)}
						?readOnly=${this.readOnly}
						?bare=${this.bare}
						?disabled=${this.disabled}
						ref=${ifDefined(this.ref)}
						?required=${this.required}
						?showSpinner=${this.showSpinner}
						type=${this.type}
						value=${ifDefined(this.value)}
						whenChange=${ifDefined(this.whenChange)}
						whenFocus=${ifDefined(this.whenFocus)}
						whenKeyPress=${ifDefined(this.whenKeyPress)}
					></ldswc-inputraw>`
				: html`<div class="slds-form-element__static">${this.value}</div>`
			}
			</ldswc-formelementcontrol>
			${(!this.hideErrorMessage && this.error) && html`<ldswc-formelementerror error=${this.error} id=${this.id} ></ldswc-formelementerror>`}
		</ldswc-formelement>`;
	}
}

customElements.define('ldswc-input', Input);