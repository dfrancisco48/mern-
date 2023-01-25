"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var flavorsSchema = new _mongoose["default"].Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  years: {
    type: Number,
    required: true
  },
  specialization: []
}, {
  timestamps: true
});

var flavors = _mongoose["default"].model('flavors', flavorsSchema);

var _default = flavors;
exports["default"] = _default;
//# sourceMappingURL=flavors.dev.js.map
