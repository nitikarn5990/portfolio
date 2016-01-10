module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(43);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(9);

  var _coreLocation = __webpack_require__(7);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var routes = {
    '/404': function _() {
      return __webpack_require__(14);
    }, '/500': function _() {
      return __webpack_require__(15);
    }, '/achievements': function achievements() {
      return __webpack_require__(16);
    }, '/bio': function bio() {
      return __webpack_require__(17);
    }, '/': function _() {
      return __webpack_require__(18);
    }, '/works': function works() {
      return __webpack_require__(19);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(component)));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                if (window.ga) {
                  window.ga('send', 'pageview');
                }
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"unlist":"_1OSj6gUXgvS9JXRgg3-hAA","main":"_3Nn71GE9lUIeFWwU0tI0YA","name":"_3ri6_G6vvIPcZ088LMwZbm","profile":"_1gTjrRmeRzcQJMaCuL0hoa","profileText":"E0cyNhzVB_3w6zz-wh3Kz","iconBar":"_1tD_9pPWUY4YdQlGudZnT6","icon":"TaEdSmfEkSKfFKi1rNwg3","menu":"T3w8V3xryeMprnV5Hro1w","box":"_18QsPTufdv17bF0U6nbEia","works":"amqIylUW6iK4NEWZdJ_7F","achievements":"_10nH7MgEdAEu9jW37EkOm1","item":"_3TIZxL4ii7Ctcdht4AuD15","toc":"_3e6m9DMKxXusNmwdexG7dj","workList":"_3EpFhwLsuz5pgVLRvjZL6y","badge":"_1JyxB-bE_KKZymodhaE5c-","tocblock":"_2P4y37h7MiGL9zUTmx4WQ5"};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _Link = __webpack_require__(5);

  var _Link2 = _interopRequireDefault(_Link);

  var _styleScss = __webpack_require__(2);

  var _styleScss2 = _interopRequireDefault(_styleScss);

  var _styleScss3 = __webpack_require__(36);

  var _styleScss4 = _interopRequireDefault(_styleScss3);

  var Item = (function (_Component) {
  	_inherits(Item, _Component);

  	function Item() {
  		_classCallCheck(this, Item);

  		_get(Object.getPrototypeOf(Item.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Item, [{
  		key: 'render',
  		value: function render() {
  			var badges = [];
  			if (this.props.badges) {
  				badges = this.props.badges.map(function (badge, index) {
  					return _react2['default'].createElement(
  						'span',
  						{ className: _styleScss2['default'].badge, key: index },
  						badge
  					);
  				});
  			}

  			var smallTitle = this.props.small ? _styleScss4['default'].smallTitle : '';

  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleScss2['default'].item + ' container-fluid', id: this.props.id, key: this.props.id },
  				_react2['default'].createElement(
  					'div',
  					{ className: 'row' },
  					_react2['default'].createElement(
  						'h2',
  						{ className: 'col-xs-12 col-sm-8 col-md-9 ' + smallTitle },
  						this.props.title,
  						' ',
  						badges
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'col-xs-12 col-sm-4 col-md-3 ' + _styleScss4['default'].nav },
  						_react2['default'].createElement(
  							'a',
  							{ href: '/', onClick: _Link2['default'].handleClick },
  							'Portfolio'
  						),
  						' ',
  						_react2['default'].createElement(
  							'a',
  							{ href: '#top' },
  							'To Top'
  						)
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: 'row reverse' },
  					_react2['default'].createElement(
  						'div',
  						{ className: 'col-xs-12 col-sm-4 ' + _styleScss4['default'].image },
  						_react2['default'].Children.toArray(this.props.children).filter(function (x) {
  							return x.type == Image;
  						}),
  						_react2['default'].createElement(
  							'div',
  							{ className: _styleScss4['default'].access },
  							_react2['default'].Children.toArray(this.props.children).filter(function (x) {
  								return x.type == Access;
  							})
  						)
  					),
  					_react2['default'].Children.toArray(this.props.children).filter(function (x) {
  						return x.type == Description;
  					})
  				)
  			);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			title: _react2['default'].PropTypes.string.isRequired,
  			key: _react2['default'].PropTypes.string,
  			badges: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
  			small: _react2['default'].PropTypes.bool
  		},
  		enumerable: true
  	}]);

  	return Item;
  })(_react.Component);

  exports.Item = Item;

  var Image = (function (_Component2) {
  	_inherits(Image, _Component2);

  	function Image() {
  		_classCallCheck(this, Image);

  		_get(Object.getPrototypeOf(Image.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Image, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				null,
  				this.props.children
  			);
  		}
  	}]);

  	return Image;
  })(_react.Component);

  exports.Image = Image;

  var Description = (function (_Component3) {
  	_inherits(Description, _Component3);

  	function Description() {
  		_classCallCheck(this, Description);

  		_get(Object.getPrototypeOf(Description.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Description, [{
  		key: 'render',
  		value: function render() {
  			var cls = ['col-xs-12', 'col-sm-8', _styleScss4['default'].description];

  			if (this.props.small) {
  				cls.push(_styleScss4['default'].small);
  			}

  			return _react2['default'].createElement(
  				'div',
  				{ className: cls.join(' ') },
  				this.props.children
  			);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			small: _react2['default'].PropTypes.bool
  		},
  		enumerable: true
  	}]);

  	return Description;
  })(_react.Component);

  exports.Description = Description;

  var Access = (function (_Component4) {
  	_inherits(Access, _Component4);

  	function Access() {
  		_classCallCheck(this, Access);

  		_get(Object.getPrototypeOf(Access.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Access, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ style: { display: 'inline' } },
  				this.props.children
  			);
  		}
  	}]);

  	return Access;
  })(_react.Component);

  exports.Access = Access;

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/github");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(37);

  var _coreLocation = __webpack_require__(7);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/globe");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(9);

  var _historyLibCreateBrowserHistory = __webpack_require__(40);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(41);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(42);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = [
  	"k2aandroid",
  	"bcbk5",
  	"grader",
  	"snakerun",
  	"kusmartbus",
  	"streaming",
  	"kyou",
  	"menome",
  	"twitica",
  	"bd2",
  	"memorial",
  	"arg",
  	"ovzcp",
  	"bd2score",
  	"cdpb"
  ];

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/android");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _Link = __webpack_require__(5);

  var _Link2 = _interopRequireDefault(_Link);

  var _ScrubImage = __webpack_require__(12);

  var _ScrubImage2 = _interopRequireDefault(_ScrubImage);

  var _styleScss = __webpack_require__(2);

  var _styleScss2 = _interopRequireDefault(_styleScss);

  var _styleScss3 = __webpack_require__(35);

  var _styleScss4 = _interopRequireDefault(_styleScss3);

  var AchievementGroup = (function (_Component) {
  	_inherits(AchievementGroup, _Component);

  	function AchievementGroup() {
  		_classCallCheck(this, AchievementGroup);

  		_get(Object.getPrototypeOf(AchievementGroup.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(AchievementGroup, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleScss2['default'].item + ' container-fluid', id: this.props.year, key: this.props.year },
  				_react2['default'].createElement(
  					'div',
  					{ className: 'row' },
  					_react2['default'].createElement(
  						'h2',
  						{ className: 'col-xs-12 col-sm-8 col-md-9' },
  						this.props.year
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'col-xs-12 col-sm-4 col-md-3 ' + _styleScss4['default'].nav },
  						_react2['default'].createElement(
  							'a',
  							{ href: '/', onClick: _Link2['default'].handleClick },
  							'Portfolio'
  						),
  						' ',
  						_react2['default'].createElement(
  							'a',
  							{ href: '#top' },
  							'To Top'
  						)
  					)
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleScss4['default'].skipHelp },
  					'Move mouse over images to view other images'
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: _styleScss4['default'].skipHelpMobile },
  					'Swipe over images to view other images'
  				),
  				_react2['default'].createElement(
  					'div',
  					{ className: 'row' },
  					this.props.children
  				)
  			);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			year: _react2['default'].PropTypes.number.isRequired
  		},
  		enumerable: true
  	}]);

  	return AchievementGroup;
  })(_react.Component);

  exports.AchievementGroup = AchievementGroup;

  var AchievementItem = (function (_Component2) {
  	_inherits(AchievementItem, _Component2);

  	function AchievementItem() {
  		_classCallCheck(this, AchievementItem);

  		_get(Object.getPrototypeOf(AchievementItem.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(AchievementItem, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleScss4['default'].achievement + ' col-xs-12 col-sm-6' },
  				_react2['default'].createElement(_ScrubImage2['default'], { src: this.props.image }),
  				_react2['default'].createElement(
  					'strong',
  					{ className: _styleScss4['default'].title },
  					this.props.title
  				),
  				_react2['default'].createElement(
  					'div',
  					null,
  					this.props.category
  				),
  				this.props.children
  			);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			title: _react2['default'].PropTypes.string.isRequired,
  			category: _react2['default'].PropTypes.string,
  			image: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)])
  		},
  		enumerable: true
  	}]);

  	return AchievementItem;
  })(_react.Component);

  exports.AchievementItem = AchievementItem;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
  	_inherits(_default, _Component);

  	function _default() {
  		_classCallCheck(this, _default);

  		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);

  		this.state = {
  			image: 0,
  			height: 300
  		};
  	}

  	_createClass(_default, [{
  		key: 'render',
  		value: function render() {
  			var _this = this;

  			var image = this.props.src;
  			if (Array.isArray(image)) {
  				image = image[this.state.image];
  			}

  			return _react2['default'].createElement(
  				'div',
  				{ style: { width: '100%', minHeight: this.state.height }, onMouseMove: this.onMouseMove.bind(this), onTouchMove: this.onMouseMove.bind(this), ref: function (elem) {
  						return _this._elem = elem;
  					} },
  				_react2['default'].createElement('img', { src: image, onLoad: this.onImageLoad.bind(this) })
  			);
  		}
  	}, {
  		key: 'onMouseMove',
  		value: function onMouseMove(e) {
  			if (!Array.isArray(this.props.src)) {
  				return;
  			}

  			var rect = this._elem.getBoundingClientRect();
  			var elemX = e.clientX - rect.left;
  			var percent = elemX / rect.width;
  			var image = Math.round(percent * (this.props.src.length - 1));

  			this.setState({
  				image: image
  			});
  		}
  	}, {
  		key: 'onImageLoad',
  		value: function onImageLoad(e) {
  			this.setState({
  				height: Math.max(e.target.getBoundingClientRect().height, this.state.height)
  			});
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			src: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)])
  		},
  		enumerable: true
  	}]);

  	return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _Link = __webpack_require__(5);

  var _Link2 = _interopRequireDefault(_Link);

  var _styleScss = __webpack_require__(38);

  var _styleScss2 = _interopRequireDefault(_styleScss);

  var Timeline = (function (_Component) {
  	_inherits(Timeline, _Component);

  	function Timeline() {
  		_classCallCheck(this, Timeline);

  		_get(Object.getPrototypeOf(Timeline.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Timeline, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _styleScss2['default'].timeline },
  				_react2['default'].createElement('div', { className: _styleScss2['default'].spine }),
  				this.props.children,
  				_react2['default'].createElement('div', { className: _styleScss2['default'].clearfix })
  			);
  		}
  	}]);

  	return Timeline;
  })(_react.Component);

  exports.Timeline = Timeline;

  var TimelineItem = (function (_Component2) {
  	_inherits(TimelineItem, _Component2);

  	function TimelineItem() {
  		_classCallCheck(this, TimelineItem);

  		_get(Object.getPrototypeOf(TimelineItem.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(TimelineItem, [{
  		key: 'render',
  		value: function render() {
  			if (this.props.side == 'center') {
  				return _react2['default'].createElement(
  					'div',
  					{ className: _styleScss2['default'].center },
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleScss2['default'].box },
  						this.props.children
  					)
  				);
  			}

  			var side = this.props.side == 'left' ? _styleScss2['default'].left : _styleScss2['default'].right;
  			var yearSide = this.props.side == 'left' ? _styleScss2['default'].right : _styleScss2['default'].left;
  			var multi = this.props.multi ? _styleScss2['default'].multi : '';
  			var year = !this.props.multi ? _react2['default'].createElement(
  				'div',
  				{ className: yearSide + ' ' + _styleScss2['default'].year },
  				this.props.year
  			) : null;

  			return _react2['default'].createElement(
  				'div',
  				null,
  				year,
  				_react2['default'].createElement(
  					'div',
  					{ className: side + ' ' + multi },
  					_react2['default'].createElement(
  						'div',
  						{ className: _styleScss2['default'].box },
  						this.props.children
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'propTypes',
  		value: {
  			side: _react2['default'].PropTypes.oneOf(['center', 'left', 'right']).isRequired,
  			year: _react2['default'].PropTypes.number,
  			multi: _react2['default'].PropTypes.bool
  		},
  		enumerable: true
  	}]);

  	return TimelineItem;
  })(_react.Component);

  exports.TimelineItem = TimelineItem;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          { className: "container-fluid" },
          _react2["default"].createElement(
            "h1",
            null,
            "Not Found"
          ),
          _react2["default"].createElement(
            "p",
            null,
            "The page you're looking for was not found."
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(5);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _componentsAchievementGroup = __webpack_require__(11);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var _default = (function (_Component) {
  	_inherits(_default, _Component);

  	function _default() {
  		_classCallCheck(this, _default);

  		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(_default, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _componentsStyleScss2['default'].achievements },
  				_react2['default'].createElement(
  					'div',
  					{ className: _componentsStyleScss2['default'].item + ' container-fluid ' + _componentsStyleScss2['default'].toc, id: 'top' },
  					_react2['default'].createElement(
  						'h1',
  						null,
  						_react2['default'].createElement(
  							'a',
  							{ href: '/', onClick: _componentsLink2['default'].handleClick },
  							'Portfolio/ ',
  							_react2['default'].createElement(
  								'small',
  								null,
  								'<— Click to go back'
  							)
  						),
  						'Achievements'
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'row' },
  						this.renderToc()
  					)
  				),
  				this.renderAchievements()
  			);
  		}
  	}, {
  		key: 'renderToc',
  		value: function renderToc() {
  			return this.renderAchievements().map(function (node) {
  				var year = node.props.year;
  				var items = _react2['default'].Children.map(node.props.children, function (item, index) {
  					return _react2['default'].createElement(
  						'li',
  						{ key: index },
  						_react2['default'].createElement(
  							'strong',
  							null,
  							item.props.title
  						),
  						_react2['default'].createElement(
  							'div',
  							null,
  							item.props.category
  						)
  					);
  				});

  				return _react2['default'].createElement(
  					'div',
  					{ className: 'col-xs-12 col-sm-6', key: year },
  					_react2['default'].createElement(
  						'a',
  						{ href: '#' + year, className: _componentsStyleScss2['default'].tocblock },
  						_react2['default'].createElement(
  							'h2',
  							null,
  							year
  						),
  						_react2['default'].createElement(
  							'ul',
  							{ className: _componentsStyleScss2['default'].unlist },
  							items
  						)
  					)
  				);
  			});
  		}
  	}, {
  		key: 'renderAchievements',
  		value: function renderAchievements() {
  			return [_react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2007, key: 2007 },
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achievements/nlc8.jpg", "/achimg/nlc8-1.jpg"],
  					title: 'The Eight National Linux Competition (NLC8)',
  					category: 'Second place, Linux client category' }),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achimg/bdcom-1.jpeg", "/achimg/bdcom-2.jpeg"],
  					title: '36 years of Bodindecha computer competition',
  					category: 'First place' })
  			), _react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2008, key: 2008 },
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achievements/nlc9.jpg", "/achievements/nlc9-1.jpg", "/achievements/nlc9-2.jpg", "/achimg/nlc9-1.jpg", "/achimg/nlc9-2.jpg"],
  					title: 'The Ninth National Linux Competition (NLC9)',
  					category: 'First place, Linux client category' }),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achievements/html08.jpg", "/achimg/html08-1.jpg"],
  					title: 'HTML web page competition, Seri Thai area',
  					category: 'Second place, silver medal' }),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: '/achievements/qa08.jpg',
  					title: 'Computer competition, NMR. Bodindecha school',
  					category: 'Gold medal' })
  			), _react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2009, key: 2009 },
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achievements/nlc10.jpg", "/achievements/nlc10-1.jpg", "/achievements/nlc10-2.jpg", "/achimg/nlc10-1.jpg", "/achimg/nlc10-2.jpg", "/achimg/nlc10-3.jpg"],
  					title: 'The Tenth National Linux Competition (NLC10)',
  					category: 'First place, Linux server category' }),
  				_react2['default'].createElement(
  					_componentsAchievementGroup.AchievementItem,
  					{
  						image: ["/achievements/nlcp2.jpg", "/achievements/nlcp1.jpg"],
  						title: 'NECTEC Certified Linux Professional (NLCP) Level 1 & 2' },
  					'Awarded as a part of NLC10 competition.'
  				),
  				_react2['default'].createElement(
  					_componentsAchievementGroup.AchievementItem,
  					{
  						image: ["/achievements/nsc11.jpg", "/achimg/nsc11-1.jpg", "/work/cdpb.png"],
  						title: 'National Software Competition 2009 (NSC11)',
  						category: 'Finalist, student\'s application software category' },
  					_react2['default'].createElement(
  						'span',
  						{ style: { fontWeight: 400 } },
  						'Project:'
  					),
  					' ',
  					_react2['default'].createElement(
  						'a',
  						{ href: '/works#cdpb', onClick: _componentsLink2['default'].handleClick },
  						'Club Distro Package Builder'
  					)
  				),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: '/achievements/student.jpg',
  					title: 'Supreme Patriarch Award' })
  			), _react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2010, key: 2010 },
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achimg/nlc11-1.jpeg", "/achimg/nlc11-2.jpeg", "/achimg/nlc11-3.jpg"],
  					title: 'The Eleventh National Linux Competition (NLC11)',
  					category: 'First place, Linux client category' }),
  				_react2['default'].createElement(
  					_componentsAchievementGroup.AchievementItem,
  					{
  						image: ["/achievements/nsc13.jpg", "/achimg/nsc13-1.jpg", "/achimg/nsc13-2.jpg", "/work/ovzcp.png"],
  						title: 'National Software Competition 2011 (NSC13)',
  						category: 'Second place, student\'s application software category' },
  					_react2['default'].createElement(
  						'span',
  						{ style: { fontWeight: 400 } },
  						'Project:'
  					),
  					' ',
  					_react2['default'].createElement(
  						'a',
  						{ href: '/works#ovzcp', onClick: _componentsLink2['default'].handleClick },
  						'Web-based Linux virtualisation control panel (OvzCP)'
  					)
  				)
  			), _react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2011, key: 2011 },
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: '/achimg/nlc12-1.jpeg',
  					title: 'The Twelfth National Linux Competition (NLC12)',
  					category: 'Second place, Linux server category' }),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achimg/hlp-1.jpeg", "/achimg/hlp-2.jpeg", "/achimg/hlp-3.jpeg"],
  					title: 'The first HLP Hackathon competition',
  					category: 'Passed to the final round with 15 others competitors' }),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achimg/nmrhtml.jpeg", "/achimg/nmrhtml-1.jpeg", "/achimg/nmrhtml-2.jpeg", "/achimg/nmrhtml-3.jpeg"],
  					title: 'Text editor website development, NMR. Bodindecha school',
  					category: 'Bronze medal' }),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achimg/php-1.jpeg", "/achimg/php-2.jpeg", "/achimg/php-3.jpeg", "/achimg/php-4.jpeg"],
  					title: 'PHP Web Application competition, IT Ladkrabang Open House 2011',
  					category: 'First place' })
  			), _react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2012, key: 2012 },
  				_react2['default'].createElement(
  					_componentsAchievementGroup.AchievementItem,
  					{
  						image: ["/achievements/nsc15.jpg", "/achimg/nsc15-4.jpg", "/achimg/nsc15-1.jpg", "/achimg/nsc15-2.jpg", "/achimg/nsc15-3.jpg", "/work/kyou.png"],
  						title: 'National Software Competition 2013 (NSC15)',
  						category: 'Winner, student\'s application software category' },
  					_react2['default'].createElement(
  						'div',
  						null,
  						'H.R.H. Maha Chakri Sirindhorn\'s cup.'
  					),
  					_react2['default'].createElement(
  						'span',
  						{ style: { fontWeight: 400 } },
  						'Project:'
  					),
  					' ',
  					_react2['default'].createElement(
  						'a',
  						{ href: '/works#kyou', onClick: _componentsLink2['default'].handleClick },
  						'Kyou: HTML5 Interactive Digital Magazine Creator'
  					)
  				),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: '/achimg/security-1.jpeg',
  					title: 'Network security competition, IT Ladkrabang Open House 2012',
  					category: 'First place' }),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achimg/ict-1.jpg", "/achimg/ict-2.jpg"],
  					title: 'ICT Challenge 2012, SIT, KMUTT',
  					category: 'Third place' })
  			), _react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2013, key: 2013 },
  				_react2['default'].createElement(
  					_componentsAchievementGroup.AchievementItem,
  					{
  						image: ["/achievements/apicta.jpg", "/achimg/apicta-1.jpg", "/achimg/apicta-2.jpg", "/achimg/apicta-3.jpg", "/achimg/apicta-4.jpg"],
  						title: 'Asia Pacific ICT Award 2013 (APICTA 2013), Hong Kong',
  						category: 'Merit, school project category' },
  					_react2['default'].createElement(
  						'span',
  						{ style: { fontWeight: 400 } },
  						'Project:'
  					),
  					' ',
  					_react2['default'].createElement(
  						'a',
  						{ href: '/works#kyou', onClick: _componentsLink2['default'].handleClick },
  						'Kyou: HTML5 Interactive Digital Magazine Creator'
  					)
  				)
  			), _react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2014, key: 2014 },
  				_react2['default'].createElement(
  					_componentsAchievementGroup.AchievementItem,
  					{
  						image: '/achievements/youthday.jpg',
  						title: 'Thailand Youth Award 2014',
  						category: 'Merit, school project category' },
  					'In Mathematics, Science, Computer and Technology major from participating in Asia Pacific ICT Award 2013'
  				)
  			), _react2['default'].createElement(
  				_componentsAchievementGroup.AchievementGroup,
  				{ year: 2015, key: 2015 },
  				_react2['default'].createElement(
  					_componentsAchievementGroup.AchievementItem,
  					{
  						image: ["/achievements/ywc.jpg", "/achimg/ywc-1.jpg", "/achimg/ywc-2.jpg", "/achimg/ywc-3.jpg"],
  						title: 'Young Webmaster Camp 12',
  						category: 'Best Teamwork' },
  					_react2['default'].createElement(
  						'span',
  						{ style: { fontWeight: 400 } },
  						'Project:'
  					),
  					' ',
  					_react2['default'].createElement(
  						'a',
  						{ href: 'http://mixic.whs.in.th' },
  						'Mixic'
  					)
  				),
  				_react2['default'].createElement(_componentsAchievementGroup.AchievementItem, {
  					image: ["/achievements/asc.jpg", "/achimg/asc-1.jpg", "/achimg/asc-2.jpg", "/achimg/asc-3.jpg"],
  					title: 'ASC Student Computer Challenge 2015, China',
  					category: 'Team Lighting Green: First prize' })
  			)];
  		}
  	}]);

  	return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(5);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _componentsTimeline = __webpack_require__(13);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var _default = (function (_Component) {
  	_inherits(_default, _Component);

  	function _default() {
  		_classCallCheck(this, _default);

  		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(_default, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _componentsStyleScss2['default'].bio + ' container-fluid' },
  				_react2['default'].createElement(
  					'h1',
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: '/', onClick: _componentsLink2['default'].handleClick },
  						'Portfolio/ ',
  						_react2['default'].createElement(
  							'small',
  							null,
  							'<— Click to go back'
  						)
  					),
  					'Biography'
  				),
  				_react2['default'].createElement(
  					_componentsTimeline.Timeline,
  					null,
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'center' },
  						'Born on 29',
  						_react2['default'].createElement(
  							'sup',
  							null,
  							'th'
  						),
  						' October, 1994'
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'right', year: 1996 },
  						'Have one younger sister'
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'left', year: 2001 },
  						'Started school at',
  						_react2['default'].createElement(
  							'div',
  							null,
  							_react2['default'].createElement(
  								'a',
  								{ href: 'http://www.pramoch.th.edu', target: '_blank' },
  								_react2['default'].createElement(
  									'strong',
  									null,
  									'Pramochwittaya Ramindra'
  								)
  							)
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'right', year: 2004 },
  						'Learnt ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'http://php.net' },
  							'PHP'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'left', year: 2004 },
  						'Started using ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'http://ubuntu.com', target: '_blank' },
  							'Ubuntu 6.06'
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'right', year: 2004, multi: true },
  						'Started school at',
  						_react2['default'].createElement(
  							'div',
  							null,
  							_react2['default'].createElement(
  								'a',
  								{ href: 'http://www.bodin2.ac.th', target: '_blank' },
  								_react2['default'].createElement(
  									'strong',
  									null,
  									'Bodindecha (Sing Singhaseni) 2'
  								)
  							)
  						)
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'left', year: 2008 },
  						'Learnt Python'
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'right', year: 2011 },
  						'Registered whs.in.th'
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'left', year: 2012 },
  						'Scored 297.5, highest score in',
  						_react2['default'].createElement('br', null),
  						'NIETS\' General Aptitude Test',
  						_react2['default'].createElement('br', null),
  						'Round 1, Year 2013 (Tested October 2012)'
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'right', year: 2013 },
  						'Started undergraduate program at',
  						_react2['default'].createElement(
  							'div',
  							null,
  							_react2['default'].createElement(
  								'a',
  								{ href: 'http://www.ku.ac.th', target: '_blank' },
  								_react2['default'].createElement(
  									'strong',
  									null,
  									'Kasetsart University'
  								)
  							)
  						),
  						'International Undergraduate Program, Software and Knowledge Engineering'
  					),
  					_react2['default'].createElement(
  						_componentsTimeline.TimelineItem,
  						{ side: 'center' },
  						_react2['default'].createElement(
  							'a',
  							{ href: '/', onClick: _componentsLink2['default'].handleClick },
  							'Back to front page'
  						)
  					)
  				)
  			);
  		}
  	}]);

  	return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(5);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _reactIconsLibFaGlobe = __webpack_require__(6);

  var _reactIconsLibFaGlobe2 = _interopRequireDefault(_reactIconsLibFaGlobe);

  var _reactIconsLibFaLinkedin = __webpack_require__(47);

  var _reactIconsLibFaLinkedin2 = _interopRequireDefault(_reactIconsLibFaLinkedin);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _reactIconsLibFaFacebookOfficial = __webpack_require__(45);

  var _reactIconsLibFaFacebookOfficial2 = _interopRequireDefault(_reactIconsLibFaFacebookOfficial);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var _default = (function (_Component) {
  	_inherits(_default, _Component);

  	function _default() {
  		_classCallCheck(this, _default);

  		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(_default, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _componentsStyleScss2['default'].main + ' container-fluid' },
  				_react2['default'].createElement(
  					'div',
  					{ className: 'row' },
  					_react2['default'].createElement(
  						'div',
  						{ className: 'col-xs-12 col-md-8 ' + _componentsStyleScss2['default'].profile },
  						_react2['default'].createElement(
  							'h1',
  							{ className: _componentsStyleScss2['default'].name },
  							'Manatsawin Hanmongkolchai'
  						),
  						_react2['default'].createElement(
  							'div',
  							{ className: _componentsStyleScss2['default'].profileText },
  							_react2['default'].createElement(
  								'div',
  								null,
  								'An undergraduate studying in Software and Knowledge Engineering',
  								_react2['default'].createElement('br', null),
  								'at ',
  								_react2['default'].createElement(
  									'a',
  									{ href: 'http://iup.eng.ku.ac.th', target: '_blank' },
  									'Kasetsart University IUP program'
  								),
  								'.'
  							),
  							_react2['default'].createElement(
  								'div',
  								null,
  								'Knows ',
  								_react2['default'].createElement(
  									'strong',
  									null,
  									'Thai, English'
  								),
  								'.'
  							),
  							_react2['default'].createElement(
  								'div',
  								null,
  								'Codes ',
  								_react2['default'].createElement(
  									'strong',
  									null,
  									'Python, PHP'
  								),
  								' and ',
  								_react2['default'].createElement(
  									'strong',
  									null,
  									'JavaScript'
  								),
  								'.'
  							),
  							_react2['default'].createElement(
  								'div',
  								null,
  								'Prefers ',
  								_react2['default'].createElement(
  									'strong',
  									null,
  									'OSX'
  								),
  								' for Desktop, ',
  								_react2['default'].createElement(
  									'strong',
  									null,
  									'Debian GNU/Linux'
  								),
  								' for server.'
  							)
  						),
  						_react2['default'].createElement(
  							'ul',
  							{ className: _componentsStyleScss2['default'].iconBar },
  							_react2['default'].createElement(
  								'li',
  								null,
  								_react2['default'].createElement(
  									'a',
  									{ href: 'http://whs.in.th', className: 'icon' },
  									_react2['default'].createElement(_reactIconsLibFaGlobe2['default'], null)
  								)
  							),
  							_react2['default'].createElement(
  								'li',
  								null,
  								_react2['default'].createElement(
  									'a',
  									{ href: 'http://th.linkedin.com/in/manatsawin', className: 'icon' },
  									_react2['default'].createElement(_reactIconsLibFaLinkedin2['default'], null)
  								)
  							),
  							_react2['default'].createElement(
  								'li',
  								null,
  								_react2['default'].createElement(
  									'a',
  									{ href: 'https://facebook.com/whsinth', className: 'icon' },
  									_react2['default'].createElement(_reactIconsLibFaFacebookOfficial2['default'], null)
  								)
  							),
  							_react2['default'].createElement(
  								'li',
  								null,
  								_react2['default'].createElement(
  									'a',
  									{ href: 'https://github.com/whs', className: 'icon' },
  									_react2['default'].createElement(_reactIconsLibFaGithub2['default'], null)
  								)
  							)
  						)
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'col-xs-12 col-md-4 ' + _componentsStyleScss2['default'].menu },
  						_react2['default'].createElement(
  							'div',
  							{ className: 'row' },
  							_react2['default'].createElement(
  								'div',
  								{ className: _componentsStyleScss2['default'].box + ' col-xs-12' },
  								_react2['default'].createElement(
  									'a',
  									{ href: 'bio', onClick: _componentsLink2['default'].handleClick },
  									_react2['default'].createElement(
  										'span',
  										null,
  										'Biography'
  									)
  								)
  							)
  						),
  						_react2['default'].createElement(
  							'div',
  							{ className: 'row' },
  							_react2['default'].createElement(
  								'div',
  								{ className: _componentsStyleScss2['default'].box + ' col-xs-6' },
  								_react2['default'].createElement(
  									'a',
  									{ href: 'works', onClick: _componentsLink2['default'].handleClick },
  									_react2['default'].createElement(
  										'span',
  										null,
  										'Works'
  									)
  								)
  							),
  							_react2['default'].createElement(
  								'div',
  								{ className: _componentsStyleScss2['default'].box + ' col-xs-6' },
  								_react2['default'].createElement(
  									'a',
  									{ href: 'achievements', onClick: _componentsLink2['default'].handleClick },
  									_react2['default'].createElement(
  										'span',
  										null,
  										'Achievements'
  									)
  								)
  							)
  						)
  					)
  				)
  			);
  		}
  	}]);

  	return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(5);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var _default = (function (_Component) {
  	_inherits(_default, _Component);

  	function _default() {
  		_classCallCheck(this, _default);

  		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(_default, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: _componentsStyleScss2['default'].works },
  				_react2['default'].createElement(
  					'div',
  					{ className: _componentsStyleScss2['default'].item + ' container-fluid ' + _componentsStyleScss2['default'].toc, id: 'top' },
  					_react2['default'].createElement(
  						'h1',
  						null,
  						_react2['default'].createElement(
  							'a',
  							{ href: '/', onClick: _componentsLink2['default'].handleClick },
  							'Portfolio/ ',
  							_react2['default'].createElement(
  								'small',
  								null,
  								'<— Click to go back'
  							)
  						),
  						'Works'
  					),
  					_react2['default'].createElement(
  						'ul',
  						{ className: _componentsStyleScss2['default'].workList },
  						this.renderWorkList()
  					)
  				),
  				this.renderWork()
  			);
  		}
  	}, {
  		key: 'loadWork',
  		value: function loadWork(name) {
  			return __webpack_require__(39)("./" + name + '.js');
  		}
  	}, {
  		key: 'renderWork',
  		value: function renderWork() {
  			var contents = [];

  			var _iteratorNormalCompletion = true;
  			var _didIteratorError = false;
  			var _iteratorError = undefined;

  			try {
  				for (var _iterator = __webpack_require__(8)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  					var item = _step.value;

  					var element = this.loadWork(item);

  					contents.push(_react2['default'].createElement(element, { key: element.id }));
  				}
  			} catch (err) {
  				_didIteratorError = true;
  				_iteratorError = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion && _iterator['return']) {
  						_iterator['return']();
  					}
  				} finally {
  					if (_didIteratorError) {
  						throw _iteratorError;
  					}
  				}
  			}

  			return contents;
  		}
  	}, {
  		key: 'renderWorkList',
  		value: function renderWorkList() {
  			var workList = [];

  			var _iteratorNormalCompletion2 = true;
  			var _didIteratorError2 = false;
  			var _iteratorError2 = undefined;

  			try {
  				for (var _iterator2 = __webpack_require__(8)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
  					var item = _step2.value;

  					var element = this.loadWork(item);
  					var badges = [];

  					if (element.badges) {
  						badges = element.badges.map(function (badge, index) {
  							return _react2['default'].createElement(
  								'span',
  								{ className: _componentsStyleScss2['default'].badge, key: index },
  								badge
  							);
  						});
  					}

  					workList.push(_react2['default'].createElement(
  						'li',
  						{ key: element.id },
  						_react2['default'].createElement(
  							'a',
  							{ href: '#' + element.id, key: element.id },
  							element.title,
  							' ',
  							badges
  						)
  					));
  				}
  			} catch (err) {
  				_didIteratorError2 = true;
  				_iteratorError2 = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion2 && _iterator2['return']) {
  						_iterator2['return']();
  					}
  				} finally {
  					if (_didIteratorError2) {
  						throw _iteratorError2;
  					}
  				}
  			}

  			return workList;
  		}
  	}]);

  	return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGlobe = __webpack_require__(6);

  var _reactIconsLibFaGlobe2 = _interopRequireDefault(_reactIconsLibFaGlobe);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title, small: true },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/arg.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'http://valvearg.com/thankyou/whiteboard/', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGlobe2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Marketing the launch of a highly anticipated game Portal 2, Valve cooperated with indie game developers to create an ARG. (Alternate Reality Game) The ARG starts on 1 April 2011. On that day, various indie games have been updated. Players found that new, out of place stuff have been added to the games that could form cryptic clues that ultimately leads to ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'http://www.aperturescience.com/glados@home/' },
  							'GLaDOS@Home'
  						),
  						'.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'During the ARG, events were recorded in the ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'http://valvearg.com' },
  							'ValveARG wiki'
  						),
  						'. After the ARG have ended, one of the key player decided to ask the community to create a thank you page. Few days have passed with no news from the team. On April 22',
  						_react2['default'].createElement(
  							'sup',
  							null,
  							'nd'
  						),
  						' 2011, a countdown appeared on ValveARG.com. Press guessed it was a countdown to a DLC. After the countdown ended, people start flooding the message board with thank you messages to Valve. Over 1,722 people have shown their gratitude on the message board. The thank you messages were read by the indie developers and Valve.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'arg',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Valve ARG thank you whiteboard',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGlobe = __webpack_require__(6);

  var _reactIconsLibFaGlobe2 = _interopRequireDefault(_reactIconsLibFaGlobe);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/bcbk5.jpg' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'http://2014.barcampbangkhen.org/', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGlobe2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Barcamp Bangkhen is an annual unconference event held by the students\' club at Department of Computer Engineering, Kasetsart University.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'I wrote the entire website of Barcamp Bangkhen 5 with web design from Chonnipa, a friend of mine at Software and Knowledge Engineering.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'The website is designed with open data in mind. Every dynamic data are fetched by open, documented API. All dynamic content are rendered by AngularJS on the frontend. The site is also marked with ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'http://schema.org' },
  							'schema.org'
  						),
  						' markup and email communication has iCalendar event file.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'During the event the website ran smoothly with no downtime even with over 2,000 visitors.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'bcbk5',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Barcamp Bangkhen 5',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/bd2.in.th.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					{ small: true },
  					_react2['default'].createElement(
  						'p',
  						null,
  						'bd2.in.th was created by @ntklp in 2009. The first version was named Dek-BD2 and the forum ran on my personal server at my home. In 2010, we rebranded the site to bd2.in.th. The site was powered by WordPress and Simple Machines Forum. Later, WordPress was changed to Drupal with custom theme.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Major site redesign took place in summer 2011. The CMS was changed back to WordPress and the forum to Vanilla Forum. The site features a prominent top bar that links to multiple section of the sites:'
  					),
  					_react2['default'].createElement(
  						'ul',
  						null,
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(
  								'strong',
  								null,
  								'Front page:'
  							),
  							' WordPress news site. User can also login with their Facebook account.'
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(
  								'strong',
  								null,
  								'Blue Wave:'
  							),
  							' Our most popular section. A 24 hours internet radio. I wrote the custom DJ bot that handles this section when no DJ is online. Any user can request song in bot\'s database and it will be enqueued. When DJ is active, the request system can be viewed by DJ. The permission system is backed by WordPress\''
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(
  								'strong',
  								null,
  								'Webboard:'
  							),
  							' Vanilla Forum powered site. Vanilla was chosen for its simplicity and modernness. When a thread has new reply, people who subscribed will receive a site-wide notification which will appear in all section of the site, not just the webboard. Vanilla use WordPress as its one-click sign in provider.'
  						),
  						_react2['default'].createElement(
  							'li',
  							null,
  							_react2['default'].createElement(
  								'strong',
  								null,
  								'Playback:'
  							),
  							' Videos of classes for self-learning. Use a custom built system backed with WordPress authentication'
  						)
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'bd2',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'bd2.in.th',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGlobe = __webpack_require__(6);

  var _reactIconsLibFaGlobe2 = _interopRequireDefault(_reactIconsLibFaGlobe);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title, small: true },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/bd2score.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'http://www.bodin2.ac.th/test/', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGlobe2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'My school wanted to show students\' exam score as soon as possible as they\'re already using machines to process the answer cards. This application have evolved from the first version that used MooTools and supported only Internet Explorer (as Internet Explorer is the only browser that can read AJAX data in the correct encoding) to the second version, using jQuery UI and the character encoding is handled server-side.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'In 2009, Minprasat Wittaya school\'s teachers visited my school and asked for the source code of the system. They\'re using it to show their students\' grades online.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'In 2013, I rewrote the entire system due to security breach and load problems. The new system use only static JSON files. It also have Facebook share and Twitter post features. I also documented its API for future teachers and students.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'bd2score',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Online Exam Score Viewer',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title, badges: Work.badges, small: true },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/cdpb.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					'Source code is lost'
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'CDPB enable you to upload your package to a server and the server would compile the source to Debian package. It then put the package in a Debian repository. This software passed to the final round of National Software Competition 2009.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'cdpb',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Club Distro Package Builder',
  		enumerable: true
  	}, {
  		key: 'badges',
  		value: ['NSC11 Finalist'],
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/grader.jpg' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://github.com/whs/grader', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGithub2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'This untitled online programming judging system (grader) was used in SOSCamp 3, the introduction to programming camp for new SKE students held by their senior. It support various programming languages such as C, C#, PHP, Python, Java and Ruby.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'The frontend interface is written in AngularJS and has two versions, one is designed for simple of use and supports only one programming language and another one is designed to be similar to Google Code Jam\'s.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'The backend use a job queue to allow distribution of grading job over several machines (over 5 are used during SOSCamp). Each grading job spawns new Docker container to run untrusted code so that users may submit code using fork that some variants of grading sandbox disallowed such system calls.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'grader',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Grader',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _reactIconsLibFaAndroid = __webpack_require__(10);

  var _reactIconsLibFaAndroid2 = _interopRequireDefault(_reactIconsLibFaAndroid);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/k2usb.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://play.google.com/store/apps/details?id=th.in.whs.k2ausbkbd', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaAndroid2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://github.com/whs/K2AUSBKeyboard', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGithub2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Keepass2Android USB Keyboard Plugin allow users to send password in Keepass2Android to a connected PC with no additional hardware.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'The application use USB HID kernel API to allow phones to act as a keyboard to computers. It then convert password string from Keepass2Android to keyboard scancodes and send it to the kernel.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'k2aandroid',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'K2A USB Keyboard plugin',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _reactIconsLibFaAndroid = __webpack_require__(10);

  var _reactIconsLibFaAndroid2 = _interopRequireDefault(_reactIconsLibFaAndroid);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/kusmartbus-android.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://play.google.com/store/apps/details?id=th.in.whs.ku.bus', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaAndroid2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://github.com/whs/kubus-android', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGithub2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Created by Department of Civil Engineering, Kasetsart University, KUSmartBus project aims to help students to travel in the campus more efficiently by providing real time service bus location.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'There are two user-visible parts I created in this project: the Android application which is available on the Play Store and the bus information display which is installed on 3 locations on campus.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'The bus information display is powered by CentOS and Chromium. 24x7 operation is one of requirements for this task which the system maintained for months.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'kusmartbus',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'KUSmartBus',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title, badges: Work.badges },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/kyou.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://github.com/whs/kyou', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGithub2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Kyou is a HTML5 ebook editor. Kyou is used to create the entire of ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'https://chrome.google.com/webstore/detail/gjcchdjonjbnkcnafhbamkjpgchggbkn' },
  							'CoreAnime 2'
  						),
  						'.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'The goal of Kyou is to create an easy to use e-book editor that make books adapt to how we use the computers, instead of imitating paper books. No coding is nessesary to use Kyou.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Kyou won the first prize, H.R.H. Maha Chakri Sirindhorn\'s cup at National Software Competition 2012, Best in Edutainment at ICT Princess Awards, Runner-up at Thailand ICT Awards 2013 and Merit award at Asia-Pacific ICT Awards 2013, Hong Kong.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Kyou was open sourced in 2015.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'kyou',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'project Kyou',
  		enumerable: true
  	}, {
  		key: 'badges',
  		value: ['NSC15 winner', 'APICTA 2013 Merit'],
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGlobe = __webpack_require__(6);

  var _reactIconsLibFaGlobe2 = _interopRequireDefault(_reactIconsLibFaGlobe);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title, small: true },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/anusorn17.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'http://anusorn18.bd2.in.th.s3.amazonaws.com/register/index.html', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGlobe2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'@ntklp asked me to create a site to preorder the year book for the class of 2012 (my senior). I used Django to accomplish this and hosted it on Heroku. The application can be access standalone, or accessed from ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'https://www.facebook.com/anusornbodin2/app_230091100405985' },
  							'Facebook Page Tab'
  						),
  						'. It also features responsive design that adapts to desktop, tablets and phones.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Later, my guidance teacher asked me to create a site for students to register their university. I built it as another Django module to the same site. The site was completely success and guidance teachers in my school was happy with its analytical system that reduced manual labour.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'In my year (class of 2013) the whole system was rewritten using PHP and MongoDB to be more faster and more complex analytics can be performed using MongoDB\'s powerful MapReduce system.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'memorial',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Bodin 2 Memorial Site #17-18',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/menome.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'menome started in 2011 from the idea that there\'s no anime database in available in Thai. Created under the concept "Social + Anime", menome brings socializing to anime by letting you know whenever your friends watched anime.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'The backend is written with PHP, JavaScript (with Node.js backend) and Python. It use MongoDB and Redis as storage.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'One notable part of the site is the forum. The forum is reinvented using realtime technology so that topics now feels like a combination of chat and conventional topic. New posts appears in realtime just like chatting, and posts can be seeked backwards like conventional forum.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'menome is a product of ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'http://sunburn.in.th' },
  							'Sunburn Group'
  						),
  						' consisting of 3 programmers and a handful writers who take part in CoreAnime project and menome site content. I wrote all the code of the site and nearly the entire design.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'menome',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'menome',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title, badges: Work.badges },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/ovzcp.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://github.com/whs/OvzCP', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGithub2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'OvzCP is a web-based control panel for OpenVZ, a virtualization system for Linux. OvzCP is aimed to be user friendly by supporting internationalization and visualizations. OvzCP does not reinvent the wheels, but integrate many existing services such as Munin and Varnish.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'OvzCP features a mobile site that users can change their Varnish configuration and restart their container. Users also can access to their data using OvzCP API.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'OvzCP won the second prize from 13',
  						_react2['default'].createElement(
  							'sup',
  							null,
  							'th'
  						),
  						' National Software Competition and runner-up in Thailand ICT Award 2011'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'ovzcp',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'OvzCP',
  		enumerable: true
  	}, {
  		key: 'badges',
  		value: ['NSC13 2nd prize', 'TICTA 2011 Runner up'],
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGamepad = __webpack_require__(46);

  var _reactIconsLibFaGamepad2 = _interopRequireDefault(_reactIconsLibFaGamepad);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/snakerun.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'http://ske.whs.in.th/awkwin/snake/', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGamepad2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://github.com/whsatku/snake', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGithub2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Snake Run is a class project for Individual Software Process. It use Cocos2d-html5 for the engine, AngularJS for UI and Primus for near real time communication.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Snake Run features realtime online multiplayer in synchronized lock step model with deterministic simulation and offline play with A* bots. The game is a clone of the famous snake game featured in old Nokia phones, but with several things added on top; you compete with other players for highest score achieved when others rammed into you and there will be items that, when collected, cause special effects to your snake or other snakes such as inverting controls or being able to bite other snakes temporary.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'snakerun',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Snake Run',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaGithub = __webpack_require__(4);

  var _reactIconsLibFaGithub2 = _interopRequireDefault(_reactIconsLibFaGithub);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/streaming.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://github.com/whs/streaming', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaGithub2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Twitter people often discuss live TV shows together, which inspired me to create this application in 2012.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'The application use HTML5 video tag and sync its state with master application using WebSocket with Socket.IO. The chat effects was inspired by ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'http://niconico.com' },
  							'Nico Nico Douga'
  						),
  						' and Summer Wars. The application used menome API to authenticate, then later switched to Facebook.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'In 2015 the application now ships with a Dockerfile for ease of installation'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'streaming',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Streaming',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsItem = __webpack_require__(3);

  var _reactIconsLibFaChrome = __webpack_require__(44);

  var _reactIconsLibFaChrome2 = _interopRequireDefault(_reactIconsLibFaChrome);

  var _componentsStyleScss = __webpack_require__(2);

  var _componentsStyleScss2 = _interopRequireDefault(_componentsStyleScss);

  var Work = (function (_Component) {
  	_inherits(Work, _Component);

  	function Work() {
  		_classCallCheck(this, Work);

  		_get(Object.getPrototypeOf(Work.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(Work, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				_componentsItem.Item,
  				{ id: Work.id, title: Work.title },
  				_react2['default'].createElement(
  					_componentsItem.Image,
  					null,
  					_react2['default'].createElement('img', { src: '/work/twitica.png' })
  				),
  				_react2['default'].createElement(
  					_componentsItem.Access,
  					null,
  					_react2['default'].createElement(
  						'a',
  						{ href: 'https://chrome.google.com/webstore/detail/ogndknhgkahnialefpjkhmbekkobjfkh', className: _componentsStyleScss2['default'].icon },
  						_react2['default'].createElement(_reactIconsLibFaChrome2['default'], null)
  					)
  				),
  				_react2['default'].createElement(
  					_componentsItem.Description,
  					null,
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Twitica Desktop started life in 2010. It was an attempt to clone thaiWitter with ',
  						_react2['default'].createElement(
  							'a',
  							{ href: 'https://identi.ca' },
  							'identi.ca'
  						),
  						' support. The first version ran on my personal server using an API proxy. It is one of the first Twitter client to support the User Stream feature. Later, an optional extension was created named Twitica Desktop+ that removed the need for API proxy. The extension was then merged to the main application and now Twitica Desktop is completely self-supporting using JavaScript only.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Twitica Desktop use many HTML5 features, such as CSS3 Animations, CSS 3D Transformation, Web Worker, XMLHttpRequest 2, HTML5 File Drag & Drop.'
  					),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Twitica Desktop is now being used by over 200 users and being rewritten from scratch to be more optimized and customizable. The concept behind this is to bring mobile Twitter client experience to the desktop, and become configurable and programmable.'
  					)
  				)
  			);
  		}
  	}], [{
  		key: 'id',
  		value: 'twitica',
  		enumerable: true
  	}, {
  		key: 'title',
  		value: 'Twitica Desktop',
  		enumerable: true
  	}]);

  	return Work;
  })(_react.Component);

  exports['default'] = Work;
  module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"smallTitle":"RjoJ0b2Hz2NAr6ry3fk49","nav":"_25YUENO5uH2IrLsPAA-YMI","image":"aSM9SDwY0mfRCWOr1x2vw","access":"_2vKxsSa3sl_FPD_bZkENAE","description":"_2AQ0yp-lyVr_a_YbMcDV6z","small":"_2t3Ubwoez5mX6-2WaCdnT4","achievement":"PcKCuLSumtEXIWP1SJaFX","title":"_3TSCGmtQs2HFm4gKJ-eemz","skipHelp":"_2mC5qjA5QJJuPakF_EVSIw","skipHelpMobile":"_28cuAtuZtX6yzdg5PtL51-"};

/***/ },
/* 36 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"smallTitle":"_1Sa9-gITV43l5U4rkod9TY","nav":"_3cCdNKfX-BgxGA2SHNNgtj","image":"_1S0L-kyXP0G5naSuOmp0vB","access":"_3ZTMzobdI63F21zAEdSJOT","description":"_3QbWE1IAVrOTly3A8bexYk","small":"_2-aI-SWHvTAJh14p3oqCRs"};

/***/ },
/* 37 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"Link":"_1bdDNy9DBd2brlhpxBvH-1"};

/***/ },
/* 38 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin
  module.exports = {"timeline":"_2SIcR-ZxY1_lTnOw1hvP4a","spine":"_3Ju1FqE6WAPmW6N7Gnyte0","left":"_1vo1j0Yxj9K5IKYXhFoFMN","right":"Jm_do-V1MkzFeTxuzqE0I","center":"S3vnqzuhSrlVT9ueHG9Vy","year":"_1F8whUvPYR1UaFxcL7OqdU","box":"_1RPv89XfNcC10GTDxGd0Tu","multi":"_2es0gqjdxYacTX9VTNngK7","clearfix":"_1AEPYkTVVpJvq-V7PhiUnC"};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  var map = {
  	"./arg.js": 20,
  	"./bcbk5.js": 21,
  	"./bd2.js": 22,
  	"./bd2score.js": 23,
  	"./cdpb.js": 24,
  	"./grader.js": 25,
  	"./k2aandroid.js": 26,
  	"./kusmartbus.js": 27,
  	"./kyou.js": 28,
  	"./memorial.js": 29,
  	"./menome.js": 30,
  	"./ovzcp.js": 31,
  	"./snakerun.js": 32,
  	"./streaming.js": 33,
  	"./twitica.js": 34
  };
  function webpackContext(req) {
  	return __webpack_require__(webpackContextResolve(req));
  };
  function webpackContextResolve(req) {
  	return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
  };
  webpackContext.keys = function webpackContextKeys() {
  	return Object.keys(map);
  };
  webpackContext.resolve = webpackContextResolve;
  module.exports = webpackContext;
  webpackContext.id = 39;


/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/chrome");

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/facebook-official");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/gamepad");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/linkedin");

/***/ }
/******/ ]);