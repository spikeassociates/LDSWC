import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';

export default class MediaObject extends LitElement {
	static get properties() {
		return {
			/**
			 * Optional class name which is appended to the body div
			 */
			bodyClassName: { type: String },
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * horizontally centers figures with content
			 */
			center: { type: Boolean },
			/**
			 * renders a responsive variant of the MediaObject
			 */
			responsive: { type: Boolean },
			/**
			 * Sizes: small, large
			 */
			size: { type: String }, // oneOf(['small', 'large']),
			/**
			 * truncates the body, requires title
			 */
			truncate: { type: Boolean },
			/**
			 * title is necessary if truncate is used
			 */
			title: { type: String },
			/**
			 *  Figure position. Can be "left" or "right".
			 */
			figurePosition: { type: String },
			/**
			 * mediabody
			 */
			mediabody: { type: String },
			/**
			 *  Figure definition
			 */
			figure: { type: String },
		};
	}

	constructor() {
		super();
		this.bodyClassName = null;
		this.className = null;
		this.center = null;
		this.responsive = null;
		this.size = null;
		this.truncate = null;
		this.title = null;
		this.figurePosition = null;
		this.mediabody = '';
		this.figure = '';
	}

	renderFigure(figurePosition, figureClasses, bodyClasses) {
		var fig = eval('html`'+this.figure+'`');
		var mbd = eval('html`'+this.mediabody+'`');
		if (figurePosition == 'right') {
			return html`
			<div class=${joinClassNames(bodyClasses)} title=${this.title}>${mbd}</div>
			<div class=${joinClassNames(figureClasses)}>${fig}</div>`;
		} else {
			return html`
			<div class=${joinClassNames(figureClasses)}>${fig}</div>
			<div class=${joinClassNames(bodyClasses)} title=${this.title}>${mbd}</div>`;
		}
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const sldsClasses = [
			'slds-media',
			{ 'slds-media_center': this.center },
			{ 'slds-media_responsive': this.responsive },
			{ [`slds_media_${this.size}`]: !!this.size},
			this.className
		];
		const bodyClasses = [
			'slds-media__body',
			{ 'slds--truncate': this.truncate },
			this.bodyClassName
		];
		const figureClasses = this.figurePosition == 'right' ? [
			'slds-media__figure',
			'slds-media__figure_reverse'
		] : [
			'slds-media__figure'
		];
		return html`<div class=${joinClassNames(sldsClasses)}>${this.renderFigure(this.figurePosition, figureClasses, bodyClasses)}</div>`;
	}
}

customElements.define('ldswc-mediaobject', MediaObject);