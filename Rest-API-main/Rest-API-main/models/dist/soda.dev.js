"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _beverages = require("./beverages.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SodaSchema = new _mongoose["default"].Schema({
  version: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true
  },
  programId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Program',
    required: true
  },
  courses: [_beverages.beveragesSchema]
}, {
  timestamps: true
});

var soda = _mongoose["default"].model('Soda', SodaSchema);

var _default = Soda;
exports["default"] = _default;
//# sourceMappingURL=soda.dev.js.map
