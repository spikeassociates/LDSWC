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
function input1Change(e) {
	console.log(e);
}
function onkp(e) {
	if (e.key) {
		console.log(e.key);
	}
}
</script>
<div class="slds-grid slds-m-around--medium">
	<div class="slds-size_1-of-12">
	<?php include 'modules/ldswebcomponent/ldstestmenu.php'; ?>
	</div>
</div>

<div class="slds-grid slds-gutters">
	<div class="slds-col slds-size_2-of-12">
		<ldswc-input id="input1" placeholder="place holder" label="this in input 1" whenchange="console.log('change');" whenfocus="console.log('focus');" whenkeypress="onkp(e);"></ldswc-input>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-input value="this value" label="this is static=readonly" isStatic></ldswc-input>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-input label="this in input 3" hidelabel iconleft="search" iconright="settings" iconRightOnClick="input1Change(e);" value="this one has a hidden label"></ldswc-input>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-input erroricon error="error msg" value="this value" showspinner label="input error"></ldswc-input>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-input type="password" value="this value" label="put your password"></ldswc-input>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-input id="hiddenone" type="hidden" label="this one is hidden" value="this value" required></ldswc-input>
	</div>
</div>
<div class="slds-grid slds-gutters">
	<div class="slds-col slds-size_2-of-12">
		<ldswc-input label="this is bare" value="this is bare" bare></ldswc-input>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-input label="this is disabled" value="this is disabled" disabled></ldswc-input>
	</div>
	<div class="slds-col slds-size_2-of-12">
	</div>
	<div class="slds-col slds-size_2-of-12">
	</div>
	<div class="slds-col slds-size_2-of-12">
	</div>
	<div class="slds-col slds-size_2-of-12">
	</div>
</div>
