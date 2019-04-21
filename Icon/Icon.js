import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {iconClass, joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import IconSVG from './IconSVG.js';

export default class Icon extends LitElement {
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
			 * Path to the corresponding sprite.
			 */
			assetPath: { type: String },
			/**
			 * ClassName that will be handed over to the <svg />
			 */
			svgClassName: { type: String },
			/**
			 * icon size
			 */
			size: { type: String }, // oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
			/**
			 * icon sprite name
			 */
			sprite: { type: String }, // isRequired oneOf(['action', 'custom', 'doctype', 'standard', 'utility'])
			/**
			 * Set this if you want to override the default background class. set to "false" to not set a background
			 */
			background: { type: String },
			/** <div>-container instead of a <span>-container */
			div: { type: Boolean },
			/** Descriptive Title */
			title: { type: String },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.svgClassName = '';
		this.icon = '';
		this.assetPath = '';
		this.size = 'small';
		this.sprite = 'standard';
		this.background = 'false';
		this.div = false;
		this.title = null;
	}

	get iconSVGTemplate() {
		return html`<ldswc-iconsvg assetPath=${this.assetPath} className=${this.svgClassName} icon=${this.icon} size=${this.size} sprite=${this.sprite} />`;
	}

	get iconTemplate() {
		return html`${this.iconSVGTemplate}<span class="slds-assistive-text">${this.title}</span>`;
	}

	render() {
		//const otherattrs = getRestOfAttribs(this.attributes, this.constructor.properties);

		const backgroundClass = this.background!=='false'
			? `slds-icon-${this.sprite}-${iconClass(this.icon)}`
			: `slds-icon-${this.sprite}-user`;

		const sldsClasses = [
			{ 'slds-icon_container': true },
			{ 'slds-icon_container_circle': this.sprite === 'action' },
			{ [`${backgroundClass}`]: this.background !== 'false' },
			this.className
		];
	
		return html`
<style>
@import 'include/LD/assets/styles/salesforce-lightning-design-system.css';
</style>
${this.div ?
	html`<div class=${joinClassNames(sldsClasses)} title=${this.title}>${this.iconTemplate}</div>`:
	html`<span class=${joinClassNames(sldsClasses)} title=${this.title}>${this.iconTemplate}</span>`}
`;
	}
}

customElements.define('ldswc-icon', Icon);