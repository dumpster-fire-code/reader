"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var serverless = require("serverless-http");
var express = require("express");
var getArticle_1 = require("./getArticle/getArticle");
var getClient_1 = require("./getClient/getClient");
var app = express();
app.get('/article', getArticle_1.getArticle);
app.get('/client', getClient_1.getClient);
var router = serverless(app);
exports.router = router;
//# sourceMappingURL=router.js.map