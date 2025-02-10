!(function (n, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.CircleSlices = e())
    : (n.CircleSlices = e());
})(this, function () {
  return (function () {
    "use strict";
    var n = {
        687: function (n, e, t) {
          var r = t(601),
            i = t.n(r),
            o = t(314),
            c = t.n(o)()(i());
          c.push([
            n.id,
            '.circle {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  position: relative;\n  border: 2px solid green;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  background-color: white;\n  transition: 1s;\n}\n\n.slice-line {\n  position: absolute;\n  height: 2px;\n  top: calc(50% - 1px);\n  left: 0;\n  right: 0;\n  border-right: var(--line-width) solid var(--color);\n  transform: rotate(var(--angle));\n  box-sizing: border-box;\n}\n.slice-text {\n  position: absolute;\n  height: 0;\n  line-height: 0;\n  top: calc(50%);\n  left: 0;\n  right: 0;\n  border-left: var(--text-width) solid transparent;\n  transform: rotate(var(--angle));\n  box-sizing: border-box;\n  padding-left: var(--padding-start);\n  display: flex;\n  align-items: center;\n}\n.phrase-inner {\n  /* TODO initial font size */\n  font-size: 16px;\n  line-height: 24px;\n  z-index: 1;\n  width: 100%;\n  padding: 0 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.phrase-inner:hover {\n  color: #0096d6;\n}\n\n.circle-slice-group {\n  --zoom: 100%;\n  zoom: var(--zoom);\n  background: #d2f7d5;\n  border-width: 4px;\n}\n.circle-slices {\n  background: #ddf0df;\n}\n.circle-slice-group > .slice-line {\n  height: 4px;\n  top: calc(50% - 2px);\n  z-index: 1;\n}\n.circle-slice-group > .slice-text {\n  font-weight: bold;\n  text-align: center;\n  color: #057988;\n}\n\n/* .rotate90 */\n.circle-slice-group > .slice-text {\n  justify-content: center;\n}\n.circle-slice-group > .slice-text > .phrase-inner {\n  transform: rotate(90deg);\n  position: absolute;\n  width: 150px;\n}\n\n.circle-slice-group > .slice-text > .phrase-inner:hover {\n  /*font-size: 18px;*/\n}\n\n.circle-slices .phrase-inner {\n  text-wrap: nowrap;\n  padding: 0 5px 0 20px;\n}\n.circle-slices .phrase-inner:hover {\n  color: #0096d6;\n  padding-left: 35px;\n}\n\n.circle-slice-center {\n  z-index: 1;\n  width: 250px;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n}\n.circle-slice-center h2 {\n  margin: 0;\n  font-size: 20px;\n  font-variant-caps: small-caps;\n}\n.circle-slice-center > .grid {\n  margin: 10px 12px;\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.grid > div {\n  padding: 15px 5px 15px 5px;\n  display: flex;\n  align-items: center;\n}\n\n.grid div:nth-child(1),\n.grid div:nth-child(3) {\n  border-right: 2px solid #333333;\n  text-align: right;\n  padding-left: 0;\n}\n.grid div:nth-child(1),\n.grid div:nth-child(2) {\n  border-bottom: 2px solid #333333;\n}\n\n.no-transition {\n  transition: none !important;\n}\n\n/* TODO disable animations when render ?*/\n\n/* TODO move to custom settings / css */\n.circle-slice-group > .slice-text[data-index="8"] > .phrase-inner {\n  width: 180px;\n}\n',
            "",
          ]),
            (e.A = c);
        },
        314: function (n) {
          n.exports = function (n) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var t = "",
                    r = void 0 !== e[5];
                  return (
                    e[4] && (t += "@supports (".concat(e[4], ") {")),
                    e[2] && (t += "@media ".concat(e[2], " {")),
                    r &&
                      (t += "@layer".concat(
                        e[5].length > 0 ? " ".concat(e[5]) : "",
                        " {"
                      )),
                    (t += n(e)),
                    r && (t += "}"),
                    e[2] && (t += "}"),
                    e[4] && (t += "}"),
                    t
                  );
                }).join("");
              }),
              (e.i = function (n, t, r, i, o) {
                "string" == typeof n && (n = [[null, n, void 0]]);
                var c = {};
                if (r)
                  for (var a = 0; a < this.length; a++) {
                    var s = this[a][0];
                    null != s && (c[s] = !0);
                  }
                for (var l = 0; l < n.length; l++) {
                  var u = [].concat(n[l]);
                  (r && c[u[0]]) ||
                    (void 0 !== o &&
                      (void 0 === u[5] ||
                        (u[1] = "@layer"
                          .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                          .concat(u[1], "}")),
                      (u[5] = o)),
                    t &&
                      (u[2]
                        ? ((u[1] = "@media "
                            .concat(u[2], " {")
                            .concat(u[1], "}")),
                          (u[2] = t))
                        : (u[2] = t)),
                    i &&
                      (u[4]
                        ? ((u[1] = "@supports ("
                            .concat(u[4], ") {")
                            .concat(u[1], "}")),
                          (u[4] = i))
                        : (u[4] = "".concat(i))),
                    e.push(u));
                }
              }),
              e
            );
          };
        },
        601: function (n) {
          n.exports = function (n) {
            return n[1];
          };
        },
        72: function (n) {
          var e = [];
          function t(n) {
            for (var t = -1, r = 0; r < e.length; r++)
              if (e[r].identifier === n) {
                t = r;
                break;
              }
            return t;
          }
          function r(n, r) {
            for (var o = {}, c = [], a = 0; a < n.length; a++) {
              var s = n[a],
                l = r.base ? s[0] + r.base : s[0],
                u = o[l] || 0,
                d = "".concat(l, " ").concat(u);
              o[l] = u + 1;
              var f = t(d),
                p = {
                  css: s[1],
                  media: s[2],
                  sourceMap: s[3],
                  supports: s[4],
                  layer: s[5],
                };
              if (-1 !== f) e[f].references++, e[f].updater(p);
              else {
                var h = i(p, r);
                (r.byIndex = a),
                  e.splice(a, 0, { identifier: d, updater: h, references: 1 });
              }
              c.push(d);
            }
            return c;
          }
          function i(n, e) {
            var t = e.domAPI(e);
            return (
              t.update(n),
              function (e) {
                if (e) {
                  if (
                    e.css === n.css &&
                    e.media === n.media &&
                    e.sourceMap === n.sourceMap &&
                    e.supports === n.supports &&
                    e.layer === n.layer
                  )
                    return;
                  t.update((n = e));
                } else t.remove();
              }
            );
          }
          n.exports = function (n, i) {
            var o = r((n = n || []), (i = i || {}));
            return function (n) {
              n = n || [];
              for (var c = 0; c < o.length; c++) {
                var a = t(o[c]);
                e[a].references--;
              }
              for (var s = r(n, i), l = 0; l < o.length; l++) {
                var u = t(o[l]);
                0 === e[u].references && (e[u].updater(), e.splice(u, 1));
              }
              o = s;
            };
          };
        },
        659: function (n) {
          var e = {};
          n.exports = function (n, t) {
            var r = (function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (n) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            })(n);
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(t);
          };
        },
        540: function (n) {
          n.exports = function (n) {
            var e = document.createElement("style");
            return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
          };
        },
        56: function (n, e, t) {
          n.exports = function (n) {
            var e = t.nc;
            e && n.setAttribute("nonce", e);
          };
        },
        825: function (n) {
          n.exports = function (n) {
            if ("undefined" == typeof document)
              return { update: function () {}, remove: function () {} };
            var e = n.insertStyleElement(n);
            return {
              update: function (t) {
                !(function (n, e, t) {
                  var r = "";
                  t.supports && (r += "@supports (".concat(t.supports, ") {")),
                    t.media && (r += "@media ".concat(t.media, " {"));
                  var i = void 0 !== t.layer;
                  i &&
                    (r += "@layer".concat(
                      t.layer.length > 0 ? " ".concat(t.layer) : "",
                      " {"
                    )),
                    (r += t.css),
                    i && (r += "}"),
                    t.media && (r += "}"),
                    t.supports && (r += "}");
                  var o = t.sourceMap;
                  o &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                        " */"
                      )),
                    e.styleTagTransform(r, n, e.options);
                })(e, n, t);
              },
              remove: function () {
                !(function (n) {
                  if (null === n.parentNode) return !1;
                  n.parentNode.removeChild(n);
                })(e);
              },
            };
          };
        },
        113: function (n) {
          n.exports = function (n, e) {
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(n));
            }
          };
        },
      },
      e = {};
    function t(r) {
      var i = e[r];
      if (void 0 !== i) return i.exports;
      var o = (e[r] = { id: r, exports: {} });
      return n[r](o, o.exports, t), o.exports;
    }
    (t.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return t.d(e, { a: e }), e;
    }),
      (t.d = function (n, e) {
        for (var r in e)
          t.o(e, r) &&
            !t.o(n, r) &&
            Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
      }),
      (t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
      }),
      (t.r = function (n) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (t.nc = void 0);
    var r = {};
    t.r(r),
      t.d(r, {
        render: function () {
          return C;
        },
        rotate: function () {
          return I;
        },
        update: function () {
          return L;
        },
      });
    var i = t(72),
      o = t.n(i),
      c = t(825),
      a = t.n(c),
      s = t(659),
      l = t.n(s),
      u = t(56),
      d = t.n(u),
      f = t(540),
      p = t.n(f),
      h = t(113),
      v = t.n(h),
      y = t(687),
      g = {};
    function m(n, e) {
      if (n) {
        if ("string" == typeof n) return b(n, e);
        var t = {}.toString.call(n).slice(8, -1);
        return (
          "Object" === t && n.constructor && (t = n.constructor.name),
          "Map" === t || "Set" === t
            ? Array.from(n)
            : "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            ? b(n, e)
            : void 0
        );
      }
    }
    function b(n, e) {
      (null == e || e > n.length) && (e = n.length);
      for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
      return r;
    }
    function x(n, e) {
      return (e || document).querySelector(n);
    }
    function w(n, e) {
      return (
        (function (n) {
          if (Array.isArray(n)) return b(n);
        })((t = (e || document).querySelectorAll(n))) ||
        (function (n) {
          if (
            ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
            null != n["@@iterator"]
          )
            return Array.from(n);
        })(t) ||
        m(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
      var t;
    }
    function S(n, e, t) {
      var r = !1;
      return (
        w(n).forEach(function (n) {
          if (n.offsetWidth < n.scrollWidth) {
            var i;
            if (((r = !0), e)) {
              var o = w(e, n);
              o.sort(function (n, e) {
                return e.offsetWidth - n.offsetWidth;
              });
              var c =
                ((l = 1),
                (function (n) {
                  if (Array.isArray(n)) return n;
                })((s = o)) ||
                  (function (n, e) {
                    var t =
                      null == n
                        ? null
                        : ("undefined" != typeof Symbol &&
                            n[Symbol.iterator]) ||
                          n["@@iterator"];
                    if (null != t) {
                      var r,
                        i,
                        o,
                        c,
                        a = [],
                        s = !0,
                        l = !1;
                      try {
                        if (((o = (t = t.call(n)).next), 0 === e)) {
                          if (Object(t) !== t) return;
                          s = !1;
                        } else
                          for (
                            ;
                            !(s = (r = o.call(t)).done) &&
                            (a.push(r.value), a.length !== e);
                            s = !0
                          );
                      } catch (n) {
                        (l = !0), (i = n);
                      } finally {
                        try {
                          if (
                            !s &&
                            null != t.return &&
                            ((c = t.return()), Object(c) !== c)
                          )
                            return;
                        } finally {
                          if (l) throw i;
                        }
                      }
                      return a;
                    }
                  })(s, l) ||
                  m(s, l) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })());
              i = c[0];
            } else i = n;
            var a = parseInt(i.style.fontSize || t) - 1;
            i.classList.add("no-transition"),
              (i.style.fontSize = "".concat(a, "px")),
              setTimeout(function () {
                i.classList.remove("no-transition");
              }, 1),
              a < 2 && (console.warn("Font size is too small", n), (r = !1));
          }
          var s, l;
        }),
        r
      );
    }
    function T(n) {
      return (
        (T =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              }),
        T(n)
      );
    }
    function j(n) {
      return (
        (function (n) {
          if (Array.isArray(n)) return O(n);
        })(n) ||
        (function (n) {
          if (
            ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
            null != n["@@iterator"]
          )
            return Array.from(n);
        })(n) ||
        (function (n, e) {
          if (n) {
            if ("string" == typeof n) return O(n, e);
            var t = {}.toString.call(n).slice(8, -1);
            return (
              "Object" === t && n.constructor && (t = n.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(n)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? O(n, e)
                : void 0
            );
          }
        })(n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function O(n, e) {
      (null == e || e > n.length) && (e = n.length);
      for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
      return r;
    }
    function A(n, e) {
      var t = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(n);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })),
          t.push.apply(t, r);
      }
      return t;
    }
    function M(n, e, t) {
      return (
        (e = (function (n) {
          var e = (function (n) {
            if ("object" != T(n) || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
              var t = e.call(n, "string");
              if ("object" != T(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(n);
          })(n);
          return "symbol" == T(e) ? e : e + "";
        })(e)) in n
          ? Object.defineProperty(n, e, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[e] = t),
        n
      );
    }
    (g.styleTagTransform = v()),
      (g.setAttributes = d()),
      (g.insert = l().bind(null, "head")),
      (g.domAPI = a()),
      (g.insertStyleElement = p()),
      o()(y.A, g),
      y.A && y.A.locals && y.A.locals;
    var P = {
      renderTo: "#groups",
      groupSize: 1100,
      slicesSize: 950,
      centerSize: 250,
      text: "",
      centerText: "",
      titles: [],
      phrases: [],
    };
    function z(n) {
      var e = n
        .split("\n")
        .map(function (n) {
          return n.trim();
        })
        .filter(function (n) {
          return n.length > 0;
        });
      return {
        titles: e.reduce(function (n, e) {
          return (
            e.startsWith("#")
              ? n.push({ text: e.substring(1).trim(), children: [] })
              : n[n.length - 1].children.push(e),
            n
          );
        }, []),
        phrases: (e = e
          .filter(function (n) {
            return !n.startsWith("#");
          })
          .map(function (n) {
            return { text: n };
          })),
      };
    }
    function E(n, e) {
      var t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 800,
        r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 250,
        i = arguments.length > 4 ? arguments[4] : void 0,
        o = arguments.length > 5 ? arguments[5] : void 0;
      "string" == typeof n && (n = x(n)),
        (n.style.width = "".concat(t, "px")),
        (n.style.height = "".concat(t, "px")),
        n.style.setProperty("--line-width", "".concat(i || (t - r) / 2, "px")),
        n.style.setProperty("--text-width", "".concat((t - r) / 2, "px")),
        n.style.setProperty("--padding-start", "".concat(r, "px"));
      var c = (function (n, e) {
        var t = n.reduce(function (n, e) {
            return n + (e.children || [1]).length;
          }, 0),
          r = 360 / t,
          i = t % 2 == 1 ? 0 : 1,
          o = 0;
        return n.map(function (n, t) {
          var c = n.text,
            a = n.children,
            s = (void 0 === a ? [] : a).length || 1;
          o += s;
          var l = Math.round(s * r),
            u = Math.round(o * r - r / 2),
            d = e || "hsl(".concat(Math.round(o * r), ", 100%, 50%)"),
            f = u + i * Math.round(r / 2),
            p = u - l / 2 + i * Math.round(r / 2);
          return {
            line: '<div data-index="'
              .concat(t + 1, '" class="slice-line" style="--angle: ')
              .concat(f, "deg; --color: ")
              .concat(d, '"></div>'),
            text: '<div data-index="'
              .concat(t + 1, '" class="slice-text" style="--angle: ')
              .concat(p, 'deg;">\n          <div class="phrase-inner">')
              .concat(c, "</div>\n        </div>"),
          };
        });
      })(e, o);
      return (
        (n.innerHTML = c
          .map(function (n) {
            return n.line;
          })
          .join("")),
        (n.innerHTML += c
          .map(function (n) {
            return n.text;
          })
          .join("")),
        n
      );
    }
    function I(n, e) {
      "number" != typeof e && (e = parseFloat(e));
      var t = x(n);
      (t.style.transform = "rotate(".concat(e, "deg)")),
        (x(".circle-slice-center", t).style.transform = "rotate(".concat(
          -1 * e,
          "deg)"
        ));
    }
    function C(n) {
      var e = (function (n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(t), !0).forEach(function (e) {
                M(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  n,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return n;
      })({}, P);
      Object.assign(e, n);
      var t = z(e.text),
        r = t.phrases,
        i = t.titles;
      return (
        Object.assign(e, { phrases: r, titles: i }),
        (function (n) {
          var e = n.groupSize,
            t = n.slicesSize,
            r = n.centerSize,
            i = x(n.renderTo);
          i
            ? i.id || (i.id = "groups")
            : (console.info("%o not found, creating it in body", n.renderTo),
              ((i = document.createElement("div")).id = n.renderTo.startsWith(
                "#"
              )
                ? n.renderTo.substring(1)
                : "groups"),
              document.body.appendChild(i)),
            i.classList.add("circle-slice-group", "circle");
          var o = E(n.renderTo, n.titles, e, t, (e - r) / 2);
          o.innerHTML += '<div class="circle-slices circle"></div>';
          var c = x(".circle-slices", o),
            a = i.id + "-slices";
          c.id = a;
          var s = E(c, n.phrases, t, r);
          (s.innerHTML += '<div class="circle-slice-center circle"></div>'),
            (function (n, e, t) {
              "string" == typeof n && (n = x(n)),
                (n.style.width = "".concat(e, "px")),
                (n.style.height = "".concat(e, "px"));
              var r = z(t).titles;
              (n.innerHTML = ""),
                r.forEach(function (e, t) {
                  var r = e.text,
                    i = e.children;
                  (n.innerHTML += "<h2>"
                    .concat(r, '</h2><div class="grid" id="inner-grid-')
                    .concat(t, '"></div>')),
                    (x("#inner-grid-".concat(t), n).innerHTML += i
                      .map(function (n) {
                        return '<div class="center-text">'.concat(n, "</div>");
                      })
                      .join(""));
                });
            })(x(".circle-slice-center", s), r, n.centerText),
            setTimeout(function () {
              !(function (n) {
                var e = !1,
                  t = 30;
                do {
                  (e = S(n, "", 26)), t--;
                } while (e && t > 0);
              })("#".concat(a, " .phrase-inner"));
            }, 1e3);
        })(e),
        (function (n) {
          if (n.default) {
            var e = n.phrases.findIndex(function (e) {
                return e.text === n.default;
              }),
              t = x('.slice-text[data-index="'.concat(e + 1, '"]'));
            if (t) {
              var r = parseFloat(
                t.style.getPropertyValue("--angle").replace("deg", "")
              );
              I(n.renderTo, -r);
            }
          }
          x(n.renderTo).addEventListener("click", function (e) {
            var t = e.target;
            if (t.closest(".phrase-inner")) {
              var r = t.closest(".slice-text"),
                i = parseFloat(
                  r.style.getPropertyValue("--angle").replace("deg", "")
                );
              I(n.renderTo, -i);
              var o = parseInt(r.getAttribute("data-index")) - 1;
              x(n.renderTo).dispatchEvent(
                new CustomEvent("rotate", {
                  detail: { angle: i, slice: r, index: o },
                })
              );
            }
          });
        })(e),
        { titles: j(i), phrases: j(r) }
      );
    }
    function L(n) {
      console.warn("not implemented yet", n);
    }
    return r;
  })();
});
