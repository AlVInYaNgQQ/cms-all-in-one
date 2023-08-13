webpackHotUpdate("app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./src/models/Message.js":
/*!*******************************!*\
  !*** ./src/models/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tag = '[MessageModel]';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // get Initial Msg from Server\n  getInitMsg: function getInitMsg() {\n    console.log(tag, 'getInitMsg()');\n    if (window.fetch) {\n      return fetch('/message', {\n        method: 'get',\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        return json.msg;\n      }).catch(function (err) {\n        throw new Error(err);\n      });\n    }\n    // for IE\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest();\n      xhr.open('get', '/message', true);\n      xhr.setRequestHeader('Content-type', 'application/json');\n      xhr.onload = function () {\n        var msg = JSON.parse(this.responseText).msg;\n        console.log('msg', msg);\n        resolve(msg);\n      };\n      xhr.send();\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL01lc3NhZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL01lc3NhZ2UuanM/NWM5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YWcgPSAnW01lc3NhZ2VNb2RlbF0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gZ2V0IEluaXRpYWwgTXNnIGZyb20gU2VydmVyXG4gIGdldEluaXRNc2cgKCkge1xuICAgIGNvbnNvbGUubG9nKHRhZywgJ2dldEluaXRNc2coKScpXG4gICAgaWYgKHdpbmRvdy5mZXRjaCkge1xuICAgICAgcmV0dXJuIGZldGNoKCcvbWVzc2FnZScsIHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IGpzb24ubXNnKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHsgdGhyb3cgbmV3IEVycm9yKGVycikgfSlcbiAgICB9XG4gICAgLy8gZm9yIElFXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgICB4aHIub3BlbignZ2V0JywgJy9tZXNzYWdlJywgdHJ1ZSlcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbXNnID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkubXNnXG4gICAgICAgIGNvbnNvbGUubG9nKCdtc2cnLCBtc2cpO1xuICAgICAgICByZXNvbHZlKG1zZylcbiAgICAgIH1cbiAgICAgIHhoci5zZW5kKClcbiAgICB9KVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/models/Message.js\n");

/***/ })

})