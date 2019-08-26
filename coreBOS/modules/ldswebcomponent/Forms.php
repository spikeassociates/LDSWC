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
		<ldswc-slider label="move around" id="sld1" min=0 max=20 step=2 value="10"></ldswc-slider>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-slider id="sld2" size="x-small" label="this one is small"></ldswc-slider>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-slider label="this one is diabled" disabled min=0 max=20 step=2 value="15"></ldswc-slider>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-slider error="this one has a wrong value" label="incorrect value" min=0 max=20 step=2 value="15"></ldswc-slider>
	</div>
</div>
<div class="slds-grid slds-gutters">
	<div class="slds-col slds-size_2-of-12 slds-m-left_large">
		<ldswc-slider label="move around" id="sldv" vertical min=0 max=10 step=2 value="6" whenchange="console.log(this.value)" size="x-small"></ldswc-slider>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-textarea label="required and on change" required whenchange="console.log('TA change');" placeholder="place holder"></ldswc-textarea>
		<br><br>
		<ldswc-textarea label="disabled" required disabled value="this is the value"></ldswc-textarea>
	</div>
	<div class="slds-col slds-size_2-of-12">
		<ldswc-textarea label="readonly" readonly value="this is the value" ></ldswc-textarea>
		<br><br>
		<ldswc-textarea label="error state" id="taerror" error="this one is incorrect"></ldswc-textarea>
	</div>
	<div class="slds-col slds-size_3-of-12">
		<ldswc-select label="first picklist" whenchange="console.log(this);" required>
		<option value="sop1">SOP1</option>
		<option value="sop2">SOP2</option>
		<option value="sop3">SOP3</option>
		<option value="sop4">SOP4</option>
		</ldswc-select>
		<br><br>
		<ldswc-select label="second picklist" required disabled>
		<option value="sop1">SOP1</option>
		<option value="sop2">SOP2</option>
		<option value="sop3" selected>SOP3</option>
		<option value="sop4">SOP4</option>
		</ldswc-select>
	</div>
	<div class="slds-col slds-size_3-of-12">
		<ldswc-select label="error picklist" error="this one is wrong">
		<option value="sop1">SOP1</option>
		<option value="sop2">SOP2</option>
		<option value="sop3">SOP3</option>
		<option value="sop4">SOP4</option>
		</ldswc-select>
		<br>
		<ldswc-select label="multiple picklist" multiple>
		<option value="sop1">SOP1</option>
		<option value="sop2" selected>SOP2</option>
		<option value="sop3">SOP3</option>
		<option value="sop4" selected>SOP4</option>
		</ldswc-select>
	</div>
</div>
<div class="slds-grid slds-gutters slds-m-top_medium">
	<div class="slds-col slds-size_3-of-12">
	<ldswc-radio id="rd1" name="testradio" required whenChange="console.log(this);" label="Radio Label Required"></ldswc-radio><br>
	<ldswc-radio id="rd2" name="testradio" checked label="Radio Label Checked"></ldswc-radio><br>
	<ldswc-radio id="rd3" name="testradio" disabled label="Radio Label disabled"></ldswc-radio><br>
	<ldswc-radio id="rd4" name="testradio" error="wrong" label="Radio Label Error"></ldswc-radio><br>
	<ldswc-radiogroup
		children='[
			{
				"id":"rdg1",
				"label":"Radio Label One"
			},
			{
				"id":"rdg2",
				"disabled":true,
				"label":"Radio Label Disabled"
			},
			{
				"id":"rdg3",
				"error":"error",
				"checked":true,
				"label":"Radio Label Error"
			},
			{
				"id":"rdg4",
				"label":"Radio Label Four"
			}
		]'
		whenChange="console.log('RG');"
		name="testradiog"
		label="Radio Group Label"
	></ldswc-radiogroup>
	</div>
	<div class="slds-col slds-size_3-of-12">
	<ldswc-checkbox id="cb1" name="testradio" required whenChange="console.log(this);" label="Checkbox Label Required"></ldswc-checkbox><br>
	<ldswc-checkbox id="cb2" name="testradio" checked label="Checkbox Label Checked"></ldswc-checkbox><br>
	<ldswc-checkbox id="cb3" name="testradio" disabled label="Checkbox Label disabled"></ldswc-checkbox><br>
	<ldswc-checkbox id="cb4" name="testradio" error="wrong" label="Checkbox Label Error"></ldswc-checkbox><br>
	<ldswc-checkboxgroup
		children='[
			{
				"id":"cbg1",
				"label":"Checkbox Label one"
			},
			{
				"id":"cbg2",
				"disabled":true,
				"label":"Checkbox Label disabled"
			},
			{
				"id":"cbg3",
				"error":"error",
				"checked":true,
				"label":"Checkbox Label Error/checked"
			},
			{
				"id":"cbg4",
				"label":"Checkbox Label four"
			}
		]'
		whenChange="console.log('RG');"
		label="Group of Checkboxes"
	></ldswc-checkboxgroup>
	</div>
</div>
