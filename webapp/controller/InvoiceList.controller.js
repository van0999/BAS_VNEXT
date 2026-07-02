sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (Controller) => {
  "use strict";

  return Controller.extend("walkthrough.controller.InvoiceList", {
    onInit() {
    },
    onFilterInvoices(oEvent) {
      const sQuery = oEvent.getParameter("query");
      const oList = this.byId("invoiceList");
      const oBinding = oList.getBinding("items");
      if (sQuery) {
        const oFilter = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, sQuery);
        oBinding.filter([oFilter]);
      } else {
        oBinding.filter([]);
        //test for git
      }
    },
  });
});