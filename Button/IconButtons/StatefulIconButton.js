import { LitElement, html } from '../../libs/lit-element/lit-element.js';
import { joinClassNames } from '../../libs/ldswcutils/ldswcutils.js';
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
			/**
			 * icon to show
			 */
			icon: { type: String },
			/**
			 * sprite to show
			 */
			sprite: { type: String },
			/**
			 * size
			 */
			size: { type: String },
			/**
			 * title
			 */
			title: { type: String },
		}
	}
	constructor() {
		super();
		this.className = null;
		this.flavor = null;
		this.selected = false;
		this.icon='settings';
		this.sprite='utility';
		this.size='x-small';
		this.title='';
	}

	createRenderRoot() {
		return this;
	}

	onClicked(e) {
		this.selected = !this.selected;
	}

	render() {
		const sldsClasses = [
			{ 'slds-is-selected': this.selected },
			this.className,
		];

		return html`
			<ldswc-iconbutton
				className=${joinClassNames(sldsClasses)}
				@click=${this.onClicked}
				aria-pressed=${this.selected}
				flavor=${this.flavor}
				border="filled"
				icon=${this.icon}
				sprite=${this.sprite}
				size=${this.size}
				title=${this.title}
			/>`;
	};
}

customElements.define('ldswc-statefuliconbutton', StatefulIconButton);
