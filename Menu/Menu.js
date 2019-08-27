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
			onToggle: {type: String},
			/**
			 * if we toggle menu on button hover
			 */
			toggleOnHover: {type: Boolean},
		};
	}

	constructor() {
		super();
		this.closeOnClickOutside = false;
		this.open = false;
		this.onToggle = '';
		this.toggleOnHover = false;
	}

	createRenderRoot() {
		return this;
	}

	onClickOutside() {
		if (this.closeOnClickOutside) {
			this.open = false;
		}
	}

	render() {
		if (window.ldswcproperties.ClickOutside==undefined) {
			window.ldswcproperties.ClickOutside = {};
		}
		window.ldswcproperties.ClickOutside[this.menuid] = {};
		window.ldswcproperties.ClickOutside[this.menuid]['onclickoutside'] = this.onClickOutside.bind(this);
		const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
		return html`
<ldswc-clickoutside onclickoutside=${this.menuid}>
	<ldswc-controlledmenu
		button=${this.button}
		@menuButtonClicked=${this.toggle}
		?isOpen=${this.open}
		addProps=${addProps(otherattrs)}
		onToggle=${this.onToggle}
		?toggleOnHover=${this.toggleOnHover}
	></ldswc-controlledmenu>
</ldswc-clickoutside>`;
	}
}

customElements.define('ldswc-menu', Menu);
