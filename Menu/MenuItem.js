import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames, ldsIsTruthy, ldsIsEmpty} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';
import IconSVG from '../Icon/IconSVG.js';

const nonCapturing = { pointerEvents: 'none' };

const leftIconElem = (icon, sprite, flavor, alwaysDisplay) => {
	const iconClasses = [
		{ 'slds-icon_selected': !alwaysDisplay },
		{ 'slds-icon-text-default': (flavor == 'inverse' ? false : !alwaysDisplay) },
		{ 'slds-m-right_x-small': !alwaysDisplay },
		{ 'slds-m-right_small': alwaysDisplay },
		{ 'slds-icon': alwaysDisplay },
	];
	return html`<ldswc-iconsvg
		className=${joinClassNames(iconClasses)}
		icon=${icon}
		size=${alwaysDisplay ? 'small' : 'x-small'}
		sprite=${sprite}
	></ldswc-iconsvg>`;
};

const rightIconElem = (icon, sprite, flavor) => {
	const iconClasses = [
		'slds-icon-selected',
		{'slds-icon-text-default': (flavor != 'inverse')},
		'slds-m-left_small',
		'slds-shrink-none',
	];
	return html`<ldswc-iconsvg
		className=${joinClassNames(iconClasses)}
		icon=${icon}
		size="x-small"
		sprite=${sprite}
		style=${nonCapturing}
	></ldswc-iconsvg>`;
};

export default class MenuItem extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * flavor: success, warning, destructive
			 */
			flavor: { type: String },
			/**
			 * datavalue is required when using onSelect on parent
			 */
			datavalue: { type: String },
			/**
			 * set to true if a divider should appear above this list item
			 */
			divider: { type: Boolean},
			/**
			 * left icon that is only shown when selected is true
			 */
			leftIconicon: { type: String },
			leftIconsprite: { type: String },
			leftIconflavor: { type: String },
			leftIconalwaysDisplay: { type: Boolean},
			/**
			 * right icon that is always shown
			 */
			rightIconicon: {type: String},
			rightIconsprite: {type: String},
			rightIconflavor: {type: String},
			/**
			 * sets this item into a selection state that displays the leftIcon
			 */
			selected: { type: Boolean},
			/**
			 * id should be set by parent element
			 */
			id: { type: String },
			/**
			 * Menu label
			 */
			title: { type: String },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.flavor = null;
		this.datavalue = null;
		this.divider = false;
		this.leftIconicon = null;
		this.leftIconsprite = 'utility';
		this.leftIconflavor = null;
		this.leftIconalwaysDisplay = null;
		this.rightIconicon = null;
		this.rightIconsprite = 'utility';
		this.rightIconflavor = null;
		this.selected = false;
		this.title = null;
		this.id = null;
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const sldsClasses = [
			'slds-dropdown__item',
			{ 'slds-has-divider_top-space': this.divider },
			{ 'slds-is-selected': this.selected },
			this.className
		];
		const assistiveTitle = this.title;
		// if selected true or false, it's a menuitemcheckbox, else it's a menuitem
		const role = (ldsIsEmpty(this.selected)) ? 'menuitem' : 'menuitemcheckbox';
		const flavor = (this.flavor ? 'slds-has-'+this.flavor : '');

		return html`
<li
	class=${joinClassNames(sldsClasses)}
	role="presentation"
>
	<a
		class=${flavor}
		aria-checked=${this.selected}
		data-value=${this.datavalue}
		role=${role}
	>
		<span
			class="slds-truncate"
			style=${nonCapturing}
			title=${assistiveTitle}
		>
			${ldsIsTruthy(this.leftIconicon) ? leftIconElem(this.leftIconicon, this.leftIconsprite, this.leftIconflavor, this.leftIconalwaysDisplay) : null}
			${this.title}
		</span>
		${ldsIsTruthy(this.rightIconicon) ? rightIconElem(this.rightIconicon, this.rightIconsprite, this.rightIconflavor) : null}
	</a>
</li>`;
	}
}

customElements.define('ldswc-menuitem', MenuItem);
