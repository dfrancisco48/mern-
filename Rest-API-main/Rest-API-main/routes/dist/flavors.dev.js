"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _programs = require("../controllers/programs.js");

var _auth = require("../middleware/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _auth.verifyToken, _programs.getPrograms);
router.get('/:id', _auth.verifyToken, getProgram);
router.post('/', _auth.verifyToken, _programs.addProgram);
router.put('/:id', _auth.verifyToken, _programs.updateProgram);
router["delete"]('/:id', _auth.verifyToken, _programs.deleteProgram);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=flavors.dev.js.map
