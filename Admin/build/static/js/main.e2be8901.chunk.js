(this.webpackJsonplamaadmin = this.webpackJsonplamaadmin || []).push([
  [0],
  {
    316: function (e, t, s) {},
    321: function (e, t, s) {},
    322: function (e, t, s) {},
    324: function (e, t, s) {},
    459: function (e, t, s) {},
    478: function (e, t, s) {},
    479: function (e, t, s) {},
    480: function (e, t, s) {},
    481: function (e, t, s) {},
    484: function (e, t, s) {},
    485: function (e, t, s) {},
    486: function (e, t, s) {},
    487: function (e, t, s) {},
    488: function (e, t, s) {},
    491: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s(0),
        a = s(24),
        r = s.n(a),
        n = s(50),
        i = s(40),
        l = s(47),
        d = (s(316), s(536)),
        o = s(539),
        j = s(540),
        u = s(541),
        b = s(542),
        m = s(543),
        h = s(544),
        p = s(545),
        x = s(546),
        O = s(547),
        f = s(548),
        N = s(549),
        g = s(550),
        v = s(117),
        w = Object(v.b)({
          name: "user",
          initialState: { currentUser: null, isFetching: !1, error: !1 },
          reducers: {
            loginStart: function (e) {
              e.isFetching = !0;
            },
            loginSucess: function (e, t) {
              (e.isFetching = !1), (e.currentUser = t.payload);
            },
            loginFailure: function (e) {
              (e.isFetching = !1), (e.error = !0);
            },
            logout: function (e) {
              e.currentUser = null;
            },
          },
        }),
        I = w.actions,
        S = I.loginStart,
        y = I.loginSucess,
        U = I.loginFailure,
        k = I.logout,
        L = w.reducer,
        P = s(1);
      function T() {
        var e = Object(l.b)(),
          t = Object(i.g)();
        return Object(P.jsx)("div", {
          className: "sidebar",
          children: Object(P.jsxs)("div", {
            className: "sidebarWrapper",
            children: [
              Object(P.jsxs)("div", {
                className: "sidebarMenu",
                children: [
                  Object(P.jsx)("h3", {
                    className: "sidebarTitle",
                    children: "Dashboard",
                  }),
                  Object(P.jsxs)("ul", {
                    className: "sidebarList",
                    children: [
                      Object(P.jsx)(n.b, {
                        to: "/",
                        className: "link",
                        children: Object(P.jsxs)("li", {
                          className: "sidebarListItem active",
                          children: [
                            Object(P.jsx)(d.a, { className: "sidebarIcon" }),
                            "Home",
                          ],
                        }),
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(o.a, { className: "sidebarIcon" }),
                          "Analytics",
                        ],
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(j.a, { className: "sidebarIcon" }),
                          "Sales",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(P.jsxs)("div", {
                className: "sidebarMenu",
                children: [
                  Object(P.jsx)("h3", {
                    className: "sidebarTitle",
                    children: "Quick Menu",
                  }),
                  Object(P.jsxs)("ul", {
                    className: "sidebarList",
                    children: [
                      Object(P.jsx)(n.b, {
                        to: "/users",
                        className: "link",
                        children: Object(P.jsxs)("li", {
                          className: "sidebarListItem",
                          children: [
                            Object(P.jsx)(u.a, { className: "sidebarIcon" }),
                            "Users",
                          ],
                        }),
                      }),
                      Object(P.jsx)(n.b, {
                        to: "/products",
                        className: "link",
                        children: Object(P.jsxs)("li", {
                          className: "sidebarListItem",
                          children: [
                            Object(P.jsx)(b.a, { className: "sidebarIcon" }),
                            "Products",
                          ],
                        }),
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(m.a, { className: "sidebarIcon" }),
                          "Transactions",
                        ],
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(h.a, { className: "sidebarIcon" }),
                          "Reports",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(P.jsxs)("div", {
                className: "sidebarMenu",
                children: [
                  Object(P.jsx)("h3", {
                    className: "sidebarTitle",
                    children: "Notifications",
                  }),
                  Object(P.jsxs)("ul", {
                    className: "sidebarList",
                    children: [
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(p.a, { className: "sidebarIcon" }),
                          "Mail",
                        ],
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(x.a, { className: "sidebarIcon" }),
                          "Feedback",
                        ],
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(O.a, { className: "sidebarIcon" }),
                          "Messages",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(P.jsxs)("div", {
                className: "sidebarMenu",
                children: [
                  Object(P.jsx)("h3", {
                    className: "sidebarTitle",
                    children: "Staff",
                  }),
                  Object(P.jsxs)("ul", {
                    className: "sidebarList",
                    children: [
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(f.a, { className: "sidebarIcon" }),
                          "Manage",
                        ],
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(o.a, { className: "sidebarIcon" }),
                          "Analytics",
                        ],
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        children: [
                          Object(P.jsx)(N.a, { className: "sidebarIcon" }),
                          "Reports",
                        ],
                      }),
                      Object(P.jsxs)("li", {
                        className: "sidebarListItem",
                        onClick: function () {
                          e(k()), t.push("/login");
                        },
                        children: [
                          Object(P.jsx)(g.a, { className: "sidebarIcon" }),
                          "Logout",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      s(321);
      var F = s(551),
        C = s(552),
        A = s(553);
      function M() {
        return Object(P.jsx)("div", {
          className: "topbar",
          children: Object(P.jsxs)("div", {
            className: "topbarWrapper",
            children: [
              Object(P.jsx)("div", {
                className: "topLeft",
                children: Object(P.jsx)("span", {
                  className: "logo",
                  children: "Admin",
                }),
              }),
              Object(P.jsxs)("div", {
                className: "topRight",
                children: [
                  Object(P.jsxs)("div", {
                    className: "topbarIconContainer",
                    children: [
                      Object(P.jsx)(F.a, {}),
                      Object(P.jsx)("span", {
                        className: "topIconBadge",
                        children: "2",
                      }),
                    ],
                  }),
                  Object(P.jsxs)("div", {
                    className: "topbarIconContainer",
                    children: [
                      Object(P.jsx)(C.a, {}),
                      Object(P.jsx)("span", {
                        className: "topIconBadge",
                        children: "2",
                      }),
                    ],
                  }),
                  Object(P.jsx)("div", {
                    className: "topbarIconContainer",
                    children: Object(P.jsx)(A.a, {}),
                  }),
                  Object(P.jsx)("img", {
                    src: "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                    alt: "",
                    className: "topAvatar",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      s(322);
      var B = s(15),
        J = s.n(B),
        D = s(37),
        E = s(30),
        _ = s(7),
        R = (s(324), s(554)),
        $ = s(570),
        K = s(272),
        Y = s(279),
        z = s(144),
        V = s(558);
      function W(e) {
        var t = e.title,
          s = e.data,
          c = e.dataKey,
          a = e.grid;
        return Object(P.jsxs)("div", {
          className: "chart",
          children: [
            Object(P.jsx)("h3", { className: "chartTitle", children: t }),
            Object(P.jsx)(R.a, {
              width: "100%",
              aspect: 4,
              children: Object(P.jsxs)($.a, {
                data: s,
                children: [
                  Object(P.jsx)(K.a, { dataKey: "name", stroke: "#5550bd" }),
                  Object(P.jsx)(Y.a, {
                    type: "monotone",
                    dataKey: c,
                    stroke: "#5550bd",
                  }),
                  Object(P.jsx)(z.a, {}),
                  a &&
                    Object(P.jsx)(V.a, {
                      stroke: "#e0dfdf",
                      strokeDasharray: "5 5",
                    }),
                ],
              }),
            }),
          ],
        });
      }
      s(459);
      var G,
        H = s(559),
        q = s(560),
        Q = s(198),
        X = s.n(Q),
        Z = "https://ecommerce-mern-9k3m.vercel.app/api/",
        ee =
          null ===
            (G = JSON.parse(
              JSON.parse(localStorage.getItem("persist:root")).user
            ).currentUser) || void 0 === G
            ? void 0
            : G.accessToken;
      console.log(ee);
      var te = X.a.create({ baseURL: Z }),
        se = X.a.create({
          baseURL: Z,
          headers: { token: "Bearer ".concat(ee) },
        });
      function ce() {
        var e,
          t = Object(c.useState)([]),
          s = Object(_.a)(t, 2),
          a = s[0],
          r = s[1],
          n = Object(c.useState)(0),
          i = Object(_.a)(n, 2),
          l = i[0],
          d = i[1];
        return (
          Object(c.useEffect)(function () {
            (function () {
              var e = Object(E.a)(
                J.a.mark(function e() {
                  var t;
                  return J.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              se.get("orders/income")
                            );
                          case 3:
                            (t = e.sent),
                              r(t.data),
                              d(
                                (100 * t.data[1].total) / t.data[0].total - 100
                              ),
                              (e.next = 10);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(0));
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []),
          Object(P.jsxs)("div", {
            className: "featured",
            children: [
              Object(P.jsxs)("div", {
                className: "featuredItem",
                children: [
                  Object(P.jsx)("span", {
                    className: "featuredTitle",
                    children: "Revanue",
                  }),
                  Object(P.jsxs)("div", {
                    className: "featuredMoneyContainer",
                    children: [
                      Object(P.jsxs)("span", {
                        className: "featuredMoney",
                        children: [
                          "Rs ",
                          null === (e = a[1]) || void 0 === e
                            ? void 0
                            : e.total,
                        ],
                      }),
                      Object(P.jsxs)("span", {
                        className: "featuredMoneyRate",
                        children: [
                          "%",
                          Math.floor(l),
                          " ",
                          l < 0
                            ? Object(P.jsx)(H.a, {
                                className: "featuredIcon negative",
                              })
                            : Object(P.jsx)(q.a, { className: "featuredIcon" }),
                        ],
                      }),
                    ],
                  }),
                  Object(P.jsx)("span", {
                    className: "featuredSub",
                    children: "Compared to last month",
                  }),
                ],
              }),
              Object(P.jsxs)("div", {
                className: "featuredItem",
                children: [
                  Object(P.jsx)("span", {
                    className: "featuredTitle",
                    children: "Sales",
                  }),
                  Object(P.jsxs)("div", {
                    className: "featuredMoneyContainer",
                    children: [
                      Object(P.jsx)("span", {
                        className: "featuredMoney",
                        children: "$4,415",
                      }),
                      Object(P.jsxs)("span", {
                        className: "featuredMoneyRate",
                        children: [
                          "-1.4 ",
                          Object(P.jsx)(H.a, {
                            className: "featuredIcon negative",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(P.jsx)("span", {
                    className: "featuredSub",
                    children: "Compared to last month",
                  }),
                ],
              }),
              Object(P.jsxs)("div", {
                className: "featuredItem",
                children: [
                  Object(P.jsx)("span", {
                    className: "featuredTitle",
                    children: "Cost",
                  }),
                  Object(P.jsxs)("div", {
                    className: "featuredMoneyContainer",
                    children: [
                      Object(P.jsx)("span", {
                        className: "featuredMoney",
                        children: "$2,225",
                      }),
                      Object(P.jsxs)("span", {
                        className: "featuredMoneyRate",
                        children: [
                          "+2.4 ",
                          Object(P.jsx)(q.a, { className: "featuredIcon" }),
                        ],
                      }),
                    ],
                  }),
                  Object(P.jsx)("span", {
                    className: "featuredSub",
                    children: "Compared to last month",
                  }),
                ],
              }),
            ],
          })
        );
      }
      s(478), s(479);
      var ae = s(561);
      function re() {
        var e = Object(c.useState)([]),
          t = Object(_.a)(e, 2),
          s = t[0],
          a = t[1];
        return (
          Object(c.useEffect)(function () {
            (function () {
              var e = Object(E.a)(
                J.a.mark(function e() {
                  var t;
                  return J.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              se.get("users/?new=true")
                            );
                          case 3:
                            (t = e.sent), a(t.data), (e.next = 9);
                            break;
                          case 7:
                            (e.prev = 7), (e.t0 = e.catch(0));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []),
          Object(P.jsxs)("div", {
            className: "widgetSm",
            children: [
              Object(P.jsx)("span", {
                className: "widgetSmTitle",
                children: "New Join Members",
              }),
              Object(P.jsx)("ul", {
                className: "widgetSmList",
                children: s.map(function (e) {
                  return Object(P.jsxs)(
                    "li",
                    {
                      className: "widgetSmListItem",
                      children: [
                        Object(P.jsx)("img", {
                          src:
                            s.img ||
                            "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",
                          alt: "",
                          className: "widgetSmImg",
                        }),
                        Object(P.jsx)("div", {
                          className: "widgetSmUser",
                          children: Object(P.jsx)("span", {
                            className: "widgetSmUsername",
                            children: e.username,
                          }),
                        }),
                        Object(P.jsxs)("button", {
                          className: "widgetSmButton",
                          children: [
                            Object(P.jsx)(ae.a, { className: "widgetSmIcon" }),
                            "Display",
                          ],
                        }),
                      ],
                    },
                    e.id
                  );
                }),
              }),
            ],
          })
        );
      }
      s(480);
      var ne = s(278);
      function ie() {
        var e = Object(c.useState)([]),
          t = Object(_.a)(e, 2),
          s = t[0],
          a = t[1];
        Object(c.useEffect)(function () {
          (function () {
            var e = Object(E.a)(
              J.a.mark(function e() {
                var t;
                return J.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), se.get("orders");
                        case 3:
                          (t = e.sent), a(t.data), (e.next = 9);
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(0));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []);
        var r = function (e) {
          var t = e.type;
          return Object(P.jsx)("button", {
            className: "widgetLgButton " + t,
            children: t,
          });
        };
        return Object(P.jsxs)("div", {
          className: "widgetLg",
          children: [
            Object(P.jsx)("h3", {
              className: "widgetLgTitle",
              children: "Latest transactions",
            }),
            Object(P.jsxs)("table", {
              className: "widgetLgTable",
              children: [
                Object(P.jsxs)("tr", {
                  className: "widgetLgTr",
                  children: [
                    Object(P.jsx)("th", {
                      className: "widgetLgTh",
                      children: "Customer",
                    }),
                    Object(P.jsx)("th", {
                      className: "widgetLgTh",
                      children: "Date",
                    }),
                    Object(P.jsx)("th", {
                      className: "widgetLgTh",
                      children: "Amount",
                    }),
                    Object(P.jsx)("th", {
                      className: "widgetLgTh",
                      children: "Status",
                    }),
                  ],
                }),
                s.map(function (e) {
                  return Object(P.jsxs)(
                    "tr",
                    {
                      className: "widgetLgTr",
                      children: [
                        Object(P.jsx)("td", {
                          className: "widgetLgUser",
                          children: Object(P.jsx)("span", {
                            className: "widgetLgName",
                            children: e.userId,
                          }),
                        }),
                        Object(P.jsx)("td", {
                          className: "widgetLgDate",
                          children: Object(ne.a)(e.createdAt),
                        }),
                        Object(P.jsxs)("td", {
                          className: "widgetLgAmount",
                          children: ["$1", e.amount],
                        }),
                        Object(P.jsx)("td", {
                          className: "widgetLgStatus",
                          children: Object(P.jsx)(r, { type: e.status }),
                        }),
                      ],
                    },
                    e._id
                  );
                }),
              ],
            }),
          ],
        });
      }
      function le() {
        var e = Object(c.useState)([]),
          t = Object(_.a)(e, 2),
          s = t[0],
          a = t[1],
          r = Object(c.useMemo)(function () {
            return [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Agu",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
          }, []);
        return (
          Object(c.useEffect)(
            function () {
              (function () {
                var e = Object(E.a)(
                  J.a.mark(function e() {
                    return J.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), se.get("/users/stats");
                          case 2:
                            e.sent.data.map(function (e) {
                              return a(function (t) {
                                return [].concat(Object(D.a)(t), [
                                  {
                                    name: r[e._id - 1],
                                    "Active User": e.total,
                                  },
                                ]);
                              });
                            });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [r]
          ),
          Object(P.jsxs)("div", {
            className: "home",
            children: [
              Object(P.jsx)(ce, {}),
              Object(P.jsx)(W, {
                data: s,
                title: "User Analytics",
                grid: !0,
                dataKey: "Active User",
              }),
              Object(P.jsxs)("div", {
                className: "homeWidgets",
                children: [Object(P.jsx)(re, {}), Object(P.jsx)(ie, {})],
              }),
            ],
          })
        );
      }
      s(481);
      var de = s(164),
        oe = s(562),
        je = [
          {
            id: 1,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 2,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 3,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 4,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 5,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 6,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 7,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 8,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 9,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
          {
            id: 10,
            username: "Jon Snow",
            avatar:
              "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            email: "jon@gmail.com",
            status: "active",
            transaction: "$120.00",
          },
        ];
      function ue() {
        var e = Object(c.useState)(je),
          t = Object(_.a)(e, 2),
          s = t[0],
          a = t[1],
          r = [
            { field: "id", headerName: "ID", width: 90 },
            {
              field: "user",
              headerName: "User",
              width: 200,
              renderCell: function (e) {
                return Object(P.jsxs)("div", {
                  className: "userListUser",
                  children: [
                    Object(P.jsx)("img", {
                      className: "userListImg",
                      src: e.row.avatar,
                      alt: "",
                    }),
                    e.row.username,
                  ],
                });
              },
            },
            { field: "email", headerName: "Email", width: 200 },
            { field: "status", headerName: "Status", width: 120 },
            {
              field: "transaction",
              headerName: "Transaction Volume",
              width: 160,
            },
            {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: function (e) {
                return Object(P.jsxs)(P.Fragment, {
                  children: [
                    Object(P.jsx)(n.b, {
                      to: "/user/" + e.row.id,
                      children: Object(P.jsx)("button", {
                        className: "userListEdit",
                        children: "Edit",
                      }),
                    }),
                    Object(P.jsx)(oe.a, {
                      className: "userListDelete",
                      onClick: function () {
                        return (
                          (t = e.row.id),
                          void a(
                            s.filter(function (e) {
                              return e.id !== t;
                            })
                          )
                        );
                        var t;
                      },
                    }),
                  ],
                });
              },
            },
          ];
        return Object(P.jsx)("div", {
          className: "userList",
          children: Object(P.jsx)(de.a, {
            rows: s,
            disableSelectionOnClick: !0,
            columns: r,
            pageSize: 8,
            checkboxSelection: !0,
          }),
        });
      }
      var be = s(565),
        me = s(566),
        he = s(567),
        pe = s(568);
      s(484);
      function xe() {
        return Object(P.jsxs)("div", {
          className: "user",
          children: [
            Object(P.jsxs)("div", {
              className: "userTitleContainer",
              children: [
                Object(P.jsx)("h1", {
                  className: "userTitle",
                  children: "Edit User",
                }),
                Object(P.jsx)(n.b, {
                  to: "/newUser",
                  children: Object(P.jsx)("button", {
                    className: "userAddButton",
                    children: "Create",
                  }),
                }),
              ],
            }),
            Object(P.jsxs)("div", {
              className: "userContainer",
              children: [
                Object(P.jsxs)("div", {
                  className: "userShow",
                  children: [
                    Object(P.jsxs)("div", {
                      className: "userShowTop",
                      children: [
                        Object(P.jsx)("img", {
                          src: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                          alt: "",
                          className: "userShowImg",
                        }),
                        Object(P.jsxs)("div", {
                          className: "userShowTopTitle",
                          children: [
                            Object(P.jsx)("span", {
                              className: "userShowUsername",
                              children: "Anna Becker",
                            }),
                            Object(P.jsx)("span", {
                              className: "userShowUserTitle",
                              children: "Software Engineer",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(P.jsxs)("div", {
                      className: "userShowBottom",
                      children: [
                        Object(P.jsx)("span", {
                          className: "userShowTitle",
                          children: "Account Details",
                        }),
                        Object(P.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(P.jsx)(u.a, { className: "userShowIcon" }),
                            Object(P.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "annabeck99",
                            }),
                          ],
                        }),
                        Object(P.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(P.jsx)(be.a, { className: "userShowIcon" }),
                            Object(P.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "10.12.1999",
                            }),
                          ],
                        }),
                        Object(P.jsx)("span", {
                          className: "userShowTitle",
                          children: "Contact Details",
                        }),
                        Object(P.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(P.jsx)(me.a, { className: "userShowIcon" }),
                            Object(P.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "+1 123 456 67",
                            }),
                          ],
                        }),
                        Object(P.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(P.jsx)(p.a, { className: "userShowIcon" }),
                            Object(P.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "annabeck99@gmail.com",
                            }),
                          ],
                        }),
                        Object(P.jsxs)("div", {
                          className: "userShowInfo",
                          children: [
                            Object(P.jsx)(he.a, { className: "userShowIcon" }),
                            Object(P.jsx)("span", {
                              className: "userShowInfoTitle",
                              children: "New York | USA",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "userUpdate",
                  children: [
                    Object(P.jsx)("span", {
                      className: "userUpdateTitle",
                      children: "Edit",
                    }),
                    Object(P.jsxs)("form", {
                      className: "userUpdateForm",
                      children: [
                        Object(P.jsxs)("div", {
                          className: "userUpdateLeft",
                          children: [
                            Object(P.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(P.jsx)("label", {
                                  children: "Username",
                                }),
                                Object(P.jsx)("input", {
                                  type: "text",
                                  placeholder: "annabeck99",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                            Object(P.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(P.jsx)("label", {
                                  children: "Full Name",
                                }),
                                Object(P.jsx)("input", {
                                  type: "text",
                                  placeholder: "Anna Becker",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                            Object(P.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(P.jsx)("label", { children: "Email" }),
                                Object(P.jsx)("input", {
                                  type: "text",
                                  placeholder: "annabeck99@gmail.com",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                            Object(P.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(P.jsx)("label", { children: "Phone" }),
                                Object(P.jsx)("input", {
                                  type: "text",
                                  placeholder: "+1 123 456 67",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                            Object(P.jsxs)("div", {
                              className: "userUpdateItem",
                              children: [
                                Object(P.jsx)("label", { children: "Address" }),
                                Object(P.jsx)("input", {
                                  type: "text",
                                  placeholder: "New York | USA",
                                  className: "userUpdateInput",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(P.jsxs)("div", {
                          className: "userUpdateRight",
                          children: [
                            Object(P.jsxs)("div", {
                              className: "userUpdateUpload",
                              children: [
                                Object(P.jsx)("img", {
                                  className: "userUpdateImg",
                                  src: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                                  alt: "",
                                }),
                                Object(P.jsx)("label", {
                                  htmlFor: "file",
                                  children: Object(P.jsx)(pe.a, {
                                    className: "userUpdateIcon",
                                  }),
                                }),
                                Object(P.jsx)("input", {
                                  type: "file",
                                  id: "file",
                                  style: { display: "none" },
                                }),
                              ],
                            }),
                            Object(P.jsx)("button", {
                              className: "userUpdateButton",
                              children: "Update",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      s(485);
      function Oe() {
        return Object(P.jsxs)("div", {
          className: "newUser",
          children: [
            Object(P.jsx)("h1", {
              className: "newUserTitle",
              children: "New User",
            }),
            Object(P.jsxs)("form", {
              className: "newUserForm",
              children: [
                Object(P.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(P.jsx)("label", { children: "Username" }),
                    Object(P.jsx)("input", {
                      type: "text",
                      placeholder: "john",
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(P.jsx)("label", { children: "Full Name" }),
                    Object(P.jsx)("input", {
                      type: "text",
                      placeholder: "John Smith",
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(P.jsx)("label", { children: "Email" }),
                    Object(P.jsx)("input", {
                      type: "email",
                      placeholder: "john@gmail.com",
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(P.jsx)("label", { children: "Password" }),
                    Object(P.jsx)("input", {
                      type: "password",
                      placeholder: "password",
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(P.jsx)("label", { children: "Phone" }),
                    Object(P.jsx)("input", {
                      type: "text",
                      placeholder: "+1 123 456 78",
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(P.jsx)("label", { children: "Address" }),
                    Object(P.jsx)("input", {
                      type: "text",
                      placeholder: "New York | USA",
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(P.jsx)("label", { children: "Gender" }),
                    Object(P.jsxs)("div", {
                      className: "newUserGender",
                      children: [
                        Object(P.jsx)("input", {
                          type: "radio",
                          name: "gender",
                          id: "male",
                          value: "male",
                        }),
                        Object(P.jsx)("label", {
                          for: "male",
                          children: "Male",
                        }),
                        Object(P.jsx)("input", {
                          type: "radio",
                          name: "gender",
                          id: "female",
                          value: "female",
                        }),
                        Object(P.jsx)("label", {
                          for: "female",
                          children: "Female",
                        }),
                        Object(P.jsx)("input", {
                          type: "radio",
                          name: "gender",
                          id: "other",
                          value: "other",
                        }),
                        Object(P.jsx)("label", {
                          for: "other",
                          children: "Other",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "newUserItem",
                  children: [
                    Object(P.jsx)("label", { children: "Active" }),
                    Object(P.jsxs)("select", {
                      className: "newUserSelect",
                      name: "active",
                      id: "active",
                      children: [
                        Object(P.jsx)("option", {
                          value: "yes",
                          children: "Yes",
                        }),
                        Object(P.jsx)("option", {
                          value: "no",
                          children: "No",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(P.jsx)("button", {
                  className: "newUserButton",
                  children: "Create",
                }),
              ],
            }),
          ],
        });
      }
      s(486);
      var fe = Object(v.b)({
          name: "product",
          initialState: { products: [], isFetching: !1, error: !1 },
          reducers: {
            getProductStart: function (e) {
              (e.isFetching = !0), (e.error = !1);
            },
            getProductSuccess: function (e, t) {
              (e.isFetching = !1), (e.products = t.payload);
            },
            getProductFailure: function (e) {
              (e.isFetching = !1), (e.error = !0);
            },
            deleteProductStart: function (e) {
              (e.isFetching = !0), (e.error = !1);
            },
            deleteProductSuccess: function (e, t) {
              (e.isFetching = !1),
                e.products.splice(
                  e.products.findIndex(function (e) {
                    return e._id === t.payload;
                  }),
                  1
                );
            },
            deleteProductFailure: function (e) {
              (e.isFetching = !1), (e.error = !0);
            },
            updateProductStart: function (e) {
              (e.isFetching = !0), (e.error = !1);
            },
            updateProductSuccess: function (e, t) {
              (e.isFetching = !1),
                (e.products[
                  e.products.findIndex(function (e) {
                    return e._id === t.payload.id;
                  })
                ] = t.payload.product);
            },
            updateProductFailure: function (e) {
              (e.isFetching = !1), (e.error = !0);
            },
            addProductStart: function (e) {
              (e.isFetching = !0), (e.error = !1);
            },
            addProductSuccess: function (e, t) {
              (e.isFetching = !1), e.products.push(t.payload);
            },
            addProductFailure: function (e) {
              (e.isFetching = !1), (e.error = !0);
            },
          },
        }),
        Ne = fe.actions,
        ge = Ne.getProductStart,
        ve = Ne.getProductSuccess,
        we = Ne.getProductFailure,
        Ie = Ne.deleteProductStart,
        Se = Ne.deleteProductSuccess,
        ye = Ne.deleteProductFailure,
        Ue =
          (Ne.updateProductStart,
          Ne.updateProductSuccess,
          Ne.updateProductFailure,
          Ne.addProductStart),
        ke = Ne.addProductSuccess,
        Le = Ne.addProductFailure,
        Pe = fe.reducer,
        Te = (function () {
          var e = Object(E.a)(
            J.a.mark(function e(t, s) {
              var c;
              return J.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(S()),
                          (e.prev = 1),
                          (e.next = 4),
                          te.post("/auth/login", s)
                        );
                      case 4:
                        (c = e.sent), t(y(c.data)), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(1)), t(U());
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t, s) {
            return e.apply(this, arguments);
          };
        })(),
        Fe = (function () {
          var e = Object(E.a)(
            J.a.mark(function e(t) {
              var s;
              return J.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t(ge()),
                          (e.prev = 1),
                          (e.next = 4),
                          te.get("/products")
                        );
                      case 4:
                        (s = e.sent), t(ve(s.data)), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(1)), t(we());
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ce = (function () {
          var e = Object(E.a)(
            J.a.mark(function e(t, s) {
              return J.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      s(Ie());
                      try {
                        s(Se(t));
                      } catch (c) {
                        s(ye());
                      }
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, s) {
            return e.apply(this, arguments);
          };
        })(),
        Ae = (function () {
          var e = Object(E.a)(
            J.a.mark(function e(t, s) {
              var c;
              return J.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          s(Ue()),
                          (e.prev = 1),
                          (e.next = 4),
                          se.post("/products", t)
                        );
                      case 4:
                        (c = e.sent), s(ke(c.data)), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(1)), s(Le());
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t, s) {
            return e.apply(this, arguments);
          };
        })();
      function Me() {
        var e = Object(l.b)(),
          t = Object(l.c)(function (e) {
            return e.product.products;
          });
        Object(c.useEffect)(
          function () {
            Fe(e);
          },
          [e]
        );
        var s = [
          { field: "_id", headerName: "ID", width: 90 },
          {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: function (e) {
              return Object(P.jsxs)("div", {
                className: "productListItem",
                children: [
                  Object(P.jsx)("img", {
                    className: "productListImg",
                    src: e.row.img,
                    alt: "",
                  }),
                  e.row.title,
                ],
              });
            },
          },
          { field: "inStock", headerName: "Stock", width: 220 },
          { field: "status", headerName: "Status", width: 120 },
          { field: "price", headerName: "Price", width: 160 },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: function (t) {
              return Object(P.jsxs)(P.Fragment, {
                children: [
                  Object(P.jsx)(n.b, {
                    to: "/product/" + t.row._id,
                    children: Object(P.jsx)("button", {
                      className: "productListEdit",
                      children: "Edit",
                    }),
                  }),
                  Object(P.jsx)(oe.a, {
                    className: "productListDelete",
                    onClick: function () {
                      return (s = t.row._id), void Ce(s, e);
                      var s;
                    },
                  }),
                ],
              });
            },
          },
        ];
        return Object(P.jsx)("div", {
          className: "productList",
          children: Object(P.jsx)(de.a, {
            rows: t,
            disableSelectionOnClick: !0,
            columns: s,
            getRowId: function (e) {
              return e._id;
            },
            pageSize: 8,
            checkboxSelection: !0,
          }),
        });
      }
      s(487);
      function Be() {
        var e = Object(i.h)(),
          t = Object(c.useState)([]),
          s = Object(_.a)(t, 2),
          a = s[0],
          r = s[1],
          d = e.pathname.split("/")[2],
          o = Object(l.c)(function (e) {
            return e.product.products.find(function (e) {
              return e._id === d;
            });
          });
        console.log(o);
        var j = Object(c.useMemo)(function () {
          return [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
        }, []);
        return (
          Object(c.useEffect)(function () {
            (function () {
              var e = Object(E.a)(
                J.a.mark(function e() {
                  var t;
                  return J.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), se.get("/orders/income/?pid" + d)
                          );
                        case 2:
                          (t = e.sent),
                            t.data
                              .sort(function (e, t) {
                                return e._id - t._id;
                              })
                              .map(function (e) {
                                r(function (t) {
                                  return [].concat(Object(D.a)(t), [
                                    { name: j[e._id - 1], Sales: e.total },
                                  ]);
                                });
                              });
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
            })()();
          }, []),
          Object(P.jsxs)("div", {
            className: "product",
            children: [
              Object(P.jsxs)("div", {
                className: "productTitleContainer",
                children: [
                  Object(P.jsx)("h1", {
                    className: "productTitle",
                    children: "Product",
                  }),
                  Object(P.jsx)(n.b, {
                    to: "/newproduct",
                    children: Object(P.jsx)("button", {
                      className: "productAddButton",
                      children: "Create",
                    }),
                  }),
                ],
              }),
              Object(P.jsxs)("div", {
                className: "productTop",
                children: [
                  Object(P.jsx)("div", {
                    className: "productTopLeft",
                    children: Object(P.jsx)(W, {
                      data: a,
                      dataKey: "Sales",
                      title: "Sales Performance",
                    }),
                  }),
                  Object(P.jsxs)("div", {
                    className: "productTopRight",
                    children: [
                      Object(P.jsxs)("div", {
                        className: "productInfoTop",
                        children: [
                          Object(P.jsx)("img", {
                            src: o.img,
                            alt: "",
                            className: "productInfoImg",
                          }),
                          Object(P.jsx)("span", {
                            className: "productName",
                            children: o.title,
                          }),
                        ],
                      }),
                      Object(P.jsxs)("div", {
                        className: "productInfoBottom",
                        children: [
                          Object(P.jsxs)("div", {
                            className: "productInfoItem",
                            children: [
                              Object(P.jsx)("span", {
                                className: "productInfoKey",
                                children: "id:",
                              }),
                              Object(P.jsx)("span", {
                                className: "productInfoValue",
                                children: o._id,
                              }),
                            ],
                          }),
                          Object(P.jsxs)("div", {
                            className: "productInfoItem",
                            children: [
                              Object(P.jsx)("span", {
                                className: "productInfoKey",
                                children: "sales:",
                              }),
                              Object(P.jsx)("span", {
                                className: "productInfoValue",
                                children: "5123",
                              }),
                            ],
                          }),
                          Object(P.jsxs)("div", {
                            className: "productInfoItem",
                            children: [
                              Object(P.jsx)("span", {
                                className: "productInfoKey",
                                children: "in stock:",
                              }),
                              Object(P.jsx)("span", {
                                className: "productInfoValue",
                                children: o.inStock,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(P.jsx)("div", {
                className: "productBottom",
                children: Object(P.jsxs)("form", {
                  className: "productForm",
                  children: [
                    Object(P.jsxs)("div", {
                      className: "productFormLeft",
                      children: [
                        Object(P.jsx)("label", { children: "Product Name" }),
                        Object(P.jsx)("input", {
                          type: "text",
                          placeholder: o.title,
                        }),
                        Object(P.jsx)("label", {
                          children: "Product Description",
                        }),
                        Object(P.jsx)("input", {
                          type: "text",
                          placeholder: o.desc,
                        }),
                        Object(P.jsx)("label", { children: "Price " }),
                        Object(P.jsx)("input", {
                          type: "text",
                          placeholder: o.price,
                        }),
                        Object(P.jsx)("label", { children: "In Stock" }),
                        Object(P.jsxs)("select", {
                          name: "inStock",
                          id: "idStock",
                          children: [
                            Object(P.jsx)("option", {
                              value: "true",
                              children: "Yes",
                            }),
                            Object(P.jsx)("option", {
                              value: "false",
                              children: "No",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(P.jsxs)("div", {
                      className: "productFormRight",
                      children: [
                        Object(P.jsxs)("div", {
                          className: "productUpload",
                          children: [
                            Object(P.jsx)("img", {
                              src: o.img,
                              alt: "",
                              className: "productUploadImg",
                            }),
                            Object(P.jsx)("label", {
                              for: "file",
                              children: Object(P.jsx)(pe.a, {}),
                            }),
                            Object(P.jsx)("input", {
                              type: "file",
                              id: "file",
                              style: { display: "none" },
                            }),
                          ],
                        }),
                        Object(P.jsx)("button", {
                          className: "productButton",
                          children: "Update",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var Je = s(16),
        De = s(142),
        Ee = (s(488), s(143)),
        _e = s(274),
        Re = Object(_e.a)({
          apiKey: "AIzaSyCAgs2aqahfkBK_3tYrAHnBSorNllbefcs",
          authDomain: "shop-d3e26.firebaseapp.com",
          projectId: "shop-d3e26",
          storageBucket: "shop-d3e26.appspot.com",
          messagingSenderId: "608068808292",
          appId: "1:608068808292:web:a066cc13995c3f566bf971",
        });
      function $e() {
        var e = Object(c.useState)({}),
          t = Object(_.a)(e, 2),
          s = t[0],
          a = t[1],
          r = Object(c.useState)(null),
          n = Object(_.a)(r, 2),
          i = n[0],
          d = n[1],
          o = Object(c.useState)([]),
          j = Object(_.a)(o, 2),
          u = j[0],
          b = j[1],
          m = Object(l.b)(),
          h = function (e) {
            a(function (t) {
              return Object(De.a)(
                Object(De.a)({}, t),
                {},
                Object(Je.a)({}, e.target.name, e.target.value)
              );
            });
          };
        return Object(P.jsxs)("div", {
          className: "newProduct",
          children: [
            Object(P.jsx)("h1", {
              className: "addProductTitle",
              children: "New Product",
            }),
            Object(P.jsxs)("form", {
              className: "addProductForm",
              children: [
                Object(P.jsxs)("div", {
                  className: "addProductItem",
                  children: [
                    Object(P.jsx)("label", { children: "Image" }),
                    Object(P.jsx)("input", {
                      type: "file",
                      id: "file",
                      onChange: function (e) {
                        return d(e.target.files[0]);
                      },
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "addProductItem",
                  children: [
                    Object(P.jsx)("label", { children: "Title" }),
                    Object(P.jsx)("input", {
                      name: "title",
                      type: "text",
                      placeholder: "Apple Airpods",
                      onChange: h,
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "addProductItem",
                  children: [
                    Object(P.jsx)("label", { children: "Desciption" }),
                    Object(P.jsx)("input", {
                      name: "desc",
                      type: "text",
                      placeholder: "Descriprtion...",
                      onChange: h,
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "addProductItem",
                  children: [
                    Object(P.jsx)("label", { children: "Price" }),
                    Object(P.jsx)("input", {
                      name: "price",
                      type: "text",
                      placeholder: "100",
                      onChange: h,
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "addProductItem",
                  children: [
                    Object(P.jsx)("label", { children: "Categories" }),
                    Object(P.jsx)("input", {
                      type: "text",
                      placeholder: "shirt,coat",
                      onChange: function (e) {
                        b(e.target.value.split(","));
                      },
                    }),
                  ],
                }),
                Object(P.jsxs)("div", {
                  className: "addProductItem",
                  children: [
                    Object(P.jsx)("label", { children: "Stock" }),
                    Object(P.jsxs)("select", {
                      name: "inStock",
                      onChange: h,
                      children: [
                        Object(P.jsx)("option", {
                          value: "true",
                          children: "Yes",
                        }),
                        Object(P.jsx)("option", {
                          value: "false",
                          children: "No",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(P.jsx)("button", {
                  onClick: function (e) {
                    e.preventDefault();
                    var t = new Date().getTime() + i.name,
                      c = Object(Ee.b)(Re),
                      a = Object(Ee.c)(c, t),
                      r = Object(Ee.d)(a, i);
                    r.on(
                      "state_changed",
                      function (e) {
                        var t = (e.bytesTransferred / e.totalBytes) * 100;
                        switch (
                          (console.log("Upload is " + t + "% done"), e.state)
                        ) {
                          case "paused":
                            console.log("Upload is paused");
                            break;
                          case "running":
                            console.log("Upload is running");
                        }
                      },
                      function (e) {},
                      function () {
                        Object(Ee.a)(r.snapshot.ref).then(function (e) {
                          var t = Object(De.a)(
                            Object(De.a)({}, s),
                            {},
                            { img: e, categories: u }
                          );
                          Ae(t, m);
                        });
                      }
                    );
                  },
                  className: "addProductButton",
                  children: "Create",
                }),
              ],
            }),
          ],
        });
      }
      var Ke = function () {
        var e = Object(c.useState)(""),
          t = Object(_.a)(e, 2),
          s = t[0],
          a = t[1],
          r = Object(c.useState)(""),
          n = Object(_.a)(r, 2),
          i = n[0],
          d = n[1],
          o = Object(l.b)();
        return Object(P.jsxs)("div", {
          style: {
            height: "60vh",
            width: "200vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
          children: [
            Object(P.jsx)("div", {
              style: { height: "100vh", width: "200vh", display: "flex" },
              children: Object(P.jsx)("div", {
                style: {
                  fontWeight: "bold",
                  fontSize: "40px",
                  color: "darkblue",
                  cursor: "pointer",
                  height: "50px",
                  width: "1600px",
                  background: "blue",
                  padding: "10px",
                },
                children: "Admin",
              }),
            }),
            Object(P.jsx)("h1", { children: "Sign In" }),
            Object(P.jsx)("input", {
              style: { padding: 10, marginBottom: 20 },
              type: "text",
              placeholder: "username",
              onChange: function (e) {
                return a(e.target.value);
              },
            }),
            Object(P.jsx)("input", {
              style: { padding: 10, marginBottom: 20 },
              type: "password",
              placeholder: "password",
              onChange: function (e) {
                return d(e.target.value);
              },
            }),
            Object(P.jsx)("button", {
              onClick: function (e) {
                e.preventDefault(), Te(o, { username: s, password: i });
              },
              style: { padding: 10, width: 100 },
              children: "Login",
            }),
          ],
        });
      };
      var Ye = function () {
          var e = Object(l.c)(function (e) {
            return e.user.currentUser;
          });
          return Object(P.jsx)(n.a, {
            children: e
              ? Object(P.jsxs)(P.Fragment, {
                  children: [
                    Object(P.jsx)(M, {}),
                    Object(P.jsxs)("div", {
                      className: "container",
                      children: [
                        Object(P.jsx)(T, {}),
                        Object(P.jsxs)(i.d, {
                          children: [
                            Object(P.jsx)(i.b, {
                              exact: !0,
                              path: "/",
                              children: Object(P.jsx)(le, {}),
                            }),
                            Object(P.jsx)(i.b, {
                              path: "/users",
                              children: Object(P.jsx)(ue, {}),
                            }),
                            Object(P.jsx)(i.b, {
                              path: "/user/:userId",
                              children: Object(P.jsx)(xe, {}),
                            }),
                            Object(P.jsx)(i.b, {
                              path: "/newUser",
                              children: Object(P.jsx)(Oe, {}),
                            }),
                            Object(P.jsx)(i.b, {
                              path: "/products",
                              children: Object(P.jsx)(Me, {}),
                            }),
                            Object(P.jsx)(i.b, {
                              path: "/product/:productId",
                              children: Object(P.jsx)(Be, {}),
                            }),
                            Object(P.jsx)(i.b, {
                              path: "/newproduct",
                              children: Object(P.jsx)($e, {}),
                            }),
                            Object(P.jsx)(i.b, {
                              path: "/login",
                              children: Object(P.jsx)(i.a, { to: "/" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : Object(P.jsxs)(i.d, {
                  children: [
                    Object(P.jsx)(i.b, {
                      path: "/login",
                      children: Object(P.jsx)(Ke, {}),
                    }),
                    Object(P.jsx)(i.a, { to: "/login" }),
                  ],
                }),
          });
        },
        ze = s(51),
        Ve = s(79),
        We = s(275),
        Ge = { key: "root", version: 1, storage: s.n(We).a },
        He = Object(ze.b)({ user: L, product: Pe }),
        qe = Object(Ve.g)(Ge, He),
        Qe = Object(v.a)({
          reducer: qe,
          middleware: function (e) {
            return e({
              serializableCheck: {
                ignoredActions: [Ve.a, Ve.f, Ve.b, Ve.c, Ve.d, Ve.e],
              },
            });
          },
        }),
        Xe = Object(Ve.h)(Qe),
        Ze = s(276);
      r.a.render(
        Object(P.jsx)(l.a, {
          store: Qe,
          children: Object(P.jsx)(Ze.a, {
            loading: "null",
            persistor: Xe,
            children: Object(P.jsx)(Ye, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[491, 1, 2]],
]);
//# sourceMappingURL=main.e2be8901.chunk.js.map
