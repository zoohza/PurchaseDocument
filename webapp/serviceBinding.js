function initModel() {
	var sUrl = "/sap/opu/odata/sap/YTEST_GEMS_GET_PO_DATA_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}