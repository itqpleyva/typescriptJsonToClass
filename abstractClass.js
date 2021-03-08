"use strict";
exports.__esModule = true;
exports.Abstractos = void 0;
var Abstractos = /** @class */ (function () {
    function Abstractos(id, abstracto) {
        this.id = id;
        this.abstract = abstracto;
    }
    Abstractos.prototype.getId = function () {
        return this.id;
    };
    return Abstractos;
}());
exports.Abstractos = Abstractos;
