(this.webpackJsonpchiaexplorer = this.webpackJsonpchiaexplorer || []).push([
  [1],
  {
    103: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return r;
      });
      var n = t(0),
        l = t.n(n),
        r = function () {
          return (
            Object(n.useEffect)(function () {
              var e = {
                zone: '970607e552d17628814',
                width: '728',
                height: '90',
              };
              (window.coinzilla_display || []).push(e);
            }, []),
            l.a.createElement('div', {
              class: 'coinzilla',
              'data-zone': 'C-970607e552d17628814',
            })
          );
        };
    },
    104: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return m;
      });
      var n = t(0),
        l = t.n(n);

      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }

      function c(e, a) {
        if (null == e) return {};
        var t,
          n,
          l = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              l = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (t = r[n]), a.indexOf(t) >= 0 || (l[t] = e[t]);
            return l;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (t = r[n]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]));
        }
        return l;
      }
      var i = l.a.createElement(
          'path',
          {
            d: 'M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z',
          },
          l.a.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 67 67',
            to: '-360 67 67',
            dur: '2.5s',
            repeatCount: 'indefinite',
          })
        ),
        s = l.a.createElement(
          'path',
          {
            d: 'M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z',
          },
          l.a.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 67 67',
            to: '360 67 67',
            dur: '8s',
            repeatCount: 'indefinite',
          })
        ),
        o = function (e) {
          var a = e.svgRef,
            t = e.title,
            n = c(e, ['svgRef', 'title']);
          return l.a.createElement(
            'svg',
            r(
              {
                width: 135,
                height: 135,
                viewBox: '0 0 135 135',
                fill: '#20a322',
                ref: a,
              },
              n
            ),
            t ? l.a.createElement('title', null, t) : null,
            i,
            s
          );
        },
        m = l.a.forwardRef(function (e, a) {
          return l.a.createElement(
            o,
            r(
              {
                svgRef: a,
              },
              e
            )
          );
        });
      t.p;
    },
    114: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return p;
      });
      var n = t(20),
        l = t(4),
        r = t(6),
        c = t.n(r),
        i = t(14),
        s = t(16),
        o = t.n(s),
        m = t(0),
        d = t.n(m),
        u = (function () {
          var e = Object(i.a)(
            c.a.mark(function e() {
              var a, t;
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        o.a.get(
                          'https://request-global.czilladx.com/serve/native.php?z='.concat(
                            '605607e552d1a0cc722'
                          )
                        )
                      );
                    case 2:
                      if (((a = e.sent), !(t = a.data).ad.impressionUrl)) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 7), o.a.get(t.ad.impressionUrl);
                    case 7:
                      return e.abrupt('return', t);
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        p = function (e) {
          var a = e.center,
            t = Object(m.useState)(''),
            r = Object(l.a)(t, 2),
            c = r[0],
            i = r[1],
            s = Object(m.useState)(''),
            o = Object(l.a)(s, 2),
            p = o[0],
            h = o[1];
          return (
            Object(m.useEffect)(function () {
              u()
                .then(function (e) {
                  e && e.ad && e.ad.title && e.ad.url && (i(e.ad.title), h(e.ad.url));
                })
                .catch(console.log);
            }, []),
            d.a.createElement(
              d.a.Fragment,
              null,
              c &&
                p &&
                d.a.createElement(
                  'div',
                  {
                    style: Object(n.a)(
                      {},
                      a
                        ? {
                            textAlign: 'center',
                            width: '100%',
                          }
                        : {}
                    ),
                  },
                  d.a.createElement('b', null, 'Sponsor:'),
                  ' ',
                  d.a.createElement(
                    'a',
                    {
                      href: p,
                      className: 'text-success',
                    },
                    c
                  )
                )
            )
          );
        };
    },
    176: function (e, a, t) {
      e.exports = t.p + 'static/media/logo.9801d40e.png';
    },
    178: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return j;
      });
      var n = t(4),
        l = t(6),
        r = t.n(l),
        c = t(14),
        i = t(16),
        s = t.n(i),
        o = t(0),
        m = t.n(o),
        d = t(128),
        u = t(145),
        p = t(602),
        h = t(37),
        b = t(104),
        f = t(12),
        E = t(67),
        g = t(18),
        v = t(205),
        x = t(114),
        w = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(a, t) {
              var n, l;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.get(
                          ''.concat(g.a.apiPath2, '/coinsForAddress/').concat(a, '?page=').concat(t)
                        )
                      );
                    case 2:
                      return (n = e.sent), (l = n.data), e.abrupt('return', l);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a, t) {
            return e.apply(this, arguments);
          };
        })(),
        N = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(a) {
              var t, n;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), s.a.get(''.concat(g.a.apiPath2, '/farmerRank/').concat(a))
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        y = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(a) {
              var t, n;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), s.a.get(''.concat(g.a.apiPath2, '/balance/').concat(a));
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        k = (function () {
          var e = Object(c.a)(
            r.a.mark(function e() {
              var a, t;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), s.a.get(''.concat(g.a.apiPath2, '/currentPrice'));
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t.price);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        C = function (e, a) {
          return Number(Number((e / 1e12) * a).toFixed(2)).toLocaleString();
        },
        A = function (e) {
          var a = e.address,
            t = e.price,
            l = Object(o.useState)({
              grossBalance: 0,
              netBalance: 0,
            }),
            r = Object(n.a)(l, 2),
            c = r[0],
            i = r[1],
            s = Object(o.useState)(!0),
            p = Object(n.a)(s, 2),
            b = p[0],
            f = p[1];
          return (
            Object(o.useEffect)(function () {
              y(a)
                .then(function (e) {
                  i(e), f(!1);
                })
                .catch(console.error);
            }, []),
            m.a.createElement(
              'div',
              {
                className: 'mb-spacing-6',
              },
              m.a.createElement(
                d.a,
                {
                  className: 'card-box',
                },
                m.a.createElement(
                  'div',
                  {
                    className: 'card-header',
                  },
                  m.a.createElement(
                    'h4',
                    {
                      className: 'font-size-lg mb-0 py-2 font-weight-bold',
                    },
                    'Balance'
                  )
                ),
                m.a.createElement(
                  u.a,
                  null,
                  m.a.createElement(
                    'div',
                    {
                      className: 'd-flex align-items-center justify-content-between',
                    },
                    m.a.createElement(
                      'div',
                      {
                        className: 'd-flex',
                      },
                      m.a.createElement(
                        'div',
                        null,
                        '\u26a0\ufe0f ',
                        m.a.createElement(
                          'span',
                          {
                            style: {
                              color: 'red',
                            },
                          },
                          'Chia Explorer may show a different net result to your Chia wallet and ',
                          m.a.createElement('b', null, 'both are correct'),
                          '.'
                        ),
                        ' When you send coins, change may go to a different address. The wallet is aware of all your addresses and Chia Explorer is not. You are currently looking at one specific address.'
                      )
                    )
                  ),
                  m.a.createElement('div', {
                    className: 'divider my-3',
                  }),
                  m.a.createElement(
                    'div',
                    {
                      className: 'd-flex align-items-center justify-content-between',
                    },
                    m.a.createElement(
                      'div',
                      {
                        className: 'd-flex',
                      },
                      m.a.createElement(
                        'div',
                        null,
                        m.a.createElement('b', null, 'Net balance'),
                        m.a.createElement(
                          'div',
                          {
                            className: 'text-black-50',
                          },
                          'Coins remaining'
                        )
                      )
                    ),
                    m.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold font-size-lg',
                      },
                      b && m.a.createElement('span', null, 'Loading...'),
                      !b &&
                        m.a.createElement(
                          'span',
                          null,
                          Object(h.a)(c.netBalance, 'mojo').to('chia').toString(),
                          ' XCH'
                        ),
                      !b &&
                        m.a.createElement(
                          m.a.Fragment,
                          null,
                          m.a.createElement('br', null),
                          m.a.createElement(
                            'span',
                            {
                              className: 'text-black-50 font-size-md font-weight-normal',
                            },
                            '$',
                            C(c.netBalance, t)
                          )
                        )
                    )
                  )
                )
              )
            )
          );
        },
        S = function (e) {
          var a = e.address,
            t = Object(o.useState)({
              rank: 0,
              status: '',
            }),
            l = Object(n.a)(t, 2),
            r = l[0],
            c = l[1];
          return (
            Object(o.useEffect)(function () {
              N(a)
                .then(function (e) {
                  return c(e);
                })
                .catch(console.error);
            }, []),
            m.a.createElement(
              'div',
              {
                className: 'mb-spacing-6',
              },
              m.a.createElement(
                d.a,
                {
                  className: 'card-box',
                },
                m.a.createElement(
                  'div',
                  {
                    className: 'card-header',
                  },
                  m.a.createElement(
                    'h4',
                    {
                      className: 'font-size-lg mb-0 py-2 font-weight-bold',
                    },
                    'Farmer status'
                  )
                ),
                m.a.createElement(
                  u.a,
                  null,
                  m.a.createElement(
                    'div',
                    {
                      className: 'd-flex align-items-center justify-content-between',
                    },
                    m.a.createElement(
                      'div',
                      {
                        className: 'd-flex',
                      },
                      m.a.createElement(
                        'div',
                        null,
                        m.a.createElement('b', null, 'Rank'),
                        m.a.createElement(
                          'div',
                          {
                            className: 'text-black-50',
                          },
                          'Based on farmer rewards over the last 10,000 blocks'
                        )
                      )
                    ),
                    m.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold font-size-lg',
                      },
                      r.rank > 0 ? r.rank : 'None'
                    )
                  ),
                  m.a.createElement('div', {
                    className: 'divider my-3',
                  }),
                  m.a.createElement(
                    'div',
                    {
                      className: 'd-flex align-items-center justify-content-between',
                    },
                    m.a.createElement(
                      'div',
                      {
                        className: 'd-flex',
                      },
                      m.a.createElement(
                        'div',
                        null,
                        m.a.createElement('b', null, 'Blocks won (last 10k)'),
                        m.a.createElement(
                          'div',
                          {
                            className: 'text-black-50',
                          },
                          'Blocks won by this address in the last 10k blocks'
                        )
                      )
                    ),
                    m.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold font-size-lg',
                      },
                      r.blocks_won_10k > 0 ? r.blocks_won_10k.toLocaleString() : 'None'
                    )
                  ),
                  m.a.createElement('div', {
                    className: 'divider my-3',
                  }),
                  m.a.createElement(
                    'div',
                    {
                      className: 'd-flex align-items-center justify-content-between',
                    },
                    m.a.createElement(
                      'div',
                      {
                        className: 'd-flex',
                      },
                      m.a.createElement(
                        'div',
                        null,
                        m.a.createElement('b', null, 'Blocks won (~24h)'),
                        m.a.createElement(
                          'div',
                          {
                            className: 'text-black-50',
                          },
                          'Blocks won by this address in the last 4608 blocks'
                        )
                      )
                    ),
                    m.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold font-size-lg',
                      },
                      r.blocks_won_24h > 0 ? r.blocks_won_24h.toLocaleString() : 'None'
                    )
                  ),
                  m.a.createElement('div', {
                    className: 'divider my-3',
                  }),
                  m.a.createElement(
                    'div',
                    {
                      className: 'd-flex align-items-center justify-content-between',
                    },
                    m.a.createElement(
                      'div',
                      {
                        className: 'd-flex',
                      },
                      m.a.createElement('div', null, m.a.createElement('b', null, 'Summary'))
                    ),
                    m.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold font-size-lg',
                      },
                      r.status
                    )
                  )
                )
              )
            )
          );
        },
        O = function (e) {
          var a = e.address,
            t = e.locale,
            l = e.price,
            r = Object(o.useState)(1),
            c = Object(n.a)(r, 2),
            i = c[0],
            s = c[1],
            g = Object(o.useState)({
              coins: [],
            }),
            v = Object(n.a)(g, 2),
            x = v[0],
            N = v[1],
            y = Object(o.useState)(!0),
            k = Object(n.a)(y, 2),
            A = k[0],
            S = k[1],
            O = Object(o.useState)(!1),
            j = Object(n.a)(O, 2),
            T = j[0],
            z = j[1],
            D = Object(o.useState)(!0),
            M = Object(n.a)(D, 2),
            F = M[0],
            I = M[1];
          Object(o.useEffect)(
            function () {
              z(!0),
                w(a, i)
                  .then(function (e) {
                    var a = B.concat(e.coins);
                    N({
                      coins: a,
                    }),
                      e.coins.length < 25 && I(!1),
                      z(!1),
                      S(!1);
                  })
                  .catch(function (e) {
                    var a;
                    null === e ||
                      void 0 === e ||
                      null === (a = e.response) ||
                      void 0 === a ||
                      a.status;
                  });
            },
            [a, i]
          );
          var B = x.coins;
          return m.a.createElement(
            m.a.Fragment,
            null,
            A
              ? m.a.createElement(
                  'div',
                  {
                    className: 'mb-spacing-6',
                  },
                  m.a.createElement(
                    d.a,
                    {
                      className: 'card-box',
                    },
                    m.a.createElement(
                      u.a,
                      {
                        style: {
                          textAlign: 'center',
                        },
                      },
                      m.a.createElement(b.a, null)
                    )
                  )
                )
              : m.a.createElement(
                  d.a,
                  {
                    className: 'p-4 shadow-xxl mb-spacing-6-x2',
                  },
                  m.a.createElement(
                    'div',
                    {
                      className: 'table-responsive-md',
                    },
                    m.a.createElement(
                      p.a,
                      {
                        className: 'table table-alternate-spaced',
                      },
                      m.a.createElement(
                        'thead',
                        null,
                        m.a.createElement(
                          'tr',
                          null,
                          m.a.createElement(
                            'th',
                            {
                              scope: 'col',
                            },
                            'Date'
                          ),
                          m.a.createElement(
                            'th',
                            {
                              scope: 'col',
                            },
                            'Type'
                          ),
                          m.a.createElement(
                            'th',
                            {
                              scope: 'col',
                            },
                            'Coin'
                          ),
                          m.a.createElement(
                            'th',
                            {
                              scope: 'col',
                              className: 'text-center',
                            },
                            'Amount'
                          ),
                          m.a.createElement(
                            'th',
                            {
                              scope: 'col',
                              className: 'text-center',
                            },
                            'Value'
                          ),
                          m.a.createElement(
                            'th',
                            {
                              scope: 'col',
                              className: 'text-center',
                            },
                            'Height confirmed'
                          ),
                          m.a.createElement(
                            'th',
                            {
                              scope: 'col',
                              className: 'text-center',
                            },
                            'Height spent'
                          )
                        )
                      ),
                      m.a.createElement(
                        'tbody',
                        null,
                        B.map(function (e) {
                          var a = e.coin_id,
                            n = e.amount,
                            r = e.spent,
                            c = e.spent_block_index,
                            i = e.confirmed_block_index,
                            s = e.coinbase,
                            o = e.parent_coin_info,
                            d = e.timestamp,
                            u = new Intl.DateTimeFormat('en-US', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            }).format(1e3 * parseInt(d, 10));
                          return m.a.createElement(
                            m.a.Fragment,
                            null,
                            m.a.createElement(
                              'tr',
                              {
                                key: a,
                              },
                              m.a.createElement('td', null, m.a.createElement('span', null, u)),
                              m.a.createElement(
                                'td',
                                null,
                                1 !== i &&
                                  s &&
                                  o.startsWith('0x0000000000000000') &&
                                  m.a.createElement(
                                    'span',
                                    null,
                                    '\ud83d\udcb8 Pool reward for block ',
                                    m.a.createElement(E.a, {
                                      height: parseInt(o, 16),
                                    })
                                  ),
                                1 !== i &&
                                  s &&
                                  !o.startsWith('0x0000000000000000') &&
                                  m.a.createElement('span', null, '\ud83c\udf31 Farmer reward'),
                                1 !== i &&
                                  !s &&
                                  m.a.createElement('span', null, '\ud83c\udf43 Miscellaneous'),
                                1 === i && m.a.createElement('span', null, '\ud83d\udcb0 Prefarm')
                              ),
                              m.a.createElement(
                                'td',
                                null,
                                m.a.createElement(
                                  'span',
                                  null,
                                  m.a.createElement(
                                    f.b,
                                    {
                                      to:
                                        'zh' === t
                                          ? '/zh-cn/blockchain/coin/'.concat(a)
                                          : '/blockchain/coin/'.concat(a),
                                      className: 'text-success',
                                    },
                                    a
                                  )
                                )
                              ),
                              m.a.createElement(
                                'td',
                                {
                                  className: 'text-center',
                                },
                                m.a.createElement(
                                  'span',
                                  null,
                                  Object(h.a)(parseInt(n, 10), 'mojo').to('chia').toString(),
                                  ' XCH'
                                )
                              ),
                              m.a.createElement(
                                'td',
                                {
                                  className: 'text-center',
                                },
                                m.a.createElement('span', null, ' $', C(n, l))
                              ),
                              m.a.createElement(
                                'td',
                                {
                                  className: 'text-center',
                                },
                                m.a.createElement(E.a, {
                                  height: i,
                                })
                              ),
                              m.a.createElement(
                                'td',
                                {
                                  className: 'text-center',
                                },
                                r &&
                                  m.a.createElement(E.a, {
                                    height: c,
                                  }),
                                !r && m.a.createElement('span', null, 'Unspent')
                              )
                            ),
                            m.a.createElement('tr', {
                              className: 'divider',
                            })
                          );
                        })
                      )
                    )
                  )
                ),
            !A &&
              T &&
              m.a.createElement(
                'div',
                {
                  className: 'text-center',
                },
                m.a.createElement(b.a, null)
              ),
            F &&
              !T &&
              m.a.createElement(
                'button',
                {
                  className:
                    'MuiButtonBase-root MuiButton-root MuiButton-text btn-primary font-weight-bold w-100',
                  onClick: function () {
                    return s(i + 1);
                  },
                },
                'Load more'
              )
          );
        };

      function j(e) {
        var a = e.address,
          t = Object(v.a)(),
          l = Object(o.useState)(0),
          r = Object(n.a)(l, 2),
          c = r[0],
          i = r[1];
        return (
          Object(o.useEffect)(function () {
            k()
              .then(function (e) {
                return i(e);
              })
              .catch(console.error);
          }, []),
          m.a.createElement(
            m.a.Fragment,
            null,
            m.a.createElement(A, {
              address: a,
              price: c,
            }),
            m.a.createElement(
              'div',
              {
                style: {
                  marginBottom: '1rem',
                  marginTop: '1rem',
                },
              },
              m.a.createElement(x.a, {
                center: !0,
              })
            ),
            m.a.createElement(S, {
              address: a,
            }),
            m.a.createElement(O, {
              address: a,
              locale: t.locale,
              price: c,
            })
          )
        );
      }
    },
    18: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return n;
      });
      var n = {
        apiPath: 'https://api.chiaexplorer.com/chia',
        apiPath2: 'https://abc.chiaexplorer.com',
      };
    },
    180: function (e, a) {
      e.exports =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzg2NkFFNzg2QzIxMUU5QTg2REJBMDFGRjlCRDZBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNzg2NkFFODg2QzIxMUU5QTg2REJBMDFGRjlCRDZBOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3ODY2QUU1ODZDMjExRTlBODZEQkEwMUZGOUJENkE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA3ODY2QUU2ODZDMjExRTlBODZEQkEwMUZGOUJENkE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgID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';
    },
    202: function (e, a, t) {
      e.exports = t.p + 'static/media/avatar3.d5f40349.jpg';
    },
    207: function (e, a) {
      e.exports =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNDlFMTI1MTg2QzIxMUU5QTBEMUM2MTRCRDAwRjYwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNDlFMTI1Mjg2QzIxMUU5QTBEMUM2MTRCRDAwRjYwNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI0OUUxMjRGODZDMjExRTlBMEQxQzYxNEJEMDBGNjA2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI0OUUxMjUwODZDMjExRTlBMEQxQzYxNEJEMDBGNjA2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgID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';
    },
    273: function (e, a, t) {
      e.exports = t.p + 'static/media/1xbit.5a06915a.jpg';
    },
    291: function (e) {
      e.exports = JSON.parse(
        '{"introText":"Discover the future of cryptocurrency","siteDescription":"Browse and search the Chia blockchain\u2122 with historic data charts.","blockchainExplorer":"Blockchain explorer","netspace":"Netspace","spaceAllocated":"Space allocated to Chia network\u2122","uniqueAddressCount":"Unique address count","addressesReceivedXCH":"Addresses that have received XCH","xchPrice":"XCH Price","currentPriceOfChia":"Current price of Chia\u2122 in USD","charts":"Charts","totalXch":"Total XCH","totalXchIncPrefarm":"Total XCH including the prefarm","farmedXch":"Farmed XCH","numberOfCoinsFarmed":"Number of Chia coins that have been farmed","numberAddressesReceivedChia":"Number of addresses that have received Chia","xchTibDay":"XCH/TiB Day","expectedDailyFarmedXchTib":"Expected daily farmed XCH per TiB.","tibHourXch":"TiB Hour/XCH","expectedTime":"Expected time to farm 1 XCH with 1 TiB.","guides":"Guides","whatIsFarming":"What is farming?","plotting":"Plotting","farmingPools":"Farming pools","chiaCoins":"Chia coins","networkDecentralisation":"Network decentralisation","proofOfSpaceSize":"Proof of space size","difficulty":"Difficulty","weight":"Weight","cumulativeVdfIterations":"Cumulative VDF iterations","search":"Search","chiaXchPrice":"Chia (XCH) Price","memberHome":"Member home","fees":"Fees farmed","topFarmers":"Top farmers","topPools":"Top pool pub keys","home":"Home","biggestSpenders":"Biggest spenders","advertise":"Advertise","time":"Time","type":"Type","height":"Height","headerHash":"Header hash","deficit":"Deficit","signagePointIndex":"Signage Point Index","powerUsage":"Power usage","blocks":"Blocks","coins":"Coins","transactionVolume":"Transaction volume","tools":"Tools","averageTransactionFee":"Fees / Coins","feesDividedCoinsXch":"Fees / Coins (XCH)","feesDividedCoinsUsd":"Fees / Coins (USD)","averageFee":"Fees / Coins","averageFee1Hour":"Fee per coin addition/removal in the last hour"}'
      );
    },
    292: function (e) {
      e.exports = JSON.parse(
        '{"introText":"\u63a2\u7d22\u52a0\u5bc6\u8d27\u5e01\u7684\u672a\u6765","siteDescription":"\u4f7f\u7528\u5386\u53f2\u6570\u636e\u6d4f\u89c8\u548c\u641c\u7d22\u5947\u4e9a\u533a\u5757\u94fe","blockchainExplorer":"\u533a\u5757\u94fe\u6d4f\u89c8\u5668","netspace":"\u5168\u7f51\u5bb9\u91cf","spaceAllocated":"\u8d21\u732e\u7ed9\u5947\u4e9a\u533a\u5757\u94fe\u7f51\u7edc\u7684\u603b\u5bb9\u91cf","uniqueAddressCount":"\u94b1\u5305\u5730\u5740\u7edf\u8ba1","addressesReceivedXCH":"\u5df2\u6536\u5230\u5947\u4e9a\u5e01\uff08XCH\uff09\u7684\u94b1\u5305\u5730\u5740\u6570\u91cf","xchPrice":"XCH \u4ef7\u683c","currentPriceOfChia":"\u5f53\u524d\u6298\u5408\u7f8e\u5143\u4ef7","charts":"\u56fe\u8868","totalXch":"\u5947\u4e9a\u5e01\u603b\u91cf","totalXchIncPrefarm":"\u5947\u4e9a\u5e01\u603b\u91cf\uff08\u5305\u542b\u9884\u8015\u4f5c\uff09","farmedXch":"\u6536\u83b7\u7684\u5947\u4e9a\u5e01","numberOfCoinsFarmed":"\u901a\u8fc7\u8015\u4f5c\u6536\u83b7\u7684\u5947\u4e9a\u5e01\u6570\u91cf","numberAddressesReceivedChia":"\u6536\u5230\u5947\u4e9a\u5e01\u7684\u94b1\u5305\u5730\u5740\u6570","xchTibDay":"\u6bcf\u65e5\u8425\u6536","expectedDailyFarmedXchTib":"\u9884\u8ba11TiB\u7530\u5730\u6bcf\u5929\u6536\u83b7\u5947\u4e9a\u5e01\uff08XCH\uff09\u7684\u6570\u91cf","tibHourXch":"\u6536\u83b7\u65f6\u95f4\uff081TiB\uff09","expectedTime":"\u9884\u8ba11TiB\u7530\u5730\u6536\u83b7\u4e00\u4e2a\u5947\u4e9a\u5e01\uff08XCH\uff09\u7684\u5c0f\u65f6\u6570","guides":"\u6559\u7a0b","whatIsFarming":"\u4ec0\u4e48\u662f\u201c\u8015\u4f5c\u201d\uff1f","plotting":"\u89c4\u5212\u7530\u5730","farmingPools":"\u8015\u4f5c\u6c60","chiaCoins":"\u5947\u4e9a\u5e01","networkDecentralisation":"\u7f51\u7edc\u53bb\u4e2d\u5fc3\u5316\u6307\u6570","proofOfSpaceSize":"Proof of space size","difficulty":"\u96be\u5ea6\u6307\u6570","weight":"\u6743\u91cd","cumulativeVdfIterations":"\u7d2f\u8ba1 VDF \u8fed\u4ee3\u6570","search":"\u641c\u7d22","chiaXchPrice":"XCH \u4ef7\u683c","memberHome":"\u6211\u7684\u4e3b\u9875","fees":"\u8f6c\u8d26\u8d39","topFarmers":"\u5730\u4e3b\u699c","topPools":"\u8015\u4f5c\u6c60\u699c","home":"\u9996\u9875","biggestSpenders":"\u571f\u8c6a\u699c","advertise":"\u5e7f\u544a","time":"\u65f6\u95f4","type":"\u7c7b\u578b","height":"\u9ad8\u5ea6","headerHash":"\u54c8\u5e0c\u5934","deficit":"\u504f\u79fb\u91cf","signagePointIndex":"\u7b7e\u540d\u70b9\u7d22\u5f15","powerUsage":"\u7535\u80fd\u6d88\u8017","blocks":"\u5757","coins":"\u5e01","transactionVolume":"Transaction volume","tools":"\u5de5\u5177","averageTransactionFee":"Fees / Coins","feesDividedCoinsXch":"Fees / Coins (XCH)","feesDividedCoinsUsd":"Fees / Coins (USD)","averageFee":"Fees / Coins","averageFee1Hour":"Fee per coin addition/removal in the last hour"}'
      );
    },
    293: function (e, a, t) {
      e.exports = t.p + 'static/media/coinzilla.b3fd0c0f.svg';
    },
    294: function (e, a, t) {
      e.exports = t.p + 'static/media/chiaexplorer_image_1.3eda172f.svg';
    },
    295: function (e, a, t) {
      e.exports = t.p + 'static/media/undraw_diary_99km.44500190.png';
    },
    296: function (e, a, t) {
      e.exports = t.p + 'static/media/undraw_choice_9385.e6fbbc73.png';
    },
    297: function (e, a, t) {
      e.exports = t.p + 'static/media/undraw_questions_75e0.e5ee6660.png';
    },
    298: function (e, a, t) {
      e.exports = t.p + 'static/media/undraw_Savings_dwkw.5e1a99ce.png';
    },
    299: function (e, a, t) {
      'use strict';
      (function (e) {
        t.d(a, 'a', function () {
          return d;
        });
        var n = t(0),
          l = t.n(n),
          r = t(15),
          c = t(8),
          i = t(332),
          s = t(89),
          o = t(178),
          m = t(60);

        function d(a) {
          var t = a.match.params.puzzleHash,
            n = e.from(t.slice(2), 'hex'),
            d = Array.prototype.slice.call(n, 0),
            u = Object(s.a)(d, 8, 5),
            p = Object(s.c)('xch', u, 'bech32m'),
            h = m.a[p] ? m.a[p] : 'puzzle hash';
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              r.a,
              null,
              l.a.createElement('title', null, 'Chia puzzle hash ', t),
              l.a.createElement('meta', {
                content: 'Details of chia puzzle hash '.concat(t, '.'),
                name: 'description',
              })
            ),
            l.a.createElement(c.d, {
              titleHeading: t,
              titleDescription: 'Details for '.concat(h),
            }),
            l.a.createElement(
              i.a,
              {
                container: !0,
                spacing: 6,
              },
              l.a.createElement(
                i.a,
                {
                  item: !0,
                  xl: 12,
                },
                l.a.createElement(o.a, {
                  address: p,
                })
              )
            )
          );
        }
      }.call(this, t(27).Buffer));
    },
    301: function (e, a, t) {
      'use strict';
      (function (e) {
        t.d(a, 'a', function () {
          return u;
        });
        var n = t(179),
          l = t(4),
          r = t(0),
          c = t.n(r),
          i = t(128),
          s = t(145),
          o = t(187),
          m = t(89),
          d = function () {
            var a = Object(r.useState)(''),
              t = Object(l.a)(a, 2),
              n = t[0],
              d = t[1],
              u = Object(r.useState)(''),
              p = Object(l.a)(u, 2),
              h = p[0],
              b = p[1];
            return (
              Object(r.useEffect)(
                function () {
                  try {
                    var a = Object(m.b)(n, 'bech32m').data,
                      t = Object(m.a)(a, 5, 8, !1);
                    if (t) {
                      var l = e.from(t).toString('hex');
                      b('0x'.concat(l));
                    }
                  } catch (r) {
                    b('');
                  }
                },
                [n]
              ),
              c.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                c.a.createElement(
                  i.a,
                  {
                    className: 'card-box',
                  },
                  c.a.createElement(
                    'div',
                    {
                      className: 'card-header',
                    },
                    c.a.createElement(
                      'h4',
                      {
                        className: 'font-size-lg mb-0 py-2 font-weight-bold',
                      },
                      'Enter a receive address below to convert it to a puzzle hash'
                    )
                  ),
                  c.a.createElement(
                    s.a,
                    null,
                    c.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      c.a.createElement(o.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'Address',
                        onChange: function (e) {
                          d(e.target.value);
                        },
                      })
                    ),
                    c.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    c.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      c.a.createElement(o.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'Puzzle hash',
                        value: h,
                      })
                    )
                  )
                )
              )
            );
          };

        function u(e) {
          return (
            Object(n.a)(e),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(c.a.Fragment, null, c.a.createElement(d, null))
            )
          );
        }
      }.call(this, t(27).Buffer));
    },
    302: function (e, a, t) {
      'use strict';
      (function (e) {
        t.d(a, 'a', function () {
          return u;
        });
        var n = t(179),
          l = t(4),
          r = t(0),
          c = t.n(r),
          i = t(128),
          s = t(145),
          o = t(187),
          m = t(89),
          d = function () {
            var a = Object(r.useState)(''),
              t = Object(l.a)(a, 2),
              n = t[0],
              d = t[1],
              u = Object(r.useState)(''),
              p = Object(l.a)(u, 2),
              h = p[0],
              b = p[1];
            return (
              Object(r.useEffect)(
                function () {
                  try {
                    if (!(66 === n.length || 64 === n.length)) return void b('');
                    var a = e.from(n, 'hex'),
                      t = Array.prototype.slice.call(a, 0),
                      l = Object(m.a)(t, 8, 5);
                    if (l) {
                      var r = Object(m.c)('xch', l, 'bech32m');
                      b(r);
                    }
                  } catch (c) {
                    b('');
                  }
                },
                [n]
              ),
              c.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                c.a.createElement(
                  i.a,
                  {
                    className: 'card-box',
                  },
                  c.a.createElement(
                    'div',
                    {
                      className: 'card-header',
                    },
                    c.a.createElement(
                      'h4',
                      {
                        className: 'font-size-lg mb-0 py-2 font-weight-bold',
                      },
                      'Enter a puzzle hash below to convert it to a receive address'
                    )
                  ),
                  c.a.createElement(
                    s.a,
                    null,
                    c.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      c.a.createElement(o.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'Puzzle hash',
                        onChange: function (e) {
                          var a = e.target.value;
                          '0' === a.charAt(0) && 'x' === a.charAt(1) ? d(a.slice(2)) : d(a);
                        },
                      })
                    ),
                    c.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    c.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      c.a.createElement(o.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'Address',
                        value: h,
                      })
                    )
                  )
                )
              )
            );
          };

        function u(e) {
          return (
            Object(n.a)(e),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(c.a.Fragment, null, c.a.createElement(d, null))
            )
          );
        }
      }.call(this, t(27).Buffer));
    },
    304: function (e, a, t) {
      e.exports = t.p + 'static/media/analysis.9c422955.svg';
    },
    305: function (e, a, t) {
      e.exports = t.p + 'static/media/businessman.bb079bc0.svg';
    },
    306: function (e, a, t) {
      e.exports = t.p + 'static/media/handshake.c7ae7d3b.svg';
    },
    307: function (e, a, t) {
      e.exports = t.p + 'static/media/moving.720ba47d.svg';
    },
    308: function (e, a, t) {
      e.exports = t.p + 'static/media/hero-3.4fe45ca4.jpg';
    },
    313: function (e, a) {
      e.exports =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRkRDN0I1MDg2QzIxMUU5QjBDRUYyOUY3MkNFNkY2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRkRDN0I1MTg2QzIxMUU5QjBDRUYyOUY3MkNFNkY2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGREM3QjRFODZDMjExRTlCMENFRjI5RjcyQ0U2RjY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGREM3QjRGODZDMjExRTlCMENFRjI5RjcyQ0U2RjY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgID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';
    },
    314: function (e, a) {
      e.exports =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMUEwQzUzNTg2QzIxMUU5QkM3NEZCRTRGQUQ1RTM2QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMUEwQzUzNjg2QzIxMUU5QkM3NEZCRTRGQUQ1RTM2QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExQTBDNTMzODZDMjExRTlCQzc0RkJFNEZBRDVFMzZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExQTBDNTM0ODZDMjExRTlCQzc0RkJFNEZBRDVFMzZCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgID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';
    },
    315: function (e, a) {
      e.exports =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0UxMjlBNzg2QzIxMUU5QTY1NEM3RjAzOTY3NjhENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0UxMjlBODg2QzIxMUU5QTY1NEM3RjAzOTY3NjhENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDRTEyOUE1ODZDMjExRTlBNjU0QzdGMDM5Njc2OEQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDRTEyOUE2ODZDMjExRTlBNjU0QzdGMDM5Njc2OEQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgID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';
    },
    316: function (e, a, t) {
      e.exports = t.p + 'static/media/people-3.e378452f.jpg';
    },
    318: function (e, a, t) {
      e.exports = t.p + 'static/media/404.bb787358.svg';
    },
    320: function (e, a, t) {
      e.exports = t.p + 'static/media/tree_swing.a6e7c5ca.svg';
    },
    353: function (e, a, t) {
      e.exports = t(593);
    },
    37: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return o;
      });
      var n = t(162),
        l = t(163),
        r = t(455),
        c = t(456),
        i = function (e, a, t) {
          if (Number.isNaN(Number.parseFloat(e)) || !Number.isFinite(e)) return 0;
          var n = r(e).times(c.getUnit(a));
          return Number.parseFloat(n.div(c.getUnit(t)));
        },
        s = (function () {
          function e(a, t) {
            Object(n.a)(this, e), (this._value = a), (this._unit = t);
          }
          return (
            Object(l.a)(e, [
              {
                key: 'to',
                value: function (e) {
                  return (this._value = i(this._value, this._unit, e)), (this._unit = e), this;
                },
              },
              {
                key: 'value',
                value: function () {
                  return this._value;
                },
              },
              {
                key: 'format',
                value: function () {
                  var e,
                    a = c.getDisplay(this._unit),
                    t = a.format,
                    n = a.fractionDigits,
                    l = {
                      maximumFractionDigits: n,
                    };
                  if (
                    (a.trailing &&
                      (l = {
                        minimumFractionDigits: n,
                      }),
                    void 0 !== n)
                  ) {
                    var i = r(10).pow(n);
                    e = Number.parseFloat(r(Math.floor(r(this._value).times(i))).div(i));
                  } else e = this._value;
                  var s = t.replace('{amount}', Number.parseFloat(e).toLocaleString(void 0, l));
                  return a.pluralize && 1 !== this._value && (s += 's'), s;
                },
              },
              {
                key: 'toString',
                value: function () {
                  var e = {
                    maximumFractionDigits: c.getDisplay(this._unit).fractionDigits,
                  };
                  return Number.parseFloat(this._value).toLocaleString(void 0, e);
                },
              },
              {
                key: 'toCeilString',
                value: function () {
                  var e = {
                    maximumFractionDigits: c.getDisplay(this._unit).fractionDigits,
                  };
                  return Math.ceil(Number.parseFloat(this._value)).toLocaleString(void 0, e);
                },
              },
            ]),
            e
          );
        })(),
        o = function (e, a) {
          return new s(e, a);
        };
      (o.convert = i),
        (o.setDisplay = c.setDisplay),
        (o.setUnit = c.setUnit),
        (o.getUnit = c.getUnit),
        (o.setFiat = function (e, a) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          c.setUnit(e, 1 / a, t);
        });
    },
    399: function (e, a, t) {
      e.exports = t.p + 'static/media/studentcoin.1b8cc136.jpg';
    },
    400: function (e, a) {
      e.exports =
        'data:image/png;base64,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Y29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDItMTZUMTI6Mjc6MDgrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDMtMjVUMTU6NDQ6MzUrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTI1VDE1OjQ0OjM1KzAyOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmNlZjRkNzM3LWU5NGEtNDkyOS1hNDkwLWYxOTdkM2Y0MzA1YSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVmMjZlZjVlLTRmYzYtNGE0My1iM2I1LTc0N2JkOTZjZTUyYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmRiMzAzYzVlLTBlOGUtNDBiZS1iMjBkLTAxNTFiNzk3ZDNmZSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkYjMwM2M1ZS0wZThlLTQwYmUtYjIwZC0wMTUxYjc5N2QzZmUiIHN0RXZ0OndoZW49IjIwMjEtMDItMTZUMTI6Mjc6MDgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZl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';
    },
    434: function (e, a, t) {
      e.exports = t.p + 'static/media/coinzilla.3d850e19.png';
    },
    456: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, 'getUnit', function () {
          return i;
        }),
        t.d(a, 'setUnit', function () {
          return m;
        }),
        t.d(a, 'getDisplay', function () {
          return o;
        }),
        t.d(a, 'setDisplay', function () {
          return s;
        });
      var n = {
          chia: 1,
          mojo: 1e-12,
        },
        l = {
          chia: ['ch', 'chia', 'Chia'],
          mojo: ['mj', 'mojo'],
        },
        r = {
          chia: {
            format: '{amount} CH',
            fractionDigits: 12,
          },
          mojo: {
            format: '{amount} MJ',
            fractionDigits: 0,
          },
        },
        c = function (e) {
          var a = e.toLowerCase();
          return void 0 !== n[a]
            ? a
            : (function (e) {
                var a = e.toLowerCase(),
                  t = Object.keys(l).find(function (e) {
                    return l[e].includes(a);
                  });
                if (void 0 === t) throw new Error("Unit '".concat(e, "' is not supported"));
                return t;
              })(e);
        },
        i = function (e) {
          return n[c(e)];
        },
        s = function (e, a) {
          r[e.toLowerCase()] = a;
        },
        o = function (e) {
          return r[c(e)];
        },
        m = function (e, a) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          (n[e.toLowerCase()] = a),
            (r[e.toLowerCase()] =
              null !== t
                ? t
                : {
                    format: '{amount} '.concat(e),
                  });
        };
    },
    56: function (e, a, t) {
      e.exports = t.p + 'static/media/hero-4.c9a86180.jpg';
    },
    566: function (e, a, t) {
      e.exports = t.p + 'static/media/hero-8.152104af.jpg';
    },
    567: function (e, a, t) {
      var n = {
        './amplify-amazon-button_5.entry.js': [606, 6],
        './amplify-auth-fields_9.entry.js': [607, 16],
        './amplify-authenticator.entry.js': [608, 0, 24],
        './amplify-button_3.entry.js': [609, 7],
        './amplify-chatbot.entry.js': [610, 5],
        './amplify-checkbox.entry.js': [611, 25],
        './amplify-confirm-sign-in_7.entry.js': [612, 0, 26],
        './amplify-container.entry.js': [613, 27],
        './amplify-federated-buttons_2.entry.js': [614, 8],
        './amplify-federated-sign-in.entry.js': [615, 20],
        './amplify-form-field_4.entry.js': [616, 28],
        './amplify-greetings.entry.js': [617, 9],
        './amplify-icon-button.entry.js': [618, 29],
        './amplify-icon.entry.js': [619, 21],
        './amplify-link.entry.js': [620, 30],
        './amplify-nav_2.entry.js': [621, 10],
        './amplify-photo-picker.entry.js': [622, 18],
        './amplify-picker.entry.js': [623, 19],
        './amplify-radio-button_2.entry.js': [624, 0, 31],
        './amplify-s3-album.entry.js': [625, 11],
        './amplify-s3-image-picker.entry.js': [626, 12],
        './amplify-s3-image.entry.js': [627, 17],
        './amplify-s3-text-picker.entry.js': [628, 13],
        './amplify-s3-text.entry.js': [629, 14],
        './amplify-select-mfa-type.entry.js': [630, 15],
        './amplify-sign-in-button.entry.js': [631, 22],
        './amplify-toast.entry.js': [632, 32],
        './amplify-tooltip.entry.js': [633, 33],
      };

      function l(e) {
        if (!t.o(n, e))
          return Promise.resolve().then(function () {
            var a = new Error("Cannot find module '" + e + "'");
            throw ((a.code = 'MODULE_NOT_FOUND'), a);
          });
        var a = n[e],
          l = a[0];
        return Promise.all(a.slice(1).map(t.e)).then(function () {
          return t(l);
        });
      }
      (l.keys = function () {
        return Object.keys(n);
      }),
        (l.id = 567),
        (e.exports = l);
    },
    569: function (e, a, t) {},
    593: function (e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        l = t.n(n),
        r = t(30),
        c = t.n(r),
        i = t(162),
        s = t(163),
        o = t(328),
        m = t(327),
        d = t(12),
        u = t(267),
        p = t.n(u),
        h = t(100),
        b = t(20),
        f = t(136),
        E = {
          ThemeOptions: t(64).a,
        };
      var g = t(44),
        v = t(4),
        x = t(90),
        w = t(144),
        N = t(269),
        y = t(700),
        k = t(326),
        C = [
          'none',
          '0 0.46875rem 2.1875rem rgba(59, 62, 102, 0.03), 0 0.9375rem 1.40625rem rgba(59, 62, 102, 0.03), 0 0.25rem 0.53125rem rgba(59, 62, 102, 0.05), 0 0.125rem 0.1875rem rgba(59, 62, 102, 0.03)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
          '0 0.313rem 0.8rem rgba(122, 123, 151, 0.5), 0 0.126rem 0.225rem rgba(122, 123, 151, 0.3)',
        ],
        A = Object(k.a)({
          palette: {
            primary: {
              main: '#12a334',
            },
            grey: {
              300: '#fefefe',
              A100: '#f8f9ff',
            },
            secondary: {
              main: '#4191ff',
            },
            error: {
              main: '#f83245',
            },
            success: {
              main: '#1bc943',
            },
            info: {
              main: '#11c5db',
            },
            warning: {
              main: '#f4772e',
            },
            helpers: {
              primary: '#12a334',
              main: 'rgba(25, 46, 91, .035)',
            },
            contrastThreshold: 3,
            tonalOffset: 0.1,
          },
          breakpoints: {
            values: {
              xs: 0,
              sm: 576,
              md: 768,
              lg: 1100,
              xl: 1381,
            },
          },
          shape: {
            borderRadius: '0.2rem',
          },
          overrides: {
            MuiTab: {
              root: {
                fontWeight: 'bold',
              },
            },
            MuiButton: {
              sizeSmall: {
                padding: '6px 20px',
                fontSize: 14,
              },
              outlinedSmall: {
                padding: '6px 20px',
                fontSize: 14,
              },
              textSmall: {
                padding: '6px 20px',
                fontSize: 14,
              },
              sizeMedium: {
                padding: '10px 22px',
                fontSize: 15,
              },
              outlined: {
                padding: '10px 22px',
                fontSize: 14,
              },
              text: {
                padding: '10px 22px',
                fontSize: 14,
              },
              sizeLarge: {
                padding: '16px 28px',
                fontSize: 16,
              },
              outlinedLarge: {
                padding: '16px 28px',
                fontSize: 16,
              },
              textLarge: {
                padding: '16px 28px',
                fontSize: 16,
              },
              root: {
                textTransform: 'none',
                fontWeight: 'normal',
                padding: '10px 22px',
                fontSize: 14,
              },
            },
            MuiTooltip: {
              tooltip: {
                backgroundColor: '#070919',
                padding: '8px 16px',
                fontSize: '13px',
              },
              arrow: {
                color: '#070919',
              },
            },
          },
          typography: {
            fontFamily: ['Heebo', 'sans-serif'].join(','),
            htmlFontSize: 16,
            fontSize: 14,
          },
          shadows: C,
        }),
        S = t(7),
        O = t(8),
        j = Object(g.b)(function (e) {
          return {
            sidebarToggle: e.ThemeOptions.sidebarToggle,
            sidebarToggleMobile: e.ThemeOptions.sidebarToggleMobile,
            sidebarFixed: e.ThemeOptions.sidebarFixed,
            headerFixed: e.ThemeOptions.headerFixed,
            headerSearchHover: e.ThemeOptions.headerSearchHover,
            headerDrawerToggle: e.ThemeOptions.headerDrawerToggle,
            footerFixed: e.ThemeOptions.footerFixed,
            contentBackground: e.ThemeOptions.contentBackground,
          };
        })(function (e) {
          var a = e.children,
            t = e.sidebarToggle,
            n = e.sidebarToggleMobile,
            r = e.sidebarFixed,
            c = e.headerFixed,
            i = e.headerSearchHover,
            s = e.headerDrawerToggle,
            o = e.footerFixed,
            m = e.contentBackground,
            d = e.locale;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              {
                className: Object(S.a)('app-wrapper', m, {
                  'header-drawer-open': s,
                  'app-sidebar-collapsed': t,
                  'app-sidebar-mobile-open': n,
                  'app-sidebar-fixed': r,
                  'app-header-fixed': c,
                  'app-footer-fixed': o,
                  'search-wrapper-open': i,
                }),
              },
              l.a.createElement(
                'div',
                null,
                l.a.createElement(O.e, {
                  locale: d,
                })
              ),
              l.a.createElement(
                'div',
                {
                  className: 'app-main',
                },
                l.a.createElement(O.c, {
                  locale: d,
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'app-content',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'app-content--inner',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'app-content--inner__wrapper',
                      },
                      a
                    )
                  ),
                  l.a.createElement(O.b, {
                    locale: d,
                  })
                )
              )
            )
          );
        }),
        T = t(5),
        z = t.n(T),
        D = function (e) {
          var a = e.children;
          return l.a.createElement(l.a.Fragment, null, a);
        };
      D.propTypes = {
        children: z.a.node,
      };
      var M = D,
        F = function (e) {
          var a = e.children;
          return l.a.createElement(l.a.Fragment, null, a);
        };
      F.propTypes = {
        children: z.a.node,
      };
      var I = F,
        B = t(15),
        H = t(332),
        P = t(128),
        U = t(145),
        R = t(602);

      function L() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia Explorer REST API'),
            l.a.createElement('meta', {
              content: 'REST API for accessing data in the Chia Blockain.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Chia Explorer REST API v0.1',
            titleDescription:
              'Extract data from the Chia Blockchain\u2122 using the official Chia Explorer REST API',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                l.a.createElement(
                  'h2',
                  {
                    style: {
                      marginBottom: '10px',
                    },
                  },
                  'Introduction'
                ),
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    U.a,
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(
                        'p',
                        null,
                        'Chia Explorer provides a public REST API for extracting data from the Chia Blockchain\u2122. The entire API is currently in beta and a comprehensive support schedule has not been defined. It is expected that the current APIs will continue to work until at least January 2022.'
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(
                        'p',
                        null,
                        'The free tier of the API supports 1 request per second and up to 5,000 requests per day. If you require more than this you will need to upgrade to a paid plan (currently in development).'
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'h2',
                  {
                    style: {
                      marginBottom: '10px',
                      marginTop: '10px',
                    },
                  },
                  'Authorization'
                ),
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    U.a,
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(
                        'p',
                        null,
                        'You need to pass a ',
                        l.a.createElement('b', null, 'x-api-key'),
                        ' header containing your API key. To get a free tier API key please ',
                        l.a.createElement(
                          d.b,
                          {
                            className: 'text-first',
                            to: '/pro/register',
                          },
                          'register for an account'
                        ),
                        '.'
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'h2',
                  {
                    style: {
                      marginBottom: '10px',
                      marginTop: '10px',
                    },
                  },
                  'Endpoints'
                ),
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    U.a,
                    null,
                    l.a.createElement(
                      R.a,
                      {
                        className:
                          'table table-hover text-left mt-4 text-nowrap table-alternate  mb-0',
                      },
                      l.a.createElement(
                        'thead',
                        null,
                        l.a.createElement(
                          'tr',
                          null,
                          l.a.createElement('th', null, l.a.createElement('b', null, 'Endpoint')),
                          l.a.createElement(
                            'th',
                            null,
                            l.a.createElement('b', null, 'HTTP Method')
                          ),
                          l.a.createElement('th', null, l.a.createElement('b', null, 'URL')),
                          l.a.createElement('th', null, l.a.createElement('b', null, 'Response'))
                        )
                      ),
                      l.a.createElement(
                        'tbody',
                        null,
                        l.a.createElement(
                          'tr',
                          null,
                          l.a.createElement('td', null, 'Netspace'),
                          l.a.createElement('td', null, 'GET'),
                          l.a.createElement(
                            'td',
                            null,
                            'https://public-api.chiaexplorer.com/0.1/netspace'
                          ),
                          l.a.createElement('td', null, '{ "netspace": 264029029058931140 }')
                        ),
                        l.a.createElement(
                          'tr',
                          null,
                          l.a.createElement('td', null, 'Balance'),
                          l.a.createElement('td', null, 'GET'),
                          l.a.createElement(
                            'td',
                            null,
                            'https://public-api.chiaexplorer.com/0.1/balance/xch16g76z3545xy2u4cgm52jyc7ymwyravn7m6unv9udfkvghreuuh7qa9cvfl'
                          ),
                          l.a.createElement(
                            'td',
                            null,
                            '{ "grossBalance": 18375000000000000000, "netBalance": 18375000000000000000 }'
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(H.a, {
              item: !0,
              xl: 12,
            })
          )
        );
      }
      var X = t(686),
        W = t(208),
        J = t(695),
        Q = t(11),
        G = t(698),
        V = t(691),
        K = t(598),
        q = t(696),
        Z = t(176),
        Y = t.n(Z),
        _ =
          (t(408),
          function () {
            var e = Object(n.useState)(!1),
              a = Object(v.a)(e, 2),
              t = a[0],
              r = a[1];
            return (
              Object(n.useEffect)(function () {
                W.a
                  .currentAuthenticatedUser()
                  .then(function () {
                    return r(!0);
                  })
                  .catch(console.log);
              }, []),
              t
                ? l.a.createElement(
                    X.a,
                    {
                      component: d.c,
                      to: '/pro/home',
                      className:
                        'rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-success',
                    },
                    l.a.createElement(J.a, {
                      id: 'memberHome',
                      description: 'Member home',
                      defaultMessage: 'Member home',
                    })
                  )
                : l.a.createElement(
                    X.a,
                    {
                      component: d.c,
                      to: '/pro/register',
                      className:
                        'rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-success',
                    },
                    'Register / Login'
                  )
            );
          });

      function $() {
        var e = Object(n.useState)(!1),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = function () {
            return r(!t);
          };
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            {
              className: 'header-top-section py-3',
            },
            l.a.createElement(
              G.a,
              {
                className:
                  'd-flex header-nav-menu justify-content-between align-items-center navbar-dark',
              },
              l.a.createElement('ul', {
                className: 'd-flex',
              }),
              l.a.createElement(
                'ul',
                {
                  className: 'd-flex',
                },
                l.a.createElement('li', {
                  className: 'mr-0',
                })
              )
            )
          ),
          l.a.createElement(
            G.a,
            null,
            l.a.createElement(
              'div',
              {
                className:
                  'bg-white-10 p-2 header-nav-wrapper header-nav-wrapper-xl rounded px-4 navbar-dark',
              },
              l.a.createElement(
                'div',
                {
                  className: 'app-nav-logo',
                },
                l.a.createElement(
                  d.c,
                  {
                    to: '/',
                    title: 'Chia cryptocurrency blockchain explorer',
                    className: 'app-nav-logo app-nav-logo--light',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'app-nav-logo--icon shadow-second-sm bg-secondary border-0',
                    },
                    l.a.createElement('img', {
                      alt: 'Chia cryptocurrency blockchain explorer',
                      src: Y.a,
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'app-nav-logo--text',
                    },
                    l.a.createElement(
                      'span',
                      null,
                      l.a.createElement(J.a, {
                        id: 'blockchainExplorer',
                        description: 'Blockchain Explorer',
                        defaultMessage: 'Blockchain Explorer',
                      })
                    ),
                    l.a.createElement('b', null, 'Chia Explorer')
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'header-nav-menu d-none d-lg-block',
                },
                l.a.createElement(
                  'ul',
                  {
                    className: 'd-flex nav nav-neutral-first justify-content-center',
                  },
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          return e.preventDefault();
                        },
                        className: 'font-weight-bold rounded-sm text-white px-3',
                      },
                      l.a.createElement(J.a, {
                        id: 'guides',
                        description: 'Guides',
                        defaultMessage: 'Guides',
                      }),
                      l.a.createElement(
                        'span',
                        {
                          className: 'opacity-5 dropdown-arrow',
                        },
                        l.a.createElement(Q.a, {
                          icon: ['fas', 'angle-down'],
                        })
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'submenu-dropdown submenu-dropdown--md',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'shadow-sm-dark w-100 bg-happy-green-menu p-4 rounded',
                        },
                        l.a.createElement(
                          V.a,
                          {
                            component: 'div',
                            className: 'nav-pills nav-transparent nav-pills-rounded flex-column',
                          },
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/what-is-farming',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'whatIsFarming',
                                description: 'What is farming?',
                                defaultMessage: 'What is farming?',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/plotting',
                              className: 'px-4 d-flex text-white-50 align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'plotting',
                                description: 'Plotting',
                                defaultMessage: 'Plotting',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/chia-farming-pools',
                              className: 'px-4 d-flex text-white-50 align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'farmingPools',
                                description: 'Farming pools',
                                defaultMessage: 'Farming pools',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/chia-coins',
                              className: 'px-4 d-flex text-white-50 align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'chiaCoins',
                                description: 'Chia coins',
                                defaultMessage: 'Chia coins',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          )
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          return e.preventDefault();
                        },
                        className: 'font-weight-bold rounded-sm text-white px-3',
                      },
                      l.a.createElement(J.a, {
                        id: 'charts',
                        description: 'Charts',
                        defaultMessage: 'Charts',
                      }),
                      l.a.createElement(
                        'span',
                        {
                          className: 'opacity-5 dropdown-arrow',
                        },
                        l.a.createElement(Q.a, {
                          icon: ['fas', 'angle-down'],
                        })
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'submenu-dropdown submenu-dropdown--md',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'shadow-sm-dark w-100 bg-happy-green-menu p-4 rounded',
                        },
                        l.a.createElement(
                          V.a,
                          {
                            component: 'div',
                            className: 'nav-pills nav-transparent nav-pills-rounded flex-column',
                          },
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/netspace',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'netspace',
                                description: 'Netspace',
                                defaultMessage: 'Netspace',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/xchPrice',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'chiaXchPrice',
                                description: 'Chia (XCH) Price',
                                defaultMessage: 'Chia (XCH) Price',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/xchTib',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'xchTibDay',
                                description: 'XCH/TiB Day',
                                defaultMessage: 'XCH/TiB Day',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/tibHoursXch',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'tibHourXch',
                                description: 'TiB Hour/XCH',
                                defaultMessage: 'TiB Hour/XCH',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/usdTib',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement('span', null, 'USD / TiB Month'),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/addressCount',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'uniqueAddressCount',
                                description: 'Unique address count',
                                defaultMessage: 'Unique address count',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/networkDecentralisation',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'networkDecentralisation',
                                description: 'Network decentralisation',
                                defaultMessage: 'Network decentralisation',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/size',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement('span', null, 'Proof of space size'),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/difficulty',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'difficulty',
                                description: 'Difficulty',
                                defaultMessage: 'Difficulty',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/weight',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'weight',
                                description: 'Weight',
                                defaultMessage: 'Weight',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          )
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      d.c,
                      {
                        to: '/blockchain/search',
                        className: 'font-weight-bold rounded-sm text-white px-3',
                      },
                      l.a.createElement(J.a, {
                        id: 'search',
                        description: 'Search',
                        defaultMessage: 'Search',
                      })
                    )
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          return e.preventDefault();
                        },
                        className: 'font-weight-bold rounded-sm text-white px-3',
                      },
                      'Language',
                      l.a.createElement(
                        'span',
                        {
                          className: 'opacity-5 dropdown-arrow',
                        },
                        l.a.createElement(Q.a, {
                          icon: ['fas', 'angle-down'],
                        })
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'submenu-dropdown submenu-dropdown--md',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'shadow-sm-dark w-100 bg-happy-green-menu p-4 rounded',
                        },
                        l.a.createElement(
                          V.a,
                          {
                            component: 'div',
                            className: 'nav-pills nav-transparent nav-pills-rounded flex-column',
                          },
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement('span', null, 'English'),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          )
                        ),
                        l.a.createElement(
                          V.a,
                          {
                            component: 'div',
                            className: 'nav-pills nav-transparent nav-pills-rounded flex-column',
                          },
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/zh-cn',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement('span', null, '\u4e2d\u6587'),
                            l.a.createElement(Q.a, {
                              icon: ['fas'],
                              className: 'opacity-6 ml-auto',
                            })
                          )
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'header-nav-actions flex-grow-0 flex-lg-grow-1',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'd-none d-lg-block',
                  },
                  l.a.createElement(_, null)
                ),
                l.a.createElement(
                  'span',
                  {
                    className: 'd-block d-lg-none',
                  },
                  l.a.createElement(
                    'button',
                    {
                      onClick: c,
                      className: Object(S.a)('navbar-toggler hamburger hamburger--elastic', {
                        'is-active': t,
                      }),
                    },
                    l.a.createElement(
                      'span',
                      {
                        className: 'hamburger-box',
                      },
                      l.a.createElement('span', {
                        className: 'hamburger-inner',
                      })
                    )
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'd-flex d-lg-none',
                },
                l.a.createElement(
                  q.a,
                  {
                    in: t,
                    className: 'nav-collapsed-wrapper shadow-sm-dark navbar-collapse',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'nav-inner-wrapper',
                    },
                    l.a.createElement(
                      X.a,
                      {
                        onClick: c,
                        className:
                          'btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0',
                      },
                      l.a.createElement(
                        'span',
                        {
                          className: 'btn-wrapper--icon',
                        },
                        l.a.createElement(Q.a, {
                          icon: ['fas', 'times'],
                        })
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm',
                      },
                      'Navigation Menu'
                    ),
                    l.a.createElement(
                      V.a,
                      {
                        component: 'div',
                        className: 'nav-pills nav-neutral-primary nav-pills-rounded flex-column',
                      },
                      l.a.createElement(
                        K.a,
                        {
                          button: !0,
                          component: d.c,
                          to: '/blockchain/search',
                          className: 'px-4 d-flex align-items-center',
                        },
                        l.a.createElement(
                          'span',
                          null,
                          l.a.createElement(J.a, {
                            id: 'search',
                            description: 'Search',
                            defaultMessage: 'Search',
                          })
                        ),
                        l.a.createElement(Q.a, {
                          icon: ['fas', 'angle-right'],
                          className: 'opacity-6 ml-auto',
                        })
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'm-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'bg-grow-early px-3 py-4 rounded',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className:
                              'px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm',
                          },
                          l.a.createElement(J.a, {
                            id: 'guides',
                            description: 'Guides',
                            defaultMessage: 'Guides',
                          })
                        ),
                        l.a.createElement(
                          V.a,
                          {
                            component: 'div',
                            className: 'nav-pills nav-transparent nav-pills-rounded flex-column',
                          },
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/what-is-farming',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'whatIsFarming',
                                description: 'What is farming?',
                                defaultMessage: 'What is farming?',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'angle-right'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/plotting',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'plotting',
                                description: 'Plotting',
                                defaultMessage: 'Plotting',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'angle-right'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/chia-farming-pools',
                              className: 'px-4 d-flex text-white-50 align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'farmingPools',
                                description: 'Farming pools',
                                defaultMessage: 'Farming pools',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'angle-right'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/chia-coins',
                              className: 'px-4 d-flex text-white-50 align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'chiaCoins',
                                description: 'Chia coins',
                                defaultMessage: 'Chia coins',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'angle-right'],
                              className: 'opacity-6 ml-auto',
                            })
                          )
                        )
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'm-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'bg-grow-early px-3 py-4 rounded',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className:
                              'px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm',
                          },
                          l.a.createElement(J.a, {
                            id: 'charts',
                            description: 'Charts',
                            defaultMessage: 'Charts',
                          })
                        ),
                        l.a.createElement(
                          V.a,
                          {
                            component: 'div',
                            className: 'nav-pills nav-transparent nav-pills-rounded flex-column',
                          },
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/netspace',
                              className: 'px-4 text-white-50 d-flex align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'netspace',
                                description: 'Netspace',
                                defaultMessage: 'Netspace',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'angle-right'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/difficulty',
                              className: 'px-4 d-flex text-white-50 align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'difficulty',
                                description: 'Difficulty',
                                defaultMessage: 'Difficulty',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'angle-right'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/weight',
                              className: 'px-4 d-flex text-white-50 align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'weight',
                                description: 'Weight',
                                defaultMessage: 'Weight',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'angle-right'],
                              className: 'opacity-6 ml-auto',
                            })
                          ),
                          l.a.createElement(
                            K.a,
                            {
                              component: 'a',
                              button: !0,
                              href: '/charts/fees',
                              className: 'px-4 d-flex text-white-50 align-items-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(J.a, {
                                id: 'fees',
                                description: 'Fees',
                                defaultMessage: 'Fees',
                              })
                            ),
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'angle-right'],
                              className: 'opacity-6 ml-auto',
                            })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          l.a.createElement('div', {
            className: Object(S.a)('collapse-page-trigger', {
              'is-active': t,
            }),
            onClick: c,
          })
        );
      }

      function ee() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            {
              className: 'bg-white pb-5 pt-0 pt-md-5 rounded',
            },
            l.a.createElement(
              G.a,
              {
                className: 'pt-0 pt-xl-5',
              },
              l.a.createElement(
                H.a,
                {
                  container: !0,
                  spacing: 12,
                },
                l.a.createElement(
                  H.a,
                  {
                    item: !0,
                    xl: 12,
                    className: 'd-flex align-items-center',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'w-100',
                    },
                    l.a.createElement(
                      H.a,
                      {
                        container: !0,
                        spacing: 6,
                        className: 'd-none d-md-flex mt-3',
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 3,
                        },
                        l.a.createElement('div', {
                          className: 'divider-v divider-v-lg opacity-1 d-none d-xl-block',
                        }),
                        l.a.createElement(
                          'div',
                          {
                            className: 'pl-0 pl-lg-3',
                          },
                          l.a.createElement(
                            'h6',
                            {
                              className: 'text-black font-weight-bold mb-3',
                            },
                            l.a.createElement(J.a, {
                              id: 'charts',
                              description: 'Charts',
                              defaultMessage: 'Charts',
                            })
                          ),
                          l.a.createElement(
                            V.a,
                            {
                              component: 'div',
                              className: 'nav-transparent-alt flex-column',
                            },
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/netspace',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'netspace',
                                description: 'Netspace',
                                defaultMessage: 'Netspace',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/xchPrice',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'chiaXchPrice',
                                description: 'Chia (XCH) Price',
                                defaultMessage: 'Chia (XCH) Price',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/xchTib',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'xchTibDay',
                                description: 'XCH/TiB Day',
                                defaultMessage: 'XCH/TiB Day',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/tibHoursXch',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'tibHourXch',
                                description: 'TiB Hour/XCH',
                                defaultMessage: 'TiB Hour/XCH',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/usdTib',
                                className: 'px-0 py-1 text-black-50',
                              },
                              'USD / TiB Month'
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/networkDecentralisation',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'networkDecentralisation',
                                description: 'Network decentralisation',
                                defaultMessage: 'Network decentralisation',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/addressCount',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'uniqueAddressCount',
                                description: 'Unique address count',
                                defaultMessage: 'Unique address count',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/topFarmers',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'topFarmers',
                                description: 'Top farmers',
                                defaultMessage: 'Top farmers',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/topPools',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'topPools',
                                description: 'Top pool pub keys',
                                defaultMessage: 'Top pool pub keys',
                              })
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 3,
                        },
                        l.a.createElement('div', {
                          className: 'divider-v divider-v-lg opacity-1 d-none d-xl-block',
                        }),
                        l.a.createElement(
                          'div',
                          {
                            className: 'pl-0 pl-lg-3',
                          },
                          l.a.createElement(
                            'h6',
                            {
                              className: 'text-black font-weight-bold mb-3',
                            },
                            l.a.createElement(J.a, {
                              id: 'charts',
                              description: 'Charts',
                              defaultMessage: 'Charts',
                            })
                          ),
                          l.a.createElement(
                            V.a,
                            {
                              component: 'div',
                              className: 'nav-transparent-alt flex-column',
                            },
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/difficulty',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'difficulty',
                                description: 'Difficulty',
                                defaultMessage: 'Difficulty',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/weight',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'weight',
                                description: 'Weight',
                                defaultMessage: 'Weight',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/charts/fees',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'fees',
                                description: 'Fees',
                                defaultMessage: 'Fees',
                              })
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 3,
                        },
                        l.a.createElement('div', {
                          className: 'divider-v divider-v-lg opacity-1 d-none d-xl-block',
                        }),
                        l.a.createElement(
                          'div',
                          {
                            className: 'pl-0 pl-lg-3',
                          },
                          l.a.createElement(
                            'h6',
                            {
                              className: 'text-black font-weight-bold mb-3',
                            },
                            'Pages'
                          ),
                          l.a.createElement(
                            V.a,
                            {
                              component: 'div',
                              className: 'nav-transparent-alt flex-column',
                            },
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: 'https://www.chiaexplorer.com',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'home',
                                description: 'Home',
                                defaultMessage: 'Home',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/blockchain/search',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'search',
                                description: 'Search',
                                defaultMessage: 'Search',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/top-farmers',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'topFarmers',
                                description: 'Top farmers',
                                defaultMessage: 'Top farmers',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/top-pools',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'topPools',
                                description: 'Top pool pub keys',
                                defaultMessage: 'Top pool pub keys',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/pre-farm',
                                className: 'px-0 py-1 text-black-50',
                              },
                              'Pre-farm tracker'
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/advertise',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'advertise',
                                description: 'Advertise',
                                defaultMessage: 'Advertise',
                              })
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 3,
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'pl-0 pl-lg-3',
                          },
                          l.a.createElement(
                            'h6',
                            {
                              className: 'text-black font-weight-bold mb-3',
                            },
                            l.a.createElement(J.a, {
                              id: 'guides',
                              description: 'Guides',
                              defaultMessage: 'Guides',
                            })
                          ),
                          l.a.createElement(
                            V.a,
                            {
                              component: 'div',
                              className: 'nav-transparent-alt flex-column',
                            },
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/what-is-farming',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'whatIsFarming',
                                description: 'What is farming?',
                                defaultMessage: 'What is farming?',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/plotting',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'plotting',
                                description: 'Plotting',
                                defaultMessage: 'Plotting',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/chia-farming-pools',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'farmingPools',
                                description: 'Farming pools',
                                defaultMessage: 'Farming pools',
                              })
                            ),
                            l.a.createElement(
                              K.a,
                              {
                                component: 'a',
                                button: !0,
                                href: '/chia-coins',
                                className: 'px-0 py-1 text-black-50',
                              },
                              l.a.createElement(J.a, {
                                id: 'chiaCoins',
                                description: 'Chia coins',
                                defaultMessage: 'Chia coins',
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                'div',
                null,
                l.a.createElement('div', {
                  className:
                    'divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto mb-4 mt-5 w-25',
                }),
                l.a.createElement(
                  V.a,
                  {
                    component: 'div',
                    className: 'nav-transparent-alt text-nowrap d-flex justify-content-center',
                  },
                  l.a.createElement(
                    K.a,
                    {
                      button: !0,
                      component: 'a',
                      className: 'text-facebook hover-scale-sm',
                      href: 'https://www.facebook.com/chiaexplorer/',
                    },
                    l.a.createElement(Q.a, {
                      icon: ['fab', 'facebook'],
                      className: 'font-size-lg',
                    })
                  ),
                  l.a.createElement(
                    K.a,
                    {
                      button: !0,
                      component: 'a',
                      className: 'text-twitter hover-scale-sm',
                      href: 'https://twitter.com/ChiaExplorer',
                    },
                    l.a.createElement(Q.a, {
                      icon: ['fab', 'twitter'],
                      className: 'font-size-lg',
                    })
                  ),
                  l.a.createElement(
                    K.a,
                    {
                      button: !0,
                      component: 'a',
                      className: 'text-instagram hover-scale-sm',
                      href: 'https://www.instagram.com/chiaexplorer/',
                    },
                    l.a.createElement(Q.a, {
                      icon: ['fab', 'instagram'],
                      className: 'font-size-lg',
                    })
                  )
                ),
                l.a.createElement('div', {
                  className:
                    'divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'text-center d-block text-black-50',
                  },
                  'Copyright \xa9 2021 - chiaexplorer.com',
                  l.a.createElement('br', null),
                  l.a.createElement('br', null),
                  'CHIA NETWORK INC, CHIA\u2122, the CHIA BLOCKCHAIN\u2122, the CHIA PROTOCOL\u2122, CHIALISP\u2122 and the \u201cleaf Logo\u201d (including the leaf logo alone when it refers to or indicates Chia), are trademarks or registered trademarks of Chia Network, Inc., a Delaware corporation, used under license.'
                )
              )
            )
          )
        );
      }
      var ae = function (e) {
          var a = e.title,
            t = e.intro,
            n = e.children;
          return l.a.createElement(
            G.a,
            {
              className: 'z-over shadow-container-content-5',
            },
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 6,
                className: 'py-5',
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  lg: 12,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'shadow-xxl card-box-hover-rise mb-5',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'py-4 feature-box',
                    },
                    l.a.createElement(
                      G.a,
                      {
                        className: 'py-5',
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 11,
                          lg: 10,
                          className: 'mx-auto',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'mb-4 text-center',
                          },
                          l.a.createElement(
                            'h1',
                            {
                              className: 'font-weight-bold text-second display-3',
                            },
                            a
                          )
                        ),
                        l.a.createElement(
                          'div',
                          {
                            style: {
                              marginBottom: '50px',
                            },
                          },
                          t
                        ),
                        l.a.createElement(
                          H.a,
                          {
                            container: !0,
                            spacing: 6,
                          },
                          n
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        te = t(56),
        ne = t.n(te),
        le = (t(434), t(704)),
        re = t(291),
        ce = t(292),
        ie = function (e) {
          switch (e) {
            case 'zh':
              return ce;
            default:
              return re;
          }
        },
        se = t(293),
        oe = t.n(se),
        me = t(294),
        de = t.n(me),
        ue = 'https://coinzilla.com/ref/925607e53d4014b7872/';

      function pe(e) {
        var a = e.locale,
          t =
            (Object(x.g)(),
            function () {
              window.location.href = ue;
            });
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            le.a,
            {
              messages: ie(a),
              locale: a || 'en',
              defaultLocale: 'en',
            },
            l.a.createElement(
              B.a,
              null,
              l.a.createElement('title', null, 'Advertise on Chia Explorer'),
              l.a.createElement('meta', {
                content: 'Advertise on Chia Explorer',
                name: 'description',
              })
            ),
            l.a.createElement(
              'div',
              {
                className: 'hero-wrapper bg-composed-wrapper bg-happy-green',
              },
              l.a.createElement(
                'div',
                {
                  className: 'header-top-section pb-2',
                },
                l.a.createElement($, null)
              ),
              l.a.createElement(
                'div',
                {
                  className: 'hero-wrapper--content',
                },
                l.a.createElement('div', {
                  className: 'bg-composed-wrapper--image bg-composed-filter-rm',
                  style: {
                    backgroundImage: 'url(' + ne.a + ')',
                  },
                }),
                l.a.createElement('div', {
                  className: 'bg-composed-wrapper--bg bg-second opacity-5',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'bg-composed-wrapper--content',
                  },
                  l.a.createElement(
                    ae,
                    {
                      title: 'Advertise on Chia Explorer',
                      intro:
                        "It's awesome that you are interested in advertising on Chia Explorer. We are still in the very early days of Chia and you are on the cutting edge!",
                    },
                    l.a.createElement(
                      H.a,
                      {
                        item: !0,
                        xl: 5,
                        className: 'd-none d-xl-flex align-items-center',
                      },
                      l.a.createElement('img', {
                        onClick: t,
                        style: {
                          cursor: 'pointer',
                        },
                        alt: 'Advertise on Chia Explorer',
                        className: 'd-block img-fluid',
                        src: de.a,
                      })
                    ),
                    l.a.createElement(
                      H.a,
                      {
                        item: !0,
                        xl: 7,
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'py-0 pb-5 py-xl-5',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'pr-0 pr-xl-5',
                          },
                          l.a.createElement(
                            'h2',
                            {
                              style: {
                                marginBottom: '15px',
                              },
                            },
                            'Coinzilla'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'font-size-lg',
                            },
                            'We had a lot of difficulty in finding a decent ad solution for the cryptocurrency niche. With big players like google and Facebook banning crypto advertising, we had to turn to a more niche solution.'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'font-size-lg',
                            },
                            "That's when we turned to Coinzilla."
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'font-size-lg',
                            },
                            'Their advertising solutions paired with the know-how of their account managers can ensure an optimal and non-intrusive user experience for all the campaigns they deliver.'
                          )
                        )
                      )
                    ),
                    l.a.createElement('img', {
                      onClick: t,
                      style: {
                        cursor: 'pointer',
                      },
                      alt: 'Advertise on Chia Explorer',
                      className: 'd-block img-fluid',
                      src: oe.a,
                    }),
                    l.a.createElement(
                      H.a,
                      {
                        item: !0,
                        xl: 12,
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'py-0 pb-5 py-xl-5',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'pr-0 pr-xl-5',
                          },
                          l.a.createElement(
                            'h2',
                            {
                              style: {
                                marginBottom: '15px',
                                textAlign: 'center',
                                fontWeight: 'bold',
                              },
                            },
                            'How to advertise'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'font-size-lg',
                            },
                            'Coinzilla will manage all advertising inquiries on chiaexplorer.com, and our team will be in constant touch with theirs to maintain high advertising standards.'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'font-size-lg',
                            },
                            'Simply contact them at ',
                            l.a.createElement(
                              'a',
                              {
                                className: 'text-success',
                                href: 'mailto:chiaexplorer@coinzilla.com',
                              },
                              'chiaexplorer@coinzilla.com'
                            ),
                            ', set up your campaign, and deliver ads on our website.'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'font-size-lg',
                              style: {
                                textAlign: 'center',
                              },
                            },
                            l.a.createElement(
                              X.a,
                              {
                                href: ue,
                                className:
                                  'rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-success',
                              },
                              l.a.createElement(
                                'span',
                                {
                                  style: {
                                    padding: '10px',
                                    fontSize: '16px',
                                  },
                                },
                                'Advertise with us'
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'shadow-container-blocks-5 z-below',
                    },
                    l.a.createElement(
                      'svg',
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 1440 320',
                      },
                      l.a.createElement('path', {
                        fill: 'var(--white)',
                        fillOpacity: '1',
                        d: 'M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z',
                      })
                    )
                  )
                )
              )
            ),
            l.a.createElement(ee, null)
          )
        );
      }
      var he = t(295),
        be = t.n(he);

      function fe(e) {
        e.locale;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'What is farming? - Chia blockchain explorer'),
            l.a.createElement('meta', {
              content: 'The ultimate guide to farming Chia cryptocurrency.',
              name: 'description',
            })
          ),
          l.a.createElement(
            'div',
            {
              className: 'hero-wrapper bg-composed-wrapper bg-happy-green',
            },
            l.a.createElement(
              'div',
              {
                className: 'header-top-section pb-2',
              },
              l.a.createElement($, null)
            ),
            l.a.createElement(
              'div',
              {
                className: 'hero-wrapper--content',
              },
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--image bg-composed-filter-rm',
                style: {
                  backgroundImage: 'url(' + ne.a + ')',
                },
              }),
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--bg bg-second opacity-5',
              }),
              l.a.createElement(
                'div',
                {
                  className: 'bg-composed-wrapper--content',
                },
                l.a.createElement(
                  ae,
                  {
                    title: 'What is farming?',
                    intro:
                      'This is intended to be a high-level non-technical explanation of farming Chia. It should help you understand Chia and make use of some of the information presented on Chia Explorer. For more detailed technical information please refer to the Chia greenpaper.',
                  },
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 5,
                      className: 'd-none d-xl-flex align-items-center',
                    },
                    l.a.createElement('img', {
                      alt: '...',
                      className: 'w-100',
                      src: be.a,
                    })
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 7,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Plotting'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'In order to farm Chia you first need to create one or more "plots" which are files that take up space on your hard drive. The space that a plot uses is represented by the letter ',
                          l.a.createElement('b', null, 'k'),
                          '.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Creating plots takes some time and CPU power. The bigger the k value the bigger the plot and the longer it takes to create. Once you have created a plot there is no difference between one k and another other than the file size.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'You can move plots from one machine to another without any restrictions. Some people build dedicated plotting machines that are optimised to perform the plotting process quickly, and then move the plots to a less powerful machine to perform the harvesting.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Harvesting'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Once you have one or more plots you are ready to start harvesting them.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Harvesting can be thought of like playing bingo. The plots are the bingo cards and the process of harvesting involves waiting for the number to be called out and checking the card to see if you have won. This is a trivial operation and uses a very small amount of electricity. You can very comfortably harvest from a Raspberry Pi.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Most of the time a harvester will not find the required value in a plot, but when it does it gets something called a "proof of space" which proves that an amount of space was allocated to a plot.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'The proof of space is used to create an "unfinished" block which is propagated on the Chia network\u2122. The block will remain unfinished until it obtains a proof of time - this is where timelords come into play.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Timelords'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'For security reasons Chia is designed to maintain a minimum amount of time between blocks which is achieved by timelords.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Timelords are notified when unfinished blocks are submitted to the network and are able to then start working on a "proof of time".'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'This proof is achieved using something called a VDF (verifiable delay function) which is a way of proving that an amount of time has been spent performing some work.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Most people will not run a timelord and do not need to understand it fully. The important thing to know is that VDF are performed sequentially which means it uses a small amount of electricity compared to other approaches.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'When timelords are notified about unfinished blocks they get to decide which one to work on based on the number of VDF "iterations" required - the more iterations required the longer it will take. It is possible that a timelord receives notification of a new unfinished block after they have already started the proof of time for a different one - when this happens it will have to look at how many iterations it has already performed to decide whether to continue with the current unfinished block or to drop it and start working on the new one (because it would be quicker).'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Once a timelord finishes a proof of time it gets propagated to the network and the block becomes valid. It is at this point that the lucky farmer will be rewarded with Chia.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Difficulty and weight'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'The number of VDF iterations that timelords must perform is influenced by a number known as "difficulty". The purpose of this parameter is to maintain a consistent time between blocks.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Difficulty is adjusted based on the speed at which blocks are completed. If a lot of space comes onto the network this will increase the rate of new blocks and the difficulty will increase to compensate. Likewise, if a lot of space suddenly leaves the network it will cause the rate of blocks to slow down and the difficulty will be reduced to bring the network back to the expected speed.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'The weight of a block is the sum of the difficulty of all blocks below it, including itself.'
                        )
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'div',
                  {
                    className: 'shadow-container-blocks-5 z-below',
                  },
                  l.a.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 1440 320',
                    },
                    l.a.createElement('path', {
                      fill: 'var(--white)',
                      fillOpacity: '1',
                      d: 'M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z',
                    })
                  )
                )
              )
            )
          ),
          l.a.createElement(ee, null)
        );
      }
      var Ee = t(296),
        ge = t.n(Ee);

      function ve(e) {
        e.locale;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Plotting - Chia blockchain explorer'),
            l.a.createElement('meta', {
              content:
                'Guide to plotting in order to farm the Chia cryptocurrency. Learn about k-size and temporary space requirements.',
              name: 'description',
            })
          ),
          l.a.createElement(
            'div',
            {
              className: 'hero-wrapper bg-composed-wrapper bg-happy-green',
            },
            l.a.createElement(
              'div',
              {
                className: 'header-top-section pb-2',
              },
              l.a.createElement($, null)
            ),
            l.a.createElement(
              'div',
              {
                className: 'hero-wrapper--content',
              },
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--image bg-composed-filter-rm',
                style: {
                  backgroundImage: 'url(' + ne.a + ')',
                },
              }),
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--bg bg-second opacity-5',
              }),
              l.a.createElement(
                'div',
                {
                  className: 'bg-composed-wrapper--content',
                },
                l.a.createElement(
                  ae,
                  {
                    title: 'Plotting',
                    intro:
                      'Plotting is the process of creating plot files that are later harvested as part of the Chia farming process.',
                  },
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 5,
                      className: 'd-none d-xl-flex align-items-center',
                    },
                    l.a.createElement('img', {
                      alt: '...',
                      className: 'w-100',
                      src: ge.a,
                    })
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 7,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Temporary space'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Plotting requires an amount of space that is greater than the final output plot file, known as temporary space. The amount of space required changes depending on the k size that you are plotting.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'For example a k32 plot is around 100 GB in size but requires around 356 GB of temporary space to create.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'The location of temporary space is an important decision when plotting. You ideally want the temporary space to be located on a storage medium that is as fast as possible - NVMe based storage is often recommended. It is possible to plot on slower storage such as spinning disk however it will take longer. The slow speed of spinning disk can be offset by plotting on many drives in parallel. However, if you are plotting to spinning disk it is probably not a good idea to plot to the same disk more than once at the same time, otherwise the read/write head is going to bounce around trying to service each plotting process, which will slow the whole thing down.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Destination'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'At the end of the plotting process the contents of the temporary files are compressed and moved to the destination plot file.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Your requirements for the destination depend on whether this location is where you intend to farm from.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'If you will farm from this location then it can be any form of storage - most likely you will opt for a cheaper form of storage that is slower, which does not matter for farming.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'If you are not going to farm from this location immediately will move the file around, then it could be preferable to opt for a faster form of storage or even a NAS depending on your use-case.'
                        )
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'div',
                  {
                    className: 'shadow-container-blocks-5 z-below',
                  },
                  l.a.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 1440 320',
                    },
                    l.a.createElement('path', {
                      fill: 'var(--white)',
                      fillOpacity: '1',
                      d: 'M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z',
                    })
                  )
                )
              )
            )
          ),
          l.a.createElement(ee, null)
        );
      }
      var xe = t(297),
        we = t.n(xe);

      function Ne(e) {
        e.locale;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia farming pools - Chia blockchain explorer'),
            l.a.createElement('meta', {
              content:
                'Guide to farming Chia in a pool. Earn consistent rewards regardless of the space you have available to plot.',
              name: 'description',
            })
          ),
          l.a.createElement(
            'div',
            {
              className: 'hero-wrapper bg-composed-wrapper bg-happy-green',
            },
            l.a.createElement(
              'div',
              {
                className: 'header-top-section pb-2',
              },
              l.a.createElement($, null)
            ),
            l.a.createElement(
              'div',
              {
                className: 'hero-wrapper--content',
              },
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--image bg-composed-filter-rm',
                style: {
                  backgroundImage: 'url(' + ne.a + ')',
                },
              }),
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--bg bg-second opacity-5',
              }),
              l.a.createElement(
                'div',
                {
                  className: 'bg-composed-wrapper--content',
                },
                l.a.createElement(
                  ae,
                  {
                    title: 'Chia farming pools',
                    intro:
                      'The amount of Chia that a farmer can earn is proportional to the percentage of the network that they own. For example a farmer that owns 0.25% of the total network space can expect to win 0.25% of the blocks.',
                  },
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 5,
                      className: 'd-none d-xl-flex align-items-center',
                    },
                    l.a.createElement('img', {
                      alt: '...',
                      className: 'w-100',
                      src: we.a,
                    })
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 7,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Why join a pool?'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'As the total size of the Chia network\u2122 grows it becomes increasingly difficult to earn Chia as a solo farmer.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'When the network space reaches 1 EB a farmer with 10 TB of space would own 0.00001% of the network and can expect to wait over 20 days to win a single block. If they are unlucky they could easily be waiting several months. Somebody with less than 10 TB of space could be waiting a lot longer.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'By joining a pool a farmer can start earning a small amount of Chia much quicker because the total space of the pool determines the chance of winning a block.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'PoolChia'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Chia Explorer has partnerned with ',
                          l.a.createElement(
                            'b',
                            null,
                            l.a.createElement(
                              'a',
                              {
                                href: 'https://www.poolchia.com/ce',
                                className: 'text-success',
                              },
                              'PoolChia'
                            )
                          ),
                          ' who offer completely optional fees as well as bonus rewards.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'The pool is built by a top team including two Amazon AWS advisors, a crypto pool/De-Fi specialist, a certified OPSEC consultant, and an end-to-end blockchain development group.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg text-center',
                          },
                          l.a.createElement(
                            'b',
                            null,
                            l.a.createElement(
                              'a',
                              {
                                href: 'https://www.poolchia.com/ce',
                                style: {
                                  fontSize: '30px',
                                },
                                className: 'text-success',
                              },
                              'Click here to join PoolChia today!'
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'div',
                  {
                    className: 'shadow-container-blocks-5 z-below',
                  },
                  l.a.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 1440 320',
                    },
                    l.a.createElement('path', {
                      fill: 'var(--white)',
                      fillOpacity: '1',
                      d: 'M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z',
                    })
                  )
                )
              )
            )
          ),
          l.a.createElement(ee, null)
        );
      }
      var ye = t(298),
        ke = t.n(ye);

      function Ce(e) {
        e.locale;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia coins - Chia blockchain explorer'),
            l.a.createElement('meta', {
              content:
                'Coins in the Chia cryptocurrency. Learn about coinbase rewards, transaction fees, and puzzle hashes.',
              name: 'description',
            })
          ),
          l.a.createElement(
            'div',
            {
              className: 'hero-wrapper bg-composed-wrapper bg-happy-green',
            },
            l.a.createElement(
              'div',
              {
                className: 'header-top-section pb-2',
              },
              l.a.createElement($, null)
            ),
            l.a.createElement(
              'div',
              {
                className: 'hero-wrapper--content',
              },
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--image bg-composed-filter-rm',
                style: {
                  backgroundImage: 'url(' + ne.a + ')',
                },
              }),
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--bg bg-second opacity-5',
              }),
              l.a.createElement(
                'div',
                {
                  className: 'bg-composed-wrapper--content',
                },
                l.a.createElement(
                  ae,
                  {
                    title: 'Chia coins',
                    intro:
                      'In Chia coins can be created in two ways; either as a reward to farmers, or as the output of a transaction.',
                  },
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 5,
                      className: 'd-none d-xl-flex align-items-center',
                    },
                    l.a.createElement('img', {
                      alt: '...',
                      className: 'w-100',
                      src: ke.a,
                    })
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 7,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Chia rewards'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'The main reward to farmers is currently a fixed amount of 2 XCH per block, with 16 blocks expected every 5 minutes. The coinbase reward amount is halved every 3 years.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'The fees coin amount fluctuates as it contains a base amount plus the sum of all transaction fees for the block.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Chia transactions'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Coins are locked by a puzzle, which is a program that takes an input solution, and if you provide the right solution to the puzzle you can spend the coin.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          "When a coin is spent it is destroyed and it's value is transferred into new coins."
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'Having ownership of a coin typically means that you control a private key that allows you to solve the puzzle that locks the coin. To transfer the coin to somebody else you solve the puzzle with your private key and create a new coin which has a puzzle that can only be solved by the private key of the receiver. If you are sending and receiving Chia using a wallet this is handled automatically for you by the wallet.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'It is also possible to create smart transactions which are programs that do something more sophisticated before creating a new coin. In Chia smart transactions are created using a programming language called Chialisp\u2122.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'py-0 pb-5 py-xl-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            style: {
                              marginBottom: '15px',
                            },
                          },
                          'Coins in the Chia blockchain\u2122'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          'All coins have an amount, a puzzle hash, and parent coin info. Coinbase coins also have a signature.'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg',
                          },
                          l.a.createElement(
                            'ul',
                            null,
                            l.a.createElement(
                              'li',
                              null,
                              l.a.createElement('strong', null, 'Amount'),
                              ' - Specifies how much Chia the coin is worth.'
                            ),
                            l.a.createElement(
                              'li',
                              null,
                              l.a.createElement('strong', null, 'Puzzle hash'),
                              ' - Hash of the puzzle contained within the coin. In order to spend the coin you need to reveal the puzzle and provide the correct solution.'
                            ),
                            l.a.createElement(
                              'li',
                              null,
                              l.a.createElement('strong', null, 'Parent coin info'),
                              ' - For coinbase coins this is the hex value of the height. For transaction fees coins it is the height of the block hashed twice.'
                            ),
                            l.a.createElement(
                              'li',
                              null,
                              l.a.createElement('strong', null, 'Signature'),
                              ' - Can be used to prove the authenticity of the coin.'
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'div',
                  {
                    className: 'shadow-container-blocks-5 z-below',
                  },
                  l.a.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 1440 320',
                    },
                    l.a.createElement('path', {
                      fill: 'var(--white)',
                      fillOpacity: '1',
                      d: 'M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z',
                    })
                  )
                )
              )
            )
          ),
          l.a.createElement(ee, null)
        );
      }
      var Ae = t(187);

      function Se() {
        var e = Object(n.useState)({
            query: null,
            field: null,
          }),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(!1),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1],
          m = Object(n.useState)(!1),
          u = Object(v.a)(m, 2),
          p = u[0],
          h = u[1],
          b = Object(n.useState)(!1),
          f = Object(v.a)(b, 2),
          E = f[0],
          g = f[1],
          w = Object(n.useState)(!1),
          N = Object(v.a)(w, 2),
          y = N[0],
          k = N[1];
        return l.a.createElement(
          l.a.Fragment,
          null,
          s &&
            l.a.createElement(x.a, {
              to: '/blockchain/address/'.concat(s),
            }),
          p &&
            l.a.createElement(x.a, {
              to: '/blockchain/pool/'.concat(p),
            }),
          E &&
            l.a.createElement(x.a, {
              to: '/blockchain/block/'.concat(E),
            }),
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Search the Chia blockchain'),
            l.a.createElement('meta', {
              content: 'Search the Chia blockchain with the Chia explorer search engine.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Search',
            titleDescription:
              'Search the Chia blockchain\u2122 by height, puzzle hash, plot ID, or public key.',
          }),
          l.a.createElement(
            P.a,
            {
              className: 'p-4 shadow-xxl mb-spacing-6-x2',
            },
            l.a.createElement(
              'div',
              {
                className: 'p-3 d-flex justify-content-center',
              },
              l.a.createElement(
                'div',
                {
                  className: 'mb-4',
                },
                l.a.createElement(
                  'label',
                  {
                    className: 'font-weight-bold mb-2',
                  },
                  'You can search for; address, public key, puzzle hash, header hash, height'
                ),
                l.a.createElement(Ae.a, {
                  variant: 'outlined',
                  fullWidth: !0,
                  placeholder: 'Search term...',
                  onChange: function (e) {
                    var a,
                      t = e.target.value;
                    if (0 !== t.length)
                      return 62 === (a = t).length && 'xch' === a.slice(0, 3)
                        ? (k(!1), void o(t))
                        : (function (e) {
                            return 98 === e.length && '0x' === e.slice(0, 2);
                          })(t)
                        ? (k(!1), void h(t))
                        : (function (e) {
                            return 66 === e.length && '0x' === e.slice(0, 2);
                          })(t)
                        ? (k(!1), void g(t))
                        : void (
                            (function (e) {
                              return !isNaN(e);
                            })(t) && k(t)
                          );
                    r({
                      query: null,
                      field: null,
                    });
                  },
                  value: t.query,
                })
              )
            )
          ),
          y &&
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                P.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    style: {
                      padding: '1rem',
                    },
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-center',
                    },
                    l.a.createElement(
                      'b',
                      null,
                      l.a.createElement(
                        d.b,
                        {
                          to: '/blockchain/block/height/'.concat(y),
                          style: {
                            fontSize: '30px',
                          },
                          className: 'text-success',
                        },
                        'Click here to go to block of height ',
                        y
                      )
                    )
                  )
                )
              )
            )
        );
      }
      var Oe = t(6),
        je = t.n(Oe),
        Te = t(14),
        ze = t(16),
        De = t.n(ze),
        Me = t(694),
        Fe = t(712),
        Ie = t(706),
        Be = t(699),
        He = t(18),
        Pe = t(125),
        Ue = t.n(Pe),
        Re = t(37),
        Le = t(114),
        Xe = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/blockchainSummary'));
                    case 2:
                      return (a = e.sent), e.abrupt('return', a.data);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        We = function () {
          var e = Object(n.useState)({
              netspace: 0,
              difficulty: 0,
              uniqueCoins: 0,
              supply: 0,
              addressCount: 0,
              averageFees: 0,
              price: 0,
              power: 0,
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          Object(n.useEffect)(function () {
            Xe()
              .then(function (e) {
                return r(e);
              })
              .catch(function (e) {
                return console.log(e);
              });
          }, []);
          var c,
            i = t.netspace / Math.pow(1024, 6),
            s = t.supply / 1e12;
          return l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 6,
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 3,
                  xl: 3,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-black-50 pb-2',
                    },
                    l.a.createElement(J.a, {
                      id: 'netspace',
                      description: 'Netspace',
                      defaultMessage: 'Netspace',
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex justify-content-between align-items-end',
                    },
                    l.a.createElement(
                      'h3',
                      {
                        className: 'display-4 mb-0 text-success',
                      },
                      Number(i.toFixed(2)).toLocaleString(),
                      ' EiB'
                    )
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 3,
                  xl: 3,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-black-50 pb-2',
                    },
                    l.a.createElement(J.a, {
                      id: 'difficulty',
                      description: 'Difficulty',
                      defaultMessage: 'Difficulty',
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex justify-content-between align-items-end',
                    },
                    l.a.createElement(
                      'h3',
                      {
                        className: 'display-4 mb-0 text-success',
                      },
                      t.difficulty.toLocaleString()
                    )
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 3,
                  xl: 3,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-black-50 pb-2',
                    },
                    l.a.createElement(J.a, {
                      id: 'uniqueAddressCount',
                      description: 'Unique address count',
                      defaultMessage: 'Unique address count',
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex justify-content-between align-items-end',
                    },
                    l.a.createElement(
                      'h3',
                      {
                        className: 'display-4 mb-0 text-success',
                      },
                      t.addressCount.toLocaleString()
                    )
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 3,
                  xl: 3,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-black-50 pb-2',
                    },
                    l.a.createElement(J.a, {
                      id: 'powerUsage',
                      description: 'Power usage',
                      defaultMessage: 'Power usage',
                    }),
                    ' (',
                    l.a.createElement(
                      'a',
                      {
                        className: 'text-success',
                        href: 'https://chiapower.org/',
                      },
                      'Chia Power formula'
                    ),
                    ')'
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex justify-content-between align-items-end',
                    },
                    l.a.createElement(
                      'h3',
                      {
                        className: 'display-4 mb-0 text-success',
                      },
                      t.power.toLocaleString(),
                      ' kW'
                    )
                  )
                )
              )
            ),
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 6,
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 3,
                  xl: 3,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-black-50 pb-2',
                    },
                    l.a.createElement(J.a, {
                      id: 'feesDividedCoinsXch',
                      description: 'Fees / Coins (XCH)',
                      defaultMessage: 'Fees / Coins (XCH)',
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex justify-content-between align-items-end',
                    },
                    l.a.createElement(
                      'h3',
                      {
                        className: 'display-4 mb-0 text-success',
                      },
                      t.averageFees,
                      ' XCH'
                    )
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 3,
                  xl: 3,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-black-50 pb-2',
                    },
                    l.a.createElement(J.a, {
                      id: 'feesDividedCoinsUsd',
                      description: 'Fees / Coins (USD)',
                      defaultMessage: 'Fees / Coins (USD)',
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex justify-content-between align-items-end',
                    },
                    l.a.createElement(
                      'h3',
                      {
                        className: 'display-4 mb-0 text-success',
                      },
                      '$',
                      ((c = t.averageFees), Number(Number(c * t.price).toFixed(2)).toLocaleString())
                    )
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 3,
                  xl: 3,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-black-50 pb-2',
                    },
                    l.a.createElement(J.a, {
                      id: 'totalXch',
                      description: 'Total XCH',
                      defaultMessage: 'Total XCH',
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex justify-content-between align-items-end',
                    },
                    l.a.createElement(
                      'h3',
                      {
                        className: 'display-4 mb-0 text-success',
                      },
                      Object(Re.a)(t.supply, 'mojo').to('chia').toCeilString(),
                      ' ($',
                      Ue()(s * t.price, {
                        lowercase: !0,
                      }),
                      ')'
                    )
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 3,
                  xl: 3,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-black-50 pb-2',
                    },
                    l.a.createElement(J.a, {
                      id: 'farmedXch',
                      description: 'Farmed XCH',
                      defaultMessage: 'Farmed XCH',
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex justify-content-between align-items-end',
                    },
                    l.a.createElement(
                      'h3',
                      {
                        className: 'display-4 mb-0 text-success',
                      },
                      t.uniqueCoins.toLocaleString(),
                      ' ($',
                      Ue()(t.uniqueCoins * t.price, {
                        lowercase: !0,
                      }),
                      ')'
                    )
                  )
                )
              )
            ),
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 6,
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 12,
                  xl: 12,
                },
                l.a.createElement(Le.a, null)
              )
            )
          );
        },
        Je = t(60),
        Qe = function (e) {
          var a = e.address,
            t = Je.a[a] ? Je.a[a] : a;
          return l.a.createElement(
            d.b,
            {
              to: '/blockchain/address/'.concat(a),
            },
            t
          );
        },
        Ge = t(104),
        Ve = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n, l;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = ''.concat(
                          He.a.apiPath2,
                          0 === a ? '/topFarmers?filter=10k' : '/topFarmers'
                        )),
                        (e.next = 3),
                        De.a.get(t)
                      );
                    case 3:
                      return (n = e.sent), (l = n.data), e.abrupt('return', l.topFarmers);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })();

      function Ke() {
        var e = Object(n.useState)([]),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(0),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1],
          m = Object(n.useState)(!1),
          u = Object(v.a)(m, 2),
          p = u[0],
          h = u[1];
        Object(n.useEffect)(function () {
          h(!0),
            Ve(s).then(function (e) {
              r(e), h(!1), window.scrollTo(0, 0);
            });
        }, []),
          Object(n.useEffect)(
            function () {
              h(!0),
                Ve(s).then(function (e) {
                  r(e), h(!1), window.scrollTo(0, 0);
                });
            },
            [s]
          );
        var b = 0 === s ? 'Within Last 10k' : 'Since genesis',
          f = function (e, a) {
            if (0 === s) {
              var t = ''.concat(Number(((e / 1e4) * 100).toFixed(2)).toLocaleString(), '%');
              return ''
                .concat(e.toLocaleString(), ' (')
                .concat(t, ')')
                .concat(
                  null !== a
                    ? ' ('.concat(
                        Number(((n = a), n / Math.pow(1024, 5)).toFixed(2)).toLocaleString(),
                        ' PiB)'
                      )
                    : ''
                );
            }
            var n;
            return e.toLocaleString();
          };
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Top Chia farmers'),
            l.a.createElement('meta', {
              content: 'List of top 50 Chia farmers with the number of blocks won by each address.',
              name: 'description',
            })
          ),
          l.a.createElement(We, null),
          l.a.createElement(
            P.a,
            {
              className: 'p-4 shadow-xxl mb-spacing-6-x2',
              style: {
                overflow: 'auto',
              },
            },
            l.a.createElement(
              'div',
              {
                className: 'table-responsive-md',
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 2,
                },
                l.a.createElement(
                  Me.a,
                  {
                    variant: 'outlined',
                    size: 'small',
                    className: 'w-100',
                  },
                  l.a.createElement(
                    Fe.a,
                    {
                      id: 'type-select-label',
                    },
                    'Blocks'
                  ),
                  l.a.createElement(
                    Ie.a,
                    {
                      labelId: 'type-select-label',
                      id: 'type-select-label-id',
                      fullWidth: !0,
                      label: 'Blocks',
                      value: s,
                      onChange: function (e) {
                        h(!0), o(e.target.value);
                      },
                    },
                    l.a.createElement(
                      Be.a,
                      {
                        value: 0,
                      },
                      'Last 10,000'
                    ),
                    l.a.createElement(
                      Be.a,
                      {
                        value: 1,
                      },
                      'Since genesis'
                    )
                  )
                )
              )
            )
          ),
          l.a.createElement(
            P.a,
            {
              className: 'p-4 shadow-xxl mb-spacing-6-x2',
            },
            l.a.createElement(
              'div',
              {
                className: 'table-responsive-md',
              },
              l.a.createElement(
                R.a,
                {
                  className: 'table table-alternate-spaced',
                },
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Rank'
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center d-none d-2nd-tbc',
                      },
                      'Address'
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Blocks won (',
                      b,
                      ')'
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Blocks won (~24h)'
                    )
                  )
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  p &&
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        'tr',
                        {
                          key: 'loading',
                        },
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center text-black-50',
                            colSpan: '4',
                          },
                          l.a.createElement(
                            P.a,
                            null,
                            l.a.createElement(
                              U.a,
                              {
                                style: {
                                  textAlign: 'center',
                                },
                              },
                              l.a.createElement(Ge.a, null),
                              l.a.createElement('br', null),
                              l.a.createElement('br', null),
                              'Loading...'
                            )
                          )
                        )
                      ),
                      l.a.createElement('tr', {
                        className: 'divider',
                      })
                    ),
                  !p &&
                    t.map(function (e) {
                      var a = e.rank,
                        t = e.address,
                        n = e.blocks_won,
                        r = e.blocks_won_24h,
                        c = e.netspace;
                      return l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(
                          'tr',
                          {
                            key: t,
                          },
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-center text-black-50',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(
                                d.b,
                                {
                                  to: '/blockchain/address/'.concat(t),
                                },
                                a
                              )
                            )
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-center  d-none d-2nd-tbc',
                            },
                            l.a.createElement(
                              'span',
                              {
                                className: 'hash',
                              },
                              l.a.createElement(Qe, {
                                address: t,
                              })
                            )
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(
                                d.b,
                                {
                                  to: '/blockchain/address/'.concat(t),
                                },
                                f(n, c)
                              )
                            )
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-center',
                            },
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(
                                d.b,
                                {
                                  to: '/blockchain/address/'.concat(t),
                                },
                                r.toLocaleString()
                              )
                            )
                          )
                        ),
                        l.a.createElement('tr', {
                          className: 'divider',
                        })
                      );
                    })
                )
              )
            )
          )
        );
      }

      function qe() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(O.d, {
            titleHeading: 'Top farmers',
            titleDescription:
              'Top 50 addresses by number of blocks won. Farmers may direct rewards to multiple addresses.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(Ke, null)
            )
          )
        );
      }
      var Ze = function (e) {
          return e / Math.pow(1024, 5);
        },
        Ye = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n, l;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = ''.concat(
                          He.a.apiPath2,
                          0 === a ? '/topPools?filter=10k' : '/topPools'
                        )),
                        (e.next = 3),
                        De.a.get(t)
                      );
                    case 3:
                      return (n = e.sent), (l = n.data), e.abrupt('return', l.topPools);
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })();

      function _e() {
        var e = Object(n.useState)([]),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(0),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1];
        Object(n.useEffect)(function () {
          Ye(s).then(function (e) {
            r(e), window.scrollTo(0, 0);
          });
        }, []),
          Object(n.useEffect)(
            function () {
              Ye(s).then(function (e) {
                r(e), window.scrollTo(0, 0);
              });
            },
            [s]
          );
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Top Chia farm pools'),
            l.a.createElement('meta', {
              content:
                'List of top Chia farm pools with the number of blocks won by each pool public key.',
              name: 'description',
            })
          ),
          l.a.createElement(We, null),
          l.a.createElement(
            P.a,
            {
              className: 'p-4 shadow-xxl mb-spacing-6-x2',
              style: {
                overflow: 'auto',
              },
            },
            l.a.createElement(
              'div',
              {
                className: 'table-responsive-md',
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 2,
                },
                l.a.createElement(
                  Me.a,
                  {
                    variant: 'outlined',
                    size: 'small',
                    className: 'w-100',
                  },
                  l.a.createElement(
                    Fe.a,
                    {
                      id: 'type-select-label',
                    },
                    'Blocks'
                  ),
                  l.a.createElement(
                    Ie.a,
                    {
                      labelId: 'type-select-label',
                      id: 'type-select-label-id',
                      fullWidth: !0,
                      label: 'Blocks',
                      value: s,
                      onChange: function (e) {
                        o(e.target.value);
                      },
                    },
                    l.a.createElement(
                      Be.a,
                      {
                        value: 0,
                      },
                      'Last 10,000'
                    ),
                    l.a.createElement(
                      Be.a,
                      {
                        value: 1,
                      },
                      'Since genesis'
                    )
                  )
                )
              )
            )
          ),
          l.a.createElement(
            P.a,
            {
              className: 'p-4 shadow-xxl mb-spacing-6-x2',
              style: {
                overflow: 'auto',
              },
            },
            l.a.createElement(
              'div',
              {
                className: 'table-responsive-md',
              },
              l.a.createElement(
                R.a,
                {
                  className: 'table table-alternate-spaced',
                },
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Rank'
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center d-none d-2nd-tbc',
                      },
                      'Pool public key'
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Blocks won'
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Estimated space online'
                    )
                  )
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  t.map(function (e) {
                    var a = e.rank,
                      t = e.blocks_won,
                      n = e.pool_public_key,
                      r = e.estimated_space_online;
                    return l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        'tr',
                        {
                          key: a + t + n + r,
                        },
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center text-black-50',
                          },
                          l.a.createElement('span', null, a)
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center d-none d-2nd-tbc',
                          },
                          n &&
                            l.a.createElement(
                              'span',
                              {
                                className: 'hash',
                              },
                              l.a.createElement(
                                d.b,
                                {
                                  to: '/blockchain/pool/'.concat(n),
                                },
                                n
                              )
                            ),
                          !n &&
                            l.a.createElement(
                              'span',
                              {
                                className: 'hash',
                              },
                              'None (includes official pooling protocol)'
                            )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center',
                          },
                          n &&
                            l.a.createElement(
                              'span',
                              null,
                              l.a.createElement(
                                d.b,
                                {
                                  to: '/blockchain/pool/'.concat(n),
                                },
                                t
                              )
                            ),
                          !n && l.a.createElement('span', null, t)
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center',
                          },
                          r > 0 &&
                            l.a.createElement(
                              'span',
                              null,
                              n &&
                                l.a.createElement(
                                  d.b,
                                  {
                                    to: '/blockchain/pool/'.concat(n),
                                  },
                                  Number(Ze(r).toFixed(2)).toLocaleString(),
                                  ' PiB'
                                ),
                              !n &&
                                l.a.createElement(
                                  'span',
                                  null,
                                  Number(Ze(r).toFixed(2)).toLocaleString(),
                                  ' PiB'
                                )
                            ),
                          0 === r && l.a.createElement('span', null, 'Not enough data')
                        )
                      ),
                      l.a.createElement('tr', {
                        className: 'divider',
                      })
                    );
                  })
                )
              )
            )
          )
        );
      }

      function $e() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(O.d, {
            titleHeading: 'Top pool pub keys',
            titleDescription:
              'Number of blocks won by the top 50 pub keys. The official pool protocol does not use pool pub keys.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(_e, null)
            )
          )
        );
      }
      var ea = t(67),
        aa = t(205),
        ta = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/coinByParent/').concat(a))
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        na = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/coinByParent/').concat(a))
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        la = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/currentPrice'));
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t.price);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ra = function (e) {
          return 1 === e.confirmed_block_index
            ? 'prefarm'
            : e.coinbase
            ? 'farmer_reward'
            : 'miscellaneous';
        },
        ca = function (e) {
          var a = e.coin,
            t = Object(aa.a)(),
            r = Object(n.useState)(0),
            c = Object(v.a)(r, 2),
            i = c[0],
            s = c[1];
          Object(n.useEffect)(function () {
            la().then(function (e) {
              return s(e);
            });
          }, []);
          var o,
            m = new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }).format(1e3 * parseInt(a.timestamp, 10)),
            u = t.locale,
            p = ra(a);
          return l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              P.a,
              {
                className: 'card-box',
              },
              l.a.createElement(
                'div',
                {
                  className: 'card-header',
                },
                l.a.createElement(
                  'h4',
                  {
                    className: 'font-size-lg mb-0 py-2 font-weight-bold',
                  },
                  'Coin'
                )
              ),
              l.a.createElement(
                U.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement('div', null, l.a.createElement('b', null, 'Date'))
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    m
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement('div', null, l.a.createElement('b', null, 'Puzzlehash'))
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.puzzle_hash
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement('div', null, l.a.createElement('b', null, 'Address'))
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    l.a.createElement(
                      d.b,
                      {
                        to:
                          'zh' === u
                            ? '/zh-cn/blockchain/address/'.concat(a.address)
                            : '/blockchain/address/'.concat(a.address),
                        className: 'text-success',
                      },
                      a.address
                    )
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement('div', null, l.a.createElement('b', null, 'Amount'))
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    Object(Re.a)(a.amount, 'mojo').to('chia').toString(),
                    ' XCH'
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement('div', null, l.a.createElement('b', null, 'Current value'))
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    '$',
                    ((o = a.amount), Number(Number((o / 1e12) * i).toFixed(2)).toLocaleString())
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement('div', null, l.a.createElement('b', null, 'Status'))
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.spent ? 'Spent' : 'Unspent'
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement('div', null, l.a.createElement('b', null, 'Type'))
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    'farmer_reward' === p &&
                      l.a.createElement('span', null, '\ud83c\udf31 Farmer reward'),
                    'miscellaneous' === p &&
                      l.a.createElement('span', null, '\ud83c\udf43 Miscellaneous'),
                    'prefarm' === p && l.a.createElement('span', null, '\ud83d\udcb0 Prefarm')
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'Confirmed block index')
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    l.a.createElement(ea.a, {
                      height: a.confirmed_block_index,
                    })
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'Spent block index')
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    l.a.createElement(ea.a, {
                      height: a.spent_block_index,
                    })
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement('div', null, l.a.createElement('b', null, 'Parent coin info'))
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    'miscellaneous' === p &&
                      l.a.createElement(
                        'span',
                        null,
                        l.a.createElement(
                          d.b,
                          {
                            className: 'text-success',
                            to: '/blockchain/coin/'.concat(a.parent_coin_info),
                          },
                          a.parent_coin_info
                        )
                      ),
                    'miscellaneous' !== p && l.a.createElement('span', null, a.parent_coin_info)
                  )
                )
              )
            )
          );
        },
        ia = function (e) {
          var a = e.coin,
            t = Object(n.useState)([]),
            r = Object(v.a)(t, 2),
            c = r[0],
            i = r[1];
          Object(n.useEffect)(function () {
            ta(a.parent_coin_info)
              .then(function (e) {
                var a = e.coins;
                return i(a);
              })
              .catch(console.error);
          }, []);
          var s = c.filter(function (e) {
            return e.coin_id !== a.coin_id;
          });
          return l.a.createElement(
            l.a.Fragment,
            null,
            s.length > 0 &&
              l.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'card-header',
                    },
                    l.a.createElement(
                      'h4',
                      {
                        className: 'font-size-lg mb-0 py-2 font-weight-bold',
                      },
                      'Coins with same parent coin info'
                    )
                  ),
                  l.a.createElement(
                    U.a,
                    null,
                    s.map(function (e) {
                      var a = ra(e);
                      return l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(
                          'div',
                          {
                            className: 'd-flex flex-xl-row justify-content-between flex-column',
                          },
                          l.a.createElement(
                            'div',
                            {
                              className:
                                'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                            },
                            'farmer_reward' === a &&
                              l.a.createElement(
                                'span',
                                null,
                                '\ud83c\udf31 Farmer reward (',
                                Object(Re.a)(e.amount, 'mojo').to('chia').toString(),
                                ' XCH)'
                              ),
                            'miscellaneous' === a &&
                              l.a.createElement(
                                'span',
                                null,
                                '\ud83c\udf43 Miscellaneous (',
                                Object(Re.a)(e.amount, 'mojo').to('chia').toString(),
                                ' XCH)'
                              ),
                            'prefarm' === a &&
                              l.a.createElement(
                                'span',
                                null,
                                '\ud83d\udcb0 Prefarm (',
                                Object(Re.a)(e.amount, 'mojo').to('chia').toString(),
                                ' XCH)'
                              )
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className:
                                'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                            },
                            l.a.createElement(
                              d.b,
                              {
                                className: 'text-success',
                                to: '/blockchain/coin/'.concat(e.coin_id),
                              },
                              e.coin_id
                            )
                          )
                        ),
                        l.a.createElement('div', {
                          className: 'divider my-3',
                        })
                      );
                    })
                  )
                )
              )
          );
        },
        sa = function (e) {
          var a = e.coin_id,
            t = Object(n.useState)([]),
            r = Object(v.a)(t, 2),
            c = r[0],
            i = r[1];
          return (
            Object(n.useEffect)(function () {
              na(a)
                .then(function (e) {
                  var a = e.coins;
                  return i(a);
                })
                .catch(console.error);
            }, []),
            l.a.createElement(
              l.a.Fragment,
              null,
              c.length > 0 &&
                l.a.createElement(
                  'div',
                  {
                    className: 'mb-spacing-6',
                  },
                  l.a.createElement(
                    P.a,
                    {
                      className: 'card-box',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'card-header',
                      },
                      l.a.createElement(
                        'h4',
                        {
                          className: 'font-size-lg mb-0 py-2 font-weight-bold',
                        },
                        'Children of this coin'
                      )
                    ),
                    l.a.createElement(
                      U.a,
                      null,
                      c.map(function (e) {
                        var a = ra(e);
                        return l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'd-flex flex-xl-row justify-content-between flex-column',
                            },
                            l.a.createElement(
                              'div',
                              {
                                className:
                                  'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                              },
                              'farmer_reward' === a &&
                                l.a.createElement(
                                  'span',
                                  null,
                                  '\ud83c\udf31 Farmer reward (',
                                  Object(Re.a)(e.amount, 'mojo').to('chia').toString(),
                                  ' XCH)'
                                ),
                              'miscellaneous' === a &&
                                l.a.createElement(
                                  'span',
                                  null,
                                  '\ud83c\udf43 Miscellaneous (',
                                  Object(Re.a)(e.amount, 'mojo').to('chia').toString(),
                                  ' XCH)'
                                ),
                              'prefarm' === a &&
                                l.a.createElement(
                                  'span',
                                  null,
                                  '\ud83d\udcb0 Prefarm (',
                                  Object(Re.a)(e.amount, 'mojo').to('chia').toString(),
                                  ' XCH)'
                                )
                            ),
                            l.a.createElement(
                              'div',
                              {
                                className:
                                  'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                              },
                              l.a.createElement(
                                d.b,
                                {
                                  className: 'text-success',
                                  to: '/blockchain/coin/'.concat(e.coin_id),
                                },
                                e.coin_id
                              )
                            )
                          ),
                          l.a.createElement('div', {
                            className: 'divider my-3',
                          })
                        );
                      })
                    )
                  )
                )
            )
          );
        };

      function oa(e) {
        var a = e.coin;
        return (
          console.log('?', a),
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(ca, {
                coin: a,
              }),
              a.parent_coin_info &&
                l.a.createElement(ia, {
                  coin: a,
                }),
              a.coin_id &&
                l.a.createElement(sa, {
                  coin_id: a.coin_id,
                })
            )
          )
        );
      }
      var ma = (function () {
        var e = Object(Te.a)(
          je.a.mark(function e(a) {
            var t, n;
            return je.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/coin/').concat(a));
                  case 2:
                    return (t = e.sent), (n = t.data), e.abrupt('return', n);
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function (a) {
          return e.apply(this, arguments);
        };
      })();

      function da(e) {
        var a = e.match.params.coin_id,
          t = Object(n.useState)(!1),
          r = Object(v.a)(t, 2),
          c = r[0],
          i = r[1],
          s = Object(n.useState)({
            block_header_hash: '',
            block_height: 0,
            type: 'addition',
            coin_id: '',
            puzzle_hash: '',
            parent_coin_info: '',
            amount: 0,
            coinbase: !0,
            confirmed_block_index: 0,
            spent: !1,
            spent_block_index: 0,
            timestamp: '0',
          }),
          o = Object(v.a)(s, 2),
          m = o[0],
          d = o[1];
        return (
          Object(n.useEffect)(
            function () {
              ma(a)
                .then(function (e) {
                  d(e);
                })
                .catch(function (e) {
                  var a;
                  (null === e || void 0 === e || null === (a = e.response) || void 0 === a
                    ? void 0
                    : a.status) && i(!0);
                });
            },
            [a]
          ),
          c
            ? l.a.createElement(O.d, {
                titleHeading: 'Page not found',
                titleDescription: "We can't find coin ".concat(a),
              })
            : l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(
                  B.a,
                  null,
                  l.a.createElement('title', null, 'Chia coin ', a),
                  l.a.createElement('meta', {
                    content: 'Details of Chia coin '.concat(a, '.'),
                    name: 'description',
                  })
                ),
                l.a.createElement(O.d, {
                  titleHeading: a,
                  titleDescription: 'Coins details',
                }),
                l.a.createElement(
                  H.a,
                  {
                    container: !0,
                    spacing: 6,
                  },
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(oa, {
                      coin: m,
                    })
                  )
                )
              )
        );
      }
      var ua = t(178);

      function pa(e) {
        var a = e.match.params.address,
          t = Je.a[a] ? Je.a[a] : 'address';
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia address ', a),
            l.a.createElement('meta', {
              content: 'Details of Chia address '.concat(a, '.'),
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: a,
            titleDescription: 'Details for '.concat(t),
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(ua.a, {
                address: a,
              })
            )
          )
        );
      }
      var ha = t(299),
        ba = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/poolRank/').concat(a))
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        fa = function (e) {
          var a = e.blocks;
          return l.a.createElement(
            P.a,
            {
              className: 'p-4 shadow-xxl mb-spacing-6-x2',
            },
            l.a.createElement(
              'div',
              {
                className: 'table-responsive-md',
              },
              l.a.createElement(
                R.a,
                {
                  className: 'table table-alternate-spaced',
                },
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Block header hash'
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Height'
                    )
                  )
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  a.map(function (e) {
                    var a = e.block_header_hash,
                      t = e.height;
                    return l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        'tr',
                        {
                          key: a,
                        },
                        l.a.createElement(
                          'td',
                          null,
                          l.a.createElement(
                            'span',
                            null,
                            l.a.createElement(
                              d.b,
                              {
                                to: '/blockchain/block/'.concat(a),
                              },
                              a
                            )
                          )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center',
                          },
                          l.a.createElement(
                            'span',
                            null,
                            l.a.createElement(
                              d.b,
                              {
                                to: '/blockchain/block/'.concat(a),
                              },
                              t
                            )
                          )
                        )
                      ),
                      l.a.createElement('tr', {
                        className: 'divider',
                      })
                    );
                  })
                )
              )
            )
          );
        },
        Ea = function (e) {
          var a = e.public_key,
            t = Object(n.useState)({
              rank: 0,
              status: '',
            }),
            r = Object(v.a)(t, 2),
            c = r[0],
            i = r[1];
          return (
            Object(n.useEffect)(function () {
              ba(a)
                .then(function (e) {
                  return i(e);
                })
                .catch(console.error);
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'mb-spacing-6',
              },
              l.a.createElement(
                P.a,
                {
                  className: 'card-box',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'card-header',
                  },
                  l.a.createElement(
                    'h4',
                    {
                      className: 'font-size-lg mb-0 py-2 font-weight-bold',
                    },
                    'Pool status'
                  )
                ),
                l.a.createElement(
                  U.a,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex align-items-center justify-content-between',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex',
                      },
                      l.a.createElement(
                        'div',
                        null,
                        l.a.createElement('b', null, 'Rank'),
                        l.a.createElement(
                          'div',
                          {
                            className: 'text-black-50',
                          },
                          'Based on pool rewards over the last 10,000 blocks'
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold font-size-lg',
                      },
                      c.rank > 0 ? c.rank : 'None'
                    )
                  ),
                  l.a.createElement('div', {
                    className: 'divider my-3',
                  }),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex align-items-center justify-content-between',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex',
                      },
                      l.a.createElement('div', null, l.a.createElement('b', null, 'Summary'))
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold font-size-lg',
                      },
                      c.status
                    )
                  )
                )
              )
            )
          );
        };

      function ga(e) {
        var a = e.public_key,
          t = e.blocks,
          n = e.loading;
        return l.a.createElement(
          l.a.Fragment,
          null,
          n
            ? l.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    U.a,
                    {
                      style: {
                        textAlign: 'center',
                      },
                    },
                    l.a.createElement(Ge.a, null)
                  )
                )
              )
            : l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(Ea, {
                  public_key: a,
                }),
                l.a.createElement(fa, {
                  blocks: t,
                })
              )
        );
      }
      var va = (function () {
        var e = Object(Te.a)(
          je.a.mark(function e(a) {
            var t, n;
            return je.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/pool/').concat(a));
                  case 2:
                    return (t = e.sent), (n = t.data), e.abrupt('return', n);
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function (a) {
          return e.apply(this, arguments);
        };
      })();

      function xa(e) {
        var a = e.match.params.publicKey,
          t = Object(n.useState)(!1),
          r = Object(v.a)(t, 2),
          c = r[0],
          i = r[1],
          s = Object(n.useState)({
            blocks: [],
          }),
          o = Object(v.a)(s, 2),
          m = o[0],
          d = o[1],
          u = Object(n.useState)(!0),
          p = Object(v.a)(u, 2),
          h = p[0],
          b = p[1];
        if (
          (Object(n.useEffect)(
            function () {
              va(a)
                .then(function (e) {
                  d(e), b(!1);
                })
                .catch(function (e) {
                  var a;
                  (null === e || void 0 === e || null === (a = e.response) || void 0 === a
                    ? void 0
                    : a.status) && i(!0);
                });
            },
            [a]
          ),
          c)
        )
          return l.a.createElement(O.d, {
            titleHeading: 'Page not found',
            titleDescription: "We can't find pool with public key ".concat(a),
          });
        var f = m.blocks;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia pool ', a),
            l.a.createElement('meta', {
              content: 'Details of Chia pool '.concat(a, '.'),
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: a,
            titleDescription: 'Blocks won by pool public key',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(ga, {
                public_key: a,
                blocks: f,
                loading: h,
              })
            )
          )
        );
      }
      var wa = t(134),
        Na = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/blocks'));
                    case 2:
                      return (
                        (a = e.sent),
                        (t = a.data.reduce(
                          function (e, a) {
                            var t = a.header_hash,
                              n = a.height,
                              l = a.deficit,
                              r = a.signage_point_index,
                              c = a.timestamp;
                            return (
                              e.heights.push(n),
                              e.deficits.push(l),
                              e.signage_point_indexes.push(r),
                              e.hashes.push(t),
                              e.times.push(c),
                              e
                            );
                          },
                          {
                            heights: [],
                            deficits: [],
                            signage_point_indexes: [],
                            hashes: [],
                            times: [],
                          }
                        )),
                        e.abrupt('return', t)
                      );
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();

      function ya() {
        var e = Object(aa.a)(),
          a = Object(n.useState)({
            heights: [],
            deficits: [],
            signage_point_indexes: [],
            hashes: [],
            times: [],
          }),
          t = Object(v.a)(a, 2),
          r = t[0],
          c = t[1];
        Object(n.useEffect)(function () {
          Na().then(function (e) {
            return c(e);
          });
        }, []);
        var i = e.locale;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(We, null),
          l.a.createElement(
            P.a,
            {
              className: 'p-4 shadow-xxl mb-spacing-6-x2',
            },
            l.a.createElement(
              'div',
              {
                className: 'table-responsive-md',
              },
              l.a.createElement(
                R.a,
                {
                  className: 'table table-alternate-spaced',
                },
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      l.a.createElement(J.a, {
                        id: 'time',
                        description: 'Time',
                        defaultMessage: 'Time',
                      })
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      l.a.createElement(J.a, {
                        id: 'type',
                        description: 'Type',
                        defaultMessage: 'Type',
                      })
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      l.a.createElement(J.a, {
                        id: 'height',
                        description: 'Height',
                        defaultMessage: 'Height',
                      })
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center d-none d-2nd-tbc',
                      },
                      l.a.createElement(J.a, {
                        id: 'headerHash',
                        description: 'Header hash',
                        defaultMessage: 'Header hash',
                      })
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'd-none d-3rd-tbc',
                      },
                      l.a.createElement(J.a, {
                        id: 'deficit',
                        description: 'Deficit',
                        defaultMessage: 'Deficit',
                      })
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'd-none d-3rd-tbc',
                      },
                      l.a.createElement(J.a, {
                        id: 'signagePointIndex',
                        description: 'Signage Point Index',
                        defaultMessage: 'Signage Point Index',
                      })
                    )
                  )
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  r.heights.map(function (e, a) {
                    return l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        'tr',
                        {
                          key: String(e + a + r.hashes[a]),
                        },
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center text-black-50',
                          },
                          l.a.createElement(
                            'span',
                            null,
                            l.a.createElement(
                              d.b,
                              {
                                to: '/blockchain/block/'.concat(r.times[a]),
                              },
                              r.times[a]
                                ? l.a.createElement(wa.a, {
                                    datetime: 1e3 * parseInt(r.times[a], 10),
                                  })
                                : 'N/A'
                            )
                          )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center text-black-50',
                          },
                          l.a.createElement(
                            'span',
                            null,
                            l.a.createElement(
                              d.b,
                              {
                                to: '/blockchain/block/'.concat(r.times[a]),
                              },
                              r.times[a] ? 'TX Block' : 'Block'
                            )
                          )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center text-black-50',
                          },
                          l.a.createElement(
                            'span',
                            null,
                            l.a.createElement(
                              d.b,
                              {
                                to:
                                  'zh' === i
                                    ? '/zh-cn/blockchain/block/'.concat(r.hashes[a])
                                    : '/blockchain/block/'.concat(r.hashes[a]),
                              },
                              Number(e).toLocaleString()
                            )
                          )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center d-none d-2nd-tbc',
                          },
                          l.a.createElement(
                            'span',
                            {
                              className: 'hash',
                            },
                            l.a.createElement(
                              d.b,
                              {
                                to:
                                  'zh' === i
                                    ? '/zh-cn/blockchain/block/'.concat(r.hashes[a])
                                    : '/blockchain/block/'.concat(r.hashes[a]),
                              },
                              r.hashes[a]
                            )
                          )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'd-none d-3rd-tbc',
                          },
                          l.a.createElement(
                            'span',
                            null,
                            l.a.createElement(
                              d.b,
                              {
                                to:
                                  'zh' === i
                                    ? '/zh-cn/blockchain/block/'.concat(r.hashes[a])
                                    : '/blockchain/block/'.concat(r.hashes[a]),
                              },
                              Number(r.deficits[a]).toLocaleString()
                            )
                          )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'd-none d-3rd-tbc',
                          },
                          l.a.createElement(
                            'span',
                            null,
                            l.a.createElement(
                              d.b,
                              {
                                to:
                                  'zh' === i
                                    ? '/zh-cn/blockchain/block/'.concat(r.hashes[a])
                                    : '/blockchain/block/'.concat(r.hashes[a]),
                              },
                              Number(r.signage_point_indexes[a]).toLocaleString()
                            )
                          )
                        )
                      ),
                      l.a.createElement('tr', {
                        className: 'divider',
                      })
                    );
                  })
                )
              )
            )
          )
        );
      }

      function ka(e) {
        e.locale;
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Latest Chia blocks'),
            l.a.createElement('meta', {
              content: 'The latest blocks farmed on the Chia Blockchain.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Blocks',
            titleDescription: 'The last 100 blocks.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(ya, null)
            )
          )
        );
      }
      var Ca = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/coins'));
                    case 2:
                      return (a = e.sent), e.abrupt('return', a.data);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Aa = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/currentPrice'));
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t.price);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();

      function Sa() {
        var e = Object(n.useState)([]),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(0),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1];
        Object(n.useEffect)(function () {
          Ca().then(function (e) {
            return r(e);
          }),
            Aa().then(function (e) {
              return o(e);
            });
        }, []);
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(We, null),
          l.a.createElement(
            P.a,
            {
              className: 'p-4 shadow-xxl mb-spacing-6-x2',
            },
            l.a.createElement(
              'div',
              {
                className: 'table-responsive-md',
              },
              l.a.createElement(
                R.a,
                {
                  className: 'table table-alternate-spaced',
                },
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                      },
                      l.a.createElement(J.a, {
                        id: 'type',
                        description: 'Type',
                        defaultMessage: 'Type',
                      })
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                      },
                      l.a.createElement(J.a, {
                        id: 'time',
                        description: 'Time',
                        defaultMessage: 'Time',
                      })
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center d-none d-2nd-tbc',
                      },
                      l.a.createElement(J.a, {
                        id: 'coins',
                        description: 'Coins',
                        defaultMessage: 'Coins',
                      })
                    ),
                    l.a.createElement(
                      'th',
                      {
                        scope: 'col',
                        className: 'text-center',
                      },
                      'Amount'
                    )
                  )
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  t.map(function (e) {
                    return l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        'tr',
                        {
                          key: String(e.coin_id),
                        },
                        l.a.createElement(
                          'td',
                          null,
                          e.coinbase &&
                            e.parent_coin_info.startsWith('0x0000000000000000') &&
                            l.a.createElement(
                              'span',
                              null,
                              '\ud83d\udcb8 Pool reward for block ',
                              l.a.createElement(ea.a, {
                                height: parseInt(e.parent_coin_info, 16),
                              })
                            ),
                          e.coinbase &&
                            !e.parent_coin_info.startsWith('0x0000000000000000') &&
                            l.a.createElement('span', null, '\ud83c\udf31 Farmer reward'),
                          !e.coinbase &&
                            l.a.createElement('span', null, '\ud83c\udf43 Miscellaneous')
                        ),
                        l.a.createElement(
                          'td',
                          null,
                          l.a.createElement(
                            'span',
                            null,
                            l.a.createElement(
                              d.b,
                              {
                                to: '/blockchain/coin/'.concat(e.coin_id),
                              },
                              l.a.createElement(wa.a, {
                                datetime: 1e3 * parseInt(e.timestamp, 10),
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center text-black-50 d-none d-2nd-tbc',
                          },
                          l.a.createElement(
                            'span',
                            {
                              className: 'hash',
                            },
                            l.a.createElement(
                              d.b,
                              {
                                to: '/blockchain/coin/'.concat(e.coin_id),
                              },
                              e.coin_id
                            )
                          )
                        ),
                        l.a.createElement(
                          'td',
                          {
                            className: 'text-center text-black-40',
                          },
                          l.a.createElement(
                            'span',
                            null,
                            Object(Re.a)(e.amount, 'mojo').to('chia').toString(),
                            ' XCH ($',
                            ((a = e.amount),
                            Number(Number((a / 1e12) * s).toFixed(2)).toLocaleString()),
                            ')'
                          )
                        )
                      ),
                      l.a.createElement('tr', {
                        className: 'divider',
                      })
                    );
                    var a;
                  })
                )
              )
            )
          )
        );
      }

      function Oa() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia coins (XCH)'),
            l.a.createElement('meta', {
              content: 'The most recent coins (XCH) on Chia Network',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Coins',
            titleDescription: 'The last 100 coins.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(Sa, null)
            )
          )
        );
      }
      var ja = t(76),
        Ta = t.n(ja),
        za = t(103),
        Da = function (e) {
          var a = e.netspace,
            t = e.fees,
            n = e.transactionCount,
            r = e.height;
          return l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 6,
              },
              a
                ? l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      md: 4,
                      xl: 3,
                      sm: 6,
                    },
                    l.a.createElement(
                      P.a,
                      {
                        className: 'p-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'text-black-50 pb-2',
                        },
                        'Netspace (at time of block)'
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex justify-content-between align-items-end',
                        },
                        l.a.createElement(
                          'h3',
                          {
                            className: 'display-4 mb-0 text-success',
                          },
                          l.a.createElement(Ta.a, {
                            start: 0,
                            end: a,
                            duration: 2,
                            delay: 0,
                            separator: ',',
                            decimals: 2,
                            decimal: '.',
                          }),
                          ' EiB'
                        )
                      )
                    )
                  )
                : null,
              t &&
                l.a.createElement(
                  H.a,
                  {
                    item: !0,
                    md: 4,
                    xl: 3,
                    sm: 6,
                  },
                  l.a.createElement(
                    P.a,
                    {
                      className: 'p-3',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'text-black-50 pb-2',
                      },
                      'Fees (XCH)'
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex justify-content-between align-items-end',
                      },
                      l.a.createElement(
                        'h3',
                        {
                          className: 'display-4 mb-0 text-success',
                        },
                        l.a.createElement(Ta.a, {
                          start: 0,
                          end: t,
                          duration: 2,
                          delay: 0,
                          separator: ',',
                          decimals: 12,
                          decimal: '.',
                        })
                      )
                    )
                  )
                ),
              n
                ? l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      md: 4,
                      xl: 3,
                      sm: 6,
                    },
                    l.a.createElement(
                      P.a,
                      {
                        className: 'p-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'text-black-50 pb-2',
                        },
                        'Reward count'
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex justify-content-between align-items-end',
                        },
                        l.a.createElement(
                          'h3',
                          {
                            className: 'display-4 mb-0 text-success',
                          },
                          l.a.createElement(Ta.a, {
                            start: 0,
                            end: n,
                            duration: 2,
                            delay: 0,
                            separator: ',',
                            decimals: 0,
                          })
                        )
                      )
                    )
                  )
                : null,
              r
                ? l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      md: 4,
                      xl: 3,
                      sm: 6,
                    },
                    l.a.createElement(
                      P.a,
                      {
                        className: 'p-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'text-black-50 pb-2',
                        },
                        'Height'
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex justify-content-between align-items-end',
                        },
                        l.a.createElement(
                          'h3',
                          {
                            className: 'display-4 mb-0 text-success',
                          },
                          l.a.createElement(Ta.a, {
                            start: 0,
                            end: r,
                            duration: 2,
                            delay: 0,
                            separator: ',',
                            decimals: 0,
                          })
                        )
                      )
                    )
                  )
                : null
            )
          );
        },
        Ma = function (e) {
          var a,
            t,
            n = e.blockDetails;
          return l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              P.a,
              {
                className: 'card-box',
              },
              l.a.createElement(
                'div',
                {
                  className: 'card-header',
                },
                l.a.createElement(
                  'h4',
                  {
                    className: 'font-size-lg mb-0 py-2 font-weight-bold',
                  },
                  'Extra'
                )
              ),
              l.a.createElement(
                U.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(Ae.a, {
                    fullWidth: !0,
                    variant: 'outlined',
                    label: 'challenge_chain_ip_proof.witness',
                    value: n.challenge_chain_ip_proof.witness,
                  })
                ),
                n.challenge_chain_ip_proof &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'challenge_chain_ip_proof.witness_type'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        n.challenge_chain_ip_proof.witness_type
                      )
                    )
                  ),
                n.challenge_chain_sp_proof &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'challenge_chain_sp_proof.witness',
                        value: n.challenge_chain_sp_proof.witness,
                      })
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'challenge_chain_sp_proof.witness_type'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        n.challenge_chain_sp_proof.witness_type
                      )
                    )
                  ),
                n.infused_challenge_chain_ip_proof &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'infused_challenge_chain_ip_proof.witness',
                        value:
                          (null === (a = n.infused_challenge_chain_ip_proof) || void 0 === a
                            ? void 0
                            : a.witness) || 'N/A',
                      })
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'b',
                            null,
                            'infused_challenge_chain_ip_proof.witness_type'
                          ),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        (null === (t = n.infused_challenge_chain_ip_proof) || void 0 === t
                          ? void 0
                          : t.witness_type) || 'N/A'
                      )
                    )
                  ),
                n.reward_chain_ip_proof &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'reward_chain_ip_proof.witness',
                        value: n.reward_chain_ip_proof.witness,
                      })
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'reward_chain_ip_proof.witness_type'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        n.reward_chain_ip_proof.witness_type
                      )
                    )
                  ),
                n.reward_chain_sp_proof &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'reward_chain_sp_proof.witness',
                        value: n.reward_chain_sp_proof.witness,
                      })
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'reward_chain_sp_proof.witness_type'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        n.reward_chain_sp_proof.witness_type
                      )
                    )
                  ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(Ae.a, {
                    fullWidth: !0,
                    variant: 'outlined',
                    label: 'transactions_generator',
                    value: n.transactions_generator || 'N/A',
                  })
                )
              )
            )
          );
        },
        Fa = function (e) {
          var a = e.foliage,
            t = e.pool_target_address,
            n = e.farmer_reward_address,
            r = e.locale,
            c = Je.a[t] ? Je.a[t] : t,
            i = Je.a[n] ? Je.a[n] : n;
          return l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              P.a,
              {
                className: 'card-box',
              },
              l.a.createElement(
                'div',
                {
                  className: 'card-header',
                },
                l.a.createElement(
                  'h4',
                  {
                    className: 'font-size-lg mb-0 py-2 font-weight-bold',
                  },
                  'Foliage Sub Block'
                )
              ),
              l.a.createElement(
                U.a,
                null,
                a.foliage_block_hash &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'foliage_block_hash'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.foliage_block_hash
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    })
                  ),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'prev_block_hash'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.prev_block_hash
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'reward_block_hash'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.reward_block_hash
                  )
                ),
                a &&
                  a.foliage_block_data &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'extension_data'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.foliage_block_data.extension_data
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'farmer_reward_puzzle_hash'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.foliage_block_data.farmer_reward_puzzle_hash
                          ? a.foliage_block_data.farmer_reward_puzzle_hash
                          : 'N/A'
                      )
                    ),
                    n &&
                      l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement('div', {
                          className: 'divider my-3',
                        }),
                        l.a.createElement(
                          'div',
                          {
                            className: 'd-flex flex-xl-row justify-content-between flex-column',
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'd-flex',
                            },
                            l.a.createElement(
                              'div',
                              null,
                              l.a.createElement('b', null, 'farmer_reward_address'),
                              l.a.createElement('div', {
                                className: 'text-black-50',
                              })
                            )
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className:
                                'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                            },
                            n
                              ? l.a.createElement(
                                  d.b,
                                  {
                                    to:
                                      'zh' === r
                                        ? '/zh-cn/blockchain/address/'.concat(n)
                                        : '/blockchain/address/'.concat(n),
                                    className: 'text-success',
                                  },
                                  i
                                )
                              : 'N/A'
                          )
                        )
                      ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'unfinished_reward_block_hash'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.foliage_block_data.unfinished_reward_block_hash
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'pool_target.max_height'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.foliage_block_data.pool_target.max_height
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'pool_target.puzzle_hash'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.foliage_block_data.pool_target.puzzle_hash
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'pool_target_address'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        t
                          ? l.a.createElement(
                              d.b,
                              {
                                to:
                                  'zh' === r
                                    ? '/zh-cn/blockchain/address/'.concat(t)
                                    : '/blockchain/address/'.concat(t),
                                className: 'text-success',
                              },
                              c
                            )
                          : 'N/A'
                      )
                    )
                  ),
                a.foliage_block_signature &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'foliage_block_signature',
                        value: a.foliage_block_signature,
                      })
                    )
                  ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(Ae.a, {
                    fullWidth: !0,
                    variant: 'outlined',
                    label: 'foliage_block_data_signature',
                    value: a.foliage_block_data_signature,
                  })
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(Ae.a, {
                    fullWidth: !0,
                    variant: 'outlined',
                    label: 'foliage_block_data.pool_signature',
                    value: a.foliage_block_data.pool_signature,
                  })
                )
              )
            )
          );
        },
        Ia = function (e) {
          var a = e.transactions_info;
          return l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              P.a,
              {
                className: 'card-box',
              },
              l.a.createElement(
                'div',
                {
                  className: 'card-header',
                },
                l.a.createElement(
                  'h4',
                  {
                    className: 'font-size-lg mb-0 py-2 font-weight-bold',
                  },
                  'Transactions'
                )
              ),
              l.a.createElement(
                U.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'cost'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.cost
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'fees'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    Object(Re.a)(parseFloat(a.fees), 'mojo').to('chia').toString()
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'generator_root'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.generator_root
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'previous_generators_root'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.previous_generators_root
                  )
                )
              )
            )
          );
        },
        Ba = function (e) {
          var a = e.reward_claims_incorporated,
            t = e.height,
            n = e.locale;
          return l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              P.a,
              {
                className: 'card-box',
              },
              l.a.createElement(
                'div',
                {
                  className: 'card-header',
                },
                l.a.createElement(
                  'h4',
                  {
                    className: 'font-size-lg mb-0 py-2 font-weight-bold',
                  },
                  'Reward claims incorporated'
                )
              ),
              l.a.createElement(
                U.a,
                null,
                l.a.createElement(
                  H.a,
                  {
                    container: !0,
                    spacing: 12,
                  },
                  l.a.createElement(
                    H.a,
                    {
                      item: !0,
                      xl: 12,
                    },
                    l.a.createElement(
                      P.a,
                      {
                        className: 'card-box',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'table-responsive-md',
                        },
                        l.a.createElement(
                          R.a,
                          {
                            className: 'table table-borderless text-nowrap mb-0',
                          },
                          l.a.createElement(
                            'thead',
                            null,
                            l.a.createElement(
                              'tr',
                              null,
                              l.a.createElement('th', {
                                className: 'text-uppercase bg-secondary',
                              }),
                              l.a.createElement(
                                'th',
                                {
                                  className: 'text-uppercase bg-secondary',
                                },
                                'Coin'
                              ),
                              l.a.createElement(
                                'th',
                                {
                                  className: 'text-uppercase bg-secondary',
                                },
                                'Address'
                              ),
                              l.a.createElement(
                                'th',
                                {
                                  className: 'text-uppercase bg-secondary',
                                },
                                'Amount (XCH)'
                              )
                            )
                          ),
                          l.a.createElement(
                            'tbody',
                            null,
                            a.map(function (e) {
                              return l.a.createElement(
                                'tr',
                                {
                                  key: e._id,
                                },
                                1 === t && l.a.createElement('td', null, '\ud83d\udcb0 Prefarm'),
                                1 !== t &&
                                  e.parent_coin_info.startsWith('0x0000000000000000') &&
                                  l.a.createElement(
                                    'td',
                                    null,
                                    '\ud83d\udcb8 Pool reward for block ',
                                    l.a.createElement(ea.a, {
                                      height: parseInt(e.parent_coin_info, 16),
                                    })
                                  ),
                                1 !== t &&
                                  !e.parent_coin_info.startsWith('0x0000000000000000') &&
                                  l.a.createElement('td', null, '\ud83c\udf31 Farmer reward'),
                                l.a.createElement(
                                  'td',
                                  null,
                                  l.a.createElement(
                                    d.b,
                                    {
                                      to:
                                        'zh' === n
                                          ? '/zh-cn/blockchain/coin/'.concat(e.coin_id)
                                          : '/blockchain/coin/'.concat(e.coin_id),
                                      className: 'text-success',
                                    },
                                    e.coin_id
                                  )
                                ),
                                l.a.createElement(
                                  'td',
                                  null,
                                  l.a.createElement(
                                    d.b,
                                    {
                                      to:
                                        'zh' === n
                                          ? '/zh-cn/blockchain/address/'.concat(e.address)
                                          : '/blockchain/address/'.concat(e.address),
                                      className: 'text-success',
                                    },
                                    e.address
                                  )
                                ),
                                l.a.createElement(
                                  'td',
                                  null,
                                  Object(Re.a)(parseFloat(e.amount), 'mojo').to('chia').toString()
                                )
                              );
                            })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ha = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(''.concat(He.a.apiPath2, '/additionsAndRemovals/').concat(a))
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        Pa = function (e) {
          var a = e.header_hash,
            t = e.height,
            r = e.locale,
            c = Object(n.useState)(!1),
            i = Object(v.a)(c, 2),
            s = i[0],
            o = i[1];
          Object(n.useEffect)(function () {
            Ha(a)
              .then(function (e) {
                return o(e);
              })
              .catch(console.log);
          }, []);
          var m = function (e) {
            var a = e.data,
              n = e.showConfirmedBlockIndex;
            return a.map(function (e) {
              var a = e._id,
                c = e.coin_id,
                i = e.address,
                s = e.coinbase,
                o = e.amount,
                m = e.confirmed_block_index,
                u = e.parent_coin_info;
              return l.a.createElement(
                'tr',
                {
                  key: a,
                },
                1 === t && l.a.createElement('td', null, '\ud83d\udcb0 Prefarm'),
                1 !== t &&
                  s &&
                  u.startsWith('0x0000000000000000') &&
                  l.a.createElement(
                    'td',
                    null,
                    '\ud83d\udcb8 Pool reward for block ',
                    l.a.createElement(ea.a, {
                      height: parseInt(u, 16),
                    })
                  ),
                1 !== t &&
                  s &&
                  !u.startsWith('0x0000000000000000') &&
                  l.a.createElement('td', null, '\ud83c\udf31 Farmer reward'),
                1 !== t && !s && l.a.createElement('td', null, '\ud83c\udf43 Miscellaneous'),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement(
                    d.b,
                    {
                      to:
                        'zh' === r
                          ? '/zh-cn/blockchain/coin/'.concat(c)
                          : '/blockchain/coin/'.concat(c),
                      className: 'text-success',
                    },
                    c
                  )
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement(
                    d.b,
                    {
                      to:
                        'zh' === r
                          ? '/zh-cn/blockchain/address/'.concat(i)
                          : '/blockchain/address/'.concat(i),
                      className: 'text-success',
                    },
                    i
                  )
                ),
                l.a.createElement(
                  'td',
                  null,
                  Object(Re.a)(parseFloat(o), 'mojo').to('chia').toString()
                ),
                n &&
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(ea.a, {
                      height: m,
                    })
                  )
              );
            });
          };
          return l.a.createElement(
            l.a.Fragment,
            null,
            s &&
              s.additions &&
              s.additions.length > 0 &&
              l.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'card-header',
                    },
                    l.a.createElement(
                      'h4',
                      {
                        className: 'font-size-lg mb-0 py-2 font-weight-bold',
                      },
                      'Additions'
                    )
                  ),
                  l.a.createElement(
                    U.a,
                    null,
                    l.a.createElement(
                      H.a,
                      {
                        container: !0,
                        spacing: 12,
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          xl: 12,
                        },
                        l.a.createElement(
                          P.a,
                          {
                            className: 'card-box',
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'table-responsive-md',
                            },
                            l.a.createElement(
                              R.a,
                              {
                                className: 'table table-borderless text-nowrap mb-0',
                              },
                              l.a.createElement(
                                'thead',
                                null,
                                l.a.createElement(
                                  'tr',
                                  null,
                                  l.a.createElement('th', {
                                    className: 'text-uppercase bg-secondary',
                                  }),
                                  l.a.createElement(
                                    'th',
                                    {
                                      className: 'text-uppercase bg-secondary',
                                    },
                                    'Coin'
                                  ),
                                  l.a.createElement(
                                    'th',
                                    {
                                      className: 'text-uppercase bg-secondary',
                                    },
                                    'Address'
                                  ),
                                  l.a.createElement(
                                    'th',
                                    {
                                      className: 'text-uppercase bg-secondary',
                                    },
                                    'Amount (XCH)'
                                  )
                                )
                              ),
                              l.a.createElement(
                                'tbody',
                                null,
                                l.a.createElement(m, {
                                  data: s.additions,
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
            s &&
              s.removals &&
              s.removals.length > 0 &&
              l.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'card-header',
                    },
                    l.a.createElement(
                      'h4',
                      {
                        className: 'font-size-lg mb-0 py-2 font-weight-bold',
                      },
                      'Removals'
                    )
                  ),
                  l.a.createElement(
                    U.a,
                    null,
                    l.a.createElement(
                      H.a,
                      {
                        container: !0,
                        spacing: 12,
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          xl: 12,
                        },
                        l.a.createElement(
                          P.a,
                          {
                            className: 'card-box',
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'table-responsive-md',
                            },
                            l.a.createElement(
                              R.a,
                              {
                                className: 'table table-borderless text-nowrap mb-0',
                              },
                              l.a.createElement(
                                'thead',
                                null,
                                l.a.createElement(
                                  'tr',
                                  null,
                                  l.a.createElement('th', {
                                    className: 'text-uppercase bg-secondary',
                                  }),
                                  l.a.createElement(
                                    'th',
                                    {
                                      className: 'text-uppercase bg-secondary',
                                    },
                                    'Coin'
                                  ),
                                  l.a.createElement(
                                    'th',
                                    {
                                      className: 'text-uppercase bg-secondary',
                                    },
                                    'Address'
                                  ),
                                  l.a.createElement(
                                    'th',
                                    {
                                      className: 'text-uppercase bg-secondary',
                                    },
                                    'Amount (XCH)'
                                  ),
                                  l.a.createElement(
                                    'th',
                                    {
                                      className: 'text-uppercase bg-secondary',
                                    },
                                    'Addition block index'
                                  )
                                )
                              ),
                              l.a.createElement(
                                'tbody',
                                null,
                                l.a.createElement(m, {
                                  data: s.removals,
                                  showConfirmedBlockIndex: !0,
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
          );
        },
        Ua = function (e) {
          var a = e.reward_chain_block;
          return l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              P.a,
              {
                className: 'card-box',
              },
              l.a.createElement(
                'div',
                {
                  className: 'card-header',
                },
                l.a.createElement(
                  'h4',
                  {
                    className: 'font-size-lg mb-0 py-2 font-weight-bold',
                  },
                  'Reward Chain Sub Block'
                )
              ),
              l.a.createElement(
                U.a,
                null,
                a &&
                  a.challenge_chain_ip_vdf &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'challenge_chain_ip_vdf.challenge'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.challenge_chain_ip_vdf.challenge
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'b',
                            null,
                            'challenge_chain_ip_vdf.number_of_iterations'
                          ),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        parseInt(a.challenge_chain_ip_vdf.number_of_iterations).toLocaleString()
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'challenge_chain_ip_vdf.output.data',
                        value: a.challenge_chain_ip_vdf.output.data,
                      })
                    )
                  ),
                a &&
                  a.reward_chain_ip_vdf &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'reward_chain_ip_vdf.challenge'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.reward_chain_ip_vdf.challenge
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'reward_chain_ip_vdf.number_of_iterations'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        parseInt(a.reward_chain_ip_vdf.number_of_iterations).toLocaleString()
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'reward_chain_ip_vdf.output.data',
                        value: a.reward_chain_ip_vdf.output.data,
                      })
                    )
                  ),
                a &&
                  a.reward_chain_sp_vdf &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'reward_chain_sp_vdf.challenge'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.reward_chain_sp_vdf.challenge
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'reward_chain_sp_vdf.number_of_iterations'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        parseInt(a.reward_chain_sp_vdf.number_of_iterations).toLocaleString()
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'reward_chain_sp_vdf.output.data',
                        value: a.reward_chain_sp_vdf.output.data,
                      })
                    )
                  ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(Ae.a, {
                    fullWidth: !0,
                    variant: 'outlined',
                    label: 'challenge_chain_sp_signature',
                    value: a.challenge_chain_sp_signature,
                  })
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(Ae.a, {
                    fullWidth: !0,
                    variant: 'outlined',
                    label: 'reward_chain_sp_signature',
                    value: a.reward_chain_sp_signature,
                  })
                ),
                a &&
                  a.challenge_chain_sp_vdf &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'challenge_chain_sp_vdf.challenge'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.challenge_chain_sp_vdf.challenge
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'b',
                            null,
                            'challenge_chain_sp_vdf.number_of_iterations'
                          ),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        parseInt(a.challenge_chain_sp_vdf.number_of_iterations).toLocaleString()
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'challenge_chain_sp_vdf.output.data',
                        value: a.challenge_chain_sp_vdf.output.data,
                      })
                    )
                  ),
                a.infused_challenge_chain_ip_vdf &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'infused_challenge_chain_ip_vdf.challenge'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.infused_challenge_chain_ip_vdf.challenge
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'b',
                            null,
                            'infused_challenge_chain_ip_vdf.number_of_iterations'
                          ),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        parseInt(
                          a.infused_challenge_chain_ip_vdf.number_of_iterations
                        ).toLocaleString()
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'infused_challenge_chain_ip_vdf.output.data',
                        value: a.infused_challenge_chain_ip_vdf.output.data,
                      })
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    })
                  ),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'is_transaction_block'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.is_transaction_block ? 'Yes' : 'No'
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'pos_ss_cc_challenge_hash'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.pos_ss_cc_challenge_hash
                  )
                ),
                a &&
                  a.proof_of_space &&
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'proof_of_space.challenge'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.proof_of_space.challenge
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'proof_of_space.plot_public_key'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.proof_of_space.plot_public_key
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'proof_of_space.pool_contract_puzzle_hash'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.proof_of_space.pool_contract_puzzle_hash
                          ? a.proof_of_space.pool_contract_puzzle_hash
                          : 'N/A'
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'proof_of_space.pool_public_key'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        l.a.createElement(
                          d.b,
                          {
                            to: '/blockchain/pool/'.concat(a.proof_of_space.pool_public_key),
                            className: 'text-success',
                          },
                          a.proof_of_space.pool_public_key
                        )
                      )
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'proof_of_space.proof',
                        value: a.proof_of_space.proof,
                      })
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex flex-xl-row justify-content-between flex-column',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement('b', null, 'proof_of_space.size'),
                          l.a.createElement('div', {
                            className: 'text-black-50',
                          })
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                        },
                        a.proof_of_space.size
                      )
                    )
                  ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'signage_point_index'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.signage_point_index
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'height'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    a.height
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'total_iters'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    parseInt(a.total_iters).toLocaleString()
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-3',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex flex-xl-row justify-content-between flex-column',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('b', null, 'weight'),
                      l.a.createElement('div', {
                        className: 'text-black-50',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-weight-bold font-size-lg flex-grow-1 text-right overflow-auto pl-xl-3',
                    },
                    parseInt(a.weight).toLocaleString()
                  )
                )
              )
            )
          );
        };

      function Ra(e) {
        var a = e.blockDetails,
          t = Object(aa.a)(),
          n = a.netspace / Math.pow(1024, 6);
        return l.a.createElement(
          l.a.Fragment,
          null,
          a.transactions_info &&
            l.a.createElement(Da, {
              netspace: n,
              fees: Object(Re.a)(parseFloat(a.transactions_info.fees), 'mojo').to('chia'),
              transactionCount: a.transactions_info.reward_claims_incorporated.length,
              height: a.reward_chain_block.height,
            }),
          !a.transactions_info &&
            l.a.createElement(Da, {
              netspace: n,
              height: a.reward_chain_block.height,
            }),
          l.a.createElement(Fa, {
            locale: t.locale,
            foliage: a.foliage,
            farmer_reward_address: a.farmer_reward_address,
            pool_target_address: a.pool_target_address,
          }),
          l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6',
            },
            l.a.createElement(
              P.a,
              {
                className: 'card-box',
              },
              l.a.createElement(
                U.a,
                {
                  style: {
                    textAlign: 'center',
                  },
                },
                l.a.createElement(za.a, null)
              )
            )
          ),
          a.transactions_info &&
            l.a.createElement(Ia, {
              transactions_info: a.transactions_info,
            }),
          a.transactions_info &&
            a.transactions_info.reward_claims_incorporated.length > 0 &&
            l.a.createElement(Ba, {
              locale: t.locale,
              reward_claims_incorporated: a.transactions_info.reward_claims_incorporated,
              height: a.reward_chain_block.height,
            }),
          a.reward_chain_block.is_transaction_block &&
            l.a.createElement(Pa, {
              locale: t.locale,
              header_hash: a.header_hash,
              height: a.height,
            }),
          l.a.createElement(Ua, {
            reward_chain_block: a.reward_chain_block,
          }),
          l.a.createElement(Ma, {
            blockDetails: a,
          })
        );
      }
      var La = {
          witness: 'Loading...',
          witness_type: 0,
        },
        Xa = {
          challenge: 'Loading...',
          number_of_iterations: 'Loading...',
          output: {
            data: 'Loading...',
          },
        },
        Wa = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/block/').concat(a));
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })();

      function Ja(e) {
        var a = e.match.params.headerHash,
          t = Object(n.useState)({
            farmer_reward_address: 'Loading...',
            pool_target_address: 'Loading...',
            challenge_chain_ip_proof: La,
            challenge_chain_sp_proof: La,
            finished_sub_slots: [],
            foliage: {
              foliage_block_hash: 'Loading...',
              foliage_block_signature: 'Loading...',
              foliage_block_data: {
                extension_data: 'Loading...',
                farmer_reward_puzzle_hash: 'Loading...',
                pool_signature: 'Loading...',
                pool_target: {
                  max_height: 0,
                  puzzle_hash: 'Loading...',
                },
                unfinished_reward_block_hash: 'Loading...',
              },
              foliage_block_data_signature: 'Loading...',
              foliage_transaction_block_hash: 'Loading...',
              foliage_transaction_block_signature: 'Loading...',
              prev_block_hash: 'Loading...',
              reward_block_hash: 'Loading...',
            },
            header_hash: 'Loading...',
            infused_challenge_chain_ip_proof: La,
            reward_chain_ip_proof: La,
            reward_chain_sp_proof: La,
            reward_chain_block: {
              challenge_chain_ip_vdf: Xa,
              challenge_chain_sp_signature: 'Loading...',
              challenge_chain_sp_vdf: Xa,
              infused_challenge_chain_ip_vdf: Xa,
              is_block: !0,
              pos_ss_cc_challenge_hash: 'Loading...',
              proof_of_space: {
                challenge: 'Loading...',
                plot_public_key: 'Loading...',
                pool_contract_puzzle_hash: null,
                pool_public_key: 'Loading...',
                proof: 'Loading...',
                size: 0,
              },
              reward_chain_ip_vdf: Xa,
              reward_chain_sp_signature: 'Loading...',
              reward_chain_sp_vdf: Xa,
              signage_point_index: 0,
              height: 0,
              total_iters: 'Loading...',
              weight: 'Loading...',
            },
            transactions_generator: null,
            transactions_info: {
              reward_claims_incorporated: [],
              aggregated_signature: 'Loading...',
              cost: 0,
              fees: 0,
              generator_root: 'Loading...',
              previous_generators_root: 'Loading...',
            },
            additions_and_removals: {
              additions: [],
              removals: [],
            },
          }),
          r = Object(v.a)(t, 2),
          c = r[0],
          i = r[1];
        Object(n.useEffect)(function () {
          Wa(a).then(function (e) {
            return i(e);
          });
        }, []);
        var s = 'Time N/A';
        return (
          c.foliage_transaction_block &&
            c.foliage_transaction_block.timestamp &&
            (s = new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }).format(1e3 * parseInt(c.foliage_transaction_block.timestamp))),
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(O.d, {
              titleHeading: c.header_hash,
              titleDescription: ''.concat(s),
            }),
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 6,
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  xl: 12,
                },
                l.a.createElement(Ra, {
                  blockDetails: c,
                })
              )
            )
          )
        );
      }
      var Qa = t(300),
        Ga = t.n(Qa),
        Va =
          (t(474),
          function () {
            var e = Object(x.g)();
            return l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 12,
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  xl: 12,
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'mb-spacing-6',
                  },
                  l.a.createElement(
                    P.a,
                    {
                      className: 'card-box',
                    },
                    l.a.createElement(
                      U.a,
                      null,
                      l.a.createElement(Ga.a, {
                        data: {
                          name: 'Genesis',
                          children: [
                            {
                              name: '0xdce550',
                              children: [
                                {
                                  name: '0xd7a81e',
                                },
                                {
                                  name: '0x4d0012',
                                },
                              ],
                            },
                            {
                              name: '0x1fd60c',
                              children: [
                                {
                                  name: '0x8225b3',
                                },
                                {
                                  name: '0xeac9be',
                                },
                              ],
                            },
                          ],
                        },
                        height: 768,
                        width: 1024,
                        margins: {
                          bottom: 10,
                          left: 20,
                          right: 150,
                          top: 10,
                        },
                        gProps: {
                          onClick: function (a, t) {
                            switch (t) {
                              case 'Genesis':
                                e.push(
                                  '/blockchain/block/0xd780d22c7a87c9e01d98b49a0910f6701c3b95015741316b3fda042e5d7b81d2'
                                );
                                break;
                              case '0xdce550':
                                e.push(
                                  '/blockchain/coin/0xdce550a4341e5ec31c7e3fe5c6ab9801c66ed02689725939537d8d4492465800'
                                );
                                break;
                              case '0x1fd60c':
                                e.push(
                                  '/blockchain/coin/0x1fd60c070e821d785b65e10e5135e52d12c8f4d902a506f48bc1c5268b7bb45b'
                                );
                                break;
                              case '0xd7a81e':
                                e.push(
                                  '/blockchain/coin/0xd7a81eece6b0450c9eaf3b3a9cdbff5bde0f1e51f1f18fcf50cc533296cb04b6'
                                );
                                break;
                              case '0x4d0012':
                                e.push(
                                  '/blockchain/coin/0x4d0012503cb0b31947ed582881e59d334b667a0b4c96ac86c4f540c850055a22'
                                );
                                break;
                              case '0x8225b3':
                                e.push(
                                  '/blockchain/coin/0x8225b3a9538238c170bbd79632604e075f7357621bbd846f50b1aa6d6cfa95e0'
                                );
                                break;
                              case '0xeac9be':
                                e.push(
                                  '/blockchain/coin/0xeac9be36298887f751fa7f7367a27ab12c72360ebf7a78ee4fcfb96db121a3b7'
                                );
                            }
                          },
                        },
                        animated: !0,
                      })
                    )
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  xl: 12,
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'mb-spacing-6',
                  },
                  l.a.createElement(
                    P.a,
                    {
                      className: 'card-box',
                    },
                    l.a.createElement(U.a, null, 'Top tip: You can click to view each coin')
                  )
                )
              )
            );
          });

      function Ka() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia Network pre-farm tracker'),
            l.a.createElement('meta', {
              content: 'Track the pre-farm of Chia Network',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Chia Network\u2122 pre-farm tracker',
            titleDescription: 'Follow coins originating from the Chia Network\u2122 pre-farm',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(Va, null)
            )
          )
        );
      }
      var qa = (function () {
        var e = Object(Te.a)(
          je.a.mark(function e(a) {
            var t, n;
            return je.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      De.a.get(''.concat(He.a.apiPath2, '/blockHeaderHash/').concat(a))
                    );
                  case 2:
                    return (t = e.sent), (n = t.data), e.abrupt('return', n.header_hash);
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function (a) {
          return e.apply(this, arguments);
        };
      })();

      function Za(e) {
        var a = e.match.params.height,
          t = Object(x.g)(),
          r = Object(n.useState)(null),
          c = Object(v.a)(r, 2),
          i = c[0],
          s = c[1];
        return (
          Object(n.useEffect)(function () {
            qa(a)
              .then(function (e) {
                return s(e);
              })
              .catch(console.log);
          }, []),
          i && t.push('/blockchain/block/'.concat(i)),
          l.a.createElement(l.a.Fragment, null)
        );
      }
      var Ya = t(301),
        _a = t(302);

      function $a() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(O.d, {
            titleHeading: 'Address and puzzle hash converter',
            titleDescription: 'Converts between address and puzzle hash',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    U.a,
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(
                        'p',
                        null,
                        'In Chia, making a payment involves creating a Chialisp\u2122 program that uses a ',
                        l.a.createElement(
                          'a',
                          {
                            className: 'text-success',
                            href: 'https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/',
                          },
                          'BLS'
                        ),
                        ' public key. This program is called a puzzle and is hashed to create a puzzle hash.'
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(
                        'p',
                        null,
                        'The puzzle hash is converted to ',
                        l.a.createElement(
                          'a',
                          {
                            className: 'text-success',
                            href: 'https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki',
                          },
                          'bech32m'
                        ),
                        ' format and called an address for usability. For more info on keys in Chia see the ',
                        l.a.createElement(
                          'a',
                          {
                            className: 'text-success',
                            href: 'https://github.com/Chia-Network/chia-blockchain/wiki/Chia-Keys-Architecture',
                          },
                          'wiki page'
                        ),
                        '.'
                      )
                    )
                  )
                )
              )
            )
          ),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(Ya.a, null),
              l.a.createElement(_a.a, null)
            )
          )
        );
      }
      var et = t(28),
        at = [
          'rgb(54, 162, 235, 0.8)',
          'rgb(75, 192, 192, 0.8)',
          'rgb(201, 203, 207, 0.8)',
          'rgb(255, 159, 64, 0.8)',
          'rgb(153, 102, 255, 0.8)',
          'rgb(255, 99, 132, 0.8)',
          'rgb(255, 205, 86, 0.8)',
        ],
        tt = function (e) {
          var a = e.data.map(function (e) {
            var a,
              t,
              n = at[((a = 0), (t = 6), Math.floor(Math.random() * t) + a)];
            return {
              label: e.label,
              fill: !1,
              backgroundColor: n,
              borderColor: n,
              data: e.count,
            };
          });
          return {
            labels: e.timestamp,
            datasets: a,
          };
        },
        nt = {
          legend: {
            display: !1,
          },
          responsive: !0,
          scales: {
            xAxes: [
              {
                display: !0,
                type: 'time',
                time: {
                  parser: 'MM/DD/YYYY HH:mm',
                  tooltipFormat: 'll HH:mm',
                  unit: 'day',
                  unitStepSize: 1,
                  displayFormats: {
                    day: 'MM/DD/YYYY',
                  },
                },
              },
            ],
            yAxes: [
              {
                display: !1,
                stacked: !1,
                scaleLabel: {
                  display: !1,
                  labelString: 'Count',
                },
              },
            ],
          },
          animation: {
            easing: 'easeOutCirc',
            duration: 500,
          },
          tooltips: {
            mode: 'point',
          },
          hover: {
            mode: 'point',
          },
        },
        lt = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(''.concat(He.a.apiPath2, '/chart/nodeLocationsDaily'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        rt = function () {
          var e = Object(n.useState)({
              timestamp: [],
              data: [],
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(n.useEffect)(function () {
              lt().then(function (e) {
                return r(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                data: tt(t),
                options: nt,
                width: 300,
                height: 200,
              })
            )
          );
        },
        ct = [
          'rgb(54, 162, 235, 0.8)',
          'rgb(75, 192, 192, 0.8)',
          'rgb(201, 203, 207, 0.8)',
          'rgb(255, 159, 64, 0.8)',
          'rgb(153, 102, 255, 0.8)',
          'rgb(255, 99, 132, 0.8)',
          'rgb(255, 205, 86, 0.8)',
        ],
        it = function (e) {
          var a = e.data.map(function (e) {
            var a,
              t,
              n = ct[((a = 0), (t = 6), Math.floor(Math.random() * t) + a)];
            return {
              label: e.label,
              fill: !1,
              backgroundColor: n,
              borderColor: n,
              data: e.count,
            };
          });
          return {
            labels: e.timestamp,
            datasets: a,
          };
        },
        st = {
          legend: {
            display: !1,
          },
          responsive: !0,
          scales: {
            xAxes: [
              {
                display: !0,
                type: 'time',
                time: {
                  parser: 'MM/DD/YYYY HH:mm',
                  tooltipFormat: 'll HH:mm',
                  unit: 'day',
                  unitStepSize: 1,
                  displayFormats: {
                    day: 'MM/DD/YYYY',
                  },
                },
              },
            ],
            yAxes: [
              {
                display: !1,
                stacked: !1,
                scaleLabel: {
                  display: !1,
                  labelString: 'Count',
                },
              },
            ],
          },
          animation: {
            easing: 'easeOutCirc',
            duration: 500,
          },
          tooltips: {
            mode: 'point',
          },
          hover: {
            mode: 'point',
          },
        },
        ot = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(''.concat(He.a.apiPath2, '/chart/nodeLocationsWeekly'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        mt = function () {
          var e = Object(n.useState)({
              timestamp: [],
              data: [],
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(n.useEffect)(function () {
              ot().then(function (e) {
                return r(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                data: it(t),
                options: st,
                width: 300,
                height: 200,
              })
            )
          );
        },
        dt = function (e) {
          var a = e.onClick,
            t = e.period,
            n = e.active
              ? 'mr-3 btn-outline-primary btn-gradient shadow-none bg-sunny-morning'
              : 'mr-3 btn-outline-primary btn-gradient shadow-none bg-grow-early';
          return l.a.createElement(
            X.a,
            {
              className: n,
              size: 'small',
              onClick: a,
            },
            t
          );
        };

      function ut() {
        var e = window.location.search,
          a = new URLSearchParams(e).get('period'),
          t = Object(n.useState)(a || '1w'),
          r = Object(v.a)(t, 2),
          c = r[0],
          i = r[1];
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia node countries chart'),
            l.a.createElement('meta', {
              content:
                'Chart showing the location of nodes that are connected to the Chia network\u2122.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Full node countries (top 20)',
            titleDescription: 'Geoip lookup against publicily accessible Chia full nodes.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'content-box',
                  },
                  '24h' === c && l.a.createElement(rt, null),
                  '1w' === c && l.a.createElement(mt, null),
                  l.a.createElement(
                    'div',
                    {
                      className: 'portfolio-section',
                      style: {
                        marginTop: '20px',
                      },
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'filters',
                      },
                      l.a.createElement(dt, {
                        onClick: function () {
                          i('24h'),
                            window.history.pushState({}, null, '/charts/countries?period=24h');
                        },
                        period: 'Connected within 24h',
                        active: '24h' === c,
                      }),
                      l.a.createElement(dt, {
                        onClick: function () {
                          i('1w'),
                            window.history.pushState({}, null, '/charts/countries?period=1w');
                        },
                        period: 'Connected within 1 week',
                        active: '1w' === c,
                      })
                    )
                  )
                )
              )
            )
          )
        );
      }
      var pt = function (e, a) {
          var t = e.data,
            n = e.height,
            l = e.timestamp;
          return {
            labels: a
              ? l.map(function (e) {
                  return 1e3 * parseInt(e, 10);
                })
              : n,
            datasets: [
              {
                steppedLine: !1,
                label: 'Unique receive addresses',
                fill: !1,
                lineTension: 0,
                backgroundColor: 'rgba(68,177,62,0.4)',
                borderColor: 'rgba(74,191,76,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(74,191,76,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: t,
              },
            ],
          };
        },
        ht = function (e) {
          return Object(b.a)(
            {
              animation: !1,
              legend: {
                display: !1,
              },
            },
            e
              ? {
                  scales: {
                    xAxes: [
                      {
                        display: !0,
                        type: 'time',
                        time: {
                          parser: 'MM/DD/YYYY HH:mm',
                          tooltipFormat: 'll HH:mm',
                          unit: 'day',
                          unitStepSize: 1,
                          displayFormats: {
                            day: 'MM/DD/YYYY',
                          },
                        },
                      },
                    ],
                  },
                }
              : {}
          );
        },
        bt = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(
                          ''
                            .concat(He.a.apiPath2, '/heightBasedChart/unique_address_count?filter=')
                            .concat(a)
                        )
                      );
                    case 2:
                      return (
                        (t = e.sent),
                        (n = t.data),
                        e.abrupt(
                          'return',
                          Object(b.a)(
                            Object(b.a)({}, n),
                            {},
                            {
                              timestamp: n.timestamp.filter(Boolean),
                            }
                          )
                        )
                      );
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        ft = function (e) {
          var a = e.onClick,
            t = e.filter,
            n = e.active
              ? 'mr-3 btn-outline-primary btn-gradient shadow-none bg-sunny-morning'
              : 'mr-3 btn-outline-primary btn-gradient shadow-none bg-grow-early';
          return l.a.createElement(
            X.a,
            {
              className: n,
              size: 'small',
              onClick: a,
            },
            t
          );
        },
        Et = function () {
          var e = Object(n.useState)('24h'),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1],
            c = Object(n.useState)({
              data: [],
              height: [],
              timestamp: [],
            }),
            i = Object(v.a)(c, 2),
            s = i[0],
            o = i[1];
          Object(n.useEffect)(
            function () {
              bt(t).then(function (e) {
                return o(e);
              });
            },
            [t]
          );
          var m = s.height.length === s.timestamp.length;
          return (
            console.log('useTimestamp', m, s),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                key: m,
                data: pt(s, m),
                options: ht(m),
                width: 250,
                height: 100,
              }),
              l.a.createElement(ft, {
                filter: '24h',
                onClick: function () {
                  return r('24h');
                },
                active: '24h' === t,
              })
            )
          );
        };

      function gt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia unique address count'),
            l.a.createElement('meta', {
              content:
                'Chart showing the number of unique addresses that have been used in the Chia blockchain.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Unique address count',
            titleDescription: 'Addresses that have received Chia coins.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'content-box',
                  },
                  l.a.createElement(Et, null)
                )
              )
            )
          )
        );
      }
      var vt = function (e) {
          var a = e.data;
          return {
            labels: e.timestamp.map(function (e) {
              return new Intl.DateTimeFormat('en-US', {
                dateStyle: 'short',
                timeStyle: 'short',
              }).format(e);
            }),
            datasets: [
              {
                steppedLine: !1,
                label: 'Active nodes',
                fill: !1,
                lineTension: 0.4,
                backgroundColor: 'rgba(68,177,62,0.4)',
                borderColor: 'rgba(74,191,76,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(74,191,76,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: a,
              },
            ],
          };
        },
        xt = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/chart/coinCount12Hour'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        wt = function () {
          var e = Object(n.useState)({
              data: [],
              timestamp: [],
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(n.useEffect)(function () {
              xt().then(function (e) {
                return r(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                data: vt(t),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function Nt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia coin count'),
            l.a.createElement('meta', {
              content:
                'Chart showing the number of unique coins that exist in the Chia blockchain.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Unique coin count',
            titleDescription: 'Number of unique coins that exist in the Chia blockchain\u2122',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'content-box',
                  },
                  l.a.createElement(wt, null)
                )
              )
            )
          )
        );
      }
      var yt = function (e) {
          var a = e.data;
          return {
            labels: e.timestamp.map(function (e) {
              return new Intl.DateTimeFormat('en-US', {
                dateStyle: 'short',
                timeStyle: 'short',
              }).format(e);
            }),
            datasets: [
              {
                steppedLine: !1,
                label: 'Active nodes',
                fill: !1,
                lineTension: 0.4,
                backgroundColor: 'rgba(68,177,62,0.4)',
                borderColor: 'rgba(74,191,76,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(74,191,76,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: a.map(function (e) {
                  return e / 1e12;
                }),
              },
            ],
          };
        },
        kt = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/chart/coinSupply12Hour'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Ct = function () {
          var e = Object(n.useState)({
              data: [],
              timestamp: [],
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(n.useEffect)(function () {
              kt()
                .then(function (e) {
                  return r(e);
                })
                .catch(function (e) {
                  return console.log(e);
                });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                data: yt(t),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function At() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Total XCH supply'),
            l.a.createElement('meta', {
              content: 'Chart showing the increase in supply of XCH over time.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Total XCH supply',
            titleDescription: 'Increase in supply of XCH over time.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'content-box',
                  },
                  l.a.createElement(Ct, null)
                )
              )
            )
          )
        );
      }
      var St = function (e) {
          var a = e.data;
          return {
            labels: e.height,
            datasets: [
              {
                steppedLine: !1,
                label: 'Fees',
                fill: !1,
                lineTension: 0.4,
                backgroundColor: 'rgba(68,177,62,1)',
                borderColor: 'rgba(74,191,76,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(74,191,76,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: a,
              },
            ],
          };
        },
        Ot = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(
                          ''.concat(He.a.apiPath2, '/heightBasedChart/fees?filter=').concat(a)
                        )
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        jt = function (e) {
          var a = e.onClick,
            t = e.filter,
            n = e.active
              ? 'mr-3 btn-outline-primary btn-gradient shadow-none bg-sunny-morning'
              : 'mr-3 btn-outline-primary btn-gradient shadow-none bg-grow-early';
          return l.a.createElement(
            X.a,
            {
              className: n,
              size: 'small',
              onClick: a,
            },
            t
          );
        },
        Tt = function () {
          var e = Object(n.useState)('24h'),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1],
            c = Object(n.useState)({
              data: [],
              height: [],
            }),
            i = Object(v.a)(c, 2),
            s = i[0],
            o = i[1];
          return (
            Object(n.useEffect)(
              function () {
                Ot(t).then(function (e) {
                  return o(e);
                });
              },
              [t]
            ),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.a, {
                data: St(s),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              }),
              l.a.createElement(jt, {
                filter: '24h',
                onClick: function () {
                  return r('24h');
                },
                active: '24h' === t,
              }),
              l.a.createElement(jt, {
                filter: '1w',
                onClick: function () {
                  return r('1w');
                },
                active: '1w' === t,
              }),
              l.a.createElement(jt, {
                filter: '1m',
                onClick: function () {
                  return r('1m');
                },
                active: '1m' === t,
              }),
              l.a.createElement(jt, {
                filter: '3m',
                onClick: function () {
                  return r('3m');
                },
                active: '3m' === t,
              })
            )
          );
        };

      function zt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia farmer fees chart'),
            l.a.createElement('meta', {
              content: 'Chart showing the amount of fees collected by farmers in the Chia network.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Fees',
            titleDescription: 'Fees paid to farmers over 192 blocks (~1 hour).',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(O.a, null, l.a.createElement(Tt, null))
            )
          )
        );
      }
      var Dt = function (e) {
          var a = e.data;
          return {
            labels: e.height,
            datasets: [
              {
                steppedLine: !1,
                label: 'Transaction volume',
                fill: !1,
                lineTension: 0.4,
                backgroundColor: 'rgba(68,177,62,1)',
                borderColor: 'rgba(74,191,76,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(74,191,76,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: a,
              },
            ],
          };
        },
        Mt = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(
                          ''
                            .concat(He.a.apiPath2, '/heightBasedChart/transaction_volume?filter=')
                            .concat(a)
                        )
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        Ft = function (e) {
          var a = e.onClick,
            t = e.filter,
            n = e.active
              ? 'mr-3 btn-outline-primary btn-gradient shadow-none bg-sunny-morning'
              : 'mr-3 btn-outline-primary btn-gradient shadow-none bg-grow-early';
          return l.a.createElement(
            X.a,
            {
              className: n,
              size: 'small',
              onClick: a,
            },
            t
          );
        },
        It = function () {
          var e = Object(n.useState)('24h'),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1],
            c = Object(n.useState)({
              data: [],
              height: [],
            }),
            i = Object(v.a)(c, 2),
            s = i[0],
            o = i[1];
          return (
            Object(n.useEffect)(
              function () {
                Mt(t).then(function (e) {
                  return o(e);
                });
              },
              [t]
            ),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.a, {
                data: Dt(s),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              }),
              l.a.createElement(Ft, {
                filter: '24h',
                onClick: function () {
                  return r('24h');
                },
                active: '24h' === t,
              }),
              l.a.createElement(Ft, {
                filter: '1w',
                onClick: function () {
                  return r('1w');
                },
                active: '1w' === t,
              }),
              l.a.createElement(Ft, {
                filter: '1m',
                onClick: function () {
                  return r('1m');
                },
                active: '1m' === t,
              }),
              l.a.createElement(Ft, {
                filter: '3m',
                onClick: function () {
                  return r('3m');
                },
                active: '3m' === t,
              })
            )
          );
        };

      function Bt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia (XCH) transaction volume'),
            l.a.createElement('meta', {
              content: 'Transaction volume of Chia (XCH) in the Chia network.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Transaction volume',
            titleDescription:
              'Transaction volume over 192 blocks (~1 hour). Includes farmer rewards.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(O.a, null, l.a.createElement(It, null))
            )
          )
        );
      }
      var Ht = function (e) {
          var a = e.data;
          return {
            labels: e.height,
            datasets: [
              {
                steppedLine: !1,
                label: 'Average fees (XCH)',
                fill: !1,
                lineTension: 0.4,
                backgroundColor: 'rgba(68,177,62,1)',
                borderColor: 'rgba(74,191,76,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(74,191,76,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: a,
              },
            ],
          };
        },
        Pt = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/chart/averageFeesChart'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Ut = function () {
          var e = Object(n.useState)({
              data: [],
              height: [],
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(n.useEffect)(function () {
              Pt().then(function (e) {
                return r(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.a, {
                data: Ht(t),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function Rt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia (XCH) average transaction fee'),
            l.a.createElement('meta', {
              content: 'Average transaction fee for Chia (XCH) in the Chia network.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Average transaction fee',
            titleDescription:
              'Fee per coin addition/removal over 192 blocks (~1 hour). Coinbase rewards are not included. Related but not an exact mapping to fees paid for transactions.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(O.a, null, l.a.createElement(Ut, null))
            )
          )
        );
      }
      var Lt = function (e, a, t, n, l) {
          return {
            labels: e.timestamp,
            datasets: [
              {
                steppedLine: t,
                label: a,
                fill: n,
                lineTension: l,
                backgroundColor: 'rgba(68,177,62,0.4)',
                borderColor: 'rgba(74,191,76,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(74,191,76,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: e.data,
              },
            ],
          };
        },
        Xt = function (e) {
          var a = {
            legend: {
              display: !1,
            },
            scales: {
              xAxes: [
                {
                  display: !0,
                  type: 'time',
                  time: {
                    parser: 'MM/DD/YYYY HH:mm',
                    tooltipFormat: 'll HH:mm',
                    unit: 'day',
                    unitStepSize: 1,
                    displayFormats: {
                      day: 'MM/DD/YYYY',
                    },
                  },
                },
              ],
            },
            animation: {
              easing: 'easeOutCirc',
              duration: 500,
            },
          };
          return e
            ? Object(b.a)(
                Object(b.a)({}, a),
                {},
                {
                  scales: Object(b.a)(
                    Object(b.a)({}, a.scales),
                    {},
                    {
                      yAxes: [
                        {
                          type: 'logarithmic',
                          ticks: {
                            callback: function (e, a, t) {
                              return Number(e.toString());
                            },
                          },
                        },
                      ],
                    }
                  ),
                }
              )
            : a;
        },
        Wt = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a, t) {
              var n, l;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(
                          ''.concat(He.a.apiPath2, '/chart/').concat(a, '?period=').concat(t)
                        )
                      );
                    case 2:
                      return (n = e.sent), (l = n.data), e.abrupt('return', l);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a, t) {
            return e.apply(this, arguments);
          };
        })(),
        Jt = function (e) {
          var a = e.onClick,
            t = e.period,
            n = e.active
              ? 'mr-3 btn-outline-primary btn-gradient shadow-none bg-sunny-morning'
              : 'mr-3 btn-outline-primary btn-gradient shadow-none bg-grow-early';
          return l.a.createElement(
            X.a,
            {
              className: n,
              size: 'small',
              onClick: a,
            },
            t
          );
        },
        Qt = function (e) {
          var a = e.name,
            t = e.label,
            r = e.steppedLine,
            c = e.fill,
            i = e.controls,
            s = e.initialPeriod,
            o = void 0 === s ? '2w' : s,
            m = e.lineTension,
            d = void 0 === m ? 0 : m,
            u = e.metadata,
            p = e.logScale,
            h = void 0 !== p && p,
            b = window.location.search,
            f = new URLSearchParams(b).get('period'),
            E = Object(n.useState)({
              timestamp: [],
              data: [],
            }),
            g = Object(v.a)(E, 2),
            x = g[0],
            w = g[1],
            N = Object(n.useState)(f || o),
            y = Object(v.a)(N, 2),
            k = y[0],
            C = y[1],
            A = Object(n.useState)(!1),
            S = Object(v.a)(A, 2),
            O = S[0],
            j = S[1];
          return (
            Object(n.useEffect)(
              function () {
                Wt(a, k).then(function (e) {
                  var a = e.timestamp,
                    t = e.data;
                  if (u && 'xchTibDay' === u.chart) {
                    var n = null !== u.tib ? u.tib : 1,
                      l = null !== u.days ? u.days : 1;
                    w({
                      timestamp: a,
                      data: t.map(function (e) {
                        return e * n * l;
                      }),
                    });
                  } else
                    w({
                      timestamp: a,
                      data: t,
                    });
                });
              },
              [u]
            ),
            Object(n.useEffect)(
              function () {
                Wt(a, k).then(function (e) {
                  return w(e);
                });
              },
              [k]
            ),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                key: O,
                data: Lt(x, t, r, c, d),
                options: Xt(O),
                width: 250,
                height: 100,
              }),
              l.a.createElement(
                'div',
                {
                  className: 'portfolio-section',
                  style: {
                    marginTop: '20px',
                  },
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'filters',
                  },
                  i['24h'] &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        C('24h'),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?period=24h')
                          );
                      },
                      period: '24 hours',
                      active: '24h' === k,
                    }),
                  i['1w'] &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        C('1w'),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?period=1w')
                          );
                      },
                      period: '1 week',
                      active: '1w' === k,
                    }),
                  i['2w'] &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        C('2w'),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?period=2w')
                          );
                      },
                      period: '2 weeks',
                      active: '2w' === k,
                    }),
                  i['1m'] &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        C('1m'),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?period=1m')
                          );
                      },
                      period: '1 month',
                      active: '1m' === k,
                    }),
                  i['3m'] &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        C('3m'),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?period=3m')
                          );
                      },
                      period: '3 months',
                      active: '3m' === k,
                    }),
                  i['6m'] &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        C('6m'),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?period=6m')
                          );
                      },
                      period: '6 months',
                      active: '6m' === k,
                    }),
                  i['1y'] &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        C('1y'),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?period=1y')
                          );
                      },
                      period: '1 year',
                      active: '1y' === k,
                    }),
                  h &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        console.log('plzz'),
                          j(!1),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?log=0')
                          );
                      },
                      period: 'Linear',
                      active: !O,
                    }),
                  h &&
                    l.a.createElement(Jt, {
                      onClick: function () {
                        j(!0),
                          window.history.pushState(
                            {},
                            null,
                            ''.concat(window.location.pathname, '?log=1')
                          );
                      },
                      period: 'Log scale',
                      active: O,
                    })
                )
              )
            )
          );
        };

      function Gt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia block timing chart'),
            l.a.createElement('meta', {
              content:
                'Chart showing the amount of time between each block in the Chia blockchain.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Block timing',
            titleDescription: 'Time between blocks in minutes.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(Qt, {
                  name: 'blockTiming',
                  label: 'Block timing',
                  steppedLine: !0,
                  fill: !1,
                  controls: {
                    '24h': !0,
                    '1w': !0,
                    '2w': !0,
                    '1m': !0,
                    '3m': !0,
                  },
                })
              )
            )
          )
        );
      }

      function Vt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia blockchain cumulative VDF iterations chart'),
            l.a.createElement('meta', {
              content:
                'Chart showing the cumulative VDF iterations performed by the Chia blockchain over time.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Cumulative VDF iterations',
            titleDescription:
              'Verifiable delay function proofs (VDFs), also known as "Proofs of time" are cryptographic proofs that a sequential computation was performed on a given input for a given number of iterations. These create time between blocks so that generating an alternative blockchain would take a very long time.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(Qt, {
                  name: 'cumulativeVdfIterations',
                  label: 'Cumulative VDF iterations',
                  steppedLine: !0,
                  fill: !0,
                  controls: {
                    '24h': !0,
                    '1w': !0,
                    '2w': !0,
                    '1m': !0,
                    '3m': !0,
                  },
                })
              )
            )
          )
        );
      }

      function Kt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia blockchain weight chart'),
            l.a.createElement('meta', {
              content: 'Chart showing the weight of each block in the Chia blockchain\u2122',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Weight',
            titleDescription: 'Cumulative difficulty since genesis.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(Qt, {
                  name: 'weight',
                  label: 'Weight',
                  steppedLine: !0,
                  fill: !0,
                  controls: {
                    '24h': !0,
                    '1w': !0,
                    '2w': !0,
                    '1m': !0,
                    '3m': !0,
                  },
                })
              )
            )
          )
        );
      }

      function qt() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia blockchain difficulty chart'),
            l.a.createElement('meta', {
              content: 'Chart showing the difficulty of each block in the Chia blockchain.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Difficulty',
            titleDescription:
              'Difficulty is a constant factor that can increase or decrease the number of iterations required for the proof of time. If blocks are faster or slower than expected in the previous epoch the difficulty is adjusted based on the formula in the Chia greenpaper. This is used in order to target 32 blocks created every 10 minutes.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(Qt, {
                  name: 'difficulty',
                  label: 'Difficulty',
                  steppedLine: !0,
                  fill: !1,
                  controls: {
                    '24h': !0,
                    '1w': !0,
                    '2w': !0,
                    '1m': !0,
                    '3m': !0,
                  },
                })
              )
            )
          )
        );
      }
      var Zt = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/chart/nodeCountFiveDays'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Yt = function () {
          var e,
            a = Object(n.useState)({
              date: [],
              nodeCount: [],
              lastUpdate: 0,
            }),
            t = Object(v.a)(a, 2),
            r = t[0],
            c = t[1];
          return (
            Object(n.useEffect)(function () {
              Zt().then(function (e) {
                return c(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                data:
                  ((e = r),
                  {
                    labels: e.date.map(function (e) {
                      return new Intl.DateTimeFormat('en-US', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      }).format(e);
                    }),
                    datasets: [
                      {
                        steppedLine: !1,
                        label: 'Active nodes',
                        fill: !1,
                        lineTension: 0.4,
                        backgroundColor: 'rgba(68,177,62,0.4)',
                        borderColor: 'rgba(74,191,76,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(74,191,76,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: e.nodeCount,
                      },
                    ],
                  }),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        },
        _t = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/chart/nodeCountsWeek'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        $t = function () {
          var e,
            a = Object(n.useState)({
              date: [],
              nodeCount: [],
              lastUpdate: 0,
            }),
            t = Object(v.a)(a, 2),
            r = t[0],
            c = t[1];
          return (
            Object(n.useEffect)(function () {
              _t().then(function (e) {
                return c(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                data:
                  ((e = r),
                  {
                    labels: e.date.map(function (e) {
                      return new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }).format(e);
                    }),
                    datasets: [
                      {
                        steppedLine: !1,
                        label: 'Active nodes',
                        fill: !1,
                        lineTension: 0.4,
                        backgroundColor: 'rgba(68,177,62,0.4)',
                        borderColor: 'rgba(74,191,76,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(74,191,76,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: e.nodeCount,
                      },
                    ],
                  }),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function en() {
        var e = window.location.search,
          a = new URLSearchParams(e).get('period'),
          t = Object(n.useState)(a || '1w'),
          r = Object(v.a)(t, 2);
        r[0], r[1];
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia active node chart'),
            l.a.createElement('meta', {
              content: 'Chart showing the number of active nodes connected to the Chia network.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Full node count (ipv4)',
            titleDescription:
              'Unique ipv4 addresses connected to the Chia Network on port 8444 (mainnet). Only includes peers with a timestamp that has been updated in the last 5 days.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'content-box',
                  },
                  l.a.createElement(Yt, null)
                )
              )
            )
          )
        );
      }

      function an() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia active node chart'),
            l.a.createElement('meta', {
              content:
                'Chart showing the number of active nodes connected to the Chia network\u2122',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Full node count (connected in last week)',
            titleDescription:
              'Full nodes that have been connected within the last week. This only shows the nodes we could access and not the entire network.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(O.a, null, l.a.createElement($t, null))
            )
          )
        );
      }
      var tn = function (e) {
          var a = e.data;
          return {
            labels: e.labels,
            datasets: [
              {
                backgroundColor: [
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                ],
                hoverBackgroundColor: [
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                ],
                data: a,
              },
            ],
          };
        },
        nn = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/proofOfSpaceSizeChart'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ln = function () {
          var e = Object(n.useState)({
              data: [],
              labels: [],
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(n.useEffect)(function () {
              nn().then(function (e) {
                return r(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.d, {
                data: tn(t),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function rn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Proof of space size'),
            l.a.createElement('meta', {
              content: 'Chart showing the k-size of winning proofs of space.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Proof of space size',
            titleDescription: 'Size of proofs of space in the last 10,000 blocks.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(O.a, null, l.a.createElement(ln, null))
            )
          )
        );
      }
      var cn = function (e) {
          var a = e.data;
          return {
            labels: e.labels,
            datasets: [
              {
                backgroundColor: [
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                ],
                hoverBackgroundColor: [
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                ],
                data: a,
              },
            ],
          };
        },
        sn = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/chart/topFarmers10k'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        on = function () {
          var e = Object(n.useState)({
              data: [],
              labels: [],
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(n.useEffect)(function () {
              sn().then(function (e) {
                return r(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.b, {
                data: cn(t),
                options: {
                  legend: {
                    display: !0,
                    position: 'bottom',
                    align: 'start',
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function mn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Top farmers chart'),
            l.a.createElement('meta', {
              content:
                'Chart showing the top addresses that received farming rewards in the last 10k blocks.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Top farmer addresses',
            titleDescription: 'Addresses that won the most blocks in the last 10,000 blocks.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(O.a, null, l.a.createElement(on, null))
            )
          )
        );
      }
      var dn = function (e) {
          var a = e.data;
          return {
            labels: e.labels,
            datasets: [
              {
                backgroundColor: [
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                ],
                hoverBackgroundColor: [
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                  '#78AB46',
                  '#586949',
                  '#BCED91',
                  '#476A34',
                  '#7BBF6A',
                  '#8CDD81',
                  '#2F4F2F',
                  '#698B69',
                  '#E0EEE0',
                ],
                data: a,
              },
            ],
          };
        },
        un = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/chart/topPools10k'));
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        pn = function () {
          var e = Object(n.useState)({
              data: [],
              labels: [],
            }),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(n.useEffect)(function () {
              un().then(function (e) {
                return r(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.b, {
                data: dn(t),
                options: {
                  legend: {
                    display: !0,
                    position: 'bottom',
                    align: 'start',
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function hn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Top pool pub keys chart'),
            l.a.createElement('meta', {
              content:
                'Chart showing the top pool pub keys that received farming rewards in the last 10k blocks. The official pool protocol does not use pool pub keys.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Top pool pub keys',
            titleDescription:
              'Pool pub keys that won the most blocks in the last 10,000 blocks. The official pool protocol does not use pool pub keys.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(O.a, null, l.a.createElement(pn, null))
            )
          )
        );
      }

      function bn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia blockchain network space chart'),
            l.a.createElement('meta', {
              content:
                'Chart showing the total amount of space that has been allocated to the Chia network\u2122',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Netspace (PiB)',
            titleDescription: 'Space allocated to Chia network\u2122',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(Qt, {
                  name: 'netSpace',
                  label: 'Netspace (PiB)',
                  steppedLine: !1,
                  lineTension: 0.2,
                  fill: !0,
                  controls: {
                    '24h': !0,
                    '1w': !0,
                    '2w': !0,
                    '1m': !0,
                    '3m': !0,
                  },
                  logScale: !0,
                })
              )
            )
          )
        );
      }

      function fn() {
        var e = Object(n.useState)(1),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(1),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1];
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia expected XCH/TiB Day'),
            l.a.createElement('meta', {
              content: 'Chart showing the expected daily farmed XCH per TiB.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'XCH/TiB Day',
            titleDescription: 'Expected daily farmed XCH per TiB.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 8,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(Qt, {
                  name: 'xchTibDay',
                  label: 'XCH',
                  steppedLine: !1,
                  fill: !1,
                  controls: {
                    '24h': !1,
                    '1w': !1,
                    '2w': !1,
                    '1m': !1,
                    '3m': !1,
                  },
                  lineTension: 0.2,
                  metadata: {
                    chart: 'xchTibDay',
                    tib: t,
                    days: s,
                  },
                })
              )
            ),
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 4,
              },
              l.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'card-header',
                    },
                    l.a.createElement(
                      'h4',
                      {
                        className: 'font-size-lg mb-0 py-2 font-weight-bold',
                      },
                      'Chart settings'
                    )
                  ),
                  l.a.createElement(
                    U.a,
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'TiB',
                        onChange: function (e) {
                          var a = parseInt(e.target.value, 10);
                          isNaN(a) ? r(null) : r(a);
                        },
                        value: t,
                      })
                    ),
                    l.a.createElement('div', {
                      className: 'divider my-3',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(Ae.a, {
                        fullWidth: !0,
                        variant: 'outlined',
                        label: 'Days',
                        onChange: function (e) {
                          var a = parseInt(e.target.value, 10);
                          isNaN(a) ? o(null) : o(a);
                        },
                        value: s,
                      })
                    )
                  )
                )
              )
            )
          )
        );
      }
      var En = function (e) {
          var a = e.data;
          return {
            labels: e.timestamp
              .map(function (e) {
                return new Intl.DateTimeFormat('en-US', {
                  dateStyle: 'short',
                  timeStyle: 'short',
                }).format(e);
              })
              .reverse(),
            datasets: [
              {
                steppedLine: !1,
                label: 'USD / TiB Month',
                fill: !1,
                lineTension: 0.4,
                backgroundColor: 'rgba(68,177,62,0.4)',
                borderColor: 'rgba(74,191,76,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(74,191,76,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: a.reverse(),
              },
            ],
          };
        },
        gn = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(''.concat(He.a.apiPath2, '/chart/xchPriceChart?period=').concat(a))
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        vn = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a) {
              var t, n;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(''.concat(He.a.apiPath2, '/chart/xchTibDay?period=').concat(a))
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        xn = function () {
          var e = window.location.search,
            a = new URLSearchParams(e).get('period'),
            t = Object(n.useState)(a || '2w'),
            r = Object(v.a)(t, 2),
            c = r[0],
            i =
              (r[1],
              Object(n.useState)({
                data: [],
                timestamp: [],
              })),
            s = Object(v.a)(i, 2),
            o = s[0],
            m = s[1];
          return (
            Object(n.useEffect)(function () {
              Promise.all([gn(c), vn(c)]).then(function (e) {
                var a = Object(v.a)(e, 2),
                  t = a[0],
                  n = a[1],
                  l = Object(b.a)(
                    Object(b.a)({}, n),
                    {},
                    {
                      data: n.data.filter(Boolean).map(function (e) {
                        return 30 * e;
                      }),
                    }
                  );
                m(
                  Object(b.a)(
                    Object(b.a)({}, l),
                    {},
                    {
                      data: l.data.map(function (e, a) {
                        var n = l.timestamp[a],
                          r = (function (e, a) {
                            for (var t = 0; t < a.timestamp.length; t++)
                              if (parseInt(e, 10) >= a.timestamp[t]) return a.data[t];
                            return a.data[a.data.length - 1];
                          })(n, t);
                        return console.log(n), console.log(r), e * r;
                      }),
                    }
                  )
                );
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                data: En(o),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function wn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia USD over one month farming with 1 TiB'),
            l.a.createElement('meta', {
              content: 'Chart showing the expected USD farming with 1 TiB for 1 month.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'USD/TiB Month',
            titleDescription: 'Expected USD farming with 1 TiB for 1 month.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'content-box',
                  },
                  l.a.createElement(xn, null)
                )
              )
            )
          )
        );
      }

      function Nn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia expected TiB Hour/XCH'),
            l.a.createElement('meta', {
              content: 'Chart showing the expected number of hours to farm 1 XCH with 1 TiB.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'TiB Hour/XCH',
            titleDescription: 'Expected number of hours to farm 1 XCH with 1 TiB.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(Qt, {
                  name: 'tibHoursXch',
                  label: 'Hours',
                  steppedLine: !1,
                  fill: !1,
                  controls: {
                    '24h': !1,
                    '1w': !1,
                    '2w': !1,
                    '1m': !1,
                    '3m': !1,
                  },
                  lineTension: 0.2,
                })
              )
            )
          )
        );
      }
      var yn = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/chart/decentralisation'))
                      );
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        kn = function () {
          var e,
            a = Object(n.useState)({
              data: [],
              height: [],
            }),
            t = Object(v.a)(a, 2),
            r = t[0],
            c = t[1];
          return (
            Object(n.useEffect)(function () {
              yn().then(function (e) {
                return c(e);
              });
            }, []),
            l.a.createElement(
              'div',
              {
                className: 'content-box',
              },
              l.a.createElement(et.c, {
                data:
                  ((e = r),
                  {
                    labels: e.height,
                    datasets: [
                      {
                        steppedLine: !1,
                        label: 'Network Decentralisation',
                        fill: !1,
                        lineTension: 0.4,
                        backgroundColor: 'rgba(68,177,62,0.4)',
                        borderColor: 'rgba(74,191,76,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(74,191,76,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(74,191,76,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: e.data,
                      },
                    ],
                  }),
                options: {
                  legend: {
                    display: !1,
                  },
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    ],
                  },
                },
                width: 250,
                height: 100,
              })
            )
          );
        };

      function Cn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia blockchain network decentralisation chart'),
            l.a.createElement('meta', {
              content: 'Chart showing the decentralisation of the Chia network\u2122',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Network decentralisation',
            titleDescription:
              'Decentralisation of the network is measured by counting unique pool public keys. Higher is better. Please observe the trend rather than the absolute number.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(O.a, null, l.a.createElement(kn, null))
            )
          )
        );
      }
      var An = t(329),
        Sn = t(88),
        On = t.n(Sn);

      function jn() {
        var e = Object(n.useState)(null),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1];
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            P.a,
            {
              className: 'p-4 p-lg-5',
            },
            l.a.createElement(
              'div',
              {
                className:
                  'd-block d-lg-flex text-center text-lg-left align-items-center justify-content-between mb-4',
              },
              l.a.createElement(
                'div',
                {
                  className:
                    'd-flex align-items-center justify-content-center justify-content-lg-start',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'display-4 line-height-1 font-weight-bold mr-3',
                  },
                  'Ethereum Balance'
                ),
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    X.a,
                    {
                      onClick: function (e) {
                        r(e.currentTarget);
                      },
                      size: 'small',
                      className: 'btn-neutral-dark d-flex align-items-center',
                    },
                    l.a.createElement(
                      'span',
                      {
                        className: 'btn-wrapper--label',
                      },
                      'USD'
                    ),
                    l.a.createElement(
                      'span',
                      {
                        className: 'btn-wrapper--icon d-flex',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'chevron-down'],
                        className: 'opacity-8 font-size-xs ml-1',
                      })
                    )
                  ),
                  l.a.createElement(
                    An.a,
                    {
                      anchorEl: t,
                      keepMounted: !0,
                      getContentAnchorEl: null,
                      anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                      },
                      transformOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                      },
                      open: Boolean(t),
                      classes: {
                        list: 'p-0',
                      },
                      onClose: function () {
                        r(null);
                      },
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'p-3',
                      },
                      l.a.createElement(
                        V.a,
                        {
                          component: 'div',
                          className: 'nav-pills nav-neutral-dark flex-column',
                        },
                        l.a.createElement(
                          K.a,
                          {
                            button: !0,
                            href: '#/',
                            onClick: function (e) {
                              return e.preventDefault();
                            },
                            selected: !0,
                          },
                          l.a.createElement('span', null, 'USD')
                        ),
                        l.a.createElement(
                          K.a,
                          {
                            button: !0,
                            href: '#/',
                            onClick: function (e) {
                              return e.preventDefault();
                            },
                          },
                          l.a.createElement('span', null, 'Euro')
                        ),
                        l.a.createElement(
                          K.a,
                          {
                            button: !0,
                            href: '#/',
                            onClick: function (e) {
                              return e.preventDefault();
                            },
                          },
                          l.a.createElement('span', null, 'Yen')
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                X.a,
                {
                  className: 'mt-4 mt-lg-0 text-uppercase font-weight-bold px-4 btn-primary',
                  size: 'small',
                },
                'Exchange'
              )
            ),
            l.a.createElement(
              'div',
              {
                className: 'rounded p-4 bg-secondary text-center border-light mb-5 border-1',
              },
              l.a.createElement(
                H.a,
                {
                  container: !0,
                  spacing: 6,
                },
                l.a.createElement(
                  H.a,
                  {
                    item: !0,
                    md: 4,
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-dark pb-1',
                    },
                    "Today's Earnings"
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-size-lg d-flex align-items-center justify-content-center text-second',
                    },
                    l.a.createElement(
                      'span',
                      {
                        className: 'mr-2 badge badge-circle badge-dark',
                      },
                      'Badge dark'
                    ),
                    l.a.createElement(
                      'small',
                      {
                        className: 'opacity-6 pr-1',
                      },
                      '$'
                    ),
                    l.a.createElement(
                      'span',
                      null,
                      l.a.createElement(Ta.a, {
                        start: 0,
                        end: 8.49,
                        duration: 4,
                        separator: '',
                        decimals: 3,
                        decimal: ',',
                        prefix: '',
                        suffix: '',
                      })
                    )
                  )
                ),
                l.a.createElement(
                  H.a,
                  {
                    item: !0,
                    md: 4,
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-dark pb-1',
                    },
                    'Current Week'
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-size-lg d-flex align-items-center justify-content-center text-second',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'badge badge-first mr-2 badge-circle',
                      },
                      'Badge first'
                    ),
                    l.a.createElement(
                      'small',
                      {
                        className: 'opacity-6 pr-1',
                      },
                      '$'
                    ),
                    l.a.createElement(
                      'span',
                      null,
                      l.a.createElement(Ta.a, {
                        start: 0,
                        end: 34.543,
                        duration: 6,
                        deplay: 2,
                        separator: '',
                        decimals: 3,
                        decimal: ',',
                      })
                    )
                  )
                ),
                l.a.createElement(
                  H.a,
                  {
                    item: !0,
                    md: 4,
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-dark pb-1',
                    },
                    'Previous Week'
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'font-size-lg d-flex align-items-center justify-content-center text-second',
                    },
                    l.a.createElement(
                      'span',
                      {
                        className: 'mr-2 badge badge-circle badge-warning',
                      },
                      'Badge warning'
                    ),
                    l.a.createElement(
                      'small',
                      {
                        className: 'opacity-6 pr-1',
                      },
                      '$'
                    ),
                    l.a.createElement(
                      'span',
                      null,
                      l.a.createElement(Ta.a, {
                        start: 0,
                        end: 76.645,
                        duration: 6,
                        deplay: 2,
                        separator: '',
                        decimals: 3,
                        decimal: ',',
                      })
                    )
                  )
                )
              )
            ),
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 6,
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  xl: 4,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box mb-4 p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'display-3 text-black font-weight-bold',
                    },
                    '19'
                  ),
                  l.a.createElement('div', {
                    className: 'divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first',
                  }),
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold opacity-7 text-uppercase',
                    },
                    'Failed transfers'
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  xl: 4,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box mb-4 p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'display-3 text-black font-weight-bold',
                    },
                    '35'
                  ),
                  l.a.createElement('div', {
                    className: 'divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success',
                  }),
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold opacity-7 text-uppercase',
                    },
                    'Successful deposits'
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  xl: 4,
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box mb-4 p-3',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'display-3 text-black font-weight-bold',
                    },
                    '546'
                  ),
                  l.a.createElement('div', {
                    className: 'divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning',
                  }),
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold opacity-7 text-uppercase',
                    },
                    'Transactions'
                  )
                )
              )
            ),
            l.a.createElement(On.a, {
              options: {
                chart: {
                  toolbar: {
                    show: !1,
                  },
                  sparkline: {
                    enabled: !1,
                  },
                },
                dataLabels: {
                  enabled: !1,
                },
                grid: {
                  strokeDashArray: '5',
                  borderColor: 'rgba(125, 138, 156, 0.3)',
                },
                stroke: {
                  show: !0,
                  width: 2,
                  colors: ['transparent'],
                },
                fill: {
                  color: '#4191ff',
                  gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: !1,
                    opacityFrom: 1,
                    opacityTo: 0,
                    stops: [0, 100],
                  },
                },
                colors: ['#4191ff'],
                legend: {
                  show: !1,
                },
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              },
              series: [
                {
                  name: 'Net Profit',
                  data: [3.3, 3.1, 4, 5.8, 2.1, 3.6, 3.2],
                },
                {
                  name: 'Net Loss',
                  data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4],
                },
              ],
              type: 'area',
              height: 311,
            })
          )
        );
      }
      var Tn = t(708),
        zn = function () {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              Tn.a,
              {
                title: 'Send funds',
                arrow: !0,
              },
              l.a.createElement(
                X.a,
                {
                  size: 'small',
                  className: 'btn-success p-0 d-60',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'btn-wrapper--icon',
                  },
                  l.a.createElement(Q.a, {
                    icon: ['far', 'paper-plane'],
                    className: 'font-size-lg',
                  })
                )
              )
            ),
            l.a.createElement(
              Tn.a,
              {
                title: 'Withdraw to bank account',
                arrow: !0,
              },
              l.a.createElement(
                X.a,
                {
                  size: 'small',
                  className: 'btn-danger p-0 mx-3 d-60',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'btn-wrapper--icon',
                  },
                  l.a.createElement(Q.a, {
                    icon: ['fas', 'dollar-sign'],
                    className: 'font-size-lg',
                  })
                )
              )
            ),
            l.a.createElement(
              Tn.a,
              {
                title: 'Deposit funds',
                arrow: !0,
              },
              l.a.createElement(
                X.a,
                {
                  size: 'small',
                  className: 'btn-warning p-0 d-60',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'btn-wrapper--icon',
                  },
                  l.a.createElement(Q.a, {
                    icon: ['fas', 'plus'],
                    className: 'font-size-lg',
                  })
                )
              )
            )
          );
        };

      function Dn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            O.d,
            {
              titleHeading: 'Wallets',
              titleDescription: 'This is your wallets overview last updated today.',
            },
            l.a.createElement(zn, null)
          ),
          l.a.createElement(G.a, null, l.a.createElement(jn, null))
        );
      }
      var Mn = t(713),
        Fn = t(711);

      function In() {
        var e = Object(n.useState)(null),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = function (e) {
            r(e.currentTarget);
          },
          i = function () {
            r(null);
          },
          s = Object(n.useState)('1'),
          o = Object(v.a)(s, 2),
          m = o[0],
          d = o[1],
          u = function (e) {
            m !== e && d(e);
          };
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            {
              className: 'text-center my-4',
            },
            l.a.createElement(
              'h6',
              {
                className: 'font-weight-bold display-3 font-size-lg mb-1 text-black',
              },
              'Crypto Exchange'
            ),
            l.a.createElement(
              'p',
              {
                className: 'font-size-lg text-black-50 mb-0',
              },
              'Use the form below to exchange favourite crypto currencies'
            )
          ),
          l.a.createElement(
            P.a,
            {
              className: 'mb-5',
            },
            l.a.createElement(
              'div',
              {
                className:
                  'card-header d-flex align-items-center justify-content-between card-header-alt p-0',
              },
              l.a.createElement(
                V.a,
                {
                  component: 'div',
                  className:
                    'w-100 nav-line justify-content-center d-flex nav-line-alt nav-tabs-primary',
                },
                l.a.createElement(
                  K.a,
                  {
                    button: !0,
                    disableRipple: !0,
                    className: 'px-5 py-4',
                    selected: '1' === m,
                    onClick: function () {
                      u('1');
                    },
                  },
                  l.a.createElement(
                    'span',
                    {
                      className: 'font-weight-bold text-uppercase',
                    },
                    'Buy Crypto'
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  })
                ),
                l.a.createElement(
                  K.a,
                  {
                    button: !0,
                    disableRipple: !0,
                    className: 'px-5 py-4',
                    selected: '2' === m,
                    onClick: function () {
                      u('2');
                    },
                  },
                  l.a.createElement(
                    'span',
                    {
                      className: 'font-weight-bold text-uppercase',
                    },
                    'Sell Crypto'
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  })
                )
              )
            ),
            l.a.createElement(
              'div',
              {
                className: 'p-4',
              },
              l.a.createElement(
                'div',
                {
                  className: Object(S.a)('tab-item-wrapper overflow-visible', {
                    active: '1' === m,
                  }),
                  index: 1,
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex align-items-center justify-content-between mb-2',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold font-size-xl text-primary',
                    },
                    'Currency'
                  ),
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          return e.preventDefault();
                        },
                        className: 'text-dark opacity-6',
                        title: 'More info',
                      },
                      'More info'
                    )
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider mb-4',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex justify-content-center',
                  },
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className: 'active mr-3 mb-3 btn-input-select',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'selected-icon',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'check'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'd-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fab', 'bitcoin'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold mt-2',
                      },
                      'Bitcoin'
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'opacity-6',
                      },
                      '$7856.44'
                    )
                  ),
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className: 'mr-3 mb-3 btn-input-select',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'selected-icon',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'check'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'd-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-first',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fab', 'ethereum'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold mt-2',
                      },
                      'Ethereum'
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'opacity-6',
                      },
                      '$273.28'
                    )
                  )
                ),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex align-items-center justify-content-between mb-2 mt-4',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold font-size-xl text-primary',
                    },
                    'Payment Method'
                  ),
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          return e.preventDefault();
                        },
                        className: 'text-dark opacity-6',
                        title: 'Buy limits',
                      },
                      'Buy limits'
                    )
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider mb-4',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex justify-content-center',
                  },
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className: 'mr-3 mb-3 btn-input-select',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'selected-icon',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'check'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'd-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-second',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'dollar-sign'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold mt-2',
                      },
                      'USD Wallet'
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'opacity-6',
                      },
                      '$1589.29'
                    )
                  ),
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className: 'active mr-3 mb-3 btn-input-select',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'selected-icon',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'check'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'd-30 text-dark d-flex align-items-center justify-content-center rounded-pill bg-light',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'university'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold mt-2',
                      },
                      'Bank IBAN'
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'opacity-6',
                      },
                      '***1111'
                    )
                  ),
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className: 'mx-3 mb-3 btn-input-select',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'd-30 d-flex align-items-center justify-content-center rounded-pill bg-secondary text-primary',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'plus'],
                      })
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold text-primary opacity-6 mt-2',
                      },
                      'Add new'
                    )
                  )
                ),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-flex align-items-center justify-content-between mb-2 mt-4',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold font-size-xl text-primary',
                    },
                    'Amount'
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider mb-4',
                }),
                l.a.createElement(
                  'div',
                  {
                    className: 'd-block d-md-flex align-items-center justify-content-center',
                  },
                  l.a.createElement(
                    Me.a,
                    {
                      variant: 'outlined',
                      fullWidth: !0,
                    },
                    l.a.createElement(Fn.a, {
                      value: '567.34',
                      classes: {
                        input: 'font-size-lg font-weight-bold p-4 h-auto',
                        notchedOutline: 'border-2',
                      },
                      endAdornment: l.a.createElement(
                        Mn.a,
                        {
                          position: 'end',
                        },
                        l.a.createElement(
                          X.a,
                          {
                            onClick: c,
                            size: 'small',
                            className: 'btn-neutral-dark d-flex align-items-center',
                          },
                          l.a.createElement(
                            'span',
                            {
                              className: 'btn-wrapper--label',
                            },
                            'USD'
                          ),
                          l.a.createElement(
                            'span',
                            {
                              className: 'btn-wrapper--icon d-flex',
                            },
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'chevron-down'],
                              className: 'opacity-8 font-size-xs ml-1',
                            })
                          )
                        ),
                        l.a.createElement(
                          An.a,
                          {
                            anchorEl: t,
                            keepMounted: !0,
                            getContentAnchorEl: null,
                            anchorOrigin: {
                              vertical: 'center',
                              horizontal: 'center',
                            },
                            transformOrigin: {
                              vertical: 'center',
                              horizontal: 'center',
                            },
                            open: Boolean(t),
                            classes: {
                              list: 'p-0',
                            },
                            onClose: i,
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'p-2',
                            },
                            l.a.createElement(
                              V.a,
                              {
                                component: 'div',
                                className: 'nav-pills p-0 m-0 nav-neutral-dark flex-column',
                              },
                              l.a.createElement(
                                K.a,
                                {
                                  button: !0,
                                  href: '#/',
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                  selected: !0,
                                  className: 'px-3 mx-2',
                                },
                                l.a.createElement('span', null, 'USD')
                              ),
                              l.a.createElement(
                                K.a,
                                {
                                  button: !0,
                                  href: '#/',
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                  className: 'px-3 mx-2',
                                },
                                l.a.createElement('span', null, 'Euro')
                              ),
                              l.a.createElement(
                                K.a,
                                {
                                  button: !0,
                                  href: '#/',
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                  className: 'px-3 mx-2',
                                },
                                l.a.createElement('span', null, 'Yen')
                              )
                            )
                          )
                        )
                      ),
                      labelWidth: 0,
                    })
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'my-3 mx-auto my-md-0 d-60 d-flex align-items-center justify-content-center px-4',
                    },
                    l.a.createElement(Q.a, {
                      icon: ['fas', 'exchange-alt'],
                      className: 'opacity-8 font-size-xl',
                    })
                  ),
                  l.a.createElement(
                    Me.a,
                    {
                      variant: 'outlined',
                      fullWidth: !0,
                    },
                    l.a.createElement(Fn.a, {
                      value: '0.549',
                      classes: {
                        input: 'font-size-lg font-weight-bold p-4 h-auto',
                        notchedOutline: 'border-2',
                      },
                      endAdornment: l.a.createElement(
                        Mn.a,
                        {
                          position: 'end',
                        },
                        l.a.createElement(
                          X.a,
                          {
                            onClick: c,
                            size: 'small',
                            className: 'btn-neutral-dark d-flex align-items-center',
                          },
                          l.a.createElement(
                            'span',
                            {
                              className: 'btn-wrapper--label',
                            },
                            'BTC'
                          ),
                          l.a.createElement(
                            'span',
                            {
                              className: 'btn-wrapper--icon d-flex',
                            },
                            l.a.createElement(Q.a, {
                              icon: ['fas', 'chevron-down'],
                              className: 'opacity-8 font-size-xs ml-1',
                            })
                          )
                        ),
                        l.a.createElement(
                          An.a,
                          {
                            anchorEl: t,
                            keepMounted: !0,
                            getContentAnchorEl: null,
                            anchorOrigin: {
                              vertical: 'center',
                              horizontal: 'center',
                            },
                            transformOrigin: {
                              vertical: 'center',
                              horizontal: 'center',
                            },
                            open: Boolean(t),
                            classes: {
                              list: 'p-0',
                            },
                            onClose: i,
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'p-2',
                            },
                            l.a.createElement(
                              V.a,
                              {
                                component: 'div',
                                className: 'nav-pills p-0 m-0 nav-neutral-dark flex-column',
                              },
                              l.a.createElement(
                                K.a,
                                {
                                  button: !0,
                                  href: '#/',
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                  selected: !0,
                                  className: 'px-3 mx-2',
                                },
                                l.a.createElement('span', null, 'ETH')
                              ),
                              l.a.createElement(
                                K.a,
                                {
                                  button: !0,
                                  href: '#/',
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                  className: 'px-3 mx-2',
                                },
                                l.a.createElement('span', null, 'LTC')
                              ),
                              l.a.createElement(
                                K.a,
                                {
                                  button: !0,
                                  href: '#/',
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                  className: 'px-3 mx-2',
                                },
                                l.a.createElement('span', null, 'XRP')
                              )
                            )
                          )
                        )
                      ),
                      labelWidth: 0,
                    })
                  )
                ),
                l.a.createElement(
                  X.a,
                  {
                    className: 'btn-primary py-4 mt-5 px-5 font-weight-bold font-size-lg',
                    fullWidth: !0,
                  },
                  'Buy Bitcoin - $785.34'
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: Object(S.a)('tab-item-wrapper', {
                    active: '2' === m,
                  }),
                  index: 2,
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'text-center p-3 p-lg-5',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'avatar-icon-wrapper rounded-circle m-0',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'd-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130',
                      },
                      l.a.createElement(Q.a, {
                        icon: ['fas', 'exclamation-triangle'],
                        className: 'd-flex align-self-center display-3',
                      })
                    )
                  ),
                  l.a.createElement(
                    'h4',
                    {
                      className: 'font-weight-bold text-warning line-height-sm px-4 mt-5',
                    },
                    'You will need to link a bank account in order to start selling crypto!'
                  ),
                  l.a.createElement(
                    'p',
                    {
                      className: 'mb-0 font-size-lg',
                    },
                    'Follow the profile verification steps to continue.'
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'pt-5',
                    },
                    l.a.createElement(
                      X.a,
                      {
                        className: 'btn-primary',
                      },
                      l.a.createElement(
                        'span',
                        {
                          className: 'btn-wrapper--label',
                        },
                        'Link Bank Account'
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      var Bn = t(206);

      function Hn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            P.a,
            {
              className: 'p-5 mb-5 bg-premium-dark',
            },
            l.a.createElement(
              'div',
              {
                className:
                  'bg-composed-wrapper--content d-block text-center text-xl-left d-xl-flex justify-content-between align-items-center',
              },
              l.a.createElement(
                'div',
                {
                  className: 'text-white',
                },
                l.a.createElement(
                  'h5',
                  {
                    className: 'display-4 font-weight-bold mb-3',
                  },
                  'Link your bank account to your bamburgh profile.'
                ),
                l.a.createElement(
                  'p',
                  {
                    className: 'font-size-lg opacity-7 mb-4',
                  },
                  'In order for you to be able to execute transactions, deposit or withdraw fiat you need to bank account you will need to link a valid bank account.'
                ),
                l.a.createElement(
                  X.a,
                  {
                    className: 'btn-success',
                  },
                  'Link Bank Account'
                ),
                l.a.createElement(
                  X.a,
                  {
                    className: 'ml-3 shadow-none btn-outline-secondary',
                    variant: 'text',
                  },
                  'Do it later'
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'ml-0 ml-xl-3 mt-5 mt-xl-0',
                },
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(Bn.a, {
                    circleRatio: 0.75,
                    styles: Object(Bn.b)({
                      textColor: 'rgba(255,255,255,.95)',
                      pathColor: 'rgba(255,255,255,.95)',
                      trailColor: 'rgba(255,255,255,.1)',
                      rotation: 0.625,
                    }),
                    value: 63,
                    strokeWidth: 10,
                    className: 'circular-progress-xl',
                  })
                )
              )
            )
          )
        );
      }
      var Pn = function () {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'div',
              {
                className: 'font-weight-bold text-first mb-1 text-uppercase font-size-xs',
              },
              'Last price'
            ),
            l.a.createElement(
              'div',
              {
                className: 'font-size-lg font-weight-bold line-height-1',
              },
              '$4297,34'
            )
          ),
          l.a.createElement(
            'div',
            {
              className: 'mx-5',
            },
            l.a.createElement(
              'div',
              {
                className: 'font-weight-bold text-danger mb-1 text-uppercase font-size-xs',
              },
              '24h change'
            ),
            l.a.createElement(
              'div',
              {
                className: 'font-size-lg font-weight-bold line-height-1',
              },
              '12.39%'
            )
          ),
          l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'div',
              {
                className: 'font-weight-bold text-success mb-1 text-uppercase font-size-xs',
              },
              '24h highest'
            ),
            l.a.createElement(
              'div',
              {
                className: 'font-size-lg font-weight-bold line-height-1',
              },
              '$4875,23'
            )
          )
        );
      };

      function Un() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            O.d,
            {
              titleHeading: 'Buy / Sell',
              titleDescription: 'Use these examples to create crypto exchanges pages.',
            },
            l.a.createElement(Pn, null)
          ),
          l.a.createElement(G.a, null, l.a.createElement(Hn, null), l.a.createElement(In, null))
        );
      }
      var Rn = t(304),
        Ln = t.n(Rn),
        Xn = t(305),
        Wn = t.n(Xn),
        Jn = t(306),
        Qn = t.n(Jn),
        Gn = t(307),
        Vn = t.n(Gn);

      function Kn() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            {
              className: 'mb-spacing-6-x2',
            },
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 6,
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 6,
                  lg: 12,
                  xl: 6,
                },
                l.a.createElement(
                  P.a,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'p-4',
                    },
                    l.a.createElement(
                      H.a,
                      {
                        container: !0,
                        spacing: 0,
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 3,
                        },
                        l.a.createElement('img', {
                          alt: '...',
                          className: 'img-fluid',
                          style: {
                            minHeight: '100px',
                            maxHeight: '150px',
                          },
                          src: Ln.a,
                        })
                      ),
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 9,
                          className: 'd-flex align-items-center',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-size-lg font-weight-bold mb-1',
                            },
                            'Informations'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'opacity-7 font-size-md mb-0',
                            },
                            'Acccess this page in order to manage and customize all aspects of your profile data and accounts.'
                          )
                        )
                      )
                    )
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  }),
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className:
                        'px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center',
                    },
                    l.a.createElement('div', null, 'Manage account'),
                    l.a.createElement(Q.a, {
                      icon: ['fas', 'chevron-right'],
                    })
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 6,
                  lg: 12,
                  xl: 6,
                },
                l.a.createElement(
                  P.a,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'p-4',
                    },
                    l.a.createElement(
                      H.a,
                      {
                        container: !0,
                        spacing: 0,
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 3,
                        },
                        l.a.createElement('img', {
                          alt: '...',
                          className: 'img-fluid',
                          style: {
                            minHeight: '100px',
                            maxHeight: '150px',
                          },
                          src: Wn.a,
                        })
                      ),
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 9,
                          className: 'd-flex align-items-center',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-size-lg font-weight-bold mb-1',
                            },
                            'Account Settings'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'opacity-7 font-size-md mb-0',
                            },
                            'Control everything related to your profile and trading accounts as shown in this page.'
                          )
                        )
                      )
                    )
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  }),
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className:
                        'px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center',
                    },
                    l.a.createElement('div', null, 'Manage settings'),
                    l.a.createElement(Q.a, {
                      icon: ['fas', 'chevron-right'],
                    })
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 6,
                  lg: 12,
                  xl: 6,
                },
                l.a.createElement(
                  P.a,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'p-4',
                    },
                    l.a.createElement(
                      H.a,
                      {
                        container: !0,
                        spacing: 0,
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 3,
                        },
                        l.a.createElement('img', {
                          alt: '...',
                          className: 'img-fluid',
                          style: {
                            minHeight: '100px',
                            maxHeight: '150px',
                          },
                          src: Qn.a,
                        })
                      ),
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 9,
                          className: 'd-flex align-items-center',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-size-lg font-weight-bold mb-1',
                            },
                            'Crypto Balance'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'opacity-7 font-size-md mb-0',
                            },
                            'You can view, manage and customize your wallets and balances from this wallets page.'
                          )
                        )
                      )
                    )
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  }),
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className:
                        'px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center',
                    },
                    l.a.createElement('div', null, 'Manage wallets'),
                    l.a.createElement(Q.a, {
                      icon: ['fas', 'chevron-right'],
                    })
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  md: 6,
                  lg: 12,
                  xl: 6,
                },
                l.a.createElement(
                  P.a,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'p-4',
                    },
                    l.a.createElement(
                      H.a,
                      {
                        container: !0,
                        spacing: 0,
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 3,
                        },
                        l.a.createElement('img', {
                          alt: '...',
                          className: 'img-fluid',
                          style: {
                            minHeight: '100px',
                            maxHeight: '150px',
                          },
                          src: Vn.a,
                        })
                      ),
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 9,
                          className: 'd-flex align-items-center',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-size-lg font-weight-bold mb-1',
                            },
                            'Profile Verification'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'opacity-7 font-size-md mb-0',
                            },
                            'Complete your profile verifications to take full advantage of your account right away.'
                          )
                        )
                      )
                    )
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  }),
                  l.a.createElement(
                    'a',
                    {
                      href: '#/',
                      onClick: function (e) {
                        return e.preventDefault();
                      },
                      className:
                        'px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center',
                    },
                    l.a.createElement('div', null, 'Complete verifications'),
                    l.a.createElement(Q.a, {
                      icon: ['fas', 'chevron-right'],
                    })
                  )
                )
              )
            )
          )
        );
      }
      var qn = t(180),
        Zn = t.n(qn),
        Yn = t(309),
        _n = t.n(Yn),
        $n = t(310),
        el = t.n($n),
        al = t(311),
        tl = t.n(al),
        nl = t(312),
        ll = t.n(nl),
        rl = t(308),
        cl = t.n(rl);

      function il() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            P.a,
            {
              className: 'card-box',
            },
            l.a.createElement(
              H.a,
              {
                container: !0,
                spacing: 0,
              },
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  xl: 6,
                },
                l.a.createElement(
                  'div',
                  {
                    className:
                      'hero-wrapper bg-composed-wrapper bg-grow-early h-100 rounded br-xl-right-0',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'flex-grow-1 w-100 d-flex align-items-center',
                    },
                    l.a.createElement('div', {
                      className: 'bg-composed-wrapper--image rounded br-xl-right-0',
                      style: {
                        backgroundImage: 'url(' + cl.a + ')',
                      },
                    }),
                    l.a.createElement('div', {
                      className:
                        'bg-composed-wrapper--bg bg-second opacity-5 rounded br-xl-right-0',
                    }),
                    l.a.createElement(
                      'div',
                      {
                        className: 'bg-composed-wrapper--content text-center p-5',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'text-white',
                        },
                        l.a.createElement(
                          'h1',
                          {
                            className: 'display-3 my-3 font-weight-bold',
                          },
                          'Bamburgh React Crypto Application with Material-UI PRO'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-lg mb-0 text-white-50',
                          },
                          'Easy to customize application inspired by the cryptocurrency products niche. Start working on your product today with this amazing, clean and feature-packed niche template.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'hero-footer pb-5',
                    },
                    l.a.createElement(
                      X.a,
                      {
                        href: '#/',
                        onClick: function (e) {
                          return e.preventDefault();
                        },
                        className:
                          'btn-success hover-scale-sm shadow-sm-dark px-4 font-weight-bold',
                      },
                      l.a.createElement(
                        'span',
                        {
                          className: 'btn-wrapper--label',
                        },
                        'Continue reading'
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                H.a,
                {
                  item: !0,
                  xl: 6,
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'card-tr-actions',
                  },
                  l.a.createElement(
                    Tn.a,
                    {
                      title: 'Send Message',
                      placement: 'top',
                      arrow: !0,
                    },
                    l.a.createElement(
                      X.a,
                      {
                        size: 'small',
                        className: 'btn-neutral-dark d-40 p-0 btn-icon',
                      },
                      l.a.createElement(
                        'span',
                        {
                          className: 'btn-wrapper--icon',
                        },
                        l.a.createElement(Q.a, {
                          icon: ['far', 'envelope'],
                        })
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'div',
                  {
                    className: 'text-center pt-4',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'avatar-icon-wrapper rounded-circle m-0',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-block p-0 avatar-icon-wrapper m-0 d-90',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'rounded-circle overflow-hidden',
                        },
                        l.a.createElement('img', {
                          alt: '...',
                          className: 'img-fluid',
                          src: Zn.a,
                        })
                      )
                    )
                  ),
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'badge badge-neutral-success my-2 text-success font-size-sm px-4 py-1 h-auto',
                      },
                      'Online'
                    )
                  ),
                  l.a.createElement(
                    'h3',
                    {
                      className: 'font-weight-bold mt-3',
                    },
                    'Lacie-Mae Mckay'
                  ),
                  l.a.createElement(
                    'p',
                    {
                      className: 'mb-0 text-black-50',
                    },
                    'Senior Frontend Developer at ',
                    l.a.createElement('b', null, 'Google Inc.')
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'pt-3',
                    },
                    l.a.createElement(
                      Tn.a,
                      {
                        title: 'Github',
                      },
                      l.a.createElement(
                        X.a,
                        {
                          className: 'btn-github d-50 m-2 p-0',
                        },
                        l.a.createElement(
                          'span',
                          {
                            className: 'btn-wrapper--icon',
                          },
                          l.a.createElement(Q.a, {
                            icon: ['fab', 'github'],
                            className: 'font-size-lg',
                          })
                        )
                      )
                    ),
                    l.a.createElement(
                      X.a,
                      {
                        className: 'btn-instagram d-50 m-2 p-0',
                        id: 'btnInstagramTooltip',
                      },
                      l.a.createElement(
                        'span',
                        {
                          className: 'btn-wrapper--icon',
                        },
                        l.a.createElement(Q.a, {
                          icon: ['fab', 'instagram'],
                          className: 'font-size-lg',
                        })
                      )
                    ),
                    l.a.createElement(
                      X.a,
                      {
                        className: 'btn-google d-50 m-2 p-0',
                        id: 'btnGoogleTooltip',
                      },
                      l.a.createElement(
                        'span',
                        {
                          className: 'btn-wrapper--icon',
                        },
                        l.a.createElement(Q.a, {
                          icon: ['fab', 'google'],
                          className: 'font-size-lg',
                        })
                      )
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'd-flex p-4 bg-secondary card-footer mt-4 flex-wrap',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'w-50 p-2',
                      },
                      l.a.createElement(
                        X.a,
                        {
                          href: '#/',
                          fullWidth: !0,
                          onClick: function (e) {
                            return e.preventDefault();
                          },
                          variant: 'outlined',
                          className: 'card card-box d-block text-left p-3 text-success',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(_n.a, {
                            className: 'h1 d-block my-2 text-success',
                          }),
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-weight-bold font-size-md text-black',
                            },
                            'Projects'
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-size-md mb-1 text-black opacity-8',
                            },
                            'Newest tasks'
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'w-50 p-2',
                      },
                      l.a.createElement(
                        X.a,
                        {
                          href: '#/',
                          fullWidth: !0,
                          onClick: function (e) {
                            return e.preventDefault();
                          },
                          variant: 'outlined',
                          className: 'card card-box d-block text-left p-3 text-danger',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(el.a, {
                            className: 'h1 d-block my-2 text-danger',
                          }),
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-weight-bold font-size-md text-black',
                            },
                            'Helpdesk'
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-size-md mb-1 text-black opacity-8',
                            },
                            'Tickets overview'
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'w-50 p-2',
                      },
                      l.a.createElement(
                        X.a,
                        {
                          href: '#/',
                          fullWidth: !0,
                          onClick: function (e) {
                            return e.preventDefault();
                          },
                          variant: 'outlined',
                          className: 'card card-box d-block text-left p-3 text-warning',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(tl.a, {
                            className: 'h1 d-block my-2 text-warning',
                          }),
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-weight-bold font-size-md text-black',
                            },
                            'CRM UI'
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-size-md mb-1 text-black opacity-8',
                            },
                            'Daily operations'
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'w-50 p-2',
                      },
                      l.a.createElement(
                        X.a,
                        {
                          href: '#/',
                          fullWidth: !0,
                          onClick: function (e) {
                            return e.preventDefault();
                          },
                          variant: 'outlined',
                          className: 'card card-box d-block text-left p-3 text-first',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(ll.a, {
                            className: 'h1 d-block my-2 text-first',
                          }),
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-weight-bold font-size-md text-black',
                            },
                            'Customers'
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-size-md mb-1 text-black opacity-8',
                            },
                            'Manage data'
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      var sl = t(709),
        ol = t(207),
        ml = t.n(ol),
        dl = t(313),
        ul = t.n(dl),
        pl = t(314),
        hl = t.n(pl),
        bl = t(315),
        fl = t.n(bl),
        El = t(316),
        gl = t.n(El),
        vl = function () {
          var e = Object(n.useState)(!1),
            a = Object(v.a)(e, 2),
            t = a[0],
            r = a[1],
            c = function () {
              return r(!t);
            };
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              X.a,
              {
                onClick: c,
                variant: 'contained',
                color: 'primary',
              },
              l.a.createElement(
                'span',
                {
                  className: 'btn-wrapper--icon',
                },
                l.a.createElement(Q.a, {
                  icon: ['far', 'eye'],
                })
              ),
              l.a.createElement(
                'span',
                {
                  className: 'btn-wrapper--label',
                },
                'Team Members'
              )
            ),
            l.a.createElement(
              sl.a,
              {
                scroll: 'body',
                maxWidth: 'lg',
                open: t,
                onClose: c,
                classes: {
                  paper: 'border-0 bg-transparent',
                },
              },
              l.a.createElement(
                H.a,
                {
                  container: !0,
                  spacing: 0,
                },
                l.a.createElement(
                  H.a,
                  {
                    item: !0,
                    lg: 5,
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'bg-white rounded-left',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'p-4 text-center',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'avatar-icon-wrapper rounded-circle mx-auto',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className:
                              'd-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first',
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'rounded-circle border-3 border-white overflow-hidden',
                            },
                            l.a.createElement('img', {
                              alt: '...',
                              className: 'img-fluid',
                              src: hl.a,
                            })
                          )
                        )
                      ),
                      l.a.createElement(
                        'h4',
                        {
                          className: 'font-size-lg font-weight-bold my-2',
                        },
                        'Marion Devine'
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'text-center my-4',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'badge-pill badge badge-neutral-first text-first mx-1',
                          },
                          'Web developer'
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'badge-pill badge badge-neutral-warning text-warning mx-1',
                          },
                          'Javascript'
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'badge-pill badge badge-neutral-danger text-danger mx-1',
                          },
                          'Angular'
                        )
                      ),
                      l.a.createElement(
                        'p',
                        {
                          className: 'text-muted mb-4',
                        },
                        'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.'
                      ),
                      l.a.createElement('div', {
                        className: 'divider my-4',
                      }),
                      l.a.createElement(
                        H.a,
                        {
                          container: !0,
                          spacing: 6,
                        },
                        l.a.createElement(
                          H.a,
                          {
                            item: !0,
                            lg: 6,
                          },
                          l.a.createElement(
                            'span',
                            {
                              className: 'opacity-6 pb-2',
                            },
                            'Current month'
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'd-flex align-items-center justify-content-center',
                            },
                            l.a.createElement(
                              'span',
                              {
                                className: 'font-weight-bold font-size-lg',
                              },
                              l.a.createElement(
                                'small',
                                {
                                  className: 'opacity-6 pr-1',
                                },
                                '$'
                              ),
                              '46,362'
                            ),
                            l.a.createElement(
                              'div',
                              {
                                className: 'badge badge-neutral-danger ml-2 text-danger',
                              },
                              '-8%'
                            )
                          )
                        ),
                        l.a.createElement(
                          H.a,
                          {
                            item: !0,
                            lg: 6,
                          },
                          l.a.createElement(
                            'span',
                            {
                              className: 'opacity-6 pb-2',
                            },
                            'Last year'
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'd-flex align-items-center justify-content-center',
                            },
                            l.a.createElement(
                              'span',
                              {
                                className: 'font-weight-bold font-size-lg',
                              },
                              l.a.createElement(
                                'small',
                                {
                                  className: 'opacity-6 pr-1',
                                },
                                '$'
                              ),
                              '34,546'
                            ),
                            l.a.createElement(
                              'div',
                              {
                                className: 'badge badge-neutral-success text-success ml-2',
                              },
                              '+13%'
                            )
                          )
                        )
                      ),
                      l.a.createElement('div', {
                        className: 'divider my-4',
                      }),
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'font-weight-bold text-uppercase text-black-50 text-center mb-3',
                        },
                        'Team members'
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'avatar-wrapper-overlap d-flex justify-content-center mb-3',
                        },
                        l.a.createElement(
                          Tn.a,
                          {
                            title: 'Chelsey Delaney',
                            classes: {
                              tooltip: 'tooltip-danger',
                            },
                            arrow: !0,
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'avatar-icon-wrapper',
                              id: 'DelaneyTooltip1',
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'avatar-icon',
                              },
                              l.a.createElement('img', {
                                alt: '...',
                                src: ml.a,
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          Tn.a,
                          {
                            title: 'Laibah Santos',
                            classes: {
                              tooltip: 'tooltip-first',
                            },
                            arrow: !0,
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'avatar-icon-wrapper',
                              id: 'SantosTooltip1',
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'avatar-icon',
                              },
                              l.a.createElement('img', {
                                alt: '...',
                                src: Zn.a,
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          Tn.a,
                          {
                            title: 'Ksawery Weber',
                            classes: {
                              tooltip: 'tooltip-second',
                            },
                            arrow: !0,
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'avatar-icon-wrapper',
                              id: 'WeberTooltip1',
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'avatar-icon',
                              },
                              l.a.createElement('img', {
                                alt: '...',
                                src: ml.a,
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          Tn.a,
                          {
                            title: 'Killian Magana',
                            classes: {
                              tooltip: 'tooltip-info',
                            },
                            arrow: !0,
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'avatar-icon-wrapper',
                              id: 'MaganaTooltip1',
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'avatar-icon',
                              },
                              l.a.createElement('img', {
                                alt: '...',
                                src: ul.a,
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          Tn.a,
                          {
                            title: 'Kean Banks',
                            classes: {
                              tooltip: 'tooltip-success',
                            },
                            arrow: !0,
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'avatar-icon-wrapper',
                              id: 'BanksTooltip1',
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'avatar-icon',
                              },
                              l.a.createElement('img', {
                                alt: '...',
                                src: fl.a,
                              })
                            )
                          )
                        )
                      ),
                      l.a.createElement('div', {
                        className: 'divider my-4',
                      }),
                      l.a.createElement(
                        X.a,
                        {
                          className: 'btn-outline-first mt-2',
                        },
                        'View complete profile'
                      )
                    )
                  )
                ),
                l.a.createElement(
                  H.a,
                  {
                    item: !0,
                    lg: 7,
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'hero-wrapper bg-composed-wrapper h-100 rounded-right',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'flex-grow-1 w-100 d-flex align-items-end',
                      },
                      l.a.createElement('div', {
                        className:
                          'bg-composed-wrapper--image rounded-right opacity-9 bg-composed-filter-rm',
                        style: {
                          backgroundImage: 'url(' + gl.a + ')',
                        },
                      }),
                      l.a.createElement(
                        'div',
                        {
                          className: 'bg-composed-wrapper--content text-center p-5',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'text-white mt-3',
                          },
                          l.a.createElement(
                            'h1',
                            {
                              className: 'display-3 my-3 font-weight-bold',
                            },
                            'Wonderful serenity has possession'
                          ),
                          l.a.createElement(
                            'p',
                            {
                              className: 'font-size-lg mb-0 text-white opacity-7',
                            },
                            'All components from the General dashboard template can be used in the individual applications pages, without modifications.'
                          ),
                          l.a.createElement('div', {
                            className:
                              'divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25',
                          }),
                          l.a.createElement(
                            'div',
                            null,
                            l.a.createElement(
                              X.a,
                              {
                                component: 'a',
                                href: '#/',
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                                size: 'large',
                                className: 'btn-success btn-pill',
                              },
                              l.a.createElement(
                                'span',
                                {
                                  className: 'btn-wrapper--icon',
                                },
                                l.a.createElement(Q.a, {
                                  icon: ['far', 'envelope'],
                                })
                              ),
                              l.a.createElement(
                                'span',
                                {
                                  className: 'btn-wrapper--label',
                                },
                                'Get in touch'
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };

      function xl() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            O.d,
            {
              titleHeading: 'My Profile',
              titleDescription: 'Manage all aspects of your profile data using this example page.',
            },
            l.a.createElement(vl, null)
          ),
          l.a.createElement(G.a, null, l.a.createElement(Kn, null), l.a.createElement(il, null))
        );
      }
      var wl = t(710);

      function Nl() {
        var e = Object(n.useState)('1'),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = function (e) {
            t !== e && r(e);
          },
          i = Object(n.useState)(!1),
          s = Object(v.a)(i, 2),
          o = s[0],
          m = s[1],
          d = Object(n.useState)(!1),
          u = Object(v.a)(d, 2),
          p = u[0],
          h = u[1],
          b = Object(n.useState)(''),
          f = Object(v.a)(b, 2),
          E = f[0],
          g = f[1];
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            P.a,
            null,
            l.a.createElement(
              'div',
              {
                className:
                  'card-header d-flex align-items-center justify-content-between card-header-alt p-0',
              },
              l.a.createElement(
                V.a,
                {
                  component: 'div',
                  className:
                    'w-100 nav-line justify-content-center d-flex nav-line-alt nav-tabs-primary',
                },
                l.a.createElement(
                  K.a,
                  {
                    button: !0,
                    className: 'p-4 font-size-md rounded-0',
                    selected: '1' === t,
                    onClick: function () {
                      c('1');
                    },
                  },
                  l.a.createElement(
                    'span',
                    {
                      className: 'font-weight-bold font-size-sm text-uppercase',
                    },
                    'Personal details'
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  })
                ),
                l.a.createElement(
                  K.a,
                  {
                    button: !0,
                    className: 'p-4 font-size-md rounded-0',
                    selected: '2' === t,
                    onClick: function () {
                      c('2');
                    },
                  },
                  l.a.createElement(
                    'span',
                    {
                      className: 'font-weight-bold font-size-sm text-uppercase',
                    },
                    'Settings'
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  })
                ),
                l.a.createElement(
                  K.a,
                  {
                    button: !0,
                    className: 'p-4 font-size-md rounded-0',
                    selected: '3' === t,
                    onClick: function () {
                      c('3');
                    },
                  },
                  l.a.createElement(
                    'span',
                    {
                      className: 'font-weight-bold font-size-sm text-uppercase',
                    },
                    'Social Accounts'
                  ),
                  l.a.createElement('div', {
                    className: 'divider',
                  })
                )
              )
            ),
            l.a.createElement(
              'div',
              {
                className: 'px-0 py-0 py-lg-4',
              },
              l.a.createElement(
                'div',
                {
                  className: Object(S.a)('tab-item-wrapper', {
                    active: '1' === t,
                  }),
                  index: 1,
                },
                l.a.createElement(
                  G.a,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-uppercase font-weight-bold text-primary pt-4 font-size-sm',
                    },
                    'General'
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'py-4',
                    },
                    l.a.createElement(
                      H.a,
                      {
                        container: !0,
                        spacing: 6,
                      },
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 6,
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'mb-4',
                          },
                          l.a.createElement(
                            'label',
                            {
                              className: 'font-weight-bold mb-2',
                            },
                            'First Name'
                          ),
                          l.a.createElement(Ae.a, {
                            variant: 'outlined',
                            fullWidth: !0,
                            placeholder: 'First name...',
                          })
                        ),
                        l.a.createElement(
                          'label',
                          {
                            className: 'font-weight-bold mb-2',
                          },
                          'Birthday'
                        ),
                        l.a.createElement(
                          H.a,
                          {
                            container: !0,
                            spacing: 6,
                          },
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              md: 4,
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'mb-4',
                              },
                              l.a.createElement(Ae.a, {
                                variant: 'outlined',
                                fullWidth: !0,
                                placeholder: 'Day...',
                              })
                            )
                          ),
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              md: 4,
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'mb-4',
                              },
                              l.a.createElement(Ae.a, {
                                variant: 'outlined',
                                fullWidth: !0,
                                placeholder: 'Month...',
                              })
                            )
                          ),
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              md: 4,
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'mb-4',
                              },
                              l.a.createElement(Ae.a, {
                                variant: 'outlined',
                                fullWidth: !0,
                                placeholder: 'Year...',
                              })
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        H.a,
                        {
                          item: !0,
                          md: 6,
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'mb-4',
                          },
                          l.a.createElement(
                            'label',
                            {
                              className: 'font-weight-bold mb-2',
                            },
                            'Last Name'
                          ),
                          l.a.createElement(Ae.a, {
                            variant: 'outlined',
                            fullWidth: !0,
                            placeholder: 'Last name...',
                          })
                        ),
                        l.a.createElement(
                          'label',
                          {
                            className: 'font-weight-bold mb-2',
                          },
                          'Mobile phone'
                        ),
                        l.a.createElement(
                          H.a,
                          {
                            container: !0,
                            spacing: 6,
                          },
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              md: 4,
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'mb-4',
                              },
                              l.a.createElement(Ae.a, {
                                variant: 'outlined',
                                fullWidth: !0,
                                placeholder: 'Area...',
                              })
                            )
                          ),
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              md: 8,
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'mb-4',
                              },
                              l.a.createElement(Ae.a, {
                                variant: 'outlined',
                                fullWidth: !0,
                                placeholder: 'Number...',
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider mb-4',
                }),
                l.a.createElement(
                  G.a,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-uppercase font-weight-bold text-primary font-size-sm pb-4',
                    },
                    'Location'
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      container: !0,
                      spacing: 6,
                    },
                    l.a.createElement(
                      H.a,
                      {
                        item: !0,
                        md: 4,
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'mb-4',
                        },
                        l.a.createElement(
                          'label',
                          {
                            className: 'font-weight-bold mb-2',
                          },
                          'Postal Code'
                        ),
                        l.a.createElement(Ae.a, {
                          variant: 'outlined',
                          fullWidth: !0,
                          placeholder: 'Postal code...',
                        })
                      )
                    ),
                    l.a.createElement(
                      H.a,
                      {
                        item: !0,
                        md: 4,
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'mb-4',
                        },
                        l.a.createElement(
                          'label',
                          {
                            className: 'font-weight-bold mb-2',
                          },
                          'Country'
                        ),
                        l.a.createElement(
                          Ie.a,
                          {
                            fullWidth: !0,
                            variant: 'outlined',
                            size: 'small',
                            value: E,
                            onChange: function (e) {
                              g(e.target.value);
                            },
                            labelWidth: 0,
                          },
                          l.a.createElement(
                            Be.a,
                            {
                              className: 'mx-2',
                              value: 0,
                            },
                            'Switzerland'
                          ),
                          l.a.createElement(
                            Be.a,
                            {
                              className: 'mx-2',
                              value: 10,
                            },
                            'United Kingdom'
                          ),
                          l.a.createElement(
                            Be.a,
                            {
                              className: 'mx-2',
                              value: 20,
                            },
                            'Spain'
                          ),
                          l.a.createElement(
                            Be.a,
                            {
                              className: 'mx-2',
                              value: 30,
                            },
                            'Portugal'
                          ),
                          l.a.createElement(
                            Be.a,
                            {
                              className: 'mx-2',
                              value: 40,
                            },
                            'China'
                          ),
                          l.a.createElement(
                            Be.a,
                            {
                              className: 'mx-2',
                              value: 50,
                            },
                            'Germany'
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      H.a,
                      {
                        item: !0,
                        md: 4,
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'mb-4',
                        },
                        l.a.createElement(
                          'label',
                          {
                            className: 'font-weight-bold mb-2',
                          },
                          'City'
                        ),
                        l.a.createElement(Ae.a, {
                          variant: 'outlined',
                          fullWidth: !0,
                          placeholder: 'City...',
                        })
                      )
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'mb-4',
                    },
                    l.a.createElement(
                      'label',
                      {
                        className: 'font-weight-bold mb-2',
                      },
                      'Address'
                    ),
                    l.a.createElement(Ae.a, {
                      multiline: !0,
                      variant: 'outlined',
                      fullWidth: !0,
                      placeholder: 'Address...',
                    })
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider mt-5 mb-4',
                }),
                l.a.createElement(
                  G.a,
                  {
                    className: 'd-flex align-items-center justify-content-end',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'py-4',
                    },
                    l.a.createElement(
                      X.a,
                      {
                        size: 'large',
                        className: 'btn-success font-weight-bold',
                      },
                      'Save details'
                    )
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: Object(S.a)('tab-item-wrapper', {
                    active: '2' === t,
                  }),
                  index: 2,
                },
                l.a.createElement(
                  G.a,
                  {
                    className: 'py-3',
                  },
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'card-header d-flex align-items-center bg-transparent card-header-alt px-0 pb-4',
                      },
                      l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(
                          'h6',
                          {
                            className: 'font-weight-bold font-size-xl mb-1 text-black',
                          },
                          'Account'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'text-black-50 mb-0',
                          },
                          'Manage your account settings from the section below.'
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    V.a,
                    {
                      className: 'mb-4 list-group-bordered',
                    },
                    l.a.createElement(
                      K.a,
                      {
                        className: 'd-flex justify-content-between align-items-center py-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex align-items-center mr-4',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-weight-bold',
                            },
                            'Wallets Activity Alerts'
                          ),
                          l.a.createElement(
                            'span',
                            {
                              className: 'opacity-6 d-block',
                            },
                            'Enable SMS alerts for any wallets activities.'
                          )
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex align-items-center',
                        },
                        l.a.createElement(wl.a, {
                          checked: o,
                          onClick: function () {
                            m(!o);
                          },
                          className: 'switch-medium',
                        })
                      )
                    ),
                    l.a.createElement(
                      K.a,
                      {
                        className: 'd-flex justify-content-between align-items-center py-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex align-items-center mr-4',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-weight-bold',
                            },
                            'Require Login Pin Code'
                          ),
                          l.a.createElement(
                            'span',
                            {
                              className: 'opacity-6 d-block',
                            },
                            'Enable the requirement of PIN code for all login attempts.'
                          )
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex align-items-center',
                        },
                        l.a.createElement(wl.a, {
                          checked: p,
                          onClick: function () {
                            h(!p);
                          },
                          className: 'switch-medium',
                        })
                      )
                    )
                  ),
                  l.a.createElement(
                    V.a,
                    {
                      className: 'list-group-bordered',
                    },
                    l.a.createElement(
                      K.a,
                      {
                        className:
                          'd-block d-lg-flex justify-content-between align-items-center py-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex align-items-center mr-0 mr-md-4',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-weight-bold',
                            },
                            'Change Password'
                          ),
                          l.a.createElement(
                            'span',
                            {
                              className: 'opacity-6 d-block',
                            },
                            'You can change the password for your account using this dialog window.'
                          )
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-block d-md-flex mt-3 mt-lg-0 align-items-center',
                        },
                        l.a.createElement(
                          X.a,
                          {
                            size: 'small',
                            className: 'btn-warning text-nowrap',
                          },
                          'Change Password'
                        )
                      )
                    ),
                    l.a.createElement(
                      K.a,
                      {
                        className:
                          'd-block d-lg-flex justify-content-between align-items-center py-3',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-flex align-items-center mr-0 mr-md-4',
                        },
                        l.a.createElement(
                          'div',
                          null,
                          l.a.createElement(
                            'div',
                            {
                              className: 'font-weight-bold d-flex align-items-center',
                            },
                            'Two-Factor Authentication',
                            l.a.createElement(
                              'div',
                              {
                                className: 'badge badge-success text-uppercase ml-2',
                              },
                              'Enabled'
                            )
                          ),
                          l.a.createElement(
                            'span',
                            {
                              className: 'opacity-6 d-block',
                            },
                            'Enable the requirement of PIN code for all login attempts.'
                          )
                        )
                      ),
                      l.a.createElement(
                        'div',
                        {
                          className: 'd-block d-md-flex mt-3 mt-lg-0 align-items-center',
                        },
                        l.a.createElement(
                          X.a,
                          {
                            size: 'small',
                            selected: !0,
                            className: 'btn-primary',
                          },
                          'Disabled'
                        )
                      )
                    )
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-4',
                }),
                l.a.createElement(
                  G.a,
                  null,
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'card-header d-flex align-items-center bg-transparent card-header-alt px-0 pb-4',
                      },
                      l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(
                          'h6',
                          {
                            className: 'font-weight-bold font-size-xl mb-1 text-black',
                          },
                          'All Logs'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'text-black-50 mb-0',
                          },
                          'See your sign in activity logs below.'
                        )
                      )
                    ),
                    l.a.createElement(
                      R.a,
                      {
                        className: 'table table-sm table-bordered text-nowrap mb-4',
                      },
                      l.a.createElement(
                        'thead',
                        {
                          className: 'thead-light text-capitalize font-size-sm font-weight-bold',
                        },
                        l.a.createElement(
                          'tr',
                          null,
                          l.a.createElement(
                            'th',
                            {
                              className: 'text-left px-4',
                            },
                            'Browser'
                          ),
                          l.a.createElement(
                            'th',
                            {
                              className: 'text-left px-4',
                            },
                            'IP Address'
                          ),
                          l.a.createElement(
                            'th',
                            {
                              className: 'text-left px-4',
                            },
                            'Location'
                          ),
                          l.a.createElement(
                            'th',
                            {
                              className: 'text-left px-4',
                            },
                            'Date/Time'
                          ),
                          l.a.createElement('th', {
                            className: 'text-center',
                          })
                        )
                      ),
                      l.a.createElement(
                        'tbody',
                        null,
                        l.a.createElement(
                          'tr',
                          null,
                          l.a.createElement(
                            'td',
                            {
                              className: 'px-4',
                            },
                            'Chrome on Linux'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            '192.168.0.1'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            'San Francisco, USA'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            '19 Feb, 2020 | 11:22 PM'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-center',
                            },
                            l.a.createElement(
                              X.a,
                              {
                                className:
                                  'btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center',
                              },
                              l.a.createElement(Q.a, {
                                icon: ['fas', 'times'],
                                className: 'font-size-sm',
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          'tr',
                          null,
                          l.a.createElement(
                            'td',
                            {
                              className: 'px-4',
                            },
                            'Chrome on UbuntuOS'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            '192.168.0.1'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            'Madrid, Spain'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            '23 Feb, 2020 | 07:35 AM'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-center',
                            },
                            l.a.createElement(
                              X.a,
                              {
                                className:
                                  'btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center',
                              },
                              l.a.createElement(Q.a, {
                                icon: ['fas', 'times'],
                                className: 'font-size-sm',
                              })
                            )
                          )
                        ),
                        l.a.createElement(
                          'tr',
                          null,
                          l.a.createElement(
                            'td',
                            {
                              className: 'px-4',
                            },
                            'Edge on Windows'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            '192.168.0.1'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            'Bucharest, Romania'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-left px-4',
                            },
                            '25 Feb, 2020 | 08:49 AM'
                          ),
                          l.a.createElement(
                            'td',
                            {
                              className: 'text-center',
                            },
                            l.a.createElement(
                              X.a,
                              {
                                className:
                                  'btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center',
                              },
                              l.a.createElement(Q.a, {
                                icon: ['fas', 'times'],
                                className: 'font-size-sm',
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: Object(S.a)('tab-item-wrapper', {
                    active: '3' === t,
                  }),
                  index: 3,
                },
                l.a.createElement(
                  G.a,
                  {
                    className: 'py-3',
                  },
                  l.a.createElement(
                    'div',
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'card-header d-flex align-items-center bg-transparent card-header-alt px-0 pb-4',
                      },
                      l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(
                          'h6',
                          {
                            className: 'font-weight-bold font-size-xl mb-1 text-black',
                          },
                          'Connect to social accounts'
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'text-black-50 mb-0',
                          },
                          'You can connect your social accounts for faster logins.'
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold opacity-7 mb-3',
                      },
                      'Connected'
                    ),
                    l.a.createElement(
                      V.a,
                      {
                        className: 'mb-5 list-group-bordered',
                      },
                      l.a.createElement(
                        K.a,
                        {
                          className:
                            'd-block d-lg-flex justify-content-between align-items-center py-3',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'd-flex align-items-center mr-4',
                          },
                          l.a.createElement(
                            X.a,
                            {
                              component: 'a',
                              className:
                                'd-50 d-flex shadow-none p-0 align-items-center justify-content-center rounded-pill mr-3 font-size-lg border-0 btn-facebook',
                              href: '#/',
                              onClick: function (e) {
                                return e.preventDefault();
                              },
                            },
                            l.a.createElement(Q.a, {
                              icon: ['fab', 'facebook'],
                              className: 'font-size-xl',
                            })
                          ),
                          l.a.createElement(
                            'div',
                            null,
                            l.a.createElement(
                              'div',
                              {
                                className: 'd-block',
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'font-weight-bold',
                                },
                                l.a.createElement('b', null, 'Facebook'),
                                ' account connected'
                              ),
                              l.a.createElement(
                                'div',
                                {
                                  className: 'opacity-7',
                                },
                                'You can revoke access with one click.'
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'd-block d-md-flex mt-3 mt-lg-0 align-items-center',
                          },
                          l.a.createElement(
                            X.a,
                            {
                              className:
                                'btn-danger text-nowrap shadow-none font-weight-bold font-size-lg',
                            },
                            'Revoke Access'
                          )
                        )
                      ),
                      l.a.createElement(
                        K.a,
                        {
                          className:
                            'd-block d-lg-flex justify-content-between align-items-center py-3',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'd-flex align-items-center mr-4',
                          },
                          l.a.createElement(
                            X.a,
                            {
                              component: 'a',
                              className:
                                'd-50 d-flex shadow-none p-0 align-items-center justify-content-center rounded-pill mr-3 font-size-lg border-0 btn-twitter',
                              href: '#/',
                              onClick: function (e) {
                                return e.preventDefault();
                              },
                            },
                            l.a.createElement(Q.a, {
                              icon: ['fab', 'twitter'],
                              className: 'font-size-xl',
                            })
                          ),
                          l.a.createElement(
                            'div',
                            null,
                            l.a.createElement(
                              'div',
                              {
                                className: 'd-block',
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'font-weight-bold',
                                },
                                l.a.createElement('b', null, 'Twitter'),
                                ' account connected'
                              ),
                              l.a.createElement(
                                'div',
                                {
                                  className: 'opacity-7',
                                },
                                'You can revoke access with one click.'
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'd-block d-md-flex mt-3 mt-lg-0 align-items-center',
                          },
                          l.a.createElement(
                            X.a,
                            {
                              className:
                                'btn-danger text-nowrap shadow-none font-weight-bold font-size-lg',
                            },
                            'Revoke Access'
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'font-weight-bold opacity-7 mb-3',
                      },
                      'More Options'
                    ),
                    l.a.createElement(
                      V.a,
                      {
                        className: 'mb-4 list-group-bordered',
                      },
                      l.a.createElement(
                        K.a,
                        {
                          className:
                            'd-block d-lg-flex justify-content-between align-items-center py-3',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'd-flex align-items-center mr-4',
                          },
                          l.a.createElement(
                            X.a,
                            {
                              component: 'a',
                              className:
                                'd-50 d-flex shadow-none p-0 align-items-center justify-content-center rounded-pill mr-3 font-size-lg border-0 btn-google',
                              href: '#/',
                              onClick: function (e) {
                                return e.preventDefault();
                              },
                            },
                            l.a.createElement(Q.a, {
                              icon: ['fab', 'google'],
                              className: 'font-size-xl',
                            })
                          ),
                          l.a.createElement(
                            'div',
                            null,
                            l.a.createElement(
                              'div',
                              {
                                className: 'd-block',
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'font-weight-bold',
                                },
                                l.a.createElement('b', null, 'Google'),
                                ' account is not yet connected.'
                              ),
                              l.a.createElement(
                                'div',
                                {
                                  className: 'opacity-7',
                                },
                                'Click the Connect button to get started.'
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'd-block d-md-flex mt-3 mt-lg-0 align-items-center',
                          },
                          l.a.createElement(
                            X.a,
                            {
                              className: 'btn-light shadow-none font-weight-bold font-size-lg',
                            },
                            'Connect'
                          )
                        )
                      )
                    )
                  )
                ),
                l.a.createElement('div', {
                  className: 'divider my-4',
                }),
                l.a.createElement(
                  G.a,
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className:
                        'card-header d-flex align-items-center bg-transparent card-header-alt px-0 pb-2',
                    },
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        'h6',
                        {
                          className: 'font-weight-bold font-size-xl mb-1 text-black',
                        },
                        'Import Contacts'
                      ),
                      l.a.createElement(
                        'p',
                        {
                          className: 'text-black-50 mb-0',
                        },
                        'You can import your existing contacts from your favourite email providers.'
                      )
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'py-4',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex justify-content-start',
                      },
                      l.a.createElement(
                        'a',
                        {
                          href: '#/',
                          onClick: function (e) {
                            return e.preventDefault();
                          },
                          className: 'mr-4 mb-4 btn-input-select',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className:
                              'd-40 text-white d-flex align-items-center justify-content-center rounded-pill shadow-none bg-brand-google',
                          },
                          l.a.createElement(Q.a, {
                            icon: ['fab', 'google'],
                          })
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'font-weight-bold font-size-lg mt-2',
                          },
                          'Google'
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'opacity-6',
                          },
                          'Click to import'
                        )
                      ),
                      l.a.createElement(
                        'a',
                        {
                          href: '#/',
                          onClick: function (e) {
                            return e.preventDefault();
                          },
                          className: 'mr-4 mb-4 btn-input-select',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className:
                              'd-40 text-white d-flex align-items-center justify-content-center rounded-pill shadow-none bg-brand-twitter',
                          },
                          l.a.createElement(Q.a, {
                            icon: ['fab', 'twitter'],
                          })
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'font-weight-bold font-size-lg mt-2',
                          },
                          'Twitter'
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'opacity-6',
                          },
                          'Click to import'
                        )
                      ),
                      l.a.createElement(
                        'a',
                        {
                          href: '#/',
                          onClick: function (e) {
                            return e.preventDefault();
                          },
                          className: 'mr-4 mb-4 btn-input-select',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className:
                              'd-40 text-white d-flex align-items-center justify-content-center rounded-pill shadow-none bg-brand-facebook',
                          },
                          l.a.createElement(Q.a, {
                            icon: ['fab', 'facebook'],
                          })
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'font-weight-bold font-size-lg mt-2',
                          },
                          'Facebook'
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'opacity-6',
                          },
                          'Click to import'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      var yl = function () {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            X.a,
            {
              variant: 'text',
              className: 'btn-outline-danger font-weight-bold',
            },
            l.a.createElement(
              'span',
              {
                className: 'btn-wrapper--icon',
              },
              l.a.createElement(Q.a, {
                icon: ['fas', 'times'],
              })
            ),
            l.a.createElement(
              'span',
              {
                className: 'btn-wrapper--label',
              },
              'Close Account'
            )
          )
        );
      };

      function kl() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            O.d,
            {
              titleHeading: 'Settings',
              titleDescription: 'Manage your profile settings from this example page.',
            },
            l.a.createElement(yl, null)
          ),
          l.a.createElement(Nl, null)
        );
      }
      var Cl = t(116),
        Al = t.n(Cl),
        Sl = t(141),
        Ol = t.n(Sl);
      t(566);

      function jl() {
        var e = Object(n.useState)(''),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(''),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1],
          m = Object(n.useState)(''),
          u = Object(v.a)(m, 2),
          p = u[0],
          h = u[1],
          b = Object(n.useState)(!1),
          f = Object(v.a)(b, 2),
          E = f[0],
          g = f[1],
          w = Object(n.useState)(!1),
          N = Object(v.a)(w, 2),
          y = N[0],
          k = N[1],
          C = (function () {
            var e = Object(Te.a)(
              je.a.mark(function e(a, t) {
                return je.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return h(''), k(!0), (e.prev = 2), (e.next = 5), W.a.signIn(a, t);
                        case 5:
                          e.sent, g(!0), (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(2)), h(e.t0.message), k(!1);
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function (a, t) {
              return e.apply(this, arguments);
            };
          })();
        return (
          Object(n.useEffect)(function () {
            W.a
              .currentAuthenticatedUser()
              .then(function () {
                return g(!0);
              })
              .catch(function () {});
          }),
          l.a.createElement(
            l.a.Fragment,
            null,
            E &&
              l.a.createElement(x.a, {
                to: '/pro/home',
              }),
            l.a.createElement(
              'div',
              {
                className: 'app-wrapper min-vh-100 bg-white',
              },
              l.a.createElement(
                'div',
                {
                  className: 'app-main min-vh-100',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'app-content p-0',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'app-inner-content-layout--main',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'flex-grow-1 w-100 d-flex align-items-center',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'bg-composed-wrapper--content',
                        },
                        l.a.createElement(
                          H.a,
                          {
                            container: !0,
                            spacing: 0,
                            className: 'min-vh-100',
                          },
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              lg: 12,
                              xl: 12,
                              className: 'd-flex align-items-center',
                            },
                            l.a.createElement(
                              H.a,
                              {
                                item: !0,
                                md: 10,
                                lg: 8,
                                xl: 7,
                                className: 'mx-auto',
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'py-4',
                                },
                                l.a.createElement(
                                  'div',
                                  {
                                    className: 'text-center',
                                  },
                                  l.a.createElement(
                                    'h1',
                                    {
                                      className: 'display-4 mb-1 font-weight-bold',
                                    },
                                    'Login'
                                  ),
                                  l.a.createElement(
                                    'p',
                                    {
                                      className: 'font-size-lg mb-0 text-black-50',
                                    },
                                    'Fill in the fields below to login to your account'
                                  )
                                ),
                                l.a.createElement(
                                  'div',
                                  null,
                                  l.a.createElement(
                                    'form',
                                    {
                                      onSubmit: function (e) {
                                        C(t, s), e.preventDefault();
                                      },
                                    },
                                    l.a.createElement(
                                      'div',
                                      {
                                        className: 'mb-4',
                                      },
                                      l.a.createElement(Ae.a, {
                                        fullWidth: !0,
                                        variant: 'outlined',
                                        id: 'textfield-email',
                                        label: 'Email address',
                                        InputProps: {
                                          startAdornment: l.a.createElement(
                                            Mn.a,
                                            {
                                              position: 'start',
                                            },
                                            l.a.createElement(Al.a, null)
                                          ),
                                        },
                                        value: t,
                                        onChange: function (e) {
                                          r(e.target.value);
                                        },
                                      })
                                    ),
                                    l.a.createElement(
                                      'div',
                                      {
                                        className: 'mb-3',
                                      },
                                      l.a.createElement(Ae.a, {
                                        fullWidth: !0,
                                        variant: 'outlined',
                                        id: 'textfield-password',
                                        label: 'Password',
                                        type: 'password',
                                        InputProps: {
                                          startAdornment: l.a.createElement(
                                            Mn.a,
                                            {
                                              position: 'start',
                                            },
                                            l.a.createElement(Ol.a, null)
                                          ),
                                        },
                                        value: s,
                                        onChange: function (e) {
                                          o(e.target.value);
                                        },
                                      })
                                    ),
                                    l.a.createElement(
                                      'div',
                                      {
                                        className:
                                          'd-flex justify-content-between align-items-center font-size-md',
                                      },
                                      l.a.createElement(
                                        'div',
                                        null,
                                        l.a.createElement(
                                          d.b,
                                          {
                                            to: '/pro/recover',
                                            className: 'text-first',
                                          },
                                          'Recover password'
                                        )
                                      )
                                    ),
                                    p.length > 0 &&
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'text-center form-group mb-5 text-danger',
                                        },
                                        p
                                      ),
                                    l.a.createElement(
                                      'div',
                                      {
                                        className: 'text-center py-4',
                                      },
                                      l.a.createElement(
                                        X.a,
                                        {
                                          type: 'submit',
                                          className: 'btn-second font-weight-bold w-50 my-2',
                                          disabled: y,
                                        },
                                        'Sign in'
                                      )
                                    ),
                                    l.a.createElement(
                                      'div',
                                      {
                                        className: 'text-center text-black-50 mt-3',
                                      },
                                      "Don't have an account?",
                                      ' ',
                                      l.a.createElement(
                                        d.b,
                                        {
                                          className: 'text-first',
                                          to: '/pro/register',
                                        },
                                        'Sign up'
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }

      function Tl() {
        return l.a.createElement(l.a.Fragment, null, l.a.createElement(jl, null));
      }
      var zl = t(317),
        Dl = t.n(zl);

      function Ml() {
        var e = Object(n.useState)(''),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(''),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1],
          m = Object(n.useState)(''),
          u = Object(v.a)(m, 2),
          p = u[0],
          h = u[1],
          b = Object(n.useState)(''),
          f = Object(v.a)(b, 2),
          E = f[0],
          g = f[1],
          w = Object(n.useState)(''),
          N = Object(v.a)(w, 2),
          y = N[0],
          k = N[1],
          C = Object(n.useState)(!1),
          A = Object(v.a)(C, 2),
          S = A[0],
          O = A[1],
          j = Object(n.useState)(!1),
          T = Object(v.a)(j, 2),
          z = T[0],
          D = T[1],
          M = Object(n.useState)(!1),
          F = Object(v.a)(M, 2),
          I = F[0],
          B = F[1],
          P = (function () {
            var e = Object(Te.a)(
              je.a.mark(function e(a) {
                return je.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return k(''), D(!0), (e.prev = 2), (e.next = 5), W.a.forgotPassword(a);
                        case 5:
                          B(!0), D(!1), (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(2)), k(e.t0.message), D(!1);
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function (a) {
              return e.apply(this, arguments);
            };
          })(),
          U = (function () {
            var e = Object(Te.a)(
              je.a.mark(function e(a, t, n) {
                return je.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            k(''),
                            D(!0),
                            (e.prev = 2),
                            (e.next = 5),
                            W.a.forgotPasswordSubmit(a, t, n)
                          );
                        case 5:
                          O(!0), (e.next = 12);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(2)), k(e.t0.message), D(!1);
                        case 12:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 8]]
                );
              })
            );
            return function (a, t, n) {
              return e.apply(this, arguments);
            };
          })();
        return (
          Object(n.useEffect)(function () {
            W.a
              .currentAuthenticatedUser()
              .then(function () {
                return O(!0);
              })
              .catch(function () {});
          }),
          l.a.createElement(
            l.a.Fragment,
            null,
            S &&
              l.a.createElement(x.a, {
                to: '/pro/home',
              }),
            l.a.createElement(
              'div',
              {
                className: 'app-wrapper min-vh-100 bg-white',
              },
              l.a.createElement(
                'div',
                {
                  className: 'app-main min-vh-100',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'app-content p-0',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'app-inner-content-layout--main',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'flex-grow-1 w-100 d-flex align-items-center',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'bg-composed-wrapper--content',
                        },
                        l.a.createElement(
                          H.a,
                          {
                            container: !0,
                            spacing: 0,
                            className: 'min-vh-100',
                          },
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              lg: 12,
                              xl: 12,
                              className: 'd-flex align-items-center',
                            },
                            l.a.createElement(
                              H.a,
                              {
                                item: !0,
                                md: 10,
                                lg: 8,
                                xl: 7,
                                className: 'mx-auto',
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'py-4',
                                },
                                I
                                  ? l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'text-center',
                                        },
                                        l.a.createElement(
                                          'h1',
                                          {
                                            className: 'display-4 mb-1 font-weight-bold',
                                          },
                                          'Enter new password'
                                        ),
                                        l.a.createElement(
                                          'p',
                                          {
                                            className: 'font-size-lg mb-0 text-black-50',
                                          },
                                          'Enter the code that was emailed to you along with a new password'
                                        )
                                      ),
                                      l.a.createElement(
                                        'div',
                                        null,
                                        l.a.createElement(
                                          'form',
                                          {
                                            onSubmit: function (e) {
                                              U(s, t, p), e.preventDefault();
                                            },
                                          },
                                          l.a.createElement(
                                            'div',
                                            {
                                              className: 'mb-4',
                                            },
                                            l.a.createElement(Ae.a, {
                                              fullWidth: !0,
                                              variant: 'outlined',
                                              id: 'textfield-email',
                                              label: 'Code',
                                              InputProps: {
                                                startAdornment: l.a.createElement(
                                                  Mn.a,
                                                  {
                                                    position: 'start',
                                                  },
                                                  l.a.createElement(Dl.a, null)
                                                ),
                                              },
                                              value: t,
                                              onChange: function (e) {
                                                r(e.target.value);
                                              },
                                            })
                                          ),
                                          l.a.createElement(
                                            'div',
                                            {
                                              className: 'mb-4',
                                            },
                                            l.a.createElement(Ae.a, {
                                              fullWidth: !0,
                                              variant: 'outlined',
                                              id: 'textfield-password',
                                              label: 'Password',
                                              type: 'password',
                                              InputProps: {
                                                startAdornment: l.a.createElement(
                                                  Mn.a,
                                                  {
                                                    position: 'start',
                                                  },
                                                  l.a.createElement(Ol.a, null)
                                                ),
                                              },
                                              value: p,
                                              onChange: function (e) {
                                                h(e.target.value);
                                              },
                                            })
                                          ),
                                          l.a.createElement(
                                            'div',
                                            {
                                              className: 'mb-4',
                                            },
                                            l.a.createElement(Ae.a, {
                                              fullWidth: !0,
                                              variant: 'outlined',
                                              id: 'textfield-password',
                                              label: 'Confirm password',
                                              type: 'password',
                                              InputProps: {
                                                startAdornment: l.a.createElement(
                                                  Mn.a,
                                                  {
                                                    position: 'start',
                                                  },
                                                  l.a.createElement(Ol.a, null)
                                                ),
                                              },
                                              value: E,
                                              onChange: function (e) {
                                                g(e.target.value);
                                              },
                                            })
                                          ),
                                          y.length > 0 &&
                                            l.a.createElement(
                                              'div',
                                              {
                                                className:
                                                  'text-center form-group mb-5 text-danger',
                                              },
                                              y
                                            ),
                                          l.a.createElement(
                                            'div',
                                            {
                                              className: 'text-center py-4',
                                            },
                                            l.a.createElement(
                                              X.a,
                                              {
                                                type: 'submit',
                                                className: 'btn-second font-weight-bold w-50 my-2',
                                                disabled: z,
                                              },
                                              'Update Password'
                                            )
                                          )
                                        )
                                      )
                                    )
                                  : l.a.createElement(
                                      l.a.Fragment,
                                      null,
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'text-center',
                                        },
                                        l.a.createElement(
                                          'h1',
                                          {
                                            className: 'display-4 mb-1 font-weight-bold',
                                          },
                                          'Forgot your password?'
                                        ),
                                        l.a.createElement(
                                          'p',
                                          {
                                            className: 'font-size-lg mb-0 text-black-50',
                                          },
                                          'Fill in your email address below to reset your password'
                                        )
                                      ),
                                      l.a.createElement(
                                        'div',
                                        null,
                                        l.a.createElement(
                                          'form',
                                          {
                                            onSubmit: function (e) {
                                              P(s), e.preventDefault();
                                            },
                                          },
                                          l.a.createElement(
                                            'div',
                                            {
                                              className: 'mb-4',
                                            },
                                            l.a.createElement(Ae.a, {
                                              fullWidth: !0,
                                              variant: 'outlined',
                                              id: 'textfield-email',
                                              label: 'Email address',
                                              InputProps: {
                                                startAdornment: l.a.createElement(
                                                  Mn.a,
                                                  {
                                                    position: 'start',
                                                  },
                                                  l.a.createElement(Al.a, null)
                                                ),
                                              },
                                              value: s,
                                              onChange: function (e) {
                                                o(e.target.value);
                                              },
                                            })
                                          ),
                                          y.length > 0 &&
                                            l.a.createElement(
                                              'div',
                                              {
                                                className:
                                                  'text-center form-group mb-5 text-danger',
                                              },
                                              y
                                            ),
                                          l.a.createElement(
                                            'div',
                                            {
                                              className: 'text-center py-4',
                                            },
                                            l.a.createElement(
                                              X.a,
                                              {
                                                type: 'submit',
                                                className: 'btn-second font-weight-bold w-50 my-2',
                                                disabled: z,
                                              },
                                              'Reset Password'
                                            )
                                          ),
                                          l.a.createElement(
                                            'div',
                                            {
                                              className: 'text-center text-black-50 mt-3',
                                            },
                                            "Don't have an account?",
                                            ' ',
                                            l.a.createElement(
                                              d.b,
                                              {
                                                className: 'text-first',
                                                to: '/pro/register',
                                              },
                                              'Sign up'
                                            )
                                          )
                                        )
                                      )
                                    )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }

      function Fl() {
        return l.a.createElement(l.a.Fragment, null, l.a.createElement(Ml, null));
      }

      function Il() {
        var e = Object(n.useState)(''),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(''),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1],
          m = Object(n.useState)(''),
          u = Object(v.a)(m, 2),
          p = u[0],
          h = u[1],
          b = Object(n.useState)(''),
          f = Object(v.a)(b, 2),
          E = f[0],
          g = f[1],
          w = Object(n.useState)(''),
          N = Object(v.a)(w, 2),
          y = N[0],
          k = N[1],
          C = Object(n.useState)(!1),
          A = Object(v.a)(C, 2),
          S = A[0],
          O = A[1],
          j = Object(n.useState)(!1),
          T = Object(v.a)(j, 2),
          z = T[0],
          D = T[1],
          M = Object(n.useState)(!1),
          F = Object(v.a)(M, 2),
          I = F[0],
          B = F[1],
          P = (function () {
            var e = Object(Te.a)(
              je.a.mark(function e(a, t, n) {
                return je.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((D(!0), !(t.length < 6))) {
                            e.next = 5;
                            break;
                          }
                          return (
                            k('Password needs to be at least 6 characters long'),
                            D(!1),
                            e.abrupt('return')
                          );
                        case 5:
                          if (t === p) {
                            e.next = 9;
                            break;
                          }
                          return (
                            k('Your password confirmation does not match'),
                            D(!1),
                            e.abrupt('return')
                          );
                        case 9:
                          return (
                            k(''),
                            (e.prev = 10),
                            (e.next = 13),
                            W.a.signUp({
                              username: a,
                              password: t,
                              attributes: {
                                email: a,
                                name: n,
                              },
                            })
                          );
                        case 13:
                          O(!0), (e.next = 20);
                          break;
                        case 16:
                          (e.prev = 16), (e.t0 = e.catch(10)), k(e.t0.message), D(!1);
                        case 20:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[10, 16]]
                );
              })
            );
            return function (a, t, n) {
              return e.apply(this, arguments);
            };
          })();
        return (
          Object(n.useEffect)(function () {
            W.a
              .currentAuthenticatedUser()
              .then(function () {
                return B(!0);
              })
              .catch(function () {});
          }),
          l.a.createElement(
            l.a.Fragment,
            null,
            I &&
              l.a.createElement(x.a, {
                to: '/pro/home',
              }),
            l.a.createElement(
              'div',
              {
                className: 'app-wrapper min-vh-100 bg-white',
              },
              l.a.createElement(
                'div',
                {
                  className: 'app-main min-vh-100',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'app-content p-0',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'app-inner-content-layout--main',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'flex-grow-1 w-100 d-flex align-items-center',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'bg-composed-wrapper--content',
                        },
                        l.a.createElement(
                          H.a,
                          {
                            container: !0,
                            spacing: 0,
                            className: 'min-vh-100',
                          },
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              lg: 12,
                              xl: 12,
                              className: 'd-flex align-items-center',
                            },
                            l.a.createElement(
                              H.a,
                              {
                                item: !0,
                                md: 10,
                                lg: 8,
                                xl: 7,
                                className: 'mx-auto',
                              },
                              S
                                ? l.a.createElement(
                                    'div',
                                    {
                                      className: 'form-group mb-5 text-danger',
                                    },
                                    'Please verify your email address by clicking the link that has been sent to you.'
                                  )
                                : l.a.createElement(
                                    'form',
                                    {
                                      onSubmit: function (e) {
                                        P(t, s, E), e.preventDefault();
                                      },
                                    },
                                    l.a.createElement(
                                      'div',
                                      {
                                        className: 'py-4',
                                      },
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'text-center',
                                        },
                                        l.a.createElement(
                                          'h3',
                                          {
                                            className: 'display-4 mb-2 font-weight-bold',
                                          },
                                          'Chia Explorer Pro'
                                        ),
                                        l.a.createElement(
                                          'p',
                                          {
                                            className: 'font-size-lg mb-5 text-black-50',
                                          },
                                          'Sign up for Chia Explorer Pro to access exclusive benefits!'
                                        )
                                      ),
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'mb-3',
                                        },
                                        l.a.createElement(
                                          'label',
                                          {
                                            className: 'font-weight-bold mb-2',
                                          },
                                          'Name'
                                        ),
                                        l.a.createElement(Ae.a, {
                                          variant: 'outlined',
                                          size: 'small',
                                          fullWidth: !0,
                                          placeholder: 'Enter your first name',
                                          onChange: function (e) {
                                            g(e.target.value);
                                          },
                                        })
                                      ),
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'mb-3',
                                        },
                                        l.a.createElement(
                                          'label',
                                          {
                                            className: 'font-weight-bold mb-2',
                                          },
                                          'Email address'
                                        ),
                                        l.a.createElement(Ae.a, {
                                          variant: 'outlined',
                                          size: 'small',
                                          fullWidth: !0,
                                          placeholder: 'Enter your email address',
                                          type: 'email',
                                          onChange: function (e) {
                                            r(e.target.value);
                                          },
                                        })
                                      ),
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'mb-3',
                                        },
                                        l.a.createElement(
                                          'div',
                                          {
                                            className: 'd-flex justify-content-between',
                                          },
                                          l.a.createElement(
                                            'label',
                                            {
                                              className: 'font-weight-bold mb-2',
                                            },
                                            'Password'
                                          )
                                        ),
                                        l.a.createElement(Ae.a, {
                                          variant: 'outlined',
                                          size: 'small',
                                          fullWidth: !0,
                                          placeholder: 'Enter your password',
                                          type: 'password',
                                          onChange: function (e) {
                                            o(e.target.value);
                                          },
                                        })
                                      ),
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'mb-3',
                                        },
                                        l.a.createElement(
                                          'div',
                                          {
                                            className: 'd-flex justify-content-between',
                                          },
                                          l.a.createElement(
                                            'label',
                                            {
                                              className: 'font-weight-bold mb-2',
                                            },
                                            'Confirm Password'
                                          )
                                        ),
                                        l.a.createElement(Ae.a, {
                                          variant: 'outlined',
                                          size: 'small',
                                          fullWidth: !0,
                                          placeholder: 'Confirm your password',
                                          type: 'password',
                                          onChange: function (e) {
                                            h(e.target.value);
                                          },
                                        })
                                      ),
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'form-group mb-5',
                                        },
                                        'By clicking the ',
                                        l.a.createElement('strong', null, 'Create account'),
                                        ' ',
                                        'button below you agree to our terms of service and privacy statement.'
                                      ),
                                      y.length > 0 &&
                                        l.a.createElement(
                                          'div',
                                          {
                                            className: 'form-group mb-5 text-danger',
                                          },
                                          y
                                        ),
                                      l.a.createElement(
                                        X.a,
                                        {
                                          type: 'submit',
                                          size: 'large',
                                          fullWidth: !0,
                                          className: 'btn-primary mb-5',
                                          disabled: z,
                                        },
                                        'Create Account'
                                      ),
                                      l.a.createElement(
                                        'div',
                                        {
                                          className: 'form-group mb-5',
                                        },
                                        'If you already have an account then ',
                                        l.a.createElement(
                                          d.b,
                                          {
                                            className: 'text-first',
                                            to: '/pro/login',
                                          },
                                          'click here'
                                        ),
                                        ' to log in.'
                                      )
                                    )
                                  )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }

      function Bl() {
        return l.a.createElement(l.a.Fragment, null, l.a.createElement(Il, null));
      }
      var Hl = t(705);

      function Pl() {
        var e = Object(n.useState)({
            attributes: {
              name: '',
              email: '',
            },
          }),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(n.useState)(!1),
          i = Object(v.a)(c, 2),
          s = i[0],
          o = i[1];
        Object(n.useEffect)(function () {
          W.a
            .currentAuthenticatedUser()
            .then(function (e) {
              console.log(e), r(e);
            })
            .catch(function (e) {
              console.error(e), o(!0);
            });
        }, []);
        var m = t.attributes,
          u = m.name,
          p = (m.email, t.attributes['custom:free-tier-api-key']);
        return l.a.createElement(
          l.a.Fragment,
          null,
          '  ',
          s &&
            l.a.createElement(x.a, {
              to: '/pro/login',
            }),
          l.a.createElement(
            'div',
            {
              style: {
                width: '100px',
              },
            },
            l.a.createElement(Hl.a, {
              handleAuthStateChange: function () {
                return o(!0);
              },
              style: {
                backgroundColor: '#fff',
              },
            })
          ),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                'div',
                {
                  className: 'mb-spacing-6',
                },
                l.a.createElement(
                  P.a,
                  {
                    className: 'card-box',
                  },
                  l.a.createElement(
                    U.a,
                    null,
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement('p', null, 'Welcome back ', u)
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(
                        'p',
                        null,
                        'Your free tier public API key is ',
                        l.a.createElement('b', null, p)
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(
                        'p',
                        null,
                        l.a.createElement(
                          'b',
                          null,
                          'We are aware of an issue affecting the issuance of API keys for new users. This will be fixed in the coming days.'
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className: 'd-flex align-items-center justify-content-between',
                      },
                      l.a.createElement(
                        'p',
                        null,
                        'Please consult the ',
                        l.a.createElement(
                          d.b,
                          {
                            className: 'text-first',
                            to: '/api/v0.1',
                          },
                          'API documentation'
                        ),
                        ' for instructions on how to use this API key as well as the limits.'
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }

      function Ul() {
        return l.a.createElement(l.a.Fragment, null, l.a.createElement(Pl, null));
      }

      function Rl() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            {
              className: 'app-wrapper min-vh-100 bg-white',
            },
            l.a.createElement(
              'div',
              {
                className: 'app-main min-vh-100',
              },
              l.a.createElement(
                'div',
                {
                  className: 'app-content p-0',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'app-inner-content-layout--main',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'flex-grow-1 w-100 d-flex align-items-center',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'bg-composed-wrapper--content',
                      },
                      l.a.createElement(
                        H.a,
                        {
                          container: !0,
                          spacing: 0,
                          className: 'min-vh-100',
                        },
                        l.a.createElement(
                          H.a,
                          {
                            item: !0,
                            lg: 7,
                            xl: 6,
                            className: 'd-flex align-items-center',
                          },
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              md: 10,
                              lg: 8,
                              xl: 7,
                              className: 'mx-auto',
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'py-4',
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'text-center mb-5',
                                },
                                l.a.createElement(
                                  'h1',
                                  {
                                    className: 'display-4 mb-1 font-weight-bold',
                                  },
                                  'Recover Password'
                                ),
                                l.a.createElement(
                                  'p',
                                  {
                                    className: 'font-size-lg mb-0 text-black-50',
                                  },
                                  "Forgot your password? No worries, we're here to help!"
                                )
                              ),
                              l.a.createElement(
                                'div',
                                null,
                                l.a.createElement(Ae.a, {
                                  fullWidth: !0,
                                  variant: 'outlined',
                                  id: 'textfield-email',
                                  label: 'Email address',
                                  InputProps: {
                                    startAdornment: l.a.createElement(
                                      Mn.a,
                                      {
                                        position: 'start',
                                      },
                                      l.a.createElement(Al.a, null)
                                    ),
                                  },
                                })
                              ),
                              l.a.createElement(
                                'div',
                                {
                                  className: 'text-center mb-4',
                                },
                                l.a.createElement(
                                  X.a,
                                  {
                                    fullWidth: !0,
                                    className:
                                      'text-uppercase font-weight-bold font-size-sm mt-4 btn-primary',
                                  },
                                  'Send password'
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          H.a,
                          {
                            item: !0,
                            lg: 5,
                            xl: 6,
                            className: 'd-flex',
                          },
                          l.a.createElement(
                            'div',
                            {
                              className:
                                'hero-wrapper w-100 bg-composed-wrapper bg-happy-green min-vh-lg-100',
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'flex-grow-1 w-100 d-flex align-items-center',
                              },
                              l.a.createElement('div', {
                                className: 'bg-composed-wrapper--image opacity-7',
                                style: {
                                  backgroundImage: 'url(' + ne.a + ')',
                                },
                              }),
                              l.a.createElement('div', {
                                className: 'bg-composed-wrapper--bg bg-second opacity-7',
                              }),
                              l.a.createElement('div', {
                                className: 'bg-composed-wrapper--bg bg-premium-dark opacity-4',
                              }),
                              l.a.createElement(
                                'div',
                                {
                                  className: 'bg-composed-wrapper--content text-center p-5',
                                },
                                l.a.createElement(
                                  'div',
                                  {
                                    className: 'text-white px-0 px-lg-2 px-xl-4',
                                  },
                                  l.a.createElement(
                                    'h1',
                                    {
                                      className: 'display-3 mb-4 font-weight-bold',
                                    },
                                    'Bamburgh React Crypto Application with Material-UI PRO'
                                  ),
                                  l.a.createElement(
                                    'p',
                                    {
                                      className: 'font-size-lg mb-0 opacity-8',
                                    },
                                    'Easy to customize application inspired by the cryptocurrency products niche. Start working on your product today with this amazing, clean and feature-packed niche template.'
                                  ),
                                  l.a.createElement('div', {
                                    className:
                                      'divider mx-auto border-1 my-5 border-light opacity-2 rounded w-25',
                                  }),
                                  l.a.createElement(
                                    'div',
                                    null,
                                    l.a.createElement(
                                      X.a,
                                      {
                                        className:
                                          'btn-first px-5 font-size-sm font-weight-bold btn-animated-icon text-uppercase rounded shadow-none py-3 hover-scale-sm hover-scale-lg',
                                      },
                                      l.a.createElement(
                                        'span',
                                        {
                                          className: 'btn-wrapper--label',
                                        },
                                        'Members Login'
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            l.a.createElement(
                              'div',
                              {
                                className: 'hero-footer pb-4',
                              },
                              l.a.createElement(
                                V.a,
                                {
                                  component: 'div',
                                  className: 'nav-pills nav-neutral-secondary d-flex',
                                },
                                l.a.createElement(
                                  Tn.a,
                                  {
                                    title: 'Facebook',
                                    arrow: !0,
                                  },
                                  l.a.createElement(
                                    K.a,
                                    {
                                      component: 'a',
                                      button: !0,
                                      href: '#/',
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: 'font-size-lg text-white-50',
                                    },
                                    l.a.createElement(Q.a, {
                                      icon: ['fab', 'facebook'],
                                    })
                                  )
                                ),
                                l.a.createElement(
                                  Tn.a,
                                  {
                                    title: 'Twitter',
                                    arrow: !0,
                                  },
                                  l.a.createElement(
                                    K.a,
                                    {
                                      component: 'a',
                                      button: !0,
                                      href: '#/',
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: 'font-size-lg text-white-50',
                                    },
                                    l.a.createElement(Q.a, {
                                      icon: ['fab', 'twitter'],
                                    })
                                  )
                                ),
                                l.a.createElement(
                                  Tn.a,
                                  {
                                    title: 'Google',
                                    arrow: !0,
                                  },
                                  l.a.createElement(
                                    K.a,
                                    {
                                      component: 'a',
                                      button: !0,
                                      href: '#/',
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: 'font-size-lg text-white-50',
                                    },
                                    l.a.createElement(Q.a, {
                                      icon: ['fab', 'google'],
                                    })
                                  )
                                ),
                                l.a.createElement(
                                  Tn.a,
                                  {
                                    title: 'Instagram',
                                    arrow: !0,
                                  },
                                  l.a.createElement(
                                    K.a,
                                    {
                                      component: 'a',
                                      button: !0,
                                      href: '#/',
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                      className: 'font-size-lg text-white-50',
                                    },
                                    l.a.createElement(Q.a, {
                                      icon: ['fab', 'instagram'],
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }

      function Ll() {
        return l.a.createElement(l.a.Fragment, null, l.a.createElement(Rl, null));
      }
      var Xl = t(318),
        Wl = t.n(Xl),
        Jl = t(319),
        Ql = t.n(Jl);

      function Gl() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            {
              className: 'app-wrapper bg-white',
            },
            l.a.createElement(
              'div',
              {
                className: 'app-main',
              },
              l.a.createElement(
                'div',
                {
                  className: 'app-content p-0',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'app-inner-content-layout--main',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'flex-grow-1 w-100 d-flex align-items-center',
                    },
                    l.a.createElement(
                      'div',
                      {
                        className: 'bg-composed-wrapper--content',
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'hero-wrapper bg-composed-wrapper min-vh-100',
                        },
                        l.a.createElement(
                          'div',
                          {
                            className: 'flex-grow-1 w-100 d-flex align-items-center',
                          },
                          l.a.createElement(
                            H.a,
                            {
                              item: !0,
                              lg: 6,
                              md: 9,
                              className: 'px-4 px-lg-0 mx-auto text-center text-black',
                            },
                            l.a.createElement('img', {
                              src: Wl.a,
                              className: 'w-50 mx-auto d-block my-5 img-fluid',
                              alt: '...',
                            }),
                            l.a.createElement(
                              'h3',
                              {
                                className:
                                  'font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50',
                              },
                              "The page you were looking for doesn't exist."
                            ),
                            l.a.createElement(
                              'p',
                              null,
                              "It's on us, we probably moved the content to a different page. The search below should help!"
                            ),
                            l.a.createElement(
                              H.a,
                              {
                                container: !0,
                                spacing: 0,
                              },
                              l.a.createElement(
                                H.a,
                                {
                                  item: !0,
                                  sm: 12,
                                  md: 8,
                                  className: 'mt-4 mt-lg-3 px-2',
                                },
                                l.a.createElement(Ae.a, {
                                  variant: 'outlined',
                                  id: 'input-search',
                                  fullWidth: !0,
                                  placeholder: 'Search terms here...',
                                  InputProps: {
                                    startAdornment: l.a.createElement(
                                      Mn.a,
                                      {
                                        position: 'start',
                                      },
                                      l.a.createElement(Ql.a, null)
                                    ),
                                  },
                                })
                              ),
                              l.a.createElement(
                                H.a,
                                {
                                  item: !0,
                                  sm: 12,
                                  md: 4,
                                  className: 'mt-4 mt-lg-3 px-2',
                                },
                                l.a.createElement(
                                  X.a,
                                  {
                                    className: 'd-block w-100 btn-first',
                                    size: 'large',
                                  },
                                  l.a.createElement(
                                    'span',
                                    {
                                      className: 'btn-wrapper--label',
                                    },
                                    'Search'
                                  )
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'hero-footer py-4',
                          },
                          l.a.createElement(
                            Tn.a,
                            {
                              title: 'Facebook',
                              arrow: !0,
                            },
                            l.a.createElement(
                              X.a,
                              {
                                className:
                                  'btn-link font-size-lg rounded-sm d-40 btn-icon text-facebook btn-animated-icon',
                                href: '#/',
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              l.a.createElement(
                                'span',
                                {
                                  className: 'btn-wrapper--icon d-flex',
                                },
                                l.a.createElement(Q.a, {
                                  icon: ['fab', 'facebook'],
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            Tn.a,
                            {
                              title: 'Twitter',
                              arrow: !0,
                            },
                            l.a.createElement(
                              X.a,
                              {
                                className:
                                  'btn-link font-size-lg rounded-sm d-40 btn-icon text-twitter btn-animated-icon',
                                href: '#/',
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              l.a.createElement(
                                'span',
                                {
                                  className: 'btn-wrapper--icon d-flex',
                                },
                                l.a.createElement(Q.a, {
                                  icon: ['fab', 'twitter'],
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            Tn.a,
                            {
                              title: 'Google',
                              arrow: !0,
                            },
                            l.a.createElement(
                              X.a,
                              {
                                className:
                                  'btn-link font-size-lg rounded-sm d-40 btn-icon text-google btn-animated-icon',
                                href: '#/',
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              l.a.createElement(
                                'span',
                                {
                                  className: 'btn-wrapper--icon d-flex',
                                },
                                l.a.createElement(Q.a, {
                                  icon: ['fab', 'google'],
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            Tn.a,
                            {
                              title: 'Instagram',
                              arrow: !0,
                            },
                            l.a.createElement(
                              X.a,
                              {
                                className:
                                  'btn-link font-size-lg rounded-sm d-40 btn-icon text-instagram btn-animated-icon',
                                href: '#/',
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              l.a.createElement(
                                'span',
                                {
                                  className: 'btn-wrapper--icon d-flex',
                                },
                                l.a.createElement(Q.a, {
                                  icon: ['fab', 'instagram'],
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }

      function Vl() {
        return l.a.createElement(l.a.Fragment, null, l.a.createElement(Gl, null));
      }

      function Kl() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia (XCH) Price'),
            l.a.createElement('meta', {
              content: 'The historic price of Chia (XCH) in USD.',
              name: 'description',
            })
          ),
          l.a.createElement(O.d, {
            titleHeading: 'Chia (XCH) Price',
            titleDescription: 'The historic price of Chia (XCH) in USD.',
          }),
          l.a.createElement(
            H.a,
            {
              container: !0,
              spacing: 6,
            },
            l.a.createElement(
              H.a,
              {
                item: !0,
                xl: 12,
              },
              l.a.createElement(
                O.a,
                null,
                l.a.createElement(
                  'div',
                  {
                    className: 'content-box',
                  },
                  l.a.createElement(Qt, {
                    name: 'xchPriceChart',
                    label: 'xchPriceChart',
                    steppedLine: !1,
                    fill: !1,
                    controls: {
                      '24h': !0,
                      '1w': !0,
                      '2w': !0,
                      '1m': !0,
                    },
                  })
                )
              )
            )
          )
        );
      }
      var ql = t(320),
        Zl = t.n(ql),
        Yl = {
          chart: {
            toolbar: {
              show: !1,
            },
            sparkline: {
              enabled: !0,
            },
          },
          tooltip: {
            enabled: !1,
          },
          dataLabels: {
            enabled: !1,
          },
          stroke: {
            color: '#12a334',
            curve: 'smooth',
            width: 2,
          },
          colors: ['#12a334'],
          fill: {
            color: '#12a334',
            opacity: 0.1,
            gradient: {
              shade: 'light',
              type: 'vertical',
              shadeIntensity: 0.2,
              inverseColors: !1,
              opacityFrom: 0.6,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
          legend: {
            show: !1,
          },
          xaxis: {
            categories: [
              '-24h',
              '-23h',
              '-22h',
              '-21h',
              '-20h',
              '-19h',
              '-18h',
              '-17h',
              '-16h',
              '-15h',
              '-14h',
              '-13h',
              '-12h',
              '-11h',
              '-10h',
              '-9h',
              '-8h',
              '-7h',
              '-6h',
              '-5h',
              '-4h',
              '-3h',
              '-2h',
              '-1h',
              'Now',
            ],
            crosshairs: {
              width: 1,
            },
          },
          yaxis: {
            min: 0,
          },
        },
        _l = {
          chart: {
            toolbar: {
              show: !1,
            },
            sparkline: {
              enabled: !0,
            },
          },
          tooltip: {
            enabled: !1,
          },
          dataLabels: {
            enabled: !1,
          },
          stroke: {
            color: '#12a334',
            curve: 'smooth',
            width: 2,
          },
          colors: ['#12a334'],
          fill: {
            color: '#12a334',
            opacity: 0.1,
            gradient: {
              shade: 'light',
              type: 'vertical',
              shadeIntensity: 0.2,
              inverseColors: !1,
              opacityFrom: 0.6,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
          legend: {
            show: !1,
          },
          xaxis: {
            categories: [
              '-7 days',
              '-6 days',
              '-5 days',
              '-4 days',
              '-3 days',
              '-2 days',
              '-1 day',
            ],
            crosshairs: {
              width: 1,
            },
          },
          yaxis: {
            min: 0,
          },
        },
        $l = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a, t) {
              var n, l, r, c;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (e.next = 3),
                        De.a.get(
                          ''.concat(He.a.apiPath2, '/chart/').concat(a, '?period=').concat(t)
                        )
                      );
                    case 3:
                      return (n = e.sent), (l = n.data), e.abrupt('return', l);
                    case 6:
                      return (e.next = 8), De.a.get(''.concat(He.a.apiPath2, '/chart/').concat(a));
                    case 8:
                      return (r = e.sent), (c = r.data), e.abrupt('return', c);
                    case 11:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a, t) {
            return e.apply(this, arguments);
          };
        })(),
        er = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a, t) {
              var n, l;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(
                          ''
                            .concat(He.a.apiPath2, '/heightBasedChart/')
                            .concat(a, '?filter=')
                            .concat(t)
                        )
                      );
                    case 2:
                      return (n = e.sent), (l = n.data), e.abrupt('return', l);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a, t) {
            return e.apply(this, arguments);
          };
        })(),
        ar = function (e) {
          var a = e.locale,
            t = Object(n.useState)(0),
            r = Object(v.a)(t, 2),
            c = r[0],
            i = r[1],
            s = Object(n.useState)(0),
            o = Object(v.a)(s, 2),
            m = o[0],
            u = o[1],
            p = Object(n.useState)([
              {
                name: 'Netspace',
                data: [47, 38, 56, 24, 45, 65, 32, 52, 45, 32, 54, 56],
              },
            ]),
            h = Object(v.a)(p, 2),
            b = h[0],
            f = h[1];
          Object(n.useEffect)(function () {
            $l('netSpace', '24h').then(function (e) {
              var a = e.data;
              if (0 !== a.length) {
                var t = a.reverse(),
                  n = Number(t[0].toFixed(2)),
                  l = Number(t[t.length - 1].toFixed(2)),
                  r = Number(((Number((l - n).toFixed(2)) / n) * 100).toFixed(2));
                u(r),
                  i(l),
                  f([
                    {
                      name: 'Netspace',
                      data: t.map(function (e) {
                        return Number(e.toFixed(2));
                      }),
                    },
                  ]);
              }
            });
          }, []);
          var E =
              m >= 0
                ? 'text-success pt-1 font-weight-bold font-size-sm ml-2 align-self-start'
                : 'text-danger pt-1 font-weight-bold font-size-sm ml-2 align-self-start',
            g = m >= 0 ? '+'.concat(m, '%') : ''.concat(m, '%');
          return l.a.createElement(
            H.a,
            {
              item: !0,
              lg: 4,
            },
            l.a.createElement(
              P.a,
              {
                className: 'shadow-xxl card-box-hover-rise mb-5',
              },
              l.a.createElement(
                'div',
                {
                  className: 'd-flex align-items-center p-4',
                },
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold text-black',
                    },
                    l.a.createElement(
                      d.b,
                      {
                        to: 'zh' === a ? '/zh-cn/charts/netspace' : '/charts/netspace',
                      },
                      l.a.createElement(J.a, {
                        id: 'netspace',
                        description: 'Netspace',
                        defaultMessage: 'Netspace',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-dark opacity-7',
                    },
                    l.a.createElement(J.a, {
                      id: 'spaceAllocated',
                      description: 'Space allocated',
                      defaultMessage: 'Space allocated to Chia network\u2122',
                    })
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'px-4',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'text-black py-2 font-size-xxl d-flex align-items-center',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'display-3 font-weight-bold',
                    },
                    (c / 1024).toFixed(2),
                    ' EiB'
                  ),
                  l.a.createElement(
                    'small',
                    {
                      className: E,
                    },
                    g
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'mt-4',
                },
                l.a.createElement(On.a, {
                  options: Yl,
                  series: b,
                  type: 'area',
                  height: 150,
                })
              )
            )
          );
        },
        tr = function (e) {
          var a = e.locale,
            t = Object(n.useState)(0),
            r = Object(v.a)(t, 2),
            c = r[0],
            i = r[1],
            s = Object(n.useState)(0),
            o = Object(v.a)(s, 2),
            m = o[0],
            u = o[1],
            p = Object(n.useState)([
              {
                name: 'Unique addresses',
                data: [10, 20, 30, 50, 60, 80, 120],
              },
            ]),
            h = Object(v.a)(p, 2),
            b = h[0],
            f = h[1];
          Object(n.useEffect)(function () {
            er('unique_address_count', '24h').then(function (e) {
              var a = e.data;
              if (0 !== a.length) {
                var t = Number(a[0].toFixed(2)),
                  n = Number(a[a.length - 1].toFixed(2)),
                  l = Number(((Number((n - t).toFixed(2)) / t) * 100).toFixed(2));
                u(l),
                  f([
                    {
                      name: 'Unique addresses',
                      data: a.map(function (e) {
                        return e ? Number(e.toFixed(2)) : 0;
                      }),
                    },
                  ]),
                  i(a[a.length - 1]);
              }
            });
          }, []);
          var E =
              m >= 0
                ? 'text-success pt-1 font-weight-bold font-size-sm ml-2 align-self-start'
                : 'text-danger pt-1 font-weight-bold font-size-sm ml-2 align-self-start',
            g = m >= 0 ? '+'.concat(m, '%') : ''.concat(m, '%');
          return l.a.createElement(
            H.a,
            {
              item: !0,
              lg: 4,
            },
            l.a.createElement(
              P.a,
              {
                className: 'shadow-xxl card-box-hover-rise mb-5',
              },
              l.a.createElement(
                'div',
                {
                  className: 'd-flex align-items-center p-4',
                },
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold text-black',
                    },
                    l.a.createElement(
                      d.b,
                      {
                        to: 'zh' === a ? '/zh-cn/charts/addressCount' : '/charts/addressCount',
                      },
                      l.a.createElement(J.a, {
                        id: 'uniqueAddressCount',
                        description: 'Unique address count',
                        defaultMessage: 'Unique address count',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-dark opacity-7',
                    },
                    l.a.createElement(J.a, {
                      id: 'addressesReceivedXCH',
                      description: 'Addresses that have received XCH',
                      defaultMessage: 'Addresses that have received XCH',
                    })
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'px-4',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'text-black py-2 font-size-xxl d-flex align-items-center',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'display-3 font-weight-bold',
                    },
                    c.toLocaleString()
                  ),
                  l.a.createElement(
                    'small',
                    {
                      className: E,
                    },
                    g
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'mt-4',
                },
                l.a.createElement(On.a, {
                  options: _l,
                  series: b,
                  type: 'area',
                  height: 150,
                })
              )
            )
          );
        },
        nr = function (e) {
          var a = e.locale,
            t = Object(n.useState)(0),
            r = Object(v.a)(t, 2),
            c = r[0],
            i = r[1],
            s = Object(n.useState)(0),
            o = Object(v.a)(s, 2),
            m = o[0],
            u = o[1],
            p = Object(n.useState)([
              {
                name: 'XCH Price (USD)',
                data: [],
              },
            ]),
            h = Object(v.a)(p, 2),
            b = h[0],
            f = h[1];
          Object(n.useEffect)(function () {
            $l('xchPriceChart', '24h').then(function (e) {
              var a = e.data;
              if (0 !== a.length)
                if (a.length >= 24)
                  try {
                    var t = a.slice(a.length - 24),
                      n = Number(a[a.length - 1 - 24].toFixed(2)),
                      l = Number(a[a.length - 1].toFixed(2)),
                      r = Number(((Number((l - n).toFixed(2)) / n) * 100).toFixed(2));
                    i(l),
                      u(r),
                      f([
                        {
                          name: 'XCH Price (USD)',
                          data: t.map(function (e) {
                            return e ? Number(e.toFixed(2)) : 0;
                          }),
                        },
                      ]);
                  } catch (m) {
                    console.log(m);
                  }
                else {
                  var c = Number(a[0].toFixed(2)),
                    s = Number(a[a.length - 1].toFixed(2)),
                    o = Number(((Number((s - c).toFixed(2)) / c) * 100).toFixed(2));
                  i(s),
                    u(o),
                    f([
                      {
                        name: 'XCH Price (USD)',
                        data: a.map(function (e) {
                          return e ? Number(e.toFixed(2)) : 0;
                        }),
                      },
                    ]);
                }
            });
          }, []);
          var E =
              m >= 0
                ? 'text-success pt-1 font-weight-bold font-size-sm ml-2 align-self-start'
                : 'text-danger pt-1 font-weight-bold font-size-sm ml-2 align-self-start',
            g = m >= 0 ? '+'.concat(m, '%') : ''.concat(m, '%');
          return l.a.createElement(
            H.a,
            {
              item: !0,
              lg: 4,
            },
            l.a.createElement(
              P.a,
              {
                className: 'shadow-xxl card-box-hover-rise mb-5',
              },
              l.a.createElement(
                'div',
                {
                  className: 'd-flex align-items-center p-4',
                },
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'div',
                    {
                      className: 'font-weight-bold text-black',
                    },
                    l.a.createElement(
                      d.b,
                      {
                        to: 'zh' === a ? '/zh-cn/charts/xchPrice' : '/charts/xchPrice',
                      },
                      l.a.createElement(J.a, {
                        id: 'xchPrice',
                        description: 'XCH Price',
                        defaultMessage: 'XCH Price',
                      })
                    )
                  ),
                  l.a.createElement(
                    'div',
                    {
                      className: 'text-dark opacity-7',
                    },
                    l.a.createElement(J.a, {
                      id: 'currentPriceOfChia',
                      description: 'Current price of Chia\u2122 in USD',
                      defaultMessage: 'Current price of Chia\u2122 in USD',
                    })
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'px-4',
                },
                l.a.createElement(
                  'div',
                  {
                    className: 'text-black py-2 font-size-xxl d-flex align-items-center',
                  },
                  l.a.createElement(
                    'div',
                    {
                      className: 'display-3 font-weight-bold',
                    },
                    '$',
                    c.toLocaleString()
                  ),
                  l.a.createElement(
                    'small',
                    {
                      className: E,
                    },
                    g
                  )
                )
              ),
              l.a.createElement(
                'div',
                {
                  className: 'mt-4',
                },
                l.a.createElement(On.a, {
                  options: _l,
                  series: b,
                  type: 'area',
                  height: 150,
                })
              )
            )
          );
        };

      function lr() {
        var e = Object(aa.a)(),
          a = 'zh' === e.locale ? '/zh-cn/blockchain/blocks' : '/blockchain/blocks';
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            B.a,
            null,
            l.a.createElement('title', null, 'Chia cryptocurrency blockchain explorer'),
            l.a.createElement('meta', {
              content: 'The worlds best Chia cryptocurrency blockchain explorer.',
              name: 'description',
            })
          ),
          l.a.createElement(
            'div',
            {
              className: 'hero-wrapper bg-composed-wrapper bg-happy-green',
            },
            l.a.createElement(
              'div',
              {
                className: 'header-top-section pb-2',
              },
              l.a.createElement($, null)
            ),
            l.a.createElement(
              'div',
              {
                className: 'hero-wrapper--content',
              },
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--image bg-composed-filter-rm',
                style: {
                  backgroundImage: 'url(' + ne.a + ')',
                },
              }),
              l.a.createElement('div', {
                className: 'bg-composed-wrapper--bg bg-second opacity-5',
              }),
              l.a.createElement(
                'div',
                {
                  className: 'bg-composed-wrapper--content',
                },
                l.a.createElement(
                  G.a,
                  {
                    className: 'z-over shadow-container-content-5',
                  },
                  l.a.createElement(
                    H.a,
                    {
                      container: !0,
                      spacing: 6,
                      className: 'py-5',
                    },
                    l.a.createElement(
                      H.a,
                      {
                        item: !0,
                        lg: 6,
                      },
                      l.a.createElement(
                        'div',
                        {
                          className: 'pt-3 text-white pt-xl-5 pr-0 pr-xl-5',
                        },
                        l.a.createElement(
                          'h2',
                          {
                            className: 'display-3 font-weight-bold',
                          },
                          l.a.createElement(J.a, {
                            id: 'introText',
                            description: 'Introductory text',
                            defaultMessage: 'Discover the future of cryptocurrency',
                          })
                        ),
                        l.a.createElement(
                          'p',
                          {
                            className: 'font-size-xl py-3 text-white-50',
                          },
                          l.a.createElement(J.a, {
                            id: 'siteDescription',
                            description: 'Description of what the site is for',
                            defaultMessage:
                              'Browse and search the Chia blockchain\u2122 with historic data charts.',
                          })
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className: 'pt-3',
                          },
                          l.a.createElement(
                            X.a,
                            {
                              component: d.c,
                              to: a,
                              size: 'large',
                              className: 'rounded-sm font-weight-bold shadow-second-sm btn-success',
                            },
                            l.a.createElement(
                              'span',
                              {
                                className: 'btn-wrapper--label',
                              },
                              l.a.createElement(J.a, {
                                id: 'blockchainExplorer',
                                description: 'Text for button to blockchain explorer',
                                defaultMessage: 'Blockchain explorer',
                              })
                            ),
                            l.a.createElement(
                              'span',
                              {
                                className: 'btn-wrapper--icon',
                              },
                              l.a.createElement(Q.a, {
                                icon: ['fas', 'arrow-right'],
                              })
                            )
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      H.a,
                      {
                        item: !0,
                        lg: 6,
                        className: 'd-flex align-items-center',
                      },
                      l.a.createElement('img', {
                        src: Zl.a,
                        alt: '...',
                        className: 'm-5 m-lg-0 img-fit-container',
                      })
                    )
                  ),
                  l.a.createElement(
                    H.a,
                    {
                      container: !0,
                      spacing: 6,
                    },
                    l.a.createElement(ar, {
                      locale: e.locale,
                    }),
                    l.a.createElement(tr, {
                      locale: e.locale,
                    }),
                    l.a.createElement(nr, {
                      locale: e.locale,
                    })
                  )
                ),
                l.a.createElement(
                  'div',
                  {
                    className: 'shadow-container-blocks-5 z-below',
                  },
                  l.a.createElement(
                    'svg',
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 1440 320',
                    },
                    l.a.createElement('path', {
                      fill: 'var(--white)',
                      fillOpacity: '1',
                      d: 'M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z',
                    })
                  )
                )
              )
            )
          )
        );
      }
      var rr = t(321),
        cr = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e(a, t) {
              var n, l;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        De.a.get(
                          ''.concat(He.a.apiPath2, '/chart/').concat(a, '?period=').concat(t)
                        )
                      );
                    case 2:
                      return (n = e.sent), (l = n.data), e.abrupt('return', l.data[0].toFixed(4));
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a, t) {
            return e.apply(this, arguments);
          };
        })(),
        ir = (function () {
          var e = Object(Te.a)(
            je.a.mark(function e() {
              var a, t;
              return je.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), De.a.get(''.concat(He.a.apiPath2, '/blockchainSummary'));
                    case 2:
                      return (a = e.sent), (t = a.data), e.abrupt('return', t);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        sr = function (e) {
          var a = e.link,
            t = e.postfix,
            r = e.chartName,
            c = e.period,
            i = e.price,
            s = Object(n.useState)(0),
            o = Object(v.a)(s, 2),
            m = o[0],
            d = o[1];
          Object(n.useEffect)(function () {
            cr(r, c)
              .then(function (e) {
                return d(e || 0);
              })
              .catch(function (e) {
                return console.log(e);
              });
          }, []);
          var u = Number((30 * m * i).toFixed(2)).toLocaleString();
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'tr',
              null,
              l.a.createElement(
                'td',
                null,
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'a',
                    {
                      href: a,
                      className: 'font-weight-bold text-black',
                    },
                    l.a.createElement(J.a, {
                      id: 'xchTibDay',
                      description: 'XCH/TiB Day',
                      defaultMessage: 'XCH/TiB Day',
                    })
                  ),
                  l.a.createElement(
                    'span',
                    {
                      className: 'text-black-50 d-block',
                    },
                    l.a.createElement(J.a, {
                      id: 'expectedDailyFarmedXchTib',
                      description: 'Expected daily farmed XCH per TiB',
                      defaultMessage: 'Expected daily farmed XCH per TiB',
                    })
                  )
                )
              ),
              l.a.createElement(
                'td',
                {
                  className: 'text-center',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'font-weight-bold',
                  },
                  m,
                  ' ',
                  t
                )
              )
            ),
            l.a.createElement(
              'tr',
              null,
              l.a.createElement(
                'td',
                null,
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'a',
                    {
                      href: '/charts/usdTib',
                      className: 'font-weight-bold text-black',
                    },
                    'USD/TiB Month'
                  ),
                  l.a.createElement(
                    'span',
                    {
                      className: 'text-black-50 d-block',
                    },
                    'Expected USD farming with 1 TiB for 1 month.'
                  )
                )
              ),
              l.a.createElement(
                'td',
                {
                  className: 'text-center',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'font-weight-bold',
                  },
                  '$',
                  u
                )
              )
            )
          );
        },
        or = function (e) {
          var a = e.link,
            t = e.postfix,
            n = e.value,
            r = e.price;
          return l.a.createElement(
            'tr',
            null,
            l.a.createElement(
              'td',
              null,
              l.a.createElement(
                'div',
                null,
                l.a.createElement(
                  'a',
                  {
                    href: a,
                    className: 'font-weight-bold text-black',
                  },
                  l.a.createElement(J.a, {
                    id: 'averageFee',
                    description: 'Fees / Coins',
                    defaultMessage: 'Fees / Coins',
                  })
                ),
                l.a.createElement(
                  'span',
                  {
                    className: 'text-black-50 d-block',
                  },
                  l.a.createElement(J.a, {
                    id: 'averageFee1Hour',
                    description: 'Fee per coin addition/removal in the last hour',
                    defaultMessage: 'Fee per coin addition/removal in the last hour',
                  })
                )
              )
            ),
            l.a.createElement(
              'td',
              {
                className: 'text-center',
              },
              l.a.createElement(
                'span',
                {
                  className: 'font-weight-bold',
                },
                n,
                ' ',
                t,
                ' ($',
                Number(n * r).toFixed(2),
                ')'
              )
            )
          );
        },
        mr = function (e) {
          var a = e.link,
            t = (e.title, e.description, e.chartName),
            r = e.period,
            c = Object(n.useState)(0),
            i = Object(v.a)(c, 2),
            s = i[0],
            o = i[1];
          return (
            Object(n.useEffect)(function () {
              cr(t, r)
                .then(function (e) {
                  return o(e || 0);
                })
                .catch(function (e) {
                  return console.log(e);
                });
            }, []),
            l.a.createElement(
              'tr',
              null,
              l.a.createElement(
                'td',
                null,
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'a',
                    {
                      href: a,
                      className: 'font-weight-bold text-black',
                    },
                    l.a.createElement(J.a, {
                      id: 'tibHourXch',
                      description: 'TiB Hour/XCH',
                      defaultMessage: 'TiB Hour/XCH',
                    })
                  ),
                  l.a.createElement(
                    'span',
                    {
                      className: 'text-black-50 d-block',
                    },
                    l.a.createElement(J.a, {
                      id: 'expectedTime',
                      description: 'Expected time to farm 1 XCH with 1 TiB.',
                      defaultMessage: 'Expected time to farm 1 XCH with 1 TiB.',
                    })
                  )
                )
              ),
              l.a.createElement(
                'td',
                {
                  className: 'text-center',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'font-weight-bold',
                  },
                  rr(60 * s * 60 * 1e3, {
                    verbose: !0,
                  })
                )
              )
            )
          );
        },
        dr = function (e) {
          var a = e.coinSupply,
            t = e.uniqueCoins,
            n = e.price,
            r = a / 1e12;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'tr',
              null,
              l.a.createElement(
                'td',
                null,
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'a',
                    {
                      href: '/charts/coinSupply',
                      className: 'font-weight-bold text-black',
                      title: 'Total XCH',
                    },
                    l.a.createElement(J.a, {
                      id: 'totalXch',
                      description: 'Total XCH',
                      defaultMessage: 'Total XCH',
                    })
                  ),
                  l.a.createElement(
                    'span',
                    {
                      className: 'text-black-50 d-block',
                    },
                    l.a.createElement(J.a, {
                      id: 'totalXchIncPrefarm',
                      description: 'Total XCH including the prefarm',
                      defaultMessage: 'Total XCH including the prefarm',
                    })
                  )
                )
              ),
              l.a.createElement(
                'td',
                {
                  className: 'text-center',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'font-weight-bold',
                  },
                  Object(Re.a)(a, 'mojo').to('chia').toCeilString(),
                  ' XCH ($',
                  Ue()(r * n, {
                    lowercase: !0,
                  }),
                  ')'
                )
              )
            ),
            l.a.createElement(
              'tr',
              null,
              l.a.createElement(
                'td',
                null,
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'a',
                    {
                      href: '/charts/coinCount',
                      className: 'font-weight-bold text-black',
                      title: 'Unique coin count',
                    },
                    l.a.createElement(J.a, {
                      id: 'farmedXch',
                      description: 'Farmed XCH',
                      defaultMessage: 'Farmed XCH',
                    })
                  ),
                  l.a.createElement(
                    'span',
                    {
                      className: 'text-black-50 d-block',
                    },
                    l.a.createElement(J.a, {
                      id: 'numberOfCoinsFarmed',
                      description: 'Number of Chia coins that have been farmed',
                      defaultMessage: 'Number of Chia coins that have been farmed',
                    })
                  )
                )
              ),
              l.a.createElement(
                'td',
                {
                  className: 'text-center',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'font-weight-bold',
                  },
                  t.toLocaleString(),
                  ' ($',
                  Ue()(t * n, {
                    lowercase: !0,
                  }),
                  ')'
                )
              )
            )
          );
        },
        ur = function (e) {
          var a = e.addressCount;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'tr',
              null,
              l.a.createElement(
                'td',
                null,
                l.a.createElement(
                  'div',
                  null,
                  l.a.createElement(
                    'a',
                    {
                      href: '/charts/addressCount',
                      className: 'font-weight-bold text-black',
                      title: 'Unique address count',
                    },
                    l.a.createElement(J.a, {
                      id: 'uniqueAddressCount',
                      description: 'Unique address count',
                      defaultMessage: 'Unique address count',
                    })
                  ),
                  l.a.createElement(
                    'span',
                    {
                      className: 'text-black-50 d-block',
                    },
                    l.a.createElement(J.a, {
                      id: 'numberAddressesReceivedChia',
                      description: 'Number of addresses that have received Chia',
                      defaultMessage: 'Number of addresses that have received Chia',
                    })
                  )
                )
              ),
              l.a.createElement(
                'td',
                {
                  className: 'text-center',
                },
                l.a.createElement(
                  'span',
                  {
                    className: 'font-weight-bold',
                  },
                  a.toLocaleString()
                )
              )
            )
          );
        };

      function pr() {
        var e = Object(n.useState)({
            netspace: 0,
            uniqueCoins: 0,
            supply: 0,
            addressCount: 0,
            averageFees: 0,
            price: 0,
            power: 0,
          }),
          a = Object(v.a)(e, 2),
          t = a[0],
          r = a[1];
        return (
          Object(n.useEffect)(function () {
            ir()
              .then(function (e) {
                return r(e);
              })
              .catch(function (e) {
                return console.log(e);
              });
          }, []),
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              P.a,
              {
                className: 'card-box mb-spacing-6-x2',
                style: {
                  width: '100%',
                },
              },
              l.a.createElement('div', {
                className: 'divider',
              }),
              l.a.createElement(
                U.a,
                {
                  className: 'pt-2 px-4 pb-4',
                },
                l.a.createElement(
                  R.a,
                  {
                    className: 'table table-borderless table-hover table-alternate mb-0',
                  },
                  l.a.createElement(
                    'thead',
                    null,
                    l.a.createElement(
                      'tr',
                      null,
                      l.a.createElement('th', null),
                      l.a.createElement('th', null)
                    )
                  ),
                  l.a.createElement(
                    'tbody',
                    null,
                    l.a.createElement(or, {
                      link: '/charts/average-transaction-fee',
                      postfix: 'XCH',
                      value: t.averageFees,
                      price: t.price,
                    }),
                    l.a.createElement(sr, {
                      link: '/charts/xchTib',
                      postfix: 'XCH',
                      chartName: 'xchTibDay',
                      period: '2w',
                      price: t.price,
                    }),
                    l.a.createElement(mr, {
                      link: '/charts/tibHoursXch',
                      chartName: 'tibHoursXch',
                      period: '2w',
                    }),
                    l.a.createElement(dr, {
                      coinSupply: t.supply,
                      uniqueCoins: t.uniqueCoins,
                      price: t.price,
                    }),
                    l.a.createElement(ur, {
                      addressCount: t.addressCount,
                    })
                  )
                )
              )
            )
          )
        );
      }

      function hr() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(lr, null),
          l.a.createElement(
            'div',
            {
              className: 'z-over pb-5',
              style: {
                marginTop: '-50px',
              },
            },
            l.a.createElement(
              G.a,
              {
                className: 'pb-3 pb-xl-5',
                style: {
                  marginTop: '-120px',
                  textAlign: 'center',
                  padding: '0px',
                },
              },
              l.a.createElement(za.a, null)
            )
          ),
          l.a.createElement(
            'div',
            {
              className: 'z-over pb-5',
              style: {
                marginTop: '-50px',
              },
            },
            l.a.createElement(
              G.a,
              {
                className: 'pb-3 pb-xl-5',
              },
              l.a.createElement(
                H.a,
                {
                  container: !0,
                  spacing: 6,
                },
                l.a.createElement(pr, null),
                l.a.createElement(Le.a, {
                  center: !0,
                })
              )
            )
          ),
          l.a.createElement(ee, null)
        );
      }
      var br = function () {
          var e = Object(x.h)(),
            a = function () {
              var e = Object(n.useState)(!1),
                a = Object(v.a)(e, 2),
                t = a[0],
                r = a[1];
              return (
                Object(n.useEffect)(function () {
                  var e = setTimeout(function () {
                    return r(!0);
                  }, 300);
                  return function () {
                    clearTimeout(e);
                  };
                }, []),
                l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(
                    w.a,
                    null,
                    t &&
                      l.a.createElement(
                        w.b.div,
                        {
                          key: 'loading',
                          initial: {
                            opacity: 0,
                          },
                          animate: {
                            opacity: 1,
                          },
                          exit: {
                            opacity: 0,
                          },
                          transition: {
                            duration: 0.4,
                          },
                        },
                        l.a.createElement(
                          'div',
                          {
                            className:
                              'd-flex align-items-center flex-column vh-100 justify-content-center text-center py-3',
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'd-flex align-items-center flex-column px-4',
                            },
                            l.a.createElement(N.ClimbingBoxLoader, {
                              color: '#3c44b1',
                              loading: !0,
                            })
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'text-muted font-size-xl text-center pt-3',
                            },
                            'Please wait while we load the live preview examples',
                            l.a.createElement(
                              'span',
                              {
                                className: 'font-size-lg d-block text-dark',
                              },
                              'This live preview instance can be slower than a real production build!'
                            )
                          )
                        )
                      )
                  )
                )
              );
            };
          return l.a.createElement(
            y.a,
            {
              theme: A,
            },
            l.a.createElement(
              w.a,
              null,
              l.a.createElement(
                n.Suspense,
                {
                  fallback: l.a.createElement(a, null),
                },
                l.a.createElement(
                  x.d,
                  null,
                  l.a.createElement(
                    x.b,
                    {
                      path: [
                        '/charts/netspace',
                        '/charts/xchTib',
                        '/charts/usdTib',
                        '/charts/tibHoursXch',
                        '/charts/networkDecentralisation',
                        '/charts/nodes',
                        '/charts/nodesWeek',
                        '/charts/size',
                        '/charts/topFarmers',
                        '/charts/topPools',
                        '/charts/countries',
                        '/charts/addressCount',
                        '/charts/coinCount',
                        '/charts/coinSupply',
                        '/charts/difficulty',
                        '/charts/weight',
                        '/charts/iterations',
                        '/charts/block-timing',
                        '/charts/fees',
                        '/charts/transaction-volume',
                        '/charts/average-transaction-fee',
                        '/charts/xchPrice',
                        '/blockchain/search',
                        '/blockchain/blocks',
                        '/blockchain/coins',
                        '/blockchain/block/:headerHash',
                        '/blockchain/block/height/:height',
                        '/blockchain/address/:address',
                        '/blockchain/puzzlehash/:puzzleHash',
                        '/blockchain/coin/:coin_id',
                        '/blockchain/pool/:publicKey',
                        '/pre-farm',
                        '/tools/address-puzzlehash-converter',
                        '/api/v0.1',
                        '/top-farmers',
                        '/top-pools',
                        '/charts/puzzlehashes',
                        '/pro/register',
                        '/pro/login',
                        '/pro/recover',
                        '/pro/home',
                        '/Wallets',
                        '/BuySell',
                        '/Profile',
                        '/Settings',
                      ],
                    },
                    l.a.createElement(
                      le.a,
                      {
                        messages: ie('en'),
                        locale: 'en',
                        defaultLocale: 'en',
                      },
                      l.a.createElement(
                        j,
                        {
                          locale: 'en',
                        },
                        l.a.createElement(
                          x.d,
                          {
                            location: e,
                            key: e.pathname,
                          },
                          l.a.createElement(x.b, {
                            path: '/charts/netspace',
                            component: bn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/xchTib',
                            component: fn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/usdTib',
                            component: wn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/tibHoursXch',
                            component: Nn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/networkDecentralisation',
                            component: Cn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/nodes',
                            component: en,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/nodesWeek',
                            component: an,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/size',
                            component: rn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/topFarmers',
                            component: mn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/topPools',
                            component: hn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/countries',
                            component: ut,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/addressCount',
                            component: gt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/coinCount',
                            component: Nt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/coinSupply',
                            component: At,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/difficulty',
                            component: qt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/xchPrice',
                            component: Kl,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/weight',
                            component: Kt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/iterations',
                            component: Vt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/block-timing',
                            component: Gt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/fees',
                            component: zt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/transaction-volume',
                            component: Bt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/charts/average-transaction-fee',
                            component: Rt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/search',
                            component: Se,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/block/height/:height',
                            component: Za,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/block/:headerHash',
                            component: Ja,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/address/:address',
                            component: pa,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/puzzlehash/:puzzleHash',
                            component: ha.a,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/coin/:coin_id',
                            component: da,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/pool/:publicKey',
                            component: xa,
                          }),
                          l.a.createElement(x.b, {
                            path: '/pre-farm',
                            component: Ka,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/blocks',
                            component: ka,
                          }),
                          l.a.createElement(x.b, {
                            path: '/blockchain/coins',
                            component: Oa,
                          }),
                          l.a.createElement(x.b, {
                            path: '/tools/address-puzzlehash-converter',
                            component: $a,
                          }),
                          l.a.createElement(x.b, {
                            path: '/api/v0.1',
                            component: L,
                          }),
                          l.a.createElement(x.b, {
                            path: '/top-farmers',
                            component: qe,
                          }),
                          l.a.createElement(x.b, {
                            path: '/top-pools',
                            component: $e,
                          }),
                          l.a.createElement(x.b, {
                            path: '/pro/register',
                            component: Bl,
                          }),
                          l.a.createElement(x.b, {
                            path: '/pro/login',
                            component: Tl,
                          }),
                          l.a.createElement(x.b, {
                            path: '/pro/recover',
                            component: Fl,
                          }),
                          l.a.createElement(x.b, {
                            path: '/pro/home',
                            component: Ul,
                          }),
                          l.a.createElement(x.b, {
                            path: '/Wallets',
                            component: Dn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/BuySell',
                            component: Un,
                          }),
                          l.a.createElement(x.b, {
                            path: '/Profile',
                            component: xl,
                          }),
                          l.a.createElement(x.b, {
                            path: '/Settings',
                            component: kl,
                          })
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    x.b,
                    {
                      path: [
                        '/zh-cn/blockchain/blocks',
                        '/zh-cn/blockchain/search',
                        '/zh-cn/blockchain/coins',
                        '/zh-cn/top-farmers',
                        '/zh-cn/top-pools',
                        '/zh-cn/charts/netspace',
                        '/zh-cn/charts/xchPrice',
                        '/zh-cn/charts/xchTib',
                        '/zh-cn/charts/usdTib',
                        '/zh-cn/charts/tibHoursXch',
                        '/zh-cn/charts/addressCount',
                        '/zh-cn/charts/topFarmers',
                        '/zh-cn/charts/topPools',
                        '/zh-cn/charts/networkDecentralisation',
                        '/zh-cn/charts/size',
                        '/zh-cn/charts/difficulty',
                        '/zh-cn/charts/weight',
                        '/zh-cn/charts/iterations',
                        '/zh-cn/charts/fees',
                        '/zh-cn/charts/transaction-volume',
                        '/zh-cn/charts/average-transaction-fee',
                        '/zh-cn/blockchain/block/:headerHash',
                        '/zh-cn/blockchain/coin/:coin_id',
                        '/zh-cn/blockchain/address/:address',
                        '/zh-cn/pre-farm',
                      ],
                    },
                    l.a.createElement(
                      le.a,
                      {
                        messages: ie('zh'),
                        locale: 'zh',
                        defaultLocale: 'en',
                      },
                      l.a.createElement(
                        j,
                        {
                          locale: 'zh',
                        },
                        l.a.createElement(
                          x.d,
                          {
                            location: e,
                            key: e.pathname,
                          },
                          l.a.createElement(x.b, {
                            path: '/zh-cn/blockchain/blocks',
                            component: ka,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/blockchain/search',
                            component: Se,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/blockchain/coins',
                            component: Oa,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/top-farmers',
                            component: qe,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/top-pools',
                            component: $e,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/netspace',
                            component: bn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/xchPrice',
                            component: Kl,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/xchTib',
                            component: fn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/usdTib',
                            component: wn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/tibHoursXch',
                            component: Nn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/addressCount',
                            component: gt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/topFarmers',
                            component: mn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/topPools',
                            component: hn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/networkDecentralisation',
                            component: Cn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/size',
                            component: rn,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/difficulty',
                            component: qt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/weight',
                            component: Kt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/iterations',
                            component: Vt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/fees',
                            component: zt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/transaction-volume',
                            component: Bt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/charts/average-transaction-fee',
                            component: Rt,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/blockchain/block/:headerHash',
                            component: Ja,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/blockchain/coin/:coin_id',
                            component: da,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/blockchain/address/:address',
                            component: pa,
                          }),
                          l.a.createElement(x.b, {
                            path: '/zh-cn/pre-farm',
                            component: Ka,
                          })
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    x.b,
                    {
                      path: [
                        '/',
                        '/what-is-farming',
                        '/plotting',
                        '/chia-farming-pools',
                        '/chia-coins',
                        '/advertise',
                        '/zh-cn',
                      ],
                    },
                    l.a.createElement(
                      I,
                      null,
                      l.a.createElement(
                        le.a,
                        {
                          messages: ie('zh'),
                          locale: 'zh',
                          defaultLocale: 'en',
                        },
                        l.a.createElement(
                          x.d,
                          {
                            location: e,
                            key: e.pathname,
                          },
                          l.a.createElement(x.b, {
                            path: '/zh-cn',
                            component: hr,
                          })
                        )
                      ),
                      l.a.createElement(
                        le.a,
                        {
                          messages: ie('en'),
                          locale: 'en',
                          defaultLocale: 'en',
                        },
                        l.a.createElement(
                          x.d,
                          {
                            location: e,
                            key: e.pathname,
                          },
                          l.a.createElement(x.b, {
                            path: '/what-is-farming',
                            component: fe,
                          }),
                          l.a.createElement(x.b, {
                            path: '/plotting',
                            component: ve,
                          }),
                          l.a.createElement(x.b, {
                            path: '/chia-farming-pools',
                            component: Ne,
                          }),
                          l.a.createElement(x.b, {
                            path: '/chia-coins',
                            component: Ce,
                          }),
                          l.a.createElement(x.b, {
                            path: '/advertise',
                            component: pe,
                          }),
                          l.a.createElement(x.b, {
                            exact: !0,
                            path: '/',
                            component: hr,
                          })
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    x.b,
                    {
                      path: [
                        '/PageLoginCover',
                        '/PageRegisterCover',
                        '/PageRecoverCover',
                        '/PageError404',
                      ],
                    },
                    l.a.createElement(
                      M,
                      null,
                      l.a.createElement(
                        x.d,
                        {
                          location: e,
                          key: e.pathname,
                        },
                        l.a.createElement(
                          w.b.div,
                          {
                            initial: 'initial',
                            animate: 'in',
                            exit: 'out',
                            variants: {
                              initial: {
                                opacity: 0,
                              },
                              in: {
                                opacity: 1,
                              },
                              out: {
                                opacity: 0,
                              },
                            },
                            transition: {
                              type: 'tween',
                              ease: 'linear',
                              duration: 0.3,
                            },
                          },
                          l.a.createElement(x.b, {
                            path: '/PageLoginCover',
                            component: Tl,
                          }),
                          l.a.createElement(x.b, {
                            path: '/PageRegisterCover',
                            component: Bl,
                          }),
                          l.a.createElement(x.b, {
                            path: '/PageRecoverCover',
                            component: Ll,
                          }),
                          l.a.createElement(x.b, {
                            path: '/PageError404',
                            component: Vl,
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        fr = Object(x.i)(function (e) {
          var a = e.children,
            t = e.location.pathname;
          return (
            Object(n.useEffect)(
              function () {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              },
              [t]
            ),
            a || null
          );
        }),
        Er =
          (t(569),
          {
            aws_project_region: 'us-west-2',
            aws_cognito_region: 'us-west-2',
            aws_user_pools_id: 'us-west-2_vvTbiQrKO',
            aws_user_pools_web_client_id: '1g9a9rlsajv9nl48ra5gjaug0e',
            oauth: {},
          }),
        gr = t(105),
        vr = t(54),
        xr = t(22),
        wr = t(19);
      gr.b.add(
        xr.L,
        xr.F,
        xr.A,
        xr.f,
        xr.H,
        xr.j,
        xr.G,
        xr.i,
        xr.w,
        xr.I,
        xr.r,
        xr.n,
        xr.h,
        xr.v,
        xr.z,
        xr.d,
        xr.k,
        xr.a,
        xr.C,
        xr.D,
        xr.y,
        xr.J,
        xr.B,
        xr.x,
        xr.g,
        xr.K,
        xr.E,
        xr.c,
        xr.b,
        xr.q,
        xr.o,
        xr.t,
        xr.u,
        xr.s,
        xr.p,
        xr.m,
        xr.l,
        xr.e
      ),
        gr.b.add(
          vr.n,
          vr.c,
          vr.k,
          vr.l,
          vr.i,
          vr.f,
          vr.e,
          vr.g,
          vr.h,
          vr.m,
          vr.a,
          vr.j,
          vr.b,
          vr.d
        ),
        gr.b.add(
          wr.nb,
          wr.G,
          wr.c,
          wr.b,
          wr.w,
          wr.eb,
          wr.K,
          wr.o,
          wr.p,
          wr.z,
          wr.cb,
          wr.U,
          wr.O,
          wr.jb,
          wr.a,
          wr.H,
          wr.ab,
          wr.L,
          wr.hb,
          wr.V,
          wr.gb,
          wr.Z,
          wr.u,
          wr.ib,
          wr.C,
          wr.Q,
          wr.t,
          wr.r,
          wr.P,
          wr.s,
          wr.q,
          wr.I,
          wr.lb,
          wr.D,
          wr.m,
          wr.R,
          wr.W,
          wr.mb,
          wr.n,
          wr.F,
          wr.X,
          wr.db,
          wr.v,
          wr.A,
          wr.S,
          wr.M,
          wr.y,
          wr.kb,
          wr.x,
          wr.J,
          wr.Y,
          wr.E,
          wr.B,
          wr.l,
          wr.T,
          wr.f,
          wr.g,
          wr.e,
          wr.d,
          wr.k,
          wr.h,
          wr.j,
          wr.i,
          wr.fb,
          wr.bb,
          wr.N
        ),
        h.default.configure(Er);
      var Nr = Object(f.c)(Object(f.b)(Object(b.a)({}, E)), {});
      switch (navigator.language) {
        case 'zh':
          'zh';
          break;
        default:
          'en';
      }
      console.log('lange', void 0), console.log('locale');
      var yr = (function (e) {
        Object(o.a)(t, e);
        var a = Object(m.a)(t);

        function t() {
          return Object(i.a)(this, t), a.apply(this, arguments);
        }
        return (
          Object(s.a)(t, [
            {
              key: 'render',
              value: function () {
                return l.a.createElement(
                  g.a,
                  {
                    store: Nr,
                  },
                  l.a.createElement(p.a, {
                    styles: {
                      message: {
                        fontSize: '10px',
                      },
                    },
                    message:
                      'Chia Explorer uses cookies to improve your browsing experience, show you personalized content and targeted ads and to analyze our website traffic. By continuing browsing, you consent to use of cookies.',
                    onAccept: function () {},
                    cookie: 'user-has-accepted-cookies',
                  }),
                  l.a.createElement(
                    d.a,
                    {
                      basename: '/',
                    },
                    l.a.createElement(fr, null, l.a.createElement(br, null))
                  )
                );
              },
            },
          ]),
          t
        );
      })(n.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      c.a.render(l.a.createElement(yr, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    60: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return n;
      });
      var n = {
        xch16g76z3545xy2u4cgm52jyc7ymwyravn7m6unv9udfkvghreuuh7qa9cvfl:
          '\ud83c\udf43 Chia Network\u2122',
        xch18krkt5a9jlkpmxtx8akfs9kezkuldpsn4j2qpxyycjka4m7vu6hstf6hku:
          '\ud83c\udf43 Chia Network\u2122',
        xch1duvy5ur5eyj7lp5geetfg84cj2d7xgpxt7pya3lr2y6ke3696w9qvda66e:
          '\ud83c\udf43 Chia Network\u2122',
        xch1rdatypul5c642jkeh4yp933zu3hw8vv8tfup8ta6zfampnyhjnusxdgns6:
          '\ud83c\udf43 Chia Network\u2122',
      };
    },
    64: function (e, a, t) {
      'use strict';
      t.d(a, 'd', function () {
        return l;
      }),
        t.d(a, 'c', function () {
          return r;
        }),
        t.d(a, 'b', function () {
          return c;
        }),
        t.d(a, 'a', function () {
          return i;
        });
      var n = t(20),
        l = function (e) {
          return {
            type: 'THEME_OPTIONS/SET_SIDEBAR_TOGGLE_MOBILE',
            sidebarToggleMobile: e,
          };
        },
        r = function (e) {
          return {
            type: 'THEME_OPTIONS/SET_SIDEBAR_TOGGLE',
            sidebarToggle: e,
          };
        },
        c = function (e) {
          return {
            type: 'THEME_OPTIONS/SET_HEADER_SEARCH_HOVER',
            headerSearchHover: e,
          };
        };

      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {
                  sidebarFixed: !0,
                  sidebarFooter: !1,
                  sidebarShadow: !0,
                  sidebarStyle: 'app-sidebar--dark',
                  sidebarToggleMobile: !1,
                  sidebarToggle: !1,
                  headerFixed: !0,
                  headerShadow: !0,
                  headerBgTransparent: !0,
                  headerSearchHover: !1,
                  headerDrawerToggle: !1,
                  contentBackground: '',
                  themeConfiguratorToggle: !1,
                  footerFixed: !0,
                  footerShadow: !0,
                  footerBgTransparent: !0,
                  pageTitleStyle: '',
                  pageTitleBackground: '',
                  pageTitleShadow: !1,
                  pageTitleIconBox: !0,
                  pageTitleDescription: !0,
                },
          a = arguments.length > 1 ? arguments[1] : void 0;
        switch (a.type) {
          case 'THEME_OPTIONS/SET_SIDEBAR_SHADOW':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                sidebarShadow: a.sidebarShadow,
              }
            );
          case 'THEME_OPTIONS/SET_SIDEBAR_FIXED':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                sidebarFixed: a.sidebarFixed,
              }
            );
          case 'THEME_OPTIONS/SET_SIDEBAR_STYLE':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                sidebarStyle: a.sidebarStyle,
              }
            );
          case 'THEME_OPTIONS/SET_SIDEBAR_FOOTER':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                sidebarFooter: a.sidebarFooter,
              }
            );
          case 'THEME_OPTIONS/SET_SIDEBAR_TOGGLE_MOBILE':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                sidebarToggleMobile: a.sidebarToggleMobile,
              }
            );
          case 'THEME_OPTIONS/SET_SIDEBAR_TOGGLE':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                sidebarToggle: a.sidebarToggle,
              }
            );
          case 'THEME_OPTIONS/SET_SIDEBAR_USERBOX':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                sidebarUserbox: a.sidebarUserbox,
              }
            );
          case 'THEME_OPTIONS/SET_HEADER_FIXED':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                headerFixed: a.headerFixed,
              }
            );
          case 'THEME_OPTIONS/SET_HEADER_SHADOW':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                headerShadow: a.headerShadow,
              }
            );
          case 'THEME_OPTIONS/SET_HEADER_BG_TRANSPARENT':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                headerBgTransparent: a.headerBgTransparent,
              }
            );
          case 'THEME_OPTIONS/SET_HEADER_SEARCH_HOVER':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                headerSearchHover: a.headerSearchHover,
              }
            );
          case 'THEME_OPTIONS/SET_HEADER_DRAWER_TOGGLE':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                headerDrawerToggle: a.headerDrawerToggle,
              }
            );
          case 'THEME_OPTIONS/SET_CONTENT_BACKGROUND':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                contentBackground: a.contentBackground,
              }
            );
          case 'THEME_OPTIONS/SET_THEME_CONFIGURATOR_TOGGLE':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                themeConfiguratorToggle: a.themeConfiguratorToggle,
              }
            );
          case 'THEME_OPTIONS/SET_FOOTER_FIXED':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                footerFixed: a.footerFixed,
              }
            );
          case 'THEME_OPTIONS/SET_FOOTER_SHADOW':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                footerShadow: a.footerShadow,
              }
            );
          case 'THEME_OPTIONS/SET_FOOTER_BG_TRANSPARENT':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                footerBgTransparent: a.footerBgTransparent,
              }
            );
          case 'THEME_OPTIONS/SET_PAGE_TITLE_STYLE':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                pageTitleStyle: a.pageTitleStyle,
              }
            );
          case 'THEME_OPTIONS/SET_PAGE_TITLE_BACKGROUND':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                pageTitleBackground: a.pageTitleBackground,
              }
            );
          case 'THEME_OPTIONS/SET_PAGE_TITLE_SHADOW':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                pageTitleShadow: a.pageTitleShadow,
              }
            );
          case 'THEME_OPTIONS/SET_PAGE_TITLE_ICON_BOX':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                pageTitleIconBox: a.pageTitleIconBox,
              }
            );
          case 'THEME_OPTIONS/SET_PAGE_TITLE_DESCRIPTION':
            return Object(n.a)(
              Object(n.a)({}, e),
              {},
              {
                pageTitleDescription: a.pageTitleDescription,
              }
            );
        }
        return e;
      }
    },
    67: function (e, a, t) {
      'use strict';
      t.d(a, 'a', function () {
        return h;
      });
      var n = t(4),
        l = t(6),
        r = t.n(l),
        c = t(14),
        i = t(16),
        s = t.n(i),
        o = t(0),
        m = t.n(o),
        d = t(18),
        u = t(90),
        p = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(a) {
              var t, n;
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.get(''.concat(d.a.apiPath2, '/blockHeaderHash/').concat(a))
                      );
                    case 2:
                      return (t = e.sent), (n = t.data), e.abrupt('return', n.header_hash);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        h = function (e) {
          var a = e.height,
            t = Object(u.g)(),
            l = Object(o.useState)(null),
            r = Object(n.a)(l, 2),
            c = r[0],
            i = r[1];
          return (
            c && t.push('/blockchain/block/'.concat(c)),
            m.a.createElement(
              m.a.Fragment,
              null,
              0 === a && m.a.createElement('span', null, '0'),
              0 !== a &&
                m.a.createElement(
                  'span',
                  {
                    className: 'text-success',
                    style: {
                      cursor: 'pointer',
                    },
                    onClick: function (e) {
                      p(a)
                        .then(function (e) {
                          return i(e);
                        })
                        .catch(console.log);
                    },
                  },
                  a.toLocaleString()
                )
            )
          );
        };
    },
    8: function (e, a, t) {
      'use strict';
      t.d(a, 'c', function () {
        return u;
      }),
        t.d(a, 'e', function () {
          return g;
        }),
        t.d(a, 'g', function () {
          return y;
        }),
        t.d(a, 'h', function () {
          return D;
        }),
        t.d(a, 'f', function () {
          return I;
        }),
        t.d(a, 'b', function () {
          return H;
        }),
        t.d(a, 'd', function () {
          return L;
        }),
        t.d(a, 'a', function () {
          return J;
        });
      var n = t(4),
        l = t(0),
        r = t.n(l),
        c = t(7),
        i = t(44),
        s = t(11),
        o = t(64),
        m = t(703),
        d = t(686),
        u =
          (t(399),
          t(400),
          t(273),
          Object(i.b)(
            function (e) {
              return {
                headerShadow: e.ThemeOptions.headerShadow,
                headerBgTransparent: e.ThemeOptions.headerBgTransparent,
                sidebarToggleMobile: e.ThemeOptions.sidebarToggleMobile,
              };
            },
            function (e) {
              return {
                setSidebarToggleMobile: function (a) {
                  return e(Object(o.d)(a));
                },
              };
            }
          )(function (e) {
            var a = e.headerShadow,
              t = e.headerBgTransparent,
              n = e.sidebarToggleMobile,
              l = e.setSidebarToggleMobile;
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                'div',
                {
                  className: Object(c.a)('app-header', {
                    'app-header--shadow': a,
                    'app-header--opacity-bg': t,
                  }),
                },
                r.a.createElement(
                  'div',
                  {
                    className: 'app-header--pane',
                  },
                  r.a.createElement(
                    'button',
                    {
                      className: Object(c.a)(
                        'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
                        {
                          'is-active': n,
                        }
                      ),
                      onClick: function () {
                        l(!n);
                      },
                    },
                    r.a.createElement(
                      'span',
                      {
                        className: 'hamburger-box',
                      },
                      r.a.createElement('span', {
                        className: 'hamburger-inner',
                      })
                    )
                  ),
                  r.a.createElement(
                    m.a,
                    {
                      display: {
                        xs: 'none',
                        sm: 'block',
                      },
                    },
                    '\ud83d\udea8 ',
                    r.a.createElement(
                      'span',
                      {
                        style: {
                          paddingRight: '5px',
                          paddingLeft: '5px',
                        },
                      },
                      'Chia Explorer has partnered with ',
                      r.a.createElement(
                        'b',
                        null,
                        r.a.createElement(
                          'a',
                          {
                            href: 'https://www.poolchia.com/ce',
                            className: 'text-success',
                          },
                          'PoolChia'
                        )
                      ),
                      ' \ud83d\udc48'
                    )
                  )
                )
              )
            );
          })),
        p = t(688),
        h = (t(329), t(691)),
        b = t(598),
        f = (t(202), t(76), t(276), t(274), t(275), t(277), t(17)),
        E =
          (Object(f.a)({
            badge: {
              backgroundColor: 'var(--success)',
              color: 'var(--success)',
              boxShadow: '0 0 0 2px #fff',
              '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
              },
            },
            '@keyframes ripple': {
              '0%': {
                transform: 'scale(.8)',
                opacity: 1,
              },
              '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
              },
            },
          })(p.a),
          t(187)),
        g =
          (Object(i.b)(
            function (e) {
              return {
                headerSearchHover: e.ThemeOptions.headerSearchHover,
              };
            },
            function (e) {
              return {
                setHeaderSearchHover: function (a) {
                  return e(Object(o.b)(a));
                },
              };
            }
          )(function (e) {
            var a = e.headerSearchHover,
              t = e.setHeaderSearchHover,
              n = function () {
                t(!a);
              };
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                'div',
                {
                  className: 'header-search-wrapper',
                },
                r.a.createElement(
                  'div',
                  {
                    className: Object(c.a)('search-wrapper', {
                      'is-active': a,
                    }),
                  },
                  r.a.createElement(
                    'label',
                    {
                      className: 'icon-wrapper',
                      htmlFor: 'header-search-input',
                    },
                    r.a.createElement(s.a, {
                      icon: ['fas', 'search'],
                    })
                  ),
                  r.a.createElement(E.a, {
                    onFocus: n,
                    onBlur: n,
                    id: 'header-search-input',
                    name: 'header-search-input',
                    type: 'search',
                    placeholder: 'Search terms...',
                    variant: 'outlined',
                  })
                )
              )
            );
          }),
          t(332),
          t(278),
          t(175),
          Object(i.b)(
            function (e) {
              return {
                sidebarShadow: e.ThemeOptions.sidebarShadow,
                sidebarFooter: e.ThemeOptions.sidebarFooter,
                sidebarStyle: e.ThemeOptions.sidebarStyle,
                sidebarToggleMobile: e.ThemeOptions.sidebarToggleMobile,
              };
            },
            function (e) {
              return {
                setSidebarToggleMobile: function (a) {
                  return e(Object(o.d)(a));
                },
              };
            }
          )(function (e) {
            var a = e.sidebarStyle,
              t = e.sidebarShadow,
              n = e.sidebarFooter,
              l = e.sidebarToggleMobile,
              i = e.setSidebarToggleMobile,
              s = e.locale;
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                'div',
                {
                  className: Object(c.a)('app-sidebar', a, {
                    'app-sidebar--shadow': t,
                  }),
                },
                r.a.createElement(y, {
                  locale: s,
                }),
                r.a.createElement(
                  'div',
                  {
                    className: 'app-sidebar--content',
                  },
                  r.a.createElement(D, {
                    locale: s,
                  })
                ),
                n && r.a.createElement(I, null)
              ),
              r.a.createElement('div', {
                onClick: function () {
                  i(!l);
                },
                className: Object(c.a)('app-sidebar-overlay', {
                  'is-active': l,
                }),
              })
            );
          })),
        v = t(708),
        x = t(12),
        w = t(176),
        N = t.n(w),
        y = Object(i.b)(
          function (e) {
            return {
              sidebarToggle: e.ThemeOptions.sidebarToggle,
              sidebarToggleMobile: e.ThemeOptions.sidebarToggleMobile,
            };
          },
          function (e) {
            return {
              setSidebarToggle: function (a) {
                return e(Object(o.c)(a));
              },
              setSidebarToggleMobile: function (a) {
                return e(Object(o.d)(a));
              },
            };
          }
        )(function (e) {
          var a = function () {
              o(!i);
            },
            t = e.sidebarToggleMobile,
            n = e.setSidebarToggleMobile,
            l = e.locale,
            i = e.sidebarToggle,
            o = e.setSidebarToggle;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              {
                className: 'app-sidebar--header',
              },
              r.a.createElement(
                'div',
                {
                  className: 'app-sidebar-logo',
                },
                r.a.createElement(
                  x.c,
                  {
                    to: 'zh' === l ? '/zh-cn' : '/',
                    title: 'Chia cryptocurrency blockchain explorer',
                    className: 'app-sidebar-logo',
                  },
                  r.a.createElement(
                    'div',
                    {
                      className: 'app-sidebar-logo--icon',
                    },
                    r.a.createElement('img', {
                      alt: 'Chia explorer',
                      src: N.a,
                    })
                  ),
                  r.a.createElement(
                    'div',
                    {
                      className: 'app-sidebar-logo--text',
                    },
                    r.a.createElement('span', null, 'Dashboard'),
                    r.a.createElement('b', null, 'Chia explorer')
                  )
                )
              ),
              r.a.createElement(
                v.a,
                {
                  title: 'Collapse sidebar',
                  placement: 'right',
                  arrow: !0,
                },
                r.a.createElement(
                  d.a,
                  {
                    onClick: a,
                    className: 'btn btn-sm collapse-sidebar-btn',
                  },
                  r.a.createElement(s.a, {
                    icon: ['far', 'dot-circle'],
                    size: 'lg',
                  })
                )
              ),
              r.a.createElement(
                d.a,
                {
                  className: Object(c.a)(
                    'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
                    {
                      'is-active': t,
                    }
                  ),
                  onClick: function () {
                    n(!t);
                  },
                },
                r.a.createElement(
                  'span',
                  {
                    className: 'hamburger-box',
                  },
                  r.a.createElement('span', {
                    className: 'hamburger-inner',
                  })
                )
              ),
              r.a.createElement(
                v.a,
                {
                  title: 'Expand sidebar',
                  placement: 'right',
                  arrow: !0,
                },
                r.a.createElement(
                  d.a,
                  {
                    onClick: a,
                    className: 'expand-sidebar-btn btn btn-sm',
                  },
                  r.a.createElement(s.a, {
                    icon: ['fas', 'arrows-alt-h'],
                  })
                )
              )
            )
          );
        }),
        k = t(696),
        C = t(281),
        A = t.n(C),
        S = t(143),
        O = t.n(S),
        j = t(142),
        T = t.n(j),
        z = t(695),
        D = Object(i.b)(
          function (e) {
            return {
              sidebarToggleMobile: e.ThemeOptions.sidebarToggleMobile,
            };
          },
          function (e) {
            return {
              setSidebarToggleMobile: function (a) {
                return e(Object(o.d)(a));
              },
            };
          }
        )(function (e) {
          var a = e.setSidebarToggleMobile,
            t = e.locale,
            i = function () {
              return a(!1);
            },
            s = Object(l.useState)(!0),
            o = Object(n.a)(s, 2),
            m = o[0],
            d = o[1],
            u = Object(l.useState)(!0),
            p = Object(n.a)(u, 2),
            h = p[0],
            b = p[1],
            f = Object(l.useState)(!0),
            E = Object(n.a)(f, 2),
            g = E[0],
            v = E[1],
            w = Object(l.useState)(!0),
            N = Object(n.a)(w, 2),
            y = N[0],
            C = N[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              A.a,
              null,
              r.a.createElement(
                'div',
                {
                  className: 'sidebar-navigation',
                },
                r.a.createElement(
                  'div',
                  {
                    className: 'sidebar-header',
                  },
                  r.a.createElement('span', null, 'Navigation')
                ),
                r.a.createElement(
                  'ul',
                  null,
                  r.a.createElement(
                    'li',
                    null,
                    r.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          d(!m), e.preventDefault();
                        },
                        className: Object(c.a)({
                          active: m,
                        }),
                      },
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-icon',
                        },
                        r.a.createElement(T.a, null)
                      ),
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-item-label',
                        },
                        r.a.createElement(z.a, {
                          id: 'blockchainExplorer',
                          description: 'Blockchain Explorer',
                          defaultMessage: 'Blockchain Explorer',
                        })
                      ),
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-icon-indicator',
                        },
                        r.a.createElement(O.a, null)
                      )
                    ),
                    r.a.createElement(
                      k.a,
                      {
                        in: m,
                      },
                      r.a.createElement(
                        'ul',
                        null,
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/blockchain/search' : '/blockchain/search',
                            },
                            r.a.createElement(z.a, {
                              id: 'search',
                              description: 'Search',
                              defaultMessage: 'Search',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/blockchain/blocks' : '/blockchain/blocks',
                            },
                            r.a.createElement(z.a, {
                              id: 'blocks',
                              description: 'Blocks',
                              defaultMessage: 'Blocks',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/blockchain/coins' : '/blockchain/coins',
                            },
                            r.a.createElement(z.a, {
                              id: 'coins',
                              description: 'Coins',
                              defaultMessage: 'Coins',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/top-farmers' : '/top-farmers',
                            },
                            r.a.createElement(z.a, {
                              id: 'topFarmers',
                              description: 'Top farmers',
                              defaultMessage: 'Top farmers',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/top-pools' : '/top-pools',
                            },
                            r.a.createElement(z.a, {
                              id: 'topPools',
                              description: 'Top pool pub keys',
                              defaultMessage: 'Top pool pub keys',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/pre-farm' : '/pre-farm',
                            },
                            'Pre-farm tracker'
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    'li',
                    null,
                    r.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          b(!h), e.preventDefault();
                        },
                        className: Object(c.a)({
                          active: h,
                        }),
                      },
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-icon',
                        },
                        r.a.createElement(T.a, null)
                      ),
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-item-label',
                        },
                        r.a.createElement(z.a, {
                          id: 'charts',
                          description: 'Charts',
                          defaultMessage: 'Charts',
                        })
                      ),
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-icon-indicator',
                        },
                        r.a.createElement(O.a, null)
                      )
                    ),
                    r.a.createElement(
                      k.a,
                      {
                        in: h,
                      },
                      r.a.createElement(
                        'ul',
                        null,
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/netspace' : '/charts/netspace',
                            },
                            r.a.createElement(z.a, {
                              id: 'netspace',
                              description: 'Netspace',
                              defaultMessage: 'Netspace',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/xchPrice' : '/charts/xchPrice',
                            },
                            r.a.createElement(z.a, {
                              id: 'chiaXchPrice',
                              description: 'Chia (XCH) Price',
                              defaultMessage: 'Chia (XCH) Price',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/xchTib' : '/charts/xchTib',
                            },
                            r.a.createElement(z.a, {
                              id: 'xchTibDay',
                              description: 'XCH/TiB Day',
                              defaultMessage: 'XCH/TiB Day',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/tibHoursXch' : '/charts/tibHoursXch',
                            },
                            r.a.createElement(z.a, {
                              id: 'tibHourXch',
                              description: 'TiB Hour/XCH',
                              defaultMessage: 'TiB Hour/XCH',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/usdTib' : '/charts/usdTib',
                            },
                            'USD/TiB Month'
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to:
                                'zh' === t ? '/zh-cn/charts/addressCount' : '/charts/addressCount',
                            },
                            r.a.createElement(z.a, {
                              id: 'uniqueAddressCount',
                              description: 'Unique address count',
                              defaultMessage: 'Unique address count',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/topFarmers' : '/charts/topFarmers',
                            },
                            r.a.createElement(z.a, {
                              id: 'topFarmers',
                              description: 'Top farmers',
                              defaultMessage: 'Top farmers',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/topPools' : '/charts/topPools',
                            },
                            r.a.createElement(z.a, {
                              id: 'topPools',
                              description: 'Top pool pub keys',
                              defaultMessage: 'Top pool pub keys',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to:
                                'zh' === t
                                  ? '/zh-cn/charts/networkDecentralisation'
                                  : '/charts/networkDecentralisation',
                            },
                            r.a.createElement(z.a, {
                              id: 'networkDecentralisation',
                              description: 'Network decentralisation',
                              defaultMessage: 'Network decentralisation',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/size' : '/charts/size',
                            },
                            r.a.createElement(z.a, {
                              id: 'proofOfSpaceSize',
                              description: 'Proof of space size',
                              defaultMessage: 'Proof of space size',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/difficulty' : '/charts/difficulty',
                            },
                            r.a.createElement(z.a, {
                              id: 'difficulty',
                              description: 'Difficulty',
                              defaultMessage: 'Difficulty',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: 'zh' === t ? '/zh-cn/charts/fees' : '/charts/fees',
                            },
                            r.a.createElement(z.a, {
                              id: 'fees',
                              description: 'Fees farmed',
                              defaultMessage: 'Fees farmed',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to:
                                'zh' === t
                                  ? '/zh-cn/charts/transaction-volume'
                                  : '/charts/transaction-volume',
                            },
                            r.a.createElement(z.a, {
                              id: 'transactionVolume',
                              description: 'Transaction volume',
                              defaultMessage: 'Transaction volume',
                            })
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to:
                                'zh' === t
                                  ? '/zh-cn/charts/average-transaction-fee'
                                  : '/charts/average-transaction-fee',
                            },
                            r.a.createElement(z.a, {
                              id: 'averageTransactionFee',
                              description: 'Average transaction fee',
                              defaultMessage: 'Average transaction fee',
                            })
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    'li',
                    null,
                    r.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          v(!g), e.preventDefault();
                        },
                        className: Object(c.a)({
                          active: g,
                        }),
                      },
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-icon',
                        },
                        r.a.createElement(T.a, null)
                      ),
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-item-label',
                        },
                        r.a.createElement(z.a, {
                          id: 'tools',
                          description: 'Tools',
                          defaultMessage: 'Tools',
                        })
                      ),
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-icon-indicator',
                        },
                        r.a.createElement(O.a, null)
                      )
                    ),
                    r.a.createElement(
                      k.a,
                      {
                        in: g,
                      },
                      r.a.createElement(
                        'ul',
                        null,
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: '/tools/address-puzzlehash-converter',
                            },
                            'Address / puzzle hash'
                          )
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    'li',
                    null,
                    r.a.createElement(
                      'a',
                      {
                        href: '#/',
                        onClick: function (e) {
                          C(!y), e.preventDefault();
                        },
                        className: Object(c.a)({
                          active: y,
                        }),
                      },
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-icon',
                        },
                        r.a.createElement(T.a, null)
                      ),
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-item-label',
                        },
                        'Chia Explorer Pro'
                      ),
                      r.a.createElement(
                        'span',
                        {
                          className: 'sidebar-icon-indicator',
                        },
                        r.a.createElement(O.a, null)
                      )
                    ),
                    r.a.createElement(
                      k.a,
                      {
                        in: y,
                      },
                      r.a.createElement(
                        'ul',
                        null,
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: '/pro/home',
                            },
                            'Pro Home'
                          )
                        ),
                        r.a.createElement(
                          'li',
                          null,
                          r.a.createElement(
                            x.c,
                            {
                              onClick: i,
                              to: '/api/v0.1',
                            },
                            'Chia Explorer REST API v0.1'
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        M = (t(88), t(282)),
        F = t.n(M),
        I = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              {
                className: 'app-sidebar--footer',
              },
              r.a.createElement(
                'ul',
                null,
                r.a.createElement(
                  'li',
                  null,
                  r.a.createElement(
                    v.a,
                    {
                      title: 'Overview Dashboard',
                      arrow: !0,
                      placement: 'top',
                    },
                    r.a.createElement(
                      d.a,
                      {
                        component: x.c,
                        to: '/Overview',
                        variant: 'text',
                        className: 'btn-transition-none mx-2 d-40 p-0',
                      },
                      r.a.createElement(F.a, null)
                    )
                  )
                )
              )
            )
          );
        },
        B = t(707),
        H = Object(i.b)(function (e) {
          return {
            footerFixed: e.ThemeOptions.footerFixed,
            footerShadow: e.ThemeOptions.footerShadow,
            footerBgTransparent: e.ThemeOptions.footerBgTransparent,
          };
        })(function (e) {
          var a = e.footerShadow,
            t = e.footerBgTransparent;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              B.a,
              {
                mdDown: !0,
              },
              r.a.createElement(
                'div',
                {
                  className: Object(c.a)('app-footer text-black-50', {
                    'app-footer--shadow': a,
                    'app-footer--opacity-bg': t,
                  }),
                },
                r.a.createElement(
                  'div',
                  {
                    className: 'app-footer--first',
                  },
                  r.a.createElement(
                    h.a,
                    {
                      component: 'div',
                      className: 'd-flex align-items-center',
                    },
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/',
                        className: 'rounded-sm',
                      },
                      'Homepage'
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/blockchain/blocks',
                        className: 'rounded-sm',
                      },
                      'Blockchain explorer'
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/charts/netspace',
                        className: 'rounded-sm',
                      },
                      'Charts'
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/blockchain/search',
                        className: 'rounded-sm',
                      },
                      'Search'
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/top-farmers',
                        className: 'rounded-sm',
                      },
                      'Top farmers'
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/top-pools',
                        className: 'rounded-sm',
                      },
                      'Top pool pub keys'
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/top-addresses',
                        className: 'rounded-sm',
                      },
                      'Top addresses'
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/biggest-spenders',
                        className: 'rounded-sm',
                      },
                      'Biggest spenders'
                    ),
                    r.a.createElement(
                      b.a,
                      {
                        button: !0,
                        component: x.b,
                        to: '/advertise',
                        className: 'rounded-sm',
                      },
                      'Advertise'
                    )
                  )
                ),
                r.a.createElement(
                  'div',
                  {
                    className: 'app-footer--second',
                  },
                  r.a.createElement('span', null, 'chiaexplorer.com'),
                  ' \xa9 2021',
                  r.a.createElement('br', null),
                  r.a.createElement(
                    'span',
                    {
                      style: {
                        fontSize: '8px',
                      },
                    },
                    'CHIA NETWORK INC, CHIA\u2122, the CHIA BLOCKCHAIN\u2122, the CHIA PROTOCOL\u2122, CHIALISP\u2122 and the \u201cleaf Logo\u201d (including the leaf logo alone when it refers to or indicates Chia), are trademarks or registered trademarks of Chia Network, Inc., a Delaware corporation, used under license.'
                  )
                )
              )
            )
          );
        });
      t(689);
      var P = t(283),
        U = t.n(P),
        R = t(103),
        L = Object(i.b)(function (e) {
          return {
            pageTitleStyle: e.ThemeOptions.pageTitleStyle,
            pageTitleBackground: e.ThemeOptions.pageTitleBackground,
            pageTitleShadow: e.ThemeOptions.pageTitleShadow,
            pageTitleIconBox: e.ThemeOptions.pageTitleIconBox,
            pageTitleDescription: e.ThemeOptions.pageTitleDescription,
          };
        })(function (e) {
          var a = e.pageTitleStyle,
            t = e.pageTitleBackground,
            n = e.pageTitleShadow,
            l = e.pageTitleIconBox,
            i = e.pageTitleDescription,
            s = e.titleHeading,
            o = e.titleDescription,
            d = e.children;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              {
                className: Object(c.a)('app-page-title', a, t, {
                  'app-page-title--shadow': n,
                }),
              },
              r.a.createElement(
                'div',
                {
                  style: {
                    width: '100%',
                  },
                },
                r.a.createElement(
                  'div',
                  {
                    style: {
                      width: '728px',
                      position: 'absolute',
                      right: '40px',
                      display: 'block',
                      zIndex: '100',
                    },
                  },
                  r.a.createElement(
                    m.a,
                    {
                      display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block',
                        xl: 'block',
                        width: '728px',
                        position: 'absolute',
                        right: '40px',
                        zIndex: '100',
                      },
                    },
                    r.a.createElement(R.a, null)
                  )
                ),
                r.a.createElement(
                  'div',
                  {
                    style: {
                      zIndex: '-1',
                    },
                  },
                  r.a.createElement(
                    'div',
                    {
                      className: 'app-page-title--first',
                    },
                    l &&
                      r.a.createElement(
                        'div',
                        {
                          className: 'app-page-title--iconbox d-70',
                        },
                        r.a.createElement(
                          'div',
                          {
                            className:
                              'd-70 d-flex align-items-center justify-content-center display-1',
                          },
                          r.a.createElement(U.a, {
                            className: 'text-primary',
                          })
                        )
                      ),
                    r.a.createElement(
                      'div',
                      {
                        style: {
                          maxWidth: '400px',
                          wordWrap: 'break-word',
                          zIndex: '2',
                        },
                        className: 'app-page-title--heading',
                      },
                      r.a.createElement(
                        'h1',
                        {
                          style: {
                            fontSize: '0.9rem',
                          },
                        },
                        s
                      ),
                      i &&
                        r.a.createElement(
                          'div',
                          {
                            className: 'app-page-title--description',
                          },
                          o
                        )
                    )
                  )
                )
              ),
              r.a.createElement(
                m.a,
                {
                  display: {
                    xs: 'block',
                    sm: 'block',
                    md: 'block',
                    lg: 'none',
                    xl: 'none',
                    width: '728px',
                    position: 'absolute',
                    right: '40px',
                    zIndex: '100',
                  },
                },
                r.a.createElement(R.a, null)
              ),
              r.a.createElement(
                'div',
                {
                  className: 'd-flex align-items-center',
                },
                d
              )
            )
          );
        }),
        X = t(128),
        W = t(145),
        J = function (e) {
          var a = e.sectionHeading,
            t = e.children;
          return r.a.createElement(
            X.a,
            {
              className: 'card-box overflow-visible mb-spacing-6-x2',
            },
            a &&
              r.a.createElement(
                'div',
                {
                  className: 'card-header',
                },
                r.a.createElement(
                  'div',
                  {
                    className: 'card-header--title font-size-md font-weight-bold py-2',
                  },
                  a
                )
              ),
            r.a.createElement(W.a, null, t)
          );
        };
    },
    89: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return u;
      }),
        t.d(a, 'c', function () {
          return d;
        }),
        t.d(a, 'a', function () {
          return p;
        });
      var n = t(115),
        l = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l',
        r = [996825010, 642813549, 513874426, 1027748829, 705979059],
        c = 'bech32',
        i = 'bech32m';

      function s(e) {
        return e == c ? 1 : e == i ? 734539939 : null;
      }

      function o(e) {
        for (var a = 1, t = 0; t < e.length; ++t) {
          var n = a >> 25;
          a = ((33554431 & a) << 5) ^ e[t];
          for (var l = 0; l < 5; ++l) (n >> l) & 1 && (a ^= r[l]);
        }
        return a;
      }

      function m(e) {
        var a,
          t = [];
        for (a = 0; a < e.length; ++a) t.push(e.charCodeAt(a) >> 5);
        for (t.push(0), a = 0; a < e.length; ++a) t.push(31 & e.charCodeAt(a));
        return t;
      }

      function d(e, a, t) {
        for (
          var n = a.concat(
              (function (e, a, t) {
                for (
                  var n = o(m(e).concat(a).concat([0, 0, 0, 0, 0, 0])) ^ s(t), l = [], r = 0;
                  r < 6;
                  ++r
                )
                  l.push((n >> (5 * (5 - r))) & 31);
                return l;
              })(e, a, t)
            ),
            r = e + '1',
            c = 0;
          c < n.length;
          ++c
        )
          r += l.charAt(n[c]);
        return r;
      }

      function u(e, a) {
        var t,
          n = !1,
          r = !1;
        for (t = 0; t < e.length; ++t) {
          if (e.charCodeAt(t) < 33 || e.charCodeAt(t) > 126) return null;
          e.charCodeAt(t) >= 97 && e.charCodeAt(t) <= 122 && (n = !0),
            e.charCodeAt(t) >= 65 && e.charCodeAt(t) <= 90 && (r = !0);
        }
        if (n && r) return null;
        var c = (e = e.toLowerCase()).lastIndexOf('1');
        if (c < 1 || c + 7 > e.length || e.length > 90) return null;
        var i = e.substring(0, c),
          d = [];
        for (t = c + 1; t < e.length; ++t) {
          var u = l.indexOf(e.charAt(t));
          if (-1 === u) return null;
          d.push(u);
        }
        return (function (e, a, t) {
          return o(m(e).concat(a)) === s(t);
        })(i, d, a)
          ? {
              hrp: i,
              data: d.slice(0, d.length - 6),
            }
          : null;
      }

      function p(e, a, t) {
        var l,
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          c = 0,
          i = 0,
          s = [],
          o = (1 << t) - 1,
          m = (1 << (a + t - 1)) - 1,
          d = Object(n.a)(e);
        try {
          for (d.s(); !(l = d.n()).done; ) {
            var u = l.value;
            if (u < 0 || u >> a) return null;
            for (c = ((c << a) | u) & m, i += a; i >= t; ) (i -= t), s.push((c >> i) & o);
          }
        } catch (p) {
          d.e(p);
        } finally {
          d.f();
        }
        if (r) i && s.push((c << (t - i)) & o);
        else if (i >= a || (c << (t - i)) & o) return null;
        return s;
      }
    },
  },
  [[353, 3, 4]],
]);
