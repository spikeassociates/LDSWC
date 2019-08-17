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
	<div class="slds-size_4-of-12">
	<?php include 'modules/ldswebcomponent/ldstestmenu.php'; ?>
	</div>
	<div class="slds-size_8-of-12">
		<ldswc-clickoutside onclickoutside='ClickOutsideMyTestDiv' handleEsc style="padding:15px;"><div style="padding:0.5rem;background:#16325c;color:white;">Click outside of this span</div></ldswc-clickoutside>
	</div>
</div>
<script>
if (window.ldswcproperties.ClickOutside==undefined) {
	window.ldswcproperties.ClickOutside = {};
}
window.ldswcproperties.ClickOutside['ClickOutsideMyTestDiv'] = {};
window.ldswcproperties.ClickOutside['ClickOutsideMyTestDiv']['onclickoutside'] = function () {alert('you clicked outside'); };
</script>
