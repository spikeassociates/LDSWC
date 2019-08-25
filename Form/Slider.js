import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';

export default class Slider extends LitElement {
	static get properties() {
		return {
			/**
			 * id of the parent component carrying the error
			 */
			id: { type: String },
			/**
			 * current value of the slider
			 */
			value: { type: Number, reflect: true },
			/**
			 * minimum value
			 */
			min: { type: Number },
			/**
			 * maximum value
			 */
			max: { type: Number },
			/**
			 * step value
			 */
			step: { type: Number },
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * adds disabled attribute to the slider
			 */
			disabled: { type: Boolean },
			/**
			 * render slider vertically
			 */
			vertical: { type: Boolean },
			/**
			 * renders an error for the slider
			 */
			error: { type: String },
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
			 * slider sizes: x-small, small, medium, large
			 */
			size: { type: String },
		};
	}

	constructor() {
		super();
		this.label = undefined;
		this.min = 0;
		this.max = 100;
		this.step = undefined;
		this.size = undefined;
		this.vertical = false;
		this.className = null;
		this.disabled = false;
		this.error = undefined;
		this.hideErrorMessage = false;
		this.hideLabel = false;
		this.whenChange = undefined;
	}

	createRenderRoot() {
		return this;
	}

	updatevalue(e) {
		this.value=e.target.value;
	}

	firstUpdated() {
		super.firstUpdated();
		this.querySelectorAll('input')[0].addEventListener('change', this.updatevalue.bind(this), true);
	}

	renderLabel(label, min, max) {
		return '<span class="slds-slider-label">'
			+'<span class="slds-slider-label__label">'+(label ? label : '')+'</span>'
			+'<span class="slds-slider-label__range">'+min+' - '+max+'</span>'
			+'</span>';
	}

	renderControl(whenChange, id, value, min, max, step, size, disabled, vertical) {
		const baseClass = 'slds-slider';
		const sldsClasses = [
			baseClass,
			{ [`${baseClass}_vertical`]: vertical },
			{ [`slds-size_${size}`]: !!size && !vertical },
		];
		return html`<div class=${joinClassNames(sldsClasses)}>
			<input
				class="slds-slider__range"
				type="range"
				id=${id}
				value=${value}
				min=${min}
				max=${max}
				step=${step}
				?disabled=${disabled}
				onchange=${ifDefined(whenChange)}
			/>
			<span class="slds-slider__value" aria-hidden="true">${value}</span>
			</div>`;
	}

	render() {
		return html`
<ldswc-formelement error=${this.error} className=${this.className}>
	<ldswc-formelementlabel label=${this.renderLabel(this.label, this.min, this.max)} id=${this.id} ?hideLabel=${this.hideLabel} ></ldswc-formelementlabel>
	<ldswc-formelementcontrol>
		${this.renderControl(this.whenChange, this.id, this.value, this.min, this.max, this.step, this.size, this.disabled, this.vertical)}
	</ldswc-formelementcontrol>
	${!this.hideErrorMessage && this.error && html`<ldswc-formelementerror error=${this.error} id=${this.id} ></ldswc-formelementerror>`}
</ldswc-formelement>`;
	}
}

customElements.define('ldswc-slider', Slider);