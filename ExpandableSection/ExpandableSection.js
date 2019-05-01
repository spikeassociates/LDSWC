import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';
import Button from '../Button/Base/Button.js';
import ButtonIcon from '../Button/Base/ButtonIcon.js';

export default class ExpandableSection extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * section open, ignored if uncollapsable
			 */
			open: { type: Boolean },
			/**
			 * section should start open
			 */
			defaultOpen: { type: Boolean },
			/**
			 * uncollapsable
			 */
      uncollapsable: { type: Boolean },
      /**
			 * id linking button and expandable content
			 */
      id: { type: String },
      /**
			 * section title
			 */
			title: { type: String },
		}
	}

	constructor() {
		super();
		this.className = null;
		this.open = null;
		this.defaultOpen = false;
		this.uncollapsable = false;
    this.id = '';
    this.title = '';
	}

	render() {
    const isOpen = this.open === null ? this.open : null;

		const sldsClasses = [
      'slds-section',
      { 'slds-is-open': this.uncollapsable || isOpen || this.open },
      this.className
    ];
    
    const headerClasses = [
      'slds-section__title',
      { 'slsds-theme_shade': this.uncollapsable}
    ];

		return html`
<style>
@import '${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css';
</style>
<div class=${joinClassNames(sldsClasses)}>
  <h3 class=${joinClassNames(headerClasses)}>
    ${this.uncollapsable
      ? 
        html`<span class="slds-truncate slds-p-horizontal_small" title=${this.title}>${this.title}</span>`
      : 
        html`
        <ldswc-button
          aria-controls=${this.id}
          aria-expanded=${isOpen || this.open}
          className="slds-section__title-action"
          @click=${this.toggleSection}
          title=${this.title}
        >
          <ldswc-buttonicon
            position="left"
            icon=${isOpen || this.open ? 'chevrondown' : 'chevronright'}
            sprite="utility"
            aria-hidden="true"
          >
          </ldswc-buttonicon>
          <span class="slds-truncate">${this.title}</span>
        </ldswc-button>
        `
    }
  </h3>
  <div
    aria-hidden=${!this.open}
    class="slds-section__content"
    id=${this.id}
  >
    <slot></slot>
  </div>
</div>
`;
  }
  
  toggleSection(e) {
    this.open = !this.open;
  }
}

customElements.define('ldswc-expandablesection', ExpandableSection);