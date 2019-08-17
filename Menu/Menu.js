import ControlledMenu from './ControlledMenu.js';
import ClickOutside from '../ClickOutside/ClickOutside.js';
import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {getRestOfAttribs} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';
import { addProps } from '../libs/ldswcutils/addprops.js';

export default class Menu extends LitElement {
	static get properties() {
		return {
			/**
			 * The button that triggers the dropdown menu
			 */
			button: {type: String}, // isRequired,
			/**
			 * indicates if the menu closes automatically on an outside click
			 */
			closeOnClickOutside: {type: Boolean},
			/**
			 * menu should start open
			 */
			open: {type: Boolean},
			/**
			 * Called when menu is opened/closed
			 */
			onToggle: {type: String}, // function,
		};
	}

	constructor() {
		super();
		this.closeOnClickOutside = false;
		this.open = false;
		this.onToggle = null;
	}

	createRenderRoot() {
		return this;
	}

	onClickOutside() {
		this.open = false;
	}

	toggle() {
		if (this.onToggle) {
			this.onToggle(!this.open);
		}
		this.open = !this.open;
	}

	render() {
		let btnelem = window.ldswcproperties.Menu[this.button]['button'];
		let firstSpace = btnelem.indexOf(' ');
		btnelem = btnelem.substr(0, firstSpace)+' @click="${this.handleButtonClick}" '+btnelem.substr(firstSpace+1);
		window.ldswcproperties.Menu[this.button]['button']=btnelem;
		const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
		return html`
<ldswc-clickoutside onClickOutside=${this.onClickOutside}>
	<ldswc-controlledmenu
		button=${this.button}
		@menuButtonClicked=${this.toggle}
		?isOpen=${this.open}
		addProps=${addProps(otherattrs)}
	></ldswc-controlledmenu>
</ldswc-clickoutside>`;
	}
}

customElements.define('ldswc-menu', Menu);
