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
<div class="slds-grid slds-m-around--medium">
	<div class="slds-size_3-of-12">
		<ldswc-tabs>
			<span slot="tablinks">
				<ldswc-tablink id="tablnk1" title="title1" icon="rules" sprite="utility" iconclass="slds-icon-standard-flow"><span>Item One</span></ldswc-tablink>
				<ldswc-tablink id="tablnk2" title="title2" isActive><span>Item Two</span></ldswc-tablink>
				<ldswc-tablink id="tablnk3" title="title3"><span>Item Three</span></ldswc-tablink>
			</span>
			<span slot="tabpanels">
				<ldswc-tab id="tablnk1_panel"><span>Item One Content</span></ldswc-tab>
				<ldswc-tab id="tablnk2_panel" isActive><span>Item Two Content</span></ldswc-tab>
				<ldswc-tab id="tablnk3_panel"><span>Item Three Content</span></ldswc-tab>
				</span>
		</ldswc-tabs>
	</div>
	<div class="slds-size_1-of-12"></div>
	<div class="slds-size_3-of-12">
		<ldswc-tabs size="medium">
			<span slot="tablinks">
				<ldswc-tablink id="tablnk12" title="title1" flavor="error"><span>Item One</span></ldswc-tablink>
				<ldswc-tablink id="tablnk22" title="title1" icon="opportunity" sprite="standard"><span>Item Two</span></ldswc-tablink>
				<ldswc-tablink id="tablnk32" title="title1" isActive><span>Item Three</span></ldswc-tablink>
			</span>
			<span slot="tabpanels">
				<ldswc-tab id="tablnk12_panel" ><span>Item One Content</span></ldswc-tab>
				<ldswc-tab id="tablnk22_panel" ><span>Item Two Content</span></ldswc-tab>
				<ldswc-tab id="tablnk32_panel" isActive ><span>Item Three Content</span></ldswc-tab>
			</span>
		</ldswc-tabs>
	</div>
	<div class="slds-size_1-of-12"></div>
	<div class="slds-size_3-of-12">
		<ldswc-tabs>
			<span slot="tablinks">
				<ldswc-tablink id="tablnk13" title="title1" scoped icon="rules" sprite="utility" flavor="success"><span>Item One</span></ldswc-tablink>
				<ldswc-tablink id="tablnk23" title="title1" scoped><span>Item Two</span></ldswc-tablink>
				<ldswc-tablink id="tablnk33" title="title1" scoped isActive><span>Item Three</span></ldswc-tablink>
			</span>
			<span slot="tabpanels">
				<ldswc-tab id="tablnk13_panel" scoped ><span>Item One Content</span></ldswc-tab>
				<ldswc-tab id="tablnk23_panel" scoped ><span>Item Two Content</span></ldswc-tab>
				<ldswc-tab id="tablnk33_panel" scoped isActive ><span>Item Three Content</span></ldswc-tab>
			</span>
		</ldswc-tabs>
	</div>
</div>
<div class="slds-grid slds-m-around--medium">
	<div class="slds-size_3-of-12">
		<ldswc-tabs>
			<span slot="tablinks">
				<ldswc-tablink id="tablnk1n" title="title1" ><span>Item One</span></ldswc-tablink>
				<ldswc-tablink id="tablnk2n" title="title1" icon="opportunity" sprite="standard" isActive><span>Item Two</span></ldswc-tablink>
			</span>
			<span slot="tabpanels">
				<ldswc-tab id="tablnk1n_panel" ><span>Item One Content</span></ldswc-tab>
				<ldswc-tab id="tablnk2n_panel" isActive>
					<ldswc-tabs>
						<span slot="tablinks">
							<ldswc-tablink id="tablnk1t" title="title1" scoped ><span>Item Two Lnk One</span></ldswc-tablink>
							<ldswc-tablink id="tablnk2t" title="title1" scoped icon="opportunity" sprite="standard" isActive><span>Item Two Lnk Two</span></ldswc-tablink>
						</span>
						<span slot="tabpanels">
							<ldswc-tab id="tablnk1t_panel" scoped ><span>Item Two Content One</span></ldswc-tab>
							<ldswc-tab id="tablnk2t_panel" scoped isActive><span>Item Two Content Two</span></ldswc-tab>
						</span>
					</ldswc-tabs>
				</ldswc-tab>
			</span>
		</ldswc-tabs>
	</div>
</div>
