"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
exports.Button = () => {
    return react_1.default.createElement("button", { onClick: () => console.log("Clicked!") }, "Hello world");
};
//# sourceMappingURL=index.js.map