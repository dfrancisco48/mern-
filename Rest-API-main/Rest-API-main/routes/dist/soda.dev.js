"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _curriculums = require("../controllers/curriculums.js");

var _auth = require("../middleware/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router({
  mergeParams: true
});

router.get('/', _auth.verifyToken, _curriculums.getCurriculums);
router.get('/:id', _auth.verifyToken, getCurriculum);
router.post('/', _auth.verifyToken, _curriculums.addCurriculum);
router.put('/:id', _auth.verifyToken, _curriculums.updateCurriculum);
router["delete"]('/:id', _auth.verifyToken, _curriculums.deleteCurriculum);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=soda.dev.js.map
