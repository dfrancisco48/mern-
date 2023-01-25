"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _courses = require("../controllers/courses.js");

var _auth = require("../middleware/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router({
  mergeParams: true
});

router.get('/', _auth.verifyToken, _courses.getCourses);
router.get('/:id', _auth.verifyToken, getCourse);
router.post('/', _auth.verifyToken, _courses.addCourse);
router.put('/:id', _auth.verifyToken, _courses.updateCourse);
router["delete"]('/:id', _auth.verifyToken, _courses.deleteCourse);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=beverages.dev.js.map
