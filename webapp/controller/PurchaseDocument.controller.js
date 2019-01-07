sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("fiori.gems.purchase.documents.ZGEMS_TEST_PO.controller.PurchaseDocument", {
		onInit: function () {
			/*
			//Accessing the table from the fragment by it's Id	
			var oTable = this.byId("POtable");

			//column list item creation
			var oTemplate = new sap.m.ColumnListItem({
				cells: [new sap.m.Text({
					text: "{PoNumber}"
				}), new sap.m.Text({
					text: "{CoCode}"
				})]
			});
			var sServiceUrl = "/sap/opu/odata/sap/YTEST_GEMS_GET_PO_DATA_SRV/";
			//Adding service to the odata model
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, false);
			//Setting model to the table
			oTable.setModel(oModel);
			oTable.bindAggregation("items", {
				path: "/PurchaseOrderSet",
				template: oTemplate
			});*/
		}
	});
});