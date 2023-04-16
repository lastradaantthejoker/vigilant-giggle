"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = [];
var urlz = process.env.THEURL;
axios_1.default.get(urlz).then(function (e) {
    e.data.toString().split("\n").forEach(function (e) {
        if (e.startsWith("https://")) {
            url.push(e);
        }
    });
});
setTimeout(function () {
    url.forEach(function (e) {
        axios_1.default.get(e).then(function (r) {
            console.log("dun");
        }).catch(function (err) { 
            console.log(err)
        });
    });
}, 2500);
