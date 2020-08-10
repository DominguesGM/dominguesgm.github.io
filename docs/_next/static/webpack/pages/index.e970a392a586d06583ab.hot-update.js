webpackHotUpdate_N_E("pages/index",{

/***/ "./src/shared/components/canvas/components/name/Name.js":
/*!**************************************************************!*\
  !*** ./src/shared/components/canvas/components/name/Name.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _helpers_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/Text */ \"./src/shared/components/canvas/components/name/helpers/Text.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils */ \"./src/shared/utils/index.js\");\n/* harmony import */ var _media_fonts_Montserrat_Medium_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../media/fonts/Montserrat_Medium.json */ \"./src/shared/media/fonts/Montserrat_Medium.json\");\nvar _media_fonts_Montserrat_Medium_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../media/fonts/Montserrat_Medium.json */ \"./src/shared/media/fonts/Montserrat_Medium.json\", 1);\n\n\n\n\n\n\n\nvar GAUSSIAN_PEAK = 50;\n\nvar Name = /*#__PURE__*/function () {\n  // Font stuff\n  function Name(camera, scene) {\n    var _this = this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Name);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"text\", null);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"vectors\", null);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"fontSize\", 65);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"fontExtrusion\", 10);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"zDepth\", 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"handleResize\", function () {\n      // This resize must come after camera resize\n      _this.text.letterMeshes.forEach(function (letter) {\n        letter.posZ = _this.camera.zDepth;\n      });\n    });\n\n    this.camera = camera; // TODO: Rethink responsivity\n\n    var fontLoader = new three__WEBPACK_IMPORTED_MODULE_3__[\"FontLoader\"]();\n    var font = fontLoader.parse(_media_fonts_Montserrat_Medium_json__WEBPACK_IMPORTED_MODULE_6__);\n    var options = {\n      font: font,\n      fontSize: this.fontSize,\n      fontExtrusion: 10,\n      titleLeftMargin: 100\n    }; // Creating text mesh and adding to scene\n\n    this.text = new _helpers_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Gil Domingues', null, options);\n    this.text.addToScene(scene);\n    this.vectors = Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"generateVectors\"])(13, this.camera.zDepth, GAUSSIAN_PEAK);\n    this.text.letterMeshes.forEach(function (letter) {\n      letter.posX = letter.transX - _this.text.width / 2;\n      letter.posZ = _this.camera.zDepth;\n      letter.mesh.position.x = letter.posX;\n      letter.mesh.position.z = letter.posZ;\n    });\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Name, [{\n    key: \"animate\",\n    value: function animate(time, mouse, enableInteraction) {\n      var _this2 = this;\n\n      var stdDevX = 150;\n      var stdDevY = 150;\n      var shouldAnimateText = enableInteraction && (mouse.x !== mouse.oldX && mouse.y !== mouse.oldY || mouse.x !== null);\n\n      if (shouldAnimateText) {\n        this.text.letterMeshes.forEach(function (letter, index) {\n          var xAlongText = mouse.x - window.innerWidth / 2 + _this2.text.width / 2;\n          var yAlongText = mouse.y - window.innerHeight / 2 + _this2.text.height / 2;\n          var gaussianFactorX = Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"gaussianFunction\"])(letter.transX, xAlongText, stdDevX);\n          var gaussianFactorY = Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"gaussianFunction\"])(yAlongText, 0, stdDevY);\n          var rotationGaussianFactor = gaussianFactorX * gaussianFactorY;\n          var translationGaussianFactor = GAUSSIAN_PEAK * rotationGaussianFactor;\n          letter.mesh.position.x += (letter.posX + _this2.vectors[index].x * translationGaussianFactor - letter.mesh.position.x) * 0.1;\n          letter.mesh.position.y += (letter.posY + _this2.vectors[index].y * translationGaussianFactor - letter.mesh.position.y) * 0.1;\n          letter.mesh.position.z += (letter.posZ + _this2.vectors[index].z * translationGaussianFactor - letter.mesh.position.z) * 0.1; // Rotation\n\n          letter.mesh.rotation.x += (_this2.vectors[index].rotX * rotationGaussianFactor - letter.mesh.rotation.x) * 0.1;\n          letter.mesh.rotation.y += (_this2.vectors[index].rotY * rotationGaussianFactor - letter.mesh.rotation.y) * 0.1;\n          letter.mesh.rotation.z += (_this2.vectors[index].rotZ * rotationGaussianFactor - letter.mesh.rotation.z) * 0.1;\n        });\n      }\n    }\n  }]);\n\n  return Name;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Name);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL2NhbnZhcy9jb21wb25lbnRzL25hbWUvTmFtZS5qcz9mZWM1Il0sIm5hbWVzIjpbIkdBVVNTSUFOX1BFQUsiLCJOYW1lIiwiY2FtZXJhIiwic2NlbmUiLCJ0ZXh0IiwibGV0dGVyTWVzaGVzIiwiZm9yRWFjaCIsImxldHRlciIsInBvc1oiLCJ6RGVwdGgiLCJmb250TG9hZGVyIiwiRm9udExvYWRlciIsImZvbnQiLCJwYXJzZSIsImZvbnRBc3NldCIsIm9wdGlvbnMiLCJmb250U2l6ZSIsImZvbnRFeHRydXNpb24iLCJ0aXRsZUxlZnRNYXJnaW4iLCJUZXh0IiwiYWRkVG9TY2VuZSIsInZlY3RvcnMiLCJnZW5lcmF0ZVZlY3RvcnMiLCJwb3NYIiwidHJhbnNYIiwid2lkdGgiLCJtZXNoIiwicG9zaXRpb24iLCJ4IiwieiIsInRpbWUiLCJtb3VzZSIsImVuYWJsZUludGVyYWN0aW9uIiwic3RkRGV2WCIsInN0ZERldlkiLCJzaG91bGRBbmltYXRlVGV4dCIsIm9sZFgiLCJ5Iiwib2xkWSIsImluZGV4IiwieEFsb25nVGV4dCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ5QWxvbmdUZXh0IiwiaW5uZXJIZWlnaHQiLCJoZWlnaHQiLCJnYXVzc2lhbkZhY3RvclgiLCJnYXVzc2lhbkZ1bmN0aW9uIiwiZ2F1c3NpYW5GYWN0b3JZIiwicm90YXRpb25HYXVzc2lhbkZhY3RvciIsInRyYW5zbGF0aW9uR2F1c3NpYW5GYWN0b3IiLCJwb3NZIiwicm90YXRpb24iLCJyb3RYIiwicm90WSIsInJvdFoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUtBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLEVBQXRCOztJQUVNQyxJO0FBSUw7QUFLQSxnQkFBWUMsTUFBWixFQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSw0R0FScEIsSUFRb0I7O0FBQUEsK0dBUGpCLElB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QUExRSxJQUErRSxHQUF6RztBQUNBckIsZ0JBQU0sQ0FBQ21CLElBQVAsQ0FBWTBCLFFBQVosQ0FBcUJmLENBQXJCLElBQTBCLENBQUMsTUFBSSxDQUFDaEIsT0FBTCxDQUFha0IsS0FBYixFQUFvQmUsSUFBcEIsR0FBMkJMLHNCQUEzQixHQUFvRDFDLE1BQU0sQ0FBQ21CLElBQVAsQ0FBWTBCLFFBQVosQ0FBcUJmLENBQTFFLElBQStFLEdBQXpHO0FBQ0E5QixnQkFBTSxDQUFDbUIsSUFBUCxDQUFZMEIsUUFBWixDQUFxQnZCLENBQXJCLElBQTBCLENBQUMsTUFBSSxDQUFDUixPQUFMLENBQWFrQixLQUFiLEVBQW9CZ0IsSUFBcEIsR0FBMkJOLHNCQUEzQixHQUFvRDFDLE1BQU0sQ0FBQ21CLElBQVAsQ0FBWTBCLFFBQVosQ0FBcUJ2QixDQUExRSxJQUErRSxHQUF6RztBQUNBLFNBMUJEO0FBMkJBO0FBQ0Q7Ozs7OztBQUdhNUIsbUVBQWYiLCJmaWxlIjoiLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvY2FudmFzL2NvbXBvbmVudHMvbmFtZS9OYW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Rm9udExvYWRlcixcbn0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9oZWxwZXJzL1RleHQnO1xuaW1wb3J0IHtcblx0Z2VuZXJhdGVWZWN0b3JzLFxuXHRnYXVzc2lhbkZ1bmN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5cbmltcG9ydCBmb250QXNzZXQgZnJvbSAnLi4vLi4vLi4vLi4vbWVkaWEvZm9udHMvTW9udHNlcnJhdF9NZWRpdW0uanNvbic7XG5cbmNvbnN0IEdBVVNTSUFOX1BFQUsgPSA1MDtcblxuY2xhc3MgTmFtZSB7XG5cdHRleHQgPSBudWxsO1xuXHR2ZWN0b3JzID0gbnVsbDtcblxuXHQvLyBGb250IHN0dWZmXG5cdGZvbnRTaXplID0gNjU7XG5cdGZvbnRFeHRydXNpb24gPSAxMDtcblx0ekRlcHRoID0gMDtcblxuXHRjb25zdHJ1Y3RvcihjYW1lcmEsIHNjZW5lKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XG5cblx0XHQvLyBUT0RPOiBSZXRoaW5rIHJlc3BvbnNpdml0eVxuXG5cdFx0Y29uc3QgZm9udExvYWRlciA9IG5ldyBGb250TG9hZGVyKCk7XG5cdFx0Y29uc3QgZm9udCA9IGZvbnRMb2FkZXIucGFyc2UoZm9udEFzc2V0KTtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0XHRmb250OiBmb250LFxuXHRcdFx0Zm9udFNpemU6IHRoaXMuZm9udFNpemUsXG5cdFx0XHRmb250RXh0cnVzaW9uOiAxMCxcblx0XHRcdHRpdGxlTGVmdE1hcmdpbjogMTAwLFxuXHRcdH07XG5cblx0XHQvLyBDcmVhdGluZyB0ZXh0IG1lc2ggYW5kIGFkZGluZyB0byBzY2VuZVxuXHRcdHRoaXMudGV4dCA9IG5ldyBUZXh0KCdHaWwgRG9taW5ndWVzJywgbnVsbCwgb3B0aW9ucyk7XG5cdFx0dGhpcy50ZXh0LmFkZFRvU2NlbmUoc2NlbmUpO1xuXHRcdHRoaXMudmVjdG9ycyA9IGdlbmVyYXRlVmVjdG9ycygxMywgdGhpcy5jYW1lcmEuekRlcHRoLCBHQVVTU0lBTl9QRUFLKTtcblxuXHRcdHRoaXMudGV4dC5sZXR0ZXJNZXNoZXMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG5cdFx0XHRsZXR0ZXIucG9zWCA9IGxldHRlci50cmFuc1ggLSB0aGlzLnRleHQud2lkdGggLyAyO1xuXHRcdFx0bGV0dGVyLnBvc1ogPSB0aGlzLmNhbWVyYS56RGVwdGg7XG5cblx0XHRcdGxldHRlci5tZXNoLnBvc2l0aW9uLnggPSBsZXR0ZXIucG9zWDtcblx0XHRcdGxldHRlci5tZXNoLnBvc2l0aW9uLnogPSBsZXR0ZXIucG9zWjtcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcblx0XHQvLyBUaGlzIHJlc2l6ZSBtdXN0IGNvbWUgYWZ0ZXIgY2FtZXJhIHJlc2l6ZVxuXG5cdFx0dGhpcy50ZXh0LmxldHRlck1lc2hlcy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblx0XHRcdGxldHRlci5wb3NaID0gdGhpcy5jYW1lcmEuekRlcHRoO1xuXHRcdH0pO1xuXHR9XG5cblx0YW5pbWF0ZSh0aW1lLCBtb3VzZSwgZW5hYmxlSW50ZXJhY3Rpb24pIHtcblx0XHRjb25zdCBzdGREZXZYID0gMTUwO1xuXHRcdGNvbnN0IHN0ZERldlkgPSAxNTA7XG5cblx0XHRjb25zdCBzaG91bGRBbmltYXRlVGV4dCA9IGVuYWJsZUludGVyYWN0aW9uICYmXG5cdFx0XHQoKG1vdXNlLnggIT09IG1vdXNlLm9sZFggJiZcblx0XHRcdG1vdXNlLnkgIT09IG1vdXNlLm9sZFkpIHx8XG5cdFx0XHRtb3VzZS54ICE9PSBudWxsKTtcblxuXHRcdGlmKHNob3VsZEFuaW1hdGVUZXh0KSB7XG5cdFx0XHR0aGlzLnRleHQubGV0dGVyTWVzaGVzLmZvckVhY2goKGxldHRlciwgaW5kZXgpID0+IHtcblx0XHRcdFx0Y29uc3QgeEFsb25nVGV4dCA9IG1vdXNlLnggLSAod2luZG93LmlubmVyV2lkdGgvMikgKyAodGhpcy50ZXh0LndpZHRoLzIpO1xuXHRcdFx0XHRjb25zdCB5QWxvbmdUZXh0ID0gbW91c2UueSAtICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgKyAodGhpcy50ZXh0LmhlaWdodC8yKTtcblxuXHRcdFx0XHRjb25zdCBnYXVzc2lhbkZhY3RvclggPSBnYXVzc2lhbkZ1bmN0aW9uKFxuXHRcdFx0XHRcdGxldHRlci50cmFuc1gsXG5cdFx0XHRcdFx0eEFsb25nVGV4dCxcblx0XHRcdFx0XHRzdGREZXZYXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IGdhdXNzaWFuRmFjdG9yWSA9IGdhdXNzaWFuRnVuY3Rpb24oXG5cdFx0XHRcdFx0eUFsb25nVGV4dCxcblx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdHN0ZERldllcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRjb25zdCByb3RhdGlvbkdhdXNzaWFuRmFjdG9yID0gZ2F1c3NpYW5GYWN0b3JYICogZ2F1c3NpYW5GYWN0b3JZO1xuXHRcdFx0XHRjb25zdCB0cmFuc2xhdGlvbkdhdXNzaWFuRmFjdG9yID0gR0FVU1NJQU5fUEVBSyAqIHJvdGF0aW9uR2F1c3NpYW5GYWN0b3I7XG5cblx0XHRcdFx0bGV0dGVyLm1lc2gucG9zaXRpb24ueCArPSAobGV0dGVyLnBvc1ggKyB0aGlzLnZlY3RvcnNbaW5kZXhdLnggKiB0cmFuc2xhdGlvbkdhdXNzaWFuRmFjdG9yIC0gbGV0dGVyLm1lc2gucG9zaXRpb24ueCkgKiAwLjE7XG5cdFx0XHRcdGxldHRlci5tZXNoLnBvc2l0aW9uLnkgKz0gKGxldHRlci5wb3NZICsgdGhpcy52ZWN0b3JzW2luZGV4XS55ICogdHJhbnNsYXRpb25HYXVzc2lhbkZhY3RvciAtIGxldHRlci5tZXNoLnBvc2l0aW9uLnkpICogMC4xO1xuXHRcdFx0XHRsZXR0ZXIubWVzaC5wb3NpdGlvbi56ICs9IChsZXR0ZXIucG9zWiArIHRoaXMudmVjdG9yc1tpbmRleF0ueiAqIHRyYW5zbGF0aW9uR2F1c3NpYW5GYWN0b3IgLSBsZXR0ZXIubWVzaC5wb3NpdGlvbi56KSAqIDAuMTtcblxuXHRcdFx0XHQvLyBSb3RhdGlvblxuXHRcdFx0XHRsZXR0ZXIubWVzaC5yb3RhdGlvbi54ICs9ICh0aGlzLnZlY3RvcnNbaW5kZXhdLnJvdFggKiByb3RhdGlvbkdhdXNzaWFuRmFjdG9yIC0gbGV0dGVyLm1lc2gucm90YXRpb24ueCkgKiAwLjE7XG5cdFx0XHRcdGxldHRlci5tZXNoLnJvdGF0aW9uLnkgKz0gKHRoaXMudmVjdG9yc1tpbmRleF0ucm90WSAqIHJvdGF0aW9uR2F1c3NpYW5GYWN0b3IgLSBsZXR0ZXIubWVzaC5yb3RhdGlvbi55KSAqIDAuMTtcblx0XHRcdFx0bGV0dGVyLm1lc2gucm90YXRpb24ueiArPSAodGhpcy52ZWN0b3JzW2luZGV4XS5yb3RaICogcm90YXRpb25HYXVzc2lhbkZhY3RvciAtIGxldHRlci5tZXNoLnJvdGF0aW9uLnopICogMC4xO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/shared/components/canvas/components/name/Name.js\n");

/***/ })

})