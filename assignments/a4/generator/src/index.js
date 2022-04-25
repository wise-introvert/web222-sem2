"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var data_1 = require("./data");
var products = data_1.data.products.map(function (product) { return (__assign(__assign({}, product), { category: [product.category] })); });
console.log(JSON.stringify({ categories: data_1.data.categories, products: products }, null, 2));
