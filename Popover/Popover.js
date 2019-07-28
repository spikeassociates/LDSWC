import ButtonIcon from '../Button/IconButtons/IconButton.js';
import { LitElement, html } from '../libs/lit-element/lit-element.js';
import { getThemeClass } from '../libs/ldswcutils/theme.js';
import {applyDecorators, joinClassNames, getAssistive} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class Popover extends LitElement {
	static get properties() {
		return {
      /**
       * Open Popover
       */
			open: { type: Boolean },
      /**
       * Show close button
       */
			closeable: { type: Boolean },
      /**
       * onClose handler
       */
			onClose: { type: String }, // isRequired
      /**
       * Popover header content
       */
			header: { type: String },
      /**
       * Popover body content
       */
      body: { type: String },
      /**
       * Popover footer content
       */
			footer: { type: String },
      /**
       * Additional css classes
       */
			className: { type: String },
			/**
			 * Badge flavor: array of flavors, you can also provide a single flavor string.
			 * Flavors: inverse, lightest
			 */
			panel: { type: String }, // isRequired
      /**
       * Optional position of nubbin. Positions: left, left-top, left-bottom,
       * top-left, top-right, right-top, right-bottom, bottom-left, bottom-right
       */
			nubbin: { type: String },
      /**
       * Optional custom Header theme. Themes: warning, error, success, info
       */
      customHeaderTheme: { type: String },
      /**
       * themes: alt-inverse, default, error, info, inverse, offline, shade, success, warning
       */
      theme: { type: String },
		}
	}

	constructor() {
    super();
    this.open = false;
    this.closeable = true;
    this.header = null,
    this.body = null,
    this.footer = null,
		this.className = null;
    this.panel = false;
    this.nubbin = 'bottom-right',
    this.customHeaderTheme = null,
		this.theme = null;
  }

  createRenderRoot() {
		return this;
	}
  
  renderHeader() {
    const headerClasses = [
      'slds-popover__header',
      getThemeClass(this.customHeaderTheme),
    ];

    let headerContent;
    let borderRadius;
    if (this.panels && !this.customHeaderTheme) {
      headerContent = html`<h2 class="slds-text-heading_medium">${this.header}</h2>`;
      borderRadius = {
        borderTopLeftRadius: 'calc(0.50rem - 1px)',
        borderTopRightRadius: 'calc(0.50rem - 1px)',
      };
    } else {
      headerContent = this.header;
    }

    return html`
      <header class=${joinClassNames(headerClasses)} style=${borderRadius}>
        ${headerContent}
      </header>
    `;
  }

  renderBody() {
    return html`
      <div class="slds-popover__body">
        ${this.body}
      </div>
    `;
  }

  renderFooter() {
    return html`
      <footer class="slds-popover__footer">
        <p>${this.footer}</p>
      </footer>
    `;
  }

  renderCloseButton() {
    
    const closeButtonClasses = [
      'slds-float_right',
      'slds-popover__close',
    ];
    return html`
      <ldswc-iconbutton
        class=${joinClassNames(closeButtonClasses)}
        @click=${this.onClose}
        size="small"
        sprite="action"
        icon="close"
    />`;
  }
	render() {

  const sldsClasses = [
    'slds-popover',
    { [`slds-nubbin_${this.nubbin}`]: !!this.nubbin },
    { 'slds-popover_panel': (this.panels && !this.customHeaderTheme) },
      { 'slds-hide':  this.open },
      getThemeClass(this.theme),
    this.className
  ];

    return html`
      <link rel="stylesheet" href="${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css">
      <section
          class=${joinClassNames(sldsClasses)}
          role="dialog"
        >
          ${this.closeable ? this.renderCloseButton() : null}
          ${this.header ? this.renderHeader() : null}
          ${this.body ? this.renderBody() : null}
          ${this.footer ? this.renderFooter() : null}
      </section>
    `;
  }
  onClose(e) {
    this.open = !this.open;
  }
}

customElements.define('ldswc-popover', Popover);
















