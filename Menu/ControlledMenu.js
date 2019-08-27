import { ifDefined } from '../libs/lit-html/directives/if-defined.js';
import getUniqueHash from '../libs/ldswcutils/hashFromString.js';
import MenuItem from './MenuItem.js';
import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames, ldsIsTruthy} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class ControlledMenu extends LitElement {
	static get properties() {
		return {
			/**
			 * The button that triggers the dropdown menu
			 */
			button: {type: String}, // isRequired
			/**
			 * should be MenuItems or MenuSubHeaders
			 */
			children: {type: Array}, // isRequired,
			/**
			 * class name
			 */
			className: {type: String},
			/**
			 * sets the number of items being displayed. 5, 7, or 10
			 */
			height: {type: String},
			/**
			 * use this instead of height if an leftIcon is on every item. 5, 7, or 10
			 */
			heightIcon: {type: String},
			/**
			 * open or closed menu dropdown
			 */
			isOpen: {type: Boolean},
			/**
			 * indicates that this is the last element inside a button group and renders
			 * the required css class
			 */
			last: {type: Boolean},
			/**
			 * displays the nubbin at the correct position if true, hidden per default
			 */
			nubbin: {type: Boolean},
			/**
			 * use onSelect instead of onClick on the MenuItems if you want reduce the number of event listeners
			 */
			onSelect: {type: String}, // function
			/**
			 * position relative to the menu button
				'top-left',
				'top-left-corner',
				'top',
				'top-right',
				'top-right-corner',
				'bottom-left',
				'bottom-left-corner',
				'bottom',
				'bottom-right',
				'bottom-right-corner',
			 */
			position: {type: String},
			/**
			 * render the dropdown even when it is closed
			 */
			renderClosedDropdown: {type: Boolean},
			/**
			 * Can be used to prepend an arbitrary menu header
			 */
			renderHeader: {
				converter: (value, type) => {
					// `value` is a string
					// Convert it to a value of type `type` and return it
					if (window.ldswcproperties.Menu[value] && typeof window.ldswcproperties.Menu[value]['renderHeader'] === 'function') {
						return window.ldswcproperties.Menu[value]['renderHeader'];
					} else {
						return null;
					}
				}
			}, // function
			/**
			 * length of the menu box. 'small', 'medium', or 'large'
			 */
			size: {type: String},
			/**
			 * if we toggle menu on button hover
			 */
			toggleOnHover: {type: Boolean},
			/**
			 * Called when menu is opened/closed
			 */
			onToggle: {
				converter: (value, type) => {
					// `value` is a string
					// Convert it to a value of type `type` and return it
					if (window.ldswcproperties.Menu[value] && typeof window.ldswcproperties.Menu[value]['onToggle'] === 'function') {
						return window.ldswcproperties.Menu[value]['onToggle'];
					} else {
						return null;
					}
				}
			}, // function,
		};
	}

	constructor() {
		super();
		this.className = null;
		this.height = null;
		this.heightIcon = null;
		this.isOpen = false;
		this.last = false;
		this.nubbin = false;
		this.onSelect = null;
		this.position = 'top-left';
		this.renderHeader = null;
		this.renderClosedDropdown = false;
		this.size ='small';
		this.toggleOnHover=false;
		this.onToggle = null;
		this.menuid = getUniqueHash('inttglmnuf', Math.floor((Math.random() * 100) + 1));
	}

	createRenderRoot() {
		return this;
	}

	firstUpdated() {
		super.firstUpdated();
		if (document.getElementById(this.menuid)) {
			document.getElementById(this.menuid).addEventListener('click', this.toggle.bind(this), false);
		}
		if (this.toggleOnHover) {
			document.getElementById(this.menuid).parentNode.addEventListener('mouseenter', this.openMenu.bind(this), false);
			document.getElementById(this.menuid).parentNode.addEventListener('mouseleave', this.closeMenu.bind(this), false);
		}
	}

	disconnectedCallback() {
		if (document.getElementById(this.menuid)) {
			document.getElementById(this.menuid).addEventListener('click', this.toggle, false);
		}
		if (this.toggleOnHover) {
			document.getElementById(this.menuid).parentNode.removeEventListener('mouseenter', this.openMenu, false);
			document.getElementById(this.menuid).parentNode.removeEventListener('mouseleave', this.closeMenu, false);
		}
		super.disconnectedCallback();
	}

	openMenu() {
		this.isOpen = true;
		if (this.onToggle) {
			this.onToggle(this.isOpen);
		}
	}

	closeMenu() {
		this.isOpen = false;
		if (this.onToggle) {
			this.onToggle(this.isOpen);
		}
	}

	toggle() {
		if (this.onToggle) {
			this.onToggle(!this.isOpen);
		}
		this.isOpen = !this.isOpen;
	}

	handleItemClick(event) {
		const { onSelect } = this.props;
		const { value } = event.target.dataset;
		if (value) {
			onSelect(value, event);
			event.stopPropagation(); // stopPropagation so we can have nested menus
		}
	}

	handleButtonClick(e) {
		let event = new CustomEvent('menuButtonClicked', {});
		this.dispatchEvent(event);
	}

	renderChildren() {
		return this.children.map((child, index) => {
			if (child.menutype=='item') {
				const id = getUniqueHash('item', index);
				return html`<ldswc-menuitem
					id=${id}
					title=${child.title}
					href=${child.href ? child.href : 'javascript:void(0);'}
					className=${ifDefined(child.className ? child.className : undefined)}
					?divider=${child.divider}
					flavor = ${ifDefined(child.flavor ? child.flavor : undefined)}
					datavalue = ${ifDefined(child.datavalue ? child.datavalue : undefined)}
					leftIconicon = ${ifDefined(child.leftIconicon ? child.leftIconicon : undefined)}
					leftIconsprite = ${child.leftIconsprite ? child.leftIconsprite : 'utility'}
					leftIconflavor = ${ifDefined(child.leftIconflavor ? child.leftIconflavor : undefined)}
					leftIconalwaysDisplay = ${ifDefined(child.leftIconalwaysDisplay ? child.leftIconalwaysDisplay : undefined)}
					rightIconicon = ${ifDefined(child.rightIconicon ? child.rightIconicon : undefined)}
					rightIconsprite = ${child.rightIconsprite ? child.rightIconsprite : 'utility'}
					rightIconflavor = ${ifDefined(child.rightIconflavor ? child.rightIconflavor : undefined)}
					?selected=${ldsIsTruthy(child.checkbox) ? ldsIsTruthy(child.selected) : false}
					onSelected = ${ifDefined(child.onSelected ? child.onSelected : undefined)}
				></ldswc-menuitem>`;
			} else {
				return html`<ldswc-menusubheader
					title=${child.title}
					className=${ifDefined(child.className ? child.className : undefined)}
					?divider=${child.divider}
				></ldswc-menusubheader>`;
			}
		});
	}

	render() {
		const wrapperClasses = [
			'slds-dropdown-trigger',
			'slds-dropdown-trigger_click',
			{ 'slds-button_last': this.last },
			{ 'slds-is-open': this.isOpen },
		];
		const dropdownClasses = [
			'slds-dropdown',
			{ [`slds-dropdown_${this.size}`]: this.size },
			{ 'slds-dropdown_left': this.position.includes('left') },
			{ 'slds-dropdown_right': this.position.includes('right') },
			{ 'slds-dropdown_bottom': this.position.startsWith('bottom') },
			{ 'slds-m-bottom_none': this.toggleOnHover },
			{ 'slds-m-top_none': this.toggleOnHover },
			{ [`slds-nubbin_${this.position}`]: this.nubbin },
			this.className,
		];
		const listClasses = [
			{ [`slds-dropdown_length-${this.height}`]: this.height },
			{ [`slds-dropdown_length-with-icon-${this.heightIcon}`]: this.heightIcon },
			'slds-dropdown__list',
		];
		var btnelem = '';
		if (window.ldswcproperties.Menu[this.button] != undefined && window.ldswcproperties.Menu[this.button]['button'] != undefined) {
			btnelem = '<span id="'+this.menuid+'">'+window.ldswcproperties.Menu[this.button]['button']+'</span>';
		}
		return html`
<div class=${joinClassNames(wrapperClasses)}>
${eval('html`'+btnelem+'`')}
${(this.isOpen || this.renderClosedDropdown) ? html`
	<div class=${joinClassNames(dropdownClasses)}>
	${this.renderHeader && this.renderHeader()}
	${this.children && html`
		<ul
		class=${joinClassNames(listClasses)}
		role="menu"
		onClick=${this.onSelect ? this.handleItemClick : null}
		>
		${this.renderChildren()}
		</ul>`}
	</div>` : null}
</div>`;
	}
}

customElements.define('ldswc-controlledmenu', ControlledMenu);
