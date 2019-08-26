import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {getRestOfAttribs} from '../libs/ldswcutils/ldswcutils.js';
import { addProps } from '../libs/ldswcutils/addprops.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';

export default class Radio extends LitElement {
	static get properties() {
		return {
			/**
			 * renders an error for the radio
			 */
			error: { type: String },
			/**
			 * hides the error message
			 */
			hideErrorMessage: { type: Boolean },
			/**
			 * id of the radio field
			 */
			id: { type: String },
			/**
			 * sets the label to render as assistive text
			 */
			hideLabel: { type: Boolean },
			/**
			 * adds required attribute to the radio
			 */
			required: { type: Boolean },
		};
	}

	constructor() {
		super();
		this.error = undefined;
		this.hideLabel = false;
		this.hideErrorMessage = false;
		this.required = false;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
		return html`
			<ldswc-formelement ?required=${this.required} error=${ifDefined(this.error)}>
				<ldswc-formelementcontrol>
					<ldswc-radioraw
						id=${this.id}
						error=${ifDefined(this.error)}
						?hideErrorMessage=${this.hideErrorMessage}
						?hideLabel=${this.hideLabel}
						?required=${this.required}
						addProps=${addProps(otherattrs)}
					></ldswc-radioraw>
				</ldswc-formelementcontrol>
				${!this.hideErrorMessage && this.error && html`<ldswc-formelementerror error=${this.error} id=${this.id} ></ldswc-formelementerror>`}
			</ldswc-formelement>`;
	}
}

customElements.define('ldswc-radio', Radio);