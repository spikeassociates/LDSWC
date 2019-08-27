import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import { joinClassNames } from '../../libs/ldswcutils/ldswcutils.js';

export default class ButtonGroup extends LitElement {
	static get properties() {
		return {
			/**
			 * Optional additional classNames
			 */
			className: { type: String },
			/**
			 * Renders the button group as a list
			 */
			list: { type: Boolean },
			/**
			 * Renders the button group as a row of separate buttons
			 */
			row: { type: Boolean },
			/**
			 * Renders the buttons as icons
			 */
			icons: { type: Boolean },
			/**
			 * Renders an overflow icon button
			 */
			overflow: { type: Boolean },
			/**
			 * array of button(s)
			 */
			children: { type: Array },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.list = false;
		this.row = false;
		this.icons = false;
		this.overflow = false;
		////
		this.inverse = false; // internal property
	}

	createRenderRoot() {
		return this;
	}

	renderOverflow() {
		if (this.overflow) {
			const cls = this.inverse ? 'slds-button_icon-border-inverse' : 'slds-button_icon-border-filled';
			return html`<div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last">
				<ldswc-iconbutton title="Show More" sprite="utility" icon="down" className="${cls}"></ldswc-iconbutton></div>`;
		}
		return null;
	}

	renderList() {
		return this.children.map(child => {
			let btn = '<li class="slds-button-group-item">';
			btn += '<ldswc-button' +
' id=' + child.id +
(child.flavor ? ' flavor="'+child.flavor + '"' : '') +
(child.className ? ' className="'+child.className + '"' : '') +
(child.figureClass ? ' figureClass="'+child.figureClass + '"' : '') +
(child.icon ? ' icon="'+child.icon + '"' : '') +
(child.iconPosition ? ' iconPosition="'+child.iconPosition + '"' : '') +
(child.iconSize ? ' iconSize="'+child.iconSize + '"' : '') +
(child.sprite ? ' sprite="'+child.sprite + '"' : '') +
(child.href ? ' href="'+child.href + '"': '') +
' title='+child.title +
' ></ldswc-button>';
			btn += '</li>';
			this.inverse = this.inverse || (child.flavor=='inverse');
			return eval('html`'+btn+'`');
		});
	}

	renderButtons() {
		var btnel = 'ldswc-button';
		if (this.icons) {
			btnel = 'ldswc-iconbutton';
		}
		return this.children.map(child => {
			this.inverse = this.inverse || (child.flavor=='inverse');
			let btn = '';
			if (this.row) {
				btn = '<span class="slds-button-group-item">';
			}
			btn += '<'+btnel+
' id=' + child.id +
(child.flavor ? ' flavor="'+child.flavor + '"' : '') +
(child.className ? ' className="'+child.className + (this.icons ? (this.inverse ? ' slds-button_icon-border-inverse"' : ' slds-button_icon-border-filled"') : '"') : (this.icons ? (this.inverse ? ' className="slds-button_icon-border-inverse"' : ' className="slds-button_icon-border-filled"') : '')) +
(child.figureClass ? ' figureClass="'+child.figureClass + '"' : '') +
(child.icon ? ' icon="'+child.icon + '"' : '') +
(child.iconPosition ? ' iconPosition="'+child.iconPosition + '"' : '') +
(child.iconSize ? ' iconSize="'+child.iconSize + '"' : '') +
(child.sprite ? ' sprite="'+child.sprite + '"' : '') +
(child.href ? ' href="'+child.href + '"': '') +
(child.more ? ' more' : '') +
' title="'+child.title +'" ></'+btnel+'>';
			if (this.row) {
				btn += '</span>';
			}
			return eval('html`'+btn+'`');
		});
	}

	render() {
		const sldsClasses = [
			'slds-button-group',
			{ 'slds-button-group-list': this.list },
			{ 'slds-button-group-row': this.row },
			this.className
		];

		return this.list ?
			html`<ul class=${joinClassNames(sldsClasses)}>
${this.renderList()}${this.renderOverflow()}
</ul>` :
			html`<div class=${joinClassNames(sldsClasses)} role="group">
${this.renderButtons()}${this.renderOverflow()}
</div>`;
	}
}

customElements.define('ldswc-buttongroup', ButtonGroup);
