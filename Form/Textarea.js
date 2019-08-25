import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import getUniqueHash from '../libs/ldswcutils/hashFromString.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';

export default class Textarea extends LitElement {
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
			 * onChange handler for the slider
			 */
			whenChange: { type: String },
			/**
			 * textarea placeholder
			 */
			placeholder: { type: String },
			/**
			 * textarea value
			 */
			value: { type: String },
			/**
			 * renders a static textarea output instead
			 */
			readOnly: { type: Boolean },
			/**
			 * adds required attribute to the textarea
			 */
			required: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.label = undefined;
		this.className = null;
		this.disabled = false;
		this.error = undefined;
		this.hideErrorMessage = false;
		this.hideLabel = false;
		this.whenChange = undefined;
		this.readOnly = false;
		this.required = false;
		this.placeholder = undefined;
		this.value = undefined;
	}

	createRenderRoot() {
		return this;
	}

	renderControl() {
		if (this.readOnly) {
			return html`<div class="slds-form-element__static slds-text-longform"><p>${ifDefined(this.value)}</p></div>`;
		}
		const sldsClasses = [
			'slds-textarea',
			this.className,
		];
		return html`<textarea
			class=${joinClassNames(sldsClasses)}
			id=${this.id}
			onChange=${ifDefined(this.whenChange)}
			placeholder=${ifDefined(this.placeholder)}
			?disabled=${this.disabled}
			?required=${this.required}
			aria-describedby=${ifDefined(this.error && !this.hideErrorMessage ? getUniqueHash(this.error, this.id) : undefined)}
		>${ifDefined(this.value)}</textarea>`;
	}

	render() {
		return html`
<ldswc-formelement ?required=${this.required} error=${ifDefined(this.error)}>
	<ldswc-formelementlabel label=${ifDefined(this.label)} id=${this.id} ?required=${this.required} ?hideLabel=${this.hideLabel} ?readOnly=${this.readOnly} ></ldswc-formelementlabel>
	<ldswc-formelementcontrol className=${joinClassNames({ 'slds-border_bottom': this.readOnly })}>
		${this.renderControl()}
	</ldswc-formelementcontrol>
	${!this.hideErrorMessage && this.error && html`<ldswc-formelementerror error=${this.error} id=${this.id} ></ldswc-formelementerror>`}
</ldswc-formelement>`;
	}
}

customElements.define('ldswc-textarea', Textarea);