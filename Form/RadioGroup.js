import { LitElement, html } from '../libs/lit-element/lit-element.js';
import { ifDefined } from '../libs/lit-html/directives/if-defined.js';

export default class RadioGroup extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * renders an error for the slider
			 */
			error: { type: String },
			/**
			 * hides the error message
			 */
			hideErrorMessage: { type: Boolean },
			/**
			 * id of the parent component carrying the error
			 */
			id: { type: String },
			/**
			 * radio group name
			 */
			name: { type: String },
			/**
			 * label for the select
			 */
			label: { type: String },
			/**
			 * onChange handler for the textarea
			 */
			whenChange: { type: String },
			/**
			 * adds required attribute to the textarea
			 */
			required: { type: Boolean },
			/**
			 * array of radio button(s)
			 */
			children: { type: Array },
		};
	}

	constructor() {
		super();
		this.className = undefined;
		this.error = undefined;
		this.hideErrorMessage = false;
		this.required = false;
		this.whenChange = undefined;
		this.name = '';
	}

	createRenderRoot() {
		return this;
	}

	renderButtons() {
		return this.children.map(child => {
			return html`<ldswc-radioraw
				id=${ifDefined(child.id)}
				name=${this.name}
				?disabled=${child.disabled}
				label=${ifDefined(child.label)}
				error=${ifDefined(child.error)}
				className=${ifDefined(child.className)}
				whenChange=${ifDefined(this.whenChange)}
				?checked=${child.checked}
			></ldswc-radio>`;
		});
	}

	render() {
		// const wrapChildrenWithError = () => {
		// 	if (!error || hideErrorMessage) {
		// 		return children;
		// 	}
		// 	return React.Children.map(children, child => (
		// 		React.cloneElement(child, { 'aria-describedby': getUniqueHash(error, id) })
		// 	));
		// };
		return html`
			<ldswc-formelement
				className=${ifDefined(this.className)}
				error=${ifDefined(this.error)}
				fieldset
				id=${this.id}
				onChange=${ifDefined(this.whenChange)}
				?required=${this.required}
			>
				<ldswc-formelementlabel label=${ifDefined(this.label)} id=${this.id} ?required=${this.required} legend ></ldswc-formelementlabel>
				<ldswc-formelementcontrol>${this.renderButtons()}</ldswc-formelementcontrol>
				${!this.hideErrorMessage && this.error && html`<ldswc-formelementerror error=${this.error} id=${this.id} ></ldswc-formelementerror>`}
			</ldswc-formelement>`;
	}
}

customElements.define('ldswc-radiogroup', RadioGroup);