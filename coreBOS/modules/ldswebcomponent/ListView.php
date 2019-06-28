<?php
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ************************************************************************************/
include_once 'vtlib/Vtiger/Module.php';
require_once 'Smarty_setup.php';
?>
<script type="module" src="./include/ldswc/Icon/Icon.js"></script>
<script type="module" src="./include/ldswc/Icon/ScoreIcon.js"></script>
<script type="module" src="./include/ldswc/Icon/StrengthIcon.js"></script>
<script type="module" src="./include/ldswc/Icon/EqIcon.js"></script>
<script type="module" src="./include/ldswc/Spinner/index.js"></script>
<script type="module" src="./include/ldswc/Button/Base/Button.js"></script>
<script type="module" src="./include/ldswc/Button/Base/ButtonIcon.js"></script>
<script type="module" src="./include/ldswc/Button/FormButtons/CheckboxButton.js"></script>
<script type="module" src="./include/ldswc/Badge/Badge.js"></script>
<script type="module" src="./include/ldswc/MediaObject/MediaObject.js"></script>
<script type="module" src="./include/ldswc/Timeline/index.js"></script>
<script type="module" src="./include/ldswc/PageHeader/PageHeader.js"></script>

<ldswc-pageheader
	title="Lightning Design System web components!!"
	info="This open source project implements a set of LDS web components!"
	icon="opportunity"
	sprite="standard"
></ldswc-pageheader>

<span class="slds-icon_container slds-icon-standard-user">
<ldswc-iconsvg sprite="standard" icon="account" id="anyid" data-kkk="any data"></ldswc-iconsvg>
</span>
<ldswc-icon sprite="standard" icon="search" background="true" title="an icon"></ldswc-icon>
<ldswc-scoreicon title="myscore" score="negative"></ldswc-scoreicon>
<ldswc-strengthicon title="mystrength" strength="-3" animated></ldswc-strengthicon>
<ldswc-strengthicon title="mystrength" strength="2"></ldswc-strengthicon>
<ldswc-eqicon title="equalizer" animated></ldswc-eqicon>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ldswc-spinner title="container" size="large" delayed></ldswc-spinner>
<ldswc-button sprite="standard" icon="search" size="large" onclick="alert('hi');">Say hi</ldswc-button>
<ldswc-button sprite="standard" icon="search" size="large" iconPosition="right" onclick="alert('bye');">Say bye</ldswc-button>
<ldswc-button sprite="standard" icon="search" size="large" iconPosition="right" title="this is a title"></ldswc-button>
<ldswc-buttonicon sprite="standard" icon="account" size="large" ></ldswc-buttonicon>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ldswc-badge theme="inverse" title="this is assistive" label="Some Badge text"></ldswc-badge>
<ldswc-badge theme="lightest" title="this is assistive" label="Another Badge"></ldswc-badge>
<ldswc-checkboxbutton id="mimi" label="checkboxbutton" ></ldswc-checkboxbutton>
<div class="slds-grid">
<div class="slds-size_6-of-12">
<ldswc-mediaobject figurePosition="left" title="media object title" center size="small" responsive
mediabody='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.'
figure='<span class="slds-avatar slds-avatar_large">
	<img alt="Person name" src="include/LD/assets/images/avatar3.jpg" title="User avatar" />
</span>'>
</ldswc-mediaobject>
</div>
<div class="slds-size_6-of-12">
<ldswc-mediaobject figurePosition="right" title="media object title" center size="small" responsive
mediabody='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.'
figure='<span class="slds-avatar slds-avatar_large">
	<img alt="Person name" src="include/LD/assets/images/avatar3.jpg" title="User avatar" />
</span>'>
>
</ldswc-mediaobject>
</div>
</div>

<br>
<ldswc-timeline
	contents='[{
		"id":"task-item-base",
		"title":"Task 1 Title",
		"date":"9:00am | 3/20/17",
		"className":"slds-timeline__item_task",
		"buttonTitle":"Toggle details for Review proposals for EBC deck with larger team and have marketing review this",
		"buttonFlavor":"icon",
		"buttonSprite":"utility",
		"buttonIcon":"switch",
		"iconTitle":"task",
		"iconClasses":"slds-icon-standard-task",
		"iconAssetPath":"include/LD/assets/icons/",
		"iconSprite":"standard",
		"iconIcon":"task",
		"actionButtonTitle":"More Options for this item",
		"actionButtonClasses":"slds-button_icon-border-filled slds-button_icon-x-small",
		"actionButtonFlavor":"icon",
		"actionButtonSprite":"utility",
		"actionButtonIcon":"down",
		"contentstrigger":"<div>\
			<div class=\"slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space\">
				<div class=\"slds-checkbox\">
					<input type=\"checkbox\" name=\"options\" id=\"checkbox-16\" value=\"checkbox-16\" />
					<label class=\"slds-checkbox__label\" for=\"checkbox-16\">
						<span class=\"slds-checkbox_faux\"></span>
						<span class=\"slds-form-element__label slds-assistive-text\">Mark Review proposals for EBC deck with larger team and have marketing review this complete</span>
					</label>
				</div>
				<h3 class=\"slds-truncate\" title=\"Review proposals for EBC deck with larger team and have marketing review this\">
					<a href=\"javascript:void(0);\">
					<strong>Review proposals for EBC deck with larger team and have marketing review this</strong>
					</a>
				</h3>
				<div class=\"slds-no-flex\">
					<span class=\"slds-icon_container slds-icon-utility-rotate\" title=\"Recurring Task\">
						<svg class=\"slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small\" aria-hidden=\"true\">
						<use xlink:href=\"<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#rotate\"></use>
						</svg>
						<span class=\"slds-assistive-text\">Recurring Task</span>
					</span>
				</div>
			</div>
		</div>",
		"contentstimeline":"<p class="slds-m-horizontal_xx-small">
			<a href="javascript:void(0);">You</a> created a task with
			<a href="javascript:void(0);">Charlie Gomez</a>
		</p>",
		"contentsdetails":"<div>
			<ul class="slds-list_horizontal slds-wrap">
				<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
					<span class="slds-text-title slds-p-bottom_x-small">Name</span>
					<span class="slds-text-body_medium slds-truncate" title="Charlie Gomez">
					<a href="javascript:void(0);">Charlie Gomez</a>
					</span>
				</li>
				<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
					<span class="slds-text-title slds-p-bottom_x-small">Related To</span>
					<span class="slds-text-body_medium slds-truncate" title="Tesla Cloudhub + Anypoint Connectors">
					<a href="javascript:void(0);">Tesla Cloudhub + Anypoint Connectors</a>
				</span>
				</li>
			</ul>
			<div>
				<span class="slds-text-title">Description</span>
				<p class="slds-p-top_x-small">Need to finalize proposals and brand details before the meeting</p>
			</div>
		</div><!-- ./timeline_details -->"
	}]'
></ldswc-timeline>

<br><br>
<hr>
<br><br>
<ul class="slds-timeline">
<li>
<div class="slds-timeline__item_expandable slds-timeline__item_task">
<span class="slds-assistive-text">task</span>
<div class="slds-media">
<div class="slds-media__figure">
<button class="slds-button slds-button_icon" title="Toggle details for Review proposals for EBC deck with larger team and have marketing review this" aria-controls="task-item-base">
<svg class="slds-button__icon slds-timeline__details-action-icon" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
</svg>
<span class="slds-assistive-text">Toggle details for Review proposals for EBC deck with larger team and have marketing review this</span>
</button>
<div class="slds-icon_container slds-icon-standard-task slds-timeline__icon" title="task">
<svg class="slds-icon slds-icon_small" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
</svg>
</div>
</div>
<div class="slds-media__body">
<div class="slds-grid slds-grid_align-spread slds-timeline__trigger">
<div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
<div class="slds-checkbox">
<input type="checkbox" name="options" id="checkbox-16" value="checkbox-16" />
<label class="slds-checkbox__label" for="checkbox-16">
<span class="slds-checkbox_faux"></span>
<span class="slds-form-element__label slds-assistive-text">Mark Review proposals for EBC deck with larger team and have marketing review this complete</span>
</label>
</div>
<h3 class="slds-truncate" title="Review proposals for EBC deck with larger team and have marketing review this">
<a href="javascript:void(0);">
<strong>Review proposals for EBC deck with larger team and have marketing review this</strong>
</a>
</h3>
<div class="slds-no-flex">
<span class="slds-icon_container slds-icon-utility-rotate" title="Recurring Task">
<svg class="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#rotate"></use>
</svg>
<span class="slds-assistive-text">Recurring Task</span>
</span>
</div>
</div>
<div class="slds-timeline__actions slds-timeline__actions_inline">
<p class="slds-timeline__date">9:00am | 3/20/17</p>
<button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="More Options for this item">
<svg class="slds-button__icon" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
</svg>
<span class="slds-assistive-text">More Options for this item</span>
</button>
</div>
</div>
<p class="slds-m-horizontal_xx-small">
<a href="javascript:void(0);">You</a> created a task with
<a href="javascript:void(0);">Charlie Gomez</a>
</p>
<article class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small" id="task-item-base" aria-hidden="true">
<ul class="slds-list_horizontal slds-wrap">
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">Name</span>
<span class="slds-text-body_medium slds-truncate" title="Charlie Gomez">
<a href="javascript:void(0);">Charlie Gomez</a>
</span>
</li>
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">Related To</span>
<span class="slds-text-body_medium slds-truncate" title="Tesla Cloudhub + Anypoint Connectors">
<a href="javascript:void(0);">Tesla Cloudhub + Anypoint Connectors</a>
</span>
</li>
</ul>
<div>
<span class="slds-text-title">Description</span>
<p class="slds-p-top_x-small">Need to finalize proposals and brand details before the meeting</p>
</div>
</article>
</div>
</div>
</div>
</li>
<li>
<div class="slds-timeline__item_expandable slds-timeline__item_call">
<span class="slds-assistive-text">log_a_call</span>
<div class="slds-media">
<div class="slds-media__figure">
<button class="slds-button slds-button_icon" title="Toggle details for Mobile conversation on Monday" aria-controls="call-item-base">
<svg class="slds-button__icon slds-timeline__details-action-icon" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
</svg>
<span class="slds-assistive-text">Toggle details for Mobile conversation on Monday</span>
</button>
<div class="slds-icon_container slds-icon-standard-log-a-call slds-timeline__icon" title="call">
<svg class="slds-icon slds-icon_small" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/standard-sprite/svg/symbols.svg#log_a_call"></use>
</svg>
</div>
</div>
<div class="slds-media__body">
<div class="slds-grid slds-grid_align-spread slds-timeline__trigger">
<div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
<h3 class="slds-truncate" title="Mobile conversation on Monday">
<a href="javascript:void(0);">
<strong>Mobile conversation on Monday</strong>
</a>
</h3>
</div>
<div class="slds-timeline__actions slds-timeline__actions_inline">
<p class="slds-timeline__date">10:00am | 3/23/17</p>
<button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="More Options for this item">
<svg class="slds-button__icon" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
</svg>
<span class="slds-assistive-text">More Options for this item</span>
</button>
</div>
</div>
<p class="slds-m-horizontal_xx-small">
<a href="javascript:void(0);">You</a> logged a call with
<a href="javascript:void(0);">Adam Chan</a>
</p>
<article class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small" id="call-item-base" aria-hidden="true">
<ul class="slds-list_horizontal slds-wrap">
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">Name</span>
<span class="slds-text-body_medium slds-truncate" title="Adam Chan">
<a href="javascript:void(0);">Adam Chan</a>
</span>
</li>
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">Related To</span>
<span class="slds-text-body_medium slds-truncate" title="Tesla Cloudhub + Anypoint Connectors">
<a href="javascript:void(0);">Tesla Cloudhub + Anypoint Connectors</a>
</span>
</li>
</ul>
<div>
<span class="slds-text-title">Description</span>
<p class="slds-p-top_x-small">Adam seemed interested in closing this deal quickly! Let’s move.</p>
</div>
</article>
</div>
</div>
</div>
</li>
<li>
<div class="slds-timeline__item_expandable slds-timeline__item_email">
<span class="slds-assistive-text">email</span>
<div class="slds-media">
<div class="slds-media__figure">
<button class="slds-button slds-button_icon" title="Toggle details for Re: Mobile conversation on Monday with the new global team" aria-controls="email-item-base">
<svg class="slds-button__icon slds-timeline__details-action-icon" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
</svg>
<span class="slds-assistive-text">Toggle details for Re: Mobile conversation on Monday with the new global team</span>
</button>
<div class="slds-icon_container slds-icon-standard-email slds-timeline__icon" title="email">
<svg class="slds-icon slds-icon_small" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/standard-sprite/svg/symbols.svg#email"></use>
</svg>
</div>
</div>
<div class="slds-media__body">
<div class="slds-grid slds-grid_align-spread slds-timeline__trigger">
<div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
<h3 class="slds-truncate" title="Re: Mobile conversation on Monday with the new global team">
<a href="javascript:void(0);">
<strong>Re: Mobile conversation on Monday with the new global team</strong>
</a>
</h3>
<div class="slds-no-flex">
<span class="slds-icon_container slds-icon-utility-groups" title="Group email">
<svg class="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#groups"></use>
</svg>
<span class="slds-assistive-text">Group email</span>
</span>
<span class="slds-icon_container slds-icon-utility-attach" title="Has attachments">
<svg class="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#attach"></use>
</svg>
<span class="slds-assistive-text">Has attachments</span>
</span>
</div>
</div>
<div class="slds-timeline__actions slds-timeline__actions_inline">
<p class="slds-timeline__date">10:00am | 3/24/17</p>
<button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="More Options for this item">
<svg class="slds-button__icon" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
</svg>
<span class="slds-assistive-text">More Options for this item</span>
</button>
</div>
</div>
<p class="slds-m-horizontal_xx-small">
<a href="javascript:void(0);">You</a> emailed
<a href="javascript:void(0);">Lea Chan</a>
</p>
<article class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small" id="email-item-base" aria-hidden="true">
<ul class="slds-list_horizontal slds-wrap">
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">From Address</span>
<span class="slds-text-body_medium slds-truncate" title="Jackie Dewar">
<a href="javascript:void(0);">Jackie Dewar</a>
</span>
</li>
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">To Address</span>
<span class="slds-text-body_medium slds-truncate" title="Lea Chan">
<a href="javascript:void(0);">Lea Chan</a>
</span>
</li>
</ul>
<div>
<span class="slds-text-title">Text Body</span>
<p class="slds-p-top_x-small">Hi everyone, Thanks for meeting with the team today and going through the proposals we saw. This goes on and wraps if needed.</p>
</div>
</article>
</div>
</div>
</div>
</li>
<li>
<div class="slds-timeline__item_expandable slds-timeline__item_event">
<span class="slds-assistive-text">event</span>
<div class="slds-media">
<div class="slds-media__figure">
<button class="slds-button slds-button_icon" title="Toggle details for EBC Follow up call" aria-controls="event-item-base">
<svg class="slds-button__icon slds-timeline__details-action-icon" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
</svg>
<span class="slds-assistive-text">Toggle details for EBC Follow up call</span>
</button>
<div class="slds-icon_container slds-icon-standard-event slds-timeline__icon" title="event">
<svg class="slds-icon slds-icon_small" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
</svg>
</div>
</div>
<div class="slds-media__body">
<div class="slds-grid slds-grid_align-spread slds-timeline__trigger">
<div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
<h3 class="slds-truncate" title="EBC Follow up call">
<a href="javascript:void(0);">
<strong>EBC Follow up call</strong>
</a>
</h3>
<div class="slds-no-flex">
<span class="slds-icon_container slds-icon-utility-world" title="Public sharing">
<svg class="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#world"></use>
</svg>
<span class="slds-assistive-text">Public sharing</span>
</span>
</div>
</div>
<div class="slds-timeline__actions slds-timeline__actions_inline">
<p class="slds-timeline__date">10:30am | 3/24/17</p>
<button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="More Options for this item">
<svg class="slds-button__icon" aria-hidden="true">
<use xlink:href="<?php echo $site_URL; ?>/include/LD/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
</svg>
<span class="slds-assistive-text">More Options for this item</span>
</button>
</div>
</div>
<p class="slds-m-horizontal_xx-small">
<a href="javascript:void(0);">You</a> created an event with
<a href="javascript:void(0);">Aida Lee</a> and 5 others</p>
<article class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small" id="event-item-base" aria-hidden="true">
<ul class="slds-list_horizontal slds-wrap">
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">Location</span>
<span class="slds-text-body_medium slds-truncate" title="Westen St. Francis, San Francisco, CA, 94622">
<a href="javascript:void(0);">Westen St. Francis, San Francisco, CA, 94622</a>
</span>
</li>
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">Attendees</span>
<span class="slds-text-body_medium slds-truncate" title="Jason Dewar (Organizer) + 5 others">
<a href="javascript:void(0);">Jason Dewar (Organizer) + 5 others</a>
</span>
</li>
<li class="slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small">
<span class="slds-text-title slds-p-bottom_x-small">When</span>
<span class="slds-text-body_medium slds-truncate" title="March 26, 10:00 AM - 11:00 AM">
<a href="javascript:void(0);">March 26, 10:00 AM - 11:00 AM</a>
</span>
</li>
</ul>
<div>
<span class="slds-text-title">Description</span>
<p class="slds-p-top_x-small">Let&#x27;s discuss the 2017 product roadmap and address any questions</p>
</div>
</article>
</div>
</div>
</div>
</li>
</ul>