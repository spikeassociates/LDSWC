import { LitElement, html } from '../libs/lit-element/lit-element.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';
import getUniqueHash from '../libs/ldswcutils/hashFromString.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';

export default class InputRaw extends LitElement {

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
			iconRightOnClick: {type: String },
			/**
			 * id of the input field
			 */
			id: { type: String },
			/**
			 * label for the input
			 */
			label: { type: String },
			/**
			 * whenChange handler for input
			 */
			whenChange: { type: String },
			/**
			 * whenFocus handler for input
			 */
			whenFocus: { type: String },
			/**
			 * whenKeyPress handler
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
		};
	}

	constructor() {
		super();
		this.id = undefined;
		this.bare = false;
		this.className = null;
		this.disabled = false;
		this.error = undefined;
		this.errorIcon = false;
		this.hideErrorMessage = false;
		this.iconLeft = null;
		this.iconRight = null;
		this.iconRightOnClick = null;
		this.label = null;
		this.whenChange = null;
		this.whenFocus = null;
		this.whenKeyPress = null;
		this.placeholder = undefined;
		this.role = undefined;
		this.required = false;
		this.showSpinner = false;
		this.type ='text';
		this.value = '';
	}

	createRenderRoot() {
		return this;
	}

	firstUpdated() {
		super.firstUpdated();
		var f;
		if (window[this.whenChange] && typeof window[this.whenChange] === 'function') {
			this.addEventListener('change', window[this.whenChange].bind(this), true);
		} else if (this.whenChange) {
			eval('f = function (e) {'+this.whenChange+'}');
			this.addEventListener('change', f.bind(this), true);
		}
		if (window[this.whenFocus] && typeof window[this.whenFocus] === 'function') {
			this.addEventListener('focus', window[this.whenFocus].bind(this), true);
		} else if (this.whenFocus) {
			eval('f = function (e) {'+this.whenFocus+'}');
			this.addEventListener('focus', f.bind(this), true);
		}
		if (window[this.whenKeyPress] && typeof window[this.whenKeyPress] === 'function') {
			this.addEventListener('keyup', window[this.whenKeyPress].bind(this), true);
		} else if (this.whenKeyPress) {
			eval('f = function (e) {'+this.whenKeyPress+'}');
			this.addEventListener('keyup', f.bind(this), true);
		}
	}

	renderIconLeft() {
		const iconName = (this.error && this.errorIcon) ? 'warning' : this.iconLeft;
		if (iconName) {
			const iconClasses = [
				'slds-icon',
				'slds-input__icon',
				'slds-input__icon_left',
				'slds-icon-text-default',
			];
			return html`<ldswc-iconsvg
				className=${joinClassNames(iconClasses)}
				icon=${iconName}
				sprite='utility'
			></ldswc-iconsvg>`;
		}
		return null;
	}

	renderIconRight() {
		if (this.iconRight && this.iconRightOnClick) {
			const iconClasses = [
				'slds-input__icon',
				'slds-input__icon_right',
			];
			return html`<ldswc-iconbutton
				icon=${this.iconRight}
				sprite='utility'
				className=${joinClassNames(iconClasses)}
				onClick=${this.iconRightOnClick}
			></ldswc-iconbutton>`;
		}

		if (this.iconRight) {
			const iconClasses = [
				'slds-icon-text-default',
				'slds-icon',
				'slds-input__icon',
				'slds-input__icon_right',
			];
			return html`<ldswc-iconsvg
				className=${joinClassNames(iconClasses)}
				sprite='utility'
				icon=${this.iconRight}
			></ldswc-iconsvg>`;
		}
		return null;
	}

	render() {
		const sldsClasses = [
			this.bare ? 'slds-input_bare' : 'slds-input',
			this.className
		];
		return html`
			${this.renderIconLeft()}
			<input
				aria-describedby=${ifDefined(this.error && !this.hideErrorMessage ? getUniqueHash(this.error, this.id) : undefined)}
				class=${joinClassNames(sldsClasses)}
				?disabled=${this.disabled}
				id=${ifDefined(this.id)}
				placeholder=${ifDefined(this.placeholder)}
				ref=${ifDefined(this.ref)}
				?required=${this.required}
				role=${ifDefined(this.role)}
				type=${this.type}
				value=${this.value}
			/>
			${this.showSpinner ?
				html`<div class="slds-input__icon-group slds-input__icon-group_right">
					<ldswc-spinner
						flavor="brand"
						className="slds-input__spinner slds-m-right_xx-small"
						size="x-small"
					/></ldswc-spinner>
					${this.renderIconRight()}
					</div>`
				: this.renderIconRight()
			}`;
	}
}

customElements.define('ldswc-inputraw', InputRaw);