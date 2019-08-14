import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import { joinClassNames, getAssistive } from '../../libs/ldswcutils/ldswcutils.js';
import { ldswcconfig } from '../../ldswcconfig.js';
import Button from '../Base/Button.js';
import ButtonIcon from '../Base/ButtonIcon.js';

export default class IconButton extends LitElement {
  static get properties() {
    return {
      /**
    * Shortcut to render a ButtonIcon. Used in combination with `sprite`
    */
      icon: { type: String },
      /**
       * Shortcut to render a ButtonIcon. Used in combination with `icon`
       */
      sprite: { type: String },
      /**
       * If shortcut does not suffice (e.g. you need more control over ButtonIcon), you can add a ButtonIcon as child
       */
      children: { type: String },
      /**
       * Renders a border. Can be `true` to render a transparent border or filled to render a visible border
       */
      border: { type: String },//oneOf([true, 'filled']),
      /**
       * Adjust icon sizes. Used to render transparent icons with padding
       */
      container: { type: Boolean },
      /**
       * Optional additional classNames
       */
      className: { type: String },
      /**
       * Renders a small down chevron besides the main icon. Used for example in IconButton groups
       */
      more: { type: Boolean },
      /**
       * Can be either `brand`, `error` or `inverse`
       */
      flavor: { type: String }, //oneOf([ 'brand','error','inverse',]),
      /**
       * Adjusts icon size. Can be `xx-small`, `x-small` or `small`
       */
      size: { type: String }, //oneOf(['xx-small','x-small','small',]),
      /**
       * Title for hover and screenreaders
       */
      title: { type: String },
    }
  }

  constructor() {
    super();
    this.border = null;
    this.children = null;
    this.className = null;
    this.container = null;
    this.flavor = null;
    this.icon = null;
    this.more = null;
    this.size = null;
    this.sprite = null;
    this.title = null;
  }

  createRenderRoot() {
        return this;
  }

  render() {

    const prefix = ['slds-button_icon'];


    const isInverse = this.flavor === 'inverse';

    /* eslint-disable no-nested-ternary */
    const borderSuffix = this.isInverse && this.border ? 'border-inverse'
      : this.border === 'filled' ? 'border-filled' : 'border';
    /* eslint-enable */

    const sldsClasses = [
      prefix,
      { [`${prefix}-${this.size}`]: !!this.size },
      { [`${prefix}-${borderSuffix}`]: !!this.border },
      { [`${prefix}-${this.container}`]: this.container },
      { [`${prefix}-inverse`]: isInverse && !this.border },
      { [`${prefix}-${this.more}`]: this.more },
      { [`${prefix}-${this.flavor}`]: this.flavor && !isInverse },
      this.className
    ];

    const isShortcut = !!this.icon && !!this.sprite;

    const moreconfig = this.more ? '<ldswc-buttonicon size="xx-small" sprite="utility" icon="down"></ldswc-buttonicon>' : '';

    const children = isShortcut ? '<ldswc-buttonicon sprite="'+this.sprite+'" icon="'+this.icon+'"></ldswc-buttonicon>'+moreconfig : '';

    return html`
      <ldswc-button
        class =${joinClassNames(sldsClasses)}
        flavor =${this.flavor}
        title =${this.title}
        children =${children}
        >
        ${this.title && getAssistive(this.title)}
      </ldswc-button >
    `;
  };
}
customElements.define('ldswc-iconbutton', IconButton);
