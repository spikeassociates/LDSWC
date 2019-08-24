<script>
if (window.ldswcproperties.Menu==undefined) {
	window.ldswcproperties.Menu = {};
}
window.ldswcproperties.Menu['ldstmenu'] = {};
window.ldswcproperties.Menu['ldstmenu'].button = `<ldswc-button size="large" title="LDSWC Tests"></ldswc-button>`;
</script>
<ldswc-menu
	children='[
		{
			"menutype": "item",
			"title": "Buttons, Icons and Others",
			"href": "index.php?action=ListView&module=ldswebcomponent"
		},
		{
			"menutype": "item",
			"title": "Timeline and Accordion",
			"href": "index.php?action=TLA&module=ldswebcomponent"
		},
		{
			"menutype": "item",
			"title": "Clickoutside/lightDOM Slot",
			"href": "index.php?action=ClickOut&module=ldswebcomponent"
		},
		{
			"menutype": "item",
			"title": "Expression Builder",
			"href": "index.php?action=EBuilder&module=ldswebcomponent"
		},
		{
			"menutype": "item",
			"title": "Table",
			"href": "index.php?action=Table&module=ldswebcomponent"
		}
	]'
	button="ldstmenu"
	toggleOnHover
></ldswc-menu>
