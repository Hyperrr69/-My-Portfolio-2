"use strict";
(self.webpackChunkbhavya_portfolio_premium =
  self.webpackChunkbhavya_portfolio_premium || []).push([
  [179],
  {
    305: () => {
      function X(e) {
        return "function" == typeof e;
      }
      function ps(e) {
        const t = e((r) => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t),
          t
        );
      }
      const ca = ps(
        (e) =>
          function (t) {
            e(this),
              (this.message = t
                ? `${t.length} errors occurred during unsubscription:\n${t
                    .map((r, i) => `${i + 1}) ${r.toString()}`)
                    .join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = t);
          }
      );
      function gs(e, n) {
        if (e) {
          const t = e.indexOf(n);
          0 <= t && e.splice(t, 1);
        }
      }
      class It {
        constructor(n) {
          (this.initialTeardown = n),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let n;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: t } = this;
            if (t)
              if (((this._parentage = null), Array.isArray(t)))
                for (const s of t) s.remove(this);
              else t.remove(this);
            const { initialTeardown: r } = this;
            if (X(r))
              try {
                r();
              } catch (s) {
                n = s instanceof ca ? s.errors : [s];
              }
            const { _finalizers: i } = this;
            if (i) {
              this._finalizers = null;
              for (const s of i)
                try {
                  vg(s);
                } catch (o) {
                  (n = n ?? []),
                    o instanceof ca ? (n = [...n, ...o.errors]) : n.push(o);
                }
            }
            if (n) throw new ca(n);
          }
        }
        add(n) {
          var t;
          if (n && n !== this)
            if (this.closed) vg(n);
            else {
              if (n instanceof It) {
                if (n.closed || n._hasParent(this)) return;
                n._addParent(this);
              }
              (this._finalizers =
                null !== (t = this._finalizers) && void 0 !== t ? t : []).push(
                n
              );
            }
        }
        _hasParent(n) {
          const { _parentage: t } = this;
          return t === n || (Array.isArray(t) && t.includes(n));
        }
        _addParent(n) {
          const { _parentage: t } = this;
          this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n;
        }
        _removeParent(n) {
          const { _parentage: t } = this;
          t === n ? (this._parentage = null) : Array.isArray(t) && gs(t, n);
        }
        remove(n) {
          const { _finalizers: t } = this;
          t && gs(t, n), n instanceof It && n._removeParent(this);
        }
      }
      It.EMPTY = (() => {
        const e = new It();
        return (e.closed = !0), e;
      })();
      const mg = It.EMPTY;
      function yg(e) {
        return (
          e instanceof It ||
          (e && "closed" in e && X(e.remove) && X(e.add) && X(e.unsubscribe))
        );
      }
      function vg(e) {
        X(e) ? e() : e.unsubscribe();
      }
      const br = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        da = {
          setTimeout(e, n, ...t) {
            const { delegate: r } = da;
            return r?.setTimeout
              ? r.setTimeout(e, n, ...t)
              : setTimeout(e, n, ...t);
          },
          clearTimeout(e) {
            const { delegate: n } = da;
            return (n?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function _g(e) {
        da.setTimeout(() => {
          const { onUnhandledError: n } = br;
          if (!n) throw e;
          n(e);
        });
      }
      function ic() {}
      const X0 = sc("C", void 0, void 0);
      function sc(e, n, t) {
        return { kind: e, value: n, error: t };
      }
      let Sr = null;
      function fa(e) {
        if (br.useDeprecatedSynchronousErrorHandling) {
          const n = !Sr;
          if ((n && (Sr = { errorThrown: !1, error: null }), e(), n)) {
            const { errorThrown: t, error: r } = Sr;
            if (((Sr = null), t)) throw r;
          }
        } else e();
      }
      class oc extends It {
        constructor(n) {
          super(),
            (this.isStopped = !1),
            n
              ? ((this.destination = n), yg(n) && n.add(this))
              : (this.destination = sI);
        }
        static create(n, t, r) {
          return new ms(n, t, r);
        }
        next(n) {
          this.isStopped
            ? lc(
                (function eI(e) {
                  return sc("N", e, void 0);
                })(n),
                this
              )
            : this._next(n);
        }
        error(n) {
          this.isStopped
            ? lc(
                (function J0(e) {
                  return sc("E", void 0, e);
                })(n),
                this
              )
            : ((this.isStopped = !0), this._error(n));
        }
        complete() {
          this.isStopped
            ? lc(X0, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(n) {
          this.destination.next(n);
        }
        _error(n) {
          try {
            this.destination.error(n);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const nI = Function.prototype.bind;
      function ac(e, n) {
        return nI.call(e, n);
      }
      class rI {
        constructor(n) {
          this.partialObserver = n;
        }
        next(n) {
          const { partialObserver: t } = this;
          if (t.next)
            try {
              t.next(n);
            } catch (r) {
              ha(r);
            }
        }
        error(n) {
          const { partialObserver: t } = this;
          if (t.error)
            try {
              t.error(n);
            } catch (r) {
              ha(r);
            }
          else ha(n);
        }
        complete() {
          const { partialObserver: n } = this;
          if (n.complete)
            try {
              n.complete();
            } catch (t) {
              ha(t);
            }
        }
      }
      class ms extends oc {
        constructor(n, t, r) {
          let i;
          if ((super(), X(n) || !n))
            i = {
              next: n ?? void 0,
              error: t ?? void 0,
              complete: r ?? void 0,
            };
          else {
            let s;
            this && br.useDeprecatedNextContext
              ? ((s = Object.create(n)),
                (s.unsubscribe = () => this.unsubscribe()),
                (i = {
                  next: n.next && ac(n.next, s),
                  error: n.error && ac(n.error, s),
                  complete: n.complete && ac(n.complete, s),
                }))
              : (i = n);
          }
          this.destination = new rI(i);
        }
      }
      function ha(e) {
        br.useDeprecatedSynchronousErrorHandling
          ? (function tI(e) {
              br.useDeprecatedSynchronousErrorHandling &&
                Sr &&
                ((Sr.errorThrown = !0), (Sr.error = e));
            })(e)
          : _g(e);
      }
      function lc(e, n) {
        const { onStoppedNotification: t } = br;
        t && da.setTimeout(() => t(e, n));
      }
      const sI = {
          closed: !0,
          next: ic,
          error: function iI(e) {
            throw e;
          },
          complete: ic,
        },
        uc =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function Qn(e) {
        return e;
      }
      function Dg(e) {
        return 0 === e.length
          ? Qn
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce((r, i) => i(r), t);
            };
      }
      let Se = (() => {
        class e {
          constructor(t) {
            t && (this._subscribe = t);
          }
          lift(t) {
            const r = new e();
            return (r.source = this), (r.operator = t), r;
          }
          subscribe(t, r, i) {
            const s = (function lI(e) {
              return (
                (e && e instanceof oc) ||
                ((function aI(e) {
                  return e && X(e.next) && X(e.error) && X(e.complete);
                })(e) &&
                  yg(e))
              );
            })(t)
              ? t
              : new ms(t, r, i);
            return (
              fa(() => {
                const { operator: o, source: a } = this;
                s.add(
                  o
                    ? o.call(s, a)
                    : a
                    ? this._subscribe(s)
                    : this._trySubscribe(s)
                );
              }),
              s
            );
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (r) {
              t.error(r);
            }
          }
          forEach(t, r) {
            return new (r = Cg(r))((i, s) => {
              const o = new ms({
                next: (a) => {
                  try {
                    t(a);
                  } catch (l) {
                    s(l), o.unsubscribe();
                  }
                },
                error: s,
                complete: i,
              });
              this.subscribe(o);
            });
          }
          _subscribe(t) {
            var r;
            return null === (r = this.source) || void 0 === r
              ? void 0
              : r.subscribe(t);
          }
          [uc]() {
            return this;
          }
          pipe(...t) {
            return Dg(t)(this);
          }
          toPromise(t) {
            return new (t = Cg(t))((r, i) => {
              let s;
              this.subscribe(
                (o) => (s = o),
                (o) => i(o),
                () => r(s)
              );
            });
          }
        }
        return (e.create = (n) => new e(n)), e;
      })();
      function Cg(e) {
        var n;
        return null !== (n = e ?? br.Promise) && void 0 !== n ? n : Promise;
      }
      const uI = ps(
        (e) =>
          function () {
            e(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      let gt = (() => {
        class e extends Se {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(t) {
            const r = new wg(this, this);
            return (r.operator = t), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new uI();
          }
          next(t) {
            fa(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const r of this.currentObservers) r.next(t);
              }
            });
          }
          error(t) {
            fa(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = t);
                const { observers: r } = this;
                for (; r.length; ) r.shift().error(t);
              }
            });
          }
          complete() {
            fa(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: t } = this;
                for (; t.length; ) t.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var t;
            return (
              (null === (t = this.observers) || void 0 === t
                ? void 0
                : t.length) > 0
            );
          }
          _trySubscribe(t) {
            return this._throwIfClosed(), super._trySubscribe(t);
          }
          _subscribe(t) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(t),
              this._innerSubscribe(t)
            );
          }
          _innerSubscribe(t) {
            const { hasError: r, isStopped: i, observers: s } = this;
            return r || i
              ? mg
              : ((this.currentObservers = null),
                s.push(t),
                new It(() => {
                  (this.currentObservers = null), gs(s, t);
                }));
          }
          _checkFinalizedStatuses(t) {
            const { hasError: r, thrownError: i, isStopped: s } = this;
            r ? t.error(i) : s && t.complete();
          }
          asObservable() {
            const t = new Se();
            return (t.source = this), t;
          }
        }
        return (e.create = (n, t) => new wg(n, t)), e;
      })();
      class wg extends gt {
        constructor(n, t) {
          super(), (this.destination = n), (this.source = t);
        }
        next(n) {
          var t, r;
          null ===
            (r =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.next) ||
            void 0 === r ||
            r.call(t, n);
        }
        error(n) {
          var t, r;
          null ===
            (r =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.error) ||
            void 0 === r ||
            r.call(t, n);
        }
        complete() {
          var n, t;
          null ===
            (t =
              null === (n = this.destination) || void 0 === n
                ? void 0
                : n.complete) ||
            void 0 === t ||
            t.call(n);
        }
        _subscribe(n) {
          var t, r;
          return null !==
            (r =
              null === (t = this.source) || void 0 === t
                ? void 0
                : t.subscribe(n)) && void 0 !== r
            ? r
            : mg;
        }
      }
      function Eg(e) {
        return X(e?.lift);
      }
      function xe(e) {
        return (n) => {
          if (Eg(n))
            return n.lift(function (t) {
              try {
                return e(t, this);
              } catch (r) {
                this.error(r);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
      function Oe(e, n, t, r, i) {
        return new cI(e, n, t, r, i);
      }
      class cI extends oc {
        constructor(n, t, r, i, s, o) {
          super(n),
            (this.onFinalize = s),
            (this.shouldUnsubscribe = o),
            (this._next = t
              ? function (a) {
                  try {
                    t(a);
                  } catch (l) {
                    n.error(l);
                  }
                }
              : super._next),
            (this._error = i
              ? function (a) {
                  try {
                    i(a);
                  } catch (l) {
                    n.error(l);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = r
              ? function () {
                  try {
                    r();
                  } catch (a) {
                    n.error(a);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var n;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: t } = this;
            super.unsubscribe(),
              !t &&
                (null === (n = this.onFinalize) ||
                  void 0 === n ||
                  n.call(this));
          }
        }
      }
      function ie(e, n) {
        return xe((t, r) => {
          let i = 0;
          t.subscribe(
            Oe(r, (s) => {
              r.next(e.call(n, s, i++));
            })
          );
        });
      }
      function Zn(e) {
        return this instanceof Zn ? ((this.v = e), this) : new Zn(e);
      }
      function Tg(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = (function hc(e) {
              var n = "function" == typeof Symbol && Symbol.iterator,
                t = n && e[n],
                r = 0;
              if (t) return t.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && r >= e.length && (e = void 0),
                      { value: e && e[r++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                n
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(s) {
          t[s] =
            e[s] &&
            function (o) {
              return new Promise(function (a, l) {
                !(function i(s, o, a, l) {
                  Promise.resolve(l).then(function (u) {
                    s({ value: u, done: a });
                  }, o);
                })(a, l, (o = e[s](o)).done, o.value);
              });
            };
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
      const pc = (e) =>
        e && "number" == typeof e.length && "function" != typeof e;
      function Mg(e) {
        return X(e?.then);
      }
      function Ag(e) {
        return X(e[uc]);
      }
      function Ng(e) {
        return Symbol.asyncIterator && X(e?.[Symbol.asyncIterator]);
      }
      function Rg(e) {
        return new TypeError(
          `You provided ${
            null !== e && "object" == typeof e ? "an invalid object" : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      const Og = (function OI() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
      function Pg(e) {
        return X(e?.[Og]);
      }
      function xg(e) {
        return (function Ig(e, n, t) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var i,
            r = t.apply(e, n || []),
            s = [];
          return (
            (i = {}),
            o("next"),
            o("throw"),
            o("return"),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i
          );
          function o(f) {
            r[f] &&
              (i[f] = function (h) {
                return new Promise(function (p, g) {
                  s.push([f, h, p, g]) > 1 || a(f, h);
                });
              });
          }
          function a(f, h) {
            try {
              !(function l(f) {
                f.value instanceof Zn
                  ? Promise.resolve(f.value.v).then(u, c)
                  : d(s[0][2], f);
              })(r[f](h));
            } catch (p) {
              d(s[0][3], p);
            }
          }
          function u(f) {
            a("next", f);
          }
          function c(f) {
            a("throw", f);
          }
          function d(f, h) {
            f(h), s.shift(), s.length && a(s[0][0], s[0][1]);
          }
        })(this, arguments, function* () {
          const t = e.getReader();
          try {
            for (;;) {
              const { value: r, done: i } = yield Zn(t.read());
              if (i) return yield Zn(void 0);
              yield yield Zn(r);
            }
          } finally {
            t.releaseLock();
          }
        });
      }
      function Fg(e) {
        return X(e?.getReader);
      }
      function mt(e) {
        if (e instanceof Se) return e;
        if (null != e) {
          if (Ag(e))
            return (function PI(e) {
              return new Se((n) => {
                const t = e[uc]();
                if (X(t.subscribe)) return t.subscribe(n);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(e);
          if (pc(e))
            return (function xI(e) {
              return new Se((n) => {
                for (let t = 0; t < e.length && !n.closed; t++) n.next(e[t]);
                n.complete();
              });
            })(e);
          if (Mg(e))
            return (function FI(e) {
              return new Se((n) => {
                e.then(
                  (t) => {
                    n.closed || (n.next(t), n.complete());
                  },
                  (t) => n.error(t)
                ).then(null, _g);
              });
            })(e);
          if (Ng(e)) return Lg(e);
          if (Pg(e))
            return (function LI(e) {
              return new Se((n) => {
                for (const t of e) if ((n.next(t), n.closed)) return;
                n.complete();
              });
            })(e);
          if (Fg(e))
            return (function kI(e) {
              return Lg(xg(e));
            })(e);
        }
        throw Rg(e);
      }
      function Lg(e) {
        return new Se((n) => {
          (function VI(e, n) {
            var t, r, i, s;
            return (function bg(e, n, t, r) {
              return new (t || (t = Promise))(function (s, o) {
                function a(c) {
                  try {
                    u(r.next(c));
                  } catch (d) {
                    o(d);
                  }
                }
                function l(c) {
                  try {
                    u(r.throw(c));
                  } catch (d) {
                    o(d);
                  }
                }
                function u(c) {
                  c.done
                    ? s(c.value)
                    : (function i(s) {
                        return s instanceof t
                          ? s
                          : new t(function (o) {
                              o(s);
                            });
                      })(c.value).then(a, l);
                }
                u((r = r.apply(e, n || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (t = Tg(e); !(r = yield t.next()).done; )
                  if ((n.next(r.value), n.closed)) return;
              } catch (o) {
                i = { error: o };
              } finally {
                try {
                  r && !r.done && (s = t.return) && (yield s.call(t));
                } finally {
                  if (i) throw i.error;
                }
              }
              n.complete();
            });
          })(e, n).catch((t) => n.error(t));
        });
      }
      function Nn(e, n, t, r = 0, i = !1) {
        const s = n.schedule(function () {
          t(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(s), !i)) return s;
      }
      function je(e, n, t = 1 / 0) {
        return X(n)
          ? je((r, i) => ie((s, o) => n(r, s, i, o))(mt(e(r, i))), t)
          : ("number" == typeof n && (t = n),
            xe((r, i) =>
              (function jI(e, n, t, r, i, s, o, a) {
                const l = [];
                let u = 0,
                  c = 0,
                  d = !1;
                const f = () => {
                    d && !l.length && !u && n.complete();
                  },
                  h = (g) => (u < r ? p(g) : l.push(g)),
                  p = (g) => {
                    s && n.next(g), u++;
                    let v = !1;
                    mt(t(g, c++)).subscribe(
                      Oe(
                        n,
                        (C) => {
                          i?.(C), s ? h(C) : n.next(C);
                        },
                        () => {
                          v = !0;
                        },
                        void 0,
                        () => {
                          if (v)
                            try {
                              for (u--; l.length && u < r; ) {
                                const C = l.shift();
                                o ? Nn(n, o, () => p(C)) : p(C);
                              }
                              f();
                            } catch (C) {
                              n.error(C);
                            }
                        }
                      )
                    );
                  };
                return (
                  e.subscribe(
                    Oe(n, h, () => {
                      (d = !0), f();
                    })
                  ),
                  () => {
                    a?.();
                  }
                );
              })(r, i, e, t)
            ));
      }
      function ti(e = 1 / 0) {
        return je(Qn, e);
      }
      const dn = new Se((e) => e.complete());
      function gc(e) {
        return e[e.length - 1];
      }
      function kg(e) {
        return X(gc(e)) ? e.pop() : void 0;
      }
      function ys(e) {
        return (function HI(e) {
          return e && X(e.schedule);
        })(gc(e))
          ? e.pop()
          : void 0;
      }
      function Vg(e, n = 0) {
        return xe((t, r) => {
          t.subscribe(
            Oe(
              r,
              (i) => Nn(r, e, () => r.next(i), n),
              () => Nn(r, e, () => r.complete(), n),
              (i) => Nn(r, e, () => r.error(i), n)
            )
          );
        });
      }
      function jg(e, n = 0) {
        return xe((t, r) => {
          r.add(e.schedule(() => t.subscribe(r), n));
        });
      }
      function Bg(e, n) {
        if (!e) throw new Error("Iterable cannot be null");
        return new Se((t) => {
          Nn(t, n, () => {
            const r = e[Symbol.asyncIterator]();
            Nn(
              t,
              n,
              () => {
                r.next().then((i) => {
                  i.done ? t.complete() : t.next(i.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      function Fe(e, n) {
        return n
          ? (function KI(e, n) {
              if (null != e) {
                if (Ag(e))
                  return (function $I(e, n) {
                    return mt(e).pipe(jg(n), Vg(n));
                  })(e, n);
                if (pc(e))
                  return (function GI(e, n) {
                    return new Se((t) => {
                      let r = 0;
                      return n.schedule(function () {
                        r === e.length
                          ? t.complete()
                          : (t.next(e[r++]), t.closed || this.schedule());
                      });
                    });
                  })(e, n);
                if (Mg(e))
                  return (function zI(e, n) {
                    return mt(e).pipe(jg(n), Vg(n));
                  })(e, n);
                if (Ng(e)) return Bg(e, n);
                if (Pg(e))
                  return (function WI(e, n) {
                    return new Se((t) => {
                      let r;
                      return (
                        Nn(t, n, () => {
                          (r = e[Og]()),
                            Nn(
                              t,
                              n,
                              () => {
                                let i, s;
                                try {
                                  ({ value: i, done: s } = r.next());
                                } catch (o) {
                                  return void t.error(o);
                                }
                                s ? t.complete() : t.next(i);
                              },
                              0,
                              !0
                            );
                        }),
                        () => X(r?.return) && r.return()
                      );
                    });
                  })(e, n);
                if (Fg(e))
                  return (function qI(e, n) {
                    return Bg(xg(e), n);
                  })(e, n);
              }
              throw Rg(e);
            })(e, n)
          : mt(e);
      }
      class Bt extends gt {
        constructor(n) {
          super(), (this._value = n);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(n) {
          const t = super._subscribe(n);
          return !t.closed && n.next(this._value), t;
        }
        getValue() {
          const { hasError: n, thrownError: t, _value: r } = this;
          if (n) throw t;
          return this._throwIfClosed(), r;
        }
        next(n) {
          super.next((this._value = n));
        }
      }
      function k(...e) {
        return Fe(e, ys(e));
      }
      function Hg(e = {}) {
        const {
          connector: n = () => new gt(),
          resetOnError: t = !0,
          resetOnComplete: r = !0,
          resetOnRefCountZero: i = !0,
        } = e;
        return (s) => {
          let o,
            a,
            l,
            u = 0,
            c = !1,
            d = !1;
          const f = () => {
              a?.unsubscribe(), (a = void 0);
            },
            h = () => {
              f(), (o = l = void 0), (c = d = !1);
            },
            p = () => {
              const g = o;
              h(), g?.unsubscribe();
            };
          return xe((g, v) => {
            u++, !d && !c && f();
            const C = (l = l ?? n());
            v.add(() => {
              u--, 0 === u && !d && !c && (a = mc(p, i));
            }),
              C.subscribe(v),
              !o &&
                u > 0 &&
                ((o = new ms({
                  next: (_) => C.next(_),
                  error: (_) => {
                    (d = !0), f(), (a = mc(h, t, _)), C.error(_);
                  },
                  complete: () => {
                    (c = !0), f(), (a = mc(h, r)), C.complete();
                  },
                })),
                mt(g).subscribe(o));
          })(s);
        };
      }
      function mc(e, n, ...t) {
        if (!0 === n) return void e();
        if (!1 === n) return;
        const r = new ms({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return mt(n(...t)).subscribe(r);
      }
      function Yt(e, n) {
        return xe((t, r) => {
          let i = null,
            s = 0,
            o = !1;
          const a = () => o && !i && r.complete();
          t.subscribe(
            Oe(
              r,
              (l) => {
                i?.unsubscribe();
                let u = 0;
                const c = s++;
                mt(e(l, c)).subscribe(
                  (i = Oe(
                    r,
                    (d) => r.next(n ? n(l, d, c, u++) : d),
                    () => {
                      (i = null), a();
                    }
                  ))
                );
              },
              () => {
                (o = !0), a();
              }
            )
          );
        });
      }
      function YI(e, n) {
        return e === n;
      }
      function ce(e) {
        for (let n in e) if (e[n] === ce) return n;
        throw Error("Could not find renamed property on target object.");
      }
      function pa(e, n) {
        for (const t in n)
          n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]);
      }
      function Le(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(Le).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const n = e.toString();
        if (null == n) return "" + n;
        const t = n.indexOf("\n");
        return -1 === t ? n : n.substring(0, t);
      }
      function yc(e, n) {
        return null == e || "" === e
          ? null === n
            ? ""
            : n
          : null == n || "" === n
          ? e
          : e + " " + n;
      }
      const XI = ce({ __forward_ref__: ce });
      function pe(e) {
        return (
          (e.__forward_ref__ = pe),
          (e.toString = function () {
            return Le(this());
          }),
          e
        );
      }
      function B(e) {
        return vc(e) ? e() : e;
      }
      function vc(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(XI) &&
          e.__forward_ref__ === pe
        );
      }
      function _c(e) {
        return e && !!e.ɵproviders;
      }
      const Ug = "https://g.co/ng/security#xss";
      class D extends Error {
        constructor(n, t) {
          super(
            (function ga(e, n) {
              return `NG0${Math.abs(e)}${n ? ": " + n : ""}`;
            })(n, t)
          ),
            (this.code = n);
        }
      }
      function U(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function Dc(e, n) {
        throw new D(-201, !1);
      }
      function Ht(e, n) {
        null == e &&
          (function V(e, n, t, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)
            );
          })(n, e, null, "!=");
      }
      function R(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function He(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function ma(e) {
        return $g(e, va) || $g(e, zg);
      }
      function $g(e, n) {
        return e.hasOwnProperty(n) ? e[n] : null;
      }
      function ya(e) {
        return e && (e.hasOwnProperty(Cc) || e.hasOwnProperty(oT))
          ? e[Cc]
          : null;
      }
      const va = ce({ ɵprov: ce }),
        Cc = ce({ ɵinj: ce }),
        zg = ce({ ngInjectableDef: ce }),
        oT = ce({ ngInjectorDef: ce });
      var Z = (function (e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })(Z || {});
      let wc;
      function yt(e) {
        const n = wc;
        return (wc = e), n;
      }
      function Wg(e, n, t) {
        const r = ma(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : t & Z.Optional
          ? null
          : void 0 !== n
          ? n
          : void Dc(Le(e));
      }
      const ge = globalThis,
        vs = {},
        Tc = "__NG_DI_FLAG__",
        _a = "ngTempTokenPath",
        uT = /\n/gm,
        Kg = "__source";
      let ni;
      function Yn(e) {
        const n = ni;
        return (ni = e), n;
      }
      function fT(e, n = Z.Default) {
        if (void 0 === ni) throw new D(-203, !1);
        return null === ni
          ? Wg(e, void 0, n)
          : ni.get(e, n & Z.Optional ? null : void 0, n);
      }
      function A(e, n = Z.Default) {
        return (
          (function Gg() {
            return wc;
          })() || fT
        )(B(e), n);
      }
      function T(e, n = Z.Default) {
        return A(e, Da(n));
      }
      function Da(e) {
        return typeof e > "u" || "number" == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Mc(e) {
        const n = [];
        for (let t = 0; t < e.length; t++) {
          const r = B(e[t]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new D(900, !1);
            let i,
              s = Z.Default;
            for (let o = 0; o < r.length; o++) {
              const a = r[o],
                l = hT(a);
              "number" == typeof l
                ? -1 === l
                  ? (i = a.token)
                  : (s |= l)
                : (i = a);
            }
            n.push(A(i, s));
          } else n.push(A(r));
        }
        return n;
      }
      function _s(e, n) {
        return (e[Tc] = n), (e.prototype[Tc] = n), e;
      }
      function hT(e) {
        return e[Tc];
      }
      function Rn(e) {
        return { toString: e }.toString();
      }
      var Ca = (function (e) {
          return (
            (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e
          );
        })(Ca || {}),
        Ut = (function (e) {
          return (
            (e[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            e
          );
        })(Ut || {});
      const fn = {},
        re = [],
        wa = ce({ ɵcmp: ce }),
        Ac = ce({ ɵdir: ce }),
        Nc = ce({ ɵpipe: ce }),
        Zg = ce({ ɵmod: ce }),
        On = ce({ ɵfac: ce }),
        Ds = ce({ __NG_ELEMENT_ID__: ce }),
        Yg = ce({ __NG_ENV_ID__: ce });
      function Xg(e, n, t) {
        let r = e.length;
        for (;;) {
          const i = e.indexOf(n, t);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            const s = n.length;
            if (i + s === r || e.charCodeAt(i + s) <= 32) return i;
          }
          t = i + 1;
        }
      }
      function Rc(e, n, t) {
        let r = 0;
        for (; r < t.length; ) {
          const i = t[r];
          if ("number" == typeof i) {
            if (0 !== i) break;
            r++;
            const s = t[r++],
              o = t[r++],
              a = t[r++];
            e.setAttribute(n, o, a, s);
          } else {
            const s = i,
              o = t[++r];
            em(s) ? e.setProperty(n, s, o) : e.setAttribute(n, s, o), r++;
          }
        }
        return r;
      }
      function Jg(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function em(e) {
        return 64 === e.charCodeAt(0);
      }
      function Cs(e, n) {
        if (null !== n && 0 !== n.length)
          if (null === e || 0 === e.length) e = n.slice();
          else {
            let t = -1;
            for (let r = 0; r < n.length; r++) {
              const i = n[r];
              "number" == typeof i
                ? (t = i)
                : 0 === t ||
                  tm(e, t, i, null, -1 === t || 2 === t ? n[++r] : null);
            }
          }
        return e;
      }
      function tm(e, n, t, r, i) {
        let s = 0,
          o = e.length;
        if (-1 === n) o = -1;
        else
          for (; s < e.length; ) {
            const a = e[s++];
            if ("number" == typeof a) {
              if (a === n) {
                o = -1;
                break;
              }
              if (a > n) {
                o = s - 1;
                break;
              }
            }
          }
        for (; s < e.length; ) {
          const a = e[s];
          if ("number" == typeof a) break;
          if (a === t) {
            if (null === r) return void (null !== i && (e[s + 1] = i));
            if (r === e[s + 1]) return void (e[s + 2] = i);
          }
          s++, null !== r && s++, null !== i && s++;
        }
        -1 !== o && (e.splice(o, 0, n), (s = o + 1)),
          e.splice(s++, 0, t),
          null !== r && e.splice(s++, 0, r),
          null !== i && e.splice(s++, 0, i);
      }
      const nm = "ng-template";
      function mT(e, n, t) {
        let r = 0,
          i = !0;
        for (; r < e.length; ) {
          let s = e[r++];
          if ("string" == typeof s && i) {
            const o = e[r++];
            if (t && "class" === s && -1 !== Xg(o.toLowerCase(), n, 0))
              return !0;
          } else {
            if (1 === s) {
              for (; r < e.length && "string" == typeof (s = e[r++]); )
                if (s.toLowerCase() === n) return !0;
              return !1;
            }
            "number" == typeof s && (i = !1);
          }
        }
        return !1;
      }
      function rm(e) {
        return 4 === e.type && e.value !== nm;
      }
      function yT(e, n, t) {
        return n === (4 !== e.type || t ? e.value : nm);
      }
      function vT(e, n, t) {
        let r = 4;
        const i = e.attrs || [],
          s = (function CT(e) {
            for (let n = 0; n < e.length; n++) if (Jg(e[n])) return n;
            return e.length;
          })(i);
        let o = !1;
        for (let a = 0; a < n.length; a++) {
          const l = n[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== l && !yT(e, l, t)) || ("" === l && 1 === n.length))
                ) {
                  if (Xt(r)) return !1;
                  o = !0;
                }
              } else {
                const u = 8 & r ? l : n[++a];
                if (8 & r && null !== e.attrs) {
                  if (!mT(e.attrs, u, t)) {
                    if (Xt(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const d = _T(8 & r ? "class" : l, i, rm(e), t);
                if (-1 === d) {
                  if (Xt(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== u) {
                  let f;
                  f = d > s ? "" : i[d + 1].toLowerCase();
                  const h = 8 & r ? f : null;
                  if ((h && -1 !== Xg(h, u, 0)) || (2 & r && u !== f)) {
                    if (Xt(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !Xt(r) && !Xt(l)) return !1;
            if (o && Xt(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return Xt(r) || o;
      }
      function Xt(e) {
        return 0 == (1 & e);
      }
      function _T(e, n, t, r) {
        if (null === n) return -1;
        let i = 0;
        if (r || !t) {
          let s = !1;
          for (; i < n.length; ) {
            const o = n[i];
            if (o === e) return i;
            if (3 === o || 6 === o) s = !0;
            else {
              if (1 === o || 2 === o) {
                let a = n[++i];
                for (; "string" == typeof a; ) a = n[++i];
                continue;
              }
              if (4 === o) break;
              if (0 === o) {
                i += 4;
                continue;
              }
            }
            i += s ? 1 : 2;
          }
          return -1;
        }
        return (function wT(e, n) {
          let t = e.indexOf(4);
          if (t > -1)
            for (t++; t < e.length; ) {
              const r = e[t];
              if ("number" == typeof r) return -1;
              if (r === n) return t;
              t++;
            }
          return -1;
        })(n, e);
      }
      function im(e, n, t = !1) {
        for (let r = 0; r < n.length; r++) if (vT(e, n[r], t)) return !0;
        return !1;
      }
      function ET(e, n) {
        e: for (let t = 0; t < n.length; t++) {
          const r = n[t];
          if (e.length === r.length) {
            for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function sm(e, n) {
        return e ? ":not(" + n.trim() + ")" : n;
      }
      function bT(e) {
        let n = e[0],
          t = 1,
          r = 2,
          i = "",
          s = !1;
        for (; t < e.length; ) {
          let o = e[t];
          if ("string" == typeof o)
            if (2 & r) {
              const a = e[++t];
              i += "[" + o + (a.length > 0 ? '="' + a + '"' : "") + "]";
            } else 8 & r ? (i += "." + o) : 4 & r && (i += " " + o);
          else
            "" !== i && !Xt(o) && ((n += sm(s, i)), (i = "")),
              (r = o),
              (s = s || !Xt(r));
          t++;
        }
        return "" !== i && (n += sm(s, i)), n;
      }
      function Ue(e) {
        return Rn(() => {
          const n = am(e),
            t = {
              ...n,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === Ca.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (n.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || Ut.Emulated,
              styles: e.styles || re,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: "",
            };
          lm(t);
          const r = e.dependencies;
          return (
            (t.directiveDefs = Ea(r, !1)),
            (t.pipeDefs = Ea(r, !0)),
            (t.id = (function OT(e) {
              let n = 0;
              const t = [
                e.selectors,
                e.ngContentSelectors,
                e.hostVars,
                e.hostAttrs,
                e.consts,
                e.vars,
                e.decls,
                e.encapsulation,
                e.standalone,
                e.signals,
                e.exportAs,
                JSON.stringify(e.inputs),
                JSON.stringify(e.outputs),
                Object.getOwnPropertyNames(e.type.prototype),
                !!e.contentQueries,
                !!e.viewQuery,
              ].join("|");
              for (const i of t) n = (Math.imul(31, n) + i.charCodeAt(0)) << 0;
              return (n += 2147483648), "c" + n;
            })(t)),
            t
          );
        });
      }
      function MT(e) {
        return J(e) || $e(e);
      }
      function AT(e) {
        return null !== e;
      }
      function Xe(e) {
        return Rn(() => ({
          type: e.type,
          bootstrap: e.bootstrap || re,
          declarations: e.declarations || re,
          imports: e.imports || re,
          exports: e.exports || re,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function om(e, n) {
        if (null == e) return fn;
        const t = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let i = e[r],
              s = i;
            Array.isArray(i) && ((s = i[1]), (i = i[0])),
              (t[i] = r),
              n && (n[i] = s);
          }
        return t;
      }
      function F(e) {
        return Rn(() => {
          const n = am(e);
          return lm(n), n;
        });
      }
      function J(e) {
        return e[wa] || null;
      }
      function $e(e) {
        return e[Ac] || null;
      }
      function ot(e) {
        return e[Nc] || null;
      }
      function Mt(e, n) {
        const t = e[Zg] || null;
        if (!t && !0 === n)
          throw new Error(`Type ${Le(e)} does not have '\u0275mod' property.`);
        return t;
      }
      function am(e) {
        const n = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: n,
          inputTransforms: null,
          inputConfig: e.inputs || fn,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || re,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: om(e.inputs, n),
          outputs: om(e.outputs),
        };
      }
      function lm(e) {
        e.features?.forEach((n) => n(e));
      }
      function Ea(e, n) {
        if (!e) return null;
        const t = n ? ot : MT;
        return () =>
          ("function" == typeof e ? e() : e).map((r) => t(r)).filter(AT);
      }
      const Ie = 0,
        I = 1,
        q = 2,
        Ce = 3,
        Jt = 4,
        ws = 5,
        Je = 6,
        ii = 7,
        Ae = 8,
        Xn = 9,
        si = 10,
        z = 11,
        Es = 12,
        um = 13,
        oi = 14,
        Ne = 15,
        bs = 16,
        ai = 17,
        hn = 18,
        Ss = 19,
        cm = 20,
        Jn = 21,
        Pn = 22,
        Is = 23,
        Ts = 24,
        Y = 25,
        Oc = 1,
        dm = 2,
        pn = 7,
        li = 9,
        ze = 11;
      function _t(e) {
        return Array.isArray(e) && "object" == typeof e[Oc];
      }
      function at(e) {
        return Array.isArray(e) && !0 === e[Oc];
      }
      function Pc(e) {
        return 0 != (4 & e.flags);
      }
      function Tr(e) {
        return e.componentOffset > -1;
      }
      function Sa(e) {
        return 1 == (1 & e.flags);
      }
      function en(e) {
        return !!e.template;
      }
      function xc(e) {
        return 0 != (512 & e[q]);
      }
      function Mr(e, n) {
        return e.hasOwnProperty(On) ? e[On] : null;
      }
      let Ge = null,
        Ia = !1;
      function $t(e) {
        const n = Ge;
        return (Ge = e), n;
      }
      const pm = {
        version: 0,
        dirty: !1,
        producerNode: void 0,
        producerLastReadVersion: void 0,
        producerIndexOfThis: void 0,
        nextProducerIndex: 0,
        liveConsumerNode: void 0,
        liveConsumerIndexOfThis: void 0,
        consumerAllowSignalWrites: !1,
        consumerIsAlwaysLive: !1,
        producerMustRecompute: () => !1,
        producerRecomputeValue: () => {},
        consumerMarkedDirty: () => {},
      };
      function mm(e) {
        if (!As(e) || e.dirty) {
          if (!e.producerMustRecompute(e) && !_m(e)) return void (e.dirty = !1);
          e.producerRecomputeValue(e), (e.dirty = !1);
        }
      }
      function vm(e) {
        (e.dirty = !0),
          (function ym(e) {
            if (void 0 === e.liveConsumerNode) return;
            const n = Ia;
            Ia = !0;
            try {
              for (const t of e.liveConsumerNode) t.dirty || vm(t);
            } finally {
              Ia = n;
            }
          })(e),
          e.consumerMarkedDirty?.(e);
      }
      function Lc(e) {
        return e && (e.nextProducerIndex = 0), $t(e);
      }
      function kc(e, n) {
        if (
          ($t(n),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if (As(e))
            for (let t = e.nextProducerIndex; t < e.producerNode.length; t++)
              Ta(e.producerNode[t], e.producerIndexOfThis[t]);
          for (; e.producerNode.length > e.nextProducerIndex; )
            e.producerNode.pop(),
              e.producerLastReadVersion.pop(),
              e.producerIndexOfThis.pop();
        }
      }
      function _m(e) {
        ui(e);
        for (let n = 0; n < e.producerNode.length; n++) {
          const t = e.producerNode[n],
            r = e.producerLastReadVersion[n];
          if (r !== t.version || (mm(t), r !== t.version)) return !0;
        }
        return !1;
      }
      function Dm(e) {
        if ((ui(e), As(e)))
          for (let n = 0; n < e.producerNode.length; n++)
            Ta(e.producerNode[n], e.producerIndexOfThis[n]);
        (e.producerNode.length =
          e.producerLastReadVersion.length =
          e.producerIndexOfThis.length =
            0),
          e.liveConsumerNode &&
            (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
      }
      function Ta(e, n) {
        if (
          ((function wm(e) {
            (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
          })(e),
          ui(e),
          1 === e.liveConsumerNode.length)
        )
          for (let r = 0; r < e.producerNode.length; r++)
            Ta(e.producerNode[r], e.producerIndexOfThis[r]);
        const t = e.liveConsumerNode.length - 1;
        if (
          ((e.liveConsumerNode[n] = e.liveConsumerNode[t]),
          (e.liveConsumerIndexOfThis[n] = e.liveConsumerIndexOfThis[t]),
          e.liveConsumerNode.length--,
          e.liveConsumerIndexOfThis.length--,
          n < e.liveConsumerNode.length)
        ) {
          const r = e.liveConsumerIndexOfThis[n],
            i = e.liveConsumerNode[n];
          ui(i), (i.producerIndexOfThis[r] = n);
        }
      }
      function As(e) {
        return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
      }
      function ui(e) {
        (e.producerNode ??= []),
          (e.producerIndexOfThis ??= []),
          (e.producerLastReadVersion ??= []);
      }
      let Em = null;
      const Tm = () => {},
        GT = (() => ({
          ...pm,
          consumerIsAlwaysLive: !0,
          consumerAllowSignalWrites: !1,
          consumerMarkedDirty: (e) => {
            e.schedule(e.ref);
          },
          hasRun: !1,
          cleanupFn: Tm,
        }))();
      class WT {
        constructor(n, t, r) {
          (this.previousValue = n),
            (this.currentValue = t),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function zt() {
        return Mm;
      }
      function Mm(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = KT), qT;
      }
      function qT() {
        const e = Nm(this),
          n = e?.current;
        if (n) {
          const t = e.previous;
          if (t === fn) e.previous = n;
          else for (let r in n) t[r] = n[r];
          (e.current = null), this.ngOnChanges(n);
        }
      }
      function KT(e, n, t, r) {
        const i = this.declaredInputs[t],
          s =
            Nm(e) ||
            (function QT(e, n) {
              return (e[Am] = n);
            })(e, { previous: fn, current: null }),
          o = s.current || (s.current = {}),
          a = s.previous,
          l = a[i];
        (o[i] = new WT(l && l.currentValue, n, a === fn)), (e[r] = n);
      }
      zt.ngInherit = !0;
      const Am = "__ngSimpleChanges__";
      function Nm(e) {
        return e[Am] || null;
      }
      const gn = function (e, n, t) {};
      function me(e) {
        for (; Array.isArray(e); ) e = e[Ie];
        return e;
      }
      function Ma(e, n) {
        return me(n[e]);
      }
      function Dt(e, n) {
        return me(n[e.index]);
      }
      function Pm(e, n) {
        return e.data[n];
      }
      function At(e, n) {
        const t = n[e];
        return _t(t) ? t : t[Ie];
      }
      function tr(e, n) {
        return null == n ? null : e[n];
      }
      function xm(e) {
        e[ai] = 0;
      }
      function t1(e) {
        1024 & e[q] || ((e[q] |= 1024), Lm(e, 1));
      }
      function Fm(e) {
        1024 & e[q] && ((e[q] &= -1025), Lm(e, -1));
      }
      function Lm(e, n) {
        let t = e[Ce];
        if (null === t) return;
        t[ws] += n;
        let r = t;
        for (
          t = t[Ce];
          null !== t && ((1 === n && 1 === r[ws]) || (-1 === n && 0 === r[ws]));

        )
          (t[ws] += n), (r = t), (t = t[Ce]);
      }
      const j = {
        lFrame: qm(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      function jm() {
        return j.bindingsEnabled;
      }
      function di() {
        return null !== j.skipHydrationRootTNode;
      }
      function E() {
        return j.lFrame.lView;
      }
      function ee() {
        return j.lFrame.tView;
      }
      function nr(e) {
        return (j.lFrame.contextLView = e), e[Ae];
      }
      function rr(e) {
        return (j.lFrame.contextLView = null), e;
      }
      function We() {
        let e = Bm();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Bm() {
        return j.lFrame.currentTNode;
      }
      function mn(e, n) {
        const t = j.lFrame;
        (t.currentTNode = e), (t.isParent = n);
      }
      function Uc() {
        return j.lFrame.isParent;
      }
      function $c() {
        j.lFrame.isParent = !1;
      }
      function lt() {
        const e = j.lFrame;
        let n = e.bindingRootIndex;
        return (
          -1 === n && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n
        );
      }
      function fi() {
        return j.lFrame.bindingIndex++;
      }
      function Fn(e) {
        const n = j.lFrame,
          t = n.bindingIndex;
        return (n.bindingIndex = n.bindingIndex + e), t;
      }
      function h1(e, n) {
        const t = j.lFrame;
        (t.bindingIndex = t.bindingRootIndex = e), zc(n);
      }
      function zc(e) {
        j.lFrame.currentDirectiveIndex = e;
      }
      function zm() {
        return j.lFrame.currentQueryIndex;
      }
      function Wc(e) {
        j.lFrame.currentQueryIndex = e;
      }
      function g1(e) {
        const n = e[I];
        return 2 === n.type ? n.declTNode : 1 === n.type ? e[Je] : null;
      }
      function Gm(e, n, t) {
        if (t & Z.SkipSelf) {
          let i = n,
            s = e;
          for (
            ;
            !((i = i.parent),
            null !== i ||
              t & Z.Host ||
              ((i = g1(s)), null === i || ((s = s[oi]), 10 & i.type)));

          );
          if (null === i) return !1;
          (n = i), (e = s);
        }
        const r = (j.lFrame = Wm());
        return (r.currentTNode = n), (r.lView = e), !0;
      }
      function qc(e) {
        const n = Wm(),
          t = e[I];
        (j.lFrame = n),
          (n.currentTNode = t.firstChild),
          (n.lView = e),
          (n.tView = t),
          (n.contextLView = e),
          (n.bindingIndex = t.bindingStartIndex),
          (n.inI18n = !1);
      }
      function Wm() {
        const e = j.lFrame,
          n = null === e ? null : e.child;
        return null === n ? qm(e) : n;
      }
      function qm(e) {
        const n = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = n), n;
      }
      function Km() {
        const e = j.lFrame;
        return (
          (j.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Qm = Km;
      function Kc() {
        const e = Km();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function ut() {
        return j.lFrame.selectedIndex;
      }
      function Ar(e) {
        j.lFrame.selectedIndex = e;
      }
      function Ee() {
        const e = j.lFrame;
        return Pm(e.tView, e.selectedIndex);
      }
      function hi() {
        j.lFrame.currentNamespace = "svg";
      }
      let Ym = !0;
      function Aa() {
        return Ym;
      }
      function ir(e) {
        Ym = e;
      }
      function Na(e, n) {
        for (let t = n.directiveStart, r = n.directiveEnd; t < r; t++) {
          const s = e.data[t].type.prototype,
            {
              ngAfterContentInit: o,
              ngAfterContentChecked: a,
              ngAfterViewInit: l,
              ngAfterViewChecked: u,
              ngOnDestroy: c,
            } = s;
          o && (e.contentHooks ??= []).push(-t, o),
            a &&
              ((e.contentHooks ??= []).push(t, a),
              (e.contentCheckHooks ??= []).push(t, a)),
            l && (e.viewHooks ??= []).push(-t, l),
            u &&
              ((e.viewHooks ??= []).push(t, u),
              (e.viewCheckHooks ??= []).push(t, u)),
            null != c && (e.destroyHooks ??= []).push(t, c);
        }
      }
      function Ra(e, n, t) {
        Xm(e, n, 3, t);
      }
      function Oa(e, n, t, r) {
        (3 & e[q]) === t && Xm(e, n, t, r);
      }
      function Qc(e, n) {
        let t = e[q];
        (3 & t) === n && ((t &= 8191), (t += 1), (e[q] = t));
      }
      function Xm(e, n, t, r) {
        const s = r ?? -1,
          o = n.length - 1;
        let a = 0;
        for (let l = void 0 !== r ? 65535 & e[ai] : 0; l < o; l++)
          if ("number" == typeof n[l + 1]) {
            if (((a = n[l]), null != r && a >= r)) break;
          } else
            n[l] < 0 && (e[ai] += 65536),
              (a < s || -1 == s) &&
                (w1(e, t, n, l), (e[ai] = (4294901760 & e[ai]) + l + 2)),
              l++;
      }
      function Jm(e, n) {
        gn(4, e, n);
        const t = $t(null);
        try {
          n.call(e);
        } finally {
          $t(t), gn(5, e, n);
        }
      }
      function w1(e, n, t, r) {
        const i = t[r] < 0,
          s = t[r + 1],
          a = e[i ? -t[r] : t[r]];
        i
          ? e[q] >> 13 < e[ai] >> 16 &&
            (3 & e[q]) === n &&
            ((e[q] += 8192), Jm(a, s))
          : Jm(a, s);
      }
      const pi = -1;
      class Rs {
        constructor(n, t, r) {
          (this.factory = n),
            (this.resolving = !1),
            (this.canSeeViewProviders = t),
            (this.injectImpl = r);
        }
      }
      function Yc(e) {
        return e !== pi;
      }
      function Os(e) {
        return 32767 & e;
      }
      function Ps(e, n) {
        let t = (function I1(e) {
            return e >> 16;
          })(e),
          r = n;
        for (; t > 0; ) (r = r[oi]), t--;
        return r;
      }
      let Xc = !0;
      function Pa(e) {
        const n = Xc;
        return (Xc = e), n;
      }
      const ey = 255,
        ty = 5;
      let T1 = 0;
      const yn = {};
      function xa(e, n) {
        const t = ny(e, n);
        if (-1 !== t) return t;
        const r = n[I];
        r.firstCreatePass &&
          ((e.injectorIndex = n.length),
          Jc(r.data, e),
          Jc(n, null),
          Jc(r.blueprint, null));
        const i = Fa(e, n),
          s = e.injectorIndex;
        if (Yc(i)) {
          const o = Os(i),
            a = Ps(i, n),
            l = a[I].data;
          for (let u = 0; u < 8; u++) n[s + u] = a[o + u] | l[o + u];
        }
        return (n[s + 8] = i), s;
      }
      function Jc(e, n) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, n);
      }
      function ny(e, n) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === n[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Fa(e, n) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let t = 0,
          r = null,
          i = n;
        for (; null !== i; ) {
          if (((r = uy(i)), null === r)) return pi;
          if ((t++, (i = i[oi]), -1 !== r.injectorIndex))
            return r.injectorIndex | (t << 16);
        }
        return pi;
      }
      function ed(e, n, t) {
        !(function M1(e, n, t) {
          let r;
          "string" == typeof t
            ? (r = t.charCodeAt(0) || 0)
            : t.hasOwnProperty(Ds) && (r = t[Ds]),
            null == r && (r = t[Ds] = T1++);
          const i = r & ey;
          n.data[e + (i >> ty)] |= 1 << i;
        })(e, n, t);
      }
      function ry(e, n, t) {
        if (t & Z.Optional || void 0 !== e) return e;
        Dc();
      }
      function iy(e, n, t, r) {
        if (
          (t & Z.Optional && void 0 === r && (r = null),
          !(t & (Z.Self | Z.Host)))
        ) {
          const i = e[Xn],
            s = yt(void 0);
          try {
            return i ? i.get(n, r, t & Z.Optional) : Wg(n, r, t & Z.Optional);
          } finally {
            yt(s);
          }
        }
        return ry(r, 0, t);
      }
      function sy(e, n, t, r = Z.Default, i) {
        if (null !== e) {
          if (2048 & n[q] && !(r & Z.Self)) {
            const o = (function x1(e, n, t, r, i) {
              let s = e,
                o = n;
              for (
                ;
                null !== s && null !== o && 2048 & o[q] && !(512 & o[q]);

              ) {
                const a = oy(s, o, t, r | Z.Self, yn);
                if (a !== yn) return a;
                let l = s.parent;
                if (!l) {
                  const u = o[cm];
                  if (u) {
                    const c = u.get(t, yn, r);
                    if (c !== yn) return c;
                  }
                  (l = uy(o)), (o = o[oi]);
                }
                s = l;
              }
              return i;
            })(e, n, t, r, yn);
            if (o !== yn) return o;
          }
          const s = oy(e, n, t, r, yn);
          if (s !== yn) return s;
        }
        return iy(n, t, r, i);
      }
      function oy(e, n, t, r, i) {
        const s = (function R1(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const n = e.hasOwnProperty(Ds) ? e[Ds] : void 0;
          return "number" == typeof n ? (n >= 0 ? n & ey : P1) : n;
        })(t);
        if ("function" == typeof s) {
          if (!Gm(n, e, r)) return r & Z.Host ? ry(i, 0, r) : iy(n, t, r, i);
          try {
            let o;
            if (((o = s(r)), null != o || r & Z.Optional)) return o;
            Dc();
          } finally {
            Qm();
          }
        } else if ("number" == typeof s) {
          let o = null,
            a = ny(e, n),
            l = pi,
            u = r & Z.Host ? n[Ne][Je] : null;
          for (
            (-1 === a || r & Z.SkipSelf) &&
            ((l = -1 === a ? Fa(e, n) : n[a + 8]),
            l !== pi && ly(r, !1)
              ? ((o = n[I]), (a = Os(l)), (n = Ps(l, n)))
              : (a = -1));
            -1 !== a;

          ) {
            const c = n[I];
            if (ay(s, a, c.data)) {
              const d = N1(a, n, t, o, r, u);
              if (d !== yn) return d;
            }
            (l = n[a + 8]),
              l !== pi && ly(r, n[I].data[a + 8] === u) && ay(s, a, n)
                ? ((o = c), (a = Os(l)), (n = Ps(l, n)))
                : (a = -1);
          }
        }
        return i;
      }
      function N1(e, n, t, r, i, s) {
        const o = n[I],
          a = o.data[e + 8],
          c = La(
            a,
            o,
            t,
            null == r ? Tr(a) && Xc : r != o && 0 != (3 & a.type),
            i & Z.Host && s === a
          );
        return null !== c ? Nr(n, o, c, a) : yn;
      }
      function La(e, n, t, r, i) {
        const s = e.providerIndexes,
          o = n.data,
          a = 1048575 & s,
          l = e.directiveStart,
          c = s >> 20,
          f = i ? a + c : e.directiveEnd;
        for (let h = r ? a : a + c; h < f; h++) {
          const p = o[h];
          if ((h < l && t === p) || (h >= l && p.type === t)) return h;
        }
        if (i) {
          const h = o[l];
          if (h && en(h) && h.type === t) return l;
        }
        return null;
      }
      function Nr(e, n, t, r) {
        let i = e[t];
        const s = n.data;
        if (
          (function E1(e) {
            return e instanceof Rs;
          })(i)
        ) {
          const o = i;
          o.resolving &&
            (function JI(e, n) {
              const t = n ? `. Dependency path: ${n.join(" > ")} > ${e}` : "";
              throw new D(
                -200,
                `Circular dependency in DI detected for ${e}${t}`
              );
            })(
              (function ae(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                    null != e &&
                    "function" == typeof e.type
                  ? e.type.name || e.type.toString()
                  : U(e);
              })(s[t])
            );
          const a = Pa(o.canSeeViewProviders);
          o.resolving = !0;
          const u = o.injectImpl ? yt(o.injectImpl) : null;
          Gm(e, r, Z.Default);
          try {
            (i = e[t] = o.factory(void 0, s, e, r)),
              n.firstCreatePass &&
                t >= r.directiveStart &&
                (function C1(e, n, t) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: i,
                    ngDoCheck: s,
                  } = n.type.prototype;
                  if (r) {
                    const o = Mm(n);
                    (t.preOrderHooks ??= []).push(e, o),
                      (t.preOrderCheckHooks ??= []).push(e, o);
                  }
                  i && (t.preOrderHooks ??= []).push(0 - e, i),
                    s &&
                      ((t.preOrderHooks ??= []).push(e, s),
                      (t.preOrderCheckHooks ??= []).push(e, s));
                })(t, s[t], n);
          } finally {
            null !== u && yt(u), Pa(a), (o.resolving = !1), Qm();
          }
        }
        return i;
      }
      function ay(e, n, t) {
        return !!(t[n + (e >> ty)] & (1 << e));
      }
      function ly(e, n) {
        return !(e & Z.Self || (e & Z.Host && n));
      }
      class ct {
        constructor(n, t) {
          (this._tNode = n), (this._lView = t);
        }
        get(n, t, r) {
          return sy(this._tNode, this._lView, n, Da(r), t);
        }
      }
      function P1() {
        return new ct(We(), E());
      }
      function Te(e) {
        return Rn(() => {
          const n = e.prototype.constructor,
            t = n[On] || td(n),
            r = Object.prototype;
          let i = Object.getPrototypeOf(e.prototype).constructor;
          for (; i && i !== r; ) {
            const s = i[On] || td(i);
            if (s && s !== t) return s;
            i = Object.getPrototypeOf(i);
          }
          return (s) => new s();
        });
      }
      function td(e) {
        return vc(e)
          ? () => {
              const n = td(B(e));
              return n && n();
            }
          : Mr(e);
      }
      function uy(e) {
        const n = e[I],
          t = n.type;
        return 2 === t ? n.declTNode : 1 === t ? e[Je] : null;
      }
      const mi = "__parameters__";
      function vi(e, n, t) {
        return Rn(() => {
          const r = (function nd(e) {
            return function (...t) {
              if (e) {
                const r = e(...t);
                for (const i in r) this[i] = r[i];
              }
            };
          })(n);
          function i(...s) {
            if (this instanceof i) return r.apply(this, s), this;
            const o = new i(...s);
            return (a.annotation = o), a;
            function a(l, u, c) {
              const d = l.hasOwnProperty(mi)
                ? l[mi]
                : Object.defineProperty(l, mi, { value: [] })[mi];
              for (; d.length <= c; ) d.push(null);
              return (d[c] = d[c] || []).push(o), l;
            }
          }
          return (
            t && (i.prototype = Object.create(t.prototype)),
            (i.prototype.ngMetadataName = e),
            (i.annotationCls = i),
            i
          );
        });
      }
      function Di(e, n) {
        e.forEach((t) => (Array.isArray(t) ? Di(t, n) : n(t)));
      }
      function dy(e, n, t) {
        n >= e.length ? e.push(t) : e.splice(n, 0, t);
      }
      function Va(e, n) {
        return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0];
      }
      function Ls(e, n) {
        const t = [];
        for (let r = 0; r < e; r++) t.push(n);
        return t;
      }
      function Nt(e, n, t) {
        let r = Ci(e, n);
        return (
          r >= 0
            ? (e[1 | r] = t)
            : ((r = ~r),
              (function H1(e, n, t, r) {
                let i = e.length;
                if (i == n) e.push(t, r);
                else if (1 === i) e.push(r, e[0]), (e[0] = t);
                else {
                  for (i--, e.push(e[i - 1], e[i]); i > n; )
                    (e[i] = e[i - 2]), i--;
                  (e[n] = t), (e[n + 1] = r);
                }
              })(e, r, n, t)),
          r
        );
      }
      function rd(e, n) {
        const t = Ci(e, n);
        if (t >= 0) return e[1 | t];
      }
      function Ci(e, n) {
        return (function fy(e, n, t) {
          let r = 0,
            i = e.length >> t;
          for (; i !== r; ) {
            const s = r + ((i - r) >> 1),
              o = e[s << t];
            if (n === o) return s << t;
            o > n ? (i = s) : (r = s + 1);
          }
          return ~(i << t);
        })(e, n, 1);
      }
      const Ba = _s(vi("Optional"), 8),
        Ha = _s(vi("SkipSelf"), 4);
      function Wa(e) {
        return 128 == (128 & e.flags);
      }
      var sr = (function (e) {
        return (
          (e[(e.Important = 1)] = "Important"),
          (e[(e.DashCase = 2)] = "DashCase"),
          e
        );
      })(sr || {});
      const lM = /^>|^->|<!--|-->|--!>|<!-$/g,
        uM = /(<|>)/g,
        cM = "\u200b$1\u200b";
      const ld = new Map();
      let dM = 0;
      const cd = "__ngContext__";
      function et(e, n) {
        _t(n)
          ? ((e[cd] = n[Ss]),
            (function hM(e) {
              ld.set(e[Ss], e);
            })(n))
          : (e[cd] = n);
      }
      let dd;
      function fd(e, n) {
        return dd(e, n);
      }
      function js(e) {
        const n = e[Ce];
        return at(n) ? n[Ce] : n;
      }
      function Oy(e) {
        return xy(e[Es]);
      }
      function Py(e) {
        return xy(e[Jt]);
      }
      function xy(e) {
        for (; null !== e && !at(e); ) e = e[Jt];
        return e;
      }
      function bi(e, n, t, r, i) {
        if (null != r) {
          let s,
            o = !1;
          at(r) ? (s = r) : _t(r) && ((o = !0), (r = r[Ie]));
          const a = me(r);
          0 === e && null !== t
            ? null == i
              ? Vy(n, t, a)
              : Rr(n, t, a, i || null, !0)
            : 1 === e && null !== t
            ? Rr(n, t, a, i || null, !0)
            : 2 === e
            ? (function Ja(e, n, t) {
                const r = Ya(e, n);
                r &&
                  (function OM(e, n, t, r) {
                    e.removeChild(n, t, r);
                  })(e, r, n, t);
              })(n, a, o)
            : 3 === e && n.destroyNode(a),
            null != s &&
              (function FM(e, n, t, r, i) {
                const s = t[pn];
                s !== me(t) && bi(n, e, r, s, i);
                for (let a = ze; a < t.length; a++) {
                  const l = t[a];
                  Hs(l[I], l, e, n, r, s);
                }
              })(n, e, s, t, i);
        }
      }
      function hd(e, n) {
        return e.createComment(
          (function by(e) {
            return e.replace(lM, (n) => n.replace(uM, cM));
          })(n)
        );
      }
      function Qa(e, n, t) {
        return e.createElement(n, t);
      }
      function Ly(e, n) {
        const t = e[li],
          r = t.indexOf(n);
        Fm(n), t.splice(r, 1);
      }
      function Za(e, n) {
        if (e.length <= ze) return;
        const t = ze + n,
          r = e[t];
        if (r) {
          const i = r[bs];
          null !== i && i !== e && Ly(i, r), n > 0 && (e[t - 1][Jt] = r[Jt]);
          const s = Va(e, ze + n);
          !(function bM(e, n) {
            Hs(e, n, n[z], 2, null, null), (n[Ie] = null), (n[Je] = null);
          })(r[I], r);
          const o = s[hn];
          null !== o && o.detachView(s[I]),
            (r[Ce] = null),
            (r[Jt] = null),
            (r[q] &= -129);
        }
        return r;
      }
      function pd(e, n) {
        if (!(256 & n[q])) {
          const t = n[z];
          n[Is] && Dm(n[Is]),
            n[Ts] && Dm(n[Ts]),
            t.destroyNode && Hs(e, n, t, 3, null, null),
            (function TM(e) {
              let n = e[Es];
              if (!n) return gd(e[I], e);
              for (; n; ) {
                let t = null;
                if (_t(n)) t = n[Es];
                else {
                  const r = n[ze];
                  r && (t = r);
                }
                if (!t) {
                  for (; n && !n[Jt] && n !== e; )
                    _t(n) && gd(n[I], n), (n = n[Ce]);
                  null === n && (n = e), _t(n) && gd(n[I], n), (t = n && n[Jt]);
                }
                n = t;
              }
            })(n);
        }
      }
      function gd(e, n) {
        if (!(256 & n[q])) {
          (n[q] &= -129),
            (n[q] |= 256),
            (function RM(e, n) {
              let t;
              if (null != e && null != (t = e.destroyHooks))
                for (let r = 0; r < t.length; r += 2) {
                  const i = n[t[r]];
                  if (!(i instanceof Rs)) {
                    const s = t[r + 1];
                    if (Array.isArray(s))
                      for (let o = 0; o < s.length; o += 2) {
                        const a = i[s[o]],
                          l = s[o + 1];
                        gn(4, a, l);
                        try {
                          l.call(a);
                        } finally {
                          gn(5, a, l);
                        }
                      }
                    else {
                      gn(4, i, s);
                      try {
                        s.call(i);
                      } finally {
                        gn(5, i, s);
                      }
                    }
                  }
                }
            })(e, n),
            (function NM(e, n) {
              const t = e.cleanup,
                r = n[ii];
              if (null !== t)
                for (let s = 0; s < t.length - 1; s += 2)
                  if ("string" == typeof t[s]) {
                    const o = t[s + 3];
                    o >= 0 ? r[o]() : r[-o].unsubscribe(), (s += 2);
                  } else t[s].call(r[t[s + 1]]);
              null !== r && (n[ii] = null);
              const i = n[Jn];
              if (null !== i) {
                n[Jn] = null;
                for (let s = 0; s < i.length; s++) (0, i[s])();
              }
            })(e, n),
            1 === n[I].type && n[z].destroy();
          const t = n[bs];
          if (null !== t && at(n[Ce])) {
            t !== n[Ce] && Ly(t, n);
            const r = n[hn];
            null !== r && r.detachView(e);
          }
          !(function pM(e) {
            ld.delete(e[Ss]);
          })(n);
        }
      }
      function md(e, n, t) {
        return (function ky(e, n, t) {
          let r = n;
          for (; null !== r && 40 & r.type; ) r = (n = r).parent;
          if (null === r) return t[Ie];
          {
            const { componentOffset: i } = r;
            if (i > -1) {
              const { encapsulation: s } = e.data[r.directiveStart + i];
              if (s === Ut.None || s === Ut.Emulated) return null;
            }
            return Dt(r, t);
          }
        })(e, n.parent, t);
      }
      function Rr(e, n, t, r, i) {
        e.insertBefore(n, t, r, i);
      }
      function Vy(e, n, t) {
        e.appendChild(n, t);
      }
      function jy(e, n, t, r, i) {
        null !== r ? Rr(e, n, t, r, i) : Vy(e, n, t);
      }
      function Ya(e, n) {
        return e.parentNode(n);
      }
      function By(e, n, t) {
        return Uy(e, n, t);
      }
      let yd,
        Cd,
        tl,
        Uy = function Hy(e, n, t) {
          return 40 & e.type ? Dt(e, t) : null;
        };
      function Xa(e, n, t, r) {
        const i = md(e, r, n),
          s = n[z],
          a = By(r.parent || n[Je], r, n);
        if (null != i)
          if (Array.isArray(t))
            for (let l = 0; l < t.length; l++) jy(s, i, t[l], a, !1);
          else jy(s, i, t, a, !1);
        void 0 !== yd && yd(s, r, n, t, i);
      }
      function Bs(e, n) {
        if (null !== n) {
          const t = n.type;
          if (3 & t) return Dt(n, e);
          if (4 & t) return vd(-1, e[n.index]);
          if (8 & t) {
            const r = n.child;
            if (null !== r) return Bs(e, r);
            {
              const i = e[n.index];
              return at(i) ? vd(-1, i) : me(i);
            }
          }
          if (32 & t) return fd(n, e)() || me(e[n.index]);
          {
            const r = zy(e, n);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Bs(js(e[Ne]), r)
              : Bs(e, n.next);
          }
        }
        return null;
      }
      function zy(e, n) {
        return null !== n ? e[Ne][Je].projection[n.projection] : null;
      }
      function vd(e, n) {
        const t = ze + e + 1;
        if (t < n.length) {
          const r = n[t],
            i = r[I].firstChild;
          if (null !== i) return Bs(r, i);
        }
        return n[pn];
      }
      function _d(e, n, t, r, i, s, o) {
        for (; null != t; ) {
          const a = r[t.index],
            l = t.type;
          if (
            (o && 0 === n && (a && et(me(a), r), (t.flags |= 2)),
            32 != (32 & t.flags))
          )
            if (8 & l) _d(e, n, t.child, r, i, s, !1), bi(n, e, i, a, s);
            else if (32 & l) {
              const u = fd(t, r);
              let c;
              for (; (c = u()); ) bi(n, e, i, c, s);
              bi(n, e, i, a, s);
            } else 16 & l ? Wy(e, n, r, t, i, s) : bi(n, e, i, a, s);
          t = o ? t.projectionNext : t.next;
        }
      }
      function Hs(e, n, t, r, i, s) {
        _d(t, r, e.firstChild, n, i, s, !1);
      }
      function Wy(e, n, t, r, i, s) {
        const o = t[Ne],
          l = o[Je].projection[r.projection];
        if (Array.isArray(l))
          for (let u = 0; u < l.length; u++) bi(n, e, i, l[u], s);
        else {
          let u = l;
          const c = o[Ce];
          Wa(r) && (u.flags |= 128), _d(e, n, u, c, i, s, !0);
        }
      }
      function qy(e, n, t) {
        "" === t
          ? e.removeAttribute(n, "class")
          : e.setAttribute(n, "class", t);
      }
      function Ky(e, n, t) {
        const { mergedAttrs: r, classes: i, styles: s } = t;
        null !== r && Rc(e, n, r),
          null !== i && qy(e, n, i),
          null !== s &&
            (function kM(e, n, t) {
              e.setAttribute(n, "style", t);
            })(e, n, s);
      }
      function Yy(e) {
        return (
          (function wd() {
            if (void 0 === tl && ((tl = null), ge.trustedTypes))
              try {
                tl = ge.trustedTypes.createPolicy("angular#unsafe-bypass", {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return tl;
          })()?.createScriptURL(e) || e
        );
      }
      class Xy {
        constructor(n) {
          this.changingThisBreaksApplicationSecurity = n;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ug})`;
        }
      }
      function or(e) {
        return e instanceof Xy ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Us(e, n) {
        const t = (function qM(e) {
          return (e instanceof Xy && e.getTypeName()) || null;
        })(e);
        if (null != t && t !== n) {
          if ("ResourceURL" === t && "URL" === n) return !0;
          throw new Error(`Required a safe ${n}, got a ${t} (see ${Ug})`);
        }
        return t === n;
      }
      const YM = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      var Ti = (function (e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.HTML = 1)] = "HTML"),
          (e[(e.STYLE = 2)] = "STYLE"),
          (e[(e.SCRIPT = 3)] = "SCRIPT"),
          (e[(e.URL = 4)] = "URL"),
          (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          e
        );
      })(Ti || {});
      function Or(e) {
        const n = zs();
        return n
          ? n.sanitize(Ti.URL, e) || ""
          : Us(e, "URL")
          ? or(e)
          : (function Ed(e) {
              return (e = String(e)).match(YM) ? e : "unsafe:" + e;
            })(U(e));
      }
      function sv(e) {
        const n = zs();
        if (n) return Yy(n.sanitize(Ti.RESOURCE_URL, e) || "");
        if (Us(e, "ResourceURL")) return Yy(or(e));
        throw new D(904, !1);
      }
      function zs() {
        const e = E();
        return e && e[si].sanitizer;
      }
      class N {
        constructor(n, t) {
          (this._desc = n),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ɵprov = R({
                  token: this,
                  providedIn: t.providedIn || "root",
                  factory: t.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Gs = new N("ENVIRONMENT_INITIALIZER"),
        av = new N("INJECTOR", -1),
        lv = new N("INJECTOR_DEF_TYPES");
      class Td {
        get(n, t = vs) {
          if (t === vs) {
            const r = new Error(`NullInjectorError: No provider for ${Le(n)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return t;
        }
      }
      function cA(...e) {
        return { ɵproviders: uv(0, e), ɵfromNgModule: !0 };
      }
      function uv(e, ...n) {
        const t = [],
          r = new Set();
        let i;
        const s = (o) => {
          t.push(o);
        };
        return (
          Di(n, (o) => {
            const a = o;
            rl(a, s, [], r) && ((i ||= []), i.push(a));
          }),
          void 0 !== i && cv(i, s),
          t
        );
      }
      function cv(e, n) {
        for (let t = 0; t < e.length; t++) {
          const { ngModule: r, providers: i } = e[t];
          Ad(i, (s) => {
            n(s, r);
          });
        }
      }
      function rl(e, n, t, r) {
        if (!(e = B(e))) return !1;
        let i = null,
          s = ya(e);
        const o = !s && J(e);
        if (s || o) {
          if (o && !o.standalone) return !1;
          i = e;
        } else {
          const l = e.ngModule;
          if (((s = ya(l)), !s)) return !1;
          i = l;
        }
        const a = r.has(i);
        if (o) {
          if (a) return !1;
          if ((r.add(i), o.dependencies)) {
            const l =
              "function" == typeof o.dependencies
                ? o.dependencies()
                : o.dependencies;
            for (const u of l) rl(u, n, t, r);
          }
        } else {
          if (!s) return !1;
          {
            if (null != s.imports && !a) {
              let u;
              r.add(i);
              try {
                Di(s.imports, (c) => {
                  rl(c, n, t, r) && ((u ||= []), u.push(c));
                });
              } finally {
              }
              void 0 !== u && cv(u, n);
            }
            if (!a) {
              const u = Mr(i) || (() => new i());
              n({ provide: i, useFactory: u, deps: re }, i),
                n({ provide: lv, useValue: i, multi: !0 }, i),
                n({ provide: Gs, useValue: () => A(i), multi: !0 }, i);
            }
            const l = s.providers;
            if (null != l && !a) {
              const u = e;
              Ad(l, (c) => {
                n(c, u);
              });
            }
          }
        }
        return i !== e && void 0 !== e.providers;
      }
      function Ad(e, n) {
        for (let t of e)
          _c(t) && (t = t.ɵproviders), Array.isArray(t) ? Ad(t, n) : n(t);
      }
      const dA = ce({ provide: String, useValue: ce });
      function Nd(e) {
        return null !== e && "object" == typeof e && dA in e;
      }
      function Pr(e) {
        return "function" == typeof e;
      }
      const Rd = new N("Set Injector scope."),
        il = {},
        hA = {};
      let Od;
      function sl() {
        return void 0 === Od && (Od = new Td()), Od;
      }
      class Rt {}
      class ol extends Rt {
        get destroyed() {
          return this._destroyed;
        }
        constructor(n, t, r, i) {
          super(),
            (this.parent = t),
            (this.source = r),
            (this.scopes = i),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            xd(n, (o) => this.processProvider(o)),
            this.records.set(av, Mi(void 0, this)),
            i.has("environment") && this.records.set(Rt, Mi(void 0, this));
          const s = this.records.get(Rd);
          null != s && "string" == typeof s.value && this.scopes.add(s.value),
            (this.injectorDefTypes = new Set(this.get(lv.multi, re, Z.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            const n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const t of n) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear();
          }
        }
        onDestroy(n) {
          return (
            this.assertNotDestroyed(),
            this._onDestroyHooks.push(n),
            () => this.removeOnDestroy(n)
          );
        }
        runInContext(n) {
          this.assertNotDestroyed();
          const t = Yn(this),
            r = yt(void 0);
          try {
            return n();
          } finally {
            Yn(t), yt(r);
          }
        }
        get(n, t = vs, r = Z.Default) {
          if ((this.assertNotDestroyed(), n.hasOwnProperty(Yg)))
            return n[Yg](this);
          r = Da(r);
          const s = Yn(this),
            o = yt(void 0);
          try {
            if (!(r & Z.SkipSelf)) {
              let l = this.records.get(n);
              if (void 0 === l) {
                const u =
                  (function vA(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof N)
                    );
                  })(n) && ma(n);
                (l = u && this.injectableDefInScope(u) ? Mi(Pd(n), il) : null),
                  this.records.set(n, l);
              }
              if (null != l) return this.hydrate(n, l);
            }
            return (r & Z.Self ? sl() : this.parent).get(
              n,
              (t = r & Z.Optional && t === vs ? null : t)
            );
          } catch (a) {
            if ("NullInjectorError" === a.name) {
              if (((a[_a] = a[_a] || []).unshift(Le(n)), s)) throw a;
              return (function pT(e, n, t, r) {
                const i = e[_a];
                throw (
                  (n[Kg] && i.unshift(n[Kg]),
                  (e.message = (function gT(e, n, t, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let i = Le(n);
                    if (Array.isArray(n)) i = n.map(Le).join(" -> ");
                    else if ("object" == typeof n) {
                      let s = [];
                      for (let o in n)
                        if (n.hasOwnProperty(o)) {
                          let a = n[o];
                          s.push(
                            o +
                              ":" +
                              ("string" == typeof a ? JSON.stringify(a) : Le(a))
                          );
                        }
                      i = `{${s.join(", ")}}`;
                    }
                    return `${t}${r ? "(" + r + ")" : ""}[${i}]: ${e.replace(
                      uT,
                      "\n  "
                    )}`;
                  })("\n" + e.message, i, t, r)),
                  (e.ngTokenPath = i),
                  (e[_a] = null),
                  e)
                );
              })(a, n, "R3InjectorError", this.source);
            }
            throw a;
          } finally {
            yt(o), Yn(s);
          }
        }
        resolveInjectorInitializers() {
          const n = Yn(this),
            t = yt(void 0);
          try {
            const i = this.get(Gs.multi, re, Z.Self);
            for (const s of i) s();
          } finally {
            Yn(n), yt(t);
          }
        }
        toString() {
          const n = [],
            t = this.records;
          for (const r of t.keys()) n.push(Le(r));
          return `R3Injector[${n.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new D(205, !1);
        }
        processProvider(n) {
          let t = Pr((n = B(n))) ? n : B(n && n.provide);
          const r = (function gA(e) {
            return Nd(e) ? Mi(void 0, e.useValue) : Mi(hv(e), il);
          })(n);
          if (Pr(n) || !0 !== n.multi) this.records.get(t);
          else {
            let i = this.records.get(t);
            i ||
              ((i = Mi(void 0, il, !0)),
              (i.factory = () => Mc(i.multi)),
              this.records.set(t, i)),
              (t = n),
              i.multi.push(n);
          }
          this.records.set(t, r);
        }
        hydrate(n, t) {
          return (
            t.value === il && ((t.value = hA), (t.value = t.factory())),
            "object" == typeof t.value &&
              t.value &&
              (function yA(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(t.value) &&
              this._ngOnDestroyHooks.add(t.value),
            t.value
          );
        }
        injectableDefInScope(n) {
          if (!n.providedIn) return !1;
          const t = B(n.providedIn);
          return "string" == typeof t
            ? "any" === t || this.scopes.has(t)
            : this.injectorDefTypes.has(t);
        }
        removeOnDestroy(n) {
          const t = this._onDestroyHooks.indexOf(n);
          -1 !== t && this._onDestroyHooks.splice(t, 1);
        }
      }
      function Pd(e) {
        const n = ma(e),
          t = null !== n ? n.factory : Mr(e);
        if (null !== t) return t;
        if (e instanceof N) throw new D(204, !1);
        if (e instanceof Function)
          return (function pA(e) {
            const n = e.length;
            if (n > 0) throw (Ls(n, "?"), new D(204, !1));
            const t = (function sT(e) {
              return (e && (e[va] || e[zg])) || null;
            })(e);
            return null !== t ? () => t.factory(e) : () => new e();
          })(e);
        throw new D(204, !1);
      }
      function hv(e, n, t) {
        let r;
        if (Pr(e)) {
          const i = B(e);
          return Mr(i) || Pd(i);
        }
        if (Nd(e)) r = () => B(e.useValue);
        else if (
          (function fv(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Mc(e.deps || []));
        else if (
          (function dv(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => A(B(e.useExisting));
        else {
          const i = B(e && (e.useClass || e.provide));
          if (
            !(function mA(e) {
              return !!e.deps;
            })(e)
          )
            return Mr(i) || Pd(i);
          r = () => new i(...Mc(e.deps));
        }
        return r;
      }
      function Mi(e, n, t = !1) {
        return { factory: e, value: n, multi: t ? [] : void 0 };
      }
      function xd(e, n) {
        for (const t of e)
          Array.isArray(t) ? xd(t, n) : t && _c(t) ? xd(t.ɵproviders, n) : n(t);
      }
      const al = new N("AppId", { providedIn: "root", factory: () => _A }),
        _A = "ng",
        pv = new N("Platform Initializer"),
        ar = new N("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        gv = new N("AnimationModuleType"),
        mv = new N("CSP nonce", {
          providedIn: "root",
          factory: () =>
            (function Ii() {
              if (void 0 !== Cd) return Cd;
              if (typeof document < "u") return document;
              throw new D(210, !1);
            })()
              .body?.querySelector("[ngCspNonce]")
              ?.getAttribute("ngCspNonce") || null,
        });
      let yv = (e, n, t) => null;
      function Ud(e, n, t = !1) {
        return yv(e, n, t);
      }
      class AA {}
      class Dv {}
      class RA {
        resolveComponentFactory(n) {
          throw (function NA(e) {
            const n = Error(`No component factory found for ${Le(e)}.`);
            return (n.ngComponent = e), n;
          })(n);
        }
      }
      let hl = (() => {
        class e {
          static #e = (this.NULL = new RA());
        }
        return e;
      })();
      function OA() {
        return Ri(We(), E());
      }
      function Ri(e, n) {
        return new wt(Dt(e, n));
      }
      let wt = (() => {
        class e {
          constructor(t) {
            this.nativeElement = t;
          }
          static #e = (this.__NG_ELEMENT_ID__ = OA);
        }
        return e;
      })();
      function PA(e) {
        return e instanceof wt ? e.nativeElement : e;
      }
      class Ks {}
      let tn = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function xA() {
                const e = E(),
                  t = At(We().index, e);
                return (_t(t) ? t : e)[z];
              })());
          }
          return e;
        })(),
        FA = (() => {
          class e {
            static #e = (this.ɵprov = R({
              token: e,
              providedIn: "root",
              factory: () => null,
            }));
          }
          return e;
        })();
      class Qs {
        constructor(n) {
          (this.full = n),
            (this.major = n.split(".")[0]),
            (this.minor = n.split(".")[1]),
            (this.patch = n.split(".").slice(2).join("."));
        }
      }
      const LA = new Qs("16.2.9"),
        Gd = {};
      function Sv(e, n = null, t = null, r) {
        const i = Iv(e, n, t, r);
        return i.resolveInjectorInitializers(), i;
      }
      function Iv(e, n = null, t = null, r, i = new Set()) {
        const s = [t || re, cA(e)];
        return (
          (r = r || ("object" == typeof e ? void 0 : Le(e))),
          new ol(s, n || sl(), r || null, i)
        );
      }
      let Ot = (() => {
        class e {
          static #e = (this.THROW_IF_NOT_FOUND = vs);
          static #t = (this.NULL = new Td());
          static create(t, r) {
            if (Array.isArray(t)) return Sv({ name: "" }, r, t, "");
            {
              const i = t.name ?? "";
              return Sv({ name: i }, t.parent, t.providers, i);
            }
          }
          static #n = (this.ɵprov = R({
            token: e,
            providedIn: "any",
            factory: () => A(av),
          }));
          static #r = (this.__NG_ELEMENT_ID__ = -1);
        }
        return e;
      })();
      function qd(e) {
        return e.ngOriginalError;
      }
      class kn {
        constructor() {
          this._console = console;
        }
        handleError(n) {
          const t = this._findOriginalError(n);
          this._console.error("ERROR", n),
            t && this._console.error("ORIGINAL ERROR", t);
        }
        _findOriginalError(n) {
          let t = n && qd(n);
          for (; t && qd(t); ) t = qd(t);
          return t || null;
        }
      }
      function Qd(e) {
        return (n) => {
          setTimeout(e, void 0, n);
        };
      }
      const we = class $A extends gt {
        constructor(n = !1) {
          super(), (this.__isAsync = n);
        }
        emit(n) {
          super.next(n);
        }
        subscribe(n, t, r) {
          let i = n,
            s = t || (() => null),
            o = r;
          if (n && "object" == typeof n) {
            const l = n;
            (i = l.next?.bind(l)),
              (s = l.error?.bind(l)),
              (o = l.complete?.bind(l));
          }
          this.__isAsync && ((s = Qd(s)), i && (i = Qd(i)), o && (o = Qd(o)));
          const a = super.subscribe({ next: i, error: s, complete: o });
          return n instanceof It && n.add(a), a;
        }
      };
      function Mv(...e) {}
      class le {
        constructor({
          enableLongStackTrace: n = !1,
          shouldCoalesceEventChangeDetection: t = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new we(!1)),
            (this.onMicrotaskEmpty = new we(!1)),
            (this.onStable = new we(!1)),
            (this.onError = new we(!1)),
            typeof Zone > "u")
          )
            throw new D(908, !1);
          Zone.assertZonePatched();
          const i = this;
          (i._nesting = 0),
            (i._outer = i._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n &&
              Zone.longStackTraceZoneSpec &&
              (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
            (i.shouldCoalesceEventChangeDetection = !r && t),
            (i.shouldCoalesceRunChangeDetection = r),
            (i.lastRequestAnimationFrameId = -1),
            (i.nativeRequestAnimationFrame = (function zA() {
              const e = "function" == typeof ge.requestAnimationFrame;
              let n = ge[e ? "requestAnimationFrame" : "setTimeout"],
                t = ge[e ? "cancelAnimationFrame" : "clearTimeout"];
              if (typeof Zone < "u" && n && t) {
                const r = n[Zone.__symbol__("OriginalDelegate")];
                r && (n = r);
                const i = t[Zone.__symbol__("OriginalDelegate")];
                i && (t = i);
              }
              return {
                nativeRequestAnimationFrame: n,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function qA(e) {
              const n = () => {
                !(function WA(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(ge, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                Yd(e),
                                (e.isCheckStableRunning = !0),
                                Zd(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    Yd(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (t, r, i, s, o, a) => {
                  if (
                    (function QA(e) {
                      return (
                        !(!Array.isArray(e) || 1 !== e.length) &&
                        !0 === e[0].data?.__ignore_ng_zone__
                      );
                    })(a)
                  )
                    return t.invokeTask(i, s, o, a);
                  try {
                    return Av(e), t.invokeTask(i, s, o, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === s.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      n(),
                      Nv(e);
                  }
                },
                onInvoke: (t, r, i, s, o, a, l) => {
                  try {
                    return Av(e), t.invoke(i, s, o, a, l);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && n(), Nv(e);
                  }
                },
                onHasTask: (t, r, i, s) => {
                  t.hasTask(i, s),
                    r === i &&
                      ("microTask" == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask),
                          Yd(e),
                          Zd(e))
                        : "macroTask" == s.change &&
                          (e.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (t, r, i, s) => (
                  t.handleError(i, s),
                  e.runOutsideAngular(() => e.onError.emit(s)),
                  !1
                ),
              });
            })(i);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!le.isInAngularZone()) throw new D(909, !1);
        }
        static assertNotInAngularZone() {
          if (le.isInAngularZone()) throw new D(909, !1);
        }
        run(n, t, r) {
          return this._inner.run(n, t, r);
        }
        runTask(n, t, r, i) {
          const s = this._inner,
            o = s.scheduleEventTask("NgZoneEvent: " + i, n, GA, Mv, Mv);
          try {
            return s.runTask(o, t, r);
          } finally {
            s.cancelTask(o);
          }
        }
        runGuarded(n, t, r) {
          return this._inner.runGuarded(n, t, r);
        }
        runOutsideAngular(n) {
          return this._outer.run(n);
        }
      }
      const GA = {};
      function Zd(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Yd(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Av(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Nv(e) {
        e._nesting--, Zd(e);
      }
      class KA {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new we()),
            (this.onMicrotaskEmpty = new we()),
            (this.onStable = new we()),
            (this.onError = new we());
        }
        run(n, t, r) {
          return n.apply(t, r);
        }
        runGuarded(n, t, r) {
          return n.apply(t, r);
        }
        runOutsideAngular(n) {
          return n();
        }
        runTask(n, t, r, i) {
          return n.apply(t, r);
        }
      }
      const Rv = new N("", { providedIn: "root", factory: Ov });
      function Ov() {
        const e = T(le);
        let n = !0;
        return (function QI(...e) {
          const n = ys(e),
            t = (function UI(e, n) {
              return "number" == typeof gc(e) ? e.pop() : n;
            })(e, 1 / 0),
            r = e;
          return r.length ? (1 === r.length ? mt(r[0]) : ti(t)(Fe(r, n))) : dn;
        })(
          new Se((i) => {
            (n =
              e.isStable && !e.hasPendingMacrotasks && !e.hasPendingMicrotasks),
              e.runOutsideAngular(() => {
                i.next(n), i.complete();
              });
          }),
          new Se((i) => {
            let s;
            e.runOutsideAngular(() => {
              s = e.onStable.subscribe(() => {
                le.assertNotInAngularZone(),
                  queueMicrotask(() => {
                    !n &&
                      !e.hasPendingMacrotasks &&
                      !e.hasPendingMicrotasks &&
                      ((n = !0), i.next(!0));
                  });
              });
            });
            const o = e.onUnstable.subscribe(() => {
              le.assertInAngularZone(),
                n &&
                  ((n = !1),
                  e.runOutsideAngular(() => {
                    i.next(!1);
                  }));
            });
            return () => {
              s.unsubscribe(), o.unsubscribe();
            };
          }).pipe(Hg())
        );
      }
      function Vn(e) {
        return e instanceof Function ? e() : e;
      }
      let Xd = (() => {
        class e {
          constructor() {
            (this.renderDepth = 0), (this.handler = null);
          }
          begin() {
            this.handler?.validateBegin(), this.renderDepth++;
          }
          end() {
            this.renderDepth--,
              0 === this.renderDepth && this.handler?.execute();
          }
          ngOnDestroy() {
            this.handler?.destroy(), (this.handler = null);
          }
          static #e = (this.ɵprov = R({
            token: e,
            providedIn: "root",
            factory: () => new e(),
          }));
        }
        return e;
      })();
      function Zs(e) {
        for (; e; ) {
          e[q] |= 64;
          const n = js(e);
          if (xc(e) && !n) return e;
          e = n;
        }
        return null;
      }
      const kv = new N("", { providedIn: "root", factory: () => !1 });
      let gl = null;
      function Hv(e, n) {
        return e[n] ?? zv();
      }
      function Uv(e, n) {
        const t = zv();
        t.producerNode?.length && ((e[n] = gl), (t.lView = e), (gl = $v()));
      }
      const sN = {
        ...pm,
        consumerIsAlwaysLive: !0,
        consumerMarkedDirty: (e) => {
          Zs(e.lView);
        },
        lView: null,
      };
      function $v() {
        return Object.create(sN);
      }
      function zv() {
        return (gl ??= $v()), gl;
      }
      const G = {};
      function W(e) {
        Gv(ee(), E(), ut() + e, !1);
      }
      function Gv(e, n, t, r) {
        if (!r)
          if (3 == (3 & n[q])) {
            const s = e.preOrderCheckHooks;
            null !== s && Ra(n, s, t);
          } else {
            const s = e.preOrderHooks;
            null !== s && Oa(n, s, 0, t);
          }
        Ar(t);
      }
      function w(e, n = Z.Default) {
        const t = E();
        return null === t ? A(e, n) : sy(We(), t, B(e), n);
      }
      function ml(e, n, t, r, i, s, o, a, l, u, c) {
        const d = n.blueprint.slice();
        return (
          (d[Ie] = i),
          (d[q] = 140 | r),
          (null !== u || (e && 2048 & e[q])) && (d[q] |= 2048),
          xm(d),
          (d[Ce] = d[oi] = e),
          (d[Ae] = t),
          (d[si] = o || (e && e[si])),
          (d[z] = a || (e && e[z])),
          (d[Xn] = l || (e && e[Xn]) || null),
          (d[Je] = s),
          (d[Ss] = (function fM() {
            return dM++;
          })()),
          (d[Pn] = c),
          (d[cm] = u),
          (d[Ne] = 2 == n.type ? e[Ne] : d),
          d
        );
      }
      function xi(e, n, t, r, i) {
        let s = e.data[n];
        if (null === s)
          (s = (function Jd(e, n, t, r, i) {
            const s = Bm(),
              o = Uc(),
              l = (e.data[n] = (function hN(e, n, t, r, i, s) {
                let o = n ? n.injectorIndex : -1,
                  a = 0;
                return (
                  di() && (a |= 128),
                  {
                    type: t,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: o,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: a,
                    providerIndexes: 0,
                    value: i,
                    attrs: s,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tView: null,
                    next: null,
                    prev: null,
                    projectionNext: null,
                    child: null,
                    parent: n,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  }
                );
              })(0, o ? s : s && s.parent, t, n, r, i));
            return (
              null === e.firstChild && (e.firstChild = l),
              null !== s &&
                (o
                  ? null == s.child && null !== l.parent && (s.child = l)
                  : null === s.next && ((s.next = l), (l.prev = s))),
              l
            );
          })(e, n, t, r, i)),
            (function f1() {
              return j.lFrame.inI18n;
            })() && (s.flags |= 32);
        else if (64 & s.type) {
          (s.type = t), (s.value = r), (s.attrs = i);
          const o = (function Ns() {
            const e = j.lFrame,
              n = e.currentTNode;
            return e.isParent ? n : n.parent;
          })();
          s.injectorIndex = null === o ? -1 : o.injectorIndex;
        }
        return mn(s, !0), s;
      }
      function Ys(e, n, t, r) {
        if (0 === t) return -1;
        const i = n.length;
        for (let s = 0; s < t; s++)
          n.push(r), e.blueprint.push(r), e.data.push(null);
        return i;
      }
      function qv(e, n, t, r, i) {
        const s = Hv(n, Is),
          o = ut(),
          a = 2 & r;
        try {
          Ar(-1), a && n.length > Y && Gv(e, n, Y, !1), gn(a ? 2 : 0, i);
          const u = a ? s : null,
            c = Lc(u);
          try {
            null !== u && (u.dirty = !1), t(r, i);
          } finally {
            kc(u, c);
          }
        } finally {
          a && null === n[Is] && Uv(n, Is), Ar(o), gn(a ? 3 : 1, i);
        }
      }
      function ef(e, n, t) {
        if (Pc(n)) {
          const r = $t(null);
          try {
            const s = n.directiveEnd;
            for (let o = n.directiveStart; o < s; o++) {
              const a = e.data[o];
              a.contentQueries && a.contentQueries(1, t[o], o);
            }
          } finally {
            $t(r);
          }
        }
      }
      function tf(e, n, t) {
        jm() &&
          ((function DN(e, n, t, r) {
            const i = t.directiveStart,
              s = t.directiveEnd;
            Tr(t) &&
              (function TN(e, n, t) {
                const r = Dt(n, e),
                  i = Kv(t);
                let o = 16;
                t.signals ? (o = 4096) : t.onPush && (o = 64);
                const a = yl(
                  e,
                  ml(
                    e,
                    i,
                    null,
                    o,
                    r,
                    n,
                    null,
                    e[si].rendererFactory.createRenderer(r, t),
                    null,
                    null,
                    null
                  )
                );
                e[n.index] = a;
              })(n, t, e.data[i + t.componentOffset]),
              e.firstCreatePass || xa(t, n),
              et(r, n);
            const o = t.initialInputs;
            for (let a = i; a < s; a++) {
              const l = e.data[a],
                u = Nr(n, e, a, t);
              et(u, n),
                null !== o && MN(0, a - i, u, l, 0, o),
                en(l) && (At(t.index, n)[Ae] = Nr(n, e, a, t));
            }
          })(e, n, t, Dt(t, n)),
          64 == (64 & t.flags) && Jv(e, n, t));
      }
      function nf(e, n, t = Dt) {
        const r = n.localNames;
        if (null !== r) {
          let i = n.index + 1;
          for (let s = 0; s < r.length; s += 2) {
            const o = r[s + 1],
              a = -1 === o ? t(n, e) : e[o];
            e[i++] = a;
          }
        }
      }
      function Kv(e) {
        const n = e.tView;
        return null === n || n.incompleteFirstPass
          ? (e.tView = rf(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
              e.id
            ))
          : n;
      }
      function rf(e, n, t, r, i, s, o, a, l, u, c) {
        const d = Y + r,
          f = d + i,
          h = (function aN(e, n) {
            const t = [];
            for (let r = 0; r < n; r++) t.push(r < e ? null : G);
            return t;
          })(d, f),
          p = "function" == typeof u ? u() : u;
        return (h[I] = {
          type: e,
          blueprint: h,
          template: t,
          queries: null,
          viewQuery: a,
          declTNode: n,
          data: h.slice().fill(null, d),
          bindingStartIndex: d,
          expandoStartIndex: f,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof s ? s() : s,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
          ssrId: c,
        });
      }
      let Qv = (e) => null;
      function Zv(e, n, t, r) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            t = null === t ? {} : t;
            const s = e[i];
            null === r
              ? Yv(t, n, i, s)
              : r.hasOwnProperty(i) && Yv(t, n, r[i], s);
          }
        return t;
      }
      function Yv(e, n, t, r) {
        e.hasOwnProperty(t) ? e[t].push(n, r) : (e[t] = [n, r]);
      }
      function sf(e, n, t, r) {
        if (jm()) {
          const i = null === r ? null : { "": -1 },
            s = (function wN(e, n) {
              const t = e.directiveRegistry;
              let r = null,
                i = null;
              if (t)
                for (let s = 0; s < t.length; s++) {
                  const o = t[s];
                  if (im(n, o.selectors, !1))
                    if ((r || (r = []), en(o)))
                      if (null !== o.findHostDirectiveDefs) {
                        const a = [];
                        (i = i || new Map()),
                          o.findHostDirectiveDefs(o, a, i),
                          r.unshift(...a, o),
                          af(e, n, a.length);
                      } else r.unshift(o), af(e, n, 0);
                    else
                      (i = i || new Map()),
                        o.findHostDirectiveDefs?.(o, r, i),
                        r.push(o);
                }
              return null === r ? null : [r, i];
            })(e, t);
          let o, a;
          null === s ? (o = a = null) : ([o, a] = s),
            null !== o && Xv(e, n, t, o, i, a),
            i &&
              (function EN(e, n, t) {
                if (n) {
                  const r = (e.localNames = []);
                  for (let i = 0; i < n.length; i += 2) {
                    const s = t[n[i + 1]];
                    if (null == s) throw new D(-301, !1);
                    r.push(n[i], s);
                  }
                }
              })(t, r, i);
        }
        t.mergedAttrs = Cs(t.mergedAttrs, t.attrs);
      }
      function Xv(e, n, t, r, i, s) {
        for (let u = 0; u < r.length; u++) ed(xa(t, n), e, r[u].type);
        !(function SN(e, n, t) {
          (e.flags |= 1),
            (e.directiveStart = n),
            (e.directiveEnd = n + t),
            (e.providerIndexes = n);
        })(t, e.data.length, r.length);
        for (let u = 0; u < r.length; u++) {
          const c = r[u];
          c.providersResolver && c.providersResolver(c);
        }
        let o = !1,
          a = !1,
          l = Ys(e, n, r.length, null);
        for (let u = 0; u < r.length; u++) {
          const c = r[u];
          (t.mergedAttrs = Cs(t.mergedAttrs, c.hostAttrs)),
            IN(e, t, n, l, c),
            bN(l, c, i),
            null !== c.contentQueries && (t.flags |= 4),
            (null !== c.hostBindings ||
              null !== c.hostAttrs ||
              0 !== c.hostVars) &&
              (t.flags |= 64);
          const d = c.type.prototype;
          !o &&
            (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
            ((e.preOrderHooks ??= []).push(t.index), (o = !0)),
            !a &&
              (d.ngOnChanges || d.ngDoCheck) &&
              ((e.preOrderCheckHooks ??= []).push(t.index), (a = !0)),
            l++;
        }
        !(function pN(e, n, t) {
          const i = n.directiveEnd,
            s = e.data,
            o = n.attrs,
            a = [];
          let l = null,
            u = null;
          for (let c = n.directiveStart; c < i; c++) {
            const d = s[c],
              f = t ? t.get(d) : null,
              p = f ? f.outputs : null;
            (l = Zv(d.inputs, c, l, f ? f.inputs : null)),
              (u = Zv(d.outputs, c, u, p));
            const g = null === l || null === o || rm(n) ? null : AN(l, c, o);
            a.push(g);
          }
          null !== l &&
            (l.hasOwnProperty("class") && (n.flags |= 8),
            l.hasOwnProperty("style") && (n.flags |= 16)),
            (n.initialInputs = a),
            (n.inputs = l),
            (n.outputs = u);
        })(e, t, s);
      }
      function Jv(e, n, t) {
        const r = t.directiveStart,
          i = t.directiveEnd,
          s = t.index,
          o = (function p1() {
            return j.lFrame.currentDirectiveIndex;
          })();
        try {
          Ar(s);
          for (let a = r; a < i; a++) {
            const l = e.data[a],
              u = n[a];
            zc(a),
              (null !== l.hostBindings ||
                0 !== l.hostVars ||
                null !== l.hostAttrs) &&
                CN(l, u);
          }
        } finally {
          Ar(-1), zc(o);
        }
      }
      function CN(e, n) {
        null !== e.hostBindings && e.hostBindings(1, n);
      }
      function af(e, n, t) {
        (n.componentOffset = t), (e.components ??= []).push(n.index);
      }
      function bN(e, n, t) {
        if (t) {
          if (n.exportAs)
            for (let r = 0; r < n.exportAs.length; r++) t[n.exportAs[r]] = e;
          en(n) && (t[""] = e);
        }
      }
      function IN(e, n, t, r, i) {
        e.data[r] = i;
        const s = i.factory || (i.factory = Mr(i.type)),
          o = new Rs(s, en(i), w);
        (e.blueprint[r] = o),
          (t[r] = o),
          (function vN(e, n, t, r, i) {
            const s = i.hostBindings;
            if (s) {
              let o = e.hostBindingOpCodes;
              null === o && (o = e.hostBindingOpCodes = []);
              const a = ~n.index;
              (function _N(e) {
                let n = e.length;
                for (; n > 0; ) {
                  const t = e[--n];
                  if ("number" == typeof t && t < 0) return t;
                }
                return 0;
              })(o) != a && o.push(a),
                o.push(t, r, s);
            }
          })(e, n, r, Ys(e, t, i.hostVars, G), i);
      }
      function vn(e, n, t, r, i, s) {
        const o = Dt(e, n);
        !(function lf(e, n, t, r, i, s, o) {
          if (null == s) e.removeAttribute(n, i, t);
          else {
            const a = null == o ? U(s) : o(s, r || "", i);
            e.setAttribute(n, i, a, t);
          }
        })(n[z], o, s, e.value, t, r, i);
      }
      function MN(e, n, t, r, i, s) {
        const o = s[n];
        if (null !== o)
          for (let a = 0; a < o.length; ) e_(r, t, o[a++], o[a++], o[a++]);
      }
      function e_(e, n, t, r, i) {
        const s = $t(null);
        try {
          const o = e.inputTransforms;
          null !== o && o.hasOwnProperty(r) && (i = o[r].call(n, i)),
            null !== e.setInput ? e.setInput(n, i, t, r) : (n[r] = i);
        } finally {
          $t(s);
        }
      }
      function AN(e, n, t) {
        let r = null,
          i = 0;
        for (; i < t.length; ) {
          const s = t[i];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              if (e.hasOwnProperty(s)) {
                null === r && (r = []);
                const o = e[s];
                for (let a = 0; a < o.length; a += 2)
                  if (o[a] === n) {
                    r.push(s, o[a + 1], t[i + 1]);
                    break;
                  }
              }
              i += 2;
            } else i += 2;
          else i += 4;
        }
        return r;
      }
      function t_(e, n, t, r) {
        return [e, !0, !1, n, null, 0, r, t, null, null, null];
      }
      function n_(e, n) {
        const t = e.contentQueries;
        if (null !== t)
          for (let r = 0; r < t.length; r += 2) {
            const s = t[r + 1];
            if (-1 !== s) {
              const o = e.data[s];
              Wc(t[r]), o.contentQueries(2, n[s], s);
            }
          }
      }
      function yl(e, n) {
        return e[Es] ? (e[um][Jt] = n) : (e[Es] = n), (e[um] = n), n;
      }
      function uf(e, n, t) {
        Wc(0);
        const r = $t(null);
        try {
          n(e, t);
        } finally {
          $t(r);
        }
      }
      function r_(e) {
        return e[ii] || (e[ii] = []);
      }
      function i_(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function o_(e, n) {
        const t = e[Xn],
          r = t ? t.get(kn, null) : null;
        r && r.handleError(n);
      }
      function cf(e, n, t, r, i) {
        for (let s = 0; s < t.length; ) {
          const o = t[s++],
            a = t[s++];
          e_(e.data[o], n[o], r, a, i);
        }
      }
      function NN(e, n) {
        const t = At(n, e),
          r = t[I];
        !(function RN(e, n) {
          for (let t = n.length; t < e.blueprint.length; t++)
            n.push(e.blueprint[t]);
        })(r, t);
        const i = t[Ie];
        null !== i && null === t[Pn] && (t[Pn] = Ud(i, t[Xn])), df(r, t, t[Ae]);
      }
      function df(e, n, t) {
        qc(n);
        try {
          const r = e.viewQuery;
          null !== r && uf(1, r, t);
          const i = e.template;
          null !== i && qv(e, n, i, 1, t),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && n_(e, n),
            e.staticViewQueries && uf(2, e.viewQuery, t);
          const s = e.components;
          null !== s &&
            (function ON(e, n) {
              for (let t = 0; t < n.length; t++) NN(e, n[t]);
            })(n, s);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (n[q] &= -5), Kc();
        }
      }
      let a_ = (() => {
        class e {
          constructor() {
            (this.all = new Set()), (this.queue = new Map());
          }
          create(t, r, i) {
            const s = typeof Zone > "u" ? null : Zone.current,
              o = (function zT(e, n, t) {
                const r = Object.create(GT);
                t && (r.consumerAllowSignalWrites = !0),
                  (r.fn = e),
                  (r.schedule = n);
                const i = (o) => {
                  r.cleanupFn = o;
                };
                return (
                  (r.ref = {
                    notify: () => vm(r),
                    run: () => {
                      if (((r.dirty = !1), r.hasRun && !_m(r))) return;
                      r.hasRun = !0;
                      const o = Lc(r);
                      try {
                        r.cleanupFn(), (r.cleanupFn = Tm), r.fn(i);
                      } finally {
                        kc(r, o);
                      }
                    },
                    cleanup: () => r.cleanupFn(),
                  }),
                  r.ref
                );
              })(
                t,
                (u) => {
                  this.all.has(u) && this.queue.set(u, s);
                },
                i
              );
            let a;
            this.all.add(o), o.notify();
            const l = () => {
              o.cleanup(), a?.(), this.all.delete(o), this.queue.delete(o);
            };
            return (a = r?.onDestroy(l)), { destroy: l };
          }
          flush() {
            if (0 !== this.queue.size)
              for (const [t, r] of this.queue)
                this.queue.delete(t), r ? r.run(() => t.run()) : t.run();
          }
          get isQueueEmpty() {
            return 0 === this.queue.size;
          }
          static #e = (this.ɵprov = R({
            token: e,
            providedIn: "root",
            factory: () => new e(),
          }));
        }
        return e;
      })();
      function vl(e, n, t) {
        let r = t ? e.styles : null,
          i = t ? e.classes : null,
          s = 0;
        if (null !== n)
          for (let o = 0; o < n.length; o++) {
            const a = n[o];
            "number" == typeof a
              ? (s = a)
              : 1 == s
              ? (i = yc(i, a))
              : 2 == s && (r = yc(r, a + ": " + n[++o] + ";"));
          }
        t ? (e.styles = r) : (e.stylesWithoutHost = r),
          t ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      function Xs(e, n, t, r, i = !1) {
        for (; null !== t; ) {
          const s = n[t.index];
          null !== s && r.push(me(s)), at(s) && l_(s, r);
          const o = t.type;
          if (8 & o) Xs(e, n, t.child, r);
          else if (32 & o) {
            const a = fd(t, n);
            let l;
            for (; (l = a()); ) r.push(l);
          } else if (16 & o) {
            const a = zy(n, t);
            if (Array.isArray(a)) r.push(...a);
            else {
              const l = js(n[Ne]);
              Xs(l[I], l, a, r, !0);
            }
          }
          t = i ? t.projectionNext : t.next;
        }
        return r;
      }
      function l_(e, n) {
        for (let t = ze; t < e.length; t++) {
          const r = e[t],
            i = r[I].firstChild;
          null !== i && Xs(r[I], r, i, n);
        }
        e[pn] !== e[Ie] && n.push(e[pn]);
      }
      function _l(e, n, t, r = !0) {
        const i = n[si],
          s = i.rendererFactory,
          o = i.afterRenderEventManager;
        s.begin?.(), o?.begin();
        try {
          u_(e, n, e.template, t);
        } catch (l) {
          throw (r && o_(n, l), l);
        } finally {
          s.end?.(), i.effectManager?.flush(), o?.end();
        }
      }
      function u_(e, n, t, r) {
        const i = n[q];
        if (256 != (256 & i)) {
          n[si].effectManager?.flush(), qc(n);
          try {
            xm(n),
              (function Um(e) {
                return (j.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== t && qv(e, n, t, 2, r);
            const o = 3 == (3 & i);
            if (o) {
              const u = e.preOrderCheckHooks;
              null !== u && Ra(n, u, null);
            } else {
              const u = e.preOrderHooks;
              null !== u && Oa(n, u, 0, null), Qc(n, 0);
            }
            if (
              ((function FN(e) {
                for (let n = Oy(e); null !== n; n = Py(n)) {
                  if (!n[dm]) continue;
                  const t = n[li];
                  for (let r = 0; r < t.length; r++) {
                    t1(t[r]);
                  }
                }
              })(n),
              c_(n, 2),
              null !== e.contentQueries && n_(e, n),
              o)
            ) {
              const u = e.contentCheckHooks;
              null !== u && Ra(n, u);
            } else {
              const u = e.contentHooks;
              null !== u && Oa(n, u, 1), Qc(n, 1);
            }
            !(function oN(e, n) {
              const t = e.hostBindingOpCodes;
              if (null === t) return;
              const r = Hv(n, Ts);
              try {
                for (let i = 0; i < t.length; i++) {
                  const s = t[i];
                  if (s < 0) Ar(~s);
                  else {
                    const o = s,
                      a = t[++i],
                      l = t[++i];
                    h1(a, o), (r.dirty = !1);
                    const u = Lc(r);
                    try {
                      l(2, n[o]);
                    } finally {
                      kc(r, u);
                    }
                  }
                }
              } finally {
                null === n[Ts] && Uv(n, Ts), Ar(-1);
              }
            })(e, n);
            const a = e.components;
            null !== a && f_(n, a, 0);
            const l = e.viewQuery;
            if ((null !== l && uf(2, l, r), o)) {
              const u = e.viewCheckHooks;
              null !== u && Ra(n, u);
            } else {
              const u = e.viewHooks;
              null !== u && Oa(n, u, 2), Qc(n, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (n[q] &= -73),
              Fm(n);
          } finally {
            Kc();
          }
        }
      }
      function c_(e, n) {
        for (let t = Oy(e); null !== t; t = Py(t))
          for (let r = ze; r < t.length; r++) d_(t[r], n);
      }
      function LN(e, n, t) {
        d_(At(n, e), t);
      }
      function d_(e, n) {
        if (
          !(function JT(e) {
            return 128 == (128 & e[q]);
          })(e)
        )
          return;
        const t = e[I],
          r = e[q];
        if ((80 & r && 0 === n) || 1024 & r || 2 === n)
          u_(t, e, t.template, e[Ae]);
        else if (e[ws] > 0) {
          c_(e, 1);
          const i = t.components;
          null !== i && f_(e, i, 1);
        }
      }
      function f_(e, n, t) {
        for (let r = 0; r < n.length; r++) LN(e, n[r], t);
      }
      class Js {
        get rootNodes() {
          const n = this._lView,
            t = n[I];
          return Xs(t, n, t.firstChild, []);
        }
        constructor(n, t) {
          (this._lView = n),
            (this._cdRefInjectingView = t),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Ae];
        }
        set context(n) {
          this._lView[Ae] = n;
        }
        get destroyed() {
          return 256 == (256 & this._lView[q]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const n = this._lView[Ce];
            if (at(n)) {
              const t = n[8],
                r = t ? t.indexOf(this) : -1;
              r > -1 && (Za(n, r), Va(t, r));
            }
            this._attachedToViewContainer = !1;
          }
          pd(this._lView[I], this._lView);
        }
        onDestroy(n) {
          !(function km(e, n) {
            if (256 == (256 & e[q])) throw new D(911, !1);
            null === e[Jn] && (e[Jn] = []), e[Jn].push(n);
          })(this._lView, n);
        }
        markForCheck() {
          Zs(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[q] &= -129;
        }
        reattach() {
          this._lView[q] |= 128;
        }
        detectChanges() {
          _l(this._lView[I], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new D(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function IM(e, n) {
              Hs(e, n, n[z], 2, null, null);
            })(this._lView[I], this._lView);
        }
        attachToAppRef(n) {
          if (this._attachedToViewContainer) throw new D(902, !1);
          this._appRef = n;
        }
      }
      class kN extends Js {
        constructor(n) {
          super(n), (this._view = n);
        }
        detectChanges() {
          const n = this._view;
          _l(n[I], n, n[Ae], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class h_ extends hl {
        constructor(n) {
          super(), (this.ngModule = n);
        }
        resolveComponentFactory(n) {
          const t = J(n);
          return new eo(t, this.ngModule);
        }
      }
      function p_(e) {
        const n = [];
        for (let t in e)
          e.hasOwnProperty(t) && n.push({ propName: e[t], templateName: t });
        return n;
      }
      class jN {
        constructor(n, t) {
          (this.injector = n), (this.parentInjector = t);
        }
        get(n, t, r) {
          r = Da(r);
          const i = this.injector.get(n, Gd, r);
          return i !== Gd || t === Gd ? i : this.parentInjector.get(n, t, r);
        }
      }
      class eo extends Dv {
        get inputs() {
          const n = this.componentDef,
            t = n.inputTransforms,
            r = p_(n.inputs);
          if (null !== t)
            for (const i of r)
              t.hasOwnProperty(i.propName) && (i.transform = t[i.propName]);
          return r;
        }
        get outputs() {
          return p_(this.componentDef.outputs);
        }
        constructor(n, t) {
          super(),
            (this.componentDef = n),
            (this.ngModule = t),
            (this.componentType = n.type),
            (this.selector = (function ST(e) {
              return e.map(bT).join(",");
            })(n.selectors)),
            (this.ngContentSelectors = n.ngContentSelectors
              ? n.ngContentSelectors
              : []),
            (this.isBoundToModule = !!t);
        }
        create(n, t, r, i) {
          let s = (i = i || this.ngModule) instanceof Rt ? i : i?.injector;
          s &&
            null !== this.componentDef.getStandaloneInjector &&
            (s = this.componentDef.getStandaloneInjector(s) || s);
          const o = s ? new jN(n, s) : n,
            a = o.get(Ks, null);
          if (null === a) throw new D(407, !1);
          const d = {
              rendererFactory: a,
              sanitizer: o.get(FA, null),
              effectManager: o.get(a_, null),
              afterRenderEventManager: o.get(Xd, null),
            },
            f = a.createRenderer(null, this.componentDef),
            h = this.componentDef.selectors[0][0] || "div",
            p = r
              ? (function lN(e, n, t, r) {
                  const s = r.get(kv, !1) || t === Ut.ShadowDom,
                    o = e.selectRootElement(n, s);
                  return (
                    (function uN(e) {
                      Qv(e);
                    })(o),
                    o
                  );
                })(f, r, this.componentDef.encapsulation, o)
              : Qa(
                  f,
                  h,
                  (function VN(e) {
                    const n = e.toLowerCase();
                    return "svg" === n ? "svg" : "math" === n ? "math" : null;
                  })(h)
                ),
            C = this.componentDef.signals
              ? 4608
              : this.componentDef.onPush
              ? 576
              : 528;
          let _ = null;
          null !== p && (_ = Ud(p, o, !0));
          const S = rf(0, null, null, 1, 0, null, null, null, null, null, null),
            M = ml(null, S, null, C, null, null, d, f, o, null, _);
          let H, fe;
          qc(M);
          try {
            const _e = this.componentDef;
            let Ye,
              Vt = null;
            _e.findHostDirectiveDefs
              ? ((Ye = []),
                (Vt = new Map()),
                _e.findHostDirectiveDefs(_e, Ye, Vt),
                Ye.push(_e))
              : (Ye = [_e]);
            const cn = (function HN(e, n) {
                const t = e[I],
                  r = Y;
                return (e[r] = n), xi(t, r, 2, "#host", null);
              })(M, p),
              nc = (function UN(e, n, t, r, i, s, o) {
                const a = i[I];
                !(function $N(e, n, t, r) {
                  for (const i of e)
                    n.mergedAttrs = Cs(n.mergedAttrs, i.hostAttrs);
                  null !== n.mergedAttrs &&
                    (vl(n, n.mergedAttrs, !0), null !== t && Ky(r, t, n));
                })(r, e, n, o);
                let l = null;
                null !== n && (l = Ud(n, i[Xn]));
                const u = s.rendererFactory.createRenderer(n, t);
                let c = 16;
                t.signals ? (c = 4096) : t.onPush && (c = 64);
                const d = ml(
                  i,
                  Kv(t),
                  null,
                  c,
                  i[e.index],
                  e,
                  s,
                  u,
                  null,
                  null,
                  l
                );
                return (
                  a.firstCreatePass && af(a, e, r.length - 1),
                  yl(i, d),
                  (i[e.index] = d)
                );
              })(cn, p, _e, Ye, M, d, f);
            (fe = Pm(S, Y)),
              p &&
                (function GN(e, n, t, r) {
                  if (r) Rc(e, t, ["ng-version", LA.full]);
                  else {
                    const { attrs: i, classes: s } = (function IT(e) {
                      const n = [],
                        t = [];
                      let r = 1,
                        i = 2;
                      for (; r < e.length; ) {
                        let s = e[r];
                        if ("string" == typeof s)
                          2 === i
                            ? "" !== s && n.push(s, e[++r])
                            : 8 === i && t.push(s);
                        else {
                          if (!Xt(i)) break;
                          i = s;
                        }
                        r++;
                      }
                      return { attrs: n, classes: t };
                    })(n.selectors[0]);
                    i && Rc(e, t, i),
                      s && s.length > 0 && qy(e, t, s.join(" "));
                  }
                })(f, _e, p, r),
              void 0 !== t &&
                (function WN(e, n, t) {
                  const r = (e.projection = []);
                  for (let i = 0; i < n.length; i++) {
                    const s = t[i];
                    r.push(null != s ? Array.from(s) : null);
                  }
                })(fe, this.ngContentSelectors, t),
              (H = (function zN(e, n, t, r, i, s) {
                const o = We(),
                  a = i[I],
                  l = Dt(o, i);
                Xv(a, i, o, t, null, r);
                for (let c = 0; c < t.length; c++)
                  et(Nr(i, a, o.directiveStart + c, o), i);
                Jv(a, i, o), l && et(l, i);
                const u = Nr(i, a, o.directiveStart + o.componentOffset, o);
                if (((e[Ae] = i[Ae] = u), null !== s))
                  for (const c of s) c(u, n);
                return ef(a, o, e), u;
              })(nc, _e, Ye, Vt, M, [qN])),
              df(S, M, null);
          } finally {
            Kc();
          }
          return new BN(this.componentType, H, Ri(fe, M), M, fe);
        }
      }
      class BN extends AA {
        constructor(n, t, r, i, s) {
          super(),
            (this.location = r),
            (this._rootLView = i),
            (this._tNode = s),
            (this.previousInputValues = null),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new kN(i)),
            (this.componentType = n);
        }
        setInput(n, t) {
          const r = this._tNode.inputs;
          let i;
          if (null !== r && (i = r[n])) {
            if (
              ((this.previousInputValues ??= new Map()),
              this.previousInputValues.has(n) &&
                Object.is(this.previousInputValues.get(n), t))
            )
              return;
            const s = this._rootLView;
            cf(s[I], s, i, n, t),
              this.previousInputValues.set(n, t),
              Zs(At(this._tNode.index, s));
          }
        }
        get injector() {
          return new ct(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(n) {
          this.hostView.onDestroy(n);
        }
      }
      function qN() {
        const e = We();
        Na(E()[I], e);
      }
      function te(e) {
        let n = (function g_(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          t = !0;
        const r = [e];
        for (; n; ) {
          let i;
          if (en(e)) i = n.ɵcmp || n.ɵdir;
          else {
            if (n.ɵcmp) throw new D(903, !1);
            i = n.ɵdir;
          }
          if (i) {
            if (t) {
              r.push(i);
              const o = e;
              (o.inputs = Dl(e.inputs)),
                (o.inputTransforms = Dl(e.inputTransforms)),
                (o.declaredInputs = Dl(e.declaredInputs)),
                (o.outputs = Dl(e.outputs));
              const a = i.hostBindings;
              a && YN(e, a);
              const l = i.viewQuery,
                u = i.contentQueries;
              if (
                (l && QN(e, l),
                u && ZN(e, u),
                pa(e.inputs, i.inputs),
                pa(e.declaredInputs, i.declaredInputs),
                pa(e.outputs, i.outputs),
                null !== i.inputTransforms &&
                  (null === o.inputTransforms && (o.inputTransforms = {}),
                  pa(o.inputTransforms, i.inputTransforms)),
                en(i) && i.data.animation)
              ) {
                const c = e.data;
                c.animation = (c.animation || []).concat(i.data.animation);
              }
            }
            const s = i.features;
            if (s)
              for (let o = 0; o < s.length; o++) {
                const a = s[o];
                a && a.ngInherit && a(e), a === te && (t = !1);
              }
          }
          n = Object.getPrototypeOf(n);
        }
        !(function KN(e) {
          let n = 0,
            t = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const i = e[r];
            (i.hostVars = n += i.hostVars),
              (i.hostAttrs = Cs(i.hostAttrs, (t = Cs(t, i.hostAttrs))));
          }
        })(r);
      }
      function Dl(e) {
        return e === fn ? {} : e === re ? [] : e;
      }
      function QN(e, n) {
        const t = e.viewQuery;
        e.viewQuery = t
          ? (r, i) => {
              n(r, i), t(r, i);
            }
          : n;
      }
      function ZN(e, n) {
        const t = e.contentQueries;
        e.contentQueries = t
          ? (r, i, s) => {
              n(r, i, s), t(r, i, s);
            }
          : n;
      }
      function YN(e, n) {
        const t = e.hostBindings;
        e.hostBindings = t
          ? (r, i) => {
              n(r, i), t(r, i);
            }
          : n;
      }
      function __(e) {
        const n = e.inputConfig,
          t = {};
        for (const r in n)
          if (n.hasOwnProperty(r)) {
            const i = n[r];
            Array.isArray(i) && i[2] && (t[r] = i[2]);
          }
        e.inputTransforms = t;
      }
      function Cl(e) {
        return (
          !!ff(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function ff(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function _n(e, n, t) {
        return (e[n] = t);
      }
      function tt(e, n, t) {
        return !Object.is(e[n], t) && ((e[n] = t), !0);
      }
      function xr(e, n, t, r) {
        const i = tt(e, n, t);
        return tt(e, n + 1, r) || i;
      }
      function ue(e, n, t, r) {
        const i = E();
        return tt(i, fi(), n) && (ee(), vn(Ee(), i, e, n, t, r)), ue;
      }
      function qe(e, n, t, r, i, s, o, a) {
        const l = E(),
          u = ee(),
          c = e + Y,
          d = u.firstCreatePass
            ? (function wR(e, n, t, r, i, s, o, a, l) {
                const u = n.consts,
                  c = xi(n, e, 4, o || null, tr(u, a));
                sf(n, t, c, tr(u, l)), Na(n, c);
                const d = (c.tView = rf(
                  2,
                  c,
                  r,
                  i,
                  s,
                  n.directiveRegistry,
                  n.pipeRegistry,
                  null,
                  n.schemas,
                  u,
                  null
                ));
                return (
                  null !== n.queries &&
                    (n.queries.template(n, c),
                    (d.queries = n.queries.embeddedTView(c))),
                  c
                );
              })(c, u, l, n, t, r, i, s, o)
            : u.data[c];
        mn(d, !1);
        const f = O_(u, l, d, e);
        Aa() && Xa(u, l, f, d),
          et(f, l),
          yl(l, (l[c] = t_(f, l, f, d))),
          Sa(d) && tf(u, l, d),
          null != o && nf(l, d, a);
      }
      let O_ = function P_(e, n, t, r) {
        return ir(!0), n[z].createComment("");
      };
      function Q(e, n, t) {
        const r = E();
        return (
          tt(r, fi(), n) &&
            (function Pt(e, n, t, r, i, s, o, a) {
              const l = Dt(n, t);
              let c,
                u = n.inputs;
              !a && null != u && (c = u[r])
                ? (cf(e, t, c, r, i),
                  Tr(n) &&
                    (function mN(e, n) {
                      const t = At(n, e);
                      16 & t[q] || (t[q] |= 64);
                    })(t, n.index))
                : 3 & n.type &&
                  ((r = (function gN(e) {
                    return "class" === e
                      ? "className"
                      : "for" === e
                      ? "htmlFor"
                      : "formaction" === e
                      ? "formAction"
                      : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                      ? "readOnly"
                      : "tabindex" === e
                      ? "tabIndex"
                      : e;
                  })(r)),
                  (i = null != o ? o(i, n.value || "", r) : i),
                  s.setProperty(l, r, i));
            })(ee(), Ee(), r, e, n, r[z], t, !1),
          Q
        );
      }
      function vf(e, n, t, r, i) {
        const o = i ? "class" : "style";
        cf(e, t, n.inputs[o], o, r);
      }
      function y(e, n, t, r) {
        const i = E(),
          s = ee(),
          o = Y + e,
          a = i[z],
          l = s.firstCreatePass
            ? (function IR(e, n, t, r, i, s) {
                const o = n.consts,
                  l = xi(n, e, 2, r, tr(o, i));
                return (
                  sf(n, t, l, tr(o, s)),
                  null !== l.attrs && vl(l, l.attrs, !1),
                  null !== l.mergedAttrs && vl(l, l.mergedAttrs, !0),
                  null !== n.queries && n.queries.elementStart(n, l),
                  l
                );
              })(o, s, i, n, t, r)
            : s.data[o],
          u = F_(s, i, l, a, n, e);
        i[o] = u;
        const c = Sa(l);
        return (
          mn(l, !0),
          Ky(a, u, l),
          32 != (32 & l.flags) && Aa() && Xa(s, i, u, l),
          0 ===
            (function r1() {
              return j.lFrame.elementDepthCount;
            })() && et(u, i),
          (function i1() {
            j.lFrame.elementDepthCount++;
          })(),
          c && (tf(s, i, l), ef(s, l, i)),
          null !== r && nf(i, l),
          y
        );
      }
      function m() {
        let e = We();
        Uc() ? $c() : ((e = e.parent), mn(e, !1));
        const n = e;
        (function o1(e) {
          return j.skipHydrationRootTNode === e;
        })(n) &&
          (function c1() {
            j.skipHydrationRootTNode = null;
          })(),
          (function s1() {
            j.lFrame.elementDepthCount--;
          })();
        const t = ee();
        return (
          t.firstCreatePass && (Na(t, e), Pc(e) && t.queries.elementEnd(e)),
          null != n.classesWithoutHost &&
            (function b1(e) {
              return 0 != (8 & e.flags);
            })(n) &&
            vf(t, n, E(), n.classesWithoutHost, !0),
          null != n.stylesWithoutHost &&
            (function S1(e) {
              return 0 != (16 & e.flags);
            })(n) &&
            vf(t, n, E(), n.stylesWithoutHost, !1),
          m
        );
      }
      function O(e, n, t, r) {
        return y(e, n, t, r), m(), O;
      }
      let F_ = (e, n, t, r, i, s) => (
        ir(!0),
        Qa(
          r,
          i,
          (function Zm() {
            return j.lFrame.currentNamespace;
          })()
        )
      );
      function so(e, n, t) {
        const r = E(),
          i = ee(),
          s = e + Y,
          o = i.firstCreatePass
            ? (function AR(e, n, t, r, i) {
                const s = n.consts,
                  o = tr(s, r),
                  a = xi(n, e, 8, "ng-container", o);
                return (
                  null !== o && vl(a, o, !0),
                  sf(n, t, a, tr(s, i)),
                  null !== n.queries && n.queries.elementStart(n, a),
                  a
                );
              })(s, i, r, n, t)
            : i.data[s];
        mn(o, !0);
        const a = L_(i, r, o, e);
        return (
          (r[s] = a),
          Aa() && Xa(i, r, a, o),
          et(a, r),
          Sa(o) && (tf(i, r, o), ef(i, o, r)),
          null != t && nf(r, o),
          so
        );
      }
      function oo() {
        let e = We();
        const n = ee();
        return (
          Uc() ? $c() : ((e = e.parent), mn(e, !1)),
          n.firstCreatePass && (Na(n, e), Pc(e) && n.queries.elementEnd(e)),
          oo
        );
      }
      function _f(e, n, t) {
        return so(e, n, t), oo(), _f;
      }
      let L_ = (e, n, t, r) => (ir(!0), hd(n[z], ""));
      function Il() {
        return E();
      }
      function ao(e) {
        return !!e && "function" == typeof e.then;
      }
      function k_(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      function Ke(e, n, t, r) {
        const i = E(),
          s = ee(),
          o = We();
        return (
          (function j_(e, n, t, r, i, s, o) {
            const a = Sa(r),
              u = e.firstCreatePass && i_(e),
              c = n[Ae],
              d = r_(n);
            let f = !0;
            if (3 & r.type || o) {
              const g = Dt(r, n),
                v = o ? o(g) : g,
                C = d.length,
                _ = o ? (M) => o(me(M[r.index])) : r.index;
              let S = null;
              if (
                (!o &&
                  a &&
                  (S = (function OR(e, n, t, r) {
                    const i = e.cleanup;
                    if (null != i)
                      for (let s = 0; s < i.length - 1; s += 2) {
                        const o = i[s];
                        if (o === t && i[s + 1] === r) {
                          const a = n[ii],
                            l = i[s + 2];
                          return a.length > l ? a[l] : null;
                        }
                        "string" == typeof o && (s += 2);
                      }
                    return null;
                  })(e, n, i, r.index)),
                null !== S)
              )
                ((S.__ngLastListenerFn__ || S).__ngNextListenerFn__ = s),
                  (S.__ngLastListenerFn__ = s),
                  (f = !1);
              else {
                s = H_(r, n, c, s, !1);
                const M = t.listen(v, i, s);
                d.push(s, M), u && u.push(i, _, C, C + 1);
              }
            } else s = H_(r, n, c, s, !1);
            const h = r.outputs;
            let p;
            if (f && null !== h && (p = h[i])) {
              const g = p.length;
              if (g)
                for (let v = 0; v < g; v += 2) {
                  const H = n[p[v]][p[v + 1]].subscribe(s),
                    fe = d.length;
                  d.push(s, H), u && u.push(i, r.index, fe, -(fe + 1));
                }
            }
          })(s, i, i[z], o, e, n, r),
          Ke
        );
      }
      function B_(e, n, t, r) {
        try {
          return gn(6, n, t), !1 !== t(r);
        } catch (i) {
          return o_(e, i), !1;
        } finally {
          gn(7, n, t);
        }
      }
      function H_(e, n, t, r, i) {
        return function s(o) {
          if (o === Function) return r;
          Zs(e.componentOffset > -1 ? At(e.index, n) : n);
          let l = B_(n, t, r, o),
            u = s.__ngNextListenerFn__;
          for (; u; ) (l = B_(n, t, u, o) && l), (u = u.__ngNextListenerFn__);
          return i && !1 === l && o.preventDefault(), l;
        };
      }
      function Qe(e = 1) {
        return (function m1(e) {
          return (j.lFrame.contextLView = (function y1(e, n) {
            for (; e > 0; ) (n = n[oi]), e--;
            return n;
          })(e, j.lFrame.contextLView))[Ae];
        })(e);
      }
      function PR(e, n) {
        let t = null;
        const r = (function DT(e) {
          const n = e.attrs;
          if (null != n) {
            const t = n.indexOf(5);
            if (!(1 & t)) return n[t + 1];
          }
          return null;
        })(e);
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          if ("*" !== s) {
            if (null === r ? im(e, s, !0) : ET(r, s)) return i;
          } else t = i;
        }
        return t;
      }
      function Tl(e, n) {
        return (e << 17) | (n << 2);
      }
      function lr(e) {
        return (e >> 17) & 32767;
      }
      function Cf(e) {
        return 2 | e;
      }
      function Fr(e) {
        return (131068 & e) >> 2;
      }
      function wf(e, n) {
        return (-131069 & e) | (n << 2);
      }
      function Ef(e) {
        return 1 | e;
      }
      function J_(e, n, t, r, i) {
        const s = e[t + 1],
          o = null === n;
        let a = r ? lr(s) : Fr(s),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const c = e[a + 1];
          jR(e[a], n) && ((l = !0), (e[a + 1] = r ? Ef(c) : Cf(c))),
            (a = r ? lr(c) : Fr(c));
        }
        l && (e[t + 1] = r ? Cf(s) : Ef(s));
      }
      function jR(e, n) {
        return (
          null === e ||
          null == n ||
          (Array.isArray(e) ? e[1] : e) === n ||
          (!(!Array.isArray(e) || "string" != typeof n) && Ci(e, n) >= 0)
        );
      }
      const Ve = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function eD(e) {
        return e.substring(Ve.key, Ve.keyEnd);
      }
      function tD(e, n) {
        const t = Ve.textEnd;
        return t === n
          ? -1
          : ((n = Ve.keyEnd =
              (function $R(e, n, t) {
                for (; n < t && e.charCodeAt(n) > 32; ) n++;
                return n;
              })(e, (Ve.key = n), t)),
            zi(e, n, t));
      }
      function zi(e, n, t) {
        for (; n < t && e.charCodeAt(n) <= 32; ) n++;
        return n;
      }
      function Ml(e, n) {
        return (
          (function nn(e, n, t, r) {
            const i = E(),
              s = ee(),
              o = Fn(2);
            s.firstUpdatePass && lD(s, e, o, r),
              n !== G &&
                tt(i, o, n) &&
                cD(
                  s,
                  s.data[ut()],
                  i,
                  i[z],
                  e,
                  (i[o + 1] = (function eO(e, n) {
                    return (
                      null == e ||
                        "" === e ||
                        ("string" == typeof n
                          ? (e += n)
                          : "object" == typeof e && (e = Le(or(e)))),
                      e
                    );
                  })(n, t)),
                  r,
                  o
                );
          })(e, n, null, !0),
          Ml
        );
      }
      function Cn(e) {
        !(function rn(e, n, t, r) {
          const i = ee(),
            s = Fn(2);
          i.firstUpdatePass && lD(i, null, s, r);
          const o = E();
          if (t !== G && tt(o, s, t)) {
            const a = i.data[ut()];
            if (fD(a, r) && !aD(i, s)) {
              let l = r ? a.classesWithoutHost : a.stylesWithoutHost;
              null !== l && (t = yc(l, t || "")), vf(i, a, o, t, r);
            } else
              !(function JR(e, n, t, r, i, s, o, a) {
                i === G && (i = re);
                let l = 0,
                  u = 0,
                  c = 0 < i.length ? i[0] : null,
                  d = 0 < s.length ? s[0] : null;
                for (; null !== c || null !== d; ) {
                  const f = l < i.length ? i[l + 1] : void 0,
                    h = u < s.length ? s[u + 1] : void 0;
                  let g,
                    p = null;
                  c === d
                    ? ((l += 2), (u += 2), f !== h && ((p = d), (g = h)))
                    : null === d || (null !== c && c < d)
                    ? ((l += 2), (p = c))
                    : ((u += 2), (p = d), (g = h)),
                    null !== p && cD(e, n, t, r, p, g, o, a),
                    (c = l < i.length ? i[l] : null),
                    (d = u < s.length ? s[u] : null);
                }
              })(
                i,
                a,
                o,
                o[z],
                o[s + 1],
                (o[s + 1] = (function YR(e, n, t) {
                  if (null == t || "" === t) return re;
                  const r = [],
                    i = or(t);
                  if (Array.isArray(i))
                    for (let s = 0; s < i.length; s++) e(r, i[s], !0);
                  else if ("object" == typeof i)
                    for (const s in i) i.hasOwnProperty(s) && e(r, s, i[s]);
                  else "string" == typeof i && n(r, i);
                  return r;
                })(e, n, t)),
                r,
                s
              );
          }
        })(XR, wn, e, !0);
      }
      function wn(e, n) {
        for (
          let t = (function HR(e) {
            return (
              (function rD(e) {
                (Ve.key = 0),
                  (Ve.keyEnd = 0),
                  (Ve.value = 0),
                  (Ve.valueEnd = 0),
                  (Ve.textEnd = e.length);
              })(e),
              tD(e, zi(e, 0, Ve.textEnd))
            );
          })(n);
          t >= 0;
          t = tD(n, t)
        )
          Nt(e, eD(n), !0);
      }
      function aD(e, n) {
        return n >= e.expandoStartIndex;
      }
      function lD(e, n, t, r) {
        const i = e.data;
        if (null === i[t + 1]) {
          const s = i[ut()],
            o = aD(e, t);
          fD(s, r) && null === n && !o && (n = !1),
            (n = (function qR(e, n, t, r) {
              const i = (function Gc(e) {
                const n = j.lFrame.currentDirectiveIndex;
                return -1 === n ? null : e[n];
              })(e);
              let s = r ? n.residualClasses : n.residualStyles;
              if (null === i)
                0 === (r ? n.classBindings : n.styleBindings) &&
                  ((t = lo((t = bf(null, e, n, t, r)), n.attrs, r)),
                  (s = null));
              else {
                const o = n.directiveStylingLast;
                if (-1 === o || e[o] !== i)
                  if (((t = bf(i, e, n, t, r)), null === s)) {
                    let l = (function KR(e, n, t) {
                      const r = t ? n.classBindings : n.styleBindings;
                      if (0 !== Fr(r)) return e[lr(r)];
                    })(e, n, r);
                    void 0 !== l &&
                      Array.isArray(l) &&
                      ((l = bf(null, e, n, l[1], r)),
                      (l = lo(l, n.attrs, r)),
                      (function QR(e, n, t, r) {
                        e[lr(t ? n.classBindings : n.styleBindings)] = r;
                      })(e, n, r, l));
                  } else
                    s = (function ZR(e, n, t) {
                      let r;
                      const i = n.directiveEnd;
                      for (let s = 1 + n.directiveStylingLast; s < i; s++)
                        r = lo(r, e[s].hostAttrs, t);
                      return lo(r, n.attrs, t);
                    })(e, n, r);
              }
              return (
                void 0 !== s &&
                  (r ? (n.residualClasses = s) : (n.residualStyles = s)),
                t
              );
            })(i, s, n, r)),
            (function kR(e, n, t, r, i, s) {
              let o = s ? n.classBindings : n.styleBindings,
                a = lr(o),
                l = Fr(o);
              e[r] = t;
              let c,
                u = !1;
              if (
                (Array.isArray(t)
                  ? ((c = t[1]), (null === c || Ci(t, c) > 0) && (u = !0))
                  : (c = t),
                i)
              )
                if (0 !== l) {
                  const f = lr(e[a + 1]);
                  (e[r + 1] = Tl(f, a)),
                    0 !== f && (e[f + 1] = wf(e[f + 1], r)),
                    (e[a + 1] = (function FR(e, n) {
                      return (131071 & e) | (n << 17);
                    })(e[a + 1], r));
                } else
                  (e[r + 1] = Tl(a, 0)),
                    0 !== a && (e[a + 1] = wf(e[a + 1], r)),
                    (a = r);
              else
                (e[r + 1] = Tl(l, 0)),
                  0 === a ? (a = r) : (e[l + 1] = wf(e[l + 1], r)),
                  (l = r);
              u && (e[r + 1] = Cf(e[r + 1])),
                J_(e, c, r, !0),
                J_(e, c, r, !1),
                (function VR(e, n, t, r, i) {
                  const s = i ? e.residualClasses : e.residualStyles;
                  null != s &&
                    "string" == typeof n &&
                    Ci(s, n) >= 0 &&
                    (t[r + 1] = Ef(t[r + 1]));
                })(n, c, e, r, s),
                (o = Tl(a, l)),
                s ? (n.classBindings = o) : (n.styleBindings = o);
            })(i, s, n, t, o, r);
        }
      }
      function bf(e, n, t, r, i) {
        let s = null;
        const o = t.directiveEnd;
        let a = t.directiveStylingLast;
        for (
          -1 === a ? (a = t.directiveStart) : a++;
          a < o && ((s = n[a]), (r = lo(r, s.hostAttrs, i)), s !== e);

        )
          a++;
        return null !== e && (t.directiveStylingLast = a), r;
      }
      function lo(e, n, t) {
        const r = t ? 1 : 2;
        let i = -1;
        if (null !== n)
          for (let s = 0; s < n.length; s++) {
            const o = n[s];
            "number" == typeof o
              ? (i = o)
              : i === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                Nt(e, o, !!t || n[++s]));
          }
        return void 0 === e ? null : e;
      }
      function XR(e, n, t) {
        const r = String(n);
        "" !== r && !r.includes(" ") && Nt(e, r, t);
      }
      function cD(e, n, t, r, i, s, o, a) {
        if (!(3 & n.type)) return;
        const l = e.data,
          u = l[a + 1],
          c = (function LR(e) {
            return 1 == (1 & e);
          })(u)
            ? dD(l, n, t, i, Fr(u), o)
            : void 0;
        Al(c) ||
          (Al(s) ||
            ((function xR(e) {
              return 2 == (2 & e);
            })(u) &&
              (s = dD(l, null, t, i, a, o))),
          (function LM(e, n, t, r, i) {
            if (n) i ? e.addClass(t, r) : e.removeClass(t, r);
            else {
              let s = -1 === r.indexOf("-") ? void 0 : sr.DashCase;
              null == i
                ? e.removeStyle(t, r, s)
                : ("string" == typeof i &&
                    i.endsWith("!important") &&
                    ((i = i.slice(0, -10)), (s |= sr.Important)),
                  e.setStyle(t, r, i, s));
            }
          })(r, o, Ma(ut(), t), i, s));
      }
      function dD(e, n, t, r, i, s) {
        const o = null === n;
        let a;
        for (; i > 0; ) {
          const l = e[i],
            u = Array.isArray(l),
            c = u ? l[1] : l,
            d = null === c;
          let f = t[i + 1];
          f === G && (f = d ? re : void 0);
          let h = d ? rd(f, r) : c === r ? f : void 0;
          if ((u && !Al(h) && (h = rd(l, r)), Al(h) && ((a = h), o))) return a;
          const p = e[i + 1];
          i = o ? lr(p) : Fr(p);
        }
        if (null !== n) {
          let l = s ? n.residualClasses : n.residualStyles;
          null != l && (a = rd(l, r));
        }
        return a;
      }
      function Al(e) {
        return void 0 !== e;
      }
      function fD(e, n) {
        return 0 != (e.flags & (n ? 8 : 16));
      }
      function b(e, n = "") {
        const t = E(),
          r = ee(),
          i = e + Y,
          s = r.firstCreatePass ? xi(r, i, 1, n, null) : r.data[i],
          o = hD(r, t, s, n, e);
        (t[i] = o), Aa() && Xa(r, t, o, s), mn(s, !1);
      }
      let hD = (e, n, t, r, i) => (
        ir(!0),
        (function Ka(e, n) {
          return e.createText(n);
        })(n[z], r)
      );
      function Gi(e) {
        return uo("", e, ""), Gi;
      }
      function uo(e, n, t) {
        const r = E(),
          i = (function Li(e, n, t, r) {
            return tt(e, fi(), t) ? n + U(t) + r : G;
          })(r, e, n, t);
        return (
          i !== G &&
            (function jn(e, n, t) {
              const r = Ma(n, e);
              !(function Fy(e, n, t) {
                e.setValue(n, t);
              })(e[z], r, t);
            })(r, ut(), i),
          uo
        );
      }
      const qi = "en-US";
      let FD = qi;
      function Tf(e, n, t, r, i) {
        if (((e = B(e)), Array.isArray(e)))
          for (let s = 0; s < e.length; s++) Tf(e[s], n, t, r, i);
        else {
          const s = ee(),
            o = E(),
            a = We();
          let l = Pr(e) ? e : B(e.provide);
          const u = hv(e),
            c = 1048575 & a.providerIndexes,
            d = a.directiveStart,
            f = a.providerIndexes >> 20;
          if (Pr(e) || !e.multi) {
            const h = new Rs(u, i, w),
              p = Af(l, n, i ? c : c + f, d);
            -1 === p
              ? (ed(xa(a, o), s, l),
                Mf(s, e, n.length),
                n.push(l),
                a.directiveStart++,
                a.directiveEnd++,
                i && (a.providerIndexes += 1048576),
                t.push(h),
                o.push(h))
              : ((t[p] = h), (o[p] = h));
          } else {
            const h = Af(l, n, c + f, d),
              p = Af(l, n, c, c + f),
              v = p >= 0 && t[p];
            if ((i && !v) || (!i && !(h >= 0 && t[h]))) {
              ed(xa(a, o), s, l);
              const C = (function CP(e, n, t, r, i) {
                const s = new Rs(e, t, w);
                return (
                  (s.multi = []),
                  (s.index = n),
                  (s.componentProviders = 0),
                  oC(s, i, r && !t),
                  s
                );
              })(i ? DP : _P, t.length, i, r, u);
              !i && v && (t[p].providerFactory = C),
                Mf(s, e, n.length, 0),
                n.push(l),
                a.directiveStart++,
                a.directiveEnd++,
                i && (a.providerIndexes += 1048576),
                t.push(C),
                o.push(C);
            } else Mf(s, e, h > -1 ? h : p, oC(t[i ? p : h], u, !i && r));
            !i && r && v && t[p].componentProviders++;
          }
        }
      }
      function Mf(e, n, t, r) {
        const i = Pr(n),
          s = (function fA(e) {
            return !!e.useClass;
          })(n);
        if (i || s) {
          const l = (s ? B(n.useClass) : n).prototype.ngOnDestroy;
          if (l) {
            const u = e.destroyHooks || (e.destroyHooks = []);
            if (!i && n.multi) {
              const c = u.indexOf(t);
              -1 === c ? u.push(t, [r, l]) : u[c + 1].push(r, l);
            } else u.push(t, l);
          }
        }
      }
      function oC(e, n, t) {
        return t && e.componentProviders++, e.multi.push(n) - 1;
      }
      function Af(e, n, t, r) {
        for (let i = t; i < r; i++) if (n[i] === e) return i;
        return -1;
      }
      function _P(e, n, t, r) {
        return Nf(this.multi, []);
      }
      function DP(e, n, t, r) {
        const i = this.multi;
        let s;
        if (this.providerFactory) {
          const o = this.providerFactory.componentProviders,
            a = Nr(t, t[I], this.providerFactory.index, r);
          (s = a.slice(0, o)), Nf(i, s);
          for (let l = o; l < a.length; l++) s.push(a[l]);
        } else (s = []), Nf(i, s);
        return s;
      }
      function Nf(e, n) {
        for (let t = 0; t < e.length; t++) n.push((0, e[t])());
        return n;
      }
      function De(e, n = []) {
        return (t) => {
          t.providersResolver = (r, i) =>
            (function vP(e, n, t) {
              const r = ee();
              if (r.firstCreatePass) {
                const i = en(e);
                Tf(t, r.data, r.blueprint, i, !0),
                  Tf(n, r.data, r.blueprint, i, !1);
              }
            })(r, i ? i(e) : e, n);
        };
      }
      class kr {}
      class aC {}
      class Rf extends kr {
        constructor(n, t, r) {
          super(),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new h_(this));
          const i = Mt(n);
          (this._bootstrapComponents = Vn(i.bootstrap)),
            (this._r3Injector = Iv(
              n,
              t,
              [
                { provide: kr, useValue: this },
                { provide: hl, useValue: this.componentFactoryResolver },
                ...r,
              ],
              Le(n),
              new Set(["environment"])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(n));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const n = this._r3Injector;
          !n.destroyed && n.destroy(),
            this.destroyCbs.forEach((t) => t()),
            (this.destroyCbs = null);
        }
        onDestroy(n) {
          this.destroyCbs.push(n);
        }
      }
      class Of extends aC {
        constructor(n) {
          super(), (this.moduleType = n);
        }
        create(n) {
          return new Rf(this.moduleType, n, []);
        }
      }
      class lC extends kr {
        constructor(n) {
          super(),
            (this.componentFactoryResolver = new h_(this)),
            (this.instance = null);
          const t = new ol(
            [
              ...n.providers,
              { provide: kr, useValue: this },
              { provide: hl, useValue: this.componentFactoryResolver },
            ],
            n.parent || sl(),
            n.debugName,
            new Set(["environment"])
          );
          (this.injector = t),
            n.runEnvironmentInitializers && t.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(n) {
          this.injector.onDestroy(n);
        }
      }
      function Pf(e, n, t = null) {
        return new lC({
          providers: e,
          parent: n,
          debugName: t,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      let bP = (() => {
        class e {
          constructor(t) {
            (this._injector = t), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(t) {
            if (!t.standalone) return null;
            if (!this.cachedInjectors.has(t)) {
              const r = uv(0, t.type),
                i =
                  r.length > 0
                    ? Pf([r], this._injector, `Standalone[${t.type.name}]`)
                    : null;
              this.cachedInjectors.set(t, i);
            }
            return this.cachedInjectors.get(t);
          }
          ngOnDestroy() {
            try {
              for (const t of this.cachedInjectors.values())
                null !== t && t.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
          static #e = (this.ɵprov = R({
            token: e,
            providedIn: "environment",
            factory: () => new e(A(Rt)),
          }));
        }
        return e;
      })();
      function ur(e) {
        e.getStandaloneInjector = (n) =>
          n.get(bP).getOrCreateStandaloneInjector(e);
      }
      function cr(e, n, t, r) {
        return (function mC(e, n, t, r, i, s) {
          const o = n + t;
          return tt(e, o, i)
            ? _n(e, o + 1, s ? r.call(s, i) : r(i))
            : mo(e, o + 1);
        })(E(), lt(), e, n, t, r);
      }
      function gC(e, n, t, r, i, s, o) {
        return (function _C(e, n, t, r, i, s, o, a, l) {
          const u = n + t;
          return (function Wt(e, n, t, r, i, s) {
            const o = xr(e, n, t, r);
            return xr(e, n + 2, i, s) || o;
          })(e, u, i, s, o, a)
            ? _n(e, u + 4, l ? r.call(l, i, s, o, a) : r(i, s, o, a))
            : mo(e, u + 4);
        })(E(), lt(), e, n, t, r, i, s, o);
      }
      function mo(e, n) {
        const t = e[n];
        return t === G ? void 0 : t;
      }
      function KP() {
        return this._results[Symbol.iterator]();
      }
      class Ff {
        static #e = Symbol.iterator;
        get changes() {
          return this._changes || (this._changes = new we());
        }
        constructor(n = !1) {
          (this._emitDistinctChangesOnly = n),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const t = Ff.prototype;
          t[Symbol.iterator] || (t[Symbol.iterator] = KP);
        }
        get(n) {
          return this._results[n];
        }
        map(n) {
          return this._results.map(n);
        }
        filter(n) {
          return this._results.filter(n);
        }
        find(n) {
          return this._results.find(n);
        }
        reduce(n, t) {
          return this._results.reduce(n, t);
        }
        forEach(n) {
          this._results.forEach(n);
        }
        some(n) {
          return this._results.some(n);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(n, t) {
          const r = this;
          r.dirty = !1;
          const i = (function Gt(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(n);
          (this._changesDetected = !(function j1(e, n, t) {
            if (e.length !== n.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let i = e[r],
                s = n[r];
              if ((t && ((i = t(i)), (s = t(s))), s !== i)) return !1;
            }
            return !0;
          })(r._results, i, t)) &&
            ((r._results = i),
            (r.length = i.length),
            (r.last = i[this.length - 1]),
            (r.first = i[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      function ZP(e, n, t, r = !0) {
        const i = n[I];
        if (
          ((function MM(e, n, t, r) {
            const i = ze + r,
              s = t.length;
            r > 0 && (t[i - 1][Jt] = n),
              r < s - ze
                ? ((n[Jt] = t[i]), dy(t, ze + r, n))
                : (t.push(n), (n[Jt] = null)),
              (n[Ce] = t);
            const o = n[bs];
            null !== o &&
              t !== o &&
              (function AM(e, n) {
                const t = e[li];
                n[Ne] !== n[Ce][Ce][Ne] && (e[dm] = !0),
                  null === t ? (e[li] = [n]) : t.push(n);
              })(o, n);
            const a = n[hn];
            null !== a && a.insertView(e), (n[q] |= 128);
          })(i, n, e, t),
          r)
        ) {
          const s = vd(t, e),
            o = n[z],
            a = Ya(o, e[pn]);
          null !== a &&
            (function SM(e, n, t, r, i, s) {
              (r[Ie] = i), (r[Je] = n), Hs(e, r, t, 1, i, s);
            })(i, e[Je], o, n, a, s);
        }
      }
      let En = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = JP);
        }
        return e;
      })();
      const YP = En,
        XP = class extends YP {
          constructor(n, t, r) {
            super(),
              (this._declarationLView = n),
              (this._declarationTContainer = t),
              (this.elementRef = r);
          }
          get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null;
          }
          createEmbeddedView(n, t) {
            return this.createEmbeddedViewImpl(n, t);
          }
          createEmbeddedViewImpl(n, t, r) {
            const i = (function QP(e, n, t, r) {
              const i = n.tView,
                a = ml(
                  e,
                  i,
                  t,
                  4096 & e[q] ? 4096 : 16,
                  null,
                  n,
                  null,
                  null,
                  null,
                  r?.injector ?? null,
                  r?.hydrationInfo ?? null
                );
              a[bs] = e[n.index];
              const u = e[hn];
              return (
                null !== u && (a[hn] = u.createEmbeddedView(i)), df(i, a, t), a
              );
            })(this._declarationLView, this._declarationTContainer, n, {
              injector: t,
              hydrationInfo: r,
            });
            return new Js(i);
          }
        };
      function JP() {
        return xl(We(), E());
      }
      function xl(e, n) {
        return 4 & e.type ? new XP(n, e, Ri(e, n)) : null;
      }
      let sn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = sx);
        }
        return e;
      })();
      function sx() {
        return TC(We(), E());
      }
      const ox = sn,
        SC = class extends ox {
          constructor(n, t, r) {
            super(),
              (this._lContainer = n),
              (this._hostTNode = t),
              (this._hostLView = r);
          }
          get element() {
            return Ri(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new ct(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const n = Fa(this._hostTNode, this._hostLView);
            if (Yc(n)) {
              const t = Ps(n, this._hostLView),
                r = Os(n);
              return new ct(t[I].data[r + 8], t);
            }
            return new ct(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(n) {
            const t = IC(this._lContainer);
            return (null !== t && t[n]) || null;
          }
          get length() {
            return this._lContainer.length - ze;
          }
          createEmbeddedView(n, t, r) {
            let i, s;
            "number" == typeof r
              ? (i = r)
              : null != r && ((i = r.index), (s = r.injector));
            const a = n.createEmbeddedViewImpl(t || {}, s, null);
            return this.insertImpl(a, i, false), a;
          }
          createComponent(n, t, r, i, s) {
            const o =
              n &&
              !(function Fs(e) {
                return "function" == typeof e;
              })(n);
            let a;
            if (o) a = t;
            else {
              const g = t || {};
              (a = g.index),
                (r = g.injector),
                (i = g.projectableNodes),
                (s = g.environmentInjector || g.ngModuleRef);
            }
            const l = o ? n : new eo(J(n)),
              u = r || this.parentInjector;
            if (!s && null == l.ngModule) {
              const v = (o ? u : this.parentInjector).get(Rt, null);
              v && (s = v);
            }
            J(l.componentType ?? {});
            const h = l.create(u, i, null, s);
            return this.insertImpl(h.hostView, a, false), h;
          }
          insert(n, t) {
            return this.insertImpl(n, t, !1);
          }
          insertImpl(n, t, r) {
            const i = n._lView;
            if (
              (function e1(e) {
                return at(e[Ce]);
              })(i)
            ) {
              const l = this.indexOf(n);
              if (-1 !== l) this.detach(l);
              else {
                const u = i[Ce],
                  c = new SC(u, u[Je], u[Ce]);
                c.detach(c.indexOf(n));
              }
            }
            const o = this._adjustIndex(t),
              a = this._lContainer;
            return (
              ZP(a, i, o, !r), n.attachToViewContainerRef(), dy(Lf(a), o, n), n
            );
          }
          move(n, t) {
            return this.insert(n, t);
          }
          indexOf(n) {
            const t = IC(this._lContainer);
            return null !== t ? t.indexOf(n) : -1;
          }
          remove(n) {
            const t = this._adjustIndex(n, -1),
              r = Za(this._lContainer, t);
            r && (Va(Lf(this._lContainer), t), pd(r[I], r));
          }
          detach(n) {
            const t = this._adjustIndex(n, -1),
              r = Za(this._lContainer, t);
            return r && null != Va(Lf(this._lContainer), t) ? new Js(r) : null;
          }
          _adjustIndex(n, t = 0) {
            return n ?? this.length + t;
          }
        };
      function IC(e) {
        return e[8];
      }
      function Lf(e) {
        return e[8] || (e[8] = []);
      }
      function TC(e, n) {
        let t;
        const r = n[e.index];
        return (
          at(r)
            ? (t = r)
            : ((t = t_(r, n, null, e)), (n[e.index] = t), yl(n, t)),
          MC(t, n, e, r),
          new SC(t, e, n)
        );
      }
      let MC = function AC(e, n, t, r) {
        if (e[pn]) return;
        let i;
        (i =
          8 & t.type
            ? me(r)
            : (function ax(e, n) {
                const t = e[z],
                  r = t.createComment(""),
                  i = Dt(n, e);
                return (
                  Rr(
                    t,
                    Ya(t, i),
                    r,
                    (function PM(e, n) {
                      return e.nextSibling(n);
                    })(t, i),
                    !1
                  ),
                  r
                );
              })(n, t)),
          (e[pn] = i);
      };
      class kf {
        constructor(n) {
          (this.queryList = n), (this.matches = null);
        }
        clone() {
          return new kf(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Vf {
        constructor(n = []) {
          this.queries = n;
        }
        createEmbeddedView(n) {
          const t = n.queries;
          if (null !== t) {
            const r =
                null !== n.contentQueries ? n.contentQueries[0] : t.length,
              i = [];
            for (let s = 0; s < r; s++) {
              const o = t.getByIndex(s);
              i.push(this.queries[o.indexInDeclarationView].clone());
            }
            return new Vf(i);
          }
          return null;
        }
        insertView(n) {
          this.dirtyQueriesWithMatches(n);
        }
        detachView(n) {
          this.dirtyQueriesWithMatches(n);
        }
        dirtyQueriesWithMatches(n) {
          for (let t = 0; t < this.queries.length; t++)
            null !== xC(n, t).matches && this.queries[t].setDirty();
        }
      }
      class NC {
        constructor(n, t, r = null) {
          (this.predicate = n), (this.flags = t), (this.read = r);
        }
      }
      class jf {
        constructor(n = []) {
          this.queries = n;
        }
        elementStart(n, t) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(n, t);
        }
        elementEnd(n) {
          for (let t = 0; t < this.queries.length; t++)
            this.queries[t].elementEnd(n);
        }
        embeddedTView(n) {
          let t = null;
          for (let r = 0; r < this.length; r++) {
            const i = null !== t ? t.length : 0,
              s = this.getByIndex(r).embeddedTView(n, i);
            s &&
              ((s.indexInDeclarationView = r),
              null !== t ? t.push(s) : (t = [s]));
          }
          return null !== t ? new jf(t) : null;
        }
        template(n, t) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(n, t);
        }
        getByIndex(n) {
          return this.queries[n];
        }
        get length() {
          return this.queries.length;
        }
        track(n) {
          this.queries.push(n);
        }
      }
      class Bf {
        constructor(n, t = -1) {
          (this.metadata = n),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = t);
        }
        elementStart(n, t) {
          this.isApplyingToNode(t) && this.matchTNode(n, t);
        }
        elementEnd(n) {
          this._declarationNodeIndex === n.index &&
            (this._appliesToNextNode = !1);
        }
        template(n, t) {
          this.elementStart(n, t);
        }
        embeddedTView(n, t) {
          return this.isApplyingToNode(n)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-n.index, t),
              new Bf(this.metadata))
            : null;
        }
        isApplyingToNode(n) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const t = this._declarationNodeIndex;
            let r = n.parent;
            for (; null !== r && 8 & r.type && r.index !== t; ) r = r.parent;
            return t === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(n, t) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              const s = r[i];
              this.matchTNodeWithReadOption(n, t, cx(t, s)),
                this.matchTNodeWithReadOption(n, t, La(t, n, s, !1, !1));
            }
          else
            r === En
              ? 4 & t.type && this.matchTNodeWithReadOption(n, t, -1)
              : this.matchTNodeWithReadOption(n, t, La(t, n, r, !1, !1));
        }
        matchTNodeWithReadOption(n, t, r) {
          if (null !== r) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === wt || i === sn || (i === En && 4 & t.type))
                this.addMatch(t.index, -2);
              else {
                const s = La(t, n, i, !1, !1);
                null !== s && this.addMatch(t.index, s);
              }
            else this.addMatch(t.index, r);
          }
        }
        addMatch(n, t) {
          null === this.matches
            ? (this.matches = [n, t])
            : this.matches.push(n, t);
        }
      }
      function cx(e, n) {
        const t = e.localNames;
        if (null !== t)
          for (let r = 0; r < t.length; r += 2) if (t[r] === n) return t[r + 1];
        return null;
      }
      function fx(e, n, t, r) {
        return -1 === t
          ? (function dx(e, n) {
              return 11 & e.type ? Ri(e, n) : 4 & e.type ? xl(e, n) : null;
            })(n, e)
          : -2 === t
          ? (function hx(e, n, t) {
              return t === wt
                ? Ri(n, e)
                : t === En
                ? xl(n, e)
                : t === sn
                ? TC(n, e)
                : void 0;
            })(e, n, r)
          : Nr(e, e[I], t, n);
      }
      function RC(e, n, t, r) {
        const i = n[hn].queries[r];
        if (null === i.matches) {
          const s = e.data,
            o = t.matches,
            a = [];
          for (let l = 0; l < o.length; l += 2) {
            const u = o[l];
            a.push(u < 0 ? null : fx(n, s[u], o[l + 1], t.metadata.read));
          }
          i.matches = a;
        }
        return i.matches;
      }
      function Hf(e, n, t, r) {
        const i = e.queries.getByIndex(t),
          s = i.matches;
        if (null !== s) {
          const o = RC(e, n, i, t);
          for (let a = 0; a < s.length; a += 2) {
            const l = s[a];
            if (l > 0) r.push(o[a / 2]);
            else {
              const u = s[a + 1],
                c = n[-l];
              for (let d = ze; d < c.length; d++) {
                const f = c[d];
                f[bs] === f[Ce] && Hf(f[I], f, u, r);
              }
              if (null !== c[li]) {
                const d = c[li];
                for (let f = 0; f < d.length; f++) {
                  const h = d[f];
                  Hf(h[I], h, u, r);
                }
              }
            }
          }
        }
        return r;
      }
      function vo(e) {
        const n = E(),
          t = ee(),
          r = zm();
        Wc(r + 1);
        const i = xC(t, r);
        if (
          e.dirty &&
          (function XT(e) {
            return 4 == (4 & e[q]);
          })(n) ===
            (2 == (2 & i.metadata.flags))
        ) {
          if (null === i.matches) e.reset([]);
          else {
            const s = i.crossesNgTemplate ? Hf(t, n, r, []) : RC(t, n, i, r);
            e.reset(s, PA), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Uf(e, n, t) {
        const r = ee();
        r.firstCreatePass &&
          (PC(r, new NC(e, n, t), -1),
          2 == (2 & n) && (r.staticViewQueries = !0)),
          OC(r, E(), n);
      }
      function $f(e, n, t, r) {
        const i = ee();
        if (i.firstCreatePass) {
          const s = We();
          PC(i, new NC(n, t, r), s.index),
            (function gx(e, n) {
              const t = e.contentQueries || (e.contentQueries = []);
              n !== (t.length ? t[t.length - 1] : -1) &&
                t.push(e.queries.length - 1, n);
            })(i, e),
            2 == (2 & t) && (i.staticContentQueries = !0);
        }
        OC(i, E(), t);
      }
      function _o() {
        return (function px(e, n) {
          return e[hn].queries[n].queryList;
        })(E(), zm());
      }
      function OC(e, n, t) {
        const r = new Ff(4 == (4 & t));
        (function fN(e, n, t, r) {
          const i = r_(n);
          i.push(t), e.firstCreatePass && i_(e).push(r, i.length - 1);
        })(e, n, r, r.destroy),
          null === n[hn] && (n[hn] = new Vf()),
          n[hn].queries.push(new kf(r));
      }
      function PC(e, n, t) {
        null === e.queries && (e.queries = new jf()),
          e.queries.track(new Bf(n, t));
      }
      function xC(e, n) {
        return e.queries.getByIndex(n);
      }
      const Qf = new N("Application Initializer");
      let Zf = (() => {
          class e {
            constructor() {
              (this.initialized = !1),
                (this.done = !1),
                (this.donePromise = new Promise((t, r) => {
                  (this.resolve = t), (this.reject = r);
                })),
                (this.appInits = T(Qf, { optional: !0 }) ?? []);
            }
            runInitializers() {
              if (this.initialized) return;
              const t = [];
              for (const i of this.appInits) {
                const s = i();
                if (ao(s)) t.push(s);
                else if (k_(s)) {
                  const o = new Promise((a, l) => {
                    s.subscribe({ complete: a, error: l });
                  });
                  t.push(o);
                }
              }
              const r = () => {
                (this.done = !0), this.resolve();
              };
              Promise.all(t)
                .then(() => {
                  r();
                })
                .catch((i) => {
                  this.reject(i);
                }),
                0 === t.length && r(),
                (this.initialized = !0);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            }));
          }
          return e;
        })(),
        YC = (() => {
          class e {
            log(t) {
              console.log(t);
            }
            warn(t) {
              console.warn(t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            }));
          }
          return e;
        })();
      const Bn = new N("LocaleId", {
        providedIn: "root",
        factory: () =>
          T(Bn, Z.Optional | Z.SkipSelf) ||
          (function kx() {
            return (typeof $localize < "u" && $localize.locale) || qi;
          })(),
      });
      let kl = (() => {
        class e {
          constructor() {
            (this.taskId = 0),
              (this.pendingTasks = new Set()),
              (this.hasPendingTasks = new Bt(!1));
          }
          add() {
            this.hasPendingTasks.next(!0);
            const t = this.taskId++;
            return this.pendingTasks.add(t), t;
          }
          remove(t) {
            this.pendingTasks.delete(t),
              0 === this.pendingTasks.size && this.hasPendingTasks.next(!1);
          }
          ngOnDestroy() {
            this.pendingTasks.clear(), this.hasPendingTasks.next(!1);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      class Bx {
        constructor(n, t) {
          (this.ngModuleFactory = n), (this.componentFactories = t);
        }
      }
      let XC = (() => {
        class e {
          compileModuleSync(t) {
            return new Of(t);
          }
          compileModuleAsync(t) {
            return Promise.resolve(this.compileModuleSync(t));
          }
          compileModuleAndAllComponentsSync(t) {
            const r = this.compileModuleSync(t),
              s = Vn(Mt(t).declarations).reduce((o, a) => {
                const l = J(a);
                return l && o.push(new eo(l)), o;
              }, []);
            return new Bx(r, s);
          }
          compileModuleAndAllComponentsAsync(t) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(t));
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      const nw = new N(""),
        jl = new N("");
      let th,
        Jf = (() => {
          class e {
            constructor(t, r, i) {
              (this._ngZone = t),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                th ||
                  ((function oF(e) {
                    th = e;
                  })(i),
                  i.addToWindow(r)),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      le.assertNotInAngularZone(),
                        queueMicrotask(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                queueMicrotask(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(t) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, r, i) {
              let s = -1;
              r &&
                r > 0 &&
                (s = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (o) => o.timeoutId !== s
                  )),
                    t(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: t, timeoutId: s, updateCb: i });
            }
            whenStable(t, r, i) {
              if (i && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(t, r, i), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(t) {
              this.registry.registerApplication(t, this);
            }
            unregisterApplication(t) {
              this.registry.unregisterApplication(t);
            }
            findProviders(t, r, i) {
              return [];
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(le), A(eh), A(jl));
            });
            static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        eh = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(t, r) {
              this._applications.set(t, r);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, r = !0) {
              return th?.findTestabilityInTree(this, t, r) ?? null;
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            }));
          }
          return e;
        })(),
        dr = null;
      const rw = new N("AllowMultipleToken"),
        nh = new N("PlatformDestroyListeners"),
        rh = new N("appBootstrapListener");
      class sw {
        constructor(n, t) {
          (this.name = n), (this.token = t);
        }
      }
      function aw(e, n, t = []) {
        const r = `Platform: ${n}`,
          i = new N(r);
        return (s = []) => {
          let o = ih();
          if (!o || o.injector.get(rw, !1)) {
            const a = [...t, ...s, { provide: i, useValue: !0 }];
            e
              ? e(a)
              : (function uF(e) {
                  if (dr && !dr.get(rw, !1)) throw new D(400, !1);
                  (function iw() {
                    !(function jT(e) {
                      Em = e;
                    })(() => {
                      throw new D(600, !1);
                    });
                  })(),
                    (dr = e);
                  const n = e.get(uw);
                  (function ow(e) {
                    e.get(pv, null)?.forEach((t) => t());
                  })(e);
                })(
                  (function lw(e = [], n) {
                    return Ot.create({
                      name: n,
                      providers: [
                        { provide: Rd, useValue: "platform" },
                        { provide: nh, useValue: new Set([() => (dr = null)]) },
                        ...e,
                      ],
                    });
                  })(a, r)
                );
          }
          return (function dF(e) {
            const n = ih();
            if (!n) throw new D(401, !1);
            return n;
          })();
        };
      }
      function ih() {
        return dr?.get(uw) ?? null;
      }
      let uw = (() => {
        class e {
          constructor(t) {
            (this._injector = t),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, r) {
            const i = (function fF(e = "zone.js", n) {
              return "noop" === e ? new KA() : "zone.js" === e ? new le(n) : e;
            })(
              r?.ngZone,
              (function cw(e) {
                return {
                  enableLongStackTrace: !1,
                  shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
                  shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
                };
              })({
                eventCoalescing: r?.ngZoneEventCoalescing,
                runCoalescing: r?.ngZoneRunCoalescing,
              })
            );
            return i.run(() => {
              const s = (function EP(e, n, t) {
                  return new Rf(e, n, t);
                })(
                  t.moduleType,
                  this.injector,
                  (function gw(e) {
                    return [
                      { provide: le, useFactory: e },
                      {
                        provide: Gs,
                        multi: !0,
                        useFactory: () => {
                          const n = T(pF, { optional: !0 });
                          return () => n.initialize();
                        },
                      },
                      { provide: pw, useFactory: hF },
                      { provide: Rv, useFactory: Ov },
                    ];
                  })(() => i)
                ),
                o = s.injector.get(kn, null);
              return (
                i.runOutsideAngular(() => {
                  const a = i.onError.subscribe({
                    next: (l) => {
                      o.handleError(l);
                    },
                  });
                  s.onDestroy(() => {
                    Bl(this._modules, s), a.unsubscribe();
                  });
                }),
                (function dw(e, n, t) {
                  try {
                    const r = t();
                    return ao(r)
                      ? r.catch((i) => {
                          throw (
                            (n.runOutsideAngular(() => e.handleError(i)), i)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (n.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(o, i, () => {
                  const a = s.injector.get(Zf);
                  return (
                    a.runInitializers(),
                    a.donePromise.then(
                      () => (
                        (function LD(e) {
                          Ht(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (FD = e.toLowerCase().replace(/_/g, "-"));
                        })(s.injector.get(Bn, qi) || qi),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, r = []) {
            const i = fw({}, r);
            return (function aF(e, n, t) {
              const r = new Of(t);
              return Promise.resolve(r);
            })(0, 0, t).then((s) => this.bootstrapModuleFactory(s, i));
          }
          _moduleDoBootstrap(t) {
            const r = t.injector.get(Vr);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach((i) => r.bootstrap(i));
            else {
              if (!t.instance.ngDoBootstrap) throw new D(-403, !1);
              t.instance.ngDoBootstrap(r);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new D(404, !1);
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const t = this._injector.get(nh, null);
            t && (t.forEach((r) => r()), t.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ot));
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "platform",
          }));
        }
        return e;
      })();
      function fw(e, n) {
        return Array.isArray(n) ? n.reduce(fw, e) : { ...e, ...n };
      }
      let Vr = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = T(pw)),
              (this.zoneIsStable = T(Rv)),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = T(kl).hasPendingTasks.pipe(
                Yt((t) => (t ? k(!1) : this.zoneIsStable)),
                (function ZI(e, n = Qn) {
                  return (
                    (e = e ?? YI),
                    xe((t, r) => {
                      let i,
                        s = !0;
                      t.subscribe(
                        Oe(r, (o) => {
                          const a = n(o);
                          (s || !e(i, a)) && ((s = !1), (i = a), r.next(o));
                        })
                      );
                    })
                  );
                })(),
                Hg()
              )),
              (this._injector = T(Rt));
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(t, r) {
            const i = t instanceof Dv;
            if (!this._injector.get(Zf).done)
              throw (
                (!i &&
                  (function ri(e) {
                    const n = J(e) || $e(e) || ot(e);
                    return null !== n && n.standalone;
                  })(t),
                new D(405, !1))
              );
            let o;
            (o = i ? t : this._injector.get(hl).resolveComponentFactory(t)),
              this.componentTypes.push(o.componentType);
            const a = (function lF(e) {
                return e.isBoundToModule;
              })(o)
                ? void 0
                : this._injector.get(kr),
              u = o.create(Ot.NULL, [], r || o.selector, a),
              c = u.location.nativeElement,
              d = u.injector.get(nw, null);
            return (
              d?.registerApplication(c),
              u.onDestroy(() => {
                this.detachView(u.hostView),
                  Bl(this.components, u),
                  d?.unregisterApplication(c);
              }),
              this._loadComponent(u),
              u
            );
          }
          tick() {
            if (this._runningTick) throw new D(101, !1);
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
            } catch (t) {
              this.internalErrorHandler(t);
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const r = t;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(t) {
            const r = t;
            Bl(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView), this.tick(), this.components.push(t);
            const r = this._injector.get(rh, []);
            r.push(...this._bootstrapListeners), r.forEach((i) => i(t));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((t) => t()),
                  this._views.slice().forEach((t) => t.destroy());
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(t) {
            return (
              this._destroyListeners.push(t),
              () => Bl(this._destroyListeners, t)
            );
          }
          destroy() {
            if (this._destroyed) throw new D(406, !1);
            const t = this._injector;
            t.destroy && !t.destroyed && t.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      function Bl(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      const pw = new N("", {
        providedIn: "root",
        factory: () => T(kn).handleError.bind(void 0),
      });
      function hF() {
        const e = T(le),
          n = T(kn);
        return (t) => e.runOutsideAngular(() => n.handleError(t));
      }
      let pF = (() => {
        class e {
          constructor() {
            (this.zone = T(le)), (this.applicationRef = T(Vr));
          }
          initialize() {
            this._onMicrotaskEmptySubscription ||
              (this._onMicrotaskEmptySubscription =
                this.zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this.zone.run(() => {
                      this.applicationRef.tick();
                    });
                  },
                }));
          }
          ngOnDestroy() {
            this._onMicrotaskEmptySubscription?.unsubscribe();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      let wo = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = mF);
        }
        return e;
      })();
      function mF(e) {
        return (function yF(e, n, t) {
          if (Tr(e) && !t) {
            const r = At(e.index, n);
            return new Js(r, r);
          }
          return 47 & e.type ? new Js(n[Ne], n) : null;
        })(We(), E(), 16 == (16 & e));
      }
      class _w {
        constructor() {}
        supports(n) {
          return Cl(n);
        }
        create(n) {
          return new EF(n);
        }
      }
      const wF = (e, n) => n;
      class EF {
        constructor(n) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = n || wF);
        }
        forEachItem(n) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) n(t);
        }
        forEachOperation(n) {
          let t = this._itHead,
            r = this._removalsHead,
            i = 0,
            s = null;
          for (; t || r; ) {
            const o = !r || (t && t.currentIndex < Cw(r, i, s)) ? t : r,
              a = Cw(o, i, s),
              l = o.currentIndex;
            if (o === r) i--, (r = r._nextRemoved);
            else if (((t = t._next), null == o.previousIndex)) i++;
            else {
              s || (s = []);
              const u = a - i,
                c = l - i;
              if (u != c) {
                for (let f = 0; f < u; f++) {
                  const h = f < s.length ? s[f] : (s[f] = 0),
                    p = h + f;
                  c <= p && p < u && (s[f] = h + 1);
                }
                s[o.previousIndex] = c - u;
              }
            }
            a !== l && n(o, a, l);
          }
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachMovedItem(n) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        forEachIdentityChange(n) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            n(t);
        }
        diff(n) {
          if ((null == n && (n = []), !Cl(n))) throw new D(900, !1);
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let i,
            s,
            o,
            t = this._itHead,
            r = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let a = 0; a < this.length; a++)
              (s = n[a]),
                (o = this._trackByFn(a, s)),
                null !== t && Object.is(t.trackById, o)
                  ? (r && (t = this._verifyReinsertion(t, s, o, a)),
                    Object.is(t.item, s) || this._addIdentityChange(t, s))
                  : ((t = this._mismatch(t, s, o, a)), (r = !0)),
                (t = t._next);
          } else
            (i = 0),
              (function iR(e, n) {
                if (Array.isArray(e))
                  for (let t = 0; t < e.length; t++) n(e[t]);
                else {
                  const t = e[Symbol.iterator]();
                  let r;
                  for (; !(r = t.next()).done; ) n(r.value);
                }
              })(n, (a) => {
                (o = this._trackByFn(i, a)),
                  null !== t && Object.is(t.trackById, o)
                    ? (r && (t = this._verifyReinsertion(t, a, o, i)),
                      Object.is(t.item, a) || this._addIdentityChange(t, a))
                    : ((t = this._mismatch(t, a, o, i)), (r = !0)),
                  (t = t._next),
                  i++;
              }),
              (this.length = i);
          return this._truncate(t), (this.collection = n), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (
              n = this._previousItHead = this._itHead;
              null !== n;
              n = n._next
            )
              n._nextPrevious = n._next;
            for (n = this._additionsHead; null !== n; n = n._nextAdded)
              n.previousIndex = n.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                n = this._movesHead;
              null !== n;
              n = n._nextMoved
            )
              n.previousIndex = n.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(n, t, r, i) {
          let s;
          return (
            null === n ? (s = this._itTail) : ((s = n._prev), this._remove(n)),
            null !==
            (n =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t),
                this._reinsertAfter(n, s, i))
              : null !==
                (n =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, i))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t),
                this._moveAfter(n, s, i))
              : (n = this._addAfter(new bF(t, r), s, i)),
            n
          );
        }
        _verifyReinsertion(n, t, r, i) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== s
              ? (n = this._reinsertAfter(s, n._prev, i))
              : n.currentIndex != i &&
                ((n.currentIndex = i), this._addToMoves(n, i)),
            n
          );
        }
        _truncate(n) {
          for (; null !== n; ) {
            const t = n._next;
            this._addToRemovals(this._unlink(n)), (n = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(n, t, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
          const i = n._prevRemoved,
            s = n._nextRemoved;
          return (
            null === i ? (this._removalsHead = s) : (i._nextRemoved = s),
            null === s ? (this._removalsTail = i) : (s._prevRemoved = i),
            this._insertAfter(n, t, r),
            this._addToMoves(n, r),
            n
          );
        }
        _moveAfter(n, t, r) {
          return (
            this._unlink(n),
            this._insertAfter(n, t, r),
            this._addToMoves(n, r),
            n
          );
        }
        _addAfter(n, t, r) {
          return (
            this._insertAfter(n, t, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = n)
                : (this._additionsTail._nextAdded = n)),
            n
          );
        }
        _insertAfter(n, t, r) {
          const i = null === t ? this._itHead : t._next;
          return (
            (n._next = i),
            (n._prev = t),
            null === i ? (this._itTail = n) : (i._prev = n),
            null === t ? (this._itHead = n) : (t._next = n),
            null === this._linkedRecords && (this._linkedRecords = new Dw()),
            this._linkedRecords.put(n),
            (n.currentIndex = r),
            n
          );
        }
        _remove(n) {
          return this._addToRemovals(this._unlink(n));
        }
        _unlink(n) {
          null !== this._linkedRecords && this._linkedRecords.remove(n);
          const t = n._prev,
            r = n._next;
          return (
            null === t ? (this._itHead = r) : (t._next = r),
            null === r ? (this._itTail = t) : (r._prev = t),
            n
          );
        }
        _addToMoves(n, t) {
          return (
            n.previousIndex === t ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = n)
                  : (this._movesTail._nextMoved = n)),
            n
          );
        }
        _addToRemovals(n) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Dw()),
            this._unlinkedRecords.put(n),
            (n.currentIndex = null),
            (n._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = n),
                (n._prevRemoved = null))
              : ((n._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = n)),
            n
          );
        }
        _addIdentityChange(n, t) {
          return (
            (n.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = n)
                : (this._identityChangesTail._nextIdentityChange = n)),
            n
          );
        }
      }
      class bF {
        constructor(n, t) {
          (this.item = n),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class SF {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(n) {
          null === this._head
            ? ((this._head = this._tail = n),
              (n._nextDup = null),
              (n._prevDup = null))
            : ((this._tail._nextDup = n),
              (n._prevDup = this._tail),
              (n._nextDup = null),
              (this._tail = n));
        }
        get(n, t) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === t || t <= r.currentIndex) &&
              Object.is(r.trackById, n)
            )
              return r;
          return null;
        }
        remove(n) {
          const t = n._prevDup,
            r = n._nextDup;
          return (
            null === t ? (this._head = r) : (t._nextDup = r),
            null === r ? (this._tail = t) : (r._prevDup = t),
            null === this._head
          );
        }
      }
      class Dw {
        constructor() {
          this.map = new Map();
        }
        put(n) {
          const t = n.trackById;
          let r = this.map.get(t);
          r || ((r = new SF()), this.map.set(t, r)), r.add(n);
        }
        get(n, t) {
          const i = this.map.get(n);
          return i ? i.get(n, t) : null;
        }
        remove(n) {
          const t = n.trackById;
          return this.map.get(t).remove(n) && this.map.delete(t), n;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Cw(e, n, t) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return t && r < t.length && (i = t[r]), r + n + i;
      }
      class ww {
        constructor() {}
        supports(n) {
          return n instanceof Map || ff(n);
        }
        create() {
          return new IF();
        }
      }
      class IF {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(n) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) n(t);
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachChangedItem(n) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        diff(n) {
          if (n) {
            if (!(n instanceof Map || ff(n))) throw new D(900, !1);
          } else n = new Map();
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(n, (r, i) => {
              if (t && t.key === i)
                this._maybeAddToChanges(t, r),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const s = this._getOrCreateRecordForKey(i, r);
                t = this._insertBeforeOrAppend(t, s);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let r = t; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(n, t) {
          if (n) {
            const r = n._prev;
            return (
              (t._next = n),
              (t._prev = r),
              (n._prev = t),
              r && (r._next = t),
              n === this._mapHead && (this._mapHead = t),
              (this._appendAfter = n),
              n
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(n, t) {
          if (this._records.has(n)) {
            const i = this._records.get(n);
            this._maybeAddToChanges(i, t);
            const s = i._prev,
              o = i._next;
            return (
              s && (s._next = o),
              o && (o._prev = s),
              (i._next = null),
              (i._prev = null),
              i
            );
          }
          const r = new TF(n);
          return (
            this._records.set(n, r),
            (r.currentValue = t),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (
              this._previousMapHead = this._mapHead, n = this._previousMapHead;
              null !== n;
              n = n._next
            )
              n._nextPrevious = n._next;
            for (n = this._changesHead; null !== n; n = n._nextChanged)
              n.previousValue = n.currentValue;
            for (n = this._additionsHead; null != n; n = n._nextAdded)
              n.previousValue = n.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(n, t) {
          Object.is(t, n.currentValue) ||
            ((n.previousValue = n.currentValue),
            (n.currentValue = t),
            this._addToChanges(n));
        }
        _addToAdditions(n) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = n)
            : ((this._additionsTail._nextAdded = n), (this._additionsTail = n));
        }
        _addToChanges(n) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = n)
            : ((this._changesTail._nextChanged = n), (this._changesTail = n));
        }
        _forEach(n, t) {
          n instanceof Map
            ? n.forEach(t)
            : Object.keys(n).forEach((r) => t(n[r], r));
        }
      }
      class TF {
        constructor(n) {
          (this.key = n),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Ew() {
        return new $l([new _w()]);
      }
      let $l = (() => {
        class e {
          static #e = (this.ɵprov = R({
            token: e,
            providedIn: "root",
            factory: Ew,
          }));
          constructor(t) {
            this.factories = t;
          }
          static create(t, r) {
            if (null != r) {
              const i = r.factories.slice();
              t = t.concat(i);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: (r) => e.create(t, r || Ew()),
              deps: [[e, new Ha(), new Ba()]],
            };
          }
          find(t) {
            const r = this.factories.find((i) => i.supports(t));
            if (null != r) return r;
            throw new D(901, !1);
          }
        }
        return e;
      })();
      function bw() {
        return new Eo([new ww()]);
      }
      let Eo = (() => {
        class e {
          static #e = (this.ɵprov = R({
            token: e,
            providedIn: "root",
            factory: bw,
          }));
          constructor(t) {
            this.factories = t;
          }
          static create(t, r) {
            if (r) {
              const i = r.factories.slice();
              t = t.concat(i);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: (r) => e.create(t, r || bw()),
              deps: [[e, new Ha(), new Ba()]],
            };
          }
          find(t) {
            const r = this.factories.find((i) => i.supports(t));
            if (r) return r;
            throw new D(901, !1);
          }
        }
        return e;
      })();
      const NF = aw(null, "core", []);
      let RF = (() => {
        class e {
          constructor(t) {}
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Vr));
          });
          static #t = (this.ɵmod = Xe({ type: e }));
          static #n = (this.ɵinj = He({}));
        }
        return e;
      })();
      function Zi(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
      let ch = null;
      function fr() {
        return ch;
      }
      class GF {}
      const Ze = new N("DocumentToken");
      let dh = (() => {
        class e {
          historyGo(t) {
            throw new Error("Not implemented");
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: function () {
              return T(qF);
            },
            providedIn: "platform",
          }));
        }
        return e;
      })();
      const WF = new N("Location Initialized");
      let qF = (() => {
        class e extends dh {
          constructor() {
            super(),
              (this._doc = T(Ze)),
              (this._location = window.location),
              (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return fr().getBaseHref(this._doc);
          }
          onPopState(t) {
            const r = fr().getGlobalEventTarget(this._doc, "window");
            return (
              r.addEventListener("popstate", t, !1),
              () => r.removeEventListener("popstate", t)
            );
          }
          onHashChange(t) {
            const r = fr().getGlobalEventTarget(this._doc, "window");
            return (
              r.addEventListener("hashchange", t, !1),
              () => r.removeEventListener("hashchange", t)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(t) {
            this._location.pathname = t;
          }
          pushState(t, r, i) {
            this._history.pushState(t, r, i);
          }
          replaceState(t, r, i) {
            this._history.replaceState(t, r, i);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(t = 0) {
            this._history.go(t);
          }
          getState() {
            return this._history.state;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: function () {
              return new e();
            },
            providedIn: "platform",
          }));
        }
        return e;
      })();
      function fh(e, n) {
        if (0 == e.length) return n;
        if (0 == n.length) return e;
        let t = 0;
        return (
          e.endsWith("/") && t++,
          n.startsWith("/") && t++,
          2 == t ? e + n.substring(1) : 1 == t ? e + n : e + "/" + n
        );
      }
      function Pw(e) {
        const n = e.match(/#|\?|$/),
          t = (n && n.index) || e.length;
        return e.slice(0, t - ("/" === e[t - 1] ? 1 : 0)) + e.slice(t);
      }
      function Hn(e) {
        return e && "?" !== e[0] ? "?" + e : e;
      }
      let Br = (() => {
        class e {
          historyGo(t) {
            throw new Error("Not implemented");
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: function () {
              return T(Fw);
            },
            providedIn: "root",
          }));
        }
        return e;
      })();
      const xw = new N("appBaseHref");
      let Fw = (() => {
          class e extends Br {
            constructor(t, r) {
              super(),
                (this._platformLocation = t),
                (this._removeListenerFns = []),
                (this._baseHref =
                  r ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  T(Ze).location?.origin ??
                  "");
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return fh(this._baseHref, t);
            }
            path(t = !1) {
              const r =
                  this._platformLocation.pathname +
                  Hn(this._platformLocation.search),
                i = this._platformLocation.hash;
              return i && t ? `${r}${i}` : r;
            }
            pushState(t, r, i, s) {
              const o = this.prepareExternalUrl(i + Hn(s));
              this._platformLocation.pushState(t, r, o);
            }
            replaceState(t, r, i, s) {
              const o = this.prepareExternalUrl(i + Hn(s));
              this._platformLocation.replaceState(t, r, o);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(dh), A(xw, 8));
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            }));
          }
          return e;
        })(),
        KF = (() => {
          class e extends Br {
            constructor(t, r) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != r && (this._baseHref = r);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let r = this._platformLocation.hash;
              return null == r && (r = "#"), r.length > 0 ? r.substring(1) : r;
            }
            prepareExternalUrl(t) {
              const r = fh(this._baseHref, t);
              return r.length > 0 ? "#" + r : r;
            }
            pushState(t, r, i, s) {
              let o = this.prepareExternalUrl(i + Hn(s));
              0 == o.length && (o = this._platformLocation.pathname),
                this._platformLocation.pushState(t, r, o);
            }
            replaceState(t, r, i, s) {
              let o = this.prepareExternalUrl(i + Hn(s));
              0 == o.length && (o = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, r, o);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(dh), A(xw, 8));
            });
            static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        hh = (() => {
          class e {
            constructor(t) {
              (this._subject = new we()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = t);
              const r = this._locationStrategy.getBaseHref();
              (this._basePath = (function YF(e) {
                if (new RegExp("^(https?:)?//").test(e)) {
                  const [, t] = e.split(/\/\/[^\/]+/);
                  return t;
                }
                return e;
              })(Pw(Lw(r)))),
                this._locationStrategy.onPopState((i) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: i.state,
                    type: i.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(t = !1) {
              return this.normalize(this._locationStrategy.path(t));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(t, r = "") {
              return this.path() == this.normalize(t + Hn(r));
            }
            normalize(t) {
              return e.stripTrailingSlash(
                (function ZF(e, n) {
                  if (!e || !n.startsWith(e)) return n;
                  const t = n.substring(e.length);
                  return "" === t || ["/", ";", "?", "#"].includes(t[0])
                    ? t
                    : n;
                })(this._basePath, Lw(t))
              );
            }
            prepareExternalUrl(t) {
              return (
                t && "/" !== t[0] && (t = "/" + t),
                this._locationStrategy.prepareExternalUrl(t)
              );
            }
            go(t, r = "", i = null) {
              this._locationStrategy.pushState(i, "", t, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Hn(r)),
                  i
                );
            }
            replaceState(t, r = "", i = null) {
              this._locationStrategy.replaceState(i, "", t, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + Hn(r)),
                  i
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(t = 0) {
              this._locationStrategy.historyGo?.(t);
            }
            onUrlChange(t) {
              return (
                this._urlChangeListeners.push(t),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((r) => {
                    this._notifyUrlChangeListeners(r.url, r.state);
                  })),
                () => {
                  const r = this._urlChangeListeners.indexOf(t);
                  this._urlChangeListeners.splice(r, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(t = "", r) {
              this._urlChangeListeners.forEach((i) => i(t, r));
            }
            subscribe(t, r, i) {
              return this._subject.subscribe({
                next: t,
                error: r,
                complete: i,
              });
            }
            static #e = (this.normalizeQueryParams = Hn);
            static #t = (this.joinWithSlash = fh);
            static #n = (this.stripTrailingSlash = Pw);
            static #r = (this.ɵfac = function (r) {
              return new (r || e)(A(Br));
            });
            static #i = (this.ɵprov = R({
              token: e,
              factory: function () {
                return (function QF() {
                  return new hh(A(Br));
                })();
              },
              providedIn: "root",
            }));
          }
          return e;
        })();
      function Lw(e) {
        return e.replace(/\/index.html$/, "");
      }
      function Gw(e, n) {
        n = encodeURIComponent(n);
        for (const t of e.split(";")) {
          const r = t.indexOf("="),
            [i, s] = -1 == r ? [t, ""] : [t.slice(0, r), t.slice(r + 1)];
          if (i.trim() === n) return decodeURIComponent(s);
        }
        return null;
      }
      const Eh = /\s+/,
        Ww = [];
      let Io = (() => {
        class e {
          constructor(t, r, i, s) {
            (this._iterableDiffers = t),
              (this._keyValueDiffers = r),
              (this._ngEl = i),
              (this._renderer = s),
              (this.initialClasses = Ww),
              (this.stateMap = new Map());
          }
          set klass(t) {
            this.initialClasses = null != t ? t.trim().split(Eh) : Ww;
          }
          set ngClass(t) {
            this.rawClass = "string" == typeof t ? t.trim().split(Eh) : t;
          }
          ngDoCheck() {
            for (const r of this.initialClasses) this._updateState(r, !0);
            const t = this.rawClass;
            if (Array.isArray(t) || t instanceof Set)
              for (const r of t) this._updateState(r, !0);
            else if (null != t)
              for (const r of Object.keys(t)) this._updateState(r, !!t[r]);
            this._applyStateDiff();
          }
          _updateState(t, r) {
            const i = this.stateMap.get(t);
            void 0 !== i
              ? (i.enabled !== r && ((i.changed = !0), (i.enabled = r)),
                (i.touched = !0))
              : this.stateMap.set(t, { enabled: r, changed: !0, touched: !0 });
          }
          _applyStateDiff() {
            for (const t of this.stateMap) {
              const r = t[0],
                i = t[1];
              i.changed
                ? (this._toggleClass(r, i.enabled), (i.changed = !1))
                : i.touched ||
                  (i.enabled && this._toggleClass(r, !1),
                  this.stateMap.delete(r)),
                (i.touched = !1);
            }
          }
          _toggleClass(t, r) {
            (t = t.trim()).length > 0 &&
              t.split(Eh).forEach((i) => {
                r
                  ? this._renderer.addClass(this._ngEl.nativeElement, i)
                  : this._renderer.removeClass(this._ngEl.nativeElement, i);
              });
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w($l), w(Eo), w(wt), w(tn));
          });
          static #t = (this.ɵdir = F({
            type: e,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
            standalone: !0,
          }));
        }
        return e;
      })();
      class LL {
        constructor(n, t, r, i) {
          (this.$implicit = n),
            (this.ngForOf = t),
            (this.index = r),
            (this.count = i);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let bh = (() => {
        class e {
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(t, r, i) {
            (this._viewContainer = t),
              (this._template = r),
              (this._differs = i),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const t = this._ngForOf;
              !this._differ &&
                t &&
                (this._differ = this._differs
                  .find(t)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const r = this._viewContainer;
            t.forEachOperation((i, s, o) => {
              if (null == i.previousIndex)
                r.createEmbeddedView(
                  this._template,
                  new LL(i.item, this._ngForOf, -1, -1),
                  null === o ? void 0 : o
                );
              else if (null == o) r.remove(null === s ? void 0 : s);
              else if (null !== s) {
                const a = r.get(s);
                r.move(a, o), Kw(a, i);
              }
            });
            for (let i = 0, s = r.length; i < s; i++) {
              const a = r.get(i).context;
              (a.index = i), (a.count = s), (a.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((i) => {
              Kw(r.get(i.currentIndex), i);
            });
          }
          static ngTemplateContextGuard(t, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(sn), w(En), w($l));
          });
          static #t = (this.ɵdir = F({
            type: e,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
            standalone: !0,
          }));
        }
        return e;
      })();
      function Kw(e, n) {
        e.context.$implicit = n.item;
      }
      let Sh = (() => {
        class e {
          constructor(t, r) {
            (this._viewContainer = t),
              (this._context = new kL()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = r);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t),
              this._updateView();
          }
          set ngIfThen(t) {
            Qw("ngIfThen", t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            Qw("ngIfElse", t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(t, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(sn), w(En));
          });
          static #t = (this.ɵdir = F({
            type: e,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
            standalone: !0,
          }));
        }
        return e;
      })();
      class kL {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Qw(e, n) {
        if (n && !n.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${Le(n)}'.`
          );
      }
      let Yw = (() => {
          class e {
            constructor(t, r, i) {
              (this._ngEl = t),
                (this._differs = r),
                (this._renderer = i),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(t) {
              (this._ngStyle = t),
                !this._differ &&
                  t &&
                  (this._differ = this._differs.find(t).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const t = this._differ.diff(this._ngStyle);
                t && this._applyChanges(t);
              }
            }
            _setStyle(t, r) {
              const [i, s] = t.split("."),
                o = -1 === i.indexOf("-") ? void 0 : sr.DashCase;
              null != r
                ? this._renderer.setStyle(
                    this._ngEl.nativeElement,
                    i,
                    s ? `${r}${s}` : r,
                    o
                  )
                : this._renderer.removeStyle(this._ngEl.nativeElement, i, o);
            }
            _applyChanges(t) {
              t.forEachRemovedItem((r) => this._setStyle(r.key, null)),
                t.forEachAddedItem((r) =>
                  this._setStyle(r.key, r.currentValue)
                ),
                t.forEachChangedItem((r) =>
                  this._setStyle(r.key, r.currentValue)
                );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(wt), w(Eo), w(tn));
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [["", "ngStyle", ""]],
              inputs: { ngStyle: "ngStyle" },
              standalone: !0,
            }));
          }
          return e;
        })(),
        Xw = (() => {
          class e {
            constructor(t) {
              (this._viewContainerRef = t),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null),
                (this.ngTemplateOutletInjector = null);
            }
            ngOnChanges(t) {
              if (t.ngTemplateOutlet || t.ngTemplateOutletInjector) {
                const r = this._viewContainerRef;
                if (
                  (this._viewRef && r.remove(r.indexOf(this._viewRef)),
                  this.ngTemplateOutlet)
                ) {
                  const {
                    ngTemplateOutlet: i,
                    ngTemplateOutletContext: s,
                    ngTemplateOutletInjector: o,
                  } = this;
                  this._viewRef = r.createEmbeddedView(
                    i,
                    s,
                    o ? { injector: o } : void 0
                  );
                } else this._viewRef = null;
              } else
                this._viewRef &&
                  t.ngTemplateOutletContext &&
                  this.ngTemplateOutletContext &&
                  (this._viewRef.context = this.ngTemplateOutletContext);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(sn));
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [["", "ngTemplateOutlet", ""]],
              inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector",
              },
              standalone: !0,
              features: [zt],
            }));
          }
          return e;
        })(),
        tu = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Xe({ type: e }));
            static #n = (this.ɵinj = He({}));
          }
          return e;
        })();
      const eE = "browser";
      function tE(e) {
        return "server" === e;
      }
      let hk = (() => {
        class e {
          static #e = (this.ɵprov = R({
            token: e,
            providedIn: "root",
            factory: () => new pk(A(Ze), window),
          }));
        }
        return e;
      })();
      class pk {
        constructor(n, t) {
          (this.document = n), (this.window = t), (this.offset = () => [0, 0]);
        }
        setOffset(n) {
          this.offset = Array.isArray(n) ? () => n : n;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(n) {
          this.supportsScrolling() && this.window.scrollTo(n[0], n[1]);
        }
        scrollToAnchor(n) {
          if (!this.supportsScrolling()) return;
          const t = (function gk(e, n) {
            const t = e.getElementById(n) || e.getElementsByName(n)[0];
            if (t) return t;
            if (
              "function" == typeof e.createTreeWalker &&
              e.body &&
              "function" == typeof e.body.attachShadow
            ) {
              const r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
              let i = r.currentNode;
              for (; i; ) {
                const s = i.shadowRoot;
                if (s) {
                  const o =
                    s.getElementById(n) || s.querySelector(`[name="${n}"]`);
                  if (o) return o;
                }
                i = r.nextNode();
              }
            }
            return null;
          })(this.document, n);
          t && (this.scrollToElement(t), t.focus());
        }
        setHistoryScrollRestoration(n) {
          this.supportsScrolling() &&
            (this.window.history.scrollRestoration = n);
        }
        scrollToElement(n) {
          const t = n.getBoundingClientRect(),
            r = t.left + this.window.pageXOffset,
            i = t.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(r - s[0], i - s[1]);
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      class nE {}
      class Vk extends GF {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class Oh extends Vk {
        static makeCurrent() {
          !(function zF(e) {
            ch || (ch = e);
          })(new Oh());
        }
        onAndCancel(n, t, r) {
          return (
            n.addEventListener(t, r),
            () => {
              n.removeEventListener(t, r);
            }
          );
        }
        dispatchEvent(n, t) {
          n.dispatchEvent(t);
        }
        remove(n) {
          n.parentNode && n.parentNode.removeChild(n);
        }
        createElement(n, t) {
          return (t = t || this.getDefaultDocument()).createElement(n);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment;
        }
        getGlobalEventTarget(n, t) {
          return "window" === t
            ? window
            : "document" === t
            ? n
            : "body" === t
            ? n.body
            : null;
        }
        getBaseHref(n) {
          const t = (function jk() {
            return (
              (Mo = Mo || document.querySelector("base")),
              Mo ? Mo.getAttribute("href") : null
            );
          })();
          return null == t
            ? null
            : (function Bk(e) {
                (iu = iu || document.createElement("a")),
                  iu.setAttribute("href", e);
                const n = iu.pathname;
                return "/" === n.charAt(0) ? n : `/${n}`;
              })(t);
        }
        resetBaseElement() {
          Mo = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(n) {
          return Gw(document.cookie, n);
        }
      }
      let iu,
        Mo = null,
        Uk = (() => {
          class e {
            build() {
              return new XMLHttpRequest();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
          }
          return e;
        })();
      const Ph = new N("EventManagerPlugins");
      let aE = (() => {
        class e {
          constructor(t, r) {
            (this._zone = r),
              (this._eventNameToPlugin = new Map()),
              t.forEach((i) => {
                i.manager = this;
              }),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, r, i) {
            return this._findPluginFor(r).addEventListener(t, r, i);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            let r = this._eventNameToPlugin.get(t);
            if (r) return r;
            if (((r = this._plugins.find((s) => s.supports(t))), !r))
              throw new D(5101, !1);
            return this._eventNameToPlugin.set(t, r), r;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ph), A(le));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class lE {
        constructor(n) {
          this._doc = n;
        }
      }
      const xh = "ng-app-id";
      let uE = (() => {
        class e {
          constructor(t, r, i, s = {}) {
            (this.doc = t),
              (this.appId = r),
              (this.nonce = i),
              (this.platformId = s),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM = this.collectServerRenderedStyles()),
              (this.platformIsServer = tE(s)),
              this.resetHostNodes();
          }
          addStyles(t) {
            for (const r of t)
              1 === this.changeUsageCount(r, 1) && this.onStyleAdded(r);
          }
          removeStyles(t) {
            for (const r of t)
              this.changeUsageCount(r, -1) <= 0 && this.onStyleRemoved(r);
          }
          ngOnDestroy() {
            const t = this.styleNodesInDOM;
            t && (t.forEach((r) => r.remove()), t.clear());
            for (const r of this.getAllStyles()) this.onStyleRemoved(r);
            this.resetHostNodes();
          }
          addHost(t) {
            this.hostNodes.add(t);
            for (const r of this.getAllStyles()) this.addStyleToHost(t, r);
          }
          removeHost(t) {
            this.hostNodes.delete(t);
          }
          getAllStyles() {
            return this.styleRef.keys();
          }
          onStyleAdded(t) {
            for (const r of this.hostNodes) this.addStyleToHost(r, t);
          }
          onStyleRemoved(t) {
            const r = this.styleRef;
            r.get(t)?.elements?.forEach((i) => i.remove()), r.delete(t);
          }
          collectServerRenderedStyles() {
            const t = this.doc.head?.querySelectorAll(
              `style[${xh}="${this.appId}"]`
            );
            if (t?.length) {
              const r = new Map();
              return (
                t.forEach((i) => {
                  null != i.textContent && r.set(i.textContent, i);
                }),
                r
              );
            }
            return null;
          }
          changeUsageCount(t, r) {
            const i = this.styleRef;
            if (i.has(t)) {
              const s = i.get(t);
              return (s.usage += r), s.usage;
            }
            return i.set(t, { usage: r, elements: [] }), r;
          }
          getStyleElement(t, r) {
            const i = this.styleNodesInDOM,
              s = i?.get(r);
            if (s?.parentNode === t)
              return i.delete(r), s.removeAttribute(xh), s;
            {
              const o = this.doc.createElement("style");
              return (
                this.nonce && o.setAttribute("nonce", this.nonce),
                (o.textContent = r),
                this.platformIsServer && o.setAttribute(xh, this.appId),
                o
              );
            }
          }
          addStyleToHost(t, r) {
            const i = this.getStyleElement(t, r);
            t.appendChild(i);
            const s = this.styleRef,
              o = s.get(r)?.elements;
            o ? o.push(i) : s.set(r, { elements: [i], usage: 1 });
          }
          resetHostNodes() {
            const t = this.hostNodes;
            t.clear(), t.add(this.doc.head);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ze), A(al), A(mv, 8), A(ar));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const Fh = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        Lh = /%COMP%/g,
        Wk = new N("RemoveStylesOnCompDestroy", {
          providedIn: "root",
          factory: () => !1,
        });
      function dE(e, n) {
        return n.map((t) => t.replace(Lh, e));
      }
      let kh = (() => {
        class e {
          constructor(t, r, i, s, o, a, l, u = null) {
            (this.eventManager = t),
              (this.sharedStylesHost = r),
              (this.appId = i),
              (this.removeStylesOnCompDestroy = s),
              (this.doc = o),
              (this.platformId = a),
              (this.ngZone = l),
              (this.nonce = u),
              (this.rendererByCompId = new Map()),
              (this.platformIsServer = tE(a)),
              (this.defaultRenderer = new Vh(t, o, l, this.platformIsServer));
          }
          createRenderer(t, r) {
            if (!t || !r) return this.defaultRenderer;
            this.platformIsServer &&
              r.encapsulation === Ut.ShadowDom &&
              (r = { ...r, encapsulation: Ut.Emulated });
            const i = this.getOrCreateRenderer(t, r);
            return (
              i instanceof hE
                ? i.applyToHost(t)
                : i instanceof jh && i.applyStyles(),
              i
            );
          }
          getOrCreateRenderer(t, r) {
            const i = this.rendererByCompId;
            let s = i.get(r.id);
            if (!s) {
              const o = this.doc,
                a = this.ngZone,
                l = this.eventManager,
                u = this.sharedStylesHost,
                c = this.removeStylesOnCompDestroy,
                d = this.platformIsServer;
              switch (r.encapsulation) {
                case Ut.Emulated:
                  s = new hE(l, u, r, this.appId, c, o, a, d);
                  break;
                case Ut.ShadowDom:
                  return new Zk(l, u, t, r, o, a, this.nonce, d);
                default:
                  s = new jh(l, u, r, c, o, a, d);
              }
              i.set(r.id, s);
            }
            return s;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(
              A(aE),
              A(uE),
              A(al),
              A(Wk),
              A(Ze),
              A(ar),
              A(le),
              A(mv)
            );
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class Vh {
        constructor(n, t, r, i) {
          (this.eventManager = n),
            (this.doc = t),
            (this.ngZone = r),
            (this.platformIsServer = i),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(n, t) {
          return t
            ? this.doc.createElementNS(Fh[t] || t, n)
            : this.doc.createElement(n);
        }
        createComment(n) {
          return this.doc.createComment(n);
        }
        createText(n) {
          return this.doc.createTextNode(n);
        }
        appendChild(n, t) {
          (fE(n) ? n.content : n).appendChild(t);
        }
        insertBefore(n, t, r) {
          n && (fE(n) ? n.content : n).insertBefore(t, r);
        }
        removeChild(n, t) {
          n && n.removeChild(t);
        }
        selectRootElement(n, t) {
          let r = "string" == typeof n ? this.doc.querySelector(n) : n;
          if (!r) throw new D(-5104, !1);
          return t || (r.textContent = ""), r;
        }
        parentNode(n) {
          return n.parentNode;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        setAttribute(n, t, r, i) {
          if (i) {
            t = i + ":" + t;
            const s = Fh[i];
            s ? n.setAttributeNS(s, t, r) : n.setAttribute(t, r);
          } else n.setAttribute(t, r);
        }
        removeAttribute(n, t, r) {
          if (r) {
            const i = Fh[r];
            i ? n.removeAttributeNS(i, t) : n.removeAttribute(`${r}:${t}`);
          } else n.removeAttribute(t);
        }
        addClass(n, t) {
          n.classList.add(t);
        }
        removeClass(n, t) {
          n.classList.remove(t);
        }
        setStyle(n, t, r, i) {
          i & (sr.DashCase | sr.Important)
            ? n.style.setProperty(t, r, i & sr.Important ? "important" : "")
            : (n.style[t] = r);
        }
        removeStyle(n, t, r) {
          r & sr.DashCase ? n.style.removeProperty(t) : (n.style[t] = "");
        }
        setProperty(n, t, r) {
          n[t] = r;
        }
        setValue(n, t) {
          n.nodeValue = t;
        }
        listen(n, t, r) {
          if (
            "string" == typeof n &&
            !(n = fr().getGlobalEventTarget(this.doc, n))
          )
            throw new Error(`Unsupported event target ${n} for event ${t}`);
          return this.eventManager.addEventListener(
            n,
            t,
            this.decoratePreventDefault(r)
          );
        }
        decoratePreventDefault(n) {
          return (t) => {
            if ("__ngUnwrap__" === t) return n;
            !1 ===
              (this.platformIsServer
                ? this.ngZone.runGuarded(() => n(t))
                : n(t)) && t.preventDefault();
          };
        }
      }
      function fE(e) {
        return "TEMPLATE" === e.tagName && void 0 !== e.content;
      }
      class Zk extends Vh {
        constructor(n, t, r, i, s, o, a, l) {
          super(n, s, o, l),
            (this.sharedStylesHost = t),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const u = dE(i.id, i.styles);
          for (const c of u) {
            const d = document.createElement("style");
            a && d.setAttribute("nonce", a),
              (d.textContent = c),
              this.shadowRoot.appendChild(d);
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n;
        }
        appendChild(n, t) {
          return super.appendChild(this.nodeOrShadowRoot(n), t);
        }
        insertBefore(n, t, r) {
          return super.insertBefore(this.nodeOrShadowRoot(n), t, r);
        }
        removeChild(n, t) {
          return super.removeChild(this.nodeOrShadowRoot(n), t);
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(n))
          );
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class jh extends Vh {
        constructor(n, t, r, i, s, o, a, l) {
          super(n, s, o, a),
            (this.sharedStylesHost = t),
            (this.removeStylesOnCompDestroy = i),
            (this.styles = l ? dE(l, r.styles) : r.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class hE extends jh {
        constructor(n, t, r, i, s, o, a, l) {
          const u = i + "-" + r.id;
          super(n, t, r, s, o, a, l, u),
            (this.contentAttr = (function qk(e) {
              return "_ngcontent-%COMP%".replace(Lh, e);
            })(u)),
            (this.hostAttr = (function Kk(e) {
              return "_nghost-%COMP%".replace(Lh, e);
            })(u));
        }
        applyToHost(n) {
          this.applyStyles(), this.setAttribute(n, this.hostAttr, "");
        }
        createElement(n, t) {
          const r = super.createElement(n, t);
          return super.setAttribute(r, this.contentAttr, ""), r;
        }
      }
      let Yk = (() => {
        class e extends lE {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, r, i) {
            return (
              t.addEventListener(r, i, !1),
              () => this.removeEventListener(t, r, i)
            );
          }
          removeEventListener(t, r, i) {
            return t.removeEventListener(r, i);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ze));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const pE = ["alt", "control", "meta", "shift"],
        Xk = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Jk = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      let e2 = (() => {
        class e extends lE {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, r, i) {
            const s = e.parseEventName(r),
              o = e.eventCallback(s.fullKey, i, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => fr().onAndCancel(t, s.domEventName, o));
          }
          static parseEventName(t) {
            const r = t.toLowerCase().split("."),
              i = r.shift();
            if (0 === r.length || ("keydown" !== i && "keyup" !== i))
              return null;
            const s = e._normalizeKey(r.pop());
            let o = "",
              a = r.indexOf("code");
            if (
              (a > -1 && (r.splice(a, 1), (o = "code.")),
              pE.forEach((u) => {
                const c = r.indexOf(u);
                c > -1 && (r.splice(c, 1), (o += u + "."));
              }),
              (o += s),
              0 != r.length || 0 === s.length)
            )
              return null;
            const l = {};
            return (l.domEventName = i), (l.fullKey = o), l;
          }
          static matchEventFullKeyCode(t, r) {
            let i = Xk[t.key] || t.key,
              s = "";
            return (
              r.indexOf("code.") > -1 && ((i = t.code), (s = "code.")),
              !(null == i || !i) &&
                ((i = i.toLowerCase()),
                " " === i ? (i = "space") : "." === i && (i = "dot"),
                pE.forEach((o) => {
                  o !== i && (0, Jk[o])(t) && (s += o + ".");
                }),
                (s += i),
                s === r)
            );
          }
          static eventCallback(t, r, i) {
            return (s) => {
              e.matchEventFullKeyCode(s, t) && i.runGuarded(() => r(s));
            };
          }
          static _normalizeKey(t) {
            return "esc" === t ? "escape" : t;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ze));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const i2 = aw(NF, "browser", [
          { provide: ar, useValue: eE },
          {
            provide: pv,
            useValue: function t2() {
              Oh.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: Ze,
            useFactory: function r2() {
              return (
                (function HM(e) {
                  Cd = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        s2 = new N(""),
        yE = [
          {
            provide: jl,
            useClass: class Hk {
              addToWindow(n) {
                (ge.getAngularTestability = (r, i = !0) => {
                  const s = n.findTestabilityInTree(r, i);
                  if (null == s) throw new D(5103, !1);
                  return s;
                }),
                  (ge.getAllAngularTestabilities = () =>
                    n.getAllTestabilities()),
                  (ge.getAllAngularRootElements = () => n.getAllRootElements()),
                  ge.frameworkStabilizers || (ge.frameworkStabilizers = []),
                  ge.frameworkStabilizers.push((r) => {
                    const i = ge.getAllAngularTestabilities();
                    let s = i.length,
                      o = !1;
                    const a = function (l) {
                      (o = o || l), s--, 0 == s && r(o);
                    };
                    i.forEach((l) => {
                      l.whenStable(a);
                    });
                  });
              }
              findTestabilityInTree(n, t, r) {
                return null == t
                  ? null
                  : n.getTestability(t) ??
                      (r
                        ? fr().isShadowRoot(t)
                          ? this.findTestabilityInTree(n, t.host, !0)
                          : this.findTestabilityInTree(n, t.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: nw, useClass: Jf, deps: [le, eh, jl] },
          { provide: Jf, useClass: Jf, deps: [le, eh, jl] },
        ],
        vE = [
          { provide: Rd, useValue: "root" },
          {
            provide: kn,
            useFactory: function n2() {
              return new kn();
            },
            deps: [],
          },
          { provide: Ph, useClass: Yk, multi: !0, deps: [Ze, le, ar] },
          { provide: Ph, useClass: e2, multi: !0, deps: [Ze] },
          kh,
          uE,
          aE,
          { provide: Ks, useExisting: kh },
          { provide: nE, useClass: Uk, deps: [] },
          [],
        ];
      let _E = (() => {
          class e {
            constructor(t) {}
            static withServerTransition(t) {
              return {
                ngModule: e,
                providers: [{ provide: al, useValue: t.appId }],
              };
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(s2, 12));
            });
            static #t = (this.ɵmod = Xe({ type: e }));
            static #n = (this.ɵinj = He({
              providers: [...vE, ...yE],
              imports: [tu, RF],
            }));
          }
          return e;
        })(),
        DE = (() => {
          class e {
            constructor(t) {
              this._doc = t;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(t) {
              this._doc.title = t || "";
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(Ze));
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: function (r) {
                let i = null;
                return (
                  (i = r
                    ? new r()
                    : (function a2() {
                        return new DE(A(Ze));
                      })()),
                  i
                );
              },
              providedIn: "root",
            }));
          }
          return e;
        })();
      typeof window < "u" && window;
      class bE {}
      class f2 {}
      const zn = "*";
      function Hh(e, n) {
        return { type: 7, name: e, definitions: n, options: {} };
      }
      function Uh(e, n = null) {
        return { type: 4, styles: n, timings: e };
      }
      function SE(e, n = null) {
        return { type: 2, steps: e, options: n };
      }
      function Hr(e) {
        return { type: 6, styles: e, offset: null };
      }
      function h2(e, n, t) {
        return { type: 0, name: e, styles: n, options: t };
      }
      function su(e, n, t = null) {
        return { type: 1, expr: e, animation: n, options: t };
      }
      function IE(e = null) {
        return { type: 9, options: e };
      }
      function $h(e, n, t = null) {
        return { type: 11, selector: e, animation: n, options: t };
      }
      class Ao {
        constructor(n = 0, t = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._originalOnDoneFns = []),
            (this._originalOnStartFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = n + t);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((n) => n()),
            (this._onDoneFns = []));
        }
        onStart(n) {
          this._originalOnStartFns.push(n), this._onStartFns.push(n);
        }
        onDone(n) {
          this._originalOnDoneFns.push(n), this._onDoneFns.push(n);
        }
        onDestroy(n) {
          this._onDestroyFns.push(n);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          queueMicrotask(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((n) => n()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((n) => n()),
            (this._onDestroyFns = []));
        }
        reset() {
          (this._started = !1),
            (this._finished = !1),
            (this._onStartFns = this._originalOnStartFns),
            (this._onDoneFns = this._originalOnDoneFns);
        }
        setPosition(n) {
          this._position = this.totalTime ? n * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(n) {
          const t = "start" == n ? this._onStartFns : this._onDoneFns;
          t.forEach((r) => r()), (t.length = 0);
        }
      }
      class TE {
        constructor(n) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = n);
          let t = 0,
            r = 0,
            i = 0;
          const s = this.players.length;
          0 == s
            ? queueMicrotask(() => this._onFinish())
            : this.players.forEach((o) => {
                o.onDone(() => {
                  ++t == s && this._onFinish();
                }),
                  o.onDestroy(() => {
                    ++r == s && this._onDestroy();
                  }),
                  o.onStart(() => {
                    ++i == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (o, a) => Math.max(o, a.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((n) => n()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((n) => n.init());
        }
        onStart(n) {
          this._onStartFns.push(n);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((n) => n()),
            (this._onStartFns = []));
        }
        onDone(n) {
          this._onDoneFns.push(n);
        }
        onDestroy(n) {
          this._onDestroyFns.push(n);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((n) => n.play());
        }
        pause() {
          this.players.forEach((n) => n.pause());
        }
        restart() {
          this.players.forEach((n) => n.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((n) => n.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((n) => n.destroy()),
            this._onDestroyFns.forEach((n) => n()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((n) => n.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(n) {
          const t = n * this.totalTime;
          this.players.forEach((r) => {
            const i = r.totalTime ? Math.min(1, t / r.totalTime) : 1;
            r.setPosition(i);
          });
        }
        getPosition() {
          const n = this.players.reduce(
            (t, r) => (null === t || r.totalTime > t.totalTime ? r : t),
            null
          );
          return null != n ? n.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((n) => {
            n.beforeDestroy && n.beforeDestroy();
          });
        }
        triggerCallback(n) {
          const t = "start" == n ? this._onStartFns : this._onDoneFns;
          t.forEach((r) => r()), (t.length = 0);
        }
      }
      function ME(e) {
        return new D(3e3, !1);
      }
      function pr(e) {
        switch (e.length) {
          case 0:
            return new Ao();
          case 1:
            return e[0];
          default:
            return new TE(e);
        }
      }
      function AE(e, n, t = new Map(), r = new Map()) {
        const i = [],
          s = [];
        let o = -1,
          a = null;
        if (
          (n.forEach((l) => {
            const u = l.get("offset"),
              c = u == o,
              d = (c && a) || new Map();
            l.forEach((f, h) => {
              let p = h,
                g = f;
              if ("offset" !== h)
                switch (((p = e.normalizePropertyName(p, i)), g)) {
                  case "!":
                    g = t.get(h);
                    break;
                  case zn:
                    g = r.get(h);
                    break;
                  default:
                    g = e.normalizeStyleValue(h, p, g, i);
                }
              d.set(p, g);
            }),
              c || s.push(d),
              (a = d),
              (o = u);
          }),
          i.length)
        )
          throw (function L2(e) {
            return new D(3502, !1);
          })();
        return s;
      }
      function Gh(e, n, t, r) {
        switch (n) {
          case "start":
            e.onStart(() => r(t && Wh(t, "start", e)));
            break;
          case "done":
            e.onDone(() => r(t && Wh(t, "done", e)));
            break;
          case "destroy":
            e.onDestroy(() => r(t && Wh(t, "destroy", e)));
        }
      }
      function Wh(e, n, t) {
        const s = qh(
            e.element,
            e.triggerName,
            e.fromState,
            e.toState,
            n || e.phaseName,
            t.totalTime ?? e.totalTime,
            !!t.disabled
          ),
          o = e._data;
        return null != o && (s._data = o), s;
      }
      function qh(e, n, t, r, i = "", s = 0, o) {
        return {
          element: e,
          triggerName: n,
          fromState: t,
          toState: r,
          phaseName: i,
          totalTime: s,
          disabled: !!o,
        };
      }
      function Ft(e, n, t) {
        let r = e.get(n);
        return r || e.set(n, (r = t)), r;
      }
      function NE(e) {
        const n = e.indexOf(":");
        return [e.substring(1, n), e.slice(n + 1)];
      }
      const K2 = (() =>
        typeof document > "u" ? null : document.documentElement)();
      function Kh(e) {
        const n = e.parentNode || e.host || null;
        return n === K2 ? null : n;
      }
      let Ur = null,
        RE = !1;
      function OE(e, n) {
        for (; n; ) {
          if (n === e) return !0;
          n = Kh(n);
        }
        return !1;
      }
      function PE(e, n, t) {
        if (t) return Array.from(e.querySelectorAll(n));
        const r = e.querySelector(n);
        return r ? [r] : [];
      }
      let xE = (() => {
          class e {
            validateStyleProperty(t) {
              return (function Z2(e) {
                Ur ||
                  ((Ur =
                    (function Y2() {
                      return typeof document < "u" ? document.body : null;
                    })() || {}),
                  (RE = !!Ur.style && "WebkitAppearance" in Ur.style));
                let n = !0;
                return (
                  Ur.style &&
                    !(function Q2(e) {
                      return "ebkit" == e.substring(1, 6);
                    })(e) &&
                    ((n = e in Ur.style),
                    !n &&
                      RE &&
                      (n =
                        "Webkit" + e.charAt(0).toUpperCase() + e.slice(1) in
                        Ur.style)),
                  n
                );
              })(t);
            }
            matchesElement(t, r) {
              return !1;
            }
            containsElement(t, r) {
              return OE(t, r);
            }
            getParentElement(t) {
              return Kh(t);
            }
            query(t, r, i) {
              return PE(t, r, i);
            }
            computeStyle(t, r, i) {
              return i || "";
            }
            animate(t, r, i, s, o, a = [], l) {
              return new Ao(i, s);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        Qh = (() => {
          class e {
            static #e = (this.NOOP = new xE());
          }
          return e;
        })();
      const X2 = 1e3,
        Zh = "ng-enter",
        ou = "ng-leave",
        au = "ng-trigger",
        lu = ".ng-trigger",
        LE = "ng-animating",
        Yh = ".ng-animating";
      function Gn(e) {
        if ("number" == typeof e) return e;
        const n = e.match(/^(-?[\.\d]+)(m?s)/);
        return !n || n.length < 2 ? 0 : Xh(parseFloat(n[1]), n[2]);
      }
      function Xh(e, n) {
        return "s" === n ? e * X2 : e;
      }
      function uu(e, n, t) {
        return e.hasOwnProperty("duration")
          ? e
          : (function eV(e, n, t) {
              let i,
                s = 0,
                o = "";
              if ("string" == typeof e) {
                const a = e.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === a)
                  return n.push(ME()), { duration: 0, delay: 0, easing: "" };
                i = Xh(parseFloat(a[1]), a[2]);
                const l = a[3];
                null != l && (s = Xh(parseFloat(l), a[4]));
                const u = a[5];
                u && (o = u);
              } else i = e;
              if (!t) {
                let a = !1,
                  l = n.length;
                i < 0 &&
                  (n.push(
                    (function p2() {
                      return new D(3100, !1);
                    })()
                  ),
                  (a = !0)),
                  s < 0 &&
                    (n.push(
                      (function g2() {
                        return new D(3101, !1);
                      })()
                    ),
                    (a = !0)),
                  a && n.splice(l, 0, ME());
              }
              return { duration: i, delay: s, easing: o };
            })(e, n, t);
      }
      function No(e, n = {}) {
        return (
          Object.keys(e).forEach((t) => {
            n[t] = e[t];
          }),
          n
        );
      }
      function kE(e) {
        const n = new Map();
        return (
          Object.keys(e).forEach((t) => {
            n.set(t, e[t]);
          }),
          n
        );
      }
      function gr(e, n = new Map(), t) {
        if (t) for (let [r, i] of t) n.set(r, i);
        for (let [r, i] of e) n.set(r, i);
        return n;
      }
      function bn(e, n, t) {
        n.forEach((r, i) => {
          const s = ep(i);
          t && !t.has(i) && t.set(i, e.style[s]), (e.style[s] = r);
        });
      }
      function $r(e, n) {
        n.forEach((t, r) => {
          const i = ep(r);
          e.style[i] = "";
        });
      }
      function Ro(e) {
        return Array.isArray(e) ? (1 == e.length ? e[0] : SE(e)) : e;
      }
      const Jh = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function jE(e) {
        let n = [];
        if ("string" == typeof e) {
          let t;
          for (; (t = Jh.exec(e)); ) n.push(t[1]);
          Jh.lastIndex = 0;
        }
        return n;
      }
      function Oo(e, n, t) {
        const r = e.toString(),
          i = r.replace(Jh, (s, o) => {
            let a = n[o];
            return (
              null == a &&
                (t.push(
                  (function y2(e) {
                    return new D(3003, !1);
                  })()
                ),
                (a = "")),
              a.toString()
            );
          });
        return i == r ? e : i;
      }
      function cu(e) {
        const n = [];
        let t = e.next();
        for (; !t.done; ) n.push(t.value), (t = e.next());
        return n;
      }
      const rV = /-+([a-z0-9])/g;
      function ep(e) {
        return e.replace(rV, (...n) => n[1].toUpperCase());
      }
      function Lt(e, n, t) {
        switch (n.type) {
          case 7:
            return e.visitTrigger(n, t);
          case 0:
            return e.visitState(n, t);
          case 1:
            return e.visitTransition(n, t);
          case 2:
            return e.visitSequence(n, t);
          case 3:
            return e.visitGroup(n, t);
          case 4:
            return e.visitAnimate(n, t);
          case 5:
            return e.visitKeyframes(n, t);
          case 6:
            return e.visitStyle(n, t);
          case 8:
            return e.visitReference(n, t);
          case 9:
            return e.visitAnimateChild(n, t);
          case 10:
            return e.visitAnimateRef(n, t);
          case 11:
            return e.visitQuery(n, t);
          case 12:
            return e.visitStagger(n, t);
          default:
            throw (function v2(e) {
              return new D(3004, !1);
            })();
        }
      }
      function BE(e, n) {
        return window.getComputedStyle(e)[n];
      }
      const du = "*";
      function oV(e, n) {
        const t = [];
        return (
          "string" == typeof e
            ? e.split(/\s*,\s*/).forEach((r) =>
                (function aV(e, n, t) {
                  if (":" == e[0]) {
                    const l = (function lV(e, n) {
                      switch (e) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (t, r) => parseFloat(r) > parseFloat(t);
                        case ":decrement":
                          return (t, r) => parseFloat(r) < parseFloat(t);
                        default:
                          return (
                            n.push(
                              (function O2(e) {
                                return new D(3016, !1);
                              })()
                            ),
                            "* => *"
                          );
                      }
                    })(e, t);
                    if ("function" == typeof l) return void n.push(l);
                    e = l;
                  }
                  const r = e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      t.push(
                        (function R2(e) {
                          return new D(3015, !1);
                        })()
                      ),
                      n
                    );
                  const i = r[1],
                    s = r[2],
                    o = r[3];
                  n.push(HE(i, o));
                  "<" == s[0] && !(i == du && o == du) && n.push(HE(o, i));
                })(r, t, n)
              )
            : t.push(e),
          t
        );
      }
      const fu = new Set(["true", "1"]),
        hu = new Set(["false", "0"]);
      function HE(e, n) {
        const t = fu.has(e) || hu.has(e),
          r = fu.has(n) || hu.has(n);
        return (i, s) => {
          let o = e == du || e == i,
            a = n == du || n == s;
          return (
            !o && t && "boolean" == typeof i && (o = i ? fu.has(e) : hu.has(e)),
            !a && r && "boolean" == typeof s && (a = s ? fu.has(n) : hu.has(n)),
            o && a
          );
        };
      }
      const uV = new RegExp("s*:selfs*,?", "g");
      function tp(e, n, t, r) {
        return new cV(e).build(n, t, r);
      }
      class cV {
        constructor(n) {
          this._driver = n;
        }
        build(n, t, r) {
          const i = new hV(t);
          return this._resetContextStyleTimingState(i), Lt(this, Ro(n), i);
        }
        _resetContextStyleTimingState(n) {
          (n.currentQuerySelector = ""),
            (n.collectedStyles = new Map()),
            n.collectedStyles.set("", new Map()),
            (n.currentTime = 0);
        }
        visitTrigger(n, t) {
          let r = (t.queryCount = 0),
            i = (t.depCount = 0);
          const s = [],
            o = [];
          return (
            "@" == n.name.charAt(0) &&
              t.errors.push(
                (function D2() {
                  return new D(3006, !1);
                })()
              ),
            n.definitions.forEach((a) => {
              if ((this._resetContextStyleTimingState(t), 0 == a.type)) {
                const l = a,
                  u = l.name;
                u
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((c) => {
                    (l.name = c), s.push(this.visitState(l, t));
                  }),
                  (l.name = u);
              } else if (1 == a.type) {
                const l = this.visitTransition(a, t);
                (r += l.queryCount), (i += l.depCount), o.push(l);
              } else
                t.errors.push(
                  (function C2() {
                    return new D(3007, !1);
                  })()
                );
            }),
            {
              type: 7,
              name: n.name,
              states: s,
              transitions: o,
              queryCount: r,
              depCount: i,
              options: null,
            }
          );
        }
        visitState(n, t) {
          const r = this.visitStyle(n.styles, t),
            i = (n.options && n.options.params) || null;
          if (r.containsDynamicStyles) {
            const s = new Set(),
              o = i || {};
            r.styles.forEach((a) => {
              a instanceof Map &&
                a.forEach((l) => {
                  jE(l).forEach((u) => {
                    o.hasOwnProperty(u) || s.add(u);
                  });
                });
            }),
              s.size &&
                (cu(s.values()),
                t.errors.push(
                  (function w2(e, n) {
                    return new D(3008, !1);
                  })()
                ));
          }
          return {
            type: 0,
            name: n.name,
            style: r,
            options: i ? { params: i } : null,
          };
        }
        visitTransition(n, t) {
          (t.queryCount = 0), (t.depCount = 0);
          const r = Lt(this, Ro(n.animation), t);
          return {
            type: 1,
            matchers: oV(n.expr, t.errors),
            animation: r,
            queryCount: t.queryCount,
            depCount: t.depCount,
            options: zr(n.options),
          };
        }
        visitSequence(n, t) {
          return {
            type: 2,
            steps: n.steps.map((r) => Lt(this, r, t)),
            options: zr(n.options),
          };
        }
        visitGroup(n, t) {
          const r = t.currentTime;
          let i = 0;
          const s = n.steps.map((o) => {
            t.currentTime = r;
            const a = Lt(this, o, t);
            return (i = Math.max(i, t.currentTime)), a;
          });
          return (
            (t.currentTime = i), { type: 3, steps: s, options: zr(n.options) }
          );
        }
        visitAnimate(n, t) {
          const r = (function gV(e, n) {
            if (e.hasOwnProperty("duration")) return e;
            if ("number" == typeof e) return np(uu(e, n).duration, 0, "");
            const t = e;
            if (
              t
                .split(/\s+/)
                .some((s) => "{" == s.charAt(0) && "{" == s.charAt(1))
            ) {
              const s = np(0, 0, "");
              return (s.dynamic = !0), (s.strValue = t), s;
            }
            const i = uu(t, n);
            return np(i.duration, i.delay, i.easing);
          })(n.timings, t.errors);
          t.currentAnimateTimings = r;
          let i,
            s = n.styles ? n.styles : Hr({});
          if (5 == s.type) i = this.visitKeyframes(s, t);
          else {
            let o = n.styles,
              a = !1;
            if (!o) {
              a = !0;
              const u = {};
              r.easing && (u.easing = r.easing), (o = Hr(u));
            }
            t.currentTime += r.duration + r.delay;
            const l = this.visitStyle(o, t);
            (l.isEmptyStep = a), (i = l);
          }
          return (
            (t.currentAnimateTimings = null),
            { type: 4, timings: r, style: i, options: null }
          );
        }
        visitStyle(n, t) {
          const r = this._makeStyleAst(n, t);
          return this._validateStyleAst(r, t), r;
        }
        _makeStyleAst(n, t) {
          const r = [],
            i = Array.isArray(n.styles) ? n.styles : [n.styles];
          for (let a of i)
            "string" == typeof a
              ? a === zn
                ? r.push(a)
                : t.errors.push(new D(3002, !1))
              : r.push(kE(a));
          let s = !1,
            o = null;
          return (
            r.forEach((a) => {
              if (
                a instanceof Map &&
                (a.has("easing") && ((o = a.get("easing")), a.delete("easing")),
                !s)
              )
                for (let l of a.values())
                  if (l.toString().indexOf("{{") >= 0) {
                    s = !0;
                    break;
                  }
            }),
            {
              type: 6,
              styles: r,
              easing: o,
              offset: n.offset,
              containsDynamicStyles: s,
              options: null,
            }
          );
        }
        _validateStyleAst(n, t) {
          const r = t.currentAnimateTimings;
          let i = t.currentTime,
            s = t.currentTime;
          r && s > 0 && (s -= r.duration + r.delay),
            n.styles.forEach((o) => {
              "string" != typeof o &&
                o.forEach((a, l) => {
                  const u = t.collectedStyles.get(t.currentQuerySelector),
                    c = u.get(l);
                  let d = !0;
                  c &&
                    (s != i &&
                      s >= c.startTime &&
                      i <= c.endTime &&
                      (t.errors.push(
                        (function b2(e, n, t, r, i) {
                          return new D(3010, !1);
                        })()
                      ),
                      (d = !1)),
                    (s = c.startTime)),
                    d && u.set(l, { startTime: s, endTime: i }),
                    t.options &&
                      (function nV(e, n, t) {
                        const r = n.params || {},
                          i = jE(e);
                        i.length &&
                          i.forEach((s) => {
                            r.hasOwnProperty(s) ||
                              t.push(
                                (function m2(e) {
                                  return new D(3001, !1);
                                })()
                              );
                          });
                      })(a, t.options, t.errors);
                });
            });
        }
        visitKeyframes(n, t) {
          const r = { type: 5, styles: [], options: null };
          if (!t.currentAnimateTimings)
            return (
              t.errors.push(
                (function S2() {
                  return new D(3011, !1);
                })()
              ),
              r
            );
          let s = 0;
          const o = [];
          let a = !1,
            l = !1,
            u = 0;
          const c = n.steps.map((C) => {
            const _ = this._makeStyleAst(C, t);
            let S =
                null != _.offset
                  ? _.offset
                  : (function pV(e) {
                      if ("string" == typeof e) return null;
                      let n = null;
                      if (Array.isArray(e))
                        e.forEach((t) => {
                          if (t instanceof Map && t.has("offset")) {
                            const r = t;
                            (n = parseFloat(r.get("offset"))),
                              r.delete("offset");
                          }
                        });
                      else if (e instanceof Map && e.has("offset")) {
                        const t = e;
                        (n = parseFloat(t.get("offset"))), t.delete("offset");
                      }
                      return n;
                    })(_.styles),
              M = 0;
            return (
              null != S && (s++, (M = _.offset = S)),
              (l = l || M < 0 || M > 1),
              (a = a || M < u),
              (u = M),
              o.push(M),
              _
            );
          });
          l &&
            t.errors.push(
              (function I2() {
                return new D(3012, !1);
              })()
            ),
            a &&
              t.errors.push(
                (function T2() {
                  return new D(3200, !1);
                })()
              );
          const d = n.steps.length;
          let f = 0;
          s > 0 && s < d
            ? t.errors.push(
                (function M2() {
                  return new D(3202, !1);
                })()
              )
            : 0 == s && (f = 1 / (d - 1));
          const h = d - 1,
            p = t.currentTime,
            g = t.currentAnimateTimings,
            v = g.duration;
          return (
            c.forEach((C, _) => {
              const S = f > 0 ? (_ == h ? 1 : f * _) : o[_],
                M = S * v;
              (t.currentTime = p + g.delay + M),
                (g.duration = M),
                this._validateStyleAst(C, t),
                (C.offset = S),
                r.styles.push(C);
            }),
            r
          );
        }
        visitReference(n, t) {
          return {
            type: 8,
            animation: Lt(this, Ro(n.animation), t),
            options: zr(n.options),
          };
        }
        visitAnimateChild(n, t) {
          return t.depCount++, { type: 9, options: zr(n.options) };
        }
        visitAnimateRef(n, t) {
          return {
            type: 10,
            animation: this.visitReference(n.animation, t),
            options: zr(n.options),
          };
        }
        visitQuery(n, t) {
          const r = t.currentQuerySelector,
            i = n.options || {};
          t.queryCount++, (t.currentQuery = n);
          const [s, o] = (function dV(e) {
            const n = !!e.split(/\s*,\s*/).find((t) => ":self" == t);
            return (
              n && (e = e.replace(uV, "")),
              (e = e
                .replace(/@\*/g, lu)
                .replace(/@\w+/g, (t) => lu + "-" + t.slice(1))
                .replace(/:animating/g, Yh)),
              [e, n]
            );
          })(n.selector);
          (t.currentQuerySelector = r.length ? r + " " + s : s),
            Ft(t.collectedStyles, t.currentQuerySelector, new Map());
          const a = Lt(this, Ro(n.animation), t);
          return (
            (t.currentQuery = null),
            (t.currentQuerySelector = r),
            {
              type: 11,
              selector: s,
              limit: i.limit || 0,
              optional: !!i.optional,
              includeSelf: o,
              animation: a,
              originalSelector: n.selector,
              options: zr(n.options),
            }
          );
        }
        visitStagger(n, t) {
          t.currentQuery ||
            t.errors.push(
              (function A2() {
                return new D(3013, !1);
              })()
            );
          const r =
            "full" === n.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : uu(n.timings, t.errors, !0);
          return {
            type: 12,
            animation: Lt(this, Ro(n.animation), t),
            timings: r,
            options: null,
          };
        }
      }
      class hV {
        constructor(n) {
          (this.errors = n),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = new Map()),
            (this.options = null),
            (this.unsupportedCSSPropertiesFound = new Set());
        }
      }
      function zr(e) {
        return (
          e
            ? (e = No(e)).params &&
              (e.params = (function fV(e) {
                return e ? No(e) : null;
              })(e.params))
            : (e = {}),
          e
        );
      }
      function np(e, n, t) {
        return { duration: e, delay: n, easing: t };
      }
      function rp(e, n, t, r, i, s, o = null, a = !1) {
        return {
          type: 1,
          element: e,
          keyframes: n,
          preStyleProps: t,
          postStyleProps: r,
          duration: i,
          delay: s,
          totalTime: i + s,
          easing: o,
          subTimeline: a,
        };
      }
      class pu {
        constructor() {
          this._map = new Map();
        }
        get(n) {
          return this._map.get(n) || [];
        }
        append(n, t) {
          let r = this._map.get(n);
          r || this._map.set(n, (r = [])), r.push(...t);
        }
        has(n) {
          return this._map.has(n);
        }
        clear() {
          this._map.clear();
        }
      }
      const vV = new RegExp(":enter", "g"),
        DV = new RegExp(":leave", "g");
      function ip(e, n, t, r, i, s = new Map(), o = new Map(), a, l, u = []) {
        return new CV().buildKeyframes(e, n, t, r, i, s, o, a, l, u);
      }
      class CV {
        buildKeyframes(n, t, r, i, s, o, a, l, u, c = []) {
          u = u || new pu();
          const d = new sp(n, t, u, i, s, c, []);
          d.options = l;
          const f = l.delay ? Gn(l.delay) : 0;
          d.currentTimeline.delayNextStep(f),
            d.currentTimeline.setStyles([o], null, d.errors, l),
            Lt(this, r, d);
          const h = d.timelines.filter((p) => p.containsAnimation());
          if (h.length && a.size) {
            let p;
            for (let g = h.length - 1; g >= 0; g--) {
              const v = h[g];
              if (v.element === t) {
                p = v;
                break;
              }
            }
            p &&
              !p.allowOnlyTimelineStyles() &&
              p.setStyles([a], null, d.errors, l);
          }
          return h.length
            ? h.map((p) => p.buildKeyframes())
            : [rp(t, [], [], [], 0, f, "", !1)];
        }
        visitTrigger(n, t) {}
        visitState(n, t) {}
        visitTransition(n, t) {}
        visitAnimateChild(n, t) {
          const r = t.subInstructions.get(t.element);
          if (r) {
            const i = t.createSubContext(n.options),
              s = t.currentTimeline.currentTime,
              o = this._visitSubInstructions(r, i, i.options);
            s != o && t.transformIntoNewTimeline(o);
          }
          t.previousNode = n;
        }
        visitAnimateRef(n, t) {
          const r = t.createSubContext(n.options);
          r.transformIntoNewTimeline(),
            this._applyAnimationRefDelays(
              [n.options, n.animation.options],
              t,
              r
            ),
            this.visitReference(n.animation, r),
            t.transformIntoNewTimeline(r.currentTimeline.currentTime),
            (t.previousNode = n);
        }
        _applyAnimationRefDelays(n, t, r) {
          for (const i of n) {
            const s = i?.delay;
            if (s) {
              const o =
                "number" == typeof s ? s : Gn(Oo(s, i?.params ?? {}, t.errors));
              r.delayNextStep(o);
            }
          }
        }
        _visitSubInstructions(n, t, r) {
          let s = t.currentTimeline.currentTime;
          const o = null != r.duration ? Gn(r.duration) : null,
            a = null != r.delay ? Gn(r.delay) : null;
          return (
            0 !== o &&
              n.forEach((l) => {
                const u = t.appendInstructionToTimeline(l, o, a);
                s = Math.max(s, u.duration + u.delay);
              }),
            s
          );
        }
        visitReference(n, t) {
          t.updateOptions(n.options, !0),
            Lt(this, n.animation, t),
            (t.previousNode = n);
        }
        visitSequence(n, t) {
          const r = t.subContextCount;
          let i = t;
          const s = n.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((i = t.createSubContext(s)),
            i.transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == i.previousNode.type &&
              (i.currentTimeline.snapshotCurrentStyles(),
              (i.previousNode = gu));
            const o = Gn(s.delay);
            i.delayNextStep(o);
          }
          n.steps.length &&
            (n.steps.forEach((o) => Lt(this, o, i)),
            i.currentTimeline.applyStylesToKeyframe(),
            i.subContextCount > r && i.transformIntoNewTimeline()),
            (t.previousNode = n);
        }
        visitGroup(n, t) {
          const r = [];
          let i = t.currentTimeline.currentTime;
          const s = n.options && n.options.delay ? Gn(n.options.delay) : 0;
          n.steps.forEach((o) => {
            const a = t.createSubContext(n.options);
            s && a.delayNextStep(s),
              Lt(this, o, a),
              (i = Math.max(i, a.currentTimeline.currentTime)),
              r.push(a.currentTimeline);
          }),
            r.forEach((o) => t.currentTimeline.mergeTimelineCollectedStyles(o)),
            t.transformIntoNewTimeline(i),
            (t.previousNode = n);
        }
        _visitTiming(n, t) {
          if (n.dynamic) {
            const r = n.strValue;
            return uu(t.params ? Oo(r, t.params, t.errors) : r, t.errors);
          }
          return { duration: n.duration, delay: n.delay, easing: n.easing };
        }
        visitAnimate(n, t) {
          const r = (t.currentAnimateTimings = this._visitTiming(n.timings, t)),
            i = t.currentTimeline;
          r.delay && (t.incrementTime(r.delay), i.snapshotCurrentStyles());
          const s = n.style;
          5 == s.type
            ? this.visitKeyframes(s, t)
            : (t.incrementTime(r.duration),
              this.visitStyle(s, t),
              i.applyStylesToKeyframe()),
            (t.currentAnimateTimings = null),
            (t.previousNode = n);
        }
        visitStyle(n, t) {
          const r = t.currentTimeline,
            i = t.currentAnimateTimings;
          !i && r.hasCurrentStyleProperties() && r.forwardFrame();
          const s = (i && i.easing) || n.easing;
          n.isEmptyStep
            ? r.applyEmptyStep(s)
            : r.setStyles(n.styles, s, t.errors, t.options),
            (t.previousNode = n);
        }
        visitKeyframes(n, t) {
          const r = t.currentAnimateTimings,
            i = t.currentTimeline.duration,
            s = r.duration,
            a = t.createSubContext().currentTimeline;
          (a.easing = r.easing),
            n.styles.forEach((l) => {
              a.forwardTime((l.offset || 0) * s),
                a.setStyles(l.styles, l.easing, t.errors, t.options),
                a.applyStylesToKeyframe();
            }),
            t.currentTimeline.mergeTimelineCollectedStyles(a),
            t.transformIntoNewTimeline(i + s),
            (t.previousNode = n);
        }
        visitQuery(n, t) {
          const r = t.currentTimeline.currentTime,
            i = n.options || {},
            s = i.delay ? Gn(i.delay) : 0;
          s &&
            (6 === t.previousNode.type ||
              (0 == r && t.currentTimeline.hasCurrentStyleProperties())) &&
            (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = gu));
          let o = r;
          const a = t.invokeQuery(
            n.selector,
            n.originalSelector,
            n.limit,
            n.includeSelf,
            !!i.optional,
            t.errors
          );
          t.currentQueryTotal = a.length;
          let l = null;
          a.forEach((u, c) => {
            t.currentQueryIndex = c;
            const d = t.createSubContext(n.options, u);
            s && d.delayNextStep(s),
              u === t.element && (l = d.currentTimeline),
              Lt(this, n.animation, d),
              d.currentTimeline.applyStylesToKeyframe(),
              (o = Math.max(o, d.currentTimeline.currentTime));
          }),
            (t.currentQueryIndex = 0),
            (t.currentQueryTotal = 0),
            t.transformIntoNewTimeline(o),
            l &&
              (t.currentTimeline.mergeTimelineCollectedStyles(l),
              t.currentTimeline.snapshotCurrentStyles()),
            (t.previousNode = n);
        }
        visitStagger(n, t) {
          const r = t.parentContext,
            i = t.currentTimeline,
            s = n.timings,
            o = Math.abs(s.duration),
            a = o * (t.currentQueryTotal - 1);
          let l = o * t.currentQueryIndex;
          switch (s.duration < 0 ? "reverse" : s.easing) {
            case "reverse":
              l = a - l;
              break;
            case "full":
              l = r.currentStaggerTime;
          }
          const c = t.currentTimeline;
          l && c.delayNextStep(l);
          const d = c.currentTime;
          Lt(this, n.animation, t),
            (t.previousNode = n),
            (r.currentStaggerTime =
              i.currentTime - d + (i.startTime - r.currentTimeline.startTime));
        }
      }
      const gu = {};
      class sp {
        constructor(n, t, r, i, s, o, a, l) {
          (this._driver = n),
            (this.element = t),
            (this.subInstructions = r),
            (this._enterClassName = i),
            (this._leaveClassName = s),
            (this.errors = o),
            (this.timelines = a),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = gu),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = l || new mu(this._driver, t, 0)),
            a.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(n, t) {
          if (!n) return;
          const r = n;
          let i = this.options;
          null != r.duration && (i.duration = Gn(r.duration)),
            null != r.delay && (i.delay = Gn(r.delay));
          const s = r.params;
          if (s) {
            let o = i.params;
            o || (o = this.options.params = {}),
              Object.keys(s).forEach((a) => {
                (!t || !o.hasOwnProperty(a)) &&
                  (o[a] = Oo(s[a], o, this.errors));
              });
          }
        }
        _copyOptions() {
          const n = {};
          if (this.options) {
            const t = this.options.params;
            if (t) {
              const r = (n.params = {});
              Object.keys(t).forEach((i) => {
                r[i] = t[i];
              });
            }
          }
          return n;
        }
        createSubContext(n = null, t, r) {
          const i = t || this.element,
            s = new sp(
              this._driver,
              i,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(i, r || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(n),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(n) {
          return (
            (this.previousNode = gu),
            (this.currentTimeline = this.currentTimeline.fork(this.element, n)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(n, t, r) {
          const i = {
              duration: t ?? n.duration,
              delay: this.currentTimeline.currentTime + (r ?? 0) + n.delay,
              easing: "",
            },
            s = new wV(
              this._driver,
              n.element,
              n.keyframes,
              n.preStyleProps,
              n.postStyleProps,
              i,
              n.stretchStartingKeyframe
            );
          return this.timelines.push(s), i;
        }
        incrementTime(n) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + n);
        }
        delayNextStep(n) {
          n > 0 && this.currentTimeline.delayNextStep(n);
        }
        invokeQuery(n, t, r, i, s, o) {
          let a = [];
          if ((i && a.push(this.element), n.length > 0)) {
            n = (n = n.replace(vV, "." + this._enterClassName)).replace(
              DV,
              "." + this._leaveClassName
            );
            let u = this._driver.query(this.element, n, 1 != r);
            0 !== r &&
              (u = r < 0 ? u.slice(u.length + r, u.length) : u.slice(0, r)),
              a.push(...u);
          }
          return (
            !s &&
              0 == a.length &&
              o.push(
                (function N2(e) {
                  return new D(3014, !1);
                })()
              ),
            a
          );
        }
      }
      class mu {
        constructor(n, t, r, i) {
          (this._driver = n),
            (this.element = t),
            (this.startTime = r),
            (this._elementTimelineStylesLookup = i),
            (this.duration = 0),
            (this.easing = null),
            (this._previousKeyframe = new Map()),
            (this._currentKeyframe = new Map()),
            (this._keyframes = new Map()),
            (this._styleSummary = new Map()),
            (this._localTimelineStyles = new Map()),
            (this._pendingStyles = new Map()),
            (this._backFill = new Map()),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(t)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                t,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.hasCurrentStyleProperties();
            default:
              return !0;
          }
        }
        hasCurrentStyleProperties() {
          return this._currentKeyframe.size > 0;
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(n) {
          const t = 1 === this._keyframes.size && this._pendingStyles.size;
          this.duration || t
            ? (this.forwardTime(this.currentTime + n),
              t && this.snapshotCurrentStyles())
            : (this.startTime += n);
        }
        fork(n, t) {
          return (
            this.applyStylesToKeyframe(),
            new mu(
              this._driver,
              n,
              t || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = new Map()),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(n) {
          this.applyStylesToKeyframe(),
            (this.duration = n),
            this._loadKeyframe();
        }
        _updateStyle(n, t) {
          this._localTimelineStyles.set(n, t),
            this._globalTimelineStyles.set(n, t),
            this._styleSummary.set(n, { time: this.currentTime, value: t });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(n) {
          n && this._previousKeyframe.set("easing", n);
          for (let [t, r] of this._globalTimelineStyles)
            this._backFill.set(t, r || zn), this._currentKeyframe.set(t, zn);
          this._currentEmptyStepKeyframe = this._currentKeyframe;
        }
        setStyles(n, t, r, i) {
          t && this._previousKeyframe.set("easing", t);
          const s = (i && i.params) || {},
            o = (function EV(e, n) {
              const t = new Map();
              let r;
              return (
                e.forEach((i) => {
                  if ("*" === i) {
                    r = r || n.keys();
                    for (let s of r) t.set(s, zn);
                  } else gr(i, t);
                }),
                t
              );
            })(n, this._globalTimelineStyles);
          for (let [a, l] of o) {
            const u = Oo(l, s, r);
            this._pendingStyles.set(a, u),
              this._localTimelineStyles.has(a) ||
                this._backFill.set(a, this._globalTimelineStyles.get(a) ?? zn),
              this._updateStyle(a, u);
          }
        }
        applyStylesToKeyframe() {
          0 != this._pendingStyles.size &&
            (this._pendingStyles.forEach((n, t) => {
              this._currentKeyframe.set(t, n);
            }),
            this._pendingStyles.clear(),
            this._localTimelineStyles.forEach((n, t) => {
              this._currentKeyframe.has(t) || this._currentKeyframe.set(t, n);
            }));
        }
        snapshotCurrentStyles() {
          for (let [n, t] of this._localTimelineStyles)
            this._pendingStyles.set(n, t), this._updateStyle(n, t);
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const n = [];
          for (let t in this._currentKeyframe) n.push(t);
          return n;
        }
        mergeTimelineCollectedStyles(n) {
          n._styleSummary.forEach((t, r) => {
            const i = this._styleSummary.get(r);
            (!i || t.time > i.time) && this._updateStyle(r, t.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const n = new Set(),
            t = new Set(),
            r = 1 === this._keyframes.size && 0 === this.duration;
          let i = [];
          this._keyframes.forEach((a, l) => {
            const u = gr(a, new Map(), this._backFill);
            u.forEach((c, d) => {
              "!" === c ? n.add(d) : c === zn && t.add(d);
            }),
              r || u.set("offset", l / this.duration),
              i.push(u);
          });
          const s = n.size ? cu(n.values()) : [],
            o = t.size ? cu(t.values()) : [];
          if (r) {
            const a = i[0],
              l = new Map(a);
            a.set("offset", 0), l.set("offset", 1), (i = [a, l]);
          }
          return rp(
            this.element,
            i,
            s,
            o,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class wV extends mu {
        constructor(n, t, r, i, s, o, a = !1) {
          super(n, t, o.delay),
            (this.keyframes = r),
            (this.preStyleProps = i),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = a),
            (this.timings = {
              duration: o.duration,
              delay: o.delay,
              easing: o.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let n = this.keyframes,
            { delay: t, duration: r, easing: i } = this.timings;
          if (this._stretchStartingKeyframe && t) {
            const s = [],
              o = r + t,
              a = t / o,
              l = gr(n[0]);
            l.set("offset", 0), s.push(l);
            const u = gr(n[0]);
            u.set("offset", zE(a)), s.push(u);
            const c = n.length - 1;
            for (let d = 1; d <= c; d++) {
              let f = gr(n[d]);
              const h = f.get("offset");
              f.set("offset", zE((t + h * r) / o)), s.push(f);
            }
            (r = o), (t = 0), (i = ""), (n = s);
          }
          return rp(
            this.element,
            n,
            this.preStyleProps,
            this.postStyleProps,
            r,
            t,
            i,
            !0
          );
        }
      }
      function zE(e, n = 3) {
        const t = Math.pow(10, n - 1);
        return Math.round(e * t) / t;
      }
      class op {}
      const bV = new Set([
        "width",
        "height",
        "minWidth",
        "minHeight",
        "maxWidth",
        "maxHeight",
        "left",
        "top",
        "bottom",
        "right",
        "fontSize",
        "outlineWidth",
        "outlineOffset",
        "paddingTop",
        "paddingLeft",
        "paddingBottom",
        "paddingRight",
        "marginTop",
        "marginLeft",
        "marginBottom",
        "marginRight",
        "borderRadius",
        "borderWidth",
        "borderTopWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "textIndent",
        "perspective",
      ]);
      class SV extends op {
        normalizePropertyName(n, t) {
          return ep(n);
        }
        normalizeStyleValue(n, t, r, i) {
          let s = "";
          const o = r.toString().trim();
          if (bV.has(t) && 0 !== r && "0" !== r)
            if ("number" == typeof r) s = "px";
            else {
              const a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
              a &&
                0 == a[1].length &&
                i.push(
                  (function _2(e, n) {
                    return new D(3005, !1);
                  })()
                );
            }
          return o + s;
        }
      }
      function GE(e, n, t, r, i, s, o, a, l, u, c, d, f) {
        return {
          type: 0,
          element: e,
          triggerName: n,
          isRemovalTransition: i,
          fromState: t,
          fromStyles: s,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: u,
          postStyleProps: c,
          totalTime: d,
          errors: f,
        };
      }
      const ap = {};
      class WE {
        constructor(n, t, r) {
          (this._triggerName = n), (this.ast = t), (this._stateStyles = r);
        }
        match(n, t, r, i) {
          return (function IV(e, n, t, r, i) {
            return e.some((s) => s(n, t, r, i));
          })(this.ast.matchers, n, t, r, i);
        }
        buildStyles(n, t, r) {
          let i = this._stateStyles.get("*");
          return (
            void 0 !== n && (i = this._stateStyles.get(n?.toString()) || i),
            i ? i.buildStyles(t, r) : new Map()
          );
        }
        build(n, t, r, i, s, o, a, l, u, c) {
          const d = [],
            f = (this.ast.options && this.ast.options.params) || ap,
            p = this.buildStyles(r, (a && a.params) || ap, d),
            g = (l && l.params) || ap,
            v = this.buildStyles(i, g, d),
            C = new Set(),
            _ = new Map(),
            S = new Map(),
            M = "void" === i,
            H = { params: TV(g, f), delay: this.ast.options?.delay },
            fe = c ? [] : ip(n, t, this.ast.animation, s, o, p, v, H, u, d);
          let _e = 0;
          if (
            (fe.forEach((Vt) => {
              _e = Math.max(Vt.duration + Vt.delay, _e);
            }),
            d.length)
          )
            return GE(t, this._triggerName, r, i, M, p, v, [], [], _, S, _e, d);
          fe.forEach((Vt) => {
            const cn = Vt.element,
              nc = Ft(_, cn, new Set());
            Vt.preStyleProps.forEach((Jr) => nc.add(Jr));
            const ua = Ft(S, cn, new Set());
            Vt.postStyleProps.forEach((Jr) => ua.add(Jr)),
              cn !== t && C.add(cn);
          });
          const Ye = cu(C.values());
          return GE(t, this._triggerName, r, i, M, p, v, fe, Ye, _, S, _e);
        }
      }
      function TV(e, n) {
        const t = No(n);
        for (const r in e) e.hasOwnProperty(r) && null != e[r] && (t[r] = e[r]);
        return t;
      }
      class MV {
        constructor(n, t, r) {
          (this.styles = n), (this.defaultParams = t), (this.normalizer = r);
        }
        buildStyles(n, t) {
          const r = new Map(),
            i = No(this.defaultParams);
          return (
            Object.keys(n).forEach((s) => {
              const o = n[s];
              null !== o && (i[s] = o);
            }),
            this.styles.styles.forEach((s) => {
              "string" != typeof s &&
                s.forEach((o, a) => {
                  o && (o = Oo(o, i, t));
                  const l = this.normalizer.normalizePropertyName(a, t);
                  (o = this.normalizer.normalizeStyleValue(a, l, o, t)),
                    r.set(a, o);
                });
            }),
            r
          );
        }
      }
      class NV {
        constructor(n, t, r) {
          (this.name = n),
            (this.ast = t),
            (this._normalizer = r),
            (this.transitionFactories = []),
            (this.states = new Map()),
            t.states.forEach((i) => {
              this.states.set(
                i.name,
                new MV(i.style, (i.options && i.options.params) || {}, r)
              );
            }),
            qE(this.states, "true", "1"),
            qE(this.states, "false", "0"),
            t.transitions.forEach((i) => {
              this.transitionFactories.push(new WE(n, i, this.states));
            }),
            (this.fallbackTransition = (function RV(e, n, t) {
              return new WE(
                e,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [(o, a) => !0],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                n
              );
            })(n, this.states));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(n, t, r, i) {
          return (
            this.transitionFactories.find((o) => o.match(n, t, r, i)) || null
          );
        }
        matchStyles(n, t, r) {
          return this.fallbackTransition.buildStyles(n, t, r);
        }
      }
      function qE(e, n, t) {
        e.has(n)
          ? e.has(t) || e.set(t, e.get(n))
          : e.has(t) && e.set(n, e.get(t));
      }
      const OV = new pu();
      class PV {
        constructor(n, t, r) {
          (this.bodyNode = n),
            (this._driver = t),
            (this._normalizer = r),
            (this._animations = new Map()),
            (this._playersById = new Map()),
            (this.players = []);
        }
        register(n, t) {
          const r = [],
            s = tp(this._driver, t, r, []);
          if (r.length)
            throw (function k2(e) {
              return new D(3503, !1);
            })();
          this._animations.set(n, s);
        }
        _buildPlayer(n, t, r) {
          const i = n.element,
            s = AE(this._normalizer, n.keyframes, t, r);
          return this._driver.animate(
            i,
            s,
            n.duration,
            n.delay,
            n.easing,
            [],
            !0
          );
        }
        create(n, t, r = {}) {
          const i = [],
            s = this._animations.get(n);
          let o;
          const a = new Map();
          if (
            (s
              ? ((o = ip(
                  this._driver,
                  t,
                  s,
                  Zh,
                  ou,
                  new Map(),
                  new Map(),
                  r,
                  OV,
                  i
                )),
                o.forEach((c) => {
                  const d = Ft(a, c.element, new Map());
                  c.postStyleProps.forEach((f) => d.set(f, null));
                }))
              : (i.push(
                  (function V2() {
                    return new D(3300, !1);
                  })()
                ),
                (o = [])),
            i.length)
          )
            throw (function j2(e) {
              return new D(3504, !1);
            })();
          a.forEach((c, d) => {
            c.forEach((f, h) => {
              c.set(h, this._driver.computeStyle(d, h, zn));
            });
          });
          const u = pr(
            o.map((c) => {
              const d = a.get(c.element);
              return this._buildPlayer(c, new Map(), d);
            })
          );
          return (
            this._playersById.set(n, u),
            u.onDestroy(() => this.destroy(n)),
            this.players.push(u),
            u
          );
        }
        destroy(n) {
          const t = this._getPlayer(n);
          t.destroy(), this._playersById.delete(n);
          const r = this.players.indexOf(t);
          r >= 0 && this.players.splice(r, 1);
        }
        _getPlayer(n) {
          const t = this._playersById.get(n);
          if (!t)
            throw (function B2(e) {
              return new D(3301, !1);
            })();
          return t;
        }
        listen(n, t, r, i) {
          const s = qh(t, "", "", "");
          return Gh(this._getPlayer(n), r, s, i), () => {};
        }
        command(n, t, r, i) {
          if ("register" == r) return void this.register(n, i[0]);
          if ("create" == r) return void this.create(n, t, i[0] || {});
          const s = this._getPlayer(n);
          switch (r) {
            case "play":
              s.play();
              break;
            case "pause":
              s.pause();
              break;
            case "reset":
              s.reset();
              break;
            case "restart":
              s.restart();
              break;
            case "finish":
              s.finish();
              break;
            case "init":
              s.init();
              break;
            case "setPosition":
              s.setPosition(parseFloat(i[0]));
              break;
            case "destroy":
              this.destroy(n);
          }
        }
      }
      const KE = "ng-animate-queued",
        lp = "ng-animate-disabled",
        VV = [],
        QE = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        jV = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        ln = "__ng_removed";
      class up {
        get params() {
          return this.options.params;
        }
        constructor(n, t = "") {
          this.namespaceId = t;
          const r = n && n.hasOwnProperty("value");
          if (
            ((this.value = (function $V(e) {
              return e ?? null;
            })(r ? n.value : n)),
            r)
          ) {
            const s = No(n);
            delete s.value, (this.options = s);
          } else this.options = {};
          this.options.params || (this.options.params = {});
        }
        absorbOptions(n) {
          const t = n.params;
          if (t) {
            const r = this.options.params;
            Object.keys(t).forEach((i) => {
              null == r[i] && (r[i] = t[i]);
            });
          }
        }
      }
      const Po = "void",
        cp = new up(Po);
      class BV {
        constructor(n, t, r) {
          (this.id = n),
            (this.hostElement = t),
            (this._engine = r),
            (this.players = []),
            (this._triggers = new Map()),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + n),
            Qt(t, this._hostClassName);
        }
        listen(n, t, r, i) {
          if (!this._triggers.has(t))
            throw (function H2(e, n) {
              return new D(3302, !1);
            })();
          if (null == r || 0 == r.length)
            throw (function U2(e) {
              return new D(3303, !1);
            })();
          if (
            !(function zV(e) {
              return "start" == e || "done" == e;
            })(r)
          )
            throw (function $2(e, n) {
              return new D(3400, !1);
            })();
          const s = Ft(this._elementListeners, n, []),
            o = { name: t, phase: r, callback: i };
          s.push(o);
          const a = Ft(this._engine.statesByElement, n, new Map());
          return (
            a.has(t) || (Qt(n, au), Qt(n, au + "-" + t), a.set(t, cp)),
            () => {
              this._engine.afterFlush(() => {
                const l = s.indexOf(o);
                l >= 0 && s.splice(l, 1), this._triggers.has(t) || a.delete(t);
              });
            }
          );
        }
        register(n, t) {
          return !this._triggers.has(n) && (this._triggers.set(n, t), !0);
        }
        _getTrigger(n) {
          const t = this._triggers.get(n);
          if (!t)
            throw (function z2(e) {
              return new D(3401, !1);
            })();
          return t;
        }
        trigger(n, t, r, i = !0) {
          const s = this._getTrigger(t),
            o = new dp(this.id, t, n);
          let a = this._engine.statesByElement.get(n);
          a ||
            (Qt(n, au),
            Qt(n, au + "-" + t),
            this._engine.statesByElement.set(n, (a = new Map())));
          let l = a.get(t);
          const u = new up(r, this.id);
          if (
            (!(r && r.hasOwnProperty("value")) &&
              l &&
              u.absorbOptions(l.options),
            a.set(t, u),
            l || (l = cp),
            u.value !== Po && l.value === u.value)
          ) {
            if (
              !(function qV(e, n) {
                const t = Object.keys(e),
                  r = Object.keys(n);
                if (t.length != r.length) return !1;
                for (let i = 0; i < t.length; i++) {
                  const s = t[i];
                  if (!n.hasOwnProperty(s) || e[s] !== n[s]) return !1;
                }
                return !0;
              })(l.params, u.params)
            ) {
              const g = [],
                v = s.matchStyles(l.value, l.params, g),
                C = s.matchStyles(u.value, u.params, g);
              g.length
                ? this._engine.reportError(g)
                : this._engine.afterFlush(() => {
                    $r(n, v), bn(n, C);
                  });
            }
            return;
          }
          const f = Ft(this._engine.playersByElement, n, []);
          f.forEach((g) => {
            g.namespaceId == this.id &&
              g.triggerName == t &&
              g.queued &&
              g.destroy();
          });
          let h = s.matchTransition(l.value, u.value, n, u.params),
            p = !1;
          if (!h) {
            if (!i) return;
            (h = s.fallbackTransition), (p = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: n,
              triggerName: t,
              transition: h,
              fromState: l,
              toState: u,
              player: o,
              isFallbackTransition: p,
            }),
            p ||
              (Qt(n, KE),
              o.onStart(() => {
                Xi(n, KE);
              })),
            o.onDone(() => {
              let g = this.players.indexOf(o);
              g >= 0 && this.players.splice(g, 1);
              const v = this._engine.playersByElement.get(n);
              if (v) {
                let C = v.indexOf(o);
                C >= 0 && v.splice(C, 1);
              }
            }),
            this.players.push(o),
            f.push(o),
            o
          );
        }
        deregister(n) {
          this._triggers.delete(n),
            this._engine.statesByElement.forEach((t) => t.delete(n)),
            this._elementListeners.forEach((t, r) => {
              this._elementListeners.set(
                r,
                t.filter((i) => i.name != n)
              );
            });
        }
        clearElementCache(n) {
          this._engine.statesByElement.delete(n),
            this._elementListeners.delete(n);
          const t = this._engine.playersByElement.get(n);
          t &&
            (t.forEach((r) => r.destroy()),
            this._engine.playersByElement.delete(n));
        }
        _signalRemovalForInnerTriggers(n, t) {
          const r = this._engine.driver.query(n, lu, !0);
          r.forEach((i) => {
            if (i[ln]) return;
            const s = this._engine.fetchNamespacesByElement(i);
            s.size
              ? s.forEach((o) => o.triggerLeaveAnimation(i, t, !1, !0))
              : this.clearElementCache(i);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              r.forEach((i) => this.clearElementCache(i))
            );
        }
        triggerLeaveAnimation(n, t, r, i) {
          const s = this._engine.statesByElement.get(n),
            o = new Map();
          if (s) {
            const a = [];
            if (
              (s.forEach((l, u) => {
                if ((o.set(u, l.value), this._triggers.has(u))) {
                  const c = this.trigger(n, u, Po, i);
                  c && a.push(c);
                }
              }),
              a.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, n, !0, t, o),
                r && pr(a).onDone(() => this._engine.processLeaveNode(n)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(n) {
          const t = this._elementListeners.get(n),
            r = this._engine.statesByElement.get(n);
          if (t && r) {
            const i = new Set();
            t.forEach((s) => {
              const o = s.name;
              if (i.has(o)) return;
              i.add(o);
              const l = this._triggers.get(o).fallbackTransition,
                u = r.get(o) || cp,
                c = new up(Po),
                d = new dp(this.id, o, n);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: n,
                  triggerName: o,
                  transition: l,
                  fromState: u,
                  toState: c,
                  player: d,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(n, t) {
          const r = this._engine;
          if (
            (n.childElementCount && this._signalRemovalForInnerTriggers(n, t),
            this.triggerLeaveAnimation(n, t, !0))
          )
            return;
          let i = !1;
          if (r.totalAnimations) {
            const s = r.players.length ? r.playersByQueriedElement.get(n) : [];
            if (s && s.length) i = !0;
            else {
              let o = n;
              for (; (o = o.parentNode); )
                if (r.statesByElement.get(o)) {
                  i = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(n), i))
            r.markElementAsRemoved(this.id, n, !1, t);
          else {
            const s = n[ln];
            (!s || s === QE) &&
              (r.afterFlush(() => this.clearElementCache(n)),
              r.destroyInnerAnimations(n),
              r._onRemovalComplete(n, t));
          }
        }
        insertNode(n, t) {
          Qt(n, this._hostClassName);
        }
        drainQueuedTransitions(n) {
          const t = [];
          return (
            this._queue.forEach((r) => {
              const i = r.player;
              if (i.destroyed) return;
              const s = r.element,
                o = this._elementListeners.get(s);
              o &&
                o.forEach((a) => {
                  if (a.name == r.triggerName) {
                    const l = qh(
                      s,
                      r.triggerName,
                      r.fromState.value,
                      r.toState.value
                    );
                    (l._data = n), Gh(r.player, a.phase, l, a.callback);
                  }
                }),
                i.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      i.destroy();
                    })
                  : t.push(r);
            }),
            (this._queue = []),
            t.sort((r, i) => {
              const s = r.transition.ast.depCount,
                o = i.transition.ast.depCount;
              return 0 == s || 0 == o
                ? s - o
                : this._engine.driver.containsElement(r.element, i.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(n) {
          this.players.forEach((t) => t.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, n);
        }
      }
      class HV {
        _onRemovalComplete(n, t) {
          this.onRemovalComplete(n, t);
        }
        constructor(n, t, r) {
          (this.bodyNode = n),
            (this.driver = t),
            (this._normalizer = r),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (i, s) => {});
        }
        get queuedPlayers() {
          const n = [];
          return (
            this._namespaceList.forEach((t) => {
              t.players.forEach((r) => {
                r.queued && n.push(r);
              });
            }),
            n
          );
        }
        createNamespace(n, t) {
          const r = new BV(n, t, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, t)
              ? this._balanceNamespaceList(r, t)
              : (this.newHostElements.set(t, r), this.collectEnterElement(t)),
            (this._namespaceLookup[n] = r)
          );
        }
        _balanceNamespaceList(n, t) {
          const r = this._namespaceList,
            i = this.namespacesByHostElement;
          if (r.length - 1 >= 0) {
            let o = !1,
              a = this.driver.getParentElement(t);
            for (; a; ) {
              const l = i.get(a);
              if (l) {
                const u = r.indexOf(l);
                r.splice(u + 1, 0, n), (o = !0);
                break;
              }
              a = this.driver.getParentElement(a);
            }
            o || r.unshift(n);
          } else r.push(n);
          return i.set(t, n), n;
        }
        register(n, t) {
          let r = this._namespaceLookup[n];
          return r || (r = this.createNamespace(n, t)), r;
        }
        registerTrigger(n, t, r) {
          let i = this._namespaceLookup[n];
          i && i.register(t, r) && this.totalAnimations++;
        }
        destroy(n, t) {
          n &&
            (this.afterFlush(() => {}),
            this.afterFlushAnimationsDone(() => {
              const r = this._fetchNamespace(n);
              this.namespacesByHostElement.delete(r.hostElement);
              const i = this._namespaceList.indexOf(r);
              i >= 0 && this._namespaceList.splice(i, 1),
                r.destroy(t),
                delete this._namespaceLookup[n];
            }));
        }
        _fetchNamespace(n) {
          return this._namespaceLookup[n];
        }
        fetchNamespacesByElement(n) {
          const t = new Set(),
            r = this.statesByElement.get(n);
          if (r)
            for (let i of r.values())
              if (i.namespaceId) {
                const s = this._fetchNamespace(i.namespaceId);
                s && t.add(s);
              }
          return t;
        }
        trigger(n, t, r, i) {
          if (yu(t)) {
            const s = this._fetchNamespace(n);
            if (s) return s.trigger(t, r, i), !0;
          }
          return !1;
        }
        insertNode(n, t, r, i) {
          if (!yu(t)) return;
          const s = t[ln];
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const o = this.collectedLeaveElements.indexOf(t);
            o >= 0 && this.collectedLeaveElements.splice(o, 1);
          }
          if (n) {
            const o = this._fetchNamespace(n);
            o && o.insertNode(t, r);
          }
          i && this.collectEnterElement(t);
        }
        collectEnterElement(n) {
          this.collectedEnterElements.push(n);
        }
        markElementAsDisabled(n, t) {
          t
            ? this.disabledNodes.has(n) ||
              (this.disabledNodes.add(n), Qt(n, lp))
            : this.disabledNodes.has(n) &&
              (this.disabledNodes.delete(n), Xi(n, lp));
        }
        removeNode(n, t, r) {
          if (yu(t)) {
            const i = n ? this._fetchNamespace(n) : null;
            i ? i.removeNode(t, r) : this.markElementAsRemoved(n, t, !1, r);
            const s = this.namespacesByHostElement.get(t);
            s && s.id !== n && s.removeNode(t, r);
          } else this._onRemovalComplete(t, r);
        }
        markElementAsRemoved(n, t, r, i, s) {
          this.collectedLeaveElements.push(t),
            (t[ln] = {
              namespaceId: n,
              setForRemoval: i,
              hasAnimation: r,
              removedBeforeQueried: !1,
              previousTriggersValues: s,
            });
        }
        listen(n, t, r, i, s) {
          return yu(t) ? this._fetchNamespace(n).listen(t, r, i, s) : () => {};
        }
        _buildInstruction(n, t, r, i, s) {
          return n.transition.build(
            this.driver,
            n.element,
            n.fromState.value,
            n.toState.value,
            r,
            i,
            n.fromState.options,
            n.toState.options,
            t,
            s
          );
        }
        destroyInnerAnimations(n) {
          let t = this.driver.query(n, lu, !0);
          t.forEach((r) => this.destroyActiveAnimationsForElement(r)),
            0 != this.playersByQueriedElement.size &&
              ((t = this.driver.query(n, Yh, !0)),
              t.forEach((r) => this.finishActiveQueriedAnimationOnElement(r)));
        }
        destroyActiveAnimationsForElement(n) {
          const t = this.playersByElement.get(n);
          t &&
            t.forEach((r) => {
              r.queued ? (r.markedForDestroy = !0) : r.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(n) {
          const t = this.playersByQueriedElement.get(n);
          t && t.forEach((r) => r.finish());
        }
        whenRenderingDone() {
          return new Promise((n) => {
            if (this.players.length) return pr(this.players).onDone(() => n());
            n();
          });
        }
        processLeaveNode(n) {
          const t = n[ln];
          if (t && t.setForRemoval) {
            if (((n[ln] = QE), t.namespaceId)) {
              this.destroyInnerAnimations(n);
              const r = this._fetchNamespace(t.namespaceId);
              r && r.clearElementCache(n);
            }
            this._onRemovalComplete(n, t.setForRemoval);
          }
          n.classList?.contains(lp) && this.markElementAsDisabled(n, !1),
            this.driver.query(n, ".ng-animate-disabled", !0).forEach((r) => {
              this.markElementAsDisabled(r, !1);
            });
        }
        flush(n = -1) {
          let t = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((r, i) =>
                this._balanceNamespaceList(r, i)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let r = 0; r < this.collectedEnterElements.length; r++)
              Qt(this.collectedEnterElements[r], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const r = [];
            try {
              t = this._flushAnimations(r, n);
            } finally {
              for (let i = 0; i < r.length; i++) r[i]();
            }
          } else
            for (let r = 0; r < this.collectedLeaveElements.length; r++)
              this.processLeaveNode(this.collectedLeaveElements[r]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((r) => r()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const r = this._whenQuietFns;
            (this._whenQuietFns = []),
              t.length
                ? pr(t).onDone(() => {
                    r.forEach((i) => i());
                  })
                : r.forEach((i) => i());
          }
        }
        reportError(n) {
          throw (function G2(e) {
            return new D(3402, !1);
          })();
        }
        _flushAnimations(n, t) {
          const r = new pu(),
            i = [],
            s = new Map(),
            o = [],
            a = new Map(),
            l = new Map(),
            u = new Map(),
            c = new Set();
          this.disabledNodes.forEach((P) => {
            c.add(P);
            const x = this.driver.query(P, ".ng-animate-queued", !0);
            for (let L = 0; L < x.length; L++) c.add(x[L]);
          });
          const d = this.bodyNode,
            f = Array.from(this.statesByElement.keys()),
            h = XE(f, this.collectedEnterElements),
            p = new Map();
          let g = 0;
          h.forEach((P, x) => {
            const L = Zh + g++;
            p.set(x, L), P.forEach((ne) => Qt(ne, L));
          });
          const v = [],
            C = new Set(),
            _ = new Set();
          for (let P = 0; P < this.collectedLeaveElements.length; P++) {
            const x = this.collectedLeaveElements[P],
              L = x[ln];
            L &&
              L.setForRemoval &&
              (v.push(x),
              C.add(x),
              L.hasAnimation
                ? this.driver
                    .query(x, ".ng-star-inserted", !0)
                    .forEach((ne) => C.add(ne))
                : _.add(x));
          }
          const S = new Map(),
            M = XE(f, Array.from(C));
          M.forEach((P, x) => {
            const L = ou + g++;
            S.set(x, L), P.forEach((ne) => Qt(ne, L));
          }),
            n.push(() => {
              h.forEach((P, x) => {
                const L = p.get(x);
                P.forEach((ne) => Xi(ne, L));
              }),
                M.forEach((P, x) => {
                  const L = S.get(x);
                  P.forEach((ne) => Xi(ne, L));
                }),
                v.forEach((P) => {
                  this.processLeaveNode(P);
                });
            });
          const H = [],
            fe = [];
          for (let P = this._namespaceList.length - 1; P >= 0; P--)
            this._namespaceList[P].drainQueuedTransitions(t).forEach((L) => {
              const ne = L.player,
                Be = L.element;
              if ((H.push(ne), this.collectedEnterElements.length)) {
                const st = Be[ln];
                if (st && st.setForMove) {
                  if (
                    st.previousTriggersValues &&
                    st.previousTriggersValues.has(L.triggerName)
                  ) {
                    const ei = st.previousTriggersValues.get(L.triggerName),
                      Zt = this.statesByElement.get(L.element);
                    if (Zt && Zt.has(L.triggerName)) {
                      const rc = Zt.get(L.triggerName);
                      (rc.value = ei), Zt.set(L.triggerName, rc);
                    }
                  }
                  return void ne.destroy();
                }
              }
              const An = !d || !this.driver.containsElement(d, Be),
                jt = S.get(Be),
                Er = p.get(Be),
                be = this._buildInstruction(L, r, Er, jt, An);
              if (be.errors && be.errors.length) return void fe.push(be);
              if (An)
                return (
                  ne.onStart(() => $r(Be, be.fromStyles)),
                  ne.onDestroy(() => bn(Be, be.toStyles)),
                  void i.push(ne)
                );
              if (L.isFallbackTransition)
                return (
                  ne.onStart(() => $r(Be, be.fromStyles)),
                  ne.onDestroy(() => bn(Be, be.toStyles)),
                  void i.push(ne)
                );
              const Y0 = [];
              be.timelines.forEach((st) => {
                (st.stretchStartingKeyframe = !0),
                  this.disabledNodes.has(st.element) || Y0.push(st);
              }),
                (be.timelines = Y0),
                r.append(Be, be.timelines),
                o.push({ instruction: be, player: ne, element: Be }),
                be.queriedElements.forEach((st) => Ft(a, st, []).push(ne)),
                be.preStyleProps.forEach((st, ei) => {
                  if (st.size) {
                    let Zt = l.get(ei);
                    Zt || l.set(ei, (Zt = new Set())),
                      st.forEach((rc, gg) => Zt.add(gg));
                  }
                }),
                be.postStyleProps.forEach((st, ei) => {
                  let Zt = u.get(ei);
                  Zt || u.set(ei, (Zt = new Set())),
                    st.forEach((rc, gg) => Zt.add(gg));
                });
            });
          if (fe.length) {
            const P = [];
            fe.forEach((x) => {
              P.push(
                (function W2(e, n) {
                  return new D(3505, !1);
                })()
              );
            }),
              H.forEach((x) => x.destroy()),
              this.reportError(P);
          }
          const _e = new Map(),
            Ye = new Map();
          o.forEach((P) => {
            const x = P.element;
            r.has(x) &&
              (Ye.set(x, x),
              this._beforeAnimationBuild(
                P.player.namespaceId,
                P.instruction,
                _e
              ));
          }),
            i.forEach((P) => {
              const x = P.element;
              this._getPreviousPlayers(
                x,
                !1,
                P.namespaceId,
                P.triggerName,
                null
              ).forEach((ne) => {
                Ft(_e, x, []).push(ne), ne.destroy();
              });
            });
          const Vt = v.filter((P) => eb(P, l, u)),
            cn = new Map();
          YE(cn, this.driver, _, u, zn).forEach((P) => {
            eb(P, l, u) && Vt.push(P);
          });
          const ua = new Map();
          h.forEach((P, x) => {
            YE(ua, this.driver, new Set(P), l, "!");
          }),
            Vt.forEach((P) => {
              const x = cn.get(P),
                L = ua.get(P);
              cn.set(
                P,
                new Map([...(x?.entries() ?? []), ...(L?.entries() ?? [])])
              );
            });
          const Jr = [],
            Q0 = [],
            Z0 = {};
          o.forEach((P) => {
            const { element: x, player: L, instruction: ne } = P;
            if (r.has(x)) {
              if (c.has(x))
                return (
                  L.onDestroy(() => bn(x, ne.toStyles)),
                  (L.disabled = !0),
                  L.overrideTotalTime(ne.totalTime),
                  void i.push(L)
                );
              let Be = Z0;
              if (Ye.size > 1) {
                let jt = x;
                const Er = [];
                for (; (jt = jt.parentNode); ) {
                  const be = Ye.get(jt);
                  if (be) {
                    Be = be;
                    break;
                  }
                  Er.push(jt);
                }
                Er.forEach((be) => Ye.set(be, Be));
              }
              const An = this._buildAnimation(L.namespaceId, ne, _e, s, ua, cn);
              if ((L.setRealPlayer(An), Be === Z0)) Jr.push(L);
              else {
                const jt = this.playersByElement.get(Be);
                jt && jt.length && (L.parentPlayer = pr(jt)), i.push(L);
              }
            } else
              $r(x, ne.fromStyles),
                L.onDestroy(() => bn(x, ne.toStyles)),
                Q0.push(L),
                c.has(x) && i.push(L);
          }),
            Q0.forEach((P) => {
              const x = s.get(P.element);
              if (x && x.length) {
                const L = pr(x);
                P.setRealPlayer(L);
              }
            }),
            i.forEach((P) => {
              P.parentPlayer ? P.syncPlayerEvents(P.parentPlayer) : P.destroy();
            });
          for (let P = 0; P < v.length; P++) {
            const x = v[P],
              L = x[ln];
            if ((Xi(x, ou), L && L.hasAnimation)) continue;
            let ne = [];
            if (a.size) {
              let An = a.get(x);
              An && An.length && ne.push(...An);
              let jt = this.driver.query(x, Yh, !0);
              for (let Er = 0; Er < jt.length; Er++) {
                let be = a.get(jt[Er]);
                be && be.length && ne.push(...be);
              }
            }
            const Be = ne.filter((An) => !An.destroyed);
            Be.length ? GV(this, x, Be) : this.processLeaveNode(x);
          }
          return (
            (v.length = 0),
            Jr.forEach((P) => {
              this.players.push(P),
                P.onDone(() => {
                  P.destroy();
                  const x = this.players.indexOf(P);
                  this.players.splice(x, 1);
                }),
                P.play();
            }),
            Jr
          );
        }
        afterFlush(n) {
          this._flushFns.push(n);
        }
        afterFlushAnimationsDone(n) {
          this._whenQuietFns.push(n);
        }
        _getPreviousPlayers(n, t, r, i, s) {
          let o = [];
          if (t) {
            const a = this.playersByQueriedElement.get(n);
            a && (o = a);
          } else {
            const a = this.playersByElement.get(n);
            if (a) {
              const l = !s || s == Po;
              a.forEach((u) => {
                u.queued || (!l && u.triggerName != i) || o.push(u);
              });
            }
          }
          return (
            (r || i) &&
              (o = o.filter(
                (a) => !((r && r != a.namespaceId) || (i && i != a.triggerName))
              )),
            o
          );
        }
        _beforeAnimationBuild(n, t, r) {
          const s = t.element,
            o = t.isRemovalTransition ? void 0 : n,
            a = t.isRemovalTransition ? void 0 : t.triggerName;
          for (const l of t.timelines) {
            const u = l.element,
              c = u !== s,
              d = Ft(r, u, []);
            this._getPreviousPlayers(u, c, o, a, t.toState).forEach((h) => {
              const p = h.getRealPlayer();
              p.beforeDestroy && p.beforeDestroy(), h.destroy(), d.push(h);
            });
          }
          $r(s, t.fromStyles);
        }
        _buildAnimation(n, t, r, i, s, o) {
          const a = t.triggerName,
            l = t.element,
            u = [],
            c = new Set(),
            d = new Set(),
            f = t.timelines.map((p) => {
              const g = p.element;
              c.add(g);
              const v = g[ln];
              if (v && v.removedBeforeQueried)
                return new Ao(p.duration, p.delay);
              const C = g !== l,
                _ = (function WV(e) {
                  const n = [];
                  return JE(e, n), n;
                })((r.get(g) || VV).map((_e) => _e.getRealPlayer())).filter(
                  (_e) => !!_e.element && _e.element === g
                ),
                S = s.get(g),
                M = o.get(g),
                H = AE(this._normalizer, p.keyframes, S, M),
                fe = this._buildPlayer(p, H, _);
              if ((p.subTimeline && i && d.add(g), C)) {
                const _e = new dp(n, a, g);
                _e.setRealPlayer(fe), u.push(_e);
              }
              return fe;
            });
          u.forEach((p) => {
            Ft(this.playersByQueriedElement, p.element, []).push(p),
              p.onDone(() =>
                (function UV(e, n, t) {
                  let r = e.get(n);
                  if (r) {
                    if (r.length) {
                      const i = r.indexOf(t);
                      r.splice(i, 1);
                    }
                    0 == r.length && e.delete(n);
                  }
                  return r;
                })(this.playersByQueriedElement, p.element, p)
              );
          }),
            c.forEach((p) => Qt(p, LE));
          const h = pr(f);
          return (
            h.onDestroy(() => {
              c.forEach((p) => Xi(p, LE)), bn(l, t.toStyles);
            }),
            d.forEach((p) => {
              Ft(i, p, []).push(h);
            }),
            h
          );
        }
        _buildPlayer(n, t, r) {
          return t.length > 0
            ? this.driver.animate(
                n.element,
                t,
                n.duration,
                n.delay,
                n.easing,
                r
              )
            : new Ao(n.duration, n.delay);
        }
      }
      class dp {
        constructor(n, t, r) {
          (this.namespaceId = n),
            (this.triggerName = t),
            (this.element = r),
            (this._player = new Ao()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = new Map()),
            (this.destroyed = !1),
            (this.parentPlayer = null),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(n) {
          this._containsRealPlayer ||
            ((this._player = n),
            this._queuedCallbacks.forEach((t, r) => {
              t.forEach((i) => Gh(n, r, void 0, i));
            }),
            this._queuedCallbacks.clear(),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(n.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(n) {
          this.totalTime = n;
        }
        syncPlayerEvents(n) {
          const t = this._player;
          t.triggerCallback && n.onStart(() => t.triggerCallback("start")),
            n.onDone(() => this.finish()),
            n.onDestroy(() => this.destroy());
        }
        _queueEvent(n, t) {
          Ft(this._queuedCallbacks, n, []).push(t);
        }
        onDone(n) {
          this.queued && this._queueEvent("done", n), this._player.onDone(n);
        }
        onStart(n) {
          this.queued && this._queueEvent("start", n), this._player.onStart(n);
        }
        onDestroy(n) {
          this.queued && this._queueEvent("destroy", n),
            this._player.onDestroy(n);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(n) {
          this.queued || this._player.setPosition(n);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(n) {
          const t = this._player;
          t.triggerCallback && t.triggerCallback(n);
        }
      }
      function yu(e) {
        return e && 1 === e.nodeType;
      }
      function ZE(e, n) {
        const t = e.style.display;
        return (e.style.display = n ?? "none"), t;
      }
      function YE(e, n, t, r, i) {
        const s = [];
        t.forEach((l) => s.push(ZE(l)));
        const o = [];
        r.forEach((l, u) => {
          const c = new Map();
          l.forEach((d) => {
            const f = n.computeStyle(u, d, i);
            c.set(d, f), (!f || 0 == f.length) && ((u[ln] = jV), o.push(u));
          }),
            e.set(u, c);
        });
        let a = 0;
        return t.forEach((l) => ZE(l, s[a++])), o;
      }
      function XE(e, n) {
        const t = new Map();
        if ((e.forEach((a) => t.set(a, [])), 0 == n.length)) return t;
        const i = new Set(n),
          s = new Map();
        function o(a) {
          if (!a) return 1;
          let l = s.get(a);
          if (l) return l;
          const u = a.parentNode;
          return (l = t.has(u) ? u : i.has(u) ? 1 : o(u)), s.set(a, l), l;
        }
        return (
          n.forEach((a) => {
            const l = o(a);
            1 !== l && t.get(l).push(a);
          }),
          t
        );
      }
      function Qt(e, n) {
        e.classList?.add(n);
      }
      function Xi(e, n) {
        e.classList?.remove(n);
      }
      function GV(e, n, t) {
        pr(t).onDone(() => e.processLeaveNode(n));
      }
      function JE(e, n) {
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          r instanceof TE ? JE(r.players, n) : n.push(r);
        }
      }
      function eb(e, n, t) {
        const r = t.get(e);
        if (!r) return !1;
        let i = n.get(e);
        return i ? r.forEach((s) => i.add(s)) : n.set(e, r), t.delete(e), !0;
      }
      class vu {
        constructor(n, t, r) {
          (this.bodyNode = n),
            (this._driver = t),
            (this._normalizer = r),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (i, s) => {}),
            (this._transitionEngine = new HV(n, t, r)),
            (this._timelineEngine = new PV(n, t, r)),
            (this._transitionEngine.onRemovalComplete = (i, s) =>
              this.onRemovalComplete(i, s));
        }
        registerTrigger(n, t, r, i, s) {
          const o = n + "-" + i;
          let a = this._triggerCache[o];
          if (!a) {
            const l = [],
              c = tp(this._driver, s, l, []);
            if (l.length)
              throw (function F2(e, n) {
                return new D(3404, !1);
              })();
            (a = (function AV(e, n, t) {
              return new NV(e, n, t);
            })(i, c, this._normalizer)),
              (this._triggerCache[o] = a);
          }
          this._transitionEngine.registerTrigger(t, i, a);
        }
        register(n, t) {
          this._transitionEngine.register(n, t);
        }
        destroy(n, t) {
          this._transitionEngine.destroy(n, t);
        }
        onInsert(n, t, r, i) {
          this._transitionEngine.insertNode(n, t, r, i);
        }
        onRemove(n, t, r) {
          this._transitionEngine.removeNode(n, t, r);
        }
        disableAnimations(n, t) {
          this._transitionEngine.markElementAsDisabled(n, t);
        }
        process(n, t, r, i) {
          if ("@" == r.charAt(0)) {
            const [s, o] = NE(r);
            this._timelineEngine.command(s, t, o, i);
          } else this._transitionEngine.trigger(n, t, r, i);
        }
        listen(n, t, r, i, s) {
          if ("@" == r.charAt(0)) {
            const [o, a] = NE(r);
            return this._timelineEngine.listen(o, t, a, s);
          }
          return this._transitionEngine.listen(n, t, r, i, s);
        }
        flush(n = -1) {
          this._transitionEngine.flush(n);
        }
        get players() {
          return [
            ...this._transitionEngine.players,
            ...this._timelineEngine.players,
          ];
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
        afterFlushAnimationsDone(n) {
          this._transitionEngine.afterFlushAnimationsDone(n);
        }
      }
      let QV = (() => {
        class e {
          static #e = (this.initialStylesByElement = new WeakMap());
          constructor(t, r, i) {
            (this._element = t),
              (this._startStyles = r),
              (this._endStyles = i),
              (this._state = 0);
            let s = e.initialStylesByElement.get(t);
            s || e.initialStylesByElement.set(t, (s = new Map())),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                bn(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (bn(this._element, this._initialStyles),
                this._endStyles &&
                  (bn(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (e.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  ($r(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  ($r(this._element, this._endStyles),
                  (this._endStyles = null)),
                bn(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return e;
      })();
      function fp(e) {
        let n = null;
        return (
          e.forEach((t, r) => {
            (function ZV(e) {
              return "display" === e || "position" === e;
            })(r) && ((n = n || new Map()), n.set(r, t));
          }),
          n
        );
      }
      class tb {
        constructor(n, t, r, i) {
          (this.element = n),
            (this.keyframes = t),
            (this.options = r),
            (this._specialStyles = i),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._originalOnDoneFns = []),
            (this._originalOnStartFns = []),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = new Map()),
            (this._duration = r.duration),
            (this._delay = r.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((n) => n()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const n = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            n,
            this.options
          )),
            (this._finalKeyframe = n.length ? n[n.length - 1] : new Map()),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _convertKeyframesToObject(n) {
          const t = [];
          return (
            n.forEach((r) => {
              t.push(Object.fromEntries(r));
            }),
            t
          );
        }
        _triggerWebAnimation(n, t, r) {
          return n.animate(this._convertKeyframesToObject(t), r);
        }
        onStart(n) {
          this._originalOnStartFns.push(n), this._onStartFns.push(n);
        }
        onDone(n) {
          this._originalOnDoneFns.push(n), this._onDoneFns.push(n);
        }
        onDestroy(n) {
          this._onDestroyFns.push(n);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((n) => n()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._onStartFns = this._originalOnStartFns),
            (this._onDoneFns = this._originalOnDoneFns);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((n) => n()),
            (this._onDestroyFns = []));
        }
        setPosition(n) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = n * this.time);
        }
        getPosition() {
          return +(this.domPlayer.currentTime ?? 0) / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const n = new Map();
          this.hasStarted() &&
            this._finalKeyframe.forEach((r, i) => {
              "offset" !== i &&
                n.set(i, this._finished ? r : BE(this.element, i));
            }),
            (this.currentSnapshot = n);
        }
        triggerCallback(n) {
          const t = "start" === n ? this._onStartFns : this._onDoneFns;
          t.forEach((r) => r()), (t.length = 0);
        }
      }
      class YV {
        validateStyleProperty(n) {
          return !0;
        }
        validateAnimatableStyleProperty(n) {
          return !0;
        }
        matchesElement(n, t) {
          return !1;
        }
        containsElement(n, t) {
          return OE(n, t);
        }
        getParentElement(n) {
          return Kh(n);
        }
        query(n, t, r) {
          return PE(n, t, r);
        }
        computeStyle(n, t, r) {
          return window.getComputedStyle(n)[t];
        }
        animate(n, t, r, i, s, o = []) {
          const l = {
            duration: r,
            delay: i,
            fill: 0 == i ? "both" : "forwards",
          };
          s && (l.easing = s);
          const u = new Map(),
            c = o.filter((h) => h instanceof tb);
          (function iV(e, n) {
            return 0 === e || 0 === n;
          })(r, i) &&
            c.forEach((h) => {
              h.currentSnapshot.forEach((p, g) => u.set(g, p));
            });
          let d = (function tV(e) {
            return e.length
              ? e[0] instanceof Map
                ? e
                : e.map((n) => kE(n))
              : [];
          })(t).map((h) => gr(h));
          d = (function sV(e, n, t) {
            if (t.size && n.length) {
              let r = n[0],
                i = [];
              if (
                (t.forEach((s, o) => {
                  r.has(o) || i.push(o), r.set(o, s);
                }),
                i.length)
              )
                for (let s = 1; s < n.length; s++) {
                  let o = n[s];
                  i.forEach((a) => o.set(a, BE(e, a)));
                }
            }
            return n;
          })(n, d, u);
          const f = (function KV(e, n) {
            let t = null,
              r = null;
            return (
              Array.isArray(n) && n.length
                ? ((t = fp(n[0])), n.length > 1 && (r = fp(n[n.length - 1])))
                : n instanceof Map && (t = fp(n)),
              t || r ? new QV(e, t, r) : null
            );
          })(n, d);
          return new tb(n, d, l, f);
        }
      }
      let XV = (() => {
        class e extends bE {
          constructor(t, r) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = t.createRenderer(r.body, {
                id: "0",
                encapsulation: Ut.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(t) {
            const r = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const i = Array.isArray(t) ? SE(t) : t;
            return (
              nb(this._renderer, null, r, "register", [i]),
              new JV(r, this._renderer)
            );
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ks), A(Ze));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class JV extends f2 {
        constructor(n, t) {
          super(), (this._id = n), (this._renderer = t);
        }
        create(n, t) {
          return new e3(this._id, n, t || {}, this._renderer);
        }
      }
      class e3 {
        constructor(n, t, r, i) {
          (this.id = n),
            (this.element = t),
            (this._renderer = i),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", r);
        }
        _listen(n, t) {
          return this._renderer.listen(this.element, `@@${this.id}:${n}`, t);
        }
        _command(n, ...t) {
          return nb(this._renderer, this.element, this.id, n, t);
        }
        onDone(n) {
          this._listen("done", n);
        }
        onStart(n) {
          this._listen("start", n);
        }
        onDestroy(n) {
          this._listen("destroy", n);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset"), (this._started = !1);
        }
        setPosition(n) {
          this._command("setPosition", n);
        }
        getPosition() {
          return this._renderer.engine.players[+this.id]?.getPosition() ?? 0;
        }
      }
      function nb(e, n, t, r, i) {
        return e.setProperty(n, `@@${t}:${r}`, i);
      }
      const rb = "@.disabled";
      let t3 = (() => {
        class e {
          constructor(t, r, i) {
            (this.delegate = t),
              (this.engine = r),
              (this._zone = i),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (r.onRemovalComplete = (s, o) => {
                const a = o?.parentNode(s);
                a && o.removeChild(a, s);
              });
          }
          createRenderer(t, r) {
            const s = this.delegate.createRenderer(t, r);
            if (!(t && r && r.data && r.data.animation)) {
              let c = this._rendererCache.get(s);
              return (
                c ||
                  ((c = new ib("", s, this.engine, () =>
                    this._rendererCache.delete(s)
                  )),
                  this._rendererCache.set(s, c)),
                c
              );
            }
            const o = r.id,
              a = r.id + "-" + this._currentId;
            this._currentId++, this.engine.register(a, t);
            const l = (c) => {
              Array.isArray(c)
                ? c.forEach(l)
                : this.engine.registerTrigger(o, a, t, c.name, c);
            };
            return r.data.animation.forEach(l), new n3(this, a, s, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            queueMicrotask(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(t, r, i) {
            t >= 0 && t < this._microtaskId
              ? this._zone.run(() => r(i))
              : (0 == this._animationCallbacksBuffer.length &&
                  queueMicrotask(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((s) => {
                        const [o, a] = s;
                        o(a);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([r, i]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ks), A(vu), A(le));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class ib {
        constructor(n, t, r, i) {
          (this.namespaceId = n),
            (this.delegate = t),
            (this.engine = r),
            (this._onDestroy = i);
        }
        get data() {
          return this.delegate.data;
        }
        destroyNode(n) {
          this.delegate.destroyNode?.(n);
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.engine.afterFlushAnimationsDone(() => {
              queueMicrotask(() => {
                this.delegate.destroy();
              });
            }),
            this._onDestroy?.();
        }
        createElement(n, t) {
          return this.delegate.createElement(n, t);
        }
        createComment(n) {
          return this.delegate.createComment(n);
        }
        createText(n) {
          return this.delegate.createText(n);
        }
        appendChild(n, t) {
          this.delegate.appendChild(n, t),
            this.engine.onInsert(this.namespaceId, t, n, !1);
        }
        insertBefore(n, t, r, i = !0) {
          this.delegate.insertBefore(n, t, r),
            this.engine.onInsert(this.namespaceId, t, n, i);
        }
        removeChild(n, t, r) {
          this.engine.onRemove(this.namespaceId, t, this.delegate);
        }
        selectRootElement(n, t) {
          return this.delegate.selectRootElement(n, t);
        }
        parentNode(n) {
          return this.delegate.parentNode(n);
        }
        nextSibling(n) {
          return this.delegate.nextSibling(n);
        }
        setAttribute(n, t, r, i) {
          this.delegate.setAttribute(n, t, r, i);
        }
        removeAttribute(n, t, r) {
          this.delegate.removeAttribute(n, t, r);
        }
        addClass(n, t) {
          this.delegate.addClass(n, t);
        }
        removeClass(n, t) {
          this.delegate.removeClass(n, t);
        }
        setStyle(n, t, r, i) {
          this.delegate.setStyle(n, t, r, i);
        }
        removeStyle(n, t, r) {
          this.delegate.removeStyle(n, t, r);
        }
        setProperty(n, t, r) {
          "@" == t.charAt(0) && t == rb
            ? this.disableAnimations(n, !!r)
            : this.delegate.setProperty(n, t, r);
        }
        setValue(n, t) {
          this.delegate.setValue(n, t);
        }
        listen(n, t, r) {
          return this.delegate.listen(n, t, r);
        }
        disableAnimations(n, t) {
          this.engine.disableAnimations(n, t);
        }
      }
      class n3 extends ib {
        constructor(n, t, r, i, s) {
          super(t, r, i, s), (this.factory = n), (this.namespaceId = t);
        }
        setProperty(n, t, r) {
          "@" == t.charAt(0)
            ? "." == t.charAt(1) && t == rb
              ? this.disableAnimations(n, (r = void 0 === r || !!r))
              : this.engine.process(this.namespaceId, n, t.slice(1), r)
            : this.delegate.setProperty(n, t, r);
        }
        listen(n, t, r) {
          if ("@" == t.charAt(0)) {
            const i = (function r3(e) {
              switch (e) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return e;
              }
            })(n);
            let s = t.slice(1),
              o = "";
            return (
              "@" != s.charAt(0) &&
                ([s, o] = (function i3(e) {
                  const n = e.indexOf(".");
                  return [e.substring(0, n), e.slice(n + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, i, s, o, (a) => {
                this.factory.scheduleListenerCallback(a._data || -1, r, a);
              })
            );
          }
          return this.delegate.listen(n, t, r);
        }
      }
      const sb = [
          { provide: bE, useClass: XV },
          {
            provide: op,
            useFactory: function o3() {
              return new SV();
            },
          },
          {
            provide: vu,
            useClass: (() => {
              class e extends vu {
                constructor(t, r, i, s) {
                  super(t.body, r, i);
                }
                ngOnDestroy() {
                  this.flush();
                }
                static #e = (this.ɵfac = function (r) {
                  return new (r || e)(A(Ze), A(Qh), A(op), A(Vr));
                });
                static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
              }
              return e;
            })(),
          },
          {
            provide: Ks,
            useFactory: function a3(e, n, t) {
              return new t3(e, n, t);
            },
            deps: [kh, vu, le],
          },
        ],
        hp = [
          { provide: Qh, useFactory: () => new YV() },
          { provide: gv, useValue: "BrowserAnimations" },
          ...sb,
        ],
        ob = [
          { provide: Qh, useClass: xE },
          { provide: gv, useValue: "NoopAnimations" },
          ...sb,
        ];
      let l3 = (() => {
        class e {
          static withConfig(t) {
            return { ngModule: e, providers: t.disableAnimations ? ob : hp };
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵmod = Xe({ type: e }));
          static #n = (this.ɵinj = He({ providers: hp, imports: [_E] }));
        }
        return e;
      })();
      const { isArray: u3 } = Array,
        { getPrototypeOf: c3, prototype: d3, keys: f3 } = Object;
      function ab(e) {
        if (1 === e.length) {
          const n = e[0];
          if (u3(n)) return { args: n, keys: null };
          if (
            (function h3(e) {
              return e && "object" == typeof e && c3(e) === d3;
            })(n)
          ) {
            const t = f3(n);
            return { args: t.map((r) => n[r]), keys: t };
          }
        }
        return { args: e, keys: null };
      }
      const { isArray: p3 } = Array;
      function pp(e) {
        return ie((n) =>
          (function g3(e, n) {
            return p3(n) ? e(...n) : e(n);
          })(e, n)
        );
      }
      function lb(e, n) {
        return e.reduce((t, r, i) => ((t[r] = n[i]), t), {});
      }
      let ub = (() => {
          class e {
            constructor(t, r) {
              (this._renderer = t),
                (this._elementRef = r),
                (this.onChange = (i) => {}),
                (this.onTouched = () => {});
            }
            setProperty(t, r) {
              this._renderer.setProperty(this._elementRef.nativeElement, t, r);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            setDisabledState(t) {
              this.setProperty("disabled", t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(tn), w(wt));
            });
            static #t = (this.ɵdir = F({ type: e }));
          }
          return e;
        })(),
        Gr = (() => {
          class e extends ub {
            static #e = (this.ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = Te(e)))(i || e);
              };
            })());
            static #t = (this.ɵdir = F({ type: e, features: [te] }));
          }
          return e;
        })();
      const Sn = new N("NgValueAccessor"),
        v3 = { provide: Sn, useExisting: pe(() => xo), multi: !0 },
        D3 = new N("CompositionEventMode");
      let xo = (() => {
        class e extends ub {
          constructor(t, r, i) {
            super(t, r),
              (this._compositionMode = i),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function _3() {
                  const e = fr() ? fr().getUserAgent() : "";
                  return /android (\d+)/.test(e.toLowerCase());
                })());
          }
          writeValue(t) {
            this.setProperty("value", t ?? "");
          }
          _handleInput(t) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(tn), w(wt), w(D3, 8));
          });
          static #t = (this.ɵdir = F({
            type: e,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (r, i) {
              1 & r &&
                Ke("input", function (o) {
                  return i._handleInput(o.target.value);
                })("blur", function () {
                  return i.onTouched();
                })("compositionstart", function () {
                  return i._compositionStart();
                })("compositionend", function (o) {
                  return i._compositionEnd(o.target.value);
                });
            },
            features: [De([v3]), te],
          }));
        }
        return e;
      })();
      function mr(e) {
        return (
          null == e ||
          (("string" == typeof e || Array.isArray(e)) && 0 === e.length)
        );
      }
      function db(e) {
        return null != e && "number" == typeof e.length;
      }
      const nt = new N("NgValidators"),
        yr = new N("NgAsyncValidators"),
        C3 =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Du {
        static min(n) {
          return (function fb(e) {
            return (n) => {
              if (mr(n.value) || mr(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t < e
                ? { min: { min: e, actual: n.value } }
                : null;
            };
          })(n);
        }
        static max(n) {
          return (function hb(e) {
            return (n) => {
              if (mr(n.value) || mr(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t > e
                ? { max: { max: e, actual: n.value } }
                : null;
            };
          })(n);
        }
        static required(n) {
          return (function pb(e) {
            return mr(e.value) ? { required: !0 } : null;
          })(n);
        }
        static requiredTrue(n) {
          return (function gb(e) {
            return !0 === e.value ? null : { required: !0 };
          })(n);
        }
        static email(n) {
          return (function mb(e) {
            return mr(e.value) || C3.test(e.value) ? null : { email: !0 };
          })(n);
        }
        static minLength(n) {
          return (function yb(e) {
            return (n) =>
              mr(n.value) || !db(n.value)
                ? null
                : n.value.length < e
                ? {
                    minlength: {
                      requiredLength: e,
                      actualLength: n.value.length,
                    },
                  }
                : null;
          })(n);
        }
        static maxLength(n) {
          return (function vb(e) {
            return (n) =>
              db(n.value) && n.value.length > e
                ? {
                    maxlength: {
                      requiredLength: e,
                      actualLength: n.value.length,
                    },
                  }
                : null;
          })(n);
        }
        static pattern(n) {
          return (function _b(e) {
            if (!e) return Cu;
            let n, t;
            return (
              "string" == typeof e
                ? ((t = ""),
                  "^" !== e.charAt(0) && (t += "^"),
                  (t += e),
                  "$" !== e.charAt(e.length - 1) && (t += "$"),
                  (n = new RegExp(t)))
                : ((t = e.toString()), (n = e)),
              (r) => {
                if (mr(r.value)) return null;
                const i = r.value;
                return n.test(i)
                  ? null
                  : { pattern: { requiredPattern: t, actualValue: i } };
              }
            );
          })(n);
        }
        static nullValidator(n) {
          return null;
        }
        static compose(n) {
          return Sb(n);
        }
        static composeAsync(n) {
          return Ib(n);
        }
      }
      function Cu(e) {
        return null;
      }
      function Db(e) {
        return null != e;
      }
      function Cb(e) {
        return ao(e) ? Fe(e) : e;
      }
      function wb(e) {
        let n = {};
        return (
          e.forEach((t) => {
            n = null != t ? { ...n, ...t } : n;
          }),
          0 === Object.keys(n).length ? null : n
        );
      }
      function Eb(e, n) {
        return n.map((t) => t(e));
      }
      function bb(e) {
        return e.map((n) =>
          (function w3(e) {
            return !e.validate;
          })(n)
            ? n
            : (t) => n.validate(t)
        );
      }
      function Sb(e) {
        if (!e) return null;
        const n = e.filter(Db);
        return 0 == n.length
          ? null
          : function (t) {
              return wb(Eb(t, n));
            };
      }
      function gp(e) {
        return null != e ? Sb(bb(e)) : null;
      }
      function Ib(e) {
        if (!e) return null;
        const n = e.filter(Db);
        return 0 == n.length
          ? null
          : function (t) {
              return (function m3(...e) {
                const n = kg(e),
                  { args: t, keys: r } = ab(e),
                  i = new Se((s) => {
                    const { length: o } = t;
                    if (!o) return void s.complete();
                    const a = new Array(o);
                    let l = o,
                      u = o;
                    for (let c = 0; c < o; c++) {
                      let d = !1;
                      mt(t[c]).subscribe(
                        Oe(
                          s,
                          (f) => {
                            d || ((d = !0), u--), (a[c] = f);
                          },
                          () => l--,
                          void 0,
                          () => {
                            (!l || !d) &&
                              (u || s.next(r ? lb(r, a) : a), s.complete());
                          }
                        )
                      );
                    }
                  });
                return n ? i.pipe(pp(n)) : i;
              })(Eb(t, n).map(Cb)).pipe(ie(wb));
            };
      }
      function mp(e) {
        return null != e ? Ib(bb(e)) : null;
      }
      function Tb(e, n) {
        return null === e ? [n] : Array.isArray(e) ? [...e, n] : [e, n];
      }
      function Mb(e) {
        return e._rawValidators;
      }
      function Ab(e) {
        return e._rawAsyncValidators;
      }
      function yp(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function wu(e, n) {
        return Array.isArray(e) ? e.includes(n) : e === n;
      }
      function Nb(e, n) {
        const t = yp(n);
        return (
          yp(e).forEach((i) => {
            wu(t, i) || t.push(i);
          }),
          t
        );
      }
      function Rb(e, n) {
        return yp(n).filter((t) => !wu(e, t));
      }
      class Ob {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(n) {
          (this._rawValidators = n || []),
            (this._composedValidatorFn = gp(this._rawValidators));
        }
        _setAsyncValidators(n) {
          (this._rawAsyncValidators = n || []),
            (this._composedAsyncValidatorFn = mp(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(n) {
          this._onDestroyCallbacks.push(n);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((n) => n()),
            (this._onDestroyCallbacks = []);
        }
        reset(n = void 0) {
          this.control && this.control.reset(n);
        }
        hasError(n, t) {
          return !!this.control && this.control.hasError(n, t);
        }
        getError(n, t) {
          return this.control ? this.control.getError(n, t) : null;
        }
      }
      class pt extends Ob {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class vr extends Ob {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Pb {
        constructor(n) {
          this._cd = n;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let vp = (() => {
          class e extends Pb {
            constructor(t) {
              super(t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(vr, 2));
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (r, i) {
                2 & r &&
                  Ml("ng-untouched", i.isUntouched)("ng-touched", i.isTouched)(
                    "ng-pristine",
                    i.isPristine
                  )("ng-dirty", i.isDirty)("ng-valid", i.isValid)(
                    "ng-invalid",
                    i.isInvalid
                  )("ng-pending", i.isPending);
              },
              features: [te],
            }));
          }
          return e;
        })(),
        xb = (() => {
          class e extends Pb {
            constructor(t) {
              super(t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(pt, 10));
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 16,
              hostBindings: function (r, i) {
                2 & r &&
                  Ml("ng-untouched", i.isUntouched)("ng-touched", i.isTouched)(
                    "ng-pristine",
                    i.isPristine
                  )("ng-dirty", i.isDirty)("ng-valid", i.isValid)(
                    "ng-invalid",
                    i.isInvalid
                  )("ng-pending", i.isPending)("ng-submitted", i.isSubmitted);
              },
              features: [te],
            }));
          }
          return e;
        })();
      const Fo = "VALID",
        bu = "INVALID",
        Ji = "PENDING",
        Lo = "DISABLED";
      function Cp(e) {
        return (Su(e) ? e.validators : e) || null;
      }
      function wp(e, n) {
        return (Su(n) ? n.asyncValidators : e) || null;
      }
      function Su(e) {
        return null != e && !Array.isArray(e) && "object" == typeof e;
      }
      function Lb(e, n, t) {
        const r = e.controls;
        if (!(n ? Object.keys(r) : r).length) throw new D(1e3, "");
        if (!r[t]) throw new D(1001, "");
      }
      function kb(e, n, t) {
        e._forEachChild((r, i) => {
          if (void 0 === t[i]) throw new D(1002, "");
        });
      }
      class Iu {
        constructor(n, t) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(n),
            this._assignAsyncValidators(t);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(n) {
          this._rawValidators = this._composedValidatorFn = n;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(n) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = n;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === Fo;
        }
        get invalid() {
          return this.status === bu;
        }
        get pending() {
          return this.status == Ji;
        }
        get disabled() {
          return this.status === Lo;
        }
        get enabled() {
          return this.status !== Lo;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(n) {
          this._assignValidators(n);
        }
        setAsyncValidators(n) {
          this._assignAsyncValidators(n);
        }
        addValidators(n) {
          this.setValidators(Nb(n, this._rawValidators));
        }
        addAsyncValidators(n) {
          this.setAsyncValidators(Nb(n, this._rawAsyncValidators));
        }
        removeValidators(n) {
          this.setValidators(Rb(n, this._rawValidators));
        }
        removeAsyncValidators(n) {
          this.setAsyncValidators(Rb(n, this._rawAsyncValidators));
        }
        hasValidator(n) {
          return wu(this._rawValidators, n);
        }
        hasAsyncValidator(n) {
          return wu(this._rawAsyncValidators, n);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(n = {}) {
          (this.touched = !0),
            this._parent && !n.onlySelf && this._parent.markAsTouched(n);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((n) => n.markAllAsTouched());
        }
        markAsUntouched(n = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        markAsDirty(n = {}) {
          (this.pristine = !1),
            this._parent && !n.onlySelf && this._parent.markAsDirty(n);
        }
        markAsPristine(n = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        markAsPending(n = {}) {
          (this.status = Ji),
            !1 !== n.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !n.onlySelf && this._parent.markAsPending(n);
        }
        disable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = Lo),
            (this.errors = null),
            this._forEachChild((r) => {
              r.disable({ ...n, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...n, skipPristineCheck: t }),
            this._onDisabledChange.forEach((r) => r(!0));
        }
        enable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = Fo),
            this._forEachChild((r) => {
              r.enable({ ...n, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: n.emitEvent,
            }),
            this._updateAncestors({ ...n, skipPristineCheck: t }),
            this._onDisabledChange.forEach((r) => r(!1));
        }
        _updateAncestors(n) {
          this._parent &&
            !n.onlySelf &&
            (this._parent.updateValueAndValidity(n),
            n.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(n) {
          this._parent = n;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(n = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Fo || this.status === Ji) &&
                this._runAsyncValidator(n.emitEvent)),
            !1 !== n.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !n.onlySelf &&
              this._parent.updateValueAndValidity(n);
        }
        _updateTreeValidity(n = { emitEvent: !0 }) {
          this._forEachChild((t) => t._updateTreeValidity(n)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: n.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Lo : Fo;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n) {
          if (this.asyncValidator) {
            (this.status = Ji), (this._hasOwnPendingAsyncValidator = !0);
            const t = Cb(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe((r) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(r, { emitEvent: n });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(n, t = {}) {
          (this.errors = n), this._updateControlsErrors(!1 !== t.emitEvent);
        }
        get(n) {
          let t = n;
          return null == t ||
            (Array.isArray(t) || (t = t.split(".")), 0 === t.length)
            ? null
            : t.reduce((r, i) => r && r._find(i), this);
        }
        getError(n, t) {
          const r = t ? this.get(t) : this;
          return r && r.errors ? r.errors[n] : null;
        }
        hasError(n, t) {
          return !!this.getError(n, t);
        }
        get root() {
          let n = this;
          for (; n._parent; ) n = n._parent;
          return n;
        }
        _updateControlsErrors(n) {
          (this.status = this._calculateStatus()),
            n && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(n);
        }
        _initObservables() {
          (this.valueChanges = new we()), (this.statusChanges = new we());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Lo
            : this.errors
            ? bu
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(Ji)
            ? Ji
            : this._anyControlsHaveStatus(bu)
            ? bu
            : Fo;
        }
        _anyControlsHaveStatus(n) {
          return this._anyControls((t) => t.status === n);
        }
        _anyControlsDirty() {
          return this._anyControls((n) => n.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((n) => n.touched);
        }
        _updatePristine(n = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        _updateTouched(n = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          Su(n) && null != n.updateOn && (this._updateOn = n.updateOn);
        }
        _parentMarkedDirty(n) {
          return (
            !n &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(n) {
          return null;
        }
        _assignValidators(n) {
          (this._rawValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedValidatorFn = (function I3(e) {
              return Array.isArray(e) ? gp(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(n) {
          (this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedAsyncValidatorFn = (function T3(e) {
              return Array.isArray(e) ? mp(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class ko extends Iu {
        constructor(n, t, r) {
          super(Cp(t), wp(r, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(n, t) {
          return this.controls[n]
            ? this.controls[n]
            : ((this.controls[n] = t),
              t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange),
              t);
        }
        addControl(n, t, r = {}) {
          this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(n, t = {}) {
          this.controls[n] &&
            this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        setControl(n, t, r = {}) {
          this.controls[n] &&
            this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            t && this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        contains(n) {
          return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
        }
        setValue(n, t = {}) {
          kb(this, 0, n),
            Object.keys(n).forEach((r) => {
              Lb(this, !0, r),
                this.controls[r].setValue(n[r], {
                  onlySelf: !0,
                  emitEvent: t.emitEvent,
                });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (Object.keys(n).forEach((r) => {
              const i = this.controls[r];
              i && i.patchValue(n[r], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = {}, t = {}) {
          this._forEachChild((r, i) => {
            r.reset(n ? n[i] : null, { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (n, t, r) => ((n[r] = t.getRawValue()), n)
          );
        }
        _syncPendingControls() {
          let n = this._reduceChildren(
            !1,
            (t, r) => !!r._syncPendingControls() || t
          );
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          Object.keys(this.controls).forEach((t) => {
            const r = this.controls[t];
            r && n(r, t);
          });
        }
        _setUpControls() {
          this._forEachChild((n) => {
            n.setParent(this),
              n._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(n) {
          for (const [t, r] of Object.entries(this.controls))
            if (this.contains(t) && n(r)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, r, i) => ((r.enabled || this.disabled) && (t[i] = r.value), t)
          );
        }
        _reduceChildren(n, t) {
          let r = n;
          return (
            this._forEachChild((i, s) => {
              r = t(r, i, s);
            }),
            r
          );
        }
        _allControlsDisabled() {
          for (const n of Object.keys(this.controls))
            if (this.controls[n].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(n) {
          return this.controls.hasOwnProperty(n) ? this.controls[n] : null;
        }
      }
      class Vb extends ko {}
      const Wr = new N("CallSetDisabledState", {
          providedIn: "root",
          factory: () => Vo,
        }),
        Vo = "always";
      function Tu(e, n) {
        return [...n.path, e];
      }
      function jo(e, n, t = Vo) {
        Ep(e, n),
          n.valueAccessor.writeValue(e.value),
          (e.disabled || "always" === t) &&
            n.valueAccessor.setDisabledState?.(e.disabled),
          (function A3(e, n) {
            n.valueAccessor.registerOnChange((t) => {
              (e._pendingValue = t),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                "change" === e.updateOn && jb(e, n);
            });
          })(e, n),
          (function R3(e, n) {
            const t = (r, i) => {
              n.valueAccessor.writeValue(r), i && n.viewToModelUpdate(r);
            };
            e.registerOnChange(t),
              n._registerOnDestroy(() => {
                e._unregisterOnChange(t);
              });
          })(e, n),
          (function N3(e, n) {
            n.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                "blur" === e.updateOn && e._pendingChange && jb(e, n),
                "submit" !== e.updateOn && e.markAsTouched();
            });
          })(e, n),
          (function M3(e, n) {
            if (n.valueAccessor.setDisabledState) {
              const t = (r) => {
                n.valueAccessor.setDisabledState(r);
              };
              e.registerOnDisabledChange(t),
                n._registerOnDestroy(() => {
                  e._unregisterOnDisabledChange(t);
                });
            }
          })(e, n);
      }
      function Mu(e, n, t = !0) {
        const r = () => {};
        n.valueAccessor &&
          (n.valueAccessor.registerOnChange(r),
          n.valueAccessor.registerOnTouched(r)),
          Nu(e, n),
          e &&
            (n._invokeOnDestroyCallbacks(),
            e._registerOnCollectionChange(() => {}));
      }
      function Au(e, n) {
        e.forEach((t) => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(n);
        });
      }
      function Ep(e, n) {
        const t = Mb(e);
        null !== n.validator
          ? e.setValidators(Tb(t, n.validator))
          : "function" == typeof t && e.setValidators([t]);
        const r = Ab(e);
        null !== n.asyncValidator
          ? e.setAsyncValidators(Tb(r, n.asyncValidator))
          : "function" == typeof r && e.setAsyncValidators([r]);
        const i = () => e.updateValueAndValidity();
        Au(n._rawValidators, i), Au(n._rawAsyncValidators, i);
      }
      function Nu(e, n) {
        let t = !1;
        if (null !== e) {
          if (null !== n.validator) {
            const i = Mb(e);
            if (Array.isArray(i) && i.length > 0) {
              const s = i.filter((o) => o !== n.validator);
              s.length !== i.length && ((t = !0), e.setValidators(s));
            }
          }
          if (null !== n.asyncValidator) {
            const i = Ab(e);
            if (Array.isArray(i) && i.length > 0) {
              const s = i.filter((o) => o !== n.asyncValidator);
              s.length !== i.length && ((t = !0), e.setAsyncValidators(s));
            }
          }
        }
        const r = () => {};
        return Au(n._rawValidators, r), Au(n._rawAsyncValidators, r), t;
      }
      function jb(e, n) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          n.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function Sp(e, n) {
        if (!e.hasOwnProperty("model")) return !1;
        const t = e.model;
        return !!t.isFirstChange() || !Object.is(n, t.currentValue);
      }
      function Ip(e, n) {
        if (!n) return null;
        let t, r, i;
        return (
          Array.isArray(n),
          n.forEach((s) => {
            s.constructor === xo
              ? (t = s)
              : (function x3(e) {
                  return Object.getPrototypeOf(e.constructor) === Gr;
                })(s)
              ? (r = s)
              : (i = s);
          }),
          i || r || t || null
        );
      }
      function Ub(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      function $b(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          "value" in e &&
          "disabled" in e
        );
      }
      const Ho = class extends Iu {
          constructor(n = null, t, r) {
            super(Cp(t), wp(r, t)),
              (this.defaultValue = null),
              (this._onChange = []),
              (this._pendingChange = !1),
              this._applyFormState(n),
              this._setUpdateStrategy(t),
              this._initObservables(),
              this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator,
              }),
              Su(t) &&
                (t.nonNullable || t.initialValueIsDefault) &&
                (this.defaultValue = $b(n) ? n.value : n);
          }
          setValue(n, t = {}) {
            (this.value = this._pendingValue = n),
              this._onChange.length &&
                !1 !== t.emitModelToViewChange &&
                this._onChange.forEach((r) =>
                  r(this.value, !1 !== t.emitViewToModelChange)
                ),
              this.updateValueAndValidity(t);
          }
          patchValue(n, t = {}) {
            this.setValue(n, t);
          }
          reset(n = this.defaultValue, t = {}) {
            this._applyFormState(n),
              this.markAsPristine(t),
              this.markAsUntouched(t),
              this.setValue(this.value, t),
              (this._pendingChange = !1);
          }
          _updateValue() {}
          _anyControls(n) {
            return !1;
          }
          _allControlsDisabled() {
            return this.disabled;
          }
          registerOnChange(n) {
            this._onChange.push(n);
          }
          _unregisterOnChange(n) {
            Ub(this._onChange, n);
          }
          registerOnDisabledChange(n) {
            this._onDisabledChange.push(n);
          }
          _unregisterOnDisabledChange(n) {
            Ub(this._onDisabledChange, n);
          }
          _forEachChild(n) {}
          _syncPendingControls() {
            return !(
              "submit" !== this.updateOn ||
              (this._pendingDirty && this.markAsDirty(),
              this._pendingTouched && this.markAsTouched(),
              !this._pendingChange) ||
              (this.setValue(this._pendingValue, {
                onlySelf: !0,
                emitModelToViewChange: !1,
              }),
              0)
            );
          }
          _applyFormState(n) {
            $b(n)
              ? ((this.value = this._pendingValue = n.value),
                n.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
              : (this.value = this._pendingValue = n);
          }
        },
        j3 = { provide: vr, useExisting: pe(() => Mp) },
        Wb = (() => Promise.resolve())();
      let Mp = (() => {
          class e extends vr {
            constructor(t, r, i, s, o, a) {
              super(),
                (this._changeDetectorRef = o),
                (this.callSetDisabledState = a),
                (this.control = new Ho()),
                (this._registered = !1),
                (this.name = ""),
                (this.update = new we()),
                (this._parent = t),
                this._setValidators(r),
                this._setAsyncValidators(i),
                (this.valueAccessor = Ip(0, s));
            }
            ngOnChanges(t) {
              if ((this._checkForErrors(), !this._registered || "name" in t)) {
                if (
                  this._registered &&
                  (this._checkName(), this.formDirective)
                ) {
                  const r = t.name.previousValue;
                  this.formDirective.removeControl({
                    name: r,
                    path: this._getPath(r),
                  });
                }
                this._setUpControl();
              }
              "isDisabled" in t && this._updateDisabled(t),
                Sp(t, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(t) {
              (this.viewModel = t), this.update.emit(t);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              jo(this.control, this, this.callSetDisabledState),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(t) {
              Wb.then(() => {
                this.control.setValue(t, { emitViewToModelChange: !1 }),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _updateDisabled(t) {
              const r = t.isDisabled.currentValue,
                i = 0 !== r && Zi(r);
              Wb.then(() => {
                i && !this.control.disabled
                  ? this.control.disable()
                  : !i && this.control.disabled && this.control.enable(),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _getPath(t) {
              return this._parent ? Tu(t, this._parent) : [t];
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(
                w(pt, 9),
                w(nt, 10),
                w(yr, 10),
                w(Sn, 10),
                w(wo, 8),
                w(Wr, 8)
              );
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [
                [
                  "",
                  "ngModel",
                  "",
                  3,
                  "formControlName",
                  "",
                  3,
                  "formControl",
                  "",
                ],
              ],
              inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngModel"],
              features: [De([j3]), te, zt],
            }));
          }
          return e;
        })(),
        qb = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            }));
          }
          return e;
        })();
      const H3 = { provide: Sn, useExisting: pe(() => Ap), multi: !0 };
      let Qb = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Xe({ type: e }));
            static #n = (this.ɵinj = He({}));
          }
          return e;
        })(),
        U3 = (() => {
          class e {
            constructor() {
              this._accessors = [];
            }
            add(t, r) {
              this._accessors.push([t, r]);
            }
            remove(t) {
              for (let r = this._accessors.length - 1; r >= 0; --r)
                if (this._accessors[r][1] === t)
                  return void this._accessors.splice(r, 1);
            }
            select(t) {
              this._accessors.forEach((r) => {
                this._isSameGroup(r, t) &&
                  r[1] !== t &&
                  r[1].fireUncheck(t.value);
              });
            }
            _isSameGroup(t, r) {
              return (
                !!t[0].control &&
                t[0]._parent === r._control._parent &&
                t[1].name === r.name
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: Qb,
            }));
          }
          return e;
        })(),
        Ap = (() => {
          class e extends Gr {
            constructor(t, r, i, s) {
              super(t, r),
                (this._registry = i),
                (this._injector = s),
                (this.setDisabledStateFired = !1),
                (this.onChange = () => {}),
                (this.callSetDisabledState = T(Wr, { optional: !0 }) ?? Vo);
            }
            ngOnInit() {
              (this._control = this._injector.get(vr)),
                this._checkName(),
                this._registry.add(this._control, this);
            }
            ngOnDestroy() {
              this._registry.remove(this);
            }
            writeValue(t) {
              (this._state = t === this.value),
                this.setProperty("checked", this._state);
            }
            registerOnChange(t) {
              (this._fn = t),
                (this.onChange = () => {
                  t(this.value), this._registry.select(this);
                });
            }
            setDisabledState(t) {
              (this.setDisabledStateFired ||
                t ||
                "whenDisabledForLegacyCode" === this.callSetDisabledState) &&
                this.setProperty("disabled", t),
                (this.setDisabledStateFired = !0);
            }
            fireUncheck(t) {
              this.writeValue(t);
            }
            _checkName() {
              !this.name &&
                this.formControlName &&
                (this.name = this.formControlName);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(tn), w(wt), w(U3), w(Ot));
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [
                ["input", "type", "radio", "formControlName", ""],
                ["input", "type", "radio", "formControl", ""],
                ["input", "type", "radio", "ngModel", ""],
              ],
              hostBindings: function (r, i) {
                1 & r &&
                  Ke("change", function () {
                    return i.onChange();
                  })("blur", function () {
                    return i.onTouched();
                  });
              },
              inputs: {
                name: "name",
                formControlName: "formControlName",
                value: "value",
              },
              features: [De([H3]), te],
            }));
          }
          return e;
        })();
      const Np = new N("NgModelWithFormControlWarning"),
        G3 = { provide: pt, useExisting: pe(() => Ru) };
      let Ru = (() => {
        class e extends pt {
          constructor(t, r, i) {
            super(),
              (this.callSetDisabledState = i),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new we()),
              this._setValidators(t),
              this._setAsyncValidators(r);
          }
          ngOnChanges(t) {
            this._checkFormPresent(),
              t.hasOwnProperty("form") &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (Nu(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(t) {
            const r = this.form.get(t.path);
            return (
              jo(r, t, this.callSetDisabledState),
              r.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(t),
              r
            );
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            Mu(t.control || null, t, !1),
              (function F3(e, n) {
                const t = e.indexOf(n);
                t > -1 && e.splice(t, 1);
              })(this.directives, t);
          }
          addFormGroup(t) {
            this._setUpFormContainer(t);
          }
          removeFormGroup(t) {
            this._cleanUpFormContainer(t);
          }
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          addFormArray(t) {
            this._setUpFormContainer(t);
          }
          removeFormArray(t) {
            this._cleanUpFormContainer(t);
          }
          getFormArray(t) {
            return this.form.get(t.path);
          }
          updateModel(t, r) {
            this.form.get(t.path).setValue(r);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              (function Hb(e, n) {
                e._syncPendingControls(),
                  n.forEach((t) => {
                    const r = t.control;
                    "submit" === r.updateOn &&
                      r._pendingChange &&
                      (t.viewToModelUpdate(r._pendingValue),
                      (r._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(t),
              "dialog" === t?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t = void 0) {
            this.form.reset(t), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((t) => {
              const r = t.control,
                i = this.form.get(t.path);
              r !== i &&
                (Mu(r || null, t),
                ((e) => e instanceof Ho)(i) &&
                  (jo(i, t, this.callSetDisabledState), (t.control = i)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(t) {
            const r = this.form.get(t.path);
            (function Bb(e, n) {
              Ep(e, n);
            })(r, t),
              r.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(t) {
            if (this.form) {
              const r = this.form.get(t.path);
              r &&
                (function O3(e, n) {
                  return Nu(e, n);
                })(r, t) &&
                r.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            Ep(this.form, this), this._oldForm && Nu(this._oldForm, this);
          }
          _checkFormPresent() {}
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(nt, 10), w(yr, 10), w(Wr, 8));
          });
          static #t = (this.ɵdir = F({
            type: e,
            selectors: [["", "formGroup", ""]],
            hostBindings: function (r, i) {
              1 & r &&
                Ke("submit", function (o) {
                  return i.onSubmit(o);
                })("reset", function () {
                  return i.onReset();
                });
            },
            inputs: { form: ["formGroup", "form"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [De([G3]), te, zt],
          }));
        }
        return e;
      })();
      const K3 = { provide: vr, useExisting: pe(() => Pp) };
      let Pp = (() => {
          class e extends vr {
            set isDisabled(t) {}
            static #e = (this._ngModelWarningSentOnce = !1);
            constructor(t, r, i, s, o) {
              super(),
                (this._ngModelWarningConfig = o),
                (this._added = !1),
                (this.name = null),
                (this.update = new we()),
                (this._ngModelWarningSent = !1),
                (this._parent = t),
                this._setValidators(r),
                this._setAsyncValidators(i),
                (this.valueAccessor = Ip(0, s));
            }
            ngOnChanges(t) {
              this._added || this._setUpControl(),
                Sp(t, this.viewModel) &&
                  ((this.viewModel = this.model),
                  this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(t) {
              (this.viewModel = t), this.update.emit(t);
            }
            get path() {
              return Tu(
                null == this.name ? this.name : this.name.toString(),
                this._parent
              );
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
            _setUpControl() {
              this._checkParentType(),
                (this.control = this.formDirective.addControl(this)),
                (this._added = !0);
            }
            static #t = (this.ɵfac = function (r) {
              return new (r || e)(
                w(pt, 13),
                w(nt, 10),
                w(yr, 10),
                w(Sn, 10),
                w(Np, 8)
              );
            });
            static #n = (this.ɵdir = F({
              type: e,
              selectors: [["", "formControlName", ""]],
              inputs: {
                name: ["formControlName", "name"],
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
              },
              outputs: { update: "ngModelChange" },
              features: [De([K3]), te, zt],
            }));
          }
          return e;
        })(),
        cS = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Xe({ type: e }));
            static #n = (this.ɵinj = He({ imports: [Qb] }));
          }
          return e;
        })();
      class dS extends Iu {
        constructor(n, t, r) {
          super(Cp(t), wp(r, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(n) {
          return this.controls[this._adjustIndex(n)];
        }
        push(n, t = {}) {
          this.controls.push(n),
            this._registerControl(n),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        insert(n, t, r = {}) {
          this.controls.splice(n, 0, t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: r.emitEvent });
        }
        removeAt(n, t = {}) {
          let r = this._adjustIndex(n);
          r < 0 && (r = 0),
            this.controls[r] &&
              this.controls[r]._registerOnCollectionChange(() => {}),
            this.controls.splice(r, 1),
            this.updateValueAndValidity({ emitEvent: t.emitEvent });
        }
        setControl(n, t, r = {}) {
          let i = this._adjustIndex(n);
          i < 0 && (i = 0),
            this.controls[i] &&
              this.controls[i]._registerOnCollectionChange(() => {}),
            this.controls.splice(i, 1),
            t && (this.controls.splice(i, 0, t), this._registerControl(t)),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(n, t = {}) {
          kb(this, 0, n),
            n.forEach((r, i) => {
              Lb(this, !1, i),
                this.at(i).setValue(r, {
                  onlySelf: !0,
                  emitEvent: t.emitEvent,
                });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (n.forEach((r, i) => {
              this.at(i) &&
                this.at(i).patchValue(r, {
                  onlySelf: !0,
                  emitEvent: t.emitEvent,
                });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = [], t = {}) {
          this._forEachChild((r, i) => {
            r.reset(n[i], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map((n) => n.getRawValue());
        }
        clear(n = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }));
        }
        _adjustIndex(n) {
          return n < 0 ? n + this.length : n;
        }
        _syncPendingControls() {
          let n = this.controls.reduce(
            (t, r) => !!r._syncPendingControls() || t,
            !1
          );
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          this.controls.forEach((t, r) => {
            n(t, r);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((n) => n.enabled || this.disabled)
            .map((n) => n.value);
        }
        _anyControls(n) {
          return this.controls.some((t) => t.enabled && n(t));
        }
        _setUpControls() {
          this._forEachChild((n) => this._registerControl(n));
        }
        _allControlsDisabled() {
          for (const n of this.controls) if (n.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(n) {
          n.setParent(this),
            n._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(n) {
          return this.at(n) ?? null;
        }
      }
      function fS(e) {
        return (
          !!e &&
          (void 0 !== e.asyncValidators ||
            void 0 !== e.validators ||
            void 0 !== e.updateOn)
        );
      }
      let uj = (() => {
          class e {
            constructor() {
              this.useNonNullable = !1;
            }
            get nonNullable() {
              const t = new e();
              return (t.useNonNullable = !0), t;
            }
            group(t, r = null) {
              const i = this._reduceControls(t);
              let s = {};
              return (
                fS(r)
                  ? (s = r)
                  : null !== r &&
                    ((s.validators = r.validator),
                    (s.asyncValidators = r.asyncValidator)),
                new ko(i, s)
              );
            }
            record(t, r = null) {
              const i = this._reduceControls(t);
              return new Vb(i, r);
            }
            control(t, r, i) {
              let s = {};
              return this.useNonNullable
                ? (fS(r)
                    ? (s = r)
                    : ((s.validators = r), (s.asyncValidators = i)),
                  new Ho(t, { ...s, nonNullable: !0 }))
                : new Ho(t, r, i);
            }
            array(t, r, i) {
              const s = t.map((o) => this._createControl(o));
              return new dS(s, r, i);
            }
            _reduceControls(t) {
              const r = {};
              return (
                Object.keys(t).forEach((i) => {
                  r[i] = this._createControl(t[i]);
                }),
                r
              );
            }
            _createControl(t) {
              return t instanceof Ho || t instanceof Iu
                ? t
                : Array.isArray(t)
                ? this.control(
                    t[0],
                    t.length > 1 ? t[1] : null,
                    t.length > 2 ? t[2] : null
                  )
                : this.control(t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            }));
          }
          return e;
        })(),
        cj = (() => {
          class e {
            static withConfig(t) {
              return {
                ngModule: e,
                providers: [
                  { provide: Wr, useValue: t.callSetDisabledState ?? Vo },
                ],
              };
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Xe({ type: e }));
            static #n = (this.ɵinj = He({ imports: [cS] }));
          }
          return e;
        })(),
        dj = (() => {
          class e {
            static withConfig(t) {
              return {
                ngModule: e,
                providers: [
                  {
                    provide: Np,
                    useValue: t.warnOnNgModelWithFormControl ?? "always",
                  },
                  { provide: Wr, useValue: t.callSetDisabledState ?? Vo },
                ],
              };
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Xe({ type: e }));
            static #n = (this.ɵinj = He({ imports: [cS] }));
          }
          return e;
        })();
      function es(e, n) {
        return X(n) ? je(e, n, 1) : je(e, 1);
      }
      function Wn(e, n) {
        return xe((t, r) => {
          let i = 0;
          t.subscribe(Oe(r, (s) => e.call(n, s, i++) && r.next(s)));
        });
      }
      function Uo(e) {
        return xe((n, t) => {
          try {
            n.subscribe(t);
          } finally {
            t.add(e);
          }
        });
      }
      class Ou {}
      class Pu {}
      class In {
        constructor(n) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            n
              ? "string" == typeof n
                ? (this.lazyInit = () => {
                    (this.headers = new Map()),
                      n.split("\n").forEach((t) => {
                        const r = t.indexOf(":");
                        if (r > 0) {
                          const i = t.slice(0, r),
                            s = i.toLowerCase(),
                            o = t.slice(r + 1).trim();
                          this.maybeSetNormalizedName(i, s),
                            this.headers.has(s)
                              ? this.headers.get(s).push(o)
                              : this.headers.set(s, [o]);
                        }
                      });
                  })
                : typeof Headers < "u" && n instanceof Headers
                ? ((this.headers = new Map()),
                  n.forEach((t, r) => {
                    this.setHeaderEntries(r, t);
                  }))
                : (this.lazyInit = () => {
                    (this.headers = new Map()),
                      Object.entries(n).forEach(([t, r]) => {
                        this.setHeaderEntries(t, r);
                      });
                  })
              : (this.headers = new Map());
        }
        has(n) {
          return this.init(), this.headers.has(n.toLowerCase());
        }
        get(n) {
          this.init();
          const t = this.headers.get(n.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(n) {
          return this.init(), this.headers.get(n.toLowerCase()) || null;
        }
        append(n, t) {
          return this.clone({ name: n, value: t, op: "a" });
        }
        set(n, t) {
          return this.clone({ name: n, value: t, op: "s" });
        }
        delete(n, t) {
          return this.clone({ name: n, value: t, op: "d" });
        }
        maybeSetNormalizedName(n, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, n);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof In
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((n) => this.applyUpdate(n)),
              (this.lazyUpdate = null)));
        }
        copyFrom(n) {
          n.init(),
            Array.from(n.headers.keys()).forEach((t) => {
              this.headers.set(t, n.headers.get(t)),
                this.normalizedNames.set(t, n.normalizedNames.get(t));
            });
        }
        clone(n) {
          const t = new In();
          return (
            (t.lazyInit =
              this.lazyInit && this.lazyInit instanceof In
                ? this.lazyInit
                : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([n])),
            t
          );
        }
        applyUpdate(n) {
          const t = n.name.toLowerCase();
          switch (n.op) {
            case "a":
            case "s":
              let r = n.value;
              if (("string" == typeof r && (r = [r]), 0 === r.length)) return;
              this.maybeSetNormalizedName(n.name, t);
              const i = ("a" === n.op ? this.headers.get(t) : void 0) || [];
              i.push(...r), this.headers.set(t, i);
              break;
            case "d":
              const s = n.value;
              if (s) {
                let o = this.headers.get(t);
                if (!o) return;
                (o = o.filter((a) => -1 === s.indexOf(a))),
                  0 === o.length
                    ? (this.headers.delete(t), this.normalizedNames.delete(t))
                    : this.headers.set(t, o);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        setHeaderEntries(n, t) {
          const r = (Array.isArray(t) ? t : [t]).map((s) => s.toString()),
            i = n.toLowerCase();
          this.headers.set(i, r), this.maybeSetNormalizedName(n, i);
        }
        forEach(n) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((t) =>
              n(this.normalizedNames.get(t), this.headers.get(t))
            );
        }
      }
      class fj {
        encodeKey(n) {
          return hS(n);
        }
        encodeValue(n) {
          return hS(n);
        }
        decodeKey(n) {
          return decodeURIComponent(n);
        }
        decodeValue(n) {
          return decodeURIComponent(n);
        }
      }
      const pj = /%(\d[a-f0-9])/gi,
        gj = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function hS(e) {
        return encodeURIComponent(e).replace(pj, (n, t) => gj[t] ?? n);
      }
      function xu(e) {
        return `${e}`;
      }
      class _r {
        constructor(n = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = n.encoder || new fj()),
            n.fromString)
          ) {
            if (n.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function hj(e, n) {
              const t = new Map();
              return (
                e.length > 0 &&
                  e
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((i) => {
                      const s = i.indexOf("="),
                        [o, a] =
                          -1 == s
                            ? [n.decodeKey(i), ""]
                            : [
                                n.decodeKey(i.slice(0, s)),
                                n.decodeValue(i.slice(s + 1)),
                              ],
                        l = t.get(o) || [];
                      l.push(a), t.set(o, l);
                    }),
                t
              );
            })(n.fromString, this.encoder);
          } else
            n.fromObject
              ? ((this.map = new Map()),
                Object.keys(n.fromObject).forEach((t) => {
                  const r = n.fromObject[t],
                    i = Array.isArray(r) ? r.map(xu) : [xu(r)];
                  this.map.set(t, i);
                }))
              : (this.map = null);
        }
        has(n) {
          return this.init(), this.map.has(n);
        }
        get(n) {
          this.init();
          const t = this.map.get(n);
          return t ? t[0] : null;
        }
        getAll(n) {
          return this.init(), this.map.get(n) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(n, t) {
          return this.clone({ param: n, value: t, op: "a" });
        }
        appendAll(n) {
          const t = [];
          return (
            Object.keys(n).forEach((r) => {
              const i = n[r];
              Array.isArray(i)
                ? i.forEach((s) => {
                    t.push({ param: r, value: s, op: "a" });
                  })
                : t.push({ param: r, value: i, op: "a" });
            }),
            this.clone(t)
          );
        }
        set(n, t) {
          return this.clone({ param: n, value: t, op: "s" });
        }
        delete(n, t) {
          return this.clone({ param: n, value: t, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((n) => {
                const t = this.encoder.encodeKey(n);
                return this.map
                  .get(n)
                  .map((r) => t + "=" + this.encoder.encodeValue(r))
                  .join("&");
              })
              .filter((n) => "" !== n)
              .join("&")
          );
        }
        clone(n) {
          const t = new _r({ encoder: this.encoder });
          return (
            (t.cloneFrom = this.cloneFrom || this),
            (t.updates = (this.updates || []).concat(n)),
            t
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((n) => this.map.set(n, this.cloneFrom.map.get(n))),
              this.updates.forEach((n) => {
                switch (n.op) {
                  case "a":
                  case "s":
                    const t =
                      ("a" === n.op ? this.map.get(n.param) : void 0) || [];
                    t.push(xu(n.value)), this.map.set(n.param, t);
                    break;
                  case "d":
                    if (void 0 === n.value) {
                      this.map.delete(n.param);
                      break;
                    }
                    {
                      let r = this.map.get(n.param) || [];
                      const i = r.indexOf(xu(n.value));
                      -1 !== i && r.splice(i, 1),
                        r.length > 0
                          ? this.map.set(n.param, r)
                          : this.map.delete(n.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class mj {
        constructor() {
          this.map = new Map();
        }
        set(n, t) {
          return this.map.set(n, t), this;
        }
        get(n) {
          return (
            this.map.has(n) || this.map.set(n, n.defaultValue()),
            this.map.get(n)
          );
        }
        delete(n) {
          return this.map.delete(n), this;
        }
        has(n) {
          return this.map.has(n);
        }
        keys() {
          return this.map.keys();
        }
      }
      function pS(e) {
        return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer;
      }
      function gS(e) {
        return typeof Blob < "u" && e instanceof Blob;
      }
      function mS(e) {
        return typeof FormData < "u" && e instanceof FormData;
      }
      class $o {
        constructor(n, t, r, i) {
          let s;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = n.toUpperCase()),
            (function yj(e) {
              switch (e) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || i
              ? ((this.body = void 0 !== r ? r : null), (s = i))
              : (s = r),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.context && (this.context = s.context),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new In()),
            this.context || (this.context = new mj()),
            this.params)
          ) {
            const o = this.params.toString();
            if (0 === o.length) this.urlWithParams = t;
            else {
              const a = t.indexOf("?");
              this.urlWithParams =
                t + (-1 === a ? "?" : a < t.length - 1 ? "&" : "") + o;
            }
          } else (this.params = new _r()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : pS(this.body) ||
              gS(this.body) ||
              mS(this.body) ||
              (function vj(e) {
                return (
                  typeof URLSearchParams < "u" && e instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof _r
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || mS(this.body)
            ? null
            : gS(this.body)
            ? this.body.type || null
            : pS(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof _r
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(n = {}) {
          const t = n.method || this.method,
            r = n.url || this.url,
            i = n.responseType || this.responseType,
            s = void 0 !== n.body ? n.body : this.body,
            o =
              void 0 !== n.withCredentials
                ? n.withCredentials
                : this.withCredentials,
            a =
              void 0 !== n.reportProgress
                ? n.reportProgress
                : this.reportProgress;
          let l = n.headers || this.headers,
            u = n.params || this.params;
          const c = n.context ?? this.context;
          return (
            void 0 !== n.setHeaders &&
              (l = Object.keys(n.setHeaders).reduce(
                (d, f) => d.set(f, n.setHeaders[f]),
                l
              )),
            n.setParams &&
              (u = Object.keys(n.setParams).reduce(
                (d, f) => d.set(f, n.setParams[f]),
                u
              )),
            new $o(t, r, s, {
              params: u,
              headers: l,
              context: c,
              reportProgress: a,
              responseType: i,
              withCredentials: o,
            })
          );
        }
      }
      var ts = (function (e) {
        return (
          (e[(e.Sent = 0)] = "Sent"),
          (e[(e.UploadProgress = 1)] = "UploadProgress"),
          (e[(e.ResponseHeader = 2)] = "ResponseHeader"),
          (e[(e.DownloadProgress = 3)] = "DownloadProgress"),
          (e[(e.Response = 4)] = "Response"),
          (e[(e.User = 5)] = "User"),
          e
        );
      })(ts || {});
      class kp {
        constructor(n, t = 200, r = "OK") {
          (this.headers = n.headers || new In()),
            (this.status = void 0 !== n.status ? n.status : t),
            (this.statusText = n.statusText || r),
            (this.url = n.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Vp extends kp {
        constructor(n = {}) {
          super(n), (this.type = ts.ResponseHeader);
        }
        clone(n = {}) {
          return new Vp({
            headers: n.headers || this.headers,
            status: void 0 !== n.status ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0,
          });
        }
      }
      class ns extends kp {
        constructor(n = {}) {
          super(n),
            (this.type = ts.Response),
            (this.body = void 0 !== n.body ? n.body : null);
        }
        clone(n = {}) {
          return new ns({
            body: void 0 !== n.body ? n.body : this.body,
            headers: n.headers || this.headers,
            status: void 0 !== n.status ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0,
          });
        }
      }
      class yS extends kp {
        constructor(n) {
          super(n, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${n.url || "(unknown url)"}`
                : `Http failure response for ${n.url || "(unknown url)"}: ${
                    n.status
                  } ${n.statusText}`),
            (this.error = n.error || null);
        }
      }
      function jp(e, n) {
        return {
          body: n,
          headers: e.headers,
          context: e.context,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      let vS = (() => {
        class e {
          constructor(t) {
            this.handler = t;
          }
          request(t, r, i = {}) {
            let s;
            if (t instanceof $o) s = t;
            else {
              let l, u;
              (l = i.headers instanceof In ? i.headers : new In(i.headers)),
                i.params &&
                  (u =
                    i.params instanceof _r
                      ? i.params
                      : new _r({ fromObject: i.params })),
                (s = new $o(t, r, void 0 !== i.body ? i.body : null, {
                  headers: l,
                  context: i.context,
                  params: u,
                  reportProgress: i.reportProgress,
                  responseType: i.responseType || "json",
                  withCredentials: i.withCredentials,
                }));
            }
            const o = k(s).pipe(es((l) => this.handler.handle(l)));
            if (t instanceof $o || "events" === i.observe) return o;
            const a = o.pipe(Wn((l) => l instanceof ns));
            switch (i.observe || "body") {
              case "body":
                switch (s.responseType) {
                  case "arraybuffer":
                    return a.pipe(
                      ie((l) => {
                        if (null !== l.body && !(l.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return l.body;
                      })
                    );
                  case "blob":
                    return a.pipe(
                      ie((l) => {
                        if (null !== l.body && !(l.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return l.body;
                      })
                    );
                  case "text":
                    return a.pipe(
                      ie((l) => {
                        if (null !== l.body && "string" != typeof l.body)
                          throw new Error("Response is not a string.");
                        return l.body;
                      })
                    );
                  default:
                    return a.pipe(ie((l) => l.body));
                }
              case "response":
                return a;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${i.observe}}`
                );
            }
          }
          delete(t, r = {}) {
            return this.request("DELETE", t, r);
          }
          get(t, r = {}) {
            return this.request("GET", t, r);
          }
          head(t, r = {}) {
            return this.request("HEAD", t, r);
          }
          jsonp(t, r) {
            return this.request("JSONP", t, {
              params: new _r().append(r, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(t, r = {}) {
            return this.request("OPTIONS", t, r);
          }
          patch(t, r, i = {}) {
            return this.request("PATCH", t, jp(i, r));
          }
          post(t, r, i = {}) {
            return this.request("POST", t, jp(i, r));
          }
          put(t, r, i = {}) {
            return this.request("PUT", t, jp(i, r));
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ou));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function CS(e, n) {
        return n(e);
      }
      function Dj(e, n) {
        return (t, r) => n.intercept(t, { handle: (i) => e(i, r) });
      }
      const wj = new N(""),
        zo = new N(""),
        wS = new N("");
      function Ej() {
        let e = null;
        return (n, t) => {
          null === e &&
            (e = (T(wj, { optional: !0 }) ?? []).reduceRight(Dj, CS));
          const r = T(kl),
            i = r.add();
          return e(n, t).pipe(Uo(() => r.remove(i)));
        };
      }
      let ES = (() => {
        class e extends Ou {
          constructor(t, r) {
            super(),
              (this.backend = t),
              (this.injector = r),
              (this.chain = null),
              (this.pendingTasks = T(kl));
          }
          handle(t) {
            if (null === this.chain) {
              const i = Array.from(
                new Set([
                  ...this.injector.get(zo),
                  ...this.injector.get(wS, []),
                ])
              );
              this.chain = i.reduceRight(
                (s, o) =>
                  (function Cj(e, n, t) {
                    return (r, i) => t.runInContext(() => n(r, (s) => e(s, i)));
                  })(s, o, this.injector),
                CS
              );
            }
            const r = this.pendingTasks.add();
            return this.chain(t, (i) => this.backend.handle(i)).pipe(
              Uo(() => this.pendingTasks.remove(r))
            );
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Pu), A(Rt));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const Tj = /^\)\]\}',?\n/;
      let SS = (() => {
        class e {
          constructor(t) {
            this.xhrFactory = t;
          }
          handle(t) {
            if ("JSONP" === t.method) throw new D(-2800, !1);
            const r = this.xhrFactory;
            return (r.ɵloadImpl ? Fe(r.ɵloadImpl()) : k(null)).pipe(
              Yt(
                () =>
                  new Se((s) => {
                    const o = r.build();
                    if (
                      (o.open(t.method, t.urlWithParams),
                      t.withCredentials && (o.withCredentials = !0),
                      t.headers.forEach((g, v) =>
                        o.setRequestHeader(g, v.join(","))
                      ),
                      t.headers.has("Accept") ||
                        o.setRequestHeader(
                          "Accept",
                          "application/json, text/plain, */*"
                        ),
                      !t.headers.has("Content-Type"))
                    ) {
                      const g = t.detectContentTypeHeader();
                      null !== g && o.setRequestHeader("Content-Type", g);
                    }
                    if (t.responseType) {
                      const g = t.responseType.toLowerCase();
                      o.responseType = "json" !== g ? g : "text";
                    }
                    const a = t.serializeBody();
                    let l = null;
                    const u = () => {
                        if (null !== l) return l;
                        const g = o.statusText || "OK",
                          v = new In(o.getAllResponseHeaders()),
                          C =
                            (function Mj(e) {
                              return "responseURL" in e && e.responseURL
                                ? e.responseURL
                                : /^X-Request-URL:/m.test(
                                    e.getAllResponseHeaders()
                                  )
                                ? e.getResponseHeader("X-Request-URL")
                                : null;
                            })(o) || t.url;
                        return (
                          (l = new Vp({
                            headers: v,
                            status: o.status,
                            statusText: g,
                            url: C,
                          })),
                          l
                        );
                      },
                      c = () => {
                        let {
                            headers: g,
                            status: v,
                            statusText: C,
                            url: _,
                          } = u(),
                          S = null;
                        204 !== v &&
                          (S =
                            typeof o.response > "u"
                              ? o.responseText
                              : o.response),
                          0 === v && (v = S ? 200 : 0);
                        let M = v >= 200 && v < 300;
                        if ("json" === t.responseType && "string" == typeof S) {
                          const H = S;
                          S = S.replace(Tj, "");
                          try {
                            S = "" !== S ? JSON.parse(S) : null;
                          } catch (fe) {
                            (S = H),
                              M && ((M = !1), (S = { error: fe, text: S }));
                          }
                        }
                        M
                          ? (s.next(
                              new ns({
                                body: S,
                                headers: g,
                                status: v,
                                statusText: C,
                                url: _ || void 0,
                              })
                            ),
                            s.complete())
                          : s.error(
                              new yS({
                                error: S,
                                headers: g,
                                status: v,
                                statusText: C,
                                url: _ || void 0,
                              })
                            );
                      },
                      d = (g) => {
                        const { url: v } = u(),
                          C = new yS({
                            error: g,
                            status: o.status || 0,
                            statusText: o.statusText || "Unknown Error",
                            url: v || void 0,
                          });
                        s.error(C);
                      };
                    let f = !1;
                    const h = (g) => {
                        f || (s.next(u()), (f = !0));
                        let v = { type: ts.DownloadProgress, loaded: g.loaded };
                        g.lengthComputable && (v.total = g.total),
                          "text" === t.responseType &&
                            o.responseText &&
                            (v.partialText = o.responseText),
                          s.next(v);
                      },
                      p = (g) => {
                        let v = { type: ts.UploadProgress, loaded: g.loaded };
                        g.lengthComputable && (v.total = g.total), s.next(v);
                      };
                    return (
                      o.addEventListener("load", c),
                      o.addEventListener("error", d),
                      o.addEventListener("timeout", d),
                      o.addEventListener("abort", d),
                      t.reportProgress &&
                        (o.addEventListener("progress", h),
                        null !== a &&
                          o.upload &&
                          o.upload.addEventListener("progress", p)),
                      o.send(a),
                      s.next({ type: ts.Sent }),
                      () => {
                        o.removeEventListener("error", d),
                          o.removeEventListener("abort", d),
                          o.removeEventListener("load", c),
                          o.removeEventListener("timeout", d),
                          t.reportProgress &&
                            (o.removeEventListener("progress", h),
                            null !== a &&
                              o.upload &&
                              o.upload.removeEventListener("progress", p)),
                          o.readyState !== o.DONE && o.abort();
                      }
                    );
                  })
              )
            );
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(nE));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const Bp = new N("XSRF_ENABLED"),
        IS = new N("XSRF_COOKIE_NAME", {
          providedIn: "root",
          factory: () => "XSRF-TOKEN",
        }),
        TS = new N("XSRF_HEADER_NAME", {
          providedIn: "root",
          factory: () => "X-XSRF-TOKEN",
        });
      class MS {}
      let Rj = (() => {
        class e {
          constructor(t, r, i) {
            (this.doc = t),
              (this.platform = r),
              (this.cookieName = i),
              (this.lastCookieString = ""),
              (this.lastToken = null),
              (this.parseCount = 0);
          }
          getToken() {
            if ("server" === this.platform) return null;
            const t = this.doc.cookie || "";
            return (
              t !== this.lastCookieString &&
                (this.parseCount++,
                (this.lastToken = Gw(t, this.cookieName)),
                (this.lastCookieString = t)),
              this.lastToken
            );
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Ze), A(ar), A(IS));
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function Oj(e, n) {
        const t = e.url.toLowerCase();
        if (
          !T(Bp) ||
          "GET" === e.method ||
          "HEAD" === e.method ||
          t.startsWith("http://") ||
          t.startsWith("https://")
        )
          return n(e);
        const r = T(MS).getToken(),
          i = T(TS);
        return (
          null != r &&
            !e.headers.has(i) &&
            (e = e.clone({ headers: e.headers.set(i, r) })),
          n(e)
        );
      }
      var Dr = (function (e) {
        return (
          (e[(e.Interceptors = 0)] = "Interceptors"),
          (e[(e.LegacyInterceptors = 1)] = "LegacyInterceptors"),
          (e[(e.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
          (e[(e.NoXsrfProtection = 3)] = "NoXsrfProtection"),
          (e[(e.JsonpSupport = 4)] = "JsonpSupport"),
          (e[(e.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
          (e[(e.Fetch = 6)] = "Fetch"),
          e
        );
      })(Dr || {});
      function Pj(...e) {
        const n = [
          vS,
          SS,
          ES,
          { provide: Ou, useExisting: ES },
          { provide: Pu, useExisting: SS },
          { provide: zo, useValue: Oj, multi: !0 },
          { provide: Bp, useValue: !0 },
          { provide: MS, useClass: Rj },
        ];
        for (const t of e) n.push(...t.ɵproviders);
        return (function Md(e) {
          return { ɵproviders: e };
        })(n);
      }
      const AS = new N("LEGACY_INTERCEPTOR_FN");
      function xj() {
        return (function Kr(e, n) {
          return { ɵkind: e, ɵproviders: n };
        })(Dr.LegacyInterceptors, [
          { provide: AS, useFactory: Ej },
          { provide: zo, useExisting: AS, multi: !0 },
        ]);
      }
      let Fj = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵmod = Xe({ type: e }));
          static #n = (this.ɵinj = He({ providers: [Pj(xj())] }));
        }
        return e;
      })();
      function Hp(...e) {
        const n = ys(e),
          t = kg(e),
          { args: r, keys: i } = ab(e);
        if (0 === r.length) return Fe([], n);
        const s = new Se(
          (function Uj(e, n, t = Qn) {
            return (r) => {
              NS(
                n,
                () => {
                  const { length: i } = e,
                    s = new Array(i);
                  let o = i,
                    a = i;
                  for (let l = 0; l < i; l++)
                    NS(
                      n,
                      () => {
                        const u = Fe(e[l], n);
                        let c = !1;
                        u.subscribe(
                          Oe(
                            r,
                            (d) => {
                              (s[l] = d),
                                c || ((c = !0), a--),
                                a || r.next(t(s.slice()));
                            },
                            () => {
                              --o || r.complete();
                            }
                          )
                        );
                      },
                      r
                    );
                },
                r
              );
            };
          })(r, n, i ? (o) => lb(i, o) : Qn)
        );
        return t ? s.pipe(pp(t)) : s;
      }
      function NS(e, n, t) {
        e ? Nn(t, e, n) : n();
      }
      const Lu = ps(
        (e) =>
          function () {
            e(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
      function Up(...e) {
        return (function $j() {
          return ti(1);
        })()(Fe(e, ys(e)));
      }
      function RS(e) {
        return new Se((n) => {
          mt(e()).subscribe(n);
        });
      }
      function Go(e, n) {
        const t = X(e) ? e : () => e,
          r = (i) => i.error(t());
        return new Se(n ? (i) => n.schedule(r, 0, i) : r);
      }
      function $p() {
        return xe((e, n) => {
          let t = null;
          e._refCount++;
          const r = Oe(n, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount)
              return void (t = null);
            const i = e._connection,
              s = t;
            (t = null),
              i && (!s || i === s) && i.unsubscribe(),
              n.unsubscribe();
          });
          e.subscribe(r), r.closed || (t = e.connect());
        });
      }
      class OS extends Se {
        constructor(n, t) {
          super(),
            (this.source = n),
            (this.subjectFactory = t),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            Eg(n) && (this.lift = n.lift);
        }
        _subscribe(n) {
          return this.getSubject().subscribe(n);
        }
        getSubject() {
          const n = this._subject;
          return (
            (!n || n.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: n } = this;
          (this._subject = this._connection = null), n?.unsubscribe();
        }
        connect() {
          let n = this._connection;
          if (!n) {
            n = this._connection = new It();
            const t = this.getSubject();
            n.add(
              this.source.subscribe(
                Oe(
                  t,
                  void 0,
                  () => {
                    this._teardown(), t.complete();
                  },
                  (r) => {
                    this._teardown(), t.error(r);
                  },
                  () => this._teardown()
                )
              )
            ),
              n.closed && ((this._connection = null), (n = It.EMPTY));
          }
          return n;
        }
        refCount() {
          return $p()(this);
        }
      }
      function rs(e) {
        return e <= 0
          ? () => dn
          : xe((n, t) => {
              let r = 0;
              n.subscribe(
                Oe(t, (i) => {
                  ++r <= e && (t.next(i), e <= r && t.complete());
                })
              );
            });
      }
      function ku(e) {
        return xe((n, t) => {
          let r = !1;
          n.subscribe(
            Oe(
              t,
              (i) => {
                (r = !0), t.next(i);
              },
              () => {
                r || t.next(e), t.complete();
              }
            )
          );
        });
      }
      function PS(e = Gj) {
        return xe((n, t) => {
          let r = !1;
          n.subscribe(
            Oe(
              t,
              (i) => {
                (r = !0), t.next(i);
              },
              () => (r ? t.complete() : t.error(e()))
            )
          );
        });
      }
      function Gj() {
        return new Lu();
      }
      function Qr(e, n) {
        const t = arguments.length >= 2;
        return (r) =>
          r.pipe(
            e ? Wn((i, s) => e(i, s, r)) : Qn,
            rs(1),
            t ? ku(n) : PS(() => new Lu())
          );
      }
      function rt(e, n, t) {
        const r = X(e) || n || t ? { next: e, error: n, complete: t } : e;
        return r
          ? xe((i, s) => {
              var o;
              null === (o = r.subscribe) || void 0 === o || o.call(r);
              let a = !0;
              i.subscribe(
                Oe(
                  s,
                  (l) => {
                    var u;
                    null === (u = r.next) || void 0 === u || u.call(r, l),
                      s.next(l);
                  },
                  () => {
                    var l;
                    (a = !1),
                      null === (l = r.complete) || void 0 === l || l.call(r),
                      s.complete();
                  },
                  (l) => {
                    var u;
                    (a = !1),
                      null === (u = r.error) || void 0 === u || u.call(r, l),
                      s.error(l);
                  },
                  () => {
                    var l, u;
                    a &&
                      (null === (l = r.unsubscribe) ||
                        void 0 === l ||
                        l.call(r)),
                      null === (u = r.finalize) || void 0 === u || u.call(r);
                  }
                )
              );
            })
          : Qn;
      }
      function Zr(e) {
        return xe((n, t) => {
          let s,
            r = null,
            i = !1;
          (r = n.subscribe(
            Oe(t, void 0, void 0, (o) => {
              (s = mt(e(o, Zr(e)(n)))),
                r ? (r.unsubscribe(), (r = null), s.subscribe(t)) : (i = !0);
            })
          )),
            i && (r.unsubscribe(), (r = null), s.subscribe(t));
        });
      }
      function zp(e) {
        return e <= 0
          ? () => dn
          : xe((n, t) => {
              let r = [];
              n.subscribe(
                Oe(
                  t,
                  (i) => {
                    r.push(i), e < r.length && r.shift();
                  },
                  () => {
                    for (const i of r) t.next(i);
                    t.complete();
                  },
                  void 0,
                  () => {
                    r = null;
                  }
                )
              );
            });
      }
      const K = "primary",
        Wo = Symbol("RouteTitle");
      class Yj {
        constructor(n) {
          this.params = n || {};
        }
        has(n) {
          return Object.prototype.hasOwnProperty.call(this.params, n);
        }
        get(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function is(e) {
        return new Yj(e);
      }
      function Xj(e, n, t) {
        const r = t.path.split("/");
        if (
          r.length > e.length ||
          ("full" === t.pathMatch && (n.hasChildren() || r.length < e.length))
        )
          return null;
        const i = {};
        for (let s = 0; s < r.length; s++) {
          const o = r[s],
            a = e[s];
          if (o.startsWith(":")) i[o.substring(1)] = a;
          else if (o !== a.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: i };
      }
      function Tn(e, n) {
        const t = e ? Object.keys(e) : void 0,
          r = n ? Object.keys(n) : void 0;
        if (!t || !r || t.length != r.length) return !1;
        let i;
        for (let s = 0; s < t.length; s++)
          if (((i = t[s]), !xS(e[i], n[i]))) return !1;
        return !0;
      }
      function xS(e, n) {
        if (Array.isArray(e) && Array.isArray(n)) {
          if (e.length !== n.length) return !1;
          const t = [...e].sort(),
            r = [...n].sort();
          return t.every((i, s) => r[s] === i);
        }
        return e === n;
      }
      function FS(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Cr(e) {
        return (function Hj(e) {
          return !!e && (e instanceof Se || (X(e.lift) && X(e.subscribe)));
        })(e)
          ? e
          : ao(e)
          ? Fe(Promise.resolve(e))
          : k(e);
      }
      const e8 = {
          exact: function VS(e, n, t) {
            if (
              !Yr(e.segments, n.segments) ||
              !Vu(e.segments, n.segments, t) ||
              e.numberOfChildren !== n.numberOfChildren
            )
              return !1;
            for (const r in n.children)
              if (!e.children[r] || !VS(e.children[r], n.children[r], t))
                return !1;
            return !0;
          },
          subset: jS,
        },
        LS = {
          exact: function t8(e, n) {
            return Tn(e, n);
          },
          subset: function n8(e, n) {
            return (
              Object.keys(n).length <= Object.keys(e).length &&
              Object.keys(n).every((t) => xS(e[t], n[t]))
            );
          },
          ignored: () => !0,
        };
      function kS(e, n, t) {
        return (
          e8[t.paths](e.root, n.root, t.matrixParams) &&
          LS[t.queryParams](e.queryParams, n.queryParams) &&
          !("exact" === t.fragment && e.fragment !== n.fragment)
        );
      }
      function jS(e, n, t) {
        return BS(e, n, n.segments, t);
      }
      function BS(e, n, t, r) {
        if (e.segments.length > t.length) {
          const i = e.segments.slice(0, t.length);
          return !(!Yr(i, t) || n.hasChildren() || !Vu(i, t, r));
        }
        if (e.segments.length === t.length) {
          if (!Yr(e.segments, t) || !Vu(e.segments, t, r)) return !1;
          for (const i in n.children)
            if (!e.children[i] || !jS(e.children[i], n.children[i], r))
              return !1;
          return !0;
        }
        {
          const i = t.slice(0, e.segments.length),
            s = t.slice(e.segments.length);
          return (
            !!(Yr(e.segments, i) && Vu(e.segments, i, r) && e.children[K]) &&
            BS(e.children[K], n, s, r)
          );
        }
      }
      function Vu(e, n, t) {
        return n.every((r, i) => LS[t](e[i].parameters, r.parameters));
      }
      class ss {
        constructor(n = new de([], {}), t = {}, r = null) {
          (this.root = n), (this.queryParams = t), (this.fragment = r);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = is(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return s8.serialize(this);
        }
      }
      class de {
        constructor(n, t) {
          (this.segments = n),
            (this.children = t),
            (this.parent = null),
            Object.values(t).forEach((r) => (r.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return ju(this);
        }
      }
      class qo {
        constructor(n, t) {
          (this.path = n), (this.parameters = t);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = is(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return $S(this);
        }
      }
      function Yr(e, n) {
        return e.length === n.length && e.every((t, r) => t.path === n[r].path);
      }
      let Ko = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: function () {
              return new Gp();
            },
            providedIn: "root",
          }));
        }
        return e;
      })();
      class Gp {
        parse(n) {
          const t = new m8(n);
          return new ss(
            t.parseRootSegment(),
            t.parseQueryParams(),
            t.parseFragment()
          );
        }
        serialize(n) {
          const t = `/${Qo(n.root, !0)}`,
            r = (function l8(e) {
              const n = Object.keys(e)
                .map((t) => {
                  const r = e[t];
                  return Array.isArray(r)
                    ? r.map((i) => `${Bu(t)}=${Bu(i)}`).join("&")
                    : `${Bu(t)}=${Bu(r)}`;
                })
                .filter((t) => !!t);
              return n.length ? `?${n.join("&")}` : "";
            })(n.queryParams);
          return `${t}${r}${
            "string" == typeof n.fragment
              ? `#${(function o8(e) {
                  return encodeURI(e);
                })(n.fragment)}`
              : ""
          }`;
        }
      }
      const s8 = new Gp();
      function ju(e) {
        return e.segments.map((n) => $S(n)).join("/");
      }
      function Qo(e, n) {
        if (!e.hasChildren()) return ju(e);
        if (n) {
          const t = e.children[K] ? Qo(e.children[K], !1) : "",
            r = [];
          return (
            Object.entries(e.children).forEach(([i, s]) => {
              i !== K && r.push(`${i}:${Qo(s, !1)}`);
            }),
            r.length > 0 ? `${t}(${r.join("//")})` : t
          );
        }
        {
          const t = (function i8(e, n) {
            let t = [];
            return (
              Object.entries(e.children).forEach(([r, i]) => {
                r === K && (t = t.concat(n(i, r)));
              }),
              Object.entries(e.children).forEach(([r, i]) => {
                r !== K && (t = t.concat(n(i, r)));
              }),
              t
            );
          })(e, (r, i) =>
            i === K ? [Qo(e.children[K], !1)] : [`${i}:${Qo(r, !1)}`]
          );
          return 1 === Object.keys(e.children).length && null != e.children[K]
            ? `${ju(e)}/${t[0]}`
            : `${ju(e)}/(${t.join("//")})`;
        }
      }
      function HS(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Bu(e) {
        return HS(e).replace(/%3B/gi, ";");
      }
      function Wp(e) {
        return HS(e)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Hu(e) {
        return decodeURIComponent(e);
      }
      function US(e) {
        return Hu(e.replace(/\+/g, "%20"));
      }
      function $S(e) {
        return `${Wp(e.path)}${(function a8(e) {
          return Object.keys(e)
            .map((n) => `;${Wp(n)}=${Wp(e[n])}`)
            .join("");
        })(e.parameters)}`;
      }
      const u8 = /^[^\/()?;#]+/;
      function qp(e) {
        const n = e.match(u8);
        return n ? n[0] : "";
      }
      const c8 = /^[^\/()?;=#]+/,
        f8 = /^[^=?&#]+/,
        p8 = /^[^&#]+/;
      class m8 {
        constructor(n) {
          (this.url = n), (this.remaining = n);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new de([], {})
              : new de([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const n = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(n);
            } while (this.consumeOptional("&"));
          return n;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const n = [];
          for (
            this.peekStartsWith("(") || n.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), n.push(this.parseSegment());
          let t = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (t = this.parseParens(!0)));
          let r = {};
          return (
            this.peekStartsWith("(") && (r = this.parseParens(!1)),
            (n.length > 0 || Object.keys(t).length > 0) &&
              (r[K] = new de(n, t)),
            r
          );
        }
        parseSegment() {
          const n = qp(this.remaining);
          if ("" === n && this.peekStartsWith(";")) throw new D(4009, !1);
          return this.capture(n), new qo(Hu(n), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const n = {};
          for (; this.consumeOptional(";"); ) this.parseParam(n);
          return n;
        }
        parseParam(n) {
          const t = (function d8(e) {
            const n = e.match(c8);
            return n ? n[0] : "";
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let r = "";
          if (this.consumeOptional("=")) {
            const i = qp(this.remaining);
            i && ((r = i), this.capture(r));
          }
          n[Hu(t)] = Hu(r);
        }
        parseQueryParam(n) {
          const t = (function h8(e) {
            const n = e.match(f8);
            return n ? n[0] : "";
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let r = "";
          if (this.consumeOptional("=")) {
            const o = (function g8(e) {
              const n = e.match(p8);
              return n ? n[0] : "";
            })(this.remaining);
            o && ((r = o), this.capture(r));
          }
          const i = US(t),
            s = US(r);
          if (n.hasOwnProperty(i)) {
            let o = n[i];
            Array.isArray(o) || ((o = [o]), (n[i] = o)), o.push(s);
          } else n[i] = s;
        }
        parseParens(n) {
          const t = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const r = qp(this.remaining),
              i = this.remaining[r.length];
            if ("/" !== i && ")" !== i && ";" !== i) throw new D(4010, !1);
            let s;
            r.indexOf(":") > -1
              ? ((s = r.slice(0, r.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : n && (s = K);
            const o = this.parseChildren();
            (t[s] = 1 === Object.keys(o).length ? o[K] : new de([], o)),
              this.consumeOptional("//");
          }
          return t;
        }
        peekStartsWith(n) {
          return this.remaining.startsWith(n);
        }
        consumeOptional(n) {
          return (
            !!this.peekStartsWith(n) &&
            ((this.remaining = this.remaining.substring(n.length)), !0)
          );
        }
        capture(n) {
          if (!this.consumeOptional(n)) throw new D(4011, !1);
        }
      }
      function zS(e) {
        return e.segments.length > 0 ? new de([], { [K]: e }) : e;
      }
      function GS(e) {
        const n = {};
        for (const r of Object.keys(e.children)) {
          const s = GS(e.children[r]);
          if (r === K && 0 === s.segments.length && s.hasChildren())
            for (const [o, a] of Object.entries(s.children)) n[o] = a;
          else (s.segments.length > 0 || s.hasChildren()) && (n[r] = s);
        }
        return (function y8(e) {
          if (1 === e.numberOfChildren && e.children[K]) {
            const n = e.children[K];
            return new de(e.segments.concat(n.segments), n.children);
          }
          return e;
        })(new de(e.segments, n));
      }
      function Xr(e) {
        return e instanceof ss;
      }
      function WS(e) {
        let n;
        const i = zS(
          (function t(s) {
            const o = {};
            for (const l of s.children) {
              const u = t(l);
              o[l.outlet] = u;
            }
            const a = new de(s.url, o);
            return s === e && (n = a), a;
          })(e.root)
        );
        return n ?? i;
      }
      function qS(e, n, t, r) {
        let i = e;
        for (; i.parent; ) i = i.parent;
        if (0 === n.length) return Kp(i, i, i, t, r);
        const s = (function _8(e) {
          if ("string" == typeof e[0] && 1 === e.length && "/" === e[0])
            return new QS(!0, 0, e);
          let n = 0,
            t = !1;
          const r = e.reduce((i, s, o) => {
            if ("object" == typeof s && null != s) {
              if (s.outlets) {
                const a = {};
                return (
                  Object.entries(s.outlets).forEach(([l, u]) => {
                    a[l] = "string" == typeof u ? u.split("/") : u;
                  }),
                  [...i, { outlets: a }]
                );
              }
              if (s.segmentPath) return [...i, s.segmentPath];
            }
            return "string" != typeof s
              ? [...i, s]
              : 0 === o
              ? (s.split("/").forEach((a, l) => {
                  (0 == l && "." === a) ||
                    (0 == l && "" === a
                      ? (t = !0)
                      : ".." === a
                      ? n++
                      : "" != a && i.push(a));
                }),
                i)
              : [...i, s];
          }, []);
          return new QS(t, n, r);
        })(n);
        if (s.toRoot()) return Kp(i, i, new de([], {}), t, r);
        const o = (function D8(e, n, t) {
            if (e.isAbsolute) return new $u(n, !0, 0);
            if (!t) return new $u(n, !1, NaN);
            if (null === t.parent) return new $u(t, !0, 0);
            const r = Uu(e.commands[0]) ? 0 : 1;
            return (function C8(e, n, t) {
              let r = e,
                i = n,
                s = t;
              for (; s > i; ) {
                if (((s -= i), (r = r.parent), !r)) throw new D(4005, !1);
                i = r.segments.length;
              }
              return new $u(r, !1, i - s);
            })(t, t.segments.length - 1 + r, e.numberOfDoubleDots);
          })(s, i, e),
          a = o.processChildren
            ? Yo(o.segmentGroup, o.index, s.commands)
            : ZS(o.segmentGroup, o.index, s.commands);
        return Kp(i, o.segmentGroup, a, t, r);
      }
      function Uu(e) {
        return (
          "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function Zo(e) {
        return "object" == typeof e && null != e && e.outlets;
      }
      function Kp(e, n, t, r, i) {
        let o,
          s = {};
        r &&
          Object.entries(r).forEach(([l, u]) => {
            s[l] = Array.isArray(u) ? u.map((c) => `${c}`) : `${u}`;
          }),
          (o = e === n ? t : KS(e, n, t));
        const a = zS(GS(o));
        return new ss(a, s, i);
      }
      function KS(e, n, t) {
        const r = {};
        return (
          Object.entries(e.children).forEach(([i, s]) => {
            r[i] = s === n ? t : KS(s, n, t);
          }),
          new de(e.segments, r)
        );
      }
      class QS {
        constructor(n, t, r) {
          if (
            ((this.isAbsolute = n),
            (this.numberOfDoubleDots = t),
            (this.commands = r),
            n && r.length > 0 && Uu(r[0]))
          )
            throw new D(4003, !1);
          const i = r.find(Zo);
          if (i && i !== FS(r)) throw new D(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class $u {
        constructor(n, t, r) {
          (this.segmentGroup = n), (this.processChildren = t), (this.index = r);
        }
      }
      function ZS(e, n, t) {
        if (
          (e || (e = new de([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return Yo(e, n, t);
        const r = (function E8(e, n, t) {
            let r = 0,
              i = n;
            const s = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; i < e.segments.length; ) {
              if (r >= t.length) return s;
              const o = e.segments[i],
                a = t[r];
              if (Zo(a)) break;
              const l = `${a}`,
                u = r < t.length - 1 ? t[r + 1] : null;
              if (i > 0 && void 0 === l) break;
              if (l && u && "object" == typeof u && void 0 === u.outlets) {
                if (!XS(l, u, o)) return s;
                r += 2;
              } else {
                if (!XS(l, {}, o)) return s;
                r++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: r };
          })(e, n, t),
          i = t.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const s = new de(e.segments.slice(0, r.pathIndex), {});
          return (
            (s.children[K] = new de(e.segments.slice(r.pathIndex), e.children)),
            Yo(s, 0, i)
          );
        }
        return r.match && 0 === i.length
          ? new de(e.segments, {})
          : r.match && !e.hasChildren()
          ? Qp(e, n, t)
          : r.match
          ? Yo(e, 0, i)
          : Qp(e, n, t);
      }
      function Yo(e, n, t) {
        if (0 === t.length) return new de(e.segments, {});
        {
          const r = (function w8(e) {
              return Zo(e[0]) ? e[0].outlets : { [K]: e };
            })(t),
            i = {};
          if (
            Object.keys(r).some((s) => s !== K) &&
            e.children[K] &&
            1 === e.numberOfChildren &&
            0 === e.children[K].segments.length
          ) {
            const s = Yo(e.children[K], n, t);
            return new de(e.segments, s.children);
          }
          return (
            Object.entries(r).forEach(([s, o]) => {
              "string" == typeof o && (o = [o]),
                null !== o && (i[s] = ZS(e.children[s], n, o));
            }),
            Object.entries(e.children).forEach(([s, o]) => {
              void 0 === r[s] && (i[s] = o);
            }),
            new de(e.segments, i)
          );
        }
      }
      function Qp(e, n, t) {
        const r = e.segments.slice(0, n);
        let i = 0;
        for (; i < t.length; ) {
          const s = t[i];
          if (Zo(s)) {
            const l = b8(s.outlets);
            return new de(r, l);
          }
          if (0 === i && Uu(t[0])) {
            r.push(new qo(e.segments[n].path, YS(t[0]))), i++;
            continue;
          }
          const o = Zo(s) ? s.outlets[K] : `${s}`,
            a = i < t.length - 1 ? t[i + 1] : null;
          o && a && Uu(a)
            ? (r.push(new qo(o, YS(a))), (i += 2))
            : (r.push(new qo(o, {})), i++);
        }
        return new de(r, {});
      }
      function b8(e) {
        const n = {};
        return (
          Object.entries(e).forEach(([t, r]) => {
            "string" == typeof r && (r = [r]),
              null !== r && (n[t] = Qp(new de([], {}), 0, r));
          }),
          n
        );
      }
      function YS(e) {
        const n = {};
        return Object.entries(e).forEach(([t, r]) => (n[t] = `${r}`)), n;
      }
      function XS(e, n, t) {
        return e == t.path && Tn(n, t.parameters);
      }
      const Xo = "imperative";
      class Mn {
        constructor(n, t) {
          (this.id = n), (this.url = t);
        }
      }
      class zu extends Mn {
        constructor(n, t, r = "imperative", i = null) {
          super(n, t),
            (this.type = 0),
            (this.navigationTrigger = r),
            (this.restoredState = i);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class wr extends Mn {
        constructor(n, t, r) {
          super(n, t), (this.urlAfterRedirects = r), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Jo extends Mn {
        constructor(n, t, r, i) {
          super(n, t), (this.reason = r), (this.code = i), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class os extends Mn {
        constructor(n, t, r, i) {
          super(n, t), (this.reason = r), (this.code = i), (this.type = 16);
        }
      }
      class Gu extends Mn {
        constructor(n, t, r, i) {
          super(n, t), (this.error = r), (this.target = i), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class JS extends Mn {
        constructor(n, t, r, i) {
          super(n, t),
            (this.urlAfterRedirects = r),
            (this.state = i),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class S8 extends Mn {
        constructor(n, t, r, i) {
          super(n, t),
            (this.urlAfterRedirects = r),
            (this.state = i),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class I8 extends Mn {
        constructor(n, t, r, i, s) {
          super(n, t),
            (this.urlAfterRedirects = r),
            (this.state = i),
            (this.shouldActivate = s),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class T8 extends Mn {
        constructor(n, t, r, i) {
          super(n, t),
            (this.urlAfterRedirects = r),
            (this.state = i),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class M8 extends Mn {
        constructor(n, t, r, i) {
          super(n, t),
            (this.urlAfterRedirects = r),
            (this.state = i),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class A8 {
        constructor(n) {
          (this.route = n), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class N8 {
        constructor(n) {
          (this.route = n), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class R8 {
        constructor(n) {
          (this.snapshot = n), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class O8 {
        constructor(n) {
          (this.snapshot = n), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class P8 {
        constructor(n) {
          (this.snapshot = n), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class x8 {
        constructor(n) {
          (this.snapshot = n), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class e0 {
        constructor(n, t, r) {
          (this.routerEvent = n),
            (this.position = t),
            (this.anchor = r),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Zp {}
      class Yp {
        constructor(n) {
          this.url = n;
        }
      }
      class F8 {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.injector = null),
            (this.children = new ea()),
            (this.attachRef = null);
        }
      }
      let ea = (() => {
        class e {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(t, r) {
            const i = this.getOrCreateContext(t);
            (i.outlet = r), this.contexts.set(t, i);
          }
          onChildOutletDestroyed(t) {
            const r = this.getContext(t);
            r && ((r.outlet = null), (r.attachRef = null));
          }
          onOutletDeactivated() {
            const t = this.contexts;
            return (this.contexts = new Map()), t;
          }
          onOutletReAttached(t) {
            this.contexts = t;
          }
          getOrCreateContext(t) {
            let r = this.getContext(t);
            return r || ((r = new F8()), this.contexts.set(t, r)), r;
          }
          getContext(t) {
            return this.contexts.get(t) || null;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      class t0 {
        constructor(n) {
          this._root = n;
        }
        get root() {
          return this._root.value;
        }
        parent(n) {
          const t = this.pathFromRoot(n);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(n) {
          const t = Xp(n, this._root);
          return t ? t.children.map((r) => r.value) : [];
        }
        firstChild(n) {
          const t = Xp(n, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(n) {
          const t = Jp(n, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children
                .map((i) => i.value)
                .filter((i) => i !== n);
        }
        pathFromRoot(n) {
          return Jp(n, this._root).map((t) => t.value);
        }
      }
      function Xp(e, n) {
        if (e === n.value) return n;
        for (const t of n.children) {
          const r = Xp(e, t);
          if (r) return r;
        }
        return null;
      }
      function Jp(e, n) {
        if (e === n.value) return [n];
        for (const t of n.children) {
          const r = Jp(e, t);
          if (r.length) return r.unshift(n), r;
        }
        return [];
      }
      class qn {
        constructor(n, t) {
          (this.value = n), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function as(e) {
        const n = {};
        return e && e.children.forEach((t) => (n[t.value.outlet] = t)), n;
      }
      class n0 extends t0 {
        constructor(n, t) {
          super(n), (this.snapshot = t), eg(this, n);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function r0(e, n) {
        const t = (function L8(e, n) {
            const o = new Wu([], {}, {}, "", {}, K, n, null, {});
            return new o0("", new qn(o, []));
          })(0, n),
          r = new Bt([new qo("", {})]),
          i = new Bt({}),
          s = new Bt({}),
          o = new Bt({}),
          a = new Bt(""),
          l = new ls(r, i, o, a, s, K, n, t.root);
        return (l.snapshot = t.root), new n0(new qn(l, []), t);
      }
      class ls {
        constructor(n, t, r, i, s, o, a, l) {
          (this.urlSubject = n),
            (this.paramsSubject = t),
            (this.queryParamsSubject = r),
            (this.fragmentSubject = i),
            (this.dataSubject = s),
            (this.outlet = o),
            (this.component = a),
            (this._futureSnapshot = l),
            (this.title =
              this.dataSubject?.pipe(ie((u) => u[Wo])) ?? k(void 0)),
            (this.url = n),
            (this.params = t),
            (this.queryParams = r),
            (this.fragment = i),
            (this.data = s);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(ie((n) => is(n)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(ie((n) => is(n)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function s0(e, n = "emptyOnly") {
        const t = e.pathFromRoot;
        let r = 0;
        if ("always" !== n)
          for (r = t.length - 1; r >= 1; ) {
            const i = t[r],
              s = t[r - 1];
            if (i.routeConfig && "" === i.routeConfig.path) r--;
            else {
              if (s.component) break;
              r--;
            }
          }
        return (function k8(e) {
          return e.reduce(
            (n, t) => ({
              params: { ...n.params, ...t.params },
              data: { ...n.data, ...t.data },
              resolve: {
                ...t.data,
                ...n.resolve,
                ...t.routeConfig?.data,
                ...t._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(t.slice(r));
      }
      class Wu {
        get title() {
          return this.data?.[Wo];
        }
        constructor(n, t, r, i, s, o, a, l, u) {
          (this.url = n),
            (this.params = t),
            (this.queryParams = r),
            (this.fragment = i),
            (this.data = s),
            (this.outlet = o),
            (this.component = a),
            (this.routeConfig = l),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = is(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = is(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((r) => r.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class o0 extends t0 {
        constructor(n, t) {
          super(t), (this.url = n), eg(this, t);
        }
        toString() {
          return a0(this._root);
        }
      }
      function eg(e, n) {
        (n.value._routerState = e), n.children.forEach((t) => eg(e, t));
      }
      function a0(e) {
        const n =
          e.children.length > 0 ? ` { ${e.children.map(a0).join(", ")} } ` : "";
        return `${e.value}${n}`;
      }
      function tg(e) {
        if (e.snapshot) {
          const n = e.snapshot,
            t = e._futureSnapshot;
          (e.snapshot = t),
            Tn(n.queryParams, t.queryParams) ||
              e.queryParamsSubject.next(t.queryParams),
            n.fragment !== t.fragment && e.fragmentSubject.next(t.fragment),
            Tn(n.params, t.params) || e.paramsSubject.next(t.params),
            (function Jj(e, n) {
              if (e.length !== n.length) return !1;
              for (let t = 0; t < e.length; ++t) if (!Tn(e[t], n[t])) return !1;
              return !0;
            })(n.url, t.url) || e.urlSubject.next(t.url),
            Tn(n.data, t.data) || e.dataSubject.next(t.data);
        } else
          (e.snapshot = e._futureSnapshot),
            e.dataSubject.next(e._futureSnapshot.data);
      }
      function ng(e, n) {
        const t =
          Tn(e.params, n.params) &&
          (function r8(e, n) {
            return (
              Yr(e, n) && e.every((t, r) => Tn(t.parameters, n[r].parameters))
            );
          })(e.url, n.url);
        return (
          t &&
          !(!e.parent != !n.parent) &&
          (!e.parent || ng(e.parent, n.parent))
        );
      }
      let rg = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = K),
              (this.activateEvents = new we()),
              (this.deactivateEvents = new we()),
              (this.attachEvents = new we()),
              (this.detachEvents = new we()),
              (this.parentContexts = T(ea)),
              (this.location = T(sn)),
              (this.changeDetector = T(wo)),
              (this.environmentInjector = T(Rt)),
              (this.inputBinder = T(qu, { optional: !0 })),
              (this.supportsBindingToComponentInputs = !0);
          }
          get activatedComponentRef() {
            return this.activated;
          }
          ngOnChanges(t) {
            if (t.name) {
              const { firstChange: r, previousValue: i } = t.name;
              if (r) return;
              this.isTrackedInParentContexts(i) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(i)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name),
              this.inputBinder?.unsubscribeFromRouteData(this);
          }
          isTrackedInParentContexts(t) {
            return this.parentContexts.getContext(t)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const t = this.parentContexts.getContext(this.name);
            t?.route &&
              (t.attachRef
                ? this.attach(t.attachRef, t.route)
                : this.activateWith(t.route, t.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new D(4012, !1);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new D(4012, !1);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new D(4012, !1);
            this.location.detach();
            const t = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(t.instance),
              t
            );
          }
          attach(t, r) {
            (this.activated = t),
              (this._activatedRoute = r),
              this.location.insert(t.hostView),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.attachEvents.emit(t.instance);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, r) {
            if (this.isActivated) throw new D(4013, !1);
            this._activatedRoute = t;
            const i = this.location,
              o = t.snapshot.component,
              a = this.parentContexts.getOrCreateContext(this.name).children,
              l = new V8(t, a, i.injector);
            (this.activated = i.createComponent(o, {
              index: i.length,
              injector: l,
              environmentInjector: r ?? this.environmentInjector,
            })),
              this.changeDetector.markForCheck(),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.activateEvents.emit(this.activated.instance);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵdir = F({
            type: e,
            selectors: [["router-outlet"]],
            inputs: { name: "name" },
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [zt],
          }));
        }
        return e;
      })();
      class V8 {
        constructor(n, t, r) {
          (this.route = n), (this.childContexts = t), (this.parent = r);
        }
        get(n, t) {
          return n === ls
            ? this.route
            : n === ea
            ? this.childContexts
            : this.parent.get(n, t);
        }
      }
      const qu = new N("");
      let l0 = (() => {
        class e {
          constructor() {
            this.outletDataSubscriptions = new Map();
          }
          bindActivatedRouteToOutletComponent(t) {
            this.unsubscribeFromRouteData(t), this.subscribeToRouteData(t);
          }
          unsubscribeFromRouteData(t) {
            this.outletDataSubscriptions.get(t)?.unsubscribe(),
              this.outletDataSubscriptions.delete(t);
          }
          subscribeToRouteData(t) {
            const { activatedRoute: r } = t,
              i = Hp([r.queryParams, r.params, r.data])
                .pipe(
                  Yt(
                    ([s, o, a], l) => (
                      (a = { ...s, ...o, ...a }),
                      0 === l ? k(a) : Promise.resolve(a)
                    )
                  )
                )
                .subscribe((s) => {
                  if (
                    !t.isActivated ||
                    !t.activatedComponentRef ||
                    t.activatedRoute !== r ||
                    null === r.component
                  )
                    return void this.unsubscribeFromRouteData(t);
                  const o = (function $F(e) {
                    const n = J(e);
                    if (!n) return null;
                    const t = new eo(n);
                    return {
                      get selector() {
                        return t.selector;
                      },
                      get type() {
                        return t.componentType;
                      },
                      get inputs() {
                        return t.inputs;
                      },
                      get outputs() {
                        return t.outputs;
                      },
                      get ngContentSelectors() {
                        return t.ngContentSelectors;
                      },
                      get isStandalone() {
                        return n.standalone;
                      },
                      get isSignal() {
                        return n.signals;
                      },
                    };
                  })(r.component);
                  if (o)
                    for (const { templateName: a } of o.inputs)
                      t.activatedComponentRef.setInput(a, s[a]);
                  else this.unsubscribeFromRouteData(t);
                });
            this.outletDataSubscriptions.set(t, i);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function ta(e, n, t) {
        if (t && e.shouldReuseRoute(n.value, t.value.snapshot)) {
          const r = t.value;
          r._futureSnapshot = n.value;
          const i = (function B8(e, n, t) {
            return n.children.map((r) => {
              for (const i of t.children)
                if (e.shouldReuseRoute(r.value, i.value.snapshot))
                  return ta(e, r, i);
              return ta(e, r);
            });
          })(e, n, t);
          return new qn(r, i);
        }
        {
          if (e.shouldAttach(n.value)) {
            const s = e.retrieve(n.value);
            if (null !== s) {
              const o = s.route;
              return (
                (o.value._futureSnapshot = n.value),
                (o.children = n.children.map((a) => ta(e, a))),
                o
              );
            }
          }
          const r = (function H8(e) {
              return new ls(
                new Bt(e.url),
                new Bt(e.params),
                new Bt(e.queryParams),
                new Bt(e.fragment),
                new Bt(e.data),
                e.outlet,
                e.component,
                e
              );
            })(n.value),
            i = n.children.map((s) => ta(e, s));
          return new qn(r, i);
        }
      }
      const ig = "ngNavigationCancelingError";
      function u0(e, n) {
        const { redirectTo: t, navigationBehaviorOptions: r } = Xr(n)
            ? { redirectTo: n, navigationBehaviorOptions: void 0 }
            : n,
          i = c0(!1, 0, n);
        return (i.url = t), (i.navigationBehaviorOptions = r), i;
      }
      function c0(e, n, t) {
        const r = new Error("NavigationCancelingError: " + (e || ""));
        return (r[ig] = !0), (r.cancellationCode = n), t && (r.url = t), r;
      }
      function d0(e) {
        return e && e[ig];
      }
      let f0 = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = Ue({
            type: e,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [ur],
            decls: 1,
            vars: 0,
            template: function (r, i) {
              1 & r && O(0, "router-outlet");
            },
            dependencies: [rg],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      function sg(e) {
        const n = e.children && e.children.map(sg),
          t = n ? { ...e, children: n } : { ...e };
        return (
          !t.component &&
            !t.loadComponent &&
            (n || t.loadChildren) &&
            t.outlet &&
            t.outlet !== K &&
            (t.component = f0),
          t
        );
      }
      function un(e) {
        return e.outlet || K;
      }
      function na(e) {
        if (!e) return null;
        if (e.routeConfig?._injector) return e.routeConfig._injector;
        for (let n = e.parent; n; n = n.parent) {
          const t = n.routeConfig;
          if (t?._loadedInjector) return t._loadedInjector;
          if (t?._injector) return t._injector;
        }
        return null;
      }
      class Q8 {
        constructor(n, t, r, i, s) {
          (this.routeReuseStrategy = n),
            (this.futureState = t),
            (this.currState = r),
            (this.forwardEvent = i),
            (this.inputBindingEnabled = s);
        }
        activate(n) {
          const t = this.futureState._root,
            r = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, r, n),
            tg(this.futureState.root),
            this.activateChildRoutes(t, r, n);
        }
        deactivateChildRoutes(n, t, r) {
          const i = as(t);
          n.children.forEach((s) => {
            const o = s.value.outlet;
            this.deactivateRoutes(s, i[o], r), delete i[o];
          }),
            Object.values(i).forEach((s) => {
              this.deactivateRouteAndItsChildren(s, r);
            });
        }
        deactivateRoutes(n, t, r) {
          const i = n.value,
            s = t ? t.value : null;
          if (i === s)
            if (i.component) {
              const o = r.getContext(i.outlet);
              o && this.deactivateChildRoutes(n, t, o.children);
            } else this.deactivateChildRoutes(n, t, r);
          else s && this.deactivateRouteAndItsChildren(t, r);
        }
        deactivateRouteAndItsChildren(n, t) {
          n.value.component &&
          this.routeReuseStrategy.shouldDetach(n.value.snapshot)
            ? this.detachAndStoreRouteSubtree(n, t)
            : this.deactivateRouteAndOutlet(n, t);
        }
        detachAndStoreRouteSubtree(n, t) {
          const r = t.getContext(n.value.outlet),
            i = r && n.value.component ? r.children : t,
            s = as(n);
          for (const o of Object.keys(s))
            this.deactivateRouteAndItsChildren(s[o], i);
          if (r && r.outlet) {
            const o = r.outlet.detach(),
              a = r.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, {
              componentRef: o,
              route: n,
              contexts: a,
            });
          }
        }
        deactivateRouteAndOutlet(n, t) {
          const r = t.getContext(n.value.outlet),
            i = r && n.value.component ? r.children : t,
            s = as(n);
          for (const o of Object.keys(s))
            this.deactivateRouteAndItsChildren(s[o], i);
          r &&
            (r.outlet &&
              (r.outlet.deactivate(), r.children.onOutletDeactivated()),
            (r.attachRef = null),
            (r.route = null));
        }
        activateChildRoutes(n, t, r) {
          const i = as(t);
          n.children.forEach((s) => {
            this.activateRoutes(s, i[s.value.outlet], r),
              this.forwardEvent(new x8(s.value.snapshot));
          }),
            n.children.length && this.forwardEvent(new O8(n.value.snapshot));
        }
        activateRoutes(n, t, r) {
          const i = n.value,
            s = t ? t.value : null;
          if ((tg(i), i === s))
            if (i.component) {
              const o = r.getOrCreateContext(i.outlet);
              this.activateChildRoutes(n, t, o.children);
            } else this.activateChildRoutes(n, t, r);
          else if (i.component) {
            const o = r.getOrCreateContext(i.outlet);
            if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
              const a = this.routeReuseStrategy.retrieve(i.snapshot);
              this.routeReuseStrategy.store(i.snapshot, null),
                o.children.onOutletReAttached(a.contexts),
                (o.attachRef = a.componentRef),
                (o.route = a.route.value),
                o.outlet && o.outlet.attach(a.componentRef, a.route.value),
                tg(a.route.value),
                this.activateChildRoutes(n, null, o.children);
            } else {
              const a = na(i.snapshot);
              (o.attachRef = null),
                (o.route = i),
                (o.injector = a),
                o.outlet && o.outlet.activateWith(i, o.injector),
                this.activateChildRoutes(n, null, o.children);
            }
          } else this.activateChildRoutes(n, null, r);
        }
      }
      class h0 {
        constructor(n) {
          (this.path = n), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Ku {
        constructor(n, t) {
          (this.component = n), (this.route = t);
        }
      }
      function Z8(e, n, t) {
        const r = e._root;
        return ra(r, n ? n._root : null, t, [r.value]);
      }
      function us(e, n) {
        const t = Symbol(),
          r = n.get(e, t);
        return r === t
          ? "function" != typeof e ||
            (function iT(e) {
              return null !== ma(e);
            })(e)
            ? n.get(e)
            : e
          : r;
      }
      function ra(
        e,
        n,
        t,
        r,
        i = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const s = as(n);
        return (
          e.children.forEach((o) => {
            (function X8(
              e,
              n,
              t,
              r,
              i = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const s = e.value,
                o = n ? n.value : null,
                a = t ? t.getContext(e.value.outlet) : null;
              if (o && s.routeConfig === o.routeConfig) {
                const l = (function J8(e, n, t) {
                  if ("function" == typeof t) return t(e, n);
                  switch (t) {
                    case "pathParamsChange":
                      return !Yr(e.url, n.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !Yr(e.url, n.url) || !Tn(e.queryParams, n.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !ng(e, n) || !Tn(e.queryParams, n.queryParams);
                    default:
                      return !ng(e, n);
                  }
                })(o, s, s.routeConfig.runGuardsAndResolvers);
                l
                  ? i.canActivateChecks.push(new h0(r))
                  : ((s.data = o.data), (s._resolvedData = o._resolvedData)),
                  ra(e, n, s.component ? (a ? a.children : null) : t, r, i),
                  l &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    i.canDeactivateChecks.push(new Ku(a.outlet.component, o));
              } else
                o && ia(n, a, i),
                  i.canActivateChecks.push(new h0(r)),
                  ra(e, null, s.component ? (a ? a.children : null) : t, r, i);
            })(o, s[o.value.outlet], t, r.concat([o.value]), i),
              delete s[o.value.outlet];
          }),
          Object.entries(s).forEach(([o, a]) => ia(a, t.getContext(o), i)),
          i
        );
      }
      function ia(e, n, t) {
        const r = as(e),
          i = e.value;
        Object.entries(r).forEach(([s, o]) => {
          ia(o, i.component ? (n ? n.children.getContext(s) : null) : n, t);
        }),
          t.canDeactivateChecks.push(
            new Ku(
              i.component && n && n.outlet && n.outlet.isActivated
                ? n.outlet.component
                : null,
              i
            )
          );
      }
      function sa(e) {
        return "function" == typeof e;
      }
      function p0(e) {
        return e instanceof Lu || "EmptyError" === e?.name;
      }
      const Qu = Symbol("INITIAL_VALUE");
      function cs() {
        return Yt((e) =>
          Hp(
            e.map((n) =>
              n.pipe(
                rs(1),
                (function zj(...e) {
                  const n = ys(e);
                  return xe((t, r) => {
                    (n ? Up(e, t, n) : Up(e, t)).subscribe(r);
                  });
                })(Qu)
              )
            )
          ).pipe(
            ie((n) => {
              for (const t of n)
                if (!0 !== t) {
                  if (t === Qu) return Qu;
                  if (!1 === t || t instanceof ss) return t;
                }
              return !0;
            }),
            Wn((n) => n !== Qu),
            rs(1)
          )
        );
      }
      function g0(e) {
        return (function oI(...e) {
          return Dg(e);
        })(
          rt((n) => {
            if (Xr(n)) throw u0(0, n);
          }),
          ie((n) => !0 === n)
        );
      }
      class Zu {
        constructor(n) {
          this.segmentGroup = n || null;
        }
      }
      class m0 {
        constructor(n) {
          this.urlTree = n;
        }
      }
      function ds(e) {
        return Go(new Zu(e));
      }
      function y0(e) {
        return Go(new m0(e));
      }
      class _4 {
        constructor(n, t) {
          (this.urlSerializer = n), (this.urlTree = t);
        }
        noMatchError(n) {
          return new D(4002, !1);
        }
        lineralizeSegments(n, t) {
          let r = [],
            i = t.root;
          for (;;) {
            if (((r = r.concat(i.segments)), 0 === i.numberOfChildren))
              return k(r);
            if (i.numberOfChildren > 1 || !i.children[K])
              return Go(new D(4e3, !1));
            i = i.children[K];
          }
        }
        applyRedirectCommands(n, t, r) {
          return this.applyRedirectCreateUrlTree(
            t,
            this.urlSerializer.parse(t),
            n,
            r
          );
        }
        applyRedirectCreateUrlTree(n, t, r, i) {
          const s = this.createSegmentGroup(n, t.root, r, i);
          return new ss(
            s,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(n, t) {
          const r = {};
          return (
            Object.entries(n).forEach(([i, s]) => {
              if ("string" == typeof s && s.startsWith(":")) {
                const a = s.substring(1);
                r[i] = t[a];
              } else r[i] = s;
            }),
            r
          );
        }
        createSegmentGroup(n, t, r, i) {
          const s = this.createSegments(n, t.segments, r, i);
          let o = {};
          return (
            Object.entries(t.children).forEach(([a, l]) => {
              o[a] = this.createSegmentGroup(n, l, r, i);
            }),
            new de(s, o)
          );
        }
        createSegments(n, t, r, i) {
          return t.map((s) =>
            s.path.startsWith(":")
              ? this.findPosParam(n, s, i)
              : this.findOrReturn(s, r)
          );
        }
        findPosParam(n, t, r) {
          const i = r[t.path.substring(1)];
          if (!i) throw new D(4001, !1);
          return i;
        }
        findOrReturn(n, t) {
          let r = 0;
          for (const i of t) {
            if (i.path === n.path) return t.splice(r), i;
            r++;
          }
          return n;
        }
      }
      const og = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function D4(e, n, t, r, i) {
        const s = ag(e, n, t);
        return s.matched
          ? ((r = (function $8(e, n) {
              return (
                e.providers &&
                  !e._injector &&
                  (e._injector = Pf(e.providers, n, `Route: ${e.path}`)),
                e._injector ?? n
              );
            })(n, r)),
            (function m4(e, n, t, r) {
              const i = n.canMatch;
              return i && 0 !== i.length
                ? k(
                    i.map((o) => {
                      const a = us(o, e);
                      return Cr(
                        (function s4(e) {
                          return e && sa(e.canMatch);
                        })(a)
                          ? a.canMatch(n, t)
                          : e.runInContext(() => a(n, t))
                      );
                    })
                  ).pipe(cs(), g0())
                : k(!0);
            })(r, n, t).pipe(ie((o) => (!0 === o ? s : { ...og }))))
          : k(s);
      }
      function ag(e, n, t) {
        if ("" === n.path)
          return "full" === n.pathMatch && (e.hasChildren() || t.length > 0)
            ? { ...og }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: t,
                parameters: {},
                positionalParamSegments: {},
              };
        const i = (n.matcher || Xj)(t, e, n);
        if (!i) return { ...og };
        const s = {};
        Object.entries(i.posParams ?? {}).forEach(([a, l]) => {
          s[a] = l.path;
        });
        const o =
          i.consumed.length > 0
            ? { ...s, ...i.consumed[i.consumed.length - 1].parameters }
            : s;
        return {
          matched: !0,
          consumedSegments: i.consumed,
          remainingSegments: t.slice(i.consumed.length),
          parameters: o,
          positionalParamSegments: i.posParams ?? {},
        };
      }
      function v0(e, n, t, r) {
        return t.length > 0 &&
          (function E4(e, n, t) {
            return t.some((r) => Yu(e, n, r) && un(r) !== K);
          })(e, t, r)
          ? {
              segmentGroup: new de(n, w4(r, new de(t, e.children))),
              slicedSegments: [],
            }
          : 0 === t.length &&
            (function b4(e, n, t) {
              return t.some((r) => Yu(e, n, r));
            })(e, t, r)
          ? {
              segmentGroup: new de(e.segments, C4(e, 0, t, r, e.children)),
              slicedSegments: t,
            }
          : { segmentGroup: new de(e.segments, e.children), slicedSegments: t };
      }
      function C4(e, n, t, r, i) {
        const s = {};
        for (const o of r)
          if (Yu(e, t, o) && !i[un(o)]) {
            const a = new de([], {});
            s[un(o)] = a;
          }
        return { ...i, ...s };
      }
      function w4(e, n) {
        const t = {};
        t[K] = n;
        for (const r of e)
          if ("" === r.path && un(r) !== K) {
            const i = new de([], {});
            t[un(r)] = i;
          }
        return t;
      }
      function Yu(e, n, t) {
        return (
          (!(e.hasChildren() || n.length > 0) || "full" !== t.pathMatch) &&
          "" === t.path
        );
      }
      class M4 {
        constructor(n, t, r, i, s, o, a) {
          (this.injector = n),
            (this.configLoader = t),
            (this.rootComponentType = r),
            (this.config = i),
            (this.urlTree = s),
            (this.paramsInheritanceStrategy = o),
            (this.urlSerializer = a),
            (this.allowRedirects = !0),
            (this.applyRedirects = new _4(this.urlSerializer, this.urlTree));
        }
        noMatchError(n) {
          return new D(4002, !1);
        }
        recognize() {
          const n = v0(this.urlTree.root, [], [], this.config).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            n,
            K
          ).pipe(
            Zr((t) => {
              if (t instanceof m0)
                return (
                  (this.allowRedirects = !1),
                  (this.urlTree = t.urlTree),
                  this.match(t.urlTree)
                );
              throw t instanceof Zu ? this.noMatchError(t) : t;
            }),
            ie((t) => {
              const r = new Wu(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  K,
                  this.rootComponentType,
                  null,
                  {}
                ),
                i = new qn(r, t),
                s = new o0("", i),
                o = (function v8(e, n, t = null, r = null) {
                  return qS(WS(e), n, t, r);
                })(r, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (o.queryParams = this.urlTree.queryParams),
                (s.url = this.urlSerializer.serialize(o)),
                this.inheritParamsAndData(s._root),
                { state: s, tree: o }
              );
            })
          );
        }
        match(n) {
          return this.processSegmentGroup(
            this.injector,
            this.config,
            n.root,
            K
          ).pipe(
            Zr((r) => {
              throw r instanceof Zu ? this.noMatchError(r) : r;
            })
          );
        }
        inheritParamsAndData(n) {
          const t = n.value,
            r = s0(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(r.params)),
            (t.data = Object.freeze(r.data)),
            n.children.forEach((i) => this.inheritParamsAndData(i));
        }
        processSegmentGroup(n, t, r, i) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.processChildren(n, t, r)
            : this.processSegment(n, t, r, r.segments, i, !0);
        }
        processChildren(n, t, r) {
          const i = [];
          for (const s of Object.keys(r.children))
            "primary" === s ? i.unshift(s) : i.push(s);
          return Fe(i).pipe(
            es((s) => {
              const o = r.children[s],
                a = (function q8(e, n) {
                  const t = e.filter((r) => un(r) === n);
                  return t.push(...e.filter((r) => un(r) !== n)), t;
                })(t, s);
              return this.processSegmentGroup(n, a, o, s);
            }),
            (function qj(e, n) {
              return xe(
                (function Wj(e, n, t, r, i) {
                  return (s, o) => {
                    let a = t,
                      l = n,
                      u = 0;
                    s.subscribe(
                      Oe(
                        o,
                        (c) => {
                          const d = u++;
                          (l = a ? e(l, c, d) : ((a = !0), c)), r && o.next(l);
                        },
                        i &&
                          (() => {
                            a && o.next(l), o.complete();
                          })
                      )
                    );
                  };
                })(e, n, arguments.length >= 2, !0)
              );
            })((s, o) => (s.push(...o), s)),
            ku(null),
            (function Kj(e, n) {
              const t = arguments.length >= 2;
              return (r) =>
                r.pipe(
                  e ? Wn((i, s) => e(i, s, r)) : Qn,
                  zp(1),
                  t ? ku(n) : PS(() => new Lu())
                );
            })(),
            je((s) => {
              if (null === s) return ds(r);
              const o = _0(s);
              return (
                (function A4(e) {
                  e.sort((n, t) =>
                    n.value.outlet === K
                      ? -1
                      : t.value.outlet === K
                      ? 1
                      : n.value.outlet.localeCompare(t.value.outlet)
                  );
                })(o),
                k(o)
              );
            })
          );
        }
        processSegment(n, t, r, i, s, o) {
          return Fe(t).pipe(
            es((a) =>
              this.processSegmentAgainstRoute(
                a._injector ?? n,
                t,
                a,
                r,
                i,
                s,
                o
              ).pipe(
                Zr((l) => {
                  if (l instanceof Zu) return k(null);
                  throw l;
                })
              )
            ),
            Qr((a) => !!a),
            Zr((a) => {
              if (p0(a))
                return (function I4(e, n, t) {
                  return 0 === n.length && !e.children[t];
                })(r, i, s)
                  ? k([])
                  : ds(r);
              throw a;
            })
          );
        }
        processSegmentAgainstRoute(n, t, r, i, s, o, a) {
          return (function S4(e, n, t, r) {
            return (
              !!(un(e) === r || (r !== K && Yu(n, t, e))) &&
              ("**" === e.path || ag(n, e, t).matched)
            );
          })(r, i, s, o)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(n, i, r, s, o, a)
              : a && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(n, i, t, r, s, o)
              : ds(i)
            : ds(i);
        }
        expandSegmentAgainstRouteUsingRedirect(n, t, r, i, s, o) {
          return "**" === i.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(n, r, i, o)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                n,
                t,
                r,
                i,
                s,
                o
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(n, t, r, i) {
          const s = this.applyRedirects.applyRedirectCommands(
            [],
            r.redirectTo,
            {}
          );
          return r.redirectTo.startsWith("/")
            ? y0(s)
            : this.applyRedirects.lineralizeSegments(r, s).pipe(
                je((o) => {
                  const a = new de(o, {});
                  return this.processSegment(n, t, a, o, i, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(n, t, r, i, s, o) {
          const {
            matched: a,
            consumedSegments: l,
            remainingSegments: u,
            positionalParamSegments: c,
          } = ag(t, i, s);
          if (!a) return ds(t);
          const d = this.applyRedirects.applyRedirectCommands(
            l,
            i.redirectTo,
            c
          );
          return i.redirectTo.startsWith("/")
            ? y0(d)
            : this.applyRedirects
                .lineralizeSegments(i, d)
                .pipe(
                  je((f) => this.processSegment(n, r, t, f.concat(u), o, !1))
                );
        }
        matchSegmentAgainstRoute(n, t, r, i, s, o) {
          let a;
          if ("**" === r.path) {
            const l = i.length > 0 ? FS(i).parameters : {};
            (a = k({
              snapshot: new Wu(
                i,
                l,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                D0(r),
                un(r),
                r.component ?? r._loadedComponent ?? null,
                r,
                C0(r)
              ),
              consumedSegments: [],
              remainingSegments: [],
            })),
              (t.children = {});
          } else
            a = D4(t, r, i, n).pipe(
              ie(
                ({
                  matched: l,
                  consumedSegments: u,
                  remainingSegments: c,
                  parameters: d,
                }) =>
                  l
                    ? {
                        snapshot: new Wu(
                          u,
                          d,
                          Object.freeze({ ...this.urlTree.queryParams }),
                          this.urlTree.fragment,
                          D0(r),
                          un(r),
                          r.component ?? r._loadedComponent ?? null,
                          r,
                          C0(r)
                        ),
                        consumedSegments: u,
                        remainingSegments: c,
                      }
                    : null
              )
            );
          return a.pipe(
            Yt((l) =>
              null === l
                ? ds(t)
                : this.getChildConfig((n = r._injector ?? n), r, i).pipe(
                    Yt(({ routes: u }) => {
                      const c = r._loadedInjector ?? n,
                        {
                          snapshot: d,
                          consumedSegments: f,
                          remainingSegments: h,
                        } = l,
                        { segmentGroup: p, slicedSegments: g } = v0(t, f, h, u);
                      if (0 === g.length && p.hasChildren())
                        return this.processChildren(c, u, p).pipe(
                          ie((C) => (null === C ? null : [new qn(d, C)]))
                        );
                      if (0 === u.length && 0 === g.length)
                        return k([new qn(d, [])]);
                      const v = un(r) === s;
                      return this.processSegment(
                        c,
                        u,
                        p,
                        g,
                        v ? K : s,
                        !0
                      ).pipe(ie((C) => [new qn(d, C)]));
                    })
                  )
            )
          );
        }
        getChildConfig(n, t, r) {
          return t.children
            ? k({ routes: t.children, injector: n })
            : t.loadChildren
            ? void 0 !== t._loadedRoutes
              ? k({ routes: t._loadedRoutes, injector: t._loadedInjector })
              : (function g4(e, n, t, r) {
                  const i = n.canLoad;
                  return void 0 === i || 0 === i.length
                    ? k(!0)
                    : k(
                        i.map((o) => {
                          const a = us(o, e);
                          return Cr(
                            (function t4(e) {
                              return e && sa(e.canLoad);
                            })(a)
                              ? a.canLoad(n, t)
                              : e.runInContext(() => a(n, t))
                          );
                        })
                      ).pipe(cs(), g0());
                })(n, t, r).pipe(
                  je((i) =>
                    i
                      ? this.configLoader.loadChildren(n, t).pipe(
                          rt((s) => {
                            (t._loadedRoutes = s.routes),
                              (t._loadedInjector = s.injector);
                          })
                        )
                      : (function v4(e) {
                          return Go(c0(!1, 3));
                        })()
                  )
                )
            : k({ routes: [], injector: n });
        }
      }
      function N4(e) {
        const n = e.value.routeConfig;
        return n && "" === n.path;
      }
      function _0(e) {
        const n = [],
          t = new Set();
        for (const r of e) {
          if (!N4(r)) {
            n.push(r);
            continue;
          }
          const i = n.find((s) => r.value.routeConfig === s.value.routeConfig);
          void 0 !== i ? (i.children.push(...r.children), t.add(i)) : n.push(r);
        }
        for (const r of t) {
          const i = _0(r.children);
          n.push(new qn(r.value, i));
        }
        return n.filter((r) => !t.has(r));
      }
      function D0(e) {
        return e.data || {};
      }
      function C0(e) {
        return e.resolve || {};
      }
      function w0(e) {
        return "string" == typeof e.title || null === e.title;
      }
      function lg(e) {
        return Yt((n) => {
          const t = e(n);
          return t ? Fe(t).pipe(ie(() => n)) : k(n);
        });
      }
      const fs = new N("ROUTES");
      let ug = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = T(XC));
          }
          loadComponent(t) {
            if (this.componentLoaders.get(t))
              return this.componentLoaders.get(t);
            if (t._loadedComponent) return k(t._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(t);
            const r = Cr(t.loadComponent()).pipe(
                ie(E0),
                rt((s) => {
                  this.onLoadEndListener && this.onLoadEndListener(t),
                    (t._loadedComponent = s);
                }),
                Uo(() => {
                  this.componentLoaders.delete(t);
                })
              ),
              i = new OS(r, () => new gt()).pipe($p());
            return this.componentLoaders.set(t, i), i;
          }
          loadChildren(t, r) {
            if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
            if (r._loadedRoutes)
              return k({
                routes: r._loadedRoutes,
                injector: r._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(r);
            const s = (function k4(e, n, t, r) {
                return Cr(e.loadChildren()).pipe(
                  ie(E0),
                  je((i) =>
                    i instanceof aC || Array.isArray(i)
                      ? k(i)
                      : Fe(n.compileModuleAsync(i))
                  ),
                  ie((i) => {
                    r && r(e);
                    let s,
                      o,
                      a = !1;
                    return (
                      Array.isArray(i)
                        ? ((o = i), !0)
                        : ((s = i.create(t).injector),
                          (o = s
                            .get(fs, [], { optional: !0, self: !0 })
                            .flat())),
                      { routes: o.map(sg), injector: s }
                    );
                  })
                );
              })(r, this.compiler, t, this.onLoadEndListener).pipe(
                Uo(() => {
                  this.childrenLoaders.delete(r);
                })
              ),
              o = new OS(s, () => new gt()).pipe($p());
            return this.childrenLoaders.set(r, o), o;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      function E0(e) {
        return (function V4(e) {
          return e && "object" == typeof e && "default" in e;
        })(e)
          ? e.default
          : e;
      }
      let Xu = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new gt()),
              (this.transitionAbortSubject = new gt()),
              (this.configLoader = T(ug)),
              (this.environmentInjector = T(Rt)),
              (this.urlSerializer = T(Ko)),
              (this.rootContexts = T(ea)),
              (this.inputBindingEnabled = null !== T(qu, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => k(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (i) =>
                this.events.next(new N8(i))),
              (this.configLoader.onLoadStartListener = (i) =>
                this.events.next(new A8(i)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(t) {
            const r = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...t, id: r });
          }
          setupNavigations(t, r, i) {
            return (
              (this.transitions = new Bt({
                id: 0,
                currentUrlTree: r,
                currentRawUrl: r,
                currentBrowserUrl: r,
                extractedUrl: t.urlHandlingStrategy.extract(r),
                urlAfterRedirects: t.urlHandlingStrategy.extract(r),
                rawUrl: r,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: Xo,
                restoredState: null,
                currentSnapshot: i.snapshot,
                targetSnapshot: null,
                currentRouterState: i,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                Wn((s) => 0 !== s.id),
                ie((s) => ({
                  ...s,
                  extractedUrl: t.urlHandlingStrategy.extract(s.rawUrl),
                })),
                Yt((s) => {
                  this.currentTransition = s;
                  let o = !1,
                    a = !1;
                  return k(s).pipe(
                    rt((l) => {
                      this.currentNavigation = {
                        id: l.id,
                        initialUrl: l.rawUrl,
                        extractedUrl: l.extractedUrl,
                        trigger: l.source,
                        extras: l.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null,
                            }
                          : null,
                      };
                    }),
                    Yt((l) => {
                      const u = l.currentBrowserUrl.toString(),
                        c =
                          !t.navigated ||
                          l.extractedUrl.toString() !== u ||
                          u !== l.currentUrlTree.toString();
                      if (
                        !c &&
                        "reload" !==
                          (l.extras.onSameUrlNavigation ??
                            t.onSameUrlNavigation)
                      ) {
                        const f = "";
                        return (
                          this.events.next(
                            new os(
                              l.id,
                              this.urlSerializer.serialize(l.rawUrl),
                              f,
                              0
                            )
                          ),
                          l.resolve(null),
                          dn
                        );
                      }
                      if (t.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
                        return k(l).pipe(
                          Yt((f) => {
                            const h = this.transitions?.getValue();
                            return (
                              this.events.next(
                                new zu(
                                  f.id,
                                  this.urlSerializer.serialize(f.extractedUrl),
                                  f.source,
                                  f.restoredState
                                )
                              ),
                              h !== this.transitions?.getValue()
                                ? dn
                                : Promise.resolve(f)
                            );
                          }),
                          (function R4(e, n, t, r, i, s) {
                            return je((o) =>
                              (function T4(e, n, t, r, i, s, o = "emptyOnly") {
                                return new M4(e, n, t, r, i, o, s).recognize();
                              })(e, n, t, r, o.extractedUrl, i, s).pipe(
                                ie(({ state: a, tree: l }) => ({
                                  ...o,
                                  targetSnapshot: a,
                                  urlAfterRedirects: l,
                                }))
                              )
                            );
                          })(
                            this.environmentInjector,
                            this.configLoader,
                            this.rootComponentType,
                            t.config,
                            this.urlSerializer,
                            t.paramsInheritanceStrategy
                          ),
                          rt((f) => {
                            (s.targetSnapshot = f.targetSnapshot),
                              (s.urlAfterRedirects = f.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: f.urlAfterRedirects,
                              });
                            const h = new JS(
                              f.id,
                              this.urlSerializer.serialize(f.extractedUrl),
                              this.urlSerializer.serialize(f.urlAfterRedirects),
                              f.targetSnapshot
                            );
                            this.events.next(h);
                          })
                        );
                      if (
                        c &&
                        t.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)
                      ) {
                        const {
                            id: f,
                            extractedUrl: h,
                            source: p,
                            restoredState: g,
                            extras: v,
                          } = l,
                          C = new zu(f, this.urlSerializer.serialize(h), p, g);
                        this.events.next(C);
                        const _ = r0(0, this.rootComponentType).snapshot;
                        return (
                          (this.currentTransition = s =
                            {
                              ...l,
                              targetSnapshot: _,
                              urlAfterRedirects: h,
                              extras: {
                                ...v,
                                skipLocationChange: !1,
                                replaceUrl: !1,
                              },
                            }),
                          k(s)
                        );
                      }
                      {
                        const f = "";
                        return (
                          this.events.next(
                            new os(
                              l.id,
                              this.urlSerializer.serialize(l.extractedUrl),
                              f,
                              1
                            )
                          ),
                          l.resolve(null),
                          dn
                        );
                      }
                    }),
                    rt((l) => {
                      const u = new S8(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                        l.targetSnapshot
                      );
                      this.events.next(u);
                    }),
                    ie(
                      (l) => (
                        (this.currentTransition = s =
                          {
                            ...l,
                            guards: Z8(
                              l.targetSnapshot,
                              l.currentSnapshot,
                              this.rootContexts
                            ),
                          }),
                        s
                      )
                    ),
                    (function a4(e, n) {
                      return je((t) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: i,
                          guards: {
                            canActivateChecks: s,
                            canDeactivateChecks: o,
                          },
                        } = t;
                        return 0 === o.length && 0 === s.length
                          ? k({ ...t, guardsResult: !0 })
                          : (function l4(e, n, t, r) {
                              return Fe(e).pipe(
                                je((i) =>
                                  (function p4(e, n, t, r, i) {
                                    const s =
                                      n && n.routeConfig
                                        ? n.routeConfig.canDeactivate
                                        : null;
                                    return s && 0 !== s.length
                                      ? k(
                                          s.map((a) => {
                                            const l = na(n) ?? i,
                                              u = us(a, l);
                                            return Cr(
                                              (function i4(e) {
                                                return e && sa(e.canDeactivate);
                                              })(u)
                                                ? u.canDeactivate(e, n, t, r)
                                                : l.runInContext(() =>
                                                    u(e, n, t, r)
                                                  )
                                            ).pipe(Qr());
                                          })
                                        ).pipe(cs())
                                      : k(!0);
                                  })(i.component, i.route, t, n, r)
                                ),
                                Qr((i) => !0 !== i, !0)
                              );
                            })(o, r, i, e).pipe(
                              je((a) =>
                                a &&
                                (function e4(e) {
                                  return "boolean" == typeof e;
                                })(a)
                                  ? (function u4(e, n, t, r) {
                                      return Fe(n).pipe(
                                        es((i) =>
                                          Up(
                                            (function d4(e, n) {
                                              return (
                                                null !== e && n && n(new R8(e)),
                                                k(!0)
                                              );
                                            })(i.route.parent, r),
                                            (function c4(e, n) {
                                              return (
                                                null !== e && n && n(new P8(e)),
                                                k(!0)
                                              );
                                            })(i.route, r),
                                            (function h4(e, n, t) {
                                              const r = n[n.length - 1],
                                                s = n
                                                  .slice(0, n.length - 1)
                                                  .reverse()
                                                  .map((o) =>
                                                    (function Y8(e) {
                                                      const n = e.routeConfig
                                                        ? e.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return n && 0 !== n.length
                                                        ? { node: e, guards: n }
                                                        : null;
                                                    })(o)
                                                  )
                                                  .filter((o) => null !== o)
                                                  .map((o) =>
                                                    RS(() =>
                                                      k(
                                                        o.guards.map((l) => {
                                                          const u =
                                                              na(o.node) ?? t,
                                                            c = us(l, u);
                                                          return Cr(
                                                            (function r4(e) {
                                                              return (
                                                                e &&
                                                                sa(
                                                                  e.canActivateChild
                                                                )
                                                              );
                                                            })(c)
                                                              ? c.canActivateChild(
                                                                  r,
                                                                  e
                                                                )
                                                              : u.runInContext(
                                                                  () => c(r, e)
                                                                )
                                                          ).pipe(Qr());
                                                        })
                                                      ).pipe(cs())
                                                    )
                                                  );
                                              return k(s).pipe(cs());
                                            })(e, i.path, t),
                                            (function f4(e, n, t) {
                                              const r = n.routeConfig
                                                ? n.routeConfig.canActivate
                                                : null;
                                              if (!r || 0 === r.length)
                                                return k(!0);
                                              const i = r.map((s) =>
                                                RS(() => {
                                                  const o = na(n) ?? t,
                                                    a = us(s, o);
                                                  return Cr(
                                                    (function n4(e) {
                                                      return (
                                                        e && sa(e.canActivate)
                                                      );
                                                    })(a)
                                                      ? a.canActivate(n, e)
                                                      : o.runInContext(() =>
                                                          a(n, e)
                                                        )
                                                  ).pipe(Qr());
                                                })
                                              );
                                              return k(i).pipe(cs());
                                            })(e, i.route, t)
                                          )
                                        ),
                                        Qr((i) => !0 !== i, !0)
                                      );
                                    })(r, s, e, n)
                                  : k(a)
                              ),
                              ie((a) => ({ ...t, guardsResult: a }))
                            );
                      });
                    })(this.environmentInjector, (l) => this.events.next(l)),
                    rt((l) => {
                      if (
                        ((s.guardsResult = l.guardsResult), Xr(l.guardsResult))
                      )
                        throw u0(0, l.guardsResult);
                      const u = new I8(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                        l.targetSnapshot,
                        !!l.guardsResult
                      );
                      this.events.next(u);
                    }),
                    Wn(
                      (l) =>
                        !!l.guardsResult ||
                        (this.cancelNavigationTransition(l, "", 3), !1)
                    ),
                    lg((l) => {
                      if (l.guards.canActivateChecks.length)
                        return k(l).pipe(
                          rt((u) => {
                            const c = new T8(
                              u.id,
                              this.urlSerializer.serialize(u.extractedUrl),
                              this.urlSerializer.serialize(u.urlAfterRedirects),
                              u.targetSnapshot
                            );
                            this.events.next(c);
                          }),
                          Yt((u) => {
                            let c = !1;
                            return k(u).pipe(
                              (function O4(e, n) {
                                return je((t) => {
                                  const {
                                    targetSnapshot: r,
                                    guards: { canActivateChecks: i },
                                  } = t;
                                  if (!i.length) return k(t);
                                  let s = 0;
                                  return Fe(i).pipe(
                                    es((o) =>
                                      (function P4(e, n, t, r) {
                                        const i = e.routeConfig,
                                          s = e._resolve;
                                        return (
                                          void 0 !== i?.title &&
                                            !w0(i) &&
                                            (s[Wo] = i.title),
                                          (function x4(e, n, t, r) {
                                            const i = (function F4(e) {
                                              return [
                                                ...Object.keys(e),
                                                ...Object.getOwnPropertySymbols(
                                                  e
                                                ),
                                              ];
                                            })(e);
                                            if (0 === i.length) return k({});
                                            const s = {};
                                            return Fe(i).pipe(
                                              je((o) =>
                                                (function L4(e, n, t, r) {
                                                  const i = na(n) ?? r,
                                                    s = us(e, i);
                                                  return Cr(
                                                    s.resolve
                                                      ? s.resolve(n, t)
                                                      : i.runInContext(() =>
                                                          s(n, t)
                                                        )
                                                  );
                                                })(e[o], n, t, r).pipe(
                                                  Qr(),
                                                  rt((a) => {
                                                    s[o] = a;
                                                  })
                                                )
                                              ),
                                              zp(1),
                                              (function Qj(e) {
                                                return ie(() => e);
                                              })(s),
                                              Zr((o) => (p0(o) ? dn : Go(o)))
                                            );
                                          })(s, e, n, r).pipe(
                                            ie(
                                              (o) => (
                                                (e._resolvedData = o),
                                                (e.data = s0(e, t).resolve),
                                                i &&
                                                  w0(i) &&
                                                  (e.data[Wo] = i.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(o.route, r, e, n)
                                    ),
                                    rt(() => s++),
                                    zp(1),
                                    je((o) => (s === i.length ? k(t) : dn))
                                  );
                                });
                              })(
                                t.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              rt({
                                next: () => (c = !0),
                                complete: () => {
                                  c ||
                                    this.cancelNavigationTransition(u, "", 2);
                                },
                              })
                            );
                          }),
                          rt((u) => {
                            const c = new M8(
                              u.id,
                              this.urlSerializer.serialize(u.extractedUrl),
                              this.urlSerializer.serialize(u.urlAfterRedirects),
                              u.targetSnapshot
                            );
                            this.events.next(c);
                          })
                        );
                    }),
                    lg((l) => {
                      const u = (c) => {
                        const d = [];
                        c.routeConfig?.loadComponent &&
                          !c.routeConfig._loadedComponent &&
                          d.push(
                            this.configLoader.loadComponent(c.routeConfig).pipe(
                              rt((f) => {
                                c.component = f;
                              }),
                              ie(() => {})
                            )
                          );
                        for (const f of c.children) d.push(...u(f));
                        return d;
                      };
                      return Hp(u(l.targetSnapshot.root)).pipe(ku(), rs(1));
                    }),
                    lg(() => this.afterPreactivation()),
                    ie((l) => {
                      const u = (function j8(e, n, t) {
                        const r = ta(e, n._root, t ? t._root : void 0);
                        return new n0(r, n);
                      })(
                        t.routeReuseStrategy,
                        l.targetSnapshot,
                        l.currentRouterState
                      );
                      return (
                        (this.currentTransition = s =
                          { ...l, targetRouterState: u }),
                        s
                      );
                    }),
                    rt(() => {
                      this.events.next(new Zp());
                    }),
                    ((e, n, t, r) =>
                      ie(
                        (i) => (
                          new Q8(
                            n,
                            i.targetRouterState,
                            i.currentRouterState,
                            t,
                            r
                          ).activate(e),
                          i
                        )
                      ))(
                      this.rootContexts,
                      t.routeReuseStrategy,
                      (l) => this.events.next(l),
                      this.inputBindingEnabled
                    ),
                    rs(1),
                    rt({
                      next: (l) => {
                        (o = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          this.events.next(
                            new wr(
                              l.id,
                              this.urlSerializer.serialize(l.extractedUrl),
                              this.urlSerializer.serialize(l.urlAfterRedirects)
                            )
                          ),
                          t.titleStrategy?.updateTitle(
                            l.targetRouterState.snapshot
                          ),
                          l.resolve(!0);
                      },
                      complete: () => {
                        o = !0;
                      },
                    }),
                    (function Zj(e) {
                      return xe((n, t) => {
                        mt(e).subscribe(Oe(t, () => t.complete(), ic)),
                          !t.closed && n.subscribe(t);
                      });
                    })(
                      this.transitionAbortSubject.pipe(
                        rt((l) => {
                          throw l;
                        })
                      )
                    ),
                    Uo(() => {
                      o || a || this.cancelNavigationTransition(s, "", 1),
                        this.currentNavigation?.id === s.id &&
                          (this.currentNavigation = null);
                    }),
                    Zr((l) => {
                      if (((a = !0), d0(l)))
                        this.events.next(
                          new Jo(
                            s.id,
                            this.urlSerializer.serialize(s.extractedUrl),
                            l.message,
                            l.cancellationCode
                          )
                        ),
                          (function U8(e) {
                            return d0(e) && Xr(e.url);
                          })(l)
                            ? this.events.next(new Yp(l.url))
                            : s.resolve(!1);
                      else {
                        this.events.next(
                          new Gu(
                            s.id,
                            this.urlSerializer.serialize(s.extractedUrl),
                            l,
                            s.targetSnapshot ?? void 0
                          )
                        );
                        try {
                          s.resolve(t.errorHandler(l));
                        } catch (u) {
                          s.reject(u);
                        }
                      }
                      return dn;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(t, r, i) {
            const s = new Jo(
              t.id,
              this.urlSerializer.serialize(t.extractedUrl),
              r,
              i
            );
            this.events.next(s), t.resolve(!1);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      function b0(e) {
        return e !== Xo;
      }
      let S0 = (() => {
          class e {
            buildTitle(t) {
              let r,
                i = t.root;
              for (; void 0 !== i; )
                (r = this.getResolvedTitleForRoute(i) ?? r),
                  (i = i.children.find((s) => s.outlet === K));
              return r;
            }
            getResolvedTitleForRoute(t) {
              return t.data[Wo];
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: function () {
                return T(j4);
              },
              providedIn: "root",
            }));
          }
          return e;
        })(),
        j4 = (() => {
          class e extends S0 {
            constructor(t) {
              super(), (this.title = t);
            }
            updateTitle(t) {
              const r = this.buildTitle(t);
              void 0 !== r && this.title.setTitle(r);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(DE));
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            }));
          }
          return e;
        })(),
        B4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: function () {
                return T(U4);
              },
              providedIn: "root",
            }));
          }
          return e;
        })();
      class H4 {
        shouldDetach(n) {
          return !1;
        }
        store(n, t) {}
        shouldAttach(n) {
          return !1;
        }
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, t) {
          return n.routeConfig === t.routeConfig;
        }
      }
      let U4 = (() => {
        class e extends H4 {
          static #e = (this.ɵfac = (function () {
            let t;
            return function (i) {
              return (t || (t = Te(e)))(i || e);
            };
          })());
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      const Ju = new N("", { providedIn: "root", factory: () => ({}) });
      let $4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: function () {
                return T(z4);
              },
              providedIn: "root",
            }));
          }
          return e;
        })(),
        z4 = (() => {
          class e {
            shouldProcessUrl(t) {
              return !0;
            }
            extract(t) {
              return t;
            }
            merge(t, r) {
              return t;
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            }));
          }
          return e;
        })();
      var oa = (function (e) {
        return (
          (e[(e.COMPLETE = 0)] = "COMPLETE"),
          (e[(e.FAILED = 1)] = "FAILED"),
          (e[(e.REDIRECTING = 2)] = "REDIRECTING"),
          e
        );
      })(oa || {});
      function I0(e, n) {
        e.events
          .pipe(
            Wn(
              (t) =>
                t instanceof wr ||
                t instanceof Jo ||
                t instanceof Gu ||
                t instanceof os
            ),
            ie((t) =>
              t instanceof wr || t instanceof os
                ? oa.COMPLETE
                : t instanceof Jo && (0 === t.code || 1 === t.code)
                ? oa.REDIRECTING
                : oa.FAILED
            ),
            Wn((t) => t !== oa.REDIRECTING),
            rs(1)
          )
          .subscribe(() => {
            n();
          });
      }
      function G4(e) {
        throw e;
      }
      function W4(e, n, t) {
        return n.parse("/");
      }
      const q4 = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        K4 = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let kt = (() => {
        class e {
          get navigationId() {
            return this.navigationTransitions.navigationId;
          }
          get browserPageId() {
            return "computed" !== this.canceledNavigationResolution
              ? this.currentPageId
              : this.location.getState()?.ɵrouterPageId ?? this.currentPageId;
          }
          get events() {
            return this._events;
          }
          constructor() {
            (this.disposed = !1),
              (this.currentPageId = 0),
              (this.console = T(YC)),
              (this.isNgZoneEnabled = !1),
              (this._events = new gt()),
              (this.options = T(Ju, { optional: !0 }) || {}),
              (this.pendingTasks = T(kl)),
              (this.errorHandler = this.options.errorHandler || G4),
              (this.malformedUriErrorHandler =
                this.options.malformedUriErrorHandler || W4),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.urlHandlingStrategy = T($4)),
              (this.routeReuseStrategy = T(B4)),
              (this.titleStrategy = T(S0)),
              (this.onSameUrlNavigation =
                this.options.onSameUrlNavigation || "ignore"),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy || "emptyOnly"),
              (this.urlUpdateStrategy =
                this.options.urlUpdateStrategy || "deferred"),
              (this.canceledNavigationResolution =
                this.options.canceledNavigationResolution || "replace"),
              (this.config = T(fs, { optional: !0 })?.flat() ?? []),
              (this.navigationTransitions = T(Xu)),
              (this.urlSerializer = T(Ko)),
              (this.location = T(hh)),
              (this.componentInputBindingEnabled = !!T(qu, { optional: !0 })),
              (this.eventsSubscription = new It()),
              (this.isNgZoneEnabled =
                T(le) instanceof le && le.isInAngularZone()),
              this.resetConfig(this.config),
              (this.currentUrlTree = new ss()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = r0(0, null)),
              this.navigationTransitions
                .setupNavigations(this, this.currentUrlTree, this.routerState)
                .subscribe(
                  (t) => {
                    (this.lastSuccessfulId = t.id),
                      (this.currentPageId = this.browserPageId);
                  },
                  (t) => {
                    this.console.warn(`Unhandled Navigation Error: ${t}`);
                  }
                ),
              this.subscribeToNavigationEvents();
          }
          subscribeToNavigationEvents() {
            const t = this.navigationTransitions.events.subscribe((r) => {
              try {
                const { currentTransition: i } = this.navigationTransitions;
                if (null === i) return void (T0(r) && this._events.next(r));
                if (r instanceof zu)
                  b0(i.source) && (this.browserUrlTree = i.extractedUrl);
                else if (r instanceof os) this.rawUrlTree = i.rawUrl;
                else if (r instanceof JS) {
                  if ("eager" === this.urlUpdateStrategy) {
                    if (!i.extras.skipLocationChange) {
                      const s = this.urlHandlingStrategy.merge(
                        i.urlAfterRedirects,
                        i.rawUrl
                      );
                      this.setBrowserUrl(s, i);
                    }
                    this.browserUrlTree = i.urlAfterRedirects;
                  }
                } else if (r instanceof Zp)
                  (this.currentUrlTree = i.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      i.urlAfterRedirects,
                      i.rawUrl
                    )),
                    (this.routerState = i.targetRouterState),
                    "deferred" === this.urlUpdateStrategy &&
                      (i.extras.skipLocationChange ||
                        this.setBrowserUrl(this.rawUrlTree, i),
                      (this.browserUrlTree = i.urlAfterRedirects));
                else if (r instanceof Jo)
                  0 !== r.code && 1 !== r.code && (this.navigated = !0),
                    (3 === r.code || 2 === r.code) && this.restoreHistory(i);
                else if (r instanceof Yp) {
                  const s = this.urlHandlingStrategy.merge(
                      r.url,
                      i.currentRawUrl
                    ),
                    o = {
                      skipLocationChange: i.extras.skipLocationChange,
                      replaceUrl:
                        "eager" === this.urlUpdateStrategy || b0(i.source),
                    };
                  this.scheduleNavigation(s, Xo, null, o, {
                    resolve: i.resolve,
                    reject: i.reject,
                    promise: i.promise,
                  });
                }
                r instanceof Gu && this.restoreHistory(i, !0),
                  r instanceof wr && (this.navigated = !0),
                  T0(r) && this._events.next(r);
              } catch (i) {
                this.navigationTransitions.transitionAbortSubject.next(i);
              }
            });
            this.eventsSubscription.add(t);
          }
          resetRootComponentType(t) {
            (this.routerState.root.component = t),
              (this.navigationTransitions.rootComponentType = t);
          }
          initialNavigation() {
            if (
              (this.setUpLocationChangeListener(),
              !this.navigationTransitions.hasRequestedNavigation)
            ) {
              const t = this.location.getState();
              this.navigateToSyncWithBrowser(this.location.path(!0), Xo, t);
            }
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((t) => {
                const r = "popstate" === t.type ? "popstate" : "hashchange";
                "popstate" === r &&
                  setTimeout(() => {
                    this.navigateToSyncWithBrowser(t.url, r, t.state);
                  }, 0);
              }));
          }
          navigateToSyncWithBrowser(t, r, i) {
            const s = { replaceUrl: !0 },
              o = i?.navigationId ? i : null;
            if (i) {
              const l = { ...i };
              delete l.navigationId,
                delete l.ɵrouterPageId,
                0 !== Object.keys(l).length && (s.state = l);
            }
            const a = this.parseUrl(t);
            this.scheduleNavigation(a, r, o, s);
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.navigationTransitions.currentNavigation;
          }
          get lastSuccessfulNavigation() {
            return this.navigationTransitions.lastSuccessfulNavigation;
          }
          resetConfig(t) {
            (this.config = t.map(sg)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.navigationTransitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0),
              this.eventsSubscription.unsubscribe();
          }
          createUrlTree(t, r = {}) {
            const {
                relativeTo: i,
                queryParams: s,
                fragment: o,
                queryParamsHandling: a,
                preserveFragment: l,
              } = r,
              u = l ? this.currentUrlTree.fragment : o;
            let d,
              c = null;
            switch (a) {
              case "merge":
                c = { ...this.currentUrlTree.queryParams, ...s };
                break;
              case "preserve":
                c = this.currentUrlTree.queryParams;
                break;
              default:
                c = s || null;
            }
            null !== c && (c = this.removeEmptyProps(c));
            try {
              d = WS(i ? i.snapshot : this.routerState.snapshot.root);
            } catch {
              ("string" != typeof t[0] || !t[0].startsWith("/")) && (t = []),
                (d = this.currentUrlTree.root);
            }
            return qS(d, t, c, u ?? null);
          }
          navigateByUrl(t, r = { skipLocationChange: !1 }) {
            const i = Xr(t) ? t : this.parseUrl(t),
              s = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
            return this.scheduleNavigation(s, Xo, null, r);
          }
          navigate(t, r = { skipLocationChange: !1 }) {
            return (
              (function Q4(e) {
                for (let n = 0; n < e.length; n++)
                  if (null == e[n]) throw new D(4008, !1);
              })(t),
              this.navigateByUrl(this.createUrlTree(t, r), r)
            );
          }
          serializeUrl(t) {
            return this.urlSerializer.serialize(t);
          }
          parseUrl(t) {
            let r;
            try {
              r = this.urlSerializer.parse(t);
            } catch (i) {
              r = this.malformedUriErrorHandler(i, this.urlSerializer, t);
            }
            return r;
          }
          isActive(t, r) {
            let i;
            if (((i = !0 === r ? { ...q4 } : !1 === r ? { ...K4 } : r), Xr(t)))
              return kS(this.currentUrlTree, t, i);
            const s = this.parseUrl(t);
            return kS(this.currentUrlTree, s, i);
          }
          removeEmptyProps(t) {
            return Object.keys(t).reduce((r, i) => {
              const s = t[i];
              return null != s && (r[i] = s), r;
            }, {});
          }
          scheduleNavigation(t, r, i, s, o) {
            if (this.disposed) return Promise.resolve(!1);
            let a, l, u;
            o
              ? ((a = o.resolve), (l = o.reject), (u = o.promise))
              : (u = new Promise((d, f) => {
                  (a = d), (l = f);
                }));
            const c = this.pendingTasks.add();
            return (
              I0(this, () => {
                queueMicrotask(() => this.pendingTasks.remove(c));
              }),
              this.navigationTransitions.handleNavigationRequest({
                source: r,
                restoredState: i,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                currentBrowserUrl: this.browserUrlTree,
                rawUrl: t,
                extras: s,
                resolve: a,
                reject: l,
                promise: u,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              u.catch((d) => Promise.reject(d))
            );
          }
          setBrowserUrl(t, r) {
            const i = this.urlSerializer.serialize(t);
            if (this.location.isCurrentPathEqualTo(i) || r.extras.replaceUrl) {
              const o = {
                ...r.extras.state,
                ...this.generateNgRouterState(r.id, this.browserPageId),
              };
              this.location.replaceState(i, "", o);
            } else {
              const s = {
                ...r.extras.state,
                ...this.generateNgRouterState(r.id, this.browserPageId + 1),
              };
              this.location.go(i, "", s);
            }
          }
          restoreHistory(t, r = !1) {
            if ("computed" === this.canceledNavigationResolution) {
              const s = this.currentPageId - this.browserPageId;
              0 !== s
                ? this.location.historyGo(s)
                : this.currentUrlTree ===
                    this.getCurrentNavigation()?.finalUrl &&
                  0 === s &&
                  (this.resetState(t),
                  (this.browserUrlTree = t.currentUrlTree),
                  this.resetUrlToCurrentUrlTree());
            } else
              "replace" === this.canceledNavigationResolution &&
                (r && this.resetState(t), this.resetUrlToCurrentUrlTree());
          }
          resetState(t) {
            (this.routerState = t.currentRouterState),
              (this.currentUrlTree = t.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                t.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          generateNgRouterState(t, r) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: t, ɵrouterPageId: r }
              : { navigationId: t };
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      function T0(e) {
        return !(e instanceof Zp || e instanceof Yp);
      }
      let aa = (() => {
          class e {
            constructor(t, r, i, s, o, a) {
              (this.router = t),
                (this.route = r),
                (this.tabIndexAttribute = i),
                (this.renderer = s),
                (this.el = o),
                (this.locationStrategy = a),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new gt()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1);
              const l = o.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = "a" === l || "area" === l),
                this.isAnchorElement
                  ? (this.subscription = t.events.subscribe((u) => {
                      u instanceof wr && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl("0");
            }
            setTabIndexIfNotOnNativeEl(t) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue("tabindex", t);
            }
            ngOnChanges(t) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(t) {
              null != t
                ? ((this.commands = Array.isArray(t) ? t : [t]),
                  this.setTabIndexIfNotOnNativeEl("0"))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(t, r, i, s, o) {
              return (
                !!(
                  null === this.urlTree ||
                  (this.isAnchorElement &&
                    (0 !== t ||
                      r ||
                      i ||
                      s ||
                      o ||
                      ("string" == typeof this.target &&
                        "_self" != this.target)))
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              this.href =
                null !== this.urlTree && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
              const t =
                null === this.href
                  ? null
                  : (function ov(e, n, t) {
                      return (function uA(e, n) {
                        return ("src" === n &&
                          ("embed" === e ||
                            "frame" === e ||
                            "iframe" === e ||
                            "media" === e ||
                            "script" === e)) ||
                          ("href" === n && ("base" === e || "link" === e))
                          ? sv
                          : Or;
                      })(
                        n,
                        t
                      )(e);
                    })(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      "href"
                    );
              this.applyAttributeValue("href", t);
            }
            applyAttributeValue(t, r) {
              const i = this.renderer,
                s = this.el.nativeElement;
              null !== r ? i.setAttribute(s, t, r) : i.removeAttribute(s, t);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(
                w(kt),
                w(ls),
                (function ka(e) {
                  return (function A1(e, n) {
                    if ("class" === n) return e.classes;
                    if ("style" === n) return e.styles;
                    const t = e.attrs;
                    if (t) {
                      const r = t.length;
                      let i = 0;
                      for (; i < r; ) {
                        const s = t[i];
                        if (Jg(s)) break;
                        if (0 === s) i += 2;
                        else if ("number" == typeof s)
                          for (i++; i < r && "string" == typeof t[i]; ) i++;
                        else {
                          if (s === n) return t[i + 1];
                          i += 2;
                        }
                      }
                    }
                    return null;
                  })(We(), e);
                })("tabindex"),
                w(tn),
                w(wt),
                w(Br)
              );
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [["", "routerLink", ""]],
              hostVars: 1,
              hostBindings: function (r, i) {
                1 & r &&
                  Ke("click", function (o) {
                    return i.onClick(
                      o.button,
                      o.ctrlKey,
                      o.shiftKey,
                      o.altKey,
                      o.metaKey
                    );
                  }),
                  2 & r && ue("target", i.target);
              },
              inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                relativeTo: "relativeTo",
                preserveFragment: ["preserveFragment", "preserveFragment", Zi],
                skipLocationChange: [
                  "skipLocationChange",
                  "skipLocationChange",
                  Zi,
                ],
                replaceUrl: ["replaceUrl", "replaceUrl", Zi],
                routerLink: "routerLink",
              },
              standalone: !0,
              features: [__, zt],
            }));
          }
          return e;
        })(),
        M0 = (() => {
          class e {
            get isActive() {
              return this._isActive;
            }
            constructor(t, r, i, s, o) {
              (this.router = t),
                (this.element = r),
                (this.renderer = i),
                (this.cdr = s),
                (this.link = o),
                (this.classes = []),
                (this._isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new we()),
                (this.routerEventsSubscription = t.events.subscribe((a) => {
                  a instanceof wr && this.update();
                }));
            }
            ngAfterContentInit() {
              k(this.links.changes, k(null))
                .pipe(ti())
                .subscribe((t) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const t = [...this.links.toArray(), this.link]
                .filter((r) => !!r)
                .map((r) => r.onChanges);
              this.linkInputChangesSubscription = Fe(t)
                .pipe(ti())
                .subscribe((r) => {
                  this._isActive !== this.isLinkActive(this.router)(r) &&
                    this.update();
                });
            }
            set routerLinkActive(t) {
              const r = Array.isArray(t) ? t : t.split(" ");
              this.classes = r.filter((i) => !!i);
            }
            ngOnChanges(t) {
              this.update();
            }
            ngOnDestroy() {
              this.routerEventsSubscription.unsubscribe(),
                this.linkInputChangesSubscription?.unsubscribe();
            }
            update() {
              !this.links ||
                !this.router.navigated ||
                queueMicrotask(() => {
                  const t = this.hasActiveLinks();
                  this._isActive !== t &&
                    ((this._isActive = t),
                    this.cdr.markForCheck(),
                    this.classes.forEach((r) => {
                      t
                        ? this.renderer.addClass(this.element.nativeElement, r)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            r
                          );
                    }),
                    t && void 0 !== this.ariaCurrentWhenActive
                      ? this.renderer.setAttribute(
                          this.element.nativeElement,
                          "aria-current",
                          this.ariaCurrentWhenActive.toString()
                        )
                      : this.renderer.removeAttribute(
                          this.element.nativeElement,
                          "aria-current"
                        ),
                    this.isActiveChange.emit(t));
                });
            }
            isLinkActive(t) {
              const r = (function Z4(e) {
                return !!e.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (i) => !!i.urlTree && t.isActive(i.urlTree, r);
            }
            hasActiveLinks() {
              const t = this.isLinkActive(this.router);
              return (this.link && t(this.link)) || this.links.some(t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(kt), w(wt), w(tn), w(wo), w(aa, 8));
            });
            static #t = (this.ɵdir = F({
              type: e,
              selectors: [["", "routerLinkActive", ""]],
              contentQueries: function (r, i, s) {
                if ((1 & r && $f(s, aa, 5), 2 & r)) {
                  let o;
                  vo((o = _o())) && (i.links = o);
                }
              },
              inputs: {
                routerLinkActiveOptions: "routerLinkActiveOptions",
                ariaCurrentWhenActive: "ariaCurrentWhenActive",
                routerLinkActive: "routerLinkActive",
              },
              outputs: { isActiveChange: "isActiveChange" },
              exportAs: ["routerLinkActive"],
              standalone: !0,
              features: [zt],
            }));
          }
          return e;
        })();
      class A0 {}
      let Y4 = (() => {
        class e {
          constructor(t, r, i, s, o) {
            (this.router = t),
              (this.injector = i),
              (this.preloadingStrategy = s),
              (this.loader = o);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                Wn((t) => t instanceof wr),
                es(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(t, r) {
            const i = [];
            for (const s of r) {
              s.providers &&
                !s._injector &&
                (s._injector = Pf(s.providers, t, `Route: ${s.path}`));
              const o = s._injector ?? t,
                a = s._loadedInjector ?? o;
              ((s.loadChildren && !s._loadedRoutes && void 0 === s.canLoad) ||
                (s.loadComponent && !s._loadedComponent)) &&
                i.push(this.preloadConfig(o, s)),
                (s.children || s._loadedRoutes) &&
                  i.push(this.processRoutes(a, s.children ?? s._loadedRoutes));
            }
            return Fe(i).pipe(ti());
          }
          preloadConfig(t, r) {
            return this.preloadingStrategy.preload(r, () => {
              let i;
              i =
                r.loadChildren && void 0 === r.canLoad
                  ? this.loader.loadChildren(t, r)
                  : k(null);
              const s = i.pipe(
                je((o) =>
                  null === o
                    ? k(void 0)
                    : ((r._loadedRoutes = o.routes),
                      (r._loadedInjector = o.injector),
                      this.processRoutes(o.injector ?? t, o.routes))
                )
              );
              return r.loadComponent && !r._loadedComponent
                ? Fe([s, this.loader.loadComponent(r)]).pipe(ti())
                : s;
            });
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(kt), A(XC), A(Rt), A(A0), A(ug));
          });
          static #t = (this.ɵprov = R({
            token: e,
            factory: e.ɵfac,
            providedIn: "root",
          }));
        }
        return e;
      })();
      const cg = new N("");
      let N0 = (() => {
        class e {
          constructor(t, r, i, s, o = {}) {
            (this.urlSerializer = t),
              (this.transitions = r),
              (this.viewportScroller = i),
              (this.zone = s),
              (this.options = o),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (o.scrollPositionRestoration =
                o.scrollPositionRestoration || "disabled"),
              (o.anchorScrolling = o.anchorScrolling || "disabled");
          }
          init() {
            "disabled" !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration("manual"),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe((t) => {
              t instanceof zu
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = t.navigationTrigger),
                  (this.restoredId = t.restoredState
                    ? t.restoredState.navigationId
                    : 0))
                : t instanceof wr
                ? ((this.lastId = t.id),
                  this.scheduleScrollEvent(
                    t,
                    this.urlSerializer.parse(t.urlAfterRedirects).fragment
                  ))
                : t instanceof os &&
                  0 === t.code &&
                  ((this.lastSource = void 0),
                  (this.restoredId = 0),
                  this.scheduleScrollEvent(
                    t,
                    this.urlSerializer.parse(t.url).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe((t) => {
              t instanceof e0 &&
                (t.position
                  ? "top" === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : "enabled" === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(t.position)
                  : t.anchor && "enabled" === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(t.anchor)
                  : "disabled" !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(t, r) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new e0(
                      t,
                      "popstate" === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      r
                    )
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
          static #e = (this.ɵfac = function (r) {
            !(function Wv() {
              throw new Error("invalid");
            })();
          });
          static #t = (this.ɵprov = R({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function Kn(e, n) {
        return { ɵkind: e, ɵproviders: n };
      }
      function O0() {
        const e = T(Ot);
        return (n) => {
          const t = e.get(Vr);
          if (n !== t.components[0]) return;
          const r = e.get(kt),
            i = e.get(P0);
          1 === e.get(dg) && r.initialNavigation(),
            e.get(x0, null, Z.Optional)?.setUpPreloading(),
            e.get(cg, null, Z.Optional)?.init(),
            r.resetRootComponentType(t.componentTypes[0]),
            i.closed || (i.next(), i.complete(), i.unsubscribe());
        };
      }
      const P0 = new N("", { factory: () => new gt() }),
        dg = new N("", { providedIn: "root", factory: () => 1 }),
        x0 = new N("");
      function tB(e) {
        return Kn(0, [
          { provide: x0, useExisting: Y4 },
          { provide: A0, useExisting: e },
        ]);
      }
      const F0 = new N("ROUTER_FORROOT_GUARD"),
        rB = [
          hh,
          { provide: Ko, useClass: Gp },
          kt,
          ea,
          {
            provide: ls,
            useFactory: function R0(e) {
              return e.routerState.root;
            },
            deps: [kt],
          },
          ug,
          [],
        ];
      function iB() {
        return new sw("Router", kt);
      }
      let L0 = (() => {
        class e {
          constructor(t) {}
          static forRoot(t, r) {
            return {
              ngModule: e,
              providers: [
                rB,
                [],
                { provide: fs, multi: !0, useValue: t },
                {
                  provide: F0,
                  useFactory: lB,
                  deps: [[kt, new Ba(), new Ha()]],
                },
                { provide: Ju, useValue: r || {} },
                r?.useHash
                  ? { provide: Br, useClass: KF }
                  : { provide: Br, useClass: Fw },
                {
                  provide: cg,
                  useFactory: () => {
                    const e = T(hk),
                      n = T(le),
                      t = T(Ju),
                      r = T(Xu),
                      i = T(Ko);
                    return (
                      t.scrollOffset && e.setOffset(t.scrollOffset),
                      new N0(i, r, e, n, t)
                    );
                  },
                },
                r?.preloadingStrategy
                  ? tB(r.preloadingStrategy).ɵproviders
                  : [],
                { provide: sw, multi: !0, useFactory: iB },
                r?.initialNavigation ? uB(r) : [],
                r?.bindToComponentInputs
                  ? Kn(8, [l0, { provide: qu, useExisting: l0 }]).ɵproviders
                  : [],
                [
                  { provide: k0, useFactory: O0 },
                  { provide: rh, multi: !0, useExisting: k0 },
                ],
              ],
            };
          }
          static forChild(t) {
            return {
              ngModule: e,
              providers: [{ provide: fs, multi: !0, useValue: t }],
            };
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(F0, 8));
          });
          static #t = (this.ɵmod = Xe({ type: e }));
          static #n = (this.ɵinj = He({}));
        }
        return e;
      })();
      function lB(e) {
        return "guarded";
      }
      function uB(e) {
        return [
          "disabled" === e.initialNavigation
            ? Kn(3, [
                {
                  provide: Qf,
                  multi: !0,
                  useFactory: () => {
                    const n = T(kt);
                    return () => {
                      n.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: dg, useValue: 2 },
              ]).ɵproviders
            : [],
          "enabledBlocking" === e.initialNavigation
            ? Kn(2, [
                { provide: dg, useValue: 0 },
                {
                  provide: Qf,
                  multi: !0,
                  deps: [Ot],
                  useFactory: (n) => {
                    const t = n.get(WF, Promise.resolve());
                    return () =>
                      t.then(
                        () =>
                          new Promise((r) => {
                            const i = n.get(kt),
                              s = n.get(P0);
                            I0(i, () => {
                              r(!0);
                            }),
                              (n.get(Xu).afterPreactivation = () => (
                                r(!0), s.closed ? k(void 0) : s
                              )),
                              i.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const k0 = new N(""),
        dB = ["addListener", "removeListener"],
        fB = ["addEventListener", "removeEventListener"],
        hB = ["on", "off"];
      function hs(e, n, t, r) {
        if ((X(t) && ((r = t), (t = void 0)), r))
          return hs(e, n, t).pipe(pp(r));
        const [i, s] = (function mB(e) {
          return X(e.addEventListener) && X(e.removeEventListener);
        })(e)
          ? fB.map((o) => (a) => e[o](n, a, t))
          : (function pB(e) {
              return X(e.addListener) && X(e.removeListener);
            })(e)
          ? dB.map(V0(e, n))
          : (function gB(e) {
              return X(e.on) && X(e.off);
            })(e)
          ? hB.map(V0(e, n))
          : [];
        if (!i && pc(e)) return je((o) => hs(o, n, t))(mt(e));
        if (!i) throw new TypeError("Invalid event target");
        return new Se((o) => {
          const a = (...l) => o.next(1 < l.length ? l : l[0]);
          return i(a), () => s(a);
        });
      }
      function V0(e, n) {
        return (t) => (r) => e[t](n, r);
      }
      $("body").addClass("done");
      let yB = (() => {
          class e {
            constructor() {
              this.windowWidth = window.innerWidth;
            }
            handleWindowResize() {
              this.windowWidth = window.innerWidth;
            }
            ngOnInit() {
              if (
                (hs(window, "resize").subscribe(() => {
                  this.handleWindowResize();
                }),
                this.windowWidth <= 1185)
              ) {
                const r = document.querySelector("#about-card");
                r?.classList.remove("fadeInLeft"),
                  r?.classList.add("fadeInDown");
              }
            }
            ngOnDestroy() {
              const t = document.querySelector("#about-card");
              t &&
                (t.classList.remove("fadeInLeft"),
                t.classList.remove("active"),
                t.classList.add(
                  this.windowWidth <= 1185 ? "fadeOutUp" : "fadeOutLeft"
                ));
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = Ue({
              type: e,
              selectors: [["app-about"]],
              decls: 79,
              vars: 0,
              consts: [
                [
                  "id",
                  "about-card",
                  1,
                  "card-inner",
                  "fadeInLeft",
                  "animated",
                  "active",
                ],
                [1, "card-wrap"],
                [1, "content", "about"],
                [1, "title"],
                [1, "row"],
                [1, "col", "col-d-6", "col-t-6", "col-m-12", "border-line-v"],
                [1, "text-box"],
                [1, "info-list"],
                [1, "clear"],
                [1, "content", "services"],
                [1, "row", "service-items", "border-line-v"],
                [1, "col", "col-d-6", "col-t-6", "col-m-12", "border-line-h"],
                [1, "service-item"],
                [1, "icon"],
                [1, "fa", "fa-desktop"],
                [1, "name"],
                [1, "desc"],
                [1, "fa", "fa-code"],
                [1, "fa", "fa-gears"],
                [1, "fa", "fa-gamepad"],
              ],
              template: function (r, i) {
                1 & r &&
                  (y(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
                  b(4, "About Me"),
                  m(),
                  y(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "p"),
                  b(
                    9,
                    " Hi, I’m a frontend developer exploring the backend world — confident, curious, and always coding with a smile 😄"
                  ),
                  m()()(),
                  y(10, "div", 5)(11, "div", 7)(12, "ul")(13, "li")(
                    14,
                    "strong"
                  ),
                  b(15, "Age . . . . ."),
                  m(),
                  b(16, " 21"),
                  m(),
                  y(17, "li")(18, "strong"),
                  b(19, "Residence . . . . ."),
                  m(),
                  b(20, " India"),
                  m(),
                  y(21, "li")(22, "strong"),
                  b(23, "Freelance . . . . ."),
                  m(),
                  b(24, " Available"),
                  m(),
                  y(25, "li")(26, "strong"),
                  b(27, "Address . . . . ."),
                  m(),
                  b(28, " Benglore"),
                  m()()()(),
                  O(29, "div", 8),
                  m()(),
                  y(30, "div", 9)(31, "div", 3),
                  b(32, "My Services"),
                  m(),
                  y(33, "div", 10)(34, "div", 11)(35, "div", 12)(36, "div", 13),
                  O(37, "span", 14),
                  m(),
                  y(38, "div", 15)(39, "span"),
                  b(40, " Frontend Development "),
                  m()(),
                  y(41, "div", 16)(42, "div")(43, "p"),
                  b(
                    44,
                    " Developing Frontend Responsive and Dynamic Designs using HTML, CSS, JavaScript, React, Angular, Bootstrap "
                  ),
                  m()()()()(),
                  y(45, "div", 11)(46, "div", 12)(47, "div", 13),
                  O(48, "span", 17),
                  m(),
                  y(49, "div", 15)(50, "span"),
                  b(51, " Backend Development "),
                  m()(),
                  y(52, "div", 16)(53, "div")(54, "p"),
                  b(
                    55,
                    " Developing RESTful structured API's using Node.js, Express.js, MongoDB"
                  ),
                  m()()()()(),
                  y(56, "div", 11)(57, "div", 12)(58, "div", 13),
                  O(59, "span", 18),
                  m(),
                  y(60, "div", 15)(61, "span"),
                  b(62, " Database "),
                  m()(),
                  y(63, "div", 16)(64, "div")(65, "p"),
                  b(
                    66,
                    " I have knowledge in SQL, which I use to manage relational databases like MySQL or PostgreSQL . I also understand MongoDB, a NoSQL database that stores data as flexible JSON-like documents "
                  ),
                  m()()()()());
                
              },
            }));
          }
          return e;
        })(),
        it = (() =>
          class e {
            static STARTS_WITH = "startsWith";
            static CONTAINS = "contains";
            static NOT_CONTAINS = "notContains";
            static ENDS_WITH = "endsWith";
            static EQUALS = "equals";
            static NOT_EQUALS = "notEquals";
            static IN = "in";
            static LESS_THAN = "lt";
            static LESS_THAN_OR_EQUAL_TO = "lte";
            static GREATER_THAN = "gt";
            static GREATER_THAN_OR_EQUAL_TO = "gte";
            static BETWEEN = "between";
            static IS = "is";
            static IS_NOT = "isNot";
            static BEFORE = "before";
            static AFTER = "after";
            static DATE_IS = "dateIs";
            static DATE_IS_NOT = "dateIsNot";
            static DATE_BEFORE = "dateBefore";
            static DATE_AFTER = "dateAfter";
          })(),
        fg = (() => {
          class e {
            messageSource = new gt();
            clearSource = new gt();
            messageObserver = this.messageSource.asObservable();
            clearObserver = this.clearSource.asObservable();
            add(t) {
              t && this.messageSource.next(t);
            }
            addAll(t) {
              t && t.length && this.messageSource.next(t);
            }
            clear(t) {
              this.clearSource.next(t || null);
            }
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵprov = R({ token: e, factory: e.ɵfac });
          }
          return e;
        })(),
        j0 = (() => {
          class e {
            ripple = !1;
            overlayOptions = {};
            filterMatchModeOptions = {
              text: [
                it.STARTS_WITH,
                it.CONTAINS,
                it.NOT_CONTAINS,
                it.ENDS_WITH,
                it.EQUALS,
                it.NOT_EQUALS,
              ],
              numeric: [
                it.EQUALS,
                it.NOT_EQUALS,
                it.LESS_THAN,
                it.LESS_THAN_OR_EQUAL_TO,
                it.GREATER_THAN,
                it.GREATER_THAN_OR_EQUAL_TO,
              ],
              date: [it.DATE_IS, it.DATE_IS_NOT, it.DATE_BEFORE, it.DATE_AFTER],
            };
            translation = {
              startsWith: "Starts with",
              contains: "Contains",
              notContains: "Not contains",
              endsWith: "Ends with",
              equals: "Equals",
              notEquals: "Not equals",
              noFilter: "No Filter",
              lt: "Less than",
              lte: "Less than or equal to",
              gt: "Greater than",
              gte: "Greater than or equal to",
              is: "Is",
              isNot: "Is not",
              before: "Before",
              after: "After",
              dateIs: "Date is",
              dateIsNot: "Date is not",
              dateBefore: "Date is before",
              dateAfter: "Date is after",
              clear: "Clear",
              apply: "Apply",
              matchAll: "Match All",
              matchAny: "Match Any",
              addRule: "Add Rule",
              removeRule: "Remove Rule",
              accept: "Yes",
              reject: "No",
              choose: "Choose",
              upload: "Upload",
              cancel: "Cancel",
              pending: "Pending",
              fileSizeTypes: [
                "B",
                "KB",
                "MB",
                "GB",
                "TB",
                "PB",
                "EB",
                "ZB",
                "YB",
              ],
              dayNames: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              monthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              monthNamesShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              chooseYear: "Choose Year",
              chooseMonth: "Choose Month",
              chooseDate: "Choose Date",
              prevDecade: "Previous Decade",
              nextDecade: "Next Decade",
              prevYear: "Previous Year",
              nextYear: "Next Year",
              prevMonth: "Previous Month",
              nextMonth: "Next Month",
              prevHour: "Previous Hour",
              nextHour: "Next Hour",
              prevMinute: "Previous Minute",
              nextMinute: "Next Minute",
              prevSecond: "Previous Second",
              nextSecond: "Next Second",
              am: "am",
              pm: "pm",
              dateFormat: "mm/dd/yy",
              firstDayOfWeek: 0,
              today: "Today",
              weekHeader: "Wk",
              weak: "Weak",
              medium: "Medium",
              strong: "Strong",
              passwordPrompt: "Enter a password",
              emptyMessage: "No results found",
              searchMessage: "{0} results are available",
              selectionMessage: "{0} items selected",
              emptySelectionMessage: "No selected item",
              emptySearchMessage: "No results found",
              emptyFilterMessage: "No results found",
              aria: {
                trueLabel: "True",
                falseLabel: "False",
                nullLabel: "Not Selected",
                star: "1 star",
                stars: "{star} stars",
                selectAll: "All items selected",
                unselectAll: "All items unselected",
                close: "Close",
                previous: "Previous",
                next: "Next",
                navigation: "Navigation",
                scrollTop: "Scroll Top",
                moveTop: "Move Top",
                moveUp: "Move Up",
                moveDown: "Move Down",
                moveBottom: "Move Bottom",
                moveToTarget: "Move to Target",
                moveToSource: "Move to Source",
                moveAllToTarget: "Move All to Target",
                moveAllToSource: "Move All to Source",
                pageLabel: "{page}",
                firstPageLabel: "First Page",
                lastPageLabel: "Last Page",
                nextPageLabel: "Next Page",
                prevPageLabel: "Previous Page",
                rowsPerPageLabel: "Rows per page",
                previousPageLabel: "Previous Page",
                jumpToPageDropdownLabel: "Jump to Page Dropdown",
                jumpToPageInputLabel: "Jump to Page Input",
                selectRow: "Row Selected",
                unselectRow: "Row Unselected",
                expandRow: "Row Expanded",
                collapseRow: "Row Collapsed",
                showFilterMenu: "Show Filter Menu",
                hideFilterMenu: "Hide Filter Menu",
                filterOperator: "Filter Operator",
                filterConstraint: "Filter Constraint",
                editRow: "Row Edit",
                saveEdit: "Save Edit",
                cancelEdit: "Cancel Edit",
                listView: "List View",
                gridView: "Grid View",
                slide: "Slide",
                slideNumber: "{slideNumber}",
                zoomImage: "Zoom Image",
                zoomIn: "Zoom In",
                zoomOut: "Zoom Out",
                rotateRight: "Rotate Right",
                rotateLeft: "Rotate Left",
              },
            };
            zIndex = { modal: 1100, overlay: 1e3, menu: 1e3, tooltip: 1100 };
            translationSource = new gt();
            translationObserver = this.translationSource.asObservable();
            getTranslation(t) {
              return this.translation[t];
            }
            setTranslation(t) {
              (this.translation = { ...this.translation, ...t }),
                this.translationSource.next(this.translation);
            }
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵprov = R({ token: e, factory: e.ɵfac, providedIn: "root" });
          }
          return e;
        })(),
        _B = (() => {
          class e {
            template;
            type;
            name;
            constructor(t) {
              this.template = t;
            }
            getType() {
              return this.name;
            }
            static ɵfac = function (r) {
              return new (r || e)(w(En));
            };
            static ɵdir = F({
              type: e,
              selectors: [["", "pTemplate", ""]],
              inputs: { type: "type", name: ["pTemplate", "name"] },
            });
          }
          return e;
        })(),
        DB = (() => {
          class e {
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵmod = Xe({ type: e });
            static ɵinj = He({ imports: [tu] });
          }
          return e;
        })(),
        B0 = (() => {
          class e {
            constructor(t) {
              this.messageService = t;
            }
            showToast(t, r, i) {
              this.messageService.add({ severity: t, summary: r, detail: i });
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(fg));
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            }));
          }
          return e;
        })(),
        CB = (() => {
          class e {
            constructor(t) {
              (this.http = t),
                (this.apiBaseUrl = "https://bhavya-portfolio-api.vercel.app");
            }
            addContactMessage(t) {
              return this.http.post(`${this.apiBaseUrl}/contact/create`, t);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(vS));
            });
            static #t = (this.ɵprov = R({
              token: e,
              factory: e.ɵfac,
              providedIn: "root",
            }));
          }
          return e;
        })();
      const hg = function (e) {
        return { error: e };
      };
      $("body").addClass("done");
      let wB = (() => {
        class e {
          constructor(t, r, i) {
            (this.toastService = t),
              (this.formBuilder = r),
              (this.apiService = i),
              (this.windowWidth = window.innerWidth),
              (this.contactForm = this.formBuilder.group({
                name: ["", Du.required],
                email: ["", [Du.required, Du.email]],
                message: ["", Du.required],
              }));
          }
          handleWindowResize() {
            this.windowWidth = window.innerWidth;
          }
          ngOnInit() {
            if (
              (hs(window, "resize").subscribe(() => {
                this.handleWindowResize();
              }),
              this.windowWidth <= 1185)
            ) {
              const r = document.querySelector("#contacts-card");
              r?.classList.remove("fadeInLeft"), r?.classList.add("fadeInDown");
            }
          }
          ngOnDestroy() {
            const t = document.querySelector("#contacts-card");
            t &&
              (t.classList.remove("fadeInLeft"),
              t.classList.remove("active"),
              t.classList.add(
                this.windowWidth <= 1185 ? "fadeOutUp" : "fadeOutLeft"
              ));
          }
          onContactFormSubmission() {
            this.contactForm.touched
              ? this.contactForm.valid
                ? this.apiService
                    .addContactMessage(this.contactForm.value)
                    .subscribe(
                      (r) => {
                        console.log("Data inserted successfully", r),
                          this.toastService.showToast(
                            "success",
                            "Success",
                            "Thanks, your message has been sent successfully!"
                          );
                      },
                      (r) => {
                        console.error("Error inserting data", r),
                          this.toastService.showToast(
                            "error",
                            "Failure",
                            "There was an error sending the message!"
                          );
                      }
                    )
                : this.toastService.showToast(
                    "warn",
                    "Error",
                    "The Form is Invalid!"
                  )
              : this.toastService.showToast(
                  "info",
                  "Attention",
                  "Please fill out the Contact Form"
                );
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(B0), w(uj), w(CB));
          });
          static #t = (this.ɵcmp = Ue({
            type: e,
            selectors: [["app-contact"]],
            features: [De([])],
            decls: 51,
            vars: 10,
            consts: [
              [
                "id",
                "contacts-card",
                1,
                "card-inner",
                "contacts",
                "fadeInLeft",
                "animated",
                "active",
              ],
              [1, "card-wrap"],
              [1, "content", "contacts"],
              [1, "title"],
              [1, "row"],
              [1, "col", "col-d-12", "col-t-12", "col-m-12", "border-line-v"],
              [
                "src",
                "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1634.812696216196!2d77.69799509838866!3d12.955093638788448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752704865735!5m2!1sen!2sin" ,
                "width",
                "100%",
                "height",
                "220",
                "allowfullscreen",
                "",
                "loading",
                "lazy",
                "referrerpolicy",
                "no-referrer-when-downgrade",
                2,
                "border",
                "0",
              ],
              [1, "info-list", 2, "margin-top", "25px"],
              [2, "font-size", "0.8rem"],
              [1, "clear"],
              [1, "contact_form"],
              [3, "formGroup", "ngSubmit"],
              [1, "col", "col-d-6", "col-t-6", "col-m-12"],
              [1, "group-val"],
              [
                "type",
                "text",
                "name",
                "name",
                "formControlName",
                "name",
                "placeholder",
                "Full Name",
                3,
                "ngClass",
              ],
              [
                "type",
                "text",
                "name",
                "email",
                "formControlName",
                "email",
                "placeholder",
                "Email Address",
                3,
                "ngClass",
              ],
              [1, "col", "col-d-12", "col-t-12", "col-m-12"],
              [
                "name",
                "message",
                "formControlName",
                "message",
                "placeholder",
                "Your Message",
                3,
                "ngClass",
              ],
              [1, "align-left"],
              ["type", "submit", 1, "button"],
              [1, "text"],
              [1, "arrow"],
            ],
            template: function (r, i) {
              if (
                (1 & r &&
                  (y(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
                  b(4, "Get in Touch"),
                  m(),
                  y(5, "div", 4)(6, "div", 5),
                  O(7, "iframe", 6),
                  y(8, "div", 7)(9, "ul")(10, "li")(11, "strong"),
                  b(12, "Address . . . . ."),
                  m(),
                  b(13, " Benglore, India"),
                  m(),
                  y(14, "li")(15, "strong"),
                  b(16, "Email . . . . ."),
                  m(),
                  y(17, "span", 8),
                  b(18, "nevil.vadaliya2@gmail.com"),
                  m()(),
                  y(19, "li")(20, "strong"),
                  b(21, "Phone . . . . ."),
                  m(),
                  b(22, " +91 99095 78715"),
                  m(),
                  y(23, "li")(24, "strong"),
                  b(25, "Freelance . . . . ."),
                  m(),
                  b(26, " Available"),
                  m()()()(),
                  O(27, "div", 9),
                  m()(),
                  y(28, "div", 2)(29, "div", 3),
                  b(30, "Contact Form"),
                  m(),
                  y(31, "div", 4)(32, "div", 5)(33, "div", 10)(34, "form", 11),
                  Ke("ngSubmit", function () {
                    return i.onContactFormSubmission();
                  }),
                  y(35, "div", 4)(36, "div", 12)(37, "div", 13),
                  O(38, "input", 14),
                  m()(),
                  y(39, "div", 12)(40, "div", 13),
                  O(41, "input", 15),
                  m()(),
                  y(42, "div", 16)(43, "div", 13),
                  O(44, "textarea", 17),
                  m()()(),
                  y(45, "div", 18)(46, "button", 19)(47, "span", 20),
                  b(48, "Send Message"),
                  m(),
                  O(49, "span", 21),
                  m()()()()(),
                  O(50, "div", 9),
                  m()()()()),
                2 & r)
              ) {
                let s, o, a;
                W(34),
                  Q("formGroup", i.contactForm),
                  W(4),
                  Q(
                    "ngClass",
                    cr(
                      4,
                      hg,
                      (null == (s = i.contactForm.get("name"))
                        ? null
                        : s.touched) &&
                        (null == (s = i.contactForm.get("name"))
                          ? null
                          : s.hasError("required"))
                    )
                  ),
                  W(3),
                  Q(
                    "ngClass",
                    cr(
                      6,
                      hg,
                      ((null == (o = i.contactForm.get("email"))
                        ? null
                        : o.touched) &&
                        (null == (o = i.contactForm.get("email"))
                          ? null
                          : o.hasError("required"))) ||
                        (null == (o = i.contactForm.get("email"))
                          ? null
                          : o.hasError("email"))
                    )
                  ),
                  W(3),
                  Q(
                    "ngClass",
                    cr(
                      8,
                      hg,
                      (null == (a = i.contactForm.get("message"))
                        ? null
                        : a.touched) &&
                        (null == (a = i.contactForm.get("message"))
                          ? null
                          : a.hasError("required"))
                    )
                  );
              }
            },
            dependencies: [Io, qb, xo, vp, xb, Ru, Pp],
          }));
        }
        return e;
      })();
      $("body").addClass("done");
      let EB = (() => {
        class e {
          constructor() {
            this.windowWidth = window.innerWidth;
          }
          handleWindowResize() {
            this.windowWidth = window.innerWidth;
          }
          ngOnInit() {
            if (
              (hs(window, "resize").subscribe(() => {
                this.handleWindowResize();
              }),
              this.windowWidth <= 1185)
            ) {
              const r = document.querySelector("#resume-card");
              r?.classList.remove("fadeInLeft"), r?.classList.add("fadeInDown");
            }
          }
          ngOnDestroy() {
            const t = document.querySelector("#resume-card");
            t &&
              (t.classList.remove("fadeInLeft"),
              t.classList.remove("active"),
              t.classList.add(
                this.windowWidth <= 1185 ? "fadeOutUp" : "fadeOutLeft"
              ));
          }
          ngAfterViewInit() {
            this.setupSkillsCircles(),
              this.setupSkillsDotted(),
              this.initializeTestimonialsCarousel();
          }
          setupSkillsCircles() {
            document
              .querySelectorAll(".skills-list.circles .progress")
              .forEach((r) => {
                const i = document.createElement("div");
                i.className = "slice";
                const s = document.createElement("div");
                (s.className = "bar"), i.appendChild(s);
                const o = document.createElement("div");
                (o.className = "fill"), i.appendChild(o), r.appendChild(i);
              });
          }
          setupSkillsDotted() {
            document
              .querySelectorAll(".skills-list.dotted .progress")
              .forEach((r) => {
                const i = r.clientWidth,
                  s = document.createElement("span");
                s.className = "dg";
                for (let a = 0; a < 10; a++) {
                  const l = document.createElement("span");
                  s.appendChild(l);
                }
                r.appendChild(s);
                const o = document.createElement("span");
                o.className = "da";
                for (let a = 0; a < 10; a++) {
                  const l = document.createElement("span");
                  o.appendChild(l);
                }
                (o.style.width = i + "px"), r.appendChild(o);
              });
          }
          initializeTestimonialsCarousel() {
            (this.revsSlider = $(".revs-carousel.default-revs .owl-carousel")),
              this.revsSlider.owlCarousel({
                margin: 0,
                items: 1,
                autoplay: !1,
                autoplayTimeout: 5e3,
                autoplayHoverPause: !0,
                loop: !0,
                rewind: !1,
                nav: !1,
                dots: !0,
              });
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = Ue({
            type: e,
            selectors: [["app-resume"]],
            decls: 186,
            vars: 0,
            consts: [
              [
                "id",
                "resume-card",
                1,
                "card-inner",
                "animated",
                "fadeInLeft",
                "active",
              ],
              [1, "card-wrap"],
              [1, "content", "resume"],
              [1, "title"],
              [1, "row"],
              [1, "col", "col-d-6", "col-t-6", "col-m-12", "border-line-v"],
              [1, "resume-title", "border-line-h"],
              [1, "icon"],
              [1, "fa", "fa-briefcase"],
              [1, "name"],
              [1, "resume-items"],
              [1, "resume-item", "border-line-h", "active"],
              [1, "date"],
              [1, "company"],
              [1, "resume-item", "border-line-h"],
              [1, "resume-item"],
              [1, "fa", "fa-university"],
              [1, "clear"],
              [1, "content", "skills"],
              [1, "skills-list"],
              [1, "skill-title", "border-line-h"],
              [1, "fa", "fa-gear"],
              [1, "border-line-h"],
              [1, "progress"],
              [1, "percentage", 2, "width", "90%"],
              [1, "percentage", 2, "width", "80%"],
              [1, "percentage", 2, "width", "75%"],
              [1, "percentage", 2, "width", "85%"],
              [1, "skills-list", "dotted"],
              [1, "fa", "fa-flag"],
              [1, "percentage", 2, "width", "100%"],
              [1, "skills-list", "circles"],
              [1, "fa", "fa-code"],
              [1, "progress", "p90"],
              [1, "progress", "p75"],
              [1, "progress", "p85"],
              [1, "progress", "p95"],
              [1, "skills-list", "list"],
              [1, "fa", "fa-list"],
            ],
            template: function (r, i) {
              1 & r &&
                (y(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
                b(4, "Resume"),
                m(),
                y(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7),
                O(9, "i", 8),
                m(),
                y(10, "div", 9),
                b(11, "Experience"),
                m()(),
                y(12, "div", 10)(13, "div", 11)(14, "div", 12),
                b(15, "Apr'25 - Present"),
                m(),
                y(16, "div", 9),
                b(17, "Backend learner"),
                m(),
                y(18, "div", 13),
                b(19, "JSpiders - Training & Development Center"),
                m(),
                y(20, "p"),
                b(
                  21,
                  "Learning some Backend tech with Pyhton and framework like Django. "
                ),
                m()(),
               
                y(31, "div", 15)(32, "div", 12),
                b(33, "Dec'24 - Apr'25"),
                m(),
                y(34, "div", 9),
                b(35, "Frontend Developer(Intern)"),
                m(),
                y(36, "div", 13),
                b(37, "Tibicle"),
                m(),
                y(38, "p"),
                b(
                  39,
                  " Create a Some Webpage using Html,Css,Js and responsive with Bootstrap5 "
                ),
                m()()()(),
                y(40, "div", 5)(41, "div", 6)(42, "div", 7),
                O(43, "i", 16),
                m(),
                y(44, "div", 9),
                b(45, "Education"),
                m()(),
                y(46, "div", 10)(47, "div", 11)(48, "div", 12),
                b(49, "Oct'21 - Apr'25"),
                m(),
                y(50, "div", 9),
                b(51, "BE_CE - LDRP_ITR"),
                m(),
                y(52, "div", 13),
                b(53, "Gandhinagar"),
                m(),
                y(54, "p"),
                b(
                  55,
                  " Bachlor's Degree in Computer Engineering at LDRP Institute of Technology and Research With 7.66 CGPA, Gandhinagar, Gujarat, India "
                ),
                m()(),
                y(56, "div", 14)(57, "div", 12),
                b(58, "June'20 - May'21"),
                m(),
                y(59, "div", 9),
                b(60, "12th - Dream International School"),
                m(),
                y(61, "div", 13),
                b(62, "Dhoraji"),
                m(),
                y(63, "p"),
                b(
                  64,
                  "12th in Information Technology at  Dream International School with 87%, Dhoraji, Gujarat, India "
                ),
                m()()()(),
                O(65, "div", 17),
                m()(),
                y(66, "div", 18)(67, "div", 3),
                b(68, "My Skills"),
                m(),
                y(69, "div", 4)(70, "div", 5)(71, "div", 19)(72, "div", 20)(
                  73,
                  "div",
                  7
                ),
                O(74, "i", 21),
                m(),
                y(75, "div", 9),
                b(76, "Categories"),
                m()(),
                y(77, "ul")(78, "li", 22)(79, "div", 9),
                b(80, "Frontend (Html, Css, Java Script)"),
                m(),
                y(81, "div", 23),
                O(82, "div", 24),
                m()(),
                y(83, "li", 22)(84, "div", 9),
                b(85, "Backend(Python,Node.js)"),
                m(),
                y(86, "div", 23),
                O(87, "div", 25),
                m()(),
                y(88, "li", 22)(89, "div", 9),
                b(90, "Framework(Angular, Django, React)"),
                m(),
                y(91, "div", 23),
                O(92, "div", 26),
                m()(),
                y(93, "li")(94, "div", 9),
                b(95, "Database"),
                m(),
                y(96, "div", 23),
                O(97, "div", 27),
                m()()()()(),
                y(98, "div", 5)(99, "div", 28)(100, "div", 20)(101, "div", 7),
                O(102, "i", 29),
                m(),
                y(103, "div", 9),
                b(104, "Communication Skills"),
                m()(),
                y(105, "ul")(106, "li", 22)(107, "div", 9),
                b(108, "English"),
                m(),
                y(109, "div", 23),
                O(110, "div", 30),
                m()(),
                y(111, "li", 22)(112, "div", 9),
                b(113, "Gujarati"),
                m(),
                y(114, "div", 23),
                O(115, "div", 30),
                m()(),
                y(116, "li", 22)(117, "div", 9),
                b(118, "Hindi"),
                m(),
                y(119, "div", 23),
                O(120, "div", 30),
                m()()()()(),
                y(121, "div", 5)(122, "div", 31)(123, "div", 20)(124, "div", 7),
                O(125, "i", 32),
                m(),
                y(126, "div", 9),
                b(127, "Skill Details"),
                m()(),
                y(128, "ul")(129, "li")(130, "div", 9),
                b(131, "Java"),
                m(),
                y(132, "div", 33)(133, "span"),
                b(134, "90%"),
                m()()(),
                y(135, "li")(136, "div", 9),
                b(137, "Node.js"),
                m(),
                y(138, "div", 34)(139, "span"),
                b(140, "75%"),
                m()()(),
                y(141, "li")(142, "div", 9),
                b(143, "Python"),
                m(),
                y(144, "div", 35)(145, "span"),
                b(146, "85%"),
                m()()(),
                y(147, "li")(148, "div", 9),
                b(149, "Mysql"),
                m(),
                y(150, "div", 36)(151, "span"),
                b(152, "95%"),
                m()()()()()(),
                y(153, "div", 5)(154, "div", 37)(155, "div", 20)(156, "div", 7),
                O(157, "i", 38),
                m(),
                y(158, "div", 9),
                b(159, "Knowledge"),
                m()(),
                y(160, "ul")(161, "li")(162, "div", 9),
                b(163, "Web Development"),
                m()(),
               
                y(167, "li")(168, "div", 9),
                b(169, "Web Design"),
                m()(),
                
                
                y(176, "li")(177, "div", 9),
                b(178, "Git & GitHub"),
                m()(),
                y(179, "li")(180, "div", 9),
                b(181, "MongoDB"),
                m()(),
                y(182, "li")(183, "div", 9),
                b(184, "Responsive sites"),
                m()()()()(),
                O(185, "div", 17),
                m()()()());
            },
          }));
        }
        return e;
      })();
      const bB = function (e) {
        return { active: e };
      };
      function SB(e, n) {
        if (1 & e) {
          const t = Il();
          y(0, "div", 8)(1, "label")(2, "input", 9),
            Ke("ngModelChange", function (i) {
              return nr(t), rr((Qe().selectedFilter = i));
            })("change", function () {
              return nr(t), rr(Qe().filterItems());
            }),
            m(),
            b(3),
            m()();
        }
        if (2 & e) {
          const t = n.$implicit,
            r = Qe();
          Q("ngClass", cr(4, bB, r.selectedFilter === t.value)),
            W(2),
            Q("value", t.value)("ngModel", r.selectedFilter),
            W(1),
            uo(" ", t.label, " ");
        }
      }
      function IB(e, n) {
        if (
          (1 & e &&
            (y(0, "div", 22)(1, "div", 23)(2, "div", 12),
            O(3, "img", 14),
            m(),
            y(4, "div", 17)(5, "div", 24)(6, "h1"),
            b(7),
            m(),
            y(8, "div", 25),
            b(9, "Design"),
            m(),
            O(10, "div", 26),
            y(11, "a", 27)(12, "span", 28),
            b(13, "View Project"),
            m(),
            O(14, "span", 29),
            m()()()()()),
          2 & e)
        ) {
          const t = Qe().$implicit;
          Q("id", t.imagePopupId),
            W(3),
            Q("src", t.imageUrl, Or),
            W(4),
            Gi(t.name);
        }
      }
      function TB(e, n) {
        if ((1 & e && (y(0, "div", 30), O(1, "a", 31), m()), 2 & e)) {
          const t = Qe().$implicit;
          Q("id", t.galleryPopupId), W(1), Q("href", t.link, Or);
        }
      }
      function MB(e, n) {
        if (
          (1 & e &&
            (y(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "a", 13),
            O(4, "img", 14),
            y(5, "span", 15),
            O(6, "span", 16),
            m()()(),
            y(7, "div", 17)(8, "a", 18),
            b(9),
            m(),
            y(10, "div", 19),
            b(11),
            m()(),
            qe(12, IB, 15, 3, "div", 20),
            qe(13, TB, 2, 2, "div", 21),
            m()()),
          2 & e)
        ) {
          const t = n.$implicit;
          W(3),
            Q("href", t.link, Or),
            W(1),
            Q("src", t.imageUrl, Or),
            W(4),
            Q("href", t.link, Or),
            W(1),
            Gi(t.name),
            W(2),
            uo(
              " ",
              t.category.charAt(0).toUpperCase() + t.category.slice(1),
              " "
            ),
            W(1),
            Q("ngIf", "design" === t.category),
            W(1),
            Q("ngIf", "gallery" === t.category);
        }
      }
      $("body").addClass("done");
      const AB = [
        { path: "about", component: yB, data: { animation: "About" } },
        { path: "contact", component: wB, data: { animation: "Contact" } },
        { path: "resume", component: EB, data: { animation: "Resume" } },
        {
          path: "works",
          component: (() => {
            class e {
              constructor() {
                (this.windowWidth = window.innerWidth),
                  (this.filters = [
                    { label: "All", value: "grid-item" },
                    { label: "Html/Css", value: "Html/Css" },
                    { label: "JavaScript", value: "JavaScript" },
                    { label: "Angular", value: "angular" },
                    { label: "React", value: "React" },
                  ]),
                  (this.selectedFilter = "grid-item"),
                  (this.workItems = [

                     {
                      category: "angular",
                      imageUrl: "./assets/images/works/angular-portfolio.png",
                      name: "Personal Portfolio 02",
                      link: "./",
                    },
                    {
                      category: "JavaScript",
                      imageUrl:
                        "./assets/images/works/Foodfleet.png",
                      name: "Foodfleet",
                      link: "http://github.com/Hyperrr69/FoodFleet",
                    },
                    
                     
                    {
                      category: "Html/Css",
                      imageUrl:
                        "./assets/images/works/Popcorntime.png",
                      name: "PopcornTime ",
                      link: "https://github.com/Hyperrr69/PopcornTime",
                    },
                    {
                      category: "React",
                      imageUrl: "./assets/images/works/Job_Seekers.png",
                      name: "Job_Seekers",
                      link: "https://github.com/Hyperrr69/Job_Seekers",
                    },
                    {
                      category: "JavaScript",
                      imageUrl: "./assets/images/works/Git-seek.png",
                      name: "Git-seek ",
                      link: "https://github.com/Hyperrr69/Git-seek",
                    },
                   
                  {
                      category: "JavaScript",
                      imageUrl: "./assets/images/works/Personal_Portfolio.png",
                      name: "Personal Portfolio 01 ",
                      link: "https://github.com/Hyperrr69/My-Portfolio",
                    },
                    
                  ]),
                  (this.filteredItems = []);
              }
              handleWindowResize() {
                this.windowWidth = window.innerWidth;
              }
              ngOnInit() {
                if (
                  (hs(window, "resize").subscribe(() => {
                    this.handleWindowResize();
                  }),
                  this.filterItems(),
                  this.windowWidth <= 1185)
                ) {
                  const r = document.querySelector("#works-card");
                  r?.classList.remove("fadeInLeft"),
                    r?.classList.add("fadeInDown");
                }
              }
              ngOnDestroy() {
                const t = document.querySelector("#works-card");
                t &&
                  (t.classList.remove("fadeInLeft"),
                  t.classList.remove("active"),
                  t.classList.add(
                    this.windowWidth <= 1185 ? "fadeOutUp" : "fadeOutLeft"
                  ));
              }
              filterItems() {
                this.filteredItems =
                  "grid-item" === this.selectedFilter
                    ? this.workItems
                    : this.workItems.filter(
                        (t) => t.category === this.selectedFilter
                      );
              }
              static #e = (this.ɵfac = function (r) {
                return new (r || e)();
              });
              static #t = (this.ɵcmp = Ue({
                type: e,
                selectors: [["app-works"]],
                decls: 9,
                vars: 2,
                consts: [
                  [
                    "id",
                    "works-card",
                    1,
                    "card-inner",
                    "animated",
                    "fadeInLeft",
                    "active",
                  ],
                  [1, "card-wrap"],
                  [1, "content", "works"],
                  [1, "title"],
                  [1, "filter-menu", "filter-button-group"],
                  ["class", "f_btn", 3, "ngClass", 4, "ngFor", "ngForOf"],
                  [1, "row", "grid-items", "border-line-v"],
                  [
                    "class",
                    "col col-d-6 col-t-6 col-m-12 grid-item",
                    4,
                    "ngFor",
                    "ngForOf",
                  ],
                  [1, "f_btn", 3, "ngClass"],
                  [
                    "type",
                    "radio",
                    "name",
                    "fl_radio",
                    3,
                    "value",
                    "ngModel",
                    "ngModelChange",
                    "change",
                  ],
                  [1, "col", "col-d-6", "col-t-6", "col-m-12", "grid-item"],
                  [1, "box-item"],
                  [1, "image"],
                  ["target", "_blank", 1, "has-popup-image", 3, "href"],
                  ["alt", "", 3, "src"],
                  [1, "info"],
                  [1, "ion", "ion-image"],
                  [1, "desc"],
                  ["target", "_blank", 1, "name", "has-popup-image", 3, "href"],
                  [1, "category"],
                  ["class", "popup-box mfp-fade mfp-hide", 3, "id", 4, "ngIf"],
                  ["class", "mfp-hide", 3, "id", 4, "ngIf"],
                  [1, "popup-box", "mfp-fade", "mfp-hide", 3, "id"],
                  [1, "content"],
                  [1, "post-box"],
                  [1, "blog-detail"],
                  [1, "blog-content"],
                  ["href", "#", 1, "button"],
                  [1, "text"],
                  [1, "arrow"],
                  [1, "mfp-hide", 3, "id"],
                  [3, "href"],
                ],
                template: function (r, i) {
                  1 & r &&
                    (y(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
                    b(4, "Recent Works"),
                    m(),
                    y(5, "div", 4),
                    qe(6, SB, 4, 6, "div", 5),
                    m(),
                    y(7, "div", 6),
                    qe(8, MB, 14, 7, "div", 7),
                    m()()()()),
                    2 & r &&
                      (W(6),
                      Q("ngForOf", i.filters),
                      W(2),
                      Q("ngForOf", i.filteredItems));
                },
                dependencies: [Io, bh, Sh, xo, Ap, vp, Mp],
                styles: ["a[_ngcontent-%COMP%]{cursor:pointer!important}"],
              }));
            }
            return e;
          })(),
          data: { animation: "Works" },
        },
        { path: "", pathMatch: "full", redirectTo: "about" },
        { path: "**", pathMatch: "full", redirectTo: "about" },
      ];
      let NB = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵmod = Xe({ type: e }));
          static #n = (this.ɵinj = He({ imports: [L0.forRoot(AB), L0] }));
        }
        return e;
      })();
      const RB = Hh("routeAnimations", [
        su("* <=> *", [
          Hr({ position: "relative" }),
          $h(
            ":leave",
            [Uh("500ms ease-out", Hr({ right: "100%", opacity: 0 }))],
            { optional: !0 }
          ),
          $h(":leave", IE(), { optional: !0 }),
        ]),
      ]);
      class ec {
        static equals(n, t, r) {
          return r
            ? this.resolveFieldData(n, r) === this.resolveFieldData(t, r)
            : this.equalsByValue(n, t);
        }
        static equalsByValue(n, t) {
          if (n === t) return !0;
          if (n && t && "object" == typeof n && "object" == typeof t) {
            var s,
              o,
              a,
              r = Array.isArray(n),
              i = Array.isArray(t);
            if (r && i) {
              if ((o = n.length) != t.length) return !1;
              for (s = o; 0 != s--; )
                if (!this.equalsByValue(n[s], t[s])) return !1;
              return !0;
            }
            if (r != i) return !1;
            var l = this.isDate(n),
              u = this.isDate(t);
            if (l != u) return !1;
            if (l && u) return n.getTime() == t.getTime();
            var c = n instanceof RegExp,
              d = t instanceof RegExp;
            if (c != d) return !1;
            if (c && d) return n.toString() == t.toString();
            var f = Object.keys(n);
            if ((o = f.length) !== Object.keys(t).length) return !1;
            for (s = o; 0 != s--; )
              if (!Object.prototype.hasOwnProperty.call(t, f[s])) return !1;
            for (s = o; 0 != s--; )
              if (!this.equalsByValue(n[(a = f[s])], t[a])) return !1;
            return !0;
          }
          return n != n && t != t;
        }
        static resolveFieldData(n, t) {
          if (n && t) {
            if (this.isFunction(t)) return t(n);
            if (-1 == t.indexOf(".")) return n[t];
            {
              let r = t.split("."),
                i = n;
              for (let s = 0, o = r.length; s < o; ++s) {
                if (null == i) return null;
                i = i[r[s]];
              }
              return i;
            }
          }
          return null;
        }
        static isFunction(n) {
          return !!(n && n.constructor && n.call && n.apply);
        }
        static reorderArray(n, t, r) {
          n &&
            t !== r &&
            (r >= n.length && ((r %= n.length), (t %= n.length)),
            n.splice(r, 0, n.splice(t, 1)[0]));
        }
        static insertIntoOrderedArray(n, t, r, i) {
          if (r.length > 0) {
            let s = !1;
            for (let o = 0; o < r.length; o++)
              if (this.findIndexInList(r[o], i) > t) {
                r.splice(o, 0, n), (s = !0);
                break;
              }
            s || r.push(n);
          } else r.push(n);
        }
        static findIndexInList(n, t) {
          let r = -1;
          if (t)
            for (let i = 0; i < t.length; i++)
              if (t[i] == n) {
                r = i;
                break;
              }
          return r;
        }
        static contains(n, t) {
          if (null != n && t && t.length)
            for (let r of t) if (this.equals(n, r)) return !0;
          return !1;
        }
        static removeAccents(n) {
          return (
            n &&
              n.search(/[\xC0-\xFF]/g) > -1 &&
              (n = n
                .replace(/[\xC0-\xC5]/g, "A")
                .replace(/[\xC6]/g, "AE")
                .replace(/[\xC7]/g, "C")
                .replace(/[\xC8-\xCB]/g, "E")
                .replace(/[\xCC-\xCF]/g, "I")
                .replace(/[\xD0]/g, "D")
                .replace(/[\xD1]/g, "N")
                .replace(/[\xD2-\xD6\xD8]/g, "O")
                .replace(/[\xD9-\xDC]/g, "U")
                .replace(/[\xDD]/g, "Y")
                .replace(/[\xDE]/g, "P")
                .replace(/[\xE0-\xE5]/g, "a")
                .replace(/[\xE6]/g, "ae")
                .replace(/[\xE7]/g, "c")
                .replace(/[\xE8-\xEB]/g, "e")
                .replace(/[\xEC-\xEF]/g, "i")
                .replace(/[\xF1]/g, "n")
                .replace(/[\xF2-\xF6\xF8]/g, "o")
                .replace(/[\xF9-\xFC]/g, "u")
                .replace(/[\xFE]/g, "p")
                .replace(/[\xFD\xFF]/g, "y")),
            n
          );
        }
        static isDate(n) {
          return "[object Date]" === Object.prototype.toString.call(n);
        }
        static isEmpty(n) {
          return (
            null == n ||
            "" === n ||
            (Array.isArray(n) && 0 === n.length) ||
            (!this.isDate(n) &&
              "object" == typeof n &&
              0 === Object.keys(n).length)
          );
        }
        static isNotEmpty(n) {
          return !this.isEmpty(n);
        }
        static compare(n, t, r, i = 1) {
          let s = -1;
          const o = this.isEmpty(n),
            a = this.isEmpty(t);
          return (
            (s =
              o && a
                ? 0
                : o
                ? i
                : a
                ? -i
                : "string" == typeof n && "string" == typeof t
                ? n.localeCompare(t, r, { numeric: !0 })
                : n < t
                ? -1
                : n > t
                ? 1
                : 0),
            s
          );
        }
        static sort(n, t, r = 1, i, s = 1) {
          return (1 === s ? r : s) * ec.compare(n, t, i, r);
        }
        static merge(n, t) {
          if (null != n || null != t)
            return (null != n && "object" != typeof n) ||
              (null != t && "object" != typeof t)
              ? (null != n && "string" != typeof n) ||
                (null != t && "string" != typeof t)
                ? t || n
                : [n || "", t || ""].join(" ")
              : { ...(n || {}), ...(t || {}) };
        }
        static isPrintableCharacter(n = "") {
          return this.isNotEmpty(n) && 1 === n.length && n.match(/\S| /);
        }
        static getItemValue(n, ...t) {
          return this.isFunction(n) ? n(...t) : n;
        }
        static findLastIndex(n, t) {
          let r = -1;
          if (this.isNotEmpty(n))
            try {
              r = n.findLastIndex(t);
            } catch {
              r = n.lastIndexOf([...n].reverse().find(t));
            }
          return r;
        }
        static findLast(n, t) {
          let r;
          if (this.isNotEmpty(n))
            try {
              r = n.findLast(t);
            } catch {
              r = [...n].reverse().find(t);
            }
          return r;
        }
      }
      var H0 = 0;
      function tc(e = "pn_id_") {
        return `${e}${++H0}`;
      }
      var pg = (function OB() {
        let e = [];
        const i = (s) => (s && parseInt(s.style.zIndex, 10)) || 0;
        return {
          get: i,
          set: (s, o, a) => {
            o &&
              (o.style.zIndex = String(
                ((s, o) => {
                  let a = e.length > 0 ? e[e.length - 1] : { key: s, value: o },
                    l = a.value + (a.key === s ? 0 : o) + 2;
                  return e.push({ key: s, value: l }), l;
                })(s, a)
              ));
          },
          clear: (s) => {
            s &&
              (((s) => {
                e = e.filter((o) => o.value !== s);
              })(i(s)),
              (s.style.zIndex = ""));
          },
          getCurrent: () => (e.length > 0 ? e[e.length - 1].value : 0),
        };
      })();
      const PB = ["*"];
      let la = (() => {
          class e {
            label;
            spin = !1;
            styleClass;
            role;
            ariaLabel;
            ariaHidden;
            ngOnInit() {
              this.getAttributes();
            }
            getAttributes() {
              const t = ec.isEmpty(this.label);
              (this.role = t ? void 0 : "img"),
                (this.ariaLabel = t ? void 0 : this.label),
                (this.ariaHidden = t);
            }
            getClassNames() {
              return `p-icon ${this.styleClass ? this.styleClass + " " : ""}${
                this.spin ? "p-icon-spin" : ""
              }`;
            }
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵcmp = Ue({
              type: e,
              selectors: [["ng-component"]],
              hostAttrs: [1, "p-element", "p-icon-wrapper"],
              inputs: {
                label: "label",
                spin: "spin",
                styleClass: "styleClass",
              },
              standalone: !0,
              features: [ur],
              ngContentSelectors: PB,
              decls: 1,
              vars: 0,
              template: function (r, i) {
                1 & r &&
                  ((function U_(e) {
                    const n = E()[Ne][Je];
                    if (!n.projection) {
                      const r = (n.projection = Ls(e ? e.length : 1, null)),
                        i = r.slice();
                      let s = n.child;
                      for (; null !== s; ) {
                        const o = e ? PR(s, e) : 0;
                        null !== o &&
                          (i[o] ? (i[o].projectionNext = s) : (r[o] = s),
                          (i[o] = s)),
                          (s = s.next);
                      }
                    }
                  })(),
                  (function $_(e, n = 0, t) {
                    const r = E(),
                      i = ee(),
                      s = xi(i, Y + e, 16, null, t || null);
                    null === s.projection && (s.projection = n),
                      $c(),
                      (!r[Pn] || di()) &&
                        32 != (32 & s.flags) &&
                        (function xM(e, n, t) {
                          Wy(
                            n[z],
                            0,
                            n,
                            t,
                            md(e, t, n),
                            By(t.parent || n[Je], t, n)
                          );
                        })(i, r, s);
                  })(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return e;
        })(),
        U0 = (() => {
          class e extends la {
            static ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = Te(e)))(i || e);
              };
            })();
            static ɵcmp = Ue({
              type: e,
              selectors: [["CheckIcon"]],
              standalone: !0,
              features: [te, ur],
              decls: 2,
              vars: 5,
              consts: [
                [
                  "width",
                  "14",
                  "height",
                  "14",
                  "viewBox",
                  "0 0 14 14",
                  "fill",
                  "none",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                ],
                [
                  "d",
                  "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
                  "fill",
                  "currentColor",
                ],
              ],
              template: function (r, i) {
                1 & r && (hi(), y(0, "svg", 0), O(1, "path", 1), m()),
                  2 & r &&
                    (Cn(i.getClassNames()),
                    ue("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)(
                      "role",
                      i.role
                    ));
              },
              encapsulation: 2,
            });
          }
          return e;
        })(),
        $0 = (() => {
          class e extends la {
            pathId;
            ngOnInit() {
              this.pathId = "url(#" + tc() + ")";
            }
            static ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = Te(e)))(i || e);
              };
            })();
            static ɵcmp = Ue({
              type: e,
              selectors: [["ExclamationTriangleIcon"]],
              standalone: !0,
              features: [te, ur],
              decls: 8,
              vars: 7,
              consts: [
                [
                  "width",
                  "14",
                  "height",
                  "14",
                  "viewBox",
                  "0 0 14 14",
                  "fill",
                  "none",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                ],
                [
                  "d",
                  "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
                  "fill",
                  "currentColor",
                ],
                [
                  "d",
                  "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
                  "fill",
                  "currentColor",
                ],
                [
                  "d",
                  "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
                  "fill",
                  "currentColor",
                ],
                [3, "id"],
                ["width", "14", "height", "14", "fill", "white"],
              ],
              template: function (r, i) {
                1 & r &&
                  (hi(),
                  y(0, "svg", 0)(1, "g"),
                  O(2, "path", 1)(3, "path", 2)(4, "path", 3),
                  m(),
                  y(5, "defs")(6, "clipPath", 4),
                  O(7, "rect", 5),
                  m()()()),
                  2 & r &&
                    (Cn(i.getClassNames()),
                    ue("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)(
                      "role",
                      i.role
                    ),
                    W(1),
                    ue("clip-path", i.pathId),
                    W(5),
                    Q("id", i.pathId));
              },
              encapsulation: 2,
            });
          }
          return e;
        })(),
        z0 = (() => {
          class e extends la {
            pathId;
            ngOnInit() {
              this.pathId = "url(#" + tc() + ")";
            }
            static ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = Te(e)))(i || e);
              };
            })();
            static ɵcmp = Ue({
              type: e,
              selectors: [["InfoCircleIcon"]],
              standalone: !0,
              features: [te, ur],
              decls: 6,
              vars: 7,
              consts: [
                [
                  "width",
                  "14",
                  "height",
                  "14",
                  "viewBox",
                  "0 0 14 14",
                  "fill",
                  "none",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                ],
                [
                  "fill-rule",
                  "evenodd",
                  "clip-rule",
                  "evenodd",
                  "d",
                  "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
                  "fill",
                  "currentColor",
                ],
                [3, "id"],
                ["width", "14", "height", "14", "fill", "white"],
              ],
              template: function (r, i) {
                1 & r &&
                  (hi(),
                  y(0, "svg", 0)(1, "g"),
                  O(2, "path", 1),
                  m(),
                  y(3, "defs")(4, "clipPath", 2),
                  O(5, "rect", 3),
                  m()()()),
                  2 & r &&
                    (Cn(i.getClassNames()),
                    ue("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)(
                      "role",
                      i.role
                    ),
                    W(1),
                    ue("clip-path", i.pathId),
                    W(3),
                    Q("id", i.pathId));
              },
              encapsulation: 2,
            });
          }
          return e;
        })(),
        G0 = (() => {
          class e extends la {
            static ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = Te(e)))(i || e);
              };
            })();
            static ɵcmp = Ue({
              type: e,
              selectors: [["TimesIcon"]],
              standalone: !0,
              features: [te, ur],
              decls: 2,
              vars: 5,
              consts: [
                [
                  "width",
                  "14",
                  "height",
                  "14",
                  "viewBox",
                  "0 0 14 14",
                  "fill",
                  "none",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                ],
                [
                  "d",
                  "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
                  "fill",
                  "currentColor",
                ],
              ],
              template: function (r, i) {
                1 & r && (hi(), y(0, "svg", 0), O(1, "path", 1), m()),
                  2 & r &&
                    (Cn(i.getClassNames()),
                    ue("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)(
                      "role",
                      i.role
                    ));
              },
              encapsulation: 2,
            });
          }
          return e;
        })(),
        W0 = (() => {
          class e extends la {
            pathId;
            ngOnInit() {
              this.pathId = "url(#" + tc() + ")";
            }
            static ɵfac = (function () {
              let t;
              return function (i) {
                return (t || (t = Te(e)))(i || e);
              };
            })();
            static ɵcmp = Ue({
              type: e,
              selectors: [["TimesCircleIcon"]],
              standalone: !0,
              features: [te, ur],
              decls: 6,
              vars: 7,
              consts: [
                [
                  "width",
                  "14",
                  "height",
                  "14",
                  "viewBox",
                  "0 0 14 14",
                  "fill",
                  "none",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                ],
                [
                  "fill-rule",
                  "evenodd",
                  "clip-rule",
                  "evenodd",
                  "d",
                  "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
                  "fill",
                  "currentColor",
                ],
                [3, "id"],
                ["width", "14", "height", "14", "fill", "white"],
              ],
              template: function (r, i) {
                1 & r &&
                  (hi(),
                  y(0, "svg", 0)(1, "g"),
                  O(2, "path", 1),
                  m(),
                  y(3, "defs")(4, "clipPath", 2),
                  O(5, "rect", 3),
                  m()()()),
                  2 & r &&
                    (Cn(i.getClassNames()),
                    ue("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)(
                      "role",
                      i.role
                    ),
                    W(1),
                    ue("clip-path", i.pathId),
                    W(3),
                    Q("id", i.pathId));
              },
              encapsulation: 2,
            });
          }
          return e;
        })(),
        St = (() => {
          class e {
            static zindex = 1e3;
            static calculatedScrollbarWidth = null;
            static calculatedScrollbarHeight = null;
            static browser;
            static addClass(t, r) {
              t &&
                r &&
                (t.classList ? t.classList.add(r) : (t.className += " " + r));
            }
            static addMultipleClasses(t, r) {
              if (t && r)
                if (t.classList) {
                  let i = r.trim().split(" ");
                  for (let s = 0; s < i.length; s++) t.classList.add(i[s]);
                } else {
                  let i = r.split(" ");
                  for (let s = 0; s < i.length; s++) t.className += " " + i[s];
                }
            }
            static removeClass(t, r) {
              t &&
                r &&
                (t.classList
                  ? t.classList.remove(r)
                  : (t.className = t.className.replace(
                      new RegExp(
                        "(^|\\b)" + r.split(" ").join("|") + "(\\b|$)",
                        "gi"
                      ),
                      " "
                    )));
            }
            static hasClass(t, r) {
              return (
                !(!t || !r) &&
                (t.classList
                  ? t.classList.contains(r)
                  : new RegExp("(^| )" + r + "( |$)", "gi").test(t.className))
              );
            }
            static siblings(t) {
              return Array.prototype.filter.call(
                t.parentNode.children,
                function (r) {
                  return r !== t;
                }
              );
            }
            static find(t, r) {
              return Array.from(t.querySelectorAll(r));
            }
            static findSingle(t, r) {
              return this.isElement(t) ? t.querySelector(r) : null;
            }
            static index(t) {
              let r = t.parentNode.childNodes,
                i = 0;
              for (var s = 0; s < r.length; s++) {
                if (r[s] == t) return i;
                1 == r[s].nodeType && i++;
              }
              return -1;
            }
            static indexWithinGroup(t, r) {
              let i = t.parentNode ? t.parentNode.childNodes : [],
                s = 0;
              for (var o = 0; o < i.length; o++) {
                if (i[o] == t) return s;
                i[o].attributes &&
                  i[o].attributes[r] &&
                  1 == i[o].nodeType &&
                  s++;
              }
              return -1;
            }
            static appendOverlay(t, r, i = "self") {
              "self" !== i && t && r && this.appendChild(t, r);
            }
            static alignOverlay(t, r, i = "self", s = !0) {
              t &&
                r &&
                (s && (t.style.minWidth = `${e.getOuterWidth(r)}px`),
                "self" === i
                  ? this.relativePosition(t, r)
                  : this.absolutePosition(t, r));
            }
            static relativePosition(t, r) {
              const i = (C) => {
                  if (C)
                    return "relative" ===
                      getComputedStyle(C).getPropertyValue("position")
                      ? C
                      : i(C.parentElement);
                },
                s = t.offsetParent
                  ? { width: t.offsetWidth, height: t.offsetHeight }
                  : this.getHiddenElementDimensions(t),
                o = r.offsetHeight,
                a = r.getBoundingClientRect(),
                l = this.getWindowScrollTop(),
                u = this.getWindowScrollLeft(),
                c = this.getViewport(),
                f = i(t)?.getBoundingClientRect() || {
                  top: -1 * l,
                  left: -1 * u,
                };
              let h, p;
              a.top + o + s.height > c.height
                ? ((h = a.top - f.top - s.height),
                  (t.style.transformOrigin = "bottom"),
                  a.top + h < 0 && (h = -1 * a.top))
                : ((h = o + a.top - f.top), (t.style.transformOrigin = "top"));
              const g = a.left + s.width - c.width;
              (p =
                s.width > c.width
                  ? -1 * (a.left - f.left)
                  : g > 0
                  ? a.left - f.left - g
                  : a.left - f.left),
                (t.style.top = h + "px"),
                (t.style.left = p + "px");
            }
            static absolutePosition(t, r) {
              const i = t.offsetParent
                  ? { width: t.offsetWidth, height: t.offsetHeight }
                  : this.getHiddenElementDimensions(t),
                s = i.height,
                o = i.width,
                a = r.offsetHeight,
                l = r.offsetWidth,
                u = r.getBoundingClientRect(),
                c = this.getWindowScrollTop(),
                d = this.getWindowScrollLeft(),
                f = this.getViewport();
              let h, p;
              u.top + a + s > f.height
                ? ((h = u.top + c - s),
                  (t.style.transformOrigin = "bottom"),
                  h < 0 && (h = c))
                : ((h = a + u.top + c), (t.style.transformOrigin = "top")),
                (p =
                  u.left + o > f.width
                    ? Math.max(0, u.left + d + l - o)
                    : u.left + d),
                (t.style.top = h + "px"),
                (t.style.left = p + "px");
            }
            static getParents(t, r = []) {
              return null === t.parentNode
                ? r
                : this.getParents(t.parentNode, r.concat([t.parentNode]));
            }
            static getScrollableParents(t) {
              let r = [];
              if (t) {
                let i = this.getParents(t);
                const s = /(auto|scroll)/,
                  o = (a) => {
                    let l = window.getComputedStyle(a, null);
                    return (
                      s.test(l.getPropertyValue("overflow")) ||
                      s.test(l.getPropertyValue("overflowX")) ||
                      s.test(l.getPropertyValue("overflowY"))
                    );
                  };
                for (let a of i) {
                  let l = 1 === a.nodeType && a.dataset.scrollselectors;
                  if (l) {
                    let u = l.split(",");
                    for (let c of u) {
                      let d = this.findSingle(a, c);
                      d && o(d) && r.push(d);
                    }
                  }
                  9 !== a.nodeType && o(a) && r.push(a);
                }
              }
              return r;
            }
            static getHiddenElementOuterHeight(t) {
              (t.style.visibility = "hidden"), (t.style.display = "block");
              let r = t.offsetHeight;
              return (
                (t.style.display = "none"), (t.style.visibility = "visible"), r
              );
            }
            static getHiddenElementOuterWidth(t) {
              (t.style.visibility = "hidden"), (t.style.display = "block");
              let r = t.offsetWidth;
              return (
                (t.style.display = "none"), (t.style.visibility = "visible"), r
              );
            }
            static getHiddenElementDimensions(t) {
              let r = {};
              return (
                (t.style.visibility = "hidden"),
                (t.style.display = "block"),
                (r.width = t.offsetWidth),
                (r.height = t.offsetHeight),
                (t.style.display = "none"),
                (t.style.visibility = "visible"),
                r
              );
            }
            static scrollInView(t, r) {
              let i = getComputedStyle(t).getPropertyValue("borderTopWidth"),
                s = i ? parseFloat(i) : 0,
                o = getComputedStyle(t).getPropertyValue("paddingTop"),
                a = o ? parseFloat(o) : 0,
                l = t.getBoundingClientRect(),
                c =
                  r.getBoundingClientRect().top +
                  document.body.scrollTop -
                  (l.top + document.body.scrollTop) -
                  s -
                  a,
                d = t.scrollTop,
                f = t.clientHeight,
                h = this.getOuterHeight(r);
              c < 0
                ? (t.scrollTop = d + c)
                : c + h > f && (t.scrollTop = d + c - f + h);
            }
            static fadeIn(t, r) {
              t.style.opacity = 0;
              let i = +new Date(),
                s = 0,
                o = function () {
                  (s =
                    +t.style.opacity.replace(",", ".") +
                    (new Date().getTime() - i) / r),
                    (t.style.opacity = s),
                    (i = +new Date()),
                    +s < 1 &&
                      ((window.requestAnimationFrame &&
                        requestAnimationFrame(o)) ||
                        setTimeout(o, 16));
                };
              o();
            }
            static fadeOut(t, r) {
              var i = 1,
                a = 50 / r;
              let l = setInterval(() => {
                (i -= a) <= 0 && ((i = 0), clearInterval(l)),
                  (t.style.opacity = i);
              }, 50);
            }
            static getWindowScrollTop() {
              let t = document.documentElement;
              return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0);
            }
            static getWindowScrollLeft() {
              let t = document.documentElement;
              return (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0);
            }
            static matches(t, r) {
              var i = Element.prototype;
              return (
                i.matches ||
                i.webkitMatchesSelector ||
                i.mozMatchesSelector ||
                i.msMatchesSelector ||
                function (o) {
                  return (
                    -1 !== [].indexOf.call(document.querySelectorAll(o), this)
                  );
                }
              ).call(t, r);
            }
            static getOuterWidth(t, r) {
              let i = t.offsetWidth;
              if (r) {
                let s = getComputedStyle(t);
                i += parseFloat(s.marginLeft) + parseFloat(s.marginRight);
              }
              return i;
            }
            static getHorizontalPadding(t) {
              let r = getComputedStyle(t);
              return parseFloat(r.paddingLeft) + parseFloat(r.paddingRight);
            }
            static getHorizontalMargin(t) {
              let r = getComputedStyle(t);
              return parseFloat(r.marginLeft) + parseFloat(r.marginRight);
            }
            static innerWidth(t) {
              let r = t.offsetWidth,
                i = getComputedStyle(t);
              return (
                (r += parseFloat(i.paddingLeft) + parseFloat(i.paddingRight)), r
              );
            }
            static width(t) {
              let r = t.offsetWidth,
                i = getComputedStyle(t);
              return (
                (r -= parseFloat(i.paddingLeft) + parseFloat(i.paddingRight)), r
              );
            }
            static getInnerHeight(t) {
              let r = t.offsetHeight,
                i = getComputedStyle(t);
              return (
                (r += parseFloat(i.paddingTop) + parseFloat(i.paddingBottom)), r
              );
            }
            static getOuterHeight(t, r) {
              let i = t.offsetHeight;
              if (r) {
                let s = getComputedStyle(t);
                i += parseFloat(s.marginTop) + parseFloat(s.marginBottom);
              }
              return i;
            }
            static getHeight(t) {
              let r = t.offsetHeight,
                i = getComputedStyle(t);
              return (
                (r -=
                  parseFloat(i.paddingTop) +
                  parseFloat(i.paddingBottom) +
                  parseFloat(i.borderTopWidth) +
                  parseFloat(i.borderBottomWidth)),
                r
              );
            }
            static getWidth(t) {
              let r = t.offsetWidth,
                i = getComputedStyle(t);
              return (
                (r -=
                  parseFloat(i.paddingLeft) +
                  parseFloat(i.paddingRight) +
                  parseFloat(i.borderLeftWidth) +
                  parseFloat(i.borderRightWidth)),
                r
              );
            }
            static getViewport() {
              let t = window,
                r = document,
                i = r.documentElement,
                s = r.getElementsByTagName("body")[0];
              return {
                width: t.innerWidth || i.clientWidth || s.clientWidth,
                height: t.innerHeight || i.clientHeight || s.clientHeight,
              };
            }
            static getOffset(t) {
              var r = t.getBoundingClientRect();
              return {
                top:
                  r.top +
                  (window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0),
                left:
                  r.left +
                  (window.pageXOffset ||
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft ||
                    0),
              };
            }
            static replaceElementWith(t, r) {
              let i = t.parentNode;
              if (!i) throw "Can't replace element";
              return i.replaceChild(r, t);
            }
            static getUserAgent() {
              if (navigator && this.isClient()) return navigator.userAgent;
            }
            static isIE() {
              var t = window.navigator.userAgent;
              return (
                t.indexOf("MSIE ") > 0 ||
                (t.indexOf("Trident/") > 0
                  ? (t.indexOf("rv:"), !0)
                  : t.indexOf("Edge/") > 0)
              );
            }
            static isIOS() {
              return (
                /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
              );
            }
            static isAndroid() {
              return /(android)/i.test(navigator.userAgent);
            }
            static isTouchDevice() {
              return "ontouchstart" in window || navigator.maxTouchPoints > 0;
            }
            static appendChild(t, r) {
              if (this.isElement(r)) r.appendChild(t);
              else {
                if (!(r && r.el && r.el.nativeElement))
                  throw "Cannot append " + r + " to " + t;
                r.el.nativeElement.appendChild(t);
              }
            }
            static removeChild(t, r) {
              if (this.isElement(r)) r.removeChild(t);
              else {
                if (!r.el || !r.el.nativeElement)
                  throw "Cannot remove " + t + " from " + r;
                r.el.nativeElement.removeChild(t);
              }
            }
            static removeElement(t) {
              "remove" in Element.prototype
                ? t.remove()
                : t.parentNode.removeChild(t);
            }
            static isElement(t) {
              return "object" == typeof HTMLElement
                ? t instanceof HTMLElement
                : t &&
                    "object" == typeof t &&
                    null !== t &&
                    1 === t.nodeType &&
                    "string" == typeof t.nodeName;
            }
            static calculateScrollbarWidth(t) {
              if (t) {
                let r = getComputedStyle(t);
                return (
                  t.offsetWidth -
                  t.clientWidth -
                  parseFloat(r.borderLeftWidth) -
                  parseFloat(r.borderRightWidth)
                );
              }
              {
                if (null !== this.calculatedScrollbarWidth)
                  return this.calculatedScrollbarWidth;
                let r = document.createElement("div");
                (r.className = "p-scrollbar-measure"),
                  document.body.appendChild(r);
                let i = r.offsetWidth - r.clientWidth;
                return (
                  document.body.removeChild(r),
                  (this.calculatedScrollbarWidth = i),
                  i
                );
              }
            }
            static calculateScrollbarHeight() {
              if (null !== this.calculatedScrollbarHeight)
                return this.calculatedScrollbarHeight;
              let t = document.createElement("div");
              (t.className = "p-scrollbar-measure"),
                document.body.appendChild(t);
              let r = t.offsetHeight - t.clientHeight;
              return (
                document.body.removeChild(t),
                (this.calculatedScrollbarWidth = r),
                r
              );
            }
            static invokeElementMethod(t, r, i) {
              t[r].apply(t, i);
            }
            static clearSelection() {
              if (window.getSelection)
                window.getSelection().empty
                  ? window.getSelection().empty()
                  : window.getSelection().removeAllRanges &&
                    window.getSelection().rangeCount > 0 &&
                    window.getSelection().getRangeAt(0).getClientRects()
                      .length > 0 &&
                    window.getSelection().removeAllRanges();
              else if (document.selection && document.selection.empty)
                try {
                  document.selection.empty();
                } catch {}
            }
            static getBrowser() {
              if (!this.browser) {
                let t = this.resolveUserAgent();
                (this.browser = {}),
                  t.browser &&
                    ((this.browser[t.browser] = !0),
                    (this.browser.version = t.version)),
                  this.browser.chrome
                    ? (this.browser.webkit = !0)
                    : this.browser.webkit && (this.browser.safari = !0);
              }
              return this.browser;
            }
            static resolveUserAgent() {
              let t = navigator.userAgent.toLowerCase(),
                r =
                  /(chrome)[ \/]([\w.]+)/.exec(t) ||
                  /(webkit)[ \/]([\w.]+)/.exec(t) ||
                  /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) ||
                  /(msie) ([\w.]+)/.exec(t) ||
                  (t.indexOf("compatible") < 0 &&
                    /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)) ||
                  [];
              return { browser: r[1] || "", version: r[2] || "0" };
            }
            static isInteger(t) {
              return Number.isInteger
                ? Number.isInteger(t)
                : "number" == typeof t && isFinite(t) && Math.floor(t) === t;
            }
            static isHidden(t) {
              return !t || null === t.offsetParent;
            }
            static isVisible(t) {
              return t && null != t.offsetParent;
            }
            static isExist(t) {
              return null !== t && typeof t < "u" && t.nodeName && t.parentNode;
            }
            static focus(t, r) {
              t && document.activeElement !== t && t.focus(r);
            }
            static getFocusableElements(t) {
              let r = e.find(
                  t,
                  'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [href]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]):not(.p-disabled)'
                ),
                i = [];
              for (let s of r)
                (s.offsetWidth ||
                  s.offsetHeight ||
                  s.getClientRects().length) &&
                  i.push(s);
              return i;
            }
            static getNextFocusableElement(t, r = !1) {
              const i = e.getFocusableElements(t);
              let s = 0;
              if (i && i.length > 0) {
                const o = i.indexOf(i[0].ownerDocument.activeElement);
                r
                  ? (s = -1 == o || 0 === o ? i.length - 1 : o - 1)
                  : -1 != o && o !== i.length - 1 && (s = o + 1);
              }
              return i[s];
            }
            static generateZIndex() {
              return (this.zindex = this.zindex || 999), ++this.zindex;
            }
            static getSelection() {
              return window.getSelection
                ? window.getSelection().toString()
                : document.getSelection
                ? document.getSelection().toString()
                : document.selection
                ? document.selection.createRange().text
                : null;
            }
            static getTargetElement(t, r) {
              if (!t) return null;
              switch (t) {
                case "document":
                  return document;
                case "window":
                  return window;
                case "@next":
                  return r?.nextElementSibling;
                case "@prev":
                  return r?.previousElementSibling;
                case "@parent":
                  return r?.parentElement;
                case "@grandparent":
                  return r?.parentElement.parentElement;
                default:
                  const i = typeof t;
                  if ("string" === i) return document.querySelector(t);
                  if ("object" === i && t.hasOwnProperty("nativeElement"))
                    return this.isExist(t.nativeElement)
                      ? t.nativeElement
                      : void 0;
                  const o =
                    (a = t) && a.constructor && a.call && a.apply ? t() : t;
                  return (o && 9 === o.nodeType) || this.isExist(o) ? o : null;
              }
              var a;
            }
            static isClient() {
              return !!(
                typeof window < "u" &&
                window.document &&
                window.document.createElement
              );
            }
            static getAttribute(t, r) {
              if (t) {
                const i = t.getAttribute(r);
                return isNaN(i)
                  ? "true" === i || "false" === i
                    ? "true" === i
                    : i
                  : +i;
              }
            }
            static calculateBodyScrollbarWidth() {
              return window.innerWidth - document.documentElement.offsetWidth;
            }
            static blockBodyScroll(t = "p-overflow-hidden") {
              document.body.style.setProperty(
                "--scrollbar-width",
                this.calculateBodyScrollbarWidth() + "px"
              ),
                this.addClass(document.body, t);
            }
            static unblockBodyScroll(t = "p-overflow-hidden") {
              document.body.style.removeProperty("--scrollbar-width"),
                this.removeClass(document.body, t);
            }
          }
          return e;
        })(),
        xB = (() => {
          class e {
            document;
            platformId;
            renderer;
            el;
            zone;
            config;
            constructor(t, r, i, s, o, a) {
              (this.document = t),
                (this.platformId = r),
                (this.renderer = i),
                (this.el = s),
                (this.zone = o),
                (this.config = a);
            }
            animationListener;
            mouseDownListener;
            timeout;
            ngAfterViewInit() {
              (function fk(e) {
                return e === eE;
              })(this.platformId) &&
                this.config &&
                this.config.ripple &&
                this.zone.runOutsideAngular(() => {
                  this.create(),
                    (this.mouseDownListener = this.renderer.listen(
                      this.el.nativeElement,
                      "mousedown",
                      this.onMouseDown.bind(this)
                    ));
                });
            }
            onMouseDown(t) {
              let r = this.getInk();
              if (
                !r ||
                "none" ===
                  this.document.defaultView?.getComputedStyle(r, null).display
              )
                return;
              if (
                (St.removeClass(r, "p-ink-active"),
                !St.getHeight(r) && !St.getWidth(r))
              ) {
                let a = Math.max(
                  St.getOuterWidth(this.el.nativeElement),
                  St.getOuterHeight(this.el.nativeElement)
                );
                (r.style.height = a + "px"), (r.style.width = a + "px");
              }
              let i = St.getOffset(this.el.nativeElement),
                s =
                  t.pageX -
                  i.left +
                  this.document.body.scrollTop -
                  St.getWidth(r) / 2,
                o =
                  t.pageY -
                  i.top +
                  this.document.body.scrollLeft -
                  St.getHeight(r) / 2;
              this.renderer.setStyle(r, "top", o + "px"),
                this.renderer.setStyle(r, "left", s + "px"),
                St.addClass(r, "p-ink-active"),
                (this.timeout = setTimeout(() => {
                  let a = this.getInk();
                  a && St.removeClass(a, "p-ink-active");
                }, 401));
            }
            getInk() {
              const t = this.el.nativeElement.children;
              for (let r = 0; r < t.length; r++)
                if (
                  "string" == typeof t[r].className &&
                  -1 !== t[r].className.indexOf("p-ink")
                )
                  return t[r];
              return null;
            }
            resetInk() {
              let t = this.getInk();
              t && St.removeClass(t, "p-ink-active");
            }
            onAnimationEnd(t) {
              this.timeout && clearTimeout(this.timeout),
                St.removeClass(t.currentTarget, "p-ink-active");
            }
            create() {
              let t = this.renderer.createElement("span");
              this.renderer.addClass(t, "p-ink"),
                this.renderer.appendChild(this.el.nativeElement, t),
                this.renderer.setAttribute(t, "aria-hidden", "true"),
                this.renderer.setAttribute(t, "role", "presentation"),
                this.animationListener ||
                  (this.animationListener = this.renderer.listen(
                    t,
                    "animationend",
                    this.onAnimationEnd.bind(this)
                  ));
            }
            remove() {
              let t = this.getInk();
              t &&
                (this.mouseDownListener && this.mouseDownListener(),
                this.animationListener && this.animationListener(),
                (this.mouseDownListener = null),
                (this.animationListener = null),
                St.removeElement(t));
            }
            ngOnDestroy() {
              this.config && this.config.ripple && this.remove();
            }
            static ɵfac = function (r) {
              return new (r || e)(w(Ze), w(ar), w(tn), w(wt), w(le), w(j0, 8));
            };
            static ɵdir = F({
              type: e,
              selectors: [["", "pRipple", ""]],
              hostAttrs: [1, "p-ripple", "p-element"],
            });
          }
          return e;
        })(),
        q0 = (() => {
          class e {
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵmod = Xe({ type: e });
            static ɵinj = He({ imports: [tu] });
          }
          return e;
        })();
      const K0 = ["container"];
      function FB(e, n) {
        1 & e && O(0, "span"),
          2 & e && Cn("p-toast-message-icon pi " + Qe(2).message.icon);
      }
      function LB(e, n) {
        1 & e && O(0, "CheckIcon"),
          2 & e && ue("aria-hidden", !0)("data-pc-section", "icon");
      }
      function kB(e, n) {
        1 & e && O(0, "InfoCircleIcon"),
          2 & e && ue("aria-hidden", !0)("data-pc-section", "icon");
      }
      function VB(e, n) {
        1 & e && O(0, "TimesCircleIcon"),
          2 & e && ue("aria-hidden", !0)("data-pc-section", "icon");
      }
      function jB(e, n) {
        1 & e && O(0, "ExclamationTriangleIcon"),
          2 & e && ue("aria-hidden", !0)("data-pc-section", "icon");
      }
      function BB(e, n) {
        if (
          (1 & e &&
            (y(0, "span", 11),
            so(1),
            qe(2, LB, 1, 2, "CheckIcon", 3),
            qe(3, kB, 1, 2, "InfoCircleIcon", 3),
            qe(4, VB, 1, 2, "TimesCircleIcon", 3),
            qe(5, jB, 1, 2, "ExclamationTriangleIcon", 3),
            oo(),
            m()),
          2 & e)
        ) {
          const t = Qe(2);
          ue("aria-hidden", !0)("data-pc-section", "icon"),
            W(2),
            Q("ngIf", "success" === t.message.severity),
            W(1),
            Q("ngIf", "info" === t.message.severity),
            W(1),
            Q("ngIf", "error" === t.message.severity),
            W(1),
            Q("ngIf", "warn" === t.message.severity);
        }
      }
      function HB(e, n) {
        if (
          (1 & e &&
            (so(0),
            qe(1, FB, 1, 2, "span", 6),
            qe(2, BB, 6, 6, "span", 7),
            y(3, "div", 8)(4, "div", 9),
            b(5),
            m(),
            y(6, "div", 10),
            b(7),
            m()(),
            oo()),
          2 & e)
        ) {
          const t = Qe();
          W(1),
            Q("ngIf", t.message.icon),
            W(1),
            Q("ngIf", !t.message.icon),
            W(1),
            ue("data-pc-section", "text"),
            W(1),
            ue("data-pc-section", "summary"),
            W(1),
            Gi(t.message.summary),
            W(1),
            ue("data-pc-section", "detail"),
            W(1),
            Gi(t.message.detail);
        }
      }
      function UB(e, n) {
        1 & e && _f(0);
      }
      function $B(e, n) {
        1 & e && O(0, "span"),
          2 & e &&
            Cn(
              "pt-1 text-base p-toast-message-icon pi " +
                Qe(2).message.closeIcon
            );
      }
      function zB(e, n) {
        1 & e && O(0, "TimesIcon", 14),
          2 & e &&
            (Q("styleClass", "p-toast-icon-close-icon"),
            ue("aria-hidden", !0)("data-pc-section", "closeicon"));
      }
      function GB(e, n) {
        if (1 & e) {
          const t = Il();
          y(0, "button", 12),
            Ke("click", function (i) {
              return nr(t), rr(Qe().onCloseIconClick(i));
            })("keydown.enter", function (i) {
              return nr(t), rr(Qe().onCloseIconClick(i));
            }),
            qe(1, $B, 1, 2, "span", 6),
            qe(2, zB, 1, 3, "TimesIcon", 13),
            m();
        }
        if (2 & e) {
          const t = Qe();
          ue("aria-label", "Close")("data-pc-section", "closebutton"),
            W(1),
            Q("ngIf", t.message.closeIcon),
            W(1),
            Q("ngIf", !t.message.closeIcon);
        }
      }
      const WB = function (e) {
          return [e, "p-toast-message"];
        },
        qB = function (e, n, t, r) {
          return {
            showTransformParams: e,
            hideTransformParams: n,
            showTransitionParams: t,
            hideTransitionParams: r,
          };
        },
        KB = function (e) {
          return { value: "visible", params: e };
        },
        QB = function (e) {
          return { $implicit: e };
        };
      function ZB(e, n) {
        if (1 & e) {
          const t = Il();
          y(0, "p-toastItem", 3),
            Ke("onClose", function (i) {
              return nr(t), rr(Qe().onMessageClose(i));
            })("@toastAnimation.start", function (i) {
              return nr(t), rr(Qe().onAnimationStart(i));
            })("@toastAnimation.done", function (i) {
              return nr(t), rr(Qe().onAnimationEnd(i));
            }),
            m();
        }
        if (2 & e) {
          const t = n.$implicit,
            r = n.index,
            i = Qe();
          Q("message", t)("index", r)("life", i.life)("template", i.template)(
            "@toastAnimation",
            void 0
          )("showTransformOptions", i.showTransformOptions)(
            "hideTransformOptions",
            i.hideTransformOptions
          )("showTransitionOptions", i.showTransitionOptions)(
            "hideTransitionOptions",
            i.hideTransitionOptions
          );
        }
      }
      let YB = (() => {
          class e {
            zone;
            message;
            index;
            life;
            template;
            showTransformOptions;
            hideTransformOptions;
            showTransitionOptions;
            hideTransitionOptions;
            onClose = new we();
            containerViewChild;
            timeout;
            constructor(t) {
              this.zone = t;
            }
            ngAfterViewInit() {
              this.initTimeout();
            }
            initTimeout() {
              this.message?.sticky ||
                this.zone.runOutsideAngular(() => {
                  this.timeout = setTimeout(() => {
                    this.onClose.emit({
                      index: this.index,
                      message: this.message,
                    });
                  }, this.message?.life || this.life || 3e3);
                });
            }
            clearTimeout() {
              this.timeout &&
                (clearTimeout(this.timeout), (this.timeout = null));
            }
            onMouseEnter() {
              this.clearTimeout();
            }
            onMouseLeave() {
              this.initTimeout();
            }
            onCloseIconClick(t) {
              this.clearTimeout(),
                this.onClose.emit({ index: this.index, message: this.message }),
                t.preventDefault();
            }
            ngOnDestroy() {
              this.clearTimeout();
            }
            static ɵfac = function (r) {
              return new (r || e)(w(le));
            };
            static ɵcmp = Ue({
              type: e,
              selectors: [["p-toastItem"]],
              viewQuery: function (r, i) {
                if ((1 & r && Uf(K0, 5), 2 & r)) {
                  let s;
                  vo((s = _o())) && (i.containerViewChild = s.first);
                }
              },
              hostAttrs: [1, "p-element"],
              inputs: {
                message: "message",
                index: "index",
                life: "life",
                template: "template",
                showTransformOptions: "showTransformOptions",
                hideTransformOptions: "hideTransformOptions",
                showTransitionOptions: "showTransitionOptions",
                hideTransitionOptions: "hideTransitionOptions",
              },
              outputs: { onClose: "onClose" },
              decls: 6,
              vars: 24,
              consts: [
                [
                  "role",
                  "alert",
                  "aria-live",
                  "assertive",
                  "aria-atomic",
                  "true",
                  3,
                  "ngClass",
                  "mouseenter",
                  "mouseleave",
                ],
                ["container", ""],
                [1, "p-toast-message-content", 3, "ngClass"],
                [4, "ngIf"],
                [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                [
                  "type",
                  "button",
                  "class",
                  "p-toast-icon-close p-link",
                  "pRipple",
                  "",
                  3,
                  "click",
                  "keydown.enter",
                  4,
                  "ngIf",
                ],
                [3, "class", 4, "ngIf"],
                ["class", "p-toast-message-icon", 4, "ngIf"],
                [1, "p-toast-message-text"],
                [1, "p-toast-summary"],
                [1, "p-toast-detail"],
                [1, "p-toast-message-icon"],
                [
                  "type",
                  "button",
                  "pRipple",
                  "",
                  1,
                  "p-toast-icon-close",
                  "p-link",
                  3,
                  "click",
                  "keydown.enter",
                ],
                [3, "styleClass", 4, "ngIf"],
                [3, "styleClass"],
              ],
              template: function (r, i) {
                1 & r &&
                  (y(0, "div", 0, 1),
                  Ke("mouseenter", function () {
                    return i.onMouseEnter();
                  })("mouseleave", function () {
                    return i.onMouseLeave();
                  }),
                  y(2, "div", 2),
                  qe(3, HB, 8, 7, "ng-container", 3),
                  qe(4, UB, 1, 0, "ng-container", 4),
                  qe(5, GB, 3, 4, "button", 5),
                  m()()),
                  2 & r &&
                    (Cn(null == i.message ? null : i.message.styleClass),
                    Q(
                      "ngClass",
                      cr(
                        13,
                        WB,
                        "p-toast-message-" +
                          (null == i.message ? null : i.message.severity)
                      )
                    )(
                      "@messageState",
                      cr(
                        20,
                        KB,
                        gC(
                          15,
                          qB,
                          i.showTransformOptions,
                          i.hideTransformOptions,
                          i.showTransitionOptions,
                          i.hideTransitionOptions
                        )
                      )
                    ),
                    ue("id", null == i.message ? null : i.message.id)(
                      "data-pc-name",
                      "toast"
                    )("data-pc-section", "root"),
                    W(2),
                    Q(
                      "ngClass",
                      null == i.message ? null : i.message.contentStyleClass
                    ),
                    ue("data-pc-section", "content"),
                    W(1),
                    Q("ngIf", !i.template),
                    W(1),
                    Q("ngTemplateOutlet", i.template)(
                      "ngTemplateOutletContext",
                      cr(22, QB, i.message)
                    ),
                    W(1),
                    Q(
                      "ngIf",
                      !1 !== (null == i.message ? null : i.message.closable)
                    ));
              },
              dependencies: function () {
                return [Io, Sh, Xw, xB, U0, z0, W0, $0, G0];
              },
              encapsulation: 2,
              data: {
                animation: [
                  Hh("messageState", [
                    h2(
                      "visible",
                      Hr({ transform: "translateY(0)", opacity: 1 })
                    ),
                    su("void => *", [
                      Hr({ transform: "{{showTransformParams}}", opacity: 0 }),
                      Uh("{{showTransitionParams}}"),
                    ]),
                    su("* => void", [
                      Uh(
                        "{{hideTransitionParams}}",
                        Hr({
                          height: 0,
                          opacity: 0,
                          transform: "{{hideTransformParams}}",
                        })
                      ),
                    ]),
                  ]),
                ],
              },
              changeDetection: 0,
            });
          }
          return e;
        })(),
        XB = (() => {
          class e {
            document;
            renderer;
            messageService;
            cd;
            config;
            key;
            autoZIndex = !0;
            baseZIndex = 0;
            life = 3e3;
            style;
            styleClass;
            position = "top-right";
            preventOpenDuplicates = !1;
            preventDuplicates = !1;
            showTransformOptions = "translateY(100%)";
            hideTransformOptions = "translateY(-100%)";
            showTransitionOptions = "300ms ease-out";
            hideTransitionOptions = "250ms ease-in";
            breakpoints;
            onClose = new we();
            containerViewChild;
            templates;
            messageSubscription;
            clearSubscription;
            messages;
            messagesArchieve;
            template;
            constructor(t, r, i, s, o) {
              (this.document = t),
                (this.renderer = r),
                (this.messageService = i),
                (this.cd = s),
                (this.config = o);
            }
            styleElement;
            id = tc();
            ngOnInit() {
              (this.messageSubscription =
                this.messageService.messageObserver.subscribe((t) => {
                  if (t)
                    if (Array.isArray(t)) {
                      const r = t.filter((i) => this.canAdd(i));
                      this.add(r);
                    } else this.canAdd(t) && this.add([t]);
                })),
                (this.clearSubscription =
                  this.messageService.clearObserver.subscribe((t) => {
                    t
                      ? this.key === t && (this.messages = null)
                      : (this.messages = null),
                      this.cd.markForCheck();
                  }));
            }
            ngAfterViewInit() {
              this.breakpoints && this.createStyle();
            }
            add(t) {
              (this.messages = this.messages
                ? [...this.messages, ...t]
                : [...t]),
                this.preventDuplicates &&
                  (this.messagesArchieve = this.messagesArchieve
                    ? [...this.messagesArchieve, ...t]
                    : [...t]),
                this.cd.markForCheck();
            }
            canAdd(t) {
              let r = this.key === t.key;
              return (
                r &&
                  this.preventOpenDuplicates &&
                  (r = !this.containsMessage(this.messages, t)),
                r &&
                  this.preventDuplicates &&
                  (r = !this.containsMessage(this.messagesArchieve, t)),
                r
              );
            }
            containsMessage(t, r) {
              return (
                !!t &&
                null !=
                  t.find(
                    (i) =>
                      i.summary === r.summary &&
                      i.detail == r.detail &&
                      i.severity === r.severity
                  )
              );
            }
            ngAfterContentInit() {
              this.templates?.forEach((t) => {
                t.getType(), (this.template = t.template);
              });
            }
            onMessageClose(t) {
              this.messages?.splice(t.index, 1),
                this.onClose.emit({ message: t.message }),
                this.cd.detectChanges();
            }
            onAnimationStart(t) {
              "void" === t.fromState &&
                (this.renderer.setAttribute(
                  this.containerViewChild?.nativeElement,
                  this.id,
                  ""
                ),
                this.autoZIndex &&
                  "" === this.containerViewChild?.nativeElement.style.zIndex &&
                  pg.set(
                    "modal",
                    this.containerViewChild?.nativeElement,
                    this.baseZIndex || this.config.zIndex.modal
                  ));
            }
            onAnimationEnd(t) {
              "void" === t.toState &&
                this.autoZIndex &&
                ec.isEmpty(this.messages) &&
                pg.clear(this.containerViewChild?.nativeElement);
            }
            createStyle() {
              if (!this.styleElement) {
                (this.styleElement = this.renderer.createElement("style")),
                  (this.styleElement.type = "text/css"),
                  this.renderer.appendChild(
                    this.document.head,
                    this.styleElement
                  );
                let t = "";
                for (let r in this.breakpoints) {
                  let i = "";
                  for (let s in this.breakpoints[r])
                    i += s + ":" + this.breakpoints[r][s] + " !important;";
                  t += `\n                    @media screen and (max-width: ${r}) {\n                        .p-toast[${this.id}] {\n                           ${i}\n                        }\n                    }\n                `;
                }
                this.renderer.setProperty(this.styleElement, "innerHTML", t);
              }
            }
            destroyStyle() {
              this.styleElement &&
                (this.renderer.removeChild(
                  this.document.head,
                  this.styleElement
                ),
                (this.styleElement = null));
            }
            ngOnDestroy() {
              this.messageSubscription &&
                this.messageSubscription.unsubscribe(),
                this.containerViewChild &&
                  this.autoZIndex &&
                  pg.clear(this.containerViewChild.nativeElement),
                this.clearSubscription && this.clearSubscription.unsubscribe(),
                this.destroyStyle();
            }
            static ɵfac = function (r) {
              return new (r || e)(w(Ze), w(tn), w(fg), w(wo), w(j0));
            };
            static ɵcmp = Ue({
              type: e,
              selectors: [["p-toast"]],
              contentQueries: function (r, i, s) {
                if ((1 & r && $f(s, _B, 4), 2 & r)) {
                  let o;
                  vo((o = _o())) && (i.templates = o);
                }
              },
              viewQuery: function (r, i) {
                if ((1 & r && Uf(K0, 5), 2 & r)) {
                  let s;
                  vo((s = _o())) && (i.containerViewChild = s.first);
                }
              },
              hostAttrs: [1, "p-element"],
              inputs: {
                key: "key",
                autoZIndex: "autoZIndex",
                baseZIndex: "baseZIndex",
                life: "life",
                style: "style",
                styleClass: "styleClass",
                position: "position",
                preventOpenDuplicates: "preventOpenDuplicates",
                preventDuplicates: "preventDuplicates",
                showTransformOptions: "showTransformOptions",
                hideTransformOptions: "hideTransformOptions",
                showTransitionOptions: "showTransitionOptions",
                hideTransitionOptions: "hideTransitionOptions",
                breakpoints: "breakpoints",
              },
              outputs: { onClose: "onClose" },
              decls: 3,
              vars: 5,
              consts: [
                [3, "ngClass", "ngStyle"],
                ["container", ""],
                [
                  3,
                  "message",
                  "index",
                  "life",
                  "template",
                  "showTransformOptions",
                  "hideTransformOptions",
                  "showTransitionOptions",
                  "hideTransitionOptions",
                  "onClose",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [
                  3,
                  "message",
                  "index",
                  "life",
                  "template",
                  "showTransformOptions",
                  "hideTransformOptions",
                  "showTransitionOptions",
                  "hideTransitionOptions",
                  "onClose",
                ],
              ],
              template: function (r, i) {
                1 & r &&
                  (y(0, "div", 0, 1), qe(2, ZB, 1, 9, "p-toastItem", 2), m()),
                  2 & r &&
                    (Cn(i.styleClass),
                    Q("ngClass", "p-toast p-component p-toast-" + i.position)(
                      "ngStyle",
                      i.style
                    ),
                    W(2),
                    Q("ngForOf", i.messages));
              },
              dependencies: [Io, bh, Yw, YB],
              styles: [
                "@layer primeng{.p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}}\n",
              ],
              encapsulation: 2,
              data: {
                animation: [
                  Hh("toastAnimation", [
                    su(":enter, :leave", [$h("@*", IE())]),
                  ]),
                ],
              },
              changeDetection: 0,
            });
          }
          return e;
        })(),
        JB = (() => {
          class e {
            static ɵfac = function (r) {
              return new (r || e)();
            };
            static ɵmod = Xe({ type: e });
            static ɵinj = He({ imports: [tu, q0, U0, z0, W0, $0, G0, DB] });
          }
          return e;
        })(),
        eH = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = Ue({
              type: e,
              selectors: [["app-menu-bar"]],
              decls: 34,
              vars: 0,
              consts: [
                [1, "header"],
                [1, "profile"],
                [1, "title"],
                [1, "subtitle", "subtitle-typed"],
                [1, "typing-title"],
                [1, "top-menu"],
                ["routerLinkActive", "active"],
                ["routerLink", "/about"],
                [1, "icon", "ion-person"],
                [1, "link"],
                ["routerLink", "/resume"],
                [1, "icon", "ion-android-list"],
                ["routerLink", "/works"],
                [
                  1,
                  "fa",
                  "fa-code",
                  2,
                  "transform",
                  "scale(1.5)",
                  "margin",
                  "10%",
                ],
                ["routerLink", "/contact"],
                [1, "icon", "ion-at"],
              ],
              template: function (r, i) {
                1 & r &&
                  (y(0, "header", 0)(1, "div", 1)(2, "div", 2),
                  b(3, "Hyperr"),
                  m(),
                  y(4, "div", 3)(5, "div", 4)(6, "p"),
                  b(7, "Web Developer"),
                  m(),
                  
                  y(10, "p"),
                  b(11, "Learner"),
                  m()()()(),
                  y(12, "div", 5)(13, "ul")(14, "li", 6)(15, "a", 7),
                  O(16, "span", 8),
                  y(17, "span", 9),
                  b(18, "About"),
                  m()()(),
                  y(19, "li", 6)(20, "a", 10),
                  O(21, "span", 11),
                  y(22, "span", 9),
                  b(23, "Resume"),
                  m()()(),
                  y(24, "li", 6)(25, "a", 12),
                  O(26, "span", 13),
                  y(27, "span", 9),
                  b(28, "Works"),
                  m()()(),
                  y(29, "li", 6)(30, "a", 14),
                  O(31, "span", 15),
                  y(32, "span", 9),
                  b(33, "Contact"),
                  m()()()()()());
              },
              dependencies: [aa, M0],
            }));
          }
          return e;
        })(),
        tH = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = Ue({
              type: e,
              selectors: [["app-profile-card"]],
              decls: 29,
              vars: 0,
              consts: [
                ["id", "home-card", 1, "card-started"],
                [1, "profile", "no-photo"],
                [
                  1,
                  "slide",
                  2,
                  "background-image",
                  "url(./assets/images/profile_new.jpg)",
                ],
                [1, "title"],
                [1, "subtitle", 2, "transform", "scale(1.15)"],
                [2, "font-weight", "700"],
                [1, "subtitle", "subtitle-typed", 2, "margin-top", "5px"],
                [1, "typing-title"],
                [1, "social"],
                [
                  "target",
                  "_blank",
                  "href",
                  "https://github.com/Hyperrr69",
                ],
                [1, "fa", "fa-github"],
                [
                  "target",
                  "_blank",
                  "href",
                  "https://www.instagram.com/_.nevil._34?igsh=OWwzb3hwMTFhczll",
                ],
                [1, "fa", "fa-instagram"],
                [1, "lnks"],
                [
                  "href",
                  "./assets/resources/resume.pdf",
                  "download",
                  "",
                  1,
                  "lnk",
                ],
                [1, "text"],
                ["routerLink", "/contact", 1, "lnk", "discover"],
              ],
              template: function (r, i) {
                1 & r &&
                  (y(0, "div", 0)(1, "div", 1),
                  O(2, "div", 2),
                  y(3, "div", 3),
                  b(4, "Nevil Vadaliya"),
                  m(),
                  y(5, "strong", 4),
                  b(6, " also known as "),
                  y(7, "span", 5),
                  b(8, "Hyperr"),
                  m()(),
                  y(9, "div", 6)(10, "div", 7)(11, "p"),
                  b(12, "Web Developer"),
                  m(),
                
                  y(15, "p"),
                  b(16, "Learner"),
                  m()()(),
                  y(17, "div", 8)(18, "a", 9),
                  O(19, "span", 10),
                  m(),
                  y(20, "a", 11),
                  O(21, "span", 12),
                  m()(),
                  y(22, "div", 13)(23, "a", 14)(24, "span", 15),
                  b(25, "Download CV"),
                  m()(),
                  y(26, "a", 16)(27, "span", 15),
                  b(28, "Contact Me"),
                  m()()()()());
              },
              dependencies: [aa],
            }));
          }
          return e;
        })();
      $("body").addClass("done");
      let nH = (() => {
          class e {
            constructor(t, r) {
              (this.router = t),
                (this.toastService = r),
                (this.title = "BhavyaJustChill");
            }
            prepareRoute(t) {
              return (
                t && t.activatedRouteData && t.activatedRouteData.animation
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(kt), w(B0));
            });
            static #t = (this.ɵcmp = Ue({
              type: e,
              selectors: [["app-root"]],
              decls: 25,
              vars: 1,
              consts: [
                [1, "page", "new-skin"],
                [1, "preloader"],
                [1, "centrize", "full-width"],
                [1, "vertical-center"],
                [1, "spinner"],
                [1, "double-bounce1"],
                [1, "double-bounce2"],
                [1, "background", "gradient"],
                [1, "bg-bubbles"],
                [
                  "data-animation-in",
                  "fadeInLeft",
                  "data-animation-out",
                  "fadeOutLeft",
                  1,
                  "container",
                  "opened",
                ],
                ["outlet", "outlet"],
              ],
              template: function (r, i) {
                if (
                  (1 & r &&
                    (O(0, "p-toast"),
                    y(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(
                      5,
                      "div",
                      4
                    ),
                    O(6, "div", 5)(7, "div", 6),
                    m()()()(),
                    y(8, "div", 7)(9, "ul", 8),
                    O(10, "li")(11, "li")(12, "li")(13, "li")(14, "li")(
                      15,
                      "li"
                    )(16, "li")(17, "li")(18, "li")(19, "li"),
                    m()(),
                    y(20, "div", 9),
                    O(21, "app-menu-bar")(22, "app-profile-card")(
                      23,
                      "router-outlet",
                      null,
                      10
                    ),
                    m()()),
                  2 & r)
                ) {
                  const s = (function x_(e) {
                    return (function ci(e, n) {
                      return e[n];
                    })(
                      (function d1() {
                        return j.lFrame.contextLView;
                      })(),
                      Y + e
                    );
                  })(24);
                  W(20), Q("@routeAnimations", i.prepareRoute(s));
                }
              },
              dependencies: [rg, XB, eH, tH],
              data: { animation: [RB] },
            }));
          }
          return e;
        })(),
        rH = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Xe({ type: e, bootstrap: [nH] }));
            static #n = (this.ɵinj = He({
              providers: [fg],
              imports: [_E, NB, l3, cj, dj, JB, q0, Fj],
            }));
          }
          return e;
        })();
      i2()
        .bootstrapModule(rH)
        .catch((e) => console.error(e));
    },
  },
  (X) => {
    X((X.s = 305));
  },
]);
