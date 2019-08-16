import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames, getAssistive, getAssistiveText} from '../libs/ldswcutils/ldswcutils.js';
import {ldswcconfig} from '../ldswcconfig.js';
import MediaObject from '../MediaObject/MediaObject.js';
import IconSVG from '../Icon/IconSVG.js';
import Button from '../Button/Base/Button.js';

export default class TimelineItem extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			id: { type: String },
			/**
			 * Optional title that will be rendered as assistive-text
			 */
			title: { type: String },
			date: { type: String },
			buttonTitle: { type: String },
			buttonFlavor: { type: String },
			buttonSprite: { type: String },
			buttonIcon: { type: String },
			iconTitle: { type: String },
			iconClasses: { type: String },
			iconAssetPath: { type: String },
			iconSprite: { type: String },
			iconIcon: { type: String },
			iconId: { type: String },
			iconData: { type: String },
			actionButtonTitle: { type: String },
			actionButtonClasses: { type: String },
			actiionButtonFlavor: { type: String },
			actionButtonSprite: { type: String },
			actionButtonIcon: { type: String },
			contents: { type: String },
			contentstrigger: { type: String },
			contentstimeline: { type: String },
			contentsdetail: { type: String },
		};
	}

	constructor() {
		super();
		this.className = null;
		this.id = null;
		this.title = null;
		this.date = null;
		this.buttonTitle = null;
		this.buttonFlavor = null;
		this.buttonSprite = null;
		this.buttonIcon = null;
		this.iconTitle = null;
		this.iconClasses = null;
		this.iconAssetPath = null;
		this.iconSprite = null;
		this.iconIcon = null;
		this.iconId = null;
		this.iconData = null;
		this.actionButtonTitle = null;
		this.actionButtonClasses = null;
		this.actiionButtonFlavor = null;
		this.actionButtonSprite = null;
		this.actionButtonIcon = null;
		this.contents = '';
		this.contentstrigger = '';
		this.contentstimeline = '';
		this.contentsdetails = '';
	}

	createRenderRoot() {
		return this;
	}

	get timelineDate() {
		return '<p class="slds-timeline__date">'+this.date+'</p>';
	}

	render() {
		const sldsClasses = [
			'slds-timeline__item_expandable',
			this.className
		];

		const triggerClasses = [
			'slds-grid',
			'slds-grid_align-spread',
			'slds-timeline__trigger'
		];

		const actionsClasses = [
			'slds-timeline__actions',
			'slds-timeline__actions_inline'
		];

		const detailsClasses = [
			'slds-box',
			'slds-timeline__item_details',
			'slds-theme_shade',
			'slds-m-top_x-small',
			'slds-m-horizontal_xx-small'
		];

		const iconClasses = [
			'slds-icon_container',
			'slds-timeline__icon',
			this.iconClasses
		];
		const mfig = '<div><ldswc-button'
			+' title="'+this.buttonTitle+'"'
			+' flavor="'+this.buttonFlavor+'"'
			+' sprite="'+this.buttonSprite+'"'
			+' icon="'+this.buttonIcon+'"'
			+' aria-controls="'+this.id+'"'
			+' aria-expanded="true"'
			+' figureClass="slds-timeline__details-action-icon"'
			+' iconSize=""'
			+' children="'+(this.title && getAssistiveText(this.title))+'"'
		+'></ldswc-button><div class="'+joinClassNames(iconClasses)+'" title="'+this.iconTitle+'">'
			+'<ldswc-iconsvg'
				+' assetPath="'+this.iconAssetPath+'"'
				+' sprite="'+this.iconSprite+'"'
				+' icon="'+this.iconIcon+'"'
				+' id="'+this.iconId+'"'
				+' data-kkk="'+this.iconData+'"></ldswc-iconsvg></div></div>';
		const mbdy = '<div><div class="'+joinClassNames(triggerClasses)+'">'
		+this.contentstrigger
		+'<div class="'+joinClassNames(actionsClasses)+'">'+this.timelineDate
				+'<ldswc-button'
					+' title="'+this.actionButtonTitle+'"'
					+' flavor="'+this.actionButtonFlavor+'"'
					+' sprite="'+this.actionButtonSprite+'"'
					+' icon="'+this.actionButtonIcon+'"'
					+' className="'+this.actionButtonClasses+'"'
					+' children="'+(this.actionButtonTitle && getAssistiveText(this.actionButtonTitle))+'"'
				+'></ldswc-button></div></div>'+this.contentstimeline
				+'<article class="'+joinClassNames(detailsClasses)+'" id="'+this.id+'" aria-hidden="false">'
			+this.contentsdetails+'</article></div>';
		return html`
<li>
	<div class=${joinClassNames(sldsClasses)}>
		${this.title && getAssistive(this.title)}
		<ldswc-mediaobject
			figure=${mfig}
			mediabody=${mbdy}
		></ldswc-mediaobject>
		${this.contents}
	</div>
</li>`;
	}
}

customElements.define('ldswc-timelineitem', TimelineItem);