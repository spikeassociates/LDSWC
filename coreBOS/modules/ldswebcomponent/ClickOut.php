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
<script type="module" src="./include/ldswc/lightdomslot/lightdomslot.js"></script>

<div class="slds-grid slds-m-around_medium">
	<div class="slds-size_4-of-12">
	<?php include 'modules/ldswebcomponent/ldstestmenu.php'; ?>
	</div>
	<div class="slds-size_8-of-12">
		<ldswc-clickoutside onclickoutside='ClickOutsideMyTestDiv' handleEsc style="padding:15px;">
			<div style="padding:0.5rem;background:#16325c;color:white;">Click outside of this span</div>
		</ldswc-clickoutside>
	</div>
</div>
<div class="slds-page-header slds-page-header_related-list">
  <div class="slds-page-header__row">
    <div class="slds-page-header__col-title">
      <div class="slds-media">
        <div class="slds-media__body">
          <div class="slds-page-header__name">
            <div class="slds-page-header__name-title">
              <h1>
                <span class="slds-page-header__title slds-truncate" title="lightDOM Slot">lightDOM Web Component with support for SLOT!!</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="slds-grid slds-m-around_large">
	<div class="slds-size_3-of-12">
	The <b>lightDOMSlot component</b> has 4 different layouts depending on the value of the "structure" attribute. Using this same HTML with all four values we get four different results. Notice the HTML rendered for the FLAT, it looks the same but it isn't.
	</div>
	<div class="slds-size_1-of-12"></div>
	<div class="slds-size_5-of-12">
		&lt;lightdom-slot structure="*"&gt;<br>
		&lt;div slot="before"&gt;lightdom Content Before&lt;/div&gt;<br>
		&lt;p class="slds-border_top slds-border_bottom"&gt;Bordered text&lt;/p&gt;<br>
		&lt;p class="slds-m-around_medium"&gt;margin text&lt;/p&gt;<br>
		&lt;div slot="after"&gt;lightdom Content After&lt;/div&gt;<br>
		&lt;/lightdom-slot&gt;<br>
	</div>
</div>

<div class="slds-page-header slds-page-header_related-list">
  <div class="slds-page-header__row">
    <div class="slds-page-header__col-title">
      <div class="slds-media">
        <div class="slds-media__body" style="text-align:center;">
          <div class="slds-page-header__name">
            <div class="slds-page-header__name-title">
              <h1>
                <span class="slds-page-header__title slds-truncate">THIS</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="slds-grid slds-m-around_large">
	<div class="slds-size_3-of-12" style="text-align:center;font-weight:bold;">unnamed</div>
	<div class="slds-size_3-of-12" style="text-align:center;font-weight:bold;">named</div>
	<div class="slds-size_3-of-12" style="text-align:center;font-weight:bold;">inverse</div>
	<div class="slds-size_3-of-12" style="text-align:center;font-weight:bold;">flat</div>
</div>

<div class="slds-grid slds-m-around_large">
	<div class="slds-size_3-of-12">
		&lt;div&gt;<br>
			&lt;p name="before"&gt;DIV Before&lt;/p&gt;<br>
			&lt;div&gt;Main Content - will show up before children&lt;/div&gt;<br>
			&lt;slot&gt;&lt;/slot&gt;<br>
			&lt;p name="after"&gt;DIV After&lt;/p&gt;<br>
		&lt;/div&gt;<br>
	</div>
	<div class="slds-size_3-of-12">
		&lt;div&gt;<br>
			&lt;slot name="before"&gt;DIV Before&lt;/slot&gt;<br>
			&lt;div&gt;Main Content - will show up before children&lt;/div&gt;<br>
			&lt;slot&gt;&lt;/slot&gt;<br>
			&lt;slot name="after"&gt;DIV After&lt;/slot&gt;<br>
		&lt;/div&gt;<br>
	</div>
	<div class="slds-size_3-of-12">
		&lt;div&gt;<br>
			&lt;slot name="after"&gt;DIV After&lt;/slot&gt;<br>
			&lt;div&gt;Main Content - will show up before children&lt;/div&gt;<br>
			&lt;slot&gt;&lt;/slot&gt;<br>
			&lt;slot name="before"&gt;DIV Before&lt;/slot&gt;<br>
		&lt;/div&gt;<br>
	</div>
	<div class="slds-size_3-of-12">
		&lt;slot name="before"&gt;DIV Before&lt;/slot&gt;<br>
		&lt;div&gt;Main Content - will show up before children&lt;/div&gt;<br>
		&lt;slot&gt;&lt;/slot&gt;<br>
		&lt;slot name="after"&gt;DIV After&lt;/slot&gt;<br>
	</div>
</div>

<div class="slds-page-header slds-page-header_related-list">
  <div class="slds-page-header__row">
    <div class="slds-page-header__col-title">
      <div class="slds-media">
        <div class="slds-media__body" style="text-align:center;">
          <div class="slds-page-header__name">
            <div class="slds-page-header__name-title">
              <h1>
                <span class="slds-page-header__title slds-truncate" title="BECOMES">BECOMES</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="slds-grid slds-m-around_large">
	<div class="slds-size_3-of-12">
		<lightdom-slot structure="unnamed">
			<div slot="before">lightdom Content Before</div>
			<p class="slds-border_top slds-border_bottom">Bordered text</p>
			<p class="slds-m-around_medium">margin text</p>
			<div slot="after">lightdom Content After</div>
		</lightdom-slot>
	</div>
	<div class="slds-size_3-of-12">
		<lightdom-slot structure="named">
			<div slot="before">lightdom Content Before</div>
			<p class="slds-border_top slds-border_bottom">Bordered text</p>
			<p class="slds-m-around_medium">margin text</p>
			<div slot="after">lightdom Content After</div>
		</lightdom-slot>
	</div>
	<div class="slds-size_3-of-12">
		<lightdom-slot structure="inverse">
			<div slot="before">lightdom Content Before</div>
			<p class="slds-border_top slds-border_bottom">Bordered text</p>
			<p class="slds-m-around_medium">margin text</p>
			<div slot="after">lightdom Content After</div>
		</lightdom-slot>
	</div>
	<div class="slds-size_3-of-12">
		<lightdom-slot structure="flat">
			<div slot="before">lightdom Content Before</div>
			<p class="slds-border_top slds-border_bottom">Bordered text</p>
			<p class="slds-m-around_medium">margin text</p>
			<div slot="after">lightdom Content After</div>
		</lightdom-slot>
	</div>
</div>
<script>
if (window.ldswcproperties.ClickOutside==undefined) {
	window.ldswcproperties.ClickOutside = {};
}
window.ldswcproperties.ClickOutside['ClickOutsideMyTestDiv'] = {};
window.ldswcproperties.ClickOutside['ClickOutsideMyTestDiv']['onclickoutside'] = function () {alert('you clicked outside'); };
</script>
