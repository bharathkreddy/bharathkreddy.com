(() => {
  var e = {
      1361: function (e) {
        var t = 0.1,
          n = "function" == typeof Float32Array;
        function i(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function a(e, t) {
          return 3 * t - 6 * e;
        }
        function o(e) {
          return 3 * e;
        }
        function r(e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        }
        function l(e, t, n) {
          return (
            3 * (1 - 3 * n + 3 * t) * e * e + 2 * (3 * n - 6 * t) * e + 3 * t
          );
        }
        e.exports = function (e, i, a, o) {
          if (!(0 <= e && e <= 1 && 0 <= a && a <= 1))
            throw Error("bezier x values must be in [0, 1] range");
          var c = n ? new Float32Array(11) : Array(11);
          if (e !== i || a !== o)
            for (var d = 0; d < 11; ++d) c[d] = r(d * t, e, a);
          return function (n) {
            return e === i && a === o
              ? n
              : 0 === n
              ? 0
              : 1 === n
              ? 1
              : r(
                  (function (n) {
                    for (var i = 0, o = 1, d = 10; o !== d && c[o] <= n; ++o)
                      i += t;
                    var s = i + ((n - c[--o]) / (c[o + 1] - c[o])) * t,
                      f = l(s, e, a);
                    return f >= 0.001
                      ? (function (e, t, n, i) {
                          for (var a = 0; a < 4; ++a) {
                            var o = l(t, n, i);
                            if (0 === o) break;
                            var c = r(t, n, i) - e;
                            t -= c / o;
                          }
                          return t;
                        })(n, s, e, a)
                      : 0 === f
                      ? s
                      : (function (e, t, n, i, a) {
                          var o,
                            l,
                            c = 0;
                          do
                            (o = r((l = t + (n - t) / 2), i, a) - e) > 0
                              ? (n = l)
                              : (t = l);
                          while (Math.abs(o) > 1e-7 && ++c < 10);
                          return l;
                        })(n, i, i + t, e, a);
                  })(n),
                  i,
                  o
                );
          };
        };
      },
      8172: function (e, t, n) {
        var i = n(440)(n(5238), "DataView");
        e.exports = i;
      },
      1796: function (e, t, n) {
        var i = n(7322),
          a = n(2937),
          o = n(207),
          r = n(2165),
          l = n(7523);
        function c(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        (c.prototype.clear = i),
          (c.prototype.delete = a),
          (c.prototype.get = o),
          (c.prototype.has = r),
          (c.prototype.set = l),
          (e.exports = c);
      },
      4281: function (e, t, n) {
        var i = n(5940),
          a = n(4382);
        function o(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = 0xffffffff),
            (this.__views__ = []);
        }
        (o.prototype = i(a.prototype)),
          (o.prototype.constructor = o),
          (e.exports = o);
      },
      283: function (e, t, n) {
        var i = n(7435),
          a = n(8438),
          o = n(3067),
          r = n(9679),
          l = n(2426);
        function c(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        (c.prototype.clear = i),
          (c.prototype.delete = a),
          (c.prototype.get = o),
          (c.prototype.has = r),
          (c.prototype.set = l),
          (e.exports = c);
      },
      9675: function (e, t, n) {
        var i = n(5940),
          a = n(4382);
        function o(e, t) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!t),
            (this.__index__ = 0),
            (this.__values__ = void 0);
        }
        (o.prototype = i(a.prototype)),
          (o.prototype.constructor = o),
          (e.exports = o);
      },
      9036: function (e, t, n) {
        var i = n(440)(n(5238), "Map");
        e.exports = i;
      },
      4544: function (e, t, n) {
        var i = n(6409),
          a = n(2186),
          o = n(5601),
          r = n(1533),
          l = n(151);
        function c(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        (c.prototype.clear = i),
          (c.prototype.delete = a),
          (c.prototype.get = o),
          (c.prototype.has = r),
          (c.prototype.set = l),
          (e.exports = c);
      },
      44: function (e, t, n) {
        var i = n(440)(n(5238), "Promise");
        e.exports = i;
      },
      6656: function (e, t, n) {
        var i = n(440)(n(5238), "Set");
        e.exports = i;
      },
      3290: function (e, t, n) {
        var i = n(4544),
          a = n(1760),
          o = n(5484);
        function r(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new i(); ++t < n; ) this.add(e[t]);
        }
        (r.prototype.add = r.prototype.push = a),
          (r.prototype.has = o),
          (e.exports = r);
      },
      1902: function (e, t, n) {
        var i = n(283),
          a = n(6063),
          o = n(7727),
          r = n(3281),
          l = n(6667),
          c = n(1270);
        function d(e) {
          var t = (this.__data__ = new i(e));
          this.size = t.size;
        }
        (d.prototype.clear = a),
          (d.prototype.delete = o),
          (d.prototype.get = r),
          (d.prototype.has = l),
          (d.prototype.set = c),
          (e.exports = d);
      },
      4886: function (e, t, n) {
        var i = n(5238).Symbol;
        e.exports = i;
      },
      8965: function (e, t, n) {
        var i = n(5238).Uint8Array;
        e.exports = i;
      },
      3283: function (e, t, n) {
        var i = n(440)(n(5238), "WeakMap");
        e.exports = i;
      },
      9198: function (e) {
        e.exports = function (e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        };
      },
      4970: function (e) {
        e.exports = function (e, t) {
          for (
            var n = -1, i = null == e ? 0 : e.length;
            ++n < i && !1 !== t(e[n], n, e);

          );
          return e;
        };
      },
      2654: function (e) {
        e.exports = function (e, t) {
          for (
            var n = -1, i = null == e ? 0 : e.length, a = 0, o = [];
            ++n < i;

          ) {
            var r = e[n];
            t(r, n, e) && (o[a++] = r);
          }
          return o;
        };
      },
      4979: function (e, t, n) {
        var i = n(1682),
          a = n(9732),
          o = n(6377),
          r = n(6018),
          l = n(9251),
          c = n(8586),
          d = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
          var n = o(e),
            s = !n && a(e),
            f = !n && !s && r(e),
            u = !n && !s && !f && c(e),
            p = n || s || f || u,
            I = p ? i(e.length, String) : [],
            y = I.length;
          for (var E in e)
            (t || d.call(e, E)) &&
              !(
                p &&
                ("length" == E ||
                  (f && ("offset" == E || "parent" == E)) ||
                  (u &&
                    ("buffer" == E ||
                      "byteLength" == E ||
                      "byteOffset" == E)) ||
                  l(E, y))
              ) &&
              I.push(E);
          return I;
        };
      },
      1098: function (e) {
        e.exports = function (e, t) {
          for (
            var n = -1, i = null == e ? 0 : e.length, a = Array(i);
            ++n < i;

          )
            a[n] = t(e[n], n, e);
          return a;
        };
      },
      5741: function (e) {
        e.exports = function (e, t) {
          for (var n = -1, i = t.length, a = e.length; ++n < i; )
            e[a + n] = t[n];
          return e;
        };
      },
      2607: function (e) {
        e.exports = function (e, t, n, i) {
          var a = -1,
            o = null == e ? 0 : e.length;
          for (i && o && (n = e[++a]); ++a < o; ) n = t(n, e[a], a, e);
          return n;
        };
      },
      3955: function (e) {
        e.exports = function (e, t) {
          for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
            if (t(e[n], n, e)) return !0;
          return !1;
        };
      },
      609: function (e, t, n) {
        var i = n(2726)("length");
        e.exports = i;
      },
      3615: function (e, t, n) {
        var i = n(2676),
          a = n(4071),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n) {
          var r = e[t];
          (!(o.call(e, t) && a(r, n)) || (void 0 === n && !(t in e))) &&
            i(e, t, n);
        };
      },
      8357: function (e, t, n) {
        var i = n(4071);
        e.exports = function (e, t) {
          for (var n = e.length; n--; ) if (i(e[n][0], t)) return n;
          return -1;
        };
      },
      2676: function (e, t, n) {
        var i = n(9833);
        e.exports = function (e, t, n) {
          "__proto__" == t && i
            ? i(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (e[t] = n);
        };
      },
      2009: function (e) {
        e.exports = function (e, t, n) {
          return (
            e == e &&
              (void 0 !== n && (e = e <= n ? e : n),
              void 0 !== t && (e = e >= t ? e : t)),
            e
          );
        };
      },
      5940: function (e, t, n) {
        var i = n(8532),
          a = Object.create,
          o = (function () {
            function e() {}
            return function (t) {
              if (!i(t)) return {};
              if (a) return a(t);
              e.prototype = t;
              var n = new e();
              return (e.prototype = void 0), n;
            };
          })();
        e.exports = o;
      },
      8264: function (e, t, n) {
        var i = n(3406),
          a = n(2679)(i);
        e.exports = a;
      },
      2056: function (e) {
        e.exports = function (e, t, n, i) {
          for (var a = e.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
            if (t(e[o], o, e)) return o;
          return -1;
        };
      },
      5265: function (e, t, n) {
        var i = n(5741),
          a = n(1668);
        e.exports = function e(t, n, o, r, l) {
          var c = -1,
            d = t.length;
          for (o || (o = a), l || (l = []); ++c < d; ) {
            var s = t[c];
            n > 0 && o(s)
              ? n > 1
                ? e(s, n - 1, o, r, l)
                : i(l, s)
              : !r && (l[l.length] = s);
          }
          return l;
        };
      },
      1: function (e, t, n) {
        var i = n(132)();
        e.exports = i;
      },
      3406: function (e, t, n) {
        var i = n(1),
          a = n(7361);
        e.exports = function (e, t) {
          return e && i(e, t, a);
        };
      },
      1957: function (e, t, n) {
        var i = n(3835),
          a = n(8481);
        e.exports = function (e, t) {
          t = i(t, e);
          for (var n = 0, o = t.length; null != e && n < o; ) e = e[a(t[n++])];
          return n && n == o ? e : void 0;
        };
      },
      7743: function (e, t, n) {
        var i = n(5741),
          a = n(6377);
        e.exports = function (e, t, n) {
          var o = t(e);
          return a(e) ? o : i(o, n(e));
        };
      },
      3757: function (e, t, n) {
        var i = n(4886),
          a = n(5118),
          o = n(7070),
          r = i ? i.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : r && r in Object(e)
            ? a(e)
            : o(e);
        };
      },
      6993: function (e) {
        e.exports = function (e, t) {
          return null != e && t in Object(e);
        };
      },
      841: function (e, t, n) {
        var i = n(3757),
          a = n(7013);
        e.exports = function (e) {
          return a(e) && "[object Arguments]" == i(e);
        };
      },
      5447: function (e, t, n) {
        var i = n(906),
          a = n(7013);
        e.exports = function e(t, n, o, r, l) {
          return (
            t === n ||
            (null != t && null != n && (a(t) || a(n))
              ? i(t, n, o, r, e, l)
              : t != t && n != n)
          );
        };
      },
      906: function (e, t, n) {
        var i = n(1902),
          a = n(4476),
          o = n(9027),
          r = n(8714),
          l = n(9937),
          c = n(6377),
          d = n(6018),
          s = n(8586),
          f = "[object Arguments]",
          u = "[object Array]",
          p = "[object Object]",
          I = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, y, E, T) {
          var g = c(e),
            m = c(t),
            O = g ? u : l(e),
            b = m ? u : l(t);
          (O = O == f ? p : O), (b = b == f ? p : b);
          var v = O == p,
            _ = b == p,
            A = O == b;
          if (A && d(e)) {
            if (!d(t)) return !1;
            (g = !0), (v = !1);
          }
          if (A && !v)
            return (
              T || (T = new i()),
              g || s(e) ? a(e, t, n, y, E, T) : o(e, t, O, n, y, E, T)
            );
          if (!(1 & n)) {
            var R = v && I.call(e, "__wrapped__"),
              S = _ && I.call(t, "__wrapped__");
            if (R || S) {
              var h = R ? e.value() : e,
                L = S ? t.value() : t;
              return T || (T = new i()), E(h, L, n, y, T);
            }
          }
          return !!A && (T || (T = new i()), r(e, t, n, y, E, T));
        };
      },
      7293: function (e, t, n) {
        var i = n(1902),
          a = n(5447);
        e.exports = function (e, t, n, o) {
          var r = n.length,
            l = r,
            c = !o;
          if (null == e) return !l;
          for (e = Object(e); r--; ) {
            var d = n[r];
            if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
          }
          for (; ++r < l; ) {
            var s = (d = n[r])[0],
              f = e[s],
              u = d[1];
            if (c && d[2]) {
              if (void 0 === f && !(s in e)) return !1;
            } else {
              var p = new i();
              if (o) var I = o(f, u, s, e, t, p);
              if (!(void 0 === I ? a(u, f, 3, o, p) : I)) return !1;
            }
          }
          return !0;
        };
      },
      692: function (e, t, n) {
        var i = n(6644),
          a = n(3417),
          o = n(8532),
          r = n(1473),
          l = /^\[object .+?Constructor\]$/,
          c = Object.prototype,
          d = Function.prototype.toString,
          s = c.hasOwnProperty,
          f = RegExp(
            "^" +
              d
                .call(s)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        e.exports = function (e) {
          return !(!o(e) || a(e)) && (i(e) ? f : l).test(r(e));
        };
      },
      2195: function (e, t, n) {
        var i = n(3757),
          a = n(7924),
          o = n(7013),
          r = {};
        (r["[object Float32Array]"] =
          r["[object Float64Array]"] =
          r["[object Int8Array]"] =
          r["[object Int16Array]"] =
          r["[object Int32Array]"] =
          r["[object Uint8Array]"] =
          r["[object Uint8ClampedArray]"] =
          r["[object Uint16Array]"] =
          r["[object Uint32Array]"] =
            !0),
          (r["[object Arguments]"] =
            r["[object Array]"] =
            r["[object ArrayBuffer]"] =
            r["[object Boolean]"] =
            r["[object DataView]"] =
            r["[object Date]"] =
            r["[object Error]"] =
            r["[object Function]"] =
            r["[object Map]"] =
            r["[object Number]"] =
            r["[object Object]"] =
            r["[object RegExp]"] =
            r["[object Set]"] =
            r["[object String]"] =
            r["[object WeakMap]"] =
              !1);
        e.exports = function (e) {
          return o(e) && a(e.length) && !!r[i(e)];
        };
      },
      5462: function (e, t, n) {
        var i = n(6358),
          a = n(4503),
          o = n(1622),
          r = n(6377),
          l = n(8303);
        e.exports = function (e) {
          return "function" == typeof e
            ? e
            : null == e
            ? o
            : "object" == typeof e
            ? r(e)
              ? a(e[0], e[1])
              : i(e)
            : l(e);
        };
      },
      7407: function (e, t, n) {
        var i = n(8857),
          a = n(2440),
          o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          if (!i(e)) return a(e);
          var t = [];
          for (var n in Object(e))
            o.call(e, n) && "constructor" != n && t.push(n);
          return t;
        };
      },
      9237: function (e, t, n) {
        var i = n(8532),
          a = n(8857),
          o = n(1308),
          r = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          if (!i(e)) return o(e);
          var t = a(e),
            n = [];
          for (var l in e)
            !("constructor" == l && (t || !r.call(e, l))) && n.push(l);
          return n;
        };
      },
      4382: function (e) {
        e.exports = function () {};
      },
      6358: function (e, t, n) {
        var i = n(7293),
          a = n(7145),
          o = n(4167);
        e.exports = function (e) {
          var t = a(e);
          return 1 == t.length && t[0][2]
            ? o(t[0][0], t[0][1])
            : function (n) {
                return n === e || i(n, e, t);
              };
        };
      },
      4503: function (e, t, n) {
        var i = n(5447),
          a = n(4738),
          o = n(9290),
          r = n(7074),
          l = n(1542),
          c = n(4167),
          d = n(8481);
        e.exports = function (e, t) {
          return r(e) && l(t)
            ? c(d(e), t)
            : function (n) {
                var r = a(n, e);
                return void 0 === r && r === t ? o(n, e) : i(t, r, 3);
              };
        };
      },
      7100: function (e, t, n) {
        var i = n(1957),
          a = n(5495),
          o = n(3835);
        e.exports = function (e, t, n) {
          for (var r = -1, l = t.length, c = {}; ++r < l; ) {
            var d = t[r],
              s = i(e, d);
            n(s, d) && a(c, o(d, e), s);
          }
          return c;
        };
      },
      2726: function (e) {
        e.exports = function (e) {
          return function (t) {
            return null == t ? void 0 : t[e];
          };
        };
      },
      1374: function (e, t, n) {
        var i = n(1957);
        e.exports = function (e) {
          return function (t) {
            return i(t, e);
          };
        };
      },
      9864: function (e) {
        e.exports = function (e, t, n, i, a) {
          return (
            a(e, function (e, a, o) {
              n = i ? ((i = !1), e) : t(n, e, a, o);
            }),
            n
          );
        };
      },
      5495: function (e, t, n) {
        var i = n(3615),
          a = n(3835),
          o = n(9251),
          r = n(8532),
          l = n(8481);
        e.exports = function (e, t, n, c) {
          if (!r(e)) return e;
          t = a(t, e);
          for (
            var d = -1, s = t.length, f = s - 1, u = e;
            null != u && ++d < s;

          ) {
            var p = l(t[d]),
              I = n;
            if ("__proto__" === p || "constructor" === p || "prototype" === p)
              break;
            if (d != f) {
              var y = u[p];
              void 0 === (I = c ? c(y, p, u) : void 0) &&
                (I = r(y) ? y : o(t[d + 1]) ? [] : {});
            }
            i(u, p, I), (u = u[p]);
          }
          return e;
        };
      },
      2422: function (e, t, n) {
        var i = n(5055),
          a = n(9833),
          o = n(1622),
          r = a
            ? function (e, t) {
                return a(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: i(t),
                  writable: !0,
                });
              }
            : o;
        e.exports = r;
      },
      1682: function (e) {
        e.exports = function (e, t) {
          for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
          return i;
        };
      },
      9653: function (e, t, n) {
        var i = n(4886),
          a = n(1098),
          o = n(6377),
          r = n(1359),
          l = 1 / 0,
          c = i ? i.prototype : void 0,
          d = c ? c.toString : void 0;
        e.exports = function e(t) {
          if ("string" == typeof t) return t;
          if (o(t)) return a(t, e) + "";
          if (r(t)) return d ? d.call(t) : "";
          var n = t + "";
          return "0" == n && 1 / t == -l ? "-0" : n;
        };
      },
      1072: function (e, t, n) {
        var i = n(3230),
          a = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, i(e) + 1).replace(a, "") : e;
        };
      },
      7509: function (e) {
        e.exports = function (e) {
          return function (t) {
            return e(t);
          };
        };
      },
      2471: function (e) {
        e.exports = function (e, t) {
          return e.has(t);
        };
      },
      8269: function (e, t, n) {
        var i = n(1622);
        e.exports = function (e) {
          return "function" == typeof e ? e : i;
        };
      },
      3835: function (e, t, n) {
        var i = n(6377),
          a = n(7074),
          o = n(8997),
          r = n(6214);
        e.exports = function (e, t) {
          return i(e) ? e : a(e, t) ? [e] : o(r(e));
        };
      },
      8606: function (e) {
        e.exports = function (e, t) {
          var n = -1,
            i = e.length;
          for (t || (t = Array(i)); ++n < i; ) t[n] = e[n];
          return t;
        };
      },
      5772: function (e, t, n) {
        var i = n(5238)["__core-js_shared__"];
        e.exports = i;
      },
      2679: function (e, t, n) {
        var i = n(508);
        e.exports = function (e, t) {
          return function (n, a) {
            if (null == n) return n;
            if (!i(n)) return e(n, a);
            for (
              var o = n.length, r = t ? o : -1, l = Object(n);
              (t ? r-- : ++r < o) && !1 !== a(l[r], r, l);

            );
            return n;
          };
        };
      },
      132: function (e) {
        e.exports = function (e) {
          return function (t, n, i) {
            for (var a = -1, o = Object(t), r = i(t), l = r.length; l--; ) {
              var c = r[e ? l : ++a];
              if (!1 === n(o[c], c, o)) break;
            }
            return t;
          };
        };
      },
      727: function (e, t, n) {
        var i = n(5462),
          a = n(508),
          o = n(7361);
        e.exports = function (e) {
          return function (t, n, r) {
            var l = Object(t);
            if (!a(t)) {
              var c = i(n, 3);
              (t = o(t)),
                (n = function (e) {
                  return c(l[e], e, l);
                });
            }
            var d = e(t, n, r);
            return d > -1 ? l[c ? t[d] : d] : void 0;
          };
        };
      },
      914: function (e, t, n) {
        var i = n(9675),
          a = n(4502),
          o = n(6007),
          r = n(195),
          l = n(6377),
          c = n(6252);
        e.exports = function (e) {
          return a(function (t) {
            var n = t.length,
              a = n,
              d = i.prototype.thru;
            for (e && t.reverse(); a--; ) {
              var s = t[a];
              if ("function" != typeof s)
                throw TypeError("Expected a function");
              if (d && !f && "wrapper" == r(s)) var f = new i([], !0);
            }
            for (a = f ? a : n; ++a < n; ) {
              var u = r((s = t[a])),
                p = "wrapper" == u ? o(s) : void 0;
              f =
                p && c(p[0]) && 424 == p[1] && !p[4].length && 1 == p[9]
                  ? f[r(p[0])].apply(f, p[3])
                  : 1 == s.length && c(s)
                  ? f[u]()
                  : f.thru(s);
            }
            return function () {
              var e = arguments,
                i = e[0];
              if (f && 1 == e.length && l(i)) return f.plant(i).value();
              for (var a = 0, o = n ? t[a].apply(this, e) : i; ++a < n; )
                o = t[a].call(this, o);
              return o;
            };
          });
        };
      },
      9833: function (e, t, n) {
        var i = n(440),
          a = (function () {
            try {
              var e = i(Object, "defineProperty");
              return e({}, "", {}), e;
            } catch (e) {}
          })();
        e.exports = a;
      },
      4476: function (e, t, n) {
        var i = n(3290),
          a = n(3955),
          o = n(2471);
        e.exports = function (e, t, n, r, l, c) {
          var d = 1 & n,
            s = e.length,
            f = t.length;
          if (s != f && !(d && f > s)) return !1;
          var u = c.get(e),
            p = c.get(t);
          if (u && p) return u == t && p == e;
          var I = -1,
            y = !0,
            E = 2 & n ? new i() : void 0;
          for (c.set(e, t), c.set(t, e); ++I < s; ) {
            var T = e[I],
              g = t[I];
            if (r) var m = d ? r(g, T, I, t, e, c) : r(T, g, I, e, t, c);
            if (void 0 !== m) {
              if (m) continue;
              y = !1;
              break;
            }
            if (E) {
              if (
                !a(t, function (e, t) {
                  if (!o(E, t) && (T === e || l(T, e, n, r, c)))
                    return E.push(t);
                })
              ) {
                y = !1;
                break;
              }
            } else if (!(T === g || l(T, g, n, r, c))) {
              y = !1;
              break;
            }
          }
          return c.delete(e), c.delete(t), y;
        };
      },
      9027: function (e, t, n) {
        var i = n(4886),
          a = n(8965),
          o = n(4071),
          r = n(4476),
          l = n(7170),
          c = n(2779),
          d = i ? i.prototype : void 0,
          s = d ? d.valueOf : void 0;
        e.exports = function (e, t, n, i, d, f, u) {
          switch (n) {
            case "[object DataView]":
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                break;
              (e = e.buffer), (t = t.buffer);
            case "[object ArrayBuffer]":
              if (e.byteLength != t.byteLength || !f(new a(e), new a(t))) break;
              return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return o(+e, +t);
            case "[object Error]":
              return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
              return e == t + "";
            case "[object Map]":
              var p = l;
            case "[object Set]":
              var I = 1 & i;
              if ((p || (p = c), e.size != t.size && !I)) break;
              var y = u.get(e);
              if (y) return y == t;
              (i |= 2), u.set(e, t);
              var E = r(p(e), p(t), i, d, f, u);
              return u.delete(e), E;
            case "[object Symbol]":
              if (s) return s.call(e) == s.call(t);
          }
          return !1;
        };
      },
      8714: function (e, t, n) {
        var i = n(3948),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, o, r, l) {
          var c = 1 & n,
            d = i(e),
            s = d.length;
          if (s != i(t).length && !c) return !1;
          for (var f = s; f--; ) {
            var u = d[f];
            if (!(c ? u in t : a.call(t, u))) return !1;
          }
          var p = l.get(e),
            I = l.get(t);
          if (p && I) return p == t && I == e;
          var y = !0;
          l.set(e, t), l.set(t, e);
          for (var E = c; ++f < s; ) {
            var T = e[(u = d[f])],
              g = t[u];
            if (o) var m = c ? o(g, T, u, t, e, l) : o(T, g, u, e, t, l);
            if (!(void 0 === m ? T === g || r(T, g, n, o, l) : m)) {
              y = !1;
              break;
            }
            E || (E = "constructor" == u);
          }
          if (y && !E) {
            var O = e.constructor,
              b = t.constructor;
            O != b &&
              "constructor" in e &&
              "constructor" in t &&
              !(
                "function" == typeof O &&
                O instanceof O &&
                "function" == typeof b &&
                b instanceof b
              ) &&
              (y = !1);
          }
          return l.delete(e), l.delete(t), y;
        };
      },
      4502: function (e, t, n) {
        var i = n(6380),
          a = n(6813),
          o = n(2413);
        e.exports = function (e) {
          return o(a(e, void 0, i), e + "");
        };
      },
      2593: function (e, t, n) {
        var i = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = i;
      },
      3948: function (e, t, n) {
        var i = n(7743),
          a = n(6230),
          o = n(7361);
        e.exports = function (e) {
          return i(e, o, a);
        };
      },
      9254: function (e, t, n) {
        var i = n(7743),
          a = n(2992),
          o = n(3747);
        e.exports = function (e) {
          return i(e, o, a);
        };
      },
      6007: function (e, t, n) {
        var i = n(900),
          a = n(6032),
          o = i
            ? function (e) {
                return i.get(e);
              }
            : a;
        e.exports = o;
      },
      195: function (e, t, n) {
        var i = n(8564),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          for (
            var t = e.name + "", n = i[t], o = a.call(i, t) ? n.length : 0;
            o--;

          ) {
            var r = n[o],
              l = r.func;
            if (null == l || l == e) return r.name;
          }
          return t;
        };
      },
      1143: function (e, t, n) {
        var i = n(6669);
        e.exports = function (e, t) {
          var n = e.__data__;
          return i(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        };
      },
      7145: function (e, t, n) {
        var i = n(1542),
          a = n(7361);
        e.exports = function (e) {
          for (var t = a(e), n = t.length; n--; ) {
            var o = t[n],
              r = e[o];
            t[n] = [o, r, i(r)];
          }
          return t;
        };
      },
      440: function (e, t, n) {
        var i = n(692),
          a = n(8974);
        e.exports = function (e, t) {
          var n = a(e, t);
          return i(n) ? n : void 0;
        };
      },
      6095: function (e, t, n) {
        var i = n(6512)(Object.getPrototypeOf, Object);
        e.exports = i;
      },
      5118: function (e, t, n) {
        var i = n(4886),
          a = Object.prototype,
          o = a.hasOwnProperty,
          r = a.toString,
          l = i ? i.toStringTag : void 0;
        e.exports = function (e) {
          var t = o.call(e, l),
            n = e[l];
          try {
            e[l] = void 0;
            var i = !0;
          } catch (e) {}
          var a = r.call(e);
          return i && (t ? (e[l] = n) : delete e[l]), a;
        };
      },
      6230: function (e, t, n) {
        var i = n(2654),
          a = n(1036),
          o = Object.prototype.propertyIsEnumerable,
          r = Object.getOwnPropertySymbols,
          l = r
            ? function (e) {
                return null == e
                  ? []
                  : i(r((e = Object(e))), function (t) {
                      return o.call(e, t);
                    });
              }
            : a;
        e.exports = l;
      },
      2992: function (e, t, n) {
        var i = n(5741),
          a = n(6095),
          o = n(6230),
          r = n(1036),
          l = Object.getOwnPropertySymbols
            ? function (e) {
                for (var t = []; e; ) i(t, o(e)), (e = a(e));
                return t;
              }
            : r;
        e.exports = l;
      },
      9937: function (e, t, n) {
        var i = n(8172),
          a = n(9036),
          o = n(44),
          r = n(6656),
          l = n(3283),
          c = n(3757),
          d = n(1473),
          s = "[object Map]",
          f = "[object Promise]",
          u = "[object Set]",
          p = "[object WeakMap]",
          I = "[object DataView]",
          y = d(i),
          E = d(a),
          T = d(o),
          g = d(r),
          m = d(l),
          O = c;
        ((i && O(new i(new ArrayBuffer(1))) != I) ||
          (a && O(new a()) != s) ||
          (o && O(o.resolve()) != f) ||
          (r && O(new r()) != u) ||
          (l && O(new l()) != p)) &&
          (O = function (e) {
            var t = c(e),
              n = "[object Object]" == t ? e.constructor : void 0,
              i = n ? d(n) : "";
            if (i)
              switch (i) {
                case y:
                  return I;
                case E:
                  return s;
                case T:
                  return f;
                case g:
                  return u;
                case m:
                  return p;
              }
            return t;
          }),
          (e.exports = O);
      },
      8974: function (e) {
        e.exports = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      },
      7635: function (e, t, n) {
        var i = n(3835),
          a = n(9732),
          o = n(6377),
          r = n(9251),
          l = n(7924),
          c = n(8481);
        e.exports = function (e, t, n) {
          t = i(t, e);
          for (var d = -1, s = t.length, f = !1; ++d < s; ) {
            var u = c(t[d]);
            if (!(f = null != e && n(e, u))) break;
            e = e[u];
          }
          return f || ++d != s
            ? f
            : !!(s = null == e ? 0 : e.length) &&
                l(s) &&
                r(u, s) &&
                (o(e) || a(e));
        };
      },
      9520: function (e) {
        var t = RegExp(
          "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
        );
        e.exports = function (e) {
          return t.test(e);
        };
      },
      7322: function (e, t, n) {
        var i = n(7305);
        e.exports = function () {
          (this.__data__ = i ? i(null) : {}), (this.size = 0);
        };
      },
      2937: function (e) {
        e.exports = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        };
      },
      207: function (e, t, n) {
        var i = n(7305),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          if (i) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return a.call(t, e) ? t[e] : void 0;
        };
      },
      2165: function (e, t, n) {
        var i = n(7305),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          return i ? void 0 !== t[e] : a.call(t, e);
        };
      },
      7523: function (e, t, n) {
        var i = n(7305);
        e.exports = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = i && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      },
      1668: function (e, t, n) {
        var i = n(4886),
          a = n(9732),
          o = n(6377),
          r = i ? i.isConcatSpreadable : void 0;
        e.exports = function (e) {
          return o(e) || a(e) || !!(r && e && e[r]);
        };
      },
      9251: function (e) {
        var t = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, n) {
          var i = typeof e;
          return (
            !!(n = null == n ? 0x1fffffffffffff : n) &&
            ("number" == i || ("symbol" != i && t.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < n
          );
        };
      },
      7074: function (e, t, n) {
        var i = n(6377),
          a = n(1359),
          o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          r = /^\w*$/;
        e.exports = function (e, t) {
          if (i(e)) return !1;
          var n = typeof e;
          return (
            !!(
              "number" == n ||
              "symbol" == n ||
              "boolean" == n ||
              null == e ||
              a(e)
            ) ||
            r.test(e) ||
            !o.test(e) ||
            (null != t && e in Object(t))
          );
        };
      },
      6669: function (e) {
        e.exports = function (e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        };
      },
      6252: function (e, t, n) {
        var i = n(4281),
          a = n(6007),
          o = n(195),
          r = n(6985);
        e.exports = function (e) {
          var t = o(e),
            n = r[t];
          if ("function" != typeof n || !(t in i.prototype)) return !1;
          if (e === n) return !0;
          var l = a(n);
          return !!l && e === l[0];
        };
      },
      3417: function (e, t, n) {
        var i,
          a = n(5772);
        var o = (i = /[^.]+$/.exec((a && a.keys && a.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + i
          : "";
        e.exports = function (e) {
          return !!o && o in e;
        };
      },
      8857: function (e) {
        var t = Object.prototype;
        e.exports = function (e) {
          var n = e && e.constructor;
          return e === (("function" == typeof n && n.prototype) || t);
        };
      },
      1542: function (e, t, n) {
        var i = n(8532);
        e.exports = function (e) {
          return e == e && !i(e);
        };
      },
      7435: function (e) {
        e.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      8438: function (e, t, n) {
        var i = n(8357),
          a = Array.prototype.splice;
        e.exports = function (e) {
          var t = this.__data__,
            n = i(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : a.call(t, n, 1), --this.size, !0)
          );
        };
      },
      3067: function (e, t, n) {
        var i = n(8357);
        e.exports = function (e) {
          var t = this.__data__,
            n = i(t, e);
          return n < 0 ? void 0 : t[n][1];
        };
      },
      9679: function (e, t, n) {
        var i = n(8357);
        e.exports = function (e) {
          return i(this.__data__, e) > -1;
        };
      },
      2426: function (e, t, n) {
        var i = n(8357);
        e.exports = function (e, t) {
          var n = this.__data__,
            a = i(n, e);
          return a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t), this;
        };
      },
      6409: function (e, t, n) {
        var i = n(1796),
          a = n(283),
          o = n(9036);
        e.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new i(),
              map: new (o || a)(),
              string: new i(),
            });
        };
      },
      2186: function (e, t, n) {
        var i = n(1143);
        e.exports = function (e) {
          var t = i(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        };
      },
      5601: function (e, t, n) {
        var i = n(1143);
        e.exports = function (e) {
          return i(this, e).get(e);
        };
      },
      1533: function (e, t, n) {
        var i = n(1143);
        e.exports = function (e) {
          return i(this, e).has(e);
        };
      },
      151: function (e, t, n) {
        var i = n(1143);
        e.exports = function (e, t) {
          var n = i(this, e),
            a = n.size;
          return n.set(e, t), (this.size += n.size == a ? 0 : 1), this;
        };
      },
      7170: function (e) {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, i) {
              n[++t] = [i, e];
            }),
            n
          );
        };
      },
      4167: function (e) {
        e.exports = function (e, t) {
          return function (n) {
            return null != n && n[e] === t && (void 0 !== t || e in Object(n));
          };
        };
      },
      6141: function (e, t, n) {
        var i = n(4984);
        e.exports = function (e) {
          var t = i(e, function (e) {
              return 500 === n.size && n.clear(), e;
            }),
            n = t.cache;
          return t;
        };
      },
      900: function (e, t, n) {
        var i = n(3283),
          a = i && new i();
        e.exports = a;
      },
      7305: function (e, t, n) {
        var i = n(440)(Object, "create");
        e.exports = i;
      },
      2440: function (e, t, n) {
        var i = n(6512)(Object.keys, Object);
        e.exports = i;
      },
      1308: function (e) {
        e.exports = function (e) {
          var t = [];
          if (null != e) for (var n in Object(e)) t.push(n);
          return t;
        };
      },
      895: function (e, t, n) {
        e = n.nmd(e);
        var i = n(2593),
          a = t && !t.nodeType && t,
          o = a && e && !e.nodeType && e,
          r = o && o.exports === a && i.process,
          l = (function () {
            try {
              var e = o && o.require && o.require("util").types;
              if (e) return e;
              return r && r.binding && r.binding("util");
            } catch (e) {}
          })();
        e.exports = l;
      },
      7070: function (e) {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      6512: function (e) {
        e.exports = function (e, t) {
          return function (n) {
            return e(t(n));
          };
        };
      },
      6813: function (e, t, n) {
        var i = n(9198),
          a = Math.max;
        e.exports = function (e, t, n) {
          return (
            (t = a(void 0 === t ? e.length - 1 : t, 0)),
            function () {
              for (
                var o = arguments, r = -1, l = a(o.length - t, 0), c = Array(l);
                ++r < l;

              )
                c[r] = o[t + r];
              r = -1;
              for (var d = Array(t + 1); ++r < t; ) d[r] = o[r];
              return (d[t] = n(c)), i(e, this, d);
            }
          );
        };
      },
      8564: function (e) {
        e.exports = {};
      },
      5238: function (e, t, n) {
        var i = n(2593),
          a = "object" == typeof self && self && self.Object === Object && self,
          o = i || a || Function("return this")();
        e.exports = o;
      },
      1760: function (e) {
        e.exports = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        };
      },
      5484: function (e) {
        e.exports = function (e) {
          return this.__data__.has(e);
        };
      },
      2779: function (e) {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        };
      },
      2413: function (e, t, n) {
        var i = n(2422),
          a = n(7890)(i);
        e.exports = a;
      },
      7890: function (e) {
        var t = Date.now;
        e.exports = function (e) {
          var n = 0,
            i = 0;
          return function () {
            var a = t(),
              o = 16 - (a - i);
            if (((i = a), o > 0)) {
              if (++n >= 800) return arguments[0];
            } else n = 0;
            return e.apply(void 0, arguments);
          };
        };
      },
      6063: function (e, t, n) {
        var i = n(283);
        e.exports = function () {
          (this.__data__ = new i()), (this.size = 0);
        };
      },
      7727: function (e) {
        e.exports = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        };
      },
      3281: function (e) {
        e.exports = function (e) {
          return this.__data__.get(e);
        };
      },
      6667: function (e) {
        e.exports = function (e) {
          return this.__data__.has(e);
        };
      },
      1270: function (e, t, n) {
        var i = n(283),
          a = n(9036),
          o = n(4544);
        e.exports = function (e, t) {
          var n = this.__data__;
          if (n instanceof i) {
            var r = n.__data__;
            if (!a || r.length < 199)
              return r.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new o(r);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      },
      6749: function (e, t, n) {
        var i = n(609),
          a = n(9520),
          o = n(9668);
        e.exports = function (e) {
          return a(e) ? o(e) : i(e);
        };
      },
      8997: function (e, t, n) {
        var i = n(6141),
          a =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          r = i(function (e) {
            var t = [];
            return (
              46 === e.charCodeAt(0) && t.push(""),
              e.replace(a, function (e, n, i, a) {
                t.push(i ? a.replace(o, "$1") : n || e);
              }),
              t
            );
          });
        e.exports = r;
      },
      8481: function (e, t, n) {
        var i = n(1359),
          a = 1 / 0;
        e.exports = function (e) {
          if ("string" == typeof e || i(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -a ? "-0" : t;
        };
      },
      1473: function (e) {
        var t = Function.prototype.toString;
        e.exports = function (e) {
          if (null != e) {
            try {
              return t.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        };
      },
      3230: function (e) {
        var t = /\s/;
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n;
        };
      },
      9668: function (e) {
        var t = "\ud800-\udfff",
          n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
          i = "\ud83c[\udffb-\udfff]",
          a = "[^" + t + "]",
          o = "(?:\ud83c[\udde6-\uddff]){2}",
          r = "[\ud800-\udbff][\udc00-\udfff]",
          l = "(?:" + n + "|" + i + ")?",
          c = "[\\ufe0e\\ufe0f]?",
          d = "(?:\\u200d(?:" + [a, o, r].join("|") + ")" + c + l + ")*",
          s = RegExp(
            i +
              "(?=" +
              i +
              ")|" +
              ("(?:" + [a + n + "?", n, o, r, "[" + t + "]"].join("|") + ")") +
              (c + l + d),
            "g"
          );
        e.exports = function (e) {
          for (var t = (s.lastIndex = 0); s.test(e); ) ++t;
          return t;
        };
      },
      219: function (e, t, n) {
        var i = n(4281),
          a = n(9675),
          o = n(8606);
        e.exports = function (e) {
          if (e instanceof i) return e.clone();
          var t = new a(e.__wrapped__, e.__chain__);
          return (
            (t.__actions__ = o(e.__actions__)),
            (t.__index__ = e.__index__),
            (t.__values__ = e.__values__),
            t
          );
        };
      },
      3789: function (e, t, n) {
        var i = n(2009),
          a = n(6127);
        e.exports = function (e, t, n) {
          return (
            void 0 === n && ((n = t), (t = void 0)),
            void 0 !== n && (n = (n = a(n)) == n ? n : 0),
            void 0 !== t && (t = (t = a(t)) == t ? t : 0),
            i(a(e), t, n)
          );
        };
      },
      5055: function (e) {
        e.exports = function (e) {
          return function () {
            return e;
          };
        };
      },
      8305: function (e, t, n) {
        var i = n(8532),
          a = n(806),
          o = n(6127),
          r = Math.max,
          l = Math.min;
        e.exports = function (e, t, n) {
          var c,
            d,
            s,
            f,
            u,
            p,
            I = 0,
            y = !1,
            E = !1,
            T = !0;
          if ("function" != typeof e) throw TypeError("Expected a function");
          function g(t) {
            var n = c,
              i = d;
            return (c = d = void 0), (I = t), (f = e.apply(i, n));
          }
          (t = o(t) || 0),
            i(n) &&
              ((y = !!n.leading),
              (s = (E = "maxWait" in n) ? r(o(n.maxWait) || 0, t) : s),
              (T = "trailing" in n ? !!n.trailing : T));
          function m(e) {
            var n = e - p,
              i = e - I;
            return void 0 === p || n >= t || n < 0 || (E && i >= s);
          }
          function O() {
            var e,
              n,
              i,
              o,
              r = a();
            if (m(r)) return b(r);
            u = setTimeout(
              O,
              ((n = (e = r) - p), (i = e - I), (o = t - n), E ? l(o, s - i) : o)
            );
          }
          function b(e) {
            return ((u = void 0), T && c) ? g(e) : ((c = d = void 0), f);
          }
          function v() {
            var e,
              n = a(),
              i = m(n);
            if (((c = arguments), (d = this), (p = n), i)) {
              if (void 0 === u) {
                return (I = e = p), (u = setTimeout(O, t)), y ? g(e) : f;
              }
              if (E) return clearTimeout(u), (u = setTimeout(O, t)), g(p);
            }
            return void 0 === u && (u = setTimeout(O, t)), f;
          }
          return (
            (v.cancel = function () {
              void 0 !== u && clearTimeout(u),
                (I = 0),
                (c = p = d = u = void 0);
            }),
            (v.flush = function () {
              return void 0 === u ? f : b(a());
            }),
            v
          );
        };
      },
      4075: function (e) {
        e.exports = function (e, t) {
          return null == e || e != e ? t : e;
        };
      },
      4071: function (e) {
        e.exports = function (e, t) {
          return e === t || (e != e && t != t);
        };
      },
      9777: function (e, t, n) {
        var i = n(727)(n(3142));
        e.exports = i;
      },
      3142: function (e, t, n) {
        var i = n(2056),
          a = n(5462),
          o = n(8536),
          r = Math.max;
        e.exports = function (e, t, n) {
          var l = null == e ? 0 : e.length;
          if (!l) return -1;
          var c = null == n ? 0 : o(n);
          return c < 0 && (c = r(l + c, 0)), i(e, a(t, 3), c);
        };
      },
      5720: function (e, t, n) {
        var i = n(727)(n(3758));
        e.exports = i;
      },
      3758: function (e, t, n) {
        var i = n(2056),
          a = n(5462),
          o = n(8536),
          r = Math.max,
          l = Math.min;
        e.exports = function (e, t, n) {
          var c = null == e ? 0 : e.length;
          if (!c) return -1;
          var d = c - 1;
          return (
            void 0 !== n &&
              ((d = o(n)), (d = n < 0 ? r(c + d, 0) : l(d, c - 1))),
            i(e, a(t, 3), d, !0)
          );
        };
      },
      6380: function (e, t, n) {
        var i = n(5265);
        e.exports = function (e) {
          return (null == e ? 0 : e.length) ? i(e, 1) : [];
        };
      },
      5801: function (e, t, n) {
        var i = n(914)();
        e.exports = i;
      },
      2397: function (e, t, n) {
        var i = n(4970),
          a = n(8264),
          o = n(8269),
          r = n(6377);
        e.exports = function (e, t) {
          return (r(e) ? i : a)(e, o(t));
        };
      },
      4738: function (e, t, n) {
        var i = n(1957);
        e.exports = function (e, t, n) {
          var a = null == e ? void 0 : i(e, t);
          return void 0 === a ? n : a;
        };
      },
      9290: function (e, t, n) {
        var i = n(6993),
          a = n(7635);
        e.exports = function (e, t) {
          return null != e && a(e, t, i);
        };
      },
      1622: function (e) {
        e.exports = function (e) {
          return e;
        };
      },
      9732: function (e, t, n) {
        var i = n(841),
          a = n(7013),
          o = Object.prototype,
          r = o.hasOwnProperty,
          l = o.propertyIsEnumerable,
          c = i(
            (function () {
              return arguments;
            })()
          )
            ? i
            : function (e) {
                return a(e) && r.call(e, "callee") && !l.call(e, "callee");
              };
        e.exports = c;
      },
      6377: function (e) {
        var t = Array.isArray;
        e.exports = t;
      },
      508: function (e, t, n) {
        var i = n(6644),
          a = n(7924);
        e.exports = function (e) {
          return null != e && a(e.length) && !i(e);
        };
      },
      6018: function (e, t, n) {
        e = n.nmd(e);
        var i = n(5238),
          a = n(5786),
          o = t && !t.nodeType && t,
          r = o && e && !e.nodeType && e,
          l = r && r.exports === o ? i.Buffer : void 0,
          c = l ? l.isBuffer : void 0;
        e.exports = c || a;
      },
      6633: function (e, t, n) {
        var i = n(7407),
          a = n(9937),
          o = n(9732),
          r = n(6377),
          l = n(508),
          c = n(6018),
          d = n(8857),
          s = n(8586),
          f = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          if (null == e) return !0;
          if (
            l(e) &&
            (r(e) ||
              "string" == typeof e ||
              "function" == typeof e.splice ||
              c(e) ||
              s(e) ||
              o(e))
          )
            return !e.length;
          var t = a(e);
          if ("[object Map]" == t || "[object Set]" == t) return !e.size;
          if (d(e)) return !i(e).length;
          for (var n in e) if (f.call(e, n)) return !1;
          return !0;
        };
      },
      6644: function (e, t, n) {
        var i = n(3757),
          a = n(8532);
        e.exports = function (e) {
          if (!a(e)) return !1;
          var t = i(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        };
      },
      7924: function (e) {
        e.exports = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 0x1fffffffffffff
          );
        };
      },
      8532: function (e) {
        e.exports = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      7013: function (e) {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      1085: function (e, t, n) {
        var i = n(3757),
          a = n(6377),
          o = n(7013);
        e.exports = function (e) {
          return (
            "string" == typeof e || (!a(e) && o(e) && "[object String]" == i(e))
          );
        };
      },
      1359: function (e, t, n) {
        var i = n(3757),
          a = n(7013);
        e.exports = function (e) {
          return "symbol" == typeof e || (a(e) && "[object Symbol]" == i(e));
        };
      },
      8586: function (e, t, n) {
        var i = n(2195),
          a = n(7509),
          o = n(895),
          r = o && o.isTypedArray,
          l = r ? a(r) : i;
        e.exports = l;
      },
      7361: function (e, t, n) {
        var i = n(4979),
          a = n(7407),
          o = n(508);
        e.exports = function (e) {
          return o(e) ? i(e) : a(e);
        };
      },
      3747: function (e, t, n) {
        var i = n(4979),
          a = n(9237),
          o = n(508);
        e.exports = function (e) {
          return o(e) ? i(e, !0) : a(e);
        };
      },
      3729: function (e, t, n) {
        var i = n(2676),
          a = n(3406),
          o = n(5462);
        e.exports = function (e, t) {
          var n = {};
          return (
            (t = o(t, 3)),
            a(e, function (e, a, o) {
              i(n, a, t(e, a, o));
            }),
            n
          );
        };
      },
      4984: function (e, t, n) {
        var i = n(4544);
        function a(e, t) {
          if ("function" != typeof e || (null != t && "function" != typeof t))
            throw TypeError("Expected a function");
          var n = function () {
            var i = arguments,
              a = t ? t.apply(this, i) : i[0],
              o = n.cache;
            if (o.has(a)) return o.get(a);
            var r = e.apply(this, i);
            return (n.cache = o.set(a, r) || o), r;
          };
          return (n.cache = new (a.Cache || i)()), n;
        }
        (a.Cache = i), (e.exports = a);
      },
      3103: function (e) {
        e.exports = function (e) {
          if ("function" != typeof e) throw TypeError("Expected a function");
          return function () {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }
            return !e.apply(this, t);
          };
        };
      },
      6032: function (e) {
        e.exports = function () {};
      },
      806: function (e, t, n) {
        var i = n(5238);
        e.exports = function () {
          return i.Date.now();
        };
      },
      3452: function (e, t, n) {
        var i = n(5462),
          a = n(3103),
          o = n(4103);
        e.exports = function (e, t) {
          return o(e, a(i(t)));
        };
      },
      4103: function (e, t, n) {
        var i = n(1098),
          a = n(5462),
          o = n(7100),
          r = n(9254);
        e.exports = function (e, t) {
          if (null == e) return {};
          var n = i(r(e), function (e) {
            return [e];
          });
          return (
            (t = a(t)),
            o(e, n, function (e, n) {
              return t(e, n[0]);
            })
          );
        };
      },
      8303: function (e, t, n) {
        var i = n(2726),
          a = n(1374),
          o = n(7074),
          r = n(8481);
        e.exports = function (e) {
          return o(e) ? i(r(e)) : a(e);
        };
      },
      1455: function (e, t, n) {
        var i = n(2607),
          a = n(8264),
          o = n(5462),
          r = n(9864),
          l = n(6377);
        e.exports = function (e, t, n) {
          var c = l(e) ? i : r,
            d = arguments.length < 3;
          return c(e, o(t, 4), n, d, a);
        };
      },
      4659: function (e, t, n) {
        var i = n(7407),
          a = n(9937),
          o = n(508),
          r = n(1085),
          l = n(6749);
        e.exports = function (e) {
          if (null == e) return 0;
          if (o(e)) return r(e) ? l(e) : e.length;
          var t = a(e);
          return "[object Map]" == t || "[object Set]" == t
            ? e.size
            : i(e).length;
        };
      },
      1036: function (e) {
        e.exports = function () {
          return [];
        };
      },
      5786: function (e) {
        e.exports = function () {
          return !1;
        };
      },
      5082: function (e, t, n) {
        var i = n(8305),
          a = n(8532);
        e.exports = function (e, t, n) {
          var o = !0,
            r = !0;
          if ("function" != typeof e) throw TypeError("Expected a function");
          return (
            a(n) &&
              ((o = "leading" in n ? !!n.leading : o),
              (r = "trailing" in n ? !!n.trailing : r)),
            i(e, t, { leading: o, maxWait: t, trailing: r })
          );
        };
      },
      5597: function (e, t, n) {
        var i = n(6127),
          a = 1 / 0;
        e.exports = function (e) {
          return e
            ? (e = i(e)) === a || e === -a
              ? (e < 0 ? -1 : 1) * 17976931348623157e292
              : e == e
              ? e
              : 0
            : 0 === e
            ? e
            : 0;
        };
      },
      8536: function (e, t, n) {
        var i = n(5597);
        e.exports = function (e) {
          var t = i(e),
            n = t % 1;
          return t == t ? (n ? t - n : t) : 0;
        };
      },
      6127: function (e, t, n) {
        var i = n(1072),
          a = n(8532),
          o = n(1359),
          r = 0 / 0,
          l = /^[-+]0x[0-9a-f]+$/i,
          c = /^0b[01]+$/i,
          d = /^0o[0-7]+$/i,
          s = parseInt;
        e.exports = function (e) {
          if ("number" == typeof e) return e;
          if (o(e)) return r;
          if (a(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = a(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = i(e);
          var n = c.test(e);
          return n || d.test(e) ? s(e.slice(2), n ? 2 : 8) : l.test(e) ? r : +e;
        };
      },
      6214: function (e, t, n) {
        var i = n(9653);
        e.exports = function (e) {
          return null == e ? "" : i(e);
        };
      },
      6985: function (e, t, n) {
        var i = n(4281),
          a = n(9675),
          o = n(4382),
          r = n(6377),
          l = n(7013),
          c = n(219),
          d = Object.prototype.hasOwnProperty;
        function s(e) {
          if (l(e) && !r(e) && !(e instanceof i)) {
            if (e instanceof a) return e;
            if (d.call(e, "__wrapped__")) return c(e);
          }
          return new a(e);
        }
        (s.prototype = o.prototype),
          (s.prototype.constructor = s),
          (e.exports = s);
      },
      9516: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            combineReducers: () => S,
            applyMiddleware: () => G,
            createStore: () => R,
            compose: () => N,
            bindActionCreators: () => L,
          });
        var i,
          a,
          o =
            "object" == typeof global &&
            global &&
            global.Object === Object &&
            global,
          r = "object" == typeof self && self && self.Object === Object && self,
          l = o || r || Function("return this")(),
          c = l.Symbol,
          d = Object.prototype,
          s = d.hasOwnProperty,
          f = d.toString,
          u = c ? c.toStringTag : void 0;
        let p = function (e) {
          var t = s.call(e, u),
            n = e[u];
          try {
            e[u] = void 0;
            var i = !0;
          } catch (e) {}
          var a = f.call(e);
          return i && (t ? (e[u] = n) : delete e[u]), a;
        };
        var I = Object.prototype.toString,
          y = c ? c.toStringTag : void 0;
        let E = function (e) {
          var t;
          if (null == e)
            return void 0 === e ? "[object Undefined]" : "[object Null]";
          return y && y in Object(e) ? p(e) : ((t = e), I.call(t));
        };
        var T =
            ((i = Object.getPrototypeOf),
            (a = Object),
            function (e) {
              return i(a(e));
            }),
          g = Object.prototype,
          m = Function.prototype.toString,
          O = g.hasOwnProperty,
          b = m.call(Object);
        let v = function (e) {
          if (
            !(null != (t = e) && "object" == typeof t) ||
            "[object Object]" != E(e)
          )
            return !1;
          var t,
            n = T(e);
          if (null === n) return !0;
          var i = O.call(n, "constructor") && n.constructor;
          return "function" == typeof i && i instanceof i && m.call(i) == b;
        };
        var _ = n("3485"),
          A = { INIT: "@@redux/INIT" };
        function R(e, t, n) {
          if (
            ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
            void 0 !== n)
          ) {
            if ("function" != typeof n)
              throw Error("Expected the enhancer to be a function.");
            return n(R)(e, t);
          }
          if ("function" != typeof e)
            throw Error("Expected the reducer to be a function.");
          var i,
            a = e,
            o = t,
            r = [],
            l = r,
            c = !1;
          function d() {
            l === r && (l = r.slice());
          }
          function s() {
            return o;
          }
          function f(e) {
            if ("function" != typeof e)
              throw Error("Expected listener to be a function.");
            var t = !0;
            return (
              d(),
              l.push(e),
              function () {
                if (!!t) {
                  (t = !1), d();
                  var n = l.indexOf(e);
                  l.splice(n, 1);
                }
              }
            );
          }
          function u(e) {
            if (!v(e))
              throw Error(
                "Actions must be plain objects. Use custom middleware for async actions."
              );
            if (void 0 === e.type)
              throw Error(
                'Actions may not have an undefined "type" property. Have you misspelled a constant?'
              );
            if (c) throw Error("Reducers may not dispatch actions.");
            try {
              (c = !0), (o = a(o, e));
            } finally {
              c = !1;
            }
            for (var t = (r = l), n = 0; n < t.length; n++) t[n]();
            return e;
          }
          return (
            u({ type: A.INIT }),
            ((i = {
              dispatch: u,
              subscribe: f,
              getState: s,
              replaceReducer: function (e) {
                if ("function" != typeof e)
                  throw Error("Expected the nextReducer to be a function.");
                (a = e), u({ type: A.INIT });
              },
            })[_.Z] = function () {
              var e;
              return (
                ((e = {
                  subscribe: function (e) {
                    if ("object" != typeof e)
                      throw TypeError("Expected the observer to be an object.");
                    function t() {
                      e.next && e.next(o);
                    }
                    return t(), { unsubscribe: f(t) };
                  },
                })[_.Z] = function () {
                  return this;
                }),
                e
              );
            }),
            i
          );
        }
        function S(e) {
          for (var t, n = Object.keys(e), i = {}, a = 0; a < n.length; a++) {
            var o = n[a];
            "function" == typeof e[o] && (i[o] = e[o]);
          }
          var r = Object.keys(i);
          try {
            !(function (e) {
              Object.keys(e).forEach(function (t) {
                var n = e[t];
                if (void 0 === n(void 0, { type: A.INIT }))
                  throw Error(
                    'Reducer "' +
                      t +
                      '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                  );
                if (
                  void 0 ===
                  n(void 0, {
                    type:
                      "@@redux/PROBE_UNKNOWN_ACTION_" +
                      Math.random()
                        .toString(36)
                        .substring(7)
                        .split("")
                        .join("."),
                  })
                )
                  throw Error(
                    'Reducer "' +
                      t +
                      '" returned undefined when probed with a random type. ' +
                      ("Don't try to handle " + A.INIT) +
                      ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
                  );
              });
            })(i);
          } catch (e) {
            t = e;
          }
          return function () {
            var e =
                arguments.length <= 0 || void 0 === arguments[0]
                  ? {}
                  : arguments[0],
              n = arguments[1];
            if (t) throw t;
            for (var a = !1, o = {}, l = 0; l < r.length; l++) {
              var c = r[l],
                d = i[c],
                s = e[c],
                f = d(s, n);
              if (void 0 === f)
                throw Error(
                  (function (e, t) {
                    var n = t && t.type;
                    return (
                      "Given action " +
                      ((n && '"' + n.toString() + '"') || "an action") +
                      ', reducer "' +
                      e +
                      '" returned undefined. To ignore an action, you must explicitly return the previous state.'
                    );
                  })(c, n)
                );
              (o[c] = f), (a = a || f !== s);
            }
            return a ? o : e;
          };
        }
        function h(e, t) {
          return function () {
            return t(e.apply(void 0, arguments));
          };
        }
        function L(e, t) {
          if ("function" == typeof e) return h(e, t);
          if ("object" != typeof e || null === e)
            throw Error(
              "bindActionCreators expected an object or a function, instead received " +
                (null === e ? "null" : typeof e) +
                '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
            );
          for (var n = Object.keys(e), i = {}, a = 0; a < n.length; a++) {
            var o = n[a],
              r = e[o];
            "function" == typeof r && (i[o] = h(r, t));
          }
          return i;
        }
        function N() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (0 === t.length)
            return function (e) {
              return e;
            };
          if (1 === t.length) return t[0];
          var i = t[t.length - 1],
            a = t.slice(0, -1);
          return function () {
            return a.reduceRight(function (e, t) {
              return t(e);
            }, i.apply(void 0, arguments));
          };
        }
        var C =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          };
        function G() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return function (n, i, a) {
              var o = e(n, i, a),
                r = o.dispatch,
                l = [],
                c = {
                  getState: o.getState,
                  dispatch: function (e) {
                    return r(e);
                  },
                };
              return (
                (l = t.map(function (e) {
                  return e(c);
                })),
                (r = N.apply(void 0, l)(o.dispatch)),
                C({}, o, { dispatch: r })
              );
            };
          };
        }
      },
      3485: function (e, t, n) {
        "use strict";
        var i, a, o;
        n.d(t, { Z: () => r });
        (e = n.hmd(e)),
          "undefined" != typeof self
            ? (o = self)
            : "undefined" != typeof window
            ? (o = window)
            : void 0 !== n.g
            ? (o = n.g)
            : (o = e);
        let r =
          ("function" == typeof (a = o.Symbol)
            ? a.observable
              ? (i = a.observable)
              : ((i = a("observable")), (a.observable = i))
            : (i = "@@observable"),
          i);
      },
      1185: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
        (t.clone = l),
          (t.addLast = s),
          (t.addFirst = f),
          (t.removeLast = u),
          (t.removeFirst = p),
          (t.insert = I),
          (t.removeAt = y),
          (t.replaceAt = E),
          (t.getIn = T),
          (t.set = g),
          (t.setIn = m),
          (t.update = O),
          (t.updateIn = b),
          (t.merge = v),
          (t.mergeDeep = _),
          (t.mergeIn = A),
          (t.omit = R),
          (t.addDefaults = S);
        var i = "INVALID_ARGS";
        function a(e) {
          throw Error(e);
        }
        function o(e) {
          var t = Object.keys(e);
          return Object.getOwnPropertySymbols
            ? t.concat(Object.getOwnPropertySymbols(e))
            : t;
        }
        var r = {}.hasOwnProperty;
        function l(e) {
          if (Array.isArray(e)) return e.slice();
          for (var t = o(e), n = {}, i = 0; i < t.length; i++) {
            var a = t[i];
            n[a] = e[a];
          }
          return n;
        }
        function c(e, t, n) {
          var r = n;
          null != r || a(i);
          for (
            var s = !1,
              f = arguments.length,
              u = Array(f > 3 ? f - 3 : 0),
              p = 3;
            p < f;
            p++
          )
            u[p - 3] = arguments[p];
          for (var I = 0; I < u.length; I++) {
            var y = u[I];
            if (null != y) {
              var E = o(y);
              if (E.length)
                for (var T = 0; T <= E.length; T++) {
                  var g = E[T];
                  if (!e || void 0 === r[g]) {
                    var m = y[g];
                    t && d(r[g]) && d(m) && (m = c(e, t, r[g], m)),
                      void 0 !== m &&
                        m !== r[g] &&
                        (!s && ((s = !0), (r = l(r))), (r[g] = m));
                  }
                }
            }
          }
          return r;
        }
        function d(e) {
          var t = void 0 === e ? "undefined" : n(e);
          return null != e && ("object" === t || "function" === t);
        }
        function s(e, t) {
          return Array.isArray(t) ? e.concat(t) : e.concat([t]);
        }
        function f(e, t) {
          return Array.isArray(t) ? t.concat(e) : [t].concat(e);
        }
        function u(e) {
          return e.length ? e.slice(0, e.length - 1) : e;
        }
        function p(e) {
          return e.length ? e.slice(1) : e;
        }
        function I(e, t, n) {
          return e
            .slice(0, t)
            .concat(Array.isArray(n) ? n : [n])
            .concat(e.slice(t));
        }
        function y(e, t) {
          return t >= e.length || t < 0
            ? e
            : e.slice(0, t).concat(e.slice(t + 1));
        }
        function E(e, t, n) {
          if (e[t] === n) return e;
          for (var i = e.length, a = Array(i), o = 0; o < i; o++) a[o] = e[o];
          return (a[t] = n), a;
        }
        function T(e, t) {
          if ((Array.isArray(t) || a(i), null != e)) {
            for (var n = e, o = 0; o < t.length; o++) {
              var r = t[o];
              if (void 0 === (n = null != n ? n[r] : void 0)) break;
            }
            return n;
          }
        }
        function g(e, t, n) {
          var i = null == e ? ("number" == typeof t ? [] : {}) : e;
          if (i[t] === n) return i;
          var a = l(i);
          return (a[t] = n), a;
        }
        function m(e, t, n) {
          return t.length
            ? (function e(t, n, i, a) {
                var o = void 0,
                  r = n[a];
                return (
                  (o =
                    a === n.length - 1
                      ? i
                      : e(
                          d(t) && d(t[r])
                            ? t[r]
                            : "number" == typeof n[a + 1]
                            ? []
                            : {},
                          n,
                          i,
                          a + 1
                        )),
                  g(t, r, o)
                );
              })(e, t, n, 0)
            : n;
        }
        function O(e, t, n) {
          var i = n(null == e ? void 0 : e[t]);
          return g(e, t, i);
        }
        function b(e, t, n) {
          var i = n(T(e, t));
          return m(e, t, i);
        }
        function v(e, t, n, i, a, o) {
          for (
            var r = arguments.length, l = Array(r > 6 ? r - 6 : 0), d = 6;
            d < r;
            d++
          )
            l[d - 6] = arguments[d];
          return l.length
            ? c.call.apply(c, [null, !1, !1, e, t, n, i, a, o].concat(l))
            : c(!1, !1, e, t, n, i, a, o);
        }
        function _(e, t, n, i, a, o) {
          for (
            var r = arguments.length, l = Array(r > 6 ? r - 6 : 0), d = 6;
            d < r;
            d++
          )
            l[d - 6] = arguments[d];
          return l.length
            ? c.call.apply(c, [null, !1, !0, e, t, n, i, a, o].concat(l))
            : c(!1, !0, e, t, n, i, a, o);
        }
        function A(e, t, n, i, a, o, r) {
          var l = T(e, t);
          null == l && (l = {});
          for (
            var d = void 0,
              s = arguments.length,
              f = Array(s > 7 ? s - 7 : 0),
              u = 7;
            u < s;
            u++
          )
            f[u - 7] = arguments[u];
          return m(
            e,
            t,
            (d = f.length
              ? c.call.apply(c, [null, !1, !1, l, n, i, a, o, r].concat(f))
              : c(!1, !1, l, n, i, a, o, r))
          );
        }
        function R(e, t) {
          for (
            var n = Array.isArray(t) ? t : [t], i = !1, a = 0;
            a < n.length;
            a++
          )
            if (r.call(e, n[a])) {
              i = !0;
              break;
            }
          if (!i) return e;
          for (var l = {}, c = o(e), d = 0; d < c.length; d++) {
            var s = c[d];
            !(n.indexOf(s) >= 0) && (l[s] = e[s]);
          }
          return l;
        }
        function S(e, t, n, i, a, o) {
          for (
            var r = arguments.length, l = Array(r > 6 ? r - 6 : 0), d = 6;
            d < r;
            d++
          )
            l[d - 6] = arguments[d];
          return l.length
            ? c.call.apply(c, [null, !0, !1, e, t, n, i, a, o].concat(l))
            : c(!0, !1, e, t, n, i, a, o);
        }
        t.default = {
          clone: l,
          addLast: s,
          addFirst: f,
          removeLast: u,
          removeFirst: p,
          insert: I,
          removeAt: y,
          replaceAt: E,
          getIn: T,
          set: g,
          setIn: m,
          update: O,
          updateIn: b,
          merge: v,
          mergeDeep: _,
          mergeIn: A,
          omit: R,
          addDefaults: S,
        };
      },
      5487: function () {
        "use strict";
        window.tram = (function (e) {
          function t(e, t) {
            return new M.Bare().init(e, t);
          }
          function n(e) {
            var t = parseInt(e.slice(1), 16);
            return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
          }
          function i(e, t, n) {
            return (
              "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
            );
          }
          function a() {}
          function o(e, t, n) {
            if ((void 0 !== t && (n = t), void 0 === e)) return n;
            var i = n;
            return (
              $.test(e) || !q.test(e)
                ? (i = parseInt(e, 10))
                : q.test(e) && (i = 1e3 * parseFloat(e)),
              0 > i && (i = 0),
              i == i ? i : n
            );
          }
          function r(e) {
            X.debug && window && window.console.warn(e);
          }
          var l,
            c,
            d,
            s = (function (e, t, n) {
              function i(e) {
                return "object" == typeof e;
              }
              function a(e) {
                return "function" == typeof e;
              }
              function o() {}
              return function r(l, c) {
                function d() {
                  var e = new s();
                  return a(e.init) && e.init.apply(e, arguments), e;
                }
                function s() {}
                c === n && ((c = l), (l = Object)), (d.Bare = s);
                var f,
                  u = (o[e] = l[e]),
                  p = (s[e] = d[e] = new o());
                return (
                  (p.constructor = d),
                  (d.mixin = function (t) {
                    return (s[e] = d[e] = r(d, t)[e]), d;
                  }),
                  (d.open = function (e) {
                    if (
                      ((f = {}),
                      a(e) ? (f = e.call(d, p, u, d, l)) : i(e) && (f = e),
                      i(f))
                    )
                      for (var n in f) t.call(f, n) && (p[n] = f[n]);
                    return a(p.init) || (p.init = l), d;
                  }),
                  d.open(c)
                );
              };
            })("prototype", {}.hasOwnProperty),
            f = {
              ease: [
                "ease",
                function (e, t, n, i) {
                  var a = (e /= i) * e,
                    o = a * e;
                  return (
                    t +
                    n *
                      (-2.75 * o * a +
                        11 * a * a +
                        -15.5 * o +
                        8 * a +
                        0.25 * e)
                  );
                },
              ],
              "ease-in": [
                "ease-in",
                function (e, t, n, i) {
                  var a = (e /= i) * e,
                    o = a * e;
                  return t + n * (-1 * o * a + 3 * a * a + -3 * o + 2 * a);
                },
              ],
              "ease-out": [
                "ease-out",
                function (e, t, n, i) {
                  var a = (e /= i) * e,
                    o = a * e;
                  return (
                    t +
                    n *
                      (0.3 * o * a +
                        -1.6 * a * a +
                        2.2 * o +
                        -1.8 * a +
                        1.9 * e)
                  );
                },
              ],
              "ease-in-out": [
                "ease-in-out",
                function (e, t, n, i) {
                  var a = (e /= i) * e,
                    o = a * e;
                  return t + n * (2 * o * a + -5 * a * a + 2 * o + 2 * a);
                },
              ],
              linear: [
                "linear",
                function (e, t, n, i) {
                  return (n * e) / i + t;
                },
              ],
              "ease-in-quad": [
                "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                function (e, t, n, i) {
                  return n * (e /= i) * e + t;
                },
              ],
              "ease-out-quad": [
                "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                function (e, t, n, i) {
                  return -n * (e /= i) * (e - 2) + t;
                },
              ],
              "ease-in-out-quad": [
                "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (n / 2) * e * e + t
                    : (-n / 2) * (--e * (e - 2) - 1) + t;
                },
              ],
              "ease-in-cubic": [
                "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                function (e, t, n, i) {
                  return n * (e /= i) * e * e + t;
                },
              ],
              "ease-out-cubic": [
                "cubic-bezier(0.215, 0.610, 0.355, 1)",
                function (e, t, n, i) {
                  return n * ((e = e / i - 1) * e * e + 1) + t;
                },
              ],
              "ease-in-out-cubic": [
                "cubic-bezier(0.645, 0.045, 0.355, 1)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (n / 2) * e * e * e + t
                    : (n / 2) * ((e -= 2) * e * e + 2) + t;
                },
              ],
              "ease-in-quart": [
                "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                function (e, t, n, i) {
                  return n * (e /= i) * e * e * e + t;
                },
              ],
              "ease-out-quart": [
                "cubic-bezier(0.165, 0.840, 0.440, 1)",
                function (e, t, n, i) {
                  return -n * ((e = e / i - 1) * e * e * e - 1) + t;
                },
              ],
              "ease-in-out-quart": [
                "cubic-bezier(0.770, 0, 0.175, 1)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (n / 2) * e * e * e * e + t
                    : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
                },
              ],
              "ease-in-quint": [
                "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                function (e, t, n, i) {
                  return n * (e /= i) * e * e * e * e + t;
                },
              ],
              "ease-out-quint": [
                "cubic-bezier(0.230, 1, 0.320, 1)",
                function (e, t, n, i) {
                  return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
                },
              ],
              "ease-in-out-quint": [
                "cubic-bezier(0.860, 0, 0.070, 1)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (n / 2) * e * e * e * e * e + t
                    : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
                },
              ],
              "ease-in-sine": [
                "cubic-bezier(0.470, 0, 0.745, 0.715)",
                function (e, t, n, i) {
                  return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
                },
              ],
              "ease-out-sine": [
                "cubic-bezier(0.390, 0.575, 0.565, 1)",
                function (e, t, n, i) {
                  return n * Math.sin((e / i) * (Math.PI / 2)) + t;
                },
              ],
              "ease-in-out-sine": [
                "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                function (e, t, n, i) {
                  return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
                },
              ],
              "ease-in-expo": [
                "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                function (e, t, n, i) {
                  return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
                },
              ],
              "ease-out-expo": [
                "cubic-bezier(0.190, 1, 0.220, 1)",
                function (e, t, n, i) {
                  return e === i
                    ? t + n
                    : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
                },
              ],
              "ease-in-out-expo": [
                "cubic-bezier(1, 0, 0, 1)",
                function (e, t, n, i) {
                  return 0 === e
                    ? t
                    : e === i
                    ? t + n
                    : (e /= i / 2) < 1
                    ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                    : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
                },
              ],
              "ease-in-circ": [
                "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                function (e, t, n, i) {
                  return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
                },
              ],
              "ease-out-circ": [
                "cubic-bezier(0.075, 0.820, 0.165, 1)",
                function (e, t, n, i) {
                  return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
                },
              ],
              "ease-in-out-circ": [
                "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                    : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
                },
              ],
              "ease-in-back": [
                "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                function (e, t, n, i, a) {
                  return (
                    void 0 === a && (a = 1.70158),
                    n * (e /= i) * e * ((a + 1) * e - a) + t
                  );
                },
              ],
              "ease-out-back": [
                "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                function (e, t, n, i, a) {
                  return (
                    void 0 === a && (a = 1.70158),
                    n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                  );
                },
              ],
              "ease-in-out-back": [
                "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                function (e, t, n, i, a) {
                  return (
                    void 0 === a && (a = 1.70158),
                    (e /= i / 2) < 1
                      ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                      : (n / 2) *
                          ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                        t
                  );
                },
              ],
            },
            u = {
              "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
              "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
              "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
            },
            p = window,
            I = "bkwld-tram",
            y = /[\-\.0-9]/g,
            E = /[A-Z]/,
            T = "number",
            g = /^(rgb|#)/,
            m = /(em|cm|mm|in|pt|pc|px)$/,
            O = /(em|cm|mm|in|pt|pc|px|%)$/,
            b = /(deg|rad|turn)$/,
            v = "unitless",
            _ = /(all|none) 0s ease 0s/,
            A = /^(width|height)$/,
            R = document.createElement("a"),
            S = ["Webkit", "Moz", "O", "ms"],
            h = ["-webkit-", "-moz-", "-o-", "-ms-"],
            L = function (e) {
              if (e in R.style) return { dom: e, css: e };
              var t,
                n,
                i = "",
                a = e.split("-");
              for (t = 0; t < a.length; t++)
                i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
              for (t = 0; t < S.length; t++)
                if ((n = S[t] + i) in R.style) return { dom: n, css: h[t] + e };
            },
            N = (t.support = {
              bind: Function.prototype.bind,
              transform: L("transform"),
              transition: L("transition"),
              backface: L("backface-visibility"),
              timing: L("transition-timing-function"),
            });
          if (N.transition) {
            var C = N.timing.dom;
            if (((R.style[C] = f["ease-in-back"][0]), !R.style[C]))
              for (var G in u) f[G][0] = u[G];
          }
          var P = (t.frame =
              (l =
                p.requestAnimationFrame ||
                p.webkitRequestAnimationFrame ||
                p.mozRequestAnimationFrame ||
                p.oRequestAnimationFrame ||
                p.msRequestAnimationFrame) && N.bind
                ? l.bind(p)
                : function (e) {
                    p.setTimeout(e, 16);
                  }),
            x = (t.now =
              (d =
                (c = p.performance) &&
                (c.now || c.webkitNow || c.msNow || c.mozNow)) && N.bind
                ? d.bind(c)
                : Date.now ||
                  function () {
                    return +new Date();
                  }),
            U = s(function (t) {
              function n(e, t) {
                var n = (function (e) {
                    for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                      var a = e[t];
                      a && i.push(a);
                    }
                    return i;
                  })(("" + e).split(" ")),
                  i = n[0];
                t = t || {};
                var a = z[i];
                if (!a) return r("Unsupported property: " + i);
                if (!t.weak || !this.props[i]) {
                  var o = a[0],
                    l = this.props[i];
                  return (
                    l || (l = this.props[i] = new o.Bare()),
                    l.init(this.$el, n, a, t),
                    l
                  );
                }
              }
              function i(e, t, i) {
                if (e) {
                  var r = typeof e;
                  if (
                    (t ||
                      (this.timer && this.timer.destroy(),
                      (this.queue = []),
                      (this.active = !1)),
                    "number" == r && t)
                  )
                    return (
                      (this.timer = new D({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      void (this.active = !0)
                    );
                  if ("string" == r && t) {
                    switch (e) {
                      case "hide":
                        c.call(this);
                        break;
                      case "stop":
                        l.call(this);
                        break;
                      case "redraw":
                        d.call(this);
                        break;
                      default:
                        n.call(this, e, i && i[1]);
                    }
                    return a.call(this);
                  }
                  if ("function" == r) return void e.call(this, this);
                  if ("object" == r) {
                    var u = 0;
                    f.call(
                      this,
                      e,
                      function (e, t) {
                        e.span > u && (u = e.span), e.stop(), e.animate(t);
                      },
                      function (e) {
                        "wait" in e && (u = o(e.wait, 0));
                      }
                    ),
                      s.call(this),
                      u > 0 &&
                        ((this.timer = new D({ duration: u, context: this })),
                        (this.active = !0),
                        t && (this.timer.complete = a));
                    var p = this,
                      I = !1,
                      y = {};
                    P(function () {
                      f.call(p, e, function (e) {
                        e.active && ((I = !0), (y[e.name] = e.nextStyle));
                      }),
                        I && p.$el.css(y);
                    });
                  }
                }
              }
              function a() {
                if (
                  (this.timer && this.timer.destroy(),
                  (this.active = !1),
                  this.queue.length)
                ) {
                  var e = this.queue.shift();
                  i.call(this, e.options, !0, e.args);
                }
              }
              function l(e) {
                var t;
                this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1),
                  "string" == typeof e
                    ? ((t = {})[e] = 1)
                    : (t = "object" == typeof e && null != e ? e : this.props),
                  f.call(this, t, u),
                  s.call(this);
              }
              function c() {
                l.call(this), (this.el.style.display = "none");
              }
              function d() {
                this.el.offsetHeight;
              }
              function s() {
                var e,
                  t,
                  n = [];
                for (e in (this.upstream && n.push(this.upstream), this.props))
                  (t = this.props[e]).active && n.push(t.string);
                (n = n.join(",")),
                  this.style !== n &&
                    ((this.style = n), (this.el.style[N.transition.dom] = n));
              }
              function f(e, t, i) {
                var a,
                  o,
                  r,
                  l,
                  c = t !== u,
                  d = {};
                for (a in e)
                  (r = e[a]),
                    a in H
                      ? (d.transform || (d.transform = {}),
                        (d.transform[a] = r))
                      : (E.test(a) &&
                          (a = a.replace(/[A-Z]/g, function (e) {
                            return "-" + e.toLowerCase();
                          })),
                        a in z ? (d[a] = r) : (l || (l = {}), (l[a] = r)));
                for (a in d) {
                  if (((r = d[a]), !(o = this.props[a]))) {
                    if (!c) continue;
                    o = n.call(this, a);
                  }
                  t.call(this, o, r);
                }
                i && l && i.call(this, l);
              }
              function u(e) {
                e.stop();
              }
              function p(e, t) {
                e.set(t);
              }
              function y(e) {
                this.$el.css(e);
              }
              function T(e, n) {
                t[e] = function () {
                  return this.children
                    ? g.call(this, n, arguments)
                    : (this.el && n.apply(this, arguments), this);
                };
              }
              function g(e, t) {
                var n,
                  i = this.children.length;
                for (n = 0; i > n; n++) e.apply(this.children[n], t);
                return this;
              }
              (t.init = function (t) {
                if (
                  ((this.$el = e(t)),
                  (this.el = this.$el[0]),
                  (this.props = {}),
                  (this.queue = []),
                  (this.style = ""),
                  (this.active = !1),
                  X.keepInherited && !X.fallback)
                ) {
                  var n = Q(this.el, "transition");
                  n && !_.test(n) && (this.upstream = n);
                }
                N.backface &&
                  X.hideBackface &&
                  W(this.el, N.backface.css, "hidden");
              }),
                T("add", n),
                T("start", i),
                T("wait", function (e) {
                  (e = o(e, 0)),
                    this.active
                      ? this.queue.push({ options: e })
                      : ((this.timer = new D({
                          duration: e,
                          context: this,
                          complete: a,
                        })),
                        (this.active = !0));
                }),
                T("then", function (e) {
                  return this.active
                    ? (this.queue.push({ options: e, args: arguments }),
                      void (this.timer.complete = a))
                    : r(
                        "No active transition timer. Use start() or wait() before then()."
                      );
                }),
                T("next", a),
                T("stop", l),
                T("set", function (e) {
                  l.call(this, e), f.call(this, e, p, y);
                }),
                T("show", function (e) {
                  "string" != typeof e && (e = "block"),
                    (this.el.style.display = e);
                }),
                T("hide", c),
                T("redraw", d),
                T("destroy", function () {
                  l.call(this),
                    e.removeData(this.el, I),
                    (this.$el = this.el = null);
                });
            }),
            M = s(U, function (t) {
              function n(t, n) {
                var i = e.data(t, I) || e.data(t, I, new U.Bare());
                return i.el || i.init(t), n ? i.start(n) : i;
              }
              t.init = function (t, i) {
                var a = e(t);
                if (!a.length) return this;
                if (1 === a.length) return n(a[0], i);
                var o = [];
                return (
                  a.each(function (e, t) {
                    o.push(n(t, i));
                  }),
                  (this.children = o),
                  this
                );
              };
            }),
            w = s(function (e) {
              function t() {
                var e = this.get();
                this.update("auto");
                var t = this.get();
                return this.update(e), t;
              }
              var n = 500,
                a = "ease",
                l = 0;
              (e.init = function (e, t, i, r) {
                (this.$el = e), (this.el = e[0]);
                var c,
                  d,
                  s,
                  u = t[0];
                i[2] && (u = i[2]),
                  Y[u] && (u = Y[u]),
                  (this.name = u),
                  (this.type = i[1]),
                  (this.duration = o(t[1], this.duration, n)),
                  (this.ease =
                    ((c = t[2]),
                    (d = this.ease),
                    (s = a),
                    void 0 !== d && (s = d),
                    c in f ? c : s)),
                  (this.delay = o(t[3], this.delay, l)),
                  (this.span = this.duration + this.delay),
                  (this.active = !1),
                  (this.nextStyle = null),
                  (this.auto = A.test(this.name)),
                  (this.unit = r.unit || this.unit || X.defaultUnit),
                  (this.angle = r.angle || this.angle || X.defaultAngle),
                  X.fallback || r.fallback
                    ? (this.animate = this.fallback)
                    : ((this.animate = this.transition),
                      (this.string =
                        this.name +
                        " " +
                        this.duration +
                        "ms" +
                        ("ease" != this.ease ? " " + f[this.ease][0] : "") +
                        (this.delay ? " " + this.delay + "ms" : "")));
              }),
                (e.set = function (e) {
                  (e = this.convert(e, this.type)),
                    this.update(e),
                    this.redraw();
                }),
                (e.transition = function (e) {
                  (this.active = !0),
                    (e = this.convert(e, this.type)),
                    this.auto &&
                      ("auto" == this.el.style[this.name] &&
                        (this.update(this.get()), this.redraw()),
                      "auto" == e && (e = t.call(this))),
                    (this.nextStyle = e);
                }),
                (e.fallback = function (e) {
                  var n =
                    this.el.style[this.name] ||
                    this.convert(this.get(), this.type);
                  (e = this.convert(e, this.type)),
                    this.auto &&
                      ("auto" == n && (n = this.convert(this.get(), this.type)),
                      "auto" == e && (e = t.call(this))),
                    (this.tween = new B({
                      from: n,
                      to: e,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this,
                    }));
                }),
                (e.get = function () {
                  return Q(this.el, this.name);
                }),
                (e.update = function (e) {
                  W(this.el, this.name, e);
                }),
                (e.stop = function () {
                  (this.active || this.nextStyle) &&
                    ((this.active = !1),
                    (this.nextStyle = null),
                    W(this.el, this.name, this.get()));
                  var e = this.tween;
                  e && e.context && e.destroy();
                }),
                (e.convert = function (e, t) {
                  if ("auto" == e && this.auto) return e;
                  var n,
                    a,
                    o,
                    l,
                    c = "number" == typeof e,
                    d = "string" == typeof e;
                  switch (t) {
                    case T:
                      if (c) return e;
                      if (d && "" === e.replace(y, "")) return +e;
                      l = "number(unitless)";
                      break;
                    case g:
                      if (d) {
                        if ("" === e && this.original) return this.original;
                        if (t.test(e)) {
                          return "#" == e.charAt(0) && 7 == e.length
                            ? e
                            : ((n = e),
                              ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(n))
                                ? i(a[1], a[2], a[3])
                                : n
                              ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"));
                        }
                      }
                      l = "hex or rgb string";
                      break;
                    case m:
                      if (c) return e + this.unit;
                      if (d && t.test(e)) return e;
                      l = "number(px) or string(unit)";
                      break;
                    case O:
                      if (c) return e + this.unit;
                      if (d && t.test(e)) return e;
                      l = "number(px) or string(unit or %)";
                      break;
                    case b:
                      if (c) return e + this.angle;
                      if (d && t.test(e)) return e;
                      l = "number(deg) or string(angle)";
                      break;
                    case v:
                      if (c || (d && O.test(e))) return e;
                      l = "number(unitless) or string(unit or %)";
                  }
                  return (
                    r(
                      "Type warning: Expected: [" +
                        l +
                        "] Got: [" +
                        typeof (o = e) +
                        "] " +
                        o
                    ),
                    e
                  );
                }),
                (e.redraw = function () {
                  this.el.offsetHeight;
                });
            }),
            V = s(w, function (e, t) {
              e.init = function () {
                t.init.apply(this, arguments),
                  this.original ||
                    (this.original = this.convert(this.get(), g));
              };
            }),
            k = s(w, function (e, t) {
              (e.init = function () {
                t.init.apply(this, arguments), (this.animate = this.fallback);
              }),
                (e.get = function () {
                  return this.$el[this.name]();
                }),
                (e.update = function (e) {
                  this.$el[this.name](e);
                });
            }),
            F = s(w, function (e, t) {
              function n(e, t) {
                var n, i, a, o, r;
                for (n in e)
                  (a = (o = H[n])[0]),
                    (i = o[1] || n),
                    (r = this.convert(e[n], a)),
                    t.call(this, i, r, a);
              }
              (e.init = function () {
                t.init.apply(this, arguments),
                  this.current ||
                    ((this.current = {}),
                    H.perspective &&
                      X.perspective &&
                      ((this.current.perspective = X.perspective),
                      W(this.el, this.name, this.style(this.current)),
                      this.redraw()));
              }),
                (e.set = function (e) {
                  n.call(this, e, function (e, t) {
                    this.current[e] = t;
                  }),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw();
                }),
                (e.transition = function (e) {
                  var t = this.values(e);
                  this.tween = new j({
                    current: this.current,
                    values: t,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                  });
                  var n,
                    i = {};
                  for (n in this.current)
                    i[n] = n in t ? t[n] : this.current[n];
                  (this.active = !0), (this.nextStyle = this.style(i));
                }),
                (e.fallback = function (e) {
                  var t = this.values(e);
                  this.tween = new j({
                    current: this.current,
                    values: t,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  });
                }),
                (e.update = function () {
                  W(this.el, this.name, this.style(this.current));
                }),
                (e.style = function (e) {
                  var t,
                    n = "";
                  for (t in e) n += t + "(" + e[t] + ") ";
                  return n;
                }),
                (e.values = function (e) {
                  var t,
                    i = {};
                  return (
                    n.call(this, e, function (e, n, a) {
                      (i[e] = n),
                        void 0 === this.current[e] &&
                          ((t = 0),
                          ~e.indexOf("scale") && (t = 1),
                          (this.current[e] = this.convert(t, a)));
                    }),
                    i
                  );
                });
            }),
            B = s(function (t) {
              function o() {
                var e,
                  t,
                  n,
                  i = c.length;
                if (i)
                  for (P(o), t = x(), e = i; e--; ) (n = c[e]) && n.render(t);
              }
              var l = { ease: f.ease[1], from: 0, to: 1 };
              (t.init = function (e) {
                (this.duration = e.duration || 0), (this.delay = e.delay || 0);
                var t = e.ease || l.ease;
                f[t] && (t = f[t][1]),
                  "function" != typeof t && (t = l.ease),
                  (this.ease = t),
                  (this.update = e.update || a),
                  (this.complete = e.complete || a),
                  (this.context = e.context || this),
                  (this.name = e.name);
                var n = e.from,
                  i = e.to;
                void 0 === n && (n = l.from),
                  void 0 === i && (i = l.to),
                  (this.unit = e.unit || ""),
                  "number" == typeof n && "number" == typeof i
                    ? ((this.begin = n), (this.change = i - n))
                    : this.format(i, n),
                  (this.value = this.begin + this.unit),
                  (this.start = x()),
                  !1 !== e.autoplay && this.play();
              }),
                (t.play = function () {
                  var e;
                  this.active ||
                    (this.start || (this.start = x()),
                    (this.active = !0),
                    (e = this),
                    1 === c.push(e) && P(o));
                }),
                (t.stop = function () {
                  var t, n, i;
                  this.active &&
                    ((this.active = !1),
                    (t = this),
                    (i = e.inArray(t, c)) >= 0 &&
                      ((n = c.slice(i + 1)),
                      (c.length = i),
                      n.length && (c = c.concat(n))));
                }),
                (t.render = function (e) {
                  var t,
                    n = e - this.start;
                  if (this.delay) {
                    if (n <= this.delay) return;
                    n -= this.delay;
                  }
                  if (n < this.duration) {
                    var a,
                      o,
                      r,
                      l = this.ease(n, 0, 1, this.duration);
                    return (
                      (t = this.startRGB
                        ? ((a = this.startRGB),
                          (o = this.endRGB),
                          (r = l),
                          i(
                            a[0] + r * (o[0] - a[0]),
                            a[1] + r * (o[1] - a[1]),
                            a[2] + r * (o[2] - a[2])
                          ))
                        : Math.round((this.begin + l * this.change) * d) / d),
                      (this.value = t + this.unit),
                      void this.update.call(this.context, this.value)
                    );
                  }
                  (t = this.endHex || this.begin + this.change),
                    (this.value = t + this.unit),
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy();
                }),
                (t.format = function (e, t) {
                  if (((t += ""), "#" == (e += "").charAt(0)))
                    return (
                      (this.startRGB = n(t)),
                      (this.endRGB = n(e)),
                      (this.endHex = e),
                      (this.begin = 0),
                      void (this.change = 1)
                    );
                  if (!this.unit) {
                    var i = t.replace(y, "");
                    i !== e.replace(y, "") &&
                      r("Units do not match [tween]: " + t + ", " + e),
                      (this.unit = i);
                  }
                  (t = parseFloat(t)),
                    (e = parseFloat(e)),
                    (this.begin = this.value = t),
                    (this.change = e - t);
                }),
                (t.destroy = function () {
                  this.stop(),
                    (this.context = null),
                    (this.ease = this.update = this.complete = a);
                });
              var c = [],
                d = 1e3;
            }),
            D = s(B, function (e) {
              (e.init = function (e) {
                (this.duration = e.duration || 0),
                  (this.complete = e.complete || a),
                  (this.context = e.context),
                  this.play();
              }),
                (e.render = function (e) {
                  e - this.start < this.duration ||
                    (this.complete.call(this.context), this.destroy());
                });
            }),
            j = s(B, function (e, t) {
              (e.init = function (e) {
                var t, n;
                for (t in ((this.context = e.context),
                (this.update = e.update),
                (this.tweens = []),
                (this.current = e.current),
                e.values))
                  (n = e.values[t]),
                    this.current[t] !== n &&
                      this.tweens.push(
                        new B({
                          name: t,
                          from: this.current[t],
                          to: n,
                          duration: e.duration,
                          delay: e.delay,
                          ease: e.ease,
                          autoplay: !1,
                        })
                      );
                this.play();
              }),
                (e.render = function (e) {
                  var t,
                    n,
                    i = this.tweens.length,
                    a = !1;
                  for (t = i; t--; )
                    (n = this.tweens[t]).context &&
                      (n.render(e), (this.current[n.name] = n.value), (a = !0));
                  return a
                    ? void (this.update && this.update.call(this.context))
                    : this.destroy();
                }),
                (e.destroy = function () {
                  if ((t.destroy.call(this), this.tweens)) {
                    var e, n;
                    for (e = this.tweens.length; e--; )
                      this.tweens[e].destroy();
                    (this.tweens = null), (this.current = null);
                  }
                });
            }),
            X = (t.config = {
              debug: !1,
              defaultUnit: "px",
              defaultAngle: "deg",
              keepInherited: !1,
              hideBackface: !1,
              perspective: "",
              fallback: !N.transition,
              agentTests: [],
            });
          (t.fallback = function (e) {
            if (!N.transition) return (X.fallback = !0);
            X.agentTests.push("(" + e + ")");
            var t = RegExp(X.agentTests.join("|"), "i");
            X.fallback = t.test(navigator.userAgent);
          }),
            t.fallback("6.0.[2-5] Safari"),
            (t.tween = function (e) {
              return new B(e);
            }),
            (t.delay = function (e, t, n) {
              return new D({ complete: t, duration: e, context: n });
            }),
            (e.fn.tram = function (e) {
              return t.call(null, this, e);
            });
          var W = e.style,
            Q = e.css,
            Y = { transform: N.transform && N.transform.css },
            z = {
              color: [V, g],
              background: [V, g, "background-color"],
              "outline-color": [V, g],
              "border-color": [V, g],
              "border-top-color": [V, g],
              "border-right-color": [V, g],
              "border-bottom-color": [V, g],
              "border-left-color": [V, g],
              "border-width": [w, m],
              "border-top-width": [w, m],
              "border-right-width": [w, m],
              "border-bottom-width": [w, m],
              "border-left-width": [w, m],
              "border-spacing": [w, m],
              "letter-spacing": [w, m],
              margin: [w, m],
              "margin-top": [w, m],
              "margin-right": [w, m],
              "margin-bottom": [w, m],
              "margin-left": [w, m],
              padding: [w, m],
              "padding-top": [w, m],
              "padding-right": [w, m],
              "padding-bottom": [w, m],
              "padding-left": [w, m],
              "outline-width": [w, m],
              opacity: [w, T],
              top: [w, O],
              right: [w, O],
              bottom: [w, O],
              left: [w, O],
              "font-size": [w, O],
              "text-indent": [w, O],
              "word-spacing": [w, O],
              width: [w, O],
              "min-width": [w, O],
              "max-width": [w, O],
              height: [w, O],
              "min-height": [w, O],
              "max-height": [w, O],
              "line-height": [w, v],
              "scroll-top": [k, T, "scrollTop"],
              "scroll-left": [k, T, "scrollLeft"],
            },
            H = {};
          N.transform &&
            ((z.transform = [F]),
            (H = {
              x: [O, "translateX"],
              y: [O, "translateY"],
              rotate: [b],
              rotateX: [b],
              rotateY: [b],
              scale: [T],
              scaleX: [T],
              scaleY: [T],
              skew: [b],
              skewX: [b],
              skewY: [b],
            })),
            N.transform &&
              N.backface &&
              ((H.z = [O, "translateZ"]),
              (H.rotateZ = [b]),
              (H.scaleZ = [T]),
              (H.perspective = [m]));
          var $ = /ms/,
            q = /s|\./;
          return (e.tram = t);
        })(window.jQuery);
      },
      5756: function (e, t, n) {
        "use strict";
        var i,
          a,
          o,
          r,
          l,
          c,
          d,
          s,
          f,
          u,
          p,
          I,
          y,
          E,
          T,
          g,
          m,
          O,
          b,
          v,
          _ = window.$,
          A = n(5487) && _.tram;
        e.exports =
          (((i = {}).VERSION = "1.6.0-Webflow"),
          (a = {}),
          (o = Array.prototype),
          (r = Object.prototype),
          (l = Function.prototype),
          o.push,
          (c = o.slice),
          (d = (o.concat, r.toString, r.hasOwnProperty)),
          (s = o.forEach),
          (f = o.map),
          (u = (o.reduce, o.reduceRight, o.filter)),
          (p = (o.every, o.some)),
          (I = o.indexOf),
          (y = (o.lastIndexOf, Object.keys)),
          l.bind,
          (E =
            i.each =
            i.forEach =
              function (e, t, n) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, n);
                else if (e.length === +e.length) {
                  for (var o = 0, r = e.length; o < r; o++)
                    if (t.call(n, e[o], o, e) === a) return;
                } else {
                  for (var l = i.keys(e), o = 0, r = l.length; o < r; o++)
                    if (t.call(n, e[l[o]], l[o], e) === a) return;
                }
                return e;
              }),
          (i.map = i.collect =
            function (e, t, n) {
              var i = [];
              return null == e
                ? i
                : f && e.map === f
                ? e.map(t, n)
                : (E(e, function (e, a, o) {
                    i.push(t.call(n, e, a, o));
                  }),
                  i);
            }),
          (i.find = i.detect =
            function (e, t, n) {
              var i;
              return (
                T(e, function (e, a, o) {
                  if (t.call(n, e, a, o)) return (i = e), !0;
                }),
                i
              );
            }),
          (i.filter = i.select =
            function (e, t, n) {
              var i = [];
              return null == e
                ? i
                : u && e.filter === u
                ? e.filter(t, n)
                : (E(e, function (e, a, o) {
                    t.call(n, e, a, o) && i.push(e);
                  }),
                  i);
            }),
          (T =
            i.some =
            i.any =
              function (e, t, n) {
                t || (t = i.identity);
                var o = !1;
                return null == e
                  ? o
                  : p && e.some === p
                  ? e.some(t, n)
                  : (E(e, function (e, i, r) {
                      if (o || (o = t.call(n, e, i, r))) return a;
                    }),
                    !!o);
              }),
          (i.contains = i.include =
            function (e, t) {
              return (
                null != e &&
                (I && e.indexOf === I
                  ? -1 != e.indexOf(t)
                  : T(e, function (e) {
                      return e === t;
                    }))
              );
            }),
          (i.delay = function (e, t) {
            var n = c.call(arguments, 2);
            return setTimeout(function () {
              return e.apply(null, n);
            }, t);
          }),
          (i.defer = function (e) {
            return i.delay.apply(i, [e, 1].concat(c.call(arguments, 1)));
          }),
          (i.throttle = function (e) {
            var t, n, i;
            return function () {
              !t &&
                ((t = !0),
                (n = arguments),
                (i = this),
                A.frame(function () {
                  (t = !1), e.apply(i, n);
                }));
            };
          }),
          (i.debounce = function (e, t, n) {
            var a,
              o,
              r,
              l,
              c,
              d = function () {
                var s = i.now() - l;
                s < t
                  ? (a = setTimeout(d, t - s))
                  : ((a = null), !n && ((c = e.apply(r, o)), (r = o = null)));
              };
            return function () {
              (r = this), (o = arguments), (l = i.now());
              var s = n && !a;
              return (
                !a && (a = setTimeout(d, t)),
                s && ((c = e.apply(r, o)), (r = o = null)),
                c
              );
            };
          }),
          (i.defaults = function (e) {
            if (!i.isObject(e)) return e;
            for (var t = 1, n = arguments.length; t < n; t++) {
              var a = arguments[t];
              for (var o in a) void 0 === e[o] && (e[o] = a[o]);
            }
            return e;
          }),
          (i.keys = function (e) {
            if (!i.isObject(e)) return [];
            if (y) return y(e);
            var t = [];
            for (var n in e) i.has(e, n) && t.push(n);
            return t;
          }),
          (i.has = function (e, t) {
            return d.call(e, t);
          }),
          (i.isObject = function (e) {
            return e === Object(e);
          }),
          (i.now =
            Date.now ||
            function () {
              return new Date().getTime();
            }),
          (i.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
          }),
          (g = /(.)^/),
          (m = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029",
          }),
          (O = /\\|'|\r|\n|\u2028|\u2029/g),
          (b = function (e) {
            return "\\" + m[e];
          }),
          (v = /^\s*(\w|\$)+\s*$/),
          (i.template = function (e, t, n) {
            !t && n && (t = n);
            var a,
              o = RegExp(
                [
                  ((t = i.defaults({}, t, i.templateSettings)).escape || g)
                    .source,
                  (t.interpolate || g).source,
                  (t.evaluate || g).source,
                ].join("|") + "|$",
                "g"
              ),
              r = 0,
              l = "__p+='";
            e.replace(o, function (t, n, i, a, o) {
              return (
                (l += e.slice(r, o).replace(O, b)),
                (r = o + t.length),
                n
                  ? (l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                  : i
                  ? (l += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : a && (l += "';\n" + a + "\n__p+='"),
                t
              );
            }),
              (l += "';\n");
            var c = t.variable;
            if (c) {
              if (!v.test(c))
                throw Error("variable is not a bare identifier: " + c);
            } else (l = "with(obj||{}){\n" + l + "}\n"), (c = "obj");
            l =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              l +
              "return __p;\n";
            try {
              a = Function(t.variable || "obj", "_", l);
            } catch (e) {
              throw ((e.source = l), e);
            }
            var d = function (e) {
              return a.call(this, e, i);
            };
            return (d.source = "function(" + c + "){\n" + l + "}"), d;
          }),
          i);
      },
      9461: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "brand",
          (e.exports = function (e) {
            var t,
              n = {},
              a = document,
              o = e("html"),
              r = e("body"),
              l = window.location,
              c = /PhantomJS/i.test(navigator.userAgent),
              d =
                "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            function s() {
              var n =
                a.fullScreen ||
                a.mozFullScreen ||
                a.webkitIsFullScreen ||
                a.msFullscreenElement ||
                !!a.webkitFullscreenElement;
              e(t).attr("style", n ? "display: none !important;" : "");
            }
            n.ready = function () {
              var n = o.attr("data-wf-status"),
                i = o.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(i) && l.hostname !== i && (n = !0),
                n &&
                  !c &&
                  ((t =
                    t ||
                    (function () {
                      var t = e('<a class="w-webflow-badge"></a>').attr(
                          "href",
                          "https://webflow.com?utm_campaign=brandjs"
                        ),
                        n = e("<img>")
                          .attr(
                            "src",
                            "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                          )
                          .attr("alt", "")
                          .css({ marginRight: "4px", width: "26px" }),
                        i = e("<img>")
                          .attr(
                            "src",
                            "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                          )
                          .attr("alt", "Made in Webflow");
                      return t.append(n, i), t[0];
                    })()),
                  f(),
                  setTimeout(f, 500),
                  e(a).off(d, s).on(d, s));
            };
            function f() {
              var e = r.children(".w-webflow-badge"),
                n = e.length && e.get(0) === t,
                a = i.env("editor");
              if (n) {
                a && e.remove();
                return;
              }
              e.length && e.remove(), !a && r.append(t);
            }
            return n;
          })
        );
      },
      2338: function (e, t, n) {
        "use strict";
        n(3949).define(
          "focus-visible",
          (e.exports = function () {
            return {
              ready: function () {
                if ("undefined" != typeof document)
                  try {
                    document.querySelector(":focus-visible");
                  } catch (e) {
                    !(function (e) {
                      var t = !0,
                        n = !1,
                        i = null,
                        a = {
                          text: !0,
                          search: !0,
                          url: !0,
                          tel: !0,
                          email: !0,
                          password: !0,
                          number: !0,
                          date: !0,
                          month: !0,
                          week: !0,
                          time: !0,
                          datetime: !0,
                          "datetime-local": !0,
                        };
                      function o(e) {
                        return (
                          (!!e &&
                            e !== document &&
                            "HTML" !== e.nodeName &&
                            "BODY" !== e.nodeName &&
                            "classList" in e &&
                            "contains" in e.classList) ||
                          !1
                        );
                      }
                      function r(e) {
                        if (!e.getAttribute("data-wf-focus-visible"))
                          e.setAttribute("data-wf-focus-visible", "true");
                      }
                      function l() {
                        t = !1;
                      }
                      function c() {
                        document.addEventListener("mousemove", d),
                          document.addEventListener("mousedown", d),
                          document.addEventListener("mouseup", d),
                          document.addEventListener("pointermove", d),
                          document.addEventListener("pointerdown", d),
                          document.addEventListener("pointerup", d),
                          document.addEventListener("touchmove", d),
                          document.addEventListener("touchstart", d),
                          document.addEventListener("touchend", d);
                      }
                      function d(e) {
                        if (
                          !e.target.nodeName ||
                          "html" !== e.target.nodeName.toLowerCase()
                        )
                          (t = !1),
                            document.removeEventListener("mousemove", d),
                            document.removeEventListener("mousedown", d),
                            document.removeEventListener("mouseup", d),
                            document.removeEventListener("pointermove", d),
                            document.removeEventListener("pointerdown", d),
                            document.removeEventListener("pointerup", d),
                            document.removeEventListener("touchmove", d),
                            document.removeEventListener("touchstart", d),
                            document.removeEventListener("touchend", d);
                      }
                      document.addEventListener(
                        "keydown",
                        function (n) {
                          if (!n.metaKey && !n.altKey && !n.ctrlKey)
                            o(e.activeElement) && r(e.activeElement), (t = !0);
                        },
                        !0
                      ),
                        document.addEventListener("mousedown", l, !0),
                        document.addEventListener("pointerdown", l, !0),
                        document.addEventListener("touchstart", l, !0),
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            "hidden" === document.visibilityState &&
                              (n && (t = !0), c());
                          },
                          !0
                        ),
                        c(),
                        e.addEventListener(
                          "focus",
                          function (e) {
                            var n, i, l;
                            if (!!o(e.target)) {
                              if (
                                t ||
                                ((i = (n = e.target).type),
                                ("INPUT" === (l = n.tagName) &&
                                  a[i] &&
                                  !n.readOnly) ||
                                  ("TEXTAREA" === l && !n.readOnly) ||
                                  n.isContentEditable)
                              )
                                r(e.target);
                            }
                          },
                          !0
                        ),
                        e.addEventListener(
                          "blur",
                          function (e) {
                            if (!!o(e.target))
                              e.target.hasAttribute("data-wf-focus-visible") &&
                                ((n = !0),
                                window.clearTimeout(i),
                                (i = window.setTimeout(function () {
                                  n = !1;
                                }, 100)),
                                !(function (e) {
                                  if (!!e.getAttribute("data-wf-focus-visible"))
                                    e.removeAttribute("data-wf-focus-visible");
                                })(e.target));
                          },
                          !0
                        );
                    })(document);
                  }
              },
            };
          })
        );
      },
      8334: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "focus",
          (e.exports = function () {
            var e = [],
              t = !1;
            function n(n) {
              t &&
                (n.preventDefault(),
                n.stopPropagation(),
                n.stopImmediatePropagation(),
                e.unshift(n));
            }
            function a(n) {
              var i, a;
              if (
                ((a = (i = n.target).tagName),
                (/^a$/i.test(a) && null != i.href) ||
                  (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                  (/^input$/i.test(a) &&
                    /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                    !i.disabled) ||
                  (!/^(button|input|textarea|select|a)$/i.test(a) &&
                    !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                  /^audio$/i.test(a) ||
                  (/^video$/i.test(a) && !0 === i.controls))
              )
                (t = !0),
                  setTimeout(() => {
                    for (t = !1, n.target.focus(); e.length > 0; ) {
                      var i = e.pop();
                      i.target.dispatchEvent(new MouseEvent(i.type, i));
                    }
                  }, 0);
            }
            return {
              ready: function () {
                "undefined" != typeof document &&
                  document.body.hasAttribute("data-wf-focus-within") &&
                  i.env.safari &&
                  (document.addEventListener("mousedown", a, !0),
                  document.addEventListener("mouseup", n, !0),
                  document.addEventListener("click", n, !0));
              },
            };
          })
        );
      },
      7199: function (e) {
        "use strict";
        var t = window.jQuery,
          n = {},
          i = [],
          a = ".w-ix",
          o = {
            reset: function (e, t) {
              t.__wf_intro = null;
            },
            intro: function (e, i) {
              if (!i.__wf_intro)
                (i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO);
            },
            outro: function (e, i) {
              if (!!i.__wf_intro)
                (i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO);
            },
          };
        (n.triggers = {}),
          (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
          (n.init = function () {
            for (var e = i.length, a = 0; a < e; a++) {
              var r = i[a];
              r[0](0, r[1]);
            }
            (i = []), t.extend(n.triggers, o);
          }),
          (n.async = function () {
            for (var e in o) {
              var t = o[e];
              if (!!o.hasOwnProperty(e))
                n.triggers[e] = function (e, n) {
                  i.push([t, n]);
                };
            }
          }),
          n.async(),
          (e.exports = n);
      },
      5134: function (e, t, n) {
        "use strict";
        var i = n(7199);
        function a(e, t) {
          var n = document.createEvent("CustomEvent");
          n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
        }
        var o = window.jQuery,
          r = {},
          l = ".w-ix";
        (r.triggers = {}),
          (r.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
          o.extend(r.triggers, {
            reset: function (e, t) {
              i.triggers.reset(e, t);
            },
            intro: function (e, t) {
              i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
            },
            outro: function (e, t) {
              i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
            },
          }),
          (e.exports = r);
      },
      941: function (e, t, n) {
        "use strict";
        var i = n(3949),
          a = n(6011);
        a.setEnv(i.env),
          i.define(
            "ix2",
            (e.exports = function () {
              return a;
            })
          );
      },
      3949: function (e, t, n) {
        "use strict";
        var i,
          a,
          o = {},
          r = {},
          l = [],
          c = window.Webflow || [],
          d = window.jQuery,
          s = d(window),
          f = d(document),
          u = d.isFunction,
          p = (o._ = n(5756)),
          I = (o.tram = n(5487) && d.tram),
          y = !1,
          E = !1;
        function T(e) {
          o.env() &&
            (u(e.design) && s.on("__wf_design", e.design),
            u(e.preview) && s.on("__wf_preview", e.preview)),
            u(e.destroy) && s.on("__wf_destroy", e.destroy),
            e.ready &&
              u(e.ready) &&
              (function (e) {
                if (y) {
                  e.ready();
                  return;
                }
                if (!p.contains(l, e.ready)) l.push(e.ready);
              })(e);
        }
        (I.config.hideBackface = !1),
          (I.config.keepInherited = !0),
          (o.define = function (e, t, n) {
            r[e] && g(r[e]);
            var i = (r[e] = t(d, p, n) || {});
            return T(i), i;
          }),
          (o.require = function (e) {
            return r[e];
          });
        function g(e) {
          u(e.design) && s.off("__wf_design", e.design),
            u(e.preview) && s.off("__wf_preview", e.preview),
            u(e.destroy) && s.off("__wf_destroy", e.destroy),
            e.ready &&
              u(e.ready) &&
              (function (e) {
                l = p.filter(l, function (t) {
                  return t !== e.ready;
                });
              })(e);
        }
        (o.push = function (e) {
          if (y) {
            u(e) && e();
            return;
          }
          c.push(e);
        }),
          (o.env = function (e) {
            var t = window.__wf_design,
              n = void 0 !== t;
            return e
              ? "design" === e
                ? n && t
                : "preview" === e
                ? n && !t
                : "slug" === e
                ? n && window.__wf_slug
                : "editor" === e
                ? window.WebflowEditor
                : "test" === e
                ? window.__wf_test
                : "frame" === e
                ? window !== window.top
                : void 0
              : n;
          });
        var m = navigator.userAgent.toLowerCase(),
          O = (o.env.touch =
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)),
          b = (o.env.chrome =
            /chrome/.test(m) &&
            /Google/.test(navigator.vendor) &&
            parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
          v = (o.env.ios = /(ipod|iphone|ipad)/.test(m));
        (o.env.safari = /safari/.test(m) && !b && !v),
          O &&
            f.on("touchstart mousedown", function (e) {
              i = e.target;
            }),
          (o.validClick = O
            ? function (e) {
                return e === i || d.contains(e, i);
              }
            : function () {
                return !0;
              });
        var _ = "resize.webflow orientationchange.webflow load.webflow",
          A = "scroll.webflow " + _;
        function R(e, t) {
          var n = [],
            i = {};
          return (
            (i.up = p.throttle(function (e) {
              p.each(n, function (t) {
                t(e);
              });
            })),
            e && t && e.on(t, i.up),
            (i.on = function (e) {
              if (!("function" != typeof e || p.contains(n, e))) n.push(e);
            }),
            (i.off = function (e) {
              if (!arguments.length) {
                n = [];
                return;
              }
              n = p.filter(n, function (t) {
                return t !== e;
              });
            }),
            i
          );
        }
        function S(e) {
          u(e) && e();
        }
        (o.resize = R(s, _)),
          (o.scroll = R(s, A)),
          (o.redraw = R()),
          (o.location = function (e) {
            window.location = e;
          }),
          o.env() && (o.location = function () {}),
          (o.ready = function () {
            (y = !0),
              E
                ? (function () {
                    (E = !1), p.each(r, T);
                  })()
                : p.each(l, S),
              p.each(c, S),
              o.resize.up();
          });
        function h() {
          a && (a.reject(), s.off("load", a.resolve)),
            (a = new d.Deferred()),
            s.on("load", a.resolve);
        }
        (o.load = function (e) {
          a.then(e);
        }),
          (o.destroy = function (e) {
            (e = e || {}),
              (E = !0),
              s.triggerHandler("__wf_destroy"),
              null != e.domready && (y = e.domready),
              p.each(r, g),
              o.resize.off(),
              o.scroll.off(),
              o.redraw.off(),
              (l = []),
              (c = []),
              "pending" === a.state() && h();
          }),
          d(o.ready),
          h(),
          (e.exports = window.Webflow = o);
      },
      7624: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "links",
          (e.exports = function (e, t) {
            var n,
              a,
              o,
              r = {},
              l = e(window),
              c = i.env(),
              d = window.location,
              s = document.createElement("a"),
              f = "w--current",
              u = /index\.(html|php)$/,
              p = /\/$/;
            r.ready =
              r.design =
              r.preview =
                function () {
                  (n = c && i.env("design")),
                    (o = i.env("slug") || d.pathname || ""),
                    i.scroll.off(I),
                    (a = []);
                  for (var t = document.links, r = 0; r < t.length; ++r)
                    (function (t) {
                      if (t.getAttribute("hreflang")) return;
                      var i =
                        (n && t.getAttribute("href-disabled")) ||
                        t.getAttribute("href");
                      if (((s.href = i), i.indexOf(":") >= 0)) return;
                      var r = e(t);
                      if (
                        s.hash.length > 1 &&
                        s.host + s.pathname === d.host + d.pathname
                      ) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                        var l = e(s.hash);
                        l.length && a.push({ link: r, sec: l, active: !1 });
                        return;
                      }
                      if ("#" !== i && "" !== i)
                        y(
                          r,
                          f,
                          s.href === d.href ||
                            i === o ||
                            (u.test(i) && p.test(o))
                        );
                    })(t[r]);
                  a.length && (i.scroll.on(I), I());
                };
            function I() {
              var e = l.scrollTop(),
                n = l.height();
              t.each(a, function (t) {
                if (t.link.attr("hreflang")) return;
                var i = t.link,
                  a = t.sec,
                  o = a.offset().top,
                  r = a.outerHeight(),
                  l = 0.5 * n,
                  c = a.is(":visible") && o + r - l >= e && o + l <= e + n;
                if (t.active !== c) (t.active = c), y(i, f, c);
              });
            }
            function y(e, t, n) {
              var i = e.hasClass(t);
              if ((!n || !i) && (!!n || !!i))
                n ? e.addClass(t) : e.removeClass(t);
            }
            return r;
          })
        );
      },
      286: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "scroll",
          (e.exports = function (e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll",
              },
              n = window.location,
              a = (function () {
                try {
                  return !!window.frameElement;
                } catch (e) {
                  return !0;
                }
              })()
                ? null
                : window.history,
              o = e(window),
              r = e(document),
              l = e(document.body),
              c =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (e) {
                  window.setTimeout(e, 15);
                },
              d = i.env("editor") ? ".w-editor-body" : "body",
              s =
                "header, " +
                d +
                " > .header, " +
                d +
                " > .w-nav:not([data-no-scroll])",
              f = 'a[href="#"]',
              u = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")",
              p = document.createElement("style");
            p.appendChild(
              document.createTextNode(
                '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              )
            );
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;
            let y =
              "function" == typeof window.matchMedia &&
              window.matchMedia("(prefers-reduced-motion: reduce)");
            function E(e, t) {
              var n;
              switch (t) {
                case "add":
                  (n = e.attr("tabindex"))
                    ? e.attr("data-wf-tabindex-swap", n)
                    : e.attr("tabindex", "-1");
                  break;
                case "remove":
                  (n = e.attr("data-wf-tabindex-swap"))
                    ? (e.attr("tabindex", n),
                      e.removeAttr("data-wf-tabindex-swap"))
                    : e.removeAttr("tabindex");
              }
              e.toggleClass("wf-force-outline-none", "add" === t);
            }
            function T(t) {
              var r,
                d = t.currentTarget;
              if (
                !(
                  i.env("design") ||
                  (window.$.mobile &&
                    /(?:^|\s)ui-link(?:$|\s)/.test(d.className))
                )
              ) {
                var f = ((r = d),
                I.test(r.hash) && r.host + r.pathname === n.host + n.pathname)
                  ? d.hash
                  : "";
                if ("" !== f) {
                  var u = e(f);
                  if (!u.length) return;
                  t && (t.preventDefault(), t.stopPropagation()),
                    (function (e) {
                      n.hash !== e &&
                        a &&
                        a.pushState &&
                        !(i.env.chrome && "file:" === n.protocol) &&
                        (a.state && a.state.hash) !== e &&
                        a.pushState({ hash: e }, "", e);
                    })(f, t),
                    window.setTimeout(
                      function () {
                        (function (t, n) {
                          var i = o.scrollTop(),
                            a = (function (t) {
                              var n = e(s),
                                i =
                                  "fixed" === n.css("position")
                                    ? n.outerHeight()
                                    : 0,
                                a = t.offset().top - i;
                              if ("mid" === t.data("scroll")) {
                                var r = o.height() - i,
                                  l = t.outerHeight();
                                l < r && (a -= Math.round((r - l) / 2));
                              }
                              return a;
                            })(t);
                          if (i !== a) {
                            var r = (function (e, t, n) {
                                if (
                                  "none" ===
                                    document.body.getAttribute(
                                      "data-wf-scroll-motion"
                                    ) ||
                                  y.matches
                                )
                                  return 0;
                                var i = 1;
                                return (
                                  l.add(e).each(function (e, t) {
                                    var n = parseFloat(
                                      t.getAttribute("data-scroll-time")
                                    );
                                    !isNaN(n) && n >= 0 && (i = n);
                                  }),
                                  (472.143 * Math.log(Math.abs(t - n) + 125) -
                                    2e3) *
                                    i
                                );
                              })(t, i, a),
                              d = Date.now(),
                              f = function () {
                                var e = Date.now() - d;
                                window.scroll(
                                  0,
                                  (function (e, t, n, i) {
                                    return n > i
                                      ? t
                                      : e +
                                          (t - e) *
                                            (function (e) {
                                              return e < 0.5
                                                ? 4 * e * e * e
                                                : (e - 1) *
                                                    (2 * e - 2) *
                                                    (2 * e - 2) +
                                                    1;
                                            })(n / i);
                                  })(i, a, e, r)
                                ),
                                  e <= r ? c(f) : "function" == typeof n && n();
                              };
                            c(f);
                          }
                        })(u, function () {
                          E(u, "add"),
                            u.get(0).focus({ preventScroll: !0 }),
                            E(u, "remove");
                        });
                      },
                      t ? 0 : 300
                    );
                }
              }
            }
            return {
              ready: function () {
                var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
                r.on(n, u, T),
                  r.on(e, f, function (e) {
                    e.preventDefault();
                  }),
                  document.head.insertBefore(p, document.head.firstChild);
              },
            };
          })
        );
      },
      3695: function (e, t, n) {
        "use strict";
        n(3949).define(
          "touch",
          (e.exports = function (e) {
            var t = {},
              n = window.getSelection;
            function i(t) {
              var i,
                a,
                o = !1,
                r = !1,
                l = Math.min(Math.round(0.04 * window.innerWidth), 40);
              function c(e) {
                var t = e.touches;
                if (!t || !(t.length > 1))
                  (o = !0),
                    t ? ((r = !0), (i = t[0].clientX)) : (i = e.clientX),
                    (a = i);
              }
              function d(t) {
                if (!!o) {
                  if (r && "mousemove" === t.type) {
                    t.preventDefault(), t.stopPropagation();
                    return;
                  }
                  var i = t.touches,
                    c = i ? i[0].clientX : t.clientX,
                    d = c - a;
                  (a = c),
                    Math.abs(d) > l &&
                      n &&
                      "" === String(n()) &&
                      ((function (t, n, i) {
                        var a = e.Event(t, { originalEvent: n });
                        e(n.target).trigger(a, i);
                      })("swipe", t, { direction: d > 0 ? "right" : "left" }),
                      f());
                }
              }
              function s(e) {
                if (!!o) {
                  if (((o = !1), r && "mouseup" === e.type)) {
                    e.preventDefault(), e.stopPropagation(), (r = !1);
                    return;
                  }
                }
              }
              function f() {
                o = !1;
              }
              t.addEventListener("touchstart", c, !1),
                t.addEventListener("touchmove", d, !1),
                t.addEventListener("touchend", s, !1),
                t.addEventListener("touchcancel", f, !1),
                t.addEventListener("mousedown", c, !1),
                t.addEventListener("mousemove", d, !1),
                t.addEventListener("mouseup", s, !1),
                t.addEventListener("mouseout", f, !1);
              this.destroy = function () {
                t.removeEventListener("touchstart", c, !1),
                  t.removeEventListener("touchmove", d, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", f, !1),
                  t.removeEventListener("mousedown", c, !1),
                  t.removeEventListener("mousemove", d, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", f, !1),
                  (t = null);
              };
            }
            return (
              (e.event.special.tap = {
                bindType: "click",
                delegateType: "click",
              }),
              (t.init = function (t) {
                return (t = "string" == typeof t ? e(t).get(0) : t)
                  ? new i(t)
                  : null;
              }),
              (t.instance = t.init(document)),
              t
            );
          })
        );
      },
      7527: function (e, t, n) {
        "use strict";
        var i = n(3949);
        let a = (e, t, n, i) => {
          let a = document.createElement("div");
          t.appendChild(a),
            turnstile.render(a, {
              sitekey: e,
              callback: function (e) {
                n(e);
              },
              "error-callback": function () {
                i();
              },
            });
        };
        i.define(
          "forms",
          (e.exports = function (e, t) {
            let n;
            let o = "TURNSTILE_LOADED";
            var r,
              l,
              c,
              d,
              s,
              f = {},
              u = e(document),
              p = window.location,
              I = window.XDomainRequest && !window.atob,
              y = ".w-form",
              E = /e(-)?mail/i,
              T = /^\S+@\S+$/,
              g = window.alert,
              m = i.env();
            let O = u
              .find("[data-turnstile-sitekey]")
              .data("turnstile-sitekey");
            var b = /list-manage[1-9]?.com/i,
              v = t.debounce(function () {
                g(
                  "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
                );
              }, 100);
            f.ready =
              f.design =
              f.preview =
                function () {
                  (function () {
                    O &&
                      (((n = document.createElement("script")).src =
                        "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                      document.head.appendChild(n),
                      (n.onload = () => {
                        u.trigger(o);
                      }));
                  })(),
                    (function () {
                      if (
                        ((d =
                          "https://webflow.com/api/v1/form/" +
                          (l = e("html").attr("data-wf-site"))),
                        I &&
                          d.indexOf("https://webflow.com") >= 0 &&
                          (d = d.replace(
                            "https://webflow.com",
                            "https://formdata.webflow.com"
                          )),
                        (s = `${d}/signFile`),
                        !!(r = e(y + " form")).length)
                      )
                        r.each(_);
                    })(),
                    !m &&
                      !c &&
                      (function () {
                        (c = !0),
                          u.on("submit", y + " form", function (t) {
                            var n = e.data(this, y);
                            n.handler && ((n.evt = t), n.handler(n));
                          });
                        let t = ".w-checkbox-input",
                          n = ".w-radio-input",
                          i = "w--redirected-checked",
                          a = "w--redirected-focus",
                          o = "w--redirected-focus-visible",
                          r = [
                            ["checkbox", t],
                            ["radio", n],
                          ];
                        u.on(
                          "change",
                          y + ' form input[type="checkbox"]:not(' + t + ")",
                          (n) => {
                            e(n.target).siblings(t).toggleClass(i);
                          }
                        ),
                          u.on(
                            "change",
                            y + ' form input[type="radio"]',
                            (a) => {
                              e(`input[name="${a.target.name}"]:not(${t})`).map(
                                (t, a) => e(a).siblings(n).removeClass(i)
                              );
                              let o = e(a.target);
                              !o.hasClass("w-radio-input") &&
                                o.siblings(n).addClass(i);
                            }
                          ),
                          r.forEach(([t, n]) => {
                            u.on(
                              "focus",
                              y + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target).siblings(n).addClass(a),
                                  e(t.target)
                                    .filter(
                                      ":focus-visible, [data-wf-focus-visible]"
                                    )
                                    .siblings(n)
                                    .addClass(o);
                              }
                            ),
                              u.on(
                                "blur",
                                y + ` form input[type="${t}"]:not(` + n + ")",
                                (t) => {
                                  e(t.target)
                                    .siblings(n)
                                    .removeClass(`${a} ${o}`);
                                }
                              );
                          });
                      })();
                };
            function _(t, n) {
              var i = e(n),
                r = e.data(n, y);
              !r && (r = e.data(n, y, { form: i })), A(r);
              var c = i.closest("div.w-form");
              (r.done = c.find("> .w-form-done")),
                (r.fail = c.find("> .w-form-fail")),
                (r.fileUploads = c.find(".w-file-upload")),
                r.fileUploads.each(function (t) {
                  (function (t, n) {
                    if (!!n.fileUploads && !!n.fileUploads[t]) {
                      var i,
                        a = e(n.fileUploads[t]),
                        o = a.find("> .w-file-upload-default"),
                        r = a.find("> .w-file-upload-uploading"),
                        l = a.find("> .w-file-upload-success"),
                        c = a.find("> .w-file-upload-error"),
                        d = o.find(".w-file-upload-input"),
                        f = o.find(".w-file-upload-label"),
                        u = f.children(),
                        p = c.find(".w-file-upload-error-msg"),
                        I = l.find(".w-file-upload-file"),
                        y = l.find(".w-file-remove-link"),
                        E = I.find(".w-file-upload-file-name"),
                        T = p.attr("data-w-size-error"),
                        g = p.attr("data-w-type-error"),
                        O = p.attr("data-w-generic-error");
                      if (
                        (!m &&
                          f.on("click keydown", function (e) {
                            if (
                              "keydown" !== e.type ||
                              13 === e.which ||
                              32 === e.which
                            )
                              e.preventDefault(), d.click();
                          }),
                        f
                          .find(".w-icon-file-upload-icon")
                          .attr("aria-hidden", "true"),
                        y
                          .find(".w-icon-file-upload-remove")
                          .attr("aria-hidden", "true"),
                        m)
                      )
                        d.on("click", function (e) {
                          e.preventDefault();
                        }),
                          f.on("click", function (e) {
                            e.preventDefault();
                          }),
                          u.on("click", function (e) {
                            e.preventDefault();
                          });
                      else {
                        y.on("click keydown", function (e) {
                          if ("keydown" === e.type) {
                            if (13 !== e.which && 32 !== e.which) return;
                            e.preventDefault();
                          }
                          d.removeAttr("data-value"),
                            d.val(""),
                            E.html(""),
                            o.toggle(!0),
                            l.toggle(!1),
                            f.focus();
                        }),
                          d.on("change", function (a) {
                            if (
                              !!(i =
                                a.target && a.target.files && a.target.files[0])
                            )
                              o.toggle(!1),
                                c.toggle(!1),
                                r.toggle(!0),
                                r.focus(),
                                E.text(i.name),
                                !h() && R(n),
                                (n.fileUploads[t].uploading = !0),
                                (function (t, n) {
                                  var i = new URLSearchParams({
                                    name: t.name,
                                    size: t.size,
                                  });
                                  e.ajax({
                                    type: "GET",
                                    url: `${s}?${i}`,
                                    crossDomain: !0,
                                  })
                                    .done(function (e) {
                                      n(null, e);
                                    })
                                    .fail(function (e) {
                                      n(e);
                                    });
                                })(i, _);
                          });
                        var b = f.outerHeight();
                        d.height(b), d.width(1);
                      }
                    }
                    function v(e) {
                      var i = e.responseJSON && e.responseJSON.msg,
                        a = O;
                      "string" == typeof i &&
                      0 === i.indexOf("InvalidFileTypeError")
                        ? (a = g)
                        : "string" == typeof i &&
                          0 === i.indexOf("MaxFileSizeError") &&
                          (a = T),
                        p.text(a),
                        d.removeAttr("data-value"),
                        d.val(""),
                        r.toggle(!1),
                        o.toggle(!0),
                        c.toggle(!0),
                        c.focus(),
                        (n.fileUploads[t].uploading = !1),
                        !h() && A(n);
                    }
                    function _(t, n) {
                      if (t) return v(t);
                      var a = n.fileName,
                        o = n.postData,
                        r = n.fileId,
                        l = n.s3Url;
                      d.attr("data-value", r),
                        (function (t, n, i, a, o) {
                          var r = new FormData();
                          for (var l in n) r.append(l, n[l]);
                          r.append("file", i, a),
                            e
                              .ajax({
                                type: "POST",
                                url: t,
                                data: r,
                                processData: !1,
                                contentType: !1,
                              })
                              .done(function () {
                                o(null);
                              })
                              .fail(function (e) {
                                o(e);
                              });
                        })(l, o, i, a, S);
                    }
                    function S(e) {
                      if (e) return v(e);
                      r.toggle(!1),
                        l.css("display", "inline-block"),
                        l.focus(),
                        (n.fileUploads[t].uploading = !1),
                        !h() && A(n);
                    }
                    function h() {
                      return (
                        (n.fileUploads && n.fileUploads.toArray()) ||
                        []
                      ).some(function (e) {
                        return e.uploading;
                      });
                    }
                  })(t, r);
                }),
                O &&
                  ((r.wait = !1),
                  R(r),
                  u.on(
                    "undefined" != typeof turnstile ? "ready" : o,
                    function () {
                      a(
                        O,
                        n,
                        (e) => {
                          (r.turnstileToken = e), A(r);
                        },
                        () => {
                          R(r);
                        }
                      );
                    }
                  ));
              var d =
                r.form.attr("aria-label") || r.form.attr("data-name") || "Form";
              !r.done.attr("aria-label") && r.form.attr("aria-label", d),
                r.done.attr("tabindex", "-1"),
                r.done.attr("role", "region"),
                !r.done.attr("aria-label") &&
                  r.done.attr("aria-label", d + " success"),
                r.fail.attr("tabindex", "-1"),
                r.fail.attr("role", "region"),
                !r.fail.attr("aria-label") &&
                  r.fail.attr("aria-label", d + " failure");
              var f = (r.action = i.attr("action"));
              if (
                ((r.handler = null),
                (r.redirect = i.attr("data-redirect")),
                b.test(f))
              ) {
                r.handler = h;
                return;
              }
              if (!f) {
                if (l) {
                  r.handler = S;
                  return;
                }
                v();
              }
            }
            function A(e) {
              var t = (e.btn = e.form.find(':input[type="submit"]'));
              (e.wait = e.btn.attr("data-wait") || null),
                (e.success = !1),
                t.prop("disabled", !!(O && !e.turnstileToken)),
                e.label && t.val(e.label);
            }
            function R(e) {
              var t = e.btn,
                n = e.wait;
              t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
            }
            function S(e) {
              N(e), L(e);
            }
            function h(n) {
              A(n);
              var i,
                a,
                o,
                r,
                l = n.form,
                c = {};
              if (/^https/.test(p.href) && !/^https/.test(n.action)) {
                l.attr("method", "post");
                return;
              }
              N(n);
              var d =
                ((i = l),
                (o = null),
                (a = (a = c) || {}),
                i
                  .find(
                    ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                  )
                  .each(function (t, n) {
                    var r = e(n),
                      l = r.attr("type"),
                      c =
                        r.attr("data-name") ||
                        r.attr("name") ||
                        "Field " + (t + 1);
                    c = encodeURIComponent(c);
                    var d = r.val();
                    if ("checkbox" === l) d = r.is(":checked");
                    else if ("radio" === l) {
                      if (null === a[c] || "string" == typeof a[c]) return;
                      d =
                        i
                          .find('input[name="' + r.attr("name") + '"]:checked')
                          .val() || null;
                    }
                    "string" == typeof d && (d = e.trim(d)),
                      (a[c] = d),
                      (o =
                        o ||
                        (function (e, t, n, i) {
                          var a = null;
                          return (
                            "password" === t
                              ? (a = "Passwords cannot be submitted.")
                              : e.attr("required")
                              ? i
                                ? E.test(e.attr("type")) &&
                                  !T.test(i) &&
                                  (a =
                                    "Please enter a valid email address for: " +
                                    n)
                                : (a =
                                    "Please fill out the required field: " + n)
                              : "g-recaptcha-response" === n &&
                                !i &&
                                (a = "Please confirm you’re not a robot."),
                            a
                          );
                        })(r, l, c, d));
                  }),
                o);
              if (d) return g(d);
              R(n),
                t.each(c, function (e, t) {
                  E.test(t) && (c.EMAIL = e),
                    /^((full[ _-]?)?name)$/i.test(t) && (r = e),
                    /^(first[ _-]?name)$/i.test(t) && (c.FNAME = e),
                    /^(last[ _-]?name)$/i.test(t) && (c.LNAME = e);
                }),
                r &&
                  !c.FNAME &&
                  ((r = r.split(" ")),
                  (c.FNAME = r[0]),
                  (c.LNAME = c.LNAME || r[1]));
              var s = n.action.replace("/post?", "/post-json?") + "&c=?",
                f = s.indexOf("u=") + 2;
              f = s.substring(f, s.indexOf("&", f));
              var u = s.indexOf("id=") + 3;
              (c["b_" + f + "_" + (u = s.substring(u, s.indexOf("&", u)))] =
                ""),
                e
                  .ajax({ url: s, data: c, dataType: "jsonp" })
                  .done(function (e) {
                    (n.success =
                      "success" === e.result || /already/.test(e.msg)),
                      !n.success && console.info("MailChimp error: " + e.msg),
                      L(n);
                  })
                  .fail(function () {
                    L(n);
                  });
            }
            function L(e) {
              var t = e.form,
                n = e.redirect,
                a = e.success;
              if (a && n) {
                i.location(n);
                return;
              }
              e.done.toggle(a),
                e.fail.toggle(!a),
                a ? e.done.focus() : e.fail.focus(),
                t.toggle(!a),
                A(e);
            }
            function N(e) {
              e.evt && e.evt.preventDefault(), (e.evt = null);
            }
            return f;
          })
        );
      },
      1655: function (e, t, n) {
        "use strict";
        var i = n(3949),
          a = n(5134);
        let o = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        };
        i.define(
          "navbar",
          (e.exports = function (e, t) {
            var n,
              r,
              l,
              c,
              d = {},
              s = e.tram,
              f = e(window),
              u = e(document),
              p = t.debounce,
              I = i.env(),
              y = ".w-nav",
              E = "w--open",
              T = "w--nav-dropdown-open",
              g = "w--nav-dropdown-toggle-open",
              m = "w--nav-dropdown-list-open",
              O = "w--nav-link-open",
              b = a.triggers,
              v = e();
            (d.ready =
              d.design =
              d.preview =
                function () {
                  if (
                    ((l = I && i.env("design")),
                    (c = i.env("editor")),
                    (n = e(document.body)),
                    !!(r = u.find(y)).length)
                  )
                    r.each(R),
                      _(),
                      (function () {
                        i.resize.on(A);
                      })();
                }),
              (d.destroy = function () {
                (v = e()), _(), r && r.length && r.each(S);
              });
            function _() {
              i.resize.off(A);
            }
            function A() {
              r.each(U);
            }
            function R(n, i) {
              var a = e(i),
                r = e.data(i, y);
              !r &&
                (r = e.data(i, y, {
                  open: !1,
                  el: a,
                  config: {},
                  selectedIdx: -1,
                })),
                (r.menu = a.find(".w-nav-menu")),
                (r.links = r.menu.find(".w-nav-link")),
                (r.dropdowns = r.menu.find(".w-dropdown")),
                (r.dropdownToggle = r.menu.find(".w-dropdown-toggle")),
                (r.dropdownList = r.menu.find(".w-dropdown-list")),
                (r.button = a.find(".w-nav-button")),
                (r.container = a.find(".w-container")),
                (r.overlayContainerId = "w-nav-overlay-" + n),
                (r.outside = (function (t) {
                  return (
                    t.outside && u.off("click" + y, t.outside),
                    function (n) {
                      var i = e(n.target);
                      if (
                        !c ||
                        !i.closest(".w-editor-bem-EditorOverlay").length
                      )
                        x(t, i);
                    }
                  );
                })(r));
              var d = a.find(".w-nav-brand");
              d &&
                "/" === d.attr("href") &&
                null == d.attr("aria-label") &&
                d.attr("aria-label", "home"),
                r.button.attr("style", "-webkit-user-select: text;"),
                null == r.button.attr("aria-label") &&
                  r.button.attr("aria-label", "menu"),
                r.button.attr("role", "button"),
                r.button.attr("tabindex", "0"),
                r.button.attr("aria-controls", r.overlayContainerId),
                r.button.attr("aria-haspopup", "menu"),
                r.button.attr("aria-expanded", "false"),
                r.el.off(y),
                r.button.off(y),
                r.menu.off(y),
                L(r),
                l
                  ? (h(r),
                    r.el.on(
                      "setting" + y,
                      (function (e) {
                        return function (n, i) {
                          i = i || {};
                          var a = f.width();
                          L(e),
                            !0 === i.open && k(e, !0),
                            !1 === i.open && B(e, !0),
                            e.open &&
                              t.defer(function () {
                                a !== f.width() && C(e);
                              });
                        };
                      })(r)
                    ))
                  : ((function (t) {
                      if (!t.overlay)
                        (t.overlay = e(
                          '<div class="w-nav-overlay" data-wf-ignore />'
                        ).appendTo(t.el)),
                          t.overlay.attr("id", t.overlayContainerId),
                          (t.parent = t.menu.parent()),
                          B(t, !0);
                    })(r),
                    r.button.on("click" + y, G(r)),
                    r.menu.on("click" + y, "a", P(r)),
                    r.button.on(
                      "keydown" + y,
                      (function (e) {
                        return function (t) {
                          switch (t.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                              return (
                                G(e)(), t.preventDefault(), t.stopPropagation()
                              );
                            case o.ESCAPE:
                              return (
                                B(e), t.preventDefault(), t.stopPropagation()
                              );
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                            case o.HOME:
                            case o.END:
                              if (!e.open)
                                return t.preventDefault(), t.stopPropagation();
                              return (
                                t.keyCode === o.END
                                  ? (e.selectedIdx = e.links.length - 1)
                                  : (e.selectedIdx = 0),
                                N(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                          }
                        };
                      })(r)
                    ),
                    r.el.on(
                      "keydown" + y,
                      (function (e) {
                        return function (t) {
                          if (!!e.open)
                            switch (
                              ((e.selectedIdx = e.links.index(
                                document.activeElement
                              )),
                              t.keyCode)
                            ) {
                              case o.HOME:
                              case o.END:
                                return (
                                  t.keyCode === o.END
                                    ? (e.selectedIdx = e.links.length - 1)
                                    : (e.selectedIdx = 0),
                                  N(e),
                                  t.preventDefault(),
                                  t.stopPropagation()
                                );
                              case o.ESCAPE:
                                return (
                                  B(e),
                                  e.button.focus(),
                                  t.preventDefault(),
                                  t.stopPropagation()
                                );
                              case o.ARROW_LEFT:
                              case o.ARROW_UP:
                                return (
                                  (e.selectedIdx = Math.max(
                                    -1,
                                    e.selectedIdx - 1
                                  )),
                                  N(e),
                                  t.preventDefault(),
                                  t.stopPropagation()
                                );
                              case o.ARROW_RIGHT:
                              case o.ARROW_DOWN:
                                return (
                                  (e.selectedIdx = Math.min(
                                    e.links.length - 1,
                                    e.selectedIdx + 1
                                  )),
                                  N(e),
                                  t.preventDefault(),
                                  t.stopPropagation()
                                );
                            }
                        };
                      })(r)
                    )),
                U(n, i);
            }
            function S(t, n) {
              var i = e.data(n, y);
              i && (h(i), e.removeData(n, y));
            }
            function h(e) {
              if (!!e.overlay) B(e, !0), e.overlay.remove(), (e.overlay = null);
            }
            function L(e) {
              var n = {},
                i = e.config || {},
                a = (n.animation = e.el.attr("data-animation") || "default");
              (n.animOver = /^over/.test(a)),
                (n.animDirect = /left$/.test(a) ? -1 : 1),
                i.animation !== a && e.open && t.defer(C, e),
                (n.easing = e.el.attr("data-easing") || "ease"),
                (n.easing2 = e.el.attr("data-easing2") || "ease");
              var o = e.el.attr("data-duration");
              (n.duration = null != o ? Number(o) : 400),
                (n.docHeight = e.el.attr("data-doc-height")),
                (e.config = n);
            }
            function N(e) {
              if (e.links[e.selectedIdx]) {
                var t = e.links[e.selectedIdx];
                t.focus(), P(t);
              }
            }
            function C(e) {
              if (!!e.open) B(e, !0), k(e, !0);
            }
            function G(e) {
              return p(function () {
                e.open ? B(e) : k(e);
              });
            }
            function P(t) {
              return function (n) {
                var a = e(this).attr("href");
                if (!i.validClick(n.currentTarget)) {
                  n.preventDefault();
                  return;
                }
                a && 0 === a.indexOf("#") && t.open && B(t);
              };
            }
            var x = p(function (e, t) {
              if (!!e.open) {
                var n = t.closest(".w-nav-menu");
                !e.menu.is(n) && B(e);
              }
            });
            function U(t, n) {
              var i = e.data(n, y),
                a = (i.collapsed = "none" !== i.button.css("display"));
              if ((i.open && !a && !l && B(i, !0), i.container.length)) {
                var o = (function (t) {
                  var n = t.container.css(M);
                  return (
                    "none" === n && (n = ""),
                    function (t, i) {
                      (i = e(i)).css(M, ""), "none" === i.css(M) && i.css(M, n);
                    }
                  );
                })(i);
                i.links.each(o), i.dropdowns.each(o);
              }
              i.open && F(i);
            }
            var M = "max-width";
            function w(e, t) {
              t.setAttribute("data-nav-menu-open", "");
            }
            function V(e, t) {
              t.removeAttribute("data-nav-menu-open");
            }
            function k(e, t) {
              if (!e.open) {
                (e.open = !0),
                  e.menu.each(w),
                  e.links.addClass(O),
                  e.dropdowns.addClass(T),
                  e.dropdownToggle.addClass(g),
                  e.dropdownList.addClass(m),
                  e.button.addClass(E);
                var n = e.config;
                ("none" === n.animation ||
                  !s.support.transform ||
                  n.duration <= 0) &&
                  (t = !0);
                var a = F(e),
                  o = e.menu.outerHeight(!0),
                  r = e.menu.outerWidth(!0),
                  c = e.el.height(),
                  d = e.el[0];
                if (
                  (U(0, d),
                  b.intro(0, d),
                  i.redraw.up(),
                  !l && u.on("click" + y, e.outside),
                  t)
                ) {
                  p();
                  return;
                }
                var f = "transform " + n.duration + "ms " + n.easing;
                if (
                  (e.overlay &&
                    ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                  n.animOver)
                ) {
                  s(e.menu)
                    .add(f)
                    .set({ x: n.animDirect * r, height: a })
                    .start({ x: 0 })
                    .then(p),
                    e.overlay && e.overlay.width(r);
                  return;
                }
                s(e.menu)
                  .add(f)
                  .set({ y: -(c + o) })
                  .start({ y: 0 })
                  .then(p);
              }
              function p() {
                e.button.attr("aria-expanded", "true");
              }
            }
            function F(e) {
              var t = e.config,
                i = t.docHeight ? u.height() : n.height();
              return (
                t.animOver
                  ? e.menu.height(i)
                  : "fixed" !== e.el.css("position") &&
                    (i -= e.el.outerHeight(!0)),
                e.overlay && e.overlay.height(i),
                i
              );
            }
            function B(e, t) {
              if (!!e.open) {
                (e.open = !1), e.button.removeClass(E);
                var n = e.config;
                if (
                  (("none" === n.animation ||
                    !s.support.transform ||
                    n.duration <= 0) &&
                    (t = !0),
                  b.outro(0, e.el[0]),
                  u.off("click" + y, e.outside),
                  t)
                ) {
                  s(e.menu).stop(), l();
                  return;
                }
                var i = "transform " + n.duration + "ms " + n.easing2,
                  a = e.menu.outerHeight(!0),
                  o = e.menu.outerWidth(!0),
                  r = e.el.height();
                if (n.animOver) {
                  s(e.menu)
                    .add(i)
                    .start({ x: o * n.animDirect })
                    .then(l);
                  return;
                }
                s(e.menu)
                  .add(i)
                  .start({ y: -(r + a) })
                  .then(l);
              }
              function l() {
                e.menu.height(""),
                  s(e.menu).set({ x: 0, y: 0 }),
                  e.menu.each(V),
                  e.links.removeClass(O),
                  e.dropdowns.removeClass(T),
                  e.dropdownToggle.removeClass(g),
                  e.dropdownList.removeClass(m),
                  e.overlay &&
                    e.overlay.children().length &&
                    (v.length
                      ? e.menu.insertAfter(v)
                      : e.menu.prependTo(e.parent),
                    e.overlay.attr("style", "").hide()),
                  e.el.triggerHandler("w-close"),
                  e.button.attr("aria-expanded", "false");
              }
            }
            return d;
          })
        );
      },
      3946: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          actionListPlaybackChanged: function () {
            return X;
          },
          animationFrameChanged: function () {
            return V;
          },
          clearRequested: function () {
            return x;
          },
          elementStateChanged: function () {
            return j;
          },
          eventListenerAdded: function () {
            return U;
          },
          eventStateChanged: function () {
            return w;
          },
          instanceAdded: function () {
            return F;
          },
          instanceRemoved: function () {
            return D;
          },
          instanceStarted: function () {
            return B;
          },
          mediaQueriesDefined: function () {
            return Q;
          },
          parameterChanged: function () {
            return k;
          },
          playbackRequested: function () {
            return G;
          },
          previewRequested: function () {
            return C;
          },
          rawDataImported: function () {
            return S;
          },
          sessionInitialized: function () {
            return h;
          },
          sessionStarted: function () {
            return L;
          },
          sessionStopped: function () {
            return N;
          },
          stopRequested: function () {
            return P;
          },
          testFrameRendered: function () {
            return M;
          },
          viewportWidthChanged: function () {
            return W;
          },
        });
        let i = n(7087),
          a = n(9468),
          {
            IX2_RAW_DATA_IMPORTED: o,
            IX2_SESSION_INITIALIZED: r,
            IX2_SESSION_STARTED: l,
            IX2_SESSION_STOPPED: c,
            IX2_PREVIEW_REQUESTED: d,
            IX2_PLAYBACK_REQUESTED: s,
            IX2_STOP_REQUESTED: f,
            IX2_CLEAR_REQUESTED: u,
            IX2_EVENT_LISTENER_ADDED: p,
            IX2_TEST_FRAME_RENDERED: I,
            IX2_EVENT_STATE_CHANGED: y,
            IX2_ANIMATION_FRAME_CHANGED: E,
            IX2_PARAMETER_CHANGED: T,
            IX2_INSTANCE_ADDED: g,
            IX2_INSTANCE_STARTED: m,
            IX2_INSTANCE_REMOVED: O,
            IX2_ELEMENT_STATE_CHANGED: b,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
            IX2_VIEWPORT_WIDTH_CHANGED: _,
            IX2_MEDIA_QUERIES_DEFINED: A,
          } = i.IX2EngineActionTypes,
          { reifyState: R } = a.IX2VanillaUtils,
          S = (e) => ({ type: o, payload: { ...R(e) } }),
          h = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
            type: r,
            payload: { hasBoundaryNodes: e, reducedMotion: t },
          }),
          L = () => ({ type: l }),
          N = () => ({ type: c }),
          C = ({ rawData: e, defer: t }) => ({
            type: d,
            payload: { defer: t, rawData: e },
          }),
          G = ({
            actionTypeId: e = i.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: a,
            allowEvents: o,
            immediate: r,
            testManual: l,
            verbose: c,
            rawData: d,
          }) => ({
            type: s,
            payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: n,
              testManual: l,
              eventId: a,
              allowEvents: o,
              immediate: r,
              verbose: c,
              rawData: d,
            },
          }),
          P = (e) => ({ type: f, payload: { actionListId: e } }),
          x = () => ({ type: u }),
          U = (e, t) => ({
            type: p,
            payload: { target: e, listenerParams: t },
          }),
          M = (e = 1) => ({ type: I, payload: { step: e } }),
          w = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
          V = (e, t) => ({ type: E, payload: { now: e, parameters: t } }),
          k = (e, t) => ({ type: T, payload: { key: e, value: t } }),
          F = (e) => ({ type: g, payload: { ...e } }),
          B = (e, t) => ({ type: m, payload: { instanceId: e, time: t } }),
          D = (e) => ({ type: O, payload: { instanceId: e } }),
          j = (e, t, n, i) => ({
            type: b,
            payload: {
              elementId: e,
              actionTypeId: t,
              current: n,
              actionItem: i,
            },
          }),
          X = ({ actionListId: e, isPlaying: t }) => ({
            type: v,
            payload: { actionListId: e, isPlaying: t },
          }),
          W = ({ width: e, mediaQueries: t }) => ({
            type: _,
            payload: { width: e, mediaQueries: t },
          }),
          Q = () => ({ type: A });
      },
      6011: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          actions: function () {
            return r;
          },
          destroy: function () {
            return f;
          },
          init: function () {
            return s;
          },
          setEnv: function () {
            return d;
          },
          store: function () {
            return c;
          },
        });
        let i = n(9516),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(7243)),
          o = n(1970),
          r = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = l(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (
                "default" !== o &&
                Object.prototype.hasOwnProperty.call(e, o)
              ) {
                var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                r && (r.get || r.set)
                  ? Object.defineProperty(i, o, r)
                  : (i[o] = e[o]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(3946));
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (l = function (e) {
            return e ? n : t;
          })(e);
        }
        let c = (0, i.createStore)(a.default);
        function d(e) {
          e() && (0, o.observeRequests)(c);
        }
        function s(e) {
          f(), (0, o.startEngine)({ store: c, rawData: e, allowEvents: !0 });
        }
        function f() {
          (0, o.stopEngine)(c);
        }
      },
      5012: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          elementContains: function () {
            return T;
          },
          getChildElements: function () {
            return m;
          },
          getClosestElement: function () {
            return b;
          },
          getProperty: function () {
            return u;
          },
          getQuerySelector: function () {
            return I;
          },
          getRefType: function () {
            return v;
          },
          getSiblingElements: function () {
            return O;
          },
          getStyle: function () {
            return f;
          },
          getValidDocument: function () {
            return y;
          },
          isSiblingNode: function () {
            return g;
          },
          matchSelector: function () {
            return p;
          },
          queryDocument: function () {
            return E;
          },
          setStyle: function () {
            return s;
          },
        });
        let i = n(9468),
          a = n(7087),
          { ELEMENT_MATCHES: o } = i.IX2BrowserSupport,
          {
            IX2_ID_DELIMITER: r,
            HTML_ELEMENT: l,
            PLAIN_OBJECT: c,
            WF_PAGE: d,
          } = a.IX2EngineConstants;
        function s(e, t, n) {
          e.style[t] = n;
        }
        function f(e, t) {
          return t.startsWith("--")
            ? window
                .getComputedStyle(document.documentElement)
                .getPropertyValue(t)
            : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
        }
        function u(e, t) {
          return e[t];
        }
        function p(e) {
          return (t) => t[o](e);
        }
        function I({ id: e, selector: t }) {
          if (e) {
            let t = e;
            if (-1 !== e.indexOf(r)) {
              let n = e.split(r),
                i = n[0];
              if (((t = n[1]), i !== document.documentElement.getAttribute(d)))
                return null;
            }
            return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
          }
          return t;
        }
        function y(e) {
          return null == e || e === document.documentElement.getAttribute(d)
            ? document
            : null;
        }
        function E(e, t) {
          return Array.prototype.slice.call(
            document.querySelectorAll(t ? e + " " + t : e)
          );
        }
        function T(e, t) {
          return e.contains(t);
        }
        function g(e, t) {
          return e !== t && e.parentNode === t.parentNode;
        }
        function m(e) {
          let t = [];
          for (let n = 0, { length: i } = e || []; n < i; n++) {
            let { children: i } = e[n],
              { length: a } = i;
            if (!!a) for (let e = 0; e < a; e++) t.push(i[e]);
          }
          return t;
        }
        function O(e = []) {
          let t = [],
            n = [];
          for (let i = 0, { length: a } = e; i < a; i++) {
            let { parentNode: a } = e[i];
            if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
              continue;
            n.push(a);
            let o = a.firstElementChild;
            for (; null != o; )
              -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
          }
          return t;
        }
        let b = Element.prototype.closest
          ? (e, t) =>
              document.documentElement.contains(e) ? e.closest(t) : null
          : (e, t) => {
              if (!document.documentElement.contains(e)) return null;
              let n = e;
              do {
                if (n[o] && n[o](t)) return n;
                n = n.parentNode;
              } while (null != n);
              return null;
            };
        function v(e) {
          return null != e && "object" == typeof e
            ? e instanceof Element
              ? l
              : c
            : null;
        }
      },
      1970: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          observeRequests: function () {
            return $;
          },
          startActionGroup: function () {
            return eu;
          },
          startEngine: function () {
            return et;
          },
          stopActionGroup: function () {
            return ef;
          },
          stopAllActionGroups: function () {
            return es;
          },
          stopEngine: function () {
            return en;
          },
        });
        let i = E(n(9777)),
          a = E(n(4738)),
          o = E(n(4659)),
          r = E(n(3452)),
          l = E(n(6633)),
          c = E(n(3729)),
          d = E(n(2397)),
          s = E(n(5082)),
          f = n(7087),
          u = n(9468),
          p = n(3946),
          I = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = T(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (
                "default" !== o &&
                Object.prototype.hasOwnProperty.call(e, o)
              ) {
                var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                r && (r.get || r.set)
                  ? Object.defineProperty(i, o, r)
                  : (i[o] = e[o]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(5012)),
          y = E(n(8955));
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function T(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (T = function (e) {
            return e ? n : t;
          })(e);
        }
        let g = Object.keys(f.QuickEffectIds),
          m = (e) => g.includes(e),
          {
            COLON_DELIMITER: O,
            BOUNDARY_SELECTOR: b,
            HTML_ELEMENT: v,
            RENDER_GENERAL: _,
            W_MOD_IX: A,
          } = f.IX2EngineConstants,
          {
            getAffectedElements: R,
            getElementId: S,
            getDestinationValues: h,
            observeStore: L,
            getInstanceId: N,
            renderHTMLElement: C,
            clearAllStyles: G,
            getMaxDurationItemIndex: P,
            getComputedStyle: x,
            getInstanceOrigin: U,
            reduceListToGroup: M,
            shouldNamespaceEventParameter: w,
            getNamespacedParameterId: V,
            shouldAllowMediaQuery: k,
            cleanupHTMLElement: F,
            clearObjectCache: B,
            stringifyTarget: D,
            mediaQueriesEqual: j,
            shallowEqual: X,
          } = u.IX2VanillaUtils,
          {
            isPluginType: W,
            createPluginInstance: Q,
            getPluginDuration: Y,
          } = u.IX2VanillaPlugins,
          z = navigator.userAgent,
          H = z.match(/iPad/i) || z.match(/iPhone/);
        function $(e) {
          L({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: q }),
            L({
              store: e,
              select: ({ ixRequest: e }) => e.playback,
              onChange: Z,
            }),
            L({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: J }),
            L({
              store: e,
              select: ({ ixRequest: e }) => e.clear,
              onChange: ee,
            });
        }
        function q({ rawData: e, defer: t }, n) {
          let i = () => {
            et({ store: n, rawData: e, allowEvents: !0 }), K();
          };
          t ? setTimeout(i, 0) : i();
        }
        function K() {
          document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function Z(e, t) {
          let {
              actionTypeId: n,
              actionListId: i,
              actionItemId: a,
              eventId: o,
              allowEvents: r,
              immediate: l,
              testManual: c,
              verbose: d = !0,
            } = e,
            { rawData: s } = e;
          if (i && a && s && l) {
            let e = s.actionLists[i];
            e && (s = M({ actionList: e, actionItemId: a, rawData: s }));
          }
          if (
            (et({ store: t, rawData: s, allowEvents: r, testManual: c }),
            (i && n === f.ActionTypeConsts.GENERAL_START_ACTION) || m(n))
          ) {
            ef({ store: t, actionListId: i }),
              ed({ store: t, actionListId: i, eventId: o });
            let e = eu({
              store: t,
              eventId: o,
              actionListId: i,
              immediate: l,
              verbose: d,
            });
            d &&
              e &&
              t.dispatch(
                (0, p.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !l,
                })
              );
          }
        }
        function J({ actionListId: e }, t) {
          e ? ef({ store: t, actionListId: e }) : es({ store: t }), en(t);
        }
        function ee(e, t) {
          en(t), G({ store: t, elementApi: I });
        }
        function et({ store: e, rawData: t, allowEvents: n, testManual: r }) {
          let { ixSession: l } = e.getState();
          if ((t && e.dispatch((0, p.rawDataImported)(t)), !l.active)) {
            if (
              (e.dispatch(
                (0, p.sessionInitialized)({
                  hasBoundaryNodes: !!document.querySelector(b),
                  reducedMotion:
                    document.body.hasAttribute("data-wf-ix-vacation") &&
                    window.matchMedia("(prefers-reduced-motion)").matches,
                })
              ),
              n &&
                ((function (e) {
                  let { ixData: t } = e.getState(),
                    { eventTypeMap: n } = t;
                  eo(e),
                    (0, d.default)(n, (t, n) => {
                      let r = y.default[n];
                      if (!r) {
                        console.warn(`IX2 event type not configured: ${n}`);
                        return;
                      }
                      (function ({ logic: e, store: t, events: n }) {
                        (function (e) {
                          if (!H) return;
                          let t = {},
                            n = "";
                          for (let i in e) {
                            let { eventTypeId: a, target: o } = e[i],
                              r = I.getQuerySelector(o);
                            if (!t[r])
                              (a === f.EventTypeConsts.MOUSE_CLICK ||
                                a === f.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                                ((t[r] = !0),
                                (n +=
                                  r +
                                  "{cursor: pointer;touch-action: manipulation;}"));
                          }
                          if (n) {
                            let e = document.createElement("style");
                            (e.textContent = n), document.body.appendChild(e);
                          }
                        })(n);
                        let { types: r, handler: l } = e,
                          { ixData: c } = t.getState(),
                          { actionLists: u } = c,
                          y = er(n, ec);
                        if (!(0, o.default)(y)) return;
                        (0, d.default)(y, (e, o) => {
                          let r = n[o],
                            {
                              action: l,
                              id: d,
                              mediaQueries: s = c.mediaQueryKeys,
                            } = r,
                            { actionListId: y } = l.config;
                          !j(s, c.mediaQueryKeys) &&
                            t.dispatch((0, p.mediaQueriesDefined)()),
                            l.actionTypeId ===
                              f.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                              (Array.isArray(r.config)
                                ? r.config
                                : [r.config]
                              ).forEach((n) => {
                                let { continuousParameterGroupId: o } = n,
                                  r = (0, a.default)(
                                    u,
                                    `${y}.continuousParameterGroups`,
                                    []
                                  ),
                                  l = (0, i.default)(r, ({ id: e }) => e === o),
                                  c = (n.smoothing || 0) / 100,
                                  s = (n.restingState || 0) / 100;
                                if (!!l)
                                  e.forEach((e, i) => {
                                    !(function ({
                                      store: e,
                                      eventStateKey: t,
                                      eventTarget: n,
                                      eventId: i,
                                      eventConfig: o,
                                      actionListId: r,
                                      parameterGroup: l,
                                      smoothing: c,
                                      restingValue: d,
                                    }) {
                                      let { ixData: s, ixSession: u } =
                                          e.getState(),
                                        { events: p } = s,
                                        y = p[i],
                                        { eventTypeId: E } = y,
                                        T = {},
                                        g = {},
                                        m = [],
                                        { continuousActionGroups: v } = l,
                                        { id: _ } = l;
                                      w(E, o) && (_ = V(t, _));
                                      let A =
                                        u.hasBoundaryNodes && n
                                          ? I.getClosestElement(n, b)
                                          : null;
                                      v.forEach((e) => {
                                        let { keyframe: t, actionItems: i } = e;
                                        i.forEach((e) => {
                                          let { actionTypeId: i } = e,
                                            { target: a } = e.config;
                                          if (!a) return;
                                          let o = a.boundaryMode ? A : null,
                                            r = D(a) + O + i;
                                          if (
                                            ((g[r] = (function (e = [], t, n) {
                                              let i;
                                              let a = [...e];
                                              return (
                                                a.some(
                                                  (e, n) =>
                                                    e.keyframe === t &&
                                                    ((i = n), !0)
                                                ),
                                                null == i &&
                                                  ((i = a.length),
                                                  a.push({
                                                    keyframe: t,
                                                    actionItems: [],
                                                  })),
                                                a[i].actionItems.push(n),
                                                a
                                              );
                                            })(g[r], t, e)),
                                            !T[r])
                                          ) {
                                            T[r] = !0;
                                            let { config: t } = e;
                                            R({
                                              config: t,
                                              event: y,
                                              eventTarget: n,
                                              elementRoot: o,
                                              elementApi: I,
                                            }).forEach((e) => {
                                              m.push({ element: e, key: r });
                                            });
                                          }
                                        });
                                      }),
                                        m.forEach(({ element: t, key: n }) => {
                                          let o = g[n],
                                            l = (0, a.default)(
                                              o,
                                              "[0].actionItems[0]",
                                              {}
                                            ),
                                            { actionTypeId: s } = l,
                                            u = (
                                              s ===
                                              f.ActionTypeConsts.PLUGIN_RIVE
                                                ? 0 ===
                                                  (
                                                    l.config?.target
                                                      ?.selectorGuids || []
                                                  ).length
                                                : W(s)
                                            )
                                              ? Q(s)?.(t, l)
                                              : null,
                                            p = h(
                                              {
                                                element: t,
                                                actionItem: l,
                                                elementApi: I,
                                              },
                                              u
                                            );
                                          ep({
                                            store: e,
                                            element: t,
                                            eventId: i,
                                            actionListId: r,
                                            actionItem: l,
                                            destination: p,
                                            continuous: !0,
                                            parameterId: _,
                                            actionGroups: o,
                                            smoothing: c,
                                            restingValue: d,
                                            pluginInstance: u,
                                          });
                                        });
                                    })({
                                      store: t,
                                      eventStateKey: d + O + i,
                                      eventTarget: e,
                                      eventId: d,
                                      eventConfig: n,
                                      actionListId: y,
                                      parameterGroup: l,
                                      smoothing: c,
                                      restingValue: s,
                                    });
                                  });
                              }),
                            (l.actionTypeId ===
                              f.ActionTypeConsts.GENERAL_START_ACTION ||
                              m(l.actionTypeId)) &&
                              ed({ store: t, actionListId: y, eventId: d });
                        });
                        let E = (e) => {
                            let { ixSession: i } = t.getState();
                            el(y, (a, o, r) => {
                              let d = n[o],
                                s = i.eventState[r],
                                {
                                  action: u,
                                  mediaQueries: I = c.mediaQueryKeys,
                                } = d;
                              if (!k(I, i.mediaQueryKey)) return;
                              let y = (n = {}) => {
                                let i = l(
                                  {
                                    store: t,
                                    element: a,
                                    event: d,
                                    eventConfig: n,
                                    nativeEvent: e,
                                    eventStateKey: r,
                                  },
                                  s
                                );
                                !X(i, s) &&
                                  t.dispatch((0, p.eventStateChanged)(r, i));
                              };
                              u.actionTypeId ===
                              f.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                ? (Array.isArray(d.config)
                                    ? d.config
                                    : [d.config]
                                  ).forEach(y)
                                : y();
                            });
                          },
                          T = (0, s.default)(E, 12),
                          g = ({
                            target: e = document,
                            types: n,
                            throttle: i,
                          }) => {
                            n.split(" ")
                              .filter(Boolean)
                              .forEach((n) => {
                                let a = i ? T : E;
                                e.addEventListener(n, a),
                                  t.dispatch(
                                    (0, p.eventListenerAdded)(e, [n, a])
                                  );
                              });
                          };
                        Array.isArray(r)
                          ? r.forEach(g)
                          : "string" == typeof r && g(e);
                      })({ logic: r, store: e, events: t });
                    });
                  let { ixSession: r } = e.getState();
                  r.eventListeners.length &&
                    (function (e) {
                      let t = () => {
                        eo(e);
                      };
                      ea.forEach((n) => {
                        window.addEventListener(n, t),
                          e.dispatch((0, p.eventListenerAdded)(window, [n, t]));
                      }),
                        t();
                    })(e);
                })(e),
                (function () {
                  let { documentElement: e } = document;
                  -1 === e.className.indexOf(A) && (e.className += ` ${A}`);
                })(),
                e.getState().ixSession.hasDefinedMediaQueries))
            ) {
              var c;
              L({
                store: (c = e),
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  en(c),
                    G({ store: c, elementApi: I }),
                    et({ store: c, allowEvents: !0 }),
                    K();
                },
              });
            }
            e.dispatch((0, p.sessionStarted)()),
              (function (e, t) {
                let n = (i) => {
                  let { ixSession: a, ixParameters: o } = e.getState();
                  a.active &&
                    (e.dispatch((0, p.animationFrameChanged)(i, o)),
                    t
                      ? !(function (e, t) {
                          let n = L({
                            store: e,
                            select: ({ ixSession: e }) => e.tick,
                            onChange: (e) => {
                              t(e), n();
                            },
                          });
                        })(e, n)
                      : requestAnimationFrame(n));
                };
                n(window.performance.now());
              })(e, r);
          }
        }
        function en(e) {
          let { ixSession: t } = e.getState();
          if (t.active) {
            let { eventListeners: n } = t;
            n.forEach(ei), B(), e.dispatch((0, p.sessionStopped)());
          }
        }
        function ei({ target: e, listenerParams: t }) {
          e.removeEventListener.apply(e, t);
        }
        let ea = ["resize", "orientationchange"];
        function eo(e) {
          let { ixSession: t, ixData: n } = e.getState(),
            i = window.innerWidth;
          if (i !== t.viewportWidth) {
            let { mediaQueries: t } = n;
            e.dispatch(
              (0, p.viewportWidthChanged)({ width: i, mediaQueries: t })
            );
          }
        }
        let er = (e, t) => (0, r.default)((0, c.default)(e, t), l.default),
          el = (e, t) => {
            (0, d.default)(e, (e, n) => {
              e.forEach((e, i) => {
                t(e, n, n + O + i);
              });
            });
          },
          ec = (e) =>
            R({
              config: { target: e.target, targets: e.targets },
              elementApi: I,
            });
        function ed({ store: e, actionListId: t, eventId: n }) {
          let { ixData: i, ixSession: o } = e.getState(),
            { actionLists: r, events: l } = i,
            c = l[n],
            d = r[t];
          if (d && d.useFirstGroupAsInitialState) {
            let r = (0, a.default)(d, "actionItemGroups[0].actionItems", []);
            if (
              !k(
                (0, a.default)(c, "mediaQueries", i.mediaQueryKeys),
                o.mediaQueryKey
              )
            )
              return;
            r.forEach((i) => {
              let { config: a, actionTypeId: o } = i,
                r = R({
                  config:
                    a?.target?.useEventTarget === !0 &&
                    a?.target?.objectId == null
                      ? { target: c.target, targets: c.targets }
                      : a,
                  event: c,
                  elementApi: I,
                }),
                l = W(o);
              r.forEach((a) => {
                let r = l ? Q(o)?.(a, i) : null;
                ep({
                  destination: h(
                    { element: a, actionItem: i, elementApi: I },
                    r
                  ),
                  immediate: !0,
                  store: e,
                  element: a,
                  eventId: n,
                  actionItem: i,
                  actionListId: t,
                  pluginInstance: r,
                });
              });
            });
          }
        }
        function es({ store: e }) {
          let { ixInstances: t } = e.getState();
          (0, d.default)(t, (t) => {
            if (!t.continuous) {
              let { actionListId: n, verbose: i } = t;
              eI(t, e),
                i &&
                  e.dispatch(
                    (0, p.actionListPlaybackChanged)({
                      actionListId: n,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function ef({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: i,
          actionListId: o,
        }) {
          let { ixInstances: r, ixSession: l } = e.getState(),
            c = l.hasBoundaryNodes && n ? I.getClosestElement(n, b) : null;
          (0, d.default)(r, (n) => {
            let r = (0, a.default)(n, "actionItem.config.target.boundaryMode"),
              l = !i || n.eventStateKey === i;
            if (n.actionListId === o && n.eventId === t && l) {
              if (c && r && !I.elementContains(c, n.element)) return;
              eI(n, e),
                n.verbose &&
                  e.dispatch(
                    (0, p.actionListPlaybackChanged)({
                      actionListId: o,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function eu({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: i,
          actionListId: o,
          groupIndex: r = 0,
          immediate: l,
          verbose: c,
        }) {
          let { ixData: d, ixSession: s } = e.getState(),
            { events: f } = d,
            u = f[t] || {},
            { mediaQueries: p = d.mediaQueryKeys } = u,
            { actionItemGroups: y, useFirstGroupAsInitialState: E } = (0,
            a.default)(d, `actionLists.${o}`, {});
          if (!y || !y.length) return !1;
          r >= y.length && (0, a.default)(u, "config.loop") && (r = 0),
            0 === r && E && r++;
          let T =
              (0 === r || (1 === r && E)) && m(u.action?.actionTypeId)
                ? u.config.delay
                : void 0,
            g = (0, a.default)(y, [r, "actionItems"], []);
          if (!g.length || !k(p, s.mediaQueryKey)) return !1;
          let O = s.hasBoundaryNodes && n ? I.getClosestElement(n, b) : null,
            v = P(g),
            _ = !1;
          return (
            g.forEach((a, d) => {
              let { config: s, actionTypeId: f } = a,
                p = W(f),
                { target: y } = s;
              if (!!y)
                R({
                  config: s,
                  event: u,
                  eventTarget: n,
                  elementRoot: y.boundaryMode ? O : null,
                  elementApi: I,
                }).forEach((s, u) => {
                  let y = p ? Q(f)?.(s, a) : null,
                    E = p ? Y(f)(s, a) : null;
                  _ = !0;
                  let g = x({ element: s, actionItem: a }),
                    m = h({ element: s, actionItem: a, elementApi: I }, y);
                  ep({
                    store: e,
                    element: s,
                    actionItem: a,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: i,
                    actionListId: o,
                    groupIndex: r,
                    isCarrier: v === d && 0 === u,
                    computedStyle: g,
                    destination: m,
                    immediate: l,
                    verbose: c,
                    pluginInstance: y,
                    pluginDuration: E,
                    instanceDelay: T,
                  });
                });
            }),
            _
          );
        }
        function ep(e) {
          let t;
          let { store: n, computedStyle: i, ...a } = e,
            {
              element: o,
              actionItem: r,
              immediate: l,
              pluginInstance: c,
              continuous: d,
              restingValue: s,
              eventId: u,
            } = a,
            y = N(),
            { ixElements: E, ixSession: T, ixData: g } = n.getState(),
            m = S(E, o),
            { refState: O } = E[m] || {},
            b = I.getRefType(o),
            v = T.reducedMotion && f.ReducedMotionTypes[r.actionTypeId];
          if (v && d)
            switch (g.events[u]?.eventTypeId) {
              case f.EventTypeConsts.MOUSE_MOVE:
              case f.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                t = s;
                break;
              default:
                t = 0.5;
            }
          let _ = U(o, O, i, r, I, c);
          if (
            (n.dispatch(
              (0, p.instanceAdded)({
                instanceId: y,
                elementId: m,
                origin: _,
                refType: b,
                skipMotion: v,
                skipToValue: t,
                ...a,
              })
            ),
            ey(document.body, "ix2-animation-started", y),
            l)
          ) {
            (function (e, t) {
              let { ixParameters: n } = e.getState();
              e.dispatch((0, p.instanceStarted)(t, 0)),
                e.dispatch((0, p.animationFrameChanged)(performance.now(), n));
              let { ixInstances: i } = e.getState();
              eE(i[t], e);
            })(n, y);
            return;
          }
          L({ store: n, select: ({ ixInstances: e }) => e[y], onChange: eE }),
            !d && n.dispatch((0, p.instanceStarted)(y, T.tick));
        }
        function eI(e, t) {
          ey(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState(),
          });
          let { elementId: n, actionItem: i } = e,
            { ixElements: a } = t.getState(),
            { ref: o, refType: r } = a[n] || {};
          r === v && F(o, i, I), t.dispatch((0, p.instanceRemoved)(e.id));
        }
        function ey(e, t, n) {
          let i = document.createEvent("CustomEvent");
          i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
        }
        function eE(e, t) {
          let {
              active: n,
              continuous: i,
              complete: a,
              elementId: o,
              actionItem: r,
              actionTypeId: l,
              renderType: c,
              current: d,
              groupIndex: s,
              eventId: f,
              eventTarget: u,
              eventStateKey: y,
              actionListId: E,
              isCarrier: T,
              styleProp: g,
              verbose: m,
              pluginInstance: O,
            } = e,
            { ixData: b, ixSession: A } = t.getState(),
            { events: R } = b,
            { mediaQueries: S = b.mediaQueryKeys } = R && R[f] ? R[f] : {};
          if (!!k(S, A.mediaQueryKey)) {
            if (i || n || a) {
              if (d || (c === _ && a)) {
                t.dispatch((0, p.elementStateChanged)(o, l, d, r));
                let { ixElements: e } = t.getState(),
                  { ref: n, refType: i, refState: a } = e[o] || {},
                  s = a && a[l];
                (i === v || W(l)) && C(n, a, s, f, r, g, I, c, O);
              }
              if (a) {
                if (T) {
                  let e = eu({
                    store: t,
                    eventId: f,
                    eventTarget: u,
                    eventStateKey: y,
                    actionListId: E,
                    groupIndex: s + 1,
                    verbose: m,
                  });
                  m &&
                    !e &&
                    t.dispatch(
                      (0, p.actionListPlaybackChanged)({
                        actionListId: E,
                        isPlaying: !1,
                      })
                    );
                }
                eI(e, t);
              }
            }
          }
        }
      },
      8955: function (e, t, n) {
        "use strict";
        let i, a, o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return ey;
            },
          });
        let r = p(n(5801)),
          l = p(n(4738)),
          c = p(n(3789)),
          d = n(7087),
          s = n(1970),
          f = n(3946),
          u = n(9468);
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            MOUSE_CLICK: I,
            MOUSE_SECOND_CLICK: y,
            MOUSE_DOWN: E,
            MOUSE_UP: T,
            MOUSE_OVER: g,
            MOUSE_OUT: m,
            DROPDOWN_CLOSE: O,
            DROPDOWN_OPEN: b,
            SLIDER_ACTIVE: v,
            SLIDER_INACTIVE: _,
            TAB_ACTIVE: A,
            TAB_INACTIVE: R,
            NAVBAR_CLOSE: S,
            NAVBAR_OPEN: h,
            MOUSE_MOVE: L,
            PAGE_SCROLL_DOWN: N,
            SCROLL_INTO_VIEW: C,
            SCROLL_OUT_OF_VIEW: G,
            PAGE_SCROLL_UP: P,
            SCROLLING_IN_VIEW: x,
            PAGE_FINISH: U,
            ECOMMERCE_CART_CLOSE: M,
            ECOMMERCE_CART_OPEN: w,
            PAGE_START: V,
            PAGE_SCROLL: k,
          } = d.EventTypeConsts,
          F = "COMPONENT_ACTIVE",
          B = "COMPONENT_INACTIVE",
          { COLON_DELIMITER: D } = d.IX2EngineConstants,
          { getNamespacedParameterId: j } = u.IX2VanillaUtils,
          X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
          W = X(({ element: e, nativeEvent: t }) => e === t.target),
          Q = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
          Y = (0, r.default)([W, Q]),
          z = (e, t) => {
            if (t) {
              let { ixData: n } = e.getState(),
                { events: i } = n,
                a = i[t];
              if (a && !en[a.eventTypeId]) return a;
            }
            return null;
          },
          H = ({ store: e, event: t }) => {
            let { action: n } = t,
              { autoStopEventId: i } = n.config;
            return !!z(e, i);
          },
          $ = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
            let { action: o, id: r } = t,
              { actionListId: c, autoStopEventId: d } = o.config,
              f = z(e, d);
            return (
              f &&
                (0, s.stopActionGroup)({
                  store: e,
                  eventId: d,
                  eventTarget: n,
                  eventStateKey: d + D + i.split(D)[1],
                  actionListId: (0, l.default)(f, "action.config.actionListId"),
                }),
              (0, s.stopActionGroup)({
                store: e,
                eventId: r,
                eventTarget: n,
                eventStateKey: i,
                actionListId: c,
              }),
              (0, s.startActionGroup)({
                store: e,
                eventId: r,
                eventTarget: n,
                eventStateKey: i,
                actionListId: c,
              }),
              a
            );
          },
          q = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
          K = { handler: q(Y, $) },
          Z = { ...K, types: [F, B].join(" ") },
          J = [
            { target: window, types: "resize orientationchange", throttle: !0 },
            {
              target: document,
              types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
              throttle: !0,
            },
          ],
          ee = "mouseover mouseout",
          et = { types: J },
          en = { PAGE_START: V, PAGE_FINISH: U },
          ei = (() => {
            let e = void 0 !== window.pageXOffset,
              t =
                "CSS1Compat" === document.compatMode
                  ? document.documentElement
                  : document.body;
            return () => ({
              scrollLeft: e ? window.pageXOffset : t.scrollLeft,
              scrollTop: e ? window.pageYOffset : t.scrollTop,
              stiffScrollTop: (0, c.default)(
                e ? window.pageYOffset : t.scrollTop,
                0,
                t.scrollHeight - window.innerHeight
              ),
              scrollWidth: t.scrollWidth,
              scrollHeight: t.scrollHeight,
              clientWidth: t.clientWidth,
              clientHeight: t.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            });
          })(),
          ea = (e, t) =>
            !(
              e.left > t.right ||
              e.right < t.left ||
              e.top > t.bottom ||
              e.bottom < t.top
            ),
          eo = ({ element: e, nativeEvent: t }) => {
            let { type: n, target: i, relatedTarget: a } = t,
              o = e.contains(i);
            if ("mouseover" === n && o) return !0;
            let r = e.contains(a);
            return ("mouseout" === n && !!o && !!r) || !1;
          },
          er = (e) => {
            let {
                element: t,
                event: { config: n },
              } = e,
              { clientWidth: i, clientHeight: a } = ei(),
              o = n.scrollOffsetValue,
              r = n.scrollOffsetUnit,
              l = "PX" === r ? o : (a * (o || 0)) / 100;
            return ea(t.getBoundingClientRect(), {
              left: 0,
              top: l,
              right: i,
              bottom: a - l,
            });
          },
          el = (e) => (t, n) => {
            let { type: i } = t.nativeEvent,
              a = -1 !== [F, B].indexOf(i) ? i === F : n.isActive,
              o = { ...n, isActive: a };
            return n && o.isActive === n.isActive ? o : e(t, o) || o;
          },
          ec = (e) => (t, n) => {
            let i = { elementHovered: eo(t) };
            return (
              ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
                e(t, i)) ||
              i
            );
          },
          ed =
            (e) =>
            (t, n = {}) => {
              let i, a;
              let { stiffScrollTop: o, scrollHeight: r, innerHeight: l } = ei(),
                {
                  event: { config: c, eventTypeId: d },
                } = t,
                { scrollOffsetValue: s, scrollOffsetUnit: f } = c,
                u = r - l,
                p = Number((o / u).toFixed(2));
              if (n && n.percentTop === p) return n;
              let I = ("PX" === f ? s : (l * (s || 0)) / 100) / u,
                y = 0;
              n &&
                ((i = p > n.percentTop),
                (y = (a = n.scrollingDown !== i) ? p : n.anchorTop));
              let E = d === N ? p >= y + I : p <= y - I,
                T = {
                  ...n,
                  percentTop: p,
                  inBounds: E,
                  anchorTop: y,
                  scrollingDown: i,
                };
              return (
                (n && E && (a || T.inBounds !== n.inBounds) && e(t, T)) || T
              );
            },
          es = (e, t) =>
            e.left > t.left &&
            e.left < t.right &&
            e.top > t.top &&
            e.top < t.bottom,
          ef =
            (e) =>
            (t, n = { clickCount: 0 }) => {
              let i = { clickCount: (n.clickCount % 2) + 1 };
              return (i.clickCount !== n.clickCount && e(t, i)) || i;
            },
          eu = (e = !0) => ({
            ...Z,
            handler: q(
              e ? Y : W,
              el((e, t) => (t.isActive ? K.handler(e, t) : t))
            ),
          }),
          ep = (e = !0) => ({
            ...Z,
            handler: q(
              e ? Y : W,
              el((e, t) => (t.isActive ? t : K.handler(e, t)))
            ),
          });
        let eI = {
          ...et,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: o } = a.getState(),
                { events: r } = o;
              return !r[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === C) === n
                ? ($(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: er(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        };
        let ey = {
          [v]: eu(),
          [_]: ep(),
          [b]: eu(),
          [O]: ep(),
          [h]: eu(!1),
          [S]: ep(!1),
          [A]: eu(),
          [R]: ep(),
          [w]: { types: "ecommerce-cart-open", handler: q(Y, $) },
          [M]: { types: "ecommerce-cart-close", handler: q(Y, $) },
          [I]: {
            types: "click",
            handler: q(
              Y,
              ef((e, { clickCount: t }) => {
                H(e) ? 1 === t && $(e) : $(e);
              })
            ),
          },
          [y]: {
            types: "click",
            handler: q(
              Y,
              ef((e, { clickCount: t }) => {
                2 === t && $(e);
              })
            ),
          },
          [E]: { ...K, types: "mousedown" },
          [T]: { ...K, types: "mouseup" },
          [g]: {
            types: ee,
            handler: q(
              Y,
              ec((e, t) => {
                t.elementHovered && $(e);
              })
            ),
          },
          [m]: {
            types: ee,
            handler: q(
              Y,
              ec((e, t) => {
                !t.elementHovered && $(e);
              })
            ),
          },
          [L]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: r,
                  selectedAxis: l,
                  continuousParameterGroupId: c,
                  reverse: s,
                  restingState: u = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: I = o.clientY,
                  pageX: y = o.pageX,
                  pageY: E = o.pageY,
                } = i,
                T = "X_AXIS" === l,
                g = "mouseout" === i.type,
                m = u / 100,
                O = c,
                b = !1;
              switch (r) {
                case d.EventBasedOn.VIEWPORT:
                  m = T
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(I, window.innerHeight) / window.innerHeight;
                  break;
                case d.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = ei();
                  m = T ? Math.min(e + y, n) / n : Math.min(t + E, i) / i;
                  break;
                }
                case d.EventBasedOn.ELEMENT:
                default: {
                  O = j(a, c);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== Y({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: r, width: l, height: d } = n;
                  if (!e && !es({ left: p, top: I }, n)) break;
                  (b = !0), (m = T ? (p - o) / l : (I - r) / d);
                }
              }
              return (
                g && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (r !== d.EventBasedOn.ELEMENT || b || b !== o.elementHovered) &&
                  ((m = s ? 1 - m : m),
                  e.dispatch((0, f.parameterChanged)(O, m))),
                {
                  elementHovered: b,
                  clientX: p,
                  clientY: I,
                  pageX: y,
                  pageY: E,
                }
              );
            },
          },
          [k]: {
            types: J,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: o, clientHeight: r } = ei(),
                l = a / (o - r);
              (l = i ? 1 - l : l), e.dispatch((0, f.parameterChanged)(n, l));
            },
          },
          [x]: {
            types: J,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: l,
                  scrollHeight: c,
                  clientHeight: s,
                } = ei(),
                {
                  basedOn: u,
                  selectedAxis: p,
                  continuousParameterGroupId: I,
                  startsEntering: y,
                  startsExiting: E,
                  addEndOffset: T,
                  addStartOffset: g,
                  addOffsetValue: m = 0,
                  endOffsetValue: O = 0,
                } = n;
              if (u === d.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / l : r / c;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, f.parameterChanged)(I, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = j(i, I),
                  o = e.getBoundingClientRect(),
                  r = (g ? m : 0) / 100,
                  l = (T ? O : 0) / 100;
                (r = y ? r : 1 - r), (l = E ? l : 1 - l);
                let d = o.top + Math.min(o.height * r, s),
                  u = o.top + o.height * l,
                  p = Math.min(s + (u - d), c),
                  b = Math.min(Math.max(0, s - d), p) / p;
                return (
                  b !== a.scrollPercent &&
                    t.dispatch((0, f.parameterChanged)(n, b)),
                  { scrollPercent: b }
                );
              }
            },
          },
          [C]: eI,
          [G]: eI,
          [N]: {
            ...et,
            handler: ed((e, t) => {
              t.scrollingDown && $(e);
            }),
          },
          [P]: {
            ...et,
            handler: ed((e, t) => {
              !t.scrollingDown && $(e);
            }),
          },
          [U]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: q(
              W,
              ((a = $),
              (e, t) => {
                let n = { finished: "complete" === document.readyState };
                return n.finished && !(t && t.finshed) && a(e), n;
              })
            ),
          },
          [V]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: q(W, ((o = $), (e, t) => (t || o(e), { started: !0 }))),
          },
        };
      },
      4609: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixData", {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
          a = (e = Object.freeze({}), t) => {
            if (t.type === i) return t.payload.ixData || Object.freeze({});
            return e;
          };
      },
      7718: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixInstances", {
            enumerable: !0,
            get: function () {
              return b;
            },
          });
        let i = n(7087),
          a = n(9468),
          o = n(1185),
          {
            IX2_RAW_DATA_IMPORTED: r,
            IX2_SESSION_STOPPED: l,
            IX2_INSTANCE_ADDED: c,
            IX2_INSTANCE_STARTED: d,
            IX2_INSTANCE_REMOVED: s,
            IX2_ANIMATION_FRAME_CHANGED: f,
          } = i.IX2EngineActionTypes,
          {
            optimizeFloat: u,
            applyEasing: p,
            createBezierEasing: I,
          } = a.IX2EasingUtils,
          { RENDER_GENERAL: y } = i.IX2EngineConstants,
          {
            getItemConfigByKey: E,
            getRenderType: T,
            getStyleProp: g,
          } = a.IX2VanillaUtils,
          m = (e, t) => {
            let n, i, a, r;
            let {
                position: l,
                parameterId: c,
                actionGroups: d,
                destinationKeys: s,
                smoothing: f,
                restingValue: I,
                actionTypeId: y,
                customEasingFn: T,
                skipMotion: g,
                skipToValue: m,
              } = e,
              { parameters: O } = t.payload,
              b = Math.max(1 - f, 0.01),
              v = O[c];
            null == v && ((b = 1), (v = I));
            let _ = u((Math.max(v, 0) || 0) - l),
              A = g ? m : u(l + _ * b),
              R = 100 * A;
            if (A === l && e.current) return e;
            for (let e = 0, { length: t } = d; e < t; e++) {
              let { keyframe: t, actionItems: o } = d[e];
              if ((0 === e && (n = o[0]), R >= t)) {
                n = o[0];
                let l = d[e + 1],
                  c = l && R !== t;
                (i = c ? l.actionItems[0] : null),
                  c && ((a = t / 100), (r = (l.keyframe - t) / 100));
              }
            }
            let S = {};
            if (n && !i)
              for (let e = 0, { length: t } = s; e < t; e++) {
                let t = s[e];
                S[t] = E(y, t, n.config);
              }
            else if (n && i && void 0 !== a && void 0 !== r) {
              let e = (A - a) / r,
                t = p(n.config.easing, e, T);
              for (let e = 0, { length: a } = s; e < a; e++) {
                let a = s[e],
                  o = E(y, a, n.config),
                  r = (E(y, a, i.config) - o) * t + o;
                S[a] = r;
              }
            }
            return (0, o.merge)(e, { position: A, current: S });
          },
          O = (e, t) => {
            let {
                active: n,
                origin: i,
                start: a,
                immediate: r,
                renderType: l,
                verbose: c,
                actionItem: d,
                destination: s,
                destinationKeys: f,
                pluginDuration: I,
                instanceDelay: E,
                customEasingFn: T,
                skipMotion: g,
              } = e,
              m = d.config.easing,
              { duration: O, delay: b } = d.config;
            null != I && (O = I),
              (b = null != E ? E : b),
              l === y ? (O = 0) : (r || g) && (O = b = 0);
            let { now: v } = t.payload;
            if (n && i) {
              let t = v - (a + b);
              if (c) {
                let t = O + b,
                  n = u(Math.min(Math.max(0, (v - a) / t), 1));
                e = (0, o.set)(e, "verboseTimeElapsed", t * n);
              }
              if (t < 0) return e;
              let n = u(Math.min(Math.max(0, t / O), 1)),
                r = p(m, n, T),
                l = {},
                d = null;
              return (
                f.length &&
                  (d = f.reduce((e, t) => {
                    let n = s[t],
                      a = parseFloat(i[t]) || 0,
                      o = parseFloat(n) - a;
                    return (e[t] = o * r + a), e;
                  }, {})),
                (l.current = d),
                (l.position = n),
                1 === n && ((l.active = !1), (l.complete = !0)),
                (0, o.merge)(e, l)
              );
            }
            return e;
          },
          b = (e = Object.freeze({}), t) => {
            switch (t.type) {
              case r:
                return t.payload.ixInstances || Object.freeze({});
              case l:
                return Object.freeze({});
              case c: {
                let {
                    instanceId: n,
                    elementId: i,
                    actionItem: a,
                    eventId: r,
                    eventTarget: l,
                    eventStateKey: c,
                    actionListId: d,
                    groupIndex: s,
                    isCarrier: f,
                    origin: u,
                    destination: p,
                    immediate: y,
                    verbose: E,
                    continuous: m,
                    parameterId: O,
                    actionGroups: b,
                    smoothing: v,
                    restingValue: _,
                    pluginInstance: A,
                    pluginDuration: R,
                    instanceDelay: S,
                    skipMotion: h,
                    skipToValue: L,
                  } = t.payload,
                  { actionTypeId: N } = a,
                  C = T(N),
                  G = g(C, N),
                  P = Object.keys(p).filter(
                    (e) => null != p[e] && "string" != typeof p[e]
                  ),
                  { easing: x } = a.config;
                return (0, o.set)(e, n, {
                  id: n,
                  elementId: i,
                  active: !1,
                  position: 0,
                  start: 0,
                  origin: u,
                  destination: p,
                  destinationKeys: P,
                  immediate: y,
                  verbose: E,
                  current: null,
                  actionItem: a,
                  actionTypeId: N,
                  eventId: r,
                  eventTarget: l,
                  eventStateKey: c,
                  actionListId: d,
                  groupIndex: s,
                  renderType: C,
                  isCarrier: f,
                  styleProp: G,
                  continuous: m,
                  parameterId: O,
                  actionGroups: b,
                  smoothing: v,
                  restingValue: _,
                  pluginInstance: A,
                  pluginDuration: R,
                  instanceDelay: S,
                  skipMotion: h,
                  skipToValue: L,
                  customEasingFn:
                    Array.isArray(x) && 4 === x.length ? I(x) : void 0,
                });
              }
              case d: {
                let { instanceId: n, time: i } = t.payload;
                return (0, o.mergeIn)(e, [n], {
                  active: !0,
                  complete: !1,
                  start: i,
                });
              }
              case s: {
                let { instanceId: n } = t.payload;
                if (!e[n]) return e;
                let i = {},
                  a = Object.keys(e),
                  { length: o } = a;
                for (let t = 0; t < o; t++) {
                  let o = a[t];
                  o !== n && (i[o] = e[o]);
                }
                return i;
              }
              case f: {
                let n = e,
                  i = Object.keys(e),
                  { length: a } = i;
                for (let r = 0; r < a; r++) {
                  let a = i[r],
                    l = e[a],
                    c = l.continuous ? m : O;
                  n = (0, o.set)(n, a, c(l, t));
                }
                return n;
              }
              default:
                return e;
            }
          };
      },
      1540: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixParameters", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let {
            IX2_RAW_DATA_IMPORTED: i,
            IX2_SESSION_STOPPED: a,
            IX2_PARAMETER_CHANGED: o,
          } = n(7087).IX2EngineActionTypes,
          r = (e = {}, t) => {
            switch (t.type) {
              case i:
                return t.payload.ixParameters || {};
              case a:
                return {};
              case o: {
                let { key: n, value: i } = t.payload;
                return (e[n] = i), e;
              }
              default:
                return e;
            }
          };
      },
      7243: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return f;
            },
          });
        let i = n(9516),
          a = n(4609),
          o = n(628),
          r = n(5862),
          l = n(9468),
          c = n(7718),
          d = n(1540),
          { ixElements: s } = l.IX2ElementsReducer,
          f = (0, i.combineReducers)({
            ixData: a.ixData,
            ixRequest: o.ixRequest,
            ixSession: r.ixSession,
            ixElements: s,
            ixInstances: c.ixInstances,
            ixParameters: d.ixParameters,
          });
      },
      628: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixRequest", {
            enumerable: !0,
            get: function () {
              return f;
            },
          });
        let i = n(7087),
          a = n(1185),
          {
            IX2_PREVIEW_REQUESTED: o,
            IX2_PLAYBACK_REQUESTED: r,
            IX2_STOP_REQUESTED: l,
            IX2_CLEAR_REQUESTED: c,
          } = i.IX2EngineActionTypes,
          d = { preview: {}, playback: {}, stop: {}, clear: {} },
          s = Object.create(null, {
            [o]: { value: "preview" },
            [r]: { value: "playback" },
            [l]: { value: "stop" },
            [c]: { value: "clear" },
          }),
          f = (e = d, t) => {
            if (t.type in s) {
              let n = [s[t.type]];
              return (0, a.setIn)(e, [n], { ...t.payload });
            }
            return e;
          };
      },
      5862: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixSession", {
            enumerable: !0,
            get: function () {
              return E;
            },
          });
        let i = n(7087),
          a = n(1185),
          {
            IX2_SESSION_INITIALIZED: o,
            IX2_SESSION_STARTED: r,
            IX2_TEST_FRAME_RENDERED: l,
            IX2_SESSION_STOPPED: c,
            IX2_EVENT_LISTENER_ADDED: d,
            IX2_EVENT_STATE_CHANGED: s,
            IX2_ANIMATION_FRAME_CHANGED: f,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: u,
            IX2_VIEWPORT_WIDTH_CHANGED: p,
            IX2_MEDIA_QUERIES_DEFINED: I,
          } = i.IX2EngineActionTypes,
          y = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1,
          },
          E = (e = y, t) => {
            switch (t.type) {
              case o: {
                let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
                return (0, a.merge)(e, {
                  hasBoundaryNodes: n,
                  reducedMotion: i,
                });
              }
              case r:
                return (0, a.set)(e, "active", !0);
              case l: {
                let {
                  payload: { step: n = 20 },
                } = t;
                return (0, a.set)(e, "tick", e.tick + n);
              }
              case c:
                return y;
              case f: {
                let {
                  payload: { now: n },
                } = t;
                return (0, a.set)(e, "tick", n);
              }
              case d: {
                let n = (0, a.addLast)(e.eventListeners, t.payload);
                return (0, a.set)(e, "eventListeners", n);
              }
              case s: {
                let { stateKey: n, newState: i } = t.payload;
                return (0, a.setIn)(e, ["eventState", n], i);
              }
              case u: {
                let { actionListId: n, isPlaying: i } = t.payload;
                return (0, a.setIn)(e, ["playbackState", n], i);
              }
              case p: {
                let { width: n, mediaQueries: i } = t.payload,
                  o = i.length,
                  r = null;
                for (let e = 0; e < o; e++) {
                  let { key: t, min: a, max: o } = i[e];
                  if (n >= a && n <= o) {
                    r = t;
                    break;
                  }
                }
                return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: r });
              }
              case I:
                return (0, a.set)(e, "hasDefinedMediaQueries", !0);
              default:
                return e;
            }
          };
      },
      7377: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return c;
          },
          createPluginInstance: function () {
            return r;
          },
          getPluginConfig: function () {
            return n;
          },
          getPluginDestination: function () {
            return o;
          },
          getPluginDuration: function () {
            return i;
          },
          getPluginOrigin: function () {
            return a;
          },
          renderPlugin: function () {
            return l;
          },
        });
        let n = (e) => e.value,
          i = (e, t) => {
            if ("auto" !== t.config.duration) return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0
              ? 1e3 * n
              : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
          },
          a = (e) => e || { value: 0 },
          o = (e) => ({ value: e.value }),
          r = (e) => {
            let t = window.Webflow.require("lottie");
            if (!t) return null;
            let n = t.createInstance(e);
            return n.stop(), n.setSubframe(!0), n;
          },
          l = (e, t, n) => {
            if (!e) return;
            let i = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * i);
          },
          c = (e) => {
            let t = window.Webflow.require("lottie");
            t && t.createInstance(e).stop();
          };
      },
      2570: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return u;
          },
          createPluginInstance: function () {
            return s;
          },
          getPluginConfig: function () {
            return r;
          },
          getPluginDestination: function () {
            return d;
          },
          getPluginDuration: function () {
            return l;
          },
          getPluginOrigin: function () {
            return c;
          },
          renderPlugin: function () {
            return f;
          },
        });
        let n = "--wf-rive-fit",
          i = "--wf-rive-alignment",
          a = (e) => document.querySelector(`[data-w-id="${e}"]`),
          o = () => window.Webflow.require("rive"),
          r = (e, t) => e.value.inputs[t],
          l = () => null,
          c = (e, t) => {
            if (e) return e;
            let n = {},
              { inputs: i = {} } = t.config.value;
            for (let e in i) null == i[e] && (n[e] = 0);
            return n;
          },
          d = (e) => e.value.inputs ?? {},
          s = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0) return e;
            let n = t?.config?.target?.pluginElement;
            return n ? a(n) : null;
          },
          f = (e, { PLUGIN_RIVE: t }, a) => {
            let r = o();
            if (!r) return;
            let l = r.getInstance(e),
              c = r.rive.StateMachineInputType,
              { name: d, inputs: s = {} } = a.config.value || {};
            function f(e) {
              if (e.loaded) a();
              else {
                let t = () => {
                  a(), e?.off("load", t);
                };
                e?.on("load", t);
              }
              function a() {
                let a = e.stateMachineInputs(d);
                if (null != a) {
                  if ((!e.isPlaying && e.play(d, !1), n in s || i in s)) {
                    let t = e.layout,
                      a = s[n] ?? t.fit,
                      o = s[i] ?? t.alignment;
                    (a !== t.fit || o !== t.alignment) &&
                      (e.layout = t.copyWith({ fit: a, alignment: o }));
                  }
                  for (let e in s) {
                    if (e === n || e === i) continue;
                    let o = a.find((t) => t.name === e);
                    if (null != o)
                      switch (o.type) {
                        case c.Boolean:
                          if (null != s[e]) {
                            let t = !!s[e];
                            o.value = t;
                          }
                          break;
                        case c.Number: {
                          let n = t[e];
                          null != n && (o.value = n);
                          break;
                        }
                        case c.Trigger:
                          s[e] && o.fire();
                      }
                  }
                }
              }
            }
            l?.rive ? f(l.rive) : r.setLoadHandler(e, f);
          },
          u = (e, t) => null;
      },
      2866: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return u;
          },
          createPluginInstance: function () {
            return s;
          },
          getPluginConfig: function () {
            return o;
          },
          getPluginDestination: function () {
            return d;
          },
          getPluginDuration: function () {
            return r;
          },
          getPluginOrigin: function () {
            return c;
          },
          renderPlugin: function () {
            return f;
          },
        });
        let n = (e) => document.querySelector(`[data-w-id="${e}"]`),
          i = () => window.Webflow.require("spline"),
          a = (e, t) => e.filter((e) => !t.includes(e)),
          o = (e, t) => e.value[t],
          r = () => null,
          l = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          }),
          c = (e, t) => {
            let n = Object.keys(t.config.value);
            if (e) {
              let t = a(n, Object.keys(e));
              return t.length ? t.reduce((e, t) => ((e[t] = l[t]), e), e) : e;
            }
            return n.reduce((e, t) => ((e[t] = l[t]), e), {});
          },
          d = (e) => e.value,
          s = (e, t) => {
            let i = t?.config?.target?.pluginElement;
            return i ? n(i) : null;
          },
          f = (e, t, n) => {
            let a = i();
            if (!a) return;
            let o = a.getInstance(e),
              r = n.config.target.objectId,
              l = (e) => {
                if (!e)
                  throw Error("Invalid spline app passed to renderSpline");
                let n = r && e.findObjectById(r);
                if (!n) return;
                let { PLUGIN_SPLINE: i } = t;
                null != i.positionX && (n.position.x = i.positionX),
                  null != i.positionY && (n.position.y = i.positionY),
                  null != i.positionZ && (n.position.z = i.positionZ),
                  null != i.rotationX && (n.rotation.x = i.rotationX),
                  null != i.rotationY && (n.rotation.y = i.rotationY),
                  null != i.rotationZ && (n.rotation.z = i.rotationZ),
                  null != i.scaleX && (n.scale.x = i.scaleX),
                  null != i.scaleY && (n.scale.y = i.scaleY),
                  null != i.scaleZ && (n.scale.z = i.scaleZ);
              };
            o ? l(o.spline) : a.setLoadHandler(e, l);
          },
          u = () => null;
      },
      1407: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return f;
          },
          createPluginInstance: function () {
            return c;
          },
          getPluginConfig: function () {
            return a;
          },
          getPluginDestination: function () {
            return l;
          },
          getPluginDuration: function () {
            return o;
          },
          getPluginOrigin: function () {
            return r;
          },
          renderPlugin: function () {
            return s;
          },
        });
        let i = n(380),
          a = (e, t) => e.value[t],
          o = () => null,
          r = (e, t) => {
            if (e) return e;
            let n = t.config.value,
              a = t.config.target.objectId,
              o = getComputedStyle(document.documentElement).getPropertyValue(
                a
              );
            return null != n.size
              ? { size: parseInt(o, 10) }
              : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(o) }
              : null != n.red && null != n.green && null != n.blue
              ? (0, i.normalizeColor)(o)
              : void 0;
          },
          l = (e) => e.value,
          c = () => null,
          d = {
            color: {
              match: ({ red: e, green: t, blue: n, alpha: i }) =>
                [e, t, n, i].every((e) => null != e),
              getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
                `rgba(${e}, ${t}, ${n}, ${i})`,
            },
            size: {
              match: ({ size: e }) => null != e,
              getValue: ({ size: e }, t) => {
                if ("-" === t) return e;
                return `${e}${t}`;
              },
            },
          },
          s = (e, t, n) => {
            let {
                target: { objectId: i },
                value: { unit: a },
              } = n.config,
              o = t.PLUGIN_VARIABLE,
              r = Object.values(d).find((e) => e.match(o, a));
            r &&
              document.documentElement.style.setProperty(i, r.getValue(o, a));
          },
          f = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n);
          };
      },
      3690: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "pluginMethodMap", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let i = n(7087),
          a = d(n(7377)),
          o = d(n(2866)),
          r = d(n(2570)),
          l = d(n(1407));
        function c(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (c = function (e) {
            return e ? n : t;
          })(e);
        }
        function d(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(i, o, r)
                : (i[o] = e[o]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
        let s = new Map([
          [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
          [i.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
          [i.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
          [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
        ]);
      },
      8023: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
            return g;
          },
          IX2_ANIMATION_FRAME_CHANGED: function () {
            return u;
          },
          IX2_CLEAR_REQUESTED: function () {
            return d;
          },
          IX2_ELEMENT_STATE_CHANGED: function () {
            return T;
          },
          IX2_EVENT_LISTENER_ADDED: function () {
            return s;
          },
          IX2_EVENT_STATE_CHANGED: function () {
            return f;
          },
          IX2_INSTANCE_ADDED: function () {
            return I;
          },
          IX2_INSTANCE_REMOVED: function () {
            return E;
          },
          IX2_INSTANCE_STARTED: function () {
            return y;
          },
          IX2_MEDIA_QUERIES_DEFINED: function () {
            return O;
          },
          IX2_PARAMETER_CHANGED: function () {
            return p;
          },
          IX2_PLAYBACK_REQUESTED: function () {
            return l;
          },
          IX2_PREVIEW_REQUESTED: function () {
            return r;
          },
          IX2_RAW_DATA_IMPORTED: function () {
            return n;
          },
          IX2_SESSION_INITIALIZED: function () {
            return i;
          },
          IX2_SESSION_STARTED: function () {
            return a;
          },
          IX2_SESSION_STOPPED: function () {
            return o;
          },
          IX2_STOP_REQUESTED: function () {
            return c;
          },
          IX2_TEST_FRAME_RENDERED: function () {
            return b;
          },
          IX2_VIEWPORT_WIDTH_CHANGED: function () {
            return m;
          },
        });
        let n = "IX2_RAW_DATA_IMPORTED",
          i = "IX2_SESSION_INITIALIZED",
          a = "IX2_SESSION_STARTED",
          o = "IX2_SESSION_STOPPED",
          r = "IX2_PREVIEW_REQUESTED",
          l = "IX2_PLAYBACK_REQUESTED",
          c = "IX2_STOP_REQUESTED",
          d = "IX2_CLEAR_REQUESTED",
          s = "IX2_EVENT_LISTENER_ADDED",
          f = "IX2_EVENT_STATE_CHANGED",
          u = "IX2_ANIMATION_FRAME_CHANGED",
          p = "IX2_PARAMETER_CHANGED",
          I = "IX2_INSTANCE_ADDED",
          y = "IX2_INSTANCE_STARTED",
          E = "IX2_INSTANCE_REMOVED",
          T = "IX2_ELEMENT_STATE_CHANGED",
          g = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
          m = "IX2_VIEWPORT_WIDTH_CHANGED",
          O = "IX2_MEDIA_QUERIES_DEFINED",
          b = "IX2_TEST_FRAME_RENDERED";
      },
      2686: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ABSTRACT_NODE: function () {
            return J;
          },
          AUTO: function () {
            return j;
          },
          BACKGROUND: function () {
            return w;
          },
          BACKGROUND_COLOR: function () {
            return M;
          },
          BAR_DELIMITER: function () {
            return Q;
          },
          BORDER_COLOR: function () {
            return V;
          },
          BOUNDARY_SELECTOR: function () {
            return r;
          },
          CHILDREN: function () {
            return Y;
          },
          COLON_DELIMITER: function () {
            return W;
          },
          COLOR: function () {
            return k;
          },
          COMMA_DELIMITER: function () {
            return X;
          },
          CONFIG_UNIT: function () {
            return I;
          },
          CONFIG_VALUE: function () {
            return s;
          },
          CONFIG_X_UNIT: function () {
            return f;
          },
          CONFIG_X_VALUE: function () {
            return l;
          },
          CONFIG_Y_UNIT: function () {
            return u;
          },
          CONFIG_Y_VALUE: function () {
            return c;
          },
          CONFIG_Z_UNIT: function () {
            return p;
          },
          CONFIG_Z_VALUE: function () {
            return d;
          },
          DISPLAY: function () {
            return F;
          },
          FILTER: function () {
            return G;
          },
          FLEX: function () {
            return B;
          },
          FONT_VARIATION_SETTINGS: function () {
            return P;
          },
          HEIGHT: function () {
            return U;
          },
          HTML_ELEMENT: function () {
            return K;
          },
          IMMEDIATE_CHILDREN: function () {
            return z;
          },
          IX2_ID_DELIMITER: function () {
            return n;
          },
          OPACITY: function () {
            return C;
          },
          PARENT: function () {
            return $;
          },
          PLAIN_OBJECT: function () {
            return Z;
          },
          PRESERVE_3D: function () {
            return q;
          },
          RENDER_GENERAL: function () {
            return et;
          },
          RENDER_PLUGIN: function () {
            return ei;
          },
          RENDER_STYLE: function () {
            return en;
          },
          RENDER_TRANSFORM: function () {
            return ee;
          },
          ROTATE_X: function () {
            return A;
          },
          ROTATE_Y: function () {
            return R;
          },
          ROTATE_Z: function () {
            return S;
          },
          SCALE_3D: function () {
            return _;
          },
          SCALE_X: function () {
            return O;
          },
          SCALE_Y: function () {
            return b;
          },
          SCALE_Z: function () {
            return v;
          },
          SIBLINGS: function () {
            return H;
          },
          SKEW: function () {
            return h;
          },
          SKEW_X: function () {
            return L;
          },
          SKEW_Y: function () {
            return N;
          },
          TRANSFORM: function () {
            return y;
          },
          TRANSLATE_3D: function () {
            return m;
          },
          TRANSLATE_X: function () {
            return E;
          },
          TRANSLATE_Y: function () {
            return T;
          },
          TRANSLATE_Z: function () {
            return g;
          },
          WF_PAGE: function () {
            return i;
          },
          WIDTH: function () {
            return x;
          },
          WILL_CHANGE: function () {
            return D;
          },
          W_MOD_IX: function () {
            return o;
          },
          W_MOD_JS: function () {
            return a;
          },
        });
        let n = "|",
          i = "data-wf-page",
          a = "w-mod-js",
          o = "w-mod-ix",
          r = ".w-dyn-item",
          l = "xValue",
          c = "yValue",
          d = "zValue",
          s = "value",
          f = "xUnit",
          u = "yUnit",
          p = "zUnit",
          I = "unit",
          y = "transform",
          E = "translateX",
          T = "translateY",
          g = "translateZ",
          m = "translate3d",
          O = "scaleX",
          b = "scaleY",
          v = "scaleZ",
          _ = "scale3d",
          A = "rotateX",
          R = "rotateY",
          S = "rotateZ",
          h = "skew",
          L = "skewX",
          N = "skewY",
          C = "opacity",
          G = "filter",
          P = "font-variation-settings",
          x = "width",
          U = "height",
          M = "backgroundColor",
          w = "background",
          V = "borderColor",
          k = "color",
          F = "display",
          B = "flex",
          D = "willChange",
          j = "AUTO",
          X = ",",
          W = ":",
          Q = "|",
          Y = "CHILDREN",
          z = "IMMEDIATE_CHILDREN",
          H = "SIBLINGS",
          $ = "PARENT",
          q = "preserve-3d",
          K = "HTML_ELEMENT",
          Z = "PLAIN_OBJECT",
          J = "ABSTRACT_NODE",
          ee = "RENDER_TRANSFORM",
          et = "RENDER_GENERAL",
          en = "RENDER_STYLE",
          ei = "RENDER_PLUGIN";
      },
      262: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ActionAppliesTo: function () {
            return i;
          },
          ActionTypeConsts: function () {
            return n;
          },
        });
        let n = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
          },
          i = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
          };
      },
      7087: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ActionTypeConsts: function () {
            return a.ActionTypeConsts;
          },
          IX2EngineActionTypes: function () {
            return o;
          },
          IX2EngineConstants: function () {
            return r;
          },
          QuickEffectIds: function () {
            return i.QuickEffectIds;
          },
        });
        let i = l(n(1833), t),
          a = l(n(262), t);
        l(n(8704), t), l(n(3213), t);
        let o = d(n(8023)),
          r = d(n(2686));
        function l(e, t) {
          return (
            Object.keys(e).forEach(function (n) {
              "default" !== n &&
                !Object.prototype.hasOwnProperty.call(t, n) &&
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }),
            e
          );
        }
        function c(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (c = function (e) {
            return e ? n : t;
          })(e);
        }
        function d(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(i, o, r)
                : (i[o] = e[o]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
      },
      3213: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ReducedMotionTypes", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let {
            TRANSFORM_MOVE: i,
            TRANSFORM_SCALE: a,
            TRANSFORM_ROTATE: o,
            TRANSFORM_SKEW: r,
            STYLE_SIZE: l,
            STYLE_FILTER: c,
            STYLE_FONT_VARIATION: d,
          } = n(262).ActionTypeConsts,
          s = { [i]: !0, [a]: !0, [o]: !0, [r]: !0, [l]: !0, [c]: !0, [d]: !0 };
      },
      1833: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          EventAppliesTo: function () {
            return i;
          },
          EventBasedOn: function () {
            return a;
          },
          EventContinuousMouseAxes: function () {
            return o;
          },
          EventLimitAffectedElements: function () {
            return r;
          },
          EventTypeConsts: function () {
            return n;
          },
          QuickEffectDirectionConsts: function () {
            return c;
          },
          QuickEffectIds: function () {
            return l;
          },
        });
        let n = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
          },
          i = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
          a = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
          o = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
          r = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
          },
          l = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
          },
          c = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
          };
      },
      8704: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "InteractionTypeConsts", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let n = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
            "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
      },
      380: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "normalizeColor", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32",
        };
        function i(e) {
          let t, i, a;
          let o = 1,
            r = e.replace(/\s/g, "").toLowerCase(),
            l = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
          if (l.startsWith("#")) {
            let e = l.substring(1);
            3 === e.length || 4 === e.length
              ? ((t = parseInt(e[0] + e[0], 16)),
                (i = parseInt(e[1] + e[1], 16)),
                (a = parseInt(e[2] + e[2], 16)),
                4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
              : (6 === e.length || 8 === e.length) &&
                ((t = parseInt(e.substring(0, 2), 16)),
                (i = parseInt(e.substring(2, 4), 16)),
                (a = parseInt(e.substring(4, 6), 16)),
                8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
          } else if (l.startsWith("rgba")) {
            let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (i = parseInt(e[1], 10)),
              (a = parseInt(e[2], 10)),
              (o = parseFloat(e[3]));
          } else if (l.startsWith("rgb")) {
            let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (i = parseInt(e[1], 10)),
              (a = parseInt(e[2], 10));
          } else if (l.startsWith("hsla")) {
            let e, n, r;
            let c = l.match(/hsla\(([^)]+)\)/)[1].split(","),
              d = parseFloat(c[0]),
              s = parseFloat(c[1].replace("%", "")) / 100,
              f = parseFloat(c[2].replace("%", "")) / 100;
            o = parseFloat(c[3]);
            let u = (1 - Math.abs(2 * f - 1)) * s,
              p = u * (1 - Math.abs(((d / 60) % 2) - 1)),
              I = f - u / 2;
            d >= 0 && d < 60
              ? ((e = u), (n = p), (r = 0))
              : d >= 60 && d < 120
              ? ((e = p), (n = u), (r = 0))
              : d >= 120 && d < 180
              ? ((e = 0), (n = u), (r = p))
              : d >= 180 && d < 240
              ? ((e = 0), (n = p), (r = u))
              : d >= 240 && d < 300
              ? ((e = p), (n = 0), (r = u))
              : ((e = u), (n = 0), (r = p)),
              (t = Math.round((e + I) * 255)),
              (i = Math.round((n + I) * 255)),
              (a = Math.round((r + I) * 255));
          } else if (l.startsWith("hsl")) {
            let e, n, o;
            let r = l.match(/hsl\(([^)]+)\)/)[1].split(","),
              c = parseFloat(r[0]),
              d = parseFloat(r[1].replace("%", "")) / 100,
              s = parseFloat(r[2].replace("%", "")) / 100,
              f = (1 - Math.abs(2 * s - 1)) * d,
              u = f * (1 - Math.abs(((c / 60) % 2) - 1)),
              p = s - f / 2;
            c >= 0 && c < 60
              ? ((e = f), (n = u), (o = 0))
              : c >= 60 && c < 120
              ? ((e = u), (n = f), (o = 0))
              : c >= 120 && c < 180
              ? ((e = 0), (n = f), (o = u))
              : c >= 180 && c < 240
              ? ((e = 0), (n = u), (o = f))
              : c >= 240 && c < 300
              ? ((e = u), (n = 0), (o = f))
              : ((e = f), (n = 0), (o = u)),
              (t = Math.round((e + p) * 255)),
              (i = Math.round((n + p) * 255)),
              (a = Math.round((o + p) * 255));
          }
          if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
            throw Error(
              `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
            );
          return { red: t, green: i, blue: a, alpha: o };
        }
      },
      9468: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          IX2BrowserSupport: function () {
            return i;
          },
          IX2EasingUtils: function () {
            return o;
          },
          IX2Easings: function () {
            return a;
          },
          IX2ElementsReducer: function () {
            return r;
          },
          IX2VanillaPlugins: function () {
            return l;
          },
          IX2VanillaUtils: function () {
            return c;
          },
        });
        let i = s(n(2662)),
          a = s(n(8686)),
          o = s(n(3767)),
          r = s(n(5861)),
          l = s(n(1799)),
          c = s(n(4124));
        function d(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (d = function (e) {
            return e ? n : t;
          })(e);
        }
        function s(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = d(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = a ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(i, o, r)
                : (i[o] = e[o]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
      },
      2662: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ELEMENT_MATCHES: function () {
            return r;
          },
          FLEX_PREFIXED: function () {
            return l;
          },
          IS_BROWSER_ENV: function () {
            return a;
          },
          TRANSFORM_PREFIXED: function () {
            return c;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return s;
          },
          withBrowser: function () {
            return o;
          },
        });
        let i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(9777)),
          a = "undefined" != typeof window,
          o = (e, t) => (a ? e() : t),
          r = o(() =>
            (0, i.default)(
              [
                "matches",
                "matchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
                "webkitMatchesSelector",
              ],
              (e) => e in Element.prototype
            )
          ),
          l = o(() => {
            let e = document.createElement("i"),
              t = [
                "flex",
                "-webkit-flex",
                "-ms-flexbox",
                "-moz-box",
                "-webkit-box",
              ];
            try {
              let { length: n } = t;
              for (let i = 0; i < n; i++) {
                let n = t[i];
                if (((e.style.display = n), e.style.display === n)) return n;
              }
              return "";
            } catch (e) {
              return "";
            }
          }, "flex"),
          c = o(() => {
            let e = document.createElement("i");
            if (null == e.style.transform) {
              let t = ["Webkit", "Moz", "ms"],
                { length: n } = t;
              for (let i = 0; i < n; i++) {
                let n = t[i] + "Transform";
                if (void 0 !== e.style[n]) return n;
              }
            }
            return "transform";
          }, "transform"),
          d = c.split("transform")[0],
          s = d ? d + "TransformStyle" : "transformStyle";
      },
      3767: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          applyEasing: function () {
            return c;
          },
          createBezierEasing: function () {
            return l;
          },
          optimizeFloat: function () {
            return r;
          },
        });
        let i = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = o(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var l = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                l && (l.get || l.set)
                  ? Object.defineProperty(i, r, l)
                  : (i[r] = e[r]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(8686)),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(1361));
        function o(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (o = function (e) {
            return e ? n : t;
          })(e);
        }
        function r(e, t = 5, n = 10) {
          let i = Math.pow(n, t),
            a = Number(Math.round(e * i) / i);
          return Math.abs(a) > 1e-4 ? a : 0;
        }
        function l(e) {
          return (0, a.default)(...e);
        }
        function c(e, t, n) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : n
            ? r(t > 0 ? n(t) : t)
            : r(t > 0 && e && i[e] ? i[e](t) : t);
        }
      },
      8686: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          bounce: function () {
            return F;
          },
          bouncePast: function () {
            return B;
          },
          ease: function () {
            return a;
          },
          easeIn: function () {
            return o;
          },
          easeInOut: function () {
            return l;
          },
          easeOut: function () {
            return r;
          },
          inBack: function () {
            return C;
          },
          inCirc: function () {
            return S;
          },
          inCubic: function () {
            return f;
          },
          inElastic: function () {
            return x;
          },
          inExpo: function () {
            return _;
          },
          inOutBack: function () {
            return P;
          },
          inOutCirc: function () {
            return L;
          },
          inOutCubic: function () {
            return p;
          },
          inOutElastic: function () {
            return M;
          },
          inOutExpo: function () {
            return R;
          },
          inOutQuad: function () {
            return s;
          },
          inOutQuart: function () {
            return E;
          },
          inOutQuint: function () {
            return m;
          },
          inOutSine: function () {
            return v;
          },
          inQuad: function () {
            return c;
          },
          inQuart: function () {
            return I;
          },
          inQuint: function () {
            return T;
          },
          inSine: function () {
            return O;
          },
          outBack: function () {
            return G;
          },
          outBounce: function () {
            return N;
          },
          outCirc: function () {
            return h;
          },
          outCubic: function () {
            return u;
          },
          outElastic: function () {
            return U;
          },
          outExpo: function () {
            return A;
          },
          outQuad: function () {
            return d;
          },
          outQuart: function () {
            return y;
          },
          outQuint: function () {
            return g;
          },
          outSine: function () {
            return b;
          },
          swingFrom: function () {
            return V;
          },
          swingFromTo: function () {
            return w;
          },
          swingTo: function () {
            return k;
          },
        });
        let i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(1361)),
          a = (0, i.default)(0.25, 0.1, 0.25, 1),
          o = (0, i.default)(0.42, 0, 1, 1),
          r = (0, i.default)(0, 0, 0.58, 1),
          l = (0, i.default)(0.42, 0, 0.58, 1);
        function c(e) {
          return Math.pow(e, 2);
        }
        function d(e) {
          return -(Math.pow(e - 1, 2) - 1);
        }
        function s(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 2)
            : -0.5 * ((e -= 2) * e - 2);
        }
        function f(e) {
          return Math.pow(e, 3);
        }
        function u(e) {
          return Math.pow(e - 1, 3) + 1;
        }
        function p(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
        }
        function I(e) {
          return Math.pow(e, 4);
        }
        function y(e) {
          return -(Math.pow(e - 1, 4) - 1);
        }
        function E(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 4)
            : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
        }
        function T(e) {
          return Math.pow(e, 5);
        }
        function g(e) {
          return Math.pow(e - 1, 5) + 1;
        }
        function m(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 5)
            : 0.5 * (Math.pow(e - 2, 5) + 2);
        }
        function O(e) {
          return -Math.cos((Math.PI / 2) * e) + 1;
        }
        function b(e) {
          return Math.sin((Math.PI / 2) * e);
        }
        function v(e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        }
        function _(e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
        }
        function A(e) {
          return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
        }
        function R(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        }
        function S(e) {
          return -(Math.sqrt(1 - e * e) - 1);
        }
        function h(e) {
          return Math.sqrt(1 - Math.pow(e - 1, 2));
        }
        function L(e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        }
        function N(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
          if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
          else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function C(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function G(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function P(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function x(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (!n && (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              -(
                i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
        }
        function U(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (!n && (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
        }
        function M(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 2 == (e /= 0.5)
            ? 1
            : (!n && (n = 0.3 * 1.5),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              e < 1)
            ? -0.5 *
              (i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n))
            : i *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n) *
                0.5 +
              1;
        }
        function w(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function V(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function k(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function F(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
          if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
          else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function B(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75);
          if (e < 2.5 / 2.75)
            return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375);
          else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
        }
      },
      1799: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return p;
          },
          createPluginInstance: function () {
            return f;
          },
          getPluginConfig: function () {
            return l;
          },
          getPluginDestination: function () {
            return s;
          },
          getPluginDuration: function () {
            return d;
          },
          getPluginOrigin: function () {
            return c;
          },
          isPluginType: function () {
            return o;
          },
          renderPlugin: function () {
            return u;
          },
        });
        let i = n(2662),
          a = n(3690);
        function o(e) {
          return a.pluginMethodMap.has(e);
        }
        let r = (e) => (t) => {
            if (!i.IS_BROWSER_ENV) return () => null;
            let n = a.pluginMethodMap.get(t);
            if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
            let o = n[e];
            if (!o) throw Error(`IX2 invalid plugin method: ${e}`);
            return o;
          },
          l = r("getPluginConfig"),
          c = r("getPluginOrigin"),
          d = r("getPluginDuration"),
          s = r("getPluginDestination"),
          f = r("createPluginInstance"),
          u = r("renderPlugin"),
          p = r("clearPlugin");
      },
      4124: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cleanupHTMLElement: function () {
            return eX;
          },
          clearAllStyles: function () {
            return eB;
          },
          clearObjectCache: function () {
            return ed;
          },
          getActionListProgress: function () {
            return ez;
          },
          getAffectedElements: function () {
            return eg;
          },
          getComputedStyle: function () {
            return em;
          },
          getDestinationValues: function () {
            return eh;
          },
          getElementId: function () {
            return ep;
          },
          getInstanceId: function () {
            return ef;
          },
          getInstanceOrigin: function () {
            return e_;
          },
          getItemConfigByKey: function () {
            return eS;
          },
          getMaxDurationItemIndex: function () {
            return eY;
          },
          getNamespacedParameterId: function () {
            return eq;
          },
          getRenderType: function () {
            return eL;
          },
          getStyleProp: function () {
            return eN;
          },
          mediaQueriesEqual: function () {
            return eZ;
          },
          observeStore: function () {
            return eE;
          },
          reduceListToGroup: function () {
            return eH;
          },
          reifyState: function () {
            return eI;
          },
          renderHTMLElement: function () {
            return eC;
          },
          shallowEqual: function () {
            return c.default;
          },
          shouldAllowMediaQuery: function () {
            return eK;
          },
          shouldNamespaceEventParameter: function () {
            return e$;
          },
          stringifyTarget: function () {
            return eJ;
          },
        });
        let i = p(n(4075)),
          a = p(n(1455)),
          o = p(n(5720)),
          r = n(1185),
          l = n(7087),
          c = p(n(7164)),
          d = n(3767),
          s = n(380),
          f = n(1799),
          u = n(2662);
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            BACKGROUND: I,
            TRANSFORM: y,
            TRANSLATE_3D: E,
            SCALE_3D: T,
            ROTATE_X: g,
            ROTATE_Y: m,
            ROTATE_Z: O,
            SKEW: b,
            PRESERVE_3D: v,
            FLEX: _,
            OPACITY: A,
            FILTER: R,
            FONT_VARIATION_SETTINGS: S,
            WIDTH: h,
            HEIGHT: L,
            BACKGROUND_COLOR: N,
            BORDER_COLOR: C,
            COLOR: G,
            CHILDREN: P,
            IMMEDIATE_CHILDREN: x,
            SIBLINGS: U,
            PARENT: M,
            DISPLAY: w,
            WILL_CHANGE: V,
            AUTO: k,
            COMMA_DELIMITER: F,
            COLON_DELIMITER: B,
            BAR_DELIMITER: D,
            RENDER_TRANSFORM: j,
            RENDER_GENERAL: X,
            RENDER_STYLE: W,
            RENDER_PLUGIN: Q,
          } = l.IX2EngineConstants,
          {
            TRANSFORM_MOVE: Y,
            TRANSFORM_SCALE: z,
            TRANSFORM_ROTATE: H,
            TRANSFORM_SKEW: $,
            STYLE_OPACITY: q,
            STYLE_FILTER: K,
            STYLE_FONT_VARIATION: Z,
            STYLE_SIZE: J,
            STYLE_BACKGROUND_COLOR: ee,
            STYLE_BORDER: et,
            STYLE_TEXT_COLOR: en,
            GENERAL_DISPLAY: ei,
            OBJECT_VALUE: ea,
          } = l.ActionTypeConsts,
          eo = (e) => e.trim(),
          er = Object.freeze({ [ee]: N, [et]: C, [en]: G }),
          el = Object.freeze({
            [u.TRANSFORM_PREFIXED]: y,
            [N]: I,
            [A]: A,
            [R]: R,
            [h]: h,
            [L]: L,
            [S]: S,
          }),
          ec = new Map();
        function ed() {
          ec.clear();
        }
        let es = 1;
        function ef() {
          return "i" + es++;
        }
        let eu = 1;
        function ep(e, t) {
          for (let n in e) {
            let i = e[n];
            if (i && i.ref === t) return i.id;
          }
          return "e" + eu++;
        }
        function eI({ events: e, actionLists: t, site: n } = {}) {
          let i = (0, a.default)(
              e,
              (e, t) => {
                let { eventTypeId: n } = t;
                return !e[n] && (e[n] = {}), (e[n][t.id] = t), e;
              },
              {}
            ),
            o = n && n.mediaQueries,
            r = [];
          return (
            o
              ? (r = o.map((e) => e.key))
              : ((o = []),
                console.warn("IX2 missing mediaQueries in site data")),
            {
              ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: i,
                mediaQueries: o,
                mediaQueryKeys: r,
              },
            }
          );
        }
        let ey = (e, t) => e === t;
        function eE({ store: e, select: t, onChange: n, comparator: i = ey }) {
          let { getState: a, subscribe: o } = e,
            r = o(function () {
              let o = t(a());
              if (null == o) {
                r();
                return;
              }
              !i(o, l) && n((l = o), e);
            }),
            l = t(a());
          return r;
        }
        function eT(e) {
          let t = typeof e;
          if ("string" === t) return { id: e };
          if (null != e && "object" === t) {
            let {
              id: t,
              objectId: n,
              selector: i,
              selectorGuids: a,
              appliesTo: o,
              useEventTarget: r,
            } = e;
            return {
              id: t,
              objectId: n,
              selector: i,
              selectorGuids: a,
              appliesTo: o,
              useEventTarget: r,
            };
          }
          return {};
        }
        function eg({
          config: e,
          event: t,
          eventTarget: n,
          elementRoot: i,
          elementApi: a,
        }) {
          let o, r, c;
          if (!a) throw Error("IX2 missing elementApi");
          let { targets: d } = e;
          if (Array.isArray(d) && d.length > 0)
            return d.reduce(
              (e, o) =>
                e.concat(
                  eg({
                    config: { target: o },
                    event: t,
                    eventTarget: n,
                    elementRoot: i,
                    elementApi: a,
                  })
                ),
              []
            );
          let {
              getValidDocument: s,
              getQuerySelector: f,
              queryDocument: p,
              getChildElements: I,
              getSiblingElements: y,
              matchSelector: E,
              elementContains: T,
              isSiblingNode: g,
            } = a,
            { target: m } = e;
          if (!m) return [];
          let {
            id: O,
            objectId: b,
            selector: v,
            selectorGuids: _,
            appliesTo: A,
            useEventTarget: R,
          } = eT(m);
          if (b) return [ec.has(b) ? ec.get(b) : ec.set(b, {}).get(b)];
          if (A === l.EventAppliesTo.PAGE) {
            let e = s(O);
            return e ? [e] : [];
          }
          let S = (t?.action?.config?.affectedElements ?? {})[O || v] || {},
            h = !!(S.id || S.selector),
            L = t && f(eT(t.target));
          if (
            (h
              ? ((o = S.limitAffectedElements), (r = L), (c = f(S)))
              : (r = c = f({ id: O, selector: v, selectorGuids: _ })),
            t && R)
          ) {
            let e = n && (c || !0 === R) ? [n] : p(L);
            if (c) {
              if (R === M) return p(c).filter((t) => e.some((e) => T(t, e)));
              if (R === P) return p(c).filter((t) => e.some((e) => T(e, t)));
              if (R === U) return p(c).filter((t) => e.some((e) => g(e, t)));
            }
            return e;
          }
          if (null == r || null == c) return [];
          if (u.IS_BROWSER_ENV && i) return p(c).filter((e) => i.contains(e));
          if (o === P) return p(r, c);
          if (o === x) return I(p(r)).filter(E(c));
          if (o === U) return y(p(r)).filter(E(c));
          else return p(c);
        }
        function em({ element: e, actionItem: t }) {
          if (!u.IS_BROWSER_ENV) return {};
          let { actionTypeId: n } = t;
          switch (n) {
            case J:
            case ee:
            case et:
            case en:
            case ei:
              return window.getComputedStyle(e);
            default:
              return {};
          }
        }
        let eO = /px/,
          eb = (e, t) =>
            t.reduce(
              (e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e),
              e || {}
            ),
          ev = (e, t) =>
            t.reduce(
              (e, t) => (
                null == e[t.type] &&
                  (e[t.type] = ex[t.type] || t.defaultValue || 0),
                e
              ),
              e || {}
            );
        function e_(e, t = {}, n = {}, a, o) {
          let { getStyle: r } = o,
            { actionTypeId: l } = a;
          if ((0, f.isPluginType)(l)) return (0, f.getPluginOrigin)(l)(t[l], a);
          switch (a.actionTypeId) {
            case Y:
            case z:
            case H:
            case $:
              return t[a.actionTypeId] || eG[a.actionTypeId];
            case K:
              return eb(t[a.actionTypeId], a.config.filters);
            case Z:
              return ev(t[a.actionTypeId], a.config.fontVariations);
            case q:
              return { value: (0, i.default)(parseFloat(r(e, A)), 1) };
            case J: {
              let t, o;
              let l = r(e, h),
                c = r(e, L);
              return (
                (t =
                  a.config.widthUnit === k
                    ? eO.test(l)
                      ? parseFloat(l)
                      : parseFloat(n.width)
                    : (0, i.default)(parseFloat(l), parseFloat(n.width))),
                {
                  widthValue: t,
                  heightValue: (o =
                    a.config.heightUnit === k
                      ? eO.test(c)
                        ? parseFloat(c)
                        : parseFloat(n.height)
                      : (0, i.default)(parseFloat(c), parseFloat(n.height))),
                }
              );
            }
            case ee:
            case et:
            case en:
              return (function ({
                element: e,
                actionTypeId: t,
                computedStyle: n,
                getStyle: a,
              }) {
                let o = er[t],
                  r = a(e, o),
                  l = (function (e, t) {
                    let n = e.exec(t);
                    return n ? n[1] : "";
                  })(eV, ew.test(r) ? r : n[o]).split(F);
                return {
                  rValue: (0, i.default)(parseInt(l[0], 10), 255),
                  gValue: (0, i.default)(parseInt(l[1], 10), 255),
                  bValue: (0, i.default)(parseInt(l[2], 10), 255),
                  aValue: (0, i.default)(parseFloat(l[3]), 1),
                };
              })({
                element: e,
                actionTypeId: a.actionTypeId,
                computedStyle: n,
                getStyle: r,
              });
            case ei:
              return { value: (0, i.default)(r(e, w), n.display) };
            case ea:
              return t[a.actionTypeId] || { value: 0 };
            default:
              return;
          }
        }
        let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eS = (e, t, n) => {
            if ((0, f.isPluginType)(e)) return (0, f.getPluginConfig)(e)(n, t);
            switch (e) {
              case K: {
                let e = (0, o.default)(n.filters, ({ type: e }) => e === t);
                return e ? e.value : 0;
              }
              case Z: {
                let e = (0, o.default)(
                  n.fontVariations,
                  ({ type: e }) => e === t
                );
                return e ? e.value : 0;
              }
              default:
                return n[t];
            }
          };
        function eh({ element: e, actionItem: t, elementApi: n }) {
          if ((0, f.isPluginType)(t.actionTypeId))
            return (0, f.getPluginDestination)(t.actionTypeId)(t.config);
          switch (t.actionTypeId) {
            case Y:
            case z:
            case H:
            case $: {
              let { xValue: e, yValue: n, zValue: i } = t.config;
              return { xValue: e, yValue: n, zValue: i };
            }
            case J: {
              let { getStyle: i, setStyle: a, getProperty: o } = n,
                { widthUnit: r, heightUnit: l } = t.config,
                { widthValue: c, heightValue: d } = t.config;
              if (!u.IS_BROWSER_ENV) return { widthValue: c, heightValue: d };
              if (r === k) {
                let t = i(e, h);
                a(e, h, ""), (c = o(e, "offsetWidth")), a(e, h, t);
              }
              if (l === k) {
                let t = i(e, L);
                a(e, L, ""), (d = o(e, "offsetHeight")), a(e, L, t);
              }
              return { widthValue: c, heightValue: d };
            }
            case ee:
            case et:
            case en: {
              let {
                rValue: i,
                gValue: a,
                bValue: o,
                aValue: r,
                globalSwatchId: l,
              } = t.config;
              if (l && l.startsWith("--")) {
                let { getStyle: t } = n,
                  i = t(e, l),
                  a = (0, s.normalizeColor)(i);
                return {
                  rValue: a.red,
                  gValue: a.green,
                  bValue: a.blue,
                  aValue: a.alpha,
                };
              }
              return { rValue: i, gValue: a, bValue: o, aValue: r };
            }
            case K:
              return t.config.filters.reduce(eA, {});
            case Z:
              return t.config.fontVariations.reduce(eR, {});
            default: {
              let { value: e } = t.config;
              return { value: e };
            }
          }
        }
        function eL(e) {
          return /^TRANSFORM_/.test(e)
            ? j
            : /^STYLE_/.test(e)
            ? W
            : /^GENERAL_/.test(e)
            ? X
            : /^PLUGIN_/.test(e)
            ? Q
            : void 0;
        }
        function eN(e, t) {
          return e === W ? t.replace("STYLE_", "").toLowerCase() : null;
        }
        function eC(e, t, n, i, o, r, l, c, d) {
          switch (c) {
            case j:
              return (function (e, t, n, i, a) {
                let o = eM
                    .map((e) => {
                      let n = eG[e],
                        {
                          xValue: i = n.xValue,
                          yValue: a = n.yValue,
                          zValue: o = n.zValue,
                          xUnit: r = "",
                          yUnit: l = "",
                          zUnit: c = "",
                        } = t[e] || {};
                      switch (e) {
                        case Y:
                          return `${E}(${i}${r}, ${a}${l}, ${o}${c})`;
                        case z:
                          return `${T}(${i}${r}, ${a}${l}, ${o}${c})`;
                        case H:
                          return `${g}(${i}${r}) ${m}(${a}${l}) ${O}(${o}${c})`;
                        case $:
                          return `${b}(${i}${r}, ${a}${l})`;
                        default:
                          return "";
                      }
                    })
                    .join(" "),
                  { setStyle: r } = a;
                ek(e, u.TRANSFORM_PREFIXED, a),
                  r(e, u.TRANSFORM_PREFIXED, o),
                  (function (
                    { actionTypeId: e },
                    { xValue: t, yValue: n, zValue: i }
                  ) {
                    return (
                      (e === Y && void 0 !== i) ||
                      (e === z && void 0 !== i) ||
                      (e === H && (void 0 !== t || void 0 !== n))
                    );
                  })(i, n) && r(e, u.TRANSFORM_STYLE_PREFIXED, v);
              })(e, t, n, o, l);
            case W:
              return (function (e, t, n, i, o, r) {
                let { setStyle: l } = r;
                switch (i.actionTypeId) {
                  case J: {
                    let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                      { widthValue: o, heightValue: c } = n;
                    void 0 !== o &&
                      (t === k && (t = "px"), ek(e, h, r), l(e, h, o + t)),
                      void 0 !== c &&
                        (a === k && (a = "px"), ek(e, L, r), l(e, L, c + a));
                    break;
                  }
                  case K:
                    !(function (e, t, n, i) {
                      let o = (0, a.default)(
                          t,
                          (e, t, i) => `${e} ${i}(${t}${eU(i, n)})`,
                          ""
                        ),
                        { setStyle: r } = i;
                      ek(e, R, i), r(e, R, o);
                    })(e, n, i.config, r);
                    break;
                  case Z:
                    !(function (e, t, n, i) {
                      let o = (0, a.default)(
                          t,
                          (e, t, n) => (e.push(`"${n}" ${t}`), e),
                          []
                        ).join(", "),
                        { setStyle: r } = i;
                      ek(e, S, i), r(e, S, o);
                    })(e, n, i.config, r);
                    break;
                  case ee:
                  case et:
                  case en: {
                    let t = er[i.actionTypeId],
                      a = Math.round(n.rValue),
                      o = Math.round(n.gValue),
                      c = Math.round(n.bValue),
                      d = n.aValue;
                    ek(e, t, r),
                      l(
                        e,
                        t,
                        d >= 1
                          ? `rgb(${a},${o},${c})`
                          : `rgba(${a},${o},${c},${d})`
                      );
                    break;
                  }
                  default: {
                    let { unit: t = "" } = i.config;
                    ek(e, o, r), l(e, o, n.value + t);
                  }
                }
              })(e, t, n, o, r, l);
            case X:
              return (function (e, t, n) {
                let { setStyle: i } = n;
                if (t.actionTypeId === ei) {
                  let { value: n } = t.config;
                  i(e, w, n === _ && u.IS_BROWSER_ENV ? u.FLEX_PREFIXED : n);
                  return;
                }
              })(e, o, l);
            case Q: {
              let { actionTypeId: e } = o;
              if ((0, f.isPluginType)(e))
                return (0, f.renderPlugin)(e)(d, t, o);
            }
          }
        }
        let eG = {
            [Y]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [z]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
            [H]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [$]: Object.freeze({ xValue: 0, yValue: 0 }),
          },
          eP = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100,
          }),
          ex = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
          eU = (e, t) => {
            let n = (0, o.default)(t.filters, ({ type: t }) => t === e);
            if (n && n.unit) return n.unit;
            switch (e) {
              case "blur":
                return "px";
              case "hue-rotate":
                return "deg";
              default:
                return "%";
            }
          },
          eM = Object.keys(eG),
          ew = /^rgb/,
          eV = RegExp("rgba?\\(([^)]+)\\)");
        function ek(e, t, n) {
          if (!u.IS_BROWSER_ENV) return;
          let i = el[t];
          if (!i) return;
          let { getStyle: a, setStyle: o } = n,
            r = a(e, V);
          if (!r) {
            o(e, V, i);
            return;
          }
          let l = r.split(F).map(eo);
          -1 === l.indexOf(i) && o(e, V, l.concat(i).join(F));
        }
        function eF(e, t, n) {
          if (!u.IS_BROWSER_ENV) return;
          let i = el[t];
          if (!i) return;
          let { getStyle: a, setStyle: o } = n,
            r = a(e, V);
          if (!!r && -1 !== r.indexOf(i))
            o(
              e,
              V,
              r
                .split(F)
                .map(eo)
                .filter((e) => e !== i)
                .join(F)
            );
        }
        function eB({ store: e, elementApi: t }) {
          let { ixData: n } = e.getState(),
            { events: i = {}, actionLists: a = {} } = n;
          Object.keys(i).forEach((e) => {
            let n = i[e],
              { config: o } = n.action,
              { actionListId: r } = o,
              l = a[r];
            l && eD({ actionList: l, event: n, elementApi: t });
          }),
            Object.keys(a).forEach((e) => {
              eD({ actionList: a[e], elementApi: t });
            });
        }
        function eD({ actionList: e = {}, event: t, elementApi: n }) {
          let { actionItemGroups: i, continuousParameterGroups: a } = e;
          i &&
            i.forEach((e) => {
              ej({ actionGroup: e, event: t, elementApi: n });
            }),
            a &&
              a.forEach((e) => {
                let { continuousActionGroups: i } = e;
                i.forEach((e) => {
                  ej({ actionGroup: e, event: t, elementApi: n });
                });
              });
        }
        function ej({ actionGroup: e, event: t, elementApi: n }) {
          let { actionItems: i } = e;
          i.forEach((e) => {
            let i;
            let { actionTypeId: a, config: o } = e;
            (i = (0, f.isPluginType)(a)
              ? (t) => (0, f.clearPlugin)(a)(t, e)
              : eW({ effect: eQ, actionTypeId: a, elementApi: n })),
              eg({ config: o, event: t, elementApi: n }).forEach(i);
          });
        }
        function eX(e, t, n) {
          let { setStyle: i, getStyle: a } = n,
            { actionTypeId: o } = t;
          if (o === J) {
            let { config: n } = t;
            n.widthUnit === k && i(e, h, ""), n.heightUnit === k && i(e, L, "");
          }
          a(e, V) && eW({ effect: eF, actionTypeId: o, elementApi: n })(e);
        }
        let eW =
          ({ effect: e, actionTypeId: t, elementApi: n }) =>
          (i) => {
            switch (t) {
              case Y:
              case z:
              case H:
              case $:
                e(i, u.TRANSFORM_PREFIXED, n);
                break;
              case K:
                e(i, R, n);
                break;
              case Z:
                e(i, S, n);
                break;
              case q:
                e(i, A, n);
                break;
              case J:
                e(i, h, n), e(i, L, n);
                break;
              case ee:
              case et:
              case en:
                e(i, er[t], n);
                break;
              case ei:
                e(i, w, n);
            }
          };
        function eQ(e, t, n) {
          let { setStyle: i } = n;
          eF(e, t, n),
            i(e, t, ""),
            t === u.TRANSFORM_PREFIXED && i(e, u.TRANSFORM_STYLE_PREFIXED, "");
        }
        function eY(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e, i) => {
              let { config: a } = e,
                o = a.delay + a.duration;
              o >= t && ((t = o), (n = i));
            }),
            n
          );
        }
        function ez(e, t) {
          let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
            { actionItem: a, verboseTimeElapsed: o = 0 } = t,
            r = 0,
            l = 0;
          return (
            n.forEach((e, t) => {
              if (i && 0 === t) return;
              let { actionItems: n } = e,
                c = n[eY(n)],
                { config: d, actionTypeId: s } = c;
              a.id === c.id && (l = r + o);
              let f = eL(s) === X ? 0 : d.duration;
              r += d.delay + f;
            }),
            r > 0 ? (0, d.optimizeFloat)(l / r) : 0
          );
        }
        function eH({ actionList: e, actionItemId: t, rawData: n }) {
          let { actionItemGroups: i, continuousParameterGroups: a } = e,
            o = [],
            l = (e) => (
              o.push((0, r.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
              e.id === t
            );
          return (
            i && i.some(({ actionItems: e }) => e.some(l)),
            a &&
              a.some((e) => {
                let { continuousActionGroups: t } = e;
                return t.some(({ actionItems: e }) => e.some(l));
              }),
            (0, r.setIn)(n, ["actionLists"], {
              [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
            })
          );
        }
        function e$(e, { basedOn: t }) {
          return (
            (e === l.EventTypeConsts.SCROLLING_IN_VIEW &&
              (t === l.EventBasedOn.ELEMENT || null == t)) ||
            (e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT)
          );
        }
        function eq(e, t) {
          return e + B + t;
        }
        function eK(e, t) {
          return null == t || -1 !== e.indexOf(t);
        }
        function eZ(e, t) {
          return (0, c.default)(e && e.sort(), t && t.sort());
        }
        function eJ(e) {
          if ("string" == typeof e) return e;
          if (e.pluginElement && e.objectId)
            return e.pluginElement + D + e.objectId;
          if (e.objectId) return e.objectId;
          let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
          return t + D + n + D + i;
        }
      },
      7164: function (e, t) {
        "use strict";
        function n(e, t) {
          return e === t
            ? 0 !== e || 0 !== t || 1 / e == 1 / t
            : e != e && t != t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let i = function (e, t) {
          if (n(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          let i = Object.keys(e),
            a = Object.keys(t);
          if (i.length !== a.length) return !1;
          for (let a = 0; a < i.length; a++)
            if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
          return !0;
        };
      },
      5861: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          createElementState: function () {
            return b;
          },
          ixElements: function () {
            return O;
          },
          mergeActionState: function () {
            return v;
          },
        });
        let i = n(1185),
          a = n(7087),
          {
            HTML_ELEMENT: o,
            PLAIN_OBJECT: r,
            ABSTRACT_NODE: l,
            CONFIG_X_VALUE: c,
            CONFIG_Y_VALUE: d,
            CONFIG_Z_VALUE: s,
            CONFIG_VALUE: f,
            CONFIG_X_UNIT: u,
            CONFIG_Y_UNIT: p,
            CONFIG_Z_UNIT: I,
            CONFIG_UNIT: y,
          } = a.IX2EngineConstants,
          {
            IX2_SESSION_STOPPED: E,
            IX2_INSTANCE_ADDED: T,
            IX2_ELEMENT_STATE_CHANGED: g,
          } = a.IX2EngineActionTypes,
          m = {},
          O = (e = m, t = {}) => {
            switch (t.type) {
              case E:
                return m;
              case T: {
                let {
                    elementId: n,
                    element: a,
                    origin: o,
                    actionItem: r,
                    refType: l,
                  } = t.payload,
                  { actionTypeId: c } = r,
                  d = e;
                return (
                  (0, i.getIn)(d, [n, a]) !== a && (d = b(d, a, l, n, r)),
                  v(d, n, c, o, r)
                );
              }
              case g: {
                let {
                  elementId: n,
                  actionTypeId: i,
                  current: a,
                  actionItem: o,
                } = t.payload;
                return v(e, n, i, a, o);
              }
              default:
                return e;
            }
          };
        function b(e, t, n, a, o) {
          let l =
            n === r ? (0, i.getIn)(o, ["config", "target", "objectId"]) : null;
          return (0, i.mergeIn)(e, [a], {
            id: a,
            ref: t,
            refId: l,
            refType: n,
          });
        }
        function v(e, t, n, a, o) {
          let r = (function (e) {
            let { config: t } = e;
            return _.reduce((e, n) => {
              let i = n[0],
                a = n[1],
                o = t[i],
                r = t[a];
              return null != o && null != r && (e[a] = r), e;
            }, {});
          })(o);
          return (0, i.mergeIn)(e, [t, "refState", n], a, r);
        }
        let _ = [
          [c, u],
          [d, p],
          [s, I],
          [f, y],
        ];
      },
      9705: function () {
        Webflow.require("ix2").init({
          events: {
            e: {
              id: "e",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|c50d35a4-afc5-52b4-4df2-051165d5d057",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|c50d35a4-afc5-52b4-4df2-051165d5d057",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x173f351bd4f,
            },
            "e-4": {
              id: "e-4",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-3",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-5",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".link",
                originalId:
                  "67f13ff880e9ecbd46362f91|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".link",
                  originalId:
                    "67f13ff880e9ecbd46362f91|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x173fc7581de,
            },
            "e-5": {
              id: "e-5",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-4",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".link",
                originalId:
                  "67f13ff880e9ecbd46362f91|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".link",
                  originalId:
                    "67f13ff880e9ecbd46362f91|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x173fc7581df,
            },
            "e-6": {
              id: "e-6",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-7",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x173fd152dab,
            },
            "e-7": {
              id: "e-7",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-6",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x173fd152dab,
            },
            "e-8": {
              id: "e-8",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-9",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x173fd269ab7,
            },
            "e-9": {
              id: "e-9",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-8",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x173fd269ab8,
            },
            "e-10": {
              id: "e-10",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-9",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-11",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".project-item",
                originalId:
                  "67f13ff880e9ecbd46362f91|bc835b08-adcf-9322-7277-95514d102f86",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item",
                  originalId:
                    "67f13ff880e9ecbd46362f91|bc835b08-adcf-9322-7277-95514d102f86",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x173fd79bc4d,
            },
            "e-11": {
              id: "e-11",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-10",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-10",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".project-item",
                originalId:
                  "67f13ff880e9ecbd46362f91|bc835b08-adcf-9322-7277-95514d102f86",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item",
                  originalId:
                    "67f13ff880e9ecbd46362f91|bc835b08-adcf-9322-7277-95514d102f86",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x173fd79bc4e,
            },
            "e-14": {
              id: "e-14",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-3",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-15",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav-link",
                originalId:
                  "67f13ff880e9ecbd46362f91|bed729f5-ef26-ecb5-ce96-7096039fcd12",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav-link",
                  originalId:
                    "67f13ff880e9ecbd46362f91|bed729f5-ef26-ecb5-ce96-7096039fcd12",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17400c35145,
            },
            "e-15": {
              id: "e-15",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-14",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".nav-link",
                originalId:
                  "67f13ff880e9ecbd46362f91|bed729f5-ef26-ecb5-ce96-7096039fcd12",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".nav-link",
                  originalId:
                    "67f13ff880e9ecbd46362f91|bed729f5-ef26-ecb5-ce96-7096039fcd12",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17400c35146,
            },
            "e-21": {
              id: "e-21",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-22",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f94",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1741ff711f0,
            },
            "e-22": {
              id: "e-22",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-21",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f94",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1741ff711f0,
            },
            "e-23": {
              id: "e-23",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-24",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f94",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1741ff711f0,
            },
            "e-24": {
              id: "e-24",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-23",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f94",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1741ff711f0,
            },
            "e-27": {
              id: "e-27",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f94",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x1741ff711f0,
            },
            "e-28": {
              id: "e-28",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-16",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-29",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".project-item-style-2",
                originalId:
                  "67f13ff880e9ecbd46362f94|bc835b08-adcf-9322-7277-95514d102f86",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item-style-2",
                  originalId:
                    "67f13ff880e9ecbd46362f94|bc835b08-adcf-9322-7277-95514d102f86",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17420ebf2d6,
            },
            "e-29": {
              id: "e-29",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-28",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".project-item-style-2",
                originalId:
                  "67f13ff880e9ecbd46362f94|bc835b08-adcf-9322-7277-95514d102f86",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item-style-2",
                  originalId:
                    "67f13ff880e9ecbd46362f94|bc835b08-adcf-9322-7277-95514d102f86",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17420ebf2d7,
            },
            "e-32": {
              id: "e-32",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-33",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f95",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1742b5dec94,
            },
            "e-33": {
              id: "e-33",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-32",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f95",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1742b5dec94,
            },
            "e-34": {
              id: "e-34",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-35",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f95",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1742b5dec94,
            },
            "e-35": {
              id: "e-35",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-34",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f95",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1742b5dec94,
            },
            "e-37": {
              id: "e-37",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f95",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x1742b5dec94,
            },
            "e-42": {
              id: "e-42",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-43",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f95|31c49487-4e57-7e5e-712b-c700c5df09b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95|31c49487-4e57-7e5e-712b-c700c5df09b6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1742b858035,
            },
            "e-43": {
              id: "e-43",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-21",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-42",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f95|31c49487-4e57-7e5e-712b-c700c5df09b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95|31c49487-4e57-7e5e-712b-c700c5df09b6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1742b858037,
            },
            "e-44": {
              id: "e-44",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-22",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".skill-panel",
                originalId:
                  "67f13ff880e9ecbd46362f95|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".skill-panel",
                  originalId:
                    "67f13ff880e9ecbd46362f95|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-22-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1743026249b,
            },
            "e-48": {
              id: "e-48",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-49",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".instagram-content",
                originalId:
                  "67f13ff880e9ecbd46362f95|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".instagram-content",
                  originalId:
                    "67f13ff880e9ecbd46362f95|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1743587058c,
            },
            "e-49": {
              id: "e-49",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-48",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".instagram-content",
                originalId:
                  "67f13ff880e9ecbd46362f95|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".instagram-content",
                  originalId:
                    "67f13ff880e9ecbd46362f95|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1743587058e,
            },
            "e-52": {
              id: "e-52",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-53",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444c1dc95,
            },
            "e-53": {
              id: "e-53",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-52",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444c1dc98,
            },
            "e-56": {
              id: "e-56",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f96",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x17444e274a6,
            },
            "e-57": {
              id: "e-57",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-58",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f98",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444e61645,
            },
            "e-58": {
              id: "e-58",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-57",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f98",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444e6166d,
            },
            "e-59": {
              id: "e-59",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-60",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f98",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444e6647e,
            },
            "e-60": {
              id: "e-60",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-59",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f98",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444e664a5,
            },
            "e-61": {
              id: "e-61",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-62",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444e9c4ba,
            },
            "e-62": {
              id: "e-62",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-61",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444e9c4e1,
            },
            "e-63": {
              id: "e-63",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-64",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444ea0cee,
            },
            "e-64": {
              id: "e-64",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-63",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17444ea0d16,
            },
            "e-71": {
              id: "e-71",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-72",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1744533d5f3,
            },
            "e-72": {
              id: "e-72",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-71",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1744533d5f6,
            },
            "e-75": {
              id: "e-75",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-76",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "60586ee6b54d926ec0aebe8e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "60586ee6b54d926ec0aebe8e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174492c6e11,
            },
            "e-76": {
              id: "e-76",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-75",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "60586ee6b54d926ec0aebe8e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "60586ee6b54d926ec0aebe8e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174492c6e15,
            },
            "e-78": {
              id: "e-78",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-11",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "60586ee6b54d926ec0aebe8e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "60586ee6b54d926ec0aebe8e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-11-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-11-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x174492cca02,
            },
            "e-79": {
              id: "e-79",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-80",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "60586ee6b54d926ec0aebe8e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "60586ee6b54d926ec0aebe8e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174492d3bb3,
            },
            "e-80": {
              id: "e-80",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-79",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "60586ee6b54d926ec0aebe8e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "60586ee6b54d926ec0aebe8e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174492d3bb6,
            },
            "e-81": {
              id: "e-81",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-82",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17449f22b3e,
            },
            "e-82": {
              id: "e-82",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-81",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17449f22b3e,
            },
            "e-83": {
              id: "e-83",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-84",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17449f22b3e,
            },
            "e-84": {
              id: "e-84",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-83",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17449f22b3e,
            },
            "e-85": {
              id: "e-85",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x17449f22b3e,
            },
            "e-86": {
              id: "e-86",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x17449f22b3e,
            },
            "e-89": {
              id: "e-89",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-567",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99|31c49487-4e57-7e5e-712b-c700c5df09b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99|31c49487-4e57-7e5e-712b-c700c5df09b6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17449f22b3e,
            },
            "e-90": {
              id: "e-90",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-21",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-89",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99|31c49487-4e57-7e5e-712b-c700c5df09b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99|31c49487-4e57-7e5e-712b-c700c5df09b6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17449f22b3e,
            },
            "e-96": {
              id: "e-96",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-33",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-97",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".post-item",
                originalId:
                  "67f13ff880e9ecbd46362f99|26d29e72-2966-c052-f3fb-cf221fb4942f",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".post-item",
                  originalId:
                    "67f13ff880e9ecbd46362f99|26d29e72-2966-c052-f3fb-cf221fb4942f",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17449fa3cb3,
            },
            "e-97": {
              id: "e-97",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-96",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".post-item",
                originalId:
                  "67f13ff880e9ecbd46362f99|26d29e72-2966-c052-f3fb-cf221fb4942f",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".post-item",
                  originalId:
                    "67f13ff880e9ecbd46362f99|26d29e72-2966-c052-f3fb-cf221fb4942f",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17449fa3cb7,
            },
            "e-98": {
              id: "e-98",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-99",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1744a1952a9,
            },
            "e-99": {
              id: "e-99",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-98",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1744a1952a9,
            },
            "e-100": {
              id: "e-100",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-101",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1744a1952a9,
            },
            "e-101": {
              id: "e-101",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-100",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1744a1952a9,
            },
            "e-102": {
              id: "e-102",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x1744a1952a9,
            },
            "e-103": {
              id: "e-103",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1744a1952a9,
            },
            "e-106": {
              id: "e-106",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-107",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a|31c49487-4e57-7e5e-712b-c700c5df09b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a|31c49487-4e57-7e5e-712b-c700c5df09b6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1744a1952a9,
            },
            "e-107": {
              id: "e-107",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-21",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-106",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a|31c49487-4e57-7e5e-712b-c700c5df09b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a|31c49487-4e57-7e5e-712b-c700c5df09b6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1744a1952a9,
            },
            "e-111": {
              id: "e-111",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f92",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x1744a6e87b9,
            },
            "e-136": {
              id: "e-136",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-137",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".insta-content",
                originalId:
                  "67f13ff880e9ecbd46362f95|418bb44c-4439-0238-84f8-29dd865eae73",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".insta-content",
                  originalId:
                    "67f13ff880e9ecbd46362f95|418bb44c-4439-0238-84f8-29dd865eae73",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174543940da,
            },
            "e-137": {
              id: "e-137",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-136",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".insta-content",
                originalId:
                  "67f13ff880e9ecbd46362f95|418bb44c-4439-0238-84f8-29dd865eae73",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".insta-content",
                  originalId:
                    "67f13ff880e9ecbd46362f95|418bb44c-4439-0238-84f8-29dd865eae73",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174543940dd,
            },
            "e-139": {
              id: "e-139",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-36",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f95|418bb44c-4439-0238-84f8-29dd865eae64",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95|418bb44c-4439-0238-84f8-29dd865eae64",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-36-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "ELEMENT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-36-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "ELEMENT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x174543fa285,
            },
            "e-241": {
              id: "e-241",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-242",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|05953480-8571-f84b-7200-0618e2b06cbf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|05953480-8571-f84b-7200-0618e2b06cbf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691a90e8,
            },
            "e-242": {
              id: "e-242",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-21",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-241",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|05953480-8571-f84b-7200-0618e2b06cbf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|05953480-8571-f84b-7200-0618e2b06cbf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691a90e8,
            },
            "e-243": {
              id: "e-243",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-244",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|0421ca99-f121-2ab4-1770-40008572f6a5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|0421ca99-f121-2ab4-1770-40008572f6a5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691dc009,
            },
            "e-245": {
              id: "e-245",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-246",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|b045dbb9-9d76-6475-2822-953f74d62c9f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|b045dbb9-9d76-6475-2822-953f74d62c9f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691dd94c,
            },
            "e-247": {
              id: "e-247",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-248",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|c7ede1a4-3a93-24be-f31c-72c67c6d4259",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|c7ede1a4-3a93-24be-f31c-72c67c6d4259",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691e1a90,
            },
            "e-249": {
              id: "e-249",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-250",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|473fb9b0-5fb0-e163-ca45-79a2de7aa271",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|473fb9b0-5fb0-e163-ca45-79a2de7aa271",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691e3ad2,
            },
            "e-251": {
              id: "e-251",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-252",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|c0163fbc-a79d-6740-c6de-0df5234ba669",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|c0163fbc-a79d-6740-c6de-0df5234ba669",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691e50ca,
            },
            "e-253": {
              id: "e-253",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-254",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|13f8cb45-605a-f22a-5ec2-0fd31296d88e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|13f8cb45-605a-f22a-5ec2-0fd31296d88e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691e71c0,
            },
            "e-255": {
              id: "e-255",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-256",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|b835d8c3-d34c-b72a-0f96-72bcbd9980a0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|b835d8c3-d34c-b72a-0f96-72bcbd9980a0",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691e8be6,
            },
            "e-257": {
              id: "e-257",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-258",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|5be8af71-e51d-6657-8e2a-ad2ab0d69d43",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|5be8af71-e51d-6657-8e2a-ad2ab0d69d43",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691ea617,
            },
            "e-259": {
              id: "e-259",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-260",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|1e7518aa-e895-994a-bccc-2fa1fbe7e2e3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|1e7518aa-e895-994a-bccc-2fa1fbe7e2e3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691ed806,
            },
            "e-261": {
              id: "e-261",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-262",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|2ae9310b-62f4-7acf-96a2-cfb63a524ac5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|2ae9310b-62f4-7acf-96a2-cfb63a524ac5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691eee6d,
            },
            "e-263": {
              id: "e-263",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-264",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|8953bb65-ec6a-fa8d-2a65-989fe046821d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|8953bb65-ec6a-fa8d-2a65-989fe046821d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691f05b8,
            },
            "e-265": {
              id: "e-265",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-266",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|ea438f59-7b0a-018a-2a5f-d127feb4896b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|ea438f59-7b0a-018a-2a5f-d127feb4896b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691f1989,
            },
            "e-267": {
              id: "e-267",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-268",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|09e84816-5737-bbd5-9f06-def9c4b8098f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|09e84816-5737-bbd5-9f06-def9c4b8098f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691f3530,
            },
            "e-269": {
              id: "e-269",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-270",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|0e78452f-bdab-7657-a0f9-33a96cbf0dbe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|0e78452f-bdab-7657-a0f9-33a96cbf0dbe",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691f6fcf,
            },
            "e-271": {
              id: "e-271",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-272",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|0dc81707-83fa-4d05-22ff-2eba85874a42",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|0dc81707-83fa-4d05-22ff-2eba85874a42",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174691f9917,
            },
            "e-273": {
              id: "e-273",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-274",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|531be9e8-dabf-2ab2-cff3-77096619ee4e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|531be9e8-dabf-2ab2-cff3-77096619ee4e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469206592,
            },
            "e-275": {
              id: "e-275",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-276",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|531be9e8-dabf-2ab2-cff3-77096619ee50",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|531be9e8-dabf-2ab2-cff3-77096619ee50",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174692082dc,
            },
            "e-277": {
              id: "e-277",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-278",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|5685afb5-601b-5be2-d1d1-578bf7cdea0e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|5685afb5-601b-5be2-d1d1-578bf7cdea0e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469209876,
            },
            "e-279": {
              id: "e-279",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-280",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|695c6914-9d3d-0981-14d3-ceed669fe3e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|695c6914-9d3d-0981-14d3-ceed669fe3e7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1746920b16e,
            },
            "e-281": {
              id: "e-281",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-282",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|1cedc0d3-8538-dc90-d519-586ce3ee3d71",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|1cedc0d3-8538-dc90-d519-586ce3ee3d71",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1746920ca0b,
            },
            "e-283": {
              id: "e-283",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-284",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|b360163b-8e01-7d2b-b0f0-0f601a0d9f9e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|b360163b-8e01-7d2b-b0f0-0f601a0d9f9e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1746920ee17,
            },
            "e-285": {
              id: "e-285",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-286",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|61f4328e-8eae-42c6-da78-2c3f66664699",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|61f4328e-8eae-42c6-da78-2c3f66664699",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469210623,
            },
            "e-287": {
              id: "e-287",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-288",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|f8d58902-5bca-c5a0-a8c7-78828d2303f1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|f8d58902-5bca-c5a0-a8c7-78828d2303f1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469211dd5,
            },
            "e-289": {
              id: "e-289",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-290",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|61250761-8bcb-7480-19a6-b7f802181799",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|61250761-8bcb-7480-19a6-b7f802181799",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174692139bc,
            },
            "e-291": {
              id: "e-291",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-292",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|531be9e8-dabf-2ab2-cff3-77096619ee54",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|531be9e8-dabf-2ab2-cff3-77096619ee54",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174692158f9,
            },
            "e-293": {
              id: "e-293",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-294",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|531be9e8-dabf-2ab2-cff3-77096619ee58",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|531be9e8-dabf-2ab2-cff3-77096619ee58",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174692170cd,
            },
            "e-295": {
              id: "e-295",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-296",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469220340,
            },
            "e-296": {
              id: "e-296",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-295",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469220340,
            },
            "e-297": {
              id: "e-297",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-298",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469220340,
            },
            "e-298": {
              id: "e-298",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-297",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469220340,
            },
            "e-299": {
              id: "e-299",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x17469220340,
            },
            "e-300": {
              id: "e-300",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-301",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b|05953480-8571-f84b-7200-0618e2b06cbf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b|05953480-8571-f84b-7200-0618e2b06cbf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469220340,
            },
            "e-301": {
              id: "e-301",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-21",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-300",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b|05953480-8571-f84b-7200-0618e2b06cbf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b|05953480-8571-f84b-7200-0618e2b06cbf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469220340,
            },
            "e-322": {
              id: "e-322",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-323",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469238822,
            },
            "e-323": {
              id: "e-323",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-322",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469238822,
            },
            "e-324": {
              id: "e-324",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-325",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469238822,
            },
            "e-325": {
              id: "e-325",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-324",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469238822,
            },
            "e-326": {
              id: "e-326",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f9c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x17469238822,
            },
            "e-327": {
              id: "e-327",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-328",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9c|05953480-8571-f84b-7200-0618e2b06cbf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c|05953480-8571-f84b-7200-0618e2b06cbf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469238822,
            },
            "e-328": {
              id: "e-328",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-21",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-327",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9c|05953480-8571-f84b-7200-0618e2b06cbf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c|05953480-8571-f84b-7200-0618e2b06cbf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17469238822,
            },
            "e-339": {
              id: "e-339",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-340",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b|4f27ca08-0fda-cecf-ef60-797126c7be8d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b|4f27ca08-0fda-cecf-ef60-797126c7be8d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1746d7e444c,
            },
            "e-341": {
              id: "e-341",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-342",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b|cbf38323-6d12-a704-bd2e-04516b697331",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b|cbf38323-6d12-a704-bd2e-04516b697331",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1746d8322ce,
            },
            "e-345": {
              id: "e-345",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-346",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".category-acronym",
                originalId:
                  "67f13ff880e9ecbd46362f91|3120f182-d5a1-3427-75e4-ac4b41d54a4f",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".category-acronym",
                  originalId:
                    "67f13ff880e9ecbd46362f91|3120f182-d5a1-3427-75e4-ac4b41d54a4f",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1746d9a1e54,
            },
            "e-349": {
              id: "e-349",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-350",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174777d09fa,
            },
            "e-350": {
              id: "e-350",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-349",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174777d0a04,
            },
            "e-351": {
              id: "e-351",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-352",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f97",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f97",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174b144b78e,
            },
            "e-352": {
              id: "e-352",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-351",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f97",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f97",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174b144b79f,
            },
            "e-354": {
              id: "e-354",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-355",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f97",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f97",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174b146b1db,
            },
            "e-355": {
              id: "e-355",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-354",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f97",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f97",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x174b146b1e6,
            },
            "e-356": {
              id: "e-356",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f98",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x174b1472080,
            },
            "e-357": {
              id: "e-357",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-358",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".licensing-card",
                originalId:
                  "67f13ff880e9ecbd46362f9c|b8aa41b4-d53e-73d8-d43e-ea324ea22163",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".licensing-card",
                  originalId:
                    "67f13ff880e9ecbd46362f9c|b8aa41b4-d53e-73d8-d43e-ea324ea22163",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x175a99af9ba,
            },
            "e-359": {
              id: "e-359",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-360",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9c|04301f2e-76c4-ab68-7f6b-a8f3ab5b801f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c|04301f2e-76c4-ab68-7f6b-a8f3ab5b801f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x175a99b3226,
            },
            "e-361": {
              id: "e-361",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-362",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|32967b20-7e59-b07f-7197-75486cc3cef6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|32967b20-7e59-b07f-7197-75486cc3cef6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x175a99d44d6,
            },
            "e-365": {
              id: "e-365",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-366",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|0cb966be-10c0-47cf-c914-8a8411b9f8a6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|0cb966be-10c0-47cf-c914-8a8411b9f8a6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x175a9a499fb,
            },
            "e-367": {
              id: "e-367",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-368",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|554ccfea-8217-66b2-994b-da65f46200c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|554ccfea-8217-66b2-994b-da65f46200c2",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x175a9a5462b,
            },
            "e-369": {
              id: "e-369",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-370",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|85b1c94c-6972-78a9-f8f6-90fe5adbd542",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|85b1c94c-6972-78a9-f8f6-90fe5adbd542",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x175a9a55557,
            },
            "e-380": {
              id: "e-380",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-40",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["medium", "small", "tiny"],
              target: {
                selector: ".project-item-style-2",
                originalId:
                  "67f13ff880e9ecbd46362f94|bc835b08-adcf-9322-7277-95514d102f86",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item-style-2",
                  originalId:
                    "67f13ff880e9ecbd46362f94|bc835b08-adcf-9322-7277-95514d102f86",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-40-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x175a9f54d89,
            },
            "e-385": {
              id: "e-385",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-386",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|cd46b381-382c-db0e-05b8-21bf07ccbcec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|cd46b381-382c-db0e-05b8-21bf07ccbcec",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785a8aca1b,
            },
            "e-387": {
              id: "e-387",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-388",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|cd46b381-382c-db0e-05b8-21bf07ccbcf0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|cd46b381-382c-db0e-05b8-21bf07ccbcf0",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785a8aca1b,
            },
            "e-389": {
              id: "e-389",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-390",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|d16d3de2-7734-d6d1-0326-aa28ec398863",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|d16d3de2-7734-d6d1-0326-aa28ec398863",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785ea6af49,
            },
            "e-391": {
              id: "e-391",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-392",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|b7a12402-c822-cb3c-5744-eb44ee561d7c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|b7a12402-c822-cb3c-5744-eb44ee561d7c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785ea8ce4d,
            },
            "e-393": {
              id: "e-393",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x1785f3f28cc,
            },
            "e-394": {
              id: "e-394",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1785f411f15,
            },
            "e-395": {
              id: "e-395",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-3",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-396",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".brand",
                originalId: "7e10cc62-a008-0964-546c-dc3d5de042b5",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".brand",
                  originalId: "7e10cc62-a008-0964-546c-dc3d5de042b5",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785f5da835,
            },
            "e-396": {
              id: "e-396",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-395",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".brand",
                originalId: "7e10cc62-a008-0964-546c-dc3d5de042b5",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".brand",
                  originalId: "7e10cc62-a008-0964-546c-dc3d5de042b5",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785f5da844,
            },
            "e-397": {
              id: "e-397",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-43",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-398",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".project-item",
                originalId:
                  "67f13ff880e9ecbd46362f91|bc835b08-adcf-9322-7277-95514d102f86",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item",
                  originalId:
                    "67f13ff880e9ecbd46362f91|bc835b08-adcf-9322-7277-95514d102f86",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785f899764,
            },
            "e-398": {
              id: "e-398",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-397",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".project-item",
                originalId:
                  "67f13ff880e9ecbd46362f91|bc835b08-adcf-9322-7277-95514d102f86",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item",
                  originalId:
                    "67f13ff880e9ecbd46362f91|bc835b08-adcf-9322-7277-95514d102f86",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785f899772,
            },
            "e-402": {
              id: "e-402",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-44",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-401",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1785fd4a65a,
            },
            "e-403": {
              id: "e-403",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-45",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|6f11d2e0-a75e-3ff0-3a6a-06fdbe5c2c85",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|6f11d2e0-a75e-3ff0-3a6a-06fdbe5c2c85",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-45-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x17868cf659b,
            },
            "e-404": {
              id: "e-404",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-46",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f91|33ce7007-f024-d4ce-fe88-e806f25cc72e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|33ce7007-f024-d4ce-fe88-e806f25cc72e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-46-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x17869521ec7,
            },
            "e-406": {
              id: "e-406",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-405",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17869a4f240,
            },
            "e-407": {
              id: "e-407",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-408",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|8314cf1a-e94c-e8b6-a970-03fff4e96c99",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|8314cf1a-e94c-e8b6-a970-03fff4e96c99",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17869aaf573,
            },
            "e-409": {
              id: "e-409",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-410",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|dac583ac-0e3a-8843-ff74-a3b88a13c2e3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|dac583ac-0e3a-8843-ff74-a3b88a13c2e3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17869aeefae,
            },
            "e-411": {
              id: "e-411",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-48",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-412",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".perspective-load1-on-view",
                originalId:
                  "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".perspective-load1-on-view",
                  originalId:
                    "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786a823683,
            },
            "e-413": {
              id: "e-413",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-49",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-414",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".perspective-load2-on-view",
                originalId:
                  "67f13ff880e9ecbd46362f91|a3980c7d-fb24-055d-0fc1-3d88fecfe9f2",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".perspective-load2-on-view",
                  originalId:
                    "67f13ff880e9ecbd46362f91|a3980c7d-fb24-055d-0fc1-3d88fecfe9f2",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786a841e8e,
            },
            "e-415": {
              id: "e-415",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-50",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-416",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".perspective-load3-on-view",
                originalId: "bc15a15c-6b84-e41a-92fc-33727005bcf3",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".perspective-load3-on-view",
                  originalId: "bc15a15c-6b84-e41a-92fc-33727005bcf3",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786a8ea7d4,
            },
            "e-417": {
              id: "e-417",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-51",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-418",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "99bc6bd0-837d-9882-425d-1889465cdbc7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "99bc6bd0-837d-9882-425d-1889465cdbc7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786def88c1,
            },
            "e-419": {
              id: "e-419",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-420",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".fade-in-slow-on-view",
                originalId: "8ecbbd49-40b0-e983-6cff-79db13a36e45",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".fade-in-slow-on-view",
                  originalId: "8ecbbd49-40b0-e983-6cff-79db13a36e45",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786df1fb9a,
            },
            "e-423": {
              id: "e-423",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-52",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-424",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".project-item-image-holder",
                originalId:
                  "67f13ff880e9ecbd46362f91|7a541bd5-5384-839a-99b5-a981929c8e06",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item-image-holder",
                  originalId:
                    "67f13ff880e9ecbd46362f91|7a541bd5-5384-839a-99b5-a981929c8e06",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786e06411e,
            },
            "e-425": {
              id: "e-425",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-426",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".project-item-arrow-holder",
                originalId:
                  "67f13ff880e9ecbd46362f91|e119085e-d519-ff7a-890e-68d78b67752e",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-item-arrow-holder",
                  originalId:
                    "67f13ff880e9ecbd46362f91|e119085e-d519-ff7a-890e-68d78b67752e",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786e0d27cc,
            },
            "e-427": {
              id: "e-427",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-428",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|c14e4114-ba3a-ef96-c1b7-ae526cead99b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|c14e4114-ba3a-ef96-c1b7-ae526cead99b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786e0fd119,
            },
            "e-429": {
              id: "e-429",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-430",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|e74ed22c-3155-00fa-e7e3-df8b5875d505",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|e74ed22c-3155-00fa-e7e3-df8b5875d505",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786e0ffc9b,
            },
            "e-431": {
              id: "e-431",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-432",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f91|8bcff585-4274-03e5-cd38-45d57104228e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f91|8bcff585-4274-03e5-cd38-45d57104228e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786e109022,
            },
            "e-433": {
              id: "e-433",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-434",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".service-icon",
                originalId:
                  "67f13ff880e9ecbd46362f91|2a46ca2c-a1f8-9e5c-ff59-60b1408e7492",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".service-icon",
                  originalId:
                    "67f13ff880e9ecbd46362f91|2a46ca2c-a1f8-9e5c-ff59-60b1408e7492",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786e10e461,
            },
            "e-435": {
              id: "e-435",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f95",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786ece541a,
            },
            "e-436": {
              id: "e-436",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f94",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786eddc4df,
            },
            "e-438": {
              id: "e-438",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-437",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f94",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786ee1acb5,
            },
            "e-440": {
              id: "e-440",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-439",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f95",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786ee2247f,
            },
            "e-442": {
              id: "e-442",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-441",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786ee2d7f9,
            },
            "e-444": {
              id: "e-444",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-443",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786ee72e06,
            },
            "e-445": {
              id: "e-445",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f92",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786ee9e636,
            },
            "e-447": {
              id: "e-447",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-446",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786eea0214,
            },
            "e-448": {
              id: "e-448",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786eed2e79,
            },
            "e-450": {
              id: "e-450",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-449",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9b",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786eed492f,
            },
            "e-451": {
              id: "e-451",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f9c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786eee867e,
            },
            "e-453": {
              id: "e-453",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-452",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9c",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786eeea344,
            },
            "e-454": {
              id: "e-454",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f97",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f97",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786ef08089,
            },
            "e-455": {
              id: "e-455",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f97",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f97",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786ef0b1bf,
            },
            "e-457": {
              id: "e-457",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-456",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f97",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f97",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786ef0c999,
            },
            "e-458": {
              id: "e-458",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-459",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f97|5f4d0766ea16b9eae5a8cfdd00000000000c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f97|5f4d0766ea16b9eae5a8cfdd00000000000c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786ef19fc4,
            },
            "e-460": {
              id: "e-460",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-461",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f98|5f4d0775bc219f74475be8b600000000000b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f98|5f4d0775bc219f74475be8b600000000000b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786ef2d117,
            },
            "e-462": {
              id: "e-462",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f98",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786ef33c8b,
            },
            "e-464": {
              id: "e-464",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-463",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f98",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f98",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1786ef356cc,
            },
            "e-465": {
              id: "e-465",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-36",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".instagram-grid-content",
                originalId:
                  "67f13ff880e9ecbd46362f95|105881a7-9283-0134-c2d2-276c40a8f552",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".instagram-grid-content",
                  originalId:
                    "67f13ff880e9ecbd46362f95|105881a7-9283-0134-c2d2-276c40a8f552",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-36-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "ELEMENT",
                  reverse: !1,
                  smoothing: 91,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-36-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "ELEMENT",
                  reverse: !1,
                  smoothing: 91,
                  restingState: 50,
                },
              ],
              createdOn: 0x1786f2e7797,
            },
            "e-466": {
              id: "e-466",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-53",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-467",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".fade-in-2-slow-on-view",
                originalId:
                  "67f13ff880e9ecbd46362f95|34754b9c-476f-9bfa-bcb6-2edacadaecba",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".fade-in-2-slow-on-view",
                  originalId:
                    "67f13ff880e9ecbd46362f95|34754b9c-476f-9bfa-bcb6-2edacadaecba",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x178795d867a,
            },
            "e-470": {
              id: "e-470",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-55",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-471",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".image-holder",
                originalId:
                  "67f13ff880e9ecbd46362f95|09b04ee2-75ee-0d51-8715-bcfdb4ab482f",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".image-holder",
                  originalId:
                    "67f13ff880e9ecbd46362f95|09b04ee2-75ee-0d51-8715-bcfdb4ab482f",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x178797e961d,
            },
            "e-474": {
              id: "e-474",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-475",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f95|69070780-922c-f816-846a-6d510a5a6350",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f95|69070780-922c-f816-846a-6d510a5a6350",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787988faf8,
            },
            "e-476": {
              id: "e-476",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-477",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".skill-top-border",
                originalId:
                  "67f13ff880e9ecbd46362f95|52da2396-7b77-250a-d280-eed01ae8a093",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".skill-top-border",
                  originalId:
                    "67f13ff880e9ecbd46362f95|52da2396-7b77-250a-d280-eed01ae8a093",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787990b1df,
            },
            "e-478": {
              id: "e-478",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-479",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99|a124c215-79a0-795d-e58f-e5a84a6c315d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99|a124c215-79a0-795d-e58f-e5a84a6c315d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17879bf5999,
            },
            "e-480": {
              id: "e-480",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-481",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99|a124c215-79a0-795d-e58f-e5a84a6c315e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99|a124c215-79a0-795d-e58f-e5a84a6c315e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17879bf5999,
            },
            "e-482": {
              id: "e-482",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-483",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99|a124c215-79a0-795d-e58f-e5a84a6c3164",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99|a124c215-79a0-795d-e58f-e5a84a6c3164",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17879bf5999,
            },
            "e-485": {
              id: "e-485",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-44",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-484",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f99",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f99",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17879c0ffad,
            },
            "e-486": {
              id: "e-486",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-43",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-487",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".post-item",
                originalId:
                  "67f13ff880e9ecbd46362f99|dcdb2793-eaf1-7b53-ee4f-4d0687535b50",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".post-item",
                  originalId:
                    "67f13ff880e9ecbd46362f99|dcdb2793-eaf1-7b53-ee4f-4d0687535b50",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787de34193,
            },
            "e-487": {
              id: "e-487",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-486",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".post-item",
                originalId:
                  "67f13ff880e9ecbd46362f99|dcdb2793-eaf1-7b53-ee4f-4d0687535b50",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".post-item",
                  originalId:
                    "67f13ff880e9ecbd46362f99|dcdb2793-eaf1-7b53-ee4f-4d0687535b50",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787de341a2,
            },
            "e-488": {
              id: "e-488",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-489",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".post-item-image",
                originalId:
                  "67f13ff880e9ecbd46362f99|719747f0-62c8-6f25-0952-736efa617a25",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".post-item-image",
                  originalId:
                    "67f13ff880e9ecbd46362f99|719747f0-62c8-6f25-0952-736efa617a25",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787df1afa6,
            },
            "e-490": {
              id: "e-490",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-491",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".post-item-category",
                originalId:
                  "67f13ff880e9ecbd46362f99|433068d8-b1ee-fc6e-47a6-52f5bf19924b",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".post-item-category",
                  originalId:
                    "67f13ff880e9ecbd46362f99|433068d8-b1ee-fc6e-47a6-52f5bf19924b",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787df22bbd,
            },
            "e-492": {
              id: "e-492",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-493",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".post-item-date",
                originalId:
                  "67f13ff880e9ecbd46362f99|7eb0e02f-5bf4-138e-242c-54ceda17c538",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".post-item-date",
                  originalId:
                    "67f13ff880e9ecbd46362f99|7eb0e02f-5bf4-138e-242c-54ceda17c538",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787df24f6c,
            },
            "e-494": {
              id: "e-494",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-495",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".post-item-title",
                originalId:
                  "67f13ff880e9ecbd46362f99|719747f0-62c8-6f25-0952-736efa617a2a",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".post-item-title",
                  originalId:
                    "67f13ff880e9ecbd46362f99|719747f0-62c8-6f25-0952-736efa617a2a",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787df27ffe,
            },
            "e-496": {
              id: "e-496",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f96",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1787df7593e,
            },
            "e-497": {
              id: "e-497",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-498",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96|dcdd705f-d8b2-ffd8-fa49-ffb8ae783e22",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96|dcdd705f-d8b2-ffd8-fa49-ffb8ae783e22",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e0addc0,
            },
            "e-499": {
              id: "e-499",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-500",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96|5fb9cc95-38dc-a0c9-a862-57b6831a5254",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96|5fb9cc95-38dc-a0c9-a862-57b6831a5254",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e0b03df,
            },
            "e-501": {
              id: "e-501",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-502",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96|6852fe74-b989-993f-9061-043e6aa3f908",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96|6852fe74-b989-993f-9061-043e6aa3f908",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e0b765d,
            },
            "e-503": {
              id: "e-503",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-504",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96|6852fe74-b989-993f-9061-043e6aa3f909",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96|6852fe74-b989-993f-9061-043e6aa3f909",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e0b765d,
            },
            "e-505": {
              id: "e-505",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-506",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96|6852fe74-b989-993f-9061-043e6aa3f90f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96|6852fe74-b989-993f-9061-043e6aa3f90f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e0b765d,
            },
            "e-508": {
              id: "e-508",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-44",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-507",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e0bdf46,
            },
            "e-510": {
              id: "e-510",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-509",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e0c197e,
            },
            "e-511": {
              id: "e-511",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-512",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f96|f58ee193-1f99-9f9b-a87e-abfe44f3abc0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f96|f58ee193-1f99-9f9b-a87e-abfe44f3abc0",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e1376fb,
            },
            "e-513": {
              id: "e-513",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-514",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93|1e054c5c-9ab7-2189-2bff-5f0632cf9287",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93|1e054c5c-9ab7-2189-2bff-5f0632cf9287",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e2d4661,
            },
            "e-515": {
              id: "e-515",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-516",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".project-details-item",
                originalId:
                  "67f13ff880e9ecbd46362f93|fe7ffcb7-f360-286d-0f0f-8ffafcc7ce68",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".project-details-item",
                  originalId:
                    "67f13ff880e9ecbd46362f93|fe7ffcb7-f360-286d-0f0f-8ffafcc7ce68",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e2e3e89,
            },
            "e-517": {
              id: "e-517",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-518",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93|6cbb0718-0bf1-1f76-0b13-292e885b41c5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93|6cbb0718-0bf1-1f76-0b13-292e885b41c5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e2e6127,
            },
            "e-519": {
              id: "e-519",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-520",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93|ab792d4d-7635-cb6a-5b53-5345abaa3861",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93|ab792d4d-7635-cb6a-5b53-5345abaa3861",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e2e9a5b,
            },
            "e-521": {
              id: "e-521",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-522",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93|357a0da3-1162-24f2-50df-28f47be6454d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93|357a0da3-1162-24f2-50df-28f47be6454d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e2eb8da,
            },
            "e-523": {
              id: "e-523",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f93",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x1787e2f7dff,
            },
            "e-524": {
              id: "e-524",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f93",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1787e2fb435,
            },
            "e-526": {
              id: "e-526",
              name: "",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-525",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f93",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f93",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e2fd129,
            },
            "e-527": {
              id: "e-527",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-3",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-528",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".submit-button",
                originalId:
                  "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2ac",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".submit-button",
                  originalId:
                    "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2ac",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e3dbf24,
            },
            "e-528": {
              id: "e-528",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-527",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".submit-button",
                originalId:
                  "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2ac",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".submit-button",
                  originalId:
                    "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2ac",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e3dbf35,
            },
            "e-529": {
              id: "e-529",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-56",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-530",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e45c219,
            },
            "e-531": {
              id: "e-531",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-57",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-532",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e46e2bb,
            },
            "e-533": {
              id: "e-533",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-534",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e495c3d,
            },
            "e-535": {
              id: "e-535",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-536",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2ac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2ac",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e498827,
            },
            "e-537": {
              id: "e-537",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-58",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-538",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".accordion-header",
                originalId:
                  "5fd9e5c9a905d1545475a8a4|5fd2667d-7b60-92d1-676b-81dfdad3aa09",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".accordion-header",
                  originalId:
                    "5fd9e5c9a905d1545475a8a4|5fd2667d-7b60-92d1-676b-81dfdad3aa09",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x176687ba205,
            },
            "e-538": {
              id: "e-538",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-59",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-537",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".accordion-header",
                originalId:
                  "5fd9e5c9a905d1545475a8a4|5fd2667d-7b60-92d1-676b-81dfdad3aa09",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".accordion-header",
                  originalId:
                    "5fd9e5c9a905d1545475a8a4|5fd2667d-7b60-92d1-676b-81dfdad3aa09",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x176687ba205,
            },
            "e-541": {
              id: "e-541",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-542",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".accordion-title",
                originalId:
                  "5fd9e5c9a905d1545475a8a4|5fd2667d-7b60-92d1-676b-81dfdad3aa0d",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".accordion-title",
                  originalId:
                    "5fd9e5c9a905d1545475a8a4|5fd2667d-7b60-92d1-676b-81dfdad3aa0d",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x176687eb681,
            },
            "e-543": {
              id: "e-543",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-544",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".accordion-icon",
                originalId:
                  "5fd9e5c9a905d1545475a8a4|5fd2667d-7b60-92d1-676b-81dfdad3aa13",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".accordion-icon",
                  originalId:
                    "5fd9e5c9a905d1545475a8a4|5fd2667d-7b60-92d1-676b-81dfdad3aa13",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x176687dd757,
            },
            "e-545": {
              id: "e-545",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-43",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-546",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".accordion-header",
                originalId: "5f954c04-5357-98e4-f6a9-60cc1c00c046",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".accordion-header",
                  originalId: "5f954c04-5357-98e4-f6a9-60cc1c00c046",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e53b722,
            },
            "e-546": {
              id: "e-546",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-545",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".accordion-header",
                originalId: "5f954c04-5357-98e4-f6a9-60cc1c00c046",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".accordion-header",
                  originalId: "5f954c04-5357-98e4-f6a9-60cc1c00c046",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e53b738,
            },
            "e-547": {
              id: "e-547",
              name: "",
              animationType: "preset",
              eventTypeId: "PAGE_START",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-548",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e878d4d,
            },
            "e-548": {
              id: "e-548",
              name: "",
              animationType: "preset",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-547",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e878d4d,
            },
            "e-549": {
              id: "e-549",
              name: "",
              animationType: "preset",
              eventTypeId: "PAGE_SCROLL_UP",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-550",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e878d4d,
            },
            "e-550": {
              id: "e-550",
              name: "",
              animationType: "preset",
              eventTypeId: "PAGE_SCROLL_DOWN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-549",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e878d4d,
            },
            "e-551": {
              id: "e-551",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-41",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f9e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-41-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-41-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 85,
                  restingState: 50,
                },
              ],
              createdOn: 0x1787e878d4d,
            },
            "e-552": {
              id: "e-552",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-553",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9e|05953480-8571-f84b-7200-0618e2b06cbf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e|05953480-8571-f84b-7200-0618e2b06cbf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e878d4d,
            },
            "e-553": {
              id: "e-553",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-21",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-552",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9e|05953480-8571-f84b-7200-0618e2b06cbf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e|05953480-8571-f84b-7200-0618e2b06cbf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e878d4d,
            },
            "e-556": {
              id: "e-556",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-42",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67f13ff880e9ecbd46362f9e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-42-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-42-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 50,
                  restingState: 50,
                },
              ],
              createdOn: 0x1787e878d4d,
            },
            "e-558": {
              id: "e-558",
              name: "",
              animationType: "preset",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-47",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-557",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787e878d4d,
            },
            "e-561": {
              id: "e-561",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-562",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f9e|3c620d68-4d26-a7fa-e166-c20a0ed05bd9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f9e|3c620d68-4d26-a7fa-e166-c20a0ed05bd9",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1787fe3b5f9,
            },
            "e-563": {
              id: "e-563",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-564",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|66c1ddee-798c-1a9d-c542-02b414442582",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|66c1ddee-798c-1a9d-c542-02b414442582",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x178a6976b1e,
            },
            "e-565": {
              id: "e-565",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-566",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67f13ff880e9ecbd46362f92|8c68e8d2-bf7d-86fd-9e42-818cc221cbcc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67f13ff880e9ecbd46362f92|8c68e8d2-bf7d-86fd-9e42-818cc221cbcc",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x178a697f0fe,
            },
          },
          actionLists: {
            a: {
              id: "a",
              title: "Hero On Scroll",
              continuousParameterGroups: [
                {
                  id: "a-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 25,
                      actionItems: [
                        {
                          id: "a-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".hero-hello-text",
                              selectorGuids: [
                                "f8ac8062-29db-635e-7d68-120a7ced87b9",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".hero-text-content",
                              selectorGuids: [
                                "9e29dcf4-2227-12a5-c65c-4a0cef2232bf",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-n-6",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".hero-image-white-text",
                              selectorGuids: [
                                "540a0fc1-fcc4-4c18-b0eb-176ef0bd2de3",
                              ],
                            },
                            widthValue: 0,
                            widthUnit: "vw",
                            heightUnit: "PX",
                            locked: !1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 40,
                      actionItems: [
                        {
                          id: "a-n-8",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".hero-picture",
                              selectorGuids: [
                                "2cb27e36-28c6-c56c-c193-6eb70d3c15c2",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 75,
                      actionItems: [
                        {
                          id: "a-n-7",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".hero-image-white-text",
                              selectorGuids: [
                                "540a0fc1-fcc4-4c18-b0eb-176ef0bd2de3",
                              ],
                            },
                            widthValue: 100,
                            widthUnit: "vw",
                            heightUnit: "PX",
                            locked: !1,
                          },
                        },
                        {
                          id: "a-n-9",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".hero-picture",
                              selectorGuids: [
                                "2cb27e36-28c6-c56c-c193-6eb70d3c15c2",
                              ],
                            },
                            xValue: 35,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-n-10",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".hero-hello-text",
                              selectorGuids: [
                                "f8ac8062-29db-635e-7d68-120a7ced87b9",
                              ],
                            },
                            xValue: -70,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-n-11",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".hero-text-content",
                              selectorGuids: [
                                "9e29dcf4-2227-12a5-c65c-4a0cef2232bf",
                              ],
                            },
                            xValue: -50,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x173f351e624,
            },
            "a-3": {
              id: "a-3",
              title: "Display Cursor Arrow - Link Hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-3-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor-small-circle",
                          selectorGuids: [
                            "dff252e1-f7cb-9989-9062-accb1d38471e",
                          ],
                        },
                        widthValue: 22,
                        heightValue: 22,
                        widthUnit: "px",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-3-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor-big-circle",
                          selectorGuids: [
                            "28e7601e-9ed2-cda2-719e-de617500fcfb",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-3-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-3-n-9",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        xValue: 0.2,
                        yValue: 0.2,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-3-n-13",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".link-underline",
                          selectorGuids: [
                            "eb757645-e5c9-6d26-b70b-7432ef5ec849",
                          ],
                        },
                        xValue: -102,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-3-n-4",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-small-circle",
                          selectorGuids: [
                            "dff252e1-f7cb-9989-9062-accb1d38471e",
                          ],
                        },
                        widthValue: 48,
                        heightValue: 48,
                        widthUnit: "px",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-3-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-big-circle",
                          selectorGuids: [
                            "28e7601e-9ed2-cda2-719e-de617500fcfb",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-3-n-8",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-3-n-10",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-3-n-14",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".link-underline",
                          selectorGuids: [
                            "eb757645-e5c9-6d26-b70b-7432ef5ec849",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fc759506,
            },
            "a-4": {
              id: "a-4",
              title: "Hide Cursor Arrow - On Hover Out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-4-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-big-circle",
                          selectorGuids: [
                            "28e7601e-9ed2-cda2-719e-de617500fcfb",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-5",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-small-circle",
                          selectorGuids: [
                            "dff252e1-f7cb-9989-9062-accb1d38471e",
                          ],
                        },
                        widthValue: 22,
                        heightValue: 22,
                        widthUnit: "px",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-4-n-8",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        xValue: 0.2,
                        yValue: 0.2,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-4-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-4-n-9",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".link-underline",
                          selectorGuids: [
                            "eb757645-e5c9-6d26-b70b-7432ef5ec849",
                          ],
                        },
                        xValue: 100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-4-n-10",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".link-underline",
                          selectorGuids: [
                            "eb757645-e5c9-6d26-b70b-7432ef5ec849",
                          ],
                        },
                        xValue: -102,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x173fc759506,
            },
            "a-6": {
              id: "a-6",
              title: "Page On Loading",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-6-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".fixed-nav",
                          selectorGuids: [
                            "76c2403f-c27b-7ac6-9cba-42bdcb6612d2",
                          ],
                        },
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-6-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-6-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-6-n-6",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                    {
                      id: "a-6-n-5",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                    {
                      id: "a-6-n-7",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "16dd5a27-f586-03a4-d1eb-1c3248895f4e",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-6-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 100,
                        target: {
                          selector: ".link-underline",
                          selectorGuids: [
                            "eb757645-e5c9-6d26-b70b-7432ef5ec849",
                          ],
                        },
                        xValue: -102,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-6-n-8",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".cursor",
                          selectorGuids: [
                            "16dd5a27-f586-03a4-d1eb-1c3248895f4e",
                          ],
                        },
                        value: "flex",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fd153918,
            },
            "a-19": {
              id: "a-19",
              title: "Page Load Done",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-19-n-8",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load1",
                          selectorGuids: [
                            "6bb2caa2-134e-4a6d-36e0-f0e1dacd2aa2",
                          ],
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-9",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load1",
                          selectorGuids: [
                            "6bb2caa2-134e-4a6d-36e0-f0e1dacd2aa2",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load1",
                          selectorGuids: [
                            "6bb2caa2-134e-4a6d-36e0-f0e1dacd2aa2",
                          ],
                        },
                        yValue: 60,
                        zValue: -3,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-13",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load2",
                          selectorGuids: [
                            "787301f9-d6d8-3802-8a99-c7f81e7bb9f3",
                          ],
                        },
                        yValue: 60,
                        zValue: -3,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-15",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load2",
                          selectorGuids: [
                            "787301f9-d6d8-3802-8a99-c7f81e7bb9f3",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-14",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load2",
                          selectorGuids: [
                            "787301f9-d6d8-3802-8a99-c7f81e7bb9f3",
                          ],
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-19",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load3",
                          selectorGuids: [
                            "97d1ed33-4c6d-32d0-2bef-e34b41d90f85",
                          ],
                        },
                        xValue: null,
                        yValue: 60,
                        zValue: -3,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-21",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load3",
                          selectorGuids: [
                            "97d1ed33-4c6d-32d0-2bef-e34b41d90f85",
                          ],
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-20",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load3",
                          selectorGuids: [
                            "97d1ed33-4c6d-32d0-2bef-e34b41d90f85",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-25",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load4",
                          selectorGuids: [
                            "a9e992f5-04fe-2862-59d5-1af02dec8d2c",
                          ],
                        },
                        yValue: 60,
                        zValue: -3,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-27",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load4",
                          selectorGuids: [
                            "a9e992f5-04fe-2862-59d5-1af02dec8d2c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-26",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load4",
                          selectorGuids: [
                            "a9e992f5-04fe-2862-59d5-1af02dec8d2c",
                          ],
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-31",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load5",
                          selectorGuids: [
                            "cbfa1a5f-90cf-60d4-300a-9d072caa444f",
                          ],
                        },
                        yValue: 60,
                        zValue: -3,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-33",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load5",
                          selectorGuids: [
                            "cbfa1a5f-90cf-60d4-300a-9d072caa444f",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-32",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load5",
                          selectorGuids: [
                            "cbfa1a5f-90cf-60d4-300a-9d072caa444f",
                          ],
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-37",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load6",
                          selectorGuids: [
                            "9acfa46f-73ff-1d79-8065-cfcac483578e",
                          ],
                        },
                        yValue: 60,
                        zValue: -3,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-39",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load6",
                          selectorGuids: [
                            "9acfa46f-73ff-1d79-8065-cfcac483578e",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-38",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".perspective-load6",
                          selectorGuids: [
                            "9acfa46f-73ff-1d79-8065-cfcac483578e",
                          ],
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".fixed-nav",
                          selectorGuids: [
                            "76c2403f-c27b-7ac6-9cba-42bdcb6612d2",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 400,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load1",
                          selectorGuids: [
                            "6bb2caa2-134e-4a6d-36e0-f0e1dacd2aa2",
                          ],
                        },
                        yValue: 0,
                        zValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-5",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 400,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load1",
                          selectorGuids: [
                            "6bb2caa2-134e-4a6d-36e0-f0e1dacd2aa2",
                          ],
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 400,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load1",
                          selectorGuids: [
                            "6bb2caa2-134e-4a6d-36e0-f0e1dacd2aa2",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-10",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 600,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load2",
                          selectorGuids: [
                            "787301f9-d6d8-3802-8a99-c7f81e7bb9f3",
                          ],
                        },
                        yValue: 0,
                        zValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-11",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 600,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load2",
                          selectorGuids: [
                            "787301f9-d6d8-3802-8a99-c7f81e7bb9f3",
                          ],
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 600,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load2",
                          selectorGuids: [
                            "787301f9-d6d8-3802-8a99-c7f81e7bb9f3",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-16",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 800,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load3",
                          selectorGuids: [
                            "97d1ed33-4c6d-32d0-2bef-e34b41d90f85",
                          ],
                        },
                        xValue: null,
                        yValue: 0,
                        zValue: 0,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-17",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 800,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load3",
                          selectorGuids: [
                            "97d1ed33-4c6d-32d0-2bef-e34b41d90f85",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-18",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 800,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load3",
                          selectorGuids: [
                            "97d1ed33-4c6d-32d0-2bef-e34b41d90f85",
                          ],
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-24",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1e3,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load4",
                          selectorGuids: [
                            "a9e992f5-04fe-2862-59d5-1af02dec8d2c",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-22",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1e3,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load4",
                          selectorGuids: [
                            "a9e992f5-04fe-2862-59d5-1af02dec8d2c",
                          ],
                        },
                        yValue: 0,
                        zValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-23",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 1e3,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load4",
                          selectorGuids: [
                            "a9e992f5-04fe-2862-59d5-1af02dec8d2c",
                          ],
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-28",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1200,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load5",
                          selectorGuids: [
                            "cbfa1a5f-90cf-60d4-300a-9d072caa444f",
                          ],
                        },
                        yValue: 0,
                        zValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-29",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 1200,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load5",
                          selectorGuids: [
                            "cbfa1a5f-90cf-60d4-300a-9d072caa444f",
                          ],
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-30",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1200,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load5",
                          selectorGuids: [
                            "cbfa1a5f-90cf-60d4-300a-9d072caa444f",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-34",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1400,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load6",
                          selectorGuids: [
                            "9acfa46f-73ff-1d79-8065-cfcac483578e",
                          ],
                        },
                        yValue: 0,
                        zValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-19-n-35",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 1400,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load6",
                          selectorGuids: [
                            "9acfa46f-73ff-1d79-8065-cfcac483578e",
                          ],
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-19-n-36",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1400,
                        easing: "ease",
                        duration: 800,
                        target: {
                          selector: ".perspective-load6",
                          selectorGuids: [
                            "9acfa46f-73ff-1d79-8065-cfcac483578e",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fd153918,
            },
            "a-7": {
              id: "a-7",
              title: "Show Nav On Scroll",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-7-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".fixed-nav",
                          selectorGuids: [
                            "76c2403f-c27b-7ac6-9cba-42bdcb6612d2",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x173fd26c17e,
            },
            "a-8": {
              id: "a-8",
              title: "Hide Nav On Scroll",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-8-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".fixed-nav",
                          selectorGuids: [
                            "76c2403f-c27b-7ac6-9cba-42bdcb6612d2",
                          ],
                        },
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x173fd26c17e,
            },
            "a-9": {
              id: "a-9",
              title: "Project Item Hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-9-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image",
                          selectorGuids: [
                            "faadcee7-605a-9d8c-5d03-347937045d36",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-9-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-arrow",
                          selectorGuids: [
                            "ec858018-0f11-72a5-3d76-b521695740ef",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-9-n-5",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-arrow",
                          selectorGuids: [
                            "ec858018-0f11-72a5-3d76-b521695740ef",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-9-n-2",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image",
                          selectorGuids: [
                            "faadcee7-605a-9d8c-5d03-347937045d36",
                          ],
                        },
                        xValue: 1.05,
                        yValue: 1.05,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-9-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-arrow",
                          selectorGuids: [
                            "ec858018-0f11-72a5-3d76-b521695740ef",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-9-n-6",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-arrow",
                          selectorGuids: [
                            "ec858018-0f11-72a5-3d76-b521695740ef",
                          ],
                        },
                        xValue: 0.2,
                        yValue: 0.2,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fd79cd29,
            },
            "a-10": {
              id: "a-10",
              title: "Project Item Hover Out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-10-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image",
                          selectorGuids: [
                            "faadcee7-605a-9d8c-5d03-347937045d36",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-10-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-arrow",
                          selectorGuids: [
                            "ec858018-0f11-72a5-3d76-b521695740ef",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-10-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-arrow",
                          selectorGuids: [
                            "ec858018-0f11-72a5-3d76-b521695740ef",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x173fd79cd29,
            },
            "a-41": {
              id: "a-41",
              title: "Mouse Follow Big Circle Cursor",
              continuousParameterGroups: [
                {
                  id: "a-41-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-41-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-big-circle",
                              selectorGuids: [
                                "28e7601e-9ed2-cda2-719e-de617500fcfb",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-41-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-big-circle",
                              selectorGuids: [
                                "28e7601e-9ed2-cda2-719e-de617500fcfb",
                              ],
                            },
                            xValue: 100,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-41-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-41-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-big-circle",
                              selectorGuids: [
                                "28e7601e-9ed2-cda2-719e-de617500fcfb",
                              ],
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-41-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-big-circle",
                              selectorGuids: [
                                "28e7601e-9ed2-cda2-719e-de617500fcfb",
                              ],
                            },
                            yValue: 100,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x1785f3f3a1b,
            },
            "a-16": {
              id: "a-16",
              title: "Project Item 2 Hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-16-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image",
                          selectorGuids: [
                            "faadcee7-605a-9d8c-5d03-347937045d36",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-16-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-arrow",
                          selectorGuids: [
                            "ec858018-0f11-72a5-3d76-b521695740ef",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x173fd79cd29,
            },
            "a-17": {
              id: "a-17",
              title: "Project Item 2 Hover Out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-17-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image",
                          selectorGuids: [
                            "faadcee7-605a-9d8c-5d03-347937045d36",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {
                          selector: ".nav-bg-white",
                          selectorGuids: [
                            "eb48b55d-ce44-6ec0-1ecb-1ba7f3d525cd",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {},
                        yValue: 30,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-17-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-10",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 300,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image",
                          selectorGuids: [
                            "faadcee7-605a-9d8c-5d03-347937045d36",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x173fd79cd29,
            },
            "a-20": {
              id: "a-20",
              title: "Display Gif Animation On Hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-20-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-20-n-2",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: 0.85,
                        yValue: 0.85,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-20-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-20-n-4",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {},
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1742b7ff0d7,
            },
            "a-21": {
              id: "a-21",
              title: "Hide Gif Animation On Hover Out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-21-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-21-n-4",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {},
                        xValue: 0.85,
                        yValue: 0.85,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x1742b7ff0d7,
            },
            "a-22": {
              id: "a-22",
              title: "Gray Text On Scroll",
              continuousParameterGroups: [
                {
                  id: "a-22-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-22-n",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "67f13ff880e9ecbd46362f95|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                            },
                            value: 0.2,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 25,
                      actionItems: [
                        {
                          id: "a-22-n-4",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "67f13ff880e9ecbd46362f95|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                            },
                            value: 0.2,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 50,
                      actionItems: [
                        {
                          id: "a-22-n-3",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "67f13ff880e9ecbd46362f95|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 75,
                      actionItems: [
                        {
                          id: "a-22-n-5",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "67f13ff880e9ecbd46362f95|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                            },
                            value: 0.2,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-22-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "67f13ff880e9ecbd46362f95|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                            },
                            value: 0.2,
                            unit: "",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x1743026328d,
            },
            "a-26": {
              id: "a-26",
              title: "Display Instagram Description Text",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-26-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".insta-post-text",
                          selectorGuids: [
                            "5d26471a-1707-b346-d941-e9ed9104ab75",
                          ],
                        },
                        xValue: 0.95,
                        yValue: 0.95,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-26-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".insta-post-text",
                          selectorGuids: [
                            "5d26471a-1707-b346-d941-e9ed9104ab75",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-26-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".insta-post-text",
                          selectorGuids: [
                            "5d26471a-1707-b346-d941-e9ed9104ab75",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-26-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".insta-post-text",
                          selectorGuids: [
                            "5d26471a-1707-b346-d941-e9ed9104ab75",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x174358710fd,
            },
            "a-27": {
              id: "a-27",
              title: "Hide Instagram Description Text",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-27-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".insta-post-text",
                          selectorGuids: [
                            "5d26471a-1707-b346-d941-e9ed9104ab75",
                          ],
                        },
                        xValue: 0.95,
                        yValue: 0.95,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-27-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".insta-post-text",
                          selectorGuids: [
                            "5d26471a-1707-b346-d941-e9ed9104ab75",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x174358710fd,
            },
            "a-11": {
              id: "a-11",
              title: "Display Project Image On Item Hover",
              continuousParameterGroups: [
                {
                  id: "a-11-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-11-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            xValue: 0,
                            xUnit: "VW",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-11-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            xValue: 100,
                            xUnit: "VW",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-11-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-11-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            yValue: 0,
                            xUnit: "VW",
                            yUnit: "VH",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-11-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            yValue: 100,
                            xUnit: "VW",
                            yUnit: "VH",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x173fd893248,
            },
            "a-42": {
              id: "a-42",
              title: "Mouse Follow Small Circle Cursor",
              continuousParameterGroups: [
                {
                  id: "a-42-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-42-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-small-circle",
                              selectorGuids: [
                                "dff252e1-f7cb-9989-9062-accb1d38471e",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-42-n-9",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-arrow",
                              selectorGuids: [
                                "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                              ],
                            },
                            xValue: 0,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-42-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-small-circle",
                              selectorGuids: [
                                "dff252e1-f7cb-9989-9062-accb1d38471e",
                              ],
                            },
                            xValue: 100,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-42-n-10",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-arrow",
                              selectorGuids: [
                                "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                              ],
                            },
                            xValue: 100,
                            xUnit: "vw",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-42-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-42-n-7",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-small-circle",
                              selectorGuids: [
                                "dff252e1-f7cb-9989-9062-accb1d38471e",
                              ],
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-42-n-11",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-arrow",
                              selectorGuids: [
                                "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                              ],
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-42-n-8",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-small-circle",
                              selectorGuids: [
                                "dff252e1-f7cb-9989-9062-accb1d38471e",
                              ],
                            },
                            yValue: 100,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-42-n-12",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".cursor-arrow",
                              selectorGuids: [
                                "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                              ],
                            },
                            yValue: 100,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x1785f3f3a1b,
            },
            "a-33": {
              id: "a-33",
              title: "Post Item Animate On Hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-33-n-5",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".post-item-image",
                          selectorGuids: [
                            "9fb0e910-1fae-e70e-3afc-40c3cf1bb5fe",
                          ],
                        },
                        xValue: 1.05,
                        yValue: 1.05,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-33-n-6",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".post-item-image",
                          selectorGuids: [
                            "9fb0e910-1fae-e70e-3afc-40c3cf1bb5fe",
                          ],
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17449fa47ac,
            },
            "a-34": {
              id: "a-34",
              title: "Post Item Animate On Hover Out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-34-n-5",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".post-item-image",
                          selectorGuids: [
                            "9fb0e910-1fae-e70e-3afc-40c3cf1bb5fe",
                          ],
                        },
                        xValue: 1.05,
                        yValue: 1.05,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17449fa47ac,
            },
            "a-36": {
              id: "a-36",
              title: "Transform Instagram Image",
              continuousParameterGroups: [
                {
                  id: "a-36-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-36-n-5",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".instagram-image-holder",
                              selectorGuids: [
                                "e81a6283-e46d-126e-1a96-14f50d4fe213",
                              ],
                            },
                            xValue: null,
                            yValue: 5,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-36-n-10",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".insta-post-text",
                              selectorGuids: [
                                "5d26471a-1707-b346-d941-e9ed9104ab75",
                              ],
                            },
                            xValue: -20,
                            yValue: null,
                            zValue: 30,
                            xUnit: "px",
                            yUnit: "px",
                            zUnit: "px",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-36-n-6",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".instagram-image-holder",
                              selectorGuids: [
                                "e81a6283-e46d-126e-1a96-14f50d4fe213",
                              ],
                            },
                            xValue: null,
                            yValue: -5,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-36-n-9",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".insta-post-text",
                              selectorGuids: [
                                "5d26471a-1707-b346-d941-e9ed9104ab75",
                              ],
                            },
                            xValue: 20,
                            yValue: null,
                            zValue: 30,
                            xUnit: "px",
                            yUnit: "px",
                            zUnit: "px",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-36-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-36-n-7",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".instagram-image-holder",
                              selectorGuids: [
                                "e81a6283-e46d-126e-1a96-14f50d4fe213",
                              ],
                            },
                            xValue: -5,
                            yValue: null,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-36-n-11",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".insta-post-text",
                              selectorGuids: [
                                "5d26471a-1707-b346-d941-e9ed9104ab75",
                              ],
                            },
                            yValue: -20,
                            xUnit: "PX",
                            yUnit: "px",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-36-n-8",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".instagram-image-holder",
                              selectorGuids: [
                                "e81a6283-e46d-126e-1a96-14f50d4fe213",
                              ],
                            },
                            xValue: 5,
                            yValue: null,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-36-n-12",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".insta-post-text",
                              selectorGuids: [
                                "5d26471a-1707-b346-d941-e9ed9104ab75",
                              ],
                            },
                            yValue: 30,
                            xUnit: "PX",
                            yUnit: "px",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x174543a55f9,
            },
            "a-37": {
              id: "a-37",
              title: "Fade Move In Element On Scroll into View",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-37-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|7cfc0610-17c8-cfb3-1dab-3d44d138f306",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-37-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|7cfc0610-17c8-cfb3-1dab-3d44d138f306",
                        },
                        yValue: 20,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-37-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 1200,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|7cfc0610-17c8-cfb3-1dab-3d44d138f306",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-37-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 1e3,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|7cfc0610-17c8-cfb3-1dab-3d44d138f306",
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x174690a9058,
            },
            "a-38": {
              id: "a-38",
              title: "Fade In Slow - On Scroll into View",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-38-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|e74ed22c-3155-00fa-e7e3-df8b5875d506",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-38-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 500,
                        easing: "ease",
                        duration: 1200,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|e74ed22c-3155-00fa-e7e3-df8b5875d506",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x174690d2ab4,
            },
            "a-40": {
              id: "a-40",
              title: "Display Project Image On Scroll 2",
              continuousParameterGroups: [
                {
                  id: "a-40-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 40,
                      actionItems: [
                        {
                          id: "a-40-n",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            value: 0,
                            unit: "",
                          },
                        },
                        {
                          id: "a-40-n-4",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            zValue: -10,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 50,
                      actionItems: [
                        {
                          id: "a-40-n-3",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                        {
                          id: "a-40-n-5",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            zValue: 0,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 60,
                      actionItems: [
                        {
                          id: "a-40-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            value: 0,
                            unit: "",
                          },
                        },
                        {
                          id: "a-40-n-6",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".project-item-image",
                              selectorGuids: [
                                "faadcee7-605a-9d8c-5d03-347937045d36",
                              ],
                            },
                            zValue: 10,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x175a9dd115f,
            },
            "a-43": {
              id: "a-43",
              title: "Display Big Cursor Arrow - Link Hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-43-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor-small-circle",
                          selectorGuids: [
                            "dff252e1-f7cb-9989-9062-accb1d38471e",
                          ],
                        },
                        widthValue: 22,
                        heightValue: 22,
                        widthUnit: "px",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-43-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor-big-circle",
                          selectorGuids: [
                            "28e7601e-9ed2-cda2-719e-de617500fcfb",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-43-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-43-n-4",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        xValue: 0.2,
                        yValue: 0.2,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-43-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".link-underline",
                          selectorGuids: [
                            "eb757645-e5c9-6d26-b70b-7432ef5ec849",
                          ],
                        },
                        xValue: -102,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-43-n-6",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-small-circle",
                          selectorGuids: [
                            "dff252e1-f7cb-9989-9062-accb1d38471e",
                          ],
                        },
                        widthValue: 100,
                        heightValue: 100,
                        widthUnit: "px",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-43-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-big-circle",
                          selectorGuids: [
                            "28e7601e-9ed2-cda2-719e-de617500fcfb",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-43-n-8",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-43-n-9",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          selector: ".cursor-arrow",
                          selectorGuids: [
                            "6e0cd611-ac3c-85d1-ceb8-23f02a835d8c",
                          ],
                        },
                        xValue: 2,
                        yValue: 2,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-43-n-10",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".link-underline",
                          selectorGuids: [
                            "eb757645-e5c9-6d26-b70b-7432ef5ec849",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fc759506,
            },
            "a-44": {
              id: "a-44",
              title: "Infinit Carousel Loop",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-44-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".infinite-carousel._1",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "798a6e84-a524-2fb2-7963-ccfe0f330764",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-44-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".infinite-carousel._2",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "17ecd9fc-c63e-8473-b96d-91fdfc9fa333",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-44-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 15e3,
                        target: {
                          selector: ".infinite-carousel._1",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "798a6e84-a524-2fb2-7963-ccfe0f330764",
                          ],
                        },
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-44-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 15e3,
                        target: {
                          selector: ".infinite-carousel._2",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "17ecd9fc-c63e-8473-b96d-91fdfc9fa333",
                          ],
                        },
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-44-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".infinite-carousel._1",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "798a6e84-a524-2fb2-7963-ccfe0f330764",
                          ],
                        },
                        xValue: 100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-44-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".infinite-carousel._2",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "17ecd9fc-c63e-8473-b96d-91fdfc9fa333",
                          ],
                        },
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-44-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 15e3,
                        target: {
                          selector: ".infinite-carousel._1",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "798a6e84-a524-2fb2-7963-ccfe0f330764",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-44-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 15e3,
                        target: {
                          selector: ".infinite-carousel._2",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "17ecd9fc-c63e-8473-b96d-91fdfc9fa333",
                          ],
                        },
                        xValue: -200,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-44-n-9",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".infinite-carousel._1",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "798a6e84-a524-2fb2-7963-ccfe0f330764",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-44-n-10",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".infinite-carousel._2",
                          selectorGuids: [
                            "c6082a1a-8cd9-21f8-51ff-ff7f93d51e98",
                            "17ecd9fc-c63e-8473-b96d-91fdfc9fa333",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1785fd4b085,
            },
            "a-45": {
              id: "a-45",
              title: "Display Service Icons On Scroll",
              continuousParameterGroups: [
                {
                  id: "a-45-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 25,
                      actionItems: [
                        {
                          id: "a-45-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            yValue: -67,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-45-n-6",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 31,
                      actionItems: [
                        {
                          id: "a-45-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            yValue: -67,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-45-n-7",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 33,
                      actionItems: [
                        {
                          id: "a-45-n-8",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 0.4,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 43,
                      actionItems: [
                        {
                          id: "a-45-n-9",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 0.4,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 45,
                      actionItems: [
                        {
                          id: "a-45-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            yValue: -6,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-45-n-10",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 56,
                      actionItems: [
                        {
                          id: "a-45-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            yValue: 4,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-45-n-11",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 58,
                      actionItems: [
                        {
                          id: "a-45-n-12",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 0.4,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 73,
                      actionItems: [
                        {
                          id: "a-45-n-13",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 0.4,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 75,
                      actionItems: [
                        {
                          id: "a-45-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            yValue: 67,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-45-n-14",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".service-icons",
                              selectorGuids: [
                                "79267dc7-7f0a-9224-e214-c8fa027dd5d3",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17864bf2351,
            },
            "a-46": {
              id: "a-46",
              title: "Hide Nav On Black Section",
              continuousParameterGroups: [
                {
                  id: "a-46-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 27,
                      actionItems: [
                        {
                          id: "a-46-n",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".fixed-nav",
                              selectorGuids: [
                                "76c2403f-c27b-7ac6-9cba-42bdcb6612d2",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 28,
                      actionItems: [
                        {
                          id: "a-46-n-3",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".fixed-nav",
                              selectorGuids: [
                                "76c2403f-c27b-7ac6-9cba-42bdcb6612d2",
                              ],
                            },
                            value: 0,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 96,
                      actionItems: [
                        {
                          id: "a-46-n-4",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".fixed-nav",
                              selectorGuids: [
                                "76c2403f-c27b-7ac6-9cba-42bdcb6612d2",
                              ],
                            },
                            value: 0,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-46-n-5",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".fixed-nav",
                              selectorGuids: [
                                "76c2403f-c27b-7ac6-9cba-42bdcb6612d2",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17869523932,
            },
            "a-47": {
              id: "a-47",
              title: "Circle Image Rotate Loop",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-47-n",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".circle-image",
                          selectorGuids: [
                            "a5e64d1d-661a-795c-4efe-56e560f30fd8",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-47-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 15e3,
                        target: {
                          selector: ".circle-image",
                          selectorGuids: [
                            "a5e64d1d-661a-795c-4efe-56e560f30fd8",
                          ],
                        },
                        zValue: -360,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-47-n-3",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".circle-image",
                          selectorGuids: [
                            "a5e64d1d-661a-795c-4efe-56e560f30fd8",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17869a50037,
            },
            "a-48": {
              id: "a-48",
              title: "Perspective Load1 On View",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-48-n-23",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        yValue: 60,
                        zValue: -3,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-48-n-24",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-48-n-25",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-48-n-27",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 300,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-48-n-26",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 300,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        yValue: 0,
                        zValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-48-n-28",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 300,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fd153918,
            },
            "a-49": {
              id: "a-49",
              title: "Perspective Load2 On View",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-49-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        yValue: 60,
                        zValue: -3,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-49-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-49-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-49-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 500,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-49-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 500,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-49-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 500,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        yValue: 0,
                        zValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fd153918,
            },
            "a-50": {
              id: "a-50",
              title: "Perspective Load3 On View",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-50-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        yValue: 60,
                        zValue: -3,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                    {
                      id: "a-50-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        xValue: -100,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-50-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-50-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 700,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-50-n-5",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 700,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        xValue: 0,
                        xUnit: "deg",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-50-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 700,
                        easing: "ease",
                        duration: 800,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        yValue: 0,
                        zValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "vw",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fd153918,
            },
            "a-51": {
              id: "a-51",
              title: "Scale In View",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-51-n-7",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        xValue: 0.7,
                        yValue: 0.7,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-51-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-51-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 500,
                        easing: "ease",
                        duration: 600,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-51-n-8",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 500,
                        easing: "ease",
                        duration: 600,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|b239b8e5-e32b-992b-3449-9b54c8f88aed",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x173fd153918,
            },
            "a-52": {
              id: "a-52",
              title: "Display Project Item Image On Scroll",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-52-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image-overlay",
                          selectorGuids: [
                            "c3891ec1-5e13-b73c-7c99-985a02d79e79",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-52-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image-overlay",
                          selectorGuids: [
                            "c3891ec1-5e13-b73c-7c99-985a02d79e79",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-52-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 300,
                        easing: "inOutCubic",
                        duration: 1500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".project-item-image-overlay",
                          selectorGuids: [
                            "c3891ec1-5e13-b73c-7c99-985a02d79e79",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1786e066622,
            },
            "a-53": {
              id: "a-53",
              title: "Fade In Slow 2 - On Scroll into View",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-53-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|e74ed22c-3155-00fa-e7e3-df8b5875d506",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-53-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 600,
                        easing: "ease",
                        duration: 1200,
                        target: {
                          useEventTarget: !0,
                          id: "67f13ff880e9ecbd46362f91|e74ed22c-3155-00fa-e7e3-df8b5875d506",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x174690d2ab4,
            },
            "a-55": {
              id: "a-55",
              title: "Hide White Image",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-55-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".white-bg-over-image",
                          selectorGuids: [
                            "298f9fc9-35c3-eade-76bf-2c9461be8c22",
                          ],
                        },
                        value: "block",
                      },
                    },
                    {
                      id: "a-55-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".white-bg-over-image",
                          selectorGuids: [
                            "298f9fc9-35c3-eade-76bf-2c9461be8c22",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-55-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 400,
                        easing: "inOutQuart",
                        duration: 1200,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".white-bg-over-image",
                          selectorGuids: [
                            "298f9fc9-35c3-eade-76bf-2c9461be8c22",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x178797ea112,
            },
            "a-56": {
              id: "a-56",
              title: "Display Project Name Field - On Click",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-56-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a4",
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-56-n-2",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a4",
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1787e45d002,
            },
            "a-57": {
              id: "a-57",
              title: "Display Message Field - On Click",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-57-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a8",
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-57-n-4",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          id: "67f13ff880e9ecbd46362f9a|3ca97992-11d1-c398-d97a-6b8f0442e2a8",
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1787e45d002,
            },
            "a-58": {
              id: "a-58",
              title: "Open Accordion - On Click",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-58-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".accordion-body",
                          selectorGuids: [
                            "36be4189-fd6a-7463-a0cf-345f2cf561b0",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-58-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".accordion-icon",
                          selectorGuids: [
                            "36be4189-fd6a-7463-a0cf-345f2cf561af",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-58-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".accordion-body",
                          selectorGuids: [
                            "36be4189-fd6a-7463-a0cf-345f2cf561b0",
                          ],
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-58-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".accordion-icon",
                          selectorGuids: [
                            "36be4189-fd6a-7463-a0cf-345f2cf561af",
                          ],
                        },
                        zValue: 45,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x176687790e1,
            },
            "a-59": {
              id: "a-59",
              title: "Close Accordion - On Click",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-59-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".accordion-body",
                          selectorGuids: [
                            "36be4189-fd6a-7463-a0cf-345f2cf561b0",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-59-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".accordion-icon",
                          selectorGuids: [
                            "36be4189-fd6a-7463-a0cf-345f2cf561af",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x176687790e1,
            },
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 1e4 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 },
            ],
          },
        });
      },
    },
    t = {};
  function n(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var o = (t[i] = { id: i, loaded: !1, exports: {} });
    return e[i](o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.d = function (e, t) {
    for (var i in t)
      n.o(t, i) &&
        !n.o(e, i) &&
        Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
  }),
    (n.hmd = function (e) {
      return (
        !(e = Object.create(e)).children && (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), !e.children && (e.children = []), e;
    }),
    (n.rv = function () {
      return "1.1.8";
    }),
    (n.ruid = "bundler=rspack@1.1.8");
  n(9461),
    n(7624),
    n(286),
    n(8334),
    n(2338),
    n(3695),
    n(941),
    n(5134),
    n(1655),
    n(7527),
    n(9705);
})();
