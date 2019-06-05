import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import {joinClassNames} from '../../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../../ldswcconfig.js';
import ButtonIcon from './ButtonIcon.js';

export default class Button extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
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
			 *  Shortcut to render a button with an icon. Can be "left" or "right". Used together with `icon`
			 */
			iconPosition: { type: String },
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
		this.icon = null;
		this.iconPosition = null;
		this.sprite = 'standard';
		this.title = null;
		this.flavor = 'neutral';
		this.href = null;
	}

	get displayName() {
		return 'Button';
	}

	get innerButtonIcon() {
		return html`<ldswc-buttonicon position=${this.position} icon=${this.icon} sprite=${this.sprite}></ldswc-buttonicon></ldswc-buttonicon>`;
	}

	getRightShortcut(isRightShortcut, isShortcut) {
		if (isRightShortcut) {
			return html`<slot>${this.title}</slot>${isShortcut ? this.innerButtonIcon : ''}`;
		} else {
			return html`${isShortcut ? this.innerButtonIcon : ''}<slot>${this.title}</slot>`;
		}
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);
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
<link rel="stylesheet" href="${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css">
${this.href ?
	html`<a class=${joinClassNames(sldsClasses)} href=${this.href} title=${this.title}>${this.getRightShortcut(isRightShortcut, isShortcut)}</a>`:
	html`<button class=${joinClassNames(sldsClasses)} href=${this.href} title=${this.title}>${this.getRightShortcut(isRightShortcut, isShortcut)}</button>`
}
`;
	}
}

customElements.define('ldswc-button', Button);
