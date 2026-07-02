sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
     "sap/ui/model/json/JSONModel"
     
], (Controller, MessageToast,JSONModel) => {
    "use strict";

    return Controller.extend("walkthrough.controller.View1", {
        onInit() {
            var oData = {
                lastName: "Doe",
                firstName: "John",
                age: 30,
                address: {
                    street: "123 Main St",
            }
        };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "person");            
        },
        onShowMessage() {
            
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sName = this.getView().getModel("person").getProperty("/lastName");
            const sAddress = this.getView().getModel("person").getProperty("/address/street");
            const sMsg = oBundle.getText("helloBtn", [sName, sAddress]);
            MessageToast.show(sMsg);
        },
        async onOpenDialog() {
            // create dialog lazily
            this.oDialog ??= await this.loadFragment({
                name: "walkthrough.view.HelloDialog"
            });
        
            this.oDialog.open();
        },
        onCloseDialog() {
           this.byId("helloDialog").close();
        }
    });
});