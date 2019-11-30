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

<div class="slds-text-heading_large">We are going to use vaadin-grid.</div>
<ul class="slds-list_dotted">
	<li>It is an incredible piece of software. Much better than we will ever have time to emulate</li>
	<li>It is a web componente</li>
	<li>The license is Apache</li>
	<li>The look and feel is similar to LDS and it is theme-able so we could even make it look more like LDS</li>
</ul>
<vaadin-grid theme="row-dividers" column-reordering-allowed multi-sort>
	<vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
	<vaadin-grid-sort-column width="9em" path="firstname"></vaadin-grid-sort-column>
	<vaadin-grid-sort-column width="9em" path="lastname"></vaadin-grid-sort-column>
	<vaadin-grid-column id="addresscolumn" width="15em" flex-grow="2" header="Address"></vaadin-grid-column>
</vaadin-grid>

<script>
	var cbws = new cbWSClient('<?php echo $site_URL;?>');
	// Customize the "Address" column's renderer
	document.querySelector('#addresscolumn').renderer = (root, grid, rowData) => {
		root.textContent = `${rowData.item.mailingstreet}, ${rowData.item.mailingcity}`;
	};

	// Populate the grid with data
	const grid = document.querySelector('vaadin-grid');
	cbws.extendSession()
	.then(() => cbws.doQuery('select firstname, lastname, mailingstreet, mailingcity from Contacts limit 40;'))
	.then(res => grid.items = res);
</script>