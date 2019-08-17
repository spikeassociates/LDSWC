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
<script>
if (typeof window.ldswcproperties=='undefined') {
	window.ldswcproperties = {};
}
</script>

<script type="module" src="./include/ldswc/ClickOutside/ClickOutside.js"></script>
<script type="module" src="./include/ldswc/Icon/Icon.js"></script>
<script type="module" src="./include/ldswc/Icon/ScoreIcon.js"></script>
<script type="module" src="./include/ldswc/Icon/StrengthIcon.js"></script>
<script type="module" src="./include/ldswc/Icon/EqIcon.js"></script>
<script type="module" src="./include/ldswc/Spinner/index.js"></script>
<script type="module" src="./include/ldswc/Button/Base/Button.js"></script>
<script type="module" src="./include/ldswc/Button/Base/ButtonIcon.js"></script>
<script type="module" src="./include/ldswc/Button/IconButtons/IconButton.js"></script>
<script type="module" src="./include/ldswc/Button/IconButtons/StatefulIconButton.js"></script>
<script type="module" src="./include/ldswc/Button/FormButtons/CheckboxButton.js"></script>
<script type="module" src="./include/ldswc/Button/ButtonGroups/ButtonGroup.js"></script>
<script type="module" src="./include/ldswc/Badge/Badge.js"></script>
<script type="module" src="./include/ldswc/MediaObject/MediaObject.js"></script>
<script type="module" src="./include/ldswc/Timeline/index.js"></script>
<script type="module" src="./include/ldswc/PageHeader/PageHeader.js"></script>
<script type="module" src="./include/ldswc/Accordion/index.js"></script>
<script type="module" src="./include/ldswc/SummaryDetail/index.js"></script>
<script type="module" src="./include/ldswc/Popover/index.js"></script>
<script type="module" src="./include/ldswc/ExpandableSection/index.js"></script>
<script type="module" src="./include/ldswc/Menu/index.js"></script>

<ldswc-pageheader
	title="Lightning Design System web components!!"
	info="This open source project implements a set of LDS web components!"
	icon="opportunity"
	sprite="standard"
></ldswc-pageheader>

<script>
if (window.ldswcproperties.Menu==undefined) {
	window.ldswcproperties.Menu = {};
}
window.ldswcproperties.Menu['renderHeaderMyTestMenu'] = {};
window.ldswcproperties.Menu['renderHeaderMyTestMenu']['renderHeader'] = () => 'my test menu';
window.ldswcproperties.Menu['myToggleFunction'] = {};
window.ldswcproperties.Menu['myToggleFunction']['onToggle'] = () => { console.log('my toggle menu function'); };
window.ldswcproperties.Menu['mySelectFunction'] = {};
window.ldswcproperties.Menu['mySelectFunction']['onSelected'] = () => { console.log('my toggle selected menuitem function'); };
window.ldswcproperties.Menu['testmenu1'] = {};
window.ldswcproperties.Menu['testmenu1'].button = `<ldswc-iconbutton title="Show More" sprite="utility" icon="down" border="filled" aria-haspop="true"></ldswc-iconbutton>`;
</script>

<div class="slds-grid slds-m-around--medium">
<div class="slds-size_9-of-12">
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
<ldswc-button size="large" onclick="alert('first hi');" title="Say first hi"></ldswc-button>
<ldswc-button sprite="standard" icon="search" size="large" onclick="alert('hi');" children="Say hi"></ldswc-button>
<ldswc-button sprite="standard" icon="search" size="large" iconPosition="right" onclick="alert('bye');" children="Say bye"></ldswc-button>
<ldswc-button sprite="standard" icon="search" size="large" iconPosition="right" title="this is a title"></ldswc-button>
<ldswc-buttonicon sprite="standard" icon="account" size="large" ></ldswc-buttonicon>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<ldswc-badge theme="inverse" title="this is assistive" label="Some Badge text"></ldswc-badge>
<ldswc-badge theme="lightest" title="this is assistive" label="Another Badge"></ldswc-badge>
</div>
<div class="slds-size_1-of-12">
<ldswc-menu
		children='[
			{
				"menutype": "subheader",
				"title": "Menu Sub Heading"
			},
			{
				"menutype": "item",
				"title": "menu item 1",
				"href": "javascript:console.log(1)"
			},
			{
				"menutype": "item",
				"title": "menu item 2",
				"href": "javascript:console.log(2)",
				"flavor": "warning",
				"checkbox": "true",
				"leftIconicon": "success",
				"leftIconflavor": "inverse",
				"selected": "true",
				"rightIconicon": "settings"
			},
			{
				"menutype": "item",
				"title": "menu item 3",
				"href": "javascript:console.log(3)",
				"checkbox": "true",
				"leftIconicon": "success"
			}
		]'
		renderHeader='renderHeaderMyTestMenu'
		onToggle='myToggleFunction'
		button="testmenu1"
		toggleOnHover
	></ldswc-menu>
</div>
<div class="slds-size_1-of-12">
<ldswc-menu
		children='[
			{
				"menutype": "subheader",
				"title": "Menu Sub Heading"
			},
			{
				"menutype": "item",
				"title": "menu item 1"
			},
			{
				"menutype": "item",
				"title": "menu item 2",
				"flavor": "warning",
				"checkbox": "true",
				"leftIconicon": "success",
				"leftIconflavor": "inverse",
				"selected": "true",
				"onSelected": "mySelectFunction",
				"rightIconicon": "settings"
			},
			{
				"menutype": "item",
				"title": "menu item 3",
				"checkbox": "true",
				"leftIconicon": "success"
			}
		]'
		renderHeader='renderHeaderMyTestMenu'
		button="testmenu1"
		Open
		nubbin
		position="bottom-right-corner"
		closeOnClickOutside
	></ldswc-menu>
</div>
</div>

<div class="slds-grid slds-m-around--medium">
	<div class="slds-size_2-of-12">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"flavor":"neutral",
					"title":"Edit",
					"href":"javascript:alert(1);"
				},
				{
					"id":"btgrp2",
					"flavor":"destructive",
					"title":"Delete",
					"href":"javascript:alert(2);"
				},
				{
					"id":"btgrp3",
					"flavor":"success",
					"title":"Refresh",
					"href":"javascript:alert(3);"
				}
			]'
		></ldswc-buttongroup>
	</div>
	<div class="slds-size_2-of-12">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"flavor":"neutral",
					"title":"Edit",
					"href":"javascript:alert(1);"
				},
				{
					"id":"btgrp2",
					"flavor":"destructive",
					"title":"Delete",
					"href":"javascript:alert(2);"
				},
				{
					"id":"btgrp3",
					"flavor":"success",
					"title":"Refresh",
					"href":"javascript:alert(3);"
				}
			]'
			row
		></ldswc-buttongroup>
	</div>
	<div class="slds-size_2-of-12">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"flavor":"neutral",
					"title":"Edit",
					"href":"javascript:alert(1);"
				},
				{
					"id":"btgrp2",
					"flavor":"destructive",
					"title":"Delete",
					"href":"javascript:alert(2);"
				},
				{
					"id":"btgrp3",
					"flavor":"success",
					"title":"Refresh",
					"href":"javascript:alert(3);"
				}
			]'
			list row
		></ldswc-buttongroup>
	</div>
	<div class="slds-size_3-of-12">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"flavor":"neutral",
					"icon":"edit",
					"iconPosition":"left",
					"iconSize":"small",
					"sprite":"utility",
					"title":"Edit"
				},
				{
					"id":"btgrp2",
					"flavor":"destructive",
					"icon":"delete",
					"iconPosition":"right",
					"iconSize":"x-small",
					"sprite":"utility",
					"title":"Delete"
				},
				{
					"id":"btgrp3",
					"flavor":"success",
					"icon":"refresh",
					"iconPosition":"right",
					"iconSize":"medium",
					"sprite":"utility",
					"title":"Refresh"
				}
			]'
			row
		></ldswc-buttongroup>
	</div>
	<div class="slds-size_3-of-12">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"flavor":"brand",
					"title":"Edit"
				},
				{
					"id":"btgrp2",
					"flavor":"destructive",
					"title":"Delete"
				},
				{
					"id":"btgrp3",
					"flavor":"success",
					"title":"Refresh"
				}
			]'
			overflow
		></ldswc-buttongroup>
	</div>
</div>
<div class="slds-grid slds-m-around--medium">
	<div class="slds-size_2-of-12" style="padding:0.5rem;background:#16325c">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"flavor":"inverse",
					"title":"Edit",
					"href":"javascript:alert(1);"
				},
				{
					"id":"btgrp2",
					"flavor":"inverse",
					"title":"Delete",
					"href":"javascript:alert(2);"
				}
			]'
			overflow
		></ldswc-buttongroup>
	</div>
	<div class="slds-size_1-of-12">
	</div>
	<div class="slds-size_2-of-12">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"flavor":"neutral",
					"icon":"edit",
					"iconPosition":"left",
					"iconSize":"small",
					"sprite":"utility",
					"title":"Edit"
				},
				{
					"id":"btgrp2",
					"flavor":"destructive",
					"icon":"delete",
					"iconPosition":"right",
					"iconSize":"x-small",
					"sprite":"utility",
					"title":"Delete"
				},
				{
					"id":"btgrp3",
					"flavor":"success",
					"icon":"refresh",
					"iconPosition":"right",
					"iconSize":"medium",
					"sprite":"utility",
					"title":"Refresh",
					"more":"true"
				}
			]'
			row icons
		></ldswc-buttongroup>
	</div>
	<div class="slds-size_2-of-12">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"icon":"edit",
					"iconPosition":"left",
					"iconSize":"small",
					"sprite":"utility",
					"title":"Edit"
				},
				{
					"id":"btgrp2",
					"icon":"delete",
					"iconPosition":"right",
					"iconSize":"x-small",
					"sprite":"utility",
					"title":"Delete"
				},
				{
					"id":"btgrp3",
					"flavor":"success",
					"icon":"refresh",
					"iconPosition":"right",
					"iconSize":"medium",
					"sprite":"utility",
					"title":"Refresh",
					"more":"true"
				}
			]'
			row icons
		></ldswc-buttongroup>
	</div>
	<div class="slds-size_2-of-12" style="padding:0.5rem;background:#16325c">
		<ldswc-buttongroup
			children='[
				{
					"id":"btgrp1",
					"flavor":"inverse",
					"icon":"edit",
					"iconPosition":"left",
					"iconSize":"small",
					"sprite":"utility",
					"title":"Edit"
				},
				{
					"id":"btgrp2",
					"flavor":"inverse",
					"icon":"delete",
					"iconPosition":"right",
					"iconSize":"x-small",
					"sprite":"utility",
					"title":"Delete"
				},
				{
					"id":"btgrp3",
					"flavor":"inverse",
					"icon":"refresh",
					"iconPosition":"right",
					"iconSize":"medium",
					"sprite":"utility",
					"title":"Refresh",
					"more":"true"
				}
			]'
			row icons
		></ldswc-buttongroup>
	</div>
	<div class="slds-size_2-of-12">
	<ldswc-clickoutside onclickoutside='ClickOutsideMyTestDiv' handleEsc style="padding:15px;"><div style="padding:0.5rem;background:#16325c;color:white;">Click outside of this span</div></ldswc-clickoutside>
	</div>
</div>
<div class="slds-grid slds-m-around--medium">
	<div class="slds-size_1-of-12">
	<table><tr>
	<td><ldswc-checkboxbutton id="mimi1" label="checkboxbutton" ></ldswc-checkboxbutton></td>
	<td><ldswc-checkboxbutton id="mimi2" label="checkboxbutton" checked></ldswc-checkboxbutton></td>
	</tr></table>
	</div>
	<div class="slds-size_1-of-12">
	<ldswc-statefuliconbutton icon="like" sprite="utility" size="small" onClick="console.log('like button clicked');"></ldswc-statefuliconbutton>
	<ldswc-statefuliconbutton icon="like" sprite="utility" size="small" selected></ldswc-statefuliconbutton>
	</div>
	<div class="slds-size_1-of-12">
	<ldswc-iconbutton more title="Settings" sprite="utility" icon="settings"></ldswc-iconbutton>
	<ldswc-iconbutton more title="search" sprite="standard" icon="search"></ldswc-iconbutton>
	</div>
	<div class="slds-size_1-of-12" style="padding:0.1rem;background-color:#16325C">
	<ldswc-iconbutton flavor="inverse" more title="Settings" sprite="utility" icon="settings"></ldswc-iconbutton>
	</div>
	<div class="slds-size_4-of-12">
	<ldswc-summarydetail isOpen title="Summary Title" summary="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum ma"></ldswc-summarydetail>
	</div>
	<div class="slds-size_4-of-12">
	<ldswc-summarydetail title='<div class="slds-grid"><h3 class="slds-text-heading_small slds-truncate slds-p-right_small" title="summary title">Summary Title</h3><ldswc-badge theme="lightest" title="this is assistive" label=" In Progress "></ldswc-badge></div><p>Additional information about this step</p>' summary="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum ma"></ldswc-summarydetail>
	</div>
</div>

<div class="slds-grid slds-m-around--medium">
	<div class="slds-size_4-of-12">
		<ldswc-popover open header="This is the Header" footer="This is the footer" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></ldswc-popover>
	</div>
	<div class="slds-size_4-of-12">
		<ldswc-popover id="popovermiddle" onClose="popoverclosefunction" open closeable nubbin="right-top" customHeaderTheme="warning" header="This is the Header" footer="This is the footer" body='<div class="slds-text-longform"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>'></ldswc-popover>
	</div>
	<div class="slds-size_4-of-12">
		<ldswc-popover open closeable nubbin="left" customHeaderTheme="success" header='<span><h2 class="slds-text-heading_medium">Manage your channels</h2></span>' footer='<div class="slds-grid slds-grid_vertical-align-center"><span class="slds-text-title">Step 2 of 4</span><button class="slds-button slds-button_brand slds-col_bump-left">Next</button></div>' body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></ldswc-popover>
	</div>
</div>

<div class="slds-grid slds-m-around--medium">
	<div class="slds-size_4-of-12">
		<ldswc-expandablesection open title="This is the Header" body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat mi"></ldswc-expandablesection>
	</div>
	<div class="slds-size_4-of-12">
		<ldswc-expandablesection title="This is the Header" body='<div class="slds-text-longform"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>'></ldswc-expandablesection>
	</div>
	<div class="slds-size_4-of-12">
		<ldswc-expandablesection open uncollapsable title='<span><h2 class="slds-text-heading_medium">Manage your channels</h2></span>' body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></ldswc-expandablesection>
	</div>
</div>

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
</ldswc-mediaobject>
</div>
</div>

<br>
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
ldswcproperties.popover = {};
ldswcproperties.popover.popovermiddle = {};
ldswcproperties.popover.popovermiddle.popoverclosefunction = function(e) { console.log(e); alert('popover close click on '+e.target.id)};
if (window.ldswcproperties.ClickOutside==undefined) {
	window.ldswcproperties.ClickOutside = {};
}
window.ldswcproperties.ClickOutside['ClickOutsideMyTestDiv'] = {};
window.ldswcproperties.ClickOutside['ClickOutsideMyTestDiv']['onclickoutside'] = function () {alert('you clicked outside'); };
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
