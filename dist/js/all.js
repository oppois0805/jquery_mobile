/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function (a, b) { return new m.fn.init(a, b) }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) { return b.toUpperCase() }; m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return m.each(this, a, b) }, map: function (a) { return this.pushStack(m.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--) ; i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === m.type(a) }, isArray: Array.isArray || function (a) { return "array" === m.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { return !m.isArray(a) && a - parseFloat(a) + 1 >= 0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function (a) { var b; if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1; try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (k.ownLast) for (b in a) return j.call(a, b); for (b in a); return void 0 === b || j.call(a, b) }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (b) { b && m.trim(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(o, "ms-").replace(p, q) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = r(a); if (c) { if (g) { for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(n, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { var d; if (b) { if (g) return g.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c } return -1 }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = r(a), i = []; if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || m.guid++, e) : void 0 }, now: function () { return +new Date }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function r(a) { var b = "length" in a && a.length, c = m.type(a); return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var s = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) { return a === b && (l = !0), 0 }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) { for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c; return -1 }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, ea = function () { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (fa) { H = { apply: E.length ? function (a, b) { G.apply(a, I.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function ga(a, b, d, e) { var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d; if (!e && p) { if (11 !== k && (f = _.exec(a))) if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d } if (c.qsa && (!q || !q.test(a))) { if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) { o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; while (l--) o[l] = s + ra(o[l]); w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",") } if (x) try { return H.apply(d, w.querySelectorAll(x)), d } catch (y) { } finally { r || b.removeAttribute("id") } } } return i(a.replace(R, "$1"), b, d, e) } function ha() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ia(a) { return a[u] = !0, a } function ja(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ka(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function la(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function na(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function oa(a) { return ia(function (b) { return b = +b, ia(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function pa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = ga.support = {}, f = ga.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = ga.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function (a) { return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) { return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(ca, da); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ca, da); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function (a) { var b = g.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b]; if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return la(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) i.unshift(c); while (h[d] === i[d]) d++; return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0 }, g) : n }, ga.matches = function (a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return ga(b, n, null, [a]).length > 0 }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ga.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(ca, da).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = ga.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break } } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: ia(function (a) { var b = [], c = [], d = h(a.replace(R, "$1")); return d[u] ? ia(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function (a) { return function (b) { return ga(a, b).length > 0 } }), contains: ia(function (a) { return a = a.replace(ca, da), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function (a) { return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return Z.test(a.nodeName) }, input: function (a) { return Y.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: oa(function () { return [0] }), last: oa(function (a, b) { return [b - 1] }), eq: oa(function (a, b, c) { return [0 > c ? c + b : c] }), even: oa(function (a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: oa(function (a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: oa(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: oa(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b); function qa() { } qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0) }; function ra(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d } function sa(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [w, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function ta(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function ua(a, b, c) { for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c); return c } function va(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function wa(a, b, c, d, e, f) { return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = va(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) } function xa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) { return a === b }, h, !0), l = sa(function (a) { return J(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break; return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a)) } m.push(c) } return ta(m) } function ya(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length; for (k && (j = g !== n && g) ; q !== x && null != (l = u[q]) ; q++) { if (e && l) { m = 0; while (o = a[m++]) if (o(l, g, h)) { i.push(l); break } k && (w = v) } c && ((l = !o && l) && p--, f && r.push(l)) } if (p += q, c && q !== p) { m = 0; while (o = b[m++]) o(r, s, g, h); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i)); s = va(s) } H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i) } return k && (w = v, j = t), r }; return c ? ia(f) : f } return h = ga.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, ya(e, d)), f.selector = a } return f }, i = ga.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) } i = X.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ja(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ja(function (a) { return null == a.getAttribute("disabled") }) || ka(K, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga }(a); m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains; var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/; function w(a, b, c) { if (m.isFunction(b)) return m.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return m.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (v.test(b)) return m.filter(b, a, c); b = m.filter(b, a) } return m.grep(a, function (a) { return m.inArray(a, b) >= 0 !== c }) } m.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) { return 1 === a.nodeType })) }, m.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(m(a).filter(function () { for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++) m.find(a, d[b], c); return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function (a) { return this.pushStack(w(this, a || [], !1)) }, not: function (a) { return this.pushStack(w(this, a || [], !0)) }, is: function (a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length } }); var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } if (d = y.getElementById(c[2]), d && d.parentNode) { if (d.id !== c[2]) return x.find(a); this.length = 1, this[0] = d } return this.context = y, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this)) }; A.prototype = m.fn, x = m(y); var B = /^(?:parents|prev(?:Until|All))/, C = { children: !0, contents: !0, next: !0, prev: !0 }; m.extend({ dir: function (a, b, c) { var d = [], e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } }), m.fn.extend({ has: function (a) { var b, c = m(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? m.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function D(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } m.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return m.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return m.dir(a, "parentNode", c) }, next: function (a) { return D(a, "nextSibling") }, prev: function (a) { return D(a, "previousSibling") }, nextAll: function (a) { return m.dir(a, "nextSibling") }, prevAll: function (a) { return m.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return m.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return m.dir(a, "previousSibling", c) }, siblings: function (a) { return m.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return m.sibling(a.firstChild) }, contents: function (a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes) } }, function (a, b) { m.fn[a] = function (c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e) } }); var E = /\S+/g, F = {}; function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function (a, c) { b[c] = !0 }), b } m.Callbacks = function (a) { a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) }, k = { add: function () { if (h) { var d = h.length; !function f(b) { m.each(b, function (b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function () { return h && m.each(arguments, function (a, c) { var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function (a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], e = 0, this }, disable: function () { return h = i = c = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, c || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!d } }; return k }, m.extend({ Deferred: function (a) { var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return m.Deferred(function (c) { m.each(b, function (b, f) { var g = m.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? m.extend(a, d) : d } }, e = {}; return d.pipe = d.then, m.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e) ; e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var H; m.fn.ready = function (a) { return m.ready.promise().done(a), this }, m.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? m.readyWait++ : m.ready(!0) }, ready: function (a) { if (a === !0 ? !--m.readyWait : !m.isReady) { if (!y.body) return setTimeout(m.ready); m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready"))) } } }); function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) } function J() { (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready()) } m.ready.promise = function (b) { if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else { y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J); var c = !1; try { c = null == a.frameElement && y.documentElement } catch (d) { } c && c.doScroll && !function e() { if (!m.isReady) { try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) } I(), m.ready() } }() } return H.promise(b) }; var K = "undefined", L; for (L in m(k)) break; k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () { var a, b, c, d; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d)) }), function () { var a = y.createElement("div"); if (null == k.deleteExpando) { k.deleteExpando = !0; try { delete a.test } catch (b) { k.deleteExpando = !1 } } a = null }(), m.acceptData = function (a) { var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b }; var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g; function O(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(N, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c } catch (e) { } m.data(a, b, c) } else c = void 0 } return c } function P(a) {
        var b; for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;

        return !0
    } function Q(a, b, d, e) { if (m.acceptData(a)) { var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h; if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f } } function R(a, b, c) { if (m.acceptData(a)) { var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !m.isEmptyObject(d)) return } (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } } m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a) }, data: function (a, b, c) { return Q(a, b, c) }, removeData: function (a, b) { return R(a, b) }, _data: function (a, b, c) { return Q(a, b, c, !0) }, _removeData: function (a, b) { return R(a, b, !0) } }), m.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d]))); m._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { m.data(this, a) }) : arguments.length > 1 ? this.each(function () { m.data(this, a, b) }) : f ? O(f, a, m.data(f, a)) : void 0 }, removeData: function (a) { return this.each(function () { m.removeData(this, a) }) } }), m.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () { m.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () { m._removeData(a, b + "queue"), m._removeData(a, c) }) }) } }), m.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = m.queue(this, a, b); m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { m.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a) }, V = m.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === m.type(c)) { e = !0; for (h in c) m.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(m(a), c) })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, W = /^(?:checkbox|radio)$/i; !function () { var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment(); if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () { k.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == k.deleteExpando) { k.deleteExpando = !0; try { delete b.test } catch (d) { k.deleteExpando = !1 } } }(), function () { var b, c, d = y.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1); d = null }(); var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/; function aa() { return !0 } function ba() { return !1 } function ca() { try { return y.activeElement } catch (a) { } } m.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(E) || [""], h = b.length; while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0); a = null } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a); if (r && (k = r.events)) { b = (b || "").match(E) || [""], j = b.length; while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length; while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g)); i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]) } else for (o in k) m.event.remove(a, o + b[j], c, d, !0); m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) { if (!e && !k.noBubble && !m.isWindow(d)) { for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode) ; h; h = h.parentNode) o.push(h), l = h; l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a) } n = 0; while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault()); if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) { l = d[g], l && (d[g] = null), m.event.triggered = p; try { d[p]() } catch (r) { } m.event.triggered = void 0, l && (d[g] = l) } return b.result } }, dispatch: function (a) { a = m.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d); e.length && g.push({ elem: i, handlers: e }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function (a) { if (a[m.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== ca() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === ca() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (a) { return m.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, m.removeEvent = y.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { var d = "on" + b; a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c)) }, m.Event = function (a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b) }, m.Event.prototype = { isDefaultPrevented: ba, isPropagationStopped: ba, isImmediatePropagationStopped: ba, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { m.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), k.submitBubbles || (m.event.special.submit = { setup: function () { return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0; c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) { a._submit_bubble = !0 }), m._data(c, "submitBubbles", !0)) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit") } }), k.changeBubbles || (m.event.special.change = { setup: function () { return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0) })), !1) : void m.event.add(this, "beforeactivate._change", function (a) { var b = a.target; X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0) }), m._data(b, "changeBubbles", !0)) }) }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return m.event.remove(this, "._change"), !X.test(this.nodeName) } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { m.event.simulate(b, a.target, m.event.fix(a), !0) }; m.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = m._data(d, b); e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = m._data(d, b) - 1; e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b)) } } }), m.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba; else if (!d) return this; return 1 === e && (g = d, d = function (a) { return m().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () { m.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () { m.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { m.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0 } }); function da(a) { var b = ea.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, sa = da(y), ta = sa.appendChild(y.createElement("div")); ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td; function ua(a, b) { var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0; if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]) ; e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b)); return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f } function va(a) { W.test(a.type) && (a.defaultChecked = a.checked) } function wa(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function xa(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a } function ya(a) { var b = pa.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function za(a, b) { for (var c, d = 0; null != (c = a[d]) ; d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval")) } function Aa(a, b) { if (1 === b.nodeType && m.hasData(a)) { var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]) } g.data && (g.data = m.extend({}, g.data)) } } function Ba(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) { e = m._data(b); for (d in e.events) m.removeEvent(b, d, e.handle); b.removeAttribute(m.expando) } "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } } m.extend({ clone: function (a, b, c) { var d, e, f, g, h, i = m.contains(a.ownerDocument, a); if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]) ; ++g) d[g] && Ba(e, d[g]); if (b) if (c) for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]) ; g++) Aa(e, d[g]); else Aa(a, f); return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++) if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f); else if (la.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0]; while (e--) h = h.lastChild; if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) { f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) } m.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild); h = o.lastChild } else p.push(b.createTextNode(f)); h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0; while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) { e = 0; while (f = h[e++]) oa.test(f.type || "") && c.push(f) } return h = null, o }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]) ; h++) if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) { if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle); j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), m.fn.extend({ text: function (a) { return V(this, function (a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wa(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wa(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]) ; e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]) ; b++) { 1 === a.nodeType && m.cleanData(ua(a, !1)); while (a.firstChild) a.removeChild(a.firstChild); a.options && m.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return m.clone(this, a, b) }) }, html: function (a) { return V(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0; if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(ia, "<$1></$2>"); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p); if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function (c) { var d = n.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) { for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j); if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, ""))); i = c = null } return this } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { m.fn[a] = function (a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } }); var Ca, Da = {}; function Ea(b, c) { var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display"); return e.detach(), f } function Fa(a) { var b = y, c = Da[a]; return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c } !function () { var a; k.shrinkWrapBlocks = function () { if (null != a) return a; a = !1; var b, c, d; return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0 } }(); var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Ia = function (b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null) }, Ja = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : y.documentElement.currentStyle && (Ia = function (a) { return a.currentStyle }, Ja = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }); function La(a, b) { return { get: function () { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d, e, f, g, h; if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) { c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function () { return null == g && i(), g }, boxSizingReliable: function () { return null == f && i(), f }, pixelPosition: function () { return null == e && i(), e }, reliableMarginRight: function () { return null == h && i(), h } }); function i() { var b, c, d, i; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d)) } } }(), m.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = { position: "absolute", visibility: "hidden", display: "block" }, Sa = { letterSpacing: "0", fontWeight: "400" }, Ta = ["Webkit", "O", "Moz", "ms"]; function Ua(a, b) { if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length; while (e--) if (b = Ta[e] + c, b in a) return b; return d } function Va(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } function Wa(a, b, c) { var d = Pa.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Xa(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g } function Ya(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e; d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px" } m.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Ja(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = m.camelCase(b), i = a.style; if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) { } } }, css: function (a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f } }), m.each(["height", "width"], function (a, b) { m.cssHooks[b] = { get: function (a, c, d) { return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () { return Ya(a, b, d) }) : Ya(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && Ia(a); return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0) } } }), k.opacity || (m.cssHooks.opacity = { get: function (a, b) { return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e) } }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) { return b ? m.swap(a, { display: "inline-block" }, Ja, [a, "marginRight"]) : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) { m.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Ga.test(a) || (m.cssHooks[a + b].set = Wa) }), m.fn.extend({ css: function (a, b) { return V(this, function (a, b, c) { var d, e, f = {}, g = 0; if (m.isArray(b)) { for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d); return f } return void 0 !== c ? m.style(a, b, c) : m.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return Va(this, !0) }, hide: function () { return Va(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { U(this) ? m(this).show() : m(this).hide() }) } }); function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    } m.Tween = Za, Za.prototype = { constructor: Za, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px") }, cur: function () { var a = Za.propHooks[this.prop]; return a && a.get ? a.get(this) : Za.propHooks._default.get(this) }, run: function (a) { var b, c = Za.propHooks[this.prop]; return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this } }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, m.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, m.fx = Za.prototype.init, m.fx.step = {}; var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ib], eb = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function fb() { return setTimeout(function () { $a = void 0 }), $a = m.now() } function gb(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d } function hb(a, b, c) { for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d } function ib(a, b, c) { var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow"); c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, n.always(function () { n.always(function () { h.unqueued--, m.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], ab.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue; q = !0 } o[d] = r && r[d] || m.style(a, d) } else j = void 0; if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j); else { r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () { m(a).hide() }), n.done(function () { var b; m._removeData(a, "fxshow"); for (b in o) m.style(a, b, o[b]) }); for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function jb(a, b) { var c, d, e, f, g; for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function kb(a, b, c) { var d, e, f = 0, g = db.length, h = m.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $a || fb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (jb(k, j.opts.specialEasing) ; g > f; f++) if (d = db[f].call(j, a, k, j.opts)) return d; return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } m.Animation = m.extend(kb, { tweener: function (a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b) }, prefilter: function (a, b) { b ? db.unshift(a) : db.push(a) } }), m.speed = function (a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue) }, d }, m.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () { var b = kb(this, m.extend({}, a), f); (e || m._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && m.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0; for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), m.each(["toggle", "show", "hide"], function (a, b) { var c = m.fn[b]; m.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e) } }), m.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { m.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), m.timers = [], m.fx.tick = function () { var a, b = m.timers, c = 0; for ($a = m.now() ; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || m.fx.stop(), $a = void 0 }, m.fx.timer = function (a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function () { _a || (_a = setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function () { clearInterval(_a), _a = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) { return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a, b, c, d, e; b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value }(); var lb = /\r/g; m.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = m.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) { return null == a ? "" : a + "" })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c) } } }), m.extend({ valHooks: { option: { get: function (a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)) } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) { if (b = m(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = m.makeArray(b), g = e.length; while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1; return c || (a.selectedIndex = -1), e } } } }), m.each(["radio", "checkbox"], function () { m.valHooks[this] = { set: function (a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0 } }, k.checkOn || (m.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input; m.fn.extend({ attr: function (a, b) { return V(this, m.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { m.removeAttr(this, a) }) } }), m.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(E); if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d) }, attrHooks: { type: { set: function (a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), nb = { set: function (a, b, c) { return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = ob[b] || m.find.attr; ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) { var e, f; return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e } : function (a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null } }), rb && qb || (m.attrHooks.value = { set: function (a, b, c) { return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c) } }), qb || (mb = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, ob.id = ob.name = ob.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, m.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: mb.set }, m.attrHooks.contenteditable = { set: function (a, b, c) { mb.set(a, "" === b ? !1 : b, c) } }, m.each(["width", "height"], function (a, b) { m.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), k.style || (m.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i; m.fn.extend({ prop: function (a, b) { return V(this, m.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return a = m.propFix[a] || a, this.each(function () { try { this[a] = void 0, delete this[a] } catch (b) { } }) } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1 } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) { m.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }), k.optSelected || (m.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { m.propFix[this.toLowerCase()] = this }), k.enctype || (m.propFix.enctype = "encoding"); var ub = /[\t\r\n\f]/g; m.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) { m(this).addClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = m.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) { m(this).removeClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? m.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) { m(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = m(this), f = a.match(E) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0; return !1 } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { m.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), m.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; m.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null, e = m.trim(b + ""); return e && !m.trim(e.replace(xb, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : m.error("Invalid JSON: " + b) }, m.parseXML = function (b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c }; var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*"); try { zb = location.href } catch (Kb) { zb = y.createElement("a"), zb.href = "", zb = zb.href } yb = Gb.exec(zb.toLowerCase()) || []; function Lb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(E) || []; if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Mb(a, b, c, d) { var e = {}, f = a === Ib; function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Nb(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a } function Ob(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e) for (g in h) if (h[g] && h[g].test(e)) { i.unshift(g); break } if (i[0] in c) f = i[0]; else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break } d || (d = g) } f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Pb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zb, type: "GET", isLocal: Db.test(yb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a) }, ajaxPrefilter: Lb(Hb), ajaxTransport: Lb(Ib), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!j) { j = {}; while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2] } b = j[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? f : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return i && i.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v; h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers) v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]); if (i = Mb(Ib, k, b, v)) { v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, i.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, c, d) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return m.get(a, b, c, "json") }, getScript: function (a, b) { return m.get(a, void 0, b, "script") } }), m.each(["get", "post"], function (a, b) { m[b] = function (a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), m._evalUrl = function (a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, m.fn.extend({ wrapAll: function (a) { if (m.isFunction(a)) return this.each(function (b) { m(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = m(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { return this.each(m.isFunction(a) ? function (b) { m(this).wrapInner(a.call(this, b)) } : function () { var b = m(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = m.isFunction(a); return this.each(function (c) { m(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() } }), m.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")) }, m.expr.filters.visible = function (a) { return !m.expr.filters.hidden(a) }; var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i; function Vb(a, b, c, d) { var e; if (m.isArray(b)) m.each(b, function (b, e) { c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vb(a + "[" + e + "]", b[e], c, d) } m.param = function (a, b) { var c, d = [], e = function (a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () { e(this.name, this.value) }); else for (c in a) Vb(c, a[c], b, e); return d.join("&").replace(Qb, "+") }, m.fn.extend({ serialize: function () { return m.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a)) }).map(function (a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function (a) { return { name: b.name, value: a.replace(Sb, "\r\n") } }) : { name: b.name, value: c.replace(Sb, "\r\n") } }).get() } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b() } : Zb; var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr(); a.attachEvent && a.attachEvent("onunload", function () { for (var a in Xb) Xb[a](void 0, !0) }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) { if (!a.crossDomain || k.cors) { var b; return { send: function (c, d) { var e, f = a.xhr(), g = ++Wb; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + ""); f.send(a.hasContent && a.data || null), b = function (c, e) { var h, i, j; if (b && (e || 4 === f.readyState)) if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort(); else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText); try { i = f.statusText } catch (k) { i = "" } h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 } j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b() }, abort: function () { b && b(void 0, !0) } } } }); function Zb() { try { return new a.XMLHttpRequest } catch (b) { } } function $b() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return m.globalEval(a), a } } }), m.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), m.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c = y.head || m("head")[0] || y.documentElement; return { send: function (d, e) { b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function () { b && b.onload(void 0, !0) } } } }); var _b = [], ac = /(=)\?(?=&|$)|\?\?/; m.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = _b.pop() || m.expando + "_" + vb++; return this[a] = !0, a } }), m.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || m.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), m.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || y; var d = u.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes)) }; var bc = m.fn.load; m.fn.load = function (a, b, c) { if ("string" != typeof a && bc) return bc.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { m.fn[b] = function (a) { return this.on(b, a) } }), m.expr.filters.animated = function (a) { return m.grep(m.timers, function (b) { return a === b.elem }).length }; var cc = a.document.documentElement; function dc(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } m.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n) } }, m.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { m.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function () { if (this[0]) { var a, b, c = { top: 0, left: 0 }, d = this[0]; return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || cc; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cc }) } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); m.fn[a] = function (d) { return V(this, function (a, d, e) { var f = dc(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), m.each(["top", "left"], function (a, b) { m.cssHooks[b] = La(k.pixelPosition, function (a, c) { return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function (a, b) { m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { m.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return V(this, function (b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), m.fn.size = function () { return this.length }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return m }); var ec = a.jQuery, fc = a.$; return m.noConflict = function (b) { return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m }, typeof b === K && (a.jQuery = a.$ = m), m
});
//# sourceMappingURL=jquery.min.map
(function() {
    //系統訊息頁面
    $(document).on("pageinit", "#message", function() {
        // 頁面第一次執行時會觸發
        // 程式寫在這裡
        $(document).on("click", ".i_switch", function() {
            $(this).toggleClass('active');
        });

        $(".animateMe .ui-collapsible-heading-toggle").on("click", function(e) {
            var current = $(this).closest(".ui-collapsible");
            if (current.hasClass("ui-collapsible-collapsed")) {
                //collapse all others and then expand this one
                $(".ui-collapsible").not(".ui-collapsible-collapsed").find(".ui-collapsible-heading-toggle").click();
                $(".ui-collapsible-content", current).slideDown(300);
            } else {
                $(".ui-collapsible-content", current).slideUp(300);
            }
        });
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.error') && !$(target).parents().is('.error')) {
            $('.errorMessage').removeClass("errorMessage--show");
            $('.errorMessage').addClass("errorMessage--hide");
        } else {
            if ($('.errorMessage').hasClass("errorMessage--hide")) {
                $('.errorMessage').removeClass("errorMessage--hide");
                $('.errorMessage').addClass("errorMessage--show");
            } else if ($('.errorMessage').hasClass("errorMessage--show")) {
                $('.errorMessage').removeClass("errorMessage--show");
                $('.errorMessage').addClass("errorMessage--hide");
            }
        }
    });
})();

/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,r){"$:nomunge";function l(e){return e=e||location.href,"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var i="hashchange",s=n,o,u=e.event.special,a=s.documentMode,f="on"+i in t&&(a===r||a>7);e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)},e.fn[i].delay=50,u[i]=e.extend(u[i],{setup:function(){if(f)return!1;e(o.start)},teardown:function(){if(f)return!1;e(o.stop)}}),o=function(){function p(){var n=l(),r=h(u);n!==u?(c(u=n,r),e(t).trigger(i)):r!==u&&(location.href=location.href.replace(/#.*/,"")+r),o=setTimeout(p,e.fn[i].delay)}var n={},o,u=l(),a=function(e){return e},c=a,h=a;return n.start=function(){o||p()},n.stop=function(){o&&clearTimeout(o),o=r},t.attachEvent&&!t.addEventListener&&!f&&function(){var t,r;n.start=function(){t||(r=e.fn[i].src,r=r&&r+l(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||c(l()),p()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow,s.onpropertychange=function(){try{event.propertyName==="title"&&(t.document.title=s.title)}catch(e){}})},n.stop=a,h=function(){return l(t.location.href)},c=function(n,r){var o=t.document,u=e.fn[i].domain;n!==r&&(o.title=s.title,o.open(),u&&o.write('<script>document.domain="'+u+'"</script>'),o.close(),t.location.hash=n)}}(),n}()})(e,this),function(e){e.mobile={}}(e),function(e,t,n){e.extend(e.mobile,{version:"1.4.5",subPageUrlKey:"ui-page",hideUrlBar:!0,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:0,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,buttonMarkup:{hoverDelay:200},dynamicBaseEnabled:!0,pageContainer:e(),allowCrossDomainPages:!1,dialogHashKey:"&ui-state=dialog"})}(e,this),function(e,t,n){var r={},i=e.find,s=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,o=/:jqmData\(([^)]*)\)/g;e.extend(e.mobile,{ns:"",getAttribute:function(t,n){var r;t=t.jquery?t[0]:t,t&&t.getAttribute&&(r=t.getAttribute("data-"+e.mobile.ns+n));try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:s.test(r)?JSON.parse(r):r}catch(i){}return r},nsNormalizeDict:r,nsNormalize:function(t){return r[t]||(r[t]=e.camelCase(e.mobile.ns+t))},closestPageData:function(e){return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")}}),e.fn.jqmData=function(t,r){var i;return typeof t!="undefined"&&(t&&(t=e.mobile.nsNormalize(t)),arguments.length<2||r===n?i=this.data(t):i=this.data(t,r)),i},e.jqmData=function(t,n,r){var i;return typeof n!="undefined"&&(i=e.data(t,n?e.mobile.nsNormalize(n):n,r)),i},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.find=function(t,n,r,s){return t.indexOf(":jqmData")>-1&&(t=t.replace(o,"[data-"+(e.mobile.ns||"")+"$1]")),i.call(this,t,n,r,s)},e.extend(e.find,i)}(e,this),function(e,t){function s(t,n){var r,i,s,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(s=e("img[usemap=#"+i+"]")[0],!!s&&o(s))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&o(t)}function o(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var r=0,i=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"c0ab71056b936627e8a7821f03c044aec6280a40",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(n,r){return typeof n=="number"?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),r&&r.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(this[0].ownerDocument||n):t},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++r)})},removeUniqueId:function(){return this.each(function(){i.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return s(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&s(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in n.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(r){if(r!==t)return this.css("zIndex",r);if(this.length){var i=e(this[0]),s,o;while(i.length&&i[0]!==n){s=i.css("position");if(s==="absolute"||s==="relative"||s==="fixed"){o=parseInt(i.css("zIndex"),10);if(!isNaN(o)&&o!==0)return o}i=i.parent()}}return 0}}),e.ui.plugin={add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n,r){var i,s=e.plugins[t];if(!s)return;if(!r&&(!e.element[0].parentNode||e.element[0].parentNode.nodeType===11))return;for(i=0;i<s.length;i++)e.options[s[i][0]]&&s[i][1].apply(e.element,n)}}}(e),function(e,t,r){var i=function(t,n){var r=t.parent(),i=[],s=function(){var t=e(this),n=e.mobile.toolbar&&t.data("mobile-toolbar")?t.toolbar("option"):{position:t.attr("data-"+e.mobile.ns+"position"),updatePagePadding:t.attr("data-"+e.mobile.ns+"update-page-padding")!==!1};return n.position!=="fixed"||n.updatePagePadding!==!0},o=r.children(":jqmData(role='header')").filter(s),u=t.children(":jqmData(role='header')"),a=r.children(":jqmData(role='footer')").filter(s),f=t.children(":jqmData(role='footer')");return u.length===0&&o.length>0&&(i=i.concat(o.toArray())),f.length===0&&a.length>0&&(i=i.concat(a.toArray())),e.each(i,function(t,r){n-=e(r).outerHeight()}),Math.max(0,n)};e.extend(e.mobile,{window:e(t),document:e(n),keyCode:e.ui.keyCode,behaviors:{},silentScroll:function(n){e.type(n)!=="number"&&(n=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,n),e.mobile.document.trigger("silentscroll",{x:0,y:n})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},getClosestBaseUrl:function(t){var n=e(t).closest(".ui-page").jqmData("url"),r=e.mobile.path.documentBase.hrefNoHash;if(!e.mobile.dynamicBaseEnabled||!n||!e.mobile.path.isPath(n))n=r;return e.mobile.path.makeUrlAbsolute(n,r)},removeActiveLinkClass:function(t){!!e.mobile.activeClickedLink&&(!e.mobile.activeClickedLink.closest("."+e.mobile.activePageClass).length||t)&&e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass),e.mobile.activeClickedLink=null},getInheritedTheme:function(e,t){var n=e[0],r="",i=/ui-(bar|body|overlay)-([a-z])\b/,s,o;while(n){s=n.className||"";if(s&&(o=i.exec(s))&&(r=o[2]))break;n=n.parentNode}return r||t||"a"},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,n){if(!e.mobile.ignoreContentEnabled)return t;var r=t.length,i=e(),s,o,u,a,f;for(a=0;a<r;a++){o=t.eq(a),u=!1,s=t[a];while(s){f=s.getAttribute?s.getAttribute("data-"+e.mobile.ns+n):"";if(f==="false"){u=!0;break}s=s.parentNode}u||(i=i.add(o))}return i},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()},resetActivePageHeight:function(t){var n=e("."+e.mobile.activePageClass),r=n.height(),s=n.outerHeight(!0);t=i(n,typeof t=="number"?t:e.mobile.getScreenHeight()),n.css("min-height",""),n.height()<t&&n.css("min-height",t-(s-r))},loading:function(){var t=this.loading._widget||e(e.mobile.loader.prototype.defaultHtml).loader(),n=t.loader.apply(t,arguments);return this.loading._widget=t,n}}),e.addDependents=function(t,n){var r=e(t),i=r.jqmData("dependents")||e();r.jqmData("dependents",e(i).add(n))},e.fn.extend({removeWithDependents:function(){e.removeWithDependents(this)},enhanceWithin:function(){var t,n={},r=e.mobile.page.prototype.keepNativeSelector(),i=this;e.mobile.nojs&&e.mobile.nojs(this),e.mobile.links&&e.mobile.links(this),e.mobile.degradeInputsWithin&&e.mobile.degradeInputsWithin(this),e.fn.buttonMarkup&&this.find(e.fn.buttonMarkup.initSelector).not(r).jqmEnhanceable().buttonMarkup(),e.fn.fieldcontain&&this.find(":jqmData(role='fieldcontain')").not(r).jqmEnhanceable().fieldcontain(),e.each(e.mobile.widgets,function(t,s){if(s.initSelector){var o=e.mobile.enhanceable(i.find(s.initSelector));o.length>0&&(o=o.not(r)),o.length>0&&(n[s.prototype.widgetName]=o)}});for(t in n)n[t][t]();return this},addDependents:function(t){e.addDependents(this,t)},getEncodedText:function(){return e("<a>").text(this.text()).html()},jqmEnhanceable:function(){return e.mobile.enhanceable(this)},jqmHijackable:function(){return e.mobile.hijackable(this)}}),e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.addDependents=function(t,n){var r=e(t),i=r.jqmData("dependents")||e();r.jqmData("dependents",e(i).add(n))},e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0}}(e,this),function(e,r){t.matchMedia=t.matchMedia||function(e,t){var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(s,i),n=o.offsetWidth===42,r.removeChild(s),{matches:n,media:e}}}(n),e.mobile.media=function(e){return t.matchMedia(e).matches}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,n){e.extend(e.support,{orientation:"orientation"in t&&"onorientationchange"in t})}(e),function(e,r){function i(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+u.join(t+" ")+t).split(" "),i;for(i in n)if(o[n[i]]!==r)return!0}function h(){var n=t,r=!!n.document.createElementNS&&!!n.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(!n.opera||navigator.userAgent.indexOf("Chrome")!==-1),i=function(t){(!t||!r)&&e("html").addClass("ui-nosvg")},s=new n.Image;s.onerror=function(){i(!1)},s.onload=function(){i(s.width===1&&s.height===1)},s.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}function p(){var i="transform-3d",o=e.mobile.media("(-"+u.join("-"+i+"),(-")+"-"+i+"),("+i+")"),a,f,l;if(o)return!!o;a=n.createElement("div"),f={MozTransform:"-moz-transform",transform:"transform"},s.append(a);for(l in f)a.style[l]!==r&&(a.style[l]="translate3d( 100px, 1px, 1px )",o=t.getComputedStyle(a).getPropertyValue(f[l]));return!!o&&o!=="none"}function d(){var t=location.protocol+"//"+location.host+location.pathname+"ui-dir/",n=e("head base"),r=null,i="",o,u;return n.length?i=n.attr("href"):n=r=e("<base>",{href:t}).appendTo("head"),o=e("<a href='testurl' />").prependTo(s),u=o[0].href,n[0].href=i||location.pathname,r&&r.remove(),u.indexOf(t)===0}function v(){var e=n.createElement("x"),r=n.documentElement,i=t.getComputedStyle,s;return"pointerEvents"in e.style?(e.style.pointerEvents="auto",e.style.pointerEvents="x",r.appendChild(e),s=i&&i(e,"").pointerEvents==="auto",r.removeChild(e),!!s):!1}function m(){var e=n.createElement("div");return typeof e.getBoundingClientRect!="undefined"}function g(){var e=t,n=navigator.userAgent,r=navigator.platform,i=n.match(/AppleWebKit\/([0-9]+)/),s=!!i&&i[1],o=n.match(/Fennec\/([0-9]+)/),u=!!o&&o[1],a=n.match(/Opera Mobi\/([0-9]+)/),f=!!a&&a[1];return(r.indexOf("iPhone")>-1||r.indexOf("iPad")>-1||r.indexOf("iPod")>-1)&&s&&s<534||e.operamini&&{}.toString.call(e.operamini)==="[object OperaMini]"||a&&f<7458||n.indexOf("Android")>-1&&s&&s<533||u&&u<6||"palmGetResource"in t&&s&&s<534||n.indexOf("MeeGo")>-1&&n.indexOf("NokiaBrowser/8.5.0")>-1?!1:!0}var s=e("<body>").prependTo("html"),o=s[0].style,u=["Webkit","Moz","O"],a="palmGetResource"in t,f=t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]",l=t.blackberry&&!i("-webkit-transform"),c;e.extend(e.mobile,{browser:{}}),e.mobile.browser.oldIE=function(){var e=3,t=n.createElement("div"),r=t.all||[];do t.innerHTML="<!--[if gt IE "+ ++e+"]><br><![endif]-->";while(r[0]);return e>4?e:!e}(),e.extend(e.support,{pushState:"pushState"in history&&"replaceState"in history&&!(t.navigator.userAgent.indexOf("Firefox")>=0&&t.top!==t)&&t.navigator.userAgent.search(/CriOS/)===-1,mediaquery:e.mobile.media("only all"),cssPseudoElement:!!i("content"),touchOverflow:!!i("overflowScrolling"),cssTransform3d:p(),boxShadow:!!i("boxShadow")&&!l,fixedPosition:g(),scrollTop:("pageXOffset"in t||"scrollTop"in n.documentElement||"scrollTop"in s[0])&&!a&&!f,dynamicBaseTag:d(),cssPointerEvents:v(),boundingRect:m(),inlineSVG:h}),s.remove(),c=function(){var e=t.navigator.userAgent;return e.indexOf("Nokia")>-1&&(e.indexOf("Symbian/3")>-1||e.indexOf("Series60/5")>-1)&&e.indexOf("AppleWebKit")>-1&&e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}(),e.mobile.gradeA=function(){return(e.support.mediaquery&&e.support.cssPseudoElement||e.mobile.browser.oldIE&&e.mobile.browser.oldIE>=8)&&(e.support.boundingRect||e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/)!==null)},e.mobile.ajaxBlacklist=t.blackberry&&!t.WebKitPoint||f||c,c&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-noboxshadow")}(e),function(e,t){var n=e.mobile.window,r,i=function(){};e.event.special.beforenavigate={setup:function(){n.on("navigate",i)},teardown:function(){n.off("navigate",i)}},e.event.special.navigate=r={bound:!1,pushStateEnabled:!0,originalEventName:t,isPushStateEnabled:function(){return e.support.pushState&&e.mobile.pushStateEnabled===!0&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return e.mobile.hashListeningEnabled===!0},popstate:function(t){var r=new e.Event("navigate"),i=new e.Event("beforenavigate"),s=t.originalEvent.state||{};i.originalEvent=t,n.trigger(i);if(i.isDefaultPrevented())return;t.historyState&&e.extend(s,t.historyState),r.originalEvent=t,setTimeout(function(){n.trigger(r,{state:s})},0)},hashchange:function(t){var r=new e.Event("navigate"),i=new e.Event("beforenavigate");i.originalEvent=t,n.trigger(i);if(i.isDefaultPrevented())return;r.originalEvent=t,n.trigger(r,{state:t.hashchangeState||{}})},setup:function(){if(r.bound)return;r.bound=!0,r.isPushStateEnabled()?(r.originalEventName="popstate",n.bind("popstate.navigate",r.popstate)):r.isHashChangeEnabled()&&(r.originalEventName="hashchange",n.bind("hashchange.navigate",r.hashchange))}}}(e),function(e){e.event.special.throttledresize={setup:function(){e(this).bind("resize",n)},teardown:function(){e(this).unbind("resize",n)}};var t=250,n=function(){s=(new Date).getTime(),o=s-r,o>=t?(r=s,e(this).trigger("throttledresize")):(i&&clearTimeout(i),i=setTimeout(n,t-o))},r=0,i,s,o}(e),function(e,t){function p(){var e=s();e!==o&&(o=e,r.trigger(i))}var r=e(t),i="orientationchange",s,o,u,a,f={0:!0,180:!0},l,c,h;if(e.support.orientation){l=t.innerWidth||r.width(),c=t.innerHeight||r.height(),h=50,u=l>c&&l-c>h,a=f[t.orientation];if(u&&a||!u&&!a)f={"-90":!0,90:!0}}e.event.special.orientationchange=e.extend({},e.event.special.orientationchange,{setup:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;o=s(),r.bind("throttledresize",p)},teardown:function(){if(e.support.orientation&&!e.event.special.orientationchange.disabled)return!1;r.unbind("throttledresize",p)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=s(),t.apply(this,arguments)}}}),e.event.special.orientationchange.orientation=s=function(){var r=!0,i=n.documentElement;return e.support.orientation?r=f[t.orientation]:r=i&&i.clientWidth/i.clientHeight<1.1,r?"portrait":"landscape"},e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)},e.attrFn&&(e.attrFn[i]=!0)}(e,this),function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)}(e,t,n),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this),function(e,t){var r={animation:{},transition:{}},i=n.createElement("a"),s=["","webkit-","moz-","o-"];e.each(["animation","transition"],function(n,o){var u=n===0?o+"-"+"name":o;e.each(s,function(n,s){if(i.style[e.camelCase(s+u)]!==t)return r[o].prefix=s,!1}),r[o].duration=e.camelCase(r[o].prefix+o+"-"+"duration"),r[o].event=e.camelCase(r[o].prefix+o+"-"+"end"),r[o].prefix===""&&(r[o].event=r[o].event.toLowerCase())}),e.support.cssTransitions=r.transition.prefix!==t,e.support.cssAnimations=r.animation.prefix!==t,e(i).remove(),e.fn.animationComplete=function(i,s,o){var u,a,f=this,l=function(){clearTimeout(u),i.apply(this,arguments)},c=!s||s==="animation"?"animation":"transition";if(e.support.cssTransitions&&c==="transition"||e.support.cssAnimations&&c==="animation"){if(o===t){e(this).context!==n&&(a=parseFloat(e(this).css(r[c].duration))*3e3);if(a===0||a===t||isNaN(a))a=e.fn.animationComplete.defaultDuration}return u=setTimeout(function(){e(f).off(r[c].event,l),i.apply(f)},a),e(this).one(r[c].event,l)}return setTimeout(e.proxy(i,this),0),e(this)},e.fn.animationComplete.defaultDuration=1e3}(e),function(e,t){function s(e,t){var n=t?t:[];return n.push("ui-btn"),e.theme&&n.push("ui-btn-"+e.theme),e.icon&&(n=n.concat(["ui-icon-"+e.icon,"ui-btn-icon-"+e.iconpos]),e.iconshadow&&n.push("ui-shadow-icon")),e.inline&&n.push("ui-btn-inline"),e.shadow&&n.push("ui-shadow"),e.corners&&n.push("ui-corner-all"),e.mini&&n.push("ui-mini"),n}function o(e){var r,i,s,o=!1,u=!0,a={icon:"",inline:!1,shadow:!1,corners:!1,iconshadow:!1,mini:!1},f=[];e=e.split(" ");for(r=0;r<e.length;r++)s=!0,i=n[e[r]],i!==t?(s=!1,a[i]=!0):e[r].indexOf("ui-btn-icon-")===0?(s=!1,u=!1,a.iconpos=e[r].substring(12)):e[r].indexOf("ui-icon-")===0?(s=!1,a.icon=e[r].substring(8)):e[r].indexOf("ui-btn-")===0&&e[r].length===8?(s=!1,a.theme=e[r].substring(7)):e[r]==="ui-btn"&&(s=!1,o=!0),s&&f.push(e[r]);return u&&(a.icon=""),{options:a,unknownClasses:f,alreadyEnhanced:o}}function u(e){return"-"+e.toLowerCase()}var n={"ui-shadow":"shadow","ui-corner-all":"corners","ui-btn-inline":"inline","ui-shadow-icon":"iconshadow","ui-mini":"mini"},r=function(){var n=e.mobile.getAttribute.apply(this,arguments);return n==null?t:n},i=/[A-Z]/g;e.fn.buttonMarkup=function(n,a){var f,l,c,h,p,d=e.fn.buttonMarkup.defaults;for(f=0;f<this.length;f++){c=this[f],l=a?{alreadyEnhanced:!1,unknownClasses:[]}:o(c.className),h=e.extend({},l.alreadyEnhanced?l.options:{},n);if(!l.alreadyEnhanced)for(p in d)h[p]===t&&(h[p]=r(c,p.replace(i,u)));c.className=s(e.extend({},d,h),l.unknownClasses).join(" "),c.tagName.toLowerCase()!=="button"&&c.setAttribute("role","button")}return this},e.fn.buttonMarkup.defaults={icon:"",iconpos:"left",theme:null,inline:!1,shadow:!0,corners:!0,iconshadow:!1,mini:!1},e.extend(e.fn.buttonMarkup,{initSelector:"a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button:not(:jqmData(role='navbar') button)"})}(e),function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];return t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix||t:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(o==="instance")return f=i,!1;if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})}(e),function(e,t){var n=/[A-Z]/g,r=function(e){return"-"+e.toLowerCase()};e.extend(e.Widget.prototype,{_getCreateOptions:function(){var t,i,s=this.element[0],o={};if(!e.mobile.getAttribute(s,"defaults"))for(t in this.options)i=e.mobile.getAttribute(s,t.replace(n,r)),i!=null&&(o[t]=i);return o}}),e.mobile.widget=e.Widget}(e),function(e,t){e.mobile.widgets={};var n=e.widget,r=e.mobile.keepNative;e.widget=function(n){return function(){var r=n.apply(this,arguments),i=r.prototype.widgetName;return r.initSelector=r.prototype.initSelector!==t?r.prototype.initSelector:":jqmData(role='"+i+"')",e.mobile.widgets[i]=r,r}}(e.widget),e.extend(e.widget,n),e.mobile.document.on("create",function(t){e(t.target).enhanceWithin()}),e.widget("mobile.page",{options:{theme:"a",domCache:!1,keepNativeDefault:e.mobile.keepNative,contentTheme:null,enhanced:!1},_createWidget:function(){e.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_create:function(){if(this._trigger("beforecreate")===!1)return!1;this.options.enhanced||this._enhance(),this._on(this.element,{pagebeforehide:"removeContainerBackground",pagebeforeshow:"_handlePageBeforeShow"}),this.element.enhanceWithin(),e.mobile.getAttribute(this.element[0],"role")==="dialog"&&e.mobile.dialog&&this.element.dialog()},_enhance:function(){var n="data-"+e.mobile.ns,r=this;this.options.role&&this.element.attr("data-"+e.mobile.ns+"role",this.options.role),this.element.attr("tabindex","0").addClass("ui-page ui-page-theme-"+this.options.theme),this.element.find("["+n+"role='content']").each(function(){var i=e(this),s=this.getAttribute(n+"theme")||t;r.options.contentTheme=s||r.options.contentTheme||r.options.dialog&&r.options.theme||r.element.jqmData("role")==="dialog"&&r.options.theme,i.addClass("ui-content"),r.options.contentTheme&&i.addClass("ui-body-"+r.options.contentTheme),i.attr("role","main").addClass("ui-content")})},bindRemove:function(t){var n=this.element;!n.data("mobile-page").options.domCache&&n.is(":jqmData(external-page='true')")&&n.bind("pagehide.remove",t||function(t,n){if(!n.samePage){var r=e(this),i=new e.Event("pageremove");r.trigger(i),i.isDefaultPrevented()||r.removeWithDependents()}})},_setOptions:function(n){n.theme!==t&&this.element.removeClass("ui-page-theme-"+this.options.theme).addClass("ui-page-theme-"+n.theme),n.contentTheme!==t&&this.element.find("[data-"+e.mobile.ns+"='content']").removeClass("ui-body-"+this.options.contentTheme).addClass("ui-body-"+n.contentTheme)},_handlePageBeforeShow:function(){this.setContainerBackground()},removeContainerBackground:function(){this.element.closest(":mobile-pagecontainer").pagecontainer({theme:"none"})},setContainerBackground:function(e){this.element.parent().pagecontainer({theme:e||this.options.theme})},keepNativeSelector:function(){var t=this.options,n=e.trim(t.keepNative||""),i=e.trim(e.mobile.keepNative),s=e.trim(t.keepNativeDefault),o=r===i?"":i,u=o===""?s:"";return(n?[n]:[]).concat(o?[o]:[]).concat(u?[u]:[]).join(", ")}})}(e),function(e,t){e.mobile.degradeInputs={color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:"text",tel:!1,time:!1,url:!1,week:!1},e.mobile.page.prototype.options.degradeInputs=e.mobile.degradeInputs,e.mobile.degradeInputsWithin=function(t){t=e(t),t.find("input").not(e.mobile.page.prototype.keepNativeSelector()).each(function(){var t=e(this),n=this.getAttribute("type"),r=e.mobile.degradeInputs[n]||"text",i,s,o,u;e.mobile.degradeInputs[n]&&(i=e("<div>").html(t.clone()).html(),s=i.indexOf(" type=")>-1,o=s?/\s+type=["']?\w+['"]?/:/\/?>/,u=' type="'+r+'" data-'+e.mobile.ns+'type="'+n+'"'+(s?"":">"),t.replaceWith(i.replace(o,u)))})}}(e),function(e,t){e.fn.fieldcontain=function(){return this.addClass("ui-field-contain")}}(e),function(e,t){e.fn.grid=function(t){return this.each(function(){var n=e(this),r=e.extend({grid:null},t),i=n.children(),s={solo:1,a:2,b:3,c:4,d:5},o=r.grid,u,a;if(!o)if(i.length<=5)for(a in s)s[a]===i.length&&(o=a);else o="a",n.addClass("ui-grid-duo");u=s[o],n.addClass("ui-grid-"+o),i.filter(":nth-child("+u+"n+1)").addClass("ui-block-a"),u>1&&i.filter(":nth-child("+u+"n+2)").addClass("ui-block-b"),u>2&&i.filter(":nth-child("+u+"n+3)").addClass("ui-block-c"),u>3&&i.filter(":nth-child("+u+"n+4)").addClass("ui-block-d"),u>4&&i.filter(":nth-child("+u+"n+5)").addClass("ui-block-e")})}}(e),function(e,n){var r,i,s="&ui-state=dialog";e.mobile.path=r={uiStateKey:"&ui-state",urlParseRE:/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,getLocation:function(e){var t=this.parseUrl(e||location.href),n=e?t:location,r=t.hash;return r=r==="#"?"":r,n.protocol+t.doubleSlash+n.host+(n.protocol!==""&&n.pathname.substring(0,1)!=="/"?"/":"")+n.pathname+n.search+r},getDocumentUrl:function(t){return t?e.extend({},r.documentUrl):r.documentUrl.href},parseLocation:function(){return this.parseUrl(this.getLocation())},parseUrl:function(t){if(e.type(t)==="object")return t;var n=r.urlParseRE.exec(t||"")||[];return{href:n[0]||"",hrefNoHash:n[1]||"",hrefNoSearch:n[2]||"",domain:n[3]||"",protocol:n[4]||"",doubleSlash:n[5]||"",authority:n[6]||"",username:n[8]||"",password:n[9]||"",host:n[10]||"",hostname:n[11]||"",port:n[12]||"",pathname:n[13]||"",directory:n[14]||"",filename:n[15]||"",search:n[16]||"",hash:n[17]||""}},makePathAbsolute:function(e,t){var n,r,i,s;if(e&&e.charAt(0)==="/")return e;e=e||"",t=t?t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"",n=t?t.split("/"):[],r=e.split("/");for(i=0;i<r.length;i++){s=r[i];switch(s){case".":break;case"..":n.length&&n.pop();break;default:n.push(s)}}return"/"+n.join("/")},isSameDomain:function(e,t){return r.parseUrl(e).domain.toLowerCase()===r.parseUrl(t).domain.toLowerCase()},isRelativeUrl:function(e){return r.parseUrl(e).protocol===""},isAbsoluteUrl:function(e){return r.parseUrl(e).protocol!==""},makeUrlAbsolute:function(e,t){if(!r.isRelativeUrl(e))return e;t===n&&(t=this.documentBase);var i=r.parseUrl(e),s=r.parseUrl(t),o=i.protocol||s.protocol,u=i.protocol?i.doubleSlash:i.doubleSlash||s.doubleSlash,a=i.authority||s.authority,f=i.pathname!=="",l=r.makePathAbsolute(i.pathname||s.filename,s.pathname),c=i.search||!f&&s.search||"",h=i.hash;return o+u+a+l+c+h},addSearchParams:function(t,n){var i=r.parseUrl(t),s=typeof n=="object"?e.param(n):n,o=i.search||"?";return i.hrefNoSearch+o+(o.charAt(o.length-1)!=="?"?"&":"")+s+(i.hash||"")},convertUrlToDataUrl:function(e){var n=e,i=r.parseUrl(e);return r.isEmbeddedPage(i)?n=i.hash.split(s)[0].replace(/^#/,"").replace(/\?.*$/,""):r.isSameDomain(i,this.documentBase)&&(n=i.hrefNoHash.replace(this.documentBase.domain,"").split(s)[0]),t.decodeURIComponent(n)},get:function(e){return e===n&&(e=r.parseLocation().hash),r.stripHash(e).replace(/[^\/]*\.[^\/*]+$/,"")},set:function(e){location.hash=e},isPath:function(e){return/\//.test(e)},clean:function(e){return e.replace(this.documentBase.domain,"")},stripHash:function(e){return e.replace(/^#/,"")},stripQueryParams:function(e){return e.replace(/\?.*$/,"")},cleanHash:function(e){return r.stripHash(e.replace(/\?.*$/,"").replace(s,""))},isHashValid:function(e){return/^#[^#]+$/.test(e)},isExternal:function(e){var t=r.parseUrl(e);return!!t.protocol&&t.domain.toLowerCase()!==this.documentUrl.domain.toLowerCase()},hasProtocol:function(e){return/^(:?\w+:)/.test(e)},isEmbeddedPage:function(e){var t=r.parseUrl(e);return t.protocol!==""?!this.isPath(t.hash)&&t.hash&&(t.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&t.hrefNoHash===this.documentBase.hrefNoHash):/^#/.test(t.href)},squash:function(e,t){var n,i,s,o,u,a=this.isPath(e),f=this.parseUrl(e),l=f.hash,c="";t||(a?t=r.getLocation():(u=r.getDocumentUrl(!0),r.isPath(u.hash)?t=r.squash(u.href):t=u.href)),i=a?r.stripHash(e):e,i=r.isPath(f.hash)?r.stripHash(f.hash):i,o=i.indexOf(this.uiStateKey),o>-1&&(c=i.slice(o),i=i.slice(0,o)),n=r.makeUrlAbsolute(i,t),s=this.parseUrl(n).search;if(a){if(r.isPath(l)||l.replace("#","").indexOf(this.uiStateKey)===0)l="";c&&l.indexOf(this.uiStateKey)===-1&&(l+=c),l.indexOf("#")===-1&&l!==""&&(l="#"+l),n=r.parseUrl(n),n=n.protocol+n.doubleSlash+n.host+n.pathname+s+l}else n+=n.indexOf("#")>-1?c:"#"+c;return n},isPreservableHash:function(e){return e.replace("#","").indexOf(this.uiStateKey)===0},hashToSelector:function(e){var t=e.substring(0,1)==="#";return t&&(e=e.substring(1)),(t?"#":"")+e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")},getFilePath:function(e){return e&&e.split(s)[0]},isFirstPageUrl:function(t){var i=r.parseUrl(r.makeUrlAbsolute(t,this.documentBase)),s=i.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&i.hrefNoHash===this.documentBase.hrefNoHash,o=e.mobile.firstPage,u=o&&o[0]?o[0].id:n;return s&&(!i.hash||i.hash==="#"||u&&i.hash.replace(/^#/,"")===u)},isPermittedCrossDomainRequest:function(t,n){return e.mobile.allowCrossDomainPages&&(t.protocol==="file:"||t.protocol==="content:")&&n.search(/^https?:/)!==-1}},r.documentUrl=r.parseLocation(),i=e("head").find("base"),r.documentBase=i.length?r.parseUrl(r.makeUrlAbsolute(i.attr("href"),r.documentUrl.href)):r.documentUrl,r.documentBaseDiffers=r.documentUrl.hrefNoHash!==r.documentBase.hrefNoHash,r.getDocumentBase=function(t){return t?e.extend({},r.documentBase):r.documentBase.href},e.extend(e.mobile,{getDocumentUrl:r.getDocumentUrl,getDocumentBase:r.getDocumentBase})}(e),function(e,t){e.mobile.History=function(e,t){this.stack=e||[],this.activeIndex=t||0},e.extend(e.mobile.History.prototype,{getActive:function(){return this.stack[this.activeIndex]},getLast:function(){return this.stack[this.previousIndex]},getNext:function(){return this.stack[this.activeIndex+1]},getPrev:function(){return this.stack[this.activeIndex-1]},add:function(e,t){t=t||{},this.getNext()&&this.clearForward(),t.hash&&t.hash.indexOf("#")===-1&&(t.hash="#"+t.hash),t.url=e,this.stack.push(t),this.activeIndex=this.stack.length-1},clearForward:function(){this.stack=this.stack.slice(0,this.activeIndex+1)},find:function(e,t,n){t=t||this.stack;var r,i,s=t.length,o;for(i=0;i<s;i++){r=t[i];if(decodeURIComponent(e)===decodeURIComponent(r.url)||decodeURIComponent(e)===decodeURIComponent(r.hash)){o=i;if(n)return o}}return o},closest:function(e){var n,r=this.activeIndex;return n=this.find(e,this.stack.slice(0,r)),n===t&&(n=this.find(e,this.stack.slice(r),!0),n=n===t?n:n+r),n},direct:function(n){var r=this.closest(n.url),i=this.activeIndex;r!==t&&(this.activeIndex=r,this.previousIndex=i),r<i?(n.present||n.back||e.noop)(this.getActive(),"back"):r>i?(n.present||n.forward||e.noop)(this.getActive(),"forward"):r===t&&n.missing&&n.missing(this.getActive())}})}(e),function(e,r){var i=e.mobile.path,s=location.href;e.mobile.Navigator=function(t){this.history=t,this.ignoreInitialHashChange=!0,e.mobile.window.bind({"popstate.history":e.proxy(this.popstate,this),"hashchange.history":e.proxy(this.hashchange,this)})},e.extend(e.mobile.Navigator.prototype,{squash:function(r,s){var o,u,a=i.isPath(r)?i.stripHash(r):r;return u=i.squash(r),o=e.extend({hash:a,url:u},s),t.history.replaceState(o,o.title||n.title,u),o},hash:function(e,t){var n,r,s,o;return n=i.parseUrl(e),r=i.parseLocation(),r.pathname+r.search===n.pathname+n.search?s=n.hash?n.hash:n.pathname+n.search:i.isPath(e)?(o=i.parseUrl(t),s=o.pathname+o.search+(i.isPreservableHash(o.hash)?o.hash.replace("#",""):"")):s=e,s},go:function(r,s,o){var u,a,f,l,c=e.event.special.navigate.isPushStateEnabled();a=i.squash(r),f=this.hash(r,a),o&&f!==i.stripHash(i.parseLocation().hash)&&(this.preventNextHashChange=o),this.preventHashAssignPopState=!0,t.location.hash=f,this.preventHashAssignPopState=!1,u=e.extend({url:a,hash:f,title:n.title},s),c&&(l=new e.Event("popstate"),l.originalEvent={type:"popstate",state:null},this.squash(r,u),o||(this.ignorePopState=!0,e.mobile.window.trigger(l))),this.history.add(u.url,u)},popstate:function(t){var n,r;if(!e.event.special.navigate.isPushStateEnabled())return;if(this.preventHashAssignPopState){this.preventHashAssignPopState=!1,t.stopImmediatePropagation();return}if(this.ignorePopState){this.ignorePopState=!1;return}if(!t.originalEvent.state&&this.history.stack.length===1&&this.ignoreInitialHashChange){this.ignoreInitialHashChange=!1;if(location.href===s){t.preventDefault();return}}n=i.parseLocation().hash;if(!t.originalEvent.state&&n){r=this.squash(n),this.history.add(r.url,r),t.historyState=r;return}this.history.direct({url:(t.originalEvent.state||{}).url||n,present:function(n,r){t.historyState=e.extend({},n),t.historyState.direction=r}})},hashchange:function(t){var r,s;if(!e.event.special.navigate.isHashChangeEnabled()||e.event.special.navigate.isPushStateEnabled())return;if(this.preventNextHashChange){this.preventNextHashChange=!1,t.stopImmediatePropagation();return}r=this.history,s=i.parseLocation().hash,this.history.direct({url:s,present:function(n,r){t.hashchangeState=e.extend({},n),t.hashchangeState.direction=r},missing:function(){r.add(s,{hash:s,title:n.title})}})}})}(e),function(e,t){e.mobile.navigate=function(t,n,r){e.mobile.navigate.navigator.go(t,n,r)},e.mobile.navigate.history=new e.mobile.History,e.mobile.navigate.navigator=new e.mobile.Navigator(e.mobile.navigate.history);var n=e.mobile.path.parseLocation();e.mobile.navigate.history.add(n.href,{hash:n.hash})}(e),function(e,t){var n=e("head").children("base"),r={element:n.length?n:e("<base>",{href:e.mobile.path.documentBase.hrefNoHash}).prependTo(e("head")),linkSelector:"[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",set:function(t){if(!e.mobile.dynamicBaseEnabled)return;e.support.dynamicBaseTag&&r.element.attr("href",e.mobile.path.makeUrlAbsolute(t,e.mobile.path.documentBase))},rewrite:function(t,n){var i=e.mobile.path.get(t);n.find(r.linkSelector).each(function(t,n){var r=e(n).is("[href]")?"href":e(n).is("[src]")?"src":"action",s=e.mobile.path.parseLocation(),o=e(n).attr(r);o=o.replace(s.protocol+s.doubleSlash+s.host+s.pathname,""),/^(\w+:|#|\/)/.test(o)||e(n).attr(r,i+o)})},reset:function(){r.element.attr("href",e.mobile.path.documentBase.hrefNoSearch)}};e.mobile.base=r}(e),function(e,t,n){e.mobile.Transition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.Transition.prototype,{toPreClass:" ui-page-pre-in",init:function(t,n,r,i){e.extend(this,{name:t,reverse:n,$to:r,$from:i,deferred:new e.Deferred})},cleanFrom:function(){this.$from.removeClass(e.mobile.activePageClass+" out in reverse "+this.name).height("")},beforeDoneIn:function(){},beforeDoneOut:function(){},beforeStartOut:function(){},doneIn:function(){this.beforeDoneIn(),this.$to.removeClass("out in reverse "+this.name).height(""),this.toggleViewportClass(),e.mobile.window.scrollTop()!==this.toScroll&&this.scrollPage(),this.sequential||this.$to.addClass(e.mobile.activePageClass),this.deferred.resolve(this.name,this.reverse,this.$to,this.$from,!0)},doneOut:function(e,t,n,r){this.beforeDoneOut(),this.startIn(e,t,n,r)},hideIn:function(e){this.$to.css("z-index",-10),e.call(this),this.$to.css("z-index","")},scrollPage:function(){e.event.special.scrollstart.enabled=!1,(e.mobile.hideUrlBar||this.toScroll!==e.mobile.defaultHomeScroll)&&t.scrollTo(0,this.toScroll),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},startIn:function(t,n,r,i){this.hideIn(function(){this.$to.addClass(e.mobile.activePageClass+this.toPreClass),i||e.mobile.focusPage(this.$to),this.$to.height(t+this.toScroll),r||this.scrollPage()}),this.$to.removeClass(this.toPreClass).addClass(this.name+" in "+n),r?this.doneIn():this.$to.animationComplete(e.proxy(function(){this.doneIn()},this))},startOut:function(t,n,r){this.beforeStartOut(t,n,r),this.$from.height(t+e.mobile.window.scrollTop()).addClass(this.name+" out"+n)},toggleViewportClass:function(){e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-"+this.name)},transition:function(){var t,n=this.reverse?" reverse":"",r=e.mobile.getScreenHeight(),i=e.mobile.maxTransitionWidth!==!1&&e.mobile.window.width()>e.mobile.maxTransitionWidth;return this.toScroll=e.mobile.navigate.history.getActive().lastScroll||e.mobile.defaultHomeScroll,t=!e.support.cssTransitions||!e.support.cssAnimations||i||!this.name||this.name==="none"||Math.max(e.mobile.window.scrollTop(),this.toScroll)>e.mobile.getMaxScrollForTransition(),this.toggleViewportClass(),this.$from&&!t?this.startOut(r,n,t):this.doneOut(r,n,t,!0),this.deferred.promise()}})}(e,this),function(e){e.mobile.SerialTransition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.SerialTransition.prototype,e.mobile.Transition.prototype,{sequential:!0,beforeDoneOut:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(t,n,r){this.$from.animationComplete(e.proxy(function(){this.doneOut(t,n,r)},this))}})}(e),function(e){e.mobile.ConcurrentTransition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.ConcurrentTransition.prototype,e.mobile.Transition.prototype,{sequential:!1,beforeDoneIn:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(e,t,n){this.doneOut(e,t,n)}})}(e),function(e){var t=function(){return e.mobile.getScreenHeight()*3};e.mobile.transitionHandlers={sequential:e.mobile.SerialTransition,simultaneous:e.mobile.ConcurrentTransition},e.mobile.defaultTransitionHandler=e.mobile.transitionHandlers.sequential,e.mobile.transitionFallbacks={},e.mobile._maybeDegradeTransition=function(t){return t&&!e.support.cssTransform3d&&e.mobile.transitionFallbacks[t]&&(t=e.mobile.transitionFallbacks[t]),t},e.mobile.getMaxScrollForTransition=e.mobile.getMaxScrollForTransition||t}(e),function(e,r){e.widget("mobile.pagecontainer",{options:{theme:"a"},initSelector:!1,_create:function(){this._trigger("beforecreate"),this.setLastScrollEnabled=!0,this._on(this.window,{navigate:"_disableRecordScroll",scrollstop:"_delayedRecordScroll"}),this._on(this.window,{navigate:"_filterNavigateEvents"}),this._on({pagechange:"_afterContentChange"}),this.window.one("navigate",e.proxy(function(){this.setLastScrollEnabled=!0},this))},_setOptions:function(e){e.theme!==r&&e.theme!=="none"?this.element.removeClass("ui-overlay-"+this.options.theme).addClass("ui-overlay-"+e.theme):e.theme!==r&&this.element.removeClass("ui-overlay-"+this.options.theme),this._super(e)},_disableRecordScroll:function(){this.setLastScrollEnabled=!1},_enableRecordScroll:function(){this.setLastScrollEnabled=!0},_afterContentChange:function(){this.setLastScrollEnabled=!0,this._off(this.window,"scrollstop"),this._on(this.window,{scrollstop:"_delayedRecordScroll"})},_recordScroll:function(){if(!this.setLastScrollEnabled)return;var e=this._getActiveHistory(),t,n,r;e&&(t=this._getScroll(),n=this._getMinScroll(),r=this._getDefaultScroll(),e.lastScroll=t<n?r:t)},_delayedRecordScroll:function(){setTimeout(e.proxy(this,"_recordScroll"),100)},_getScroll:function(){return this.window.scrollTop()},_getMinScroll:function(){return e.mobile.minScrollBack},_getDefaultScroll:function(){return e.mobile.defaultHomeScroll},_filterNavigateEvents:function(t,n){var r;if(t.originalEvent&&t.originalEvent.isDefaultPrevented())return;r=t.originalEvent.type.indexOf("hashchange")>-1?n.state.hash:n.state.url,r||(r=this._getHash());if(!r||r==="#"||r.indexOf("#"+e.mobile.path.uiStateKey)===0)r=location.href;this._handleNavigate(r,n.state)},_getHash:function(){return e.mobile.path.parseLocation().hash},getActivePage:function(){return this.activePage},_getInitialContent:function(){return e.mobile.firstPage},_getHistory:function(){return e.mobile.navigate.history},_getActiveHistory:function(){return this._getHistory().getActive()},_getDocumentBase:function(){return e.mobile.path.documentBase},back:function(){this.go(-1)},forward:function(){this.go(1)},go:function(n){if(e.mobile.hashListeningEnabled)t.history.go(n);else{var r=e.mobile.navigate.history.activeIndex,i=r+parseInt(n,10),s=e.mobile.navigate.history.stack[i].url,o=n>=1?"forward":"back";e.mobile.navigate.history.activeIndex=i,e.mobile.navigate.history.previousIndex=r,this.change(s,{direction:o,changeHash:!1,fromHashChange:!0})}},_handleDestination:function(t){var n;return e.type(t)==="string"&&(t=e.mobile.path.stripHash(t)),t&&(n=this._getHistory(),t=e.mobile.path.isPath(t)?t:e.mobile.path.makeUrlAbsolute("#"+t,this._getDocumentBase())),t||this._getInitialContent()},_transitionFromHistory:function(e,t){var n=this._getHistory(),r=e==="back"?n.getLast():n.getActive();return r&&r.transition||t},_handleDialog:function(t,n){var r,i,s=this.getActivePage();return s&&!s.data("mobile-dialog")?(n.direction==="back"?this.back():this.forward(),!1):(r=n.pageUrl,i=this._getActiveHistory(),e.extend(t,{role:i.role,transition:this._transitionFromHistory(n.direction,t.transition),reverse:n.direction==="back"}),r)},_handleNavigate:function(t,n){var r=e.mobile.path.stripHash(t),i=this._getHistory(),s=i.stack.length===0?"none":this._transitionFromHistory(n.direction),o={changeHash:!1,fromHashChange:!0,reverse:n.direction==="back"};e.extend(o,n,{transition:s});if(i.activeIndex>0&&r.indexOf(e.mobile.dialogHashKey)>-1){r=this._handleDialog(o,n);if(r===!1)return}this._changeContent(this._handleDestination(r),o)},_changeContent:function(t,n){e.mobile.changePage(t,n)},_getBase:function(){return e.mobile.base},_getNs:function(){return e.mobile.ns},_enhance:function(e,t){return e.page({role:t})},_include:function(e,t){e.appendTo(this.element),this._enhance(e,t.role),e.page("bindRemove")},_find:function(t){var n=this._createFileUrl(t),r=this._createDataUrl(t),i,s=this._getInitialContent();return i=this.element.children("[data-"+this._getNs()+"url='"+e.mobile.path.hashToSelector(r)+"']"),i.length===0&&r&&!e.mobile.path.isPath(r)&&(i=this.element.children(e.mobile.path.hashToSelector("#"+r)).attr("data-"+this._getNs()+"url",r).jqmData("url",r)),i.length===0&&e.mobile.path.isFirstPageUrl(n)&&s&&s.parent().length&&(i=e(s)),i},_getLoader:function(){return e.mobile.loading()},_showLoading:function(t,n,r,i){if(this._loadMsg)return;this._loadMsg=setTimeout(e.proxy(function(){this._getLoader().loader("show",n,r,i),this._loadMsg=0},this),t)},_hideLoading:function(){clearTimeout(this._loadMsg),this._loadMsg=0,this._getLoader().loader("hide")},_showError:function(){this._hideLoading(),this._showLoading(0,e.mobile.pageLoadErrorMessageTheme,e.mobile.pageLoadErrorMessage,!0),setTimeout(e.proxy(this,"_hideLoading"),1500)},_parse:function(t,n){var r,i=e("<div></div>");return i.get(0).innerHTML=t,r=i.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),r.length||(r=e("<div data-"+this._getNs()+"role='page'>"+(t.split(/<\/?body[^>]*>/gmi)[1]||"")+"</div>")),r.attr("data-"+this._getNs()+"url",this._createDataUrl(n)).attr("data-"+this._getNs()+"external-page",!0),r},_setLoadedTitle:function(t,n){var r=n.match(/<title[^>]*>([^<]*)/)&&RegExp.$1;r&&!t.jqmData("title")&&(r=e("<div>"+r+"</div>").text(),t.jqmData("title",r))},_isRewritableBaseTag:function(){return e.mobile.dynamicBaseEnabled&&!e.support.dynamicBaseTag},_createDataUrl:function(t){return e.mobile.path.convertUrlToDataUrl(t)},_createFileUrl:function(t){return e.mobile.path.getFilePath(t)},_triggerWithDeprecated:function(t,n,r){var i=e.Event("page"+t),s=e.Event(this.widgetName+t);return(r||this.element).trigger(i,n),this._trigger(t,s,n),{deprecatedEvent:i,event:s}},_loadSuccess:function(t,n,i,s){var o=this._createFileUrl(t);return e.proxy(function(u,a,f){var l,c=new RegExp("(<[^>]+\\bdata-"+this._getNs()+"role=[\"']?page[\"']?[^>]*>)"),h=new RegExp("\\bdata-"+this._getNs()+"url=[\"']?([^\"'>]*)[\"']?");c.test(u)&&RegExp.$1&&h.test(RegExp.$1)&&RegExp.$1&&(o=e.mobile.path.getFilePath(e("<div>"+RegExp.$1+"</div>").text()),o=this.window[0].encodeURIComponent(o)),i.prefetch===r&&this._getBase().set(o),l=this._parse(u,o),this._setLoadedTitle(l,u),n.xhr=f,n.textStatus=a,n.page=l,n.content=l,n.toPage=l;if(this._triggerWithDeprecated("load",n).event.isDefaultPrevented())return;this._isRewritableBaseTag()&&l&&this._getBase().rewrite(o,l),this._include(l,i),i.showLoadMsg&&this._hideLoading(),s.resolve(t,i,l)},this)},_loadDefaults:{type:"get",data:r,reloadPage:!1,reload:!1,role:r,showLoadMsg:!1,loadMsgDelay:50},load:function(t,n){var i=n&&n.deferred||e.Deferred(),s=n&&n.reload===r&&n.reloadPage!==r?{reload:n.reloadPage}:{},o=e.extend({},this._loadDefaults,n,s),u=null,a=e.mobile.path.makeUrlAbsolute(t,this._findBaseWithDefault()),f,l,c,h;return o.data&&o.type==="get"&&(a=e.mobile.path.addSearchParams(a,o.data),o.data=r),o.data&&o.type==="post"&&(o.reload=!0),f=this._createFileUrl(a),l=this._createDataUrl(a),u=this._find(a),u.length===0&&e.mobile.path.isEmbeddedPage(f)&&!e.mobile.path.isFirstPageUrl(f)?(i.reject(a,o),i.promise()):(this._getBase().reset(),u.length&&!o.reload?(this._enhance(u,o.role),i.resolve(a,o,u),o.prefetch||this._getBase().set(t),i.promise()):(h={url:t,absUrl:a,toPage:t,prevPage:n?n.fromPage:r,dataUrl:l,deferred:i,options:o},c=this._triggerWithDeprecated("beforeload",h),c.deprecatedEvent.isDefaultPrevented()||c.event.isDefaultPrevented()?i.promise():(o.showLoadMsg&&this._showLoading(o.loadMsgDelay),o.prefetch===r&&this._getBase().reset(),!e.mobile.allowCrossDomainPages&&!e.mobile.path.isSameDomain(e.mobile.path.documentUrl,a)?(i.reject(a,o),i.promise()):(e.ajax({url:f,type:o.type,data:o.data,contentType:o.contentType,dataType:"html",success:this._loadSuccess(a,h,o,i),error:this._loadError(a,h,o,i)}),i.promise()))))},_loadError:function(t,n,r,i){return e.proxy(function(s,o,u){this._getBase().set(e.mobile.path.get()),n.xhr=s,n.textStatus=o,n.errorThrown=u;var a=this._triggerWithDeprecated("loadfailed",n);if(a.deprecatedEvent.isDefaultPrevented()||a.event.isDefaultPrevented())return;r.showLoadMsg&&this._showError(),i.reject(t,r)},this)},_getTransitionHandler:function(t){return t=e.mobile._maybeDegradeTransition(t),e.mobile.transitionHandlers[t]||e.mobile.defaultTransitionHandler},_triggerCssTransitionEvents:function(t,n,r){var i=!1;r=r||"",n&&(t[0]===n[0]&&(i=!0),this._triggerWithDeprecated(r+"hide",{nextPage:t,toPage:t,prevPage:n,samePage:i},n)),this._triggerWithDeprecated(r+"show",{prevPage:n||e(""),toPage:t},t)},_cssTransition:function(t,n,r){var i=r.transition,s=r.reverse,o=r.deferred,u,a;this._triggerCssTransitionEvents(t,n,"before"),this._hideLoading(),u=this._getTransitionHandler(i),a=(new u(i,s,t,n)).transition(),a.done(e.proxy(function(){this._triggerCssTransitionEvents(t,n)},this)),a.done(function(){o.resolve.apply(o,arguments)})},_releaseTransitionLock:function(){s=!1,i.length>0&&e.mobile.changePage.apply(null,i.pop())},_removeActiveLinkClass:function(t){e.mobile.removeActiveLinkClass(t)},_loadUrl:function(t,n,r){r.target=t,r.deferred=e.Deferred(),this.load(t,r),r.deferred.done(e.proxy(function(e,t,r){s=!1,t.absUrl=n.absUrl,this.transition(r,n,t)},this)),r.deferred.fail(e.proxy(function(){this._removeActiveLinkClass(!0),this._releaseTransitionLock(),this._triggerWithDeprecated("changefailed",n)},this))},_triggerPageBeforeChange:function(t,n,r){var i;return n.prevPage=this.activePage,e.extend(n,{toPage:t,options:r}),e.type(t)==="string"?n.absUrl=e.mobile.path.makeUrlAbsolute(t,this._findBaseWithDefault()):n.absUrl=r.absUrl,i=this._triggerWithDeprecated("beforechange",n),i.event.isDefaultPrevented()||i.deprecatedEvent.isDefaultPrevented()?!1:!0},change:function(t,n){if(s){i.unshift(arguments);return}var r=e.extend({},e.mobile.changePage.defaults,n),o={};r.fromPage=r.fromPage||this.activePage;if(!this._triggerPageBeforeChange(t,o,r))return;t=o.toPage,e.type(t)==="string"?(s=!0,this._loadUrl(t,o,r)):this.transition(t,o,r)},transition:function(t,o,u){var a,f,l,c,h,p,d,v,m,g,y,b,w,E;if(s){i.unshift([t,u]);return}if(!this._triggerPageBeforeChange(t,o,u))return;o.prevPage=u.fromPage,E=this._triggerWithDeprecated("beforetransition",o);if(E.deprecatedEvent.isDefaultPrevented()||E.event.isDefaultPrevented())return;s=!0,t[0]===e.mobile.firstPage[0]&&!u.dataUrl&&(u.dataUrl=e.mobile.path.documentUrl.hrefNoHash),a=u.fromPage,f=u.dataUrl&&e.mobile.path.convertUrlToDataUrl(u.dataUrl)||t.jqmData("url"),l=f,c=e.mobile.path.getFilePath(f),h=e.mobile.navigate.history.getActive(),p=e.mobile.navigate.history.activeIndex===0,d=0,v=n.title,m=(u.role==="dialog"||t.jqmData("role")==="dialog")&&t.jqmData("dialog")!==!0;if(a&&a[0]===t[0]&&!u.allowSamePageTransition){s=!1,this._triggerWithDeprecated("transition",o),this._triggerWithDeprecated("change",o),u.fromHashChange&&e.mobile.navigate.history.direct({url:f});return}t.page({role:u.role}),u.fromHashChange&&(d=u.direction==="back"?-1:1);try{n.activeElement&&n.activeElement.nodeName.toLowerCase()!=="body"?e(n.activeElement).blur():e("input:focus, textarea:focus, select:focus").blur()}catch(S){}g=!1,m&&h&&(h.url&&h.url.indexOf(e.mobile.dialogHashKey)>-1&&this.activePage&&!this.activePage.hasClass("ui-dialog")&&e.mobile.navigate.history.activeIndex>0&&(u.changeHash=!1,g=!0),f=h.url||"",!g&&f.indexOf("#")>-1?f+=e.mobile.dialogHashKey:f+="#"+e.mobile.dialogHashKey),y=h?t.jqmData("title")||t.children(":jqmData(role='header')").find(".ui-title").text():v,!!y&&v===n.title&&(v=y),t.jqmData("title")||t.jqmData("title",v),u.transition=u.transition||(d&&!p?h.transition:r)||(m?e.mobile.defaultDialogTransition:e.mobile.defaultPageTransition),!d&&g&&(e.mobile.navigate.history.getActive().pageUrl=l),f&&!u.fromHashChange&&(!e.mobile.path.isPath(f)&&f.indexOf("#")<0&&(f="#"+f),b={transition:u.transition,title:v,pageUrl:l,role:u.role},u.changeHash!==!1&&e.mobile.hashListeningEnabled?e.mobile.navigate(this.window[0].encodeURI(f),b,!0):t[0]!==e.mobile.firstPage[0]&&e.mobile.navigate.history.add(f,b)),n.title=v,e.mobile.activePage=t,this.activePage=t,u.reverse=u.reverse||d<0,w=e.Deferred(),this._cssTransition(t,a,{transition:u.transition,reverse:u.reverse,deferred:w}),w.done(e.proxy(function(n,r,i,s,a){e.mobile.removeActiveLinkClass(),u.duplicateCachedPage&&u.duplicateCachedPage.remove(),a||e.mobile.focusPage(t),this._releaseTransitionLock(),this._triggerWithDeprecated("transition",o),this._triggerWithDeprecated("change",o)},this))},_findBaseWithDefault:function(){var t=this.activePage&&e.mobile.getClosestBaseUrl(this.activePage);return t||e.mobile.path.documentBase.hrefNoHash}}),e.mobile.navreadyDeferred=e.Deferred();var i=[],s=!1}(e),function(e,r){function f(e){while(e){if(typeof e.nodeName=="string"&&e.nodeName.toLowerCase()==="a")break;e=e.parentNode}return e}var i=e.Deferred(),s=e.Deferred(),o=function(){s.resolve(),s=null},u=e.mobile.path.documentUrl,a=null;e.mobile.loadPage=function(t,n){var r;return n=n||{},r=n.pageContainer||e.mobile.pageContainer,n.deferred=e.Deferred(),r.pagecontainer("load",t,n),n.deferred.promise()},e.mobile.back=function(){var n=t.navigator;this.phonegapNavigationEnabled&&n&&n.app&&n.app.backHistory?n.app.backHistory():e.mobile.pageContainer.pagecontainer("back")},e.mobile.focusPage=function(e){var t=e.find("[autofocus]"),n=e.find(".ui-title:eq(0)");if(t.length){t.focus();return}n.length?n.focus():e.focus()},e.mobile._maybeDegradeTransition=e.mobile._maybeDegradeTransition||function(e){return e},e.mobile.changePage=function(t,n){e.mobile.pageContainer.pagecontainer("change",t,n)},e.mobile.changePage.defaults={transition:r,reverse:!1,changeHash:!0,fromHashChange:!1,role:r,duplicateCachedPage:r,pageContainer:r,showLoadMsg:!0,dataUrl:r,fromPage:r,allowSamePageTransition:!1},e.mobile._registerInternalEvents=function(){var n=function(t,n){var r,i=!0,s,o,f;return!e.mobile.ajaxEnabled||t.is(":jqmData(ajax='false')")||!t.jqmHijackable().length||t.attr("target")?!1:(r=a&&a.attr("formaction")||t.attr("action"),f=(t.attr("method")||"get").toLowerCase(),r||(r=e.mobile.getClosestBaseUrl(t),f==="get"&&(r=e.mobile.path.parseUrl(r).hrefNoSearch),r===e.mobile.path.documentBase.hrefNoHash&&(r=u.hrefNoSearch)),r=e.mobile.path.makeUrlAbsolute(r,e.mobile.getClosestBaseUrl(t)),e.mobile.path.isExternal(r)&&!e.mobile.path.isPermittedCrossDomainRequest(u,r)?!1:(n||(s=t.serializeArray(),a&&a[0].form===t[0]&&(o=a.attr("name"),o&&(e.each(s,function(e,t){if(t.name===o)return o="",!1}),o&&s.push({name:o,value:a.attr("value")}))),i={url:r,options:{type:f,data:e.param(s),transition:t.jqmData("transition"),reverse:t.jqmData("direction")==="reverse",reloadPage:!0}}),i))};e.mobile.document.delegate("form","submit",function(t){var r;t.isDefaultPrevented()||(r=n(e(this)),r&&(e.mobile.changePage(r.url,r.options),t.preventDefault()))}),e.mobile.document.bind("vclick",function(t){var r,i,s=t.target,o=!1;if(t.which>1||!e.mobile.linkBindingEnabled)return;a=e(s);if(e.data(s,"mobile-button")){if(!n(e(s).closest("form"),!0))return;s.parentNode&&(s=s.parentNode)}else{s=f(s);if(!s||e.mobile.path.parseUrl(s.getAttribute("href")||"#").hash==="#")return;if(!e(s).jqmHijackable().length)return}~s.className.indexOf("ui-link-inherit")?s.parentNode&&(i=e.data(s.parentNode,"buttonElements")):i=e.data(s,"buttonElements"),i?s=i.outer:o=!0,r=e(s),o&&(r=r.closest(".ui-btn")),r.length>0&&!r.hasClass("ui-state-disabled")&&(e.mobile.removeActiveLinkClass(!0),e.mobile.activeClickedLink=r,e.mobile.activeClickedLink.addClass(e.mobile.activeBtnClass))}),e.mobile.document.bind("click",function(n){if(!e.mobile.linkBindingEnabled||n.isDefaultPrevented())return;var i=f(n.target),s=e(i),o=function(){t.setTimeout(function(){e.mobile.removeActiveLinkClass(!0)},200)},a,l,c,h,p,d,v;e.mobile.activeClickedLink&&e.mobile.activeClickedLink[0]===n.target.parentNode&&o();if(!i||n.which>1||!s.jqmHijackable().length)return;if(s.is(":jqmData(rel='back')"))return e.mobile.back(),!1;a=e.mobile.getClosestBaseUrl(s),l=e.mobile.path.makeUrlAbsolute(s.attr("href")||"#",a);if(!e.mobile.ajaxEnabled&&!e.mobile.path.isEmbeddedPage(l)){o();return}if(l.search("#")!==-1&&(!e.mobile.path.isExternal(l)||!e.mobile.path.isAbsoluteUrl(l))){l=l.replace(/[^#]*#/,"");if(!l){n.preventDefault();return}e.mobile.path.isPath(l)?l=e.mobile.path.makeUrlAbsolute(l,a):l=e.mobile.path.makeUrlAbsolute("#"+l,u.hrefNoHash)}c=s.is("[rel='external']")||s.is(":jqmData(ajax='false')")||s.is("[target]"),h=c||e.mobile.path.isExternal(l)&&!e.mobile.path.isPermittedCrossDomainRequest(u,l);if(h){o();return}p=s.jqmData("transition"),d=s.jqmData("direction")==="reverse"||s.jqmData("back"),v=s.attr("data-"+e.mobile.ns+"rel")||r,e.mobile.changePage(l,{transition:p,reverse:d,role:v,link:s}),n.preventDefault()}),e.mobile.document.delegate(".ui-page","pageshow.prefetch",function(){var t=[];e(this).find("a:jqmData(prefetch)").each(function(){var n=e(this),r=n.attr("href");r&&e.inArray(r,t)===-1&&(t.push(r),e.mobile.loadPage(r,{role:n.attr("data-"+e.mobile.ns+"rel"),prefetch:!0}))})}),e.mobile.pageContainer.pagecontainer(),e.mobile.document.bind("pageshow",function(){s?s.done(e.mobile.resetActivePageHeight):e.mobile.resetActivePageHeight()}),e.mobile.window.bind("throttledresize",e.mobile.resetActivePageHeight)},e(function(){i.resolve()}),n.readyState==="complete"?o():e.mobile.window.load(o),e.when(i,e.mobile.navreadyDeferred).done(function(){e.mobile._registerInternalEvents()})}(e),function(e){var t="ui-loader",n=e("html");e.widget("mobile.loader",{options:{theme:"a",textVisible:!1,html:"",text:"loading"},defaultHtml:"<div class='"+t+"'>"+"<span class='ui-icon-loading'></span>"+"<h1></h1>"+"</div>",fakeFixLoader:function(){var t=e("."+e.mobile.activeBtnClass).first();this.element.css({top:e.support.scrollTop&&this.window.scrollTop()+this.window.height()/2||t.length&&t.offset().top||100})},checkLoaderPosition:function(){var t=this.element.offset(),n=this.window.scrollTop(),r=e.mobile.getScreenHeight();if(t.top<n||t.top-n>r)this.element.addClass("ui-loader-fakefix"),this.fakeFixLoader(),this.window.unbind("scroll",this.checkLoaderPosition).bind("scroll",e.proxy(this.fakeFixLoader,this))},resetHtml:function(){this.element.html(e(this.defaultHtml).html())},show:function(r,i,s){var o,u,a;this.resetHtml(),e.type(r)==="object"?(a=e.extend({},this.options,r),r=a.theme):(a=this.options,r=r||a.theme),u=i||(a.text===!1?"":a.text),n.addClass("ui-loading"),o=a.textVisible,this.element.attr("class",t+" ui-corner-all ui-body-"+r+" ui-loader-"+(o||i||r.text?"verbose":"default")+(a.textonly||s?" ui-loader-textonly":"")),a.html?this.element.html(a.html):this.element.find("h1").text(u),this.element.appendTo(e.mobile.pagecontainer?e(":mobile-pagecontainer"):e("body")),this.checkLoaderPosition(),this.window.bind("scroll",e.proxy(this.checkLoaderPosition,this))},hide:function(){n.removeClass("ui-loading"),this.options.text&&this.element.removeClass("ui-loader-fakefix"),this.window.unbind("scroll",this.fakeFixLoader),this.window.unbind("scroll",this.checkLoaderPosition)}})}(e,this),function(e,t,r){function o(){i.removeClass("ui-mobile-rendering")}var i=e("html"),s=e.mobile.window;e(t.document).trigger("mobileinit");if(!e.mobile.gradeA())return;e.mobile.ajaxBlacklist&&(e.mobile.ajaxEnabled=!1),i.addClass("ui-mobile ui-mobile-rendering"),setTimeout(o,5e3),e.extend(e.mobile,{initializePage:function(){var t=e.mobile.path,i=e(":jqmData(role='page'), :jqmData(role='dialog')"),u=t.stripHash(t.stripQueryParams(t.parseLocation().hash)),a=e.mobile.path.parseLocation(),f=u?n.getElementById(u):r;i.length||(i=e("body").wrapInner("<div data-"+e.mobile.ns+"role='page'></div>").children(0)),i.each(function(){var n=e(this);n[0].getAttribute("data-"+e.mobile.ns+"url")||n.attr("data-"+e.mobile.ns+"url",n.attr("id")||t.convertUrlToDataUrl(a.pathname+a.search))}),e.mobile.firstPage=i.first(),e.mobile.pageContainer=e.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer(),e.mobile.navreadyDeferred.resolve(),s.trigger("pagecontainercreate"),e.mobile.loading("show"),o(),!e.mobile.hashListeningEnabled||!e.mobile.path.isHashValid(location.hash)||!e(f).is(":jqmData(role='page')")&&!e.mobile.path.isPath(u)&&u!==e.mobile.dialogHashKey?(e.event.special.navigate.isPushStateEnabled()&&e.mobile.navigate.navigator.squash(t.parseLocation().href),e.mobile.changePage(e.mobile.firstPage,{transition:"none",reverse:!0,changeHash:!1,fromHashChange:!0})):e.event.special.navigate.isPushStateEnabled()?(e.mobile.navigate.history.stack=[],e.mobile.navigate(e.mobile.path.isPath(location.hash)?location.hash:location.href)):s.trigger("hashchange",[!0])}}),e(function(){e.support.inlineSVG(),e.mobile.hideUrlBar&&t.scrollTo(0,1),e.mobile.defaultHomeScroll=!e.support.scrollTop||e.mobile.window.scrollTop()===1?0:1,e.mobile.autoInitializePage&&e.mobile.initializePage(),e.mobile.hideUrlBar&&s.load(e.mobile.silentScroll),e.support.cssPointerEvents||e.mobile.document.delegate(".ui-state-disabled,.ui-disabled","vclick",function(e){e.preventDefault(),e.stopImmediatePropagation()})})}(e,this),function(e,t){e.mobile.links=function(t){e(t).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function(){var e=this,t=e.getAttribute("href").substring(1);t&&(e.setAttribute("aria-haspopup",!0),e.setAttribute("aria-owns",t),e.setAttribute("aria-expanded",!1))}).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")}}(e),function(e,t){e.mobile.nojs=function(t){e(":jqmData(role='nojs')",t).addClass("ui-nojs")}}(e),function(e){var t=e("meta[name=viewport]"),n=t.attr("content"),r=n+",maximum-scale=1, user-scalable=no",i=n+",maximum-scale=10, user-scalable=yes",s=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(n);e.mobile.zoom=e.extend({},{enabled:!s,locked:!1,disable:function(n){!s&&!e.mobile.zoom.locked&&(t.attr("content",r),e.mobile.zoom.enabled=!1,e.mobile.zoom.locked=n||!1)},enable:function(n){!s&&(!e.mobile.zoom.locked||n===!0)&&(t.attr("content",i),e.mobile.zoom.enabled=!0,e.mobile.zoom.locked=!1)},restore:function(){s||(t.attr("content",n),e.mobile.zoom.enabled=!0)}})}(e),function(e,t){function f(e){i=e.originalEvent,a=i.accelerationIncludingGravity,s=Math.abs(a.x),o=Math.abs(a.y),u=Math.abs(a.z),!t.orientation&&(s>7||(u>6&&o<8||u<8&&o>6)&&s>5)?r.enabled&&r.disable():r.enabled||r.enable()}e.mobile.iosorientationfixEnabled=!0;var n=navigator.userAgent,r,i,s,o,u,a;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(n)&&n.indexOf("AppleWebKit")>-1)){e.mobile.iosorientationfixEnabled=!1;return}r=e.mobile.zoom,e.mobile.document.on("mobileinit",function(){e.mobile.iosorientationfixEnabled&&e.mobile.window.bind("orientationchange.iosorientationfix",r.enable).bind("devicemotion.iosorientationfix",f)})}(e,this),function(e,t,n){e.mobile.transitionFallbacks.flip="fade"}(e,this),function(e,t,n){e.mobile.transitionFallbacks.flow="fade"}(e,this),function(e,t,n){e.mobile.transitionFallbacks.pop="fade"}(e,this),function(e,t,n){e.mobile.transitionHandlers.slide=e.mobile.transitionHandlers.simultaneous,e.mobile.transitionFallbacks.slide="fade"}(e,this),function(e,t,n){e.mobile.transitionFallbacks.slidedown="fade"}(e,this),function(e,t,n){e.mobile.transitionFallbacks.slidefade="fade"}(e,this),function(e,t,n){e.mobile.transitionFallbacks.slideup="fade"}(e,this),function(e,t,n){e.mobile.transitionFallbacks.turn="fade"}(e,this),function(e,t){function r(t){var r,i=t.length,s=[];for(r=0;r<i;r++)t[r].className.match(n)||s.push(t[r]);return e(s)}var n=/\bui-screen-hidden\b/;e.mobile.behaviors.addFirstLastClasses={_getVisibles:function(e,t){var n;return t?n=r(e):(n=e.filter(":visible"),n.length===0&&(n=r(e))),n},_addFirstLastClasses:function(e,t,n){e.removeClass("ui-first-child ui-last-child"),t.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"),n||this.element.trigger("updatelayout")},_removeFirstLastClasses:function(e){e.removeClass("ui-first-child ui-last-child")}}}(e),function(e,t){var n=/([A-Z])/g,r=function(e){return"ui-btn-icon-"+(e===null?"left":e)};e.widget("mobile.collapsible",{options:{enhanced:!1,expandCueText:null,collapseCueText:null,collapsed:!0,heading:"h1,h2,h3,h4,h5,h6,legend",collapsedIcon:null,expandedIcon:null,iconpos:null,theme:null,contentTheme:null,inset:null,corners:null,mini:null},_create:function(){var t=this.element,n={accordion:t.closest(":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')"+(e.mobile.collapsibleset?", :mobile-collapsibleset":"")).addClass("ui-collapsible-set")};this._ui=n,this._renderedOptions=this._getOptions(this.options),this.options.enhanced?(n.heading=this.element.children(".ui-collapsible-heading"),n.content=n.heading.next(),n.anchor=n.heading.children(),n.status=n.anchor.children(".ui-collapsible-heading-status")):this._enhance(t,n),this._on(n.heading,{tap:function(){n.heading.find("a").first().addClass(e.mobile.activeBtnClass)},click:function(e){this._handleExpandCollapse(!n.heading.hasClass("ui-collapsible-heading-collapsed")),e.preventDefault(),e.stopPropagation()}})},_getOptions:function(t){var r,i=this._ui.accordion,s=this._ui.accordionWidget;t=e.extend({},t),i.length&&!s&&(this._ui.accordionWidget=s=i.data("mobile-collapsibleset"));for(r in t)t[r]=t[r]!=null?t[r]:s?s.options[r]:i.length?e.mobile.getAttribute(i[0],r.replace(n,"-$1").toLowerCase()):null,null==t[r]&&(t[r]=e.mobile.collapsible.defaults[r]);return t},_themeClassFromOption:function(e,t){return t?t==="none"?"":e+t:""},_enhance:function(t,n){var i,s=this._renderedOptions,o=this._themeClassFromOption("ui-body-",s.contentTheme);return t.addClass("ui-collapsible "+(s.inset?"ui-collapsible-inset ":"")+(s.inset&&s.corners?"ui-corner-all ":"")+(o?"ui-collapsible-themed-content ":"")),n.originalHeading=t.children(this.options.heading).first(),n.content=t.wrapInner("<div class='ui-collapsible-content "+o+"'></div>").children(".ui-collapsible-content"),n.heading=n.originalHeading,n.heading.is("legend")&&(n.heading=e("<div role='heading'>"+n.heading.html()+"</div>"),n.placeholder=e("<div><!-- placeholder for legend --></div>").insertBefore(n.originalHeading),n.originalHeading.remove()),i=s.collapsed?s.collapsedIcon?"ui-icon-"+s.collapsedIcon:"":s.expandedIcon?"ui-icon-"+s.expandedIcon:"",n.status=e("<span class='ui-collapsible-heading-status'></span>"),n.anchor=n.heading.detach().addClass("ui-collapsible-heading").append(n.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn "+(i?i+" ":"")+(i?r(s.iconpos)+" ":"")+this._themeClassFromOption("ui-btn-",s.theme)+" "+(s.mini?"ui-mini ":"")),n.heading.insertBefore(n.content),this._handleExpandCollapse(this.options.collapsed),n},refresh:function(){this._applyOptions(this.options),this._renderedOptions=this._getOptions(this.options)},_applyOptions:function(e){var n,i,s,o,u,a=this.element,f=this._renderedOptions,l=this._ui,c=l.anchor,h=l.status,p=this._getOptions(e);e.collapsed!==t&&this._handleExpandCollapse(e.collapsed),n=a.hasClass("ui-collapsible-collapsed"),n?p.expandCueText!==t&&h.text(p.expandCueText):p.collapseCueText!==t&&h.text(p.collapseCueText),u=p.collapsedIcon!==t?p.collapsedIcon!==!1:f.collapsedIcon!==!1;if(p.iconpos!==t||p.collapsedIcon!==t||p.expandedIcon!==t)c.removeClass([r(f.iconpos)].concat(f.expandedIcon?["ui-icon-"+f.expandedIcon]:[]).concat(f.collapsedIcon?["ui-icon-"+f.collapsedIcon]:[]).join(" ")),u&&c.addClass([r(p.iconpos!==t?p.iconpos:f.iconpos)].concat(n?["ui-icon-"+(p.collapsedIcon!==t?p.collapsedIcon:f.collapsedIcon)]:["ui-icon-"+(p.expandedIcon!==t?p.expandedIcon:f.expandedIcon)]).join(" "));p.theme!==t&&(s=this._themeClassFromOption("ui-btn-",f.theme),i=this._themeClassFromOption("ui-btn-",p.theme),c.removeClass(s).addClass(i)),p.contentTheme!==t&&(s=this._themeClassFromOption("ui-body-",f.contentTheme),i=this._themeClassFromOption("ui-body-",p.contentTheme),l.content.removeClass(s).addClass(i)),p.inset!==t&&(a.toggleClass("ui-collapsible-inset",p.inset),o=!(!p.inset||!p.corners&&!f.corners)),p.corners!==t&&(o=!(!p.corners||!p.inset&&!f.inset)),o!==t&&a.toggleClass("ui-corner-all",o),p.mini!==t&&c.toggleClass("ui-mini",p.mini)},_setOptions:function(e){this._applyOptions(e),this._super(e),this._renderedOptions=this._getOptions(this.options)},_handleExpandCollapse:function(t){var n=this._renderedOptions,r=this._ui;r.status.text(t?n.expandCueText:n.collapseCueText),r.heading.toggleClass("ui-collapsible-heading-collapsed",t).find("a").first().toggleClass("ui-icon-"+n.expandedIcon,!t).toggleClass("ui-icon-"+n.collapsedIcon,t||n.expandedIcon===n.collapsedIcon).removeClass(e.mobile.activeBtnClass),this.element.toggleClass("ui-collapsible-collapsed",t),r.content.toggleClass("ui-collapsible-content-collapsed",t).attr("aria-hidden",t).trigger("updatelayout"),this.options.collapsed=t,this._trigger(t?"collapse":"expand")},expand:function(){this._handleExpandCollapse(!1)},collapse:function(){this._handleExpandCollapse(!0)},_destroy:function(){var e=this._ui,t=this.options;if(t.enhanced)return;e.placeholder?(e.originalHeading.insertBefore(e.placeholder),e.placeholder.remove(),e.heading.remove()):(e.status.remove(),e.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap()),e.anchor.contents().unwrap(),e.content.contents().unwrap(),this.element.removeClass("ui-collapsible ui-collapsible-collapsed ui-collapsible-themed-content ui-collapsible-inset ui-corner-all")}}),e.mobile.collapsible.defaults={expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsedIcon:"plus",contentTheme:"inherit",expandedIcon:"minus",iconpos:"left",inset:!0,corners:!0,theme:"inherit",mini:!1}}(e),function(e,t){var n=":mobile-collapsible, "+e.mobile.collapsible.initSelector;e.widget("mobile.collapsibleset",e.extend({initSelector:":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",options:e.extend({enhanced:!1},e.mobile.collapsible.defaults),_handleCollapsibleExpand:function(t){var n=e(t.target).closest(".ui-collapsible");n.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')")&&n.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").collapsible("collapse")},_create:function(){var t=this.element,n=this.options;e.extend(this,{_classes:""}),n.enhanced||(t.addClass("ui-collapsible-set "+this._themeClassFromOption("ui-group-theme-",n.theme)+" "+(n.corners&&n.inset?"ui-corner-all ":"")),this.element.find(e.mobile.collapsible.initSelector).collapsible()),this._on(t,{collapsibleexpand:"_handleCollapsibleExpand"})},_themeClassFromOption:function(e,t){return t?t==="none"?"":e+t:""},_init:function(){this._refresh(!0),this.element.children(n).filter(":jqmData(collapsed='false')").collapsible("expand")},_setOptions:function(e){var n,r,i=this.element,s=this._themeClassFromOption("ui-group-theme-",e.theme);return s&&i.removeClass(this._themeClassFromOption("ui-group-theme-",this.options.theme)).addClass(s),e.inset!==t&&(r=!(!e.inset||!e.corners&&!this.options.corners)),e.corners!==t&&(r=!(!e.corners||!e.inset&&!this.options.inset)),r!==t&&i.toggleClass("ui-corner-all",r),n=this._super(e),this.element.children(":mobile-collapsible").collapsible("refresh"),n},_destroy:function(){var e=this.element;this._removeFirstLastClasses(e.children(n)),e.removeClass("ui-collapsible-set ui-corner-all "+this._themeClassFromOption("ui-group-theme-",this.options.theme)).children(":mobile-collapsible").collapsible("destroy")},_refresh:function(t){var r=this.element.children(n);this.element.find(e.mobile.collapsible.initSelector).not(".ui-collapsible").collapsible(),this._addFirstLastClasses(r,this._getVisibles(r,t),t)},refresh:function(){this._refresh(!1)}},e.mobile.behaviors.addFirstLastClasses))}(e),function(e,t){e.widget("mobile.controlgroup",e.extend({options:{enhanced:!1,theme:null,shadow:!1,corners:!0,excludeInvisible:!0,type:"vertical",mini:!1},_create:function(){var t=this.element,n=this.options,r=e.mobile.page.prototype.keepNativeSelector();e.fn.buttonMarkup&&this.element.find(e.fn.buttonMarkup.initSelector).not(r).buttonMarkup(),e.each(this._childWidgets,e.proxy(function(t,n){e.mobile[n]&&this.element.find(e.mobile[n].initSelector).not(r)[n]()},this)),e.extend(this,{_ui:null,_initialRefresh:!0}),n.enhanced?this._ui={groupLegend:t.children(".ui-controlgroup-label").children(),childWrapper:t.children(".ui-controlgroup-controls")}:this._ui=this._enhance()},_childWidgets:["checkboxradio","selectmenu","button"],_themeClassFromOption:function(e){return e?e==="none"?"":"ui-group-theme-"+e:""},_enhance:function(){var t=this.element,n=this.options,r={groupLegend:t.children("legend"),childWrapper:t.addClass("ui-controlgroup ui-controlgroup-"+(n.type==="horizontal"?"horizontal":"vertical")+" "+this._themeClassFromOption(n.theme)+" "+(n.corners?"ui-corner-all ":"")+(n.mini?"ui-mini ":"")).wrapInner("<div class='ui-controlgroup-controls "+(n.shadow===!0?"ui-shadow":"")+"'></div>").children()};return r.groupLegend.length>0&&e("<div role='heading' class='ui-controlgroup-label'></div>").append(r.groupLegend).prependTo(t),r},_init:function(){this.refresh()},_setOptions:function(e){var n,r,i=this.element;return e.type!==t&&(i.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-"+(e.type==="horizontal"?"horizontal":"vertical")),n=!0),e.theme!==t&&i.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(e.theme)),e.corners!==t&&i.toggleClass("ui-corner-all",e.corners),e.mini!==t&&i.toggleClass("ui-mini",e.mini),e.shadow!==t&&this._ui.childWrapper.toggleClass("ui-shadow",e.shadow),e.excludeInvisible!==t&&(this.options.excludeInvisible=e.excludeInvisible,n=!0),r=this._super(e),n&&this.refresh(),r},container:function(){return this._ui.childWrapper},refresh:function(){var t=this.container(),n=t.find(".ui-btn").not(".ui-slider-handle"),r=this._initialRefresh;e.mobile.checkboxradio&&t.find(":mobile-checkboxradio").checkboxradio("refresh"),this._addFirstLastClasses(n,this.options.excludeInvisible?this._getVisibles(n,r):n,r),this._initialRefresh=!1},_destroy:function(){var e,t,n=this.options;if(n.enhanced)return this;e=this._ui,t=this.element.removeClass("ui-controlgroup ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini "+this._themeClassFromOption(n.theme)).find(".ui-btn").not(".ui-slider-handle"),this._removeFirstLastClasses(t),e.groupLegend.unwrap(),e.childWrapper.children().unwrap()}},e.mobile.behaviors.addFirstLastClasses))}(e),function(e,t,n){e.widget("mobile.dialog",{options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0},_handlePageBeforeShow:function(){this._isCloseable=!0,this.options.overlayTheme&&this.element.page("removeContainerBackground").page("setContainerBackground",this.options.overlayTheme)},_handlePageBeforeHide:function(){this._isCloseable=!1},_handleVClickSubmit:function(t){var n,r=e(t.target).closest(t.type==="vclick"?"a":"form");r.length&&!r.jqmData("transition")&&(n={},n["data-"+e.mobile.ns+"transition"]=(e.mobile.navigate.history.getActive()||{}).transition||e.mobile.defaultDialogTransition,n["data-"+e.mobile.ns+"direction"]="reverse",r.attr(n))},_create:function(){var t=this.element,n=this.options;t.addClass("ui-dialog").wrapInner(e("<div/>",{role:"dialog","class":"ui-dialog-contain ui-overlay-shadow"+(n.corners?" ui-corner-all":"")})),e.extend(this,{_isCloseable:!1,_inner:t.children(),_headerCloseButton:null}),this._on(t,{vclick:"_handleVClickSubmit",submit:"_handleVClickSubmit",pagebeforeshow:"_handlePageBeforeShow",pagebeforehide:"_handlePageBeforeHide"}),this._setCloseBtn(n.closeBtn)},_setOptions:function(t){var r,i,s=this.options;t.corners!==n&&this._inner.toggleClass("ui-corner-all",!!t.corners),t.overlayTheme!==n&&e.mobile.activePage[0]===this.element[0]&&(s.overlayTheme=t.overlayTheme,this._handlePageBeforeShow()),t.closeBtnText!==n&&(r=s.closeBtn,i=t.closeBtnText),t.closeBtn!==n&&(r=t.closeBtn),r&&this._setCloseBtn(r,i),this._super(t)},_setCloseBtn:function(t,n){var r,i=this._headerCloseButton;t="left"===t?"left":"right"===t?"right":"none","none"===t?i&&(i.remove(),i=null):i?(i.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-"+t),n&&i.text(n)):(r=this._inner.find(":jqmData(role='header')").first(),i=e("<a></a>",{role:"button",href:"#","class":"ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-"+t}).text(n||this.options.closeBtnText||"").prependTo(r),this._on(i,{click:"close"})),this._headerCloseButton=i},close:function(){var t=e.mobile.navigate.history;this._isCloseable&&(this._isCloseable=!1,e.mobile.hashListeningEnabled&&t.activeIndex>0?e.mobile.back():e.mobile.pageContainer.pagecontainer("back"))}})}(e,this),function(e,n){var r=function(t,n){return(""+(e.mobile.getAttribute(this,"filtertext")||e(this).text())).toLowerCase().indexOf(n)===-1};e.widget("mobile.filterable",{initSelector:":jqmData(filter='true')",options:{filterReveal:!1,filterCallback:r,enhanced:!1,input:null,children:"> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"},_create:function(){var t=this.options;e.extend(this,{_search:null,_timer:0}),this._setInput(t.input),t.enhanced||this._filterItems((this._search&&this._search.val()||"").toLowerCase())},_onKeyUp:function(){var n,r,i=this._search;if(i){n=i.val().toLowerCase(),r=e.mobile.getAttribute(i[0],"lastval")+"";if(r&&r===n)return;this._timer&&(t.clearTimeout(this._timer),this._timer=0),this._timer=this._delay(function(){if(this._trigger("beforefilter",null,{input:i})===!1)return!1;i[0].setAttribute("data-"+e.mobile.ns+"lastval",n),this._filterItems(n),this._timer=0},250)}},_getFilterableItems:function(){var t=this.element,n=this.options.children,r=n?e.isFunction(n)?n():n.nodeName?e(n):n.jquery?n:this.element.find(n):{length:0};return r.length===0&&(r=t.children()),r},_filterItems:function(t){var n,i,s,o,u=[],a=[],f=this.options,l=this._getFilterableItems();if(t!=null){i=f.filterCallback||r,s=l.length;for(n=0;n<s;n++)o=i.call(l[n],n,t)?a:u,o.push(l[n])}a.length===0?l[f.filterReveal&&t.length===0?"addClass":"removeClass"]("ui-screen-hidden"):(e(a).addClass("ui-screen-hidden"),e(u).removeClass("ui-screen-hidden")),this._refreshChildWidget(),this._trigger("filter",null,{items:l})},_refreshChildWidget:function(){var t,n,r=["collapsibleset","selectmenu","controlgroup","listview"];for(n=r.length-1;n>-1;n--)t=r[n],e.mobile[t]&&(t=this.element.data("mobile-"+t),t&&e.isFunction(t.refresh)&&t.refresh())},_setInput:function(n){var r=this._search;this._timer&&(t.clearTimeout(this._timer),this._timer=0),r&&(this._off(r,"keyup change input"),r=null),n&&(r=n.jquery?n:n.nodeName?e(n):this.document.find(n),this._on(r,{keydown:"_onKeyDown",keypress:"_onKeyPress",keyup:"_onKeyUp",change:"_onKeyUp",input:"_onKeyUp"})),this._search=r},_onKeyDown:function(t){t.keyCode===e.ui.keyCode.ENTER&&(t.preventDefault(),this._preventKeyPress=!0)},_onKeyPress:function(e){this._preventKeyPress&&(e.preventDefault(),this._preventKeyPress=!1)},_setOptions:function(e){var t=e.filterReveal!==n||e.filterCallback!==n||e.children!==n;this._super(e),e.input!==n&&(this._setInput(e.input),t=!0),t&&this.refresh()},_destroy:function(){var e=this.options,t=this._getFilterableItems();e.enhanced?t.toggleClass("ui-screen-hidden",e.filterReveal):t.removeClass("ui-screen-hidden")},refresh:function(){this._timer&&(t.clearTimeout(this._timer),this._timer=0),this._filterItems((this._search&&this._search.val()||"").toLowerCase())}})}(e),function(e,t){var n=e.mobile.getAttribute;e.widget("mobile.listview",e.extend({options:{theme:null,countTheme:null,dividerTheme:null,icon:"carat-r",splitIcon:"carat-r",splitTheme:null,corners:!0,shadow:!0,inset:!1},_create:function(){var e=this,t="";t+=e.options.inset?" ui-listview-inset":"",!e.options.inset||(t+=e.options.corners?" ui-corner-all":"",t+=e.options.shadow?" ui-shadow":""),e.element.addClass(" ui-listview"+t),e.refresh(!0)},_findFirstElementByTagName:function(e,t,n,r){var i={};i[n]=i[r]=!0;while(e){if(i[e.nodeName])return e;e=e[t]}return null},_addThumbClasses:function(t){var n,r,i=t.length;for(n=0;n<i;n++)r=e(this._findFirstElementByTagName(t[n].firstChild,"nextSibling","img","IMG")),r.length&&e(this._findFirstElementByTagName(r[0].parentNode,"parentNode","li","LI")).addClass(r.hasClass("ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb")},_getChildrenByTagName:function(t,n,r){var i=[],s={};s[n]=s[r]=!0,t=t.firstChild;while(t)s[t.nodeName]&&i.push(t),t=t.nextSibling;return e(i)},_beforeListviewRefresh:e.noop,_afterListviewRefresh:e.noop,refresh:function(t){var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x=this.options,T=this.element,N=!!e.nodeName(T[0],"ol"),C=T.attr("start"),k={},L=T.find(".ui-li-count"),A=n(T[0],"counttheme")||this.options.countTheme,O=A?"ui-body-"+A:"ui-body-inherit";x.theme&&T.addClass("ui-group-theme-"+x.theme),N&&(C||C===0)&&(p=parseInt(C,10)-1,T.css("counter-reset","listnumbering "+p)),this._beforeListviewRefresh(),S=this._getChildrenByTagName(T[0],"li","LI");for(i=0,s=S.length;i<s;i++){o=S.eq(i),u="";if(t||o[0].className.search(/\bui-li-static\b|\bui-li-divider\b/)<0)c=this._getChildrenByTagName(o[0],"a","A"),h=n(o[0],"role")==="list-divider",v=o.attr("value"),a=n(o[0],"theme"),c.length&&c[0].className.search(/\bui-btn\b/)<0&&!h?(f=n(o[0],"icon"),l=f===!1?!1:f||x.icon,c.removeClass("ui-link"),r="ui-btn",a&&(r+=" ui-btn-"+a),c.length>1?(u="ui-li-has-alt",m=c.last(),g=n(m[0],"theme")||x.splitTheme||n(o[0],"theme",!0),y=g?" ui-btn-"+g:"",b=n(m[0],"icon")||n(o[0],"icon")||x.splitIcon,w="ui-btn ui-btn-icon-notext ui-icon-"+b+y,m.attr("title",e.trim(m.getEncodedText())).addClass(w).empty(),c=c.first()):l&&(r+=" ui-btn-icon-right ui-icon-"+l),c.addClass(r)):h?(E=n(o[0],"theme")||x.dividerTheme||x.theme,u="ui-li-divider ui-bar-"+(E?E:"inherit"),o.attr("role","heading")):c.length<=0&&(u="ui-li-static ui-body-"+(a?a:"inherit")),N&&v&&(d=parseInt(v,10)-1,o.css("counter-reset","listnumbering "+d));k[u]||(k[u]=[]),k[u].push(o[0])}for(u in k)e(k[u]).addClass(u);L.each(function(){e(this).closest("li").addClass("ui-li-has-count")}),O&&L.not("[class*='ui-body-']").addClass(O),this._addThumbClasses(S),this._addThumbClasses(S.find(".ui-btn")),this._afterListviewRefresh(),this._addFirstLastClasses(S,this._getVisibles(S,t),t)}},e.mobile.behaviors.addFirstLastClasses))}(e),function(e,t){var n=/(^|\s)ui-li-divider($|\s)/,r=/(^|\s)ui-screen-hidden($|\s)/;e.widget("mobile.listview",e.mobile.listview,{options:{hideDividers:!1},_afterListviewRefresh:function(){var e,t,i,s=!0;this._superApply(arguments);if(this.options.hideDividers){e=this._getChildrenByTagName(this.element[0],"li","LI");for(t=e.length-1;t>-1;t--)i=e[t],i.className.match(n)?(s&&(i.className=i.className+" ui-screen-hidden"),s=!0):i.className.match(r)||(s=!1)}}})}(e),function(e,t){var n=function(e,t){return function(n){t.call(this,n),e._syncTextInputOptions(n)}},r=/(^|\s)ui-li-divider(\s|$)/,i=e.mobile.filterable.prototype.options.filterCallback;e.mobile.filterable.prototype.options.filterCallback=function(e,t){return!this.className.match(r)&&i.call(this,e,t)},e.widget("mobile.filterable",e.mobile.filterable,{options:{filterPlaceholder:"Filter items...",filterTheme:null},_create:function(){var t,n,r=this.element,i=["collapsibleset","selectmenu","controlgroup","listview"],s={};this._super(),e.extend(this,{_widget:null});for(t=i.length-1;t>-1;t--){n=i[t];if(e.mobile[n]){if(this._setWidget(r.data("mobile-"+n)))break;s[n+"create"]="_handleCreate"}}this._widget||this._on(r,s)},_handleCreate:function(e){this._setWidget(this.element.data("mobile-"+e.type.substring(0,e.type.length-6)))},_trigger:function(e,t,n){return this._widget&&this._widget.widgetFullName==="mobile-listview"&&e==="beforefilter"&&this._widget._trigger("beforefilter",t,n),this._super(e,t,n)},_setWidget:function(e){return!this._widget&&e&&(this._widget=e,this._widget._setOptions=n(this,this._widget._setOptions)),!this._widget||(this._syncTextInputOptions(this._widget.options),this._widget.widgetName==="listview"&&(this._widget.options.hideDividers=!0,this._widget.element.listview("refresh"))),!!this._widget},_isSearchInternal:function(){return this._search&&this._search.jqmData("ui-filterable-"+this.uuid+"-internal")},_setInput:function(t){var n=this.options,r=!0,i={};if(!t){if(this._isSearchInternal())return;r=!1,t=e("<input data-"+e.mobile.ns+"type='search' "+"placeholder='"+n.filterPlaceholder+"'></input>").jqmData("ui-filterable-"+this.uuid+"-internal",!0),e("<form class='ui-filterable'></form>").append(t).submit(function(e){e.preventDefault(),t.blur()}).insertBefore(this.element),e.mobile.textinput&&(this.options.filterTheme!=null&&(i.theme=n.filterTheme),t.textinput(i))}this._super(t),this._isSearchInternal()&&r&&this._search.attr("placeholder",this.options.filterPlaceholder)},_setOptions:function(n){var r=this._super(n);return n.filterPlaceholder!==t&&this._isSearchInternal()&&this._search.attr("placeholder",n.filterPlaceholder),n.filterTheme!==t&&this._search&&e.mobile.textinput&&this._search.textinput("option","theme",n.filterTheme),r},_refreshChildWidget:function(){this._refreshingChildWidget=!0,this._superApply(arguments),this._refreshingChildWidget=!1},refresh:function(){this._refreshingChildWidget||this._superApply(arguments)},_destroy:function(){this._isSearchInternal()&&this._search.remove(),this._super()},_syncTextInputOptions:function(n){var r,i={};if(this._isSearchInternal()&&e.mobile.textinput){for(r in e.mobile.textinput.prototype.options)n[r]!==t&&(r==="theme"&&this.options.filterTheme!=null?i[r]=this.options.filterTheme:i[r]=n[r]);this._search.textinput("option",i)}}}),e.widget("mobile.listview",e.mobile.listview,{options:{filter:!1},_create:function(){return this.options.filter===!0&&!this.element.data("mobile-filterable")&&this.element.filterable(),this._super()},refresh:function(){var e;this._superApply(arguments),this.options.filter===!0&&(e=this.element.data("mobile-filterable"),e&&e.refresh())}})}(e),function(e,t){e.widget("mobile.toolbar",{initSelector:":jqmData(role='footer'), :jqmData(role='header')",options:{theme:null,addBackBtn:!1,backBtnTheme:null,backBtnText:"Back"},_create:function(){var t,n,r=this.element.is(":jqmData(role='header')")?"header":"footer",i=this.element.closest(".ui-page");i.length===0&&(i=!1,this._on(this.document,{pageshow:"refresh"})),e.extend(this,{role:r,page:i,leftbtn:t,rightbtn:n}),this.element.attr("role",r==="header"?"banner":"contentinfo").addClass("ui-"+r),this.refresh(),this._setOptions(this.options)},_setOptions:function(e){e.addBackBtn!==t&&this._updateBackButton(),e.backBtnTheme!=null&&this.element.find(".ui-toolbar-back-btn").addClass("ui-btn ui-btn-"+e.backBtnTheme),e.backBtnText!==t&&this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(e.backBtnText);if(e.theme!==t){var n=this.options.theme?this.options.theme:"inherit",r=e.theme?e.theme:"inherit";this.element.removeClass("ui-bar-"+n).addClass("ui-bar-"+r)}this._super(e)},refresh:function(){this.role==="header"&&this._addHeaderButtonClasses(),this.page||(this._setRelative(),this.role==="footer"?this.element.appendTo("body"):this.role==="header"&&this._updateBackButton()),this._addHeadingClasses(),this._btnMarkup()},_setRelative:function(){e("[data-"+e.mobile.ns+"role='page']").css({position:"relative"})},_btnMarkup:function(){this.element.children("a").filter(":not([data-"+e.mobile.ns+"role='none'])").attr("data-"+e.mobile.ns+"role","button"),this.element.trigger("create")},_addHeaderButtonClasses:function(){var e=this.element.children("a, button");this.leftbtn=e.hasClass("ui-btn-left")&&!e.hasClass("ui-toolbar-back-btn"),this.rightbtn=e.hasClass("ui-btn-right"),this.leftbtn=this.leftbtn||e.eq(0).not(".ui-btn-right,.ui-toolbar-back-btn").addClass("ui-btn-left").length,this.rightbtn=this.rightbtn||e.eq(1).addClass("ui-btn-right").length},_updateBackButton:function(){var t,n=this.options,r=n.backBtnTheme||n.theme;t=this._backButton=this._backButton||{},this.options.addBackBtn&&this.role==="header"&&e(".ui-page").length>1&&(this.page?this.page[0].getAttribute("data-"+e.mobile.ns+"url")!==e.mobile.path.stripHash(location.hash):e.mobile.navigate&&e.mobile.navigate.history&&e.mobile.navigate.history.activeIndex>0)&&!this.leftbtn?t.attached||(this.backButton=t.element=(t.element||e("<a role='button' href='javascript:void(0);' class='ui-btn ui-corner-all ui-shadow ui-btn-left "+(r?"ui-btn-"+r+" ":"")+"ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' "+"data-"+e.mobile.ns+"rel='back'>"+n.backBtnText+"</a>")).prependTo(this.element),t.attached=!0):t.element&&(t.element.detach(),t.attached=!1)},_addHeadingClasses:function(){this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({role:"heading","aria-level":"1"})},_destroy:function(){var e;this.element.children("h1, h2, h3, h4, h5, h6").removeClass("ui-title").removeAttr("role").removeAttr("aria-level"),this.role==="header"&&(this.element.children("a, button").removeClass("ui-btn-left ui-btn-right ui-btn ui-shadow ui-corner-all"),this.backButton&&this.backButton.remove()),e=this.options.theme?this.options.theme:"inherit",this.element.removeClass("ui-bar-"+e),this.element.removeClass("ui-"+this.role).removeAttr("role")}})}(e),function(e,t){e.widget("mobile.toolbar",e.mobile.toolbar,{options:{position:null,visibleOnPageShow:!0,disablePageZoom:!0,transition:"slide",fullscreen:!1,tapToggle:!0,tapToggleBlacklist:"a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",hideDuringFocus:"input, textarea, select",updatePagePadding:!0,trackPersistentToolbars:!0,supportBlacklist:function(){return!e.support.fixedPosition}},_create:function(){this._super(),this.pagecontainer=e(":mobile-pagecontainer"),this.options.position==="fixed"&&!this.options.supportBlacklist()&&this._makeFixed()},_makeFixed:function(){this.element.addClass("ui-"+this.role+"-fixed"),this.updatePagePadding(),this._addTransitionClass(),this._bindPageEvents(),this._bindToggleHandlers()},_setOptions:function(n){n.position==="fixed"&&this.options.position!=="fixed"&&this._makeFixed();if(this.options.position==="fixed"&&!this.options.supportBlacklist()){var r=this.page?this.page:e(".ui-page-active").length>0?e(".ui-page-active"):e(".ui-page").eq(0);n.fullscreen!==t&&(n.fullscreen?(this.element.addClass("ui-"+this.role+"-fullscreen"),r.addClass("ui-page-"+this.role+"-fullscreen")):(this.element.removeClass("ui-"+this.role+"-fullscreen"),r.removeClass("ui-page-"+this.role+"-fullscreen").addClass("ui-page-"+this.role+"-fixed")))}this._super(n)},_addTransitionClass:function(){var e=this.options.transition;e&&e!=="none"&&(e==="slide"&&(e=this.element.hasClass("ui-header")?"slidedown":"slideup"),this.element.addClass(e))},_bindPageEvents:function(){var e=this.page?this.element.closest(".ui-page"):this.document;this._on(e,{pagebeforeshow:"_handlePageBeforeShow",webkitAnimationStart:"_handleAnimationStart",animationstart:"_handleAnimationStart",updatelayout:"_handleAnimationStart",pageshow:"_handlePageShow",pagebeforehide:"_handlePageBeforeHide"})},_handlePageBeforeShow:function(){var t=this.options;t.disablePageZoom&&e.mobile.zoom.disable(!0),t.visibleOnPageShow||this.hide(!0)},_handleAnimationStart:function(){this.options.updatePagePadding&&this.updatePagePadding(this.page?this.page:".ui-page-active")},_handlePageShow:function(){this.updatePagePadding(this.page?this.page:".ui-page-active"),this.options.updatePagePadding&&this._on(this.window,{throttledresize:"updatePagePadding"})},_handlePageBeforeHide:function(t,n){var r=this.options,i,s,o,u;r.disablePageZoom&&e.mobile.zoom.enable(!0),r.updatePagePadding&&this._off(this.window,"throttledresize");if(r.trackPersistentToolbars){i=e(".ui-footer-fixed:jqmData(id)",this.page),s=e(".ui-header-fixed:jqmData(id)",this.page),o=i.length&&n.nextPage&&e(".ui-footer-fixed:jqmData(id='"+i.jqmData("id")+"')",n.nextPage)||e(),u=s.length&&n.nextPage&&e(".ui-header-fixed:jqmData(id='"+s.jqmData("id")+"')",n.nextPage)||e();if(o.length||u.length)o.add(u).appendTo(e.mobile.pageContainer),n.nextPage.one("pageshow",function(){u.prependTo(this),o.appendTo(this)})}},_visible:!0,updatePagePadding:function(n){var r=this.element,i=this.role==="header",s=parseFloat(r.css(i?"top":"bottom"));if(this.options.fullscreen)return;n=n&&n.type===t&&n||this.page||r.closest(".ui-page"),n=this.page?this.page:".ui-page-active",e(n).css("padding-"+(i?"top":"bottom"),r.outerHeight()+s)},_useTransition:function(t){var n=this.window,r=this.element,i=n.scrollTop(),s=r.height(),o=this.page?r.closest(".ui-page").height():e(".ui-page-active").height(),u=e.mobile.getScreenHeight();return!t&&(this.options.transition&&this.options.transition!=="none"&&(this.role==="header"&&!this.options.fullscreen&&i>s||this.role==="footer"&&!this.options.fullscreen&&i+u<o-s)||this.options.fullscreen)},show:function(e){var t="ui-fixed-hidden",n=this.element;this._useTransition(e)?n.removeClass("out "+t).addClass("in").animationComplete(function(){n.removeClass("in")}):n.removeClass(t),this._visible=!0},hide:function(e){var t="ui-fixed-hidden",n=this.element,r="out"+(this.options.transition==="slide"?" reverse":"");this._useTransition(e)?n.addClass(r).removeClass("in").animationComplete(function(){n.addClass(t).removeClass(r)}):n.addClass(t).removeClass(r),this._visible=!1},toggle:function(){this[this._visible?"hide":"show"]()},_bindToggleHandlers:function(){var t=this,n=t.options,r,i,s=!0,o=this.page?this.page:e(".ui-page");o.bind("vclick",function(r){n.tapToggle&&!e(r.target).closest(n.tapToggleBlacklist).length&&t.toggle()}).bind("focusin focusout",function(o){screen.width<1025&&e(o.target).is(n.hideDuringFocus)&&!e(o.target).closest(".ui-header-fixed, .ui-footer-fixed").length&&(o.type==="focusout"&&!s?(s=!0,clearTimeout(i),r=setTimeout(function(){t.show()},0)):o.type==="focusin"&&!!s&&(clearTimeout(r),s=!1,i=setTimeout(function(){t.hide()},0)))})},_setRelative:function(){this.options.position!=="fixed"&&e("[data-"+e.mobile.ns+"role='page']").css({position:"relative"})},_destroy:function(){var t,n,r,i,s,o=this.pagecontainer.pagecontainer("getActivePage");this._super(),this.options.position==="fixed"&&(r=e("body>.ui-"+this.role+"-fixed").add(o.find(".ui-"+this.options.role+"-fixed")).not(this.element).length>0,s=e("body>.ui-"+this.role+"-fixed").add(o.find(".ui-"+this.options.role+"-fullscreen")).not(this.element).length>0,n="ui-header-fixed ui-footer-fixed ui-header-fullscreen in out ui-footer-fullscreen fade slidedown slideup ui-fixed-hidden",this.element.removeClass(n),s||(t="ui-page-"+this.role+"-fullscreen"),r||(i=this.role==="header",t+=" ui-page-"+this.role+"-fixed",o.css("padding-"+(i?"top":"bottom"),"")),o.removeClass(t))}})}(e),function(e,t){e.widget("mobile.toolbar",e.mobile.toolbar,{_makeFixed:function(){this._super(),this._workarounds()},_workarounds:function(){var e=navigator.userAgent,t=navigator.platform,n=e.match(/AppleWebKit\/([0-9]+)/),r=!!n&&n[1],i=null,s=this;if(t.indexOf("iPhone")>-1||t.indexOf("iPad")>-1||t.indexOf("iPod")>-1)i="ios";else{if(!(e.indexOf("Android")>-1))return;i="android"}if(i==="ios")s._bindScrollWorkaround();else{if(!(i==="android"&&r&&r<534))return;s._bindScrollWorkaround(),s._bindListThumbWorkaround()}},_viewportOffset:function(){var e=this.element,t=e.hasClass("ui-header"),n=Math.abs(e.offset().top-this.window.scrollTop());return t||(n=Math.round(n-this.window.height()+e.outerHeight())-60),n},_bindScrollWorkaround:function(){var e=this;this._on(this.window,{scrollstop:function(){var t=e._viewportOffset();t>2&&e._visible&&e._triggerRedraw()}})},_bindListThumbWorkaround:function(){this.element.closest(".ui-page").addClass("ui-android-2x-fixed")},_triggerRedraw:function(){var t=parseFloat(e(".ui-page-active").css("padding-bottom"));e(".ui-page-active").css("padding-bottom",t+1+"px"),setTimeout(function(){e(".ui-page-active").css("padding-bottom",t+"px")},0)},destroy:function(){this._super(),this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")}})}(e),function(e,t){e.widget("mobile.textinput",{initSelector:"input[type='text'],input[type='search'],:jqmData(type='search'),input[type='number'],:jqmData(type='number'),input[type='password'],input[type='email'],input[type='url'],input[type='tel'],textarea,input[type='time'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input[type='color'],input:not([type]),input[type='file']",options:{theme:null,corners:!0,mini:!1,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,wrapperClass:"",enhanced:!1},_create:function(){var t=this.options,n=this.element.is("[type='search'], :jqmData(type='search')"),r=this.element[0].tagName==="TEXTAREA",i=this.element.is("[data-"+(e.mobile.ns||"")+"type='range']"),s=(this.element.is("input")||this.element.is("[data-"+(e.mobile.ns||"")+"type='search']"))&&!i;this.element.prop("disabled")&&(t.disabled=!0),e.extend(this,{classes:this._classesFromOptions(),isSearch:n,isTextarea:r,isRange:i,inputNeedsWrap:s}),this._autoCorrect(),t.enhanced||this._enhance(),this._on({focus:"_handleFocus",blur:"_handleBlur"})},refresh:function(){this.setOptions({disabled:this.element.is(":disabled")})},_enhance:function(){var e=[];this.isTextarea&&e.push("ui-input-text"),(this.isTextarea||this.isRange)&&e.push("ui-shadow-inset"),this.inputNeedsWrap?this.element.wrap(this._wrap()):e=e.concat(this.classes),this.element.addClass(e.join(" "))},widget:function(){return this.inputNeedsWrap?this.element.parent():this.element},_classesFromOptions:function(){var e=this.options,t=[];return t.push("ui-body-"+(e.theme===null?"inherit":e.theme)),e.corners&&t.push("ui-corner-all"),e.mini&&t.push("ui-mini"),e.disabled&&t.push("ui-state-disabled"),e.wrapperClass&&t.push(e.wrapperClass),t},_wrap:function(){return e("<div class='"+(this.isSearch?"ui-input-search ":"ui-input-text ")+this.classes.join(" ")+" "+"ui-shadow-inset'></div>")},_autoCorrect:function(){typeof this.element[0].autocorrect!="undefined"&&!e.support.touchOverflow&&(this.element[0].setAttribute("autocorrect","off"),this.element[0].setAttribute("autocomplete","off"))},_handleBlur:function(){this.widget().removeClass(e.mobile.focusClass),this.options.preventFocusZoom&&e.mobile.zoom.enable(!0)},_handleFocus:function(){this.options.preventFocusZoom&&e.mobile.zoom.disable(!0),this.widget().addClass(e.mobile.focusClass)},_setOptions:function(e){var n=this.widget();this._super(e);if(e.disabled!==t||e.mini!==t||e.corners!==t||e.theme!==t||e.wrapperClass!==t)n.removeClass(this.classes.join(" ")),this.classes=this._classesFromOptions(),n.addClass(this.classes.join(" "));e.disabled!==t&&this.element.prop("disabled",!!e.disabled)},_destroy:function(){if(this.options.enhanced)return;this.inputNeedsWrap&&this.element.unwrap(),this.element.removeClass("ui-input-text "+this.classes.join(" "))}})}(e),function(e,t){e.widget("mobile.textinput",e.mobile.textinput,{options:{autogrow:!0,keyupTimeoutBuffer:100},_create:function(){this._super(),this.options.autogrow&&this.isTextarea&&this._autogrow()},_autogrow:function(){this.element.addClass("ui-textinput-autogrow"),this._on({keyup:"_timeout",change:"_timeout",input:"_timeout",paste:"_timeout"}),this._on(!0,this.document,{pageshow:"_handleShow",popupbeforeposition:"_handleShow",updatelayout:"_handleShow",panelopen:"_handleShow"})},_handleShow:function(t){e.contains(t.target,this.element[0])&&this.element.is(":visible")&&(t.type!=="popupbeforeposition"&&this.element.addClass("ui-textinput-autogrow-resize").animationComplete(e.proxy(function(){this.element.removeClass("ui-textinput-autogrow-resize")},this),"transition"),this._prepareHeightUpdate())},_unbindAutogrow:function(){this.element.removeClass("ui-textinput-autogrow"),this._off(this.element,"keyup change input paste"),this._off(this.document,"pageshow popupbeforeposition updatelayout panelopen")},keyupTimeout:null,_prepareHeightUpdate:function(e){this.keyupTimeout&&clearTimeout(this.keyupTimeout),e===t?this._updateHeight():this.keyupTimeout=this._delay("_updateHeight",e)},_timeout:function(){this._prepareHeightUpdate(this.options.keyupTimeoutBuffer)},_updateHeight:function(){var e,t,n,r,i,s,o,u,a,f=this.window.scrollTop();this.keyupTimeout=0,"onpage"in this.element[0]||this.element.css({height:0,"min-height":0,"max-height":0}),r=this.element[0].scrollHeight,i=this.element[0].clientHeight,s=parseFloat(this.element.css("border-top-width")),o=parseFloat(this.element.css("border-bottom-width")),u=s+o,a=r+u+15,i===0&&(e=parseFloat(this.element.css("padding-top")),t=parseFloat(this.element.css("padding-bottom")),n=e+t,a+=n),this.element.css({height:a,"min-height":"","max-height":""}),this.window.scrollTop(f)},refresh:function(){this.options.autogrow&&this.isTextarea&&this._updateHeight()},_setOptions:function(e){this._super(e),e.autogrow!==t&&this.isTextarea&&(e.autogrow?this._autogrow():this._unbindAutogrow())}})}(e),function(e,t){e.widget("mobile.button",{initSelector:"input[type='button'], input[type='submit'], input[type='reset']",options:{theme:null,icon:null,iconpos:"left",iconshadow:!1,corners:!0,shadow:!0,inline:null,mini:null,wrapperClass:null,enhanced:!1},_create:function(){this.element.is(":disabled")&&(this.options.disabled=!0),this.options.enhanced||this._enhance(),e.extend(this,{wrapper:this.element.parent()}),this._on({focus:function(){this.widget().addClass(e.mobile.focusClass)},blur:function(){this.widget().removeClass(e.mobile.focusClass)}}),this.refresh(!0)},_enhance:function(){this.element.wrap(this._button())},_button:function(){var t=this.options,n=this._getIconClasses(this.options);return e("<div class='ui-btn ui-input-btn"+(t.wrapperClass?" "+t.wrapperClass:"")+(t.theme?" ui-btn-"+t.theme:"")+(t.corners?" ui-corner-all":"")+(t.shadow?" ui-shadow":"")+(t.inline?" ui-btn-inline":"")+(t.mini?" ui-mini":"")+(t.disabled?" ui-state-disabled":"")+(n?" "+n:"")+"' >"+this.element.val()+"</div>")},widget:function(){return this.wrapper},_destroy:function(){this.element.insertBefore(this.wrapper),this.wrapper.remove()},_getIconClasses:function(e){return e.icon?"ui-icon-"+e.icon+(e.iconshadow?" ui-shadow-icon":"")+" ui-btn-icon-"+e.iconpos:""},_setOptions:function(n){var r=this.widget();n.theme!==t&&r.removeClass(this.options.theme).addClass("ui-btn-"+n.theme),n.corners!==t&&r.toggleClass("ui-corner-all",n.corners),n.shadow!==t&&r.toggleClass("ui-shadow",n.shadow),n.inline!==t&&r.toggleClass("ui-btn-inline",n.inline),n.mini!==t&&r.toggleClass("ui-mini",n.mini),n.disabled!==t&&(this.element.prop("disabled",n.disabled),r.toggleClass("ui-state-disabled",n.disabled)),(n.icon!==t||n.iconshadow!==t||n.iconpos!==t)&&r.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses(e.extend({},this.options,n))),this._super(n)},refresh:function(t){var n,r=this.element.prop("disabled");this.options.icon&&this.options.iconpos==="notext"&&this.element.attr("title")&&this.element.attr("title",this.element.val()),t||(n=this.element.detach(),e(this.wrapper).text(this.element.val()).append(n)),this.options.disabled!==r&&this._setOptions({disabled:r})}})}(e),function(e,t){e.mobile.behaviors.formReset={_handleFormReset:function(){this._on(this.element.closest("form"),{reset:function(){this._delay("_reset")}})}}}(e),function(e,t){var n=e.mobile.path.hashToSelector;e.widget("mobile.checkboxradio",e.extend({initSelector:"input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",options:{theme:"inherit",mini:!1,wrapperClass:null,enhanced:!1,iconpos:"left"},_create:function(){var t=this.element,n=this.options,r=function(e,t){return e.jqmData(t)||e.closest("form, fieldset").jqmData(t)},i=this.options.enhanced?{element:this.element.siblings("label"),isParent:!1}:this._findLabel(),s=t[0].type,o="ui-"+s+"-on",u="ui-"+s+"-off";if(s!=="checkbox"&&s!=="radio")return;this.element[0].disabled&&(this.options.disabled=!0),n.iconpos=r(t,"iconpos")||i.element.attr("data-"+e.mobile.ns+"iconpos")||n.iconpos,n.mini=r(t,"mini")||n.mini,e.extend(this,{input:t,label:i.element,labelIsParent:i.isParent,inputtype:s,checkedClass:o,uncheckedClass:u}),this.options.enhanced||this._enhance(),this._on(i.element,{vmouseover:"_handleLabelVMouseOver",vclick:"_handleLabelVClick"}),this._on(t,{vmousedown:"_cacheVals",vclick:"_handleInputVClick",focus:"_handleInputFocus",blur:"_handleInputBlur"}),this._handleFormReset(),this.refresh()},_findLabel:function(){var t,r,i,s=this.element,o=s[0].labels;return o&&o.length>0?(r=e(o[0]),i=e.contains(r[0],s[0])):(t=s.closest("label"),i=t.length>0,r=i?t:e(this.document[0].getElementsByTagName("label")).filter("[for='"+n(s[0].id)+"']").first()),{element:r,isParent:i}},_enhance:function(){this.label.addClass("ui-btn ui-corner-all"),this.labelIsParent?this.input.add(this.label).wrapAll(this._wrapper()):(this.element.wrap(this._wrapper()),this.element.parent().prepend(this.label)),this._setOptions({theme:this.options.theme,iconpos:this.options.iconpos,mini:this.options.mini})},_wrapper:function(){return e("<div class='"+(this.options.wrapperClass?this.options.wrapperClass:"")+" ui-"+this.inputtype+(this.options.disabled?" ui-state-disabled":"")+"' ></div>")},_handleInputFocus:function(){this.label.addClass(e.mobile.focusClass)},_handleInputBlur:function(){this.label.removeClass(e.mobile.focusClass)},_handleInputVClick:function(){this.element.prop("checked",this.element.is(":checked")),this._getInputSet().not(this.element).prop("checked",!1),this._updateAll(!0)},_handleLabelVMouseOver:function(e){this.label.parent().hasClass("ui-state-disabled")&&e.stopPropagation()},_handleLabelVClick:function(e){var t=this.element;if(t.is(":disabled")){e.preventDefault();return}return this._cacheVals(),t.prop("checked",this.inputtype==="radio"&&!0||!t.prop("checked")),t.triggerHandler("click"),this._getInputSet().not(t).prop("checked",!1),this._updateAll(),!1},_cacheVals:function(){this._getInputSet().each(function(){e(this).attr("data-"+e.mobile.ns+"cacheVal",this.checked)})},_getInputSet:function(){var t,r,i=this.element[0],s=i.name,o=i.form,u=this.element.parents().last().get(0),a=this.element;return s&&this.inputtype==="radio"&&u&&(t="input[type='radio'][name='"+n(s)+"']",o?(r=o.getAttribute("id"),r&&(a=e(t+"[form='"+n(r)+"']",u)),a=e(o).find(t).filter(function(){return this.form===o}).add(a)):a=e(t,u).filter(function(){return!this.form})),a},_updateAll:function(t){var n=this;this._getInputSet().each(function(){var r=e(this);(this.checked||n.inputtype==="checkbox")&&!t&&r.trigger("change")}).checkboxradio("refresh")},_reset:function(){this.refresh()},_hasIcon:function(){var t,n,r=e.mobile.controlgroup;if(r){t=this.element.closest(":mobile-controlgroup,"+r.prototype.initSelector);if(t.length>0)return n=e.data(t[0],"mobile-controlgroup"),(n?n.options.type:t.attr("data-"+e.mobile.ns+"type"))!=="horizontal"}return!0},refresh:function(){var t=this.element[0].checked,n=e.mobile.activeBtnClass,r="ui-btn-icon-"+this.options.iconpos,i=[],s=[];this._hasIcon()?(s.push(n),i.push(r)):(s.push(r),(t?i:s).push(n)),t?(i.push(this.checkedClass),s.push(this.uncheckedClass)):(i.push(this.uncheckedClass),s.push(this.checkedClass)),this.widget().toggleClass("ui-state-disabled",this.element.prop("disabled")),this.label.addClass(i.join(" ")).removeClass(s.join(" "))},widget:function(){return this.label.parent()},_setOptions:function(e){var n=this.label,r=this.options,i=this.widget(),s=this._hasIcon();e.disabled!==t&&(this.input.prop("disabled",!!e.disabled),i.toggleClass("ui-state-disabled",!!e.disabled)),e.mini!==t&&i.toggleClass("ui-mini",!!e.mini),e.theme!==t&&n.removeClass("ui-btn-"+r.theme).addClass("ui-btn-"+e.theme),e.wrapperClass!==t&&i.removeClass(r.wrapperClass).addClass(e.wrapperClass),e.iconpos!==t&&s?n.removeClass("ui-btn-icon-"+r.iconpos).addClass("ui-btn-icon-"+e.iconpos):s||n.removeClass("ui-btn-icon-"+r.iconpos),this._super(e)}},e.mobile.behaviors.formReset))}(e),function(e,t){e.widget("mobile.textinput",e.mobile.textinput,{options:{clearBtn:!1,clearBtnText:"Clear text"},_create:function(){this._super(),this.isSearch&&(this.options.clearBtn=!0),!!this.options.clearBtn&&this.inputNeedsWrap&&this._addClearBtn()},clearButton:function(){return e("<a href='#' tabindex='-1' aria-hidden='true' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all'></a>").attr("title",this.options.clearBtnText).text(this.options.clearBtnText)},_clearBtnClick:function(e){this.element.val("").focus().trigger("change"),this._clearBtn.addClass("ui-input-clear-hidden"),e.preventDefault()},_addClearBtn:function(){this.options.enhanced||this._enhanceClear(),e.extend(this,{_clearBtn:this.widget().find("a.ui-input-clear")}),this._bindClearEvents(),this._toggleClear()},_enhanceClear:function(){this.clearButton().appendTo(this.widget()),this.widget().addClass("ui-input-has-clear")},_bindClearEvents:function(){this._on(this._clearBtn,{click:"_clearBtnClick"}),this._on({keyup:"_toggleClear",change:"_toggleClear",input:"_toggleClear",focus:"_toggleClear",blur:"_toggleClear",cut:"_toggleClear",paste:"_toggleClear"})},_unbindClear:function(){this._off(this._clearBtn,"click"),this._off(this.element,"keyup change input focus blur cut paste")},_setOptions:function(e){this._super(e),e.clearBtn!==t&&!this.element.is("textarea, :jqmData(type='range')")&&(e.clearBtn?this._addClearBtn():this._destroyClear()),e.clearBtnText!==t&&this._clearBtn!==t&&this._clearBtn.text(e.clearBtnText).attr("title",e.clearBtnText)},_toggleClear:function(){this._delay("_toggleClearClass",0)},_toggleClearClass:function(){this._clearBtn.toggleClass("ui-input-clear-hidden",!this.element.val())},_destroyClear:function(){this.widget().removeClass("ui-input-has-clear"),this._unbindClear(),this._clearBtn.remove()},_destroy:function(){this._super(),this.options.clearBtn&&this._destroyClear()}})}(e),function(e,t){e.widget("mobile.flipswitch",e.extend({options:{onText:"On",offText:"Off",theme:null,enhanced:!1,wrapperClass:null,corners:!0,mini:!1},_create:function(){this.options.enhanced?e.extend(this,{flipswitch:this.element.parent(),on:this.element.find(".ui-flipswitch-on").eq(0),off:this.element.find(".ui-flipswitch-off").eq(0),type:this.element.get(0).tagName}):this._enhance(),this._handleFormReset(),this._originalTabIndex=this.element.attr("tabindex"),this._originalTabIndex!=null&&this.on.attr("tabindex",this._originalTabIndex),this.element.attr("tabindex","-1"),this._on({focus:"_handleInputFocus"}),this.element.is(":disabled")&&this._setOptions({disabled:!0}),this._on(this.flipswitch,{click:"_toggle",swipeleft:"_left",swiperight:"_right"}),this._on(this.on,{keydown:"_keydown"}),this._on({change:"refresh"})},_handleInputFocus:function(){this.on.focus()},widget:function(){return this.flipswitch},_left:function(){this.flipswitch.removeClass("ui-flipswitch-active"),this.type==="SELECT"?this.element.get(0).selectedIndex=0:this.element.prop("checked",!1),this.element.trigger("change")},_right:function(){this.flipswitch.addClass("ui-flipswitch-active"),this.type==="SELECT"?this.element.get(0).selectedIndex=1:this.element.prop("checked",!0),this.element.trigger("change")},_enhance:function(){var t=e("<div>"),n=this.options,r=this.element,i=n.theme?n.theme:"inherit",s=e("<a></a>",{href:"#"}),o=e("<span></span>"),u=r.get(0).tagName,a=u==="INPUT"?n.onText:r.find("option").eq(1).text(),f=u==="INPUT"?n.offText:r.find("option").eq(0).text();s.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(a),o.addClass("ui-flipswitch-off").text(f),t.addClass("ui-flipswitch ui-shadow-inset ui-bar-"+i+" "+(n.wrapperClass?n.wrapperClass:"")+" "+(r.is(":checked")||r.find("option").eq(1).is(":selected")?"ui-flipswitch-active":"")+(r.is(":disabled")?" ui-state-disabled":"")+(n.corners?" ui-corner-all":"")+(n.mini?" ui-mini":"")).append(s,o),r.addClass("ui-flipswitch-input").after(t).appendTo(t),e.extend(this,{flipswitch:t,on:s,off:o,type:u})},_reset:function(){this.refresh()},refresh:function(){var e,t=this.flipswitch.hasClass("ui-flipswitch-active")?"_right":"_left";this.type==="SELECT"?e=this.element.get(0).selectedIndex>0?"_right":"_left":e=this.element.prop("checked")?"_right":"_left",e!==t&&this[e]()},_toggle:function(){var e=this.flipswitch.hasClass("ui-flipswitch-active")?"_left":"_right";this[e]()},_keydown:function(t){t.which===e.mobile.keyCode.LEFT?this._left():t.which===e.mobile.keyCode.RIGHT?this._right():t.which===e.mobile.keyCode.SPACE&&(this._toggle(),t.preventDefault())},_setOptions:function(e){if(e.theme!==t){var n=e.theme?e.theme:"inherit",r=e.theme?e.theme:"inherit";this.widget().removeClass("ui-bar-"+n).addClass("ui-bar-"+r)}e.onText!==t&&this.on.text(e.onText),e.offText!==t&&this.off.text(e.offText),e.disabled!==t&&this.widget().toggleClass("ui-state-disabled",e.disabled),e.mini!==t&&this.widget().toggleClass("ui-mini",e.mini),e.corners!==t&&this.widget().toggleClass("ui-corner-all",e.corners),this._super(e)},_destroy:function(){if(this.options.enhanced)return;this._originalTabIndex!=null?this.element.attr("tabindex",this._originalTabIndex):this.element.removeAttr("tabindex"),this.on.remove(),this.off.remove(),this.element.unwrap(),this.flipswitch.remove(),this.removeClass("ui-flipswitch-input")}},e.mobile.behaviors.formReset))}(e),function(e,r){e.widget("mobile.slider",e.extend({initSelector:"input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",widgetEventPrefix:"slide",options:{theme:null,trackTheme:null,corners:!0,mini:!1,highlight:!1},_create:function(){var i=this,s=this.element,o=this.options.trackTheme||e.mobile.getAttribute(s[0],"theme"),u=o?" ui-bar-"+o:" ui-bar-inherit",a=this.options.corners||s.jqmData("corners")?" ui-corner-all":"",f=this.options.mini||s.jqmData("mini")?" ui-mini":"",l=s[0].nodeName.toLowerCase(),c=l==="select",h=s.parent().is(":jqmData(role='rangeslider')"),p=c?"ui-slider-switch":"",d=s.attr("id"),v=e("[for='"+d+"']"),m=v.attr("id")||d+"-label",g=c?0:parseFloat(s.attr("min")),y=c?s.find("option").length-1:parseFloat(s.attr("max")),b=t.parseFloat(s.attr("step")||1),w=n.createElement("a"),E=e(w),S=n.createElement("div"),x=e(S),T=this.options.highlight&&!c?function(){var t=n.createElement("div");return t.className="ui-slider-bg "+e.mobile.activeBtnClass,e(t).prependTo(x)}():!1,N,C,k,L,A,O,M,_,D,P;v.attr("id",m),this.isToggleSwitch=c,w.setAttribute("href","#"),S.setAttribute("role","application"),S.className=[this.isToggleSwitch?"ui-slider ui-slider-track ui-shadow-inset ":"ui-slider-track ui-shadow-inset ",p,u,a,f].join(""),w.className="ui-slider-handle",S.appendChild(w),E.attr({role:"slider","aria-valuemin":g,"aria-valuemax":y,"aria-valuenow":this._value(),"aria-valuetext":this._value(),title:this._value(),"aria-labelledby":m}),e.extend(this,{slider:x,handle:E,control:s,type:l,step:b,max:y,min:g,valuebg:T,isRangeslider:h,dragging:!1,beforeStart:null,userModified:!1,mouseMoved:!1});if(c){M=s.attr("tabindex"),M&&E.attr("tabindex",M),s.attr("tabindex","-1").focus(function(){e(this).blur(),E.focus()}),C=n.createElement("div"),C.className="ui-slider-inneroffset";for(k=0,L=S.childNodes.length;k<L;k++)C.appendChild(S.childNodes[k]);S.appendChild(C),E.addClass("ui-slider-handle-snapping"),N=s.find("option");for(A=0,O=N.length;A<O;A++)_=A?"a":"b",D=A?" "+e.mobile.activeBtnClass:"",P=n.createElement("span"),P.className=["ui-slider-label ui-slider-label-",_,D].join(""),P.setAttribute("role","img"),P.appendChild(n.createTextNode(N[A].innerHTML)),e(P).prependTo(x);i._labels=e(".ui-slider-label",x)}s.addClass(c?"ui-slider-switch":"ui-slider-input"),this._on(s,{change:"_controlChange",keyup:"_controlKeyup",blur:"_controlBlur",vmouseup:"_controlVMouseUp"}),x.bind("vmousedown",e.proxy(this._sliderVMouseDown,this)).bind("vclick",!1),this._on(n,{vmousemove:"_preventDocumentDrag"}),this._on(x.add(n),{vmouseup:"_sliderVMouseUp"}),x.insertAfter(s),!c&&!h&&(C=this.options.mini?"<div class='ui-slider ui-mini'>":"<div class='ui-slider'>",s.add(x).wrapAll(C)),this._on(this.handle,{vmousedown:"_handleVMouseDown",keydown:"_handleKeydown",keyup:"_handleKeyup"}),this.handle.bind("vclick",!1),this._handleFormReset(),this.refresh(r,r,!0)},_setOptions:function(e){e.theme!==r&&this._setTheme(e.theme),e.trackTheme!==r&&this._setTrackTheme(e.trackTheme),e.corners!==r&&this._setCorners(e.corners),e.mini!==r&&this._setMini(e.mini),e.highlight!==r&&this._setHighlight(e.highlight),e.disabled!==r&&this._setDisabled(e.disabled),this._super(e)},_controlChange:function(e){if(this._trigger("controlchange",e)===!1)return!1;this.mouseMoved||this.refresh(this._value(),!0)},_controlKeyup:function(){this.refresh(this._value(),!0,!0)},_controlBlur:function(){this.refresh(this._value(),!0)},_controlVMouseUp:function(){this._checkedRefresh()},_handleVMouseDown:function(){this.handle.focus()},_handleKeydown:function(t){var n=this._value();if(this.options.disabled)return;switch(t.keyCode){case e.mobile.keyCode.HOME:case e.mobile.keyCode.END:case e.mobile.keyCode.PAGE_UP:case e.mobile.keyCode.PAGE_DOWN:case e.mobile.keyCode.UP:case e.mobile.keyCode.RIGHT:case e.mobile.keyCode.DOWN:case e.mobile.keyCode.LEFT:t.preventDefault(),this._keySliding||(this._keySliding=!0,this.handle.addClass("ui-state-active"))}switch(t.keyCode){case e.mobile.keyCode.HOME:this.refresh(this.min);break;case e.mobile.keyCode.END:this.refresh(this.max);break;case e.mobile.keyCode.PAGE_UP:case e.mobile.keyCode.UP:case e.mobile.keyCode.RIGHT:this.refresh(n+this.step);break;case e.mobile.keyCode.PAGE_DOWN:case e.mobile.keyCode.DOWN:case e.mobile.keyCode.LEFT:this.refresh(n-this.step)}},_handleKeyup:function(){this._keySliding&&(this._keySliding=!1,this.handle.removeClass("ui-state-active"))},_sliderVMouseDown:function(e){return this.options.disabled||e.which!==1&&e.which!==0&&e.which!==r?!1:this._trigger("beforestart",e)===!1?!1:(this.dragging=!0,this.userModified=!1,this.mouseMoved=!1,this.isToggleSwitch&&(this.beforeStart=this.element[0].selectedIndex),this.refresh(e),this._trigger("start"),!1)},_sliderVMouseUp:function(){if(this.dragging)return this.dragging=!1,this.isToggleSwitch&&(this.handle.addClass("ui-slider-handle-snapping"),this.mouseMoved?this.userModified?this.refresh(this.beforeStart===0?1:0):this.refresh(this.beforeStart):this.refresh(this.beforeStart===0?1:0)),this.mouseMoved=!1,this._trigger("stop"),!1},_preventDocumentDrag:function(e){if(this._trigger("drag",e)===!1)return!1;if(this.dragging&&!this.options.disabled)return this.mouseMoved=!0,this.isToggleSwitch&&this.handle.removeClass("ui-slider-handle-snapping"),this.refresh(e),this.userModified=this.beforeStart!==this.element[0].selectedIndex,!1},_checkedRefresh:function(){this.value!==this._value()&&this.refresh(this._value())},_value:function(){return this.isToggleSwitch?this.element[0].selectedIndex:parseFloat(this.element.val())},_reset:function(){this.refresh(r,!1,!0)},refresh:function(t,r,i){var s=this,o=e.mobile.getAttribute(this.element[0],"theme"),u=this.options.theme||o,a=u?" ui-btn-"+u:"",f=this.options.trackTheme||o,l=f?" ui-bar-"+f:" ui-bar-inherit",c=this.options.corners?" ui-corner-all":"",h=this.options.mini?" ui-mini":"",p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_;s.slider[0].className=[this.isToggleSwitch?"ui-slider ui-slider-switch ui-slider-track ui-shadow-inset":"ui-slider-track ui-shadow-inset",l,c,h].join(""),(this.options.disabled||this.element.prop("disabled"))&&this.disable(),this.value=this._value(),this.options.highlight&&!this.isToggleSwitch&&this.slider.find(".ui-slider-bg").length===0&&(this.valuebg=function(){var t=n.createElement("div");return t.className="ui-slider-bg "+e.mobile.activeBtnClass,e(t).prependTo(s.slider)}()),this.handle.addClass("ui-btn"+a+" ui-shadow"),b=this.element,w=!this.isToggleSwitch,E=w?[]:b.find("option"),S=w?parseFloat(b.attr("min")):0,x=w?parseFloat(b.attr("max")):E.length-1,T=w&&parseFloat(b.attr("step"))>0?parseFloat(b.attr("step")):1;if(typeof t=="object"){v=t,m=8,p=this.slider.offset().left,d=this.slider.width(),g=d/((x-S)/T);if(!this.dragging||v.pageX<p-m||v.pageX>p+d+m)return;g>1?y=(v.pageX-p)/d*100:y=Math.round((v.pageX-p)/d*100)}else t==null&&(t=w?parseFloat(b.val()||0):b[0].selectedIndex),y=(parseFloat(t)-S)/(x-S)*100;if(isNaN(y))return;N=y/100*(x-S)+S,C=(N-S)%T,k=N-C,Math.abs(C)*2>=T&&(k+=C>0?T:-T),L=100/((x-S)/T),N=parseFloat(k.toFixed(5)),typeof g=="undefined"&&(g=d/((x-S)/T)),g>1&&w&&(y=(N-S)*L*(1/T)),y<0&&(y=0),y>100&&(y=100),N<S&&(N=S),N>x&&(N=x),this.handle.css("left",y+"%"),this.handle[0].setAttribute("aria-valuenow",w?N:E.eq(N).attr("value")),this.handle[0].setAttribute("aria-valuetext",w?N:E.eq(N).getEncodedText()),this.handle[0].setAttribute("title",w?N:E.eq(N).getEncodedText()),this.valuebg&&this.valuebg.css("width",y+"%"),this._labels&&(A=this.handle.width()/this.slider.width()*100,O=y&&A+(100-A)*y/100,M=y===100?0:Math.min(A+100-O,100),this._labels.each(function(){var t=e(this).hasClass("ui-slider-label-a");e(this).width((t?O:M)+"%")}));if(!i){_=!1,w?(_=parseFloat(b.val())!==N,b.val(N)):(_=b[0].selectedIndex!==N,b[0].selectedIndex=N);if(this._trigger("beforechange",t)===!1)return!1;!r&&_&&b.trigger("change")}},_setHighlight:function(e){e=!!e,e?(this.options.highlight=!!e,this.refresh()):this.valuebg&&(this.valuebg.remove(),this.valuebg=!1)},_setTheme:function(e){this.handle.removeClass("ui-btn-"+this.options.theme).addClass("ui-btn-"+e);var t=this.options.theme?this.options.theme:"inherit",n=e?e:"inherit";this.control.removeClass("ui-body-"+t).addClass("ui-body-"+n)},_setTrackTheme:function(e){var t=this.options.trackTheme?this.options.trackTheme:"inherit",n=e?e:"inherit";this.slider.removeClass("ui-body-"+t).addClass("ui-body-"+n)},_setMini:function(e){e=!!e,!this.isToggleSwitch&&!this.isRangeslider&&(this.slider.parent().toggleClass("ui-mini",e),this.element.toggleClass("ui-mini",e)),this.slider.toggleClass("ui-mini",e)},_setCorners:function(e){this.slider.toggleClass("ui-corner-all",e),this.isToggleSwitch||this.control.toggleClass("ui-corner-all",e)},_setDisabled:function(e){e=!!e,this.element.prop("disabled",e),this.slider.toggleClass("ui-state-disabled",e).attr("aria-disabled",e),this.element.toggleClass("ui-state-disabled",e)}},e.mobile.behaviors.formReset))}(e),function(e,t){e.widget("mobile.rangeslider",e.extend({options:{theme:null,trackTheme:null,corners:!0,mini:!1,highlight:!0},_create:function(){var t=this.element,n=this.options.mini?"ui-rangeslider ui-mini":"ui-rangeslider",r=t.find("input").first(),i=t.find("input").last(),s=t.find("label").first(),o=e.data(r.get(0),"mobile-slider")||e.data(r.slider().get(0),"mobile-slider"),u=e.data(i.get(0),"mobile-slider")||e.data(i.slider().get(0),"mobile-slider"),a=o.slider,f=u.slider,l=o.handle,c=e("<div class='ui-rangeslider-sliders' />").appendTo(t);r.addClass("ui-rangeslider-first"),i.addClass("ui-rangeslider-last"),t.addClass(n),a.appendTo(c),f.appendTo(c),s.insertBefore(t),l.prependTo(f),e.extend(this,{_inputFirst:r,_inputLast:i,_sliderFirst:a,_sliderLast:f,_label:s,_targetVal:null,_sliderTarget:!1,_sliders:c,_proxy:!1}),this.refresh(),this._on(this.element.find("input.ui-slider-input"),{slidebeforestart:"_slidebeforestart",slidestop:"_slidestop",slidedrag:"_slidedrag",slidebeforechange:"_change",blur:"_change",keyup:"_change"}),this._on({mousedown:"_change"}),this._on(this.element.closest("form"),{reset:"_handleReset"}),this._on(l,{vmousedown:"_dragFirstHandle"})},_handleReset:function(){var e=this;setTimeout(function(){e._updateHighlight()},0)},_dragFirstHandle:function(t){return e.data(this._inputFirst.get(0),"mobile-slider").dragging=!0,e.data(this._inputFirst.get(0),"mobile-slider").refresh(t),e.data(this._inputFirst.get(0),"mobile-slider")._trigger("start"),!1},_slidedrag:function(t){var n=e(t.target).is(this._inputFirst),r=n?this._inputLast:this._inputFirst;this._sliderTarget=!1;if(this._proxy==="first"&&n||this._proxy==="last"&&!n)return e.data(r.get(0),"mobile-slider").dragging=!0,e.data(r.get(0),"mobile-slider").refresh(t),!1},_slidestop:function(t){var n=e(t.target).is(this._inputFirst);this._proxy=!1,this.element.find("input").trigger("vmouseup"),this._sliderFirst.css("z-index",n?1:"")},_slidebeforestart:function(t){this._sliderTarget=!1,e(t.originalEvent.target).hasClass("ui-slider-track")&&(this._sliderTarget=!0,this._targetVal=e(t.target).val())},_setOptions:function(e){e.theme!==t&&this._setTheme(e.theme),e.trackTheme!==t&&this._setTrackTheme(e.trackTheme),e.mini!==t&&this._setMini(e.mini),e.highlight!==t&&this._setHighlight(e.highlight),e.disabled!==t&&this._setDisabled(e.disabled),this._super(e),this.refresh()},refresh:function(){var e=this.element,t=this.options;if(this._inputFirst.is(":disabled")||this._inputLast.is(":disabled"))this.options.disabled=!0;e.find("input").slider({theme:t.theme,trackTheme:t.trackTheme,disabled:t.disabled,corners:t.corners,mini:t.mini,highlight:t.highlight}).slider("refresh"),this._updateHighlight()},_change:function(t){if(t.type==="keyup")return this._updateHighlight(),!1;var n=this,r=parseFloat(this._inputFirst.val(),10),i=parseFloat(this._inputLast.val(),10),s=e(t.target).hasClass("ui-rangeslider-first"),o=s?this._inputFirst:this._inputLast,u=s?this._inputLast:this._inputFirst;if(this._inputFirst.val()>this._inputLast.val()&&t.type==="mousedown"&&!e(t.target).hasClass("ui-slider-handle"))o.blur();else if(t.type==="mousedown")return;r>i&&!this._sliderTarget?(o.val(s?i:r).slider("refresh"),this._trigger("normalize")):r>i&&(o.val(this._targetVal).slider("refresh"),setTimeout(function(){u.val(s?r:i).slider("refresh"),e.data(u.get(0),"mobile-slider").handle.focus(),n._sliderFirst.css("z-index",s?"":1),n._trigger("normalize")},0),this._proxy=s?"first":"last"),r===i?(e.data(o.get(0),"mobile-slider").handle.css("z-index",1),e.data(u.get(0),"mobile-slider").handle.css("z-index",0)):(e.data(u.get(0),"mobile-slider").handle.css("z-index",""),e.data(o.get(0),"mobile-slider").handle.css("z-index","")),this._updateHighlight();if(r>=i)return!1},_updateHighlight:function(){var t=parseInt(e.data(this._inputFirst.get(0),"mobile-slider").handle.get(0).style.left,10),n=parseInt(e.data(this._inputLast.get(0),"mobile-slider").handle.get(0).style.left,10),r=n-t;this.element.find(".ui-slider-bg").css({"margin-left":t+"%",width:r+"%"})},_setTheme:function(e){this._inputFirst.slider("option","theme",e),this._inputLast.slider("option","theme",e)},_setTrackTheme:function(e){this._inputFirst.slider("option","trackTheme",e),this._inputLast.slider("option","trackTheme",e)},_setMini:function(e){this._inputFirst.slider("option","mini",e),this._inputLast.slider("option","mini",e),this.element.toggleClass("ui-mini",!!e)},_setHighlight:function(e){this._inputFirst.slider("option","highlight",e),this._inputLast.slider("option","highlight",e)},_setDisabled:function(e){this._inputFirst.prop("disabled",e),this._inputLast.prop("disabled",e)},_destroy:function(){this._label.prependTo(this.element),this.element.removeClass("ui-rangeslider ui-mini"),this._inputFirst.after(this._sliderFirst),this._inputLast.after(this._sliderLast),this._sliders.remove(),this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")}},e.mobile.behaviors.formReset))}(e),function(e,r){e.widget("mobile.selectmenu",e.extend({initSelector:"select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",options:{theme:null,icon:"carat-d",iconpos:"right",inline:!1,corners:!0,shadow:!0,iconshadow:!1,overlayTheme:null,dividerTheme:null,hidePlaceholderMenuItems:!0,closeText:"Close",nativeMenu:!0,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,mini:!1},_button:function(){return e("<div/>")},_setDisabled:function(e){return this.element.attr("disabled",e),this.button.attr("aria-disabled",e),this._setOption("disabled",e)},_focusButton:function(){var e=this;setTimeout(function(){e.button.focus()},40)},_selectOptions:function(){return this.select.find("option")},_preExtension:function(){var t=this.options.inline||this.element.jqmData("inline"),n=this.options.mini||this.element.jqmData("mini"),r="";!~this.element[0].className.indexOf("ui-btn-left")||(r=" ui-btn-left"),!~this.element[0].className.indexOf("ui-btn-right")||(r=" ui-btn-right"),t&&(r+=" ui-btn-inline"),n&&(r+=" ui-mini"),this.select=this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select"+r+"'>"),this.selectId=this.select.attr("id")||"select-"+this.uuid,this.buttonId=this.selectId+"-button",this.label=e("label[for='"+this.selectId+"']"),this.isMultiple=this.select[0].multiple},_destroy:function(){var e=this.element.parents(".ui-select");e.length>0&&(e.is(".ui-btn-left, .ui-btn-right")&&this.element.addClass(e.hasClass("ui-btn-left")?"ui-btn-left":"ui-btn-right"),this.element.insertAfter(e),e.remove())},_create:function(){this._preExtension(),this.button=this._button();var n=this,r=this.options,i=r.icon?r.iconpos||this.select.jqmData("iconpos"):!1,s=this.button.insertBefore(this.select).attr("id",this.buttonId).addClass("ui-btn"+(r.icon?" ui-icon-"+r.icon+" ui-btn-icon-"+i+(r.iconshadow?" ui-shadow-icon":""):"")+(r.theme?" ui-btn-"+r.theme:"")+(r.corners?" ui-corner-all":"")+(r.shadow?" ui-shadow":""));this.setButtonText(),r.nativeMenu&&t.opera&&t.opera.version&&s.addClass("ui-select-nativeonly"),this.isMultiple&&(this.buttonCount=e("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(s.addClass("ui-li-has-count"))),(r.disabled||this.element.attr("disabled"))&&this.disable(),this.select.change(function(){n.refresh(),!r.nativeMenu||n._delay(function(){n.select.blur()})}),this._handleFormReset(),this._on(this.button,{keydown:"_handleKeydown"}),this.build()},build:function(){var t=this;this.select.appendTo(t.button).bind("vmousedown",function(){t.button.addClass(e.mobile.activeBtnClass)}).bind("focus",function(){t.button.addClass(e.mobile.focusClass)}).bind("blur",function(){t.button.removeClass(e.mobile.focusClass)}).bind("focus vmouseover",function(){t.button.trigger("vmouseover")}).bind("vmousemove",function(){t.button.removeClass(e.mobile.activeBtnClass)}).bind("change blur vmouseout",function(){t.button.trigger("vmouseout").removeClass(e.mobile.activeBtnClass)}),t.button.bind("vmousedown",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.label.bind("click focus",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.select.bind("focus",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.button.bind("mouseup",function(){t.options.preventFocusZoom&&setTimeout(function(){e.mobile.zoom.enable(!0)},0)}),t.select.bind("blur",function(){t.options.preventFocusZoom&&e.mobile.zoom.enable(!0)})},selected:function(){return this._selectOptions().filter(":selected")},selectedIndices:function(){var e=this;return this.selected().map(function(){return e._selectOptions().index(this)}).get()},setButtonText:function(){var t=this,r=this.selected(),i=this.placeholder,s=e(n.createElement("span"));this.button.children("span").not(".ui-li-count").remove().end().end().prepend(function(){return r.length?i=r.map(function(){return e(this).text()}).get().join(", "):i=t.placeholder,i?s.text(i):s.html("&#160;"),s.addClass(t.select.attr("class")).addClass(r.attr("class")).removeClass("ui-screen-hidden")}())},setButtonCount:function(){var e=this.selected();this.isMultiple&&this.buttonCount[e.length>1?"show":"hide"]().text(e.length)},_handleKeydown:function(){this._delay("_refreshButton")},_reset:function(){this.refresh()},_refreshButton:function(){this.setButtonText(),this.setButtonCount()},refresh:function(){this._refreshButton()},open:e.noop,close:e.noop,disable:function(){this._setDisabled(!0),this.button.addClass("ui-state-disabled")},enable:function(){this._setDisabled(!1),this.button.removeClass("ui-state-disabled")}},e.mobile.behaviors.formReset))}(e),function(e,n){function r(e,t,n,r){var i=r;return e<t?i=n+(e-t)/2:i=Math.min(Math.max(n,r-t/2),n+e-t),i}function i(e){return{x:e.scrollLeft(),y:e.scrollTop(),cx:e[0].innerWidth||e.width(),cy:e[0].innerHeight||e.height()}}e.widget("mobile.popup",{options:{wrapperClass:null,theme:null,overlayTheme:null,shadow:!0,corners:!0,transition:"none",positionTo:"origin",tolerance:null,closeLinkSelector:"a:jqmData(rel='back')",closeLinkEvents:"click.popup",navigateEvents:"navigate.popup",closeEvents:"navigate.popup pagebeforechange.popup",dismissible:!0,enhanced:!1,history:!e.mobile.browser.oldIE},_handleDocumentVmousedown:function(t){this._isOpen&&e.contains(this._ui.container[0],t.target)&&this._ignoreResizeEvents()},_create:function(){var t=this.element,n=t.attr("id"),r=this.options;r.history=r.history&&e.mobile.ajaxEnabled&&e.mobile.hashListeningEnabled,this._on(this.document,{vmousedown:"_handleDocumentVmousedown"}),e.extend(this,{_scrollTop:0,_page:t.closest(".ui-page"),_ui:null,_fallbackTransition:"",_currentTransition:!1,_prerequisites:null,_isOpen:!1,_tolerance:null,_resizeData:null,_ignoreResizeTo:0,_orientationchangeInProgress:!1}),this._page.length===0&&(this._page=e("body")),r.enhanced?this._ui={container:t.parent(),screen:t.parent().prev(),placeholder:e(this.document[0].getElementById(n+"-placeholder"))}:(this._ui=this._enhance(t,n),this._applyTransition(r.transition)),this._setTolerance(r.tolerance)._ui.focusElement=this._ui.container,this._on(this._ui.screen,{vclick:"_eatEventAndClose"}),this._on(this.window,{orientationchange:e.proxy(this,"_handleWindowOrientationchange"),resize:e.proxy(this,"_handleWindowResize"),keyup:e.proxy(this,"_handleWindowKeyUp")}),this._on(this.document,{focusin:"_handleDocumentFocusIn"})},_enhance:function(t,n){var r=this.options,i=r.wrapperClass,s={screen:e("<div class='ui-screen-hidden ui-popup-screen "+this._themeClassFromOption("ui-overlay-",r.overlayTheme)+"'></div>"),placeholder:e("<div style='display: none;'><!-- placeholder --></div>"),container:e("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate"+(i?" "+i:"")+"'></div>")},o=this.document[0].createDocumentFragment();return o.appendChild(s.screen[0]),o.appendChild(s.container[0]),n&&(s.screen.attr("id",n+"-screen"),s.container.attr("id",n+"-popup"),s.placeholder.attr("id",n+"-placeholder").html("<!-- placeholder for "+n+" -->")),this._page[0].appendChild(o),s.placeholder.insertAfter(t),t.detach().addClass("ui-popup "+this._themeClassFromOption("ui-body-",r.theme)+" "+(r.shadow?"ui-overlay-shadow ":"")+(r.corners?"ui-corner-all ":"")).appendTo(s.container),s},_eatEventAndClose:function(e){return e.preventDefault(),e.stopImmediatePropagation(),this.options.dismissible&&this.close(),!1},_resizeScreen:function(){var e=this._ui.screen,t=this._ui.container.outerHeight(!0),n=e.removeAttr("style").height(),r=this.document.height()-1;n<r?e.height(r):t>n&&e.height(t)},_handleWindowKeyUp:function(t){if(this._isOpen&&t.keyCode===e.mobile.keyCode.ESCAPE)return this._eatEventAndClose(t)},_expectResizeEvent:function(){var e=i(this.window);if(this._resizeData){if(e.x===this._resizeData.windowCoordinates.x&&e.y===this._resizeData.windowCoordinates.y&&e.cx===this._resizeData.windowCoordinates.cx&&e.cy===this._resizeData.windowCoordinates.cy)return!1;clearTimeout(this._resizeData.timeoutId)}return this._resizeData={timeoutId:this._delay("_resizeTimeout",200),windowCoordinates:e},!0},_resizeTimeout:function(){this._isOpen?this._expectResizeEvent()||(this._ui.container.hasClass("ui-popup-hidden")&&(this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate"),this.reposition({positionTo:"window"}),this._ignoreResizeEvents()),this._resizeScreen(),this._resizeData=null,this._orientationchangeInProgress=!1):(this._resizeData=null,this._orientationchangeInProgress=!1)},_stopIgnoringResizeEvents:function(){this._ignoreResizeTo=0},_ignoreResizeEvents:function(){this._ignoreResizeTo&&clearTimeout(this._ignoreResizeTo),this._ignoreResizeTo=this._delay("_stopIgnoringResizeEvents",1e3)},_handleWindowResize:function(){this._isOpen&&this._ignoreResizeTo===0&&(this._expectResizeEvent()||this._orientationchangeInProgress)&&!this._ui.container.hasClass("ui-popup-hidden")&&this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style")},_handleWindowOrientationchange:function(){!this._orientationchangeInProgress&&this._isOpen&&this._ignoreResizeTo===0&&(this._expectResizeEvent(),this._orientationchangeInProgress=!0)},_handleDocumentFocusIn:function(t){var n,r=t.target,i=this._ui;if(!this._isOpen)return;if(r!==i.container[0]){n=e(r);if(!e.contains(i.container[0],r))return e(this.document[0].activeElement).one("focus",e.proxy(function(){this._safelyBlur(r)},this)),i.focusElement.focus(),t.preventDefault(),t.stopImmediatePropagation(),!1;i.focusElement[0]===i.container[0]&&(i.focusElement=n)}this._ignoreResizeEvents()},_themeClassFromOption:function(e,t){return t?t==="none"?"":e+t:e+"inherit"},_applyTransition:function(t){return t&&(this._ui.container.removeClass(this._fallbackTransition),t!=="none"&&(this._fallbackTransition=e.mobile._maybeDegradeTransition(t),this._fallbackTransition==="none"&&(this._fallbackTransition=""),this._ui.container.addClass(this._fallbackTransition))),this},_setOptions:function(e){var t=this.options,r=this.element,i=this._ui.screen;return e.wrapperClass!==n&&this._ui.container.removeClass(t.wrapperClass).addClass(e.wrapperClass),e.theme!==n&&r.removeClass(this._themeClassFromOption("ui-body-",t.theme)).addClass(this._themeClassFromOption("ui-body-",e.theme)),e.overlayTheme!==n&&(i.removeClass(this._themeClassFromOption("ui-overlay-",t.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-",e.overlayTheme)),this._isOpen&&i.addClass("in")),e.shadow!==n&&r.toggleClass("ui-overlay-shadow",e.shadow),e.corners!==n&&r.toggleClass("ui-corner-all",e.corners),e.transition!==n&&(this._currentTransition||this._applyTransition(e.transition)),e.tolerance!==n&&this._setTolerance(e.tolerance),e.disabled!==n&&e.disabled&&this.close(),this._super(e)},_setTolerance:function(t){var r={t:30,r:15,b:30,l:15},i;if(t!==n){i=String(t).split(","),e.each(i,function(e,t){i[e]=parseInt(t,10)});switch(i.length){case 1:isNaN(i[0])||(r.t=r.r=r.b=r.l=i[0]);break;case 2:isNaN(i[0])||(r.t=r.b=i[0]),isNaN(i[1])||(r.l=r.r=i[1]);break;case 4:isNaN(i[0])||(r.t=i[0]),isNaN(i[1])||(r.r=i[1]),isNaN(i[2])||(r.b=i[2]),isNaN(i[3])||(r.l=i[3]);break;default:}}return this._tolerance=r,this},_clampPopupWidth:function(e){var t,n=i(this.window),r={x:this._tolerance.l,y:n.y+this._tolerance.t,cx:n.cx-this._tolerance.l-this._tolerance.r,cy:n.cy-this._tolerance.t-this._tolerance.b};return e||this._ui.container.css("max-width",r.cx),t={cx:this._ui.container.outerWidth(!0),cy:this._ui.container.outerHeight(!0)},{rc:r,menuSize:t}},_calculateFinalLocation:function(e,t){var n,i=t.rc,s=t.menuSize;return n={left:r(i.cx,s.cx,i.x,e.x),top:r(i.cy,s.cy,i.y,e.y)},n.top=Math.max(0,n.top),n.top-=Math.min(n.top,Math.max(0,n.top+s.cy-this.document.height())),n},_placementCoords:function(e){return this._calculateFinalLocation(e,this._clampPopupWidth())},_createPrerequisites:function(t,n,r){var i,s=this;i={screen:e.Deferred(),container:e.Deferred()},i.screen.then(function(){i===s._prerequisites&&t()}),i.container.then(function(){i===s._prerequisites&&n()}),e.when(i.screen,i.container).done(function(){i===s._prerequisites&&(s._prerequisites=null,r())}),s._prerequisites=i},_animate:function(t){this._ui.screen.removeClass(t.classToRemove).addClass(t.screenClassToAdd),t.prerequisites.screen.resolve();if(t.transition&&t.transition!=="none"){t.applyTransition&&this._applyTransition(t.transition);if(this._fallbackTransition){this._ui.container.addClass(t.containerClassToAdd).removeClass(t.classToRemove).animationComplete(e.proxy(t.prerequisites.container,"resolve"));return}}this._ui.container.removeClass(t.classToRemove),t.prerequisites.container.resolve()},_desiredCoords:function(t){var n,r=null,s=i(this.window),o=t.x,u=t.y,a=t.positionTo;if(a&&a!=="origin")if(a==="window")o=s.cx/2+s.x,u=s.cy/2+s.y;else{try{r=e(a)}catch(f){r=null}r&&(r.filter(":visible"),r.length===0&&(r=null))}r&&(n=r.offset(),o=n.left+r.outerWidth()/2,u=n.top+r.outerHeight()/2);if(e.type(o)!=="number"||isNaN(o))o=s.cx/2+s.x;if(e.type(u)!=="number"||isNaN(u))u=s.cy/2+s.y;return{x:o,y:u}},_reposition:function(e){e={x:e.x,y:e.y,positionTo:e.positionTo},this._trigger("beforeposition",n,e),this._ui.container.offset(this._placementCoords(this._desiredCoords(e)))},reposition:function(e){this._isOpen&&this._reposition(e)},_safelyBlur:function(t){t!==this.window[0]&&t.nodeName.toLowerCase()!=="body"&&e(t).blur()},_openPrerequisitesComplete:function(){var t=this.element.attr("id"),n=this._ui.container.find(":focusable").first();this._ui.container.addClass("ui-popup-active"),this._isOpen=!0,this._resizeScreen(),e.contains(this._ui.container[0],this.document[0].activeElement)||this._safelyBlur(this.document[0].activeElement),n.length>0&&(this._ui.focusElement=n),this._ignoreResizeEvents(),t&&this.document.find("[aria-haspopup='true'][aria-owns='"+t+"']").attr("aria-expanded",!0),this._trigger("afteropen")},_open:function(t){var n=e.extend({},this.options,t),r=function(){var e=navigator.userAgent,t=e.match(/AppleWebKit\/([0-9\.]+)/),n=!!t&&t[1],r=e.match(/Android (\d+(?:\.\d+))/),i=!!r&&r[1],s=e.indexOf("Chrome")>-1;return r!==null&&i==="4.0"&&n&&n>534.13&&!s?!0:!1}();this._createPrerequisites(e.noop,e.noop,e.proxy(this,"_openPrerequisitesComplete")),this._currentTransition=n.transition,this._applyTransition(n.transition),this._ui.screen.removeClass("ui-screen-hidden"),this._ui.container.removeClass("ui-popup-truncate"),this._reposition(n),this._ui.container.removeClass("ui-popup-hidden"),this.options.overlayTheme&&r&&this.element.closest(".ui-page").addClass("ui-popup-open"),this._animate({additionalCondition:!0,transition:n.transition,classToRemove:"",screenClassToAdd:"in",containerClassToAdd:"in",applyTransition:!1,prerequisites:this._prerequisites})},_closePrerequisiteScreen:function(){this._ui.screen.removeClass("out").addClass("ui-screen-hidden")},_closePrerequisiteContainer:function(){this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style")},_closePrerequisitesDone:function(){var t=this._ui.container,r=this.element.attr("id");e.mobile.popup.active=n,e(":focus",t[0]).add(t[0]).blur(),r&&this.document.find("[aria-haspopup='true'][aria-owns='"+r+"']").attr("aria-expanded",!1),this._trigger("afterclose")},_close:function(t){this._ui.container.removeClass("ui-popup-active"),this._page.removeClass("ui-popup-open"),this._isOpen=!1,this._createPrerequisites(e.proxy(this,"_closePrerequisiteScreen"),e.proxy(this,"_closePrerequisiteContainer"),e.proxy(this,"_closePrerequisitesDone")),this._animate({additionalCondition:this._ui.screen.hasClass("in"),transition:t?"none":this._currentTransition,classToRemove:"in",screenClassToAdd:"out",containerClassToAdd:"reverse out",applyTransition:!0,prerequisites:this._prerequisites})},_unenhance:function(){if(this.options.enhanced)return;this._setOptions({theme:e.mobile.popup.prototype.options.theme}),this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit"),this._ui.screen.remove(),this._ui.container.remove(),this._ui.placeholder.remove()},_destroy:function(){return e.mobile.popup.active===this?(this.element.one("popupafterclose",e.proxy(this,"_unenhance")),this.close()):this._unenhance(),this},_closePopup:function(n,r){var i,s,o=this.options,u=!1;if(n&&n.isDefaultPrevented()||e.mobile.popup.active!==this)return;t.scrollTo(0,this._scrollTop),n&&n.type==="pagebeforechange"&&r&&(typeof r.toPage=="string"?i=r.toPage:i=r.toPage.jqmData("url"),i=e.mobile.path.parseUrl(i),s=i.pathname+i.search+i.hash,this._myUrl!==e.mobile.path.makeUrlAbsolute(s)?u=!0:n.preventDefault()),this.window.off(o.closeEvents),this.element.undelegate(o.closeLinkSelector,o.closeLinkEvents),this._close(u)},_bindContainerClose:function(){this.window.on(this.options.closeEvents,e.proxy(this,"_closePopup"))},widget:function(){return this._ui.container},open:function(t){var n,r,i,s,o,u,a=this,f=this.options;return e.mobile.popup.active||f.disabled?this:(e.mobile.popup.active=this,this._scrollTop=this.window.scrollTop(),f.history?(u=e.mobile.navigate.history,r=e.mobile.dialogHashKey,i=e.mobile.activePage,s=i?i.hasClass("ui-dialog"):!1,this._myUrl=n=u.getActive().url,o=n.indexOf(r)>-1&&!s&&u.activeIndex>0,o?(a._open(t),a._bindContainerClose(),this):(n.indexOf(r)===-1&&!s?n+=n.indexOf("#")>-1?r:"#"+r:n=e.mobile.path.parseLocation().hash+r,this.window.one("beforenavigate",function(e){e.preventDefault(),a._open(t),a._bindContainerClose()}),this.urlAltered=!0,e.mobile.navigate(n,{role:"dialog"}),this)):(a._open(t),a._bindContainerClose(),a.element.delegate(f.closeLinkSelector,f.closeLinkEvents,function(e){a.close(),e.preventDefault()}),this))},close:function(){return e.mobile.popup.active!==this?this:(this._scrollTop=this.window.scrollTop(),this.options.history&&this.urlAltered?(e.mobile.back(),this.urlAltered=!1):this._closePopup(),this)}}),e.mobile.popup.handleLink=function(t){var n,r=e.mobile.path,i=e(r.hashToSelector(r.parseUrl(t.attr("href")).hash)).first();i.length>0&&i.data("mobile-popup")&&(n=t.offset(),i.popup("open",{x:n.left+t.outerWidth()/2,y:n.top+t.outerHeight()/2,transition:t.jqmData("transition"),positionTo:t.jqmData("position-to")})),setTimeout(function(){t.removeClass(e.mobile.activeBtnClass)},300)},e.mobile.document.on("pagebeforechange",function(t,n){n.options.role==="popup"&&(e.mobile.popup.handleLink(n.options.link),t.preventDefault())})}(e),function(e,t){var r=".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')",i=function(e,t,n){var i=e[n+"All"]().not(r).first();i.length&&(t.blur().attr("tabindex","-1"),i.find("a").first().focus())};e.widget("mobile.selectmenu",e.mobile.selectmenu,{_create:function(){var e=this.options;return e.nativeMenu=e.nativeMenu||this.element.parents(":jqmData(role='popup'),:mobile-popup").length>0,this._super()},_handleSelectFocus:function(){this.element.blur(),this.button.focus()},_handleKeydown:function(e){this._super(e),this._handleButtonVclickKeydown(e)},_handleButtonVclickKeydown:function(t){if(this.options.disabled||this.isOpen||this.options.nativeMenu)return;if(t.type==="vclick"||t.keyCode&&(t.keyCode===e.mobile.keyCode.ENTER||t.keyCode===e.mobile.keyCode.SPACE))this._decideFormat(),this.menuType==="overlay"?this.button.attr("href","#"+this.popupId).attr("data-"+(e.mobile.ns||"")+"rel","popup"):this.button.attr("href","#"+this.dialogId).attr("data-"+(e.mobile.ns||"")+"rel","dialog"),this.isOpen=!0},_handleListFocus:function(t){var n=t.type==="focusin"?{tabindex:"0",event:"vmouseover"}:{tabindex:"-1",event:"vmouseout"};e(t.target).attr("tabindex",n.tabindex).trigger(n.event)},_handleListKeydown:function(t){var n=e(t.target),r=n.closest("li");switch(t.keyCode){case 38:return i(r,n,"prev"),!1;case 40:return i(r,n,"next"),!1;case 13:case 32:return n.trigger("click"),!1}},_handleMenuPageHide:function(){this._delayedTrigger(),this.thisPage.page("bindRemove")},_handleHeaderCloseClick:function(){if(this.menuType==="overlay")return this.close(),!1},_handleListItemClick:function(t){var n=e(t.target).closest("li"),r=this.select[0].selectedIndex,i=e.mobile.getAttribute(n,"option-index"),s=this._selectOptions().eq(i)[0];s.selected=this.isMultiple?!s.selected:!0,this.isMultiple&&n.find("a").toggleClass("ui-checkbox-on",s.selected).toggleClass("ui-checkbox-off",!s.selected),!this.isMultiple&&r!==i&&(this._triggerChange=!0),this.isMultiple?(this.select.trigger("change"),this.list.find("li:not(.ui-li-divider)").eq(i).find("a").first().focus()):this.close(),t.preventDefault()},build:function(){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E=this.options;return E.nativeMenu?this._super():(n=this.selectId,r=n+"-listbox",i=n+"-dialog",s=this.label,o=this.element.closest(".ui-page"),u=this.element[0].multiple,a=n+"-menu",f=E.theme?" data-"+e.mobile.ns+"theme='"+E.theme+"'":"",l=E.overlayTheme||E.theme||null,c=l?" data-"+e.mobile.ns+"overlay-theme='"+l+"'":"",h=E.dividerTheme&&u?" data-"+e.mobile.ns+"divider-theme='"+E.dividerTheme+"'":"",p=e("<div data-"+e.mobile.ns+"role='dialog' class='ui-selectmenu' id='"+i+"'"+f+c+">"+"<div data-"+e.mobile.ns+"role='header'>"+"<div class='ui-title'></div>"+"</div>"+"<div data-"+e.mobile.ns+"role='content'></div>"+"</div>"),d=e("<div"+f+c+" id='"+r+"' class='ui-selectmenu'></div>").insertAfter(this.select).popup(),v=e("<ul class='ui-selectmenu-list' id='"+a+"' role='listbox' aria-labelledby='"+this.buttonId+"'"+f+h+"></ul>").appendTo(d),m=e("<div class='ui-header ui-bar-"+(E.theme?E.theme:"inherit")+"'></div>").prependTo(d),g=e("<h1 class='ui-title'></h1>").appendTo(m),this.isMultiple&&(w=e("<a>",{role:"button",text:E.closeText,href:"#","class":"ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"}).appendTo(m)),e.extend(this,{selectId:n,menuId:a,popupId:r,dialogId:i,thisPage:o,menuPage:p,label:s,isMultiple:u,theme:E.theme,listbox:d,list:v,header:m,headerTitle:g,headerClose:w,menuPageContent:y,menuPageClose:b,placeholder:""}),this.refresh(),this._origTabIndex===t&&(this._origTabIndex=this.select[0].getAttribute("tabindex")===null?!1:this.select.attr("tabindex")),this.select.attr("tabindex","-1"),this._on(this.select,{focus:"_handleSelectFocus"}),this._on(this.button,{vclick:"_handleButtonVclickKeydown"}),this.list.attr("role","listbox"),this._on(this.list,{focusin:"_handleListFocus",focusout:"_handleListFocus",keydown:"_handleListKeydown","click li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)":"_handleListItemClick"}),this._on(this.menuPage,{pagehide:"_handleMenuPageHide"}),this._on(this.listbox,{popupafterclose:"_popupClosed"}),this.isMultiple&&this._on(this.headerClose,{click:"_handleHeaderCloseClick"}),this)},_popupClosed:function(){this.close(),this._delayedTrigger()},_delayedTrigger:function(){this._triggerChange&&this.element.trigger("change"),this._triggerChange=!1},_isRebuildRequired:function(){var e=this.list.find("li"),t=this._selectOptions().not(".ui-screen-hidden");return t.text()!==e.text()},selected:function(){return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")},refresh:function(t){var n,r;if(this.options.nativeMenu)return this._super(t);n=this,(t||this._isRebuildRequired())&&n._buildList(),r=this.selectedIndices(),n.setButtonText(),n.setButtonCount(),n.list.find("li:not(.ui-li-divider)").find("a").removeClass(e.mobile.activeBtnClass).end().attr("aria-selected",!1).each(function(t){var i=e(this);e.inArray(t,r)>-1?(i.attr("aria-selected",!0),n.isMultiple?i.find("a").removeClass("ui-checkbox-off").addClass("ui-checkbox-on"):i.hasClass("ui-screen-hidden")?i.next().find("a").addClass(e.mobile.activeBtnClass):i.find("a").addClass(e.mobile.activeBtnClass)):n.isMultiple&&i.find("a").removeClass("ui-checkbox-on").addClass("ui-checkbox-off")})},close:function(){if(this.options.disabled||!this.isOpen)return;var e=this;e.menuType==="page"?(e.menuPage.dialog("close"),e.list.appendTo(e.listbox)):e.listbox.popup("close"),e._focusButton(),e.isOpen=!1},open:function(){this.button.click()},_focusMenuItem:function(){var t=this.list.find("a."+e.mobile.activeBtnClass);t.length===0&&(t=this.list.find("li:not("+r+") a.ui-btn")),t.first().focus()},_decideFormat:function(){var t=this,n=this.window,r=t.list.parent(),i=r.outerHeight(),s=n.scrollTop(),o=t.button.offset().top,u=n.height();i>u-80||!e.support.scrollTop?(t.menuPage.appendTo(e.mobile.pageContainer).page(),t.menuPageContent=t.menuPage.find(".ui-content"),t.menuPageClose=t.menuPage.find(".ui-header a"),t.thisPage.unbind("pagehide.remove"),s===0&&o>u&&t.thisPage.one("pagehide",function(){e(this).jqmData("lastScroll",o)}),t.menuPage.one({pageshow:e.proxy(this,"_focusMenuItem"),pagehide:e.proxy(this,"close")}),t.menuType="page",t.menuPageContent.append(t.list),t.menuPage.find("div .ui-title").text(t.label.getEncodedText()||t.placeholder)):(t.menuType="overlay",t.listbox.one({popupafteropen:e.proxy(this,"_focusMenuItem")}))},_buildList:function(){var t=this,r=this.options,i=this.placeholder,s=!0,o="false",u,a,f,l="data-"+e.mobile.ns,c=l+"option-index",h=l+"icon",p=l+"role",d=l+"placeholder",v=n.createDocumentFragment(),m=!1,g,y,b,w,E,S,x,T,N,C,k;t.list.empty().filter(".ui-listview").listview("destroy"),u=this._selectOptions(),a=u.length,f=this.select[0];for(y=0;y<a;y++,m=!1){b=u[y],w=e(b);if(w.hasClass("ui-screen-hidden"))continue;E=b.parentNode,T=[],S=w.text(),x=n.createElement("a"),x.setAttribute("href","#"),x.appendChild(n.createTextNode(S)),E!==f&&E.nodeName.toLowerCase()==="optgroup"&&(N=E.getAttribute("label"),N!==g&&(C=n.createElement("li"),C.setAttribute(p,"list-divider"),C.setAttribute("role","option"),C.setAttribute("tabindex","-1"),C.appendChild(n.createTextNode(N)),v.appendChild(C),g=N)),s&&(!b.getAttribute("value")||S.length===0||w.jqmData("placeholder"))&&(s=!1,m=!0,null===b.getAttribute(d)&&(this._removePlaceholderAttr=!0),b.setAttribute(d,!0),r.hidePlaceholderMenuItems&&T.push("ui-screen-hidden"),i!==S&&(i=t.placeholder=S)),k=n.createElement("li"),b.disabled&&(T.push("ui-state-disabled"),k.setAttribute("aria-disabled",!0)),k.setAttribute(c,y),k.setAttribute(h,o),m&&k.setAttribute(d,!0),k.className=T.join(" "),k.setAttribute("role","option"),x.setAttribute("tabindex","-1"),this.isMultiple&&e(x).addClass("ui-btn ui-checkbox-off ui-btn-icon-right"),k.appendChild(x),v.appendChild(k)}t.list[0].appendChild(v),!this.isMultiple&&!i.length?this.header.addClass("ui-screen-hidden"):this.headerTitle.text(this.placeholder),t.list.listview()},_button:function(){return this.options.nativeMenu?this._super():e("<a>",{href:"#",role:"button",id:this.buttonId,"aria-haspopup":"true","aria-owns":this.menuId})},_destroy:function(){this.options.nativeMenu||(this.close(),this._origTabIndex!==t&&(this._origTabIndex!==!1?this.select.attr("tabindex",this._origTabIndex):this.select.removeAttr("tabindex")),this._removePlaceholderAttr&&this._selectOptions().removeAttr("data-"+e.mobile.ns+"placeholder"),this.listbox.remove(),this.menuPage.remove()),this._super()}})}(e),function(e,t){function r(){return n||(n=e("<div></div>",{"class":"ui-slider-popup ui-shadow ui-corner-all"})),n.clone()}var n;e.widget("mobile.slider",e.mobile.slider,{options:{popupEnabled:!1,showValue:!1},_create:function(){this._super(),e.extend(this,{_currentValue:null,_popup:null,_popupVisible:!1}),this._setOption("popupEnabled",this.options.popupEnabled),this._on(this.handle,{vmousedown:"_showPopup"}),this._on(this.slider.add(this.document),{vmouseup:"_hidePopup"}),this._refresh()},_positionPopup:function(){var e=this.handle.offset();this._popup.offset({left:e.left+(this.handle.width()-this._popup.width())/2,top:e.top-this._popup.outerHeight()-5})},_setOption:function(e,t){this._super(e,t),e==="showValue"?this.handle.html(t&&!this.options.mini?this._value():""):e==="popupEnabled"&&t&&!this._popup&&(this._popup=r().addClass("ui-body-"+(this.options.theme||"a")).hide().insertBefore(this.element))},refresh:function(){this._super.apply(this,arguments),this._refresh()},_refresh:function(){var e=this.options,t;e.popupEnabled&&this.handle.removeAttr("title"),t=this._value();if(t===this._currentValue)return;this._currentValue=t,e.popupEnabled&&this._popup&&(this._positionPopup(),this._popup.html(t)),e.showValue&&!this.options.mini&&this.handle.html(t)},_showPopup:function(){this.options.popupEnabled&&!this._popupVisible&&(this.handle.html(""),this._popup.show(),this._positionPopup(),this._popupVisible=!0)},_hidePopup:function(){var e=this.options;e.popupEnabled&&this._popupVisible&&(e.showValue&&!e.mini&&this.handle.html(this._value()),this._popup.hide(),this._popupVisible=!1)}})}(e),function(e,t){function r(t){var n=e.trim(t.text())||null;return n?(n=n.slice(0,1).toUpperCase(),n):null}e.widget("mobile.listview",e.mobile.listview,{options:{autodividers:!1,autodividersSelector:r},_beforeListviewRefresh:function(){this.options.autodividers&&(this._replaceDividers(),this._superApply(arguments))},_replaceDividers:function(){var t,r,i,s,o=null,u=this.element,a;u.children("li:jqmData(role='list-divider')").remove(),r=u.children("li");for(t=0;t<r.length;t++)i=r[t],s=this.options.autodividersSelector(e(i)),s&&o!==s&&(a=n.createElement("li"),a.appendChild(n.createTextNode(s)),a.setAttribute("data-"+e.mobile.ns+"role","list-divider"),i.parentNode.insertBefore(a,i)),o=s}})}(e),function(e,t){e.widget("mobile.navbar",{options:{iconpos:"top",grid:null},_create:function(){var r=this.element,i=r.find("a, button"),s=i.filter(":jqmData(icon)").length?this.options.iconpos:t;r.addClass("ui-navbar").attr("role","navigation").find("ul").jqmEnhanceable().grid({grid:this.options.grid}),i.each(function(){var t=e.mobile.getAttribute(this,"icon"),n=e.mobile.getAttribute(this,"theme"),r="ui-btn";n&&(r+=" ui-btn-"+n),t&&(r+=" ui-icon-"+t+" ui-btn-icon-"+s),e(this).addClass(r)}),r.delegate("a","vclick",function(){var t=e(this);t.hasClass("ui-state-disabled")||t.hasClass("ui-disabled")||t.hasClass(e.mobile.activeBtnClass)||(i.removeClass(e.mobile.activeBtnClass),t.addClass(e.mobile.activeBtnClass),e(n).one("pagehide",function(){t.removeClass(e.mobile.activeBtnClass)}))}),r.closest(".ui-page").bind("pagebeforeshow",function(){i.filter(".ui-state-persist").addClass(e.mobile.activeBtnClass)})}})}(e),function(e,t,n){e.widget("mobile.page",e.mobile.page,{options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0,dialog:!1},_create:function(){this._super(),this.options.dialog&&(e.extend(this,{_inner:this.element.children(),_headerCloseButton:null}),this.options.enhanced||this._setCloseBtn(this.options.closeBtn))},_enhance:function(){this._super(),this.options.dialog&&this.element.addClass("ui-dialog").wrapInner(e("<div/>",{role:"dialog","class":"ui-dialog-contain ui-overlay-shadow"+(this.options.corners?" ui-corner-all":"")}))},_setOptions:function(t){var r,i,s=this.options;t.corners!==n&&this._inner.toggleClass("ui-corner-all",!!t.corners),t.overlayTheme!==n&&e.mobile.activePage[0]===this.element[0]&&(s.overlayTheme=t.overlayTheme,this._handlePageBeforeShow()),t.closeBtnText!==n&&(r=s.closeBtn,i=t.closeBtnText),t.closeBtn!==n&&(r=t.closeBtn),r&&this._setCloseBtn(r,i),this._super(t)},_handlePageBeforeShow:function(){this.options.overlayTheme&&this.options.dialog?(this.removeContainerBackground(),this.setContainerBackground(this.options.overlayTheme)):this._super()},_setCloseBtn:function(t,n){var r,i=this._headerCloseButton;t="left"===t?"left":"right"===t?"right":"none","none"===t?i&&(i.remove(),i=null):i?(i.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-"+t),n&&i.text(n)):(r=this._inner.find(":jqmData(role='header')").first(),i=e("<a></a>",{href:"#","class":"ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-"+t}).attr("data-"+e.mobile.ns+"rel","back").text(n||this.options.closeBtnText||"").prependTo(r)),this._headerCloseButton=i}})}(e,this),function(e,n){e.widget("mobile.panel",{options:{classes:{panel:"ui-panel",panelOpen:"ui-panel-open",panelClosed:"ui-panel-closed",panelFixed:"ui-panel-fixed",panelInner:"ui-panel-inner",modal:"ui-panel-dismiss",modalOpen:"ui-panel-dismiss-open",pageContainer:"ui-panel-page-container",pageWrapper:"ui-panel-wrapper",pageFixedToolbar:"ui-panel-fixed-toolbar",pageContentPrefix:"ui-panel-page-content",animate:"ui-panel-animate"},animate:!0,theme:null,position:"left",dismissible:!0,display:"reveal",swipeClose:!0,positionFixed:!1},_closeLink:null,_parentPage:null,_page:null,_modal:null,_panelInner:null,_wrapper:null,_fixedToolbars:null,_create:function(){var t=this.element,n=t.closest(".ui-page, :jqmData(role='page')");e.extend(this,{_closeLink:t.find(":jqmData(rel='close')"),_parentPage:n.length>0?n:!1,_openedPage:null,_page:this._getPage,_panelInner:this._getPanelInner(),_fixedToolbars:this._getFixedToolbars}),this.options.display!=="overlay"&&this._getWrapper(),this._addPanelClasses(),e.support.cssTransform3d&&!!this.options.animate&&this.element.addClass(this.options.classes.animate),this._bindUpdateLayout(),this._bindCloseEvents(),this._bindLinkListeners(),this._bindPageEvents(),!this.options.dismissible||this._createModal(),this._bindSwipeEvents()},_getPanelInner:function(){var e=this.element.find("."+this.options.classes.panelInner);return e.length===0&&(e=this.element.children().wrapAll("<div class='"+this.options.classes.panelInner+"' />").parent()),e},_createModal:function(){var t=this,n=t._parentPage?t._parentPage.parent():t.element.parent();t._modal=e("<div class='"+t.options.classes.modal+"'></div>").on("mousedown",function(){t.close()}).appendTo(n)},_getPage:function(){var t=this._openedPage||this._parentPage||e("."+e.mobile.activePageClass);return t},_getWrapper:function(){var e=this._page().find("."+this.options.classes.pageWrapper);e.length===0&&(e=this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='"+this.options.classes.pageWrapper+"'></div>").parent()),this._wrapper=e},_getFixedToolbars:function(){var t=e("body").children(".ui-header-fixed, .ui-footer-fixed"),n=this._page().find(".ui-header-fixed, .ui-footer-fixed"),r=t.add(n).addClass(this.options.classes.pageFixedToolbar);return r},_getPosDisplayClasses:function(e){return e+"-position-"+this.options.position+" "+e+"-display-"+this.options.display},_getPanelClasses:function(){var e=this.options.classes.panel+" "+this._getPosDisplayClasses(this.options.classes.panel)+" "+this.options.classes.panelClosed+" "+"ui-body-"+(this.options.theme?this.options.theme:"inherit");return!this.options.positionFixed||(e+=" "+this.options.classes.panelFixed),e},_addPanelClasses:function(){this.element.addClass(this._getPanelClasses())},_handleCloseClick:function(e){e.isDefaultPrevented()||this.close()},_bindCloseEvents:function(){this._on(this._closeLink,{click:"_handleCloseClick"}),this._on({"click a:jqmData(ajax='false')":"_handleCloseClick"})},_positionPanel:function(t){var n=this,r=n._panelInner.outerHeight(),i=r>e.mobile.getScreenHeight();i||!n.options.positionFixed?(i&&(n._unfixPanel(),e.mobile.resetActivePageHeight(r)),t&&this.window[0].scrollTo(0,e.mobile.defaultHomeScroll)):n._fixPanel()},_bindFixListener:function(){this._on(e(t),{throttledresize:"_positionPanel"})},_unbindFixListener:function(){this._off(e(t),"throttledresize")},_unfixPanel:function(){!!this.options.positionFixed&&e.support.fixedPosition&&this.element.removeClass(this.options.classes.panelFixed)},_fixPanel:function(){!!this.options.positionFixed&&e.support.fixedPosition&&this.element.addClass(this.options.classes.panelFixed)},_bindUpdateLayout:function(){var e=this;e.element.on("updatelayout",function(){e._open&&e._positionPanel()})},_bindLinkListeners:function(){this._on("body",{"click a":"_handleClick"})},_handleClick:function(t){var r,i=this.element.attr("id");t.currentTarget.href.split("#")[1]===i&&i!==n&&(t.preventDefault(),r=e(t.target),r.hasClass("ui-btn")&&(r.addClass(e.mobile.activeBtnClass),this.element.one("panelopen panelclose",function(){r.removeClass(e.mobile.activeBtnClass)})),this.toggle())},_bindSwipeEvents:function(){var e=this,t=e._modal?e.element.add(e._modal):e.element;!e.options.swipeClose||(e.options.position==="left"?t.on("swipeleft.panel",function(){e.close()}):t.on("swiperight.panel",function(){e.close()}))},_bindPageEvents:function(){var e=this;this.document.on("panelbeforeopen",function(t){e._open&&t.target!==e.element[0]&&e.close()}).on("keyup.panel",function(t){t.keyCode===27&&e._open&&e.close()}),!this._parentPage&&this.options.display!=="overlay"&&this._on(this.document,{pageshow:function(){this._openedPage=null,this._getWrapper()}}),e._parentPage?this.document.on("pagehide",":jqmData(role='page')",function(){e._open&&e.close(!0)}):this.document.on("pagebeforehide",function(){e._open&&e.close(!0)})},_open:!1,_pageContentOpenClasses:null,_modalOpenClasses:null,open:function(t){if(!this._open){var n=this,r=n.options,i=function(){n._off(n.document,"panelclose"),n._page().jqmData("panel","open"),e.support.cssTransform3d&&!!r.animate&&r.display!=="overlay"&&(n._wrapper.addClass(r.classes.animate),n._fixedToolbars().addClass(r.classes.animate)),!t&&e.support.cssTransform3d&&!!r.animate?(n._wrapper||n.element).animationComplete(s,"transition"):setTimeout(s,0),r.theme&&r.display!=="overlay"&&n._page().parent().addClass(r.classes.pageContainer+"-themed "+r.classes.pageContainer+"-"+r.theme),n.element.removeClass(r.classes.panelClosed).addClass(r.classes.panelOpen),n._positionPanel(!0),n._pageContentOpenClasses=n._getPosDisplayClasses(r.classes.pageContentPrefix),r.display!=="overlay"&&(n._page().parent().addClass(r.classes.pageContainer),n._wrapper.addClass(n._pageContentOpenClasses),n._fixedToolbars().addClass(n._pageContentOpenClasses)),n._modalOpenClasses=n._getPosDisplayClasses(r.classes.modal)+" "+r.classes.modalOpen,n._modal&&n._modal.addClass(n._modalOpenClasses).height(Math.max(n._modal.height(),n.document.height()))},s=function(){if(!n._open)return;r.display!=="overlay"&&(n._wrapper.addClass(r.classes.pageContentPrefix+"-open"),n._fixedToolbars().addClass(r.classes.pageContentPrefix+"-open")),n._bindFixListener(),n._trigger("open"),n._openedPage=n._page()};n._trigger("beforeopen"),n._page().jqmData("panel")==="open"?n._on(n.document,{panelclose:i}):i(),n._open=!0}},close:function(t){if(this._open){var n=this,r=this.options,i=function(){n.element.removeClass(r.classes.panelOpen),r.display!=="overlay"&&(n._wrapper.removeClass(n._pageContentOpenClasses),n._fixedToolbars().removeClass(n._pageContentOpenClasses)),!t&&e.support.cssTransform3d&&!!r.animate?(n._wrapper||n.element).animationComplete(s,"transition"):setTimeout(s,0),n._modal&&n._modal.removeClass(n._modalOpenClasses).height("")},s=function(){r.theme&&r.display!=="overlay"&&n._page().parent().removeClass(r.classes.pageContainer+"-themed "+r.classes.pageContainer+"-"+r.theme),n.element.addClass(r.classes.panelClosed),r.display!=="overlay"&&(n._page().parent().removeClass(r.classes.pageContainer),n._wrapper.removeClass(r.classes.pageContentPrefix+"-open"),n._fixedToolbars().removeClass(r.classes.pageContentPrefix+"-open")),e.support.cssTransform3d&&!!r.animate&&r.display!=="overlay"&&(n._wrapper.removeClass(r.classes.animate),n._fixedToolbars().removeClass(r.classes.animate)),n._fixPanel(),n._unbindFixListener(),e.mobile.resetActivePageHeight(),n._page().jqmRemoveData("panel"),n._trigger("close"),n._openedPage=null};n._trigger("beforeclose"),i(),n._open=!1}},toggle:function(){this[this._open?"close":"open"]()},_destroy:function(){var t,n=this.options,r=e("body > :mobile-panel").length+e.mobile.activePage.find(":mobile-panel").length>1;n.display!=="overlay"&&(t=e("body > :mobile-panel").add(e.mobile.activePage.find(":mobile-panel")),t.not(".ui-panel-display-overlay").not(this.element).length===0&&this._wrapper.children().unwrap(),this._open&&(this._fixedToolbars().removeClass(n.classes.pageContentPrefix+"-open"),e.support.cssTransform3d&&!!n.animate&&this._fixedToolbars().removeClass(n.classes.animate),this._page().parent().removeClass(n.classes.pageContainer),n.theme&&this._page().parent().removeClass(n.classes.pageContainer+"-themed "+n.classes.pageContainer+"-"+n.theme))),r||this.document.off("panelopen panelclose"),this._open&&this._page().jqmRemoveData("panel"),this._panelInner.children().unwrap(),this.element.removeClass([this._getPanelClasses(),n.classes.panelOpen,n.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"),this._modal&&this._modal.remove()}})}(e),function(e,t){function i(){var e=r.clone(),t=e.eq(0),n=e.eq(1),i=n.children();return{arEls:n.add(t),gd:t,ct:n,ar:i}}var n=e.mobile.browser.oldIE&&e.mobile.browser.oldIE<=8,r=e("<div class='ui-popup-arrow-guide'></div><div class='ui-popup-arrow-container"+(n?" ie":"")+"'>"+"<div class='ui-popup-arrow'></div>"+"</div>");e.widget("mobile.popup",e.mobile.popup,{options:{arrow:""},_create:function(){var e,t=this._super();return this.options.arrow&&(this._ui.arrow=e=this._addArrow()),t},_addArrow:function(){var e,t=this.options,n=i();return e=this._themeClassFromOption("ui-body-",t.theme),n.ar.addClass(e+(t.shadow?" ui-overlay-shadow":"")),n.arEls.hide().appendTo(this.element),n},_unenhance:function(){var e=this._ui.arrow;return e&&e.arEls.remove(),this._super()},_tryAnArrow:function(e,t,n,r,i){var s,o,u,a={},f={};if(r.arFull[e.dimKey]>r.guideDims[e.dimKey])return i;a[e.fst]=n[e.fst]+(r.arHalf[e.oDimKey]+r.menuHalf[e.oDimKey])*e.offsetFactor-r.contentBox[e.fst]+(r.clampInfo.menuSize[e.oDimKey]-r.contentBox[e.oDimKey])*e.arrowOffsetFactor,a[e.snd]=n[e.snd],s=r.result||this._calculateFinalLocation(a,r.clampInfo),o={x:s.left,y:s.top},f[e.fst]=o[e.fst]+r.contentBox[e.fst]+e.tipOffset,f[e.snd]=Math.max(s[e.prop]+r.guideOffset[e.prop]+r.arHalf[e.dimKey],Math.min(s[e.prop]+r.guideOffset[e.prop]+r.guideDims[e.dimKey]-r.arHalf[e.dimKey],n[e.snd])),u=Math.abs(n.x-f.x)+Math.abs(n.y-f.y);if(!i||u<i.diff)f[e.snd]-=r.arHalf[e.dimKey]+s[e.prop]+r.contentBox[e.snd],i={dir:t,diff:u,result:s,posProp:e.prop,posVal:f[e.snd]};return i},_getPlacementState:function(e){var t,n,r=this._ui.arrow,i={clampInfo:this._clampPopupWidth(!e),arFull:{cx:r.ct.width(),cy:r.ct.height()},guideDims:{cx:r.gd.width(),cy:r.gd.height()},guideOffset:r.gd.offset()};return t=this.element.offset(),r.gd.css({left:0,top:0,right:0,bottom:0}),n=r.gd.offset(),i.contentBox={x:n.left-t.left,y:n.top-t.top,cx:r.gd.width(),cy:r.gd.height()},r.gd.removeAttr("style"),i.guideOffset={left:i.guideOffset.left-t.left,top:i.guideOffset.top-t.top},i.arHalf={cx:i.arFull.cx/2,cy:i.arFull.cy/2},i.menuHalf={cx:i.clampInfo.menuSize.cx/2,cy:i.clampInfo.menuSize.cy/2},i},_placementCoords:function(t){var r,i,s,o,u,a=this.options.arrow,f=this._ui.arrow;return f?(f.arEls.show(),u={},r=this._getPlacementState(!0),s={l:{fst:"x",snd:"y",prop:"top",dimKey:"cy",oDimKey:"cx",offsetFactor:1,tipOffset:-r.arHalf.cx,arrowOffsetFactor:0},r:{fst:"x",snd:"y",prop:"top",dimKey:"cy",oDimKey:"cx",offsetFactor:-1,tipOffset:r.arHalf.cx+r.contentBox.cx,arrowOffsetFactor:1},b:{fst:"y",snd:"x",prop:"left",dimKey:"cx",oDimKey:"cy",offsetFactor:-1,tipOffset:r.arHalf.cy+r.contentBox.cy,arrowOffsetFactor:1},t:{fst:"y",snd:"x",prop:"left",dimKey:"cx",oDimKey:"cy",offsetFactor:1,tipOffset:-r.arHalf.cy,arrowOffsetFactor:0}},e.each((a===!0?"l,t,r,b":a).split(","),e.proxy(function(e,n){i=this._tryAnArrow(s[n],n,t,r,i)},this)),i?(f.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-"+i.dir).removeAttr("style").css(i.posProp,i.posVal).show(),n||(o=this.element.offset(),u[s[i.dir].fst]=f.ct.offset(),u[s[i.dir].snd]={left:o.left+r.contentBox.x,top:o.top+r.contentBox.y}),i.result):(f.arEls.hide(),this._super(t))):this._super(t)},_setOptions:function(e){var n,r=this.options.theme,i=this._ui.arrow,s=this._super(e);if(e.arrow!==t){if(!i&&e.arrow){this._ui.arrow=this._addArrow();return}i&&!e.arrow&&(i.arEls.remove(),this._ui.arrow=null)}return i=this._ui.arrow,i&&(e.theme!==t&&(r=this._themeClassFromOption("ui-body-",r),n=this._themeClassFromOption("ui-body-",e.theme),i.ar.removeClass(r).addClass(n)),e.shadow!==t&&i.ar.toggleClass("ui-overlay-shadow",e.shadow)),s},_destroy:function(){var e=this._ui.arrow;return e&&e.arEls.remove(),this._super()}})}(e),function(e,t){e.widget("mobile.table",{options:{classes:{table:"ui-table"},enhanced:!1},_create:function(){this.options.enhanced||this.element.addClass(this.options.classes.table),e.extend(this,{headers:t,allHeaders:t}),this._refresh(!0)},_setHeaders:function(){var e=this.element.find("thead tr");this.headers=this.element.find("tr:eq(0)").children(),this.allHeaders=this.headers.add(e.children())},refresh:function(){this._refresh()},rebuild:e.noop,_refresh:function(){var t=this.element,n=t.find("thead tr");this._setHeaders(),n.each(function(){var r=0;e(this).children().each(function(){var i=parseInt(this.getAttribute("colspan"),10),s=":nth-child("+(r+1)+")",o;this.setAttribute("data-"+e.mobile.ns+"colstart",r+1);if(i)for(o=0;o<i-1;o++)r++,s+=", :nth-child("+(r+1)+")";e(this).jqmData("cells",t.find("tr").not(n.eq(0)).not(this).children(s)),r++})})}})}(e),function(e,t){e.widget("mobile.table",e.mobile.table,{options:{mode:"columntoggle",columnBtnTheme:null,columnPopupTheme:null,columnBtnText:"Columns...",classes:e.extend(e.mobile.table.prototype.options.classes,{popup:"ui-table-columntoggle-popup",columnBtn:"ui-table-columntoggle-btn",priorityPrefix:"ui-table-priority-",columnToggleTable:"ui-table-columntoggle"})},_create:function(){this._super();if(this.options.mode!=="columntoggle")return;e.extend(this,{_menu:null}),this.options.enhanced?(this._menu=e(this.document[0].getElementById(this._id()+"-popup")).children().first(),this._addToggles(this._menu,!0)):(this._menu=this._enhanceColToggle(),this.element.addClass(this.options.classes.columnToggleTable)),this._setupEvents(),this._setToggleState()},_id:function(){return this.element.attr("id")||this.widgetName+this.uuid},_setupEvents:function(){this._on(this.window,{throttledresize:"_setToggleState"}),this._on(this._menu,{"change input":"_menuInputChange"})},_addToggles:function(t,n){var r,i=0,s=this.options,o=t.controlgroup("container");n?r=t.find("input"):o.empty(),this.headers.not("td").each(function(){var t,u,a=e(this),f=e.mobile.getAttribute(this,"priority");f&&(u=a.add(a.jqmData("cells")),u.addClass(s.classes.priorityPrefix+f),t=(n?r.eq(i++):e("<label><input type='checkbox' checked />"+(a.children("abbr").first().attr("title")||a.text())+"</label>").appendTo(o).children(0).checkboxradio({theme:s.columnPopupTheme})).jqmData("header",a).jqmData("cells",u),a.jqmData("input",t))}),n||t.controlgroup("refresh")},_menuInputChange:function(t){var n=e(t.target),r=n[0].checked;n.jqmData("cells").toggleClass("ui-table-cell-hidden",!r).toggleClass("ui-table-cell-visible",r)},_unlockCells:function(e){e.removeClass("ui-table-cell-hidden ui-table-cell-visible")},_enhanceColToggle:function(){var t,n,r,i,s=this.element,o=this.options,u=e.mobile.ns,a=this.document[0].createDocumentFragment();return t=this._id()+"-popup",n=e("<a href='#"+t+"' "+"class='"+o.classes.columnBtn+" ui-btn "+"ui-btn-"+(o.columnBtnTheme||"a")+" ui-corner-all ui-shadow ui-mini' "+"data-"+u+"rel='popup'>"+o.columnBtnText+"</a>"),r=e("<div class='"+o.classes.popup+"' id='"+t+"'></div>"),i=e("<fieldset></fieldset>").controlgroup(),this._addToggles(i,!1),i.appendTo(r),a.appendChild(r[0]),a.appendChild(n[0]),s.before(a),r.popup(),i},rebuild:function(){this._super(),this.options.mode==="columntoggle"&&this._refresh(!1)},_refresh:function(t){var n,r,i;this._super(t);if(!t&&this.options.mode==="columntoggle"){n=this.headers,r=[],this._menu.find("input").each(function(){var t=e(this),i=t.jqmData("header"),s=n.index(i[0]);s>-1&&!t.prop("checked")&&r.push(s)}),this._unlockCells(this.element.find(".ui-table-cell-hidden, .ui-table-cell-visible")),this._addToggles(this._menu,t);for(i=r.length-1;i>-1;i--)n.eq(r[i]).jqmData("input").prop("checked",!1).checkboxradio("refresh").trigger("change")}},_setToggleState:function(){this._menu.find("input").each(function(){var t=e(this);this.checked=t.jqmData("cells").eq(0).css("display")==="table-cell",t.checkboxradio("refresh")})},_destroy:function(){this._super()}})}(e),function(e,t){e.widget("mobile.table",e.mobile.table,{options:{mode:"reflow",classes:e.extend(e.mobile.table.prototype.options.classes,{reflowTable:"ui-table-reflow",cellLabels:"ui-table-cell-label"})},_create:function(){this._super();if(this.options.mode!=="reflow")return;this.options.enhanced||(this.element.addClass(this.options.classes.reflowTable),this._updateReflow())},rebuild:function(){this._super(),this.options.mode==="reflow"&&this._refresh(!1)},_refresh:function(e){this._super(e),!e&&this.options.mode==="reflow"&&this._updateReflow()},_updateReflow:function(){var t=this,n=this.options;e(t.allHeaders.get().reverse()).each(function(){var r=e(this).jqmData("cells"),i=e.mobile.getAttribute(this,"colstart"),s=r.not(this).filter("thead th").length&&" ui-table-cell-label-top",o=e(this).clone().contents(),u,a;o.length>0&&(s?(u=parseInt(this.getAttribute("colspan"),10),a="",u&&(a="td:nth-child("+u+"n + "+i+")"),t._addLabels(r.filter(a),n.classes.cellLabels+s,o)):t._addLabels(r,n.classes.cellLabels,o))})},_addLabels:function(t,n,r){r.length===1&&r[0].nodeName.toLowerCase()==="abbr"&&(r=r.eq(0).attr("title")),t.not(":has(b."+n+")").prepend(e("<b class='"+n+"'></b>").append(r))}})}(e),function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"fadf2b312a05040436451c64bbfaf4814bc62c56",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),n.active=this._initialActive(),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(n.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){r&&this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r)return t=n,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(t===null||t===-1)t=this.tabs.length?0:!1}return t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=n?!1:0)),!n&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();t==="fill"?(n=r.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})}(e),function(e,t){}(e)});
//= require ./bootstrap/transition
//= require ./bootstrap/alert
//= require ./bootstrap/button
//= require ./bootstrap/carousel
//= require ./bootstrap/collapse
//= require ./bootstrap/dropdown
//= require ./bootstrap/modal
//= require ./bootstrap/tab
//= require ./bootstrap/affix
//= require ./bootstrap/scrollspy
//= require ./bootstrap/tooltip
//= require ./bootstrap/popover

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
