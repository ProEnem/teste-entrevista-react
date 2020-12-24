"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (paths) => paths
    .reduce((previous, path, index) => `${previous}${typeof path === 'string'
    ? `${index > 0 ? '.' : ''}${path}`
    : `[${path}]`}`, '')
    .toString();
//# sourceMappingURL=convertArrayToPathName.js.map