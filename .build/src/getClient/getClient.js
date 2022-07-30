"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
var fs_1 = require("fs");
function getClient(_, res) {
    var path = "".concat(__dirname, "/../static/client.html");
    var html = (0, fs_1.readFileSync)(path, 'utf8');
    res.setHeader('Content-Type', 'text/html').send(html);
}
exports.getClient = getClient;
//# sourceMappingURL=getClient.js.map