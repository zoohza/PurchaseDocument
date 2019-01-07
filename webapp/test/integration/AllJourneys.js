/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"fiori/gems/purchase/documents/ZGEMS_TEST_PO/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"fiori/gems/purchase/documents/ZGEMS_TEST_PO/test/integration/pages/PurchaseDocument",
	"fiori/gems/purchase/documents/ZGEMS_TEST_PO/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "fiori.gems.purchase.documents.ZGEMS_TEST_PO.view.",
		autoWait: true
	});
});