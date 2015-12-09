(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class HTTP
 */

var XHR_EVENTS = Symbol();
var HTTP_METHODS = Symbol();
var DEFAULT_HEADERS = Symbol();

var HTTP = (function () {
  function HTTP() {
    _classCallCheck(this, HTTP);

    this[HTTP_METHODS] = {
      GET: 'GET',
      PUT: 'PUT',
      POST: 'POST',
      DELETE: 'DELETE'
    };
    this[XHR_EVENTS] = {
      READY_STATE_CHANGE: 'readystatechange',
      PROGRESS: 'progress',
      TIMEOUT: 'timeout',
      ABORT: 'abort',
      ERROR: 'error',
      LOAD: 'load'
    };
    this[DEFAULT_HEADERS] = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  _createClass(HTTP, [{
    key: 'response',
    value: function response(xhr) {
      return {
        status: xhr.status,
        response: xhr.statusText || xhr.responseText || xhr.response
      };
    }
  }, {
    key: 'progress',
    value: function progress(evt) {
      this.percentage = Math.pow(evt.loaded / evt.total * 100);
    }
  }, {
    key: 'action',
    value: function action(url, method) {
      var _this = this;

      var payload = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
      var headers = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(_this[HTTP_METHODS][method], url, true);
        Object.keys(_this[DEFAULT_HEADERS]).forEach(function (key, index, headers) {
          xhr.setRequestHeader(key, headers[key]);
        });
        xhr.addEventListener(_this[XHR_EVENTS].LOAD, function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(_this.response(xhr));
          } else {
            reject(_this.response(xhr));
          }
        });
        xhr.addEventListener(_this[XHR_EVENTS].ABORT, function () {
          reject(_this.response(xhr));
        });
        xhr.addEventListener(_this[XHR_EVENTS].ERROR, function () {
          reject(_this.response(xhr));
        });
        xhr.addEventListener(_this[XHR_EVENTS].TIMEOUT, function () {
          reject(_this.response(xhr));
        });
        xhr.addEventListener(_this[XHR_EVENTS].PROGRESS, function (evt) {
          _this.progress(evt);
        });
        xhr.send(JSON.stringify(payload));
      });
    }
  }, {
    key: 'get',
    value: function get(url) {
      var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      return this.action.apply(this, [url, 'GET', payload]);
    }
  }, {
    key: 'put',
    value: function put(url) {
      var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      return this.action.apply(this, [url, 'PUT', payload]);
    }
  }, {
    key: 'post',
    value: function post(url) {
      var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      return this.action.apply(this, [url, 'POST', payload]);
    }
  }, {
    key: 'delete',
    value: function _delete(url) {
      var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      return this.action.apply(this, [url, 'DELETE', payload]);
    }
  }]);

  return HTTP;
})();

exports.default = HTTP;
;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhY3QtaHR0cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDS0EsSUFBTSxVQUFVLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDNUIsSUFBTSxZQUFZLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDOUIsSUFBTSxlQUFlLEdBQUcsTUFBTSxFQUFFLENBQUM7O0lBRVosSUFBSTtBQUV2QixXQUZtQixJQUFJLEdBRVQ7MEJBRkssSUFBSTs7QUFHckIsUUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHO0FBQ25CLFNBQUcsRUFBRSxLQUFLO0FBQ1YsU0FBRyxFQUFFLEtBQUs7QUFDVixVQUFJLEVBQUUsTUFBTTtBQUNaLFlBQU0sRUFBRSxRQUFRO0tBQ2pCLENBQUM7QUFDRixRQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7QUFDakIsd0JBQWtCLEVBQUUsa0JBQWtCO0FBQ3RDLGNBQVEsRUFBRSxVQUFVO0FBQ3BCLGFBQU8sRUFBRSxTQUFTO0FBQ2xCLFdBQUssRUFBRSxPQUFPO0FBQ2QsV0FBSyxFQUFFLE9BQU87QUFDZCxVQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7QUFDRixRQUFJLENBQUMsZUFBZSxDQUFDLEdBQUc7QUFDdEIsY0FBUSxFQUFFLGtCQUFrQjtBQUM1QixvQkFBYyxFQUFFLGtCQUFrQjtLQUNuQyxDQUFDO0dBQ0g7O2VBckJrQixJQUFJOzs2QkF1QmQsR0FBRyxFQUFFO0FBQ1osYUFBTztBQUNMLGNBQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtBQUNsQixnQkFBUSxFQUFHLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUMsUUFBUSxBQUFDO09BQy9ELENBQUM7S0FDSDs7OzZCQUVRLEdBQUcsRUFBRTtBQUNaLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxD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LENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN4RDs7OzRCQUVNLEdBQUcsRUFBNEI7VUFBMUIsT0FBTyx5REFBRyxFQUFFO1VBQUUsT0FBTyx5REFBQyxFQUFFOztBQUNsQyxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUMxRDs7O1NBcEZrQixJQUFJOzs7a0JBQUosSUFBSTtBQXNGeEIsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8qKlxuICogQGNsYXNzIEhUVFBcbiAqL1xuXG5jb25zdCBYSFJfRVZFTlRTID0gU3ltYm9sKCk7XG5jb25zdCBIVFRQX01FVEhPRFMgPSBTeW1ib2woKTtcbmNvbnN0IERFRkFVTFRfSEVBREVSUyA9IFN5bWJvbCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVFRQIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzW0hUVFBfTUVUSE9EU10gPSB7XG4gICAgICBHRVQ6ICdHRVQnLFxuICAgICAgUFVUOiAnUFVUJyxcbiAgICAgIFBPU1Q6ICdQT1NUJyxcbiAgICAgIERFTEVURTogJ0RFTEVURSdcbiAgICB9O1xuICAgIHRoaXNbWEhSX0VWRU5UU10gPSB7XG4gICAgICBSRUFEWV9TVEFURV9DSEFOR0U6ICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgICAgIFBST0dSRVNTOiAncHJvZ3Jlc3MnLFxuICAgICAgVElNRU9VVDogJ3RpbWVvdXQnLFxuICAgICAgQUJPUlQ6ICdhYm9ydCcsXG4gICAgICBFUlJPUjogJ2Vycm9yJyxcbiAgICAgIExPQUQ6ICdsb2FkJyxcbiAgICB9O1xuICAgIHRoaXNbREVGQVVMVF9IRUFERVJTXSA9IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfTtcbiAgfVxuXG4gIHJlc3BvbnNlKHhocikge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICByZXNwb25zZTogKHhoci5zdGF0dXNUZXh0IHx8IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlKVxuICAgIH07XG4gIH1cblxuICBwcm9ncmVzcyhldnQpIHtcbiAgICB0aGlzLnBlcmNlbnRhZ2UgPSBNYXRoLnBvdygoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkgKiAxMDApO1xuICB9XG5cbiAgYWN0aW9uKHVybCwgbWV0aG9kLCBwYXlsb2FkID0ge30sIGhlYWRlcnMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbihcbiAgICAgICAgKHRoaXNbSFRUUF9NRVRIT0RTXVttZXRob2RdKSxcbiAgICAgICAgKHVybCksXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzW0RFRkFVTFRfSEVBREVSU10pLmZvckVhY2goKGtleSwgaW5kZXgsIGhlYWRlcnMpID0+IHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pO1xuICAgICAgfSk7XG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcih0aGlzW1hIUl9FVkVOVFNdLkxPQUQsICgpID0+IHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UoeGhyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHRoaXMucmVzcG9uc2UoeGhyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIodGhpc1tYSFJfRVZFTlRTXS5BQk9SVCwgKCkgPT4ge1xuICAgICAgICByZWplY3QodGhpcy5yZXNwb25zZSh4aHIpKTtcbiAgICAgIH0pO1xuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIodGhpc1tYSFJfRVZFTlRTXS5FUlJPUiwgKCkgPT4ge1xuICAgICAgICByZWplY3QodGhpcy5yZXNwb25zZSh4aHIpKTtcbiAgICAgIH0pO1xuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIodGhpc1tYSFJfRVZFTlRTXS5USU1FT1VULCAoKSA9PiB7XG4gICAgICAgIHJlamVjdCh0aGlzLnJlc3BvbnNlKHhocikpO1xuICAgICAgfSk7XG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcih0aGlzW1hIUl9FVkVOVFNdLlBST0dSRVNTLCAoZXZ0KSA9PiB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MoZXZ0KTtcbiAgICAgIH0pO1xuICAgICAgeGhyLnNlbmQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0KHVybCwgcGF5bG9hZD17fSwgaGVhZGVycz17fSkge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbi5hcHBseSh0aGlzLCBbdXJsLCAnR0VUJywgcGF5bG9hZF0pO1xuICB9XG5cbiAgcHV0KHVybCwgcGF5bG9hZCA9IHt9LCBoZWFkZXJzPXt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uLmFwcGx5KHRoaXMsIFt1cmwsICdQVVQnLCBwYXlsb2FkXSk7XG4gIH1cblxuICBwb3N0KHVybCwgcGF5bG9hZCA9IHt9LCBoZWFkZXJzPXt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uLmFwcGx5KHRoaXMsIFt1cmwsICdQT1NUJywgcGF5bG9hZF0pO1xuICB9XG5cbiAgZGVsZXRlKHVybCwgcGF5bG9hZCA9IHt9LCBoZWFkZXJzPXt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uLmFwcGx5KHRoaXMsIFt1cmwsICdERUxFVEUnLCBwYXlsb2FkXSk7XG4gIH1cblxufTtcbiJdfQ==
