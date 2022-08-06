/*!For license information please see 17.c2d0bc34.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [17],
  {
    1049: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n || e.hasOwnProperty(n) || r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        o(n(1968), e),
        o(n(1969), e);
    },
    1050: function (t, e) {
      var n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (e.getSymbolSize = function (t) {
        if (!t) throw new Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return r[t];
        }),
        (e.getBCHDigit = function (t) {
          for (var e = 0; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ("function" !== typeof t)
            throw new Error('"toSJISFunc" is not a valid function.');
          n = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return "undefined" !== typeof n;
        }),
        (e.toSJIS = function (t) {
          return n(t);
        });
    },
    1051: function (t, e, n) {
      var r = n(1435),
        o = n(1436);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw new Error("Invalid mode: " + t);
          if (!r.isValid(e)) throw new Error("Invalid version: " + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return o.testNumeric(t)
            ? e.NUMERIC
            : o.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : o.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw new Error("Invalid mode");
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" !== typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "numeric":
                  return e.NUMERIC;
                case "alphanumeric":
                  return e.ALPHANUMERIC;
                case "kanji":
                  return e.KANJI;
                case "byte":
                  return e.BYTE;
                default:
                  throw new Error("Unknown mode: " + t);
              }
            })(t);
          } catch (r) {
            return n;
          }
        });
    },
    1083: function (t, e, n) {
      "use strict";
      var r = n(1270);
      i.TYPED_ARRAY_SUPPORT = (function () {
        try {
          var t = new Uint8Array(1);
          return (
            (t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            42 === t.foo()
          );
        } catch (e) {
          return !1;
        }
      })();
      var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      function i(t, e, n) {
        return i.TYPED_ARRAY_SUPPORT || this instanceof i
          ? "number" === typeof t
            ? u(this, t)
            : (function (t, e, n, r) {
                if ("number" === typeof e)
                  throw new TypeError('"value" argument must not be a number');
                if (
                  "undefined" !== typeof ArrayBuffer &&
                  e instanceof ArrayBuffer
                )
                  return (function (t, e, n, r) {
                    if (n < 0 || e.byteLength < n)
                      throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < n + (r || 0))
                      throw new RangeError("'length' is out of bounds");
                    var o;
                    o =
                      void 0 === n && void 0 === r
                        ? new Uint8Array(e)
                        : void 0 === r
                        ? new Uint8Array(e, n)
                        : new Uint8Array(e, n, r);
                    i.TYPED_ARRAY_SUPPORT
                      ? (o.__proto__ = i.prototype)
                      : (o = c(t, o));
                    return o;
                  })(t, e, n, r);
                if ("string" === typeof e)
                  return (function (t, e) {
                    var n = 0 | h(e),
                      r = s(t, n),
                      o = r.write(e);
                    o !== n && (r = r.slice(0, o));
                    return r;
                  })(t, e);
                return (function (t, e) {
                  if (i.isBuffer(e)) {
                    var n = 0 | a(e.length),
                      r = s(t, n);
                    return 0 === r.length || e.copy(r, 0, 0, n), r;
                  }
                  if (e) {
                    if (
                      ("undefined" !== typeof ArrayBuffer &&
                        e.buffer instanceof ArrayBuffer) ||
                      "length" in e
                    )
                      return "number" !== typeof e.length ||
                        (o = e.length) !== o
                        ? s(t, 0)
                        : c(t, e);
                    if ("Buffer" === e.type && Array.isArray(e.data))
                      return c(t, e.data);
                  }
                  var o;
                  throw new TypeError(
                    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                  );
                })(t, e);
              })(this, t, e, n)
          : new i(t, e, n);
      }
      function a(t) {
        if (t >= o)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              o.toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function s(t, e) {
        var n;
        return (
          i.TYPED_ARRAY_SUPPORT
            ? ((n = new Uint8Array(e)).__proto__ = i.prototype)
            : (null === (n = t) && (n = new i(e)), (n.length = e)),
          n
        );
      }
      function u(t, e) {
        var n = s(t, e < 0 ? 0 : 0 | a(e));
        if (!i.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) n[r] = 0;
        return n;
      }
      function c(t, e) {
        for (
          var n = e.length < 0 ? 0 : 0 | a(e.length), r = s(t, n), o = 0;
          o < n;
          o += 1
        )
          r[o] = 255 & e[o];
        return r;
      }
      function l(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
          if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((e -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return i;
      }
      function h(t) {
        return i.isBuffer(t)
          ? t.length
          : "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          ? t.byteLength
          : ("string" !== typeof t && (t = "" + t),
            0 === t.length ? 0 : l(t).length);
      }
      i.TYPED_ARRAY_SUPPORT &&
        ((i.prototype.__proto__ = Uint8Array.prototype),
        (i.__proto__ = Uint8Array),
        "undefined" !== typeof Symbol &&
          Symbol.species &&
          i[Symbol.species] === i &&
          Object.defineProperty(i, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1,
          })),
        (i.prototype.write = function (t, e, n) {
          void 0 === e || (void 0 === n && "string" === typeof e)
            ? ((n = this.length), (e = 0))
            : isFinite(e) && ((e |= 0), isFinite(n) ? (n |= 0) : (n = void 0));
          var r = this.length - e;
          if (
            ((void 0 === n || n > r) && (n = r),
            (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          return (function (t, e, n, r) {
            return (function (t, e, n, r) {
              for (
                var o = 0;
                o < r && !(o + n >= e.length || o >= t.length);
                ++o
              )
                e[o + n] = t[o];
              return o;
            })(l(e, t.length - n), t, n, r);
          })(this, t, e, n);
        }),
        (i.prototype.slice = function (t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t),
            i.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = i.prototype;
          else {
            var o = e - t;
            n = new i(o, void 0);
            for (var a = 0; a < o; ++a) n[a] = this[a + t];
          }
          return n;
        }),
        (i.prototype.copy = function (t, e, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            t.length - e < r - n && (r = t.length - e + n);
          var o,
            a = r - n;
          if (this === t && n < e && e < r)
            for (o = a - 1; o >= 0; --o) t[o + e] = this[o + n];
          else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < a; ++o) t[o + e] = this[o + n];
          else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
          return a;
        }),
        (i.prototype.fill = function (t, e, n) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((e = 0), (n = this.length))
                : "string" === typeof n && (n = this.length),
              1 === t.length)
            ) {
              var r = t.charCodeAt(0);
              r < 256 && (t = r);
            }
          } else "number" === typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= e) return this;
          var o;
          if (
            ((e >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            t || (t = 0),
            "number" === typeof t)
          )
            for (o = e; o < n; ++o) this[o] = t;
          else {
            var a = i.isBuffer(t) ? t : new i(t),
              s = a.length;
            for (o = 0; o < n - e; ++o) this[o + e] = a[o % s];
          }
          return this;
        }),
        (i.concat = function (t, e) {
          if (!r(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return s(null, 0);
          var n;
          if (void 0 === e)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          var o = u(null, e),
            a = 0;
          for (n = 0; n < t.length; ++n) {
            var c = t[n];
            if (!i.isBuffer(c))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            c.copy(o, a), (a += c.length);
          }
          return o;
        }),
        (i.byteLength = h),
        (i.prototype._isBuffer = !0),
        (i.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (t.exports.alloc = function (t) {
          var e = new i(t);
          return e.fill(0), e;
        }),
        (t.exports.from = function (t) {
          return new i(t);
        });
    },
    1090: function (t, e, n) {
      "use strict";
      n.d(e, "g", function () {
        return r.detectEnv;
      }),
        n.d(e, "s", function () {
          return r.isMobile;
        }),
        n.d(e, "n", function () {
          return r.isBrowser;
        }),
        n.d(e, "k", function () {
          return r.getLocation;
        }),
        n.d(e, "i", function () {
          return r.getClientMeta;
        }),
        n.d(e, "C", function () {
          return r.setLocal;
        }),
        n.d(e, "j", function () {
          return r.getLocal;
        }),
        n.d(e, "B", function () {
          return r.removeLocal;
        }),
        n.d(e, "w", function () {
          return r.mobileLinkChoiceKey;
        }),
        n.d(e, "D", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "f", function () {
          return p;
        }),
        n.d(e, "x", function () {
          return L;
        }),
        n.d(e, "y", function () {
          return j;
        }),
        n.d(e, "A", function () {
          return g;
        }),
        n.d(e, "E", function () {
          return y;
        }),
        n.d(e, "m", function () {
          return _;
        }),
        n.d(e, "h", function () {
          return R;
        }),
        n.d(e, "v", function () {
          return N;
        }),
        n.d(e, "z", function () {
          return P;
        }),
        n.d(e, "l", function () {
          return T;
        }),
        n.d(e, "a", function () {
          return I;
        }),
        n.d(e, "p", function () {
          return b;
        }),
        n.d(e, "r", function () {
          return x;
        }),
        n.d(e, "q", function () {
          return k;
        }),
        n.d(e, "o", function () {
          return M;
        }),
        n.d(e, "t", function () {
          return E;
        }),
        n.d(e, "u", function () {
          return O;
        });
      var r = n(1302),
        o = [
          "session_request",
          "session_update",
          "exchange_key",
          "connect",
          "disconnect",
          "display_uri",
          "modal_closed",
          "transport_open",
          "transport_close",
          "transport_error",
        ],
        i = [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "eth_signTypedData",
          "eth_signTypedData_v1",
          "eth_signTypedData_v2",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "personal_sign",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        a = {
          1: "mainnet",
          3: "ropsten",
          4: "rinkeby",
          5: "goerli",
          42: "kovan",
        },
        s = n(1973),
        u = n.n(s),
        c = n(1119);
      function l(t) {
        return c.arrayToBuffer(new Uint8Array(t));
      }
      function h(t, e) {
        return c.arrayToHex(new Uint8Array(t), !e);
      }
      function f(t) {
        return c.bufferToArray(t).buffer;
      }
      function d(t) {
        return c.hexToArray(t).buffer;
      }
      function p(t, e) {
        var n = c.removeHexPrefix(c.sanitizeHex(new u.a(t).toString(16)));
        return e ? n : c.addHexPrefix(n);
      }
      var v = n(232);
      function m(t) {
        return c.sanitizeHex(t);
      }
      var g = n(1163).payloadId;
      function y() {
        return (function (t, e) {
          for (
            e = t = "";
            t++ < 36;
            e +=
              (51 * t) & 52
                ? (15 ^ t
                    ? 8 ^ (Math.random() * (20 ^ t ? 16 : 4))
                    : 4
                  ).toString(16)
                : "-"
          );
          return e;
        })();
      }
      function _(t, e) {
        var n,
          r = (function (t, e) {
            var n,
              r = a[t];
            return (
              r && (n = "https://".concat(r, ".infura.io/v3/").concat(e)), n
            );
          })(t, e.infuraId);
        return e.custom && e.custom[t] ? (n = e.custom[t]) : r && (n = r), n;
      }
      function w(t, e) {
        return c.isHexString(t, e);
      }
      function b(t) {
        return "undefined" !== typeof t.method;
      }
      function x(t) {
        return "undefined" !== typeof t.result;
      }
      function k(t) {
        return "undefined" !== typeof t.error;
      }
      function M(t) {
        return "undefined" !== typeof t.event;
      }
      function E(t) {
        return o.includes(t) || t.startsWith("wc_");
      }
      function O(t) {
        return !!t.method.startsWith("wc_") || !i.includes(t.method);
      }
      function S(t) {
        t = Object(c.removeHexPrefix)(t.toLowerCase());
        for (
          var e,
            n = Object(c.removeHexPrefix)(
              Object(v.keccak_256)(((e = t), c.utf8ToBuffer(e)))
            ),
            r = "",
            o = 0;
          o < t.length;
          o++
        )
          parseInt(n[o], 16) > 7 ? (r += t[o].toUpperCase()) : (r += t[o]);
        return Object(c.addHexPrefix)(r);
      }
      function L(t) {
        var e, n, r;
        return (
          (r = t) &&
            r.length &&
            !w(t[0]) &&
            (t[0] = ((e = t[0]), c.utf8ToHex(e, !n))),
          t
        );
      }
      function j(t) {
        if ("undefined" !== typeof t.type && "0" !== t.type) return t;
        if (
          "undefined" === typeof t.from ||
          !(e = t.from) ||
          "0x" !== e.toLowerCase().substring(0, 2) ||
          !/^(0x)?[0-9a-f]{40}$/i.test(e) ||
          (!/^(0x)?[0-9a-f]{40}$/.test(e) &&
            !/^(0x)?[0-9A-F]{40}$/.test(e) &&
            e !== S(e))
        )
          throw new Error(
            "Transaction object must include a valid 'from' value."
          );
        var e;
        function n(t) {
          var e,
            n = t;
          return (
            ("number" === typeof t ||
              ("string" === typeof t &&
                !(function (t) {
                  return "" === t || ("string" === typeof t && "" === t.trim());
                })(t))) &&
              (w(t) ? "string" === typeof t && (n = m(t)) : (n = p(t))),
            "string" === typeof n &&
              ((e = n), (n = c.removeHexLeadingZeros(c.addHexPrefix(e)))),
            n
          );
        }
        var r = {
            from: m(t.from),
            to: "undefined" === typeof t.to ? void 0 : m(t.to),
            gasPrice: "undefined" === typeof t.gasPrice ? "" : n(t.gasPrice),
            gas:
              "undefined" === typeof t.gas
                ? "undefined" === typeof t.gasLimit
                  ? ""
                  : n(t.gasLimit)
                : n(t.gas),
            value: "undefined" === typeof t.value ? "" : n(t.value),
            nonce: "undefined" === typeof t.nonce ? "" : n(t.nonce),
            data: "undefined" === typeof t.data ? "" : m(t.data) || "0x",
          },
          o = ["gasPrice", "gas", "value", "nonce"];
        return (
          Object.keys(r).forEach(function (t) {
            ("undefined" === typeof r[t] ||
              ("string" === typeof r[t] && !r[t].trim().length)) &&
              o.includes(t) &&
              delete r[t];
          }),
          r
        );
      }
      n(11);
      function R(t) {
        var e = t.message || "Failed or Rejected Request",
          n = -32e3;
        if (t && !t.code)
          switch (e) {
            case "Parse error":
              n = -32700;
              break;
            case "Invalid request":
              n = -32600;
              break;
            case "Method not found":
              n = -32601;
              break;
            case "Invalid params":
              n = -32602;
              break;
            case "Internal error":
              n = -32603;
              break;
            default:
              n = -32e3;
          }
        return { code: n, message: e };
      }
      var C = n(1976);
      function T(t) {
        var e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
        return "undefined" !== typeof e ? t.substr(e) : "";
      }
      function I(t, e) {
        var n = A(t);
        return (t = (function (t) {
          return C.stringify(t);
        })((n = Object.assign(Object.assign({}, n), e))));
      }
      function A(t) {
        return C.parse(t);
      }
      function N(t) {
        return "undefined" !== typeof t.bridge;
      }
      function P(t) {
        var e = t.indexOf(":"),
          n = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
          r = t.substring(0, e);
        var o = (function (t) {
          var e = t.split("@");
          return { handshakeTopic: e[0], version: parseInt(e[1], 10) };
        })(t.substring(e + 1, n));
        var i = (function (t) {
          var e = A(t);
          return { key: e.key || "", bridge: e.bridge || "" };
        })("undefined" !== typeof n ? t.substr(n) : "");
        return Object.assign(Object.assign({ protocol: r }, o), i);
      }
    },
    1119: function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          n.d(e, "bufferToArray", function () {
            return u;
          }),
            n.d(e, "bufferToHex", function () {
              return c;
            }),
            n.d(e, "bufferToUtf8", function () {
              return l;
            }),
            n.d(e, "bufferToNumber", function () {
              return h;
            }),
            n.d(e, "bufferToBinary", function () {
              return f;
            }),
            n.d(e, "arrayToBuffer", function () {
              return d;
            }),
            n.d(e, "arrayToHex", function () {
              return p;
            }),
            n.d(e, "arrayToUtf8", function () {
              return v;
            }),
            n.d(e, "arrayToNumber", function () {
              return m;
            }),
            n.d(e, "arrayToBinary", function () {
              return g;
            }),
            n.d(e, "hexToBuffer", function () {
              return y;
            }),
            n.d(e, "hexToArray", function () {
              return _;
            }),
            n.d(e, "hexToUtf8", function () {
              return w;
            }),
            n.d(e, "hexToNumber", function () {
              return b;
            }),
            n.d(e, "hexToBinary", function () {
              return x;
            }),
            n.d(e, "utf8ToBuffer", function () {
              return k;
            }),
            n.d(e, "utf8ToArray", function () {
              return M;
            }),
            n.d(e, "utf8ToHex", function () {
              return E;
            }),
            n.d(e, "utf8ToNumber", function () {
              return O;
            }),
            n.d(e, "utf8ToBinary", function () {
              return S;
            }),
            n.d(e, "numberToBuffer", function () {
              return L;
            }),
            n.d(e, "numberToArray", function () {
              return j;
            }),
            n.d(e, "numberToHex", function () {
              return R;
            }),
            n.d(e, "numberToUtf8", function () {
              return C;
            }),
            n.d(e, "numberToBinary", function () {
              return T;
            }),
            n.d(e, "binaryToBuffer", function () {
              return I;
            }),
            n.d(e, "binaryToArray", function () {
              return A;
            }),
            n.d(e, "binaryToHex", function () {
              return N;
            }),
            n.d(e, "binaryToUtf8", function () {
              return P;
            }),
            n.d(e, "binaryToNumber", function () {
              return B;
            }),
            n.d(e, "isBinaryString", function () {
              return q;
            }),
            n.d(e, "isHexString", function () {
              return U;
            }),
            n.d(e, "isBuffer", function () {
              return F;
            }),
            n.d(e, "isTypedArray", function () {
              return D;
            }),
            n.d(e, "isArrayBuffer", function () {
              return H;
            }),
            n.d(e, "getType", function () {
              return J;
            }),
            n.d(e, "getEncoding", function () {
              return z;
            }),
            n.d(e, "concatBuffers", function () {
              return W;
            }),
            n.d(e, "concatArrays", function () {
              return G;
            }),
            n.d(e, "trimLeft", function () {
              return Y;
            }),
            n.d(e, "trimRight", function () {
              return K;
            }),
            n.d(e, "calcByteLength", function () {
              return V;
            }),
            n.d(e, "splitBytes", function () {
              return Q;
            }),
            n.d(e, "swapBytes", function () {
              return Z;
            }),
            n.d(e, "swapHex", function () {
              return $;
            }),
            n.d(e, "sanitizeBytes", function () {
              return X;
            }),
            n.d(e, "padLeft", function () {
              return tt;
            }),
            n.d(e, "padRight", function () {
              return et;
            }),
            n.d(e, "removeHexPrefix", function () {
              return nt;
            }),
            n.d(e, "addHexPrefix", function () {
              return rt;
            }),
            n.d(e, "sanitizeHex", function () {
              return ot;
            }),
            n.d(e, "removeHexLeadingZeros", function () {
              return it;
            });
          var r = n(69),
            o = n(1425),
            i = n.n(o),
            a = n(1975),
            s = n.n(a);
          function u(t) {
            return new Uint8Array(t);
          }
          function c(t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.toString("hex");
            return e ? rt(n) : n;
          }
          function l(t) {
            return t.toString("utf8");
          }
          function h(t) {
            return t.readUIntBE(0, t.length);
          }
          function f(t) {
            return g(u(t));
          }
          function d(t) {
            return s()(t);
          }
          function p(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return c(d(t), e);
          }
          function v(t) {
            return l(d(t));
          }
          function m(t) {
            return h(d(t));
          }
          function g(t) {
            return Array.from(t).map(T).join("");
          }
          function y(e) {
            return t.from(nt(e), "hex");
          }
          function _(t) {
            return u(y(t));
          }
          function w(t) {
            return l(y(t));
          }
          function b(t) {
            return m(_(t));
          }
          function x(t) {
            return g(_(t));
          }
          function k(e) {
            return t.from(e, "utf8");
          }
          function M(t) {
            return u(k(t));
          }
          function E(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return c(k(t), e);
          }
          function O(t) {
            var e = parseInt(t, 10);
            return (
              (function (t, e) {
                if (!t) throw new Error(e);
              })(
                !(function (t) {
                  return "undefined" === typeof t;
                })(e),
                "Number can only safely store up to 53 bits"
              ),
              e
            );
          }
          function S(t) {
            return g(M(t));
          }
          function L(t) {
            return I(T(t));
          }
          function j(t) {
            return A(T(t));
          }
          function R(t, e) {
            return N(T(t), e);
          }
          function C(t) {
            return "".concat(t);
          }
          function T(t) {
            return X((t >>> 0).toString(2));
          }
          function I(t) {
            return d(A(t));
          }
          function A(t) {
            return new Uint8Array(
              Q(t).map(function (t) {
                return parseInt(t, 2);
              })
            );
          }
          function N(t, e) {
            return p(A(t), e);
          }
          function P(t) {
            return v(A(t));
          }
          function B(t) {
            return m(A(t));
          }
          function q(t) {
            return (
              !("string" !== typeof t || !new RegExp(/^[01]+$/).test(t)) &&
              t.length % 8 === 0
            );
          }
          function U(t, e) {
            return (
              !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
              (!e || t.length === 2 + 2 * e)
            );
          }
          function F(e) {
            return t.isBuffer(e);
          }
          function D(t) {
            return i.a.strict(t) && !F(t);
          }
          function H(t) {
            return !D(t) && !F(t) && "undefined" !== typeof t.byteLength;
          }
          function J(t) {
            return F(t)
              ? "buffer"
              : D(t)
              ? "typed-array"
              : H(t)
              ? "array-buffer"
              : Array.isArray(t)
              ? "array"
              : typeof t;
          }
          function z(t) {
            return q(t) ? "binary" : U(t) ? "hex" : "utf8";
          }
          function W() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            var o = t.concat(n);
            return o;
          }
          function G() {
            for (
              var t = [], e = arguments.length, n = new Array(e), o = 0;
              o < e;
              o++
            )
              n[o] = arguments[o];
            return (
              n.forEach(function (e) {
                return (t = t.concat(Array.from(e)));
              }),
              new Uint8Array(Object(r.a)(t))
            );
          }
          function Y(t, e) {
            var n = t.length - e;
            return n > 0 && (t = t.slice(n)), t;
          }
          function K(t, e) {
            return t.slice(0, e);
          }
          function V(t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 8,
              n = t % e;
            return n ? ((t - n) / e) * e + e : t;
          }
          function Q(t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 8,
              n = X(t).match(new RegExp(".{".concat(e, "}"), "gi"));
            return Array.from(n || []);
          }
          function Z(t) {
            return Q(t).map(at).join("");
          }
          function $(t) {
            return N(Z(x(t)));
          }
          function X(t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 8,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "0";
            return tt(t, V(t.length, e), n);
          }
          function tt(t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "0";
            return st(t, e, !0, n);
          }
          function et(t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "0";
            return st(t, e, !1, n);
          }
          function nt(t) {
            return t.replace(/^0x/, "");
          }
          function rt(t) {
            return t.startsWith("0x") ? t : "0x".concat(t);
          }
          function ot(t) {
            return (t = X((t = nt(t)), 2)) && (t = rt(t)), t;
          }
          function it(t) {
            var e = t.startsWith("0x");
            return (
              (t = (t = nt(t)).startsWith("0") ? t.substring(1) : t),
              e ? rt(t) : t
            );
          }
          function at(t) {
            return t.split("").reverse().join("");
          }
          function st(t, e, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "0",
              o = e - t.length,
              i = t;
            if (o > 0) {
              var a = r.repeat(o);
              i = n ? a + t : t + a;
            }
            return i;
          }
        }.call(this, n(8).Buffer);
    },
    1163: function (t, e, n) {
      "use strict";
      n(1164);
      var r = n(1265);
      n.d(e, "parseConnectionError", function () {
        return r.d;
      });
      var o = n(1414);
      n.o(o, "IJsonRpcProvider") &&
        n.d(e, "IJsonRpcProvider", function () {
          return o.IJsonRpcProvider;
        }),
        n.o(o, "formatJsonRpcError") &&
          n.d(e, "formatJsonRpcError", function () {
            return o.formatJsonRpcError;
          }),
        n.o(o, "formatJsonRpcRequest") &&
          n.d(e, "formatJsonRpcRequest", function () {
            return o.formatJsonRpcRequest;
          }),
        n.o(o, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return o.isHttpUrl;
          }),
        n.o(o, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return o.isJsonRpcError;
          }),
        n.o(o, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return o.isJsonRpcResponse;
          }),
        n.o(o, "payloadId") &&
          n.d(e, "payloadId", function () {
            return o.payloadId;
          });
      var i = n(1415);
      n.d(e, "formatJsonRpcError", function () {
        return i.a;
      }),
        n.d(e, "formatJsonRpcRequest", function () {
          return i.b;
        }),
        n.d(e, "payloadId", function () {
          return i.c;
        });
      n(1416);
      var a = n(1417);
      n.o(a, "IJsonRpcProvider") &&
        n.d(e, "IJsonRpcProvider", function () {
          return a.IJsonRpcProvider;
        }),
        n.o(a, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return a.isHttpUrl;
          }),
        n.o(a, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return a.isJsonRpcError;
          }),
        n.o(a, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return a.isJsonRpcResponse;
          });
      var s = n(1421);
      n.d(e, "isHttpUrl", function () {
        return s.a;
      });
      var u = n(1422);
      n.d(e, "isJsonRpcError", function () {
        return u.a;
      }),
        n.d(e, "isJsonRpcResponse", function () {
          return u.b;
        });
    },
    1164: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return l;
        });
      var r,
        o = n(77),
        i = "INTERNAL_ERROR",
        a = "SERVER_ERROR",
        s = [-32700, -32600, -32601, -32602, -32603],
        u = [-32e3, -32099],
        c =
          ((r = {}),
          Object(o.a)(r, "PARSE_ERROR", {
            code: -32700,
            message: "Parse error",
          }),
          Object(o.a)(r, "INVALID_REQUEST", {
            code: -32600,
            message: "Invalid Request",
          }),
          Object(o.a)(r, "METHOD_NOT_FOUND", {
            code: -32601,
            message: "Method not found",
          }),
          Object(o.a)(r, "INVALID_PARAMS", {
            code: -32602,
            message: "Invalid params",
          }),
          Object(o.a)(r, i, { code: -32603, message: "Internal error" }),
          Object(o.a)(r, a, { code: -32e3, message: "Server error" }),
          r),
        l = a;
    },
    1265: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "d", function () {
          return s;
        });
      var r = n(1164);
      function o(t) {
        return r.c.includes(t);
      }
      function i(t) {
        return Object.keys(r.f).includes(t) ? r.f[t] : r.f[r.a];
      }
      function a(t) {
        var e = Object.values(r.f).find(function (e) {
          return e.code === t;
        });
        return e || r.f[r.a];
      }
      function s(t, e, n) {
        return t.message.includes("getaddrinfo ENOTFOUND") ||
          t.message.includes("connect ECONNREFUSED")
          ? new Error("Unavailable ".concat(n, " RPC url at ").concat(e))
          : t;
      }
    },
    1266: function (t, e, n) {
      "use strict";
      var r = n(1418);
      n.o(r, "IJsonRpcConnection") &&
        n.d(e, "IJsonRpcConnection", function () {
          return r.IJsonRpcConnection;
        }),
        n.o(r, "IJsonRpcProvider") &&
          n.d(e, "IJsonRpcProvider", function () {
            return r.IJsonRpcProvider;
          }),
        n.o(r, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return r.isHttpUrl;
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return r.isJsonRpcError;
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return r.isJsonRpcResponse;
          });
      n(1267);
      var o = n(1419);
      n.d(e, "IJsonRpcConnection", function () {
        return o.a;
      }),
        n.d(e, "IJsonRpcProvider", function () {
          return o.b;
        });
      var i = n(1420);
      n.o(i, "isHttpUrl") &&
        n.d(e, "isHttpUrl", function () {
          return i.isHttpUrl;
        }),
        n.o(i, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return i.isJsonRpcError;
          }),
        n.o(i, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return i.isJsonRpcResponse;
          });
    },
    1267: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(5),
        o = n(4),
        i = Object(r.a)(function t() {
          Object(o.a)(this, t);
        });
    },
    1268: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return h;
      }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return g;
        }),
        n.d(e, "e", function () {
          return _;
        }),
        n.d(e, "f", function () {
          return b;
        });
      var r = n(11),
        o = n(1049),
        i = n(1304);
      function a() {
        a = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
          s = r.toStringTag || "@@toStringTag";
        function u(t, e, n) {
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
          u({}, "");
        } catch (S) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(t, e, n, r) {
          var o = e && e.prototype instanceof f ? e : f,
            i = Object.create(o.prototype),
            a = new M(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return O();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = b(a, n);
                    if (s) {
                      if (s === h) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = l(t, e, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === h)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        t.wrap = c;
        var h = {};
        function f() {}
        function d() {}
        function p() {}
        var v = {};
        u(v, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          g = m && m(m(E([])));
        g && g !== e && n.call(g, o) && (v = g);
        var y = (p.prototype = f.prototype = Object.create(v));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (r, a) {
                !(function r(o, i, a, s) {
                  var u = l(t[o], t, i);
                  if ("throw" !== u.type) {
                    var c = u.arg,
                      h = c.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? e.resolve(h.__await).then(
                          function (t) {
                            r("next", t, a, s);
                          },
                          function (t) {
                            r("throw", t, a, s);
                          }
                        )
                      : e.resolve(h).then(
                          function (t) {
                            (c.value = t), a(c);
                          },
                          function (t) {
                            return r("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(o, i, r, a);
              });
            }
            return (r = r ? r.then(a, a) : a());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return h;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return h;
          }
          var r = l(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), h
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              h);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function E(t) {
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
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          u(y, "constructor", p),
          u(p, "constructor", d),
          (d.displayName = u(p, s, "GeneratorFunction")),
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
                : ((t.__proto__ = p), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          _(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          _(y),
          u(y, s, "Generator"),
          u(y, o, function () {
            return this;
          }),
          u(y, "toString", function () {
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
          (t.values = E),
          (M.prototype = {
            constructor: M,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), h)
                  : this.complete(a)
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
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), k(n), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: E(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      }
      function s(t) {
        return t === i.a
          ? { length: i.b, name: i.a }
          : { hash: { name: i.f }, name: i.e };
      }
      function u(t) {
        return t === i.a ? [i.d, i.c] : [i.k, i.l];
      }
      function c(t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = Object(r.a)(
          a().mark(function t(e) {
            var n,
              r = arguments;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : i.a),
                      t.abrupt(
                        "return",
                        o.getSubtleCrypto().importKey("raw", e, s(n), !0, u(n))
                      )
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function h(t, e, n) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = Object(r.a)(
          a().mark(function t(e, n, r) {
            var s, u, l;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (s = o.getSubtleCrypto()), (t.next = 3), c(n, i.a);
                  case 3:
                    return (
                      (u = t.sent),
                      (t.next = 6),
                      s.encrypt({ iv: e, name: i.a }, u, r)
                    );
                  case 6:
                    return (l = t.sent), t.abrupt("return", new Uint8Array(l));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function d(t, e, n) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(r.a)(
          a().mark(function t(e, n, r) {
            var s, u, l;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (s = o.getSubtleCrypto()), (t.next = 3), c(n, i.a);
                  case 3:
                    return (
                      (u = t.sent),
                      (t.next = 6),
                      s.decrypt({ iv: e, name: i.a }, u, r)
                    );
                  case 6:
                    return (l = t.sent), t.abrupt("return", new Uint8Array(l));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function v(t, e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = Object(r.a)(
          a().mark(function t(e, n) {
            var r, s, u;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (r = o.getSubtleCrypto()), (t.next = 3), c(e, i.e);
                  case 3:
                    return (
                      (s = t.sent),
                      (t.next = 6),
                      r.sign({ length: i.g, name: i.e }, s, n)
                    );
                  case 6:
                    return (u = t.sent), t.abrupt("return", new Uint8Array(u));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function g(t, e) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = Object(r.a)(
          a().mark(function t(e, n) {
            var r, s, u;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (r = o.getSubtleCrypto()), (t.next = 3), c(e, i.e);
                  case 3:
                    return (
                      (s = t.sent),
                      (t.next = 6),
                      r.sign({ length: i.h, name: i.e }, s, n)
                    );
                  case 6:
                    return (u = t.sent), t.abrupt("return", new Uint8Array(u));
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function _(t) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = Object(r.a)(
          a().mark(function t(e) {
            var n, r;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = o.getSubtleCrypto()),
                      (t.next = 3),
                      n.digest({ name: i.i }, e)
                    );
                  case 3:
                    return (r = t.sent), t.abrupt("return", new Uint8Array(r));
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function b(t) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = Object(r.a)(
          a().mark(function t(e) {
            var n, r;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = o.getSubtleCrypto()),
                      (t.next = 3),
                      n.digest({ name: i.j }, e)
                    );
                  case 3:
                    return (r = t.sent), t.abrupt("return", new Uint8Array(r));
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    1269: function (t, e, n) {
      "use strict";
      var r = n(1429);
      n.o(r, "isConstantTime") &&
        n.d(e, "isConstantTime", function () {
          return r.isConstantTime;
        });
      n(1430);
      var o = n(1431);
      n.o(o, "isConstantTime") &&
        n.d(e, "isConstantTime", function () {
          return o.isConstantTime;
        });
      var i = n(1432);
      n.d(e, "isConstantTime", function () {
        return i.a;
      });
    },
    1270: function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == n.call(t);
        };
    },
    1271: function (t, e) {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && "undefined" !== typeof t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" !== typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "l":
                case "low":
                  return e.L;
                case "m":
                case "medium":
                  return e.M;
                case "q":
                case "quartile":
                  return e.Q;
                case "h":
                case "high":
                  return e.H;
                default:
                  throw new Error("Unknown EC Level: " + t);
              }
            })(t);
          } catch (r) {
            return n;
          }
        });
    },
    1302: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "detectEnv", function () {
          return a;
        }),
        n.d(e, "detectOS", function () {
          return s;
        }),
        n.d(e, "isAndroid", function () {
          return u;
        }),
        n.d(e, "isIOS", function () {
          return c;
        }),
        n.d(e, "isMobile", function () {
          return l;
        }),
        n.d(e, "isNode", function () {
          return h;
        }),
        n.d(e, "isBrowser", function () {
          return f;
        }),
        n.d(e, "getFromWindow", function () {
          return d;
        }),
        n.d(e, "getFromWindowOrThrow", function () {
          return p;
        }),
        n.d(e, "getDocumentOrThrow", function () {
          return v;
        }),
        n.d(e, "getDocument", function () {
          return m;
        }),
        n.d(e, "getNavigatorOrThrow", function () {
          return g;
        }),
        n.d(e, "getNavigator", function () {
          return y;
        }),
        n.d(e, "getLocationOrThrow", function () {
          return _;
        }),
        n.d(e, "getLocation", function () {
          return w;
        }),
        n.d(e, "getCryptoOrThrow", function () {
          return b;
        }),
        n.d(e, "getCrypto", function () {
          return x;
        }),
        n.d(e, "getLocalStorageOrThrow", function () {
          return k;
        }),
        n.d(e, "getLocalStorage", function () {
          return M;
        }),
        n.d(e, "getClientMeta", function () {
          return E;
        }),
        n.d(e, "safeJsonParse", function () {
          return S;
        }),
        n.d(e, "safeJsonStringify", function () {
          return L;
        }),
        n.d(e, "setLocal", function () {
          return j;
        }),
        n.d(e, "getLocal", function () {
          return R;
        }),
        n.d(e, "removeLocal", function () {
          return C;
        }),
        n.d(e, "mobileLinkChoiceKey", function () {
          return T;
        }),
        n.d(e, "formatIOSMobile", function () {
          return I;
        }),
        n.d(e, "saveMobileLinkInfo", function () {
          return A;
        }),
        n.d(e, "getMobileRegistryEntry", function () {
          return N;
        }),
        n.d(e, "getMobileLinkRegistry", function () {
          return P;
        }),
        n.d(e, "getWalletRegistryUrl", function () {
          return q;
        }),
        n.d(e, "getDappRegistryUrl", function () {
          return U;
        }),
        n.d(e, "formatMobileRegistryEntry", function () {
          return F;
        }),
        n.d(e, "formatMobileRegistry", function () {
          return D;
        });
      var r = n(1971),
        o = n(1424),
        i = n(1972);
      function a(t) {
        return Object(i.a)(t);
      }
      function s() {
        var t = a();
        return t && t.os ? t.os : void 0;
      }
      function u() {
        var t = s();
        return !!t && t.toLowerCase().includes("android");
      }
      function c() {
        var t = s();
        return (
          !!t &&
          (t.toLowerCase().includes("ios") ||
            (t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1))
        );
      }
      function l() {
        return !!s() && (u() || c());
      }
      function h() {
        var t = a();
        return !(!t || !t.name) && "node" === t.name.toLowerCase();
      }
      function f() {
        return !h() && !!y();
      }
      var d = o.getFromWindow,
        p = o.getFromWindowOrThrow,
        v = o.getDocumentOrThrow,
        m = o.getDocument,
        g = o.getNavigatorOrThrow,
        y = o.getNavigator,
        _ = o.getLocationOrThrow,
        w = o.getLocation,
        b = o.getCryptoOrThrow,
        x = o.getCrypto,
        k = o.getLocalStorageOrThrow,
        M = o.getLocalStorage;
      function E() {
        return r.getWindowMetadata();
      }
      var O = n(1423),
        S = O.a,
        L = O.b;
      function j(t, e) {
        var n = L(e),
          r = M();
        r && r.setItem(t, n);
      }
      function R(t) {
        var e = null,
          n = M();
        return n && (e = n.getItem(t)), e ? S(e) : e;
      }
      function C(t) {
        var e = M();
        e && e.removeItem(t);
      }
      var T = "WALLETCONNECT_DEEPLINK_CHOICE";
      function I(t, e) {
        var n = encodeURIComponent(t);
        return e.universalLink
          ? "".concat(e.universalLink, "/wc?uri=").concat(n)
          : e.deepLink
          ? ""
              .concat(e.deepLink)
              .concat(e.deepLink.endsWith(":") ? "//" : "/", "wc?uri=")
              .concat(n)
          : "";
      }
      function A(t) {
        var e = t.href.split("?")[0];
        j(T, Object.assign(Object.assign({}, t), { href: e }));
      }
      function N(t, e) {
        return t.filter(function (t) {
          return t.name.toLowerCase().includes(e.toLowerCase());
        })[0];
      }
      function P(t, e) {
        var n = t;
        return (
          e &&
            (n = e
              .map(function (e) {
                return N(t, e);
              })
              .filter(Boolean)),
          n
        );
      }
      var B = "https://registry.walletconnect.com";
      function q() {
        return B + "/api/v2/wallets";
      }
      function U() {
        return B + "/api/v2/dapps";
      }
      function F(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "mobile";
        return {
          name: t.name || "",
          shortName: t.metadata.shortName || "",
          color: t.metadata.colors.primary || "",
          logo: null !== (e = t.image_url.sm) && void 0 !== e ? e : "",
          universalLink: t[n].universal || "",
          deepLink: t[n].native || "",
        };
      }
      function D(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "mobile";
        return Object.values(t)
          .filter(function (t) {
            return !!t[e].universal || !!t[e].native;
          })
          .map(function (t) {
            return F(t, e);
          });
      }
    },
    1304: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "g", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "i", function () {
          return c;
        }),
        n.d(e, "j", function () {
          return l;
        }),
        n.d(e, "h", function () {
          return r;
        }),
        n.d(e, "d", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return f;
        }),
        n.d(e, "k", function () {
          return d;
        }),
        n.d(e, "l", function () {
          return p;
        });
      var r = 512,
        o = 256,
        i = 256,
        a = "AES-CBC",
        s = "SHA-".concat(o),
        u = "HMAC",
        c = "SHA-256",
        l = "SHA-512",
        h = ("aes-".concat(o, "-cbc"), "sha".concat(i), "encrypt"),
        f = "decrypt",
        d = "sign",
        p = "verify";
    },
    1414: function (t, e, n) {
      "use strict";
      var r = n(1049);
      n.o(r, "IJsonRpcProvider") &&
        n.d(e, "IJsonRpcProvider", function () {
          return r.IJsonRpcProvider;
        }),
        n.o(r, "formatJsonRpcError") &&
          n.d(e, "formatJsonRpcError", function () {
            return r.formatJsonRpcError;
          }),
        n.o(r, "formatJsonRpcRequest") &&
          n.d(e, "formatJsonRpcRequest", function () {
            return r.formatJsonRpcRequest;
          }),
        n.o(r, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return r.isHttpUrl;
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return r.isJsonRpcError;
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return r.isJsonRpcResponse;
          }),
        n.o(r, "payloadId") &&
          n.d(e, "payloadId", function () {
            return r.payloadId;
          });
      r.isNode;
    },
    1415: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        });
      var r = n(1265),
        o = n(1164);
      function i() {
        return (
          Date.now() * Math.pow(10, 3) +
          Math.floor(Math.random() * Math.pow(10, 3))
        );
      }
      function a(t, e, n) {
        return { id: n || i(), jsonrpc: "2.0", method: t, params: e };
      }
      function s(t, e, n) {
        return { id: t, jsonrpc: "2.0", error: u(e, n) };
      }
      function u(t, e) {
        return "undefined" === typeof t
          ? Object(r.a)(o.b)
          : ("string" === typeof t &&
              (t = Object.assign(Object.assign({}, Object(r.a)(o.d)), {
                message: t,
              })),
            "undefined" !== typeof e && (t.data = e),
            Object(r.c)(t.code) && (t = Object(r.b)(t.code)),
            t);
      }
    },
    1416: function (t, e, n) {
      "use strict";
    },
    1417: function (t, e, n) {
      "use strict";
      var r = n(1266);
      n.o(r, "IJsonRpcProvider") &&
        n.d(e, "IJsonRpcProvider", function () {
          return r.IJsonRpcProvider;
        }),
        n.o(r, "isHttpUrl") &&
          n.d(e, "isHttpUrl", function () {
            return r.isHttpUrl;
          }),
        n.o(r, "isJsonRpcError") &&
          n.d(e, "isJsonRpcError", function () {
            return r.isJsonRpcError;
          }),
        n.o(r, "isJsonRpcResponse") &&
          n.d(e, "isJsonRpcResponse", function () {
            return r.isJsonRpcResponse;
          });
    },
    1418: function (t, e) {},
    1419: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n(5),
        o = n(4),
        i = n(9),
        a = n(10),
        s = n(1267),
        u = (function (t) {
          Object(i.a)(n, t);
          var e = Object(a.a)(n);
          function n(t) {
            return Object(o.a)(this, n), e.call(this);
          }
          return Object(r.a)(n);
        })(s.a),
        c = (function (t) {
          Object(i.a)(n, t);
          var e = Object(a.a)(n);
          function n(t) {
            return Object(o.a)(this, n), e.call(this);
          }
          return Object(r.a)(n);
        })(
          (function (t) {
            Object(i.a)(n, t);
            var e = Object(a.a)(n);
            function n() {
              return Object(o.a)(this, n), e.call(this);
            }
            return Object(r.a)(n);
          })(s.a)
        );
    },
    1420: function (t, e) {},
    1421: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      function r(t, e) {
        var n = (function (t) {
          var e = t.match(new RegExp(/^\w+:/, "gi"));
          if (e && e.length) return e[0];
        })(t);
        return "undefined" !== typeof n && new RegExp(e).test(n);
      }
      function o(t) {
        return r(t, "^https?:");
      }
    },
    1422: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          "object" === typeof t &&
          "id" in t &&
          "jsonrpc" in t &&
          "2.0" === t.jsonrpc
        );
      }
      function o(t) {
        return (
          r(t) &&
          ((function (t) {
            return "result" in t;
          })(t) ||
            i(t))
        );
      }
      function i(t) {
        return "error" in t;
      }
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return i;
        });
    },
    1423: function (t, e, n) {
      "use strict";
      function r(t) {
        if ("string" !== typeof t)
          throw new Error(
            "Cannot safe json parse value of type ".concat(typeof t)
          );
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function o(t) {
        return "string" === typeof t ? t : JSON.stringify(t);
      }
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return o;
        });
    },
    1424: function (t, e, n) {
      "use strict";
      function r(t) {
        var e = void 0;
        return (
          "undefined" !== typeof window &&
            "undefined" !== typeof window[t] &&
            (e = window[t]),
          e
        );
      }
      function o(t) {
        var e = r(t);
        if (!e) throw new Error("".concat(t, " is not defined in Window"));
        return e;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getLocalStorage =
          e.getLocalStorageOrThrow =
          e.getCrypto =
          e.getCryptoOrThrow =
          e.getLocation =
          e.getLocationOrThrow =
          e.getNavigator =
          e.getNavigatorOrThrow =
          e.getDocument =
          e.getDocumentOrThrow =
          e.getFromWindowOrThrow =
          e.getFromWindow =
            void 0),
        (e.getFromWindow = r),
        (e.getFromWindowOrThrow = o),
        (e.getDocumentOrThrow = function () {
          return o("document");
        }),
        (e.getDocument = function () {
          return r("document");
        }),
        (e.getNavigatorOrThrow = function () {
          return o("navigator");
        }),
        (e.getNavigator = function () {
          return r("navigator");
        }),
        (e.getLocationOrThrow = function () {
          return o("location");
        }),
        (e.getLocation = function () {
          return r("location");
        }),
        (e.getCryptoOrThrow = function () {
          return o("crypto");
        }),
        (e.getCrypto = function () {
          return r("crypto");
        }),
        (e.getLocalStorageOrThrow = function () {
          return o("localStorage");
        }),
        (e.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    1425: function (t, e) {
      (t.exports = o), (o.strict = i), (o.loose = a);
      var n = Object.prototype.toString,
        r = {
          "[object Int8Array]": !0,
          "[object Int16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Uint16Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0,
        };
      function o(t) {
        return i(t) || a(t);
      }
      function i(t) {
        return (
          t instanceof Int8Array ||
          t instanceof Int16Array ||
          t instanceof Int32Array ||
          t instanceof Uint8Array ||
          t instanceof Uint8ClampedArray ||
          t instanceof Uint16Array ||
          t instanceof Uint32Array ||
          t instanceof Float32Array ||
          t instanceof Float64Array
        );
      }
      function a(t) {
        return r[n.call(t)];
      }
    },
    1426: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1049);
      function o(t) {
        return r.getBrowerCrypto().getRandomValues(new Uint8Array(t));
      }
    },
    1427: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return i;
        });
      var r = n(1268);
      function o(t, e, n) {
        return Object(r.b)(t, e, n);
      }
      function i(t, e, n) {
        return Object(r.a)(t, e, n);
      }
    },
    1428: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n(11),
        o = n(1268);
      n(1269);
      function i() {
        i = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          a = r.asyncIterator || "@@asyncIterator",
          s = r.toStringTag || "@@toStringTag";
        function u(t, e, n) {
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
          u({}, "");
        } catch (S) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function c(t, e, n, r) {
          var o = e && e.prototype instanceof f ? e : f,
            i = Object.create(o.prototype),
            a = new M(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return O();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = b(a, n);
                    if (s) {
                      if (s === h) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = l(t, e, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === h)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        t.wrap = c;
        var h = {};
        function f() {}
        function d() {}
        function p() {}
        var v = {};
        u(v, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          g = m && m(m(E([])));
        g && g !== e && n.call(g, o) && (v = g);
        var y = (p.prototype = f.prototype = Object.create(v));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (r, a) {
                !(function r(o, i, a, s) {
                  var u = l(t[o], t, i);
                  if ("throw" !== u.type) {
                    var c = u.arg,
                      h = c.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? e.resolve(h.__await).then(
                          function (t) {
                            r("next", t, a, s);
                          },
                          function (t) {
                            r("throw", t, a, s);
                          }
                        )
                      : e.resolve(h).then(
                          function (t) {
                            (c.value = t), a(c);
                          },
                          function (t) {
                            return r("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(o, i, r, a);
              });
            }
            return (r = r ? r.then(a, a) : a());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return h;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return h;
          }
          var r = l(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), h
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                h)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              h);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function E(t) {
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
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          u(y, "constructor", p),
          u(p, "constructor", d),
          (d.displayName = u(p, s, "GeneratorFunction")),
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
                : ((t.__proto__ = p), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          _(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(c(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          _(y),
          u(y, s, "Generator"),
          u(y, o, function () {
            return this;
          }),
          u(y, "toString", function () {
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
          (t.values = E),
          (M.prototype = {
            constructor: M,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), h)
                  : this.complete(a)
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
                h
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), k(n), h;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: E(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      }
      function a(t, e) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = Object(r.a)(
          i().mark(function t(e, n) {
            var r;
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Object(o.c)(e, n);
                  case 2:
                    return (r = t.sent), t.abrupt("return", r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    1429: function (t, e, n) {
      "use strict";
      var r = n(1049);
      n.o(r, "isConstantTime") &&
        n.d(e, "isConstantTime", function () {
          return r.isConstantTime;
        });
    },
    1430: function (t, e, n) {
      "use strict";
    },
    1431: function (t, e) {},
    1432: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (t.length !== e.length) return !1;
        for (var n = 0, r = 0; r < t.length; r++) n |= t[r] ^ e[r];
        return 0 === n;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1433: function (t, e, n) {
      "use strict";
      n(11), n(1268);
    },
    1434: function (t, e, n) {
      var r = n(1271),
        o = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        i = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case r.L:
            return o[4 * (t - 1) + 0];
          case r.M:
            return o[4 * (t - 1) + 1];
          case r.Q:
            return o[4 * (t - 1) + 2];
          case r.H:
            return o[4 * (t - 1) + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case r.L:
              return i[4 * (t - 1) + 0];
            case r.M:
              return i[4 * (t - 1) + 1];
            case r.Q:
              return i[4 * (t - 1) + 2];
            case r.H:
              return i[4 * (t - 1) + 3];
            default:
              return;
          }
        });
    },
    1435: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    1436: function (t, e) {
      var n =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        r =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (n = n.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (e.KANJI = new RegExp(n, "g")),
        (e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = new RegExp(r, "g")),
        (e.NUMERIC = new RegExp("[0-9]+", "g")),
        (e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      var o = new RegExp("^" + n + "$"),
        i = new RegExp("^[0-9]+$"),
        a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return o.test(t);
      }),
        (e.testNumeric = function (t) {
          return i.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return a.test(t);
        });
    },
    1437: function (t, e) {
      function n(t) {
        if (
          ("number" === typeof t && (t = t.toString()), "string" !== typeof t)
        )
          throw new Error("Color should be defined as hex string");
        var e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw new Error("Invalid hex color: " + t);
        (3 !== e.length && 4 !== e.length) ||
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push("F", "F");
        var n = parseInt(e.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        var e =
            "undefined" === typeof t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          r = t.width && t.width >= 21 ? t.width : void 0,
          o = t.scale || 4;
        return {
          width: r,
          scale: r ? 4 : o,
          margin: e,
          color: {
            dark: n(t.color.dark || "#000000ff"),
            light: n(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, n) {
          var r = e.getScale(t, n);
          return Math.floor((t + 2 * n.margin) * r);
        }),
        (e.qrToImageData = function (t, n, r) {
          for (
            var o = n.modules.size,
              i = n.modules.data,
              a = e.getScale(o, r),
              s = Math.floor((o + 2 * r.margin) * a),
              u = r.margin * a,
              c = [r.color.light, r.color.dark],
              l = 0;
            l < s;
            l++
          )
            for (var h = 0; h < s; h++) {
              var f = 4 * (l * s + h),
                d = r.color.light;
              if (l >= u && h >= u && l < s - u && h < s - u)
                d =
                  c[
                    i[Math.floor((l - u) / a) * o + Math.floor((h - u) / a)]
                      ? 1
                      : 0
                  ];
              (t[f++] = d.r), (t[f++] = d.g), (t[f++] = d.b), (t[f] = d.a);
            }
        });
    },
    1967: function (t, e, n) {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        o = "~";
      function i() {}
      function a(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function s(t, e, n, r, i) {
        if ("function" !== typeof n)
          throw new TypeError("The listener must be a function");
        var s = new a(n, r || t, i),
          u = o ? o + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], s])
              : t._events[u].push(s)
            : ((t._events[u] = s), t._eventsCount++),
          t
        );
      }
      function u(t, e) {
        0 === --t._eventsCount ? (t._events = new i()) : delete t._events[e];
      }
      function c() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
        (c.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(o ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (c.prototype.listeners = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, i = n.length, a = new Array(i); r < i; r++)
            a[r] = n[r].fn;
          return a;
        }),
        (c.prototype.listenerCount = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (t, e, n, r, i, a) {
          var s = o ? o + t : t;
          if (!this._events[s]) return !1;
          var u,
            c,
            l = this._events[s],
            h = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), h)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, e), !0;
              case 3:
                return l.fn.call(l.context, e, n), !0;
              case 4:
                return l.fn.call(l.context, e, n, r), !0;
              case 5:
                return l.fn.call(l.context, e, n, r, i), !0;
              case 6:
                return l.fn.call(l.context, e, n, r, i, a), !0;
            }
            for (c = 1, u = new Array(h - 1); c < h; c++)
              u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
          } else {
            var f,
              d = l.length;
            for (c = 0; c < d; c++)
              switch (
                (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h)
              ) {
                case 1:
                  l[c].fn.call(l[c].context);
                  break;
                case 2:
                  l[c].fn.call(l[c].context, e);
                  break;
                case 3:
                  l[c].fn.call(l[c].context, e, n);
                  break;
                case 4:
                  l[c].fn.call(l[c].context, e, n, r);
                  break;
                default:
                  if (!u)
                    for (f = 1, u = new Array(h - 1); f < h; f++)
                      u[f - 1] = arguments[f];
                  l[c].fn.apply(l[c].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (t, e, n) {
          return s(this, t, e, n, !1);
        }),
        (c.prototype.once = function (t, e, n) {
          return s(this, t, e, n, !0);
        }),
        (c.prototype.removeListener = function (t, e, n, r) {
          var i = o ? o + t : t;
          if (!this._events[i]) return this;
          if (!e) return u(this, i), this;
          var a = this._events[i];
          if (a.fn)
            a.fn !== e ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              u(this, i);
          else {
            for (var s = 0, c = [], l = a.length; s < l; s++)
              (a[s].fn !== e ||
                (r && !a[s].once) ||
                (n && a[s].context !== n)) &&
                c.push(a[s]);
            c.length
              ? (this._events[i] = 1 === c.length ? c[0] : c)
              : u(this, i);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = o ? o + t : t), this._events[e] && u(this, e))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = o),
        (c.EventEmitter = c),
        (t.exports = c);
    },
    1968: function (t, e, n) {
      "use strict";
      (function (t) {
        function n() {
          return (
            (null === t || void 0 === t ? void 0 : t.crypto) ||
            (null === t || void 0 === t ? void 0 : t.msCrypto) ||
            {}
          );
        }
        function r() {
          var t = n();
          return t.subtle || t.webkitSubtle;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isBrowserCryptoAvailable =
            e.getSubtleCrypto =
            e.getBrowerCrypto =
              void 0),
          (e.getBrowerCrypto = n),
          (e.getSubtleCrypto = r),
          (e.isBrowserCryptoAvailable = function () {
            return !!n() && !!r();
          });
      }.call(this, n(30)));
    },
    1969: function (t, e, n) {
      "use strict";
      (function (t) {
        function n() {
          return (
            "undefined" === typeof document &&
            "undefined" !== typeof navigator &&
            "ReactNative" === navigator.product
          );
        }
        function r() {
          return (
            "undefined" !== typeof t &&
            "undefined" !== typeof t.versions &&
            "undefined" !== typeof t.versions.node
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isBrowser = e.isNode = e.isReactNative = void 0),
          (e.isReactNative = n),
          (e.isNode = r),
          (e.isBrowser = function () {
            return !n() && !r();
          });
      }.call(this, n(25)));
    },
    1970: function (t, e) {
      var n = "undefined" !== typeof self ? self : this,
        r = (function () {
          function t() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (t.prototype = n), new t();
        })();
      !(function (t) {
        !(function (e) {
          var n = "URLSearchParams" in t,
            r = "Symbol" in t && "iterator" in Symbol,
            o =
              "FileReader" in t &&
              "Blob" in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            i = "FormData" in t,
            a = "ArrayBuffer" in t;
          if (a)
            var s = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              u =
                ArrayBuffer.isView ||
                function (t) {
                  return t && s.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          function c(t) {
            if (
              ("string" !== typeof t && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
            )
              throw new TypeError("Invalid character in header field name");
            return t.toLowerCase();
          }
          function l(t) {
            return "string" !== typeof t && (t = String(t)), t;
          }
          function h(t) {
            var e = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              r &&
                (e[Symbol.iterator] = function () {
                  return e;
                }),
              e
            );
          }
          function f(t) {
            (this.map = {}),
              t instanceof f
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function d(t) {
            if (t.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
          }
          function p(t) {
            return new Promise(function (e, n) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  n(t.error);
                });
            });
          }
          function v(t) {
            var e = new FileReader(),
              n = p(e);
            return e.readAsArrayBuffer(t), n;
          }
          function m(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function g() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                var e;
                (this._bodyInit = t),
                  t
                    ? "string" === typeof t
                      ? (this._bodyText = t)
                      : o && Blob.prototype.isPrototypeOf(t)
                      ? (this._bodyBlob = t)
                      : i && FormData.prototype.isPrototypeOf(t)
                      ? (this._bodyFormData = t)
                      : n && URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : a && o && (e = t) && DataView.prototype.isPrototypeOf(e)
                      ? ((this._bodyArrayBuffer = m(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : a && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t))
                      ? (this._bodyArrayBuffer = m(t))
                      : (this._bodyText = t = Object.prototype.toString.call(t))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" === typeof t
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : n &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              o &&
                ((this.blob = function () {
                  var t = d(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? d(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(v);
                })),
              (this.text = function () {
                var t = d(this);
                if (t) return t;
                if (this._bodyBlob)
                  return (function (t) {
                    var e = new FileReader(),
                      n = p(e);
                    return e.readAsText(t), n;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (t) {
                      for (
                        var e = new Uint8Array(t),
                          n = new Array(e.length),
                          r = 0;
                        r < e.length;
                        r++
                      )
                        n[r] = String.fromCharCode(e[r]);
                      return n.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              i &&
                (this.formData = function () {
                  return this.text().then(w);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (f.prototype.append = function (t, e) {
            (t = c(t)), (e = l(e));
            var n = this.map[t];
            this.map[t] = n ? n + ", " + e : e;
          }),
            (f.prototype.delete = function (t) {
              delete this.map[c(t)];
            }),
            (f.prototype.get = function (t) {
              return (t = c(t)), this.has(t) ? this.map[t] : null;
            }),
            (f.prototype.has = function (t) {
              return this.map.hasOwnProperty(c(t));
            }),
            (f.prototype.set = function (t, e) {
              this.map[c(t)] = l(e);
            }),
            (f.prototype.forEach = function (t, e) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
            }),
            (f.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push(n);
                }),
                h(t)
              );
            }),
            (f.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                h(t)
              );
            }),
            (f.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, n) {
                  t.push([n, e]);
                }),
                h(t)
              );
            }),
            r && (f.prototype[Symbol.iterator] = f.prototype.entries);
          var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function _(t, e) {
            var n = (e = e || {}).body;
            if (t instanceof _) {
              if (t.bodyUsed) throw new TypeError("Already read");
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new f(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                n ||
                  null == t._bodyInit ||
                  ((n = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials =
                e.credentials || this.credentials || "same-origin"),
              (!e.headers && this.headers) || (this.headers = new f(e.headers)),
              (this.method = (function (t) {
                var e = t.toUpperCase();
                return y.indexOf(e) > -1 ? e : t;
              })(e.method || this.method || "GET")),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && n)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n);
          }
          function w(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split("&")
                .forEach(function (t) {
                  if (t) {
                    var n = t.split("="),
                      r = n.shift().replace(/\+/g, " "),
                      o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o));
                  }
                }),
              e
            );
          }
          function b(t) {
            var e = new f();
            return (
              t
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (t) {
                  var n = t.split(":"),
                    r = n.shift().trim();
                  if (r) {
                    var o = n.join(":").trim();
                    e.append(r, o);
                  }
                }),
              e
            );
          }
          function x(t, e) {
            e || (e = {}),
              (this.type = "default"),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in e ? e.statusText : "OK"),
              (this.headers = new f(e.headers)),
              (this.url = e.url || ""),
              this._initBody(t);
          }
          (_.prototype.clone = function () {
            return new _(this, { body: this._bodyInit });
          }),
            g.call(_.prototype),
            g.call(x.prototype),
            (x.prototype.clone = function () {
              return new x(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new f(this.headers),
                url: this.url,
              });
            }),
            (x.error = function () {
              var t = new x(null, { status: 0, statusText: "" });
              return (t.type = "error"), t;
            });
          var k = [301, 302, 303, 307, 308];
          (x.redirect = function (t, e) {
            if (-1 === k.indexOf(e))
              throw new RangeError("Invalid status code");
            return new x(null, { status: e, headers: { location: t } });
          }),
            (e.DOMException = t.DOMException);
          try {
            new e.DOMException();
          } catch (E) {
            (e.DOMException = function (t, e) {
              (this.message = t), (this.name = e);
              var n = Error(t);
              this.stack = n.stack;
            }),
              (e.DOMException.prototype = Object.create(Error.prototype)),
              (e.DOMException.prototype.constructor = e.DOMException);
          }
          function M(t, n) {
            return new Promise(function (r, i) {
              var a = new _(t, n);
              if (a.signal && a.signal.aborted)
                return i(new e.DOMException("Aborted", "AbortError"));
              var s = new XMLHttpRequest();
              function u() {
                s.abort();
              }
              (s.onload = function () {
                var t = {
                  status: s.status,
                  statusText: s.statusText,
                  headers: b(s.getAllResponseHeaders() || ""),
                };
                t.url =
                  "responseURL" in s
                    ? s.responseURL
                    : t.headers.get("X-Request-URL");
                var e = "response" in s ? s.response : s.responseText;
                r(new x(e, t));
              }),
                (s.onerror = function () {
                  i(new TypeError("Network request failed"));
                }),
                (s.ontimeout = function () {
                  i(new TypeError("Network request failed"));
                }),
                (s.onabort = function () {
                  i(new e.DOMException("Aborted", "AbortError"));
                }),
                s.open(a.method, a.url, !0),
                "include" === a.credentials
                  ? (s.withCredentials = !0)
                  : "omit" === a.credentials && (s.withCredentials = !1),
                "responseType" in s && o && (s.responseType = "blob"),
                a.headers.forEach(function (t, e) {
                  s.setRequestHeader(e, t);
                }),
                a.signal &&
                  (a.signal.addEventListener("abort", u),
                  (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      a.signal.removeEventListener("abort", u);
                  })),
                s.send("undefined" === typeof a._bodyInit ? null : a._bodyInit);
            });
          }
          (M.polyfill = !0),
            t.fetch ||
              ((t.fetch = M),
              (t.Headers = f),
              (t.Request = _),
              (t.Response = x)),
            (e.Headers = f),
            (e.Request = _),
            (e.Response = x),
            (e.fetch = M),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })({});
      })(r),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill;
      var o = r;
      ((e = o.fetch).default = o.fetch),
        (e.fetch = o.fetch),
        (e.Headers = o.Headers),
        (e.Request = o.Request),
        (e.Response = o.Response),
        (t.exports = e);
    },
    1971: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getWindowMetadata = void 0);
      var r = n(1424);
      e.getWindowMetadata = function () {
        var t, e;
        try {
          (t = r.getDocumentOrThrow()), (e = r.getLocationOrThrow());
        } catch (i) {
          return null;
        }
        function n() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          for (
            var o = t.getElementsByTagName("meta"),
              i = function (t) {
                var e = o[t],
                  r = ["itemprop", "property", "name"]
                    .map(function (t) {
                      return e.getAttribute(t);
                    })
                    .filter(function (t) {
                      return !!t && n.includes(t);
                    });
                if (r.length && r) {
                  var i = e.getAttribute("content");
                  if (i) return { v: i };
                }
              },
              a = 0;
            a < o.length;
            a++
          ) {
            var s = i(a);
            if ("object" === typeof s) return s.v;
          }
          return "";
        }
        var o = (function () {
          var e = n("name", "og:site_name", "og:title", "twitter:title");
          return e || (e = t.title), e;
        })();
        return {
          description: n(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          url: e.origin,
          icons: (function () {
            for (
              var n = t.getElementsByTagName("link"), r = [], o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o],
                a = i.getAttribute("rel");
              if (a && a.toLowerCase().indexOf("icon") > -1) {
                var s = i.getAttribute("href");
                if (s)
                  if (
                    -1 === s.toLowerCase().indexOf("https:") &&
                    -1 === s.toLowerCase().indexOf("http:") &&
                    0 !== s.indexOf("//")
                  ) {
                    var u = e.protocol + "//" + e.host;
                    if (0 === s.indexOf("/")) u += s;
                    else {
                      var c = e.pathname.split("/");
                      c.pop(), (u += c.join("/") + "/" + s);
                    }
                    r.push(u);
                  } else if (0 === s.indexOf("//")) {
                    var l = e.protocol + s;
                    r.push(l);
                  } else r.push(s);
              }
            }
            return r;
          })(),
          name: o,
        };
      };
    },
    1972: function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return f;
        });
        var r = function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var r = Array(t),
              o = 0;
            for (e = 0; e < n; e++)
              for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
                r[o] = i[a];
            return r;
          },
          o = function (t, e, n) {
            (this.name = t),
              (this.version = e),
              (this.os = n),
              (this.type = "browser");
          },
          i = function (e) {
            (this.version = e),
              (this.type = "node"),
              (this.name = "node"),
              (this.os = t.platform);
          },
          a = function (t, e, n, r) {
            (this.name = t),
              (this.version = e),
              (this.os = n),
              (this.bot = r),
              (this.type = "bot-device");
          },
          s = function () {
            (this.type = "bot"),
              (this.bot = !0),
              (this.name = "bot"),
              (this.version = null),
              (this.os = null);
          },
          u = function () {
            (this.type = "react-native"),
              (this.name = "react-native"),
              (this.version = null),
              (this.os = null);
          },
          c =
            /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
          l = [
            ["aol", /AOLShield\/([0-9\._]+)/],
            ["edge", /Edge\/([0-9\._]+)/],
            ["edge-ios", /EdgiOS\/([0-9\._]+)/],
            ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
            ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
            ["samsung", /SamsungBrowser\/([0-9\.]+)/],
            ["silk", /\bSilk\/([0-9._-]+)\b/],
            ["miui", /MiuiBrowser\/([0-9\.]+)$/],
            ["beaker", /BeakerBrowser\/([0-9\.]+)/],
            ["edge-chromium", /EdgA?\/([0-9\.]+)/],
            [
              "chromium-webview",
              /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
            ],
            ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
            ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
            ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
            ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
            ["fxios", /FxiOS\/([0-9\.]+)/],
            ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
            ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
            ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
            ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
            ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
            ["ie", /MSIE\s(7\.0)/],
            ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
            ["android", /Android\s([0-9\.]+)/],
            ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
            ["safari", /Version\/([0-9\._]+).*Safari/],
            ["facebook", /FBAV\/([0-9\.]+)/],
            ["instagram", /Instagram\s([0-9\.]+)/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
            [
              "searchbot",
              /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
            ],
          ],
          h = [
            ["iOS", /iP(hone|od|ad)/],
            ["Android OS", /Android/],
            ["BlackBerry OS", /BlackBerry|BB10/],
            ["Windows Mobile", /IEMobile/],
            ["Amazon OS", /Kindle/],
            ["Windows 3.11", /Win16/],
            ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
            ["Windows 98", /(Windows 98)|(Win98)/],
            ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
            ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
            ["Windows Server 2003", /(Windows NT 5.2)/],
            ["Windows Vista", /(Windows NT 6.0)/],
            ["Windows 7", /(Windows NT 6.1)/],
            ["Windows 8", /(Windows NT 6.2)/],
            ["Windows 8.1", /(Windows NT 6.3)/],
            ["Windows 10", /(Windows NT 10.0)/],
            ["Windows ME", /Windows ME/],
            ["Open BSD", /OpenBSD/],
            ["Sun OS", /SunOS/],
            ["Chrome OS", /CrOS/],
            ["Linux", /(Linux)|(X11)/],
            ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
            ["QNX", /QNX/],
            ["BeOS", /BeOS/],
            ["OS/2", /OS\/2/],
          ];
        function f(e) {
          return e
            ? p(e)
            : "undefined" === typeof document &&
              "undefined" !== typeof navigator &&
              "ReactNative" === navigator.product
            ? new u()
            : "undefined" !== typeof navigator
            ? p(navigator.userAgent)
            : "undefined" !== typeof t && t.version
            ? new i(t.version.slice(1))
            : null;
        }
        function d(t) {
          return (
            "" !== t &&
            l.reduce(function (e, n) {
              var r = n[0],
                o = n[1];
              if (e) return e;
              var i = o.exec(t);
              return !!i && [r, i];
            }, !1)
          );
        }
        function p(t) {
          var e = d(t);
          if (!e) return null;
          var n = e[0],
            i = e[1];
          if ("searchbot" === n) return new s();
          var u = i[1] && i[1].split(/[._]/).slice(0, 3);
          u
            ? u.length < 3 &&
              (u = r(
                u,
                (function (t) {
                  for (var e = [], n = 0; n < t; n++) e.push("0");
                  return e;
                })(3 - u.length)
              ))
            : (u = []);
          var l = u.join("."),
            f = (function (t) {
              for (var e = 0, n = h.length; e < n; e++) {
                var r = h[e],
                  o = r[0];
                if (r[1].exec(t)) return o;
              }
              return null;
            })(t),
            p = c.exec(t);
          return p && p[1] ? new a(n, l, f, p[1]) : new o(n, l, f);
        }
      }.call(this, n(25)));
    },
    1973: function (t, e, n) {
      (function (t) {
        !(function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function o(t, e) {
            t.super_ = e;
            var n = function () {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          }
          function i(t, e, n) {
            if (i.isBN(t)) return t;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((n = e), (e = 10)),
                this._init(t || 0, e || 10, n || "be"));
          }
          var a;
          "object" === typeof t ? (t.exports = i) : (e.BN = i),
            (i.BN = i),
            (i.wordSize = 26);
          try {
            a = n(1974).Buffer;
          } catch (M) {}
          function s(t, e, n) {
            for (var r = 0, o = Math.min(t.length, n), i = e; i < o; i++) {
              var a = t.charCodeAt(i) - 48;
              (r <<= 4),
                (r |=
                  a >= 49 && a <= 54
                    ? a - 49 + 10
                    : a >= 17 && a <= 22
                    ? a - 17 + 10
                    : 15 & a);
            }
            return r;
          }
          function u(t, e, n, r) {
            for (var o = 0, i = Math.min(t.length, n), a = e; a < i; a++) {
              var s = t.charCodeAt(a) - 48;
              (o *= r),
                (o += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
            }
            return o;
          }
          (i.isBN = function (t) {
            return (
              t instanceof i ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === i.wordSize &&
                Array.isArray(t.words))
            );
          }),
            (i.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (i.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (i.prototype._init = function (t, e, n) {
              if ("number" === typeof t) return this._initNumber(t, e, n);
              if ("object" === typeof t) return this._initArray(t, e, n);
              "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
              var o = 0;
              "-" === (t = t.toString().replace(/\s+/g, ""))[0] && o++,
                16 === e ? this._parseHex(t, o) : this._parseBase(t, e, o),
                "-" === t[0] && (this.negative = 1),
                this.strip(),
                "le" === n && this._initArray(this.toArray(), e, n);
            }),
            (i.prototype._initNumber = function (t, e, n) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                "le" === n && this._initArray(this.toArray(), e, n);
            }),
            (i.prototype._initArray = function (t, e, n) {
              if ((r("number" === typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length));
              for (var o = 0; o < this.length; o++) this.words[o] = 0;
              var i,
                a,
                s = 0;
              if ("be" === n)
                for (o = t.length - 1, i = 0; o >= 0; o -= 3)
                  (a = t[o] | (t[o - 1] << 8) | (t[o - 2] << 16)),
                    (this.words[i] |= (a << s) & 67108863),
                    (this.words[i + 1] = (a >>> (26 - s)) & 67108863),
                    (s += 24) >= 26 && ((s -= 26), i++);
              else if ("le" === n)
                for (o = 0, i = 0; o < t.length; o += 3)
                  (a = t[o] | (t[o + 1] << 8) | (t[o + 2] << 16)),
                    (this.words[i] |= (a << s) & 67108863),
                    (this.words[i + 1] = (a >>> (26 - s)) & 67108863),
                    (s += 24) >= 26 && ((s -= 26), i++);
              return this.strip();
            }),
            (i.prototype._parseHex = function (t, e) {
              (this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var r,
                o,
                i = 0;
              for (n = t.length - 6, r = 0; n >= e; n -= 6)
                (o = s(t, n, n + 6)),
                  (this.words[r] |= (o << i) & 67108863),
                  (this.words[r + 1] |= (o >>> (26 - i)) & 4194303),
                  (i += 24) >= 26 && ((i -= 26), r++);
              n + 6 !== e &&
                ((o = s(t, e, n + 6)),
                (this.words[r] |= (o << i) & 67108863),
                (this.words[r + 1] |= (o >>> (26 - i)) & 4194303)),
                this.strip();
            }),
            (i.prototype._parseBase = function (t, e, n) {
              (this.words = [0]), (this.length = 1);
              for (var r = 0, o = 1; o <= 67108863; o *= e) r++;
              r--, (o = (o / e) | 0);
              for (
                var i = t.length - n,
                  a = i % r,
                  s = Math.min(i, i - a) + n,
                  c = 0,
                  l = n;
                l < s;
                l += r
              )
                (c = u(t, l, l + r, e)),
                  this.imuln(o),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c);
              if (0 !== a) {
                var h = 1;
                for (c = u(t, l, t.length, e), l = 0; l < a; l++) h *= e;
                this.imuln(h),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c);
              }
            }),
            (i.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              (t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red);
            }),
            (i.prototype.clone = function () {
              var t = new i(null);
              return this.copy(t), t;
            }),
            (i.prototype._expand = function (t) {
              for (; this.length < t; ) this.words[this.length++] = 0;
              return this;
            }),
            (i.prototype.strip = function () {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (i.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            (i.prototype.inspect = function () {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            });
          var c = [
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
            l = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            h = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          function f(t, e, n) {
            n.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            (n.length = r), (r = (r - 1) | 0);
            var o = 0 | t.words[0],
              i = 0 | e.words[0],
              a = o * i,
              s = 67108863 & a,
              u = (a / 67108864) | 0;
            n.words[0] = s;
            for (var c = 1; c < r; c++) {
              for (
                var l = u >>> 26,
                  h = 67108863 & u,
                  f = Math.min(c, e.length - 1),
                  d = Math.max(0, c - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (c - d) | 0;
                (l +=
                  ((a = (o = 0 | t.words[p]) * (i = 0 | e.words[d]) + h) /
                    67108864) |
                  0),
                  (h = 67108863 & a);
              }
              (n.words[c] = 0 | h), (u = 0 | l);
            }
            return 0 !== u ? (n.words[c] = 0 | u) : n.length--, n.strip();
          }
          (i.prototype.toString = function (t, e) {
            var n;
            if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
              n = "";
              for (var o = 0, i = 0, a = 0; a < this.length; a++) {
                var s = this.words[a],
                  u = (16777215 & ((s << o) | i)).toString(16);
                (n =
                  0 !== (i = (s >>> (24 - o)) & 16777215) ||
                  a !== this.length - 1
                    ? c[6 - u.length] + u + n
                    : u + n),
                  (o += 2) >= 26 && ((o -= 26), a--);
              }
              for (0 !== i && (n = i.toString(16) + n); n.length % e !== 0; )
                n = "0" + n;
              return 0 !== this.negative && (n = "-" + n), n;
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var f = l[t],
                d = h[t];
              n = "";
              var p = this.clone();
              for (p.negative = 0; !p.isZero(); ) {
                var v = p.modn(d).toString(t);
                n = (p = p.idivn(d)).isZero() ? v + n : c[f - v.length] + v + n;
              }
              for (this.isZero() && (n = "0" + n); n.length % e !== 0; )
                n = "0" + n;
              return 0 !== this.negative && (n = "-" + n), n;
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (i.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (i.prototype.toJSON = function () {
              return this.toString(16);
            }),
            (i.prototype.toBuffer = function (t, e) {
              return r("undefined" !== typeof a), this.toArrayLike(a, t, e);
            }),
            (i.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }),
            (i.prototype.toArrayLike = function (t, e, n) {
              var o = this.byteLength(),
                i = n || Math.max(1, o);
              r(o <= i, "byte array longer than desired length"),
                r(i > 0, "Requested array length <= 0"),
                this.strip();
              var a,
                s,
                u = "le" === e,
                c = new t(i),
                l = this.clone();
              if (u) {
                for (s = 0; !l.isZero(); s++)
                  (a = l.andln(255)), l.iushrn(8), (c[s] = a);
                for (; s < i; s++) c[s] = 0;
              } else {
                for (s = 0; s < i - o; s++) c[s] = 0;
                for (s = 0; !l.isZero(); s++)
                  (a = l.andln(255)), l.iushrn(8), (c[i - s - 1] = a);
              }
              return c;
            }),
            Math.clz32
              ? (i.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (i.prototype._countBits = function (t) {
                  var e = t,
                    n = 0;
                  return (
                    e >= 4096 && ((n += 13), (e >>>= 13)),
                    e >= 64 && ((n += 7), (e >>>= 7)),
                    e >= 8 && ((n += 4), (e >>>= 4)),
                    e >= 2 && ((n += 2), (e >>>= 2)),
                    n + e
                  );
                }),
            (i.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                n = 0;
              return (
                0 === (8191 & e) && ((n += 13), (e >>>= 13)),
                0 === (127 & e) && ((n += 7), (e >>>= 7)),
                0 === (15 & e) && ((n += 4), (e >>>= 4)),
                0 === (3 & e) && ((n += 2), (e >>>= 2)),
                0 === (1 & e) && n++,
                n
              );
            }),
            (i.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (i.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var n = this._zeroBits(this.words[e]);
                if (((t += n), 26 !== n)) break;
              }
              return t;
            }),
            (i.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (i.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (i.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (i.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (i.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (i.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (i.prototype.iuor = function (t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this.strip();
            }),
            (i.prototype.ior = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuor(t);
            }),
            (i.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (i.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (i.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var n = 0; n < e.length; n++)
                this.words[n] = this.words[n] & t.words[n];
              return (this.length = e.length), this.strip();
            }),
            (i.prototype.iand = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuand(t);
            }),
            (i.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (i.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (i.prototype.iuxor = function (t) {
              var e, n;
              this.length > t.length
                ? ((e = this), (n = t))
                : ((e = t), (n = this));
              for (var r = 0; r < n.length; r++)
                this.words[r] = e.words[r] ^ n.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return (this.length = e.length), this.strip();
            }),
            (i.prototype.ixor = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuxor(t);
            }),
            (i.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (i.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (i.prototype.inotn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                n = t % 26;
              this._expand(e), n > 0 && e--;
              for (var o = 0; o < e; o++)
                this.words[o] = 67108863 & ~this.words[o];
              return (
                n > 0 &&
                  (this.words[o] = ~this.words[o] & (67108863 >> (26 - n))),
                this.strip()
              );
            }),
            (i.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (i.prototype.setn = function (t, e) {
              r("number" === typeof t && t >= 0);
              var n = (t / 26) | 0,
                o = t % 26;
              return (
                this._expand(n + 1),
                (this.words[n] = e
                  ? this.words[n] | (1 << o)
                  : this.words[n] & ~(1 << o)),
                this.strip()
              );
            }),
            (i.prototype.iadd = function (t) {
              var e, n, r;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((n = this), (r = t))
                : ((n = t), (r = this));
              for (var o = 0, i = 0; i < r.length; i++)
                (e = (0 | n.words[i]) + (0 | r.words[i]) + o),
                  (this.words[i] = 67108863 & e),
                  (o = e >>> 26);
              for (; 0 !== o && i < n.length; i++)
                (e = (0 | n.words[i]) + o),
                  (this.words[i] = 67108863 & e),
                  (o = e >>> 26);
              if (((this.length = n.length), 0 !== o))
                (this.words[this.length] = o), this.length++;
              else if (n !== this)
                for (; i < n.length; i++) this.words[i] = n.words[i];
              return this;
            }),
            (i.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this);
            }),
            (i.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return (t.negative = 1), e._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var n,
                r,
                o = this.cmp(t);
              if (0 === o)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              o > 0 ? ((n = this), (r = t)) : ((n = t), (r = this));
              for (var i = 0, a = 0; a < r.length; a++)
                (i = (e = (0 | n.words[a]) - (0 | r.words[a]) + i) >> 26),
                  (this.words[a] = 67108863 & e);
              for (; 0 !== i && a < n.length; a++)
                (i = (e = (0 | n.words[a]) + i) >> 26),
                  (this.words[a] = 67108863 & e);
              if (0 === i && a < n.length && n !== this)
                for (; a < n.length; a++) this.words[a] = n.words[a];
              return (
                (this.length = Math.max(this.length, a)),
                n !== this && (this.negative = 1),
                this.strip()
              );
            }),
            (i.prototype.sub = function (t) {
              return this.clone().isub(t);
            });
          var d = function (t, e, n) {
            var r,
              o,
              i,
              a = t.words,
              s = e.words,
              u = n.words,
              c = 0,
              l = 0 | a[0],
              h = 8191 & l,
              f = l >>> 13,
              d = 0 | a[1],
              p = 8191 & d,
              v = d >>> 13,
              m = 0 | a[2],
              g = 8191 & m,
              y = m >>> 13,
              _ = 0 | a[3],
              w = 8191 & _,
              b = _ >>> 13,
              x = 0 | a[4],
              k = 8191 & x,
              M = x >>> 13,
              E = 0 | a[5],
              O = 8191 & E,
              S = E >>> 13,
              L = 0 | a[6],
              j = 8191 & L,
              R = L >>> 13,
              C = 0 | a[7],
              T = 8191 & C,
              I = C >>> 13,
              A = 0 | a[8],
              N = 8191 & A,
              P = A >>> 13,
              B = 0 | a[9],
              q = 8191 & B,
              U = B >>> 13,
              F = 0 | s[0],
              D = 8191 & F,
              H = F >>> 13,
              J = 0 | s[1],
              z = 8191 & J,
              W = J >>> 13,
              G = 0 | s[2],
              Y = 8191 & G,
              K = G >>> 13,
              V = 0 | s[3],
              Q = 8191 & V,
              Z = V >>> 13,
              $ = 0 | s[4],
              X = 8191 & $,
              tt = $ >>> 13,
              et = 0 | s[5],
              nt = 8191 & et,
              rt = et >>> 13,
              ot = 0 | s[6],
              it = 8191 & ot,
              at = ot >>> 13,
              st = 0 | s[7],
              ut = 8191 & st,
              ct = st >>> 13,
              lt = 0 | s[8],
              ht = 8191 & lt,
              ft = lt >>> 13,
              dt = 0 | s[9],
              pt = 8191 & dt,
              vt = dt >>> 13;
            (n.negative = t.negative ^ e.negative), (n.length = 19);
            var mt =
              (((c + (r = Math.imul(h, D))) | 0) +
                ((8191 & (o = ((o = Math.imul(h, H)) + Math.imul(f, D)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((i = Math.imul(f, H)) + (o >>> 13)) | 0) + (mt >>> 26)) | 0),
              (mt &= 67108863),
              (r = Math.imul(p, D)),
              (o = ((o = Math.imul(p, H)) + Math.imul(v, D)) | 0),
              (i = Math.imul(v, H));
            var gt =
              (((c + (r = (r + Math.imul(h, z)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, W)) | 0) + Math.imul(f, z)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, W)) | 0) + (o >>> 13)) | 0) +
                (gt >>> 26)) |
              0),
              (gt &= 67108863),
              (r = Math.imul(g, D)),
              (o = ((o = Math.imul(g, H)) + Math.imul(y, D)) | 0),
              (i = Math.imul(y, H)),
              (r = (r + Math.imul(p, z)) | 0),
              (o = ((o = (o + Math.imul(p, W)) | 0) + Math.imul(v, z)) | 0),
              (i = (i + Math.imul(v, W)) | 0);
            var yt =
              (((c + (r = (r + Math.imul(h, Y)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, K)) | 0) + Math.imul(f, Y)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, K)) | 0) + (o >>> 13)) | 0) +
                (yt >>> 26)) |
              0),
              (yt &= 67108863),
              (r = Math.imul(w, D)),
              (o = ((o = Math.imul(w, H)) + Math.imul(b, D)) | 0),
              (i = Math.imul(b, H)),
              (r = (r + Math.imul(g, z)) | 0),
              (o = ((o = (o + Math.imul(g, W)) | 0) + Math.imul(y, z)) | 0),
              (i = (i + Math.imul(y, W)) | 0),
              (r = (r + Math.imul(p, Y)) | 0),
              (o = ((o = (o + Math.imul(p, K)) | 0) + Math.imul(v, Y)) | 0),
              (i = (i + Math.imul(v, K)) | 0);
            var _t =
              (((c + (r = (r + Math.imul(h, Q)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, Z)) | 0) + Math.imul(f, Q)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, Z)) | 0) + (o >>> 13)) | 0) +
                (_t >>> 26)) |
              0),
              (_t &= 67108863),
              (r = Math.imul(k, D)),
              (o = ((o = Math.imul(k, H)) + Math.imul(M, D)) | 0),
              (i = Math.imul(M, H)),
              (r = (r + Math.imul(w, z)) | 0),
              (o = ((o = (o + Math.imul(w, W)) | 0) + Math.imul(b, z)) | 0),
              (i = (i + Math.imul(b, W)) | 0),
              (r = (r + Math.imul(g, Y)) | 0),
              (o = ((o = (o + Math.imul(g, K)) | 0) + Math.imul(y, Y)) | 0),
              (i = (i + Math.imul(y, K)) | 0),
              (r = (r + Math.imul(p, Q)) | 0),
              (o = ((o = (o + Math.imul(p, Z)) | 0) + Math.imul(v, Q)) | 0),
              (i = (i + Math.imul(v, Z)) | 0);
            var wt =
              (((c + (r = (r + Math.imul(h, X)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, tt)) | 0) + Math.imul(f, X)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, tt)) | 0) + (o >>> 13)) | 0) +
                (wt >>> 26)) |
              0),
              (wt &= 67108863),
              (r = Math.imul(O, D)),
              (o = ((o = Math.imul(O, H)) + Math.imul(S, D)) | 0),
              (i = Math.imul(S, H)),
              (r = (r + Math.imul(k, z)) | 0),
              (o = ((o = (o + Math.imul(k, W)) | 0) + Math.imul(M, z)) | 0),
              (i = (i + Math.imul(M, W)) | 0),
              (r = (r + Math.imul(w, Y)) | 0),
              (o = ((o = (o + Math.imul(w, K)) | 0) + Math.imul(b, Y)) | 0),
              (i = (i + Math.imul(b, K)) | 0),
              (r = (r + Math.imul(g, Q)) | 0),
              (o = ((o = (o + Math.imul(g, Z)) | 0) + Math.imul(y, Q)) | 0),
              (i = (i + Math.imul(y, Z)) | 0),
              (r = (r + Math.imul(p, X)) | 0),
              (o = ((o = (o + Math.imul(p, tt)) | 0) + Math.imul(v, X)) | 0),
              (i = (i + Math.imul(v, tt)) | 0);
            var bt =
              (((c + (r = (r + Math.imul(h, nt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, rt)) | 0) + Math.imul(f, nt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, rt)) | 0) + (o >>> 13)) | 0) +
                (bt >>> 26)) |
              0),
              (bt &= 67108863),
              (r = Math.imul(j, D)),
              (o = ((o = Math.imul(j, H)) + Math.imul(R, D)) | 0),
              (i = Math.imul(R, H)),
              (r = (r + Math.imul(O, z)) | 0),
              (o = ((o = (o + Math.imul(O, W)) | 0) + Math.imul(S, z)) | 0),
              (i = (i + Math.imul(S, W)) | 0),
              (r = (r + Math.imul(k, Y)) | 0),
              (o = ((o = (o + Math.imul(k, K)) | 0) + Math.imul(M, Y)) | 0),
              (i = (i + Math.imul(M, K)) | 0),
              (r = (r + Math.imul(w, Q)) | 0),
              (o = ((o = (o + Math.imul(w, Z)) | 0) + Math.imul(b, Q)) | 0),
              (i = (i + Math.imul(b, Z)) | 0),
              (r = (r + Math.imul(g, X)) | 0),
              (o = ((o = (o + Math.imul(g, tt)) | 0) + Math.imul(y, X)) | 0),
              (i = (i + Math.imul(y, tt)) | 0),
              (r = (r + Math.imul(p, nt)) | 0),
              (o = ((o = (o + Math.imul(p, rt)) | 0) + Math.imul(v, nt)) | 0),
              (i = (i + Math.imul(v, rt)) | 0);
            var xt =
              (((c + (r = (r + Math.imul(h, it)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, at)) | 0) + Math.imul(f, it)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, at)) | 0) + (o >>> 13)) | 0) +
                (xt >>> 26)) |
              0),
              (xt &= 67108863),
              (r = Math.imul(T, D)),
              (o = ((o = Math.imul(T, H)) + Math.imul(I, D)) | 0),
              (i = Math.imul(I, H)),
              (r = (r + Math.imul(j, z)) | 0),
              (o = ((o = (o + Math.imul(j, W)) | 0) + Math.imul(R, z)) | 0),
              (i = (i + Math.imul(R, W)) | 0),
              (r = (r + Math.imul(O, Y)) | 0),
              (o = ((o = (o + Math.imul(O, K)) | 0) + Math.imul(S, Y)) | 0),
              (i = (i + Math.imul(S, K)) | 0),
              (r = (r + Math.imul(k, Q)) | 0),
              (o = ((o = (o + Math.imul(k, Z)) | 0) + Math.imul(M, Q)) | 0),
              (i = (i + Math.imul(M, Z)) | 0),
              (r = (r + Math.imul(w, X)) | 0),
              (o = ((o = (o + Math.imul(w, tt)) | 0) + Math.imul(b, X)) | 0),
              (i = (i + Math.imul(b, tt)) | 0),
              (r = (r + Math.imul(g, nt)) | 0),
              (o = ((o = (o + Math.imul(g, rt)) | 0) + Math.imul(y, nt)) | 0),
              (i = (i + Math.imul(y, rt)) | 0),
              (r = (r + Math.imul(p, it)) | 0),
              (o = ((o = (o + Math.imul(p, at)) | 0) + Math.imul(v, it)) | 0),
              (i = (i + Math.imul(v, at)) | 0);
            var kt =
              (((c + (r = (r + Math.imul(h, ut)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, ct)) | 0) + Math.imul(f, ut)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, ct)) | 0) + (o >>> 13)) | 0) +
                (kt >>> 26)) |
              0),
              (kt &= 67108863),
              (r = Math.imul(N, D)),
              (o = ((o = Math.imul(N, H)) + Math.imul(P, D)) | 0),
              (i = Math.imul(P, H)),
              (r = (r + Math.imul(T, z)) | 0),
              (o = ((o = (o + Math.imul(T, W)) | 0) + Math.imul(I, z)) | 0),
              (i = (i + Math.imul(I, W)) | 0),
              (r = (r + Math.imul(j, Y)) | 0),
              (o = ((o = (o + Math.imul(j, K)) | 0) + Math.imul(R, Y)) | 0),
              (i = (i + Math.imul(R, K)) | 0),
              (r = (r + Math.imul(O, Q)) | 0),
              (o = ((o = (o + Math.imul(O, Z)) | 0) + Math.imul(S, Q)) | 0),
              (i = (i + Math.imul(S, Z)) | 0),
              (r = (r + Math.imul(k, X)) | 0),
              (o = ((o = (o + Math.imul(k, tt)) | 0) + Math.imul(M, X)) | 0),
              (i = (i + Math.imul(M, tt)) | 0),
              (r = (r + Math.imul(w, nt)) | 0),
              (o = ((o = (o + Math.imul(w, rt)) | 0) + Math.imul(b, nt)) | 0),
              (i = (i + Math.imul(b, rt)) | 0),
              (r = (r + Math.imul(g, it)) | 0),
              (o = ((o = (o + Math.imul(g, at)) | 0) + Math.imul(y, it)) | 0),
              (i = (i + Math.imul(y, at)) | 0),
              (r = (r + Math.imul(p, ut)) | 0),
              (o = ((o = (o + Math.imul(p, ct)) | 0) + Math.imul(v, ut)) | 0),
              (i = (i + Math.imul(v, ct)) | 0);
            var Mt =
              (((c + (r = (r + Math.imul(h, ht)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, ft)) | 0) + Math.imul(f, ht)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, ft)) | 0) + (o >>> 13)) | 0) +
                (Mt >>> 26)) |
              0),
              (Mt &= 67108863),
              (r = Math.imul(q, D)),
              (o = ((o = Math.imul(q, H)) + Math.imul(U, D)) | 0),
              (i = Math.imul(U, H)),
              (r = (r + Math.imul(N, z)) | 0),
              (o = ((o = (o + Math.imul(N, W)) | 0) + Math.imul(P, z)) | 0),
              (i = (i + Math.imul(P, W)) | 0),
              (r = (r + Math.imul(T, Y)) | 0),
              (o = ((o = (o + Math.imul(T, K)) | 0) + Math.imul(I, Y)) | 0),
              (i = (i + Math.imul(I, K)) | 0),
              (r = (r + Math.imul(j, Q)) | 0),
              (o = ((o = (o + Math.imul(j, Z)) | 0) + Math.imul(R, Q)) | 0),
              (i = (i + Math.imul(R, Z)) | 0),
              (r = (r + Math.imul(O, X)) | 0),
              (o = ((o = (o + Math.imul(O, tt)) | 0) + Math.imul(S, X)) | 0),
              (i = (i + Math.imul(S, tt)) | 0),
              (r = (r + Math.imul(k, nt)) | 0),
              (o = ((o = (o + Math.imul(k, rt)) | 0) + Math.imul(M, nt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (r = (r + Math.imul(w, it)) | 0),
              (o = ((o = (o + Math.imul(w, at)) | 0) + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(b, at)) | 0),
              (r = (r + Math.imul(g, ut)) | 0),
              (o = ((o = (o + Math.imul(g, ct)) | 0) + Math.imul(y, ut)) | 0),
              (i = (i + Math.imul(y, ct)) | 0),
              (r = (r + Math.imul(p, ht)) | 0),
              (o = ((o = (o + Math.imul(p, ft)) | 0) + Math.imul(v, ht)) | 0),
              (i = (i + Math.imul(v, ft)) | 0);
            var Et =
              (((c + (r = (r + Math.imul(h, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(h, vt)) | 0) + Math.imul(f, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(f, vt)) | 0) + (o >>> 13)) | 0) +
                (Et >>> 26)) |
              0),
              (Et &= 67108863),
              (r = Math.imul(q, z)),
              (o = ((o = Math.imul(q, W)) + Math.imul(U, z)) | 0),
              (i = Math.imul(U, W)),
              (r = (r + Math.imul(N, Y)) | 0),
              (o = ((o = (o + Math.imul(N, K)) | 0) + Math.imul(P, Y)) | 0),
              (i = (i + Math.imul(P, K)) | 0),
              (r = (r + Math.imul(T, Q)) | 0),
              (o = ((o = (o + Math.imul(T, Z)) | 0) + Math.imul(I, Q)) | 0),
              (i = (i + Math.imul(I, Z)) | 0),
              (r = (r + Math.imul(j, X)) | 0),
              (o = ((o = (o + Math.imul(j, tt)) | 0) + Math.imul(R, X)) | 0),
              (i = (i + Math.imul(R, tt)) | 0),
              (r = (r + Math.imul(O, nt)) | 0),
              (o = ((o = (o + Math.imul(O, rt)) | 0) + Math.imul(S, nt)) | 0),
              (i = (i + Math.imul(S, rt)) | 0),
              (r = (r + Math.imul(k, it)) | 0),
              (o = ((o = (o + Math.imul(k, at)) | 0) + Math.imul(M, it)) | 0),
              (i = (i + Math.imul(M, at)) | 0),
              (r = (r + Math.imul(w, ut)) | 0),
              (o = ((o = (o + Math.imul(w, ct)) | 0) + Math.imul(b, ut)) | 0),
              (i = (i + Math.imul(b, ct)) | 0),
              (r = (r + Math.imul(g, ht)) | 0),
              (o = ((o = (o + Math.imul(g, ft)) | 0) + Math.imul(y, ht)) | 0),
              (i = (i + Math.imul(y, ft)) | 0);
            var Ot =
              (((c + (r = (r + Math.imul(p, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(p, vt)) | 0) + Math.imul(v, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(v, vt)) | 0) + (o >>> 13)) | 0) +
                (Ot >>> 26)) |
              0),
              (Ot &= 67108863),
              (r = Math.imul(q, Y)),
              (o = ((o = Math.imul(q, K)) + Math.imul(U, Y)) | 0),
              (i = Math.imul(U, K)),
              (r = (r + Math.imul(N, Q)) | 0),
              (o = ((o = (o + Math.imul(N, Z)) | 0) + Math.imul(P, Q)) | 0),
              (i = (i + Math.imul(P, Z)) | 0),
              (r = (r + Math.imul(T, X)) | 0),
              (o = ((o = (o + Math.imul(T, tt)) | 0) + Math.imul(I, X)) | 0),
              (i = (i + Math.imul(I, tt)) | 0),
              (r = (r + Math.imul(j, nt)) | 0),
              (o = ((o = (o + Math.imul(j, rt)) | 0) + Math.imul(R, nt)) | 0),
              (i = (i + Math.imul(R, rt)) | 0),
              (r = (r + Math.imul(O, it)) | 0),
              (o = ((o = (o + Math.imul(O, at)) | 0) + Math.imul(S, it)) | 0),
              (i = (i + Math.imul(S, at)) | 0),
              (r = (r + Math.imul(k, ut)) | 0),
              (o = ((o = (o + Math.imul(k, ct)) | 0) + Math.imul(M, ut)) | 0),
              (i = (i + Math.imul(M, ct)) | 0),
              (r = (r + Math.imul(w, ht)) | 0),
              (o = ((o = (o + Math.imul(w, ft)) | 0) + Math.imul(b, ht)) | 0),
              (i = (i + Math.imul(b, ft)) | 0);
            var St =
              (((c + (r = (r + Math.imul(g, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(g, vt)) | 0) + Math.imul(y, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(y, vt)) | 0) + (o >>> 13)) | 0) +
                (St >>> 26)) |
              0),
              (St &= 67108863),
              (r = Math.imul(q, Q)),
              (o = ((o = Math.imul(q, Z)) + Math.imul(U, Q)) | 0),
              (i = Math.imul(U, Z)),
              (r = (r + Math.imul(N, X)) | 0),
              (o = ((o = (o + Math.imul(N, tt)) | 0) + Math.imul(P, X)) | 0),
              (i = (i + Math.imul(P, tt)) | 0),
              (r = (r + Math.imul(T, nt)) | 0),
              (o = ((o = (o + Math.imul(T, rt)) | 0) + Math.imul(I, nt)) | 0),
              (i = (i + Math.imul(I, rt)) | 0),
              (r = (r + Math.imul(j, it)) | 0),
              (o = ((o = (o + Math.imul(j, at)) | 0) + Math.imul(R, it)) | 0),
              (i = (i + Math.imul(R, at)) | 0),
              (r = (r + Math.imul(O, ut)) | 0),
              (o = ((o = (o + Math.imul(O, ct)) | 0) + Math.imul(S, ut)) | 0),
              (i = (i + Math.imul(S, ct)) | 0),
              (r = (r + Math.imul(k, ht)) | 0),
              (o = ((o = (o + Math.imul(k, ft)) | 0) + Math.imul(M, ht)) | 0),
              (i = (i + Math.imul(M, ft)) | 0);
            var Lt =
              (((c + (r = (r + Math.imul(w, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(w, vt)) | 0) + Math.imul(b, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(b, vt)) | 0) + (o >>> 13)) | 0) +
                (Lt >>> 26)) |
              0),
              (Lt &= 67108863),
              (r = Math.imul(q, X)),
              (o = ((o = Math.imul(q, tt)) + Math.imul(U, X)) | 0),
              (i = Math.imul(U, tt)),
              (r = (r + Math.imul(N, nt)) | 0),
              (o = ((o = (o + Math.imul(N, rt)) | 0) + Math.imul(P, nt)) | 0),
              (i = (i + Math.imul(P, rt)) | 0),
              (r = (r + Math.imul(T, it)) | 0),
              (o = ((o = (o + Math.imul(T, at)) | 0) + Math.imul(I, it)) | 0),
              (i = (i + Math.imul(I, at)) | 0),
              (r = (r + Math.imul(j, ut)) | 0),
              (o = ((o = (o + Math.imul(j, ct)) | 0) + Math.imul(R, ut)) | 0),
              (i = (i + Math.imul(R, ct)) | 0),
              (r = (r + Math.imul(O, ht)) | 0),
              (o = ((o = (o + Math.imul(O, ft)) | 0) + Math.imul(S, ht)) | 0),
              (i = (i + Math.imul(S, ft)) | 0);
            var jt =
              (((c + (r = (r + Math.imul(k, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(k, vt)) | 0) + Math.imul(M, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(M, vt)) | 0) + (o >>> 13)) | 0) +
                (jt >>> 26)) |
              0),
              (jt &= 67108863),
              (r = Math.imul(q, nt)),
              (o = ((o = Math.imul(q, rt)) + Math.imul(U, nt)) | 0),
              (i = Math.imul(U, rt)),
              (r = (r + Math.imul(N, it)) | 0),
              (o = ((o = (o + Math.imul(N, at)) | 0) + Math.imul(P, it)) | 0),
              (i = (i + Math.imul(P, at)) | 0),
              (r = (r + Math.imul(T, ut)) | 0),
              (o = ((o = (o + Math.imul(T, ct)) | 0) + Math.imul(I, ut)) | 0),
              (i = (i + Math.imul(I, ct)) | 0),
              (r = (r + Math.imul(j, ht)) | 0),
              (o = ((o = (o + Math.imul(j, ft)) | 0) + Math.imul(R, ht)) | 0),
              (i = (i + Math.imul(R, ft)) | 0);
            var Rt =
              (((c + (r = (r + Math.imul(O, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(O, vt)) | 0) + Math.imul(S, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(S, vt)) | 0) + (o >>> 13)) | 0) +
                (Rt >>> 26)) |
              0),
              (Rt &= 67108863),
              (r = Math.imul(q, it)),
              (o = ((o = Math.imul(q, at)) + Math.imul(U, it)) | 0),
              (i = Math.imul(U, at)),
              (r = (r + Math.imul(N, ut)) | 0),
              (o = ((o = (o + Math.imul(N, ct)) | 0) + Math.imul(P, ut)) | 0),
              (i = (i + Math.imul(P, ct)) | 0),
              (r = (r + Math.imul(T, ht)) | 0),
              (o = ((o = (o + Math.imul(T, ft)) | 0) + Math.imul(I, ht)) | 0),
              (i = (i + Math.imul(I, ft)) | 0);
            var Ct =
              (((c + (r = (r + Math.imul(j, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(j, vt)) | 0) + Math.imul(R, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(R, vt)) | 0) + (o >>> 13)) | 0) +
                (Ct >>> 26)) |
              0),
              (Ct &= 67108863),
              (r = Math.imul(q, ut)),
              (o = ((o = Math.imul(q, ct)) + Math.imul(U, ut)) | 0),
              (i = Math.imul(U, ct)),
              (r = (r + Math.imul(N, ht)) | 0),
              (o = ((o = (o + Math.imul(N, ft)) | 0) + Math.imul(P, ht)) | 0),
              (i = (i + Math.imul(P, ft)) | 0);
            var Tt =
              (((c + (r = (r + Math.imul(T, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(T, vt)) | 0) + Math.imul(I, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(I, vt)) | 0) + (o >>> 13)) | 0) +
                (Tt >>> 26)) |
              0),
              (Tt &= 67108863),
              (r = Math.imul(q, ht)),
              (o = ((o = Math.imul(q, ft)) + Math.imul(U, ht)) | 0),
              (i = Math.imul(U, ft));
            var It =
              (((c + (r = (r + Math.imul(N, pt)) | 0)) | 0) +
                ((8191 &
                  (o =
                    ((o = (o + Math.imul(N, vt)) | 0) + Math.imul(P, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((i = (i + Math.imul(P, vt)) | 0) + (o >>> 13)) | 0) +
                (It >>> 26)) |
              0),
              (It &= 67108863);
            var At =
              (((c + (r = Math.imul(q, pt))) | 0) +
                ((8191 &
                  (o = ((o = Math.imul(q, vt)) + Math.imul(U, pt)) | 0)) <<
                  13)) |
              0;
            return (
              (c =
                ((((i = Math.imul(U, vt)) + (o >>> 13)) | 0) + (At >>> 26)) |
                0),
              (At &= 67108863),
              (u[0] = mt),
              (u[1] = gt),
              (u[2] = yt),
              (u[3] = _t),
              (u[4] = wt),
              (u[5] = bt),
              (u[6] = xt),
              (u[7] = kt),
              (u[8] = Mt),
              (u[9] = Et),
              (u[10] = Ot),
              (u[11] = St),
              (u[12] = Lt),
              (u[13] = jt),
              (u[14] = Rt),
              (u[15] = Ct),
              (u[16] = Tt),
              (u[17] = It),
              (u[18] = At),
              0 !== c && ((u[19] = c), n.length++),
              n
            );
          };
          function p(t, e, n) {
            return new v().mulp(t, e, n);
          }
          function v(t, e) {
            (this.x = t), (this.y = e);
          }
          Math.imul || (d = f),
            (i.prototype.mulTo = function (t, e) {
              var n = this.length + t.length;
              return 10 === this.length && 10 === t.length
                ? d(this, t, e)
                : n < 63
                ? f(this, t, e)
                : n < 1024
                ? (function (t, e, n) {
                    (n.negative = e.negative ^ t.negative),
                      (n.length = t.length + e.length);
                    for (var r = 0, o = 0, i = 0; i < n.length - 1; i++) {
                      var a = o;
                      o = 0;
                      for (
                        var s = 67108863 & r,
                          u = Math.min(i, e.length - 1),
                          c = Math.max(0, i - t.length + 1);
                        c <= u;
                        c++
                      ) {
                        var l = i - c,
                          h = (0 | t.words[l]) * (0 | e.words[c]),
                          f = 67108863 & h;
                        (s = 67108863 & (f = (f + s) | 0)),
                          (o +=
                            (a =
                              ((a = (a + ((h / 67108864) | 0)) | 0) +
                                (f >>> 26)) |
                              0) >>> 26),
                          (a &= 67108863);
                      }
                      (n.words[i] = s), (r = a), (a = o);
                    }
                    return 0 !== r ? (n.words[i] = r) : n.length--, n.strip();
                  })(this, t, e)
                : p(this, t, e);
            }),
            (v.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), n = i.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, n, t);
              return e;
            }),
            (v.prototype.revBin = function (t, e, n) {
              if (0 === t || t === n - 1) return t;
              for (var r = 0, o = 0; o < e; o++)
                (r |= (1 & t) << (e - o - 1)), (t >>= 1);
              return r;
            }),
            (v.prototype.permute = function (t, e, n, r, o, i) {
              for (var a = 0; a < i; a++) (r[a] = e[t[a]]), (o[a] = n[t[a]]);
            }),
            (v.prototype.transform = function (t, e, n, r, o, i) {
              this.permute(i, t, e, n, r, o);
              for (var a = 1; a < o; a <<= 1)
                for (
                  var s = a << 1,
                    u = Math.cos((2 * Math.PI) / s),
                    c = Math.sin((2 * Math.PI) / s),
                    l = 0;
                  l < o;
                  l += s
                )
                  for (var h = u, f = c, d = 0; d < a; d++) {
                    var p = n[l + d],
                      v = r[l + d],
                      m = n[l + d + a],
                      g = r[l + d + a],
                      y = h * m - f * g;
                    (g = h * g + f * m),
                      (m = y),
                      (n[l + d] = p + m),
                      (r[l + d] = v + g),
                      (n[l + d + a] = p - m),
                      (r[l + d + a] = v - g),
                      d !== s &&
                        ((y = u * h - c * f), (f = u * f + c * h), (h = y));
                  }
            }),
            (v.prototype.guessLen13b = function (t, e) {
              var n = 1 | Math.max(e, t),
                r = 1 & n,
                o = 0;
              for (n = (n / 2) | 0; n; n >>>= 1) o++;
              return 1 << (o + 1 + r);
            }),
            (v.prototype.conjugate = function (t, e, n) {
              if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                  var o = t[r];
                  (t[r] = t[n - r - 1]),
                    (t[n - r - 1] = o),
                    (o = e[r]),
                    (e[r] = -e[n - r - 1]),
                    (e[n - r - 1] = -o);
                }
            }),
            (v.prototype.normalize13b = function (t, e) {
              for (var n = 0, r = 0; r < e / 2; r++) {
                var o =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  n;
                (t[r] = 67108863 & o),
                  (n = o < 67108864 ? 0 : (o / 67108864) | 0);
              }
              return t;
            }),
            (v.prototype.convert13b = function (t, e, n, o) {
              for (var i = 0, a = 0; a < e; a++)
                (i += 0 | t[a]),
                  (n[2 * a] = 8191 & i),
                  (i >>>= 13),
                  (n[2 * a + 1] = 8191 & i),
                  (i >>>= 13);
              for (a = 2 * e; a < o; ++a) n[a] = 0;
              r(0 === i), r(0 === (-8192 & i));
            }),
            (v.prototype.stub = function (t) {
              for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
              return e;
            }),
            (v.prototype.mulp = function (t, e, n) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                o = this.makeRBT(r),
                i = this.stub(r),
                a = new Array(r),
                s = new Array(r),
                u = new Array(r),
                c = new Array(r),
                l = new Array(r),
                h = new Array(r),
                f = n.words;
              (f.length = r),
                this.convert13b(t.words, t.length, a, r),
                this.convert13b(e.words, e.length, c, r),
                this.transform(a, i, s, u, r, o),
                this.transform(c, i, l, h, r, o);
              for (var d = 0; d < r; d++) {
                var p = s[d] * l[d] - u[d] * h[d];
                (u[d] = s[d] * h[d] + u[d] * l[d]), (s[d] = p);
              }
              return (
                this.conjugate(s, u, r),
                this.transform(s, u, f, i, r, o),
                this.conjugate(f, i, r),
                this.normalize13b(f, r),
                (n.negative = t.negative ^ e.negative),
                (n.length = t.length + e.length),
                n.strip()
              );
            }),
            (i.prototype.mul = function (t) {
              var e = new i(null);
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              );
            }),
            (i.prototype.mulf = function (t) {
              var e = new i(null);
              return (
                (e.words = new Array(this.length + t.length)), p(this, t, e)
              );
            }),
            (i.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (i.prototype.imuln = function (t) {
              r("number" === typeof t), r(t < 67108864);
              for (var e = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  i = (67108863 & o) + (67108863 & e);
                (e >>= 26),
                  (e += (o / 67108864) | 0),
                  (e += i >>> 26),
                  (this.words[n] = 67108863 & i);
              }
              return 0 !== e && ((this.words[n] = e), this.length++), this;
            }),
            (i.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (i.prototype.sqr = function () {
              return this.mul(this);
            }),
            (i.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (i.prototype.pow = function (t) {
              var e = (function (t) {
                for (
                  var e = new Array(t.bitLength()), n = 0;
                  n < e.length;
                  n++
                ) {
                  var r = (n / 26) | 0,
                    o = n % 26;
                  e[n] = (t.words[r] & (1 << o)) >>> o;
                }
                return e;
              })(t);
              if (0 === e.length) return new i(1);
              for (
                var n = this, r = 0;
                r < e.length && 0 === e[r];
                r++, n = n.sqr()
              );
              if (++r < e.length)
                for (var o = n.sqr(); r < e.length; r++, o = o.sqr())
                  0 !== e[r] && (n = n.mul(o));
              return n;
            }),
            (i.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                n = t % 26,
                o = (t - n) / 26,
                i = (67108863 >>> (26 - n)) << (26 - n);
              if (0 !== n) {
                var a = 0;
                for (e = 0; e < this.length; e++) {
                  var s = this.words[e] & i,
                    u = ((0 | this.words[e]) - s) << n;
                  (this.words[e] = u | a), (a = s >>> (26 - n));
                }
                a && ((this.words[e] = a), this.length++);
              }
              if (0 !== o) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + o] = this.words[e];
                for (e = 0; e < o; e++) this.words[e] = 0;
                this.length += o;
              }
              return this.strip();
            }),
            (i.prototype.ishln = function (t) {
              return r(0 === this.negative), this.iushln(t);
            }),
            (i.prototype.iushrn = function (t, e, n) {
              var o;
              r("number" === typeof t && t >= 0),
                (o = e ? (e - (e % 26)) / 26 : 0);
              var i = t % 26,
                a = Math.min((t - i) / 26, this.length),
                s = 67108863 ^ ((67108863 >>> i) << i),
                u = n;
              if (((o -= a), (o = Math.max(0, o)), u)) {
                for (var c = 0; c < a; c++) u.words[c] = this.words[c];
                u.length = a;
              }
              if (0 === a);
              else if (this.length > a)
                for (this.length -= a, c = 0; c < this.length; c++)
                  this.words[c] = this.words[c + a];
              else (this.words[0] = 0), (this.length = 1);
              var l = 0;
              for (c = this.length - 1; c >= 0 && (0 !== l || c >= o); c--) {
                var h = 0 | this.words[c];
                (this.words[c] = (l << (26 - i)) | (h >>> i)), (l = h & s);
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              );
            }),
            (i.prototype.ishrn = function (t, e, n) {
              return r(0 === this.negative), this.iushrn(t, e, n);
            }),
            (i.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (i.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (i.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (i.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (i.prototype.testn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26,
                o = 1 << e;
              return !(this.length <= n) && !!(this.words[n] & o);
            }),
            (i.prototype.imaskn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  "imaskn works only with positive numbers"
                ),
                this.length <= n)
              )
                return this;
              if (
                (0 !== e && n++,
                (this.length = Math.min(n, this.length)),
                0 !== e)
              ) {
                var o = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= o;
              }
              return this.strip();
            }),
            (i.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (i.prototype.iaddn = function (t) {
              return (
                r("number" === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) < t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
              );
            }),
            (i.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++;
              return (this.length = Math.max(this.length, e + 1)), this;
            }),
            (i.prototype.isubn = function (t) {
              if ((r("number" === typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1);
              return this.strip();
            }),
            (i.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (i.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (i.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (i.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (i.prototype._ishlnsubmul = function (t, e, n) {
              var o,
                i,
                a = t.length + n;
              this._expand(a);
              var s = 0;
              for (o = 0; o < t.length; o++) {
                i = (0 | this.words[o + n]) + s;
                var u = (0 | t.words[o]) * e;
                (s = ((i -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                  (this.words[o + n] = 67108863 & i);
              }
              for (; o < this.length - n; o++)
                (s = (i = (0 | this.words[o + n]) + s) >> 26),
                  (this.words[o + n] = 67108863 & i);
              if (0 === s) return this.strip();
              for (r(-1 === s), s = 0, o = 0; o < this.length; o++)
                (s = (i = -(0 | this.words[o]) + s) >> 26),
                  (this.words[o] = 67108863 & i);
              return (this.negative = 1), this.strip();
            }),
            (i.prototype._wordDiv = function (t, e) {
              var n = (this.length, t.length),
                r = this.clone(),
                o = t,
                a = 0 | o.words[o.length - 1];
              0 !== (n = 26 - this._countBits(a)) &&
                ((o = o.ushln(n)),
                r.iushln(n),
                (a = 0 | o.words[o.length - 1]));
              var s,
                u = r.length - o.length;
              if ("mod" !== e) {
                ((s = new i(null)).length = u + 1),
                  (s.words = new Array(s.length));
                for (var c = 0; c < s.length; c++) s.words[c] = 0;
              }
              var l = r.clone()._ishlnsubmul(o, 1, u);
              0 === l.negative && ((r = l), s && (s.words[u] = 1));
              for (var h = u - 1; h >= 0; h--) {
                var f =
                  67108864 * (0 | r.words[o.length + h]) +
                  (0 | r.words[o.length + h - 1]);
                for (
                  f = Math.min((f / a) | 0, 67108863), r._ishlnsubmul(o, f, h);
                  0 !== r.negative;

                )
                  f--,
                    (r.negative = 0),
                    r._ishlnsubmul(o, 1, h),
                    r.isZero() || (r.negative ^= 1);
                s && (s.words[h] = f);
              }
              return (
                s && s.strip(),
                r.strip(),
                "div" !== e && 0 !== n && r.iushrn(n),
                { div: s || null, mod: r }
              );
            }),
            (i.prototype.divmod = function (t, e, n) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new i(0), mod: new i(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((s = this.neg().divmod(t, e)),
                    "mod" !== e && (o = s.div.neg()),
                    "div" !== e &&
                      ((a = s.mod.neg()), n && 0 !== a.negative && a.iadd(t)),
                    { div: o, mod: a })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((s = this.divmod(t.neg(), e)),
                    "mod" !== e && (o = s.div.neg()),
                    { div: o, mod: s.mod })
                  : 0 !== (this.negative & t.negative)
                  ? ((s = this.neg().divmod(t.neg(), e)),
                    "div" !== e &&
                      ((a = s.mod.neg()), n && 0 !== a.negative && a.isub(t)),
                    { div: s.div, mod: a })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new i(0), mod: this }
                  : 1 === t.length
                  ? "div" === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : "mod" === e
                    ? { div: null, mod: new i(this.modn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new i(this.modn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              );
              var o, a, s;
            }),
            (i.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (i.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (i.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (i.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                o = t.andln(1),
                i = n.cmp(r);
              return i < 0 || (1 === o && 0 === i)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
            }),
            (i.prototype.modn = function (t) {
              r(t <= 67108863);
              for (
                var e = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (e * n + (0 | this.words[o])) % t;
              return n;
            }),
            (i.prototype.idivn = function (t) {
              r(t <= 67108863);
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * e;
                (this.words[n] = (o / t) | 0), (e = o % t);
              }
              return this.strip();
            }),
            (i.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (i.prototype.egcd = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var o = new i(1),
                  a = new i(0),
                  s = new i(0),
                  u = new i(1),
                  c = 0;
                e.isEven() && n.isEven();

              )
                e.iushrn(1), n.iushrn(1), ++c;
              for (var l = n.clone(), h = e.clone(); !e.isZero(); ) {
                for (
                  var f = 0, d = 1;
                  0 === (e.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (f > 0)
                  for (e.iushrn(f); f-- > 0; )
                    (o.isOdd() || a.isOdd()) && (o.iadd(l), a.isub(h)),
                      o.iushrn(1),
                      a.iushrn(1);
                for (
                  var p = 0, v = 1;
                  0 === (n.words[0] & v) && p < 26;
                  ++p, v <<= 1
                );
                if (p > 0)
                  for (n.iushrn(p); p-- > 0; )
                    (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(h)),
                      s.iushrn(1),
                      u.iushrn(1);
                e.cmp(n) >= 0
                  ? (e.isub(n), o.isub(s), a.isub(u))
                  : (n.isub(e), s.isub(o), u.isub(a));
              }
              return { a: s, b: u, gcd: n.iushln(c) };
            }),
            (i.prototype._invmp = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var o, a = new i(1), s = new i(0), u = n.clone();
                e.cmpn(1) > 0 && n.cmpn(1) > 0;

              ) {
                for (
                  var c = 0, l = 1;
                  0 === (e.words[0] & l) && c < 26;
                  ++c, l <<= 1
                );
                if (c > 0)
                  for (e.iushrn(c); c-- > 0; )
                    a.isOdd() && a.iadd(u), a.iushrn(1);
                for (
                  var h = 0, f = 1;
                  0 === (n.words[0] & f) && h < 26;
                  ++h, f <<= 1
                );
                if (h > 0)
                  for (n.iushrn(h); h-- > 0; )
                    s.isOdd() && s.iadd(u), s.iushrn(1);
                e.cmp(n) >= 0 ? (e.isub(n), a.isub(s)) : (n.isub(e), s.isub(a));
              }
              return (o = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && o.iadd(t), o;
            }),
            (i.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                n = t.clone();
              (e.negative = 0), (n.negative = 0);
              for (var r = 0; e.isEven() && n.isEven(); r++)
                e.iushrn(1), n.iushrn(1);
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1);
                for (; n.isEven(); ) n.iushrn(1);
                var o = e.cmp(n);
                if (o < 0) {
                  var i = e;
                  (e = n), (n = i);
                } else if (0 === o || 0 === n.cmpn(1)) break;
                e.isub(n);
              }
              return n.iushln(r);
            }),
            (i.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (i.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (i.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (i.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (i.prototype.bincn = function (t) {
              r("number" === typeof t);
              var e = t % 26,
                n = (t - e) / 26,
                o = 1 << e;
              if (this.length <= n)
                return this._expand(n + 1), (this.words[n] |= o), this;
              for (var i = o, a = n; 0 !== i && a < this.length; a++) {
                var s = 0 | this.words[a];
                (i = (s += i) >>> 26), (s &= 67108863), (this.words[a] = s);
              }
              return 0 !== i && ((this.words[a] = i), this.length++), this;
            }),
            (i.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (i.prototype.cmpn = function (t) {
              var e,
                n = t < 0;
              if (0 !== this.negative && !n) return -1;
              if (0 === this.negative && n) return 1;
              if ((this.strip(), this.length > 1)) e = 1;
              else {
                n && (t = -t), r(t <= 67108863, "Number is too big");
                var o = 0 | this.words[0];
                e = o === t ? 0 : o < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (i.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (i.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                  o = 0 | t.words[n];
                if (r !== o) {
                  r < o ? (e = -1) : r > o && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (i.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (i.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (i.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (i.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (i.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (i.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (i.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (i.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (i.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (i.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (i.red = function (t) {
              return new x(t);
            }),
            (i.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (i.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (i.prototype._forceRed = function (t) {
              return (this.red = t), this;
            }),
            (i.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (i.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (i.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (i.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (i.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (i.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (i.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (i.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (i.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (i.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (i.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (i.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (i.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (i.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            });
          var m = { k256: null, p224: null, p192: null, p25519: null };
          function g(t, e) {
            (this.name = t),
              (this.p = new i(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new i(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function y() {
            g.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          function _() {
            g.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          function w() {
            g.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          function b() {
            g.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          function x(t) {
            if ("string" === typeof t) {
              var e = i._prime(t);
              (this.m = e.p), (this.prime = e);
            } else
              r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null);
          }
          function k(t) {
            x.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new i(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (g.prototype._tmp = function () {
            var t = new i(null);
            return (t.words = new Array(Math.ceil(this.n / 13))), t;
          }),
            (g.prototype.ireduce = function (t) {
              var e,
                n = t;
              do {
                this.split(n, this.tmp),
                  (e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength());
              } while (e > this.n);
              var r = e < this.n ? -1 : n.ucmp(this.p);
              return (
                0 === r
                  ? ((n.words[0] = 0), (n.length = 1))
                  : r > 0
                  ? n.isub(this.p)
                  : n.strip(),
                n
              );
            }),
            (g.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (g.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            o(y, g),
            (y.prototype.split = function (t, e) {
              for (var n = Math.min(t.length, 9), r = 0; r < n; r++)
                e.words[r] = t.words[r];
              if (((e.length = n), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1);
              var o = t.words[9];
              for (
                e.words[e.length++] = 4194303 & o, r = 10;
                r < t.length;
                r++
              ) {
                var i = 0 | t.words[r];
                (t.words[r - 10] = ((4194303 & i) << 4) | (o >>> 22)), (o = i);
              }
              (o >>>= 22),
                (t.words[r - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
            }),
            (y.prototype.imulK = function (t) {
              (t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2);
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 0 | t.words[n];
                (e += 977 * r),
                  (t.words[n] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            o(_, g),
            o(w, g),
            o(b, g),
            (b.prototype.imulK = function (t) {
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 19 * (0 | t.words[n]) + e,
                  o = 67108863 & r;
                (r >>>= 26), (t.words[n] = o), (e = r);
              }
              return 0 !== e && (t.words[t.length++] = e), t;
            }),
            (i._prime = function (t) {
              if (m[t]) return m[t];
              var e;
              if ("k256" === t) e = new y();
              else if ("p224" === t) e = new _();
              else if ("p192" === t) e = new w();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new b();
              }
              return (m[t] = e), e;
            }),
            (x.prototype._verify1 = function (t) {
              r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers");
            }),
            (x.prototype._verify2 = function (t, e) {
              r(
                0 === (t.negative | e.negative),
                "red works only with positives"
              ),
                r(t.red && t.red === e.red, "red works only with red numbers");
            }),
            (x.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : t.umod(this.m)._forceRed(this);
            }),
            (x.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (x.prototype.add = function (t, e) {
              this._verify2(t, e);
              var n = t.add(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
            }),
            (x.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var n = t.iadd(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n;
            }),
            (x.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var n = t.sub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
            }),
            (x.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var n = t.isub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n;
            }),
            (x.prototype.shl = function (t, e) {
              return this._verify1(t), this.imod(t.ushln(e));
            }),
            (x.prototype.imul = function (t, e) {
              return this._verify2(t, e), this.imod(t.imul(e));
            }),
            (x.prototype.mul = function (t, e) {
              return this._verify2(t, e), this.imod(t.mul(e));
            }),
            (x.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (x.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (x.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var n = this.m.add(new i(1)).iushrn(2);
                return this.pow(t, n);
              }
              for (
                var o = this.m.subn(1), a = 0;
                !o.isZero() && 0 === o.andln(1);

              )
                a++, o.iushrn(1);
              r(!o.isZero());
              var s = new i(1).toRed(this),
                u = s.redNeg(),
                c = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              for (
                l = new i(2 * l * l).toRed(this);
                0 !== this.pow(l, c).cmp(u);

              )
                l.redIAdd(u);
              for (
                var h = this.pow(l, o),
                  f = this.pow(t, o.addn(1).iushrn(1)),
                  d = this.pow(t, o),
                  p = a;
                0 !== d.cmp(s);

              ) {
                for (var v = d, m = 0; 0 !== v.cmp(s); m++) v = v.redSqr();
                r(m < p);
                var g = this.pow(h, new i(1).iushln(p - m - 1));
                (f = f.redMul(g)), (h = g.redSqr()), (d = d.redMul(h)), (p = m);
              }
              return f;
            }),
            (x.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (x.prototype.pow = function (t, e) {
              if (e.isZero()) return new i(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var n = new Array(16);
              (n[0] = new i(1).toRed(this)), (n[1] = t);
              for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
              var o = n[0],
                a = 0,
                s = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), r = e.length - 1; r >= 0; r--) {
                for (var c = e.words[r], l = u - 1; l >= 0; l--) {
                  var h = (c >> l) & 1;
                  o !== n[0] && (o = this.sqr(o)),
                    0 !== h || 0 !== a
                      ? ((a <<= 1),
                        (a |= h),
                        (4 === ++s || (0 === r && 0 === l)) &&
                          ((o = this.mul(o, n[a])), (s = 0), (a = 0)))
                      : (s = 0);
                }
                u = 26;
              }
              return o;
            }),
            (x.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (x.prototype.convertFrom = function (t) {
              var e = t.clone();
              return (e.red = null), e;
            }),
            (i.mont = function (t) {
              return new k(t);
            }),
            o(k, x),
            (k.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (k.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return (e.red = null), e;
            }),
            (k.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return (t.words[0] = 0), (t.length = 1), t;
              var n = t.imul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                o = n.isub(r).iushrn(this.shift),
                i = o;
              return (
                o.cmp(this.m) >= 0
                  ? (i = o.isub(this.m))
                  : o.cmpn(0) < 0 && (i = o.iadd(this.m)),
                i._forceRed(this)
              );
            }),
            (k.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new i(0)._forceRed(this);
              var n = t.mul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                o = n.isub(r).iushrn(this.shift),
                a = o;
              return (
                o.cmp(this.m) >= 0
                  ? (a = o.isub(this.m))
                  : o.cmpn(0) < 0 && (a = o.iadd(this.m)),
                a._forceRed(this)
              );
            }),
            (k.prototype.invm = function (t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(t, this);
      }.call(this, n(45)(t)));
    },
    1975: function (t, e, n) {
      (function (e) {
        var r = n(1425).strict;
        t.exports = function (t) {
          if (r(t)) {
            var n = e.from(t.buffer);
            return (
              t.byteLength !== t.buffer.byteLength &&
                (n = n.slice(t.byteOffset, t.byteOffset + t.byteLength)),
              n
            );
          }
          return e.from(t);
        };
      }.call(this, n(8).Buffer));
    },
    1976: function (t, e, n) {
      "use strict";
      var r = n(70),
        o = n(94),
        i = n(456),
        a = n(1977),
        s = n(464),
        u = n(1978);
      function c(t) {
        if ("string" !== typeof t || 1 !== t.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function l(t, e) {
        return e.encode ? (e.strict ? a(t) : encodeURIComponent(t)) : t;
      }
      function h(t, e) {
        return e.decode ? s(t) : t;
      }
      function f(t) {
        var e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t;
      }
      function d(t) {
        var e = (t = f(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1);
      }
      function p(t, e) {
        return (
          e.parseNumbers &&
          !Number.isNaN(Number(t)) &&
          "string" === typeof t &&
          "" !== t.trim()
            ? (t = Number(t))
            : !e.parseBooleans ||
              null === t ||
              ("true" !== t.toLowerCase() && "false" !== t.toLowerCase()) ||
              (t = "true" === t.toLowerCase()),
          t
        );
      }
      function v(t, e) {
        c(
          (e = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            e
          )).arrayFormatSeparator
        );
        var n = (function (t) {
            var e;
            switch (t.arrayFormat) {
              case "index":
                return function (t, n, r) {
                  (e = /\[(\d*)\]$/.exec(t)),
                    (t = t.replace(/\[\d*\]$/, "")),
                    e
                      ? (void 0 === r[t] && (r[t] = {}), (r[t][e[1]] = n))
                      : (r[t] = n);
                };
              case "bracket":
                return function (t, n, r) {
                  (e = /(\[\])$/.exec(t)),
                    (t = t.replace(/\[\]$/, "")),
                    e
                      ? void 0 !== r[t]
                        ? (r[t] = [].concat(r[t], n))
                        : (r[t] = [n])
                      : (r[t] = n);
                };
              case "comma":
              case "separator":
                return function (e, n, r) {
                  var o =
                    "string" === typeof n &&
                    n.split("").indexOf(t.arrayFormatSeparator) > -1
                      ? n.split(t.arrayFormatSeparator).map(function (e) {
                          return h(e, t);
                        })
                      : null === n
                      ? n
                      : h(n, t);
                  r[e] = o;
                };
              default:
                return function (t, e, n) {
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], e)) : (n[t] = e);
                };
            }
          })(e),
          i = Object.create(null);
        if ("string" !== typeof t) return i;
        if (!(t = t.trim().replace(/^[?#&]/, ""))) return i;
        var a,
          s = o(t.split("&"));
        try {
          for (s.s(); !(a = s.n()).done; ) {
            var l = a.value,
              f = u(e.decode ? l.replace(/\+/g, " ") : l, "="),
              d = r(f, 2),
              v = d[0],
              m = d[1];
            (m =
              void 0 === m
                ? null
                : ["comma", "separator"].includes(e.arrayFormat)
                ? m
                : h(m, e)),
              n(h(v, e), m, i);
          }
        } catch (M) {
          s.e(M);
        } finally {
          s.f();
        }
        for (var g = 0, y = Object.keys(i); g < y.length; g++) {
          var _ = y[g],
            w = i[_];
          if ("object" === typeof w && null !== w)
            for (var b = 0, x = Object.keys(w); b < x.length; b++) {
              var k = x[b];
              w[k] = p(w[k], e);
            }
          else i[_] = p(w, e);
        }
        return !1 === e.sort
          ? i
          : (!0 === e.sort
              ? Object.keys(i).sort()
              : Object.keys(i).sort(e.sort)
            ).reduce(function (t, e) {
              var n = i[e];
              return (
                Boolean(n) && "object" === typeof n && !Array.isArray(n)
                  ? (t[e] = (function t(e) {
                      return Array.isArray(e)
                        ? e.sort()
                        : "object" === typeof e
                        ? t(Object.keys(e))
                            .sort(function (t, e) {
                              return Number(t) - Number(e);
                            })
                            .map(function (t) {
                              return e[t];
                            })
                        : e;
                    })(n))
                  : (t[e] = n),
                t
              );
            }, Object.create(null));
      }
      (e.extract = d),
        (e.parse = v),
        (e.stringify = function (t, e) {
          if (!t) return "";
          c(
            (e = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              e
            )).arrayFormatSeparator
          );
          for (
            var n = function (n) {
                return (
                  (e.skipNull && (null === (r = t[n]) || void 0 === r)) ||
                  (e.skipEmptyString && "" === t[n])
                );
                var r;
              },
              r = (function (t) {
                switch (t.arrayFormat) {
                  case "index":
                    return function (e) {
                      return function (n, r) {
                        var o = n.length;
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              i(n),
                              null === r
                                ? [[l(e, t), "[", o, "]"].join("")]
                                : [
                                    [l(e, t), "[", l(o, t), "]=", l(r, t)].join(
                                      ""
                                    ),
                                  ]
                            );
                      };
                    };
                  case "bracket":
                    return function (e) {
                      return function (n, r) {
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              i(n),
                              null === r
                                ? [[l(e, t), "[]"].join("")]
                                : [[l(e, t), "[]=", l(r, t)].join("")]
                            );
                      };
                    };
                  case "comma":
                  case "separator":
                    return function (e) {
                      return function (n, r) {
                        return null === r || void 0 === r || 0 === r.length
                          ? n
                          : 0 === n.length
                          ? [[l(e, t), "=", l(r, t)].join("")]
                          : [[n, l(r, t)].join(t.arrayFormatSeparator)];
                      };
                    };
                  default:
                    return function (e) {
                      return function (n, r) {
                        return void 0 === r ||
                          (t.skipNull && null === r) ||
                          (t.skipEmptyString && "" === r)
                          ? n
                          : [].concat(
                              i(n),
                              null === r
                                ? [l(e, t)]
                                : [[l(e, t), "=", l(r, t)].join("")]
                            );
                      };
                    };
                }
              })(e),
              o = {},
              a = 0,
              s = Object.keys(t);
            a < s.length;
            a++
          ) {
            var u = s[a];
            n(u) || (o[u] = t[u]);
          }
          var h = Object.keys(o);
          return (
            !1 !== e.sort && h.sort(e.sort),
            h
              .map(function (n) {
                var o = t[n];
                return void 0 === o
                  ? ""
                  : null === o
                  ? l(n, e)
                  : Array.isArray(o)
                  ? o.reduce(r(n), []).join("&")
                  : l(n, e) + "=" + l(o, e);
              })
              .filter(function (t) {
                return t.length > 0;
              })
              .join("&")
          );
        }),
        (e.parseUrl = function (t, e) {
          e = Object.assign({ decode: !0 }, e);
          var n = u(t, "#"),
            o = r(n, 2),
            i = o[0],
            a = o[1];
          return Object.assign(
            { url: i.split("?")[0] || "", query: v(d(t), e) },
            e && e.parseFragmentIdentifier && a
              ? { fragmentIdentifier: h(a, e) }
              : {}
          );
        }),
        (e.stringifyUrl = function (t, n) {
          n = Object.assign({ encode: !0, strict: !0 }, n);
          var r = f(t.url).split("?")[0] || "",
            o = e.extract(t.url),
            i = e.parse(o, { sort: !1 }),
            a = Object.assign(i, t.query),
            s = e.stringify(a, n);
          s && (s = "?".concat(s));
          var u = (function (t) {
            var e = "",
              n = t.indexOf("#");
            return -1 !== n && (e = t.slice(n)), e;
          })(t.url);
          return (
            t.fragmentIdentifier &&
              (u = "#".concat(l(t.fragmentIdentifier, n))),
            "".concat(r).concat(s).concat(u)
          );
        });
    },
    1977: function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
          return "%".concat(t.charCodeAt(0).toString(16).toUpperCase());
        });
      };
    },
    1978: function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        if ("string" !== typeof t || "string" !== typeof e)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === e) return [t];
        var n = t.indexOf(e);
        return -1 === n ? [t] : [t.slice(0, n), t.slice(n + e.length)];
      };
    },
    1979: function (t, e, n) {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        o = "~";
      function i() {}
      function a(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function s(t, e, n, r, i) {
        if ("function" !== typeof n)
          throw new TypeError("The listener must be a function");
        var s = new a(n, r || t, i),
          u = o ? o + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], s])
              : t._events[u].push(s)
            : ((t._events[u] = s), t._eventsCount++),
          t
        );
      }
      function u(t, e) {
        0 === --t._eventsCount ? (t._events = new i()) : delete t._events[e];
      }
      function c() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
        (c.prototype.eventNames = function () {
          var t,
            e,
            n = [];
          if (0 === this._eventsCount) return n;
          for (e in (t = this._events))
            r.call(t, e) && n.push(o ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (c.prototype.listeners = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var r = 0, i = n.length, a = new Array(i); r < i; r++)
            a[r] = n[r].fn;
          return a;
        }),
        (c.prototype.listenerCount = function (t) {
          var e = o ? o + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (t, e, n, r, i, a) {
          var s = o ? o + t : t;
          if (!this._events[s]) return !1;
          var u,
            c,
            l = this._events[s],
            h = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), h)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, e), !0;
              case 3:
                return l.fn.call(l.context, e, n), !0;
              case 4:
                return l.fn.call(l.context, e, n, r), !0;
              case 5:
                return l.fn.call(l.context, e, n, r, i), !0;
              case 6:
                return l.fn.call(l.context, e, n, r, i, a), !0;
            }
            for (c = 1, u = new Array(h - 1); c < h; c++)
              u[c - 1] = arguments[c];
            l.fn.apply(l.context, u);
          } else {
            var f,
              d = l.length;
            for (c = 0; c < d; c++)
              switch (
                (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h)
              ) {
                case 1:
                  l[c].fn.call(l[c].context);
                  break;
                case 2:
                  l[c].fn.call(l[c].context, e);
                  break;
                case 3:
                  l[c].fn.call(l[c].context, e, n);
                  break;
                case 4:
                  l[c].fn.call(l[c].context, e, n, r);
                  break;
                default:
                  if (!u)
                    for (f = 1, u = new Array(h - 1); f < h; f++)
                      u[f - 1] = arguments[f];
                  l[c].fn.apply(l[c].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (t, e, n) {
          return s(this, t, e, n, !1);
        }),
        (c.prototype.once = function (t, e, n) {
          return s(this, t, e, n, !0);
        }),
        (c.prototype.removeListener = function (t, e, n, r) {
          var i = o ? o + t : t;
          if (!this._events[i]) return this;
          if (!e) return u(this, i), this;
          var a = this._events[i];
          if (a.fn)
            a.fn !== e ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              u(this, i);
          else {
            for (var s = 0, c = [], l = a.length; s < l; s++)
              (a[s].fn !== e ||
                (r && !a[s].once) ||
                (n && a[s].context !== n)) &&
                c.push(a[s]);
            c.length
              ? (this._events[i] = 1 === c.length ? c[0] : c)
              : u(this, i);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = o ? o + t : t), this._events[e] && u(this, e))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = o),
        (c.EventEmitter = c),
        (t.exports = c);
    },
    1980: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(11),
          o = n(4),
          i = n(5),
          a = n(1090),
          s = n(1981);
        function u() {
          u = function () {
            return t;
          };
          var t = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol : {},
            o = r.iterator || "@@iterator",
            i = r.asyncIterator || "@@asyncIterator",
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
          } catch (S) {
            s = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function c(t, e, n, r) {
            var o = e && e.prototype instanceof f ? e : f,
              i = Object.create(o.prototype),
              a = new M(r || []);
            return (
              (i._invoke = (function (t, e, n) {
                var r = "suspendedStart";
                return function (o, i) {
                  if ("executing" === r)
                    throw new Error("Generator is already running");
                  if ("completed" === r) {
                    if ("throw" === o) throw i;
                    return O();
                  }
                  for (n.method = o, n.arg = i; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var s = b(a, n);
                      if (s) {
                        if (s === h) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if ("suspendedStart" === r)
                        throw ((r = "completed"), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = "executing";
                    var u = l(t, e, n);
                    if ("normal" === u.type) {
                      if (
                        ((r = n.done ? "completed" : "suspendedYield"),
                        u.arg === h)
                      )
                        continue;
                      return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                      ((r = "completed"),
                      (n.method = "throw"),
                      (n.arg = u.arg));
                  }
                };
              })(t, n, a)),
              i
            );
          }
          function l(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (S) {
              return { type: "throw", arg: S };
            }
          }
          t.wrap = c;
          var h = {};
          function f() {}
          function d() {}
          function p() {}
          var v = {};
          s(v, o, function () {
            return this;
          });
          var m = Object.getPrototypeOf,
            g = m && m(m(E([])));
          g && g !== e && n.call(g, o) && (v = g);
          var y = (p.prototype = f.prototype = Object.create(v));
          function _(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function w(t, e) {
            var r;
            this._invoke = function (o, i) {
              function a() {
                return new e(function (r, a) {
                  !(function r(o, i, a, s) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                      var c = u.arg,
                        h = c.value;
                      return h && "object" == typeof h && n.call(h, "__await")
                        ? e.resolve(h.__await).then(
                            function (t) {
                              r("next", t, a, s);
                            },
                            function (t) {
                              r("throw", t, a, s);
                            }
                          )
                        : e.resolve(h).then(
                            function (t) {
                              (c.value = t), a(c);
                            },
                            function (t) {
                              return r("throw", t, a, s);
                            }
                          );
                    }
                    s(u.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            };
          }
          function b(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  b(t, e),
                  "throw" === e.method)
                )
                  return h;
                (e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return h;
            }
            var r = l(n, t.iterator, e.arg);
            if ("throw" === r.type)
              return (
                (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), h
              );
            var o = r.arg;
            return o
              ? o.done
                ? ((e[t.resultName] = o.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  h)
                : o
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                h);
          }
          function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function k(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function M(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(x, this),
              this.reset(!0);
          }
          function E(t) {
            if (t) {
              var e = t[o];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1,
                  i = function e() {
                    for (; ++r < t.length; )
                      if (n.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (i.next = i);
              }
            }
            return { next: O };
          }
          function O() {
            return { value: void 0, done: !0 };
          }
          return (
            (d.prototype = p),
            s(y, "constructor", p),
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
                (t.prototype = Object.create(y)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            _(w.prototype),
            s(w.prototype, i, function () {
              return this;
            }),
            (t.AsyncIterator = w),
            (t.async = function (e, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new w(c(e, n, r, o), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            _(y),
            s(y, a, "Generator"),
            s(y, o, function () {
              return this;
            }),
            s(y, "toString", function () {
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
            (t.values = E),
            (M.prototype = {
              constructor: M,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(k),
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
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = n),
                    r && ((e.method = "next"), (e.arg = void 0)),
                    !!r
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return r("end");
                  if (i.tryLoc <= this.prev) {
                    var s = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (s && u) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
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
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), h)
                    : this.complete(a)
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
                  h
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), k(n), h;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      k(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: E(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  h
                );
              },
            }),
            t
          );
        }
        var c = "undefined" !== typeof t.WebSocket ? t.WebSocket : n(1982),
          l = (function () {
            function t(e) {
              var n = this;
              if (
                (Object(o.a)(this, t),
                (this.opts = e),
                (this._queue = []),
                (this._events = []),
                (this._subscriptions = []),
                (this._protocol = e.protocol),
                (this._version = e.version),
                (this._url = ""),
                (this._netMonitor = null),
                (this._socket = null),
                (this._nextSocket = null),
                (this._subscriptions = e.subscriptions || []),
                (this._netMonitor = e.netMonitor || new s.a()),
                !e.url || "string" !== typeof e.url)
              )
                throw new Error("Missing or invalid WebSocket url");
              (this._url = e.url),
                this._netMonitor.on("online", function () {
                  return n._socketCreate();
                });
            }
            return (
              Object(i.a)(t, [
                {
                  key: "readyState",
                  get: function () {
                    return this._socket ? this._socket.readyState : -1;
                  },
                  set: function (t) {},
                },
                {
                  key: "connecting",
                  get: function () {
                    return 0 === this.readyState;
                  },
                  set: function (t) {},
                },
                {
                  key: "connected",
                  get: function () {
                    return 1 === this.readyState;
                  },
                  set: function (t) {},
                },
                {
                  key: "closing",
                  get: function () {
                    return 2 === this.readyState;
                  },
                  set: function (t) {},
                },
                {
                  key: "closed",
                  get: function () {
                    return 3 === this.readyState;
                  },
                  set: function (t) {},
                },
                {
                  key: "open",
                  value: function () {
                    this._socketCreate();
                  },
                },
                {
                  key: "close",
                  value: function () {
                    this._socketClose();
                  },
                },
                {
                  key: "send",
                  value: function (t, e, n) {
                    if (!e || "string" !== typeof e)
                      throw new Error("Missing or invalid topic field");
                    this._socketSend({
                      topic: e,
                      type: "pub",
                      payload: t,
                      silent: !!n,
                    });
                  },
                },
                {
                  key: "subscribe",
                  value: function (t) {
                    this._socketSend({
                      topic: t,
                      type: "sub",
                      payload: "",
                      silent: !0,
                    });
                  },
                },
                {
                  key: "on",
                  value: function (t, e) {
                    this._events.push({ event: t, callback: e });
                  },
                },
                {
                  key: "_socketCreate",
                  value: function () {
                    var t = this;
                    if (!this._nextSocket) {
                      var e = (function (t, e, n) {
                        var r,
                          o,
                          i = (
                            t.startsWith("https")
                              ? t.replace("https", "wss")
                              : t.startsWith("http")
                              ? t.replace("http", "ws")
                              : t
                          ).split("?"),
                          s = Object(a.n)()
                            ? {
                                protocol: e,
                                version: n,
                                env: "browser",
                                host:
                                  (null === (r = Object(a.k)()) || void 0 === r
                                    ? void 0
                                    : r.host) || "",
                              }
                            : {
                                protocol: e,
                                version: n,
                                env:
                                  (null === (o = Object(a.g)()) || void 0 === o
                                    ? void 0
                                    : o.name) || "",
                              },
                          u = Object(a.a)(Object(a.l)(i[1] || ""), s);
                        return i[0] + "?" + u;
                      })(this._url, this._protocol, this._version);
                      if (((this._nextSocket = new c(e)), !this._nextSocket))
                        throw new Error("Failed to create socket");
                      (this._nextSocket.onmessage = function (e) {
                        return t._socketReceive(e);
                      }),
                        (this._nextSocket.onopen = function () {
                          return t._socketOpen();
                        }),
                        (this._nextSocket.onerror = function (e) {
                          return t._socketError(e);
                        }),
                        (this._nextSocket.onclose = function () {
                          setTimeout(function () {
                            (t._nextSocket = null), t._socketCreate();
                          }, 1e3);
                        });
                    }
                  },
                },
                {
                  key: "_socketOpen",
                  value: function () {
                    this._socketClose(),
                      (this._socket = this._nextSocket),
                      (this._nextSocket = null),
                      this._queueSubscriptions(),
                      this._pushQueue();
                  },
                },
                {
                  key: "_socketClose",
                  value: function () {
                    this._socket &&
                      ((this._socket.onclose = function () {}),
                      this._socket.close());
                  },
                },
                {
                  key: "_socketSend",
                  value: function (t) {
                    var e = JSON.stringify(t);
                    this._socket && 1 === this._socket.readyState
                      ? this._socket.send(e)
                      : (this._setToQueue(t), this._socketCreate());
                  },
                },
                {
                  key: "_socketReceive",
                  value: (function () {
                    var t = Object(r.a)(
                      u().mark(function t(e) {
                        var n, r;
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  (t.prev = 0),
                                    (n = JSON.parse(e.data)),
                                    (t.next = 7);
                                  break;
                                case 4:
                                  return (
                                    (t.prev = 4),
                                    (t.t0 = t.catch(0)),
                                    t.abrupt("return")
                                  );
                                case 7:
                                  this._socketSend({
                                    topic: n.topic,
                                    type: "ack",
                                    payload: "",
                                    silent: !0,
                                  }),
                                    this._socket &&
                                      1 === this._socket.readyState &&
                                      (r = this._events.filter(function (t) {
                                        return "message" === t.event;
                                      })) &&
                                      r.length &&
                                      r.forEach(function (t) {
                                        return t.callback(n);
                                      });
                                case 9:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 4]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_socketError",
                  value: function (t) {
                    var e = this._events.filter(function (t) {
                      return "error" === t.event;
                    });
                    e &&
                      e.length &&
                      e.forEach(function (e) {
                        return e.callback(t);
                      });
                  },
                },
                {
                  key: "_queueSubscriptions",
                  value: function () {
                    var t = this;
                    this._subscriptions.forEach(function (e) {
                      return t._queue.push({
                        topic: e,
                        type: "sub",
                        payload: "",
                        silent: !0,
                      });
                    }),
                      (this._subscriptions = this.opts.subscriptions || []);
                  },
                },
                {
                  key: "_setToQueue",
                  value: function (t) {
                    this._queue.push(t);
                  },
                },
                {
                  key: "_pushQueue",
                  value: function () {
                    var t = this;
                    this._queue.forEach(function (e) {
                      return t._socketSend(e);
                    }),
                      (this._queue = []);
                  },
                },
              ]),
              t
            );
          })();
        e.a = l;
      }.call(this, n(30)));
    },
    1981: function (t, e, n) {
      "use strict";
      var r = n(4),
        o = n(5),
        i = (function () {
          function t() {
            var e = this;
            Object(r.a)(this, t),
              (this._eventEmitters = []),
              "undefined" !== typeof window &&
                "undefined" !== typeof window.addEventListener &&
                (window.addEventListener("online", function () {
                  return e.trigger("online");
                }),
                window.addEventListener("offline", function () {
                  return e.trigger("offline");
                }));
          }
          return (
            Object(o.a)(t, [
              {
                key: "on",
                value: function (t, e) {
                  this._eventEmitters.push({ event: t, callback: e });
                },
              },
              {
                key: "trigger",
                value: function (t) {
                  var e = [];
                  t &&
                    (e = this._eventEmitters.filter(function (e) {
                      return e.event === t;
                    })),
                    e.forEach(function (t) {
                      t.callback();
                    });
                },
              },
            ]),
            t
          );
        })();
      e.a = i;
    },
    1982: function (t, e, n) {
      "use strict";
      t.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    1983: function (t, e, n) {
      "use strict";
      var r = n(1426);
      n.d(e, "randomBytes", function () {
        return r.a;
      });
      var o = n(1427);
      n.d(e, "aesCbcDecrypt", function () {
        return o.a;
      }),
        n.d(e, "aesCbcEncrypt", function () {
          return o.b;
        });
      var i = n(1428);
      n.d(e, "hmacSha256Sign", function () {
        return i.a;
      });
      n(1433), n(1269), n(1304);
    },
    1984: function (t, e, n) {
      (function (e) {
        function r(t) {
          return t && "object" === typeof t && "default" in t ? t.default : t;
        }
        var o = n(1302),
          i = r(n(1985)),
          a = r(n(2006)),
          s = n(2083);
        "undefined" !== typeof Symbol &&
          (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
          "undefined" !== typeof Symbol &&
            (Symbol.asyncIterator ||
              (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        function u(t) {
          return s.createElement(
            "div",
            { className: "walletconnect-modal__header" },
            s.createElement("img", {
              src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
              className: "walletconnect-modal__headerLogo",
            }),
            s.createElement("p", null, "WalletConnect"),
            s.createElement(
              "div",
              {
                className: "walletconnect-modal__close__wrapper",
                onClick: t.onClose,
              },
              s.createElement(
                "div",
                {
                  id: "walletconnect-qrcode-close",
                  className: "walletconnect-modal__close__icon",
                },
                s.createElement("div", {
                  className: "walletconnect-modal__close__line1",
                }),
                s.createElement("div", {
                  className: "walletconnect-modal__close__line2",
                })
              )
            )
          );
        }
        function c(t) {
          return s.createElement(
            "a",
            {
              className: "walletconnect-connect__button",
              href: t.href,
              id: "walletconnect-connect-button-" + t.name,
              onClick: t.onClick,
              rel: "noopener noreferrer",
              style: { backgroundColor: t.color },
              target: "_blank",
            },
            t.name
          );
        }
        function l(t) {
          var e = t.color,
            n = t.href,
            r = t.name,
            o = t.logo,
            i = t.onClick;
          return s.createElement(
            "a",
            {
              className: "walletconnect-modal__base__row",
              href: n,
              onClick: i,
              rel: "noopener noreferrer",
              target: "_blank",
            },
            s.createElement(
              "h3",
              { className: "walletconnect-modal__base__row__h3" },
              r
            ),
            s.createElement(
              "div",
              { className: "walletconnect-modal__base__row__right" },
              s.createElement("div", {
                className: "walletconnect-modal__base__row__right__app-icon",
                style: {
                  background: "url('" + o + "') " + e,
                  backgroundSize: "100%",
                },
              }),
              s.createElement("img", {
                src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
                className: "walletconnect-modal__base__row__right__caret",
              })
            )
          );
        }
        function h(t) {
          var e = t.color,
            n = t.href,
            r = t.name,
            o = t.logo,
            i = t.onClick,
            a =
              window.innerWidth < 768
                ? (r.length > 8 ? 2.5 : 2.7) + "vw"
                : "inherit";
          return s.createElement(
            "a",
            {
              className: "walletconnect-connect__button__icon_anchor",
              href: n,
              onClick: i,
              rel: "noopener noreferrer",
              target: "_blank",
            },
            s.createElement("div", {
              className: "walletconnect-connect__button__icon",
              style: {
                background: "url('" + o + "') " + e,
                backgroundSize: "100%",
              },
            }),
            s.createElement(
              "div",
              {
                style: { fontSize: a },
                className: "walletconnect-connect__button__text",
              },
              r
            )
          );
        }
        function f(t) {
          var e = o.isAndroid(),
            n = s.useState(""),
            r = n[0],
            i = n[1],
            a = s.useState(""),
            u = a[0],
            f = a[1],
            d = s.useState(1),
            p = d[0],
            v = d[1],
            m = u
              ? t.links.filter(function (t) {
                  return t.name.toLowerCase().includes(u.toLowerCase());
                })
              : t.links,
            g = t.errorMessage,
            y = u || m.length > 5,
            _ = Math.ceil(m.length / 12),
            w = [12 * (p - 1) + 1, 12 * p],
            b = m.length
              ? m.filter(function (t, e) {
                  return e + 1 >= w[0] && e + 1 <= w[1];
                })
              : [],
            x = !(e || !(_ > 1)),
            k = void 0;
          return s.createElement(
            "div",
            null,
            s.createElement(
              "p",
              {
                id: "walletconnect-qrcode-text",
                className: "walletconnect-qrcode__text",
              },
              e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet
            ),
            !e &&
              s.createElement("input", {
                className: "walletconnect-search__input",
                placeholder: "Search",
                value: r,
                onChange: function (t) {
                  i(t.target.value),
                    clearTimeout(k),
                    t.target.value
                      ? (k = setTimeout(function () {
                          f(t.target.value), v(1);
                        }, 1e3))
                      : (i(""), f(""), v(1));
                },
              }),
            s.createElement(
              "div",
              {
                className:
                  "walletconnect-connect__buttons__wrapper" +
                  (e ? "__android" : y && m.length ? "__wrap" : ""),
              },
              e
                ? s.createElement(c, {
                    name: t.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: t.uri,
                    onClick: s.useCallback(function () {
                      o.saveMobileLinkInfo({ name: "Unknown", href: t.uri });
                    }, []),
                  })
                : b.length
                ? b.map(function (e) {
                    var n = e.color,
                      r = e.name,
                      i = e.shortName,
                      a = e.logo,
                      u = o.formatIOSMobile(t.uri, e),
                      c = s.useCallback(
                        function () {
                          o.saveMobileLinkInfo({ name: r, href: u });
                        },
                        [b]
                      );
                    return y
                      ? s.createElement(h, {
                          color: n,
                          href: u,
                          name: i || r,
                          logo: a,
                          onClick: c,
                        })
                      : s.createElement(l, {
                          color: n,
                          href: u,
                          name: r,
                          logo: a,
                          onClick: c,
                        });
                  })
                : s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "p",
                      null,
                      g.length
                        ? t.errorMessage
                        : t.links.length && !m.length
                        ? t.text.no_wallets_found
                        : t.text.loading
                    )
                  )
            ),
            x &&
              s.createElement(
                "div",
                { className: "walletconnect-modal__footer" },
                Array(_)
                  .fill(0)
                  .map(function (t, e) {
                    var n = e + 1,
                      r = p === n;
                    return s.createElement(
                      "a",
                      {
                        style: {
                          margin: "auto 10px",
                          fontWeight: r ? "bold" : "normal",
                        },
                        onClick: function () {
                          return v(n);
                        },
                      },
                      n
                    );
                  })
              )
          );
        }
        function d(t) {
          var e = !!t.message.trim();
          return s.createElement(
            "div",
            {
              className:
                "walletconnect-qrcode__notification" +
                (e ? " notification__show" : ""),
            },
            t.message
          );
        }
        function p(t) {
          var e = s.useState(""),
            n = e[0],
            r = e[1],
            o = s.useState(""),
            u = o[0],
            c = o[1];
          s.useEffect(function () {
            try {
              return Promise.resolve(
                (function (t) {
                  try {
                    var e = "";
                    return Promise.resolve(
                      i.toString(t, { margin: 0, type: "svg" })
                    ).then(function (t) {
                      return (
                        "string" === typeof t &&
                          (e = t.replace(
                            "<svg",
                            '<svg class="walletconnect-qrcode__image"'
                          )),
                        e
                      );
                    });
                  } catch (n) {
                    return Promise.reject(n);
                  }
                })(t.uri)
              ).then(function (t) {
                c(t);
              });
            } catch (e) {
              Promise.reject(e);
            }
          }, []);
          return s.createElement(
            "div",
            null,
            s.createElement(
              "p",
              {
                id: "walletconnect-qrcode-text",
                className: "walletconnect-qrcode__text",
              },
              t.text.scan_qrcode_with_wallet
            ),
            s.createElement("div", { dangerouslySetInnerHTML: { __html: u } }),
            s.createElement(
              "div",
              { className: "walletconnect-modal__footer" },
              s.createElement(
                "a",
                {
                  onClick: function () {
                    a(t.uri)
                      ? (r(t.text.copied_to_clipboard),
                        setInterval(function () {
                          return r("");
                        }, 1200))
                      : (r("Error"),
                        setInterval(function () {
                          return r("");
                        }, 1200));
                  },
                },
                t.text.copy_to_clipboard
              )
            ),
            s.createElement(d, { message: n })
          );
        }
        function v(t) {
          var e = o.isAndroid(),
            n = o.isMobile(),
            r = n
              ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks
                ? t.qrcodeModalOptions.mobileLinks
                : void 0
              : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks
              ? t.qrcodeModalOptions.desktopLinks
              : void 0,
            i = s.useState(!1),
            a = i[0],
            c = i[1],
            l = s.useState(!1),
            h = l[0],
            d = l[1],
            v = s.useState(!n),
            m = v[0],
            g = v[1],
            y = {
              mobile: n,
              text: t.text,
              uri: t.uri,
              qrcodeModalOptions: t.qrcodeModalOptions,
            },
            _ = s.useState(""),
            w = _[0],
            b = _[1],
            x = s.useState(!1),
            k = x[0],
            M = x[1],
            E = s.useState([]),
            O = E[0],
            S = E[1],
            L = s.useState(""),
            j = L[0],
            R = L[1],
            C = function () {
              h ||
                a ||
                (r && !r.length) ||
                O.length > 0 ||
                s.useEffect(function () {
                  !(function () {
                    try {
                      if (e) return Promise.resolve();
                      c(!0);
                      var i = (function (t, e) {
                        try {
                          var n = t();
                        } catch (r) {
                          return e(r);
                        }
                        return n && n.then ? n.then(void 0, e) : n;
                      })(
                        function () {
                          var e =
                            t.qrcodeModalOptions &&
                            t.qrcodeModalOptions.registryUrl
                              ? t.qrcodeModalOptions.registryUrl
                              : o.getWalletRegistryUrl();
                          return Promise.resolve(fetch(e)).then(function (e) {
                            return Promise.resolve(e.json()).then(function (e) {
                              var i = e.listings,
                                a = n ? "mobile" : "desktop",
                                s = o.getMobileLinkRegistry(
                                  o.formatMobileRegistry(i, a),
                                  r
                                );
                              c(!1),
                                d(!0),
                                R(s.length ? "" : t.text.no_supported_wallets),
                                S(s);
                              var u = 1 === s.length;
                              u && (b(o.formatIOSMobile(t.uri, s[0])), g(!0)),
                                M(u);
                            });
                          });
                        },
                        function (e) {
                          c(!1),
                            d(!0),
                            R(t.text.something_went_wrong),
                            console.error(e);
                        }
                      );
                      Promise.resolve(
                        i && i.then ? i.then(function () {}) : void 0
                      );
                    } catch (a) {
                      return Promise.reject(a);
                    }
                  })();
                });
            };
          C();
          var T = n ? m : !m;
          return s.createElement(
            "div",
            {
              id: "walletconnect-qrcode-modal",
              className: "walletconnect-qrcode__base animated fadeIn",
            },
            s.createElement(
              "div",
              { className: "walletconnect-modal__base" },
              s.createElement(u, { onClose: t.onClose }),
              k && m
                ? s.createElement(
                    "div",
                    { className: "walletconnect-modal__single_wallet" },
                    s.createElement(
                      "a",
                      {
                        onClick: function () {
                          return o.saveMobileLinkInfo({
                            name: O[0].name,
                            href: w,
                          });
                        },
                        href: w,
                        rel: "noopener noreferrer",
                        target: "_blank",
                      },
                      t.text.connect_with +
                        " " +
                        (k ? O[0].name : "") +
                        " \u203a"
                    )
                  )
                : e || a || (!a && O.length)
                ? s.createElement(
                    "div",
                    {
                      className:
                        "walletconnect-modal__mobile__toggle" +
                        (T ? " right__selected" : ""),
                    },
                    s.createElement("div", {
                      className: "walletconnect-modal__mobile__toggle_selector",
                    }),
                    n
                      ? s.createElement(
                          s.Fragment,
                          null,
                          s.createElement(
                            "a",
                            {
                              onClick: function () {
                                return g(!1), C();
                              },
                            },
                            t.text.mobile
                          ),
                          s.createElement(
                            "a",
                            {
                              onClick: function () {
                                return g(!0);
                              },
                            },
                            t.text.qrcode
                          )
                        )
                      : s.createElement(
                          s.Fragment,
                          null,
                          s.createElement(
                            "a",
                            {
                              onClick: function () {
                                return g(!0);
                              },
                            },
                            t.text.qrcode
                          ),
                          s.createElement(
                            "a",
                            {
                              onClick: function () {
                                return g(!1), C();
                              },
                            },
                            t.text.desktop
                          )
                        )
                  )
                : null,
              s.createElement(
                "div",
                null,
                m || (!e && !a && !O.length)
                  ? s.createElement(p, Object.assign({}, y))
                  : s.createElement(
                      f,
                      Object.assign({}, y, { links: O, errorMessage: j })
                    )
              )
            )
          );
        }
        var m = {
          de: {
            choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
            connect_mobile_wallet: "Verbinde mit Mobile Wallet",
            scan_qrcode_with_wallet:
              "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
            connect: "Verbinden",
            qrcode: "QR-Code",
            mobile: "Mobile",
            desktop: "Desktop",
            copy_to_clipboard: "In die Zwischenablage kopieren",
            copied_to_clipboard: "In die Zwischenablage kopiert!",
            connect_with: "Verbinden mit Hilfe von",
            loading: "Laden...",
            something_went_wrong: "Etwas ist schief gelaufen",
            no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
            no_wallets_found: "keine Wallet gefunden",
          },
          en: {
            choose_preferred_wallet: "Choose your preferred wallet",
            connect_mobile_wallet: "Connect to Mobile Wallet",
            scan_qrcode_with_wallet:
              "Scan QR code with a WalletConnect-compatible wallet",
            connect: "Connect",
            qrcode: "QR Code",
            mobile: "Mobile",
            desktop: "Desktop",
            copy_to_clipboard: "Copy to clipboard",
            copied_to_clipboard: "Copied to clipboard!",
            connect_with: "Connect with",
            loading: "Loading...",
            something_went_wrong: "Something went wrong",
            no_supported_wallets: "There are no supported wallets yet",
            no_wallets_found: "No wallets found",
          },
          es: {
            choose_preferred_wallet: "Elige tu billetera preferida",
            connect_mobile_wallet: "Conectar a billetera m\xf3vil",
            scan_qrcode_with_wallet:
              "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
            connect: "Conectar",
            qrcode: "C\xf3digo QR",
            mobile: "M\xf3vil",
            desktop: "Desktop",
            copy_to_clipboard: "Copiar",
            copied_to_clipboard: "Copiado!",
            connect_with: "Conectar mediante",
            loading: "Cargando...",
            something_went_wrong: "Algo sali\xf3 mal",
            no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
            no_wallets_found: "No se encontraron billeteras",
          },
          fr: {
            choose_preferred_wallet:
              "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
            connect_mobile_wallet: "Se connecter au portefeuille mobile",
            scan_qrcode_with_wallet:
              "Scannez le QR code avec un portefeuille compatible WalletConnect",
            connect: "Se connecter",
            qrcode: "QR Code",
            mobile: "Mobile",
            desktop: "Desktop",
            copy_to_clipboard: "Copier",
            copied_to_clipboard: "Copi\xe9!",
            connect_with: "Connectez-vous \xe0 l'aide de",
            loading: "Chargement...",
            something_went_wrong: "Quelque chose a mal tourn\xe9",
            no_supported_wallets:
              "Il n'y a pas encore de portefeuilles pris en charge",
            no_wallets_found: "Aucun portefeuille trouv\xe9",
          },
          ko: {
            choose_preferred_wallet:
              "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
            connect_mobile_wallet:
              "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
            scan_qrcode_with_wallet:
              "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
            connect: "\uc5f0\uacb0",
            qrcode: "QR \ucf54\ub4dc",
            mobile: "\ubaa8\ubc14\uc77c",
            desktop: "\ub370\uc2a4\ud06c\ud0d1",
            copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
            copied_to_clipboard:
              "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
            connect_with: "\uc640 \uc5f0\uacb0\ud558\ub2e4",
            loading: "\ub85c\ub4dc \uc911...",
            something_went_wrong:
              "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
            no_supported_wallets:
              "\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
            no_wallets_found:
              "\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",
          },
          pt: {
            choose_preferred_wallet: "Escolha sua carteira preferida",
            connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
            scan_qrcode_with_wallet:
              "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
            connect: "Conectar",
            qrcode: "C\xf3digo QR",
            mobile: "M\xf3vel",
            desktop: "Desktop",
            copy_to_clipboard: "Copiar",
            copied_to_clipboard: "Copiado!",
            connect_with: "Ligar por meio de",
            loading: "Carregamento...",
            something_went_wrong: "Algo correu mal",
            no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
            no_wallets_found: "Nenhuma carteira encontrada",
          },
          zh: {
            choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
            connect_mobile_wallet:
              "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
            scan_qrcode_with_wallet:
              "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
            connect: "\u8fde\u63a5",
            qrcode: "\u4e8c\u7ef4\u7801",
            mobile: "\u79fb\u52a8",
            desktop: "\u684c\u9762",
            copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
            copied_to_clipboard:
              "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
            connect_with: "\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",
            loading: "\u6b63\u5728\u52a0\u8f7d...",
            something_went_wrong: "\u51fa\u4e86\u95ee\u9898",
            no_supported_wallets:
              "\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",
            no_wallets_found: "\u6ca1\u6709\u627e\u5230\u94b1\u5305",
          },
          fa: {
            choose_preferred_wallet:
              "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
            connect_mobile_wallet:
              "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
            scan_qrcode_with_wallet:
              "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
            connect: "\u0627\u062a\u0635\u0627\u0644",
            qrcode: "\u06a9\u062f QR",
            mobile: "\u0633\u06cc\u0627\u0631",
            desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e",
            copy_to_clipboard:
              "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
            copied_to_clipboard:
              "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
            connect_with: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",
            loading: "...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",
            something_went_wrong:
              "\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",
            no_supported_wallets:
              "\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",
            no_wallets_found:
              "\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f",
          },
        };
        function g() {
          var t = o.getDocumentOrThrow(),
            e = t.getElementById("walletconnect-qrcode-modal");
          e &&
            ((e.className = e.className.replace("fadeIn", "fadeOut")),
            setTimeout(function () {
              var e = t.getElementById("walletconnect-wrapper");
              e && t.body.removeChild(e);
            }, 300));
        }
        function y(t) {
          return function () {
            g(), t && t();
          };
        }
        function _() {
          var t = o.getNavigatorOrThrow().language.split("-")[0] || "en";
          return m[t] || m.en;
        }
        function w(t, e, n) {
          !(function () {
            var t = o.getDocumentOrThrow(),
              e = t.getElementById("walletconnect-style-sheet");
            e && t.head.removeChild(e);
            var n = t.createElement("style");
            n.setAttribute("id", "walletconnect-style-sheet"),
              (n.innerText =
                ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n'),
              t.head.appendChild(n);
          })();
          var r = (function () {
            var t = o.getDocumentOrThrow(),
              e = t.createElement("div");
            return (
              e.setAttribute("id", "walletconnect-wrapper"),
              t.body.appendChild(e),
              e
            );
          })();
          s.render(
            s.createElement(v, {
              text: _(),
              uri: t,
              onClose: y(e),
              qrcodeModalOptions: n,
            }),
            r
          );
        }
        var b = function () {
          return (
            "undefined" !== typeof e &&
            "undefined" !== typeof e.versions &&
            "undefined" !== typeof e.versions.node
          );
        };
        var x = {
          open: function (t, e, n) {
            console.log(t),
              b()
                ? (function (t) {
                    i.toString(t, { type: "terminal" }).then(console.log);
                  })(t)
                : w(t, e, n);
          },
          close: function () {
            b() || g();
          },
        };
        t.exports = x;
      }.call(this, n(25)));
    },
    1985: function (t, e, n) {
      var r = n(1986),
        o = n(1987),
        i = n(2004),
        a = n(2005);
      function s(t, e, n, i, a) {
        var s = [].slice.call(arguments, 1),
          u = s.length,
          c = "function" === typeof s[u - 1];
        if (!c && !r()) throw new Error("Callback required as last argument");
        if (!c) {
          if (u < 1) throw new Error("Too few arguments provided");
          return (
            1 === u
              ? ((n = e), (e = i = void 0))
              : 2 !== u || e.getContext || ((i = n), (n = e), (e = void 0)),
            new Promise(function (r, a) {
              try {
                var s = o.create(n, i);
                r(t(s, e, i));
              } catch (u) {
                a(u);
              }
            })
          );
        }
        if (u < 2) throw new Error("Too few arguments provided");
        2 === u
          ? ((a = n), (n = e), (e = i = void 0))
          : 3 === u &&
            (e.getContext && "undefined" === typeof a
              ? ((a = i), (i = void 0))
              : ((a = i), (i = n), (n = e), (e = void 0)));
        try {
          var l = o.create(n, i);
          a(null, t(l, e, i));
        } catch (h) {
          a(h);
        }
      }
      (e.create = o.create),
        (e.toCanvas = s.bind(null, i.render)),
        (e.toDataURL = s.bind(null, i.renderToDataURL)),
        (e.toString = s.bind(null, function (t, e, n) {
          return a.render(t, n);
        }));
    },
    1986: function (t, e) {
      t.exports = function () {
        return (
          "function" === typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    1987: function (t, e, n) {
      var r = n(1083),
        o = n(1050),
        i = n(1271),
        a = n(1988),
        s = n(1989),
        u = n(1990),
        c = n(1991),
        l = n(1992),
        h = n(1434),
        f = n(1993),
        d = n(1996),
        p = n(1997),
        v = n(1051),
        m = n(1998),
        g = n(1270);
      function y(t, e, n) {
        var r,
          o,
          i = t.size,
          a = p.getEncodedBits(e, n);
        for (r = 0; r < 15; r++)
          (o = 1 === ((a >> r) & 1)),
            r < 6
              ? t.set(r, 8, o, !0)
              : r < 8
              ? t.set(r + 1, 8, o, !0)
              : t.set(i - 15 + r, 8, o, !0),
            r < 8
              ? t.set(8, i - r - 1, o, !0)
              : r < 9
              ? t.set(8, 15 - r - 1 + 1, o, !0)
              : t.set(8, 15 - r - 1, o, !0);
        t.set(i - 8, 8, 1, !0);
      }
      function _(t, e, n) {
        var i = new a();
        n.forEach(function (e) {
          i.put(e.mode.bit, 4),
            i.put(e.getLength(), v.getCharCountIndicator(e.mode, t)),
            e.write(i);
        });
        var s =
          8 * (o.getSymbolTotalCodewords(t) - h.getTotalCodewordsCount(t, e));
        for (
          i.getLengthInBits() + 4 <= s && i.put(0, 4);
          i.getLengthInBits() % 8 !== 0;

        )
          i.putBit(0);
        for (var u = (s - i.getLengthInBits()) / 8, c = 0; c < u; c++)
          i.put(c % 2 ? 17 : 236, 8);
        return (function (t, e, n) {
          for (
            var i = o.getSymbolTotalCodewords(e),
              a = h.getTotalCodewordsCount(e, n),
              s = i - a,
              u = h.getBlocksCount(e, n),
              c = u - (i % u),
              l = Math.floor(i / u),
              d = Math.floor(s / u),
              p = d + 1,
              v = l - d,
              m = new f(v),
              g = 0,
              y = new Array(u),
              _ = new Array(u),
              w = 0,
              b = r.from(t.buffer),
              x = 0;
            x < u;
            x++
          ) {
            var k = x < c ? d : p;
            (y[x] = b.slice(g, g + k)),
              (_[x] = m.encode(y[x])),
              (g += k),
              (w = Math.max(w, k));
          }
          var M,
            E,
            O = r.alloc(i),
            S = 0;
          for (M = 0; M < w; M++)
            for (E = 0; E < u; E++) M < y[E].length && (O[S++] = y[E][M]);
          for (M = 0; M < v; M++) for (E = 0; E < u; E++) O[S++] = _[E][M];
          return O;
        })(i, t, e);
      }
      function w(t, e, n, r) {
        var i;
        if (g(t)) i = m.fromArray(t);
        else {
          if ("string" !== typeof t) throw new Error("Invalid data");
          var a = e;
          if (!a) {
            var h = m.rawSplit(t);
            a = d.getBestVersionForData(h, n);
          }
          i = m.fromString(t, a || 40);
        }
        var f = d.getBestVersionForData(i, n);
        if (!f)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code"
          );
        if (e) {
          if (e < f)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                f +
                ".\n"
            );
        } else e = f;
        var p = _(e, n, i),
          v = o.getSymbolSize(e),
          w = new s(v);
        return (
          (function (t, e) {
            for (
              var n = t.size, r = c.getPositions(e), o = 0;
              o < r.length;
              o++
            )
              for (var i = r[o][0], a = r[o][1], s = -1; s <= 7; s++)
                if (!(i + s <= -1 || n <= i + s))
                  for (var u = -1; u <= 7; u++)
                    a + u <= -1 ||
                      n <= a + u ||
                      ((s >= 0 && s <= 6 && (0 === u || 6 === u)) ||
                      (u >= 0 && u <= 6 && (0 === s || 6 === s)) ||
                      (s >= 2 && s <= 4 && u >= 2 && u <= 4)
                        ? t.set(i + s, a + u, !0, !0)
                        : t.set(i + s, a + u, !1, !0));
          })(w, e),
          (function (t) {
            for (var e = t.size, n = 8; n < e - 8; n++) {
              var r = n % 2 === 0;
              t.set(n, 6, r, !0), t.set(6, n, r, !0);
            }
          })(w),
          (function (t, e) {
            for (var n = u.getPositions(e), r = 0; r < n.length; r++)
              for (var o = n[r][0], i = n[r][1], a = -2; a <= 2; a++)
                for (var s = -2; s <= 2; s++)
                  -2 === a ||
                  2 === a ||
                  -2 === s ||
                  2 === s ||
                  (0 === a && 0 === s)
                    ? t.set(o + a, i + s, !0, !0)
                    : t.set(o + a, i + s, !1, !0);
          })(w, e),
          y(w, n, 0),
          e >= 7 &&
            (function (t, e) {
              for (
                var n, r, o, i = t.size, a = d.getEncodedBits(e), s = 0;
                s < 18;
                s++
              )
                (n = Math.floor(s / 3)),
                  (r = (s % 3) + i - 8 - 3),
                  (o = 1 === ((a >> s) & 1)),
                  t.set(n, r, o, !0),
                  t.set(r, n, o, !0);
            })(w, e),
          (function (t, e) {
            for (
              var n = t.size, r = -1, o = n - 1, i = 7, a = 0, s = n - 1;
              s > 0;
              s -= 2
            )
              for (6 === s && s--; ; ) {
                for (var u = 0; u < 2; u++)
                  if (!t.isReserved(o, s - u)) {
                    var c = !1;
                    a < e.length && (c = 1 === ((e[a] >>> i) & 1)),
                      t.set(o, s - u, c),
                      -1 === --i && (a++, (i = 7));
                  }
                if ((o += r) < 0 || n <= o) {
                  (o -= r), (r = -r);
                  break;
                }
              }
          })(w, p),
          isNaN(r) && (r = l.getBestMask(w, y.bind(null, w, n))),
          l.applyMask(r, w),
          y(w, n, r),
          {
            modules: w,
            version: e,
            errorCorrectionLevel: n,
            maskPattern: r,
            segments: i,
          }
        );
      }
      e.create = function (t, e) {
        if ("undefined" === typeof t || "" === t)
          throw new Error("No input text");
        var n,
          r,
          a = i.M;
        return (
          "undefined" !== typeof e &&
            ((a = i.from(e.errorCorrectionLevel, i.M)),
            (n = d.from(e.version)),
            (r = l.from(e.maskPattern)),
            e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
          w(t, n, a, r)
        );
      };
    },
    1988: function (t, e) {
      function n() {
        (this.buffer = []), (this.length = 0);
      }
      (n.prototype = {
        get: function (t) {
          var e = Math.floor(t / 8);
          return 1 === ((this.buffer[e] >>> (7 - (t % 8))) & 1);
        },
        put: function (t, e) {
          for (var n = 0; n < e; n++)
            this.putBit(1 === ((t >>> (e - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          var e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = n);
    },
    1989: function (t, e, n) {
      var r = n(1083);
      function o(t) {
        if (!t || t < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = r.alloc(t * t)),
          (this.reservedBit = r.alloc(t * t));
      }
      (o.prototype.set = function (t, e, n, r) {
        var o = t * this.size + e;
        (this.data[o] = n), r && (this.reservedBit[o] = !0);
      }),
        (o.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (o.prototype.xor = function (t, e, n) {
          this.data[t * this.size + e] ^= n;
        }),
        (o.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = o);
    },
    1990: function (t, e, n) {
      var r = n(1050).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        for (
          var e = Math.floor(t / 7) + 2,
            n = r(t),
            o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
            i = [n - 7],
            a = 1;
          a < e - 1;
          a++
        )
          i[a] = i[a - 1] - o;
        return i.push(6), i.reverse();
      }),
        (e.getPositions = function (t) {
          for (
            var n = [], r = e.getRowColCoords(t), o = r.length, i = 0;
            i < o;
            i++
          )
            for (var a = 0; a < o; a++)
              (0 === i && 0 === a) ||
                (0 === i && a === o - 1) ||
                (i === o - 1 && 0 === a) ||
                n.push([r[i], r[a]]);
          return n;
        });
    },
    1991: function (t, e, n) {
      var r = n(1050).getSymbolSize;
      e.getPositions = function (t) {
        var e = r(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    1992: function (t, e) {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      var n = 3,
        r = 3,
        o = 40,
        i = 10;
      function a(t, n, r) {
        switch (t) {
          case e.Patterns.PATTERN000:
            return (n + r) % 2 === 0;
          case e.Patterns.PATTERN001:
            return n % 2 === 0;
          case e.Patterns.PATTERN010:
            return r % 3 === 0;
          case e.Patterns.PATTERN011:
            return (n + r) % 3 === 0;
          case e.Patterns.PATTERN100:
            return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
          case e.Patterns.PATTERN101:
            return ((n * r) % 2) + ((n * r) % 3) === 0;
          case e.Patterns.PATTERN110:
            return (((n * r) % 2) + ((n * r) % 3)) % 2 === 0;
          case e.Patterns.PATTERN111:
            return (((n * r) % 3) + ((n + r) % 2)) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + t);
        }
      }
      (e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          for (
            var e = t.size, r = 0, o = 0, i = 0, a = null, s = null, u = 0;
            u < e;
            u++
          ) {
            (o = i = 0), (a = s = null);
            for (var c = 0; c < e; c++) {
              var l = t.get(u, c);
              l === a ? o++ : (o >= 5 && (r += n + (o - 5)), (a = l), (o = 1)),
                (l = t.get(c, u)) === s
                  ? i++
                  : (i >= 5 && (r += n + (i - 5)), (s = l), (i = 1));
            }
            o >= 5 && (r += n + (o - 5)), i >= 5 && (r += n + (i - 5));
          }
          return r;
        }),
        (e.getPenaltyN2 = function (t) {
          for (var e = t.size, n = 0, o = 0; o < e - 1; o++)
            for (var i = 0; i < e - 1; i++) {
              var a =
                t.get(o, i) +
                t.get(o, i + 1) +
                t.get(o + 1, i) +
                t.get(o + 1, i + 1);
              (4 !== a && 0 !== a) || n++;
            }
          return n * r;
        }),
        (e.getPenaltyN3 = function (t) {
          for (var e = t.size, n = 0, r = 0, i = 0, a = 0; a < e; a++) {
            r = i = 0;
            for (var s = 0; s < e; s++)
              (r = ((r << 1) & 2047) | t.get(a, s)),
                s >= 10 && (1488 === r || 93 === r) && n++,
                (i = ((i << 1) & 2047) | t.get(s, a)),
                s >= 10 && (1488 === i || 93 === i) && n++;
          }
          return n * o;
        }),
        (e.getPenaltyN4 = function (t) {
          for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
          return Math.abs(Math.ceil((100 * e) / n / 5) - 10) * i;
        }),
        (e.applyMask = function (t, e) {
          for (var n = e.size, r = 0; r < n; r++)
            for (var o = 0; o < n; o++)
              e.isReserved(o, r) || e.xor(o, r, a(t, o, r));
        }),
        (e.getBestMask = function (t, n) {
          for (
            var r = Object.keys(e.Patterns).length, o = 0, i = 1 / 0, a = 0;
            a < r;
            a++
          ) {
            n(a), e.applyMask(a, t);
            var s =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(a, t), s < i && ((i = s), (o = a));
          }
          return o;
        });
    },
    1993: function (t, e, n) {
      var r = n(1083),
        o = n(1994),
        i = n(8).Buffer;
      function a(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (a.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
      }),
        (a.prototype.encode = function (t) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          var e = r.alloc(this.degree),
            n = i.concat([t, e], t.length + this.degree),
            a = o.mod(n, this.genPoly),
            s = this.degree - a.length;
          if (s > 0) {
            var u = r.alloc(this.degree);
            return a.copy(u, s), u;
          }
          return a;
        }),
        (t.exports = a);
    },
    1994: function (t, e, n) {
      var r = n(1083),
        o = n(1995);
      (e.mul = function (t, e) {
        for (var n = r.alloc(t.length + e.length - 1), i = 0; i < t.length; i++)
          for (var a = 0; a < e.length; a++) n[i + a] ^= o.mul(t[i], e[a]);
        return n;
      }),
        (e.mod = function (t, e) {
          for (var n = r.from(t); n.length - e.length >= 0; ) {
            for (var i = n[0], a = 0; a < e.length; a++) n[a] ^= o.mul(e[a], i);
            for (var s = 0; s < n.length && 0 === n[s]; ) s++;
            n = n.slice(s);
          }
          return n;
        }),
        (e.generateECPolynomial = function (t) {
          for (var n = r.from([1]), i = 0; i < t; i++)
            n = e.mul(n, [1, o.exp(i)]);
          return n;
        });
    },
    1995: function (t, e, n) {
      var r = n(1083),
        o = r.alloc(512),
        i = r.alloc(256);
      !(function () {
        for (var t = 1, e = 0; e < 255; e++)
          (o[e] = t), (i[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (e = 255; e < 512; e++) o[e] = o[e - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw new Error("log(" + t + ")");
          return i[t];
        }),
        (e.exp = function (t) {
          return o[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : o[i[t] + i[e]];
        });
    },
    1996: function (t, e, n) {
      var r = n(1050),
        o = n(1434),
        i = n(1271),
        a = n(1051),
        s = n(1435),
        u = n(1270),
        c = r.getBCHDigit(7973);
      function l(t, e) {
        return a.getCharCountIndicator(t, e) + 4;
      }
      function h(t, e) {
        var n = 0;
        return (
          t.forEach(function (t) {
            var r = l(t.mode, e);
            n += r + t.getBitsLength();
          }),
          n
        );
      }
      (e.from = function (t, e) {
        return s.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, n) {
          if (!s.isValid(t)) throw new Error("Invalid QR Code version");
          "undefined" === typeof n && (n = a.BYTE);
          var i =
            8 * (r.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e));
          if (n === a.MIXED) return i;
          var u = i - l(n, t);
          switch (n) {
            case a.NUMERIC:
              return Math.floor((u / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((u / 11) * 2);
            case a.KANJI:
              return Math.floor(u / 13);
            case a.BYTE:
            default:
              return Math.floor(u / 8);
          }
        }),
        (e.getBestVersionForData = function (t, n) {
          var r,
            o = i.from(n, i.M);
          if (u(t)) {
            if (t.length > 1)
              return (function (t, n) {
                for (var r = 1; r <= 40; r++) {
                  if (h(t, r) <= e.getCapacity(r, n, a.MIXED)) return r;
                }
              })(t, o);
            if (0 === t.length) return 1;
            r = t[0];
          } else r = t;
          return (function (t, n, r) {
            for (var o = 1; o <= 40; o++)
              if (n <= e.getCapacity(o, r, t)) return o;
          })(r.mode, r.getLength(), o);
        }),
        (e.getEncodedBits = function (t) {
          if (!s.isValid(t) || t < 7)
            throw new Error("Invalid QR Code version");
          for (var e = t << 12; r.getBCHDigit(e) - c >= 0; )
            e ^= 7973 << (r.getBCHDigit(e) - c);
          return (t << 12) | e;
        });
    },
    1997: function (t, e, n) {
      var r = n(1050),
        o = r.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        for (var n = (t.bit << 3) | e, i = n << 10; r.getBCHDigit(i) - o >= 0; )
          i ^= 1335 << (r.getBCHDigit(i) - o);
        return 21522 ^ ((n << 10) | i);
      };
    },
    1998: function (t, e, n) {
      var r = n(1051),
        o = n(1999),
        i = n(2e3),
        a = n(2001),
        s = n(2002),
        u = n(1436),
        c = n(1050),
        l = n(2003);
      function h(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function f(t, e, n) {
        for (var r, o = []; null !== (r = t.exec(n)); )
          o.push({ data: r[0], index: r.index, mode: e, length: r[0].length });
        return o;
      }
      function d(t) {
        var e,
          n,
          o = f(u.NUMERIC, r.NUMERIC, t),
          i = f(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
        return (
          c.isKanjiModeEnabled()
            ? ((e = f(u.BYTE, r.BYTE, t)), (n = f(u.KANJI, r.KANJI, t)))
            : ((e = f(u.BYTE_KANJI, r.BYTE, t)), (n = [])),
          o
            .concat(i, e, n)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function p(t, e) {
        switch (e) {
          case r.NUMERIC:
            return o.getBitsLength(t);
          case r.ALPHANUMERIC:
            return i.getBitsLength(t);
          case r.KANJI:
            return s.getBitsLength(t);
          case r.BYTE:
            return a.getBitsLength(t);
        }
      }
      function v(t, e) {
        var n,
          u = r.getBestModeForData(t);
        if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit)
          throw new Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(u)
          );
        switch ((n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new o(t);
          case r.ALPHANUMERIC:
            return new i(t);
          case r.KANJI:
            return new s(t);
          case r.BYTE:
            return new a(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" === typeof e
              ? t.push(v(e, null))
              : e.data && t.push(v(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, n) {
          for (
            var o = (function (t, e) {
                for (
                  var n = {}, o = { start: {} }, i = ["start"], a = 0;
                  a < t.length;
                  a++
                ) {
                  for (var s = t[a], u = [], c = 0; c < s.length; c++) {
                    var l = s[c],
                      h = "" + a + c;
                    u.push(h), (n[h] = { node: l, lastCount: 0 }), (o[h] = {});
                    for (var f = 0; f < i.length; f++) {
                      var d = i[f];
                      n[d] && n[d].node.mode === l.mode
                        ? ((o[d][h] =
                            p(n[d].lastCount + l.length, l.mode) -
                            p(n[d].lastCount, l.mode)),
                          (n[d].lastCount += l.length))
                        : (n[d] && (n[d].lastCount = l.length),
                          (o[d][h] =
                            p(l.length, l.mode) +
                            4 +
                            r.getCharCountIndicator(l.mode, e)));
                    }
                  }
                  i = u;
                }
                for (f = 0; f < i.length; f++) o[i[f]].end = 0;
                return { map: o, table: n };
              })(
                (function (t) {
                  for (var e = [], n = 0; n < t.length; n++) {
                    var o = t[n];
                    switch (o.mode) {
                      case r.NUMERIC:
                        e.push([
                          o,
                          {
                            data: o.data,
                            mode: r.ALPHANUMERIC,
                            length: o.length,
                          },
                          { data: o.data, mode: r.BYTE, length: o.length },
                        ]);
                        break;
                      case r.ALPHANUMERIC:
                        e.push([
                          o,
                          { data: o.data, mode: r.BYTE, length: o.length },
                        ]);
                        break;
                      case r.KANJI:
                        e.push([
                          o,
                          { data: o.data, mode: r.BYTE, length: h(o.data) },
                        ]);
                        break;
                      case r.BYTE:
                        e.push([
                          { data: o.data, mode: r.BYTE, length: h(o.data) },
                        ]);
                    }
                  }
                  return e;
                })(d(t, c.isKanjiModeEnabled())),
                n
              ),
              i = l.find_path(o.map, "start", "end"),
              a = [],
              s = 1;
            s < i.length - 1;
            s++
          )
            a.push(o.table[i[s]].node);
          return e.fromArray(
            (function (t) {
              return t.reduce(function (t, e) {
                var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                return n && n.mode === e.mode
                  ? ((t[t.length - 1].data += e.data), t)
                  : (t.push(e), t);
              }, []);
            })(a)
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(d(t, c.isKanjiModeEnabled()));
        });
    },
    1999: function (t, e, n) {
      var r = n(1051);
      function o(t) {
        (this.mode = r.NUMERIC), (this.data = t.toString());
      }
      (o.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          var e, n, r;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (n = this.data.substr(e, 3)), (r = parseInt(n, 10)), t.put(r, 10);
          var o = this.data.length - e;
          o > 0 &&
            ((n = this.data.substr(e)),
            (r = parseInt(n, 10)),
            t.put(r, 3 * o + 1));
        }),
        (t.exports = o);
    },
    2e3: function (t, e, n) {
      var r = n(1051),
        o = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function i(t) {
        (this.mode = r.ALPHANUMERIC), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            var n = 45 * o.indexOf(this.data[e]);
            (n += o.indexOf(this.data[e + 1])), t.put(n, 11);
          }
          this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
        }),
        (t.exports = i);
    },
    2001: function (t, e, n) {
      var r = n(1083),
        o = n(1051);
      function i(t) {
        (this.mode = o.BYTE), (this.data = r.from(t));
      }
      (i.getBitsLength = function (t) {
        return 8 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          for (var e = 0, n = this.data.length; e < n; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = i);
    },
    2002: function (t, e, n) {
      var r = n(1051),
        o = n(1050);
      function i(t) {
        (this.mode = r.KANJI), (this.data = t);
      }
      (i.getBitsLength = function (t) {
        return 13 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          var e;
          for (e = 0; e < this.data.length; e++) {
            var n = o.toSJIS(this.data[e]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else {
              if (!(n >= 57408 && n <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[e] +
                    "\nMake sure your charset is UTF-8"
                );
              n -= 49472;
            }
            (n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13);
          }
        }),
        (t.exports = i);
    },
    2003: function (t, e, n) {
      "use strict";
      var r = {
        single_source_shortest_paths: function (t, e, n) {
          var o = {},
            i = {};
          i[e] = 0;
          var a,
            s,
            u,
            c,
            l,
            h,
            f,
            d = r.PriorityQueue.make();
          for (d.push(e, 0); !d.empty(); )
            for (u in ((s = (a = d.pop()).value),
            (c = a.cost),
            (l = t[s] || {})))
              l.hasOwnProperty(u) &&
                ((h = c + l[u]),
                (f = i[u]),
                ("undefined" === typeof i[u] || f > h) &&
                  ((i[u] = h), d.push(u, h), (o[u] = s)));
          if ("undefined" !== typeof n && "undefined" === typeof i[n]) {
            var p = ["Could not find a path from ", e, " to ", n, "."].join("");
            throw new Error(p);
          }
          return o;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var n = [], r = e; r; ) n.push(r), t[r], (r = t[r]);
          return n.reverse(), n;
        },
        find_path: function (t, e, n) {
          var o = r.single_source_shortest_paths(t, e, n);
          return r.extract_shortest_path_from_predecessor_list(o, n);
        },
        PriorityQueue: {
          make: function (t) {
            var e,
              n = r.PriorityQueue,
              o = {};
            for (e in ((t = t || {}), n)) n.hasOwnProperty(e) && (o[e] = n[e]);
            return (o.queue = []), (o.sorter = t.sorter || n.default_sorter), o;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            var n = { value: t, cost: e };
            this.queue.push(n), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = r;
    },
    2004: function (t, e, n) {
      var r = n(1437);
      (e.render = function (t, e, n) {
        var o = n,
          i = e;
        "undefined" !== typeof o ||
          (e && e.getContext) ||
          ((o = e), (e = void 0)),
          e ||
            (i = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (o = r.getOptions(o));
        var a = r.getImageWidth(t.modules.size, o),
          s = i.getContext("2d"),
          u = s.createImageData(a, a);
        return (
          r.qrToImageData(u.data, t, o),
          (function (t, e, n) {
            t.clearRect(0, 0, e.width, e.height),
              e.style || (e.style = {}),
              (e.height = n),
              (e.width = n),
              (e.style.height = n + "px"),
              (e.style.width = n + "px");
          })(s, i, a),
          s.putImageData(u, 0, 0),
          i
        );
      }),
        (e.renderToDataURL = function (t, n, r) {
          var o = r;
          "undefined" !== typeof o ||
            (n && n.getContext) ||
            ((o = n), (n = void 0)),
            o || (o = {});
          var i = e.render(t, n, o),
            a = o.type || "image/png",
            s = o.rendererOpts || {};
          return i.toDataURL(a, s.quality);
        });
    },
    2005: function (t, e, n) {
      var r = n(1437);
      function o(t, e) {
        var n = t.a / 255,
          r = e + '="' + t.hex + '"';
        return n < 1
          ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function i(t, e, n) {
        var r = t + e;
        return "undefined" !== typeof n && (r += " " + n), r;
      }
      e.render = function (t, e, n) {
        var a = r.getOptions(e),
          s = t.modules.size,
          u = t.modules.data,
          c = s + 2 * a.margin,
          l = a.color.light.a
            ? "<path " +
              o(a.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          h =
            "<path " +
            o(a.color.dark, "stroke") +
            ' d="' +
            (function (t, e, n) {
              for (var r = "", o = 0, a = !1, s = 0, u = 0; u < t.length; u++) {
                var c = Math.floor(u % e),
                  l = Math.floor(u / e);
                c || a || (a = !0),
                  t[u]
                    ? (s++,
                      (u > 0 && c > 0 && t[u - 1]) ||
                        ((r += a ? i("M", c + n, 0.5 + l + n) : i("m", o, 0)),
                        (o = 0),
                        (a = !1)),
                      (c + 1 < e && t[u + 1]) || ((r += i("h", s)), (s = 0)))
                    : o++;
              }
              return r;
            })(u, s, a.margin) +
            '"/>',
          f = 'viewBox="0 0 ' + c + " " + c + '"',
          d =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            f +
            ' shape-rendering="crispEdges">' +
            l +
            h +
            "</svg>\n";
        return "function" === typeof n && n(null, d), d;
      };
    },
    2006: function (t, e, n) {
      "use strict";
      var r = n(2007),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      t.exports = function (t, e) {
        var n,
          i,
          a,
          s,
          u,
          c,
          l = !1;
        e || (e = {}), (n = e.debug || !1);
        try {
          if (
            ((a = r()),
            (s = document.createRange()),
            (u = document.getSelection()),
            ((c = document.createElement("span")).textContent = t),
            (c.style.all = "unset"),
            (c.style.position = "fixed"),
            (c.style.top = 0),
            (c.style.clip = "rect(0, 0, 0, 0)"),
            (c.style.whiteSpace = "pre"),
            (c.style.webkitUserSelect = "text"),
            (c.style.MozUserSelect = "text"),
            (c.style.msUserSelect = "text"),
            (c.style.userSelect = "text"),
            c.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), e.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = o[e.format] || o.default;
                  window.clipboardData.setData(i, t);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(e.format, t);
              e.onCopy && (r.preventDefault(), e.onCopy(r.clipboardData));
            }),
            document.body.appendChild(c),
            s.selectNodeContents(c),
            u.addRange(s),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          l = !0;
        } catch (h) {
          n && console.error("unable to copy using execCommand: ", h),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(e.format || "text", t),
              e.onCopy && e.onCopy(window.clipboardData),
              (l = !0);
          } catch (h) {
            n && console.error("unable to copy using clipboardData: ", h),
              n && console.error("falling back to prompt"),
              (i = (function (t) {
                var e =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return t.replace(/#{\s*key\s*}/g, e);
              })(
                "message" in e ? e.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, t);
          }
        } finally {
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(s)
              : u.removeAllRanges()),
            c && document.body.removeChild(c),
            a();
        }
        return l;
      };
    },
    2007: function (t, e) {
      t.exports = function () {
        var t = document.getSelection();
        if (!t.rangeCount) return function () {};
        for (
          var e = document.activeElement, n = [], r = 0;
          r < t.rangeCount;
          r++
        )
          n.push(t.getRangeAt(r));
        switch (e.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            e.blur();
            break;
          default:
            e = null;
        }
        return (
          t.removeAllRanges(),
          function () {
            "Caret" === t.type && t.removeAllRanges(),
              t.rangeCount ||
                n.forEach(function (e) {
                  t.addRange(e);
                }),
              e && e.focus();
          }
        );
      };
    },
    2080: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {};
      n.r(r),
        n.d(r, "generateKey", function () {
          return N;
        }),
        n.d(r, "verifyHmac", function () {
          return B;
        }),
        n.d(r, "encrypt", function () {
          return U;
        }),
        n.d(r, "decrypt", function () {
          return D;
        });
      var o = n(11),
        i = n(4),
        a = n(5),
        s = n(1967),
        u = n.n(s),
        c = n(9),
        l = n(10),
        h = n(86),
        f = n(1163);
      function d() {
        d = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
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
        } catch (S) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var o = e && e.prototype instanceof h ? e : h,
            i = Object.create(o.prototype),
            a = new M(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return O();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = b(a, n);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = c(t, e, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === l)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function c(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        t.wrap = u;
        var l = {};
        function h() {}
        function f() {}
        function p() {}
        var v = {};
        s(v, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          g = m && m(m(E([])));
        g && g !== e && n.call(g, o) && (v = g);
        var y = (p.prototype = h.prototype = Object.create(v));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (r, a) {
                !(function r(o, i, a, s) {
                  var u = c(t[o], t, i);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      h = l.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? e.resolve(h.__await).then(
                          function (t) {
                            r("next", t, a, s);
                          },
                          function (t) {
                            r("throw", t, a, s);
                          }
                        )
                      : e.resolve(h).then(
                          function (t) {
                            (l.value = t), a(l);
                          },
                          function (t) {
                            return r("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(o, i, r, a);
              });
            }
            return (r = r ? r.then(a, a) : a());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = c(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function E(t) {
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
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = p),
          s(y, "constructor", p),
          s(p, "constructor", f),
          (f.displayName = s(p, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, p)
                : ((t.__proto__ = p), s(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          _(w.prototype),
          s(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          _(y),
          s(y, a, "Generator"),
          s(y, o, function () {
            return this;
          }),
          s(y, "toString", function () {
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
          (t.values = E),
          (M.prototype = {
            constructor: M,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(a)
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
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), k(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: E(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var p = (function (t) {
          Object(c.a)(n, t);
          var e = Object(l.a)(n);
          function n(t) {
            var r;
            return (
              Object(i.a)(this, n),
              ((r = e.call(this, t)).events = new h.EventEmitter()),
              (r.hasRegisteredEventListeners = !1),
              (r.connection = r.setConnection(t)),
              r.connection.connected && r.registerEventListeners(),
              r
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "connect",
                value: (function () {
                  var t = Object(o.a)(
                    d().mark(function t() {
                      var e,
                        n = arguments;
                      return d().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.connection),
                                  (t.next = 3),
                                  this.open(e)
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "disconnect",
                value: (function () {
                  var t = Object(o.a)(
                    d().mark(function t() {
                      return d().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.close();
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "request",
                value: (function () {
                  var t = Object(o.a)(
                    d().mark(function t(e, n) {
                      return d().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  this.requestStrict(
                                    Object(f.formatJsonRpcRequest)(
                                      e.method,
                                      e.params || []
                                    ),
                                    n
                                  )
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "requestStrict",
                value: (function () {
                  var t = Object(o.a)(
                    d().mark(function t(e, n) {
                      var r = this;
                      return d().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                "return",
                                new Promise(
                                  (function () {
                                    var t = Object(o.a)(
                                      d().mark(function t(o, i) {
                                        return d().wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  if (r.connection.connected) {
                                                    t.next = 9;
                                                    break;
                                                  }
                                                  return (
                                                    (t.prev = 1),
                                                    (t.next = 4),
                                                    r.open()
                                                  );
                                                case 4:
                                                  t.next = 9;
                                                  break;
                                                case 6:
                                                  (t.prev = 6),
                                                    (t.t0 = t.catch(1)),
                                                    i(t.t0);
                                                case 9:
                                                  return (
                                                    r.events.on(
                                                      "".concat(e.id),
                                                      function (t) {
                                                        Object(
                                                          f.isJsonRpcError
                                                        )(t)
                                                          ? i(t.error)
                                                          : o(t.result);
                                                      }
                                                    ),
                                                    (t.prev = 10),
                                                    (t.next = 13),
                                                    r.connection.send(e, n)
                                                  );
                                                case 13:
                                                  t.next = 18;
                                                  break;
                                                case 15:
                                                  (t.prev = 15),
                                                    (t.t1 = t.catch(10)),
                                                    i(t.t1);
                                                case 18:
                                                case "end":
                                                  return t.stop();
                                              }
                                          },
                                          t,
                                          null,
                                          [
                                            [1, 6],
                                            [10, 15],
                                          ]
                                        );
                                      })
                                    );
                                    return function (e, n) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setConnection",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.connection;
                  return t;
                },
              },
              {
                key: "onPayload",
                value: function (t) {
                  this.events.emit("payload", t),
                    Object(f.isJsonRpcResponse)(t)
                      ? this.events.emit("".concat(t.id), t)
                      : this.events.emit("message", {
                          type: t.method,
                          data: t.params,
                        });
                },
              },
              {
                key: "open",
                value: (function () {
                  var t = Object(o.a)(
                    d().mark(function t() {
                      var e,
                        n = arguments;
                      return d().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.connection),
                                  this.connection !== e ||
                                    !this.connection.connected)
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return");
                              case 3:
                                if (
                                  (this.connection.connected && this.close(),
                                  "string" !== typeof e)
                                ) {
                                  t.next = 8;
                                  break;
                                }
                                return (t.next = 7), this.connection.open(e);
                              case 7:
                                e = this.connection;
                              case 8:
                                return (
                                  (this.connection = this.setConnection(e)),
                                  (t.next = 11),
                                  this.connection.open()
                                );
                              case 11:
                                this.registerEventListeners(),
                                  this.events.emit("connect");
                              case 13:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "close",
                value: (function () {
                  var t = Object(o.a)(
                    d().mark(function t() {
                      return d().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.connection.close();
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "registerEventListeners",
                value: function () {
                  var t = this;
                  this.hasRegisteredEventListeners ||
                    (this.connection.on("payload", function (e) {
                      return t.onPayload(e);
                    }),
                    this.connection.on("close", function () {
                      return t.events.emit("disconnect");
                    }),
                    this.connection.on("error", function (e) {
                      return t.events.emit("error", e);
                    }),
                    (this.hasRegisteredEventListeners = !0));
                },
              },
            ]),
            n
          );
        })(f.IJsonRpcProvider),
        v = n(1970),
        m = n.n(v),
        g = n(1423);
      function y() {
        y = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
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
        } catch (S) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var o = e && e.prototype instanceof h ? e : h,
            i = Object.create(o.prototype),
            a = new M(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return O();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = b(a, n);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = c(t, e, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === l)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function c(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        t.wrap = u;
        var l = {};
        function h() {}
        function f() {}
        function d() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          m = v && v(v(E([])));
        m && m !== e && n.call(m, o) && (p = m);
        var g = (d.prototype = h.prototype = Object.create(p));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var r;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (r, a) {
                !(function r(o, i, a, s) {
                  var u = c(t[o], t, i);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      h = l.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? e.resolve(h.__await).then(
                          function (t) {
                            r("next", t, a, s);
                          },
                          function (t) {
                            r("throw", t, a, s);
                          }
                        )
                      : e.resolve(h).then(
                          function (t) {
                            (l.value = t), a(l);
                          },
                          function (t) {
                            return r("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(o, i, r, a);
              });
            }
            return (r = r ? r.then(a, a) : a());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = c(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function E(t) {
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
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = d),
          s(g, "constructor", d),
          s(d, "constructor", f),
          (f.displayName = s(d, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), s(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          _(w.prototype),
          s(w.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          _(g),
          s(g, a, "Generator"),
          s(g, o, function () {
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
          (t.values = E),
          (M.prototype = {
            constructor: M,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(a)
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
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), k(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: E(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var _ = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
        },
        w = (function () {
          function t(e) {
            if (
              (Object(i.a)(this, t),
              (this.url = e),
              (this.events = new h.EventEmitter()),
              (this.isAvailable = !1),
              (this.registering = !1),
              !Object(f.isHttpUrl)(e))
            )
              throw new Error(
                "Provided URL is not compatible with HTTP connection: ".concat(
                  e
                )
              );
            this.url = e;
          }
          return (
            Object(a.a)(t, [
              {
                key: "connected",
                get: function () {
                  return this.isAvailable;
                },
              },
              {
                key: "connecting",
                get: function () {
                  return this.registering;
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.events.on(t, e);
                },
              },
              {
                key: "once",
                value: function (t, e) {
                  this.events.once(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.events.off(t, e);
                },
              },
              {
                key: "removeListener",
                value: function (t, e) {
                  this.events.removeListener(t, e);
                },
              },
              {
                key: "open",
                value: (function () {
                  var t = Object(o.a)(
                    y().mark(function t() {
                      var e,
                        n = arguments;
                      return y().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e =
                                    n.length > 0 && void 0 !== n[0]
                                      ? n[0]
                                      : this.url),
                                  (t.next = 3),
                                  this.register(e)
                                );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "close",
                value: (function () {
                  var t = Object(o.a)(
                    y().mark(function t() {
                      return y().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.isAvailable) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error("Connection already closed");
                              case 2:
                                this.onClose();
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "send",
                value: (function () {
                  var t = Object(o.a)(
                    y().mark(function t(e, n) {
                      var r, o, i;
                      return y().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.isAvailable) {
                                  t.next = 3;
                                  break;
                                }
                                return (t.next = 3), this.register();
                              case 3:
                                return (
                                  (t.prev = 3),
                                  (r = Object(g.b)(e)),
                                  (t.next = 7),
                                  m()(
                                    this.url,
                                    Object.assign(Object.assign({}, _), {
                                      body: r,
                                    })
                                  )
                                );
                              case 7:
                                return (o = t.sent), (t.next = 10), o.json();
                              case 10:
                                (i = t.sent),
                                  this.onPayload({ data: i }),
                                  (t.next = 17);
                                break;
                              case 14:
                                (t.prev = 14),
                                  (t.t0 = t.catch(3)),
                                  this.onError(e.id, t.t0);
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[3, 14]]
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "register",
                value: (function () {
                  var t = Object(o.a)(
                    y().mark(function t() {
                      var e,
                        n,
                        r,
                        o = this,
                        i = arguments;
                      return y().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((e =
                                    i.length > 0 && void 0 !== i[0]
                                      ? i[0]
                                      : this.url),
                                  Object(f.isHttpUrl)(e))
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                throw new Error(
                                  "Provided URL is not compatible with HTTP connection: ".concat(
                                    e
                                  )
                                );
                              case 3:
                                if (!this.registering) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt(
                                  "return",
                                  new Promise(function (t, e) {
                                    o.events.once(
                                      "register_error",
                                      function (t) {
                                        e(t);
                                      }
                                    ),
                                      o.events.once("open", function () {
                                        if (
                                          "undefined" === typeof o.isAvailable
                                        )
                                          return e(
                                            new Error(
                                              "HTTP connection is missing or invalid"
                                            )
                                          );
                                        t();
                                      });
                                  })
                                );
                              case 5:
                                return (
                                  (this.url = e),
                                  (this.registering = !0),
                                  (t.prev = 7),
                                  (n = Object(g.b)({
                                    id: 1,
                                    jsonrpc: "2.0",
                                    method: "test",
                                    params: [],
                                  })),
                                  (t.next = 11),
                                  m()(
                                    e,
                                    Object.assign(Object.assign({}, _), {
                                      body: n,
                                    })
                                  )
                                );
                              case 11:
                                this.onOpen(), (t.next = 20);
                                break;
                              case 14:
                                throw (
                                  ((t.prev = 14),
                                  (t.t0 = t.catch(7)),
                                  (r = this.parseError(t.t0)),
                                  this.events.emit("register_error", r),
                                  this.onClose(),
                                  r)
                                );
                              case 20:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[7, 14]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "onOpen",
                value: function () {
                  (this.isAvailable = !0),
                    (this.registering = !1),
                    this.events.emit("open");
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.isAvailable = !1),
                    (this.registering = !1),
                    this.events.emit("close");
                },
              },
              {
                key: "onPayload",
                value: function (t) {
                  if ("undefined" !== typeof t.data) {
                    var e =
                      "string" === typeof t.data ? Object(g.a)(t.data) : t.data;
                    this.events.emit("payload", e);
                  }
                },
              },
              {
                key: "onError",
                value: function (t, e) {
                  var n = this.parseError(e),
                    r = n.message || n.toString(),
                    o = Object(f.formatJsonRpcError)(t, r);
                  this.events.emit("payload", o);
                },
              },
              {
                key: "parseError",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.url;
                  return Object(f.parseConnectionError)(t, e, "HTTP");
                },
              },
            ]),
            t
          );
        })(),
        b = n(1090),
        x = n(1979),
        k = n.n(x),
        M = n(69),
        E = n(1980),
        O = (function () {
          function t() {
            Object(i.a)(this, t), (this._eventEmitters = []);
          }
          return (
            Object(a.a)(t, [
              {
                key: "subscribe",
                value: function (t) {
                  this._eventEmitters.push(t);
                },
              },
              {
                key: "unsubscribe",
                value: function (t) {
                  this._eventEmitters = this._eventEmitters.filter(function (
                    e
                  ) {
                    return e.event !== t;
                  });
                },
              },
              {
                key: "trigger",
                value: function (t) {
                  var e,
                    n = [];
                  (e = Object(b.p)(t)
                    ? t.method
                    : Object(b.r)(t) || Object(b.q)(t)
                    ? "response:".concat(t.id)
                    : Object(b.o)(t)
                    ? t.event
                    : "") &&
                    (n = this._eventEmitters.filter(function (t) {
                      return t.event === e;
                    })),
                    (n && n.length) ||
                      Object(b.t)(e) ||
                      Object(b.o)(e) ||
                      (n = this._eventEmitters.filter(function (t) {
                        return "call_request" === t.event;
                      })),
                    n.forEach(function (e) {
                      if (Object(b.q)(t)) {
                        var n = new Error(t.error.message);
                        e.callback(n, null);
                      } else e.callback(null, t);
                    });
                },
              },
            ]),
            t
          );
        })(),
        S = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "walletconnect";
            Object(i.a)(this, t), (this.storageId = e);
          }
          return (
            Object(a.a)(t, [
              {
                key: "getSession",
                value: function () {
                  var t = null,
                    e = Object(b.j)(this.storageId);
                  return e && Object(b.v)(e) && (t = e), t;
                },
              },
              {
                key: "setSession",
                value: function (t) {
                  return Object(b.C)(this.storageId, t), t;
                },
              },
              {
                key: "removeSession",
                value: function () {
                  Object(b.B)(this.storageId);
                },
              },
            ]),
            t
          );
        })(),
        L = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(function (t) {
          return "https://".concat(t, ".bridge.walletconnect.org");
        });
      function j() {
        return L[Math.floor(Math.random() * L.length)];
      }
      function R() {
        R = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
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
        } catch (O) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var o = e && e.prototype instanceof h ? e : h,
            i = Object.create(o.prototype),
            a = new k(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return E();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = w(a, n);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = c(t, e, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === l)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function c(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        t.wrap = u;
        var l = {};
        function h() {}
        function f() {}
        function d() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          m = v && v(v(M([])));
        m && m !== e && n.call(m, o) && (p = m);
        var g = (d.prototype = h.prototype = Object.create(p));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(t, e) {
          var r;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (r, a) {
                !(function r(o, i, a, s) {
                  var u = c(t[o], t, i);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      h = l.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? e.resolve(h.__await).then(
                          function (t) {
                            r("next", t, a, s);
                          },
                          function (t) {
                            r("throw", t, a, s);
                          }
                        )
                      : e.resolve(h).then(
                          function (t) {
                            (l.value = t), a(l);
                          },
                          function (t) {
                            return r("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(o, i, r, a);
              });
            }
            return (r = r ? r.then(a, a) : a());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = c(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function b(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(b, this),
            this.reset(!0);
        }
        function M(t) {
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
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = d),
          s(g, "constructor", d),
          s(d, "constructor", f),
          (f.displayName = s(d, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), s(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(_.prototype),
          s(_.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = _),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          y(g),
          s(g, a, "Generator"),
          s(g, o, function () {
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
          (t.values = M),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(a)
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
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    x(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: M(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var C = (function () {
          function t(e) {
            if (
              (Object(i.a)(this, t),
              (this.protocol = "wc"),
              (this.version = 1),
              (this._bridge = ""),
              (this._key = null),
              (this._clientId = ""),
              (this._clientMeta = null),
              (this._peerId = ""),
              (this._peerMeta = null),
              (this._handshakeId = 0),
              (this._handshakeTopic = ""),
              (this._connected = !1),
              (this._accounts = []),
              (this._chainId = 0),
              (this._networkId = 0),
              (this._rpcUrl = ""),
              (this._eventManager = new O()),
              (this._clientMeta =
                Object(b.i)() || e.connectorOpts.clientMeta || null),
              (this._cryptoLib = e.cryptoLib),
              (this._sessionStorage =
                e.sessionStorage || new S(e.connectorOpts.storageId)),
              (this._qrcodeModal = e.connectorOpts.qrcodeModal),
              (this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions),
              (this._signingMethods = [].concat(
                Object(M.a)(b.D),
                Object(M.a)(e.connectorOpts.signingMethods || [])
              )),
              !e.connectorOpts.bridge &&
                !e.connectorOpts.uri &&
                !e.connectorOpts.session)
            )
              throw new Error(
                "Missing one of the required parameters: bridge / uri / session"
              );
            var n;
            e.connectorOpts.bridge &&
              (this.bridge = (function (t) {
                return (
                  "walletconnect.org" ===
                  (function (t) {
                    return (function (t) {
                      var e =
                        t.indexOf("//") > -1
                          ? t.split("/")[2]
                          : t.split("/")[0];
                      return (e = (e = e.split(":")[0]).split("?")[0]);
                    })(t)
                      .split(".")
                      .slice(-2)
                      .join(".");
                  })(t)
                );
              })((n = e.connectorOpts.bridge))
                ? j()
                : n),
              e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
            var r = e.connectorOpts.session || this._getStorageSession();
            r && (this.session = r),
              this.handshakeId &&
                this._subscribeToSessionResponse(
                  this.handshakeId,
                  "Session request rejected"
                ),
              (this._transport =
                e.transport ||
                new E.a({
                  protocol: this.protocol,
                  version: this.version,
                  url: this.bridge,
                  subscriptions: [this.clientId],
                })),
              this._subscribeToInternalEvents(),
              this._initTransport(),
              e.connectorOpts.uri && this._subscribeToSessionRequest(),
              e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
          }
          return (
            Object(a.a)(t, [
              {
                key: "bridge",
                get: function () {
                  return this._bridge;
                },
                set: function (t) {
                  t && (this._bridge = t);
                },
              },
              {
                key: "key",
                get: function () {
                  return this._key ? Object(b.c)(this._key, !0) : "";
                },
                set: function (t) {
                  if (t) {
                    var e = Object(b.e)(t);
                    this._key = e;
                  }
                },
              },
              {
                key: "clientId",
                get: function () {
                  var t = this._clientId;
                  return (
                    t || (t = this._clientId = Object(b.E)()), this._clientId
                  );
                },
                set: function (t) {
                  t && (this._clientId = t);
                },
              },
              {
                key: "peerId",
                get: function () {
                  return this._peerId;
                },
                set: function (t) {
                  t && (this._peerId = t);
                },
              },
              {
                key: "clientMeta",
                get: function () {
                  var t = this._clientMeta;
                  return t || (t = this._clientMeta = Object(b.i)()), t;
                },
                set: function (t) {},
              },
              {
                key: "peerMeta",
                get: function () {
                  return this._peerMeta;
                },
                set: function (t) {
                  this._peerMeta = t;
                },
              },
              {
                key: "handshakeTopic",
                get: function () {
                  return this._handshakeTopic;
                },
                set: function (t) {
                  t && (this._handshakeTopic = t);
                },
              },
              {
                key: "handshakeId",
                get: function () {
                  return this._handshakeId;
                },
                set: function (t) {
                  t && (this._handshakeId = t);
                },
              },
              {
                key: "uri",
                get: function () {
                  return this._formatUri();
                },
                set: function (t) {
                  if (t) {
                    var e = this._parseUri(t),
                      n = e.handshakeTopic,
                      r = e.bridge,
                      o = e.key;
                    (this.handshakeTopic = n),
                      (this.bridge = r),
                      (this.key = o);
                  }
                },
              },
              {
                key: "chainId",
                get: function () {
                  return this._chainId;
                },
                set: function (t) {
                  this._chainId = t;
                },
              },
              {
                key: "networkId",
                get: function () {
                  return this._networkId;
                },
                set: function (t) {
                  this._networkId = t;
                },
              },
              {
                key: "accounts",
                get: function () {
                  return this._accounts;
                },
                set: function (t) {
                  this._accounts = t;
                },
              },
              {
                key: "rpcUrl",
                get: function () {
                  return this._rpcUrl;
                },
                set: function (t) {
                  this._rpcUrl = t;
                },
              },
              {
                key: "connected",
                get: function () {
                  return this._connected;
                },
                set: function (t) {},
              },
              {
                key: "pending",
                get: function () {
                  return !!this._handshakeTopic;
                },
                set: function (t) {},
              },
              {
                key: "session",
                get: function () {
                  return {
                    connected: this.connected,
                    accounts: this.accounts,
                    chainId: this.chainId,
                    bridge: this.bridge,
                    key: this.key,
                    clientId: this.clientId,
                    clientMeta: this.clientMeta,
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    handshakeId: this.handshakeId,
                    handshakeTopic: this.handshakeTopic,
                  };
                },
                set: function (t) {
                  t &&
                    ((this._connected = t.connected),
                    (this.accounts = t.accounts),
                    (this.chainId = t.chainId),
                    (this.bridge = t.bridge),
                    (this.key = t.key),
                    (this.clientId = t.clientId),
                    (this.clientMeta = t.clientMeta),
                    (this.peerId = t.peerId),
                    (this.peerMeta = t.peerMeta),
                    (this.handshakeId = t.handshakeId),
                    (this.handshakeTopic = t.handshakeTopic));
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  var n = { event: t, callback: e };
                  this._eventManager.subscribe(n);
                },
              },
              {
                key: "off",
                value: function (t) {
                  this._eventManager.unsubscribe(t);
                },
              },
              {
                key: "createInstantRequest",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n,
                        r,
                        o,
                        i = this;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._generateKey();
                              case 2:
                                return (
                                  (this._key = t.sent),
                                  (n = this._formatRequest({
                                    method: "wc_instantRequest",
                                    params: [
                                      {
                                        peerId: this.clientId,
                                        peerMeta: this.clientMeta,
                                        request: this._formatRequest(e),
                                      },
                                    ],
                                  })),
                                  (this.handshakeId = n.id),
                                  (this.handshakeTopic = Object(b.E)()),
                                  this._eventManager.trigger({
                                    event: "display_uri",
                                    params: [this.uri],
                                  }),
                                  this.on("modal_closed", function () {
                                    throw new Error("User close QRCode Modal");
                                  }),
                                  (r = function () {
                                    i.killSession();
                                  }),
                                  (t.prev = 9),
                                  (t.next = 12),
                                  this._sendCallRequest(n)
                                );
                              case 12:
                                return (
                                  (o = t.sent) && r(), t.abrupt("return", o)
                                );
                              case 17:
                                throw (
                                  ((t.prev = 17),
                                  (t.t0 = t.catch(9)),
                                  r(),
                                  t.t0)
                                );
                              case 21:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[9, 17]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "connect",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n = this;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._qrcodeModal) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error("QRCode Modal not provided");
                              case 2:
                                if (!this.connected) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return", {
                                  chainId: this.chainId,
                                  accounts: this.accounts,
                                });
                              case 4:
                                return (t.next = 6), this.createSession(e);
                              case 6:
                                return t.abrupt(
                                  "return",
                                  new Promise(
                                    (function () {
                                      var t = Object(o.a)(
                                        R().mark(function t(e, r) {
                                          return R().wrap(function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  n.on(
                                                    "modal_closed",
                                                    function () {
                                                      return r(
                                                        new Error(
                                                          "User close QRCode Modal"
                                                        )
                                                      );
                                                    }
                                                  ),
                                                    n.on(
                                                      "connect",
                                                      function (t, n) {
                                                        if (t) return r(t);
                                                        e(n.params[0]);
                                                      }
                                                    );
                                                case 2:
                                                case "end":
                                                  return t.stop();
                                              }
                                          }, t);
                                        })
                                      );
                                      return function (e, n) {
                                        return t.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "createSession",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error("Session currently connected");
                              case 2:
                                if (!this.pending) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return");
                              case 4:
                                return (t.next = 6), this._generateKey();
                              case 6:
                                (this._key = t.sent),
                                  (n = this._formatRequest({
                                    method: "wc_sessionRequest",
                                    params: [
                                      {
                                        peerId: this.clientId,
                                        peerMeta: this.clientMeta,
                                        chainId:
                                          e && e.chainId ? e.chainId : null,
                                      },
                                    ],
                                  })),
                                  (this.handshakeId = n.id),
                                  (this.handshakeTopic = Object(b.E)()),
                                  this._sendSessionRequest(
                                    n,
                                    "Session update rejected",
                                    { topic: this.handshakeTopic }
                                  ),
                                  this._eventManager.trigger({
                                    event: "display_uri",
                                    params: [this.uri],
                                  });
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "approveSession",
                value: function (t) {
                  if (this._connected)
                    throw new Error("Session currently connected");
                  (this.chainId = t.chainId),
                    (this.accounts = t.accounts),
                    (this.networkId = t.networkId || 0),
                    (this.rpcUrl = t.rpcUrl || "");
                  var e = {
                      approved: !0,
                      chainId: this.chainId,
                      networkId: this.networkId,
                      accounts: this.accounts,
                      rpcUrl: this.rpcUrl,
                      peerId: this.clientId,
                      peerMeta: this.clientMeta,
                    },
                    n = { id: this.handshakeId, jsonrpc: "2.0", result: e };
                  this._sendResponse(n),
                    (this._connected = !0),
                    this._setStorageSession(),
                    this._eventManager.trigger({
                      event: "connect",
                      params: [
                        {
                          peerId: this.peerId,
                          peerMeta: this.peerMeta,
                          chainId: this.chainId,
                          accounts: this.accounts,
                        },
                      ],
                    });
                },
              },
              {
                key: "rejectSession",
                value: function (t) {
                  if (this._connected)
                    throw new Error("Session currently connected");
                  var e = t && t.message ? t.message : "Session Rejected",
                    n = this._formatResponse({
                      id: this.handshakeId,
                      error: { message: e },
                    });
                  this._sendResponse(n),
                    (this._connected = !1),
                    this._eventManager.trigger({
                      event: "disconnect",
                      params: [{ message: e }],
                    }),
                    this._removeStorageSession();
                },
              },
              {
                key: "updateSession",
                value: function (t) {
                  if (!this._connected)
                    throw new Error("Session currently disconnected");
                  (this.chainId = t.chainId),
                    (this.accounts = t.accounts),
                    (this.networkId = t.networkId || 0),
                    (this.rpcUrl = t.rpcUrl || "");
                  var e = {
                      approved: !0,
                      chainId: this.chainId,
                      networkId: this.networkId,
                      accounts: this.accounts,
                      rpcUrl: this.rpcUrl,
                    },
                    n = this._formatRequest({
                      method: "wc_sessionUpdate",
                      params: [e],
                    });
                  this._sendSessionRequest(n, "Session update rejected"),
                    this._eventManager.trigger({
                      event: "session_update",
                      params: [
                        { chainId: this.chainId, accounts: this.accounts },
                      ],
                    }),
                    this._manageStorageSession();
                },
              },
              {
                key: "killSession",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r, o;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e ? e.message : "Session Disconnected"),
                                  (r = {
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null,
                                  }),
                                  (o = this._formatRequest({
                                    method: "wc_sessionUpdate",
                                    params: [r],
                                  })),
                                  (t.next = 5),
                                  this._sendRequest(o)
                                );
                              case 5:
                                this._handleSessionDisconnect(n);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sendTransaction",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r, o;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                return (
                                  (n = Object(b.y)(e)),
                                  (r = this._formatRequest({
                                    method: "eth_sendTransaction",
                                    params: [n],
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(r)
                                );
                              case 6:
                                return (o = t.sent), t.abrupt("return", o);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signTransaction",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r, o;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                return (
                                  (n = Object(b.y)(e)),
                                  (r = this._formatRequest({
                                    method: "eth_signTransaction",
                                    params: [n],
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(r)
                                );
                              case 6:
                                return (o = t.sent), t.abrupt("return", o);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signMessage",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "eth_sign",
                                    params: e,
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signPersonalMessage",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                return (
                                  (e = Object(b.x)(e)),
                                  (n = this._formatRequest({
                                    method: "personal_sign",
                                    params: e,
                                  })),
                                  (t.next = 6),
                                  this._sendCallRequest(n)
                                );
                              case 6:
                                return (r = t.sent), t.abrupt("return", r);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "signTypedData",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "eth_signTypedData",
                                    params: e,
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "updateChain",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                return (
                                  (n = this._formatRequest({
                                    method: "wallet_updateChain",
                                    params: [e],
                                  })),
                                  (t.next = 5),
                                  this._sendCallRequest(n)
                                );
                              case 5:
                                return (r = t.sent), t.abrupt("return", r);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unsafeSend",
                value: function (t, e) {
                  var n = this;
                  return (
                    this._sendRequest(t, e),
                    this._eventManager.trigger({
                      event: "call_request_sent",
                      params: [{ request: t, options: e }],
                    }),
                    new Promise(function (e, r) {
                      n._subscribeToResponse(t.id, function (t, n) {
                        if (t) r(t);
                        else {
                          if (!n) throw new Error("Missing JSON RPC response");
                          e(n);
                        }
                      });
                    })
                  );
                },
              },
              {
                key: "sendCustomRequest",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e, n) {
                      var r, o;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this._connected) {
                                  t.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Session currently disconnected"
                                );
                              case 2:
                                (t.t0 = e.method),
                                  (t.next =
                                    "eth_accounts" === t.t0
                                      ? 5
                                      : "eth_chainId" === t.t0
                                      ? 6
                                      : "eth_sendTransaction" === t.t0 ||
                                        "eth_signTransaction" === t.t0
                                      ? 7
                                      : "personal_sign" === t.t0
                                      ? 9
                                      : 11);
                                break;
                              case 5:
                                return t.abrupt("return", this.accounts);
                              case 6:
                                return t.abrupt(
                                  "return",
                                  Object(b.f)(this.chainId)
                                );
                              case 7:
                                return (
                                  e.params &&
                                    (e.params[0] = Object(b.y)(e.params[0])),
                                  t.abrupt("break", 12)
                                );
                              case 9:
                                return (
                                  e.params &&
                                    (e.params = Object(b.x)(e.params)),
                                  t.abrupt("break", 12)
                                );
                              case 11:
                                return t.abrupt("break", 12);
                              case 12:
                                return (
                                  (r = this._formatRequest(e)),
                                  (t.next = 15),
                                  this._sendCallRequest(r, n)
                                );
                              case 15:
                                return (o = t.sent), t.abrupt("return", o);
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "approveRequest",
                value: function (t) {
                  if (!Object(b.r)(t))
                    throw new Error(
                      'JSON-RPC success response must include "result" field'
                    );
                  var e = this._formatResponse(t);
                  this._sendResponse(e);
                },
              },
              {
                key: "rejectRequest",
                value: function (t) {
                  if (!Object(b.q)(t))
                    throw new Error(
                      'JSON-RPC error response must include "error" field'
                    );
                  var e = this._formatResponse(t);
                  this._sendResponse(e);
                },
              },
              {
                key: "transportClose",
                value: function () {
                  this._transport.close();
                },
              },
              {
                key: "_sendRequest",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e, n) {
                      var r, o, i, a, s;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (r = this._formatRequest(e)),
                                  (t.next = 3),
                                  this._encrypt(r)
                                );
                              case 3:
                                (o = t.sent),
                                  (i =
                                    "undefined" !==
                                    typeof (null === n || void 0 === n
                                      ? void 0
                                      : n.topic)
                                      ? n.topic
                                      : this.peerId),
                                  (a = JSON.stringify(o)),
                                  (s =
                                    "undefined" !==
                                    typeof (null === n || void 0 === n
                                      ? void 0
                                      : n.forcePushNotification)
                                      ? !n.forcePushNotification
                                      : Object(b.u)(r)),
                                  this._transport.send(a, i, s);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendResponse",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r, o;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._encrypt(e);
                              case 2:
                                (n = t.sent),
                                  (r = this.peerId),
                                  (o = JSON.stringify(n)),
                                  !0,
                                  this._transport.send(o, r, !0);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendSessionRequest",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e, n, r) {
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                this._sendRequest(e, r),
                                  this._subscribeToSessionResponse(e.id, n);
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n, r) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_sendCallRequest",
                value: function (t, e) {
                  return (
                    this._sendRequest(t, e),
                    this._eventManager.trigger({
                      event: "call_request_sent",
                      params: [{ request: t, options: e }],
                    }),
                    this._subscribeToCallResponse(t.id)
                  );
                },
              },
              {
                key: "_formatRequest",
                value: function (t) {
                  if ("undefined" === typeof t.method)
                    throw new Error(
                      'JSON RPC request must have valid "method" value'
                    );
                  return {
                    id: "undefined" === typeof t.id ? Object(b.A)() : t.id,
                    jsonrpc: "2.0",
                    method: t.method,
                    params: "undefined" === typeof t.params ? [] : t.params,
                  };
                },
              },
              {
                key: "_formatResponse",
                value: function (t) {
                  if ("undefined" === typeof t.id)
                    throw new Error(
                      'JSON RPC request must have valid "id" value'
                    );
                  var e = { id: t.id, jsonrpc: "2.0" };
                  if (Object(b.q)(t)) {
                    var n = Object(b.h)(t.error);
                    return Object.assign(
                      Object.assign(Object.assign({}, e), t),
                      { error: n }
                    );
                  }
                  if (Object(b.r)(t))
                    return Object.assign(Object.assign({}, e), t);
                  throw new Error("JSON RPC response format is invalid");
                },
              },
              {
                key: "_handleSessionDisconnect",
                value: function (t) {
                  var e = t || "Session Disconnected";
                  this._connected ||
                    (this._qrcodeModal && this._qrcodeModal.close(),
                    Object(b.B)(b.w)),
                    this._connected && (this._connected = !1),
                    this._handshakeId && (this._handshakeId = 0),
                    this._handshakeTopic && (this._handshakeTopic = ""),
                    this._peerId && (this._peerId = ""),
                    this._eventManager.trigger({
                      event: "disconnect",
                      params: [{ message: e }],
                    }),
                    this._removeStorageSession(),
                    this.transportClose();
                },
              },
              {
                key: "_handleSessionResponse",
                value: function (t, e) {
                  e && e.approved
                    ? (this._connected
                        ? (e.chainId && (this.chainId = e.chainId),
                          e.accounts && (this.accounts = e.accounts),
                          this._eventManager.trigger({
                            event: "session_update",
                            params: [
                              {
                                chainId: this.chainId,
                                accounts: this.accounts,
                              },
                            ],
                          }))
                        : ((this._connected = !0),
                          e.chainId && (this.chainId = e.chainId),
                          e.accounts && (this.accounts = e.accounts),
                          e.peerId && !this.peerId && (this.peerId = e.peerId),
                          e.peerMeta &&
                            !this.peerMeta &&
                            (this.peerMeta = e.peerMeta),
                          this._eventManager.trigger({
                            event: "connect",
                            params: [
                              {
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts,
                              },
                            ],
                          })),
                      this._manageStorageSession())
                    : this._handleSessionDisconnect(t);
                },
              },
              {
                key: "_handleIncomingMessages",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  [this.clientId, this.handshakeTopic].includes(
                                    e.topic
                                  )
                                ) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return");
                              case 3:
                                (t.prev = 3),
                                  (n = JSON.parse(e.payload)),
                                  (t.next = 10);
                                break;
                              case 7:
                                return (
                                  (t.prev = 7),
                                  (t.t0 = t.catch(3)),
                                  t.abrupt("return")
                                );
                              case 10:
                                return (t.next = 12), this._decrypt(n);
                              case 12:
                                (r = t.sent) && this._eventManager.trigger(r);
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[3, 7]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_subscribeToSessionRequest",
                value: function () {
                  this._transport.subscribe(this.handshakeTopic);
                },
              },
              {
                key: "_subscribeToResponse",
                value: function (t, e) {
                  this.on("response:".concat(t), e);
                },
              },
              {
                key: "_subscribeToSessionResponse",
                value: function (t, e) {
                  var n = this;
                  this._subscribeToResponse(t, function (t, r) {
                    t
                      ? n._handleSessionResponse(t.message)
                      : Object(b.r)(r)
                      ? n._handleSessionResponse(e, r.result)
                      : r.error && r.error.message
                      ? n._handleSessionResponse(r.error.message)
                      : n._handleSessionResponse(e);
                  });
                },
              },
              {
                key: "_subscribeToCallResponse",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, r) {
                    e._subscribeToResponse(t, function (t, e) {
                      t
                        ? r(t)
                        : Object(b.r)(e)
                        ? n(e.result)
                        : e.error && e.error.message
                        ? r(new Error(e.error.message))
                        : r(new Error("JSON RPC response format is invalid"));
                    });
                  });
                },
              },
              {
                key: "_subscribeToInternalEvents",
                value: function () {
                  var t = this;
                  this.on("display_uri", function () {
                    t._qrcodeModal &&
                      t._qrcodeModal.open(
                        t.uri,
                        function () {
                          t._eventManager.trigger({
                            event: "modal_closed",
                            params: [],
                          });
                        },
                        t._qrcodeModalOptions
                      );
                  }),
                    this.on("connect", function () {
                      t._qrcodeModal && t._qrcodeModal.close();
                    }),
                    this.on("call_request_sent", function (e, n) {
                      var r = n.params[0].request;
                      if (
                        Object(b.s)() &&
                        t._signingMethods.includes(r.method)
                      ) {
                        var o = Object(b.j)(b.w);
                        o && (window.location.href = o.href);
                      }
                    }),
                    this.on("wc_sessionRequest", function (e, n) {
                      e &&
                        t._eventManager.trigger({
                          event: "error",
                          params: [
                            {
                              code: "SESSION_REQUEST_ERROR",
                              message: e.toString(),
                            },
                          ],
                        }),
                        (t.handshakeId = n.id),
                        (t.peerId = n.params[0].peerId),
                        (t.peerMeta = n.params[0].peerMeta);
                      var r = Object.assign(Object.assign({}, n), {
                        method: "session_request",
                      });
                      t._eventManager.trigger(r);
                    }),
                    this.on("wc_sessionUpdate", function (e, n) {
                      e && t._handleSessionResponse(e.message),
                        t._handleSessionResponse(
                          "Session disconnected",
                          n.params[0]
                        );
                    });
                },
              },
              {
                key: "_initTransport",
                value: function () {
                  var t = this;
                  this._transport.on("message", function (e) {
                    return t._handleIncomingMessages(e);
                  }),
                    this._transport.on("open", function () {
                      return t._eventManager.trigger({
                        event: "transport_open",
                        params: [],
                      });
                    }),
                    this._transport.on("close", function () {
                      return t._eventManager.trigger({
                        event: "transport_close",
                        params: [],
                      });
                    }),
                    this._transport.on("error", function () {
                      return t._eventManager.trigger({
                        event: "transport_error",
                        params: ["Websocket connection failed"],
                      });
                    }),
                    this._transport.open();
                },
              },
              {
                key: "_formatUri",
                value: function () {
                  var t = this.protocol,
                    e = this.handshakeTopic,
                    n = this.version,
                    r = encodeURIComponent(this.bridge),
                    o = this.key;
                  return ""
                    .concat(t, ":")
                    .concat(e, "@")
                    .concat(n, "?bridge=")
                    .concat(r, "&key=")
                    .concat(o);
                },
              },
              {
                key: "_parseUri",
                value: function (t) {
                  var e = Object(b.z)(t);
                  if (e.protocol === this.protocol) {
                    if (!e.handshakeTopic)
                      throw Error(
                        "Invalid or missing handshakeTopic parameter value"
                      );
                    var n = e.handshakeTopic;
                    if (!e.bridge)
                      throw Error(
                        "Invalid or missing bridge url parameter value"
                      );
                    var r = decodeURIComponent(e.bridge);
                    if (!e.key)
                      throw Error("Invalid or missing key parameter value");
                    return { handshakeTopic: n, bridge: r, key: e.key };
                  }
                  throw new Error("URI format is invalid");
                },
              },
              {
                key: "_generateKey",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t() {
                      var e;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._cryptoLib) {
                                  t.next = 5;
                                  break;
                                }
                                return (
                                  (t.next = 3), this._cryptoLib.generateKey()
                                );
                              case 3:
                                return (e = t.sent), t.abrupt("return", e);
                              case 5:
                                return t.abrupt("return", null);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_encrypt",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((n = this._key), !this._cryptoLib || !n)) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  (t.next = 4), this._cryptoLib.encrypt(e, n)
                                );
                              case 4:
                                return (r = t.sent), t.abrupt("return", r);
                              case 6:
                                return t.abrupt("return", null);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_decrypt",
                value: (function () {
                  var t = Object(o.a)(
                    R().mark(function t(e) {
                      var n, r;
                      return R().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((n = this._key), !this._cryptoLib || !n)) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  (t.next = 4), this._cryptoLib.decrypt(e, n)
                                );
                              case 4:
                                return (r = t.sent), t.abrupt("return", r);
                              case 6:
                                return t.abrupt("return", null);
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getStorageSession",
                value: function () {
                  var t = null;
                  return (
                    this._sessionStorage &&
                      (t = this._sessionStorage.getSession()),
                    t
                  );
                },
              },
              {
                key: "_setStorageSession",
                value: function () {
                  this._sessionStorage &&
                    this._sessionStorage.setSession(this.session);
                },
              },
              {
                key: "_removeStorageSession",
                value: function () {
                  this._sessionStorage && this._sessionStorage.removeSession();
                },
              },
              {
                key: "_manageStorageSession",
                value: function () {
                  this._connected
                    ? this._setStorageSession()
                    : this._removeStorageSession();
                },
              },
              {
                key: "_registerPushServer",
                value: function (t) {
                  if (!t.url || "string" !== typeof t.url)
                    throw Error(
                      "Invalid or missing pushServerOpts.url parameter value"
                    );
                  if (!t.type || "string" !== typeof t.type)
                    throw Error(
                      "Invalid or missing pushServerOpts.type parameter value"
                    );
                  if (!t.token || "string" !== typeof t.token)
                    throw Error(
                      "Invalid or missing pushServerOpts.token parameter value"
                    );
                  var e = {
                    bridge: this.bridge,
                    topic: this.clientId,
                    type: t.type,
                    token: t.token,
                    peerName: "",
                    language: t.language || "",
                  };
                  this.on(
                    "connect",
                    (function () {
                      var n = Object(o.a)(
                        R().mark(function n(r, o) {
                          var i, a;
                          return R().wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    if (!r) {
                                      n.next = 2;
                                      break;
                                    }
                                    throw r;
                                  case 2:
                                    return (
                                      t.peerMeta &&
                                        ((i = o.params[0].peerMeta.name),
                                        (e.peerName = i)),
                                      (n.prev = 3),
                                      (n.next = 6),
                                      fetch("".concat(t.url, "/new"), {
                                        method: "POST",
                                        headers: {
                                          Accept: "application/json",
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(e),
                                      })
                                    );
                                  case 6:
                                    return (a = n.sent), (n.next = 9), a.json();
                                  case 9:
                                    if (n.sent.success) {
                                      n.next = 12;
                                      break;
                                    }
                                    throw Error(
                                      "Failed to register in Push Server"
                                    );
                                  case 12:
                                    n.next = 17;
                                    break;
                                  case 14:
                                    throw (
                                      ((n.prev = 14),
                                      (n.t0 = n.catch(3)),
                                      Error(
                                        "Failed to register in Push Server"
                                      ))
                                    );
                                  case 17:
                                  case "end":
                                    return n.stop();
                                }
                            },
                            n,
                            null,
                            [[3, 14]]
                          );
                        })
                      );
                      return function (t, e) {
                        return n.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
            ]),
            t
          );
        })(),
        T = n(1983),
        I = n(1119);
      function A() {
        A = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
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
        } catch (O) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var o = e && e.prototype instanceof h ? e : h,
            i = Object.create(o.prototype),
            a = new k(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return E();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = w(a, n);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = c(t, e, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === l)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function c(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        t.wrap = u;
        var l = {};
        function h() {}
        function f() {}
        function d() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          m = v && v(v(M([])));
        m && m !== e && n.call(m, o) && (p = m);
        var g = (d.prototype = h.prototype = Object.create(p));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(t, e) {
          var r;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (r, a) {
                !(function r(o, i, a, s) {
                  var u = c(t[o], t, i);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      h = l.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? e.resolve(h.__await).then(
                          function (t) {
                            r("next", t, a, s);
                          },
                          function (t) {
                            r("throw", t, a, s);
                          }
                        )
                      : e.resolve(h).then(
                          function (t) {
                            (l.value = t), a(l);
                          },
                          function (t) {
                            return r("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(o, i, r, a);
              });
            }
            return (r = r ? r.then(a, a) : a());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = c(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function b(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(b, this),
            this.reset(!0);
        }
        function M(t) {
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
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = d),
          s(g, "constructor", d),
          s(d, "constructor", f),
          (f.displayName = s(d, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), s(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(_.prototype),
          s(_.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = _),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          y(g),
          s(g, a, "Generator"),
          s(g, o, function () {
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
          (t.values = M),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(a)
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
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    x(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: M(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      function N(t) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = Object(o.a)(
          A().mark(function t(e) {
            var n, r, o;
            return A().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = (e || 256) / 8),
                      (r = T.randomBytes(n)),
                      (o = Object(b.d)(I.arrayToBuffer(r))),
                      t.abrupt("return", o)
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function B(t, e) {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = Object(o.a)(
          A().mark(function t(e, n) {
            var r, o, i, a, s, u, c;
            return A().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = I.hexToArray(e.data)),
                      (o = I.hexToArray(e.iv)),
                      (i = I.hexToArray(e.hmac)),
                      (a = I.arrayToHex(i, !1)),
                      (s = I.concatArrays(r, o)),
                      (t.next = 7),
                      T.hmacSha256Sign(n, s)
                    );
                  case 7:
                    if (
                      ((u = t.sent),
                      (c = I.arrayToHex(u, !1)),
                      I.removeHexPrefix(a) !== I.removeHexPrefix(c))
                    ) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt("return", !0);
                  case 11:
                    return t.abrupt("return", !1);
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function U(t, e, n) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = Object(o.a)(
          A().mark(function t(e, n, r) {
            var o, i, a, s, u, c, l, h, f, d, p;
            return A().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((o = I.bufferToArray(Object(b.b)(n))), (t.t0 = r), t.t0)
                    ) {
                      t.next = 6;
                      break;
                    }
                    return (t.next = 5), N(128);
                  case 5:
                    t.t0 = t.sent;
                  case 6:
                    return (
                      (i = t.t0),
                      (a = I.bufferToArray(Object(b.b)(i))),
                      (s = I.arrayToHex(a, !1)),
                      (u = JSON.stringify(e)),
                      (c = I.utf8ToArray(u)),
                      (t.next = 13),
                      T.aesCbcEncrypt(a, o, c)
                    );
                  case 13:
                    return (
                      (l = t.sent),
                      (h = I.arrayToHex(l, !1)),
                      (f = I.concatArrays(l, a)),
                      (t.next = 18),
                      T.hmacSha256Sign(o, f)
                    );
                  case 18:
                    return (
                      (d = t.sent),
                      (p = I.arrayToHex(d, !1)),
                      t.abrupt("return", { data: h, hmac: p, iv: s })
                    );
                  case 21:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function D(t, e) {
        return H.apply(this, arguments);
      }
      function H() {
        return (H = Object(o.a)(
          A().mark(function t(e, n) {
            var r, o, i, a, s, u;
            return A().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((r = I.bufferToArray(Object(b.b)(n)))) {
                        t.next = 3;
                        break;
                      }
                      throw new Error("Missing key: required for decryption");
                    case 3:
                      return (t.next = 5), B(e, r);
                    case 5:
                      if (t.sent) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 8:
                      return (
                        (o = I.hexToArray(e.data)),
                        (i = I.hexToArray(e.iv)),
                        (t.next = 12),
                        T.aesCbcDecrypt(i, r, o)
                      );
                    case 12:
                      (a = t.sent),
                        (s = I.arrayToUtf8(a)),
                        (t.prev = 14),
                        (u = JSON.parse(s)),
                        (t.next = 21);
                      break;
                    case 18:
                      return (
                        (t.prev = 18),
                        (t.t0 = t.catch(14)),
                        t.abrupt("return", null)
                      );
                    case 21:
                      return t.abrupt("return", u);
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[14, 18]]
            );
          })
        )).apply(this, arguments);
      }
      var J = (function (t) {
          Object(c.a)(n, t);
          var e = Object(l.a)(n);
          function n(t, o) {
            return (
              Object(i.a)(this, n),
              e.call(this, {
                cryptoLib: r,
                connectorOpts: t,
                pushServerOpts: o,
              })
            );
          }
          return Object(a.a)(n);
        })(C),
        z = n(1984),
        W = n.n(z);
      function G() {
        G = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
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
        } catch (O) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var o = e && e.prototype instanceof h ? e : h,
            i = Object.create(o.prototype),
            a = new k(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return E();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = w(a, n);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = c(t, e, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === l)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function c(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        t.wrap = u;
        var l = {};
        function h() {}
        function f() {}
        function d() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          m = v && v(v(M([])));
        m && m !== e && n.call(m, o) && (p = m);
        var g = (d.prototype = h.prototype = Object.create(p));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(t, e) {
          var r;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (r, a) {
                !(function r(o, i, a, s) {
                  var u = c(t[o], t, i);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      h = l.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? e.resolve(h.__await).then(
                          function (t) {
                            r("next", t, a, s);
                          },
                          function (t) {
                            r("throw", t, a, s);
                          }
                        )
                      : e.resolve(h).then(
                          function (t) {
                            (l.value = t), a(l);
                          },
                          function (t) {
                            return r("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(o, i, r, a);
              });
            }
            return (r = r ? r.then(a, a) : a());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = c(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function b(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(b, this),
            this.reset(!0);
        }
        function M(t) {
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
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = d),
          s(g, "constructor", d),
          s(d, "constructor", f),
          (f.displayName = s(d, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), s(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(_.prototype),
          s(_.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = _),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          y(g),
          s(g, a, "Generator"),
          s(g, o, function () {
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
          (t.values = M),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(a)
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
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    x(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: M(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var Y = (function (t) {
        Object(c.a)(n, t);
        var e = Object(l.a)(n);
        function n(t) {
          var r;
          return (
            Object(i.a)(this, n),
            ((r = e.call(this)).events = new k.a()),
            (r.accounts = []),
            (r.chainId = 1),
            (r.pending = !1),
            (r.bridge = "https://bridge.walletconnect.org"),
            (r.qrcode = !0),
            (r.qrcodeModalOptions = void 0),
            (r.opts = t),
            (r.chainId =
              (null === t || void 0 === t ? void 0 : t.chainId) || r.chainId),
            (r.wc = r.register(t)),
            r
          );
        }
        return (
          Object(a.a)(n, [
            {
              key: "connected",
              get: function () {
                return "undefined" !== typeof this.wc && this.wc.connected;
              },
            },
            {
              key: "connecting",
              get: function () {
                return this.pending;
              },
            },
            {
              key: "connector",
              get: function () {
                return (this.wc = this.register(this.opts)), this.wc;
              },
            },
            {
              key: "on",
              value: function (t, e) {
                this.events.on(t, e);
              },
            },
            {
              key: "once",
              value: function (t, e) {
                this.events.once(t, e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                this.events.off(t, e);
              },
            },
            {
              key: "removeListener",
              value: function (t, e) {
                this.events.removeListener(t, e);
              },
            },
            {
              key: "open",
              value: (function () {
                var t = Object(o.a)(
                  G().mark(function t(e) {
                    var n = this;
                    return G().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!this.connected) {
                                t.next = 3;
                                break;
                              }
                              return this.onOpen(), t.abrupt("return");
                            case 3:
                              return t.abrupt(
                                "return",
                                new Promise(function (t, r) {
                                  n.on("error", function (t) {
                                    r(t);
                                  }),
                                    n.on("open", function () {
                                      t();
                                    }),
                                    n.create(e);
                                })
                              );
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "close",
              value: (function () {
                var t = Object(o.a)(
                  G().mark(function t() {
                    return G().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ("undefined" !== typeof this.wc) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return");
                            case 2:
                              this.wc.connected && this.wc.killSession(),
                                this.onClose();
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "send",
              value: (function () {
                var t = Object(o.a)(
                  G().mark(function t(e) {
                    var n = this;
                    return G().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((this.wc = this.register(this.opts)),
                                this.connected)
                              ) {
                                t.next = 4;
                                break;
                              }
                              return (t.next = 4), this.open();
                            case 4:
                              this.sendPayload(e)
                                .then(function (t) {
                                  return n.events.emit("payload", t);
                                })
                                .catch(function (t) {
                                  return n.events.emit(
                                    "payload",
                                    Object(f.formatJsonRpcError)(
                                      e.id,
                                      t.message
                                    )
                                  );
                                });
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "register",
              value: function (t) {
                if (this.wc) return this.wc;
                (this.opts = t || this.opts),
                  (this.bridge = (
                    null === t || void 0 === t ? void 0 : t.connector
                  )
                    ? t.connector.bridge
                    : (null === t || void 0 === t ? void 0 : t.bridge) ||
                      "https://bridge.walletconnect.org"),
                  (this.qrcode =
                    "undefined" ===
                      typeof (null === t || void 0 === t ? void 0 : t.qrcode) ||
                    !1 !== t.qrcode),
                  (this.chainId =
                    "undefined" !==
                    typeof (null === t || void 0 === t ? void 0 : t.chainId)
                      ? t.chainId
                      : this.chainId),
                  (this.qrcodeModalOptions =
                    null === t || void 0 === t ? void 0 : t.qrcodeModalOptions);
                var e = {
                  bridge: this.bridge,
                  qrcodeModal: this.qrcode ? W.a : void 0,
                  qrcodeModalOptions: this.qrcodeModalOptions,
                  storageId: null === t || void 0 === t ? void 0 : t.storageId,
                  signingMethods:
                    null === t || void 0 === t ? void 0 : t.signingMethods,
                  clientMeta:
                    null === t || void 0 === t ? void 0 : t.clientMeta,
                };
                if (
                  ((this.wc =
                    "undefined" !==
                    typeof (null === t || void 0 === t ? void 0 : t.connector)
                      ? t.connector
                      : new J(e)),
                  "undefined" === typeof this.wc)
                )
                  throw new Error("Failed to register WalletConnect connector");
                return (
                  this.wc.accounts.length && (this.accounts = this.wc.accounts),
                  this.wc.chainId && (this.chainId = this.wc.chainId),
                  this.registerConnectorEvents(),
                  this.wc
                );
              },
            },
            {
              key: "onOpen",
              value: function (t) {
                (this.pending = !1),
                  t && (this.wc = t),
                  this.events.emit("open");
              },
            },
            {
              key: "onClose",
              value: function () {
                (this.pending = !1),
                  this.wc && (this.wc = void 0),
                  this.events.emit("close");
              },
            },
            {
              key: "onError",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "Failed or Rejected Request",
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : -32e3,
                  r = {
                    id: t.id,
                    jsonrpc: t.jsonrpc,
                    error: { code: n, message: e },
                  };
                return this.events.emit("payload", r), r;
              },
            },
            {
              key: "create",
              value: function (t) {
                var e = this;
                (this.wc = this.register(this.opts)),
                  (this.chainId = t || this.chainId),
                  this.connected ||
                    this.pending ||
                    ((this.pending = !0),
                    this.registerConnectorEvents(),
                    this.wc
                      .createSession({ chainId: this.chainId })
                      .then(function () {
                        return e.events.emit("created");
                      })
                      .catch(function (t) {
                        return e.events.emit("error", t);
                      }));
              },
            },
            {
              key: "registerConnectorEvents",
              value: function () {
                var t = this;
                (this.wc = this.register(this.opts)),
                  this.wc.on("connect", function (e) {
                    var n, r;
                    e
                      ? t.events.emit("error", e)
                      : ((t.accounts =
                          (null === (n = t.wc) || void 0 === n
                            ? void 0
                            : n.accounts) || []),
                        (t.chainId =
                          (null === (r = t.wc) || void 0 === r
                            ? void 0
                            : r.chainId) || t.chainId),
                        t.onOpen());
                  }),
                  this.wc.on("disconnect", function (e) {
                    e ? t.events.emit("error", e) : t.onClose();
                  }),
                  this.wc.on("modal_closed", function () {
                    t.events.emit("error", new Error("User closed modal"));
                  }),
                  this.wc.on("session_update", function (e, n) {
                    var r = n.params[0],
                      o = r.accounts,
                      i = r.chainId;
                    (!t.accounts || (o && t.accounts !== o)) &&
                      ((t.accounts = o), t.events.emit("accountsChanged", o)),
                      (!t.chainId || (i && t.chainId !== i)) &&
                        ((t.chainId = i), t.events.emit("chainChanged", i));
                  });
              },
            },
            {
              key: "sendPayload",
              value: (function () {
                var t = Object(o.a)(
                  G().mark(function t(e) {
                    var n;
                    return G().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.wc = this.register(this.opts)),
                                (t.prev = 1),
                                (t.next = 4),
                                this.wc.unsafeSend(e)
                              );
                            case 4:
                              return (
                                (n = t.sent),
                                t.abrupt("return", this.sanitizeResponse(n))
                              );
                            case 8:
                              return (
                                (t.prev = 8),
                                (t.t0 = t.catch(1)),
                                t.abrupt(
                                  "return",
                                  this.onError(e, t.t0.message)
                                )
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
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "sanitizeResponse",
              value: function (t) {
                return "undefined" !== typeof t.error &&
                  "undefined" === typeof t.error.code
                  ? Object(f.formatJsonRpcError)(t.id, t.error.message)
                  : t;
              },
            },
          ]),
          n
        );
      })(n(1266).IJsonRpcConnection);
      function K() {
        K = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
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
        } catch (O) {
          s = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var o = e && e.prototype instanceof h ? e : h,
            i = Object.create(o.prototype),
            a = new k(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return E();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = w(a, n);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = c(t, e, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === l)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function c(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        t.wrap = u;
        var l = {};
        function h() {}
        function f() {}
        function d() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          m = v && v(v(M([])));
        m && m !== e && n.call(m, o) && (p = m);
        var g = (d.prototype = h.prototype = Object.create(p));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(t, e) {
          var r;
          this._invoke = function (o, i) {
            function a() {
              return new e(function (r, a) {
                !(function r(o, i, a, s) {
                  var u = c(t[o], t, i);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      h = l.value;
                    return h && "object" == typeof h && n.call(h, "__await")
                      ? e.resolve(h.__await).then(
                          function (t) {
                            r("next", t, a, s);
                          },
                          function (t) {
                            r("throw", t, a, s);
                          }
                        )
                      : e.resolve(h).then(
                          function (t) {
                            (l.value = t), a(l);
                          },
                          function (t) {
                            return r("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                })(o, i, r, a);
              });
            }
            return (r = r ? r.then(a, a) : a());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = c(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function b(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(b, this),
            this.reset(!0);
        }
        function M(t) {
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
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = d),
          s(g, "constructor", d),
          s(d, "constructor", f),
          (f.displayName = s(d, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), s(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(_.prototype),
          s(_.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = _),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          y(g),
          s(g, a, "Generator"),
          s(g, o, function () {
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
          (t.values = M),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
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
                  (a.type = "throw"),
                  (a.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
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
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(a)
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
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    x(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: M(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var V = (function () {
        function t(e) {
          Object(i.a)(this, t),
            (this.events = new u.a()),
            (this.rpc = {
              infuraId: null === e || void 0 === e ? void 0 : e.infuraId,
              custom: null === e || void 0 === e ? void 0 : e.rpc,
            }),
            (this.signer = new p(new Y(e)));
          var n =
            this.signer.connection.chainId ||
            (null === e || void 0 === e ? void 0 : e.chainId) ||
            1;
          (this.http = this.setHttpProvider(n)), this.registerEventListeners();
        }
        return (
          Object(a.a)(t, [
            {
              key: "connected",
              get: function () {
                return this.signer.connection.connected;
              },
            },
            {
              key: "connector",
              get: function () {
                return this.signer.connection.connector;
              },
            },
            {
              key: "accounts",
              get: function () {
                return this.signer.connection.accounts;
              },
            },
            {
              key: "chainId",
              get: function () {
                return this.signer.connection.chainId;
              },
            },
            {
              key: "rpcUrl",
              get: function () {
                var t;
                return (
                  (null === (t = this.http) || void 0 === t
                    ? void 0
                    : t.connection
                  ).url || ""
                );
              },
            },
            {
              key: "request",
              value: (function () {
                var t = Object(o.a)(
                  K().mark(function t(e) {
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (t.t0 = e.method),
                                (t.next =
                                  "eth_requestAccounts" === t.t0
                                    ? 3
                                    : "eth_accounts" === t.t0
                                    ? 6
                                    : "eth_chainId" === t.t0
                                    ? 7
                                    : 8);
                              break;
                            case 3:
                              return (t.next = 5), this.connect();
                            case 5:
                            case 6:
                              return t.abrupt(
                                "return",
                                this.signer.connection.accounts
                              );
                            case 7:
                              return t.abrupt(
                                "return",
                                this.signer.connection.chainId
                              );
                            case 8:
                              return t.abrupt("break", 9);
                            case 9:
                              if (!b.D.includes(e.method)) {
                                t.next = 11;
                                break;
                              }
                              return t.abrupt("return", this.signer.request(e));
                            case 11:
                              if ("undefined" !== typeof this.http) {
                                t.next = 13;
                                break;
                              }
                              throw new Error(
                                "Cannot request JSON-RPC method (".concat(
                                  e.method,
                                  ") without provided rpc url"
                                )
                              );
                            case 13:
                              return t.abrupt("return", this.http.request(e));
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "sendAsync",
              value: function (t, e) {
                this.request(t)
                  .then(function (t) {
                    return e(null, t);
                  })
                  .catch(function (t) {
                    return e(t, void 0);
                  });
              },
            },
            {
              key: "enable",
              value: (function () {
                var t = Object(o.a)(
                  K().mark(function t() {
                    var e;
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                this.request({ method: "eth_requestAccounts" })
                              );
                            case 2:
                              return (e = t.sent), t.abrupt("return", e);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "connect",
              value: (function () {
                var t = Object(o.a)(
                  K().mark(function t() {
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this.signer.connection.connected) {
                                t.next = 3;
                                break;
                              }
                              return (t.next = 3), this.signer.connect();
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "disconnect",
              value: (function () {
                var t = Object(o.a)(
                  K().mark(function t() {
                    return K().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!this.signer.connection.connected) {
                                t.next = 3;
                                break;
                              }
                              return (t.next = 3), this.signer.disconnect();
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "on",
              value: function (t, e) {
                this.events.on(t, e);
              },
            },
            {
              key: "once",
              value: function (t, e) {
                this.events.once(t, e);
              },
            },
            {
              key: "removeListener",
              value: function (t, e) {
                this.events.removeListener(t, e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                this.events.off(t, e);
              },
            },
            {
              key: "isWalletConnect",
              get: function () {
                return !0;
              },
            },
            {
              key: "registerEventListeners",
              value: function () {
                var t = this;
                this.signer.connection.on("accountsChanged", function (e) {
                  t.events.emit("accountsChanged", e);
                }),
                  this.signer.connection.on("chainChanged", function (e) {
                    (t.http = t.setHttpProvider(e)),
                      t.events.emit("chainChanged", e);
                  }),
                  this.signer.on("disconnect", function () {
                    t.events.emit("disconnect");
                  });
              },
            },
            {
              key: "setHttpProvider",
              value: function (t) {
                var e = Object(b.m)(t, this.rpc);
                if ("undefined" !== typeof e) return new p(new w(e));
              },
            },
          ]),
          t
        );
      })();
      e.default = V;
    },
    2083: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "useState", function () {
          return V;
        }),
        n.d(e, "useReducer", function () {
          return Q;
        }),
        n.d(e, "useEffect", function () {
          return Z;
        }),
        n.d(e, "useLayoutEffect", function () {
          return $;
        }),
        n.d(e, "useRef", function () {
          return X;
        }),
        n.d(e, "useImperativeHandle", function () {
          return tt;
        }),
        n.d(e, "useMemo", function () {
          return et;
        }),
        n.d(e, "useCallback", function () {
          return nt;
        }),
        n.d(e, "useContext", function () {
          return rt;
        }),
        n.d(e, "useDebugValue", function () {
          return ot;
        }),
        n.d(e, "useErrorBoundary", function () {
          return it;
        }),
        n.d(e, "createElement", function () {
          return v;
        }),
        n.d(e, "createContext", function () {
          return q;
        }),
        n.d(e, "createRef", function () {
          return g;
        }),
        n.d(e, "Fragment", function () {
          return y;
        }),
        n.d(e, "Component", function () {
          return _;
        }),
        n.d(e, "version", function () {
          return Bt;
        }),
        n.d(e, "Children", function () {
          return yt;
        }),
        n.d(e, "render", function () {
          return Ct;
        }),
        n.d(e, "hydrate", function () {
          return Tt;
        }),
        n.d(e, "unmountComponentAtNode", function () {
          return Dt;
        }),
        n.d(e, "createPortal", function () {
          return Lt;
        }),
        n.d(e, "createFactory", function () {
          return qt;
        }),
        n.d(e, "cloneElement", function () {
          return Ft;
        }),
        n.d(e, "isValidElement", function () {
          return Ut;
        }),
        n.d(e, "findDOMNode", function () {
          return Ht;
        }),
        n.d(e, "PureComponent", function () {
          return dt;
        }),
        n.d(e, "memo", function () {
          return pt;
        }),
        n.d(e, "forwardRef", function () {
          return mt;
        }),
        n.d(e, "unstable_batchedUpdates", function () {
          return Jt;
        }),
        n.d(e, "Suspense", function () {
          return bt;
        }),
        n.d(e, "SuspenseList", function () {
          return Mt;
        }),
        n.d(e, "lazy", function () {
          return kt;
        });
      var r,
        o,
        i,
        a,
        s,
        u,
        c,
        l = {},
        h = [],
        f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function d(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function p(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function v(t, e, n) {
        var r,
          o = arguments,
          i = {};
        for (r in e) "key" !== r && "ref" !== r && (i[r] = e[r]);
        if (arguments.length > 3)
          for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
        if (
          (null != n && (i.children = n),
          "function" == typeof t && null != t.defaultProps)
        )
          for (r in t.defaultProps)
            void 0 === i[r] && (i[r] = t.defaultProps[r]);
        return m(t, i, e && e.key, e && e.ref, null);
      }
      function m(t, e, n, o, i) {
        var a = {
          type: t,
          props: e,
          key: n,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: i,
        };
        return null == i && (a.__v = a), r.vnode && r.vnode(a), a;
      }
      function g() {
        return {};
      }
      function y(t) {
        return t.children;
      }
      function _(t, e) {
        (this.props = t), (this.context = e);
      }
      function w(t, e) {
        if (null == e) return t.__ ? w(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? w(t) : null;
      }
      function b(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return b(t);
        }
      }
      function x(t) {
        ((!t.__d && (t.__d = !0) && o.push(t) && !i++) ||
          s !== r.debounceRendering) &&
          ((s = r.debounceRendering) || a)(k);
      }
      function k() {
        for (var t; (i = o.length); )
          (t = o.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (o = []),
            t.some(function (t) {
              var e, n, r, o, i, a, s;
              t.__d &&
                ((a = (i = (e = t).__v).__e),
                (s = e.__P) &&
                  ((n = []),
                  ((r = d({}, i)).__v = r),
                  (o = j(
                    s,
                    i,
                    r,
                    e.__n,
                    void 0 !== s.ownerSVGElement,
                    null,
                    n,
                    null == a ? w(i) : a
                  )),
                  R(n, i),
                  o != a && b(i)));
            });
      }
      function M(t, e, n, r, o, i, a, s, u) {
        var c,
          f,
          d,
          v,
          m,
          g,
          y,
          _ = (n && n.__k) || h,
          b = _.length;
        if (
          (s == l && (s = null != i ? i[0] : b ? w(n, 0) : null),
          (c = 0),
          (e.__k = E(e.__k, function (n) {
            if (null != n) {
              if (
                ((n.__ = e),
                (n.__b = e.__b + 1),
                null === (d = _[c]) ||
                  (d && n.key == d.key && n.type === d.type))
              )
                _[c] = void 0;
              else
                for (f = 0; f < b; f++) {
                  if ((d = _[f]) && n.key == d.key && n.type === d.type) {
                    _[f] = void 0;
                    break;
                  }
                  d = null;
                }
              if (
                ((v = j(t, n, (d = d || l), r, o, i, a, s, u)),
                (f = n.ref) &&
                  d.ref != f &&
                  (y || (y = []),
                  d.ref && y.push(d.ref, null, n),
                  y.push(f, n.__c || v, n)),
                null != v)
              ) {
                var h;
                if ((null == g && (g = v), void 0 !== n.__d))
                  (h = n.__d), (n.__d = void 0);
                else if (i == d || v != s || null == v.parentNode) {
                  t: if (null == s || s.parentNode !== t)
                    t.appendChild(v), (h = null);
                  else {
                    for (m = s, f = 0; (m = m.nextSibling) && f < b; f += 2)
                      if (m == v) break t;
                    t.insertBefore(v, s), (h = s);
                  }
                  "option" == e.type && (t.value = "");
                }
                (s = void 0 !== h ? h : v.nextSibling),
                  "function" == typeof e.type && (e.__d = s);
              } else s && d.__e == s && s.parentNode != t && (s = w(d));
            }
            return c++, n;
          })),
          (e.__e = g),
          null != i && "function" != typeof e.type)
        )
          for (c = i.length; c--; ) null != i[c] && p(i[c]);
        for (c = b; c--; ) null != _[c] && I(_[c], _[c]);
        if (y) for (c = 0; c < y.length; c++) T(y[c], y[++c], y[++c]);
      }
      function E(t, e, n) {
        if ((null == n && (n = []), null == t || "boolean" == typeof t))
          e && n.push(e(null));
        else if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) E(t[r], e, n);
        else
          n.push(
            e
              ? e(
                  "string" == typeof t || "number" == typeof t
                    ? m(null, t, null, null, t)
                    : null != t.__e || null != t.__c
                    ? m(t.type, t.props, t.key, null, t.__v)
                    : t
                )
              : t
          );
        return n;
      }
      function O(t, e, n) {
        "-" === e[0]
          ? t.setProperty(e, n)
          : (t[e] =
              "number" == typeof n && !1 === f.test(e)
                ? n + "px"
                : null == n
                ? ""
                : n);
      }
      function S(t, e, n, r, o) {
        var i, a, s, u, c;
        if (
          (o
            ? "className" === e && (e = "class")
            : "class" === e && (e = "className"),
          "style" === e)
        )
          if (((i = t.style), "string" == typeof n)) i.cssText = n;
          else {
            if (("string" == typeof r && ((i.cssText = ""), (r = null)), r))
              for (u in r) (n && u in n) || O(i, u, "");
            if (n) for (c in n) (r && n[c] === r[c]) || O(i, c, n[c]);
          }
        else
          "o" === e[0] && "n" === e[1]
            ? ((a = e !== (e = e.replace(/Capture$/, ""))),
              (s = e.toLowerCase()),
              (e = (s in t ? s : e).slice(2)),
              n
                ? (r || t.addEventListener(e, L, a),
                  ((t.l || (t.l = {}))[e] = n))
                : t.removeEventListener(e, L, a))
            : "list" !== e &&
              "tagName" !== e &&
              "form" !== e &&
              "type" !== e &&
              "size" !== e &&
              !o &&
              e in t
            ? (t[e] = null == n ? "" : n)
            : "function" != typeof n &&
              "dangerouslySetInnerHTML" !== e &&
              (e !== (e = e.replace(/^xlink:?/, ""))
                ? null == n || !1 === n
                  ? t.removeAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      e.toLowerCase()
                    )
                  : t.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      e.toLowerCase(),
                      n
                    )
                : null == n || (!1 === n && !/^ar/.test(e))
                ? t.removeAttribute(e)
                : t.setAttribute(e, n));
      }
      function L(t) {
        this.l[t.type](r.event ? r.event(t) : t);
      }
      function j(t, e, n, o, i, a, s, u, c) {
        var l,
          h,
          f,
          p,
          v,
          m,
          g,
          w,
          b,
          x,
          k = e.type;
        if (void 0 !== e.constructor) return null;
        (l = r.__b) && l(e);
        try {
          t: if ("function" == typeof k) {
            if (
              ((w = e.props),
              (b = (l = k.contextType) && o[l.__c]),
              (x = l ? (b ? b.props.value : l.__) : o),
              n.__c
                ? (g = (h = e.__c = n.__c).__ = h.__E)
                : ("prototype" in k && k.prototype.render
                    ? (e.__c = h = new k(w, x))
                    : ((e.__c = h = new _(w, x)),
                      (h.constructor = k),
                      (h.render = A)),
                  b && b.sub(h),
                  (h.props = w),
                  h.state || (h.state = {}),
                  (h.context = x),
                  (h.__n = o),
                  (f = h.__d = !0),
                  (h.__h = [])),
              null == h.__s && (h.__s = h.state),
              null != k.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = d({}, h.__s)),
                d(h.__s, k.getDerivedStateFromProps(w, h.__s))),
              (p = h.props),
              (v = h.state),
              f)
            )
              null == k.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == k.getDerivedStateFromProps &&
                  w !== p &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(w, x),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(w, h.__s, x)) ||
                  (e.__v === n.__v && !h.__))
              ) {
                for (
                  h.props = w,
                    h.state = h.__s,
                    e.__v !== n.__v && (h.__d = !1),
                    h.__v = e,
                    e.__e = n.__e,
                    e.__k = n.__k,
                    h.__h.length && s.push(h),
                    l = 0;
                  l < e.__k.length;
                  l++
                )
                  e.__k[l] && (e.__k[l].__ = e);
                break t;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(w, h.__s, x),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(p, v, m);
                  });
            }
            (h.context = x),
              (h.props = w),
              (h.state = h.__s),
              (l = r.__r) && l(e),
              (h.__d = !1),
              (h.__v = e),
              (h.__P = t),
              (l = h.render(h.props, h.state, h.context)),
              (e.__k =
                null != l && l.type == y && null == l.key
                  ? l.props.children
                  : Array.isArray(l)
                  ? l
                  : [l]),
              null != h.getChildContext &&
                (o = d(d({}, o), h.getChildContext())),
              f ||
                null == h.getSnapshotBeforeUpdate ||
                (m = h.getSnapshotBeforeUpdate(p, v)),
              M(t, e, n, o, i, a, s, u, c),
              (h.base = e.__e),
              h.__h.length && s.push(h),
              g && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == a && e.__v === n.__v
              ? ((e.__k = n.__k), (e.__e = n.__e))
              : (e.__e = C(n.__e, e, n, o, i, a, s, c));
          (l = r.diffed) && l(e);
        } catch (t) {
          (e.__v = null), r.__e(t, e, n);
        }
        return e.__e;
      }
      function R(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function C(t, e, n, r, o, i, a, s) {
        var u,
          c,
          f,
          d,
          p,
          v = n.props,
          m = e.props;
        if (((o = "svg" === e.type || o), null != i))
          for (u = 0; u < i.length; u++)
            if (
              null != (c = i[u]) &&
              ((null === e.type ? 3 === c.nodeType : c.localName === e.type) ||
                t == c)
            ) {
              (t = c), (i[u] = null);
              break;
            }
        if (null == t) {
          if (null === e.type) return document.createTextNode(m);
          (t = o
            ? document.createElementNS("http://www.w3.org/2000/svg", e.type)
            : document.createElement(e.type, m.is && { is: m.is })),
            (i = null),
            (s = !1);
        }
        if (null === e.type) v !== m && t.data != m && (t.data = m);
        else {
          if (
            (null != i && (i = h.slice.call(t.childNodes)),
            (f = (v = n.props || l).dangerouslySetInnerHTML),
            (d = m.dangerouslySetInnerHTML),
            !s)
          ) {
            if (v === l)
              for (v = {}, p = 0; p < t.attributes.length; p++)
                v[t.attributes[p].name] = t.attributes[p].value;
            (d || f) &&
              ((d && f && d.__html == f.__html) ||
                (t.innerHTML = (d && d.__html) || ""));
          }
          (function (t, e, n, r, o) {
            var i;
            for (i in n)
              "children" === i ||
                "key" === i ||
                i in e ||
                S(t, i, null, n[i], r);
            for (i in e)
              (o && "function" != typeof e[i]) ||
                "children" === i ||
                "key" === i ||
                "value" === i ||
                "checked" === i ||
                n[i] === e[i] ||
                S(t, i, e[i], n[i], r);
          })(t, m, v, o, s),
            d
              ? (e.__k = [])
              : ((e.__k = e.props.children),
                M(t, e, n, r, "foreignObject" !== e.type && o, i, a, l, s)),
            s ||
              ("value" in m &&
                void 0 !== (u = m.value) &&
                u !== t.value &&
                S(t, "value", u, v.value, !1),
              "checked" in m &&
                void 0 !== (u = m.checked) &&
                u !== t.checked &&
                S(t, "checked", u, v.checked, !1));
        }
        return t;
      }
      function T(t, e, n) {
        try {
          "function" == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function I(t, e, n) {
        var o, i, a;
        if (
          (r.unmount && r.unmount(t),
          (o = t.ref) && ((o.current && o.current !== t.__e) || T(o, null, e)),
          n || "function" == typeof t.type || (n = null != (i = t.__e)),
          (t.__e = t.__d = void 0),
          null != (o = t.__c))
        ) {
          if (o.componentWillUnmount)
            try {
              o.componentWillUnmount();
            } catch (t) {
              r.__e(t, e);
            }
          o.base = o.__P = null;
        }
        if ((o = t.__k)) for (a = 0; a < o.length; a++) o[a] && I(o[a], e, n);
        null != i && p(i);
      }
      function A(t, e, n) {
        return this.constructor(t, n);
      }
      function N(t, e, n) {
        var o, i, a;
        r.__ && r.__(t, e),
          (i = (o = n === u) ? null : (n && n.__k) || e.__k),
          (t = v(y, null, [t])),
          (a = []),
          j(
            e,
            ((o ? e : n || e).__k = t),
            i || l,
            l,
            void 0 !== e.ownerSVGElement,
            n && !o ? [n] : i ? null : h.slice.call(e.childNodes),
            a,
            n || l,
            o
          ),
          R(a, t);
      }
      function P(t, e) {
        N(t, e, u);
      }
      function B(t, e) {
        var n, r;
        for (r in ((e = d(d({}, t.props), e)),
        arguments.length > 2 && (e.children = h.slice.call(arguments, 2)),
        (n = {}),
        e))
          "key" !== r && "ref" !== r && (n[r] = e[r]);
        return m(t.type, n, e.key || t.key, e.ref || t.ref, null);
      }
      function q(t) {
        var e = {},
          n = {
            __c: "__cC" + c++,
            __: t,
            Consumer: function (t, e) {
              return t.children(e);
            },
            Provider: function (t) {
              var r,
                o = this;
              return (
                this.getChildContext ||
                  ((r = []),
                  (this.getChildContext = function () {
                    return (e[n.__c] = o), e;
                  }),
                  (this.shouldComponentUpdate = function (t) {
                    o.props.value !== t.value &&
                      r.some(function (e) {
                        (e.context = t.value), x(e);
                      });
                  }),
                  (this.sub = function (t) {
                    r.push(t);
                    var e = t.componentWillUnmount;
                    t.componentWillUnmount = function () {
                      r.splice(r.indexOf(t), 1), e && e.call(t);
                    };
                  })),
                t.children
              );
            },
          };
        return (n.Consumer.contextType = n), (n.Provider.__ = n), n;
      }
      (r = {
        __e: function (t, e) {
          for (var n, r; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  (n.constructor &&
                    null != n.constructor.getDerivedStateFromError &&
                    ((r = !0),
                    n.setState(n.constructor.getDerivedStateFromError(t))),
                  null != n.componentDidCatch &&
                    ((r = !0), n.componentDidCatch(t)),
                  r)
                )
                  return x((n.__E = n));
              } catch (e) {
                t = e;
              }
          throw t;
        },
      }),
        (_.prototype.setState = function (t, e) {
          var n;
          (n =
            this.__s !== this.state
              ? this.__s
              : (this.__s = d({}, this.state))),
            "function" == typeof t && (t = t(n, this.props)),
            t && d(n, t),
            null != t && this.__v && (e && this.__h.push(e), x(this));
        }),
        (_.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), x(this));
        }),
        (_.prototype.render = y),
        (o = []),
        (i = 0),
        (a =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = l),
        (c = 0);
      var U,
        F,
        D,
        H = 0,
        J = [],
        z = r.__r,
        W = r.diffed,
        G = r.__c,
        Y = r.unmount;
      function K(t, e) {
        r.__h && r.__h(F, t, H || e), (H = 0);
        var n = F.__H || (F.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({}), n.__[t];
      }
      function V(t) {
        return (H = 1), Q(lt, t);
      }
      function Q(t, e, n) {
        var r = K(U++, 2);
        return (
          r.__c ||
            ((r.__c = F),
            (r.__ = [
              n ? n(e) : lt(void 0, e),
              function (e) {
                var n = t(r.__[0], e);
                r.__[0] !== n && ((r.__[0] = n), r.__c.setState({}));
              },
            ])),
          r.__
        );
      }
      function Z(t, e) {
        var n = K(U++, 3);
        !r.__s && ct(n.__H, e) && ((n.__ = t), (n.__H = e), F.__H.__h.push(n));
      }
      function $(t, e) {
        var n = K(U++, 4);
        !r.__s && ct(n.__H, e) && ((n.__ = t), (n.__H = e), F.__h.push(n));
      }
      function X(t) {
        return (
          (H = 5),
          et(function () {
            return { current: t };
          }, [])
        );
      }
      function tt(t, e, n) {
        (H = 6),
          $(
            function () {
              "function" == typeof t ? t(e()) : t && (t.current = e());
            },
            null == n ? n : n.concat(t)
          );
      }
      function et(t, e) {
        var n = K(U++, 7);
        return ct(n.__H, e) ? ((n.__H = e), (n.__h = t), (n.__ = t())) : n.__;
      }
      function nt(t, e) {
        return (
          (H = 8),
          et(function () {
            return t;
          }, e)
        );
      }
      function rt(t) {
        var e = F.context[t.__c],
          n = K(U++, 9);
        return (
          (n.__c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(F)), e.props.value) : t.__
        );
      }
      function ot(t, e) {
        r.useDebugValue && r.useDebugValue(e ? e(t) : t);
      }
      function it(t) {
        var e = K(U++, 10),
          n = V();
        return (
          (e.__ = t),
          F.componentDidCatch ||
            (F.componentDidCatch = function (t) {
              e.__ && e.__(t), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function at() {
        J.some(function (t) {
          if (t.__P)
            try {
              t.__H.__h.forEach(st), t.__H.__h.forEach(ut), (t.__H.__h = []);
            } catch (e) {
              return (t.__H.__h = []), r.__e(e, t.__v), !0;
            }
        }),
          (J = []);
      }
      function st(t) {
        t.t && t.t();
      }
      function ut(t) {
        var e = t.__();
        "function" == typeof e && (t.t = e);
      }
      function ct(t, e) {
        return (
          !t ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function lt(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
      function ht(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function ft(t, e) {
        for (var n in t) if ("__source" !== n && !(n in e)) return !0;
        for (var r in e) if ("__source" !== r && t[r] !== e[r]) return !0;
        return !1;
      }
      (r.__r = function (t) {
        z && z(t),
          (U = 0),
          (F = t.__c).__H &&
            (F.__H.__h.forEach(st), F.__H.__h.forEach(ut), (F.__H.__h = []));
      }),
        (r.diffed = function (t) {
          W && W(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            n &&
              n.__h.length &&
              ((1 !== J.push(e) && D === r.requestAnimationFrame) ||
                (
                  (D = r.requestAnimationFrame) ||
                  function (t) {
                    var e,
                      n = function () {
                        clearTimeout(r), cancelAnimationFrame(e), setTimeout(t);
                      },
                      r = setTimeout(n, 100);
                    "undefined" != typeof window &&
                      (e = requestAnimationFrame(n));
                  }
                )(at));
          }
        }),
        (r.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(st),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || ut(t);
                }));
            } catch (n) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                r.__e(n, t.__v);
            }
          }),
            G && G(t, e);
        }),
        (r.unmount = function (t) {
          Y && Y(t);
          var e = t.__c;
          if (e) {
            var n = e.__H;
            if (n)
              try {
                n.__.forEach(function (t) {
                  return t.t && t.t();
                });
              } catch (t) {
                r.__e(t, e.__v);
              }
          }
        });
      var dt = (function (t) {
        var e, n;
        function r(e) {
          var n;
          return ((n = t.call(this, e) || this).isPureReactComponent = !0), n;
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          (r.prototype.shouldComponentUpdate = function (t, e) {
            return ft(this.props, t) || ft(this.state, e);
          }),
          r
        );
      })(_);
      function pt(t, e) {
        function n(t) {
          var n = this.props.ref,
            r = n == t.ref;
          return (
            !r && n && (n.call ? n(null) : (n.current = null)),
            e ? !e(this.props, t) || !r : ft(this.props, t)
          );
        }
        function r(e) {
          return (this.shouldComponentUpdate = n), v(t, ht({}, e));
        }
        return (
          (r.prototype.isReactComponent = !0),
          (r.displayName = "Memo(" + (t.displayName || t.name) + ")"),
          (r.t = !0),
          r
        );
      }
      var vt = r.__b;
      function mt(t) {
        function e(e) {
          var n = ht({}, e);
          return delete n.ref, t(n, e.ref);
        }
        return (
          (e.prototype.isReactComponent = e.t = !0),
          (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
          e
        );
      }
      r.__b = function (t) {
        t.type && t.type.t && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
          vt && vt(t);
      };
      var gt = function (t, e) {
          return t
            ? E(t).reduce(function (t, n, r) {
                return t.concat(e(n, r));
              }, [])
            : null;
        },
        yt = {
          map: gt,
          forEach: gt,
          count: function (t) {
            return t ? E(t).length : 0;
          },
          only: function (t) {
            if (1 !== (t = E(t)).length)
              throw new Error("Children.only() expects only one child.");
            return t[0];
          },
          toArray: E,
        },
        _t = r.__e;
      function wt(t) {
        return (
          t && (((t = ht({}, t)).__c = null), (t.__k = t.__k && t.__k.map(wt))),
          t
        );
      }
      function bt() {
        (this.__u = 0), (this.o = null), (this.__b = null);
      }
      function xt(t) {
        var e = t.__.__c;
        return e && e.u && e.u(t);
      }
      function kt(t) {
        var e, n, r;
        function o(o) {
          if (
            (e ||
              (e = t()).then(
                function (t) {
                  n = t.default || t;
                },
                function (t) {
                  r = t;
                }
              ),
            r)
          )
            throw r;
          if (!n) throw e;
          return v(n, o);
        }
        return (o.displayName = "Lazy"), (o.t = !0), o;
      }
      function Mt() {
        (this.i = null), (this.l = null);
      }
      (r.__e = function (t, e, n) {
        if (t.then)
          for (var r, o = e; (o = o.__); )
            if ((r = o.__c) && r.__c) return r.__c(t, e.__c);
        _t(t, e, n);
      }),
        ((bt.prototype = new _()).__c = function (t, e) {
          var n = this;
          null == n.o && (n.o = []), n.o.push(e);
          var r = xt(n.__v),
            o = !1,
            i = function () {
              o || ((o = !0), r ? r(a) : a());
            };
          (e.__c = e.componentWillUnmount),
            (e.componentWillUnmount = function () {
              i(), e.__c && e.__c();
            });
          var a = function () {
            var t;
            if (!--n.__u)
              for (
                n.__v.__k[0] = n.state.u, n.setState({ u: (n.__b = null) });
                (t = n.o.pop());

              )
                t.forceUpdate();
          };
          n.__u++ || n.setState({ u: (n.__b = n.__v.__k[0]) }), t.then(i, i);
        }),
        (bt.prototype.render = function (t, e) {
          return (
            this.__b && ((this.__v.__k[0] = wt(this.__b)), (this.__b = null)),
            [v(_, null, e.u ? null : t.children), e.u && t.fallback]
          );
        });
      var Et = function (t, e, n) {
        if (
          (++n[1] === n[0] && t.l.delete(e),
          t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
        )
          for (n = t.i; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            t.i = n = n[2];
          }
      };
      ((Mt.prototype = new _()).u = function (t) {
        var e = this,
          n = xt(e.__v),
          r = e.l.get(t);
        return (
          r[0]++,
          function (o) {
            var i = function () {
              e.props.revealOrder ? (r.push(o), Et(e, t, r)) : o();
            };
            n ? n(i) : i();
          }
        );
      }),
        (Mt.prototype.render = function (t) {
          (this.i = null), (this.l = new Map());
          var e = E(t.children);
          t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
          for (var n = e.length; n--; )
            this.l.set(e[n], (this.i = [1, 0, this.i]));
          return t.children;
        }),
        (Mt.prototype.componentDidUpdate = Mt.prototype.componentDidMount =
          function () {
            var t = this;
            t.l.forEach(function (e, n) {
              Et(t, n, e);
            });
          });
      var Ot = (function () {
        function t() {}
        var e = t.prototype;
        return (
          (e.getChildContext = function () {
            return this.props.context;
          }),
          (e.render = function (t) {
            return t.children;
          }),
          t
        );
      })();
      function St(t) {
        var e = this,
          n = t.container,
          r = v(Ot, { context: e.context }, t.vnode);
        return (
          e.s &&
            e.s !== n &&
            (e.v.parentNode && e.s.removeChild(e.v), I(e.h), (e.p = !1)),
          t.vnode
            ? e.p
              ? ((n.__k = e.__k), N(r, n), (e.__k = n.__k))
              : ((e.v = document.createTextNode("")),
                P("", n),
                n.appendChild(e.v),
                (e.p = !0),
                (e.s = n),
                N(r, n, e.v),
                (e.__k = e.v.__k))
            : e.p && (e.v.parentNode && e.s.removeChild(e.v), I(e.h)),
          (e.h = r),
          (e.componentWillUnmount = function () {
            e.v.parentNode && e.s.removeChild(e.v), I(e.h);
          }),
          null
        );
      }
      function Lt(t, e) {
        return v(St, { vnode: t, container: e });
      }
      var jt =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      _.prototype.isReactComponent = {};
      var Rt =
        ("undefined" != typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103;
      function Ct(t, e, n) {
        if (null == e.__k) for (; e.firstChild; ) e.removeChild(e.firstChild);
        return N(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      function Tt(t, e, n) {
        return P(t, e), "function" == typeof n && n(), t ? t.__c : null;
      }
      var It = r.event;
      function At(t, e) {
        t["UNSAFE_" + e] &&
          !t[e] &&
          Object.defineProperty(t, e, {
            configurable: !1,
            get: function () {
              return this["UNSAFE_" + e];
            },
            set: function (t) {
              this["UNSAFE_" + e] = t;
            },
          });
      }
      r.event = function (t) {
        It && (t = It(t)), (t.persist = function () {});
        var e = !1,
          n = !1,
          r = t.stopPropagation;
        t.stopPropagation = function () {
          r.call(t), (e = !0);
        };
        var o = t.preventDefault;
        return (
          (t.preventDefault = function () {
            o.call(t), (n = !0);
          }),
          (t.isPropagationStopped = function () {
            return e;
          }),
          (t.isDefaultPrevented = function () {
            return n;
          }),
          (t.nativeEvent = t)
        );
      };
      var Nt = {
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        Pt = r.vnode;
      r.vnode = function (t) {
        t.$$typeof = Rt;
        var e = t.type,
          n = t.props;
        if (e) {
          if (
            (n.class != n.className &&
              ((Nt.enumerable = "className" in n),
              null != n.className && (n.class = n.className),
              Object.defineProperty(n, "className", Nt)),
            "function" != typeof e)
          ) {
            var r, o, i;
            for (i in (n.defaultValue &&
              void 0 !== n.value &&
              (n.value || 0 === n.value || (n.value = n.defaultValue),
              delete n.defaultValue),
            Array.isArray(n.value) &&
              n.multiple &&
              "select" === e &&
              (E(n.children).forEach(function (t) {
                -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0);
              }),
              delete n.value),
            n))
              if ((r = jt.test(i))) break;
            if (r)
              for (i in ((o = t.props = {}), n))
                o[jt.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] =
                  n[i];
          }
          !(function (e) {
            var n = t.type,
              r = t.props;
            if (r && "string" == typeof n) {
              var o = {};
              for (var i in r)
                /^on(Ani|Tra|Tou)/.test(i) &&
                  ((r[i.toLowerCase()] = r[i]), delete r[i]),
                  (o[i.toLowerCase()] = i);
              if (
                (o.ondoubleclick &&
                  ((r.ondblclick = r[o.ondoubleclick]),
                  delete r[o.ondoubleclick]),
                o.onbeforeinput &&
                  ((r.onbeforeinput = r[o.onbeforeinput]),
                  delete r[o.onbeforeinput]),
                o.onchange &&
                  ("textarea" === n ||
                    ("input" === n.toLowerCase() &&
                      !/^fil|che|ra/i.test(r.type))))
              ) {
                var a = o.oninput || "oninput";
                r[a] || ((r[a] = r[o.onchange]), delete r[o.onchange]);
              }
            }
          })(),
            "function" == typeof e &&
              !e.m &&
              e.prototype &&
              (At(e.prototype, "componentWillMount"),
              At(e.prototype, "componentWillReceiveProps"),
              At(e.prototype, "componentWillUpdate"),
              (e.m = !0));
        }
        Pt && Pt(t);
      };
      var Bt = "16.8.0";
      function qt(t) {
        return v.bind(null, t);
      }
      function Ut(t) {
        return !!t && t.$$typeof === Rt;
      }
      function Ft(t) {
        return Ut(t) ? B.apply(null, arguments) : t;
      }
      function Dt(t) {
        return !!t.__k && (N(null, t), !0);
      }
      function Ht(t) {
        return (t && (t.base || (1 === t.nodeType && t))) || null;
      }
      var Jt = function (t, e) {
        return t(e);
      };
      e.default = {
        useState: V,
        useReducer: Q,
        useEffect: Z,
        useLayoutEffect: $,
        useRef: X,
        useImperativeHandle: tt,
        useMemo: et,
        useCallback: nt,
        useContext: rt,
        useDebugValue: ot,
        version: "16.8.0",
        Children: yt,
        render: Ct,
        hydrate: Ct,
        unmountComponentAtNode: Dt,
        createPortal: Lt,
        createElement: v,
        createContext: q,
        createFactory: qt,
        cloneElement: Ft,
        createRef: g,
        Fragment: y,
        isValidElement: Ut,
        findDOMNode: Ht,
        Component: _,
        PureComponent: dt,
        memo: pt,
        forwardRef: mt,
        unstable_batchedUpdates: Jt,
        Suspense: bt,
        SuspenseList: Mt,
        lazy: kt,
      };
    },
  },
]);
