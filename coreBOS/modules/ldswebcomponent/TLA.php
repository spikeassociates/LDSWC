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
include 'modules/ldswebcomponent/ldsincs.php';
?>

<div class="slds-grid slds-m-around--medium">
<div class="slds-size_1-of-12">
<?php include 'modules/ldswebcomponent/ldstestmenu.php'; ?>
</div>
</div>

<script>
ldswcproperties.timeline = {};
ldswcproperties.timeline.taskItemBase1 = {};
ldswcproperties.timeline.taskItemBase1.contentstrigger = `<div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
		<div class="slds-checkbox">
			<input type="checkbox" name="options" id="checkbox-16" value="checkbox-16" />
			<label class="slds-checkbox__label" for="checkbox-16">
				<span class="slds-checkbox_faux"></span>
				<span class="slds-form-element__label slds-assistive-text">
					Mark Review proposals for EBC deck with larger team and have marketing review this complete
				</span>
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
	</div>`;
ldswcproperties.timeline.taskItemBase1.contentstimeline = `<p class="slds-m-horizontal_xx-small">
	<a href="javascript:void(0);">You</a> created a task with
	<a href="javascript:void(0);">Charlie Gomez</a>
</p>`;
ldswcproperties.timeline.taskItemBase1.contentsdetails = `<div>
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
</div><!-- ./timeline_details -->`;
ldswcproperties.timeline.taskItemBase2 = {};
ldswcproperties.timeline.taskItemBase2.contentstrigger = `<div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
<h3 class="slds-truncate" title="Mobile conversation on Monday">
<a href="javascript:void(0);">
<strong>Mobile conversation on Monday</strong>
</a>
</h3>
</div>`;
ldswcproperties.timeline.taskItemBase2.contentstimeline = `<p class="slds-m-horizontal_xx-small">
	<a href="javascript:void(0);">You</a> logged a call with
	<a href="javascript:void(0);">Adam Chan</a>
</p>`;
ldswcproperties.timeline.taskItemBase2.contentsdetails = `<article class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small" id="call-item-base" aria-hidden="true">
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
</article>`;
ldswcproperties.timeline.taskItemBase3 = {};
ldswcproperties.timeline.taskItemBase3.contentstrigger = `<div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
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
</div></div>`;
ldswcproperties.timeline.taskItemBase3.contentstimeline = `<p class="slds-m-horizontal_xx-small">
<a href="javascript:void(0);">You</a> emailed
<a href="javascript:void(0);">Lea Chan</a>
</p>`;
ldswcproperties.timeline.taskItemBase3.contentsdetails = `<article class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small" id="email-item-base" aria-hidden="true">
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
</article>`;
ldswcproperties.timeline.taskItemBase4 = {};
ldswcproperties.timeline.taskItemBase4.contentstrigger = `<div class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
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
</div>`;
ldswcproperties.timeline.taskItemBase4.contentstimeline = `<p class="slds-m-horizontal_xx-small">
<a href="javascript:void(0);">You</a> created an event with
<a href="javascript:void(0);">Aida Lee</a> and 5 others</p>`;
ldswcproperties.timeline.taskItemBase4.contentsdetails = `<article class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small" id="event-item-base" aria-hidden="true">
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
</article>`;
</script>
<ldswc-timeline
	contents='[
	{
		"id":"taskItemBase1",
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
		"contentstrigger":"taskItemBase1",
		"contentstimeline":"taskItemBase1",
		"contentsdetails":"taskItemBase1"
	},
	{
		"id":"taskItemBase2",
		"title":"Task 1 Title",
		"date":"10:00am | 3/23/17",
		"className":"slds-timeline__item_call",
		"buttonTitle":"Toggle details for Mobile conversation on Monday",
		"buttonFlavor":"icon",
		"buttonSprite":"utility",
		"buttonIcon":"switch",
		"iconTitle":"call",
		"iconClasses":"slds-icon-standard-log-a-call",
		"iconAssetPath":"include/LD/assets/icons/",
		"iconSprite":"standard",
		"iconIcon":"task",
		"actionButtonTitle":"More Options for this item",
		"actionButtonClasses":"slds-button_icon-border-filled slds-button_icon-x-small",
		"actionButtonFlavor":"icon",
		"actionButtonSprite":"utility",
		"actionButtonIcon":"down",
		"contentstrigger":"taskItemBase2",
		"contentstimeline":"taskItemBase2",
		"contentsdetails":"taskItemBase2"
	},
	{
		"id":"taskItemBase3",
		"title":"Task 1 Title",
		"date":"10:00am | 3/24/17",
		"className":"slds-timeline__item_email",
		"buttonTitle":"Toggle details for Re: Mobile conversation on Monday with the new global team",
		"buttonFlavor":"icon",
		"buttonSprite":"utility",
		"buttonIcon":"switch",
		"iconTitle":"email",
		"iconClasses":"slds-icon-standard-email",
		"iconAssetPath":"include/LD/assets/icons/",
		"iconSprite":"standard",
		"iconIcon":"email",
		"actionButtonTitle":"More Options for this item",
		"actionButtonClasses":"slds-button_icon-border-filled slds-button_icon-x-small",
		"actionButtonFlavor":"icon",
		"actionButtonSprite":"utility",
		"actionButtonIcon":"down",
		"contentstrigger":"taskItemBase3",
		"contentstimeline":"taskItemBase3",
		"contentsdetails":"taskItemBase3"
	},
	{
		"id":"taskItemBase4",
		"title":"event",
		"date":"10:30am | 3/24/17",
		"className":"slds-timeline__item_event",
		"buttonTitle":"Toggle details for EBC Follow up call",
		"buttonFlavor":"icon",
		"buttonSprite":"utility",
		"buttonIcon":"switch",
		"iconTitle":"event",
		"iconClasses":"slds-icon-standard-event",
		"iconAssetPath":"include/LD/assets/icons/",
		"iconSprite":"standard",
		"iconIcon":"event",
		"actionButtonTitle":"More Options for this item",
		"actionButtonClasses":"slds-button_icon-border-filled slds-button_icon-x-small",
		"actionButtonFlavor":"icon",
		"actionButtonSprite":"utility",
		"actionButtonIcon":"down",
		"contentstrigger":"taskItemBase4",
		"contentstimeline":"taskItemBase4",
		"contentsdetails":"taskItemBase4"
	}
	]'
></ldswc-timeline>

<br><br>
<hr>
<br><br>
<script>
ldswcproperties.accordion = {};
ldswcproperties.accordion.accstory1 = {};
ldswcproperties.accordion.accstory1.sumclickfunction = function(e) { console.log(e); alert('summary more info click on '+e.target.id)};
</script>
<div class="slds-grid slds-gutters">
<div class="slds-col slds-size_6-of-12">
<ldswc-accordion
	id="accstory1"
	children='[
	{
		"id":"accsec1",
		"summary":"Accordion1 summary",
		"isOpen":1,
		"isFirst":1,
		"children":"acc1contents"
	},
	{
		"id":"accsec2",
		"summary":"Accordion2 summary",
		"isOpen":0,
		"isFirst":0,
		"children":"acc2contents"
	},
	{
		"id":"accsec3",
		"summary":"Accordion3 summary",
		"isOpen":0,
		"isFirst":0,
		"children":"acc3contents"
	}
	]'
	multiple
	styled
	summaryOnClick="sumclickfunction"
></ldswc-accordion>
</div>

<div class="slds-col slds-size_6-of-12">
<ldswc-accordion
	id="accstory2"
	children='[
	{
		"id":"accsec1",
		"summary":"Accordion1 summary",
		"isOpen":1,
		"isFirst":1,
		"children":"<b>Accordion Section 1</b>"
	},
	{
		"id":"accsec2",
		"summary":"Accordion2 summary",
		"isOpen":0,
		"isFirst":0,
		"children":"<b>Accordion Section 2</b>"
	},
	{
		"id":"accsec3",
		"summary":"Accordion3 summary",
		"isOpen":0,
		"isFirst":0,
		"children":"<b>Accordion Section 3</b>"
	}
	]'
></ldswc-accordion>
</div>

</div>
