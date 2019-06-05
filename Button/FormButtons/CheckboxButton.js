import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import { joinClassNames, getAssistive } from '../../libs/ldswcutils/ldswcutils.js';
import IconSVG from '../../Icon/IconSVG.js';
import { ldswcconfig } from '../../ldswcconfig.js';

export default class CheckboxButton extends LitElement {
  static get properties() {
    return {
      /**
       * Optional additional className
       */
      className: { type: String },
      /**
       * Checkbox state
       */
      checked: { type: Boolean },
      /**
       * `id` of input. Links input and label
       */
      id: { type: String },
      /**
       * Input label, will be present for screen readers
       */
      label: { type: String },
    }
  }

  constructor() {
    super();
    this.checked = null;
    this.className = null;
    this.id = null;
    this.label = null;
  }
  getInput(classes) {
    if (this.checked) {
      return html`<input 
      class=${joinClassNames(classes)}
      id=${this.id}
      type="checkbox"
      value=${this.id}
      checked/>`;
    } else {
      return html`<input 
      class=${joinClassNames(classes)}
      id=${this.id}
      type="checkbox"
      value=${this.id}
      />`;
    }
  }

  render() {
    const sldsClasses = [
      'slds-assistive-text',
      this.className,
    ];

    return html`
             <style>
                 @import '${ldswcconfig.ldsBasePath}/styles/salesforce-lightning-design-system.css';
             </style>
             <div class="slds-checkbox_add-button">
                  ${this.getInput(sldsClasses)}
                <label class="slds-checkbox_faux" for=${this.id}>
                  ${getAssistive(this.label)}
                </label>
            </div>`;
  };
}
customElements.define('ldswc-checkboxbutton', CheckboxButton);