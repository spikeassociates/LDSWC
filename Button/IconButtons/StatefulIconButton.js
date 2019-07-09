import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import { joinClassNames } from '../../libs/ldswcutils/ldswcutils.js';
import { ldswcconfig } from '../../ldswcconfig.js';
import IconButton from './IconButton.js';

export default class StatefulIconButton extends LitElement {
  static get properties() {
    return {
      /**
     * Optional additional className
      */
      className: { type: String },
      /**
       * Button flavor. Can be `inverse`
       */
      flavor: { type: String },
      /**
       * Whether the `IconButton` should render as selected
       */
      selected: { type: Boolean },
    }
  }
  constructor() {
    super();
    this.className = null;
    this.flavor = null;
    this.selected = null;
  }
  render() {

    const sldsClasses = [
      { 'slds-is-selected': this.selected },
      this.className,
    ];

    return html`
            <link rel="stylesheet" href="${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css">
            <ldswc-iconbutton
              class=${joinClassNames(sldsClasses)}
              aria-pressed=${this.selected}
              flavor='${this.flavor}'
              border="filled"
              icon="settings"
              sprite="utility"
              size="x-small"
            />
    `;
  };
}
customElements.define('ldswc-statefuliconbutton', StatefulIconButton);


