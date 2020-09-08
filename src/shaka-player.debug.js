/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
(function () {
  var innerGlobal = typeof window != "undefined" ? window : global;
  var exportTo = {};
  (function (window, global, module) {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var $jscomp = $jscomp || {};
    $jscomp.scope = {};
    $jscomp.arrayIteratorImpl = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
      }
    };
    $jscomp.arrayIterator = function (a) {
      return {next: $jscomp.arrayIteratorImpl(a)}
    };
    $jscomp.ASSUME_ES5 = !1;
    $jscomp.ASSUME_NO_NATIVE_MAP = !1;
    $jscomp.ASSUME_NO_NATIVE_SET = !1;
    $jscomp.SIMPLE_FROUND_POLYFILL = !1;
    $jscomp.ISOLATE_POLYFILLS = !1;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a
    };
    $jscomp.getGlobal = function (a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
      }
      throw Error("Cannot find global object");
    };
    $jscomp.global = $jscomp.getGlobal(this);
    $jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
    $jscomp.polyfills = {};
    $jscomp.propertyToPolyfillSymbol = {};
    $jscomp.POLYFILL_PREFIX = "$jscp$";
    var $jscomp$lookupPolyfilledValue = function (a, b) {
      var c = $jscomp.propertyToPolyfillSymbol[b];
      if (null == c) return a[b];
      c = a[c];
      return void 0 !== c ? c : a[b]
    };
    $jscomp.polyfill = function (a, b, c, d) {
      b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d))
    };
    $jscomp.polyfillUnisolated = function (a, b, c, d) {
      c = $jscomp.global;
      a = a.split(".");
      for (d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e]
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && $jscomp.defineProperty(c, a, {configurable: !0, writable: !0, value: b})
    };
    $jscomp.polyfillIsolated = function (a, b, c, d) {
      var e = a.split(".");
      a = 1 === e.length;
      d = e[0];
      d = !a && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
      for (var f = 0; f < e.length - 1; f++) {
        var g = e[f];
        g in d || (d[g] = {});
        d = d[g]
      }
      e = e[e.length - 1];
      c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
      b = b(c);
      null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {
        configurable: !0,
        writable: !0,
        value: b
      }) : b !== c && ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + e, e = $jscomp.propertyToPolyfillSymbol[e],
        $jscomp.defineProperty(d, e, {configurable: !0, writable: !0, value: b})))
    };
    $jscomp.initSymbol = function () {
    };
    $jscomp.polyfill("Symbol", function (a) {
      if (a) return a;
      var b = function (a, b) {
        this.$jscomp$symbol$id_ = a;
        $jscomp.defineProperty(this, "description", {configurable: !0, writable: !0, value: b})
      };
      b.prototype.toString = function () {
        return this.$jscomp$symbol$id_
      };
      var c = 0, d = function (a) {
        if (this instanceof d) throw new TypeError("Symbol is not a constructor");
        return new b("jscomp_symbol_" + (a || "") + "_" + c++, a)
      };
      return d
    }, "es6", "es3");
    $jscomp.initSymbolIterator = function () {
    };
    $jscomp.polyfill("Symbol.iterator", function (a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
          var d = $jscomp.global[b[c]];
          "function" === typeof d && "function" != typeof d.prototype[a] && $jscomp.defineProperty(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
            }
          })
        }
        return a
      }, "es6",
      "es3");
    $jscomp.initSymbolAsyncIterator = function () {
    };
    $jscomp.iteratorPrototype = function (a) {
      a = {next: a};
      a[Symbol.iterator] = function () {
        return this
      };
      return a
    };
    $jscomp.createTemplateTagFirstArg = function (a) {
      return a.raw = a
    };
    $jscomp.createTemplateTagFirstArgWithRaw = function (a, b) {
      a.raw = b;
      return a
    };
    $jscomp.makeIterator = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : $jscomp.arrayIterator(a)
    };
    $jscomp.arrayFromIterator = function (a) {
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      return c
    };
    $jscomp.arrayFromIterable = function (a) {
      return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
    };
    $jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {
      };
      b.prototype = a;
      return new b
    };
    $jscomp.underscoreProtoCanBeSet = function () {
      var a = {a: !0}, b = {};
      try {
        return b.__proto__ = a, b.a
      } catch (c) {
      }
      return !1
    };
    $jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null;
    $jscomp.inherits = function (a, b) {
      a.prototype = $jscomp.objectCreate(b.prototype);
      a.prototype.constructor = a;
      if ($jscomp.setPrototypeOf) {
        var c = $jscomp.setPrototypeOf;
        c(a, b)
      } else for (c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d)
      } else a[c] = b[c];
      a.superClass_ = b.prototype
    };
    $jscomp.generator = {};
    $jscomp.generator.ensureIteratorResultIsObject_ = function (a) {
      if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object");
    };
    $jscomp.generator.Context = function () {
      this.isRunning_ = !1;
      this.yieldAllIterator_ = null;
      this.yieldResult = void 0;
      this.nextAddress = 1;
      this.finallyAddress_ = this.catchAddress_ = 0;
      this.finallyContexts_ = this.abruptCompletion_ = null
    };
    $jscomp.generator.Context.prototype.start_ = function () {
      if (this.isRunning_) throw new TypeError("Generator is already running");
      this.isRunning_ = !0
    };
    $jscomp.generator.Context.prototype.stop_ = function () {
      this.isRunning_ = !1
    };
    $jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () {
      this.nextAddress = this.catchAddress_ || this.finallyAddress_
    };
    $jscomp.generator.Context.prototype.next_ = function (a) {
      this.yieldResult = a
    };
    $jscomp.generator.Context.prototype.throw_ = function (a) {
      this.abruptCompletion_ = {exception: a, isException: !0};
      this.jumpToErrorHandler_()
    };
    $jscomp.generator.Context.prototype["return"] = function (a) {
      this.abruptCompletion_ = {"return": a};
      this.nextAddress = this.finallyAddress_
    };
    $jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (a) {
      this.abruptCompletion_ = {jumpTo: a};
      this.nextAddress = this.finallyAddress_
    };
    $jscomp.generator.Context.prototype.yield = function (a, b) {
      this.nextAddress = b;
      return {value: a}
    };
    $jscomp.generator.Context.prototype.yieldAll = function (a, b) {
      var c = $jscomp.makeIterator(a), d = c.next();
      $jscomp.generator.ensureIteratorResultIsObject_(d);
      if (d.done) this.yieldResult = d.value, this.nextAddress = b; else return this.yieldAllIterator_ = c, this.yield(d.value, b)
    };
    $jscomp.generator.Context.prototype.jumpTo = function (a) {
      this.nextAddress = a
    };
    $jscomp.generator.Context.prototype.jumpToEnd = function () {
      this.nextAddress = 0
    };
    $jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (a, b) {
      this.catchAddress_ = a;
      void 0 != b && (this.finallyAddress_ = b)
    };
    $jscomp.generator.Context.prototype.setFinallyBlock = function (a) {
      this.catchAddress_ = 0;
      this.finallyAddress_ = a || 0
    };
    $jscomp.generator.Context.prototype.leaveTryBlock = function (a, b) {
      this.nextAddress = a;
      this.catchAddress_ = b || 0
    };
    $jscomp.generator.Context.prototype.enterCatchBlock = function (a) {
      this.catchAddress_ = a || 0;
      a = this.abruptCompletion_.exception;
      this.abruptCompletion_ = null;
      return a
    };
    $jscomp.generator.Context.prototype.enterFinallyBlock = function (a, b, c) {
      c ? this.finallyContexts_[c] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
      this.catchAddress_ = a || 0;
      this.finallyAddress_ = b || 0
    };
    $jscomp.generator.Context.prototype.leaveFinallyBlock = function (a, b) {
      var c = this.finallyContexts_.splice(b || 0)[0];
      if (c = this.abruptCompletion_ = this.abruptCompletion_ || c) {
        if (c.isException) return this.jumpToErrorHandler_();
        void 0 != c.jumpTo && this.finallyAddress_ < c.jumpTo ? (this.nextAddress = c.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_
      } else this.nextAddress = a
    };
    $jscomp.generator.Context.prototype.forIn = function (a) {
      return new $jscomp.generator.Context.PropertyIterator(a)
    };
    $jscomp.generator.Context.PropertyIterator = function (a) {
      this.object_ = a;
      this.properties_ = [];
      for (var b in a) this.properties_.push(b);
      this.properties_.reverse()
    };
    $jscomp.generator.Context.PropertyIterator.prototype.getNext = function () {
      for (; 0 < this.properties_.length;) {
        var a = this.properties_.pop();
        if (a in this.object_) return a
      }
      return null
    };
    $jscomp.generator.Engine_ = function (a) {
      this.context_ = new $jscomp.generator.Context;
      this.program_ = a
    };
    $jscomp.generator.Engine_.prototype.next_ = function (a) {
      this.context_.start_();
      if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
      this.context_.next_(a);
      return this.nextStep_()
    };
    $jscomp.generator.Engine_.prototype.return_ = function (a) {
      this.context_.start_();
      var b = this.context_.yieldAllIterator_;
      if (b) return this.yieldAllStep_("return" in b ? b["return"] : function (a) {
        return {value: a, done: !0}
      }, a, this.context_["return"]);
      this.context_["return"](a);
      return this.nextStep_()
    };
    $jscomp.generator.Engine_.prototype.throw_ = function (a) {
      this.context_.start_();
      if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
      this.context_.throw_(a);
      return this.nextStep_()
    };
    $jscomp.generator.Engine_.prototype.yieldAllStep_ = function (a, b, c) {
      try {
        var d = a.call(this.context_.yieldAllIterator_, b);
        $jscomp.generator.ensureIteratorResultIsObject_(d);
        if (!d.done) return this.context_.stop_(), d;
        var e = d.value
      } catch (f) {
        return this.context_.yieldAllIterator_ = null, this.context_.throw_(f), this.nextStep_()
      }
      this.context_.yieldAllIterator_ = null;
      c.call(this.context_, e);
      return this.nextStep_()
    };
    $jscomp.generator.Engine_.prototype.nextStep_ = function () {
      for (; this.context_.nextAddress;) try {
        var a = this.program_(this.context_);
        if (a) return this.context_.stop_(), {value: a.value, done: !1}
      } catch (b) {
        this.context_.yieldResult = void 0, this.context_.throw_(b)
      }
      this.context_.stop_();
      if (this.context_.abruptCompletion_) {
        a = this.context_.abruptCompletion_;
        this.context_.abruptCompletion_ = null;
        if (a.isException) throw a.exception;
        return {value: a["return"], done: !0}
      }
      return {value: void 0, done: !0}
    };
    $jscomp.generator.Generator_ = function (a) {
      this.next = function (b) {
        return a.next_(b)
      };
      this["throw"] = function (b) {
        return a.throw_(b)
      };
      this["return"] = function (b) {
        return a.return_(b)
      };
      this[Symbol.iterator] = function () {
        return this
      }
    };
    $jscomp.generator.createGenerator = function (a, b) {
      var c = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
      $jscomp.setPrototypeOf && $jscomp.setPrototypeOf(c, a.prototype);
      return c
    };
    $jscomp.FORCE_POLYFILL_PROMISE = !1;
    $jscomp.polyfill("Promise", function (a) {
      function b() {
        this.batch_ = null
      }

      function c(a) {
        return a instanceof e ? a : new e(function (b, c) {
          b(a)
        })
      }

      if (a && !$jscomp.FORCE_POLYFILL_PROMISE) return a;
      b.prototype.asyncExecute = function (a) {
        if (null == this.batch_) {
          this.batch_ = [];
          var b = this;
          this.asyncExecuteFunction(function () {
            b.executeBatch_()
          })
        }
        this.batch_.push(a)
      };
      var d = $jscomp.global.setTimeout;
      b.prototype.asyncExecuteFunction = function (a) {
        d(a, 0)
      };
      b.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length;) {
          var a =
            this.batch_;
          this.batch_ = [];
          for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            a[b] = null;
            try {
              c()
            } catch (l) {
              this.asyncThrow_(l)
            }
          }
        }
        this.batch_ = null
      };
      b.prototype.asyncThrow_ = function (a) {
        this.asyncExecuteFunction(function () {
          throw a;
        })
      };
      var e = function (a) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var b = this.createResolveAndReject_();
        try {
          a(b.resolve, b.reject)
        } catch (k) {
          b.reject(k)
        }
      };
      e.prototype.createResolveAndReject_ = function () {
        function a(a) {
          return function (d) {
            c || (c = !0, a.call(b, d))
          }
        }

        var b = this, c = !1;
        return {resolve: a(this.resolveTo_), reject: a(this.reject_)}
      };
      e.prototype.resolveTo_ = function (a) {
        if (a === this) this.reject_(new TypeError("A Promise cannot resolve to itself")); else if (a instanceof e) this.settleSameAsPromise_(a); else {
          a:switch (typeof a) {
            case "object":
              var b = null != a;
              break a;
            case "function":
              b = !0;
              break a;
            default:
              b = !1
          }
          b ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a)
        }
      };
      e.prototype.resolveToNonPromiseObj_ = function (a) {
        var b = void 0;
        try {
          b = a.then
        } catch (k) {
          this.reject_(k);
          return
        }
        "function" == typeof b ?
          this.settleSameAsThenable_(b, a) : this.fulfill_(a)
      };
      e.prototype.reject_ = function (a) {
        this.settle_(2, a)
      };
      e.prototype.fulfill_ = function (a) {
        this.settle_(1, a)
      };
      e.prototype.settle_ = function (a, b) {
        if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.state_);
        this.state_ = a;
        this.result_ = b;
        this.executeOnSettledCallbacks_()
      };
      e.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var a = 0; a < this.onSettledCallbacks_.length; ++a) f.asyncExecute(this.onSettledCallbacks_[a]);
          this.onSettledCallbacks_ = null
        }
      };
      var f = new b;
      e.prototype.settleSameAsPromise_ = function (a) {
        var b = this.createResolveAndReject_();
        a.callWhenSettled_(b.resolve, b.reject)
      };
      e.prototype.settleSameAsThenable_ = function (a, b) {
        var c = this.createResolveAndReject_();
        try {
          a.call(b, c.resolve, c.reject)
        } catch (l) {
          c.reject(l)
        }
      };
      e.prototype.then = function (a, b) {
        function c(a, b) {
          return "function" == typeof a ? function (b) {
            try {
              d(a(b))
            } catch (v) {
              f(v)
            }
          } : b
        }

        var d, f, g = new e(function (a, b) {
          d = a;
          f = b
        });
        this.callWhenSettled_(c(a, d), c(b, f));
        return g
      };
      e.prototype["catch"] = function (a) {
        return this.then(void 0, a)
      };
      e.prototype.callWhenSettled_ = function (a, b) {
        function c() {
          switch (d.state_) {
            case 1:
              a(d.result_);
              break;
            case 2:
              b(d.result_);
              break;
            default:
              throw Error("Unexpected state: " + d.state_);
          }
        }

        var d = this;
        null == this.onSettledCallbacks_ ? f.asyncExecute(c) : this.onSettledCallbacks_.push(c)
      };
      e.resolve = c;
      e.reject = function (a) {
        return new e(function (b, c) {
          c(a)
        })
      };
      e.race = function (a) {
        return new e(function (b, d) {
          for (var e = $jscomp.makeIterator(a), f = e.next(); !f.done; f =
            e.next()) c(f.value).callWhenSettled_(b, d)
        })
      };
      e.all = function (a) {
        var b = $jscomp.makeIterator(a), d = b.next();
        return d.done ? c([]) : new e(function (a, e) {
          function f(b) {
            return function (c) {
              g[b] = c;
              h--;
              0 == h && a(g)
            }
          }

          var g = [], h = 0;
          do g.push(void 0), h++, c(d.value).callWhenSettled_(f(g.length - 1), e), d = b.next(); while (!d.done)
        })
      };
      return e
    }, "es6", "es3");
    $jscomp.asyncExecutePromiseGenerator = function (a) {
      function b(b) {
        return a.next(b)
      }

      function c(b) {
        return a["throw"](b)
      }

      return new Promise(function (d, e) {
        function f(a) {
          a.done ? d(a.value) : Promise.resolve(a.value).then(b, c).then(f, e)
        }

        f(a.next())
      })
    };
    $jscomp.asyncExecutePromiseGeneratorFunction = function (a) {
      return $jscomp.asyncExecutePromiseGenerator(a())
    };
    $jscomp.asyncExecutePromiseGeneratorProgram = function (a) {
      return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))
    };
    $jscomp.checkEs6ConformanceViaProxy = function () {
      try {
        var a = {}, b = Object.create(new $jscomp.global.Proxy(a, {
          get: function (c, d, e) {
            return c == a && "q" == d && e == b
          }
        }));
        return !0 === b.q
      } catch (c) {
        return !1
      }
    };
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
    $jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
    $jscomp.owns = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    };
    $jscomp.polyfill("WeakMap", function (a) {
      function b() {
        if (!a || !Object.seal) return !1;
        try {
          var b = Object.seal({}), c = Object.seal({}), d = new a([[b, 2], [c, 3]]);
          if (2 != d.get(b) || 3 != d.get(c)) return !1;
          d["delete"](b);
          d.set(c, 4);
          return !d.has(b) && 4 == d.get(c)
        } catch (p) {
          return !1
        }
      }

      function c() {
      }

      function d(a) {
        var b = typeof a;
        return "object" === b && null !== a || "function" === b
      }

      function e(a) {
        if (!$jscomp.owns(a, g)) {
          var b = new c;
          $jscomp.defineProperty(a, g, {value: b})
        }
      }

      function f(a) {
        var b = Object[a];
        b && (Object[a] = function (a) {
          if (a instanceof
            c) return a;
          e(a);
          return b(a)
        })
      }

      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (a && $jscomp.ES6_CONFORMANCE) return a
      } else if (b()) return a;
      var g = "$jscomp_hidden_" + Math.random();
      f("freeze");
      f("preventExtensions");
      f("seal");
      var h = 0, k = function (a) {
        this.id_ = (h += Math.random() + 1).toString();
        if (a) {
          a = $jscomp.makeIterator(a);
          for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
        }
      };
      k.prototype.set = function (a, b) {
        if (!d(a)) throw Error("Invalid WeakMap key");
        e(a);
        if (!$jscomp.owns(a, g)) throw Error("WeakMap key fail: " +
          a);
        a[g][this.id_] = b;
        return this
      };
      k.prototype.get = function (a) {
        return d(a) && $jscomp.owns(a, g) ? a[g][this.id_] : void 0
      };
      k.prototype.has = function (a) {
        return d(a) && $jscomp.owns(a, g) && $jscomp.owns(a[g], this.id_)
      };
      k.prototype["delete"] = function (a) {
        return d(a) && $jscomp.owns(a, g) && $jscomp.owns(a[g], this.id_) ? delete a[g][this.id_] : !1
      };
      return k
    }, "es6", "es3");
    $jscomp.MapEntry = function () {
    };
    $jscomp.polyfill("Map", function (a) {
      function b() {
        if ($jscomp.ASSUME_NO_NATIVE_MAP || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var b = Object.seal({x: 4}), c = new a($jscomp.makeIterator([[b, "s"]]));
          if ("s" != c.get(b) || 1 != c.size || c.get({x: 4}) || c.set({x: 4}, "t") != c || 2 != c.size) return !1;
          var d = c.entries(), e = d.next();
          if (e.done || e.value[0] != b || "s" != e.value[1]) return !1;
          e = d.next();
          return e.done || 4 != e.value[0].x || "t" != e.value[1] || !d.next().done ? !1 : !0
        } catch (p) {
          return !1
        }
      }

      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (a && $jscomp.ES6_CONFORMANCE) return a
      } else if (b()) return a;
      var c = new WeakMap, d = function (a) {
        this.data_ = {};
        this.head_ = g();
        this.size = 0;
        if (a) {
          a = $jscomp.makeIterator(a);
          for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
        }
      };
      d.prototype.set = function (a, b) {
        a = 0 === a ? 0 : a;
        var c = e(this, a);
        c.list || (c.list = this.data_[c.id] = []);
        c.entry ? c.entry.value = b : (c.entry = {
          next: this.head_,
          previous: this.head_.previous,
          head: this.head_,
          key: a,
          value: b
        }, c.list.push(c.entry),
          this.head_.previous.next = c.entry, this.head_.previous = c.entry, this.size++);
        return this
      };
      d.prototype["delete"] = function (a) {
        a = e(this, a);
        return a.entry && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.data_[a.id], a.entry.previous.next = a.entry.next, a.entry.next.previous = a.entry.previous, a.entry.head = null, this.size--, !0) : !1
      };
      d.prototype.clear = function () {
        this.data_ = {};
        this.head_ = this.head_.previous = g();
        this.size = 0
      };
      d.prototype.has = function (a) {
        return !!e(this, a).entry
      };
      d.prototype.get = function (a) {
        return (a =
          e(this, a).entry) && a.value
      };
      d.prototype.entries = function () {
        return f(this, function (a) {
          return [a.key, a.value]
        })
      };
      d.prototype.keys = function () {
        return f(this, function (a) {
          return a.key
        })
      };
      d.prototype.values = function () {
        return f(this, function (a) {
          return a.value
        })
      };
      d.prototype.forEach = function (a, b) {
        for (var c = this.entries(), d; !(d = c.next()).done;) d = d.value, a.call(b, d[1], d[0], this)
      };
      d.prototype[Symbol.iterator] = d.prototype.entries;
      var e = function (a, b) {
          var d = b && typeof b;
          "object" == d || "function" == d ? c.has(b) ? d = c.get(b) :
            (d = "" + ++h, c.set(b, d)) : d = "p_" + b;
          var e = a.data_[d];
          if (e && $jscomp.owns(a.data_, d)) for (var f = 0; f < e.length; f++) {
            var g = e[f];
            if (b !== b && g.key !== g.key || b === g.key) return {id: d, list: e, index: f, entry: g}
          }
          return {id: d, list: e, index: -1, entry: void 0}
        }, f = function (a, b) {
          var c = a.head_;
          return $jscomp.iteratorPrototype(function () {
            if (c) {
              for (; c.head != a.head_;) c = c.previous;
              for (; c.next != c.head;) return c = c.next, {done: !1, value: b(c)};
              c = null
            }
            return {done: !0, value: void 0}
          })
        }, g = function () {
          var a = {};
          return a.previous = a.next = a.head = a
        },
        h = 0;
      return d
    }, "es6", "es3");
    $jscomp.polyfill("Set", function (a) {
      function b() {
        if ($jscomp.ASSUME_NO_NATIVE_SET || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
        try {
          var b = Object.seal({x: 4}), c = new a($jscomp.makeIterator([b]));
          if (!c.has(b) || 1 != c.size || c.add(b) != c || 1 != c.size || c.add({x: 4}) != c || 2 != c.size) return !1;
          var f = c.entries(), g = f.next();
          if (g.done || g.value[0] != b || g.value[1] != b) return !1;
          g = f.next();
          return g.done || g.value[0] == b || 4 != g.value[0].x || g.value[1] != g.value[0] ? !1 : f.next().done
        } catch (h) {
          return !1
        }
      }

      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (a && $jscomp.ES6_CONFORMANCE) return a
      } else if (b()) return a;
      var c = function (a) {
        this.map_ = new Map;
        if (a) {
          a = $jscomp.makeIterator(a);
          for (var b; !(b = a.next()).done;) this.add(b.value)
        }
        this.size = this.map_.size
      };
      c.prototype.add = function (a) {
        a = 0 === a ? 0 : a;
        this.map_.set(a, a);
        this.size = this.map_.size;
        return this
      };
      c.prototype["delete"] = function (a) {
        a = this.map_["delete"](a);
        this.size = this.map_.size;
        return a
      };
      c.prototype.clear = function () {
        this.map_.clear();
        this.size = 0
      };
      c.prototype.has = function (a) {
        return this.map_.has(a)
      };
      c.prototype.entries = function () {
        return this.map_.entries()
      };
      c.prototype.values = function () {
        return this.map_.values()
      };
      c.prototype.keys = c.prototype.values;
      c.prototype[Symbol.iterator] = c.prototype.values;
      c.prototype.forEach = function (a, b) {
        var c = this;
        this.map_.forEach(function (d) {
          return a.call(b, d, d, c)
        })
      };
      return c
    }, "es6", "es3");
    $jscomp.findInternal = function (a, b, c) {
      a instanceof String && (a = String(a));
      for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a)) return {i: e, v: f}
      }
      return {i: -1, v: void 0}
    };
    $jscomp.polyfill("Array.prototype.findIndex", function (a) {
      return a ? a : function (a, c) {
        return $jscomp.findInternal(this, a, c).i
      }
    }, "es6", "es3");
    $jscomp.polyfill("Promise.prototype.finally", function (a) {
      return a ? a : function (a) {
        return this.then(function (b) {
          return Promise.resolve(a()).then(function () {
            return b
          })
        }, function (b) {
          return Promise.resolve(a()).then(function () {
            throw b;
          })
        })
      }
    }, "es9", "es3");
    $jscomp.iteratorFromArray = function (a, b) {
      a instanceof String && (a += "");
      var c = 0, d = {
        next: function () {
          if (c < a.length) {
            var e = c++;
            return {value: b(e, a[e]), done: !1}
          }
          d.next = function () {
            return {done: !0, value: void 0}
          };
          return d.next()
        }
      };
      d[Symbol.iterator] = function () {
        return d
      };
      return d
    };
    $jscomp.polyfill("Object.is", function (a) {
      return a ? a : function (a, c) {
        return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c
      }
    }, "es6", "es3");
    $jscomp.polyfill("Array.prototype.includes", function (a) {
      return a ? a : function (a, c) {
        var b = this;
        b instanceof String && (b = String(b));
        var e = b.length, f = c || 0;
        for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
          var g = b[f];
          if (g === a || Object.is(g, a)) return !0
        }
        return !1
      }
    }, "es7", "es3");
    $jscomp.checkStringArgs = function (a, b, c) {
      if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
      if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
      return a + ""
    };
    $jscomp.polyfill("String.prototype.includes", function (a) {
      return a ? a : function (a, c) {
        return -1 !== $jscomp.checkStringArgs(this, a, "includes").indexOf(a, c || 0)
      }
    }, "es6", "es3");
    $jscomp.polyfill("Array.from", function (a) {
      return a ? a : function (a, c, d) {
        c = null != c ? c : function (a) {
          return a
        };
        var b = [], f = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if ("function" == typeof f) {
          a = f.call(a);
          for (var g = 0; !(f = a.next()).done;) b.push(c.call(d, f.value, g++))
        } else for (f = a.length, g = 0; g < f; g++) b.push(c.call(d, a[g], g));
        return b
      }
    }, "es6", "es3");
    $jscomp.polyfill("Array.prototype.find", function (a) {
      return a ? a : function (a, c) {
        return $jscomp.findInternal(this, a, c).v
      }
    }, "es6", "es3");
    $jscomp.polyfill("Math.log2", function (a) {
      return a ? a : function (a) {
        return Math.log(a) / Math.LN2
      }
    }, "es6", "es3");
    $jscomp.assign = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d) for (var e in d) $jscomp.owns(d, e) && (a[e] = d[e])
      }
      return a
    };
    $jscomp.polyfill("Object.assign", function (a) {
      return a || $jscomp.assign
    }, "es6", "es3");
    $jscomp.polyfill("Object.values", function (a) {
      return a ? a : function (a) {
        var b = [], d;
        for (d in a) $jscomp.owns(a, d) && b.push(a[d]);
        return b
      }
    }, "es8", "es3");
    $jscomp.polyfill("String.prototype.startsWith", function (a) {
      return a ? a : function (a, c) {
        var b = $jscomp.checkStringArgs(this, a, "startsWith");
        a += "";
        for (var e = b.length, f = a.length, g = Math.max(0, Math.min(c | 0, b.length)), h = 0; h < f && g < e;) if (b[g++] != a[h++]) return !1;
        return h >= f
      }
    }, "es6", "es3");
    var COMPILED = !0, goog = goog || {};
    goog.global = this || self;
    goog.exportPath_ = function (a, b, c) {
      a = a.split(".");
      c = c || goog.global;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    };
    goog.define = function (a, b) {
      var c = b;
      if (!COMPILED) {
        var d = goog.global.CLOSURE_UNCOMPILED_DEFINES, e = goog.global.CLOSURE_DEFINES;
        d && void 0 === d.nodeType && Object.prototype.hasOwnProperty.call(d, a) ? c = d[a] : e && void 0 === e.nodeType && Object.prototype.hasOwnProperty.call(e, a) && (c = e[a])
      }
      return c
    };
    goog.FEATURESET_YEAR = 2012;
    goog.DEBUG = !0;
    goog.LOCALE = "en";
    goog.TRUSTED_SITE = !0;
    goog.STRICT_MODE_COMPATIBLE = !0;
    goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
    goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
    goog.provide = function (a) {
      if (goog.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
      if (!COMPILED && goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
      goog.constructNamespace_(a)
    };
    goog.constructNamespace_ = function (a, b) {
      if (!COMPILED) {
        delete goog.implicitNamespaces_[a];
        for (var c = a; (c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c);) goog.implicitNamespaces_[c] = !0
      }
      goog.exportPath_(a, b)
    };
    goog.getScriptNonce = function (a) {
      if (a && a != goog.global) return goog.getScriptNonce_(a.document);
      null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
      return goog.cspNonce_
    };
    goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
    goog.cspNonce_ = null;
    goog.getScriptNonce_ = function (a) {
      return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a) ? a : ""
    };
    goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    goog.module = function (a) {
      if ("string" !== typeof a || !a || -1 == a.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
      if (!goog.isInGoogModuleLoader_()) throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
      if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
      goog.moduleLoaderState_.moduleName = a;
      if (!COMPILED) {
        if (goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
        delete goog.implicitNamespaces_[a]
      }
    };
    goog.module.get = function (a) {
      return goog.module.getInternal_(a)
    };
    goog.module.getInternal_ = function (a) {
      if (!COMPILED) {
        if (a in goog.loadedModules_) return goog.loadedModules_[a].exports;
        if (!goog.implicitNamespaces_[a]) return a = goog.getObjectByName(a), null != a ? a : null
      }
      return null
    };
    goog.ModuleType = {ES6: "es6", GOOG: "goog"};
    goog.moduleLoaderState_ = null;
    goog.isInModuleLoader_ = function () {
      return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
    };
    goog.isInGoogModuleLoader_ = function () {
      return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG
    };
    goog.isInEs6ModuleLoader_ = function () {
      if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) return !0;
      var a = goog.global.$jscomp;
      return a ? "function" != typeof a.getCurrentModulePath ? !1 : !!a.getCurrentModulePath() : !1
    };
    goog.module.declareLegacyNamespace = function () {
      if (!COMPILED && !goog.isInGoogModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
      if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
      goog.moduleLoaderState_.declareLegacyNamespace = !0
    };
    goog.declareModuleId = function (a) {
      if (!COMPILED) {
        if (!goog.isInEs6ModuleLoader_()) throw Error("goog.declareModuleId may only be called from within an ES6 module");
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) throw Error("goog.declareModuleId may only be called once per module.");
        if (a in goog.loadedModules_) throw Error('Module with namespace "' + a + '" already exists.');
      }
      if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = a; else {
        var b = goog.global.$jscomp;
        if (!b || "function" != typeof b.getCurrentModulePath) throw Error('Module with namespace "' +
          a + '" has been loaded incorrectly.');
        b = b.require(b.getCurrentModulePath());
        goog.loadedModules_[a] = {exports: b, type: goog.ModuleType.ES6, moduleId: a}
      }
    };
    goog.setTestOnly = function (a) {
      if (goog.DISALLOW_TEST_ONLY_CODE) throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
    };
    goog.forwardDeclare = function (a) {
    };
    COMPILED || (goog.isProvided_ = function (a) {
      return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && null != goog.getObjectByName(a)
    }, goog.implicitNamespaces_ = {"goog.module": !0});
    goog.getObjectByName = function (a, b) {
      for (var c = a.split("."), d = b || goog.global, e = 0; e < c.length; e++) if (d = d[c[e]], null == d) return null;
      return d
    };
    goog.globalize = function (a, b) {
      var c = b || goog.global, d;
      for (d in a) c[d] = a[d]
    };
    goog.addDependency = function (a, b, c, d) {
      !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a, b, c, d)
    };
    goog.ENABLE_DEBUG_LOADER = !1;
    goog.logToConsole_ = function (a) {
      goog.global.console && goog.global.console.error(a)
    };
    goog.require = function (a) {
      if (!COMPILED) {
        goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a);
        if (goog.isProvided_(a)) {
          if (goog.isInModuleLoader_()) return goog.module.getInternal_(a)
        } else if (goog.ENABLE_DEBUG_LOADER) {
          var b = goog.moduleLoaderState_;
          goog.moduleLoaderState_ = null;
          try {
            goog.debugLoader_.load_(a)
          } finally {
            goog.moduleLoaderState_ = b
          }
        }
        return null
      }
    };
    goog.requireType = function (a) {
      return {}
    };
    goog.basePath = "";
    goog.nullFunction = function () {
    };
    goog.abstractMethod = function () {
      throw Error("unimplemented abstract method");
    };
    goog.addSingletonGetter = function (a) {
      a.instance_ = void 0;
      a.getInstance = function () {
        if (a.instance_) return a.instance_;
        goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
        return a.instance_ = new a
      }
    };
    goog.instantiatedSingletons_ = [];
    goog.LOAD_MODULE_USING_EVAL = !0;
    goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
    goog.loadedModules_ = {};
    goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
    goog.TRANSPILE = "detect";
    goog.ASSUME_ES_MODULES_TRANSPILED = !1;
    goog.TRANSPILE_TO_LANGUAGE = "";
    goog.TRANSPILER = "transpile.js";
    goog.hasBadLetScoping = null;
    goog.useSafari10Workaround = function () {
      if (null == goog.hasBadLetScoping) {
        try {
          var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
        } catch (b) {
          a = !1
        }
        goog.hasBadLetScoping = a
      }
      return goog.hasBadLetScoping
    };
    goog.workaroundSafari10EvalBug = function (a) {
      return "(function(){" + a + "\n;})();\n"
    };
    goog.loadModule = function (a) {
      var b = goog.moduleLoaderState_;
      try {
        goog.moduleLoaderState_ = {moduleName: "", declareLegacyNamespace: !1, type: goog.ModuleType.GOOG};
        if (goog.isFunction(a)) var c = a.call(void 0, {}); else if ("string" === typeof a) goog.useSafari10Workaround() && (a = goog.workaroundSafari10EvalBug(a)), c = goog.loadModuleFromSource_.call(void 0, a); else throw Error("Invalid module definition");
        var d = goog.moduleLoaderState_.moduleName;
        if ("string" === typeof d && d) goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d,
          c) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c && null != c && Object.seal(c), goog.loadedModules_[d] = {
          exports: c,
          type: goog.ModuleType.GOOG,
          moduleId: goog.moduleLoaderState_.moduleName
        }; else throw Error('Invalid module name "' + d + '"');
      } finally {
        goog.moduleLoaderState_ = b
      }
    };
    goog.loadModuleFromSource_ = function (a) {
      eval(a);
      return {}
    };
    goog.normalizePath_ = function (a) {
      a = a.split("/");
      for (var b = 0; b < a.length;) "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
      return a.join("/")
    };
    goog.loadFileSync_ = function (a) {
      if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
      try {
        var b = new goog.global.XMLHttpRequest;
        b.open("get", a, !1);
        b.send();
        return 0 == b.status || 200 == b.status ? b.responseText : null
      } catch (c) {
        return null
      }
    };
    goog.transpile_ = function (a, b, c) {
      var d = goog.global.$jscomp;
      d || (goog.global.$jscomp = d = {});
      var e = d.transpile;
      if (!e) {
        var f = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f);
        if (g) {
          (function () {
            (0, eval)(g + "\n//# sourceURL=" + f)
          }).call(goog.global);
          if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
          goog.global.$jscomp.transpile =
            goog.global.$gwtExport.$jscomp.transpile;
          d = goog.global.$jscomp;
          e = d.transpile
        }
      }
      e || (e = d.transpile = function (a, b) {
        goog.logToConsole_(b + " requires transpilation but no transpiler was found.");
        return a
      });
      return e(a, b, c)
    };
    goog.typeOf = function (a) {
      var b = typeof a;
      if ("object" == b) if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
      } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b
    };
    goog.isArray = function (a) {
      return Array.isArray(a)
    };
    goog.isArrayLike = function (a) {
      var b = goog.typeOf(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    };
    goog.isDateLike = function (a) {
      return goog.isObject(a) && "function" == typeof a.getFullYear
    };
    goog.isFunction = function (a) {
      return "function" == goog.typeOf(a)
    };
    goog.isObject = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    };
    goog.getUid = function (a) {
      return Object.prototype.hasOwnProperty.call(a, goog.UID_PROPERTY_) && a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
    };
    goog.hasUid = function (a) {
      return !!a[goog.UID_PROPERTY_]
    };
    goog.removeUid = function (a) {
      null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
      try {
        delete a[goog.UID_PROPERTY_]
      } catch (b) {
      }
    };
    goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
    goog.uidCounter_ = 0;
    goog.getHashCode = goog.getUid;
    goog.removeHashCode = goog.removeUid;
    goog.cloneObject = function (a) {
      var b = goog.typeOf(a);
      if ("object" == b || "array" == b) {
        if ("function" === typeof a.clone) return a.clone();
        b = "array" == b ? [] : {};
        for (var c in a) b[c] = goog.cloneObject(a[c]);
        return b
      }
      return a
    };
    goog.bindNative_ = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    };
    goog.bindJs_ = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    };
    goog.bind = function (a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
      return goog.bind.apply(null, arguments)
    };
    goog.partial = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
      }
    };
    goog.mixin = function (a, b) {
      for (var c in b) a[c] = b[c]
    };
    goog.now = goog.TRUSTED_SITE && Date.now || function () {
      return +new Date
    };
    goog.globalEval = function (a) {
      if (goog.global.execScript) goog.global.execScript(a, "JavaScript"); else if (goog.global.eval) {
        if (null == goog.evalWorks_) try {
          goog.global.eval(""), goog.evalWorks_ = !0
        } catch (d) {
          goog.evalWorks_ = !1
        }
        if (goog.evalWorks_) goog.global.eval(a); else {
          var b = goog.global.document, c = b.createElement("script");
          c.type = "text/javascript";
          c.defer = !1;
          c.appendChild(b.createTextNode(a));
          b.head.appendChild(c);
          b.head.removeChild(c)
        }
      } else throw Error("goog.globalEval not available");
    };
    goog.evalWorks_ = null;
    goog.getCssName = function (a, b) {
      if ("." == String(a).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
      var c = function (a) {
        return goog.cssNameMapping_[a] || a
      }, d = function (a) {
        a = a.split("-");
        for (var b = [], d = 0; d < a.length; d++) b.push(c(a[d]));
        return b.join("-")
      };
      d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function (a) {
        return a
      };
      d = b ? a + "-" + d(b) : d(a);
      return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(d) : d
    };
    goog.setCssNameMapping = function (a, b) {
      goog.cssNameMapping_ = a;
      goog.cssNameMappingStyle_ = b
    };
    !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
    goog.getMsg = function (a, b, c) {
      c && c.html && (a = a.replace(/</g, "&lt;"));
      b && (a = a.replace(/\{\$([^}]+)}/g, function (a, c) {
        return null != b && c in b ? b[c] : a
      }));
      return a
    };
    goog.getMsgWithFallback = function (a, b) {
      return a
    };
    goog.exportSymbol = function (a, b, c) {
      goog.exportPath_(a, b, c)
    };
    goog.exportProperty = function (a, b, c) {
      a[b] = c
    };
    goog.inherits = function (a, b) {
      function c() {
      }

      c.prototype = b.prototype;
      a.superClass_ = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.base = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
      }
    };
    goog.scope = function (a) {
      if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
      a.call(goog.global)
    };
    COMPILED || (goog.global.COMPILED = COMPILED);
    goog.defineClass = function (a, b) {
      var c = b.constructor, d = b.statics;
      c && c != Object.prototype.constructor || (c = function () {
        throw Error("cannot instantiate an interface (no constructor defined).");
      });
      c = goog.defineClass.createSealingConstructor_(c, a);
      a && goog.inherits(c, a);
      delete b.constructor;
      delete b.statics;
      goog.defineClass.applyProperties_(c.prototype, b);
      null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
      return c
    };
    goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
    goog.defineClass.createSealingConstructor_ = function (a, b) {
      return goog.defineClass.SEAL_CLASS_INSTANCES ? function () {
        var b = a.apply(this, arguments) || this;
        b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_];
        return b
      } : a
    };
    goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    goog.defineClass.applyProperties_ = function (a, b) {
      for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
      for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++) c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
    };
    !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function () {
      var a = goog.global.document;
      return null != a && "write" in a
    }, goog.isDocumentLoading_ = function () {
      var a = goog.global.document;
      return a.attachEvent ? "complete" != a.readyState : "loading" == a.readyState
    }, goog.findBasePath_ = function () {
      if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH) goog.basePath = goog.global.CLOSURE_BASE_PATH; else if (goog.inHtmlDocument_()) {
        var a = goog.global.document, b = a.currentScript;
        a = b ? [b] : a.getElementsByTagName("SCRIPT");
        for (b = a.length - 1; 0 <= b; --b) {
          var c = a[b].src, d = c.lastIndexOf("?");
          d = -1 == d ? c.length : d;
          if ("base.js" == c.substr(d - 7, 7)) {
            goog.basePath = c.substr(0, d - 7);
            break
          }
        }
      }
    }, goog.findBasePath_(), goog.Transpiler = function () {
      this.requiresTranspilation_ = null;
      this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE
    }, goog.Transpiler.prototype.createRequiresTranspilation_ = function () {
      function a(a, b) {
        e ? d[a] = !0 : b() ? (c = a, d[a] = !1) : e = d[a] = !0
      }

      function b(a) {
        try {
          return !!eval(a)
        } catch (h) {
          return !1
        }
      }

      var c = "es3", d = {es3: !1}, e = !1,
        f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
      a("es5", function () {
        return b("[1,].length==1")
      });
      a("es6", function () {
        return f.match(/Edge\/(\d+)(\.\d)*/i) ? !1 : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')
      });
      a("es7", function () {
        return b("2 ** 2 == 4")
      });
      a("es8", function () {
        return b("async () => 1, true")
      });
      a("es9", function () {
        return b("({...rest} = {}), true")
      });
      a("es_next", function () {
        return !1
      });
      return {target: c, map: d}
    }, goog.Transpiler.prototype.needsTranspile = function (a, b) {
      if ("always" == goog.TRANSPILE) return !0;
      if ("never" == goog.TRANSPILE) return !1;
      if (!this.requiresTranspilation_) {
        var c = this.createRequiresTranspilation_();
        this.requiresTranspilation_ = c.map;
        this.transpilationTarget_ = this.transpilationTarget_ ||
          c.target
      }
      if (a in this.requiresTranspilation_) return this.requiresTranspilation_[a] ? !0 : !goog.inHtmlDocument_() || "es6" != b || "noModule" in goog.global.document.createElement("script") ? !1 : !0;
      throw Error("Unknown language mode: " + a);
    }, goog.Transpiler.prototype.transpile = function (a, b) {
      return goog.transpile_(a, b, this.transpilationTarget_)
    }, goog.transpiler_ = new goog.Transpiler, goog.protectScriptTag_ = function (a) {
      return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1")
    }, goog.DebugLoader_ = function () {
      this.dependencies_ = {};
      this.idToPath_ = {};
      this.written_ = {};
      this.loadingDeps_ = [];
      this.depsToLoad_ = [];
      this.paused_ = !1;
      this.factory_ = new goog.DependencyFactory(goog.transpiler_);
      this.deferredCallbacks_ = {};
      this.deferredQueue_ = []
    }, goog.DebugLoader_.prototype.bootstrap = function (a, b) {
      function c() {
        d && (goog.global.setTimeout(d, 0), d = null)
      }

      var d = b;
      if (a.length) {
        for (var e = [], f = 0; f < a.length; f++) {
          var g = this.getPathFromDeps_(a[f]);
          if (!g) throw Error("Unregonized namespace: " + a[f]);
          e.push(this.dependencies_[g])
        }
        g = goog.require;
        var h = 0;
        for (f =
               0; f < a.length; f++) g(a[f]), e[f].onLoad(function () {
          ++h == a.length && c()
        })
      } else c()
    }, goog.DebugLoader_.prototype.loadClosureDeps = function () {
      this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1));
      this.loadDeps_()
    }, goog.DebugLoader_.prototype.requested = function (a, b) {
      var c = this.getPathFromDeps_(a);
      if (c && (b || this.areDepsLoaded_(this.dependencies_[c].requires))) {
        var d = this.deferredCallbacks_[c];
        d && (delete this.deferredCallbacks_[c], d())
      }
    }, goog.DebugLoader_.prototype.setDependencyFactory =
      function (a) {
        this.factory_ = a
      }, goog.DebugLoader_.prototype.load_ = function (a) {
      if (this.getPathFromDeps_(a)) {
        var b = this, c = [], d = function (a) {
          var e = b.getPathFromDeps_(a);
          if (!e) throw Error("Bad dependency path or symbol: " + a);
          if (!b.written_[e]) {
            b.written_[e] = !0;
            a = b.dependencies_[e];
            for (e = 0; e < a.requires.length; e++) goog.isProvided_(a.requires[e]) || d(a.requires[e]);
            c.push(a)
          }
        };
        d(a);
        a = !!this.depsToLoad_.length;
        this.depsToLoad_ = this.depsToLoad_.concat(c);
        this.paused_ || a || this.loadDeps_()
      } else throw a = "goog.require could not find: " +
        a, goog.logToConsole_(a), Error(a);
    }, goog.DebugLoader_.prototype.loadDeps_ = function () {
      for (var a = this, b = this.paused_; this.depsToLoad_.length && !b;) (function () {
        var c = !1, d = a.depsToLoad_.shift(), e = !1;
        a.loading_(d);
        var f = {
          pause: function () {
            if (c) throw Error("Cannot call pause after the call to load.");
            b = !0
          }, resume: function () {
            c ? a.resume_() : b = !1
          }, loaded: function () {
            if (e) throw Error("Double call to loaded.");
            e = !0;
            a.loaded_(d)
          }, pending: function () {
            for (var b = [], c = 0; c < a.loadingDeps_.length; c++) b.push(a.loadingDeps_[c]);
            return b
          }, setModuleState: function (a) {
            goog.moduleLoaderState_ = {type: a, moduleName: "", declareLegacyNamespace: !1}
          }, registerEs6ModuleExports: function (a, b, c) {
            c && (goog.loadedModules_[c] = {exports: b, type: goog.ModuleType.ES6, moduleId: c || ""})
          }, registerGoogModuleExports: function (a, b) {
            goog.loadedModules_[a] = {exports: b, type: goog.ModuleType.GOOG, moduleId: a}
          }, clearModuleState: function () {
            goog.moduleLoaderState_ = null
          }, defer: function (b) {
            if (c) throw Error("Cannot register with defer after the call to load.");
            a.defer_(d,
              b)
          }, areDepsLoaded: function () {
            return a.areDepsLoaded_(d.requires)
          }
        };
        try {
          d.load(f)
        } finally {
          c = !0
        }
      })();
      b && this.pause_()
    }, goog.DebugLoader_.prototype.pause_ = function () {
      this.paused_ = !0
    }, goog.DebugLoader_.prototype.resume_ = function () {
      this.paused_ && (this.paused_ = !1, this.loadDeps_())
    }, goog.DebugLoader_.prototype.loading_ = function (a) {
      this.loadingDeps_.push(a)
    }, goog.DebugLoader_.prototype.loaded_ = function (a) {
      for (var b = 0; b < this.loadingDeps_.length; b++) if (this.loadingDeps_[b] == a) {
        this.loadingDeps_.splice(b, 1);
        break
      }
      for (b = 0; b < this.deferredQueue_.length; b++) if (this.deferredQueue_[b] == a.path) {
        this.deferredQueue_.splice(b, 1);
        break
      }
      if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) for (; this.deferredQueue_.length;) this.requested(this.deferredQueue_.shift(), !0);
      a.loaded()
    }, goog.DebugLoader_.prototype.areDepsLoaded_ = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.getPathFromDeps_(a[b]);
        if (!c || !(c in this.deferredCallbacks_ || goog.isProvided_(a[b]))) return !1
      }
      return !0
    }, goog.DebugLoader_.prototype.getPathFromDeps_ =
      function (a) {
        return a in this.idToPath_ ? this.idToPath_[a] : a in this.dependencies_ ? a : null
      }, goog.DebugLoader_.prototype.defer_ = function (a, b) {
      this.deferredCallbacks_[a.path] = b;
      this.deferredQueue_.push(a.path)
    }, goog.LoadController = function () {
    }, goog.LoadController.prototype.pause = function () {
    }, goog.LoadController.prototype.resume = function () {
    }, goog.LoadController.prototype.loaded = function () {
    }, goog.LoadController.prototype.pending = function () {
    }, goog.LoadController.prototype.registerEs6ModuleExports = function (a,
                                                                          b, c) {
    }, goog.LoadController.prototype.setModuleState = function (a) {
    }, goog.LoadController.prototype.clearModuleState = function () {
    }, goog.LoadController.prototype.defer = function (a) {
    }, goog.LoadController.prototype.areDepsLoaded = function () {
    }, goog.Dependency = function (a, b, c, d, e) {
      this.path = a;
      this.relativePath = b;
      this.provides = c;
      this.requires = d;
      this.loadFlags = e;
      this.loaded_ = !1;
      this.loadCallbacks_ = []
    }, goog.Dependency.prototype.getPathName = function () {
      var a = this.path, b = a.indexOf("://");
      0 <= b && (a = a.substring(b + 3), b =
        a.indexOf("/"), 0 <= b && (a = a.substring(b + 1)));
      return a
    }, goog.Dependency.prototype.onLoad = function (a) {
      this.loaded_ ? a() : this.loadCallbacks_.push(a)
    }, goog.Dependency.prototype.loaded = function () {
      this.loaded_ = !0;
      var a = this.loadCallbacks_;
      this.loadCallbacks_ = [];
      for (var b = 0; b < a.length; b++) a[b]()
    }, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function (a) {
      var b = Math.random().toString(32);
      goog.Dependency.callbackMap_[b] = a;
      return b
    }, goog.Dependency.unregisterCallback_ =
      function (a) {
        delete goog.Dependency.callbackMap_[a]
      }, goog.Dependency.callback_ = function (a, b) {
      if (a in goog.Dependency.callbackMap_) {
        for (var c = goog.Dependency.callbackMap_[a], d = [], e = 1; e < arguments.length; e++) d.push(arguments[e]);
        c.apply(void 0, d)
      } else throw Error("Callback key " + a + " does not exist (was base.js loaded more than once?).");
    }, goog.Dependency.prototype.load = function (a) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause(); else if (goog.inHtmlDocument_()) {
        var b =
          goog.global.document;
        if ("complete" == b.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
          if (/\bdeps.js$/.test(this.path)) {
            a.loaded();
            return
          }
          throw Error('Cannot write "' + this.path + '" after document load');
        }
        if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
          var c = goog.Dependency.registerCallback_(function (b) {
            goog.DebugLoader_.IS_OLD_IE_ && "complete" != b.readyState || (goog.Dependency.unregisterCallback_(c), a.loaded())
          }), d = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ?
            ' nonce="' + goog.getScriptNonce() + '"' : "";
          d = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + "=\"goog.Dependency.callback_('" + c + '\', this)" type="text/javascript" ' + (goog.Dependency.defer_ ? "defer" : "") + d + ">\x3c/script>";
          b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d) : d)
        } else {
          var e = b.createElement("script");
          e.defer = goog.Dependency.defer_;
          e.async = !1;
          e.type = "text/javascript";
          (d = goog.getScriptNonce()) && e.setAttribute("nonce", d);
          goog.DebugLoader_.IS_OLD_IE_ ?
            (a.pause(), e.onreadystatechange = function () {
              if ("loaded" == e.readyState || "complete" == e.readyState) a.loaded(), a.resume()
            }) : e.onload = function () {
              e.onload = null;
              a.loaded()
            };
          e.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
          b.head.appendChild(e)
        }
      } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."),
        a.loaded()) : a.pause()
    }, goog.Es6ModuleDependency = function (a, b, c, d, e) {
      goog.Dependency.call(this, a, b, c, d, e)
    }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function (a) {
      function b(a, b) {
        var c = b ? '<script type="module" crossorigin>' + b + "\x3c/script>" : '<script type="module" crossorigin src="' + a + '">\x3c/script>';
        d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(c) : c)
      }

      function c(a, b) {
        var c = d.createElement("script");
        c.defer = !0;
        c.async = !1;
        c.type = "module";
        c.setAttribute("crossorigin", !0);
        var e = goog.getScriptNonce();
        e && c.setAttribute("nonce", e);
        b ? c.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b) : b : c.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a) : a;
        d.head.appendChild(c)
      }

      if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause(); else if (goog.inHtmlDocument_()) {
        var d = goog.global.document, e = this;
        if (goog.isDocumentLoading_()) {
          var f =
            b;
          goog.Dependency.defer_ = !0
        } else f = c;
        var g = goog.Dependency.registerCallback_(function () {
          goog.Dependency.unregisterCallback_(g);
          a.setModuleState(goog.ModuleType.ES6)
        });
        f(void 0, 'goog.Dependency.callback_("' + g + '")');
        f(this.path, void 0);
        var h = goog.Dependency.registerCallback_(function (b) {
          goog.Dependency.unregisterCallback_(h);
          a.registerEs6ModuleExports(e.path, b, goog.moduleLoaderState_.moduleName)
        });
        f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
        var k = goog.Dependency.registerCallback_(function () {
          goog.Dependency.unregisterCallback_(k);
          a.clearModuleState();
          a.loaded()
        });
        f(void 0, 'goog.Dependency.callback_("' + k + '")')
      } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause()
    }, goog.TransformedDependency = function (a, b, c, d, e) {
      goog.Dependency.call(this, a, b, c, d, e);
      this.contents_ = null;
      this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"))
    }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function (a) {
      function b() {
        e.contents_ =
          goog.loadFileSync_(e.path);
        e.contents_ && (e.contents_ = e.transform(e.contents_), e.contents_ && (e.contents_ += "\n//# sourceURL=" + e.path))
      }

      function c() {
        e.lazyFetch_ && b();
        if (e.contents_) {
          f && a.setModuleState(goog.ModuleType.ES6);
          try {
            var c = e.contents_;
            e.contents_ = null;
            goog.globalEval(c);
            if (f) var d = goog.moduleLoaderState_.moduleName
          } finally {
            f && a.clearModuleState()
          }
          f && goog.global.$jscomp.require.ensure([e.getPathName()], function () {
            a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()),
              d)
          });
          a.loaded()
        }
      }

      function d() {
        var a = goog.global.document, b = goog.Dependency.registerCallback_(function () {
            goog.Dependency.unregisterCallback_(b);
            c()
          }),
          d = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b + '");') + "\x3c/script>";
        a.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d) : d)
      }

      var e = this;
      if (goog.global.CLOSURE_IMPORT_SCRIPT) b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a.loaded()) : a.pause();
      else {
        var f = this.loadFlags.module == goog.ModuleType.ES6;
        this.lazyFetch_ || b();
        var g = 1 < a.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
        g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
        if (h || g) a.defer(function () {
          c()
        }); else {
          var k = goog.global.document;
          h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
          if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
            goog.Dependency.defer_ = !0;
            a.pause();
            var l = k.onreadystatechange;
            k.onreadystatechange = function () {
              "interactive" == k.readyState && (k.onreadystatechange =
                l, c(), a.resume());
              goog.isFunction(l) && l.apply(void 0, arguments)
            }
          } else !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d() : c()
        }
      }
    }, goog.TransformedDependency.prototype.transform = function (a) {
    }, goog.TranspiledDependency = function (a, b, c, d, e, f) {
      goog.TransformedDependency.call(this, a, b, c, d, e);
      this.transpiler = f
    }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function (a) {
      return this.transpiler.transpile(a, this.getPathName())
    },
      goog.PreTranspiledEs6ModuleDependency = function (a, b, c, d, e) {
        goog.TransformedDependency.call(this, a, b, c, d, e)
      }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function (a) {
      return a
    }, goog.GoogModuleDependency = function (a, b, c, d, e, f, g) {
      goog.TransformedDependency.call(this, a, b, c, d, e);
      this.needsTranspile_ = f;
      this.transpiler_ = g
    }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform =
      function (a) {
        this.needsTranspile_ && (a = this.transpiler_.transpile(a, this.getPathName()));
        return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n"
      }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function (a, b, c,
                                                                                                                                                                         d) {
      b = b || [];
      a = a.replace(/\\/g, "/");
      var e = goog.normalizePath_(goog.basePath + a);
      d && "boolean" !== typeof d || (d = d ? {module: goog.ModuleType.GOOG} : {});
      c = this.factory_.createDependency(e, a, b, c, d, goog.transpiler_.needsTranspile(d.lang || "es3", d.module));
      this.dependencies_[e] = c;
      for (c = 0; c < b.length; c++) this.idToPath_[b[c]] = e;
      this.idToPath_[a] = e
    }, goog.DependencyFactory = function (a) {
      this.transpiler = a
    }, goog.DependencyFactory.prototype.createDependency = function (a, b, c, d, e, f) {
      return e.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a,
        b, c, d, e, f, this.transpiler) : f ? new goog.TranspiledDependency(a, b, c, d, e, this.transpiler) : e.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a, b, c, d, e) : new goog.Es6ModuleDependency(a, b, c, d, e) : new goog.Dependency(a, b, c, d, e)
    }, goog.debugLoader_ = new goog.DebugLoader_, goog.loadClosureDeps = function () {
      goog.debugLoader_.loadClosureDeps()
    }, goog.setDependencyFactory = function (a) {
      goog.debugLoader_.setDependencyFactory(a)
    }, goog.TRUSTED_TYPES_POLICY_ =
      goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function (a, b) {
      goog.debugLoader_.bootstrap(a, b)
    });
    goog.TRUSTED_TYPES_POLICY_NAME = "";
    goog.identity_ = function (a) {
      return a
    };
    goog.createTrustedTypesPolicy = function (a) {
      var b = null, c = goog.global.trustedTypes;
      if (!c || !c.createPolicy) return b;
      try {
        b = c.createPolicy(a, {
          createHTML: goog.identity_,
          createScript: goog.identity_,
          createScriptURL: goog.identity_
        })
      } catch (d) {
        goog.logToConsole_(d.message)
      }
      return b
    };/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    goog.asserts = function () {
    };
    goog.asserts.assert = function (a, b) {
    };
    goog.asserts.ENABLE_ASSERTS = !0;
    goog.asserts.ENABLE_ASSERTS && console.assert && console.assert.bind && (goog.asserts.assert = console.assert.bind(console));
    window.shaka = {abr: {}};
    shaka.abr.Ewma = function (a) {
      goog.asserts.assert(0 < a, "expected halfLife to be positive");
      this.alpha_ = Math.exp(Math.log(.5) / a);
      this.totalWeight_ = this.estimate_ = 0
    };
    shaka.abr.Ewma.prototype.sample = function (a, b) {
      var c = Math.pow(this.alpha_, a);
      c = b * (1 - c) + c * this.estimate_;
      isNaN(c) || (this.estimate_ = c, this.totalWeight_ += a)
    };
    shaka.abr.Ewma.prototype.getEstimate = function () {
      return this.estimate_ / (1 - Math.pow(this.alpha_, this.totalWeight_))
    };
    shaka.abr.EwmaBandwidthEstimator = function () {
      this.fast_ = new shaka.abr.Ewma(2);
      this.slow_ = new shaka.abr.Ewma(5);
      this.bytesSampled_ = 0;
      this.minTotalBytes_ = 128E3;
      this.minBytes_ = 16E3
    };
    shaka.abr.EwmaBandwidthEstimator.prototype.sample = function (a, b) {
      if (!(b < this.minBytes_)) {
        var c = 8E3 * b / a, d = a / 1E3;
        this.bytesSampled_ += b;
        this.fast_.sample(d, c);
        this.slow_.sample(d, c)
      }
    };
    shaka.abr.EwmaBandwidthEstimator.prototype.getBandwidthEstimate = function (a) {
      return this.bytesSampled_ < this.minTotalBytes_ ? a : Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
    };
    shaka.abr.EwmaBandwidthEstimator.prototype.hasGoodEstimate = function () {
      return this.bytesSampled_ >= this.minTotalBytes_
    };
    shaka.log = function () {
    };
    shaka.log.alwaysError = function (a) {
    };
    shaka.log.alwaysWarn = function (a) {
    };
    shaka.log.warnOnce = function (a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
      shaka.log.oneTimeWarningIssued_.has(a) || (shaka.log.oneTimeWarningIssued_.add(a), shaka.log.alwaysWarn.apply(shaka.log, $jscomp.arrayFromIterable(c)))
    };
    shaka.log.error = function (a) {
    };
    shaka.log.warning = function (a) {
    };
    shaka.log.info = function (a) {
    };
    shaka.log.debug = function (a) {
    };
    shaka.log.v1 = function (a) {
    };
    shaka.log.v2 = function (a) {
    };
    shaka.log.Level = {NONE: 0, ERROR: 1, WARNING: 2, INFO: 3, DEBUG: 4, V1: 5, V2: 6};
    shaka.log.MAX_LOG_LEVEL = 4;
    shaka.log.oneTimeWarningIssued_ = new Set;
    if (window.console && window.console.log.bind) {
      var $jscomp$compprop0 = {};
      shaka.log.logMap_ = ($jscomp$compprop0[shaka.log.Level.ERROR] = console.error.bind(console), $jscomp$compprop0[shaka.log.Level.WARNING] = console.warn.bind(console), $jscomp$compprop0[shaka.log.Level.INFO] = console.info.bind(console), $jscomp$compprop0[shaka.log.Level.DEBUG] = console.log.bind(console), $jscomp$compprop0[shaka.log.Level.V1] = console.debug.bind(console), $jscomp$compprop0[shaka.log.Level.V2] = console.debug.bind(console), $jscomp$compprop0);
      shaka.log.alwaysWarn = shaka.log.logMap_[shaka.log.Level.WARNING];
      shaka.log.alwaysError = shaka.log.logMap_[shaka.log.Level.ERROR];
      goog.DEBUG ? (goog.exportSymbol("shaka.log", shaka.log), shaka.log.setLevel = function (a) {
        var b = function (b) {
          return b <= a ? (goog.asserts.assert(shaka.log.logMap_[b], "Unexpected log level"), shaka.log.logMap_[b]) : function () {
          }
        };
        shaka.log.currentLevel = a;
        shaka.log.error = b(shaka.log.Level.ERROR);
        shaka.log.warning = b(shaka.log.Level.WARNING);
        shaka.log.info = b(shaka.log.Level.INFO);
        shaka.log.debug =
          b(shaka.log.Level.DEBUG);
        shaka.log.v1 = b(shaka.log.Level.V1);
        shaka.log.v2 = b(shaka.log.Level.V2)
      }, shaka.log.setLevel(shaka.log.MAX_LOG_LEVEL)) : (shaka.log.MAX_LOG_LEVEL >= shaka.log.Level.ERROR && (shaka.log.error = shaka.log.logMap_[shaka.log.Level.ERROR]), shaka.log.MAX_LOG_LEVEL >= shaka.log.Level.WARNING && (shaka.log.warning = shaka.log.logMap_[shaka.log.Level.WARNING]), shaka.log.MAX_LOG_LEVEL >= shaka.log.Level.INFO && (shaka.log.info = shaka.log.logMap_[shaka.log.Level.INFO]), shaka.log.MAX_LOG_LEVEL >= shaka.log.Level.DEBUG &&
      (shaka.log.debug = shaka.log.logMap_[shaka.log.Level.DEBUG]), shaka.log.MAX_LOG_LEVEL >= shaka.log.Level.V1 && (shaka.log.v1 = shaka.log.logMap_[shaka.log.Level.V1]), shaka.log.MAX_LOG_LEVEL >= shaka.log.Level.V2 && (shaka.log.v2 = shaka.log.logMap_[shaka.log.Level.V2]))
    }
    ;shaka.util = {};
    shaka.util.Iterables = function () {
    };
    shaka.util.Iterables.map = function (a, b) {
      for (var c = [], d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) c.push(b(e.value));
      return c
    };
    shaka.util.Iterables.every = function (a, b) {
      for (var c = $jscomp.makeIterator(a), d = c.next(); !d.done; d = c.next()) if (!b(d.value)) return !1;
      return !0
    };
    shaka.util.Iterables.some = function (a, b) {
      for (var c = $jscomp.makeIterator(a), d = c.next(); !d.done; d = c.next()) if (b(d.value)) return !0;
      return !1
    };
    shaka.util.Iterables.filter = function (a, b) {
      for (var c = [], d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) e = e.value, b(e) && c.push(e);
      return c
    };
    shaka.util.Iterables.range = function $jscomp$generator$function(a) {
      var c;
      return $jscomp.generator.createGenerator($jscomp$generator$function, function (d) {
        1 == d.nextAddress && (c = 0);
        if (3 != d.nextAddress) return c < a ? d.yield(c, 3) : d.jumpTo(0);
        c++;
        return d.jumpTo(2)
      })
    };
    shaka.util.Iterables.enumerate = function $jscomp$generator$function(a) {
      var c, d, e, f, g, h;
      return $jscomp.generator.createGenerator($jscomp$generator$function, function (k) {
        1 == k.nextAddress && (c = -1, e = d = void 0, f = $jscomp.makeIterator(a), g = f.next());
        if (5 != k.nextAddress) {
          if (g.done) return -1 == c ? k.jumpTo(0) : k.yield({i: c, prev: d, item: e, next: void 0}, 0);
          h = g.value;
          return 0 <= c ? k.yield({i: c, item: e, prev: d, next: h}, 5) : k.jumpTo(5)
        }
        c++;
        d = e;
        e = h;
        g = f.next();
        return k.jumpTo(2)
      })
    };/*
 @license
 Copyright 2008 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
    goog.uri = {};
    goog.uri.utils = {};
    goog.uri.utils.splitRe_ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    goog.uri.utils.ComponentIndex = {SCHEME: 1, USER_INFO: 2, DOMAIN: 3, PORT: 4, PATH: 5, QUERY_DATA: 6, FRAGMENT: 7};
    goog.uri.utils.split = function (a) {
      return a.match(goog.uri.utils.splitRe_)
    };/*
 @license
 Copyright 2006 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
    goog.Uri = function (a) {
      var b;
      a instanceof goog.Uri ? (this.setScheme(a.getScheme()), this.setUserInfo(a.getUserInfo()), this.setDomain(a.getDomain()), this.setPort(a.getPort()), this.setPath(a.getPath()), this.setQueryData(a.getQueryData().clone()), this.setFragment(a.getFragment())) : a && (b = goog.uri.utils.split(String(a))) ? (this.setScheme(b[goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo(b[goog.uri.utils.ComponentIndex.USER_INFO] || "", !0), this.setDomain(b[goog.uri.utils.ComponentIndex.DOMAIN] ||
        "", !0), this.setPort(b[goog.uri.utils.ComponentIndex.PORT]), this.setPath(b[goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQueryData(b[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment(b[goog.uri.utils.ComponentIndex.FRAGMENT] || "", !0)) : this.queryData_ = new goog.Uri.QueryData(null, null)
    };
    goog.Uri.prototype.scheme_ = "";
    goog.Uri.prototype.userInfo_ = "";
    goog.Uri.prototype.domain_ = "";
    goog.Uri.prototype.port_ = null;
    goog.Uri.prototype.path_ = "";
    goog.Uri.prototype.fragment_ = "";
    goog.Uri.prototype.toString = function () {
      var a = [], b = this.getScheme();
      b && a.push(goog.Uri.encodeSpecialChars_(b, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), ":");
      if (b = this.getDomain()) {
        a.push("//");
        var c = this.getUserInfo();
        c && a.push(goog.Uri.encodeSpecialChars_(c, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), "@");
        a.push(goog.Uri.removeDoubleEncoding_(encodeURIComponent(b)));
        b = this.getPort();
        null != b && a.push(":", String(b))
      }
      if (b = this.getPath()) this.hasDomain() && "/" != b.charAt(0) && a.push("/"), a.push(goog.Uri.encodeSpecialChars_(b,
        "/" == b.charAt(0) ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_, !0));
      (b = this.getEncodedQuery()) && a.push("?", b);
      (b = this.getFragment()) && a.push("#", goog.Uri.encodeSpecialChars_(b, goog.Uri.reDisallowedInFragment_));
      return a.join("")
    };
    goog.Uri.prototype.resolve = function (a) {
      var b = this.clone();
      "data" === b.scheme_ && (b = new goog.Uri);
      var c = a.hasScheme();
      c ? b.setScheme(a.getScheme()) : c = a.hasUserInfo();
      c ? b.setUserInfo(a.getUserInfo()) : c = a.hasDomain();
      c ? b.setDomain(a.getDomain()) : c = a.hasPort();
      var d = a.getPath();
      if (c) b.setPort(a.getPort()); else if (c = a.hasPath()) {
        if ("/" != d.charAt(0)) if (this.hasDomain() && !this.hasPath()) d = "/" + d; else {
          var e = b.getPath().lastIndexOf("/");
          -1 != e && (d = b.getPath().substr(0, e + 1) + d)
        }
        d = goog.Uri.removeDotSegments(d)
      }
      c ?
        b.setPath(d) : c = a.hasQuery();
      c ? b.setQueryData(a.getQueryData().clone()) : c = a.hasFragment();
      c && b.setFragment(a.getFragment());
      return b
    };
    goog.Uri.prototype.clone = function () {
      return new goog.Uri(this)
    };
    goog.Uri.prototype.getScheme = function () {
      return this.scheme_
    };
    goog.Uri.prototype.setScheme = function (a, b) {
      if (this.scheme_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a) this.scheme_ = this.scheme_.replace(/:$/, "");
      return this
    };
    goog.Uri.prototype.hasScheme = function () {
      return !!this.scheme_
    };
    goog.Uri.prototype.getUserInfo = function () {
      return this.userInfo_
    };
    goog.Uri.prototype.setUserInfo = function (a, b) {
      this.userInfo_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
      return this
    };
    goog.Uri.prototype.hasUserInfo = function () {
      return !!this.userInfo_
    };
    goog.Uri.prototype.getDomain = function () {
      return this.domain_
    };
    goog.Uri.prototype.setDomain = function (a, b) {
      this.domain_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a;
      return this
    };
    goog.Uri.prototype.hasDomain = function () {
      return !!this.domain_
    };
    goog.Uri.prototype.getPort = function () {
      return this.port_
    };
    goog.Uri.prototype.setPort = function (a) {
      if (a) {
        a = Number(a);
        if (isNaN(a) || 0 > a) throw Error("Bad port number " + a);
        this.port_ = a
      } else this.port_ = null;
      return this
    };
    goog.Uri.prototype.hasPort = function () {
      return null != this.port_
    };
    goog.Uri.prototype.getPath = function () {
      return this.path_
    };
    goog.Uri.prototype.setPath = function (a, b) {
      this.path_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a;
      return this
    };
    goog.Uri.prototype.hasPath = function () {
      return !!this.path_
    };
    goog.Uri.prototype.hasQuery = function () {
      return "" !== this.queryData_.toString()
    };
    goog.Uri.prototype.setQueryData = function (a, b) {
      a instanceof goog.Uri.QueryData ? this.queryData_ = a : (b || (a = goog.Uri.encodeSpecialChars_(a, goog.Uri.reDisallowedInQuery_)), this.queryData_ = new goog.Uri.QueryData(a, null));
      return this
    };
    goog.Uri.prototype.getEncodedQuery = function () {
      return this.queryData_.toString()
    };
    goog.Uri.prototype.getDecodedQuery = function () {
      return this.queryData_.toDecodedString()
    };
    goog.Uri.prototype.getQueryData = function () {
      return this.queryData_
    };
    goog.Uri.prototype.getFragment = function () {
      return this.fragment_
    };
    goog.Uri.prototype.setFragment = function (a, b) {
      this.fragment_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
      return this
    };
    goog.Uri.prototype.hasFragment = function () {
      return !!this.fragment_
    };
    goog.Uri.removeDotSegments = function (a) {
      if (".." == a || "." == a) return "";
      if (-1 == a.indexOf("./") && -1 == a.indexOf("/.")) return a;
      var b = 0 == a.lastIndexOf("/", 0);
      a = a.split("/");
      for (var c = [], d = 0; d < a.length;) {
        var e = a[d++];
        "." == e ? b && d == a.length && c.push("") : ".." == e ? ((1 < c.length || 1 == c.length && "" != c[0]) && c.pop(), b && d == a.length && c.push("")) : (c.push(e), b = !0)
      }
      return c.join("/")
    };
    goog.Uri.decodeOrEmpty_ = function (a, b) {
      return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
    };
    goog.Uri.encodeSpecialChars_ = function (a, b, c) {
      return null != a ? (a = encodeURI(a).replace(b, goog.Uri.encodeChar_), c && (a = goog.Uri.removeDoubleEncoding_(a)), a) : null
    };
    goog.Uri.encodeChar_ = function (a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    };
    goog.Uri.removeDoubleEncoding_ = function (a) {
      return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")
    };
    goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
    goog.Uri.reDisallowedInRelativePath_ = /[#\?:]/g;
    goog.Uri.reDisallowedInAbsolutePath_ = /[#\?]/g;
    goog.Uri.reDisallowedInQuery_ = /[#\?@]/g;
    goog.Uri.reDisallowedInFragment_ = /#/g;
    goog.Uri.QueryData = function (a, b) {
      this.encodedQuery_ = a || null
    };
    goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function () {
      if (!this.keyMap_ && (this.keyMap_ = {}, this.count_ = 0, this.encodedQuery_)) for (var a = this.encodedQuery_.split("&"), b = 0; b < a.length; b++) {
        var c = a[b].indexOf("="), d = null;
        if (0 <= c) {
          var e = a[b].substring(0, c);
          d = a[b].substring(c + 1)
        } else e = a[b];
        e = decodeURIComponent(e.replace(/\+/g, " "));
        d = d || "";
        this.add(e, decodeURIComponent(d.replace(/\+/g, " ")))
      }
    };
    goog.Uri.QueryData.prototype.keyMap_ = null;
    goog.Uri.QueryData.prototype.count_ = null;
    goog.Uri.QueryData.prototype.getCount = function () {
      this.ensureKeyMapInitialized_();
      return this.count_
    };
    goog.Uri.QueryData.prototype.add = function (a, b) {
      this.ensureKeyMapInitialized_();
      this.encodedQuery_ = null;
      var c = this.keyMap_.hasOwnProperty(a) && this.keyMap_[a];
      c || (this.keyMap_[a] = c = []);
      c.push(b);
      goog.asserts.assert(null != this.count_, "Should not be null.");
      this.count_++;
      return this
    };
    goog.Uri.QueryData.prototype.toString = function () {
      if (this.encodedQuery_) return this.encodedQuery_;
      if (!this.keyMap_) return "";
      var a = [], b;
      for (b in this.keyMap_) for (var c = encodeURIComponent(b), d = this.keyMap_[b], e = 0; e < d.length; e++) {
        var f = c;
        "" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
        a.push(f)
      }
      return this.encodedQuery_ = a.join("&")
    };
    goog.Uri.QueryData.prototype.toDecodedString = function () {
      return goog.Uri.decodeOrEmpty_(this.toString())
    };
    goog.Uri.QueryData.prototype.clone = function () {
      var a = new goog.Uri.QueryData;
      a.encodedQuery_ = this.encodedQuery_;
      if (this.keyMap_) {
        var b = {}, c;
        for (c in this.keyMap_) b[c] = this.keyMap_[c].concat();
        a.keyMap_ = b;
        a.count_ = this.count_
      }
      return a
    };
    shaka.util.Error = function (a, b, c, d) {
      for (var e = [], f = 3; f < arguments.length; ++f) e[f - 3] = arguments[f];
      this.severity = a;
      this.category = b;
      this.code = c;
      this.data = e;
      this.handled = !1;
      if (goog.DEBUG) {
        f = e = "UNKNOWN";
        for (var g in shaka.util.Error.Category) shaka.util.Error.Category[g] == this.category && (e = g);
        for (var h in shaka.util.Error.Code) shaka.util.Error.Code[h] == this.code && (f = h);
        this.message = "Shaka Error " + e + "." + f + " (" + this.data.toString() + ")";
        if (shaka.util.Error.createStack) try {
          throw Error(this.message);
        } catch (k) {
          this.stack =
            k.stack
        }
      }
    };
    shaka.util.Error.prototype.toString = function () {
      return "shaka.util.Error " + JSON.stringify(this, null, "  ")
    };
    goog.exportSymbol("shaka.util.Error", shaka.util.Error);
    goog.DEBUG && (shaka.util.Error.createStack = !0);
    shaka.util.Error.Severity = {RECOVERABLE: 1, CRITICAL: 2};
    goog.exportProperty(shaka.util.Error, "Severity", shaka.util.Error.Severity);
    shaka.util.Error.Category = {
      NETWORK: 1,
      TEXT: 2,
      MEDIA: 3,
      MANIFEST: 4,
      STREAMING: 5,
      DRM: 6,
      PLAYER: 7,
      CAST: 8,
      STORAGE: 9,
      ADS: 10
    };
    goog.exportProperty(shaka.util.Error, "Category", shaka.util.Error.Category);
    shaka.util.Error.Code = {
      UNSUPPORTED_SCHEME: 1E3,
      BAD_HTTP_STATUS: 1001,
      HTTP_ERROR: 1002,
      TIMEOUT: 1003,
      MALFORMED_DATA_URI: 1004,
      REQUEST_FILTER_ERROR: 1006,
      RESPONSE_FILTER_ERROR: 1007,
      MALFORMED_TEST_URI: 1008,
      UNEXPECTED_TEST_REQUEST: 1009,
      ATTEMPTS_EXHAUSTED: 1010,
      INVALID_TEXT_HEADER: 2E3,
      INVALID_TEXT_CUE: 2001,
      UNABLE_TO_DETECT_ENCODING: 2003,
      BAD_ENCODING: 2004,
      INVALID_XML: 2005,
      INVALID_MP4_TTML: 2007,
      INVALID_MP4_VTT: 2008,
      UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
      BUFFER_READ_OUT_OF_BOUNDS: 3E3,
      JS_INTEGER_OVERFLOW: 3001,
      EBML_OVERFLOW: 3002,
      EBML_BAD_FLOATING_POINT_SIZE: 3003,
      MP4_SIDX_WRONG_BOX_TYPE: 3004,
      MP4_SIDX_INVALID_TIMESCALE: 3005,
      MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
      WEBM_CUES_ELEMENT_MISSING: 3007,
      WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
      WEBM_SEGMENT_ELEMENT_MISSING: 3009,
      WEBM_INFO_ELEMENT_MISSING: 3010,
      WEBM_DURATION_ELEMENT_MISSING: 3011,
      WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
      WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
      MEDIA_SOURCE_OPERATION_FAILED: 3014,
      MEDIA_SOURCE_OPERATION_THREW: 3015,
      VIDEO_ERROR: 3016,
      QUOTA_EXCEEDED_ERROR: 3017,
      TRANSMUXING_FAILED: 3018,
      UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
      DASH_INVALID_XML: 4001,
      DASH_NO_SEGMENT_INFO: 4002,
      DASH_EMPTY_ADAPTATION_SET: 4003,
      DASH_EMPTY_PERIOD: 4004,
      DASH_WEBM_MISSING_INIT: 4005,
      DASH_UNSUPPORTED_CONTAINER: 4006,
      DASH_PSSH_BAD_ENCODING: 4007,
      DASH_NO_COMMON_KEY_SYSTEM: 4008,
      DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
      DASH_CONFLICTING_KEY_IDS: 4010,
      RESTRICTIONS_CANNOT_BE_MET: 4012,
      HLS_PLAYLIST_HEADER_MISSING: 4015,
      INVALID_HLS_TAG: 4016,
      HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
      DASH_DUPLICATE_REPRESENTATION_ID: 4018,
      HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
      HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,
      HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
      HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
      HLS_REQUIRED_TAG_MISSING: 4024,
      HLS_COULD_NOT_GUESS_CODECS: 4025,
      HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
      DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
      DASH_XLINK_DEPTH_LIMIT: 4028,
      HLS_COULD_NOT_PARSE_SEGMENT_START_TIME: 4030,
      CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
      CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
      HLS_AES_128_ENCRYPTION_NOT_SUPPORTED: 4034,
      HLS_INTERNAL_SKIP_STREAM: 4035,
      NO_VARIANTS: 4036,
      PERIOD_FLATTENING_FAILED: 4037,
      INCONSISTENT_DRM_ACROSS_PERIODS: 4038,
      HLS_VARIABLE_NOT_FOUND: 4039,
      STREAMING_ENGINE_STARTUP_INVALID_STATE: 5006,
      NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
      REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
      FAILED_TO_CREATE_CDM: 6002,
      FAILED_TO_ATTACH_TO_VIDEO: 6003,
      INVALID_SERVER_CERTIFICATE: 6004,
      FAILED_TO_CREATE_SESSION: 6005,
      FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
      LICENSE_REQUEST_FAILED: 6007,
      LICENSE_RESPONSE_REJECTED: 6008,
      ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
      NO_LICENSE_SERVER_GIVEN: 6012,
      OFFLINE_SESSION_REMOVED: 6013,
      EXPIRED: 6014,
      SERVER_CERTIFICATE_REQUIRED: 6015,
      INIT_DATA_TRANSFORM_ERROR: 6016,
      LOAD_INTERRUPTED: 7E3,
      OPERATION_ABORTED: 7001,
      NO_VIDEO_ELEMENT: 7002,
      OBJECT_DESTROYED: 7003,
      CAST_API_UNAVAILABLE: 8E3,
      NO_CAST_RECEIVERS: 8001,
      ALREADY_CASTING: 8002,
      UNEXPECTED_CAST_ERROR: 8003,
      CAST_CANCELED_BY_USER: 8004,
      CAST_CONNECTION_TIMED_OUT: 8005,
      CAST_RECEIVER_APP_UNAVAILABLE: 8006,
      STORAGE_NOT_SUPPORTED: 9E3,
      INDEXED_DB_ERROR: 9001,
      DEPRECATED_OPERATION_ABORTED: 9002,
      REQUESTED_ITEM_NOT_FOUND: 9003,
      MALFORMED_OFFLINE_URI: 9004,
      CANNOT_STORE_LIVE_OFFLINE: 9005,
      NO_INIT_DATA_FOR_OFFLINE: 9007,
      LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
      NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
      KEY_NOT_FOUND: 9012,
      MISSING_STORAGE_CELL: 9013,
      CS_IMA_SDK_MISSING: 1E4,
      CS_AD_MANAGER_NOT_INITIALIZED: 10001,
      SS_IMA_SDK_MISSING: 10002,
      SS_AD_MANAGER_NOT_INITIALIZED: 10003,
      CURRENT_DAI_REQUEST_NOT_FINISHED: 10004
    };
    goog.exportProperty(shaka.util.Error, "Code", shaka.util.Error.Code);
    shaka.util.DelayedTick = function (a) {
      this.onTick_ = a;
      this.cancelPending_ = null
    };
    shaka.util.DelayedTick.prototype.tickAfter = function (a) {
      var b = this;
      this.stop();
      var c = !0, d = null;
      this.cancelPending_ = function () {
        window.clearTimeout(d);
        c = !1
      };
      d = window.setTimeout(function () {
        if (c) b.onTick_()
      }, 1E3 * a);
      return this
    };
    shaka.util.DelayedTick.prototype.stop = function () {
      this.cancelPending_ && (this.cancelPending_(), this.cancelPending_ = null)
    };
    shaka.util.Timer = function (a) {
      this.onTick_ = a;
      this.ticker_ = null
    };
    shaka.util.Timer.prototype.tickNow = function () {
      this.stop();
      this.onTick_();
      return this
    };
    shaka.util.Timer.prototype.tickAfter = function (a) {
      var b = this;
      this.stop();
      this.ticker_ = (new shaka.util.DelayedTick(function () {
        b.onTick_()
      })).tickAfter(a);
      return this
    };
    shaka.util.Timer.prototype.tickEvery = function (a) {
      var b = this;
      this.stop();
      this.ticker_ = (new shaka.util.DelayedTick(function () {
        b.ticker_.tickAfter(a);
        b.onTick_()
      })).tickAfter(a);
      return this
    };
    shaka.util.Timer.prototype.stop = function () {
      this.ticker_ && (this.ticker_.stop(), this.ticker_ = null)
    };
    goog.exportSymbol("shaka.util.Timer", shaka.util.Timer);
    goog.exportProperty(shaka.util.Timer.prototype, "stop", shaka.util.Timer.prototype.stop);
    goog.exportProperty(shaka.util.Timer.prototype, "tickEvery", shaka.util.Timer.prototype.tickEvery);
    goog.exportProperty(shaka.util.Timer.prototype, "tickAfter", shaka.util.Timer.prototype.tickAfter);
    goog.exportProperty(shaka.util.Timer.prototype, "tickNow", shaka.util.Timer.prototype.tickNow);
    shaka.net = {};
    shaka.net.Backoff = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c = shaka.net.Backoff.defaultRetryParameters();
      this.maxAttempts_ = null == a.maxAttempts ? c.maxAttempts : a.maxAttempts;
      goog.asserts.assert(1 <= this.maxAttempts_, "maxAttempts should be >= 1");
      this.baseDelay_ = null == a.baseDelay ? c.baseDelay : a.baseDelay;
      goog.asserts.assert(0 <= this.baseDelay_, "baseDelay should be >= 0");
      this.fuzzFactor_ = null == a.fuzzFactor ? c.fuzzFactor : a.fuzzFactor;
      goog.asserts.assert(0 <= this.fuzzFactor_, "fuzzFactor should be >= 0");
      this.backoffFactor_ =
        null == a.backoffFactor ? c.backoffFactor : a.backoffFactor;
      goog.asserts.assert(0 <= this.backoffFactor_, "backoffFactor should be >= 0");
      this.numAttempts_ = 0;
      this.nextUnfuzzedDelay_ = this.baseDelay_;
      if (this.autoReset_ = b) goog.asserts.assert(2 <= this.maxAttempts_, "maxAttempts must be >= 2 for autoReset == true"), this.numAttempts_ = 1
    };
    shaka.net.Backoff.prototype.attempt = function () {
      var a = this, b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) {
          if (a.numAttempts_ >= a.maxAttempts_) if (a.autoReset_) a.reset_(); else throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.ATTEMPTS_EXHAUSTED);
          b = a.numAttempts_;
          a.numAttempts_++;
          if (0 == b) return goog.asserts.assert(!a.autoReset_, "Failed to delay with auto-reset!"), d["return"]();
          c = shaka.net.Backoff.fuzz_(a.nextUnfuzzedDelay_,
            a.fuzzFactor_);
          return d.yield(new Promise(function (a) {
            shaka.net.Backoff.defer(c, a)
          }), 2)
        }
        a.nextUnfuzzedDelay_ *= a.backoffFactor_;
        d.jumpToEnd()
      })
    };
    shaka.net.Backoff.defaultRetryParameters = function () {
      return {maxAttempts: 2, baseDelay: 1E3, backoffFactor: 2, fuzzFactor: .5, timeout: 0}
    };
    shaka.net.Backoff.fuzz_ = function (a, b) {
      return a * (1 + (2 * Math.random() - 1) * b)
    };
    shaka.net.Backoff.prototype.reset_ = function () {
      goog.asserts.assert(this.autoReset_, "Should only be used for auto-reset!");
      this.numAttempts_ = 1;
      this.nextUnfuzzedDelay_ = this.baseDelay_
    };
    shaka.net.Backoff.defer = function (a, b) {
      (new shaka.util.Timer(b)).tickAfter(a / 1E3)
    };
    shaka.util.PublicPromise = function () {
      var a, b, c = new Promise(function (c, e) {
        a = c;
        b = e
      });
      c.resolve = a;
      c.reject = b;
      return c
    };
    shaka.util.PublicPromise.prototype.resolve = function (a) {
    };
    shaka.util.PublicPromise.prototype.reject = function (a) {
    };
    shaka.util.AbortableOperation = function (a, b) {
      this.promise = a;
      this.onAbort_ = b;
      this.aborted_ = !1
    };
    shaka.util.AbortableOperation.failed = function (a) {
      return new shaka.util.AbortableOperation(Promise.reject(a), function () {
        return Promise.resolve()
      })
    };
    shaka.util.AbortableOperation.aborted = function () {
      var a = Promise.reject(shaka.util.AbortableOperation.abortError());
      a["catch"](function () {
      });
      return new shaka.util.AbortableOperation(a, function () {
        return Promise.resolve()
      })
    };
    shaka.util.AbortableOperation.abortError = function () {
      return new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.OPERATION_ABORTED)
    };
    shaka.util.AbortableOperation.completed = function (a) {
      return new shaka.util.AbortableOperation(Promise.resolve(a), function () {
        return Promise.resolve()
      })
    };
    shaka.util.AbortableOperation.notAbortable = function (a) {
      return new shaka.util.AbortableOperation(a, function () {
        return a["catch"](function () {
        })
      })
    };
    shaka.util.AbortableOperation.prototype.abort = function () {
      this.aborted_ = !0;
      return this.onAbort_()
    };
    shaka.util.AbortableOperation.all = function (a) {
      return new shaka.util.AbortableOperation(Promise.all(a.map(function (a) {
        return a.promise
      })), function () {
        return Promise.all(a.map(function (a) {
          return a.abort()
        }))
      })
    };
    shaka.util.AbortableOperation.prototype["finally"] = function (a) {
      this.promise.then(function (b) {
        return a(!0)
      }, function (b) {
        return a(!1)
      });
      return this
    };
    shaka.util.AbortableOperation.prototype.chain = function (a, b) {
      var c = this, d = new shaka.util.PublicPromise, e = shaka.util.AbortableOperation.abortError(), f = function () {
        d.reject(e);
        return c.abort()
      }, g = function (g) {
        return function (h) {
          if (c.aborted_ && g) d.reject(e); else {
            var k = g ? a : b;
            k ? f = shaka.util.AbortableOperation.wrapChainCallback_(k, h, d) : (g ? d.resolve : d.reject)(h)
          }
        }
      };
      this.promise.then(g(!0), g(!1));
      return new shaka.util.AbortableOperation(d, function () {
        return f()
      })
    };
    shaka.util.AbortableOperation.wrapChainCallback_ = function (a, b, c) {
      try {
        var d = a(b);
        if (d && d.promise && d.abort) return c.resolve(d.promise), function () {
          return d.abort()
        };
        c.resolve(d);
        return function () {
          return Promise.resolve(d).then(function () {
          }, function () {
          })
        }
      } catch (e) {
        return c.reject(e), function () {
          return Promise.resolve()
        }
      }
    };
    goog.exportSymbol("shaka.util.AbortableOperation", shaka.util.AbortableOperation);
    goog.exportProperty(shaka.util.AbortableOperation.prototype, "chain", shaka.util.AbortableOperation.prototype.chain);
    goog.exportProperty(shaka.util.AbortableOperation.prototype, "finally", shaka.util.AbortableOperation.prototype["finally"]);
    goog.exportProperty(shaka.util.AbortableOperation, "all", shaka.util.AbortableOperation.all);
    goog.exportProperty(shaka.util.AbortableOperation.prototype, "abort", shaka.util.AbortableOperation.prototype.abort);
    goog.exportProperty(shaka.util.AbortableOperation, "notAbortable", shaka.util.AbortableOperation.notAbortable);
    goog.exportProperty(shaka.util.AbortableOperation, "completed", shaka.util.AbortableOperation.completed);
    goog.exportProperty(shaka.util.AbortableOperation, "aborted", shaka.util.AbortableOperation.aborted);
    goog.exportProperty(shaka.util.AbortableOperation, "failed", shaka.util.AbortableOperation.failed);
    shaka.util.BufferUtils = function () {
    };
    shaka.util.BufferUtils.equal = function (a, b) {
      var c = shaka.util.BufferUtils;
      if (!a && !b) return !0;
      if (!a || !b || a.byteLength != b.byteLength) return !1;
      if (c.unsafeGetArrayBuffer_(a) == c.unsafeGetArrayBuffer_(b) && (a.byteOffset || 0) == (b.byteOffset || 0)) return !0;
      c = shaka.util.BufferUtils.toUint8(a);
      for (var d = shaka.util.BufferUtils.toUint8(b), e = $jscomp.makeIterator(shaka.util.Iterables.range(a.byteLength)), f = e.next(); !f.done; f = e.next()) if (f = f.value, c[f] != d[f]) return !1;
      return !0
    };
    shaka.util.BufferUtils.unsafeGetArrayBuffer_ = function (a) {
      return a instanceof ArrayBuffer ? a : a.buffer
    };
    shaka.util.BufferUtils.toArrayBuffer = function (a) {
      return a instanceof ArrayBuffer ? a : 0 == a.byteOffset && a.byteLength == a.buffer.byteLength ? a.buffer : (new Uint8Array(a)).buffer
    };
    shaka.util.BufferUtils.toUint8 = function (a, b, c) {
      c = void 0 === c ? Infinity : c;
      return shaka.util.BufferUtils.view_(a, void 0 === b ? 0 : b, c, Uint8Array)
    };
    shaka.util.BufferUtils.toDataView = function (a, b, c) {
      c = void 0 === c ? Infinity : c;
      return shaka.util.BufferUtils.view_(a, void 0 === b ? 0 : b, c, DataView)
    };
    shaka.util.BufferUtils.view_ = function (a, b, c, d) {
      var e = shaka.util.BufferUtils.unsafeGetArrayBuffer_(a), f = (a.byteOffset || 0) + a.byteLength;
      a = Math.max(0, Math.min((a.byteOffset || 0) + b, f));
      return new d(e, a, Math.min(a + Math.max(c, 0), f) - a)
    };
    goog.exportSymbol("shaka.util.BufferUtils", shaka.util.BufferUtils);
    goog.exportProperty(shaka.util.BufferUtils, "toDataView", shaka.util.BufferUtils.toDataView);
    goog.exportProperty(shaka.util.BufferUtils, "toUint8", shaka.util.BufferUtils.toUint8);
    goog.exportProperty(shaka.util.BufferUtils, "toArrayBuffer", shaka.util.BufferUtils.toArrayBuffer);
    goog.exportProperty(shaka.util.BufferUtils, "equal", shaka.util.BufferUtils.equal);
    shaka.util.FakeEvent = function (a, b) {
      b = void 0 === b ? {} : b;
      for (var c in b) Object.defineProperty(this, c, {value: b[c], writable: !0, enumerable: !0});
      this.defaultPrevented = this.cancelable = this.bubbles = !1;
      this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
      this.type = a;
      this.isTrusted = !1;
      this.target = this.currentTarget = null;
      this.stopped = !1
    };
    shaka.util.FakeEvent.prototype.preventDefault = function () {
      this.cancelable && (this.defaultPrevented = !0)
    };
    shaka.util.FakeEvent.prototype.stopImmediatePropagation = function () {
      this.stopped = !0
    };
    shaka.util.FakeEvent.prototype.stopPropagation = function () {
    };
    shaka.util.MultiMap = function () {
      this.map_ = {}
    };
    shaka.util.MultiMap.prototype.push = function (a, b) {
      this.map_.hasOwnProperty(a) ? this.map_[a].push(b) : this.map_[a] = [b]
    };
    shaka.util.MultiMap.prototype.get = function (a) {
      return (a = this.map_[a]) ? a.slice() : null
    };
    shaka.util.MultiMap.prototype.getAll = function () {
      var a = [], b;
      for (b in this.map_) a.push.apply(a, $jscomp.arrayFromIterable(this.map_[b]));
      return a
    };
    shaka.util.MultiMap.prototype.remove = function (a, b) {
      a in this.map_ && (this.map_[a] = this.map_[a].filter(function (a) {
        return a != b
      }))
    };
    shaka.util.MultiMap.prototype.clear = function () {
      this.map_ = {}
    };
    shaka.util.MultiMap.prototype.forEach = function (a) {
      for (var b in this.map_) a(b, this.map_[b])
    };
    shaka.util.FakeEventTarget = function () {
      this.listeners_ = new shaka.util.MultiMap;
      this.dispatchTarget = this
    };
    shaka.util.FakeEventTarget.prototype.addEventListener = function (a, b, c) {
      this.listeners_.push(a, b)
    };
    shaka.util.FakeEventTarget.prototype.removeEventListener = function (a, b, c) {
      this.listeners_.remove(a, b)
    };
    shaka.util.FakeEventTarget.prototype.dispatchEvent = function (a) {
      goog.asserts.assert(a instanceof shaka.util.FakeEvent, "FakeEventTarget can only dispatch FakeEvents!");
      var b = this.listeners_.get(a.type) || [];
      b = $jscomp.makeIterator(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        a.target = this.dispatchTarget;
        a.currentTarget = this.dispatchTarget;
        try {
          c.handleEvent ? c.handleEvent(a) : c.call(this, a)
        } catch (d) {
          shaka.log.error("Uncaught exception in event handler", d, d ? d.message : null, d ? d.stack : null)
        }
        if (a.stopped) break
      }
      return a.defaultPrevented
    };
    shaka.util.IDestroyable = function () {
    };
    shaka.util.IDestroyable.prototype.destroy = function () {
    };
    shaka.util.ObjectUtils = function () {
    };
    shaka.util.ObjectUtils.cloneObject = function (a) {
      var b = new Set, c = function (a) {
        switch (typeof a) {
          case "undefined":
          case "boolean":
          case "number":
          case "string":
          case "symbol":
          case "function":
            return a;
          default:
            if (!a || a.buffer && a.buffer.constructor == ArrayBuffer) return a;
            if (b.has(a)) return null;
            var d = a.constructor == Array;
            if (a.constructor != Object && !d) return null;
            b.add(a);
            var f = d ? [] : {}, g;
            for (g in a) f[g] = c(a[g]);
            d && (f.length = a.length);
            return f
        }
      };
      return c(a)
    };
    shaka.util.ObjectUtils.shallowCloneObject = function (a) {
      var b = {}, c;
      for (c in a) b[c] = a[c];
      return b
    };
    shaka.util.ArrayUtils = function () {
    };
    shaka.util.ArrayUtils.defaultEquals = function (a, b) {
      return "number" === typeof a && "number" === typeof b && isNaN(a) && isNaN(b) ? !0 : a === b
    };
    shaka.util.ArrayUtils.remove = function (a, b) {
      var c = a.indexOf(b);
      -1 < c && a.splice(c, 1)
    };
    shaka.util.ArrayUtils.count = function (a, b) {
      for (var c = 0, d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) c += b(e.value) ? 1 : 0;
      return c
    };
    shaka.util.ArrayUtils.hasSameElements = function (a, b, c) {
      c || (c = shaka.util.ArrayUtils.defaultEquals);
      if (a.length != b.length) return !1;
      b = b.slice();
      var d = {};
      a = $jscomp.makeIterator(a);
      for (var e = a.next(); !e.done; d = {$jscomp$loop$prop$item$464: d.$jscomp$loop$prop$item$464}, e = a.next()) {
        d.$jscomp$loop$prop$item$464 = e.value;
        e = b.findIndex(function (a) {
          return function (b) {
            return c(a.$jscomp$loop$prop$item$464, b)
          }
        }(d));
        if (-1 == e) return !1;
        b[e] = b[b.length - 1];
        b.pop()
      }
      return 0 == b.length
    };
    shaka.util.OperationManager = function () {
      this.operations_ = []
    };
    shaka.util.OperationManager.prototype.manage = function (a) {
      var b = this;
      this.operations_.push(a["finally"](function () {
        shaka.util.ArrayUtils.remove(b.operations_, a)
      }))
    };
    shaka.util.OperationManager.prototype.destroy = function () {
      for (var a = [], b = $jscomp.makeIterator(this.operations_), c = b.next(); !c.done; c = b.next()) c = c.value, c.promise["catch"](function () {
      }), a.push(c.abort());
      this.operations_ = [];
      return Promise.all(a)
    };
    shaka.net.NetworkingEngine = function (a) {
      shaka.util.FakeEventTarget.call(this);
      this.destroyed_ = !1;
      this.operationManager_ = new shaka.util.OperationManager;
      this.requestFilters_ = new Set;
      this.responseFilters_ = new Set;
      this.onProgressUpdated_ = a || null
    };
    $jscomp.inherits(shaka.net.NetworkingEngine, shaka.util.FakeEventTarget);
    shaka.net.NetworkingEngine.registerScheme = function (a, b, c) {
      goog.asserts.assert(void 0 == c || 0 < c, "explicit priority must be > 0");
      c = c || shaka.net.NetworkingEngine.PluginPriority.APPLICATION;
      var d = shaka.net.NetworkingEngine.schemes_[a];
      if (!d || c >= d.priority) shaka.net.NetworkingEngine.schemes_[a] = {priority: c, plugin: b}
    };
    shaka.net.NetworkingEngine.unregisterScheme = function (a) {
      delete shaka.net.NetworkingEngine.schemes_[a]
    };
    shaka.net.NetworkingEngine.prototype.registerRequestFilter = function (a) {
      this.requestFilters_.add(a)
    };
    shaka.net.NetworkingEngine.prototype.unregisterRequestFilter = function (a) {
      this.requestFilters_["delete"](a)
    };
    shaka.net.NetworkingEngine.prototype.clearAllRequestFilters = function () {
      this.requestFilters_.clear()
    };
    shaka.net.NetworkingEngine.prototype.registerResponseFilter = function (a) {
      this.responseFilters_.add(a)
    };
    shaka.net.NetworkingEngine.prototype.unregisterResponseFilter = function (a) {
      this.responseFilters_["delete"](a)
    };
    shaka.net.NetworkingEngine.prototype.clearAllResponseFilters = function () {
      this.responseFilters_.clear()
    };
    shaka.net.NetworkingEngine.defaultRetryParameters = function () {
      return shaka.net.Backoff.defaultRetryParameters()
    };
    shaka.net.NetworkingEngine.makeRequest = function (a, b) {
      return {
        uris: a,
        method: "GET",
        body: null,
        headers: {},
        allowCrossSiteCredentials: !1,
        retryParameters: b,
        licenseRequestType: null,
        sessionId: null
      }
    };
    shaka.net.NetworkingEngine.prototype.destroy = function () {
      this.destroyed_ = !0;
      this.requestFilters_.clear();
      this.responseFilters_.clear();
      return this.operationManager_.destroy()
    };
    shaka.net.NetworkingEngine.prototype.request = function (a, b) {
      var c = this, d = shaka.util.ObjectUtils, e = new shaka.net.NetworkingEngine.NumBytesRemainingClass;
      if (this.destroyed_) return d = Promise.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.OPERATION_ABORTED)), d["catch"](function () {
      }), new shaka.net.NetworkingEngine.PendingRequest(d, function () {
        return Promise.resolve()
      }, e);
      goog.asserts.assert(b.uris && b.uris.length, "Request without URIs!");
      b.method = b.method || "GET";
      b.headers = b.headers || {};
      b.retryParameters = b.retryParameters ? d.cloneObject(b.retryParameters) : shaka.net.NetworkingEngine.defaultRetryParameters();
      b.uris = d.cloneObject(b.uris);
      d = this.filterRequest_(a, b);
      var f = d.chain(function () {
        return c.makeRequestWithRetry_(a, b, e)
      }), g = f.chain(function (b) {
        return c.filterResponse_(a, b)
      }), h = Date.now(), k = 0;
      d.promise.then(function () {
        k = Date.now() - h
      }, function () {
      });
      var l = 0;
      f.promise.then(function () {
        l = Date.now()
      }, function () {
      });
      var m = g.chain(function (b) {
        var d =
          Date.now() - l, e = b.response;
        e.timeMs += k;
        e.timeMs += d;
        if (!b.gotProgress && c.onProgressUpdated_ && !e.fromCache && a == shaka.net.NetworkingEngine.RequestType.SEGMENT) c.onProgressUpdated_(e.timeMs, e.data.byteLength);
        return e
      }, function (a) {
        a && (goog.asserts.assert(a instanceof shaka.util.Error, "Wrong error type"), a.severity = shaka.util.Error.Severity.CRITICAL);
        throw a;
      });
      d = new shaka.net.NetworkingEngine.PendingRequest(m.promise, function () {
        return m.abort()
      }, e);
      this.operationManager_.manage(d);
      return d
    };
    shaka.net.NetworkingEngine.prototype.filterRequest_ = function (a, b) {
      for (var c = shaka.util.AbortableOperation.completed(void 0), d = {}, e = $jscomp.makeIterator(this.requestFilters_), f = e.next(); !f.done; d = {$jscomp$loop$prop$requestFilter$466: d.$jscomp$loop$prop$requestFilter$466}, f = e.next()) d.$jscomp$loop$prop$requestFilter$466 = f.value, c = c.chain(function (c) {
        return function () {
          b.body && (b.body = shaka.util.BufferUtils.toArrayBuffer(b.body));
          return c.$jscomp$loop$prop$requestFilter$466(a, b)
        }
      }(d));
      return c.chain(void 0,
        function (a) {
          if (a instanceof shaka.util.Error && a.code == shaka.util.Error.Code.OPERATION_ABORTED) throw a;
          throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.REQUEST_FILTER_ERROR, a);
        })
    };
    shaka.net.NetworkingEngine.prototype.makeRequestWithRetry_ = function (a, b, c) {
      var d = new shaka.net.Backoff(b.retryParameters, !1);
      return this.send_(a, b, d, 0, null, c)
    };
    shaka.net.NetworkingEngine.prototype.send_ = function (a, b, c, d, e, f) {
      var g = this, h = new goog.Uri(b.uris[d]), k = h.getScheme(), l = !1;
      k || (k = shaka.net.NetworkingEngine.getLocationProtocol_(), goog.asserts.assert(":" == k[k.length - 1], "location.protocol expected to end with a colon!"), k = k.slice(0, -1), h.setScheme(k), b.uris[d] = h.toString());
      k = k.toLowerCase();
      var m = (k = shaka.net.NetworkingEngine.schemes_[k]) ? k.plugin : null;
      if (!m) return shaka.util.AbortableOperation.failed(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
        shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.UNSUPPORTED_SCHEME, h));
      var n;
      return shaka.util.AbortableOperation.notAbortable(c.attempt()).chain(function () {
        if (g.destroyed_) return shaka.util.AbortableOperation.aborted();
        n = Date.now();
        var c = shaka.net.NetworkingEngine.RequestType.SEGMENT;
        return m(b.uris[d], b, a, function (b, d, e) {
          g.onProgressUpdated_ && a == c && (g.onProgressUpdated_(b, d), l = !0, f.setBytes(e))
        })
      }).chain(function (a) {
          void 0 == a.timeMs && (a.timeMs = Date.now() - n);
          return {response: a, gotProgress: l}
        },
        function (h) {
          if (g.destroyed_) return shaka.util.AbortableOperation.aborted();
          if (h instanceof shaka.util.Error) {
            if (h.code == shaka.util.Error.Code.OPERATION_ABORTED) throw h;
            if (h.code == shaka.util.Error.Code.ATTEMPTS_EXHAUSTED) throw goog.asserts.assert(e, "Should have last error"), e;
            if (h.severity == shaka.util.Error.Severity.RECOVERABLE) {
              var k = new shaka.util.FakeEvent("retry", {error: h});
              g.dispatchEvent(k);
              d = (d + 1) % b.uris.length;
              return g.send_(a, b, c, d, h, f)
            }
          }
          throw h;
        })
    };
    shaka.net.NetworkingEngine.prototype.filterResponse_ = function (a, b) {
      for (var c = shaka.util.AbortableOperation.completed(void 0), d = {}, e = $jscomp.makeIterator(this.responseFilters_), f = e.next(); !f.done; d = {$jscomp$loop$prop$responseFilter$468: d.$jscomp$loop$prop$responseFilter$468}, f = e.next()) d.$jscomp$loop$prop$responseFilter$468 = f.value, c = c.chain(function (c) {
        return function () {
          var d = b.response;
          d.data && (d.data = shaka.util.BufferUtils.toArrayBuffer(d.data));
          return c.$jscomp$loop$prop$responseFilter$468(a, d)
        }
      }(d));
      return c.chain(function () {
        return b
      }, function (a) {
        var b = shaka.util.Error.Severity.CRITICAL;
        if (a instanceof shaka.util.Error) {
          if (a.code == shaka.util.Error.Code.OPERATION_ABORTED) throw a;
          b = a.severity
        }
        throw new shaka.util.Error(b, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.RESPONSE_FILTER_ERROR, a);
      })
    };
    shaka.net.NetworkingEngine.getLocationProtocol_ = function () {
      return location.protocol
    };
    goog.exportSymbol("shaka.net.NetworkingEngine", shaka.net.NetworkingEngine);
    goog.exportProperty(shaka.net.NetworkingEngine.prototype, "request", shaka.net.NetworkingEngine.prototype.request);
    goog.exportProperty(shaka.net.NetworkingEngine.prototype, "destroy", shaka.net.NetworkingEngine.prototype.destroy);
    goog.exportProperty(shaka.net.NetworkingEngine, "makeRequest", shaka.net.NetworkingEngine.makeRequest);
    goog.exportProperty(shaka.net.NetworkingEngine, "defaultRetryParameters", shaka.net.NetworkingEngine.defaultRetryParameters);
    goog.exportProperty(shaka.net.NetworkingEngine.prototype, "clearAllResponseFilters", shaka.net.NetworkingEngine.prototype.clearAllResponseFilters);
    goog.exportProperty(shaka.net.NetworkingEngine.prototype, "unregisterResponseFilter", shaka.net.NetworkingEngine.prototype.unregisterResponseFilter);
    goog.exportProperty(shaka.net.NetworkingEngine.prototype, "registerResponseFilter", shaka.net.NetworkingEngine.prototype.registerResponseFilter);
    goog.exportProperty(shaka.net.NetworkingEngine.prototype, "clearAllRequestFilters", shaka.net.NetworkingEngine.prototype.clearAllRequestFilters);
    goog.exportProperty(shaka.net.NetworkingEngine.prototype, "unregisterRequestFilter", shaka.net.NetworkingEngine.prototype.unregisterRequestFilter);
    goog.exportProperty(shaka.net.NetworkingEngine.prototype, "registerRequestFilter", shaka.net.NetworkingEngine.prototype.registerRequestFilter);
    goog.exportProperty(shaka.net.NetworkingEngine, "unregisterScheme", shaka.net.NetworkingEngine.unregisterScheme);
    goog.exportProperty(shaka.net.NetworkingEngine, "registerScheme", shaka.net.NetworkingEngine.registerScheme);
    shaka.net.NetworkingEngine.NumBytesRemainingClass = function () {
      this.bytesToLoad_ = 0
    };
    shaka.net.NetworkingEngine.NumBytesRemainingClass.prototype.setBytes = function (a) {
      this.bytesToLoad_ = a
    };
    shaka.net.NetworkingEngine.NumBytesRemainingClass.prototype.getBytes = function () {
      return this.bytesToLoad_
    };
    goog.exportProperty(shaka.net.NetworkingEngine, "NumBytesRemainingClass", shaka.net.NetworkingEngine.NumBytesRemainingClass);
    shaka.net.NetworkingEngine.PendingRequest = function (a, b, c) {
      shaka.util.AbortableOperation.call(this, a, b);
      this.bytesRemaining_ = c
    };
    $jscomp.inherits(shaka.net.NetworkingEngine.PendingRequest, shaka.util.AbortableOperation);
    shaka.net.NetworkingEngine.PendingRequest.wrapChainCallback_ = shaka.util.AbortableOperation.wrapChainCallback_;
    shaka.net.NetworkingEngine.PendingRequest.all = shaka.util.AbortableOperation.all;
    shaka.net.NetworkingEngine.PendingRequest.notAbortable = shaka.util.AbortableOperation.notAbortable;
    shaka.net.NetworkingEngine.PendingRequest.completed = shaka.util.AbortableOperation.completed;
    shaka.net.NetworkingEngine.PendingRequest.abortError = shaka.util.AbortableOperation.abortError;
    shaka.net.NetworkingEngine.PendingRequest.aborted = shaka.util.AbortableOperation.aborted;
    shaka.net.NetworkingEngine.PendingRequest.failed = shaka.util.AbortableOperation.failed;
    shaka.net.NetworkingEngine.PendingRequest.prototype.getBytesRemaining = function () {
      return this.bytesRemaining_.getBytes()
    };
    goog.exportProperty(shaka.net.NetworkingEngine, "PendingRequest", shaka.net.NetworkingEngine.PendingRequest);
    shaka.net.NetworkingEngine.RequestType = {MANIFEST: 0, SEGMENT: 1, LICENSE: 2, APP: 3, TIMING: 4};
    goog.exportProperty(shaka.net.NetworkingEngine, "RequestType", shaka.net.NetworkingEngine.RequestType);
    shaka.net.NetworkingEngine.PluginPriority = {FALLBACK: 1, PREFERRED: 2, APPLICATION: 3};
    goog.exportProperty(shaka.net.NetworkingEngine, "PluginPriority", shaka.net.NetworkingEngine.PluginPriority);
    shaka.net.NetworkingEngine.schemes_ = {};
    shaka.util.Destroyer = function (a) {
      this.destroyed_ = !1;
      this.waitOnDestroy_ = new shaka.util.PublicPromise;
      this.onDestroy_ = a
    };
    shaka.util.Destroyer.prototype.destroyed = function () {
      return this.destroyed_
    };
    shaka.util.Destroyer.prototype.destroy = function () {
      var a = this;
      if (this.destroyed_) return this.waitOnDestroy_;
      this.destroyed_ = !0;
      return this.onDestroy_().then(function () {
        a.waitOnDestroy_.resolve()
      }, function () {
        a.waitOnDestroy_.resolve()
      })
    };
    shaka.util.Destroyer.prototype.ensureNotDestroyed = function (a) {
      if (this.destroyed_) {
        if (a instanceof shaka.util.Error && a.code == shaka.util.Error.Code.OBJECT_DESTROYED) throw a;
        throw shaka.util.Destroyer.destroyedError(a);
      }
    };
    shaka.util.Destroyer.destroyedError = function (a) {
      return new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.OBJECT_DESTROYED, a)
    };
    shaka.util.IReleasable = function () {
    };
    shaka.util.IReleasable.prototype.release = function () {
    };
    shaka.util.EventManager = function () {
      this.bindingMap_ = new shaka.util.MultiMap
    };
    shaka.util.EventManager.prototype.release = function () {
      this.removeAll();
      this.bindingMap_ = null
    };
    shaka.util.EventManager.prototype.listen = function (a, b, c, d) {
      this.bindingMap_ && (a = new shaka.util.EventManager.Binding_(a, b, c, d), this.bindingMap_.push(b, a))
    };
    shaka.util.EventManager.prototype.listenOnce = function (a, b, c, d) {
      var e = this, f = function (d) {
        e.unlisten(a, b, f);
        c(d)
      };
      this.listen(a, b, f, d)
    };
    shaka.util.EventManager.prototype.unlisten = function (a, b, c) {
      if (this.bindingMap_) {
        var d = this.bindingMap_.get(b) || [];
        d = $jscomp.makeIterator(d);
        for (var e = d.next(); !e.done; e = d.next()) e = e.value, e.target != a || c != e.listener && c || (e.unlisten(), this.bindingMap_.remove(b, e))
      }
    };
    shaka.util.EventManager.prototype.removeAll = function () {
      if (this.bindingMap_) {
        var a = this.bindingMap_.getAll();
        a = $jscomp.makeIterator(a);
        for (var b = a.next(); !b.done; b = a.next()) b.value.unlisten();
        this.bindingMap_.clear()
      }
    };
    goog.exportSymbol("shaka.util.EventManager", shaka.util.EventManager);
    goog.exportProperty(shaka.util.EventManager.prototype, "removeAll", shaka.util.EventManager.prototype.removeAll);
    goog.exportProperty(shaka.util.EventManager.prototype, "unlisten", shaka.util.EventManager.prototype.unlisten);
    goog.exportProperty(shaka.util.EventManager.prototype, "listenOnce", shaka.util.EventManager.prototype.listenOnce);
    goog.exportProperty(shaka.util.EventManager.prototype, "listen", shaka.util.EventManager.prototype.listen);
    goog.exportProperty(shaka.util.EventManager.prototype, "release", shaka.util.EventManager.prototype.release);
    shaka.util.EventManager.Binding_ = function (a, b, c, d) {
      this.target = a;
      this.type = b;
      this.listener = c;
      this.options = shaka.util.EventManager.Binding_.convertOptions_(a, d);
      this.target.addEventListener(b, c, this.options)
    };
    shaka.util.EventManager.Binding_.prototype.unlisten = function () {
      goog.asserts.assert(this.target, "Missing target");
      this.target.removeEventListener(this.type, this.listener, this.options);
      this.listener = this.target = null;
      this.options = !1
    };
    shaka.util.EventManager.Binding_.convertOptions_ = function (a, b) {
      if (void 0 == b) return !1;
      if ("boolean" == typeof b) return b;
      var c = new Set(["passive", "capture"]), d = Object.keys(b).filter(function (a) {
        return !c.has(a)
      });
      goog.asserts.assert(0 == d.length, "Unsupported flag(s) to addEventListener: " + d.join(","));
      return shaka.util.EventManager.Binding_.doesSupportObject_(a) ? b : b.capture || !1
    };
    shaka.util.EventManager.Binding_.doesSupportObject_ = function (a) {
      var b = shaka.util.EventManager.Binding_.supportsObject_;
      if (void 0 == b) {
        b = !1;
        try {
          var c = {}, d = {
            get: function () {
              b = !0;
              return !1
            }
          };
          Object.defineProperty(c, "passive", d);
          Object.defineProperty(c, "capture", d);
          d = function () {
          };
          a.addEventListener("test", d, c);
          a.removeEventListener("test", d, c)
        } catch (e) {
          b = !1
        }
        shaka.util.EventManager.Binding_.supportsObject_ = b
      }
      return b || !1
    };
    shaka.util.EventManager.Binding_.supportsObject_ = void 0;
    shaka.util.Lazy = function (a) {
      this.gen_ = a;
      this.value_ = void 0
    };
    shaka.util.Lazy.prototype.value = function () {
      void 0 == this.value_ && (this.value_ = this.gen_(), goog.asserts.assert(void 0 != this.value_, "Unable to create lazy value"));
      return this.value_
    };
    shaka.util.Lazy.prototype.reset = function () {
      this.value_ = void 0
    };
    shaka.util.StringUtils = function () {
    };
    shaka.util.StringUtils.fromUTF8 = function (a) {
      if (!a) return "";
      a = shaka.util.BufferUtils.toUint8(a);
      239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
      a = shaka.util.StringUtils.fromCharCode(a);
      a = escape(a);
      try {
        return decodeURIComponent(a)
      } catch (b) {
        throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.BAD_ENCODING);
      }
    };
    shaka.util.StringUtils.fromUTF16 = function (a, b, c) {
      if (!a) return "";
      if (!c && 0 != a.byteLength % 2) throw shaka.log.error("Data has an incorrect length, must be even."), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.BAD_ENCODING);
      var d = Math.floor(a.byteLength / 2);
      c = new Uint16Array(d);
      a = shaka.util.BufferUtils.toDataView(a);
      d = $jscomp.makeIterator(shaka.util.Iterables.range(d));
      for (var e = d.next(); !e.done; e = d.next()) e = e.value, c[e] = a.getUint16(2 * e, b);
      return shaka.util.StringUtils.fromCharCode(c)
    };
    shaka.util.StringUtils.fromBytesAutoDetect = function (a) {
      var b = shaka.util.StringUtils;
      if (!a) return "";
      var c = shaka.util.BufferUtils.toUint8(a);
      if (239 == c[0] && 187 == c[1] && 191 == c[2]) return b.fromUTF8(c);
      if (254 == c[0] && 255 == c[1]) return b.fromUTF16(c.subarray(2), !1);
      if (255 == c[0] && 254 == c[1]) return b.fromUTF16(c.subarray(2), !0);
      var d = function (a) {
        return c.byteLength <= a || 32 <= c[a] && 126 >= c[a]
      };
      shaka.log.debug("Unable to find byte-order-mark, making an educated guess.");
      if (0 == c[0] && 0 == c[2]) return b.fromUTF16(a, !1);
      if (0 == c[1] && 0 == c[3]) return b.fromUTF16(a, !0);
      if (d(0) && d(1) && d(2) && d(3)) return b.fromUTF8(a);
      throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.UNABLE_TO_DETECT_ENCODING);
    };
    shaka.util.StringUtils.toUTF8 = function (a) {
      a = encodeURIComponent(a);
      var b = unescape(a);
      a = new Uint8Array(b.length);
      b = $jscomp.makeIterator(shaka.util.Iterables.enumerate(b));
      for (var c = b.next(); !c.done; c = b.next()) c = c.value, a[c.i] = c.item.charCodeAt(0);
      return shaka.util.BufferUtils.toArrayBuffer(a)
    };
    shaka.util.StringUtils.toUTF16 = function (a, b) {
      for (var c = new ArrayBuffer(2 * a.length), d = new DataView(c), e = $jscomp.makeIterator(shaka.util.Iterables.enumerate(a)), f = e.next(); !f.done; f = e.next()) {
        var g = f.value;
        f = g.i;
        g = g.item.charCodeAt(0);
        d.setUint16(2 * f, g, b)
      }
      return c
    };
    shaka.util.StringUtils.fromCharCode = function (a) {
      return shaka.util.StringUtils.fromCharCodeImpl_.value()(a)
    };
    shaka.util.StringUtils.resetFromCharCode = function () {
      shaka.util.StringUtils.fromCharCodeImpl_.reset()
    };
    goog.exportSymbol("shaka.util.StringUtils", shaka.util.StringUtils);
    goog.exportProperty(shaka.util.StringUtils, "resetFromCharCode", shaka.util.StringUtils.resetFromCharCode);
    goog.exportProperty(shaka.util.StringUtils, "toUTF16", shaka.util.StringUtils.toUTF16);
    goog.exportProperty(shaka.util.StringUtils, "toUTF8", shaka.util.StringUtils.toUTF8);
    goog.exportProperty(shaka.util.StringUtils, "fromBytesAutoDetect", shaka.util.StringUtils.fromBytesAutoDetect);
    goog.exportProperty(shaka.util.StringUtils, "fromUTF16", shaka.util.StringUtils.fromUTF16);
    goog.exportProperty(shaka.util.StringUtils, "fromUTF8", shaka.util.StringUtils.fromUTF8);
    shaka.util.StringUtils.fromCharCodeImpl_ = new shaka.util.Lazy(function () {
      for (var a = function (a) {
        try {
          var b = new Uint8Array(a), c = String.fromCharCode.apply(null, b);
          goog.asserts.assert(c, "Should get value");
          return 0 < c.length
        } catch (f) {
          return !1
        }
      }, b = {$jscomp$loop$prop$size$470: 65536}; 0 < b.$jscomp$loop$prop$size$470; b = {$jscomp$loop$prop$size$470: b.$jscomp$loop$prop$size$470}, b.$jscomp$loop$prop$size$470 /= 2) if (a(b.$jscomp$loop$prop$size$470)) return function (a) {
        return function (b) {
          for (var c = "", d = 0; d < b.length; d +=
            a.$jscomp$loop$prop$size$470) {
            var g = b.subarray(d, d + a.$jscomp$loop$prop$size$470);
            c += String.fromCharCode.apply(null, g)
          }
          return c
        }
      }(b);
      goog.asserts.assert(!1, "Unable to create a fromCharCode method");
      return null
    });
    shaka.util.FairPlayUtils = function () {
    };
    shaka.util.FairPlayUtils.defaultGetContentId = function (a) {
      a = shaka.util.StringUtils.fromBytesAutoDetect(a);
      return (new goog.Uri(a)).getDomain()
    };
    shaka.util.FairPlayUtils.initDataTransform = function (a, b, c) {
      if (!c || !c.byteLength) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.SERVER_CERTIFICATE_REQUIRED);
      b = "string" == typeof b ? shaka.util.StringUtils.toUTF16(b, !0) : b;
      a = shaka.util.StringUtils.fromBytesAutoDetect(a);
      a = shaka.util.StringUtils.toUTF16(a, !0);
      var d = new Uint8Array(12 + a.byteLength + b.byteLength + c.byteLength), e = 0, f = function (a) {
        shaka.util.BufferUtils.toDataView(d).setUint32(e,
          a.byteLength, !0);
        e += 4;
        d.set(shaka.util.BufferUtils.toUint8(a), e);
        e += a.byteLength
      };
      f(a);
      f(b);
      f(c);
      goog.asserts.assert(e == d.length, "Inconsistent init data length");
      return d
    };
    goog.exportSymbol("shaka.util.FairPlayUtils", shaka.util.FairPlayUtils);
    goog.exportProperty(shaka.util.FairPlayUtils, "initDataTransform", shaka.util.FairPlayUtils.initDataTransform);
    goog.exportProperty(shaka.util.FairPlayUtils, "defaultGetContentId", shaka.util.FairPlayUtils.defaultGetContentId);
    shaka.deprecate = {};
    shaka.deprecate.Version = function (a, b) {
      this.major_ = a;
      this.minor_ = b
    };
    shaka.deprecate.Version.prototype.major = function () {
      return this.major_
    };
    shaka.deprecate.Version.prototype.minor = function () {
      return this.minor_
    };
    shaka.deprecate.Version.prototype.compareTo = function (a) {
      var b = this.minor_ - a.minor_;
      return this.major_ - a.major_ || b
    };
    shaka.deprecate.Version.prototype.toString = function () {
      return "v" + this.major_ + "." + this.minor_
    };
    shaka.deprecate.Version.parse = function (a) {
      a = a.substring(1).split(".", 2);
      return new shaka.deprecate.Version(Number(a[0]), Number(a[1]))
    };
    shaka.deprecate.Enforcer = function (a, b, c) {
      this.libraryVersion_ = a;
      this.onPending_ = b;
      this.onExpired_ = c
    };
    shaka.deprecate.Enforcer.prototype.enforce = function (a, b, c) {
      (0 < a.compareTo(this.libraryVersion_) ? this.onPending_ : this.onExpired_)(this.libraryVersion_, a, b, c)
    };
    shaka.Deprecate = function () {
    };
    shaka.Deprecate.init = function (a) {
      goog.asserts.assert(null == shaka.Deprecate.enforcer_, "Deprecate.init should only be called once.");
      shaka.Deprecate.enforcer_ = new shaka.deprecate.Enforcer(shaka.deprecate.Version.parse(a), shaka.Deprecate.onPending_, shaka.Deprecate.onExpired_)
    };
    shaka.Deprecate.deprecateFeature = function (a, b, c) {
      var d = shaka.Deprecate.enforcer_;
      goog.asserts.assert(d, "Missing deprecation enforcer. Was |init| called?");
      a = new shaka.deprecate.Version(a, 0);
      d.enforce(a, b, c)
    };
    shaka.Deprecate.onPending_ = function (a, b, c, d) {
      shaka.log.alwaysWarn([c, "has been deprecated and will be removed in", b, ". We are currently at version", a, ". Additional information:", d].join(" "))
    };
    shaka.Deprecate.onExpired_ = function (a, b, c, d) {
      a = [c, "has been deprecated and has been removed in", b, ". We are now at version", a, ". Additional information:", d].join("");
      shaka.log.alwaysError(a);
      goog.asserts.assert(!1, a)
    };
    shaka.Deprecate.enforcer_ = null;
    shaka.util.Functional = function () {
    };
    shaka.util.Functional.createFallbackPromiseChain = function (a, b) {
      return a.reduce(function (a, d) {
        return a["catch"](function () {
          return b(d)
        })
      }, Promise.reject())
    };
    shaka.util.Functional.collapseArrays = function (a, b) {
      return a.concat(b)
    };
    shaka.util.Functional.ignored = function (a) {
    };
    shaka.util.Functional.noop = function () {
    };
    shaka.util.Functional.isNotNull = function (a) {
      return null != a
    };
    shaka.util.Functional.callFactory = function (a) {
      var b = Object.create(a.prototype || Object.prototype);
      a = a.call(b);
      a || (shaka.Deprecate.deprecateFeature(4, "Factories requiring new", "Factories should be plain functions"), a = b);
      return a
    };
    shaka.util.ManifestParserUtils = function () {
    };
    shaka.util.ManifestParserUtils.resolveUris = function (a, b) {
      var c = shaka.util.Functional;
      if (0 == b.length) return a;
      var d = b.map(function (a) {
        return new goog.Uri(a)
      });
      return a.map(function (a) {
        return new goog.Uri(a)
      }).map(function (a) {
        return d.map(function (b) {
          return a.resolve(b)
        })
      }).reduce(c.collapseArrays, []).map(function (a) {
        return a.toString()
      })
    };
    shaka.util.ManifestParserUtils.createDrmInfo = function (a, b) {
      return {
        keySystem: a,
        licenseServerUri: "",
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: null,
        initData: b || [],
        keyIds: new Set
      }
    };
    shaka.util.ManifestParserUtils.ContentType = {
      VIDEO: "video",
      AUDIO: "audio",
      TEXT: "text",
      IMAGE: "image",
      APPLICATION: "application"
    };
    shaka.util.ManifestParserUtils.TextStreamKind = {SUBTITLE: "subtitle", CLOSED_CAPTION: "caption"};
    shaka.util.ManifestParserUtils.GAP_OVERLAP_TOLERANCE_SECONDS = 1 / 15;
    shaka.util.MapUtils = function () {
    };
    shaka.util.MapUtils.asMap = function (a) {
      for (var b = new Map, c = $jscomp.makeIterator(Object.keys(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b.set(d, a[d]);
      return b
    };
    shaka.util.MapUtils.asObject = function (a) {
      var b = {};
      a.forEach(function (a, d) {
        b[d] = a
      });
      return b
    };
    shaka.util.MapUtils.hasSameElements = function (a, b) {
      if (a || b) {
        if (a && !b || b && !a) return !1
      } else return !0;
      if (a.size != b.size) return !1;
      for (var c = $jscomp.makeIterator(a), d = c.next(); !d.done; d = c.next()) {
        var e = $jscomp.makeIterator(d.value);
        d = e.next().value;
        e = e.next().value;
        if (!b.has(d)) return !1;
        d = b.get(d);
        if (d != e || void 0 == d) return !1
      }
      return !0
    };
    shaka.util.MimeUtils = function () {
    };
    shaka.util.MimeUtils.getFullType = function (a, b) {
      var c = a;
      b && (c += '; codecs="' + b + '"');
      return c
    };
    shaka.util.MimeUtils.getExtendedType = function (a) {
      var b = [a.mimeType];
      shaka.util.MimeUtils.EXTENDED_MIME_PARAMETERS_.forEach(function (c, d) {
        var e = a[d];
        e && b.push(c + '="' + e + '"')
      });
      return b.join(";")
    };
    shaka.util.MimeUtils.splitCodecs = function (a) {
      return a.split(",")
    };
    shaka.util.MimeUtils.getCodecBase = function (a) {
      return shaka.util.MimeUtils.getCodecParts_(a)[0]
    };
    shaka.util.MimeUtils.getCodecParts_ = function (a) {
      var b = a.split(".");
      a = b[0];
      b.pop();
      b = b.join(".");
      return [a, b]
    };
    shaka.util.MimeUtils.EXTENDED_MIME_PARAMETERS_ = (new Map).set("codecs", "codecs").set("frameRate", "framerate").set("bandwidth", "bitrate").set("width", "width").set("height", "height").set("channelsCount", "channels");
    shaka.util.MimeUtils.CLOSED_CAPTION_MIMETYPE = "application/cea-608";
    shaka.util.Platform = function () {
    };
    shaka.util.Platform.supportsMediaSource = function () {
      return window.MediaSource && MediaSource.isTypeSupported ? !0 : !1
    };
    shaka.util.Platform.supportsMediaType = function (a) {
      return "" != shaka.util.Platform.anyMediaElement().canPlayType(a)
    };
    shaka.util.Platform.isEdge = function () {
      return shaka.util.Platform.userAgentContains_("Edge/")
    };
    shaka.util.Platform.isIE = function () {
      return shaka.util.Platform.userAgentContains_("Trident/")
    };
    shaka.util.Platform.isTizen = function () {
      return shaka.util.Platform.userAgentContains_("Tizen")
    };
    shaka.util.Platform.isTizen4 = function () {
      return shaka.util.Platform.userAgentContains_("Tizen 4")
    };
    shaka.util.Platform.isTizen3 = function () {
      return shaka.util.Platform.userAgentContains_("Tizen 3")
    };
    shaka.util.Platform.isTizen2 = function () {
      return shaka.util.Platform.userAgentContains_("Tizen 2")
    };
    shaka.util.Platform.isWebOS = function () {
      return shaka.util.Platform.userAgentContains_("Web0S")
    };
    shaka.util.Platform.isChromecast = function () {
      return shaka.util.Platform.userAgentContains_("CrKey")
    };
    shaka.util.Platform.isChrome = function () {
      return shaka.util.Platform.userAgentContains_("Chrome") && !shaka.util.Platform.isEdge()
    };
    shaka.util.Platform.isApple = function () {
      return !!navigator.vendor && navigator.vendor.includes("Apple") && !shaka.util.Platform.isTizen()
    };
    shaka.util.Platform.safariVersion = function () {
      if (!shaka.util.Platform.isApple()) return null;
      var a = navigator.userAgent.match(/Version\/(\d+)/);
      return a ? parseInt(a[1], 10) : (a = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/)) ? parseInt(a[1], 10) : null
    };
    shaka.util.Platform.isMobile = function () {
      return /(?:iPhone|iPad|iPod|Android)/.test(navigator.userAgent) ? !0 : shaka.util.Platform.isApple() && 1 < navigator.maxTouchPoints
    };
    shaka.util.Platform.userAgentContains_ = function (a) {
      return (navigator.userAgent || "").includes(a)
    };
    shaka.util.Platform.anyMediaElement = function () {
      var a = shaka.util.Platform;
      if (a.cachedMediaElement_) return a.cachedMediaElement_;
      a.cacheExpirationTimer_ || (a.cacheExpirationTimer_ = new shaka.util.Timer(function () {
        a.cachedMediaElement_ = null
      }));
      a.cachedMediaElement_ = document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0];
      a.cachedMediaElement_ || (a.cachedMediaElement_ = document.createElement("video"));
      a.cacheExpirationTimer_.tickAfter(1);
      return a.cachedMediaElement_
    };
    shaka.util.Platform.cacheExpirationTimer_ = null;
    shaka.util.Platform.cachedMediaElement_ = null;
    shaka.util.Uint8ArrayUtils = function () {
    };
    shaka.util.Uint8ArrayUtils.equal = function (a, b) {
      shaka.Deprecate.deprecateFeature(4, "shaka.util.Uint8ArrayUtils.equal", "Please use shaka.util.BufferUtils.equal instead.");
      return shaka.util.BufferUtils.equal(a, b)
    };
    shaka.util.Uint8ArrayUtils.toStandardBase64 = function (a) {
      a = shaka.util.StringUtils.fromCharCode(shaka.util.BufferUtils.toUint8(a));
      return btoa(a)
    };
    shaka.util.Uint8ArrayUtils.toBase64 = function (a, b) {
      b = void 0 == b ? !0 : b;
      var c = shaka.util.Uint8ArrayUtils.toStandardBase64(a).replace(/\+/g, "-").replace(/\//g, "_");
      return b ? c : c.replace(/[=]*$/, "")
    };
    shaka.util.Uint8ArrayUtils.fromBase64 = function (a) {
      var b = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
      a = new Uint8Array(b.length);
      b = $jscomp.makeIterator(shaka.util.Iterables.enumerate(b));
      for (var c = b.next(); !c.done; c = b.next()) c = c.value, a[c.i] = c.item.charCodeAt(0);
      return a
    };
    shaka.util.Uint8ArrayUtils.fromHex = function (a) {
      var b = a.length / 2, c = new Uint8Array(b);
      b = $jscomp.makeIterator(shaka.util.Iterables.range(b));
      for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = window.parseInt(a.substr(2 * d, 2), 16);
      return c
    };
    shaka.util.Uint8ArrayUtils.toHex = function (a) {
      var b = shaka.util.BufferUtils.toUint8(a);
      a = "";
      b = $jscomp.makeIterator(b);
      for (var c = b.next(); !c.done; c = b.next()) c = c.value, c = c.toString(16), 1 == c.length && (c = "0" + c), a += c;
      return a
    };
    shaka.util.Uint8ArrayUtils.concat = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
      var d = 0, e = $jscomp.makeIterator(b);
      for (c = e.next(); !c.done; c = e.next()) d += c.value.byteLength;
      d = new Uint8Array(d);
      e = 0;
      b = $jscomp.makeIterator(b);
      for (c = b.next(); !c.done; c = b.next()) c = c.value, d.set(shaka.util.BufferUtils.toUint8(c), e), e += c.byteLength;
      return d
    };
    goog.exportSymbol("shaka.util.Uint8ArrayUtils", shaka.util.Uint8ArrayUtils);
    goog.exportProperty(shaka.util.Uint8ArrayUtils, "concat", shaka.util.Uint8ArrayUtils.concat);
    goog.exportProperty(shaka.util.Uint8ArrayUtils, "toHex", shaka.util.Uint8ArrayUtils.toHex);
    goog.exportProperty(shaka.util.Uint8ArrayUtils, "fromHex", shaka.util.Uint8ArrayUtils.fromHex);
    goog.exportProperty(shaka.util.Uint8ArrayUtils, "fromBase64", shaka.util.Uint8ArrayUtils.fromBase64);
    goog.exportProperty(shaka.util.Uint8ArrayUtils, "toBase64", shaka.util.Uint8ArrayUtils.toBase64);
    goog.exportProperty(shaka.util.Uint8ArrayUtils, "toStandardBase64", shaka.util.Uint8ArrayUtils.toStandardBase64);
    goog.exportProperty(shaka.util.Uint8ArrayUtils, "equal", shaka.util.Uint8ArrayUtils.equal);
    shaka.media = {};
    shaka.media.DrmEngine = function (a, b) {
      var c = this;
      b = void 0 === b ? 1 : b;
      this.playerInterface_ = a;
      this.supportedTypes_ = new Set;
      this.video_ = this.mediaKeys_ = null;
      this.initialized_ = !1;
      this.licenseTimeSeconds_ = 0;
      this.currentDrmInfo_ = null;
      this.eventManager_ = new shaka.util.EventManager;
      this.activeSessions_ = new Map;
      this.offlineSessionIds_ = [];
      this.allSessionsLoaded_ = new shaka.util.PublicPromise;
      this.config_ = null;
      this.onError_ = function (b) {
        c.allSessionsLoaded_.reject(b);
        a.onError(b)
      };
      this.keyStatusByKeyId_ = new Map;
      this.announcedKeyStatusByKeyId_ =
        new Map;
      this.keyStatusTimer_ = new shaka.util.Timer(function () {
        return c.processKeyStatusChanges_()
      });
      this.usePersistentLicenses_ = !1;
      this.mediaKeyMessageEvents_ = [];
      this.initialRequestsSent_ = !1;
      this.expirationTimer_ = (new shaka.util.Timer(function () {
        c.pollExpiration_()
      })).tickEvery(b);
      this.allSessionsLoaded_["catch"](function () {
      });
      this.destroyer_ = new shaka.util.Destroyer(function () {
        return c.destroyNow_()
      })
    };
    shaka.media.DrmEngine.prototype.destroy = function () {
      return this.destroyer_.destroy()
    };
    shaka.media.DrmEngine.prototype.destroyNow_ = function () {
      var a = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        switch (b.nextAddress) {
          case 1:
            return a.eventManager_.release(), a.eventManager_ = null, a.allSessionsLoaded_.reject(), a.expirationTimer_.stop(), a.expirationTimer_ = null, a.keyStatusTimer_.stop(), a.keyStatusTimer_ = null, b.yield(a.closeOpenSessions_(), 2);
          case 2:
            if (!a.video_) {
              b.jumpTo(3);
              break
            }
            goog.asserts.assert(!a.video_.src, "video src must be removed first!");
            b.setCatchFinallyBlocks(4);
            return b.yield(a.video_.setMediaKeys(null), 6);
          case 6:
            b.leaveTryBlock(5);
            break;
          case 4:
            b.enterCatchBlock();
          case 5:
            a.video_ = null;
          case 3:
            a.currentDrmInfo_ = null, a.supportedTypes_.clear(), a.mediaKeys_ = null, a.offlineSessionIds_ = [], a.config_ = null, a.onError_ = function () {
            }, a.playerInterface_ = null, b.jumpToEnd()
        }
      })
    };
    shaka.media.DrmEngine.prototype.configure = function (a) {
      this.config_ = a
    };
    shaka.media.DrmEngine.prototype.initForStorage = function (a, b) {
      this.offlineSessionIds_ = [];
      this.usePersistentLicenses_ = b;
      return this.init_(a)
    };
    shaka.media.DrmEngine.prototype.initForPlayback = function (a, b) {
      this.offlineSessionIds_ = b;
      this.usePersistentLicenses_ = 0 < b.length;
      return this.init_(a)
    };
    shaka.media.DrmEngine.prototype.initForRemoval = function (a, b, c, d, e) {
      var f = new Map;
      d = {
        audioCapabilities: d,
        videoCapabilities: e,
        distinctiveIdentifier: "optional",
        persistentState: "required",
        sessionTypes: ["persistent-license"],
        label: a
      };
      d.drmInfos = [{
        keySystem: a,
        licenseServerUri: b,
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !0,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: c,
        initData: null,
        keyIds: null
      }];
      f.set(a, d);
      return this.queryMediaKeys_(f)
    };
    shaka.media.DrmEngine.prototype.init_ = function (a) {
      goog.asserts.assert(this.config_, "DrmEngine configure() must be called before init()!");
      var b = this.configureClearKey_();
      if (b) for (var c = $jscomp.makeIterator(a), d = c.next(); !d.done; d = c.next()) d = d.value, d.video && d.video.encrypted && (d.video.drmInfos = [b]), d.audio && d.audio.encrypted && (d.audio.drmInfos = [b]);
      b = a.some(function (a) {
        return a.video && a.video.drmInfos.length || a.audio && a.audio.drmInfos.length ? !0 : !1
      });
      b || (c = shaka.util.MapUtils.asMap(this.config_.servers),
        shaka.media.DrmEngine.replaceDrmInfo_(a, c));
      c = $jscomp.makeIterator(a);
      for (d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        d = (d.video ? d.video.drmInfos : []).concat(d.audio ? d.audio.drmInfos : []);
        d = $jscomp.makeIterator(d);
        for (var e = d.next(); !e.done; e = d.next()) shaka.media.DrmEngine.fillInDrmInfoDefaults_(e.value, shaka.util.MapUtils.asMap(this.config_.servers), shaka.util.MapUtils.asMap(this.config_.advanced || {}))
      }
      a = this.prepareMediaKeyConfigsForVariants_(a);
      if (!a.size) return this.initialized_ = !0, Promise.resolve();
      a = this.queryMediaKeys_(a);
      return b ? a : a["catch"](function () {
      })
    };
    shaka.media.DrmEngine.prototype.attach = function (a) {
      var b = this, c, d, e;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        if (1 == f.nextAddress) {
          if (!b.mediaKeys_) return b.eventManager_.listenOnce(a, "encrypted", function (a) {
            b.onError_(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.ENCRYPTED_CONTENT_WITHOUT_DRM_INFO))
          }), f["return"]();
          b.video_ = a;
          b.eventManager_.listenOnce(b.video_, "play", function () {
            return b.onPlay_()
          });
          "webkitCurrentPlaybackTargetIsWireless" in
          b.video_ && b.eventManager_.listen(b.video_, "webkitcurrentplaybacktargetiswirelesschanged", function () {
            return b.closeOpenSessions_()
          });
          c = b.video_.setMediaKeys(b.mediaKeys_);
          c = c["catch"](function (a) {
            goog.asserts.assert(a instanceof Error, "Wrong error type!");
            return Promise.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.FAILED_TO_ATTACH_TO_VIDEO, a.message))
          });
          d = b.setServerCertificate();
          return f.yield(Promise.all([c, d]), 2)
        }
        b.destroyer_.ensureNotDestroyed();
        b.createOrLoad();
        b.currentDrmInfo_.initData.length || b.offlineSessionIds_.length || (e = function (a) {
          return b.newInitData(a.initDataType, shaka.util.BufferUtils.toUint8(a.initData))
        }, b.eventManager_.listen(b.video_, "encrypted", e));
        f.jumpToEnd()
      })
    };
    shaka.media.DrmEngine.prototype.setServerCertificate = function () {
      var a = this, b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) {
          goog.asserts.assert(a.initialized_, "Must call init() before setServerCertificate");
          if (!(a.mediaKeys_ && a.currentDrmInfo_ && a.currentDrmInfo_.serverCertificate && a.currentDrmInfo_.serverCertificate.length)) return d.jumpTo(0);
          d.setCatchFinallyBlocks(3);
          return d.yield(a.mediaKeys_.setServerCertificate(a.currentDrmInfo_.serverCertificate), 5)
        }
        if (3 !=
          d.nextAddress) return (b = d.yieldResult) || shaka.log.warning("Server certificates are not supported by the key system.  The server certificate has been ignored."), d.leaveTryBlock(0);
        c = d.enterCatchBlock();
        throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.INVALID_SERVER_CERTIFICATE, c.message);
      })
    };
    shaka.media.DrmEngine.prototype.removeSession = function (a) {
      var b = this, c, d, e;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        if (1 == f.nextAddress) return goog.asserts.assert(b.mediaKeys_, "Must call init() before removeSession"), f.yield(b.loadOfflineSession_(a), 2);
        c = f.yieldResult;
        if (!c) return shaka.log.v2("Ignoring attempt to remove missing session", a), f["return"]();
        d = [];
        if (e = b.activeSessions_.get(c)) e.updatePromise = new shaka.util.PublicPromise, d.push(e.updatePromise);
        shaka.log.v2("Attempting to remove session",
          a);
        d.push(c.remove());
        return f.yield(Promise.all(d), 0)
      })
    };
    shaka.media.DrmEngine.prototype.createOrLoad = function () {
      for (var a = (this.currentDrmInfo_ ? this.currentDrmInfo_.initData : []) || [], b = $jscomp.makeIterator(a), c = b.next(); !c.done; c = b.next()) c = c.value, this.newInitData(c.initDataType, c.initData);
      b = $jscomp.makeIterator(this.offlineSessionIds_);
      for (c = b.next(); !c.done; c = b.next()) this.loadOfflineSession_(c.value);
      a.length || this.offlineSessionIds_.length || this.allSessionsLoaded_.resolve();
      return this.allSessionsLoaded_
    };
    shaka.media.DrmEngine.prototype.newInitData = function (a, b) {
      var c = this.activeSessions_.values();
      c = $jscomp.makeIterator(c);
      for (var d = c.next(); !d.done; d = c.next()) if (shaka.util.BufferUtils.equal(b, d.value.initData) && !shaka.util.Platform.isTizen2()) {
        shaka.log.debug("Ignoring duplicate init data.");
        return
      }
      this.createTemporarySession_(a, b)
    };
    shaka.media.DrmEngine.prototype.initialized = function () {
      return this.initialized_
    };
    shaka.media.DrmEngine.keySystem = function (a) {
      return a ? a.keySystem : ""
    };
    shaka.media.DrmEngine.prototype.willSupport = function (a) {
      return shaka.util.Platform.isEdge() ? !0 : this.supportedTypes_.has(a.toLowerCase())
    };
    shaka.media.DrmEngine.prototype.getSessionIds = function () {
      var a = this.activeSessions_.keys();
      a = shaka.util.Iterables.map(a, function (a) {
        return a.sessionId
      });
      return Array.from(a)
    };
    shaka.media.DrmEngine.prototype.getExpiration = function () {
      var a = Infinity, b = this.activeSessions_.keys();
      b = $jscomp.makeIterator(b);
      for (var c = b.next(); !c.done; c = b.next()) c = c.value, isNaN(c.expiration) || (a = Math.min(a, c.expiration));
      return a
    };
    shaka.media.DrmEngine.prototype.getLicenseTime = function () {
      return this.licenseTimeSeconds_ ? this.licenseTimeSeconds_ : NaN
    };
    shaka.media.DrmEngine.prototype.getDrmInfo = function () {
      return this.currentDrmInfo_
    };
    shaka.media.DrmEngine.prototype.getKeyStatuses = function () {
      return shaka.util.MapUtils.asObject(this.announcedKeyStatusByKeyId_)
    };
    shaka.media.DrmEngine.prototype.prepareMediaKeyConfigsForVariants_ = function (a) {
      for (var b = shaka.util.ManifestParserUtils.ContentType, c = new Set, d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        e = (e.video ? e.video.drmInfos : []).concat(e.audio ? e.audio.drmInfos : []);
        var f = $jscomp.makeIterator(e);
        for (e = f.next(); !e.done; e = f.next()) c.add(e.value)
      }
      d = $jscomp.makeIterator(c);
      for (e = d.next(); !e.done; e = d.next()) shaka.media.DrmEngine.fillInDrmInfoDefaults_(e.value, shaka.util.MapUtils.asMap(this.config_.servers),
        shaka.util.MapUtils.asMap(this.config_.advanced || {}));
      f = this.usePersistentLicenses_ ? "required" : "optional";
      var g = this.usePersistentLicenses_ ? ["persistent-license"] : ["temporary"];
      d = new Map;
      c = $jscomp.makeIterator(c);
      for (e = c.next(); !e.done; e = c.next()) e = e.value, d.set(e.keySystem, {
        audioCapabilities: [],
        videoCapabilities: [],
        distinctiveIdentifier: "optional",
        persistentState: f,
        sessionTypes: g,
        label: e.keySystem,
        drmInfos: []
      });
      a = $jscomp.makeIterator(a);
      for (e = a.next(); !e.done; e = a.next()) for (e = e.value, c = $jscomp.makeIterator([e.audio,
        e.video]), e = c.next(); !e.done; e = c.next()) if (f = e.value) {
        g = shaka.util.MimeUtils.getFullType(f.mimeType, f.codecs);
        var h = $jscomp.makeIterator(f.drmInfos);
        for (e = h.next(); !e.done; e = h.next()) {
          var k = e.value;
          e = d.get(k.keySystem);
          goog.asserts.assert(e, "Any missing configs should have be filled in before.");
          e.drmInfos.push(k);
          k.distinctiveIdentifierRequired && (e.distinctiveIdentifier = "required");
          k.persistentStateRequired && (e.persistentState = "required");
          k = {
            robustness: (f.type == b.AUDIO ? k.audioRobustness : k.videoRobustness) ||
              "", contentType: g
          };
          f.type == b.AUDIO ? e.audioCapabilities.push(k) : e.videoCapabilities.push(k)
        }
      }
      return d
    };
    shaka.media.DrmEngine.prototype.queryMediaKeys_ = function (a) {
      var b = this, c, d, e, f, g, h, k, l, m, n, p, q, r, v, x, t, u, w, y, C, z, B;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (A) {
        switch (A.nextAddress) {
          case 1:
            if (1 == a.size && a.has("")) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.NO_RECOGNIZED_KEY_SYSTEMS);
            c = $jscomp.makeIterator(a.values());
            for (d = c.next(); !d.done; d = c.next()) e = d.value, 0 == e.audioCapabilities.length && delete e.audioCapabilities,
            0 == e.videoCapabilities.length && delete e.videoCapabilities;
            g = $jscomp.makeIterator([!0, !1]);
            h = g.next();
          case 2:
            if (h.done) {
              A.jumpTo(4);
              break
            }
            k = h.value;
            l = $jscomp.makeIterator(a.keys());
            m = l.next();
          case 5:
            if (m.done) {
              A.jumpTo(7);
              break
            }
            n = m.value;
            p = a.get(n);
            q = p.drmInfos.some(function (a) {
              return !!a.licenseServerUri
            });
            if (q != k) {
              A.jumpTo(6);
              break
            }
            A.setCatchFinallyBlocks(8);
            return A.yield(navigator.requestMediaKeySystemAccess(n, [p]), 10);
          case 10:
            f = A.yieldResult;
            A.jumpTo(7);
            break;
          case 8:
            A.enterCatchBlock();
          case 9:
            b.destroyer_.ensureNotDestroyed();
          case 6:
            m = l.next();
            A.jumpTo(5);
            break;
          case 7:
            if (f) {
              A.jumpTo(4);
              break
            }
            h = g.next();
            A.jumpTo(2);
            break;
          case 4:
            if (!f) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE);
            b.destroyer_.ensureNotDestroyed();
            A.setCatchFinallyBlocks(11);
            b.supportedTypes_.clear();
            r = f.getConfiguration();
            v = r.audioCapabilities || [];
            x = r.videoCapabilities || [];
            t = $jscomp.makeIterator(v);
            for (u = t.next(); !u.done; u = t.next()) w = u.value, b.supportedTypes_.add(w.contentType.toLowerCase());
            y = $jscomp.makeIterator(x);
            for (u = y.next(); !u.done; u = y.next()) C = u.value, b.supportedTypes_.add(C.contentType.toLowerCase());
            goog.asserts.assert(b.supportedTypes_.size, "We should get at least one supported MIME type");
            b.currentDrmInfo_ = shaka.media.DrmEngine.createDrmInfoFor_(f.keySystem, a.get(f.keySystem));
            if (!b.currentDrmInfo_.licenseServerUri) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.NO_LICENSE_SERVER_GIVEN, b.currentDrmInfo_.keySystem);
            return A.yield(f.createMediaKeys(), 13);
          case 13:
            z = A.yieldResult;
            b.destroyer_.ensureNotDestroyed();
            shaka.log.info("Created MediaKeys object for key system", b.currentDrmInfo_.keySystem);
            b.mediaKeys_ = z;
            b.initialized_ = !0;
            A.leaveTryBlock(0);
            break;
          case 11:
            B = A.enterCatchBlock();
            b.destroyer_.ensureNotDestroyed(B);
            b.currentDrmInfo_ = null;
            b.supportedTypes_.clear();
            if (B instanceof shaka.util.Error) throw B;
            throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.FAILED_TO_CREATE_CDM,
              B.message);
        }
      })
    };
    shaka.media.DrmEngine.prototype.configureClearKey_ = function () {
      var a = shaka.util.MapUtils.asMap(this.config_.clearKeys);
      if (0 == a.size) return null;
      var b = shaka.util.StringUtils, c = shaka.util.Uint8ArrayUtils, d = [], e = [];
      a.forEach(function (a, b) {
        var f = c.fromHex(b), g = c.fromHex(a);
        f = {kty: "oct", kid: c.toBase64(f, !1), k: c.toBase64(g, !1)};
        d.push(f);
        e.push(f.kid)
      });
      a = JSON.stringify({keys: d});
      var f = JSON.stringify({kids: e});
      b = [{initData: shaka.util.BufferUtils.toUint8(b.toUTF8(f)), initDataType: "keyids"}];
      return {
        keySystem: "org.w3.clearkey",
        licenseServerUri: "data:application/json;base64," + window.btoa(a),
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: null,
        initData: b,
        keyIds: new Set(e)
      }
    };
    shaka.media.DrmEngine.prototype.loadOfflineSession_ = function (a) {
      var b = this, c, d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        switch (h.nextAddress) {
          case 1:
            try {
              shaka.log.v1("Attempting to load an offline session", a), c = b.mediaKeys_.createSession("persistent-license")
            } catch (k) {
              return d = new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.FAILED_TO_CREATE_SESSION, k.message), b.onError_(d), h["return"](Promise.reject(d))
            }
            b.eventManager_.listen(c,
              "message", function (a) {
                return b.onSessionMessage_(a)
              });
            b.eventManager_.listen(c, "keystatuseschange", function (a) {
              return b.onKeyStatusesChange_(a)
            });
            e = {initData: null, loaded: !1, oldExpiration: Infinity, updatePromise: null};
            b.activeSessions_.set(c, e);
            h.setCatchFinallyBlocks(2);
            return h.yield(c.load(a), 4);
          case 4:
            f = h.yieldResult;
            b.destroyer_.ensureNotDestroyed();
            shaka.log.v2("Loaded offline session", a, f);
            if (!f) return b.activeSessions_["delete"](c), b.onError_(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
              shaka.util.Error.Category.DRM, shaka.util.Error.Code.OFFLINE_SESSION_REMOVED)), h["return"](Promise.resolve());
            e.loaded = !0;
            b.areAllSessionsLoaded_() && b.allSessionsLoaded_.resolve();
            return h["return"](c);
          case 2:
            g = h.enterCatchBlock(), b.destroyer_.ensureNotDestroyed(g), b.activeSessions_["delete"](c), b.onError_(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.FAILED_TO_CREATE_SESSION, g.message));
          case 3:
            return h["return"](Promise.resolve())
        }
      })
    };
    shaka.media.DrmEngine.prototype.createTemporarySession_ = function (a, b) {
      var c = this;
      try {
        if (this.usePersistentLicenses_) {
          shaka.log.v1("Creating new persistent session");
          var d = this.mediaKeys_.createSession("persistent-license")
        } else shaka.log.v1("Creating new temporary session"), d = this.mediaKeys_.createSession()
      } catch (f) {
        this.onError_(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.FAILED_TO_CREATE_SESSION, f.message));
        return
      }
      this.eventManager_.listen(d,
        "message", function (a) {
          return c.onSessionMessage_(a)
        });
      this.eventManager_.listen(d, "keystatuseschange", function (a) {
        return c.onKeyStatusesChange_(a)
      });
      this.activeSessions_.set(d, {initData: b, loaded: !1, oldExpiration: Infinity, updatePromise: null});
      try {
        b = this.config_.initDataTransform(b, a, this.currentDrmInfo_)
      } catch (f) {
        var e = f;
        f instanceof shaka.util.Error || (e = new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.INIT_DATA_TRANSFORM_ERROR, f));
        this.onError_(e);
        return
      }
      this.config_.logLicenseExchange && (e = shaka.util.Uint8ArrayUtils.toBase64(b), shaka.log.info("EME init data: type=", a, "data=", e));
      d.generateRequest(a, b)["catch"](function (a) {
        if (!c.destroyer_.destroyed()) {
          goog.asserts.assert(a instanceof Error, "Wrong error type!");
          c.activeSessions_["delete"](d);
          var b = a.errorCode;
          if (b && b.systemCode) {
            var e = b.systemCode;
            0 > e && (e += Math.pow(2, 32));
            e = "0x" + e.toString(16)
          }
          c.onError_(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.FAILED_TO_GENERATE_LICENSE_REQUEST,
            a.message, a, e))
        }
      })
    };
    shaka.media.DrmEngine.defaultInitDataTransform = function (a, b, c) {
      "skd" == b && (b = c.serverCertificate, c = shaka.util.FairPlayUtils.defaultGetContentId(a), a = shaka.util.FairPlayUtils.initDataTransform(a, c, b));
      return a
    };
    shaka.media.DrmEngine.prototype.onSessionMessage_ = function (a) {
      this.delayLicenseRequest_() ? this.mediaKeyMessageEvents_.push(a) : this.sendLicenseRequest_(a)
    };
    shaka.media.DrmEngine.prototype.delayLicenseRequest_ = function () {
      return this.video_ ? this.config_.delayLicenseRequestUntilPlayed && this.video_.paused && !this.initialRequestsSent_ : !1
    };
    shaka.media.DrmEngine.prototype.sendLicenseRequest_ = function (a) {
      var b = this, c, d, e, f, g, h, k, l, m, n, p, q, r, v, x, t, u;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (w) {
        switch (w.nextAddress) {
          case 1:
            return c = a.target, shaka.log.v1("Sending license request for session", c.sessionId, "of type", a.messageType), b.config_.logLicenseExchange && (d = shaka.util.Uint8ArrayUtils.toBase64(a.message), shaka.log.info("EME license request", d)), e = b.activeSessions_.get(c), f = b.currentDrmInfo_.licenseServerUri, g = b.config_.advanced[b.currentDrmInfo_.keySystem],
            "individualization-request" == a.messageType && g && g.individualizationServer && (f = g.individualizationServer), h = shaka.net.NetworkingEngine.RequestType.LICENSE, k = shaka.net.NetworkingEngine.makeRequest([f], b.config_.retryParameters), k.body = a.message, k.method = "POST", k.licenseRequestType = a.messageType, k.sessionId = c.sessionId, "com.microsoft.playready" != b.currentDrmInfo_.keySystem && "com.chromecast.playready" != b.currentDrmInfo_.keySystem || b.unpackPlayReadyRequest_(k), l = Date.now(), w.setCatchFinallyBlocks(2), n =
              b.playerInterface_.netEngine.request(h, k), w.yield(n.promise, 4);
          case 4:
            m = w.yieldResult;
            w.leaveTryBlock(3);
            break;
          case 2:
            return p = w.enterCatchBlock(), goog.asserts.assert(p instanceof shaka.util.Error, "Wrong NetworkingEngine error type!"), q = new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.LICENSE_REQUEST_FAILED, p), b.onError_(q), e && e.updatePromise && e.updatePromise.reject(q), w["return"]();
          case 3:
            if (b.destroyer_.destroyed()) return w["return"]();
            b.licenseTimeSeconds_ += (Date.now() - l) / 1E3;
            b.config_.logLicenseExchange && (r = shaka.util.Uint8ArrayUtils.toBase64(m.data), shaka.log.info("EME license response", r));
            w.setCatchFinallyBlocks(5);
            shaka.log.v1("Updating session", c.sessionId);
            return w.yield(c.update(m.data), 7);
          case 7:
            w.leaveTryBlock(6);
            break;
          case 5:
            return v = w.enterCatchBlock(), x = new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.LICENSE_RESPONSE_REJECTED, v.message), b.onError_(x), e && e.updatePromise &&
            e.updatePromise.reject(x), w["return"]();
          case 6:
            t = new shaka.util.FakeEvent("drmsessionupdate"), b.playerInterface_.onEvent(t), e && (e.updatePromise && e.updatePromise.resolve(), u = new shaka.util.Timer(function () {
              e.loaded = !0;
              b.areAllSessionsLoaded_() && b.allSessionsLoaded_.resolve()
            }), u.tickAfter(shaka.media.DrmEngine.SESSION_LOAD_TIMEOUT_)), w.jumpToEnd()
        }
      })
    };
    shaka.media.DrmEngine.prototype.unpackPlayReadyRequest_ = function (a) {
      var b = shaka.util.StringUtils.fromUTF16(a.body, !0, !0);
      if (b.includes("PlayReadyKeyMessage")) {
        shaka.log.debug("Unwrapping PlayReady request.");
        b = (new DOMParser).parseFromString(b, "application/xml");
        var c = b.getElementsByTagName("HttpHeader");
        c = $jscomp.makeIterator(c);
        for (var d = c.next(); !d.done; d = c.next()) {
          var e = d.value;
          d = e.getElementsByTagName("name")[0];
          e = e.getElementsByTagName("value")[0];
          goog.asserts.assert(d && e, "Malformed PlayReady headers!");
          a.headers[d.textContent] = e.textContent
        }
        b = b.getElementsByTagName("Challenge")[0];
        goog.asserts.assert(b, "Malformed PlayReady challenge!");
        goog.asserts.assert("base64encoded" == b.getAttribute("encoding"), "Unexpected PlayReady challenge encoding!");
        a.body = shaka.util.Uint8ArrayUtils.fromBase64(b.textContent)
      } else shaka.log.debug("PlayReady request is already unwrapped."), a.headers["Content-Type"] = "text/xml; charset=utf-8"
    };
    shaka.media.DrmEngine.prototype.onKeyStatusesChange_ = function (a) {
      var b = this;
      a = a.target;
      shaka.log.v2("Key status changed for session", a.sessionId);
      var c = this.activeSessions_.get(a), d = !1;
      a.keyStatuses.forEach(function (a, e) {
        if ("string" == typeof e) {
          var f = e;
          e = a;
          a = f
        }
        if ("com.microsoft.playready" == b.currentDrmInfo_.keySystem && 16 == e.byteLength && (shaka.util.Platform.isIE() || shaka.util.Platform.isEdge())) {
          f = shaka.util.BufferUtils.toDataView(e);
          var g = f.getUint32(0, !0), l = f.getUint16(4, !0), m = f.getUint16(6, !0);
          f.setUint32(0,
            g, !1);
          f.setUint16(4, l, !1);
          f.setUint16(6, m, !1)
        }
        "com.microsoft.playready" == b.currentDrmInfo_.keySystem && "status-pending" == a && (a = "usable");
        "status-pending" != a && (c.loaded = !0);
        c || goog.asserts.assert("usable" != a, "Usable keys found in closed session");
        "expired" == a && (d = !0);
        f = shaka.util.Uint8ArrayUtils.toHex(e);
        b.keyStatusByKeyId_.set(f, a)
      });
      var e = a.expiration - Date.now();
      (0 > e || d && 1E3 > e) && c && !c.updatePromise && (shaka.log.debug("Session has expired", a.sessionId), this.activeSessions_["delete"](a), a.close()["catch"](function () {
      }));
      this.areAllSessionsLoaded_() && (this.allSessionsLoaded_.resolve(), this.keyStatusTimer_.tickAfter(shaka.media.DrmEngine.KEY_STATUS_BATCH_TIME))
    };
    shaka.media.DrmEngine.prototype.processKeyStatusChanges_ = function () {
      var a = this.keyStatusByKeyId_, b = this.announcedKeyStatusByKeyId_;
      b.clear();
      a.forEach(function (a, d) {
        return b.set(d, a)
      });
      a = Array.from(b.values());
      if (a.length && a.every(function (a) {
        return "expired" == a
      })) this.onError_(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.DRM, shaka.util.Error.Code.EXPIRED));
      this.playerInterface_.onKeyStatus(shaka.util.MapUtils.asObject(b))
    };
    shaka.media.DrmEngine.isBrowserSupported = function () {
      return !!window.MediaKeys && !!window.navigator && !!window.navigator.requestMediaKeySystemAccess && !!window.MediaKeySystemAccess && !!window.MediaKeySystemAccess.prototype.getConfiguration
    };
    shaka.media.DrmEngine.probeSupport = function () {
      var a, b, c, d, e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        return 1 == k.nextAddress ? (goog.asserts.assert(shaka.media.DrmEngine.isBrowserSupported(), "Must have basic EME support"), a = "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" "), b = [{contentType: 'video/mp4; codecs="avc1.42E01E"'}, {contentType: 'video/webm; codecs="vp8"'}],
          c = {videoCapabilities: b}, d = {
          videoCapabilities: b,
          persistentState: "required",
          sessionTypes: ["persistent-license"]
        }, e = [d, c], f = new Map, g = function (a) {
          var b, c, d;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
            switch (g.nextAddress) {
              case 1:
                return g.setCatchFinallyBlocks(2), g.yield(navigator.requestMediaKeySystemAccess(a, e), 4);
              case 4:
                return b = g.yieldResult, d = (c = b.getConfiguration().sessionTypes) ? c.includes("persistent-license") : !1, shaka.util.Platform.isTizen3() && (d = !1), f.set(a, {persistentState: d}),
                  g.yield(b.createMediaKeys(), 5);
              case 5:
                g.leaveTryBlock(0);
                break;
              case 2:
                g.enterCatchBlock(), f.set(a, null), g.jumpToEnd()
            }
          })
        }, h = a.map(function (a) {
          return g(a)
        }), k.yield(Promise.all(h), 2)) : k["return"](shaka.util.MapUtils.asObject(f))
      })
    };
    shaka.media.DrmEngine.prototype.onPlay_ = function () {
      for (var a = $jscomp.makeIterator(this.mediaKeyMessageEvents_), b = a.next(); !b.done; b = a.next()) this.sendLicenseRequest_(b.value);
      this.initialRequestsSent_ = !0;
      this.mediaKeyMessageEvents_ = []
    };
    shaka.media.DrmEngine.prototype.closeSession_ = function (a) {
      var b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) return b = shaka.media.DrmEngine, c = new Promise(function (a, c) {
          (new shaka.util.Timer(c)).tickAfter(b.CLOSE_TIMEOUT_)
        }), d.setCatchFinallyBlocks(2), d.yield(Promise.race([Promise.all([a.close(), a.closed]), c]), 4);
        if (2 != d.nextAddress) return d.leaveTryBlock(0);
        d.enterCatchBlock();
        shaka.log.warning("Timeout waiting for session close");
        d.jumpToEnd()
      })
    };
    shaka.media.DrmEngine.prototype.closeOpenSessions_ = function () {
      var a = this, b;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        b = Array.from(a.activeSessions_.keys());
        a.activeSessions_.clear();
        return c.yield(Promise.all(b.map(function (b) {
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
            if (1 == c.nextAddress) return shaka.log.v1("Closing session", b.sessionId), c.setCatchFinallyBlocks(2), c.yield(a.closeSession_(b), 4);
            if (2 != c.nextAddress) return c.leaveTryBlock(0);
            c.enterCatchBlock();
            c.jumpToEnd()
          })
        })), 0)
      })
    };
    shaka.media.DrmEngine.prototype.supportsVariant = function (a) {
      var b = a.audio;
      a = a.video;
      if (b && b.encrypted) {
        var c = shaka.util.MimeUtils.getFullType(b.mimeType, b.codecs);
        if (!this.willSupport(c)) return !1
      }
      if (a && a.encrypted && (c = shaka.util.MimeUtils.getFullType(a.mimeType, a.codecs), !this.willSupport(c))) return !1;
      var d = shaka.media.DrmEngine.keySystem(this.currentDrmInfo_);
      b = (a ? a.drmInfos : []).concat(b ? b.drmInfos : []);
      return 0 == b.length || b.some(function (a) {
        return a.keySystem == d
      })
    };
    shaka.media.DrmEngine.areDrmCompatible = function (a, b) {
      return a.length && b.length ? 0 < shaka.media.DrmEngine.getCommonDrmInfos(a, b).length : !0
    };
    shaka.media.DrmEngine.getCommonDrmInfos = function (a, b) {
      if (!a.length) return b;
      if (!b.length) return a;
      for (var c = [], d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        for (var f = $jscomp.makeIterator(b), g = f.next(); !g.done; g = f.next()) if (g = g.value, e.keySystem == g.keySystem) {
          f = [];
          f = f.concat(e.initData || []);
          f = f.concat(g.initData || []);
          var h = e.keyIds && g.keyIds ? new Set([].concat($jscomp.arrayFromIterable(e.keyIds), $jscomp.arrayFromIterable(g.keyIds))) : e.keyIds || g.keyIds;
          c.push({
            keySystem: e.keySystem,
            licenseServerUri: e.licenseServerUri || g.licenseServerUri,
            distinctiveIdentifierRequired: e.distinctiveIdentifierRequired || g.distinctiveIdentifierRequired,
            persistentStateRequired: e.persistentStateRequired || g.persistentStateRequired,
            videoRobustness: e.videoRobustness || g.videoRobustness,
            audioRobustness: e.audioRobustness || g.audioRobustness,
            serverCertificate: e.serverCertificate || g.serverCertificate,
            initData: f,
            keyIds: h
          });
          break
        }
      }
      return c
    };
    shaka.media.DrmEngine.prototype.pollExpiration_ = function () {
      var a = this;
      this.activeSessions_.forEach(function (b, c) {
        var d = b.oldExpiration, e = c.expiration;
        isNaN(e) && (e = Infinity);
        e != d && (a.playerInterface_.onExpirationUpdated(c.sessionId, e), b.oldExpiration = e)
      })
    };
    shaka.media.DrmEngine.prototype.areAllSessionsLoaded_ = function () {
      var a = this.activeSessions_.values();
      return shaka.util.Iterables.every(a, function (a) {
        return a.loaded
      })
    };
    shaka.media.DrmEngine.replaceDrmInfo_ = function (a, b) {
      var c = [];
      b.forEach(function (a, b) {
        c.push({
          keySystem: b,
          licenseServerUri: a,
          distinctiveIdentifierRequired: !1,
          persistentStateRequired: !1,
          audioRobustness: "",
          videoRobustness: "",
          serverCertificate: null,
          initData: [],
          keyIds: new Set
        })
      });
      for (var d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) e = e.value, e.video && e.video.encrypted && (e.video.drmInfos = c), e.audio && e.audio.encrypted && (e.audio.drmInfos = c)
    };
    shaka.media.DrmEngine.createDrmInfoFor_ = function (a, b) {
      var c = [], d = [], e = [], f = new Set;
      shaka.media.DrmEngine.processDrmInfos_(b.drmInfos, c, d, e, f);
      1 < d.length && shaka.log.warning("Multiple unique server certificates found! Only the first will be used.");
      1 < c.length && shaka.log.warning("Multiple unique license server URIs found! Only the first will be used.");
      return {
        keySystem: a,
        licenseServerUri: c[0],
        distinctiveIdentifierRequired: "required" == b.distinctiveIdentifier,
        persistentStateRequired: "required" == b.persistentState,
        audioRobustness: (b.audioCapabilities ? b.audioCapabilities[0].robustness : "") || "",
        videoRobustness: (b.videoCapabilities ? b.videoCapabilities[0].robustness : "") || "",
        serverCertificate: d[0],
        initData: e,
        keyIds: f
      }
    };
    shaka.media.DrmEngine.processDrmInfos_ = function (a, b, c, d, e) {
      var f = {};
      a = $jscomp.makeIterator(a);
      for (var g = a.next(); !g.done; f = {$jscomp$loop$prop$drmInfo$472: f.$jscomp$loop$prop$drmInfo$472}, g = a.next()) {
        f.$jscomp$loop$prop$drmInfo$472 = g.value;
        b.includes(f.$jscomp$loop$prop$drmInfo$472.licenseServerUri) || b.push(f.$jscomp$loop$prop$drmInfo$472.licenseServerUri);
        f.$jscomp$loop$prop$drmInfo$472.serverCertificate && (c.some(function (a) {
            return function (b) {
              return shaka.util.BufferUtils.equal(b, a.$jscomp$loop$prop$drmInfo$472.serverCertificate)
            }
          }(f)) ||
          c.push(f.$jscomp$loop$prop$drmInfo$472.serverCertificate));
        if (f.$jscomp$loop$prop$drmInfo$472.initData) {
          g = {};
          for (var h = $jscomp.makeIterator(f.$jscomp$loop$prop$drmInfo$472.initData), k = h.next(); !k.done; g = {$jscomp$loop$prop$initDataOverride$474: g.$jscomp$loop$prop$initDataOverride$474}, k = h.next()) g.$jscomp$loop$prop$initDataOverride$474 = k.value, d.some(function (a) {
            return function (b) {
              var c = a.$jscomp$loop$prop$initDataOverride$474;
              b = b.keyId && b.keyId == c.keyId ? !0 : b.initDataType == c.initDataType && shaka.util.BufferUtils.equal(b.initData,
                c.initData);
              return b
            }
          }(g)) || d.push(g.$jscomp$loop$prop$initDataOverride$474)
        }
        if (f.$jscomp$loop$prop$drmInfo$472.keyIds) for (g = $jscomp.makeIterator(f.$jscomp$loop$prop$drmInfo$472.keyIds), h = g.next(); !h.done; h = g.next()) e.add(h.value)
      }
    };
    shaka.media.DrmEngine.fillInDrmInfoDefaults_ = function (a, b, c) {
      if (a.keySystem && ("org.w3.clearkey" != a.keySystem || !a.licenseServerUri)) {
        b.size && (b = b.get(a.keySystem) || "", a.licenseServerUri = b);
        a.keyIds || (a.keyIds = new Set);
        if (c = c.get(a.keySystem)) a.distinctiveIdentifierRequired || (a.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), a.persistentStateRequired || (a.persistentStateRequired = c.persistentStateRequired), a.videoRobustness || (a.videoRobustness = c.videoRobustness), a.audioRobustness || (a.audioRobustness =
          c.audioRobustness), a.serverCertificate || (a.serverCertificate = c.serverCertificate);
        window.cast && window.cast.__platform__ && "com.microsoft.playready" == a.keySystem && (a.keySystem = "com.chromecast.playready")
      }
    };
    shaka.media.DrmEngine.CLOSE_TIMEOUT_ = 1;
    shaka.media.DrmEngine.SESSION_LOAD_TIMEOUT_ = 5;
    shaka.media.DrmEngine.KEY_STATUS_BATCH_TIME = .5;
    shaka.media.DrmEngine.DUMMY_KEY_ID = new shaka.util.Lazy(function () {
      return shaka.util.BufferUtils.toArrayBuffer(new Uint8Array([0]))
    });
    shaka.media.IClosedCaptionParser = function () {
    };
    shaka.media.IClosedCaptionParser.prototype.init = function (a) {
    };
    shaka.media.IClosedCaptionParser.prototype.parseFrom = function (a, b) {
    };
    shaka.media.IClosedCaptionParser.prototype.reset = function () {
    };
    shaka.media.MuxJSClosedCaptionParser = function () {
      this.muxCaptionParser_ = new muxjs.mp4.CaptionParser;
      this.videoTrackIds_ = [];
      this.timescales_ = {}
    };
    shaka.media.MuxJSClosedCaptionParser.prototype.init = function (a) {
      var b = muxjs.mp4.probe;
      a = shaka.util.BufferUtils.toUint8(a);
      this.videoTrackIds_ = b.videoTrackIds(a);
      this.timescales_ = b.timescale(a);
      this.muxCaptionParser_.init()
    };
    shaka.media.MuxJSClosedCaptionParser.prototype.parseFrom = function (a, b) {
      var c = shaka.util.BufferUtils.toUint8(a);
      (c = this.muxCaptionParser_.parse(c, this.videoTrackIds_, this.timescales_)) && c.captions && b(c.captions);
      this.muxCaptionParser_.clearParsedCaptions()
    };
    shaka.media.MuxJSClosedCaptionParser.prototype.reset = function () {
      this.muxCaptionParser_.resetCaptionStream()
    };
    shaka.media.MuxJSClosedCaptionParser.isSupported = function () {
      return !!window.muxjs
    };
    shaka.media.NoopCaptionParser = function () {
    };
    shaka.media.NoopCaptionParser.prototype.init = function (a) {
    };
    shaka.media.NoopCaptionParser.prototype.parseFrom = function (a, b) {
    };
    shaka.media.NoopCaptionParser.prototype.reset = function () {
    };
    shaka.media.TimeRangesUtils = function () {
    };
    shaka.media.TimeRangesUtils.bufferStart = function (a) {
      return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : 1 == a.length && 0 > a.start(0) ? 0 : a.length ? a.start(0) : null
    };
    shaka.media.TimeRangesUtils.bufferEnd = function (a) {
      return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : a.length ? a.end(a.length - 1) : null
    };
    shaka.media.TimeRangesUtils.isBuffered = function (a, b, c) {
      c = void 0 === c ? 0 : c;
      return !a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0) || b > a.end(a.length - 1) ? !1 : b + c >= a.start(0)
    };
    shaka.media.TimeRangesUtils.bufferedAheadOf = function (a, b) {
      if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return 0;
      for (var c = 0, d = $jscomp.makeIterator(shaka.media.TimeRangesUtils.getBufferedInfo(a)), e = d.next(); !e.done; e = d.next()) {
        var f = e.value;
        e = f.start;
        f = f.end;
        f > b && (c += f - Math.max(e, b))
      }
      return c
    };
    shaka.media.TimeRangesUtils.getGapIndex = function (a, b) {
      var c = shaka.util.Platform, d = shaka.media.TimeRangesUtils;
      if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return null;
      var e = c.isEdge() || c.isIE() || c.isTizen() || c.isChromecast() ? .5 : .1;
      c = d.getBufferedInfo(a).findIndex(function (a, c, d) {
        return a.start > b && (0 == c || d[c - 1].end - b <= e)
      });
      return 0 <= c ? c : null
    };
    shaka.media.TimeRangesUtils.getBufferedInfo = function (a) {
      if (!a) return [];
      for (var b = [], c = $jscomp.makeIterator(shaka.util.Iterables.range(a.length)), d = c.next(); !d.done; d = c.next()) d = d.value, b.push({
        start: a.start(d),
        end: a.end(d)
      });
      return b
    };
    shaka.media.Transmuxer = function () {
      var a = this;
      this.muxTransmuxer_ = new muxjs.mp4.Transmuxer({keepOriginalTimestamps: !0});
      this.transmuxPromise_ = null;
      this.transmuxedData_ = [];
      this.captions_ = [];
      this.metadata_ = [];
      this.isTransmuxing_ = !1;
      this.muxTransmuxer_.on("data", function (b) {
        return a.onTransmuxed_(b)
      });
      this.muxTransmuxer_.on("done", function () {
        return a.onTransmuxDone_()
      })
    };
    shaka.media.Transmuxer.prototype.destroy = function () {
      this.muxTransmuxer_.dispose();
      this.muxTransmuxer_ = null;
      return Promise.resolve()
    };
    shaka.media.Transmuxer.isSupported = function (a, b) {
      var c = shaka.media.Transmuxer;
      if (!window.muxjs || !c.isTsContainer(a)) return !1;
      if (b) return MediaSource.isTypeSupported(c.convertTsCodecs(b, a));
      var d = shaka.util.ManifestParserUtils.ContentType, e = c.convertTsCodecs(d.AUDIO, a);
      c = c.convertTsCodecs(d.VIDEO, a);
      return MediaSource.isTypeSupported(e) || MediaSource.isTypeSupported(c)
    };
    shaka.media.Transmuxer.isTsContainer = function (a) {
      return "mp2t" == a.toLowerCase().split(";")[0].split("/")[1]
    };
    shaka.media.Transmuxer.convertTsCodecs = function (a, b) {
      var c = shaka.util.ManifestParserUtils.ContentType, d = b.replace(/mp2t/i, "mp4");
      a == c.AUDIO && (d = d.replace("video", "audio"));
      if (c = /avc1\.(66|77|100)\.(\d+)/.exec(d)) {
        var e = "avc1.", f = c[1];
        "66" == f ? e += "4200" : "77" == f ? e += "4d00" : (goog.asserts.assert("100" == f, "Legacy avc1 parsing code out of sync with regex!"), e += "6400");
        f = Number(c[2]);
        goog.asserts.assert(256 > f, "Invalid legacy avc1 level number!");
        e += (f >> 4).toString(16);
        e += (f & 15).toString(16);
        d = d.replace(c[0],
          e)
      }
      return d
    };
    shaka.media.Transmuxer.prototype.transmux = function (a) {
      goog.asserts.assert(!this.isTransmuxing_, "No transmuxing should be in progress.");
      this.isTransmuxing_ = !0;
      this.transmuxPromise_ = new shaka.util.PublicPromise;
      this.transmuxedData_ = [];
      this.captions_ = [];
      this.metadata_ = [];
      a = shaka.util.BufferUtils.toUint8(a);
      this.muxTransmuxer_.push(a);
      this.muxTransmuxer_.flush();
      this.isTransmuxing_ && this.transmuxPromise_.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.TRANSMUXING_FAILED));
      return this.transmuxPromise_
    };
    shaka.media.Transmuxer.prototype.onTransmuxed_ = function (a) {
      this.captions_ = a.captions;
      this.metadata_ = a.metadata;
      this.transmuxedData_.push(shaka.util.Uint8ArrayUtils.concat(a.initSegment, a.data))
    };
    shaka.media.Transmuxer.prototype.onTransmuxDone_ = function () {
      var a = {
        data: shaka.util.Uint8ArrayUtils.concat.apply(shaka.util.Uint8ArrayUtils, $jscomp.arrayFromIterable(this.transmuxedData_)),
        captions: this.captions_,
        metadata: this.metadata_
      };
      this.transmuxPromise_.resolve(a);
      this.isTransmuxing_ = !1
    };
    shaka.text = {};
    shaka.text.Cue = function (a, b, c) {
      var d = shaka.text.Cue;
      this.startTime = a;
      this.direction = d.direction.HORIZONTAL_LEFT_TO_RIGHT;
      this.endTime = b;
      this.payload = c;
      this.region = new shaka.text.CueRegion;
      this.position = null;
      this.positionAlign = d.positionAlign.AUTO;
      this.size = 0;
      this.textAlign = d.textAlign.CENTER;
      this.writingMode = d.writingMode.HORIZONTAL_TOP_TO_BOTTOM;
      this.lineInterpretation = d.lineInterpretation.LINE_NUMBER;
      this.line = null;
      this.lineHeight = "";
      this.lineAlign = d.lineAlign.START;
      this.displayAlign = d.displayAlign.AFTER;
      this.fontSize = this.border = this.backgroundImage = this.backgroundColor = this.color = "";
      this.fontWeight = d.fontWeight.NORMAL;
      this.fontStyle = d.fontStyle.NORMAL;
      this.linePadding = this.letterSpacing = this.fontFamily = "";
      this.opacity = 1;
      this.textDecoration = [];
      this.wrapLine = !0;
      this.id = "";
      this.nestedCues = [];
      this.spacer = !1;
      this.cellResolution = {columns: 32, rows: 15}
    };
    shaka.text.Cue.prototype.clone = function () {
      var a = new shaka.text.Cue(0, 0, ""), b;
      for (b in this) a[b] = this[b], a[b] && a[b].constructor == Array && (a[b] = a[b].slice());
      return a
    };
    goog.exportSymbol("shaka.text.Cue", shaka.text.Cue);
    shaka.text.Cue.positionAlign = {LEFT: "line-left", RIGHT: "line-right", CENTER: "center", AUTO: "auto"};
    goog.exportProperty(shaka.text.Cue, "positionAlign", shaka.text.Cue.positionAlign);
    shaka.text.Cue.textAlign = {LEFT: "left", RIGHT: "right", CENTER: "center", START: "start", END: "end"};
    goog.exportProperty(shaka.text.Cue, "textAlign", shaka.text.Cue.textAlign);
    shaka.text.Cue.displayAlign = {BEFORE: "before", CENTER: "center", AFTER: "after"};
    goog.exportProperty(shaka.text.Cue, "displayAlign", shaka.text.Cue.displayAlign);
    shaka.text.Cue.direction = {HORIZONTAL_LEFT_TO_RIGHT: "ltr", HORIZONTAL_RIGHT_TO_LEFT: "rtl"};
    goog.exportProperty(shaka.text.Cue, "direction", shaka.text.Cue.direction);
    shaka.text.Cue.writingMode = {
      HORIZONTAL_TOP_TO_BOTTOM: "horizontal-tb",
      VERTICAL_LEFT_TO_RIGHT: "vertical-lr",
      VERTICAL_RIGHT_TO_LEFT: "vertical-rl"
    };
    goog.exportProperty(shaka.text.Cue, "writingMode", shaka.text.Cue.writingMode);
    shaka.text.Cue.lineInterpretation = {LINE_NUMBER: 0, PERCENTAGE: 1};
    goog.exportProperty(shaka.text.Cue, "lineInterpretation", shaka.text.Cue.lineInterpretation);
    shaka.text.Cue.lineAlign = {CENTER: "center", START: "start", END: "end"};
    goog.exportProperty(shaka.text.Cue, "lineAlign", shaka.text.Cue.lineAlign);
    shaka.text.Cue.fontWeight = {NORMAL: 400, BOLD: 700};
    goog.exportProperty(shaka.text.Cue, "fontWeight", shaka.text.Cue.fontWeight);
    shaka.text.Cue.fontStyle = {NORMAL: "normal", ITALIC: "italic", OBLIQUE: "oblique"};
    goog.exportProperty(shaka.text.Cue, "fontStyle", shaka.text.Cue.fontStyle);
    shaka.text.Cue.textDecoration = {UNDERLINE: "underline", LINE_THROUGH: "lineThrough", OVERLINE: "overline"};
    goog.exportProperty(shaka.text.Cue, "textDecoration", shaka.text.Cue.textDecoration);
    shaka.text.CueRegion = function () {
      var a = shaka.text.CueRegion;
      this.id = "";
      this.regionAnchorY = this.regionAnchorX = this.viewportAnchorY = this.viewportAnchorX = 0;
      this.height = this.width = 100;
      this.viewportAnchorUnits = this.widthUnits = this.heightUnits = a.units.PERCENTAGE;
      this.scroll = a.scrollMode.NONE
    };
    goog.exportSymbol("shaka.text.CueRegion", shaka.text.CueRegion);
    shaka.text.CueRegion.units = {PX: 0, PERCENTAGE: 1, LINES: 2};
    goog.exportProperty(shaka.text.CueRegion, "units", shaka.text.CueRegion.units);
    shaka.text.CueRegion.scrollMode = {NONE: "", UP: "up"};
    goog.exportProperty(shaka.text.CueRegion, "scrollMode", shaka.text.CueRegion.scrollMode);
    shaka.text.TextEngine = function (a) {
      this.parser_ = null;
      this.displayer_ = a;
      this.appendWindowStart_ = this.timestampOffset_ = 0;
      this.appendWindowEnd_ = Infinity;
      this.bufferEnd_ = this.bufferStart_ = null;
      this.selectedClosedCaptionId_ = "";
      this.closedCaptionsMap_ = new Map
    };
    shaka.text.TextEngine.registerParser = function (a, b) {
      shaka.text.TextEngine.parserMap_[a] = b
    };
    shaka.text.TextEngine.unregisterParser = function (a) {
      delete shaka.text.TextEngine.parserMap_[a]
    };
    shaka.text.TextEngine.isTypeSupported = function (a) {
      return shaka.text.TextEngine.parserMap_[a] || window.muxjs && a == shaka.util.MimeUtils.CLOSED_CAPTION_MIMETYPE ? !0 : !1
    };
    shaka.text.TextEngine.prototype.destroy = function () {
      this.displayer_ = this.parser_ = null;
      this.closedCaptionsMap_.clear();
      return Promise.resolve()
    };
    shaka.text.TextEngine.prototype.setDisplayer = function (a) {
      this.displayer_ = a
    };
    shaka.text.TextEngine.prototype.initParser = function (a) {
      a != shaka.util.MimeUtils.CLOSED_CAPTION_MIMETYPE && (a = shaka.text.TextEngine.parserMap_[a], goog.asserts.assert(a, "Text type negotiation should have happened already"), this.parser_ = shaka.util.Functional.callFactory(a))
    };
    shaka.text.TextEngine.prototype.appendBuffer = function (a, b, c) {
      var d = this, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) return goog.asserts.assert(d.parser_, "The parser should already be initialized"), h.yield(Promise.resolve(), 2);
        if (!d.parser_ || !d.displayer_) return h["return"]();
        if (null == b || null == c) return d.parser_.parseInit(shaka.util.BufferUtils.toUint8(a)), h["return"]();
        e = {periodStart: d.timestampOffset_, segmentStart: b, segmentEnd: c};
        f = d.parser_.parseMedia(shaka.util.BufferUtils.toUint8(a),
          e);
        g = f.filter(function (a) {
          return a.startTime >= d.appendWindowStart_ && a.startTime < d.appendWindowEnd_
        });
        d.displayer_.append(g);
        null == d.bufferStart_ ? d.bufferStart_ = Math.max(b, d.appendWindowStart_) : (goog.asserts.assert(null != d.bufferEnd_, "There should already be a buffered range end."), goog.asserts.assert(1 >= b - d.bufferEnd_, "There should not be a gap in text references >1s"));
        d.bufferEnd_ = Math.min(c, d.appendWindowEnd_);
        h.jumpToEnd()
      })
    };
    shaka.text.TextEngine.prototype.remove = function (a, b) {
      var c = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) return d.yield(Promise.resolve(), 2);
        c.displayer_ && c.displayer_.remove(a, b) && (null == c.bufferStart_ ? goog.asserts.assert(null == c.bufferEnd_, "end must be null if startTime is null") : (goog.asserts.assert(null != c.bufferEnd_, "end must be non-null if startTime is non-null"), b <= c.bufferStart_ || a >= c.bufferEnd_ || (a <= c.bufferStart_ && b >= c.bufferEnd_ ? c.bufferStart_ =
          c.bufferEnd_ = null : a <= c.bufferStart_ && b < c.bufferEnd_ ? c.bufferStart_ = b : a > c.bufferStart_ && b >= c.bufferEnd_ ? c.bufferEnd_ = a : goog.asserts.assert(!1, "removal from the middle is not supported by TextEngine"))));
        d.jumpToEnd()
      })
    };
    shaka.text.TextEngine.prototype.setTimestampOffset = function (a) {
      this.timestampOffset_ = a
    };
    shaka.text.TextEngine.prototype.setAppendWindow = function (a, b) {
      this.appendWindowStart_ = a;
      this.appendWindowEnd_ = b
    };
    shaka.text.TextEngine.prototype.bufferStart = function () {
      return this.bufferStart_
    };
    shaka.text.TextEngine.prototype.bufferEnd = function () {
      return this.bufferEnd_
    };
    shaka.text.TextEngine.prototype.isBuffered = function (a) {
      return null == this.bufferStart_ || null == this.bufferEnd_ ? !1 : a >= this.bufferStart_ && a < this.bufferEnd_
    };
    shaka.text.TextEngine.prototype.bufferedAheadOf = function (a) {
      if (null == this.bufferEnd_ || this.bufferEnd_ < a) return 0;
      goog.asserts.assert(null != this.bufferStart_, "start should not be null if end is not null");
      return this.bufferEnd_ - Math.max(a, this.bufferStart_)
    };
    shaka.text.TextEngine.prototype.setSelectedClosedCaptionId = function (a, b) {
      this.selectedClosedCaptionId_ = a;
      var c = this.closedCaptionsMap_.get(a);
      if (c) for (var d = $jscomp.makeIterator(c.keys()), e = d.next(); !e.done; e = d.next()) (e = c.get(e.value).filter(function (a) {
        return a.endTime <= b
      })) && this.displayer_.append(e)
    };
    shaka.text.TextEngine.prototype.storeAndAppendClosedCaptions = function (a, b, c, d) {
      var e = b + " " + c, f = new Map;
      a = $jscomp.makeIterator(a);
      for (var g = a.next(); !g.done; g = a.next()) {
        var h = g.value;
        g = h.stream;
        f.has(g) || f.set(g, new Map);
        f.get(g).has(e) || f.get(g).set(e, []);
        h.startTime += d;
        h.endTime += d;
        h.startTime >= this.appendWindowStart_ && h.startTime < this.appendWindowEnd_ && (h = new shaka.text.Cue(h.startTime, h.endTime, h.text), f.get(g).get(e).push(h), g == this.selectedClosedCaptionId_ && this.displayer_.append([h]))
      }
      d = $jscomp.makeIterator(f.keys());
      for (e = d.next(); !e.done; e = d.next()) for (e = e.value, this.closedCaptionsMap_.has(e) || this.closedCaptionsMap_.set(e, new Map), a = $jscomp.makeIterator(f.get(e).keys()), g = a.next(); !g.done; g = a.next()) g = g.value, h = f.get(e).get(g), this.closedCaptionsMap_.get(e).set(g, h);
      this.bufferStart_ = null == this.bufferStart_ ? Math.max(b, this.appendWindowStart_) : Math.min(this.bufferStart_, Math.max(b, this.appendWindowStart_));
      this.bufferEnd_ = Math.max(this.bufferEnd_, Math.min(c, this.appendWindowEnd_))
    };
    shaka.text.TextEngine.prototype.getNumberOfClosedCaptionChannels = function () {
      return this.closedCaptionsMap_.size
    };
    shaka.text.TextEngine.prototype.getNumberOfClosedCaptionsInChannel = function (a) {
      return (a = this.closedCaptionsMap_.get(a)) ? a.size : 0
    };
    goog.exportSymbol("shaka.text.TextEngine", shaka.text.TextEngine);
    goog.exportProperty(shaka.text.TextEngine.prototype, "destroy", shaka.text.TextEngine.prototype.destroy);
    goog.exportProperty(shaka.text.TextEngine, "unregisterParser", shaka.text.TextEngine.unregisterParser);
    goog.exportProperty(shaka.text.TextEngine, "registerParser", shaka.text.TextEngine.registerParser);
    shaka.text.TextEngine.parserMap_ = {};
    shaka.media.MediaSourceEngine = function (a, b, c, d) {
      var e = this;
      this.video_ = a;
      this.textDisplayer_ = c;
      this.sourceBuffers_ = {};
      this.textEngine_ = null;
      a = function (a, b, c) {
      };
      this.onMetadata_ = d || a;
      this.queues_ = {};
      this.eventManager_ = new shaka.util.EventManager;
      this.transmuxers_ = {};
      this.captionParser_ = b;
      this.mediaSourceOpen_ = new shaka.util.PublicPromise;
      this.mediaSource_ = this.createMediaSource(this.mediaSourceOpen_);
      this.destroyer_ = new shaka.util.Destroyer(function () {
        return e.doDestroy_()
      })
    };
    shaka.media.MediaSourceEngine.prototype.createMediaSource = function (a) {
      var b = new MediaSource;
      this.eventManager_.listenOnce(b, "sourceopen", a.resolve);
      this.video_.src = shaka.media.MediaSourceEngine.createObjectURL(b);
      return b
    };
    shaka.media.MediaSourceEngine.isStreamSupported = function (a) {
      var b = shaka.util.MimeUtils.getFullType(a.mimeType, a.codecs), c = shaka.util.MimeUtils.getExtendedType(a);
      return shaka.text.TextEngine.isTypeSupported(b) || MediaSource.isTypeSupported(c) || shaka.media.Transmuxer.isSupported(b, a.type)
    };
    shaka.media.MediaSourceEngine.probeSupport = function () {
      for (var a = {}, b = $jscomp.makeIterator('video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",")), c =
        b.next(); !c.done; c = b.next()) {
        c = c.value;
        shaka.util.Platform.supportsMediaSource() ? shaka.text.TextEngine.isTypeSupported(c) ? a[c] = !0 : a[c] = MediaSource.isTypeSupported(c) || shaka.media.Transmuxer.isSupported(c) : a[c] = shaka.util.Platform.supportsMediaType(c);
        var d = c.split(";")[0];
        a[d] = a[d] || a[c]
      }
      return a
    };
    shaka.media.MediaSourceEngine.prototype.destroy = function () {
      return this.destroyer_.destroy()
    };
    shaka.media.MediaSourceEngine.prototype.doDestroy_ = function () {
      var a = this, b, c, d, e, f, g, h, k, l, m;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (n) {
        if (1 == n.nextAddress) {
          b = shaka.util.Functional;
          c = [];
          for (d in a.queues_) for (e = a.queues_[d], f = e[0], a.queues_[d] = e.slice(0, 1), f && c.push(f.p["catch"](b.noop)), g = $jscomp.makeIterator(e.slice(1)), h = g.next(); !h.done; h = g.next()) k = h.value, k.p.reject(shaka.util.Destroyer.destroyedError());
          a.textEngine_ && c.push(a.textEngine_.destroy());
          a.textDisplayer_ && c.push(a.textDisplayer_.destroy());
          for (l in a.transmuxers_) c.push(a.transmuxers_[l].destroy());
          return n.yield(Promise.all(c), 2)
        }
        a.eventManager_ && (a.eventManager_.release(), a.eventManager_ = null);
        a.video_ && (a.video_.removeAttribute("src"), a.video_.load(), a.video_ = null);
        a.mediaSource_ = null;
        a.textEngine_ = null;
        a.textDisplayer_ = null;
        a.sourceBuffers_ = {};
        a.transmuxers_ = {};
        a.captionParser_ = null;
        if (goog.DEBUG) for (m in a.queues_) goog.asserts.assert(0 == a.queues_[m].length, m + " queue should be empty after destroy!");
        a.queues_ = {};
        n.jumpToEnd()
      })
    };
    shaka.media.MediaSourceEngine.prototype.open = function () {
      return this.mediaSourceOpen_
    };
    shaka.media.MediaSourceEngine.prototype.init = function (a, b) {
      var c = this, d, e, f, g, h, k, l;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (m) {
        if (1 == m.nextAddress) return d = shaka.util.ManifestParserUtils.ContentType, m.yield(c.mediaSourceOpen_, 2);
        e = {};
        f = $jscomp.makeIterator(a.keys());
        for (g = f.next(); !g.done; e = {$jscomp$loop$prop$contentType$477: e.$jscomp$loop$prop$contentType$477}, g = f.next()) e.$jscomp$loop$prop$contentType$477 = g.value, h = a.get(e.$jscomp$loop$prop$contentType$477), goog.asserts.assert(shaka.media.MediaSourceEngine.isStreamSupported(h),
          "Type negotiation should happen before MediaSourceEngine.init!"), k = shaka.util.MimeUtils.getFullType(h.mimeType, h.codecs), e.$jscomp$loop$prop$contentType$477 == d.TEXT ? c.reinitText(k) : (!b && MediaSource.isTypeSupported(k) || !shaka.media.Transmuxer.isSupported(k, e.$jscomp$loop$prop$contentType$477) || (c.transmuxers_[e.$jscomp$loop$prop$contentType$477] = new shaka.media.Transmuxer, k = shaka.media.Transmuxer.convertTsCodecs(e.$jscomp$loop$prop$contentType$477, k)), l = c.mediaSource_.addSourceBuffer(k), c.eventManager_.listen(l,
          "error", function (a) {
            return function () {
              return c.onError_(a.$jscomp$loop$prop$contentType$477)
            }
          }(e)), c.eventManager_.listen(l, "updateend", function (a) {
          return function () {
            return c.onUpdateEnd_(a.$jscomp$loop$prop$contentType$477)
          }
        }(e)), c.sourceBuffers_[e.$jscomp$loop$prop$contentType$477] = l, c.queues_[e.$jscomp$loop$prop$contentType$477] = []);
        m.jumpToEnd()
      })
    };
    shaka.media.MediaSourceEngine.prototype.reinitText = function (a) {
      this.textEngine_ || (this.textEngine_ = new shaka.text.TextEngine(this.textDisplayer_));
      this.textEngine_.initParser(a)
    };
    shaka.media.MediaSourceEngine.prototype.ended = function () {
      return this.mediaSource_ ? "ended" == this.mediaSource_.readyState : !0
    };
    shaka.media.MediaSourceEngine.prototype.bufferStart = function (a) {
      return a == shaka.util.ManifestParserUtils.ContentType.TEXT ? this.textEngine_.bufferStart() : shaka.media.TimeRangesUtils.bufferStart(this.getBuffered_(a))
    };
    shaka.media.MediaSourceEngine.prototype.bufferEnd = function (a) {
      return a == shaka.util.ManifestParserUtils.ContentType.TEXT ? this.textEngine_.bufferEnd() : shaka.media.TimeRangesUtils.bufferEnd(this.getBuffered_(a))
    };
    shaka.media.MediaSourceEngine.prototype.isBuffered = function (a, b, c) {
      if (a == shaka.util.ManifestParserUtils.ContentType.TEXT) return this.textEngine_.isBuffered(b);
      a = this.getBuffered_(a);
      return shaka.media.TimeRangesUtils.isBuffered(a, b, c)
    };
    shaka.media.MediaSourceEngine.prototype.bufferedAheadOf = function (a, b) {
      if (a == shaka.util.ManifestParserUtils.ContentType.TEXT) return this.textEngine_.bufferedAheadOf(b);
      var c = this.getBuffered_(a);
      return shaka.media.TimeRangesUtils.bufferedAheadOf(c, b)
    };
    shaka.media.MediaSourceEngine.prototype.getBufferedInfo = function () {
      var a = shaka.util.ManifestParserUtils.ContentType, b = shaka.media.TimeRangesUtils;
      a = {
        total: b.getBufferedInfo(this.video_.buffered),
        audio: b.getBufferedInfo(this.getBuffered_(a.AUDIO)),
        video: b.getBufferedInfo(this.getBuffered_(a.VIDEO)),
        text: []
      };
      if (this.textEngine_) {
        b = this.textEngine_.bufferStart();
        var c = this.textEngine_.bufferEnd();
        null != b && null != c && a.text.push({start: b, end: c})
      }
      return a
    };
    shaka.media.MediaSourceEngine.prototype.getBuffered_ = function (a) {
      try {
        return this.sourceBuffers_[a].buffered
      } catch (b) {
        return a in this.sourceBuffers_ && shaka.log.error("failed to get buffered range for " + a, b), null
      }
    };
    shaka.media.MediaSourceEngine.prototype.appendBuffer = function (a, b, c, d, e) {
      var f = this, g, h, k, l;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (m) {
        if (1 == m.nextAddress) {
          g = shaka.util.ManifestParserUtils.ContentType;
          if (a == g.TEXT) return m.yield(f.textEngine_.appendBuffer(b, c, d), 0);
          if (f.transmuxers_[a]) return m.yield(f.transmuxers_[a].transmux(b), 10);
          e && window.muxjs && (f.textEngine_ || f.reinitText("text/vtt"), null == c && null == d ? f.captionParser_.init(b) : f.captionParser_.parseFrom(b, function (a) {
            a.length &&
            f.textEngine_.storeAndAppendClosedCaptions(a, c, d, f.sourceBuffers_[g.VIDEO].timestampOffset)
          }));
          return m.yield(f.enqueueOperation_(a, function () {
            return f.append_(a, b)
          }), 0)
        }
        h = m.yieldResult;
        f.textEngine_ || f.reinitText("text/vtt");
        h.metadata && (k = f.sourceBuffers_[a].timestampOffset, f.onMetadata_(h.metadata, k, d));
        h.captions && h.captions.length && (l = f.sourceBuffers_[g.VIDEO].timestampOffset, f.textEngine_.storeAndAppendClosedCaptions(h.captions, c, d, l));
        return m.yield(f.enqueueOperation_(a, function () {
          return f.append_(a,
            h.data)
        }), 0)
      })
    };
    shaka.media.MediaSourceEngine.prototype.setSelectedClosedCaptionId = function (a) {
      var b = this.bufferEnd(shaka.util.ManifestParserUtils.ContentType.VIDEO) || 0;
      this.textEngine_.setSelectedClosedCaptionId(a, b)
    };
    shaka.media.MediaSourceEngine.prototype.remove = function (a, b, c) {
      var d = this, e;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        goog.asserts.assert(c < Number.MAX_VALUE, "remove() with MAX_VALUE or Infinity is not IE-compatible!");
        e = shaka.util.ManifestParserUtils.ContentType;
        return a == e.TEXT ? f.yield(d.textEngine_.remove(b, c), 0) : f.yield(d.enqueueOperation_(a, function () {
          return d.remove_(a, b, c)
        }), 0)
      })
    };
    shaka.media.MediaSourceEngine.prototype.clear = function (a) {
      var b = this, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        c = shaka.util.ManifestParserUtils.ContentType;
        return a == c.TEXT ? b.textEngine_ ? d.yield(b.textEngine_.remove(0, Infinity), 0) : d["return"]() : d.yield(b.enqueueOperation_(a, function () {
          return b.remove_(a, 0, b.mediaSource_.duration)
        }), 0)
      })
    };
    shaka.media.MediaSourceEngine.prototype.resetCaptionParser = function () {
      this.captionParser_.reset()
    };
    shaka.media.MediaSourceEngine.prototype.flush = function (a) {
      var b = this, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        c = shaka.util.ManifestParserUtils.ContentType;
        return a == c.TEXT ? d["return"]() : d.yield(b.enqueueOperation_(a, function () {
          return b.flush_(a)
        }), 0)
      })
    };
    shaka.media.MediaSourceEngine.prototype.setStreamProperties = function (a, b, c, d) {
      var e = this, f;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
        f = shaka.util.ManifestParserUtils.ContentType;
        return a == f.TEXT ? (e.textEngine_.setTimestampOffset(b), e.textEngine_.setAppendWindow(c, d), g["return"]()) : g.yield(Promise.all([e.enqueueOperation_(a, function () {
          return e.abort_(a)
        }), e.enqueueOperation_(a, function () {
          return e.setTimestampOffset_(a, b)
        }), e.enqueueOperation_(a, function () {
          return e.setAppendWindow_(a,
            c, d)
        })]), 0)
      })
    };
    shaka.media.MediaSourceEngine.prototype.endOfStream = function (a) {
      console.debug('debug log: endOfStream', a);
      var b = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        return c.yield(b.enqueueBlockingOperation_(function () {
          console.debug('debug log: b.ended()', b.ended());
          b.ended() || (a ? b.mediaSource_.endOfStream(a) : b.mediaSource_.endOfStream())
        }), 0)
      })
    };
    shaka.media.MediaSourceEngine.prototype.setDuration = function (a) {
      var b = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        goog.asserts.assert(isNaN(b.mediaSource_.duration) || b.mediaSource_.duration <= a, "duration cannot decrease: " + b.mediaSource_.duration + " -> " + a);
        return c.yield(b.enqueueBlockingOperation_(function () {
          b.mediaSource_.duration = a
        }), 0)
      })
    };
    shaka.media.MediaSourceEngine.prototype.getDuration = function () {
      console.debug('debug log: ', this.mediaSource_.duration);
      return this.mediaSource_.duration
    };
    shaka.media.MediaSourceEngine.prototype.append_ = function (a, b) {
      this.sourceBuffers_[a].appendBuffer(b)
    };
    shaka.media.MediaSourceEngine.prototype.remove_ = function (a, b, c) {
      if (c <= b) this.onUpdateEnd_(a); else this.sourceBuffers_[a].remove(b, c)
    };
    shaka.media.MediaSourceEngine.prototype.abort_ = function (a) {
      var b = this.sourceBuffers_[a].appendWindowStart, c = this.sourceBuffers_[a].appendWindowEnd;
      this.sourceBuffers_[a].abort();
      this.sourceBuffers_[a].appendWindowStart = b;
      this.sourceBuffers_[a].appendWindowEnd = c;
      this.onUpdateEnd_(a)
    };
    shaka.media.MediaSourceEngine.prototype.flush_ = function (a) {
      goog.asserts.assert(0 == this.video_.buffered.length, "MediaSourceEngine.flush_ should only be used after clearing all data!");
      this.video_.currentTime -= .001;
      this.onUpdateEnd_(a)
    };
    shaka.media.MediaSourceEngine.prototype.setTimestampOffset_ = function (a, b) {
      0 > b && (b += .001);
      this.sourceBuffers_[a].timestampOffset = b;
      this.onUpdateEnd_(a)
    };
    shaka.media.MediaSourceEngine.prototype.setAppendWindow_ = function (a, b, c) {
      this.sourceBuffers_[a].appendWindowStart = 0;
      this.sourceBuffers_[a].appendWindowEnd = c;
      this.sourceBuffers_[a].appendWindowStart = b;
      this.onUpdateEnd_(a)
    };
    shaka.media.MediaSourceEngine.prototype.onError_ = function (a) {
      var b = this.queues_[a][0];
      goog.asserts.assert(b, "Spurious error event!");
      goog.asserts.assert(!this.sourceBuffers_[a].updating, "SourceBuffer should not be updating on error!");
      b.p.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.MEDIA_SOURCE_OPERATION_FAILED, this.video_.error ? this.video_.error.code : 0))
    };
    shaka.media.MediaSourceEngine.prototype.onUpdateEnd_ = function (a) {
      var b = this.queues_[a][0];
      goog.asserts.assert(b, "Spurious updateend event!");
      b && (goog.asserts.assert(!this.sourceBuffers_[a].updating, "SourceBuffer should not be updating on updateend!"), b.p.resolve(), this.popFromQueue_(a))
    };
    shaka.media.MediaSourceEngine.prototype.enqueueOperation_ = function (a, b) {
      this.destroyer_.ensureNotDestroyed();
      var c = {start: b, p: new shaka.util.PublicPromise};
      this.queues_[a].push(c);
      1 == this.queues_[a].length && this.startOperation_(a);
      return c.p
    };
    shaka.media.MediaSourceEngine.prototype.enqueueBlockingOperation_ = function (a) {
      var b = this, c, d, e, f, g, h, k, l;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (m) {
        switch (m.nextAddress) {
          case 1:
            b.destroyer_.ensureNotDestroyed();
            c = [];
            d = {};
            for (e in b.sourceBuffers_) d.$jscomp$loop$prop$ready$479 = new shaka.util.PublicPromise, f = {
              start: function (a) {
                return function () {
                  return a.$jscomp$loop$prop$ready$479.resolve()
                }
              }(d), p: d.$jscomp$loop$prop$ready$479
            }, b.queues_[e].push(f), c.push(d.$jscomp$loop$prop$ready$479),
            1 == b.queues_[e].length && f.start(), d = {$jscomp$loop$prop$ready$479: d.$jscomp$loop$prop$ready$479};
            m.setCatchFinallyBlocks(2);
            return m.yield(Promise.all(c), 4);
          case 4:
            m.leaveTryBlock(3);
            break;
          case 2:
            g = m.enterCatchBlock();
            goog.asserts.assert(b.destroyer_.destroyed(), "Should be destroyed by now");
            if (goog.DEBUG) for (h in b.sourceBuffers_) b.queues_[h].length && (goog.asserts.assert(1 == b.queues_[h].length, "Should be at most one item in queue!"), goog.asserts.assert(c.includes(b.queues_[h][0].p), "The item in queue should be one of our waiters!"),
              b.queues_[h].shift());
            throw g;
          case 3:
            if (goog.DEBUG) for (k in b.sourceBuffers_) goog.asserts.assert(0 == b.sourceBuffers_[k].updating, "SourceBuffers should not be updating after a blocking op!");
            try {
              a()
            } catch (n) {
              throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.MEDIA_SOURCE_OPERATION_THREW, n);
            } finally {
              for (l in b.sourceBuffers_) b.popFromQueue_(l)
            }
            m.jumpToEnd()
        }
      })
    };
    shaka.media.MediaSourceEngine.prototype.popFromQueue_ = function (a) {
      this.queues_[a].shift();
      this.startOperation_(a)
    };
    shaka.media.MediaSourceEngine.prototype.startOperation_ = function (a) {
      var b = this.queues_[a][0];
      if (b) try {
        b.start()
      } catch (c) {
        "QuotaExceededError" == c.name ? b.p.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.QUOTA_EXCEEDED_ERROR, a)) : b.p.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.MEDIA_SOURCE_OPERATION_THREW, c)), this.popFromQueue_(a)
      }
    };
    shaka.media.MediaSourceEngine.prototype.getTextDisplayer = function () {
      goog.asserts.assert(this.textDisplayer_, "TextDisplayer should only be null when this is destroyed");
      return this.textDisplayer_
    };
    shaka.media.MediaSourceEngine.prototype.setTextDisplayer = function (a) {
      var b = this.textDisplayer_;
      this.textDisplayer_ = a;
      b && (a.setTextVisibility(b.isTextVisible()), b.destroy());
      this.textEngine_ && this.textEngine_.setDisplayer(a)
    };
    shaka.media.MediaSourceEngine.createObjectURL = window.URL.createObjectURL;
    shaka.util.LanguageUtils = function () {
    };
    shaka.util.LanguageUtils.areLocaleCompatible = function (a, b) {
      var c = shaka.util.LanguageUtils;
      a = c.normalize(a);
      b = c.normalize(b);
      return a == b
    };
    shaka.util.LanguageUtils.areLanguageCompatible = function (a, b) {
      var c = shaka.util.LanguageUtils;
      a = c.normalize(a);
      b = c.normalize(b);
      var d = c.disassembleLocale_(a);
      c = c.disassembleLocale_(b);
      return d[0] == c[0]
    };
    shaka.util.LanguageUtils.isParentOf = function (a, b) {
      var c = shaka.util.LanguageUtils;
      a = c.normalize(a);
      b = c.normalize(b);
      var d = c.disassembleLocale_(a);
      c = c.disassembleLocale_(b);
      return d[0] == c[0] && 1 == d.length && 2 == c.length
    };
    shaka.util.LanguageUtils.isSiblingOf = function (a, b) {
      var c = shaka.util.LanguageUtils;
      a = c.normalize(a);
      b = c.normalize(b);
      var d = c.disassembleLocale_(a);
      c = c.disassembleLocale_(b);
      return 2 == d.length && 2 == c.length && d[0] == c[0]
    };
    shaka.util.LanguageUtils.normalize = function (a) {
      var b = shaka.util.LanguageUtils, c = a.split("-");
      a = c[0] || "";
      c = c[1] || "";
      a = a.toLowerCase();
      a = b.isoMap_.get(a) || a;
      return (c = c.toUpperCase()) ? a + "-" + c : a
    };
    shaka.util.LanguageUtils.areSiblings = function (a, b) {
      var c = shaka.util.LanguageUtils, d = c.getBase(a);
      c = c.getBase(b);
      return a != d && b != c && d == c
    };
    shaka.util.LanguageUtils.relatedness = function (a, b) {
      var c = shaka.util.LanguageUtils;
      a = c.normalize(a);
      b = c.normalize(b);
      return b == a ? 4 : c.isParentOf(b, a) ? 3 : c.isSiblingOf(b, a) ? 2 : c.isParentOf(a, b) ? 1 : 0
    };
    shaka.util.LanguageUtils.getBase = function (a) {
      var b = shaka.util.LanguageUtils, c = a.indexOf("-");
      a = 0 <= c ? a.substring(0, c) : a;
      a = a.toLowerCase();
      return a = b.isoMap_.get(a) || a
    };
    shaka.util.LanguageUtils.getLocaleForText = function (a) {
      var b = shaka.util.LanguageUtils;
      goog.asserts.assert(a.type == shaka.util.ManifestParserUtils.ContentType.TEXT, "Can only get language from text streams");
      return b.normalize(a.language || "und")
    };
    shaka.util.LanguageUtils.getLocaleForVariant = function (a) {
      var b = shaka.util.LanguageUtils;
      return a.language ? b.normalize(a.language) : a.audio && a.audio.language ? b.normalize(a.audio.language) : a.video && a.video.language ? b.normalize(a.video.language) : "und"
    };
    shaka.util.LanguageUtils.findClosestLocale = function (a, b) {
      for (var c = shaka.util.LanguageUtils, d = c.normalize(a), e = new Set, f = $jscomp.makeIterator(b), g = f.next(); !g.done; g = f.next()) e.add(c.normalize(g.value));
      f = $jscomp.makeIterator(e);
      for (g = f.next(); !g.done; g = f.next()) if (g = g.value, g == d) return g;
      f = $jscomp.makeIterator(e);
      for (g = f.next(); !g.done; g = f.next()) if (g = g.value, c.isParentOf(g, d)) return g;
      f = $jscomp.makeIterator(e);
      for (g = f.next(); !g.done; g = f.next()) if (g = g.value, c.isSiblingOf(g, d)) return g;
      e = $jscomp.makeIterator(e);
      for (g = e.next(); !g.done; g = e.next()) if (g = g.value, c.isParentOf(d, g)) return g;
      return null
    };
    shaka.util.LanguageUtils.disassembleLocale_ = function (a) {
      var b = a.split("-");
      goog.asserts.assert(2 >= b.length, ["Locales should not have more than 2 components. ", a, " has too many components."].join());
      return b
    };
    shaka.util.LanguageUtils.isoMap_ = new Map([["aar", "aa"], ["abk", "ab"], ["afr", "af"], ["aka", "ak"], ["alb", "sq"], ["amh", "am"], ["ara", "ar"], ["arg", "an"], ["arm", "hy"], ["asm", "as"], ["ava", "av"], ["ave", "ae"], ["aym", "ay"], ["aze", "az"], ["bak", "ba"], ["bam", "bm"], ["baq", "eu"], ["bel", "be"], ["ben", "bn"], ["bih", "bh"], ["bis", "bi"], ["bod", "bo"], ["bos", "bs"], ["bre", "br"], ["bul", "bg"], ["bur", "my"], ["cat", "ca"], ["ces", "cs"], ["cha", "ch"], ["che", "ce"], ["chi", "zh"], ["chu", "cu"], ["chv", "cv"], ["cor", "kw"], ["cos", "co"], ["cre",
      "cr"], ["cym", "cy"], ["cze", "cs"], ["dan", "da"], ["deu", "de"], ["div", "dv"], ["dut", "nl"], ["dzo", "dz"], ["ell", "el"], ["eng", "en"], ["epo", "eo"], ["est", "et"], ["eus", "eu"], ["ewe", "ee"], ["fao", "fo"], ["fas", "fa"], ["fij", "fj"], ["fin", "fi"], ["fra", "fr"], ["fre", "fr"], ["fry", "fy"], ["ful", "ff"], ["geo", "ka"], ["ger", "de"], ["gla", "gd"], ["gle", "ga"], ["glg", "gl"], ["glv", "gv"], ["gre", "el"], ["grn", "gn"], ["guj", "gu"], ["hat", "ht"], ["hau", "ha"], ["heb", "he"], ["her", "hz"], ["hin", "hi"], ["hmo", "ho"], ["hrv", "hr"], ["hun", "hu"], ["hye",
      "hy"], ["ibo", "ig"], ["ice", "is"], ["ido", "io"], ["iii", "ii"], ["iku", "iu"], ["ile", "ie"], ["ina", "ia"], ["ind", "id"], ["ipk", "ik"], ["isl", "is"], ["ita", "it"], ["jav", "jv"], ["jpn", "ja"], ["kal", "kl"], ["kan", "kn"], ["kas", "ks"], ["kat", "ka"], ["kau", "kr"], ["kaz", "kk"], ["khm", "km"], ["kik", "ki"], ["kin", "rw"], ["kir", "ky"], ["kom", "kv"], ["kon", "kg"], ["kor", "ko"], ["kua", "kj"], ["kur", "ku"], ["lao", "lo"], ["lat", "la"], ["lav", "lv"], ["lim", "li"], ["lin", "ln"], ["lit", "lt"], ["ltz", "lb"], ["lub", "lu"], ["lug", "lg"], ["mac", "mk"], ["mah",
      "mh"], ["mal", "ml"], ["mao", "mi"], ["mar", "mr"], ["may", "ms"], ["mkd", "mk"], ["mlg", "mg"], ["mlt", "mt"], ["mon", "mn"], ["mri", "mi"], ["msa", "ms"], ["mya", "my"], ["nau", "na"], ["nav", "nv"], ["nbl", "nr"], ["nde", "nd"], ["ndo", "ng"], ["nep", "ne"], ["nld", "nl"], ["nno", "nn"], ["nob", "nb"], ["nor", "no"], ["nya", "ny"], ["oci", "oc"], ["oji", "oj"], ["ori", "or"], ["orm", "om"], ["oss", "os"], ["pan", "pa"], ["per", "fa"], ["pli", "pi"], ["pol", "pl"], ["por", "pt"], ["pus", "ps"], ["que", "qu"], ["roh", "rm"], ["ron", "ro"], ["rum", "ro"], ["run", "rn"], ["rus",
      "ru"], ["sag", "sg"], ["san", "sa"], ["sin", "si"], ["slk", "sk"], ["slo", "sk"], ["slv", "sl"], ["sme", "se"], ["smo", "sm"], ["sna", "sn"], ["snd", "sd"], ["som", "so"], ["sot", "st"], ["spa", "es"], ["sqi", "sq"], ["srd", "sc"], ["srp", "sr"], ["ssw", "ss"], ["sun", "su"], ["swa", "sw"], ["swe", "sv"], ["tah", "ty"], ["tam", "ta"], ["tat", "tt"], ["tel", "te"], ["tgk", "tg"], ["tgl", "tl"], ["tha", "th"], ["tib", "bo"], ["tir", "ti"], ["ton", "to"], ["tsn", "tn"], ["tso", "ts"], ["tuk", "tk"], ["tur", "tr"], ["twi", "tw"], ["uig", "ug"], ["ukr", "uk"], ["urd", "ur"], ["uzb",
      "uz"], ["ven", "ve"], ["vie", "vi"], ["vol", "vo"], ["wel", "cy"], ["wln", "wa"], ["wol", "wo"], ["xho", "xh"], ["yid", "yi"], ["yor", "yo"], ["zha", "za"], ["zho", "zh"], ["zul", "zu"]]);
    shaka.util.StreamUtils = function () {
    };
    shaka.util.StreamUtils.chooseCodecsAndFilterManifest = function (a, b) {
      function c(a) {
        var b = "";
        a.video && (b = d.getCodecBase(a.video.codecs));
        var c = "";
        a.audio && (c = d.getCodecBase(a.audio.codecs));
        return b + "-" + c
      }

      var d = shaka.util.MimeUtils, e = shaka.util.StreamUtils.filterVariantsByAudioChannelCount(a.variants, b),
        f = new shaka.util.MultiMap;
      e = $jscomp.makeIterator(e);
      for (var g = e.next(); !g.done; g = e.next()) {
        g = g.value;
        var h = c(g);
        f.push(h, g)
      }
      var k = null, l = Infinity;
      f.forEach(function (a, b) {
        for (var c = 0, d = 0, e = $jscomp.makeIterator(b),
               f = e.next(); !f.done; f = e.next()) c += f.value.bandwidth || 0, ++d;
        c /= d;
        shaka.log.debug("codecs", a, "avg bandwidth", c);
        c < l && (k = a, l = c)
      });
      goog.asserts.assert(null != k, "Should have chosen codecs!");
      goog.asserts.assert(!isNaN(l), "Bandwidth should be a number!");
      a.variants = a.variants.filter(function (a) {
        if (c(a) == k) return !0;
        shaka.log.debug("Dropping Variant (better codec available)", a);
        return !1
      })
    };
    shaka.util.StreamUtils.meetsRestrictions = function (a, b, c) {
      var d = function (a, b, c) {
        return a >= b && a <= c
      }, e = a.video;
      return e && e.width && e.height && (!d(e.width, b.minWidth, Math.min(b.maxWidth, c.width)) || !d(e.height, b.minHeight, Math.min(b.maxHeight, c.height)) || !d(e.width * e.height, b.minPixels, b.maxPixels)) || a && a.video && a.video.frameRate && !d(a.video.frameRate, b.minFrameRate, b.maxFrameRate) || !d(a.bandwidth, b.minBandwidth, b.maxBandwidth) ? !1 : !0
    };
    shaka.util.StreamUtils.applyRestrictions = function (a, b, c) {
      var d = !1;
      a = $jscomp.makeIterator(a);
      for (var e = a.next(); !e.done; e = a.next()) {
        e = e.value;
        var f = e.allowedByApplication;
        e.allowedByApplication = shaka.util.StreamUtils.meetsRestrictions(e, b, c);
        f != e.allowedByApplication && (d = !0)
      }
      return d
    };
    shaka.util.StreamUtils.filterManifest = function (a, b, c) {
      var d = shaka.util.StreamUtils;
      c.variants = c.variants.filter(function (c) {
        if (a && a.initialized() && !a.supportsVariant(c)) return shaka.log.debug("Dropping variant - not compatible with key system", c), !1;
        var e = c.audio;
        c = c.video;
        return e && !shaka.media.MediaSourceEngine.isStreamSupported(e) ? (shaka.log.debug("Dropping variant - audio not compatible with platform", d.getStreamSummaryString_(e)), !1) : c && !shaka.media.MediaSourceEngine.isStreamSupported(c) ? (shaka.log.debug("Dropping variant - video not compatible with platform",
          d.getStreamSummaryString_(c)), !1) : e && b && b.audio && !d.areStreamsCompatible_(e, b.audio) ? (shaka.log.debug("Droping variant - not compatible with active audio", "active audio", d.getStreamSummaryString_(b.audio), "variant.audio", d.getStreamSummaryString_(e)), !1) : c && b && b.video && !d.areStreamsCompatible_(c, b.video) ? (shaka.log.debug("Droping variant - not compatible with active video", "active video", d.getStreamSummaryString_(b.video), "variant.video", d.getStreamSummaryString_(c)), !1) : !0
      });
      c.textStreams = c.textStreams.filter(function (a) {
        var b =
          shaka.util.MimeUtils.getFullType(a.mimeType, a.codecs);
        (b = shaka.text.TextEngine.isTypeSupported(b)) || shaka.log.debug("Dropping text stream. Is not supported by the platform.", a);
        return b
      })
    };
    shaka.util.StreamUtils.areStreamsCompatible_ = function (a, b) {
      return a.mimeType != b.mimeType || a.codecs.split(".")[0] != b.codecs.split(".")[0] ? !1 : !0
    };
    shaka.util.StreamUtils.variantToTrack = function (a) {
      var b = a.audio, c = a.video, d = b ? b.codecs : null, e = c ? c.codecs : null, f = [];
      e && f.push(e);
      d && f.push(d);
      var g = [];
      c && g.push(c.mimeType);
      b && g.push(b.mimeType);
      g = g[0] || null;
      var h = [];
      b && h.push(b.kind);
      c && h.push(c.kind);
      h = h[0] || null;
      var k = new Set;
      if (b) for (var l = $jscomp.makeIterator(b.roles), m = l.next(); !m.done; m = l.next()) k.add(m.value);
      if (c) for (l = $jscomp.makeIterator(c.roles), m = l.next(); !m.done; m = l.next()) k.add(m.value);
      a = {
        id: a.id,
        active: !1,
        type: "variant",
        bandwidth: a.bandwidth,
        language: a.language,
        label: null,
        kind: h,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        mimeType: g,
        codecs: f.join(", "),
        audioCodec: d,
        videoCodec: e,
        primary: a.primary,
        roles: Array.from(k),
        audioRoles: null,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: null
      };
      c && (a.videoId = c.id, a.originalVideoId = c.originalId, a.width = c.width || null, a.height = c.height || null, a.frameRate = c.frameRate ||
        null, a.pixelAspectRatio = c.pixelAspectRatio || null, a.videoBandwidth = c.bandwidth || null);
      b && (a.audioId = b.id, a.originalAudioId = b.originalId, a.channelsCount = b.channelsCount, a.audioSamplingRate = b.audioSamplingRate, a.audioBandwidth = b.bandwidth || null, a.label = b.label, a.audioRoles = b.roles);
      return a
    };
    shaka.util.StreamUtils.textStreamToTrack = function (a) {
      return {
        id: a.id,
        active: !1,
        type: shaka.util.ManifestParserUtils.ContentType.TEXT,
        bandwidth: 0,
        language: a.language,
        label: a.label,
        kind: a.kind || null,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        mimeType: a.mimeType,
        codecs: a.codecs || null,
        audioCodec: null,
        videoCodec: null,
        primary: a.primary,
        roles: a.roles,
        audioRoles: null,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: a.originalId
      }
    };
    shaka.util.StreamUtils.html5TrackId = function (a) {
      a.__shaka_id || (a.__shaka_id = shaka.util.StreamUtils.nextTrackId_++);
      return a.__shaka_id
    };
    shaka.util.StreamUtils.html5TextTrackToTrack = function (a) {
      var b = shaka.util.MimeUtils.CLOSED_CAPTION_MIMETYPE,
        c = shaka.util.StreamUtils.html5TrackToGenericShakaTrack_(a);
      c.active = "disabled" != a.mode;
      c.type = "text";
      c.originalTextId = a.id;
      "captions" == a.kind && (c.mimeType = b);
      a.kind && (c.roles = [a.kind]);
      return c
    };
    shaka.util.StreamUtils.html5AudioTrackToTrack = function (a) {
      var b = shaka.util.StreamUtils.html5TrackToGenericShakaTrack_(a);
      b.active = a.enabled;
      b.type = "variant";
      b.originalAudioId = a.id;
      "main" == a.kind && (b.primary = !0);
      a.kind && (b.roles = [a.kind], b.audioRoles = [a.kind]);
      return b
    };
    shaka.util.StreamUtils.html5TrackToGenericShakaTrack_ = function (a) {
      return {
        id: shaka.util.StreamUtils.html5TrackId(a),
        active: !1,
        type: "",
        bandwidth: 0,
        language: shaka.util.LanguageUtils.normalize(a.language),
        label: a.label,
        kind: a.kind,
        width: null,
        height: null,
        frameRate: null,
        pixelAspectRatio: null,
        mimeType: null,
        codecs: null,
        audioCodec: null,
        videoCodec: null,
        primary: !1,
        roles: [],
        audioRoles: null,
        videoId: null,
        audioId: null,
        channelsCount: null,
        audioSamplingRate: null,
        audioBandwidth: null,
        videoBandwidth: null,
        originalVideoId: null,
        originalAudioId: null,
        originalTextId: null
      }
    };
    shaka.util.StreamUtils.isPlayable = function (a) {
      return a.allowedByApplication && a.allowedByKeySystem
    };
    shaka.util.StreamUtils.getPlayableVariants = function (a) {
      return a.filter(function (a) {
        return shaka.util.StreamUtils.isPlayable(a)
      })
    };
    shaka.util.StreamUtils.filterVariantsByAudioChannelCount = function (a, b) {
      var c = a.filter(function (a) {
        return a.audio && a.audio.channelsCount
      }), d = new Map;
      c = $jscomp.makeIterator(c);
      for (var e = c.next(); !e.done; e = c.next()) {
        e = e.value;
        var f = e.audio.channelsCount;
        goog.asserts.assert(null != f, "Must have count after filtering!");
        d.has(f) || d.set(f, []);
        d.get(f).push(e)
      }
      c = Array.from(d.keys());
      if (0 == c.length) return a;
      e = c.filter(function (a) {
        return a <= b
      });
      return e.length ? d.get(Math.max.apply(Math, $jscomp.arrayFromIterable(e))) :
        d.get(Math.min.apply(Math, $jscomp.arrayFromIterable(c)))
    };
    shaka.util.StreamUtils.filterStreamsByLanguageAndRole = function (a, b, c) {
      var d = shaka.util.LanguageUtils, e = a, f = a.filter(function (a) {
        return a.primary
      });
      f.length && (e = f);
      var g = e.length ? e[0].language : "";
      e = e.filter(function (a) {
        return a.language == g
      });
      if (b) {
        var h = d.findClosestLocale(d.normalize(b), a.map(function (a) {
          return a.language
        }));
        h && (e = a.filter(function (a) {
          return d.normalize(a.language) == h
        }))
      }
      if (c) {
        a = shaka.util.StreamUtils.filterTextStreamsByRole_(e, c);
        if (a.length) return a;
        shaka.log.warning("No exact match for the text role could be found.")
      } else if (a =
        e.filter(function (a) {
          return 0 == a.roles.length
        }), a.length) return a;
      a = e.map(function (a) {
        return a.roles
      }).reduce(shaka.util.Functional.collapseArrays, []);
      return a.length ? shaka.util.StreamUtils.filterTextStreamsByRole_(e, a[0]) : e
    };
    shaka.util.StreamUtils.filterTextStreamsByRole_ = function (a, b) {
      return a.filter(function (a) {
        return a.roles.includes(b)
      })
    };
    shaka.util.StreamUtils.isAudio = function (a) {
      return a.type == shaka.util.ManifestParserUtils.ContentType.AUDIO
    };
    shaka.util.StreamUtils.isVideo = function (a) {
      return a.type == shaka.util.ManifestParserUtils.ContentType.VIDEO
    };
    shaka.util.StreamUtils.getVariantStreams = function (a) {
      var b = [];
      a.audio && b.push(a.audio);
      a.video && b.push(a.video);
      return b
    };
    shaka.util.StreamUtils.getStreamSummaryString_ = function (a) {
      return shaka.util.StreamUtils.isAudio(a) ? "type=audio codecs=" + a.codecs + " bandwidth=" + a.bandwidth + " channelsCount=" + a.channelsCount + " audioSamplingRate=" + a.audioSamplingRate : shaka.util.StreamUtils.isVideo(a) ? "type=video codecs=" + a.codecs + " bandwidth=" + a.bandwidth + " frameRate=" + a.frameRate + " width=" + a.width + " height=" + a.height : "unexpected stream type"
    };
    shaka.util.StreamUtils.nextTrackId_ = 0;
    shaka.abr.SimpleAbrManager = function () {
      this.switch_ = null;
      this.enabled_ = !1;
      this.bandwidthEstimator_ = new shaka.abr.EwmaBandwidthEstimator;
      this.variants_ = [];
      this.playbackRate_ = 1;
      this.startupComplete_ = !1;
      this.config_ = this.lastTimeChosenMs_ = null
    };
    shaka.abr.SimpleAbrManager.prototype.stop = function () {
      this.switch_ = null;
      this.enabled_ = !1;
      this.variants_ = [];
      this.playbackRate_ = 1;
      this.lastTimeChosenMs_ = null
    };
    shaka.abr.SimpleAbrManager.prototype.init = function (a) {
      this.switch_ = a
    };
    shaka.abr.SimpleAbrManager.prototype.chooseVariant = function () {
      var a = shaka.abr.SimpleAbrManager, b = a.filterAndSortVariants_(this.config_.restrictions, this.variants_),
        c = this.bandwidthEstimator_.getBandwidthEstimate(this.config_.defaultBandwidthEstimate);
      this.variants_.length && !b.length && (shaka.log.warning("No variants met the ABR restrictions. Choosing a variant by lowest bandwidth."), b = a.filterAndSortVariants_(null, this.variants_), b = [b[0]]);
      a = b[0] || null;
      b = $jscomp.makeIterator(shaka.util.Iterables.enumerate(b));
      for (var d = b.next(); !d.done; d = b.next()) {
        var e = d.value;
        d = e.item;
        var f = e.next, g = isNaN(this.playbackRate_) ? 1 : Math.abs(this.playbackRate_);
        e = g * d.bandwidth;
        var h = e / this.config_.bandwidthDowngradeTarget;
        f = g * (f || {bandwidth: Infinity}).bandwidth / this.config_.bandwidthUpgradeTarget;
        shaka.log.v2("Bandwidth ranges:", (e / 1E6).toFixed(3), (h / 1E6).toFixed(3), (f / 1E6).toFixed(3));
        c >= h && c <= f && (a = d)
      }
      this.lastTimeChosenMs_ = Date.now();
      return a
    };
    shaka.abr.SimpleAbrManager.prototype.enable = function () {
      this.enabled_ = !0
    };
    shaka.abr.SimpleAbrManager.prototype.disable = function () {
      this.enabled_ = !1
    };
    shaka.abr.SimpleAbrManager.prototype.segmentDownloaded = function (a, b) {
      shaka.log.v2("Segment downloaded:", "deltaTimeMs=" + a, "numBytes=" + b, "lastTimeChosenMs=" + this.lastTimeChosenMs_, "enabled=" + this.enabled_);
      goog.asserts.assert(0 <= a, "expected a non-negative duration");
      this.bandwidthEstimator_.sample(a, b);
      null != this.lastTimeChosenMs_ && this.enabled_ && this.suggestStreams_()
    };
    shaka.abr.SimpleAbrManager.prototype.getBandwidthEstimate = function () {
      return this.bandwidthEstimator_.getBandwidthEstimate(this.config_.defaultBandwidthEstimate)
    };
    shaka.abr.SimpleAbrManager.prototype.setVariants = function (a) {
      this.variants_ = a
    };
    shaka.abr.SimpleAbrManager.prototype.playbackRateChanged = function (a) {
      this.playbackRate_ = a
    };
    shaka.abr.SimpleAbrManager.prototype.configure = function (a) {
      this.config_ = a
    };
    shaka.abr.SimpleAbrManager.prototype.suggestStreams_ = function () {
      shaka.log.v2("Suggesting Streams...");
      goog.asserts.assert(null != this.lastTimeChosenMs_, "lastTimeChosenMs_ should not be null");
      if (!this.startupComplete_) {
        if (!this.bandwidthEstimator_.hasGoodEstimate()) {
          shaka.log.v2("Still waiting for a good estimate...");
          return
        }
        this.startupComplete_ = !0
      } else if (Date.now() - this.lastTimeChosenMs_ < 1E3 * this.config_.switchInterval) {
        shaka.log.v2("Still within switch interval...");
        return
      }
      var a = this.chooseVariant(),
        b = this.bandwidthEstimator_.getBandwidthEstimate(this.config_.defaultBandwidthEstimate);
      b = Math.round(b / 1E3);
      a && (shaka.log.debug("Calling switch_(), bandwidth=" + b + " kbps"), this.switch_(a))
    };
    shaka.abr.SimpleAbrManager.filterAndSortVariants_ = function (a, b) {
      a && (b = b.filter(function (b) {
        goog.asserts.assert(a, "Restrictions should exist!");
        return shaka.util.StreamUtils.meetsRestrictions(b, a, {width: Infinity, height: Infinity})
      }));
      return b.sort(function (a, b) {
        return a.bandwidth - b.bandwidth
      })
    };
    goog.exportSymbol("shaka.abr.SimpleAbrManager", shaka.abr.SimpleAbrManager);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "configure", shaka.abr.SimpleAbrManager.prototype.configure);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "playbackRateChanged", shaka.abr.SimpleAbrManager.prototype.playbackRateChanged);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "setVariants", shaka.abr.SimpleAbrManager.prototype.setVariants);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "getBandwidthEstimate", shaka.abr.SimpleAbrManager.prototype.getBandwidthEstimate);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "segmentDownloaded", shaka.abr.SimpleAbrManager.prototype.segmentDownloaded);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "disable", shaka.abr.SimpleAbrManager.prototype.disable);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "enable", shaka.abr.SimpleAbrManager.prototype.enable);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "chooseVariant", shaka.abr.SimpleAbrManager.prototype.chooseVariant);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "init", shaka.abr.SimpleAbrManager.prototype.init);
    goog.exportProperty(shaka.abr.SimpleAbrManager.prototype, "stop", shaka.abr.SimpleAbrManager.prototype.stop);
    shaka.media.AdaptationSet = function (a, b) {
      this.root_ = a;
      this.variants_ = new Set([a]);
      b = b || [];
      for (var c = $jscomp.makeIterator(b), d = c.next(); !d.done; d = c.next()) this.add(d.value)
    };
    shaka.media.AdaptationSet.prototype.add = function (a) {
      if (this.canInclude(a)) return this.variants_.add(a), !0;
      shaka.log.warning("Rejecting variant - not compatible with root.");
      return !1
    };
    shaka.media.AdaptationSet.prototype.canInclude = function (a) {
      return shaka.media.AdaptationSet.areAdaptable(this.root_, a)
    };
    shaka.media.AdaptationSet.areAdaptable = function (a, b) {
      var c = shaka.media.AdaptationSet;
      if (!!a.audio != !!b.audio || !!a.video != !!b.video || a.language != b.language) return !1;
      goog.asserts.assert(!!a.audio == !!b.audio, "Both should either have audio or not have audio.");
      if (a.audio && b.audio && !c.areAudiosCompatible_(a.audio, b.audio)) return !1;
      goog.asserts.assert(!!a.video == !!b.video, "Both should either have video or not have video.");
      return a.video && b.video && !c.areVideosCompatible_(a.video, b.video) ? !1 : !0
    };
    shaka.media.AdaptationSet.prototype.values = function () {
      return this.variants_.values()
    };
    shaka.media.AdaptationSet.areAudiosCompatible_ = function (a, b) {
      var c = shaka.media.AdaptationSet;
      return a.channelsCount == b.channelsCount && c.canTransitionBetween_(a, b) && c.areRolesEqual_(a.roles, b.roles) ? !0 : !1
    };
    shaka.media.AdaptationSet.areVideosCompatible_ = function (a, b) {
      var c = shaka.media.AdaptationSet;
      return c.canTransitionBetween_(a, b) && c.areRolesEqual_(a.roles, b.roles) ? !0 : !1
    };
    shaka.media.AdaptationSet.canTransitionBetween_ = function (a, b) {
      if (a.mimeType != b.mimeType) return !1;
      var c = shaka.util.MimeUtils.splitCodecs(a.codecs).map(function (a) {
        return shaka.util.MimeUtils.getCodecBase(a)
      }), d = shaka.util.MimeUtils.splitCodecs(b.codecs).map(function (a) {
        return shaka.util.MimeUtils.getCodecBase(a)
      });
      if (c.length != d.length) return !1;
      c.sort();
      d.sort();
      for (var e = $jscomp.makeIterator(shaka.util.Iterables.range(c.length)), f = e.next(); !f.done; f = e.next()) if (f = f.value, c[f] != d[f]) return !1;
      return !0
    };
    shaka.media.AdaptationSet.areRolesEqual_ = function (a, b) {
      var c = new Set(a), d = new Set(b);
      c["delete"]("main");
      d["delete"]("main");
      if (c.size != d.size) return !1;
      c = $jscomp.makeIterator(c);
      for (var e = c.next(); !e.done; e = c.next()) if (!d.has(e.value)) return !1;
      return !0
    };
    shaka.media.AdaptationSetCriteria = function () {
    };
    shaka.media.AdaptationSetCriteria.prototype.create = function (a) {
    };
    shaka.media.ExampleBasedCriteria = function (a) {
      this.example_ = a;
      this.fallback_ = new shaka.media.PreferenceBasedCriteria(a.language, "", a.audio && a.audio.channelsCount ? a.audio.channelsCount : 0, "")
    };
    shaka.media.ExampleBasedCriteria.prototype.create = function (a) {
      var b = this, c = a.filter(function (a) {
        return shaka.media.AdaptationSet.areAdaptable(b.example_, a)
      });
      return c.length ? new shaka.media.AdaptationSet(c[0], c) : this.fallback_.create(a)
    };
    shaka.media.PreferenceBasedCriteria = function (a, b, c, d, e) {
      this.language_ = a;
      this.role_ = b;
      this.channelCount_ = c;
      this.label_ = void 0 === d ? "" : d;
      this.type_ = void 0 === e ? "" : e
    };
    shaka.media.PreferenceBasedCriteria.prototype.create = function (a) {
      var b = shaka.media.PreferenceBasedCriteria, c = shaka.util.StreamUtils, d = [];
      d = b.filterByLanguage_(a, this.language_);
      var e = a.filter(function (a) {
        return a.primary
      });
      d = d.length ? d : e.length ? e : a;
      this.role_ && (a = b.filterVariantsByRole_(d, this.role_, this.type_), a.length ? d = a : shaka.log.warning("No exact match for variant role could be found."));
      this.channelCount_ && (c = c.filterVariantsByAudioChannelCount(d, this.channelCount_), c.length ? d = c : shaka.log.warning("No exact match for the channel count could be found."));
      this.label_ && (b = b.filterVariantsByLabel_(d, this.label_), b.length ? d = b : shaka.log.warning("No exact match for variant label could be found."));
      b = new shaka.media.AdaptationSet(d[0]);
      d = $jscomp.makeIterator(d);
      for (c = d.next(); !c.done; c = d.next()) c = c.value, b.canInclude(c) && b.add(c);
      return b
    };
    shaka.media.PreferenceBasedCriteria.filterByLanguage_ = function (a, b) {
      var c = shaka.util.LanguageUtils, d = c.normalize(b), e = c.findClosestLocale(d, a.map(function (a) {
        return c.getLocaleForVariant(a)
      }));
      return e ? a.filter(function (a) {
        return e == c.getLocaleForVariant(a)
      }) : []
    };
    shaka.media.PreferenceBasedCriteria.filterVariantsByRole_ = function (a, b, c) {
      return a.filter(function (a) {
        if (c) {
          var d = a[c];
          return d && d.roles.includes(b)
        }
        d = a.audio;
        a = a.video;
        return d && d.roles.includes(b) || a && a.roles.includes(b)
      })
    };
    shaka.media.PreferenceBasedCriteria.filterVariantsByLabel_ = function (a, b) {
      return a.filter(function (a) {
        if (!a.audio) return !1;
        a = a.audio.label.toLowerCase();
        var c = b.toLowerCase();
        return a == c
      })
    };
    shaka.media.BufferingObserver = function (a, b) {
      var c = shaka.media.BufferingObserver.State;
      this.previousState_ = c.SATISFIED;
      this.thresholds_ = (new Map).set(c.SATISFIED, b).set(c.STARVING, a)
    };
    shaka.media.BufferingObserver.prototype.setThresholds = function (a, b) {
      var c = shaka.media.BufferingObserver.State;
      this.thresholds_.set(c.SATISFIED, b).set(c.STARVING, a)
    };
    shaka.media.BufferingObserver.prototype.update = function (a, b) {
      var c = shaka.media.BufferingObserver.State, d = this.thresholds_.get(this.previousState_),
        e = this.previousState_;
      this.previousState_ = c = b || a >= d ? c.SATISFIED : c.STARVING;
      return e != c
    };
    shaka.media.BufferingObserver.prototype.setState = function (a) {
      this.previousState_ = a
    };
    shaka.media.BufferingObserver.prototype.getState = function () {
      return this.previousState_
    };
    shaka.media.BufferingObserver.State = {STARVING: 0, SATISFIED: 1};
    shaka.media.ManifestParser = function () {
    };
    shaka.media.ManifestParser.registerParserByExtension = function (a, b) {
      shaka.media.ManifestParser.parsersByExtension[a] = b
    };
    shaka.media.ManifestParser.registerParserByMime = function (a, b) {
      shaka.media.ManifestParser.parsersByMime[a] = b
    };
    shaka.media.ManifestParser.unregisterParserByMime = function (a) {
      delete shaka.media.ManifestParser.parsersByMime[a]
    };
    shaka.media.ManifestParser.probeSupport = function () {
      var a = shaka.media.ManifestParser, b = {};
      if (shaka.util.Platform.supportsMediaSource()) {
        for (var c in a.parsersByMime) b[c] = !0;
        for (var d in a.parsersByExtension) b[d] = !0
      }
      c = {mpd: "application/dash+xml", m3u8: "application/x-mpegurl", ism: "application/vnd.ms-sstr+xml"};
      d = $jscomp.makeIterator(["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"]);
      for (var e = d.next(); !e.done; e = d.next()) e = e.value, shaka.util.Platform.supportsMediaSource() ?
        b[e] = !!a.parsersByMime[e] : b[e] = shaka.util.Platform.supportsMediaType(e);
      for (var f in c) shaka.util.Platform.supportsMediaSource() ? b[f] = !!a.parsersByExtension[f] : b[f] = shaka.util.Platform.supportsMediaType(c[f]);
      return b
    };
    shaka.media.ManifestParser.getFactory = function (a, b, c, d) {
      var e, f, g, h, k;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
        if (1 == l.nextAddress) {
          e = shaka.media.ManifestParser;
          if (d) {
            if (f = e.parsersByMime[d.toLowerCase()]) return l["return"](f);
            shaka.log.warning("Could not determine manifest type using MIME type ", d)
          }
          if (g = e.getExtension(a)) {
            if (h = e.parsersByExtension[g]) return l["return"](h);
            shaka.log.warning("Could not determine manifest type for extension ", g)
          } else shaka.log.warning("Could not find extension for ",
            a);
          return d ? l.jumpTo(2) : l.yield(e.getMimeType(a, b, c), 3)
        }
        if (2 != l.nextAddress && (d = l.yieldResult)) {
          if (k = shaka.media.ManifestParser.parsersByMime[d]) return l["return"](k);
          shaka.log.warning("Could not determine manifest type using MIME type", d)
        }
        throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.UNABLE_TO_GUESS_MANIFEST_TYPE, a);
      })
    };
    shaka.media.ManifestParser.getMimeType = function (a, b, c) {
      var d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) return d = shaka.net.NetworkingEngine.RequestType.MANIFEST, e = shaka.net.NetworkingEngine.makeRequest([a], c), e.method = "HEAD", h.yield(b.request(d, e).promise, 2);
        f = h.yieldResult;
        g = f.headers["content-type"];
        return h["return"](g ? g.toLowerCase().split(";").shift() : "")
      })
    };
    shaka.media.ManifestParser.getExtension = function (a) {
      a = (new goog.Uri(a)).getPath().split("/").pop().split(".");
      return 1 == a.length ? "" : a.pop().toLowerCase()
    };
    shaka.media.ManifestParser.isSupported = function (a, b) {
      return shaka.util.Platform.supportsMediaSource() ? b in shaka.media.ManifestParser.parsersByMime || shaka.media.ManifestParser.getExtension(a) in shaka.media.ManifestParser.parsersByExtension ? !0 : !1 : !1
    };
    goog.exportSymbol("shaka.media.ManifestParser", shaka.media.ManifestParser);
    goog.exportProperty(shaka.media.ManifestParser, "unregisterParserByMime", shaka.media.ManifestParser.unregisterParserByMime);
    goog.exportProperty(shaka.media.ManifestParser, "registerParserByMime", shaka.media.ManifestParser.registerParserByMime);
    goog.exportProperty(shaka.media.ManifestParser, "registerParserByExtension", shaka.media.ManifestParser.registerParserByExtension);
    shaka.media.ManifestParser.parsersByMime = {};
    shaka.media.ManifestParser.parsersByExtension = {};
    shaka.media.InitSegmentReference = function (a, b, c) {
      this.getUris = a;
      this.startByte = b;
      this.endByte = c
    };
    shaka.media.InitSegmentReference.prototype.getStartByte = function () {
      return this.startByte
    };
    shaka.media.InitSegmentReference.prototype.getEndByte = function () {
      return this.endByte
    };
    shaka.media.InitSegmentReference.prototype.getSize = function () {
      return this.endByte ? this.endByte - this.startByte : null
    };
    goog.exportSymbol("shaka.media.InitSegmentReference", shaka.media.InitSegmentReference);
    goog.exportProperty(shaka.media.InitSegmentReference.prototype, "getEndByte", shaka.media.InitSegmentReference.prototype.getEndByte);
    goog.exportProperty(shaka.media.InitSegmentReference.prototype, "getStartByte", shaka.media.InitSegmentReference.prototype.getStartByte);
    shaka.media.SegmentReference = function (a, b, c, d, e, f, g, h, k) {
      goog.asserts.assert(a < b, "startTime must be less than endTime");
      goog.asserts.assert(null == e || d < e, "startByte must be < endByte");
      this.startTime = a;
      this.endTime = b;
      this.getUris = c;
      this.startByte = d;
      this.endByte = e;
      this.initSegmentReference = f;
      this.timestampOffset = g;
      this.appendWindowStart = h;
      this.appendWindowEnd = k
    };
    shaka.media.SegmentReference.prototype.getStartTime = function () {
      return this.startTime
    };
    shaka.media.SegmentReference.prototype.getEndTime = function () {
      return this.endTime
    };
    shaka.media.SegmentReference.prototype.getStartByte = function () {
      return this.startByte
    };
    shaka.media.SegmentReference.prototype.getEndByte = function () {
      return this.endByte
    };
    shaka.media.SegmentReference.prototype.getSize = function () {
      return this.endByte ? this.endByte - this.startByte : null
    };
    goog.exportSymbol("shaka.media.SegmentReference", shaka.media.SegmentReference);
    goog.exportProperty(shaka.media.SegmentReference.prototype, "getEndByte", shaka.media.SegmentReference.prototype.getEndByte);
    goog.exportProperty(shaka.media.SegmentReference.prototype, "getStartByte", shaka.media.SegmentReference.prototype.getStartByte);
    goog.exportProperty(shaka.media.SegmentReference.prototype, "getEndTime", shaka.media.SegmentReference.prototype.getEndTime);
    goog.exportProperty(shaka.media.SegmentReference.prototype, "getStartTime", shaka.media.SegmentReference.prototype.getStartTime);
    shaka.media.PresentationTimeline = function (a, b, c) {
      this.presentationStartTime_ = a;
      this.presentationDelay_ = b;
      this.segmentAvailabilityDuration_ = this.duration_ = Infinity;
      this.maxSegmentDuration_ = 1;
      this.maxSegmentEndTime_ = this.minSegmentStartTime_ = null;
      this.clockOffset_ = 0;
      this.static_ = !0;
      this.userSeekStart_ = 0;
      this.autoCorrectDrift_ = void 0 === c ? !0 : c
    };
    shaka.media.PresentationTimeline.prototype.getDuration = function () {
      return this.duration_
    };
    shaka.media.PresentationTimeline.prototype.getMaxSegmentDuration = function () {
      return this.maxSegmentDuration_
    };
    shaka.media.PresentationTimeline.prototype.setDuration = function (a) {
      goog.asserts.assert(0 < a, "duration must be > 0");
      this.duration_ = a
    };
    shaka.media.PresentationTimeline.prototype.getPresentationStartTime = function () {
      return this.presentationStartTime_
    };
    shaka.media.PresentationTimeline.prototype.setClockOffset = function (a) {
      this.clockOffset_ = a
    };
    shaka.media.PresentationTimeline.prototype.setStatic = function (a) {
      this.static_ = a
    };
    shaka.media.PresentationTimeline.prototype.setSegmentAvailabilityDuration = function (a) {
      goog.asserts.assert(0 <= a, "segmentAvailabilityDuration must be >= 0");
      this.segmentAvailabilityDuration_ = a
    };
    shaka.media.PresentationTimeline.prototype.setDelay = function (a) {
      goog.asserts.assert(0 <= a, "delay must be >= 0");
      this.presentationDelay_ = a
    };
    shaka.media.PresentationTimeline.prototype.getDelay = function () {
      return this.presentationDelay_
    };
    shaka.media.PresentationTimeline.prototype.notifySegments = function (a) {
      if (0 != a.length) {
        var b = a[a.length - 1].endTime;
        this.notifyMinSegmentStartTime(a[0].startTime);
        this.maxSegmentDuration_ = a.reduce(function (a, b) {
          return Math.max(a, b.endTime - b.startTime)
        }, this.maxSegmentDuration_);
        this.maxSegmentEndTime_ = Math.max(this.maxSegmentEndTime_, b);
        null != this.presentationStartTime_ && this.autoCorrectDrift_ && (this.presentationStartTime_ = (Date.now() + this.clockOffset_) / 1E3 - this.maxSegmentEndTime_ - this.maxSegmentDuration_);
        shaka.log.v1("notifySegments:", "maxSegmentDuration=" + this.maxSegmentDuration_)
      }
    };
    shaka.media.PresentationTimeline.prototype.notifyMinSegmentStartTime = function (a) {
      this.minSegmentStartTime_ = null == this.minSegmentStartTime_ ? a : Math.min(this.minSegmentStartTime_, a)
    };
    shaka.media.PresentationTimeline.prototype.notifyMaxSegmentDuration = function (a) {
      this.maxSegmentDuration_ = Math.max(this.maxSegmentDuration_, a);
      shaka.log.v1("notifyNewSegmentDuration:", "maxSegmentDuration=" + this.maxSegmentDuration_)
    };
    shaka.media.PresentationTimeline.prototype.offset = function (a) {
      null != this.minSegmentStartTime_ && (this.minSegmentStartTime_ += a);
      null != this.maxSegmentEndTime_ && (this.maxSegmentEndTime_ += a)
    };
    shaka.media.PresentationTimeline.prototype.isLive = function () {
      return Infinity == this.duration_ && !this.static_
    };
    shaka.media.PresentationTimeline.prototype.isInProgress = function () {
      return Infinity != this.duration_ && !this.static_
    };
    shaka.media.PresentationTimeline.prototype.getSegmentAvailabilityStart = function () {
      goog.asserts.assert(0 <= this.segmentAvailabilityDuration_, "The availability duration should be positive");
      var a = this.getSegmentAvailabilityEnd() - this.segmentAvailabilityDuration_;
      return Math.max(this.userSeekStart_, a)
    };
    shaka.media.PresentationTimeline.prototype.setUserSeekStart = function (a) {
      this.userSeekStart_ = a
    };
    shaka.media.PresentationTimeline.prototype.getSegmentAvailabilityEnd = function () {
      return this.isLive() || this.isInProgress() ? Math.min(this.getLiveEdge_(), this.duration_) : this.duration_
    };
    shaka.media.PresentationTimeline.prototype.getSafeSeekRangeStart = function (a) {
      var b = Math.max(this.minSegmentStartTime_, this.userSeekStart_);
      if (Infinity == this.segmentAvailabilityDuration_) return b;
      var c = this.getSegmentAvailabilityEnd() - this.segmentAvailabilityDuration_;
      a = Math.min(c + a, this.getSeekRangeEnd());
      return Math.max(b, a)
    };
    shaka.media.PresentationTimeline.prototype.getSeekRangeStart = function () {
      return this.getSafeSeekRangeStart(0)
    };
    shaka.media.PresentationTimeline.prototype.getSeekRangeEnd = function () {
      var a = this.isLive() || this.isInProgress() ? this.presentationDelay_ : 0;
      return Math.max(0, this.getSegmentAvailabilityEnd() - a)
    };
    shaka.media.PresentationTimeline.prototype.usingPresentationStartTime = function () {
      return null == this.presentationStartTime_ || null != this.maxSegmentEndTime_ && this.autoCorrectDrift_ ? !1 : !0
    };
    shaka.media.PresentationTimeline.prototype.getLiveEdge_ = function () {
      goog.asserts.assert(null != this.presentationStartTime_, "Cannot compute timeline live edge without start time");
      var a = (Date.now() + this.clockOffset_) / 1E3;
      return Math.max(0, a - this.maxSegmentDuration_ - this.presentationStartTime_)
    };
    shaka.media.PresentationTimeline.prototype.assertIsValid = function () {
      goog.DEBUG && (this.isLive() ? goog.asserts.assert(null != this.presentationStartTime_, "Detected as live stream, but does not match our model of live!") : this.isInProgress() ? goog.asserts.assert(null != this.presentationStartTime_ && Infinity == this.segmentAvailabilityDuration_, "Detected as IPR stream, but does not match our model of IPR!") : goog.asserts.assert(Infinity == this.segmentAvailabilityDuration_ && Infinity != this.duration_ && this.static_,
        "Detected as VOD stream, but does not match our model of VOD!"))
    };
    goog.exportSymbol("shaka.media.PresentationTimeline", shaka.media.PresentationTimeline);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "usingPresentationStartTime", shaka.media.PresentationTimeline.prototype.usingPresentationStartTime);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getSeekRangeEnd", shaka.media.PresentationTimeline.prototype.getSeekRangeEnd);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getSeekRangeStart", shaka.media.PresentationTimeline.prototype.getSeekRangeStart);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getSafeSeekRangeStart", shaka.media.PresentationTimeline.prototype.getSafeSeekRangeStart);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getSegmentAvailabilityEnd", shaka.media.PresentationTimeline.prototype.getSegmentAvailabilityEnd);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "setUserSeekStart", shaka.media.PresentationTimeline.prototype.setUserSeekStart);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getSegmentAvailabilityStart", shaka.media.PresentationTimeline.prototype.getSegmentAvailabilityStart);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "isInProgress", shaka.media.PresentationTimeline.prototype.isInProgress);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "isLive", shaka.media.PresentationTimeline.prototype.isLive);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "offset", shaka.media.PresentationTimeline.prototype.offset);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "notifyMaxSegmentDuration", shaka.media.PresentationTimeline.prototype.notifyMaxSegmentDuration);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "notifyMinSegmentStartTime", shaka.media.PresentationTimeline.prototype.notifyMinSegmentStartTime);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "notifySegments", shaka.media.PresentationTimeline.prototype.notifySegments);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getDelay", shaka.media.PresentationTimeline.prototype.getDelay);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "setDelay", shaka.media.PresentationTimeline.prototype.setDelay);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "setSegmentAvailabilityDuration", shaka.media.PresentationTimeline.prototype.setSegmentAvailabilityDuration);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "setStatic", shaka.media.PresentationTimeline.prototype.setStatic);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "setClockOffset", shaka.media.PresentationTimeline.prototype.setClockOffset);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getPresentationStartTime", shaka.media.PresentationTimeline.prototype.getPresentationStartTime);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "setDuration", shaka.media.PresentationTimeline.prototype.setDuration);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getMaxSegmentDuration", shaka.media.PresentationTimeline.prototype.getMaxSegmentDuration);
    goog.exportProperty(shaka.media.PresentationTimeline.prototype, "getDuration", shaka.media.PresentationTimeline.prototype.getDuration);
    shaka.media.StallDetector = function (a, b) {
      this.implementation_ = a;
      this.wasMakingProgress_ = a.shouldBeMakingProgress();
      this.value_ = a.getPresentationSeconds();
      this.lastUpdateSeconds_ = a.getWallSeconds();
      this.didJump_ = !1;
      this.stallThresholdSeconds_ = b;
      this.onStall_ = function () {
      }
    };
    shaka.media.StallDetector.prototype.release = function () {
      this.implementation_ = null;
      this.onStall_ = function () {
      }
    };
    shaka.media.StallDetector.prototype.onStall = function (a) {
      this.onStall_ = a
    };
    shaka.media.StallDetector.prototype.poll = function () {
      var a = this.implementation_, b = a.shouldBeMakingProgress(), c = a.getPresentationSeconds(),
        d = a.getWallSeconds();
      if (this.value_ != c || this.wasMakingProgress_ != b) this.lastUpdateSeconds_ = d, this.value_ = c, this.wasMakingProgress_ = b, this.didJump_ = !1;
      c = d - this.lastUpdateSeconds_;
      if (b = c >= this.stallThresholdSeconds_ && b && !this.didJump_) this.onStall_(this.value_, c), this.didJump_ = !0, this.value_ = a.getPresentationSeconds();
      return b
    };
    shaka.media.StallDetector.Implementation = function () {
    };
    shaka.media.StallDetector.Implementation.prototype.shouldBeMakingProgress = function () {
    };
    shaka.media.StallDetector.Implementation.prototype.getPresentationSeconds = function () {
    };
    shaka.media.StallDetector.Implementation.prototype.getWallSeconds = function () {
    };
    shaka.media.StallDetector.MediaElementImplementation = function (a) {
      this.mediaElement_ = a
    };
    shaka.media.StallDetector.MediaElementImplementation.prototype.shouldBeMakingProgress = function () {
      return this.mediaElement_.paused || 0 == this.mediaElement_.playbackRate || 0 == this.mediaElement_.buffered.length ? !1 : shaka.media.StallDetector.MediaElementImplementation.hasContentFor_(this.mediaElement_.buffered, this.mediaElement_.currentTime)
    };
    shaka.media.StallDetector.MediaElementImplementation.prototype.getPresentationSeconds = function () {
      return this.mediaElement_.currentTime
    };
    shaka.media.StallDetector.MediaElementImplementation.prototype.getWallSeconds = function () {
      return Date.now() / 1E3
    };
    shaka.media.StallDetector.MediaElementImplementation.hasContentFor_ = function (a, b) {
      for (var c = $jscomp.makeIterator(shaka.media.TimeRangesUtils.getBufferedInfo(a)), d = c.next(); !d.done; d = c.next()) if (d = d.value, !(b < d.start - .1 || b > d.end - .5)) return !0;
      return !1
    };
    shaka.media.GapJumpingController = function (a, b, c, d, e) {
      var f = this;
      this.video_ = a;
      this.timeline_ = b;
      this.config_ = c;
      this.onEvent_ = e;
      this.eventManager_ = new shaka.util.EventManager;
      this.seekingEventReceived_ = !1;
      this.prevReadyState_ = a.readyState;
      this.didFireLargeGap_ = !1;
      this.stallDetector_ = d;
      this.hadSegmentAppended_ = !1;
      this.eventManager_.listen(a, "waiting", function () {
        return f.onPollGapJump_()
      });
      this.gapJumpTimer_ = (new shaka.util.Timer(function () {
        f.onPollGapJump_()
      })).tickEvery(.25)
    };
    shaka.media.GapJumpingController.prototype.release = function () {
      this.eventManager_ && (this.eventManager_.release(), this.eventManager_ = null);
      null != this.gapJumpTimer_ && (this.gapJumpTimer_.stop(), this.gapJumpTimer_ = null);
      this.stallDetector_ && (this.stallDetector_.release(), this.stallDetector_ = null);
      this.video_ = this.timeline_ = this.onEvent_ = null
    };
    shaka.media.GapJumpingController.prototype.onSegmentAppended = function () {
      this.hadSegmentAppended_ = !0;
      this.onPollGapJump_()
    };
    shaka.media.GapJumpingController.prototype.onSeeking = function () {
      this.seekingEventReceived_ = !0;
      this.didFireLargeGap_ = this.hadSegmentAppended_ = !1
    };
    shaka.media.GapJumpingController.prototype.onPollGapJump_ = function () {
      if (0 != this.video_.readyState) {
        if (this.video_.seeking) {
          if (!this.seekingEventReceived_) return
        } else this.seekingEventReceived_ = !1;
        if (!this.video_.paused && (this.video_.readyState != this.prevReadyState_ && (this.didFireLargeGap_ = !1, this.prevReadyState_ = this.video_.readyState), !this.stallDetector_ || !this.stallDetector_.poll())) {
          var a = this.config_.smallGapLimit, b = this.video_.currentTime, c = this.video_.buffered,
            d = shaka.media.TimeRangesUtils.getGapIndex(c,
              b);
          if (null != d && (0 != d || this.hadSegmentAppended_)) {
            var e = c.start(d), f = this.timeline_.getSeekRangeEnd();
            if (!(e >= f)) {
              f = e - b;
              a = f <= a;
              var g = !1;
              if (!(f < shaka.media.GapJumpingController.BROWSER_GAP_TOLERANCE)) {
                if (!a && !this.didFireLargeGap_) {
                  this.didFireLargeGap_ = !0;
                  var h = new shaka.util.FakeEvent("largegap", {currentTime: b, gapSize: f});
                  h.cancelable = !0;
                  this.onEvent_(h);
                  this.config_.jumpLargeGaps && !h.defaultPrevented ? g = !0 : shaka.log.info("Ignoring large gap at", b, "size", f)
                }
                if (a || g) 0 == d ? shaka.log.info("Jumping forward",
                  f, "seconds because of gap before start time of", e) : shaka.log.info("Jumping forward", f, "seconds because of gap starting at", c.end(d - 1), "and ending at", e), this.video_.currentTime = e
              }
            }
          }
        }
      }
    };
    shaka.media.GapJumpingController.BROWSER_GAP_TOLERANCE = .001;
    shaka.util.MediaReadyState = function () {
    };
    shaka.util.MediaReadyState.waitForReadyState = function (a, b, c, d) {
      b == HTMLMediaElement.HAVE_NOTHING || a.readyState >= b ? d() : (b = shaka.util.MediaReadyState.READY_STATES_TO_EVENT_NAMES_.get(b), c.listenOnce(a, b, d))
    };
    shaka.util.MediaReadyState.READY_STATES_TO_EVENT_NAMES_ = new Map([[HTMLMediaElement.HAVE_METADATA, "loadedmetadata"], [HTMLMediaElement.HAVE_CURRENT_DATA, "loadeddata"], [HTMLMediaElement.HAVE_FUTURE_DATA, "canplay"], [HTMLMediaElement.HAVE_ENOUGH_DATA, "canplaythrough"]]);
    shaka.media.VideoWrapper = function (a, b, c) {
      var d = this;
      this.video_ = a;
      this.onSeek_ = b;
      this.startTime_ = c;
      this.started_ = !1;
      this.eventManager_ = new shaka.util.EventManager;
      this.mover_ = new shaka.media.VideoWrapper.PlayheadMover(a, 10);
      shaka.util.MediaReadyState.waitForReadyState(this.video_, HTMLMediaElement.HAVE_METADATA, this.eventManager_, function () {
        d.setStartTime_(d.startTime_)
      })
    };
    shaka.media.VideoWrapper.prototype.release = function () {
      this.eventManager_ && (this.eventManager_.release(), this.eventManager_ = null);
      null != this.mover_ && (this.mover_.release(), this.mover_ = null);
      this.onSeek_ = function () {
      };
      this.video_ = null
    };
    shaka.media.VideoWrapper.prototype.getTime = function () {
      return this.started_ ? this.video_.currentTime : this.startTime_
    };
    shaka.media.VideoWrapper.prototype.setTime = function (a) {
      var b = this;
      0 < this.video_.readyState ? this.mover_.moveTo(a) : shaka.util.MediaReadyState.waitForReadyState(this.video_, HTMLMediaElement.HAVE_METADATA, this.eventManager_, function () {
        b.setStartTime_(b.startTime_)
      })
    };
    shaka.media.VideoWrapper.prototype.setStartTime_ = function (a) {
      var b = this;
      .001 > Math.abs(this.video_.currentTime - a) ? this.startListeningToSeeks_() : (this.eventManager_.listenOnce(this.video_, "seeking", function () {
        b.startListeningToSeeks_()
      }), this.mover_.moveTo(0 == this.video_.currentTime ? a : this.video_.currentTime))
    };
    shaka.media.VideoWrapper.prototype.startListeningToSeeks_ = function () {
      var a = this;
      goog.asserts.assert(0 < this.video_.readyState, "The media element should be ready before we listen for seeking.");
      this.started_ = !0;
      this.eventManager_.listen(this.video_, "seeking", function () {
        return a.onSeek_()
      })
    };
    shaka.media.VideoWrapper.PlayheadMover = function (a, b) {
      var c = this;
      this.mediaElement_ = a;
      this.maxAttempts_ = b;
      this.targetTime_ = this.originTime_ = this.remainingAttempts_ = 0;
      this.timer_ = new shaka.util.Timer(function () {
        return c.onTick_()
      })
    };
    shaka.media.VideoWrapper.PlayheadMover.prototype.release = function () {
      this.timer_ && (this.timer_.stop(), this.timer_ = null);
      this.mediaElement_ = null
    };
    shaka.media.VideoWrapper.PlayheadMover.prototype.moveTo = function (a) {
      this.originTime_ = this.mediaElement_.currentTime;
      this.targetTime_ = a;
      this.remainingAttempts_ = this.maxAttempts_;
      this.mediaElement_.currentTime = a;
      this.timer_.tickEvery(.1)
    };
    shaka.media.VideoWrapper.PlayheadMover.prototype.onTick_ = function () {
      0 >= this.remainingAttempts_ ? (shaka.log.warning(["Failed to move playhead from", this.originTime_, "to", this.targetTime_].join(" ")), this.timer_.stop()) : this.mediaElement_.currentTime != this.originTime_ ? this.timer_.stop() : (this.mediaElement_.currentTime = this.targetTime_, this.remainingAttempts_--)
    };
    shaka.media.Playhead = function () {
    };
    shaka.media.Playhead.prototype.setStartTime = function (a) {
    };
    shaka.media.Playhead.prototype.getTime = function () {
    };
    shaka.media.Playhead.prototype.notifyOfBufferingChange = function () {
    };
    shaka.media.SrcEqualsPlayhead = function (a) {
      var b = this;
      this.mediaElement_ = a;
      this.started_ = !1;
      this.startTime_ = null;
      this.eventManager_ = new shaka.util.EventManager;
      var c = function () {
        null == b.startTime_ ? b.started_ = !0 : (b.eventManager_.listenOnce(b.mediaElement_, "seeking", function () {
          b.started_ = !0
        }), b.mediaElement_.currentTime = Math.max(0, b.mediaElement_.currentTime + b.startTime_))
      };
      shaka.util.MediaReadyState.waitForReadyState(this.mediaElement_, HTMLMediaElement.HAVE_CURRENT_DATA, this.eventManager_, function () {
        c()
      })
    };
    shaka.media.SrcEqualsPlayhead.prototype.release = function () {
      this.eventManager_ && (this.eventManager_.release(), this.eventManager_ = null);
      this.mediaElement_ = null
    };
    shaka.media.SrcEqualsPlayhead.prototype.setStartTime = function (a) {
      this.startTime_ = this.started_ ? this.startTime_ : a
    };
    shaka.media.SrcEqualsPlayhead.prototype.getTime = function () {
      return (this.started_ ? this.mediaElement_.currentTime : this.startTime_) || 0
    };
    shaka.media.SrcEqualsPlayhead.prototype.notifyOfBufferingChange = function () {
    };
    shaka.media.MediaSourcePlayhead = function (a, b, c, d, e, f) {
      var g = this;
      this.minSeekRange_ = 3;
      this.mediaElement_ = a;
      this.timeline_ = b.presentationTimeline;
      this.minBufferTime_ = b.minBufferTime || 0;
      this.config_ = c;
      this.onSeek_ = e;
      this.lastCorrectiveSeek_ = null;
      this.gapController_ = new shaka.media.GapJumpingController(a, b.presentationTimeline, c, this.createStallDetector_(a, c), f);
      this.videoWrapper_ = new shaka.media.VideoWrapper(a, function () {
        return g.onSeeking_()
      }, this.getStartTime_(d));
      this.checkWindowTimer_ = (new shaka.util.Timer(function () {
        g.onPollWindow_()
      })).tickEvery(.25)
    };
    shaka.media.MediaSourcePlayhead.prototype.release = function () {
      this.videoWrapper_ && (this.videoWrapper_.release(), this.videoWrapper_ = null);
      this.gapController_ && (this.gapController_.release(), this.gapController_ = null);
      this.checkWindowTimer_ && (this.checkWindowTimer_.stop(), this.checkWindowTimer_ = null);
      this.mediaElement_ = this.videoWrapper_ = this.timeline_ = this.config_ = null;
      this.onSeek_ = function () {
      }
    };
    shaka.media.MediaSourcePlayhead.prototype.setStartTime = function (a) {
      this.videoWrapper_.setTime(a)
    };
    shaka.media.MediaSourcePlayhead.prototype.getTime = function () {
      var a = this.videoWrapper_.getTime();
      return 0 < this.mediaElement_.readyState && !this.mediaElement_.paused ? this.clampTime_(a) : a
    };
    shaka.media.MediaSourcePlayhead.prototype.getStartTime_ = function (a) {
      null == a ? a = Infinity > this.timeline_.getDuration() ? this.timeline_.getSeekRangeStart() : this.timeline_.getSeekRangeEnd() : 0 > a && (a = this.timeline_.getSeekRangeEnd() + a);
      return this.clampSeekToDuration_(this.clampTime_(a))
    };
    shaka.media.MediaSourcePlayhead.prototype.notifyOfBufferingChange = function () {
      this.gapController_.onSegmentAppended()
    };
    shaka.media.MediaSourcePlayhead.prototype.onPollWindow_ = function () {
      if (0 != this.mediaElement_.readyState && !this.mediaElement_.paused) {
        var a = this.mediaElement_.currentTime, b = this.timeline_.getSeekRangeStart(),
          c = this.timeline_.getSeekRangeEnd();
        c - b < this.minSeekRange_ && (b = c - this.minSeekRange_);
        a < b && (b = this.reposition_(a), shaka.log.info("Jumping forward " + (b - a) + " seconds to catch up with the seek range."), this.mediaElement_.currentTime = b)
      }
    };
    shaka.media.MediaSourcePlayhead.prototype.onSeeking_ = function () {
      this.gapController_.onSeeking();
      var a = this.videoWrapper_.getTime(), b = this.reposition_(a);
      if (Math.abs(b - a) > shaka.media.GapJumpingController.BROWSER_GAP_TOLERANCE) {
        var c = (new Date).getTime() / 1E3;
        if (!this.lastCorrectiveSeek_ || this.lastCorrectiveSeek_ < c - 1) {
          this.lastCorrectiveSeek_ = c;
          this.videoWrapper_.setTime(b);
          return
        }
      }
      shaka.log.v1("Seek to " + a);
      this.onSeek_()
    };
    shaka.media.MediaSourcePlayhead.prototype.clampSeekToDuration_ = function (a) {
      var b = this.timeline_.getDuration();
      return a >= b ? (goog.asserts.assert(0 <= this.config_.durationBackoff, "Duration backoff must be non-negative!"), b - this.config_.durationBackoff) : a
    };
    shaka.media.MediaSourcePlayhead.prototype.reposition_ = function (a) {
      goog.asserts.assert(this.config_, "Cannot reposition playhead when it has beeen destroyed");
      var b = Math.max(this.minBufferTime_, this.config_.rebufferingGoal), c = this.config_.safeSeekOffset,
        d = this.timeline_.getSeekRangeStart(), e = this.timeline_.getSeekRangeEnd(), f = this.timeline_.getDuration();
      e - d < this.minSeekRange_ && (d = e - this.minSeekRange_);
      var g = this.timeline_.getSafeSeekRangeStart(b), h = this.timeline_.getSafeSeekRangeStart(c);
      b = this.timeline_.getSafeSeekRangeStart(b +
        c);
      if (a >= f) return shaka.log.v1("Playhead past duration."), this.clampSeekToDuration_(a);
      if (a > e) return shaka.log.v1("Playhead past end."), e;
      if (a < d) {
        if (shaka.media.TimeRangesUtils.isBuffered(this.mediaElement_.buffered, h)) return shaka.log.v1("Playhead before start & start is buffered"), h;
        shaka.log.v1("Playhead before start & start is unbuffered");
        return b
      }
      if (a >= g || shaka.media.TimeRangesUtils.isBuffered(this.mediaElement_.buffered, a)) return shaka.log.v1("Playhead in safe region or in buffered region."),
        a;
      shaka.log.v1("Playhead outside safe region & in unbuffered region.");
      return b
    };
    shaka.media.MediaSourcePlayhead.prototype.clampTime_ = function (a) {
      var b = this.timeline_.getSeekRangeStart();
      if (a < b) return b;
      b = this.timeline_.getSeekRangeEnd();
      return a > b ? b : a
    };
    shaka.media.MediaSourcePlayhead.prototype.createStallDetector_ = function (a, b) {
      if (!b.stallEnabled) return null;
      var c = b.stallThreshold, d = b.stallSkip;
      c = new shaka.media.StallDetector(new shaka.media.StallDetector.MediaElementImplementation(a), c);
      c.onStall(function (b, c) {
        shaka.log.debug("Stall detected at " + b + " for " + c + " seconds.");
        d ? (shaka.log.debug("Seeking forward " + d + " seconds to break stall."), a.currentTime += d) : (shaka.log.debug("Pausing and unpausing to break stall."), a.pause(), a.play())
      });
      return c
    };
    shaka.media.PlayRateController = function (a) {
      var b = this;
      this.harness_ = a;
      this.isBuffering_ = !1;
      this.rate_ = this.harness_.getRate();
      this.pollRate_ = .25;
      this.timer_ = new shaka.util.Timer(function () {
        b.harness_.movePlayhead(b.rate_ * b.pollRate_)
      })
    };
    shaka.media.PlayRateController.prototype.release = function () {
      this.timer_ && (this.timer_.stop(), this.timer_ = null);
      this.harness_ = null
    };
    shaka.media.PlayRateController.prototype.setBuffering = function (a) {
      this.isBuffering_ = a;
      this.apply_()
    };
    shaka.media.PlayRateController.prototype.set = function (a) {
      goog.asserts.assert(0 != a, "Should never set rate of 0 explicitly!");
      this.rate_ = a;
      this.apply_()
    };
    shaka.media.PlayRateController.prototype.getRealRate = function () {
      return this.rate_
    };
    shaka.media.PlayRateController.prototype.apply_ = function () {
      this.timer_.stop();
      var a = this.calculateCurrentRate_();
      shaka.log.v1("Changing effective playback rate to", a);
      if (0 <= a) try {
        this.applyRate_(a);
        return
      } catch (b) {
      }
      this.timer_.tickEvery(this.pollRate_);
      this.applyRate_(0)
    };
    shaka.media.PlayRateController.prototype.calculateCurrentRate_ = function () {
      return this.isBuffering_ ? 0 : this.rate_
    };
    shaka.media.PlayRateController.prototype.applyRate_ = function (a) {
      var b = this.harness_.getRate();
      b != a && this.harness_.setRate(a);
      return b != a
    };
    shaka.media.IPlayheadObserver = function () {
    };
    shaka.media.IPlayheadObserver.prototype.poll = function (a, b) {
    };
    shaka.media.PlayheadObserverManager = function (a) {
      var b = this;
      this.mediaElement_ = a;
      this.observers_ = new Set;
      this.pollingLoop_ = (new shaka.util.Timer(function () {
        b.pollAllObservers_(!1)
      })).tickEvery(.25)
    };
    shaka.media.PlayheadObserverManager.prototype.release = function () {
      this.pollingLoop_.stop();
      for (var a = $jscomp.makeIterator(this.observers_), b = a.next(); !b.done; b = a.next()) b.value.release();
      this.observers_.clear()
    };
    shaka.media.PlayheadObserverManager.prototype.manage = function (a) {
      this.observers_.add(a)
    };
    shaka.media.PlayheadObserverManager.prototype.notifyOfSeek = function () {
      this.pollAllObservers_(!0)
    };
    shaka.media.PlayheadObserverManager.prototype.pollAllObservers_ = function (a) {
      for (var b = $jscomp.makeIterator(this.observers_), c = b.next(); !c.done; c = b.next()) c.value.poll(this.mediaElement_.currentTime, a)
    };
    shaka.media.RegionTimeline = function (a) {
      var b = this;
      this.onAddRegion_ = function (a) {
      };
      this.regions_ = new Set;
      this.getSeekRange_ = a;
      this.filterTimer_ = (new shaka.util.Timer(function () {
        b.filterBySeekRange_()
      })).tickEvery(shaka.media.RegionTimeline.REGION_FILTER_INTERVAL)
    };
    shaka.media.RegionTimeline.prototype.release = function () {
      this.onAddRegion_ = function (a) {
      };
      this.regions_.clear();
      this.filterTimer_.stop()
    };
    shaka.media.RegionTimeline.prototype.setListeners = function (a) {
      this.onAddRegion_ = a
    };
    shaka.media.RegionTimeline.prototype.addRegion = function (a) {
      null == this.findSimilarRegion_(a) && (this.regions_.add(a), this.onAddRegion_(a))
    };
    shaka.media.RegionTimeline.prototype.filterBySeekRange_ = function () {
      for (var a = this.getSeekRange_(), b = $jscomp.makeIterator(this.regions_), c = b.next(); !c.done; c = b.next()) c = c.value, c.endTime < a.start && this.regions_["delete"](c)
    };
    shaka.media.RegionTimeline.prototype.findSimilarRegion_ = function (a) {
      for (var b = $jscomp.makeIterator(this.regions_), c = b.next(); !c.done; c = b.next()) if (c = c.value, c.schemeIdUri == a.schemeIdUri && c.id == a.id && c.startTime == a.startTime && c.endTime == a.endTime) return c;
      return null
    };
    shaka.media.RegionTimeline.prototype.regions = function () {
      return this.regions_
    };
    shaka.media.RegionTimeline.REGION_FILTER_INTERVAL = 2;
    shaka.media.RegionObserver = function (a) {
      var b = this;
      this.timeline_ = a;
      this.oldPosition_ = new Map;
      this.onEnter_ = function (a, b) {
      };
      this.onExit_ = function (a, b) {
      };
      this.onSkip_ = function (a, b) {
      };
      var c = shaka.media.RegionObserver.RelativePosition_;
      a = c.BEFORE_THE_REGION;
      var d = c.IN_THE_REGION;
      c = c.AFTER_THE_REGION;
      this.rules_ = [{
        weWere: null, weAre: d, invoke: function (a, c) {
          return b.onEnter_(a, c)
        }
      }, {
        weWere: a, weAre: d, invoke: function (a, c) {
          return b.onEnter_(a, c)
        }
      }, {
        weWere: c, weAre: d, invoke: function (a, c) {
          return b.onEnter_(a, c)
        }
      },
        {
          weWere: d, weAre: a, invoke: function (a, c) {
            return b.onExit_(a, c)
          }
        }, {
          weWere: d, weAre: c, invoke: function (a, c) {
            return b.onExit_(a, c)
          }
        }, {
          weWere: a, weAre: c, invoke: function (a, c) {
            return b.onSkip_(a, c)
          }
        }, {
          weWere: c, weAre: a, invoke: function (a, c) {
            return b.onSkip_(a, c)
          }
        }]
    };
    shaka.media.RegionObserver.prototype.release = function () {
      this.timeline_ = null;
      this.oldPosition_.clear();
      this.onEnter_ = function (a, b) {
      };
      this.onExit_ = function (a, b) {
      };
      this.onSkip_ = function (a, b) {
      }
    };
    shaka.media.RegionObserver.prototype.poll = function (a, b) {
      for (var c = shaka.media.RegionObserver, d = $jscomp.makeIterator(this.timeline_.regions()), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        var f = this.oldPosition_.get(e), g = c.determinePositionRelativeTo_(e, a);
        this.oldPosition_.set(e, g);
        for (var h = $jscomp.makeIterator(this.rules_), k = h.next(); !k.done; k = h.next()) k = k.value, k.weWere == f && k.weAre == g && k.invoke(e, b)
      }
    };
    shaka.media.RegionObserver.prototype.setListeners = function (a, b, c) {
      this.onEnter_ = a;
      this.onExit_ = b;
      this.onSkip_ = c
    };
    shaka.media.RegionObserver.determinePositionRelativeTo_ = function (a, b) {
      var c = shaka.media.RegionObserver.RelativePosition_;
      return b < a.startTime ? c.BEFORE_THE_REGION : b > a.endTime ? c.AFTER_THE_REGION : c.IN_THE_REGION
    };
    shaka.media.RegionObserver.RelativePosition_ = {BEFORE_THE_REGION: 1, IN_THE_REGION: 2, AFTER_THE_REGION: 3};
    shaka.media.SegmentIndex = function (a) {
      goog.DEBUG && shaka.media.SegmentIndex.assertCorrectReferences_(a);
      this.references = a;
      this.timer_ = null;
      this.numEvicted = 0
    };
    shaka.media.SegmentIndex.prototype.destroy = function () {
      shaka.Deprecate.deprecateFeature(4, "shaka.media.SegmentIndex", "Please use release() instead of destroy().");
      this.release();
      return Promise.resolve()
    };
    shaka.media.SegmentIndex.prototype.release = function () {
      this.references = [];
      this.timer_ && this.timer_.stop();
      this.timer_ = null
    };
    shaka.media.SegmentIndex.prototype.find = function (a) {
      for (var b = this.references.length - 1; 0 <= b; --b) {
        var c = this.references[b];
        if (a >= c.startTime && a < c.endTime) return b + this.numEvicted
      }
      return this.references.length && a < this.references[0].startTime ? this.numEvicted : null
    };
    shaka.media.SegmentIndex.prototype.get = function (a) {
      if (0 == this.references.length) return null;
      a -= this.numEvicted;
      return 0 > a || a >= this.references.length ? null : this.references[a]
    };
    shaka.media.SegmentIndex.prototype.offset = function (a) {
      for (var b = $jscomp.makeIterator(this.references), c = b.next(); !c.done; c = b.next()) c = c.value, c.startTime += a, c.endTime += a, c.timestampOffset += a
    };
    shaka.media.SegmentIndex.prototype.merge = function (a) {
      goog.DEBUG && shaka.media.SegmentIndex.assertCorrectReferences_(a);
      var b = this.references[this.references.length - 1], c = [];
      c = this.references.length ? a.filter(function (a) {
        return a.startTime >= b.startTime
      }) : a;
      b && c.length && c[0].startTime == b.startTime && this.references.pop();
      this.references.push.apply(this.references, $jscomp.arrayFromIterable(c));
      goog.DEBUG && shaka.media.SegmentIndex.assertCorrectReferences_(this.references)
    };
    shaka.media.SegmentIndex.prototype.evict = function (a) {
      var b = this.references.length;
      this.references = this.references.filter(function (b) {
        return b.endTime > a
      });
      this.numEvicted += b - this.references.length
    };
    shaka.media.SegmentIndex.prototype.fit = function (a, b) {
      goog.asserts.assert(null != b, "Content duration must be known for static content!");
      for (goog.asserts.assert(Infinity != b, "Content duration must be finite for static content!"); this.references.length;) if (this.references[this.references.length - 1].startTime >= b) this.references.pop(); else break;
      for (; this.references.length;) if (this.references[0].endTime <= a) this.references.shift(), this.numEvicted++; else break;
      if (0 != this.references.length) {
        var c = this.references[this.references.length -
        1];
        this.references[this.references.length - 1] = new shaka.media.SegmentReference(c.startTime, b, c.getUris, c.startByte, c.endByte, c.initSegmentReference, c.timestampOffset, c.appendWindowStart, c.appendWindowEnd)
      }
    };
    shaka.media.SegmentIndex.prototype.updateEvery = function (a, b) {
      var c = this;
      goog.asserts.assert(!this.timer_, "SegmentIndex timer already started!");
      this.timer_ && this.timer_.stop();
      this.timer_ = new shaka.util.Timer(function () {
        var a = b();
        c.references.push.apply(c.references, $jscomp.arrayFromIterable(a));
        0 == c.references.length && (c.timer_.stop(), c.timer_ = null)
      });
      this.timer_.tickEvery(a)
    };
    shaka.media.SegmentIndex.prototype[Symbol.iterator] = function () {
      return new shaka.media.SegmentIterator(this)
    };
    shaka.media.SegmentIndex.forSingleSegment = function (a, b, c) {
      a = new shaka.media.SegmentReference(a, a + b, function () {
        return c
      }, 0, null, null, a, a, a + b);
      return new shaka.media.SegmentIndex([a])
    };
    goog.exportSymbol("shaka.media.SegmentIndex", shaka.media.SegmentIndex);
    goog.exportProperty(shaka.media.SegmentIndex, "forSingleSegment", shaka.media.SegmentIndex.forSingleSegment);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "updateEvery", shaka.media.SegmentIndex.prototype.updateEvery);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "fit", shaka.media.SegmentIndex.prototype.fit);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "evict", shaka.media.SegmentIndex.prototype.evict);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "merge", shaka.media.SegmentIndex.prototype.merge);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "offset", shaka.media.SegmentIndex.prototype.offset);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "get", shaka.media.SegmentIndex.prototype.get);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "find", shaka.media.SegmentIndex.prototype.find);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "release", shaka.media.SegmentIndex.prototype.release);
    goog.exportProperty(shaka.media.SegmentIndex.prototype, "destroy", shaka.media.SegmentIndex.prototype.destroy);
    goog.DEBUG && (shaka.media.SegmentIndex.assertCorrectReferences_ = function (a) {
      goog.asserts.assert(a.every(function (b, c) {
        if (0 == c) return !0;
        var d = a[c - 1];
        return d.startTime < b.startTime ? !0 : d.startTime > b.startTime ? !1 : d.endTime <= b.endTime ? !0 : !1
      }), "SegmentReferences are incorrect")
    });
    shaka.media.SegmentIterator = function (a) {
      this.segmentIndex_ = a;
      this.nextPosition_ = this.segmentIndex_.find(0) || 0
    };
    shaka.media.SegmentIterator.prototype.seek = function (a) {
      a = this.segmentIndex_.find(a);
      if (null == a) return this.nextPosition_ = Math.pow(2, 31), null;
      this.nextPosition_ = a;
      return this.segmentIndex_.get(this.nextPosition_++)
    };
    shaka.media.SegmentIterator.prototype.current = function () {
      return this.segmentIndex_.get(this.nextPosition_ - 1)
    };
    shaka.media.SegmentIterator.prototype.next = function () {
      var a = this.segmentIndex_.get(this.nextPosition_++);
      return {value: a, done: !a}
    };
    goog.exportSymbol("shaka.media.SegmentIterator", shaka.media.SegmentIterator);
    goog.exportProperty(shaka.media.SegmentIterator.prototype, "next", shaka.media.SegmentIterator.prototype.next);
    goog.exportProperty(shaka.media.SegmentIterator.prototype, "current", shaka.media.SegmentIterator.prototype.current);
    goog.exportProperty(shaka.media.SegmentIterator.prototype, "seek", shaka.media.SegmentIterator.prototype.seek);
    shaka.media.MetaSegmentIndex = function () {
      shaka.media.SegmentIndex.call(this, []);
      this.indexes_ = []
    };
    $jscomp.inherits(shaka.media.MetaSegmentIndex, shaka.media.SegmentIndex);
    shaka.media.MetaSegmentIndex.assertCorrectReferences_ = shaka.media.SegmentIndex.assertCorrectReferences_;
    shaka.media.MetaSegmentIndex.forSingleSegment = shaka.media.SegmentIndex.forSingleSegment;
    shaka.media.MetaSegmentIndex.prototype.appendSegmentIndex = function (a) {
      this.indexes_.push(a)
    };
    shaka.media.MetaSegmentIndex.prototype.clone = function () {
      var a = new shaka.media.MetaSegmentIndex;
      a.indexes_ = this.indexes_.slice();
      return a
    };
    shaka.media.MetaSegmentIndex.prototype.release = function () {
      for (var a = $jscomp.makeIterator(this.indexes_), b = a.next(); !b.done; b = a.next()) b.value.release();
      this.indexes_ = []
    };
    shaka.media.MetaSegmentIndex.prototype.find = function (a) {
      for (var b = 0, c = $jscomp.makeIterator(this.indexes_), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = d.find(a);
        if (null != e) return e + b;
        b += d.numEvicted + d.references.length
      }
      return null
    };
    shaka.media.MetaSegmentIndex.prototype.get = function (a) {
      for (var b = 0, c = $jscomp.makeIterator(this.indexes_), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = d.get(a - b);
        if (e) return e;
        b += d.numEvicted + d.references.length
      }
      return null
    };
    shaka.media.MetaSegmentIndex.prototype.offset = function (a) {
      goog.asserts.assert(!1, "offset() should not be used in MetaSegmentIndex!")
    };
    shaka.media.MetaSegmentIndex.prototype.merge = function (a) {
      goog.asserts.assert(!1, "merge() should not be used in MetaSegmentIndex!")
    };
    shaka.media.MetaSegmentIndex.prototype.evict = function (a) {
      goog.asserts.assert(!1, "evict() should not be used in MetaSegmentIndex!")
    };
    shaka.media.MetaSegmentIndex.prototype.fit = function (a, b) {
      goog.asserts.assert(!1, "fit() should not be used in MetaSegmentIndex!")
    };
    shaka.media.MetaSegmentIndex.prototype.updateEvery = function (a, b) {
      goog.asserts.assert(!1, "updateEvery() should not be used in MetaSegmentIndex!")
    };
    goog.exportSymbol("shaka.media.MetaSegmentIndex", shaka.media.MetaSegmentIndex);
    goog.exportProperty(shaka.media.MetaSegmentIndex.prototype, "updateEvery", shaka.media.MetaSegmentIndex.prototype.updateEvery);
    goog.exportProperty(shaka.media.MetaSegmentIndex.prototype, "fit", shaka.media.MetaSegmentIndex.prototype.fit);
    goog.exportProperty(shaka.media.MetaSegmentIndex.prototype, "evict", shaka.media.MetaSegmentIndex.prototype.evict);
    goog.exportProperty(shaka.media.MetaSegmentIndex.prototype, "merge", shaka.media.MetaSegmentIndex.prototype.merge);
    goog.exportProperty(shaka.media.MetaSegmentIndex.prototype, "offset", shaka.media.MetaSegmentIndex.prototype.offset);
    goog.exportProperty(shaka.media.MetaSegmentIndex.prototype, "get", shaka.media.MetaSegmentIndex.prototype.get);
    goog.exportProperty(shaka.media.MetaSegmentIndex.prototype, "find", shaka.media.MetaSegmentIndex.prototype.find);
    goog.exportProperty(shaka.media.MetaSegmentIndex.prototype, "release", shaka.media.MetaSegmentIndex.prototype.release);
    shaka.util.DataViewReader = function (a, b) {
      this.dataView_ = shaka.util.BufferUtils.toDataView(a);
      this.littleEndian_ = b == shaka.util.DataViewReader.Endianness.LITTLE_ENDIAN;
      this.position_ = 0
    };
    shaka.util.DataViewReader.prototype.getDataView = function () {
      return this.dataView_
    };
    shaka.util.DataViewReader.prototype.hasMoreData = function () {
      return this.position_ < this.dataView_.byteLength
    };
    shaka.util.DataViewReader.prototype.getPosition = function () {
      return this.position_
    };
    shaka.util.DataViewReader.prototype.getLength = function () {
      return this.dataView_.byteLength
    };
    shaka.util.DataViewReader.prototype.readUint8 = function () {
      try {
        var a = this.dataView_.getUint8(this.position_);
        this.position_ += 1;
        return a
      } catch (b) {
        throw this.outOfBounds_();
      }
    };
    shaka.util.DataViewReader.prototype.readUint16 = function () {
      try {
        var a = this.dataView_.getUint16(this.position_, this.littleEndian_);
        this.position_ += 2;
        return a
      } catch (b) {
        throw this.outOfBounds_();
      }
    };
    shaka.util.DataViewReader.prototype.readUint32 = function () {
      try {
        var a = this.dataView_.getUint32(this.position_, this.littleEndian_);
        this.position_ += 4;
        return a
      } catch (b) {
        throw this.outOfBounds_();
      }
    };
    shaka.util.DataViewReader.prototype.readInt32 = function () {
      try {
        var a = this.dataView_.getInt32(this.position_, this.littleEndian_);
        this.position_ += 4;
        return a
      } catch (b) {
        throw this.outOfBounds_();
      }
    };
    shaka.util.DataViewReader.prototype.readUint64 = function () {
      try {
        if (this.littleEndian_) {
          var a = this.dataView_.getUint32(this.position_, !0);
          var b = this.dataView_.getUint32(this.position_ + 4, !0)
        } else b = this.dataView_.getUint32(this.position_, !1), a = this.dataView_.getUint32(this.position_ + 4, !1)
      } catch (c) {
        throw this.outOfBounds_();
      }
      if (2097151 < b) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.JS_INTEGER_OVERFLOW);
      this.position_ += 8;
      return b * Math.pow(2,
        32) + a
    };
    shaka.util.DataViewReader.prototype.readBytes = function (a) {
      goog.asserts.assert(0 <= a, "Bad call to DataViewReader.readBytes");
      if (this.position_ + a > this.dataView_.byteLength) throw this.outOfBounds_();
      var b = shaka.util.BufferUtils.toUint8(this.dataView_, this.position_, a);
      this.position_ += a;
      return b
    };
    shaka.util.DataViewReader.prototype.skip = function (a) {
      goog.asserts.assert(0 <= a, "Bad call to DataViewReader.skip");
      if (this.position_ + a > this.dataView_.byteLength) throw this.outOfBounds_();
      this.position_ += a
    };
    shaka.util.DataViewReader.prototype.rewind = function (a) {
      goog.asserts.assert(0 <= a, "Bad call to DataViewReader.rewind");
      if (this.position_ < a) throw this.outOfBounds_();
      this.position_ -= a
    };
    shaka.util.DataViewReader.prototype.seek = function (a) {
      goog.asserts.assert(0 <= a, "Bad call to DataViewReader.seek");
      if (0 > a || a > this.dataView_.byteLength) throw this.outOfBounds_();
      this.position_ = a
    };
    shaka.util.DataViewReader.prototype.readTerminatedString = function () {
      for (var a = this.position_; this.hasMoreData() && 0 != this.dataView_.getUint8(this.position_);) this.position_ += 1;
      a = shaka.util.BufferUtils.toUint8(this.dataView_, a, this.position_ - a);
      this.position_ += 1;
      return shaka.util.StringUtils.fromUTF8(a)
    };
    shaka.util.DataViewReader.prototype.outOfBounds_ = function () {
      return new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.BUFFER_READ_OUT_OF_BOUNDS)
    };
    goog.exportSymbol("shaka.util.DataViewReader", shaka.util.DataViewReader);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "readTerminatedString", shaka.util.DataViewReader.prototype.readTerminatedString);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "seek", shaka.util.DataViewReader.prototype.seek);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "rewind", shaka.util.DataViewReader.prototype.rewind);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "skip", shaka.util.DataViewReader.prototype.skip);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "readBytes", shaka.util.DataViewReader.prototype.readBytes);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "readUint64", shaka.util.DataViewReader.prototype.readUint64);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "readInt32", shaka.util.DataViewReader.prototype.readInt32);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "readUint32", shaka.util.DataViewReader.prototype.readUint32);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "readUint16", shaka.util.DataViewReader.prototype.readUint16);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "readUint8", shaka.util.DataViewReader.prototype.readUint8);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "getLength", shaka.util.DataViewReader.prototype.getLength);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "getPosition", shaka.util.DataViewReader.prototype.getPosition);
    goog.exportProperty(shaka.util.DataViewReader.prototype, "hasMoreData", shaka.util.DataViewReader.prototype.hasMoreData);
    shaka.util.DataViewReader.Endianness = {BIG_ENDIAN: 0, LITTLE_ENDIAN: 1};
    goog.exportProperty(shaka.util.DataViewReader, "Endianness", shaka.util.DataViewReader.Endianness);
    shaka.util.Mp4Parser = function () {
      this.headers_ = [];
      this.boxDefinitions_ = [];
      this.done_ = !1
    };
    shaka.util.Mp4Parser.prototype.box = function (a, b) {
      var c = shaka.util.Mp4Parser.typeFromString_(a);
      this.headers_[c] = shaka.util.Mp4Parser.BoxType_.BASIC_BOX;
      this.boxDefinitions_[c] = b;
      return this
    };
    shaka.util.Mp4Parser.prototype.fullBox = function (a, b) {
      var c = shaka.util.Mp4Parser.typeFromString_(a);
      this.headers_[c] = shaka.util.Mp4Parser.BoxType_.FULL_BOX;
      this.boxDefinitions_[c] = b;
      return this
    };
    shaka.util.Mp4Parser.prototype.stop = function () {
      this.done_ = !0
    };
    shaka.util.Mp4Parser.prototype.parse = function (a, b) {
      var c = new shaka.util.DataViewReader(a, shaka.util.DataViewReader.Endianness.BIG_ENDIAN);
      for (this.done_ = !1; c.hasMoreData() && !this.done_;) this.parseNext(0, c, b)
    };
    shaka.util.Mp4Parser.prototype.parseNext = function (a, b, c) {
      var d = b.getPosition(), e = b.readUint32(), f = b.readUint32(), g = shaka.util.Mp4Parser.typeToString(f);
      shaka.log.v2("Parsing MP4 box", g);
      switch (e) {
        case 0:
          e = b.getLength() - d;
          break;
        case 1:
          e = b.readUint64()
      }
      if (g = this.boxDefinitions_[f]) {
        var h = null, k = null;
        this.headers_[f] == shaka.util.Mp4Parser.BoxType_.FULL_BOX && (k = b.readUint32(), h = k >>> 24, k &= 16777215);
        f = d + e;
        c && f > b.getLength() && (f = b.getLength());
        f -= b.getPosition();
        b = 0 < f ? b.readBytes(f) : new Uint8Array(0);
        b =
          new shaka.util.DataViewReader(b, shaka.util.DataViewReader.Endianness.BIG_ENDIAN);
        g({parser: this, partialOkay: c || !1, version: h, flags: k, reader: b, size: e, start: d + a})
      } else a = Math.min(d + e - b.getPosition(), b.getLength() - b.getPosition()), b.skip(a)
    };
    shaka.util.Mp4Parser.children = function (a) {
      for (var b = null != a.flags ? 12 : 8; a.reader.hasMoreData() && !a.parser.done_;) a.parser.parseNext(a.start + b, a.reader, a.partialOkay)
    };
    shaka.util.Mp4Parser.sampleDescription = function (a) {
      var b = null != a.flags ? 12 : 8, c = a.reader.readUint32();
      c = $jscomp.makeIterator(shaka.util.Iterables.range(c));
      for (var d = c.next(); !d.done && (shaka.util.Functional.ignored(d.value), a.parser.parseNext(a.start + b, a.reader, a.partialOkay), !a.parser.done_); d = c.next()) ;
    };
    shaka.util.Mp4Parser.allData = function (a) {
      return function (b) {
        var c = b.reader.getLength() - b.reader.getPosition();
        a(b.reader.readBytes(c))
      }
    };
    shaka.util.Mp4Parser.typeFromString_ = function (a) {
      goog.asserts.assert(4 == a.length, "Mp4 box names must be 4 characters long");
      var b = 0;
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) b = b << 8 | c.value.charCodeAt(0);
      return b
    };
    shaka.util.Mp4Parser.typeToString = function (a) {
      return String.fromCharCode(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255)
    };
    goog.exportSymbol("shaka.util.Mp4Parser", shaka.util.Mp4Parser);
    goog.exportProperty(shaka.util.Mp4Parser, "typeToString", shaka.util.Mp4Parser.typeToString);
    goog.exportProperty(shaka.util.Mp4Parser, "allData", shaka.util.Mp4Parser.allData);
    goog.exportProperty(shaka.util.Mp4Parser, "sampleDescription", shaka.util.Mp4Parser.sampleDescription);
    goog.exportProperty(shaka.util.Mp4Parser, "children", shaka.util.Mp4Parser.children);
    goog.exportProperty(shaka.util.Mp4Parser.prototype, "parseNext", shaka.util.Mp4Parser.prototype.parseNext);
    goog.exportProperty(shaka.util.Mp4Parser.prototype, "parse", shaka.util.Mp4Parser.prototype.parse);
    goog.exportProperty(shaka.util.Mp4Parser.prototype, "stop", shaka.util.Mp4Parser.prototype.stop);
    goog.exportProperty(shaka.util.Mp4Parser.prototype, "fullBox", shaka.util.Mp4Parser.prototype.fullBox);
    goog.exportProperty(shaka.util.Mp4Parser.prototype, "box", shaka.util.Mp4Parser.prototype.box);
    shaka.util.Mp4Parser.BoxType_ = {BASIC_BOX: 0, FULL_BOX: 1};
    shaka.util.Networking = function () {
    };
    shaka.util.Networking.createSegmentRequest = function (a, b, c, d) {
      a = shaka.net.NetworkingEngine.makeRequest(a, d);
      if (0 != b || null != c) a.headers.Range = c ? "bytes=" + b + "-" + c : "bytes=" + b + "-";
      return a
    };
    shaka.media.StreamingEngine = function (a, b) {
      var c = this;
      this.playerInterface_ = b;
      this.manifest_ = a;
      this.config_ = null;
      this.bufferingGoalScale_ = 1;
      this.currentTextStream_ = this.currentVariant_ = null;
      this.mediaStates_ = new Map;
      this.startupComplete_ = !1;
      this.failureCallbackBackoff_ = null;
      this.fatalError_ = !1;
      this.destroyer_ = new shaka.util.Destroyer(function () {
        return c.doDestroy_()
      })
    };
    shaka.media.StreamingEngine.prototype.destroy = function () {
      return this.destroyer_.destroy()
    };
    shaka.media.StreamingEngine.prototype.doDestroy_ = function () {
      var a = this, b, c, d, e;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        if (1 == f.nextAddress) {
          b = [];
          c = $jscomp.makeIterator(a.mediaStates_.values());
          for (d = c.next(); !d.done; d = c.next()) e = d.value, a.cancelUpdate_(e), b.push(a.abortOperations_(e));
          return f.yield(Promise.all(b), 2)
        }
        a.mediaStates_.clear();
        a.playerInterface_ = null;
        a.manifest_ = null;
        a.config_ = null;
        f.jumpToEnd()
      })
    };
    shaka.media.StreamingEngine.prototype.configure = function (a) {
      this.config_ = a;
      this.failureCallbackBackoff_ = new shaka.net.Backoff({
        maxAttempts: Math.max(a.retryParameters.maxAttempts, 2),
        baseDelay: a.retryParameters.baseDelay,
        backoffFactor: a.retryParameters.backoffFactor,
        fuzzFactor: a.retryParameters.fuzzFactor,
        timeout: 0
      }, !0)
    };
    shaka.media.StreamingEngine.prototype.start = function () {
      var a = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        if (1 == b.nextAddress) return goog.asserts.assert(a.config_, "StreamingEngine configure() must be called before init()!"), b.yield(a.initStreams_(), 2);
        a.destroyer_.ensureNotDestroyed();
        shaka.log.debug("init: completed initial Stream setup");
        a.startupComplete_ = !0;
        b.jumpToEnd()
      })
    };
    shaka.media.StreamingEngine.prototype.getCurrentVariant = function () {
      return this.currentVariant_
    };
    shaka.media.StreamingEngine.prototype.getCurrentTextStream = function () {
      return this.currentTextStream_
    };
    shaka.media.StreamingEngine.prototype.loadNewTextStream_ = function (a) {
      var b = this, c, d, e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        switch (k.nextAddress) {
          case 1:
            return c = shaka.util.ManifestParserUtils.ContentType, goog.asserts.assert(!b.mediaStates_.has(c.TEXT), "Should not call loadNewTextStream_ while streaming text!"), k.setCatchFinallyBlocks(2), k.yield(b.playerInterface_.mediaSourceEngine.clear(c.TEXT), 4);
          case 4:
            k.leaveTryBlock(3);
            break;
          case 2:
            if (d = k.enterCatchBlock(), b.playerInterface_) b.playerInterface_.onError(d);
          case 3:
            e = shaka.util.MimeUtils.getFullType(a.mimeType, a.codecs);
            b.playerInterface_.mediaSourceEngine.reinitText(e);
            f = b.playerInterface_.mediaSourceEngine.getTextDisplayer();
            if (g = f.isTextVisible() || b.config_.alwaysStreamText) h = b.createMediaState_(a), b.mediaStates_.set(c.TEXT, h), b.scheduleUpdate_(h, 0);
            k.jumpToEnd()
        }
      })
    };
    shaka.media.StreamingEngine.prototype.unloadTextStream = function () {
      var a = shaka.util.ManifestParserUtils.ContentType, b = this.mediaStates_.get(a.TEXT);
      b && (this.cancelUpdate_(b), this.abortOperations_(b)["catch"](function () {
      }), this.mediaStates_["delete"](a.TEXT));
      this.currentTextStream_ = null
    };
    shaka.media.StreamingEngine.prototype.setTrickPlay = function (a) {
      var b = this.mediaStates_.get(shaka.util.ManifestParserUtils.ContentType.VIDEO);
      if (b) {
        var c = b.stream;
        if (c) if (shaka.log.debug("setTrickPlay", a), a) (a = c.trickModeVideo) && !b.restoreStreamAfterTrickPlay && (shaka.log.debug("Engaging trick mode stream", a), this.switchInternal_(a, !1, 0, !1), b.restoreStreamAfterTrickPlay = c); else if (c = b.restoreStreamAfterTrickPlay) shaka.log.debug("Restoring non-trick-mode stream", c), b.restoreStreamAfterTrickPlay = null,
          this.switchInternal_(c, !0, 0, !1)
      }
    };
    shaka.media.StreamingEngine.prototype.switchVariant = function (a, b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 0 : c;
      this.currentVariant_ = a;
      this.startupComplete_ && (a.video && this.switchInternal_(a.video, b, c, !1), a.audio && this.switchInternal_(a.audio, b, c, !1))
    };
    shaka.media.StreamingEngine.prototype.switchTextStream = function (a) {
      this.currentTextStream_ = a;
      if (this.startupComplete_) {
        var b = shaka.util.ManifestParserUtils.ContentType;
        goog.asserts.assert(a && a.type == b.TEXT, "Wrong stream type passed to switchTextStream!");
        this.switchInternal_(a, !0, 0, !1)
      }
    };
    shaka.media.StreamingEngine.prototype.reloadTextStream = function () {
      var a = this.mediaStates_.get(shaka.util.ManifestParserUtils.ContentType.TEXT);
      a && this.switchInternal_(a.stream, !0, 0, !0)
    };
    shaka.media.StreamingEngine.prototype.switchInternal_ = function (a, b, c, d) {
      var e = this, f = shaka.util.ManifestParserUtils.ContentType, g = this.mediaStates_.get(a.type);
      g || a.type != f.TEXT ? (goog.asserts.assert(g, "switch: expected mediaState to exist"), g && (g.restoreStreamAfterTrickPlay && (shaka.log.debug("switch during trick play mode", a), a.trickModeVideo ? (g.restoreStreamAfterTrickPlay = a, a = a.trickModeVideo, shaka.log.debug("switch found trick play stream", a)) : (g.restoreStreamAfterTrickPlay = null, shaka.log.debug("switch found no special trick play stream"))),
        g.stream != a || d ? (a.type == f.TEXT && (d = shaka.util.MimeUtils.getFullType(a.mimeType, a.codecs), this.playerInterface_.mediaSourceEngine.reinitText(d)), g.stream = a, g.segmentIterator = g.stream.segmentIndex ? g.stream.segmentIndex[Symbol.iterator]() : null, a = shaka.media.StreamingEngine.logPrefix_(g), shaka.log.debug("switch: switching to Stream " + a), b && (g.clearingBuffer ? g.waitingToFlushBuffer = !0 : g.performingUpdate ? (g.waitingToClearBuffer = !0, g.clearBufferSafeMargin = c, g.waitingToFlushBuffer = !0) : (this.cancelUpdate_(g),
          this.clearBuffer_(g, !0, c)["catch"](function (a) {
            e.playerInterface_ && (goog.asserts.assert(a instanceof shaka.util.Error, "Wrong error type!"), e.playerInterface_.onError(a))
          }))), this.makeAbortDecision_(g)["catch"](function (a) {
          e.playerInterface_ && (goog.asserts.assert(a instanceof shaka.util.Error, "Wrong error type!"), e.playerInterface_.onError(a))
        })) : (b = shaka.media.StreamingEngine.logPrefix_(g), shaka.log.debug("switch: Stream " + b + " already active")))) : this.loadNewTextStream_(a)
    };
    shaka.media.StreamingEngine.prototype.makeAbortDecision_ = function (a) {
      var b = this, c, d;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress) {
          if (!a.operation) return e["return"]();
          c = a.stream;
          d = a.operation;
          return c.segmentIndex ? e.jumpTo(2) : e.yield(c.createSegmentIndex(), 2)
        }
        if (a.operation != d || a.stream != c) return e["return"]();
        a.segmentIterator = a.stream.segmentIndex[Symbol.iterator]();
        b.shouldAbortCurrentRequest_(a) && (shaka.log.info("Aborting current segment request."), a.operation.abort());
        e.jumpToEnd()
      })
    };
    shaka.media.StreamingEngine.prototype.shouldAbortCurrentRequest_ = function (a) {
      goog.asserts.assert(a.operation, "Abort logic requires an ongoing operation!");
      var b = this.playerInterface_.getPresentationTime(),
        c = this.playerInterface_.mediaSourceEngine.bufferEnd(a.type), d = this.getSegmentReferenceNeeded_(a, b, c),
        e = d ? d.getSize() : null;
      d && !e && (e = (d.getEndTime() - d.getStartTime()) * (a.stream.bandwidth || 0) / 8);
      if (!e) return !1;
      (d = d.initSegmentReference) && (e += d.getSize() || 0);
      d = this.playerInterface_.getBandwidthEstimate();
      return 8 *
      e / d < (c || 0) - b - Math.max(this.manifest_.minBufferTime || 0, this.config_.rebufferingGoal) || a.operation.getBytesRemaining() > e ? !0 : !1
    };
    shaka.media.StreamingEngine.prototype.seeked = function () {
      for (var a = this.playerInterface_.getPresentationTime(), b = this.config_.smallGapLimit, c = shaka.util.ManifestParserUtils.ContentType, d = !1, e = $jscomp.makeIterator(this.mediaStates_.keys()), f = e.next(); !f.done; f = e.next()) f = f.value, null == this.playerInterface_.mediaSourceEngine.bufferEnd(f) || this.playerInterface_.mediaSourceEngine.isBuffered(f, a, b) || (this.forceClearBuffer_(this.mediaStates_.get(f)), f === c.TEXT && this.playerInterface_.mediaSourceEngine.resetCaptionParser(),
        d = !0);
      d || shaka.log.debug("(all): seeked: buffered seek: presentationTime=" + a)
    };
    shaka.media.StreamingEngine.prototype.forceClearBuffer_ = function (a) {
      var b = this, c = shaka.media.StreamingEngine.logPrefix_(a);
      a.clearingBuffer ? shaka.log.debug(c, "clear: already clearing the buffer") : a.waitingToClearBuffer ? shaka.log.debug(c, "clear: already waiting") : a.performingUpdate ? (shaka.log.debug(c, "clear: currently updating"), a.waitingToClearBuffer = !0, a.clearBufferSafeMargin = 0) : null == this.playerInterface_.mediaSourceEngine.bufferStart(a.type) ? (shaka.log.debug(c, "clear: nothing buffered"), null ==
      a.updateTimer && this.scheduleUpdate_(a, 0)) : (shaka.log.debug(c, "clear: handling right now"), this.cancelUpdate_(a), this.clearBuffer_(a, !1, 0)["catch"](function (a) {
        b.playerInterface_ && (goog.asserts.assert(a instanceof shaka.util.Error, "Wrong error type!"), b.playerInterface_.onError(a))
      }))
    };
    shaka.media.StreamingEngine.prototype.initStreams_ = function () {
      var a = this, b, c, d, e, f, g, h, k, l, m;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (n) {
        if (1 == n.nextAddress) {
          b = shaka.util.ManifestParserUtils.ContentType;
          goog.asserts.assert(a.config_, "StreamingEngine configure() must be called before init()!");
          if (!a.currentVariant_) throw shaka.log.error("init: no Streams chosen"), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STREAMING, shaka.util.Error.Code.STREAMING_ENGINE_STARTUP_INVALID_STATE);
          c = new Map;
          d = new Set;
          a.currentVariant_.audio && (c.set(b.AUDIO, a.currentVariant_.audio), d.add(a.currentVariant_.audio));
          a.currentVariant_.video && (c.set(b.VIDEO, a.currentVariant_.video), d.add(a.currentVariant_.video));
          a.currentTextStream_ && (c.set(b.TEXT, a.currentTextStream_), d.add(a.currentTextStream_));
          e = a.playerInterface_.mediaSourceEngine;
          f = a.config_.forceTransmuxTS;
          return n.yield(e.init(c, f), 2)
        }
        a.destroyer_.ensureNotDestroyed();
        a.setDuration_();
        g = $jscomp.makeIterator(c.keys());
        for (h = g.next(); !h.done; h =
          g.next()) k = h.value, l = c.get(k), a.mediaStates_.has(k) || (m = a.createMediaState_(l), a.mediaStates_.set(k, m), a.scheduleUpdate_(m, 0));
        n.jumpToEnd()
      })
    };
    shaka.media.StreamingEngine.prototype.createMediaState_ = function (a) {
      var b = a.segmentIndex ? a.segmentIndex[Symbol.iterator]() : null;
      return {
        stream: a,
        type: a.type,
        lastStream: null,
        segmentIterator: b,
        lastSegmentReference: null,
        lastInitSegmentReference: null,
        lastTimestampOffset: null,
        lastAppendWindowStart: null,
        lastAppendWindowEnd: null,
        restoreStreamAfterTrickPlay: null,
        endOfStream: !1,
        performingUpdate: !1,
        updateTimer: null,
        waitingToClearBuffer: !1,
        clearBufferSafeMargin: 0,
        waitingToFlushBuffer: !1,
        clearingBuffer: !1,
        recovering: !1,
        hasError: !1,
        operation: null
      }
    };
    shaka.media.StreamingEngine.prototype.setDuration_ = function () {
      var a = this.manifest_.presentationTimeline.getDuration();
      Infinity > a ? this.playerInterface_.mediaSourceEngine.setDuration(a) : this.playerInterface_.mediaSourceEngine.setDuration(Math.pow(2, 32))
    };
    shaka.media.StreamingEngine.prototype.onUpdate_ = function (a) {
      var b = this, c, d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        switch (h.nextAddress) {
          case 1:
            b.destroyer_.ensureNotDestroyed();
            c = shaka.media.StreamingEngine.logPrefix_(a);
            goog.asserts.assert(!a.performingUpdate && null != a.updateTimer, c + " unexpected call to onUpdate_()");
            if (a.performingUpdate || null == a.updateTimer) return h["return"]();
            goog.asserts.assert(!a.clearingBuffer, c + " onUpdate_() should not be called when clearing the buffer");
            if (a.clearingBuffer) return h["return"]();
            a.updateTimer = null;
            if (!a.waitingToClearBuffer) {
              h.jumpTo(2);
              break
            }
            shaka.log.debug(c, "skipping update and clearing the buffer");
            return h.yield(b.clearBuffer_(a, a.waitingToFlushBuffer, a.clearBufferSafeMargin), 3);
          case 3:
            return h["return"]();
          case 2:
            if (a.stream.segmentIndex) {
              h.jumpTo(4);
              break
            }
            d = a.stream;
            return h.yield(a.stream.createSegmentIndex(), 5);
          case 5:
            if (d != a.stream) return null == a.updateTimer && b.scheduleUpdate_(a, 0), h["return"]();
            shaka.media.StreamingEngine.isEmbeddedText_(a) ||
            (goog.asserts.assert(a.stream.segmentIndex, "Segment index should exist by now!"), a.segmentIterator = a.stream.segmentIndex[Symbol.iterator]());
          case 4:
            try {
              e = b.update_(a), null != e && (b.scheduleUpdate_(a, e), a.hasError = !1)
            } catch (k) {
              return b.handleStreamingError_(k), h["return"]()
            }
            f = Array.from(b.mediaStates_.values());
            if (!b.startupComplete_ || !f.every(function (a) {
              return a.endOfStream
            })) {
              h.jumpTo(0);
              break
            }
            shaka.log.v1(c, "calling endOfStream()...");
            return h.yield(b.playerInterface_.mediaSourceEngine.endOfStream(),
              7);
          case 7:
            b.destroyer_.ensureNotDestroyed(), g = b.playerInterface_.mediaSourceEngine.getDuration(), 0 != g && g < b.manifest_.presentationTimeline.getDuration() && b.manifest_.presentationTimeline.setDuration(g), h.jumpToEnd()
        }
      })
    };
    shaka.media.StreamingEngine.prototype.update_ = function (a) {
      goog.asserts.assert(this.manifest_, "manifest_ should not be null");
      goog.asserts.assert(this.config_, "config_ should not be null");
      var b = shaka.util.ManifestParserUtils.ContentType;
      if (shaka.media.StreamingEngine.isEmbeddedText_(a)) return this.playerInterface_.mediaSourceEngine.setSelectedClosedCaptionId(a.stream.originalId || ""), null;
      var c = shaka.media.StreamingEngine.logPrefix_(a), d = this.playerInterface_.getPresentationTime(),
        e = this.getTimeNeeded_(a,
          d);
      shaka.log.v2(c, "timeNeeded=" + e);
      var f = this.playerInterface_.mediaSourceEngine.bufferedAheadOf(a.type, d);
      shaka.log.v2(c, "update_:", "presentationTime=" + d, "bufferedAhead=" + f);
      var g = Math.max(this.manifest_.minBufferTime || 0, this.config_.rebufferingGoal, this.config_.bufferingGoal) * this.bufferingGoalScale_;
      if (e >= this.manifest_.presentationTimeline.getDuration()) return shaka.log.debug(c, "buffered to end of presentation"), a.endOfStream = !0, a.type == b.VIDEO && (a = this.mediaStates_.get(b.TEXT)) && shaka.media.StreamingEngine.isEmbeddedText_(a) &&
      (a.endOfStream = !0), null;
      a.endOfStream = !1;
      if (f >= g) return shaka.log.v2(c, "buffering goal met"), .5;
      b = this.playerInterface_.mediaSourceEngine.bufferEnd(a.type);
      b = this.getSegmentReferenceNeeded_(a, d, b);
      if (!b || !this.isSegmentReferenceAvailable_(a, b)) return 1;
      c = Infinity;
      f = Array.from(this.mediaStates_.values());
      f = $jscomp.makeIterator(f);
      for (g = f.next(); !g.done; g = f.next()) g = g.value, shaka.media.StreamingEngine.isEmbeddedText_(g) || (g = this.getTimeNeeded_(g, d), c = Math.min(c, g));
      f = this.manifest_.presentationTimeline.getMaxSegmentDuration() *
        shaka.media.StreamingEngine.MAX_RUN_AHEAD_SEGMENTS_;
      if (e >= c + f) return 1;
      this.fetchAndAppend_(a, d, b)["catch"](function () {
      });
      return null
    };
    shaka.media.StreamingEngine.prototype.getTimeNeeded_ = function (a, b) {
      return a.lastStream && a.lastSegmentReference ? a.lastSegmentReference.endTime : b
    };
    shaka.media.StreamingEngine.prototype.getSegmentReferenceNeeded_ = function (a, b, c) {
      var d = shaka.media.StreamingEngine.logPrefix_(a);
      if (a.stream == a.lastStream) return a.segmentIterator.current();
      if (a.lastSegmentReference) return goog.asserts.assert(a.lastStream, "lastStream should not be null"), shaka.log.v1(d, "looking up segment from new stream", "endTime:", a.lastSegmentReference.endTime), b = a.segmentIterator.seek(a.lastSegmentReference.endTime), null == b && shaka.log.warning(d, "cannot find segment", "endTime:",
        a.lastSegmentReference.endTime), b;
      if (c) return goog.asserts.assert(!a.lastStream, "lastStream should be null"), shaka.log.v1(d, "looking up segment", "bufferEnd:", c), a = a.segmentIterator.seek(c), null == a && shaka.log.warning(d, "cannot find segment", "bufferEnd:", c), a;
      goog.asserts.assert(!a.lastStream, "lastStream should be null");
      c = Math.max(b - this.config_.inaccurateManifestTolerance, 0);
      shaka.log.v1(d, "looking up segment", "lookupTime:", c, "presentationTime:", b);
      var e = a.segmentIterator.seek(c);
      e && this.isSegmentReferenceAvailable_(a,
        e) || (e = a.segmentIterator.seek(b));
      null == e && shaka.log.warning(d, "cannot find segment", "lookupTime:", c, "presentationTime:", b);
      return e
    };
    shaka.media.StreamingEngine.prototype.isSegmentReferenceAvailable_ = function (a, b) {
      var c = shaka.media.StreamingEngine.logPrefix_(a), d = this.manifest_.presentationTimeline,
        e = d.getSegmentAvailabilityStart();
      d = d.getSegmentAvailabilityEnd();
      return b.endTime < e || b.startTime > d ? (shaka.log.v2(c, "segment is not available:", "reference.startTime=" + b.startTime, "reference.endTime=" + b.endTime, "availabilityStart=" + e, "availabilityEnd=" + d), !1) : !0
    };
    shaka.media.StreamingEngine.prototype.fetchAndAppend_ = function (a, b, c) {
      var d = this, e, f, g, h, k, l, m, n, p, q;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (r) {
        switch (r.nextAddress) {
          case 1:
            return e = shaka.util.ManifestParserUtils.ContentType, f = shaka.media.StreamingEngine, g = f.logPrefix_(a), shaka.log.v1(g, "fetchAndAppend_:", "presentationTime=" + b, "reference.startTime=" + c.startTime, "reference.endTime=" + c.endTime), h = a.stream, a.performingUpdate = !0, k = d.initSourceBuffer_(a, c), shaka.log.v2(g, "fetching segment"),
              l = d.fetch_(a, c), r.setCatchFinallyBlocks(2), r.yield(Promise.all([k, l]), 4);
          case 4:
            return m = r.yieldResult, d.destroyer_.ensureNotDestroyed(), d.fatalError_ ? r["return"]() : r.yield(d.append_(a, b, h, c, m[1]), 5);
          case 5:
            d.destroyer_.ensureNotDestroyed();
            if (d.fatalError_) return r["return"]();
            a.performingUpdate = !1;
            a.recovering = !1;
            n = d.playerInterface_.mediaSourceEngine.getBufferedInfo();
            p = n[a.type];
            shaka.log.v1(g, "finished fetch and append", JSON.stringify(p));
            if (!a.waitingToClearBuffer) d.playerInterface_.onSegmentAppended();
            d.scheduleUpdate_(a, 0);
            r.leaveTryBlock(0);
            break;
          case 2:
            q = r.enterCatchBlock();
            d.destroyer_.ensureNotDestroyed(q);
            if (d.fatalError_) return r["return"]();
            goog.asserts.assert(q instanceof shaka.util.Error, "Should only receive a Shaka error");
            a.performingUpdate = !1;
            a.type == e.TEXT && d.config_.ignoreTextStreamFailures ? (q.code == shaka.util.Error.Code.BAD_HTTP_STATUS ? shaka.log.warning(g, "Text stream failed to download. Proceeding without it.") : shaka.log.warning(g, "Text stream failed to parse. Proceeding without it."),
              d.mediaStates_["delete"](e.TEXT)) : q.code == shaka.util.Error.Code.OPERATION_ABORTED ? (a.performingUpdate = !1, a.updateTimer = null, d.scheduleUpdate_(a, 0)) : q.code == shaka.util.Error.Code.QUOTA_EXCEEDED_ERROR ? d.handleQuotaExceeded_(a, q) : (shaka.log.error(g, "failed fetch and append: code=" + q.code), a.hasError = !0, q.severity = shaka.util.Error.Severity.CRITICAL, d.handleStreamingError_(q));
            r.jumpToEnd()
        }
      })
    };
    shaka.media.StreamingEngine.prototype.retry = function () {
      if (this.destroyer_.destroyed()) return shaka.log.error("Unable to retry after StreamingEngine is destroyed!"), !1;
      if (this.fatalError_) return shaka.log.error("Unable to retry after StreamingEngine encountered a fatal error!"), !1;
      for (var a = $jscomp.makeIterator(this.mediaStates_.values()), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        var c = shaka.media.StreamingEngine.logPrefix_(b);
        b.hasError && (shaka.log.info(c, "Retrying after failure..."), b.hasError = !1,
          this.scheduleUpdate_(b, .1))
      }
      return !0
    };
    shaka.media.StreamingEngine.prototype.handleQuotaExceeded_ = function (a, b) {
      var c = shaka.media.StreamingEngine.logPrefix_(a);
      if (Array.from(this.mediaStates_.values()).some(function (b) {
        return b != a && b.recovering
      })) shaka.log.debug(c, "MediaSource threw QuotaExceededError:", "waiting for another stream to recover..."); else {
        var d = Math.round(100 * this.bufferingGoalScale_);
        if (20 < d) this.bufferingGoalScale_ -= .2; else if (4 < d) this.bufferingGoalScale_ -= .04; else {
          shaka.log.error(c, "MediaSource threw QuotaExceededError too many times");
          this.fatalError_ = a.hasError = !0;
          this.playerInterface_.onError(b);
          return
        }
        shaka.log.warning(c, "MediaSource threw QuotaExceededError:", "reducing buffering goals by " + (100 - Math.round(100 * this.bufferingGoalScale_)) + "%");
        a.recovering = !0
      }
      this.scheduleUpdate_(a, 4)
    };
    shaka.media.StreamingEngine.prototype.initSourceBuffer_ = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m, n;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (p) {
        d = shaka.media.StreamingEngine;
        e = d.logPrefix_(a);
        f = [];
        g = Math.max(0, b.appendWindowStart - d.APPEND_WINDOW_START_FUDGE_);
        h = b.appendWindowEnd + d.APPEND_WINDOW_END_FUDGE_;
        goog.asserts.assert(b.startTime <= h, e + " segment should start before append window end");
        k = b.timestampOffset;
        if (k != a.lastTimestampOffset || g != a.lastAppendWindowStart || h != a.lastAppendWindowEnd) shaka.log.v1(e,
          "setting timestamp offset to " + k), shaka.log.v1(e, "setting append window start to " + g), shaka.log.v1(e, "setting append window end to " + h), l = function () {
          var b;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
            if (1 == d.nextAddress) return d.setCatchFinallyBlocks(2), a.lastAppendWindowStart = g, a.lastAppendWindowEnd = h, a.lastTimestampOffset = k, d.yield(c.playerInterface_.mediaSourceEngine.setStreamProperties(a.type, k, g, h), 4);
            if (2 != d.nextAddress) return d.leaveTryBlock(0);
            b = d.enterCatchBlock();
            a.lastAppendWindowStart =
              null;
            a.lastAppendWindowEnd = null;
            a.lastTimestampOffset = null;
            throw b;
          })
        }, f.push(l());
        b.initSegmentReference != a.lastInitSegmentReference && (a.lastInitSegmentReference = b.initSegmentReference) && (shaka.log.v1(e, "fetching init segment"), m = c.fetch_(a, b.initSegmentReference), n = function () {
          var b, d, f;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
            switch (g.nextAddress) {
              case 1:
                return g.setCatchFinallyBlocks(2), g.yield(m, 4);
              case 4:
                return b = g.yieldResult, c.destroyer_.ensureNotDestroyed(), shaka.log.v1(e,
                  "appending init segment"), d = a.stream.closedCaptions && 0 < a.stream.closedCaptions.size, g.yield(c.playerInterface_.mediaSourceEngine.appendBuffer(a.type, b, null, null, d), 5);
              case 5:
                g.leaveTryBlock(0);
                break;
              case 2:
                throw f = g.enterCatchBlock(), a.lastInitSegmentReference = null, f;
            }
          })
        }, f.push(n()));
        return p.yield(Promise.all(f), 0)
      })
    };
    shaka.media.StreamingEngine.prototype.append_ = function (a, b, c, d, e) {
      var f = this, g, h, k;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
        if (1 == l.nextAddress) return g = shaka.media.StreamingEngine.logPrefix_(a), h = c.closedCaptions && 0 < c.closedCaptions.size, null != c.emsgSchemeIdUris && 0 < c.emsgSchemeIdUris.length && (new shaka.util.Mp4Parser).fullBox("emsg", function (a) {
          return f.parseEMSG_(d, c.emsgSchemeIdUris, a)
        }).parse(e), l.yield(f.evict_(a, b), 2);
        if (3 != l.nextAddress) return f.destroyer_.ensureNotDestroyed(),
          shaka.log.v1(g, "appending media segment"), l.yield(f.playerInterface_.mediaSourceEngine.appendBuffer(a.type, e, d.startTime, d.endTime, h), 3);
        f.destroyer_.ensureNotDestroyed();
        shaka.log.v2(g, "appended media segment");
        a.lastStream = c;
        a.lastSegmentReference = d;
        a.stream == c && (k = a.segmentIterator.next().value, shaka.log.v2(g, "advancing to next segment", k));
        l.jumpToEnd()
      })
    };
    shaka.media.StreamingEngine.prototype.parseEMSG_ = function (a, b, c) {
      var d = c.reader.readTerminatedString(), e = c.reader.readTerminatedString(), f = c.reader.readUint32(),
        g = c.reader.readUint32(), h = c.reader.readUint32(), k = c.reader.readUint32();
      c = c.reader.readBytes(c.reader.getLength() - c.reader.getPosition());
      a = a.startTime + g / f;
      if (b.includes(d)) if ("urn:mpeg:dash:event:2012" == d) this.playerInterface_.onManifestUpdate(); else b = new shaka.util.FakeEvent(shaka.Player.EventName.Emsg, {
        detail: {
          startTime: a, endTime: a + h /
            f, schemeIdUri: d, value: e, timescale: f, presentationTimeDelta: g, eventDuration: h, id: k, messageData: c
        }
      }), this.playerInterface_.onEvent(b)
    };
    shaka.media.StreamingEngine.prototype.evict_ = function (a, b) {
      var c = this, d, e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        if (1 == k.nextAddress) {
          d = shaka.media.StreamingEngine.logPrefix_(a);
          shaka.log.v2(d, "checking buffer length");
          e = Math.max(c.config_.bufferBehind, c.manifest_.presentationTimeline.getMaxSegmentDuration());
          f = c.playerInterface_.mediaSourceEngine.bufferStart(a.type);
          if (null == f) return shaka.log.v2(d, "buffer behind okay because nothing buffered:", "presentationTime=" + b,
            "bufferBehind=" + e), k["return"]();
          g = b - f;
          h = g - e;
          if (0 >= h) return shaka.log.v2(d, "buffer behind okay:", "presentationTime=" + b, "bufferedBehind=" + g, "bufferBehind=" + e, "underflow=" + -h), k["return"]();
          shaka.log.v1(d, "buffer behind too large:", "presentationTime=" + b, "bufferedBehind=" + g, "bufferBehind=" + e, "overflow=" + h);
          return k.yield(c.playerInterface_.mediaSourceEngine.remove(a.type, f, f + h), 2)
        }
        c.destroyer_.ensureNotDestroyed();
        shaka.log.v1(d, "evicted " + h + " seconds");
        k.jumpToEnd()
      })
    };
    shaka.media.StreamingEngine.isEmbeddedText_ = function (a) {
      var b = shaka.util.MimeUtils;
      return a && a.type == shaka.util.ManifestParserUtils.ContentType.TEXT && a.stream.mimeType == b.CLOSED_CAPTION_MIMETYPE
    };
    shaka.media.StreamingEngine.prototype.fetch_ = function (a, b) {
      var c = this, d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) return d = shaka.net.NetworkingEngine.RequestType.SEGMENT, e = shaka.util.Networking.createSegmentRequest(b.getUris(), b.startByte, b.endByte, c.config_.retryParameters), shaka.log.v2("fetching: reference=", b), f = c.playerInterface_.netEngine.request(d, e), a.operation = f, h.yield(f.promise, 2);
        g = h.yieldResult;
        a.operation = null;
        return h["return"](g.data)
      })
    };
    shaka.media.StreamingEngine.prototype.clearBuffer_ = function (a, b, c) {
      var d = this, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) return e = shaka.media.StreamingEngine.logPrefix_(a), goog.asserts.assert(!a.performingUpdate && null == a.updateTimer, e + " unexpected call to clearBuffer_()"), a.waitingToClearBuffer = !1, a.waitingToFlushBuffer = !1, a.clearBufferSafeMargin = 0, a.clearingBuffer = !0, shaka.log.debug(e, "clearing buffer"), c ? (f = d.playerInterface_.getPresentationTime(), g =
          d.playerInterface_.mediaSourceEngine.getDuration(), h.yield(d.playerInterface_.mediaSourceEngine.remove(a.type, f + c, g), 3)) : h.yield(d.playerInterface_.mediaSourceEngine.clear(a.type), 4);
        if (3 != h.nextAddress) return d.destroyer_.ensureNotDestroyed(), b ? h.yield(d.playerInterface_.mediaSourceEngine.flush(a.type), 3) : h.jumpTo(3);
        d.destroyer_.ensureNotDestroyed();
        shaka.log.debug(e, "cleared buffer");
        a.lastStream = null;
        a.lastSegmentReference = null;
        a.clearingBuffer = !1;
        a.endOfStream = !1;
        d.scheduleUpdate_(a, 0);
        h.jumpToEnd()
      })
    };
    shaka.media.StreamingEngine.prototype.scheduleUpdate_ = function (a, b) {
      var c = this, d = shaka.media.StreamingEngine.logPrefix_(a);
      shaka.log.v2(d, "updating in " + b + " seconds");
      goog.asserts.assert(null == a.updateTimer, d + " did not expect update to be scheduled");
      a.updateTimer = (new shaka.util.DelayedTick(function () {
        var b;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
          if (1 == d.nextAddress) return d.setCatchFinallyBlocks(2), d.yield(c.onUpdate_(a), 4);
          if (2 != d.nextAddress) return d.leaveTryBlock(0);
          b =
            d.enterCatchBlock();
          if (c.playerInterface_) c.playerInterface_.onError(b);
          d.jumpToEnd()
        })
      })).tickAfter(b)
    };
    shaka.media.StreamingEngine.prototype.cancelUpdate_ = function (a) {
      null != a.updateTimer && (a.updateTimer.stop(), a.updateTimer = null)
    };
    shaka.media.StreamingEngine.prototype.abortOperations_ = function (a) {
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        return a.operation ? b.yield(a.operation.abort(), 0) : b.jumpTo(0)
      })
    };
    shaka.media.StreamingEngine.prototype.handleStreamingError_ = function (a) {
      var b = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        if (1 == c.nextAddress) return c.yield(b.failureCallbackBackoff_.attempt(), 2);
        b.destroyer_.ensureNotDestroyed();
        b.playerInterface_.onError(a);
        a.handled || b.config_.failureCallback(a);
        c.jumpToEnd()
      })
    };
    shaka.media.StreamingEngine.logPrefix_ = function (a) {
      return "(" + a.type + ":" + a.stream.id + ")"
    };
    shaka.media.StreamingEngine.APPEND_WINDOW_START_FUDGE_ = .1;
    shaka.media.StreamingEngine.APPEND_WINDOW_END_FUDGE_ = .01;
    shaka.media.StreamingEngine.MAX_RUN_AHEAD_SEGMENTS_ = 1;
    shaka.routing = {};
    shaka.routing.Walker = function (a, b, c) {
      var d = this;
      this.implementation_ = c;
      this.currentlyAt_ = a;
      this.currentlyWith_ = b;
      this.waitForWork_ = null;
      this.requests_ = [];
      this.currentStep_ = this.currentRoute_ = null;
      this.mainLoopPromise_ = Promise.resolve().then(function () {
        return d.mainLoop_()
      });
      this.destroyer_ = new shaka.util.Destroyer(function () {
        return d.doDestroy_()
      })
    };
    shaka.routing.Walker.prototype.getCurrentPayload = function () {
      return this.currentlyWith_
    };
    shaka.routing.Walker.prototype.destroy = function () {
      return this.destroyer_.destroy()
    };
    shaka.routing.Walker.prototype.doDestroy_ = function () {
      var a = this, b, c, d;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress) return a.currentStep_ && a.currentStep_.abort(), a.unblockMainLoop_(), e.yield(a.mainLoopPromise_, 2);
        if (a.currentRoute_) a.currentRoute_.listeners.onCancel();
        b = $jscomp.makeIterator(a.requests_);
        for (c = b.next(); !c.done; c = b.next()) d = c.value, d.listeners.onCancel();
        a.currentRoute_ = null;
        a.requests_ = [];
        a.implementation_ = null;
        e.jumpToEnd()
      })
    };
    shaka.routing.Walker.prototype.startNewRoute = function (a) {
      var b = {
        onStart: function () {
        }, onEnd: function () {
        }, onCancel: function () {
        }, onError: function (a) {
        }, onSkip: function () {
        }, onEnter: function () {
        }
      };
      this.requests_.push({create: a, listeners: b});
      this.currentStep_ && this.currentStep_.abort();
      this.unblockMainLoop_();
      return b
    };
    shaka.routing.Walker.prototype.mainLoop_ = function () {
      var a = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        return a.destroyer_.destroyed() ? b.jumpTo(0) : b.yield(a.doOneThing_(), 1)
      })
    };
    shaka.routing.Walker.prototype.doOneThing_ = function () {
      if (this.tryNewRoute_()) return Promise.resolve();
      if (this.currentRoute_) return this.takeNextStep_();
      goog.asserts.assert(null == this.waitForWork_, "We should not have a promise yet.");
      this.implementation_.onIdle(this.currentlyAt_);
      return this.waitForWork_ = new shaka.util.PublicPromise
    };
    shaka.routing.Walker.prototype.tryNewRoute_ = function () {
      goog.asserts.assert(null == this.currentStep_, "We should never have a current step between taking steps.");
      if (0 == this.requests_.length || this.currentRoute_ && !this.currentRoute_.interruptible) return !1;
      this.currentRoute_ && (this.currentRoute_.listeners.onCancel(), this.currentRoute_ = null);
      var a = this.requests_.shift(), b = a.create(this.currentlyWith_);
      if (b) a.listeners.onStart(), this.currentRoute_ = {
        node: b.node, payload: b.payload, interruptible: b.interruptible,
        listeners: a.listeners
      }; else a.listeners.onSkip();
      return !0
    };
    shaka.routing.Walker.prototype.takeNextStep_ = function () {
      var a = this, b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        switch (d.nextAddress) {
          case 1:
            return goog.asserts.assert(a.currentRoute_, "We need a current route to take the next step."), a.currentlyAt_ = a.implementation_.getNext(a.currentlyAt_, a.currentlyWith_, a.currentRoute_.node, a.currentRoute_.payload), a.currentRoute_.listeners.onEnter(a.currentlyAt_), d.setCatchFinallyBlocks(2), a.currentStep_ = a.implementation_.enterNode(a.currentlyAt_,
              a.currentlyWith_, a.currentRoute_.payload), d.yield(a.currentStep_.promise, 4);
          case 4:
            a.currentStep_ = null;
            a.currentlyAt_ == a.currentRoute_.node && (a.currentRoute_.listeners.onEnd(), a.currentRoute_ = null);
            d.leaveTryBlock(0);
            break;
          case 2:
            b = d.enterCatchBlock();
            if (b.code == shaka.util.Error.Code.OPERATION_ABORTED) goog.asserts.assert(a.currentRoute_.interruptible, "Do not put abortable steps in non-interruptible routes!"), a.currentRoute_.listeners.onCancel(); else a.currentRoute_.listeners.onError(b);
            a.currentRoute_ =
              null;
            a.currentStep_ = null;
            c = a;
            return d.yield(a.implementation_.handleError(a.currentlyWith_, b), 5);
          case 5:
            c.currentlyAt_ = d.yieldResult, d.jumpToEnd()
        }
      })
    };
    shaka.routing.Walker.prototype.unblockMainLoop_ = function () {
      this.waitForWork_ && (this.waitForWork_.resolve(), this.waitForWork_ = null)
    };
    shaka.text.SimpleTextDisplayer = function (a) {
      this.textTrack_ = null;
      for (var b = $jscomp.makeIterator(Array.from(a.textTracks)), c = b.next(); !c.done; c = b.next()) c = c.value, c.mode = "disabled", c.label == shaka.Player.TextTrackLabel && (this.textTrack_ = c);
      this.textTrack_ || (this.textTrack_ = a.addTextTrack("subtitles", shaka.Player.TextTrackLabel));
      this.textTrack_.mode = "hidden"
    };
    shaka.text.SimpleTextDisplayer.prototype.remove = function (a, b) {
      if (!this.textTrack_) return !1;
      shaka.text.SimpleTextDisplayer.removeWhere_(this.textTrack_, function (c) {
        return c.startTime < b && c.endTime > a
      });
      return !0
    };
    shaka.text.SimpleTextDisplayer.prototype.append = function (a) {
      var b = a.map(function (a) {
        if (a.nestedCues.length) {
          var b = a.nestedCues.map(function (a) {
            return a.spacer ? "\n" : a.payload + " "
          }).join("").replace(/ $/m, "");
          a = a.clone();
          a.nestedCues = [];
          a.payload = b;
          return a
        }
        return a
      }), c = [];
      a = this.textTrack_.cues ? Array.from(this.textTrack_.cues) : [];
      var d = {};
      b = $jscomp.makeIterator(b);
      for (var e = b.next(); !e.done; d = {$jscomp$loop$prop$inCue$481: d.$jscomp$loop$prop$inCue$481}, e = b.next()) d.$jscomp$loop$prop$inCue$481 = e.value,
      a.some(function (a) {
        return function (b) {
          return b.startTime == a.$jscomp$loop$prop$inCue$481.startTime && b.endTime == a.$jscomp$loop$prop$inCue$481.endTime && b.text == a.$jscomp$loop$prop$inCue$481.payload ? !0 : !1
        }
      }(d)) || (e = shaka.text.SimpleTextDisplayer.convertToTextTrackCue_(d.$jscomp$loop$prop$inCue$481)) && c.push(e);
      a = c.slice().sort(function (a, b) {
        return a.startTime != b.startTime ? a.startTime - b.startTime : a.endTime != b.endTime ? a.endTime - b.startTime : "line" in VTTCue.prototype ? c.indexOf(b) - c.indexOf(a) : c.indexOf(a) -
          c.indexOf(b)
      });
      a = $jscomp.makeIterator(a);
      for (d = a.next(); !d.done; d = a.next()) this.textTrack_.addCue(d.value)
    };
    shaka.text.SimpleTextDisplayer.prototype.destroy = function () {
      this.textTrack_ && (shaka.text.SimpleTextDisplayer.removeWhere_(this.textTrack_, function (a) {
        return !0
      }), this.textTrack_.mode = "disabled");
      this.textTrack_ = null;
      return Promise.resolve()
    };
    shaka.text.SimpleTextDisplayer.prototype.isTextVisible = function () {
      return "showing" == this.textTrack_.mode
    };
    shaka.text.SimpleTextDisplayer.prototype.setTextVisibility = function (a) {
      this.textTrack_.mode = a ? "showing" : "hidden"
    };
    shaka.text.SimpleTextDisplayer.convertToTextTrackCue_ = function (a) {
      if (a.startTime >= a.endTime) return shaka.log.warning("Invalid cue times: " + a.startTime + " - " + a.endTime), null;
      var b = shaka.text.Cue, c = new VTTCue(a.startTime, a.endTime, a.payload);
      c.lineAlign = a.lineAlign;
      c.positionAlign = a.positionAlign;
      a.size && (c.size = a.size);
      try {
        c.align = a.textAlign
      } catch (d) {
      }
      "center" == a.textAlign && "center" != c.align && (c.align = "middle");
      a.writingMode == b.writingMode.VERTICAL_LEFT_TO_RIGHT ? c.vertical = "lr" : a.writingMode == b.writingMode.VERTICAL_RIGHT_TO_LEFT &&
        (c.vertical = "rl");
      a.lineInterpretation == b.lineInterpretation.PERCENTAGE && (c.snapToLines = !1);
      null != a.line && (c.line = a.line);
      null != a.position && (c.position = a.position);
      return c
    };
    shaka.text.SimpleTextDisplayer.removeWhere_ = function (a, b) {
      var c = a.mode, d = "showing" == c ? "showing" : "hidden";
      a.mode = d;
      goog.asserts.assert(a.cues, 'Cues should be accessible when mode is set to "' + d + '".');
      d = $jscomp.makeIterator(Array.from(a.cues));
      for (var e = d.next(); !e.done; e = d.next()) (e = e.value) && b(e) && a.removeCue(e);
      a.mode = c
    };
    goog.exportSymbol("shaka.text.SimpleTextDisplayer", shaka.text.SimpleTextDisplayer);
    goog.exportProperty(shaka.text.SimpleTextDisplayer.prototype, "setTextVisibility", shaka.text.SimpleTextDisplayer.prototype.setTextVisibility);
    goog.exportProperty(shaka.text.SimpleTextDisplayer.prototype, "isTextVisible", shaka.text.SimpleTextDisplayer.prototype.isTextVisible);
    goog.exportProperty(shaka.text.SimpleTextDisplayer.prototype, "destroy", shaka.text.SimpleTextDisplayer.prototype.destroy);
    goog.exportProperty(shaka.text.SimpleTextDisplayer.prototype, "append", shaka.text.SimpleTextDisplayer.prototype.append);
    goog.exportProperty(shaka.text.SimpleTextDisplayer.prototype, "remove", shaka.text.SimpleTextDisplayer.prototype.remove);
    shaka.util.Dom = function () {
    };
    shaka.util.Dom.createHTMLElement = function (a) {
      return document.createElement(a)
    };
    shaka.util.Dom.createButton = function () {
      return document.createElement("button")
    };
    shaka.util.Dom.asHTMLElement = function (a) {
      return a
    };
    shaka.util.Dom.asHTMLMediaElement = function (a) {
      return a
    };
    shaka.util.Dom.getElementByClassName = function (a, b) {
      var c = b.getElementsByClassName(a);
      goog.asserts.assert(1 == c.length, "Should only be one element with class name " + a);
      return shaka.util.Dom.asHTMLElement(c[0])
    };
    shaka.util.Dom.removeAllChildren = function (a) {
      for (; a.firstChild;) a.removeChild(a.firstChild)
    };
    goog.exportSymbol("shaka.util.Dom", shaka.util.Dom);
    goog.exportProperty(shaka.util.Dom, "removeAllChildren", shaka.util.Dom.removeAllChildren);
    shaka.text.UITextDisplayer = function (a, b) {
      var c = this;
      goog.asserts.assert(b, "videoContainer should be valid.");
      this.isTextVisible_ = !1;
      this.cues_ = [];
      this.video_ = a;
      this.videoContainer_ = b;
      this.textContainer_ = shaka.util.Dom.createHTMLElement("div");
      this.textContainer_.classList.add("shaka-text-container");
      this.videoContainer_.appendChild(this.textContainer_);
      this.captionsTimer_ = (new shaka.util.Timer(function () {
        c.updateCaptions_()
      })).tickEvery(.25);
      this.currentCuesMap_ = new Map
    };
    shaka.text.UITextDisplayer.prototype.append = function (a) {
      var b = {};
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; b = {$jscomp$loop$prop$cue$483: b.$jscomp$loop$prop$cue$483}, c = a.next()) b.$jscomp$loop$prop$cue$483 = c.value, this.cues_.some(function (a) {
        return function (b) {
          return b.payload == a.$jscomp$loop$prop$cue$483.payload && b.startTime == a.$jscomp$loop$prop$cue$483.startTime && b.endTime == a.$jscomp$loop$prop$cue$483.endTime ? !0 : !1
        }
      }(b)) || this.cues_.push(b.$jscomp$loop$prop$cue$483);
      this.updateCaptions_()
    };
    shaka.text.UITextDisplayer.prototype.destroy = function () {
      this.videoContainer_.removeChild(this.textContainer_);
      this.textContainer_ = null;
      this.isTextVisible_ = !1;
      this.cues_ = [];
      this.captionsTimer_ && this.captionsTimer_.stop();
      this.currentCuesMap_.clear()
    };
    shaka.text.UITextDisplayer.prototype.remove = function (a, b) {
      if (!this.textContainer_) return !1;
      this.cues_ = this.cues_.filter(function (c) {
        return c.startTime < a || c.endTime >= b
      });
      this.updateCaptions_();
      return !0
    };
    shaka.text.UITextDisplayer.prototype.isTextVisible = function () {
      return this.isTextVisible_
    };
    shaka.text.UITextDisplayer.prototype.setTextVisibility = function (a) {
      this.isTextVisible_ = a
    };
    shaka.text.UITextDisplayer.prototype.updateCaptions_ = function () {
      for (var a = this, b = this.video_.currentTime, c = function (c) {
        return a.cues_.includes(c) && a.isTextVisible_ && c.startTime <= b && c.endTime >= b
      }, d = $jscomp.makeIterator(this.currentCuesMap_.keys()), e = d.next(); !e.done; e = d.next()) if (e = e.value, !c(e)) {
        var f = this.currentCuesMap_.get(e);
        this.textContainer_.removeChild(f);
        this.currentCuesMap_["delete"](e)
      }
      d = new Set(this.currentCuesMap_.values());
      e = $jscomp.makeIterator(Array.from(this.textContainer_.childNodes));
      for (f = e.next(); !f.done; f = e.next()) f = f.value, d.has(f) || this.textContainer_.removeChild(f);
      d = this.cues_.filter(function (b) {
        return c(b) && !a.currentCuesMap_.has(b)
      }).sort(function (a, b) {
        return a.startTime != b.startTime ? a.startTime - b.startTime : a.endTime - b.endTime
      });
      d = $jscomp.makeIterator(d);
      for (e = d.next(); !e.done; e = d.next()) this.displayCue_(this.textContainer_, e.value)
    };
    shaka.text.UITextDisplayer.prototype.displayLeafCue_ = function (a, b, c) {
      var d = shaka.util.Dom.createHTMLElement("span");
      c && d.classList.add("shaka-nested-cue");
      b.spacer ? d.style.display = "block" : this.setCaptionStyles_(d, b, !0);
      a.appendChild(d);
      return d
    };
    shaka.text.UITextDisplayer.prototype.displayCue_ = function (a, b) {
      if (b.nestedCues.length) {
        var c = shaka.util.Dom.createHTMLElement("p");
        c.style.width = "100%";
        this.setCaptionStyles_(c, b, !1);
        for (var d = 0; d < b.nestedCues.length; d++) this.displayLeafCue_(c, b.nestedCues[d], !0);
        a.appendChild(c);
        this.currentCuesMap_.set(b, c)
      } else this.currentCuesMap_.set(b, this.displayLeafCue_(a, b, !1))
    };
    shaka.text.UITextDisplayer.prototype.setCaptionStyles_ = function (a, b, c) {
      var d = shaka.text.Cue, e = a.style;
      e.whiteSpace = "pre-line";
      a.textContent = b.payload;
      c && (e.backgroundColor = b.backgroundColor);
      e.border = b.border;
      e.color = b.color;
      e.direction = b.direction;
      e.opacity = b.opacity;
      e.paddingLeft = shaka.text.UITextDisplayer.convertLengthValue_(b.linePadding, b, this.videoContainer_);
      e.paddingRight = shaka.text.UITextDisplayer.convertLengthValue_(b.linePadding, b, this.videoContainer_);
      b.backgroundImage && (e.backgroundImage =
        "url('" + b.backgroundImage + "')", e.backgroundRepeat = "no-repeat", e.backgroundSize = "contain", e.backgroundPosition = "center", "" == b.backgroundColor && (e.backgroundColor = "transparent"));
      if (b.backgroundImage && b.region) {
        a = shaka.text.CueRegion.units.PERCENTAGE;
        var f = b.region.widthUnits == a ? "%" : "px";
        e.height = b.region.height + (b.region.heightUnits == a ? "%" : "px");
        e.width = b.region.width + f
      }
      e.justifyContent = b.displayAlign == d.displayAlign.BEFORE ? "flex-start" : b.displayAlign == d.displayAlign.CENTER ? "center" : "flex-end";
      b.nestedCues.length &&
      (e.display = "flex", e.flexDirection = "row", e.margin = "0", e.alignItems = e.justifyContent, e.justifyContent = "center");
      c && (e.maxWidth = "100%");
      e.fontFamily = b.fontFamily;
      e.fontWeight = b.fontWeight.toString();
      e.fontStyle = b.fontStyle;
      e.letterSpacing = b.letterSpacing;
      e.fontSize = shaka.text.UITextDisplayer.convertLengthValue_(b.fontSize, b, this.videoContainer_);
      b.line ? b.lineInterpretation == d.lineInterpretation.PERCENTAGE && (e.position = "absolute", b.writingMode == d.writingMode.HORIZONTAL_TOP_TO_BOTTOM ? b.lineAlign == d.lineAlign.START ?
        e.top = b.line + "%" : b.lineAlign == d.lineAlign.END && (e.bottom = b.line + "%") : b.writingMode == d.writingMode.VERTICAL_LEFT_TO_RIGHT ? b.lineAlign == d.lineAlign.START ? e.left = b.line + "%" : b.lineAlign == d.lineAlign.END && (e.right = b.line + "%") : b.lineAlign == d.lineAlign.START ? e.right = b.line + "%" : b.lineAlign == d.lineAlign.END && (e.left = b.line + "%")) : b.region && b.region.id && !c && (c = shaka.text.CueRegion.units.PERCENTAGE, a = b.region.widthUnits == c ? "%" : "px", f = b.region.viewportAnchorUnits == c ? "%" : "px", e.height = b.region.height + (b.region.heightUnits ==
      c ? "%" : "px"), e.width = b.region.width + a, e.position = "absolute", e.top = b.region.viewportAnchorY + f, e.left = b.region.viewportAnchorX + f);
      e.lineHeight = b.lineHeight;
      b.position && (b.writingMode == d.writingMode.HORIZONTAL_TOP_TO_BOTTOM ? e.paddingLeft = b.position : e.paddingTop = b.position);
      b.positionAlign == d.positionAlign.LEFT ? e.cssFloat = "left" : b.positionAlign == d.positionAlign.RIGHT && (e.cssFloat = "right");
      e.textAlign = b.textAlign;
      e.textDecoration = b.textDecoration.join(" ");
      e.writingMode = b.writingMode;
      b.size && (b.writingMode ==
      d.writingMode.HORIZONTAL_TOP_TO_BOTTOM ? e.width = b.size + "%" : e.height = b.size + "%")
    };
    shaka.text.UITextDisplayer.getLengthValueInfo_ = function (a) {
      return (a = (new RegExp(/(\d*\.?\d+)([a-z]+|%+)/)).exec(a)) ? {value: Number(a[1]), unit: a[2]} : null
    };
    shaka.text.UITextDisplayer.convertLengthValue_ = function (a, b, c) {
      var d = shaka.text.UITextDisplayer.getLengthValueInfo_(a);
      if (!d) return a;
      var e = d.value;
      switch (d.unit) {
        case "%":
          return shaka.text.UITextDisplayer.getAbsoluteLengthInPixels_(e / 100, b, c);
        case "c":
          return shaka.text.UITextDisplayer.getAbsoluteLengthInPixels_(e, b, c);
        default:
          return a
      }
    };
    shaka.text.UITextDisplayer.getAbsoluteLengthInPixels_ = function (a, b, c) {
      return c.clientHeight * a / b.cellResolution.rows + "px"
    };
    goog.exportSymbol("shaka.text.UITextDisplayer", shaka.text.UITextDisplayer);
    goog.exportProperty(shaka.text.UITextDisplayer.prototype, "setTextVisibility", shaka.text.UITextDisplayer.prototype.setTextVisibility);
    goog.exportProperty(shaka.text.UITextDisplayer.prototype, "isTextVisible", shaka.text.UITextDisplayer.prototype.isTextVisible);
    goog.exportProperty(shaka.text.UITextDisplayer.prototype, "remove", shaka.text.UITextDisplayer.prototype.remove);
    goog.exportProperty(shaka.text.UITextDisplayer.prototype, "destroy", shaka.text.UITextDisplayer.prototype.destroy);
    goog.exportProperty(shaka.text.UITextDisplayer.prototype, "append", shaka.text.UITextDisplayer.prototype.append);
    shaka.util.ConfigUtils = function () {
    };
    shaka.util.ConfigUtils.mergeConfigObjects = function (a, b, c, d, e) {
      goog.asserts.assert(a, "Destination config must not be null!");
      var f = e in d, g = !0, h;
      for (h in b) {
        var k = e + "." + h, l = f ? d[e] : c[h];
        f || h in c ? void 0 === b[h] ? void 0 === l || f ? delete a[h] : a[h] = shaka.util.ObjectUtils.cloneObject(l) : l.constructor == Object && b[h] && b[h].constructor == Object ? (a[h] || (a[h] = shaka.util.ObjectUtils.cloneObject(l)), k = shaka.util.ConfigUtils.mergeConfigObjects(a[h], b[h], l, d, k), g = g && k) : typeof b[h] != typeof l || null == b[h] || "function" != typeof b[h] &&
        b[h].constructor != l.constructor ? (shaka.log.alwaysError("Invalid config, wrong type for " + k), g = !1) : ("function" == typeof c[h] && c[h].length != b[h].length && shaka.log.alwaysWarn("Unexpected number of arguments for " + k), a[h] = b[h]) : (shaka.log.alwaysError("Invalid config, unrecognized key " + k), g = !1)
      }
      return g
    };
    shaka.util.ConfigUtils.convertToConfigObject = function (a, b) {
      for (var c = {}, d = c, e = 0, f = 0; ;) {
        e = a.indexOf(".", e);
        if (0 > e) break;
        if (0 == e || "\\" != a[e - 1]) f = a.substring(f, e).replace(/\\\./g, "."), d[f] = {}, d = d[f], f = e + 1;
        e += 1
      }
      d[a.substring(f).replace(/\\\./g, ".")] = b;
      return c
    };
    goog.exportSymbol("shaka.util.ConfigUtils", shaka.util.ConfigUtils);
    goog.exportProperty(shaka.util.ConfigUtils, "convertToConfigObject", shaka.util.ConfigUtils.convertToConfigObject);
    goog.exportProperty(shaka.util.ConfigUtils, "mergeConfigObjects", shaka.util.ConfigUtils.mergeConfigObjects);
    shaka.util.PlayerConfiguration = function () {
    };
    shaka.util.PlayerConfiguration.createDefault = function () {
      var a = 1E6, b = Infinity;
      navigator.connection && (navigator.connection.downlink && (a = 1E6 * navigator.connection.downlink), navigator.connection.saveData && (b = 360));
      var c = {
        retryParameters: shaka.net.NetworkingEngine.defaultRetryParameters(),
        servers: {},
        clearKeys: {},
        advanced: {},
        delayLicenseRequestUntilPlayed: !1,
        initDataTransform: shaka.media.DrmEngine.defaultInitDataTransform,
        logLicenseExchange: !1,
        updateExpirationTime: 1
      }, d = {
        retryParameters: shaka.net.NetworkingEngine.defaultRetryParameters(),
        availabilityWindowOverride: NaN,
        disableAudio: !1,
        disableVideo: !1,
        disableText: !1,
        defaultPresentationDelay: 0,
        dash: {
          clockSyncUri: "",
          ignoreDrmInfo: !1,
          xlinkFailGracefully: !1,
          ignoreMinBufferTime: !1,
          autoCorrectDrift: !0,
          initialSegmentLimit: 1E3,
          ignoreSuggestedPresentationDelay: !1,
          ignoreEmptyAdaptationSet: !1
        },
        hls: {ignoreTextStreamFailures: !1, useFullSegmentsForStartTime: !1}
      }, e = {
        retryParameters: shaka.net.NetworkingEngine.defaultRetryParameters(),
        failureCallback: function (a) {
          shaka.log.error("Unhandled streaming error",
            a);
          return [a]
        },
        rebufferingGoal: 2,
        bufferingGoal: 10,
        bufferBehind: 30,
        ignoreTextStreamFailures: !1,
        alwaysStreamText: !1,
        startAtSegmentBoundary: !1,
        smallGapLimit: .5,
        jumpLargeGaps: !1,
        durationBackoff: 1,
        forceTransmuxTS: !1,
        safeSeekOffset: 5,
        stallEnabled: !0,
        stallThreshold: 1,
        stallSkip: .1,
        useNativeHlsOnSafari: !0,
        inaccurateManifestTolerance: 2
      };
      if (shaka.util.Platform.isWebOS() || shaka.util.Platform.isTizen() || shaka.util.Platform.isChromecast()) e.stallSkip = 0;
      var f = {
        trackSelectionCallback: function (a) {
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
            return b["return"](a)
          })
        },
        progressCallback: function (a, b) {
          return [a, b]
        }, usePersistentLicense: !0
      }, g = {
        drm: c,
        manifest: d,
        streaming: e,
        offline: f,
        abrFactory: function () {
          return new shaka.abr.SimpleAbrManager
        },
        abr: {
          enabled: !0,
          defaultBandwidthEstimate: a,
          switchInterval: 8,
          bandwidthUpgradeTarget: .85,
          bandwidthDowngradeTarget: .95,
          restrictions: {
            minWidth: 0,
            maxWidth: Infinity,
            minHeight: 0,
            maxHeight: b,
            minPixels: 0,
            maxPixels: Infinity,
            minFrameRate: 0,
            maxFrameRate: Infinity,
            minBandwidth: 0,
            maxBandwidth: Infinity
          }
        },
        preferredAudioLanguage: "",
        preferredTextLanguage: "",
        preferredVariantRole: "",
        preferredTextRole: "",
        preferredAudioChannelCount: 2,
        restrictions: {
          minWidth: 0,
          maxWidth: Infinity,
          minHeight: 0,
          maxHeight: Infinity,
          minPixels: 0,
          maxPixels: Infinity,
          minFrameRate: 0,
          maxFrameRate: Infinity,
          minBandwidth: 0,
          maxBandwidth: Infinity
        },
        playRangeStart: 0,
        playRangeEnd: Infinity,
        textDisplayFactory: function () {
          return null
        }
      };
      f.trackSelectionCallback = function (a) {
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
          return b["return"](shaka.util.PlayerConfiguration.defaultTrackSelect(a,
            g.preferredAudioLanguage))
        })
      };
      return g
    };
    shaka.util.PlayerConfiguration.mergeConfigObjects = function (a, b, c) {
      var d = {
        ".drm.servers": "",
        ".drm.clearKeys": "",
        ".drm.advanced": {
          distinctiveIdentifierRequired: !1,
          persistentStateRequired: !1,
          videoRobustness: "",
          audioRobustness: "",
          serverCertificate: new Uint8Array(0),
          individualizationServer: ""
        }
      };
      return shaka.util.ConfigUtils.mergeConfigObjects(a, b, c || shaka.util.PlayerConfiguration.createDefault(), d, "")
    };
    shaka.util.PlayerConfiguration.defaultTrackSelect = function (a, b) {
      var c = shaka.util.ManifestParserUtils.ContentType, d = shaka.util.LanguageUtils, e = a.filter(function (a) {
        return "variant" == a.type
      }), f = [], g = d.findClosestLocale(b, e.map(function (a) {
        return a.language
      }));
      g && (f = e.filter(function (a) {
        return d.normalize(a.language) == g
      }));
      0 == f.length && (f = e.filter(function (a) {
        return a.primary
      }));
      0 == f.length && (1 < (new Set(e.map(function (a) {
        return a.language
      }))).size && shaka.log.warning("Could not choose a good audio track based on language preferences or primary tracks.  An arbitrary language will be stored!"),
        f = e);
      var h = f.filter(function (a) {
        return a.height && 480 >= a.height
      });
      h.length && (h.sort(function (a, b) {
        goog.asserts.assert(null != a.height, "Null height");
        goog.asserts.assert(null != b.height, "Null height");
        return b.height - a.height
      }), f = h.filter(function (a) {
        return a.height == h[0].height
      }));
      e = [];
      if (f.length) {
        var k = Math.floor(f.length / 2);
        f.sort(function (a, b) {
          return a.bandwidth - b.bandwidth
        });
        e.push(f[k])
      }
      f = $jscomp.makeIterator(a);
      for (k = f.next(); !k.done; k = f.next()) k = k.value, k.type == c.TEXT && e.push(k);
      return e
    };
    goog.exportSymbol("shaka.util.PlayerConfiguration", shaka.util.PlayerConfiguration);
    goog.exportProperty(shaka.util.PlayerConfiguration, "mergeConfigObjects", shaka.util.PlayerConfiguration.mergeConfigObjects);
    shaka.util.StateHistory = function () {
      this.open_ = null;
      this.closed_ = []
    };
    shaka.util.StateHistory.prototype.update = function (a) {
      null == this.open_ ? this.start_(a) : this.update_(a)
    };
    shaka.util.StateHistory.prototype.getTimeSpentIn = function (a) {
      var b = 0;
      this.open_ && this.open_.state == a && (b += this.open_.duration);
      for (var c = $jscomp.makeIterator(this.closed_), d = c.next(); !d.done; d = c.next()) d = d.value, b += d.state == a ? d.duration : 0;
      return b
    };
    shaka.util.StateHistory.prototype.getCopy = function () {
      for (var a = function (a) {
        return {timestamp: a.timestamp, state: a.state, duration: a.duration}
      }, b = [], c = $jscomp.makeIterator(this.closed_), d = c.next(); !d.done; d = c.next()) b.push(a(d.value));
      this.open_ && b.push(a(this.open_));
      return b
    };
    shaka.util.StateHistory.prototype.start_ = function (a) {
      goog.asserts.assert(null == this.open_, "There must be no open entry in order when we start");
      shaka.log.v1("Changing Player state to", a);
      this.open_ = {timestamp: this.getNowInSeconds_(), state: a, duration: 0}
    };
    shaka.util.StateHistory.prototype.update_ = function (a) {
      goog.asserts.assert(this.open_, "There must be an open entry in order to update it");
      var b = this.getNowInSeconds_();
      this.open_.duration = b - this.open_.timestamp;
      this.open_.state != a && (shaka.log.v1("Changing Player state to", a), this.closed_.push(this.open_), this.open_ = {
        timestamp: b,
        state: a,
        duration: 0
      })
    };
    shaka.util.StateHistory.prototype.getNowInSeconds_ = function () {
      return Date.now() / 1E3
    };
    shaka.util.SwitchHistory = function () {
      this.currentText_ = this.currentVariant_ = null;
      this.history_ = []
    };
    shaka.util.SwitchHistory.prototype.updateCurrentVariant = function (a, b) {
      this.currentVariant_ != a && (this.currentVariant_ = a, this.history_.push({
        timestamp: this.getNowInSeconds_(),
        id: a.id,
        type: "variant",
        fromAdaptation: b,
        bandwidth: a.bandwidth
      }))
    };
    shaka.util.SwitchHistory.prototype.updateCurrentText = function (a, b) {
      this.currentText_ != a && (this.currentText_ = a, this.history_.push({
        timestamp: this.getNowInSeconds_(),
        id: a.id,
        type: "text",
        fromAdaptation: b,
        bandwidth: null
      }))
    };
    shaka.util.SwitchHistory.prototype.getCopy = function () {
      for (var a = [], b = $jscomp.makeIterator(this.history_), c = b.next(); !c.done; c = b.next()) a.push(this.clone_(c.value));
      return a
    };
    shaka.util.SwitchHistory.prototype.getNowInSeconds_ = function () {
      return Date.now() / 1E3
    };
    shaka.util.SwitchHistory.prototype.clone_ = function (a) {
      return {timestamp: a.timestamp, id: a.id, type: a.type, fromAdaptation: a.fromAdaptation, bandwidth: a.bandwidth}
    };
    shaka.util.Stats = function () {
      this.bandwidthEstimate_ = this.currentStreamBandwidth_ = this.maxSegmentDurationSeconds_ = this.liveLatencySeconds_ = this.licenseTimeSeconds_ = this.drmTimeSeconds_ = this.manifestTimeSeconds_ = this.loadLatencySeconds_ = this.totalCorruptedFrames_ = this.totalDecodedFrames_ = this.totalDroppedFrames_ = this.height_ = this.width_ = NaN;
      this.stateHistory_ = new shaka.util.StateHistory;
      this.switchHistory_ = new shaka.util.SwitchHistory
    };
    shaka.util.Stats.prototype.setDroppedFrames = function (a, b) {
      this.totalDroppedFrames_ = a;
      this.totalDecodedFrames_ = b
    };
    shaka.util.Stats.prototype.setCorruptedFrames = function (a) {
      this.totalCorruptedFrames_ = a
    };
    shaka.util.Stats.prototype.setResolution = function (a, b) {
      this.width_ = a;
      this.height_ = b
    };
    shaka.util.Stats.prototype.setLoadLatency = function (a) {
      this.loadLatencySeconds_ = a
    };
    shaka.util.Stats.prototype.setManifestTime = function (a) {
      this.manifestTimeSeconds_ = a
    };
    shaka.util.Stats.prototype.setDrmTime = function (a) {
      this.drmTimeSeconds_ = a
    };
    shaka.util.Stats.prototype.setLicenseTime = function (a) {
      this.licenseTimeSeconds_ = a
    };
    shaka.util.Stats.prototype.setLiveLatency = function (a) {
      this.liveLatencySeconds_ = a
    };
    shaka.util.Stats.prototype.setMaxSegmentDuration = function (a) {
      this.maxSegmentDurationSeconds_ = a
    };
    shaka.util.Stats.prototype.setCurrentStreamBandwidth = function (a) {
      this.currentStreamBandwidth_ = a
    };
    shaka.util.Stats.prototype.setBandwidthEstimate = function (a) {
      this.bandwidthEstimate_ = a
    };
    shaka.util.Stats.prototype.getStateHistory = function () {
      return this.stateHistory_
    };
    shaka.util.Stats.prototype.getSwitchHistory = function () {
      return this.switchHistory_
    };
    shaka.util.Stats.prototype.getBlob = function () {
      return {
        width: this.width_,
        height: this.height_,
        streamBandwidth: this.currentStreamBandwidth_,
        decodedFrames: this.totalDecodedFrames_,
        droppedFrames: this.totalDroppedFrames_,
        corruptedFrames: this.totalCorruptedFrames_,
        estimatedBandwidth: this.bandwidthEstimate_,
        loadLatency: this.loadLatencySeconds_,
        manifestTimeSeconds: this.manifestTimeSeconds_,
        drmTimeSeconds: this.drmTimeSeconds_,
        playTime: this.stateHistory_.getTimeSpentIn("playing"),
        pauseTime: this.stateHistory_.getTimeSpentIn("paused"),
        bufferingTime: this.stateHistory_.getTimeSpentIn("buffering"),
        licenseTime: this.licenseTimeSeconds_,
        liveLatency: this.liveLatencySeconds_,
        maxSegmentDuration: this.maxSegmentDurationSeconds_,
        stateHistory: this.stateHistory_.getCopy(),
        switchHistory: this.switchHistory_.getCopy()
      }
    };
    shaka.util.Stats.getEmptyBlob = function () {
      return {
        width: NaN,
        height: NaN,
        streamBandwidth: NaN,
        decodedFrames: NaN,
        droppedFrames: NaN,
        corruptedFrames: NaN,
        estimatedBandwidth: NaN,
        loadLatency: NaN,
        manifestTimeSeconds: NaN,
        drmTimeSeconds: NaN,
        playTime: NaN,
        pauseTime: NaN,
        bufferingTime: NaN,
        licenseTime: NaN,
        liveLatency: NaN,
        maxSegmentDuration: NaN,
        switchHistory: [],
        stateHistory: []
      }
    };
    shaka.Player = function (a, b) {
      shaka.util.FakeEventTarget.call(this);
      var c = this;
      this.loadMode_ = shaka.Player.LoadMode.NOT_LOADED;
      this.videoContainer_ = this.video_ = null;
      this.isTextVisible_ = !1;
      this.eventManager_ = new shaka.util.EventManager;
      this.abrManagerFactory_ = this.abrManager_ = this.assetUri_ = this.manifest_ = this.parserFactory_ = this.parser_ = this.streamingEngine_ = this.regionTimeline_ = this.bufferObserver_ = this.bufferPoller_ = this.playRateController_ = this.playheadObservers_ = this.playhead_ = this.mediaSourceEngine_ =
        this.drmEngine_ = this.networkingEngine_ = null;
      this.nextExternalStreamId_ = 1E9;
      this.config_ = this.defaultConfig_();
      this.maxHwRes_ = {width: Infinity, height: Infinity};
      this.stats_ = null;
      this.currentAdaptationSetCriteria_ = new shaka.media.PreferenceBasedCriteria(this.config_.preferredAudioLanguage, this.config_.preferredVariantRole, this.config_.preferredAudioChannelCount);
      this.currentTextLanguage_ = this.config_.preferredTextLanguage;
      this.currentTextRole_ = this.config_.preferredTextRole;
      this.cleanupOnUnload_ = [];
      b &&
      b(this);
      this.networkingEngine_ = this.createNetworkingEngine();
      this.adManager_ = null;
      shaka.Player.adManagerFactory_ && (this.adManager_ = shaka.util.Functional.callFactory(shaka.Player.adManagerFactory_));
      this.eventManager_.listen(window, "online", function () {
        c.retryStreaming()
      });
      this.detachNode_ = {name: "detach"};
      this.attachNode_ = {name: "attach"};
      this.unloadNode_ = {name: "unload"};
      this.parserNode_ = {name: "manifest-parser"};
      this.manifestNode_ = {name: "manifest"};
      this.mediaSourceNode_ = {name: "media-source"};
      this.drmNode_ =
        {name: "drm-engine"};
      this.loadNode_ = {name: "load"};
      this.srcEqualsDrmNode_ = {name: "src-equals-drm-engine"};
      this.srcEqualsNode_ = {name: "src-equals"};
      var d = shaka.util.AbortableOperation, e = new Map;
      e.set(this.attachNode_, function (a, b) {
        return d.notAbortable(c.onAttach_(a, b))
      });
      e.set(this.detachNode_, function (a, b) {
        return d.notAbortable(c.onDetach_(a, b))
      });
      e.set(this.unloadNode_, function (a, b) {
        return d.notAbortable(c.onUnload_(a, b))
      });
      e.set(this.mediaSourceNode_, function (a, b) {
        var e = c.onInitializeMediaSourceEngine_(a,
          b);
        return d.notAbortable(e)
      });
      e.set(this.parserNode_, function (a, b) {
        var e = c.onInitializeParser_(a, b);
        return d.notAbortable(e)
      });
      e.set(this.manifestNode_, function (a, b) {
        return c.onParseManifest_(a, b)
      });
      e.set(this.drmNode_, function (a, b) {
        var e = c.onInitializeDrm_(a, b);
        return d.notAbortable(e)
      });
      e.set(this.loadNode_, function (a, b) {
        return d.notAbortable(c.onLoad_(a, b))
      });
      e.set(this.srcEqualsDrmNode_, function (a, b) {
        var e = c.onInitializeSrcEqualsDrm_(a, b);
        return d.notAbortable(e)
      });
      e.set(this.srcEqualsNode_, function (a,
                                           b) {
        return c.onSrcEquals_(a, b)
      });
      this.walker_ = new shaka.routing.Walker(this.detachNode_, shaka.Player.createEmptyPayload_(), {
        getNext: function (a, b, d, e) {
          return c.getNextStep_(a, b, d, e)
        }, enterNode: function (a, b, d) {
          c.dispatchEvent(c.makeEvent_(shaka.Player.EventName.OnStateChange, {state: a.name}));
          return e.get(a)(b, d)
        }, handleError: function (a, b) {
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
            return 1 == d.nextAddress ? (shaka.log.warning("The walker saw an error:"), b instanceof shaka.util.Error ?
              shaka.log.warning("Error Code:", b.code) : (shaka.log.warning("Error Message:", b.message), shaka.log.warning("Error Stack:", b.stack)), d.yield(c.onUnload_(a, shaka.Player.createEmptyPayload_()), 2)) : d["return"](a.mediaElement ? c.attachNode_ : c.detachNode_)
          })
        }, onIdle: function (a) {
          c.dispatchEvent(c.makeEvent_(shaka.Player.EventName.OnStateIdle, {state: a.name}))
        }
      });
      a && this.attach(a, !0)
    };
    $jscomp.inherits(shaka.Player, shaka.util.FakeEventTarget);
    shaka.Player.prototype.makeEvent_ = function (a, b) {
      return new shaka.util.FakeEvent(a, b)
    };
    shaka.Player.prototype.destroy = function () {
      var a = this, b;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        switch (c.nextAddress) {
          case 1:
            if (a.loadMode_ == shaka.Player.LoadMode.DESTROYED) return c["return"]();
            a.loadMode_ = shaka.Player.LoadMode.DESTROYED;
            b = a.walker_.startNewRoute(function (b) {
              return {node: a.detachNode_, payload: shaka.Player.createEmptyPayload_(), interruptible: !1}
            });
            return c.yield(new Promise(function (a) {
              b.onStart = function () {
                shaka.log.info("Preparing to destroy walker...")
              };
              b.onEnd =
                function () {
                  a()
                };
              b.onCancel = function () {
                goog.asserts.assert(!1, "Our final detach call should never be cancelled.");
                a()
              };
              b.onError = function () {
                goog.asserts.assert(!1, "Our final detach call should never see an error");
                a()
              };
              b.onSkip = function () {
                goog.asserts.assert(!1, "Our final detach call should never be skipped");
                a()
              }
            }), 2);
          case 2:
            return c.yield(a.walker_.destroy(), 3);
          case 3:
            a.eventManager_ && (a.eventManager_.release(), a.eventManager_ = null);
            a.abrManagerFactory_ = null;
            a.abrManager_ = null;
            a.config_ = null;
            a.stats_ =
              null;
            a.videoContainer_ = null;
            if (!a.networkingEngine_) {
              c.jumpTo(0);
              break
            }
            return c.yield(a.networkingEngine_.destroy(), 5);
          case 5:
            a.networkingEngine_ = null, c.jumpToEnd()
        }
      })
    };
    shaka.Player.registerSupportPlugin = function (a, b) {
      shaka.Player.supportPlugins_[a] = b
    };
    shaka.Player.setAdManagerFactory = function (a) {
      shaka.Player.adManagerFactory_ = a
    };
    shaka.Player.isBrowserSupported = function () {
      if (!(window.Promise && window.Uint8Array && Array.prototype.forEach)) return !1;
      var a = shaka.util.Platform.safariVersion();
      return a && 12 > a || !shaka.media.DrmEngine.isBrowserSupported() ? !1 : shaka.util.Platform.supportsMediaSource() ? !0 : shaka.util.Platform.supportsMediaType("application/x-mpegurl")
    };
    shaka.Player.probeSupport = function () {
      var a, b, c, d, e, f;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
        if (1 == g.nextAddress) return goog.asserts.assert(shaka.Player.isBrowserSupported(), "Must have basic support"), g.yield(shaka.media.DrmEngine.probeSupport(), 2);
        a = g.yieldResult;
        b = shaka.media.ManifestParser.probeSupport();
        c = shaka.media.MediaSourceEngine.probeSupport();
        d = {manifest: b, media: c, drm: a};
        e = shaka.Player.supportPlugins_;
        for (f in e) d[f] = e[f]();
        return g["return"](d)
      })
    };
    shaka.Player.prototype.attach = function (a, b) {
      b = void 0 === b ? !0 : b;
      if (this.loadMode_ == shaka.Player.LoadMode.DESTROYED) return Promise.reject(this.createAbortLoadError_());
      var c = shaka.Player.createEmptyPayload_();
      c.mediaElement = a;
      shaka.util.Platform.supportsMediaSource() || (b = !1);
      var d = b ? this.mediaSourceNode_ : this.attachNode_, e = this.walker_.startNewRoute(function (a) {
        return {node: d, payload: c, interruptible: !1}
      });
      e.onStart = function () {
        return shaka.log.info("Starting attach...")
      };
      return this.wrapWalkerListenersWithPromise_(e)
    };
    shaka.Player.prototype.detach = function () {
      var a = this;
      if (this.loadMode_ == shaka.Player.LoadMode.DESTROYED) return Promise.reject(this.createAbortLoadError_());
      var b = this.walker_.startNewRoute(function (b) {
        return {node: a.detachNode_, payload: shaka.Player.createEmptyPayload_(), interruptible: !1}
      });
      b.onStart = function () {
        return shaka.log.info("Starting detach...")
      };
      return this.wrapWalkerListenersWithPromise_(b)
    };
    shaka.Player.prototype.unload = function (a) {
      var b = this;
      a = void 0 === a ? !0 : a;
      if (this.loadMode_ == shaka.Player.LoadMode.DESTROYED) return Promise.reject(this.createAbortLoadError_());
      shaka.util.Platform.supportsMediaSource() || (a = !1);
      var c = shaka.Player.createEmptyPayload_(), d = this.walker_.startNewRoute(function (d) {
        var e = d.mediaElement && a ? b.mediaSourceNode_ : d.mediaElement ? b.attachNode_ : b.detachNode_;
        goog.asserts.assert(e, "We should have picked a destination.");
        c.mediaElement = d.mediaElement;
        return {
          node: e, payload: c,
          interruptible: !1
        }
      });
      d.onStart = function () {
        return shaka.log.info("Starting unload...")
      };
      return this.wrapWalkerListenersWithPromise_(d)
    };
    shaka.Player.prototype.load = function (a, b, c) {
      var d = this;
      if (this.loadMode_ == shaka.Player.LoadMode.DESTROYED) return Promise.reject(this.createAbortLoadError_());
      this.dispatchEvent(this.makeEvent_(shaka.Player.EventName.Loading));
      var e = shaka.Player.createEmptyPayload_();
      e.uri = a;
      e.startTimeOfLoad = Date.now() / 1E3;
      c && (e.mimeType = c);
      void 0 !== b && (e.startTime = b);
      var f = this.shouldUseSrcEquals_(e) ? this.srcEqualsNode_ : this.loadNode_,
        g = this.walker_.startNewRoute(function (a) {
          if (null == a.mediaElement) return null;
          e.mediaElement =
            a.mediaElement;
          return {node: f, payload: e, interruptible: !0}
        });
      this.stats_ = new shaka.util.Stats;
      g.onStart = function () {
        return shaka.log.info("Starting load of " + a + "...")
      };
      return new Promise(function (a, b) {
        g.onSkip = function () {
          return b(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.NO_VIDEO_ELEMENT))
        };
        g.onEnd = function () {
          a();
          d.dispatchEvent(d.makeEvent_(shaka.Player.EventName.Loaded))
        };
        g.onCancel = function () {
          return b(d.createAbortLoadError_())
        };
        g.onError = function (a) {
          return b(a)
        }
      })
    };
    shaka.Player.prototype.shouldUseSrcEquals_ = function (a) {
      var b = shaka.util.Platform;
      if (!b.supportsMediaSource()) return !0;
      var c = a.mimeType, d = a.uri || "";
      c || (c = {
        mp4: "video/mp4",
        m4v: "video/mp4",
        m4a: "audio/mp4",
        webm: "video/webm",
        weba: "audio/webm",
        mkv: "video/webm",
        ts: "video/mp2t",
        ogv: "video/ogg",
        ogg: "audio/ogg",
        mpg: "video/mpeg",
        mpeg: "video/mpeg",
        m3u8: "application/x-mpegurl",
        mp3: "audio/mpeg",
        aac: "audio/aac",
        flac: "audio/flac",
        wav: "audio/wav"
      }[shaka.media.ManifestParser.getExtension(d)]);
      if (c) {
        a = "" != (a.mediaElement ||
          b.anyMediaElement()).canPlayType(c);
        if (!a) return !1;
        c = shaka.media.ManifestParser.isSupported(d, c);
        if (!c) return !0;
        goog.asserts.assert(a && c, "Both native and MSE playback should be possible!");
        return b.isApple() && this.config_.streaming.useNativeHlsOnSafari
      }
      return !1
    };
    shaka.Player.prototype.onAttach_ = function (a, b) {
      var c = this;
      goog.asserts.assert(null == a.mediaElement || a.mediaElement == b.mediaElement, "The routing logic failed. MediaElement requirement failed.");
      null == a.mediaElement && (a.mediaElement = b.mediaElement, this.eventManager_.listen(a.mediaElement, "error", function (a) {
        return c.onVideoError_(a)
      }));
      this.video_ = a.mediaElement;
      return Promise.resolve()
    };
    shaka.Player.prototype.onDetach_ = function (a, b) {
      a.mediaElement && (this.eventManager_.unlisten(a.mediaElement, "error"), a.mediaElement = null);
      this.video_ = null;
      return Promise.resolve()
    };
    shaka.Player.prototype.onUnload_ = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m, n;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        switch (b.nextAddress) {
          case 1:
            return c.loadMode_ != shaka.Player.LoadMode.DESTROYED && (c.loadMode_ = shaka.Player.LoadMode.NOT_LOADED), d = c.cleanupOnUnload_.map(function (a) {
              return a()
            }), c.cleanupOnUnload_ = [], b.yield(Promise.all(d), 2);
          case 2:
            c.dispatchEvent(c.makeEvent_(shaka.Player.EventName.Unloading));
            a.mimeType = null;
            a.startTime = null;
            a.uri = null;
            a.mediaElement && (c.eventManager_.unlisten(a.mediaElement,
              "loadedmetadata"), c.eventManager_.unlisten(a.mediaElement, "playing"), c.eventManager_.unlisten(a.mediaElement, "pause"), c.eventManager_.unlisten(a.mediaElement, "ended"), c.eventManager_.unlisten(a.mediaElement, "ratechange"));
            c.playheadObservers_ && (c.playheadObservers_.release(), c.playheadObservers_ = null);
            c.bufferPoller_ && (c.bufferPoller_.stop(), c.bufferPoller_ = null);
            if (!c.parser_) {
              b.jumpTo(3);
              break
            }
            return b.yield(c.parser_.stop(), 4);
          case 4:
            c.parser_ = null, c.parserFactory_ = null;
          case 3:
            if (!c.abrManager_) {
              b.jumpTo(5);
              break
            }
            return b.yield(c.abrManager_.stop(), 5);
          case 5:
            if (!c.streamingEngine_) {
              b.jumpTo(7);
              break
            }
            return b.yield(c.streamingEngine_.destroy(), 8);
          case 8:
            c.streamingEngine_ = null;
          case 7:
            c.playRateController_ && (c.playRateController_.release(), c.playRateController_ = null);
            c.playhead_ && (c.playhead_.release(), c.playhead_ = null);
            if (!c.mediaSourceEngine_) {
              b.jumpTo(9);
              break
            }
            return b.yield(c.mediaSourceEngine_.destroy(), 10);
          case 10:
            c.mediaSourceEngine_ = null;
          case 9:
            if (c.adManager_) c.adManager_.onAssetUnload();
            if (!a.mediaElement ||
              !a.mediaElement.src) {
              b.jumpTo(11);
              break
            }
            return b.yield(new Promise(function (a) {
              return (new shaka.util.Timer(a)).tickAfter(.1)
            }), 12);
          case 12:
            a.mediaElement.removeAttribute("src"), a.mediaElement.load();
          case 11:
            if (!c.drmEngine_) {
              b.jumpTo(13);
              break
            }
            return b.yield(c.drmEngine_.destroy(), 14);
          case 14:
            c.drmEngine_ = null;
          case 13:
            c.assetUri_ = null;
            c.bufferObserver_ = null;
            if (c.manifest_) {
              e = $jscomp.makeIterator(c.manifest_.variants);
              for (f = e.next(); !f.done; f = e.next()) for (g = f.value, h = $jscomp.makeIterator([g.audio,
                g.video]), k = h.next(); !k.done; k = h.next()) (l = k.value) && l.segmentIndex && l.segmentIndex.release();
              m = $jscomp.makeIterator(c.manifest_.textStreams);
              for (k = m.next(); !k.done; k = m.next()) n = k.value, n.segmentIndex && n.segmentIndex.release()
            }
            c.manifest_ = null;
            c.stats_ = new shaka.util.Stats;
            c.lastTextFactory_ = null;
            c.updateBufferState_();
            b.jumpToEnd()
        }
      })
    };
    shaka.Player.prototype.onInitializeMediaSourceEngine_ = function (a, b) {
      var c = this, d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) return goog.asserts.assert(shaka.util.Platform.supportsMediaSource(), "We should not be initializing media source on a platform that does not support media source."), goog.asserts.assert(a.mediaElement, "We should have a media element when initializing media source."), goog.asserts.assert(a.mediaElement == b.mediaElement, "|has| and |wants| should have the same media element when initializing media source."),
          goog.asserts.assert(null == c.mediaSourceEngine_, "We should not have a media source engine yet."), d = shaka.media.MuxJSClosedCaptionParser.isSupported() ? new shaka.media.MuxJSClosedCaptionParser : new shaka.media.NoopCaptionParser, e = c.config_.textDisplayFactory, f = shaka.util.Functional.callFactory(e), c.lastTextFactory_ = e, g = c.createMediaSourceEngine(a.mediaElement, d, f, function (a, b, d) {
          c.processTimedMetadataMediaSrc_(a, b, d)
        }), h.yield(g.open(), 2);
        c.mediaSourceEngine_ = g;
        h.jumpToEnd()
      })
    };
    shaka.Player.prototype.onInitializeParser_ = function (a, b) {
      var c = this, d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) return goog.asserts.assert(a.mediaElement, "We should have a media element when initializing the parser."), goog.asserts.assert(a.mediaElement == b.mediaElement, "|has| and |wants| should have the same media element when initializing the parser."), goog.asserts.assert(c.networkingEngine_, "Need networking engine when initializing the parser."), goog.asserts.assert(c.config_,
          "Need player config when initializing the parser."), a.mimeType = b.mimeType, a.uri = b.uri, goog.asserts.assert(a.uri, "We should have an asset uri when initializing the parsing."), d = a.uri, e = c.networkingEngine_, c.assetUri_ = d, f = c, h.yield(shaka.media.ManifestParser.getFactory(d, e, c.config_.manifest.retryParameters, a.mimeType), 2);
        f.parserFactory_ = h.yieldResult;
        goog.asserts.assert(c.parserFactory_, "Must have manifest parser");
        c.parser_ = shaka.util.Functional.callFactory(c.parserFactory_);
        g = shaka.util.ObjectUtils.cloneObject(c.config_.manifest);
        b.mediaElement && "AUDIO" === b.mediaElement.nodeName && (g.disableVideo = !0);
        c.parser_.configure(g);
        h.jumpToEnd()
      })
    };
    shaka.Player.prototype.onParseManifest_ = function (a, b) {
      var c = this;
      goog.asserts.assert(a.mimeType == b.mimeType, "|has| and |wants| should have the same mime type when parsing.");
      goog.asserts.assert(a.uri == b.uri, "|has| and |wants| should have the same uri when parsing.");
      goog.asserts.assert(a.uri, "|has| should have a valid uri when parsing.");
      goog.asserts.assert(a.uri == this.assetUri_, "|has.uri| should match the cached asset uri.");
      goog.asserts.assert(this.networkingEngine_, "Need networking engine to parse manifest.");
      goog.asserts.assert(this.config_, "Need player config to parse manifest.");
      goog.asserts.assert(this.parser_, "|this.parser_| should have been set in an earlier step.");
      var d = a.uri, e = this.networkingEngine_;
      this.regionTimeline_ = new shaka.media.RegionTimeline(function () {
        return c.seekRange()
      });
      this.regionTimeline_.setListeners(function (a) {
        c.onRegionEvent_(shaka.Player.EventName.TimelineRegionAdded, a);
        if (c.adManager_) c.adManager_.onDashTimedMetadata(a)
      });
      var f = {
        networkingEngine: e, filter: function (a) {
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
            return b["return"](c.filterManifest_(a))
          })
        },
        onTimelineRegionAdded: function (a) {
          return c.regionTimeline_.addRegion(a)
        }, onEvent: function (a) {
          return c.dispatchEvent(a)
        }, onError: function (a) {
          return c.onError_(a)
        }
      }, g = Date.now() / 1E3;
      return new shaka.util.AbortableOperation(function () {
        var a, b, e, m;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
          if (1 == h.nextAddress) return a = c, h.yield(c.parser_.start(d, f), 2);
          a.manifest_ = h.yieldResult;
          b = c.makeEvent_(shaka.Player.EventName.ManifestParsed);
          c.dispatchEvent(b);
          if (0 == c.manifest_.variants.length) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
            shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.NO_VARIANTS);
          shaka.Player.filterForAVVariants_(c.manifest_);
          e = Date.now() / 1E3;
          m = e - g;
          c.stats_.setManifestTime(m);
          h.jumpToEnd()
        })
      }(), function () {
        shaka.log.info("Aborting parser step...");
        return c.parser_.stop()
      })
    };
    shaka.Player.prototype.onInitializeDrm_ = function (a, b) {
      var c = this, d, e;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        if (1 == f.nextAddress) return goog.asserts.assert(a.mimeType == b.mimeType, "The load graph should have ensured the mime types matched."), goog.asserts.assert(a.uri == b.uri, "The load graph should have ensured the uris matched"), goog.asserts.assert(c.networkingEngine_, "|onInitializeDrm_| should never be called after |destroy|"), goog.asserts.assert(c.config_, "|onInitializeDrm_| should never be called after |destroy|"),
          goog.asserts.assert(c.manifest_, "|this.manifest_| should have been set in an earlier step."), d = Date.now() / 1E3, e = !0, c.drmEngine_ = c.createDrmEngine({
          netEngine: c.networkingEngine_,
          onError: function (a) {
            c.onError_(a)
          },
          onKeyStatus: function (a) {
            c.onKeyStatus_(a)
          },
          onExpirationUpdated: function (a, b) {
            c.onExpirationUpdated_(a, b)
          },
          onEvent: function (a) {
            c.dispatchEvent(a);
            a.type == shaka.Player.EventName.DrmSessionUpdate && e && (e = !1, a = Date.now() / 1E3 - d, c.stats_.setDrmTime(a))
          }
        }), c.drmEngine_.configure(c.config_.drm), f.yield(c.drmEngine_.initForPlayback(c.manifest_.variants,
          c.manifest_.offlineSessionIds), 2);
        c.filterManifest_(c.manifest_);
        f.jumpToEnd()
      })
    };
    shaka.Player.prototype.onLoad_ = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m, n, p, q;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (r) {
        switch (r.nextAddress) {
          case 1:
            return goog.asserts.assert(a.mimeType == b.mimeType, "|has| and |wants| should have the same mime type when loading."), goog.asserts.assert(a.uri == b.uri, "|has| and |wants| should have the same uri when loading."), goog.asserts.assert(a.mediaElement, "We should have a media element when loading."), goog.asserts.assert(!isNaN(b.startTimeOfLoad),
              "|wants| should tell us when the load was originally requested"), a.startTime = b.startTime, d = a.mediaElement, e = a.uri, c.assetUri_ = e, c.playRateController_ = new shaka.media.PlayRateController({
              getRate: function () {
                return a.mediaElement.playbackRate
              }, setRate: function (b) {
                a.mediaElement.playbackRate = b
              }, movePlayhead: function (b) {
                a.mediaElement.currentTime += b
              }
            }), f = function () {
              return c.updateStateHistory_()
            }, g = function () {
              return c.onRateChange_()
            }, c.eventManager_.listen(d, "playing", f), c.eventManager_.listen(d, "pause",
              f), c.eventManager_.listen(d, "ended", f), c.eventManager_.listen(d, "ratechange", g), h = c.config_.abrFactory, c.abrManager_ && c.abrManagerFactory_ == h || (c.abrManagerFactory_ = h, c.abrManager_ = shaka.util.Functional.callFactory(h), "function" != typeof c.abrManager_.playbackRateChanged && (shaka.Deprecate.deprecateFeature(4, "AbrManager", "Please use an AbrManager with playbackRateChanged function."), c.abrManager_.playbackRateChanged = function (a) {
            }), c.abrManager_.configure(c.config_.abr)), c.createTextStreamsForClosedCaptions_(c.manifest_.variants),
              c.currentAdaptationSetCriteria_ = new shaka.media.PreferenceBasedCriteria(c.config_.preferredAudioLanguage, c.config_.preferredVariantRole, c.config_.preferredAudioChannelCount), c.currentTextLanguage_ = c.config_.preferredTextLanguage, shaka.Player.applyPlayRange_(c.manifest_.presentationTimeline, c.config_.playRangeStart, c.config_.playRangeEnd), r.yield(c.drmEngine_.attach(d), 2);
          case 2:
            c.abrManager_.init(function (a, b, d) {
              return c.switch_(a, b, d)
            });
            c.playhead_ = c.createPlayhead(a.startTime);
            c.playheadObservers_ =
              c.createPlayheadObserversForMSE_();
            k = Math.max(c.manifest_.minBufferTime, c.config_.streaming.rebufferingGoal);
            c.startBufferManagement_(k);
            shaka.util.StreamUtils.chooseCodecsAndFilterManifest(c.manifest_, c.config_.preferredAudioChannelCount);
            c.streamingEngine_ = c.createStreamingEngine();
            c.streamingEngine_.configure(c.config_.streaming);
            c.loadMode_ = shaka.Player.LoadMode.MEDIA_SOURCE;
            c.dispatchEvent(c.makeEvent_(shaka.Player.EventName.Streaming));
            l = c.chooseVariant_();
            goog.asserts.assert(l, "Must choose an initial variant!");
            c.addVariantToSwitchHistory_(l, !0);
            c.streamingEngine_.switchVariant(l, !1, 0);
            (m = c.chooseTextStream_()) && c.addTextStreamToSwitchHistory_(m, !0);
            c.setInitialTextState_(l, m);
            m && c.shouldStreamText_() && c.streamingEngine_.switchTextStream(m);
            if (!c.config_.streaming.startAtSegmentBoundary) {
              r.jumpTo(3);
              break
            }
            n = c.playhead_.getTime();
            return r.yield(c.adjustStartTime_(l, n), 4);
          case 4:
            p = r.yieldResult, c.playhead_.setStartTime(p);
          case 3:
            return r.yield(c.streamingEngine_.start(), 5);
          case 5:
            c.config_.abr.enabled && (c.abrManager_.enable(),
              c.onAbrStatusChanged_()), c.filterManifest_(c.manifest_), c.onTracksChanged_(), c.onAdaptation_(), c.updateAbrManagerVariants_(), q = c.manifest_.variants.some(function (a) {
              return a.primary
            }), c.config_.preferredAudioLanguage || q || shaka.log.warning("No preferred audio language set.  We have chosen an arbitrary language initially"), c.eventManager_.listenOnce(d, "loadedmetadata", function () {
              var a = Date.now() / 1E3 - b.startTimeOfLoad;
              c.stats_.setLoadLatency(a)
            }), r.jumpToEnd()
        }
      })
    };
    shaka.Player.prototype.onInitializeSrcEqualsDrm_ = function (a, b) {
      var c = this, d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        return 1 == b.nextAddress ? (d = shaka.util.ManifestParserUtils.ContentType, goog.asserts.assert(c.networkingEngine_, "|onInitializeSrcEqualsDrm_| should never be called after |destroy|"), goog.asserts.assert(c.config_, "|onInitializeSrcEqualsDrm_| should never be called after |destroy|"), e = Date.now() / 1E3, f = !0, c.drmEngine_ = c.createDrmEngine({
          netEngine: c.networkingEngine_,
          onError: function (a) {
            c.onError_(a)
          }, onKeyStatus: function (a) {
            c.onKeyStatus_(a)
          }, onExpirationUpdated: function (a, b) {
            c.onExpirationUpdated_(a, b)
          }, onEvent: function (a) {
            c.dispatchEvent(a);
            a.type == shaka.Player.EventName.DrmSessionUpdate && f && (f = !1, a = Date.now() / 1E3 - e, c.stats_.setDrmTime(a))
          }
        }), c.drmEngine_.configure(c.config_.drm), g = {
          id: 0, language: "und", primary: !1, audio: null, video: {
            id: 0,
            originalId: null,
            createSegmentIndex: function () {
              return Promise.resolve()
            },
            segmentIndex: null,
            mimeType: "video/mp4",
            codecs: "",
            encrypted: !0,
            drmInfos: [],
            keyIds: new Set,
            language: "und",
            label: null,
            type: d.VIDEO,
            primary: !1,
            trickModeVideo: null,
            emsgSchemeIdUris: null,
            roles: [],
            channelsCount: null,
            audioSamplingRate: null,
            closedCaptions: null
          }, bandwidth: 100, allowedByApplication: !0, allowedByKeySystem: !0
        }, b.yield(c.drmEngine_.initForPlayback([g], []), 2)) : b.yield(c.drmEngine_.attach(a.mediaElement), 0)
      })
    };
    shaka.Player.prototype.onSrcEquals_ = function (a, b) {
      var c = this;
      goog.asserts.assert(a.mediaElement, "We should have a media element when loading.");
      goog.asserts.assert(b.uri, "|has| should have a valid uri when loading.");
      goog.asserts.assert(!isNaN(b.startTimeOfLoad), "|wants| should tell us when the load was originally requested");
      goog.asserts.assert(this.video_ == a.mediaElement, "The video element should match our media element");
      a.uri = b.uri;
      a.startTime = b.startTime;
      this.assetUri_ = a.uri;
      this.playhead_ = new shaka.media.SrcEqualsPlayhead(a.mediaElement);
      null != a.startTime && this.playhead_.setStartTime(a.startTime);
      this.playRateController_ = new shaka.media.PlayRateController({
        getRate: function () {
          return a.mediaElement.playbackRate
        }, setRate: function (b) {
          a.mediaElement.playbackRate = b
        }, movePlayhead: function (b) {
          a.mediaElement.currentTime += b
        }
      });
      this.startBufferManagement_(this.config_.streaming.rebufferingGoal);
      var d = function () {
        return c.updateStateHistory_()
      };
      this.eventManager_.listen(a.mediaElement, "playing", d);
      this.eventManager_.listen(a.mediaElement, "pause",
        d);
      this.eventManager_.listen(a.mediaElement, "ended", d);
      this.eventManager_.listen(a.mediaElement, "ratechange", function () {
        return c.onRateChange_()
      });
      "none" != this.video_.preload && this.eventManager_.listenOnce(this.video_, "loadedmetadata", function () {
        var a = Date.now() / 1E3 - b.startTimeOfLoad;
        c.stats_.setLoadLatency(a)
      });
      this.video_.audioTracks && (this.eventManager_.listen(this.video_.audioTracks, "addtrack", function () {
        return c.onTracksChanged_()
      }), this.eventManager_.listen(this.video_.audioTracks, "removetrack",
        function () {
          return c.onTracksChanged_()
        }), this.eventManager_.listen(this.video_.audioTracks, "change", function () {
        return c.onTracksChanged_()
      }));
      this.video_.textTracks && (this.eventManager_.listen(this.video_.textTracks, "addtrack", function (a) {
        c.onTracksChanged_();
        c.processTimedMetadataSrcEqls_(a)
      }), this.eventManager_.listen(this.video_.textTracks, "removetrack", function () {
        return c.onTracksChanged_()
      }), this.eventManager_.listen(this.video_.textTracks, "change", function () {
        return c.onTracksChanged_()
      }));
      a.mediaElement.src =
        a.uri;
      (shaka.util.Platform.isTizen() || shaka.util.Platform.isWebOS()) && a.mediaElement.load();
      this.loadMode_ = shaka.Player.LoadMode.SRC_EQUALS;
      this.dispatchEvent(this.makeEvent_(shaka.Player.EventName.Streaming));
      var e = new shaka.util.PublicPromise;
      shaka.util.MediaReadyState.waitForReadyState(this.video_, HTMLMediaElement.HAVE_METADATA, this.eventManager_, function () {
        e.resolve()
      });
      var f = !1;
      this.cleanupOnUnload_.push(function () {
        f = !0
      });
      shaka.util.MediaReadyState.waitForReadyState(this.video_, HTMLMediaElement.HAVE_CURRENT_DATA,
        this.eventManager_, function () {
          var a;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
            if (1 == b.nextAddress) {
              if (f) return b["return"]();
              c.setupPreferredAudioOnSrc_();
              a = c.filterTextTracks_();
              return a.find(function (a) {
                return "disabled" != a.mode
              }) ? b.jumpTo(2) : b.yield(new Promise(function (a) {
                c.eventManager_.listenOnce(c.video_.textTracks, "change", a);
                (new shaka.util.Timer(a)).tickAfter(1)
              }), 2)
            }
            if (f) return b["return"]();
            c.setupPreferredTextOnSrc_();
            b.jumpToEnd()
          })
        });
      this.video_.error ? e.reject(this.videoErrorToShakaError_()) :
        "none" == this.video_.preload && (shaka.log.alwaysWarn('With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'), e.resolve());
      this.eventManager_.listenOnce(this.video_, "error", function () {
        e.reject(c.videoErrorToShakaError_())
      });
      return new shaka.util.AbortableOperation(e, function () {
        var a = new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
          shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.OPERATION_ABORTED);
        e.reject(a);
        return Promise.resolve()
      })
    };
    shaka.Player.prototype.setupPreferredAudioOnSrc_ = function () {
      var a = this.config_.preferredAudioLanguage;
      if ("" != a) {
        this.selectAudioLanguage(a);
        var b = this.config_.preferredVariantRole;
        "" != b && this.selectAudioLanguage(a, b)
      }
    };
    shaka.Player.prototype.setupPreferredTextOnSrc_ = function () {
      var a = this.config_.preferredTextLanguage;
      if ("" != a) {
        this.selectTextLanguage(a);
        var b = this.config_.preferredTextRole;
        "" != b && this.selectTextLanguage(a, b)
      }
    };
    shaka.Player.prototype.processTimedMetadataSrcEqls_ = function (a) {
      var b = this, c = a.track;
      goog.asserts.assert(c instanceof TextTrack, "Wrong track type!");
      "metadata" == c.kind && (c.mode = "hidden", this.eventManager_.listen(c, "cuechange", function () {
        if (c.activeCues) for (var a = $jscomp.makeIterator(c.activeCues), e = a.next(); !e.done; e = a.next()) if (e = e.value, b.dispatchMetadataEvent_(e.startTime, e.endTime, e.type, e.value), b.adManager_) b.adManager_.onCueMetadataChange(e.value)
      }), (new shaka.util.Timer(function () {
        var a = b.filterTextTracks_();
        a = $jscomp.makeIterator(a);
        for (var c = a.next(); !c.done; c = a.next()) c.value.mode = "hidden"
      })).tickNow().tickAfter(.5))
    };
    shaka.Player.prototype.processTimedMetadataMediaSrc_ = function (a, b, c) {
      a = $jscomp.makeIterator(a);
      for (var d = a.next(); !d.done; d = a.next()) if (d = d.value, d.data && d.cueTime && d.frames) {
        for (var e = d.cueTime + b, f = c, g = $jscomp.makeIterator(d.frames), h = g.next(); !h.done; h = g.next()) this.dispatchMetadataEvent_(e, f, "ID3", h.value);
        if (this.adManager_) this.adManager_.onHlsTimedMetadata(d, e)
      }
    };
    shaka.Player.prototype.dispatchMetadataEvent_ = function (a, b, c, d) {
      goog.asserts.assert(!b || a <= b, "Metadata start time should be less or equal to the end time!");
      this.dispatchEvent(this.makeEvent_(shaka.Player.EventName.Metadata, {
        startTime: a,
        endTime: b,
        metadataType: c,
        payload: d
      }))
    };
    shaka.Player.filterForAVVariants_ = function (a) {
      var b = function (a) {
        return a.video && a.audio || a.video && a.video.codecs.includes(",")
      };
      a.variants.some(b) && (shaka.log.debug("Found variant with audio and video content, so filtering out audio-only content."), a.variants = a.variants.filter(b))
    };
    shaka.Player.prototype.createDrmEngine = function (a) {
      return new shaka.media.DrmEngine(a, this.config_.drm.updateExpirationTime)
    };
    shaka.Player.prototype.createNetworkingEngine = function () {
      var a = this;
      return new shaka.net.NetworkingEngine(function (b, c) {
        a.abrManager_ && a.abrManager_.segmentDownloaded(b, c)
      })
    };
    shaka.Player.prototype.createPlayhead = function (a) {
      var b = this;
      goog.asserts.assert(this.manifest_, "Must have manifest");
      goog.asserts.assert(this.video_, "Must have video");
      return new shaka.media.MediaSourcePlayhead(this.video_, this.manifest_, this.config_.streaming, a, function () {
        return b.onSeek_()
      }, function (a) {
        return b.dispatchEvent(a)
      })
    };
    shaka.Player.prototype.createPlayheadObserversForMSE_ = function () {
      var a = this;
      goog.asserts.assert(this.manifest_, "Must have manifest");
      goog.asserts.assert(this.regionTimeline_, "Must have region timeline");
      goog.asserts.assert(this.video_, "Must have video element");
      var b = new shaka.media.RegionObserver(this.regionTimeline_);
      b.setListeners(function (b, c) {
        a.onRegionEvent_(shaka.Player.EventName.TimelineRegionEnter, b)
      }, function (b, c) {
        a.onRegionEvent_(shaka.Player.EventName.TimelineRegionExit, b)
      }, function (b,
                   c) {
        c || (a.onRegionEvent_(shaka.Player.EventName.TimelineRegionEnter, b), a.onRegionEvent_(shaka.Player.EventName.TimelineRegionExit, b))
      });
      var c = new shaka.media.PlayheadObserverManager(this.video_);
      c.manage(b);
      return c
    };
    shaka.Player.prototype.startBufferManagement_ = function (a) {
      var b = this;
      goog.asserts.assert(!this.bufferObserver_, "No buffering observer should exist before initialization.");
      goog.asserts.assert(!this.bufferPoller_, "No buffer timer should exist before initialization.");
      this.bufferObserver_ = new shaka.media.BufferingObserver(1, 2);
      this.bufferObserver_.setState(shaka.media.BufferingObserver.State.STARVING);
      this.updateBufferingSettings_(a);
      this.updateBufferState_();
      this.bufferPoller_ = (new shaka.util.Timer(function () {
        b.pollBufferState_()
      })).tickEvery(.25)
    };
    shaka.Player.prototype.updateBufferingSettings_ = function (a) {
      this.bufferObserver_.setThresholds(a, Math.min(shaka.Player.TYPICAL_BUFFERING_THRESHOLD_, a / 2))
    };
    shaka.Player.prototype.pollBufferState_ = function () {
      goog.asserts.assert(this.video_, "Need a media element to update the buffering observer");
      goog.asserts.assert(this.bufferObserver_, "Need a buffering observer to update");
      switch (this.loadMode_) {
        case shaka.Player.LoadMode.SRC_EQUALS:
          var a = this.isBufferedToEndSrc_();
          break;
        case shaka.Player.LoadMode.MEDIA_SOURCE:
          a = this.isBufferedToEndMS_();
          break;
        default:
          a = !1
      }
      var b = shaka.media.TimeRangesUtils.bufferedAheadOf(this.video_.buffered, this.video_.currentTime);
      this.bufferObserver_.update(b, a) && this.updateBufferState_()
    };
    shaka.Player.prototype.createMediaSourceEngine = function (a, b, c, d) {
      return new shaka.media.MediaSourceEngine(a, b, c, d)
    };
    shaka.Player.prototype.createStreamingEngine = function () {
      var a = this;
      goog.asserts.assert(this.playhead_ && this.abrManager_ && this.mediaSourceEngine_ && this.manifest_, "Must not be destroyed");
      return new shaka.media.StreamingEngine(this.manifest_, {
        getPresentationTime: function () {
          return a.playhead_.getTime()
        }, getBandwidthEstimate: function () {
          return a.abrManager_.getBandwidthEstimate()
        }, mediaSourceEngine: this.mediaSourceEngine_, netEngine: this.networkingEngine_, onError: function (b) {
          return a.onError_(b)
        }, onEvent: function (b) {
          return a.dispatchEvent(b)
        },
        onManifestUpdate: function () {
          return a.onManifestUpdate_()
        }, onSegmentAppended: function () {
          return a.onSegmentAppended_()
        }
      })
    };
    shaka.Player.prototype.configure = function (a, b) {
      goog.asserts.assert(this.config_, "Config must not be null!");
      goog.asserts.assert("object" == typeof a || 2 == arguments.length, "String configs should have values!");
      2 == arguments.length && "string" == typeof a && (a = shaka.util.ConfigUtils.convertToConfigObject(a, b));
      goog.asserts.assert("object" == typeof a, "Should be an object!");
      a.manifest && a.manifest.dash && "defaultPresentationDelay" in a.manifest.dash && (shaka.Deprecate.deprecateFeature(4, "manifest.dash.defaultPresentationDelay configuration",
        "Please Use manifest.defaultPresentationDelay instead."), a.manifest.defaultPresentationDelay = a.manifest.dash.defaultPresentationDelay, delete a.manifest.dash.defaultPresentationDelay);
      var c = shaka.util.PlayerConfiguration.mergeConfigObjects(this.config_, a, this.defaultConfig_());
      this.applyConfig_();
      return c
    };
    shaka.Player.prototype.applyConfig_ = function () {
      if (this.parser_) {
        var a = shaka.util.ObjectUtils.cloneObject(this.config_.manifest);
        this.video_ && "AUDIO" === this.video_.nodeName && (a.disableVideo = !0);
        this.parser_.configure(a)
      }
      this.drmEngine_ && this.drmEngine_.configure(this.config_.drm);
      if (this.streamingEngine_) {
        this.streamingEngine_.configure(this.config_.streaming);
        try {
          this.filterManifest_(this.manifest_)
        } catch (c) {
          this.onError_(c)
        }
        this.abrManager_ && this.updateAbrManagerVariants_();
        !(a = this.streamingEngine_.getCurrentVariant()) ||
        a.allowedByApplication && a.allowedByKeySystem || (shaka.log.debug("Choosing new variant after changing configuration"), this.chooseVariantAndSwitch_())
      }
      if (this.mediaSourceEngine_ && (a = this.config_.textDisplayFactory, this.lastTextFactory_ != a)) {
        var b = shaka.util.Functional.callFactory(a);
        this.mediaSourceEngine_.setTextDisplayer(b);
        this.lastTextFactory_ = a;
        this.streamingEngine_ && this.streamingEngine_.reloadTextStream()
      }
      this.abrManager_ && (this.abrManager_.configure(this.config_.abr), this.config_.abr.enabled ?
        this.abrManager_.enable() : this.abrManager_.disable(), this.onAbrStatusChanged_());
      this.bufferObserver_ && (a = this.config_.streaming.rebufferingGoal, this.manifest_ && (a = Math.max(a, this.manifest_.minBufferTime)), this.updateBufferingSettings_(a))
    };
    shaka.Player.prototype.getConfiguration = function () {
      goog.asserts.assert(this.config_, "Config must not be null!");
      var a = this.defaultConfig_();
      shaka.util.PlayerConfiguration.mergeConfigObjects(a, this.config_, this.defaultConfig_());
      return a
    };
    shaka.Player.prototype.getSharedConfiguration = function () {
      goog.asserts.assert(this.config_, "Cannot call getSharedConfiguration after call destroy!");
      return this.config_
    };
    shaka.Player.prototype.resetConfiguration = function () {
      goog.asserts.assert(this.config_, "Cannot be destroyed");
      for (var a in this.config_) delete this.config_[a];
      shaka.util.PlayerConfiguration.mergeConfigObjects(this.config_, this.defaultConfig_(), this.defaultConfig_());
      this.applyConfig_()
    };
    shaka.Player.prototype.getLoadMode = function () {
      return this.loadMode_
    };
    shaka.Player.prototype.getMediaElement = function () {
      return this.video_
    };
    shaka.Player.prototype.getNetworkingEngine = function () {
      return this.networkingEngine_
    };
    shaka.Player.prototype.getAssetUri = function () {
      return this.assetUri_
    };
    shaka.Player.prototype.getAdManager = function () {
      shaka.log.warnOnce("getAdManager", "Shaka Player's ad features are currently in BETA and are NOT yet covered by semantic versioning compatibility guarantees.  The API may change at any time!");
      return this.adManager_
    };
    shaka.Player.prototype.isLive = function () {
      return this.manifest_ ? this.manifest_.presentationTimeline.isLive() : this.video_ && this.video_.src ? Infinity == this.video_.duration : !1
    };
    shaka.Player.prototype.isInProgress = function () {
      return this.manifest_ ? this.manifest_.presentationTimeline.isInProgress() : !1
    };
    shaka.Player.prototype.isAudioOnly = function () {
      if (this.manifest_) {
        var a = this.manifest_.variants;
        return a.length ? !a[0].video : !1
      }
      return this.video_ && this.video_.src ? this.video_.videoTracks ? 0 == this.video_.videoTracks.length : 0 == this.video_.videoHeight : !1
    };
    shaka.Player.prototype.seekRange = function () {
      if (this.manifest_) {
        var a = this.manifest_.presentationTimeline;
        return {start: a.getSeekRangeStart(), end: a.getSeekRangeEnd()}
      }
      return this.video_ && this.video_.src && (a = this.video_.seekable, a.length) ? {
        start: a.start(0),
        end: a.end(a.length - 1)
      } : {start: 0, end: 0}
    };
    shaka.Player.prototype.keySystem = function () {
      return shaka.media.DrmEngine.keySystem(this.drmInfo())
    };
    shaka.Player.prototype.drmInfo = function () {
      return this.drmEngine_ ? this.drmEngine_.getDrmInfo() : null
    };
    shaka.Player.prototype.getExpiration = function () {
      return this.drmEngine_ ? this.drmEngine_.getExpiration() : Infinity
    };
    shaka.Player.prototype.isBuffering = function () {
      var a = shaka.media.BufferingObserver.State;
      return this.bufferObserver_ ? this.bufferObserver_.getState() == a.STARVING : !1
    };
    shaka.Player.prototype.getPlaybackRate = function () {
      return this.video_ ? this.playRateController_ ? this.playRateController_.getRealRate() : 1 : 0
    };
    shaka.Player.prototype.trickPlay = function (a) {
      goog.asserts.assert(0 != a, "Should never set a trick play rate of 0!");
      0 == a ? shaka.log.alwaysWarn("A trick play rate of 0 is unsupported!") : (this.video_.paused && this.video_.play(), this.playRateController_.set(a), this.loadMode_ == shaka.Player.LoadMode.MEDIA_SOURCE && (this.abrManager_.playbackRateChanged(a), this.streamingEngine_.setTrickPlay(1 < Math.abs(a))))
    };
    shaka.Player.prototype.cancelTrickPlay = function () {
      this.loadMode_ == shaka.Player.LoadMode.SRC_EQUALS && this.playRateController_.set(1);
      this.loadMode_ == shaka.Player.LoadMode.MEDIA_SOURCE && (this.playRateController_.set(1), this.abrManager_.playbackRateChanged(1), this.streamingEngine_.setTrickPlay(!1))
    };
    shaka.Player.prototype.getVariantTracks = function () {
      if (this.manifest_) {
        for (var a = this.streamingEngine_ ? this.streamingEngine_.getCurrentVariant() : null, b = [], c = $jscomp.makeIterator(this.manifest_.variants), d = c.next(); !d.done; d = c.next()) if (d = d.value, shaka.util.StreamUtils.isPlayable(d)) {
          var e = shaka.util.StreamUtils.variantToTrack(d);
          e.active = d == a;
          b.push(e)
        }
        return b
      }
      return this.video_ && this.video_.audioTracks ? Array.from(this.video_.audioTracks).map(function (a) {
          return shaka.util.StreamUtils.html5AudioTrackToTrack(a)
        }) :
        []
    };
    shaka.Player.prototype.getTextTracks = function () {
      if (this.manifest_) {
        for (var a = this.streamingEngine_ ? this.streamingEngine_.getCurrentTextStream() : null, b = [], c = $jscomp.makeIterator(this.manifest_.textStreams), d = c.next(); !d.done; d = c.next()) {
          d = d.value;
          var e = shaka.util.StreamUtils.textStreamToTrack(d);
          e.active = d == a;
          b.push(e)
        }
        return b
      }
      if (this.video_ && this.video_.src && this.video_.textTracks) {
        a = this.filterTextTracks_();
        var f = shaka.util.StreamUtils;
        return a.map(function (a) {
          return f.html5TextTrackToTrack(a)
        })
      }
      return []
    };
    shaka.Player.prototype.selectTextTrack = function (a) {
      if (this.manifest_ && this.streamingEngine_) {
        var b = this.manifest_.textStreams.find(function (b) {
          return b.id == a.id
        });
        b ? b == this.streamingEngine_.getCurrentTextStream() ? shaka.log.debug("Text track already selected.") : (this.addTextStreamToSwitchHistory_(b, !1), this.streamingEngine_.switchTextStream(b), this.onTextChanged_(), this.currentTextLanguage_ = b.language) : shaka.log.error("No stream with id", a.id)
      } else if (this.video_ && this.video_.src && this.video_.textTracks) {
        b =
          this.filterTextTracks_();
        b = $jscomp.makeIterator(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, shaka.util.StreamUtils.html5TrackId(c) == a.id ? c.mode = this.isTextVisible_ ? "showing" : "hidden" : c.mode = "disabled";
        this.onTextChanged_()
      }
    };
    shaka.Player.prototype.selectVariantTrack = function (a, b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 0 : c;
      if (this.manifest_ && this.streamingEngine_) {
        this.config_.abr.enabled && shaka.log.alwaysWarn("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");
        var d = this.manifest_.variants.find(function (b) {
          return b.id == a.id
        });
        d ? shaka.util.StreamUtils.isPlayable(d) ? d == this.streamingEngine_.getCurrentVariant() ? shaka.log.debug("Variant already selected.") :
          (this.addVariantToSwitchHistory_(d, !1), this.streamingEngine_.switchVariant(d, b, c), this.onVariantChanged_(), this.currentAdaptationSetCriteria_ = new shaka.media.ExampleBasedCriteria(d), this.updateAbrManagerVariants_()) : shaka.log.error("Unable to switch to restricted track", a.id) : shaka.log.error("No variant with id", a.id)
      } else if (this.video_ && this.video_.audioTracks) {
        b = Array.from(this.video_.audioTracks);
        b = $jscomp.makeIterator(b);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, shaka.util.StreamUtils.html5TrackId(c) ==
        a.id && (c.enabled = !0);
        this.onVariantChanged_()
      }
    };
    shaka.Player.prototype.getAudioLanguagesAndRoles = function () {
      return shaka.Player.getLanguageAndRolesFrom_(this.getVariantTracks())
    };
    shaka.Player.prototype.getTextLanguagesAndRoles = function () {
      return shaka.Player.getLanguageAndRolesFrom_(this.getTextTracks())
    };
    shaka.Player.prototype.getAudioLanguages = function () {
      return Array.from(shaka.Player.getLanguagesFrom_(this.getVariantTracks()))
    };
    shaka.Player.prototype.getTextLanguages = function () {
      return Array.from(shaka.Player.getLanguagesFrom_(this.getTextTracks()))
    };
    shaka.Player.prototype.selectAudioLanguage = function (a, b) {
      var c = shaka.util.LanguageUtils;
      if (this.manifest_ && this.playhead_) this.currentAdaptationSetCriteria_ = new shaka.media.PreferenceBasedCriteria(a, b || "", 0, "", "audio"), this.chooseVariantAndSwitch_(); else if (this.video_ && this.video_.audioTracks) {
        var d = Array.from(this.video_.audioTracks), e = c.normalize(a);
        d = $jscomp.makeIterator(d);
        for (var f = d.next(); !f.done; f = d.next()) {
          f = f.value;
          var g = shaka.util.StreamUtils.html5AudioTrackToTrack(f);
          c.normalize(g.language) !=
          e || b && !g.roles.includes(b) || (f.enabled = !0)
        }
        this.onVariantChanged_()
      }
    };
    shaka.Player.prototype.selectTextLanguage = function (a, b) {
      var c = shaka.util.LanguageUtils;
      if (this.manifest_ && this.playhead_) {
        this.currentTextLanguage_ = a;
        this.currentTextRole_ = b || "";
        var d = this.chooseTextStream_();
        d && (d == this.streamingEngine_.getCurrentTextStream() ? shaka.log.debug("Text track already selected.") : (this.addTextStreamToSwitchHistory_(d, !1), this.shouldStreamText_() && (this.streamingEngine_.switchTextStream(d), this.onTextChanged_())))
      } else {
        var e = c.normalize(a);
        (d = this.getTextTracks().find(function (a) {
          return c.normalize(a.language) ==
            e && (!b || a.roles.includes(b))
        })) && this.selectTextTrack(d)
      }
    };
    shaka.Player.prototype.selectVariantsByLabel = function (a) {
      if (this.manifest_ && this.playhead_) {
        for (var b = null, c = $jscomp.makeIterator(this.manifest_.variants), d = c.next(); !d.done; d = c.next()) if (d = d.value, d.audio.label == a) {
          b = d;
          break
        }
        null == b ? shaka.log.warning("No variants were found with label: " + a + ". Ignoring the request to switch.") : (this.currentAdaptationSetCriteria_ = new shaka.media.PreferenceBasedCriteria(b.language, "", 0, a), this.chooseVariantAndSwitch_())
      }
    };
    shaka.Player.prototype.isTextTrackVisible = function () {
      var a = this.isTextVisible_;
      if (this.mediaSourceEngine_) {
        var b = this.mediaSourceEngine_.getTextDisplayer().isTextVisible();
        goog.asserts.assert(b == a, "text visibility has fallen out of sync");
        return b
      }
      return this.video_ && this.video_.src && this.video_.textTracks ? this.filterTextTracks_().some(function (a) {
        return "showing" == a.mode
      }) : a
    };
    shaka.Player.prototype.filterTextTracks_ = function () {
      goog.asserts.assert(this.video_.textTracks, "TextTracks should be valid.");
      return Array.from(this.video_.textTracks).filter(function (a) {
        return "metadata" != a.kind && a.label != shaka.Player.TextTrackLabel
      })
    };
    shaka.Player.prototype.setTextTrackVisibility = function (a) {
      a = !!a;
      if (this.isTextVisible_ != a) {
        this.isTextVisible_ = a;
        if (this.loadMode_ == shaka.Player.LoadMode.MEDIA_SOURCE) this.mediaSourceEngine_.getTextDisplayer().setTextVisibility(a), this.config_.streaming.alwaysStreamText || (a ? this.streamingEngine_.getCurrentTextStream() || (a = shaka.util.StreamUtils.filterStreamsByLanguageAndRole(this.manifest_.textStreams, this.currentTextLanguage_, this.currentTextRole_), 0 < a.length && (this.streamingEngine_.switchTextStream(a[0]),
          this.onTextChanged_())) : this.streamingEngine_.unloadTextStream()); else if (this.video_ && this.video_.src && this.video_.textTracks) {
          var b = this.filterTextTracks_();
          b = $jscomp.makeIterator(b);
          for (var c = b.next(); !c.done; c = b.next()) c = c.value, "disabled" != c.mode && (c.mode = a ? "showing" : "hidden")
        }
        this.onTextTrackVisibility_()
      }
    };
    shaka.Player.prototype.getPlayheadTimeAsDate = function () {
      if (!this.isLive()) return shaka.log.warning("getPlayheadTimeAsDate is for live streams!"), null;
      var a = this.walker_.getCurrentPayload(), b = 0;
      if (this.playhead_) b = this.playhead_.getTime(); else if (a) {
        if (null == a.startTime) return new Date;
        b = a.startTime
      }
      if (this.manifest_) return a = this.manifest_.presentationTimeline.getPresentationStartTime(), new Date(1E3 * (a + b));
      if (this.video_ && this.video_.getStartDate) return a = this.video_.getStartDate(), isNaN(a.getTime()) ?
        (shaka.log.warning("EXT-X-PROGRAM-DATETIME required to get playhead time as Date!"), null) : new Date(a.getTime() + 1E3 * b);
      shaka.log.warning("No way to get playhead time as Date!");
      return null
    };
    shaka.Player.prototype.getPresentationStartTimeAsDate = function () {
      if (!this.isLive()) return shaka.log.warning("getPresentationStartTimeAsDate is for live streams!"), null;
      if (this.manifest_) {
        var a = this.manifest_.presentationTimeline.getPresentationStartTime();
        goog.asserts.assert(null != a, "Presentation start time should not be null!");
        return new Date(1E3 * a)
      }
      if (this.video_ && this.video_.getStartDate) return a = this.video_.getStartDate(), isNaN(a.getTime()) ? (shaka.log.warning("EXT-X-PROGRAM-DATETIME required to get presentation start time as Date!"),
        null) : a;
      shaka.log.warning("No way to get presentation start time as Date!");
      return null
    };
    shaka.Player.prototype.getBufferedInfo = function () {
      if (this.loadMode_ == shaka.Player.LoadMode.MEDIA_SOURCE) return this.mediaSourceEngine_.getBufferedInfo();
      var a = {total: [], audio: [], video: [], text: []};
      this.loadMode_ == shaka.Player.LoadMode.SRC_EQUALS && (a.total = shaka.media.TimeRangesUtils.getBufferedInfo(this.video_.buffered));
      return a
    };
    shaka.Player.prototype.getStats = function () {
      if (this.loadMode_ != shaka.Player.LoadMode.MEDIA_SOURCE && this.loadMode_ != shaka.Player.LoadMode.SRC_EQUALS) return shaka.util.Stats.getEmptyBlob();
      this.updateStateHistory_();
      goog.asserts.assert(this.video_, "If we have stats, we should have video_");
      var a = this.video_;
      a.getVideoPlaybackQuality && (a = a.getVideoPlaybackQuality(), this.stats_.setDroppedFrames(Number(a.droppedVideoFrames), Number(a.totalVideoFrames)), this.stats_.setCorruptedFrames(Number(a.corruptedVideoFrames)));
      a = this.drmEngine_ ? this.drmEngine_.getLicenseTime() : NaN;
      this.stats_.setLicenseTime(a);
      if (this.loadMode_ == shaka.Player.LoadMode.MEDIA_SOURCE) {
        if (a = this.streamingEngine_.getCurrentVariant()) {
          var b = (this.playRateController_ ? this.playRateController_.getRealRate() : 1) * a.bandwidth;
          this.stats_.setCurrentStreamBandwidth(b)
        }
        a && a.video && this.stats_.setResolution(a.video.width || NaN, a.video.height || NaN);
        this.isLive() && (a = this.getPresentationStartTimeAsDate().valueOf() + 1E3 * this.seekRange().end, a = (Date.now() - a) /
          1E3, this.stats_.setLiveLatency(a));
        this.manifest_ && this.manifest_.presentationTimeline && (a = this.manifest_.presentationTimeline.getMaxSegmentDuration(), this.stats_.setMaxSegmentDuration(a));
        a = this.abrManager_.getBandwidthEstimate();
        this.stats_.setBandwidthEstimate(a)
      }
      return this.stats_.getBlob()
    };
    shaka.Player.prototype.addTextTrack = function (a, b, c, d, e, f) {
      if (this.loadMode_ == shaka.Player.LoadMode.SRC_EQUALS) throw shaka.log.error("Cannot add text when loaded with src="), Error("State error!");
      if (this.loadMode_ != shaka.Player.LoadMode.MEDIA_SOURCE) throw shaka.log.error("Must call load() and wait for it to resolve before adding text tracks."), Error("State error!");
      var g = shaka.util.ManifestParserUtils.ContentType, h = this.manifest_.presentationTimeline.getDuration();
      if (Infinity == h) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE,
        shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM);
      a = {
        id: this.nextExternalStreamId_++,
        originalId: null,
        createSegmentIndex: function () {
          return Promise.resolve()
        },
        segmentIndex: shaka.media.SegmentIndex.forSingleSegment(0, h, [a]),
        mimeType: d,
        codecs: e || "",
        kind: c,
        encrypted: !1,
        drmInfos: [],
        keyIds: new Set,
        language: b,
        label: f || null,
        type: g.TEXT,
        primary: !1,
        trickModeVideo: null,
        emsgSchemeIdUris: null,
        roles: [],
        channelsCount: null,
        audioSamplingRate: null,
        closedCaptions: null
      };
      this.manifest_.textStreams.push(a);
      this.onTracksChanged_();
      return shaka.util.StreamUtils.textStreamToTrack(a)
    };
    shaka.Player.prototype.setMaxHardwareResolution = function (a, b) {
      this.maxHwRes_.width = a;
      this.maxHwRes_.height = b
    };
    shaka.Player.prototype.retryStreaming = function () {
      return this.loadMode_ == shaka.Player.LoadMode.MEDIA_SOURCE ? this.streamingEngine_.retry() : !1
    };
    shaka.Player.prototype.getManifest = function () {
      shaka.log.alwaysWarn("Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for.");
      return this.manifest_
    };
    shaka.Player.prototype.getManifestParserFactory = function () {
      return this.parserFactory_
    };
    shaka.Player.prototype.addVariantToSwitchHistory_ = function (a, b) {
      this.stats_.getSwitchHistory().updateCurrentVariant(a, b)
    };
    shaka.Player.prototype.addTextStreamToSwitchHistory_ = function (a, b) {
      this.stats_.getSwitchHistory().updateCurrentText(a, b)
    };
    shaka.Player.prototype.defaultConfig_ = function () {
      var a = this, b = shaka.util.PlayerConfiguration.createDefault();
      b.streaming.failureCallback = function (b) {
        a.defaultStreamingFailureCallback_(b)
      };
      b.textDisplayFactory = function () {
        return a.videoContainer_ ? new shaka.text.UITextDisplayer(a.video_, a.videoContainer_) : new shaka.text.SimpleTextDisplayer(a.video_)
      };
      return b
    };
    shaka.Player.prototype.setVideoContainer = function (a) {
      this.videoContainer_ = a
    };
    shaka.Player.prototype.defaultStreamingFailureCallback_ = function (a) {
      var b = [shaka.util.Error.Code.BAD_HTTP_STATUS, shaka.util.Error.Code.HTTP_ERROR, shaka.util.Error.Code.TIMEOUT];
      this.isLive() && b.includes(a.code) && (a.severity = shaka.util.Error.Severity.RECOVERABLE, shaka.log.warning("Live streaming error.  Retrying automatically..."), this.retryStreaming())
    };
    shaka.Player.prototype.createTextStreamsForClosedCaptions_ = function (a) {
      a = shaka.util.ManifestParserUtils.ContentType;
      for (var b = shaka.util.ManifestParserUtils.TextStreamKind, c = new Map, d = $jscomp.makeIterator(this.manifest_.variants), e = d.next(); !e.done; e = d.next()) if (e = e.value, e.video && e.video.closedCaptions) {
        e = e.video;
        for (var f = $jscomp.makeIterator(e.closedCaptions.keys()), g = f.next(); !g.done; g = f.next()) if (g = g.value, !c.has(g)) {
          var h = {
            id: this.nextExternalStreamId_++,
            originalId: g,
            createSegmentIndex: function () {
              return Promise.resolve()
            },
            segmentIndex: null,
            mimeType: shaka.util.MimeUtils.CLOSED_CAPTION_MIMETYPE,
            codecs: "",
            kind: b.CLOSED_CAPTION,
            encrypted: !1,
            drmInfos: [],
            keyIds: new Set,
            language: e.closedCaptions.get(g),
            label: null,
            type: a.TEXT,
            primary: !1,
            trickModeVideo: null,
            emsgSchemeIdUris: null,
            roles: e.roles,
            channelsCount: null,
            audioSamplingRate: null,
            closedCaptions: null
          };
          c.set(g, h)
        }
      }
      a = $jscomp.makeIterator(c.values());
      for (b = a.next(); !b.done; b = a.next()) this.manifest_.textStreams.push(b.value)
    };
    shaka.Player.prototype.filterManifest_ = function (a) {
      goog.asserts.assert(a, "Manifest should exist!");
      goog.asserts.assert(this.video_, "Must not be destroyed");
      var b = shaka.util.StreamUtils, c = this.streamingEngine_ ? this.streamingEngine_.getCurrentVariant() : null;
      b.filterManifest(this.drmEngine_, c, a);
      if (!a.variants.some(b.isPlayable)) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.CONTENT_UNSUPPORTED_BY_BROWSER);
      if (shaka.util.StreamUtils.applyRestrictions(a.variants,
        this.config_.restrictions, this.maxHwRes_) && this.streamingEngine_) this.onTracksChanged_();
      if (b = this.drmEngine_ ? this.drmEngine_.getDrmInfo() : null) {
        c = $jscomp.makeIterator(a.variants);
        for (var d = c.next(); !d.done; d = c.next()) {
          d = d.value;
          d = (d.video ? d.video.drmInfos : []).concat(d.audio ? d.audio.drmInfos : []);
          d = $jscomp.makeIterator(d);
          for (var e = d.next(); !e.done; e = d.next()) if (e = e.value, e.keySystem == b.keySystem) {
            e = $jscomp.makeIterator(e.initData || []);
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, this.drmEngine_.newInitData(f.initDataType,
              f.initData)
          }
        }
      }
      this.checkRestrictedVariants_(a)
    };
    shaka.Player.prototype.adjustStartTime_ = function (a, b) {
      var c, d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) return c = a.audio, d = a.video, e = function (a, b) {
          var c, d;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
            if (1 == e.nextAddress) return a ? e.yield(a.createSegmentIndex(), 2) : e["return"](null);
            c = a.segmentIndex[Symbol.iterator]().seek(b);
            if (!c) return e["return"](null);
            d = c.startTime;
            goog.asserts.assert(d <= b, "Segment should start before target time!");
            return e["return"](d)
          })
        }, h.yield(e(c, b), 2);
        if (3 != h.nextAddress) return f = h.yieldResult, h.yield(e(d, b), 3);
        g = h.yieldResult;
        return null != g && null != f ? h["return"](Math.max(g, f)) : null != g ? h["return"](g) : null != f ? h["return"](f) : h["return"](b)
      })
    };
    shaka.Player.prototype.updateBufferState_ = function () {
      var a = this.isBuffering();
      shaka.log.v2("Player changing buffering state to", a);
      this.stats_ && this.bufferObserver_ && this.playhead_ && (this.playRateController_.setBuffering(a), this.updateStateHistory_());
      this.dispatchEvent(this.makeEvent_(shaka.Player.EventName.Buffering, {buffering: a}))
    };
    shaka.Player.prototype.onRateChange_ = function () {
      var a = this.video_.playbackRate;
      0 != a && (this.playRateController_ && this.playRateController_.set(a), a = this.makeEvent_(shaka.Player.EventName.RateChange), this.dispatchEvent(a))
    };
    shaka.Player.prototype.updateStateHistory_ = function () {
      if (this.stats_ && this.bufferObserver_) {
        var a = shaka.media.BufferingObserver.State, b = this.stats_.getStateHistory();
        this.bufferObserver_.getState() == a.STARVING ? b.update("buffering") : this.video_.paused ? b.update("paused") : this.video_.ended ? b.update("ended") : b.update("playing")
      }
    };
    shaka.Player.prototype.onSeek_ = function () {
      this.playheadObservers_ && this.playheadObservers_.notifyOfSeek();
      this.streamingEngine_ && this.streamingEngine_.seeked();
      this.bufferObserver_ && this.pollBufferState_()
    };
    shaka.Player.prototype.updateAbrManagerVariants_ = function () {
      try {
        goog.asserts.assert(this.manifest_, "Manifest should exist by now!"), this.checkRestrictedVariants_(this.manifest_)
      } catch (b) {
        return this.onError_(b), !1
      }
      var a = this.manifest_.variants.filter(function (a) {
        return shaka.util.StreamUtils.isPlayable(a)
      });
      a = this.currentAdaptationSetCriteria_.create(a);
      this.abrManager_.setVariants(Array.from(a.values()));
      return !0
    };
    shaka.Player.prototype.chooseVariant_ = function () {
      return this.updateAbrManagerVariants_() ? this.abrManager_.chooseVariant() : null
    };
    shaka.Player.prototype.chooseTextStream_ = function () {
      return shaka.util.StreamUtils.filterStreamsByLanguageAndRole(this.manifest_.textStreams, this.currentTextLanguage_, this.currentTextRole_)[0] || null
    };
    shaka.Player.prototype.chooseVariantAndSwitch_ = function () {
      goog.asserts.assert(this.config_, "Must not be destroyed");
      var a = this.chooseVariant_();
      if (a) {
        if (a == this.streamingEngine_.getCurrentVariant()) {
          shaka.log.debug("Variant already selected.");
          return
        }
        this.addVariantToSwitchHistory_(a, !0);
        this.streamingEngine_.switchVariant(a, !0, 0);
        this.onVariantChanged_()
      }
      this.onAdaptation_()
    };
    shaka.Player.prototype.setInitialTextState_ = function (a, b) {
      b ? (a.audio && this.shouldInitiallyShowText_(a.audio, b) && (this.isTextVisible_ = !0), this.isTextVisible_ && (this.mediaSourceEngine_.getTextDisplayer().setTextVisibility(!0), goog.asserts.assert(this.shouldStreamText_(), "Should be streaming text")), this.onTextTrackVisibility_()) : this.isTextVisible_ = !1
    };
    shaka.Player.prototype.shouldInitiallyShowText_ = function (a, b) {
      var c = shaka.util.LanguageUtils, d = c.normalize(this.config_.preferredTextLanguage),
        e = c.normalize(a.language), f = c.normalize(b.language);
      return c.areLanguageCompatible(f, d) && !c.areLanguageCompatible(e, f)
    };
    shaka.Player.prototype.onManifestUpdate_ = function () {
      this.parser_ && this.parser_.update && this.parser_.update()
    };
    shaka.Player.prototype.onSegmentAppended_ = function () {
      this.playhead_ && this.playhead_.notifyOfBufferingChange();
      this.pollBufferState_()
    };
    shaka.Player.prototype.switch_ = function (a, b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 0 : c;
      shaka.log.debug("switch_");
      goog.asserts.assert(this.config_.abr.enabled, "AbrManager should not call switch while disabled!");
      goog.asserts.assert(this.manifest_, "We need a manifest to switch variants.");
      this.streamingEngine_ && a != this.streamingEngine_.getCurrentVariant() && (this.addVariantToSwitchHistory_(a, !0), this.streamingEngine_.switchVariant(a, b, c), this.onAdaptation_())
    };
    shaka.Player.prototype.onAdaptation_ = function () {
      var a = this.makeEvent_(shaka.Player.EventName.Adaptation);
      this.delayDispatchEvent_(a)
    };
    shaka.Player.prototype.onTracksChanged_ = function () {
      var a = this.makeEvent_(shaka.Player.EventName.TracksChanged);
      this.delayDispatchEvent_(a)
    };
    shaka.Player.prototype.onVariantChanged_ = function () {
      var a = this.makeEvent_(shaka.Player.EventName.VariantChanged);
      this.delayDispatchEvent_(a)
    };
    shaka.Player.prototype.onTextChanged_ = function () {
      var a = this.makeEvent_(shaka.Player.EventName.TextChanged);
      this.delayDispatchEvent_(a)
    };
    shaka.Player.prototype.onTextTrackVisibility_ = function () {
      var a = this.makeEvent_(shaka.Player.EventName.TextTrackVisibility);
      this.delayDispatchEvent_(a)
    };
    shaka.Player.prototype.onAbrStatusChanged_ = function () {
      var a = this.makeEvent_(shaka.Player.EventName.AbrStatusChanged, {newStatus: this.config_.abr.enabled});
      this.delayDispatchEvent_(a)
    };
    shaka.Player.prototype.onError_ = function (a) {
      goog.asserts.assert(a instanceof shaka.util.Error, "Wrong error type!");
      if (this.loadMode_ != shaka.Player.LoadMode.DESTROYED) {
        var b = this.makeEvent_(shaka.Player.EventName.Error, {detail: a});
        this.dispatchEvent(b);
        b.defaultPrevented && (a.handled = !0)
      }
    };
    shaka.Player.prototype.onRegionEvent_ = function (a, b) {
      this.dispatchEvent(this.makeEvent_(a, {
        detail: {
          schemeIdUri: b.schemeIdUri,
          value: b.value,
          startTime: b.startTime,
          endTime: b.endTime,
          id: b.id,
          eventElement: b.eventElement
        }
      }))
    };
    shaka.Player.prototype.videoErrorToShakaError_ = function () {
      goog.asserts.assert(this.video_.error, "Video error expected, but missing!");
      if (!this.video_.error) return null;
      var a = this.video_.error.code;
      if (1 == a) return null;
      var b = this.video_.error.msExtendedCode;
      b && (0 > b && (b += Math.pow(2, 32)), b = b.toString(16));
      return new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.VIDEO_ERROR, a, b, this.video_.error.message)
    };
    shaka.Player.prototype.onVideoError_ = function (a) {
      if (a = this.videoErrorToShakaError_()) this.onError_(a)
    };
    shaka.Player.prototype.onKeyStatus_ = function (a) {
      if (this.streamingEngine_) {
        var b = Object.keys(a);
        0 == b.length && shaka.log.warning("Got a key status event without any key statuses, so we don't know the real key statuses. If we don't have all the keys, you'll need to set restrictions so we don't select those tracks.");
        var c = 1 == b.length && "00" == b[0];
        c && shaka.log.warning("Got a synthetic key status event, so we don't know the real key statuses. If we don't have all the keys, you'll need to set restrictions so we don't select those tracks.");
        var d =
          shaka.Player.restrictedStatuses_, e = !1;
        if (b.length) {
          b = $jscomp.makeIterator(this.manifest_.variants);
          for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            var g = shaka.util.StreamUtils.getVariantStreams(f);
            g = $jscomp.makeIterator(g);
            for (var h = g.next(); !h.done; h = g.next()) {
              var k = h.value;
              h = f.allowedByKeySystem;
              if (k.keyIds.size) {
                f.allowedByKeySystem = !0;
                k = $jscomp.makeIterator(k.keyIds);
                for (var l = k.next(); !l.done; l = k.next()) l = l.value, l = a[c ? "00" : l], f.allowedByKeySystem = f.allowedByKeySystem && !!l && !d.includes(l)
              }
              h !=
              f.allowedByKeySystem && (e = !0)
            }
          }
        }
        e && this.updateAbrManagerVariants_();
        (a = this.streamingEngine_.getCurrentVariant()) && !a.allowedByKeySystem && (shaka.log.debug("Choosing new streams after key status changed"), this.chooseVariantAndSwitch_());
        if (e) this.onTracksChanged_()
      }
    };
    shaka.Player.prototype.onExpirationUpdated_ = function (a, b) {
      if (this.parser_ && this.parser_.onExpirationUpdated) this.parser_.onExpirationUpdated(a, b);
      var c = this.makeEvent_(shaka.Player.EventName.ExpirationUpdated);
      this.dispatchEvent(c)
    };
    shaka.Player.prototype.shouldStreamText_ = function () {
      return this.config_.streaming.alwaysStreamText || this.isTextTrackVisible()
    };
    shaka.Player.applyPlayRange_ = function (a, b, c) {
      0 < b && (a.isLive() ? shaka.log.warning("|playRangeStart| has been configured for live content. Ignoring the setting.") : a.setUserSeekStart(b));
      b = a.getDuration();
      c < b && (a.isLive() ? shaka.log.warning("|playRangeEnd| has been configured for live content. Ignoring the setting.") : a.setDuration(c))
    };
    shaka.Player.prototype.checkRestrictedVariants_ = function (a) {
      var b = shaka.Player.restrictedStatuses_, c = this.drmEngine_ ? this.drmEngine_.getKeyStatuses() : {},
        d = Object.keys(c);
      d = d.length && "00" == d[0];
      var e = !1, f = !1, g = new Set, h = new Set;
      a = $jscomp.makeIterator(a.variants);
      for (var k = a.next(); !k.done; k = a.next()) {
        k = k.value;
        var l = [];
        k.audio && l.push(k.audio);
        k.video && l.push(k.video);
        l = $jscomp.makeIterator(l);
        for (var m = l.next(); !m.done; m = l.next()) if (m = m.value, m.keyIds.size) {
          m = $jscomp.makeIterator(m.keyIds);
          for (var n =
            m.next(); !n.done; n = m.next()) {
            n = n.value;
            var p = c[d ? "00" : n];
            p ? b.includes(p) && h.add(p) : g.add(n)
          }
        }
        k.allowedByApplication ? k.allowedByKeySystem && (e = !0) : f = !0
      }
      if (!e) throw b = {
        hasAppRestrictions: f,
        missingKeys: Array.from(g),
        restrictedKeyStatuses: Array.from(h)
      }, new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.RESTRICTIONS_CANNOT_BE_MET, b);
    };
    shaka.Player.prototype.delayDispatchEvent_ = function (a) {
      var b = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        if (1 == c.nextAddress) return c.yield(Promise.resolve(), 2);
        b.loadMode_ != shaka.Player.LoadMode.DESTROYED && b.dispatchEvent(a);
        c.jumpToEnd()
      })
    };
    shaka.Player.getLanguagesFrom_ = function (a) {
      var b = new Set;
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.language ? b.add(shaka.util.LanguageUtils.normalize(c.language)) : b.add("und");
      return b
    };
    shaka.Player.getLanguageAndRolesFrom_ = function (a) {
      var b = new Map;
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        var d = c.value;
        c = "und";
        var e = [];
        d.language && (c = shaka.util.LanguageUtils.normalize(d.language));
        (e = "variant" == d.type ? d.audioRoles : d.roles) && e.length || (e = [""]);
        b.has(c) || b.set(c, new Set);
        d = $jscomp.makeIterator(e);
        for (e = d.next(); !e.done; e = d.next()) e = e.value, b.get(c).add(e)
      }
      var f = [];
      b.forEach(function (a, b) {
        for (var c = $jscomp.makeIterator(a), d = c.next(); !d.done; d = c.next()) f.push({
          language: b,
          role: d.value
        })
      });
      return f
    };
    shaka.Player.prototype.isBufferedToEndMS_ = function () {
      goog.asserts.assert(this.video_, "We need a video element to get buffering information");
      goog.asserts.assert(this.mediaSourceEngine_, "We need a media source engine to get buffering information");
      goog.asserts.assert(this.manifest_, "We need a manifest to get buffering information");
      if (this.video_.ended || this.mediaSourceEngine_.ended()) return !0;
      if (this.manifest_.presentationTimeline.isLive()) {
        var a = this.manifest_.presentationTimeline.getSegmentAvailabilityEnd(), b =
          shaka.media.TimeRangesUtils.bufferEnd(this.video_.buffered);
        if (null != b && b >= a) return !0
      }
      return !1
    };
    shaka.Player.prototype.isBufferedToEndSrc_ = function () {
      goog.asserts.assert(this.video_, "We need a video element to get buffering information");
      if (this.video_.ended) return !0;
      var a = shaka.media.TimeRangesUtils.bufferEnd(this.video_.buffered);
      return null != a && a >= this.video_.duration - 1
    };
    shaka.Player.prototype.createAbortLoadError_ = function () {
      return new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.LOAD_INTERRUPTED)
    };
    shaka.Player.prototype.getNextStep_ = function (a, b, c, d) {
      var e = null;
      a == this.detachNode_ && (e = c == this.detachNode_ ? this.detachNode_ : this.attachNode_);
      a == this.attachNode_ && (e = this.getNextAfterAttach_(c, b, d));
      a == this.mediaSourceNode_ && (e = this.getNextAfterMediaSource_(c, b, d));
      a == this.parserNode_ && (e = this.getNextMatchingAllDependencies_(this.loadNode_, this.manifestNode_, this.unloadNode_, c, b, d));
      a == this.manifestNode_ && (e = this.getNextMatchingAllDependencies_(this.loadNode_, this.drmNode_, this.unloadNode_, c, b,
        d));
      a == this.drmNode_ && (e = this.getNextMatchingAllDependencies_(this.loadNode_, this.loadNode_, this.unloadNode_, c, b, d));
      a == this.srcEqualsDrmNode_ && (e = c == this.srcEqualsNode_ && b.mediaElement == d.mediaElement ? this.srcEqualsNode_ : this.unloadNode_);
      if (a == this.loadNode_ || a == this.srcEqualsNode_) e = this.unloadNode_;
      a == this.unloadNode_ && (e = this.getNextAfterUnload_(c, b, d));
      goog.asserts.assert(e, "Missing next step!");
      return e
    };
    shaka.Player.prototype.getNextAfterAttach_ = function (a, b, c) {
      return a == this.detachNode_ || b.mediaElement != c.mediaElement ? this.detachNode_ : a == this.attachNode_ ? this.attachNode_ : a == this.mediaSourceNode_ || a == this.loadNode_ ? this.mediaSourceNode_ : a == this.srcEqualsNode_ ? this.srcEqualsDrmNode_ : null
    };
    shaka.Player.prototype.getNextAfterMediaSource_ = function (a, b, c) {
      return a == this.loadNode_ && b.mediaElement == c.mediaElement ? this.parserNode_ : this.unloadNode_
    };
    shaka.Player.prototype.getNextAfterUnload_ = function (a, b, c) {
      return c.mediaElement && b.mediaElement == c.mediaElement ? this.attachNode_ : this.detachNode_
    };
    shaka.Player.prototype.getNextMatchingAllDependencies_ = function (a, b, c, d, e, f) {
      return d == a && e.mediaElement == f.mediaElement && e.uri == f.uri && e.mimeType == f.mimeType ? b : c
    };
    shaka.Player.createEmptyPayload_ = function () {
      return {mediaElement: null, mimeType: null, startTime: null, startTimeOfLoad: NaN, uri: null}
    };
    shaka.Player.prototype.wrapWalkerListenersWithPromise_ = function (a) {
      var b = this;
      return new Promise(function (c, d) {
        a.onCancel = function () {
          return d(b.createAbortLoadError_())
        };
        a.onEnd = function () {
          return c()
        };
        a.onError = function (a) {
          return d(a)
        };
        a.onSkip = function () {
          return d(b.createAbortLoadError_())
        }
      })
    };
    goog.exportSymbol("shaka.Player", shaka.Player);
    goog.exportProperty(shaka.Player.prototype, "setVideoContainer", shaka.Player.prototype.setVideoContainer);
    goog.exportProperty(shaka.Player.prototype, "getManifestParserFactory", shaka.Player.prototype.getManifestParserFactory);
    goog.exportProperty(shaka.Player.prototype, "getManifest", shaka.Player.prototype.getManifest);
    goog.exportProperty(shaka.Player.prototype, "retryStreaming", shaka.Player.prototype.retryStreaming);
    goog.exportProperty(shaka.Player.prototype, "setMaxHardwareResolution", shaka.Player.prototype.setMaxHardwareResolution);
    goog.exportProperty(shaka.Player.prototype, "addTextTrack", shaka.Player.prototype.addTextTrack);
    goog.exportProperty(shaka.Player.prototype, "getStats", shaka.Player.prototype.getStats);
    goog.exportProperty(shaka.Player.prototype, "getBufferedInfo", shaka.Player.prototype.getBufferedInfo);
    goog.exportProperty(shaka.Player.prototype, "getPresentationStartTimeAsDate", shaka.Player.prototype.getPresentationStartTimeAsDate);
    goog.exportProperty(shaka.Player.prototype, "getPlayheadTimeAsDate", shaka.Player.prototype.getPlayheadTimeAsDate);
    goog.exportProperty(shaka.Player.prototype, "setTextTrackVisibility", shaka.Player.prototype.setTextTrackVisibility);
    goog.exportProperty(shaka.Player.prototype, "isTextTrackVisible", shaka.Player.prototype.isTextTrackVisible);
    goog.exportProperty(shaka.Player.prototype, "selectVariantsByLabel", shaka.Player.prototype.selectVariantsByLabel);
    goog.exportProperty(shaka.Player.prototype, "selectTextLanguage", shaka.Player.prototype.selectTextLanguage);
    goog.exportProperty(shaka.Player.prototype, "selectAudioLanguage", shaka.Player.prototype.selectAudioLanguage);
    goog.exportProperty(shaka.Player.prototype, "getTextLanguages", shaka.Player.prototype.getTextLanguages);
    goog.exportProperty(shaka.Player.prototype, "getAudioLanguages", shaka.Player.prototype.getAudioLanguages);
    goog.exportProperty(shaka.Player.prototype, "getTextLanguagesAndRoles", shaka.Player.prototype.getTextLanguagesAndRoles);
    goog.exportProperty(shaka.Player.prototype, "getAudioLanguagesAndRoles", shaka.Player.prototype.getAudioLanguagesAndRoles);
    goog.exportProperty(shaka.Player.prototype, "selectVariantTrack", shaka.Player.prototype.selectVariantTrack);
    goog.exportProperty(shaka.Player.prototype, "selectTextTrack", shaka.Player.prototype.selectTextTrack);
    goog.exportProperty(shaka.Player.prototype, "getTextTracks", shaka.Player.prototype.getTextTracks);
    goog.exportProperty(shaka.Player.prototype, "getVariantTracks", shaka.Player.prototype.getVariantTracks);
    goog.exportProperty(shaka.Player.prototype, "cancelTrickPlay", shaka.Player.prototype.cancelTrickPlay);
    goog.exportProperty(shaka.Player.prototype, "trickPlay", shaka.Player.prototype.trickPlay);
    goog.exportProperty(shaka.Player.prototype, "getPlaybackRate", shaka.Player.prototype.getPlaybackRate);
    goog.exportProperty(shaka.Player.prototype, "isBuffering", shaka.Player.prototype.isBuffering);
    goog.exportProperty(shaka.Player.prototype, "getExpiration", shaka.Player.prototype.getExpiration);
    goog.exportProperty(shaka.Player.prototype, "drmInfo", shaka.Player.prototype.drmInfo);
    goog.exportProperty(shaka.Player.prototype, "keySystem", shaka.Player.prototype.keySystem);
    goog.exportProperty(shaka.Player.prototype, "seekRange", shaka.Player.prototype.seekRange);
    goog.exportProperty(shaka.Player.prototype, "isAudioOnly", shaka.Player.prototype.isAudioOnly);
    goog.exportProperty(shaka.Player.prototype, "isInProgress", shaka.Player.prototype.isInProgress);
    goog.exportProperty(shaka.Player.prototype, "isLive", shaka.Player.prototype.isLive);
    goog.exportProperty(shaka.Player.prototype, "getAdManager", shaka.Player.prototype.getAdManager);
    goog.exportProperty(shaka.Player.prototype, "getAssetUri", shaka.Player.prototype.getAssetUri);
    goog.exportProperty(shaka.Player.prototype, "getNetworkingEngine", shaka.Player.prototype.getNetworkingEngine);
    goog.exportProperty(shaka.Player.prototype, "getMediaElement", shaka.Player.prototype.getMediaElement);
    goog.exportProperty(shaka.Player.prototype, "getLoadMode", shaka.Player.prototype.getLoadMode);
    goog.exportProperty(shaka.Player.prototype, "resetConfiguration", shaka.Player.prototype.resetConfiguration);
    goog.exportProperty(shaka.Player.prototype, "getConfiguration", shaka.Player.prototype.getConfiguration);
    goog.exportProperty(shaka.Player.prototype, "configure", shaka.Player.prototype.configure);
    goog.exportProperty(shaka.Player.prototype, "load", shaka.Player.prototype.load);
    goog.exportProperty(shaka.Player.prototype, "unload", shaka.Player.prototype.unload);
    goog.exportProperty(shaka.Player.prototype, "detach", shaka.Player.prototype.detach);
    goog.exportProperty(shaka.Player.prototype, "attach", shaka.Player.prototype.attach);
    goog.exportProperty(shaka.Player, "probeSupport", shaka.Player.probeSupport);
    goog.exportProperty(shaka.Player, "isBrowserSupported", shaka.Player.isBrowserSupported);
    goog.exportProperty(shaka.Player, "setAdManagerFactory", shaka.Player.setAdManagerFactory);
    goog.exportProperty(shaka.Player, "registerSupportPlugin", shaka.Player.registerSupportPlugin);
    goog.exportProperty(shaka.Player.prototype, "destroy", shaka.Player.prototype.destroy);
    shaka.Player.EventName = {
      AbrStatusChanged: "abrstatuschanged",
      Adaptation: "adaptation",
      Buffering: "buffering",
      DrmSessionUpdate: "drmsessionupdate",
      Emsg: "emsg",
      Error: "error",
      ExpirationUpdated: "expirationupdated",
      LargeGap: "largegap",
      Loaded: "loaded",
      Loading: "loading",
      ManifestParsed: "manifestparsed",
      Metadata: "metadata",
      OnStateChange: "onstatechange",
      OnStateIdle: "onstateidle",
      RateChange: "ratechange",
      Streaming: "streaming",
      TextChanged: "textchanged",
      TextTrackVisibility: "texttrackvisibility",
      TimelineRegionAdded: "timelineregionadded",
      TimelineRegionEnter: "timelineregionenter",
      TimelineRegionExit: "timelineregionexit",
      TracksChanged: "trackschanged",
      Unloading: "unloading",
      VariantChanged: "variantchanged"
    };
    shaka.Player.LoadMode = {DESTROYED: 0, NOT_LOADED: 1, MEDIA_SOURCE: 2, SRC_EQUALS: 3};
    goog.exportProperty(shaka.Player, "LoadMode", shaka.Player.LoadMode);
    shaka.Player.TYPICAL_BUFFERING_THRESHOLD_ = .5;
    shaka.Player.version = "3.0.4-npm-dirty-debug";
    goog.exportProperty(shaka.Player, "version", shaka.Player.version);
    shaka.Deprecate.init(shaka.Player.version);
    shaka.Player.restrictedStatuses_ = ["output-restricted", "internal-error"];
    shaka.Player.supportPlugins_ = {};
    shaka.Player.adManagerFactory_ = null;
    shaka.Player.TextTrackLabel = "Shaka Player TextTrack";
    shaka.ads = {};
    shaka.ads.AdsStats = function () {
      this.loadTimes_ = [];
      this.skipped_ = this.playedCompletely_ = this.started_ = 0
    };
    shaka.ads.AdsStats.prototype.addLoadTime = function (a) {
      this.loadTimes_.push(a)
    };
    shaka.ads.AdsStats.prototype.incrementStarted = function () {
      this.started_++
    };
    shaka.ads.AdsStats.prototype.incrementPlayedCompletely = function () {
      this.playedCompletely_++
    };
    shaka.ads.AdsStats.prototype.incrementSkipped = function () {
      this.skipped_++
    };
    shaka.ads.AdsStats.prototype.getBlob = function () {
      return {
        loadTimes: this.loadTimes_,
        started: this.started_,
        playedCompletely: this.playedCompletely_,
        skipped: this.skipped_
      }
    };
    shaka.ads.ClientSideAd = function (a, b) {
      var c = this;
      this.ad_ = a;
      this.manager_ = b;
      this.isPaused_ = !1;
      this.volume_ = this.manager_.getVolume();
      this.eventManager_ = new shaka.util.EventManager;
      this.eventManager_.listen(this.manager_, google.ima.AdEvent.Type.PAUSED, function () {
        c.isPaused_ = !0
      });
      this.eventManager_.listen(this.manager_, google.ima.AdEvent.Type.RESUMED, function () {
        c.isPaused_ = !1
      })
    };
    shaka.ads.ClientSideAd.prototype.getDuration = function () {
      return this.ad_.getDuration()
    };
    shaka.ads.ClientSideAd.prototype.getRemainingTime = function () {
      return this.manager_.getRemainingTime()
    };
    shaka.ads.ClientSideAd.prototype.isPaused = function () {
      return this.isPaused_
    };
    shaka.ads.ClientSideAd.prototype.isSkippable = function () {
      return 0 <= this.ad_.getSkipTimeOffset()
    };
    shaka.ads.ClientSideAd.prototype.getTimeUntilSkippable = function () {
      var a = this.ad_.getSkipTimeOffset();
      a = this.getRemainingTime() - a;
      return Math.max(a, 0)
    };
    shaka.ads.ClientSideAd.prototype.canSkipNow = function () {
      return this.manager_.getAdSkippableState()
    };
    shaka.ads.ClientSideAd.prototype.skip = function () {
      return this.manager_.skip()
    };
    shaka.ads.ClientSideAd.prototype.setPaused = function (a) {
      this.isPaused_ = a
    };
    shaka.ads.ClientSideAd.prototype.pause = function () {
      return this.manager_.pause()
    };
    shaka.ads.ClientSideAd.prototype.play = function () {
      return this.manager_.resume()
    };
    shaka.ads.ClientSideAd.prototype.getVolume = function () {
      return this.manager_.getVolume()
    };
    shaka.ads.ClientSideAd.prototype.setVolume = function (a) {
      return this.manager_.setVolume(a)
    };
    shaka.ads.ClientSideAd.prototype.isMuted = function () {
      return 0 == this.manager_.getVolume()
    };
    shaka.ads.ClientSideAd.prototype.resize = function (a, b) {
      this.manager_.resize(a, b, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
    };
    shaka.ads.ClientSideAd.prototype.setMuted = function (a) {
      a ? (this.volume_ = this.getVolume(), this.setVolume(0)) : this.setVolume(this.volume_)
    };
    shaka.ads.ClientSideAd.prototype.getSequenceLength = function () {
      var a = this.ad_.getAdPodInfo();
      return null == a ? 1 : a.getTotalAds()
    };
    shaka.ads.ClientSideAd.prototype.getPositionInSequence = function () {
      var a = this.ad_.getAdPodInfo();
      return null == a ? 1 : a.getAdPosition()
    };
    shaka.ads.ClientSideAd.prototype.release = function () {
      this.manager_ = this.ad_ = null
    };
    goog.exportSymbol("shaka.ads.ClientSideAd", shaka.ads.ClientSideAd);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "release", shaka.ads.ClientSideAd.prototype.release);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "getPositionInSequence", shaka.ads.ClientSideAd.prototype.getPositionInSequence);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "getSequenceLength", shaka.ads.ClientSideAd.prototype.getSequenceLength);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "setMuted", shaka.ads.ClientSideAd.prototype.setMuted);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "resize", shaka.ads.ClientSideAd.prototype.resize);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "isMuted", shaka.ads.ClientSideAd.prototype.isMuted);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "setVolume", shaka.ads.ClientSideAd.prototype.setVolume);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "getVolume", shaka.ads.ClientSideAd.prototype.getVolume);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "play", shaka.ads.ClientSideAd.prototype.play);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "pause", shaka.ads.ClientSideAd.prototype.pause);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "skip", shaka.ads.ClientSideAd.prototype.skip);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "canSkipNow", shaka.ads.ClientSideAd.prototype.canSkipNow);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "getTimeUntilSkippable", shaka.ads.ClientSideAd.prototype.getTimeUntilSkippable);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "isSkippable", shaka.ads.ClientSideAd.prototype.isSkippable);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "isPaused", shaka.ads.ClientSideAd.prototype.isPaused);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "getRemainingTime", shaka.ads.ClientSideAd.prototype.getRemainingTime);
    goog.exportProperty(shaka.ads.ClientSideAd.prototype, "getDuration", shaka.ads.ClientSideAd.prototype.getDuration);
    shaka.ads.ClientSideAdManager = function (a, b, c, d) {
      var e = this;
      this.adContainer_ = a;
      this.video_ = b;
      this.requestAdsStartTime_ = NaN;
      this.onEvent_ = d;
      this.ad_ = null;
      this.eventManager_ = new shaka.util.EventManager;
      google.ima.settings.setLocale(c);
      a = new google.ima.AdDisplayContainer(this.adContainer_, this.video_);
      a.initialize();
      this.adsLoader_ = new google.ima.AdsLoader(a);
      this.adsLoader_.getSettings().setPlayerType("shaka-player");
      this.adsLoader_.getSettings().setPlayerVersion(shaka.Player.version);
      this.imaAdsManager_ =
        null;
      this.eventManager_.listenOnce(this.adsLoader_, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (a) {
        e.onAdsManagerLoaded_(a)
      });
      this.eventManager_.listen(this.adsLoader_, google.ima.AdEvent.Type.AD_ERROR, function (a) {
        e.onAdError_(a)
      });
      this.video_.onended = function () {
        e.adsLoader_.contentComplete()
      }
    };
    shaka.ads.ClientSideAdManager.prototype.requestAds = function (a) {
      goog.asserts.assert(a.adTagUrl.length, "The ad tag needs to be set up before requesting ads.");
      this.requestAdsStartTime_ = Date.now() / 1E3;
      this.adsLoader_.requestAds(a)
    };
    shaka.ads.ClientSideAdManager.prototype.stop = function () {
      this.imaAdsManager_.stop()
    };
    shaka.ads.ClientSideAdManager.prototype.onAdError_ = function (a) {
      shaka.log.warning("There was an ad error from the IMA SDK: " + a.getError());
      shaka.log.warning("Resuming playback.");
      this.onAdComplete_(null);
      this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.CUEPOINTS_CHANGED, {cuepoints: []}))
    };
    shaka.ads.ClientSideAdManager.prototype.onAdsManagerLoaded_ = function (a) {
      var b = this;
      goog.asserts.assert(null != this.video_, "Video should not be null!");
      var c = Date.now() / 1E3 - this.requestAdsStartTime_;
      this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.ADS_LOADED, {loadTime: c}));
      this.imaAdsManager_ = a.getAdsManager(this.video_);
      this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.IMA_AD_MANAGER_LOADED, {imaAdsManager: this.imaAdsManager_}));
      c = this.imaAdsManager_.getCuePoints();
      if (c.length) {
        a =
          [];
        c = $jscomp.makeIterator(c);
        for (var d = c.next(); !d.done; d = c.next()) d = new shaka.ads.CuePoint(d.value), a.push(d);
        this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.CUEPOINTS_CHANGED, {cuepoints: a}))
      }
      this.addImaEventListeners_();
      try {
        this.imaAdsManager_.init(this.video_.offsetWidth, this.video_.offsetHeight, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL), this.eventManager_.listen(this.video_, "loadeddata", function () {
          b.imaAdsManager_.resize(b.video_.offsetWidth,
            b.video_.offsetHeight, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
        }), this.imaAdsManager_.start()
      } catch (e) {
        this.onAdComplete_(null)
      }
    };
    shaka.ads.ClientSideAdManager.prototype.addImaEventListeners_ = function () {
      var a = this;
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdErrorEvent.Type.AD_ERROR, function (b) {
        a.onAdError_(b)
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function (b) {
        a.onAdStart_(b)
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.STARTED, function (b) {
        a.onAdStart_(b)
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.FIRST_QUARTILE,
        function (b) {
          a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_FIRST_QUARTILE, {originalEvent: b}))
        });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.MIDPOINT, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_MIDPOINT, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.THIRD_QUARTILE, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_THIRD_QUARTILE, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_,
        google.ima.AdEvent.Type.COMPLETE, function (b) {
          a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_COMPLETE, {originalEvent: b}))
        });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function (b) {
        a.onAdComplete_(b)
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function (b) {
        a.onAdComplete_(b)
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.SKIPPED, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_SKIPPED,
          {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.VOLUME_CHANGED, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_VOLUME_CHANGED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.VOLUME_MUTED, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_MUTED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.PAUSED, function (b) {
        goog.asserts.assert(null !=
          a.ad_, "Ad should not be null!");
        a.ad_.setPaused(!0);
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_PAUSED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.RESUMED, function (b) {
        goog.asserts.assert(null != a.ad_, "Ad should not be null!");
        a.ad_.setPaused(!1);
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_RESUMED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, function (b) {
        goog.asserts.assert(null !=
          a.ad_, "Ad should not be null!");
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_SKIP_STATE_CHANGED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.CLICK, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_CLICKED))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.AD_PROGRESS, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_PROGRESS, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_,
        google.ima.AdEvent.Type.AD_BUFFERING, function (b) {
          a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_BUFFERING, {originalEvent: b}))
        });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.IMPRESSION, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_IMPRESSION, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.DURATION_CHANGE, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_DURATION_CHANGED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.USER_CLOSE, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_CLOSED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.LOADED, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_LOADED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.ALL_ADS_COMPLETED,
          {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.LINEAR_CHANGED, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_LINEAR_CHANGED, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.AD_METADATA, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_METADATA, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.LOG, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_RECOVERABLE_ERROR,
          {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.AD_BREAK_READY, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_BREAK_READY, {originalEvent: b}))
      });
      this.eventManager_.listen(this.imaAdsManager_, google.ima.AdEvent.Type.INTERACTION, function (b) {
        a.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_INTERACTION, {originalEvent: b}))
      })
    };
    shaka.ads.ClientSideAdManager.prototype.onAdStart_ = function (a) {
      goog.asserts.assert(this.imaAdsManager_, "Should have an ads manager at this point!");
      var b = a.getAd();
      this.ad_ = new shaka.ads.ClientSideAd(b, this.imaAdsManager_);
      this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_STARTED, {
        ad: this.ad_,
        sdkAdObject: b,
        originalEvent: a
      }));
      this.adContainer_.setAttribute("ad-active", "true");
      this.video_.pause()
    };
    shaka.ads.ClientSideAdManager.prototype.onAdComplete_ = function (a) {
      this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_STOPPED, {originalEvent: a}));
      this.adContainer_.removeAttribute("ad-active");
      this.video_.play()
    };
    shaka.ads.ServerSideAd = function (a, b) {
      this.ad_ = a;
      this.adProgressData_ = null;
      this.video_ = b
    };
    shaka.ads.ServerSideAd.prototype.setProgressData = function (a) {
      this.adProgressData_ = a
    };
    shaka.ads.ServerSideAd.prototype.getDuration = function () {
      return this.adProgressData_ ? this.adProgressData_.duration : -1
    };
    shaka.ads.ServerSideAd.prototype.getRemainingTime = function () {
      return this.adProgressData_ ? this.adProgressData_.duration - this.adProgressData_.currentTime : -1
    };
    shaka.ads.ServerSideAd.prototype.isPaused = function () {
      return this.video_.paused
    };
    shaka.ads.ServerSideAd.prototype.isSkippable = function () {
      return this.ad_.isSkippable()
    };
    shaka.ads.ServerSideAd.prototype.getTimeUntilSkippable = function () {
      var a = this.ad_.getSkipTimeOffset();
      a = this.getRemainingTime() - a;
      return Math.max(a, 0)
    };
    shaka.ads.ServerSideAd.prototype.canSkipNow = function () {
      return 0 == this.getTimeUntilSkippable()
    };
    shaka.ads.ServerSideAd.prototype.skip = function () {
      this.video_.currentTime += this.getRemainingTime()
    };
    shaka.ads.ServerSideAd.prototype.pause = function () {
      return this.video_.pause()
    };
    shaka.ads.ServerSideAd.prototype.play = function () {
      return this.video_.play()
    };
    shaka.ads.ServerSideAd.prototype.getVolume = function () {
      return this.video_.volume
    };
    shaka.ads.ServerSideAd.prototype.setVolume = function (a) {
      this.video_.volume = a
    };
    shaka.ads.ServerSideAd.prototype.isMuted = function () {
      return this.video_.muted
    };
    shaka.ads.ServerSideAd.prototype.resize = function (a, b) {
    };
    shaka.ads.ServerSideAd.prototype.setMuted = function (a) {
      this.video_.muted = a
    };
    shaka.ads.ServerSideAd.prototype.getSequenceLength = function () {
      var a = this.ad_.getAdPodInfo();
      return null == a ? 1 : a.getTotalAds()
    };
    shaka.ads.ServerSideAd.prototype.getPositionInSequence = function () {
      var a = this.ad_.getAdPodInfo();
      return null == a ? 1 : a.getAdPosition()
    };
    shaka.ads.ServerSideAd.prototype.release = function () {
      this.video_ = this.adProgressData_ = this.ad_ = null
    };
    goog.exportSymbol("shaka.ads.ServerSideAd", shaka.ads.ServerSideAd);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "release", shaka.ads.ServerSideAd.prototype.release);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "getPositionInSequence", shaka.ads.ServerSideAd.prototype.getPositionInSequence);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "getSequenceLength", shaka.ads.ServerSideAd.prototype.getSequenceLength);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "setMuted", shaka.ads.ServerSideAd.prototype.setMuted);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "resize", shaka.ads.ServerSideAd.prototype.resize);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "isMuted", shaka.ads.ServerSideAd.prototype.isMuted);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "setVolume", shaka.ads.ServerSideAd.prototype.setVolume);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "getVolume", shaka.ads.ServerSideAd.prototype.getVolume);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "play", shaka.ads.ServerSideAd.prototype.play);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "pause", shaka.ads.ServerSideAd.prototype.pause);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "skip", shaka.ads.ServerSideAd.prototype.skip);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "canSkipNow", shaka.ads.ServerSideAd.prototype.canSkipNow);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "getTimeUntilSkippable", shaka.ads.ServerSideAd.prototype.getTimeUntilSkippable);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "isSkippable", shaka.ads.ServerSideAd.prototype.isSkippable);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "isPaused", shaka.ads.ServerSideAd.prototype.isPaused);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "getRemainingTime", shaka.ads.ServerSideAd.prototype.getRemainingTime);
    goog.exportProperty(shaka.ads.ServerSideAd.prototype, "getDuration", shaka.ads.ServerSideAd.prototype.getDuration);
    shaka.ads.ServerSideAdManager = function (a, b, c, d) {
      var e = this;
      this.adContainer_ = a;
      this.video_ = b;
      this.streamPromise_ = null;
      this.streamRequestStartTime_ = NaN;
      this.onEvent_ = d;
      this.isLiveContent_ = !1;
      this.adProgressData_ = this.ad_ = this.snapForwardTime_ = null;
      this.backupUrl_ = "";
      this.eventManager_ = new shaka.util.EventManager;
      a = new google.ima.dai.api.UiSettings;
      a.setLocale(c);
      this.streamManager_ = new google.ima.dai.api.StreamManager(this.video_, this.adContainer_, a);
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.LOADED,
        function (a) {
          shaka.log.info("Ad SS Loaded");
          e.onLoaded_(a)
        });
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.ERROR, function () {
        shaka.log.info("Ad SS Error");
        e.onError_()
      });
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED, function () {
        shaka.log.info("Ad Break Started")
      });
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.STARTED, function (a) {
        shaka.log.info("Ad Started");
        e.onAdStart_(a)
      });
      this.eventManager_.listen(this.streamManager_,
        google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED, function () {
          shaka.log.info("Ad Break Ended");
          e.onAdBreakEnded_()
        });
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.AD_PROGRESS, function (a) {
        e.onAdProgress_(a)
      });
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.FIRST_QUARTILE, function () {
        shaka.log.info("Ad event: First Quartile");
        e.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_FIRST_QUARTILE))
      });
      this.eventManager_.listen(this.streamManager_,
        google.ima.dai.api.StreamEvent.Type.MIDPOINT, function () {
          shaka.log.info("Ad event: Midpoint");
          e.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_MIDPOINT))
        });
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.THIRD_QUARTILE, function () {
        shaka.log.info("Ad event: Third Quartile");
        e.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_THIRD_QUARTILE))
      });
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.COMPLETE, function () {
        shaka.log.info("Ad event: Complete");
        e.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_COMPLETE));
        e.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_STOPPED));
        e.adContainer_.removeAttribute("ad-active");
        e.ad_ = null
      });
      this.eventManager_.listen(this.streamManager_, google.ima.dai.api.StreamEvent.Type.SKIPPED, function () {
        shaka.log.info("Ad event: Skipped");
        e.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_SKIPPED));
        e.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_STOPPED))
      });
      this.eventManager_.listen(this.streamManager_,
        google.ima.dai.api.StreamEvent.Type.CUEPOINTS_CHANGED, function (a) {
          shaka.log.info("Ad event: Cue points changed");
          e.onCuePointsChanged_(a)
        })
    };
    shaka.ads.ServerSideAdManager.prototype.streamRequest = function (a, b) {
      if (this.streamPromise_) return Promise.reject(new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.ADS, shaka.util.Error.Code.CURRENT_DAI_REQUEST_NOT_FINISHED));
      a instanceof google.ima.dai.api.LiveStreamRequest && (this.isLiveContent_ = !0);
      this.streamPromise_ = new shaka.util.PublicPromise;
      this.streamManager_.requestStream(a);
      this.backupUrl_ = b || "";
      this.streamRequestStartTime_ = Date.now() / 1E3;
      return this.streamPromise_
    };
    shaka.ads.ServerSideAdManager.prototype.replaceAdTagParameters = function (a) {
      this.streamManager_.replaceAdTagParameters(a)
    };
    shaka.ads.ServerSideAdManager.prototype.stop = function () {
      this.streamManager_.reset();
      this.backupUrl_ = "";
      this.snapForwardTime_ = null
    };
    shaka.ads.ServerSideAdManager.prototype.onTimedMetadata = function (a, b, c) {
      this.streamManager_.processMetadata(a, b, c)
    };
    shaka.ads.ServerSideAdManager.prototype.onCueMetadataChange = function (a) {
      if (a.key && a.data) {
        var b = {};
        b[a.key] = a.data;
        this.streamManager_.onTimedMetadata(b)
      }
    };
    shaka.ads.ServerSideAdManager.prototype.checkForSnapback_ = function () {
      var a = this.video_.currentTime;
      if (0 != a) {
        this.streamManager_.streamTimeForContentTime(a);
        var b = this.streamManager_.previousCuePointForStreamTime(a);
        b && !b.played && (shaka.log.info("Seeking back to the start of the ad break at " + b.start + " and will return to " + a), this.snapForwardTime_ = a, this.video_.currentTime = b.start)
      }
    };
    shaka.ads.ServerSideAdManager.prototype.onAdStart_ = function (a) {
      goog.asserts.assert(this.streamManager_, "Should have a stream manager at this point!");
      a = a.getAd();
      this.ad_ = new shaka.ads.ServerSideAd(a, this.video_);
      this.adProgressData_ && this.ad_.setProgressData(this.adProgressData_);
      this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_STARTED, {ad: this.ad_}));
      this.adContainer_.setAttribute("ad-active", "true")
    };
    shaka.ads.ServerSideAdManager.prototype.onAdBreakEnded_ = function () {
      this.adContainer_.removeAttribute("ad-active");
      var a = this.video_.currentTime;
      this.snapForwardTime_ && this.snapForwardTime_ > a && (this.video_.currentTime = this.snapForwardTime_, this.snapForwardTime_ = null)
    };
    shaka.ads.ServerSideAdManager.prototype.onLoaded_ = function (a) {
      var b = this, c = Date.now() / 1E3 - this.streamRequestStartTime_;
      this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.ADS_LOADED, {loadTime: c}));
      a = a.getStreamData().url;
      this.streamPromise_.resolve(a);
      this.streamPromise_ = null;
      this.isLiveContent_ || this.eventManager_.listen(this.video_, "seeked", function () {
        b.checkForSnapback_()
      })
    };
    shaka.ads.ServerSideAdManager.prototype.onError_ = function () {
      this.backupUrl_.length ? (shaka.log.warning("IMA stream request returned an error. Falling back to the backup asset uri."), this.streamPromise_.resolve(this.backupUrl_)) : this.streamPromise_.reject("IMA Stream request returned an error and there was no backup asset uri provided.");
      this.streamPromise_ = null
    };
    shaka.ads.ServerSideAdManager.prototype.onAdProgress_ = function (a) {
      this.adProgressData_ = a.getStreamData().adProgressData;
      this.ad_ && this.ad_.setProgressData(this.adProgressData_)
    };
    shaka.ads.ServerSideAdManager.prototype.onCuePointsChanged_ = function (a) {
      var b = a.getStreamData();
      a = [];
      b = $jscomp.makeIterator(b.cuepoints);
      for (var c = b.next(); !c.done; c = b.next()) c = c.value, c = new shaka.ads.CuePoint(c.start, c.end), a.push(c);
      this.onEvent_(new shaka.util.FakeEvent(shaka.ads.AdManager.CUEPOINTS_CHANGED, {cuepoints: a}))
    };
    shaka.ads.AdManager = function () {
      shaka.util.FakeEventTarget.call(this);
      this.ssAdManager_ = this.csAdManager_ = null;
      this.stats_ = new shaka.ads.AdsStats;
      this.locale_ = navigator.language
    };
    $jscomp.inherits(shaka.ads.AdManager, shaka.util.FakeEventTarget);
    shaka.ads.AdManager.prototype.setLocale = function (a) {
      this.locale_ = a
    };
    shaka.ads.AdManager.prototype.initClientSide = function (a, b) {
      var c = this;
      if (!window.google || !google.ima || !google.ima.AdsLoader) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.ADS, shaka.util.Error.Code.CS_IMA_SDK_MISSING);
      this.csAdManager_ = new shaka.ads.ClientSideAdManager(a, b, this.locale_, function (a) {
        if (a && a.type) switch (a.type) {
          case shaka.ads.AdManager.ADS_LOADED:
            c.stats_.addLoadTime(a.loadTime);
            break;
          case shaka.ads.AdManager.AD_STARTED:
            c.stats_.incrementStarted();
            break;
          case shaka.ads.AdManager.AD_COMPLETE:
            c.stats_.incrementPlayedCompletely();
            break;
          case shaka.ads.AdManager.AD_SKIPPED:
            c.stats_.incrementSkipped()
        }
        c.dispatchEvent(a)
      })
    };
    shaka.ads.AdManager.prototype.onAssetUnload = function () {
      this.csAdManager_ && this.csAdManager_.stop();
      this.dispatchEvent(new shaka.util.FakeEvent(shaka.ads.AdManager.AD_STOPPED));
      this.stats_ = new shaka.ads.AdsStats
    };
    shaka.ads.AdManager.prototype.requestClientSideAds = function (a) {
      if (!this.csAdManager_) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.ADS, shaka.util.Error.Code.CS_AD_MANAGER_NOT_INITIALIZED);
      this.csAdManager_.requestAds(a)
    };
    shaka.ads.AdManager.prototype.initServerSide = function (a, b) {
      var c = this;
      if (!window.google || !google.ima || !google.ima.dai) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.ADS, shaka.util.Error.Code.SS_IMA_SDK_MISSING);
      this.ssAdManager_ = new shaka.ads.ServerSideAdManager(a, b, this.locale_, function (a) {
        if (a && a.type) switch (a.type) {
          case shaka.ads.AdManager.ADS_LOADED:
            c.stats_.addLoadTime(a.loadTime);
            break;
          case shaka.ads.AdManager.AD_STARTED:
            c.stats_.incrementStarted();
            break;
          case shaka.ads.AdManager.AD_COMPLETE:
            c.stats_.incrementPlayedCompletely();
            break;
          case shaka.ads.AdManager.AD_SKIPPED:
            c.stats_.incrementSkipped()
        }
        c.dispatchEvent(a)
      })
    };
    shaka.ads.AdManager.prototype.requestServerSideStream = function (a, b) {
      b = void 0 === b ? "" : b;
      if (!this.ssAdManager_) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.ADS, shaka.util.Error.Code.SS_AD_MANAGER_NOT_INITIALIZED);
      a.adTagParameters || (a.adTagParameters = {});
      var c = a.adTagParameters;
      (c.mpt || c.mpv) && shaka.log.alwaysWarn('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');
      a.adTagParameters.mpt = "Shaka Player";
      a.adTagParameters.mpv = shaka.Player.version;
      return this.ssAdManager_.streamRequest(a, b)
    };
    shaka.ads.AdManager.prototype.replaceServerSideAdTagParameters = function (a) {
      if (!this.ssAdManager_) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.ADS, shaka.util.Error.Code.SS_AD_MANAGER_NOT_INITIALIZED);
      (a.mpt || a.mpv) && shaka.log.alwaysWarn('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');
      a.mpt = "Shaka Player";
      a.mpv = shaka.Player.version;
      this.ssAdManager_.replaceAdTagParameters(a)
    };
    shaka.ads.AdManager.prototype.getStats = function () {
      return this.stats_.getBlob()
    };
    shaka.ads.AdManager.prototype.onDashTimedMetadata = function (a) {
      if (this.ssAdManager_ && "urn:google:dai:2018" == a.schemeIdUri) {
        var b = a.schemeIdUri, c = a.eventElement ? a.eventElement.getAttribute("messageData") : null;
        this.ssAdManager_.onTimedMetadata(b, c, a.startTime)
      }
    };
    shaka.ads.AdManager.prototype.onHlsTimedMetadata = function (a, b) {
      if (this.ssAdManager_) this.ssAdManager_.onTimedMetadata("ID3", a.data, b); else shaka.log.warning("ID3 metadata processing was called without initializing server side ad logic. Ad-related metadata will not take effect")
    };
    shaka.ads.AdManager.prototype.onCueMetadataChange = function (a) {
      if (this.ssAdManager_) this.ssAdManager_.onCueMetadataChange(a); else shaka.log.warning("ID3 metadata processing was called without initializing server side ad logic. Ad-related metadata will not take effect")
    };
    goog.exportSymbol("shaka.ads.AdManager", shaka.ads.AdManager);
    goog.exportProperty(shaka.ads.AdManager.prototype, "onCueMetadataChange", shaka.ads.AdManager.prototype.onCueMetadataChange);
    goog.exportProperty(shaka.ads.AdManager.prototype, "onHlsTimedMetadata", shaka.ads.AdManager.prototype.onHlsTimedMetadata);
    goog.exportProperty(shaka.ads.AdManager.prototype, "onDashTimedMetadata", shaka.ads.AdManager.prototype.onDashTimedMetadata);
    goog.exportProperty(shaka.ads.AdManager.prototype, "getStats", shaka.ads.AdManager.prototype.getStats);
    goog.exportProperty(shaka.ads.AdManager.prototype, "replaceServerSideAdTagParameters", shaka.ads.AdManager.prototype.replaceServerSideAdTagParameters);
    goog.exportProperty(shaka.ads.AdManager.prototype, "requestServerSideStream", shaka.ads.AdManager.prototype.requestServerSideStream);
    goog.exportProperty(shaka.ads.AdManager.prototype, "initServerSide", shaka.ads.AdManager.prototype.initServerSide);
    goog.exportProperty(shaka.ads.AdManager.prototype, "requestClientSideAds", shaka.ads.AdManager.prototype.requestClientSideAds);
    goog.exportProperty(shaka.ads.AdManager.prototype, "onAssetUnload", shaka.ads.AdManager.prototype.onAssetUnload);
    goog.exportProperty(shaka.ads.AdManager.prototype, "initClientSide", shaka.ads.AdManager.prototype.initClientSide);
    goog.exportProperty(shaka.ads.AdManager.prototype, "setLocale", shaka.ads.AdManager.prototype.setLocale);
    shaka.ads.CuePoint = function (a, b) {
      this.start = a;
      this.end = void 0 === b ? null : b
    };
    shaka.ads.AdManager.ADS_LOADED = "ads-loaded";
    goog.exportProperty(shaka.ads.AdManager, "ADS_LOADED", shaka.ads.AdManager.ADS_LOADED);
    shaka.ads.AdManager.AD_STARTED = "ad-started";
    goog.exportProperty(shaka.ads.AdManager, "AD_STARTED", shaka.ads.AdManager.AD_STARTED);
    shaka.ads.AdManager.AD_FIRST_QUARTILE = "ad-first-quartile";
    goog.exportProperty(shaka.ads.AdManager, "AD_FIRST_QUARTILE", shaka.ads.AdManager.AD_FIRST_QUARTILE);
    shaka.ads.AdManager.AD_MIDPOINT = "ad-midpoint";
    goog.exportProperty(shaka.ads.AdManager, "AD_MIDPOINT", shaka.ads.AdManager.AD_MIDPOINT);
    shaka.ads.AdManager.AD_THIRD_QUARTILE = "ad-third-quartile";
    goog.exportProperty(shaka.ads.AdManager, "AD_THIRD_QUARTILE", shaka.ads.AdManager.AD_THIRD_QUARTILE);
    shaka.ads.AdManager.AD_COMPLETE = "ad-complete";
    goog.exportProperty(shaka.ads.AdManager, "AD_COMPLETE", shaka.ads.AdManager.AD_COMPLETE);
    shaka.ads.AdManager.AD_STOPPED = "ad-stopped";
    goog.exportProperty(shaka.ads.AdManager, "AD_STOPPED", shaka.ads.AdManager.AD_STOPPED);
    shaka.ads.AdManager.AD_SKIPPED = "ad-skipped";
    goog.exportProperty(shaka.ads.AdManager, "AD_SKIPPED", shaka.ads.AdManager.AD_SKIPPED);
    shaka.ads.AdManager.AD_VOLUME_CHANGED = "ad-volume-changed";
    goog.exportProperty(shaka.ads.AdManager, "AD_VOLUME_CHANGED", shaka.ads.AdManager.AD_VOLUME_CHANGED);
    shaka.ads.AdManager.AD_MUTED = "ad-muted";
    goog.exportProperty(shaka.ads.AdManager, "AD_MUTED", shaka.ads.AdManager.AD_MUTED);
    shaka.ads.AdManager.AD_PAUSED = "ad-paused";
    goog.exportProperty(shaka.ads.AdManager, "AD_PAUSED", shaka.ads.AdManager.AD_PAUSED);
    shaka.ads.AdManager.AD_RESUMED = "ad-resumed";
    goog.exportProperty(shaka.ads.AdManager, "AD_RESUMED", shaka.ads.AdManager.AD_RESUMED);
    shaka.ads.AdManager.AD_SKIP_STATE_CHANGED = "ad-skip-state-changed";
    goog.exportProperty(shaka.ads.AdManager, "AD_SKIP_STATE_CHANGED", shaka.ads.AdManager.AD_SKIP_STATE_CHANGED);
    shaka.ads.AdManager.CUEPOINTS_CHANGED = "ad-cue-points-changed";
    goog.exportProperty(shaka.ads.AdManager, "CUEPOINTS_CHANGED", shaka.ads.AdManager.CUEPOINTS_CHANGED);
    shaka.ads.AdManager.IMA_AD_MANAGER_LOADED = "ima-ad-manager-loaded";
    goog.exportProperty(shaka.ads.AdManager, "IMA_AD_MANAGER_LOADED", shaka.ads.AdManager.IMA_AD_MANAGER_LOADED);
    shaka.ads.AdManager.AD_CLICKED = "ad-clicked";
    goog.exportProperty(shaka.ads.AdManager, "AD_CLICKED", shaka.ads.AdManager.AD_CLICKED);
    shaka.ads.AdManager.AD_PROGRESS = "ad-progress";
    goog.exportProperty(shaka.ads.AdManager, "AD_PROGRESS", shaka.ads.AdManager.AD_PROGRESS);
    shaka.ads.AdManager.AD_BUFFERING = "ad-buffering";
    goog.exportProperty(shaka.ads.AdManager, "AD_BUFFERING", shaka.ads.AdManager.AD_BUFFERING);
    shaka.ads.AdManager.AD_IMPRESSION = "ad-impression";
    goog.exportProperty(shaka.ads.AdManager, "AD_IMPRESSION", shaka.ads.AdManager.AD_IMPRESSION);
    shaka.ads.AdManager.AD_DURATION_CHANGED = "ad-duration-changed";
    goog.exportProperty(shaka.ads.AdManager, "AD_DURATION_CHANGED", shaka.ads.AdManager.AD_DURATION_CHANGED);
    shaka.ads.AdManager.AD_CLOSED = "ad-closed";
    goog.exportProperty(shaka.ads.AdManager, "AD_CLOSED", shaka.ads.AdManager.AD_CLOSED);
    shaka.ads.AdManager.AD_LOADED = "ad-loaded";
    goog.exportProperty(shaka.ads.AdManager, "AD_LOADED", shaka.ads.AdManager.AD_LOADED);
    shaka.ads.AdManager.ALL_ADS_COMPLETED = "all-ads-completed";
    goog.exportProperty(shaka.ads.AdManager, "ALL_ADS_COMPLETED", shaka.ads.AdManager.ALL_ADS_COMPLETED);
    shaka.ads.AdManager.AD_LINEAR_CHANGED = "ad-linear-changed";
    goog.exportProperty(shaka.ads.AdManager, "AD_LINEAR_CHANGED", shaka.ads.AdManager.AD_LINEAR_CHANGED);
    shaka.ads.AdManager.AD_METADATA = "ad-metadata";
    goog.exportProperty(shaka.ads.AdManager, "AD_METADATA", shaka.ads.AdManager.AD_METADATA);
    shaka.ads.AdManager.AD_RECOVERABLE_ERROR = "ad-recoverable-error";
    goog.exportProperty(shaka.ads.AdManager, "AD_RECOVERABLE_ERROR", shaka.ads.AdManager.AD_RECOVERABLE_ERROR);
    shaka.ads.AdManager.AD_BREAK_READY = "ad-break-ready";
    goog.exportProperty(shaka.ads.AdManager, "AD_BREAK_READY", shaka.ads.AdManager.AD_BREAK_READY);
    shaka.ads.AdManager.AD_INTERACTION = "ad-interaction";
    goog.exportProperty(shaka.ads.AdManager, "AD_INTERACTION", shaka.ads.AdManager.AD_INTERACTION);
    shaka.Player.setAdManagerFactory(function () {
      return new shaka.ads.AdManager
    });
    shaka.cast = {};
    shaka.cast.CastUtils = function () {
    };
    shaka.cast.CastUtils.serialize = function (a) {
      return JSON.stringify(a, function (a, c) {
        if ("function" != typeof c) {
          if (c instanceof Event || c instanceof shaka.util.FakeEvent) {
            var b = {}, e;
            for (e in c) {
              var f = c[e];
              f && "object" == typeof f ? "detail" == e && (b[e] = f) : e in Event || (b[e] = f)
            }
            return b
          }
          return c instanceof Error ? shaka.cast.CastUtils.unpackError_(c) : c instanceof TimeRanges ? shaka.cast.CastUtils.unpackTimeRanges_(c) : c instanceof Uint8Array ? shaka.cast.CastUtils.unpackUint8Array_(c) : "number" == typeof c ? isNaN(c) ? "NaN" :
            isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c
        }
      })
    };
    shaka.cast.CastUtils.deserialize = function (a) {
      return JSON.parse(a, function (a, c) {
        return "NaN" == c ? NaN : "-Infinity" == c ? -Infinity : "Infinity" == c ? Infinity : c && "object" == typeof c && "TimeRanges" == c.__type__ ? shaka.cast.CastUtils.simulateTimeRanges_(c) : c && "object" == typeof c && "Uint8Array" == c.__type__ ? shaka.cast.CastUtils.makeUint8Array_(c) : c && "object" == typeof c && "Error" == c.__type__ ? shaka.cast.CastUtils.makeError_(c) : c
      })
    };
    shaka.cast.CastUtils.unpackTimeRanges_ = function (a) {
      var b = {__type__: "TimeRanges", length: a.length, start: [], end: []};
      a = $jscomp.makeIterator(shaka.media.TimeRangesUtils.getBufferedInfo(a));
      for (var c = a.next(); !c.done; c = a.next()) {
        c = c.value;
        var d = c.end;
        b.start.push(c.start);
        b.end.push(d)
      }
      return b
    };
    shaka.cast.CastUtils.simulateTimeRanges_ = function (a) {
      return {
        length: a.length, start: function (b) {
          return a.start[b]
        }, end: function (b) {
          return a.end[b]
        }
      }
    };
    shaka.cast.CastUtils.unpackUint8Array_ = function (a) {
      return {__type__: "Uint8Array", entries: Array.from(a)}
    };
    shaka.cast.CastUtils.makeUint8Array_ = function (a) {
      return new Uint8Array(a.entries)
    };
    shaka.cast.CastUtils.unpackError_ = function (a) {
      var b = new Set(["name", "message", "stack"]), c;
      for (c in a) b.add(c);
      var d = $jscomp.makeIterator(Object.getOwnPropertyNames(a));
      for (c = d.next(); !c.done; c = d.next()) b.add(c.value);
      d = {};
      b = $jscomp.makeIterator(b);
      for (c = b.next(); !c.done; c = b.next()) c = c.value, d[c] = a[c];
      return {__type__: "Error", contents: d}
    };
    shaka.cast.CastUtils.makeError_ = function (a) {
      a = a.contents;
      var b = Error(a.message), c;
      for (c in a) b[c] = a[c];
      return b
    };
    shaka.cast.CastUtils.VideoEvents = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" ");
    shaka.cast.CastUtils.VideoAttributes = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" ");
    shaka.cast.CastUtils.VideoInitStateAttributes = ["loop", "playbackRate"];
    shaka.cast.CastUtils.VideoVoidMethods = ["pause", "play"];
    shaka.cast.CastUtils.PlayerGetterMethods = {
      getAssetUri: 2,
      getAudioLanguages: 2,
      getAudioLanguagesAndRoles: 2,
      getBufferedInfo: 2,
      getConfiguration: 2,
      getExpiration: 2,
      getPlaybackRate: 2,
      getTextLanguages: 2,
      getTextLanguagesAndRoles: 2,
      getTextTracks: 2,
      getStats: 5,
      getVariantTracks: 2,
      isAudioOnly: 10,
      isBuffering: 1,
      isInProgress: 1,
      isLive: 10,
      isTextTrackVisible: 1,
      keySystem: 10,
      seekRange: 1,
      getLoadMode: 10
    };
    shaka.cast.CastUtils.PlayerGetterMethodsThatRequireLive = {
      getPlayheadTimeAsDate: 1,
      getPresentationStartTimeAsDate: 20
    };
    shaka.cast.CastUtils.PlayerInitState = [["getConfiguration", "configure"]];
    shaka.cast.CastUtils.PlayerInitAfterLoadState = [["isTextTrackVisible", "setTextTrackVisibility"]];
    shaka.cast.CastUtils.PlayerVoidMethods = "addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay".split(" ");
    shaka.cast.CastUtils.PlayerPromiseMethods = ["attach", "detach", "load", "unload"];
    shaka.cast.CastUtils.SHAKA_MESSAGE_NAMESPACE = "urn:x-cast:com.google.shaka.v2";
    shaka.cast.CastUtils.GENERIC_MESSAGE_NAMESPACE = "urn:x-cast:com.google.cast.media";
    shaka.cast.CastSender = function (a, b, c, d, e, f) {
      var g = this;
      this.receiverAppId_ = a;
      this.statusChangeTimer_ = new shaka.util.Timer(b);
      this.onFirstCastStateUpdate_ = c;
      this.hasJoinedExistingSession_ = !1;
      this.onRemoteEvent_ = d;
      this.onResumeLocal_ = e;
      this.onInitStateRequired_ = f;
      this.isCasting_ = this.apiReady_ = !1;
      this.receiverName_ = "";
      this.appData_ = null;
      this.onConnectionStatusChangedBound_ = function () {
        return g.onConnectionStatusChanged_()
      };
      this.onMessageReceivedBound_ = function (a, b) {
        return g.onMessageReceived_(a, b)
      };
      this.cachedProperties_ = {video: {}, player: {}};
      this.nextAsyncCallId_ = 0;
      this.asyncCallPromises_ = {};
      this.castPromise_ = null;
      shaka.cast.CastSender.instances_.add(this)
    };
    shaka.cast.CastSender.prototype.destroy = function () {
      shaka.cast.CastSender.instances_["delete"](this);
      this.rejectAllPromises_();
      shaka.cast.CastSender.session_ && this.removeListeners_();
      this.statusChangeTimer_ && (this.statusChangeTimer_.stop(), this.statusChangeTimer_ = null);
      this.onResumeLocal_ = this.onRemoteEvent_ = null;
      this.isCasting_ = this.apiReady_ = !1;
      this.onMessageReceivedBound_ = this.onConnectionStatusChangedBound_ = this.castPromise_ = this.asyncCallPromises_ = this.cachedProperties_ = this.appData_ = null;
      return Promise.resolve()
    };
    shaka.cast.CastSender.prototype.apiReady = function () {
      return this.apiReady_
    };
    shaka.cast.CastSender.prototype.hasReceivers = function () {
      return shaka.cast.CastSender.hasReceivers_
    };
    shaka.cast.CastSender.prototype.isCasting = function () {
      return this.isCasting_
    };
    shaka.cast.CastSender.prototype.receiverName = function () {
      return this.receiverName_
    };
    shaka.cast.CastSender.prototype.hasRemoteProperties = function () {
      return 0 != Object.keys(this.cachedProperties_.video).length
    };
    shaka.cast.CastSender.prototype.init = function () {
      var a = shaka.cast.CastSender;
      if (window.chrome && chrome.cast && chrome.cast.isAvailable && this.receiverAppId_.length) {
        this.apiReady_ = !0;
        this.statusChangeTimer_.tickNow();
        var b = new chrome.cast.SessionRequest(this.receiverAppId_);
        b = new chrome.cast.ApiConfig(b, function (b) {
          return a.onExistingSessionJoined_(b)
        }, function (b) {
          return a.onReceiverStatusChanged_(b)
        }, "origin_scoped");
        chrome.cast.initialize(b, function () {
          shaka.log.debug("CastSender: init")
        }, function (a) {
          shaka.log.error("CastSender: init error",
            a)
        });
        shaka.cast.CastSender.hasReceivers_ && this.statusChangeTimer_.tickAfter(shaka.cast.CastSender.STATUS_DELAY);
        (b = shaka.cast.CastSender.session_) && b.status != chrome.cast.SessionStatus.STOPPED ? (shaka.log.debug("CastSender: re-using existing connection"), this.onExistingSessionJoined_(b)) : shaka.cast.CastSender.session_ = null
      }
    };
    shaka.cast.CastSender.prototype.setAppData = function (a) {
      this.appData_ = a;
      this.isCasting_ && this.sendMessage_({type: "appData", appData: this.appData_})
    };
    shaka.cast.CastSender.prototype.cast = function (a) {
      var b = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        if (!b.apiReady_) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.CAST, shaka.util.Error.Code.CAST_API_UNAVAILABLE);
        if (!shaka.cast.CastSender.hasReceivers_) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.CAST, shaka.util.Error.Code.NO_CAST_RECEIVERS);
        if (b.isCasting_) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE,
          shaka.util.Error.Category.CAST, shaka.util.Error.Code.ALREADY_CASTING);
        b.castPromise_ = new shaka.util.PublicPromise;
        chrome.cast.requestSession(function (c) {
          return b.onSessionInitiated_(a, c)
        }, function (a) {
          return b.onConnectionError_(a)
        });
        return c.yield(b.castPromise_, 0)
      })
    };
    shaka.cast.CastSender.prototype.showDisconnectDialog = function () {
      var a = this;
      if (this.isCasting_) {
        var b = this.onInitStateRequired_();
        chrome.cast.requestSession(function (c) {
          return a.onSessionInitiated_(b, c)
        }, function (b) {
          return a.onConnectionError_(b)
        })
      }
    };
    shaka.cast.CastSender.prototype.forceDisconnect = function () {
      if (this.isCasting_) {
        this.rejectAllPromises_();
        if (shaka.cast.CastSender.session_) {
          this.removeListeners_();
          try {
            shaka.cast.CastSender.session_.stop(function () {
            }, function () {
            })
          } catch (a) {
          }
          shaka.cast.CastSender.session_ = null
        }
        this.onConnectionStatusChanged_()
      }
    };
    shaka.cast.CastSender.prototype.get = function (a, b) {
      var c = this;
      goog.asserts.assert("video" == a || "player" == a, "Unexpected target name");
      var d = shaka.cast.CastUtils;
      if ("video" == a) {
        if (d.VideoVoidMethods.includes(b)) return function (d) {
          for (var e = [], f = 0; f < arguments.length; ++f) e[f - 0] = arguments[f];
          return c.remoteCall_.apply(c, [a, b].concat($jscomp.arrayFromIterable(e)))
        }
      } else if ("player" == a) {
        if (d.PlayerGetterMethodsThatRequireLive[b]) {
          var e = this.get("player", "isLive")();
          goog.asserts.assert(e, b + " should be called on a live stream!");
          if (!e) return function () {
          }
        }
        if (d.PlayerVoidMethods.includes(b)) return function (d) {
          for (var e = [], f = 0; f < arguments.length; ++f) e[f - 0] = arguments[f];
          return c.remoteCall_.apply(c, [a, b].concat($jscomp.arrayFromIterable(e)))
        };
        if (d.PlayerPromiseMethods.includes(b)) return function (d) {
          for (var e = [], f = 0; f < arguments.length; ++f) e[f - 0] = arguments[f];
          return c.remoteAsyncCall_.apply(c, [a, b].concat($jscomp.arrayFromIterable(e)))
        };
        if (d.PlayerGetterMethods[b]) return function () {
          return c.propertyGetter_(a, b)
        }
      }
      return this.propertyGetter_(a,
        b)
    };
    shaka.cast.CastSender.prototype.set = function (a, b, c) {
      goog.asserts.assert("video" == a || "player" == a, "Unexpected target name");
      this.cachedProperties_[a][b] = c;
      this.sendMessage_({type: "set", targetName: a, property: b, value: c})
    };
    shaka.cast.CastSender.prototype.onSessionInitiated_ = function (a, b) {
      shaka.log.debug("CastSender: onSessionInitiated");
      this.onSessionCreated_(b);
      this.sendMessage_({type: "init", initState: a, appData: this.appData_});
      this.castPromise_.resolve()
    };
    shaka.cast.CastSender.prototype.onConnectionError_ = function (a) {
      var b = shaka.util.Error.Code.UNEXPECTED_CAST_ERROR;
      switch (a.code) {
        case "cancel":
          b = shaka.util.Error.Code.CAST_CANCELED_BY_USER;
          break;
        case "timeout":
          b = shaka.util.Error.Code.CAST_CONNECTION_TIMED_OUT;
          break;
        case "receiver_unavailable":
          b = shaka.util.Error.Code.CAST_RECEIVER_APP_UNAVAILABLE
      }
      this.castPromise_.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.CAST, b, a))
    };
    shaka.cast.CastSender.prototype.propertyGetter_ = function (a, b) {
      goog.asserts.assert("video" == a || "player" == a, "Unexpected target name");
      return this.cachedProperties_[a][b]
    };
    shaka.cast.CastSender.prototype.remoteCall_ = function (a, b, c) {
      for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
      goog.asserts.assert("video" == a || "player" == a, "Unexpected target name");
      this.sendMessage_({type: "call", targetName: a, methodName: b, args: d})
    };
    shaka.cast.CastSender.prototype.remoteAsyncCall_ = function (a, b, c) {
      for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
      goog.asserts.assert("video" == a || "player" == a, "Unexpected target name");
      e = new shaka.util.PublicPromise;
      var f = this.nextAsyncCallId_.toString();
      this.nextAsyncCallId_++;
      this.asyncCallPromises_[f] = e;
      try {
        this.sendMessage_({type: "asyncCall", targetName: a, methodName: b, args: d, id: f})
      } catch (g) {
        e.reject(g)
      }
      return e
    };
    shaka.cast.CastSender.onExistingSessionJoined_ = function (a) {
      for (var b = $jscomp.makeIterator(shaka.cast.CastSender.instances_), c = b.next(); !c.done; c = b.next()) c.value.onExistingSessionJoined_(a)
    };
    shaka.cast.CastSender.prototype.onExistingSessionJoined_ = function (a) {
      shaka.log.debug("CastSender: onExistingSessionJoined");
      var b = this.onInitStateRequired_();
      this.castPromise_ = new shaka.util.PublicPromise;
      this.hasJoinedExistingSession_ = !0;
      this.onSessionInitiated_(b, a)
    };
    shaka.cast.CastSender.onReceiverStatusChanged_ = function (a) {
      for (var b = $jscomp.makeIterator(shaka.cast.CastSender.instances_), c = b.next(); !c.done; c = b.next()) c.value.onReceiverStatusChanged_(a)
    };
    shaka.cast.CastSender.prototype.onReceiverStatusChanged_ = function (a) {
      shaka.log.debug("CastSender: receiver status", a);
      shaka.cast.CastSender.hasReceivers_ = "available" == a;
      this.statusChangeTimer_.tickNow()
    };
    shaka.cast.CastSender.prototype.onSessionCreated_ = function (a) {
      shaka.cast.CastSender.session_ = a;
      a.addUpdateListener(this.onConnectionStatusChangedBound_);
      a.addMessageListener(shaka.cast.CastUtils.SHAKA_MESSAGE_NAMESPACE, this.onMessageReceivedBound_);
      this.onConnectionStatusChanged_()
    };
    shaka.cast.CastSender.prototype.removeListeners_ = function () {
      var a = shaka.cast.CastSender.session_;
      a.removeUpdateListener(this.onConnectionStatusChangedBound_);
      a.removeMessageListener(shaka.cast.CastUtils.SHAKA_MESSAGE_NAMESPACE, this.onMessageReceivedBound_)
    };
    shaka.cast.CastSender.prototype.onConnectionStatusChanged_ = function () {
      var a = shaka.cast.CastSender.session_ ? "connected" == shaka.cast.CastSender.session_.status : !1;
      shaka.log.debug("CastSender: connection status", a);
      if (this.isCasting_ && !a) {
        this.onResumeLocal_();
        for (var b in this.cachedProperties_) this.cachedProperties_[b] = {};
        this.rejectAllPromises_()
      }
      this.receiverName_ = (this.isCasting_ = a) ? shaka.cast.CastSender.session_.receiver.friendlyName : "";
      this.statusChangeTimer_.tickNow()
    };
    shaka.cast.CastSender.prototype.rejectAllPromises_ = function () {
      for (var a in this.asyncCallPromises_) {
        var b = this.asyncCallPromises_[a];
        delete this.asyncCallPromises_[a];
        b.reject(new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.LOAD_INTERRUPTED))
      }
    };
    shaka.cast.CastSender.prototype.onMessageReceived_ = function (a, b) {
      var c = shaka.cast.CastUtils.deserialize(b);
      shaka.log.v2("CastSender: message", c);
      switch (c.type) {
        case "event":
          var d = c.targetName;
          c = c.event;
          c = new shaka.util.FakeEvent(c.type, c);
          this.onRemoteEvent_(d, c);
          break;
        case "update":
          d = c.update;
          for (var e in d) {
            c = this.cachedProperties_[e] || {};
            for (var f in d[e]) c[f] = d[e][f]
          }
          this.hasJoinedExistingSession_ && (this.onFirstCastStateUpdate_(), this.hasJoinedExistingSession_ = !1);
          break;
        case "asyncComplete":
          if (e =
            c.id, c = c.error, f = this.asyncCallPromises_[e], delete this.asyncCallPromises_[e], goog.asserts.assert(f, "Unexpected async id"), f) if (c) {
            e = new shaka.util.Error(c.severity, c.category, c.code);
            for (d in c) e[d] = c[d];
            f.reject(e)
          } else f.resolve()
      }
    };
    shaka.cast.CastSender.prototype.sendMessage_ = function (a) {
      a = shaka.cast.CastUtils.serialize(a);
      var b = shaka.cast.CastSender.session_;
      try {
        b.sendMessage(shaka.cast.CastUtils.SHAKA_MESSAGE_NAMESPACE, a, function () {
        }, shaka.log.error)
      } catch (c) {
        throw shaka.log.error("Cast session sendMessage threw", c), a = new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.CAST, shaka.util.Error.Code.CAST_CONNECTION_TIMED_OUT, c), b = new shaka.util.FakeEvent("error", {detail: a}), this.onRemoteEvent_("player",
          b), this.forceDisconnect(), a;
      }
    };
    shaka.cast.CastSender.STATUS_DELAY = .02;
    shaka.cast.CastSender.hasReceivers_ = !1;
    shaka.cast.CastSender.session_ = null;
    shaka.cast.CastSender.instances_ = new Set;
    shaka.cast.CastSender.onSdkLoaded_ = function (a) {
      if (a) {
        a = $jscomp.makeIterator(shaka.cast.CastSender.instances_);
        for (var b = a.next(); !b.done; b = a.next()) b.value.init()
      }
    };
    window.__onGCastApiAvailable = shaka.cast.CastSender.onSdkLoaded_;
    shaka.cast.CastProxy = function (a, b, c) {
      shaka.util.FakeEventTarget.call(this);
      var d = this;
      this.localVideo_ = a;
      this.localPlayer_ = b;
      this.eventManager_ = this.playerEventTarget_ = this.videoEventTarget_ = this.playerProxy_ = this.videoProxy_ = null;
      this.receiverAppId_ = c;
      this.compiledToExternNames_ = new Map;
      this.sender_ = new shaka.cast.CastSender(c, function () {
          return d.onCastStatusChanged_()
        }, function () {
          return d.onFirstCastStateUpdate_()
        }, function (a, b) {
          return d.onRemoteEvent_(a, b)
        }, function () {
          return d.onResumeLocal_()
        },
        function () {
          return d.getInitState_()
        });
      this.init_()
    };
    $jscomp.inherits(shaka.cast.CastProxy, shaka.util.FakeEventTarget);
    shaka.cast.CastProxy.prototype.destroy = function (a) {
      a && this.sender_.forceDisconnect();
      this.eventManager_ && (this.eventManager_.release(), this.eventManager_ = null);
      a = [];
      this.localPlayer_ && (a.push(this.localPlayer_.destroy()), this.localPlayer_ = null);
      this.sender_ && (a.push(this.sender_.destroy()), this.sender_ = null);
      this.playerProxy_ = this.videoProxy_ = this.localVideo_ = null;
      return Promise.all(a)
    };
    shaka.cast.CastProxy.prototype.getVideo = function () {
      return this.videoProxy_
    };
    shaka.cast.CastProxy.prototype.getPlayer = function () {
      return this.playerProxy_
    };
    shaka.cast.CastProxy.prototype.canCast = function () {
      return this.sender_.apiReady() && this.sender_.hasReceivers()
    };
    shaka.cast.CastProxy.prototype.isCasting = function () {
      return this.sender_.isCasting()
    };
    shaka.cast.CastProxy.prototype.receiverName = function () {
      return this.sender_.receiverName()
    };
    shaka.cast.CastProxy.prototype.cast = function () {
      var a = this, b;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        return 1 == c.nextAddress ? (b = a.getInitState_(), c.yield(a.sender_.cast(b), 2)) : a.localPlayer_ ? c.yield(a.localPlayer_.unload(), 0) : c["return"]()
      })
    };
    shaka.cast.CastProxy.prototype.setAppData = function (a) {
      this.sender_.setAppData(a)
    };
    shaka.cast.CastProxy.prototype.suggestDisconnect = function () {
      this.sender_.showDisconnectDialog()
    };
    shaka.cast.CastProxy.prototype.forceDisconnect = function () {
      this.sender_.forceDisconnect()
    };
    shaka.cast.CastProxy.prototype.changeReceiverId = function (a) {
      var b = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        if (1 == c.nextAddress) {
          if (a == b.receiverAppId_) return c["return"]();
          b.receiverAppId_ = a;
          b.sender_.forceDisconnect();
          return c.yield(b.sender_.destroy(), 2)
        }
        b.sender_ = null;
        b.sender_ = new shaka.cast.CastSender(a, function () {
            return b.onCastStatusChanged_()
          }, function () {
            return b.onFirstCastStateUpdate_()
          }, function (a, c) {
            return b.onRemoteEvent_(a, c)
          }, function () {
            return b.onResumeLocal_()
          },
          function () {
            return b.getInitState_()
          });
        b.sender_.init();
        c.jumpToEnd()
      })
    };
    shaka.cast.CastProxy.prototype.init_ = function () {
      var a = this;
      this.sender_.init();
      this.eventManager_ = new shaka.util.EventManager;
      for (var b = $jscomp.makeIterator(shaka.cast.CastUtils.VideoEvents), c = b.next(); !c.done; c = b.next()) this.eventManager_.listen(this.localVideo_, c.value, function (b) {
        return a.videoProxyLocalEvent_(b)
      });
      for (var d in shaka.Player.EventName) this.eventManager_.listen(this.localPlayer_, shaka.Player.EventName[d], function (b) {
        return a.playerProxyLocalEvent_(b)
      });
      this.videoProxy_ = {};
      b = {};
      for (var e in this.localVideo_) b.$jscomp$loop$prop$k$486 =
        e, Object.defineProperty(this.videoProxy_, b.$jscomp$loop$prop$k$486, {
        configurable: !1,
        enumerable: !0,
        get: function (b) {
          return function () {
            return a.videoProxyGet_(b.$jscomp$loop$prop$k$486)
          }
        }(b),
        set: function (b) {
          return function (c) {
            return a.videoProxySet_(b.$jscomp$loop$prop$k$486, c)
          }
        }(b)
      }), b = {$jscomp$loop$prop$k$486: b.$jscomp$loop$prop$k$486};
      this.playerProxy_ = {};
      this.iterateOverPlayerMethods_(function (b, c) {
        goog.asserts.assert(a.playerProxy_, "Must have player proxy!");
        Object.defineProperty(a.playerProxy_,
          b, {
            configurable: !1, enumerable: !0, get: function () {
              return a.playerProxyGet_(b)
            }
          })
      });
      COMPILED && this.mapCompiledToUncompiledPlayerMethodNames_();
      this.videoEventTarget_ = new shaka.util.FakeEventTarget;
      this.videoEventTarget_.dispatchTarget = this.videoProxy_;
      this.playerEventTarget_ = new shaka.util.FakeEventTarget;
      this.playerEventTarget_.dispatchTarget = this.playerProxy_
    };
    shaka.cast.CastProxy.prototype.mapCompiledToUncompiledPlayerMethodNames_ = function () {
      var a = this, b = new Map;
      this.iterateOverPlayerMethods_(function (c, d) {
        if (b.has(d)) {
          var e = b.get(d);
          c.length < e.length ? a.compiledToExternNames_.set(c, e) : a.compiledToExternNames_.set(e, c)
        } else b.set(d, c)
      })
    };
    shaka.cast.CastProxy.prototype.iterateOverPlayerMethods_ = function (a) {
      function b(a) {
        return "constructor" == a || "function" != typeof c[a] ? !1 : !d.has(a)
      }

      goog.asserts.assert(this.localPlayer_, "Must have player!");
      var c = this.localPlayer_, d = new Set;
      for (e in c) b(e) && (d.add(e), a(e, c[e]));
      var e = Object.getPrototypeOf(c);
      for (var f = Object.getPrototypeOf({}); e && e != f;) {
        for (var g = $jscomp.makeIterator(Object.getOwnPropertyNames(e)), h = g.next(); !h.done; h = g.next()) h = h.value, b(h) && (d.add(h), a(h, c[h]));
        e = Object.getPrototypeOf(e)
      }
    };
    shaka.cast.CastProxy.prototype.getInitState_ = function () {
      var a = {video: {}, player: {}, playerAfterLoad: {}, manifest: this.localPlayer_.getAssetUri(), startTime: null};
      this.localVideo_.pause();
      for (var b = $jscomp.makeIterator(shaka.cast.CastUtils.VideoInitStateAttributes), c = b.next(); !c.done; c = b.next()) c = c.value, a.video[c] = this.localVideo_[c];
      this.localVideo_.ended || (a.startTime = this.localVideo_.currentTime);
      b = $jscomp.makeIterator(shaka.cast.CastUtils.PlayerInitState);
      for (c = b.next(); !c.done; c = b.next()) {
        var d =
          c.value;
        c = d[1];
        d = this.localPlayer_[d[0]]();
        a.player[c] = d
      }
      b = $jscomp.makeIterator(shaka.cast.CastUtils.PlayerInitAfterLoadState);
      for (c = b.next(); !c.done; c = b.next()) d = c.value, c = d[1], d = this.localPlayer_[d[0]](), a.playerAfterLoad[c] = d;
      return a
    };
    shaka.cast.CastProxy.prototype.onCastStatusChanged_ = function () {
      var a = new shaka.util.FakeEvent("caststatuschanged");
      this.dispatchEvent(a)
    };
    shaka.cast.CastProxy.prototype.onFirstCastStateUpdate_ = function () {
      var a = new shaka.util.FakeEvent(this.videoProxy_.paused ? "pause" : "play");
      this.videoEventTarget_.dispatchEvent(a)
    };
    shaka.cast.CastProxy.prototype.onResumeLocal_ = function () {
      for (var a = this, b = $jscomp.makeIterator(shaka.cast.CastUtils.PlayerInitState), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        c = d[1];
        d = this.sender_.get("player", d[0])();
        this.localPlayer_[c](d)
      }
      var e = this.sender_.get("player", "getAssetUri")();
      c = this.sender_.get("video", "ended");
      b = Promise.resolve();
      var f = this.localVideo_.autoplay;
      d = null;
      c || (d = this.sender_.get("video", "currentTime"));
      e && (this.localVideo_.autoplay = !1, b = this.localPlayer_.load(e, d));
      var g =
        {};
      c = $jscomp.makeIterator(shaka.cast.CastUtils.VideoInitStateAttributes);
      for (d = c.next(); !d.done; d = c.next()) d = d.value, g[d] = this.sender_.get("video", d);
      b.then(function () {
        if (a.localVideo_) {
          for (var b = $jscomp.makeIterator(shaka.cast.CastUtils.VideoInitStateAttributes), c = b.next(); !c.done; c = b.next()) c = c.value, a.localVideo_[c] = g[c];
          b = $jscomp.makeIterator(shaka.cast.CastUtils.PlayerInitAfterLoadState);
          for (c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d[1];
            d = a.sender_.get("player", d[0])();
            a.localPlayer_[c](d)
          }
          a.localVideo_.autoplay =
            f;
          e && a.localVideo_.play()
        }
      }, function (b) {
        goog.asserts.assert(b instanceof shaka.util.Error, "Wrong error type!");
        b = new shaka.util.FakeEvent(shaka.Player.EventName.Error, {detail: b});
        a.localPlayer_.dispatchEvent(b)
      })
    };
    shaka.cast.CastProxy.prototype.videoProxyGet_ = function (a) {
      var b = this;
      if ("addEventListener" == a) return function (a, c, f) {
        return b.videoEventTarget_.addEventListener(a, c, f)
      };
      if ("removeEventListener" == a) return function (a, c, f) {
        return b.videoEventTarget_.removeEventListener(a, c, f)
      };
      if (this.sender_.isCasting() && !this.sender_.hasRemoteProperties()) {
        var c = this.localVideo_[a];
        if ("function" != typeof c) return c
      }
      return this.sender_.isCasting() ? this.sender_.get("video", a) : (a = this.localVideo_[a], "function" == typeof a &&
      (a = a.bind(this.localVideo_)), a)
    };
    shaka.cast.CastProxy.prototype.videoProxySet_ = function (a, b) {
      this.sender_.isCasting() ? this.sender_.set("video", a, b) : this.localVideo_[a] = b
    };
    shaka.cast.CastProxy.prototype.videoProxyLocalEvent_ = function (a) {
      this.sender_.isCasting() || (a = new shaka.util.FakeEvent(a.type, a), this.videoEventTarget_.dispatchEvent(a))
    };
    shaka.cast.CastProxy.prototype.playerProxyGet_ = function (a) {
      var b = this;
      this.compiledToExternNames_.has(a) && (a = this.compiledToExternNames_.get(a));
      if ("addEventListener" == a) return function (a, c, f) {
        return b.playerEventTarget_.addEventListener(a, c, f)
      };
      if ("removeEventListener" == a) return function (a, c, f) {
        return b.playerEventTarget_.removeEventListener(a, c, f)
      };
      if ("getMediaElement" == a) return function () {
        return b.videoProxy_
      };
      if ("getSharedConfiguration" == a) return shaka.log.warning("Can't share configuration across a network. Returning copy."),
        this.sender_.get("player", "getConfiguration");
      if ("getNetworkingEngine" == a) return this.sender_.isCasting() && shaka.log.warning("NOTE: getNetworkingEngine() is always local!"), function () {
        return b.localPlayer_.getNetworkingEngine()
      };
      if ("getAdManager" == a) return this.sender_.isCasting() && shaka.log.warning("NOTE: getAdManager() is always local!"), function () {
        return b.localPlayer_.getAdManager()
      };
      if ("setVideoContainer" == a) return this.sender_.isCasting() && shaka.log.warning("NOTE: setVideoContainer() is always local!"),
        function (a) {
          return b.localPlayer_.setVideoContainer(a)
        };
      if (this.sender_.isCasting()) {
        if ("getManifest" == a || "drmInfo" == a) return function () {
          shaka.log.alwaysWarn(a + "() does not work while casting!");
          return null
        };
        if ("attach" == a || "detach" == a) return function () {
          shaka.log.alwaysWarn(a + "() does not work while casting!");
          return Promise.resolve()
        }
      }
      if (this.sender_.isCasting() && !this.sender_.hasRemoteProperties() && shaka.cast.CastUtils.PlayerGetterMethods[a]) {
        var c = this.localPlayer_[a];
        goog.asserts.assert("function" ==
          typeof c, "only methods on Player");
        return c.bind(this.localPlayer_)
      }
      return this.sender_.isCasting() ? this.sender_.get("player", a) : (c = this.localPlayer_[a], goog.asserts.assert("function" == typeof c, "only methods on Player"), c.bind(this.localPlayer_))
    };
    shaka.cast.CastProxy.prototype.playerProxyLocalEvent_ = function (a) {
      this.sender_.isCasting() || this.playerEventTarget_.dispatchEvent(a)
    };
    shaka.cast.CastProxy.prototype.onRemoteEvent_ = function (a, b) {
      goog.asserts.assert(this.sender_.isCasting(), "Should only receive remote events while casting");
      this.sender_.isCasting() && ("video" == a ? this.videoEventTarget_.dispatchEvent(b) : "player" == a && this.playerEventTarget_.dispatchEvent(b))
    };
    goog.exportSymbol("shaka.cast.CastProxy", shaka.cast.CastProxy);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "changeReceiverId", shaka.cast.CastProxy.prototype.changeReceiverId);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "forceDisconnect", shaka.cast.CastProxy.prototype.forceDisconnect);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "suggestDisconnect", shaka.cast.CastProxy.prototype.suggestDisconnect);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "setAppData", shaka.cast.CastProxy.prototype.setAppData);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "cast", shaka.cast.CastProxy.prototype.cast);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "receiverName", shaka.cast.CastProxy.prototype.receiverName);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "isCasting", shaka.cast.CastProxy.prototype.isCasting);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "canCast", shaka.cast.CastProxy.prototype.canCast);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "getPlayer", shaka.cast.CastProxy.prototype.getPlayer);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "getVideo", shaka.cast.CastProxy.prototype.getVideo);
    goog.exportProperty(shaka.cast.CastProxy.prototype, "destroy", shaka.cast.CastProxy.prototype.destroy);
    shaka.cast.CastReceiver = function (a, b, c, d) {
      shaka.util.FakeEventTarget.call(this);
      var e = this;
      this.video_ = a;
      this.player_ = b;
      this.eventManager_ = new shaka.util.EventManager;
      this.targets_ = {video: a, player: b};
      this.appDataCallback_ = c || function () {
      };
      this.contentIdCallback_ = d || function (a) {
        return a
      };
      this.metadata_ = null;
      this.isConnected_ = !1;
      this.isIdle_ = !0;
      this.updateNumber_ = 0;
      this.startUpdatingUpdateNumber_ = !1;
      this.initialStatusUpdatePending_ = !0;
      this.genericBus_ = this.shakaBus_ = null;
      this.pollTimer_ = new shaka.util.Timer(function () {
        e.pollAttributes_()
      });
      this.init_()
    };
    $jscomp.inherits(shaka.cast.CastReceiver, shaka.util.FakeEventTarget);
    shaka.cast.CastReceiver.prototype.isConnected = function () {
      return this.isConnected_
    };
    shaka.cast.CastReceiver.prototype.isIdle = function () {
      return this.isIdle_
    };
    shaka.cast.CastReceiver.prototype.setContentMetadata = function (a) {
      this.metadata_ = a
    };
    shaka.cast.CastReceiver.prototype.clearContentMetadata = function () {
      this.metadata_ = null
    };
    shaka.cast.CastReceiver.prototype.setContentTitle = function (a) {
      this.metadata_ || (this.metadata_ = {metadataType: cast.receiver.media.MetadataType.GENERIC});
      this.metadata_.title = a
    };
    shaka.cast.CastReceiver.prototype.setContentImage = function (a) {
      this.metadata_ || (this.metadata_ = {metadataType: cast.receiver.media.MetadataType.GENERIC});
      this.metadata_.images = [{url: a}]
    };
    shaka.cast.CastReceiver.prototype.setContentArtist = function (a) {
      this.metadata_ || (this.metadata_ = {});
      this.metadata_.artist = a;
      this.metadata_.metadataType = cast.receiver.media.MetadataType.MUSIC_TRACK
    };
    shaka.cast.CastReceiver.prototype.destroy = function () {
      var a = this, b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) return a.eventManager_ && (a.eventManager_.release(), a.eventManager_ = null), b = [], a.player_ && (b.push(a.player_.destroy()), a.player_ = null), a.pollTimer_ && (a.pollTimer_.stop(), a.pollTimer_ = null), a.video_ = null, a.targets_ = null, a.appDataCallback_ = null, a.isConnected_ = !1, a.isIdle_ = !0, a.shakaBus_ = null, a.genericBus_ = null, d.yield(Promise.all(b), 2);
        c = cast.receiver.CastReceiverManager.getInstance();
        c.stop();
        d.jumpToEnd()
      })
    };
    shaka.cast.CastReceiver.prototype.init_ = function () {
      var a = this, b = cast.receiver.CastReceiverManager.getInstance();
      b.onSenderConnected = function () {
        return a.onSendersChanged_()
      };
      b.onSenderDisconnected = function () {
        return a.onSendersChanged_()
      };
      b.onSystemVolumeChanged = function () {
        return a.fakeVolumeChangeEvent_()
      };
      this.genericBus_ = b.getCastMessageBus(shaka.cast.CastUtils.GENERIC_MESSAGE_NAMESPACE);
      this.genericBus_.onMessage = function (b) {
        return a.onGenericMessage_(b)
      };
      this.shakaBus_ = b.getCastMessageBus(shaka.cast.CastUtils.SHAKA_MESSAGE_NAMESPACE);
      this.shakaBus_.onMessage = function (b) {
        return a.onShakaMessage_(b)
      };
      goog.DEBUG ? shaka.util.Platform.isChromecast() && b.start() : b.start();
      b = $jscomp.makeIterator(shaka.cast.CastUtils.VideoEvents);
      for (var c = b.next(); !c.done; c = b.next()) this.eventManager_.listen(this.video_, c.value, function (b) {
        return a.proxyEvent_("video", b)
      });
      for (var d in shaka.Player.EventName) this.eventManager_.listen(this.player_, shaka.Player.EventName[d], function (b) {
        return a.proxyEvent_("player", b)
      });
      cast.__platform__ && cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160') ?
        this.player_.setMaxHardwareResolution(3840, 2160) : this.player_.setMaxHardwareResolution(1920, 1080);
      this.eventManager_.listen(this.video_, "loadeddata", function () {
        a.startUpdatingUpdateNumber_ = !0
      });
      this.eventManager_.listen(this.player_, "loading", function () {
        a.isIdle_ = !1;
        a.onCastStatusChanged_()
      });
      this.eventManager_.listen(this.video_, "playing", function () {
        a.isIdle_ = !1;
        a.onCastStatusChanged_()
      });
      this.eventManager_.listen(this.video_, "pause", function () {
        a.onCastStatusChanged_()
      });
      this.eventManager_.listen(this.player_,
        "unloading", function () {
          a.isIdle_ = !0;
          a.onCastStatusChanged_()
        });
      this.eventManager_.listen(this.video_, "ended", function () {
        (new shaka.util.Timer(function () {
          a.video_ && a.video_.ended && (a.isIdle_ = !0, a.onCastStatusChanged_())
        })).tickAfter(shaka.cast.CastReceiver.IDLE_INTERVAL)
      })
    };
    shaka.cast.CastReceiver.prototype.onSendersChanged_ = function () {
      this.updateNumber_ = 0;
      this.initialStatusUpdatePending_ = !0;
      this.isConnected_ = 0 != cast.receiver.CastReceiverManager.getInstance().getSenders().length;
      this.onCastStatusChanged_()
    };
    shaka.cast.CastReceiver.prototype.onCastStatusChanged_ = function () {
      var a = this, b;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        if (1 == c.nextAddress) return c.yield(Promise.resolve(), 2);
        if (!a.player_) return c["return"]();
        b = new shaka.util.FakeEvent("caststatuschanged");
        a.dispatchEvent(b);
        a.maybeSendMediaInfoMessage_() || a.sendMediaStatus_();
        c.jumpToEnd()
      })
    };
    shaka.cast.CastReceiver.prototype.initState_ = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m, n, p;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (q) {
        switch (q.nextAddress) {
          case 1:
            for (d in a.player) e = a.player[d], c.player_[d](e);
            c.appDataCallback_(b);
            f = c.video_.autoplay;
            return a.manifest ? (c.video_.autoplay = !1, q.setCatchFinallyBlocks(5), q.yield(c.player_.load(a.manifest, a.startTime), 7)) : q.yield(Promise.resolve(), 3);
          case 7:
            q.leaveTryBlock(3);
            break;
          case 5:
            return g = q.enterCatchBlock(), goog.asserts.assert(g instanceof
              shaka.util.Error, "Wrong error type!"), h = shaka.Player.EventName.Error, k = new shaka.util.FakeEvent(h, {detail: g}), c.player_.dispatchEvent(k), q["return"]();
          case 3:
            if (!c.player_) return q["return"]();
            for (l in a.video) m = a.video[l], c.video_[l] = m;
            for (n in a.playerAfterLoad) p = a.playerAfterLoad[n], c.player_[n](p);
            c.video_.autoplay = f;
            a.manifest && (c.video_.play(), c.sendMediaStatus_());
            q.jumpToEnd()
        }
      })
    };
    shaka.cast.CastReceiver.prototype.proxyEvent_ = function (a, b) {
      this.player_ && (this.pollAttributes_(), this.sendMessage_({
        type: "event",
        targetName: a,
        event: b
      }, this.shakaBus_))
    };
    shaka.cast.CastReceiver.prototype.pollAttributes_ = function () {
      this.pollTimer_.tickAfter(shaka.cast.CastReceiver.POLL_INTERVAL);
      for (var a = {
        video: {},
        player: {}
      }, b = $jscomp.makeIterator(shaka.cast.CastUtils.VideoAttributes), c = b.next(); !c.done; c = b.next()) c = c.value, a.video[c] = this.video_[c];
      if (this.player_.isLive()) {
        b = shaka.cast.CastUtils.PlayerGetterMethodsThatRequireLive;
        for (var d in b) 0 == this.updateNumber_ % b[d] && (a.player[d] = this.player_[d]())
      }
      for (var e in shaka.cast.CastUtils.PlayerGetterMethods) 0 == this.updateNumber_ %
      shaka.cast.CastUtils.PlayerGetterMethods[e] && (a.player[e] = this.player_[e]());
      if (d = cast.receiver.CastReceiverManager.getInstance().getSystemVolume()) a.video.volume = d.level, a.video.muted = d.muted;
      this.startUpdatingUpdateNumber_ && (this.updateNumber_ += 1);
      this.sendMessage_({type: "update", update: a}, this.shakaBus_);
      this.maybeSendMediaInfoMessage_()
    };
    shaka.cast.CastReceiver.prototype.maybeSendMediaInfoMessage_ = function () {
      return this.initialStatusUpdatePending_ && (this.video_.duration || this.player_.isLive()) ? (this.sendMediaInfoMessage_(), this.initialStatusUpdatePending_ = !1, !0) : !1
    };
    shaka.cast.CastReceiver.prototype.sendMediaInfoMessage_ = function (a) {
      a = void 0 === a ? 0 : a;
      var b = {
        contentId: this.player_.getAssetUri(),
        streamType: this.player_.isLive() ? "LIVE" : "BUFFERED",
        contentType: ""
      };
      this.player_.isLive() || (b.duration = this.video_.duration);
      this.metadata_ && (b.metadata = this.metadata_);
      this.sendMediaStatus_(a, b)
    };
    shaka.cast.CastReceiver.prototype.fakeVolumeChangeEvent_ = function () {
      var a = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
      goog.asserts.assert(a, "System volume should not be null!");
      a && this.sendMessage_({type: "update", update: {video: {volume: a.level, muted: a.muted}}}, this.shakaBus_);
      this.sendMessage_({type: "event", targetName: "video", event: {type: "volumechange"}}, this.shakaBus_)
    };
    shaka.cast.CastReceiver.prototype.onShakaMessage_ = function (a) {
      var b = this, c = shaka.cast.CastUtils.deserialize(a.data);
      shaka.log.debug("CastReceiver: message", c);
      switch (c.type) {
        case "init":
          this.updateNumber_ = 0;
          this.startUpdatingUpdateNumber_ = !1;
          this.initialStatusUpdatePending_ = !0;
          this.initState_(c.initState, c.appData);
          this.pollAttributes_();
          break;
        case "appData":
          this.appDataCallback_(c.appData);
          break;
        case "set":
          var d = c.targetName, e = c.property;
          c = c.value;
          if ("video" == d) if (a = cast.receiver.CastReceiverManager.getInstance(),
          "volume" == e) {
            a.setSystemVolumeLevel(c);
            break
          } else if ("muted" == e) {
            a.setSystemVolumeMuted(c);
            break
          }
          this.targets_[d][e] = c;
          break;
        case "call":
          d = this.targets_[c.targetName];
          d[c.methodName].apply(d, c.args);
          break;
        case "asyncCall":
          d = c.targetName;
          e = c.methodName;
          "player" == d && "load" == e && (this.updateNumber_ = 0, this.startUpdatingUpdateNumber_ = !1);
          var f = c.id, g = a.senderId;
          a = this.targets_[d];
          c = a[e].apply(a, c.args);
          "player" == d && "load" == e && (c = c.then(function () {
            b.initialStatusUpdatePending_ = !0
          }));
          c.then(function () {
            return b.sendAsyncComplete_(g,
              f, null)
          }, function (a) {
            return b.sendAsyncComplete_(g, f, a)
          })
      }
    };
    shaka.cast.CastReceiver.prototype.onGenericMessage_ = function (a) {
      var b = this, c = shaka.cast.CastUtils.deserialize(a.data);
      shaka.log.debug("CastReceiver: message", c);
      switch (c.type) {
        case "PLAY":
          this.video_.play();
          this.sendMediaStatus_();
          break;
        case "PAUSE":
          this.video_.pause();
          this.sendMediaStatus_();
          break;
        case "SEEK":
          a = c.currentTime;
          var d = c.resumeState;
          null != a && (this.video_.currentTime = Number(a));
          d && "PLAYBACK_START" == d ? (this.video_.play(), this.sendMediaStatus_()) : d && "PLAYBACK_PAUSE" == d && (this.video_.pause(),
            this.sendMediaStatus_());
          break;
        case "STOP":
          this.player_.unload().then(function () {
            b.player_ && b.sendMediaStatus_()
          });
          break;
        case "GET_STATUS":
          this.sendMediaInfoMessage_(Number(c.requestId));
          break;
        case "VOLUME":
          d = c.volume;
          a = d.level;
          d = d.muted;
          var e = this.video_.volume, f = this.video_.muted;
          null != a && (this.video_.volume = Number(a));
          null != d && (this.video_.muted = d);
          e == this.video_.volume && f == this.video_.muted || this.sendMediaStatus_();
          break;
        case "LOAD":
          this.updateNumber_ = 0;
          this.initialStatusUpdatePending_ = this.startUpdatingUpdateNumber_ =
            !1;
          a = c.media;
          d = c.currentTime;
          e = this.contentIdCallback_(a.contentId);
          f = c.autoplay || !0;
          this.appDataCallback_(a.customData);
          f && (this.video_.autoplay = !0);
          this.player_.load(e, d).then(function () {
            b.player_ && b.sendMediaInfoMessage_()
          })["catch"](function (a) {
            goog.asserts.assert(a instanceof shaka.util.Error, "Wrong error type!");
            var d = "LOAD_FAILED";
            a.category == shaka.util.Error.Category.PLAYER && a.code == shaka.util.Error.Code.LOAD_INTERRUPTED && (d = "LOAD_CANCELLED");
            b.sendMessage_({
              requestId: Number(c.requestId),
              type: d
            }, b.genericBus_)
          });
          break;
        default:
          shaka.log.warning("Unrecognized message type from the generic Chromecast controller!", c.type), this.sendMessage_({
            requestId: Number(c.requestId),
            type: "INVALID_REQUEST",
            reason: "INVALID_COMMAND"
          }, this.genericBus_)
      }
    };
    shaka.cast.CastReceiver.prototype.sendAsyncComplete_ = function (a, b, c) {
      this.player_ && this.sendMessage_({type: "asyncComplete", id: b, error: c}, this.shakaBus_, a)
    };
    shaka.cast.CastReceiver.prototype.sendMessage_ = function (a, b, c) {
      this.isConnected_ && (a = shaka.cast.CastUtils.serialize(a), c ? b.getCastChannel(c).send(a) : b.broadcast(a))
    };
    shaka.cast.CastReceiver.prototype.getPlayState_ = function () {
      var a = shaka.cast.CastReceiver.PLAY_STATE;
      return this.isIdle_ ? a.IDLE : this.player_.isBuffering() ? a.BUFFERING : this.video_.paused ? a.PAUSED : a.PLAYING
    };
    shaka.cast.CastReceiver.prototype.sendMediaStatus_ = function (a, b) {
      a = void 0 === a ? 0 : a;
      b = void 0 === b ? null : b;
      var c = {
        mediaSessionId: 0,
        playbackRate: this.video_.playbackRate,
        playerState: this.getPlayState_(),
        currentTime: this.video_.currentTime,
        supportedMediaCommands: 63,
        volume: {level: this.video_.volume, muted: this.video_.muted}
      };
      b && (c.media = b);
      this.sendMessage_({requestId: a, type: "MEDIA_STATUS", status: [c]}, this.genericBus_)
    };
    goog.exportSymbol("shaka.cast.CastReceiver", shaka.cast.CastReceiver);
    goog.exportProperty(shaka.cast.CastReceiver.prototype, "destroy", shaka.cast.CastReceiver.prototype.destroy);
    goog.exportProperty(shaka.cast.CastReceiver.prototype, "setContentArtist", shaka.cast.CastReceiver.prototype.setContentArtist);
    goog.exportProperty(shaka.cast.CastReceiver.prototype, "setContentImage", shaka.cast.CastReceiver.prototype.setContentImage);
    goog.exportProperty(shaka.cast.CastReceiver.prototype, "setContentTitle", shaka.cast.CastReceiver.prototype.setContentTitle);
    goog.exportProperty(shaka.cast.CastReceiver.prototype, "clearContentMetadata", shaka.cast.CastReceiver.prototype.clearContentMetadata);
    goog.exportProperty(shaka.cast.CastReceiver.prototype, "setContentMetadata", shaka.cast.CastReceiver.prototype.setContentMetadata);
    goog.exportProperty(shaka.cast.CastReceiver.prototype, "isIdle", shaka.cast.CastReceiver.prototype.isIdle);
    goog.exportProperty(shaka.cast.CastReceiver.prototype, "isConnected", shaka.cast.CastReceiver.prototype.isConnected);
    shaka.cast.CastReceiver.POLL_INTERVAL = .5;
    shaka.cast.CastReceiver.IDLE_INTERVAL = 5;
    shaka.cast.CastReceiver.PLAY_STATE = {IDLE: "IDLE", PLAYING: "PLAYING", BUFFERING: "BUFFERING", PAUSED: "PAUSED"};
    shaka.util.Pssh = function (a) {
      var b = this;
      this.systemIds = [];
      this.cencKeyIds = [];
      this.data = [];
      (new shaka.util.Mp4Parser).box("moov", shaka.util.Mp4Parser.children).fullBox("pssh", function (a) {
        return b.parsePsshBox_(a)
      }).parse(a);
      0 == this.data.length && shaka.log.warning("No pssh box found!")
    };
    shaka.util.Pssh.prototype.parsePsshBox_ = function (a) {
      goog.asserts.assert(null != a.version, "PSSH boxes are full boxes and must have a valid version");
      goog.asserts.assert(null != a.flags, "PSSH boxes are full boxes and must have a valid flag");
      if (1 < a.version) shaka.log.warning("Unrecognized PSSH version found!"); else {
        var b = a.reader.getDataView();
        goog.asserts.assert(12 <= b.byteOffset, "DataView at incorrect position");
        b = shaka.util.BufferUtils.toUint8(b, -12, a.size);
        this.data.push(b);
        this.systemIds.push(shaka.util.Uint8ArrayUtils.toHex(a.reader.readBytes(16)));
        if (0 < a.version) {
          b = a.reader.readUint32();
          b = $jscomp.makeIterator(shaka.util.Iterables.range(b));
          for (var c = b.next(); !c.done; c = b.next()) shaka.util.Functional.ignored(c.value), c = shaka.util.Uint8ArrayUtils.toHex(a.reader.readBytes(16)), this.cencKeyIds.push(c)
        }
      }
    };
    shaka.util.Pssh.createPssh = function (a, b) {
      goog.asserts.assert(16 == b.byteLength, "Invalid system ID length");
      var c = a.length, d = 12 + b.length + 4 + c, e = new Uint8Array(d), f = shaka.util.BufferUtils.toDataView(e),
        g = 0;
      f.setUint32(g, d);
      g += 4;
      f.setUint32(g, 1886614376);
      g += 4;
      f.setUint32(g, 0);
      g += 4;
      e.set(b, g);
      g += b.length;
      f.setUint32(g, c);
      g += 4;
      e.set(a, g);
      goog.asserts.assert(g + c === d, "PSSH invalid length.");
      return e
    };
    shaka.util.Pssh.normaliseInitData = function (a) {
      if (!a) return a;
      var b = new shaka.util.Pssh(a);
      if (1 >= b.data.length) return a;
      a = [];
      var c = {};
      b = $jscomp.makeIterator(b.data);
      for (var d = b.next(); !d.done; c = {$jscomp$loop$prop$initData$415$488: c.$jscomp$loop$prop$initData$415$488}, d = b.next()) c.$jscomp$loop$prop$initData$415$488 = d.value, a.some(function (a) {
        return function (b) {
          return shaka.util.BufferUtils.equal(b, a.$jscomp$loop$prop$initData$415$488)
        }
      }(c)) || a.push(c.$jscomp$loop$prop$initData$415$488);
      return shaka.util.Uint8ArrayUtils.concat.apply(shaka.util.Uint8ArrayUtils,
        $jscomp.arrayFromIterable(a))
    };
    shaka.util.XmlUtils = function () {
    };
    shaka.util.XmlUtils.findChild = function (a, b) {
      var c = shaka.util.XmlUtils.findChildren(a, b);
      return 1 != c.length ? null : c[0]
    };
    shaka.util.XmlUtils.findChildNS = function (a, b, c) {
      a = shaka.util.XmlUtils.findChildrenNS(a, b, c);
      return 1 != a.length ? null : a[0]
    };
    shaka.util.XmlUtils.findChildren = function (a, b) {
      return Array.from(a.childNodes).filter(function (a) {
        return a instanceof Element && a.tagName == b
      })
    };
    shaka.util.XmlUtils.findChildrenNS = function (a, b, c) {
      return Array.from(a.childNodes).filter(function (a) {
        return a instanceof Element && a.localName == c && a.namespaceURI == b
      })
    };
    shaka.util.XmlUtils.getAttributeNS = function (a, b, c) {
      return a.hasAttributeNS(b, c) ? a.getAttributeNS(b, c) : null
    };
    shaka.util.XmlUtils.getContents = function (a) {
      return Array.from(a.childNodes).every(function (a) {
        return a.nodeType == Node.TEXT_NODE || a.nodeType == Node.CDATA_SECTION_NODE
      }) ? a.textContent.trim() : null
    };
    shaka.util.XmlUtils.parseAttr = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      var e = null;
      a = a.getAttribute(b);
      null != a && (e = c(a));
      return null == e ? d : e
    };
    shaka.util.XmlUtils.parseDate = function (a) {
      if (!a) return null;
      /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a) && (a += "Z");
      a = Date.parse(a);
      return isNaN(a) ? null : Math.floor(a / 1E3)
    };
    shaka.util.XmlUtils.parseDuration = function (a) {
      if (!a) return null;
      var b = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);
      if (!b) return shaka.log.warning("Invalid duration string:", a), null;
      a = 31536E3 * Number(b[1] || null) + 2592E3 * Number(b[2] || null) + 86400 * Number(b[3] || null) + 3600 * Number(b[4] || null) + 60 * Number(b[5] || null) + Number(b[6] || null);
      return isFinite(a) ? a : null
    };
    shaka.util.XmlUtils.parseRange = function (a) {
      var b = /([0-9]+)-([0-9]+)/.exec(a);
      if (!b) return null;
      a = Number(b[1]);
      if (!isFinite(a)) return null;
      b = Number(b[2]);
      return isFinite(b) ? {start: a, end: b} : null
    };
    shaka.util.XmlUtils.parseInt = function (a) {
      a = Number(a);
      return 0 === a % 1 ? a : null
    };
    shaka.util.XmlUtils.parsePositiveInt = function (a) {
      a = Number(a);
      return 0 === a % 1 && 0 < a ? a : null
    };
    shaka.util.XmlUtils.parseNonNegativeInt = function (a) {
      a = Number(a);
      return 0 === a % 1 && 0 <= a ? a : null
    };
    shaka.util.XmlUtils.parseFloat = function (a) {
      a = Number(a);
      return isNaN(a) ? null : a
    };
    shaka.util.XmlUtils.evalDivision = function (a) {
      var b;
      a = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1]) / Number(b[2]) : Number(a);
      return isNaN(a) ? null : a
    };
    shaka.util.XmlUtils.parseXmlString = function (a, b) {
      var c = new DOMParser, d = null, e = null;
      try {
        e = c.parseFromString(a, "text/xml")
      } catch (f) {
      }
      e && e.documentElement.tagName == b && (d = e.documentElement);
      return d && 0 < d.getElementsByTagName("parsererror").length ? null : d
    };
    shaka.util.XmlUtils.parseXml = function (a, b) {
      try {
        var c = shaka.util.StringUtils.fromUTF8(a);
        return shaka.util.XmlUtils.parseXmlString(c, b)
      } catch (d) {
        return null
      }
    };
    shaka.dash = {};
    shaka.dash.ContentProtection = function () {
    };
    shaka.dash.ContentProtection.parseFromAdaptationSet = function (a, b) {
      var c = shaka.dash.ContentProtection, d = shaka.util.ManifestParserUtils, e = c.parseElements_(a), f = null,
        g = [], h = [], k = new Set(e.map(function (a) {
          return a.keyId
        }));
      k["delete"](null);
      if (1 < k.size) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_CONFLICTING_KEY_IDS);
      b || (h = e.filter(function (a) {
        return a.schemeUri == c.MP4Protection_ ? (goog.asserts.assert(!a.init || a.init.length,
          "Init data must be null or non-empty."), f = a.init || f, !1) : !0
      }), h.length && (g = c.convertElements_(f, h), 0 == g.length && (g = [d.createDrmInfo("", f)])));
      if (e.length && (b || !h.length)) for (g = [], e = $jscomp.makeIterator(c.defaultKeySystems_.values()), h = e.next(); !h.done; h = e.next()) h = h.value, "org.w3.clearkey" != h && (h = d.createDrmInfo(h, f), g.push(h));
      if (d = Array.from(k)[0] || null) for (k = $jscomp.makeIterator(g), e = k.next(); !e.done; e = k.next()) for (e = $jscomp.makeIterator(e.value.initData), h = e.next(); !h.done; h = e.next()) h.value.keyId =
        d;
      return {defaultKeyId: d, defaultInit: f, drmInfos: g, firstRepresentation: !0}
    };
    shaka.dash.ContentProtection.parseFromRepresentation = function (a, b, c) {
      var d = shaka.dash.ContentProtection.parseFromAdaptationSet(a, c);
      if (b.firstRepresentation) {
        a = 1 == b.drmInfos.length && !b.drmInfos[0].keySystem;
        c = 0 == d.drmInfos.length;
        if (0 == b.drmInfos.length || a && !c) b.drmInfos = d.drmInfos;
        b.firstRepresentation = !1
      } else if (0 < d.drmInfos.length && (b.drmInfos = b.drmInfos.filter(function (a) {
        return d.drmInfos.some(function (b) {
          return b.keySystem == a.keySystem
        })
      }), 0 == b.drmInfos.length)) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
        shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_NO_COMMON_KEY_SYSTEM);
      return d.defaultKeyId || b.defaultKeyId
    };
    shaka.dash.ContentProtection.getWidevineLicenseUrl = function (a) {
      return (a = shaka.util.XmlUtils.findChildNS(a.node, "urn:microsoft", "laurl")) ? a.getAttribute("licenseUrl") || "" : ""
    };
    shaka.dash.ContentProtection.parseMsProRecords_ = function (a, b) {
      for (var c = []; b < a.byteLength - 1;) {
        var d = a.getUint16(b, !0);
        b += 2;
        var e = a.getUint16(b, !0);
        b += 2;
        if (0 != (e & 1) || e + b > a.byteLength) return shaka.log.warning("Malformed MS PRO object"), [];
        var f = shaka.util.BufferUtils.toUint8(a, b, e);
        c.push({type: d, value: f});
        b += e
      }
      return c
    };
    shaka.dash.ContentProtection.parseMsPro_ = function (a) {
      var b = 0, c = shaka.util.BufferUtils.toDataView(a), d = c.getUint32(b, !0);
      b += 4;
      return d != a.byteLength ? (shaka.log.warning("PlayReady Object with invalid length encountered."), []) : shaka.dash.ContentProtection.parseMsProRecords_(c, b + 2)
    };
    shaka.dash.ContentProtection.getLaurl_ = function (a) {
      a = $jscomp.makeIterator(a.getElementsByTagName("DATA"));
      for (var b = a.next(); !b.done; b = a.next()) {
        b = $jscomp.makeIterator(b.value.childNodes);
        for (var c = b.next(); !c.done; c = b.next()) if (c = c.value, c instanceof Element && "LA_URL" == c.tagName) return c.textContent
      }
      return ""
    };
    shaka.dash.ContentProtection.getPlayReadyLicenseUrl = function (a) {
      var b = shaka.util.XmlUtils.findChildNS(a.node, "urn:microsoft:playready", "pro");
      if (!b) return "";
      a = shaka.dash.ContentProtection;
      var c = a.PLAYREADY_RECORD_TYPES;
      b = shaka.util.Uint8ArrayUtils.fromBase64(b.textContent);
      b = a.parseMsPro_(b).filter(function (a) {
        return a.type === c.RIGHTS_MANAGEMENT
      })[0];
      if (!b) return "";
      b = shaka.util.StringUtils.fromUTF16(b.value, !0);
      return (b = shaka.util.XmlUtils.parseXmlString(b, "WRMHEADER")) ? a.getLaurl_(b) : ""
    };
    shaka.dash.ContentProtection.getInitDataFromPro_ = function (a) {
      var b = shaka.util.XmlUtils.findChildNS(a.node, "urn:microsoft:playready", "pro");
      if (!b) return null;
      b = shaka.util.Uint8ArrayUtils.fromBase64(b.textContent);
      var c = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
      return [{initData: shaka.util.Pssh.createPssh(b, c), initDataType: "cenc", keyId: a.keyId}]
    };
    shaka.dash.ContentProtection.convertElements_ = function (a, b) {
      for (var c = shaka.dash.ContentProtection, d = shaka.util.ManifestParserUtils, e = c.defaultKeySystems_, f = c.licenseUrlParsers_, g = [], h = $jscomp.makeIterator(b), k = h.next(); !k.done; k = h.next()) {
        k = k.value;
        var l = e.get(k.schemeUri);
        if (l) {
          goog.asserts.assert(!k.init || k.init.length, "Init data must be null or non-empty.");
          var m = c.getInitDataFromPro_(k);
          m = d.createDrmInfo(l, k.init || a || m);
          if (l = f.get(l)) m.licenseServerUri = l(k);
          g.push(m)
        }
      }
      return g
    };
    shaka.dash.ContentProtection.parseElements_ = function (a) {
      var b = [];
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) (c = shaka.dash.ContentProtection.parseElement_(c.value)) && b.push(c);
      return b
    };
    shaka.dash.ContentProtection.parseElement_ = function (a) {
      var b = shaka.dash.ContentProtection.CencNamespaceUri_, c = a.getAttribute("schemeIdUri"),
        d = shaka.util.XmlUtils.getAttributeNS(a, b, "default_KID");
      b = shaka.util.XmlUtils.findChildrenNS(a, b, "pssh").map(shaka.util.XmlUtils.getContents);
      if (!c) return shaka.log.error("Missing required schemeIdUri attribute on", "ContentProtection element", a), null;
      c = c.toLowerCase();
      if (d && (d = d.replace(/-/g, "").toLowerCase(), d.includes(" "))) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
        shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED);
      var e = [];
      try {
        e = b.map(function (a) {
          return {initDataType: "cenc", initData: shaka.util.Uint8ArrayUtils.fromBase64(a), keyId: null}
        })
      } catch (f) {
        throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_PSSH_BAD_ENCODING);
      }
      return {node: a, schemeUri: c, keyId: d, init: 0 < e.length ? e : null}
    };
    shaka.dash.ContentProtection.PLAYREADY_RECORD_TYPES = {RIGHTS_MANAGEMENT: 1, RESERVED: 2, EMBEDDED_LICENSE: 3};
    shaka.dash.ContentProtection.defaultKeySystems_ = (new Map).set("urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b", "org.w3.clearkey").set("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine.alpha").set("urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95", "com.microsoft.playready").set("urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95", "com.microsoft.playready").set("urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb", "com.adobe.primetime");
    shaka.dash.ContentProtection.licenseUrlParsers_ = (new Map).set("com.widevine.alpha", shaka.dash.ContentProtection.getWidevineLicenseUrl).set("com.microsoft.playready", shaka.dash.ContentProtection.getPlayReadyLicenseUrl);
    shaka.dash.ContentProtection.MP4Protection_ = "urn:mpeg:dash:mp4protection:2011";
    shaka.dash.ContentProtection.CencNamespaceUri_ = "urn:mpeg:cenc:2013";
    shaka.dash.MpdUtils = function () {
    };
    shaka.dash.MpdUtils.fillUriTemplate = function (a, b, c, d, e) {
      var f = {RepresentationID: b, Number: c, Bandwidth: d, Time: e};
      return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g, function (b, c, d, e) {
        if ("$$" == b) return "$";
        var g = f[c];
        goog.asserts.assert(void 0 !== g, "Unrecognized identifier");
        if (null == g) return shaka.log.warning("URL template does not have an available substitution for ", 'identifier "' + c + '":', a), b;
        "RepresentationID" == c && d && (shaka.log.warning("URL template should not contain a width specifier for identifier", '"RepresentationID":',
          a), d = void 0);
        "Time" == c && (goog.asserts.assert("number" == typeof g, "Time value should be a number!"), goog.asserts.assert(.2 > Math.abs(g - Math.round(g)), "Calculated $Time$ values must be close to integers"), g = Math.round(g));
        switch (e) {
          case void 0:
          case "d":
          case "i":
          case "u":
            b = g.toString();
            break;
          case "o":
            b = g.toString(8);
            break;
          case "x":
            b = g.toString(16);
            break;
          case "X":
            b = g.toString(16).toUpperCase();
            break;
          default:
            goog.asserts.assert(!1, "Unhandled format specifier"), b = g.toString()
        }
        d = window.parseInt(d, 10) || 1;
        return Array(Math.max(0,
          d - b.length) + 1).join("0") + b
      })
    };
    shaka.dash.MpdUtils.createTimeline = function (a, b, c, d) {
      goog.asserts.assert(0 < b && Infinity > b, "timescale must be a positive, finite integer");
      goog.asserts.assert(0 < d, "period duration must be a positive integer");
      var e = shaka.util.XmlUtils, f = e.findChildren(a, "S");
      a = [];
      var g = -c;
      f = $jscomp.makeIterator(shaka.util.Iterables.enumerate(f));
      for (var h = f.next(); !h.done; h = f.next()) {
        h = h.value;
        var k = h.item, l = h.next, m = e.parseAttr(k, "t", e.parseNonNegativeInt);
        h = e.parseAttr(k, "d", e.parseNonNegativeInt);
        var n = e.parseAttr(k,
          "r", e.parseInt);
        null != m && (m -= c);
        if (!h) {
          shaka.log.warning('"S" element must have a duration:', 'ignoring the remaining "S" elements.', k);
          break
        }
        m = null != m ? m : g;
        n = n || 0;
        if (0 > n) if (l) {
          l = e.parseAttr(l, "t", e.parseNonNegativeInt);
          if (null == l) {
            shaka.log.warning('An "S" element cannot have a negative repeat', 'if the next "S" element does not have a valid start time:', 'ignoring the remaining "S" elements.', k);
            break
          } else if (m >= l) {
            shaka.log.warning('An "S" element cannot have a negative repeatif its start ', 'time exceeds the next "S" element\'s start time:',
              'ignoring the remaining "S" elements.', k);
            break
          }
          n = Math.ceil((l - m) / h) - 1
        } else {
          if (Infinity == d) {
            shaka.log.warning('The last "S" element cannot have a negative repeat', "if the Period has an infinite duration:", 'ignoring the last "S" element.', k);
            break
          } else if (m / b >= d) {
            shaka.log.warning('The last "S" element cannot have a negative repeat', "if its start time exceeds the Period's duration:", 'igoring the last "S" element.', k);
            break
          }
          n = Math.ceil((d * b - m) / h) - 1
        }
        0 < a.length && m != g && (Math.abs((m - g) / b) >= shaka.util.ManifestParserUtils.GAP_OVERLAP_TOLERANCE_SECONDS &&
        shaka.log.warning("SegmentTimeline contains a large gap/overlap:", "the content may have errors in it.", k), a[a.length - 1].end = m / b);
        k = $jscomp.makeIterator(shaka.util.Iterables.range(n + 1));
        for (l = k.next(); !l.done; l = k.next()) shaka.util.Functional.ignored(l.value), g = m + h, a.push({
          start: m / b,
          end: g / b,
          unscaledStart: m
        }), m = g
      }
      return a
    };
    shaka.dash.MpdUtils.parseSegmentInfo = function (a, b) {
      goog.asserts.assert(b(a.representation), "There must be at least one element of the given type.");
      var c = shaka.dash.MpdUtils, d = shaka.util.XmlUtils, e = c.inheritAttribute(a, b, "timescale"), f = 1;
      e && (f = d.parsePositiveInt(e) || 1);
      e = c.inheritAttribute(a, b, "duration");
      (e = d.parsePositiveInt(e || "")) && (e /= f);
      var g = c.inheritAttribute(a, b, "startNumber"),
        h = Number(c.inheritAttribute(a, b, "presentationTimeOffset")) || 0;
      d = d.parseNonNegativeInt(g || "");
      if (null == g || null == d) d =
        1;
      g = c.inheritChild(a, b, "SegmentTimeline");
      var k = null;
      g && (k = c.createTimeline(g, f, h, a.periodInfo.duration || Infinity));
      return {
        timescale: f,
        segmentDuration: e,
        startNumber: d,
        scaledPresentationTimeOffset: h / f || 0,
        unscaledPresentationTimeOffset: h,
        timeline: k
      }
    };
    shaka.dash.MpdUtils.inheritAttribute = function (a, b, c) {
      var d = shaka.util.Functional;
      goog.asserts.assert(b(a.representation), "There must be at least one element of the given type");
      return [b(a.representation), b(a.adaptationSet), b(a.period)].filter(d.isNotNull).map(function (a) {
        return a.getAttribute(c)
      }).reduce(function (a, b) {
        return a || b
      })
    };
    shaka.dash.MpdUtils.inheritChild = function (a, b, c) {
      var d = shaka.util.Functional;
      goog.asserts.assert(b(a.representation), "There must be at least one element of the given type");
      a = [b(a.representation), b(a.adaptationSet), b(a.period)].filter(d.isNotNull);
      var e = shaka.util.XmlUtils;
      return a.map(function (a) {
        return e.findChild(a, c)
      }).reduce(function (a, b) {
        return a || b
      })
    };
    shaka.dash.MpdUtils.handleXlinkInElement_ = function (a, b, c, d, e, f) {
      var g = shaka.util.XmlUtils, h = shaka.util.Error, k = shaka.util.ManifestParserUtils,
        l = shaka.dash.MpdUtils.XlinkNamespaceUri_, m = g.getAttributeNS(a, l, "href");
      g = g.getAttributeNS(a, l, "actuate") || "onRequest";
      for (var n = $jscomp.makeIterator(Array.from(a.attributes)), p = n.next(); !p.done; p = n.next()) p = p.value, p.namespaceURI == l && a.removeAttributeNS(p.namespaceURI, p.localName);
      if (5 <= f) return shaka.util.AbortableOperation.failed(new h(h.Severity.CRITICAL,
        h.Category.MANIFEST, h.Code.DASH_XLINK_DEPTH_LIMIT));
      if ("onLoad" != g) return shaka.util.AbortableOperation.failed(new h(h.Severity.CRITICAL, h.Category.MANIFEST, h.Code.DASH_UNSUPPORTED_XLINK_ACTUATE));
      var q = k.resolveUris([d], [m]);
      d = shaka.net.NetworkingEngine.RequestType.MANIFEST;
      k = shaka.net.NetworkingEngine.makeRequest(q, b);
      d = e.request(d, k);
      goog.asserts.assert(d instanceof shaka.util.AbortableOperation, "Unexpected implementation of IAbortableOperation!");
      return d.chain(function (d) {
        d = shaka.util.XmlUtils.parseXml(d.data,
          a.tagName);
        if (!d) return shaka.util.AbortableOperation.failed(new h(h.Severity.CRITICAL, h.Category.MANIFEST, h.Code.DASH_INVALID_XML, m));
        for (; a.childNodes.length;) a.removeChild(a.childNodes[0]);
        for (; d.childNodes.length;) {
          var g = d.childNodes[0];
          d.removeChild(g);
          a.appendChild(g)
        }
        d = $jscomp.makeIterator(Array.from(d.attributes));
        for (g = d.next(); !g.done; g = d.next()) a.setAttributeNode(g.value.cloneNode(!1));
        return shaka.dash.MpdUtils.processXlinks(a, b, c, q[0], e, f + 1)
      })
    };
    shaka.dash.MpdUtils.processXlinks = function (a, b, c, d, e, f) {
      f = void 0 === f ? 0 : f;
      var g = shaka.dash.MpdUtils, h = shaka.util.XmlUtils, k = g.XlinkNamespaceUri_;
      if (h.getAttributeNS(a, k, "href")) return h = g.handleXlinkInElement_(a, b, c, d, e, f), c && (h = h.chain(void 0, function (h) {
        return g.processXlinks(a, b, c, d, e, f)
      })), h;
      for (var l = [], m = $jscomp.makeIterator(Array.from(a.childNodes)), n = m.next(); !n.done; n = m.next()) n = n.value, n instanceof Element && ("urn:mpeg:dash:resolve-to-zero:2013" == h.getAttributeNS(n, k, "href") ? a.removeChild(n) :
        "SegmentTimeline" != n.tagName && l.push(shaka.dash.MpdUtils.processXlinks(n, b, c, d, e, f)));
      return shaka.util.AbortableOperation.all(l).chain(function () {
        return a
      })
    };
    shaka.dash.MpdUtils.XlinkNamespaceUri_ = "http://www.w3.org/1999/xlink";
    shaka.media.Mp4SegmentIndexParser = function () {
    };
    shaka.media.Mp4SegmentIndexParser.parse = function (a, b, c, d, e, f, g) {
      var h = shaka.media.Mp4SegmentIndexParser, k, l = (new shaka.util.Mp4Parser).fullBox("sidx", function (a) {
        k = h.parseSIDX_(b, d, e, f, g, c, a)
      });
      a && l.parse(a);
      if (k) return k;
      shaka.log.error('Invalid box type, expected "sidx".');
      throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.MP4_SIDX_WRONG_BOX_TYPE);
    };
    shaka.media.Mp4SegmentIndexParser.parseSIDX_ = function (a, b, c, d, e, f, g) {
      goog.asserts.assert(null != g.version, "SIDX is a full box and should have a valid version.");
      var h = [];
      g.reader.skip(4);
      var k = g.reader.readUint32();
      if (0 == k) throw shaka.log.error("Invalid timescale."), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.MP4_SIDX_INVALID_TIMESCALE);
      if (0 == g.version) {
        var l = g.reader.readUint32();
        var m = g.reader.readUint32()
      } else l = g.reader.readUint64(),
        m = g.reader.readUint64();
      g.reader.skip(2);
      var n = g.reader.readUint16();
      a = a + g.size + m;
      n = $jscomp.makeIterator(shaka.util.Iterables.range(n));
      for (m = n.next(); !m.done; m = n.next()) {
        shaka.util.Functional.ignored(m.value);
        var p = g.reader.readUint32();
        m = (p & 2147483648) >>> 31;
        p &= 2147483647;
        var q = g.reader.readUint32();
        g.reader.skip(4);
        if (1 == m) throw shaka.log.error("Heirarchical SIDXs are not supported."), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.MP4_SIDX_TYPE_NOT_SUPPORTED);
        h.push(new shaka.media.SegmentReference(l / k + c, (l + q) / k + c, function () {
          return f
        }, a, a + p - 1, b, c, d, e));
        l += q;
        a += p
      }
      g.parser.stop();
      return h
    };
    shaka.util.EbmlParser = function (a) {
      this.dataView_ = shaka.util.BufferUtils.toDataView(a);
      this.reader_ = new shaka.util.DataViewReader(this.dataView_, shaka.util.DataViewReader.Endianness.BIG_ENDIAN)
    };
    shaka.util.EbmlParser.prototype.hasMoreData = function () {
      return this.reader_.hasMoreData()
    };
    shaka.util.EbmlParser.prototype.parseElement = function () {
      var a = this.parseId_(), b = this.parseVint_();
      b = shaka.util.EbmlParser.isDynamicSizeValue_(b) ? this.dataView_.byteLength - this.reader_.getPosition() : shaka.util.EbmlParser.getVintValue_(b);
      b = this.reader_.getPosition() + b <= this.dataView_.byteLength ? b : this.dataView_.byteLength - this.reader_.getPosition();
      var c = shaka.util.BufferUtils.toDataView(this.dataView_, this.reader_.getPosition(), b);
      this.reader_.skip(b);
      return new shaka.util.EbmlElement(a, c)
    };
    shaka.util.EbmlParser.prototype.parseId_ = function () {
      var a = this.parseVint_();
      if (7 < a.length) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.EBML_OVERFLOW);
      var b = 0;
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) b = 256 * b + c.value;
      return b
    };
    shaka.util.EbmlParser.prototype.parseVint_ = function () {
      var a = this.reader_.getPosition(), b = this.reader_.readUint8();
      if (0 == b) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.EBML_OVERFLOW);
      b = 8 - Math.floor(Math.log2(b));
      goog.asserts.assert(8 >= b && 1 <= b, "Incorrect log2 value");
      this.reader_.skip(b - 1);
      return shaka.util.BufferUtils.toUint8(this.dataView_, a, b)
    };
    shaka.util.EbmlParser.getVintValue_ = function (a) {
      if (8 == a.length && a[1] & 224) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.JS_INTEGER_OVERFLOW);
      for (var b = 0, c = $jscomp.makeIterator(shaka.util.Iterables.enumerate(a)), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        var e = d.item;
        b = 0 == d.i ? e & (1 << 8 - a.length) - 1 : 256 * b + e
      }
      return b
    };
    shaka.util.EbmlParser.isDynamicSizeValue_ = function (a) {
      for (var b = shaka.util.BufferUtils, c = $jscomp.makeIterator(shaka.util.EbmlParser.DYNAMIC_SIZES), d = c.next(); !d.done; d = c.next()) if (b.equal(a, new Uint8Array(d.value))) return !0;
      return !1
    };
    shaka.util.EbmlParser.DYNAMIC_SIZES = [[255], [127, 255], [63, 255, 255], [31, 255, 255, 255], [15, 255, 255, 255, 255], [7, 255, 255, 255, 255, 255], [3, 255, 255, 255, 255, 255, 255], [1, 255, 255, 255, 255, 255, 255, 255]];
    shaka.util.EbmlElement = function (a, b) {
      this.id = a;
      this.dataView_ = b
    };
    shaka.util.EbmlElement.prototype.getOffset = function () {
      return this.dataView_.byteOffset
    };
    shaka.util.EbmlElement.prototype.createParser = function () {
      return new shaka.util.EbmlParser(this.dataView_)
    };
    shaka.util.EbmlElement.prototype.getUint = function () {
      if (8 < this.dataView_.byteLength) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.EBML_OVERFLOW);
      if (8 == this.dataView_.byteLength && this.dataView_.getUint8(0) & 224) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.JS_INTEGER_OVERFLOW);
      for (var a = 0, b = $jscomp.makeIterator(shaka.util.Iterables.range(this.dataView_.byteLength)),
             c = b.next(); !c.done; c = b.next()) c = this.dataView_.getUint8(c.value), a = 256 * a + c;
      return a
    };
    shaka.util.EbmlElement.prototype.getFloat = function () {
      if (4 == this.dataView_.byteLength) return this.dataView_.getFloat32(0);
      if (8 == this.dataView_.byteLength) return this.dataView_.getFloat64(0);
      throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.EBML_BAD_FLOATING_POINT_SIZE);
    };
    shaka.media.WebmSegmentIndexParser = function () {
    };
    shaka.media.WebmSegmentIndexParser.parse = function (a, b, c, d, e, f, g) {
      b = shaka.media.WebmSegmentIndexParser.parseWebmContainer_(b);
      a = (new shaka.util.EbmlParser(a)).parseElement();
      if (a.id != shaka.media.WebmSegmentIndexParser.CUES_ID) throw shaka.log.error("Not a Cues element."), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.WEBM_CUES_ELEMENT_MISSING);
      return shaka.media.WebmSegmentIndexParser.parseCues_(a, b.segmentOffset, b.timecodeScale, b.duration,
        c, d, e, f, g)
    };
    shaka.media.WebmSegmentIndexParser.parseWebmContainer_ = function (a) {
      a = new shaka.util.EbmlParser(a);
      if (a.parseElement().id != shaka.media.WebmSegmentIndexParser.EBML_ID) throw shaka.log.error("Not an EBML element."), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.WEBM_EBML_HEADER_ELEMENT_MISSING);
      var b = a.parseElement();
      if (b.id != shaka.media.WebmSegmentIndexParser.SEGMENT_ID) throw shaka.log.error("Not a Segment element."), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA,
        shaka.util.Error.Code.WEBM_SEGMENT_ELEMENT_MISSING);
      a = b.getOffset();
      b = shaka.media.WebmSegmentIndexParser.parseSegment_(b);
      return {segmentOffset: a, timecodeScale: b.timecodeScale, duration: b.duration}
    };
    shaka.media.WebmSegmentIndexParser.parseSegment_ = function (a) {
      a = a.createParser();
      for (var b = null; a.hasMoreData();) {
        var c = a.parseElement();
        if (c.id == shaka.media.WebmSegmentIndexParser.INFO_ID) {
          b = c;
          break
        }
      }
      if (!b) throw shaka.log.error("Not an Info element."), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.WEBM_INFO_ELEMENT_MISSING);
      return shaka.media.WebmSegmentIndexParser.parseInfo_(b)
    };
    shaka.media.WebmSegmentIndexParser.parseInfo_ = function (a) {
      var b = a.createParser(), c = 1E6;
      for (a = null; b.hasMoreData();) {
        var d = b.parseElement();
        d.id == shaka.media.WebmSegmentIndexParser.TIMECODE_SCALE_ID ? c = d.getUint() : d.id == shaka.media.WebmSegmentIndexParser.DURATION_ID && (a = d.getFloat())
      }
      if (null == a) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.WEBM_DURATION_ELEMENT_MISSING);
      b = c / 1E9;
      return {timecodeScale: b, duration: a * b}
    };
    shaka.media.WebmSegmentIndexParser.parseCues_ = function (a, b, c, d, e, f, g, h, k) {
      var l = [], m = function () {
        return e
      };
      a = a.createParser();
      for (var n = null, p = null; a.hasMoreData();) {
        var q = a.parseElement();
        if (q.id == shaka.media.WebmSegmentIndexParser.CUE_POINT_ID) {
          var r = shaka.media.WebmSegmentIndexParser.parseCuePoint_(q);
          r && (q = c * r.unscaledTime, r = b + r.relativeOffset, null != n && (goog.asserts.assert(null != p, "last offset cannot be null"), l.push(new shaka.media.SegmentReference(n + g, q + g, m, p, r - 1, f, g, h, k))), n = q, p = r)
        }
      }
      null != n &&
      (goog.asserts.assert(null != p, "last offset cannot be null"), l.push(new shaka.media.SegmentReference(n + g, d + g, m, p, null, f, g, h, k)));
      return l
    };
    shaka.media.WebmSegmentIndexParser.parseCuePoint_ = function (a) {
      var b = a.createParser();
      a = b.parseElement();
      if (a.id != shaka.media.WebmSegmentIndexParser.CUE_TIME_ID) throw shaka.log.warning("Not a CueTime element."), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.WEBM_CUE_TIME_ELEMENT_MISSING);
      a = a.getUint();
      b = b.parseElement();
      if (b.id != shaka.media.WebmSegmentIndexParser.CUE_TRACK_POSITIONS_ID) throw shaka.log.warning("Not a CueTrackPositions element."),
        new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING);
      b = b.createParser();
      for (var c = 0; b.hasMoreData();) {
        var d = b.parseElement();
        if (d.id == shaka.media.WebmSegmentIndexParser.CUE_CLUSTER_POSITION) {
          c = d.getUint();
          break
        }
      }
      return {unscaledTime: a, relativeOffset: c}
    };
    shaka.media.WebmSegmentIndexParser.EBML_ID = 440786851;
    shaka.media.WebmSegmentIndexParser.SEGMENT_ID = 408125543;
    shaka.media.WebmSegmentIndexParser.INFO_ID = 357149030;
    shaka.media.WebmSegmentIndexParser.TIMECODE_SCALE_ID = 2807729;
    shaka.media.WebmSegmentIndexParser.DURATION_ID = 17545;
    shaka.media.WebmSegmentIndexParser.CUES_ID = 475249515;
    shaka.media.WebmSegmentIndexParser.CUE_POINT_ID = 187;
    shaka.media.WebmSegmentIndexParser.CUE_TIME_ID = 179;
    shaka.media.WebmSegmentIndexParser.CUE_TRACK_POSITIONS_ID = 183;
    shaka.media.WebmSegmentIndexParser.CUE_CLUSTER_POSITION = 241;
    shaka.dash.SegmentBase = function () {
    };
    shaka.dash.SegmentBase.createInitSegment = function (a, b) {
      var c = shaka.util.XmlUtils, d = shaka.util.ManifestParserUtils,
        e = shaka.dash.MpdUtils.inheritChild(a, b, "Initialization");
      if (!e) return null;
      var f = a.representation.baseUris, g = e.getAttribute("sourceURL");
      g && (f = d.resolveUris(a.representation.baseUris, [g]));
      d = 0;
      g = null;
      if (c = c.parseAttr(e, "range", c.parseRange)) d = c.start, g = c.end;
      return new shaka.media.InitSegmentReference(function () {
        return f
      }, d, g)
    };
    shaka.dash.SegmentBase.createStreamInfo = function (a, b) {
      goog.asserts.assert(a.representation.segmentBase, "Should only be called with SegmentBase");
      var c = shaka.dash.MpdUtils, d = shaka.dash.SegmentBase, e = shaka.util.XmlUtils,
        f = Number(c.inheritAttribute(a, d.fromInheritance_, "presentationTimeOffset")) || 0;
      c = c.inheritAttribute(a, d.fromInheritance_, "timescale");
      var g = 1;
      c && (g = e.parsePositiveInt(c) || 1);
      var h = f / g || 0, k = d.createInitSegment(a, d.fromInheritance_);
      d.checkSegmentIndexRangeSupport_(a, k);
      var l = shaka.util.ObjectUtils.shallowCloneObject(a);
      return {
        generateSegmentIndex: function () {
          return d.generateSegmentIndex_(l, b, k, h)
        }
      }
    };
    shaka.dash.SegmentBase.generateSegmentIndexFromUris = function (a, b, c, d, e, f, g) {
      var h, k, l, m, n, p, q, r, v, x, t, u, w, y, C;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (z) {
        if (1 == z.nextAddress) return h = a.presentationTimeline, k = !a.dynamic || !a.periodInfo.isLastPeriod, l = a.periodInfo.start, m = a.periodInfo.duration, n = a.representation.mimeType.split("/")[1], p = b, q = null, r = [p(d, e, f), "webm" == n ? p(c.getUris(), c.startByte, c.endByte) : null], p = null, z.yield(Promise.all(r), 2);
        v = z.yieldResult;
        x = v[0];
        t = v[1] || null;
        u = null;
        w = l - g;
        y = l;
        C = m ? l + m : Infinity;
        "mp4" == n ? u = shaka.media.Mp4SegmentIndexParser.parse(x, e, d, c, w, y, C) : (goog.asserts.assert(t, "WebM requires init data"), u = shaka.media.WebmSegmentIndexParser.parse(x, t, d, c, w, y, C));
        h.notifySegments(u);
        goog.asserts.assert(!q, "Should not call generateSegmentIndex twice");
        q = new shaka.media.SegmentIndex(u);
        k && q.fit(y, C);
        return z["return"](q)
      })
    };
    shaka.dash.SegmentBase.fromInheritance_ = function (a) {
      return a.segmentBase
    };
    shaka.dash.SegmentBase.computeIndexRange_ = function (a) {
      var b = shaka.dash.MpdUtils, c = shaka.dash.SegmentBase, d = shaka.util.XmlUtils,
        e = b.inheritChild(a, c.fromInheritance_, "RepresentationIndex");
      a = b.inheritAttribute(a, c.fromInheritance_, "indexRange");
      a = d.parseRange(a || "");
      e && (a = d.parseAttr(e, "range", d.parseRange, a));
      return a
    };
    shaka.dash.SegmentBase.computeIndexUris_ = function (a) {
      var b = shaka.util.ManifestParserUtils,
        c = shaka.dash.MpdUtils.inheritChild(a, shaka.dash.SegmentBase.fromInheritance_, "RepresentationIndex"),
        d = a.representation.baseUris;
      c && (c = c.getAttribute("sourceURL")) && (d = b.resolveUris(a.representation.baseUris, [c]));
      return d
    };
    shaka.dash.SegmentBase.checkSegmentIndexRangeSupport_ = function (a, b) {
      var c = shaka.dash.SegmentBase;
      c.checkSegmentIndexSupport(a, b);
      if (!c.computeIndexRange_(a)) throw shaka.log.error("SegmentBase does not contain sufficient segment information:", "the SegmentBase does not contain @indexRange", "or a RepresentationIndex element.", a.representation), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_NO_SEGMENT_INFO);
    };
    shaka.dash.SegmentBase.checkSegmentIndexSupport = function (a, b) {
      var c = shaka.util.ManifestParserUtils.ContentType, d = a.representation.contentType,
        e = a.representation.mimeType.split("/")[1];
      if (d != c.TEXT && "mp4" != e && "webm" != e) throw shaka.log.error("SegmentBase specifies an unsupported container type.", a.representation), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_UNSUPPORTED_CONTAINER);
      if ("webm" == e && !b) throw shaka.log.error("SegmentBase does not contain sufficient segment information:",
        "the SegmentBase uses a WebM container,", "but does not contain an Initialization element.", a.representation), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_WEBM_MISSING_INIT);
    };
    shaka.dash.SegmentBase.generateSegmentIndex_ = function (a, b, c, d) {
      var e = shaka.dash.SegmentBase, f = e.computeIndexUris_(a);
      e = e.computeIndexRange_(a);
      goog.asserts.assert(e, "Index range should not be null!");
      return shaka.dash.SegmentBase.generateSegmentIndexFromUris(a, b, c, f, e.start, e.end, d)
    };
    shaka.dash.SegmentList = function () {
    };
    shaka.dash.SegmentList.createStreamInfo = function (a, b) {
      goog.asserts.assert(a.representation.segmentList, "Should only be called with SegmentList");
      var c = shaka.dash.SegmentList, d = shaka.dash.SegmentBase.createInitSegment(a, c.fromInheritance_),
        e = c.parseSegmentListInfo_(a);
      c.checkSegmentListInfo_(a, e);
      var f = null, g = null;
      a.period.id && a.representation.id && (g = a.period.id + "," + a.representation.id, f = b[g]);
      c = c.createSegmentReferences_(a.periodInfo.start, a.periodInfo.duration, e.startNumber, a.representation.baseUris,
        e, d);
      f ? (f.merge(c), g = a.presentationTimeline.getSegmentAvailabilityStart(), f.evict(g)) : (a.presentationTimeline.notifySegments(c), f = new shaka.media.SegmentIndex(c), g && a.dynamic && (b[g] = f));
      a.dynamic && a.periodInfo.isLastPeriod || f.fit(a.periodInfo.start, a.periodInfo.duration ? a.periodInfo.start + a.periodInfo.duration : Infinity);
      return {
        generateSegmentIndex: function () {
          return Promise.resolve(f)
        }
      }
    };
    shaka.dash.SegmentList.fromInheritance_ = function (a) {
      return a.segmentList
    };
    shaka.dash.SegmentList.parseSegmentListInfo_ = function (a) {
      var b = shaka.dash.SegmentList, c = shaka.dash.MpdUtils, d = b.parseMediaSegments_(a);
      a = c.parseSegmentInfo(a, b.fromInheritance_);
      b = a.startNumber;
      0 == b && (shaka.log.warning("SegmentList@startNumber must be > 0"), b = 1);
      c = 0;
      a.segmentDuration ? c = a.segmentDuration * (b - 1) : a.timeline && 0 < a.timeline.length && (c = a.timeline[0].start);
      return {
        segmentDuration: a.segmentDuration,
        startTime: c,
        startNumber: b,
        scaledPresentationTimeOffset: a.scaledPresentationTimeOffset,
        timeline: a.timeline,
        mediaSegments: d
      }
    };
    shaka.dash.SegmentList.checkSegmentListInfo_ = function (a, b) {
      if (!b.segmentDuration && !b.timeline && 1 < b.mediaSegments.length) throw shaka.log.warning("SegmentList does not contain sufficient segment information:", "the SegmentList specifies multiple segments,", "but does not specify a segment duration or timeline.", a.representation), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_NO_SEGMENT_INFO);
      if (!b.segmentDuration && !a.periodInfo.duration &&
        !b.timeline && 1 == b.mediaSegments.length) throw shaka.log.warning("SegmentList does not contain sufficient segment information:", "the SegmentList specifies one segment,", "but does not specify a segment duration, period duration,", "or timeline.", a.representation), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_NO_SEGMENT_INFO);
      if (b.timeline && 0 == b.timeline.length) throw shaka.log.warning("SegmentList does not contain sufficient segment information:",
        "the SegmentList has an empty timeline.", a.representation), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_NO_SEGMENT_INFO);
    };
    shaka.dash.SegmentList.createSegmentReferences_ = function (a, b, c, d, e, f) {
      c = shaka.util.ManifestParserUtils;
      var g = e.mediaSegments.length;
      e.timeline && e.timeline.length != e.mediaSegments.length && (g = Math.min(e.timeline.length, e.mediaSegments.length), shaka.log.warning("The number of items in the segment timeline and the number of ", "segment URLs do not match, truncating", e.mediaSegments.length, "to", g));
      var h = a - e.scaledPresentationTimeOffset, k = b ? a + b : Infinity, l = [], m = e.startTime, n = {};
      g = $jscomp.makeIterator(shaka.util.Iterables.range(g));
      for (var p = g.next(); !p.done; n = {$jscomp$loop$prop$mediaUri$490: n.$jscomp$loop$prop$mediaUri$490}, p = g.next()) {
        var q = p.value;
        p = e.mediaSegments[q];
        n.$jscomp$loop$prop$mediaUri$490 = c.resolveUris(d, [p.mediaUri]);
        var r = void 0;
        null != e.segmentDuration ? r = m + e.segmentDuration : e.timeline ? r = e.timeline[q].end : (goog.asserts.assert(1 == e.mediaSegments.length && b, "There should be exactly one segment with a Period duration."), r = m + b);
        q = function (a) {
          return function () {
            return a.$jscomp$loop$prop$mediaUri$490
          }
        }(n);
        l.push(new shaka.media.SegmentReference(a +
          m, a + r, q, p.start, p.end, f, h, a, k));
        m = r
      }
      return l
    };
    shaka.dash.SegmentList.parseMediaSegments_ = function (a) {
      var b = [a.representation.segmentList, a.adaptationSet.segmentList, a.period.segmentList].filter(shaka.util.Functional.isNotNull),
        c = shaka.util.XmlUtils;
      return b.map(function (a) {
        return c.findChildren(a, "SegmentURL")
      }).reduce(function (a, b) {
        return 0 < a.length ? a : b
      }).map(function (b) {
        b.getAttribute("indexRange") && !a.indexRangeWarningGiven && (a.indexRangeWarningGiven = !0, shaka.log.warning("We do not support the SegmentURL@indexRange attribute on SegmentList.  We only use the SegmentList@duration attribute or SegmentTimeline, which must be accurate."));
        var d =
          b.getAttribute("media");
        b = c.parseAttr(b, "mediaRange", c.parseRange, {start: 0, end: null});
        return {mediaUri: d, start: b.start, end: b.end}
      })
    };
    shaka.dash.SegmentTemplate = function () {
    };
    shaka.dash.SegmentTemplate.createStreamInfo = function (a, b, c, d, e) {
      goog.asserts.assert(a.representation.segmentTemplate, "Should only be called with SegmentTemplate");
      var f = shaka.dash.SegmentTemplate, g = f.createInitSegment_(a), h = f.parseSegmentTemplateInfo_(a);
      f.checkSegmentTemplateInfo_(a, h);
      var k = shaka.util.ObjectUtils.shallowCloneObject(a);
      if (h.indexTemplate) return shaka.dash.SegmentBase.checkSegmentIndexSupport(a, g), {
        generateSegmentIndex: function () {
          return f.generateSegmentIndexFromIndexTemplate_(k, b,
            g, h)
        }
      };
      if (h.segmentDuration) return d || (a.presentationTimeline.notifyMaxSegmentDuration(h.segmentDuration), a.presentationTimeline.notifyMinSegmentStartTime(a.periodInfo.start)), {
        generateSegmentIndex: function () {
          return f.generateSegmentIndexFromDuration_(k, h, e, g)
        }
      };
      var l = null;
      d = null;
      a.period.id && a.representation.id && (d = a.period.id + "," + a.representation.id, l = c[d]);
      var m = f.createFromTimeline_(k, h, g), n = a.periodInfo.start,
        p = a.periodInfo.duration ? a.periodInfo.start + a.periodInfo.duration : Infinity, q = Infinity !=
        p;
      l ? (q && (new shaka.media.SegmentIndex(m)).fit(n, p), l.merge(m), l.evict(a.presentationTimeline.getSegmentAvailabilityStart())) : (a.presentationTimeline.notifySegments(m), l = new shaka.media.SegmentIndex(m), d && a.dynamic && (c[d] = l));
      q && l.fit(n, p);
      return {
        generateSegmentIndex: function () {
          return Promise.resolve(l)
        }
      }
    };
    shaka.dash.SegmentTemplate.fromInheritance_ = function (a) {
      return a.segmentTemplate
    };
    shaka.dash.SegmentTemplate.parseSegmentTemplateInfo_ = function (a) {
      var b = shaka.dash.SegmentTemplate, c = shaka.dash.MpdUtils, d = c.parseSegmentInfo(a, b.fromInheritance_),
        e = c.inheritAttribute(a, b.fromInheritance_, "media");
      a = c.inheritAttribute(a, b.fromInheritance_, "index");
      return {
        segmentDuration: d.segmentDuration,
        timescale: d.timescale,
        startNumber: d.startNumber,
        scaledPresentationTimeOffset: d.scaledPresentationTimeOffset,
        unscaledPresentationTimeOffset: d.unscaledPresentationTimeOffset,
        timeline: d.timeline,
        mediaTemplate: e,
        indexTemplate: a
      }
    };
    shaka.dash.SegmentTemplate.checkSegmentTemplateInfo_ = function (a, b) {
      var c = b.indexTemplate ? 1 : 0;
      c += b.timeline ? 1 : 0;
      c += b.segmentDuration ? 1 : 0;
      if (0 == c) throw shaka.log.error("SegmentTemplate does not contain any segment information:", "the SegmentTemplate must contain either an index URL template", "a SegmentTimeline, or a segment duration.", a.representation), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_NO_SEGMENT_INFO);
      1 != c && (shaka.log.warning("SegmentTemplate containes multiple segment information sources:",
        "the SegmentTemplate should only contain an index URL template,", "a SegmentTimeline or a segment duration.", a.representation), b.indexTemplate ? (shaka.log.info("Using the index URL template by default."), b.timeline = null) : (goog.asserts.assert(b.timeline, "There should be a timeline"), shaka.log.info("Using the SegmentTimeline by default.")), b.segmentDuration = null);
      if (!b.indexTemplate && !b.mediaTemplate) throw shaka.log.error("SegmentTemplate does not contain sufficient segment information:", "the SegmentTemplate's media URL template is missing.",
        a.representation), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_NO_SEGMENT_INFO);
    };
    shaka.dash.SegmentTemplate.generateSegmentIndexFromIndexTemplate_ = function (a, b, c, d) {
      var e = shaka.dash.MpdUtils, f = shaka.util.ManifestParserUtils;
      goog.asserts.assert(d.indexTemplate, "must be using index template");
      e = e.fillUriTemplate(d.indexTemplate, a.representation.id, null, a.bandwidth || null, null);
      f = f.resolveUris(a.representation.baseUris, [e]);
      return shaka.dash.SegmentBase.generateSegmentIndexFromUris(a, b, c, f, 0, null, d.scaledPresentationTimeOffset)
    };
    shaka.dash.SegmentTemplate.generateSegmentIndexFromDuration_ = function (a, b, c, d) {
      goog.asserts.assert(b.mediaTemplate, "There should be a media template with duration");
      var e = shaka.dash.MpdUtils, f = shaka.util.ManifestParserUtils, g = a.presentationTimeline,
        h = a.periodInfo.start, k = a.periodInfo.duration, l = k ? h + k : Infinity, m = b.segmentDuration;
      goog.asserts.assert(null != m, "Segment duration must not be null!");
      var n = b.startNumber, p = b.timescale, q = b.mediaTemplate, r = a.bandwidth || null, v = a.representation.id,
        x = a.representation.baseUris,
        t = h - b.scaledPresentationTimeOffset, u = function () {
          var a = [Math.max(g.getSegmentAvailabilityStart(), h), Math.min(g.getSegmentAvailabilityEnd(), l)];
          goog.asserts.assert(a.every(isFinite), "Available presentation times must be finite!");
          goog.asserts.assert(a.every(function (a) {
            return 0 <= a
          }), "Available presentation times must be positive!");
          goog.asserts.assert(null != m, "Segment duration must not be null!");
          a = a.map(function (a) {
            return a - h
          });
          return [Math.ceil(a[0] / m), Math.ceil(a[1] / m) - 1].map(function (a) {
            return a +
              n
          })
        }, w = u();
      k = w[1];
      var y = [], C = function (a) {
        goog.asserts.assert(null != m, "Segment duration must not be null!");
        var c = (a - n) * m, g = c + b.scaledPresentationTimeOffset;
        c += h;
        var k = Math.min(c + m, l);
        goog.asserts.assert(c < k, "Generated a segment outside of the period!");
        return new shaka.media.SegmentReference(c, k, function () {
          var b = e.fillUriTemplate(q, v, a, r, g * p);
          return f.resolveUris(x, [b])
        }, 0, null, d, t, h, l)
      };
      for (a = a.dynamic ? Math.max(w[0], w[1] - c + 1) : w[0]; a <= k; ++a) c = C(a), y.push(c);
      var z = new shaka.media.SegmentIndex(y);
      if (g.getSegmentAvailabilityEnd() <
        l) {
        var B = k + 1;
        z.updateEvery(m, function () {
          z.evict(g.getSegmentAvailabilityStart());
          var a = $jscomp.makeIterator(u());
          a.next();
          a = a.next().value;
          for (var b = []; B <= a;) {
            var c = C(B);
            b.push(c);
            B++
          }
          return b
        })
      }
      return Promise.resolve(z)
    };
    shaka.dash.SegmentTemplate.createFromTimeline_ = function (a, b, c) {
      var d = shaka.dash.MpdUtils, e = shaka.util.ManifestParserUtils, f = a.periodInfo.start,
        g = a.periodInfo.duration, h = f - b.scaledPresentationTimeOffset;
      g = g ? f + g : Infinity;
      for (var k = [], l = {}, m = $jscomp.makeIterator(shaka.util.Iterables.enumerate(b.timeline)), n = m.next(); !n.done; l = {
        $jscomp$loop$prop$repId$492: l.$jscomp$loop$prop$repId$492,
        $jscomp$loop$prop$segmentReplacement$493: l.$jscomp$loop$prop$segmentReplacement$493,
        $jscomp$loop$prop$bandwidth$494: l.$jscomp$loop$prop$bandwidth$494,
        $jscomp$loop$prop$timeReplacement$495: l.$jscomp$loop$prop$timeReplacement$495
      }, n = m.next()) {
        var p = n.value, q = p.item;
        n = q.start;
        var r = q.unscaledStart;
        q = q.end;
        l.$jscomp$loop$prop$segmentReplacement$493 = p.i + b.startNumber;
        l.$jscomp$loop$prop$timeReplacement$495 = r + b.unscaledPresentationTimeOffset;
        l.$jscomp$loop$prop$repId$492 = a.representation.id;
        l.$jscomp$loop$prop$bandwidth$494 = a.bandwidth || null;
        p = function (c) {
          return function () {
            goog.asserts.assert(b.mediaTemplate, "There should be a media template with a timeline");
            var f = d.fillUriTemplate(b.mediaTemplate, c.$jscomp$loop$prop$repId$492, c.$jscomp$loop$prop$segmentReplacement$493, c.$jscomp$loop$prop$bandwidth$494 || null, c.$jscomp$loop$prop$timeReplacement$495);
            return e.resolveUris(a.representation.baseUris, [f]).map(function (a) {
              return a.toString()
            })
          }
        }(l);
        k.push(new shaka.media.SegmentReference(f + n, f + q, p, 0, null, c, h, f, g))
      }
      return k
    };
    shaka.dash.SegmentTemplate.createInitSegment_ = function (a) {
      var b = shaka.dash.MpdUtils, c = shaka.util.ManifestParserUtils,
        d = b.inheritAttribute(a, shaka.dash.SegmentTemplate.fromInheritance_, "initialization");
      if (!d) return null;
      var e = a.representation.id, f = a.bandwidth || null, g = a.representation.baseUris;
      return new shaka.media.InitSegmentReference(function () {
        goog.asserts.assert(d, "Should have returned earler");
        var a = b.fillUriTemplate(d, e, null, f, null);
        return c.resolveUris(g, [a])
      }, 0, null)
    };
    shaka.util.PeriodCombiner = function () {
      this.variants_ = [];
      this.audioStreams_ = [];
      this.videoStreams_ = [];
      this.textStreams_ = [];
      this.usedPeriodIds_ = new Set
    };
    shaka.util.PeriodCombiner.prototype.release = function () {
      var a = this.audioStreams_.concat(this.videoStreams_, this.textStreams_);
      a = $jscomp.makeIterator(a);
      for (var b = a.next(); !b.done; b = a.next()) b = b.value, b.segmentIndex && b.segmentIndex.release();
      this.audioStreams_ = [];
      this.videoStreams_ = [];
      this.textStreams_ = [];
      this.variants_ = []
    };
    shaka.util.PeriodCombiner.prototype.getVariants = function () {
      return this.variants_
    };
    shaka.util.PeriodCombiner.prototype.getTextStreams = function () {
      return this.textStreams_
    };
    shaka.util.PeriodCombiner.prototype.combinePeriods = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m, n, p, q, r, v, x, t, u, w, y, C, z, B, A, G, H, F, D, E, M, K, N, L;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (J) {
        switch (J.nextAddress) {
          case 1:
            d = shaka.util.ManifestParserUtils.ContentType;
            e = shaka.util.Iterables;
            shaka.util.PeriodCombiner.filterOutAudioStreamDuplicates_(a);
            shaka.util.PeriodCombiner.filterOutVideoStreamDuplicates_(a);
            if (!b && 1 == a.length) {
              f = a[0];
              c.audioStreams_ = f.audioStreams;
              c.videoStreams_ = f.videoStreams;
              c.textStreams_ = f.textStreams;
              J.jumpTo(2);
              break
            }
            g = -1;
            h = $jscomp.makeIterator(e.enumerate(a));
            for (k = h.next(); !k.done; k = h.next()) m = l = k.value, n = m.i, p = m.item, c.usedPeriodIds_.has(p.id) || (c.usedPeriodIds_.add(p.id), -1 == g && (g = n));
            if (-1 == g) return J["return"]();
            q = a.map(function (a) {
              return a.audioStreams
            });
            r = a.map(function (a) {
              return a.videoStreams
            });
            v = a.map(function (a) {
              return a.textStreams
            });
            x = $jscomp.makeIterator(v);
            for (t = x.next(); !t.done; t = x.next()) u = t.value, u.push(shaka.util.PeriodCombiner.dummyTextStream_());
            return J.yield(shaka.util.PeriodCombiner.combine_(c.audioStreams_, q, g, shaka.util.PeriodCombiner.cloneStream_, shaka.util.PeriodCombiner.concatenateStreams_), 3);
          case 3:
            return J.yield(shaka.util.PeriodCombiner.combine_(c.videoStreams_, r, g, shaka.util.PeriodCombiner.cloneStream_, shaka.util.PeriodCombiner.concatenateStreams_), 4);
          case 4:
            return J.yield(shaka.util.PeriodCombiner.combine_(c.textStreams_, v, g, shaka.util.PeriodCombiner.cloneStream_, shaka.util.PeriodCombiner.concatenateStreams_), 2);
          case 2:
            w = 0;
            y = [];
            if (c.videoStreams_.length && c.audioStreams_.length) for (H = $jscomp.makeIterator(c.audioStreams_), F = H.next(); !F.done; F = H.next()) for (D = F.value, E = $jscomp.makeIterator(c.videoStreams_), M = E.next(); !M.done; M = E.next()) K = M.value, N = shaka.media.DrmEngine.getCommonDrmInfos(D.drmInfos, K.drmInfos), D.drmInfos.length && K.drmInfos.length && !N.length ? shaka.log.warning("Incompatible DRM in audio & video, skipping variant creation.", D, K) : (L = w++, y.push({
              id: L, language: D.language, primary: D.primary, audio: D, video: K, bandwidth: (D.bandwidth ||
                0) + (K.bandwidth || 0), drmInfos: N, allowedByApplication: !0, allowedByKeySystem: !0
            })); else for (C = c.videoStreams_.concat(c.audioStreams_), z = $jscomp.makeIterator(C), B = z.next(); !B.done; B = z.next()) A = B.value, G = w++, y.push({
              id: G,
              language: A.language,
              primary: A.primary,
              audio: A.type == d.AUDIO ? A : null,
              video: A.type == d.VIDEO ? A : null,
              bandwidth: A.bandwidth || 0,
              drmInfos: A.drmInfos,
              allowedByApplication: !0,
              allowedByKeySystem: !0
            });
            c.variants_ = y;
            J.jumpToEnd()
        }
      })
    };
    shaka.util.PeriodCombiner.filterOutAudioStreamDuplicates_ = function (a) {
      var b = shaka.util.ArrayUtils;
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        c = c.value;
        for (var d = [], e = $jscomp.makeIterator(c.audioStreams), f = e.next(); !f.done; f = e.next()) {
          f = f.value;
          for (var g = !1, h = $jscomp.makeIterator(d), k = h.next(); !k.done; k = h.next()) k = k.value, f.id != k.id && f.channelsCount == k.channelsCount && f.language == k.language && f.bandwidth == k.bandwidth && b.hasSameElements(f.roles, k.roles) && f.audioSamplingRate == k.audioSamplingRate &&
          f.primary == k.primary && (g = !0);
          g || d.push(f)
        }
        c.audioStreams = d
      }
    };
    shaka.util.PeriodCombiner.filterOutVideoStreamDuplicates_ = function (a) {
      var b = shaka.util.ArrayUtils, c = shaka.util.MapUtils;
      a = $jscomp.makeIterator(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        d = d.value;
        for (var e = [], f = $jscomp.makeIterator(d.videoStreams), g = f.next(); !g.done; g = f.next()) {
          g = g.value;
          for (var h = !1, k = $jscomp.makeIterator(e), l = k.next(); !l.done; l = k.next()) l = l.value, g.id != l.id && g.width == l.width && g.frameRate == l.frameRate && b.hasSameElements(g.roles, l.roles) && c.hasSameElements(g.closedCaptions, l.closedCaptions) &&
          g.bandwidth == l.bandwidth && (h = !0);
          h || e.push(g)
        }
        d.videoStreams = e
      }
    };
    shaka.util.PeriodCombiner.combineDbStreams = function (a) {
      var b, c, d, e, f, g, h, k, l, m, n, p, q, r, v, x, t, u, w, y, C, z;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (B) {
        switch (B.nextAddress) {
          case 1:
            b = shaka.util.ManifestParserUtils.ContentType;
            if (1 == a.length) return B["return"](a[0]);
            c = a.map(function (a) {
              return a.filter(function (a) {
                return a.type == b.AUDIO
              })
            });
            d = a.map(function (a) {
              return a.filter(function (a) {
                return a.type == b.VIDEO
              })
            });
            e = a.map(function (a) {
              return a.filter(function (a) {
                return a.type == b.TEXT
              })
            });
            f = $jscomp.makeIterator(e);
            for (g = f.next(); !g.done; g = f.next()) h = g.value, h.push(shaka.util.PeriodCombiner.dummyTextStreamDB_());
            return B.yield(shaka.util.PeriodCombiner.combine_([], c, 0, shaka.util.PeriodCombiner.cloneStreamDB_, shaka.util.PeriodCombiner.concatenateStreamDBs_), 2);
          case 2:
            return k = B.yieldResult, B.yield(shaka.util.PeriodCombiner.combine_([], d, 0, shaka.util.PeriodCombiner.cloneStreamDB_, shaka.util.PeriodCombiner.concatenateStreamDBs_), 3);
          case 3:
            return l = B.yieldResult, B.yield(shaka.util.PeriodCombiner.combine_([],
              e, 0, shaka.util.PeriodCombiner.cloneStreamDB_, shaka.util.PeriodCombiner.concatenateStreamDBs_), 4);
          case 4:
            m = B.yieldResult;
            n = 0;
            if (l.length && k.length) for (x = $jscomp.makeIterator(k), t = x.next(); !t.done; t = x.next()) for (u = t.value, w = $jscomp.makeIterator(l), y = w.next(); !y.done; y = w.next()) C = y.value, z = n++, C.variantIds.push(z), u.variantIds.push(z); else for (p = l.concat(k), q = $jscomp.makeIterator(p), r = q.next(); !r.done; r = q.next()) v = r.value, v.variantIds = [n++];
            return B["return"](l.concat(k).concat(m))
        }
      })
    };
    shaka.util.PeriodCombiner.combine_ = function (a, b, c, d, e) {
      var f, g, h, k, l, m, n, p, q, r, v, x, t, u, w, y, C, z, B, A, G, H, F, D;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (E) {
        switch (E.nextAddress) {
          case 1:
            f = shaka.util.ManifestParserUtils.ContentType;
            g = shaka.util.Iterables;
            h = [];
            k = $jscomp.makeIterator(g.enumerate(b));
            for (l = k.next(); !l.done; l = k.next()) n = m = l.value, p = n.i, q = n.item, p >= c ? h.push(new Set(q)) : h.push(new Set);
            r = $jscomp.makeIterator(a);
            v = r.next();
          case 2:
            if (v.done) {
              E.jumpTo(4);
              break
            }
            x = v.value;
            return E.yield(shaka.util.PeriodCombiner.extendExistingOutputStream_(x,
              b, c, e, h), 5);
          case 5:
            t = E.yieldResult;
            if (!t) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.PERIOD_FLATTENING_FAILED);
            v = r.next();
            E.jumpTo(2);
            break;
          case 4:
            u = $jscomp.makeIterator(h), w = u.next();
          case 6:
            if (w.done) {
              E.jumpTo(8);
              break
            }
            y = w.value;
            C = $jscomp.makeIterator(y);
            z = C.next();
          case 9:
            if (z.done) {
              w = u.next();
              E.jumpTo(6);
              break
            }
            B = z.value;
            return E.yield(shaka.util.PeriodCombiner.createNewOutputStream_(B, b, d, e, h), 12);
          case 12:
            (A = E.yieldResult) &&
            a.push(A);
            z = C.next();
            E.jumpTo(9);
            break;
          case 8:
            G = $jscomp.makeIterator(h);
            for (w = G.next(); !w.done; w = G.next()) for (H = w.value, F = $jscomp.makeIterator(H), z = F.next(); !z.done; z = F.next()) if (D = z.value, D.type != f.TEXT || D.language) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.PERIOD_FLATTENING_FAILED);
            return E["return"](a)
        }
      })
    };
    shaka.util.PeriodCombiner.extendExistingOutputStream_ = function (a, b, c, d, e) {
      var f;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
        if (1 == g.nextAddress) {
          f = shaka.util.PeriodCombiner.findMatchesInAllPeriods_(b, a);
          if (!f) return g["return"](!1);
          goog.asserts.assert(a.createSegmentIndex, "outputStream should be a Stream type!");
          return g.yield(Promise.all(f.map(function (a) {
            return a.createSegmentIndex()
          })), 2)
        }
        goog.asserts.assert(f, "Matches should be non-null");
        shaka.util.PeriodCombiner.extendOutputStream_(a,
          f, c, d, e);
        return g["return"](!0)
      })
    };
    shaka.util.PeriodCombiner.createNewOutputStream_ = function (a, b, c, d, e) {
      var f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        if (1 == h.nextAddress) return f = c(a), (g = shaka.util.PeriodCombiner.findMatchesInAllPeriods_(b, f)) ? f.createSegmentIndex ? h.yield(Promise.all(g.map(function (a) {
          return a.createSegmentIndex()
        })), 2) : h.jumpTo(2) : h["return"](null);
        goog.asserts.assert(g, "Matches should be non-null");
        shaka.util.PeriodCombiner.extendOutputStream_(f, g, 0, d, e);
        return h["return"](f)
      })
    };
    shaka.util.PeriodCombiner.extendOutputStream_ = function (a, b, c, d, e) {
      var f = shaka.util.ManifestParserUtils.ContentType, g = shaka.util.LanguageUtils;
      b = $jscomp.makeIterator(shaka.util.Iterables.enumerate(b));
      for (var h = b.next(); !h.done; h = b.next()) {
        var k = h.value;
        h = k.i;
        k = k.item;
        if (h >= c) {
          d(a, k);
          var l = !0;
          a.type == f.AUDIO && 0 == g.relatedness(a.language, k.language) && (l = !1);
          l && e[h]["delete"](k)
        }
      }
    };
    shaka.util.PeriodCombiner.cloneStream_ = function (a) {
      a = Object.assign({}, a);
      a.originalId = null;
      a.createSegmentIndex = function () {
        return Promise.resolve()
      };
      a.segmentIndex = new shaka.media.MetaSegmentIndex;
      a.emsgSchemeIdUris = [];
      a.keyIds = new Set;
      a.closedCaptions = null;
      a.trickModeVideo = null;
      return a
    };
    shaka.util.PeriodCombiner.cloneStreamDB_ = function (a) {
      a = Object.assign({}, a);
      a.keyIds = new Set;
      a.segments = [];
      a.variantIds = [];
      a.closedCaptions = null;
      return a
    };
    shaka.util.PeriodCombiner.concatenateStreams_ = function (a, b) {
      a.roles = Array.from(new Set(a.roles.concat(b.roles)));
      b.emsgSchemeIdUris && (a.emsgSchemeIdUris = Array.from(new Set(a.emsgSchemeIdUris.concat(b.emsgSchemeIdUris))));
      var c = b.keyIds;
      c = new Set([].concat($jscomp.arrayFromIterable(a.keyIds), $jscomp.arrayFromIterable(c)));
      a.keyIds = c;
      a.originalId = null == a.originalId ? b.originalId : a.originalId + ("," + (b.originalId || ""));
      c = shaka.media.DrmEngine.getCommonDrmInfos(a.drmInfos, b.drmInfos);
      if (b.drmInfos.length &&
        a.drmInfos.length && !c.length) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.INCONSISTENT_DRM_ACROSS_PERIODS);
      a.drmInfos = c;
      a.encrypted = a.encrypted || b.encrypted;
      if (b.closedCaptions) {
        a.closedCaptions || (a.closedCaptions = new Map);
        c = $jscomp.makeIterator(b.closedCaptions);
        for (var d = c.next(); !d.done; d = c.next()) {
          var e = $jscomp.makeIterator(d.value);
          d = e.next().value;
          e = e.next().value;
          a.closedCaptions.set(d, e)
        }
      }
      goog.asserts.assert(a.segmentIndex instanceof
        shaka.media.MetaSegmentIndex, "Output streams should have a MetaSegmentIndex!");
      goog.asserts.assert(b.segmentIndex, "Input segment index should have been created by now!");
      a.segmentIndex.appendSegmentIndex(b.segmentIndex);
      b.trickModeVideo ? (a.trickModeVideo || (a.trickModeVideo = shaka.util.PeriodCombiner.cloneStream_(b.trickModeVideo), a.trickModeVideo.segmentIndex = a.segmentIndex.clone()), shaka.util.PeriodCombiner.concatenateStreams_(a.trickModeVideo, b.trickModeVideo)) : a.trickModeVideo && shaka.util.PeriodCombiner.concatenateStreams_(a.trickModeVideo,
        b)
    };
    shaka.util.PeriodCombiner.concatenateStreamDBs_ = function (a, b) {
      a.roles = Array.from(new Set(a.roles.concat(b.roles)));
      var c = b.keyIds;
      c = new Set([].concat($jscomp.arrayFromIterable(a.keyIds), $jscomp.arrayFromIterable(c)));
      a.keyIds = c;
      a.encrypted = a.encrypted && b.encrypted;
      a.segments.push.apply(a.segments, $jscomp.arrayFromIterable(b.segments));
      if (b.closedCaptions) {
        a.closedCaptions || (a.closedCaptions = new Map);
        c = $jscomp.makeIterator(b.closedCaptions);
        for (var d = c.next(); !d.done; d = c.next()) {
          var e = $jscomp.makeIterator(d.value);
          d =
            e.next().value;
          e = e.next().value;
          a.closedCaptions.set(d, e)
        }
      }
    };
    shaka.util.PeriodCombiner.findMatchesInAllPeriods_ = function (a, b) {
      for (var c = [], d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) {
        e = shaka.util.PeriodCombiner.findBestMatchInPeriod_(e.value, b);
        if (!e) return null;
        c.push(e)
      }
      return c
    };
    shaka.util.PeriodCombiner.findBestMatchInPeriod_ = function (a, b) {
      for (var c = {
        audio: shaka.util.PeriodCombiner.areAVStreamsCompatible_,
        video: shaka.util.PeriodCombiner.areAVStreamsCompatible_,
        text: shaka.util.PeriodCombiner.areTextStreamsCompatible_
      }[b.type], d = {
        audio: shaka.util.PeriodCombiner.isAudioStreamBetterMatch_,
        video: shaka.util.PeriodCombiner.isVideoStreamBetterMatch_,
        text: shaka.util.PeriodCombiner.isTextStreamBetterMatch_
      }[b.type], e = null, f = $jscomp.makeIterator(a), g = f.next(); !g.done; g = f.next()) g =
        g.value, !c(b, g) || e && !d(b, e, g) || (e = g);
      return e
    };
    shaka.util.PeriodCombiner.areAVStreamsCompatible_ = function (a, b) {
      return b.mimeType != a.mimeType || shaka.util.MimeUtils.getCodecBase(b.codecs) != shaka.util.MimeUtils.getCodecBase(a.codecs) || a.drmInfos && !shaka.media.DrmEngine.areDrmCompatible(a.drmInfos, b.drmInfos) ? !1 : !0
    };
    shaka.util.PeriodCombiner.areTextStreamsCompatible_ = function (a, b) {
      return a.language ? b.language ? 0 == shaka.util.LanguageUtils.relatedness(a.language, b.language) || b.kind != a.kind ? !1 : !0 : !0 : !1
    };
    shaka.util.PeriodCombiner.isAudioStreamBetterMatch_ = function (a, b, c) {
      var d = shaka.util.LanguageUtils, e = shaka.util.PeriodCombiner.BetterOrWorse, f = e.BETTER;
      e = e.WORSE;
      if (a.id == c.id) return !0;
      var g = d.relatedness(a.language, b.language);
      d = d.relatedness(a.language, c.language);
      if (d > g) return !0;
      if (d < g) return !1;
      if (!b.primary && c.primary) return !0;
      if (b.primary && !c.primary) return !1;
      if (a.roles.length) return f = b.roles.filter(function (b) {
        return a.roles.includes(b)
      }), e = c.roles.filter(function (b) {
        return a.roles.includes(b)
      }),
        e.length > f.length ? !0 : e.length < f.length ? !1 : c.roles.length < b.roles.length;
      d = shaka.util.PeriodCombiner.compareClosestPreferLower(a.channelsCount, b.channelsCount, c.channelsCount);
      if (d == f) return !0;
      if (d == e) return !1;
      d = shaka.util.PeriodCombiner.compareClosestPreferLower(a.audioSamplingRate, b.audioSamplingRate, c.audioSamplingRate);
      return d == f ? !0 : d == e ? !1 : a.bandwidth && shaka.util.PeriodCombiner.compareClosestPreferMinimalAbsDiff_(a.bandwidth, b.bandwidth, c.bandwidth) == f ? !0 : !1
    };
    shaka.util.PeriodCombiner.isVideoStreamBetterMatch_ = function (a, b, c) {
      var d = shaka.util.PeriodCombiner.BetterOrWorse, e = d.BETTER;
      d = d.WORSE;
      if (a.id == c.id) return !0;
      var f = shaka.util.PeriodCombiner.compareClosestPreferLower(a.width * a.height, b.width * b.height, c.width * c.height);
      if (f == e) return !0;
      if (f == d) return !1;
      if (a.frameRate) {
        f = shaka.util.PeriodCombiner.compareClosestPreferLower(a.frameRate, b.frameRate, c.frameRate);
        if (f == e) return !0;
        if (f == d) return !1
      }
      return a.bandwidth && shaka.util.PeriodCombiner.compareClosestPreferMinimalAbsDiff_(a.bandwidth,
        b.bandwidth, c.bandwidth) == e ? !0 : !1
    };
    shaka.util.PeriodCombiner.isTextStreamBetterMatch_ = function (a, b, c) {
      var d = shaka.util.LanguageUtils;
      if (a.id == c.id) return !0;
      var e = d.relatedness(a.language, b.language);
      d = d.relatedness(a.language, c.language);
      if (d > e) return !0;
      if (d < e) return !1;
      if (!b.primary && c.primary) return !0;
      if (b.primary && !c.primary) return !1;
      if (a.roles.length) {
        e = b.roles.filter(function (b) {
          return a.roles.includes(b)
        });
        d = c.roles.filter(function (b) {
          return a.roles.includes(b)
        });
        if (d.length > e.length) return !0;
        if (d.length < e.length) return !1
      }
      return c.mimeType !=
      a.mimeType || c.codecs != a.codecs || b.mimeType == a.mimeType && b.codecs == a.codecs ? !1 : !0
    };
    shaka.util.PeriodCombiner.dummyTextStreamDB_ = function () {
      return {
        id: 0,
        originalId: "",
        primary: !1,
        type: shaka.util.ManifestParserUtils.ContentType.TEXT,
        mimeType: "",
        codecs: "",
        language: "",
        label: null,
        width: null,
        height: null,
        encrypted: !1,
        keyIds: new Set,
        segments: [],
        variantIds: [],
        roles: [],
        channelsCount: null,
        audioSamplingRate: null,
        closedCaptions: null
      }
    };
    shaka.util.PeriodCombiner.dummyTextStream_ = function () {
      var a = shaka.util.ManifestParserUtils.ContentType;
      return {
        id: 0,
        originalId: "",
        createSegmentIndex: function () {
          return Promise.resolve()
        },
        segmentIndex: new shaka.media.SegmentIndex([]),
        mimeType: "",
        codecs: "",
        encrypted: !1,
        drmInfos: [],
        keyIds: new Set,
        language: "",
        label: null,
        type: a.TEXT,
        primary: !1,
        trickModeVideo: null,
        emsgSchemeIdUris: null,
        roles: [],
        channelsCount: null,
        audioSamplingRate: null,
        closedCaptions: null
      }
    };
    shaka.util.PeriodCombiner.compareClosestPreferLower = function (a, b, c) {
      var d = shaka.util.PeriodCombiner.BetterOrWorse, e = d.BETTER, f = d.WORSE;
      if (b == a && a != c) return f;
      if (c == a && a != b) return e;
      if (b > a) {
        if (c <= a || c - a < b - a) return e;
        if (c - a > b - a) return f
      } else {
        if (c > a) return f;
        if (a - c < a - b) return e;
        if (a - c > a - b) return f
      }
      return d.EQUAL
    };
    shaka.util.PeriodCombiner.compareClosestPreferMinimalAbsDiff_ = function (a, b, c) {
      var d = shaka.util.PeriodCombiner.BetterOrWorse, e = d.BETTER, f = d.WORSE;
      b = Math.abs(a - b);
      a = Math.abs(a - c);
      return a < b ? e : b < a ? f : d.EQUAL
    };
    shaka.util.PeriodCombiner.BetterOrWorse = {BETTER: 1, EQUAL: 0, WORSE: -1};
    shaka.dash.DashParser = function () {
      var a = this;
      this.playerInterface_ = this.config_ = null;
      this.manifestUris_ = [];
      this.manifest_ = null;
      this.globalId_ = 1;
      this.segmentIndexMap_ = {};
      this.periodCombiner_ = new shaka.util.PeriodCombiner;
      this.updatePeriod_ = 0;
      this.averageUpdateDuration_ = new shaka.abr.Ewma(5);
      this.updateTimer_ = new shaka.util.Timer(function () {
        a.onUpdate_()
      });
      this.operationManager_ = new shaka.util.OperationManager
    };
    shaka.dash.DashParser.prototype.configure = function (a) {
      goog.asserts.assert(null != a.dash, "DashManifestConfiguration should not be null!");
      this.config_ = a
    };
    shaka.dash.DashParser.prototype.start = function (a, b) {
      var c = this, d;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress) return goog.asserts.assert(c.config_, "Must call configure() before start()!"), c.manifestUris_ = [a], c.playerInterface_ = b, e.yield(c.requestManifest_(), 2);
        d = e.yieldResult;
        c.playerInterface_ && c.setUpdateTimer_(d);
        if (!c.playerInterface_) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.OPERATION_ABORTED);
        goog.asserts.assert(c.manifest_, "Manifest should be non-null!");
        return e["return"](c.manifest_)
      })
    };
    shaka.dash.DashParser.prototype.stop = function () {
      for (var a = $jscomp.makeIterator(Object.values(this.segmentIndexMap_)), b = a.next(); !b.done; b = a.next()) b.value.release();
      this.periodCombiner_ && this.periodCombiner_.release();
      this.config_ = this.playerInterface_ = null;
      this.manifestUris_ = [];
      this.manifest_ = null;
      this.segmentIndexMap_ = {};
      this.periodCombiner_ = null;
      null != this.updateTimer_ && (this.updateTimer_.stop(), this.updateTimer_ = null);
      return this.operationManager_.destroy()
    };
    shaka.dash.DashParser.prototype.update = function () {
      var a = this, b;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        if (1 == c.nextAddress) return c.setCatchFinallyBlocks(2), c.yield(a.requestManifest_(), 4);
        if (2 != c.nextAddress) return c.leaveTryBlock(0);
        b = c.enterCatchBlock();
        if (!a.playerInterface_ || !b) return c["return"]();
        goog.asserts.assert(b instanceof shaka.util.Error, "Bad error type");
        a.playerInterface_.onError(b);
        c.jumpToEnd()
      })
    };
    shaka.dash.DashParser.prototype.onExpirationUpdated = function (a, b) {
    };
    shaka.dash.DashParser.prototype.requestManifest_ = function () {
      var a = this, b, c, d, e, f, g, h, k;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
        if (1 == l.nextAddress) return b = shaka.net.NetworkingEngine.RequestType.MANIFEST, c = shaka.net.NetworkingEngine.makeRequest(a.manifestUris_, a.config_.retryParameters), d = a.playerInterface_.networkingEngine, e = Date.now(), f = d.request(b, c), a.operationManager_.manage(f), l.yield(f.promise, 2);
        if (3 != l.nextAddress) {
          g = l.yieldResult;
          if (!a.playerInterface_) return l["return"](0);
          g.uri && !a.manifestUris_.includes(g.uri) && a.manifestUris_.unshift(g.uri);
          return l.yield(a.parseManifest_(g.data, g.uri), 3)
        }
        h = Date.now();
        k = (h - e) / 1E3;
        a.averageUpdateDuration_.sample(1, k);
        return l["return"](k)
      })
    };
    shaka.dash.DashParser.prototype.parseManifest_ = function (a, b) {
      var c = this, d, e, f, g, h, k;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
        if (1 == l.nextAddress) {
          d = shaka.util.Error;
          e = shaka.dash.MpdUtils;
          f = shaka.util.XmlUtils.parseXml(a, "MPD");
          if (!f) throw new d(d.Severity.CRITICAL, d.Category.MANIFEST, d.Code.DASH_INVALID_XML, b);
          g = c.config_.dash.xlinkFailGracefully;
          h = e.processXlinks(f, c.config_.retryParameters, g, b, c.playerInterface_.networkingEngine);
          c.operationManager_.manage(h);
          return l.yield(h.promise,
            2)
        }
        k = l.yieldResult;
        return l["return"](c.processManifest_(k, b))
      })
    };
    shaka.dash.DashParser.prototype.processManifest_ = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m, n, p, q, r, v, x, t, u, w, y, C, z, B, A, G, H, F, D;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (E) {
        switch (E.nextAddress) {
          case 1:
            return d = shaka.util.Functional, e = shaka.util.XmlUtils, f = [b], g = e.findChildren(a, "Location").map(e.getContents).filter(d.isNotNull), 0 < g.length && (h = shaka.util.ManifestParserUtils.resolveUris(f, g), f = c.manifestUris_ = h), k = e.findChildren(a, "BaseURL").map(e.getContents), l = shaka.util.ManifestParserUtils.resolveUris(f,
              k), m = c.config_.dash.ignoreMinBufferTime, n = 0, m || (n = e.parseAttr(a, "minBufferTime", e.parseDuration) || 0), c.updatePeriod_ = e.parseAttr(a, "minimumUpdatePeriod", e.parseDuration, -1), p = e.parseAttr(a, "availabilityStartTime", e.parseDate), q = e.parseAttr(a, "timeShiftBufferDepth", e.parseDuration), r = c.config_.dash.ignoreSuggestedPresentationDelay, v = null, r || (v = e.parseAttr(a, "suggestedPresentationDelay", e.parseDuration)), x = e.parseAttr(a, "maxSegmentDuration", e.parseDuration), t = a.getAttribute("type") || "static", c.manifest_ ?
              u = c.manifest_.presentationTimeline : (w = c.config_.defaultPresentationDelay || 1.5 * n, y = null != v ? v : w, u = new shaka.media.PresentationTimeline(p, y, c.config_.dash.autoCorrectDrift)), C = {
              dynamic: "static" != t,
              presentationTimeline: u,
              period: null,
              periodInfo: null,
              adaptationSet: null,
              representation: null,
              bandwidth: 0,
              indexRangeWarningGiven: !1
            }, z = c.parsePeriods_(C, l, a), B = z.duration, A = z.periods, u.setStatic("static" == t), "static" != t && z.durationDerivedFromPeriods || u.setDuration(B || Infinity), (G = u.isLive()) && !isNaN(c.config_.availabilityWindowOverride) &&
            (q = c.config_.availabilityWindowOverride), null == q && (q = Infinity), u.setSegmentAvailabilityDuration(q), u.notifyMaxSegmentDuration(x || 1), goog.DEBUG && u.assertIsValid(), E.yield(c.periodCombiner_.combinePeriods(A, C.dynamic), 2);
          case 2:
            if (c.manifest_) {
              c.manifest_.variants = c.periodCombiner_.getVariants();
              c.manifest_.textStreams = c.periodCombiner_.getTextStreams();
              E.jumpTo(3);
              break
            }
            c.manifest_ = {
              presentationTimeline: u,
              variants: c.periodCombiner_.getVariants(),
              textStreams: c.periodCombiner_.getTextStreams(),
              offlineSessionIds: [],
              minBufferTime: n || 0
            };
            if (!u.usingPresentationStartTime()) {
              E.jumpTo(3);
              break
            }
            H = shaka.util.XmlUtils;
            F = H.findChildren(a, "UTCTiming");
            return E.yield(c.parseUtcTiming_(l, F), 5);
          case 5:
            D = E.yieldResult;
            if (!c.playerInterface_) return E["return"]();
            u.setClockOffset(D);
          case 3:
            return goog.asserts.assert(c.manifest_, "Manifest should exist by now!"), E.yield(c.playerInterface_.filter(c.manifest_), 0)
        }
      })
    };
    shaka.dash.DashParser.prototype.parsePeriods_ = function (a, b, c) {
      var d = shaka.util.XmlUtils, e = d.parseAttr(c, "mediaPresentationDuration", d.parseDuration), f = [], g = 0;
      c = d.findChildren(c, "Period");
      c = $jscomp.makeIterator(shaka.util.Iterables.enumerate(c));
      for (var h = c.next(); !h.done; h = c.next()) {
        var k = h.value;
        h = k.i;
        var l = k.item;
        k = k.next;
        g = d.parseAttr(l, "start", d.parseDuration, g);
        var m = d.parseAttr(l, "duration", d.parseDuration), n = null;
        if (k) {
          var p = d.parseAttr(k, "start", d.parseDuration);
          null != p && (n = p - g)
        } else null !=
        e && (n = e - g);
        p = shaka.util.ManifestParserUtils.GAP_OVERLAP_TOLERANCE_SECONDS;
        n && m && Math.abs(n - m) > p && shaka.log.warning("There is a gap/overlap between Periods", l);
        null == n && (n = m);
        l = this.parsePeriod_(a, b, {start: g, duration: n, node: l, isLastPeriod: null == n || !k});
        f.push(l);
        if (null == n) {
          k && shaka.log.warning("Skipping Period", h + 1, "and any subsequent Periods:", "Period", h + 1, "does not have a valid start time.", k);
          g = null;
          break
        }
        g += n
      }
      return null != e ? (g != e && shaka.log.warning("@mediaPresentationDuration does not match the total duration of ",
        "all Periods."), {periods: f, duration: e, durationDerivedFromPeriods: !1}) : {
        periods: f,
        duration: g,
        durationDerivedFromPeriods: !0
      }
    };
    shaka.dash.DashParser.prototype.parsePeriod_ = function (a, b, c) {
      var d = this, e = shaka.util.Functional, f = shaka.util.XmlUtils, g = shaka.util.ManifestParserUtils.ContentType;
      a.period = this.createFrame_(c.node, null, b);
      a.periodInfo = c;
      a.period.id || (shaka.log.info("No Period ID given for Period with start time " + c.start + ",  Assigning a default"), a.period.id = "__shaka_period_" + c.start);
      b = f.findChildren(c.node, "EventStream");
      b = $jscomp.makeIterator(b);
      for (var h = b.next(); !h.done; h = b.next()) this.parseEventStream_(c.start,
        c.duration, h.value);
      e = f.findChildren(c.node, "AdaptationSet").map(function (b) {
        return d.parseAdaptationSet_(a, b)
      }).filter(e.isNotNull);
      if (a.dynamic) {
        c = [];
        f = $jscomp.makeIterator(e);
        for (b = f.next(); !b.done; b = f.next()) for (b = $jscomp.makeIterator(b.value.representationIds), h = b.next(); !h.done; h = b.next()) c.push(h.value);
        f = new Set(c);
        if (c.length != f.size) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_DUPLICATE_REPRESENTATION_ID);
      }
      c =
        e.filter(function (a) {
          return !a.trickModeFor
        });
      e = e.filter(function (a) {
        return a.trickModeFor
      });
      e = $jscomp.makeIterator(e);
      for (f = e.next(); !f.done; f = e.next()) {
        b = f.value;
        f = b.streams[0];
        b = b.trickModeFor;
        h = $jscomp.makeIterator(c);
        for (var k = h.next(); !k.done; k = h.next()) if (k = k.value, k.id == b) {
          k = $jscomp.makeIterator(k.streams);
          for (var l = k.next(); !l.done; l = k.next()) l.value.trickModeVideo = f
        }
      }
      f = this.config_.disableAudio ? [] : this.getSetsOfType_(c, g.AUDIO);
      e = this.config_.disableVideo ? [] : this.getSetsOfType_(c, g.VIDEO);
      c = this.config_.disableText ? [] : this.getSetsOfType_(c, g.TEXT);
      if (!e.length && !f.length) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_EMPTY_PERIOD);
      g = [];
      f = $jscomp.makeIterator(f);
      for (b = f.next(); !b.done; b = f.next()) g.push.apply(g, $jscomp.arrayFromIterable(b.value.streams));
      f = [];
      e = $jscomp.makeIterator(e);
      for (b = e.next(); !b.done; b = e.next()) f.push.apply(f, $jscomp.arrayFromIterable(b.value.streams));
      e = [];
      c = $jscomp.makeIterator(c);
      for (b = c.next(); !b.done; b = c.next()) e.push.apply(e, $jscomp.arrayFromIterable(b.value.streams));
      return {id: a.period.id, audioStreams: g, videoStreams: f, textStreams: e}
    };
    shaka.dash.DashParser.prototype.getSetsOfType_ = function (a, b) {
      return a.filter(function (a) {
        return a.contentType == b
      })
    };
    shaka.dash.DashParser.prototype.parseAdaptationSet_ = function (a, b) {
      var c = this, d = shaka.util.XmlUtils, e = shaka.util.Functional, f = shaka.util.ManifestParserUtils,
        g = f.ContentType, h = shaka.dash.ContentProtection;
      a.adaptationSet = this.createFrame_(b, a.period, null);
      if (a.adaptationSet.contentType == g.IMAGE) return shaka.log.warning("Skipping Image AdaptationSet", a.adaptationSet), null;
      var k = !1, l = d.findChildren(b, "Role"), m = l.map(function (a) {
        return a.getAttribute("value")
      }).filter(e.isNotNull), n = void 0;
      if (e = a.adaptationSet.contentType ==
        g.TEXT) n = f.TextStreamKind.SUBTITLE;
      l = $jscomp.makeIterator(l);
      for (var p = l.next(); !p.done; p = l.next()) {
        p = p.value;
        var q = p.getAttribute("schemeIdUri");
        if (null == q || "urn:mpeg:dash:role:2011" == q) switch (p = p.getAttribute("value"), p) {
          case "main":
            k = !0;
            break;
          case "caption":
          case "subtitle":
            n = p
        }
      }
      q = d.findChildren(b, "EssentialProperty");
      l = null;
      p = !1;
      q = $jscomp.makeIterator(q);
      for (var r = q.next(); !r.done; r = q.next()) {
        var v = r.value;
        "http://dashif.org/guidelines/trickmode" == v.getAttribute("schemeIdUri") ? l = v.getAttribute("value") :
          p = !0
      }
      v = d.findChildren(b, "Accessibility");
      q = shaka.util.LanguageUtils;
      var x = new Map;
      v = $jscomp.makeIterator(v);
      for (r = v.next(); !r.done; r = v.next()) {
        var t = r.value;
        r = t.getAttribute("schemeIdUri");
        t = t.getAttribute("value");
        if ("urn:scte:dash:cc:cea-608:2015" == r || "urn:scte:dash:cc:cea-708:2015" == r) if (r = 1, null != t) {
          t = $jscomp.makeIterator(t.split(";"));
          for (var u = t.next(); !u.done; u = t.next()) {
            var w = u.value, y = u = void 0;
            w.includes("=") ? (w = w.split("="), u = w[0].startsWith("CC") ? w[0] : "CC" + w[0], y = w[1].split(",")[0].split(":").pop()) :
              (u = "CC" + r, r += 2, y = w);
            x.set(u, q.normalize(y))
          }
        } else x.set("CC1", "und"); else "urn:mpeg:dash:role:2011" == r && null != t && (m.push(t), "captions" == t && (n = f.TextStreamKind.CLOSED_CAPTION))
      }
      if (p) return null;
      f = d.findChildren(b, "ContentProtection");
      var C = h.parseFromAdaptationSet(f, this.config_.dash.ignoreDrmInfo),
        z = shaka.util.LanguageUtils.normalize(b.getAttribute("lang") || "und"), B = b.getAttribute("label");
      (h = d.findChildren(b, "Label")) && h.length && (h = h[0], h.textContent && (B = h.textContent));
      h = d.findChildren(b, "Representation");
      d = h.map(function (b) {
        return c.parseRepresentation_(a, C, n, z, B, k, m, x, b)
      }).filter(function (a) {
        return !!a
      });
      if (0 == d.length) {
        if (this.config_.dash.ignoreEmptyAdaptationSet || e) return null;
        throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.DASH_EMPTY_ADAPTATION_SET);
      }
      if (!a.adaptationSet.contentType || a.adaptationSet.contentType == g.APPLICATION) for (a.adaptationSet.contentType = shaka.dash.DashParser.guessContentType_(d[0].mimeType, d[0].codecs),
                                                                                               g = $jscomp.makeIterator(d), e = g.next(); !e.done; e = g.next()) e.value.type = a.adaptationSet.contentType;
      g = $jscomp.makeIterator(d);
      for (e = g.next(); !e.done; e = g.next()) for (e = e.value, f = $jscomp.makeIterator(C.drmInfos), p = f.next(); !p.done; p = f.next()) p = p.value, p.keyIds = p.keyIds && e.keyIds ? new Set([].concat($jscomp.arrayFromIterable(p.keyIds), $jscomp.arrayFromIterable(e.keyIds))) : p.keyIds || e.keyIds;
      g = h.map(function (a) {
        return a.getAttribute("id")
      }).filter(shaka.util.Functional.isNotNull);
      return {
        id: a.adaptationSet.id ||
          "__fake__" + this.globalId_++,
        contentType: a.adaptationSet.contentType,
        language: z,
        main: k,
        streams: d,
        drmInfos: C.drmInfos,
        trickModeFor: l,
        representationIds: g
      }
    };
    shaka.dash.DashParser.prototype.parseRepresentation_ = function (a, b, c, d, e, f, g, h, k) {
      var l = this, m = shaka.util.XmlUtils, n = shaka.util.ManifestParserUtils.ContentType;
      a.representation = this.createFrame_(k, a.adaptationSet, null);
      if (!this.verifyRepresentation_(a.representation)) return shaka.log.warning("Skipping Representation", a.representation), null;
      var p = a.periodInfo.start;
      a.bandwidth = m.parseAttr(k, "bandwidth", m.parsePositiveInt) || 0;
      var q = a.representation.contentType;
      n = q == n.TEXT || q == n.APPLICATION;
      try {
        if (q =
          function (a, b, c) {
            return l.requestInitSegment_(a, b, c)
          }, a.representation.segmentBase) var r = shaka.dash.SegmentBase.createStreamInfo(a, q); else if (a.representation.segmentList) r = shaka.dash.SegmentList.createStreamInfo(a, this.segmentIndexMap_); else if (a.representation.segmentTemplate) r = shaka.dash.SegmentTemplate.createStreamInfo(a, q, this.segmentIndexMap_, !!this.manifest_, this.config_.dash.initialSegmentLimit); else {
          goog.asserts.assert(n, "Must have Segment* with non-text streams.");
          var v = a.representation.baseUris,
            x = a.periodInfo.duration || 0;
          r = {
            generateSegmentIndex: function () {
              return Promise.resolve(shaka.media.SegmentIndex.forSingleSegment(p, x, v))
            }
          }
        }
      } catch (u) {
        if (n && u.code == shaka.util.Error.Code.DASH_NO_SEGMENT_INFO) return null;
        throw u;
      }
      n = m.findChildren(k, "ContentProtection");
      n = shaka.dash.ContentProtection.parseFromRepresentation(n, b, this.config_.dash.ignoreDrmInfo);
      n = new Set(n ? [n] : []);
      m.findChildren(k, "SupplementalProperty").some(function (a) {
        return "tag:dolby.com,2018:dash:EC3_ExtensionType:2018" == a.getAttribute("schemeIdUri") &&
          "JOC" == a.getAttribute("value")
      }) && (a.representation.mimeType = "audio/eac3-joc");
      var t = {
        id: this.globalId_++,
        originalId: a.representation.id,
        createSegmentIndex: function () {
          var a;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
            if (1 == b.nextAddress) {
              if (t.segmentIndex) return b.jumpTo(0);
              a = t;
              return b.yield(r.generateSegmentIndex(), 3)
            }
            a.segmentIndex = b.yieldResult;
            b.jumpToEnd()
          })
        },
        segmentIndex: null,
        mimeType: a.representation.mimeType,
        codecs: a.representation.codecs,
        frameRate: a.representation.frameRate,
        pixelAspectRatio: a.representation.pixelAspectRatio,
        bandwidth: a.bandwidth,
        width: a.representation.width,
        height: a.representation.height,
        kind: c,
        encrypted: 0 < b.drmInfos.length,
        drmInfos: b.drmInfos,
        keyIds: n,
        language: d,
        label: e,
        type: a.adaptationSet.contentType,
        primary: f,
        trickModeVideo: null,
        emsgSchemeIdUris: a.representation.emsgSchemeIdUris,
        roles: g,
        channelsCount: a.representation.numChannels,
        audioSamplingRate: a.representation.audioSamplingRate,
        closedCaptions: h
      };
      return t
    };
    shaka.dash.DashParser.prototype.onUpdate_ = function () {
      var a = this, b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        switch (d.nextAddress) {
          case 1:
            return goog.asserts.assert(0 <= a.updatePeriod_, "There should be an update period"), shaka.log.info("Updating manifest..."), b = 0, d.setCatchFinallyBlocks(2), d.yield(a.requestManifest_(), 4);
          case 4:
            b = d.yieldResult;
            d.leaveTryBlock(3);
            break;
          case 2:
            c = d.enterCatchBlock(), goog.asserts.assert(c instanceof shaka.util.Error, "Should only receive a Shaka error"),
            a.playerInterface_ && (c.severity = shaka.util.Error.Severity.RECOVERABLE, a.playerInterface_.onError(c));
          case 3:
            if (!a.playerInterface_) return d["return"]();
            a.setUpdateTimer_(b);
            d.jumpToEnd()
        }
      })
    };
    shaka.dash.DashParser.prototype.setUpdateTimer_ = function (a) {
      0 > this.updatePeriod_ || (a = Math.max(shaka.dash.DashParser.MIN_UPDATE_PERIOD_, this.updatePeriod_ - a, this.averageUpdateDuration_.getEstimate()), this.updateTimer_.tickAfter(a))
    };
    shaka.dash.DashParser.prototype.createFrame_ = function (a, b, c) {
      goog.asserts.assert(b || c, "Must provide either parent or baseUris");
      var d = shaka.util.ManifestParserUtils, e = shaka.util.XmlUtils;
      b = b || {
        contentType: "",
        mimeType: "",
        codecs: "",
        emsgSchemeIdUris: [],
        frameRate: void 0,
        pixelAspectRatio: void 0,
        numChannels: null,
        audioSamplingRate: null
      };
      c = c || b.baseUris;
      var f = e.parseNonNegativeInt, g = e.evalDivision, h = e.findChildren(a, "BaseURL").map(e.getContents),
        k = a.getAttribute("contentType") || b.contentType, l = a.getAttribute("mimeType") ||
        b.mimeType, m = a.getAttribute("codecs") || b.codecs;
      g = e.parseAttr(a, "frameRate", g) || b.frameRate;
      var n = a.getAttribute("sar") || b.pixelAspectRatio,
        p = this.emsgSchemeIdUris_(e.findChildren(a, "InbandEventStream"), b.emsgSchemeIdUris),
        q = e.findChildren(a, "AudioChannelConfiguration");
      q = this.parseAudioChannels_(q) || b.numChannels;
      var r = e.parseAttr(a, "audioSamplingRate", f) || b.audioSamplingRate;
      k || (k = shaka.dash.DashParser.guessContentType_(l, m));
      return {
        baseUris: d.resolveUris(c, h),
        segmentBase: e.findChild(a, "SegmentBase") ||
          b.segmentBase,
        segmentList: e.findChild(a, "SegmentList") || b.segmentList,
        segmentTemplate: e.findChild(a, "SegmentTemplate") || b.segmentTemplate,
        width: e.parseAttr(a, "width", f) || b.width,
        height: e.parseAttr(a, "height", f) || b.height,
        contentType: k,
        mimeType: l,
        codecs: m,
        frameRate: g,
        pixelAspectRatio: n,
        emsgSchemeIdUris: p,
        id: a.getAttribute("id"),
        numChannels: q,
        audioSamplingRate: r
      }
    };
    shaka.dash.DashParser.prototype.emsgSchemeIdUris_ = function (a, b) {
      for (var c = b.slice(), d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) e = e.value.getAttribute("schemeIdUri"), c.includes(e) || c.push(e);
      return c
    };
    shaka.dash.DashParser.prototype.parseAudioChannels_ = function (a) {
      a = $jscomp.makeIterator(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        var c = b.value;
        if (b = c.getAttribute("schemeIdUri")) if (c = c.getAttribute("value")) switch (b) {
          case "urn:mpeg:dash:outputChannelPositionList:2012":
            return c.trim().split(/ +/).length;
          case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
          case "urn:dts:dash:audio_channel_configuration:2012":
            var d = parseInt(c, 10);
            if (!d) {
              shaka.log.warning("Channel parsing failure! Ignoring scheme and value",
                b, c);
              continue
            }
            return d;
          case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
          case "urn:dolby:dash:audio_channel_configuration:2011":
            d = parseInt(c, 16);
            if (!d) {
              shaka.log.warning("Channel parsing failure! Ignoring scheme and value", b, c);
              continue
            }
            for (a = 0; d;) d & 1 && ++a, d >>= 1;
            return a;
          default:
            shaka.log.warning("Unrecognized audio channel scheme:", b, c)
        }
      }
      return null
    };
    shaka.dash.DashParser.prototype.verifyRepresentation_ = function (a) {
      var b = shaka.util.ManifestParserUtils.ContentType;
      var c = a.segmentBase ? 1 : 0;
      c += a.segmentList ? 1 : 0;
      c += a.segmentTemplate ? 1 : 0;
      if (0 == c) {
        if (a.contentType == b.TEXT || a.contentType == b.APPLICATION) return !0;
        shaka.log.warning("Representation does not contain a segment information source:", "the Representation must contain one of SegmentBase, SegmentList,", 'SegmentTemplate, or explicitly indicate that it is "text".', a);
        return !1
      }
      1 != c && (shaka.log.warning("Representation contains multiple segment information sources:",
        "the Representation should only contain one of SegmentBase,", "SegmentList, or SegmentTemplate.", a), a.segmentBase ? (shaka.log.info("Using SegmentBase by default."), a.segmentList = null) : (goog.asserts.assert(a.segmentList, "There should be a SegmentList"), shaka.log.info("Using SegmentList by default.")), a.segmentTemplate = null);
      return !0
    };
    shaka.dash.DashParser.prototype.requestForTiming_ = function (a, b, c) {
      var d = this, e, f, g, h, k, l, m;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (n) {
        if (1 == n.nextAddress) return e = shaka.util.ManifestParserUtils.resolveUris(a, [b]), f = shaka.net.NetworkingEngine.makeRequest(e, d.config_.retryParameters), f.method = c, g = shaka.net.NetworkingEngine.RequestType.TIMING, h = d.playerInterface_.networkingEngine.request(g, f), d.operationManager_.manage(h), n.yield(h.promise, 2);
        k = n.yieldResult;
        if ("HEAD" == c) {
          if (!k.headers ||
            !k.headers.date) return shaka.log.warning("UTC timing response is missing", "expected date header"), n["return"](0);
          l = k.headers.date
        } else l = shaka.util.StringUtils.fromUTF8(k.data);
        m = Date.parse(l);
        return isNaN(m) ? (shaka.log.warning("Unable to parse date from UTC timing response"), n["return"](0)) : n["return"](m - Date.now())
      })
    };
    shaka.dash.DashParser.prototype.parseUtcTiming_ = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m, n;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (p) {
        switch (p.nextAddress) {
          case 1:
            d = b.map(function (a) {
              return {scheme: a.getAttribute("schemeIdUri"), value: a.getAttribute("value")}
            }), e = c.config_.dash.clockSyncUri, !d.length && e && d.push({
              scheme: "urn:mpeg:dash:utc:http-head:2014",
              value: e
            }), f = $jscomp.makeIterator(d), g = f.next();
          case 2:
            if (g.done) {
              p.jumpTo(4);
              break
            }
            h = g.value;
            p.setCatchFinallyBlocks(5);
            k = h.scheme;
            l = h.value;
            switch (k) {
              case "urn:mpeg:dash:utc:http-head:2014":
              case "urn:mpeg:dash:utc:http-head:2012":
                return p.jumpTo(7);
              case "urn:mpeg:dash:utc:http-xsdate:2014":
              case "urn:mpeg:dash:utc:http-iso:2014":
              case "urn:mpeg:dash:utc:http-xsdate:2012":
              case "urn:mpeg:dash:utc:http-iso:2012":
                return p.jumpTo(8);
              case "urn:mpeg:dash:utc:direct:2014":
              case "urn:mpeg:dash:utc:direct:2012":
                return m = Date.parse(l), p["return"](isNaN(m) ? 0 : m - Date.now());
              case "urn:mpeg:dash:utc:http-ntp:2014":
              case "urn:mpeg:dash:utc:ntp:2014":
              case "urn:mpeg:dash:utc:sntp:2014":
                shaka.log.alwaysWarn("NTP UTCTiming scheme is not supported");
                break;
              default:
                shaka.log.alwaysWarn("Unrecognized scheme in UTCTiming element", k)
            }
            p.jumpTo(9);
            break;
          case 7:
            return p.yield(c.requestForTiming_(a, l, "HEAD"), 10);
          case 10:
            return p["return"](p.yieldResult);
          case 8:
            return p.yield(c.requestForTiming_(a, l, "GET"), 11);
          case 11:
            return p["return"](p.yieldResult);
          case 9:
            p.leaveTryBlock(3);
            break;
          case 5:
            n = p.enterCatchBlock(), shaka.log.warning("Error fetching time from UTCTiming elem", n.message);
          case 3:
            g = f.next();
            p.jumpTo(2);
            break;
          case 4:
            return shaka.log.alwaysWarn("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"),
              p["return"](0)
        }
      })
    };
    shaka.dash.DashParser.prototype.parseEventStream_ = function (a, b, c) {
      var d = shaka.util.XmlUtils, e = d.parseNonNegativeInt, f = c.getAttribute("schemeIdUri") || "",
        g = c.getAttribute("value") || "", h = d.parseAttr(c, "timescale", e) || 1;
      c = $jscomp.makeIterator(d.findChildren(c, "Event"));
      for (var k = c.next(); !k.done; k = c.next()) {
        k = k.value;
        var l = d.parseAttr(k, "presentationTime", e) || 0, m = d.parseAttr(k, "duration", e) || 0;
        l = l / h + a;
        m = l + m / h;
        null != b && (l = Math.min(l, a + b), m = Math.min(m, a + b));
        k = {
          schemeIdUri: f, value: g, startTime: l, endTime: m,
          id: k.getAttribute("id") || "", eventElement: k
        };
        this.playerInterface_.onTimelineRegionAdded(k)
      }
    };
    shaka.dash.DashParser.prototype.requestInitSegment_ = function (a, b, c) {
      var d = this, e, f, g, h, k;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
        if (1 == l.nextAddress) return e = shaka.net.NetworkingEngine.RequestType.SEGMENT, f = shaka.util.Networking.createSegmentRequest(a, b, c, d.config_.retryParameters), g = d.playerInterface_.networkingEngine, h = g.request(e, f), d.operationManager_.manage(h), l.yield(h.promise, 2);
        k = l.yieldResult;
        return l["return"](k.data)
      })
    };
    shaka.dash.DashParser.guessContentType_ = function (a, b) {
      var c = shaka.util.MimeUtils.getFullType(a, b);
      return shaka.text.TextEngine.isTypeSupported(c) ? shaka.util.ManifestParserUtils.ContentType.TEXT : a.split("/")[0]
    };
    goog.exportSymbol("shaka.dash.DashParser", shaka.dash.DashParser);
    shaka.dash.DashParser.MIN_UPDATE_PERIOD_ = 3;
    shaka.media.ManifestParser.registerParserByExtension("mpd", function () {
      return new shaka.dash.DashParser
    });
    shaka.media.ManifestParser.registerParserByMime("application/dash+xml", function () {
      return new shaka.dash.DashParser
    });
    shaka.media.ManifestParser.registerParserByMime("video/vnd.mpeg.dash.mpd", function () {
      return new shaka.dash.DashParser
    });
    shaka.hls = {};
    shaka.hls.Playlist = function (a, b, c, d) {
      this.absoluteUri = a;
      this.type = b;
      this.tags = c;
      this.segments = d || null
    };
    shaka.hls.PlaylistType = {MASTER: 0, MEDIA: 1};
    shaka.hls.Tag = function (a, b, c, d) {
      this.id = a;
      this.name = b;
      this.attributes = c;
      this.value = void 0 === d ? null : d
    };
    shaka.hls.Tag.prototype.toString = function () {
      var a = function (a) {
        var b = isNaN(Number(a.value)) ? '"' + a.value + '"' : a.value;
        return a.name + "=" + b
      }, b = "#" + this.name;
      a = this.attributes ? this.attributes.map(a) : [];
      this.value && a.unshift(this.value);
      0 < a.length && (b += ":" + a.join(","));
      return b
    };
    shaka.hls.Tag.prototype.addAttribute = function (a) {
      this.attributes.push(a)
    };
    shaka.hls.Tag.prototype.getAttribute = function (a) {
      var b = this.attributes.filter(function (b) {
        return b.name == a
      });
      goog.asserts.assert(2 > b.length, "A tag should not have multiple attributes with the same name!");
      return b.length ? b[0] : null
    };
    shaka.hls.Tag.prototype.getAttributeValue = function (a, b) {
      var c = this.getAttribute(a);
      return c ? c.value : b || null
    };
    shaka.hls.Tag.prototype.getRequiredAttrValue = function (a) {
      var b = this.getAttribute(a);
      if (!b) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_REQUIRED_ATTRIBUTE_MISSING, a);
      return b.value
    };
    shaka.hls.Segment = function (a, b) {
      this.tags = b;
      this.absoluteUri = a
    };
    shaka.hls.Attribute = function (a, b) {
      this.name = a;
      this.value = b
    };
    shaka.hls.Utils = function () {
    };
    shaka.hls.Utils.filterTagsByName = function (a, b) {
      return a.filter(function (a) {
        return a.name == b
      })
    };
    shaka.hls.Utils.filterTagsByType = function (a, b) {
      return a.filter(function (a) {
        return a.getRequiredAttrValue("TYPE") == b
      })
    };
    shaka.hls.Utils.getFirstTagWithName = function (a, b) {
      var c = shaka.hls.Utils.filterTagsByName(a, b);
      return c.length ? c[0] : null
    };
    shaka.hls.Utils.getFirstTagWithNameAsNumber = function (a, b, c) {
      c = void 0 === c ? 0 : c;
      return (a = shaka.hls.Utils.getFirstTagWithName(a, b)) ? Number(a.value) : c
    };
    shaka.hls.Utils.constructAbsoluteUri = function (a, b) {
      return shaka.util.ManifestParserUtils.resolveUris([a], [b])[0]
    };
    shaka.hls.Utils.isComment = function (a) {
      return /^#(?!EXT)/m.test(a)
    };
    shaka.util.TextParser = function (a) {
      this.data_ = a;
      this.position_ = 0
    };
    shaka.util.TextParser.prototype.atEnd = function () {
      return this.position_ == this.data_.length
    };
    shaka.util.TextParser.prototype.readLine = function () {
      return this.readRegexReturnCapture_(/(.*?)(\n|$)/gm, 1)
    };
    shaka.util.TextParser.prototype.readWord = function () {
      return this.readRegexReturnCapture_(/[^ \t\n]*/gm, 0)
    };
    shaka.util.TextParser.prototype.skipWhitespace = function () {
      this.readRegex(/[ \t]+/gm)
    };
    shaka.util.TextParser.prototype.readRegex = function (a) {
      a = this.indexOf_(a);
      if (this.atEnd() || null == a || a.position != this.position_) return null;
      this.position_ += a.length;
      return a.results
    };
    shaka.util.TextParser.prototype.readRegexReturnCapture_ = function (a, b) {
      if (this.atEnd()) return null;
      var c = this.readRegex(a);
      return c ? c[b] : null
    };
    shaka.util.TextParser.prototype.indexOf_ = function (a) {
      goog.asserts.assert(a.global, "global flag should be set");
      a.lastIndex = this.position_;
      a = a.exec(this.data_);
      return null == a ? null : {position: a.index, length: a[0].length, results: a}
    };
    shaka.hls.ManifestTextParser = function () {
      this.globalId_ = 0
    };
    shaka.hls.ManifestTextParser.prototype.parsePlaylist = function (a, b) {
      var c = shaka.hls.ManifestTextParser.MEDIA_PLAYLIST_TAGS, d = shaka.hls.ManifestTextParser.SEGMENT_TAGS,
        e = shaka.util.StringUtils.fromUTF8(a);
      e = e.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim();
      var f = e.split(/\n+/m);
      if (!/^#EXTM3U($|[ \t\n])/m.test(f[0])) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_PLAYLIST_HEADER_MISSING);
      e = shaka.hls.PlaylistType.MASTER;
      for (var g =
        !0, h = $jscomp.makeIterator(f), k = h.next(); !k.done; k = h.next()) if (k = k.value, shaka.hls.Utils.isComment(k) || g) g = !1; else if (k = this.parseTag_(k), --this.globalId_, c.includes(k.name)) {
        e = shaka.hls.PlaylistType.MEDIA;
        break
      } else "EXT-X-STREAM-INF" == k.name && (g = !0);
      c = [];
      g = !0;
      h = $jscomp.makeIterator(shaka.util.Iterables.enumerate(f));
      for (k = h.next(); !k.done; k = h.next()) {
        var l = k.value;
        k = l.i;
        var m = l.item;
        l = l.next;
        if (shaka.hls.Utils.isComment(m) || g) g = !1; else {
          m = this.parseTag_(m);
          if (d.includes(m.name)) {
            if (e != shaka.hls.PlaylistType.MEDIA) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
              shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_INVALID_PLAYLIST_HIERARCHY);
            d = f.splice(k, f.length - k);
            d = this.parseSegments_(b, d, c);
            return new shaka.hls.Playlist(b, e, c, d)
          }
          c.push(m);
          "EXT-X-STREAM-INF" == m.name && (g = new shaka.hls.Attribute("URI", l), m.addAttribute(g), g = !0)
        }
      }
      return new shaka.hls.Playlist(b, e, c)
    };
    shaka.hls.ManifestTextParser.prototype.parseSegments_ = function (a, b, c) {
      var d = [], e = [], f = null;
      b = $jscomp.makeIterator(b);
      for (var g = b.next(); !g.done; g = b.next()) g = g.value, /^(#EXT)/.test(g) ? (g = this.parseTag_(g), shaka.hls.ManifestTextParser.MEDIA_PLAYLIST_TAGS.includes(g.name) ? c.push(g) : "EXT-X-MAP" == g.name ? f = g : e.push(g)) : shaka.hls.Utils.isComment(g) || (g = g.trim(), g = shaka.hls.Utils.constructAbsoluteUri(a, g), f && e.push(f), e = new shaka.hls.Segment(g, e), d.push(e), e = []);
      return d
    };
    shaka.hls.ManifestTextParser.prototype.parseTag_ = function (a) {
      return shaka.hls.ManifestTextParser.parseTag(this.globalId_++, a)
    };
    shaka.hls.ManifestTextParser.parseTag = function (a, b) {
      var c = b.match(/^#(EXT[^:]*)(?::(.*))?$/);
      if (!c) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.INVALID_HLS_TAG, b);
      var d = c[1], e = c[2];
      c = [];
      var f;
      if (e) {
        e = new shaka.util.TextParser(e);
        var g, h = e.readRegex(/^([^,=]+)(?:,|$)/g);
        h && (f = h[1]);
        for (h = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; g = e.readRegex(h);) g = new shaka.hls.Attribute(g[1], g[2] || g[3]), c.push(g)
      }
      return new shaka.hls.Tag(a,
        d, c, f)
    };
    shaka.hls.ManifestTextParser.MEDIA_PLAYLIST_TAGS = "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" ");
    shaka.hls.ManifestTextParser.SEGMENT_TAGS = "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP".split(" ");
    shaka.net.DataUriPlugin = function () {
    };
    shaka.net.DataUriPlugin.parse = function (a, b, c, d) {
      try {
        var e = shaka.net.DataUriPlugin.parseRaw(a);
        return shaka.util.AbortableOperation.completed({
          uri: a,
          originalUri: a,
          data: e.data,
          headers: {"content-type": e.contentType}
        })
      } catch (f) {
        return shaka.util.AbortableOperation.failed(f)
      }
    };
    shaka.net.DataUriPlugin.parseRaw = function (a) {
      var b = a.split(":");
      if (2 > b.length || "data" != b[0]) throw shaka.log.error("Bad data URI, failed to parse scheme"), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.MALFORMED_DATA_URI, a);
      b = b.slice(1).join(":").split(",");
      if (2 > b.length) throw shaka.log.error("Bad data URI, failed to extract encoding and MIME type"), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.NETWORK,
        shaka.util.Error.Code.MALFORMED_DATA_URI, a);
      var c = b[0];
      a = window.decodeURIComponent(b.slice(1).join(","));
      b = c.split(";");
      c = b[0];
      var d = !1;
      1 < b.length && "base64" == b[b.length - 1] && (d = !0, b.pop());
      return {data: d ? shaka.util.Uint8ArrayUtils.fromBase64(a) : shaka.util.StringUtils.toUTF8(a), contentType: c}
    };
    goog.exportSymbol("shaka.net.DataUriPlugin", shaka.net.DataUriPlugin);
    goog.exportProperty(shaka.net.DataUriPlugin, "parse", shaka.net.DataUriPlugin.parse);
    shaka.net.NetworkingEngine.registerScheme("data", shaka.net.DataUriPlugin.parse);
    shaka.hls.HlsParser = function () {
      var a = this;
      this.config_ = this.playerInterface_ = null;
      this.globalId_ = 1;
      this.globalVariables_ = new Map;
      this.groupIdToStreamInfosMap_ = new Map;
      this.variantUriSet_ = new Set;
      this.uriToStreamInfosMap_ = new Map;
      this.presentationTimeline_ = null;
      this.masterPlaylistUri_ = "";
      this.manifestTextParser_ = new shaka.hls.ManifestTextParser;
      this.updatePlaylistDelay_ = 0;
      this.updatePlaylistTimer_ = new shaka.util.Timer(function () {
        a.onUpdate_()
      });
      this.presentationType_ = shaka.hls.HlsParser.PresentationType_.VOD;
      this.manifest_ = null;
      this.maxTargetDuration_ = 0;
      this.minTargetDuration_ = Infinity;
      this.operationManager_ = new shaka.util.OperationManager;
      this.segmentsToNotifyByStream_ = [];
      this.groupIdToClosedCaptionsMap_ = new Map;
      this.aesEncrypted_ = !1;
      this.groupIdToCodecsMap_ = new Map;
      this.playlistStartTime_ = null;
      this.mapTagToInitSegmentRefMap_ = new Map;
      this.discontinuityToTso_ = new Map
    };
    shaka.hls.HlsParser.prototype.configure = function (a) {
      this.config_ = a
    };
    shaka.hls.HlsParser.prototype.start = function (a, b) {
      var c = this, d, e;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        if (1 == f.nextAddress) return goog.asserts.assert(c.config_, "Must call configure() before start()!"), c.playerInterface_ = b, f.yield(c.requestManifest_(a), 2);
        if (3 != f.nextAddress) return d = f.yieldResult, c.masterPlaylistUri_ = d.uri, goog.asserts.assert(d.data, "Response data should be non-null!"), f.yield(c.parseManifest_(d.data), 3);
        e = c.updatePlaylistDelay_;
        0 < e && c.updatePlaylistTimer_.tickAfter(e);
        goog.asserts.assert(c.manifest_, "Manifest should be non-null");
        return f["return"](c.manifest_)
      })
    };
    shaka.hls.HlsParser.prototype.stop = function () {
      this.updatePlaylistTimer_ && (this.updatePlaylistTimer_.stop(), this.updatePlaylistTimer_ = null);
      var a = [];
      this.operationManager_ && (a.push(this.operationManager_.destroy()), this.operationManager_ = null);
      this.config_ = this.playerInterface_ = null;
      this.variantUriSet_.clear();
      this.manifest_ = null;
      this.uriToStreamInfosMap_.clear();
      this.groupIdToStreamInfosMap_.clear();
      this.groupIdToCodecsMap_.clear();
      this.globalVariables_.clear();
      return Promise.all(a)
    };
    shaka.hls.HlsParser.prototype.update = function () {
      var a = this, b, c, d;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress) {
          if (!a.isLive_()) return e["return"]();
          b = [];
          a.playlistStartTime_ = null;
          c = Array.from(a.uriToStreamInfosMap_.values());
          return c.length ? e.yield(a.updateStream_(c[0]), 2) : e.jumpTo(2)
        }
        for (d = 1; d < c.length; d++) b.push(a.updateStream_(c[d]));
        return e.yield(Promise.all(b), 0)
      })
    };
    shaka.hls.HlsParser.prototype.updateStream_ = function (a) {
      var b = this, c, d, e, f, g, h, k, l, m, n;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (p) {
        if (1 == p.nextAddress) return c = shaka.hls.HlsParser.PresentationType_, d = a.absoluteMediaPlaylistUri, p.yield(b.requestManifest_(d), 2);
        if (3 != p.nextAddress) {
          e = p.yieldResult;
          f = b.manifestTextParser_.parsePlaylist(e.data, e.uri);
          if (f.type != shaka.hls.PlaylistType.MEDIA) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST,
            shaka.util.Error.Code.HLS_INVALID_PLAYLIST_HIERARCHY);
          g = shaka.hls.Utils.filterTagsByName(f.tags, "EXT-X-DEFINE");
          h = b.parseMediaVariables_(g);
          k = a.stream;
          return p.yield(b.createSegments_(a.verbatimMediaPlaylistUri, f, k.type, k.mimeType, a.mediaSequenceToStartTime, h), 3)
        }
        l = p.yieldResult;
        k.segmentIndex.merge(l);
        l.length && k.segmentIndex.evict(l[0].startTime);
        m = l[l.length - 1];
        goog.asserts.assert(m, "Should have segments!");
        if (n = shaka.hls.Utils.getFirstTagWithName(f.tags, "EXT-X-ENDLIST")) b.setPresentationType_(c.VOD),
          b.presentationTimeline_.setDuration(m.endTime);
        p.jumpToEnd()
      })
    };
    shaka.hls.HlsParser.prototype.onExpirationUpdated = function (a, b) {
    };
    shaka.hls.HlsParser.prototype.parseManifest_ = function (a) {
      var b = this, c, d, e, f, g, h, k, l, m, n, p, q, r, v, x, t;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (u) {
        switch (u.nextAddress) {
          case 1:
            c = shaka.hls.Utils;
            goog.asserts.assert(b.masterPlaylistUri_, "Master playlist URI must be set before calling parseManifest_!");
            d = b.manifestTextParser_.parsePlaylist(a, b.masterPlaylistUri_);
            if (d.type != shaka.hls.PlaylistType.MASTER) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST,
              shaka.util.Error.Code.HLS_MASTER_PLAYLIST_NOT_PROVIDED);
            e = c.filterTagsByName(d.tags, "EXT-X-DEFINE");
            b.parseMasterVariables_(e);
            f = c.filterTagsByName(d.tags, "EXT-X-MEDIA");
            g = c.filterTagsByName(d.tags, "EXT-X-STREAM-INF");
            b.parseCodecs_(g);
            return u.yield(b.createStreamInfosFromMediaTags_(f), 2);
          case 2:
            return b.parseClosedCaptions_(f), u.yield(b.createVariantsForTags_(g), 3);
          case 3:
            return h = u.yieldResult, u.yield(b.parseTexts_(f), 4);
          case 4:
            k = u.yieldResult;
            if (!b.playerInterface_) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
              shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.OPERATION_ABORTED);
            if (b.aesEncrypted_ && 0 == h.length) throw shaka.log.info("No stream is created, because we don't support AES-128", "encryption yet"), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_AES_128_ENCRYPTION_NOT_SUPPORTED);
            m = l = Infinity;
            n = $jscomp.makeIterator(b.uriToStreamInfosMap_.values());
            for (p = n.next(); !p.done; p = n.next()) q = p.value, l = Math.min(l, q.minTimestamp), "text" !=
            q.stream.type && (m = Math.min(m, q.maxTimestamp - q.minTimestamp));
            goog.asserts.assert(null == b.presentationTimeline_, "Presentation timeline created early!");
            b.createPresentationTimeline_();
            goog.asserts.assert(b.presentationTimeline_, "Presentation timeline not created!");
            if (b.isLive_()) b.updatePlaylistDelay_ = b.minTargetDuration_, r = shaka.hls.HlsParser.PresentationType_, b.presentationType_ == r.LIVE && (v = b.presentationTimeline_.getDelay(), isNaN(b.config_.availabilityWindowOverride) || (v = b.config_.availabilityWindowOverride),
              b.presentationTimeline_.setSegmentAvailabilityDuration(v)); else for (b.presentationTimeline_.setDuration(m), b.presentationTimeline_.offset(-l), x = $jscomp.makeIterator(b.uriToStreamInfosMap_.values()), p = x.next(); !p.done; p = x.next()) t = p.value, t.stream.segmentIndex.offset(-l), t.stream.segmentIndex.fit(0, m);
            b.manifest_ = {
              presentationTimeline: b.presentationTimeline_,
              variants: h,
              textStreams: k,
              offlineSessionIds: [],
              minBufferTime: 0
            };
            return u.yield(b.playerInterface_.filter(b.manifest_), 0)
        }
      })
    };
    shaka.hls.HlsParser.prototype.parseMasterVariables_ = function (a) {
      a = $jscomp.makeIterator(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        var c = b.value;
        b = c.getAttributeValue("NAME");
        c = c.getAttributeValue("VALUE");
        b && c && (this.globalVariables_.has(b) || this.globalVariables_.set(b, c))
      }
    };
    shaka.hls.HlsParser.prototype.parseMediaVariables_ = function (a) {
      var b = new Map;
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        var d = c.value;
        c = d.getAttributeValue("NAME");
        var e = d.getAttributeValue("VALUE");
        d = d.getAttributeValue("IMPORT");
        c && e && b.set(c, e);
        d && (c = this.globalVariables_.get(d)) && b.set(d, c)
      }
      return b
    };
    shaka.hls.HlsParser.prototype.parseCodecs_ = function (a) {
      var b = shaka.util.ManifestParserUtils.ContentType;
      a = $jscomp.makeIterator(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        var d = c.value, e = d.getAttributeValue("AUDIO");
        c = d.getAttributeValue("VIDEO");
        var f = d.getAttributeValue("SUBTITLES");
        d = this.getCodecsForVariantTag_(d);
        if (f) {
          var g = this.guessCodecsSafe_(b.TEXT, d);
          goog.asserts.assert(null != g, "Text codecs should be valid.");
          this.groupIdToCodecsMap_.set(f, g);
          shaka.util.ArrayUtils.remove(d, g)
        }
        e && (f = this.guessCodecs_(b.AUDIO,
          d), this.groupIdToCodecsMap_.set(e, f));
        c && (e = this.guessCodecs_(b.VIDEO, d), this.groupIdToCodecsMap_.set(c, e))
      }
    };
    shaka.hls.HlsParser.prototype.parseTexts_ = function (a) {
      var b = this, c, d, e, f, g, h, k, l, m, n, p, q;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (r) {
        if (1 == r.nextAddress) return c = shaka.hls.Utils.filterTagsByType(a, "SUBTITLES"), d = c.map(function (a) {
          var c, d, e;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
            if (1 == f.nextAddress) {
              if (c = b.config_.disableText) return f["return"](null);
              f.setCatchFinallyBlocks(2);
              return f.yield(b.createStreamInfoFromMediaTag_(a), 4)
            }
            if (2 != f.nextAddress) return d =
              f.yieldResult, goog.asserts.assert(d, "Should always have a streamInfo for text"), f["return"](d.stream);
            e = f.enterCatchBlock();
            if (b.config_.hls.ignoreTextStreamFailures) return f["return"](null);
            throw e;
          })
        }), r.yield(Promise.all(d), 2);
        e = r.yieldResult;
        f = $jscomp.makeIterator(c);
        for (g = f.next(); !g.done; g = f.next()) if (h = g.value, k = h.getRequiredAttrValue("GROUP-ID"), l = b.groupIdToCodecsMap_.get(k)) if (m = b.groupIdToStreamInfosMap_.get(k)) for (n = $jscomp.makeIterator(m), p = n.next(); !p.done; p = n.next()) q = p.value, q.stream.codecs =
          l;
        return r["return"](e.filter(function (a) {
          return a
        }))
      })
    };
    shaka.hls.HlsParser.prototype.createStreamInfosFromMediaTags_ = function (a) {
      var b = this, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) return a = a.filter(function (a) {
          var b = a.getAttributeValue("URI") || "";
          return "SUBTITLES" != a.getAttributeValue("TYPE") && "" != b
        }), a.length ? d.yield(b.createStreamInfoFromMediaTag_(a[0]), 2) : d.jumpTo(2);
        c = a.slice(1).map(function (a) {
          return b.createStreamInfoFromMediaTag_(a)
        });
        return d.yield(Promise.all(c), 0)
      })
    };
    shaka.hls.HlsParser.prototype.createVariantsForTags_ = function (a) {
      var b = this, c, d, e;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        if (1 == f.nextAddress) return c = a.map(function (a) {
          var c, d, e, f, g, p, q;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
            return 1 == h.nextAddress ? (c = a.getAttributeValue("FRAME-RATE"), d = Number(a.getRequiredAttrValue("BANDWIDTH")), e = a.getAttributeValue("RESOLUTION"), f = $jscomp.makeIterator(e ? e.split("x") : [null, null]), g = f.next().value, p = f.next().value,
              h.yield(b.createStreamInfosForVariantTag_(a, e, c), 2)) : (q = h.yieldResult) ? (goog.asserts.assert(q.audio.length || q.video.length, "We should have created a stream!"), h["return"](b.createVariants_(q.audio, q.video, d, g, p, c))) : h["return"]([])
          })
        }), f.yield(Promise.all(c), 2);
        d = f.yieldResult;
        e = d.reduce(shaka.util.Functional.collapseArrays, []);
        e = e.filter(function (a) {
          return null != a
        });
        return f["return"](e)
      })
    };
    shaka.hls.HlsParser.prototype.createStreamInfosForVariantTag_ = function (a, b, c) {
      var d = this, e, f, g, h, k, l, m, n, p, q, r, v, x, t;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (u) {
        if (1 == u.nextAddress) return e = shaka.util.ManifestParserUtils.ContentType, f = d.getCodecsForVariantTag_(a), g = a.getAttributeValue("AUDIO"), h = a.getAttributeValue("VIDEO"), goog.asserts.assert(null == g || null == h, "Unexpected: both video and audio described by media tags!"), l = (k = g || h) && d.groupIdToStreamInfosMap_.has(k) ? d.groupIdToStreamInfosMap_.get(k) :
          [], m = {
          audio: g ? l : [],
          video: h ? l : []
        }, shaka.log.debug("Guessing stream type for", a.toString()), p = !1, q = a.getRequiredAttrValue("URI"), r = m.audio.find(function (a) {
          return a && a.verbatimMediaPlaylistUri == q
        }), v = d.guessCodecsSafe_(e.VIDEO, f), x = b || c || v, 1 != f.length || x ? !l.length && 1 < f.length ? (shaka.log.debug("Guessing multiplexed audio+video."), n = e.VIDEO, f = [f.join(",")]) : m.audio.length && r ? (shaka.log.debug("Guessing audio-only."), n = e.AUDIO, p = !0) : m.video.length ? (shaka.log.debug("Guessing audio-only."), n = e.AUDIO) : (shaka.log.debug("Guessing video-only."),
          n = e.VIDEO) : (n = e.AUDIO, shaka.log.debug("Guessing audio-only.")), p ? u.jumpTo(2) : u.yield(d.createStreamInfoFromVariantTag_(a, f, n), 3);
        2 != u.nextAddress && (t = u.yieldResult);
        if (t) m[t.stream.type] = [t]; else if (null === t) return shaka.log.debug("streamInfo is null"), u["return"](null);
        d.filterLegacyCodecs_(m);
        return u["return"](m)
      })
    };
    shaka.hls.HlsParser.prototype.getCodecsForVariantTag_ = function (a) {
      var b = a.getAttributeValue("CODECS", "avc1.42E01E,mp4a.40.2").split(/\s*,\s*/);
      a = new Set;
      var c = [];
      b = $jscomp.makeIterator(b);
      for (var d = b.next(); !d.done; d = b.next()) {
        d = d.value;
        var e = shaka.util.MimeUtils.getCodecBase(d);
        a.has(e) ? shaka.log.debug("Ignoring duplicate codec") : (c.push(d), a.add(e))
      }
      return c
    };
    shaka.hls.HlsParser.prototype.getChannelsCount_ = function (a) {
      a = a.getAttributeValue("CHANNELS");
      if (!a) return null;
      a = a.split("/")[0];
      return parseInt(a, 10)
    };
    shaka.hls.HlsParser.prototype.getClosedCaptions_ = function (a, b) {
      var c = shaka.util.ManifestParserUtils.ContentType, d = a.getAttributeValue("CLOSED-CAPTIONS");
      return b == c.VIDEO && d && "NONE" != d ? this.groupIdToClosedCaptionsMap_.get(d) : null
    };
    shaka.hls.HlsParser.prototype.getLanguage_ = function (a) {
      var b = shaka.util.LanguageUtils;
      a = a.getAttributeValue("LANGUAGE") || "und";
      return b.normalize(a)
    };
    shaka.hls.HlsParser.prototype.getType_ = function (a) {
      a = a.getRequiredAttrValue("TYPE").toLowerCase();
      "subtitles" == a && (a = shaka.util.ManifestParserUtils.ContentType.TEXT);
      return a
    };
    shaka.hls.HlsParser.prototype.filterLegacyCodecs_ = function (a) {
      a = $jscomp.makeIterator(a.audio.concat(a.video));
      for (var b = a.next(); !b.done; b = a.next()) if (b = b.value) {
        var c = b.stream.codecs.split(",");
        c = c.filter(function (a) {
          return "mp4a.40.34" != a
        });
        b.stream.codecs = c.join(",")
      }
    };
    shaka.hls.HlsParser.prototype.createVariants_ = function (a, b, c, d, e, f) {
      for (var g = shaka.util.ManifestParserUtils.ContentType, h = shaka.media.DrmEngine, k = $jscomp.makeIterator(b), l = k.next(); !l.done; l = k.next()) this.addVideoAttributes_(l.value.stream, d, e, f);
      d = this.config_.disableAudio;
      if (!a.length || d) a = [null];
      d = this.config_.disableVideo;
      if (!b.length || d) b = [null];
      d = [];
      a = $jscomp.makeIterator(a);
      for (e = a.next(); !e.done; e = a.next()) for (e = e.value, f = $jscomp.makeIterator(b), k = f.next(); !k.done; k = f.next()) {
        var m = k.value;
        k = e ? e.stream : null;
        l = m ? m.stream : null;
        var n = e ? e.stream.drmInfos : null, p = m ? m.stream.drmInfos : null;
        m = (m ? m.verbatimMediaPlaylistUri : "") + " - " + (e ? e.verbatimMediaPlaylistUri : "");
        k && l && !h.areDrmCompatible(n, p) ? shaka.log.warning("Incompatible DRM info in HLS variant.  Skipping.") : this.variantUriSet_.has(m) ? shaka.log.debug("Skipping variant which only differs in text streams.") : (goog.asserts.assert(!k || k.type == g.AUDIO, "Audio parameter mismatch!"), goog.asserts.assert(!l || l.type == g.VIDEO, "Video parameter mismatch!"),
          k = {
            id: this.globalId_++,
            language: k ? k.language : "und",
            primary: !!k && k.primary || !!l && l.primary,
            audio: k,
            video: l,
            bandwidth: c,
            allowedByApplication: !0,
            allowedByKeySystem: !0
          }, d.push(k), this.variantUriSet_.add(m))
      }
      return d
    };
    shaka.hls.HlsParser.prototype.parseClosedCaptions_ = function (a) {
      a = shaka.hls.Utils.filterTagsByType(a, "CLOSED-CAPTIONS");
      a = $jscomp.makeIterator(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        var c = b.value;
        goog.asserts.assert("EXT-X-MEDIA" == c.name, "Should only be called on media tags!");
        b = this.getLanguage_(c);
        var d = c.getRequiredAttrValue("GROUP-ID");
        c = c.getRequiredAttrValue("INSTREAM-ID");
        this.groupIdToClosedCaptionsMap_.get(d) || this.groupIdToClosedCaptionsMap_.set(d, new Map);
        this.groupIdToClosedCaptionsMap_.get(d).set(c,
          b)
      }
    };
    shaka.hls.HlsParser.prototype.createStreamInfoFromMediaTag_ = function (a) {
      var b = this, c, d, e, f, g, h, k, l, m, n, p, q;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (r) {
        if (1 == r.nextAddress) {
          goog.asserts.assert("EXT-X-MEDIA" == a.name, "Should only be called on media tags!");
          c = a.getRequiredAttrValue("GROUP-ID");
          d = "";
          e = b.getType_(a);
          e != shaka.util.ManifestParserUtils.ContentType.TEXT && c && b.groupIdToCodecsMap_.has(c) && (d = b.groupIdToCodecsMap_.get(c));
          f = b.variableSubstitution_(a.getRequiredAttrValue("URI"), b.globalVariables_);
          if (b.uriToStreamInfosMap_.has(f)) return r["return"](b.uriToStreamInfosMap_.get(f));
          g = b.getLanguage_(a);
          h = a.getAttributeValue("NAME");
          k = a.getAttribute("DEFAULT");
          l = a.getAttribute("AUTOSELECT");
          m = !!k || !!l;
          n = "audio" == e ? b.getChannelsCount_(a) : null;
          p = a.getAttributeValue("CHARACTERISTICS");
          return r.yield(b.createStreamInfo_(f, d, e, g, m, h, n, null, p), 2)
        }
        q = r.yieldResult;
        b.groupIdToStreamInfosMap_.has(c) ? b.groupIdToStreamInfosMap_.get(c).push(q) : b.groupIdToStreamInfosMap_.set(c, [q]);
        if (null == q) return r["return"](null);
        if (b.uriToStreamInfosMap_.has(f)) return r["return"](b.uriToStreamInfosMap_.get(f));
        b.uriToStreamInfosMap_.set(f, q);
        return r["return"](q)
      })
    };
    shaka.hls.HlsParser.prototype.createStreamInfoFromVariantTag_ = function (a, b, c) {
      var d = this, e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        if (1 == k.nextAddress) {
          goog.asserts.assert("EXT-X-STREAM-INF" == a.name, "Should only be called on variant tags!");
          e = d.variableSubstitution_(a.getRequiredAttrValue("URI"), d.globalVariables_);
          if (d.uriToStreamInfosMap_.has(e)) return k["return"](d.uriToStreamInfosMap_.get(e));
          f = d.getClosedCaptions_(a, c);
          g = d.guessCodecs_(c, b);
          return k.yield(d.createStreamInfo_(e,
            g, c, "und", !1, null, null, f, null), 2)
        }
        h = k.yieldResult;
        if (null == h) return k["return"](null);
        if (d.uriToStreamInfosMap_.has(e)) return k["return"](d.uriToStreamInfosMap_.get(e));
        d.uriToStreamInfosMap_.set(e, h);
        return k["return"](h)
      })
    };
    shaka.hls.HlsParser.prototype.createStreamInfo_ = function (a, b, c, d, e, f, g, h, k) {
      var l = this, m, n, p, q, r, v, x, t, u, w, y, C, z, B, A, G, H, F, D, E, M, K, N, L, J, O, P, R, S, T, U, Q, V;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (I) {
        switch (I.nextAddress) {
          case 1:
            return m = shaka.hls.Utils.constructAbsoluteUri(l.masterPlaylistUri_, a), I.yield(l.requestManifest_(m), 2);
          case 2:
            n = I.yieldResult;
            m = n.uri;
            p = l.manifestTextParser_.parsePlaylist(n.data, m);
            if (p.type != shaka.hls.PlaylistType.MEDIA) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
              shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_INVALID_PLAYLIST_HIERARCHY);
            q = [];
            if (p.segments) for (r = $jscomp.makeIterator(p.segments), v = r.next(); !v.done; v = r.next()) x = v.value, t = shaka.hls.Utils.filterTagsByName(x.tags, "EXT-X-KEY"), q.push.apply(q, $jscomp.arrayFromIterable(t));
            u = !1;
            w = [];
            y = new Set;
            C = $jscomp.makeIterator(q);
            for (z = C.next(); !z.done; z = C.next()) if (B = z.value, A = B.getRequiredAttrValue("METHOD"), "NONE" != A) {
              u = !0;
              if ("AES-128" == A) return shaka.log.warning("Unsupported HLS Encryption",
                A), l.aesEncrypted_ = !0, I["return"](null);
              G = B.getRequiredAttrValue("KEYFORMAT");
              if (F = (H = shaka.hls.HlsParser.KEYFORMATS_TO_DRM_PARSERS_[G]) ? H(B) : null) {
                if (F.keyIds) for (D = $jscomp.makeIterator(F.keyIds), E = D.next(); !E.done; E = D.next()) M = E.value, y.add(M);
                w.push(F)
              } else shaka.log.warning("Unsupported HLS KEYFORMAT", G)
            }
            if (u && !w.length) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_KEYFORMATS_NOT_SUPPORTED);
            K = shaka.hls.Utils.filterTagsByName(p.tags,
              "EXT-X-DEFINE");
            N = l.parseMediaVariables_(K);
            goog.asserts.assert(null != p.segments, "Media playlist should have segments!");
            l.determinePresentationType_(p);
            return I.yield(l.guessMimeType_(c, b, p, N), 3);
          case 3:
            return L = I.yieldResult, shaka.hls.HlsParser.RAW_FORMATS_.includes(L) && (b = ""), J = new Map, I.setCatchFinallyBlocks(4), I.yield(l.createSegments_(a, p, c, L, J, N), 6);
          case 6:
            O = I.yieldResult;
            I.leaveTryBlock(5);
            break;
          case 4:
            P = I.enterCatchBlock();
            if (P.code == shaka.util.Error.Code.HLS_INTERNAL_SKIP_STREAM) return shaka.log.alwaysWarn("Skipping unsupported HLS stream",
              L, a), I["return"](null);
            throw P;
          case 5:
            return R = O[0].startTime, S = O[O.length - 1].endTime, T = new shaka.media.SegmentIndex(O), U = c == shaka.util.ManifestParserUtils.ContentType.TEXT ? shaka.util.ManifestParserUtils.TextStreamKind.SUBTITLE : void 0, Q = [], k && Q.push(k), V = {
              id: l.globalId_++,
              originalId: f,
              createSegmentIndex: function () {
                return Promise.resolve()
              },
              segmentIndex: T,
              mimeType: L,
              codecs: b,
              kind: U,
              encrypted: u,
              drmInfos: w,
              keyIds: y,
              language: d,
              label: f,
              type: c,
              primary: e,
              trickModeVideo: null,
              emsgSchemeIdUris: null,
              frameRate: void 0,
              pixelAspectRatio: void 0,
              width: void 0,
              height: void 0,
              bandwidth: void 0,
              roles: Q,
              channelsCount: g,
              audioSamplingRate: null,
              closedCaptions: h
            }, I["return"]({
              stream: V,
              verbatimMediaPlaylistUri: a,
              absoluteMediaPlaylistUri: m,
              minTimestamp: R,
              maxTimestamp: S,
              mediaSequenceToStartTime: J
            })
        }
      })
    };
    shaka.hls.HlsParser.prototype.determinePresentationType_ = function (a) {
      var b = shaka.hls.HlsParser.PresentationType_,
        c = shaka.hls.Utils.getFirstTagWithName(a.tags, "EXT-X-PLAYLIST-TYPE"),
        d = shaka.hls.Utils.getFirstTagWithName(a.tags, "EXT-X-ENDLIST");
      d = c && "VOD" == c.value || d;
      c = c && "EVENT" == c.value && !d;
      c = !d && !c;
      d ? this.setPresentationType_(b.VOD) : (c ? this.setPresentationType_(b.LIVE) : this.setPresentationType_(b.EVENT), a = this.getRequiredTag_(a.tags, "EXT-X-TARGETDURATION"), a = Number(a.value), this.maxTargetDuration_ =
        Math.max(a, this.maxTargetDuration_), this.minTargetDuration_ = Math.min(a, this.minTargetDuration_))
    };
    shaka.hls.HlsParser.prototype.createPresentationTimeline_ = function () {
      this.isLive_() ? (this.presentationTimeline_ = new shaka.media.PresentationTimeline(0, this.config_.defaultPresentationDelay || 3 * this.maxTargetDuration_), this.presentationTimeline_.setStatic(!1)) : (this.presentationTimeline_ = new shaka.media.PresentationTimeline(null, 0), this.presentationTimeline_.setStatic(!0));
      this.notifySegments_();
      goog.asserts.assert(!this.presentationTimeline_.usingPresentationStartTime(), "We should not be using the presentation start time in HLS!")
    };
    shaka.hls.HlsParser.prototype.getInitSegmentReference_ = function (a, b, c) {
      b = shaka.hls.Utils.getFirstTagWithName(b, "EXT-X-MAP");
      if (!b) return null;
      var d = b.getRequiredAttrValue("URI");
      c = this.variableSubstitution_(shaka.hls.Utils.constructAbsoluteUri(a, d), c);
      a = [c, b.getAttributeValue("BYTERANGE", "")].join("-");
      this.mapTagToInitSegmentRefMap_.has(a) || (b = this.createInitSegmentReference_(c, b), this.mapTagToInitSegmentRefMap_.set(a, b));
      return this.mapTagToInitSegmentRefMap_.get(a)
    };
    shaka.hls.HlsParser.prototype.createInitSegmentReference_ = function (a, b) {
      var c = 0, d = null, e = b.getAttributeValue("BYTERANGE");
      e && (c = e.split("@"), d = Number(c[0]), c = Number(c[1]), d = c + d - 1);
      return new shaka.media.InitSegmentReference(function () {
        return [a]
      }, c, d)
    };
    shaka.hls.HlsParser.prototype.createSegmentReference_ = function (a, b, c, d, e, f) {
      var g = c.tags, h = this.variableSubstitution_(c.absoluteUri, f);
      c = this.getRequiredTag_(g, "EXTINF").value.split(",");
      c = d + Number(c[0]);
      f = 0;
      var k = null;
      if (g = shaka.hls.Utils.getFirstTagWithName(g, "EXT-X-BYTERANGE")) f = g.value.split("@"), g = Number(f[0]), f[1] ? f = Number(f[1]) : (goog.asserts.assert(b, "Cannot refer back to previous HLS segment!"), f = b.endByte + 1), k = f + g - 1;
      return new shaka.media.SegmentReference(d, c, function () {
          return [h]
        }, f, k, a,
        e, 0, Infinity)
    };
    shaka.hls.HlsParser.prototype.notifySegments_ = function () {
      if (this.presentationTimeline_) {
        for (var a = $jscomp.makeIterator(this.segmentsToNotifyByStream_), b = a.next(); !b.done; b = a.next()) this.presentationTimeline_.notifySegments(b.value);
        this.segmentsToNotifyByStream_ = []
      }
    };
    shaka.hls.HlsParser.prototype.createSegments_ = function (a, b, c, d, e, f) {
      var g = this, h, k, l, m, n, p, q, r, v, x, t, u, w, y, C, z, B, A, G, H, F;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (D) {
        switch (D.nextAddress) {
          case 1:
            h = b.segments;
            goog.asserts.assert(h.length, "Playlist should have segments!");
            l = shaka.hls.Utils.getFirstTagWithNameAsNumber(b.tags, "EXT-X-MEDIA-SEQUENCE", 0);
            if (g.isLive_() && e.has(l)) {
              m = e.get(l);
              D.jumpTo(2);
              break
            }
            if (null != g.playlistStartTime_) {
              D.jumpTo(3);
              break
            }
            k = g.getInitSegmentReference_(b.absoluteUri,
              h[0].tags, f);
            goog.asserts.assert(c != shaka.util.ManifestParserUtils.ContentType.TEXT, "Should only get start time from audio or video streams");
            n = g;
            return D.yield(g.getStartTime_(a, k, d, l, !1, h[0], f), 4);
          case 4:
            n.playlistStartTime_ = D.yieldResult;
          case 3:
            m = g.playlistStartTime_;
          case 2:
            p = h[0].absoluteUri, shaka.log.debug("First segment", p.split("/").pop(), "starts at", m), q = shaka.hls.Utils.getFirstTagWithNameAsNumber(b.tags, "EXT-X-DISCONTINUITY-SEQUENCE"), r = g.discontinuityToTso_.get(q) || 0, v = [], x = function (a) {
              return shaka.util.Iterables.enumerate(a)
            },
              t = $jscomp.makeIterator(x(h)), u = t.next();
          case 5:
            if (u.done) {
              D.jumpTo(7);
              break
            }
            y = w = u.value;
            C = y.i;
            z = y.item;
            B = v[v.length - 1];
            A = 0 == C ? m : B.endTime;
            G = l + C;
            e.set(G, A);
            k = g.getInitSegmentReference_(b.absoluteUri, z.tags, f);
            H = shaka.hls.Utils.getFirstTagWithName(z.tags, "EXT-X-DISCONTINUITY");
            if (!H) {
              D.jumpTo(8);
              break
            }
            q++;
            return D.yield(g.getTimestampOffset_(q, a, k, d, G, z, f, A), 9);
          case 9:
            r = D.yieldResult;
          case 8:
            F = g.createSegmentReference_(k, B, z, A, r, f);
            v.push(F);
            u = t.next();
            D.jumpTo(5);
            break;
          case 7:
            return g.segmentsToNotifyByStream_.push(v),
              g.notifySegments_(), D["return"](v)
        }
      })
    };
    shaka.hls.HlsParser.prototype.getTimestampOffset_ = function (a, b, c, d, e, f, g, h) {
      var k = this, l, m;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (n) {
        if (1 == n.nextAddress) return l = 0, k.discontinuityToTso_.has(a) ? (l = k.discontinuityToTso_.get(a), n.jumpTo(2)) : n.yield(k.getStartTime_(b, c, d, e, !0, f, g), 3);
        2 != n.nextAddress && (m = n.yieldResult, l = h - m, shaka.log.v1("Segment timestampOffset =", l), k.discontinuityToTso_.set(a, l));
        return n["return"](l)
      })
    };
    shaka.hls.HlsParser.prototype.fetchStartOfSegment_ = function (a) {
      var b = this, c, d, e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        switch (k.nextAddress) {
          case 1:
            c = shaka.net.NetworkingEngine.RequestType.SEGMENT;
            d = shaka.util.Networking.createSegmentRequest(a.getUris(), a.startByte, a.endByte, b.config_.retryParameters);
            if (b.config_.hls.useFullSegmentsForStartTime) return k["return"](b.makeNetworkRequest_(d, c));
            e = shaka.util.Networking.createSegmentRequest(a.getUris(), a.startByte, a.startByte +
              shaka.hls.HlsParser.START_OF_SEGMENT_SIZE_ - 1, b.config_.retryParameters);
            k.setCatchFinallyBlocks(2);
            return k.yield(b.makeNetworkRequest_(e, c), 4);
          case 4:
            return f = k.yieldResult, k["return"](f);
          case 2:
            g = k.enterCatchBlock();
            if (g.code == shaka.util.Error.Code.OPERATION_ABORTED) throw g;
            shaka.log.alwaysWarn("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.", e.uris[0]);
            return k.yield(b.makeNetworkRequest_(d,
              c), 5);
          case 5:
            return h = k.yieldResult, k["return"](h)
        }
      })
    };
    shaka.hls.HlsParser.prototype.getStartTime_ = function (a, b, c, d, e, f, g) {
      var h = this, k, l, m, n, p, q, r, v;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (x) {
        switch (x.nextAddress) {
          case 1:
            k = h.createSegmentReference_(b, null, f, 0, 0, g);
            if (h.manifest_ && !e) {
              l = h.uriToStreamInfosMap_.get(a);
              m = l.mediaSequenceToStartTime.get(d);
              if (void 0 != m) return shaka.log.v1("Found segment start time in previous manifest", m), x["return"](m);
              shaka.log.debug("Unable to find segment start time in previous manifest!")
            }
            shaka.log.v1("Fetching segment to find start time");
            c =
              c.toLowerCase();
            if (shaka.hls.HlsParser.RAW_FORMATS_.includes(c)) throw shaka.log.alwaysWarn("Raw formats are not yet supported.  Skipping " + c), new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_INTERNAL_SKIP_STREAM);
            if ("video/webm" == c) throw shaka.log.alwaysWarn("WebM in HLS is not yet supported.  Skipping."), new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_INTERNAL_SKIP_STREAM);
            if ("video/mp4" != c && "audio/mp4" != c) {
              x.jumpTo(2);
              break
            }
            n = [h.fetchStartOfSegment_(k)];
            b && n.push(h.fetchStartOfSegment_(b));
            return x.yield(Promise.all(n), 3);
          case 3:
            return p = x.yieldResult, q = p[0], r = p[1] || p[0], x["return"](h.getStartTimeFromMp4Segment_(a, q.uri, q.data, r.data));
          case 2:
            if ("video/mp2t" != c) {
              x.jumpTo(4);
              break
            }
            return x.yield(h.fetchStartOfSegment_(k), 5);
          case 5:
            return v = x.yieldResult, goog.asserts.assert(v.data, "Should have a response body!"), x["return"](h.getStartTimeFromTsSegment_(a, v.uri, v.data));
          case 4:
            throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_COULD_NOT_PARSE_SEGMENT_START_TIME, a);
        }
      })
    };
    shaka.hls.HlsParser.prototype.getStartTimeFromMp4Segment_ = function (a, b, c, d) {
      var e = shaka.util.Mp4Parser, f = 0;
      (new e).box("moov", e.children).box("trak", e.children).box("mdia", e.children).fullBox("mdhd", function (a) {
        goog.asserts.assert(0 == a.version || 1 == a.version, "MDHD version can only be 0 or 1");
        a.reader.skip(0 == a.version ? 8 : 16);
        f = a.reader.readUint32();
        a.parser.stop()
      }).parse(d, !0);
      if (!f) throw shaka.log.error("Unable to find timescale in init segment!"), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
        shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_COULD_NOT_PARSE_SEGMENT_START_TIME, a, b);
      var g = 0, h = !1;
      (new e).box("moof", e.children).box("traf", e.children).fullBox("tfdt", function (a) {
        goog.asserts.assert(0 == a.version || 1 == a.version, "TFDT version can only be 0 or 1");
        g = (0 == a.version ? a.reader.readUint32() : a.reader.readUint64()) / f;
        h = !0;
        a.parser.stop()
      }).parse(c, !0);
      if (!h) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_COULD_NOT_PARSE_SEGMENT_START_TIME,
        a, b);
      return g
    };
    shaka.hls.HlsParser.prototype.getStartTimeFromTsSegment_ = function (a, b, c) {
      var d = new shaka.util.DataViewReader(c, shaka.util.DataViewReader.Endianness.BIG_ENDIAN), e = function () {
        throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_COULD_NOT_PARSE_SEGMENT_START_TIME, a, b);
      }, f = 0, g = 0;
      for (c = function () {
        d.seek(f + 188);
        g = d.readUint8();
        71 != g && (d.seek(f + 192), g = d.readUint8());
        71 != g && (d.seek(f + 204), g = d.readUint8());
        71 != g && e();
        d.rewind(1)
      }; ;) {
        f = d.getPosition();
        g = d.readUint8();
        71 != g && e();
        var h = d.readUint16();
        if (8191 == (h & 8191)) c(); else if (h & 16384) if (h = (d.readUint8() & 48) >> 4, 0 != h && 2 != h || e(), 3 == h && (h = d.readUint8(), d.skip(h)), 1 != d.readUint32() >> 8) c(); else {
          d.skip(3);
          c = d.readUint8() >> 6;
          0 != c && 1 != c || e();
          h = d.readUint8();
          0 == h && e();
          2 == c ? goog.asserts.assert(5 == h, "Bad PES header?") : 3 == c && goog.asserts.assert(10 == h, "Bad PES header?");
          c = d.readUint8();
          h = d.readUint16();
          var k = d.readUint16();
          return (1073741824 * ((c & 14) >> 1) + ((h & 65534) << 14 | (k & 65534) >> 1)) / shaka.hls.HlsParser.TS_TIMESCALE_
        } else c()
      }
    };
    shaka.hls.HlsParser.prototype.guessCodecs_ = function (a, b) {
      if (1 == b.length) return b[0];
      var c = this.guessCodecsSafe_(a, b);
      if (null != c) return c;
      throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_COULD_NOT_GUESS_CODECS, b);
    };
    shaka.hls.HlsParser.prototype.guessCodecsSafe_ = function (a, b) {
      for (var c = $jscomp.makeIterator(shaka.hls.HlsParser.CODEC_REGEXPS_BY_CONTENT_TYPE_[a]), d = c.next(); !d.done; d = c.next()) {
        d = d.value;
        for (var e = $jscomp.makeIterator(b), f = e.next(); !f.done; f = e.next()) if (f = f.value, d.test(f.trim())) return f.trim()
      }
      return a == shaka.util.ManifestParserUtils.ContentType.TEXT ? "" : null
    };
    shaka.hls.HlsParser.prototype.variableSubstitution_ = function (a, b) {
      var c = String(a).replace(/%7B/g, "{").replace(/%7D/g, "}"), d = c.match(/{\$\w*}/g);
      if (d) {
        d = $jscomp.makeIterator(d);
        for (var e = d.next(); !e.done; e = d.next()) {
          e = e.value;
          var f = e.slice(2, e.length - 1), g = b.get(f);
          if (g) c = c.replace(e, g); else throw shaka.log.error("A variable has been found that is not declared", f), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_VARIABLE_NOT_FOUND,
            f);
        }
      }
      return c
    };
    shaka.hls.HlsParser.prototype.guessMimeType_ = function (a, b, c, d) {
      var e = this, f, g, h, k, l, m, n, p, q, r, v;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (x) {
        if (1 == x.nextAddress) {
          f = shaka.hls.HlsParser;
          g = shaka.util.ManifestParserUtils.ContentType;
          h = shaka.net.NetworkingEngine.RequestType.SEGMENT;
          goog.asserts.assert(c.segments.length, "Playlist should have segments!");
          k = e.variableSubstitution_(c.segments[0].absoluteUri, d);
          l = new goog.Uri(k);
          m = l.getPath().split(".").pop();
          n = f.EXTENSION_MAP_BY_CONTENT_TYPE_[a];
          if (p =
            n[m]) return x["return"](p);
          if (a == g.TEXT) return b && "vtt" != b && "wvtt" != b ? x["return"]("application/mp4") : x["return"]("text/vtt");
          q = shaka.net.NetworkingEngine.makeRequest([k], e.config_.retryParameters);
          q.method = "HEAD";
          return x.yield(e.makeNetworkRequest_(q, h), 2)
        }
        r = x.yieldResult;
        v = r.headers["content-type"];
        if (!v) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_COULD_NOT_GUESS_MIME_TYPE, m);
        return x["return"](v.split(";")[0])
      })
    };
    shaka.hls.HlsParser.prototype.getRequiredTag_ = function (a, b) {
      var c = shaka.hls.Utils.getFirstTagWithName(a, b);
      if (!c) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.MANIFEST, shaka.util.Error.Code.HLS_REQUIRED_TAG_MISSING, b);
      return c
    };
    shaka.hls.HlsParser.prototype.addVideoAttributes_ = function (a, b, c, d) {
      a && (a.width = Number(b) || void 0, a.height = Number(c) || void 0, a.frameRate = Number(d) || void 0)
    };
    shaka.hls.HlsParser.prototype.requestManifest_ = function (a) {
      var b = shaka.net.NetworkingEngine.RequestType.MANIFEST;
      a = shaka.net.NetworkingEngine.makeRequest([a], this.config_.retryParameters);
      return this.makeNetworkRequest_(a, b)
    };
    shaka.hls.HlsParser.prototype.onUpdate_ = function () {
      var a = this, b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) {
          shaka.log.info("Updating manifest...");
          goog.asserts.assert(0 < a.updatePlaylistDelay_, "We should only call |onUpdate_| when we are suppose to be updating.");
          if (!a.playerInterface_) return d["return"]();
          d.setCatchFinallyBlocks(2);
          return d.yield(a.update(), 4)
        }
        if (2 != d.nextAddress) return b = a.updatePlaylistDelay_, a.updatePlaylistTimer_.tickAfter(b), d.leaveTryBlock(0);
        c = d.enterCatchBlock();
        if (!a.playerInterface_) return d["return"]();
        goog.asserts.assert(c instanceof shaka.util.Error, "Should only receive a Shaka error");
        c.severity = shaka.util.Error.Severity.RECOVERABLE;
        a.playerInterface_.onError(c);
        a.updatePlaylistTimer_.tickAfter(.1);
        d.jumpToEnd()
      })
    };
    shaka.hls.HlsParser.prototype.isLive_ = function () {
      return this.presentationType_ != shaka.hls.HlsParser.PresentationType_.VOD
    };
    shaka.hls.HlsParser.prototype.setPresentationType_ = function (a) {
      this.presentationType_ = a;
      this.presentationTimeline_ && this.presentationTimeline_.setStatic(!this.isLive_());
      this.isLive_() || this.updatePlaylistTimer_.stop()
    };
    shaka.hls.HlsParser.prototype.makeNetworkRequest_ = function (a, b) {
      if (!this.operationManager_) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.PLAYER, shaka.util.Error.Code.OPERATION_ABORTED);
      var c = this.playerInterface_.networkingEngine.request(b, a);
      this.operationManager_.manage(c);
      return c.promise
    };
    shaka.hls.HlsParser.widevineDrmParser_ = function (a) {
      var b = a.getRequiredAttrValue("METHOD"), c = ["SAMPLE-AES", "SAMPLE-AES-CTR"];
      if (!c.includes(b)) return shaka.log.error("Widevine in HLS is only supported with [", c.join(", "), "], not", b), null;
      b = a.getRequiredAttrValue("URI");
      b = shaka.net.DataUriPlugin.parseRaw(b);
      b = shaka.util.BufferUtils.toUint8(b.data);
      b = shaka.util.ManifestParserUtils.createDrmInfo("com.widevine.alpha", [{initDataType: "cenc", initData: b}]);
      if (a = a.getAttributeValue("KEYID")) a = a.toLowerCase(),
        goog.asserts.assert(a.startsWith("0x"), "Incorrect KEYID format!"), b.keyIds = new Set([a.substr(2)]);
      return b
    };
    goog.exportSymbol("shaka.hls.HlsParser", shaka.hls.HlsParser);
    shaka.hls.HlsParser.VIDEO_CODEC_REGEXPS_ = [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/];
    shaka.hls.HlsParser.AUDIO_CODEC_REGEXPS_ = [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/];
    shaka.hls.HlsParser.TEXT_CODEC_REGEXPS_ = [/^vtt$/, /^wvtt/, /^stpp/];
    shaka.hls.HlsParser.CODEC_REGEXPS_BY_CONTENT_TYPE_ = {
      audio: shaka.hls.HlsParser.AUDIO_CODEC_REGEXPS_,
      video: shaka.hls.HlsParser.VIDEO_CODEC_REGEXPS_,
      text: shaka.hls.HlsParser.TEXT_CODEC_REGEXPS_
    };
    shaka.hls.HlsParser.AUDIO_EXTENSIONS_TO_MIME_TYPES_ = {
      mp4: "audio/mp4",
      m4s: "audio/mp4",
      m4i: "audio/mp4",
      m4a: "audio/mp4",
      cmfa: "audio/mp4",
      ts: "video/mp2t",
      aac: "audio/aac",
      ac3: "audio/ac3",
      ec3: "audio/ec3",
      mp3: "audio/mpeg"
    };
    shaka.hls.HlsParser.RAW_FORMATS_ = ["audio/aac", "audio/ac3", "audio/ec3", "audio/mpeg"];
    shaka.hls.HlsParser.VIDEO_EXTENSIONS_TO_MIME_TYPES_ = {
      mp4: "video/mp4",
      m4s: "video/mp4",
      m4i: "video/mp4",
      m4v: "video/mp4",
      cmfv: "video/mp4",
      ts: "video/mp2t"
    };
    shaka.hls.HlsParser.TEXT_EXTENSIONS_TO_MIME_TYPES_ = {
      mp4: "application/mp4",
      m4s: "application/mp4",
      m4i: "application/mp4",
      cmft: "application/mp4",
      vtt: "text/vtt",
      ttml: "application/ttml+xml"
    };
    shaka.hls.HlsParser.EXTENSION_MAP_BY_CONTENT_TYPE_ = {
      audio: shaka.hls.HlsParser.AUDIO_EXTENSIONS_TO_MIME_TYPES_,
      video: shaka.hls.HlsParser.VIDEO_EXTENSIONS_TO_MIME_TYPES_,
      text: shaka.hls.HlsParser.TEXT_EXTENSIONS_TO_MIME_TYPES_
    };
    shaka.hls.HlsParser.KEYFORMATS_TO_DRM_PARSERS_ = {"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": shaka.hls.HlsParser.widevineDrmParser_};
    shaka.hls.HlsParser.PresentationType_ = {VOD: "VOD", EVENT: "EVENT", LIVE: "LIVE"};
    shaka.hls.HlsParser.TS_TIMESCALE_ = 9E4;
    shaka.hls.HlsParser.START_OF_SEGMENT_SIZE_ = 2048;
    shaka.media.ManifestParser.registerParserByExtension("m3u8", function () {
      return new shaka.hls.HlsParser
    });
    shaka.media.ManifestParser.registerParserByMime("application/x-mpegurl", function () {
      return new shaka.hls.HlsParser
    });
    shaka.media.ManifestParser.registerParserByMime("application/vnd.apple.mpegurl", function () {
      return new shaka.hls.HlsParser
    });
    shaka.net.HttpPluginUtils = function () {
    };
    shaka.net.HttpPluginUtils.makeResponse = function (a, b, c, d, e, f) {
      if (200 <= c && 299 >= c && 202 != c) return {
        uri: e || d,
        originalUri: d,
        data: b,
        headers: a,
        fromCache: !!a["x-shaka-from-cache"]
      };
      e = null;
      try {
        e = shaka.util.StringUtils.fromBytesAutoDetect(b)
      } catch (g) {
      }
      shaka.log.debug("HTTP error text:", e);
      throw new shaka.util.Error(401 == c || 403 == c ? shaka.util.Error.Severity.CRITICAL : shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.BAD_HTTP_STATUS, d, c, e, a, f);
    };
    shaka.net.HttpFetchPlugin = function () {
    };
    shaka.net.HttpFetchPlugin.parse = function (a, b, c, d) {
      var e = new shaka.net.HttpFetchPlugin.Headers_;
      shaka.util.MapUtils.asMap(b.headers).forEach(function (a, b) {
        e.append(b, a)
      });
      var f = new shaka.net.HttpFetchPlugin.AbortController_, g = {canceled: !1, timedOut: !1};
      a = shaka.net.HttpFetchPlugin.request_(a, c, {
        body: b.body || void 0,
        headers: e,
        method: b.method,
        signal: f.signal,
        credentials: b.allowCrossSiteCredentials ? "include" : void 0
      }, g, d);
      a = new shaka.util.AbortableOperation(a, function () {
        g.canceled = !0;
        f.abort();
        return Promise.resolve()
      });
      if (b = b.retryParameters.timeout) {
        var h = new shaka.util.Timer(function () {
          g.timedOut = !0;
          f.abort()
        });
        h.tickAfter(b / 1E3);
        a["finally"](function () {
          h.stop()
        })
      }
      return a
    };
    shaka.net.HttpFetchPlugin.request_ = function (a, b, c, d, e) {
      var f, g, h, k, l, m, n, p, q, r, v, x, t, u;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (w) {
        switch (w.nextAddress) {
          case 1:
            return f = shaka.net.HttpFetchPlugin.fetch_, g = shaka.net.HttpFetchPlugin.ReadableStream_, m = l = 0, n = Date.now(), w.setCatchFinallyBlocks(2), w.yield(f(a, c), 4);
          case 4:
            return h = w.yieldResult, p = h.clone().body.getReader(), r = (q = h.headers.get("Content-Length")) ? parseInt(q, 10) : 0, v = function (a) {
              var b = function () {
                var c, d, f;
                return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
                  switch (g.nextAddress) {
                    case 1:
                      return g.setCatchFinallyBlocks(2),
                        g.yield(p.read(), 4);
                    case 4:
                      c = g.yieldResult;
                      g.leaveTryBlock(3);
                      break;
                    case 2:
                      return d = g.enterCatchBlock(), shaka.log.v1("error reading from stream", d.message), g["return"]();
                    case 3:
                      c.done || (l += c.value.byteLength);
                      f = Date.now();
                      if (100 < f - n || c.done) e(f - n, l - m, r - l), m = l, n = f;
                      c.done ? (goog.asserts.assert(!c.value, 'readObj should be unset when "done" is true.'), a.close()) : (a.enqueue(c.value), b());
                      g.jumpToEnd()
                  }
                })
              };
              b()
            }, new g({start: v}), w.yield(h.arrayBuffer(), 5);
          case 5:
            k = w.yieldResult;
            w.leaveTryBlock(3);
            break;
          case 2:
            x =
              w.enterCatchBlock();
            if (d.canceled) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.OPERATION_ABORTED, a, b);
            if (d.timedOut) throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.TIMEOUT, a, b);
            throw new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.HTTP_ERROR, a, x, b);
          case 3:
            return t = {}, u = h.headers, u.forEach(function (a,
                                                              b) {
              t[b.trim()] = a
            }), w["return"](shaka.net.HttpPluginUtils.makeResponse(t, k, h.status, a, h.url, b))
        }
      })
    };
    shaka.net.HttpFetchPlugin.isSupported = function () {
      if (window.ReadableStream) try {
        new ReadableStream({})
      } catch (a) {
        return !1
      } else return !1;
      return !(!window.fetch || !window.AbortController)
    };
    goog.exportSymbol("shaka.net.HttpFetchPlugin", shaka.net.HttpFetchPlugin);
    goog.exportProperty(shaka.net.HttpFetchPlugin, "isSupported", shaka.net.HttpFetchPlugin.isSupported);
    goog.exportProperty(shaka.net.HttpFetchPlugin, "parse", shaka.net.HttpFetchPlugin.parse);
    shaka.net.HttpFetchPlugin.fetch_ = window.fetch;
    shaka.net.HttpFetchPlugin.AbortController_ = window.AbortController;
    shaka.net.HttpFetchPlugin.ReadableStream_ = window.ReadableStream;
    shaka.net.HttpFetchPlugin.Headers_ = window.Headers;
    shaka.net.HttpFetchPlugin.isSupported() && (shaka.net.NetworkingEngine.registerScheme("http", shaka.net.HttpFetchPlugin.parse, shaka.net.NetworkingEngine.PluginPriority.PREFERRED), shaka.net.NetworkingEngine.registerScheme("https", shaka.net.HttpFetchPlugin.parse, shaka.net.NetworkingEngine.PluginPriority.PREFERRED));
    shaka.net.HttpXHRPlugin = function () {
    };
    shaka.net.HttpXHRPlugin.parse = function (a, b, c, d) {
      var e = new shaka.net.HttpXHRPlugin.Xhr_, f = Date.now(), g = 0, h = new Promise(function (h, l) {
        e.open(b.method, a, !0);
        e.responseType = "arraybuffer";
        e.timeout = b.retryParameters.timeout;
        e.withCredentials = b.allowCrossSiteCredentials;
        e.onabort = function () {
          l(new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.OPERATION_ABORTED, a, c))
        };
        e.onload = function (b) {
          b = b.target;
          goog.asserts.assert(b, "XHR onload has no target!");
          var d = b.getAllResponseHeaders().trim().split("\r\n"), e = {};
          d = $jscomp.makeIterator(d);
          for (var f = d.next(); !f.done; f = d.next()) f = f.value.split(": "), e[f[0].toLowerCase()] = f.slice(1).join(": ");
          try {
            var g = shaka.net.HttpPluginUtils.makeResponse(e, b.response, b.status, a, b.responseURL, c);
            h(g)
          } catch (t) {
            goog.asserts.assert(t instanceof shaka.util.Error, "Wrong error type!"), l(t)
          }
        };
        e.onerror = function (b) {
          l(new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.HTTP_ERROR,
            a, b, c))
        };
        e.ontimeout = function (b) {
          l(new shaka.util.Error(shaka.util.Error.Severity.RECOVERABLE, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.TIMEOUT, a, c))
        };
        e.onprogress = function (a) {
          var b = Date.now();
          if (100 < b - f || a.lengthComputable && a.loaded == a.total) d(b - f, a.loaded - g, a.total - a.loaded), g = a.loaded, f = b
        };
        for (var k in b.headers) {
          var n = k.toLowerCase();
          e.setRequestHeader(n, b.headers[k])
        }
        e.send(b.body)
      });
      return new shaka.util.AbortableOperation(h, function () {
        e.abort();
        return Promise.resolve()
      })
    };
    goog.exportSymbol("shaka.net.HttpXHRPlugin", shaka.net.HttpXHRPlugin);
    goog.exportProperty(shaka.net.HttpXHRPlugin, "parse", shaka.net.HttpXHRPlugin.parse);
    shaka.net.HttpXHRPlugin.Xhr_ = window.XMLHttpRequest;
    shaka.net.NetworkingEngine.registerScheme("http", shaka.net.HttpXHRPlugin.parse, shaka.net.NetworkingEngine.PluginPriority.FALLBACK);
    shaka.net.NetworkingEngine.registerScheme("https", shaka.net.HttpXHRPlugin.parse, shaka.net.NetworkingEngine.PluginPriority.FALLBACK);
    shaka.offline = {};
    shaka.offline.DownloadProgressEstimator = function () {
      this.actualDownloaded_ = this.estimatedDownloaded_ = this.estimatedTotal_ = 0;
      this.pending_ = new Map;
      this.nextId_ = 0
    };
    shaka.offline.DownloadProgressEstimator.prototype.open = function (a) {
      this.estimatedTotal_ += a;
      var b = this.nextId_;
      this.nextId_++;
      this.pending_.set(b, a);
      return b
    };
    shaka.offline.DownloadProgressEstimator.prototype.close = function (a, b) {
      if (this.pending_.has(a)) {
        var c = this.pending_.get(a);
        this.pending_["delete"](a);
        this.estimatedDownloaded_ += c;
        this.actualDownloaded_ += b
      }
    };
    shaka.offline.DownloadProgressEstimator.prototype.getEstimatedProgress = function () {
      return 0 == this.estimatedTotal_ ? 0 : this.estimatedDownloaded_ / this.estimatedTotal_
    };
    shaka.offline.DownloadProgressEstimator.prototype.getTotalDownloaded = function () {
      return this.actualDownloaded_
    };
    shaka.offline.DownloadManager = function (a) {
      var b = this;
      this.networkingEngine_ = a;
      this.groups_ = new Map;
      this.destroyer_ = new shaka.util.Destroyer(function () {
        var a = Array.from(b.groups_.values());
        return Promise.all(a.map(function (a) {
          return a["catch"](function () {
          })
        }))
      });
      this.abortCallbacks_ = [];
      this.onProgress_ = function (a, b) {
      };
      this.onInitData_ = function (a, b) {
      };
      this.estimator_ = new shaka.offline.DownloadProgressEstimator
    };
    shaka.offline.DownloadManager.prototype.destroy = function () {
      return this.destroyer_.destroy()
    };
    shaka.offline.DownloadManager.prototype.setCallbacks = function (a, b) {
      this.onProgress_ = a;
      this.onInitData_ = b
    };
    shaka.offline.DownloadManager.prototype.abortAll = function () {
      var a = this.abortCallbacks_.map(function (a) {
        return a()
      });
      this.abortCallbacks_ = [];
      return Promise.all(a)
    };
    shaka.offline.DownloadManager.prototype.queue = function (a, b, c, d, e) {
      var f = this;
      this.destroyer_.ensureNotDestroyed();
      var g = this.estimator_.open(c);
      c = (this.groups_.get(a) || Promise.resolve()).then(function () {
        var a, c, l, m, n, p, q;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
          if (1 == h.nextAddress) return h.yield(f.fetchSegment_(b), 2);
          a = h.yieldResult;
          if (f.destroyer_.destroyed()) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.OPERATION_ABORTED);
          if (d) for (m in c = shaka.util.BufferUtils.toUint8(a), l = new shaka.util.Pssh(c), l.data) n = Number(m), p = l.data[n], q = l.systemIds[n], f.onInitData_(p, q);
          f.estimator_.close(g, a.byteLength);
          f.onProgress_(f.estimator_.getEstimatedProgress(), f.estimator_.getTotalDownloaded());
          return h["return"](e(a))
        })
      });
      this.groups_.set(a, c);
      return c
    };
    shaka.offline.DownloadManager.prototype.queueWork = function (a, b) {
      this.destroyer_.ensureNotDestroyed();
      var c = (this.groups_.get(a) || Promise.resolve()).then(function () {
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (a) {
          return a.yield(b(), 0)
        })
      });
      this.groups_.set(a, c);
      return c
    };
    shaka.offline.DownloadManager.prototype.waitToFinish = function () {
      var a = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        return 1 == b.nextAddress ? b.yield(Promise.all(a.groups_.values()), 2) : b["return"](a.estimator_.getTotalDownloaded())
      })
    };
    shaka.offline.DownloadManager.prototype.fetchSegment_ = function (a) {
      var b = this, c, d, e, f;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
        if (1 == g.nextAddress) return c = shaka.net.NetworkingEngine.RequestType.SEGMENT, d = b.networkingEngine_.request(c, a), e = function () {
          return d.abort()
        }, b.abortCallbacks_.push(e), g.yield(d.promise, 2);
        f = g.yieldResult;
        shaka.util.ArrayUtils.remove(b.abortCallbacks_, e);
        return g["return"](f.data)
      })
    };
    shaka.offline.indexeddb = {};
    shaka.offline.indexeddb.DBOperation = function (a, b) {
      var c = this;
      this.transaction_ = a;
      this.store_ = a.objectStore(b);
      this.promise_ = new shaka.util.PublicPromise;
      a.onabort = function (a) {
        a.preventDefault();
        c.promise_.reject()
      };
      a.onerror = function (a) {
        a.preventDefault();
        c.promise_.reject()
      };
      a.oncomplete = function (a) {
        c.promise_.resolve()
      }
    };
    shaka.offline.indexeddb.DBOperation.prototype.abort = function () {
      var a = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        if (1 == b.nextAddress) {
          try {
            a.transaction_.abort()
          } catch (c) {
          }
          b.setCatchFinallyBlocks(2);
          return b.yield(a.promise_, 4)
        }
        if (2 != b.nextAddress) return b.leaveTryBlock(0);
        b.enterCatchBlock();
        b.jumpToEnd()
      })
    };
    shaka.offline.indexeddb.DBOperation.prototype.forEachEntry = function (a) {
      var b = this;
      return new Promise(function (c, d) {
        var e = b.store_.openCursor();
        e.onerror = d;
        e.onsuccess = function (b) {
          var d;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
            if (1 == b.nextAddress) {
              if (null == e.result) return c(), b["return"]();
              d = e.result;
              return b.yield(a(d.key, d.value, d), 2)
            }
            d["continue"]();
            b.jumpToEnd()
          })
        }
      })
    };
    shaka.offline.indexeddb.DBOperation.prototype.store = function () {
      return this.store_
    };
    shaka.offline.indexeddb.DBOperation.prototype.promise = function () {
      return this.promise_
    };
    shaka.offline.indexeddb.DBConnection = function (a) {
      this.connection_ = a;
      this.pending_ = []
    };
    shaka.offline.indexeddb.DBConnection.prototype.destroy = function () {
      return Promise.all(this.pending_.map(function (a) {
        return a.abort()
      }))
    };
    shaka.offline.indexeddb.DBConnection.prototype.startReadOnlyOperation = function (a) {
      return this.startOperation_(a, "readonly")
    };
    shaka.offline.indexeddb.DBConnection.prototype.startReadWriteOperation = function (a) {
      return this.startOperation_(a, "readwrite")
    };
    shaka.offline.indexeddb.DBConnection.prototype.startOperation_ = function (a, b) {
      var c = this, d = this.connection_.transaction([a], b), e = new shaka.offline.indexeddb.DBOperation(d, a);
      this.pending_.push(e);
      e.promise().then(function () {
        return c.stopTracking_(e)
      }, function () {
        return c.stopTracking_(e)
      });
      return e
    };
    shaka.offline.indexeddb.DBConnection.prototype.stopTracking_ = function (a) {
      shaka.util.ArrayUtils.remove(this.pending_, a)
    };
    shaka.offline.indexeddb.BaseStorageCell = function (a, b, c) {
      this.connection_ = new shaka.offline.indexeddb.DBConnection(a);
      this.segmentStore_ = b;
      this.manifestStore_ = c
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.destroy = function () {
      return this.connection_.destroy()
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.hasFixedKeySpace = function () {
      return !0
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.addSegments = function (a) {
      return this.rejectAdd(this.segmentStore_)
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.removeSegments = function (a, b) {
      return this.remove_(this.segmentStore_, a, b)
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.getSegments = function (a) {
      var b = this, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) return d.yield(b.get_(b.segmentStore_, a), 2);
        c = d.yieldResult;
        return d["return"](c.map(function (a) {
          return b.convertSegmentData(a)
        }))
      })
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.addManifests = function (a) {
      return this.rejectAdd(this.manifestStore_)
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.updateManifestExpiration = function (a, b) {
      var c = this.connection_.startReadWriteOperation(this.manifestStore_), d = c.store();
      d.get(a).onsuccess = function (c) {
        if (c = c.target.result) c.expiration = b, d.put(c, a)
      };
      return c.promise()
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.removeManifests = function (a, b) {
      return this.remove_(this.manifestStore_, a, b)
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.getManifests = function (a) {
      var b = this, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        if (1 == d.nextAddress) return d.yield(b.get_(b.manifestStore_, a), 2);
        c = d.yieldResult;
        return d["return"](Promise.all(c.map(function (a) {
          return b.convertManifest(a)
        })))
      })
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.getAllManifests = function () {
      var a = this, b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        return 1 == d.nextAddress ? (b = a.connection_.startReadOnlyOperation(a.manifestStore_), c = new Map, d.yield(b.forEachEntry(function (b, d) {
          var e;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
            if (1 == f.nextAddress) return f.yield(a.convertManifest(d), 2);
            e = f.yieldResult;
            c.set(b, e);
            f.jumpToEnd()
          })
        }), 2)) : 3 != d.nextAddress ? d.yield(b.promise(), 3) :
          d["return"](c)
      })
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.convertSegmentData = function (a) {
      return a
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.convertManifest = function (a) {
      return Promise.resolve(a)
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.rejectAdd = function (a) {
      return Promise.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.NEW_KEY_OPERATION_NOT_SUPPORTED, "Cannot add new value to " + a))
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.add = function (a, b) {
      var c = this, d, e, f, g, h, k, l;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (m) {
        if (1 == m.nextAddress) {
          d = c.connection_.startReadWriteOperation(a);
          e = d.store();
          f = [];
          g = {};
          h = $jscomp.makeIterator(b);
          for (k = h.next(); !k.done; g = {$jscomp$loop$prop$request$497: g.$jscomp$loop$prop$request$497}, k = h.next()) l = k.value, g.$jscomp$loop$prop$request$497 = e.add(l), g.$jscomp$loop$prop$request$497.onsuccess = function (a) {
            return function (b) {
              f.push(a.$jscomp$loop$prop$request$497.result)
            }
          }(g);
          return m.yield(d.promise(), 2)
        }
        return m["return"](f)
      })
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.remove_ = function (a, b, c) {
      a = this.connection_.startReadWriteOperation(a);
      var d = a.store(), e = {};
      b = $jscomp.makeIterator(b);
      for (var f = b.next(); !f.done; e = {$jscomp$loop$prop$key$499: e.$jscomp$loop$prop$key$499}, f = b.next()) e.$jscomp$loop$prop$key$499 = f.value, d["delete"](e.$jscomp$loop$prop$key$499).onsuccess = function (a) {
        return function () {
          return c(a.$jscomp$loop$prop$key$499)
        }
      }(e);
      return a.promise()
    };
    shaka.offline.indexeddb.BaseStorageCell.prototype.get_ = function (a, b) {
      var c = this, d, e, f, g, h, k, l;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (m) {
        if (1 == m.nextAddress) {
          d = c.connection_.startReadOnlyOperation(a);
          e = d.store();
          f = {};
          g = [];
          h = {};
          k = $jscomp.makeIterator(b);
          for (l = k.next(); !l.done; h = {
            $jscomp$loop$prop$request$501: h.$jscomp$loop$prop$request$501,
            $jscomp$loop$prop$key$502: h.$jscomp$loop$prop$key$502
          }, l = k.next()) h.$jscomp$loop$prop$key$502 = l.value, h.$jscomp$loop$prop$request$501 = e.get(h.$jscomp$loop$prop$key$502),
            h.$jscomp$loop$prop$request$501.onsuccess = function (a) {
              return function () {
                void 0 == a.$jscomp$loop$prop$request$501.result && g.push(a.$jscomp$loop$prop$key$502);
                f[a.$jscomp$loop$prop$key$502] = a.$jscomp$loop$prop$request$501.result
              }
            }(h);
          return m.yield(d.promise(), 2)
        }
        if (g.length) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.KEY_NOT_FOUND, "Could not find values for " + g);
        return m["return"](b.map(function (a) {
          return f[a]
        }))
      })
    };
    shaka.offline.indexeddb.EmeSessionStorageCell = function (a, b) {
      this.connection_ = new shaka.offline.indexeddb.DBConnection(a);
      this.store_ = b
    };
    shaka.offline.indexeddb.EmeSessionStorageCell.prototype.destroy = function () {
      return this.connection_.destroy()
    };
    shaka.offline.indexeddb.EmeSessionStorageCell.prototype.getAll = function () {
      var a = this, b, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        return 1 == d.nextAddress ? (b = a.connection_.startReadOnlyOperation(a.store_), c = [], d.yield(b.forEachEntry(function (a, b) {
          c.push(b)
        }), 2)) : 3 != d.nextAddress ? d.yield(b.promise(), 3) : d["return"](c)
      })
    };
    shaka.offline.indexeddb.EmeSessionStorageCell.prototype.add = function (a) {
      var b = this.connection_.startReadWriteOperation(this.store_), c = b.store();
      a = $jscomp.makeIterator(a);
      for (var d = a.next(); !d.done; d = a.next()) c.add(d.value);
      return b.promise()
    };
    shaka.offline.indexeddb.EmeSessionStorageCell.prototype.remove = function (a) {
      var b = this, c;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
        return 1 == d.nextAddress ? (c = b.connection_.startReadWriteOperation(b.store_), d.yield(c.forEachEntry(function (b, c, d) {
          a.includes(c.sessionId) && d["delete"]()
        }), 2)) : d.yield(c.promise(), 0)
      })
    };
    shaka.offline.StorageMuxer = function () {
      this.mechanisms_ = new Map
    };
    shaka.offline.StorageMuxer.prototype.destroy = function () {
      for (var a = [], b = $jscomp.makeIterator(this.mechanisms_.values()), c = b.next(); !c.done; c = b.next()) a.push(c.value.destroy());
      this.mechanisms_.clear();
      return Promise.all(a)
    };
    shaka.offline.StorageMuxer.prototype.init = function () {
      var a = this;
      shaka.offline.StorageMuxer.getRegistry_().forEach(function (b, c) {
        var d = b();
        d ? a.mechanisms_.set(c, d) : shaka.log.info("Skipping " + c + " as it is not supported on this platform")
      });
      for (var b = [], c = $jscomp.makeIterator(this.mechanisms_.values()), d = c.next(); !d.done; d = c.next()) b.push(d.value.init());
      return Promise.all(b)
    };
    shaka.offline.StorageMuxer.prototype.getActive = function () {
      var a = null;
      this.mechanisms_.forEach(function (b, c) {
        b.getCells().forEach(function (b, e) {
          b.hasFixedKeySpace() || a || (a = {path: {mechanism: c, cell: e}, cell: b})
        })
      });
      if (a) return a;
      throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.MISSING_STORAGE_CELL, "Could not find a cell that supports add-operations");
    };
    shaka.offline.StorageMuxer.prototype.forEachCell = function (a) {
      this.mechanisms_.forEach(function (b, c) {
        b.getCells().forEach(function (b, e) {
          a({mechanism: c, cell: e}, b)
        })
      })
    };
    shaka.offline.StorageMuxer.prototype.getCell = function (a, b) {
      var c = this.mechanisms_.get(a);
      if (!c) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.MISSING_STORAGE_CELL, "Could not find mechanism with name " + a);
      c = c.getCells().get(b);
      if (!c) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.MISSING_STORAGE_CELL, "Could not find cell with name " + b);
      return c
    };
    shaka.offline.StorageMuxer.prototype.forEachEmeSessionCell = function (a) {
      this.mechanisms_.forEach(function (b, c) {
        a(b.getEmeSessionCell())
      })
    };
    shaka.offline.StorageMuxer.prototype.getEmeSessionCell = function () {
      var a = Array.from(this.mechanisms_.keys());
      if (!a.length) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.STORAGE_NOT_SUPPORTED, "No supported storage mechanisms found");
      return this.mechanisms_.get(a[0]).getEmeSessionCell()
    };
    shaka.offline.StorageMuxer.prototype.resolvePath = function (a) {
      var b = this.mechanisms_.get(a.mechanism);
      return b ? b.getCells().get(a.cell) : null
    };
    shaka.offline.StorageMuxer.prototype.erase = function () {
      var a = this, b, c, d;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        return 1 == e.nextAddress ? (b = Array.from(a.mechanisms_.values()), c = 0 < b.length, c || (d = shaka.offline.StorageMuxer.getRegistry_(), d.forEach(function (a, c) {
          var d = a();
          d && b.push(d)
        })), e.yield(Promise.all(b.map(function (a) {
          return a.erase()
        })), 2)) : c ? e.jumpTo(0) : e.yield(Promise.all(b.map(function (a) {
          return a.destroy()
        })), 0)
      })
    };
    shaka.offline.StorageMuxer.register = function (a, b) {
      shaka.offline.StorageMuxer.registry_.set(a, b)
    };
    shaka.offline.StorageMuxer.unregister = function (a) {
      shaka.offline.StorageMuxer.registry_["delete"](a)
    };
    shaka.offline.StorageMuxer.support = function () {
      var a = shaka.offline.StorageMuxer.getRegistry_();
      a = $jscomp.makeIterator(a.values());
      for (var b = a.next(); !b.done; b = a.next()) if (b = b.value, b = b()) return b.destroy(), !0;
      return !1
    };
    shaka.offline.StorageMuxer.overrideSupport = function (a) {
      shaka.offline.StorageMuxer.override_ = a
    };
    shaka.offline.StorageMuxer.clearOverride = function () {
      shaka.offline.StorageMuxer.override_ = null
    };
    shaka.offline.StorageMuxer.getRegistry_ = function () {
      var a = shaka.offline.StorageMuxer.override_, b = shaka.offline.StorageMuxer.registry_;
      return COMPILED ? b : a || b
    };
    goog.exportSymbol("shaka.offline.StorageMuxer", shaka.offline.StorageMuxer);
    goog.exportProperty(shaka.offline.StorageMuxer, "unregister", shaka.offline.StorageMuxer.unregister);
    goog.exportProperty(shaka.offline.StorageMuxer, "register", shaka.offline.StorageMuxer.register);
    goog.exportProperty(shaka.offline.StorageMuxer.prototype, "destroy", shaka.offline.StorageMuxer.prototype.destroy);
    shaka.offline.StorageMuxer.override_ = null;
    shaka.offline.StorageMuxer.registry_ = new Map;
    shaka.offline.indexeddb.V1StorageCell = function () {
      shaka.offline.indexeddb.BaseStorageCell.apply(this, arguments)
    };
    $jscomp.inherits(shaka.offline.indexeddb.V1StorageCell, shaka.offline.indexeddb.BaseStorageCell);
    shaka.offline.indexeddb.V1StorageCell.prototype.updateManifestExpiration = function (a, b) {
      var c = this, d, e, f;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
        d = c.connection_.startReadWriteOperation(c.manifestStore_);
        e = d.store();
        f = new shaka.util.PublicPromise;
        e.get(a).onsuccess = function (c) {
          (c = c.target.result) ? (goog.asserts.assert(c.key == a, "With in-line keys, the keys should match"), c.expiration = b, e.put(c), f.resolve()) : f.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE,
            shaka.util.Error.Code.KEY_NOT_FOUND, "Could not find values for " + a))
        };
        return g.yield(Promise.all([d.promise(), f]), 0)
      })
    };
    shaka.offline.indexeddb.V1StorageCell.prototype.convertManifest = function (a) {
      var b, c, d, e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        if (1 == k.nextAddress) {
          b = shaka.offline.indexeddb.V1StorageCell;
          c = [];
          for (d = 0; d < a.periods.length; ++d) e = d == a.periods.length - 1 ? a.duration : a.periods[d + 1].startTime, f = e - a.periods[d].startTime, g = b.convertPeriod_(a.periods[d], f), c.push(g);
          return k.yield(shaka.util.PeriodCombiner.combineDbStreams(c), 2)
        }
        h = k.yieldResult;
        return k["return"]({
          creationTime: 0,
          originalManifestUri: a.originalManifestUri,
          duration: a.duration,
          size: a.size,
          expiration: null == a.expiration ? Infinity : a.expiration,
          streams: h,
          sessionIds: a.sessionIds,
          drmInfo: a.drmInfo,
          appMetadata: a.appMetadata
        })
      })
    };
    shaka.offline.indexeddb.V1StorageCell.convertPeriod_ = function (a, b) {
      var c = shaka.offline.indexeddb.V1StorageCell;
      c.fillMissingVariants_(a);
      for (var d = $jscomp.makeIterator(a.streams), e = d.next(); !e.done; e = d.next()) goog.asserts.assert(e.value.variantIds, "After filling in missing variants, each stream should have variant ids");
      return a.streams.map(function (d) {
        return c.convertStream_(d, a.startTime, b)
      })
    };
    shaka.offline.indexeddb.V1StorageCell.convertStream_ = function (a, b, c) {
      var d = shaka.offline.indexeddb.V1StorageCell,
        e = a.initSegmentUri ? d.getKeyFromSegmentUri_(a.initSegmentUri) : null, f = b + a.presentationTimeOffset,
        g = b + c;
      return {
        id: a.id,
        originalId: null,
        primary: a.primary,
        type: a.contentType,
        mimeType: a.mimeType,
        codecs: a.codecs,
        frameRate: a.frameRate,
        pixelAspectRatio: void 0,
        kind: a.kind,
        language: a.language,
        label: a.label,
        width: a.width,
        height: a.height,
        initSegmentKey: e,
        encrypted: a.encrypted,
        keyIds: new Set([a.keyId]),
        segments: a.segments.map(function (a) {
          return d.convertSegment_(a, e, b, g, f)
        }),
        variantIds: a.variantIds,
        roles: [],
        audioSamplingRate: null,
        channelsCount: null,
        closedCaptions: null
      }
    };
    shaka.offline.indexeddb.V1StorageCell.convertSegment_ = function (a, b, c, d, e) {
      var f = shaka.offline.indexeddb.V1StorageCell.getKeyFromSegmentUri_(a.uri);
      return {
        startTime: c + a.startTime,
        endTime: c + a.endTime,
        dataKey: f,
        initSegmentKey: b,
        appendWindowStart: c,
        appendWindowEnd: d,
        timestampOffset: e
      }
    };
    shaka.offline.indexeddb.V1StorageCell.prototype.convertSegmentData = function (a) {
      return {data: a.data}
    };
    shaka.offline.indexeddb.V1StorageCell.getKeyFromSegmentUri_ = function (a) {
      var b;
      if ((b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) || (b = /^offline:segment\/([0-9]+)$/.exec(a))) return Number(b[1]);
      throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.MALFORMED_OFFLINE_URI, "Could not parse uri " + a);
    };
    shaka.offline.indexeddb.V1StorageCell.fillMissingVariants_ = function (a) {
      var b = shaka.util.ManifestParserUtils.ContentType.AUDIO, c = shaka.util.ManifestParserUtils.ContentType.VIDEO,
        d = a.streams.filter(function (a) {
          return a.contentType == b
        });
      a = a.streams.filter(function (a) {
        return a.contentType == c
      });
      if (!d.every(function (a) {
        return a.variantIds
      }) || !a.every(function (a) {
        return a.variantIds
      })) {
        goog.asserts.assert(d.every(function (a) {
          return !a.variantIds
        }), "Some audio streams have variant ids and some do not.");
        goog.asserts.assert(a.every(function (a) {
            return !a.variantIds
          }),
          "Some video streams have variant ids and some do not.");
        for (var e = $jscomp.makeIterator(d), f = e.next(); !f.done; f = e.next()) f.value.variantIds = [];
        e = $jscomp.makeIterator(a);
        for (f = e.next(); !f.done; f = e.next()) f.value.variantIds = [];
        e = 0;
        if (a.length && !d.length) {
          shaka.log.debug("Found video-only content. Creating variants for video.");
          var g = e++, h = $jscomp.makeIterator(a);
          for (f = h.next(); !f.done; f = h.next()) f.value.variantIds.push(g)
        }
        if (!a.length && d.length) for (shaka.log.debug("Found audio-only content. Creating variants for audio."),
                                          g = e++, h = $jscomp.makeIterator(d), f = h.next(); !f.done; f = h.next()) f.value.variantIds.push(g);
        if (a.length && d.length) for (shaka.log.debug("Found audio-video content. Creating variants."), d = $jscomp.makeIterator(d), f = d.next(); !f.done; f = d.next()) for (f = f.value, g = $jscomp.makeIterator(a), h = g.next(); !h.done; h = g.next()) {
          h = h.value;
          var k = e++;
          f.variantIds.push(k);
          h.variantIds.push(k)
        }
      }
    };
    shaka.offline.indexeddb.V2StorageCell = function () {
      shaka.offline.indexeddb.BaseStorageCell.apply(this, arguments)
    };
    $jscomp.inherits(shaka.offline.indexeddb.V2StorageCell, shaka.offline.indexeddb.BaseStorageCell);
    shaka.offline.indexeddb.V2StorageCell.prototype.convertManifest = function (a) {
      var b = this, c, d, e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        if (1 == k.nextAddress) {
          c = [];
          for (d = 0; d < a.periods.length; ++d) e = d == a.periods.length - 1 ? a.duration : a.periods[d + 1].startTime, f = e - a.periods[d].startTime, g = b.convertPeriod_(a.periods[d], f), c.push(g);
          return k.yield(shaka.util.PeriodCombiner.combineDbStreams(c), 2)
        }
        h = k.yieldResult;
        return k["return"]({
          appMetadata: a.appMetadata,
          creationTime: 0,
          drmInfo: a.drmInfo,
          duration: a.duration,
          expiration: null == a.expiration ? Infinity : a.expiration,
          originalManifestUri: a.originalManifestUri,
          sessionIds: a.sessionIds,
          size: a.size,
          streams: h
        })
      })
    };
    shaka.offline.indexeddb.V2StorageCell.prototype.convertPeriod_ = function (a, b) {
      for (var c = [], d = $jscomp.makeIterator(a.streams), e = d.next(); !e.done; e = d.next()) e = e.value, 0 != e.variantIds.length && c.push(this.convertStream_(e, a.startTime, a.startTime + b));
      return c
    };
    shaka.offline.indexeddb.V2StorageCell.prototype.convertStream_ = function (a, b, c) {
      var d = this;
      return {
        id: a.id,
        originalId: a.originalId,
        primary: a.primary,
        type: a.contentType,
        mimeType: a.mimeType,
        codecs: a.codecs,
        frameRate: a.frameRate,
        pixelAspectRatio: a.pixelAspectRatio,
        kind: a.kind,
        language: a.language,
        label: a.label,
        width: a.width,
        height: a.height,
        encrypted: a.encrypted,
        keyIds: new Set([a.keyId]),
        segments: a.segments.map(function (e) {
          return d.convertSegment_(e, a.initSegmentKey, b, c, a.presentationTimeOffset)
        }),
        variantIds: a.variantIds,
        roles: [],
        audioSamplingRate: null,
        channelsCount: null,
        closedCaptions: null
      }
    };
    shaka.offline.indexeddb.V2StorageCell.prototype.convertSegment_ = function (a, b, c, d, e) {
      return {
        startTime: c + a.startTime,
        endTime: c + a.endTime,
        initSegmentKey: b,
        appendWindowStart: c,
        appendWindowEnd: d,
        timestampOffset: c - e,
        dataKey: a.dataKey
      }
    };
    shaka.offline.indexeddb.V5StorageCell = function () {
      shaka.offline.indexeddb.BaseStorageCell.apply(this, arguments)
    };
    $jscomp.inherits(shaka.offline.indexeddb.V5StorageCell, shaka.offline.indexeddb.BaseStorageCell);
    shaka.offline.indexeddb.V5StorageCell.prototype.hasFixedKeySpace = function () {
      return !1
    };
    shaka.offline.indexeddb.V5StorageCell.prototype.addSegments = function (a) {
      return this.add(this.segmentStore_, a)
    };
    shaka.offline.indexeddb.V5StorageCell.prototype.addManifests = function (a) {
      return this.add(this.manifestStore_, a)
    };
    shaka.offline.indexeddb.V5StorageCell.prototype.convertManifest = function (a) {
      null == a.expiration && (a.expiration = Infinity);
      return Promise.resolve(a)
    };
    shaka.offline.indexeddb.StorageMechanism = function () {
      this.sessions_ = this.v5_ = this.v3_ = this.v2_ = this.v1_ = this.db_ = null
    };
    shaka.offline.indexeddb.StorageMechanism.prototype.init = function () {
      var a = this, b = shaka.offline.indexeddb.StorageMechanism.DB_NAME,
        c = shaka.offline.indexeddb.StorageMechanism.VERSION, d = new shaka.util.PublicPromise,
        e = window.indexedDB.open(b, c);
      e.onsuccess = function (b) {
        b = e.result;
        a.db_ = b;
        a.v1_ = shaka.offline.indexeddb.StorageMechanism.createV1_(b);
        a.v2_ = shaka.offline.indexeddb.StorageMechanism.createV2_(b);
        a.v3_ = shaka.offline.indexeddb.StorageMechanism.createV3_(b);
        a.v5_ = shaka.offline.indexeddb.StorageMechanism.createV5_(b);
        a.sessions_ = shaka.offline.indexeddb.StorageMechanism.createEmeSessionCell_(b);
        d.resolve()
      };
      e.onupgradeneeded = function (b) {
        a.createStores_(e.result)
      };
      e.onerror = function (a) {
        d.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.INDEXED_DB_ERROR, e.error));
        a.preventDefault()
      };
      return d
    };
    shaka.offline.indexeddb.StorageMechanism.prototype.destroy = function () {
      var a = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        switch (b.nextAddress) {
          case 1:
            if (!a.v1_) {
              b.jumpTo(2);
              break
            }
            return b.yield(a.v1_.destroy(), 2);
          case 2:
            if (!a.v2_) {
              b.jumpTo(4);
              break
            }
            return b.yield(a.v2_.destroy(), 4);
          case 4:
            if (!a.v3_) {
              b.jumpTo(6);
              break
            }
            return b.yield(a.v3_.destroy(), 6);
          case 6:
            if (!a.v5_) {
              b.jumpTo(8);
              break
            }
            return b.yield(a.v5_.destroy(), 8);
          case 8:
            if (!a.sessions_) {
              b.jumpTo(10);
              break
            }
            return b.yield(a.sessions_.destroy(),
              10);
          case 10:
            a.db_ && a.db_.close(), b.jumpToEnd()
        }
      })
    };
    shaka.offline.indexeddb.StorageMechanism.prototype.getCells = function () {
      var a = new Map;
      this.v1_ && a.set("v1", this.v1_);
      this.v2_ && a.set("v2", this.v2_);
      this.v3_ && a.set("v3", this.v3_);
      this.v5_ && a.set("v5", this.v5_);
      return a
    };
    shaka.offline.indexeddb.StorageMechanism.prototype.getEmeSessionCell = function () {
      goog.asserts.assert(this.sessions_, "Cannot be destroyed.");
      return this.sessions_
    };
    shaka.offline.indexeddb.StorageMechanism.prototype.erase = function () {
      var a = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        switch (b.nextAddress) {
          case 1:
            if (!a.v1_) {
              b.jumpTo(2);
              break
            }
            return b.yield(a.v1_.destroy(), 2);
          case 2:
            if (!a.v2_) {
              b.jumpTo(4);
              break
            }
            return b.yield(a.v2_.destroy(), 4);
          case 4:
            if (!a.v3_) {
              b.jumpTo(6);
              break
            }
            return b.yield(a.v3_.destroy(), 6);
          case 6:
            if (!a.v5_) {
              b.jumpTo(8);
              break
            }
            return b.yield(a.v5_.destroy(), 8);
          case 8:
            return a.db_ && a.db_.close(), b.yield(shaka.offline.indexeddb.StorageMechanism.deleteAll_(),
              10);
          case 10:
            return a.db_ = null, a.v1_ = null, a.v2_ = null, a.v3_ = null, a.v5_ = null, b.yield(a.init(), 0)
        }
      })
    };
    shaka.offline.indexeddb.StorageMechanism.createV1_ = function (a) {
      var b = shaka.offline.indexeddb.StorageMechanism, c = b.V1_SEGMENT_STORE;
      b = b.V1_MANIFEST_STORE;
      var d = a.objectStoreNames;
      return d.contains(b) && d.contains(c) ? (shaka.log.debug("Mounting v1 idb storage cell"), new shaka.offline.indexeddb.V1StorageCell(a, c, b)) : null
    };
    shaka.offline.indexeddb.StorageMechanism.createV2_ = function (a) {
      var b = shaka.offline.indexeddb.StorageMechanism, c = b.V2_SEGMENT_STORE;
      b = b.V2_MANIFEST_STORE;
      var d = a.objectStoreNames;
      return d.contains(b) && d.contains(c) ? (shaka.log.debug("Mounting v2 idb storage cell"), new shaka.offline.indexeddb.V2StorageCell(a, c, b)) : null
    };
    shaka.offline.indexeddb.StorageMechanism.createV3_ = function (a) {
      var b = shaka.offline.indexeddb.StorageMechanism, c = b.V3_SEGMENT_STORE;
      b = b.V3_MANIFEST_STORE;
      var d = a.objectStoreNames;
      return d.contains(b) && d.contains(c) ? (shaka.log.debug("Mounting v3 idb storage cell"), new shaka.offline.indexeddb.V2StorageCell(a, c, b)) : null
    };
    shaka.offline.indexeddb.StorageMechanism.createV5_ = function (a) {
      var b = shaka.offline.indexeddb.StorageMechanism, c = b.V5_SEGMENT_STORE;
      b = b.V5_MANIFEST_STORE;
      var d = a.objectStoreNames;
      return d.contains(b) && d.contains(c) ? (shaka.log.debug("Mounting v5 idb storage cell"), new shaka.offline.indexeddb.V5StorageCell(a, c, b)) : null
    };
    shaka.offline.indexeddb.StorageMechanism.createEmeSessionCell_ = function (a) {
      var b = shaka.offline.indexeddb.StorageMechanism.SESSION_ID_STORE;
      return a.objectStoreNames.contains(b) ? (shaka.log.debug("Mounting session ID idb storage cell"), new shaka.offline.indexeddb.EmeSessionStorageCell(a, b)) : null
    };
    shaka.offline.indexeddb.StorageMechanism.prototype.createStores_ = function (a) {
      for (var b = $jscomp.makeIterator([shaka.offline.indexeddb.StorageMechanism.V5_SEGMENT_STORE, shaka.offline.indexeddb.StorageMechanism.V5_MANIFEST_STORE, shaka.offline.indexeddb.StorageMechanism.SESSION_ID_STORE]), c = b.next(); !c.done; c = b.next()) c = c.value, a.objectStoreNames.contains(c) || a.createObjectStore(c, {autoIncrement: !0})
    };
    shaka.offline.indexeddb.StorageMechanism.deleteAll_ = function () {
      var a = shaka.offline.indexeddb.StorageMechanism.DB_NAME, b = new shaka.util.PublicPromise,
        c = window.indexedDB.deleteDatabase(a);
      c.onblocked = function (b) {
        shaka.log.warning("Deleting", a, "is being blocked")
      };
      c.onsuccess = function (a) {
        b.resolve()
      };
      c.onerror = function (a) {
        b.reject(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.INDEXED_DB_ERROR, c.error));
        a.preventDefault()
      };
      return b
    };
    shaka.offline.indexeddb.StorageMechanism.DB_NAME = "shaka_offline_db";
    shaka.offline.indexeddb.StorageMechanism.VERSION = 5;
    shaka.offline.indexeddb.StorageMechanism.V1_SEGMENT_STORE = "segment";
    shaka.offline.indexeddb.StorageMechanism.V2_SEGMENT_STORE = "segment-v2";
    shaka.offline.indexeddb.StorageMechanism.V3_SEGMENT_STORE = "segment-v3";
    shaka.offline.indexeddb.StorageMechanism.V5_SEGMENT_STORE = "segment-v5";
    shaka.offline.indexeddb.StorageMechanism.V1_MANIFEST_STORE = "manifest";
    shaka.offline.indexeddb.StorageMechanism.V2_MANIFEST_STORE = "manifest-v2";
    shaka.offline.indexeddb.StorageMechanism.V3_MANIFEST_STORE = "manifest-v3";
    shaka.offline.indexeddb.StorageMechanism.V5_MANIFEST_STORE = "manifest-v5";
    shaka.offline.indexeddb.StorageMechanism.SESSION_ID_STORE = "session-ids";
    shaka.offline.StorageMuxer.register("idb", function () {
      return window.indexedDB ? new shaka.offline.indexeddb.StorageMechanism : null
    });
    shaka.offline.OfflineUri = function (a, b, c, d) {
      this.type_ = a;
      this.mechanism_ = b;
      this.cell_ = c;
      this.key_ = d;
      this.asString_ = ["offline:", a, "/", b, "/", c, "/", d].join("")
    };
    shaka.offline.OfflineUri.prototype.isManifest = function () {
      return "manifest" == this.type_
    };
    shaka.offline.OfflineUri.prototype.isSegment = function () {
      return "segment" == this.type_
    };
    shaka.offline.OfflineUri.prototype.mechanism = function () {
      return this.mechanism_
    };
    shaka.offline.OfflineUri.prototype.cell = function () {
      return this.cell_
    };
    shaka.offline.OfflineUri.prototype.key = function () {
      return this.key_
    };
    shaka.offline.OfflineUri.prototype.toString = function () {
      return this.asString_
    };
    shaka.offline.OfflineUri.parse = function (a) {
      a = /^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(a);
      if (null == a) return null;
      var b = a[1];
      if ("manifest" != b && "segment" != b) return null;
      var c = a[2];
      if (!c) return null;
      var d = a[3];
      return d && null != b ? new shaka.offline.OfflineUri(b, c, d, Number(a[4])) : null
    };
    shaka.offline.OfflineUri.manifest = function (a, b, c) {
      return new shaka.offline.OfflineUri("manifest", a, b, c)
    };
    shaka.offline.OfflineUri.segment = function (a, b, c) {
      return new shaka.offline.OfflineUri("segment", a, b, c)
    };
    shaka.offline.ManifestConverter = function (a, b) {
      this.mechanism_ = a;
      this.cell_ = b
    };
    shaka.offline.ManifestConverter.prototype.fromManifestDB = function (a) {
      var b = this, c = new shaka.media.PresentationTimeline(null, 0);
      c.setDuration(a.duration);
      var d = a.streams.filter(function (a) {
        return b.isAudio_(a)
      }), e = a.streams.filter(function (a) {
        return b.isVideo_(a)
      });
      d = this.createVariants(d, e, c);
      e = a.streams.filter(function (a) {
        return b.isText_(a)
      }).map(function (a) {
        return b.fromStreamDB_(a, c)
      });
      var f = a.drmInfo ? [a.drmInfo] : [];
      if (a.drmInfo) for (var g = $jscomp.makeIterator(d.values()), h = g.next(); !h.done; h =
        g.next()) h = h.value, h.audio && h.audio.encrypted && (h.audio.drmInfos = f), h.video && h.video.encrypted && (h.video.drmInfos = f);
      return {
        presentationTimeline: c,
        minBufferTime: 2,
        offlineSessionIds: a.sessionIds,
        variants: Array.from(d.values()),
        textStreams: e
      }
    };
    shaka.offline.ManifestConverter.prototype.createVariants = function (a, b, c) {
      for (var d = new Set, e = $jscomp.makeIterator(a), f = e.next(); !f.done; f = e.next()) {
        var g = $jscomp.makeIterator(f.value.variantIds);
        for (f = g.next(); !f.done; f = g.next()) d.add(f.value)
      }
      e = $jscomp.makeIterator(b);
      for (f = e.next(); !f.done; f = e.next()) for (g = $jscomp.makeIterator(f.value.variantIds), f = g.next(); !f.done; f = g.next()) d.add(f.value);
      e = new Map;
      d = $jscomp.makeIterator(d);
      for (f = d.next(); !f.done; f = d.next()) f = f.value, e.set(f, this.createEmptyVariant_(f));
      a = $jscomp.makeIterator(a);
      for (d = a.next(); !d.done; d = a.next()) for (d = d.value, f = this.fromStreamDB_(d, c), g = $jscomp.makeIterator(d.variantIds), d = g.next(); !d.done; d = g.next()) d = e.get(d.value), goog.asserts.assert(!d.audio, "A variant should only have one audio stream"), d.language = f.language, d.primary = d.primary || f.primary, d.audio = f;
      b = $jscomp.makeIterator(b);
      for (a = b.next(); !a.done; a = b.next()) for (d = a.value, a = this.fromStreamDB_(d, c), f = $jscomp.makeIterator(d.variantIds), d = f.next(); !d.done; d = f.next()) d = e.get(d.value),
        goog.asserts.assert(!d.video, "A variant should only have one video stream"), d.primary = d.primary || a.primary, d.video = a;
      return e
    };
    shaka.offline.ManifestConverter.prototype.fromStreamDB_ = function (a, b) {
      var c = this, d = a.segments.map(function (a, b) {
        return c.fromSegmentDB_(b, a)
      });
      b.notifySegments(d);
      d = new shaka.media.SegmentIndex(d);
      return {
        id: a.id,
        originalId: a.originalId,
        createSegmentIndex: function () {
          return Promise.resolve()
        },
        segmentIndex: d,
        mimeType: a.mimeType,
        codecs: a.codecs,
        width: a.width || void 0,
        height: a.height || void 0,
        frameRate: a.frameRate,
        pixelAspectRatio: a.pixelAspectRatio,
        kind: a.kind,
        encrypted: a.encrypted,
        drmInfos: [],
        keyIds: a.keyIds,
        language: a.language,
        label: a.label,
        type: a.type,
        primary: a.primary,
        trickModeVideo: null,
        emsgSchemeIdUris: null,
        roles: a.roles,
        channelsCount: a.channelsCount,
        audioSamplingRate: a.audioSamplingRate,
        closedCaptions: a.closedCaptions
      }
    };
    shaka.offline.ManifestConverter.prototype.fromSegmentDB_ = function (a, b) {
      var c = shaka.offline.OfflineUri.segment(this.mechanism_, this.cell_, b.dataKey),
        d = null != b.initSegmentKey ? this.fromInitSegmentDB_(b.initSegmentKey) : null;
      return new shaka.media.SegmentReference(b.startTime, b.endTime, function () {
        return [c.toString()]
      }, 0, null, d, b.timestampOffset, b.appendWindowStart, b.appendWindowEnd)
    };
    shaka.offline.ManifestConverter.prototype.fromInitSegmentDB_ = function (a) {
      var b = shaka.offline.OfflineUri.segment(this.mechanism_, this.cell_, a);
      return new shaka.media.InitSegmentReference(function () {
        return [b.toString()]
      }, 0, null)
    };
    shaka.offline.ManifestConverter.prototype.isAudio_ = function (a) {
      return a.type == shaka.util.ManifestParserUtils.ContentType.AUDIO
    };
    shaka.offline.ManifestConverter.prototype.isVideo_ = function (a) {
      return a.type == shaka.util.ManifestParserUtils.ContentType.VIDEO
    };
    shaka.offline.ManifestConverter.prototype.isText_ = function (a) {
      return a.type == shaka.util.ManifestParserUtils.ContentType.TEXT
    };
    shaka.offline.ManifestConverter.prototype.createEmptyVariant_ = function (a) {
      return {
        id: a,
        language: "",
        primary: !1,
        audio: null,
        video: null,
        bandwidth: 0,
        allowedByApplication: !0,
        allowedByKeySystem: !0
      }
    };
    shaka.offline.OfflineManifestParser = function () {
      this.uri_ = null
    };
    shaka.offline.OfflineManifestParser.prototype.configure = function (a) {
    };
    shaka.offline.OfflineManifestParser.prototype.start = function (a, b) {
      var c = this, d, e, f, g, h, k;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        switch (b.nextAddress) {
          case 1:
            d = shaka.offline.OfflineUri.parse(a);
            c.uri_ = d;
            if (null == d || !d.isManifest()) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.MALFORMED_OFFLINE_URI, a);
            e = new shaka.offline.StorageMuxer;
            b.setFinallyBlock(2);
            return b.yield(e.init(), 4);
          case 4:
            return b.yield(e.getCell(d.mechanism(),
              d.cell()), 5);
          case 5:
            return f = b.yieldResult, b.yield(f.getManifests([d.key()]), 6);
          case 6:
            return g = b.yieldResult, h = g[0], k = new shaka.offline.ManifestConverter(d.mechanism(), d.cell()), b["return"](k.fromManifestDB(h));
          case 2:
            return b.enterFinallyBlock(), b.yield(e.destroy(), 7);
          case 7:
            b.leaveFinallyBlock(0)
        }
      })
    };
    shaka.offline.OfflineManifestParser.prototype.stop = function () {
      return Promise.resolve()
    };
    shaka.offline.OfflineManifestParser.prototype.update = function () {
    };
    shaka.offline.OfflineManifestParser.prototype.onExpirationUpdated = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (n) {
        switch (n.nextAddress) {
          case 1:
            return goog.asserts.assert(c.uri_, "Should not get update event before start has been called"), d = c.uri_, e = new shaka.offline.StorageMuxer, n.setCatchFinallyBlocks(2, 3), n.yield(e.init(), 5);
          case 5:
            return n.yield(e.getCell(d.mechanism(), d.cell()), 6);
          case 6:
            return f = n.yieldResult, n.yield(f.getManifests([d.key()]),
              7);
          case 7:
            g = n.yieldResult;
            h = g[0];
            k = h.sessionIds.includes(a);
            l = void 0 == h.expiration || h.expiration > b;
            if (!k || !l) {
              n.jumpTo(3);
              break
            }
            shaka.log.debug("Updating expiration for stored content");
            return n.yield(f.updateManifestExpiration(d.key(), b), 3);
          case 3:
            return n.enterFinallyBlock(), n.yield(e.destroy(), 10);
          case 10:
            n.leaveFinallyBlock(0);
            break;
          case 2:
            m = n.enterCatchBlock(), shaka.log.error("There was an error updating", d, m), n.jumpTo(3)
        }
      })
    };
    shaka.media.ManifestParser.registerParserByMime("application/x-offline-manifest", function () {
      return new shaka.offline.OfflineManifestParser
    });
    shaka.offline.OfflineScheme = function () {
    };
    shaka.offline.OfflineScheme.plugin = function (a, b, c, d) {
      return (b = shaka.offline.OfflineUri.parse(a)) && b.isManifest() ? shaka.offline.OfflineScheme.getManifest_(a) : b && b.isSegment() ? shaka.offline.OfflineScheme.getSegment_(b.key(), b) : shaka.util.AbortableOperation.failed(new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.NETWORK, shaka.util.Error.Code.MALFORMED_OFFLINE_URI, a))
    };
    shaka.offline.OfflineScheme.getManifest_ = function (a) {
      a = {
        uri: a,
        originalUri: a,
        data: new ArrayBuffer(0),
        headers: {"content-type": "application/x-offline-manifest"}
      };
      return shaka.util.AbortableOperation.completed(a)
    };
    shaka.offline.OfflineScheme.getSegment_ = function (a, b) {
      goog.asserts.assert(b.isSegment(), "Only segment uri's should be given to getSegment");
      var c = new shaka.offline.StorageMuxer;
      return shaka.util.AbortableOperation.completed(void 0).chain(function () {
        return c.init()
      }).chain(function () {
        return c.getCell(b.mechanism(), b.cell())
      }).chain(function (a) {
        return a.getSegments([b.key()])
      }).chain(function (a) {
        return {uri: b, data: a[0].data, headers: {}}
      })["finally"](function () {
        return c.destroy()
      })
    };
    goog.exportSymbol("shaka.offline.OfflineScheme", shaka.offline.OfflineScheme);
    goog.exportProperty(shaka.offline.OfflineScheme, "plugin", shaka.offline.OfflineScheme.plugin);
    shaka.net.NetworkingEngine.registerScheme("offline", shaka.offline.OfflineScheme.plugin);
    shaka.offline.SessionDeleter = function () {
    };
    shaka.offline.SessionDeleter.prototype["delete"] = function (a, b, c) {
      var d = this, e, f, g, h, k, l, m;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (n) {
        switch (n.nextAddress) {
          case 1:
            e = shaka.offline.SessionDeleter, f = [], g = $jscomp.makeIterator(e.createBuckets_(c)), h = g.next();
          case 2:
            if (h.done) {
              n.jumpTo(4);
              break
            }
            k = h.value;
            l = d.doDelete_(a, b, k);
            return n.yield(l, 5);
          case 5:
            m = n.yieldResult;
            f = f.concat(m);
            h = g.next();
            n.jumpTo(2);
            break;
          case 4:
            return n["return"](f)
        }
      })
    };
    shaka.offline.SessionDeleter.prototype.doDelete_ = function (a, b, c) {
      var d, e, f, g;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
        switch (h.nextAddress) {
          case 1:
            return d = new shaka.media.DrmEngine({
              netEngine: b, onError: function () {
              }, onKeyStatus: function () {
              }, onExpirationUpdated: function () {
              }, onEvent: function () {
              }
            }), h.setCatchFinallyBlocks(2), d.configure(a), h.yield(d.initForRemoval(c.info.keySystem, c.info.licenseUri, c.info.serverCertificate, c.info.audioCapabilities, c.info.videoCapabilities), 4);
          case 4:
            h.leaveTryBlock(3);
            break;
          case 2:
            return e = h.enterCatchBlock(), shaka.log.warning("Error initializing EME", e), h.yield(d.destroy(), 5);
          case 5:
            return h["return"]([]);
          case 3:
            return h.setCatchFinallyBlocks(6), h.yield(d.setServerCertificate(), 8);
          case 8:
            h.leaveTryBlock(7);
            break;
          case 6:
            return f = h.enterCatchBlock(), shaka.log.warning("Error setting server certificate", f), h.yield(d.destroy(), 9);
          case 9:
            return h["return"]([]);
          case 7:
            return g = [], h.yield(Promise.all(c.sessionIds.map(function (a) {
              var b;
              return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
                if (1 ==
                  c.nextAddress) return c.setCatchFinallyBlocks(2), c.yield(d.removeSession(a), 4);
                if (2 != c.nextAddress) return g.push(a), c.leaveTryBlock(0);
                b = c.enterCatchBlock();
                shaka.log.warning("Error deleting offline session", b);
                c.jumpToEnd()
              })
            })), 10);
          case 10:
            return h.yield(d.destroy(), 11);
          case 11:
            return h["return"](g)
        }
      })
    };
    shaka.offline.SessionDeleter.createBuckets_ = function (a) {
      var b = shaka.offline.SessionDeleter, c = [];
      a = $jscomp.makeIterator(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        d = d.value;
        for (var e = !1, f = $jscomp.makeIterator(c), g = f.next(); !g.done; g = f.next()) if (g = g.value, b.isCompatible_(g.info, d)) {
          g.sessionIds.push(d.sessionId);
          e = !0;
          break
        }
        e || c.push({info: d, sessionIds: [d.sessionId]})
      }
      return c
    };
    shaka.offline.SessionDeleter.isCompatible_ = function (a, b) {
      var c = shaka.util.ArrayUtils, d = function (a, b) {
        return a.robustness == b.robustness && a.contentType == b.contentType
      };
      return a.keySystem == b.keySystem && a.licenseUri == b.licenseUri && c.hasSameElements(a.audioCapabilities, b.audioCapabilities, d) && c.hasSameElements(a.videoCapabilities, b.videoCapabilities, d)
    };
    shaka.offline.StoredContentUtils = function () {
    };
    shaka.offline.StoredContentUtils.fromManifest = function (a, b, c, d) {
      goog.asserts.assert(b.variants.length, "Cannot create stored content from manifest with no variants.");
      var e = b.presentationTimeline.getDuration();
      b = shaka.offline.StoredContentUtils.getTracks_(b);
      return {
        offlineUri: null,
        originalManifestUri: a,
        duration: e,
        size: c,
        expiration: Infinity,
        tracks: b,
        appMetadata: d
      }
    };
    shaka.offline.StoredContentUtils.fromManifestDB = function (a, b) {
      goog.asserts.assert(b.streams.length, "Cannot create stored content from manifestDB with no streams.");
      var c = (new shaka.offline.ManifestConverter(a.mechanism(), a.cell())).fromManifestDB(b), d = b.appMetadata || {};
      c = shaka.offline.StoredContentUtils.getTracks_(c);
      goog.asserts.assert(null != b.expiration, "Manifest expiration must be set by now!");
      return {
        offlineUri: a.toString(), originalManifestUri: b.originalManifestUri, duration: b.duration, size: b.size,
        expiration: b.expiration, tracks: c, appMetadata: d
      }
    };
    shaka.offline.StoredContentUtils.getTracks_ = function (a) {
      var b = shaka.util.StreamUtils, c = [], d = b.getPlayableVariants(a.variants);
      d = $jscomp.makeIterator(d);
      for (var e = d.next(); !e.done; e = d.next()) c.push(b.variantToTrack(e.value));
      a = $jscomp.makeIterator(a.textStreams);
      for (d = a.next(); !d.done; d = a.next()) c.push(b.textStreamToTrack(d.value));
      return c
    };
    shaka.offline.StreamBandwidthEstimator = function () {
      this.estimateByStreamId_ = {}
    };
    shaka.offline.StreamBandwidthEstimator.prototype.addVariant = function (a) {
      var b = a.audio, c = a.video;
      b && !c && this.setBitrate_(b.id, b.bandwidth || a.bandwidth);
      !b && c && this.setBitrate_(c.id, c.bandwidth || a.bandwidth);
      if (b && c) {
        var d = b.bandwidth || shaka.offline.StreamBandwidthEstimator.DEFAULT_AUDIO_BITRATE_,
          e = c.bandwidth || a.bandwidth - d;
        0 >= e && (shaka.log.warning("Audio bit rate consumes variants bandwidth. Setting video bandwidth to match variant's bandwidth."), e = a.bandwidth);
        this.setBitrate_(b.id, d);
        this.setBitrate_(c.id,
          e)
      }
    };
    shaka.offline.StreamBandwidthEstimator.prototype.setBitrate_ = function (a, b) {
      this.estimateByStreamId_[a] = b
    };
    shaka.offline.StreamBandwidthEstimator.prototype.addText = function (a) {
      this.estimateByStreamId_[a.id] = shaka.offline.StreamBandwidthEstimator.DEFAULT_TEXT_BITRATE_
    };
    shaka.offline.StreamBandwidthEstimator.prototype.getSegmentEstimate = function (a, b) {
      var c = b.endTime - b.startTime;
      return this.getEstimate_(a) * c
    };
    shaka.offline.StreamBandwidthEstimator.prototype.getInitSegmentEstimate = function (a) {
      return .5 * this.getEstimate_(a)
    };
    shaka.offline.StreamBandwidthEstimator.prototype.getEstimate_ = function (a) {
      a = this.estimateByStreamId_[a];
      null == a && (a = 0, shaka.log.error("Asking for bitrate of stream not given to the estimator"));
      0 == a && shaka.log.warning("Using bitrate of 0, this stream won't affect progress");
      return a
    };
    shaka.offline.StreamBandwidthEstimator.DEFAULT_AUDIO_BITRATE_ = 393216;
    shaka.offline.StreamBandwidthEstimator.DEFAULT_TEXT_BITRATE_ = 52;
    shaka.util.ManifestFilter = function () {
    };
    shaka.util.ManifestFilter.filterByRestrictions = function (a, b, c) {
      a.variants = a.variants.filter(function (a) {
        return shaka.util.StreamUtils.meetsRestrictions(a, b, c)
      })
    };
    shaka.util.ManifestFilter.filterByMediaSourceSupport = function (a) {
      var b = shaka.media.MediaSourceEngine;
      a.variants = a.variants.filter(function (a) {
        var c = !0;
        a.audio && (c = c && b.isStreamSupported(a.audio));
        a.video && (c = c && b.isStreamSupported(a.video));
        return c
      })
    };
    shaka.util.ManifestFilter.filterByDrmSupport = function (a, b) {
      a.variants = a.variants.filter(function (a) {
        return b.supportsVariant(a)
      })
    };
    shaka.offline.Storage = function (a) {
      var b = this;
      if (a && a.constructor != shaka.Player) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.LOCAL_PLAYER_INSTANCE_REQUIRED);
      this.networkingEngine_ = this.config_ = null;
      a ? (this.config_ = a.getSharedConfiguration(), this.networkingEngine_ = a.getNetworkingEngine(), goog.asserts.assert(this.networkingEngine_, "Storage should not be initialized with a player that had |destroy| called on it.")) : (this.config_ =
        shaka.util.PlayerConfiguration.createDefault(), this.networkingEngine_ = new shaka.net.NetworkingEngine);
      this.segmentsFromStore_ = [];
      this.openOperations_ = [];
      this.openDownloadManagers_ = [];
      this.initSegmentDbKeyCache_ = new Map;
      this.initSegmentDbKeyCache_.set(null, Promise.resolve(null));
      this.segmentDbKeyCache_ = new Map;
      var c = !a;
      this.destroyer_ = new shaka.util.Destroyer(function () {
        var a, e, f, g, h;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
          switch (d.nextAddress) {
            case 1:
              return d.yield(Promise.all(b.openDownloadManagers_.map(function (a) {
                  return a.abortAll()
                })),
                2);
            case 2:
              a = function () {
              };
              e = [];
              f = $jscomp.makeIterator(b.openOperations_);
              for (g = f.next(); !g.done; g = f.next()) h = g.value, e.push(h.then(a, a));
              return d.yield(Promise.all(e), 3);
            case 3:
              if (!c) {
                d.jumpTo(4);
                break
              }
              return d.yield(b.networkingEngine_.destroy(), 4);
            case 4:
              b.config_ = null, b.networkingEngine_ = null, d.jumpToEnd()
          }
        })
      })
    };
    shaka.offline.Storage.support = function () {
      return shaka.util.Platform.supportsMediaSource() ? shaka.offline.StorageMuxer.support() : !1
    };
    shaka.offline.Storage.prototype.destroy = function () {
      return this.destroyer_.destroy()
    };
    shaka.offline.Storage.prototype.configure = function (a, b) {
      goog.asserts.assert("object" == typeof a || 2 == arguments.length, "String configs should have values!");
      2 == arguments.length && "string" == typeof a && (a = shaka.util.ConfigUtils.convertToConfigObject(a, b));
      goog.asserts.assert("object" == typeof a, "Should be an object!");
      a.manifest && a.manifest.dash && "defaultPresentationDelay" in a.manifest.dash && (shaka.Deprecate.deprecateFeature(4, "manifest.dash.defaultPresentationDelay configuration", "Please Use manifest.defaultPresentationDelay instead."),
        a.manifest.defaultPresentationDelay = a.manifest.dash.defaultPresentationDelay, delete a.manifest.dash.defaultPresentationDelay);
      goog.asserts.assert(this.config_, "Cannot reconfigure stroage after calling destroy.");
      return shaka.util.PlayerConfiguration.mergeConfigObjects(this.config_, a)
    };
    shaka.offline.Storage.prototype.getConfiguration = function () {
      goog.asserts.assert(this.config_, "Config must not be null!");
      var a = shaka.util.PlayerConfiguration.createDefault();
      shaka.util.PlayerConfiguration.mergeConfigObjects(a, this.config_, shaka.util.PlayerConfiguration.createDefault());
      return a
    };
    shaka.offline.Storage.prototype.getNetworkingEngine = function () {
      return this.networkingEngine_
    };
    shaka.offline.Storage.prototype.store = function (a, b, c) {
      var d = this;
      goog.asserts.assert(this.networkingEngine_, "Cannot call |downloadManifest_| after calling |destroy|.");
      var e = this.getConfiguration(), f = new shaka.offline.DownloadManager(this.networkingEngine_);
      this.openDownloadManagers_.push(f);
      b = this.store_(a, b || {}, function () {
        var b;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
          if (1 == f.nextAddress) return goog.asserts.assert(d.networkingEngine_, "Should not call |store| after |destroy|"),
            f.yield(shaka.media.ManifestParser.getFactory(a, d.networkingEngine_, e.manifest.retryParameters, c || null), 2);
          b = f.yieldResult;
          return f["return"](shaka.util.Functional.callFactory(b))
        })
      }, e, f);
      var g = new shaka.util.AbortableOperation(b, function () {
        return f.abortAll()
      });
      g["finally"](function () {
        shaka.util.ArrayUtils.remove(d.openDownloadManagers_, f)
      });
      g.then = function (a) {
        shaka.Deprecate.deprecateFeature(4, "shaka.offline.Storage.store.then", "Storage operations now return a shaka.util.AbortableOperation, rather than a promise.  Please update to conform to this new API; you can use the |chain| method instead.");
        return g.promise.then(a)
      };
      return this.startAbortableOperation_(g)
    };
    shaka.offline.Storage.prototype.getStoreInProgress = function () {
      shaka.Deprecate.deprecateFeature(4, "shaka.offline.Storage.getStoreInProgress", "Multiple concurrent downloads are now supported.");
      return !1
    };
    shaka.offline.Storage.prototype.store_ = function (a, b, c, d, e) {
      var f = this, g, h, k, l, m, n, p, q, r, v, x;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (t) {
        switch (t.nextAddress) {
          case 1:
            return f.requireSupport_(), h = g = null, k = new shaka.offline.StorageMuxer, m = l = null, t.setCatchFinallyBlocks(2, 3), t.yield(c(), 5);
          case 5:
            return g = t.yieldResult, t.yield(f.parseManifest(a, g, d), 6);
          case 6:
            n = t.yieldResult;
            f.ensureNotDestroyed_();
            p = !n.presentationTimeline.isLive() && !n.presentationTimeline.isInProgress();
            if (!p) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
              shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.CANNOT_STORE_LIVE_OFFLINE, a);
            return t.yield(f.createDrmEngine(n, function (a) {
              m = m || a
            }, d), 7);
          case 7:
            h = t.yieldResult;
            f.ensureNotDestroyed_();
            if (m) throw m;
            return t.yield(f.filterManifest_(n, h, d), 8);
          case 8:
            return t.yield(k.init(), 9);
          case 9:
            return f.ensureNotDestroyed_(), t.yield(k.getActive(), 10);
          case 10:
            return l = t.yieldResult, f.ensureNotDestroyed_(), goog.asserts.assert(h, "drmEngine should be non-null here."), t.yield(f.downloadManifest_(l.cell, h, n,
              a, b, d, e), 11);
          case 11:
            q = t.yieldResult;
            f.ensureNotDestroyed_();
            if (m) throw m;
            return t.yield(l.cell.addManifests([q]), 12);
          case 12:
            return r = t.yieldResult, f.ensureNotDestroyed_(), v = shaka.offline.OfflineUri.manifest(l.path.mechanism, l.path.cell, r[0]), t["return"](shaka.offline.StoredContentUtils.fromManifestDB(v, q));
          case 3:
            return t.enterFinallyBlock(), f.segmentsFromStore_ = [], t.yield(k.destroy(), 13);
          case 13:
            if (!g) {
              t.jumpTo(14);
              break
            }
            return t.yield(g.stop(), 14);
          case 14:
            if (!h) {
              t.jumpTo(16);
              break
            }
            return t.yield(h.destroy(),
              16);
          case 16:
            t.leaveFinallyBlock(0);
            break;
          case 2:
            x = t.enterCatchBlock();
            if (!l) {
              t.jumpTo(18);
              break
            }
            return t.yield(l.cell.removeSegments(f.segmentsFromStore_, function () {
            }), 18);
          case 18:
            throw m || x;
        }
      })
    };
    shaka.offline.Storage.prototype.filterManifest_ = function (a, b, c) {
      var d, e, f, g, h, k, l, m, n, p, q, r, v, x, t, u;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (w) {
        if (1 == w.nextAddress) {
          d = shaka.util.StreamUtils;
          e = {width: Infinity, height: Infinity};
          shaka.util.ManifestFilter.filterByRestrictions(a, c.restrictions, e);
          shaka.util.ManifestFilter.filterByMediaSourceSupport(a);
          shaka.util.ManifestFilter.filterByDrmSupport(a, b);
          f = [];
          g = c.preferredAudioChannelCount;
          shaka.util.StreamUtils.chooseCodecsAndFilterManifest(a,
            g);
          h = $jscomp.makeIterator(a.variants);
          for (k = h.next(); !k.done; k = h.next()) l = k.value, goog.asserts.assert(d.isPlayable(l), 'We should have already filtered by "is playable"'), f.push(d.variantToTrack(l));
          m = $jscomp.makeIterator(a.textStreams);
          for (n = m.next(); !n.done; n = m.next()) p = n.value, f.push(d.textStreamToTrack(p));
          return w.yield(c.offline.trackSelectionCallback(f), 2)
        }
        q = w.yieldResult;
        r = new Set;
        v = new Set;
        x = $jscomp.makeIterator(q);
        for (t = x.next(); !t.done; t = x.next()) u = t.value, "variant" == u.type && r.add(u.id),
        "text" == u.type && v.add(u.id);
        a.variants = a.variants.filter(function (a) {
          return r.has(a.id)
        });
        a.textStreams = a.textStreams.filter(function (a) {
          return v.has(a.id)
        });
        shaka.offline.Storage.validateManifest_(a);
        w.jumpToEnd()
      })
    };
    shaka.offline.Storage.prototype.downloadManifest_ = function (a, b, c, d, e, f, g) {
      var h = this, k, l, m, n, p, q, r, v, x, t, u, w;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (y) {
        switch (y.nextAddress) {
          case 1:
            return k = shaka.offline.StoredContentUtils.fromManifest(d, c, 0, e), l = f.offline.progressCallback, m = function (a, b) {
              k.size = b;
              l(k, a)
            }, n = function (a, c) {
              r && f.offline.usePersistentLicense && v == c && b.newInitData("cenc", a)
            }, g.setCallbacks(m, n), p = c.variants.some(function (a) {
              var b = a.audio && a.audio.encrypted;
              return a.video &&
                a.video.encrypted || b
            }), q = c.variants.some(function (a) {
              return (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : []).some(function (a) {
                return a.initData && a.initData.length
              })
            }), r = p && !q, v = null, r && (x = b.getDrmInfo(), v = shaka.offline.Storage.defaultSystemIds_.get(x.keySystem)), y.setFinallyBlock(2), u = t = h.createOfflineManifest_(g, a, b, c, d, e, f), y.yield(g.waitToFinish(), 4);
          case 4:
            u.size = y.yieldResult;
            t.expiration = b.getExpiration();
            w = b.getSessionIds();
            t.sessionIds = f.offline.usePersistentLicense ? w : [];
            if (p &&
              f.offline.usePersistentLicense && !w.length) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.NO_INIT_DATA_FOR_OFFLINE);
            return y["return"](t);
          case 2:
            return y.enterFinallyBlock(), y.yield(g.destroy(), 5);
          case 5:
            y.leaveFinallyBlock(0)
        }
      })
    };
    shaka.offline.Storage.prototype.remove = function (a) {
      return this.startOperation_(this.remove_(a))
    };
    shaka.offline.Storage.prototype.remove_ = function (a) {
      var b = this, c, d, e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        switch (k.nextAddress) {
          case 1:
            b.requireSupport_();
            c = shaka.offline.OfflineUri.parse(a);
            if (null == c || !c.isManifest()) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.MALFORMED_OFFLINE_URI, a);
            d = c;
            e = new shaka.offline.StorageMuxer;
            k.setFinallyBlock(2);
            return k.yield(e.init(), 4);
          case 4:
            return k.yield(e.getCell(d.mechanism(),
              d.cell()), 5);
          case 5:
            return f = k.yieldResult, k.yield(f.getManifests([d.key()]), 6);
          case 6:
            return g = k.yieldResult, h = g[0], k.yield(Promise.all([b.removeFromDRM_(d, h, e), b.removeFromStorage_(f, d, h)]), 2);
          case 2:
            return k.enterFinallyBlock(), k.yield(e.destroy(), 8);
          case 8:
            k.leaveFinallyBlock(0)
        }
      })
    };
    shaka.offline.Storage.getCapabilities_ = function (a, b) {
      for (var c = shaka.util.MimeUtils, d = [], e = $jscomp.makeIterator(a.streams), f = e.next(); !f.done; f = e.next()) f = f.value, b && "video" == f.type ? d.push({
        contentType: c.getFullType(f.mimeType, f.codecs),
        robustness: a.drmInfo.videoRobustness
      }) : b || "audio" != f.type || d.push({
        contentType: c.getFullType(f.mimeType, f.codecs),
        robustness: a.drmInfo.audioRobustness
      });
      return d
    };
    shaka.offline.Storage.prototype.removeFromDRM_ = function (a, b, c) {
      var d = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (a) {
        goog.asserts.assert(d.networkingEngine_, "Cannot be destroyed");
        return a.yield(shaka.offline.Storage.deleteLicenseFor_(d.networkingEngine_, d.config_.drm, c, b), 0)
      })
    };
    shaka.offline.Storage.prototype.removeFromStorage_ = function (a, b, c) {
      var d = this, e = shaka.offline.Storage.getAllSegmentIds_(c), f = e.length + 1, g = 0,
        h = shaka.offline.StoredContentUtils.fromManifestDB(b, c);
      c = function (a) {
        g += 1;
        d.config_.offline.progressCallback(h, g / f)
      };
      return Promise.all([a.removeSegments(e, c), a.removeManifests([b.key()], c)])
    };
    shaka.offline.Storage.prototype.removeEmeSessions = function () {
      return this.startOperation_(this.removeEmeSessions_())
    };
    shaka.offline.Storage.prototype.removeEmeSessions_ = function () {
      var a = this, b, c, d, e, f, g, h, k, l, m, n;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (p) {
        switch (p.nextAddress) {
          case 1:
            return a.requireSupport_(), goog.asserts.assert(a.networkingEngine_, "Cannot be destroyed"), b = a.networkingEngine_, c = a.config_.drm, d = new shaka.offline.StorageMuxer, e = new shaka.offline.SessionDeleter, f = !1, p.setFinallyBlock(2), p.yield(d.init(), 4);
          case 4:
            g = [], d.forEachEmeSessionCell(function (a) {
              return g.push(a)
            }), h = $jscomp.makeIterator(g),
              k = h.next();
          case 5:
            if (k.done) {
              p.jumpTo(2);
              break
            }
            l = k.value;
            return p.yield(l.getAll(), 8);
          case 8:
            return m = p.yieldResult, p.yield(e["delete"](c, b, m), 9);
          case 9:
            return n = p.yieldResult, p.yield(l.remove(n), 10);
          case 10:
            n.length != m.length && (f = !0);
            k = h.next();
            p.jumpTo(5);
            break;
          case 2:
            return p.enterFinallyBlock(), p.yield(d.destroy(), 11);
          case 11:
            p.leaveFinallyBlock(3);
            break;
          case 3:
            return p["return"](!f)
        }
      })
    };
    shaka.offline.Storage.prototype.list = function () {
      return this.startOperation_(this.list_())
    };
    shaka.offline.Storage.prototype.list_ = function () {
      var a = this, b, c, d;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        switch (e.nextAddress) {
          case 1:
            return a.requireSupport_(), b = [], c = new shaka.offline.StorageMuxer, e.setFinallyBlock(2), e.yield(c.init(), 4);
          case 4:
            return d = Promise.resolve(), c.forEachCell(function (a, c) {
              d = d.then(function () {
                var d;
                return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
                  if (1 == e.nextAddress) return e.yield(c.getAllManifests(), 2);
                  d = e.yieldResult;
                  d.forEach(function (c,
                                      d) {
                    var e = shaka.offline.OfflineUri.manifest(a.mechanism, a.cell, d);
                    e = shaka.offline.StoredContentUtils.fromManifestDB(e, c);
                    b.push(e)
                  });
                  e.jumpToEnd()
                })
              })
            }), e.yield(d, 2);
          case 2:
            return e.enterFinallyBlock(), e.yield(c.destroy(), 6);
          case 6:
            e.leaveFinallyBlock(3);
            break;
          case 3:
            return e["return"](b)
        }
      })
    };
    shaka.offline.Storage.prototype.parseManifest = function (a, b, c) {
      var d = this, e, f, g, h, k;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
        if (1 == l.nextAddress) return e = null, f = d.networkingEngine_, goog.asserts.assert(f, "Should be initialized!"), g = {
          networkingEngine: f,
          filter: function () {
            return Promise.resolve()
          },
          onTimelineRegionAdded: function () {
          },
          onEvent: function () {
          },
          onError: function (a) {
            e = a
          }
        }, b.configure(c.manifest), d.ensureNotDestroyed_(), l.yield(b.start(a, g), 2);
        if (3 != l.nextAddress) return h = l.yieldResult,
          d.ensureNotDestroyed_(), k = shaka.offline.Storage.getAllStreamsFromManifest_(h), l.yield(Promise.all(shaka.util.Iterables.map(k, function (a) {
          return a.createSegmentIndex()
        })), 3);
        d.ensureNotDestroyed_();
        if (e) throw e;
        return l["return"](h)
      })
    };
    shaka.offline.Storage.prototype.createDrmEngine = function (a, b, c) {
      var d = this, e;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (f) {
        switch (f.nextAddress) {
          case 1:
            return goog.asserts.assert(d.networkingEngine_, "Cannot call |createDrmEngine| after |destroy|"), e = new shaka.media.DrmEngine({
              netEngine: d.networkingEngine_,
              onError: b,
              onKeyStatus: function () {
              },
              onExpirationUpdated: function () {
              },
              onEvent: function () {
              }
            }), e.configure(c.drm), f.yield(e.initForStorage(a.variants, c.offline.usePersistentLicense),
              2);
          case 2:
            return f.yield(e.setServerCertificate(), 3);
          case 3:
            return f.yield(e.createOrLoad(), 4);
          case 4:
            return f["return"](e)
        }
      })
    };
    shaka.offline.Storage.prototype.createOfflineManifest_ = function (a, b, c, d, e, f, g) {
      var h = new shaka.offline.StreamBandwidthEstimator;
      a = this.createStreams_(a, b, h, c, d, g);
      g = g.offline.usePersistentLicense;
      (b = c.getDrmInfo()) && g && (b.initData = []);
      return {
        creationTime: Date.now(),
        originalManifestUri: e,
        duration: d.presentationTimeline.getDuration(),
        size: 0,
        expiration: c.getExpiration(),
        streams: a,
        sessionIds: g ? c.getSessionIds() : [],
        drmInfo: b,
        appMetadata: f
      }
    };
    shaka.offline.Storage.prototype.createStreams_ = function (a, b, c, d, e, f) {
      d = $jscomp.makeIterator(e.variants);
      for (var g = d.next(); !g.done; g = d.next()) c.addVariant(g.value);
      d = $jscomp.makeIterator(e.textStreams);
      for (g = d.next(); !g.done; g = d.next()) c.addText(g.value);
      g = shaka.offline.Storage.getAllStreamsFromManifest_(e);
      d = new Map;
      g = $jscomp.makeIterator(g);
      for (var h = g.next(); !h.done; h = g.next()) {
        h = h.value;
        var k = this.createStream_(a, b, c, e, h, f);
        d.set(h.id, k)
      }
      a = $jscomp.makeIterator(e.variants);
      for (g = a.next(); !g.done; g =
        a.next()) b = g.value, b.audio && d.get(b.audio.id).variantIds.push(b.id), b.video && d.get(b.video.id).variantIds.push(b.id);
      return Array.from(d.values())
    };
    shaka.offline.Storage.prototype.createStream_ = function (a, b, c, d, e, f) {
      var g = this, h = {
          id: e.id,
          originalId: e.originalId,
          primary: e.primary,
          type: e.type,
          mimeType: e.mimeType,
          codecs: e.codecs,
          frameRate: e.frameRate,
          pixelAspectRatio: e.pixelAspectRatio,
          kind: e.kind,
          language: e.language,
          label: e.label,
          width: e.width || null,
          height: e.height || null,
          encrypted: e.encrypted,
          keyIds: e.keyIds,
          segments: [],
          variantIds: [],
          roles: e.roles,
          channelsCount: e.channelsCount,
          audioSamplingRate: e.audioSamplingRate,
          closedCaptions: e.closedCaptions
        },
        k = e.id;
      d = d.presentationTimeline.getSegmentAvailabilityStart();
      shaka.offline.Storage.forEachSegment_(e, d, function (d) {
        var l = g.getInitSegmentDbKey_(a, k, e.id, b, c, d.initSegmentReference, f),
          n = g.getSegmentDbKey_(a, k, e.id, b, c, d, f);
        a.queueWork(k, function () {
          var a, b;
          return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
            if (1 == c.nextAddress) return c.yield(l, 2);
            if (3 != c.nextAddress) return a = c.yieldResult, c.yield(n, 3);
            b = c.yieldResult;
            h.segments.push({
              initSegmentKey: a,
              startTime: d.startTime,
              endTime: d.endTime,
              appendWindowStart: d.appendWindowStart,
              appendWindowEnd: d.appendWindowEnd,
              timestampOffset: d.timestampOffset,
              dataKey: b
            });
            c.jumpToEnd()
          })
        })
      });
      return h
    };
    shaka.offline.Storage.prototype.getInitSegmentDbKey_ = function (a, b, c, d, e, f, g) {
      var h = this;
      if (this.initSegmentDbKeyCache_.has(f)) return this.initSegmentDbKeyCache_.get(f);
      g = shaka.util.Networking.createSegmentRequest(f.getUris(), f.startByte, f.endByte, g.streaming.retryParameters);
      a = a.queue(b, g, e.getInitSegmentEstimate(c), !0, function (a) {
        var b;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
          if (1 == c.nextAddress) return c.yield(d.addSegments([{data: a}]), 2);
          b = c.yieldResult;
          h.segmentsFromStore_.push(b[0]);
          return c["return"](b[0])
        })
      });
      this.initSegmentDbKeyCache_.set(f, a);
      return a
    };
    shaka.offline.Storage.prototype.getSegmentDbKey_ = function (a, b, c, d, e, f, g) {
      var h = this, k = [f.getUris()[0], f.startByte, f.endByte].join("-");
      if (this.segmentDbKeyCache_.has(k)) return this.segmentDbKeyCache_.get(k);
      g = shaka.util.Networking.createSegmentRequest(f.getUris(), f.startByte, f.endByte, g.streaming.retryParameters);
      a = a.queue(b, g, e.getSegmentEstimate(c, f), !1, function (a) {
        var b;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
          if (1 == c.nextAddress) return c.yield(d.addSegments([{data: a}]), 2);
          b = c.yieldResult;
          h.segmentsFromStore_.push(b[0]);
          return c["return"](b[0])
        })
      });
      this.segmentDbKeyCache_.set(k, a);
      return a
    };
    shaka.offline.Storage.forEachSegment_ = function (a, b, c) {
      b = a.segmentIndex.find(b);
      if (null != b) for (var d = a.segmentIndex.get(b); d;) c(d), d = a.segmentIndex.get(++b)
    };
    shaka.offline.Storage.prototype.ensureNotDestroyed_ = function () {
      if (this.destroyer_.destroyed()) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.OPERATION_ABORTED);
    };
    shaka.offline.Storage.prototype.requireSupport_ = function () {
      if (!shaka.offline.Storage.support()) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.STORAGE, shaka.util.Error.Code.STORAGE_NOT_SUPPORTED);
    };
    shaka.offline.Storage.prototype.startOperation_ = function (a) {
      var b = this;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
        if (1 == c.nextAddress) return b.openOperations_.push(a), c.setFinallyBlock(2), c.yield(a, 4);
        if (2 != c.nextAddress) return c["return"](c.yieldResult);
        c.enterFinallyBlock();
        shaka.util.ArrayUtils.remove(b.openOperations_, a);
        return c.leaveFinallyBlock(0)
      })
    };
    shaka.offline.Storage.prototype.startAbortableOperation_ = function (a) {
      var b = this, c = a.promise;
      this.openOperations_.push(c);
      return a["finally"](function () {
        shaka.util.ArrayUtils.remove(b.openOperations_, c)
      })
    };
    shaka.offline.Storage.getAllSegmentIds_ = function (a) {
      var b = [];
      a = $jscomp.makeIterator(a.streams);
      for (var c = a.next(); !c.done; c = a.next()) {
        c = $jscomp.makeIterator(c.value.segments);
        for (var d = c.next(); !d.done; d = c.next()) d = d.value, null != d.initSegmentKey && b.push(d.initSegmentKey), b.push(d.dataKey)
      }
      return b
    };
    shaka.offline.Storage.deleteAll = function () {
      var a;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (b) {
        return 1 == b.nextAddress ? (a = new shaka.offline.StorageMuxer, b.setFinallyBlock(2), b.yield(a.erase(), 2)) : 5 != b.nextAddress ? (b.enterFinallyBlock(), b.yield(a.destroy(), 5)) : b.leaveFinallyBlock(0)
      })
    };
    shaka.offline.Storage.deleteLicenseFor_ = function (a, b, c, d) {
      var e, f, g, h;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
        if (1 == k.nextAddress) {
          if (!d.drmInfo) return k["return"]();
          e = c.getEmeSessionCell();
          f = d.sessionIds.map(function (a) {
            return {
              sessionId: a,
              keySystem: d.drmInfo.keySystem,
              licenseUri: d.drmInfo.licenseServerUri,
              serverCertificate: d.drmInfo.serverCertificate,
              audioCapabilities: shaka.offline.Storage.getCapabilities_(d, !1),
              videoCapabilities: shaka.offline.Storage.getCapabilities_(d, !0)
            }
          });
          g = new shaka.offline.SessionDeleter;
          return k.yield(g["delete"](b, a, f), 2)
        }
        return 3 != k.nextAddress ? (h = k.yieldResult, k.yield(e.remove(h), 3)) : k.yield(e.add(f.filter(function (a) {
          return !h.includes(a.sessionId)
        })), 0)
      })
    };
    shaka.offline.Storage.getAllStreamsFromManifest_ = function (a) {
      for (var b = new Set, c = $jscomp.makeIterator(a.textStreams), d = c.next(); !d.done; d = c.next()) b.add(d.value);
      a = $jscomp.makeIterator(a.variants);
      for (c = a.next(); !c.done; c = a.next()) c = c.value, c.audio && b.add(c.audio), c.video && b.add(c.video);
      return b
    };
    shaka.offline.Storage.validateManifest_ = function (a) {
      var b = new Set(a.variants.map(function (a) {
        return a.video
      })), c = new Set(a.variants.map(function (a) {
        return a.audio
      }));
      a = a.textStreams;
      1 < b.size && shaka.log.warning("Multiple video tracks selected to be stored");
      b = $jscomp.makeIterator(c);
      for (var d = b.next(); !d.done; d = b.next()) {
        d = d.value;
        for (var e = $jscomp.makeIterator(c), f = e.next(); !f.done; f = e.next()) f = f.value, d != f && d.language == f.language && shaka.log.warning("Similar audio tracks were selected to be stored",
          d.id, f.id)
      }
      c = $jscomp.makeIterator(a);
      for (b = c.next(); !b.done; b = c.next()) for (b = b.value, d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) e = e.value, b != e && b.language == e.language && shaka.log.warning("Similar text tracks were selected to be stored", b.id, e.id)
    };
    goog.exportSymbol("shaka.offline.Storage", shaka.offline.Storage);
    goog.exportProperty(shaka.offline.Storage, "deleteAll", shaka.offline.Storage.deleteAll);
    goog.exportProperty(shaka.offline.Storage.prototype, "list", shaka.offline.Storage.prototype.list);
    goog.exportProperty(shaka.offline.Storage.prototype, "removeEmeSessions", shaka.offline.Storage.prototype.removeEmeSessions);
    goog.exportProperty(shaka.offline.Storage.prototype, "remove", shaka.offline.Storage.prototype.remove);
    goog.exportProperty(shaka.offline.Storage.prototype, "getStoreInProgress", shaka.offline.Storage.prototype.getStoreInProgress);
    goog.exportProperty(shaka.offline.Storage.prototype, "store", shaka.offline.Storage.prototype.store);
    goog.exportProperty(shaka.offline.Storage.prototype, "getNetworkingEngine", shaka.offline.Storage.prototype.getNetworkingEngine);
    goog.exportProperty(shaka.offline.Storage.prototype, "getConfiguration", shaka.offline.Storage.prototype.getConfiguration);
    goog.exportProperty(shaka.offline.Storage.prototype, "configure", shaka.offline.Storage.prototype.configure);
    goog.exportProperty(shaka.offline.Storage.prototype, "destroy", shaka.offline.Storage.prototype.destroy);
    goog.exportProperty(shaka.offline.Storage, "support", shaka.offline.Storage.support);
    shaka.offline.Storage.defaultSystemIds_ = (new Map).set("org.w3.clearkey", "1077efecc0b24d02ace33c1e52e2fb4b").set("com.widevine.alpha", "edef8ba979d64acea3c827dcd51d21ed").set("com.microsoft.playready", "9a04f07998404286ab92e65be0885f95").set("com.adobe.primetime", "f239e769efa348509c16a903c6932efb");
    shaka.Player.registerSupportPlugin("offline", shaka.offline.Storage.support);
    shaka.polyfill = function () {
    };
    shaka.polyfill.installAll = function () {
      for (var a = $jscomp.makeIterator(shaka.polyfill.polyfills_), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
          b.callback()
        } catch (c) {
          shaka.log.alwaysWarn("Error installing polyfill!", c)
        }
      }
    };
    shaka.polyfill.register = function (a, b) {
      for (var c = {
        priority: b || 0,
        callback: a
      }, d = $jscomp.makeIterator(shaka.util.Iterables.enumerate(shaka.polyfill.polyfills_)), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        var f = e.i;
        if (e.item.priority < c.priority) {
          shaka.polyfill.polyfills_.splice(f, 0, c);
          return
        }
      }
      shaka.polyfill.polyfills_.push(c)
    };
    goog.exportSymbol("shaka.polyfill", shaka.polyfill);
    goog.exportProperty(shaka.polyfill, "register", shaka.polyfill.register);
    goog.exportProperty(shaka.polyfill, "installAll", shaka.polyfill.installAll);
    shaka.polyfill.polyfills_ = [];
    shaka.polyfill.EncryptionScheme = function () {
    };
    shaka.polyfill.EncryptionScheme.install = function () {
      EncryptionSchemePolyfills.install()
    };
    shaka.polyfill.register(shaka.polyfill.EncryptionScheme.install, -1);
    shaka.polyfill.Fullscreen = function () {
    };
    shaka.polyfill.Fullscreen.install = function () {
      if (window.Document) {
        var a = Element.prototype;
        a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
        a = Document.prototype;
        a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitCancelFullScreen;
        "fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
          get: function () {
            return document.mozFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement ||
              document.webkitFullscreenElement
          }
        }), Object.defineProperty(document, "fullscreenEnabled", {
          get: function () {
            return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
          }
        }));
        a = shaka.polyfill.Fullscreen.proxyEvent_;
        document.addEventListener("webkitfullscreenchange", a);
        document.addEventListener("webkitfullscreenerror", a);
        document.addEventListener("mozfullscreenchange", a);
        document.addEventListener("mozfullscreenerror", a);
        document.addEventListener("MSFullscreenChange",
          a);
        document.addEventListener("MSFullscreenError", a)
      }
    };
    shaka.polyfill.Fullscreen.proxyEvent_ = function (a) {
      var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase();
      if ("function" === typeof Event) var c = new Event(b, a); else c = document.createEvent("Event"), c.initEvent(b, a.bubbles, a.cancelable);
      a.target.dispatchEvent(c)
    };
    shaka.polyfill.register(shaka.polyfill.Fullscreen.install);
    shaka.polyfill.IndexedDB = function () {
    };
    shaka.polyfill.IndexedDB.install = function () {
      shaka.log.debug("IndexedDB.install");
      var a = !1;
      if (shaka.util.Platform.isChromecast()) shaka.log.debug("Removing IndexedDB from ChromeCast"), a = !0; else try {
        window.indexedDB && (a = !1)
      } catch (b) {
        shaka.log.debug("Removing IndexedDB due to an exception when accessing it"), a = !0
      }
      a && (delete window.indexedDB, goog.asserts.assert(!window.indexedDB, "Failed to override window.indexedDB"))
    };
    shaka.polyfill.register(shaka.polyfill.IndexedDB.install);
    shaka.polyfill.InputEvent = function () {
    };
    shaka.polyfill.InputEvent.install = function () {
      shaka.log.debug("InputEvent.install");
      shaka.util.Platform.isIE() && !HTMLInputElement.prototype.originalAddEventListener && (shaka.log.info("Patching input event support on IE."), HTMLInputElement.prototype.originalAddEventListener = HTMLInputElement.prototype.addEventListener, HTMLInputElement.prototype.addEventListener = shaka.polyfill.InputEvent.addEventListener_)
    };
    shaka.polyfill.InputEvent.addEventListener_ = function (a, b, c) {
      if ("input" == a) switch (this.type) {
        case "range":
          a = "change"
      }
      HTMLInputElement.prototype.originalAddEventListener.call(this, a, b, c)
    };
    shaka.polyfill.register(shaka.polyfill.InputEvent.install);
    shaka.polyfill.Languages = function () {
    };
    shaka.polyfill.Languages.install = function () {
      navigator.languages || Object.defineProperty(navigator, "languages", {
        get: function () {
          return navigator.language ? [navigator.language] : ["en"]
        }
      })
    };
    shaka.polyfill.register(shaka.polyfill.Languages.install);
    shaka.polyfill.MathRound = function () {
    };
    shaka.polyfill.MathRound.install = function () {
      shaka.log.debug("mathRound.install");
      var a = shaka.polyfill.MathRound.MAX_ACCURATE_INPUT_ + 1;
      if (Math.round(a) != a) {
        shaka.log.debug("polyfill Math.round");
        var b = Math.round;
        Math.round = function (a) {
          var c = a;
          a <= shaka.polyfill.MathRound.MAX_ACCURATE_INPUT_ && (c = b(a));
          return c
        }
      }
    };
    shaka.polyfill.MathRound.MAX_ACCURATE_INPUT_ = 4503599627370496;
    shaka.polyfill.register(shaka.polyfill.MathRound.install);
    shaka.polyfill.MediaSource = function () {
    };
    shaka.polyfill.MediaSource.install = function () {
      shaka.log.debug("MediaSource.install");
      var a = shaka.util.Platform.safariVersion();
      window.MediaSource ? window.cast && cast.__platform__ && cast.__platform__.canDisplayType ? (shaka.log.info("Patching Chromecast MSE bugs."), shaka.polyfill.MediaSource.patchCastIsTypeSupported_()) : a ? (shaka.polyfill.MediaSource.rejectTsContent_(), 12 >= a ? (shaka.log.info("Patching Safari 11 & 12 MSE bugs."), shaka.polyfill.MediaSource.stubAbort_(), shaka.polyfill.MediaSource.patchRemovalRange_()) :
        (shaka.log.info("Patching Safari 13 MSE bugs."), shaka.polyfill.MediaSource.stubAbort_())) : shaka.util.Platform.isTizen2() || shaka.util.Platform.isTizen3() || shaka.util.Platform.isTizen4() ? shaka.polyfill.MediaSource.rejectCodec_("opus") : shaka.log.info("Using native MSE as-is.") : shaka.log.info("No MSE implementation available.")
    };
    shaka.polyfill.MediaSource.stubAbort_ = function () {
      var a = MediaSource.prototype.addSourceBuffer;
      MediaSource.prototype.addSourceBuffer = function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
        c = a.apply(this, c);
        c.abort = function () {
        };
        return c
      }
    };
    shaka.polyfill.MediaSource.patchRemovalRange_ = function () {
      var a = SourceBuffer.prototype.remove;
      SourceBuffer.prototype.remove = function (b, c) {
        return a.call(this, b, c - .001)
      }
    };
    shaka.polyfill.MediaSource.rejectTsContent_ = function () {
      var a = MediaSource.isTypeSupported;
      MediaSource.isTypeSupported = function (b) {
        return "mp2t" == b.split(/ *; */)[0].split("/")[1].toLowerCase() ? !1 : a(b)
      }
    };
    shaka.polyfill.MediaSource.rejectCodec_ = function (a) {
      var b = MediaSource.isTypeSupported;
      MediaSource.isTypeSupported = function (c) {
        return shaka.util.MimeUtils.getCodecBase(c) != a && b(c)
      }
    };
    shaka.polyfill.MediaSource.patchCastIsTypeSupported_ = function () {
      var a = MediaSource.isTypeSupported;
      MediaSource.isTypeSupported = function (b) {
        var c = b.split(/ *; */);
        c.shift();
        return c.some(function (a) {
          return a.startsWith("codecs=")
        }) ? cast.__platform__.canDisplayType(b) : a(b)
      }
    };
    shaka.polyfill.register(shaka.polyfill.MediaSource.install);
    shaka.polyfill.PatchedMediaKeysApple = function () {
    };
    shaka.polyfill.PatchedMediaKeysApple.install = function () {
      if (window.HTMLVideoElement && window.WebKitMediaKeys) {
        shaka.log.info("Using Apple-prefixed EME");
        var a = shaka.polyfill.PatchedMediaKeysApple;
        delete HTMLMediaElement.prototype.mediaKeys;
        HTMLMediaElement.prototype.mediaKeys = null;
        HTMLMediaElement.prototype.setMediaKeys = a.setMediaKeys;
        window.MediaKeys = a.MediaKeys;
        window.MediaKeySystemAccess = a.MediaKeySystemAccess;
        navigator.requestMediaKeySystemAccess = a.requestMediaKeySystemAccess
      }
    };
    shaka.polyfill.PatchedMediaKeysApple.requestMediaKeySystemAccess = function (a, b) {
      shaka.log.debug("PatchedMediaKeysApple.requestMediaKeySystemAccess");
      goog.asserts.assert(this == navigator, 'bad "this" for requestMediaKeySystemAccess');
      var c = shaka.polyfill.PatchedMediaKeysApple;
      try {
        var d = new c.MediaKeySystemAccess(a, b);
        return Promise.resolve(d)
      } catch (e) {
        return Promise.reject(e)
      }
    };
    shaka.polyfill.PatchedMediaKeysApple.setMediaKeys = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.setMediaKeys");
      goog.asserts.assert(this instanceof HTMLMediaElement, 'bad "this" for setMediaKeys');
      var b = shaka.polyfill.PatchedMediaKeysApple, c = this.mediaKeys;
      c && c != a && (goog.asserts.assert(c instanceof b.MediaKeys, "non-polyfill instance of oldMediaKeys"), c.setMedia(null));
      delete this.mediaKeys;
      return (this.mediaKeys = a) ? (goog.asserts.assert(a instanceof b.MediaKeys, "non-polyfill instance of newMediaKeys"),
        a.setMedia(this)) : Promise.resolve()
    };
    shaka.polyfill.PatchedMediaKeysApple.onWebkitNeedKey_ = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.onWebkitNeedKey_", a);
      goog.asserts.assert(this.mediaKeys instanceof shaka.polyfill.PatchedMediaKeysApple.MediaKeys, "non-polyfill instance of newMediaKeys");
      goog.asserts.assert(null != a.initData, "missing init data!");
      a = shaka.util.BufferUtils.toUint8(a.initData);
      if (shaka.util.BufferUtils.toDataView(a).getUint32(0, !0) + 4 != a.byteLength) throw new RangeError("Malformed FairPlay init data");
      a = shaka.util.StringUtils.fromUTF16(a.subarray(4),
        !0);
      a = shaka.util.StringUtils.toUTF8(a);
      var b = new Event("encrypted");
      b.initDataType = "skd";
      b.initData = shaka.util.BufferUtils.toArrayBuffer(a);
      this.dispatchEvent(b)
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySystemAccess = function (a, b) {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySystemAccess");
      this.keySystem = a;
      if (a.startsWith("com.apple.fps")) for (var c = $jscomp.makeIterator(b), d = c.next(); !d.done; d = c.next()) if (d = this.checkConfig_(d.value)) {
        this.configuration_ = d;
        return
      }
      c = Error("Unsupported keySystem");
      c.name = "NotSupportedError";
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySystemAccess.prototype.checkConfig_ = function (a) {
      if ("required" == a.persistentState) return null;
      var b = {
        audioCapabilities: [],
        videoCapabilities: [],
        persistentState: "optional",
        distinctiveIdentifier: "optional",
        initDataTypes: a.initDataTypes,
        sessionTypes: ["temporary"],
        label: a.label
      }, c = !1, d = !1;
      if (a.audioCapabilities) for (var e = $jscomp.makeIterator(a.audioCapabilities), f = e.next(); !f.done; f = e.next()) if (f = f.value, f.contentType) {
        c = !0;
        var g = f.contentType.split(";")[0];
        WebKitMediaKeys.isTypeSupported(this.keySystem, g) && (b.audioCapabilities.push(f), d = !0)
      }
      if (a.videoCapabilities) for (a = $jscomp.makeIterator(a.videoCapabilities), f = a.next(); !f.done; f = a.next()) e = f.value, e.contentType && (c = !0, f = e.contentType.split(";")[0], WebKitMediaKeys.isTypeSupported(this.keySystem, f) && (b.videoCapabilities.push(e), d = !0));
      c || (d = WebKitMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
      return d ? b : null
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySystemAccess.prototype.createMediaKeys = function () {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySystemAccess.createMediaKeys");
      var a = new shaka.polyfill.PatchedMediaKeysApple.MediaKeys(this.keySystem);
      return Promise.resolve(a)
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySystemAccess.prototype.getConfiguration = function () {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySystemAccess.getConfiguration");
      return this.configuration_
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeys = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeys");
      this.nativeMediaKeys_ = new WebKitMediaKeys(a);
      this.eventManager_ = new shaka.util.EventManager
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeys.prototype.createSession = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeys.createSession");
      a = a || "temporary";
      if ("temporary" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
      return new shaka.polyfill.PatchedMediaKeysApple.MediaKeySession(this.nativeMediaKeys_, a)
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeys.prototype.setServerCertificate = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeys.setServerCertificate");
      return Promise.resolve(!1)
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeys.prototype.setMedia = function (a) {
      var b = this, c = shaka.polyfill.PatchedMediaKeysApple;
      this.eventManager_.removeAll();
      if (!a) return Promise.resolve();
      this.eventManager_.listen(a, "webkitneedkey", c.onWebkitNeedKey_);
      try {
        return shaka.util.MediaReadyState.waitForReadyState(a, HTMLMediaElement.HAVE_METADATA, this.eventManager_, function () {
          a.webkitSetMediaKeys(b.nativeMediaKeys_)
        }), Promise.resolve()
      } catch (d) {
        return Promise.reject(d)
      }
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession = function (a, b) {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySession");
      shaka.util.FakeEventTarget.call(this);
      this.nativeMediaKeySession_ = null;
      this.nativeMediaKeys_ = a;
      this.updatePromise_ = this.generateRequestPromise_ = null;
      this.eventManager_ = new shaka.util.EventManager;
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new shaka.util.PublicPromise;
      this.keyStatuses = new shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap
    };
    $jscomp.inherits(shaka.polyfill.PatchedMediaKeysApple.MediaKeySession, shaka.util.FakeEventTarget);
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.generateRequest = function (a, b) {
      var c = this;
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySession.generateRequest");
      this.generateRequestPromise_ = new shaka.util.PublicPromise;
      try {
        var d = this.nativeMediaKeys_.createSession("video/mp4", shaka.util.BufferUtils.toUint8(b));
        this.nativeMediaKeySession_ = d;
        this.sessionId = d.sessionId || "";
        this.eventManager_.listen(this.nativeMediaKeySession_, "webkitkeymessage", function (a) {
          return c.onWebkitKeyMessage_(a)
        });
        this.eventManager_.listen(d, "webkitkeyadded", function (a) {
          return c.onWebkitKeyAdded_(a)
        });
        this.eventManager_.listen(d, "webkitkeyerror", function (a) {
          return c.onWebkitKeyError_(a)
        });
        this.updateKeyStatus_("status-pending")
      } catch (e) {
        this.generateRequestPromise_.reject(e)
      }
      return this.generateRequestPromise_
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.load = function () {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySession.load");
      return Promise.reject(Error("MediaKeySession.load not yet supported"))
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.update = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySession.update");
      this.updatePromise_ = new shaka.util.PublicPromise;
      try {
        this.nativeMediaKeySession_.update(shaka.util.BufferUtils.toUint8(a))
      } catch (b) {
        this.updatePromise_.reject(b)
      }
      return this.updatePromise_
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.close = function () {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySession.close");
      try {
        this.nativeMediaKeySession_.close(), this.closed.resolve(), this.eventManager_.removeAll()
      } catch (a) {
        this.closed.reject(a)
      }
      return this.closed
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.remove = function () {
      shaka.log.debug("PatchedMediaKeysApple.MediaKeySession.remove");
      return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.onWebkitKeyMessage_ = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.onWebkitKeyMessage_", a);
      goog.asserts.assert(this.generateRequestPromise_, "generateRequestPromise_ should be set before now!");
      this.generateRequestPromise_ && (this.generateRequestPromise_.resolve(), this.generateRequestPromise_ = null);
      var b = void 0 == this.keyStatuses.getStatus();
      a = new shaka.util.FakeEvent("message", {
        messageType: b ? "license-request" : "license-renewal",
        message: shaka.util.BufferUtils.toArrayBuffer(a.message)
      });
      this.dispatchEvent(a)
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.onWebkitKeyAdded_ = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.onWebkitKeyAdded_", a);
      goog.asserts.assert(!this.generateRequestPromise_, "Key added during generate!");
      goog.asserts.assert(this.updatePromise_, "updatePromise_ should be set before now!");
      this.updatePromise_ && (this.updateKeyStatus_("usable"), this.updatePromise_.resolve(), this.updatePromise_ = null)
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.onWebkitKeyError_ = function (a) {
      shaka.log.debug("PatchedMediaKeysApple.onWebkitKeyError_", a);
      a = Error("EME PatchedMediaKeysApple key error");
      a.errorCode = this.nativeMediaKeySession_.error;
      if (null != this.generateRequestPromise_) this.generateRequestPromise_.reject(a), this.generateRequestPromise_ = null; else if (null != this.updatePromise_) this.updatePromise_.reject(a), this.updatePromise_ = null; else switch (this.nativeMediaKeySession_.error.code) {
        case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:
        case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:
          this.updateKeyStatus_("output-not-allowed");
          break;
        default:
          this.updateKeyStatus_("internal-error")
      }
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeySession.prototype.updateKeyStatus_ = function (a) {
      this.keyStatuses.setStatus(a);
      a = new shaka.util.FakeEvent("keystatuseschange");
      this.dispatchEvent(a)
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap = function () {
      this.size = 0;
      this.status_ = void 0
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap.prototype.setStatus = function (a) {
      this.size = void 0 == a ? 0 : 1;
      this.status_ = a
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap.prototype.getStatus = function () {
      return this.status_
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap.prototype.forEach = function (a) {
      this.status_ && a(this.status_, shaka.media.DrmEngine.DUMMY_KEY_ID.value())
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap.prototype.get = function (a) {
      if (this.has(a)) return this.status_
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap.prototype.has = function (a) {
      var b = shaka.media.DrmEngine.DUMMY_KEY_ID.value();
      return this.status_ && shaka.util.BufferUtils.equal(a, b) ? !0 : !1
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap.prototype.entries = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for the compiler.")
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap.prototype.keys = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for the compiler.")
    };
    shaka.polyfill.PatchedMediaKeysApple.MediaKeyStatusMap.prototype.values = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for the compiler.")
    };
    shaka.polyfill.register(shaka.polyfill.PatchedMediaKeysApple.install);
    shaka.polyfill.PatchedMediaKeysMs = function () {
    };
    shaka.polyfill.PatchedMediaKeysMs.install = function () {
      if (window.HTMLVideoElement && window.MSMediaKeys && (!navigator.requestMediaKeySystemAccess || !MediaKeySystemAccess.prototype.getConfiguration)) {
        shaka.log.info("Using ms-prefixed EME v20140218");
        var a = shaka.polyfill.PatchedMediaKeysMs;
        delete HTMLMediaElement.prototype.mediaKeys;
        HTMLMediaElement.prototype.mediaKeys = null;
        window.MediaKeys = a.MediaKeys;
        window.MediaKeySystemAccess = a.MediaKeySystemAccess;
        navigator.requestMediaKeySystemAccess = a.requestMediaKeySystemAccess;
        HTMLMediaElement.prototype.setMediaKeys = a.MediaKeySystemAccess.setMediaKeys
      }
    };
    shaka.polyfill.PatchedMediaKeysMs.requestMediaKeySystemAccess = function (a, b) {
      shaka.log.debug("PatchedMediaKeysMs.requestMediaKeySystemAccess");
      goog.asserts.assert(this == navigator, 'bad "this" for requestMediaKeySystemAccess');
      var c = shaka.polyfill.PatchedMediaKeysMs;
      try {
        var d = new c.MediaKeySystemAccess(a, b);
        return Promise.resolve(d)
      } catch (e) {
        return Promise.reject(e)
      }
    };
    shaka.polyfill.PatchedMediaKeysMs.onMsNeedKey_ = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.onMsNeedKey_", a);
      if (a.initData) {
        var b = document.createEvent("CustomEvent");
        b.initCustomEvent("encrypted", !1, !1, null);
        b.initDataType = "cenc";
        b.initData = shaka.util.BufferUtils.toArrayBuffer(shaka.util.Pssh.normaliseInitData(a.initData));
        this.dispatchEvent(b)
      }
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySystemAccess = function (a, b) {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySystemAccess");
      this.keySystem = a;
      for (var c = !1, d = $jscomp.makeIterator(b), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        var f = {
          audioCapabilities: [],
          videoCapabilities: [],
          persistentState: "optional",
          distinctiveIdentifier: "optional",
          initDataTypes: e.initDataTypes,
          sessionTypes: ["temporary"],
          label: e.label
        }, g = !1;
        if (e.audioCapabilities) for (var h = $jscomp.makeIterator(e.audioCapabilities), k = h.next(); !k.done; k =
          h.next()) if (k = k.value, k.contentType) {
          g = !0;
          var l = k.contentType.split(";")[0];
          MSMediaKeys.isTypeSupported(this.keySystem, l) && (f.audioCapabilities.push(k), c = !0)
        }
        if (e.videoCapabilities) for (h = $jscomp.makeIterator(e.videoCapabilities), k = h.next(); !k.done; k = h.next()) k = k.value, k.contentType && (g = !0, l = k.contentType.split(";")[0], MSMediaKeys.isTypeSupported(this.keySystem, l) && (f.videoCapabilities.push(k), c = !0));
        g || (c = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
        "required" == e.persistentState && (c = !1);
        if (c) {
          this.configuration_ = f;
          return
        }
      }
      c = Error("Unsupported keySystem");
      c.name = "NotSupportedError";
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySystemAccess.prototype.createMediaKeys = function () {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySystemAccess.createMediaKeys");
      var a = new shaka.polyfill.PatchedMediaKeysMs.MediaKeys(this.keySystem);
      return Promise.resolve(a)
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySystemAccess.prototype.getConfiguration = function () {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySystemAccess.getConfiguration");
      return this.configuration_
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySystemAccess.setMediaKeys = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.setMediaKeys");
      goog.asserts.assert(this instanceof HTMLMediaElement, 'bad "this" for setMediaKeys');
      var b = shaka.polyfill.PatchedMediaKeysMs, c = this.mediaKeys;
      c && c != a && (goog.asserts.assert(c instanceof b.MediaKeys, "non-polyfill instance of oldMediaKeys"), c.setMedia(null));
      delete this.mediaKeys;
      return (this.mediaKeys = a) ? (goog.asserts.assert(a instanceof b.MediaKeys, "non-polyfill instance of newMediaKeys"),
        a.setMedia(this)) : Promise.resolve()
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeys = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeys");
      this.nativeMediaKeys_ = new MSMediaKeys(a);
      this.eventManager_ = new shaka.util.EventManager
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeys.prototype.createSession = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeys.createSession");
      a = a || "temporary";
      if ("temporary" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
      return new shaka.polyfill.PatchedMediaKeysMs.MediaKeySession(this.nativeMediaKeys_, a)
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeys.prototype.setServerCertificate = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeys.setServerCertificate");
      return Promise.resolve(!1)
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeys.prototype.setMedia = function (a) {
      var b = this, c = shaka.polyfill.PatchedMediaKeysMs;
      this.eventManager_.removeAll();
      if (!a) return Promise.resolve();
      this.eventManager_.listen(a, "msneedkey", c.onMsNeedKey_);
      try {
        return shaka.util.MediaReadyState.waitForReadyState(a, HTMLMediaElement.HAVE_METADATA, this.eventManager_, function () {
          a.msSetMediaKeys(b.nativeMediaKeys_)
        }), Promise.resolve()
      } catch (d) {
        return Promise.reject(d)
      }
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession = function (a, b) {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySession");
      shaka.util.FakeEventTarget.call(this);
      this.nativeMediaKeySession_ = null;
      this.nativeMediaKeys_ = a;
      this.updatePromise_ = this.generateRequestPromise_ = null;
      this.eventManager_ = new shaka.util.EventManager;
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new shaka.util.PublicPromise;
      this.keyStatuses = new shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap
    };
    $jscomp.inherits(shaka.polyfill.PatchedMediaKeysMs.MediaKeySession, shaka.util.FakeEventTarget);
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.generateRequest = function (a, b) {
      var c = this;
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySession.generateRequest");
      this.generateRequestPromise_ = new shaka.util.PublicPromise;
      try {
        this.nativeMediaKeySession_ = this.nativeMediaKeys_.createSession("video/mp4", shaka.util.BufferUtils.toUint8(b), null), this.eventManager_.listen(this.nativeMediaKeySession_, "mskeymessage", function (a) {
          return c.onMsKeyMessage_(a)
        }), this.eventManager_.listen(this.nativeMediaKeySession_,
          "mskeyadded", function (a) {
            return c.onMsKeyAdded_(a)
          }), this.eventManager_.listen(this.nativeMediaKeySession_, "mskeyerror", function (a) {
          return c.onMsKeyError_(a)
        }), this.updateKeyStatus_("status-pending")
      } catch (d) {
        this.generateRequestPromise_.reject(d)
      }
      return this.generateRequestPromise_
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.load = function () {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySession.load");
      return Promise.reject(Error("MediaKeySession.load not yet supported"))
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.update = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySession.update");
      this.updatePromise_ = new shaka.util.PublicPromise;
      try {
        this.nativeMediaKeySession_.update(shaka.util.BufferUtils.toUint8(a))
      } catch (b) {
        this.updatePromise_.reject(b)
      }
      return this.updatePromise_
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.close = function () {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySession.close");
      try {
        this.nativeMediaKeySession_.close(), this.closed.resolve(), this.eventManager_.removeAll()
      } catch (a) {
        this.closed.reject(a)
      }
      return this.closed
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.remove = function () {
      shaka.log.debug("PatchedMediaKeysMs.MediaKeySession.remove");
      return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.onMsKeyMessage_ = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.onMsKeyMessage_", a);
      goog.asserts.assert(this.generateRequestPromise_, "generateRequestPromise_ not set in onMsKeyMessage_");
      this.generateRequestPromise_ && (this.generateRequestPromise_.resolve(), this.generateRequestPromise_ = null);
      var b = void 0 == this.keyStatuses.getStatus();
      a = new shaka.util.FakeEvent("message", {
        messageType: b ? "license-request" : "license-renewal",
        message: shaka.util.BufferUtils.toArrayBuffer(a.message)
      });
      this.dispatchEvent(a)
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.onMsKeyAdded_ = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.onMsKeyAdded_", a);
      this.generateRequestPromise_ ? (shaka.log.debug("Simulating completion for a PR persistent license."), goog.asserts.assert(!this.updatePromise_, "updatePromise_ and generateRequestPromise_ set in onMsKeyAdded_"), this.updateKeyStatus_("usable"), this.generateRequestPromise_.resolve(), this.generateRequestPromise_ = null) : (goog.asserts.assert(this.updatePromise_, "updatePromise_ not set in onMsKeyAdded_"),
      this.updatePromise_ && (this.updateKeyStatus_("usable"), this.updatePromise_.resolve(), this.updatePromise_ = null))
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.onMsKeyError_ = function (a) {
      shaka.log.debug("PatchedMediaKeysMs.onMsKeyError_", a);
      a = Error("EME PatchedMediaKeysMs key error");
      a.errorCode = this.nativeMediaKeySession_.error;
      if (null != this.generateRequestPromise_) this.generateRequestPromise_.reject(a), this.generateRequestPromise_ = null; else if (null != this.updatePromise_) this.updatePromise_.reject(a), this.updatePromise_ = null; else switch (this.nativeMediaKeySession_.error.code) {
        case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
        case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
          this.updateKeyStatus_("output-not-allowed");
          break;
        default:
          this.updateKeyStatus_("internal-error")
      }
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeySession.prototype.updateKeyStatus_ = function (a) {
      this.keyStatuses.setStatus(a);
      a = new shaka.util.FakeEvent("keystatuseschange");
      this.dispatchEvent(a)
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap = function () {
      this.size = 0;
      this.status_ = void 0
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap.prototype.setStatus = function (a) {
      this.size = void 0 == a ? 0 : 1;
      this.status_ = a
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap.prototype.getStatus = function () {
      return this.status_
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap.prototype.forEach = function (a) {
      this.status_ && a(this.status_, shaka.media.DrmEngine.DUMMY_KEY_ID.value())
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap.prototype.get = function (a) {
      if (this.has(a)) return this.status_
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap.prototype.has = function (a) {
      var b = shaka.media.DrmEngine.DUMMY_KEY_ID.value();
      return this.status_ && shaka.util.BufferUtils.equal(a, b) ? !0 : !1
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap.prototype.entries = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for the compiler.")
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap.prototype.keys = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for the compiler.")
    };
    shaka.polyfill.PatchedMediaKeysMs.MediaKeyStatusMap.prototype.values = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for the compiler.")
    };
    shaka.polyfill.register(shaka.polyfill.PatchedMediaKeysMs.install);
    shaka.polyfill.PatchedMediaKeysNop = function () {
    };
    shaka.polyfill.PatchedMediaKeysNop.install = function () {
      if (!(!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration)) {
        shaka.log.info("EME not available.");
        var a = shaka.polyfill.PatchedMediaKeysNop;
        navigator.requestMediaKeySystemAccess = a.requestMediaKeySystemAccess;
        delete HTMLMediaElement.prototype.mediaKeys;
        HTMLMediaElement.prototype.mediaKeys = null;
        HTMLMediaElement.prototype.setMediaKeys = a.setMediaKeys;
        window.MediaKeys = a.MediaKeys;
        window.MediaKeySystemAccess =
          a.MediaKeySystemAccess
      }
    };
    shaka.polyfill.PatchedMediaKeysNop.requestMediaKeySystemAccess = function (a, b) {
      shaka.log.debug("PatchedMediaKeysNop.requestMediaKeySystemAccess");
      goog.asserts.assert(this == navigator, 'bad "this" for requestMediaKeySystemAccess');
      return Promise.reject(Error("The key system specified is not supported."))
    };
    shaka.polyfill.PatchedMediaKeysNop.setMediaKeys = function (a) {
      shaka.log.debug("PatchedMediaKeysNop.setMediaKeys");
      goog.asserts.assert(this instanceof HTMLMediaElement, 'bad "this" for setMediaKeys');
      return null == a ? Promise.resolve() : Promise.reject(Error("MediaKeys not supported."))
    };
    shaka.polyfill.PatchedMediaKeysNop.MediaKeys = function () {
      throw new TypeError("Illegal constructor.");
    };
    shaka.polyfill.PatchedMediaKeysNop.MediaKeys.prototype.createSession = function () {
    };
    shaka.polyfill.PatchedMediaKeysNop.MediaKeys.prototype.setServerCertificate = function () {
    };
    shaka.polyfill.PatchedMediaKeysNop.MediaKeySystemAccess = function () {
      this.keySystem = "";
      throw new TypeError("Illegal constructor.");
    };
    shaka.polyfill.PatchedMediaKeysNop.MediaKeySystemAccess.prototype.getConfiguration = function () {
    };
    shaka.polyfill.PatchedMediaKeysNop.MediaKeySystemAccess.prototype.createMediaKeys = function () {
    };
    shaka.polyfill.register(shaka.polyfill.PatchedMediaKeysNop.install, -10);
    shaka.polyfill.PatchedMediaKeysWebkit = function () {
    };
    shaka.polyfill.PatchedMediaKeysWebkit.install = function () {
      var a = shaka.polyfill.PatchedMediaKeysWebkit;
      if (!(!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration)) {
        if (HTMLMediaElement.prototype.webkitGenerateKeyRequest) shaka.log.info("Using webkit-prefixed EME v0.1b"), a.prefix_ = "webkit"; else if (HTMLMediaElement.prototype.generateKeyRequest) shaka.log.info("Using nonprefixed EME v0.1b"); else return;
        goog.asserts.assert(HTMLMediaElement.prototype[a.prefixApi_("generateKeyRequest")],
          "PatchedMediaKeysWebkit APIs not available!");
        navigator.requestMediaKeySystemAccess = a.requestMediaKeySystemAccess;
        delete HTMLMediaElement.prototype.mediaKeys;
        HTMLMediaElement.prototype.mediaKeys = null;
        HTMLMediaElement.prototype.setMediaKeys = a.setMediaKeys;
        window.MediaKeys = a.MediaKeys;
        window.MediaKeySystemAccess = a.MediaKeySystemAccess
      }
    };
    shaka.polyfill.PatchedMediaKeysWebkit.prefixApi_ = function (a) {
      var b = shaka.polyfill.PatchedMediaKeysWebkit.prefix_;
      return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a
    };
    shaka.polyfill.PatchedMediaKeysWebkit.requestMediaKeySystemAccess = function (a, b) {
      shaka.log.debug("PatchedMediaKeysWebkit.requestMediaKeySystemAccess");
      goog.asserts.assert(this == navigator, 'bad "this" for requestMediaKeySystemAccess');
      var c = shaka.polyfill.PatchedMediaKeysWebkit;
      try {
        var d = new c.MediaKeySystemAccess(a, b);
        return Promise.resolve(d)
      } catch (e) {
        return Promise.reject(e)
      }
    };
    shaka.polyfill.PatchedMediaKeysWebkit.setMediaKeys = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.setMediaKeys");
      goog.asserts.assert(this instanceof HTMLMediaElement, 'bad "this" for setMediaKeys');
      var b = shaka.polyfill.PatchedMediaKeysWebkit, c = this.mediaKeys;
      c && c != a && (goog.asserts.assert(c instanceof b.MediaKeys, "non-polyfill instance of oldMediaKeys"), c.setMedia(null));
      delete this.mediaKeys;
      if (this.mediaKeys = a) goog.asserts.assert(a instanceof b.MediaKeys, "non-polyfill instance of newMediaKeys"),
        a.setMedia(this);
      return Promise.resolve()
    };
    shaka.polyfill.PatchedMediaKeysWebkit.getVideoElement_ = function () {
      var a = document.getElementsByTagName("video");
      return a.length ? a[0] : document.createElement("video")
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySystemAccess = function (a, b) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySystemAccess");
      this.internalKeySystem_ = this.keySystem = a;
      var c = !1;
      "org.w3.clearkey" == a && (this.internalKeySystem_ = "webkit-org.w3.clearkey", c = !1);
      for (var d = !1, e = shaka.polyfill.PatchedMediaKeysWebkit.getVideoElement_(), f = $jscomp.makeIterator(b), g = f.next(); !g.done; g = f.next()) {
        g = g.value;
        var h = {
          audioCapabilities: [], videoCapabilities: [], persistentState: "optional", distinctiveIdentifier: "optional",
          initDataTypes: g.initDataTypes, sessionTypes: ["temporary"], label: g.label
        }, k = !1;
        if (g.audioCapabilities) for (var l = $jscomp.makeIterator(g.audioCapabilities), m = l.next(); !m.done; m = l.next()) if (m = m.value, m.contentType) {
          k = !0;
          var n = m.contentType.split(";")[0];
          e.canPlayType(n, this.internalKeySystem_) && (h.audioCapabilities.push(m), d = !0)
        }
        if (g.videoCapabilities) for (l = $jscomp.makeIterator(g.videoCapabilities), m = l.next(); !m.done; m = l.next()) m = m.value, m.contentType && (k = !0, e.canPlayType(m.contentType, this.internalKeySystem_) &&
        (h.videoCapabilities.push(m), d = !0));
        k || (d = e.canPlayType("video/mp4", this.internalKeySystem_) || e.canPlayType("video/webm", this.internalKeySystem_));
        "required" == g.persistentState && (c ? (h.persistentState = "required", h.sessionTypes = ["persistent-license"]) : d = !1);
        if (d) {
          this.configuration_ = h;
          return
        }
      }
      c = "Unsupported keySystem";
      if ("org.w3.clearkey" == a || "com.widevine.alpha" == a) c = "None of the requested configurations were supported.";
      c = Error(c);
      c.name = "NotSupportedError";
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySystemAccess.prototype.createMediaKeys = function () {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySystemAccess.createMediaKeys");
      var a = new shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys(this.internalKeySystem_);
      return Promise.resolve(a)
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySystemAccess.prototype.getConfiguration = function () {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySystemAccess.getConfiguration");
      return this.configuration_
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeys");
      this.keySystem_ = a;
      this.media_ = null;
      this.eventManager_ = new shaka.util.EventManager;
      this.newSessions_ = [];
      this.sessionMap_ = new Map
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys.prototype.setMedia = function (a) {
      var b = this;
      this.media_ = a;
      this.eventManager_.removeAll();
      var c = shaka.polyfill.PatchedMediaKeysWebkit.prefix_;
      a && (this.eventManager_.listen(a, c + "needkey", function (a) {
        return b.onWebkitNeedKey_(a)
      }), this.eventManager_.listen(a, c + "keymessage", function (a) {
        return b.onWebkitKeyMessage_(a)
      }), this.eventManager_.listen(a, c + "keyadded", function (a) {
        return b.onWebkitKeyAdded_(a)
      }), this.eventManager_.listen(a, c + "keyerror", function (a) {
        return b.onWebkitKeyError_(a)
      }))
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys.prototype.createSession = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeys.createSession");
      a = a || "temporary";
      if ("temporary" != a && "persistent-license" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
      var b = shaka.polyfill.PatchedMediaKeysWebkit, c = this.media_ || document.createElement("video");
      c.src || (c.src = "about:blank");
      a = new b.MediaKeySession(c, this.keySystem_, a);
      this.newSessions_.push(a);
      return a
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys.prototype.setServerCertificate = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeys.setServerCertificate");
      return Promise.resolve(!1)
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys.prototype.onWebkitNeedKey_ = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.onWebkitNeedKey_", a);
      goog.asserts.assert(this.media_, "media_ not set in onWebkitNeedKey_");
      var b = document.createEvent("CustomEvent");
      b.initCustomEvent("encrypted", !1, !1, null);
      b.initDataType = "cenc";
      b.initData = shaka.util.BufferUtils.toArrayBuffer(a.initData);
      this.media_.dispatchEvent(b)
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys.prototype.onWebkitKeyMessage_ = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.onWebkitKeyMessage_", a);
      var b = this.findSession_(a.sessionId);
      if (b) {
        var c = void 0 == b.keyStatuses.getStatus();
        a = new shaka.util.FakeEvent("message", {
          messageType: c ? "licenserequest" : "licenserenewal",
          message: a.message
        });
        b.generated();
        b.dispatchEvent(a)
      } else shaka.log.error("Session not found", a.sessionId)
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys.prototype.onWebkitKeyAdded_ = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.onWebkitKeyAdded_", a);
      a = this.findSession_(a.sessionId);
      goog.asserts.assert(a, "unable to find session in onWebkitKeyAdded_");
      a && a.ready()
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys.prototype.onWebkitKeyError_ = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.onWebkitKeyError_", a);
      var b = this.findSession_(a.sessionId);
      goog.asserts.assert(b, "unable to find session in onWebkitKeyError_");
      b && b.handleError(a)
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeys.prototype.findSession_ = function (a) {
      var b = this.sessionMap_.get(a);
      return b ? (shaka.log.debug("PatchedMediaKeysWebkit.MediaKeys.findSession_", b), b) : (b = this.newSessions_.shift()) ? (b.sessionId = a, this.sessionMap_.set(a, b), shaka.log.debug("PatchedMediaKeysWebkit.MediaKeys.findSession_", b), b) : null
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession = function (a, b, c) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession");
      shaka.util.FakeEventTarget.call(this);
      this.media_ = a;
      this.initialized_ = !1;
      this.updatePromise_ = this.generatePromise_ = null;
      this.keySystem_ = b;
      this.type_ = c;
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new shaka.util.PublicPromise;
      this.keyStatuses = new shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap
    };
    $jscomp.inherits(shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession, shaka.util.FakeEventTarget);
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.generated = function () {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession.generated");
      this.generatePromise_ && (this.generatePromise_.resolve(), this.generatePromise_ = null)
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.ready = function () {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession.ready");
      this.updateKeyStatus_("usable");
      this.updatePromise_ && this.updatePromise_.resolve();
      this.updatePromise_ = null
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.handleError = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession.handleError", a);
      var b = Error("EME v0.1b key error"), c = a.errorCode;
      c.systemCode = a.systemCode;
      b.errorCode = c;
      !a.sessionId && this.generatePromise_ ? (45 == a.systemCode && (b.message = "Unsupported session type."), this.generatePromise_.reject(b), this.generatePromise_ = null) : a.sessionId && this.updatePromise_ ? (this.updatePromise_.reject(b), this.updatePromise_ = null) : (b = a.systemCode,
        a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? this.updateKeyStatus_("output-restricted") : 1 == b ? this.updateKeyStatus_("expired") : this.updateKeyStatus_("internal-error"))
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.generate_ = function (a, b) {
      var c = this, d = shaka.polyfill.PatchedMediaKeysWebkit;
      if (this.initialized_) return Promise.reject(Error("The session is already initialized."));
      this.initialized_ = !0;
      try {
        if ("persistent-license" == this.type_) {
          var e = shaka.util.StringUtils;
          if (b) var f = shaka.util.BufferUtils.toUint8(e.toUTF8("LOAD_SESSION|" + b)); else {
            goog.asserts.assert(a, "expecting init data");
            var g = e.toUTF8("PERSISTENT|");
            f = shaka.util.Uint8ArrayUtils.concat(g,
              a)
          }
        } else goog.asserts.assert("temporary" == this.type_, "expected temporary session"), goog.asserts.assert(!b, "unexpected offline session ID"), goog.asserts.assert(a, "expecting init data"), f = shaka.util.BufferUtils.toUint8(a);
        goog.asserts.assert(f, "init data not set!")
      } catch (k) {
        return Promise.reject(k)
      }
      goog.asserts.assert(null == this.generatePromise_, "generatePromise_ should be null");
      this.generatePromise_ = new shaka.util.PublicPromise;
      var h = d.prefixApi_("generateKeyRequest");
      try {
        this.media_[h](this.keySystem_,
          f)
      } catch (k) {
        if ("InvalidStateError" != k.name) return this.generatePromise_ = null, Promise.reject(k);
        (new shaka.util.Timer(function () {
          try {
            c.media_[h](c.keySystem_, f)
          } catch (l) {
            c.generatePromise_.reject(l), c.generatePromise_ = null
          }
        })).tickAfter(.01)
      }
      return this.generatePromise_
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.update_ = function (a, b) {
      var c = this, d = shaka.polyfill.PatchedMediaKeysWebkit;
      if (this.updatePromise_) this.updatePromise_.then(function () {
        return c.update_(a, b)
      })["catch"](function () {
        return c.update_(a, b)
      }); else {
        this.updatePromise_ = a;
        if ("webkit-org.w3.clearkey" == this.keySystem_) {
          var e = shaka.util.Uint8ArrayUtils;
          var f = shaka.util.StringUtils.fromUTF8(b);
          var g = JSON.parse(f);
          "oct" != g.keys[0].kty && (this.updatePromise_.reject(Error("Response is not a valid JSON Web Key Set.")),
            this.updatePromise_ = null);
          f = e.fromBase64(g.keys[0].k);
          e = e.fromBase64(g.keys[0].kid)
        } else f = shaka.util.BufferUtils.toUint8(b), e = null;
        d = d.prefixApi_("addKey");
        try {
          this.media_[d](this.keySystem_, f, e, this.sessionId)
        } catch (h) {
          this.updatePromise_.reject(h), this.updatePromise_ = null
        }
      }
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.updateKeyStatus_ = function (a) {
      this.keyStatuses.setStatus(a);
      a = new shaka.util.FakeEvent("keystatuseschange");
      this.dispatchEvent(a)
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.generateRequest = function (a, b) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession.generateRequest");
      return this.generate_(b, null)
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.load = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession.load");
      return "persistent-license" == this.type_ ? this.generate_(null, a) : Promise.reject(Error("Not a persistent session."))
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.update = function (a) {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession.update", a);
      goog.asserts.assert(this.sessionId, "update without session ID");
      var b = new shaka.util.PublicPromise;
      this.update_(b, a);
      return b
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.close = function () {
      var a = shaka.polyfill.PatchedMediaKeysWebkit;
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession.close");
      if ("persistent-license" != this.type_) {
        if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
        a = a.prefixApi_("cancelKeyRequest");
        try {
          this.media_[a](this.keySystem_, this.sessionId)
        } catch (b) {
        }
      }
      this.closed.resolve();
      return this.closed
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeySession.prototype.remove = function () {
      shaka.log.debug("PatchedMediaKeysWebkit.MediaKeySession.remove");
      return "persistent-license" != this.type_ ? Promise.reject(Error("Not a persistent session.")) : this.close()
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap = function () {
      this.size = 0;
      this.status_ = void 0
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap.prototype.setStatus = function (a) {
      this.size = void 0 == a ? 0 : 1;
      this.status_ = a
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap.prototype.getStatus = function () {
      return this.status_
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap.prototype.forEach = function (a) {
      this.status_ && a(this.status_, shaka.media.DrmEngine.DUMMY_KEY_ID.value())
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap.prototype.get = function (a) {
      if (this.has(a)) return this.status_
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap.prototype.has = function (a) {
      var b = shaka.media.DrmEngine.DUMMY_KEY_ID.value();
      return this.status_ && shaka.util.BufferUtils.equal(a, b) ? !0 : !1
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap.prototype.entries = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for compiler.")
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap.prototype.keys = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for compiler.")
    };
    shaka.polyfill.PatchedMediaKeysWebkit.MediaKeyStatusMap.prototype.values = function () {
      goog.asserts.assert(!1, "Not used!  Provided only for compiler.")
    };
    shaka.polyfill.PatchedMediaKeysWebkit.prefix_ = "";
    shaka.polyfill.register(shaka.polyfill.PatchedMediaKeysWebkit.install);
    shaka.polyfill.PiPWebkit = function () {
    };
    shaka.polyfill.PiPWebkit.install = function () {
      if (window.HTMLVideoElement) {
        var a = HTMLVideoElement.prototype;
        if ((!a.requestPictureInPicture || !document.exitPictureInPicture) && a.webkitSupportsPresentationMode) {
          var b = shaka.polyfill.PiPWebkit;
          shaka.log.debug("PiPWebkit.install");
          document.pictureInPictureEnabled = !0;
          document.pictureInPictureElement = null;
          a.requestPictureInPicture = b.requestPictureInPicture_;
          Object.defineProperty(a, "disablePictureInPicture", {
            get: b.getDisablePictureInPicture_, set: b.setDisablePictureInPicture_,
            enumerable: !0, configurable: !0
          });
          document.exitPictureInPicture = b.exitPictureInPicture_;
          document.addEventListener("webkitpresentationmodechanged", b.proxyEvent_, !0)
        }
      }
    };
    shaka.polyfill.PiPWebkit.proxyEvent_ = function (a) {
      a = a.target;
      if (a.webkitPresentationMode == shaka.polyfill.PiPWebkit.PIP_MODE_) {
        document.pictureInPictureElement = a;
        var b = new Event("enterpictureinpicture");
        a.dispatchEvent(b)
      } else document.pictureInPictureElement == a && (document.pictureInPictureElement = null), b = new Event("leavepictureinpicture"), a.dispatchEvent(b)
    };
    shaka.polyfill.PiPWebkit.requestPictureInPicture_ = function () {
      var a = shaka.polyfill.PiPWebkit;
      return this.webkitSupportsPresentationMode(a.PIP_MODE_) ? (this.webkitSetPresentationMode(a.PIP_MODE_), document.pictureInPictureElement = this, Promise.resolve()) : Promise.reject(Error("PiP not allowed by video element"))
    };
    shaka.polyfill.PiPWebkit.exitPictureInPicture_ = function () {
      var a = shaka.polyfill.PiPWebkit, b = document.pictureInPictureElement;
      return b ? (b.webkitSetPresentationMode(a.INLINE_MODE_), document.pictureInPictureElement = null, Promise.resolve()) : Promise.reject(Error("No picture in picture element found"))
    };
    shaka.polyfill.PiPWebkit.getDisablePictureInPicture_ = function () {
      return this.hasAttribute("disablePictureInPicture") ? !0 : !this.webkitSupportsPresentationMode(shaka.polyfill.PiPWebkit.PIP_MODE_)
    };
    shaka.polyfill.PiPWebkit.setDisablePictureInPicture_ = function (a) {
      a ? this.setAttribute("disablePictureInPicture", "") : this.removeAttribute("disablePictureInPicture")
    };
    shaka.polyfill.PiPWebkit.PIP_MODE_ = "picture-in-picture";
    shaka.polyfill.PiPWebkit.INLINE_MODE_ = "inline";
    shaka.polyfill.register(shaka.polyfill.PiPWebkit.install);
    shaka.polyfill.VideoPlayPromise = function () {
    };
    shaka.polyfill.VideoPlayPromise.install = function () {
      shaka.log.debug("VideoPlayPromise.install");
      if (window.HTMLMediaElement) {
        var a = HTMLMediaElement.prototype.play;
        HTMLMediaElement.prototype.play = function () {
          var b = a.apply(this);
          b && b["catch"](function () {
          });
          return b
        }
      }
    };
    shaka.polyfill.register(shaka.polyfill.VideoPlayPromise.install);
    shaka.polyfill.VideoPlaybackQuality = function () {
    };
    shaka.polyfill.VideoPlaybackQuality.install = function () {
      if (window.HTMLVideoElement) {
        var a = HTMLVideoElement.prototype;
        !a.getVideoPlaybackQuality && "webkitDroppedFrameCount" in a && (a.getVideoPlaybackQuality = shaka.polyfill.VideoPlaybackQuality.webkit_)
      }
    };
    shaka.polyfill.VideoPlaybackQuality.webkit_ = function () {
      return {
        droppedVideoFrames: this.webkitDroppedFrameCount,
        totalVideoFrames: this.webkitDecodedFrameCount,
        corruptedVideoFrames: 0,
        creationTime: NaN,
        totalFrameDelay: 0
      }
    };
    shaka.polyfill.register(shaka.polyfill.VideoPlaybackQuality.install);
    shaka.polyfill.VTTCue = function () {
    };
    shaka.polyfill.VTTCue.install = function () {
      if (window.VTTCue) shaka.log.info("Using native VTTCue."); else if (window.TextTrackCue) {
        var a = null, b = TextTrackCue.length;
        3 == b ? (shaka.log.info("Using VTTCue polyfill from 3 argument TextTrackCue."), a = shaka.polyfill.VTTCue.from3ArgsTextTrackCue_) : 6 == b ? (shaka.log.info("Using VTTCue polyfill from 6 argument TextTrackCue."), a = shaka.polyfill.VTTCue.from6ArgsTextTrackCue_) : shaka.polyfill.VTTCue.canUse3ArgsTextTrackCue_() && (shaka.log.info("Using VTTCue polyfill from 3 argument TextTrackCue."), a =
          shaka.polyfill.VTTCue.from3ArgsTextTrackCue_);
        a ? window.VTTCue = function (b, d, e) {
          return a(b, d, e)
        } : shaka.log.error("No recognized signature for TextTrackCue found!")
      } else shaka.log.error("VTTCue not available.")
    };
    shaka.polyfill.VTTCue.from3ArgsTextTrackCue_ = function (a, b, c) {
      return new window.TextTrackCue(a, b, c)
    };
    shaka.polyfill.VTTCue.from6ArgsTextTrackCue_ = function (a, b, c) {
      return new window.TextTrackCue(a + "-" + b + "-" + c, a, b, c)
    };
    shaka.polyfill.VTTCue.canUse3ArgsTextTrackCue_ = function () {
      try {
        return !!shaka.polyfill.VTTCue.from3ArgsTextTrackCue_(1, 2, "")
      } catch (a) {
        return !1
      }
    };
    shaka.polyfill.register(shaka.polyfill.VTTCue.install);
    shaka.text.TtmlTextParser = function () {
    };
    shaka.text.TtmlTextParser.prototype.parseInit = function (a) {
      goog.asserts.assert(!1, "TTML does not have init segments")
    };
    shaka.text.TtmlTextParser.prototype.parseMedia = function (a, b) {
      var c = shaka.text.TtmlTextParser, d = shaka.util.XmlUtils, e = c.parameterNs_,
        f = shaka.util.StringUtils.fromUTF8(a), g = [], h = new DOMParser, k = null;
      if ("" == f) return g;
      try {
        k = h.parseFromString(f, "text/xml")
      } catch (v) {
        throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_XML, "Failed to parse TTML.");
      }
      if (k) {
        if (f = k.getElementsByTagName("parsererror")[0]) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL,
          shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_XML, f.textContent);
        if (k = k.getElementsByTagName("tt")[0]) {
          f = d.getAttributeNS(k, e, "frameRate");
          h = d.getAttributeNS(k, e, "subFrameRate");
          var l = d.getAttributeNS(k, e, "frameRateMultiplier");
          var m = d.getAttributeNS(k, e, "tickRate");
          var n = d.getAttributeNS(k, e, "cellResolution");
          d = k.getAttribute("xml:space") || "default";
          e = k.getAttribute("tts:extent")
        } else throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_XML,
          "TTML does not contain <tt> tag.");
        if ("default" != d && "preserve" != d) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_XML, "Invalid xml:space value: " + d);
        d = "default" == d;
        f = new c.RateInfo_(f, h, l, m);
        h = c.getCellResolution_(n);
        l = c.getLeafNodes_(k.getElementsByTagName("metadata")[0]);
        m = c.getLeafNodes_(k.getElementsByTagName("styling")[0]);
        n = c.getLeafNodes_(k.getElementsByTagName("layout")[0]);
        for (var p = [], q = $jscomp.makeIterator(n), r =
          q.next(); !r.done; r = q.next()) (r = c.parseCueRegion_(r.value, m, e)) && p.push(r);
        k = c.getLeafCues_(k.getElementsByTagName("body")[0]);
        k = $jscomp.makeIterator(k);
        for (e = k.next(); !e.done; e = k.next()) (e = c.parseCue_(e.value, b.periodStart, f, l, m, n, p, d, !1, h)) && g.push(e)
      }
      return g
    };
    shaka.text.TtmlTextParser.getLeafNodes_ = function (a) {
      var b = [];
      if (!a) return b;
      for (var c = $jscomp.makeIterator(a.childNodes), d = c.next(); !d.done; d = c.next()) d = d.value, d.nodeType == Node.ELEMENT_NODE && "br" !== d.nodeName && (goog.asserts.assert(d instanceof Element, "Node should be Element!"), d = shaka.text.TtmlTextParser.getLeafNodes_(d), goog.asserts.assert(0 < d.length, "Only a null Element should return no leaves!"), b = b.concat(d));
      b.length || b.push(a);
      return b
    };
    shaka.text.TtmlTextParser.getLeafCues_ = function (a) {
      if (!a) return [];
      var b = [];
      a = $jscomp.makeIterator(a.childNodes);
      for (var c = a.next(); !c.done; c = a.next()) c = c.value, c instanceof Element && (c.hasAttribute("begin") ? b.push(c) : b = b.concat(shaka.text.TtmlTextParser.getLeafCues_(c)));
      return b
    };
    shaka.text.TtmlTextParser.sanitizeTextContent_ = function (a, b) {
      for (var c = "", d = $jscomp.makeIterator(a.childNodes), e = d.next(); !e.done; e = d.next()) e = e.value, "br" == e.nodeName && a.childNodes[0] !== e ? c += "\n" : e.childNodes && 0 < e.childNodes.length ? c += shaka.text.TtmlTextParser.sanitizeTextContent_(e, b) : b ? (e = e.textContent.trim(), e = e.replace(/\s+/g, " "), c += e) : c += e.textContent;
      return c
    };
    shaka.text.TtmlTextParser.parseCue_ = function (a, b, c, d, e, f, g, h, k, l) {
      if (k && "br" == a.nodeName) return a = new shaka.text.Cue(0, 0, ""), a.spacer = !0, a;
      var m = /^[\s\n]*$/.test(a.textContent),
        n = a.nodeType == Node.ELEMENT_NODE && !a.hasAttribute("begin") && !a.hasAttribute("end");
      if (a.nodeType != Node.ELEMENT_NODE || n && m || n && !k) return null;
      m = shaka.text.TtmlTextParser.parseTime_(a.getAttribute("begin"), c);
      n = shaka.text.TtmlTextParser.parseTime_(a.getAttribute("end"), c);
      var p = shaka.text.TtmlTextParser.parseTime_(a.getAttribute("dur"),
        c);
      null == n && null != p && (n = m + p);
      if (!k && (null == m || null == n)) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_TEXT_CUE);
      m = k && null == m ? 0 : m + b;
      n = k && null == n ? 0 : n + b;
      p = "";
      k = [];
      if (Array.from(a.childNodes).some(function (a) {
        return a.nodeType == Node.TEXT_NODE && /\S+/.test(a.textContent)
      })) p = shaka.text.TtmlTextParser.sanitizeTextContent_(a, h); else for (var q = $jscomp.makeIterator(a.childNodes), r = q.next(); !r.done; r = q.next()) if (r = shaka.text.TtmlTextParser.parseCue_(r.value,
        b, c, d, e, f, g, h, !0, l)) r.startTime = r.startTime || m, r.endTime = r.endTime || n, k.push(r);
      b = new shaka.text.Cue(m, n, p);
      b.nestedCues = k;
      l && (b.cellResolution = l);
      if ((f = shaka.text.TtmlTextParser.getElementsFromCollection_(a, "region", f, "")[0]) && f.getAttribute("xml:id")) {
        var v = f.getAttribute("xml:id");
        b.region = g.filter(function (a) {
          return a.id == v
        })[0]
      }
      d = shaka.text.TtmlTextParser.getElementsFromCollection_(a, "smpte:backgroundImage", d, "#")[0];
      shaka.text.TtmlTextParser.addStyle_(b, a, f, d, e);
      return b
    };
    shaka.text.TtmlTextParser.parseCueRegion_ = function (a, b, c) {
      var d = shaka.text.TtmlTextParser, e = new shaka.text.CueRegion, f = a.getAttribute("xml:id");
      if (!f) return shaka.log.warning("TtmlTextParser parser encountered a region with no id. Region will be ignored."), null;
      e.id = f;
      f = null;
      c && (f = d.percentValues_.exec(c) || d.pixelValues_.exec(c));
      c = f ? Number(f[1]) : null;
      f = f ? Number(f[2]) : null;
      var g, h;
      if (g = d.getStyleAttributeFromRegion_(a, b, "extent")) g = (h = d.percentValues_.exec(g)) || d.pixelValues_.exec(g), null != g && (e.width =
        null != c ? 100 * Number(g[1]) / c : Number(g[1]), e.height = null != f ? 100 * Number(g[2]) / f : Number(g[2]), e.widthUnits = h || null != c ? shaka.text.CueRegion.units.PERCENTAGE : shaka.text.CueRegion.units.PX, e.heightUnits = h || null != f ? shaka.text.CueRegion.units.PERCENTAGE : shaka.text.CueRegion.units.PX);
      if (a = d.getStyleAttributeFromRegion_(a, b, "origin")) g = (h = d.percentValues_.exec(a)) || d.pixelValues_.exec(a), null != g && (e.viewportAnchorX = null != f ? 100 * Number(g[1]) / f : Number(g[1]), e.viewportAnchorY = null != c ? 100 * Number(g[2]) / c : Number(g[2]),
        e.viewportAnchorUnits = h || null != c ? shaka.text.CueRegion.units.PERCENTAGE : shaka.text.CueRegion.units.PX);
      return e
    };
    shaka.text.TtmlTextParser.addStyle_ = function (a, b, c, d, e) {
      var f = shaka.text.TtmlTextParser, g = shaka.text.Cue;
      "rtl" == f.getStyleAttribute_(b, c, e, "direction") && (a.direction = g.direction.HORIZONTAL_RIGHT_TO_LEFT);
      var h = f.getStyleAttribute_(b, c, e, "writingMode");
      "tb" == h || "tblr" == h ? a.writingMode = g.writingMode.VERTICAL_LEFT_TO_RIGHT : "tbrl" == h ? a.writingMode = g.writingMode.VERTICAL_RIGHT_TO_LEFT : "rltb" == h || "rl" == h ? a.direction = g.direction.HORIZONTAL_RIGHT_TO_LEFT : h && (a.direction = g.direction.HORIZONTAL_LEFT_TO_RIGHT);
      (h = f.getStyleAttribute_(b, c, e, "textAlign")) ? (a.positionAlign = f.textAlignToPositionAlign_[h], a.lineAlign = f.textAlignToLineAlign_[h], goog.asserts.assert(h.toUpperCase() in g.textAlign, h.toUpperCase() + " Should be in Cue.textAlign values!"), a.textAlign = g.textAlign[h.toUpperCase()]) : a.textAlign = g.textAlign.START;
      if (h = f.getStyleAttribute_(b, c, e, "displayAlign")) goog.asserts.assert(h.toUpperCase() in g.displayAlign, h.toUpperCase() + " Should be in Cue.displayAlign values!"), a.displayAlign = g.displayAlign[h.toUpperCase()];
      if (h = f.getStyleAttribute_(b, c, e, "color")) a.color = h;
      if (h = f.getStyleAttribute_(b, c, e, "backgroundColor")) a.backgroundColor = h;
      if (h = f.getStyleAttribute_(b, c, e, "border")) a.border = h;
      if (h = f.getStyleAttribute_(b, c, e, "fontFamily")) a.fontFamily = h;
      (h = f.getStyleAttribute_(b, c, e, "fontWeight")) && "bold" == h && (a.fontWeight = g.fontWeight.BOLD);
      (h = f.getStyleAttribute_(b, c, e, "wrapOption")) && "noWrap" == h && (a.wrapLine = !1);
      (h = f.getStyleAttribute_(b, c, e, "lineHeight")) && h.match(f.unitValues_) && (a.lineHeight = h);
      (h = f.getStyleAttribute_(b,
        c, e, "fontSize")) && (h.match(f.unitValues_) || h.match(f.percentValue_)) && (a.fontSize = h);
      if (h = f.getStyleAttribute_(b, c, e, "fontStyle")) goog.asserts.assert(h.toUpperCase() in g.fontStyle, h.toUpperCase() + " Should be in Cue.fontStyle values!"), a.fontStyle = g.fontStyle[h.toUpperCase()];
      d && (g = d.getAttribute("imagetype"), h = d.getAttribute("encoding"), d = d.textContent.trim(), "PNG" == g && "Base64" == h && d && (a.backgroundImage = "data:image/png;base64," + d));
      (d = f.getStyleAttribute_(b, c, e, "letterSpacing")) && d.match(f.unitValues_) &&
      (a.letterSpacing = d);
      (d = f.getStyleAttribute_(b, c, e, "linePadding")) && d.match(f.unitValues_) && (a.linePadding = d);
      if (d = f.getStyleAttribute_(b, c, e, "opacity")) a.opacity = parseFloat(d);
      (c = f.getStyleAttributeFromRegion_(c, e, "textDecoration")) && f.addTextDecoration_(a, c);
      (b = f.getStyleAttributeFromElement_(b, e, "textDecoration")) && f.addTextDecoration_(a, b)
    };
    shaka.text.TtmlTextParser.addTextDecoration_ = function (a, b) {
      for (var c = shaka.text.Cue, d = $jscomp.makeIterator(b.split(" ")), e = d.next(); !e.done; e = d.next()) switch (e.value) {
        case "underline":
          a.textDecoration.includes(c.textDecoration.UNDERLINE) || a.textDecoration.push(c.textDecoration.UNDERLINE);
          break;
        case "noUnderline":
          a.textDecoration.includes(c.textDecoration.UNDERLINE) && shaka.util.ArrayUtils.remove(a.textDecoration, c.textDecoration.UNDERLINE);
          break;
        case "lineThrough":
          a.textDecoration.includes(c.textDecoration.LINE_THROUGH) ||
          a.textDecoration.push(c.textDecoration.LINE_THROUGH);
          break;
        case "noLineThrough":
          a.textDecoration.includes(c.textDecoration.LINE_THROUGH) && shaka.util.ArrayUtils.remove(a.textDecoration, c.textDecoration.LINE_THROUGH);
          break;
        case "overline":
          a.textDecoration.includes(c.textDecoration.OVERLINE) || a.textDecoration.push(c.textDecoration.OVERLINE);
          break;
        case "noOverline":
          a.textDecoration.includes(c.textDecoration.OVERLINE) && shaka.util.ArrayUtils.remove(a.textDecoration, c.textDecoration.OVERLINE)
      }
    };
    shaka.text.TtmlTextParser.getStyleAttribute_ = function (a, b, c, d) {
      var e = shaka.text.TtmlTextParser;
      return (a = e.getStyleAttributeFromElement_(a, c, d)) ? a : e.getStyleAttributeFromRegion_(b, c, d)
    };
    shaka.text.TtmlTextParser.getStyleAttributeFromRegion_ = function (a, b, c) {
      var d = shaka.util.XmlUtils, e = shaka.text.TtmlTextParser.styleNs_;
      if (!a) return null;
      var f = shaka.text.TtmlTextParser.getLeafNodes_(a);
      f = $jscomp.makeIterator(f);
      for (var g = f.next(); !g.done; g = f.next()) if (g = d.getAttributeNS(g.value, e, c)) return g;
      return shaka.text.TtmlTextParser.getInheritedStyleAttribute_(a, b, c)
    };
    shaka.text.TtmlTextParser.getStyleAttributeFromElement_ = function (a, b, c) {
      var d = shaka.util.XmlUtils.getAttributeNS(a, shaka.text.TtmlTextParser.styleNs_, c);
      return d ? d : shaka.text.TtmlTextParser.getInheritedStyleAttribute_(a, b, c)
    };
    shaka.text.TtmlTextParser.getInheritedStyleAttribute_ = function (a, b, c) {
      var d = shaka.util.XmlUtils, e = shaka.text.TtmlTextParser.styleNs_, f = shaka.text.TtmlTextParser.styleEbuttsNs_;
      a = shaka.text.TtmlTextParser.getElementsFromCollection_(a, "style", b, "");
      for (var g = null, h = 0; h < a.length; h++) {
        var k = d.getAttributeNS(a[h], f, c);
        k || (k = d.getAttributeNS(a[h], e, c));
        k || (k = shaka.text.TtmlTextParser.getStyleAttributeFromElement_(a[h], b, c));
        k && (g = k)
      }
      return g
    };
    shaka.text.TtmlTextParser.getElementsFromCollection_ = function (a, b, c, d) {
      var e = [];
      if (!a || 1 > c.length) return e;
      if (a = shaka.text.TtmlTextParser.getInheritedAttribute_(a, b)) for (a = a.split(" "), a = $jscomp.makeIterator(a), b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        for (var f = $jscomp.makeIterator(c), g = f.next(); !g.done; g = f.next()) if (g = g.value, d + g.getAttribute("xml:id") == b) {
          e.push(g);
          break
        }
      }
      return e
    };
    shaka.text.TtmlTextParser.getInheritedAttribute_ = function (a, b) {
      for (var c = null; a && !(c = a.getAttribute(b));) {
        var d = a.parentNode;
        if (d instanceof Element) a = d; else break
      }
      return c
    };
    shaka.text.TtmlTextParser.parseTime_ = function (a, b) {
      var c = null, d = shaka.text.TtmlTextParser;
      d.timeColonFormatFrames_.test(a) ? c = d.parseColonTimeWithFrames_(b, a) : d.timeColonFormat_.test(a) ? c = d.parseTimeFromRegex_(d.timeColonFormat_, a) : d.timeColonFormatMilliseconds_.test(a) ? c = d.parseTimeFromRegex_(d.timeColonFormatMilliseconds_, a) : d.timeFramesFormat_.test(a) ? c = d.parseFramesTime_(b, a) : d.timeTickFormat_.test(a) ? c = d.parseTickTime_(b, a) : d.timeHMSFormat_.test(a) && (c = d.parseTimeFromRegex_(d.timeHMSFormat_, a));
      return c
    };
    shaka.text.TtmlTextParser.parseFramesTime_ = function (a, b) {
      var c = shaka.text.TtmlTextParser.timeFramesFormat_.exec(b);
      return Number(c[1]) / a.frameRate
    };
    shaka.text.TtmlTextParser.parseTickTime_ = function (a, b) {
      var c = shaka.text.TtmlTextParser.timeTickFormat_.exec(b);
      return Number(c[1]) / a.tickRate
    };
    shaka.text.TtmlTextParser.parseColonTimeWithFrames_ = function (a, b) {
      var c = shaka.text.TtmlTextParser.timeColonFormatFrames_.exec(b), d = Number(c[1]), e = Number(c[2]),
        f = Number(c[3]), g = Number(c[4]);
      g += (Number(c[5]) || 0) / a.subFrameRate;
      f += g / a.frameRate;
      return f + 60 * e + 3600 * d
    };
    shaka.text.TtmlTextParser.parseTimeFromRegex_ = function (a, b) {
      var c = a.exec(b);
      return null == c || "" == c[0] ? null : (Number(c[4]) || 0) / 1E3 + (Number(c[3]) || 0) + 60 * (Number(c[2]) || 0) + 3600 * (Number(c[1]) || 0)
    };
    shaka.text.TtmlTextParser.getCellResolution_ = function (a) {
      if (!a) return null;
      var b = /^(\d+) (\d+)$/.exec(a);
      if (!b) return null;
      a = parseInt(b[1], 10);
      b = parseInt(b[2], 10);
      return {columns: a, rows: b}
    };
    goog.exportSymbol("shaka.text.TtmlTextParser", shaka.text.TtmlTextParser);
    goog.exportProperty(shaka.text.TtmlTextParser.prototype, "parseMedia", shaka.text.TtmlTextParser.prototype.parseMedia);
    goog.exportProperty(shaka.text.TtmlTextParser.prototype, "parseInit", shaka.text.TtmlTextParser.prototype.parseInit);
    shaka.text.TtmlTextParser.RateInfo_ = function (a, b, c, d) {
      this.frameRate = Number(a) || 30;
      this.subFrameRate = Number(b) || 1;
      this.tickRate = Number(d);
      0 == this.tickRate && (this.tickRate = a ? this.frameRate * this.subFrameRate : 1);
      c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= Number(a[1]) / Number(a[2]))
    };
    shaka.text.TtmlTextParser.percentValues_ = /^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/;
    shaka.text.TtmlTextParser.percentValue_ = /^(\d{1,2}(?:\.\d+)?|100)%$/;
    shaka.text.TtmlTextParser.unitValues_ = /^(\d+px|\d+em|\d*\.?\d+c)$/;
    shaka.text.TtmlTextParser.pixelValues_ = /^(\d+)px (\d+)px$/;
    shaka.text.TtmlTextParser.timeColonFormatFrames_ = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/;
    shaka.text.TtmlTextParser.timeColonFormat_ = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/;
    shaka.text.TtmlTextParser.timeColonFormatMilliseconds_ = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/;
    shaka.text.TtmlTextParser.timeFramesFormat_ = /^(\d*(?:\.\d*)?)f$/;
    shaka.text.TtmlTextParser.timeTickFormat_ = /^(\d*(?:\.\d*)?)t$/;
    shaka.text.TtmlTextParser.timeHMSFormat_ = /^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/;
    shaka.text.TtmlTextParser.textAlignToLineAlign_ = {
      left: shaka.text.Cue.lineAlign.START,
      center: shaka.text.Cue.lineAlign.CENTER,
      right: shaka.text.Cue.lineAlign.END,
      start: shaka.text.Cue.lineAlign.START,
      end: shaka.text.Cue.lineAlign.END
    };
    shaka.text.TtmlTextParser.textAlignToPositionAlign_ = {
      left: shaka.text.Cue.positionAlign.LEFT,
      center: shaka.text.Cue.positionAlign.CENTER,
      right: shaka.text.Cue.positionAlign.RIGHT
    };
    shaka.text.TtmlTextParser.parameterNs_ = "http://www.w3.org/ns/ttml#parameter";
    shaka.text.TtmlTextParser.styleNs_ = "http://www.w3.org/ns/ttml#styling";
    shaka.text.TtmlTextParser.styleEbuttsNs_ = "urn:ebu:tt:style";
    shaka.text.TextEngine.registerParser("application/ttml+xml", function () {
      return new shaka.text.TtmlTextParser
    });
    shaka.text.Mp4TtmlParser = function () {
      this.parser_ = new shaka.text.TtmlTextParser
    };
    shaka.text.Mp4TtmlParser.prototype.parseInit = function (a) {
      var b = shaka.util.Mp4Parser, c = !1;
      (new b).box("moov", b.children).box("trak", b.children).box("mdia", b.children).box("minf", b.children).box("stbl", b.children).fullBox("stsd", b.sampleDescription).box("stpp", function (a) {
        c = !0;
        a.parser.stop()
      }).parse(a);
      if (!c) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_MP4_TTML);
    };
    shaka.text.Mp4TtmlParser.prototype.parseMedia = function (a, b) {
      var c = this, d = shaka.util.Mp4Parser, e = !1, f = [];
      (new d).box("mdat", d.allData(function (a) {
        e = !0;
        f = f.concat(c.parser_.parseMedia(a, b))
      })).parse(a, !1);
      if (!e) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_MP4_TTML);
      return f
    };
    goog.exportSymbol("shaka.text.Mp4TtmlParser", shaka.text.Mp4TtmlParser);
    goog.exportProperty(shaka.text.Mp4TtmlParser.prototype, "parseMedia", shaka.text.Mp4TtmlParser.prototype.parseMedia);
    goog.exportProperty(shaka.text.Mp4TtmlParser.prototype, "parseInit", shaka.text.Mp4TtmlParser.prototype.parseInit);
    shaka.text.TextEngine.registerParser('application/mp4; codecs="stpp"', function () {
      return new shaka.text.Mp4TtmlParser
    });
    shaka.text.TextEngine.registerParser('application/mp4; codecs="stpp.ttml.im1t"', function () {
      return new shaka.text.Mp4TtmlParser
    });
    shaka.text.TextEngine.registerParser('application/mp4; codecs="stpp.TTML.im1t"', function () {
      return new shaka.text.Mp4TtmlParser
    });
    shaka.text.VttTextParser = function () {
    };
    shaka.text.VttTextParser.prototype.parseInit = function (a) {
      goog.asserts.assert(!1, "VTT does not have init segments")
    };
    shaka.text.VttTextParser.prototype.parseMedia = function (a, b) {
      var c = shaka.text.VttTextParser, d = shaka.util.StringUtils.fromUTF8(a);
      d = d.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
      d = d.split(/\n{2,}/m);
      if (!/^WEBVTT($|[ \t\n])/m.test(d[0])) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_TEXT_HEADER);
      var e = b.periodStart;
      if (d[0].includes("X-TIMESTAMP-MAP")) {
        var f = d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m), g = d[0].match(/MPEGTS:(\d+)/m);
        if (f && g) {
          e = new shaka.util.TextParser(f[1]);
          e = shaka.text.VttTextParser.parseTime_(e);
          if (null == e) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_TEXT_HEADER);
          g = Number(g[1]);
          f = shaka.text.VttTextParser.MPEG_TIMESCALE_;
          for (var h = shaka.text.VttTextParser.TS_ROLLOVER_ / f, k = b.segmentStart; k >= h;) k -= h, g += shaka.text.VttTextParser.TS_ROLLOVER_;
          e = b.periodStart + g / f - e
        }
      }
      g = [];
      f = $jscomp.makeIterator(d[0].split("\n"));
      for (h = f.next(); !h.done; h =
        f.next()) h = h.value, /^Region:/.test(h) && (h = c.parseRegion_(h), g.push(h));
      f = [];
      d = $jscomp.makeIterator(d.slice(1));
      for (h = d.next(); !h.done; h = d.next()) h = h.value.split("\n"), (h = c.parseCue_(h, e, g)) && f.push(h);
      return f
    };
    shaka.text.VttTextParser.parseRegion_ = function (a) {
      var b = shaka.text.VttTextParser;
      a = new shaka.util.TextParser(a);
      var c = new shaka.text.CueRegion;
      a.readWord();
      a.skipWhitespace();
      for (var d = a.readWord(); d;) b.parseRegionSetting_(c, d) || shaka.log.warning("VTT parser encountered an invalid VTTRegion setting: ", d, " The setting will be ignored."), a.skipWhitespace(), d = a.readWord();
      return c
    };
    shaka.text.VttTextParser.parseCue_ = function (a, b, c) {
      var d = shaka.text.VttTextParser;
      if (1 == a.length && !a[0] || /^NOTE($|[ \t])/.test(a[0]) || "STYLE" == a[0]) return null;
      var e = null;
      a[0].includes("--\x3e") || (e = a[0], a.splice(0, 1));
      var f = new shaka.util.TextParser(a[0]), g = d.parseTime_(f), h = f.readRegex(/[ \t]+--\x3e[ \t]+/g),
        k = d.parseTime_(f);
      if (null == g || null == h || null == k) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_TEXT_CUE);
      g += b;
      k += b;
      a = a.slice(1).join("\n").trim();
      g = new shaka.text.Cue(g, k, a);
      f.skipWhitespace();
      for (k = f.readWord(); k;) d.parseCueSetting(g, k, c) || shaka.log.warning("VTT parser encountered an invalid VTT setting: ", k, " The setting will be ignored."), f.skipWhitespace(), k = f.readWord();
      null != e && (g.id = e);
      return g
    };
    shaka.text.VttTextParser.parseCueSetting = function (a, b, c) {
      var d = shaka.text.VttTextParser, e;
      if (e = /^align:(start|middle|center|end|left|right)$/.exec(b)) d.setTextAlign_(a, e[1]); else if (e = /^vertical:(lr|rl)$/.exec(b)) d.setVerticalWritingMode_(a, e[1]); else if (e = /^size:([\d.]+)%$/.exec(b)) a.size = Number(e[1]); else if (e = /^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(b)) a.position = Number(e[1]), e[2] && d.setPositionAlign_(a, e[2]); else if (e = /^region:(.*)$/.exec(b)) {
        if (b = d.getRegionById_(c,
          e[1])) a.region = b
      } else return d.parsedLineValueAndInterpretation_(a, b);
      return !0
    };
    shaka.text.VttTextParser.getRegionById_ = function (a, b) {
      var c = a.filter(function (a) {
        return a.id == b
      });
      if (!c.length) return shaka.log.warning("VTT parser could not find a region with id: ", b, " The region will be ignored."), null;
      goog.asserts.assert(1 == c.length, "VTTRegion ids should be unique!");
      return c[0]
    };
    shaka.text.VttTextParser.parseRegionSetting_ = function (a, b) {
      var c;
      if (c = /^id=(.*)$/.exec(b)) a.id = c[1]; else if (c = /^width=(\d{1,2}|100)%$/.exec(b)) a.width = Number(c[1]); else if (c = /^lines=(\d+)$/.exec(b)) a.height = Number(c[1]), a.heightUnits = shaka.text.CueRegion.units.LINES; else if (c = /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(b)) a.regionAnchorX = Number(c[1]), a.regionAnchorY = Number(c[2]); else if (c = /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(b)) a.viewportAnchorX = Number(c[1]), a.viewportAnchorY =
        Number(c[2]); else if (/^scroll=up$/.exec(b)) a.scroll = shaka.text.CueRegion.scrollMode.UP; else return !1;
      return !0
    };
    shaka.text.VttTextParser.setTextAlign_ = function (a, b) {
      var c = shaka.text.Cue;
      "middle" == b ? a.textAlign = c.textAlign.CENTER : (goog.asserts.assert(b.toUpperCase() in c.textAlign, b.toUpperCase() + " Should be in Cue.textAlign values!"), a.textAlign = c.textAlign[b.toUpperCase()])
    };
    shaka.text.VttTextParser.setPositionAlign_ = function (a, b) {
      var c = shaka.text.Cue;
      a.positionAlign = "line-left" == b || "start" == b ? c.positionAlign.LEFT : "line-right" == b || "end" == b ? c.positionAlign.RIGHT : c.positionAlign.CENTER
    };
    shaka.text.VttTextParser.setVerticalWritingMode_ = function (a, b) {
      var c = shaka.text.Cue;
      a.writingMode = "lr" == b ? c.writingMode.VERTICAL_LEFT_TO_RIGHT : c.writingMode.VERTICAL_RIGHT_TO_LEFT
    };
    shaka.text.VttTextParser.parsedLineValueAndInterpretation_ = function (a, b) {
      var c = shaka.text.Cue, d;
      if (d = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = c.lineInterpretation.PERCENTAGE, a.line = Number(d[1]), d[2] && (goog.asserts.assert(d[2].toUpperCase() in c.lineAlign, d[2].toUpperCase() + " Should be in Cue.lineAlign values!"), a.lineAlign = c.lineAlign[d[2].toUpperCase()]); else if (d = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = c.lineInterpretation.LINE_NUMBER,
        a.line = Number(d[1]), d[2] && (goog.asserts.assert(d[2].toUpperCase() in c.lineAlign, d[2].toUpperCase() + " Should be in Cue.lineAlign values!"), a.lineAlign = c.lineAlign[d[2].toUpperCase()]); else return !1;
      return !0
    };
    shaka.text.VttTextParser.parseTime_ = function (a) {
      a = a.readRegex(/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);
      if (null == a) return null;
      var b = Number(a[2]), c = Number(a[3]);
      return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
    };
    goog.exportSymbol("shaka.text.VttTextParser", shaka.text.VttTextParser);
    goog.exportProperty(shaka.text.VttTextParser.prototype, "parseMedia", shaka.text.VttTextParser.prototype.parseMedia);
    goog.exportProperty(shaka.text.VttTextParser.prototype, "parseInit", shaka.text.VttTextParser.prototype.parseInit);
    shaka.text.VttTextParser.MPEG_TIMESCALE_ = 9E4;
    shaka.text.VttTextParser.TS_ROLLOVER_ = 8589934592;
    shaka.text.TextEngine.registerParser("text/vtt", function () {
      return new shaka.text.VttTextParser
    });
    shaka.text.TextEngine.registerParser('text/vtt; codecs="vtt"', function () {
      return new shaka.text.VttTextParser
    });
    shaka.text.TextEngine.registerParser('text/vtt; codecs="wvtt"', function () {
      return new shaka.text.VttTextParser
    });
    shaka.text.Mp4VttParser = function () {
      this.timescale_ = null
    };
    shaka.text.Mp4VttParser.prototype.parseInit = function (a) {
      var b = this, c = shaka.util.Mp4Parser, d = !1;
      (new c).box("moov", c.children).box("trak", c.children).box("mdia", c.children).fullBox("mdhd", function (a) {
        goog.asserts.assert(0 == a.version || 1 == a.version, "MDHD version can only be 0 or 1");
        0 == a.version ? (a.reader.skip(4), a.reader.skip(4), b.timescale_ = a.reader.readUint32(), a.reader.skip(4)) : (a.reader.skip(8), a.reader.skip(8), b.timescale_ = a.reader.readUint32(), a.reader.skip(8));
        a.reader.skip(4)
      }).box("minf", c.children).box("stbl",
        c.children).fullBox("stsd", c.sampleDescription).box("wvtt", function (a) {
        d = !0
      }).parse(a);
      if (!this.timescale_) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_MP4_VTT);
      if (!d) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_MP4_VTT);
    };
    shaka.text.Mp4VttParser.prototype.parseMedia = function (a, b) {
      if (!this.timescale_) throw shaka.log.error("No init segment for MP4+VTT!"), new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_MP4_VTT);
      var c = shaka.text.Mp4VttParser, d = shaka.util.Mp4Parser, e = 0, f = [], g, h = [], k = !1, l = !1, m = !1,
        n = null;
      (new d).box("moof", d.children).box("traf", d.children).fullBox("tfdt", function (a) {
        k = !0;
        goog.asserts.assert(0 == a.version || 1 == a.version, "TFDT version can only be 0 or 1");
        e = 0 == a.version ? a.reader.readUint32() : a.reader.readUint64()
      }).fullBox("tfhd", function (a) {
        goog.asserts.assert(null != a.flags, "A TFHD box should have a valid flags value");
        n = c.parseTFHD_(a.flags, a.reader)
      }).fullBox("trun", function (a) {
        l = !0;
        goog.asserts.assert(null != a.version, "A TRUN box should have a valid version value");
        goog.asserts.assert(null != a.flags, "A TRUN box should have a valid flags value");
        f = c.parseTRUN_(a.version, a.flags, a.reader)
      }).box("mdat", d.allData(function (a) {
        goog.asserts.assert(!m, "VTT cues in mp4 with multiple MDAT are not currently supported");
        m = !0;
        g = a
      })).parse(a, !1);
      if (!m && !k && !l) throw new shaka.util.Error(shaka.util.Error.Severity.CRITICAL, shaka.util.Error.Category.TEXT, shaka.util.Error.Code.INVALID_MP4_VTT);
      d = e;
      for (var p = new shaka.util.DataViewReader(g, shaka.util.DataViewReader.Endianness.BIG_ENDIAN), q = $jscomp.makeIterator(f), r = q.next(); !r.done; r = q.next()) {
        r = r.value;
        var v = r.duration || n, x = r.timeOffset ? e + r.timeOffset : d;
        d = x + (v || 0);
        var t = 0;
        do {
          var u = p.readUint32();
          t += u;
          var w = p.readUint32();
          w = shaka.util.Mp4Parser.typeToString(w);
          var y = null;
          "vttc" == w ? 8 < u && (y = p.readBytes(u - 8)) : ("vtte" != w && shaka.log.error("Unknown box " + w + "! Skipping!"), p.skip(u - 8));
          v ? y && (goog.asserts.assert(null != this.timescale_, "Timescale should not be null!"), u = shaka.text.Mp4VttParser.parseVTTC_(y, b.periodStart + x / this.timescale_, b.periodStart + d / this.timescale_), h.push(u)) : shaka.log.error("WVTT sample duration unknown, and no default found!");
          goog.asserts.assert(!r.sampleSize || t <= r.sampleSize, "The samples do not fit evenly into the sample sizes given in the TRUN box!")
        } while (r.sampleSize &&
        t < r.sampleSize)
      }
      goog.asserts.assert(!p.hasMoreData(), "MDAT which contain VTT cues and non-VTT data are not currently supported!");
      return h.filter(shaka.util.Functional.isNotNull)
    };
    shaka.text.Mp4VttParser.parseTFHD_ = function (a, b) {
      b.skip(4);
      a & 1 && b.skip(8);
      a & 2 && b.skip(4);
      return a & 8 ? b.readUint32() : null
    };
    shaka.text.Mp4VttParser.parseTRUN_ = function (a, b, c) {
      var d = c.readUint32();
      b & 1 && c.skip(4);
      b & 4 && c.skip(4);
      var e = [];
      d = $jscomp.makeIterator(shaka.util.Iterables.range(d));
      for (var f = d.next(); !f.done; f = d.next()) shaka.util.Functional.ignored(f.value), f = {
        duration: null,
        sampleSize: null,
        timeOffset: null
      }, b & 256 && (f.duration = c.readUint32()), b & 512 && (f.sampleSize = c.readUint32()), b & 1024 && c.skip(4), b & 2048 && (f.timeOffset = 0 == a ? c.readUint32() : c.readInt32()), e.push(f);
      return e
    };
    shaka.text.Mp4VttParser.parseVTTC_ = function (a, b, c) {
      var d, e, f;
      (new shaka.util.Mp4Parser).box("payl", shaka.util.Mp4Parser.allData(function (a) {
        d = shaka.util.StringUtils.fromUTF8(a)
      })).box("iden", shaka.util.Mp4Parser.allData(function (a) {
        e = shaka.util.StringUtils.fromUTF8(a)
      })).box("sttg", shaka.util.Mp4Parser.allData(function (a) {
        f = shaka.util.StringUtils.fromUTF8(a)
      })).parse(a);
      return d ? shaka.text.Mp4VttParser.assembleCue_(d, e, f, b, c) : null
    };
    shaka.text.Mp4VttParser.assembleCue_ = function (a, b, c, d, e) {
      a = new shaka.text.Cue(d, e, a);
      b && (a.id = b);
      if (c) for (b = new shaka.util.TextParser(c), c = b.readWord(); c;) shaka.text.VttTextParser.parseCueSetting(a, c, []) || shaka.log.warning("VTT parser encountered an invalid VTT setting: ", c, " The setting will be ignored."), b.skipWhitespace(), c = b.readWord();
      return a
    };
    goog.exportSymbol("shaka.text.Mp4VttParser", shaka.text.Mp4VttParser);
    goog.exportProperty(shaka.text.Mp4VttParser.prototype, "parseMedia", shaka.text.Mp4VttParser.prototype.parseMedia);
    goog.exportProperty(shaka.text.Mp4VttParser.prototype, "parseInit", shaka.text.Mp4VttParser.prototype.parseInit);
    shaka.text.TextEngine.registerParser('application/mp4; codecs="wvtt"', function () {
      return new shaka.text.Mp4VttParser
    });/*
 @license
 EME Encryption Scheme Polyfill
 Copyright 2019 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    var EmeEncryptionSchemePolyfill = function () {
    };
    EmeEncryptionSchemePolyfill.install = function () {
      EmeEncryptionSchemePolyfill.originalRMKSA_ ? console.debug("EmeEncryptionSchemePolyfill: Already installed.") : navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration ? (EmeEncryptionSchemePolyfill.originalRMKSA_ = navigator.requestMediaKeySystemAccess, console.debug("EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.requestMediaKeySystemAccess = EmeEncryptionSchemePolyfill.probeRMKSA_) : console.debug("EmeEncryptionSchemePolyfill: EME not found")
    };
    EmeEncryptionSchemePolyfill.probeRMKSA_ = function (a, b) {
      var c = this, d;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress) return console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess'), e.yield(EmeEncryptionSchemePolyfill.originalRMKSA_.call(c, a, b), 2);
        d = e.yieldResult;
        if (hasEncryptionScheme(d)) return console.debug("EmeEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.requestMediaKeySystemAccess = EmeEncryptionSchemePolyfill.originalRMKSA_,
          e["return"](d);
        console.debug("EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
        navigator.requestMediaKeySystemAccess = EmeEncryptionSchemePolyfill.polyfillRMKSA_;
        return e["return"](EmeEncryptionSchemePolyfill.polyfillRMKSA_.call(c, a, b))
      })
    };
    EmeEncryptionSchemePolyfill.polyfillRMKSA_ = function (a, b) {
      var c = this, d, e, f, g, h, k, l, m, n, p;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (q) {
        if (1 == q.nextAddress) {
          console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess');
          d = guessSupportedScheme(a);
          e = [];
          f = $jscomp.makeIterator(b);
          for (g = f.next(); !g.done; g = f.next()) h = g.value, k = EmeEncryptionSchemePolyfill.filterCapabilities_(h.videoCapabilities, d), l = EmeEncryptionSchemePolyfill.filterCapabilities_(h.audioCapabilities, d), h.videoCapabilities &&
          h.videoCapabilities.length && !k.length || h.audioCapabilities && h.audioCapabilities.length && !l.length || (m = Object.assign({}, h), m.videoCapabilities = k, m.audioCapabilities = l, e.push(m));
          if (!e.length) throw n = Error("Unsupported keySystem or supportedConfigurations."), n.name = "NotSupportedError", n.code = DOMException.NOT_SUPPORTED_ERR, n;
          return q.yield(EmeEncryptionSchemePolyfill.originalRMKSA_.call(c, a, e), 2)
        }
        p = q.yieldResult;
        return q["return"](new EmeEncryptionSchemePolyfillMediaKeySystemAccess(p, d))
      })
    };
    EmeEncryptionSchemePolyfill.filterCapabilities_ = function (a, b) {
      return a ? a.filter(function (a) {
        return !a.encryptionScheme || a.encryptionScheme == b
      }) : a
    };
    goog.exportSymbol("EmeEncryptionSchemePolyfill", EmeEncryptionSchemePolyfill);
    goog.exportProperty(EmeEncryptionSchemePolyfill, "install", EmeEncryptionSchemePolyfill.install);
    var McEncryptionSchemePolyfill = function () {
    };
    McEncryptionSchemePolyfill.install = function () {
      navigator.mediaCapabilities ? (McEncryptionSchemePolyfill.originalDecodingInfo_ = navigator.mediaCapabilities.decodingInfo, console.debug("McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.mediaCapabilities.decodingInfo = McEncryptionSchemePolyfill.probeDecodingInfo_) : console.debug("McEncryptionSchemePolyfill: MediaCapabilities not found")
    };
    McEncryptionSchemePolyfill.probeDecodingInfo_ = function (a) {
      var b = this, c, d;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (e) {
        if (1 == e.nextAddress) return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), e.yield(McEncryptionSchemePolyfill.originalDecodingInfo_.call(b, a), 2);
        c = e.yieldResult;
        if (!a.keySystemConfiguration) return e["return"](c);
        d = c.keySystemAccess;
        if (hasEncryptionScheme(d)) return console.debug("McEncryptionSchemePolyfill: Native encryptionScheme support found."),
          navigator.mediaCapabilities.decodingInfo = McEncryptionSchemePolyfill.originalDecodingInfo_, e["return"](c);
        console.debug("McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
        navigator.mediaCapabilities.decodingInfo = McEncryptionSchemePolyfill.polyfillDecodingInfo_;
        return e["return"](McEncryptionSchemePolyfill.polyfillDecodingInfo_.call(b, a))
      })
    };
    McEncryptionSchemePolyfill.polyfillDecodingInfo_ = function (a) {
      var b = this, c, d, e, f, g, h, k;
      return $jscomp.asyncExecutePromiseGeneratorProgram(function (l) {
        if (1 == l.nextAddress) return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), c = null, a.keySystemConfiguration && (d = a.keySystemConfiguration, e = d.keySystem, f = d.audio && d.audio.encryptionScheme, g = d.video && d.video.encryptionScheme, c = guessSupportedScheme(e), h = {
          powerEfficient: !1,
          smooth: !1,
          supported: !1,
          keySystemAccess: null,
          configuration: a
        },
        f && f != c || g && g != c) ? l["return"](h) : l.yield(McEncryptionSchemePolyfill.originalDecodingInfo_.call(b, a), 2);
        k = l.yieldResult;
        k.keySystemAccess && (k.keySystemAccess = new EmeEncryptionSchemePolyfillMediaKeySystemAccess(k.keySystemAccess, c));
        return l["return"](k)
      })
    };
    goog.exportSymbol("McEncryptionSchemePolyfill", McEncryptionSchemePolyfill);
    goog.exportProperty(McEncryptionSchemePolyfill, "install", McEncryptionSchemePolyfill.install);
    var EmeEncryptionSchemePolyfillMediaKeySystemAccess = function (a, b) {
      this.mksa_ = a;
      this.scheme_ = b;
      this.keySystem = a.keySystem
    };
    EmeEncryptionSchemePolyfillMediaKeySystemAccess.prototype.getConfiguration = function () {
      var a = this.mksa_.getConfiguration();
      if (a.videoCapabilities) for (var b = $jscomp.makeIterator(a.videoCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.scheme_;
      if (a.audioCapabilities) for (b = $jscomp.makeIterator(a.audioCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.scheme_;
      return a
    };
    EmeEncryptionSchemePolyfillMediaKeySystemAccess.prototype.createMediaKeys = function () {
      return this.mksa_.createMediaKeys()
    };

    function guessSupportedScheme(a) {
      if (a.startsWith("com.widevine") || a.startsWith("com.microsoft") || a.startsWith("com.adobe") || a.startsWith("org.w3")) return "cenc";
      if (a.startsWith("com.apple")) return "cbcs-1-9";
      console.warn("EmeEncryptionSchemePolyfill: Unknown key system:", a, "Please contribute!");
      return null
    }

    function hasEncryptionScheme(a) {
      a = a.getConfiguration();
      var b = a.audioCapabilities && a.audioCapabilities[0];
      return (a = a.videoCapabilities && a.videoCapabilities[0] || b) && void 0 !== a.encryptionScheme ? !0 : !1
    }

    var EncryptionSchemePolyfills = function () {
    };
    EncryptionSchemePolyfills.install = function () {
      EmeEncryptionSchemePolyfill.install();
      McEncryptionSchemePolyfill.install()
    };
    goog.exportSymbol("EncryptionSchemePolyfills", EncryptionSchemePolyfills);
    goog.exportProperty(EncryptionSchemePolyfills, "install", EncryptionSchemePolyfills.install);
    (function () {
      "undefined" !== typeof module && module.exports && (module.exports = EncryptionSchemePolyfills)
    })();
  }).call(exportTo, innerGlobal, innerGlobal, undefined);
  if (typeof exports != "undefined") for (var k in exportTo.shaka) exports[k] = exportTo.shaka[k]; else if (typeof define != "undefined" && define.amd) define(function () {
    return exportTo.shaka
  }); else innerGlobal.shaka = exportTo.shaka
})();

//# sourceMappingURL=shaka-player.compiled.debug.map