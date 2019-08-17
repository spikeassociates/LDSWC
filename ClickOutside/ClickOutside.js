import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {ldswcconfig} from '../ldswcconfig.js';
import {elementIsInside} from '../libs/ldswcutils/ldswcutils.js';

export default class ClickOutside extends LitElement {
	static get properties() {
		return {
			/**
			 * Handle ESC key press as click outside
			 */
			handleesc: {type: Boolean},
			/**
			 * Handler which is being triggered when a click event outside of the
			 * children prop is fired
			 */
			onclickoutside: {
				converter: (value, type) => {
					// `value` is a string
					// Convert it to a value of type `type` and return it
					if (window.ldswcproperties.ClickOutside[value] && typeof window.ldswcproperties.ClickOutside[value]['onclickoutside'] === 'function') {
						return window.ldswcproperties.ClickOutside[value]['onclickoutside'];
					} else {
						return null;
					}
				}
			}, // function
			/**
			 * Will be passed to window.addEventListener,
			 * See: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
			 */
			usecapture: {type: Boolean},
		};
	}

	constructor() {
		super();
		this.usecapture = false;
		this.handleesc = false;
		this.onclickoutside = null;
	}

	connectedCallback() {
		super.connectedCallback();
		if (this.onclickoutside) {
			this.registerEventListener();
		}
	}

	disconnectedCallback() {
		this.unregisterEventListener();
		super.disconnectedCallback();
	}

	handle(e) {
		if (this.onclickoutside && !elementIsInside(this, e)) {
			this.onclickoutside(e);
		}
	}

	handleKeyUp(e) {
		if (this.onclickoutside && this.handleesc && e.key === 'Escape') {
			this.onclickoutside(e);
			e.stopPropagation();
		}
	}

	registerEventListener() {
		document.addEventListener('click', this.handle.bind(this), this.usecapture);
		if (this.handleesc) {
			document.addEventListener('keyup', this.handleKeyUp.bind(this), this.usecapture);
		}
	}

	unregisterEventListener() {
		document.removeEventListener('click', this.handle, this.usecapture);
		if (this.handleesc) {
			document.removeEventListener('keyup', this.handleKeyUp, this.usecapture);
		}
	}

	render() {
		return html`
<div>
	<slot></slot>
</div>`;
	}
}

customElements.define('ldswc-clickoutside', ClickOutside);
