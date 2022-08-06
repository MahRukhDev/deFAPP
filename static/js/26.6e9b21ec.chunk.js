/*! For license information please see 26.6e9b21ec.chunk.js.LICENSE.txt */
(this["webpackJsonpdexfinance-frontend"] =
  this["webpackJsonpdexfinance-frontend"] || []).push([
  [26],
  {
    1701: function (t, e, n) {
      var r = n(1702),
        o = n(1703),
        i = n(1706),
        c = {
          ethereum:
            "undefined" !== typeof window &&
            "undefined" !== typeof window.ethereum
              ? window.ethereum
              : null,
          web3:
            "undefined" !== typeof window && "undefined" !== typeof window.web3
              ? window.web3.currentProvider
              : null,
        },
        a =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.WebSocket
            ? window.WebSocket
            : null,
        s =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.XMLHttpRequest
            ? window.XMLHttpRequest
            : null;
      c.ethereum && (c.ethereum.__isProvider = !0);
      var u = {
        injected: c.ethereum || n(1707)(c.web3),
        ipc: n(1708)("IPC connections are unavliable in the browser"),
        ws: n(1709)(a),
        http: n(1711)(s),
      };
      t.exports = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ["injected", "frame"],
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return o(u, r(t, i), e);
      };
    },
    1702: function (t, e, n) {
      var r = n(456),
        o = function (t) {
          return "injected" === t
            ? "injected"
            : t.endsWith(".ipc")
            ? "ipc"
            : t.startsWith("wss://") || t.startsWith("ws://")
            ? "ws"
            : t.startsWith("https://") || t.startsWith("http://")
            ? "http"
            : "";
        };
      t.exports = function (t, e) {
        var n;
        return (n = []).concat
          .apply(
            n,
            r(
              [].concat(t).map(function (t) {
                return e[t]
                  ? e[t].map(function (e) {
                      return { type: t, location: e, protocol: o(e) };
                    })
                  : { type: "custom", location: t, protocol: o(t) };
              })
            )
          )
          .filter(function (t) {
            return (
              !(!t.protocol && "injected" !== t.type) ||
              (console.log(
                'eth-provider | Invalid provider preset/location: "' +
                  t.location +
                  '"'
              ),
              !1)
            );
          });
      };
    },
    1703: function (t, e, n) {
      var r = n(118);
      function o() {
        "use strict";
        o = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          i = r.iterator || "@@iterator",
          c = r.asyncIterator || "@@asyncIterator",
          a = r.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, "");
        } catch (C) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var o = e && e.prototype instanceof l ? e : l,
            i = Object.create(o.prototype),
            c = new _(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return j();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var c = n.delegate;
                  if (c) {
                    var a = k(c, n);
                    if (a) {
                      if (a === f) continue;
                      return a;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var s = h(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === f)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, c)),
            i
          );
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (C) {
            return { type: "throw", arg: C };
          }
        }
        t.wrap = u;
        var f = {};
        function l() {}
        function d() {}
        function p() {}
        var v = {};
        s(v, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(L([])));
        m && m !== e && n.call(m, i) && (v = m);
        var g = (p.prototype = l.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var r;
          this._invoke = function (o, i) {
            function c() {
              return new e(function (r, c) {
                !(function r(o, i, c, a) {
                  var s = h(t[o], t, i);
                  if ("throw" !== s.type) {
                    var u = s.arg,
                      f = u.value;
                    return f && "object" == typeof f && n.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            r("next", t, c, a);
                          },
                          function (t) {
                            r("throw", t, c, a);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (u.value = t), c(u);
                          },
                          function (t) {
                            return r("throw", t, c, a);
                          }
                        );
                  }
                  a(s.arg);
                })(o, i, r, c);
              });
            }
            return (r = r ? r.then(c, c) : c());
          };
        }
        function k(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                k(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var r = h(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), f
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function L(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          s(g, "constructor", p),
          s(p, "constructor", d),
          (d.displayName = s(p, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, p)
                : ((t.__proto__ = p), s(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          s(b.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var c = new b(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? c
              : c.next().then(function (t) {
                  return t.done ? t.value : c.next();
                });
          }),
          w(g),
          s(g, a, "Generator"),
          s(g, i, function () {
            return this;
          }),
          s(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = L),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  c = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var a = n.call(i, "catchLoc"),
                    s = n.call(i, "finallyLoc");
                  if (a && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (a) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var c = i ? i.completion : {};
              return (
                (c.type = t),
                (c.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                  : this.complete(c)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: L(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var i = n(86),
        c = n(1704),
        a = n(1705),
        s = function (t) {
          function e(e) {
            (t.status = e), t instanceof i && t.emit("status", e);
          }
          function n() {
            return c.apply(this, arguments);
          }
          function c() {
            return (c = r(
              o().mark(function r() {
                return o().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (!t.inSetup) {
                            r.next = 2;
                            break;
                          }
                          return r.abrupt("return", setTimeout(n, 1e3));
                        case 2:
                          return (
                            (r.prev = 2), (r.next = 5), t.send("eth_syncing")
                          );
                        case 5:
                          if (!r.sent) {
                            r.next = 10;
                            break;
                          }
                          e("syncing"),
                            setTimeout(function () {
                              return n();
                            }, 5e3),
                            (r.next = 11);
                          break;
                        case 10:
                          e("connected");
                        case 11:
                          r.next = 16;
                          break;
                        case 13:
                          (r.prev = 13), (r.t0 = r.catch(2)), e("disconnected");
                        case 16:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[2, 13]]
                );
              })
            )).apply(this, arguments);
          }
          return (
            e("loading"),
            n(),
            t.on("connect", function () {
              return n();
            }),
            t.on("close", function () {
              return e("disconnected");
            }),
            t
          );
        };
      t.exports = function (t, e, n) {
        if (
          t.injected.__isProvider &&
          e
            .map(function (t) {
              return t.type;
            })
            .indexOf("injected") > -1
        )
          return delete t.injected.__isProvider, s(t.injected);
        var r = new c(new a(t, e, n));
        return r.setMaxListeners(128), s(r);
      };
    },
    1704: function (t, e, n) {
      var r = n(456),
        o = n(118),
        i = n(62),
        c = n(63),
        a = n(182),
        s = n(183);
      function u() {
        "use strict";
        u = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
          c = r.toStringTag || "@@toStringTag";
        function a(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          a({}, "");
        } catch (C) {
          a = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var o = e && e.prototype instanceof l ? e : l,
            i = Object.create(o.prototype),
            c = new _(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return j();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var c = n.delegate;
                  if (c) {
                    var a = k(c, n);
                    if (a) {
                      if (a === f) continue;
                      return a;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var s = h(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === f)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, c)),
            i
          );
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (C) {
            return { type: "throw", arg: C };
          }
        }
        t.wrap = s;
        var f = {};
        function l() {}
        function d() {}
        function p() {}
        var v = {};
        a(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(L([])));
        m && m !== e && n.call(m, o) && (v = m);
        var g = (p.prototype = l.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            a(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var r;
          this._invoke = function (o, i) {
            function c() {
              return new e(function (r, c) {
                !(function r(o, i, c, a) {
                  var s = h(t[o], t, i);
                  if ("throw" !== s.type) {
                    var u = s.arg,
                      f = u.value;
                    return f && "object" == typeof f && n.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            r("next", t, c, a);
                          },
                          function (t) {
                            r("throw", t, c, a);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (u.value = t), c(u);
                          },
                          function (t) {
                            return r("throw", t, c, a);
                          }
                        );
                  }
                  a(s.arg);
                })(o, i, r, c);
              });
            }
            return (r = r ? r.then(c, c) : c());
          };
        }
        function k(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                k(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var r = h(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), f
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function _(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function L(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                i = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          a(g, "constructor", p),
          a(p, "constructor", d),
          (d.displayName = a(p, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, p)
                : ((t.__proto__ = p), a(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          a(b.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var c = new b(s(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? c
              : c.next().then(function (t) {
                  return t.done ? t.value : c.next();
                });
          }),
          w(g),
          a(g, c, "Generator"),
          a(g, o, function () {
            return this;
          }),
          a(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = L),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  c = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var a = n.call(i, "catchLoc"),
                    s = n.call(i, "finallyLoc");
                  if (a && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (a) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var c = i ? i.completion : {};
              return (
                (c.type = t),
                (c.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                  : this.complete(c)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: L(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      var h = (function (t) {
        "use strict";
        a(n, t);
        var e = s(n);
        function n(t) {
          var r;
          return (
            i(this, n),
            ((r = e.call(this)).connected = !1),
            (r.nextId = 0),
            (r.promises = {}),
            (r.subscriptions = []),
            (r.connection = t),
            r.connection.on("connect", function () {
              return r.checkConnection();
            }),
            r.connection.on("close", function () {
              return r.emit("close");
            }),
            r.connection.on("payload", function (t) {
              var e = t.id,
                n = t.method,
                o = t.error,
                i = t.result;
              "undefined" !== typeof e
                ? r.promises[e] &&
                  (t.error ? r.promises[e].reject(o) : r.promises[e].resolve(i),
                  delete r.promises[e])
                : n &&
                  n.indexOf("_subscription") > -1 &&
                  (r.emit(t.params.subscription, t.params.result),
                  r.emit(n, t.params),
                  r.emit("data", t));
            }),
            r.on("newListener", function (t, e) {
              "networkChanged" === t
                ? !r.attemptedNetworkSubscription &&
                  r.connected &&
                  r.startNetworkSubscription()
                : "accountsChanged" === t &&
                  !r.attemptedAccountsSubscription &&
                  r.connected &&
                  r.startAccountsSubscription();
            }),
            r
          );
        }
        return (
          c(n, [
            {
              key: "checkConnection",
              value: (function () {
                var t = o(
                  u().mark(function t() {
                    return u().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.t0 = this),
                                (t.next = 4),
                                this._send("net_version")
                              );
                            case 4:
                              (t.t1 = t.sent),
                                t.t0.emit.call(t.t0, "connect", t.t1),
                                (this.connected = !0),
                                this.listenerCount("networkChanged") &&
                                  !this.attemptedNetworkSubscription &&
                                  this.startNetworkSubscription(),
                                this.listenerCount("accountsChanged") &&
                                  !this.attemptedAccountsSubscription &&
                                  this.startAccountsSubscription(),
                                (t.next = 14);
                              break;
                            case 11:
                              (t.prev = 11),
                                (t.t2 = t.catch(0)),
                                (this.connected = !1);
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 11]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "startNetworkSubscription",
              value: (function () {
                var t = o(
                  u().mark(function t() {
                    var e,
                      n = this;
                    return u().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.attemptedNetworkSubscription = !0),
                                (t.prev = 1),
                                (t.next = 4),
                                this.subscribe(
                                  "eth_subscribe",
                                  "networkChanged"
                                )
                              );
                            case 4:
                              (e = t.sent),
                                this.on(e, function (t) {
                                  return n.emit("networkChanged", t);
                                }),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(1)),
                                console.warn(
                                  "Unable to subscribe to networkChanged",
                                  t.t0
                                );
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[1, 8]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "startAccountsSubscription",
              value: (function () {
                var t = o(
                  u().mark(function t() {
                    var e,
                      n = this;
                    return u().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.attemptedAccountsSubscription = !0),
                                (t.prev = 1),
                                (t.next = 4),
                                this.subscribe(
                                  "eth_subscribe",
                                  "accountsChanged"
                                )
                              );
                            case 4:
                              (e = t.sent),
                                this.on(e, function (t) {
                                  return n.emit("accountsChanged", t);
                                }),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(1)),
                                console.warn(
                                  "Unable to subscribe to accountsChanged",
                                  t.t0
                                );
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[1, 8]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "enable",
              value: function () {
                var t = this;
                return new Promise(function (e, n) {
                  t._send("eth_accounts")
                    .then(function (r) {
                      if (r.length > 0)
                        (t.accounts = r),
                          (t.coinbase = r[0]),
                          t.emit("enable"),
                          e(r);
                      else {
                        var o = new Error("User Denied Full Provider");
                        (o.code = 4001), n(o);
                      }
                    })
                    .catch(n);
                });
              },
            },
            {
              key: "_send",
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                if (!t || "string" !== typeof t)
                  return new Error("Method is not a valid string.");
                if (!(n instanceof Array))
                  return new Error("Params is not a valid array.");
                var r = {
                    jsonrpc: "2.0",
                    id: this.nextId++,
                    method: t,
                    params: n,
                  },
                  o = new Promise(function (t, n) {
                    e.promises[r.id] = { resolve: t, reject: n };
                  });
                return this.connection.send(r), o;
              },
            },
            {
              key: "send",
              value: function () {
                return this._send.apply(this, arguments);
              },
            },
            {
              key: "_sendBatch",
              value: function (t) {
                var e = this;
                return Promise.all(
                  t.map(function (t) {
                    return e._send(t.method, t.params);
                  })
                );
              },
            },
            {
              key: "subscribe",
              value: function (t, e) {
                var n = this,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [];
                return this._send(t, [e].concat(r(o))).then(function (t) {
                  return n.subscriptions.push(t), t;
                });
              },
            },
            {
              key: "unsubscribe",
              value: function (t, e) {
                var n = this;
                return this._send(t, [e]).then(function (t) {
                  if (t)
                    return (
                      (n.subscriptions = n.subscriptions.filter(function (t) {
                        return t !== e;
                      })),
                      n.removeAllListeners(e),
                      t
                    );
                });
              },
            },
            {
              key: "sendAsync",
              value: function (t, e) {
                return e && "function" === typeof e
                  ? t
                    ? t instanceof Array
                      ? this.sendAsyncBatch(t, e)
                      : this._send(t.method, t.params)
                          .then(function (n) {
                            e(null, {
                              id: t.id,
                              jsonrpc: t.jsonrpc,
                              result: n,
                            });
                          })
                          .catch(function (t) {
                            e(t);
                          })
                    : e(new Error("Invalid Payload"))
                  : e(
                      new Error(
                        "Invalid or undefined callback provided to sendAsync"
                      )
                    );
              },
            },
            {
              key: "sendAsyncBatch",
              value: function (t, e) {
                return this._sendBatch(t)
                  .then(function (n) {
                    var r = n.map(function (e, n) {
                      return { id: t[n].id, jsonrpc: t[n].jsonrpc, result: e };
                    });
                    e(null, r);
                  })
                  .catch(function (t) {
                    e(t);
                  });
              },
            },
            {
              key: "isConnected",
              value: function () {
                return this.connected;
              },
            },
            {
              key: "close",
              value: function () {
                var t = this;
                this.connection.close(), (this.connected = !1);
                var e = new Error(
                  "Provider closed, subscription lost, please subscribe again."
                );
                this.subscriptions.forEach(function (n) {
                  return t.emit(n, e);
                }),
                  (this.subscriptions = []);
              },
            },
          ]),
          n
        );
      })(n(86));
      t.exports = h;
    },
    1705: function (t, e, n) {
      var r = n(62),
        o = n(63),
        i = n(182),
        c = n(183),
        a = n(86),
        s = (function (t) {
          "use strict";
          i(n, t);
          var e = c(n);
          function n(t, o, i) {
            var c;
            return (
              r(this, n),
              ((c = e.call(this)).targets = o),
              (c.connections = t),
              (c.connected = !1),
              (c.status = "loading"),
              (c.interval = i.interval || 5e3),
              (c.name = i.name || "default"),
              (c.inSetup = !0),
              c.connect(),
              c
            );
          }
          return (
            o(n, [
              {
                key: "connect",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                  if (
                    this.connection &&
                    "connected" === this.connection.status &&
                    e >= this.connection.index
                  )
                    0;
                  else if (0 === this.targets.length) 0;
                  else {
                    var n = this.targets[e],
                      r = n.protocol,
                      o = n.location;
                    (this.connection = this.connections[r](o)),
                      this.connection.on("error", function (n) {
                        return t.connected
                          ? t.listenerCount("error")
                            ? t.emit("error", n)
                            : void console.warn(
                                "eth-provider - Uncaught connection error: " +
                                  n.message
                              )
                          : t.connectionError(e, n);
                      }),
                      this.connection.on("close", function (e) {
                        (t.connected = !1),
                          t.emit("close"),
                          t.closing || t.refresh();
                      }),
                      this.connection.on("connect", function () {
                        (t.connection.target = t.targets[e]),
                          (t.connection.index = e),
                          (t.targets[e].status = t.connection.status),
                          (t.connected = !0),
                          (t.inSetup = !1),
                          t.emit("connect");
                      }),
                      this.connection.on("data", function (e) {
                        return t.emit("data", e);
                      }),
                      this.connection.on("payload", function (e) {
                        return t.emit("payload", e);
                      });
                  }
                },
              },
              {
                key: "refresh",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.interval;
                  clearTimeout(this.connectTimer),
                    (this.connectTimer = setTimeout(function () {
                      return t.connect();
                    }, e));
                },
              },
              {
                key: "connectionError",
                value: function (t, e) {
                  (this.targets[t].status = e),
                    this.targets.length - 1 === t
                      ? ((this.inSetup = !1), this.refresh())
                      : this.connect(++t);
                },
              },
              {
                key: "close",
                value: function () {
                  (this.closing = !0),
                    this.connection
                      ? this.connection.close()
                      : this.emit("close"),
                    clearTimeout(this.connectTimer);
                },
              },
              {
                key: "error",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : -1;
                  this.emit("payload", {
                    id: t.id,
                    jsonrpc: t.jsonrpc,
                    error: { message: e, code: n },
                  });
                },
              },
              {
                key: "send",
                value: function (t) {
                  var e = this;
                  this.inSetup
                    ? setTimeout(function () {
                        return e.send(t);
                      }, 100)
                    : this.connection.closed
                    ? this.error(t, "Not connected")
                    : this.connection.send(t);
                },
              },
            ]),
            n
          );
        })(a);
      t.exports = s;
    },
    1706: function (t, e) {
      t.exports = {
        injected: ["injected"],
        frame: ["ws://127.0.0.1:1248", "http://127.0.0.1:1248"],
        direct: ["ws://127.0.0.1:8546", "http://127.0.0.1:8545"],
        infura: [
          "wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b",
          "https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b",
        ],
        infuraRopsten: [
          "wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b",
          "https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b",
        ],
        infuraRinkeby: [
          "wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b",
          "https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b",
        ],
        infuraKovan: [
          "wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b",
          "https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b",
        ],
      };
    },
    1707: function (t, e, n) {
      var r = n(63),
        o = n(62),
        i = n(182),
        c = n(183),
        a = (function (t) {
          "use strict";
          i(n, t);
          var e = c(n);
          function n(t, r) {
            var i;
            return (
              o(this, n),
              (i = e.call(this)),
              t
                ? setTimeout(function () {
                    return i.emit(
                      "error",
                      new Error(
                        "Injected web3 provider is not currently supported"
                      )
                    );
                  }, 0)
                : setTimeout(function () {
                    return i.emit(
                      "error",
                      new Error("No injected provider found")
                    );
                  }, 0),
              i
            );
          }
          return r(n);
        })(n(86));
      t.exports = function (t) {
        return function (e) {
          return new a(t, e);
        };
      };
    },
    1708: function (t, e, n) {
      var r = n(63),
        o = n(62),
        i = n(182),
        c = n(183),
        a = (function (t) {
          "use strict";
          i(n, t);
          var e = c(n);
          function n(t) {
            var r;
            return (
              o(this, n),
              (r = e.call(this)),
              setTimeout(function () {
                return r.emit("error", new Error(t));
              }, 0),
              r
            );
          }
          return r(n);
        })(n(86));
      t.exports = function (t) {
        return function () {
          return new a(t);
        };
      };
    },
    1709: function (t, e, n) {
      var r,
        o = n(62),
        i = n(63),
        c = n(182),
        a = n(183),
        s = n(86),
        u = n(1710),
        h = (function (t) {
          "use strict";
          c(n, t);
          var e = a(n);
          function n(t, i, c) {
            var a;
            return (
              o(this, n),
              (a = e.call(this)),
              (r = t),
              setTimeout(function () {
                return a.create(i, c);
              }, 0),
              a
            );
          }
          return (
            i(n, [
              {
                key: "create",
                value: function (t, e) {
                  var n = this;
                  r ||
                    this.emit(
                      "error",
                      new Error("No WebSocket transport available")
                    );
                  try {
                    this.socket = new r(t);
                  } catch (o) {
                    return this.emit("error", o);
                  }
                  this.socket.addEventListener("error", function (t) {
                    return n.emit("error", t);
                  }),
                    this.socket.addEventListener("open", function () {
                      n.emit("connect"),
                        n.socket.addEventListener("message", function (t) {
                          var e = "string" === typeof t.data ? t.data : "";
                          u(e, function (t, e) {
                            t ||
                              e.forEach(function (t) {
                                Array.isArray(t)
                                  ? t.forEach(function (t) {
                                      return n.emit("payload", t);
                                    })
                                  : n.emit("payload", t);
                              });
                          });
                        }),
                        n.socket.addEventListener("close", function () {
                          return n.onClose();
                        });
                    });
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.socket = null),
                    (this.closed = !0),
                    this.emit("close"),
                    this.removeAllListeners();
                },
              },
              {
                key: "close",
                value: function () {
                  this.socket ? this.socket.close() : this.onClose();
                },
              },
              {
                key: "error",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : -1;
                  this.emit("payload", {
                    id: t.id,
                    jsonrpc: t.jsonrpc,
                    error: { message: e, code: n },
                  });
                },
              },
              {
                key: "send",
                value: function (t) {
                  var e = this;
                  this.socket &&
                  this.socket.readyState === this.socket.CONNECTING
                    ? setTimeout(function (n) {
                        return e.send(t);
                      }, 10)
                    : !this.socket || this.socket.readyState > 1
                    ? ((this.connected = !1), this.error(t, "Not connected"))
                    : this.socket.send(JSON.stringify(t));
                },
              },
            ]),
            n
          );
        })(s);
      t.exports = function (t) {
        return function (e, n) {
          return new h(t, e, n);
        };
      };
    },
    1710: function (t, e) {
      var n, r;
      t.exports = function (t, e) {
        var o = [];
        t
          .replace(/\}[\n\r]?\{/g, "}|--|{")
          .replace(/\}\][\n\r]?\[\{/g, "}]|--|[{")
          .replace(/\}[\n\r]?\[\{/g, "}|--|[{")
          .replace(/\}\][\n\r]?\{/g, "}]|--|{")
          .split("|--|")
          .forEach(function (t) {
            var i;
            n && (t = n + t);
            try {
              i = JSON.parse(t);
            } catch (c) {
              return (
                (n = t),
                clearTimeout(r),
                void (r = setTimeout(function () {
                  return e(new Error("Parse response timeout"));
                }, 15e3))
              );
            }
            clearTimeout(r), (n = null), i && o.push(i);
          }),
          e(null, o);
      };
    },
    1711: function (t, e, n) {
      var r,
        o = n(62),
        i = n(63),
        c = n(182),
        a = n(183),
        s = n(86),
        u = n(1712),
        h = (function (t) {
          "use strict";
          c(n, t);
          var e = a(n);
          function n(t, i, c) {
            var a;
            return (
              o(this, n),
              (a = e.call(this)),
              (r = t),
              (a.connected = !1),
              (a.subscriptions = !1),
              (a.status = "loading"),
              (a.url = i),
              (a.pollId = u()),
              setTimeout(function () {
                return a.create();
              }, 0),
              a
            );
          }
          return (
            i(n, [
              {
                key: "create",
                value: function () {
                  var t = this;
                  if (!r)
                    return this.emit(
                      "error",
                      new Error("No HTTP transport available")
                    );
                  this.on("error", function () {
                    t.connected && t.close();
                  }),
                    this.init();
                },
              },
              {
                key: "init",
                value: function () {
                  var t = this;
                  this.send(
                    {
                      jsonrpc: "2.0",
                      method: "eth_syncing",
                      params: [],
                      id: 1,
                    },
                    function (e, n) {
                      if (e) return t.emit("error", e);
                      t.send(
                        {
                          jsonrpc: "2.0",
                          id: 1,
                          method: "eth_pollSubscriptions",
                          params: [t.pollId, "immediate"],
                        },
                        function (e, n) {
                          e || ((t.subscriptions = !0), t.pollSubscriptions()),
                            (t.connected = !0),
                            t.emit("connect");
                        }
                      );
                    }
                  );
                },
              },
              {
                key: "pollSubscriptions",
                value: function () {
                  var t = this;
                  this.send(
                    {
                      jsonrpc: "2.0",
                      id: 1,
                      method: "eth_pollSubscriptions",
                      params: [this.pollId],
                    },
                    function (e, n) {
                      if (e)
                        return (
                          (t.subscriptionTimeout = setTimeout(function () {
                            return t.pollSubscriptions();
                          }, 1e4)),
                          t.emit("error", e)
                        );
                      t.closed ||
                        (t.subscriptionTimeout = t.pollSubscriptions()),
                        n &&
                          n
                            .map(function (t) {
                              var e;
                              try {
                                e = JSON.parse(t);
                              } catch (n) {
                                e = !1;
                              }
                              return e;
                            })
                            .filter(function (t) {
                              return t;
                            })
                            .forEach(function (e) {
                              return t.emit("payload", e);
                            });
                    }
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  (this.closed = !0),
                    this.emit("close"),
                    clearTimeout(this.subscriptionTimeout),
                    this.removeAllListeners();
                },
              },
              {
                key: "filterStatus",
                value: function (t) {
                  if (t.status >= 200 && t.status < 300) return t;
                  var e = new Error(t.statusText);
                  throw ((e.res = t), e.message);
                },
              },
              {
                key: "error",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : -1;
                  this.emit("payload", {
                    id: t.id,
                    jsonrpc: t.jsonrpc,
                    error: { message: e, code: n },
                  });
                },
              },
              {
                key: "send",
                value: function (t, e) {
                  var n = this;
                  if (this.closed) return this.error(t, "Not connected");
                  if ("eth_subscribe" === t.method) {
                    if (!this.subscriptions)
                      return this.error(
                        t,
                        "Subscriptions are not supported by this HTTP endpoint"
                      );
                    t.pollId = this.pollId;
                  }
                  var o = new r(),
                    i = !1,
                    c = function (r, c) {
                      if (!i)
                        if ((o.abort(), (i = !0), e)) e(r, c);
                        else {
                          var a = t.id,
                            s = t.jsonrpc,
                            u = r
                              ? {
                                  id: a,
                                  jsonrpc: s,
                                  error: { message: r.message, code: r.code },
                                }
                              : { id: a, jsonrpc: s, result: c };
                          n.emit("payload", u);
                        }
                    };
                  o.open("POST", this.url, !0),
                    o.setRequestHeader("Content-Type", "application/json"),
                    (o.timeout = 6e4),
                    (o.onerror = c),
                    (o.ontimeout = c),
                    (o.onreadystatechange = function () {
                      if (4 === o.readyState)
                        try {
                          var t = JSON.parse(o.responseText);
                          c(t.error, t.result);
                        } catch (e) {
                          c(e);
                        }
                    }),
                    o.send(JSON.stringify(t));
                },
              },
            ]),
            n
          );
        })(s);
      t.exports = function (t) {
        return function (e, n) {
          return new h(t, e, n);
        };
      };
    },
    1712: function (t, e, n) {
      var r = n(1713),
        o = n(1714);
      t.exports = function (t, e, n) {
        var i = (e && n) || 0;
        "string" == typeof t &&
          ((e = "binary" === t ? new Array(16) : null), (t = null));
        var c = (t = t || {}).random || (t.rng || r)();
        if (((c[6] = (15 & c[6]) | 64), (c[8] = (63 & c[8]) | 128), e))
          for (var a = 0; a < 16; ++a) e[i + a] = c[a];
        return e || o(c);
      };
    },
    1713: function (t, e) {
      var n =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (n) {
        var r = new Uint8Array(16);
        t.exports = function () {
          return n(r), r;
        };
      } else {
        var o = new Array(16);
        t.exports = function () {
          for (var t, e = 0; e < 16; e++)
            0 === (3 & e) && (t = 4294967296 * Math.random()),
              (o[e] = (t >>> ((3 & e) << 3)) & 255);
          return o;
        };
      }
    },
    1714: function (t, e) {
      for (var n = [], r = 0; r < 256; ++r)
        n[r] = (r + 256).toString(16).substr(1);
      t.exports = function (t, e) {
        var r = e || 0,
          o = n;
        return [
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
        ].join("");
      };
    },
    885: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "FrameConnector", function () {
          return v;
        }),
        n.d(e, "UserRejectedRequestError", function () {
          return p;
        });
      var r = n(940),
        o = n(1701),
        i = n.n(o),
        c = n(12);
      function a(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      function s(t) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function h() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function f(t, e, n) {
        return (f = h()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var o = new (Function.bind.apply(t, r))();
              return n && u(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function l(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (l = function (t) {
          if (
            null === t ||
            ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return t;
          var n;
          if ("function" !== typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
          }
          function r() {
            return f(t, arguments, s(this).constructor);
          }
          return (
            (r.prototype = Object.create(t.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            u(r, t)
          );
        })(t);
      }
      function d(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var p = (function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).name = e.constructor.name),
              (e.message = "The user rejected the request."),
              e
            );
          }
          return a(e, t), e;
        })(l(Error)),
        v = (function (t) {
          function e(e) {
            var n;
            return (
              1 !== e.supportedChainIds.length && Object(c.a)(!1),
              ((n = t.call(this, e) || this).handleNetworkChanged =
                n.handleNetworkChanged.bind(d(n))),
              (n.handleChainChanged = n.handleChainChanged.bind(d(n))),
              (n.handleAccountsChanged = n.handleAccountsChanged.bind(d(n))),
              (n.handleClose = n.handleClose.bind(d(n))),
              n
            );
          }
          a(e, t);
          var n = e.prototype;
          return (
            (n.handleNetworkChanged = function (t) {
              this.emitUpdate({ provider: this.provider, chainId: t });
            }),
            (n.handleChainChanged = function (t) {
              this.emitUpdate({ chainId: t });
            }),
            (n.handleAccountsChanged = function (t) {
              this.emitUpdate({ account: 0 === t.length ? null : t[0] });
            }),
            (n.handleClose = function (t, e) {
              this.emitDeactivate();
            }),
            (n.activate = function () {
              try {
                var t = this;
                return (
                  t.provider || (t.provider = i()("frame")),
                  t.provider
                    .on("networkChanged", t.handleNetworkChanged)
                    .on("chainChanged", t.handleChainChanged)
                    .on("accountsChanged", t.handleAccountsChanged)
                    .on("close", t.handleClose),
                  Promise.resolve(
                    t.provider
                      .enable()
                      .then(function (t) {
                        return t[0];
                      })
                      .catch(function (t) {
                        throw t && 4001 === t.code ? new p() : t;
                      })
                  ).then(function (e) {
                    return { provider: t.provider, account: e };
                  })
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (n.getProvider = function () {
              try {
                return Promise.resolve(this.provider);
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.getChainId = function () {
              try {
                return Promise.resolve(this.provider.send("eth_chainId"));
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.getAccount = function () {
              try {
                return Promise.resolve(
                  this.provider.send("eth_accounts").then(function (t) {
                    return t[0];
                  })
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.deactivate = function () {
              this.provider
                .removeListener("networkChanged", this.handleNetworkChanged)
                .removeListener("chainChanged", this.handleChainChanged)
                .removeListener("accountsChanged", this.handleAccountsChanged)
                .removeListener("close", this.handleClose);
            }),
            e
          );
        })(r.a);
    },
    940: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(86),
        o = n(124);
      var i = (function (t) {
        var e, n;
        function r(e) {
          var n,
            r = (void 0 === e ? {} : e).supportedChainIds;
          return ((n = t.call(this) || this).supportedChainIds = r), n;
        }
        (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var i = r.prototype;
        return (
          (i.emitUpdate = function (t) {
            this.emit(o.a.Update, t);
          }),
          (i.emitError = function (t) {
            this.emit(o.a.Error, t);
          }),
          (i.emitDeactivate = function () {
            this.emit(o.a.Deactivate);
          }),
          r
        );
      })(r.EventEmitter);
    },
  },
]);
