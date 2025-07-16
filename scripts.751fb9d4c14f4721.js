function initMap() {
  var s = new google.maps.LatLng(40.773328, -73.960088),
    A = {
      zoom: 14,
      center: s,
      mapTypeControl: !1,
      disableDefaultUI: !0,
      zoomControl: !0,
      scrollwheel: !1,
      styles: [
        {
          featureType: "water",
          stylers: [{ color: "#d8dee9" }, { visibility: "on" }],
        },
        { featureType: "landscape", stylers: [{ color: "#eeeeee" }] },
      ],
    },
    u = new google.maps.Map(document.getElementById("map"), A);
  new google.maps.Marker({ position: s, map: u, title: "We are here!" });
}
!(function (s, L) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = s.document
        ? L(s, !0)
        : function (A) {
            if (!A.document)
              throw new Error("jQuery requires a window with a document");
            return L(A);
          })
    : L(s);
})(typeof window < "u" ? window : this, function (s, L) {
  "use strict";
  var A = [],
    u = Object.getPrototypeOf,
    h = A.slice,
    n = A.flat
      ? function (e) {
          return A.flat.call(e);
        }
      : function (e) {
          return A.concat.apply([], e);
        },
    o = A.push,
    f = A.indexOf,
    m = {},
    b = m.toString,
    x = m.hasOwnProperty,
    S = x.toString,
    z = S.call(Object),
    c = {},
    R = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    _ = function (e) {
      return null != e && e === e.window;
    },
    p = s.document,
    C = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function q(e, i, r) {
    var l,
      d,
      g = (r = r || p).createElement("script");
    if (((g.text = e), i))
      for (l in C)
        (d = i[l] || (i.getAttribute && i.getAttribute(l))) &&
          g.setAttribute(l, d);
    r.head.appendChild(g).parentNode.removeChild(g);
  }
  function Y(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? m[b.call(e)] || "object"
      : typeof e;
  }
  var G = "3.6.0",
    a = function (e, i) {
      return new a.fn.init(e, i);
    };
  function K(e) {
    var i = !!e && "length" in e && e.length,
      r = Y(e);
    return (
      !R(e) &&
      !_(e) &&
      ("array" === r ||
        0 === i ||
        ("number" == typeof i && 0 < i && i - 1 in e))
    );
  }
  (a.fn = a.prototype =
    {
      jquery: G,
      constructor: a,
      length: 0,
      toArray: function () {
        return h.call(this);
      },
      get: function (e) {
        return null == e
          ? h.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var i = a.merge(this.constructor(), e);
        return (i.prevObject = this), i;
      },
      each: function (e) {
        return a.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          a.map(this, function (i, r) {
            return e.call(i, r, i);
          })
        );
      },
      slice: function () {
        return this.pushStack(h.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          a.grep(this, function (e, i) {
            return (i + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          a.grep(this, function (e, i) {
            return i % 2;
          })
        );
      },
      eq: function (e) {
        var i = this.length,
          r = +e + (e < 0 ? i : 0);
        return this.pushStack(0 <= r && r < i ? [this[r]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: o,
      sort: A.sort,
      splice: A.splice,
    }),
    (a.extend = a.fn.extend =
      function () {
        var e,
          i,
          r,
          l,
          d,
          g,
          v = arguments[0] || {},
          E = 1,
          I = arguments.length,
          O = !1;
        for (
          "boolean" == typeof v && ((O = v), (v = arguments[E] || {}), E++),
            "object" == typeof v || R(v) || (v = {}),
            E === I && ((v = this), E--);
          E < I;
          E++
        )
          if (null != (e = arguments[E]))
            for (i in e)
              (l = e[i]),
                "__proto__" !== i &&
                  v !== l &&
                  (O && l && (a.isPlainObject(l) || (d = Array.isArray(l)))
                    ? ((r = v[i]),
                      (g =
                        d && !Array.isArray(r)
                          ? []
                          : d || a.isPlainObject(r)
                          ? r
                          : {}),
                      (d = !1),
                      (v[i] = a.extend(O, g, l)))
                    : void 0 !== l && (v[i] = l));
        return v;
      }),
    a.extend({
      expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var i, r;
        return !(
          !e ||
          "[object Object]" !== b.call(e) ||
          ((i = u(e)) &&
            ("function" !=
              typeof (r = x.call(i, "constructor") && i.constructor) ||
              S.call(r) !== z))
        );
      },
      isEmptyObject: function (e) {
        var i;
        for (i in e) return !1;
        return !0;
      },
      globalEval: function (e, i, r) {
        q(e, { nonce: i && i.nonce }, r);
      },
      each: function (e, i) {
        var r,
          l = 0;
        if (K(e))
          for (r = e.length; l < r && !1 !== i.call(e[l], l, e[l]); l++);
        else for (l in e) if (!1 === i.call(e[l], l, e[l])) break;
        return e;
      },
      makeArray: function (e, i) {
        var r = i || [];
        return (
          null != e &&
            (K(Object(e))
              ? a.merge(r, "string" == typeof e ? [e] : e)
              : o.call(r, e)),
          r
        );
      },
      inArray: function (e, i, r) {
        return null == i ? -1 : f.call(i, e, r);
      },
      merge: function (e, i) {
        for (var r = +i.length, l = 0, d = e.length; l < r; l++) e[d++] = i[l];
        return (e.length = d), e;
      },
      grep: function (e, i, r) {
        for (var l = [], d = 0, g = e.length, v = !r; d < g; d++)
          !i(e[d], d) !== v && l.push(e[d]);
        return l;
      },
      map: function (e, i, r) {
        var l,
          d,
          g = 0,
          v = [];
        if (K(e))
          for (l = e.length; g < l; g++)
            null != (d = i(e[g], g, r)) && v.push(d);
        else for (g in e) null != (d = i(e[g], g, r)) && v.push(d);
        return n(v);
      },
      guid: 1,
      support: c,
    }),
    "function" == typeof Symbol && (a.fn[Symbol.iterator] = A[Symbol.iterator]),
    a.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, i) {
        m["[object " + i + "]"] = i.toLowerCase();
      }
    );
  var ut = (function (e) {
    var i,
      r,
      l,
      d,
      g,
      v,
      E,
      I,
      O,
      N,
      B,
      P,
      H,
      Z,
      tt,
      J,
      wt,
      zt,
      Gt,
      vt = "sizzle" + 1 * new Date(),
      ot = e.document,
      Vt = 0,
      dt = 0,
      _t = ti(),
      Be = ti(),
      Je = ti(),
      Xt = ti(),
      we = function (y, T) {
        return y === T && (B = !0), 0;
      },
      Le = {}.hasOwnProperty,
      Ut = [],
      Ae = Ut.pop,
      ne = Ut.push,
      Ct = Ut.push,
      Zt = Ut.slice,
      Jt = function (y, T) {
        for (var D = 0, W = y.length; D < W; D++) if (y[D] === T) return D;
        return -1;
      },
      fe =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      at = "[\\x20\\t\\r\\n\\f]",
      pt =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        at +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      Lt =
        "\\[" +
        at +
        "*(" +
        pt +
        ")(?:" +
        at +
        "*([*^$|!~]?=)" +
        at +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        pt +
        "))|)" +
        at +
        "*\\]",
      Kt =
        ":(" +
        pt +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        Lt +
        ")*)|.*)\\)|)",
      St = new RegExp(at + "+", "g"),
      $t = new RegExp(
        "^" + at + "+|((?:^|[^\\\\])(?:\\\\.)*)" + at + "+$",
        "g"
      ),
      De = new RegExp("^" + at + "*," + at + "*"),
      Ke = new RegExp("^" + at + "*([>+~]|" + at + ")" + at + "*"),
      qn = new RegExp(at + "|>"),
      Rn = new RegExp(Kt),
      Wn = new RegExp("^" + pt + "$"),
      $e = {
        ID: new RegExp("^#(" + pt + ")"),
        CLASS: new RegExp("^\\.(" + pt + ")"),
        TAG: new RegExp("^(" + pt + "|[*])"),
        ATTR: new RegExp("^" + Lt),
        PSEUDO: new RegExp("^" + Kt),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            at +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            at +
            "*(?:([+-]|)" +
            at +
            "*(\\d+)|))" +
            at +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + fe + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            at +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            at +
            "*((?:-\\d)?\\d*)" +
            at +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Bn = /HTML$/i,
      Fn = /^(?:input|select|textarea|button)$/i,
      Vn = /^h\d$/i,
      Fe = /^[^{]+\{\s*\[native \w/,
      Un = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      yi = /[+~]/,
      ge = new RegExp(
        "\\\\[\\da-fA-F]{1,6}" + at + "?|\\\\([^\\r\\n\\f])",
        "g"
      ),
      me = function (y, T) {
        var D = "0x" + y.slice(1) - 65536;
        return (
          T ||
          (D < 0
            ? String.fromCharCode(D + 65536)
            : String.fromCharCode((D >> 10) | 55296, (1023 & D) | 56320))
        );
      },
      nn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      rn = function (y, T) {
        return T
          ? "\0" === y
            ? "\ufffd"
            : y.slice(0, -1) +
              "\\" +
              y.charCodeAt(y.length - 1).toString(16) +
              " "
          : "\\" + y;
      },
      sn = function () {
        P();
      },
      Yn = ii(
        function (y) {
          return !0 === y.disabled && "fieldset" === y.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      Ct.apply((Ut = Zt.call(ot.childNodes)), ot.childNodes);
    } catch {
      Ct = {
        apply: Ut.length
          ? function (T, D) {
              ne.apply(T, Zt.call(D));
            }
          : function (T, D) {
              for (var W = T.length, j = 0; (T[W++] = D[j++]); );
              T.length = W - 1;
            },
      };
    }
    function yt(y, T, D, W) {
      var j,
        F,
        U,
        Q,
        X,
        st,
        it,
        rt = T && T.ownerDocument,
        ct = T ? T.nodeType : 9;
      if (
        ((D = D || []),
        "string" != typeof y || !y || (1 !== ct && 9 !== ct && 11 !== ct))
      )
        return D;
      if (!W && (P(T), (T = T || H), tt)) {
        if (11 !== ct && (X = Un.exec(y)))
          if ((j = X[1])) {
            if (9 === ct) {
              if (!(U = T.getElementById(j))) return D;
              if (U.id === j) return D.push(U), D;
            } else if (
              rt &&
              (U = rt.getElementById(j)) &&
              Gt(T, U) &&
              U.id === j
            )
              return D.push(U), D;
          } else {
            if (X[2]) return Ct.apply(D, T.getElementsByTagName(y)), D;
            if (
              (j = X[3]) &&
              r.getElementsByClassName &&
              T.getElementsByClassName
            )
              return Ct.apply(D, T.getElementsByClassName(j)), D;
          }
        if (
          r.qsa &&
          !Xt[y + " "] &&
          (!J || !J.test(y)) &&
          (1 !== ct || "object" !== T.nodeName.toLowerCase())
        ) {
          if (((it = y), (rt = T), 1 === ct && (qn.test(y) || Ke.test(y)))) {
            for (
              ((rt = (yi.test(y) && xi(T.parentNode)) || T) === T && r.scope) ||
                ((Q = T.getAttribute("id"))
                  ? (Q = Q.replace(nn, rn))
                  : T.setAttribute("id", (Q = vt))),
                F = (st = v(y)).length;
              F--;

            )
              st[F] = (Q ? "#" + Q : ":scope") + " " + ei(st[F]);
            it = st.join(",");
          }
          try {
            return Ct.apply(D, rt.querySelectorAll(it)), D;
          } catch {
            Xt(y, !0);
          } finally {
            Q === vt && T.removeAttribute("id");
          }
        }
      }
      return I(y.replace($t, "$1"), T, D, W);
    }
    function ti() {
      var y = [];
      return function T(D, W) {
        return (
          y.push(D + " ") > l.cacheLength && delete T[y.shift()],
          (T[D + " "] = W)
        );
      };
    }
    function ae(y) {
      return (y[vt] = !0), y;
    }
    function le(y) {
      var T = H.createElement("fieldset");
      try {
        return !!y(T);
      } catch {
        return !1;
      } finally {
        T.parentNode && T.parentNode.removeChild(T), (T = null);
      }
    }
    function bi(y, T) {
      for (var D = y.split("|"), W = D.length; W--; ) l.attrHandle[D[W]] = T;
    }
    function on(y, T) {
      var D = T && y,
        W =
          D &&
          1 === y.nodeType &&
          1 === T.nodeType &&
          y.sourceIndex - T.sourceIndex;
      if (W) return W;
      if (D) for (; (D = D.nextSibling); ) if (D === T) return -1;
      return y ? 1 : -1;
    }
    function Qn(y) {
      return function (T) {
        return "input" === T.nodeName.toLowerCase() && T.type === y;
      };
    }
    function Gn(y) {
      return function (T) {
        var D = T.nodeName.toLowerCase();
        return ("input" === D || "button" === D) && T.type === y;
      };
    }
    function an(y) {
      return function (T) {
        return "form" in T
          ? T.parentNode && !1 === T.disabled
            ? "label" in T
              ? "label" in T.parentNode
                ? T.parentNode.disabled === y
                : T.disabled === y
              : T.isDisabled === y || (T.isDisabled !== !y && Yn(T) === y)
            : T.disabled === y
          : "label" in T && T.disabled === y;
      };
    }
    function _e(y) {
      return ae(function (T) {
        return (
          (T = +T),
          ae(function (D, W) {
            for (var j, F = y([], D.length, T), U = F.length; U--; )
              D[(j = F[U])] && (D[j] = !(W[j] = D[j]));
          })
        );
      });
    }
    function xi(y) {
      return y && typeof y.getElementsByTagName < "u" && y;
    }
    for (i in ((r = yt.support = {}),
    (g = yt.isXML =
      function (y) {
        var D = y && (y.ownerDocument || y).documentElement;
        return !Bn.test((y && y.namespaceURI) || (D && D.nodeName) || "HTML");
      }),
    (P = yt.setDocument =
      function (y) {
        var T,
          D,
          W = y ? y.ownerDocument || y : ot;
        return (
          W != H &&
            9 === W.nodeType &&
            W.documentElement &&
            ((Z = (H = W).documentElement),
            (tt = !g(H)),
            ot != H &&
              (D = H.defaultView) &&
              D.top !== D &&
              (D.addEventListener
                ? D.addEventListener("unload", sn, !1)
                : D.attachEvent && D.attachEvent("onunload", sn)),
            (r.scope = le(function (j) {
              return (
                Z.appendChild(j).appendChild(H.createElement("div")),
                typeof j.querySelectorAll < "u" &&
                  !j.querySelectorAll(":scope fieldset div").length
              );
            })),
            (r.attributes = le(function (j) {
              return (j.className = "i"), !j.getAttribute("className");
            })),
            (r.getElementsByTagName = le(function (j) {
              return (
                j.appendChild(H.createComment("")),
                !j.getElementsByTagName("*").length
              );
            })),
            (r.getElementsByClassName = Fe.test(H.getElementsByClassName)),
            (r.getById = le(function (j) {
              return (
                (Z.appendChild(j).id = vt),
                !H.getElementsByName || !H.getElementsByName(vt).length
              );
            })),
            r.getById
              ? ((l.filter.ID = function (j) {
                  var F = j.replace(ge, me);
                  return function (U) {
                    return U.getAttribute("id") === F;
                  };
                }),
                (l.find.ID = function (j, F) {
                  if (typeof F.getElementById < "u" && tt) {
                    var U = F.getElementById(j);
                    return U ? [U] : [];
                  }
                }))
              : ((l.filter.ID = function (j) {
                  var F = j.replace(ge, me);
                  return function (U) {
                    var Q =
                      typeof U.getAttributeNode < "u" &&
                      U.getAttributeNode("id");
                    return Q && Q.value === F;
                  };
                }),
                (l.find.ID = function (j, F) {
                  if (typeof F.getElementById < "u" && tt) {
                    var U,
                      Q,
                      X,
                      st = F.getElementById(j);
                    if (st) {
                      if ((U = st.getAttributeNode("id")) && U.value === j)
                        return [st];
                      for (X = F.getElementsByName(j), Q = 0; (st = X[Q++]); )
                        if ((U = st.getAttributeNode("id")) && U.value === j)
                          return [st];
                    }
                    return [];
                  }
                })),
            (l.find.TAG = r.getElementsByTagName
              ? function (j, F) {
                  return typeof F.getElementsByTagName < "u"
                    ? F.getElementsByTagName(j)
                    : r.qsa
                    ? F.querySelectorAll(j)
                    : void 0;
                }
              : function (j, F) {
                  var U,
                    Q = [],
                    X = 0,
                    st = F.getElementsByTagName(j);
                  if ("*" === j) {
                    for (; (U = st[X++]); ) 1 === U.nodeType && Q.push(U);
                    return Q;
                  }
                  return st;
                }),
            (l.find.CLASS =
              r.getElementsByClassName &&
              function (j, F) {
                if (typeof F.getElementsByClassName < "u" && tt)
                  return F.getElementsByClassName(j);
              }),
            (wt = []),
            (J = []),
            (r.qsa = Fe.test(H.querySelectorAll)) &&
              (le(function (j) {
                var F;
                (Z.appendChild(j).innerHTML =
                  "<a id='" +
                  vt +
                  "'></a><select id='" +
                  vt +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  j.querySelectorAll("[msallowcapture^='']").length &&
                    J.push("[*^$]=" + at + "*(?:''|\"\")"),
                  j.querySelectorAll("[selected]").length ||
                    J.push("\\[" + at + "*(?:value|" + fe + ")"),
                  j.querySelectorAll("[id~=" + vt + "-]").length ||
                    J.push("~="),
                  (F = H.createElement("input")).setAttribute("name", ""),
                  j.appendChild(F),
                  j.querySelectorAll("[name='']").length ||
                    J.push(
                      "\\[" + at + "*name" + at + "*=" + at + "*(?:''|\"\")"
                    ),
                  j.querySelectorAll(":checked").length || J.push(":checked"),
                  j.querySelectorAll("a#" + vt + "+*").length ||
                    J.push(".#.+[+~]"),
                  j.querySelectorAll("\\\f"),
                  J.push("[\\r\\n\\f]");
              }),
              le(function (j) {
                j.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var F = H.createElement("input");
                F.setAttribute("type", "hidden"),
                  j.appendChild(F).setAttribute("name", "D"),
                  j.querySelectorAll("[name=d]").length &&
                    J.push("name" + at + "*[*^$|!~]?="),
                  2 !== j.querySelectorAll(":enabled").length &&
                    J.push(":enabled", ":disabled"),
                  (Z.appendChild(j).disabled = !0),
                  2 !== j.querySelectorAll(":disabled").length &&
                    J.push(":enabled", ":disabled"),
                  j.querySelectorAll("*,:x"),
                  J.push(",.*:");
              })),
            (r.matchesSelector = Fe.test(
              (zt =
                Z.matches ||
                Z.webkitMatchesSelector ||
                Z.mozMatchesSelector ||
                Z.oMatchesSelector ||
                Z.msMatchesSelector)
            )) &&
              le(function (j) {
                (r.disconnectedMatch = zt.call(j, "*")),
                  zt.call(j, "[s!='']:x"),
                  wt.push("!=", Kt);
              }),
            (J = J.length && new RegExp(J.join("|"))),
            (wt = wt.length && new RegExp(wt.join("|"))),
            (T = Fe.test(Z.compareDocumentPosition)),
            (Gt =
              T || Fe.test(Z.contains)
                ? function (j, F) {
                    var U = 9 === j.nodeType ? j.documentElement : j,
                      Q = F && F.parentNode;
                    return (
                      j === Q ||
                      !(
                        !Q ||
                        1 !== Q.nodeType ||
                        !(U.contains
                          ? U.contains(Q)
                          : j.compareDocumentPosition &&
                            16 & j.compareDocumentPosition(Q))
                      )
                    );
                  }
                : function (j, F) {
                    if (F) for (; (F = F.parentNode); ) if (F === j) return !0;
                    return !1;
                  }),
            (we = T
              ? function (j, F) {
                  if (j === F) return (B = !0), 0;
                  var U =
                    !j.compareDocumentPosition - !F.compareDocumentPosition;
                  return (
                    U ||
                    (1 &
                      (U =
                        (j.ownerDocument || j) == (F.ownerDocument || F)
                          ? j.compareDocumentPosition(F)
                          : 1) ||
                    (!r.sortDetached && F.compareDocumentPosition(j) === U)
                      ? j == H || (j.ownerDocument == ot && Gt(ot, j))
                        ? -1
                        : F == H || (F.ownerDocument == ot && Gt(ot, F))
                        ? 1
                        : N
                        ? Jt(N, j) - Jt(N, F)
                        : 0
                      : 4 & U
                      ? -1
                      : 1)
                  );
                }
              : function (j, F) {
                  if (j === F) return (B = !0), 0;
                  var U,
                    Q = 0,
                    X = j.parentNode,
                    st = F.parentNode,
                    it = [j],
                    rt = [F];
                  if (!X || !st)
                    return j == H
                      ? -1
                      : F == H
                      ? 1
                      : X
                      ? -1
                      : st
                      ? 1
                      : N
                      ? Jt(N, j) - Jt(N, F)
                      : 0;
                  if (X === st) return on(j, F);
                  for (U = j; (U = U.parentNode); ) it.unshift(U);
                  for (U = F; (U = U.parentNode); ) rt.unshift(U);
                  for (; it[Q] === rt[Q]; ) Q++;
                  return Q
                    ? on(it[Q], rt[Q])
                    : it[Q] == ot
                    ? -1
                    : rt[Q] == ot
                    ? 1
                    : 0;
                })),
          H
        );
      }),
    (yt.matches = function (y, T) {
      return yt(y, null, null, T);
    }),
    (yt.matchesSelector = function (y, T) {
      if (
        (P(y),
        r.matchesSelector &&
          tt &&
          !Xt[T + " "] &&
          (!wt || !wt.test(T)) &&
          (!J || !J.test(T)))
      )
        try {
          var D = zt.call(y, T);
          if (
            D ||
            r.disconnectedMatch ||
            (y.document && 11 !== y.document.nodeType)
          )
            return D;
        } catch {
          Xt(T, !0);
        }
      return 0 < yt(T, H, null, [y]).length;
    }),
    (yt.contains = function (y, T) {
      return (y.ownerDocument || y) != H && P(y), Gt(y, T);
    }),
    (yt.attr = function (y, T) {
      (y.ownerDocument || y) != H && P(y);
      var D = l.attrHandle[T.toLowerCase()],
        W = D && Le.call(l.attrHandle, T.toLowerCase()) ? D(y, T, !tt) : void 0;
      return void 0 !== W
        ? W
        : r.attributes || !tt
        ? y.getAttribute(T)
        : (W = y.getAttributeNode(T)) && W.specified
        ? W.value
        : null;
    }),
    (yt.escape = function (y) {
      return (y + "").replace(nn, rn);
    }),
    (yt.error = function (y) {
      throw new Error("Syntax error, unrecognized expression: " + y);
    }),
    (yt.uniqueSort = function (y) {
      var T,
        D = [],
        W = 0,
        j = 0;
      if (
        ((B = !r.detectDuplicates),
        (N = !r.sortStable && y.slice(0)),
        y.sort(we),
        B)
      ) {
        for (; (T = y[j++]); ) T === y[j] && (W = D.push(j));
        for (; W--; ) y.splice(D[W], 1);
      }
      return (N = null), y;
    }),
    (d = yt.getText =
      function (y) {
        var T,
          D = "",
          W = 0,
          j = y.nodeType;
        if (j) {
          if (1 === j || 9 === j || 11 === j) {
            if ("string" == typeof y.textContent) return y.textContent;
            for (y = y.firstChild; y; y = y.nextSibling) D += d(y);
          } else if (3 === j || 4 === j) return y.nodeValue;
        } else for (; (T = y[W++]); ) D += d(T);
        return D;
      }),
    ((l = yt.selectors =
      {
        cacheLength: 50,
        createPseudo: ae,
        match: $e,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (y) {
            return (
              (y[1] = y[1].replace(ge, me)),
              (y[3] = (y[3] || y[4] || y[5] || "").replace(ge, me)),
              "~=" === y[2] && (y[3] = " " + y[3] + " "),
              y.slice(0, 4)
            );
          },
          CHILD: function (y) {
            return (
              (y[1] = y[1].toLowerCase()),
              "nth" === y[1].slice(0, 3)
                ? (y[3] || yt.error(y[0]),
                  (y[4] = +(y[4]
                    ? y[5] + (y[6] || 1)
                    : 2 * ("even" === y[3] || "odd" === y[3]))),
                  (y[5] = +(y[7] + y[8] || "odd" === y[3])))
                : y[3] && yt.error(y[0]),
              y
            );
          },
          PSEUDO: function (y) {
            var T,
              D = !y[6] && y[2];
            return $e.CHILD.test(y[0])
              ? null
              : (y[3]
                  ? (y[2] = y[4] || y[5] || "")
                  : D &&
                    Rn.test(D) &&
                    (T = v(D, !0)) &&
                    (T = D.indexOf(")", D.length - T) - D.length) &&
                    ((y[0] = y[0].slice(0, T)), (y[2] = D.slice(0, T))),
                y.slice(0, 3));
          },
        },
        filter: {
          TAG: function (y) {
            var T = y.replace(ge, me).toLowerCase();
            return "*" === y
              ? function () {
                  return !0;
                }
              : function (D) {
                  return D.nodeName && D.nodeName.toLowerCase() === T;
                };
          },
          CLASS: function (y) {
            var T = _t[y + " "];
            return (
              T ||
              ((T = new RegExp("(^|" + at + ")" + y + "(" + at + "|$)")) &&
                _t(y, function (D) {
                  return T.test(
                    ("string" == typeof D.className && D.className) ||
                      (typeof D.getAttribute < "u" &&
                        D.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (y, T, D) {
            return function (W) {
              var j = yt.attr(W, y);
              return null == j
                ? "!=" === T
                : !T ||
                    ((j += ""),
                    "=" === T
                      ? j === D
                      : "!=" === T
                      ? j !== D
                      : "^=" === T
                      ? D && 0 === j.indexOf(D)
                      : "*=" === T
                      ? D && -1 < j.indexOf(D)
                      : "$=" === T
                      ? D && j.slice(-D.length) === D
                      : "~=" === T
                      ? -1 < (" " + j.replace(St, " ") + " ").indexOf(D)
                      : "|=" === T &&
                        (j === D || j.slice(0, D.length + 1) === D + "-"));
            };
          },
          CHILD: function (y, T, D, W, j) {
            var F = "nth" !== y.slice(0, 3),
              U = "last" !== y.slice(-4),
              Q = "of-type" === T;
            return 1 === W && 0 === j
              ? function (X) {
                  return !!X.parentNode;
                }
              : function (X, st, it) {
                  var rt,
                    ct,
                    Et,
                    lt,
                    At,
                    Dt,
                    qt = F !== U ? "nextSibling" : "previousSibling",
                    bt = X.parentNode,
                    de = Q && X.nodeName.toLowerCase(),
                    jt = !it && !Q,
                    It = !1;
                  if (bt) {
                    if (F) {
                      for (; qt; ) {
                        for (lt = X; (lt = lt[qt]); )
                          if (
                            Q
                              ? lt.nodeName.toLowerCase() === de
                              : 1 === lt.nodeType
                          )
                            return !1;
                        Dt = qt = "only" === y && !Dt && "nextSibling";
                      }
                      return !0;
                    }
                    if (((Dt = [U ? bt.firstChild : bt.lastChild]), U && jt)) {
                      for (
                        It =
                          (At =
                            (rt =
                              (ct =
                                (Et = (lt = bt)[vt] || (lt[vt] = {}))[
                                  lt.uniqueID
                                ] || (Et[lt.uniqueID] = {}))[y] || [])[0] ===
                              Vt && rt[1]) && rt[2],
                          lt = At && bt.childNodes[At];
                        (lt =
                          (++At && lt && lt[qt]) || (It = At = 0) || Dt.pop());

                      )
                        if (1 === lt.nodeType && ++It && lt === X) {
                          ct[y] = [Vt, At, It];
                          break;
                        }
                    } else if (
                      (jt &&
                        (It = At =
                          (rt =
                            (ct =
                              (Et = (lt = X)[vt] || (lt[vt] = {}))[
                                lt.uniqueID
                              ] || (Et[lt.uniqueID] = {}))[y] || [])[0] ===
                            Vt && rt[1]),
                      !1 === It)
                    )
                      for (
                        ;
                        (lt =
                          (++At && lt && lt[qt]) ||
                          (It = At = 0) ||
                          Dt.pop()) &&
                        ((Q
                          ? lt.nodeName.toLowerCase() !== de
                          : 1 !== lt.nodeType) ||
                          !++It ||
                          (jt &&
                            ((ct =
                              (Et = lt[vt] || (lt[vt] = {}))[lt.uniqueID] ||
                              (Et[lt.uniqueID] = {}))[y] = [Vt, It]),
                          lt !== X));

                      );
                    return (It -= j) === W || (It % W == 0 && 0 <= It / W);
                  }
                };
          },
          PSEUDO: function (y, T) {
            var D,
              W =
                l.pseudos[y] ||
                l.setFilters[y.toLowerCase()] ||
                yt.error("unsupported pseudo: " + y);
            return W[vt]
              ? W(T)
              : 1 < W.length
              ? ((D = [y, y, "", T]),
                l.setFilters.hasOwnProperty(y.toLowerCase())
                  ? ae(function (j, F) {
                      for (var U, Q = W(j, T), X = Q.length; X--; )
                        j[(U = Jt(j, Q[X]))] = !(F[U] = Q[X]);
                    })
                  : function (j) {
                      return W(j, 0, D);
                    })
              : W;
          },
        },
        pseudos: {
          not: ae(function (y) {
            var T = [],
              D = [],
              W = E(y.replace($t, "$1"));
            return W[vt]
              ? ae(function (j, F, U, Q) {
                  for (var X, st = W(j, null, Q, []), it = j.length; it--; )
                    (X = st[it]) && (j[it] = !(F[it] = X));
                })
              : function (j, F, U) {
                  return (T[0] = j), W(T, null, U, D), (T[0] = null), !D.pop();
                };
          }),
          has: ae(function (y) {
            return function (T) {
              return 0 < yt(y, T).length;
            };
          }),
          contains: ae(function (y) {
            return (
              (y = y.replace(ge, me)),
              function (T) {
                return -1 < (T.textContent || d(T)).indexOf(y);
              }
            );
          }),
          lang: ae(function (y) {
            return (
              Wn.test(y || "") || yt.error("unsupported lang: " + y),
              (y = y.replace(ge, me).toLowerCase()),
              function (T) {
                var D;
                do {
                  if (
                    (D = tt
                      ? T.lang
                      : T.getAttribute("xml:lang") || T.getAttribute("lang"))
                  )
                    return (
                      (D = D.toLowerCase()) === y || 0 === D.indexOf(y + "-")
                    );
                } while ((T = T.parentNode) && 1 === T.nodeType);
                return !1;
              }
            );
          }),
          target: function (y) {
            var T = e.location && e.location.hash;
            return T && T.slice(1) === y.id;
          },
          root: function (y) {
            return y === Z;
          },
          focus: function (y) {
            return (
              y === H.activeElement &&
              (!H.hasFocus || H.hasFocus()) &&
              !!(y.type || y.href || ~y.tabIndex)
            );
          },
          enabled: an(!1),
          disabled: an(!0),
          checked: function (y) {
            var T = y.nodeName.toLowerCase();
            return (
              ("input" === T && !!y.checked) || ("option" === T && !!y.selected)
            );
          },
          selected: function (y) {
            return !0 === y.selected;
          },
          empty: function (y) {
            for (y = y.firstChild; y; y = y.nextSibling)
              if (y.nodeType < 6) return !1;
            return !0;
          },
          parent: function (y) {
            return !l.pseudos.empty(y);
          },
          header: function (y) {
            return Vn.test(y.nodeName);
          },
          input: function (y) {
            return Fn.test(y.nodeName);
          },
          button: function (y) {
            var T = y.nodeName.toLowerCase();
            return ("input" === T && "button" === y.type) || "button" === T;
          },
          text: function (y) {
            var T;
            return (
              "input" === y.nodeName.toLowerCase() &&
              "text" === y.type &&
              (null == (T = y.getAttribute("type")) ||
                "text" === T.toLowerCase())
            );
          },
          first: _e(function () {
            return [0];
          }),
          last: _e(function (y, T) {
            return [T - 1];
          }),
          eq: _e(function (y, T, D) {
            return [D < 0 ? D + T : D];
          }),
          even: _e(function (y, T) {
            for (var D = 0; D < T; D += 2) y.push(D);
            return y;
          }),
          odd: _e(function (y, T) {
            for (var D = 1; D < T; D += 2) y.push(D);
            return y;
          }),
          lt: _e(function (y, T, D) {
            for (var W = D < 0 ? D + T : T < D ? T : D; 0 <= --W; ) y.push(W);
            return y;
          }),
          gt: _e(function (y, T, D) {
            for (var W = D < 0 ? D + T : D; ++W < T; ) y.push(W);
            return y;
          }),
        },
      }).pseudos.nth = l.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      l.pseudos[i] = Qn(i);
    for (i in { submit: !0, reset: !0 }) l.pseudos[i] = Gn(i);
    function ln() {}
    function ei(y) {
      for (var T = 0, D = y.length, W = ""; T < D; T++) W += y[T].value;
      return W;
    }
    function ii(y, T, D) {
      var W = T.dir,
        j = T.next,
        F = j || W,
        U = D && "parentNode" === F,
        Q = dt++;
      return T.first
        ? function (X, st, it) {
            for (; (X = X[W]); ) if (1 === X.nodeType || U) return y(X, st, it);
            return !1;
          }
        : function (X, st, it) {
            var rt,
              ct,
              Et,
              lt = [Vt, Q];
            if (it) {
              for (; (X = X[W]); )
                if ((1 === X.nodeType || U) && y(X, st, it)) return !0;
            } else
              for (; (X = X[W]); )
                if (1 === X.nodeType || U)
                  if (
                    ((ct =
                      (Et = X[vt] || (X[vt] = {}))[X.uniqueID] ||
                      (Et[X.uniqueID] = {})),
                    j && j === X.nodeName.toLowerCase())
                  )
                    X = X[W] || X;
                  else {
                    if ((rt = ct[F]) && rt[0] === Vt && rt[1] === Q)
                      return (lt[2] = rt[2]);
                    if (((ct[F] = lt)[2] = y(X, st, it))) return !0;
                  }
            return !1;
          };
    }
    function wi(y) {
      return 1 < y.length
        ? function (T, D, W) {
            for (var j = y.length; j--; ) if (!y[j](T, D, W)) return !1;
            return !0;
          }
        : y[0];
    }
    function ni(y, T, D, W, j) {
      for (var F, U = [], Q = 0, X = y.length, st = null != T; Q < X; Q++)
        (F = y[Q]) && ((D && !D(F, W, j)) || (U.push(F), st && T.push(Q)));
      return U;
    }
    function _i(y, T, D, W, j, F) {
      return (
        W && !W[vt] && (W = _i(W)),
        j && !j[vt] && (j = _i(j, F)),
        ae(function (U, Q, X, st) {
          var it,
            rt,
            ct,
            Et = [],
            lt = [],
            At = Q.length,
            Dt =
              U ||
              (function (de, jt, It) {
                for (var ue = 0, ri = jt.length; ue < ri; ue++)
                  yt(de, jt[ue], It);
                return It;
              })(T || "*", X.nodeType ? [X] : X, []),
            qt = !y || (!U && T) ? Dt : ni(Dt, Et, y, X, st),
            bt = D ? (j || (U ? y : At || W) ? [] : Q) : qt;
          if ((D && D(qt, bt, X, st), W))
            for (it = ni(bt, lt), W(it, [], X, st), rt = it.length; rt--; )
              (ct = it[rt]) && (bt[lt[rt]] = !(qt[lt[rt]] = ct));
          if (U) {
            if (j || y) {
              if (j) {
                for (it = [], rt = bt.length; rt--; )
                  (ct = bt[rt]) && it.push((qt[rt] = ct));
                j(null, (bt = []), it, st);
              }
              for (rt = bt.length; rt--; )
                (ct = bt[rt]) &&
                  -1 < (it = j ? Jt(U, ct) : Et[rt]) &&
                  (U[it] = !(Q[it] = ct));
            }
          } else (bt = ni(bt === Q ? bt.splice(At, bt.length) : bt)), j ? j(null, Q, bt, st) : Ct.apply(Q, bt);
        })
      );
    }
    function Ci(y) {
      for (
        var T,
          D,
          W,
          j = y.length,
          F = l.relative[y[0].type],
          U = F || l.relative[" "],
          Q = F ? 1 : 0,
          X = ii(
            function (rt) {
              return rt === T;
            },
            U,
            !0
          ),
          st = ii(
            function (rt) {
              return -1 < Jt(T, rt);
            },
            U,
            !0
          ),
          it = [
            function (rt, ct, Et) {
              var lt =
                (!F && (Et || ct !== O)) ||
                ((T = ct).nodeType ? X(rt, ct, Et) : st(rt, ct, Et));
              return (T = null), lt;
            },
          ];
        Q < j;
        Q++
      )
        if ((D = l.relative[y[Q].type])) it = [ii(wi(it), D)];
        else {
          if ((D = l.filter[y[Q].type].apply(null, y[Q].matches))[vt]) {
            for (W = ++Q; W < j && !l.relative[y[W].type]; W++);
            return _i(
              1 < Q && wi(it),
              1 < Q &&
                ei(
                  y
                    .slice(0, Q - 1)
                    .concat({ value: " " === y[Q - 2].type ? "*" : "" })
                ).replace($t, "$1"),
              D,
              Q < W && Ci(y.slice(Q, W)),
              W < j && Ci((y = y.slice(W))),
              W < j && ei(y)
            );
          }
          it.push(D);
        }
      return wi(it);
    }
    return (
      (ln.prototype = l.filters = l.pseudos),
      (l.setFilters = new ln()),
      (v = yt.tokenize =
        function (y, T) {
          var D,
            W,
            j,
            F,
            U,
            Q,
            X,
            st = Be[y + " "];
          if (st) return T ? 0 : st.slice(0);
          for (U = y, Q = [], X = l.preFilter; U; ) {
            for (F in ((D && !(W = De.exec(U))) ||
              (W && (U = U.slice(W[0].length) || U), Q.push((j = []))),
            (D = !1),
            (W = Ke.exec(U)) &&
              ((D = W.shift()),
              j.push({ value: D, type: W[0].replace($t, " ") }),
              (U = U.slice(D.length))),
            l.filter))
              !(W = $e[F].exec(U)) ||
                (X[F] && !(W = X[F](W))) ||
                ((D = W.shift()),
                j.push({ value: D, type: F, matches: W }),
                (U = U.slice(D.length)));
            if (!D) break;
          }
          return T ? U.length : U ? yt.error(y) : Be(y, Q).slice(0);
        }),
      (E = yt.compile =
        function (y, T) {
          var D,
            W,
            j,
            F,
            U,
            Q,
            X = [],
            st = [],
            it = Je[y + " "];
          if (!it) {
            for (T || (T = v(y)), D = T.length; D--; )
              (it = Ci(T[D]))[vt] ? X.push(it) : st.push(it);
            (it = Je(
              y,
              ((W = st),
              (F = 0 < (j = X).length),
              (U = 0 < W.length),
              (Q = function (rt, ct, Et, lt, At) {
                var Dt,
                  qt,
                  bt,
                  de = 0,
                  jt = "0",
                  It = rt && [],
                  ue = [],
                  ri = O,
                  un = rt || (U && l.find.TAG("*", At)),
                  hn = (Vt += null == ri ? 1 : Math.random() || 0.1),
                  Xn = un.length;
                for (
                  At && (O = ct == H || ct || At);
                  jt !== Xn && null != (Dt = un[jt]);
                  jt++
                ) {
                  if (U && Dt) {
                    for (
                      qt = 0,
                        ct || Dt.ownerDocument == H || (P(Dt), (Et = !tt));
                      (bt = W[qt++]);

                    )
                      if (bt(Dt, ct || H, Et)) {
                        lt.push(Dt);
                        break;
                      }
                    At && (Vt = hn);
                  }
                  F && ((Dt = !bt && Dt) && de--, rt && It.push(Dt));
                }
                if (((de += jt), F && jt !== de)) {
                  for (qt = 0; (bt = j[qt++]); ) bt(It, ue, ct, Et);
                  if (rt) {
                    if (0 < de)
                      for (; jt--; ) It[jt] || ue[jt] || (ue[jt] = Ae.call(lt));
                    ue = ni(ue);
                  }
                  Ct.apply(lt, ue),
                    At &&
                      !rt &&
                      0 < ue.length &&
                      1 < de + j.length &&
                      yt.uniqueSort(lt);
                }
                return At && ((Vt = hn), (O = ri)), It;
              }),
              F ? ae(Q) : Q)
            )).selector = y;
          }
          return it;
        }),
      (I = yt.select =
        function (y, T, D, W) {
          var j,
            F,
            U,
            Q,
            X,
            st = "function" == typeof y && y,
            it = !W && v((y = st.selector || y));
          if (((D = D || []), 1 === it.length)) {
            if (
              2 < (F = it[0] = it[0].slice(0)).length &&
              "ID" === (U = F[0]).type &&
              9 === T.nodeType &&
              tt &&
              l.relative[F[1].type]
            ) {
              if (!(T = (l.find.ID(U.matches[0].replace(ge, me), T) || [])[0]))
                return D;
              st && (T = T.parentNode), (y = y.slice(F.shift().value.length));
            }
            for (
              j = $e.needsContext.test(y) ? 0 : F.length;
              j-- && !l.relative[(Q = (U = F[j]).type)];

            )
              if (
                (X = l.find[Q]) &&
                (W = X(
                  U.matches[0].replace(ge, me),
                  (yi.test(F[0].type) && xi(T.parentNode)) || T
                ))
              ) {
                if ((F.splice(j, 1), !(y = W.length && ei(F))))
                  return Ct.apply(D, W), D;
                break;
              }
          }
          return (
            (st || E(y, it))(
              W,
              T,
              !tt,
              D,
              !T || (yi.test(y) && xi(T.parentNode)) || T
            ),
            D
          );
        }),
      (r.sortStable = vt.split("").sort(we).join("") === vt),
      (r.detectDuplicates = !!B),
      P(),
      (r.sortDetached = le(function (y) {
        return 1 & y.compareDocumentPosition(H.createElement("fieldset"));
      })),
      le(function (y) {
        return (
          (y.innerHTML = "<a href='#'></a>"),
          "#" === y.firstChild.getAttribute("href")
        );
      }) ||
        bi("type|href|height|width", function (y, T, D) {
          if (!D) return y.getAttribute(T, "type" === T.toLowerCase() ? 1 : 2);
        }),
      (r.attributes &&
        le(function (y) {
          return (
            (y.innerHTML = "<input/>"),
            y.firstChild.setAttribute("value", ""),
            "" === y.firstChild.getAttribute("value")
          );
        })) ||
        bi("value", function (y, T, D) {
          if (!D && "input" === y.nodeName.toLowerCase()) return y.defaultValue;
        }),
      le(function (y) {
        return null == y.getAttribute("disabled");
      }) ||
        bi(fe, function (y, T, D) {
          var W;
          if (!D)
            return !0 === y[T]
              ? T.toLowerCase()
              : (W = y.getAttributeNode(T)) && W.specified
              ? W.value
              : null;
        }),
      yt
    );
  })(s);
  (a.find = ut),
    (a.expr = ut.selectors),
    (a.expr[":"] = a.expr.pseudos),
    (a.uniqueSort = a.unique = ut.uniqueSort),
    (a.text = ut.getText),
    (a.isXMLDoc = ut.isXML),
    (a.contains = ut.contains),
    (a.escapeSelector = ut.escape);
  var nt = function (e, i, r) {
      for (var l = [], d = void 0 !== r; (e = e[i]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (d && a(e).is(r)) break;
          l.push(e);
        }
      return l;
    },
    Mt = function (e, i) {
      for (var r = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== i && r.push(e);
      return r;
    },
    Pt = a.expr.match.needsContext;
  function Tt(e, i) {
    return e.nodeName && e.nodeName.toLowerCase() === i.toLowerCase();
  }
  var Nt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function ht(e, i, r) {
    return R(i)
      ? a.grep(e, function (l, d) {
          return !!i.call(l, d, l) !== r;
        })
      : i.nodeType
      ? a.grep(e, function (l) {
          return (l === i) !== r;
        })
      : "string" != typeof i
      ? a.grep(e, function (l) {
          return -1 < f.call(i, l) !== r;
        })
      : a.filter(i, e, r);
  }
  (a.filter = function (e, i, r) {
    var l = i[0];
    return (
      r && (e = ":not(" + e + ")"),
      1 === i.length && 1 === l.nodeType
        ? a.find.matchesSelector(l, e)
          ? [l]
          : []
        : a.find.matches(
            e,
            a.grep(i, function (d) {
              return 1 === d.nodeType;
            })
          )
    );
  }),
    a.fn.extend({
      find: function (e) {
        var i,
          r,
          l = this.length,
          d = this;
        if ("string" != typeof e)
          return this.pushStack(
            a(e).filter(function () {
              for (i = 0; i < l; i++) if (a.contains(d[i], this)) return !0;
            })
          );
        for (r = this.pushStack([]), i = 0; i < l; i++) a.find(e, d[i], r);
        return 1 < l ? a.uniqueSort(r) : r;
      },
      filter: function (e) {
        return this.pushStack(ht(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(ht(this, e || [], !0));
      },
      is: function (e) {
        return !!ht(
          this,
          "string" == typeof e && Pt.test(e) ? a(e) : e || [],
          !1
        ).length;
      },
    });
  var mt,
    Ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((a.fn.init = function (e, i, r) {
    var l, d;
    if (!e) return this;
    if (((r = r || mt), "string" == typeof e)) {
      if (
        !(l =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : Ht.exec(e)) ||
        (!l[1] && i)
      )
        return !i || i.jquery ? (i || r).find(e) : this.constructor(i).find(e);
      if (l[1]) {
        if (
          (a.merge(
            this,
            a.parseHTML(
              l[1],
              (i = i instanceof a ? i[0] : i) && i.nodeType
                ? i.ownerDocument || i
                : p,
              !0
            )
          ),
          Nt.test(l[1]) && a.isPlainObject(i))
        )
          for (l in i) R(this[l]) ? this[l](i[l]) : this.attr(l, i[l]);
        return this;
      }
      return (
        (d = p.getElementById(l[2])) && ((this[0] = d), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : R(e)
      ? void 0 !== r.ready
        ? r.ready(e)
        : e(a)
      : a.makeArray(e, this);
  }).prototype = a.fn),
    (mt = a(p));
  var kt = /^(?:parents|prev(?:Until|All))/,
    he = { children: !0, contents: !0, next: !0, prev: !0 };
  function te(e, i) {
    for (; (e = e[i]) && 1 !== e.nodeType; );
    return e;
  }
  a.fn.extend({
    has: function (e) {
      var i = a(e, this),
        r = i.length;
      return this.filter(function () {
        for (var l = 0; l < r; l++) if (a.contains(this, i[l])) return !0;
      });
    },
    closest: function (e, i) {
      var r,
        l = 0,
        d = this.length,
        g = [],
        v = "string" != typeof e && a(e);
      if (!Pt.test(e))
        for (; l < d; l++)
          for (r = this[l]; r && r !== i; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (v
                ? -1 < v.index(r)
                : 1 === r.nodeType && a.find.matchesSelector(r, e))
            ) {
              g.push(r);
              break;
            }
      return this.pushStack(1 < g.length ? a.uniqueSort(g) : g);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? f.call(a(e), this[0])
          : f.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, i) {
      return this.pushStack(a.uniqueSort(a.merge(this.get(), a(e, i))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    a.each(
      {
        parent: function (e) {
          var i = e.parentNode;
          return i && 11 !== i.nodeType ? i : null;
        },
        parents: function (e) {
          return nt(e, "parentNode");
        },
        parentsUntil: function (e, i, r) {
          return nt(e, "parentNode", r);
        },
        next: function (e) {
          return te(e, "nextSibling");
        },
        prev: function (e) {
          return te(e, "previousSibling");
        },
        nextAll: function (e) {
          return nt(e, "nextSibling");
        },
        prevAll: function (e) {
          return nt(e, "previousSibling");
        },
        nextUntil: function (e, i, r) {
          return nt(e, "nextSibling", r);
        },
        prevUntil: function (e, i, r) {
          return nt(e, "previousSibling", r);
        },
        siblings: function (e) {
          return Mt((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Mt(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && u(e.contentDocument)
            ? e.contentDocument
            : (Tt(e, "template") && (e = e.content || e),
              a.merge([], e.childNodes));
        },
      },
      function (e, i) {
        a.fn[e] = function (r, l) {
          var d = a.map(this, i, r);
          return (
            "Until" !== e.slice(-5) && (l = r),
            l && "string" == typeof l && (d = a.filter(l, d)),
            1 < this.length &&
              (he[e] || a.uniqueSort(d), kt.test(e) && d.reverse()),
            this.pushStack(d)
          );
        };
      }
    );
  var Rt = /[^\x20\t\r\n\f]+/g;
  function pe(e) {
    return e;
  }
  function Yt(e) {
    throw e;
  }
  function Ve(e, i, r, l) {
    var d;
    try {
      e && R((d = e.promise))
        ? d.call(e).done(i).fail(r)
        : e && R((d = e.then))
        ? d.call(e, i, r)
        : i.apply(void 0, [e].slice(l));
    } catch (g) {
      r.apply(void 0, [g]);
    }
  }
  (a.Callbacks = function (e) {
    var r;
    e =
      "string" == typeof e
        ? ((r = {}),
          a.each(e.match(Rt) || [], function (P, H) {
            r[H] = !0;
          }),
          r)
        : a.extend({}, e);
    var l,
      d,
      g,
      v,
      E = [],
      I = [],
      O = -1,
      N = function () {
        for (v = v || e.once, g = l = !0; I.length; O = -1)
          for (d = I.shift(); ++O < E.length; )
            !1 === E[O].apply(d[0], d[1]) &&
              e.stopOnFalse &&
              ((O = E.length), (d = !1));
        e.memory || (d = !1), (l = !1), v && (E = d ? [] : "");
      },
      B = {
        add: function () {
          return (
            E &&
              (d && !l && ((O = E.length - 1), I.push(d)),
              (function P(H) {
                a.each(H, function (Z, tt) {
                  R(tt)
                    ? (e.unique && B.has(tt)) || E.push(tt)
                    : tt && tt.length && "string" !== Y(tt) && P(tt);
                });
              })(arguments),
              d && !l && N()),
            this
          );
        },
        remove: function () {
          return (
            a.each(arguments, function (P, H) {
              for (var Z; -1 < (Z = a.inArray(H, E, Z)); )
                E.splice(Z, 1), Z <= O && O--;
            }),
            this
          );
        },
        has: function (P) {
          return P ? -1 < a.inArray(P, E) : 0 < E.length;
        },
        empty: function () {
          return E && (E = []), this;
        },
        disable: function () {
          return (v = I = []), (E = d = ""), this;
        },
        disabled: function () {
          return !E;
        },
        lock: function () {
          return (v = I = []), d || l || (E = d = ""), this;
        },
        locked: function () {
          return !!v;
        },
        fireWith: function (P, H) {
          return (
            v ||
              ((H = [P, (H = H || []).slice ? H.slice() : H]),
              I.push(H),
              l || N()),
            this
          );
        },
        fire: function () {
          return B.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!g;
        },
      };
    return B;
  }),
    a.extend({
      Deferred: function (e) {
        var i = [
            [
              "notify",
              "progress",
              a.Callbacks("memory"),
              a.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              a.Callbacks("once memory"),
              a.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              a.Callbacks("once memory"),
              a.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          l = {
            state: function () {
              return r;
            },
            always: function () {
              return d.done(arguments).fail(arguments), this;
            },
            catch: function (g) {
              return l.then(null, g);
            },
            pipe: function () {
              var g = arguments;
              return a
                .Deferred(function (v) {
                  a.each(i, function (E, I) {
                    var O = R(g[I[4]]) && g[I[4]];
                    d[I[1]](function () {
                      var N = O && O.apply(this, arguments);
                      N && R(N.promise)
                        ? N.promise()
                            .progress(v.notify)
                            .done(v.resolve)
                            .fail(v.reject)
                        : v[I[0] + "With"](this, O ? [N] : arguments);
                    });
                  }),
                    (g = null);
                })
                .promise();
            },
            then: function (g, v, E) {
              var I = 0;
              function O(N, B, P, H) {
                return function () {
                  var Z = this,
                    tt = arguments,
                    J = function () {
                      var zt, Gt;
                      if (!(N < I)) {
                        if ((zt = P.apply(Z, tt)) === B.promise())
                          throw new TypeError("Thenable self-resolution");
                        R(
                          (Gt =
                            zt &&
                            ("object" == typeof zt ||
                              "function" == typeof zt) &&
                            zt.then)
                        )
                          ? H
                            ? Gt.call(zt, O(I, B, pe, H), O(I, B, Yt, H))
                            : (I++,
                              Gt.call(
                                zt,
                                O(I, B, pe, H),
                                O(I, B, Yt, H),
                                O(I, B, pe, B.notifyWith)
                              ))
                          : (P !== pe && ((Z = void 0), (tt = [zt])),
                            (H || B.resolveWith)(Z, tt));
                      }
                    },
                    wt = H
                      ? J
                      : function () {
                          try {
                            J();
                          } catch (zt) {
                            a.Deferred.exceptionHook &&
                              a.Deferred.exceptionHook(zt, wt.stackTrace),
                              I <= N + 1 &&
                                (P !== Yt && ((Z = void 0), (tt = [zt])),
                                B.rejectWith(Z, tt));
                          }
                        };
                  N
                    ? wt()
                    : (a.Deferred.getStackHook &&
                        (wt.stackTrace = a.Deferred.getStackHook()),
                      s.setTimeout(wt));
                };
              }
              return a
                .Deferred(function (N) {
                  i[0][3].add(O(0, N, R(E) ? E : pe, N.notifyWith)),
                    i[1][3].add(O(0, N, R(g) ? g : pe)),
                    i[2][3].add(O(0, N, R(v) ? v : Yt));
                })
                .promise();
            },
            promise: function (g) {
              return null != g ? a.extend(g, l) : l;
            },
          },
          d = {};
        return (
          a.each(i, function (g, v) {
            var E = v[2],
              I = v[5];
            (l[v[1]] = E.add),
              I &&
                E.add(
                  function () {
                    r = I;
                  },
                  i[3 - g][2].disable,
                  i[3 - g][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              E.add(v[3].fire),
              (d[v[0]] = function () {
                return (
                  d[v[0] + "With"](this === d ? void 0 : this, arguments), this
                );
              }),
              (d[v[0] + "With"] = E.fireWith);
          }),
          l.promise(d),
          e && e.call(d, d),
          d
        );
      },
      when: function (e) {
        var i = arguments.length,
          r = i,
          l = Array(r),
          d = h.call(arguments),
          g = a.Deferred(),
          v = function (E) {
            return function (I) {
              (l[E] = this),
                (d[E] = 1 < arguments.length ? h.call(arguments) : I),
                --i || g.resolveWith(l, d);
            };
          };
        if (
          i <= 1 &&
          (Ve(e, g.done(v(r)).resolve, g.reject, !i),
          "pending" === g.state() || R(d[r] && d[r].then))
        )
          return g.then();
        for (; r--; ) Ve(d[r], v(r), g.reject);
        return g.promise();
      },
    });
  var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (a.Deferred.exceptionHook = function (e, i) {
    s.console &&
      s.console.warn &&
      e &&
      Oe.test(e.name) &&
      s.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
  }),
    (a.readyException = function (e) {
      s.setTimeout(function () {
        throw e;
      });
    });
  var je = a.Deferred();
  function ee() {
    p.removeEventListener("DOMContentLoaded", ee),
      s.removeEventListener("load", ee),
      a.ready();
  }
  (a.fn.ready = function (e) {
    return (
      je.then(e).catch(function (i) {
        a.readyException(i);
      }),
      this
    );
  }),
    a.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --a.readyWait : a.isReady) ||
          ((a.isReady = !0) !== e && 0 < --a.readyWait) ||
          je.resolveWith(p, [a]);
      },
    }),
    (a.ready.then = je.then),
    "complete" === p.readyState ||
    ("loading" !== p.readyState && !p.documentElement.doScroll)
      ? s.setTimeout(a.ready)
      : (p.addEventListener("DOMContentLoaded", ee),
        s.addEventListener("load", ee));
  var re = function (e, i, r, l, d, g, v) {
      var E = 0,
        I = e.length,
        O = null == r;
      if ("object" === Y(r))
        for (E in ((d = !0), r)) re(e, i, E, r[E], !0, g, v);
      else if (
        void 0 !== l &&
        ((d = !0),
        R(l) || (v = !0),
        O &&
          (v
            ? (i.call(e, l), (i = null))
            : ((O = i),
              (i = function (N, B, P) {
                return O.call(a(N), P);
              }))),
        i)
      )
        for (; E < I; E++) i(e[E], r, v ? l : l.call(e[E], E, i(e[E], r)));
      return d ? e : O ? i.call(e) : I ? i(e[0], r) : g;
    },
    Me = /^-ms-/,
    Pe = /-([a-z])/g;
  function Ue(e, i) {
    return i.toUpperCase();
  }
  function Wt(e) {
    return e.replace(Me, "ms-").replace(Pe, Ue);
  }
  var w = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function k() {
    this.expando = a.expando + k.uid++;
  }
  (k.uid = 1),
    (k.prototype = {
      cache: function (e) {
        var i = e[this.expando];
        return (
          i ||
            ((i = {}),
            w(e) &&
              (e.nodeType
                ? (e[this.expando] = i)
                : Object.defineProperty(e, this.expando, {
                    value: i,
                    configurable: !0,
                  }))),
          i
        );
      },
      set: function (e, i, r) {
        var l,
          d = this.cache(e);
        if ("string" == typeof i) d[Wt(i)] = r;
        else for (l in i) d[Wt(l)] = i[l];
        return d;
      },
      get: function (e, i) {
        return void 0 === i
          ? this.cache(e)
          : e[this.expando] && e[this.expando][Wt(i)];
      },
      access: function (e, i, r) {
        return void 0 === i || (i && "string" == typeof i && void 0 === r)
          ? this.get(e, i)
          : (this.set(e, i, r), void 0 !== r ? r : i);
      },
      remove: function (e, i) {
        var r,
          l = e[this.expando];
        if (void 0 !== l) {
          if (void 0 !== i)
            for (
              r = (i = Array.isArray(i)
                ? i.map(Wt)
                : ((i = Wt(i)) in l)
                ? [i]
                : i.match(Rt) || []).length;
              r--;

            )
              delete l[i[r]];
          (void 0 === i || a.isEmptyObject(l)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var i = e[this.expando];
        return void 0 !== i && !a.isEmptyObject(i);
      },
    });
  var M = new k(),
    V = new k(),
    et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ft = /[A-Z]/g;
  function xt(e, i, r) {
    var l, d;
    if (void 0 === r && 1 === e.nodeType)
      if (
        ((l = "data-" + i.replace(ft, "-$&").toLowerCase()),
        "string" == typeof (r = e.getAttribute(l)))
      ) {
        try {
          r =
            "true" === (d = r) ||
            ("false" !== d &&
              ("null" === d
                ? null
                : d === +d + ""
                ? +d
                : et.test(d)
                ? JSON.parse(d)
                : d));
        } catch {}
        V.set(e, i, r);
      } else r = void 0;
    return r;
  }
  a.extend({
    hasData: function (e) {
      return V.hasData(e) || M.hasData(e);
    },
    data: function (e, i, r) {
      return V.access(e, i, r);
    },
    removeData: function (e, i) {
      V.remove(e, i);
    },
    _data: function (e, i, r) {
      return M.access(e, i, r);
    },
    _removeData: function (e, i) {
      M.remove(e, i);
    },
  }),
    a.fn.extend({
      data: function (e, i) {
        var r,
          l,
          d,
          g = this[0],
          v = g && g.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((d = V.get(g)), 1 === g.nodeType && !M.get(g, "hasDataAttrs"))
          ) {
            for (r = v.length; r--; )
              v[r] &&
                0 === (l = v[r].name).indexOf("data-") &&
                ((l = Wt(l.slice(5))), xt(g, l, d[l]));
            M.set(g, "hasDataAttrs", !0);
          }
          return d;
        }
        return "object" == typeof e
          ? this.each(function () {
              V.set(this, e);
            })
          : re(
              this,
              function (E) {
                var I;
                if (g && void 0 === E)
                  return void 0 !== (I = V.get(g, e)) ||
                    void 0 !== (I = xt(g, e))
                    ? I
                    : void 0;
                this.each(function () {
                  V.set(this, e, E);
                });
              },
              null,
              i,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          V.remove(this, e);
        });
      },
    }),
    a.extend({
      queue: function (e, i, r) {
        var l;
        if (e)
          return (
            (l = M.get(e, (i = (i || "fx") + "queue"))),
            r &&
              (!l || Array.isArray(r)
                ? (l = M.access(e, i, a.makeArray(r)))
                : l.push(r)),
            l || []
          );
      },
      dequeue: function (e, i) {
        var r = a.queue(e, (i = i || "fx")),
          l = r.length,
          d = r.shift(),
          g = a._queueHooks(e, i);
        "inprogress" === d && ((d = r.shift()), l--),
          d &&
            ("fx" === i && r.unshift("inprogress"),
            delete g.stop,
            d.call(
              e,
              function () {
                a.dequeue(e, i);
              },
              g
            )),
          !l && g && g.empty.fire();
      },
      _queueHooks: function (e, i) {
        var r = i + "queueHooks";
        return (
          M.get(e, r) ||
          M.access(e, r, {
            empty: a.Callbacks("once memory").add(function () {
              M.remove(e, [i + "queue", r]);
            }),
          })
        );
      },
    }),
    a.fn.extend({
      queue: function (e, i) {
        var r = 2;
        return (
          "string" != typeof e && ((i = e), (e = "fx"), r--),
          arguments.length < r
            ? a.queue(this[0], e)
            : void 0 === i
            ? this
            : this.each(function () {
                var l = a.queue(this, e, i);
                a._queueHooks(this, e),
                  "fx" === e && "inprogress" !== l[0] && a.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          a.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, i) {
        var r,
          l = 1,
          d = a.Deferred(),
          g = this,
          v = this.length,
          E = function () {
            --l || d.resolveWith(g, [g]);
          };
        for (
          "string" != typeof e && ((i = e), (e = void 0)), e = e || "fx";
          v--;

        )
          (r = M.get(g[v], e + "queueHooks")) &&
            r.empty &&
            (l++, r.empty.add(E));
        return E(), d.promise(i);
      },
    });
  var gt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ce = new RegExp("^(?:([+-])=|)(" + gt + ")([a-z%]*)$", "i"),
    Ot = ["Top", "Right", "Bottom", "Left"],
    Bt = p.documentElement,
    Qt = function (e) {
      return a.contains(e.ownerDocument, e);
    },
    ve = { composed: !0 };
  Bt.getRootNode &&
    (Qt = function (e) {
      return (
        a.contains(e.ownerDocument, e) || e.getRootNode(ve) === e.ownerDocument
      );
    });
  var Ce = function (e, i) {
    return (
      "none" === (e = i || e).style.display ||
      ("" === e.style.display && Qt(e) && "none" === a.css(e, "display"))
    );
  };
  function Ti(e, i, r, l) {
    var d,
      g,
      v = 20,
      E = l
        ? function () {
            return l.cur();
          }
        : function () {
            return a.css(e, i, "");
          },
      I = E(),
      O = (r && r[3]) || (a.cssNumber[i] ? "" : "px"),
      N =
        e.nodeType &&
        (a.cssNumber[i] || ("px" !== O && +I)) &&
        ce.exec(a.css(e, i));
    if (N && N[3] !== O) {
      for (O = O || N[3], N = +(I /= 2) || 1; v--; )
        a.style(e, i, N + O),
          (1 - g) * (1 - (g = E() / I || 0.5)) <= 0 && (v = 0),
          (N /= g);
      a.style(e, i, (N *= 2) + O), (r = r || []);
    }
    return (
      r &&
        ((N = +N || +I || 0),
        (d = r[1] ? N + (r[1] + 1) * r[2] : +r[2]),
        l && ((l.unit = O), (l.start = N), (l.end = d))),
      d
    );
  }
  var Ei = {};
  function Te(e, i) {
    for (var r, l, d, g, v, E, I, O = [], N = 0, B = e.length; N < B; N++)
      (l = e[N]).style &&
        ((r = l.style.display),
        i
          ? ("none" === r &&
              ((O[N] = M.get(l, "display") || null),
              O[N] || (l.style.display = "")),
            "" === l.style.display &&
              Ce(l) &&
              (O[N] =
                ((I = v = g = void 0),
                (v = (d = l).ownerDocument),
                (I = Ei[(E = d.nodeName)]) ||
                  ((g = v.body.appendChild(v.createElement(E))),
                  (I = a.css(g, "display")),
                  g.parentNode.removeChild(g),
                  "none" === I && (I = "block"),
                  (Ei[E] = I)))))
          : "none" !== r && ((O[N] = "none"), M.set(l, "display", r)));
    for (N = 0; N < B; N++) null != O[N] && (e[N].style.display = O[N]);
    return e;
  }
  a.fn.extend({
    show: function () {
      return Te(this, !0);
    },
    hide: function () {
      return Te(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Ce(this) ? a(this).show() : a(this).hide();
          });
    },
  });
  var ye,
    Ye,
    Ne = /^(?:checkbox|radio)$/i,
    Si = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ii = /^$|^module$|\/(?:java|ecma)script/i;
  (ye = p.createDocumentFragment().appendChild(p.createElement("div"))),
    (Ye = p.createElement("input")).setAttribute("type", "radio"),
    Ye.setAttribute("checked", "checked"),
    Ye.setAttribute("name", "t"),
    ye.appendChild(Ye),
    (c.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ye.innerHTML = "<textarea>x</textarea>"),
    (c.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue),
    (ye.innerHTML = "<option></option>"),
    (c.option = !!ye.lastChild);
  var ie = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Ft(e, i) {
    var r;
    return (
      (r =
        typeof e.getElementsByTagName < "u"
          ? e.getElementsByTagName(i || "*")
          : typeof e.querySelectorAll < "u"
          ? e.querySelectorAll(i || "*")
          : []),
      void 0 === i || (i && Tt(e, i)) ? a.merge([e], r) : r
    );
  }
  function si(e, i) {
    for (var r = 0, l = e.length; r < l; r++)
      M.set(e[r], "globalEval", !i || M.get(i[r], "globalEval"));
  }
  (ie.tbody = ie.tfoot = ie.colgroup = ie.caption = ie.thead),
    (ie.th = ie.td),
    c.option ||
      (ie.optgroup = ie.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var cn = /<|&#?\w+;/;
  function ki(e, i, r, l, d) {
    for (
      var g,
        v,
        E,
        I,
        O,
        N,
        B = i.createDocumentFragment(),
        P = [],
        H = 0,
        Z = e.length;
      H < Z;
      H++
    )
      if ((g = e[H]) || 0 === g)
        if ("object" === Y(g)) a.merge(P, g.nodeType ? [g] : g);
        else if (cn.test(g)) {
          for (
            v = v || B.appendChild(i.createElement("div")),
              E = (Si.exec(g) || ["", ""])[1].toLowerCase(),
              v.innerHTML =
                (I = ie[E] || ie._default)[1] + a.htmlPrefilter(g) + I[2],
              N = I[0];
            N--;

          )
            v = v.lastChild;
          a.merge(P, v.childNodes), ((v = B.firstChild).textContent = "");
        } else P.push(i.createTextNode(g));
    for (B.textContent = "", H = 0; (g = P[H++]); )
      if (l && -1 < a.inArray(g, l)) d && d.push(g);
      else if (
        ((O = Qt(g)), (v = Ft(B.appendChild(g), "script")), O && si(v), r)
      )
        for (N = 0; (g = v[N++]); ) Ii.test(g.type || "") && r.push(g);
    return B;
  }
  var zi = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function fn(e, i) {
    return (
      (e ===
        (function () {
          try {
            return p.activeElement;
          } catch {}
        })()) ==
      ("focus" === i)
    );
  }
  function oi(e, i, r, l, d, g) {
    var v, E;
    if ("object" == typeof i) {
      for (E in ("string" != typeof r && ((l = l || r), (r = void 0)), i))
        oi(e, E, r, l, i[E], g);
      return e;
    }
    if (
      (null == l && null == d
        ? ((d = r), (l = r = void 0))
        : null == d &&
          ("string" == typeof r
            ? ((d = l), (l = void 0))
            : ((d = l), (l = r), (r = void 0))),
      !1 === d)
    )
      d = Se;
    else if (!d) return e;
    return (
      1 === g &&
        ((v = d),
        ((d = function (I) {
          return a().off(I), v.apply(this, arguments);
        }).guid = v.guid || (v.guid = a.guid++))),
      e.each(function () {
        a.event.add(this, i, d, l, r);
      })
    );
  }
  function Qe(e, i, r) {
    r
      ? (M.set(e, i, !1),
        a.event.add(e, i, {
          namespace: !1,
          handler: function (l) {
            var d,
              g,
              v = M.get(this, i);
            if (1 & l.isTrigger && this[i]) {
              if (v.length)
                (a.event.special[i] || {}).delegateType && l.stopPropagation();
              else if (
                ((v = h.call(arguments)),
                M.set(this, i, v),
                (d = r(this, i)),
                this[i](),
                v !== (g = M.get(this, i)) || d ? M.set(this, i, !1) : (g = {}),
                v !== g)
              )
                return (
                  l.stopImmediatePropagation(), l.preventDefault(), g && g.value
                );
            } else
              v.length &&
                (M.set(this, i, {
                  value: a.event.trigger(
                    a.extend(v[0], a.Event.prototype),
                    v.slice(1),
                    this
                  ),
                }),
                l.stopImmediatePropagation());
          },
        }))
      : void 0 === M.get(e, i) && a.event.add(e, i, Ee);
  }
  (a.event = {
    global: {},
    add: function (e, i, r, l, d) {
      var g,
        v,
        E,
        I,
        O,
        N,
        B,
        P,
        H,
        Z,
        tt,
        J = M.get(e);
      if (w(e))
        for (
          r.handler && ((r = (g = r).handler), (d = g.selector)),
            d && a.find.matchesSelector(Bt, d),
            r.guid || (r.guid = a.guid++),
            (I = J.events) || (I = J.events = Object.create(null)),
            (v = J.handle) ||
              (v = J.handle =
                function (wt) {
                  return typeof a < "u" && a.event.triggered !== wt.type
                    ? a.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            O = (i = (i || "").match(Rt) || [""]).length;
          O--;

        )
          (H = tt = (E = zi.exec(i[O]) || [])[1]),
            (Z = (E[2] || "").split(".").sort()),
            H &&
              ((B = a.event.special[H] || {}),
              (B =
                a.event.special[(H = (d ? B.delegateType : B.bindType) || H)] ||
                {}),
              (N = a.extend(
                {
                  type: H,
                  origType: tt,
                  data: l,
                  handler: r,
                  guid: r.guid,
                  selector: d,
                  needsContext: d && a.expr.match.needsContext.test(d),
                  namespace: Z.join("."),
                },
                g
              )),
              (P = I[H]) ||
                (((P = I[H] = []).delegateCount = 0),
                (B.setup && !1 !== B.setup.call(e, l, Z, v)) ||
                  (e.addEventListener && e.addEventListener(H, v))),
              B.add &&
                (B.add.call(e, N), N.handler.guid || (N.handler.guid = r.guid)),
              d ? P.splice(P.delegateCount++, 0, N) : P.push(N),
              (a.event.global[H] = !0));
    },
    remove: function (e, i, r, l, d) {
      var g,
        v,
        E,
        I,
        O,
        N,
        B,
        P,
        H,
        Z,
        tt,
        J = M.hasData(e) && M.get(e);
      if (J && (I = J.events)) {
        for (O = (i = (i || "").match(Rt) || [""]).length; O--; )
          if (
            ((H = tt = (E = zi.exec(i[O]) || [])[1]),
            (Z = (E[2] || "").split(".").sort()),
            H)
          ) {
            for (
              B = a.event.special[H] || {},
                P = I[(H = (l ? B.delegateType : B.bindType) || H)] || [],
                E =
                  E[2] &&
                  new RegExp("(^|\\.)" + Z.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                v = g = P.length;
              g--;

            )
              (N = P[g]),
                (!d && tt !== N.origType) ||
                  (r && r.guid !== N.guid) ||
                  (E && !E.test(N.namespace)) ||
                  (l && l !== N.selector && ("**" !== l || !N.selector)) ||
                  (P.splice(g, 1),
                  N.selector && P.delegateCount--,
                  B.remove && B.remove.call(e, N));
            v &&
              !P.length &&
              ((B.teardown && !1 !== B.teardown.call(e, Z, J.handle)) ||
                a.removeEvent(e, H, J.handle),
              delete I[H]);
          } else for (H in I) a.event.remove(e, H + i[O], r, l, !0);
        a.isEmptyObject(I) && M.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var i,
        r,
        l,
        d,
        g,
        v,
        E = new Array(arguments.length),
        I = a.event.fix(e),
        O = (M.get(this, "events") || Object.create(null))[I.type] || [],
        N = a.event.special[I.type] || {};
      for (E[0] = I, i = 1; i < arguments.length; i++) E[i] = arguments[i];
      if (
        ((I.delegateTarget = this),
        !N.preDispatch || !1 !== N.preDispatch.call(this, I))
      ) {
        for (
          v = a.event.handlers.call(this, I, O), i = 0;
          (d = v[i++]) && !I.isPropagationStopped();

        )
          for (
            I.currentTarget = d.elem, r = 0;
            (g = d.handlers[r++]) && !I.isImmediatePropagationStopped();

          )
            (I.rnamespace &&
              !1 !== g.namespace &&
              !I.rnamespace.test(g.namespace)) ||
              ((I.handleObj = g),
              (I.data = g.data),
              void 0 !==
                (l = (
                  (a.event.special[g.origType] || {}).handle || g.handler
                ).apply(d.elem, E)) &&
                !1 === (I.result = l) &&
                (I.preventDefault(), I.stopPropagation()));
        return N.postDispatch && N.postDispatch.call(this, I), I.result;
      }
    },
    handlers: function (e, i) {
      var r,
        l,
        d,
        g,
        v,
        E = [],
        I = i.delegateCount,
        O = e.target;
      if (I && O.nodeType && !("click" === e.type && 1 <= e.button))
        for (; O !== this; O = O.parentNode || this)
          if (1 === O.nodeType && ("click" !== e.type || !0 !== O.disabled)) {
            for (g = [], v = {}, r = 0; r < I; r++)
              void 0 === v[(d = (l = i[r]).selector + " ")] &&
                (v[d] = l.needsContext
                  ? -1 < a(d, this).index(O)
                  : a.find(d, this, null, [O]).length),
                v[d] && g.push(l);
            g.length && E.push({ elem: O, handlers: g });
          }
      return (
        (O = this), I < i.length && E.push({ elem: O, handlers: i.slice(I) }), E
      );
    },
    addProp: function (e, i) {
      Object.defineProperty(a.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: R(i)
          ? function () {
              if (this.originalEvent) return i(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (r) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r,
          });
        },
      });
    },
    fix: function (e) {
      return e[a.expando] ? e : new a.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var i = this || e;
          return (
            Ne.test(i.type) && i.click && Tt(i, "input") && Qe(i, "click", Ee),
            !1
          );
        },
        trigger: function (e) {
          var i = this || e;
          return (
            Ne.test(i.type) && i.click && Tt(i, "input") && Qe(i, "click"), !0
          );
        },
        _default: function (e) {
          var i = e.target;
          return (
            (Ne.test(i.type) &&
              i.click &&
              Tt(i, "input") &&
              M.get(i, "click")) ||
            Tt(i, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (a.removeEvent = function (e, i, r) {
      e.removeEventListener && e.removeEventListener(i, r);
    }),
    (a.Event = function (e, i) {
      if (!(this instanceof a.Event)) return new a.Event(e, i);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        i && a.extend(this, i),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[a.expando] = !0);
    }),
    (a.Event.prototype = {
      constructor: a.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    a.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      a.event.addProp
    ),
    a.each({ focus: "focusin", blur: "focusout" }, function (e, i) {
      a.event.special[e] = {
        setup: function () {
          return Qe(this, e, fn), !1;
        },
        trigger: function () {
          return Qe(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: i,
      };
    }),
    a.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        a.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (r) {
            var l,
              d = r.relatedTarget,
              g = r.handleObj;
            return (
              (d && (d === this || a.contains(this, d))) ||
                ((r.type = g.origType),
                (l = g.handler.apply(this, arguments)),
                (r.type = i)),
              l
            );
          },
        };
      }
    ),
    a.fn.extend({
      on: function (e, i, r, l) {
        return oi(this, e, i, r, l);
      },
      one: function (e, i, r, l) {
        return oi(this, e, i, r, l, 1);
      },
      off: function (e, i, r) {
        var l, d;
        if (e && e.preventDefault && e.handleObj)
          return (
            (l = e.handleObj),
            a(e.delegateTarget).off(
              l.namespace ? l.origType + "." + l.namespace : l.origType,
              l.selector,
              l.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (d in e) this.off(d, i, e[d]);
          return this;
        }
        return (
          (!1 !== i && "function" != typeof i) || ((r = i), (i = void 0)),
          !1 === r && (r = Se),
          this.each(function () {
            a.event.remove(this, e, r, i);
          })
        );
      },
    });
  var dn = /<script|<style|<link/i,
    pn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    gn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Li(e, i) {
    return (
      (Tt(e, "table") &&
        Tt(11 !== i.nodeType ? i : i.firstChild, "tr") &&
        a(e).children("tbody")[0]) ||
      e
    );
  }
  function mn(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function vn(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ai(e, i) {
    var r, l, d, g, v, E;
    if (1 === i.nodeType) {
      if (M.hasData(e) && (E = M.get(e).events))
        for (d in (M.remove(i, "handle events"), E))
          for (r = 0, l = E[d].length; r < l; r++) a.event.add(i, d, E[d][r]);
      V.hasData(e) && ((g = V.access(e)), (v = a.extend({}, g)), V.set(i, v));
    }
  }
  function Ie(e, i, r, l) {
    i = n(i);
    var d,
      g,
      v,
      E,
      I,
      O,
      N = 0,
      B = e.length,
      P = B - 1,
      H = i[0],
      Z = R(H);
    if (Z || (1 < B && "string" == typeof H && !c.checkClone && pn.test(H)))
      return e.each(function (tt) {
        var J = e.eq(tt);
        Z && (i[0] = H.call(this, tt, J.html())), Ie(J, i, r, l);
      });
    if (
      B &&
      ((g = (d = ki(i, e[0].ownerDocument, !1, e, l)).firstChild),
      1 === d.childNodes.length && (d = g),
      g || l)
    ) {
      for (E = (v = a.map(Ft(d, "script"), mn)).length; N < B; N++)
        (I = d),
          N !== P &&
            ((I = a.clone(I, !0, !0)), E && a.merge(v, Ft(I, "script"))),
          r.call(e[N], I, N);
      if (E)
        for (O = v[v.length - 1].ownerDocument, a.map(v, vn), N = 0; N < E; N++)
          Ii.test((I = v[N]).type || "") &&
            !M.access(I, "globalEval") &&
            a.contains(O, I) &&
            (I.src && "module" !== (I.type || "").toLowerCase()
              ? a._evalUrl &&
                !I.noModule &&
                a._evalUrl(
                  I.src,
                  { nonce: I.nonce || I.getAttribute("nonce") },
                  O
                )
              : q(I.textContent.replace(gn, ""), I, O));
    }
    return e;
  }
  function Di(e, i, r) {
    for (var l, d = i ? a.filter(i, e) : e, g = 0; null != (l = d[g]); g++)
      r || 1 !== l.nodeType || a.cleanData(Ft(l)),
        l.parentNode &&
          (r && Qt(l) && si(Ft(l, "script")), l.parentNode.removeChild(l));
    return e;
  }
  a.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, i, r) {
      var l,
        d,
        g,
        v,
        E,
        I,
        O,
        N = e.cloneNode(!0),
        B = Qt(e);
      if (
        !(
          c.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          a.isXMLDoc(e)
        )
      )
        for (v = Ft(N), l = 0, d = (g = Ft(e)).length; l < d; l++)
          (E = g[l]),
            "input" === (O = (I = v[l]).nodeName.toLowerCase()) &&
            Ne.test(E.type)
              ? (I.checked = E.checked)
              : ("input" !== O && "textarea" !== O) ||
                (I.defaultValue = E.defaultValue);
      if (i)
        if (r)
          for (g = g || Ft(e), v = v || Ft(N), l = 0, d = g.length; l < d; l++)
            Ai(g[l], v[l]);
        else Ai(e, N);
      return (
        0 < (v = Ft(N, "script")).length && si(v, !B && Ft(e, "script")), N
      );
    },
    cleanData: function (e) {
      for (var i, r, l, d = a.event.special, g = 0; void 0 !== (r = e[g]); g++)
        if (w(r)) {
          if ((i = r[M.expando])) {
            if (i.events)
              for (l in i.events)
                d[l] ? a.event.remove(r, l) : a.removeEvent(r, l, i.handle);
            r[M.expando] = void 0;
          }
          r[V.expando] && (r[V.expando] = void 0);
        }
    },
  }),
    a.fn.extend({
      detach: function (e) {
        return Di(this, e, !0);
      },
      remove: function (e) {
        return Di(this, e);
      },
      text: function (e) {
        return re(
          this,
          function (i) {
            return void 0 === i
              ? a.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = i);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Li(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var i = Li(this, e);
            i.insertBefore(e, i.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, i = 0; null != (e = this[i]); i++)
          1 === e.nodeType && (a.cleanData(Ft(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, i) {
        return (
          (e = null != e && e),
          (i = i ?? e),
          this.map(function () {
            return a.clone(this, e, i);
          })
        );
      },
      html: function (e) {
        return re(
          this,
          function (i) {
            var r = this[0] || {},
              l = 0,
              d = this.length;
            if (void 0 === i && 1 === r.nodeType) return r.innerHTML;
            if (
              "string" == typeof i &&
              !dn.test(i) &&
              !ie[(Si.exec(i) || ["", ""])[1].toLowerCase()]
            ) {
              i = a.htmlPrefilter(i);
              try {
                for (; l < d; l++)
                  1 === (r = this[l] || {}).nodeType &&
                    (a.cleanData(Ft(r, !1)), (r.innerHTML = i));
                r = 0;
              } catch {}
            }
            r && this.empty().append(i);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Ie(
          this,
          arguments,
          function (i) {
            var r = this.parentNode;
            a.inArray(this, e) < 0 &&
              (a.cleanData(Ft(this)), r && r.replaceChild(i, this));
          },
          e
        );
      },
    }),
    a.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, i) {
        a.fn[e] = function (r) {
          for (var l, d = [], g = a(r), v = g.length - 1, E = 0; E <= v; E++)
            (l = E === v ? this : this.clone(!0)),
              a(g[E])[i](l),
              o.apply(d, l.get());
          return this.pushStack(d);
        };
      }
    );
  var ai = new RegExp("^(" + gt + ")(?!px)[a-z%]+$", "i"),
    Ge = function (e) {
      var i = e.ownerDocument.defaultView;
      return (i && i.opener) || (i = s), i.getComputedStyle(e);
    },
    Oi = function (e, i, r) {
      var l,
        d,
        g = {};
      for (d in i) (g[d] = e.style[d]), (e.style[d] = i[d]);
      for (d in ((l = r.call(e)), i)) e.style[d] = g[d];
      return l;
    },
    yn = new RegExp(Ot.join("|"), "i");
  function He(e, i, r) {
    var l,
      d,
      g,
      v,
      E = e.style;
    return (
      (r = r || Ge(e)) &&
        ("" !== (v = r.getPropertyValue(i) || r[i]) ||
          Qt(e) ||
          (v = a.style(e, i)),
        !c.pixelBoxStyles() &&
          ai.test(v) &&
          yn.test(i) &&
          ((l = E.width),
          (d = E.minWidth),
          (g = E.maxWidth),
          (E.minWidth = E.maxWidth = E.width = v),
          (v = r.width),
          (E.width = l),
          (E.minWidth = d),
          (E.maxWidth = g))),
      void 0 !== v ? v + "" : v
    );
  }
  function ji(e, i) {
    return {
      get: function () {
        if (!e()) return (this.get = i).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (O) {
        (I.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (O.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          Bt.appendChild(I).appendChild(O);
        var N = s.getComputedStyle(O);
        (r = "1%" !== N.top),
          (E = 12 === i(N.marginLeft)),
          (O.style.right = "60%"),
          (g = 36 === i(N.right)),
          (l = 36 === i(N.width)),
          (O.style.position = "absolute"),
          (d = 12 === i(O.offsetWidth / 3)),
          Bt.removeChild(I),
          (O = null);
      }
    }
    function i(N) {
      return Math.round(parseFloat(N));
    }
    var r,
      l,
      d,
      g,
      v,
      E,
      I = p.createElement("div"),
      O = p.createElement("div");
    O.style &&
      ((O.style.backgroundClip = "content-box"),
      (O.cloneNode(!0).style.backgroundClip = ""),
      (c.clearCloneStyle = "content-box" === O.style.backgroundClip),
      a.extend(c, {
        boxSizingReliable: function () {
          return e(), l;
        },
        pixelBoxStyles: function () {
          return e(), g;
        },
        pixelPosition: function () {
          return e(), r;
        },
        reliableMarginLeft: function () {
          return e(), E;
        },
        scrollboxSize: function () {
          return e(), d;
        },
        reliableTrDimensions: function () {
          var N, B, P, H;
          return (
            null == v &&
              ((N = p.createElement("table")),
              (B = p.createElement("tr")),
              (P = p.createElement("div")),
              (N.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (B.style.cssText = "border:1px solid"),
              (B.style.height = "1px"),
              (P.style.height = "9px"),
              (P.style.display = "block"),
              Bt.appendChild(N).appendChild(B).appendChild(P),
              (H = s.getComputedStyle(B)),
              (v =
                parseInt(H.height, 10) +
                  parseInt(H.borderTopWidth, 10) +
                  parseInt(H.borderBottomWidth, 10) ===
                B.offsetHeight),
              Bt.removeChild(N)),
            v
          );
        },
      }));
  })();
  var Mi = ["Webkit", "Moz", "ms"],
    Pi = p.createElement("div").style,
    Ni = {};
  function li(e) {
    return (
      a.cssProps[e] ||
      Ni[e] ||
      (e in Pi
        ? e
        : (Ni[e] =
            (function (r) {
              for (
                var l = r[0].toUpperCase() + r.slice(1), d = Mi.length;
                d--;

              )
                if ((r = Mi[d] + l) in Pi) return r;
            })(e) || e))
    );
  }
  var bn = /^(none|table(?!-c[ea]).+)/,
    Hi = /^--/,
    xn = { position: "absolute", visibility: "hidden", display: "block" },
    qi = { letterSpacing: "0", fontWeight: "400" };
  function Ri(e, i, r) {
    var l = ce.exec(i);
    return l ? Math.max(0, l[2] - (r || 0)) + (l[3] || "px") : i;
  }
  function ui(e, i, r, l, d, g) {
    var v = "width" === i ? 1 : 0,
      E = 0,
      I = 0;
    if (r === (l ? "border" : "content")) return 0;
    for (; v < 4; v += 2)
      "margin" === r && (I += a.css(e, r + Ot[v], !0, d)),
        l
          ? ("content" === r && (I -= a.css(e, "padding" + Ot[v], !0, d)),
            "margin" !== r &&
              (I -= a.css(e, "border" + Ot[v] + "Width", !0, d)))
          : ((I += a.css(e, "padding" + Ot[v], !0, d)),
            "padding" !== r
              ? (I += a.css(e, "border" + Ot[v] + "Width", !0, d))
              : (E += a.css(e, "border" + Ot[v] + "Width", !0, d)));
    return (
      !l &&
        0 <= g &&
        (I +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + i[0].toUpperCase() + i.slice(1)] - g - I - E - 0.5
            )
          ) || 0),
      I
    );
  }
  function Wi(e, i, r) {
    var l = Ge(e),
      d =
        (!c.boxSizingReliable() || r) &&
        "border-box" === a.css(e, "boxSizing", !1, l),
      g = d,
      v = He(e, i, l),
      E = "offset" + i[0].toUpperCase() + i.slice(1);
    if (ai.test(v)) {
      if (!r) return v;
      v = "auto";
    }
    return (
      ((!c.boxSizingReliable() && d) ||
        (!c.reliableTrDimensions() && Tt(e, "tr")) ||
        "auto" === v ||
        (!parseFloat(v) && "inline" === a.css(e, "display", !1, l))) &&
        e.getClientRects().length &&
        ((d = "border-box" === a.css(e, "boxSizing", !1, l)),
        (g = E in e) && (v = e[E])),
      (v = parseFloat(v) || 0) +
        ui(e, i, r || (d ? "border" : "content"), g, l, v) +
        "px"
    );
  }
  function se(e, i, r, l, d) {
    return new se.prototype.init(e, i, r, l, d);
  }
  a.extend({
    cssHooks: {
      opacity: {
        get: function (e, i) {
          if (i) {
            var r = He(e, "opacity");
            return "" === r ? "1" : r;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, i, r, l) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var d,
          g,
          v,
          E = Wt(i),
          I = Hi.test(i),
          O = e.style;
        if (
          (I || (i = li(E)), (v = a.cssHooks[i] || a.cssHooks[E]), void 0 === r)
        )
          return v && "get" in v && void 0 !== (d = v.get(e, !1, l)) ? d : O[i];
        "string" == (g = typeof r) &&
          (d = ce.exec(r)) &&
          d[1] &&
          ((r = Ti(e, i, d)), (g = "number")),
          null != r &&
            r == r &&
            ("number" !== g ||
              I ||
              (r += (d && d[3]) || (a.cssNumber[E] ? "" : "px")),
            c.clearCloneStyle ||
              "" !== r ||
              0 !== i.indexOf("background") ||
              (O[i] = "inherit"),
            (v && "set" in v && void 0 === (r = v.set(e, r, l))) ||
              (I ? O.setProperty(i, r) : (O[i] = r)));
      }
    },
    css: function (e, i, r, l) {
      var d,
        g,
        v,
        E = Wt(i);
      return (
        Hi.test(i) || (i = li(E)),
        (v = a.cssHooks[i] || a.cssHooks[E]) &&
          "get" in v &&
          (d = v.get(e, !0, r)),
        void 0 === d && (d = He(e, i, l)),
        "normal" === d && i in qi && (d = qi[i]),
        "" === r || r
          ? ((g = parseFloat(d)), !0 === r || isFinite(g) ? g || 0 : d)
          : d
      );
    },
  }),
    a.each(["height", "width"], function (e, i) {
      a.cssHooks[i] = {
        get: function (r, l, d) {
          if (l)
            return !bn.test(a.css(r, "display")) ||
              (r.getClientRects().length && r.getBoundingClientRect().width)
              ? Wi(r, i, d)
              : Oi(r, xn, function () {
                  return Wi(r, i, d);
                });
        },
        set: function (r, l, d) {
          var g,
            v = Ge(r),
            E = !c.scrollboxSize() && "absolute" === v.position,
            I = (E || d) && "border-box" === a.css(r, "boxSizing", !1, v),
            O = d ? ui(r, i, d, I, v) : 0;
          return (
            I &&
              E &&
              (O -= Math.ceil(
                r["offset" + i[0].toUpperCase() + i.slice(1)] -
                  parseFloat(v[i]) -
                  ui(r, i, "border", !1, v) -
                  0.5
              )),
            O &&
              (g = ce.exec(l)) &&
              "px" !== (g[3] || "px") &&
              ((r.style[i] = l), (l = a.css(r, i))),
            Ri(0, l, O)
          );
        },
      };
    }),
    (a.cssHooks.marginLeft = ji(c.reliableMarginLeft, function (e, i) {
      if (i)
        return (
          (parseFloat(He(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Oi(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    a.each({ margin: "", padding: "", border: "Width" }, function (e, i) {
      (a.cssHooks[e + i] = {
        expand: function (r) {
          for (
            var l = 0, d = {}, g = "string" == typeof r ? r.split(" ") : [r];
            l < 4;
            l++
          )
            d[e + Ot[l] + i] = g[l] || g[l - 2] || g[0];
          return d;
        },
      }),
        "margin" !== e && (a.cssHooks[e + i].set = Ri);
    }),
    a.fn.extend({
      css: function (e, i) {
        return re(
          this,
          function (r, l, d) {
            var g,
              v,
              E = {},
              I = 0;
            if (Array.isArray(l)) {
              for (g = Ge(r), v = l.length; I < v; I++)
                E[l[I]] = a.css(r, l[I], !1, g);
              return E;
            }
            return void 0 !== d ? a.style(r, l, d) : a.css(r, l);
          },
          e,
          i,
          1 < arguments.length
        );
      },
    }),
    (((a.Tween = se).prototype = {
      constructor: se,
      init: function (e, i, r, l, d, g) {
        (this.elem = e),
          (this.prop = r),
          (this.easing = d || a.easing._default),
          (this.options = i),
          (this.start = this.now = this.cur()),
          (this.end = l),
          (this.unit = g || (a.cssNumber[r] ? "" : "px"));
      },
      cur: function () {
        var e = se.propHooks[this.prop];
        return e && e.get ? e.get(this) : se.propHooks._default.get(this);
      },
      run: function (e) {
        var i,
          r = se.propHooks[this.prop];
        return (
          (this.pos = i =
            this.options.duration
              ? a.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * i + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          r && r.set ? r.set(this) : se.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = se.prototype),
    ((se.propHooks = {
      _default: {
        get: function (e) {
          var i;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (i = a.css(e.elem, e.prop, "")) && "auto" !== i
            ? i
            : 0;
        },
        set: function (e) {
          a.fx.step[e.prop]
            ? a.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!a.cssHooks[e.prop] && null == e.elem.style[li(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : a.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = se.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (a.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (a.fx = se.prototype.init),
    (a.fx.step = {});
  var ke,
    Xe,
    ze,
    Bi,
    wn = /^(?:toggle|show|hide)$/,
    _n = /queueHooks$/;
  function hi() {
    Xe &&
      (!1 === p.hidden && s.requestAnimationFrame
        ? s.requestAnimationFrame(hi)
        : s.setTimeout(hi, a.fx.interval),
      a.fx.tick());
  }
  function Fi() {
    return (
      s.setTimeout(function () {
        ke = void 0;
      }),
      (ke = Date.now())
    );
  }
  function Ze(e, i) {
    var r,
      l = 0,
      d = { height: e };
    for (i = i ? 1 : 0; l < 4; l += 2 - i)
      d["margin" + (r = Ot[l])] = d["padding" + r] = e;
    return i && (d.opacity = d.width = e), d;
  }
  function Vi(e, i, r) {
    for (
      var l,
        d = (oe.tweeners[i] || []).concat(oe.tweeners["*"]),
        g = 0,
        v = d.length;
      g < v;
      g++
    )
      if ((l = d[g].call(r, i, e))) return l;
  }
  function oe(e, i, r) {
    var l,
      d,
      g = 0,
      v = oe.prefilters.length,
      E = a.Deferred().always(function () {
        delete I.elem;
      }),
      I = function () {
        if (d) return !1;
        for (
          var B = ke || Fi(),
            P = Math.max(0, O.startTime + O.duration - B),
            H = 1 - (P / O.duration || 0),
            Z = 0,
            tt = O.tweens.length;
          Z < tt;
          Z++
        )
          O.tweens[Z].run(H);
        return (
          E.notifyWith(e, [O, H, P]),
          H < 1 && tt
            ? P
            : (tt || E.notifyWith(e, [O, 1, 0]), E.resolveWith(e, [O]), !1)
        );
      },
      O = E.promise({
        elem: e,
        props: a.extend({}, i),
        opts: a.extend(!0, { specialEasing: {}, easing: a.easing._default }, r),
        originalProperties: i,
        originalOptions: r,
        startTime: ke || Fi(),
        duration: r.duration,
        tweens: [],
        createTween: function (B, P) {
          var H = a.Tween(
            e,
            O.opts,
            B,
            P,
            O.opts.specialEasing[B] || O.opts.easing
          );
          return O.tweens.push(H), H;
        },
        stop: function (B) {
          var P = 0,
            H = B ? O.tweens.length : 0;
          if (d) return this;
          for (d = !0; P < H; P++) O.tweens[P].run(1);
          return (
            B
              ? (E.notifyWith(e, [O, 1, 0]), E.resolveWith(e, [O, B]))
              : E.rejectWith(e, [O, B]),
            this
          );
        },
      }),
      N = O.props;
    for (
      (function (B, P) {
        var H, Z, tt, J, wt;
        for (H in B)
          if (
            ((tt = P[(Z = Wt(H))]),
            (J = B[H]),
            Array.isArray(J) && ((tt = J[1]), (J = B[H] = J[0])),
            H !== Z && ((B[Z] = J), delete B[H]),
            (wt = a.cssHooks[Z]) && ("expand" in wt))
          )
            for (H in ((J = wt.expand(J)), delete B[Z], J))
              (H in B) || ((B[H] = J[H]), (P[H] = tt));
          else P[Z] = tt;
      })(N, O.opts.specialEasing);
      g < v;
      g++
    )
      if ((l = oe.prefilters[g].call(O, e, N, O.opts)))
        return (
          R(l.stop) &&
            (a._queueHooks(O.elem, O.opts.queue).stop = l.stop.bind(l)),
          l
        );
    return (
      a.map(N, Vi, O),
      R(O.opts.start) && O.opts.start.call(e, O),
      O.progress(O.opts.progress)
        .done(O.opts.done, O.opts.complete)
        .fail(O.opts.fail)
        .always(O.opts.always),
      a.fx.timer(a.extend(I, { elem: e, anim: O, queue: O.opts.queue })),
      O
    );
  }
  (a.Animation = a.extend(oe, {
    tweeners: {
      "*": [
        function (e, i) {
          var r = this.createTween(e, i);
          return Ti(r.elem, e, ce.exec(i), r), r;
        },
      ],
    },
    tweener: function (e, i) {
      R(e) ? ((i = e), (e = ["*"])) : (e = e.match(Rt));
      for (var r, l = 0, d = e.length; l < d; l++)
        (oe.tweeners[(r = e[l])] = oe.tweeners[r] || []).unshift(i);
    },
    prefilters: [
      function (e, i, r) {
        var l,
          d,
          g,
          v,
          E,
          I,
          O,
          N,
          B = "width" in i || "height" in i,
          P = this,
          H = {},
          Z = e.style,
          tt = e.nodeType && Ce(e),
          J = M.get(e, "fxshow");
        for (l in (r.queue ||
          (null == (v = a._queueHooks(e, "fx")).unqueued &&
            ((v.unqueued = 0),
            (E = v.empty.fire),
            (v.empty.fire = function () {
              v.unqueued || E();
            })),
          v.unqueued++,
          P.always(function () {
            P.always(function () {
              v.unqueued--, a.queue(e, "fx").length || v.empty.fire();
            });
          })),
        i))
          if (wn.test((d = i[l]))) {
            if (
              (delete i[l],
              (g = g || "toggle" === d),
              d === (tt ? "hide" : "show"))
            ) {
              if ("show" !== d || !J || void 0 === J[l]) continue;
              tt = !0;
            }
            H[l] = (J && J[l]) || a.style(e, l);
          }
        if ((I = !a.isEmptyObject(i)) || !a.isEmptyObject(H))
          for (l in (B &&
            1 === e.nodeType &&
            ((r.overflow = [Z.overflow, Z.overflowX, Z.overflowY]),
            null == (O = J && J.display) && (O = M.get(e, "display")),
            "none" === (N = a.css(e, "display")) &&
              (O
                ? (N = O)
                : (Te([e], !0),
                  (O = e.style.display || O),
                  (N = a.css(e, "display")),
                  Te([e]))),
            ("inline" === N || ("inline-block" === N && null != O)) &&
              "none" === a.css(e, "float") &&
              (I ||
                (P.done(function () {
                  Z.display = O;
                }),
                null == O && (O = "none" === (N = Z.display) ? "" : N)),
              (Z.display = "inline-block"))),
          r.overflow &&
            ((Z.overflow = "hidden"),
            P.always(function () {
              (Z.overflow = r.overflow[0]),
                (Z.overflowX = r.overflow[1]),
                (Z.overflowY = r.overflow[2]);
            })),
          (I = !1),
          H))
            I ||
              (J
                ? "hidden" in J && (tt = J.hidden)
                : (J = M.access(e, "fxshow", { display: O })),
              g && (J.hidden = !tt),
              tt && Te([e], !0),
              P.done(function () {
                for (l in (tt || Te([e]), M.remove(e, "fxshow"), H))
                  a.style(e, l, H[l]);
              })),
              (I = Vi(tt ? J[l] : 0, l, P)),
              l in J ||
                ((J[l] = I.start), tt && ((I.end = I.start), (I.start = 0)));
      },
    ],
    prefilter: function (e, i) {
      i ? oe.prefilters.unshift(e) : oe.prefilters.push(e);
    },
  })),
    (a.speed = function (e, i, r) {
      var l =
        e && "object" == typeof e
          ? a.extend({}, e)
          : {
              complete: r || (!r && i) || (R(e) && e),
              duration: e,
              easing: (r && i) || (i && !R(i) && i),
            };
      return (
        a.fx.off
          ? (l.duration = 0)
          : "number" != typeof l.duration &&
            (l.duration =
              l.duration in a.fx.speeds
                ? a.fx.speeds[l.duration]
                : a.fx.speeds._default),
        (null != l.queue && !0 !== l.queue) || (l.queue = "fx"),
        (l.old = l.complete),
        (l.complete = function () {
          R(l.old) && l.old.call(this), l.queue && a.dequeue(this, l.queue);
        }),
        l
      );
    }),
    a.fn.extend({
      fadeTo: function (e, i, r, l) {
        return this.filter(Ce)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: i }, e, r, l);
      },
      animate: function (e, i, r, l) {
        var d = a.isEmptyObject(e),
          g = a.speed(i, r, l),
          v = function () {
            var E = oe(this, a.extend({}, e), g);
            (d || M.get(this, "finish")) && E.stop(!0);
          };
        return (
          (v.finish = v),
          d || !1 === g.queue ? this.each(v) : this.queue(g.queue, v)
        );
      },
      stop: function (e, i, r) {
        var l = function (d) {
          var g = d.stop;
          delete d.stop, g(r);
        };
        return (
          "string" != typeof e && ((r = i), (i = e), (e = void 0)),
          i && this.queue(e || "fx", []),
          this.each(function () {
            var d = !0,
              g = null != e && e + "queueHooks",
              v = a.timers,
              E = M.get(this);
            if (g) E[g] && E[g].stop && l(E[g]);
            else for (g in E) E[g] && E[g].stop && _n.test(g) && l(E[g]);
            for (g = v.length; g--; )
              v[g].elem !== this ||
                (null != e && v[g].queue !== e) ||
                (v[g].anim.stop(r), (d = !1), v.splice(g, 1));
            (!d && r) || a.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var i,
              r = M.get(this),
              l = r[e + "queue"],
              d = r[e + "queueHooks"],
              g = a.timers,
              v = l ? l.length : 0;
            for (
              r.finish = !0,
                a.queue(this, e, []),
                d && d.stop && d.stop.call(this, !0),
                i = g.length;
              i--;

            )
              g[i].elem === this &&
                g[i].queue === e &&
                (g[i].anim.stop(!0), g.splice(i, 1));
            for (i = 0; i < v; i++)
              l[i] && l[i].finish && l[i].finish.call(this);
            delete r.finish;
          })
        );
      },
    }),
    a.each(["toggle", "show", "hide"], function (e, i) {
      var r = a.fn[i];
      a.fn[i] = function (l, d, g) {
        return null == l || "boolean" == typeof l
          ? r.apply(this, arguments)
          : this.animate(Ze(i, !0), l, d, g);
      };
    }),
    a.each(
      {
        slideDown: Ze("show"),
        slideUp: Ze("hide"),
        slideToggle: Ze("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, i) {
        a.fn[e] = function (r, l, d) {
          return this.animate(i, r, l, d);
        };
      }
    ),
    (a.timers = []),
    (a.fx.tick = function () {
      var e,
        i = 0,
        r = a.timers;
      for (ke = Date.now(); i < r.length; i++)
        (e = r[i])() || r[i] !== e || r.splice(i--, 1);
      r.length || a.fx.stop(), (ke = void 0);
    }),
    (a.fx.timer = function (e) {
      a.timers.push(e), a.fx.start();
    }),
    (a.fx.interval = 13),
    (a.fx.start = function () {
      Xe || ((Xe = !0), hi());
    }),
    (a.fx.stop = function () {
      Xe = null;
    }),
    (a.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (a.fn.delay = function (e, i) {
      return (
        (e = (a.fx && a.fx.speeds[e]) || e),
        this.queue((i = i || "fx"), function (r, l) {
          var d = s.setTimeout(r, e);
          l.stop = function () {
            s.clearTimeout(d);
          };
        })
      );
    }),
    (ze = p.createElement("input")),
    (Bi = p.createElement("select").appendChild(p.createElement("option"))),
    (ze.type = "checkbox"),
    (c.checkOn = "" !== ze.value),
    (c.optSelected = Bi.selected),
    ((ze = p.createElement("input")).value = "t"),
    (ze.type = "radio"),
    (c.radioValue = "t" === ze.value);
  var Ui,
    qe = a.expr.attrHandle;
  a.fn.extend({
    attr: function (e, i) {
      return re(this, a.attr, e, i, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        a.removeAttr(this, e);
      });
    },
  }),
    a.extend({
      attr: function (e, i, r) {
        var l,
          d,
          g = e.nodeType;
        if (3 !== g && 8 !== g && 2 !== g)
          return typeof e.getAttribute > "u"
            ? a.prop(e, i, r)
            : ((1 === g && a.isXMLDoc(e)) ||
                (d =
                  a.attrHooks[i.toLowerCase()] ||
                  (a.expr.match.bool.test(i) ? Ui : void 0)),
              void 0 !== r
                ? null === r
                  ? void a.removeAttr(e, i)
                  : d && "set" in d && void 0 !== (l = d.set(e, r, i))
                  ? l
                  : (e.setAttribute(i, r + ""), r)
                : d && "get" in d && null !== (l = d.get(e, i))
                ? l
                : null == (l = a.find.attr(e, i))
                ? void 0
                : l);
      },
      attrHooks: {
        type: {
          set: function (e, i) {
            if (!c.radioValue && "radio" === i && Tt(e, "input")) {
              var r = e.value;
              return e.setAttribute("type", i), r && (e.value = r), i;
            }
          },
        },
      },
      removeAttr: function (e, i) {
        var r,
          l = 0,
          d = i && i.match(Rt);
        if (d && 1 === e.nodeType) for (; (r = d[l++]); ) e.removeAttribute(r);
      },
    }),
    (Ui = {
      set: function (e, i, r) {
        return !1 === i ? a.removeAttr(e, r) : e.setAttribute(r, r), r;
      },
    }),
    a.each(a.expr.match.bool.source.match(/\w+/g), function (e, i) {
      var r = qe[i] || a.find.attr;
      qe[i] = function (l, d, g) {
        var v,
          E,
          I = d.toLowerCase();
        return (
          g ||
            ((E = qe[I]),
            (qe[I] = v),
            (v = null != r(l, d, g) ? I : null),
            (qe[I] = E)),
          v
        );
      };
    });
  var Cn = /^(?:input|select|textarea|button)$/i,
    Tn = /^(?:a|area)$/i;
  function be(e) {
    return (e.match(Rt) || []).join(" ");
  }
  function xe(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function ci(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(Rt)) || [];
  }
  a.fn.extend({
    prop: function (e, i) {
      return re(this, a.prop, e, i, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[a.propFix[e] || e];
      });
    },
  }),
    a.extend({
      prop: function (e, i, r) {
        var l,
          d,
          g = e.nodeType;
        if (3 !== g && 8 !== g && 2 !== g)
          return (
            (1 === g && a.isXMLDoc(e)) ||
              (d = a.propHooks[(i = a.propFix[i] || i)]),
            void 0 !== r
              ? d && "set" in d && void 0 !== (l = d.set(e, r, i))
                ? l
                : (e[i] = r)
              : d && "get" in d && null !== (l = d.get(e, i))
              ? l
              : e[i]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var i = a.find.attr(e, "tabindex");
            return i
              ? parseInt(i, 10)
              : Cn.test(e.nodeName) || (Tn.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    c.optSelected ||
      (a.propHooks.selected = {
        get: function (e) {
          return null;
        },
        set: function (e) {},
      }),
    a.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        a.propFix[this.toLowerCase()] = this;
      }
    ),
    a.fn.extend({
      addClass: function (e) {
        var i,
          r,
          l,
          d,
          g,
          v,
          E,
          I = 0;
        if (R(e))
          return this.each(function (O) {
            a(this).addClass(e.call(this, O, xe(this)));
          });
        if ((i = ci(e)).length)
          for (; (r = this[I++]); )
            if (((d = xe(r)), (l = 1 === r.nodeType && " " + be(d) + " "))) {
              for (v = 0; (g = i[v++]); )
                l.indexOf(" " + g + " ") < 0 && (l += g + " ");
              d !== (E = be(l)) && r.setAttribute("class", E);
            }
        return this;
      },
      removeClass: function (e) {
        var i,
          r,
          l,
          d,
          g,
          v,
          E,
          I = 0;
        if (R(e))
          return this.each(function (O) {
            a(this).removeClass(e.call(this, O, xe(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((i = ci(e)).length)
          for (; (r = this[I++]); )
            if (((d = xe(r)), (l = 1 === r.nodeType && " " + be(d) + " "))) {
              for (v = 0; (g = i[v++]); )
                for (; -1 < l.indexOf(" " + g + " "); )
                  l = l.replace(" " + g + " ", " ");
              d !== (E = be(l)) && r.setAttribute("class", E);
            }
        return this;
      },
      toggleClass: function (e, i) {
        var r = typeof e,
          l = "string" === r || Array.isArray(e);
        return "boolean" == typeof i && l
          ? i
            ? this.addClass(e)
            : this.removeClass(e)
          : R(e)
          ? this.each(function (d) {
              a(this).toggleClass(e.call(this, d, xe(this), i), i);
            })
          : this.each(function () {
              var d, g, v, E;
              if (l)
                for (g = 0, v = a(this), E = ci(e); (d = E[g++]); )
                  v.hasClass(d) ? v.removeClass(d) : v.addClass(d);
              else
                (void 0 !== e && "boolean" !== r) ||
                  ((d = xe(this)) && M.set(this, "__className__", d),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      d || !1 === e ? "" : M.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var i,
          r,
          l = 0;
        for (i = " " + e + " "; (r = this[l++]); )
          if (1 === r.nodeType && -1 < (" " + be(xe(r)) + " ").indexOf(i))
            return !0;
        return !1;
      },
    });
  var En = /\r/g;
  a.fn.extend({
    val: function (e) {
      var i,
        r,
        l,
        d = this[0];
      return arguments.length
        ? ((l = R(e)),
          this.each(function (g) {
            var v;
            1 === this.nodeType &&
              (null == (v = l ? e.call(this, g, a(this).val()) : e)
                ? (v = "")
                : "number" == typeof v
                ? (v += "")
                : Array.isArray(v) &&
                  (v = a.map(v, function (E) {
                    return null == E ? "" : E + "";
                  })),
              ((i =
                a.valHooks[this.type] ||
                a.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                void 0 !== i.set(this, v, "value")) ||
                (this.value = v));
          }))
        : d
        ? (i = a.valHooks[d.type] || a.valHooks[d.nodeName.toLowerCase()]) &&
          "get" in i &&
          void 0 !== (r = i.get(d, "value"))
          ? r
          : "string" == typeof (r = d.value)
          ? r.replace(En, "")
          : r ?? ""
        : void 0;
    },
  }),
    a.extend({
      valHooks: {
        option: {
          get: function (e) {
            return a.find.attr(e, "value") ?? be(a.text(e));
          },
        },
        select: {
          get: function (e) {
            var i,
              r,
              l,
              d = e.options,
              g = e.selectedIndex,
              v = "select-one" === e.type,
              E = v ? null : [],
              I = v ? g + 1 : d.length;
            for (l = g < 0 ? I : v ? g : 0; l < I; l++)
              if (
                ((r = d[l]).selected || l === g) &&
                !r.disabled &&
                (!r.parentNode.disabled || !Tt(r.parentNode, "optgroup"))
              ) {
                if (((i = a(r).val()), v)) return i;
                E.push(i);
              }
            return E;
          },
          set: function (e, i) {
            for (
              var r, l, d = e.options, g = a.makeArray(i), v = d.length;
              v--;

            )
              ((l = d[v]).selected =
                -1 < a.inArray(a.valHooks.option.get(l), g)) && (r = !0);
            return r || (e.selectedIndex = -1), g;
          },
        },
      },
    }),
    a.each(["radio", "checkbox"], function () {
      (a.valHooks[this] = {
        set: function (e, i) {
          if (Array.isArray(i))
            return (e.checked = -1 < a.inArray(a(e).val(), i));
        },
      }),
        c.checkOn ||
          (a.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (c.focusin = "onfocusin" in s);
  var Yi = /^(?:focusinfocus|focusoutblur)$/,
    Qi = function (e) {
      e.stopPropagation();
    };
  a.extend(a.event, {
    trigger: function (e, i, r, l) {
      var d,
        g,
        v,
        E,
        I,
        O,
        N,
        B,
        P = [r || p],
        H = x.call(e, "type") ? e.type : e,
        Z = x.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((g = B = v = r = r || p),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Yi.test(H + a.event.triggered) &&
          (-1 < H.indexOf(".") && ((H = (Z = H.split(".")).shift()), Z.sort()),
          (I = H.indexOf(":") < 0 && "on" + H),
          ((e = e[a.expando]
            ? e
            : new a.Event(H, "object" == typeof e && e)).isTrigger = l ? 2 : 3),
          (e.namespace = Z.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + Z.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = r),
          (i = null == i ? [e] : a.makeArray(i, [e])),
          (N = a.event.special[H] || {}),
          l || !N.trigger || !1 !== N.trigger.apply(r, i)))
      ) {
        if (!l && !N.noBubble && !_(r)) {
          for (
            Yi.test((E = N.delegateType || H) + H) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            P.push(g), (v = g);
          v === (r.ownerDocument || p) &&
            P.push(v.defaultView || v.parentWindow || s);
        }
        for (d = 0; (g = P[d++]) && !e.isPropagationStopped(); )
          (B = g),
            (e.type = 1 < d ? E : N.bindType || H),
            (O =
              (M.get(g, "events") || Object.create(null))[e.type] &&
              M.get(g, "handle")) && O.apply(g, i),
            (O = I && g[I]) &&
              O.apply &&
              w(g) &&
              ((e.result = O.apply(g, i)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = H),
          l ||
            e.isDefaultPrevented() ||
            (N._default && !1 !== N._default.apply(P.pop(), i)) ||
            !w(r) ||
            (I &&
              R(r[H]) &&
              !_(r) &&
              ((v = r[I]) && (r[I] = null),
              (a.event.triggered = H),
              e.isPropagationStopped() && B.addEventListener(H, Qi),
              r[H](),
              e.isPropagationStopped() && B.removeEventListener(H, Qi),
              (a.event.triggered = void 0),
              v && (r[I] = v))),
          e.result
        );
      }
    },
    simulate: function (e, i, r) {
      var l = a.extend(new a.Event(), r, { type: e, isSimulated: !0 });
      a.event.trigger(l, null, i);
    },
  }),
    a.fn.extend({
      trigger: function (e, i) {
        return this.each(function () {
          a.event.trigger(e, i, this);
        });
      },
      triggerHandler: function (e, i) {
        var r = this[0];
        if (r) return a.event.trigger(e, i, r, !0);
      },
    }),
    c.focusin ||
      a.each({ focus: "focusin", blur: "focusout" }, function (e, i) {
        var r = function (l) {
          a.event.simulate(i, l.target, a.event.fix(l));
        };
        a.event.special[i] = {
          setup: function () {
            var l = this.ownerDocument || this.document || this,
              d = M.access(l, i);
            d || l.addEventListener(e, r, !0), M.access(l, i, (d || 0) + 1);
          },
          teardown: function () {
            var l = this.ownerDocument || this.document || this,
              d = M.access(l, i) - 1;
            d
              ? M.access(l, i, d)
              : (l.removeEventListener(e, r, !0), M.remove(l, i));
          },
        };
      });
  var Re = s.location,
    Gi = { guid: Date.now() },
    fi = /\?/;
  a.parseXML = function (e) {
    var i, r;
    if (!e || "string" != typeof e) return null;
    try {
      i = new s.DOMParser().parseFromString(e, "text/xml");
    } catch {}
    return (
      (r = i && i.getElementsByTagName("parsererror")[0]),
      (i && !r) ||
        a.error(
          "Invalid XML: " +
            (r
              ? a
                  .map(r.childNodes, function (l) {
                    return l.textContent;
                  })
                  .join("\n")
              : e)
        ),
      i
    );
  };
  var Sn = /\[\]$/,
    Xi = /\r?\n/g,
    In = /^(?:submit|button|image|reset|file)$/i,
    kn = /^(?:input|select|textarea|keygen)/i;
  function di(e, i, r, l) {
    var d;
    if (Array.isArray(i))
      a.each(i, function (g, v) {
        r || Sn.test(e)
          ? l(e, v)
          : di(
              e + "[" + ("object" == typeof v && null != v ? g : "") + "]",
              v,
              r,
              l
            );
      });
    else if (r || "object" !== Y(i)) l(e, i);
    else for (d in i) di(e + "[" + d + "]", i[d], r, l);
  }
  (a.param = function (e, i) {
    var r,
      l = [],
      d = function (g, v) {
        var E = R(v) ? v() : v;
        l[l.length] = encodeURIComponent(g) + "=" + encodeURIComponent(E ?? "");
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !a.isPlainObject(e)))
      a.each(e, function () {
        d(this.name, this.value);
      });
    else for (r in e) di(r, e[r], i, d);
    return l.join("&");
  }),
    a.fn.extend({
      serialize: function () {
        return a.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = a.prop(this, "elements");
          return e ? a.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !a(this).is(":disabled") &&
              kn.test(this.nodeName) &&
              !In.test(e) &&
              (this.checked || !Ne.test(e))
            );
          })
          .map(function (e, i) {
            var r = a(this).val();
            return null == r
              ? null
              : Array.isArray(r)
              ? a.map(r, function (l) {
                  return { name: i.name, value: l.replace(Xi, "\r\n") };
                })
              : { name: i.name, value: r.replace(Xi, "\r\n") };
          })
          .get();
      },
    });
  var zn = /%20/g,
    Ln = /#.*$/,
    An = /([?&])_=[^&]*/,
    Dn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    On = /^(?:GET|HEAD)$/,
    jn = /^\/\//,
    Zi = {},
    pi = {},
    Ji = "*/".concat("*"),
    gi = p.createElement("a");
  function Ki(e) {
    return function (i, r) {
      "string" != typeof i && ((r = i), (i = "*"));
      var l,
        d = 0,
        g = i.toLowerCase().match(Rt) || [];
      if (R(r))
        for (; (l = g[d++]); )
          "+" === l[0]
            ? ((l = l.slice(1) || "*"), (e[l] = e[l] || []).unshift(r))
            : (e[l] = e[l] || []).push(r);
    };
  }
  function $i(e, i, r, l) {
    var d = {},
      g = e === pi;
    function v(E) {
      var I;
      return (
        (d[E] = !0),
        a.each(e[E] || [], function (O, N) {
          var B = N(i, r, l);
          return "string" != typeof B || g || d[B]
            ? g
              ? !(I = B)
              : void 0
            : (i.dataTypes.unshift(B), v(B), !1);
        }),
        I
      );
    }
    return v(i.dataTypes[0]) || (!d["*"] && v("*"));
  }
  function mi(e, i) {
    var r,
      l,
      d = a.ajaxSettings.flatOptions || {};
    for (r in i) void 0 !== i[r] && ((d[r] ? e : l || (l = {}))[r] = i[r]);
    return l && a.extend(!0, e, l), e;
  }
  (gi.href = Re.href),
    a.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Re.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Re.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ji,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": a.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, i) {
        return i ? mi(mi(e, a.ajaxSettings), i) : mi(a.ajaxSettings, e);
      },
      ajaxPrefilter: Ki(Zi),
      ajaxTransport: Ki(pi),
      ajax: function (e, i) {
        "object" == typeof e && ((i = e), (e = void 0));
        var r,
          l,
          d,
          g,
          v,
          E,
          I,
          O,
          N,
          B,
          P = a.ajaxSetup({}, (i = i || {})),
          H = P.context || P,
          Z = P.context && (H.nodeType || H.jquery) ? a(H) : a.event,
          tt = a.Deferred(),
          J = a.Callbacks("once memory"),
          wt = P.statusCode || {},
          zt = {},
          Gt = {},
          vt = "canceled",
          ot = {
            readyState: 0,
            getResponseHeader: function (dt) {
              var _t;
              if (I) {
                if (!g)
                  for (g = {}; (_t = Dn.exec(d)); )
                    g[_t[1].toLowerCase() + " "] = (
                      g[_t[1].toLowerCase() + " "] || []
                    ).concat(_t[2]);
                _t = g[dt.toLowerCase() + " "];
              }
              return null == _t ? null : _t.join(", ");
            },
            getAllResponseHeaders: function () {
              return I ? d : null;
            },
            setRequestHeader: function (dt, _t) {
              return (
                null == I &&
                  ((dt = Gt[dt.toLowerCase()] = Gt[dt.toLowerCase()] || dt),
                  (zt[dt] = _t)),
                this
              );
            },
            overrideMimeType: function (dt) {
              return null == I && (P.mimeType = dt), this;
            },
            statusCode: function (dt) {
              var _t;
              if (dt)
                if (I) ot.always(dt[ot.status]);
                else for (_t in dt) wt[_t] = [wt[_t], dt[_t]];
              return this;
            },
            abort: function (dt) {
              var _t = dt || vt;
              return r && r.abort(_t), Vt(0, _t), this;
            },
          };
        if (
          (tt.promise(ot),
          (P.url = ((e || P.url || Re.href) + "").replace(
            jn,
            Re.protocol + "//"
          )),
          (P.type = i.method || i.type || P.method || P.type),
          (P.dataTypes = (P.dataType || "*").toLowerCase().match(Rt) || [""]),
          null == P.crossDomain)
        ) {
          E = p.createElement("a");
          try {
            (E.href = P.url),
              (E.href = E.href),
              (P.crossDomain =
                gi.protocol + "//" + gi.host != E.protocol + "//" + E.host);
          } catch {
            P.crossDomain = !0;
          }
        }
        if (
          (P.data &&
            P.processData &&
            "string" != typeof P.data &&
            (P.data = a.param(P.data, P.traditional)),
          $i(Zi, P, i, ot),
          I)
        )
          return ot;
        for (N in ((O = a.event && P.global) &&
          0 == a.active++ &&
          a.event.trigger("ajaxStart"),
        (P.type = P.type.toUpperCase()),
        (P.hasContent = !On.test(P.type)),
        (l = P.url.replace(Ln, "")),
        P.hasContent
          ? P.data &&
            P.processData &&
            0 ===
              (P.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (P.data = P.data.replace(zn, "+"))
          : ((B = P.url.slice(l.length)),
            P.data &&
              (P.processData || "string" == typeof P.data) &&
              ((l += (fi.test(l) ? "&" : "?") + P.data), delete P.data),
            !1 === P.cache &&
              ((l = l.replace(An, "$1")),
              (B = (fi.test(l) ? "&" : "?") + "_=" + Gi.guid++ + B)),
            (P.url = l + B)),
        P.ifModified &&
          (a.lastModified[l] &&
            ot.setRequestHeader("If-Modified-Since", a.lastModified[l]),
          a.etag[l] && ot.setRequestHeader("If-None-Match", a.etag[l])),
        ((P.data && P.hasContent && !1 !== P.contentType) || i.contentType) &&
          ot.setRequestHeader("Content-Type", P.contentType),
        ot.setRequestHeader(
          "Accept",
          P.dataTypes[0] && P.accepts[P.dataTypes[0]]
            ? P.accepts[P.dataTypes[0]] +
                ("*" !== P.dataTypes[0] ? ", " + Ji + "; q=0.01" : "")
            : P.accepts["*"]
        ),
        P.headers))
          ot.setRequestHeader(N, P.headers[N]);
        if (P.beforeSend && (!1 === P.beforeSend.call(H, ot, P) || I))
          return ot.abort();
        if (
          ((vt = "abort"),
          J.add(P.complete),
          ot.done(P.success),
          ot.fail(P.error),
          (r = $i(pi, P, i, ot)))
        ) {
          if (((ot.readyState = 1), O && Z.trigger("ajaxSend", [ot, P]), I))
            return ot;
          P.async &&
            0 < P.timeout &&
            (v = s.setTimeout(function () {
              ot.abort("timeout");
            }, P.timeout));
          try {
            (I = !1), r.send(zt, Vt);
          } catch (dt) {
            if (I) throw dt;
            Vt(-1, dt);
          }
        } else Vt(-1, "No Transport");
        function Vt(dt, _t, Be, Je) {
          var Xt,
            we,
            Le,
            Ut,
            Ae,
            ne = _t;
          I ||
            ((I = !0),
            v && s.clearTimeout(v),
            (r = void 0),
            (d = Je || ""),
            (ot.readyState = 0 < dt ? 4 : 0),
            (Xt = (200 <= dt && dt < 300) || 304 === dt),
            Be &&
              (Ut = (function (Ct, Zt, Jt) {
                for (
                  var fe, at, pt, Lt, Kt = Ct.contents, St = Ct.dataTypes;
                  "*" === St[0];

                )
                  St.shift(),
                    void 0 === fe &&
                      (fe =
                        Ct.mimeType || Zt.getResponseHeader("Content-Type"));
                if (fe)
                  for (at in Kt)
                    if (Kt[at] && Kt[at].test(fe)) {
                      St.unshift(at);
                      break;
                    }
                if (St[0] in Jt) pt = St[0];
                else {
                  for (at in Jt) {
                    if (!St[0] || Ct.converters[at + " " + St[0]]) {
                      pt = at;
                      break;
                    }
                    Lt || (Lt = at);
                  }
                  pt = pt || Lt;
                }
                if (pt) return pt !== St[0] && St.unshift(pt), Jt[pt];
              })(P, ot, Be)),
            !Xt &&
              -1 < a.inArray("script", P.dataTypes) &&
              a.inArray("json", P.dataTypes) < 0 &&
              (P.converters["text script"] = function () {}),
            (Ut = (function (Ct, Zt, Jt, fe) {
              var at,
                pt,
                Lt,
                Kt,
                St,
                $t = {},
                De = Ct.dataTypes.slice();
              if (De[1])
                for (Lt in Ct.converters)
                  $t[Lt.toLowerCase()] = Ct.converters[Lt];
              for (pt = De.shift(); pt; )
                if (
                  (Ct.responseFields[pt] && (Jt[Ct.responseFields[pt]] = Zt),
                  !St &&
                    fe &&
                    Ct.dataFilter &&
                    (Zt = Ct.dataFilter(Zt, Ct.dataType)),
                  (St = pt),
                  (pt = De.shift()))
                )
                  if ("*" === pt) pt = St;
                  else if ("*" !== St && St !== pt) {
                    if (!(Lt = $t[St + " " + pt] || $t["* " + pt]))
                      for (at in $t)
                        if (
                          (Kt = at.split(" "))[1] === pt &&
                          (Lt = $t[St + " " + Kt[0]] || $t["* " + Kt[0]])
                        ) {
                          !0 === Lt
                            ? (Lt = $t[at])
                            : !0 !== $t[at] &&
                              ((pt = Kt[0]), De.unshift(Kt[1]));
                          break;
                        }
                    if (!0 !== Lt)
                      if (Lt && Ct.throws) Zt = Lt(Zt);
                      else
                        try {
                          Zt = Lt(Zt);
                        } catch (Ke) {
                          return {
                            state: "parsererror",
                            error: Lt
                              ? Ke
                              : "No conversion from " + St + " to " + pt,
                          };
                        }
                  }
              return { state: "success", data: Zt };
            })(P, Ut, ot, Xt)),
            Xt
              ? (P.ifModified &&
                  ((Ae = ot.getResponseHeader("Last-Modified")) &&
                    (a.lastModified[l] = Ae),
                  (Ae = ot.getResponseHeader("etag")) && (a.etag[l] = Ae)),
                204 === dt || "HEAD" === P.type
                  ? (ne = "nocontent")
                  : 304 === dt
                  ? (ne = "notmodified")
                  : ((ne = Ut.state), (we = Ut.data), (Xt = !(Le = Ut.error))))
              : ((Le = ne),
                (!dt && ne) || ((ne = "error"), dt < 0 && (dt = 0))),
            (ot.status = dt),
            (ot.statusText = (_t || ne) + ""),
            Xt
              ? tt.resolveWith(H, [we, ne, ot])
              : tt.rejectWith(H, [ot, ne, Le]),
            ot.statusCode(wt),
            (wt = void 0),
            O &&
              Z.trigger(Xt ? "ajaxSuccess" : "ajaxError", [
                ot,
                P,
                Xt ? we : Le,
              ]),
            J.fireWith(H, [ot, ne]),
            O &&
              (Z.trigger("ajaxComplete", [ot, P]),
              --a.active || a.event.trigger("ajaxStop")));
        }
        return ot;
      },
      getJSON: function (e, i, r) {
        return a.get(e, i, r, "json");
      },
      getScript: function (e, i) {
        return a.get(e, void 0, i, "script");
      },
    }),
    a.each(["get", "post"], function (e, i) {
      a[i] = function (r, l, d, g) {
        return (
          R(l) && ((g = g || d), (d = l), (l = void 0)),
          a.ajax(
            a.extend(
              { url: r, type: i, dataType: g, data: l, success: d },
              a.isPlainObject(r) && r
            )
          )
        );
      };
    }),
    a.ajaxPrefilter(function (e) {
      var i;
      for (i in e.headers)
        "content-type" === i.toLowerCase() &&
          (e.contentType = e.headers[i] || "");
    }),
    (a._evalUrl = function (e, i, r) {
      return a.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (l) {
          a.globalEval(l, i, r);
        },
      });
    }),
    a.fn.extend({
      wrapAll: function (e) {
        var i;
        return (
          this[0] &&
            (R(e) && (e = e.call(this[0])),
            (i = a(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && i.insertBefore(this[0]),
            i
              .map(function () {
                for (var r = this; r.firstElementChild; )
                  r = r.firstElementChild;
                return r;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return R(e)
          ? this.each(function (i) {
              a(this).wrapInner(e.call(this, i));
            })
          : this.each(function () {
              var i = a(this),
                r = i.contents();
              r.length ? r.wrapAll(e) : i.append(e);
            });
      },
      wrap: function (e) {
        var i = R(e);
        return this.each(function (r) {
          a(this).wrapAll(i ? e.call(this, r) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              a(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (a.expr.pseudos.hidden = function (e) {
      return !a.expr.pseudos.visible(e);
    }),
    (a.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (a.ajaxSettings.xhr = function () {
      try {
        return new s.XMLHttpRequest();
      } catch {}
    });
  var Mn = { 0: 200, 1223: 204 },
    We = a.ajaxSettings.xhr();
  (c.cors = !!We && "withCredentials" in We),
    (c.ajax = We = !!We),
    a.ajaxTransport(function (e) {
      var i, r;
      if (c.cors || (We && !e.crossDomain))
        return {
          send: function (l, d) {
            var g,
              v = e.xhr();
            if (
              (v.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (g in e.xhrFields) v[g] = e.xhrFields[g];
            for (g in (e.mimeType &&
              v.overrideMimeType &&
              v.overrideMimeType(e.mimeType),
            e.crossDomain ||
              l["X-Requested-With"] ||
              (l["X-Requested-With"] = "XMLHttpRequest"),
            l))
              v.setRequestHeader(g, l[g]);
            (i = function (E) {
              return function () {
                i &&
                  ((i =
                    r =
                    v.onload =
                    v.onerror =
                    v.onabort =
                    v.ontimeout =
                    v.onreadystatechange =
                      null),
                  "abort" === E
                    ? v.abort()
                    : "error" === E
                    ? "number" != typeof v.status
                      ? d(0, "error")
                      : d(v.status, v.statusText)
                    : d(
                        Mn[v.status] || v.status,
                        v.statusText,
                        "text" !== (v.responseType || "text") ||
                          "string" != typeof v.responseText
                          ? { binary: v.response }
                          : { text: v.responseText },
                        v.getAllResponseHeaders()
                      ));
              };
            }),
              (v.onload = i()),
              (r = v.onerror = v.ontimeout = i("error")),
              void 0 !== v.onabort
                ? (v.onabort = r)
                : (v.onreadystatechange = function () {
                    4 === v.readyState &&
                      s.setTimeout(function () {
                        i && r();
                      });
                  }),
              (i = i("abort"));
            try {
              v.send((e.hasContent && e.data) || null);
            } catch (E) {
              if (i) throw E;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    a.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    a.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return a.globalEval(e), e;
        },
      },
    }),
    a.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    a.ajaxTransport("script", function (e) {
      var i, r;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (l, d) {
            (i = a("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (r = function (g) {
                  i.remove(),
                    (r = null),
                    g && d("error" === g.type ? 404 : 200, g.type);
                })
              )),
              p.head.appendChild(i[0]);
          },
          abort: function () {
            r && r();
          },
        };
    });
  var tn,
    en = [],
    vi = /(=)\?(?=&|$)|\?\?/;
  a.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = en.pop() || a.expando + "_" + Gi.guid++;
      return (this[e] = !0), e;
    },
  }),
    a.ajaxPrefilter("json jsonp", function (e, i, r) {
      var l,
        d,
        g,
        v =
          !1 !== e.jsonp &&
          (vi.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              vi.test(e.data) &&
              "data");
      if (v || "jsonp" === e.dataTypes[0])
        return (
          (l = e.jsonpCallback =
            R(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          v
            ? (e[v] = e[v].replace(vi, "$1" + l))
            : !1 !== e.jsonp &&
              (e.url += (fi.test(e.url) ? "&" : "?") + e.jsonp + "=" + l),
          (e.converters["script json"] = function () {
            return g || a.error(l + " was not called"), g[0];
          }),
          (e.dataTypes[0] = "json"),
          (d = s[l]),
          (s[l] = function () {
            g = arguments;
          }),
          r.always(function () {
            void 0 === d ? a(s).removeProp(l) : (s[l] = d),
              e[l] && ((e.jsonpCallback = i.jsonpCallback), en.push(l)),
              g && R(d) && d(g[0]),
              (g = d = void 0);
          }),
          "script"
        );
    }),
    (c.createHTMLDocument =
      (((tn = p.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === tn.childNodes.length)),
    (a.parseHTML = function (e, i, r) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof i && ((r = i), (i = !1)),
          i ||
            (c.createHTMLDocument
              ? (((l = (i =
                  p.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = p.location.href),
                i.head.appendChild(l))
              : (i = p)),
          (g = !r && []),
          (d = Nt.exec(e))
            ? [i.createElement(d[1])]
            : ((d = ki([e], i, g)),
              g && g.length && a(g).remove(),
              a.merge([], d.childNodes)));
      var l, d, g;
    }),
    (a.fn.load = function (e, i, r) {
      var l,
        d,
        g,
        v = this,
        E = e.indexOf(" ");
      return (
        -1 < E && ((l = be(e.slice(E))), (e = e.slice(0, E))),
        R(i)
          ? ((r = i), (i = void 0))
          : i && "object" == typeof i && (d = "POST"),
        0 < v.length &&
          a
            .ajax({ url: e, type: d || "GET", dataType: "html", data: i })
            .done(function (I) {
              (g = arguments),
                v.html(l ? a("<div>").append(a.parseHTML(I)).find(l) : I);
            })
            .always(
              r &&
                function (I, O) {
                  v.each(function () {
                    r.apply(this, g || [I.responseText, O, I]);
                  });
                }
            ),
        this
      );
    }),
    (a.expr.pseudos.animated = function (e) {
      return a.grep(a.timers, function (i) {
        return e === i.elem;
      }).length;
    }),
    (a.offset = {
      setOffset: function (e, i, r) {
        var l,
          d,
          g,
          v,
          E,
          I,
          O = a.css(e, "position"),
          N = a(e),
          B = {};
        "static" === O && (e.style.position = "relative"),
          (E = N.offset()),
          (g = a.css(e, "top")),
          (I = a.css(e, "left")),
          ("absolute" === O || "fixed" === O) && -1 < (g + I).indexOf("auto")
            ? ((v = (l = N.position()).top), (d = l.left))
            : ((v = parseFloat(g) || 0), (d = parseFloat(I) || 0)),
          R(i) && (i = i.call(e, r, a.extend({}, E))),
          null != i.top && (B.top = i.top - E.top + v),
          null != i.left && (B.left = i.left - E.left + d),
          "using" in i ? i.using.call(e, B) : N.css(B);
      },
    }),
    a.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (d) {
                a.offset.setOffset(this, e, d);
              });
        var i,
          r,
          l = this[0];
        return l
          ? l.getClientRects().length
            ? {
                top:
                  (i = l.getBoundingClientRect()).top +
                  (r = l.ownerDocument.defaultView).pageYOffset,
                left: i.left + r.pageXOffset,
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            i,
            r,
            l = this[0],
            d = { top: 0, left: 0 };
          if ("fixed" === a.css(l, "position")) i = l.getBoundingClientRect();
          else {
            for (
              i = this.offset(),
                r = l.ownerDocument,
                e = l.offsetParent || r.documentElement;
              e &&
              (e === r.body || e === r.documentElement) &&
              "static" === a.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== l &&
              1 === e.nodeType &&
              (((d = a(e).offset()).top += a.css(e, "borderTopWidth", !0)),
              (d.left += a.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: i.top - d.top - a.css(l, "marginTop", !0),
            left: i.left - d.left - a.css(l, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === a.css(e, "position");

          )
            e = e.offsetParent;
          return e || Bt;
        });
      },
    }),
    a.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, i) {
        var r = "pageYOffset" === i;
        a.fn[e] = function (l) {
          return re(
            this,
            function (d, g, v) {
              var E;
              if (
                (_(d) ? (E = d) : 9 === d.nodeType && (E = d.defaultView),
                void 0 === v)
              )
                return E ? E[i] : d[g];
              E
                ? E.scrollTo(r ? E.pageXOffset : v, r ? v : E.pageYOffset)
                : (d[g] = v);
            },
            e,
            l,
            arguments.length
          );
        };
      }
    ),
    a.each(["top", "left"], function (e, i) {
      a.cssHooks[i] = ji(c.pixelPosition, function (r, l) {
        if (l)
          return (l = He(r, i)), ai.test(l) ? a(r).position()[i] + "px" : l;
      });
    }),
    a.each({ Height: "height", Width: "width" }, function (e, i) {
      a.each(
        { padding: "inner" + e, content: i, "": "outer" + e },
        function (r, l) {
          a.fn[l] = function (d, g) {
            var v = arguments.length && (r || "boolean" != typeof d),
              E = r || (!0 === d || !0 === g ? "margin" : "border");
            return re(
              this,
              function (I, O, N) {
                var B;
                return _(I)
                  ? 0 === l.indexOf("outer")
                    ? I["inner" + e]
                    : I.document.documentElement["client" + e]
                  : 9 === I.nodeType
                  ? ((B = I.documentElement),
                    Math.max(
                      I.body["scroll" + e],
                      B["scroll" + e],
                      I.body["offset" + e],
                      B["offset" + e],
                      B["client" + e]
                    ))
                  : void 0 === N
                  ? a.css(I, O, E)
                  : a.style(I, O, N, E);
              },
              i,
              v ? d : void 0,
              v
            );
          };
        }
      );
    }),
    a.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, i) {
        a.fn[i] = function (r) {
          return this.on(i, r);
        };
      }
    ),
    a.fn.extend({
      bind: function (e, i, r) {
        return this.on(e, null, i, r);
      },
      unbind: function (e, i) {
        return this.off(e, null, i);
      },
      delegate: function (e, i, r, l) {
        return this.on(i, e, r, l);
      },
      undelegate: function (e, i, r) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(i, e || "**", r);
      },
      hover: function (e, i) {
        return this.mouseenter(e).mouseleave(i || e);
      },
    }),
    a.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, i) {
        a.fn[i] = function (r, l) {
          return 0 < arguments.length
            ? this.on(i, null, r, l)
            : this.trigger(i);
        };
      }
    );
  var Pn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (a.proxy = function (e, i) {
    var r, l, d;
    if (("string" == typeof i && ((r = e[i]), (i = e), (e = r)), R(e)))
      return (
        (l = h.call(arguments, 2)),
        ((d = function () {
          return e.apply(i || this, l.concat(h.call(arguments)));
        }).guid = e.guid =
          e.guid || a.guid++),
        d
      );
  }),
    (a.holdReady = function (e) {
      e ? a.readyWait++ : a.ready(!0);
    }),
    (a.isArray = Array.isArray),
    (a.parseJSON = JSON.parse),
    (a.nodeName = Tt),
    (a.isFunction = R),
    (a.isWindow = _),
    (a.camelCase = Wt),
    (a.type = Y),
    (a.now = Date.now),
    (a.isNumeric = function (e) {
      var i = a.type(e);
      return ("number" === i || "string" === i) && !isNaN(e - parseFloat(e));
    }),
    (a.trim = function (e) {
      return null == e ? "" : (e + "").replace(Pn, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return a;
      });
  var Nn = s.jQuery,
    Hn = s.$;
  return (
    (a.noConflict = function (e) {
      return s.$ === a && (s.$ = Hn), e && s.jQuery === a && (s.jQuery = Nn), a;
    }),
    typeof L > "u" && (s.jQuery = s.$ = a),
    a
  );
}),
  (function (s) {
    "function" == typeof define && define.amd
      ? define(["jquery"], s)
      : "object" == typeof module && module.exports
      ? (module.exports = s(require("jquery")))
      : s(jQuery);
  })(function (s) {
    s.extend(s.fn, {
      validate: function (u) {
        if (this.length) {
          var h = s.data(this[0], "validator");
          return (
            h ||
            (this.attr("novalidate", "novalidate"),
            (h = new s.validator(u, this[0])),
            s.data(this[0], "validator", h),
            h.settings.onsubmit &&
              (this.on("click.validate", ":submit", function (n) {
                (h.submitButton = n.currentTarget),
                  s(this).hasClass("cancel") && (h.cancelSubmit = !0),
                  void 0 !== s(this).attr("formnovalidate") &&
                    (h.cancelSubmit = !0);
              }),
              this.on("submit.validate", function (n) {
                function o() {
                  var f, m;
                  return (
                    h.submitButton &&
                      (h.settings.submitHandler || h.formSubmitted) &&
                      (f = s("<input type='hidden'/>")
                        .attr("name", h.submitButton.name)
                        .val(s(h.submitButton).val())
                        .appendTo(h.currentForm)),
                    !h.settings.submitHandler ||
                      ((m = h.settings.submitHandler.call(h, h.currentForm, n)),
                      f && f.remove(),
                      void 0 !== m && m)
                  );
                }
                return (
                  h.settings.debug && n.preventDefault(),
                  h.cancelSubmit
                    ? ((h.cancelSubmit = !1), o())
                    : h.form()
                    ? h.pendingRequest
                      ? ((h.formSubmitted = !0), !1)
                      : o()
                    : (h.focusInvalid(), !1)
                );
              })),
            h)
          );
        }
        u &&
          u.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.");
      },
      valid: function () {
        var u, h, n;
        return (
          s(this[0]).is("form")
            ? (u = this.validate().form())
            : ((n = []),
              (u = !0),
              (h = s(this[0].form).validate()),
              this.each(function () {
                (u = h.element(this) && u) || (n = n.concat(h.errorList));
              }),
              (h.errorList = n)),
          u
        );
      },
      rules: function (u, h) {
        var o,
          f,
          m,
          b,
          x,
          S,
          n = this[0];
        if (
          null != n &&
          (!n.form &&
            n.hasAttribute("contenteditable") &&
            ((n.form = this.closest("form")[0]), (n.name = this.attr("name"))),
          null != n.form)
        ) {
          if (u)
            switch (
              ((o = s.data(n.form, "validator").settings),
              (f = o.rules),
              (m = s.validator.staticRules(n)),
              u)
            ) {
              case "add":
                s.extend(m, s.validator.normalizeRule(h)),
                  delete m.messages,
                  (f[n.name] = m),
                  h.messages &&
                    (o.messages[n.name] = s.extend(
                      o.messages[n.name],
                      h.messages
                    ));
                break;
              case "remove":
                return h
                  ? ((S = {}),
                    s.each(h.split(/\s/), function (z, c) {
                      (S[c] = m[c]), delete m[c];
                    }),
                    S)
                  : (delete f[n.name], m);
            }
          return (
            (b = s.validator.normalizeRules(
              s.extend(
                {},
                s.validator.classRules(n),
                s.validator.attributeRules(n),
                s.validator.dataRules(n),
                s.validator.staticRules(n)
              ),
              n
            )).required &&
              ((x = b.required),
              delete b.required,
              (b = s.extend({ required: x }, b))),
            b.remote &&
              ((x = b.remote),
              delete b.remote,
              (b = s.extend(b, { remote: x }))),
            b
          );
        }
      },
    }),
      s.extend(s.expr.pseudos || s.expr[":"], {
        blank: function (u) {
          return !s.trim("" + s(u).val());
        },
        filled: function (u) {
          var h = s(u).val();
          return null !== h && !!s.trim("" + h);
        },
        unchecked: function (u) {
          return !s(u).prop("checked");
        },
      }),
      (s.validator = function (u, h) {
        (this.settings = s.extend(!0, {}, s.validator.defaults, u)),
          (this.currentForm = h),
          this.init();
      }),
      (s.validator.format = function (u, h) {
        return 1 === arguments.length
          ? function () {
              var n = s.makeArray(arguments);
              return n.unshift(u), s.validator.format.apply(this, n);
            }
          : (void 0 === h ||
              (arguments.length > 2 &&
                h.constructor !== Array &&
                (h = s.makeArray(arguments).slice(1)),
              h.constructor !== Array && (h = [h]),
              s.each(h, function (n, o) {
                u = u.replace(new RegExp("\\{" + n + "\\}", "g"), function () {
                  return o;
                });
              })),
            u);
      }),
      s.extend(s.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          pendingClass: "pending",
          validClass: "valid",
          errorElement: "label",
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: s([]),
          errorLabelContainer: s([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function (u) {
            (this.lastActive = u),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(
                    this,
                    u,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.hideThese(this.errorsFor(u)));
          },
          onfocusout: function (u) {
            !this.checkable(u) &&
              (u.name in this.submitted || !this.optional(u)) &&
              this.element(u);
          },
          onkeyup: function (u, h) {
            (9 === h.which && "" === this.elementValue(u)) ||
              -1 !==
                s.inArray(
                  h.keyCode,
                  [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]
                ) ||
              ((u.name in this.submitted || u.name in this.invalid) &&
                this.element(u));
          },
          onclick: function (u) {
            u.name in this.submitted
              ? this.element(u)
              : u.parentNode.name in this.submitted &&
                this.element(u.parentNode);
          },
          highlight: function (u, h, n) {
            "radio" === u.type
              ? this.findByName(u.name).addClass(h).removeClass(n)
              : s(u).addClass(h).removeClass(n);
          },
          unhighlight: function (u, h, n) {
            "radio" === u.type
              ? this.findByName(u.name).removeClass(h).addClass(n)
              : s(u).removeClass(h).addClass(n);
          },
        },
        setDefaults: function (u) {
          s.extend(s.validator.defaults, u);
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          equalTo: "Please enter the same value again.",
          maxlength: s.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: s.validator.format(
            "Please enter at least {0} characters."
          ),
          rangelength: s.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: s.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: s.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: s.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
          step: s.validator.format("Please enter a multiple of {0}."),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            (this.labelContainer = s(this.settings.errorLabelContainer)),
              (this.errorContext =
                (this.labelContainer.length && this.labelContainer) ||
                s(this.currentForm)),
              (this.containers = s(this.settings.errorContainer).add(
                this.settings.errorLabelContainer
              )),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var h,
              u = (this.groups = {});
            function n(o) {
              !this.form &&
                this.hasAttribute("contenteditable") &&
                ((this.form = s(this).closest("form")[0]),
                (this.name = s(this).attr("name")));
              var f = s.data(this.form, "validator"),
                m = "on" + o.type.replace(/^validate/, ""),
                b = f.settings;
              b[m] && !s(this).is(b.ignore) && b[m].call(f, this, o);
            }
            s.each(this.settings.groups, function (o, f) {
              "string" == typeof f && (f = f.split(/\s/)),
                s.each(f, function (m, b) {
                  u[b] = o;
                });
            }),
              s.each((h = this.settings.rules), function (o, f) {
                h[o] = s.validator.normalizeRule(f);
              }),
              s(this.currentForm)
                .on(
                  "focusin.validate focusout.validate keyup.validate",
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                  n
                )
                .on(
                  "click.validate",
                  "select, option, [type='radio'], [type='checkbox']",
                  n
                ),
              this.settings.invalidHandler &&
                s(this.currentForm).on(
                  "invalid-form.validate",
                  this.settings.invalidHandler
                );
          },
          form: function () {
            return (
              this.checkForm(),
              s.extend(this.submitted, this.errorMap),
              (this.invalid = s.extend({}, this.errorMap)),
              this.valid() ||
                s(this.currentForm).triggerHandler("invalid-form", [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function () {
            this.prepareForm();
            for (
              var u = 0, h = (this.currentElements = this.elements());
              h[u];
              u++
            )
              this.check(h[u]);
            return this.valid();
          },
          element: function (u) {
            var m,
              b,
              h = this.clean(u),
              n = this.validationTargetFor(h),
              o = this,
              f = !0;
            return (
              void 0 === n
                ? delete this.invalid[h.name]
                : (this.prepareElement(n),
                  (this.currentElements = s(n)),
                  (b = this.groups[n.name]) &&
                    s.each(this.groups, function (x, S) {
                      S === b &&
                        x !== n.name &&
                        (h = o.validationTargetFor(o.clean(o.findByName(x)))) &&
                        h.name in o.invalid &&
                        (o.currentElements.push(h), (f = o.check(h) && f));
                    }),
                  (m = !1 !== this.check(n)),
                  (f = f && m),
                  (this.invalid[n.name] = !m),
                  this.numberOfInvalids() ||
                    (this.toHide = this.toHide.add(this.containers)),
                  this.showErrors(),
                  s(u).attr("aria-invalid", !m)),
              f
            );
          },
          showErrors: function (u) {
            if (u) {
              var h = this;
              s.extend(this.errorMap, u),
                (this.errorList = s.map(this.errorMap, function (n, o) {
                  return { message: n, element: h.findByName(o)[0] };
                })),
                (this.successList = s.grep(this.successList, function (n) {
                  return !(n.name in u);
                }));
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(
                  this,
                  this.errorMap,
                  this.errorList
                )
              : this.defaultShowErrors();
          },
          resetForm: function () {
            s.fn.resetForm && s(this.currentForm).resetForm(),
              (this.invalid = {}),
              (this.submitted = {}),
              this.prepareForm(),
              this.hideErrors();
            var u = this.elements()
              .removeData("previousValue")
              .removeAttr("aria-invalid");
            this.resetElements(u);
          },
          resetElements: function (u) {
            var h;
            if (this.settings.unhighlight)
              for (h = 0; u[h]; h++)
                this.settings.unhighlight.call(
                  this,
                  u[h],
                  this.settings.errorClass,
                  ""
                ),
                  this.findByName(u[h].name).removeClass(
                    this.settings.validClass
                  );
            else
              u.removeClass(this.settings.errorClass).removeClass(
                this.settings.validClass
              );
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid);
          },
          objectLength: function (u) {
            var n,
              h = 0;
            for (n in u) null != u[n] && !1 !== u[n] && h++;
            return h;
          },
          hideErrors: function () {
            this.hideThese(this.toHide);
          },
          hideThese: function (u) {
            u.not(this.containers).text(""), this.addWrapper(u).hide();
          },
          valid: function () {
            return 0 === this.size();
          },
          size: function () {
            return this.errorList.length;
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                s(
                  this.findLastActive() ||
                    (this.errorList.length && this.errorList[0].element) ||
                    []
                )
                  .filter(":visible")
                  .focus()
                  .trigger("focusin");
              } catch {}
          },
          findLastActive: function () {
            var u = this.lastActive;
            return (
              u &&
              1 ===
                s.grep(this.errorList, function (h) {
                  return h.element.name === u.name;
                }).length &&
              u
            );
          },
          elements: function () {
            var u = this,
              h = {};
            return s(this.currentForm)
              .find("input, select, textarea, [contenteditable]")
              .not(":submit, :reset, :image, :disabled")
              .not(this.settings.ignore)
              .filter(function () {
                var n = this.name || s(this).attr("name");
                return (
                  !n &&
                    u.settings.debug &&
                    window.console &&
                    console.error("%o has no name assigned", this),
                  this.hasAttribute("contenteditable") &&
                    ((this.form = s(this).closest("form")[0]), (this.name = n)),
                  !(
                    n in h ||
                    !u.objectLength(s(this).rules()) ||
                    ((h[n] = !0), 0)
                  )
                );
              });
          },
          clean: function (u) {
            return s(u)[0];
          },
          errors: function () {
            var u = this.settings.errorClass.split(" ").join(".");
            return s(this.settings.errorElement + "." + u, this.errorContext);
          },
          resetInternals: function () {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = s([])),
              (this.toHide = s([]));
          },
          reset: function () {
            this.resetInternals(), (this.currentElements = s([]));
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function (u) {
            this.reset(), (this.toHide = this.errorsFor(u));
          },
          elementValue: function (u) {
            var o,
              f,
              h = s(u),
              n = u.type;
            return "radio" === n || "checkbox" === n
              ? this.findByName(u.name).filter(":checked").val()
              : "number" === n && typeof u.validity < "u"
              ? u.validity.badInput
                ? "NaN"
                : h.val()
              : ((o = u.hasAttribute("contenteditable") ? h.text() : h.val()),
                "file" === n
                  ? "C:\\fakepath\\" === o.substr(0, 12)
                    ? o.substr(12)
                    : (f = o.lastIndexOf("/")) >= 0 ||
                      (f = o.lastIndexOf("\\")) >= 0
                    ? o.substr(f + 1)
                    : o
                  : "string" == typeof o
                  ? o.replace(/\r/g, "")
                  : o);
          },
          check: function (u) {
            u = this.validationTargetFor(this.clean(u));
            var m,
              b,
              x,
              S,
              h = s(u).rules(),
              n = s.map(h, function (z, c) {
                return c;
              }).length,
              o = !1,
              f = this.elementValue(u);
            if (
              ("function" == typeof h.normalizer
                ? (S = h.normalizer)
                : "function" == typeof this.settings.normalizer &&
                  (S = this.settings.normalizer),
              S)
            ) {
              if ("string" != typeof (f = S.call(u, f)))
                throw new TypeError(
                  "The normalizer should return a string value."
                );
              delete h.normalizer;
            }
            for (b in h) {
              x = { method: b, parameters: h[b] };
              try {
                if (
                  "dependency-mismatch" ===
                    (m = s.validator.methods[b].call(
                      this,
                      f,
                      u,
                      x.parameters
                    )) &&
                  1 === n
                ) {
                  o = !0;
                  continue;
                }
                if (((o = !1), "pending" === m))
                  return void (this.toHide = this.toHide.not(
                    this.errorsFor(u)
                  ));
                if (!m) return this.formatAndAdd(u, x), !1;
              } catch (z) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      "Exception occurred when checking element " +
                        u.id +
                        ", check the '" +
                        x.method +
                        "' method.",
                      z
                    ),
                  z instanceof TypeError &&
                    (z.message +=
                      ".  Exception occurred when checking element " +
                      u.id +
                      ", check the '" +
                      x.method +
                      "' method."),
                  z)
                );
              }
            }
            if (!o) return this.objectLength(h) && this.successList.push(u), !0;
          },
          customDataMessage: function (u, h) {
            return (
              s(u).data(
                "msg" + h.charAt(0).toUpperCase() + h.substring(1).toLowerCase()
              ) || s(u).data("msg")
            );
          },
          customMessage: function (u, h) {
            var n = this.settings.messages[u];
            return n && (n.constructor === String ? n : n[h]);
          },
          findDefined: function () {
            for (var u = 0; u < arguments.length; u++)
              if (void 0 !== arguments[u]) return arguments[u];
          },
          defaultMessage: function (u, h) {
            "string" == typeof h && (h = { method: h });
            var n = this.findDefined(
                this.customMessage(u.name, h.method),
                this.customDataMessage(u, h.method),
                (!this.settings.ignoreTitle && u.title) || void 0,
                s.validator.messages[h.method],
                "<strong>Warning: No message defined for " +
                  u.name +
                  "</strong>"
              ),
              o = /\$?\{(\d+)\}/g;
            return (
              "function" == typeof n
                ? (n = n.call(this, h.parameters, u))
                : o.test(n) &&
                  (n = s.validator.format(n.replace(o, "{$1}"), h.parameters)),
              n
            );
          },
          formatAndAdd: function (u, h) {
            var n = this.defaultMessage(u, h);
            this.errorList.push({ message: n, element: u, method: h.method }),
              (this.errorMap[u.name] = n),
              (this.submitted[u.name] = n);
          },
          addWrapper: function (u) {
            return (
              this.settings.wrapper &&
                (u = u.add(u.parent(this.settings.wrapper))),
              u
            );
          },
          defaultShowErrors: function () {
            var u, h, n;
            for (u = 0; this.errorList[u]; u++)
              (n = this.errorList[u]),
                this.settings.highlight &&
                  this.settings.highlight.call(
                    this,
                    n.element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.showLabel(n.element, n.message);
            if (
              (this.errorList.length &&
                (this.toShow = this.toShow.add(this.containers)),
              this.settings.success)
            )
              for (u = 0; this.successList[u]; u++)
                this.showLabel(this.successList[u]);
            if (this.settings.unhighlight)
              for (u = 0, h = this.validElements(); h[u]; u++)
                this.settings.unhighlight.call(
                  this,
                  h[u],
                  this.settings.errorClass,
                  this.settings.validClass
                );
            (this.toHide = this.toHide.not(this.toShow)),
              this.hideErrors(),
              this.addWrapper(this.toShow).show();
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function () {
            return s(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function (u, h) {
            var n,
              o,
              f,
              m,
              b = this.errorsFor(u),
              x = this.idOrName(u),
              S = s(u).attr("aria-describedby");
            b.length
              ? (b
                  .removeClass(this.settings.validClass)
                  .addClass(this.settings.errorClass),
                b.html(h))
              : ((n = b =
                  s("<" + this.settings.errorElement + ">")
                    .attr("id", x + "-error")
                    .addClass(this.settings.errorClass)
                    .html(h || "")),
                this.settings.wrapper &&
                  (n = b
                    .hide()
                    .show()
                    .wrap("<" + this.settings.wrapper + "/>")
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(n)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement.call(this, n, s(u))
                  : n.insertAfter(u),
                b.is("label")
                  ? b.attr("for", x)
                  : 0 ===
                      b.parents("label[for='" + this.escapeCssMeta(x) + "']")
                        .length &&
                    ((f = b.attr("id")),
                    S
                      ? S.match(
                          new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")
                        ) || (S += " " + f)
                      : (S = f),
                    s(u).attr("aria-describedby", S),
                    (o = this.groups[u.name]) &&
                      s.each((m = this).groups, function (z, c) {
                        c === o &&
                          s(
                            "[name='" + m.escapeCssMeta(z) + "']",
                            m.currentForm
                          ).attr("aria-describedby", b.attr("id"));
                      }))),
              !h &&
                this.settings.success &&
                (b.text(""),
                "string" == typeof this.settings.success
                  ? b.addClass(this.settings.success)
                  : this.settings.success(b, u)),
              (this.toShow = this.toShow.add(b));
          },
          errorsFor: function (u) {
            var h = this.escapeCssMeta(this.idOrName(u)),
              n = s(u).attr("aria-describedby"),
              o = "label[for='" + h + "'], label[for='" + h + "'] *";
            return (
              n &&
                (o = o + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")),
              this.errors().filter(o)
            );
          },
          escapeCssMeta: function (u) {
            return u.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
          },
          idOrName: function (u) {
            return (
              this.groups[u.name] ||
              (this.checkable(u) ? u.name : u.id || u.name)
            );
          },
          validationTargetFor: function (u) {
            return (
              this.checkable(u) && (u = this.findByName(u.name)),
              s(u).not(this.settings.ignore)[0]
            );
          },
          checkable: function (u) {
            return /radio|checkbox/i.test(u.type);
          },
          findByName: function (u) {
            return s(this.currentForm).find(
              "[name='" + this.escapeCssMeta(u) + "']"
            );
          },
          getLength: function (u, h) {
            switch (h.nodeName.toLowerCase()) {
              case "select":
                return s("option:selected", h).length;
              case "input":
                if (this.checkable(h))
                  return this.findByName(h.name).filter(":checked").length;
            }
            return u.length;
          },
          depend: function (u, h) {
            return (
              !this.dependTypes[typeof u] || this.dependTypes[typeof u](u, h)
            );
          },
          dependTypes: {
            boolean: function (u) {
              return u;
            },
            string: function (u, h) {
              return !!s(u, h.form).length;
            },
            function: function (u, h) {
              return u(h);
            },
          },
          optional: function (u) {
            var h = this.elementValue(u);
            return (
              !s.validator.methods.required.call(this, h, u) &&
              "dependency-mismatch"
            );
          },
          startRequest: function (u) {
            this.pending[u.name] ||
              (this.pendingRequest++,
              s(u).addClass(this.settings.pendingClass),
              (this.pending[u.name] = !0));
          },
          stopRequest: function (u, h) {
            this.pendingRequest--,
              this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[u.name],
              s(u).removeClass(this.settings.pendingClass),
              h &&
              0 === this.pendingRequest &&
              this.formSubmitted &&
              this.form()
                ? (s(this.currentForm).submit(),
                  this.submitButton &&
                    s(
                      "input:hidden[name='" + this.submitButton.name + "']",
                      this.currentForm
                    ).remove(),
                  (this.formSubmitted = !1))
                : !h &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (s(this.currentForm).triggerHandler("invalid-form", [this]),
                  (this.formSubmitted = !1));
          },
          previousValue: function (u, h) {
            return (
              (h = ("string" == typeof h && h) || "remote"),
              s.data(u, "previousValue") ||
                s.data(u, "previousValue", {
                  old: null,
                  valid: !0,
                  message: this.defaultMessage(u, { method: h }),
                })
            );
          },
          destroy: function () {
            this.resetForm(),
              s(this.currentForm)
                .off(".validate")
                .removeData("validator")
                .find(".validate-equalTo-blur")
                .off(".validate-equalTo")
                .removeClass("validate-equalTo-blur");
          },
        },
        classRuleSettings: {
          required: { required: !0 },
          email: { email: !0 },
          url: { url: !0 },
          date: { date: !0 },
          dateISO: { dateISO: !0 },
          number: { number: !0 },
          digits: { digits: !0 },
          creditcard: { creditcard: !0 },
        },
        addClassRules: function (u, h) {
          u.constructor === String
            ? (this.classRuleSettings[u] = h)
            : s.extend(this.classRuleSettings, u);
        },
        classRules: function (u) {
          var h = {},
            n = s(u).attr("class");
          return (
            n &&
              s.each(n.split(" "), function () {
                this in s.validator.classRuleSettings &&
                  s.extend(h, s.validator.classRuleSettings[this]);
              }),
            h
          );
        },
        normalizeAttributeRule: function (u, h, n, o) {
          /min|max|step/.test(n) &&
            (null === h || /number|range|text/.test(h)) &&
            ((o = Number(o)), isNaN(o) && (o = void 0)),
            o || 0 === o ? (u[n] = o) : h === n && "range" !== h && (u[n] = !0);
        },
        attributeRules: function (u) {
          var f,
            m,
            h = {},
            n = s(u),
            o = u.getAttribute("type");
          for (f in s.validator.methods)
            "required" === f
              ? ("" === (m = u.getAttribute(f)) && (m = !0), (m = !!m))
              : (m = n.attr(f)),
              this.normalizeAttributeRule(h, o, f, m);
          return (
            h.maxlength &&
              /-1|2147483647|524288/.test(h.maxlength) &&
              delete h.maxlength,
            h
          );
        },
        dataRules: function (u) {
          var f,
            m,
            h = {},
            n = s(u),
            o = u.getAttribute("type");
          for (f in s.validator.methods)
            (m = n.data(
              "rule" + f.charAt(0).toUpperCase() + f.substring(1).toLowerCase()
            )),
              this.normalizeAttributeRule(h, o, f, m);
          return h;
        },
        staticRules: function (u) {
          var h = {},
            n = s.data(u.form, "validator");
          return (
            n.settings.rules &&
              (h = s.validator.normalizeRule(n.settings.rules[u.name]) || {}),
            h
          );
        },
        normalizeRules: function (u, h) {
          return (
            s.each(u, function (n, o) {
              if (!1 !== o) {
                if (o.param || o.depends) {
                  var f = !0;
                  switch (typeof o.depends) {
                    case "string":
                      f = !!s(o.depends, h.form).length;
                      break;
                    case "function":
                      f = o.depends.call(h, h);
                  }
                  f
                    ? (u[n] = void 0 === o.param || o.param)
                    : (s.data(h.form, "validator").resetElements(s(h)),
                      delete u[n]);
                }
              } else delete u[n];
            }),
            s.each(u, function (n, o) {
              u[n] = s.isFunction(o) && "normalizer" !== n ? o(h) : o;
            }),
            s.each(["minlength", "maxlength"], function () {
              u[this] && (u[this] = Number(u[this]));
            }),
            s.each(["rangelength", "range"], function () {
              var n;
              u[this] &&
                (s.isArray(u[this])
                  ? (u[this] = [Number(u[this][0]), Number(u[this][1])])
                  : "string" == typeof u[this] &&
                    ((n = u[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                    (u[this] = [Number(n[0]), Number(n[1])])));
            }),
            s.validator.autoCreateRanges &&
              (null != u.min &&
                null != u.max &&
                ((u.range = [u.min, u.max]), delete u.min, delete u.max),
              null != u.minlength &&
                null != u.maxlength &&
                ((u.rangelength = [u.minlength, u.maxlength]),
                delete u.minlength,
                delete u.maxlength)),
            u
          );
        },
        normalizeRule: function (u) {
          if ("string" == typeof u) {
            var h = {};
            s.each(u.split(/\s/), function () {
              h[this] = !0;
            }),
              (u = h);
          }
          return u;
        },
        addMethod: function (u, h, n) {
          (s.validator.methods[u] = h),
            (s.validator.messages[u] =
              void 0 !== n ? n : s.validator.messages[u]),
            h.length < 3 &&
              s.validator.addClassRules(u, s.validator.normalizeRule(u));
        },
        methods: {
          required: function (u, h, n) {
            if (!this.depend(n, h)) return "dependency-mismatch";
            if ("select" === h.nodeName.toLowerCase()) {
              var o = s(h).val();
              return o && o.length > 0;
            }
            return this.checkable(h) ? this.getLength(u, h) > 0 : u.length > 0;
          },
          email: function (u, h) {
            return (
              this.optional(h) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                u
              )
            );
          },
          url: function (u, h) {
            return (
              this.optional(h) ||
              /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                u
              )
            );
          },
          date: function (u, h) {
            return (
              this.optional(h) || !/Invalid|NaN/.test(new Date(u).toString())
            );
          },
          dateISO: function (u, h) {
            return (
              this.optional(h) ||
              /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                u
              )
            );
          },
          number: function (u, h) {
            return (
              this.optional(h) ||
              /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(u)
            );
          },
          digits: function (u, h) {
            return this.optional(h) || /^\d+$/.test(u);
          },
          minlength: function (u, h, n) {
            var o = s.isArray(u) ? u.length : this.getLength(u, h);
            return this.optional(h) || o >= n;
          },
          maxlength: function (u, h, n) {
            var o = s.isArray(u) ? u.length : this.getLength(u, h);
            return this.optional(h) || o <= n;
          },
          rangelength: function (u, h, n) {
            var o = s.isArray(u) ? u.length : this.getLength(u, h);
            return this.optional(h) || (o >= n[0] && o <= n[1]);
          },
          min: function (u, h, n) {
            return this.optional(h) || u >= n;
          },
          max: function (u, h, n) {
            return this.optional(h) || u <= n;
          },
          range: function (u, h, n) {
            return this.optional(h) || (u >= n[0] && u <= n[1]);
          },
          step: function (u, h, n) {
            var R,
              o = s(h).attr("type"),
              f = "Step attribute on input type " + o + " is not supported.",
              b = new RegExp("\\b" + o + "\\b"),
              S = function (_) {
                var p = ("" + _).match(/(?:\.(\d+))?$/);
                return p && p[1] ? p[1].length : 0;
              },
              z = function (_) {
                return Math.round(_ * Math.pow(10, R));
              },
              c = !0;
            if (o && !b.test(["text", "number", "range"].join()))
              throw new Error(f);
            return (
              (R = S(n)),
              (S(u) > R || z(u) % z(n) != 0) && (c = !1),
              this.optional(h) || c
            );
          },
          equalTo: function (u, h, n) {
            var o = s(n);
            return (
              this.settings.onfocusout &&
                o.not(".validate-equalTo-blur").length &&
                o
                  .addClass("validate-equalTo-blur")
                  .on("blur.validate-equalTo", function () {
                    s(h).valid();
                  }),
              u === o.val()
            );
          },
          remote: function (u, h, n, o) {
            if (this.optional(h)) return "dependency-mismatch";
            var m,
              b,
              x,
              f = this.previousValue(
                h,
                (o = ("string" == typeof o && o) || "remote")
              );
            return (
              this.settings.messages[h.name] ||
                (this.settings.messages[h.name] = {}),
              (f.originalMessage =
                f.originalMessage || this.settings.messages[h.name][o]),
              (this.settings.messages[h.name][o] = f.message),
              (x = s.param(
                s.extend(
                  { data: u },
                  (n = ("string" == typeof n && { url: n }) || n).data
                )
              )),
              f.old === x
                ? f.valid
                : ((f.old = x),
                  (m = this),
                  this.startRequest(h),
                  ((b = {})[h.name] = u),
                  s.ajax(
                    s.extend(
                      !0,
                      {
                        mode: "abort",
                        port: "validate" + h.name,
                        dataType: "json",
                        data: b,
                        context: m.currentForm,
                        success: function (S) {
                          var c,
                            R,
                            _,
                            z = !0 === S || "true" === S;
                          (m.settings.messages[h.name][o] = f.originalMessage),
                            z
                              ? ((_ = m.formSubmitted),
                                m.resetInternals(),
                                (m.toHide = m.errorsFor(h)),
                                (m.formSubmitted = _),
                                m.successList.push(h),
                                (m.invalid[h.name] = !1),
                                m.showErrors())
                              : ((c = {}),
                                (R =
                                  S ||
                                  m.defaultMessage(h, {
                                    method: o,
                                    parameters: u,
                                  })),
                                (c[h.name] = f.message = R),
                                (m.invalid[h.name] = !0),
                                m.showErrors(c)),
                            (f.valid = z),
                            m.stopRequest(h, z);
                        },
                      },
                      n
                    )
                  ),
                  "pending")
            );
          },
        },
      });
    var A,
      L = {};
    return (
      s.ajaxPrefilter
        ? s.ajaxPrefilter(function (u, h, n) {
            var o = u.port;
            "abort" === u.mode && (L[o] && L[o].abort(), (L[o] = n));
          })
        : ((A = s.ajax),
          (s.ajax = function (u) {
            var n = ("port" in u ? u : s.ajaxSettings).port;
            return "abort" === ("mode" in u ? u : s.ajaxSettings).mode
              ? (L[n] && L[n].abort(), (L[n] = A.apply(this, arguments)), L[n])
              : A.apply(this, arguments);
          })),
      s
    );
  }),
  (function (s) {
    "function" == typeof define && define.amd
      ? define(["jquery"], s)
      : s(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (s) {
    var c,
      p,
      q,
      Y,
      G,
      a,
      L = "Close",
      A = "BeforeClose",
      n = "MarkupParse",
      o = "Open",
      f = "Change",
      m = "mfp",
      b = "." + m,
      x = "mfp-ready",
      S = "mfp-removing",
      z = "mfp-prevent-close",
      R = function () {},
      _ = !!window.jQuery,
      C = s(window),
      K = function (w, k) {
        c.ev.on(m + w + b, k);
      },
      ut = function (w, k, M, V) {
        var et = document.createElement("div");
        return (
          (et.className = "mfp-" + w),
          M && (et.innerHTML = M),
          V ? k && k.appendChild(et) : ((et = s(et)), k && et.appendTo(k)),
          et
        );
      },
      nt = function (w, k) {
        c.ev.triggerHandler(m + w, k),
          c.st.callbacks &&
            ((w = w.charAt(0).toLowerCase() + w.slice(1)),
            c.st.callbacks[w] &&
              c.st.callbacks[w].apply(c, s.isArray(k) ? k : [k]));
      },
      Mt = function (w) {
        return (
          (w !== a || !c.currTemplate.closeBtn) &&
            ((c.currTemplate.closeBtn = s(
              c.st.closeMarkup.replace("%title%", c.st.tClose)
            )),
            (a = w)),
          c.currTemplate.closeBtn
        );
      },
      Pt = function () {
        s.magnificPopup.instance ||
          ((c = new R()).init(), (s.magnificPopup.instance = c));
      };
    (R.prototype = {
      constructor: R,
      init: function () {
        var w = navigator.appVersion;
        (c.isLowIE = c.isIE8 = document.all && !document.addEventListener),
          (c.isAndroid = /android/gi.test(w)),
          (c.isIOS = /iphone|ipad|ipod/gi.test(w)),
          (c.supportsTransition = (function () {
            var w = document.createElement("p").style,
              k = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== w.transition) return !0;
            for (; k.length; ) if (k.pop() + "Transition" in w) return !0;
            return !1;
          })()),
          (c.probablyMobile =
            c.isAndroid ||
            c.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (q = s(document)),
          (c.popupsCache = {});
      },
      open: function (w) {
        var k;
        if (!1 === w.isObj) {
          (c.items = w.items.toArray()), (c.index = 0);
          var V,
            M = w.items;
          for (k = 0; k < M.length; k++)
            if (((V = M[k]).parsed && (V = V.el[0]), V === w.el[0])) {
              c.index = k;
              break;
            }
        } else
          (c.items = s.isArray(w.items) ? w.items : [w.items]),
            (c.index = w.index || 0);
        if (!c.isOpen) {
          (c.types = []),
            (G = ""),
            (c.ev = w.mainEl && w.mainEl.length ? w.mainEl.eq(0) : q),
            w.key
              ? (c.popupsCache[w.key] || (c.popupsCache[w.key] = {}),
                (c.currTemplate = c.popupsCache[w.key]))
              : (c.currTemplate = {}),
            (c.st = s.extend(!0, {}, s.magnificPopup.defaults, w)),
            (c.fixedContentPos =
              "auto" === c.st.fixedContentPos
                ? !c.probablyMobile
                : c.st.fixedContentPos),
            c.st.modal &&
              ((c.st.closeOnContentClick = !1),
              (c.st.closeOnBgClick = !1),
              (c.st.showCloseBtn = !1),
              (c.st.enableEscapeKey = !1)),
            c.bgOverlay ||
              ((c.bgOverlay = ut("bg").on("click" + b, function () {
                c.close();
              })),
              (c.wrap = ut("wrap")
                .attr("tabindex", -1)
                .on("click" + b, function (Bt) {
                  c._checkIfClose(Bt.target) && c.close();
                })),
              (c.container = ut("container", c.wrap))),
            (c.contentContainer = ut("content")),
            c.st.preloader &&
              (c.preloader = ut("preloader", c.container, c.st.tLoading));
          var et = s.magnificPopup.modules;
          for (k = 0; k < et.length; k++) {
            var ft = et[k];
            (ft = ft.charAt(0).toUpperCase() + ft.slice(1)),
              c["init" + ft].call(c);
          }
          nt("BeforeOpen"),
            c.st.showCloseBtn &&
              (c.st.closeBtnInside
                ? (K(n, function (Bt, Qt, ve, Ce) {
                    ve.close_replaceWith = Mt(Ce.type);
                  }),
                  (G += " mfp-close-btn-in"))
                : c.wrap.append(Mt())),
            c.st.alignTop && (G += " mfp-align-top"),
            c.wrap.css(
              c.fixedContentPos
                ? {
                    overflow: c.st.overflowY,
                    overflowX: "hidden",
                    overflowY: c.st.overflowY,
                  }
                : { top: C.scrollTop(), position: "absolute" }
            ),
            (!1 === c.st.fixedBgPos ||
              ("auto" === c.st.fixedBgPos && !c.fixedContentPos)) &&
              c.bgOverlay.css({ height: q.height(), position: "absolute" }),
            c.st.enableEscapeKey &&
              q.on("keyup" + b, function (Bt) {
                27 === Bt.keyCode && c.close();
              }),
            C.on("resize" + b, function () {
              c.updateSize();
            }),
            c.st.closeOnContentClick || (G += " mfp-auto-cursor"),
            G && c.wrap.addClass(G);
          var xt = (c.wH = C.height()),
            gt = {};
          if (c.fixedContentPos && c._hasScrollBar(xt)) {
            var ce = c._getScrollbarSize();
            ce && (gt.marginRight = ce);
          }
          c.fixedContentPos &&
            (c.isIE7
              ? s("body, html").css("overflow", "hidden")
              : (gt.overflow = "hidden"));
          var Ot = c.st.mainClass;
          return (
            c.isIE7 && (Ot += " mfp-ie7"),
            Ot && c._addClassToMFP(Ot),
            c.updateItemHTML(),
            nt("BuildControls"),
            s("html").css(gt),
            c.bgOverlay
              .add(c.wrap)
              .prependTo(c.st.prependTo || s(document.body)),
            (c._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              c.content
                ? (c._addClassToMFP(x), c._setFocus())
                : c.bgOverlay.addClass(x),
                q.on("focusin" + b, c._onFocusIn);
            }, 16),
            (c.isOpen = !0),
            c.updateSize(xt),
            nt(o),
            w
          );
        }
        c.updateItemHTML();
      },
      close: function () {
        c.isOpen &&
          (nt(A),
          (c.isOpen = !1),
          c.st.removalDelay && !c.isLowIE && c.supportsTransition
            ? (c._addClassToMFP(S),
              setTimeout(function () {
                c._close();
              }, c.st.removalDelay))
            : c._close());
      },
      _close: function () {
        nt(L);
        var w = S + " " + x + " ";
        if (
          (c.bgOverlay.detach(),
          c.wrap.detach(),
          c.container.empty(),
          c.st.mainClass && (w += c.st.mainClass + " "),
          c._removeClassFromMFP(w),
          c.fixedContentPos)
        ) {
          var k = { marginRight: "" };
          c.isIE7 ? s("body, html").css("overflow", "") : (k.overflow = ""),
            s("html").css(k);
        }
        q.off("keyup.mfp focusin" + b),
          c.ev.off(b),
          c.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          c.bgOverlay.attr("class", "mfp-bg"),
          c.container.attr("class", "mfp-container"),
          c.st.showCloseBtn &&
            (!c.st.closeBtnInside || !0 === c.currTemplate[c.currItem.type]) &&
            c.currTemplate.closeBtn &&
            c.currTemplate.closeBtn.detach(),
          c.st.autoFocusLast && c._lastFocusedEl && s(c._lastFocusedEl).focus(),
          (c.currItem = null),
          (c.content = null),
          (c.currTemplate = null),
          (c.prevHeight = 0),
          nt("AfterClose");
      },
      updateSize: function (w) {
        if (c.isIOS) {
          var k = document.documentElement.clientWidth / window.innerWidth,
            M = window.innerHeight * k;
          c.wrap.css("height", M), (c.wH = M);
        } else c.wH = w || C.height();
        c.fixedContentPos || c.wrap.css("height", c.wH), nt("Resize");
      },
      updateItemHTML: function () {
        var w = c.items[c.index];
        c.contentContainer.detach(),
          c.content && c.content.detach(),
          w.parsed || (w = c.parseEl(c.index));
        var k = w.type;
        if (
          (nt("BeforeChange", [c.currItem ? c.currItem.type : "", k]),
          (c.currItem = w),
          !c.currTemplate[k])
        ) {
          var M = !!c.st[k] && c.st[k].markup;
          nt("FirstMarkupParse", M), (c.currTemplate[k] = !M || s(M));
        }
        Y && Y !== w.type && c.container.removeClass("mfp-" + Y + "-holder");
        var V = c["get" + k.charAt(0).toUpperCase() + k.slice(1)](
          w,
          c.currTemplate[k]
        );
        c.appendContent(V, k),
          (w.preloaded = !0),
          nt(f, w),
          (Y = w.type),
          c.container.prepend(c.contentContainer),
          nt("AfterChange");
      },
      appendContent: function (w, k) {
        (c.content = w),
          w
            ? c.st.showCloseBtn &&
              c.st.closeBtnInside &&
              !0 === c.currTemplate[k]
              ? c.content.find(".mfp-close").length || c.content.append(Mt())
              : (c.content = w)
            : (c.content = ""),
          nt("BeforeAppend"),
          c.container.addClass("mfp-" + k + "-holder"),
          c.contentContainer.append(c.content);
      },
      parseEl: function (w) {
        var M,
          k = c.items[w];
        if (
          (k.tagName
            ? (k = { el: s(k) })
            : ((M = k.type), (k = { data: k, src: k.src })),
          k.el)
        ) {
          for (var V = c.types, et = 0; et < V.length; et++)
            if (k.el.hasClass("mfp-" + V[et])) {
              M = V[et];
              break;
            }
          (k.src = k.el.attr("data-mfp-src")),
            k.src || (k.src = k.el.attr("href"));
        }
        return (
          (k.type = M || c.st.type || "inline"),
          (k.index = w),
          (k.parsed = !0),
          (c.items[w] = k),
          nt("ElementParse", k),
          c.items[w]
        );
      },
      addGroup: function (w, k) {
        var M = function (et) {
          (et.mfpEl = this), c._openClick(et, w, k);
        };
        k || (k = {});
        var V = "click.magnificPopup";
        (k.mainEl = w),
          k.items
            ? ((k.isObj = !0), w.off(V).on(V, M))
            : ((k.isObj = !1),
              k.delegate
                ? w.off(V).on(V, k.delegate, M)
                : ((k.items = w), w.off(V).on(V, M)));
      },
      _openClick: function (w, k, M) {
        if (
          (void 0 !== M.midClick
            ? M.midClick
            : s.magnificPopup.defaults.midClick) ||
          !(2 === w.which || w.ctrlKey || w.metaKey || w.altKey || w.shiftKey)
        ) {
          var et =
            void 0 !== M.disableOn
              ? M.disableOn
              : s.magnificPopup.defaults.disableOn;
          if (et)
            if (s.isFunction(et)) {
              if (!et.call(c)) return !0;
            } else if (C.width() < et) return !0;
          w.type && (w.preventDefault(), c.isOpen && w.stopPropagation()),
            (M.el = s(w.mfpEl)),
            M.delegate && (M.items = k.find(M.delegate)),
            c.open(M);
        }
      },
      updateStatus: function (w, k) {
        if (c.preloader) {
          p !== w && c.container.removeClass("mfp-s-" + p),
            !k && "loading" === w && (k = c.st.tLoading);
          var M = { status: w, text: k };
          nt("UpdateStatus", M),
            (w = M.status),
            c.preloader.html((k = M.text)),
            c.preloader.find("a").on("click", function (V) {
              V.stopImmediatePropagation();
            }),
            c.container.addClass("mfp-s-" + w),
            (p = w);
        }
      },
      _checkIfClose: function (w) {
        if (!s(w).hasClass(z)) {
          var k = c.st.closeOnContentClick,
            M = c.st.closeOnBgClick;
          if (k && M) return !0;
          if (
            !c.content ||
            s(w).hasClass("mfp-close") ||
            (c.preloader && w === c.preloader[0])
          )
            return !0;
          if (w === c.content[0] || s.contains(c.content[0], w)) {
            if (k) return !0;
          } else if (M && s.contains(document, w)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (w) {
        c.bgOverlay.addClass(w), c.wrap.addClass(w);
      },
      _removeClassFromMFP: function (w) {
        this.bgOverlay.removeClass(w), c.wrap.removeClass(w);
      },
      _hasScrollBar: function (w) {
        return (
          (c.isIE7 ? q.height() : document.body.scrollHeight) >
          (w || C.height())
        );
      },
      _setFocus: function () {
        (c.st.focus ? c.content.find(c.st.focus).eq(0) : c.wrap).focus();
      },
      _onFocusIn: function (w) {
        if (w.target !== c.wrap[0] && !s.contains(c.wrap[0], w.target))
          return c._setFocus(), !1;
      },
      _parseMarkup: function (w, k, M) {
        var V;
        M.data && (k = s.extend(M.data, k)),
          nt(n, [w, k, M]),
          s.each(k, function (et, ft) {
            if (void 0 === ft || !1 === ft) return !0;
            if ((V = et.split("_")).length > 1) {
              var xt = w.find(b + "-" + V[0]);
              if (xt.length > 0) {
                var gt = V[1];
                "replaceWith" === gt
                  ? xt[0] !== ft[0] && xt.replaceWith(ft)
                  : "img" === gt
                  ? xt.is("img")
                    ? xt.attr("src", ft)
                    : xt.replaceWith(
                        s("<img>")
                          .attr("src", ft)
                          .attr("class", xt.attr("class"))
                      )
                  : xt.attr(V[1], ft);
              }
            } else w.find(b + "-" + et).html(ft);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === c.scrollbarSize) {
          var w = document.createElement("div");
          (w.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(w),
            (c.scrollbarSize = w.offsetWidth - w.clientWidth),
            document.body.removeChild(w);
        }
        return c.scrollbarSize;
      },
    }),
      (s.magnificPopup = {
        instance: null,
        proto: R.prototype,
        modules: [],
        open: function (w, k) {
          return (
            Pt(),
            ((w = w ? s.extend(!0, {}, w) : {}).isObj = !0),
            (w.index = k || 0),
            this.instance.open(w)
          );
        },
        close: function () {
          return s.magnificPopup.instance && s.magnificPopup.instance.close();
        },
        registerModule: function (w, k) {
          k.options && (s.magnificPopup.defaults[w] = k.options),
            s.extend(this.proto, k.proto),
            this.modules.push(w);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (s.fn.magnificPopup = function (w) {
        Pt();
        var k = s(this);
        if ("string" == typeof w)
          if ("open" === w) {
            var M,
              V = _ ? k.data("magnificPopup") : k[0].magnificPopup,
              et = parseInt(arguments[1], 10) || 0;
            V.items
              ? (M = V.items[et])
              : ((M = k),
                V.delegate && (M = M.find(V.delegate)),
                (M = M.eq(et))),
              c._openClick({ mfpEl: M }, k, V);
          } else
            c.isOpen && c[w].apply(c, Array.prototype.slice.call(arguments, 1));
        else
          (w = s.extend(!0, {}, w)),
            _ ? k.data("magnificPopup", w) : (k[0].magnificPopup = w),
            c.addGroup(k, w);
        return k;
      });
    var ht,
      mt,
      Ht,
      Nt = "inline",
      kt = function () {
        Ht && (mt.after(Ht.addClass(ht)).detach(), (Ht = null));
      };
    s.magnificPopup.registerModule(Nt, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          c.types.push(Nt),
            K(L + "." + Nt, function () {
              kt();
            });
        },
        getInline: function (w, k) {
          if ((kt(), w.src)) {
            var M = c.st.inline,
              V = s(w.src);
            if (V.length) {
              var et = V[0].parentNode;
              et &&
                et.tagName &&
                (mt || ((mt = ut((ht = M.hiddenClass))), (ht = "mfp-" + ht)),
                (Ht = V.after(mt).detach().removeClass(ht))),
                c.updateStatus("ready");
            } else c.updateStatus("error", M.tNotFound), (V = s("<div>"));
            return (w.inlineElement = V), V;
          }
          return c.updateStatus("ready"), c._parseMarkup(k, {}, w), k;
        },
      },
    });
    var te,
      he = "ajax",
      Rt = function () {
        te && s(document.body).removeClass(te);
      },
      pe = function () {
        Rt(), c.req && c.req.abort();
      };
    s.magnificPopup.registerModule(he, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          c.types.push(he),
            (te = c.st.ajax.cursor),
            K(L + "." + he, pe),
            K("BeforeChange." + he, pe);
        },
        getAjax: function (w) {
          te && s(document.body).addClass(te), c.updateStatus("loading");
          var k = s.extend(
            {
              url: w.src,
              success: function (M, V, et) {
                var ft = { data: M, xhr: et };
                nt("ParseAjax", ft),
                  c.appendContent(s(ft.data), he),
                  (w.finished = !0),
                  Rt(),
                  c._setFocus(),
                  setTimeout(function () {
                    c.wrap.addClass(x);
                  }, 16),
                  c.updateStatus("ready"),
                  nt("AjaxContentAdded");
              },
              error: function () {
                Rt(),
                  (w.finished = w.loadError = !0),
                  c.updateStatus(
                    "error",
                    c.st.ajax.tError.replace("%url%", w.src)
                  );
              },
            },
            c.st.ajax.settings
          );
          return (c.req = s.ajax(k)), "";
        },
      },
    });
    var Yt,
      Oe,
      Ve = function (w) {
        if (w.data && void 0 !== w.data.title) return w.data.title;
        var k = c.st.image.titleSrc;
        if (k) {
          if (s.isFunction(k)) return k.call(c, w);
          if (w.el) return w.el.attr(k) || "";
        }
        return "";
      };
    s.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var w = c.st.image,
            k = ".image";
          c.types.push("image"),
            K(o + k, function () {
              "image" === c.currItem.type &&
                w.cursor &&
                s(document.body).addClass(w.cursor);
            }),
            K(L + k, function () {
              w.cursor && s(document.body).removeClass(w.cursor),
                C.off("resize" + b);
            }),
            K("Resize" + k, c.resizeImage),
            c.isLowIE && K("AfterChange", c.resizeImage);
        },
        resizeImage: function () {
          var w = c.currItem;
          if (w && w.img && c.st.image.verticalFit) {
            var k = 0;
            c.isLowIE &&
              (k =
                parseInt(w.img.css("padding-top"), 10) +
                parseInt(w.img.css("padding-bottom"), 10)),
              w.img.css("max-height", c.wH - k);
          }
        },
        _onImageHasSize: function (w) {
          w.img &&
            ((w.hasSize = !0),
            Yt && clearInterval(Yt),
            (w.isCheckingImgSize = !1),
            nt("ImageHasSize", w),
            w.imgHidden &&
              (c.content && c.content.removeClass("mfp-loading"),
              (w.imgHidden = !1)));
        },
        findImageSize: function (w) {
          var k = 0,
            M = w.img[0],
            V = function (et) {
              Yt && clearInterval(Yt),
                (Yt = setInterval(function () {
                  M.naturalWidth > 0
                    ? c._onImageHasSize(w)
                    : (k > 200 && clearInterval(Yt),
                      3 == ++k
                        ? V(10)
                        : 40 === k
                        ? V(50)
                        : 100 === k && V(500));
                }, et));
            };
          V(1);
        },
        getImage: function (w, k) {
          var M = 0,
            V = function () {
              w &&
                (w.img[0].complete
                  ? (w.img.off(".mfploader"),
                    w === c.currItem &&
                      (c._onImageHasSize(w), c.updateStatus("ready")),
                    (w.hasSize = !0),
                    (w.loaded = !0),
                    nt("ImageLoadComplete"))
                  : ++M < 200
                  ? setTimeout(V, 100)
                  : et());
            },
            et = function () {
              w &&
                (w.img.off(".mfploader"),
                w === c.currItem &&
                  (c._onImageHasSize(w),
                  c.updateStatus("error", ft.tError.replace("%url%", w.src))),
                (w.hasSize = !0),
                (w.loaded = !0),
                (w.loadError = !0));
            },
            ft = c.st.image,
            xt = k.find(".mfp-img");
          if (xt.length) {
            var gt = document.createElement("img");
            (gt.className = "mfp-img"),
              w.el &&
                w.el.find("img").length &&
                (gt.alt = w.el.find("img").attr("alt")),
              (w.img = s(gt).on("load.mfploader", V).on("error.mfploader", et)),
              (gt.src = w.src),
              xt.is("img") && (w.img = w.img.clone()),
              (gt = w.img[0]).naturalWidth > 0
                ? (w.hasSize = !0)
                : gt.width || (w.hasSize = !1);
          }
          return (
            c._parseMarkup(k, { title: Ve(w), img_replaceWith: w.img }, w),
            c.resizeImage(),
            w.hasSize
              ? (Yt && clearInterval(Yt),
                w.loadError
                  ? (k.addClass("mfp-loading"),
                    c.updateStatus("error", ft.tError.replace("%url%", w.src)))
                  : (k.removeClass("mfp-loading"), c.updateStatus("ready")),
                k)
              : (c.updateStatus("loading"),
                (w.loading = !0),
                w.hasSize ||
                  ((w.imgHidden = !0),
                  k.addClass("mfp-loading"),
                  c.findImageSize(w)),
                k)
          );
        },
      },
    }),
      s.magnificPopup.registerModule("zoom", {
        options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function (w) {
            return w.is("img") ? w : w.find("img");
          },
        },
        proto: {
          initZoom: function () {
            var M,
              w = c.st.zoom,
              k = ".zoom";
            if (w.enabled && c.supportsTransition) {
              var xt,
                gt,
                V = w.duration,
                et = function (ce) {
                  var Ot = ce
                      .clone()
                      .removeAttr("style")
                      .removeAttr("class")
                      .addClass("mfp-animated-image"),
                    Qt = {
                      position: "fixed",
                      zIndex: 9999,
                      left: 0,
                      top: 0,
                      "-webkit-backface-visibility": "hidden",
                    },
                    ve = "transition";
                  return (
                    (Qt["-webkit-" + ve] =
                      Qt["-moz-" + ve] =
                      Qt["-o-" + ve] =
                      Qt[ve] =
                        "all " + w.duration / 1e3 + "s " + w.easing),
                    Ot.css(Qt),
                    Ot
                  );
                },
                ft = function () {
                  c.content.css("visibility", "visible");
                };
              K("BuildControls" + k, function () {
                if (c._allowZoom()) {
                  if (
                    (clearTimeout(xt),
                    c.content.css("visibility", "hidden"),
                    !(M = c._getItemToZoom()))
                  )
                    return void ft();
                  (gt = et(M)).css(c._getOffset()),
                    c.wrap.append(gt),
                    (xt = setTimeout(function () {
                      gt.css(c._getOffset(!0)),
                        (xt = setTimeout(function () {
                          ft(),
                            setTimeout(function () {
                              gt.remove(),
                                (M = gt = null),
                                nt("ZoomAnimationEnded");
                            }, 16);
                        }, V));
                    }, 16));
                }
              }),
                K(A + k, function () {
                  if (c._allowZoom()) {
                    if ((clearTimeout(xt), (c.st.removalDelay = V), !M)) {
                      if (!(M = c._getItemToZoom())) return;
                      gt = et(M);
                    }
                    gt.css(c._getOffset(!0)),
                      c.wrap.append(gt),
                      c.content.css("visibility", "hidden"),
                      setTimeout(function () {
                        gt.css(c._getOffset());
                      }, 16);
                  }
                }),
                K(L + k, function () {
                  c._allowZoom() && (ft(), gt && gt.remove(), (M = null));
                });
            }
          },
          _allowZoom: function () {
            return "image" === c.currItem.type;
          },
          _getItemToZoom: function () {
            return !!c.currItem.hasSize && c.currItem.img;
          },
          _getOffset: function (w) {
            var k,
              M = (k = w
                ? c.currItem.img
                : c.st.zoom.opener(c.currItem.el || c.currItem)).offset(),
              V = parseInt(k.css("padding-top"), 10),
              et = parseInt(k.css("padding-bottom"), 10);
            M.top -= s(window).scrollTop() - V;
            var ft = {
              width: k.width(),
              height: (_ ? k.innerHeight() : k[0].offsetHeight) - et - V,
            };
            return (
              void 0 === Oe &&
                (Oe =
                  void 0 !== document.createElement("p").style.MozTransform),
              Oe
                ? (ft["-moz-transform"] = ft.transform =
                    "translate(" + M.left + "px," + M.top + "px)")
                : ((ft.left = M.left), (ft.top = M.top)),
              ft
            );
          },
        },
      });
    var ee = "iframe",
      Me = function (w) {
        if (c.currTemplate[ee]) {
          var k = c.currTemplate[ee].find("iframe");
          k.length &&
            (w || (k[0].src = "//about:blank"),
            c.isIE8 && k.css("display", w ? "block" : "none"));
        }
      };
    s.magnificPopup.registerModule(ee, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          c.types.push(ee),
            K("BeforeChange", function (w, k, M) {
              k !== M && (k === ee ? Me() : M === ee && Me(!0));
            }),
            K(L + "." + ee, function () {
              Me();
            });
        },
        getIframe: function (w, k) {
          var M = w.src,
            V = c.st.iframe;
          s.each(V.patterns, function () {
            if (M.indexOf(this.index) > -1)
              return (
                this.id &&
                  (M =
                    "string" == typeof this.id
                      ? M.substr(
                          M.lastIndexOf(this.id) + this.id.length,
                          M.length
                        )
                      : this.id.call(this, M)),
                (M = this.src.replace("%id%", M)),
                !1
              );
          });
          var et = {};
          return (
            V.srcAction && (et[V.srcAction] = M),
            c._parseMarkup(k, et, w),
            c.updateStatus("ready"),
            k
          );
        },
      },
    });
    var Pe = function (w) {
        var k = c.items.length;
        return w > k - 1 ? w - k : w < 0 ? k + w : w;
      },
      Ue = function (w, k, M) {
        return w.replace(/%curr%/gi, k + 1).replace(/%total%/gi, M);
      };
    s.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var w = c.st.gallery,
            k = ".mfp-gallery";
          if (((c.direction = !0), !w || !w.enabled)) return !1;
          (G += " mfp-gallery"),
            K(o + k, function () {
              w.navigateByImgClick &&
                c.wrap.on("click" + k, ".mfp-img", function () {
                  if (c.items.length > 1) return c.next(), !1;
                }),
                q.on("keydown" + k, function (M) {
                  37 === M.keyCode ? c.prev() : 39 === M.keyCode && c.next();
                });
            }),
            K("UpdateStatus" + k, function (M, V) {
              V.text && (V.text = Ue(V.text, c.currItem.index, c.items.length));
            }),
            K(n + k, function (M, V, et, ft) {
              var xt = c.items.length;
              et.counter = xt > 1 ? Ue(w.tCounter, ft.index, xt) : "";
            }),
            K("BuildControls" + k, function () {
              if (c.items.length > 1 && w.arrows && !c.arrowLeft) {
                var M = w.arrowMarkup,
                  V = (c.arrowLeft = s(
                    M.replace(/%title%/gi, w.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(z)),
                  et = (c.arrowRight = s(
                    M.replace(/%title%/gi, w.tNext).replace(/%dir%/gi, "right")
                  ).addClass(z));
                V.click(function () {
                  c.prev();
                }),
                  et.click(function () {
                    c.next();
                  }),
                  c.container.append(V.add(et));
              }
            }),
            K(f + k, function () {
              c._preloadTimeout && clearTimeout(c._preloadTimeout),
                (c._preloadTimeout = setTimeout(function () {
                  c.preloadNearbyImages(), (c._preloadTimeout = null);
                }, 16));
            }),
            K(L + k, function () {
              q.off(k),
                c.wrap.off("click" + k),
                (c.arrowRight = c.arrowLeft = null);
            });
        },
        next: function () {
          (c.direction = !0), (c.index = Pe(c.index + 1)), c.updateItemHTML();
        },
        prev: function () {
          (c.direction = !1), (c.index = Pe(c.index - 1)), c.updateItemHTML();
        },
        goTo: function (w) {
          (c.direction = w >= c.index), (c.index = w), c.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var V,
            w = c.st.gallery.preload,
            k = Math.min(w[0], c.items.length),
            M = Math.min(w[1], c.items.length);
          for (V = 1; V <= (c.direction ? M : k); V++)
            c._preloadItem(c.index + V);
          for (V = 1; V <= (c.direction ? k : M); V++)
            c._preloadItem(c.index - V);
        },
        _preloadItem: function (w) {
          if (((w = Pe(w)), !c.items[w].preloaded)) {
            var k = c.items[w];
            k.parsed || (k = c.parseEl(w)),
              nt("LazyLoad", k),
              "image" === k.type &&
                (k.img = s('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    k.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (k.hasSize = !0),
                      (k.loadError = !0),
                      nt("LazyLoadError", k);
                  })
                  .attr("src", k.src)),
              (k.preloaded = !0);
          }
        },
      },
    });
    var Wt = "retina";
    s.magnificPopup.registerModule(Wt, {
      options: {
        replaceSrc: function (w) {
          return w.src.replace(/\.\w+$/, function (k) {
            return "@2x" + k;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var w = c.st.retina,
              k = w.ratio;
            (k = isNaN(k) ? k() : k) > 1 &&
              (K("ImageHasSize." + Wt, function (M, V) {
                V.img.css({
                  "max-width": V.img[0].naturalWidth / k,
                  width: "100%",
                });
              }),
              K("ElementParse." + Wt, function (M, V) {
                V.src = w.replaceSrc(V, k);
              }));
          }
        },
      },
    }),
      Pt();
  }),
  (function (s, L) {
    "object" == typeof module && module.exports
      ? (module.exports = L())
      : (s.EvEmitter = L());
  })(typeof window < "u" ? window : this, function () {
    function s() {}
    let L = s.prototype;
    return (
      (L.on = function (A, u) {
        if (!A || !u) return this;
        let h = (this._events = this._events || {}),
          n = (h[A] = h[A] || []);
        return n.includes(u) || n.push(u), this;
      }),
      (L.once = function (A, u) {
        if (!A || !u) return this;
        this.on(A, u);
        let h = (this._onceEvents = this._onceEvents || {});
        return ((h[A] = h[A] || {})[u] = !0), this;
      }),
      (L.off = function (A, u) {
        let h = this._events && this._events[A];
        if (!h || !h.length) return this;
        let n = h.indexOf(u);
        return -1 != n && h.splice(n, 1), this;
      }),
      (L.emitEvent = function (A, u) {
        let h = this._events && this._events[A];
        if (!h || !h.length) return this;
        (h = h.slice(0)), (u = u || []);
        let n = this._onceEvents && this._onceEvents[A];
        for (let o of h)
          n && n[o] && (this.off(A, o), delete n[o]), o.apply(this, u);
        return this;
      }),
      (L.allOff = function () {
        return delete this._events, delete this._onceEvents, this;
      }),
      s
    );
  }),
  /*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  (function (s, L) {
    "object" == typeof module && module.exports
      ? (module.exports = L(s, require("ev-emitter")))
      : (s.imagesLoaded = L(s, s.EvEmitter));
  })(typeof window < "u" ? window : this, function (s, L) {
    let A = s.jQuery,
      u = s.console;
    function h(b, x, S) {
      if (!(this instanceof h)) return new h(b, x, S);
      let z = b;
      var c;
      "string" == typeof b && (z = document.querySelectorAll(b)),
        z
          ? ((this.elements =
              ((c = z),
              Array.isArray(c)
                ? c
                : "object" == typeof c && "number" == typeof c.length
                ? [...c]
                : [c])),
            (this.options = {}),
            "function" == typeof x ? (S = x) : Object.assign(this.options, x),
            S && this.on("always", S),
            this.getImages(),
            A && (this.jqDeferred = new A.Deferred()),
            setTimeout(this.check.bind(this)))
          : u.error(`Bad element for imagesLoaded ${z || b}`);
    }
    (h.prototype = Object.create(L.prototype)).getImages = function () {
      (this.images = []), this.elements.forEach(this.addElementImages, this);
    };
    const n = [1, 9, 11];
    h.prototype.addElementImages = function (b) {
      "IMG" === b.nodeName && this.addImage(b),
        !0 === this.options.background && this.addElementBackgroundImages(b);
      let { nodeType: x } = b;
      if (!x || !n.includes(x)) return;
      let S = b.querySelectorAll("img");
      for (let z of S) this.addImage(z);
      if ("string" == typeof this.options.background) {
        let z = b.querySelectorAll(this.options.background);
        for (let c of z) this.addElementBackgroundImages(c);
      }
    };
    const o = /url\((['"])?(.*?)\1\)/gi;
    function f(b) {
      this.img = b;
    }
    function m(b, x) {
      (this.url = b), (this.element = x), (this.img = new Image());
    }
    return (
      (h.prototype.addElementBackgroundImages = function (b) {
        let x = getComputedStyle(b);
        if (!x) return;
        let S = o.exec(x.backgroundImage);
        for (; null !== S; ) {
          let z = S && S[2];
          z && this.addBackground(z, b), (S = o.exec(x.backgroundImage));
        }
      }),
      (h.prototype.addImage = function (b) {
        let x = new f(b);
        this.images.push(x);
      }),
      (h.prototype.addBackground = function (b, x) {
        let S = new m(b, x);
        this.images.push(S);
      }),
      (h.prototype.check = function () {
        if (
          ((this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          !this.images.length)
        )
          return void this.complete();
        let b = (x, S, z) => {
          setTimeout(() => {
            this.progress(x, S, z);
          });
        };
        this.images.forEach(function (x) {
          x.once("progress", b), x.check();
        });
      }),
      (h.prototype.progress = function (b, x, S) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !b.isLoaded),
          this.emitEvent("progress", [this, b, x]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, b),
          this.progressedCount === this.images.length && this.complete(),
          this.options.debug && u && u.log(`progress: ${S}`, b, x);
      }),
      (h.prototype.complete = function () {
        let b = this.hasAnyBroken ? "fail" : "done";
        (this.isComplete = !0),
          this.emitEvent(b, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred &&
            this.jqDeferred[this.hasAnyBroken ? "reject" : "resolve"](this);
      }),
      ((f.prototype = Object.create(L.prototype)).check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.img.crossOrigin &&
              (this.proxyImage.crossOrigin = this.img.crossOrigin),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.currentSrc || this.img.src));
      }),
      (f.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (f.prototype.confirm = function (b, x) {
        this.isLoaded = b;
        let { parentNode: S } = this.img;
        this.emitEvent("progress", [
          this,
          "PICTURE" === S.nodeName ? S : this.img,
          x,
        ]);
      }),
      (f.prototype.handleEvent = function (b) {
        let x = "on" + b.type;
        this[x] && this[x](b);
      }),
      (f.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (f.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (f.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      ((m.prototype = Object.create(f.prototype)).check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (m.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (m.prototype.confirm = function (b, x) {
        (this.isLoaded = b),
          this.emitEvent("progress", [this, this.element, x]);
      }),
      (h.makeJQueryPlugin = function (b) {
        (b = b || s.jQuery) &&
          ((A = b),
          (A.fn.imagesLoaded = function (x, S) {
            return new h(this, x, S).jqDeferred.promise(A(this));
          }));
      }),
      h.makeJQueryPlugin(),
      h
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (A) {
          return L(s, A);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = L(s, require("jquery")))
      : (s.jQueryBridget = L(s, s.jQuery));
  })(window, function (L, A) {
    "use strict";
    var u = Array.prototype.slice,
      h = L.console,
      n =
        typeof h > "u"
          ? function () {}
          : function (m) {
              h.error(m);
            };
    function o(m, b, x) {
      (x = x || A || L.jQuery) &&
        (b.prototype.option ||
          (b.prototype.option = function (c) {
            x.isPlainObject(c) &&
              (this.options = x.extend(!0, this.options, c));
          }),
        (x.fn[m] = function (c) {
          return "string" == typeof c
            ? (function S(c, R, _) {
                var p,
                  C = "$()." + m + '("' + R + '")';
                return (
                  c.each(function (q, Y) {
                    var G = x.data(Y, m);
                    if (G) {
                      var a = G[R];
                      if (a && "_" != R.charAt(0)) {
                        var K = a.apply(G, _);
                        p = void 0 === p ? K : p;
                      } else n(C + " is not a valid method");
                    } else n(m + " not initialized. Cannot call methods, i.e. " + C);
                  }),
                  void 0 !== p ? p : c
                );
              })(this, c, u.call(arguments, 1))
            : ((function z(c, R) {
                c.each(function (_, p) {
                  var C = x.data(p, m);
                  C
                    ? (C.option(R), C._init())
                    : ((C = new b(p, R)), x.data(p, m, C));
                });
              })(this, c),
              this);
        }),
        f(x));
    }
    function f(m) {
      !m || (m && m.bridget) || (m.bridget = o);
    }
    return f(A || L.jQuery), o;
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", L)
      : "object" == typeof module && module.exports
      ? (module.exports = L())
      : (s.EvEmitter = L());
  })(typeof window < "u" ? window : this, function () {
    function s() {}
    var L = s.prototype;
    return (
      (L.on = function (A, u) {
        if (A && u) {
          var h = (this._events = this._events || {}),
            n = (h[A] = h[A] || []);
          return -1 == n.indexOf(u) && n.push(u), this;
        }
      }),
      (L.once = function (A, u) {
        if (A && u) {
          this.on(A, u);
          var h = (this._onceEvents = this._onceEvents || {});
          return ((h[A] = h[A] || {})[u] = !0), this;
        }
      }),
      (L.off = function (A, u) {
        var h = this._events && this._events[A];
        if (h && h.length) {
          var n = h.indexOf(u);
          return -1 != n && h.splice(n, 1), this;
        }
      }),
      (L.emitEvent = function (A, u) {
        var h = this._events && this._events[A];
        if (h && h.length) {
          (h = h.slice(0)), (u = u || []);
          for (
            var n = this._onceEvents && this._onceEvents[A], o = 0;
            o < h.length;
            o++
          ) {
            var f = h[o];
            n && n[f] && (this.off(A, f), delete n[f]), f.apply(this, u);
          }
          return this;
        }
      }),
      (L.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      s
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", L)
      : "object" == typeof module && module.exports
      ? (module.exports = L())
      : (s.getSize = L());
  })(window, function () {
    "use strict";
    function L(z) {
      var c = parseFloat(z);
      return -1 == z.indexOf("%") && !isNaN(c) && c;
    }
    var u =
        typeof console > "u"
          ? function A() {}
          : function (z) {
              console.error(z);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      n = h.length;
    function f(z) {
      var c = getComputedStyle(z);
      return (
        c ||
          u(
            "Style returned " +
              c +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        c
      );
    }
    var b,
      m = !1;
    return function S(z) {
      if (
        ((function x() {
          if (!m) {
            m = !0;
            var z = document.createElement("div");
            (z.style.width = "200px"),
              (z.style.padding = "1px 2px 3px 4px"),
              (z.style.borderStyle = "solid"),
              (z.style.borderWidth = "1px 2px 3px 4px"),
              (z.style.boxSizing = "border-box");
            var c = document.body || document.documentElement;
            c.appendChild(z);
            var R = f(z);
            (b = 200 == Math.round(L(R.width))),
              (S.isBoxSizeOuter = b),
              c.removeChild(z);
          }
        })(),
        "string" == typeof z && (z = document.querySelector(z)),
        z && "object" == typeof z && z.nodeType)
      ) {
        var c = f(z);
        if ("none" == c.display)
          return (function o() {
            for (
              var z = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                c = 0;
              c < n;
              c++
            )
              z[h[c]] = 0;
            return z;
          })();
        var R = {};
        (R.width = z.offsetWidth), (R.height = z.offsetHeight);
        for (
          var _ = (R.isBorderBox = "border-box" == c.boxSizing), p = 0;
          p < n;
          p++
        ) {
          var C = h[p],
            Y = parseFloat(c[C]);
          R[C] = isNaN(Y) ? 0 : Y;
        }
        var G = R.paddingLeft + R.paddingRight,
          a = R.paddingTop + R.paddingBottom,
          K = R.marginLeft + R.marginRight,
          ut = R.marginTop + R.marginBottom,
          nt = R.borderLeftWidth + R.borderRightWidth,
          Mt = R.borderTopWidth + R.borderBottomWidth,
          Pt = _ && b,
          Tt = L(c.width);
        !1 !== Tt && (R.width = Tt + (Pt ? 0 : G + nt));
        var Nt = L(c.height);
        return (
          !1 !== Nt && (R.height = Nt + (Pt ? 0 : a + Mt)),
          (R.innerWidth = R.width - (G + nt)),
          (R.innerHeight = R.height - (a + Mt)),
          (R.outerWidth = R.width + K),
          (R.outerHeight = R.height + ut),
          R
        );
      }
    };
  }),
  (function (s, L) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", L)
      : "object" == typeof module && module.exports
      ? (module.exports = L())
      : (s.matchesSelector = L());
  })(window, function () {
    "use strict";
    var L = (function () {
      var A = window.Element.prototype;
      if (A.matches) return "matches";
      if (A.matchesSelector) return "matchesSelector";
      for (var u = ["webkit", "moz", "ms", "o"], h = 0; h < u.length; h++) {
        var o = u[h] + "MatchesSelector";
        if (A[o]) return o;
      }
    })();
    return function (u, h) {
      return u[L](h);
    };
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (A) {
            return L(s, A);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = L(s, require("desandro-matches-selector")))
      : (s.fizzyUIUtils = L(s, s.matchesSelector));
  })(window, function (L, A) {
    var u = {
        extend: function (o, f) {
          for (var m in f) o[m] = f[m];
          return o;
        },
        modulo: function (o, f) {
          return ((o % f) + f) % f;
        },
      },
      h = Array.prototype.slice;
    (u.makeArray = function (o) {
      return Array.isArray(o)
        ? o
        : null == o
        ? []
        : "object" == typeof o && "number" == typeof o.length
        ? h.call(o)
        : [o];
    }),
      (u.removeFrom = function (o, f) {
        var m = o.indexOf(f);
        -1 != m && o.splice(m, 1);
      }),
      (u.getParent = function (o, f) {
        for (; o.parentNode && o != document.body; )
          if (A((o = o.parentNode), f)) return o;
      }),
      (u.getQueryElement = function (o) {
        return "string" == typeof o ? document.querySelector(o) : o;
      }),
      (u.handleEvent = function (o) {
        var f = "on" + o.type;
        this[f] && this[f](o);
      }),
      (u.filterFindElements = function (o, f) {
        o = u.makeArray(o);
        var m = [];
        return (
          o.forEach(function (b) {
            if (b instanceof HTMLElement) {
              if (!f) return void m.push(b);
              A(b, f) && m.push(b);
              for (var x = b.querySelectorAll(f), S = 0; S < x.length; S++)
                m.push(x[S]);
            }
          }),
          m
        );
      }),
      (u.debounceMethod = function (o, f, m) {
        m = m || 100;
        var b = o.prototype[f],
          x = f + "Timeout";
        o.prototype[f] = function () {
          clearTimeout(this[x]);
          var z = arguments,
            c = this;
          this[x] = setTimeout(function () {
            b.apply(c, z), delete c[x];
          }, m);
        };
      }),
      (u.docReady = function (o) {
        var f = document.readyState;
        "complete" == f || "interactive" == f
          ? setTimeout(o)
          : document.addEventListener("DOMContentLoaded", o);
      }),
      (u.toDashed = function (o) {
        return o
          .replace(/(.)([A-Z])/g, function (f, m, b) {
            return m + "-" + b;
          })
          .toLowerCase();
      });
    var n = L.console;
    return (
      (u.htmlInit = function (o, f) {
        u.docReady(function () {
          var m = u.toDashed(f),
            b = "data-" + m,
            x = document.querySelectorAll("[" + b + "]"),
            S = document.querySelectorAll(".js-" + m),
            z = u.makeArray(x).concat(u.makeArray(S)),
            c = b + "-options",
            R = L.jQuery;
          z.forEach(function (_) {
            var C,
              p = _.getAttribute(b) || _.getAttribute(c);
            try {
              C = p && JSON.parse(p);
            } catch (Y) {
              return void (
                n &&
                n.error("Error parsing " + b + " on " + _.className + ": " + Y)
              );
            }
            var q = new o(_, C);
            R && R.data(_, f, q);
          });
        });
      }),
      u
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          L
        )
      : "object" == typeof module && module.exports
      ? (module.exports = L(require("ev-emitter"), require("get-size")))
      : ((s.Outlayer = {}), (s.Outlayer.Item = L(s.EvEmitter, s.getSize)));
  })(window, function (L, A) {
    "use strict";
    var h = document.documentElement.style,
      n = "string" == typeof h.transition ? "transition" : "WebkitTransition",
      o = "string" == typeof h.transform ? "transform" : "WebkitTransform",
      f = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[n],
      m = {
        transform: o,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay",
      };
    function b(_, p) {
      _ &&
        ((this.element = _),
        (this.layout = p),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var x = (b.prototype = Object.create(L.prototype));
    (x.constructor = b),
      (x._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (x.handleEvent = function (_) {
        var p = "on" + _.type;
        this[p] && this[p](_);
      }),
      (x.getSize = function () {
        this.size = A(this.element);
      }),
      (x.css = function (_) {
        var p = this.element.style;
        for (var C in _) p[m[C] || C] = _[C];
      }),
      (x.getPosition = function () {
        var _ = getComputedStyle(this.element),
          p = this.layout._getOption("originLeft"),
          C = this.layout._getOption("originTop"),
          q = _[p ? "left" : "right"],
          Y = _[C ? "top" : "bottom"],
          G = parseFloat(q),
          a = parseFloat(Y),
          K = this.layout.size;
        -1 != q.indexOf("%") && (G = (G / 100) * K.width),
          -1 != Y.indexOf("%") && (a = (a / 100) * K.height),
          (G = isNaN(G) ? 0 : G),
          (a = isNaN(a) ? 0 : a),
          (a -= C ? K.paddingTop : K.paddingBottom),
          (this.position.x = G -= p ? K.paddingLeft : K.paddingRight),
          (this.position.y = a);
      }),
      (x.layoutPosition = function () {
        var _ = this.layout.size,
          p = {},
          C = this.layout._getOption("originLeft"),
          q = this.layout._getOption("originTop"),
          a = C ? "right" : "left";
        (p[C ? "left" : "right"] = this.getXValue(
          this.position.x + _[C ? "paddingLeft" : "paddingRight"]
        )),
          (p[a] = "");
        var Mt = q ? "bottom" : "top";
        (p[q ? "top" : "bottom"] = this.getYValue(
          this.position.y + _[q ? "paddingTop" : "paddingBottom"]
        )),
          (p[Mt] = ""),
          this.css(p),
          this.emitEvent("layout", [this]);
      }),
      (x.getXValue = function (_) {
        var p = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !p
          ? (_ / this.layout.size.width) * 100 + "%"
          : _ + "px";
      }),
      (x.getYValue = function (_) {
        var p = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && p
          ? (_ / this.layout.size.height) * 100 + "%"
          : _ + "px";
      }),
      (x._transitionTo = function (_, p) {
        this.getPosition();
        var C = this.position.x,
          q = this.position.y,
          Y = _ == this.position.x && p == this.position.y;
        if ((this.setPosition(_, p), !Y || this.isTransitioning)) {
          var K = {};
          (K.transform = this.getTranslate(_ - C, p - q)),
            this.transition({
              to: K,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        } else this.layoutPosition();
      }),
      (x.getTranslate = function (_, p) {
        return (
          "translate3d(" +
          (_ = this.layout._getOption("originLeft") ? _ : -_) +
          "px, " +
          (p = this.layout._getOption("originTop") ? p : -p) +
          "px, 0)"
        );
      }),
      (x.goTo = function (_, p) {
        this.setPosition(_, p), this.layoutPosition();
      }),
      (x.moveTo = x._transitionTo),
      (x.setPosition = function (_, p) {
        (this.position.x = parseFloat(_)), (this.position.y = parseFloat(p));
      }),
      (x._nonTransition = function (_) {
        for (var p in (this.css(_.to),
        _.isCleaning && this._removeStyles(_.to),
        _.onTransitionEnd))
          _.onTransitionEnd[p].call(this);
      }),
      (x.transition = function (_) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var p = this._transn;
          for (var C in _.onTransitionEnd) p.onEnd[C] = _.onTransitionEnd[C];
          for (C in _.to)
            (p.ingProperties[C] = !0), _.isCleaning && (p.clean[C] = !0);
          _.from && this.css(_.from),
            this.enableTransition(_.to),
            this.css(_.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(_);
      });
    var z =
      "opacity," +
      (function S(_) {
        return _.replace(/([A-Z])/g, function (p) {
          return "-" + p.toLowerCase();
        });
      })(o);
    (x.enableTransition = function () {
      if (!this.isTransitioning) {
        var _ = this.layout.options.transitionDuration;
        this.css({
          transitionProperty: z,
          transitionDuration: (_ = "number" == typeof _ ? _ + "ms" : _),
          transitionDelay: this.staggerDelay || 0,
        }),
          this.element.addEventListener(f, this, !1);
      }
    }),
      (x.onwebkitTransitionEnd = function (_) {
        this.ontransitionend(_);
      }),
      (x.onotransitionend = function (_) {
        this.ontransitionend(_);
      });
    var c = { "-webkit-transform": "transform" };
    (x.ontransitionend = function (_) {
      if (_.target === this.element) {
        var p = this._transn,
          C = c[_.propertyName] || _.propertyName;
        delete p.ingProperties[C],
          (function u(_) {
            for (var p in _) return !1;
            return !0;
          })(p.ingProperties) && this.disableTransition(),
          C in p.clean &&
            ((this.element.style[_.propertyName] = ""), delete p.clean[C]),
          C in p.onEnd && (p.onEnd[C].call(this), delete p.onEnd[C]),
          this.emitEvent("transitionEnd", [this]);
      }
    }),
      (x.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(f, this, !1),
          (this.isTransitioning = !1);
      }),
      (x._removeStyles = function (_) {
        var p = {};
        for (var C in _) p[C] = "";
        this.css(p);
      });
    var R = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (x.removeTransitionStyles = function () {
        this.css(R);
      }),
      (x.stagger = function (_) {
        (_ = isNaN(_) ? 0 : _), (this.staggerDelay = _ + "ms");
      }),
      (x.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (x.remove = function () {
        n && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            this.hide())
          : this.removeElem();
      }),
      (x.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var _ = this.layout.options,
          p = {};
        (p[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: _.hiddenStyle,
            to: _.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: p,
          });
      }),
      (x.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (x.getHideRevealTransitionEndProperty = function (_) {
        var p = this.layout.options[_];
        if (p.opacity) return "opacity";
        for (var C in p) return C;
      }),
      (x.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var _ = this.layout.options,
          p = {};
        (p[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: _.visibleStyle,
            to: _.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: p,
          });
      }),
      (x.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (x.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      b
    );
  }),
  (function (s, L) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (A, u, h, n) {
            return L(s, A, u, h, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = L(
          s,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (s.Outlayer = L(
          s,
          s.EvEmitter,
          s.getSize,
          s.fizzyUIUtils,
          s.Outlayer.Item
        ));
  })(window, function (L, A, u, h, n) {
    "use strict";
    var o = L.console,
      f = L.jQuery,
      m = function () {},
      b = 0,
      x = {};
    function S(p, C) {
      var q = h.getQueryElement(p);
      if (q) {
        (this.element = q),
          f && (this.$element = f(this.element)),
          (this.options = h.extend({}, this.constructor.defaults)),
          this.option(C);
        var Y = ++b;
        (this.element.outlayerGUID = Y),
          (x[Y] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (q || p));
    }
    (S.namespace = "outlayer"),
      (S.Item = n),
      (S.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var z = S.prototype;
    function c(p) {
      function C() {
        p.apply(this, arguments);
      }
      return ((C.prototype = Object.create(p.prototype)).constructor = C), C;
    }
    h.extend(z, A.prototype),
      (z.option = function (p) {
        h.extend(this.options, p);
      }),
      (z._getOption = function (p) {
        var C = this.constructor.compatOptions[p];
        return C && void 0 !== this.options[C]
          ? this.options[C]
          : this.options[p];
      }),
      (S.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (z._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          h.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (z.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (z._itemize = function (p) {
        for (
          var C = this._filterFindItemElements(p),
            q = this.constructor.Item,
            Y = [],
            G = 0;
          G < C.length;
          G++
        ) {
          var K = new q(C[G], this);
          Y.push(K);
        }
        return Y;
      }),
      (z._filterFindItemElements = function (p) {
        return h.filterFindElements(p, this.options.itemSelector);
      }),
      (z.getItemElements = function () {
        return this.items.map(function (p) {
          return p.element;
        });
      }),
      (z.layout = function () {
        this._resetLayout(), this._manageStamps();
        var p = this._getOption("layoutInstant");
        this.layoutItems(this.items, void 0 !== p ? p : !this._isLayoutInited),
          (this._isLayoutInited = !0);
      }),
      (z._init = z.layout),
      (z._resetLayout = function () {
        this.getSize();
      }),
      (z.getSize = function () {
        this.size = u(this.element);
      }),
      (z._getMeasurement = function (p, C) {
        var Y,
          q = this.options[p];
        q
          ? ("string" == typeof q
              ? (Y = this.element.querySelector(q))
              : q instanceof HTMLElement && (Y = q),
            (this[p] = Y ? u(Y)[C] : q))
          : (this[p] = 0);
      }),
      (z.layoutItems = function (p, C) {
        (p = this._getItemsForLayout(p)),
          this._layoutItems(p, C),
          this._postLayout();
      }),
      (z._getItemsForLayout = function (p) {
        return p.filter(function (C) {
          return !C.isIgnored;
        });
      }),
      (z._layoutItems = function (p, C) {
        if ((this._emitCompleteOnItems("layout", p), p && p.length)) {
          var q = [];
          p.forEach(function (Y) {
            var G = this._getItemLayoutPosition(Y);
            (G.item = Y), (G.isInstant = C || Y.isLayoutInstant), q.push(G);
          }, this),
            this._processLayoutQueue(q);
        }
      }),
      (z._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (z._processLayoutQueue = function (p) {
        this.updateStagger(),
          p.forEach(function (C, q) {
            this._positionItem(C.item, C.x, C.y, C.isInstant, q);
          }, this);
      }),
      (z.updateStagger = function () {
        var p = this.options.stagger;
        if (null != p)
          return (
            (this.stagger = (function _(p) {
              if ("number" == typeof p) return p;
              var C = p.match(/(^\d*\.?\d*)(\w*)/),
                q = C && C[1],
                Y = C && C[2];
              return q.length ? (q = parseFloat(q)) * (R[Y] || 1) : 0;
            })(p)),
            this.stagger
          );
        this.stagger = 0;
      }),
      (z._positionItem = function (p, C, q, Y, G) {
        Y ? p.goTo(C, q) : (p.stagger(G * this.stagger), p.moveTo(C, q));
      }),
      (z._postLayout = function () {
        this.resizeContainer();
      }),
      (z.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
          var C = this._getContainerSize();
          C &&
            (this._setContainerMeasure(C.width, !0),
            this._setContainerMeasure(C.height, !1));
        }
      }),
      (z._getContainerSize = m),
      (z._setContainerMeasure = function (p, C) {
        if (void 0 !== p) {
          var q = this.size;
          q.isBorderBox &&
            (p += C
              ? q.paddingLeft +
                q.paddingRight +
                q.borderLeftWidth +
                q.borderRightWidth
              : q.paddingBottom +
                q.paddingTop +
                q.borderTopWidth +
                q.borderBottomWidth),
            (p = Math.max(p, 0)),
            (this.element.style[C ? "width" : "height"] = p + "px");
        }
      }),
      (z._emitCompleteOnItems = function (p, C) {
        var q = this;
        function Y() {
          q.dispatchEvent(p + "Complete", null, [C]);
        }
        var G = C.length;
        if (C && G) {
          var a = 0;
          C.forEach(function (ut) {
            ut.once(p, K);
          });
        } else Y();
        function K() {
          ++a == G && Y();
        }
      }),
      (z.dispatchEvent = function (p, C, q) {
        var Y = C ? [C].concat(q) : q;
        if ((this.emitEvent(p, Y), f))
          if (((this.$element = this.$element || f(this.element)), C)) {
            var G = f.Event(C);
            (G.type = p), this.$element.trigger(G, q);
          } else this.$element.trigger(p, q);
      }),
      (z.ignore = function (p) {
        var C = this.getItem(p);
        C && (C.isIgnored = !0);
      }),
      (z.unignore = function (p) {
        var C = this.getItem(p);
        C && delete C.isIgnored;
      }),
      (z.stamp = function (p) {
        (p = this._find(p)) &&
          ((this.stamps = this.stamps.concat(p)), p.forEach(this.ignore, this));
      }),
      (z.unstamp = function (p) {
        (p = this._find(p)) &&
          p.forEach(function (C) {
            h.removeFrom(this.stamps, C), this.unignore(C);
          }, this);
      }),
      (z._find = function (p) {
        if (p)
          return (
            "string" == typeof p && (p = this.element.querySelectorAll(p)),
            h.makeArray(p)
          );
      }),
      (z._manageStamps = function () {
        !this.stamps ||
          !this.stamps.length ||
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (z._getBoundingRect = function () {
        var p = this.element.getBoundingClientRect(),
          C = this.size;
        this._boundingRect = {
          left: p.left + C.paddingLeft + C.borderLeftWidth,
          top: p.top + C.paddingTop + C.borderTopWidth,
          right: p.right - (C.paddingRight + C.borderRightWidth),
          bottom: p.bottom - (C.paddingBottom + C.borderBottomWidth),
        };
      }),
      (z._manageStamp = m),
      (z._getElementOffset = function (p) {
        var C = p.getBoundingClientRect(),
          q = this._boundingRect,
          Y = u(p);
        return {
          left: C.left - q.left - Y.marginLeft,
          top: C.top - q.top - Y.marginTop,
          right: q.right - C.right - Y.marginRight,
          bottom: q.bottom - C.bottom - Y.marginBottom,
        };
      }),
      (z.handleEvent = h.handleEvent),
      (z.bindResize = function () {
        L.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (z.unbindResize = function () {
        L.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (z.onresize = function () {
        this.resize();
      }),
      h.debounceMethod(S, "onresize", 100),
      (z.resize = function () {
        !this.isResizeBound || !this.needsResizeLayout() || this.layout();
      }),
      (z.needsResizeLayout = function () {
        var p = u(this.element);
        return this.size && p && p.innerWidth !== this.size.innerWidth;
      }),
      (z.addItems = function (p) {
        var C = this._itemize(p);
        return C.length && (this.items = this.items.concat(C)), C;
      }),
      (z.appended = function (p) {
        var C = this.addItems(p);
        C.length && (this.layoutItems(C, !0), this.reveal(C));
      }),
      (z.prepended = function (p) {
        var C = this._itemize(p);
        if (C.length) {
          var q = this.items.slice(0);
          (this.items = C.concat(q)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(C, !0),
            this.reveal(C),
            this.layoutItems(q);
        }
      }),
      (z.reveal = function (p) {
        if ((this._emitCompleteOnItems("reveal", p), p && p.length)) {
          var C = this.updateStagger();
          p.forEach(function (q, Y) {
            q.stagger(Y * C), q.reveal();
          });
        }
      }),
      (z.hide = function (p) {
        if ((this._emitCompleteOnItems("hide", p), p && p.length)) {
          var C = this.updateStagger();
          p.forEach(function (q, Y) {
            q.stagger(Y * C), q.hide();
          });
        }
      }),
      (z.revealItemElements = function (p) {
        var C = this.getItems(p);
        this.reveal(C);
      }),
      (z.hideItemElements = function (p) {
        var C = this.getItems(p);
        this.hide(C);
      }),
      (z.getItem = function (p) {
        for (var C = 0; C < this.items.length; C++) {
          var q = this.items[C];
          if (q.element == p) return q;
        }
      }),
      (z.getItems = function (p) {
        p = h.makeArray(p);
        var C = [];
        return (
          p.forEach(function (q) {
            var Y = this.getItem(q);
            Y && C.push(Y);
          }, this),
          C
        );
      }),
      (z.remove = function (p) {
        var C = this.getItems(p);
        this._emitCompleteOnItems("remove", C),
          C &&
            C.length &&
            C.forEach(function (q) {
              q.remove(), h.removeFrom(this.items, q);
            }, this);
      }),
      (z.destroy = function () {
        var p = this.element.style;
        (p.height = ""),
          (p.position = ""),
          (p.width = ""),
          this.items.forEach(function (q) {
            q.destroy();
          }),
          this.unbindResize(),
          delete x[this.element.outlayerGUID],
          delete this.element.outlayerGUID,
          f && f.removeData(this.element, this.constructor.namespace);
      }),
      (S.data = function (p) {
        var C = (p = h.getQueryElement(p)) && p.outlayerGUID;
        return C && x[C];
      }),
      (S.create = function (p, C) {
        var q = c(S);
        return (
          (q.defaults = h.extend({}, S.defaults)),
          h.extend(q.defaults, C),
          (q.compatOptions = h.extend({}, S.compatOptions)),
          (q.namespace = p),
          (q.data = S.data),
          (q.Item = c(n)),
          h.htmlInit(q, p),
          f && f.bridget && f.bridget(p, q),
          q
        );
      });
    var R = { ms: 1, s: 1e3 };
    return (S.Item = n), S;
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], L)
      : "object" == typeof module && module.exports
      ? (module.exports = L(require("outlayer")))
      : ((s.Isotope = s.Isotope || {}), (s.Isotope.Item = L(s.Outlayer)));
  })(window, function (L) {
    "use strict";
    function A() {
      L.Item.apply(this, arguments);
    }
    var u = (A.prototype = Object.create(L.Item.prototype)),
      h = u._create;
    (u._create = function () {
      (this.id = this.layout.itemGUID++), h.call(this), (this.sortData = {});
    }),
      (u.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var o = this.layout.options.getSortData,
            f = this.layout._sorters;
          for (var m in o) this.sortData[m] = (0, f[m])(this.element, this);
        }
      });
    var n = u.destroy;
    return (
      (u.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      A
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          L
        )
      : "object" == typeof module && module.exports
      ? (module.exports = L(require("get-size"), require("outlayer")))
      : ((s.Isotope = s.Isotope || {}),
        (s.Isotope.LayoutMode = L(s.getSize, s.Outlayer)));
  })(window, function (L, A) {
    "use strict";
    function u(o) {
      (this.isotope = o),
        o &&
          ((this.options = o.options[this.namespace]),
          (this.element = o.element),
          (this.items = o.filteredItems),
          (this.size = o.size));
    }
    var h = u.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (o) {
        h[o] = function () {
          return A.prototype[o].apply(this.isotope, arguments);
        };
      }),
      (h.needsVerticalResizeLayout = function () {
        var o = L(this.isotope.element);
        return (
          this.isotope.size &&
          o &&
          o.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (h._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (h.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (h.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (h.getSegmentSize = function (o, f) {
        var m = o + f,
          b = "outer" + f;
        if ((this._getMeasurement(m, b), !this[m])) {
          var x = this.getFirstItemSize();
          this[m] = (x && x[b]) || this.isotope.size["inner" + f];
        }
      }),
      (h.getFirstItemSize = function () {
        var o = this.isotope.filteredItems[0];
        return o && o.element && L(o.element);
      }),
      (h.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (h.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (u.modes = {}),
      (u.create = function (o, f) {
        function m() {
          u.apply(this, arguments);
        }
        return (
          ((m.prototype = Object.create(h)).constructor = m),
          f && (m.options = f),
          (m.prototype.namespace = o),
          (u.modes[o] = m),
          m
        );
      }),
      u
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          L
        )
      : "object" == typeof module && module.exports
      ? (module.exports = L(require("outlayer"), require("get-size")))
      : (s.Masonry = L(s.Outlayer, s.getSize));
  })(window, function (L, A) {
    var u = L.create("masonry");
    u.compatOptions.fitWidth = "isFitWidth";
    var h = u.prototype;
    return (
      (h._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var n = 0; n < this.cols; n++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (h.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var n = this.items[0],
            o = n && n.element;
          this.columnWidth = (o && A(o).outerWidth) || this.containerWidth;
        }
        var f = (this.columnWidth += this.gutter),
          m = this.containerWidth + this.gutter,
          b = m / f,
          x = f - (m % f);
        (b = Math[x && x < 1 ? "round" : "floor"](b)),
          (this.cols = Math.max(b, 1));
      }),
      (h.getContainerWidth = function () {
        var n = this._getOption("fitWidth"),
          f = A(n ? this.element.parentNode : this.element);
        this.containerWidth = f && f.innerWidth;
      }),
      (h._getItemLayoutPosition = function (n) {
        n.getSize();
        var o = n.size.outerWidth % this.columnWidth,
          m = Math[o && o < 1 ? "round" : "ceil"](
            n.size.outerWidth / this.columnWidth
          );
        m = Math.min(m, this.cols);
        for (
          var x = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](m, n),
            S = { x: this.columnWidth * x.col, y: x.y },
            z = x.y + n.size.outerHeight,
            c = m + x.col,
            R = x.col;
          R < c;
          R++
        )
          this.colYs[R] = z;
        return S;
      }),
      (h._getTopColPosition = function (n) {
        var o = this._getTopColGroup(n),
          f = Math.min.apply(Math, o);
        return { col: o.indexOf(f), y: f };
      }),
      (h._getTopColGroup = function (n) {
        if (n < 2) return this.colYs;
        for (var o = [], f = this.cols + 1 - n, m = 0; m < f; m++)
          o[m] = this._getColGroupY(m, n);
        return o;
      }),
      (h._getColGroupY = function (n, o) {
        if (o < 2) return this.colYs[n];
        var f = this.colYs.slice(n, n + o);
        return Math.max.apply(Math, f);
      }),
      (h._getHorizontalColPosition = function (n, o) {
        var f = this.horizontalColIndex % this.cols;
        return (
          (f = n > 1 && f + n > this.cols ? 0 : f),
          (this.horizontalColIndex =
            o.size.outerWidth && o.size.outerHeight
              ? f + n
              : this.horizontalColIndex),
          { col: f, y: this._getColGroupY(f, n) }
        );
      }),
      (h._manageStamp = function (n) {
        var o = A(n),
          f = this._getElementOffset(n),
          b = this._getOption("originLeft") ? f.left : f.right,
          x = b + o.outerWidth,
          S = Math.floor(b / this.columnWidth);
        S = Math.max(0, S);
        var z = Math.floor(x / this.columnWidth);
        (z -= x % this.columnWidth ? 0 : 1), (z = Math.min(this.cols - 1, z));
        for (
          var R =
              (this._getOption("originTop") ? f.top : f.bottom) + o.outerHeight,
            _ = S;
          _ <= z;
          _++
        )
          this.colYs[_] = Math.max(R, this.colYs[_]);
      }),
      (h._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var n = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (n.width = this._getContainerFitWidth()),
          n
        );
      }),
      (h._getContainerFitWidth = function () {
        for (var n = 0, o = this.cols; --o && 0 === this.colYs[o]; ) n++;
        return (this.cols - n) * this.columnWidth - this.gutter;
      }),
      (h.needsResizeLayout = function () {
        var n = this.containerWidth;
        return this.getContainerWidth(), n != this.containerWidth;
      }),
      u
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          L
        )
      : "object" == typeof module && module.exports
      ? (module.exports = L(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : L(s.Isotope.LayoutMode, s.Masonry);
  })(window, function (L, A) {
    "use strict";
    var u = L.create("masonry"),
      h = u.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var o in A.prototype) n[o] || (h[o] = A.prototype[o]);
    var f = h.measureColumns;
    h.measureColumns = function () {
      (this.items = this.isotope.filteredItems), f.call(this);
    };
    var m = h._getOption;
    return (
      (h._getOption = function (b) {
        return "fitWidth" == b
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : m.apply(this.isotope, arguments);
      }),
      u
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], L)
      : "object" == typeof exports
      ? (module.exports = L(require("../layout-mode")))
      : L(s.Isotope.LayoutMode);
  })(window, function (L) {
    "use strict";
    var A = L.create("fitRows"),
      u = A.prototype;
    return (
      (u._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (u._getItemLayoutPosition = function (h) {
        h.getSize();
        var n = h.size.outerWidth + this.gutter;
        0 !== this.x &&
          n + this.x > this.isotope.size.innerWidth + this.gutter &&
          ((this.x = 0), (this.y = this.maxY));
        var f = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + h.size.outerHeight)),
          (this.x += n),
          f
        );
      }),
      (u._getContainerSize = function () {
        return { height: this.maxY };
      }),
      A
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], L)
      : "object" == typeof module && module.exports
      ? (module.exports = L(require("../layout-mode")))
      : L(s.Isotope.LayoutMode);
  })(window, function (L) {
    "use strict";
    var A = L.create("vertical", { horizontalAlignment: 0 }),
      u = A.prototype;
    return (
      (u._resetLayout = function () {
        this.y = 0;
      }),
      (u._getItemLayoutPosition = function (h) {
        h.getSize();
        var n =
            (this.isotope.size.innerWidth - h.size.outerWidth) *
            this.options.horizontalAlignment,
          o = this.y;
        return (this.y += h.size.outerHeight), { x: n, y: o };
      }),
      (u._getContainerSize = function () {
        return { height: this.y };
      }),
      A
    );
  }),
  (function (s, L) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (A, u, h, n, o, f) {
            return L(s, A, 0, h, n, o, f);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = L(
          s,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (s.Isotope = L(
          s,
          s.Outlayer,
          0,
          s.matchesSelector,
          s.fizzyUIUtils,
          s.Isotope.Item,
          s.Isotope.LayoutMode
        ));
  })(window, function (L, A, u, h, n, o, f) {
    var m = L.jQuery,
      b = String.prototype.trim
        ? function (_) {
            return _.trim();
          }
        : function (_) {
            return _.replace(/^\s+|\s+$/g, "");
          },
      x = A.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (x.Item = o), (x.LayoutMode = f);
    var S = x.prototype;
    (S._create = function () {
      for (var _ in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      A.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      f.modes))
        this._initLayoutMode(_);
    }),
      (S.reloadItems = function () {
        (this.itemGUID = 0), A.prototype.reloadItems.call(this);
      }),
      (S._itemize = function () {
        for (
          var _ = A.prototype._itemize.apply(this, arguments), p = 0;
          p < _.length;
          p++
        )
          _[p].id = this.itemGUID++;
        return this._updateItemsSortData(_), _;
      }),
      (S._initLayoutMode = function (_) {
        var p = f.modes[_],
          C = this.options[_] || {};
        (this.options[_] = p.options ? n.extend(p.options, C) : C),
          (this.modes[_] = new p(this));
      }),
      (S.layout = function () {
        this._isLayoutInited || !this._getOption("initLayout")
          ? this._layout()
          : this.arrange();
      }),
      (S._layout = function () {
        var _ = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, _),
          (this._isLayoutInited = !0);
      }),
      (S.arrange = function (_) {
        this.option(_), this._getIsInstant();
        var p = this._filter(this.items);
        (this.filteredItems = p.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [p])
            : this._hideReveal(p),
          this._sort(),
          this._layout();
      }),
      (S._init = S.arrange),
      (S._hideReveal = function (_) {
        this.reveal(_.needReveal), this.hide(_.needHide);
      }),
      (S._getIsInstant = function () {
        var _ = this._getOption("layoutInstant"),
          p = void 0 !== _ ? _ : !this._isLayoutInited;
        return (this._isInstant = p), p;
      }),
      (S._bindArrangeComplete = function () {
        var _,
          p,
          C,
          q = this;
        function Y() {
          _ &&
            p &&
            C &&
            q.dispatchEvent("arrangeComplete", null, [q.filteredItems]);
        }
        this.once("layoutComplete", function () {
          (_ = !0), Y();
        }),
          this.once("hideComplete", function () {
            (p = !0), Y();
          }),
          this.once("revealComplete", function () {
            (C = !0), Y();
          });
      }),
      (S._filter = function (_) {
        for (
          var p = this.options.filter,
            C = [],
            q = [],
            Y = [],
            G = this._getFilterTest((p = p || "*")),
            a = 0;
          a < _.length;
          a++
        ) {
          var K = _[a];
          if (!K.isIgnored) {
            var ut = G(K);
            ut && C.push(K),
              ut && K.isHidden ? q.push(K) : !ut && !K.isHidden && Y.push(K);
          }
        }
        return { matches: C, needReveal: q, needHide: Y };
      }),
      (S._getFilterTest = function (_) {
        return m && this.options.isJQueryFiltering
          ? function (p) {
              return m(p.element).is(_);
            }
          : "function" == typeof _
          ? function (p) {
              return _(p.element);
            }
          : function (p) {
              return h(p.element, _);
            };
      }),
      (S.updateSortData = function (_) {
        var p;
        _ ? ((_ = n.makeArray(_)), (p = this.getItems(_))) : (p = this.items),
          this._getSorters(),
          this._updateItemsSortData(p);
      }),
      (S._getSorters = function () {
        var _ = this.options.getSortData;
        for (var p in _) this._sorters[p] = z(_[p]);
      }),
      (S._updateItemsSortData = function (_) {
        for (var p = _ && _.length, C = 0; p && C < p; C++)
          _[C].updateSortData();
      });
    var z = function _(C) {
      if ("string" != typeof C) return C;
      var q = b(C).split(" "),
        Y = q[0],
        G = Y.match(/^\[(.+)\]$/),
        K = (function p(C, q) {
          return C
            ? function (G) {
                return G.getAttribute(C);
              }
            : function (G) {
                var a = G.querySelector(q);
                return a && a.textContent;
              };
        })(G && G[1], Y),
        ut = x.sortDataParsers[q[1]];
      return ut
        ? function (nt) {
            return nt && ut(K(nt));
          }
        : function (nt) {
            return nt && K(nt);
          };
    };
    (x.sortDataParsers = {
      parseInt: function (_) {
        return parseInt(_, 10);
      },
      parseFloat: function (_) {
        return parseFloat(_);
      },
    }),
      (S._sort = function () {
        if (this.options.sortBy) {
          var _ = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(_) ||
            (this.sortHistory = _.concat(this.sortHistory));
          var p = (function c(_, p) {
            return function (q, Y) {
              for (var G = 0; G < _.length; G++) {
                var a = _[G],
                  K = q.sortData[a],
                  ut = Y.sortData[a];
                if (K > ut || K < ut)
                  return (
                    (K > ut ? 1 : -1) * ((void 0 !== p[a] ? p[a] : p) ? 1 : -1)
                  );
              }
              return 0;
            };
          })(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(p);
        }
      }),
      (S._getIsSameSortBy = function (_) {
        for (var p = 0; p < _.length; p++)
          if (_[p] != this.sortHistory[p]) return !1;
        return !0;
      }),
      (S._mode = function () {
        var _ = this.options.layoutMode,
          p = this.modes[_];
        if (!p) throw new Error("No layout mode: " + _);
        return (p.options = this.options[_]), p;
      }),
      (S._resetLayout = function () {
        A.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (S._getItemLayoutPosition = function (_) {
        return this._mode()._getItemLayoutPosition(_);
      }),
      (S._manageStamp = function (_) {
        this._mode()._manageStamp(_);
      }),
      (S._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (S.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (S.appended = function (_) {
        var p = this.addItems(_);
        if (p.length) {
          var C = this._filterRevealAdded(p);
          this.filteredItems = this.filteredItems.concat(C);
        }
      }),
      (S.prepended = function (_) {
        var p = this._itemize(_);
        if (p.length) {
          this._resetLayout(), this._manageStamps();
          var C = this._filterRevealAdded(p);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = C.concat(this.filteredItems)),
            (this.items = p.concat(this.items));
        }
      }),
      (S._filterRevealAdded = function (_) {
        var p = this._filter(_);
        return (
          this.hide(p.needHide),
          this.reveal(p.matches),
          this.layoutItems(p.matches, !0),
          p.matches
        );
      }),
      (S.insert = function (_) {
        var p = this.addItems(_);
        if (p.length) {
          var C,
            Y = p.length;
          for (C = 0; C < Y; C++) this.element.appendChild(p[C].element);
          var G = this._filter(p).matches;
          for (C = 0; C < Y; C++) p[C].isLayoutInstant = !0;
          for (this.arrange(), C = 0; C < Y; C++) delete p[C].isLayoutInstant;
          this.reveal(G);
        }
      });
    var R = S.remove;
    return (
      (S.remove = function (_) {
        _ = n.makeArray(_);
        var p = this.getItems(_);
        R.call(this, _);
        for (var C = p && p.length, q = 0; C && q < C; q++)
          n.removeFrom(this.filteredItems, p[q]);
      }),
      (S.shuffle = function () {
        for (var _ = 0; _ < this.items.length; _++)
          this.items[_].sortData.random = Math.random();
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (S._noTransition = function (_, p) {
        var C = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var q = _.apply(this, p);
        return (this.options.transitionDuration = C), q;
      }),
      (S.getFilteredItemElements = function () {
        return this.filteredItems.map(function (_) {
          return _.element;
        });
      }),
      x
    );
  }),
  (function (s) {
    s.fn.extend({
      slimScroll: function (L) {
        var u = s.extend(
          {
            width: "auto",
            height: "250px",
            size: "7px",
            color: "#000",
            position: "right",
            distance: "1px",
            start: "top",
            opacity: 0.4,
            alwaysVisible: !1,
            disableFadeOut: !1,
            railVisible: !1,
            railColor: "#333",
            railOpacity: 0.2,
            railDraggable: !0,
            railClass: "slimScrollRail",
            barClass: "slimScrollBar",
            wrapperClass: "slimScrollDiv",
            allowPageScroll: !1,
            wheelStep: 20,
            touchScrollStep: 200,
            borderRadius: "7px",
            railBorderRadius: "7px",
          },
          L
        );
        return (
          this.each(function () {
            var h,
              n,
              o,
              f,
              m,
              b,
              x,
              S,
              z = "<div></div>",
              c = 30,
              R = !1,
              _ = s(this);
            if (_.parent().hasClass(u.wrapperClass)) {
              var p = _.scrollTop();
              if (
                ((a = _.siblings("." + u.barClass)),
                (G = _.siblings("." + u.railClass)),
                Pt(),
                s.isPlainObject(L))
              ) {
                if ("height" in L && "auto" == L.height) {
                  _.parent().css("height", "auto"), _.css("height", "auto");
                  var C = _.parent().parent().height();
                  _.parent().css("height", C), _.css("height", C);
                } else if ("height" in L) {
                  var q = L.height;
                  _.parent().css("height", q), _.css("height", q);
                }
                if ("scrollTo" in L) p = parseInt(u.scrollTo);
                else if ("scrollBy" in L) p += parseInt(u.scrollBy);
                else if ("destroy" in L)
                  return a.remove(), G.remove(), void _.unwrap();
                nt(p, !1, !0);
              }
            } else if (!s.isPlainObject(L) || !("destroy" in L)) {
              u.height = "auto" == u.height ? _.parent().height() : u.height;
              var Y = s(z)
                .addClass(u.wrapperClass)
                .css({
                  position: "relative",
                  overflow: "hidden",
                  width: u.width,
                  height: u.height,
                });
              _.css({ overflow: "hidden", width: u.width, height: u.height });
              var G = s(z)
                  .addClass(u.railClass)
                  .css({
                    width: u.size,
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    display:
                      u.alwaysVisible && u.railVisible ? "block" : "none",
                    "border-radius": u.railBorderRadius,
                    background: u.railColor,
                    opacity: u.railOpacity,
                    zIndex: 90,
                  }),
                a = s(z)
                  .addClass(u.barClass)
                  .css({
                    background: u.color,
                    width: u.size,
                    position: "absolute",
                    top: 0,
                    opacity: u.opacity,
                    display: u.alwaysVisible ? "block" : "none",
                    "border-radius": u.borderRadius,
                    BorderRadius: u.borderRadius,
                    MozBorderRadius: u.borderRadius,
                    WebkitBorderRadius: u.borderRadius,
                    zIndex: 99,
                  }),
                K =
                  "right" == u.position
                    ? { right: u.distance }
                    : { left: u.distance };
              G.css(K),
                a.css(K),
                _.wrap(Y),
                _.parent().append(a),
                _.parent().append(G),
                u.railDraggable &&
                  a
                    .bind("mousedown", function (ht) {
                      var mt = s(document);
                      return (
                        (o = !0),
                        (t = parseFloat(a.css("top"))),
                        (pageY = ht.pageY),
                        mt.bind("mousemove.slimscroll", function (Ht) {
                          (currTop = t + Ht.pageY - pageY),
                            a.css("top", currTop),
                            nt(0, a.position().top, !1);
                        }),
                        mt.bind("mouseup.slimscroll", function (Ht) {
                          (o = !1), Nt(), mt.unbind(".slimscroll");
                        }),
                        !1
                      );
                    })
                    .bind("selectstart.slimscroll", function (ht) {
                      return ht.stopPropagation(), ht.preventDefault(), !1;
                    }),
                G.hover(
                  function () {
                    Tt();
                  },
                  function () {
                    Nt();
                  }
                ),
                a.hover(
                  function () {
                    n = !0;
                  },
                  function () {
                    n = !1;
                  }
                ),
                _.hover(
                  function () {
                    (h = !0), Tt(), Nt();
                  },
                  function () {
                    (h = !1), Nt();
                  }
                ),
                _.bind("touchstart", function (ht, mt) {
                  ht.originalEvent.touches.length &&
                    (m = ht.originalEvent.touches[0].pageY);
                }),
                _.bind("touchmove", function (ht) {
                  R || ht.originalEvent.preventDefault(),
                    ht.originalEvent.touches.length &&
                      (nt(
                        (m - ht.originalEvent.touches[0].pageY) /
                          u.touchScrollStep,
                        !0
                      ),
                      (m = ht.originalEvent.touches[0].pageY));
                }),
                Pt(),
                "bottom" === u.start
                  ? (a.css({ top: _.outerHeight() - a.outerHeight() }),
                    nt(0, !0))
                  : "top" !== u.start &&
                    (nt(s(u.start).position().top, null, !0),
                    u.alwaysVisible || a.hide()),
                (function Mt(ht) {
                  window.addEventListener
                    ? (ht.addEventListener("DOMMouseScroll", ut, !1),
                      ht.addEventListener("mousewheel", ut, !1))
                    : document.attachEvent("onmousewheel", ut);
                })(this);
            }
            function ut(mt) {
              if (h) {
                var Ht = 0;
                (mt = mt || window.event).wheelDelta &&
                  (Ht = -mt.wheelDelta / 120),
                  mt.detail && (Ht = mt.detail / 3),
                  s(mt.target || mt.srcTarget || mt.srcElement)
                    .closest("." + u.wrapperClass)
                    .is(_.parent()) && nt(Ht, !0),
                  mt.preventDefault && !R && mt.preventDefault(),
                  R || (mt.returnValue = !1);
              }
            }
            function nt(ht, mt, Ht) {
              R = !1;
              var kt = ht,
                he = _.outerHeight() - a.outerHeight();
              if (
                (mt &&
                  ((kt =
                    parseInt(a.css("top")) +
                    ((ht * parseInt(u.wheelStep)) / 100) * a.outerHeight()),
                  (kt = Math.min(Math.max(kt, 0), he)),
                  (kt = ht > 0 ? Math.ceil(kt) : Math.floor(kt)),
                  a.css({ top: kt + "px" })),
                (kt =
                  (x =
                    parseInt(a.css("top")) /
                    (_.outerHeight() - a.outerHeight())) *
                  (_[0].scrollHeight - _.outerHeight())),
                Ht)
              ) {
                var te = ((kt = ht) / _[0].scrollHeight) * _.outerHeight();
                (te = Math.min(Math.max(te, 0), he)), a.css({ top: te + "px" });
              }
              _.scrollTop(kt), _.trigger("slimscrolling", ~~kt), Tt(), Nt();
            }
            function Pt() {
              (b = Math.max(
                (_.outerHeight() / _[0].scrollHeight) * _.outerHeight(),
                c
              )),
                a.css({ height: b + "px" });
              var ht = b == _.outerHeight() ? "none" : "block";
              a.css({ display: ht });
            }
            function Tt() {
              Pt(),
                clearTimeout(f),
                x == ~~x
                  ? ((R = u.allowPageScroll),
                    S != x && _.trigger("slimscroll", ~~x ? "bottom" : "top"))
                  : (R = !1),
                (S = x),
                b >= _.outerHeight()
                  ? (R = !0)
                  : (a.stop(!0, !0).fadeIn("fast"),
                    u.railVisible && G.stop(!0, !0).fadeIn("fast"));
            }
            function Nt() {
              u.alwaysVisible ||
                (f = setTimeout(function () {
                  (!u.disableFadeOut || !h) &&
                    !n &&
                    !o &&
                    (a.fadeOut("slow"), G.fadeOut("slow"));
                }, 1e3));
            }
          }),
          this
        );
      },
    }),
      s.fn.extend({ slimscroll: s.fn.slimScroll });
  })(jQuery),
  (function (s, L, A, u) {
    function h(n, o) {
      (this.settings = null),
        (this.options = s.extend({}, h.Defaults, o)),
        (this.$element = s(n)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        s.each(
          ["onResize", "onThrottledResize"],
          s.proxy(function (f, m) {
            this._handlers[m] = s.proxy(this[m], this);
          }, this)
        ),
        s.each(
          h.Plugins,
          s.proxy(function (f, m) {
            this._plugins[f.charAt(0).toLowerCase() + f.slice(1)] = new m(this);
          }, this)
        ),
        s.each(
          h.Workers,
          s.proxy(function (f, m) {
            this._pipe.push({ filter: m.filter, run: s.proxy(m.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (h.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: L,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (h.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (h.Type = { Event: "event", State: "state" }),
      (h.Plugins = {}),
      (h.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            n.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            var o = this.settings.margin || "",
              m = this.settings.rtl,
              b = {
                width: "auto",
                "margin-left": m ? o : "",
                "margin-right": m ? "" : o,
              };
            !!this.settings.autoWidth && this.$stage.children().css(b),
              (n.css = b);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            var o =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              f = null,
              m = this._items.length,
              b = !this.settings.autoWidth,
              x = [];
            for (n.items = { merge: !1, width: o }; m--; )
              (f = this._mergers[m]),
                (f =
                  (this.settings.mergeFit &&
                    Math.min(f, this.settings.items)) ||
                  f),
                (n.items.merge = f > 1 || n.items.merge),
                (x[m] = b ? o * f : this._items[m].width());
            this._widths = x;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var n = [],
              o = this._items,
              f = this.settings,
              m = Math.max(2 * f.items, 4),
              b = 2 * Math.ceil(o.length / 2),
              x = f.loop && o.length ? (f.rewind ? m : Math.max(m, b)) : 0,
              S = "",
              z = "";
            for (x /= 2; x > 0; )
              n.push(this.normalize(n.length / 2, !0)),
                (S += o[n[n.length - 1]][0].outerHTML),
                n.push(this.normalize(o.length - 1 - (n.length - 1) / 2, !0)),
                (z = o[n[n.length - 1]][0].outerHTML + z),
                (x -= 1);
            (this._clones = n),
              s(S).addClass("cloned").appendTo(this.$stage),
              s(z).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var n = this.settings.rtl ? 1 : -1,
                o = this._clones.length + this._items.length,
                f = -1,
                m = 0,
                b = 0,
                x = [];
              ++f < o;

            )
              (m = x[f - 1] || 0),
                (b = this._widths[this.relative(f)] + this.settings.margin),
                x.push(m + b * n);
            this._coordinates = x;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var n = this.settings.stagePadding,
              o = this._coordinates,
              f = {
                width: Math.ceil(Math.abs(o[o.length - 1])) + 2 * n,
                "padding-left": n || "",
                "padding-right": n || "",
              };
            this.$stage.css(f);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            var o = this._coordinates.length,
              f = !this.settings.autoWidth,
              m = this.$stage.children();
            if (f && n.items.merge)
              for (; o--; )
                (n.css.width = this._widths[this.relative(o)]),
                  m.eq(o).css(n.css);
            else f && ((n.css.width = n.items.width), m.css(n.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (n) {
            (n.current = n.current
              ? this.$stage.children().index(n.current)
              : 0),
              (n.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), n.current)
              )),
              this.reset(n.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var b,
              x,
              z,
              c,
              n = this.settings.rtl ? 1 : -1,
              o = 2 * this.settings.stagePadding,
              f = this.coordinates(this.current()) + o,
              m = f + this.width() * n,
              S = [];
            for (z = 0, c = this._coordinates.length; z < c; z++)
              (b = this._coordinates[z - 1] || 0),
                (x = Math.abs(this._coordinates[z]) + o * n),
                ((this.op(b, "<=", f) && this.op(b, ">", m)) ||
                  (this.op(x, "<", f) && this.op(x, ">", m))) &&
                  S.push(z);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + S.join("), :eq(") + ")")
                .addClass("active"),
              this.$stage.children(".center").removeClass("center"),
              this.settings.center &&
                this.$stage.children().eq(this.current()).addClass("center");
          },
        },
      ]),
      (h.prototype.initializeStage = function () {
        (this.$stage = this.$element.find("." + this.settings.stageClass)),
          !this.$stage.length &&
            (this.$element.addClass(this.options.loadingClass),
            (this.$stage = s("<" + this.settings.stageElement + ">", {
              class: this.settings.stageClass,
            }).wrap(s("<div/>", { class: this.settings.stageOuterClass }))),
            this.$element.append(this.$stage.parent()));
      }),
      (h.prototype.initializeItems = function () {
        var n = this.$element.find(".owl-item");
        if (n.length)
          return (
            (this._items = n.get().map(function (o) {
              return s(o);
            })),
            (this._mergers = this._items.map(function () {
              return 1;
            })),
            void this.refresh()
          );
        this.replace(this.$element.children().not(this.$stage.parent())),
          this.isVisible() ? this.refresh() : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
      }),
      (h.prototype.initialize = function () {
        var n, f;
        this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth &&
            !this.is("pre-loading") &&
            ((n = this.$element.find("img")),
            (f = this.$element
              .children(
                this.settings.nestedItemSelector
                  ? "." + this.settings.nestedItemSelector
                  : u
              )
              .width()),
            n.length && f <= 0 && this.preloadAutoWidthImages(n)),
          this.initializeStage(),
          this.initializeItems(),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (h.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible");
      }),
      (h.prototype.setup = function () {
        var n = this.viewport(),
          o = this.options.responsive,
          f = -1,
          m = null;
        o
          ? (s.each(o, function (b) {
              b <= n && b > f && (f = Number(b));
            }),
            "function" ==
              typeof (m = s.extend({}, this.options, o[f])).stagePadding &&
              (m.stagePadding = m.stagePadding()),
            delete m.responsive,
            m.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + f
                  )
              ))
          : (m = s.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: m } }),
          (this._breakpoint = f),
          (this.settings = m),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (h.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (h.prototype.prepare = function (n) {
        var o = this.trigger("prepare", { content: n });
        return (
          o.data ||
            (o.data = s("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(n)),
          this.trigger("prepared", { content: o.data }),
          o.data
        );
      }),
      (h.prototype.update = function () {
        for (
          var n = 0,
            o = this._pipe.length,
            f = s.proxy(function (b) {
              return this[b];
            }, this._invalidated),
            m = {};
          n < o;

        )
          (this._invalidated.all ||
            s.grep(this._pipe[n].filter, f).length > 0) &&
            this._pipe[n].run(m),
            n++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (h.prototype.width = function (n) {
        switch ((n = n || h.Width.Default)) {
          case h.Width.Inner:
          case h.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (h.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (h.prototype.onThrottledResize = function () {
        L.clearTimeout(this.resizeTimer),
          (this.resizeTimer = L.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (h.prototype.onResize = function () {
        return (
          !(
            !this._items.length ||
            this._width === this.$element.width() ||
            !this.isVisible()
          ) &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (h.prototype.registerEventHandlers = function () {
        s.support.transition &&
          this.$stage.on(
            s.support.transition.end + ".owl.core",
            s.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(L, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              s.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              s.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              s.proxy(this.onDragEnd, this)
            ));
      }),
      (h.prototype.onDragStart = function (n) {
        var o = null;
        3 !== n.which &&
          (s.support.transform
            ? (o = {
                x: (o = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === o.length ? 12 : 4],
                y: o[16 === o.length ? 13 : 5],
              })
            : ((o = this.$stage.position()),
              (o = {
                x: this.settings.rtl
                  ? o.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : o.left,
                y: o.top,
              })),
          this.is("animating") &&
            (s.support.transform ? this.animate(o.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === n.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = s(n.target)),
          (this._drag.stage.start = o),
          (this._drag.stage.current = o),
          (this._drag.pointer = this.pointer(n)),
          s(A).on(
            "mouseup.owl.core touchend.owl.core",
            s.proxy(this.onDragEnd, this)
          ),
          s(A).one(
            "mousemove.owl.core touchmove.owl.core",
            s.proxy(function (f) {
              var m = this.difference(this._drag.pointer, this.pointer(f));
              s(A).on(
                "mousemove.owl.core touchmove.owl.core",
                s.proxy(this.onDragMove, this)
              ),
                !(Math.abs(m.x) < Math.abs(m.y) && this.is("valid")) &&
                  (f.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (h.prototype.onDragMove = function (n) {
        var o = null,
          f = null,
          m = null,
          b = this.difference(this._drag.pointer, this.pointer(n)),
          x = this.difference(this._drag.stage.start, b);
        this.is("dragging") &&
          (n.preventDefault(),
          this.settings.loop
            ? ((o = this.coordinates(this.minimum())),
              (f = this.coordinates(this.maximum() + 1) - o),
              (x.x = ((((x.x - o) % f) + f) % f) + o))
            : ((o = this.coordinates(
                this.settings.rtl ? this.maximum() : this.minimum()
              )),
              (f = this.coordinates(
                this.settings.rtl ? this.minimum() : this.maximum()
              )),
              (m = this.settings.pullDrag ? (-1 * b.x) / 5 : 0),
              (x.x = Math.max(Math.min(x.x, o + m), f + m))),
          (this._drag.stage.current = x),
          this.animate(x.x));
      }),
      (h.prototype.onDragEnd = function (n) {
        var o = this.difference(this._drag.pointer, this.pointer(n)),
          f = this._drag.stage.current,
          m = (o.x > 0) ^ this.settings.rtl ? "left" : "right";
        s(A).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== o.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(f.x, 0 !== o.x ? m : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = m),
            (Math.abs(o.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (h.prototype.closest = function (n, o) {
        var f = -1,
          b = this.width(),
          x = this.coordinates();
        return (
          this.settings.freeDrag ||
            s.each(
              x,
              s.proxy(function (S, z) {
                return (
                  "left" === o && n > z - 30 && n < z + 30
                    ? (f = S)
                    : "right" === o && n > z - b - 30 && n < z - b + 30
                    ? (f = S + 1)
                    : this.op(n, "<", z) &&
                      this.op(n, ">", x[S + 1] !== u ? x[S + 1] : z - b) &&
                      (f = "left" === o ? S + 1 : S),
                  -1 === f
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(n, ">", x[this.minimum()])
              ? (f = n = this.minimum())
              : this.op(n, "<", x[this.maximum()]) && (f = n = this.maximum())),
          f
        );
      }),
      (h.prototype.animate = function (n) {
        var o = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          o && (this.enter("animating"), this.trigger("translate")),
          s.support.transform3d && s.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + n + "px,0px,0px)",
                transition:
                  this.speed() / 1e3 +
                  "s" +
                  (this.settings.slideTransition
                    ? " " + this.settings.slideTransition
                    : ""),
              })
            : o
            ? this.$stage.animate(
                { left: n + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                s.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: n + "px" });
      }),
      (h.prototype.is = function (n) {
        return this._states.current[n] && this._states.current[n] > 0;
      }),
      (h.prototype.current = function (n) {
        if (n === u) return this._current;
        if (0 === this._items.length) return u;
        if (((n = this.normalize(n)), this._current !== n)) {
          var o = this.trigger("change", {
            property: { name: "position", value: n },
          });
          o.data !== u && (n = this.normalize(o.data)),
            (this._current = n),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            });
        }
        return this._current;
      }),
      (h.prototype.invalidate = function (n) {
        return (
          "string" === s.type(n) &&
            ((this._invalidated[n] = !0),
            this.is("valid") && this.leave("valid")),
          s.map(this._invalidated, function (o, f) {
            return f;
          })
        );
      }),
      (h.prototype.reset = function (n) {
        (n = this.normalize(n)) !== u &&
          ((this._speed = 0),
          (this._current = n),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(n)),
          this.release(["translate", "translated"]));
      }),
      (h.prototype.normalize = function (n, o) {
        var f = this._items.length,
          m = o ? 0 : this._clones.length;
        return (
          !this.isNumeric(n) || f < 1
            ? (n = u)
            : (n < 0 || n >= f + m) &&
              (n = ((((n - m / 2) % f) + f) % f) + m / 2),
          n
        );
      }),
      (h.prototype.relative = function (n) {
        return this.normalize((n -= this._clones.length / 2), !0);
      }),
      (h.prototype.maximum = function (n) {
        var m,
          b,
          x,
          o = this.settings,
          f = this._coordinates.length;
        if (o.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
          if ((m = this._items.length))
            for (
              b = this._items[--m].width(), x = this.$element.width();
              m-- &&
              !((b += this._items[m].width() + this.settings.margin) > x);

            );
          f = m + 1;
        } else
          f = o.center ? this._items.length - 1 : this._items.length - o.items;
        return n && (f -= this._clones.length / 2), Math.max(f, 0);
      }),
      (h.prototype.minimum = function (n) {
        return n ? 0 : this._clones.length / 2;
      }),
      (h.prototype.items = function (n) {
        return n === u
          ? this._items.slice()
          : ((n = this.normalize(n, !0)), this._items[n]);
      }),
      (h.prototype.mergers = function (n) {
        return n === u
          ? this._mergers.slice()
          : ((n = this.normalize(n, !0)), this._mergers[n]);
      }),
      (h.prototype.clones = function (n) {
        var o = this._clones.length / 2,
          f = o + this._items.length,
          m = function (b) {
            return b % 2 == 0 ? f + b / 2 : o - (b + 1) / 2;
          };
        return s.map(
          this._clones,
          n === u
            ? function (b, x) {
                return m(x);
              }
            : function (b, x) {
                return b === n ? m(x) : null;
              }
        );
      }),
      (h.prototype.speed = function (n) {
        return n !== u && (this._speed = n), this._speed;
      }),
      (h.prototype.coordinates = function (n) {
        var m,
          o = 1,
          f = n - 1;
        return n === u
          ? s.map(
              this._coordinates,
              s.proxy(function (b, x) {
                return this.coordinates(x);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((o = -1), (f = n + 1)),
                (m = this._coordinates[n]),
                (m +=
                  ((this.width() - m + (this._coordinates[f] || 0)) / 2) * o))
              : (m = this._coordinates[f] || 0),
            (m = Math.ceil(m)));
      }),
      (h.prototype.duration = function (n, o, f) {
        return 0 === f
          ? 0
          : Math.min(Math.max(Math.abs(o - n), 1), 6) *
              Math.abs(f || this.settings.smartSpeed);
      }),
      (h.prototype.to = function (n, o) {
        var f = this.current(),
          m = null,
          b = n - this.relative(f),
          x = (b > 0) - (b < 0),
          S = this._items.length,
          z = this.minimum(),
          c = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(b) > S / 2 && (b += -1 * x * S),
            (m = (((((n = f + b) - z) % S) + S) % S) + z) !== n &&
              m - b <= c &&
              m - b > 0 &&
              ((n = m), this.reset((f = m - b))))
          : (n = this.settings.rewind
              ? ((n % (c += 1)) + c) % c
              : Math.max(z, Math.min(c, n))),
          this.speed(this.duration(f, n, o)),
          this.current(n),
          this.isVisible() && this.update();
      }),
      (h.prototype.next = function (n) {
        (n = n || !1), this.to(this.relative(this.current()) + 1, n);
      }),
      (h.prototype.prev = function (n) {
        (n = n || !1), this.to(this.relative(this.current()) - 1, n);
      }),
      (h.prototype.onTransitionEnd = function (n) {
        if (
          n !== u &&
          (n.stopPropagation(),
          (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (h.prototype.viewport = function () {
        var n;
        return (
          this.options.responsiveBaseElement !== L
            ? (n = s(this.options.responsiveBaseElement).width())
            : L.innerWidth
            ? (n = L.innerWidth)
            : A.documentElement && A.documentElement.clientWidth
            ? (n = A.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          n
        );
      }),
      (h.prototype.replace = function (n) {
        this.$stage.empty(),
          (this._items = []),
          n && (n = n instanceof jQuery ? n : s(n)),
          this.settings.nestedItemSelector &&
            (n = n.find("." + this.settings.nestedItemSelector)),
          n
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              s.proxy(function (o, f) {
                (f = this.prepare(f)),
                  this.$stage.append(f),
                  this._items.push(f),
                  this._mergers.push(
                    1 *
                      f
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (h.prototype.add = function (n, o) {
        var f = this.relative(this._current);
        (o = o === u ? this._items.length : this.normalize(o, !0)),
          (n = n instanceof jQuery ? n : s(n)),
          this.trigger("add", { content: n, position: o }),
          (n = this.prepare(n)),
          0 === this._items.length || o === this._items.length
            ? (0 === this._items.length && this.$stage.append(n),
              0 !== this._items.length && this._items[o - 1].after(n),
              this._items.push(n),
              this._mergers.push(
                1 *
                  n
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[o].before(n),
              this._items.splice(o, 0, n),
              this._mergers.splice(
                o,
                0,
                1 *
                  n
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[f] && this.reset(this._items[f].index()),
          this.invalidate("items"),
          this.trigger("added", { content: n, position: o });
      }),
      (h.prototype.remove = function (n) {
        (n = this.normalize(n, !0)) !== u &&
          (this.trigger("remove", { content: this._items[n], position: n }),
          this._items[n].remove(),
          this._items.splice(n, 1),
          this._mergers.splice(n, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: n }));
      }),
      (h.prototype.preloadAutoWidthImages = function (n) {
        n.each(
          s.proxy(function (o, f) {
            this.enter("pre-loading"),
              (f = s(f)),
              s(new Image())
                .one(
                  "load",
                  s.proxy(function (m) {
                    f.attr("src", m.target.src),
                      f.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  f.attr("src") ||
                    f.attr("data-src") ||
                    f.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (h.prototype.destroy = function () {
        for (var n in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        s(A).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (L.clearTimeout(this.resizeTimer),
          this.off(L, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.remove(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (h.prototype.op = function (n, o, f) {
        var m = this.settings.rtl;
        switch (o) {
          case "<":
            return m ? n > f : n < f;
          case ">":
            return m ? n < f : n > f;
          case ">=":
            return m ? n <= f : n >= f;
          case "<=":
            return m ? n >= f : n <= f;
        }
      }),
      (h.prototype.on = function (n, o, f, m) {
        n.addEventListener
          ? n.addEventListener(o, f, m)
          : n.attachEvent && n.attachEvent("on" + o, f);
      }),
      (h.prototype.off = function (n, o, f, m) {
        n.removeEventListener
          ? n.removeEventListener(o, f, m)
          : n.detachEvent && n.detachEvent("on" + o, f);
      }),
      (h.prototype.trigger = function (n, o, f, m, b) {
        var x = { item: { count: this._items.length, index: this.current() } },
          S = s.camelCase(
            s
              .grep(["on", n, f], function (c) {
                return c;
              })
              .join("-")
              .toLowerCase()
          ),
          z = s.Event(
            [n, "owl", f || "carousel"].join(".").toLowerCase(),
            s.extend({ relatedTarget: this }, x, o)
          );
        return (
          this._supress[n] ||
            (s.each(this._plugins, function (c, R) {
              R.onTrigger && R.onTrigger(z);
            }),
            this.register({ type: h.Type.Event, name: n }),
            this.$element.trigger(z),
            this.settings &&
              "function" == typeof this.settings[S] &&
              this.settings[S].call(this, z)),
          z
        );
      }),
      (h.prototype.enter = function (n) {
        s.each(
          [n].concat(this._states.tags[n] || []),
          s.proxy(function (o, f) {
            this._states.current[f] === u && (this._states.current[f] = 0),
              this._states.current[f]++;
          }, this)
        );
      }),
      (h.prototype.leave = function (n) {
        s.each(
          [n].concat(this._states.tags[n] || []),
          s.proxy(function (o, f) {
            this._states.current[f]--;
          }, this)
        );
      }),
      (h.prototype.register = function (n) {
        if (n.type === h.Type.Event) {
          if (
            (s.event.special[n.name] || (s.event.special[n.name] = {}),
            !s.event.special[n.name].owl)
          ) {
            var o = s.event.special[n.name]._default;
            (s.event.special[n.name]._default = function (f) {
              return !o ||
                !o.apply ||
                (f.namespace && -1 !== f.namespace.indexOf("owl"))
                ? f.namespace && f.namespace.indexOf("owl") > -1
                : o.apply(this, arguments);
            }),
              (s.event.special[n.name].owl = !0);
          }
        } else
          n.type === h.Type.State &&
            ((this._states.tags[n.name] = this._states.tags[n.name]
              ? this._states.tags[n.name].concat(n.tags)
              : n.tags),
            (this._states.tags[n.name] = s.grep(
              this._states.tags[n.name],
              s.proxy(function (f, m) {
                return s.inArray(f, this._states.tags[n.name]) === m;
              }, this)
            )));
      }),
      (h.prototype.suppress = function (n) {
        s.each(
          n,
          s.proxy(function (o, f) {
            this._supress[f] = !0;
          }, this)
        );
      }),
      (h.prototype.release = function (n) {
        s.each(
          n,
          s.proxy(function (o, f) {
            delete this._supress[f];
          }, this)
        );
      }),
      (h.prototype.pointer = function (n) {
        var o = { x: null, y: null };
        return (
          (n =
            (n = n.originalEvent || n || L.event).touches && n.touches.length
              ? n.touches[0]
              : n.changedTouches && n.changedTouches.length
              ? n.changedTouches[0]
              : n).pageX
            ? ((o.x = n.pageX), (o.y = n.pageY))
            : ((o.x = n.clientX), (o.y = n.clientY)),
          o
        );
      }),
      (h.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n));
      }),
      (h.prototype.difference = function (n, o) {
        return { x: n.x - o.x, y: n.y - o.y };
      }),
      (s.fn.owlCarousel = function (n) {
        var o = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var f = s(this),
            m = f.data("owl.carousel");
          m ||
            ((m = new h(this, "object" == typeof n && n)),
            f.data("owl.carousel", m),
            s.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (b, x) {
                m.register({ type: h.Type.Event, name: x }),
                  m.$element.on(
                    x + ".owl.carousel.core",
                    s.proxy(function (S) {
                      S.namespace &&
                        S.relatedTarget !== this &&
                        (this.suppress([x]),
                        m[x].apply(this, [].slice.call(arguments, 1)),
                        this.release([x]));
                    }, m)
                  );
              }
            )),
            "string" == typeof n && "_" !== n.charAt(0) && m[n].apply(m, o);
        });
      }),
      (s.fn.owlCarousel.Constructor = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    var h = function (n) {
      (this._core = n),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": s.proxy(function (o) {
            o.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = s.extend({}, h.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (h.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (h.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = L.setInterval(
            s.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (h.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (h.prototype.destroy = function () {
        var n, o;
        for (n in (L.clearInterval(this._interval), this._handlers))
          this._core.$element.off(n, this._handlers[n]);
        for (o in Object.getOwnPropertyNames(this))
          "function" != typeof this[o] && (this[o] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.AutoRefresh = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    var h = function (n) {
      (this._core = n),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            s.proxy(function (o) {
              if (
                o.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((o.property && "position" == o.property.name) ||
                  "initialized" == o.type)
              ) {
                var f = this._core.settings,
                  m = (f.center && Math.ceil(f.items / 2)) || f.items,
                  b = (f.center && -1 * m) || 0,
                  x =
                    (o.property && void 0 !== o.property.value
                      ? o.property.value
                      : this._core.current()) + b,
                  S = this._core.clones().length,
                  z = s.proxy(function (c, R) {
                    this.load(R);
                  }, this);
                for (
                  f.lazyLoadEager > 0 &&
                  ((m += f.lazyLoadEager),
                  f.loop && ((x -= f.lazyLoadEager), m++));
                  b++ < m;

                )
                  this.load(S / 2 + this._core.relative(x)),
                    S && s.each(this._core.clones(this._core.relative(x)), z),
                    x++;
              }
            }, this),
        }),
        (this._core.options = s.extend({}, h.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (h.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (h.prototype.load = function (n) {
        var o = this._core.$stage.children().eq(n),
          f = o && o.find(".owl-lazy");
        !f ||
          s.inArray(o.get(0), this._loaded) > -1 ||
          (f.each(
            s.proxy(function (m, b) {
              var S,
                x = s(b),
                z =
                  (L.devicePixelRatio > 1 && x.attr("data-src-retina")) ||
                  x.attr("data-src") ||
                  x.attr("data-srcset");
              this._core.trigger("load", { element: x, url: z }, "lazy"),
                x.is("img")
                  ? x
                      .one(
                        "load.owl.lazy",
                        s.proxy(function () {
                          x.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: x, url: z },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", z)
                  : x.is("source")
                  ? x
                      .one(
                        "load.owl.lazy",
                        s.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: x, url: z },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", z)
                  : (((S = new Image()).onload = s.proxy(function () {
                      x.css({
                        "background-image": 'url("' + z + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: x, url: z },
                          "lazy"
                        );
                    }, this)),
                    (S.src = z));
            }, this)
          ),
          this._loaded.push(o.get(0)));
      }),
      (h.prototype.destroy = function () {
        var n, o;
        for (n in this.handlers) this._core.$element.off(n, this.handlers[n]);
        for (o in Object.getOwnPropertyNames(this))
          "function" != typeof this[o] && (this[o] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Lazy = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    var h = function (n) {
      (this._core = n),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": s.proxy(function (
            f
          ) {
            f.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": s.proxy(function (f) {
            f.namespace &&
              this._core.settings.autoHeight &&
              "position" === f.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": s.proxy(function (f) {
            f.namespace &&
              this._core.settings.autoHeight &&
              f.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = s.extend({}, h.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var o = this;
      s(L).on("load", function () {
        o._core.settings.autoHeight && o.update();
      }),
        s(L).resize(function () {
          o._core.settings.autoHeight &&
            (null != o._intervalId && clearTimeout(o._intervalId),
            (o._intervalId = setTimeout(function () {
              o.update();
            }, 250)));
        });
    };
    (h.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (h.prototype.update = function () {
        var n = this._core._current,
          o = n + this._core.settings.items,
          f = this._core.settings.lazyLoad,
          m = this._core.$stage.children().toArray().slice(n, o),
          b = [],
          x = 0;
        s.each(m, function (S, z) {
          b.push(s(z).height());
        }),
          (x = Math.max.apply(null, b)) <= 1 &&
            f &&
            this._previousHeight &&
            (x = this._previousHeight),
          (this._previousHeight = x),
          this._core.$stage
            .parent()
            .height(x)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (h.prototype.destroy = function () {
        var n, o;
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (o in Object.getOwnPropertyNames(this))
          "function" != typeof this[o] && (this[o] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.AutoHeight = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    var h = function (n) {
      (this._core = n),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              o.preventDefault();
          }, this),
          "refreshed.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              "position" === o.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": s.proxy(function (o) {
            if (o.namespace) {
              var f = s(o.content).find(".owl-video");
              f.length &&
                (f.css("display", "none"), this.fetch(f, s(o.content)));
            }
          }, this),
        }),
        (this._core.options = s.extend({}, h.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          s.proxy(function (o) {
            this.play(o);
          }, this)
        );
    };
    (h.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (h.prototype.fetch = function (n, o) {
        var f = n.attr("data-vimeo-id")
            ? "vimeo"
            : n.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          m =
            n.attr("data-vimeo-id") ||
            n.attr("data-youtube-id") ||
            n.attr("data-vzaar-id"),
          b = n.attr("data-width") || this._core.settings.videoWidth,
          x = n.attr("data-height") || this._core.settings.videoHeight,
          S = n.attr("href");
        if (!S) throw new Error("Missing video URL.");
        if (
          (m = S.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          f = "youtube";
        else if (m[3].indexOf("vimeo") > -1) f = "vimeo";
        else {
          if (!(m[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          f = "vzaar";
        }
        (this._videos[S] = { type: f, id: (m = m[6]), width: b, height: x }),
          o.attr("data-video", S),
          this.thumbnail(n, this._videos[S]);
      }),
      (h.prototype.thumbnail = function (n, o) {
        var f,
          x =
            o.width && o.height
              ? "width:" + o.width + "px;height:" + o.height + "px;"
              : "",
          S = n.find("img"),
          z = "src",
          c = "",
          R = this._core.settings,
          _ = function (p) {
            (f = s(
              "<div/>",
              R.lazyLoad
                ? { class: "owl-video-tn " + c, srcType: p }
                : {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + p + ")",
                  }
            )),
              n.after(f),
              n.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (n.wrap(s("<div/>", { class: "owl-video-wrapper", style: x })),
          this._core.settings.lazyLoad && ((z = "data-src"), (c = "owl-lazy")),
          S.length)
        )
          return _(S.attr(z)), S.remove(), !1;
        "youtube" === o.type
          ? _("//img.youtube.com/vi/" + o.id + "/hqdefault.jpg")
          : "vimeo" === o.type
          ? s.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + o.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (p) {
                _(p[0].thumbnail_large);
              },
            })
          : "vzaar" === o.type &&
            s.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + o.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (p) {
                _(p.framegrab_url);
              },
            });
      }),
      (h.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (h.prototype.play = function (n) {
        var S,
          f = s(n.target).closest("." + this._core.settings.itemClass),
          m = this._videos[f.attr("data-video")],
          b = m.width || "100%",
          x = m.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (f = this._core.items(this._core.relative(f.index()))),
          this._core.reset(f.index()),
          (S = s(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )).attr("height", x),
          S.attr("width", b),
          "youtube" === m.type
            ? S.attr(
                "src",
                "//www.youtube.com/embed/" +
                  m.id +
                  "?autoplay=1&rel=0&v=" +
                  m.id
              )
            : "vimeo" === m.type
            ? S.attr("src", "//player.vimeo.com/video/" + m.id + "?autoplay=1")
            : "vzaar" === m.type &&
              S.attr(
                "src",
                "//view.vzaar.com/" + m.id + "/player?autoplay=true"
              ),
          s(S)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(f.find(".owl-video")),
          (this._playing = f.addClass("owl-video-playing")));
      }),
      (h.prototype.isInFullScreen = function () {
        var n =
          A.fullscreenElement ||
          A.mozFullScreenElement ||
          A.webkitFullscreenElement;
        return n && s(n).parent().hasClass("owl-video-frame");
      }),
      (h.prototype.destroy = function () {
        var n, o;
        for (n in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(n, this._handlers[n]);
        for (o in Object.getOwnPropertyNames(this))
          "function" != typeof this[o] && (this[o] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Video = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    var h = function (n) {
      (this.core = n),
        (this.core.options = s.extend({}, h.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = u),
        (this.next = u),
        (this.handlers = {
          "change.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              "position" == o.property.name &&
              ((this.previous = this.core.current()),
              (this.next = o.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            s.proxy(function (o) {
              o.namespace && (this.swapping = "translated" == o.type);
            }, this),
          "translate.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (h.Defaults = { animateOut: !1, animateIn: !1 }),
      (h.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          s.support.animation &&
          s.support.transition
        ) {
          this.core.speed(0);
          var n,
            o = s.proxy(this.clear, this),
            f = this.core.$stage.children().eq(this.previous),
            m = this.core.$stage.children().eq(this.next),
            b = this.core.settings.animateIn,
            x = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (x &&
              ((n =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              f
                .one(s.support.animation.end, o)
                .css({ left: n + "px" })
                .addClass("animated owl-animated-out")
                .addClass(x)),
            b &&
              m
                .one(s.support.animation.end, o)
                .addClass("animated owl-animated-in")
                .addClass(b));
        }
      }),
      (h.prototype.clear = function (n) {
        s(n.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (h.prototype.destroy = function () {
        var n, o;
        for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
        for (o in Object.getOwnPropertyNames(this))
          "function" != typeof this[o] && (this[o] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Animate = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    var h = function (n) {
      (this._core = n),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": s.proxy(function (o) {
            o.namespace && "settings" === o.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : o.namespace &&
                "position" === o.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": s.proxy(function (o) {
            o.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": s.proxy(function (o, f, m) {
            o.namespace && this.play(f, m);
          }, this),
          "stop.owl.autoplay": s.proxy(function (o) {
            o.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": s.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = s.extend({}, h.Defaults, this._core.options));
    };
    (h.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (h.prototype._next = function (n) {
        (this._call = L.setTimeout(
          s.proxy(this._next, this, n),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          !this._core.is("interacting") &&
            !A.hidden &&
            this._core.next(n || this._core.settings.autoplaySpeed);
      }),
      (h.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (h.prototype.play = function (n, o) {
        var f;
        this._core.is("rotating") || this._core.enter("rotating"),
          (n = n || this._core.settings.autoplayTimeout),
          (f = Math.min(this._time % (this._timeout || n), n)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : L.clearTimeout(this._call),
          (this._time += (this.read() % n) - f),
          (this._timeout = n),
          (this._call = L.setTimeout(s.proxy(this._next, this, o), n - f));
      }),
      (h.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          L.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (h.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          L.clearTimeout(this._call));
      }),
      (h.prototype.destroy = function () {
        var n, o;
        for (n in (this.stop(), this._handlers))
          this._core.$element.off(n, this._handlers[n]);
        for (o in Object.getOwnPropertyNames(this))
          "function" != typeof this[o] && (this[o] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.autoplay = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    "use strict";
    var h = function (n) {
      (this._core = n),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  s(o.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(o.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(o.position, 1);
          }, this),
          "changed.owl.carousel": s.proxy(function (o) {
            o.namespace && "position" == o.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = s.extend({}, h.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (h.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (h.prototype.initialize = function () {
        var n,
          o = this._core.settings;
        for (n in ((this._controls.$relative = (
          o.navContainer
            ? s(o.navContainer)
            : s("<div>").addClass(o.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = s("<" + o.navElement + ">")
          .addClass(o.navClass[0])
          .html(o.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            s.proxy(function (f) {
              this.prev(o.navSpeed);
            }, this)
          )),
        (this._controls.$next = s("<" + o.navElement + ">")
          .addClass(o.navClass[1])
          .html(o.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            s.proxy(function (f) {
              this.next(o.navSpeed);
            }, this)
          )),
        o.dotsData ||
          (this._templates = [
            s('<button role="button">')
              .addClass(o.dotClass)
              .append(s("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          o.dotsContainer
            ? s(o.dotsContainer)
            : s("<div>").addClass(o.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "button",
          s.proxy(function (f) {
            var m = s(f.target).parent().is(this._controls.$absolute)
              ? s(f.target).index()
              : s(f.target).parent().index();
            f.preventDefault(), this.to(m, o.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[n] = s.proxy(this[n], this);
      }),
      (h.prototype.destroy = function () {
        var n, o, f, m, b;
        for (n in ((b = this._core.settings), this._handlers))
          this.$element.off(n, this._handlers[n]);
        for (o in this._controls)
          "$relative" === o && b.navContainer
            ? this._controls[o].html("")
            : this._controls[o].remove();
        for (m in this.overides) this._core[m] = this._overrides[m];
        for (f in Object.getOwnPropertyNames(this))
          "function" != typeof this[f] && (this[f] = null);
      }),
      (h.prototype.update = function () {
        var n,
          o,
          m = this._core.clones().length / 2,
          b = m + this._core.items().length,
          x = this._core.maximum(!0),
          S = this._core.settings,
          z = S.center || S.autoWidth || S.dotsData ? 1 : S.dotsEach || S.items;
        if (
          ("page" !== S.slideBy && (S.slideBy = Math.min(S.slideBy, S.items)),
          S.dots || "page" == S.slideBy)
        )
          for (this._pages = [], n = m, o = 0; n < b; n++) {
            if (o >= z || 0 === o) {
              if (
                (this._pages.push({
                  start: Math.min(x, n - m),
                  end: n - m + z - 1,
                }),
                Math.min(x, n - m) === x)
              )
                break;
              o = 0;
            }
            o += this._core.mergers(this._core.relative(n));
          }
      }),
      (h.prototype.draw = function () {
        var n,
          o = this._core.settings,
          f = this._core.items().length <= o.items,
          m = this._core.relative(this._core.current()),
          b = o.loop || o.rewind;
        this._controls.$relative.toggleClass("disabled", !o.nav || f),
          o.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !b && m <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !b && m >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !o.dots || f),
          o.dots &&
            ((n =
              this._pages.length - this._controls.$absolute.children().length),
            o.dotsData && 0 !== n
              ? this._controls.$absolute.html(this._templates.join(""))
              : n > 0
              ? this._controls.$absolute.append(
                  new Array(n + 1).join(this._templates[0])
                )
              : n < 0 && this._controls.$absolute.children().slice(n).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(s.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (h.prototype.onTrigger = function (n) {
        var o = this._core.settings;
        n.page = {
          index: s.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            o &&
            (o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items),
        };
      }),
      (h.prototype.current = function () {
        var n = this._core.relative(this._core.current());
        return s
          .grep(
            this._pages,
            s.proxy(function (o, f) {
              return o.start <= n && o.end >= n;
            }, this)
          )
          .pop();
      }),
      (h.prototype.getPosition = function (n) {
        var o,
          f,
          m = this._core.settings;
        return (
          "page" == m.slideBy
            ? ((o = s.inArray(this.current(), this._pages)),
              n ? ++o : --o,
              (o = this._pages[((o % (f = this._pages.length)) + f) % f].start))
            : ((o = this._core.relative(this._core.current())),
              (f = this._core.items().length),
              n ? (o += m.slideBy) : (o -= m.slideBy)),
          o
        );
      }),
      (h.prototype.next = function (n) {
        s.proxy(this._overrides.to, this._core)(this.getPosition(!0), n);
      }),
      (h.prototype.prev = function (n) {
        s.proxy(this._overrides.to, this._core)(this.getPosition(!1), n);
      }),
      (h.prototype.to = function (n, o, f) {
        var m;
        !f && this._pages.length
          ? ((m = this._pages.length),
            s.proxy(this._overrides.to, this._core)(
              this._pages[((n % m) + m) % m].start,
              o
            ))
          : s.proxy(this._overrides.to, this._core)(n, o);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Navigation = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    "use strict";
    var h = function (n) {
      (this._core = n),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": s.proxy(function (o) {
            o.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              s(L).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": s.proxy(function (o) {
            if (o.namespace) {
              var f = s(o.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!f) return;
              this._hashes[f] = o.content;
            }
          }, this),
          "changed.owl.carousel": s.proxy(function (o) {
            if (o.namespace && "position" === o.property.name) {
              var f = this._core.items(
                  this._core.relative(this._core.current())
                ),
                m = s
                  .map(this._hashes, function (b, x) {
                    return b === f ? x : null;
                  })
                  .join();
              if (!m || L.location.hash.slice(1) === m) return;
              L.location.hash = m;
            }
          }, this),
        }),
        (this._core.options = s.extend({}, h.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        s(L).on(
          "hashchange.owl.navigation",
          s.proxy(function (o) {
            var f = L.location.hash.substring(1),
              m = this._core.$stage.children(),
              b = this._hashes[f] && m.index(this._hashes[f]);
            void 0 === b ||
              b === this._core.current() ||
              this._core.to(this._core.relative(b), !1, !0);
          }, this)
        );
    };
    (h.Defaults = { URLhashListener: !1 }),
      (h.prototype.destroy = function () {
        var n, o;
        for (n in (s(L).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(n, this._handlers[n]);
        for (o in Object.getOwnPropertyNames(this))
          "function" != typeof this[o] && (this[o] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Hash = h);
  })(window.Zepto || window.jQuery, window, document),
  (function (s, L, A, u) {
    var h = s("<support>").get(0).style,
      n = "Webkit Moz O ms".split(" "),
      o = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      };
    function m(x, S) {
      var z = !1,
        c = x.charAt(0).toUpperCase() + x.slice(1);
      return (
        s.each((x + " " + n.join(c + " ") + c).split(" "), function (R, _) {
          if (h[_] !== u) return (z = !S || _), !1;
        }),
        z
      );
    }
    function b(x) {
      return m(x, !0);
    }
    !!m("transition") &&
      ((s.support.transition = new String(b("transition"))),
      (s.support.transition.end = o.transition.end[s.support.transition])),
      !!m("animation") &&
        ((s.support.animation = new String(b("animation"))),
        (s.support.animation.end = o.animation.end[s.support.animation])),
      m("transform") &&
        ((s.support.transform = new String(b("transform"))),
        (s.support.transform3d = !!m("perspective")));
  })(window.Zepto || window.jQuery, window, document),
  (function (s) {
    "use strict";
    var L = function (A, u) {
      (this.el = s(A)),
        (this.options = s.extend({}, s.fn.typed.defaults, u)),
        (this.isInput = this.el.is("input")),
        (this.attr = this.options.attr),
        (this.showCursor = !this.isInput && this.options.showCursor),
        (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
        (this.contentType = this.options.contentType),
        (this.typeSpeed = this.options.typeSpeed),
        (this.startDelay = this.options.startDelay),
        (this.backSpeed = this.options.backSpeed),
        (this.backDelay = this.options.backDelay),
        (this.stringsElement = this.options.stringsElement),
        (this.strings = this.options.strings),
        (this.strPos = 0),
        (this.arrayPos = 0),
        (this.stopNum = 0),
        (this.loop = this.options.loop),
        (this.loopCount = this.options.loopCount),
        (this.curLoop = 0),
        (this.stop = !1),
        (this.cursorChar = this.options.cursorChar),
        (this.shuffle = this.options.shuffle),
        (this.sequence = []),
        this.build();
    };
    (L.prototype = {
      constructor: L,
      init: function () {
        var A = this;
        A.timeout = setTimeout(function () {
          for (var u = 0; u < A.strings.length; ++u) A.sequence[u] = u;
          A.shuffle && (A.sequence = A.shuffleArray(A.sequence)),
            A.typewrite(A.strings[A.sequence[A.arrayPos]], A.strPos);
        }, A.startDelay);
      },
      build: function () {
        var A = this;
        if (
          (!0 === this.showCursor &&
            ((this.cursor = s(
              '<span class="typed-cursor">' + this.cursorChar + "</span>"
            )),
            this.el.after(this.cursor)),
          this.stringsElement)
        ) {
          (A.strings = []), this.stringsElement.hide();
          var u = this.stringsElement.find("p");
          s.each(u, function (h, n) {
            A.strings.push(s(n).html());
          });
        }
        this.init();
      },
      typewrite: function (A, u) {
        if (!0 !== this.stop) {
          var h = Math.round(70 * Math.random()) + this.typeSpeed,
            n = this;
          n.timeout = setTimeout(function () {
            var o = 0,
              f = A.substr(u);
            if ("^" === f.charAt(0)) {
              var m = 1;
              /^\^\d+/.test(f) &&
                ((m += (f = /\d+/.exec(f)[0]).length), (o = parseInt(f))),
                (A = A.substring(0, u) + A.substring(u + m));
            }
            if ("html" === n.contentType) {
              var b = A.substr(u).charAt(0);
              if ("<" === b || "&" === b) {
                var S;
                for (S = "<" === b ? ">" : ";"; A.substr(u).charAt(0) !== S; )
                  A.substr(u).charAt(0), u++;
                u++;
              }
            }
            n.timeout = setTimeout(function () {
              if (u === A.length) {
                if (
                  (n.options.onStringTyped(n.arrayPos),
                  n.arrayPos === n.strings.length - 1 &&
                    (n.options.callback(),
                    n.curLoop++,
                    !1 === n.loop || n.curLoop === n.loopCount))
                )
                  return;
                n.timeout = setTimeout(function () {
                  n.backspace(A, u);
                }, n.backDelay);
              } else {
                0 === u && n.options.preStringTyped(n.arrayPos);
                var z = A.substr(0, u + 1);
                n.attr
                  ? n.el.attr(n.attr, z)
                  : n.isInput
                  ? n.el.val(z)
                  : "html" === n.contentType
                  ? n.el.html(z)
                  : n.el.text(z),
                  u++,
                  n.typewrite(A, u);
              }
            }, o);
          }, h);
        }
      },
      backspace: function (A, u) {
        if (!0 !== this.stop) {
          var h = Math.round(70 * Math.random()) + this.backSpeed,
            n = this;
          n.timeout = setTimeout(function () {
            if ("html" === n.contentType && ">" === A.substr(u).charAt(0)) {
              for (; "<" !== A.substr(u).charAt(0); )
                A.substr(u).charAt(0), u--;
              u--;
            }
            var f = A.substr(0, u);
            n.attr
              ? n.el.attr(n.attr, f)
              : n.isInput
              ? n.el.val(f)
              : "html" === n.contentType
              ? n.el.html(f)
              : n.el.text(f),
              u > n.stopNum
                ? (u--, n.backspace(A, u))
                : u <= n.stopNum &&
                  (n.arrayPos++,
                  n.arrayPos === n.strings.length
                    ? ((n.arrayPos = 0),
                      n.shuffle && (n.sequence = n.shuffleArray(n.sequence)),
                      n.init())
                    : n.typewrite(n.strings[n.sequence[n.arrayPos]], u));
          }, h);
        }
      },
      shuffleArray: function (A) {
        var u,
          h,
          n = A.length;
        if (n)
          for (; --n; )
            (u = A[(h = Math.floor(Math.random() * (n + 1)))]),
              (A[h] = A[n]),
              (A[n] = u);
        return A;
      },
      reset: function () {
        clearInterval(this.timeout);
        var u = this.el.attr("id");
        this.el.after('<span id="' + u + '"/>'),
          this.el.remove(),
          typeof this.cursor < "u" && this.cursor.remove(),
          this.options.resetCallback();
      },
    }),
      (s.fn.typed = function (A) {
        return this.each(function () {
          var u = s(this),
            h = u.data("typed");
          h || u.data("typed", (h = new L(this, "object" == typeof A && A))),
            "string" == typeof A && h[A]();
        });
      }),
      (s.fn.typed.defaults = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!",
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {},
      });
  })(window.jQuery),
  $(window).on("load", function () {
    var s = $(".preloader");
    s.find(".spinner").fadeOut(function () {
      s.fadeOut();
    });
  }),
  $(function () {
    "use strict";
    var s = $(window).width();
    $(window).height(),
      $(".subtitle.subtitle-typed").each(function () {
        var b = $(this);
        b.typed({
          stringsElement: b.find(".typing-title"),
          backDelay: 3500,
          typeSpeed: 0,
          loop: !0,
        });
      }),
      $("header, .profile").on("click", ".menu-btn", function () {
        return (
          $(".s_overlay").fadeIn(),
          $(".content-sidebar").addClass("active"),
          $("body,html").addClass("sidebar-open"),
          !1
        );
      }),
      $(".content-sidebar, .container").on(
        "click",
        ".close, .s_overlay",
        function () {
          $(".s_overlay").fadeOut(),
            $(".content-sidebar").removeClass("active"),
            $("body,html").removeClass("sidebar-open");
        }
      ),
      $(".main-menu li.page_item_has_children").each(function () {
        $(this).find("> a").after('<span class="children_toggle"></span>');
      }),
      $(".main-menu").on("click", ".children_toggle", function () {
        var b = $(this).closest(".page_item_has_children");
        b.hasClass("open")
          ? (b.removeClass("open"), b.find("> ul").slideUp(250))
          : (b.addClass("open"), b.find("> ul").slideDown(250));
      }),
      $(".lnk-view-menu").on("click", function () {
        var b = $(this).find(".text").text(),
          x = $(this).find(".text").data("text-open");
        return (
          $(".profile").hasClass("default-menu-open")
            ? ($(".profile").removeClass("default-menu-open"),
              $(this).find(".text").data("text-open", b),
              $(this).find(".text").text(x))
            : ($(".profile").addClass("default-menu-open"),
              $(this).find(".text").data("text-open", b),
              $(this).find(".text").text(x)),
          !1
        );
      });
    var A = $(".container");
    function o() {
      var b = $(".skills-list.dotted .progress"),
        x = b.width();
      b.length && b.find(".percentage .da").css({ width: x + 1 });
    }
    $(".card-inner"),
      A.data("animation-in"),
      A.data("animation-out"),
      s >= 1200 &&
        window.location.hash &&
        ($(".top-menu a[href='" + window.location.hash + "']")
          .find(".link")
          .trigger("click"),
        "#about-card" == window.location.hash &&
          history.replaceState(null, null, " ")),
      $(window).on("resize", function () {
        var b = $(window).width(),
          S = ($(window).height(), 1024);
        $(".new-skin").length && (S = 1200),
          $(".new-skin").length || (S = 1024),
          b < S
            ? ($(".card-inner").removeClass("hidden"),
              $(".card-inner").removeClass("fadeOutLeft"),
              $(".card-inner").removeClass("rotateOutUpLeft"),
              $(".card-inner").removeClass("rollOut"),
              $(".card-inner").removeClass("jackOutTheBox"),
              $(".card-inner").removeClass("fadeOut"),
              $(".card-inner").removeClass("fadeOutUp"),
              $(".card-inner").removeClass("animated"),
              $(window).on("scroll", function () {
                var z = $(window).scrollTop();
                $(".top-menu ul li a").each(function () {
                  var c = $(this),
                    R = $(c.attr("href"));
                  b > 561
                    ? R.offset().top - 100 <= z &&
                      ($(".top-menu ul li").removeClass("active"),
                      c.closest("li").addClass("active"))
                    : R.offset().top - $(".header").height() <= z &&
                      ($(".top-menu ul li").removeClass("active"),
                      c.closest("li").addClass("active"));
                });
              }),
              $(".card-inner .card-wrap").slimScroll({ destroy: !0 }),
              $(".card-inner .card-wrap").attr("style", ""))
            : !$(".page").hasClass("new-skin") &&
              b > S &&
              $(".card-inner .card-wrap").slimScroll({ height: "570px" }),
          setTimeout(o, 750);
      }),
      (s < 1024) & $("#home-card").length &&
        $(window).on("scroll", function () {
          var b = $(window).scrollTop();
          $(".top-menu ul li a").each(function () {
            var x = $(this),
              S = $(x.attr("href"));
            s > 561
              ? S.offset().top - 100 <= b &&
                ($(".top-menu ul li").removeClass("active"),
                x.closest("li").addClass("active"))
              : S.offset().top - $(".header").height() - 10 <= b &&
                ($(".top-menu ul li").removeClass("active"),
                x.closest("li").addClass("active"));
          });
        }),
      !$(".page").hasClass("new-skin") &&
        s > 1024 &&
        $(".card-inner .card-wrap").slimScroll({ height: "570px" }),
      $(".lnks").on("click", ".lnk.discover", function () {
        $('.top-menu a[href="#contacts-card"]').trigger("click");
      });
    var f = $(".grid-items");
    f.imagesLoaded(function () {
      f.isotope({ percentPosition: !0, itemSelector: ".grid-item" });
    }),
      $("#cform").validate({
        ignore: ".ignore",
        rules: {
          name: { required: !0 },
          message: { required: !0 },
          email: { required: !0, email: !0 },
          hiddenRecaptcha: {
            required: function () {
              return "" == grecaptcha.getResponse();
            },
          },
        },
        success: "valid",
        submitHandler: function () {
          $.ajax({
            url: "mailer/feedback.php",
            type: "post",
            dataType: "json",
            data:
              "name=" +
              $("#cform").find('input[name="name"]').val() +
              "&email=" +
              $("#cform").find('input[name="email"]').val() +
              "&message=" +
              $("#cform").find('textarea[name="message"]').val(),
            beforeSend: function () {},
            complete: function () {},
            success: function (b) {
              $("#cform").fadeOut(), $(".alert-success").delay(1e3).fadeIn();
            },
          });
        },
      }),
      $("#comment_form").validate({
        rules: { name: { required: !0 }, message: { required: !0 } },
        success: "valid",
        submitHandler: function () {},
      }),
      $("#map").length && initMap(),
      $(".revs-carousel.rtl-revs .owl-carousel").owlCarousel({
        margin: 0,
        items: 1,
        rtl: !0,
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        loop: !0,
        rewind: !1,
        nav: !1,
        dots: !0,
      }),
      $(window).on("resize", function () {
        var b = $(".skills-list.dotted .progress"),
          x = b.width();
        b.length && b.find(".percentage .da").css({ width: x + 1 });
        var S = $(".revs-carousel .owl-carousel");
        S.find(".revs-item").css({ "max-width": S.width() });
      }),
      $(".content .title").each(function (b) {
        var x = $(this).text().split(" ");
        if (x.length > 1) {
          var S = x[0],
            z = '<span class="first-word">' + S + "</span>",
            c = $(this).html().replace(S, z);
          $(this).html(c);
        } else $(this).html('<div class="first-letter">' + $(this).html() + "</div>");
      });
  });
