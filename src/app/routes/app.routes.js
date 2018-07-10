"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("../components/about/about.component");
var contact_component_1 = require("../components/contact/contact.component");
var home_component_1 = require("../components/home/home.component");
var error_component_1 = require("../components/error/error.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent, data: { title: 'Heroes List' } },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: error_component_1.ErrorComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map