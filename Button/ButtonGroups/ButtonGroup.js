import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import { joinClassNames } from '../../libs/ldswcutils/ldswcutils.js';
import IconSVG from '../../Icon/IconSVG.js';
import { ldswcconfig } from '../../ldswcconfig.js';
import CheckboxButton from '../FormButtons/CheckboxButton.js';

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
    }
  }

  constructor() {
    super();
    this.className = null;
    this.list = null;
    this.row = null;
  }

  render() {
    const sldsClasses = [
      'slds-button-group',
      'slds-button-group-list',
      'slds-button-group-row',
      this.className
    ];

    return html`
            <style>
                 @import '${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css';
            </style>
            <div class=${joinClassNames(sldsClasses)} role="group">
            <slot></slot>
           </div>
    `;
  };
}
customElements.define('ldswc-buttongroup', ButtonGroup);
