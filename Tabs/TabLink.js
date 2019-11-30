import { html } from '../libs/lit-element/lit-element.js';
import LDSWCElement from '../libs/ldswcelement/ldswcelement.js';
import {joinClassNames, ldsIsEmpty} from '../libs/ldswcutils/ldswcutils.js';
import { getAriaLabel, getTabsClass } from './utils.js';

export default class TabLink extends LDSWCElement {
	static get properties() {
		return {
			/**
			 * isFocused
			 */
			isFocused: { type: Boolean },
			/**
			 * Unique id, used to reference navigation
			 */
			id: { type: String },
			/**
			 * Title in Navigation
			 */
			title: { type: String },
			/**
			 * (PRIVATE) Set by parent Tabs
			 */
			isActive: { type: Boolean },
			/**
			 * (PRIVATE) Set by parent Tabs
			 */
			scoped: { type: Boolean },
			/**
			* Shortcut to render a ButtonIcon. Used in combination with `sprite`
			*/
			icon: { type: String },
			/**
			 * Shortcut to render a ButtonIcon. Used in combination with `icon`
			 */
			sprite: { type: String },
			/**
			 * icon size
			 */
			iconsize: { type: String }, // oneOf(['xx-small', 'x-small', 'small', 'medium', 'large', 'none']),
			/**
			 * icon class
			 */
			iconclass: { type: String },
			/**
			 * Can be either `neutral`, `brand`, `outline-brand`, `destructive`, `text-destructive`, `success` or `inverse`
			 * Default to `neutral`, set to "none" or `null` explicitely to render a plain button
			 */
			flavor: { type: String },
		};
	}

	constructor() {
		super();
		this.isFocused = false;
		this.isActive = false;
		this.scoped = false;
		this.link = '';
		this.icon = '';
		this.iconclass = '';
		this.sprite = '';
		this.iconsize = 'small';
		this.flavor = '';
	}

	tabClick(e) {
		let event = new CustomEvent('tabClicked', {});
		this.dispatchEvent(event);
	}

	render() {
		const hasFlavor = !ldsIsEmpty(this.flavor);
		const sldsClasses = [
			{'slds-has-focus': !!this.isFocused},
			{'slds-is-active' : !!this.isActive},
			{ [`slds-has-${this.flavor} slds-sub-tabs__item slds-grid slds-grid_vertical-align-center`]: hasFlavor },
			getTabsClass('__item', (!!this.scoped && !this.flavor))
		];
		const icondef = html`<span class="slds-tabs__left-icon">
				<span class="slds-icon_container slds-icon-${this.sprite}-${this.icon}" title="${this.icon}">
				<ldswc-iconsvg
					className=${this.iconclass}
					icon=${this.icon}
					sprite=${this.sprite}
					size=${this.iconsize}
				></ldswc-iconsvg>`;
		return html`
			<li
			class =${joinClassNames(sldsClasses)}
			key=${this.id}
			role="presentation"
			title=${this.title}
			@click="${this.tabClick}"
			>
			<a
				aria-controls=${this.id}
				?aria-selected=${this.isActive}
				class=${getTabsClass('__link', (!!this.scoped && !this.flavor))}
				id=${getAriaLabel(this.id)}
				role="tab"
				href='javascript:void(0)'
				@click="${this.tabClick}"
				?tabIndex=${!!this.isActive ? 0 : -1}
			>
				${this.icon!='' ? icondef : ''}
				<slot></slot>
			</a>
			</li>
		`;
	}
}
customElements.define('ldswc-tablink', TabLink);
