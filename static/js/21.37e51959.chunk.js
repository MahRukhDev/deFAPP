/*! For license information please see 21.37e51959.chunk.js.LICENSE.txt */
(this["webpackJsonpdexfinance-frontend"] =
  this["webpackJsonpdexfinance-frontend"] || []).push([
  [21],
  {
    1077: function (e, t, r) {
      var n = r(1118);
      function i(t, r, o) {
        return (
          "undefined" !== typeof Reflect && Reflect.get
            ? (e.exports = i = Reflect.get)
            : (e.exports = i =
                function (e, t, r) {
                  var i = n(e, t);
                  if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(r) : o.value;
                  }
                }),
          i(t, r, o || t)
        );
      }
      e.exports = i;
    },
    1078: function (e, t) {
      (e.exports = function (e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    1079: function (e, t, r) {
      "use strict";
      var n = {};
      function i(e, t, r) {
        r || (r = Error);
        var i = (function (e) {
          var r, n;
          function i(r, n, i) {
            return (
              e.call(
                this,
                (function (e, r, n) {
                  return "string" === typeof t ? t : t(e, r, n);
                })(r, n, i)
              ) || this
            );
          }
          return (
            (n = e),
            ((r = i).prototype = Object.create(n.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = n),
            i
          );
        })(r);
        (i.prototype.name = r.name), (i.prototype.code = e), (n[e] = i);
      }
      function o(e, t) {
        if (Array.isArray(e)) {
          var r = e.length;
          return (
            (e = e.map(function (e) {
              return String(e);
            })),
            r > 2
              ? "one of "
                  .concat(t, " ")
                  .concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1]
              : 2 === r
              ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
              : "of ".concat(t, " ").concat(e[0])
          );
        }
        return "of ".concat(t, " ").concat(String(e));
      }
      i(
        "ERR_INVALID_OPT_VALUE",
        function (e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"';
        },
        TypeError
      ),
        i(
          "ERR_INVALID_ARG_TYPE",
          function (e, t, r) {
            var n, i, a, s;
            if (
              ("string" === typeof t &&
              ((i = "not "), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
                ? ((n = "must not be"), (t = t.replace(/^not /, "")))
                : (n = "must be"),
              (function (e, t, r) {
                return (
                  (void 0 === r || r > e.length) && (r = e.length),
                  e.substring(r - t.length, r) === t
                );
              })(e, " argument"))
            )
              s = "The ".concat(e, " ").concat(n, " ").concat(o(t, "type"));
            else {
              var u = (function (e, t, r) {
                return (
                  "number" !== typeof r && (r = 0),
                  !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                );
              })(e, ".")
                ? "property"
                : "argument";
              s = 'The "'
                .concat(e, '" ')
                .concat(u, " ")
                .concat(n, " ")
                .concat(o(t, "type"));
            }
            return (s += ". Received type ".concat(typeof r));
          },
          TypeError
        ),
        i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
          return "The " + e + " method is not implemented";
        }),
        i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        i("ERR_STREAM_DESTROYED", function (e) {
          return "Cannot call " + e + " after a stream was destroyed";
        }),
        i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        i(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        i(
          "ERR_UNKNOWN_ENCODING",
          function (e) {
            return "Unknown encoding: " + e;
          },
          TypeError
        ),
        i(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (e.exports.codes = n);
    },
    1080: function (e, t, r) {
      "use strict";
      (function (t) {
        var n =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
        e.exports = c;
        var i = r(1404),
          o = r(1408);
        r(15)(c, i);
        for (var a = n(o.prototype), s = 0; s < a.length; s++) {
          var u = a[s];
          c.prototype[u] || (c.prototype[u] = o.prototype[u]);
        }
        function c(e) {
          if (!(this instanceof c)) return new c(e);
          i.call(this, e),
            o.call(this, e),
            (this.allowHalfOpen = !0),
            e &&
              (!1 === e.readable && (this.readable = !1),
              !1 === e.writable && (this.writable = !1),
              !1 === e.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", l)));
        }
        function l() {
          this._writableState.ended || t.nextTick(h, this);
        }
        function h(e) {
          e.end();
        }
        Object.defineProperty(c.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(c.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(c.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(c.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (e) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = e),
                (this._writableState.destroyed = e));
            },
          });
      }.call(this, r(25)));
    },
    1081: function (e, t) {
      (e.exports = o), (o.default = o), (o.stable = u), (o.stableStringify = u);
      var r = [],
        n = [];
      function i() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER,
        };
      }
      function o(e, t, o, s) {
        var u;
        "undefined" === typeof s && (s = i()),
          (function e(t, r, n, i, o, s, u) {
            var c;
            if (((s += 1), "object" === typeof t && null !== t)) {
              for (c = 0; c < i.length; c++)
                if (i[c] === t) return void a("[Circular]", t, r, o);
              if ("undefined" !== typeof u.depthLimit && s > u.depthLimit)
                return void a("[...]", t, r, o);
              if ("undefined" !== typeof u.edgesLimit && n + 1 > u.edgesLimit)
                return void a("[...]", t, r, o);
              if ((i.push(t), Array.isArray(t)))
                for (c = 0; c < t.length; c++) e(t[c], c, c, i, t, s, u);
              else {
                var l = Object.keys(t);
                for (c = 0; c < l.length; c++) {
                  var h = l[c];
                  e(t[h], h, c, i, t, s, u);
                }
              }
              i.pop();
            }
          })(e, "", 0, [], void 0, 0, s);
        try {
          u =
            0 === n.length
              ? JSON.stringify(e, t, o)
              : JSON.stringify(e, c(t), o);
        } catch (h) {
          return JSON.stringify(
            "[unable to serialize, circular reference is too complex to analyze]"
          );
        } finally {
          for (; 0 !== r.length; ) {
            var l = r.pop();
            4 === l.length
              ? Object.defineProperty(l[0], l[1], l[3])
              : (l[0][l[1]] = l[2]);
          }
        }
        return u;
      }
      function a(e, t, i, o) {
        var a = Object.getOwnPropertyDescriptor(o, i);
        void 0 !== a.get
          ? a.configurable
            ? (Object.defineProperty(o, i, { value: e }), r.push([o, i, t, a]))
            : n.push([t, i, e])
          : ((o[i] = e), r.push([o, i, t]));
      }
      function s(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function u(e, t, o, u) {
        "undefined" === typeof u && (u = i());
        var l,
          h =
            (function e(t, n, i, o, u, c, l) {
              var h;
              if (((c += 1), "object" === typeof t && null !== t)) {
                for (h = 0; h < o.length; h++)
                  if (o[h] === t) return void a("[Circular]", t, n, u);
                try {
                  if ("function" === typeof t.toJSON) return;
                } catch (v) {
                  return;
                }
                if ("undefined" !== typeof l.depthLimit && c > l.depthLimit)
                  return void a("[...]", t, n, u);
                if ("undefined" !== typeof l.edgesLimit && i + 1 > l.edgesLimit)
                  return void a("[...]", t, n, u);
                if ((o.push(t), Array.isArray(t)))
                  for (h = 0; h < t.length; h++) e(t[h], h, h, o, t, c, l);
                else {
                  var d = {},
                    f = Object.keys(t).sort(s);
                  for (h = 0; h < f.length; h++) {
                    var p = f[h];
                    e(t[p], p, h, o, t, c, l), (d[p] = t[p]);
                  }
                  if ("undefined" === typeof u) return d;
                  r.push([u, n, t]), (u[n] = d);
                }
                o.pop();
              }
            })(e, "", 0, [], void 0, 0, u) || e;
        try {
          l =
            0 === n.length
              ? JSON.stringify(h, t, o)
              : JSON.stringify(h, c(t), o);
        } catch (f) {
          return JSON.stringify(
            "[unable to serialize, circular reference is too complex to analyze]"
          );
        } finally {
          for (; 0 !== r.length; ) {
            var d = r.pop();
            4 === d.length
              ? Object.defineProperty(d[0], d[1], d[3])
              : (d[0][d[1]] = d[2]);
          }
        }
        return l;
      }
      function c(e) {
        return (
          (e =
            "undefined" !== typeof e
              ? e
              : function (e, t) {
                  return t;
                }),
          function (t, r) {
            if (n.length > 0)
              for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (o[1] === t && o[0] === r) {
                  (r = o[2]), n.splice(i, 1);
                  break;
                }
              }
            return e.call(this, t, r);
          }
        );
      }
    },
    1082: function (e, t, r) {
      "use strict";
      var n = r(62),
        i = r(63),
        o = r(182),
        a = r(183);
      function s(e, t, r) {
        try {
          Reflect.apply(e, t, r);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      function u(e) {
        for (var t = e.length, r = new Array(t), n = 0; n < t; n += 1)
          r[n] = e[n];
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = (function (e) {
        o(r, e);
        var t = a(r);
        function r() {
          return n(this, r), t.apply(this, arguments);
        }
        return (
          i(r, [
            {
              key: "emit",
              value: function (e) {
                var t = "error" === e,
                  r = this._events;
                if (void 0 !== r) t = t && void 0 === r.error;
                else if (!t) return !1;
                for (
                  var n = arguments.length,
                    i = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  i[o - 1] = arguments[o];
                if (t) {
                  var a;
                  if ((i.length > 0 && (a = i[0]), a instanceof Error)) throw a;
                  var c = new Error(
                    "Unhandled error.".concat(
                      a ? " (".concat(a.message, ")") : ""
                    )
                  );
                  throw ((c.context = a), c);
                }
                var l = r[e];
                if (void 0 === l) return !1;
                if ("function" === typeof l) s(l, this, i);
                else
                  for (var h = l.length, d = u(l), f = 0; f < h; f += 1)
                    s(d[f], this, i);
                return !0;
              },
            },
          ]),
          r
        );
      })(r(86).EventEmitter);
      t.default = c;
    },
    1118: function (e, t, r) {
      var n = r(284);
      e.exports = function (e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e));

        );
        return e;
      };
    },
    1130: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r(36),
        i = r(297);
      var o = r(301);
      function a(e, t, r) {
        return (a = Object(o.a)()
          ? Reflect.construct
          : function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var o = new (Function.bind.apply(e, n))();
              return r && Object(i.a)(o, r.prototype), o;
            }).apply(null, arguments);
      }
      function s(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (s = function (e) {
          if (
            null === e ||
            ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return e;
          var r;
          if ("function" !== typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, o);
          }
          function o() {
            return a(e, arguments, Object(n.a)(this).constructor);
          }
          return (
            (o.prototype = Object.create(e.prototype, {
              constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            Object(i.a)(o, e)
          );
        })(e);
      }
    },
    1231: function (e, t, r) {
      var n = "undefined" !== typeof JSON ? JSON : r(1232);
      e.exports = function (e, t) {
        t || (t = {}), "function" === typeof t && (t = { cmp: t });
        var r = t.space || "";
        "number" === typeof r && (r = Array(r + 1).join(" "));
        var a,
          s = "boolean" === typeof t.cycles && t.cycles,
          u =
            t.replacer ||
            function (e, t) {
              return t;
            },
          c =
            t.cmp &&
            ((a = t.cmp),
            function (e) {
              return function (t, r) {
                var n = { key: t, value: e[t] },
                  i = { key: r, value: e[r] };
                return a(n, i);
              };
            }),
          l = [];
        return (function e(t, a, h, d) {
          var f = r ? "\n" + new Array(d + 1).join(r) : "",
            p = r ? ": " : ":";
          if (
            (h &&
              h.toJSON &&
              "function" === typeof h.toJSON &&
              (h = h.toJSON()),
            void 0 !== (h = u.call(t, a, h)))
          ) {
            if ("object" !== typeof h || null === h) return n.stringify(h);
            if (i(h)) {
              for (var v = [], m = 0; m < h.length; m++) {
                var y = e(h, m, h[m], d + 1) || n.stringify(null);
                v.push(f + r + y);
              }
              return "[" + v.join(",") + f + "]";
            }
            if (-1 !== l.indexOf(h)) {
              if (s) return n.stringify("__cycle__");
              throw new TypeError("Converting circular structure to JSON");
            }
            l.push(h);
            var g = o(h).sort(c && c(h));
            for (v = [], m = 0; m < g.length; m++) {
              var b = e(h, (a = g[m]), h[a], d + 1);
              if (b) {
                var w = n.stringify(a) + p + b;
                v.push(f + r + w);
              }
            }
            return l.splice(l.indexOf(h), 1), "{" + v.join(",") + f + "}";
          }
        })({ "": e }, "", e, 0);
      };
      var i =
          Array.isArray ||
          function (e) {
            return "[object Array]" === {}.toString.call(e);
          },
        o =
          Object.keys ||
          function (e) {
            var t =
                Object.prototype.hasOwnProperty ||
                function () {
                  return !0;
                },
              r = [];
            for (var n in e) t.call(e, n) && r.push(n);
            return r;
          };
    },
    1232: function (e, t, r) {
      (t.parse = r(1233)), (t.stringify = r(1234));
    },
    1233: function (e, t) {
      var r,
        n,
        i,
        o,
        a = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: "\n",
          r: "\r",
          t: "\t",
        },
        s = function (e) {
          throw { name: "SyntaxError", message: e, at: r, text: i };
        },
        u = function (e) {
          return (
            e && e !== n && s("Expected '" + e + "' instead of '" + n + "'"),
            (n = i.charAt(r)),
            (r += 1),
            n
          );
        },
        c = function () {
          var e,
            t = "";
          for ("-" === n && ((t = "-"), u("-")); n >= "0" && n <= "9"; )
            (t += n), u();
          if ("." === n) for (t += "."; u() && n >= "0" && n <= "9"; ) t += n;
          if ("e" === n || "E" === n)
            for (
              t += n, u(), ("-" !== n && "+" !== n) || ((t += n), u());
              n >= "0" && n <= "9";

            )
              (t += n), u();
          if (((e = +t), isFinite(e))) return e;
          s("Bad number");
        },
        l = function () {
          var e,
            t,
            r,
            i = "";
          if ('"' === n)
            for (; u(); ) {
              if ('"' === n) return u(), i;
              if ("\\" === n)
                if ((u(), "u" === n)) {
                  for (
                    r = 0, t = 0;
                    t < 4 && ((e = parseInt(u(), 16)), isFinite(e));
                    t += 1
                  )
                    r = 16 * r + e;
                  i += String.fromCharCode(r);
                } else {
                  if ("string" !== typeof a[n]) break;
                  i += a[n];
                }
              else i += n;
            }
          s("Bad string");
        },
        h = function () {
          for (; n && n <= " "; ) u();
        },
        d = function () {
          var e = [];
          if ("[" === n) {
            if ((u("["), h(), "]" === n)) return u("]"), e;
            for (; n; ) {
              if ((e.push(o()), h(), "]" === n)) return u("]"), e;
              u(","), h();
            }
          }
          s("Bad array");
        },
        f = function () {
          var e,
            t = {};
          if ("{" === n) {
            if ((u("{"), h(), "}" === n)) return u("}"), t;
            for (; n; ) {
              if (
                ((e = l()),
                h(),
                u(":"),
                Object.hasOwnProperty.call(t, e) &&
                  s('Duplicate key "' + e + '"'),
                (t[e] = o()),
                h(),
                "}" === n)
              )
                return u("}"), t;
              u(","), h();
            }
          }
          s("Bad object");
        };
      (o = function () {
        switch ((h(), n)) {
          case "{":
            return f();
          case "[":
            return d();
          case '"':
            return l();
          case "-":
            return c();
          default:
            return n >= "0" && n <= "9"
              ? c()
              : (function () {
                  switch (n) {
                    case "t":
                      return u("t"), u("r"), u("u"), u("e"), !0;
                    case "f":
                      return u("f"), u("a"), u("l"), u("s"), u("e"), !1;
                    case "n":
                      return u("n"), u("u"), u("l"), u("l"), null;
                  }
                  s("Unexpected '" + n + "'");
                })();
        }
      }),
        (e.exports = function (e, t) {
          var a;
          return (
            (i = e),
            (r = 0),
            (n = " "),
            (a = o()),
            h(),
            n && s("Syntax error"),
            "function" === typeof t
              ? (function e(r, n) {
                  var i,
                    o,
                    a = r[n];
                  if (a && "object" === typeof a)
                    for (i in a)
                      Object.prototype.hasOwnProperty.call(a, i) &&
                        (void 0 !== (o = e(a, i)) ? (a[i] = o) : delete a[i]);
                  return t.call(r, n, a);
                })({ "": a }, "")
              : a
          );
        });
    },
    1234: function (e, t) {
      var r,
        n,
        i,
        o =
          /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        a = {
          "\b": "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\",
        };
      function s(e) {
        return (
          (o.lastIndex = 0),
          o.test(e)
            ? '"' +
              e.replace(o, function (e) {
                var t = a[e];
                return "string" === typeof t
                  ? t
                  : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
              }) +
              '"'
            : '"' + e + '"'
        );
      }
      e.exports = function (e, t, o) {
        var a;
        if (((r = ""), (n = ""), "number" === typeof o))
          for (a = 0; a < o; a += 1) n += " ";
        else "string" === typeof o && (n = o);
        if (
          ((i = t),
          t &&
            "function" !== typeof t &&
            ("object" !== typeof t || "number" !== typeof t.length))
        )
          throw new Error("JSON.stringify");
        return (function e(t, o) {
          var a,
            u,
            c,
            l,
            h,
            d = r,
            f = o[t];
          switch (
            (f &&
              "object" === typeof f &&
              "function" === typeof f.toJSON &&
              (f = f.toJSON(t)),
            "function" === typeof i && (f = i.call(o, t, f)),
            typeof f)
          ) {
            case "string":
              return s(f);
            case "number":
              return isFinite(f) ? String(f) : "null";
            case "boolean":
            case "null":
              return String(f);
            case "object":
              if (!f) return "null";
              if (
                ((r += n),
                (h = []),
                "[object Array]" === Object.prototype.toString.apply(f))
              ) {
                for (l = f.length, a = 0; a < l; a += 1)
                  h[a] = e(a, f) || "null";
                return (
                  (c =
                    0 === h.length
                      ? "[]"
                      : r
                      ? "[\n" + r + h.join(",\n" + r) + "\n" + d + "]"
                      : "[" + h.join(",") + "]"),
                  (r = d),
                  c
                );
              }
              if (i && "object" === typeof i)
                for (l = i.length, a = 0; a < l; a += 1)
                  "string" === typeof (u = i[a]) &&
                    (c = e(u, f)) &&
                    h.push(s(u) + (r ? ": " : ":") + c);
              else
                for (u in f)
                  Object.prototype.hasOwnProperty.call(f, u) &&
                    (c = e(u, f)) &&
                    h.push(s(u) + (r ? ": " : ":") + c);
              return (
                (c =
                  0 === h.length
                    ? "{}"
                    : r
                    ? "{\n" + r + h.join(",\n" + r) + "\n" + d + "}"
                    : "{" + h.join(",") + "}"),
                (r = d),
                c
              );
          }
        })("", { "": e });
      };
    },
    1257: function (e, t, r) {
      var n, i;
      !(function (o, a) {
        "use strict";
        void 0 ===
          (i =
            "function" ===
            typeof (n = function () {
              var e = function () {},
                t =
                  "undefined" !== typeof window &&
                  "undefined" !== typeof window.navigator &&
                  /Trident\/|MSIE /.test(window.navigator.userAgent),
                r = ["trace", "debug", "info", "warn", "error"];
              function n(e, t) {
                var r = e[t];
                if ("function" === typeof r.bind) return r.bind(e);
                try {
                  return Function.prototype.bind.call(r, e);
                } catch (n) {
                  return function () {
                    return Function.prototype.apply.apply(r, [e, arguments]);
                  };
                }
              }
              function i() {
                console.log &&
                  (console.log.apply
                    ? console.log.apply(console, arguments)
                    : Function.prototype.apply.apply(console.log, [
                        console,
                        arguments,
                      ])),
                  console.trace && console.trace();
              }
              function o(r) {
                return (
                  "debug" === r && (r = "log"),
                  "undefined" !== typeof console &&
                    ("trace" === r && t
                      ? i
                      : void 0 !== console[r]
                      ? n(console, r)
                      : void 0 !== console.log
                      ? n(console, "log")
                      : e)
                );
              }
              function a(t, n) {
                for (var i = 0; i < r.length; i++) {
                  var o = r[i];
                  this[o] = i < t ? e : this.methodFactory(o, t, n);
                }
                this.log = this.debug;
              }
              function s(e, t, r) {
                return function () {
                  "undefined" !== typeof console &&
                    (a.call(this, t, r), this[e].apply(this, arguments));
                };
              }
              function u(e, t, r) {
                return o(e) || s.apply(this, arguments);
              }
              function c(e, t, n) {
                var i,
                  o = this;
                t = null == t ? "WARN" : t;
                var s = "loglevel";
                function c() {
                  var e;
                  if ("undefined" !== typeof window && s) {
                    try {
                      e = window.localStorage[s];
                    } catch (n) {}
                    if ("undefined" === typeof e)
                      try {
                        var t = window.document.cookie,
                          r = t.indexOf(encodeURIComponent(s) + "=");
                        -1 !== r && (e = /^([^;]+)/.exec(t.slice(r))[1]);
                      } catch (n) {}
                    return void 0 === o.levels[e] && (e = void 0), e;
                  }
                }
                "string" === typeof e
                  ? (s += ":" + e)
                  : "symbol" === typeof e && (s = void 0),
                  (o.name = e),
                  (o.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5,
                  }),
                  (o.methodFactory = n || u),
                  (o.getLevel = function () {
                    return i;
                  }),
                  (o.setLevel = function (t, n) {
                    if (
                      ("string" === typeof t &&
                        void 0 !== o.levels[t.toUpperCase()] &&
                        (t = o.levels[t.toUpperCase()]),
                      !(
                        "number" === typeof t &&
                        t >= 0 &&
                        t <= o.levels.SILENT
                      ))
                    )
                      throw "log.setLevel() called with invalid level: " + t;
                    if (
                      ((i = t),
                      !1 !== n &&
                        (function (e) {
                          var t = (r[e] || "silent").toUpperCase();
                          if ("undefined" !== typeof window && s) {
                            try {
                              return void (window.localStorage[s] = t);
                            } catch (n) {}
                            try {
                              window.document.cookie =
                                encodeURIComponent(s) + "=" + t + ";";
                            } catch (n) {}
                          }
                        })(t),
                      a.call(o, t, e),
                      "undefined" === typeof console && t < o.levels.SILENT)
                    )
                      return "No console available for logging";
                  }),
                  (o.setDefaultLevel = function (e) {
                    (t = e), c() || o.setLevel(e, !1);
                  }),
                  (o.resetLevel = function () {
                    o.setLevel(t, !1),
                      (function () {
                        if ("undefined" !== typeof window && s) {
                          try {
                            return void window.localStorage.removeItem(s);
                          } catch (e) {}
                          try {
                            window.document.cookie =
                              encodeURIComponent(s) +
                              "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                          } catch (e) {}
                        }
                      })();
                  }),
                  (o.enableAll = function (e) {
                    o.setLevel(o.levels.TRACE, e);
                  }),
                  (o.disableAll = function (e) {
                    o.setLevel(o.levels.SILENT, e);
                  });
                var l = c();
                null == l && (l = t), o.setLevel(l, !1);
              }
              var l = new c(),
                h = {};
              l.getLogger = function (e) {
                if (
                  ("symbol" !== typeof e && "string" !== typeof e) ||
                  "" === e
                )
                  throw new TypeError(
                    "You must supply a name when creating a logger."
                  );
                var t = h[e];
                return (
                  t || (t = h[e] = new c(e, l.getLevel(), l.methodFactory)), t
                );
              };
              var d = "undefined" !== typeof window ? window.log : void 0;
              return (
                (l.noConflict = function () {
                  return (
                    "undefined" !== typeof window &&
                      window.log === l &&
                      (window.log = d),
                    l
                  );
                }),
                (l.getLoggers = function () {
                  return h;
                }),
                (l.default = l),
                l
              );
            })
              ? n.call(t, r, t, e)
              : n) || (e.exports = i);
      })();
    },
    1258: function (e, t, r) {
      "use strict";
      var n = r(1079).codes.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      e.exports = function e(t, r, o) {
        if ("function" === typeof r) return e(t, null, r);
        r || (r = {}),
          (o = (function (e) {
            var t = !1;
            return function () {
              if (!t) {
                t = !0;
                for (
                  var r = arguments.length, n = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  n[i] = arguments[i];
                e.apply(this, n);
              }
            };
          })(o || i));
        var a = r.readable || (!1 !== r.readable && t.readable),
          s = r.writable || (!1 !== r.writable && t.writable),
          u = function () {
            t.writable || l();
          },
          c = t._writableState && t._writableState.finished,
          l = function () {
            (s = !1), (c = !0), a || o.call(t);
          },
          h = t._readableState && t._readableState.endEmitted,
          d = function () {
            (a = !1), (h = !0), s || o.call(t);
          },
          f = function (e) {
            o.call(t, e);
          },
          p = function () {
            var e;
            return a && !h
              ? ((t._readableState && t._readableState.ended) || (e = new n()),
                o.call(t, e))
              : s && !c
              ? ((t._writableState && t._writableState.ended) || (e = new n()),
                o.call(t, e))
              : void 0;
          },
          v = function () {
            t.req.on("finish", l);
          };
        return (
          !(function (e) {
            return e.setHeader && "function" === typeof e.abort;
          })(t)
            ? s && !t._writableState && (t.on("end", u), t.on("close", u))
            : (t.on("complete", l),
              t.on("abort", p),
              t.req ? v() : t.on("request", v)),
          t.on("end", d),
          t.on("finish", l),
          !1 !== r.error && t.on("error", f),
          t.on("close", p),
          function () {
            t.removeListener("complete", l),
              t.removeListener("abort", p),
              t.removeListener("request", v),
              t.req && t.req.removeListener("finish", l),
              t.removeListener("end", u),
              t.removeListener("close", u),
              t.removeListener("finish", l),
              t.removeListener("end", d),
              t.removeListener("error", f),
              t.removeListener("close", p);
          }
        );
      };
    },
    1259: function (e, t, r) {
      "use strict";
      var n = r(62),
        i = r(63),
        o = r(182),
        a = r(183),
        s = r(457);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EthereumProviderError = t.EthereumRpcError = void 0);
      var u = r(1081),
        c = (function (e) {
          o(r, e);
          var t = a(r);
          function r(e, i, o) {
            var a;
            if ((n(this, r), !Number.isInteger(e)))
              throw new Error('"code" must be an integer.');
            if (!i || "string" !== typeof i)
              throw new Error('"message" must be a nonempty string.');
            return (
              ((a = t.call(this, i)).code = e), void 0 !== o && (a.data = o), a
            );
          }
          return (
            i(r, [
              {
                key: "serialize",
                value: function () {
                  var e = { code: this.code, message: this.message };
                  return (
                    void 0 !== this.data && (e.data = this.data),
                    this.stack && (e.stack = this.stack),
                    e
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return u.default(this.serialize(), h, 2);
                },
              },
            ]),
            r
          );
        })(s(Error));
      t.EthereumRpcError = c;
      var l = (function (e) {
        o(r, e);
        var t = a(r);
        function r(e, i, o) {
          if (
            (n(this, r),
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e))
          )
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          return t.call(this, e, i, o);
        }
        return i(r);
      })(c);
      function h(e, t) {
        if ("[Circular]" !== t) return t;
      }
      t.EthereumProviderError = l;
    },
    1260: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.errorValues = t.errorCodes = void 0),
        (t.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (t.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    1261: function (e, t, r) {
      var n = r(1951);
      function i(e) {
        var t = function t() {
          return t.called
            ? t.value
            : ((t.called = !0), (t.value = e.apply(this, arguments)));
        };
        return (t.called = !1), t;
      }
      function o(e) {
        var t = function t() {
            if (t.called) throw new Error(t.onceError);
            return (t.called = !0), (t.value = e.apply(this, arguments));
          },
          r = e.name || "Function wrapped with `once`";
        return (
          (t.onceError = r + " shouldn't be called more than once"),
          (t.called = !1),
          t
        );
      }
      (e.exports = n(i)),
        (e.exports.strict = n(o)),
        (i.proto = i(function () {
          Object.defineProperty(Function.prototype, "once", {
            value: function () {
              return i(this);
            },
            configurable: !0,
          }),
            Object.defineProperty(Function.prototype, "onceStrict", {
              value: function () {
                return o(this);
              },
              configurable: !0,
            });
        }));
    },
    1262: function (e, t, r) {
      "use strict";
      var n = r(62),
        i = r(63),
        o = r(182),
        a = r(183),
        s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ObservableStore = void 0);
      var u = (function (e) {
        o(r, e);
        var t = a(r);
        function r(e) {
          var i;
          return n(this, r), ((i = t.call(this))._state = e || {}), i;
        }
        return (
          i(r, [
            {
              key: "getState",
              value: function () {
                return this._getState();
              },
            },
            {
              key: "putState",
              value: function (e) {
                this._putState(e), this.emit("update", e);
              },
            },
            {
              key: "updateState",
              value: function (e) {
                if (e && "object" === typeof e) {
                  var t = this.getState();
                  this.putState(Object.assign(Object.assign({}, t), e));
                } else this.putState(e);
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                this.on("update", e);
              },
            },
            {
              key: "unsubscribe",
              value: function (e) {
                this.removeListener("update", e);
              },
            },
            {
              key: "_getState",
              value: function () {
                return this._state;
              },
            },
            {
              key: "_putState",
              value: function (e) {
                this._state = e;
              },
            },
          ]),
          r
        );
      })(s(r(1082)).default);
      t.ObservableStore = u;
    },
    1263: function (e, t, r) {
      "use strict";
      var n = r(62),
        i = r(63),
        o = r(182),
        a = r(183),
        s = r(457);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EthereumProviderError = t.EthereumRpcError = void 0);
      var u = r(1081),
        c = (function (e) {
          o(r, e);
          var t = a(r);
          function r(e, i, o) {
            var a;
            if ((n(this, r), !Number.isInteger(e)))
              throw new Error('"code" must be an integer.');
            if (!i || "string" !== typeof i)
              throw new Error('"message" must be a nonempty string.');
            return (
              ((a = t.call(this, i)).code = e), void 0 !== o && (a.data = o), a
            );
          }
          return (
            i(r, [
              {
                key: "serialize",
                value: function () {
                  var e = { code: this.code, message: this.message };
                  return (
                    void 0 !== this.data && (e.data = this.data),
                    this.stack && (e.stack = this.stack),
                    e
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return u.default(this.serialize(), h, 2);
                },
              },
            ]),
            r
          );
        })(s(Error));
      t.EthereumRpcError = c;
      var l = (function (e) {
        o(r, e);
        var t = a(r);
        function r(e, i, o) {
          if (
            (n(this, r),
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e))
          )
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          return t.call(this, e, i, o);
        }
        return i(r);
      })(c);
      function h(e, t) {
        if ("[Circular]" !== t) return t;
      }
      t.EthereumProviderError = l;
    },
    1264: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.errorValues = t.errorCodes = void 0),
        (t.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (t.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    1402: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return j;
      }),
        r.d(t, "b", function () {
          return S;
        }),
        r.d(t, "c", function () {
          return k;
        }),
        r.d(t, "d", function () {
          return b;
        }),
        r.d(t, "e", function () {
          return g;
        });
      var n = r(11),
        i = (r(69), r(1078)),
        o = r.n(i),
        a = r(1403),
        s = r.n(a),
        u = r(1257);
      function c() {
        c = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (j) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, n) {
          var i = t && t.prototype instanceof d ? t : d,
            o = Object.create(i.prototype),
            a = new E(n || []);
          return (
            (o._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (i, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw o;
                  return k();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var s = _(a, r);
                    if (s) {
                      if (s === h) continue;
                      return s;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(e, t, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === h)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(e, r, a)),
            o
          );
        }
        function l(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (j) {
            return { type: "throw", arg: j };
          }
        }
        e.wrap = u;
        var h = {};
        function d() {}
        function f() {}
        function p() {}
        var v = {};
        s(v, i, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          y = m && m(m(S([])));
        y && y !== t && r.call(y, i) && (v = y);
        var g = (p.prototype = d.prototype = Object.create(v));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var n;
          this._invoke = function (i, o) {
            function a() {
              return new t(function (n, a) {
                !(function n(i, o, a, s) {
                  var u = l(e[i], e, o);
                  if ("throw" !== u.type) {
                    var c = u.arg,
                      h = c.value;
                    return h && "object" == typeof h && r.call(h, "__await")
                      ? t.resolve(h.__await).then(
                          function (e) {
                            n("next", e, a, s);
                          },
                          function (e) {
                            n("throw", e, a, s);
                          }
                        )
                      : t.resolve(h).then(
                          function (e) {
                            (c.value = e), a(c);
                          },
                          function (e) {
                            return n("throw", e, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(i, o, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function _(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)
              )
                return h;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return h;
          }
          var n = l(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), h
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                h)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              h);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function M(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = p),
          s(g, "constructor", p),
          s(p, "constructor", f),
          (f.displayName = s(p, a, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, a, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          s(w.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new w(u(t, r, n, i), o);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          b(g),
          s(g, a, "Generator"),
          s(g, i, function () {
            return this;
          }),
          s(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(M),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                h
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), M(r), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    M(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          e
        );
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var d = r.n(u).a.getLogger("http-helpers");
      d.setLevel(u.levels.INFO);
      var f = "torus-default",
        p = "",
        v = null,
        m = [],
        y = [];
      function g(e) {
        p = e;
      }
      function b(e) {
        f = e;
      }
      function w(e, t) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = Object(n.a)(
          c().mark(function e(t, r) {
            var n, i, o, a;
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    n = null;
                    try {
                      n = new URL(t);
                    } catch (s) {}
                    if (
                      !v ||
                      !n ||
                      (!m.includes(n.origin) && !y.includes(n.pathname))
                    ) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (i = v.startTransaction({ name: t })),
                      (o = i.startChild({ op: "http" })),
                      (e.next = 7),
                      fetch(t, r)
                    );
                  case 7:
                    return (
                      (a = e.sent),
                      o.finish(),
                      i.finish(),
                      e.abrupt("return", a)
                    );
                  case 11:
                    return e.abrupt("return", fetch(t, r));
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function O() {
        var e = {};
        return f && (e["x-api-key"] = f), p && (e["x-embed-host"] = p), e;
      }
      function M(e) {
        d.info("Response: ".concat(e.status, " ").concat(e.statusText)),
          d.info("Url: ".concat(e.url));
      }
      var E = function (e, t) {
          var r = new Promise(function (t, r) {
            var n = setTimeout(function () {
              clearTimeout(n), r(new Error("Timed out in ".concat(e, "ms")));
            }, e);
          });
          return Promise.race([t, r]);
        },
        S = (function () {
          var e = Object(n.a)(
            c().mark(function e(t) {
              var r,
                n,
                i,
                o,
                a,
                u = arguments;
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                        (n = u.length > 2 && void 0 !== u[2] ? u[2] : {}),
                        (i = { mode: "cors", headers: {} }),
                        n.useAPIKey && (i.headers = h(h({}, i.headers), O())),
                        (o = s()(i, r, { method: "GET" })),
                        (e.next = 7),
                        w(t, o)
                      );
                    case 7:
                      if (!(a = e.sent).ok) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", a.json());
                    case 10:
                      throw (M(a), a);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        k = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = {
              mode: "cors",
              headers: { "Content-Type": "application/json; charset=utf-8" },
            };
          n.useAPIKey && (i.headers = h(h({}, i.headers), O()));
          var o = s()(i, r, { method: "POST" });
          return (
            n.isUrlEncodedData
              ? ((o.body = t),
                "application/json; charset=utf-8" ===
                  o.headers["Content-Type"] && delete o.headers["Content-Type"])
              : (o.body = JSON.stringify(t)),
            E(
              n.timeout || 6e4,
              w(e, o).then(function (e) {
                if (e.ok) return e.json();
                throw (M(e), e);
              })
            )
          );
        },
        j = function (e, t) {
          return { jsonrpc: "2.0", method: e, id: 10, params: t };
        };
    },
    1403: function (e, t, r) {
      (function (e, r) {
        var n = /^\[object .+?Constructor\]$/,
          i = /^(?:0|[1-9]\d*)$/,
          o = {};
        (o["[object Float32Array]"] =
          o["[object Float64Array]"] =
          o["[object Int8Array]"] =
          o["[object Int16Array]"] =
          o["[object Int32Array]"] =
          o["[object Uint8Array]"] =
          o["[object Uint8ClampedArray]"] =
          o["[object Uint16Array]"] =
          o["[object Uint32Array]"] =
            !0),
          (o["[object Arguments]"] =
            o["[object Array]"] =
            o["[object ArrayBuffer]"] =
            o["[object Boolean]"] =
            o["[object DataView]"] =
            o["[object Date]"] =
            o["[object Error]"] =
            o["[object Function]"] =
            o["[object Map]"] =
            o["[object Number]"] =
            o["[object Object]"] =
            o["[object RegExp]"] =
            o["[object Set]"] =
            o["[object String]"] =
            o["[object WeakMap]"] =
              !1);
        var a = "object" == typeof e && e && e.Object === Object && e,
          s = "object" == typeof self && self && self.Object === Object && self,
          u = a || s || Function("return this")(),
          c = t && !t.nodeType && t,
          l = c && "object" == typeof r && r && !r.nodeType && r,
          h = l && l.exports === c,
          d = h && a.process,
          f = (function () {
            try {
              var e = l && l.require && l.require("util").types;
              return e || (d && d.binding && d.binding("util"));
            } catch (t) {}
          })(),
          p = f && f.isTypedArray;
        function v(e, t, r) {
          switch (r.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, r[0]);
            case 2:
              return e.call(t, r[0], r[1]);
            case 3:
              return e.call(t, r[0], r[1], r[2]);
          }
          return e.apply(t, r);
        }
        var m,
          y,
          g = Array.prototype,
          b = Function.prototype,
          w = Object.prototype,
          _ = u["__core-js_shared__"],
          O = b.toString,
          M = w.hasOwnProperty,
          E = (function () {
            var e = /[^.]+$/.exec((_ && _.keys && _.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          S = w.toString,
          k = O.call(Object),
          j = RegExp(
            "^" +
              O.call(M)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          x = h ? u.Buffer : void 0,
          P = u.Symbol,
          A = u.Uint8Array,
          R = x ? x.allocUnsafe : void 0,
          C =
            ((m = Object.getPrototypeOf),
            (y = Object),
            function (e) {
              return m(y(e));
            }),
          T = Object.create,
          L = w.propertyIsEnumerable,
          N = g.splice,
          I = P ? P.toStringTag : void 0,
          D = (function () {
            try {
              var e = ue(Object, "defineProperty");
              return e({}, "", {}), e;
            } catch (t) {}
          })(),
          U = x ? x.isBuffer : void 0,
          B = Math.max,
          F = Date.now,
          K = ue(u, "Map"),
          q = ue(Object, "create"),
          H = (function () {
            function e() {}
            return function (t) {
              if (!we(t)) return {};
              if (T) return T(t);
              e.prototype = t;
              var r = new e();
              return (e.prototype = void 0), r;
            };
          })();
        function W(e) {
          var t = -1,
            r = null == e ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function V(e) {
          var t = -1,
            r = null == e ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function G(e) {
          var t = -1,
            r = null == e ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function Y(e) {
          var t = (this.__data__ = new V(e));
          this.size = t.size;
        }
        function z(e, t) {
          var r = ve(e),
            n = !r && pe(e),
            i = !r && !n && ye(e),
            o = !r && !n && !i && Oe(e),
            a = r || n || i || o,
            s = a
              ? (function (e, t) {
                  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                  return n;
                })(e.length, String)
              : [],
            u = s.length;
          for (var c in e)
            (!t && !M.call(e, c)) ||
              (a &&
                ("length" == c ||
                  (i && ("offset" == c || "parent" == c)) ||
                  (o &&
                    ("buffer" == c ||
                      "byteLength" == c ||
                      "byteOffset" == c)) ||
                  ce(c, u))) ||
              s.push(c);
          return s;
        }
        function X(e, t, r) {
          ((void 0 !== r && !fe(e[t], r)) || (void 0 === r && !(t in e))) &&
            $(e, t, r);
        }
        function J(e, t, r) {
          var n = e[t];
          (M.call(e, t) && fe(n, r) && (void 0 !== r || t in e)) || $(e, t, r);
        }
        function Z(e, t) {
          for (var r = e.length; r--; ) if (fe(e[r][0], t)) return r;
          return -1;
        }
        function $(e, t, r) {
          "__proto__" == t && D
            ? D(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0,
              })
            : (e[t] = r);
        }
        (W.prototype.clear = function () {
          (this.__data__ = q ? q(null) : {}), (this.size = 0);
        }),
          (W.prototype.delete = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
          }),
          (W.prototype.get = function (e) {
            var t = this.__data__;
            if (q) {
              var r = t[e];
              return "__lodash_hash_undefined__" === r ? void 0 : r;
            }
            return M.call(t, e) ? t[e] : void 0;
          }),
          (W.prototype.has = function (e) {
            var t = this.__data__;
            return q ? void 0 !== t[e] : M.call(t, e);
          }),
          (W.prototype.set = function (e, t) {
            var r = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (r[e] = q && void 0 === t ? "__lodash_hash_undefined__" : t),
              this
            );
          }),
          (V.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0);
          }),
          (V.prototype.delete = function (e) {
            var t = this.__data__,
              r = Z(t, e);
            return (
              !(r < 0) &&
              (r == t.length - 1 ? t.pop() : N.call(t, r, 1), --this.size, !0)
            );
          }),
          (V.prototype.get = function (e) {
            var t = this.__data__,
              r = Z(t, e);
            return r < 0 ? void 0 : t[r][1];
          }),
          (V.prototype.has = function (e) {
            return Z(this.__data__, e) > -1;
          }),
          (V.prototype.set = function (e, t) {
            var r = this.__data__,
              n = Z(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
          }),
          (G.prototype.clear = function () {
            (this.size = 0),
              (this.__data__ = {
                hash: new W(),
                map: new (K || V)(),
                string: new W(),
              });
          }),
          (G.prototype.delete = function (e) {
            var t = se(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
          }),
          (G.prototype.get = function (e) {
            return se(this, e).get(e);
          }),
          (G.prototype.has = function (e) {
            return se(this, e).has(e);
          }),
          (G.prototype.set = function (e, t) {
            var r = se(this, e),
              n = r.size;
            return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
          }),
          (Y.prototype.clear = function () {
            (this.__data__ = new V()), (this.size = 0);
          }),
          (Y.prototype.delete = function (e) {
            var t = this.__data__,
              r = t.delete(e);
            return (this.size = t.size), r;
          }),
          (Y.prototype.get = function (e) {
            return this.__data__.get(e);
          }),
          (Y.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (Y.prototype.set = function (e, t) {
            var r = this.__data__;
            if (r instanceof V) {
              var n = r.__data__;
              if (!K || n.length < 199)
                return n.push([e, t]), (this.size = ++r.size), this;
              r = this.__data__ = new G(n);
            }
            return r.set(e, t), (this.size = r.size), this;
          });
        var Q,
          ee = function (e, t, r) {
            for (var n = -1, i = Object(e), o = r(e), a = o.length; a--; ) {
              var s = o[Q ? a : ++n];
              if (!1 === t(i[s], s, i)) break;
            }
            return e;
          };
        function te(e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : I && I in Object(e)
            ? (function (e) {
                var t = M.call(e, I),
                  r = e[I];
                try {
                  e[I] = void 0;
                  var n = !0;
                } catch (o) {}
                var i = S.call(e);
                n && (t ? (e[I] = r) : delete e[I]);
                return i;
              })(e)
            : (function (e) {
                return S.call(e);
              })(e);
        }
        function re(e) {
          return _e(e) && "[object Arguments]" == te(e);
        }
        function ne(e) {
          return (
            !(
              !we(e) ||
              (function (e) {
                return !!E && E in e;
              })(e)
            ) &&
            (ge(e) ? j : n).test(
              (function (e) {
                if (null != e) {
                  try {
                    return O.call(e);
                  } catch (t) {}
                  try {
                    return e + "";
                  } catch (t) {}
                }
                return "";
              })(e)
            )
          );
        }
        function ie(e) {
          if (!we(e))
            return (function (e) {
              var t = [];
              if (null != e) for (var r in Object(e)) t.push(r);
              return t;
            })(e);
          var t = le(e),
            r = [];
          for (var n in e)
            ("constructor" != n || (!t && M.call(e, n))) && r.push(n);
          return r;
        }
        function oe(e, t, r, n, i) {
          e !== t &&
            ee(
              t,
              function (o, a) {
                if ((i || (i = new Y()), we(o)))
                  !(function (e, t, r, n, i, o, a) {
                    var s = he(e, r),
                      u = he(t, r),
                      c = a.get(u);
                    if (c) return void X(e, r, c);
                    var l = o ? o(s, u, r + "", e, t, a) : void 0,
                      h = void 0 === l;
                    if (h) {
                      var d = ve(u),
                        f = !d && ye(u),
                        p = !d && !f && Oe(u);
                      (l = u),
                        d || f || p
                          ? ve(s)
                            ? (l = s)
                            : _e((v = s)) && me(v)
                            ? (l = (function (e, t) {
                                var r = -1,
                                  n = e.length;
                                t || (t = Array(n));
                                for (; ++r < n; ) t[r] = e[r];
                                return t;
                              })(s))
                            : f
                            ? ((h = !1),
                              (l = (function (e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                  n = R ? R(r) : new e.constructor(r);
                                return e.copy(n), n;
                              })(u, !0)))
                            : p
                            ? ((h = !1),
                              (l = (function (e, t) {
                                var r = t
                                  ? (function (e) {
                                      var t = new e.constructor(e.byteLength);
                                      return new A(t).set(new A(e)), t;
                                    })(e.buffer)
                                  : e.buffer;
                                return new e.constructor(
                                  r,
                                  e.byteOffset,
                                  e.length
                                );
                              })(u, !0)))
                            : (l = [])
                          : (function (e) {
                              if (!_e(e) || "[object Object]" != te(e))
                                return !1;
                              var t = C(e);
                              if (null === t) return !0;
                              var r = M.call(t, "constructor") && t.constructor;
                              return (
                                "function" == typeof r &&
                                r instanceof r &&
                                O.call(r) == k
                              );
                            })(u) || pe(u)
                          ? ((l = s),
                            pe(s)
                              ? (l = (function (e) {
                                  return (function (e, t, r, n) {
                                    var i = !r;
                                    r || (r = {});
                                    var o = -1,
                                      a = t.length;
                                    for (; ++o < a; ) {
                                      var s = t[o],
                                        u = n ? n(r[s], e[s], s, r, e) : void 0;
                                      void 0 === u && (u = e[s]),
                                        i ? $(r, s, u) : J(r, s, u);
                                    }
                                    return r;
                                  })(e, Me(e));
                                })(s))
                              : (we(s) && !ge(s)) ||
                                (l = (function (e) {
                                  return "function" != typeof e.constructor ||
                                    le(e)
                                    ? {}
                                    : H(C(e));
                                })(u)))
                          : (h = !1);
                    }
                    var v;
                    h && (a.set(u, l), i(l, u, n, o, a), a.delete(u));
                    X(e, r, l);
                  })(e, t, a, r, oe, n, i);
                else {
                  var s = n ? n(he(e, a), o, a + "", e, t, i) : void 0;
                  void 0 === s && (s = o), X(e, a, s);
                }
              },
              Me
            );
        }
        function ae(e, t) {
          return de(
            (function (e, t, r) {
              return (
                (t = B(void 0 === t ? e.length - 1 : t, 0)),
                function () {
                  for (
                    var n = arguments,
                      i = -1,
                      o = B(n.length - t, 0),
                      a = Array(o);
                    ++i < o;

                  )
                    a[i] = n[t + i];
                  i = -1;
                  for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
                  return (s[t] = r(a)), v(e, this, s);
                }
              );
            })(e, t, ke),
            e + ""
          );
        }
        function se(e, t) {
          var r = e.__data__;
          return (function (e) {
            var t = typeof e;
            return "string" == t ||
              "number" == t ||
              "symbol" == t ||
              "boolean" == t
              ? "__proto__" !== e
              : null === e;
          })(t)
            ? r["string" == typeof t ? "string" : "hash"]
            : r.map;
        }
        function ue(e, t) {
          var r = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return ne(r) ? r : void 0;
        }
        function ce(e, t) {
          var r = typeof e;
          return (
            !!(t = null == t ? 9007199254740991 : t) &&
            ("number" == r || ("symbol" != r && i.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        function le(e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || w);
        }
        function he(e, t) {
          if (
            ("constructor" !== t || "function" !== typeof e[t]) &&
            "__proto__" != t
          )
            return e[t];
        }
        var de = (function (e) {
          var t = 0,
            r = 0;
          return function () {
            var n = F(),
              i = 16 - (n - r);
            if (((r = n), i > 0)) {
              if (++t >= 800) return arguments[0];
            } else t = 0;
            return e.apply(void 0, arguments);
          };
        })(
          D
            ? function (e, t) {
                return D(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value:
                    ((r = t),
                    function () {
                      return r;
                    }),
                  writable: !0,
                });
                var r;
              }
            : ke
        );
        function fe(e, t) {
          return e === t || (e !== e && t !== t);
        }
        var pe = re(
            (function () {
              return arguments;
            })()
          )
            ? re
            : function (e) {
                return _e(e) && M.call(e, "callee") && !L.call(e, "callee");
              },
          ve = Array.isArray;
        function me(e) {
          return null != e && be(e.length) && !ge(e);
        }
        var ye =
          U ||
          function () {
            return !1;
          };
        function ge(e) {
          if (!we(e)) return !1;
          var t = te(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        }
        function be(e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        }
        function we(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        }
        function _e(e) {
          return null != e && "object" == typeof e;
        }
        var Oe = p
          ? (function (e) {
              return function (t) {
                return e(t);
              };
            })(p)
          : function (e) {
              return _e(e) && be(e.length) && !!o[te(e)];
            };
        function Me(e) {
          return me(e) ? z(e, !0) : ie(e);
        }
        var Ee,
          Se =
            ((Ee = function (e, t, r) {
              oe(e, t, r);
            }),
            ae(function (e, t) {
              var r = -1,
                n = t.length,
                i = n > 1 ? t[n - 1] : void 0,
                o = n > 2 ? t[2] : void 0;
              for (
                i = Ee.length > 3 && "function" == typeof i ? (n--, i) : void 0,
                  o &&
                    (function (e, t, r) {
                      if (!we(r)) return !1;
                      var n = typeof t;
                      return (
                        !!("number" == n
                          ? me(r) && ce(t, r.length)
                          : "string" == n && (t in r)) && fe(r[t], e)
                      );
                    })(t[0], t[1], o) &&
                    ((i = n < 3 ? void 0 : i), (n = 1)),
                  e = Object(e);
                ++r < n;

              ) {
                var a = t[r];
                a && Ee(e, a, r, i);
              }
              return e;
            }));
        function ke(e) {
          return e;
        }
        r.exports = Se;
      }.call(this, r(30), r(45)(e)));
    },
    1404: function (e, t, r) {
      "use strict";
      (function (t, n) {
        var i;
        (e.exports = S), (S.ReadableState = E);
        r(86).EventEmitter;
        var o = function (e, t) {
            return e.listeners(t).length;
          },
          a = r(1405),
          s = r(8).Buffer,
          u = t.Uint8Array || function () {};
        var c,
          l = r(1938);
        c = l && l.debuglog ? l.debuglog("stream") : function () {};
        var h,
          d,
          f,
          p = r(1939),
          v = r(1406),
          m = r(1407).getHighWaterMark,
          y = r(1079).codes,
          g = y.ERR_INVALID_ARG_TYPE,
          b = y.ERR_STREAM_PUSH_AFTER_EOF,
          w = y.ERR_METHOD_NOT_IMPLEMENTED,
          _ = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r(15)(S, a);
        var O = v.errorOrDestroy,
          M = ["error", "close", "destroy", "pause", "resume"];
        function E(e, t, n) {
          (i = i || r(1080)),
            (e = e || {}),
            "boolean" !== typeof n && (n = t instanceof i),
            (this.objectMode = !!e.objectMode),
            n && (this.objectMode = this.objectMode || !!e.readableObjectMode),
            (this.highWaterMark = m(this, e, "readableHighWaterMark", n)),
            (this.buffer = new p()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== e.emitClose),
            (this.autoDestroy = !!e.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (h || (h = r(96).StringDecoder),
              (this.decoder = new h(e.encoding)),
              (this.encoding = e.encoding));
        }
        function S(e) {
          if (((i = i || r(1080)), !(this instanceof S))) return new S(e);
          var t = this instanceof i;
          (this._readableState = new E(e, this, t)),
            (this.readable = !0),
            e &&
              ("function" === typeof e.read && (this._read = e.read),
              "function" === typeof e.destroy && (this._destroy = e.destroy)),
            a.call(this);
        }
        function k(e, t, r, n, i) {
          c("readableAddChunk", t);
          var o,
            a = e._readableState;
          if (null === t)
            (a.reading = !1),
              (function (e, t) {
                if ((c("onEofChunk"), t.ended)) return;
                if (t.decoder) {
                  var r = t.decoder.end();
                  r &&
                    r.length &&
                    (t.buffer.push(r),
                    (t.length += t.objectMode ? 1 : r.length));
                }
                (t.ended = !0),
                  t.sync
                    ? P(e)
                    : ((t.needReadable = !1),
                      t.emittedReadable || ((t.emittedReadable = !0), A(e)));
              })(e, a);
          else if (
            (i ||
              (o = (function (e, t) {
                var r;
                (n = t),
                  s.isBuffer(n) ||
                    n instanceof u ||
                    "string" === typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (r = new g("chunk", ["string", "Buffer", "Uint8Array"], t));
                var n;
                return r;
              })(a, t)),
            o)
          )
            O(e, o);
          else if (a.objectMode || (t && t.length > 0))
            if (
              ("string" === typeof t ||
                a.objectMode ||
                Object.getPrototypeOf(t) === s.prototype ||
                (t = (function (e) {
                  return s.from(e);
                })(t)),
              n)
            )
              a.endEmitted ? O(e, new _()) : j(e, a, t, !0);
            else if (a.ended) O(e, new b());
            else {
              if (a.destroyed) return !1;
              (a.reading = !1),
                a.decoder && !r
                  ? ((t = a.decoder.write(t)),
                    a.objectMode || 0 !== t.length ? j(e, a, t, !1) : R(e, a))
                  : j(e, a, t, !1);
            }
          else n || ((a.reading = !1), R(e, a));
          return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
        }
        function j(e, t, r, n) {
          t.flowing && 0 === t.length && !t.sync
            ? ((t.awaitDrain = 0), e.emit("data", r))
            : ((t.length += t.objectMode ? 1 : r.length),
              n ? t.buffer.unshift(r) : t.buffer.push(r),
              t.needReadable && P(e)),
            R(e, t);
        }
        Object.defineProperty(S.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (e) {
            this._readableState && (this._readableState.destroyed = e);
          },
        }),
          (S.prototype.destroy = v.destroy),
          (S.prototype._undestroy = v.undestroy),
          (S.prototype._destroy = function (e, t) {
            t(e);
          }),
          (S.prototype.push = function (e, t) {
            var r,
              n = this._readableState;
            return (
              n.objectMode
                ? (r = !0)
                : "string" === typeof e &&
                  ((t = t || n.defaultEncoding) !== n.encoding &&
                    ((e = s.from(e, t)), (t = "")),
                  (r = !0)),
              k(this, e, t, !1, r)
            );
          }),
          (S.prototype.unshift = function (e) {
            return k(this, e, null, !0, !1);
          }),
          (S.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (S.prototype.setEncoding = function (e) {
            h || (h = r(96).StringDecoder);
            var t = new h(e);
            (this._readableState.decoder = t),
              (this._readableState.encoding =
                this._readableState.decoder.encoding);
            for (var n = this._readableState.buffer.head, i = ""; null !== n; )
              (i += t.write(n.data)), (n = n.next);
            return (
              this._readableState.buffer.clear(),
              "" !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          });
        function x(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e !== e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function (e) {
                  return (
                    e >= 1073741824
                      ? (e = 1073741824)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  );
                })(e)),
              e <= t.length
                ? e
                : t.ended
                ? t.length
                : ((t.needReadable = !0), 0));
        }
        function P(e) {
          var t = e._readableState;
          c("emitReadable", t.needReadable, t.emittedReadable),
            (t.needReadable = !1),
            t.emittedReadable ||
              (c("emitReadable", t.flowing),
              (t.emittedReadable = !0),
              n.nextTick(A, e));
        }
        function A(e) {
          var t = e._readableState;
          c("emitReadable_", t.destroyed, t.length, t.ended),
            t.destroyed ||
              (!t.length && !t.ended) ||
              (e.emit("readable"), (t.emittedReadable = !1)),
            (t.needReadable =
              !t.flowing && !t.ended && t.length <= t.highWaterMark),
            I(e);
        }
        function R(e, t) {
          t.readingMore || ((t.readingMore = !0), n.nextTick(C, e, t));
        }
        function C(e, t) {
          for (
            ;
            !t.reading &&
            !t.ended &&
            (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

          ) {
            var r = t.length;
            if ((c("maybeReadMore read 0"), e.read(0), r === t.length)) break;
          }
          t.readingMore = !1;
        }
        function T(e) {
          var t = e._readableState;
          (t.readableListening = e.listenerCount("readable") > 0),
            t.resumeScheduled && !t.paused
              ? (t.flowing = !0)
              : e.listenerCount("data") > 0 && e.resume();
        }
        function L(e) {
          c("readable nexttick read 0"), e.read(0);
        }
        function N(e, t) {
          c("resume", t.reading),
            t.reading || e.read(0),
            (t.resumeScheduled = !1),
            e.emit("resume"),
            I(e),
            t.flowing && !t.reading && e.read(0);
        }
        function I(e) {
          var t = e._readableState;
          for (c("flow", t.flowing); t.flowing && null !== e.read(); );
        }
        function D(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (r = t.buffer.shift())
                : !e || e >= t.length
                ? ((r = t.decoder
                    ? t.buffer.join("")
                    : 1 === t.buffer.length
                    ? t.buffer.first()
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (r = t.buffer.consume(e, t.decoder)),
              r);
          var r;
        }
        function U(e) {
          var t = e._readableState;
          c("endReadable", t.endEmitted),
            t.endEmitted || ((t.ended = !0), n.nextTick(B, t, e));
        }
        function B(e, t) {
          if (
            (c("endReadableNT", e.endEmitted, e.length),
            !e.endEmitted &&
              0 === e.length &&
              ((e.endEmitted = !0),
              (t.readable = !1),
              t.emit("end"),
              e.autoDestroy))
          ) {
            var r = t._writableState;
            (!r || (r.autoDestroy && r.finished)) && t.destroy();
          }
        }
        function F(e, t) {
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }
        (S.prototype.read = function (e) {
          c("read", e), (e = parseInt(e, 10));
          var t = this._readableState,
            r = e;
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e &&
              t.needReadable &&
              ((0 !== t.highWaterMark
                ? t.length >= t.highWaterMark
                : t.length > 0) ||
                t.ended))
          )
            return (
              c("read: emitReadable", t.length, t.ended),
              0 === t.length && t.ended ? U(this) : P(this),
              null
            );
          if (0 === (e = x(e, t)) && t.ended)
            return 0 === t.length && U(this), null;
          var n,
            i = t.needReadable;
          return (
            c("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              c("length less than watermark", (i = !0)),
            t.ended || t.reading
              ? c("reading or ended", (i = !1))
              : i &&
                (c("do read"),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = x(r, t))),
            null === (n = e > 0 ? D(e, t) : null)
              ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
              : ((t.length -= e), (t.awaitDrain = 0)),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), r !== e && t.ended && U(this)),
            null !== n && this.emit("data", n),
            n
          );
        }),
          (S.prototype._read = function (e) {
            O(this, new w("_read()"));
          }),
          (S.prototype.pipe = function (e, t) {
            var r = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = e;
                break;
              case 1:
                i.pipes = [i.pipes, e];
                break;
              default:
                i.pipes.push(e);
            }
            (i.pipesCount += 1), c("pipe count=%d opts=%j", i.pipesCount, t);
            var a =
              (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? u : m;
            function s(t, n) {
              c("onunpipe"),
                t === r &&
                  n &&
                  !1 === n.hasUnpiped &&
                  ((n.hasUnpiped = !0),
                  c("cleanup"),
                  e.removeListener("close", p),
                  e.removeListener("finish", v),
                  e.removeListener("drain", l),
                  e.removeListener("error", f),
                  e.removeListener("unpipe", s),
                  r.removeListener("end", u),
                  r.removeListener("end", m),
                  r.removeListener("data", d),
                  (h = !0),
                  !i.awaitDrain ||
                    (e._writableState && !e._writableState.needDrain) ||
                    l());
            }
            function u() {
              c("onend"), e.end();
            }
            i.endEmitted ? n.nextTick(a) : r.once("end", a), e.on("unpipe", s);
            var l = (function (e) {
              return function () {
                var t = e._readableState;
                c("pipeOnDrain", t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain &&
                    o(e, "data") &&
                    ((t.flowing = !0), I(e));
              };
            })(r);
            e.on("drain", l);
            var h = !1;
            function d(t) {
              c("ondata");
              var n = e.write(t);
              c("dest.write", n),
                !1 === n &&
                  (((1 === i.pipesCount && i.pipes === e) ||
                    (i.pipesCount > 1 && -1 !== F(i.pipes, e))) &&
                    !h &&
                    (c("false write response, pause", i.awaitDrain),
                    i.awaitDrain++),
                  r.pause());
            }
            function f(t) {
              c("onerror", t),
                m(),
                e.removeListener("error", f),
                0 === o(e, "error") && O(e, t);
            }
            function p() {
              e.removeListener("finish", v), m();
            }
            function v() {
              c("onfinish"), e.removeListener("close", p), m();
            }
            function m() {
              c("unpipe"), r.unpipe(e);
            }
            return (
              r.on("data", d),
              (function (e, t, r) {
                if ("function" === typeof e.prependListener)
                  return e.prependListener(t, r);
                e._events && e._events[t]
                  ? Array.isArray(e._events[t])
                    ? e._events[t].unshift(r)
                    : (e._events[t] = [r, e._events[t]])
                  : e.on(t, r);
              })(e, "error", f),
              e.once("close", p),
              e.once("finish", v),
              e.emit("pipe", r),
              i.flowing || (c("pipe resume"), r.resume()),
              e
            );
          }),
          (S.prototype.unpipe = function (e) {
            var t = this._readableState,
              r = { hasUnpiped: !1 };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount)
              return (
                (e && e !== t.pipes) ||
                  (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit("unpipe", this, r)),
                this
              );
            if (!e) {
              var n = t.pipes,
                i = t.pipesCount;
              (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
              for (var o = 0; o < i; o++)
                n[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var a = F(t.pipes, e);
            return (
              -1 === a ||
                (t.pipes.splice(a, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit("unpipe", this, r)),
              this
            );
          }),
          (S.prototype.on = function (e, t) {
            var r = a.prototype.on.call(this, e, t),
              i = this._readableState;
            return (
              "data" === e
                ? ((i.readableListening = this.listenerCount("readable") > 0),
                  !1 !== i.flowing && this.resume())
                : "readable" === e &&
                  (i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    c("on readable", i.length, i.reading),
                    i.length ? P(this) : i.reading || n.nextTick(L, this))),
              r
            );
          }),
          (S.prototype.addListener = S.prototype.on),
          (S.prototype.removeListener = function (e, t) {
            var r = a.prototype.removeListener.call(this, e, t);
            return "readable" === e && n.nextTick(T, this), r;
          }),
          (S.prototype.removeAllListeners = function (e) {
            var t = a.prototype.removeAllListeners.apply(this, arguments);
            return ("readable" !== e && void 0 !== e) || n.nextTick(T, this), t;
          }),
          (S.prototype.resume = function () {
            var e = this._readableState;
            return (
              e.flowing ||
                (c("resume"),
                (e.flowing = !e.readableListening),
                (function (e, t) {
                  t.resumeScheduled ||
                    ((t.resumeScheduled = !0), n.nextTick(N, e, t));
                })(this, e)),
              (e.paused = !1),
              this
            );
          }),
          (S.prototype.pause = function () {
            return (
              c("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (c("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (S.prototype.wrap = function (e) {
            var t = this,
              r = this._readableState,
              n = !1;
            for (var i in (e.on("end", function () {
              if ((c("wrapped end"), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && t.push(e);
              }
              t.push(null);
            }),
            e.on("data", function (i) {
              (c("wrapped data"),
              r.decoder && (i = r.decoder.write(i)),
              !r.objectMode || (null !== i && void 0 !== i)) &&
                (r.objectMode || (i && i.length)) &&
                (t.push(i) || ((n = !0), e.pause()));
            }),
            e))
              void 0 === this[i] &&
                "function" === typeof e[i] &&
                (this[i] = (function (t) {
                  return function () {
                    return e[t].apply(e, arguments);
                  };
                })(i));
            for (var o = 0; o < M.length; o++)
              e.on(M[o], this.emit.bind(this, M[o]));
            return (
              (this._read = function (t) {
                c("wrapped _read", t), n && ((n = !1), e.resume());
              }),
              this
            );
          }),
          "function" === typeof Symbol &&
            (S.prototype[Symbol.asyncIterator] = function () {
              return void 0 === d && (d = r(1941)), d(this);
            }),
          Object.defineProperty(S.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(S.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(S.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (e) {
              this._readableState && (this._readableState.flowing = e);
            },
          }),
          (S._fromList = D),
          Object.defineProperty(S.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" === typeof Symbol &&
            (S.from = function (e, t) {
              return void 0 === f && (f = r(1942)), f(S, e, t);
            });
      }.call(this, r(30), r(25)));
    },
    1405: function (e, t, r) {
      e.exports = r(86).EventEmitter;
    },
    1406: function (e, t, r) {
      "use strict";
      (function (t) {
        function r(e, t) {
          i(e, t), n(e);
        }
        function n(e) {
          (e._writableState && !e._writableState.emitClose) ||
            (e._readableState && !e._readableState.emitClose) ||
            e.emit("close");
        }
        function i(e, t) {
          e.emit("error", t);
        }
        e.exports = {
          destroy: function (e, o) {
            var a = this,
              s = this._readableState && this._readableState.destroyed,
              u = this._writableState && this._writableState.destroyed;
            return s || u
              ? (o
                  ? o(e)
                  : e &&
                    (this._writableState
                      ? this._writableState.errorEmitted ||
                        ((this._writableState.errorEmitted = !0),
                        t.nextTick(i, this, e))
                      : t.nextTick(i, this, e)),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function (e) {
                  !o && e
                    ? a._writableState
                      ? a._writableState.errorEmitted
                        ? t.nextTick(n, a)
                        : ((a._writableState.errorEmitted = !0),
                          t.nextTick(r, a, e))
                      : t.nextTick(r, a, e)
                    : o
                    ? (t.nextTick(n, a), o(e))
                    : t.nextTick(n, a);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
          errorOrDestroy: function (e, t) {
            var r = e._readableState,
              n = e._writableState;
            (r && r.autoDestroy) || (n && n.autoDestroy)
              ? e.destroy(t)
              : e.emit("error", t);
          },
        };
      }.call(this, r(25)));
    },
    1407: function (e, t, r) {
      "use strict";
      var n = r(1079).codes.ERR_INVALID_OPT_VALUE;
      e.exports = {
        getHighWaterMark: function (e, t, r, i) {
          var o = (function (e, t, r) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null;
          })(t, i, r);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new n(i ? r : "highWaterMark", o);
            return Math.floor(o);
          }
          return e.objectMode ? 16 : 16384;
        },
      };
    },
    1408: function (e, t, r) {
      "use strict";
      (function (t, n) {
        function i(e) {
          var t = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (e, t, r) {
                var n = e.entry;
                e.entry = null;
                for (; n; ) {
                  var i = n.callback;
                  t.pendingcb--, i(r), (n = n.next);
                }
                t.corkedRequestsFree.next = e;
              })(t, e);
            });
        }
        var o;
        (e.exports = S), (S.WritableState = E);
        var a = { deprecate: r(193) },
          s = r(1405),
          u = r(8).Buffer,
          c = t.Uint8Array || function () {};
        var l,
          h = r(1406),
          d = r(1407).getHighWaterMark,
          f = r(1079).codes,
          p = f.ERR_INVALID_ARG_TYPE,
          v = f.ERR_METHOD_NOT_IMPLEMENTED,
          m = f.ERR_MULTIPLE_CALLBACK,
          y = f.ERR_STREAM_CANNOT_PIPE,
          g = f.ERR_STREAM_DESTROYED,
          b = f.ERR_STREAM_NULL_VALUES,
          w = f.ERR_STREAM_WRITE_AFTER_END,
          _ = f.ERR_UNKNOWN_ENCODING,
          O = h.errorOrDestroy;
        function M() {}
        function E(e, t, a) {
          (o = o || r(1080)),
            (e = e || {}),
            "boolean" !== typeof a && (a = t instanceof o),
            (this.objectMode = !!e.objectMode),
            a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
            (this.highWaterMark = d(this, e, "writableHighWaterMark", a)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var s = !1 === e.decodeStrings;
          (this.decodeStrings = !s),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (e) {
              !(function (e, t) {
                var r = e._writableState,
                  i = r.sync,
                  o = r.writecb;
                if ("function" !== typeof o) throw new m();
                if (
                  ((function (e) {
                    (e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0);
                  })(r),
                  t)
                )
                  !(function (e, t, r, i, o) {
                    --t.pendingcb,
                      r
                        ? (n.nextTick(o, i),
                          n.nextTick(R, e, t),
                          (e._writableState.errorEmitted = !0),
                          O(e, i))
                        : (o(i),
                          (e._writableState.errorEmitted = !0),
                          O(e, i),
                          R(e, t));
                  })(e, r, i, t, o);
                else {
                  var a = P(r) || e.destroyed;
                  a ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    x(e, r),
                    i ? n.nextTick(j, e, r, a, o) : j(e, r, a, o);
                }
              })(t, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== e.emitClose),
            (this.autoDestroy = !!e.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this));
        }
        function S(e) {
          var t = this instanceof (o = o || r(1080));
          if (!t && !l.call(S, this)) return new S(e);
          (this._writableState = new E(e, this, t)),
            (this.writable = !0),
            e &&
              ("function" === typeof e.write && (this._write = e.write),
              "function" === typeof e.writev && (this._writev = e.writev),
              "function" === typeof e.destroy && (this._destroy = e.destroy),
              "function" === typeof e.final && (this._final = e.final)),
            s.call(this);
        }
        function k(e, t, r, n, i, o, a) {
          (t.writelen = n),
            (t.writecb = a),
            (t.writing = !0),
            (t.sync = !0),
            t.destroyed
              ? t.onwrite(new g("write"))
              : r
              ? e._writev(i, t.onwrite)
              : e._write(i, o, t.onwrite),
            (t.sync = !1);
        }
        function j(e, t, r, n) {
          r ||
            (function (e, t) {
              0 === t.length &&
                t.needDrain &&
                ((t.needDrain = !1), e.emit("drain"));
            })(e, t),
            t.pendingcb--,
            n(),
            R(e, t);
        }
        function x(e, t) {
          t.bufferProcessing = !0;
          var r = t.bufferedRequest;
          if (e._writev && r && r.next) {
            var n = t.bufferedRequestCount,
              o = new Array(n),
              a = t.corkedRequestsFree;
            a.entry = r;
            for (var s = 0, u = !0; r; )
              (o[s] = r), r.isBuf || (u = !1), (r = r.next), (s += 1);
            (o.allBuffers = u),
              k(e, t, !0, t.length, o, "", a.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              a.next
                ? ((t.corkedRequestsFree = a.next), (a.next = null))
                : (t.corkedRequestsFree = new i(t)),
              (t.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var c = r.chunk,
                l = r.encoding,
                h = r.callback;
              if (
                (k(e, t, !1, t.objectMode ? 1 : c.length, c, l, h),
                (r = r.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break;
            }
            null === r && (t.lastBufferedRequest = null);
          }
          (t.bufferedRequest = r), (t.bufferProcessing = !1);
        }
        function P(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }
        function A(e, t) {
          e._final(function (r) {
            t.pendingcb--,
              r && O(e, r),
              (t.prefinished = !0),
              e.emit("prefinish"),
              R(e, t);
          });
        }
        function R(e, t) {
          var r = P(t);
          if (
            r &&
            ((function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" !== typeof e._final || t.destroyed
                  ? ((t.prefinished = !0), e.emit("prefinish"))
                  : (t.pendingcb++, (t.finalCalled = !0), n.nextTick(A, e, t)));
            })(e, t),
            0 === t.pendingcb &&
              ((t.finished = !0), e.emit("finish"), t.autoDestroy))
          ) {
            var i = e._readableState;
            (!i || (i.autoDestroy && i.endEmitted)) && e.destroy();
          }
          return r;
        }
        r(15)(S, s),
          (E.prototype.getBuffer = function () {
            for (var e = this.bufferedRequest, t = []; e; )
              t.push(e), (e = e.next);
            return t;
          }),
          (function () {
            try {
              Object.defineProperty(E.prototype, "buffer", {
                get: a.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (e) {}
          })(),
          "function" === typeof Symbol &&
          Symbol.hasInstance &&
          "function" === typeof Function.prototype[Symbol.hasInstance]
            ? ((l = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(S, Symbol.hasInstance, {
                value: function (e) {
                  return (
                    !!l.call(this, e) ||
                    (this === S && e && e._writableState instanceof E)
                  );
                },
              }))
            : (l = function (e) {
                return e instanceof this;
              }),
          (S.prototype.pipe = function () {
            O(this, new y());
          }),
          (S.prototype.write = function (e, t, r) {
            var i,
              o = this._writableState,
              a = !1,
              s = !o.objectMode && ((i = e), u.isBuffer(i) || i instanceof c);
            return (
              s &&
                !u.isBuffer(e) &&
                (e = (function (e) {
                  return u.from(e);
                })(e)),
              "function" === typeof t && ((r = t), (t = null)),
              s ? (t = "buffer") : t || (t = o.defaultEncoding),
              "function" !== typeof r && (r = M),
              o.ending
                ? (function (e, t) {
                    var r = new w();
                    O(e, r), n.nextTick(t, r);
                  })(this, r)
                : (s ||
                    (function (e, t, r, i) {
                      var o;
                      return (
                        null === r
                          ? (o = new b())
                          : "string" === typeof r ||
                            t.objectMode ||
                            (o = new p("chunk", ["string", "Buffer"], r)),
                        !o || (O(e, o), n.nextTick(i, o), !1)
                      );
                    })(this, o, e, r)) &&
                  (o.pendingcb++,
                  (a = (function (e, t, r, n, i, o) {
                    if (!r) {
                      var a = (function (e, t, r) {
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          "string" !== typeof t ||
                          (t = u.from(t, r));
                        return t;
                      })(t, n, i);
                      n !== a && ((r = !0), (i = "buffer"), (n = a));
                    }
                    var s = t.objectMode ? 1 : n.length;
                    t.length += s;
                    var c = t.length < t.highWaterMark;
                    c || (t.needDrain = !0);
                    if (t.writing || t.corked) {
                      var l = t.lastBufferedRequest;
                      (t.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null,
                      }),
                        l
                          ? (l.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1);
                    } else k(e, t, !1, s, n, i, o);
                    return c;
                  })(this, o, s, e, t, r))),
              a
            );
          }),
          (S.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (S.prototype.uncork = function () {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                x(this, e));
          }),
          (S.prototype.setDefaultEncoding = function (e) {
            if (
              ("string" === typeof e && (e = e.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((e + "").toLowerCase()) > -1
              ))
            )
              throw new _(e);
            return (this._writableState.defaultEncoding = e), this;
          }),
          Object.defineProperty(S.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(S.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (S.prototype._write = function (e, t, r) {
            r(new v("_write()"));
          }),
          (S.prototype._writev = null),
          (S.prototype.end = function (e, t, r) {
            var i = this._writableState;
            return (
              "function" === typeof e
                ? ((r = e), (e = null), (t = null))
                : "function" === typeof t && ((r = t), (t = null)),
              null !== e && void 0 !== e && this.write(e, t),
              i.corked && ((i.corked = 1), this.uncork()),
              i.ending ||
                (function (e, t, r) {
                  (t.ending = !0),
                    R(e, t),
                    r && (t.finished ? n.nextTick(r) : e.once("finish", r));
                  (t.ended = !0), (e.writable = !1);
                })(this, i, r),
              this
            );
          }),
          Object.defineProperty(S.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(S.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (e) {
              this._writableState && (this._writableState.destroyed = e);
            },
          }),
          (S.prototype.destroy = h.destroy),
          (S.prototype._undestroy = h.undestroy),
          (S.prototype._destroy = function (e, t) {
            t(e);
          });
      }.call(this, r(30), r(25)));
    },
    1409: function (e, t, r) {
      "use strict";
      e.exports = l;
      var n = r(1079).codes,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = n.ERR_TRANSFORM_WITH_LENGTH_0,
        u = r(1080);
      function c(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit("error", new o());
        (r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        u.call(this, e),
          (this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ("function" === typeof e.transform &&
              (this._transform = e.transform),
            "function" === typeof e.flush && (this._flush = e.flush)),
          this.on("prefinish", h);
      }
      function h() {
        var e = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? d(this, null, null)
          : this._flush(function (t, r) {
              d(e, t, r);
            });
      }
      function d(e, t, r) {
        if (t) return e.emit("error", t);
        if ((null != r && e.push(r), e._writableState.length)) throw new s();
        if (e._transformState.transforming) throw new a();
        return e.push(null);
      }
      r(15)(l, u),
        (l.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            u.prototype.push.call(this, e, t)
          );
        }),
        (l.prototype._transform = function (e, t, r) {
          r(new i("_transform()"));
        }),
        (l.prototype._write = function (e, t, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (l.prototype._read = function (e) {
          var t = this._transformState;
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform));
        }),
        (l.prototype._destroy = function (e, t) {
          u.prototype._destroy.call(this, e, function (e) {
            t(e);
          });
        });
    },
    1410: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serializeError =
          t.isValidCode =
          t.getMessageFromCode =
          t.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      var n = r(1260),
        i = r(1259),
        o = n.errorCodes.rpc.internal,
        a = "Unspecified error message. This is a bug, please report it.",
        s = { code: o, message: u(o) };
      function u(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        if (Number.isInteger(e)) {
          var i = e.toString();
          if (d(n.errorValues, i)) return n.errorValues[i].message;
          if (l(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return r;
      }
      function c(e) {
        if (!Number.isInteger(e)) return !1;
        var t = e.toString();
        return !!n.errorValues[t] || !!l(e);
      }
      function l(e) {
        return e >= -32099 && e <= -32e3;
      }
      function h(e) {
        return e && "object" === typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function d(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (t.getMessageFromCode = u),
        (t.isValidCode = c),
        (t.serializeError = function (e) {
          var t,
            r,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = n.fallbackError,
            a = void 0 === o ? s : o,
            l = n.shouldIncludeStack,
            f = void 0 !== l && l;
          if (!a || !Number.isInteger(a.code) || "string" !== typeof a.message)
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (e instanceof i.EthereumRpcError) return e.serialize();
          var p = {};
          if (
            e &&
            "object" === typeof e &&
            !Array.isArray(e) &&
            d(e, "code") &&
            c(e.code)
          ) {
            var v = e;
            (p.code = v.code),
              v.message && "string" === typeof v.message
                ? ((p.message = v.message), d(v, "data") && (p.data = v.data))
                : ((p.message = u(p.code)), (p.data = { originalError: h(e) }));
          } else {
            p.code = a.code;
            var m = null === (t = e) || void 0 === t ? void 0 : t.message;
            (p.message = m && "string" === typeof m ? m : a.message),
              (p.data = { originalError: h(e) });
          }
          var y = null === (r = e) || void 0 === r ? void 0 : r.stack;
          return f && e && y && "string" === typeof y && (p.stack = y), p;
        });
    },
    1411: function (e, t, r) {
      (function (t) {
        var n = r(1261),
          i = function () {};
        e.exports = function e(r, o, a) {
          if ("function" === typeof o) return e(r, null, o);
          o || (o = {}), (a = n(a || i));
          var s = r._writableState,
            u = r._readableState,
            c = o.readable || (!1 !== o.readable && r.readable),
            l = o.writable || (!1 !== o.writable && r.writable),
            h = !1,
            d = function () {
              r.writable || f();
            },
            f = function () {
              (l = !1), c || a.call(r);
            },
            p = function () {
              (c = !1), l || a.call(r);
            },
            v = function (e) {
              a.call(r, e ? new Error("exited with error code: " + e) : null);
            },
            m = function (e) {
              a.call(r, e);
            },
            y = function () {
              t.nextTick(g);
            },
            g = function () {
              if (!h)
                return (!c || (u && u.ended && !u.destroyed)) &&
                  (!l || (s && s.ended && !s.destroyed))
                  ? void 0
                  : a.call(r, new Error("premature close"));
            },
            b = function () {
              r.req.on("finish", f);
            };
          return (
            !(function (e) {
              return e.setHeader && "function" === typeof e.abort;
            })(r)
              ? l && !s && (r.on("end", d), r.on("close", d))
              : (r.on("complete", f),
                r.on("abort", y),
                r.req ? b() : r.on("request", b)),
            (function (e) {
              return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length;
            })(r) && r.on("exit", v),
            r.on("end", p),
            r.on("finish", f),
            !1 !== o.error && r.on("error", m),
            r.on("close", y),
            function () {
              (h = !0),
                r.removeListener("complete", f),
                r.removeListener("abort", y),
                r.removeListener("request", b),
                r.req && r.req.removeListener("finish", f),
                r.removeListener("end", d),
                r.removeListener("close", d),
                r.removeListener("finish", f),
                r.removeListener("exit", v),
                r.removeListener("end", p),
                r.removeListener("error", m),
                r.removeListener("close", y);
            }
          );
        };
      }.call(this, r(25)));
    },
    1412: function (e, t, r) {
      (function (t) {
        var n = r(1261),
          i = r(1411),
          o = r(1952),
          a = function () {},
          s = /^v?\.0/.test(t.version),
          u = function (e) {
            return "function" === typeof e;
          },
          c = function (e, t, r, c) {
            c = n(c);
            var l = !1;
            e.on("close", function () {
              l = !0;
            }),
              i(e, { readable: t, writable: r }, function (e) {
                if (e) return c(e);
                (l = !0), c();
              });
            var h = !1;
            return function (t) {
              if (!l && !h)
                return (
                  (h = !0),
                  (function (e) {
                    return (
                      !!s &&
                      !!o &&
                      (e instanceof (o.ReadStream || a) ||
                        e instanceof (o.WriteStream || a)) &&
                      u(e.close)
                    );
                  })(e)
                    ? e.close(a)
                    : (function (e) {
                        return e.setHeader && u(e.abort);
                      })(e)
                    ? e.abort()
                    : u(e.destroy)
                    ? e.destroy()
                    : void c(t || new Error("stream was destroyed"))
                );
            };
          },
          l = function (e) {
            e();
          },
          h = function (e, t) {
            return e.pipe(t);
          };
        e.exports = function () {
          var e,
            t = Array.prototype.slice.call(arguments),
            r = (u(t[t.length - 1] || a) && t.pop()) || a;
          if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
            throw new Error("pump requires two streams per minimum");
          var n = t.map(function (i, o) {
            var a = o < t.length - 1;
            return c(i, a, o > 0, function (t) {
              e || (e = t), t && n.forEach(l), a || (n.forEach(l), r(e));
            });
          });
          return t.reduce(h);
        };
      }.call(this, r(25)));
    },
    1413: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serializeError =
          t.isValidCode =
          t.getMessageFromCode =
          t.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      var n = r(1264),
        i = r(1263),
        o = n.errorCodes.rpc.internal,
        a = "Unspecified error message. This is a bug, please report it.",
        s = { code: o, message: u(o) };
      function u(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        if (Number.isInteger(e)) {
          var i = e.toString();
          if (d(n.errorValues, i)) return n.errorValues[i].message;
          if (l(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return r;
      }
      function c(e) {
        if (!Number.isInteger(e)) return !1;
        var t = e.toString();
        return !!n.errorValues[t] || !!l(e);
      }
      function l(e) {
        return e >= -32099 && e <= -32e3;
      }
      function h(e) {
        return e && "object" === typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function d(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (t.getMessageFromCode = u),
        (t.isValidCode = c),
        (t.serializeError = function (e) {
          var t,
            r,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = n.fallbackError,
            a = void 0 === o ? s : o,
            l = n.shouldIncludeStack,
            f = void 0 !== l && l;
          if (!a || !Number.isInteger(a.code) || "string" !== typeof a.message)
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (e instanceof i.EthereumRpcError) return e.serialize();
          var p = {};
          if (
            e &&
            "object" === typeof e &&
            !Array.isArray(e) &&
            d(e, "code") &&
            c(e.code)
          ) {
            var v = e;
            (p.code = v.code),
              v.message && "string" === typeof v.message
                ? ((p.message = v.message), d(v, "data") && (p.data = v.data))
                : ((p.message = u(p.code)), (p.data = { originalError: h(e) }));
          } else {
            p.code = a.code;
            var m = null === (t = e) || void 0 === t ? void 0 : t.message;
            (p.message = m && "string" === typeof m ? m : a.message),
              (p.data = { originalError: h(e) });
          }
          var y = null === (r = e) || void 0 === r ? void 0 : r.stack;
          return f && e && y && "string" === typeof y && (p.stack = y), p;
        });
    },
    1932: function (e, t, r) {
      "use strict";
      r.r(t),
        function (e) {
          r.d(t, "BUTTON_POSITION", function () {
            return Z;
          }),
            r.d(t, "LOGIN_PROVIDER", function () {
              return V;
            }),
            r.d(t, "PAYMENT_PROVIDER", function () {
              return z;
            }),
            r.d(t, "SUPPORTED_PAYMENT_NETWORK", function () {
              return X;
            }),
            r.d(t, "TORUS_BUILD_ENV", function () {
              return J;
            }),
            r.d(t, "TorusInpageProvider", function () {
              return Ee;
            }),
            r.d(t, "WALLET_OPENLOGIN_VERIFIER_MAP", function () {
              return Y;
            }),
            r.d(t, "WALLET_VERIFIERS", function () {
              return G;
            }),
            r.d(t, "default", function () {
              return Ke;
            });
          var n,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            h,
            d = r(171),
            f = r(4),
            p = r(5),
            v = r(13),
            m = r(50),
            y = r(36),
            g = r(9),
            b = r(10),
            w = r(11),
            _ = r(77),
            O = r(1933),
            M = r.n(O),
            E = r(1078),
            S = r.n(E),
            k = r(1935),
            j = r(1402),
            x = r(1936),
            P = r(1953),
            A = r(1403),
            R = r.n(A),
            C = r(1957),
            T = r(1963),
            L = r(1965),
            N = r.n(L),
            I = r(1966),
            D = r(1412),
            U = r.n(D),
            B = r(1257),
            F = r.n(B),
            K = r(95),
            q = r.n(K),
            H = r(86);
          function W() {
            W = function () {
              return e;
            };
            var e = {},
              t = Object.prototype,
              r = t.hasOwnProperty,
              n = "function" == typeof Symbol ? Symbol : {},
              i = n.iterator || "@@iterator",
              o = n.asyncIterator || "@@asyncIterator",
              a = n.toStringTag || "@@toStringTag";
            function s(e, t, r) {
              return (
                Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              s({}, "");
            } catch (k) {
              s = function (e, t, r) {
                return (e[t] = r);
              };
            }
            function u(e, t, r, n) {
              var i = t && t.prototype instanceof h ? t : h,
                o = Object.create(i.prototype),
                a = new M(n || []);
              return (
                (o._invoke = (function (e, t, r) {
                  var n = "suspendedStart";
                  return function (i, o) {
                    if ("executing" === n)
                      throw new Error("Generator is already running");
                    if ("completed" === n) {
                      if ("throw" === i) throw o;
                      return S();
                    }
                    for (r.method = i, r.arg = o; ; ) {
                      var a = r.delegate;
                      if (a) {
                        var s = w(a, r);
                        if (s) {
                          if (s === l) continue;
                          return s;
                        }
                      }
                      if ("next" === r.method) r.sent = r._sent = r.arg;
                      else if ("throw" === r.method) {
                        if ("suspendedStart" === n)
                          throw ((n = "completed"), r.arg);
                        r.dispatchException(r.arg);
                      } else "return" === r.method && r.abrupt("return", r.arg);
                      n = "executing";
                      var u = c(e, t, r);
                      if ("normal" === u.type) {
                        if (
                          ((n = r.done ? "completed" : "suspendedYield"),
                          u.arg === l)
                        )
                          continue;
                        return { value: u.arg, done: r.done };
                      }
                      "throw" === u.type &&
                        ((n = "completed"),
                        (r.method = "throw"),
                        (r.arg = u.arg));
                    }
                  };
                })(e, r, a)),
                o
              );
            }
            function c(e, t, r) {
              try {
                return { type: "normal", arg: e.call(t, r) };
              } catch (k) {
                return { type: "throw", arg: k };
              }
            }
            e.wrap = u;
            var l = {};
            function h() {}
            function d() {}
            function f() {}
            var p = {};
            s(p, i, function () {
              return this;
            });
            var v = Object.getPrototypeOf,
              m = v && v(v(E([])));
            m && m !== t && r.call(m, i) && (p = m);
            var y = (f.prototype = h.prototype = Object.create(p));
            function g(e) {
              ["next", "throw", "return"].forEach(function (t) {
                s(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function b(e, t) {
              var n;
              this._invoke = function (i, o) {
                function a() {
                  return new t(function (n, a) {
                    !(function n(i, o, a, s) {
                      var u = c(e[i], e, o);
                      if ("throw" !== u.type) {
                        var l = u.arg,
                          h = l.value;
                        return h && "object" == typeof h && r.call(h, "__await")
                          ? t.resolve(h.__await).then(
                              function (e) {
                                n("next", e, a, s);
                              },
                              function (e) {
                                n("throw", e, a, s);
                              }
                            )
                          : t.resolve(h).then(
                              function (e) {
                                (l.value = e), a(l);
                              },
                              function (e) {
                                return n("throw", e, a, s);
                              }
                            );
                      }
                      s(u.arg);
                    })(i, o, n, a);
                  });
                }
                return (n = n ? n.then(a, a) : a());
              };
            }
            function w(e, t) {
              var r = e.iterator[t.method];
              if (void 0 === r) {
                if (((t.delegate = null), "throw" === t.method)) {
                  if (
                    e.iterator.return &&
                    ((t.method = "return"),
                    (t.arg = void 0),
                    w(e, t),
                    "throw" === t.method)
                  )
                    return l;
                  (t.method = "throw"),
                    (t.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return l;
              }
              var n = c(r, e.iterator, t.arg);
              if ("throw" === n.type)
                return (
                  (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
                );
              var i = n.arg;
              return i
                ? i.done
                  ? ((t[e.resultName] = i.value),
                    (t.next = e.nextLoc),
                    "return" !== t.method &&
                      ((t.method = "next"), (t.arg = void 0)),
                    (t.delegate = null),
                    l)
                  : i
                : ((t.method = "throw"),
                  (t.arg = new TypeError("iterator result is not an object")),
                  (t.delegate = null),
                  l);
            }
            function _(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function O(e) {
              var t = e.completion || {};
              (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function M(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(_, this),
                this.reset(!0);
            }
            function E(e) {
              if (e) {
                var t = e[i];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var n = -1,
                    o = function t() {
                      for (; ++n < e.length; )
                        if (r.call(e, n))
                          return (t.value = e[n]), (t.done = !1), t;
                      return (t.value = void 0), (t.done = !0), t;
                    };
                  return (o.next = o);
                }
              }
              return { next: S };
            }
            function S() {
              return { value: void 0, done: !0 };
            }
            return (
              (d.prototype = f),
              s(y, "constructor", f),
              s(f, "constructor", d),
              (d.displayName = s(f, a, "GeneratorFunction")),
              (e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === d || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (e.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, f)
                    : ((e.__proto__ = f), s(e, a, "GeneratorFunction")),
                  (e.prototype = Object.create(y)),
                  e
                );
              }),
              (e.awrap = function (e) {
                return { __await: e };
              }),
              g(b.prototype),
              s(b.prototype, o, function () {
                return this;
              }),
              (e.AsyncIterator = b),
              (e.async = function (t, r, n, i, o) {
                void 0 === o && (o = Promise);
                var a = new b(u(t, r, n, i), o);
                return e.isGeneratorFunction(r)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              g(y),
              s(y, a, "Generator"),
              s(y, i, function () {
                return this;
              }),
              s(y, "toString", function () {
                return "[object Generator]";
              }),
              (e.keys = function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return (
                  t.reverse(),
                  function r() {
                    for (; t.length; ) {
                      var n = t.pop();
                      if (n in e) return (r.value = n), (r.done = !1), r;
                    }
                    return (r.done = !0), r;
                  }
                );
              }),
              (e.values = E),
              (M.prototype = {
                constructor: M,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = void 0),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = void 0),
                    this.tryEntries.forEach(O),
                    !e)
                  )
                    for (var t in this)
                      "t" === t.charAt(0) &&
                        r.call(this, t) &&
                        !isNaN(+t.slice(1)) &&
                        (this[t] = void 0);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;
                  function n(r, n) {
                    return (
                      (a.type = "throw"),
                      (a.arg = e),
                      (t.next = r),
                      n && ((t.method = "next"), (t.arg = void 0)),
                      !!n
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var o = this.tryEntries[i],
                      a = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                      var s = r.call(o, "catchLoc"),
                        u = r.call(o, "finallyLoc");
                      if (s && u) {
                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                      } else if (s) {
                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      } else {
                        if (!u)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (
                      i.tryLoc <= this.prev &&
                      r.call(i, "finallyLoc") &&
                      this.prev < i.finallyLoc
                    ) {
                      var o = i;
                      break;
                    }
                  }
                  o &&
                    ("break" === e || "continue" === e) &&
                    o.tryLoc <= t &&
                    t <= o.finallyLoc &&
                    (o = null);
                  var a = o ? o.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    o
                      ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    l
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e)
                      return this.complete(r.completion, r.afterLoc), O(r), l;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                      var n = r.completion;
                      if ("throw" === n.type) {
                        var i = n.arg;
                        O(r);
                      }
                      return i;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, t, r) {
                  return (
                    (this.delegate = {
                      iterator: E(e),
                      resultName: t,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = void 0),
                    l
                  );
                },
              }),
              e
            );
          }
          var V = {
              GOOGLE: "google",
              FACEBOOK: "facebook",
              TWITCH: "twitch",
              REDDIT: "reddit",
              DISCORD: "discord",
            },
            G = {
              GOOGLE: "google",
              FACEBOOK: "facebook",
              TWITCH: "twitch",
              REDDIT: "reddit",
              DISCORD: "discord",
              EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless",
            },
            Y =
              ((n = {}),
              Object(_.a)(n, G.GOOGLE, "tkey-google"),
              Object(_.a)(n, G.FACEBOOK, "tkey-facebook"),
              Object(_.a)(n, G.TWITCH, "tkey-twitch"),
              Object(_.a)(n, G.REDDIT, "tkey-reddit"),
              Object(_.a)(n, G.DISCORD, "tkey-discord"),
              Object(_.a)(
                n,
                G.EMAIL_PASSWORDLESS,
                "tkey-auth0-email-passwordless"
              ),
              n),
            z = {
              MOONPAY: "moonpay",
              WYRE: "wyre",
              RAMPNETWORK: "rampnetwork",
              XANPOOL: "xanpool",
              MERCURYO: "mercuryo",
              TRANSAK: "transak",
            },
            X = {
              MAINNET: "mainnet",
              MATIC: "matic",
              BSC_MAINNET: "bsc_mainnet",
              AVALANCHE_MAINNET: "avalanche_mainnet",
              XDAI: "xdai",
            },
            J = {
              PRODUCTION: "production",
              DEVELOPMENT: "development",
              BINANCE: "binance",
              TESTING: "testing",
              LRC: "lrc",
              BETA: "beta",
            },
            Z = {
              BOTTOM_LEFT: "bottom-left",
              TOP_LEFT: "top-left",
              BOTTOM_RIGHT: "bottom-right",
              TOP_RIGHT: "top-right",
            },
            $ =
              ((i = {}),
              Object(_.a)(i, z.MOONPAY, [
                "AUD",
                "BGN",
                "BRL",
                "CAD",
                "CHF",
                "CNY",
                "COP",
                "CZK",
                "DKK",
                "DOP",
                "EGP",
                "EUR",
                "GBP",
                "HKD",
                "HRK",
                "IDR",
                "ILS",
                "JPY",
                "JOD",
                "KES",
                "KRW",
                "KWD",
                "LKR",
                "MAD",
                "MXN",
                "MYR",
                "NGN",
                "NOK",
                "NZD",
                "OMR",
                "PEN",
                "PKR",
                "PLN",
                "RON",
                "RUB",
                "SEK",
                "SGD",
                "THB",
                "TRY",
                "TWD",
                "USD",
                "VND",
                "ZAR",
              ]),
              Object(_.a)(i, z.WYRE, [
                "USD",
                "EUR",
                "GBP",
                "AUD",
                "CAD",
                "NZD",
                "ARS",
                "BRL",
                "CHF",
                "CLP",
                "COP",
                "CZK",
                "DKK",
                "HKD",
                "ILS",
                "INR",
                "ISK",
                "JPY",
                "KRW",
                "MXN",
                "MYR",
                "NOK",
                "PHP",
                "PLN",
                "SEK",
                "THB",
                "VND",
                "ZAR",
              ]),
              Object(_.a)(i, z.RAMPNETWORK, ["USD", "EUR", "GBP"]),
              Object(_.a)(i, z.XANPOOL, [
                "SGD",
                "HKD",
                "THB",
                "PHP",
                "INR",
                "IDR",
                "MYR",
                "AUD",
                "NZD",
                "KRW",
              ]),
              Object(_.a)(i, z.MERCURYO, [
                "EUR",
                "USD",
                "GBP",
                "TRY",
                "JPY",
                "BRL",
                "NGN",
                "VND",
                "MXN",
                "KRW",
              ]),
              Object(_.a)(i, z.TRANSAK, [
                "ARS",
                "AUD",
                "BBD",
                "BGN",
                "BMD",
                "BRL",
                "CAD",
                "CHF",
                "CLP",
                "CRC",
                "CZK",
                "DKK",
                "DOP",
                "EUR",
                "FJD",
                "FKP",
                "GBP",
                "GIP",
                "HRK",
                "HUF",
                "IDR",
                "ILS",
                "ISK",
                "JMD",
                "JPY",
                "KES",
                "KRW",
                "MDL",
                "MXN",
                "MYR",
                "NOK",
                "NZD",
                "PEN",
                "PHP",
                "PLN",
                "PYG",
                "RON",
                "SEK",
                "SGD",
                "THB",
                "TRY",
                "TZS",
                "USD",
                "ZAR",
              ]),
              i),
            Q = new Set([
              "ETH",
              "USDT",
              "USDC",
              "TUSD",
              "EOSDT",
              "USD",
              "DAI",
              "GUSD",
              "DKKT",
              "PAX",
              "ILS",
              "RUB",
              "BYN",
              "EUR",
              "GBP",
              "JPY",
              "KRW",
              "PLN",
              "MXN",
              "AUD",
              "BRL",
              "CAD",
              "CHF",
              "KPW",
              "LAK",
              "LBP",
              "LKR",
              "XOF",
              "CNHT",
              "DOGE",
              "UAH",
              "TRY",
              "HKD",
              "XJP",
              "SGD",
              "USC",
              "NZD",
              "NGN",
              "RUR",
              "COP",
              "GHS",
              "EGP",
              "IDR",
              "BHD",
              "CRC",
              "PEN",
              "AED",
              "DOP",
              "PKR",
              "HUF",
              "VND",
              "XAR",
              "LTC",
              "RON",
              "OMR",
              "MYR",
              "DKK",
              "UGX",
              "ZMW",
              "SAR",
              "SEK",
              "GEL",
              "RWF",
              "IRR",
              "TZS",
              "CNY",
              "VEF",
              "BDT",
              "HRK",
              "CLP",
              "THB",
              "XAF",
              "ARS",
              "UYU",
              "SZL",
              "KZT",
              "NOK",
              "KES",
              "PAB",
              "INR",
              "CZK",
              "MAD",
              "TWD",
              "PHP",
              "ZAR",
              "BOB",
              "CDF",
              "DASH",
              "VES",
              "ISK",
              "MWK",
              "BAM",
              "TTD",
              "XRP",
              "JOD",
              "RSD",
              "HNL",
              "BGN",
              "GTQ",
              "BWP",
              "XMR",
              "MMK",
              "QAR",
              "AOA",
              "KWD",
              "MUR",
              "WUSD",
              "WEUR",
              "WAVES",
              "WTRY",
              "LRD",
              "LSL",
              "LYD",
              "AWG",
              "MDL",
              "BTO",
              "EURS",
              "CHFT",
              "MKD",
              "MNT",
              "MOP",
              "MRO",
              "MVR",
              "VOLLAR",
              "CKUSD",
              "KHR",
              "VUV",
              "BITCNY",
              "QC",
              "BBD",
              "NAD",
              "NPR",
              "PGK",
              "PYG",
              "BIF",
              "BMD",
              "BND",
              "XLM",
              "BNB",
              "SCR",
              "BAT",
              "CRO",
              "HT",
              "KCS",
              "LEO",
              "LINK",
              "MKR",
              "NPXS",
              "OMG",
              "REP",
              "ZB",
              "ZIL",
              "ZRX",
              "BCH",
              "BZD",
              "CUP",
              "CVE",
              "DJF",
              "DZD",
              "ERN",
              "ETB",
              "FJD",
              "FKP",
              "BUSD",
              "ANCT",
              "ALL",
              "AMD",
              "ANG",
              "CNYX",
              "IQD",
              "UZS",
              "TND",
              "GGP",
              "XAU",
              "KGS",
              "GIP",
              "JMD",
              "ZEC",
              "USDP",
              "BSV",
              "EMC2",
              "SNT",
              "GTO",
              "POWR",
              "EUSD",
              "EURT",
              "BCY",
              "BTS",
              "ATM",
              "BLOCKPAY",
              "ARDR",
              "AMP",
              "B2X",
              "BITGOLD",
              "BITEUR",
              "ATB",
              "BITUSD",
              "AGRS",
              "DFXT",
              "HIKEN",
              "BIX",
              "KNC",
              "EOS",
              "COB",
              "COSS",
              "BMH",
              "NANO",
              "BDG",
              "BNT",
              "XVG",
              "LKK1Y",
              "LKK",
              "USDK",
              "EURN",
              "NZDT",
              "JSE",
              "GMD",
              "GNF",
              "GYD",
              "YER",
              "XPF",
              "HTG",
              "SLL",
              "SOS",
              "WST",
              "SVC",
              "SYP",
              "NEO",
              "KMF",
              "JUMP",
              "AYA",
              "BLAST",
              "WGR",
              "BCN",
              "BTG",
              "URALS",
              "INN",
              "USDQ",
              "CNH",
              "HUSD",
              "BKRW",
              "NZDX",
              "EURX",
              "CADX",
              "USDEX",
              "JPYX",
              "AUDX",
              "VNDC",
              "EON",
              "GBPX",
              "CHFX",
              "USDJ",
              "IDRT",
              "USDS",
              "USDN",
              "BIDR",
              "IDK",
              "BSD",
              "BTN",
              "KYD",
              "NIO",
              "SBD",
              "SDG",
              "SHP",
              "TOP",
              "XCD",
              "XCHF",
              "CNYT",
              "GYEN",
              "ZUSD",
              "GOLD",
              "TRX",
              "TRYB",
              "PLATC",
              "STRAX",
              "UST",
              "GLM",
              "VAI",
              "BRZ",
              "DDRST",
              "XAUT",
              "MIM",
            ]);
          function ee(e) {
            return $[e].filter(function (e) {
              return Q.has(e);
            });
          }
          var te =
              ((l = {}),
              Object(_.a)(l, z.MOONPAY, {
                line1: "Credit/ Debit Card/ Apple Pay",
                line2: "4.5% or 5 USD",
                line3: "2,000\u20ac/day, 10,000\u20ac/mo",
                supportPage: "https://help.moonpay.io/en/",
                minOrderValue: 24.99,
                maxOrderValue: 5e4,
                validCurrencies: ee(z.MOONPAY),
                validCryptoCurrenciesByChain:
                  ((o = {}),
                  Object(_.a)(o, X.MAINNET, [
                    { value: "aave", display: "AAVE" },
                    { value: "bat", display: "BAT" },
                    { value: "dai", display: "DAI" },
                    { value: "eth", display: "ETH" },
                    { value: "mkr", display: "MKR" },
                    { value: "matic", display: "MATIC" },
                    { value: "usdt", display: "USDT" },
                    { value: "usdc", display: "USDC" },
                  ]),
                  Object(_.a)(o, X.MATIC, [
                    { value: "eth_polygon", display: "ETH" },
                    { value: "matic_polygon", display: "MATIC" },
                    { value: "usdc_polygon", display: "USDC" },
                  ]),
                  Object(_.a)(o, X.BSC_MAINNET, [
                    { value: "bnb_bsc", display: "BNB" },
                    { value: "busd_bsc", display: "BUSD" },
                  ]),
                  Object(_.a)(o, X.AVALANCHE_MAINNET, [
                    { value: "avax_cchain", display: "AVAX" },
                  ]),
                  o),
                includeFees: !0,
                api: !0,
                enforceMax: !1,
              }),
              Object(_.a)(l, z.WYRE, {
                line1: "Apple Pay/ Debit/ Credit Card",
                line2: "4.9% + 30\xa2 or 5 USD",
                line3: "$250/day",
                supportPage: "https://support.sendwyre.com/en/",
                minOrderValue: 5,
                maxOrderValue: 500,
                validCurrencies: ee(z.WYRE),
                validCryptoCurrenciesByChain:
                  ((a = {}),
                  Object(_.a)(a, X.MAINNET, [
                    { value: "AAVE", display: "AAVE" },
                    { value: "BAT", display: "BAT" },
                    { value: "BUSD", display: "BUSD" },
                    { value: "DAI", display: "DAI" },
                    { value: "ETH", display: "ETH" },
                    { value: "MKR", display: "MKR" },
                    { value: "UNI", display: "UNI" },
                    { value: "USDC", display: "USDC" },
                    { value: "USDT", display: "USDT" },
                  ]),
                  Object(_.a)(a, X.MATIC, [
                    { value: "MUSDC", display: "USDC" },
                  ]),
                  Object(_.a)(a, X.AVALANCHE_MAINNET, [
                    { value: "AVAXC", display: "AVAXC" },
                  ]),
                  a),
                includeFees: !1,
                api: !0,
                enforceMax: !1,
              }),
              Object(_.a)(l, z.RAMPNETWORK, {
                line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
                line2: "0.49% - 2.9%",
                line3: "5,000\u20ac/purchase, 20,000\u20ac/mo",
                supportPage: "https://instant.ramp.network/",
                minOrderValue: 50,
                maxOrderValue: 2e4,
                validCurrencies: ee(z.RAMPNETWORK),
                validCryptoCurrenciesByChain:
                  ((s = {}),
                  Object(_.a)(s, X.MAINNET, [
                    { value: "ETH", display: "ETH" },
                    { value: "DAI", display: "DAI" },
                    { value: "USDC", display: "USDC" },
                    { value: "USDT", display: "USDT" },
                  ]),
                  Object(_.a)(s, X.MATIC, [
                    { value: "MATIC_DAI", display: "DAI" },
                    { value: "MATIC_MATIC", display: "MATIC" },
                    { value: "MATIC_USDC", display: "USDC" },
                  ]),
                  Object(_.a)(s, X.AVALANCHE_MAINNET, [
                    { value: "AVAX", display: "AVAX" },
                  ]),
                  s),
                includeFees: !0,
                api: !0,
                receiveHint: "walletTopUp.receiveHintRamp",
                enforceMax: !1,
              }),
              Object(_.a)(l, z.XANPOOL, {
                line1:
                  "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ <br>ViettelPay/ DuitNow",
                line2: "2.5% buying, 3% selling",
                line3: "$2,500 / day",
                supportPage: "mailto:support@xanpool.com",
                minOrderValue: 100,
                maxOrderValue: 2500,
                validCurrencies: ee(z.XANPOOL),
                validCryptoCurrenciesByChain: Object(_.a)({}, X.MAINNET, [
                  { value: "ETH", display: "ETH" },
                  { value: "USDT", display: "USDT" },
                ]),
                includeFees: !0,
                api: !0,
                sell: !0,
                enforceMax: !1,
              }),
              Object(_.a)(l, z.MERCURYO, {
                line1: "Credit/ Debit Card/ Apple Pay",
                line2: "3.95% or 4 USD",
                line3: "10,000\u20ac/day, 25,000\u20ac/mo",
                supportPage: "mailto:support@mercuryo.io",
                minOrderValue: 30,
                maxOrderValue: 5e3,
                validCurrencies: ee(z.MERCURYO),
                validCryptoCurrenciesByChain:
                  ((u = {}),
                  Object(_.a)(u, X.MAINNET, [
                    { value: "ETH", display: "ETH" },
                    { value: "BAT", display: "BAT" },
                    { value: "USDT", display: "USDT" },
                    { value: "DAI", display: "DAI" },
                  ]),
                  Object(_.a)(u, X.BSC_MAINNET, [
                    { value: "BNB", display: "BNB" },
                    { value: "BUSD", display: "BUSD" },
                    { value: "1INCH", display: "1INCH" },
                  ]),
                  u),
                includeFees: !0,
                api: !0,
                enforceMax: !1,
              }),
              Object(_.a)(l, z.TRANSAK, {
                line1: "Credit/ Debit Card/ <br/>Bank Transfer (sepa/gbp)",
                line2: "0.99% - 5.5% or 5 USD",
                line3: "500\u20ac/day",
                supportPage: "https://support.transak.com/hc/en-US",
                minOrderValue: 30,
                maxOrderValue: 500,
                validCurrencies: ee(z.TRANSAK),
                validCryptoCurrenciesByChain:
                  ((c = {}),
                  Object(_.a)(c, X.MAINNET, [
                    { value: "AAVE", display: "AAVE" },
                    { value: "DAI", display: "DAI" },
                    { value: "ETH", display: "ETH" },
                    { value: "USDC", display: "USDC" },
                    { value: "USDT", display: "USDT" },
                  ]),
                  Object(_.a)(c, X.MATIC, [
                    { value: "AAVE", display: "AAVE" },
                    { value: "DAI", display: "DAI" },
                    { value: "MATIC", display: "MATIC" },
                    { value: "USDC", display: "USDC" },
                    { value: "USDT", display: "USDT" },
                    { value: "WETH", display: "WETH" },
                  ]),
                  Object(_.a)(c, X.BSC_MAINNET, [
                    { value: "BNB", display: "BNB" },
                    { value: "BUSD", display: "BUSD" },
                  ]),
                  Object(_.a)(c, X.AVALANCHE_MAINNET, [
                    { value: "AVAX", display: "AVAX" },
                  ]),
                  c),
                includeFees: !0,
                enforceMax: !0,
              }),
              l),
            re = {
              supportedVerifierList: Object.values(G),
              paymentProviders: te,
              api: "https://api.tor.us",
              translations: {
                en: {
                  embed: {
                    continue: "Continue",
                    actionRequired: "Authorization required",
                    pendingAction:
                      "Click continue to proceed with your request in a popup",
                    cookiesRequired: "Cookies Required",
                    enableCookies:
                      "Please enable cookies in your browser preferences to access Torus",
                    clickHere: "More Info",
                  },
                },
                de: {
                  embed: {
                    continue: "Fortsetzen",
                    actionRequired: "Autorisierung erforderlich",
                    pendingAction:
                      "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
                    cookiesRequired: "Cookies ben\xf6tigt",
                    enableCookies:
                      "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
                    clickHere: "Mehr Info",
                  },
                },
                ja: {
                  embed: {
                    continue: "\u7d99\u7d9a\u3059\u308b",
                    actionRequired:
                      "\u8a8d\u8a3c\u304c\u5fc5\u8981\u3067\u3059",
                    pendingAction:
                      "\u7d9a\u884c\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u7d9a\u884c\u3057\u307e\u3059",
                    cookiesRequired:
                      "\u5fc5\u8981\u306a\u30af\u30c3\u30ad\u30fc",
                    enableCookies:
                      "Torus\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u8a2d\u5b9a\u3067Cookie\u3092\u6709\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    clickHere: "\u8a73\u3057\u304f\u306f",
                  },
                },
                ko: {
                  embed: {
                    continue: "\uacc4\uc18d\ud558\ub2e4",
                    actionRequired: "\uc2b9\uc778 \ud544\uc694",
                    pendingAction:
                      "\ud31d\uc5c5\uc5d0\uc11c \uc694\uccad\uc744 \uc9c4\ud589\ud558\ub824\uba74 \uacc4\uc18d\uc744 \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624.",
                    cookiesRequired: "\ucfe0\ud0a4 \ud544\uc694",
                    enableCookies:
                      "\ube0c\ub77c\uc6b0\uc800 \ud658\uacbd \uc124\uc815\uc5d0\uc11c \ucfe0\ud0a4\ub97c \ud65c\uc131\ud654\ud558\uc5ec Torus\uc5d0 \uc561\uc138\uc2a4\ud558\uc2ed\uc2dc\uc624.",
                    clickHere: "\ub354 \ub9ce\uc740 \uc815\ubcf4",
                  },
                },
                zh: {
                  embed: {
                    continue: "\u7ee7\u7eed",
                    actionRequired: "\u9700\u8981\u6388\u6743",
                    pendingAction:
                      "\u5355\u51fb\u7ee7\u7eed\u4ee5\u5728\u5f39\u51fa\u7a97\u53e3\u4e2d\u7ee7\u7eed\u60a8\u7684\u8bf7\u6c42",
                    cookiesRequired: "\u5fc5\u586bCookie",
                    enableCookies:
                      "\u8bf7\u5728\u60a8\u7684\u6d4f\u89c8\u5668\u9996\u9009\u9879\u4e2d\u542f\u7528cookie\u4ee5\u8bbf\u95eeTorus\u3002",
                    clickHere: "\u66f4\u591a\u4fe1\u606f",
                  },
                },
              },
              prodTorusUrl: "",
              localStorageKeyPrefix: "torus-",
            },
            ne = function (e) {
              return new Promise(function (t, r) {
                null != window.document.body
                  ? Promise.resolve(e()).then(t).catch(r)
                  : window.document.addEventListener(
                      "DOMContentLoaded",
                      function () {
                        Promise.resolve(e()).then(t).catch(r);
                      }
                    );
              });
            },
            ie = function (e) {
              var t = window.document.createElement("template"),
                r = e.trim();
              return (t.innerHTML = r), t.content.firstChild;
            },
            oe = function (e, t, r) {
              for (
                var n = arguments.length,
                  i = new Array(n > 3 ? n - 3 : 0),
                  o = 3;
                o < n;
                o++
              )
                i[o - 3] = arguments[o];
              var a = function n() {
                r.apply(void 0, i), e.removeEventListener(t, n);
              };
              e.addEventListener(t, a);
            },
            ae = function (e, t, r) {
              e.on(t, function n(i) {
                r(i), e.removeListener(t, n);
              });
            };
          function se() {
            return ue.apply(this, arguments);
          }
          function ue() {
            return (ue = Object(w.a)(
              W().mark(function e() {
                return W().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          new Promise(function (e) {
                            "loading" !== document.readyState
                              ? e()
                              : oe(document, "DOMContentLoaded", e);
                          })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          var ce = F.a.getLogger("torus-embed"),
            le = {
              errors: {
                disconnected: function () {
                  return "Torus: Lost connection to Torus.";
                },
                permanentlyDisconnected: function () {
                  return "Torus: Disconnected from iframe. Page reload required.";
                },
                sendSiteMetadata: function () {
                  return "Torus: Failed to send site metadata. This is an internal error, please report this bug.";
                },
                unsupportedSync: function (e) {
                  return "Torus: The Torus Ethereum provider does not support synchronous methods like ".concat(
                    e,
                    " without a callback parameter."
                  );
                },
                invalidDuplexStream: function () {
                  return "Must provide a Node.js-style duplex stream.";
                },
                invalidOptions: function (e, t) {
                  return "Invalid options. Received: { maxEventListeners: "
                    .concat(e, ", shouldSendMetadata: ")
                    .concat(t, " }");
                },
                invalidRequestArgs: function () {
                  return "Expected a single, non-array, object argument.";
                },
                invalidRequestMethod: function () {
                  return "'args.method' must be a non-empty string.";
                },
                invalidRequestParams: function () {
                  return "'args.params' must be an object or array if provided.";
                },
                invalidLoggerObject: function () {
                  return "'args.logger' must be an object if provided.";
                },
                invalidLoggerMethod: function (e) {
                  return "'args.logger' must include required method '".concat(
                    e,
                    "'."
                  );
                },
              },
              info: {
                connected: function (e) {
                  return 'Torus: Connected to chain with ID "'.concat(e, '".');
                },
              },
              warnings: {
                enableDeprecation:
                  'Torus: ""ethereum.enable()" is deprecated and may be removed in the future. Please use "ethereum.send("eth_requestAccounts")" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102',
                sendDeprecation:
                  'Torus: "ethereum.send(...)" is deprecated and may be removed in the future. Please use "ethereum.sendAsync(...)" or "ethereum.request(...)" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
                events: {
                  close:
                    'Torus: The event "close" is deprecated and may be removed in the future. Please use "disconnect" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
                  data: 'Torus: The event "data" is deprecated and will be removed in the future.Use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message',
                  networkChanged:
                    'Torus: The event "networkChanged" is deprecated and may be removed in the future. Please use "chainChanged" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
                  notification:
                    'Torus: The event "notification" is deprecated and may be removed in the future. Please use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
                },
                publicConfigStore:
                  'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.',
              },
            },
            he = re.paymentProviders;
          function de() {
            return function (e, t, r) {
              ("string" === typeof e.method && e.method) ||
                (t.error = T.ethErrors.rpc.invalidRequest({
                  message: "The request 'method' must be a non-empty string.",
                  data: e,
                })),
                r(function (e) {
                  var r = t.error;
                  return r
                    ? (ce.error("MetaMask - RPC Error: ".concat(r.message), r),
                      e())
                    : e();
                });
            };
          }
          function fe(e, t, r) {
            var n = 'MetaMask: Lost connection to "'.concat(e, '".');
            null !== t &&
              void 0 !== t &&
              t.stack &&
              (n += "\n".concat(t.stack)),
              ce.warn(n),
              r && r.listenerCount("error") > 0 && r.emit("error", n);
          }
          var pe = function () {
              return Math.random().toString(36).slice(2);
            },
            ve = (function () {
              var e = Object(w.a)(
                W().mark(function e(t, r) {
                  var n, i, o, a;
                  return W().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ("1.27.2",
                              (o = r.version || "1.27.2"),
                              (e.prev = 2),
                              ("binance" !== t && "production" !== t) ||
                                r.version)
                            ) {
                              e.next = 13;
                              break;
                            }
                            if (re.prodTorusUrl) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (e.next = 7),
                              Object(j.b)(
                                ""
                                  .concat(
                                    re.api,
                                    "/latestversion?name=@toruslabs/torus-embed&version="
                                  )
                                  .concat("1.27.2"),
                                {},
                                { useAPIKey: !0 }
                              )
                            );
                          case 7:
                            (a = e.sent), (e.next = 11);
                            break;
                          case 10:
                            a = { data: re.prodTorusUrl };
                          case 11:
                            (o = a.data), (re.prodTorusUrl = a.data);
                          case 13:
                            e.next = 18;
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(2)),
                              ce.error(e.t0, "unable to fetch latest version");
                          case 18:
                            ce.info("version used: ", o),
                              (e.t1 = t),
                              (e.next =
                                "binance" === e.t1
                                  ? 22
                                  : "testing" === e.t1
                                  ? 25
                                  : "lrc" === e.t1
                                  ? 28
                                  : "beta" === e.t1
                                  ? 31
                                  : "development" === e.t1
                                  ? 34
                                  : 37);
                            break;
                          case 22:
                            return (
                              (n = "https://binance.tor.us/v".concat(o)),
                              (i = "info"),
                              e.abrupt("break", 40)
                            );
                          case 25:
                            return (
                              (n = "https://testing.tor.us"),
                              (i = "debug"),
                              e.abrupt("break", 40)
                            );
                          case 28:
                            return (
                              (n = "https://lrc.tor.us"),
                              (i = "debug"),
                              e.abrupt("break", 40)
                            );
                          case 31:
                            return (
                              (n = "https://beta.tor.us"),
                              (i = "debug"),
                              e.abrupt("break", 40)
                            );
                          case 34:
                            return (
                              (n = "http://localhost:4050"),
                              (i = "debug"),
                              e.abrupt("break", 40)
                            );
                          case 37:
                            return (
                              (n = "https://app.tor.us/v".concat(o)),
                              (i = "error"),
                              e.abrupt("break", 40)
                            );
                          case 40:
                            return e.abrupt("return", {
                              torusUrl: n,
                              logLevel: i,
                            });
                          case 41:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 15]]
                  );
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })(),
            me = function () {
              var e = window.navigator.language || "en-US",
                t = e.split("-");
              return (e = Object.prototype.hasOwnProperty.call(
                re.translations,
                t[0]
              )
                ? t[0]
                : "en");
            },
            ye = ["eth_subscription"],
            ge = function () {},
            be =
              "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375",
            we =
              "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
          function _e(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function Oe(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? _e(Object(r), !0).forEach(function (t) {
                    S()(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : _e(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          x.d.defaultMaxListeners = 100;
          var Me = function (e, t) {
              var r =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              return function (n, i) {
                return n || i.error
                  ? t(n || i.error)
                  : !r || Array.isArray(i)
                  ? e(i)
                  : e(i.result);
              };
            },
            Ee = (function (e) {
              Object(g.a)(r, e);
              var t = Object(b.a)(r);
              function r(e) {
                var n;
                Object(f.a)(this, r);
                var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = i.maxEventListeners,
                  a = void 0 === o ? 100 : o,
                  s = i.shouldSendMetadata,
                  u = void 0 === s || s,
                  c = i.jsonRpcStreamName,
                  l = void 0 === c ? "provider" : c;
                if (
                  ((n = t.call(this)),
                  S()(Object(v.a)(n), "chainId", void 0),
                  S()(Object(v.a)(n), "selectedAddress", void 0),
                  S()(Object(v.a)(n), "_rpcEngine", void 0),
                  S()(Object(v.a)(n), "networkVersion", void 0),
                  S()(Object(v.a)(n), "shouldSendMetadata", void 0),
                  S()(Object(v.a)(n), "isTorus", void 0),
                  S()(Object(v.a)(n), "_publicConfigStore", void 0),
                  S()(Object(v.a)(n), "tryPreopenHandle", void 0),
                  S()(Object(v.a)(n), "enable", void 0),
                  S()(Object(v.a)(n), "_state", void 0),
                  S()(Object(v.a)(n), "_jsonRpcConnection", void 0),
                  S()(Object(v.a)(n), "_sentWarnings", {
                    enable: !1,
                    experimentalMethods: !1,
                    send: !1,
                    publicConfigStore: !1,
                    events: {
                      close: !1,
                      data: !1,
                      networkChanged: !1,
                      notification: !1,
                    },
                  }),
                  !Object(I.duplex)(e))
                )
                  throw new Error(le.errors.invalidDuplexStream());
                (n.isTorus = !0),
                  n.setMaxListeners(a),
                  (n._state = Oe({}, r._defaultState)),
                  (n.selectedAddress = null),
                  (n.networkVersion = null),
                  (n.chainId = null),
                  (n.shouldSendMetadata = u),
                  (n._handleAccountsChanged = n._handleAccountsChanged.bind(
                    Object(v.a)(n)
                  )),
                  (n._handleChainChanged = n._handleChainChanged.bind(
                    Object(v.a)(n)
                  )),
                  (n._handleUnlockStateChanged =
                    n._handleUnlockStateChanged.bind(Object(v.a)(n))),
                  (n._handleConnect = n._handleConnect.bind(Object(v.a)(n))),
                  (n._handleDisconnect = n._handleDisconnect.bind(
                    Object(v.a)(n)
                  )),
                  (n._handleStreamDisconnect = n._handleStreamDisconnect.bind(
                    Object(v.a)(n)
                  )),
                  (n._sendSync = n._sendSync.bind(Object(v.a)(n))),
                  (n._rpcRequest = n._rpcRequest.bind(Object(v.a)(n))),
                  (n._warnOfDeprecation = n._warnOfDeprecation.bind(
                    Object(v.a)(n)
                  )),
                  (n._initializeState = n._initializeState.bind(
                    Object(v.a)(n)
                  )),
                  (n.request = n.request.bind(Object(v.a)(n))),
                  (n.send = n.send.bind(Object(v.a)(n))),
                  (n.sendAsync = n.sendAsync.bind(Object(v.a)(n)));
                var h = new x.c();
                U()(
                  e,
                  h,
                  e,
                  n._handleStreamDisconnect.bind(Object(v.a)(n), "MetaMask")
                ),
                  (n._publicConfigStore = new C.ObservableStore({
                    storageKey: "Metamask-Config",
                  })),
                  U()(
                    h.createStream("publicConfig"),
                    Object(C.storeAsStream)(n._publicConfigStore),
                    fe.bind(Object(v.a)(n), "MetaMask PublicConfigStore")
                  ),
                  h.ignoreStream("phishing"),
                  n.on("connect", function () {
                    n._state.isConnected = !0;
                  });
                var d = Object(x.f)();
                U()(
                  d.stream,
                  h.createStream(l),
                  d.stream,
                  n._handleStreamDisconnect.bind(
                    Object(v.a)(n),
                    "MetaMask RpcProvider"
                  )
                );
                var p = new x.b();
                return (
                  p.push(Object(x.e)()),
                  p.push(de()),
                  p.push(d.middleware),
                  (n._rpcEngine = p),
                  d.events.on("notification", function (e) {
                    var t = e.method,
                      r = e.params;
                    "wallet_accountsChanged" === t
                      ? n._handleAccountsChanged(r)
                      : "wallet_unlockStateChanged" === t
                      ? n._handleUnlockStateChanged(r)
                      : "wallet_chainChanged" === t
                      ? n._handleChainChanged(r)
                      : ye.includes(e.method) &&
                        (n.emit("data", e),
                        n.emit("notification", r.result),
                        n.emit("message", { type: t, data: r }));
                  }),
                  n
                );
              }
              return (
                Object(p.a)(r, [
                  {
                    key: "publicConfigStore",
                    get: function () {
                      return (
                        this._sentWarnings.publicConfigStore ||
                          (ce.warn(le.warnings.publicConfigStore),
                          (this._sentWarnings.publicConfigStore = !0)),
                        this._publicConfigStore
                      );
                    },
                  },
                  {
                    key: "isConnected",
                    value: function () {
                      return this._state.isConnected;
                    },
                  },
                  {
                    key: "request",
                    value: (function () {
                      var e = Object(w.a)(
                        W().mark(function e(t) {
                          var r,
                            n,
                            i = this;
                          return W().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    t &&
                                    "object" === typeof t &&
                                    !Array.isArray(t)
                                  ) {
                                    e.next = 2;
                                    break;
                                  }
                                  throw T.ethErrors.rpc.invalidRequest({
                                    message: le.errors.invalidRequestArgs(),
                                    data: t,
                                  });
                                case 2:
                                  if (
                                    ((r = t.method),
                                    (n = t.params),
                                    "string" === typeof r && 0 !== r.length)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw T.ethErrors.rpc.invalidRequest({
                                    message: le.errors.invalidRequestMethod(),
                                    data: t,
                                  });
                                case 5:
                                  if (
                                    void 0 === n ||
                                    Array.isArray(n) ||
                                    ("object" === typeof n && null !== n)
                                  ) {
                                    e.next = 7;
                                    break;
                                  }
                                  throw T.ethErrors.rpc.invalidRequest({
                                    message: le.errors.invalidRequestParams(),
                                    data: t,
                                  });
                                case 7:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, t) {
                                      i._rpcRequest(
                                        { method: r, params: n },
                                        Me(e, t)
                                      );
                                    })
                                  );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "sendAsync",
                    value: function (e, t) {
                      this._rpcRequest(e, t);
                    },
                  },
                  {
                    key: "addListener",
                    value: function (e, t) {
                      return (
                        this._warnOfDeprecation(e),
                        Object(m.a)(
                          Object(y.a)(r.prototype),
                          "addListener",
                          this
                        ).call(this, e, t)
                      );
                    },
                  },
                  {
                    key: "on",
                    value: function (e, t) {
                      return (
                        this._warnOfDeprecation(e),
                        Object(m.a)(Object(y.a)(r.prototype), "on", this).call(
                          this,
                          e,
                          t
                        )
                      );
                    },
                  },
                  {
                    key: "once",
                    value: function (e, t) {
                      return (
                        this._warnOfDeprecation(e),
                        Object(m.a)(
                          Object(y.a)(r.prototype),
                          "once",
                          this
                        ).call(this, e, t)
                      );
                    },
                  },
                  {
                    key: "prependListener",
                    value: function (e, t) {
                      return (
                        this._warnOfDeprecation(e),
                        Object(m.a)(
                          Object(y.a)(r.prototype),
                          "prependListener",
                          this
                        ).call(this, e, t)
                      );
                    },
                  },
                  {
                    key: "prependOnceListener",
                    value: function (e, t) {
                      return (
                        this._warnOfDeprecation(e),
                        Object(m.a)(
                          Object(y.a)(r.prototype),
                          "prependOnceListener",
                          this
                        ).call(this, e, t)
                      );
                    },
                  },
                  {
                    key: "_initializeState",
                    value: (function () {
                      var e = Object(w.a)(
                        W().mark(function e() {
                          var t, r, n, i, o;
                          return W().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      this.request({
                                        method: "wallet_getProviderState",
                                      })
                                    );
                                  case 3:
                                    (t = e.sent),
                                      (r = t.accounts),
                                      (n = t.chainId),
                                      (i = t.isUnlocked),
                                      (o = t.networkVersion),
                                      this.emit("connect", { chainId: n }),
                                      this._handleChainChanged({
                                        chainId: n,
                                        networkVersion: o,
                                      }),
                                      this._handleUnlockStateChanged({
                                        accounts: r,
                                        isUnlocked: i,
                                      }),
                                      this._handleAccountsChanged(r),
                                      (e.next = 17);
                                    break;
                                  case 14:
                                    (e.prev = 14),
                                      (e.t0 = e.catch(0)),
                                      ce.error(
                                        "MetaMask: Failed to get initial state. Please report this bug.",
                                        e.t0
                                      );
                                  case 17:
                                    return (
                                      (e.prev = 17),
                                      ce.info("initialized state"),
                                      (this._state.initialized = !0),
                                      this.emit("_initialized"),
                                      e.finish(17)
                                    );
                                  case 22:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[0, 14, 17, 22]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "_rpcRequest",
                    value: function (e, t) {
                      var r = this,
                        n =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        i = t,
                        o = e;
                      if (!Array.isArray(o))
                        if (
                          (o.jsonrpc || (o.jsonrpc = "2.0"),
                          "eth_accounts" === o.method ||
                            "eth_requestAccounts" === o.method)
                        )
                          i = function (e, i) {
                            r._handleAccountsChanged(
                              i.result || [],
                              "eth_accounts" === o.method,
                              n
                            ),
                              t(e, i);
                          };
                        else if ("wallet_getProviderState" === o.method)
                          return void this._rpcEngine.handle(e, i);
                      this.tryPreopenHandle(o, i);
                    },
                  },
                  {
                    key: "send",
                    value: function (e, t) {
                      var r = this;
                      return (
                        this._sentWarnings.send ||
                          (ce.warn(le.warnings.sendDeprecation),
                          (this._sentWarnings.send = !0)),
                        "string" !== typeof e || (t && !Array.isArray(t))
                          ? e &&
                            "object" === typeof e &&
                            "function" === typeof t
                            ? this._rpcRequest(e, t)
                            : this._sendSync(e)
                          : new Promise(function (n, i) {
                              try {
                                r._rpcRequest(
                                  { method: e, params: t },
                                  Me(n, i, !1)
                                );
                              } catch (o) {
                                i(o);
                              }
                            })
                      );
                    },
                  },
                  {
                    key: "_sendSync",
                    value: function (e) {
                      var t;
                      switch (e.method) {
                        case "eth_accounts":
                          t = this.selectedAddress
                            ? [this.selectedAddress]
                            : [];
                          break;
                        case "eth_coinbase":
                          t = this.selectedAddress || null;
                          break;
                        case "eth_uninstallFilter":
                          this._rpcRequest(e, ge), (t = !0);
                          break;
                        case "net_version":
                          t = this.networkVersion || null;
                          break;
                        default:
                          throw new Error(le.errors.unsupportedSync(e.method));
                      }
                      return { id: e.id, jsonrpc: e.jsonrpc, result: t };
                    },
                  },
                  {
                    key: "_handleConnect",
                    value: function (e) {
                      this._state.isConnected ||
                        ((this._state.isConnected = !0),
                        this.emit("connect", { chainId: e }),
                        ce.debug(le.info.connected(e)));
                    },
                  },
                  {
                    key: "_handleDisconnect",
                    value: function (e, t) {
                      var r;
                      (this._state.isConnected ||
                        (!this._state.isPermanentlyDisconnected && !e)) &&
                        ((this._state.isConnected = !1),
                        e
                          ? ((r = new T.EthereumRpcError(
                              1013,
                              t || le.errors.disconnected()
                            )),
                            ce.debug(r))
                          : ((r = new T.EthereumRpcError(
                              1011,
                              t || le.errors.permanentlyDisconnected()
                            )),
                            ce.error(r),
                            (this.chainId = null),
                            (this._state.accounts = null),
                            (this.selectedAddress = null),
                            (this._state.isUnlocked = !1),
                            (this._state.isPermanentlyDisconnected = !0)),
                        this.emit("disconnect", r));
                    },
                  },
                  {
                    key: "_handleStreamDisconnect",
                    value: function (e, t) {
                      fe(e, t, this),
                        this._handleDisconnect(!1, t ? t.message : void 0);
                    },
                  },
                  {
                    key: "_handleAccountsChanged",
                    value: function (e) {
                      var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        r =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        n = e;
                      Array.isArray(n) ||
                        (ce.error(
                          "MetaMask: Received non-array accounts parameter. Please report this bug.",
                          n
                        ),
                        (n = []));
                      var i,
                        o = Object(d.a)(e);
                      try {
                        for (o.s(); !(i = o.n()).done; ) {
                          var a = i.value;
                          if ("string" !== typeof a) {
                            ce.error(
                              "MetaMask: Received non-string account. Please report this bug.",
                              e
                            ),
                              (n = []);
                            break;
                          }
                        }
                      } catch (s) {
                        o.e(s);
                      } finally {
                        o.f();
                      }
                      N()(this._state.accounts, n) ||
                        (t &&
                          Array.isArray(this._state.accounts) &&
                          this._state.accounts.length > 0 &&
                          !r &&
                          ce.error(
                            'MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.',
                            n
                          ),
                        (this._state.accounts = n),
                        this.emit("accountsChanged", n)),
                        this.selectedAddress !== n[0] &&
                          (this.selectedAddress = n[0] || null);
                    },
                  },
                  {
                    key: "_handleChainChanged",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t = e.chainId,
                        r = e.networkVersion;
                      t && r
                        ? "loading" === r
                          ? this._handleDisconnect(!0)
                          : (this._handleConnect(t),
                            t !== this.chainId &&
                              ((this.chainId = t),
                              this._state.initialized &&
                                this.emit("chainChanged", this.chainId)))
                        : ce.error(
                            "MetaMask: Received invalid network parameters. Please report this bug.",
                            { chainId: t, networkVersion: r }
                          );
                    },
                  },
                  {
                    key: "_handleUnlockStateChanged",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t = e.accounts,
                        r = e.isUnlocked;
                      "boolean" === typeof r
                        ? r !== this._state.isUnlocked &&
                          ((this._state.isUnlocked = r),
                          this._handleAccountsChanged(t || []))
                        : ce.error(
                            "MetaMask: Received invalid isUnlocked parameter. Please report this bug.",
                            { isUnlocked: r }
                          );
                    },
                  },
                  {
                    key: "_warnOfDeprecation",
                    value: function (e) {
                      !1 === this._sentWarnings.events[e] &&
                        (ce.warn(le.warnings.events[e]),
                        (this._sentWarnings.events[e] = !0));
                    },
                  },
                ]),
                r
              );
            })(x.d);
          S()(Ee, "_defaultState", {
            accounts: null,
            isConnected: !1,
            isUnlocked: !1,
            initialized: !1,
            isPermanentlyDisconnected: !1,
            hasEmittedConnection: !1,
          });
          var Se = function (e, t) {
              var r = {};
              return (
                e.algorithms.forEach(function (e) {
                  r[e] = q()(e).update(t, "utf8").digest("base64");
                }),
                r
              );
            },
            ke = function (e, t) {
              var r = (function (e) {
                  return {
                    algorithms: e.algorithms || ["sha256"],
                    delimiter: e.delimiter || " ",
                    full: e.full || !1,
                  };
                })(e),
                n = { hashes: Se(r, t), integrity: void 0 };
              return (
                (n.integrity = (function (e, t) {
                  var r = "";
                  return (r += Object.keys(t.hashes)
                    .map(function (e) {
                      return "".concat(e, "-").concat(t.hashes[e]);
                    })
                    .join(e.delimiter));
                })(r, n)),
                r.full ? n : n.integrity
              );
            },
            je = (function (e) {
              Object(g.a)(r, e);
              var t = Object(b.a)(r);
              function r(e) {
                var n;
                Object(f.a)(this, r);
                var i = e.url,
                  o = e.target,
                  a = e.features;
                return (
                  (n = t.call(this)),
                  S()(Object(v.a)(n), "url", void 0),
                  S()(Object(v.a)(n), "target", void 0),
                  S()(Object(v.a)(n), "features", void 0),
                  S()(Object(v.a)(n), "window", void 0),
                  S()(Object(v.a)(n), "windowTimer", void 0),
                  S()(Object(v.a)(n), "iClosedWindow", void 0),
                  (n.url = i),
                  (n.target = o || "_blank"),
                  (n.features =
                    a ||
                    (function () {
                      var e =
                          void 0 !== window.screenLeft
                            ? window.screenLeft
                            : window.screenX,
                        t =
                          void 0 !== window.screenTop
                            ? window.screenTop
                            : window.screenY,
                        r = window.innerWidth
                          ? window.innerWidth
                          : document.documentElement.clientWidth
                          ? document.documentElement.clientWidth
                          : window.screen.width,
                        n = window.innerHeight
                          ? window.innerHeight
                          : document.documentElement.clientHeight
                          ? document.documentElement.clientHeight
                          : window.screen.height,
                        i = Math.abs((r - 1200) / 2 / 1 + e),
                        o = Math.abs((n - 700) / 2 / 1 + t);
                      return "titlebar=0,toolbar=0,status=0,location=0,menubar=0,height="
                        .concat(700, ",width=")
                        .concat(1200, ",top=")
                        .concat(o, ",left=")
                        .concat(i);
                    })()),
                  (n.window = void 0),
                  (n.windowTimer = void 0),
                  (n.iClosedWindow = !1),
                  n._setupTimer(),
                  n
                );
              }
              return (
                Object(p.a)(r, [
                  {
                    key: "_setupTimer",
                    value: function () {
                      var e = this;
                      this.windowTimer = Number(
                        setInterval(function () {
                          e.window &&
                            e.window.closed &&
                            (clearInterval(e.windowTimer),
                            e.iClosedWindow || e.emit("close"),
                            (e.iClosedWindow = !1),
                            (e.window = void 0)),
                            void 0 === e.window && clearInterval(e.windowTimer);
                        }, 500)
                      );
                    },
                  },
                  {
                    key: "open",
                    value: function () {
                      var e;
                      return (
                        (this.window = window.open(
                          this.url.href,
                          this.target,
                          this.features
                        )),
                        null !== (e = this.window) &&
                          void 0 !== e &&
                          e.focus &&
                          this.window.focus(),
                        Promise.resolve()
                      );
                    },
                  },
                  {
                    key: "close",
                    value: function () {
                      (this.iClosedWindow = !0),
                        this.window && this.window.close();
                    },
                  },
                  {
                    key: "redirect",
                    value: function (e) {
                      e
                        ? window.location.replace(this.url.href)
                        : (window.location.href = this.url.href);
                    },
                  },
                ]),
                r
              );
            })(H.EventEmitter);
          function xe(e) {
            return new Promise(function (t, r) {
              try {
                var n = document.createElement("img");
                (n.onload = function () {
                  return t(!0);
                }),
                  (n.onerror = function () {
                    return t(!1);
                  }),
                  (n.src = e);
              } catch (i) {
                r(i);
              }
            });
          }
          var Pe = function (e) {
            var t = e.document,
              r = t.querySelector('head > meta[property="og:site_name"]');
            if (r) return r.content;
            var n = t.querySelector('head > meta[name="title"]');
            return n
              ? n.content
              : t.title && t.title.length > 0
              ? t.title
              : e.location.hostname;
          };
          function Ae(e) {
            return Re.apply(this, arguments);
          }
          function Re() {
            return (Re = Object(w.a)(
              W().mark(function e(t) {
                var r, n;
                return W().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = t.document),
                          (n = r.querySelector(
                            'head > link[rel="shortcut icon"]'
                          )),
                          (e.t0 = n),
                          !e.t0)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 6), xe(n.href);
                      case 6:
                        e.t0 = e.sent;
                      case 7:
                        if (!e.t0) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", n.href);
                      case 9:
                        if (
                          ((n = Array.from(
                            r.querySelectorAll('head > link[rel="icon"]')
                          ).find(function (e) {
                            return Boolean(e.href);
                          })),
                          (e.t1 = n),
                          !e.t1)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (e.next = 14), xe(n.href);
                      case 14:
                        e.t1 = e.sent;
                      case 15:
                        if (!e.t1) {
                          e.next = 17;
                          break;
                        }
                        return e.abrupt("return", n.href);
                      case 17:
                        return e.abrupt("return", null);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          var Ce = (function () {
            var e = Object(w.a)(
              W().mark(function e() {
                return W().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.t0 = Pe(window)), (e.next = 3), Ae(window);
                      case 3:
                        return (
                          (e.t1 = e.sent),
                          e.abrupt("return", { name: e.t0, icon: e.t1 })
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          function Te() {
            return (Te = Object(w.a)(
              W().mark(function e(t) {
                var r;
                return W().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), Ce();
                        case 3:
                          (r = e.sent),
                            t.handle(
                              {
                                jsonrpc: "2.0",
                                id: pe(),
                                method: "wallet_sendDomainMetadata",
                                params: r,
                              },
                              ge
                            ),
                            (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            ce.error({
                              message: le.errors.sendSiteMetadata(),
                              originalError: e.t0,
                            });
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            )).apply(this, arguments);
          }
          var Le = ["host", "chainId", "networkName"];
          function Ne(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function Ie(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Ne(Object(r), !0).forEach(function (t) {
                    S()(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : Ne(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          var De =
              ((h = {}),
              Object(_.a)(h, V.GOOGLE, !0),
              Object(_.a)(h, V.FACEBOOK, !0),
              Object(_.a)(h, V.REDDIT, !0),
              Object(_.a)(h, V.TWITCH, !0),
              Object(_.a)(h, V.DISCORD, !0),
              h),
            Ue =
              "sha384-FLPj0jKrb6vIli62Ed4n/sqWhdhHMpFz3NffAV4H8uqTkzPsf4IAtKFgeVGgxb4+",
            Be = [
              "eth_sendTransaction",
              "eth_signTypedData",
              "eth_signTypedData_v3",
              "eth_signTypedData_v4",
              "personal_sign",
              "eth_getEncryptionPublicKey",
              "eth_decrypt",
            ],
            Fe = (function (e) {
              var t;
              try {
                t = window[e];
                var r = "__storage_test__";
                return t.setItem(r, r), t.removeItem(r), !0;
              } catch (n) {
                return (
                  n &&
                  (22 === n.code ||
                    1014 === n.code ||
                    "QuotaExceededError" === n.name ||
                    "NS_ERROR_DOM_QUOTA_REACHED" === n.name) &&
                  t &&
                  0 !== t.length
                );
              }
            })("localStorage");
          !(function () {
            var e = Object(w.a)(
              W().mark(function e() {
                var t, r, n;
                return W().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), "undefined" !== typeof document)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (t = document.createElement("link")),
                            (e.next = 6),
                            ve("production", {
                              check: !1,
                              hash: Ue,
                              version: "",
                            })
                          );
                        case 6:
                          (r = e.sent),
                            (n = r.torusUrl),
                            (t.href = "".concat(n, "/popup")),
                            (t.crossOrigin = "anonymous"),
                            (t.type = "text/html"),
                            (t.rel = "prefetch"),
                            t.relList &&
                              t.relList.supports &&
                              t.relList.supports("prefetch") &&
                              document.head.appendChild(t),
                            (e.next = 18);
                          break;
                        case 15:
                          (e.prev = 15), (e.t0 = e.catch(0)), ce.warn(e.t0);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 15]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()();
          var Ke = (function () {
            function t() {
              Object(f.a)(this, t);
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = e.buttonPosition,
                n = void 0 === r ? Z.BOTTOM_LEFT : r,
                i = e.modalZIndex,
                o = void 0 === i ? 99999 : i,
                a = e.apiKey,
                s = void 0 === a ? "torus-default" : a;
              S()(this, "buttonPosition", Z.BOTTOM_LEFT),
                S()(this, "torusUrl", void 0),
                S()(this, "torusIframe", void 0),
                S()(this, "styleLink", void 0),
                S()(this, "isLoggedIn", void 0),
                S()(this, "isInitialized", void 0),
                S()(this, "torusWidgetVisibility", void 0),
                S()(this, "torusAlert", void 0),
                S()(this, "nodeDetailManager", void 0),
                S()(this, "torusJs", void 0),
                S()(this, "apiKey", void 0),
                S()(this, "modalZIndex", void 0),
                S()(this, "alertZIndex", void 0),
                S()(this, "torusAlertContainer", void 0),
                S()(this, "isIframeFullScreen", void 0),
                S()(this, "whiteLabel", void 0),
                S()(this, "requestedVerifier", void 0),
                S()(this, "currentVerifier", void 0),
                S()(this, "embedTranslations", void 0),
                S()(this, "ethereum", void 0),
                S()(this, "provider", void 0),
                S()(this, "communicationMux", void 0),
                S()(this, "isLoginCallback", void 0),
                S()(this, "dappStorageKey", void 0),
                S()(this, "paymentProviders", re.paymentProviders),
                S()(this, "loginHint", ""),
                S()(this, "useWalletConnect", void 0),
                (this.buttonPosition = n),
                (this.torusUrl = ""),
                (this.isLoggedIn = !1),
                (this.isInitialized = !1),
                (this.torusWidgetVisibility = !0),
                (this.requestedVerifier = ""),
                (this.currentVerifier = ""),
                (this.nodeDetailManager = new k.a()),
                (this.torusJs = new P.a({
                  metadataHost: "https://metadata.tor.us",
                  allowHost: "https://signer.tor.us/api/allow",
                  network: "mainnet",
                })),
                (this.apiKey = s),
                P.a.setAPIKey(s),
                Object(j.d)(s),
                (this.modalZIndex = o),
                (this.alertZIndex = o + 1e3),
                (this.isIframeFullScreen = !1),
                (this.dappStorageKey = "");
            }
            return (
              Object(p.a)(t, [
                {
                  key: "init",
                  value: (function () {
                    var e = Object(w.a)(
                      W().mark(function e() {
                        var t,
                          r,
                          n,
                          i,
                          o,
                          a,
                          s,
                          u,
                          c,
                          l,
                          h,
                          d,
                          f,
                          p,
                          v,
                          m,
                          y,
                          g,
                          b,
                          _,
                          O,
                          M,
                          E,
                          S,
                          k,
                          j,
                          x,
                          P,
                          A,
                          C,
                          T,
                          L,
                          N,
                          I,
                          D,
                          U,
                          B,
                          F,
                          K,
                          q,
                          H,
                          V,
                          G,
                          Y = this,
                          z = arguments;
                        return W().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      z.length > 0 && void 0 !== z[0]
                                        ? z[0]
                                        : {}),
                                    (r = t.buildEnv),
                                    (n = void 0 === r ? J.PRODUCTION : r),
                                    (i = t.enableLogging),
                                    (o = void 0 !== i && i),
                                    (a = t.enabledVerifiers),
                                    (s = void 0 === a ? De : a),
                                    (u = t.network),
                                    (c =
                                      void 0 === u
                                        ? {
                                            host: "mainnet",
                                            chainId: null,
                                            networkName: "",
                                            blockExplorer: "",
                                            ticker: "",
                                            tickerName: "",
                                          }
                                        : u),
                                    (l = t.loginConfig),
                                    (h = void 0 === l ? {} : l),
                                    (d = t.showTorusButton),
                                    (f = void 0 === d || d),
                                    (p = t.integrity),
                                    (v =
                                      void 0 === p
                                        ? { check: !1, hash: Ue, version: "" }
                                        : p),
                                    (m = t.whiteLabel),
                                    (y = t.skipTKey),
                                    (g = void 0 !== y && y),
                                    (b = t.useLocalStorage),
                                    (_ = void 0 !== b && b),
                                    (O = t.useWalletConnect),
                                    (M = void 0 !== O && O),
                                    !this.isInitialized)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error("Already initialized");
                                case 3:
                                  return (e.next = 5), ve(n, v);
                                case 5:
                                  if (
                                    ((E = e.sent),
                                    (S = E.torusUrl),
                                    (k = E.logLevel),
                                    ce.info(S, "url loaded"),
                                    (this.torusUrl = S),
                                    (this.whiteLabel = m),
                                    (this.useWalletConnect = M),
                                    ce.setDefaultLevel(k),
                                    o ? ce.enableAll() : ce.disableAll(),
                                    (this.torusWidgetVisibility = f),
                                    (j = ""),
                                    Fe &&
                                      _ &&
                                      ((x = ""
                                        .concat(re.localStorageKeyPrefix)
                                        .concat(window.location.hostname)),
                                      (P = window.localStorage.getItem(x))
                                        ? (j = P)
                                        : ((A = "torus-app-".concat(pe())),
                                          window.localStorage.setItem(x, A),
                                          (j = A))),
                                    (this.dappStorageKey = j),
                                    (C = new URL(S)).pathname.endsWith("/")
                                      ? (C.pathname += "popup")
                                      : (C.pathname += "/popup"),
                                    j &&
                                      (C.hash = "#dappStorageKey=".concat(j)),
                                    (this.torusIframe = ie(
                                      '<iframe\n        id="torusIframe"\n        allow='
                                        .concat(
                                          M ? "camera" : "",
                                          '\n        class="torusIframe"\n        src="'
                                        )
                                        .concat(
                                          C.href,
                                          '"\n        style="display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: '
                                        )
                                        .concat(
                                          this.modalZIndex,
                                          '"\n      ></iframe>'
                                        )
                                    )),
                                    (this.torusAlertContainer = ie(
                                      '<div id="torusAlertContainer"></div>'
                                    )),
                                    (this.torusAlertContainer.style.display =
                                      "none"),
                                    this.torusAlertContainer.style.setProperty(
                                      "z-index",
                                      this.alertZIndex.toString()
                                    ),
                                    (T =
                                      window.document.createElement(
                                        "link"
                                      )).setAttribute("rel", "stylesheet"),
                                    T.setAttribute("type", "text/css"),
                                    T.setAttribute(
                                      "href",
                                      "".concat(S, "/css/widget.css")
                                    ),
                                    (this.styleLink = T),
                                    (L = this.whiteLabel || {}),
                                    (N = L.defaultLanguage),
                                    (I = void 0 === N ? me() : N),
                                    (D = L.customTranslations),
                                    (U = void 0 === D ? {} : D),
                                    (B = R()(re.translations, U)),
                                    (F = B[I] || re.translations[me()]),
                                    (this.embedTranslations = F.embed),
                                    (K = (function () {
                                      var e = Object(w.a)(
                                        W().mark(function e() {
                                          return W().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (e.next = 2), se();
                                                case 2:
                                                  return e.abrupt(
                                                    "return",
                                                    new Promise(function (
                                                      e,
                                                      t
                                                    ) {
                                                      (Y.torusIframe.onload =
                                                        Object(w.a)(
                                                          W().mark(
                                                            function r() {
                                                              var n;
                                                              return W().wrap(
                                                                function (r) {
                                                                  for (;;)
                                                                    switch (
                                                                      (r.prev =
                                                                        r.next)
                                                                    ) {
                                                                      case 0:
                                                                        Y._setupWeb3(),
                                                                          (n =
                                                                            Y.communicationMux.getStream(
                                                                              "init_stream"
                                                                            )).on(
                                                                            "data",
                                                                            function (
                                                                              r
                                                                            ) {
                                                                              var n =
                                                                                  r.name,
                                                                                i =
                                                                                  r.data,
                                                                                o =
                                                                                  r.error;
                                                                              "init_complete" ===
                                                                                n &&
                                                                              i.success
                                                                                ? ((Y.isInitialized =
                                                                                    !0),
                                                                                  Y._displayIframe(
                                                                                    Y.isIframeFullScreen
                                                                                  ),
                                                                                  e(
                                                                                    void 0
                                                                                  ))
                                                                                : o &&
                                                                                  t(
                                                                                    new Error(
                                                                                      o
                                                                                    )
                                                                                  );
                                                                            }
                                                                          ),
                                                                          n.write(
                                                                            {
                                                                              name: "init_stream",
                                                                              data: {
                                                                                enabledVerifiers:
                                                                                  s,
                                                                                loginConfig:
                                                                                  h,
                                                                                whiteLabel:
                                                                                  Y.whiteLabel,
                                                                                buttonPosition:
                                                                                  Y.buttonPosition,
                                                                                torusWidgetVisibility:
                                                                                  Y.torusWidgetVisibility,
                                                                                apiKey:
                                                                                  Y.apiKey,
                                                                                skipTKey:
                                                                                  g,
                                                                                network:
                                                                                  c,
                                                                              },
                                                                            }
                                                                          );
                                                                      case 4:
                                                                      case "end":
                                                                        return r.stop();
                                                                    }
                                                                },
                                                                r
                                                              );
                                                            }
                                                          )
                                                        )),
                                                        window.document.head.appendChild(
                                                          Y.styleLink
                                                        ),
                                                        window.document.body.appendChild(
                                                          Y.torusIframe
                                                        ),
                                                        window.document.body.appendChild(
                                                          Y.torusAlertContainer
                                                        );
                                                    })
                                                  );
                                                case 3:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function () {
                                        return e.apply(this, arguments);
                                      };
                                    })()),
                                    "production" !== n || !v.check)
                                  ) {
                                    e.next = 56;
                                    break;
                                  }
                                  return (
                                    (q = "".concat(S, "/popup")),
                                    (e.next = 39),
                                    fetch(q, { cache: "reload" })
                                  );
                                case 39:
                                  if (
                                    "max-age=3600" ===
                                    (H = e.sent).headers.get("Cache-Control")
                                  ) {
                                    e.next = 42;
                                    break;
                                  }
                                  throw new Error(
                                    "Unexpected Cache-Control headers, got ".concat(
                                      H.headers.get("Cache-Control")
                                    )
                                  );
                                case 42:
                                  return (e.next = 44), H.text();
                                case 44:
                                  if (
                                    ((V = e.sent),
                                    (G = ke({ algorithms: ["sha384"] }, V)),
                                    ce.info(G, "integrity"),
                                    G !== v.hash)
                                  ) {
                                    e.next = 52;
                                    break;
                                  }
                                  return (e.next = 50), K();
                                case 50:
                                  e.next = 54;
                                  break;
                                case 52:
                                  throw (
                                    (this.clearInit(),
                                    new Error("Integrity check failed"))
                                  );
                                case 54:
                                  e.next = 58;
                                  break;
                                case 56:
                                  return (e.next = 58), K();
                                case 58:
                                  return e.abrupt("return", void 0);
                                case 59:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "login",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.verifier,
                      r = void 0 === t ? "" : t,
                      n = e.login_hint,
                      i = void 0 === n ? "" : n;
                    if (!this.isInitialized)
                      throw new Error("Call init() first");
                    return (
                      (this.requestedVerifier = r),
                      (this.loginHint = i),
                      this.ethereum.enable()
                    );
                  },
                },
                {
                  key: "logout",
                  value: function () {
                    var e = this;
                    return new Promise(function (t, r) {
                      if (e.isLoggedIn) {
                        e.communicationMux
                          .getStream("logout")
                          .write({ name: "logOut" });
                        var n = e.communicationMux.getStream("status");
                        ae(n, "data", function (n) {
                          n.loggedIn
                            ? r(new Error("Some Error Occured"))
                            : ((e.isLoggedIn = !1),
                              (e.currentVerifier = ""),
                              (e.requestedVerifier = ""),
                              t());
                        });
                      } else r(new Error("User has not logged in yet"));
                    });
                  },
                },
                {
                  key: "cleanUp",
                  value: (function () {
                    var e = Object(w.a)(
                      W().mark(function e() {
                        return W().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!this.isLoggedIn) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (e.next = 3), this.logout();
                                case 3:
                                  this.clearInit();
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "clearInit",
                  value: function () {
                    function e(e) {
                      return e instanceof Element || e instanceof HTMLDocument;
                    }
                    e(this.styleLink) &&
                      window.document.body.contains(this.styleLink) &&
                      (this.styleLink.remove(), (this.styleLink = void 0)),
                      e(this.torusIframe) &&
                        window.document.body.contains(this.torusIframe) &&
                        (this.torusIframe.remove(),
                        (this.torusIframe = void 0)),
                      e(this.torusAlertContainer) &&
                        window.document.body.contains(
                          this.torusAlertContainer
                        ) &&
                        ((this.torusAlert = void 0),
                        this.torusAlertContainer.remove(),
                        (this.torusAlertContainer = void 0)),
                      (this.isInitialized = !1);
                  },
                },
                {
                  key: "hideTorusButton",
                  value: function () {
                    (this.torusWidgetVisibility = !1),
                      this._sendWidgetVisibilityStatus(!1),
                      this._displayIframe();
                  },
                },
                {
                  key: "showTorusButton",
                  value: function () {
                    (this.torusWidgetVisibility = !0),
                      this._sendWidgetVisibilityStatus(!0),
                      this._displayIframe();
                  },
                },
                {
                  key: "setProvider",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = t.host,
                      n = void 0 === r ? "mainnet" : r,
                      i = t.chainId,
                      o = void 0 === i ? null : i,
                      a = t.networkName,
                      s = void 0 === a ? "" : a,
                      u = M()(t, Le);
                    return new Promise(function (t, r) {
                      var i = e.communicationMux.getStream("provider_change");
                      ae(i, "data", function (e) {
                        var n = e.data,
                          i = n.err,
                          o = n.success;
                        ce.info(e),
                          i
                            ? r(i)
                            : o
                            ? t()
                            : r(new Error("some error occured"));
                      });
                      var a = pe();
                      e._handleWindow(a, { target: "_blank", features: be }),
                        i.write({
                          name: "show_provider_change",
                          data: {
                            network: Ie(
                              { host: n, chainId: o, networkName: s },
                              u
                            ),
                            preopenInstanceId: a,
                            override: !1,
                          },
                        });
                    });
                  },
                },
                {
                  key: "showWallet",
                  value: function (e) {
                    var t = this,
                      r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = this.communicationMux.getStream("show_wallet"),
                      i = e ? "/".concat(e) : "";
                    n.write({ name: "show_wallet", data: { path: i } });
                    var o = function (e) {
                      if ("show_wallet_instance" === e.name) {
                        var n = e.data.instanceId,
                          o = new URL(
                            "".concat(t.torusUrl, "/wallet").concat(i)
                          );
                        o.searchParams.append("integrity", "true"),
                          o.searchParams.append("instanceId", n),
                          Object.keys(r).forEach(function (e) {
                            o.searchParams.append(e, r[e]);
                          }),
                          t.dappStorageKey &&
                            (o.hash = "#dappStorageKey=".concat(
                              t.dappStorageKey
                            )),
                          new je({
                            url: o,
                            features:
                              "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315",
                          }).open();
                      }
                    };
                    ae(n, "data", o);
                  },
                },
                {
                  key: "getPublicAddress",
                  value: (function () {
                    var e = Object(w.a)(
                      W().mark(function e(t) {
                        var r, n, i, o, a, s, u, c, l, h, d, f;
                        return W().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = t.verifier),
                                    (n = t.verifierId),
                                    (i = t.isExtended),
                                    (o = void 0 !== i && i),
                                    re.supportedVerifierList.includes(r) &&
                                      Y[r])
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  throw new Error("Unsupported verifier");
                                case 3:
                                  return (
                                    (e.next = 5),
                                    this.nodeDetailManager.getNodeDetails({
                                      verifier: r,
                                      verifierId: n,
                                    })
                                  );
                                case 5:
                                  return (
                                    (a = e.sent),
                                    (s = a.torusNodeEndpoints),
                                    (u = a.torusNodePub),
                                    (c = r),
                                    (l = Y[r]),
                                    (e.prev = 10),
                                    (e.next = 13),
                                    this.torusJs.getUserTypeAndAddress(s, u, {
                                      verifier: c,
                                      verifierId: n,
                                    })
                                  );
                                case 13:
                                  if ("v1" !== (h = e.sent).typeOfUser) {
                                    e.next = 18;
                                    break;
                                  }
                                  if (o) {
                                    e.next = 17;
                                    break;
                                  }
                                  return e.abrupt("return", h.address);
                                case 17:
                                  return e.abrupt("return", h);
                                case 18:
                                  return (
                                    (e.next = 20),
                                    this.torusJs.getUserTypeAndAddress(
                                      s,
                                      u,
                                      { verifier: l, verifierId: n },
                                      !0
                                    )
                                  );
                                case 20:
                                  if (((d = e.sent), o)) {
                                    e.next = 23;
                                    break;
                                  }
                                  return e.abrupt("return", d.address);
                                case 23:
                                  return e.abrupt("return", d);
                                case 26:
                                  if (
                                    ((e.prev = 26),
                                    (e.t0 = e.catch(10)),
                                    null === e.t0 ||
                                      void 0 === e.t0 ||
                                      !e.t0.message.includes(
                                        "Verifier + VerifierID has not yet been assigned"
                                      ))
                                  ) {
                                    e.next = 35;
                                    break;
                                  }
                                  return (
                                    (e.next = 31),
                                    this.torusJs.getUserTypeAndAddress(
                                      s,
                                      u,
                                      { verifier: l, verifierId: n },
                                      !0
                                    )
                                  );
                                case 31:
                                  if (((f = e.sent), o)) {
                                    e.next = 34;
                                    break;
                                  }
                                  return e.abrupt("return", f.address);
                                case 34:
                                  return e.abrupt("return", f);
                                case 35:
                                  throw e.t0;
                                case 36:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[10, 26]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getUserInfo",
                  value: function (e) {
                    var t = this;
                    return new Promise(function (r, n) {
                      if (t.isLoggedIn) {
                        var i =
                          t.communicationMux.getStream("user_info_access");
                        i.write({ name: "user_info_access_request" });
                        ae(i, "data", function (i) {
                          var o = i.name,
                            a = i.data,
                            s = a.approved,
                            u = a.payload,
                            c = a.rejected,
                            l = a.newRequest;
                          if ("user_info_access_response" === o)
                            if (s) r(u);
                            else if (c)
                              n(new Error("User rejected the request"));
                            else if (l) {
                              var h = t.communicationMux.getStream("user_info");
                              ae(h, "data", function (e) {
                                "user_info_response" === e.name &&
                                  (e.data.approved
                                    ? r(e.data.payload)
                                    : n(
                                        new Error("User rejected the request")
                                      ));
                              });
                              var d = pe();
                              t._handleWindow(d, {
                                target: "_blank",
                                features: be,
                              }),
                                h.write({
                                  name: "user_info_request",
                                  data: { message: e, preopenInstanceId: d },
                                });
                            }
                        });
                      } else n(new Error("User has not logged in yet"));
                    });
                  },
                },
                {
                  key: "initiateTopup",
                  value: function (e, t) {
                    var r = this;
                    return new Promise(function (n, i) {
                      if (r.isInitialized) {
                        var o = (function (e, t) {
                            var r = {};
                            if (!e) return { errors: r, isValid: !0 };
                            if (e && !he[e])
                              return (
                                (r.provider = "Invalid Provider"),
                                {
                                  errors: r,
                                  isValid: 0 === Object.keys(r).length,
                                }
                              );
                            var n = he[e],
                              i = t || {};
                            if (i.fiatValue) {
                              var o = +parseFloat(i.fiatValue.toString()) || 0;
                              o < n.minOrderValue &&
                                (r.fiatValue =
                                  "Requested amount is lower than supported"),
                                o > n.maxOrderValue &&
                                  n.enforceMax &&
                                  (r.fiatValue =
                                    "Requested amount is higher than supported");
                            }
                            if (
                              (i.selectedCurrency &&
                                !n.validCurrencies.includes(
                                  i.selectedCurrency
                                ) &&
                                (r.selectedCurrency = "Unsupported currency"),
                              i.selectedCryptoCurrency)
                            ) {
                              var a = Object.values(
                                  n.validCryptoCurrenciesByChain
                                )
                                  .flat()
                                  .map(function (e) {
                                    return e.value;
                                  }),
                                s =
                                  e === z.MOONPAY
                                    ? i.selectedCryptoCurrency.toLowerCase()
                                    : i.selectedCryptoCurrency;
                              a &&
                                !a.includes(s) &&
                                (r.selectedCryptoCurrency =
                                  "Unsupported cryptoCurrency");
                            }
                            return {
                              errors: r,
                              isValid: 0 === Object.keys(r).length,
                            };
                          })(e, t),
                          a = o.errors;
                        if (!o.isValid)
                          return void i(new Error(JSON.stringify(a)));
                        var s = r.communicationMux.getStream("topup");
                        ae(s, "data", function (e) {
                          "topup_response" === e.name &&
                            (e.data.success
                              ? n(e.data.success)
                              : i(new Error(e.data.error)));
                        });
                        var u = pe();
                        r._handleWindow(u),
                          s.write({
                            name: "topup_request",
                            data: {
                              provider: e,
                              params: t,
                              preopenInstanceId: u,
                            },
                          });
                      } else i(new Error("Torus is not initialized yet"));
                    });
                  },
                },
                {
                  key: "loginWithPrivateKey",
                  value: (function () {
                    var t = Object(w.a)(
                      W().mark(function t(r) {
                        var n,
                          i,
                          o = this;
                        return W().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = r.privateKey),
                                  (i = r.userInfo),
                                  t.abrupt(
                                    "return",
                                    new Promise(function (t, r) {
                                      if (o.isInitialized) {
                                        if (32 !== e.from(n, "hex").length)
                                          return void r(
                                            new Error(
                                              "Invalid private key, Please provide a 32 byte valid secp25k1 private key"
                                            )
                                          );
                                        var a = o.communicationMux.getStream(
                                          "login_with_private_key"
                                        );
                                        ae(a, "data", function (e) {
                                          "login_with_private_key_response" ===
                                            e.name &&
                                            (e.data.success
                                              ? t(e.data.success)
                                              : r(new Error(e.data.error)));
                                        }),
                                          a.write({
                                            name: "login_with_private_key_request",
                                            data: {
                                              privateKey: n,
                                              userInfo: i,
                                            },
                                          });
                                      } else r(new Error("Torus is not initialized yet"));
                                    })
                                  )
                                );
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "showWalletConnectScanner",
                  value: (function () {
                    var e = Object(w.a)(
                      W().mark(function e() {
                        var t = this;
                        return W().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.useWalletConnect) {
                                    e.next = 2;
                                    break;
                                  }
                                  throw new Error(
                                    "Set `useWalletConnect` as true in init function options to use wallet connect scanner"
                                  );
                                case 2:
                                  return e.abrupt(
                                    "return",
                                    new Promise(function (e, r) {
                                      if (t.isLoggedIn) {
                                        var n = t.communicationMux.getStream(
                                          "wallet_connect_stream"
                                        );
                                        ae(n, "data", function (n) {
                                          "wallet_connect_stream_res" ===
                                            n.name &&
                                            (n.data.success
                                              ? e(n.data.success)
                                              : r(new Error(n.data.error)),
                                            t._displayIframe());
                                        }),
                                          n.write({
                                            name: "wallet_connect_stream_req",
                                          }),
                                          t._displayIframe(!0);
                                      } else r(new Error("User has not logged in yet"));
                                    })
                                  );
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_handleWindow",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r = t.url,
                      n = t.target,
                      i = t.features;
                    if (e) {
                      var o = this.communicationMux.getStream("window"),
                        a = new URL(
                          r ||
                            ""
                              .concat(
                                this.torusUrl,
                                "/redirect?preopenInstanceId="
                              )
                              .concat(e)
                        );
                      this.dappStorageKey &&
                        (a.hash
                          ? (a.hash += "&dappStorageKey=".concat(
                              this.dappStorageKey
                            ))
                          : (a.hash = "#dappStorageKey=".concat(
                              this.dappStorageKey
                            )));
                      var s = new je({ url: a, target: n, features: i });
                      if ((s.open(), !s.window))
                        return void this._createPopupBlockAlert(e, a.href);
                      o.write({
                        name: "opened_window",
                        data: { preopenInstanceId: e },
                      });
                      var u = function t(r) {
                        var n = r.preopenInstanceId,
                          i = r.close;
                        n === e &&
                          i &&
                          (s.close(), o.removeListener("data", t));
                      };
                      o.on("data", u),
                        s.once("close", function () {
                          o.write({
                            data: { preopenInstanceId: e, closed: !0 },
                          }),
                            o.removeListener("data", u);
                        });
                    }
                  },
                },
                {
                  key: "_setEmbedWhiteLabel",
                  value: function (e) {
                    var t = (this.whiteLabel || {}).theme;
                    if (t) {
                      var r = t.isDark,
                        n = void 0 !== r && r,
                        i = t.colors,
                        o = void 0 === i ? {} : i;
                      n && e.classList.add("torus-dark"),
                        o.torusBrand1 &&
                          e.style.setProperty("--torus-brand-1", o.torusBrand1),
                        o.torusGray2 &&
                          e.style.setProperty("--torus-gray-2", o.torusGray2);
                    }
                  },
                },
                {
                  key: "_getLogoUrl",
                  value: function () {
                    var e,
                      t,
                      r,
                      n,
                      i = "".concat(
                        this.torusUrl,
                        "/images/torus_icon-blue.svg"
                      );
                    null !== (e = this.whiteLabel) &&
                    void 0 !== e &&
                    null !== (t = e.theme) &&
                    void 0 !== t &&
                    t.isDark
                      ? (i =
                          (null === (r = this.whiteLabel) || void 0 === r
                            ? void 0
                            : r.logoLight) || i)
                      : (i =
                          (null === (n = this.whiteLabel) || void 0 === n
                            ? void 0
                            : n.logoDark) || i);
                    return i;
                  },
                },
                {
                  key: "_sendWidgetVisibilityStatus",
                  value: function (e) {
                    this.communicationMux
                      .getStream("torus-widget-visibility")
                      .write({ data: e });
                  },
                },
                {
                  key: "_displayIframe",
                  value: function () {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      t = {};
                    if (e)
                      (t.display = "block"),
                        (t.width = "100%"),
                        (t.height = "100%"),
                        (t.top = "0px"),
                        (t.right = "0px"),
                        (t.left = "0px"),
                        (t.bottom = "0px");
                    else
                      switch (
                        ((t.display = this.torusWidgetVisibility
                          ? "block"
                          : "none"),
                        (t.height = "70px"),
                        (t.width = "70px"),
                        this.buttonPosition)
                      ) {
                        case Z.TOP_LEFT:
                          (t.top = "0px"),
                            (t.left = "0px"),
                            (t.right = "auto"),
                            (t.bottom = "auto");
                          break;
                        case Z.TOP_RIGHT:
                          (t.top = "0px"),
                            (t.right = "0px"),
                            (t.left = "auto"),
                            (t.bottom = "auto");
                          break;
                        case Z.BOTTOM_RIGHT:
                          (t.bottom = "0px"),
                            (t.right = "0px"),
                            (t.top = "auto"),
                            (t.left = "auto");
                          break;
                        case Z.BOTTOM_LEFT:
                        default:
                          (t.bottom = "0px"),
                            (t.left = "0px"),
                            (t.top = "auto"),
                            (t.right = "auto");
                      }
                    Object.assign(this.torusIframe.style, t),
                      (this.isIframeFullScreen = e);
                  },
                },
                {
                  key: "_setupWeb3",
                  value: function () {
                    var e = this;
                    ce.info("setupWeb3 running");
                    var t = new x.a({
                        name: "embed_metamask",
                        target: "iframe_metamask",
                        targetWindow: this.torusIframe.contentWindow,
                        targetOrigin: new URL(this.torusUrl).origin,
                      }),
                      r = new x.a({
                        name: "embed_comm",
                        target: "iframe_comm",
                        targetWindow: this.torusIframe.contentWindow,
                        targetOrigin: new URL(this.torusUrl).origin,
                      }),
                      n = new Ee(t),
                      i = function (e) {
                        var t = n[e];
                        n[e] = function (e) {
                          if (e && "eth_requestAccounts" === e)
                            return n.enable();
                          for (
                            var r = arguments.length,
                              i = new Array(r > 1 ? r - 1 : 0),
                              o = 1;
                            o < r;
                            o++
                          )
                            i[o - 1] = arguments[o];
                          return t.apply(this, [e].concat(i));
                        };
                      };
                    i("send"),
                      i("sendAsync"),
                      (n.enable = function () {
                        return new Promise(function (t, r) {
                          n.sendAsync(
                            {
                              jsonrpc: "2.0",
                              id: pe(),
                              method: "eth_requestAccounts",
                              params: [],
                            },
                            function (n, i) {
                              var o = (i || {}).result;
                              if (n)
                                setTimeout(function () {
                                  r(n);
                                }, 50);
                              else if (Array.isArray(o) && o.length > 0) {
                                var a = function () {
                                  if (
                                    "" !== e.requestedVerifier &&
                                    e.currentVerifier !== e.requestedVerifier
                                  ) {
                                    var n = e.requestedVerifier;
                                    e.logout()
                                      .then(function (i) {
                                        (e.requestedVerifier = n),
                                          e._showLoginPopup(!0, t, r);
                                      })
                                      .catch(function (e) {
                                        return r(e);
                                      });
                                  } else t(o);
                                };
                                e.isLoggedIn ? a() : (e.isLoginCallback = a);
                              } else e._showLoginPopup(!0, t, r);
                            }
                          );
                        });
                      }),
                      (n.tryPreopenHandle = function (t, r) {
                        var i = t;
                        if (!Array.isArray(i) && Be.includes(i.method)) {
                          var o = pe();
                          e._handleWindow(o, {
                            target: "_blank",
                            features: we,
                          }),
                            (i.preopenInstanceId = o);
                        }
                        n._rpcEngine.handle(i, r);
                      });
                    var o = new Proxy(n, {
                      deleteProperty: function () {
                        return !0;
                      },
                    });
                    this.ethereum = o;
                    var a = Object(x.g)(r);
                    (this.communicationMux = a),
                      a.getStream("window").on("data", function (t) {
                        "create_window" === t.name &&
                          e._createPopupBlockAlert(
                            t.data.preopenInstanceId,
                            t.data.url
                          );
                      }),
                      a.getStream("widget").on("data", function (t) {
                        var r = t.data;
                        e._displayIframe(r);
                      }),
                      a.getStream("status").on("data", function (t) {
                        t.loggedIn
                          ? ((e.isLoggedIn = t.loggedIn),
                            (e.currentVerifier = t.verifier))
                          : e._displayIframe(),
                          e.isLoginCallback &&
                            (e.isLoginCallback(), delete e.isLoginCallback);
                      }),
                      (this.provider = o),
                      this.provider.shouldSendMetadata &&
                        (function (e) {
                          Te.apply(this, arguments);
                        })(this.provider._rpcEngine),
                      n._initializeState(),
                      ce.debug("Torus - injected provider");
                  },
                },
                {
                  key: "_showLoginPopup",
                  value: function (e, t, r) {
                    var n = this,
                      i = function (e) {
                        var i = e.err,
                          o = e.selectedAddress;
                        i ? (ce.error(i), r && r(i)) : t && t([o]),
                          n.isIframeFullScreen && n._displayIframe();
                      },
                      o = this.communicationMux.getStream("oauth");
                    if (this.requestedVerifier) {
                      ae(o, "data", i);
                      var a = pe();
                      this._handleWindow(a),
                        o.write({
                          name: "oauth",
                          data: {
                            calledFromEmbed: e,
                            verifier: this.requestedVerifier,
                            preopenInstanceId: a,
                            login_hint: this.loginHint,
                          },
                        });
                    } else
                      this._displayIframe(!0),
                        ae(o, "data", i),
                        o.write({
                          name: "oauth_modal",
                          data: { calledFromEmbed: e },
                        });
                  },
                },
                {
                  key: "_createPopupBlockAlert",
                  value: function (e, t) {
                    var r = this,
                      n = this._getLogoUrl(),
                      i = ie(
                        '<div id="torusAlert" class="torus-alert--v2">' +
                          '<div id="torusAlert__logo"><img src="'.concat(
                            n,
                            '" /></div>'
                          ) +
                          "<div>" +
                          '<h1 id="torusAlert__title">'.concat(
                            this.embedTranslations.actionRequired,
                            "</h1>"
                          ) +
                          '<p id="torusAlert__desc">'.concat(
                            this.embedTranslations.pendingAction,
                            "</p>"
                          ) +
                          "</div></div>"
                      ),
                      o = ie(
                        '<div><a id="torusAlert__btn">'.concat(
                          this.embedTranslations.continue,
                          "</a></div>"
                        )
                      ),
                      a = ie('<div id="torusAlert__btn-container"></div>');
                    a.appendChild(o), i.appendChild(a);
                    this._setEmbedWhiteLabel(i);
                    ne(function () {
                      (r.torusAlertContainer.style.display = "block"),
                        r.torusAlertContainer.appendChild(i);
                    }),
                      ne(function () {
                        o.addEventListener("click", function () {
                          r._handleWindow(e, {
                            url: t,
                            target: "_blank",
                            features: we,
                          }),
                            i.remove(),
                            0 === r.torusAlertContainer.children.length &&
                              (r.torusAlertContainer.style.display = "none");
                        });
                      });
                  },
                },
              ]),
              t
            );
          })();
        }.call(this, r(8).Buffer);
    },
    1933: function (e, t, r) {
      var n = r(1934);
      (e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          i,
          o = n(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    1934: function (e, t) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var r,
          n,
          i = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    1935: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return p;
      });
      var n = r(11),
        i = r(4),
        o = r(5),
        a = r(1078),
        s = r.n(a),
        u = r(303),
        c = r.n(u),
        l = r(27);
      function h() {
        h = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (j) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, n) {
          var i = t && t.prototype instanceof d ? t : d,
            o = Object.create(i.prototype),
            a = new E(n || []);
          return (
            (o._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (i, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw o;
                  return k();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var s = _(a, r);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = c(e, t, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === l)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(e, r, a)),
            o
          );
        }
        function c(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (j) {
            return { type: "throw", arg: j };
          }
        }
        e.wrap = u;
        var l = {};
        function d() {}
        function f() {}
        function p() {}
        var v = {};
        s(v, i, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          y = m && m(m(S([])));
        y && y !== t && r.call(y, i) && (v = y);
        var g = (p.prototype = d.prototype = Object.create(v));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var n;
          this._invoke = function (i, o) {
            function a() {
              return new t(function (n, a) {
                !(function n(i, o, a, s) {
                  var u = c(e[i], e, o);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      h = l.value;
                    return h && "object" == typeof h && r.call(h, "__await")
                      ? t.resolve(h.__await).then(
                          function (e) {
                            n("next", e, a, s);
                          },
                          function (e) {
                            n("throw", e, a, s);
                          }
                        )
                      : t.resolve(h).then(
                          function (e) {
                            (l.value = e), a(l);
                          },
                          function (e) {
                            return n("throw", e, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(i, o, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function _(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)
              )
                return l;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var n = c(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function M(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = p),
          s(g, "constructor", p),
          s(p, "constructor", f),
          (f.displayName = s(p, a, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, a, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          s(w.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new w(u(t, r, n, i), o);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          b(g),
          s(g, a, "Generator"),
          s(g, i, function () {
            return this;
          }),
          s(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(M),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                l
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), M(r), l;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    M(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      }
      var d = "mainnet",
        f = [
          {
            inputs: [
              { internalType: "string", name: "_verifier", type: "string" },
              {
                internalType: "bytes32",
                name: "hashedVerifierId",
                type: "bytes32",
              },
            ],
            name: "getNodeSet",
            outputs: [
              {
                internalType: "uint256",
                name: "currentEpoch",
                type: "uint256",
              },
              {
                internalType: "string[]",
                name: "torusNodeEndpoints",
                type: "string[]",
              },
              {
                internalType: "uint256[]",
                name: "torusNodePubX",
                type: "uint256[]",
              },
              {
                internalType: "uint256[]",
                name: "torusNodePubY",
                type: "uint256[]",
              },
              {
                internalType: "uint256[]",
                name: "torusIndexes",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        p = (function () {
          function e() {
            Object(i.a)(this, e);
            var t,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = r.network,
              o = void 0 === n ? d : n,
              a = r.proxyAddress,
              u = void 0 === a ? e.PROXY_ADDRESS_MAINNET : a;
            s()(this, "_currentEpoch", ""),
              s()(this, "_torusNodeEndpoints", []),
              s()(this, "_torusNodePub", []),
              s()(this, "_torusIndexes", []),
              s()(this, "nodeListAddress", void 0),
              s()(this, "updated", void 0),
              s()(this, "nodeListContract", void 0);
            try {
              var l = new URL(o);
              t = l.href;
            } catch (p) {
              var h = "b8cdb0e4cff24599a286bf8e87ff1c96";
              t = "https://".concat(o, ".infura.io/v3/").concat(h);
            }
            c.a.setProvider(t),
              (this.nodeListContract = new c.a(f, u)),
              (this.nodeListAddress = u),
              (this.updated = !1);
          }
          return (
            Object(o.a)(e, [
              {
                key: "_nodeDetails",
                get: function () {
                  return {
                    currentEpoch: this._currentEpoch,
                    nodeListAddress: this.nodeListAddress,
                    torusNodeEndpoints: this._torusNodeEndpoints,
                    torusNodePub: this._torusNodePub,
                    torusIndexes: this._torusIndexes,
                    updated: this.updated,
                  };
                },
              },
              {
                key: "getNodeDetails",
                value: (function () {
                  var t = Object(n.a)(
                    h().mark(function t(r) {
                      var n, i, o, a, s, u, c, d, f, p, v, m, y, g, b, w;
                      return h().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((n = r.verifier),
                                  (i = r.verifierId),
                                  (t.prev = 1),
                                  !this.updated ||
                                    (this.nodeListAddress !==
                                      e.PROXY_ADDRESS_MAINNET &&
                                      this.nodeListAddress !==
                                        e.PROXY_ADDRESS_ROPSTEN))
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return", this._nodeDetails);
                              case 4:
                                return (
                                  (o = Object(l.keccak256)(i)),
                                  (t.next = 7),
                                  this.nodeListContract.methods
                                    .getNodeSet(n, o)
                                    .call()
                                );
                              case 7:
                                for (
                                  a = t.sent,
                                    s = a.currentEpoch,
                                    u = a.torusNodeEndpoints,
                                    c = a.torusNodePubX,
                                    d = a.torusNodePubY,
                                    f = a.torusIndexes,
                                    this._currentEpoch = s,
                                    this._torusIndexes = f.map(function (e) {
                                      return Number(e);
                                    }),
                                    p = [],
                                    v = [],
                                    m = 0;
                                  m < u.length;
                                  m += 1
                                )
                                  (y = u[m]),
                                    (g = c[m]),
                                    (b = d[m]),
                                    (w = "https://".concat(
                                      y.split(":")[0],
                                      "/jrpc"
                                    )),
                                    p.push(w),
                                    v.push({
                                      X: Object(l.toHex)(g).replace("0x", ""),
                                      Y: Object(l.toHex)(b).replace("0x", ""),
                                    });
                                return (
                                  (this._torusNodeEndpoints = p),
                                  (this._torusNodePub = v),
                                  (this.updated = !0),
                                  t.abrupt("return", this._nodeDetails)
                                );
                              case 20:
                                if (
                                  ((t.prev = 20),
                                  (t.t0 = t.catch(1)),
                                  this.nodeListAddress !==
                                    e.PROXY_ADDRESS_MAINNET)
                                ) {
                                  t.next = 24;
                                  break;
                                }
                                return t.abrupt(
                                  "return",
                                  e.NODE_DETAILS_MAINNET
                                );
                              case 24:
                                throw t.t0;
                              case 25:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 20]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })();
      s()(
        p,
        "PROXY_ADDRESS_MAINNET",
        "0xf20336e16B5182637f09821c27BDe29b0AFcfe80"
      ),
        s()(
          p,
          "PROXY_ADDRESS_ROPSTEN",
          "0x6258c9d6c12ed3edda59a1a6527e469517744aa7"
        ),
        s()(
          p,
          "PROXY_ADDRESS_POLYGON",
          "0x9f072ba19b3370e512aa1b4bfcdaf97283168005"
        ),
        s()(p, "NODE_DETAILS_MAINNET", {
          currentEpoch: "19",
          nodeListAddress: p.PROXY_ADDRESS_MAINNET,
          torusNodeEndpoints: [
            "https://torus-19.torusnode.com/jrpc",
            "https://torus-node.ens.domains/jrpc",
            "https://torus-node.matic.network/jrpc",
            "https://torus.zilliqa.network/jrpc",
            "https://torus-mainnet.cosmos.network/jrpc",
            "https://torus2.etherscan.com/jrpc",
            "https://torus-node-v2.skalelabs.com/jrpc",
            "https://torus-node.binancex.dev/jrpc",
            "https://torusnode.ont.io/jrpc",
          ],
          torusIndexes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          torusNodePub: [
            {
              X: "bbe83c64177c3775550e6ba6ac2bc059f6847d644c9e4894e42c60d7974d8c2b",
              Y: "82b49a7caf70def38cdad2740af45c1e4f969650105c5019a29bb18b21a9acb5",
            },
            {
              X: "c208cac4ef9a47d386097a9c915b28e9cb89213abee8d26a17198ee261201b0d",
              Y: "c7db2fe4631109f40833de9dc78d07e35706549ee48fa557b33e4e75e1047873",
            },
            {
              X: "ca1766bb426d4ca5582818a0c5439d560ea64f5baa060793ab29dd3d0ceacfe",
              Y: "d46c1d08c40e1306e1bca328c2287b8268166b11a1ba4b8442ea2ad0c5e32152",
            },
            {
              X: "c3934dd2f6f4b3d2e1e398cc501e143c1e1a381b52feb6d1525af34d16253768",
              Y: "71f5141a5035799099f5ea3e241e66946bc55dc857ac3bd7d6fcdb8dcd3eeeef",
            },
            {
              X: "22e66f1929631d00bf026227581597f085fd94fd952fc0dca9f0833398b5c064",
              Y: "6088b3912e10a1e9d50355a609c10db7d188f16a2e2fd7357e51bf4f6a74f0a1",
            },
            {
              X: "9dc9fa410f3ce9eb70df70cdea00a49f2c4cc7a31c08c0dab5f863ed35ff5139",
              Y: "627a291cb87a75c61da3f65d6818e1e05e360217179817ed27e8c73bca7ec122",
            },
            {
              X: "118b9fc07e97b096d899b9f6658463ce6a8caa64038e37fc969df4e6023dd8c6",
              Y: "baf9fa4e51770f4796ea165dd03a769b8606681a38954a0a92c4cbffd6609ce9",
            },
            {
              X: "8a6d8b925da15a273dec3d8f8395ec35cd6878f274b2b180e4e106999db64043",
              Y: "96f67f870c157743da0b1eb84d89bf30500d74dc84c11f501ee1cb013acc8c46",
            },
            {
              X: "39cecb62e863729f572f7dfc46c24867981bf04bb405fed0df39e33984bfade5",
              Y: "61c2364434012e68a2be2e9952805037e52629d7762fafc8e10e9fb5bad8f790",
            },
          ],
          updated: !1,
        });
    },
    1936: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return x;
      }),
        r.d(t, "b", function () {
          return D;
        }),
        r.d(t, "c", function () {
          return q;
        }),
        r.d(t, "d", function () {
          return R;
        }),
        r.d(t, "e", function () {
          return L;
        }),
        r.d(t, "f", function () {
          return T;
        }),
        r.d(t, "g", function () {
          return H;
        });
      var n = r(171),
        i = r(26),
        o = r(11),
        a = r(1130),
        s = r(4),
        u = r(5),
        c = r(13),
        l = r(9),
        h = r(10),
        d = r(1078),
        f = r.n(d),
        p = r(1937),
        v = r(1945),
        m = r(86),
        y = r(1081),
        g = r.n(y),
        b = r(1949),
        w = r(1411),
        _ = r.n(w),
        O = r(1261),
        M = r.n(O),
        E = r(1412),
        S = r.n(E);
      function k() {
        k = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (j) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, n) {
          var i = t && t.prototype instanceof h ? t : h,
            o = Object.create(i.prototype),
            a = new M(n || []);
          return (
            (o._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (i, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === i) throw o;
                  return S();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var s = w(a, r);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = c(e, t, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === l)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(e, r, a)),
            o
          );
        }
        function c(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (j) {
            return { type: "throw", arg: j };
          }
        }
        e.wrap = u;
        var l = {};
        function h() {}
        function d() {}
        function f() {}
        var p = {};
        s(p, i, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          m = v && v(v(E([])));
        m && m !== t && r.call(m, i) && (p = m);
        var y = (f.prototype = h.prototype = Object.create(p));
        function g(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var n;
          this._invoke = function (i, o) {
            function a() {
              return new t(function (n, a) {
                !(function n(i, o, a, s) {
                  var u = c(e[i], e, o);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      h = l.value;
                    return h && "object" == typeof h && r.call(h, "__await")
                      ? t.resolve(h.__await).then(
                          function (e) {
                            n("next", e, a, s);
                          },
                          function (e) {
                            n("throw", e, a, s);
                          }
                        )
                      : t.resolve(h).then(
                          function (e) {
                            (l.value = e), a(l);
                          },
                          function (e) {
                            return n("throw", e, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(i, o, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function w(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)
              )
                return l;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var n = c(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
            );
          var i = n.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function _(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function M(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(_, this),
            this.reset(!0);
        }
        function E(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          s(y, "constructor", f),
          s(f, "constructor", d),
          (d.displayName = s(f, a, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), s(e, a, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          g(b.prototype),
          s(b.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new b(u(t, r, n, i), o);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          g(y),
          s(y, a, "Generator"),
          s(y, i, function () {
            return this;
          }),
          s(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = E),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var s = r.call(o, "catchLoc"),
                    u = r.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                l
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    O(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: E(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      }
      function j() {}
      var x = (function (e) {
        Object(l.a)(r, e);
        var t = Object(h.a)(r);
        function r(e) {
          var n;
          Object(s.a)(this, r);
          var i = e.name,
            o = e.target,
            a = e.targetWindow,
            u = void 0 === a ? window : a,
            l = e.targetOrigin,
            h = void 0 === l ? "*" : l;
          if (
            ((n = t.call(this, { objectMode: !0 })),
            f()(Object(c.a)(n), "_init", void 0),
            f()(Object(c.a)(n), "_haveSyn", void 0),
            f()(Object(c.a)(n), "_name", void 0),
            f()(Object(c.a)(n), "_target", void 0),
            f()(Object(c.a)(n), "_targetWindow", void 0),
            f()(Object(c.a)(n), "_targetOrigin", void 0),
            f()(Object(c.a)(n), "_onMessage", void 0),
            f()(Object(c.a)(n), "_synIntervalId", void 0),
            !i || !o)
          )
            throw new Error("Invalid input.");
          return (
            (n._init = !1),
            (n._haveSyn = !1),
            (n._name = i),
            (n._target = o),
            (n._targetWindow = u),
            (n._targetOrigin = h),
            (n._onMessage = n.onMessage.bind(Object(c.a)(n))),
            (n._synIntervalId = null),
            window.addEventListener("message", n._onMessage, !1),
            n._handShake(),
            n
          );
        }
        return (
          Object(u.a)(r, [
            {
              key: "_break",
              value: function () {
                this.cork(),
                  this._write("BRK", null, j),
                  (this._haveSyn = !1),
                  (this._init = !1);
              },
            },
            {
              key: "_handShake",
              value: function () {
                this._write("SYN", null, j), this.cork();
              },
            },
            {
              key: "_onData",
              value: function (e) {
                if (this._init)
                  if ("BRK" === e) this._break();
                  else
                    try {
                      this.push(e);
                    } catch (t) {
                      this.emit("error", t);
                    }
                else
                  "SYN" === e
                    ? ((this._haveSyn = !0), this._write("ACK", null, j))
                    : "ACK" === e &&
                      ((this._init = !0),
                      this._haveSyn || this._write("ACK", null, j),
                      this.uncork());
              },
            },
            {
              key: "_postMessage",
              value: function (e) {
                var t = this._targetOrigin;
                this._targetWindow.postMessage(
                  { target: this._target, data: e },
                  t
                );
              },
            },
            {
              key: "onMessage",
              value: function (e) {
                var t = e.data;
                ("*" !== this._targetOrigin &&
                  e.origin !== this._targetOrigin) ||
                  e.source !== this._targetWindow ||
                  "object" !== typeof t ||
                  t.target !== this._name ||
                  !t.data ||
                  this._onData(t.data);
              },
            },
            { key: "_read", value: function () {} },
            {
              key: "_write",
              value: function (e, t, r) {
                this._postMessage(e), r();
              },
            },
            {
              key: "_destroy",
              value: function () {
                window.removeEventListener("message", this._onMessage, !1);
              },
            },
          ]),
          r
        );
      })(p.Duplex);
      function P(e, t, r) {
        try {
          Reflect.apply(e, t, r);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      function A(e) {
        for (var t = e.length, r = new Array(t), n = 0; n < t; n += 1)
          r[n] = e[n];
        return r;
      }
      var R = (function (e) {
          Object(l.a)(r, e);
          var t = Object(h.a)(r);
          function r() {
            return Object(s.a)(this, r), t.apply(this, arguments);
          }
          return (
            Object(u.a)(r, [
              {
                key: "emit",
                value: function (e) {
                  var t = "error" === e,
                    r = this._events;
                  if (void 0 !== r) t = t && void 0 === r.error;
                  else if (!t) return !1;
                  for (
                    var n = arguments.length,
                      i = new Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    i[o - 1] = arguments[o];
                  if (t) {
                    var a;
                    if ((i.length > 0 && (a = i[0]), a instanceof Error))
                      throw a;
                    var s = new Error(
                      "Unhandled error.".concat(
                        a ? " (".concat(a.message, ")") : ""
                      )
                    );
                    throw ((s.context = a), s);
                  }
                  var u = r[e];
                  if (void 0 === u) return !1;
                  if ("function" === typeof u) P(u, this, i);
                  else
                    for (var c = u.length, l = A(u), h = 0; h < c; h += 1)
                      P(l[h], this, i);
                  return !0;
                },
              },
            ]),
            r
          );
        })(m.EventEmitter),
        C = (function (e) {
          Object(l.a)(r, e);
          var t = Object(h.a)(r);
          function r(e) {
            var n;
            Object(s.a)(this, r);
            var i = e.code,
              o = e.message,
              a = e.data;
            if (!Number.isInteger(i))
              throw new Error("code must be an integer");
            if (!o || "string" !== typeof o)
              throw new Error("message must be string");
            return (
              (n = t.call(this, o)),
              f()(Object(c.a)(n), "code", void 0),
              f()(Object(c.a)(n), "data", void 0),
              (n.code = i),
              void 0 !== a && (n.data = a),
              n
            );
          }
          return (
            Object(u.a)(r, [
              {
                key: "toString",
                value: function () {
                  return g()({
                    code: this.code,
                    message: this.message,
                    data: this.data,
                    stack: this.stack,
                  });
                },
              },
            ]),
            r
          );
        })(Object(a.a)(Error));
      function T() {
        var e = {};
        var t = new R();
        var r = new p.Duplex({
          objectMode: !0,
          read: function () {
            return !1;
          },
          write: function (r, n, i) {
            var o;
            try {
              !r.id
                ? (function (e) {
                    t.emit("notification", e);
                  })(r)
                : (function (t) {
                    var r = e[t.id];
                    if (!r)
                      throw new Error(
                        'StreamMiddleware - Unknown response id "'.concat(
                          t.id,
                          '"'
                        )
                      );
                    delete e[t.id], Object.assign(r.res, t), setTimeout(r.end);
                  })(r);
            } catch (a) {
              o = a;
            }
            i(o);
          },
        });
        return {
          events: t,
          middleware: function (t, n, i, o) {
            r.push(t), (e[t.id] = { req: t, res: n, next: i, end: o });
          },
          stream: r,
        };
      }
      function L() {
        return function (e, t, r, n) {
          var i = e.id,
            o = Object(v.a)();
          (e.id = o),
            (t.id = o),
            r(function (r) {
              (e.id = i), (t.id = i), r();
            });
        };
      }
      function N(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var D = (function (e) {
        Object(l.a)(r, e);
        var t = Object(h.a)(r);
        function r() {
          var e;
          return (
            Object(s.a)(this, r),
            (e = t.call(this)),
            f()(Object(c.a)(e), "_middleware", void 0),
            (e._middleware = []),
            e
          );
        }
        return (
          Object(u.a)(
            r,
            [
              {
                key: "push",
                value: function (e) {
                  this._middleware.push(e);
                },
              },
              {
                key: "handle",
                value: function (e, t) {
                  if (t && "function" !== typeof t)
                    throw new Error(
                      '"callback" must be a function if provided.'
                    );
                  return Array.isArray(e)
                    ? t
                      ? this._handleBatch(e, t)
                      : this._handleBatch(e)
                    : t
                    ? this._handle(e, t)
                    : this._promiseHandle(e);
                },
              },
              {
                key: "asMiddleware",
                value: function () {
                  var e = this;
                  return (function () {
                    var t = Object(o.a)(
                      k().mark(function t(n, a, s, u) {
                        var c, l, h, d, f;
                        return k().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (t.next = 3),
                                    r._runAllMiddleware(n, a, e._middleware)
                                  );
                                case 3:
                                  if (
                                    ((c = t.sent),
                                    (l = Object(i.a)(c, 3)),
                                    (h = l[0]),
                                    (d = l[1]),
                                    (f = l[2]),
                                    !d)
                                  ) {
                                    t.next = 12;
                                    break;
                                  }
                                  return (t.next = 11), r._runReturnHandlers(f);
                                case 11:
                                  return t.abrupt("return", u(h));
                                case 12:
                                  return t.abrupt(
                                    "return",
                                    s(
                                      (function () {
                                        var e = Object(o.a)(
                                          k().mark(function e(t) {
                                            return k().wrap(
                                              function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        (e.prev = 0),
                                                        (e.next = 3),
                                                        r._runReturnHandlers(f)
                                                      );
                                                    case 3:
                                                      e.next = 8;
                                                      break;
                                                    case 5:
                                                      return (
                                                        (e.prev = 5),
                                                        (e.t0 = e.catch(0)),
                                                        e.abrupt(
                                                          "return",
                                                          t(e.t0)
                                                        )
                                                      );
                                                    case 8:
                                                      return e.abrupt(
                                                        "return",
                                                        t()
                                                      );
                                                    case 9:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              },
                                              e,
                                              null,
                                              [[0, 5]]
                                            );
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  );
                                case 15:
                                  return (
                                    (t.prev = 15),
                                    (t.t0 = t.catch(0)),
                                    t.abrupt("return", u(t.t0))
                                  );
                                case 18:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 15]]
                        );
                      })
                    );
                    return function (e, r, n, i) {
                      return t.apply(this, arguments);
                    };
                  })();
                },
              },
              {
                key: "_handleBatch",
                value: (function () {
                  var e = Object(o.a)(
                    k().mark(function e(t, r) {
                      var n;
                      return k().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  Promise.all(
                                    t.map(this._promiseHandle.bind(this))
                                  )
                                );
                              case 3:
                                if (((n = e.sent), !r)) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return", r(null, n));
                              case 6:
                                return e.abrupt("return", n);
                              case 9:
                                if (((e.prev = 9), (e.t0 = e.catch(0)), !r)) {
                                  e.next = 13;
                                  break;
                                }
                                return e.abrupt("return", r(e.t0));
                              case 13:
                                throw e.t0;
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 9]]
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_promiseHandle",
                value: function (e) {
                  var t = this;
                  return new Promise(function (r) {
                    t._handle(e, function (e, t) {
                      r(t);
                    });
                  });
                },
              },
              {
                key: "_handle",
                value: (function () {
                  var e = Object(o.a)(
                    k().mark(function e(t, r) {
                      var n, i, o, a, s;
                      return k().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  t &&
                                  !Array.isArray(t) &&
                                  "object" === typeof t
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  (n = new C({
                                    code: -32603,
                                    message: "request must be plain object",
                                  })),
                                  e.abrupt(
                                    "return",
                                    r(n, {
                                      id: void 0,
                                      jsonrpc: "2.0",
                                      error: n,
                                    })
                                  )
                                );
                              case 3:
                                if ("string" === typeof t.method) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (i = new C({
                                    code: -32603,
                                    message: "method must be string",
                                  })),
                                  e.abrupt(
                                    "return",
                                    r(i, { id: t.id, jsonrpc: "2.0", error: i })
                                  )
                                );
                              case 6:
                                return (
                                  (o = I({}, t)),
                                  (a = { id: o.id, jsonrpc: o.jsonrpc }),
                                  (s = null),
                                  (e.prev = 9),
                                  (e.next = 12),
                                  this._processRequest(o, a)
                                );
                              case 12:
                                e.next = 17;
                                break;
                              case 14:
                                (e.prev = 14), (e.t0 = e.catch(9)), (s = e.t0);
                              case 17:
                                return (
                                  s &&
                                    (delete a.result,
                                    a.error ||
                                      (a.error = Object(b.serializeError)(s))),
                                  e.abrupt("return", r(s, a))
                                );
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[9, 14]]
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_processRequest",
                value: (function () {
                  var e = Object(o.a)(
                    k().mark(function e(t, n) {
                      var o, a, s, u, c;
                      return k().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  r._runAllMiddleware(t, n, this._middleware)
                                );
                              case 2:
                                return (
                                  (o = e.sent),
                                  (a = Object(i.a)(o, 3)),
                                  (s = a[0]),
                                  (u = a[1]),
                                  (c = a[2]),
                                  r._checkForCompletion(t, n, u),
                                  (e.next = 10),
                                  r._runReturnHandlers(c)
                                );
                              case 10:
                                if (!s) {
                                  e.next = 12;
                                  break;
                                }
                                throw s;
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ],
            [
              {
                key: "_runAllMiddleware",
                value: (function () {
                  var e = Object(o.a)(
                    k().mark(function e(t, o, a) {
                      var s, u, c, l, h, d, f, p;
                      return k().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (s = []),
                                  (u = null),
                                  (c = !1),
                                  (l = Object(n.a)(a)),
                                  (e.prev = 4),
                                  l.s();
                              case 6:
                                if ((h = l.n()).done) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  (d = h.value),
                                  (e.next = 10),
                                  r._runMiddleware(t, o, d, s)
                                );
                              case 10:
                                if (
                                  ((f = e.sent),
                                  (p = Object(i.a)(f, 2)),
                                  (u = p[0]),
                                  !(c = p[1]))
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                return e.abrupt("break", 18);
                              case 16:
                                e.next = 6;
                                break;
                              case 18:
                                e.next = 23;
                                break;
                              case 20:
                                (e.prev = 20), (e.t0 = e.catch(4)), l.e(e.t0);
                              case 23:
                                return (e.prev = 23), l.f(), e.finish(23);
                              case 26:
                                return e.abrupt("return", [u, c, s.reverse()]);
                              case 27:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[4, 20, 23, 26]]
                      );
                    })
                  );
                  return function (t, r, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_runMiddleware",
                value: function (e, t, r, n) {
                  return new Promise(function (i) {
                    var o = function (e) {
                      var r = e || t.error;
                      r && (t.error = Object(b.serializeError)(r)), i([r, !0]);
                    };
                    try {
                      r(
                        e,
                        t,
                        function (e) {
                          t.error
                            ? o(t.error)
                            : (e &&
                                ("function" !== typeof e &&
                                  o(
                                    new C({
                                      code: -32603,
                                      message:
                                        "JRPCEngine: 'next' return handlers must be functions",
                                    })
                                  ),
                                n.push(e)),
                              i([null, !1]));
                        },
                        o
                      );
                    } catch (a) {
                      o(a);
                    }
                  });
                },
              },
              {
                key: "_runReturnHandlers",
                value: (function () {
                  var e = Object(o.a)(
                    k().mark(function e(t) {
                      var r, i, o;
                      return k().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (r = Object(n.a)(t)),
                                  (e.prev = 1),
                                  (o = k().mark(function e() {
                                    var t;
                                    return k().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (t = i.value),
                                              (e.next = 3),
                                              new Promise(function (e, r) {
                                                t(function (t) {
                                                  return t ? r(t) : e();
                                                });
                                              })
                                            );
                                          case 3:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })),
                                  r.s();
                              case 4:
                                if ((i = r.n()).done) {
                                  e.next = 8;
                                  break;
                                }
                                return e.delegateYield(o(), "t0", 6);
                              case 6:
                                e.next = 4;
                                break;
                              case 8:
                                e.next = 13;
                                break;
                              case 10:
                                (e.prev = 10), (e.t1 = e.catch(1)), r.e(e.t1);
                              case 13:
                                return (e.prev = 13), r.f(), e.finish(13);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 10, 13, 16]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_checkForCompletion",
                value: function (e, t, r) {
                  if (!("result" in t) && !("error" in t))
                    throw new C({
                      code: -32603,
                      message: "Response has no error or result for request",
                    });
                  if (!r)
                    throw new C({
                      code: -32603,
                      message: "Nothing ended request",
                    });
                },
              },
            ]
          ),
          r
        );
      })(R);
      var U = (function (e) {
        Object(l.a)(r, e);
        var t = Object(h.a)(r);
        function r(e) {
          var n;
          Object(s.a)(this, r);
          var i = e.parent,
            o = e.name;
          return (
            (n = t.call(this, { objectMode: !0 })),
            f()(Object(c.a)(n), "_parent", void 0),
            f()(Object(c.a)(n), "_name", void 0),
            (n._parent = i),
            (n._name = o),
            n
          );
        }
        return (
          Object(u.a)(r, [
            { key: "_read", value: function () {} },
            {
              key: "_write",
              value: function (e, t, r) {
                this._parent.push({ name: this._name, data: e }), r();
              },
            },
          ]),
          r
        );
      })(p.Duplex);
      function B(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(r), !0).forEach(function (t) {
                f()(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : B(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var K = Symbol("IGNORE_SUBSTREAM"),
        q = (function (e) {
          Object(l.a)(r, e);
          var t = Object(h.a)(r);
          function r() {
            var e;
            Object(s.a)(this, r);
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (
              (e = t.call(this, F(F({}, n), {}, { objectMode: !0 }))),
              f()(Object(c.a)(e), "_substreams", void 0),
              f()(Object(c.a)(e), "getStream", void 0),
              (e._substreams = {}),
              e
            );
          }
          return (
            Object(u.a)(r, [
              {
                key: "createStream",
                value: function (e) {
                  if (!e)
                    throw new Error("ObjectMultiplex - name must not be empty");
                  if (this._substreams[e])
                    throw new Error(
                      'ObjectMultiplex - Substream for name "'.concat(
                        e,
                        '" already exists'
                      )
                    );
                  var t = new U({ parent: this, name: e });
                  return (
                    (this._substreams[e] = t),
                    (function (e, t) {
                      var r = M()(t);
                      _()(e, { readable: !1 }, r), _()(e, { writable: !1 }, r);
                    })(this, function (e) {
                      return t.destroy(e || void 0);
                    }),
                    t
                  );
                },
              },
              {
                key: "ignoreStream",
                value: function (e) {
                  if (!e)
                    throw new Error("ObjectMultiplex - name must not be empty");
                  if (this._substreams[e])
                    throw new Error(
                      'ObjectMultiplex - Substream for name "'.concat(
                        e,
                        '" already exists'
                      )
                    );
                  this._substreams[e] = K;
                },
              },
              { key: "_read", value: function () {} },
              {
                key: "_write",
                value: function (e, t, r) {
                  var n = e.name,
                    i = e.data;
                  if (!n)
                    return (
                      window.console.warn(
                        'ObjectMultiplex - malformed chunk without name "'.concat(
                          e,
                          '"'
                        )
                      ),
                      r()
                    );
                  var o = this._substreams[n];
                  return o
                    ? (o !== K && o.push(i), r())
                    : (window.console.warn(
                        'ObjectMultiplex - orphaned data for stream "'.concat(
                          n,
                          '"'
                        )
                      ),
                      r());
                },
              },
            ]),
            r
          );
        })(p.Duplex);
      function H(e) {
        var t = new q();
        return (
          (t.getStream = function (e) {
            return this._substreams[e]
              ? this._substreams[e]
              : this.createStream(e);
          }),
          S()(e, t, e, function (e) {
            e && window.console.error(e);
          }),
          t
        );
      }
    },
    1937: function (e, t, r) {
      ((t = e.exports = r(1404)).Stream = t),
        (t.Readable = t),
        (t.Writable = r(1408)),
        (t.Duplex = r(1080)),
        (t.Transform = r(1409)),
        (t.PassThrough = r(1943)),
        (t.finished = r(1258)),
        (t.pipeline = r(1944));
    },
    1939: function (e, t, r) {
      "use strict";
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var a = r(8).Buffer,
        s = r(1940).inspect,
        u = (s && s.custom) || "inspect";
      e.exports = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        var t, r, c;
        return (
          (t = e),
          (r = [
            {
              key: "push",
              value: function (e) {
                var t = { data: e, next: null };
                this.length > 0 ? (this.tail.next = t) : (this.head = t),
                  (this.tail = t),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (e) {
                var t = { data: e, next: this.head };
                0 === this.length && (this.tail = t),
                  (this.head = t),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var e = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (e) {
                if (0 === this.length) return "";
                for (var t = this.head, r = "" + t.data; (t = t.next); )
                  r += e + t.data;
                return r;
              },
            },
            {
              key: "concat",
              value: function (e) {
                if (0 === this.length) return a.alloc(0);
                for (
                  var t, r, n, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0;
                  o;

                )
                  (t = o.data),
                    (r = i),
                    (n = s),
                    a.prototype.copy.call(t, r, n),
                    (s += o.data.length),
                    (o = o.next);
                return i;
              },
            },
            {
              key: "consume",
              value: function (e, t) {
                var r;
                return (
                  e < this.head.data.length
                    ? ((r = this.head.data.slice(0, e)),
                      (this.head.data = this.head.data.slice(e)))
                    : (r =
                        e === this.head.data.length
                          ? this.shift()
                          : t
                          ? this._getString(e)
                          : this._getBuffer(e)),
                  r
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (e) {
                var t = this.head,
                  r = 1,
                  n = t.data;
                for (e -= n.length; (t = t.next); ) {
                  var i = t.data,
                    o = e > i.length ? i.length : e;
                  if (
                    (o === i.length ? (n += i) : (n += i.slice(0, e)),
                    0 === (e -= o))
                  ) {
                    o === i.length
                      ? (++r,
                        t.next
                          ? (this.head = t.next)
                          : (this.head = this.tail = null))
                      : ((this.head = t), (t.data = i.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), n;
              },
            },
            {
              key: "_getBuffer",
              value: function (e) {
                var t = a.allocUnsafe(e),
                  r = this.head,
                  n = 1;
                for (r.data.copy(t), e -= r.data.length; (r = r.next); ) {
                  var i = r.data,
                    o = e > i.length ? i.length : e;
                  if ((i.copy(t, t.length - e, 0, o), 0 === (e -= o))) {
                    o === i.length
                      ? (++n,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = i.slice(o)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), t;
              },
            },
            {
              key: u,
              value: function (e, t) {
                return s(
                  this,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? n(Object(r), !0).forEach(function (t) {
                            i(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : n(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t)
                            );
                          });
                    }
                    return e;
                  })({}, t, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]) && o(t.prototype, r),
          c && o(t, c),
          e
        );
      })();
    },
    1941: function (e, t, r) {
      "use strict";
      (function (t) {
        var n;
        function i(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        var o = r(1258),
          a = Symbol("lastResolve"),
          s = Symbol("lastReject"),
          u = Symbol("error"),
          c = Symbol("ended"),
          l = Symbol("lastPromise"),
          h = Symbol("handlePromise"),
          d = Symbol("stream");
        function f(e, t) {
          return { value: e, done: t };
        }
        function p(e) {
          var t = e[a];
          if (null !== t) {
            var r = e[d].read();
            null !== r &&
              ((e[l] = null), (e[a] = null), (e[s] = null), t(f(r, !1)));
          }
        }
        function v(e) {
          t.nextTick(p, e);
        }
        var m = Object.getPrototypeOf(function () {}),
          y = Object.setPrototypeOf(
            (i(
              (n = {
                get stream() {
                  return this[d];
                },
                next: function () {
                  var e = this,
                    r = this[u];
                  if (null !== r) return Promise.reject(r);
                  if (this[c]) return Promise.resolve(f(void 0, !0));
                  if (this[d].destroyed)
                    return new Promise(function (r, n) {
                      t.nextTick(function () {
                        e[u] ? n(e[u]) : r(f(void 0, !0));
                      });
                    });
                  var n,
                    i = this[l];
                  if (i)
                    n = new Promise(
                      (function (e, t) {
                        return function (r, n) {
                          e.then(function () {
                            t[c] ? r(f(void 0, !0)) : t[h](r, n);
                          }, n);
                        };
                      })(i, this)
                    );
                  else {
                    var o = this[d].read();
                    if (null !== o) return Promise.resolve(f(o, !1));
                    n = new Promise(this[h]);
                  }
                  return (this[l] = n), n;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            i(n, "return", function () {
              var e = this;
              return new Promise(function (t, r) {
                e[d].destroy(null, function (e) {
                  e ? r(e) : t(f(void 0, !0));
                });
              });
            }),
            n),
            m
          );
        e.exports = function (e) {
          var t,
            r = Object.create(
              y,
              (i((t = {}), d, { value: e, writable: !0 }),
              i(t, a, { value: null, writable: !0 }),
              i(t, s, { value: null, writable: !0 }),
              i(t, u, { value: null, writable: !0 }),
              i(t, c, { value: e._readableState.endEmitted, writable: !0 }),
              i(t, h, {
                value: function (e, t) {
                  var n = r[d].read();
                  n
                    ? ((r[l] = null), (r[a] = null), (r[s] = null), e(f(n, !1)))
                    : ((r[a] = e), (r[s] = t));
                },
                writable: !0,
              }),
              t)
            );
          return (
            (r[l] = null),
            o(e, function (e) {
              if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = r[s];
                return (
                  null !== t &&
                    ((r[l] = null), (r[a] = null), (r[s] = null), t(e)),
                  void (r[u] = e)
                );
              }
              var n = r[a];
              null !== n &&
                ((r[l] = null), (r[a] = null), (r[s] = null), n(f(void 0, !0))),
                (r[c] = !0);
            }),
            e.on("readable", v.bind(null, r)),
            r
          );
        };
      }.call(this, r(25)));
    },
    1942: function (e, t) {
      e.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    1943: function (e, t, r) {
      "use strict";
      e.exports = i;
      var n = r(1409);
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        n.call(this, e);
      }
      r(15)(i, n),
        (i.prototype._transform = function (e, t, r) {
          r(null, e);
        });
    },
    1944: function (e, t, r) {
      "use strict";
      var n;
      var i = r(1079).codes,
        o = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;
      function s(e) {
        if (e) throw e;
      }
      function u(e, t, i, o) {
        o = (function (e) {
          var t = !1;
          return function () {
            t || ((t = !0), e.apply(void 0, arguments));
          };
        })(o);
        var s = !1;
        e.on("close", function () {
          s = !0;
        }),
          void 0 === n && (n = r(1258)),
          n(e, { readable: t, writable: i }, function (e) {
            if (e) return o(e);
            (s = !0), o();
          });
        var u = !1;
        return function (t) {
          if (!s && !u)
            return (
              (u = !0),
              (function (e) {
                return e.setHeader && "function" === typeof e.abort;
              })(e)
                ? e.abort()
                : "function" === typeof e.destroy
                ? e.destroy()
                : void o(t || new a("pipe"))
            );
        };
      }
      function c(e) {
        e();
      }
      function l(e, t) {
        return e.pipe(t);
      }
      function h(e) {
        return e.length
          ? "function" !== typeof e[e.length - 1]
            ? s
            : e.pop()
          : s;
      }
      e.exports = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var n,
          i = h(t);
        if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
          throw new o("streams");
        var a = t.map(function (e, r) {
          var o = r < t.length - 1;
          return u(e, o, r > 0, function (e) {
            n || (n = e), e && a.forEach(c), o || (a.forEach(c), i(n));
          });
        });
        return t.reduce(l);
      };
    },
    1945: function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return b;
        });
        var n = r(4),
          i = r(5),
          o = r(13),
          a = r(50),
          s = r(36),
          u = r(9),
          c = r(10),
          l = r(1130),
          h = r(107),
          d = r.n(h),
          f = r(1078),
          p = r.n(f),
          v = r(1946),
          m = r.n(v),
          y = r(458),
          g = r.n(y),
          b = function () {
            return d()(32).toString("hex");
          };
        URL, m.a;
        g.a;
      }.call(this, r(8).Buffer));
    },
    1946: function (e, t, r) {
      (e.exports = r(1947).default), (e.exports.default = e.exports);
    },
    1947: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(1948);
        function i(t, r) {
          return (
            void 0 === r && (r = "utf8"),
            e.isBuffer(t)
              ? a(t.toString("base64"))
              : a(e.from(t, r).toString("base64"))
          );
        }
        function o(e) {
          return (
            (e = e.toString()),
            n.default(e).replace(/\-/g, "+").replace(/_/g, "/")
          );
        }
        function a(e) {
          return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
        }
        var s = i;
        (s.encode = i),
          (s.decode = function (t, r) {
            return (
              void 0 === r && (r = "utf8"), e.from(o(t), "base64").toString(r)
            );
          }),
          (s.toBase64 = o),
          (s.fromBase64 = a),
          (s.toBuffer = function (t) {
            return e.from(o(t), "base64");
          }),
          (t.default = s);
      }.call(this, r(8).Buffer));
    },
    1948: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (t) {
            var r = t.length,
              n = r % 4;
            if (!n) return t;
            var i = r,
              o = 4 - n,
              a = r + o,
              s = e.alloc(a);
            for (s.write(t); o--; ) s.write("=", i++);
            return s.toString();
          });
      }.call(this, r(8).Buffer));
    },
    1949: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getMessageFromCode =
          t.serializeError =
          t.EthereumProviderError =
          t.EthereumRpcError =
          t.ethErrors =
          t.errorCodes =
            void 0);
      var n = r(1259);
      Object.defineProperty(t, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return n.EthereumRpcError;
        },
      }),
        Object.defineProperty(t, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return n.EthereumProviderError;
          },
        });
      var i = r(1410);
      Object.defineProperty(t, "serializeError", {
        enumerable: !0,
        get: function () {
          return i.serializeError;
        },
      }),
        Object.defineProperty(t, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return i.getMessageFromCode;
          },
        });
      var o = r(1950);
      Object.defineProperty(t, "ethErrors", {
        enumerable: !0,
        get: function () {
          return o.ethErrors;
        },
      });
      var a = r(1260);
      Object.defineProperty(t, "errorCodes", {
        enumerable: !0,
        get: function () {
          return a.errorCodes;
        },
      });
    },
    1950: function (e, t, r) {
      "use strict";
      var n = r(70);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ethErrors = void 0);
      var i = r(1259),
        o = r(1410),
        a = r(1260);
      function s(e, t) {
        var r = c(t),
          a = n(r, 2),
          s = a[0],
          u = a[1];
        return new i.EthereumRpcError(e, s || o.getMessageFromCode(e), u);
      }
      function u(e, t) {
        var r = c(t),
          a = n(r, 2),
          s = a[0],
          u = a[1];
        return new i.EthereumProviderError(e, s || o.getMessageFromCode(e), u);
      }
      function c(e) {
        if (e) {
          if ("string" === typeof e) return [e];
          if ("object" === typeof e && !Array.isArray(e)) {
            var t = e.message,
              r = e.data;
            if (t && "string" !== typeof t)
              throw new Error("Must specify string message.");
            return [t || void 0, r];
          }
        }
        return [];
      }
      t.ethErrors = {
        rpc: {
          parse: function (e) {
            return s(a.errorCodes.rpc.parse, e);
          },
          invalidRequest: function (e) {
            return s(a.errorCodes.rpc.invalidRequest, e);
          },
          invalidParams: function (e) {
            return s(a.errorCodes.rpc.invalidParams, e);
          },
          methodNotFound: function (e) {
            return s(a.errorCodes.rpc.methodNotFound, e);
          },
          internal: function (e) {
            return s(a.errorCodes.rpc.internal, e);
          },
          server: function (e) {
            if (!e || "object" !== typeof e || Array.isArray(e))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            var t = e.code;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return s(t, e);
          },
          invalidInput: function (e) {
            return s(a.errorCodes.rpc.invalidInput, e);
          },
          resourceNotFound: function (e) {
            return s(a.errorCodes.rpc.resourceNotFound, e);
          },
          resourceUnavailable: function (e) {
            return s(a.errorCodes.rpc.resourceUnavailable, e);
          },
          transactionRejected: function (e) {
            return s(a.errorCodes.rpc.transactionRejected, e);
          },
          methodNotSupported: function (e) {
            return s(a.errorCodes.rpc.methodNotSupported, e);
          },
          limitExceeded: function (e) {
            return s(a.errorCodes.rpc.limitExceeded, e);
          },
        },
        provider: {
          userRejectedRequest: function (e) {
            return u(a.errorCodes.provider.userRejectedRequest, e);
          },
          unauthorized: function (e) {
            return u(a.errorCodes.provider.unauthorized, e);
          },
          unsupportedMethod: function (e) {
            return u(a.errorCodes.provider.unsupportedMethod, e);
          },
          disconnected: function (e) {
            return u(a.errorCodes.provider.disconnected, e);
          },
          chainDisconnected: function (e) {
            return u(a.errorCodes.provider.chainDisconnected, e);
          },
          custom: function (e) {
            if (!e || "object" !== typeof e || Array.isArray(e))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            var t = e.code,
              r = e.message,
              n = e.data;
            if (!r || "string" !== typeof r)
              throw new Error('"message" must be a nonempty string');
            return new i.EthereumProviderError(t, r, n);
          },
        },
      };
    },
    1951: function (e, t) {
      e.exports = function e(t, r) {
        if (t && r) return e(t)(r);
        if ("function" !== typeof t)
          throw new TypeError("need wrapper function");
        return (
          Object.keys(t).forEach(function (e) {
            n[e] = t[e];
          }),
          n
        );
        function n() {
          for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
            e[r] = arguments[r];
          var n = t.apply(this, e),
            i = e[e.length - 1];
          return (
            "function" === typeof n &&
              n !== i &&
              Object.keys(i).forEach(function (e) {
                n[e] = i[e];
              }),
            n
          );
        }
      };
    },
    1953: function (e, t, r) {
      "use strict";
      (function (e) {
        r.d(t, "a", function () {
          return F;
        });
        var n = r(11),
          i = r(69),
          o = r(5),
          a = r(4),
          s = r(13),
          u = r(9),
          c = r(10),
          l = r(1130),
          h = r(1078),
          d = r.n(h),
          f = r(1954),
          p = r(1402),
          v = r(1955),
          m = r.n(v),
          y = r(157),
          g = r(1231),
          b = r.n(g),
          w = r(27),
          _ = r(1257),
          O = r.n(_),
          M = r(458),
          E = r.n(M);
        function S() {
          S = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            r = t.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            i = n.iterator || "@@iterator",
            o = n.asyncIterator || "@@asyncIterator",
            a = n.toStringTag || "@@toStringTag";
          function s(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            s({}, "");
          } catch (j) {
            s = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function u(e, t, r, n) {
            var i = t && t.prototype instanceof h ? t : h,
              o = Object.create(i.prototype),
              a = new M(n || []);
            return (
              (o._invoke = (function (e, t, r) {
                var n = "suspendedStart";
                return function (i, o) {
                  if ("executing" === n)
                    throw new Error("Generator is already running");
                  if ("completed" === n) {
                    if ("throw" === i) throw o;
                    return k();
                  }
                  for (r.method = i, r.arg = o; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var s = w(a, r);
                      if (s) {
                        if (s === l) continue;
                        return s;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if ("suspendedStart" === n)
                        throw ((n = "completed"), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var u = c(e, t, r);
                    if ("normal" === u.type) {
                      if (
                        ((n = r.done ? "completed" : "suspendedYield"),
                        u.arg === l)
                      )
                        continue;
                      return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type &&
                      ((n = "completed"),
                      (r.method = "throw"),
                      (r.arg = u.arg));
                  }
                };
              })(e, r, a)),
              o
            );
          }
          function c(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (j) {
              return { type: "throw", arg: j };
            }
          }
          e.wrap = u;
          var l = {};
          function h() {}
          function d() {}
          function f() {}
          var p = {};
          s(p, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            m = v && v(v(E([])));
          m && m !== t && r.call(m, i) && (p = m);
          var y = (f.prototype = h.prototype = Object.create(p));
          function g(e) {
            ["next", "throw", "return"].forEach(function (t) {
              s(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function b(e, t) {
            var n;
            this._invoke = function (i, o) {
              function a() {
                return new t(function (n, a) {
                  !(function n(i, o, a, s) {
                    var u = c(e[i], e, o);
                    if ("throw" !== u.type) {
                      var l = u.arg,
                        h = l.value;
                      return h && "object" == typeof h && r.call(h, "__await")
                        ? t.resolve(h.__await).then(
                            function (e) {
                              n("next", e, a, s);
                            },
                            function (e) {
                              n("throw", e, a, s);
                            }
                          )
                        : t.resolve(h).then(
                            function (e) {
                              (l.value = e), a(l);
                            },
                            function (e) {
                              return n("throw", e, a, s);
                            }
                          );
                    }
                    s(u.arg);
                  })(i, o, n, a);
                });
              }
              return (n = n ? n.then(a, a) : a());
            };
          }
          function w(e, t) {
            var r = e.iterator[t.method];
            if (void 0 === r) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  w(e, t),
                  "throw" === t.method)
                )
                  return l;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return l;
            }
            var n = c(r, e.iterator, t.arg);
            if ("throw" === n.type)
              return (
                (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
              );
            var i = n.arg;
            return i
              ? i.done
                ? ((t[e.resultName] = i.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  l)
                : i
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                l);
          }
          function _(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function O(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function M(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(_, this),
              this.reset(!0);
          }
          function E(e) {
            if (e) {
              var t = e[i];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  o = function t() {
                    for (; ++n < e.length; )
                      if (r.call(e, n))
                        return (t.value = e[n]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (o.next = o);
              }
            }
            return { next: k };
          }
          function k() {
            return { value: void 0, done: !0 };
          }
          return (
            (d.prototype = f),
            s(y, "constructor", f),
            s(f, "constructor", d),
            (d.displayName = s(f, a, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === d || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, f)
                  : ((e.__proto__ = f), s(e, a, "GeneratorFunction")),
                (e.prototype = Object.create(y)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            g(b.prototype),
            s(b.prototype, o, function () {
              return this;
            }),
            (e.AsyncIterator = b),
            (e.async = function (t, r, n, i, o) {
              void 0 === o && (o = Promise);
              var a = new b(u(t, r, n, i), o);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            g(y),
            s(y, a, "Generator"),
            s(y, i, function () {
              return this;
            }),
            s(y, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = E),
            (M.prototype = {
              constructor: M,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(O),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      r.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function n(r, n) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (t.next = r),
                    n && ((t.method = "next"), (t.arg = void 0)),
                    !!n
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    a = o.completion;
                  if ("root" === o.tryLoc) return n("end");
                  if (o.tryLoc <= this.prev) {
                    var s = r.call(o, "catchLoc"),
                      u = r.call(o, "finallyLoc");
                    if (s && u) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (
                    i.tryLoc <= this.prev &&
                    r.call(i, "finallyLoc") &&
                    this.prev < i.finallyLoc
                  ) {
                    var o = i;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  l
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), O(r), l;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var i = n.arg;
                      O(r);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, r) {
                return (
                  (this.delegate = {
                    iterator: E(e),
                    resultName: t,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  l
                );
              },
            }),
            e
          );
        }
        var k = O.a.getLogger("torus.js");
        k.disableAll();
        var j = (function (e) {
            Object(u.a)(r, e);
            var t = Object(c.a)(r);
            function r(e) {
              var n;
              Object(a.a)(this, r);
              var i = e.errors,
                o = e.responses,
                u = e.predicate;
              return (
                (n = t.call(this, "Unable to resolve enough promises.")),
                d()(Object(s.a)(n), "errors", void 0),
                d()(Object(s.a)(n), "responses", void 0),
                d()(Object(s.a)(n), "predicate", void 0),
                (n.errors = i),
                (n.responses = o),
                (n.predicate = u),
                n
              );
            }
            return Object(o.a)(r);
          })(Object(l.a)(Error)),
          x = function (e, t) {
            return new Promise(function (r, n) {
              var i,
                o = 0,
                a = { resolved: !1 },
                s = new Array(e.length).fill(void 0),
                u = new Array(e.length).fill(void 0);
              return e.forEach(function (c, l) {
                return c
                  .then(function (e) {
                    u[l] = e;
                  })
                  .catch(function (e) {
                    s[l] = e;
                  })
                  .finally(function () {
                    if (!a.resolved)
                      return t(u.slice(0), a)
                        .then(function (e) {
                          (a.resolved = !0), r(e);
                        })
                        .catch(function (e) {
                          i = e;
                        })
                        .finally(function () {
                          if ((o += 1) === e.length) {
                            var t = Object.values(
                              u.reduce(function (e, t) {
                                if (t) {
                                  var r,
                                    n = t.id,
                                    i = t.error;
                                  (null === i ||
                                  void 0 === i ||
                                  null === (r = i.data) ||
                                  void 0 === r
                                    ? void 0
                                    : r.length) > 0 &&
                                    (i.data.startsWith(
                                      "Error occurred while verifying params"
                                    )
                                      ? (e[n] =
                                          (o = i.data).charAt(0).toUpperCase() +
                                          o.slice(1))
                                      : (e[n] = i.data));
                                }
                                var o;
                                return e;
                              }, {})
                            );
                            if (t.length > 0) {
                              var r =
                                t.length > 1
                                  ? "\n".concat(
                                      t
                                        .map(function (e) {
                                          return "\u2022 ".concat(e);
                                        })
                                        .join("\n")
                                    )
                                  : t[0];
                              n(new Error(r));
                            } else {
                              var a;
                              n(
                                new j({
                                  errors: s,
                                  responses: u,
                                  predicate:
                                    (null === (a = i) || void 0 === a
                                      ? void 0
                                      : a.message) || i,
                                })
                              );
                            }
                          }
                        });
                  });
              });
            });
          };
        function P(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function A(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? P(Object(r), !0).forEach(function (t) {
                  d()(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : P(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        var R = (function (e) {
            Object(u.a)(r, e);
            var t = Object(c.a)(r);
            function r() {
              return Object(a.a)(this, r), t.apply(this, arguments);
            }
            return Object(o.a)(r);
          })(Object(l.a)(Error)),
          C = function e(t, r) {
            var n = t;
            if (
              ("number" === typeof n &&
                (n = Array.from({ length: n }, function (e, t) {
                  return t;
                })),
              r > n.length || r <= 0)
            )
              return [];
            if (r === n.length) return [n];
            if (1 === r)
              return n.reduce(function (e, t) {
                return [].concat(Object(i.a)(e), [[t]]);
              }, []);
            for (var o = [], a = [], s = 0; s <= n.length - r + 1; s += 1) {
              a = e(n.slice(s + 1), r - 1);
              for (var u = 0; u < a.length; u += 1)
                o.push([n[s]].concat(Object(i.a)(a[u])));
            }
            return o;
          },
          T = function (e, t) {
            for (var r = {}, n = 0; n < e.length; n += 1) {
              var i = b()(e[n]);
              if (((r[i] = r[i] ? r[i] + 1 : 1), r[i] === t)) return e[n];
            }
          },
          L = (function () {
            var e = Object(n.a)(
              S().mark(function e(t, r, n) {
                var i;
                return S().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i = t.map(function (e) {
                            return Object(p.c)(
                              e,
                              Object(p.a)("VerifierLookupRequest", {
                                verifier: r,
                                verifier_id: n.toString(),
                              })
                            ).catch(function (e) {
                              return k.error("lookup request failed", e);
                            });
                          })),
                          e.abrupt(
                            "return",
                            x(i, function (e) {
                              var r = e.filter(function (e) {
                                  return e;
                                }),
                                n = T(
                                  r.map(function (e) {
                                    return e && e.error;
                                  }),
                                  1 + ~~(t.length / 2)
                                ),
                                i = T(
                                  r.map(function (e) {
                                    return e && e.result;
                                  }),
                                  1 + ~~(t.length / 2)
                                );
                              return i || n
                                ? Promise.resolve({
                                    keyResult: i,
                                    errorResult: n,
                                  })
                                : Promise.reject(
                                    new Error(
                                      "invalid results ".concat(
                                        JSON.stringify(e)
                                      )
                                    )
                                  );
                            })
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, r, n) {
              return e.apply(this, arguments);
            };
          })(),
          N = function (e, t, r, n) {
            return new Promise(function (i, o) {
              setTimeout(function () {
                L(e, t, r).then(i).catch(o);
              }, n);
            });
          },
          I = (function () {
            var e = Object(n.a)(
              S().mark(function e(t) {
                var r, n, i, o, a, s, u, c, l, h, d, f;
                return S().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = t.endpoints),
                            (n = t.torusNodePubs),
                            (i = t.lastPoint),
                            (o = t.firstPoint),
                            (a = t.verifier),
                            (s = t.verifierId),
                            (u = t.signerHost),
                            (c = t.network),
                            void 0 === i
                              ? ((l = Math.floor(Math.random() * r.length)),
                                (h = l))
                              : (l = i % r.length),
                            l !== o)
                          ) {
                            e.next = 4;
                            break;
                          }
                          throw new Error("Looped through all");
                        case 4:
                          return (
                            void 0 !== o && (h = o),
                            (d = Object(p.a)("KeyAssign", {
                              verifier: a,
                              verifier_id: s.toString(),
                            })),
                            (e.prev = 6),
                            (e.next = 9),
                            Object(p.c)(
                              u,
                              d,
                              {
                                headers: {
                                  pubKeyX: n[l].X,
                                  pubKeyY: n[l].Y,
                                  network: c,
                                },
                              },
                              { useAPIKey: !0 }
                            )
                          );
                        case 9:
                          return (
                            (f = e.sent),
                            (e.next = 12),
                            Object(p.c)(r[l], A(A({}, d), f), {
                              headers: {
                                "Content-Type":
                                  "application/json; charset=utf-8",
                              },
                            })
                          );
                        case 12:
                          return e.abrupt("return", e.sent);
                        case 15:
                          if (
                            ((e.prev = 15),
                            (e.t0 = e.catch(6)),
                            k.error(e.t0),
                            ![
                              "Timed out",
                              "TypeError: Failed to fetch",
                              "TypeError: cancelled",
                              "TypeError: NetworkError when attempting to fetch resource.",
                            ].includes(e.t0.message))
                          ) {
                            e.next = 21;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            I({
                              endpoints: r,
                              torusNodePubs: n,
                              lastPoint: l + 1,
                              firstPoint: h,
                              verifier: a,
                              verifierId: s,
                              signerHost: u,
                              network: c,
                            })
                          );
                        case 21:
                          throw new Error(
                            "Sorry, the Torus Network that powers Web3Auth is currently very busy.\n    We will generate your key in time. Pls try again later. \n\n    ".concat(
                              e.t0.message || ""
                            )
                          );
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[6, 15]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        function D(e) {
          var t = E()("keccak256").update(e).digest().toString("hex");
          return "0x".concat(t);
        }
        function U(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function B(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? U(Object(r), !0).forEach(function (t) {
                  d()(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : U(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        var F = (function () {
          function t() {
            Object(a.a)(this, t);
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.enableOneKey,
              n = void 0 !== r && r,
              i = e.metadataHost,
              o = void 0 === i ? "https://metadata.tor.us" : i,
              s = e.allowHost,
              u = void 0 === s ? "https://signer.tor.us/api/allow" : s,
              c = e.signerHost,
              l = void 0 === c ? "https://signer.tor.us/api/sign" : c,
              h = e.serverTimeOffset,
              f = void 0 === h ? 0 : h,
              p = e.network,
              v = void 0 === p ? "mainnet" : p;
            d()(this, "metadataHost", void 0),
              d()(this, "allowHost", void 0),
              d()(this, "serverTimeOffset", void 0),
              d()(this, "enableOneKey", void 0),
              d()(this, "signerHost", void 0),
              d()(this, "network", void 0),
              d()(this, "ec", void 0),
              (this.ec = new y.ec("secp256k1")),
              (this.metadataHost = o),
              (this.allowHost = u),
              (this.enableOneKey = n),
              (this.serverTimeOffset = f || 0),
              (this.signerHost = l),
              (this.network = v);
          }
          return (
            Object(o.a)(
              t,
              [
                {
                  key: "getUserTypeAndAddress",
                  value: (function () {
                    var e = Object(n.a)(
                      S().mark(function e(t, r, n) {
                        var i,
                          o,
                          a,
                          s,
                          u,
                          c,
                          l,
                          h,
                          d,
                          f,
                          p,
                          v,
                          y,
                          g,
                          b,
                          w,
                          _,
                          O,
                          M = arguments;
                        return S().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = n.verifier),
                                    (o = n.verifierId),
                                    (a =
                                      M.length > 3 && void 0 !== M[3] && M[3]),
                                    (e.next = 4),
                                    L(t, i, o)
                                  );
                                case 4:
                                  if (((e.t0 = e.sent), e.t0)) {
                                    e.next = 7;
                                    break;
                                  }
                                  e.t0 = {};
                                case 7:
                                  if (
                                    ((s = e.t0),
                                    (u = s.keyResult),
                                    (c = s.errorResult),
                                    (l = !1),
                                    !c ||
                                      !JSON.stringify(c).includes(
                                        "Verifier + VerifierID has not yet been assigned"
                                      ))
                                  ) {
                                    e.next = 23;
                                    break;
                                  }
                                  if (a) {
                                    e.next = 14;
                                    break;
                                  }
                                  throw new Error(
                                    "Verifier + VerifierID has not yet been assigned"
                                  );
                                case 14:
                                  return (
                                    (e.next = 16),
                                    I({
                                      endpoints: t,
                                      torusNodePubs: r,
                                      lastPoint: void 0,
                                      firstPoint: void 0,
                                      verifier: i,
                                      verifierId: o,
                                      signerHost: this.signerHost,
                                      network: this.network,
                                    })
                                  );
                                case 16:
                                  return (e.next = 18), N(t, i, o, 1e3);
                                case 18:
                                  (d = e.sent),
                                    (h =
                                      null === d || void 0 === d
                                        ? void 0
                                        : d.keyResult),
                                    (l = !0),
                                    (e.next = 28);
                                  break;
                                case 23:
                                  if (!u) {
                                    e.next = 27;
                                    break;
                                  }
                                  (h = u), (e.next = 28);
                                  break;
                                case 27:
                                  throw new Error(
                                    "node results do not match at first lookup "
                                      .concat(JSON.stringify(u || {}), ", ")
                                      .concat(JSON.stringify(c || {}))
                                  );
                                case 28:
                                  if (!h) {
                                    e.next = 58;
                                    break;
                                  }
                                  return (
                                    (f = h.keys[0]),
                                    (p = f.pub_key_X),
                                    (v = f.pub_key_Y),
                                    (e.prev = 30),
                                    (e.next = 33),
                                    this.getOrSetNonce(p, v, void 0, !l)
                                  );
                                case 33:
                                  (y = e.sent),
                                    (g = new m.a(y.nonce || "0", 16)),
                                    (e.next = 40);
                                  break;
                                case 37:
                                  throw (
                                    ((e.prev = 37),
                                    (e.t1 = e.catch(30)),
                                    new R())
                                  );
                                case 40:
                                  if ("v1" !== y.typeOfUser) {
                                    e.next = 44;
                                    break;
                                  }
                                  (b = this.ec
                                    .keyFromPublic({ x: p, y: v })
                                    .getPublic()
                                    .add(
                                      this.ec
                                        .keyFromPrivate(g.toString(16))
                                        .getPublic()
                                    )),
                                    (e.next = 49);
                                  break;
                                case 44:
                                  if ("v2" !== y.typeOfUser) {
                                    e.next = 48;
                                    break;
                                  }
                                  (b = this.ec
                                    .keyFromPublic({ x: p, y: v })
                                    .getPublic()
                                    .add(
                                      this.ec
                                        .keyFromPublic({
                                          x: y.pubNonce.x,
                                          y: y.pubNonce.y,
                                        })
                                        .getPublic()
                                    )),
                                    (e.next = 49);
                                  break;
                                case 48:
                                  throw new Error(
                                    "getOrSetNonce should always return typeOfUser."
                                  );
                                case 49:
                                  if (
                                    ((w = b.getX().toString(16)),
                                    (_ = b.getY().toString(16)),
                                    (O = this.generateAddressFromPubKey(
                                      b.getX(),
                                      b.getY()
                                    )),
                                    "v1" !== y.typeOfUser)
                                  ) {
                                    e.next = 56;
                                    break;
                                  }
                                  return e.abrupt("return", {
                                    typeOfUser: y.typeOfUser,
                                    nonce: g,
                                    X: w,
                                    Y: _,
                                    address: O,
                                  });
                                case 56:
                                  if ("v2" !== y.typeOfUser) {
                                    e.next = 58;
                                    break;
                                  }
                                  return e.abrupt("return", {
                                    typeOfUser: y.typeOfUser,
                                    nonce: g,
                                    pubNonce: y.pubNonce,
                                    upgraded: y.upgraded,
                                    X: w,
                                    Y: _,
                                    address: O,
                                  });
                                case 58:
                                  throw new Error(
                                    "node results do not match at final lookup "
                                      .concat(JSON.stringify(u || {}), ", ")
                                      .concat(JSON.stringify(c || {}))
                                  );
                                case 59:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[30, 37]]
                        );
                      })
                    );
                    return function (t, r, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "setCustomKey",
                  value: (function () {
                    var e = Object(n.a)(
                      S().mark(function e(t) {
                        var r, n, i, o, a, s, u, c, l;
                        return S().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r = t.privKeyHex),
                                    (n = t.metadataNonce),
                                    (i = t.torusKeyHex),
                                    (o = t.customKeyHex),
                                    i
                                      ? (a = new m.a(i, 16))
                                      : ((s = new m.a(r, 16)),
                                        (a = s.sub(n).umod(this.ec.curve.n))),
                                    (u = new m.a(o, 16)),
                                    (c = u.sub(a).umod(this.ec.curve.n)),
                                    (l = this.generateMetadataParams(
                                      c.toString(16),
                                      a
                                    )),
                                    (e.next = 7),
                                    this.setMetadata(l)
                                  );
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "retrieveShares",
                  value: (function () {
                    var t = Object(n.a)(
                      S().mark(function t(r, i, o, a, s) {
                        var u,
                          c,
                          l,
                          h,
                          d,
                          v,
                          y,
                          g,
                          b,
                          w = this,
                          _ = arguments;
                        return S().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (u =
                                      _.length > 5 && void 0 !== _[5]
                                        ? _[5]
                                        : {}),
                                    (c = []),
                                    (t.next = 4),
                                    Object(p.b)(
                                      this.allowHost,
                                      {
                                        headers: {
                                          verifier: o,
                                          verifier_id: a.verifier_id,
                                          network: this.network,
                                        },
                                      },
                                      { useAPIKey: !0 }
                                    )
                                  );
                                case 4:
                                  for (
                                    l = Object(f.generatePrivate)(),
                                      h = Object(f.getPublic)(l).toString(
                                        "hex"
                                      ),
                                      d = h.slice(2, 66),
                                      v = h.slice(66),
                                      y = D(s),
                                      g = 0;
                                    g < r.length;
                                    g += 1
                                  )
                                    (b = Object(p.c)(
                                      r[g],
                                      Object(p.a)("CommitmentRequest", {
                                        messageprefix: "mug00",
                                        tokencommitment: y.slice(2),
                                        temppubx: d,
                                        temppuby: v,
                                        verifieridentifier: o,
                                      })
                                    ).catch(function (e) {
                                      k.error("commitment", e);
                                    })),
                                      c.push(b);
                                  return t.abrupt(
                                    "return",
                                    x(c, function (e) {
                                      return e.filter(function (e) {
                                        return (
                                          !(!e || "object" !== typeof e) &&
                                          !e.error
                                        );
                                      }).length >=
                                        3 * ~~(r.length / 4) + 1
                                        ? Promise.resolve(e)
                                        : Promise.reject(
                                            new Error(
                                              "invalid ".concat(
                                                JSON.stringify(e)
                                              )
                                            )
                                          );
                                    })
                                      .then(function (t) {
                                        for (
                                          var c = [], h = [], d = 0;
                                          d < t.length;
                                          d += 1
                                        )
                                          t[d] && h.push(t[d].result);
                                        for (var v = 0; v < r.length; v += 1) {
                                          var y = Object(p.c)(
                                            r[v],
                                            Object(p.a)("ShareRequest", {
                                              encrypted: "yes",
                                              item: [
                                                B(
                                                  B({}, a),
                                                  {},
                                                  {
                                                    idtoken: s,
                                                    nodesignatures: h,
                                                    verifieridentifier: o,
                                                  },
                                                  u
                                                ),
                                              ],
                                            })
                                          ).catch(function (e) {
                                            return k.error("share req", e);
                                          });
                                          c.push(y);
                                        }
                                        return x(
                                          c,
                                          (function () {
                                            var t = Object(n.a)(
                                              S().mark(function t(n, o) {
                                                var a,
                                                  s,
                                                  u,
                                                  c,
                                                  h,
                                                  d,
                                                  p,
                                                  v,
                                                  y,
                                                  g,
                                                  b,
                                                  _,
                                                  O,
                                                  M,
                                                  E,
                                                  j,
                                                  x;
                                                return S().wrap(function (t) {
                                                  for (;;)
                                                    switch ((t.prev = t.next)) {
                                                      case 0:
                                                        if (
                                                          ((a = n.filter(
                                                            function (e) {
                                                              return e;
                                                            }
                                                          )),
                                                          (s = T(
                                                            n.map(function (e) {
                                                              return (
                                                                e &&
                                                                e.result &&
                                                                e.result.keys[0]
                                                                  .PublicKey
                                                              );
                                                            }),
                                                            1 + ~~(r.length / 2)
                                                          )),
                                                          !(
                                                            a.length >=
                                                              1 +
                                                                ~~(
                                                                  r.length / 2
                                                                ) && s
                                                          ))
                                                        ) {
                                                          t.next = 28;
                                                          break;
                                                        }
                                                        for (
                                                          u = [], c = [], h = 0;
                                                          h < n.length;
                                                          h += 1
                                                        )
                                                          (null ===
                                                            (v = n[h]) ||
                                                          void 0 === v ||
                                                          null ===
                                                            (d = v.result) ||
                                                          void 0 === d ||
                                                          null ===
                                                            (p = d.keys) ||
                                                          void 0 === p
                                                            ? void 0
                                                            : p.length) > 0
                                                            ? (v.result.keys.sort(
                                                                function (
                                                                  e,
                                                                  t
                                                                ) {
                                                                  return new m.a(
                                                                    e.Index,
                                                                    16
                                                                  ).cmp(
                                                                    new m.a(
                                                                      t.Index,
                                                                      16
                                                                    )
                                                                  );
                                                                }
                                                              ),
                                                              (y =
                                                                v.result
                                                                  .keys[0])
                                                                .Metadata
                                                                ? ((g = {
                                                                    ephemPublicKey:
                                                                      e.from(
                                                                        y
                                                                          .Metadata
                                                                          .ephemPublicKey,
                                                                        "hex"
                                                                      ),
                                                                    iv: e.from(
                                                                      y.Metadata
                                                                        .iv,
                                                                      "hex"
                                                                    ),
                                                                    mac: e.from(
                                                                      y.Metadata
                                                                        .mac,
                                                                      "hex"
                                                                    ),
                                                                  }),
                                                                  u.push(
                                                                    Object(
                                                                      f.decrypt
                                                                    )(
                                                                      l,
                                                                      B(
                                                                        B(
                                                                          {},
                                                                          g
                                                                        ),
                                                                        {},
                                                                        {
                                                                          ciphertext:
                                                                            e.from(
                                                                              e
                                                                                .from(
                                                                                  y.Share,
                                                                                  "base64"
                                                                                )
                                                                                .toString(
                                                                                  "binary"
                                                                                )
                                                                                .padStart(
                                                                                  64,
                                                                                  "0"
                                                                                ),
                                                                              "hex"
                                                                            ),
                                                                        }
                                                                      )
                                                                    ).catch(
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return k.debug(
                                                                          "share decryption",
                                                                          e
                                                                        );
                                                                      }
                                                                    )
                                                                  ))
                                                                : u.push(
                                                                    Promise.resolve(
                                                                      e.from(
                                                                        y.Share.padStart(
                                                                          64,
                                                                          "0"
                                                                        ),
                                                                        "hex"
                                                                      )
                                                                    )
                                                                  ))
                                                            : u.push(
                                                                Promise.resolve(
                                                                  void 0
                                                                )
                                                              ),
                                                            c.push(
                                                              new m.a(i[h], 16)
                                                            );
                                                        return (
                                                          (t.next = 8),
                                                          Promise.all(u)
                                                        );
                                                      case 8:
                                                        if (
                                                          ((b = t.sent),
                                                          !o.resolved)
                                                        ) {
                                                          t.next = 11;
                                                          break;
                                                        }
                                                        return t.abrupt(
                                                          "return",
                                                          void 0
                                                        );
                                                      case 11:
                                                        (_ = b.reduce(function (
                                                          e,
                                                          t,
                                                          r
                                                        ) {
                                                          return (
                                                            t &&
                                                              e.push({
                                                                index: c[r],
                                                                value: new m.a(
                                                                  t
                                                                ),
                                                              }),
                                                            e
                                                          );
                                                        },
                                                        [])),
                                                          (O = C(
                                                            _.length,
                                                            1 + ~~(r.length / 2)
                                                          )),
                                                          (M = null),
                                                          (E = function (t) {
                                                            var r = O[t],
                                                              n = _.filter(
                                                                function (
                                                                  e,
                                                                  t
                                                                ) {
                                                                  return r.includes(
                                                                    t
                                                                  );
                                                                }
                                                              ),
                                                              i = n.map(
                                                                function (e) {
                                                                  return e.value;
                                                                }
                                                              ),
                                                              o = n.map(
                                                                function (e) {
                                                                  return e.index;
                                                                }
                                                              ),
                                                              a =
                                                                w.lagrangeInterpolation(
                                                                  i,
                                                                  o
                                                                );
                                                            if (!a)
                                                              return "continue";
                                                            var u = Object(
                                                                f.getPublic
                                                              )(
                                                                e.from(
                                                                  a.toString(
                                                                    16,
                                                                    64
                                                                  ),
                                                                  "hex"
                                                                )
                                                              ).toString("hex"),
                                                              c = u.slice(
                                                                2,
                                                                66
                                                              ),
                                                              l = u.slice(66);
                                                            return 0 ===
                                                              new m.a(
                                                                c,
                                                                16
                                                              ).cmp(
                                                                new m.a(s.X, 16)
                                                              ) &&
                                                              0 ===
                                                                new m.a(
                                                                  l,
                                                                  16
                                                                ).cmp(
                                                                  new m.a(
                                                                    s.Y,
                                                                    16
                                                                  )
                                                                )
                                                              ? ((M = a),
                                                                "break")
                                                              : void 0;
                                                          }),
                                                          (j = 0);
                                                      case 16:
                                                        if (!(j < O.length)) {
                                                          t.next = 25;
                                                          break;
                                                        }
                                                        if (
                                                          "continue" !==
                                                          (x = E(j))
                                                        ) {
                                                          t.next = 20;
                                                          break;
                                                        }
                                                        return t.abrupt(
                                                          "continue",
                                                          22
                                                        );
                                                      case 20:
                                                        if ("break" !== x) {
                                                          t.next = 22;
                                                          break;
                                                        }
                                                        return t.abrupt(
                                                          "break",
                                                          25
                                                        );
                                                      case 22:
                                                        (j += 1), (t.next = 16);
                                                        break;
                                                      case 25:
                                                        if (
                                                          void 0 !== M &&
                                                          null !== M
                                                        ) {
                                                          t.next = 27;
                                                          break;
                                                        }
                                                        throw new Error(
                                                          "could not derive private key"
                                                        );
                                                      case 27:
                                                        return t.abrupt(
                                                          "return",
                                                          M
                                                        );
                                                      case 28:
                                                        throw new Error(
                                                          "invalid"
                                                        );
                                                      case 29:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                }, t);
                                              })
                                            );
                                            return function (e, r) {
                                              return t.apply(this, arguments);
                                            };
                                          })()
                                        );
                                      })
                                      .then(
                                        (function () {
                                          var t = Object(n.a)(
                                            S().mark(function t(r) {
                                              var n, i, o, a, s, u, c, l;
                                              return S().wrap(function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      if ((n = r)) {
                                                        t.next = 3;
                                                        break;
                                                      }
                                                      throw new Error(
                                                        "Invalid private key returned"
                                                      );
                                                    case 3:
                                                      if (
                                                        ((i = Object(
                                                          f.getPublic
                                                        )(
                                                          e.from(
                                                            n.toString(16, 64),
                                                            "hex"
                                                          )
                                                        ).toString("hex")),
                                                        (o = i.slice(2, 66)),
                                                        (a = i.slice(66)),
                                                        !w.enableOneKey)
                                                      ) {
                                                        t.next = 14;
                                                        break;
                                                      }
                                                      return (
                                                        (t.next = 9),
                                                        w.getNonce(o, a, n)
                                                      );
                                                    case 9:
                                                      (u = t.sent),
                                                        (c = u.nonce),
                                                        (s = new m.a(
                                                          c || "0",
                                                          16
                                                        )),
                                                        (t.next = 17);
                                                      break;
                                                    case 14:
                                                      return (
                                                        (t.next = 16),
                                                        w.getMetadata({
                                                          pub_key_X: o,
                                                          pub_key_Y: a,
                                                        })
                                                      );
                                                    case 16:
                                                      s = t.sent;
                                                    case 17:
                                                      return (
                                                        k.debug(
                                                          "> torus.js/retrieveShares",
                                                          {
                                                            privKey:
                                                              n.toString(16),
                                                            metadataNonce:
                                                              s.toString(16),
                                                          }
                                                        ),
                                                        (n = n
                                                          .add(s)
                                                          .umod(w.ec.curve.n)),
                                                        (l =
                                                          w.generateAddressFromPrivKey(
                                                            n
                                                          )),
                                                        k.debug(
                                                          "> torus.js/retrieveShares",
                                                          {
                                                            ethAddress: l,
                                                            privKey:
                                                              n.toString(16),
                                                          }
                                                        ),
                                                        t.abrupt("return", {
                                                          ethAddress: l,
                                                          privKey: n.toString(
                                                            "hex",
                                                            64
                                                          ),
                                                          metadataNonce: s,
                                                        })
                                                      );
                                                    case 22:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              }, t);
                                            })
                                          );
                                          return function (e) {
                                            return t.apply(this, arguments);
                                          };
                                        })()
                                      )
                                  );
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e, r, n, i, o) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getMetadata",
                  value: (function () {
                    var e = Object(n.a)(
                      S().mark(function e(t) {
                        var r,
                          n,
                          i = arguments;
                        return S().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r =
                                      i.length > 1 && void 0 !== i[1]
                                        ? i[1]
                                        : {}),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    Object(p.c)(
                                      "".concat(this.metadataHost, "/get"),
                                      t,
                                      r,
                                      { useAPIKey: !0 }
                                    )
                                  );
                                case 4:
                                  if ((n = e.sent) && n.message) {
                                    e.next = 7;
                                    break;
                                  }
                                  return e.abrupt("return", new m.a(0));
                                case 7:
                                  return e.abrupt(
                                    "return",
                                    new m.a(n.message, 16)
                                  );
                                case 10:
                                  return (
                                    (e.prev = 10),
                                    (e.t0 = e.catch(1)),
                                    k.error("get metadata error", e.t0),
                                    e.abrupt("return", new m.a(0))
                                  );
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 10]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "generateMetadataParams",
                  value: function (t, r) {
                    var n = this.ec.keyFromPrivate(r.toString("hex", 64)),
                      i = {
                        data: t,
                        timestamp: new m.a(
                          ~~(this.serverTimeOffset + Date.now() / 1e3)
                        ).toString(16),
                      },
                      o = n.sign(D(b()(i)).slice(2));
                    return {
                      pub_key_X: n.getPublic().getX().toString("hex"),
                      pub_key_Y: n.getPublic().getY().toString("hex"),
                      set_data: i,
                      signature: e
                        .from(
                          o.r.toString(16, 64) +
                            o.s.toString(16, 64) +
                            new m.a("").toString(16, 2),
                          "hex"
                        )
                        .toString("base64"),
                    };
                  },
                },
                {
                  key: "setMetadata",
                  value: (function () {
                    var e = Object(n.a)(
                      S().mark(function e(t) {
                        var r,
                          n,
                          i = arguments;
                        return S().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r =
                                      i.length > 1 && void 0 !== i[1]
                                        ? i[1]
                                        : {}),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    Object(p.c)(
                                      "".concat(this.metadataHost, "/set"),
                                      t,
                                      r,
                                      { useAPIKey: !0 }
                                    )
                                  );
                                case 4:
                                  return (
                                    (n = e.sent), e.abrupt("return", n.message)
                                  );
                                case 8:
                                  return (
                                    (e.prev = 8),
                                    (e.t0 = e.catch(1)),
                                    k.error("set metadata error", e.t0),
                                    e.abrupt("return", "")
                                  );
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 8]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "lagrangeInterpolation",
                  value: function (e, t) {
                    if (e.length !== t.length) return null;
                    for (var r = new m.a(0), n = 0; n < e.length; n += 1) {
                      for (
                        var i = new m.a(1), o = new m.a(1), a = 0;
                        a < e.length;
                        a += 1
                      )
                        if (n !== a) {
                          i = (i = i.mul(t[a].neg())).umod(this.ec.curve.n);
                          var s = t[n].sub(t[a]);
                          (s = s.umod(this.ec.curve.n)),
                            (o = o.mul(s).umod(this.ec.curve.n));
                        }
                      var u = i
                        .mul(o.invm(this.ec.curve.n))
                        .umod(this.ec.curve.n);
                      (u = u.mul(e[n]).umod(this.ec.curve.n)), (r = r.add(u));
                    }
                    return r.umod(this.ec.curve.n);
                  },
                },
                {
                  key: "generateAddressFromPrivKey",
                  value: function (t) {
                    var r = this.ec
                      .keyFromPrivate(t.toString("hex", 64), "hex")
                      .getPublic()
                      .encode("hex", !1)
                      .slice(2);
                    k.info(r, "public key");
                    var n = "0x".concat(D(e.from(r, "hex")).slice(26));
                    return Object(w.toChecksumAddress)(n);
                  },
                },
                {
                  key: "generateAddressFromPubKey",
                  value: function (t, r) {
                    var n = this.ec.keyFromPublic({
                        x: t.toString("hex", 64),
                        y: r.toString("hex", 64),
                      }),
                      i = n.getPublic().encode("hex", !1).slice(2);
                    k.info(n.getPublic().encode("hex", !1), "public key");
                    var o = "0x".concat(D(e.from(i, "hex")).slice(26));
                    return Object(w.toChecksumAddress)(o);
                  },
                },
                {
                  key: "getPublicAddress",
                  value: (function () {
                    var e = Object(n.a)(
                      S().mark(function e(t, r, n) {
                        var i,
                          o,
                          a,
                          s,
                          u,
                          c,
                          l,
                          h,
                          d,
                          f,
                          p,
                          v,
                          y,
                          g,
                          b,
                          w,
                          _,
                          O,
                          M,
                          E = arguments;
                        return S().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = n.verifier),
                                    (o = n.verifierId),
                                    (a =
                                      E.length > 3 && void 0 !== E[3] && E[3]),
                                    k.debug("> torus.js/getPublicAddress", {
                                      endpoints: t,
                                      torusNodePubs: r,
                                      verifier: i,
                                      verifierId: o,
                                      isExtended: a,
                                    }),
                                    (u = !1),
                                    (e.next = 6),
                                    L(t, i, o)
                                  );
                                case 6:
                                  if (((e.t0 = e.sent), e.t0)) {
                                    e.next = 9;
                                    break;
                                  }
                                  e.t0 = {};
                                case 9:
                                  if (
                                    ((c = e.t0),
                                    (l = c.keyResult),
                                    !(h = c.errorResult) ||
                                      !JSON.stringify(h).includes(
                                        "Verifier not supported"
                                      ))
                                  ) {
                                    e.next = 16;
                                    break;
                                  }
                                  throw new Error(
                                    "Verifier not supported. Check if you: \n\n      1. Are on the right network (Torus testnet/mainnet) \n\n      2. Have setup a verifier on dashboard.web3auth.io?"
                                  );
                                case 16:
                                  if (
                                    !h ||
                                    !JSON.stringify(h).includes(
                                      "Verifier + VerifierID has not yet been assigned"
                                    )
                                  ) {
                                    e.next = 26;
                                    break;
                                  }
                                  return (
                                    (e.next = 19),
                                    I({
                                      endpoints: t,
                                      torusNodePubs: r,
                                      lastPoint: void 0,
                                      firstPoint: void 0,
                                      verifier: i,
                                      verifierId: o,
                                      signerHost: this.signerHost,
                                      network: this.network,
                                    })
                                  );
                                case 19:
                                  return (e.next = 21), N(t, i, o, 1e3);
                                case 21:
                                  (d = e.sent),
                                    (s =
                                      null === d || void 0 === d
                                        ? void 0
                                        : d.keyResult),
                                    (u = !0),
                                    (e.next = 31);
                                  break;
                                case 26:
                                  if (!l) {
                                    e.next = 30;
                                    break;
                                  }
                                  (s = l), (e.next = 31);
                                  break;
                                case 30:
                                  throw new Error(
                                    "node results do not match at first lookup "
                                      .concat(JSON.stringify(l || {}), ", ")
                                      .concat(JSON.stringify(h || {}))
                                  );
                                case 31:
                                  if (
                                    (k.debug("> torus.js/getPublicAddress", {
                                      finalKeyResult: s,
                                      isNewKey: u,
                                    }),
                                    !s)
                                  ) {
                                    e.next = 69;
                                    break;
                                  }
                                  if (
                                    ((p = s.keys[0]),
                                    (v = p.pub_key_X),
                                    (y = p.pub_key_Y),
                                    !this.enableOneKey)
                                  ) {
                                    e.next = 57;
                                    break;
                                  }
                                  return (
                                    (e.prev = 35),
                                    (e.next = 38),
                                    this.getOrSetNonce(v, y, void 0, !u)
                                  );
                                case 38:
                                  (g = e.sent),
                                    (b = new m.a(g.nonce || "0", 16)),
                                    (_ = g.typeOfUser),
                                    (e.next = 46);
                                  break;
                                case 43:
                                  throw (
                                    ((e.prev = 43),
                                    (e.t1 = e.catch(35)),
                                    new R())
                                  );
                                case 46:
                                  if ("v1" !== g.typeOfUser) {
                                    e.next = 50;
                                    break;
                                  }
                                  (w = this.ec
                                    .keyFromPublic({ x: v, y: y })
                                    .getPublic()
                                    .add(
                                      this.ec
                                        .keyFromPrivate(b.toString(16))
                                        .getPublic()
                                    )),
                                    (e.next = 55);
                                  break;
                                case 50:
                                  if ("v2" !== g.typeOfUser) {
                                    e.next = 54;
                                    break;
                                  }
                                  g.upgraded
                                    ? (w = this.ec
                                        .keyFromPublic({ x: v, y: y })
                                        .getPublic())
                                    : ((w = this.ec
                                        .keyFromPublic({ x: v, y: y })
                                        .getPublic()
                                        .add(
                                          this.ec
                                            .keyFromPublic({
                                              x: g.pubNonce.x,
                                              y: g.pubNonce.y,
                                            })
                                            .getPublic()
                                        )),
                                      (O = g.pubNonce)),
                                    (e.next = 55);
                                  break;
                                case 54:
                                  throw new Error(
                                    "getOrSetNonce should always return typeOfUser."
                                  );
                                case 55:
                                  e.next = 62;
                                  break;
                                case 57:
                                  return (
                                    (_ = "v1"),
                                    (e.next = 60),
                                    this.getMetadata({
                                      pub_key_X: v,
                                      pub_key_Y: y,
                                    })
                                  );
                                case 60:
                                  (b = e.sent),
                                    (w = this.ec
                                      .keyFromPublic({ x: v, y: y })
                                      .getPublic()
                                      .add(
                                        this.ec
                                          .keyFromPrivate(b.toString(16))
                                          .getPublic()
                                      ));
                                case 62:
                                  if (
                                    ((v = w.getX().toString(16)),
                                    (y = w.getY().toString(16)),
                                    (M = this.generateAddressFromPubKey(
                                      w.getX(),
                                      w.getY()
                                    )),
                                    k.debug("> torus.js/getPublicAddress", {
                                      X: v,
                                      Y: y,
                                      address: M,
                                      typeOfUser: _,
                                      nonce:
                                        null === (f = b) || void 0 === f
                                          ? void 0
                                          : f.toString(16),
                                      pubNonce: O,
                                    }),
                                    a)
                                  ) {
                                    e.next = 68;
                                    break;
                                  }
                                  return e.abrupt("return", M);
                                case 68:
                                  return e.abrupt("return", {
                                    typeOfUser: _,
                                    address: M,
                                    X: v,
                                    Y: y,
                                    metadataNonce: b,
                                    pubNonce: O,
                                  });
                                case 69:
                                  throw new Error(
                                    "node results do not match at final lookup "
                                      .concat(JSON.stringify(l || {}), ", ")
                                      .concat(JSON.stringify(h || {}))
                                  );
                                case 70:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[35, 43]]
                        );
                      })
                    );
                    return function (t, r, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getOrSetNonce",
                  value: (function () {
                    var e = Object(n.a)(
                      S().mark(function e(t, r, n) {
                        var i,
                          o,
                          a,
                          s = arguments;
                        return S().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i =
                                      s.length > 3 && void 0 !== s[3] && s[3]),
                                    (a = i ? "getNonce" : "getOrSetNonce"),
                                    (o = n
                                      ? this.generateMetadataParams(a, n)
                                      : {
                                          pub_key_X: t,
                                          pub_key_Y: r,
                                          set_data: { data: a },
                                        }),
                                    e.abrupt(
                                      "return",
                                      Object(p.c)(
                                        "".concat(
                                          this.metadataHost,
                                          "/get_or_set_nonce"
                                        ),
                                        o,
                                        void 0,
                                        { useAPIKey: !0 }
                                      )
                                    )
                                  );
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, r, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getNonce",
                  value: (function () {
                    var e = Object(n.a)(
                      S().mark(function e(t, r, n) {
                        return S().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    this.getOrSetNonce(t, r, n, !0)
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, r, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getPostboxKeyFrom1OutOf1",
                  value: function (e, t) {
                    var r = new m.a(e, 16),
                      n = new m.a(t, 16);
                    return r.sub(n).umod(this.ec.curve.n).toString("hex");
                  },
                },
              ],
              [
                {
                  key: "enableLogging",
                  value: function () {
                    var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                    e ? k.enableAll() : k.disableAll();
                  },
                },
                {
                  key: "setAPIKey",
                  value: function (e) {
                    Object(p.d)(e);
                  },
                },
                {
                  key: "setEmbedHost",
                  value: function (e) {
                    Object(p.e)(e);
                  },
                },
                {
                  key: "isGetOrSetNonceError",
                  value: function (e) {
                    return e instanceof R;
                  },
                },
              ]
            ),
            t
          );
        })();
      }.call(this, r(8).Buffer));
    },
    1954: function (e, t, r) {
      "use strict";
      (function (e, n) {
        var i = new (0, r(157).ec)("secp256k1"),
          o = e.crypto || e.msCrypto || {},
          a = o.subtle || o.webkitSubtle,
          s = r(190),
          u = n.from(
            "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
            "hex"
          ),
          c = n.alloc(32, 0);
        function l(e, t) {
          if (!e) throw new Error(t || "Assertion failed");
        }
        function h(e) {
          return (
            (t = e),
            !(!n.isBuffer(t) || 32 !== t.length) &&
              e.compare(c) > 0 &&
              e.compare(u) < 0
          );
          var t;
        }
        function d(e) {
          var t = new Uint8Array(e);
          return "undefined" === typeof o.getRandomValues
            ? n.from(s.randomBytes(e))
            : (o.getRandomValues(t), n.from(t));
        }
        function f(e) {
          return new Promise(function (t) {
            var r = s.createHash("sha512").update(e).digest();
            t(new Uint8Array(r));
          });
        }
        function p(e) {
          return function (t, r, i) {
            return new Promise(function (o) {
              if (a) {
                return a
                  .importKey("raw", r, { name: "AES-CBC" }, !1, [e])
                  .then(function (r) {
                    var n = { name: "AES-CBC", iv: t };
                    return a[e](n, r, i);
                  })
                  .then(function (e) {
                    o(n.from(new Uint8Array(e)));
                  });
              }
              if ("encrypt" === e) {
                var u = s.createCipheriv("aes-256-cbc", r, t),
                  c = u.update(i),
                  l = u.final();
                o(n.concat([c, l]));
              } else if ("decrypt" === e) {
                var h = s.createDecipheriv("aes-256-cbc", r, t),
                  d = h.update(i),
                  f = h.final();
                o(n.concat([d, f]));
              }
            });
          };
        }
        var v = p("encrypt"),
          m = p("decrypt");
        t.generatePrivate = function () {
          for (var e = d(32); !h(e); ) e = d(32);
          return e;
        };
        var y = (t.getPublic = function (e) {
          return (
            l(32 === e.length, "Bad private key"),
            l(h(e), "Bad private key"),
            n.from(i.keyFromPrivate(e).getPublic("arr"))
          );
        });
        t.getPublicCompressed = function (e) {
          l(32 === e.length, "Bad private key"), l(h(e), "Bad private key");
          return n.from(i.keyFromPrivate(e).getPublic(!0, "arr"));
        };
        (t.sign = function (e, t) {
          return new Promise(function (r) {
            l(32 === e.length, "Bad private key"),
              l(h(e), "Bad private key"),
              l(t.length > 0, "Message should not be empty"),
              l(t.length <= 32, "Message is too long"),
              r(n.from(i.sign(t, e, { canonical: !0 }).toDER()));
          });
        }),
          (t.verify = function (e, t, r) {
            return new Promise(function (n, o) {
              l(65 === e.length || 33 === e.length, "Bad public key"),
                65 === e.length && l(4 === e[0], "Bad public key"),
                33 === e.length &&
                  l(2 === e[0] || 3 === e[0], "Bad public key"),
                l(t.length > 0, "Message should not be empty"),
                l(t.length <= 32, "Message is too long"),
                i.verify(t, r, e) ? n(null) : o(new Error("Bad signature"));
            });
          });
        var g = (t.derive = function (e, t) {
          return new Promise(function (r) {
            l(n.isBuffer(e), "Bad private key"),
              l(n.isBuffer(t), "Bad public key"),
              l(32 === e.length, "Bad private key"),
              l(h(e), "Bad private key"),
              l(65 === t.length || 33 === t.length, "Bad public key"),
              65 === t.length && l(4 === t[0], "Bad public key"),
              33 === t.length && l(2 === t[0] || 3 === t[0], "Bad public key");
            var o = i.keyFromPrivate(e),
              a = i.keyFromPublic(t),
              s = o.derive(a.getPublic());
            r(n.from(s.toArray()));
          });
        });
        (t.encrypt = function (e, t, r) {
          var i, o, a, u;
          return (
            (r = r || {}),
            new Promise(function (t) {
              for (var n = r.ephemPrivateKey || d(32); !h(n); )
                n = r.ephemPrivateKey || d(32);
              (o = y(n)), t(g(n, e));
            })
              .then(function (e) {
                return f(e);
              })
              .then(function (e) {
                i = r.iv || d(16);
                var n = e.slice(0, 32);
                return (u = e.slice(32)), v(i, n, t);
              })
              .then(function (e) {
                a = e;
                var t = n.concat([i, o, a]);
                return (function (e, t) {
                  return new Promise(function (r) {
                    var i = s.createHmac("sha256", n.from(e));
                    i.update(t), r(i.digest());
                  });
                })(u, t);
              })
              .then(function (e) {
                return { iv: i, ephemPublicKey: o, ciphertext: a, mac: e };
              })
          );
        }),
          (t.decrypt = function (e, t) {
            var r;
            return g(e, t.ephemPublicKey)
              .then(function (e) {
                return f(e);
              })
              .then(function (e) {
                r = e.slice(0, 32);
                var i,
                  o,
                  a,
                  u = e.slice(32),
                  c = n.concat([t.iv, t.ephemPublicKey, t.ciphertext]);
                return (
                  (i = u),
                  (o = c),
                  (a = t.mac),
                  new Promise(function (e) {
                    var t = s.createHmac("sha256", n.from(i));
                    t.update(o),
                      e(
                        (function (e, t) {
                          if (e.length !== t.length) return !1;
                          for (var r = 0, n = 0; n < e.length; n++)
                            r |= e[n] ^ t[n];
                          return 0 === r;
                        })(t.digest(), a)
                      );
                  })
                );
              })
              .then(function (e) {
                return l(e, "Bad MAC"), m(t.iv, r, t.ciphertext);
              })
              .then(function (e) {
                return n.from(new Uint8Array(e));
              });
          });
      }.call(this, r(30), r(8).Buffer));
    },
    1955: function (e, t, r) {
      (function (e) {
        !(function (e, t) {
          "use strict";
          function n(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }
          function i(e, t) {
            e.super_ = t;
            var r = function () {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          }
          function o(e, t, r) {
            if (o.isBN(e)) return e;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== e &&
                (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
                this._init(e || 0, t || 10, r || "be"));
          }
          var a;
          "object" === typeof e ? (e.exports = o) : (t.BN = o),
            (o.BN = o),
            (o.wordSize = 26);
          try {
            a =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(1956).Buffer;
          } catch (x) {}
          function s(e, t) {
            var r = e.charCodeAt(t);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
              ? r - 55
              : r >= 97 && r <= 102
              ? r - 87
              : void n(!1, "Invalid character in " + e);
          }
          function u(e, t, r) {
            var n = s(e, r);
            return r - 1 >= t && (n |= s(e, r - 1) << 4), n;
          }
          function c(e, t, r, i) {
            for (
              var o = 0, a = 0, s = Math.min(e.length, r), u = t;
              u < s;
              u++
            ) {
              var c = e.charCodeAt(u) - 48;
              (o *= i),
                (a = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
                n(c >= 0 && a < i, "Invalid character"),
                (o += a);
            }
            return o;
          }
          function l(e, t) {
            (e.words = t.words),
              (e.length = t.length),
              (e.negative = t.negative),
              (e.red = t.red);
          }
          if (
            ((o.isBN = function (e) {
              return (
                e instanceof o ||
                (null !== e &&
                  "object" === typeof e &&
                  e.constructor.wordSize === o.wordSize &&
                  Array.isArray(e.words))
              );
            }),
            (o.max = function (e, t) {
              return e.cmp(t) > 0 ? e : t;
            }),
            (o.min = function (e, t) {
              return e.cmp(t) < 0 ? e : t;
            }),
            (o.prototype._init = function (e, t, r) {
              if ("number" === typeof e) return this._initNumber(e, t, r);
              if ("object" === typeof e) return this._initArray(e, t, r);
              "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
              var i = 0;
              "-" === (e = e.toString().replace(/\s+/g, ""))[0] &&
                (i++, (this.negative = 1)),
                i < e.length &&
                  (16 === t
                    ? this._parseHex(e, i, r)
                    : (this._parseBase(e, t, i),
                      "le" === r && this._initArray(this.toArray(), t, r)));
            }),
            (o.prototype._initNumber = function (e, t, r) {
              e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                  ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                    (this.length = 2))
                  : (n(e < 9007199254740992),
                    (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), t, r);
            }),
            (o.prototype._initArray = function (e, t, r) {
              if ((n("number" === typeof e.length), e.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                a,
                s = 0;
              if ("be" === r)
                for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                  (a = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                    (this.words[o] |= (a << s) & 67108863),
                    (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                    (s += 24) >= 26 && ((s -= 26), o++);
              else if ("le" === r)
                for (i = 0, o = 0; i < e.length; i += 3)
                  (a = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                    (this.words[o] |= (a << s) & 67108863),
                    (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                    (s += 24) >= 26 && ((s -= 26), o++);
              return this._strip();
            }),
            (o.prototype._parseHex = function (e, t, r) {
              (this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var i,
                o = 0,
                a = 0;
              if ("be" === r)
                for (n = e.length - 1; n >= t; n -= 2)
                  (i = u(e, t, n) << o),
                    (this.words[a] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                      : (o += 8);
              else
                for (
                  n = (e.length - t) % 2 === 0 ? t + 1 : t;
                  n < e.length;
                  n += 2
                )
                  (i = u(e, t, n) << o),
                    (this.words[a] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                      : (o += 8);
              this._strip();
            }),
            (o.prototype._parseBase = function (e, t, r) {
              (this.words = [0]), (this.length = 1);
              for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
              n--, (i = (i / t) | 0);
              for (
                var o = e.length - r,
                  a = o % n,
                  s = Math.min(o, o - a) + r,
                  u = 0,
                  l = r;
                l < s;
                l += n
              )
                (u = c(e, l, l + n, t)),
                  this.imuln(i),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              if (0 !== a) {
                var h = 1;
                for (u = c(e, l, e.length, t), l = 0; l < a; l++) h *= t;
                this.imuln(h),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              }
              this._strip();
            }),
            (o.prototype.copy = function (e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              (e.length = this.length),
                (e.negative = this.negative),
                (e.red = this.red);
            }),
            (o.prototype._move = function (e) {
              l(e, this);
            }),
            (o.prototype.clone = function () {
              var e = new o(null);
              return this.copy(e), e;
            }),
            (o.prototype._expand = function (e) {
              for (; this.length < e; ) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
            } catch (x) {
              o.prototype.inspect = h;
            }
          else o.prototype.inspect = h;
          function h() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var d = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            f = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          (o.prototype.toString = function (e, t) {
            var r;
            if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
              r = "";
              for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                var s = this.words[a],
                  u = (16777215 & ((s << i) | o)).toString(16);
                (o = (s >>> (24 - i)) & 16777215),
                  (i += 2) >= 26 && ((i -= 26), a--),
                  (r =
                    0 !== o || a !== this.length - 1
                      ? d[6 - u.length] + u + r
                      : u + r);
              }
              for (0 !== o && (r = o.toString(16) + r); r.length % t !== 0; )
                r = "0" + r;
              return 0 !== this.negative && (r = "-" + r), r;
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var c = f[e],
                l = p[e];
              r = "";
              var h = this.clone();
              for (h.negative = 0; !h.isZero(); ) {
                var v = h.modrn(l).toString(e);
                r = (h = h.idivn(l)).isZero() ? v + r : d[c - v.length] + v + r;
              }
              for (this.isZero() && (r = "0" + r); r.length % t !== 0; )
                r = "0" + r;
              return 0 !== this.negative && (r = "-" + r), r;
            }
            n(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var e = this.words[0];
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (e += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            a &&
              (o.prototype.toBuffer = function (e, t) {
                return this.toArrayLike(a, e, t);
              }),
            (o.prototype.toArray = function (e, t) {
              return this.toArrayLike(Array, e, t);
            });
          function v(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var n = (e.length + t.length) | 0;
            (r.length = n), (n = (n - 1) | 0);
            var i = 0 | e.words[0],
              o = 0 | t.words[0],
              a = i * o,
              s = 67108863 & a,
              u = (a / 67108864) | 0;
            r.words[0] = s;
            for (var c = 1; c < n; c++) {
              for (
                var l = u >>> 26,
                  h = 67108863 & u,
                  d = Math.min(c, t.length - 1),
                  f = Math.max(0, c - e.length + 1);
                f <= d;
                f++
              ) {
                var p = (c - f) | 0;
                (l +=
                  ((a = (i = 0 | e.words[p]) * (o = 0 | t.words[f]) + h) /
                    67108864) |
                  0),
                  (h = 67108863 & a);
              }
              (r.words[c] = 0 | h), (u = 0 | l);
            }
            return 0 !== u ? (r.words[c] = 0 | u) : r.length--, r._strip();
          }
          (o.prototype.toArrayLike = function (e, t, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0");
            var a = (function (e, t) {
              return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
            })(e, o);
            return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](a, i), a;
          }),
            (o.prototype._toArrayLikeLE = function (e, t) {
              for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                var a = (this.words[i] << o) | n;
                (e[r++] = 255 & a),
                  r < e.length && (e[r++] = (a >> 8) & 255),
                  r < e.length && (e[r++] = (a >> 16) & 255),
                  6 === o
                    ? (r < e.length && (e[r++] = (a >> 24) & 255),
                      (n = 0),
                      (o = 0))
                    : ((n = a >>> 24), (o += 2));
              }
              if (r < e.length) for (e[r++] = n; r < e.length; ) e[r++] = 0;
            }),
            (o.prototype._toArrayLikeBE = function (e, t) {
              for (
                var r = e.length - 1, n = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var a = (this.words[i] << o) | n;
                (e[r--] = 255 & a),
                  r >= 0 && (e[r--] = (a >> 8) & 255),
                  r >= 0 && (e[r--] = (a >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (e[r--] = (a >> 24) & 255), (n = 0), (o = 0))
                    : ((n = a >>> 24), (o += 2));
              }
              if (r >= 0) for (e[r--] = n; r >= 0; ) e[r--] = 0;
            }),
            Math.clz32
              ? (o.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
                })
              : (o.prototype._countBits = function (e) {
                  var t = e,
                    r = 0;
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  );
                }),
            (o.prototype._zeroBits = function (e) {
              if (0 === e) return 26;
              var t = e,
                r = 0;
              return (
                0 === (8191 & t) && ((r += 13), (t >>>= 13)),
                0 === (127 & t) && ((r += 7), (t >>>= 7)),
                0 === (15 & t) && ((r += 4), (t >>>= 4)),
                0 === (3 & t) && ((r += 2), (t >>>= 2)),
                0 === (1 & t) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function () {
              var e = this.words[this.length - 1],
                t = this._countBits(e);
              return 26 * (this.length - 1) + t;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (((e += r), 26 !== r)) break;
              }
              return e;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (e) {
              return 0 !== this.negative
                ? this.abs().inotn(e).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (e) {
              return this.testn(e - 1)
                ? this.notn(e).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (o.prototype.iuor = function (e) {
              for (; this.length < e.length; ) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this._strip();
            }),
            (o.prototype.ior = function (e) {
              return n(0 === (this.negative | e.negative)), this.iuor(e);
            }),
            (o.prototype.or = function (e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this);
            }),
            (o.prototype.uor = function (e) {
              return this.length > e.length
                ? this.clone().iuor(e)
                : e.clone().iuor(this);
            }),
            (o.prototype.iuand = function (e) {
              var t;
              t = this.length > e.length ? e : this;
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] & e.words[r];
              return (this.length = t.length), this._strip();
            }),
            (o.prototype.iand = function (e) {
              return n(0 === (this.negative | e.negative)), this.iuand(e);
            }),
            (o.prototype.and = function (e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this);
            }),
            (o.prototype.uand = function (e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (e) {
              var t, r;
              this.length > e.length
                ? ((t = this), (r = e))
                : ((t = e), (r = this));
              for (var n = 0; n < r.length; n++)
                this.words[n] = t.words[n] ^ r.words[n];
              if (this !== t)
                for (; n < t.length; n++) this.words[n] = t.words[n];
              return (this.length = t.length), this._strip();
            }),
            (o.prototype.ixor = function (e) {
              return n(0 === (this.negative | e.negative)), this.iuxor(e);
            }),
            (o.prototype.xor = function (e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this);
            }),
            (o.prototype.uxor = function (e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = 0 | Math.ceil(e / 26),
                r = e % 26;
              this._expand(t), r > 0 && t--;
              for (var i = 0; i < t; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (e) {
              return this.clone().inotn(e);
            }),
            (o.prototype.setn = function (e, t) {
              n("number" === typeof e && e >= 0);
              var r = (e / 26) | 0,
                i = e % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = t
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (e) {
              var t, r, n;
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0),
                  (t = this.isub(e)),
                  (e.negative = 1),
                  t._normSign()
                );
              this.length > e.length
                ? ((r = this), (n = e))
                : ((r = e), (n = this));
              for (var i = 0, o = 0; o < n.length; o++)
                (t = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26);
              for (; 0 !== i && o < r.length; o++)
                (t = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26);
              if (((this.length = r.length), 0 !== i))
                (this.words[this.length] = i), this.length++;
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (e) {
              var t;
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (t = e.sub(this)),
                  (this.negative = 1),
                  t)
                : this.length > e.length
                ? this.clone().iadd(e)
                : e.clone().iadd(this);
            }),
            (o.prototype.isub = function (e) {
              if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return (e.negative = 1), t._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(e),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n,
                i = this.cmp(e);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((r = this), (n = e)) : ((r = e), (n = this));
              for (var o = 0, a = 0; a < n.length; a++)
                (o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & t);
              for (; 0 !== o && a < r.length; a++)
                (o = (t = (0 | r.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & t);
              if (0 === o && a < r.length && r !== this)
                for (; a < r.length; a++) this.words[a] = r.words[a];
              return (
                (this.length = Math.max(this.length, a)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (e) {
              return this.clone().isub(e);
            });
          var m = function (e, t, r) {
            var n,
              i,
              o,
              a = e.words,
              s = t.words,
              u = r.words,
              c = 0,
              l = 0 | a[0],
              h = 8191 & l,
              d = l >>> 13,
              f = 0 | a[1],
              p = 8191 & f,
              v = f >>> 13,
              m = 0 | a[2],
              y = 8191 & m,
              g = m >>> 13,
              b = 0 | a[3],
              w = 8191 & b,
              _ = b >>> 13,
              O = 0 | a[4],
              M = 8191 & O,
              E = O >>> 13,
              S = 0 | a[5],
              k = 8191 & S,
              j = S >>> 13,
              x = 0 | a[6],
              P = 8191 & x,
              A = x >>> 13,
              R = 0 | a[7],
              C = 8191 & R,
              T = R >>> 13,
              L = 0 | a[8],
              N = 8191 & L,
              I = L >>> 13,
              D = 0 | a[9],
              U = 8191 & D,
              B = D >>> 13,
              F = 0 | s[0],
              K = 8191 & F,
              q = F >>> 13,
              H = 0 | s[1],
              W = 8191 & H,
              V = H >>> 13,
              G = 0 | s[2],
              Y = 8191 & G,
              z = G >>> 13,
              X = 0 | s[3],
              J = 8191 & X,
              Z = X >>> 13,
              $ = 0 | s[4],
              Q = 8191 & $,
              ee = $ >>> 13,
              te = 0 | s[5],
              re = 8191 & te,
              ne = te >>> 13,
              ie = 0 | s[6],
              oe = 8191 & ie,
              ae = ie >>> 13,
              se = 0 | s[7],
              ue = 8191 & se,
              ce = se >>> 13,
              le = 0 | s[8],
              he = 8191 & le,
              de = le >>> 13,
              fe = 0 | s[9],
              pe = 8191 & fe,
              ve = fe >>> 13;
            (r.negative = e.negative ^ t.negative), (r.length = 19);
            var me =
              (((c + (n = Math.imul(h, K))) | 0) +
                ((8191 & (i = ((i = Math.imul(h, q)) + Math.imul(d, K)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = Math.imul(d, q)) + (i >>> 13)) | 0) + (me >>> 26)) | 0),
              (me &= 67108863),
              (n = Math.imul(p, K)),
              (i = ((i = Math.imul(p, q)) + Math.imul(v, K)) | 0),
              (o = Math.imul(v, q));
            var ye =
              (((c + (n = (n + Math.imul(h, W)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, V)) | 0) + Math.imul(d, W)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, V)) | 0) + (i >>> 13)) | 0) +
                (ye >>> 26)) |
              0),
              (ye &= 67108863),
              (n = Math.imul(y, K)),
              (i = ((i = Math.imul(y, q)) + Math.imul(g, K)) | 0),
              (o = Math.imul(g, q)),
              (n = (n + Math.imul(p, W)) | 0),
              (i = ((i = (i + Math.imul(p, V)) | 0) + Math.imul(v, W)) | 0),
              (o = (o + Math.imul(v, V)) | 0);
            var ge =
              (((c + (n = (n + Math.imul(h, Y)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, z)) | 0) + Math.imul(d, Y)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, z)) | 0) + (i >>> 13)) | 0) +
                (ge >>> 26)) |
              0),
              (ge &= 67108863),
              (n = Math.imul(w, K)),
              (i = ((i = Math.imul(w, q)) + Math.imul(_, K)) | 0),
              (o = Math.imul(_, q)),
              (n = (n + Math.imul(y, W)) | 0),
              (i = ((i = (i + Math.imul(y, V)) | 0) + Math.imul(g, W)) | 0),
              (o = (o + Math.imul(g, V)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (i = ((i = (i + Math.imul(p, z)) | 0) + Math.imul(v, Y)) | 0),
              (o = (o + Math.imul(v, z)) | 0);
            var be =
              (((c + (n = (n + Math.imul(h, J)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, Z)) | 0) + Math.imul(d, J)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, Z)) | 0) + (i >>> 13)) | 0) +
                (be >>> 26)) |
              0),
              (be &= 67108863),
              (n = Math.imul(M, K)),
              (i = ((i = Math.imul(M, q)) + Math.imul(E, K)) | 0),
              (o = Math.imul(E, q)),
              (n = (n + Math.imul(w, W)) | 0),
              (i = ((i = (i + Math.imul(w, V)) | 0) + Math.imul(_, W)) | 0),
              (o = (o + Math.imul(_, V)) | 0),
              (n = (n + Math.imul(y, Y)) | 0),
              (i = ((i = (i + Math.imul(y, z)) | 0) + Math.imul(g, Y)) | 0),
              (o = (o + Math.imul(g, z)) | 0),
              (n = (n + Math.imul(p, J)) | 0),
              (i = ((i = (i + Math.imul(p, Z)) | 0) + Math.imul(v, J)) | 0),
              (o = (o + Math.imul(v, Z)) | 0);
            var we =
              (((c + (n = (n + Math.imul(h, Q)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ee)) | 0) + Math.imul(d, Q)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, ee)) | 0) + (i >>> 13)) | 0) +
                (we >>> 26)) |
              0),
              (we &= 67108863),
              (n = Math.imul(k, K)),
              (i = ((i = Math.imul(k, q)) + Math.imul(j, K)) | 0),
              (o = Math.imul(j, q)),
              (n = (n + Math.imul(M, W)) | 0),
              (i = ((i = (i + Math.imul(M, V)) | 0) + Math.imul(E, W)) | 0),
              (o = (o + Math.imul(E, V)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (i = ((i = (i + Math.imul(w, z)) | 0) + Math.imul(_, Y)) | 0),
              (o = (o + Math.imul(_, z)) | 0),
              (n = (n + Math.imul(y, J)) | 0),
              (i = ((i = (i + Math.imul(y, Z)) | 0) + Math.imul(g, J)) | 0),
              (o = (o + Math.imul(g, Z)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (i = ((i = (i + Math.imul(p, ee)) | 0) + Math.imul(v, Q)) | 0),
              (o = (o + Math.imul(v, ee)) | 0);
            var _e =
              (((c + (n = (n + Math.imul(h, re)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ne)) | 0) + Math.imul(d, re)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, ne)) | 0) + (i >>> 13)) | 0) +
                (_e >>> 26)) |
              0),
              (_e &= 67108863),
              (n = Math.imul(P, K)),
              (i = ((i = Math.imul(P, q)) + Math.imul(A, K)) | 0),
              (o = Math.imul(A, q)),
              (n = (n + Math.imul(k, W)) | 0),
              (i = ((i = (i + Math.imul(k, V)) | 0) + Math.imul(j, W)) | 0),
              (o = (o + Math.imul(j, V)) | 0),
              (n = (n + Math.imul(M, Y)) | 0),
              (i = ((i = (i + Math.imul(M, z)) | 0) + Math.imul(E, Y)) | 0),
              (o = (o + Math.imul(E, z)) | 0),
              (n = (n + Math.imul(w, J)) | 0),
              (i = ((i = (i + Math.imul(w, Z)) | 0) + Math.imul(_, J)) | 0),
              (o = (o + Math.imul(_, Z)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (i = ((i = (i + Math.imul(y, ee)) | 0) + Math.imul(g, Q)) | 0),
              (o = (o + Math.imul(g, ee)) | 0),
              (n = (n + Math.imul(p, re)) | 0),
              (i = ((i = (i + Math.imul(p, ne)) | 0) + Math.imul(v, re)) | 0),
              (o = (o + Math.imul(v, ne)) | 0);
            var Oe =
              (((c + (n = (n + Math.imul(h, oe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ae)) | 0) + Math.imul(d, oe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, ae)) | 0) + (i >>> 13)) | 0) +
                (Oe >>> 26)) |
              0),
              (Oe &= 67108863),
              (n = Math.imul(C, K)),
              (i = ((i = Math.imul(C, q)) + Math.imul(T, K)) | 0),
              (o = Math.imul(T, q)),
              (n = (n + Math.imul(P, W)) | 0),
              (i = ((i = (i + Math.imul(P, V)) | 0) + Math.imul(A, W)) | 0),
              (o = (o + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(k, Y)) | 0),
              (i = ((i = (i + Math.imul(k, z)) | 0) + Math.imul(j, Y)) | 0),
              (o = (o + Math.imul(j, z)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (i = ((i = (i + Math.imul(M, Z)) | 0) + Math.imul(E, J)) | 0),
              (o = (o + Math.imul(E, Z)) | 0),
              (n = (n + Math.imul(w, Q)) | 0),
              (i = ((i = (i + Math.imul(w, ee)) | 0) + Math.imul(_, Q)) | 0),
              (o = (o + Math.imul(_, ee)) | 0),
              (n = (n + Math.imul(y, re)) | 0),
              (i = ((i = (i + Math.imul(y, ne)) | 0) + Math.imul(g, re)) | 0),
              (o = (o + Math.imul(g, ne)) | 0),
              (n = (n + Math.imul(p, oe)) | 0),
              (i = ((i = (i + Math.imul(p, ae)) | 0) + Math.imul(v, oe)) | 0),
              (o = (o + Math.imul(v, ae)) | 0);
            var Me =
              (((c + (n = (n + Math.imul(h, ue)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ce)) | 0) + Math.imul(d, ue)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, ce)) | 0) + (i >>> 13)) | 0) +
                (Me >>> 26)) |
              0),
              (Me &= 67108863),
              (n = Math.imul(N, K)),
              (i = ((i = Math.imul(N, q)) + Math.imul(I, K)) | 0),
              (o = Math.imul(I, q)),
              (n = (n + Math.imul(C, W)) | 0),
              (i = ((i = (i + Math.imul(C, V)) | 0) + Math.imul(T, W)) | 0),
              (o = (o + Math.imul(T, V)) | 0),
              (n = (n + Math.imul(P, Y)) | 0),
              (i = ((i = (i + Math.imul(P, z)) | 0) + Math.imul(A, Y)) | 0),
              (o = (o + Math.imul(A, z)) | 0),
              (n = (n + Math.imul(k, J)) | 0),
              (i = ((i = (i + Math.imul(k, Z)) | 0) + Math.imul(j, J)) | 0),
              (o = (o + Math.imul(j, Z)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (i = ((i = (i + Math.imul(M, ee)) | 0) + Math.imul(E, Q)) | 0),
              (o = (o + Math.imul(E, ee)) | 0),
              (n = (n + Math.imul(w, re)) | 0),
              (i = ((i = (i + Math.imul(w, ne)) | 0) + Math.imul(_, re)) | 0),
              (o = (o + Math.imul(_, ne)) | 0),
              (n = (n + Math.imul(y, oe)) | 0),
              (i = ((i = (i + Math.imul(y, ae)) | 0) + Math.imul(g, oe)) | 0),
              (o = (o + Math.imul(g, ae)) | 0),
              (n = (n + Math.imul(p, ue)) | 0),
              (i = ((i = (i + Math.imul(p, ce)) | 0) + Math.imul(v, ue)) | 0),
              (o = (o + Math.imul(v, ce)) | 0);
            var Ee =
              (((c + (n = (n + Math.imul(h, he)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, de)) | 0) + Math.imul(d, he)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, de)) | 0) + (i >>> 13)) | 0) +
                (Ee >>> 26)) |
              0),
              (Ee &= 67108863),
              (n = Math.imul(U, K)),
              (i = ((i = Math.imul(U, q)) + Math.imul(B, K)) | 0),
              (o = Math.imul(B, q)),
              (n = (n + Math.imul(N, W)) | 0),
              (i = ((i = (i + Math.imul(N, V)) | 0) + Math.imul(I, W)) | 0),
              (o = (o + Math.imul(I, V)) | 0),
              (n = (n + Math.imul(C, Y)) | 0),
              (i = ((i = (i + Math.imul(C, z)) | 0) + Math.imul(T, Y)) | 0),
              (o = (o + Math.imul(T, z)) | 0),
              (n = (n + Math.imul(P, J)) | 0),
              (i = ((i = (i + Math.imul(P, Z)) | 0) + Math.imul(A, J)) | 0),
              (o = (o + Math.imul(A, Z)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (i = ((i = (i + Math.imul(k, ee)) | 0) + Math.imul(j, Q)) | 0),
              (o = (o + Math.imul(j, ee)) | 0),
              (n = (n + Math.imul(M, re)) | 0),
              (i = ((i = (i + Math.imul(M, ne)) | 0) + Math.imul(E, re)) | 0),
              (o = (o + Math.imul(E, ne)) | 0),
              (n = (n + Math.imul(w, oe)) | 0),
              (i = ((i = (i + Math.imul(w, ae)) | 0) + Math.imul(_, oe)) | 0),
              (o = (o + Math.imul(_, ae)) | 0),
              (n = (n + Math.imul(y, ue)) | 0),
              (i = ((i = (i + Math.imul(y, ce)) | 0) + Math.imul(g, ue)) | 0),
              (o = (o + Math.imul(g, ce)) | 0),
              (n = (n + Math.imul(p, he)) | 0),
              (i = ((i = (i + Math.imul(p, de)) | 0) + Math.imul(v, he)) | 0),
              (o = (o + Math.imul(v, de)) | 0);
            var Se =
              (((c + (n = (n + Math.imul(h, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ve)) | 0) + Math.imul(d, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(d, ve)) | 0) + (i >>> 13)) | 0) +
                (Se >>> 26)) |
              0),
              (Se &= 67108863),
              (n = Math.imul(U, W)),
              (i = ((i = Math.imul(U, V)) + Math.imul(B, W)) | 0),
              (o = Math.imul(B, V)),
              (n = (n + Math.imul(N, Y)) | 0),
              (i = ((i = (i + Math.imul(N, z)) | 0) + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, z)) | 0),
              (n = (n + Math.imul(C, J)) | 0),
              (i = ((i = (i + Math.imul(C, Z)) | 0) + Math.imul(T, J)) | 0),
              (o = (o + Math.imul(T, Z)) | 0),
              (n = (n + Math.imul(P, Q)) | 0),
              (i = ((i = (i + Math.imul(P, ee)) | 0) + Math.imul(A, Q)) | 0),
              (o = (o + Math.imul(A, ee)) | 0),
              (n = (n + Math.imul(k, re)) | 0),
              (i = ((i = (i + Math.imul(k, ne)) | 0) + Math.imul(j, re)) | 0),
              (o = (o + Math.imul(j, ne)) | 0),
              (n = (n + Math.imul(M, oe)) | 0),
              (i = ((i = (i + Math.imul(M, ae)) | 0) + Math.imul(E, oe)) | 0),
              (o = (o + Math.imul(E, ae)) | 0),
              (n = (n + Math.imul(w, ue)) | 0),
              (i = ((i = (i + Math.imul(w, ce)) | 0) + Math.imul(_, ue)) | 0),
              (o = (o + Math.imul(_, ce)) | 0),
              (n = (n + Math.imul(y, he)) | 0),
              (i = ((i = (i + Math.imul(y, de)) | 0) + Math.imul(g, he)) | 0),
              (o = (o + Math.imul(g, de)) | 0);
            var ke =
              (((c + (n = (n + Math.imul(p, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(p, ve)) | 0) + Math.imul(v, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(v, ve)) | 0) + (i >>> 13)) | 0) +
                (ke >>> 26)) |
              0),
              (ke &= 67108863),
              (n = Math.imul(U, Y)),
              (i = ((i = Math.imul(U, z)) + Math.imul(B, Y)) | 0),
              (o = Math.imul(B, z)),
              (n = (n + Math.imul(N, J)) | 0),
              (i = ((i = (i + Math.imul(N, Z)) | 0) + Math.imul(I, J)) | 0),
              (o = (o + Math.imul(I, Z)) | 0),
              (n = (n + Math.imul(C, Q)) | 0),
              (i = ((i = (i + Math.imul(C, ee)) | 0) + Math.imul(T, Q)) | 0),
              (o = (o + Math.imul(T, ee)) | 0),
              (n = (n + Math.imul(P, re)) | 0),
              (i = ((i = (i + Math.imul(P, ne)) | 0) + Math.imul(A, re)) | 0),
              (o = (o + Math.imul(A, ne)) | 0),
              (n = (n + Math.imul(k, oe)) | 0),
              (i = ((i = (i + Math.imul(k, ae)) | 0) + Math.imul(j, oe)) | 0),
              (o = (o + Math.imul(j, ae)) | 0),
              (n = (n + Math.imul(M, ue)) | 0),
              (i = ((i = (i + Math.imul(M, ce)) | 0) + Math.imul(E, ue)) | 0),
              (o = (o + Math.imul(E, ce)) | 0),
              (n = (n + Math.imul(w, he)) | 0),
              (i = ((i = (i + Math.imul(w, de)) | 0) + Math.imul(_, he)) | 0),
              (o = (o + Math.imul(_, de)) | 0);
            var je =
              (((c + (n = (n + Math.imul(y, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(y, ve)) | 0) + Math.imul(g, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(g, ve)) | 0) + (i >>> 13)) | 0) +
                (je >>> 26)) |
              0),
              (je &= 67108863),
              (n = Math.imul(U, J)),
              (i = ((i = Math.imul(U, Z)) + Math.imul(B, J)) | 0),
              (o = Math.imul(B, Z)),
              (n = (n + Math.imul(N, Q)) | 0),
              (i = ((i = (i + Math.imul(N, ee)) | 0) + Math.imul(I, Q)) | 0),
              (o = (o + Math.imul(I, ee)) | 0),
              (n = (n + Math.imul(C, re)) | 0),
              (i = ((i = (i + Math.imul(C, ne)) | 0) + Math.imul(T, re)) | 0),
              (o = (o + Math.imul(T, ne)) | 0),
              (n = (n + Math.imul(P, oe)) | 0),
              (i = ((i = (i + Math.imul(P, ae)) | 0) + Math.imul(A, oe)) | 0),
              (o = (o + Math.imul(A, ae)) | 0),
              (n = (n + Math.imul(k, ue)) | 0),
              (i = ((i = (i + Math.imul(k, ce)) | 0) + Math.imul(j, ue)) | 0),
              (o = (o + Math.imul(j, ce)) | 0),
              (n = (n + Math.imul(M, he)) | 0),
              (i = ((i = (i + Math.imul(M, de)) | 0) + Math.imul(E, he)) | 0),
              (o = (o + Math.imul(E, de)) | 0);
            var xe =
              (((c + (n = (n + Math.imul(w, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(w, ve)) | 0) + Math.imul(_, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(_, ve)) | 0) + (i >>> 13)) | 0) +
                (xe >>> 26)) |
              0),
              (xe &= 67108863),
              (n = Math.imul(U, Q)),
              (i = ((i = Math.imul(U, ee)) + Math.imul(B, Q)) | 0),
              (o = Math.imul(B, ee)),
              (n = (n + Math.imul(N, re)) | 0),
              (i = ((i = (i + Math.imul(N, ne)) | 0) + Math.imul(I, re)) | 0),
              (o = (o + Math.imul(I, ne)) | 0),
              (n = (n + Math.imul(C, oe)) | 0),
              (i = ((i = (i + Math.imul(C, ae)) | 0) + Math.imul(T, oe)) | 0),
              (o = (o + Math.imul(T, ae)) | 0),
              (n = (n + Math.imul(P, ue)) | 0),
              (i = ((i = (i + Math.imul(P, ce)) | 0) + Math.imul(A, ue)) | 0),
              (o = (o + Math.imul(A, ce)) | 0),
              (n = (n + Math.imul(k, he)) | 0),
              (i = ((i = (i + Math.imul(k, de)) | 0) + Math.imul(j, he)) | 0),
              (o = (o + Math.imul(j, de)) | 0);
            var Pe =
              (((c + (n = (n + Math.imul(M, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(M, ve)) | 0) + Math.imul(E, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(E, ve)) | 0) + (i >>> 13)) | 0) +
                (Pe >>> 26)) |
              0),
              (Pe &= 67108863),
              (n = Math.imul(U, re)),
              (i = ((i = Math.imul(U, ne)) + Math.imul(B, re)) | 0),
              (o = Math.imul(B, ne)),
              (n = (n + Math.imul(N, oe)) | 0),
              (i = ((i = (i + Math.imul(N, ae)) | 0) + Math.imul(I, oe)) | 0),
              (o = (o + Math.imul(I, ae)) | 0),
              (n = (n + Math.imul(C, ue)) | 0),
              (i = ((i = (i + Math.imul(C, ce)) | 0) + Math.imul(T, ue)) | 0),
              (o = (o + Math.imul(T, ce)) | 0),
              (n = (n + Math.imul(P, he)) | 0),
              (i = ((i = (i + Math.imul(P, de)) | 0) + Math.imul(A, he)) | 0),
              (o = (o + Math.imul(A, de)) | 0);
            var Ae =
              (((c + (n = (n + Math.imul(k, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(k, ve)) | 0) + Math.imul(j, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(j, ve)) | 0) + (i >>> 13)) | 0) +
                (Ae >>> 26)) |
              0),
              (Ae &= 67108863),
              (n = Math.imul(U, oe)),
              (i = ((i = Math.imul(U, ae)) + Math.imul(B, oe)) | 0),
              (o = Math.imul(B, ae)),
              (n = (n + Math.imul(N, ue)) | 0),
              (i = ((i = (i + Math.imul(N, ce)) | 0) + Math.imul(I, ue)) | 0),
              (o = (o + Math.imul(I, ce)) | 0),
              (n = (n + Math.imul(C, he)) | 0),
              (i = ((i = (i + Math.imul(C, de)) | 0) + Math.imul(T, he)) | 0),
              (o = (o + Math.imul(T, de)) | 0);
            var Re =
              (((c + (n = (n + Math.imul(P, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(P, ve)) | 0) + Math.imul(A, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(A, ve)) | 0) + (i >>> 13)) | 0) +
                (Re >>> 26)) |
              0),
              (Re &= 67108863),
              (n = Math.imul(U, ue)),
              (i = ((i = Math.imul(U, ce)) + Math.imul(B, ue)) | 0),
              (o = Math.imul(B, ce)),
              (n = (n + Math.imul(N, he)) | 0),
              (i = ((i = (i + Math.imul(N, de)) | 0) + Math.imul(I, he)) | 0),
              (o = (o + Math.imul(I, de)) | 0);
            var Ce =
              (((c + (n = (n + Math.imul(C, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(C, ve)) | 0) + Math.imul(T, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(T, ve)) | 0) + (i >>> 13)) | 0) +
                (Ce >>> 26)) |
              0),
              (Ce &= 67108863),
              (n = Math.imul(U, he)),
              (i = ((i = Math.imul(U, de)) + Math.imul(B, he)) | 0),
              (o = Math.imul(B, de));
            var Te =
              (((c + (n = (n + Math.imul(N, pe)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(N, ve)) | 0) + Math.imul(I, pe)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(I, ve)) | 0) + (i >>> 13)) | 0) +
                (Te >>> 26)) |
              0),
              (Te &= 67108863);
            var Le =
              (((c + (n = Math.imul(U, pe))) | 0) +
                ((8191 &
                  (i = ((i = Math.imul(U, ve)) + Math.imul(B, pe)) | 0)) <<
                  13)) |
              0;
            return (
              (c =
                ((((o = Math.imul(B, ve)) + (i >>> 13)) | 0) + (Le >>> 26)) |
                0),
              (Le &= 67108863),
              (u[0] = me),
              (u[1] = ye),
              (u[2] = ge),
              (u[3] = be),
              (u[4] = we),
              (u[5] = _e),
              (u[6] = Oe),
              (u[7] = Me),
              (u[8] = Ee),
              (u[9] = Se),
              (u[10] = ke),
              (u[11] = je),
              (u[12] = xe),
              (u[13] = Pe),
              (u[14] = Ae),
              (u[15] = Re),
              (u[16] = Ce),
              (u[17] = Te),
              (u[18] = Le),
              0 !== c && ((u[19] = c), r.length++),
              r
            );
          };
          function y(e, t, r) {
            (r.negative = t.negative ^ e.negative),
              (r.length = e.length + t.length);
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var a = i;
              i = 0;
              for (
                var s = 67108863 & n,
                  u = Math.min(o, t.length - 1),
                  c = Math.max(0, o - e.length + 1);
                c <= u;
                c++
              ) {
                var l = o - c,
                  h = (0 | e.words[l]) * (0 | t.words[c]),
                  d = 67108863 & h;
                (s = 67108863 & (d = (d + s) | 0)),
                  (i +=
                    (a =
                      ((a = (a + ((h / 67108864) | 0)) | 0) + (d >>> 26)) |
                      0) >>> 26),
                  (a &= 67108863);
              }
              (r.words[o] = s), (n = a), (a = i);
            }
            return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
          }
          function g(e, t, r) {
            return y(e, t, r);
          }
          function b(e, t) {
            (this.x = e), (this.y = t);
          }
          Math.imul || (m = v),
            (o.prototype.mulTo = function (e, t) {
              var r = this.length + e.length;
              return 10 === this.length && 10 === e.length
                ? m(this, e, t)
                : r < 63
                ? v(this, e, t)
                : r < 1024
                ? y(this, e, t)
                : g(this, e, t);
            }),
            (b.prototype.makeRBT = function (e) {
              for (
                var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0;
                n < e;
                n++
              )
                t[n] = this.revBin(n, r, e);
              return t;
            }),
            (b.prototype.revBin = function (e, t, r) {
              if (0 === e || e === r - 1) return e;
              for (var n = 0, i = 0; i < t; i++)
                (n |= (1 & e) << (t - i - 1)), (e >>= 1);
              return n;
            }),
            (b.prototype.permute = function (e, t, r, n, i, o) {
              for (var a = 0; a < o; a++) (n[a] = t[e[a]]), (i[a] = r[e[a]]);
            }),
            (b.prototype.transform = function (e, t, r, n, i, o) {
              this.permute(o, e, t, r, n, i);
              for (var a = 1; a < i; a <<= 1)
                for (
                  var s = a << 1,
                    u = Math.cos((2 * Math.PI) / s),
                    c = Math.sin((2 * Math.PI) / s),
                    l = 0;
                  l < i;
                  l += s
                )
                  for (var h = u, d = c, f = 0; f < a; f++) {
                    var p = r[l + f],
                      v = n[l + f],
                      m = r[l + f + a],
                      y = n[l + f + a],
                      g = h * m - d * y;
                    (y = h * y + d * m),
                      (m = g),
                      (r[l + f] = p + m),
                      (n[l + f] = v + y),
                      (r[l + f + a] = p - m),
                      (n[l + f + a] = v - y),
                      f !== s &&
                        ((g = u * h - c * d), (d = u * d + c * h), (h = g));
                  }
            }),
            (b.prototype.guessLen13b = function (e, t) {
              var r = 1 | Math.max(t, e),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (b.prototype.conjugate = function (e, t, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = e[n];
                  (e[n] = e[r - n - 1]),
                    (e[r - n - 1] = i),
                    (i = t[n]),
                    (t[n] = -t[r - n - 1]),
                    (t[r - n - 1] = -i);
                }
            }),
            (b.prototype.normalize13b = function (e, t) {
              for (var r = 0, n = 0; n < t / 2; n++) {
                var i =
                  8192 * Math.round(e[2 * n + 1] / t) +
                  Math.round(e[2 * n] / t) +
                  r;
                (e[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0);
              }
              return e;
            }),
            (b.prototype.convert13b = function (e, t, r, i) {
              for (var o = 0, a = 0; a < t; a++)
                (o += 0 | e[a]),
                  (r[2 * a] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * a + 1] = 8191 & o),
                  (o >>>= 13);
              for (a = 2 * t; a < i; ++a) r[a] = 0;
              n(0 === o), n(0 === (-8192 & o));
            }),
            (b.prototype.stub = function (e) {
              for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
              return t;
            }),
            (b.prototype.mulp = function (e, t, r) {
              var n = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                a = new Array(n),
                s = new Array(n),
                u = new Array(n),
                c = new Array(n),
                l = new Array(n),
                h = new Array(n),
                d = r.words;
              (d.length = n),
                this.convert13b(e.words, e.length, a, n),
                this.convert13b(t.words, t.length, c, n),
                this.transform(a, o, s, u, n, i),
                this.transform(c, o, l, h, n, i);
              for (var f = 0; f < n; f++) {
                var p = s[f] * l[f] - u[f] * h[f];
                (u[f] = s[f] * h[f] + u[f] * l[f]), (s[f] = p);
              }
              return (
                this.conjugate(s, u, n),
                this.transform(s, u, d, o, n, i),
                this.conjugate(d, o, n),
                this.normalize13b(d, n),
                (r.negative = e.negative ^ t.negative),
                (r.length = e.length + t.length),
                r._strip()
              );
            }),
            (o.prototype.mul = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
              );
            }),
            (o.prototype.mulf = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)), g(this, e, t)
              );
            }),
            (o.prototype.imul = function (e) {
              return this.clone().mulTo(e, this);
            }),
            (o.prototype.imuln = function (e) {
              var t = e < 0;
              t && (e = -e), n("number" === typeof e), n(e < 67108864);
              for (var r = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * e,
                  a = (67108863 & o) + (67108863 & r);
                (r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += a >>> 26),
                  (this.words[i] = 67108863 & a);
              }
              return (
                0 !== r && ((this.words[i] = r), this.length++),
                t ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (e) {
              return this.clone().imuln(e);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (e) {
              var t = (function (e) {
                for (
                  var t = new Array(e.bitLength()), r = 0;
                  r < t.length;
                  r++
                ) {
                  var n = (r / 26) | 0,
                    i = r % 26;
                  t[r] = (e.words[n] >>> i) & 1;
                }
                return t;
              })(e);
              if (0 === t.length) return new o(1);
              for (
                var r = this, n = 0;
                n < t.length && 0 === t[n];
                n++, r = r.sqr()
              );
              if (++n < t.length)
                for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                  0 !== t[n] && (r = r.mul(i));
              return r;
            }),
            (o.prototype.iushln = function (e) {
              n("number" === typeof e && e >= 0);
              var t,
                r = e % 26,
                i = (e - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var a = 0;
                for (t = 0; t < this.length; t++) {
                  var s = this.words[t] & o,
                    u = ((0 | this.words[t]) - s) << r;
                  (this.words[t] = u | a), (a = s >>> (26 - r));
                }
                a && ((this.words[t] = a), this.length++);
              }
              if (0 !== i) {
                for (t = this.length - 1; t >= 0; t--)
                  this.words[t + i] = this.words[t];
                for (t = 0; t < i; t++) this.words[t] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (e) {
              return n(0 === this.negative), this.iushln(e);
            }),
            (o.prototype.iushrn = function (e, t, r) {
              var i;
              n("number" === typeof e && e >= 0),
                (i = t ? (t - (t % 26)) / 26 : 0);
              var o = e % 26,
                a = Math.min((e - o) / 26, this.length),
                s = 67108863 ^ ((67108863 >>> o) << o),
                u = r;
              if (((i -= a), (i = Math.max(0, i)), u)) {
                for (var c = 0; c < a; c++) u.words[c] = this.words[c];
                u.length = a;
              }
              if (0 === a);
              else if (this.length > a)
                for (this.length -= a, c = 0; c < this.length; c++)
                  this.words[c] = this.words[c + a];
              else (this.words[0] = 0), (this.length = 1);
              var l = 0;
              for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
                var h = 0 | this.words[c];
                (this.words[c] = (l << (26 - o)) | (h >>> o)), (l = h & s);
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (e, t, r) {
              return n(0 === this.negative), this.iushrn(e, t, r);
            }),
            (o.prototype.shln = function (e) {
              return this.clone().ishln(e);
            }),
            (o.prototype.ushln = function (e) {
              return this.clone().iushln(e);
            }),
            (o.prototype.shrn = function (e) {
              return this.clone().ishrn(e);
            }),
            (o.prototype.ushrn = function (e) {
              return this.clone().iushrn(e);
            }),
            (o.prototype.testn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
              return !(this.length <= r) && !!(this.words[r] & i);
            }),
            (o.prototype.imaskn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26;
              if (
                (n(
                  0 === this.negative,
                  "imaskn works only with positive numbers"
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== t && r++,
                (this.length = Math.min(r, this.length)),
                0 !== t)
              ) {
                var i = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (e) {
              return this.clone().imaskn(e);
            }),
            (o.prototype.iaddn = function (e) {
              return (
                n("number" === typeof e),
                n(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) <= e
                    ? ((this.words[0] = e - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(e),
                      (this.negative = 1),
                      this)
                  : this._iaddn(e)
              );
            }),
            (o.prototype._iaddn = function (e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                (this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++;
              return (this.length = Math.max(this.length, t + 1)), this;
            }),
            (o.prototype.isubn = function (e) {
              if ((n("number" === typeof e), n(e < 67108864), e < 0))
                return this.iaddn(-e);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(e), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  (this.words[t] += 67108864), (this.words[t + 1] -= 1);
              return this._strip();
            }),
            (o.prototype.addn = function (e) {
              return this.clone().iaddn(e);
            }),
            (o.prototype.subn = function (e) {
              return this.clone().isubn(e);
            }),
            (o.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (e, t, r) {
              var i,
                o,
                a = e.length + r;
              this._expand(a);
              var s = 0;
              for (i = 0; i < e.length; i++) {
                o = (0 | this.words[i + r]) + s;
                var u = (0 | e.words[i]) * t;
                (s = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & o);
              }
              for (; i < this.length - r; i++)
                (s = (o = (0 | this.words[i + r]) + s) >> 26),
                  (this.words[i + r] = 67108863 & o);
              if (0 === s) return this._strip();
              for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
                (s = (o = -(0 | this.words[i]) + s) >> 26),
                  (this.words[i] = 67108863 & o);
              return (this.negative = 1), this._strip();
            }),
            (o.prototype._wordDiv = function (e, t) {
              var r = (this.length, e.length),
                n = this.clone(),
                i = e,
                a = 0 | i.words[i.length - 1];
              0 !== (r = 26 - this._countBits(a)) &&
                ((i = i.ushln(r)),
                n.iushln(r),
                (a = 0 | i.words[i.length - 1]));
              var s,
                u = n.length - i.length;
              if ("mod" !== t) {
                ((s = new o(null)).length = u + 1),
                  (s.words = new Array(s.length));
                for (var c = 0; c < s.length; c++) s.words[c] = 0;
              }
              var l = n.clone()._ishlnsubmul(i, 1, u);
              0 === l.negative && ((n = l), s && (s.words[u] = 1));
              for (var h = u - 1; h >= 0; h--) {
                var d =
                  67108864 * (0 | n.words[i.length + h]) +
                  (0 | n.words[i.length + h - 1]);
                for (
                  d = Math.min((d / a) | 0, 67108863), n._ishlnsubmul(i, d, h);
                  0 !== n.negative;

                )
                  d--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, h),
                    n.isZero() || (n.negative ^= 1);
                s && (s.words[h] = d);
              }
              return (
                s && s._strip(),
                n._strip(),
                "div" !== t && 0 !== r && n.iushrn(r),
                { div: s || null, mod: n }
              );
            }),
            (o.prototype.divmod = function (e, t, r) {
              return (
                n(!e.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === e.negative
                  ? ((s = this.neg().divmod(e, t)),
                    "mod" !== t && (i = s.div.neg()),
                    "div" !== t &&
                      ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(e)),
                    { div: i, mod: a })
                  : 0 === this.negative && 0 !== e.negative
                  ? ((s = this.divmod(e.neg(), t)),
                    "mod" !== t && (i = s.div.neg()),
                    { div: i, mod: s.mod })
                  : 0 !== (this.negative & e.negative)
                  ? ((s = this.neg().divmod(e.neg(), t)),
                    "div" !== t &&
                      ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(e)),
                    { div: s.div, mod: a })
                  : e.length > this.length || this.cmp(e) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === e.length
                  ? "div" === t
                    ? { div: this.divn(e.words[0]), mod: null }
                    : "mod" === t
                    ? { div: null, mod: new o(this.modrn(e.words[0])) }
                    : {
                        div: this.divn(e.words[0]),
                        mod: new o(this.modrn(e.words[0])),
                      }
                  : this._wordDiv(e, t)
              );
              var i, a, s;
            }),
            (o.prototype.div = function (e) {
              return this.divmod(e, "div", !1).div;
            }),
            (o.prototype.mod = function (e) {
              return this.divmod(e, "mod", !1).mod;
            }),
            (o.prototype.umod = function (e) {
              return this.divmod(e, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (e) {
              var t = this.divmod(e);
              if (t.mod.isZero()) return t.div;
              var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                n = e.ushrn(1),
                i = e.andln(1),
                o = r.cmp(n);
              return o < 0 || (1 === i && 0 === o)
                ? t.div
                : 0 !== t.div.negative
                ? t.div.isubn(1)
                : t.div.iaddn(1);
            }),
            (o.prototype.modrn = function (e) {
              var t = e < 0;
              t && (e = -e), n(e <= 67108863);
              for (
                var r = (1 << 26) % e, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (r * i + (0 | this.words[o])) % e;
              return t ? -i : i;
            }),
            (o.prototype.modn = function (e) {
              return this.modrn(e);
            }),
            (o.prototype.idivn = function (e) {
              var t = e < 0;
              t && (e = -e), n(e <= 67108863);
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * r;
                (this.words[i] = (o / e) | 0), (r = o % e);
              }
              return this._strip(), t ? this.ineg() : this;
            }),
            (o.prototype.divn = function (e) {
              return this.clone().idivn(e);
            }),
            (o.prototype.egcd = function (e) {
              n(0 === e.negative), n(!e.isZero());
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              for (
                var i = new o(1),
                  a = new o(0),
                  s = new o(0),
                  u = new o(1),
                  c = 0;
                t.isEven() && r.isEven();

              )
                t.iushrn(1), r.iushrn(1), ++c;
              for (var l = r.clone(), h = t.clone(); !t.isZero(); ) {
                for (
                  var d = 0, f = 1;
                  0 === (t.words[0] & f) && d < 26;
                  ++d, f <<= 1
                );
                if (d > 0)
                  for (t.iushrn(d); d-- > 0; )
                    (i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(h)),
                      i.iushrn(1),
                      a.iushrn(1);
                for (
                  var p = 0, v = 1;
                  0 === (r.words[0] & v) && p < 26;
                  ++p, v <<= 1
                );
                if (p > 0)
                  for (r.iushrn(p); p-- > 0; )
                    (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(h)),
                      s.iushrn(1),
                      u.iushrn(1);
                t.cmp(r) >= 0
                  ? (t.isub(r), i.isub(s), a.isub(u))
                  : (r.isub(t), s.isub(i), u.isub(a));
              }
              return { a: s, b: u, gcd: r.iushln(c) };
            }),
            (o.prototype._invmp = function (e) {
              n(0 === e.negative), n(!e.isZero());
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              for (
                var i, a = new o(1), s = new o(0), u = r.clone();
                t.cmpn(1) > 0 && r.cmpn(1) > 0;

              ) {
                for (
                  var c = 0, l = 1;
                  0 === (t.words[0] & l) && c < 26;
                  ++c, l <<= 1
                );
                if (c > 0)
                  for (t.iushrn(c); c-- > 0; )
                    a.isOdd() && a.iadd(u), a.iushrn(1);
                for (
                  var h = 0, d = 1;
                  0 === (r.words[0] & d) && h < 26;
                  ++h, d <<= 1
                );
                if (h > 0)
                  for (r.iushrn(h); h-- > 0; )
                    s.isOdd() && s.iadd(u), s.iushrn(1);
                t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a));
              }
              return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i;
            }),
            (o.prototype.gcd = function (e) {
              if (this.isZero()) return e.abs();
              if (e.isZero()) return this.abs();
              var t = this.clone(),
                r = e.clone();
              (t.negative = 0), (r.negative = 0);
              for (var n = 0; t.isEven() && r.isEven(); n++)
                t.iushrn(1), r.iushrn(1);
              for (;;) {
                for (; t.isEven(); ) t.iushrn(1);
                for (; r.isEven(); ) r.iushrn(1);
                var i = t.cmp(r);
                if (i < 0) {
                  var o = t;
                  (t = r), (r = o);
                } else if (0 === i || 0 === r.cmpn(1)) break;
                t.isub(r);
              }
              return r.iushln(n);
            }),
            (o.prototype.invm = function (e) {
              return this.egcd(e).a.umod(e);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (e) {
              return this.words[0] & e;
            }),
            (o.prototype.bincn = function (e) {
              n("number" === typeof e);
              var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
              if (this.length <= r)
                return this._expand(r + 1), (this.words[r] |= i), this;
              for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                var s = 0 | this.words[a];
                (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
              }
              return 0 !== o && ((this.words[a] = o), this.length++), this;
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (e) {
              var t,
                r = e < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) t = 1;
              else {
                r && (e = -e), n(e <= 67108863, "Number is too big");
                var i = 0 | this.words[0];
                t = i === e ? 0 : i < e ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.cmp = function (e) {
              if (0 !== this.negative && 0 === e.negative) return -1;
              if (0 === this.negative && 0 !== e.negative) return 1;
              var t = this.ucmp(e);
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.ucmp = function (e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | e.words[r];
                if (n !== i) {
                  n < i ? (t = -1) : n > i && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (o.prototype.gtn = function (e) {
              return 1 === this.cmpn(e);
            }),
            (o.prototype.gt = function (e) {
              return 1 === this.cmp(e);
            }),
            (o.prototype.gten = function (e) {
              return this.cmpn(e) >= 0;
            }),
            (o.prototype.gte = function (e) {
              return this.cmp(e) >= 0;
            }),
            (o.prototype.ltn = function (e) {
              return -1 === this.cmpn(e);
            }),
            (o.prototype.lt = function (e) {
              return -1 === this.cmp(e);
            }),
            (o.prototype.lten = function (e) {
              return this.cmpn(e) <= 0;
            }),
            (o.prototype.lte = function (e) {
              return this.cmp(e) <= 0;
            }),
            (o.prototype.eqn = function (e) {
              return 0 === this.cmpn(e);
            }),
            (o.prototype.eq = function (e) {
              return 0 === this.cmp(e);
            }),
            (o.red = function (e) {
              return new k(e);
            }),
            (o.prototype.toRed = function (e) {
              return (
                n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                n(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (e) {
              return (this.red = e), this;
            }),
            (o.prototype.forceRed = function (e) {
              return (
                n(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
              );
            }),
            (o.prototype.redAdd = function (e) {
              return (
                n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
              );
            }),
            (o.prototype.redIAdd = function (e) {
              return (
                n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
              );
            }),
            (o.prototype.redSub = function (e) {
              return (
                n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
              );
            }),
            (o.prototype.redISub = function (e) {
              return (
                n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
              );
            }),
            (o.prototype.redShl = function (e) {
              return (
                n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
              );
            }),
            (o.prototype.redMul = function (e) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (o.prototype.redIMul = function (e) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (e) {
              return (
                n(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            });
          var w = { k256: null, p224: null, p192: null, p25519: null };
          function _(e, t) {
            (this.name = e),
              (this.p = new o(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function O() {
            _.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          function M() {
            _.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          function E() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          function S() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          function k(e) {
            if ("string" === typeof e) {
              var t = o._prime(e);
              (this.m = t.p), (this.prime = t);
            } else
              n(e.gtn(1), "modulus must be greater than 1"),
                (this.m = e),
                (this.prime = null);
          }
          function j(e) {
            k.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (_.prototype._tmp = function () {
            var e = new o(null);
            return (e.words = new Array(Math.ceil(this.n / 13))), e;
          }),
            (_.prototype.ireduce = function (e) {
              var t,
                r = e;
              do {
                this.split(r, this.tmp),
                  (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
              } while (t > this.n);
              var n = t < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                  ? r.isub(this.p)
                  : void 0 !== r.strip
                  ? r.strip()
                  : r._strip(),
                r
              );
            }),
            (_.prototype.split = function (e, t) {
              e.iushrn(this.n, 0, t);
            }),
            (_.prototype.imulK = function (e) {
              return e.imul(this.k);
            }),
            i(O, _),
            (O.prototype.split = function (e, t) {
              for (var r = Math.min(e.length, 9), n = 0; n < r; n++)
                t.words[n] = e.words[n];
              if (((t.length = r), e.length <= 9))
                return (e.words[0] = 0), void (e.length = 1);
              var i = e.words[9];
              for (
                t.words[t.length++] = 4194303 & i, n = 10;
                n < e.length;
                n++
              ) {
                var o = 0 | e.words[n];
                (e.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
              }
              (i >>>= 22),
                (e.words[n - 10] = i),
                0 === i && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
            }),
            (O.prototype.imulK = function (e) {
              (e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2);
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 0 | e.words[r];
                (t += 977 * n),
                  (e.words[r] = 67108863 & t),
                  (t = 64 * n + ((t / 67108864) | 0));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            i(M, _),
            i(E, _),
            i(S, _),
            (S.prototype.imulK = function (e) {
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 19 * (0 | e.words[r]) + t,
                  i = 67108863 & n;
                (n >>>= 26), (e.words[r] = i), (t = n);
              }
              return 0 !== t && (e.words[e.length++] = t), e;
            }),
            (o._prime = function (e) {
              if (w[e]) return w[e];
              var t;
              if ("k256" === e) t = new O();
              else if ("p224" === e) t = new M();
              else if ("p192" === e) t = new E();
              else {
                if ("p25519" !== e) throw new Error("Unknown prime " + e);
                t = new S();
              }
              return (w[e] = t), t;
            }),
            (k.prototype._verify1 = function (e) {
              n(0 === e.negative, "red works only with positives"),
                n(e.red, "red works only with red numbers");
            }),
            (k.prototype._verify2 = function (e, t) {
              n(
                0 === (e.negative | t.negative),
                "red works only with positives"
              ),
                n(e.red && e.red === t.red, "red works only with red numbers");
            }),
            (k.prototype.imod = function (e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : (l(e, e.umod(this.m)._forceRed(this)), e);
            }),
            (k.prototype.neg = function (e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (k.prototype.add = function (e, t) {
              this._verify2(e, t);
              var r = e.add(t);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
            }),
            (k.prototype.iadd = function (e, t) {
              this._verify2(e, t);
              var r = e.iadd(t);
              return r.cmp(this.m) >= 0 && r.isub(this.m), r;
            }),
            (k.prototype.sub = function (e, t) {
              this._verify2(e, t);
              var r = e.sub(t);
              return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
            }),
            (k.prototype.isub = function (e, t) {
              this._verify2(e, t);
              var r = e.isub(t);
              return r.cmpn(0) < 0 && r.iadd(this.m), r;
            }),
            (k.prototype.shl = function (e, t) {
              return this._verify1(e), this.imod(e.ushln(t));
            }),
            (k.prototype.imul = function (e, t) {
              return this._verify2(e, t), this.imod(e.imul(t));
            }),
            (k.prototype.mul = function (e, t) {
              return this._verify2(e, t), this.imod(e.mul(t));
            }),
            (k.prototype.isqr = function (e) {
              return this.imul(e, e.clone());
            }),
            (k.prototype.sqr = function (e) {
              return this.mul(e, e);
            }),
            (k.prototype.sqrt = function (e) {
              if (e.isZero()) return e.clone();
              var t = this.m.andln(3);
              if ((n(t % 2 === 1), 3 === t)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(e, r);
              }
              for (
                var i = this.m.subn(1), a = 0;
                !i.isZero() && 0 === i.andln(1);

              )
                a++, i.iushrn(1);
              n(!i.isZero());
              var s = new o(1).toRed(this),
                u = s.redNeg(),
                c = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              for (
                l = new o(2 * l * l).toRed(this);
                0 !== this.pow(l, c).cmp(u);

              )
                l.redIAdd(u);
              for (
                var h = this.pow(l, i),
                  d = this.pow(e, i.addn(1).iushrn(1)),
                  f = this.pow(e, i),
                  p = a;
                0 !== f.cmp(s);

              ) {
                for (var v = f, m = 0; 0 !== v.cmp(s); m++) v = v.redSqr();
                n(m < p);
                var y = this.pow(h, new o(1).iushln(p - m - 1));
                (d = d.redMul(y)), (h = y.redSqr()), (f = f.redMul(h)), (p = m);
              }
              return d;
            }),
            (k.prototype.invm = function (e) {
              var t = e._invmp(this.m);
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (k.prototype.pow = function (e, t) {
              if (t.isZero()) return new o(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var r = new Array(16);
              (r[0] = new o(1).toRed(this)), (r[1] = e);
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
              var i = r[0],
                a = 0,
                s = 0,
                u = t.bitLength() % 26;
              for (0 === u && (u = 26), n = t.length - 1; n >= 0; n--) {
                for (var c = t.words[n], l = u - 1; l >= 0; l--) {
                  var h = (c >> l) & 1;
                  i !== r[0] && (i = this.sqr(i)),
                    0 !== h || 0 !== a
                      ? ((a <<= 1),
                        (a |= h),
                        (4 === ++s || (0 === n && 0 === l)) &&
                          ((i = this.mul(i, r[a])), (s = 0), (a = 0)))
                      : (s = 0);
                }
                u = 26;
              }
              return i;
            }),
            (k.prototype.convertTo = function (e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (k.prototype.convertFrom = function (e) {
              var t = e.clone();
              return (t.red = null), t;
            }),
            (o.mont = function (e) {
              return new j(e);
            }),
            i(j, k),
            (j.prototype.convertTo = function (e) {
              return this.imod(e.ushln(this.shift));
            }),
            (j.prototype.convertFrom = function (e) {
              var t = this.imod(e.mul(this.rinv));
              return (t.red = null), t;
            }),
            (j.prototype.imul = function (e, t) {
              if (e.isZero() || t.isZero())
                return (e.words[0] = 0), (e.length = 1), e;
              var r = e.imul(t),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (j.prototype.mul = function (e, t) {
              if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
              var r = e.mul(t),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                a = i;
              return (
                i.cmp(this.m) >= 0
                  ? (a = i.isub(this.m))
                  : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                a._forceRed(this)
              );
            }),
            (j.prototype.invm = function (e) {
              return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(e, this);
      }.call(this, r(45)(e)));
    },
    1957: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(1958), t),
        i(r(1959), t),
        i(r(1960), t),
        i(r(1262), t),
        i(r(1961), t);
    },
    1958: function (e, t, r) {
      "use strict";
      var n = r(62),
        i = r(63),
        o = r(1077),
        a = r(284),
        s = r(182),
        u = r(183);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.storeAsStream = void 0);
      var c = (function (e) {
        s(r, e);
        var t = u(r);
        function r(e) {
          var i;
          return (
            n(this, r),
            (i = t.call(this, { objectMode: !0 })).resume(),
            (i.handler = function (e) {
              return i.push(e);
            }),
            (i.obsStore = e),
            i.obsStore.subscribe(i.handler),
            i
          );
        }
        return (
          i(r, [
            {
              key: "pipe",
              value: function (e, t) {
                var n = o(a(r.prototype), "pipe", this).call(this, e, t);
                return e.write(this.obsStore.getState()), n;
              },
            },
            {
              key: "_write",
              value: function (e, t, r) {
                this.obsStore.putState(e), r();
              },
            },
            { key: "_read", value: function (e) {} },
            {
              key: "_destroy",
              value: function (e, t) {
                this.obsStore.unsubscribe(this.handler),
                  o(a(r.prototype), "_destroy", this).call(this, e, t);
              },
            },
          ]),
          r
        );
      })(r(463).Duplex);
      t.storeAsStream = function (e) {
        return new c(e);
      };
    },
    1959: function (e, t, r) {
      "use strict";
      var n = r(62),
        i = r(63),
        o = r(182),
        a = r(183);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ComposedStore = void 0);
      var s = (function (e) {
        o(r, e);
        var t = a(r);
        function r(e) {
          var i;
          return (
            n(this, r),
            ((i = t.call(this, {}))._children = e || {}),
            Object.keys(i._children).forEach(function (e) {
              var t = i._children[e];
              i._addChild(e, t);
            }),
            i
          );
        }
        return (
          i(r, [
            {
              key: "_addChild",
              value: function (e, t) {
                var r = this,
                  n = function (t) {
                    var n = r.getState();
                    (n[e] = t), r.putState(n);
                  };
                t.subscribe(n), n(t.getState());
              },
            },
          ]),
          r
        );
      })(r(1262).ObservableStore);
      t.ComposedStore = s;
    },
    1960: function (e, t, r) {
      "use strict";
      var n = r(456),
        i = r(62),
        o = r(63),
        a = r(182),
        s = r(183);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MergedStore = void 0);
      var u = (function (e) {
        a(r, e);
        var t = s(r);
        function r() {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
          return (
            i(this, r),
            ((e = t.call(this, {}))._children = n),
            n.forEach(function (t) {
              return e._addChild(t);
            }),
            e._updateWholeState(),
            e
          );
        }
        return (
          o(r, [
            {
              key: "_addChild",
              value: function (e) {
                var t = this;
                e.subscribe(function () {
                  return t._updateWholeState();
                });
              },
            },
            {
              key: "_updateWholeState",
              value: function () {
                var e = this._children.map(function (e) {
                    return e.getState();
                  }),
                  t = Object.assign.apply(Object, [{}].concat(n(e)));
                this.putState(t);
              },
            },
          ]),
          r
        );
      })(r(1262).ObservableStore);
      t.MergedStore = u;
    },
    1961: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.storeTransformStream = void 0);
      var n = r(1962);
      t.storeTransformStream = function (e) {
        return n.obj(function (t, r, n) {
          try {
            return void n(null, e(t));
          } catch (i) {
            return void n(i);
          }
        });
      };
    },
    1962: function (e, t, r) {
      (function (t) {
        var n = r(159).Transform,
          i = r(136).inherits,
          o = r(293);
        function a(e) {
          n.call(this, e), (this._destroyed = !1);
        }
        function s(e, t, r) {
          r(null, e);
        }
        function u(e) {
          return function (t, r, n) {
            return (
              "function" == typeof t && ((n = r), (r = t), (t = {})),
              "function" != typeof r && (r = s),
              "function" != typeof n && (n = null),
              e(t, r, n)
            );
          };
        }
        i(a, n),
          (a.prototype.destroy = function (e) {
            if (!this._destroyed) {
              this._destroyed = !0;
              var r = this;
              t.nextTick(function () {
                e && r.emit("error", e), r.emit("close");
              });
            }
          }),
          (e.exports = u(function (e, t, r) {
            var n = new a(e);
            return (n._transform = t), r && (n._flush = r), n;
          })),
          (e.exports.ctor = u(function (e, t, r) {
            function n(t) {
              if (!(this instanceof n)) return new n(t);
              (this.options = o(e, t)), a.call(this, this.options);
            }
            return (
              i(n, a),
              (n.prototype._transform = t),
              r && (n.prototype._flush = r),
              n
            );
          })),
          (e.exports.obj = u(function (e, t, r) {
            var n = new a(o({ objectMode: !0, highWaterMark: 16 }, e));
            return (n._transform = t), r && (n._flush = r), n;
          }));
      }.call(this, r(25)));
    },
    1963: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getMessageFromCode =
          t.serializeError =
          t.EthereumProviderError =
          t.EthereumRpcError =
          t.ethErrors =
          t.errorCodes =
            void 0);
      var n = r(1263);
      Object.defineProperty(t, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return n.EthereumRpcError;
        },
      }),
        Object.defineProperty(t, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return n.EthereumProviderError;
          },
        });
      var i = r(1413);
      Object.defineProperty(t, "serializeError", {
        enumerable: !0,
        get: function () {
          return i.serializeError;
        },
      }),
        Object.defineProperty(t, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return i.getMessageFromCode;
          },
        });
      var o = r(1964);
      Object.defineProperty(t, "ethErrors", {
        enumerable: !0,
        get: function () {
          return o.ethErrors;
        },
      });
      var a = r(1264);
      Object.defineProperty(t, "errorCodes", {
        enumerable: !0,
        get: function () {
          return a.errorCodes;
        },
      });
    },
    1964: function (e, t, r) {
      "use strict";
      var n = r(70);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ethErrors = void 0);
      var i = r(1263),
        o = r(1413),
        a = r(1264);
      function s(e, t) {
        var r = c(t),
          a = n(r, 2),
          s = a[0],
          u = a[1];
        return new i.EthereumRpcError(e, s || o.getMessageFromCode(e), u);
      }
      function u(e, t) {
        var r = c(t),
          a = n(r, 2),
          s = a[0],
          u = a[1];
        return new i.EthereumProviderError(e, s || o.getMessageFromCode(e), u);
      }
      function c(e) {
        if (e) {
          if ("string" === typeof e) return [e];
          if ("object" === typeof e && !Array.isArray(e)) {
            var t = e.message,
              r = e.data;
            if (t && "string" !== typeof t)
              throw new Error("Must specify string message.");
            return [t || void 0, r];
          }
        }
        return [];
      }
      t.ethErrors = {
        rpc: {
          parse: function (e) {
            return s(a.errorCodes.rpc.parse, e);
          },
          invalidRequest: function (e) {
            return s(a.errorCodes.rpc.invalidRequest, e);
          },
          invalidParams: function (e) {
            return s(a.errorCodes.rpc.invalidParams, e);
          },
          methodNotFound: function (e) {
            return s(a.errorCodes.rpc.methodNotFound, e);
          },
          internal: function (e) {
            return s(a.errorCodes.rpc.internal, e);
          },
          server: function (e) {
            if (!e || "object" !== typeof e || Array.isArray(e))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            var t = e.code;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return s(t, e);
          },
          invalidInput: function (e) {
            return s(a.errorCodes.rpc.invalidInput, e);
          },
          resourceNotFound: function (e) {
            return s(a.errorCodes.rpc.resourceNotFound, e);
          },
          resourceUnavailable: function (e) {
            return s(a.errorCodes.rpc.resourceUnavailable, e);
          },
          transactionRejected: function (e) {
            return s(a.errorCodes.rpc.transactionRejected, e);
          },
          methodNotSupported: function (e) {
            return s(a.errorCodes.rpc.methodNotSupported, e);
          },
          limitExceeded: function (e) {
            return s(a.errorCodes.rpc.limitExceeded, e);
          },
        },
        provider: {
          userRejectedRequest: function (e) {
            return u(a.errorCodes.provider.userRejectedRequest, e);
          },
          unauthorized: function (e) {
            return u(a.errorCodes.provider.unauthorized, e);
          },
          unsupportedMethod: function (e) {
            return u(a.errorCodes.provider.unsupportedMethod, e);
          },
          disconnected: function (e) {
            return u(a.errorCodes.provider.disconnected, e);
          },
          chainDisconnected: function (e) {
            return u(a.errorCodes.provider.chainDisconnected, e);
          },
          custom: function (e) {
            if (!e || "object" !== typeof e || Array.isArray(e))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            var t = e.code,
              r = e.message,
              n = e.data;
            if (!r || "string" !== typeof r)
              throw new Error('"message" must be a nonempty string');
            return new i.EthereumProviderError(t, r, n);
          },
        },
      };
    },
    1965: function (e, t, r) {
      "use strict";
      e.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && "object" == typeof t && "object" == typeof r) {
          if (t.constructor !== r.constructor) return !1;
          var n, i, o;
          if (Array.isArray(t)) {
            if ((n = t.length) != r.length) return !1;
            for (i = n; 0 !== i--; ) if (!e(t[i], r[i])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length)
            return !1;
          for (i = n; 0 !== i--; )
            if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
          for (i = n; 0 !== i--; ) {
            var a = o[i];
            if (!e(t[a], r[a])) return !1;
          }
          return !0;
        }
        return t !== t && r !== r;
      };
    },
    1966: function (e, t, r) {
      "use strict";
      var n = function (e) {
        return (
          null !== e && "object" === typeof e && "function" === typeof e.pipe
        );
      };
      (n.writable = function (e) {
        return (
          n(e) &&
          !1 !== e.writable &&
          "function" === typeof e._write &&
          "object" === typeof e._writableState
        );
      }),
        (n.readable = function (e) {
          return (
            n(e) &&
            !1 !== e.readable &&
            "function" === typeof e._read &&
            "object" === typeof e._readableState
          );
        }),
        (n.duplex = function (e) {
          return n.writable(e) && n.readable(e);
        }),
        (n.transform = function (e) {
          return n.duplex(e) && "function" === typeof e._transform;
        }),
        (e.exports = n);
    },
  },
]);
