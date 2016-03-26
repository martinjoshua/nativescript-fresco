"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var imageModule = require("ui/image");
var FrescoDrawee = (function (_super) {
    __extends(FrescoDrawee, _super);
    function FrescoDrawee() {
        _super.apply(this, arguments);
    }
    return FrescoDrawee;
}(imageModule.Image));
exports.FrescoDrawee = FrescoDrawee;
