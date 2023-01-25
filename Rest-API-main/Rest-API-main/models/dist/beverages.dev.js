"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.beveragesSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var beveragesSchema = new _mongoose["default"].Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  specialization: String,
  lectureHours: {
    type: Number,
    required: true
  },
  labHours: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
exports.beveragesSchema = beveragesSchema;

var beverages = _mongoose["default"].model('beverages', beveragesSchema);

var _default = beverages;
exports["default"] = _default;
//# sourceMappingURL=beverages.dev.js.map
