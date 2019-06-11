import { LitElement, html } from '../libs/lit-element/lit-element.js';
import { joinClassNames } from '../libs/ldswcutils/ldswcutils.js';
import { ldswcconfig } from '../ldswcconfig.js';
import Icon from '../Icon/Icon.js';
import MediaObject from '../MediaObject/MediaObject.js';

export default class PageHeader extends LitElement {
	static get properties() {
		return {
			/**
			 * className
			 */
			className: { type: String },
			/**
			 * icon
			 */
			icon: { type: String },
			/**
			 * sprite
			 */
			sprite: { type: String },
			/**
			 * info subtitle
			 */
			info: { type: String },
			/**
			 * title
			 */
			title: { type: String },
		}
	}

	constructor() {
		super();
		this.checked = null;
		this.icon = '';
		this.sprite = '';
		this.info = '';
		this.title = '';
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const sldsClasses = [
			'slds-page-header',
			this.className,
		];

		return html`
			<div class=${joinClassNames(sldsClasses)}>
				<div class="slds-page-header__row">
					<div class="slds-page-header__col-title">
						<ldswc-mediaobject figurePosition="left" title=${this.title}>
							<ldswc-icon
								sprite=${this.sprite}
								icon=${this.icon}
								svgClassName="slds-page-header__icon"
								className="slds-icon-standard-${this.icon}"
								slot="figure"
							></ldswc-icon>
							<span slot="body">
								<div class="slds-page-header__name">
									<div class="slds-page-header__name-title">
										<h1>
										<span class="slds-page-header__title slds-truncate" title="${this.title}">${this.title}</span>
										</h1>
									</div>
								</div>
								<p class="slds-page-header__name-meta">${this.info}</p>
							</span>
						</ldswc-mediaobject>
					</div>
				</div>
			</div>`;
	};
}

customElements.define('ldswc-pageheader', PageHeader);
