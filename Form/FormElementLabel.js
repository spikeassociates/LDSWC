import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';

export default class FormElementLabel extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * id of the input field
			 */
			id: { type: String },
			/**
			 * sets the label to render as assistive text
			 */
			hideLabel: { type: Boolean },
			/**
			 * label content
			 */
			label: { type: String }, // node
			/**
			 * Renders as a html5 legend
			 */
			legend: { type: Boolean },
			/**
			 * renders the label as a span-tag instead of a label-tag
			 */
			readOnly: { type: Boolean },
			/**
			 * adds required attribute to input and label
			 */
			required: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.hideLabel = false;
		this.legend = false;
		this.readOnly = false;
		this.required = false;
		this.label = '';
	}

	createRenderRoot() {
		return this;
	}

	renderTitle(title) {
		if (title.indexOf('<div')!=-1 || title.indexOf('<span')!=-1) {
			return eval('html`'+title+'`');
		} else {
			return html`${title}`;
		}
	}

	render() {
		const renderRequired = () => {
			if (this.required) {
				return html`<abbr class="slds-required" title="required">*</abbr>`;
			}
			return '';
		};

		const sldsClasses = [
			'slds-form-element__label',
			{ 'slds-form-element__legend': !!this.legend },
			{ 'slds-assistive-text': this.hideLabel },
			this.className
		];
		if (this.readOnly) {
			return html`<span class=${joinClassNames(sldsClasses)} htmlFor=${this.readOnly || this.legend ? null : this.id}>
				${renderRequired()}
				${this.renderTitle(this.label)}
				</span>`;
		} else if (this.legend) {
			return html`<legend class=${joinClassNames(sldsClasses)} htmlFor=${this.readOnly || this.legend ? null : this.id}>
				${renderRequired()}
				${this.renderTitle(this.label)}
				</legend>`;
		} else {
			return html`<label class=${joinClassNames(sldsClasses)} htmlFor=${this.readOnly || this.legend ? null : this.id}>
				${renderRequired()}
				${this.renderTitle(this.label)}
				</label>`;
		}
	}
}

customElements.define('ldswc-formelementlabel', FormElementLabel);