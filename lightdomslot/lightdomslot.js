import { html } from '../libs/lit-element/lit-element.js';
import LDSWCElement from '../libs/ldswcelement/ldswcelement.js';

export default class lightDOMSlot extends LDSWCElement {

	static get properties() {
		return {
			/**
			 * unnamed, named, inverse, flat
			 */
			structure: { type: String },
		};
	}

	constructor() {
		super();
		this.structure = 'unnamed';
	}

	render() {
		switch (this.structure) {
		case 'named':
			return html`
				<div>
					<slot name="before">DIV Before</slot>
					<div>Main Content - will show up before children</div>
					<slot></slot>
					<slot name="after">DIV After</slot>
				</div>`;
		case 'inverse':
			return html`
				<div>
					<slot name="after">DIV After</slot>
					<div>Main Content - will show up before children</div>
					<slot></slot>
					<slot name="before">DIV Before</slot>
				</div>`;
		case 'flat':
			return html`
				<slot name="before">DIV Before</slot>
				<div>Main Content - will show up before children</div>
				<slot></slot>
				<slot name="after">DIV After</slot>`;
		case 'unnamed':
		default:
			return html`
				<div>
					<p name="before">DIV Before</p>
					<div>Main Content - will show up before children</div>
					<slot></slot>
					<p name="after">DIV After</p>
				</div>`;
		}
	}
}

customElements.define('lightdom-slot', lightDOMSlot);