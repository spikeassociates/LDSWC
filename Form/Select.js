import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import getUniqueHash from '../libs/ldswcutils/hashFromString.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';

export default class Select extends LitElement {
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
			 * onChange handler for the select
			 */
			whenChange: { type: String },
			/**
			 * adds the multiple attribute to the select
			 */
			multiple: { type: Boolean },
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
		this.multiple = false;
	}

	createRenderRoot() {
		return this; // lightDOM
	}

	firstUpdate() {
		this.observer.disconnect();
	}

	connectedCallback() {
		super.connectedCallback();
		this.observer = new MutationObserver((mutations) => {
			this.observer.disconnect();
			var sel = this.querySelector('select');
			mutations.forEach((mutation) => {
				mutation.removedNodes.forEach((node) => {
					if (node.nodeName == 'OPTION' ) {
						sel.add(node);
					}
				});
			});
		});
		this.observer.observe(this, {
			childList: true,
		});
	}

	renderControl() {
		const sldsClasses = [
			'slds-select',
			this.className,
		];
		const select = html`<select
			id=${ifDefined(this.id)}
			class=${joinClassNames(sldsClasses)}
			onChange=${ifDefined(this.whenChange)}
			?multiple=${this.multiple}
			?disabled=${this.disabled}
			?required=${this.required}
			aria-describedby=${ifDefined(this.error && !this.hideErrorMessage ? getUniqueHash(this.error, this.id) : undefined)}
		></select>`;
		if (this.multiple) {
			return select;
		}
		return html`<div class="slds-select_container">${select}</div>`;
	}

	render() {
		return html`
<ldswc-formelement ?required=${this.required} error=${ifDefined(this.error)}>
	<ldswc-formelementlabel label=${ifDefined(this.label)} id=${ifDefined(this.id)} ?required=${this.required} ?hideLabel=${this.hideLabel} ?readOnly=${this.readOnly} ></ldswc-formelementlabel>
	<ldswc-formelementcontrol>
		${this.renderControl()}
	</ldswc-formelementcontrol>
	${!this.hideErrorMessage && this.error && html`<ldswc-formelementerror error=${this.error} id=${this.id} ></ldswc-formelementerror>`}
</ldswc-formelement>`;
	}
}

customElements.define('ldswc-select', Select);
