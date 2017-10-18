webpackJsonp([1],{

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigationConfig = exports.NavigationComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navigation = __webpack_require__(85);

var _navigation2 = _interopRequireDefault(_navigation);

__webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationComponent = exports.NavigationComponent = function () {
  function NavigationComponent() {
    _classCallCheck(this, NavigationComponent);
  }

  _createClass(NavigationComponent, null, [{
    key: '$inject',
    get: function get() {
      return [];
    }
  }]);

  return NavigationComponent;
}();

var navigationConfig = exports.navigationConfig = {
  template: _navigation2.default,
  controller: NavigationComponent
};

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(57);

var _angular = __webpack_require__(19);

var _angular2 = _interopRequireDefault(_angular);

var _navigation = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Services

var app = _angular2.default.module('islandJo', ['ngMaterial', 'ui.router', 'ngAnimate']);

// Components

app.component('nav', _navigation.navigationConfig);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    template: '<div>Hello</div>'
  }).state('about', {
    url: '/about',
    template: '<h1>Island Jo</h1>'
  });

  $urlRouterProvider.otherwise('/home');
}]);

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = " <md-nav-bar md-selected-nav-item=currentNavItem nav-bar-aria-label=\"navigation links\"> <md-nav-item md-nav-sref=menu name=menu> Menu </md-nav-item> <md-nav-item md-nav-sref=about name=about> About </md-nav-item> <md-nav-item md-nav-sref=contact name=contact> Contact </md-nav-item> </md-nav-bar> ";

/***/ })

},[83]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vYW5ndWxhci1tYXRlcmlhbC9hbmd1bGFyLW1hdGVyaWFsLmNzcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25Db21wb25lbnQiLCJuYXZpZ2F0aW9uQ29uZmlnIiwidGVtcGxhdGUiLCJjb250cm9sbGVyIiwiYXBwIiwibW9kdWxlIiwiY29tcG9uZW50IiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsIm90aGVyd2lzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQUVhQSxtQixXQUFBQSxtQjs7Ozs7Ozt3QkFDVTtBQUFDLGFBQU8sRUFBUDtBQUFVOzs7Ozs7QUFJM0IsSUFBTUMsOENBQW1CO0FBQzlCQyxnQ0FEOEI7QUFFOUJDLGNBQVlIO0FBRmtCLENBQXpCLEM7Ozs7Ozs7QUNWUCx5Qzs7Ozs7Ozs7QUNBQTs7QUFFQTs7QUFFQTs7OztBQUlBOzs7O0FBRUE7O0FBRUEsSUFBTUksTUFBTSxrQkFBUUMsTUFBUixDQUFlLFVBQWYsRUFBMkIsQ0FBQyxZQUFELEVBQWUsV0FBZixFQUE0QixXQUE1QixDQUEzQixDQUFaOztBQU5BOztBQVFFRCxJQUFJRSxTQUFKLENBQWMsS0FBZDs7QUFFQUYsSUFBSUcsTUFBSixDQUFXLENBQUMsZ0JBQUQsRUFBbUIsb0JBQW5CLEVBQXlDLFVBQUNDLGNBQUQsRUFBaUJDLGtCQUFqQixFQUF3Qzs7QUFFeEZELGlCQUFlRSxLQUFmLENBQXFCLE1BQXJCLEVBQTZCO0FBQzNCQyxTQUFLLE9BRHNCO0FBRTNCVCxjQUFTO0FBRmtCLEdBQTdCLEVBSUNRLEtBSkQsQ0FJTyxPQUpQLEVBSWdCO0FBQ2RDLFNBQUssUUFEUztBQUVkVCxjQUFTO0FBRkssR0FKaEI7O0FBU0FPLHFCQUFtQkcsU0FBbkIsQ0FBNkIsT0FBN0I7QUFDSCxDQVpVLENBQVgsRTs7Ozs7OztBQ2hCRix5Qzs7Ozs7OztBQ0FBLCtUIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9uYXZpZ2F0aW9uLmh0bWwnO1xuaW1wb3J0ICcuL25hdmlnYXRpb24uY3NzJztcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0ICRpbmplY3QoKSB7cmV0dXJuIFtdfVxuXG59XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uQ29uZmlnID0ge1xuICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gIGNvbnRyb2xsZXI6IE5hdmlnYXRpb25Db21wb25lbnRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmd1bGFyLW1hdGVyaWFsL2FuZ3VsYXItbWF0ZXJpYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9ub2RlX21vZHVsZXMvYW5ndWxhci1tYXRlcmlhbC9hbmd1bGFyLW1hdGVyaWFsLmNzcyc7XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG4vLyBDb21wb25lbnRzXG5cbmltcG9ydCB7bmF2aWdhdGlvbkNvbmZpZ30gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50J1xuXG4vLyBTZXJ2aWNlc1xuXG5jb25zdCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnaXNsYW5kSm8nLCBbJ25nTWF0ZXJpYWwnLCAndWkucm91dGVyJywgJ25nQW5pbWF0ZSddKVxuXG4gIGFwcC5jb21wb25lbnQoJ25hdicsIG5hdmlnYXRpb25Db25maWcpXG5cbiAgYXBwLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSA9PiB7XG5cbiAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgIHRlbXBsYXRlOic8ZGl2PkhlbGxvPC9kaXY+J1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnYWJvdXQnLCB7XG4gICAgICAgIHVybDogJy9hYm91dCcsXG4gICAgICAgIHRlbXBsYXRlOic8aDE+SXNsYW5kIEpvPC9oMT4nXG4gICAgICB9KVxuXG4gICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xuICB9XSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCIgPG1kLW5hdi1iYXIgbWQtc2VsZWN0ZWQtbmF2LWl0ZW09Y3VycmVudE5hdkl0ZW0gbmF2LWJhci1hcmlhLWxhYmVsPVxcXCJuYXZpZ2F0aW9uIGxpbmtzXFxcIj4gPG1kLW5hdi1pdGVtIG1kLW5hdi1zcmVmPW1lbnUgbmFtZT1tZW51PiBNZW51IDwvbWQtbmF2LWl0ZW0+IDxtZC1uYXYtaXRlbSBtZC1uYXYtc3JlZj1hYm91dCBuYW1lPWFib3V0PiBBYm91dCA8L21kLW5hdi1pdGVtPiA8bWQtbmF2LWl0ZW0gbWQtbmF2LXNyZWY9Y29udGFjdCBuYW1lPWNvbnRhY3Q+IENvbnRhY3QgPC9tZC1uYXYtaXRlbT4gPC9tZC1uYXYtYmFyPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9