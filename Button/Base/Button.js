import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import {joinClassNames} from '../../libs/ldswcutils/ldswcutils.js';
import ButtonIcon from './ButtonIcon.js';

export default class Button extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * class names for icon
			 */
			figureClass: { type: String },
			/**
			 * icon name
			 */
			icon: { type: String }, // isRequired
			/**
			 * icon sprite name
			 */
			sprite: { type: String }, // isRequired
			/**
			 * Title attribute. Will be button content if no children are set
			 */
			title: { type: String },
			/**
			 * subelements of button
			 */
			children: { type: String },
			/**
			 *  Shortcut to render a button with an icon. Can be "left" or "right". Used together with `icon`
			 */
			iconPosition: { type: String },
			/**
			 *  icon size
			 */
			iconSize: { type: String },
			/**
			 * Can be either `neutral`, `brand`, `outline-brand`, `destructive`, `text-destructive`, `success` or `inverse`
			 * Default to `neutral`, set to "none" or `null` explicitely to render a plain button
			 */
			flavor: { type: String },
			/**
			 * Optional href, renders as `a` when set
			 */
			href: { type: String },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.figureClass = null;
		this.icon = null;
		this.iconPosition = null;
		this.iconSize = 'small';
		this.sprite = 'standard';
		this.title = null;
		this.children = null;
		this.flavor = 'neutral';
		this.href = null;
	}

	createRenderRoot() {
		return this;
	}

	get displayName() {
		return 'Button';
	}

	innerButtonIcon(position) {
		return html`<ldswc-buttonicon position=${position} icon=${this.icon} sprite=${this.sprite} className=${this.figureClass} size=${this.iconSize}></ldswc-buttonicon>`;
	}

	getRightShortcut(isRightShortcut, isShortcut, position) {
		let title = this.children || this.title;
		title = eval('html`'+title+'`');
		if (isRightShortcut) {
			return html`${title}${isShortcut ? this.innerButtonIcon(position) : ''}`;
		} else {
			return html`${isShortcut ? this.innerButtonIcon(position) : ''}${title}`;
		}
	}

	render() {
		const hasFlavor = this.flavor != null && this.flavor !== 'none';
		const sldsClasses = [
			'slds-button',
			{ [`slds-button_${this.flavor}`]: hasFlavor },
			this.className
		];
		const position = this.iconPosition || 'left';
		const isShortcut = !!this.icon && !!this.sprite;
		const isRightShortcut = isShortcut && position !== 'left';

		return html`
${this.href ?
	html`<a class=${joinClassNames(sldsClasses)} href=${this.href} title=${this.title}>${this.getRightShortcut(isRightShortcut, isShortcut, position)}</a>`:
	html`<button class=${joinClassNames(sldsClasses)} title=${this.title}>${this.getRightShortcut(isRightShortcut, isShortcut, position)}</button>`
}`;
	}
}

customElements.define('ldswc-button', Button);
