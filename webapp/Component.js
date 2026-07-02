sap.ui.define([
    "sap/ui/core/UIComponent",
    "walkthrough/model/models",
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("walkthrough.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();


        //     var oData = {
        //         lastName: "Doe",
        //         firstName: "John",
        //         age: 30,
        //         address: {
        //             street: "123 Main St",
        //     }
        // };
        //     const oModel = new JSONModel(oData);
        //     this.setModel(oModel, "person");              
        }
    });
});