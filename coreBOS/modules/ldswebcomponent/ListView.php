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

<script>
if (window.ldswcproperties.Menu==undefined) {
	window.ldswcproperties.Menu = {};
}
window.ldswcproperties.Menu['mySelectFunction'] = {};
window.ldswcproperties.Menu['mySelectFunction']['onSelected'] = () => { console.log('my toggle selected menuitem function'); };
window.ldswcproperties.Menu['testmenu1'] = {};
window.ldswcproperties.Menu['testmenu1']['button'] = `<ldswc-iconbutton title="Show More" sprite="utility" icon="down" border="filled" aria-haspop="true"></ldswc-iconbutton>`;
window.ldswcproperties.Menu['testmenu1']['renderHeader'] = () => 'my test menu';
window.ldswcproperties.Menu['testmenu1']['onToggle'] = () => { console.log('my toggle menu function'); };
</script>

<div class="slds-grid slds-m-around--medium">
<div class="slds-size_1-of-12">
<?php include 'modules/ldswebcomponent/ldstestmenu.php'; ?>
</div>
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
		renderHeader='testmenu1'
		onToggle='testmenu1'
		button="testmenu1"
		toggleOnHover
		position="bottom"
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
		id="secondmenu"
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
		<ldswc-expandablesection open title="This is the Header" >
		<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat mi</span>
		<ldswc-button sprite="standard" icon="search" size="large" iconPosition="left" onclick="alert('Expandable Section 1');" children="Expandable Section 1"></ldswc-button>
		</ldswc-expandablesection>
	</div>
	<div class="slds-size_4-of-12">
		<ldswc-expandablesection title="This is the Header" >
			<div class="slds-text-longform">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<div class="slds-page-header slds-page-header_related-list">
  <div class="slds-page-header__row">
    <div class="slds-page-header__col-title">
      <div class="slds-media">
        <div class="slds-media__body" style="text-align:center;">
          <div class="slds-page-header__name">
            <div class="slds-page-header__name-title">
              <h1>
                <span class="slds-page-header__title slds-truncate">Expandable Content</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</ldswc-expandablesection>
	</div>
	<div class="slds-size_4-of-12">
		<ldswc-expandablesection open uncollapsable title='<span><h2 class="slds-text-heading_medium">Manage your channels</h2></span>' >
		<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
		</ldswc-expandablesection>
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
ldswcproperties.popover = {};
ldswcproperties.popover.popovermiddle = {};
ldswcproperties.popover.popovermiddle.popoverclosefunction = function(e) { console.log(e); alert('popover close click on '+e.target.id)};
document.getElementById('secondmenu').renderHeader=() => { 'direct test' };
</script>
