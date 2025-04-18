"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapInObject = wrapInObject;
function wrapInObject(value) {
    return { value };
}
// Primjer korištenja:
// const wrapped = wrapInObject("test"); // { value: string }
// const wrappedNumber = wrapInObject(42); // { value: number }
// const wrappedObject = wrapInObject({ id: 1 }); // { value: { id: number } }
