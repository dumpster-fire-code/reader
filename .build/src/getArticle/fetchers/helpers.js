"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
function remove($, $container, selector) {
    $container.find(selector).each(function (_, child) {
        $(child).remove();
    });
}
exports.remove = remove;
//# sourceMappingURL=helpers.js.map