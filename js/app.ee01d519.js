(function(e) {
    function d(d) {
        for (var t, _, i = d[0], r = d[1], n = d[2], f = 0, l = []; f < i.length; f++)
            _ = i[f],
            Object.prototype.hasOwnProperty.call(o, _) && o[_] && l.push(o[_][0]),
            o[_] = 0;
        for (t in r)
            Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        s && s(d);
        while (l.length)
            l.shift()();
        return c.push.apply(c, n || []),
        a()
    }
    function a() {
        for (var e, d = 0; d < c.length; d++) {
            for (var a = c[d], t = !0, i = 1; i < a.length; i++) {
                var r = a[i];
                0 !== o[r] && (t = !1)
            }
            t && (c.splice(d--, 1),
            e = _(_.s = a[0]))
        }
        return e
    }
    var t = {}
      , o = {
        app: 0
    }
      , c = [];
    function _(d) {
        if (t[d])
            return t[d].exports;
        var a = t[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return e[d].call(a.exports, a, a.exports, _),
        a.l = !0,
        a.exports
    }
    _.m = e,
    _.c = t,
    _.d = function(e, d, a) {
        _.o(e, d) || Object.defineProperty(e, d, {
            enumerable: !0,
            get: a
        })
    }
    ,
    _.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    _.t = function(e, d) {
        if (1 & d && (e = _(e)),
        8 & d)
            return e;
        if (4 & d && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (_.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & d && "string" != typeof e)
            for (var t in e)
                _.d(a, t, function(d) {
                    return e[d]
                }
                .bind(null, t));
        return a
    }
    ,
    _.n = function(e) {
        var d = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return _.d(d, "a", d),
        d
    }
    ,
    _.o = function(e, d) {
        return Object.prototype.hasOwnProperty.call(e, d)
    }
    ,
    _.p = "";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || []
      , r = i.push.bind(i);
    i.push = d,
    i = i.slice();
    for (var n = 0; n < i.length; n++)
        d(i[n]);
    var s = r;
    c.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, d, a) {
        e.exports = a("56d7")
    },
    "034f": function(e, d, a) {
        "use strict";
        var t = a("8a23")
          , o = a.n(t);
        o.a
    },
    "56d7": function(e, d, a) {
        "use strict";
        a.r(d);
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var t = a("2b0e")
          , o = function() {
            var e = this
              , d = e.$createElement
              , a = e._self._c || d;
            return a("v-app", [a("v-content", [a("v-container", {
                attrs: {
                    fluid: ""
                }
            }, [a("v-row", {
                attrs: {
                    align: "center",
                    justify: "center"
                }
            }, [a("v-col", {
                staticStyle: {
                    "max-width": "1150px"
                },
                attrs: {
                    cols: "12",
                    lg: "10"
                }
            }, [a("v-card", {
                attrs: {
                    outlined: ""
                }
            }, [a("v-card-title", {
                staticClass: "text-center justify-center py-6"
            }, [a("h1", {
                staticClass: "font-weight-bold display-3 basil--text"
            }, [e._v("Control 保存编辑器")]), a("h5", {
                staticStyle: {
                    width: "100%"
                }
            }, [e._v("by reg2k")])]), a("v-card-text", [null == this.saveData ? a("v-row", {
                attrs: {
                    align: "center",
                    justify: "center"
                }
            }, [a("Intro", {
                staticClass: "mb-6",
                on: {
                    file_select: e.fileSelected
                }
            })], 1) : e._e(), null != this.saveData ? [a("div", {
                staticClass: "d-inline-flex align-center"
            }, [a("v-file-input", {
                staticClass: "pr-5",
                staticStyle: {
                    width: "350px"
                },
                attrs: {
                    dense: "",
                    outlined: "",
                    "show-size": "",
                    "hide-details": "",
                    "prepend-icon": "mdi-file",
                    clearable: !1,
                    value: e.saveFile,
                    label: "Save file"
                },
                on: {
                    change: e.fileSelected
                }
            }), a("v-btn", {
                staticClass: "mx-2",
                attrs: {
                    disabled: !e.saveData.isModified
                },
                on: {
                    click: e.commit
                }
            }, [e._v("保存更改")]), a("v-dialog", {
                attrs: {
                    "max-width": "290"
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function(d) {
                        var t = d.on;
                        return [a("v-btn", e._g({
                            staticClass: "mx-2",
                            attrs: {
                                disabled: !e.saveData.isModified
                            }
                        }, t), [e._v("还原")])]
                    }
                }], null, !1, 2675607302),
                model: {
                    value: e.revertConfirmDialogShown,
                    callback: function(d) {
                        e.revertConfirmDialogShown = d
                    },
                    expression: "revertConfirmDialogShown"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [e._v("还原?")]), a("v-card-text", [e._v("是否放弃所有更改并返回到上次保存的文件？")]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "green darken-1",
                    text: ""
                },
                on: {
                    click: function(d) {
                        return e.revert(!1)
                    }
                }
            }, [e._v("取消")]), a("v-btn", {
                attrs: {
                    color: "green darken-1",
                    text: ""
                },
                on: {
                    click: function(d) {
                        return e.revert(!0)
                    }
                }
            }, [e._v("确认")])], 1)], 1)], 1)], 1), a("br"), a("br"), a("v-tabs", {
                attrs: {
                    vertical: ""
                }
            }, [a("v-tab", [e._v("玩家")]), a("v-tab", [e._v("库存")]), a("v-tab", [e._v("解锁")]), a("v-tab", [e._v("服装")]), a("v-tab", [e._v("存档转移")]), a("v-tab-item", [a("v-card", {
                attrs: {
                    flat: "",
                    width: "450px"
                }
            }, [a("v-card-title", [e._v("玩家统计")]), a("v-card-text", [a("v-row", [a("v-col", {
                attrs: {
                    cols: "6"
                }
            }, [a("ul", {
                staticClass: "rodata pa-0"
            }, [a("li", [a("label", [e._v("级别")]), e._v(e._s(e.saveData.data.ro_level))]), a("li", [a("label", [e._v("发现的收藏品")]), e._v(e._s(e.saveData.data.ro_numCollectiblesFound))]), a("li", [a("label", [e._v("花费的能力点")]), e._v(e._s(e.saveData.data.ro_numAbilityPointsSpent))]), a("li", [a("label", [e._v("已完成的任务")]), e._v(e._s(e.saveData.data.ro_numCompletedMissions))])])]), a("v-col", {
                attrs: {
                    cols: "6"
                }
            }, [a("v-text-field", {
                attrs: {
                    label: "金钱",
                    type: "number"
                },
                model: {
                    value: e.saveData.data.source.value,
                    callback: function(d) {
                        e.$set(e.saveData.data.source, "value", d)
                    },
                    expression: "saveData.data.source.value"
                }
            }), a("v-text-field", {
                attrs: {
                    label: "能力点",
                    type: "number"
                },
                model: {
                    value: e.saveData.data.abilityPoints.value,
                    callback: function(d) {
                        e.$set(e.saveData.data.abilityPoints, "value", d)
                    },
                    expression: "saveData.data.abilityPoints.value"
                }
            })], 1)], 1)], 1)], 1)], 1), a("v-tab-item", [a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-card-title", [e._v(" 玩家库存 "), a("v-spacer"), a("v-text-field", {
                attrs: {
                    "append-icon": "mdi-magnify",
                    label: "搜索",
                    "single-line": "",
                    "hide-details": "",
                    clearable: ""
                },
                model: {
                    value: e.inventorySearch,
                    callback: function(d) {
                        e.inventorySearch = d
                    },
                    expression: "inventorySearch"
                }
            })], 1), a("v-card-text", [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "items-per-page": 15,
                    headers: e.inventoryHeaders,
                    items: e.inventoryItems,
                    search: e.inventorySearch
                },
                scopedSlots: e._u([{
                    key: "top",
                    fn: function() {
                        return [a("v-dialog", {
                            attrs: {
                                "max-width": "500px"
                            },
                            model: {
                                value: e.inventoryEditDialog,
                                callback: function(d) {
                                    e.inventoryEditDialog = d
                                },
                                expression: "inventoryEditDialog"
                            }
                        }, [a("v-card", [a("v-card-title", {
                            staticClass: "headline"
                        }, [e._v("编辑项目")]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", {
                            attrs: {
                                cols: "12"
                            }
                        }, [a("v-text-field", {
                            attrs: {
                                disabled: "",
                                label: "名字"
                            },
                            model: {
                                value: e.inventoryEditItemData.name,
                                callback: function(d) {
                                    e.$set(e.inventoryEditItemData, "name", d)
                                },
                                expression: "inventoryEditItemData.name"
                            }
                        })], 1), a("v-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [a("v-text-field", {
                            attrs: {
                                disabled: !e.inventoryAllowIDChanges,
                                label: "GID"
                            },
                            model: {
                                value: e.inventoryEditItemData.gid,
                                callback: function(d) {
                                    e.$set(e.inventoryEditItemData, "gid", d)
                                },
                                expression: "inventoryEditItemData.gid"
                            }
                        })], 1), a("v-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [a("v-text-field", {
                            attrs: {
                                disabled: !e.inventoryAllowIDChanges,
                                type: "number",
                                label: "PID"
                            },
                            model: {
                                value: e.inventoryEditItemData.persistentId,
                                callback: function(d) {
                                    e.$set(e.inventoryEditItemData, "persistentId", d)
                                },
                                expression: "inventoryEditItemData.persistentId"
                            }
                        })], 1), a("v-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [a("v-text-field", {
                            attrs: {
                                label: "参数",
                                type: "number"
                            },
                            model: {
                                value: e.inventoryEditItemData.parameter,
                                callback: function(d) {
                                    e.$set(e.inventoryEditItemData, "parameter", d)
                                },
                                expression: "inventoryEditItemData.parameter"
                            }
                        })], 1), a("v-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [a("v-text-field", {
                            attrs: {
                                label: "数量",
                                type: "number"
                            },
                            model: {
                                value: e.inventoryEditItemData.quantity,
                                callback: function(d) {
                                    e.$set(e.inventoryEditItemData, "quantity", d)
                                },
                                expression: "inventoryEditItemData.quantity"
                            }
                        })], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-tooltip", {
                            attrs: {
                                right: ""
                            },
                            scopedSlots: e._u([{
                                key: "activator",
                                fn: function(d) {
                                    var t = d.on;
                                    return [a("v-checkbox", {
                                        staticClass: "pl-3",
                                        scopedSlots: e._u([{
                                            key: "label",
                                            fn: function() {
                                                return [a("span", e._g({}, t), [e._v("允许ID更改")])]
                                            },
                                            proxy: !0
                                        }], null, !0),
                                        model: {
                                            value: e.inventoryAllowIDChanges,
                                            callback: function(d) {
                                                e.inventoryAllowIDChanges = d
                                            },
                                            expression: "inventoryAllowIDChanges"
                                        }
                                    })]
                                }
                            }], null, !1, 4153307900)
                        }, [a("span", [e._v("只有在知道自己在做什么的情况下才能更改ID!")])]), a("v-spacer"), a("v-btn", {
                            attrs: {
                                color: "blue darken-1",
                                text: ""
                            },
                            on: {
                                click: function(d) {
                                    e.inventoryEditDialog = !1
                                }
                            }
                        }, [e._v("取消")]), a("v-btn", {
                            attrs: {
                                color: "blue darken-1",
                                text: ""
                            },
                            on: {
                                click: e.saveInvItemChanges
                            }
                        }, [e._v("保存")])], 1)], 1)], 1)]
                    },
                    proxy: !0
                }, {
                    key: "item.actions",
                    fn: function(d) {
                        var t = d.item;
                        return [a("v-icon", {
                            staticClass: "mr-2",
                            attrs: {
                                small: ""
                            },
                            on: {
                                click: function(d) {
                                    return e.editInvItem(t)
                                }
                            }
                        }, [e._v(" mdi-pencil ")]), a("v-icon", {
                            attrs: {
                                small: ""
                            },
                            on: {
                                click: function(d) {
                                    return e.deleteInvItem(t)
                                }
                            }
                        }, [e._v(" mdi-delete ")])]
                    }
                }], null, !1, 3507594318)
            })], 1)], 1)], 1), a("v-tab-item", [a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-card-title", [e._v(" 解锁 "), a("v-spacer"), a("v-text-field", {
                attrs: {
                    "append-icon": "mdi-magnify",
                    label: "搜索",
                    "single-line": "",
                    "hide-details": "",
                    clearable: ""
                },
                model: {
                    value: e.inventorySearch,
                    callback: function(d) {
                        e.inventorySearch = d
                    },
                    expression: "inventorySearch"
                }
            })], 1), a("v-card-text", [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "items-per-page": 15,
                    headers: e.activePersistingItemHeaders,
                    items: e.inventoryActivePersistingItems,
                    search: e.inventorySearch
                }
            })], 1)], 1)], 1), a("v-tab-item", [a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-card-title", [e._v("玩家装备")]), a("v-card-text", [a("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                    "items-per-page": 15,
                    headers: e.outfitHeaders,
                    items: e.outfits
                },
                scopedSlots: e._u([{
                    key: "item.unlocked",
                    fn: function(d) {
                        var t = d.item;
                        return [a("v-simple-checkbox", {
                            attrs: {
                                ripple: !1,
                                value: t.unlocked
                            },
                            on: {
                                input: function(d) {
                                    return e.setOutfitUnlockState(t, !t.unlocked)
                                }
                            }
                        })]
                    }
                }], null, !1, 3603083579)
            })], 1)], 1)], 1), a("v-tab-item", [a("SaveTransfer", {
                attrs: {
                    saveData: e.saveData,
                    saveFile: e.saveFile
                }
            })], 1)], 1)] : e._e()], 2)], 1)], 1)], 1), e.shouldIncludeCounter ? a("v-row", {
                attrs: {
                    align: "center",
                    justify: "center"
                }
            }, [a("img", {
                attrs: {
                    src: "https://www.cutercounter.com/hits.php?id=hmxxxqaf&nd=6&style=1",
                    border: "0"
                }
            })]) : e._e()], 1), a("v-dialog", {
                attrs: {
                    width: "unset",
                    scrollable: ""
                },
                model: {
                    value: e.showModal,
                    callback: function(d) {
                        e.showModal = d
                    },
                    expression: "showModal"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [e._v(e._s(e.modalTitle))]), a("v-card-text", [a("div", [e._v("Error details:")]), a("pre", [e._v(e._s(e.modalText))])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "green darken-1",
                    text: ""
                },
                on: {
                    click: function(d) {
                        e.showModal = !1
                    }
                }
            }, [e._v(" OK ")])], 1)], 1)], 1)], 1)], 1)
        }
          , c = []
          , _ = (a("99af"),
        a("4de4"),
        a("7db0"),
        a("c740"),
        a("caad"),
        a("c975"),
        a("d81d"),
        a("b0c0"),
        a("d3b7"),
        a("25f0"),
        a("2532"),
        function() {
            var e = this
              , d = e.$createElement
              , a = e._self._c || d;
            return a("v-card", {
                attrs: {
                    loading: e.loadingSampleSave
                }
            }, [a("v-card-title", {
                staticClass: "justify-center"
            }, [e._v("Welcome!")]), a("v-card-text", [a("p", [e._v("此工具允许您修改Control游戏存档.")]), a("p", [e._v("用户指南: "), a("a", {
                attrs: {
                    href: "https://www.nexusmods.com/control/mods/26",
                    target: "_blank"
                }
            }, [e._v("https://www.nexusmods.com/control/mods/26")])]), a("p", [e._v("使用此工具前请备份您的存档!")]), a("p", [e._v("要开始，请选择 "), a("strong", [e._v("persistent.chunk")]), e._v(" 存档文件，或加载 "), a("a", {
                on: {
                    click: e.loadSampleSave
                }
            }, [e._v("示例存档")]), e._v(".")]), a("v-file-input", {
                staticClass: "pt-1 pr-5",
                attrs: {
                    dense: "",
                    outlined: "",
                    "show-size": "",
                    "prepend-icon": "mdi-file",
                    label: "选择存档文件"
                },
                on: {
                    change: e.$listeners.file_select
                }
            })], 1)], 1)
        }
        )
          , i = []
          , r = {
            data: function() {
                return {
                    loadingSampleSave: !1
                }
            },
            methods: {
                loadSampleSave: function() {
                    var e = this;
                    this.loadingSampleSave ? console.warn("已加载存档") : (this.loadingSampleSave = !0,
                    console.log("Loading sample save..."),
                        fetch("samples/persistent.chunk").then((function(e) {
                        return e.blob()
                    }
                    )).then((function(d) {
                        var a = new File([d],"persistent.chunk");
                        e.$emit("file_select", a)
                    }
                    )).catch((function(e) {
                        console.error("无法加载示例存档.", e)
                    }
                    )).finally((function() {
                        e.loadingSampleSave = !1
                    }
                    )))
                }
            }
        }
          , n = r
          , s = a("2877")
          , f = a("6544")
          , l = a.n(f)
          , b = a("b0af")
          , m = a("99d9")
          , p = a("23a7")
          , u = Object(s["a"])(n, _, i, !1, null, null, null)
          , w = u.exports;
        l()(u, {
            VCard: b["a"],
            VCardText: m["b"],
            VCardTitle: m["c"],
            VFileInput: p["a"]
        });
        var g = function() {
            var e = this
              , d = e.$createElement
              , a = e._self._c || d;
            return a("div", [a("v-card", {
                attrs: {
                    flat: ""
                }
            }, [a("v-card-title", [e._v("存档数据转移")]), a("v-card-text", [a("div", {
                staticClass: "d-inline-flex align-center"
            }, [a("v-file-input", {
                staticClass: "pr-2",
                staticStyle: {
                    width: "250px"
                },
                attrs: {
                    dense: "",
                    outlined: "",
                    "show-size": "",
                    "hide-details": "",
                    disabled: "",
                    "prepend-icon": "",
                    clearable: !1,
                    value: e.saveFile,
                    label: "目标存档"
                }
            }), a("v-file-input", {
                staticStyle: {
                    width: "280px"
                },
                attrs: {
                    dense: "",
                    outlined: "",
                    "show-size": "",
                    "hide-details": "",
                    "prepend-icon": "mdi-arrow-left-circle",
                    clearable: !1,
                    label: "选择源存档"
                },
                on: {
                    change: function(d) {
                        return e.fileSelected(d, !0)
                    }
                }
            })], 1), a("v-row", [a("v-col", {
                attrs: {
                    cols: "auto"
                }
            }, [a("v-card", {
                attrs: {
                    width: "100%",
                    height: "100%"
                }
            }, [a("v-card-title", [e._v("转移选项")]), a("v-card-text", [a("v-switch", {
                attrs: {
                    label: "装备",
                    "hide-details": ""
                },
                model: {
                    value: e.transferTypes.outfits,
                    callback: function(d) {
                        e.$set(e.transferTypes, "outfits", d)
                    },
                    expression: "transferTypes.outfits"
                }
            }), a("v-switch", {
                attrs: {
                    label: "库存",
                    "hide-details": ""
                },
                model: {
                    value: e.transferTypes.inventory,
                    callback: function(d) {
                        e.$set(e.transferTypes, "inventory", d)
                    },
                    expression: "transferTypes.inventory"
                }
            }), a("v-switch", {
                attrs: {
                    label: "金钱",
                    "hide-details": ""
                },
                model: {
                    value: e.transferTypes.source,
                    callback: function(d) {
                        e.$set(e.transferTypes, "source", d)
                    },
                    expression: "transferTypes.source"
                }
            }), a("v-switch", {
                attrs: {
                    label: "能力点",
                    "hide-details": ""
                },
                model: {
                    value: e.transferTypes.abilityPoints,
                    callback: function(d) {
                        e.$set(e.transferTypes, "abilityPoints", d)
                    },
                    expression: "transferTypes.abilityPoints"
                }
            })], 1)], 1)], 1), a("v-col", {
                attrs: {
                    cols: "auto"
                }
            }, [a("v-card", {
                attrs: {
                    width: "100%",
                    height: "100%"
                }
            }, [a("v-card-title", [e._v("转移预览")]), a("v-card-text", [e.transferTypes.outfits ? a("p", [a("b", [e._v("装备")]), a("ul", [a("li", [e._v("现存: " + e._s(e.destSaveData ? e.dstOutfitData.numUnlocked + "/" + e.dstOutfitData.numTotal : "NA") + " 解锁")]), a("li", [e._v("新增: " + e._s(e.sourceSaveData ? e.srcOutfitData.numUnlocked + "/" + e.srcOutfitData.numTotal : "NA") + " 解锁")])])]) : e._e(), e.transferTypes.inventory ? a("p", [a("b", [e._v("库存")]), a("ul", [a("li", [e._v("现存: " + e._s(e.destSaveData ? e.destSaveData.data.inventoryItems.length : "NA") + " 库存物品")]), a("li", [e._v("新增: " + e._s(e.sourceSaveData ? e.sourceSaveData.data.inventoryItems.length : "NA") + " 库存物品")])])]) : e._e(), e.transferTypes.source ? a("p", [a("b", [e._v("金钱")]), a("ul", [a("li", [e._v("现存: " + e._s(e.destSaveData ? e.destSaveData.data.source.value : "NA"))]), a("li", [e._v("新增: " + e._s(e.sourceSaveData ? e.sourceSaveData.data.source.value : "NA"))])])]) : e._e(), e.transferTypes.abilityPoints ? a("p", [a("b", [e._v("能力点")]), a("ul", [a("li", [e._v("现存: " + e._s(e.destSaveData ? e.destSaveData.data.abilityPoints.value : "NA"))]), a("li", [e._v("新增: " + e._s(e.sourceSaveData ? e.sourceSaveData.data.abilityPoints.value : "NA"))])])]) : e._e(), e.transferTypes.unlocks ? a("p", [a("b", [e._v("开启")]), a("ul", [a("li", [e._v("现有：待定解锁项目")]), a("li", [e._v("新增：待定解锁项目")])])]) : e._e()])], 1)], 1)], 1), a("v-btn", {
                attrs: {
                    disabled: !e.canTransfer
                },
                on: {
                    click: e.transfer
                }
            }, [e._v("转移")])], 1)], 1), a("v-dialog", {
                attrs: {
                    width: "unset",
                    scrollable: ""
                },
                model: {
                    value: e.showModal,
                    callback: function(d) {
                        e.showModal = d
                    },
                    expression: "showModal"
                }
            }, [a("v-card", [a("v-card-title", {
                staticClass: "headline"
            }, [e._v(e._s(e.modalTitle))]), a("v-card-text", [a("div", [e._v("Error details:")]), a("pre", [e._v(e._s(e.modalText))])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "green darken-1",
                    text: ""
                },
                on: {
                    click: function(d) {
                        e.showModal = !1
                    }
                }
            }, [e._v(" OK ")])], 1)], 1)], 1)], 1)
        }
          , h = []
          , v = (a("4160"),
        a("159b"),
        a("fb6a"),
        a("a434"),
        a("c19f"),
        a("a9e3"),
        a("dca8"),
        a("5cc6"),
        a("9a8c"),
        a("a975"),
        a("735e"),
        a("c1ac"),
        a("d139"),
        a("3a7b"),
        a("d5d6"),
        a("82f8"),
        a("e91f"),
        a("60bd"),
        a("5f96"),
        a("3280"),
        a("3fcc"),
        a("ca91"),
        a("25a1"),
        a("cd26"),
        a("3c5d"),
        a("2954"),
        a("649e"),
        a("219c"),
        a("170b"),
        a("b39a"),
        a("72f7"),
        a("1341"))
          , y = a("257e")
          , x = a("7e84")
          , k = a("45eb")
          , M = a("262e")
          , S = a("2caf")
          , D = a("4478")
          , E = a("b85c")
          , P = a("d4ec")
          , R = a("bee2")
          , C = a("ade3")
          , j = a("702d")
          , O = a.n(j)
          , W = function() {
            function e(d) {
                Object(P["a"])(this, e),
                Object(C["a"])(this, "_save_kt", null),
                Object(C["a"])(this, "_components", []),
                Object(C["a"])(this, "_regionManager", void 0),
                Object(C["a"])(this, "versionData", void 0),
                Object(C["a"])(this, "data", {
                    playerPropertiesChunk: this._createComponent(V),
                    abilityPoints: this._createComponent(L),
                    source: this._createComponent(T),
                    uiTagManager: this._createComponent(F, J),
                    ro_level: null,
                    ro_numCollectiblesFound: null,
                    ro_numAbilityPointsSpent: null,
                    ro_numCompletedMissions: null,
                    inventoryChunk: this._createComponent(V),
                    inventoryItems: this._createComponent(F, K),
                    inventoryActivePersistingItems: this._createComponent(F, $),
                    inventoryActiveItems: this._createComponent(F, Y),
                    outfitsChunk: this._createComponent(V),
                    outfits: this._createComponent(F, Z)
                }),
                this._save_kt = Object.freeze(d),
                this._regionManager = new z([new B(0,this.getBuffer().byteLength)]),
                this._populateData()
            }
            return Object(R["a"])(e, [{
                key: "commit",
                value: function() {
                    console.log("requested commit");
                    var e = this._save_kt._io.buffer
                      , d = new ArrayBuffer(e.byteLength);
                    new Uint8Array(d).set(new Uint8Array(e));
                    var a, t = Object(E["a"])(this._components);
                    try {
                        for (t.s(); !(a = t.n()).done; ) {
                            var o = a.value;
                            o.isDirty && (o.commitsInPlaceData && o.commit(d),
                            o.commitRegions && o.commitRegions(this._regionManager))
                        }
                    } catch (i) {
                        t.e(i)
                    } finally {
                        t.f()
                    }
                    this._regionManager.isModified && (d = this._regionManager.commit(d));
                    var c = new Uint8Array(d.slice(12))
                      , _ = O.a.buf(c);
                    return console.log("CRC32:", (_ >>> 0).toString(16).toUpperCase()),
                    new DataView(d).setUint32(8, _, !0),
                    console.log("Commit complete."),
                    d
                }
            }, {
                key: "getBuffer",
                value: function() {
                    return this._save_kt._io.buffer
                }
            }, {
                key: "_populateData",
                value: function() {
                    var e, d = this.data;
                    d.playerPropertiesChunk.initArray(this._save_kt, "chunks", 4),
                    d.outfitsChunk.initArray(this._save_kt, "chunks", 8),
                    d.inventoryChunk.initArray(this._save_kt, "chunks", 9),
                    this.versionData = new G((e = {},
                    Object(C["a"])(e, G.MISSION_MANAGER, this._save_kt.chunks[1].data.versionData.objectVersion),
                    Object(C["a"])(e, G.PLAYER_PROPERTIES, this._getObjectVersion(d.playerPropertiesChunk)),
                    Object(C["a"])(e, G.OUTFITS, this._getObjectVersion(d.outfitsChunk)),
                    Object(C["a"])(e, G.INVENTORY, this._getObjectVersion(d.inventoryChunk)),
                    e)),
                    this._registerMonitoredChunk(d.playerPropertiesChunk),
                    this._registerMonitoredChunk(d.outfitsChunk),
                    this._registerMonitoredChunk(d.inventoryChunk);
                    var a = this._save_kt.chunks[1].data
                      , t = this._save_kt.chunks[4].data;
                    d.abilityPoints.init(t, "abilityPoints"),
                    d.source.init(t, "source"),
                    d.uiTagManager.init(t, "uiTagManagerTags"),
                    d.ro_level = t.level.value,
                    d.ro_numCollectiblesFound = t.foundNarrativeObjects.numItems,
                    d.ro_numAbilityPointsSpent = t.abilityPointsSpent,
                    d.ro_numCompletedMissions = a.missions.filter((function(e) {
                        return 2 === e.missionState && !e.isAlert
                    }
                    )).length;
                    var o = this._save_kt.chunks[9].data;
                    d.inventoryItems.init(o, "itemData"),
                    d.inventoryActivePersistingItems.init(o, "activePersistingItems"),
                    d.inventoryActiveItems.init(o, "activeItemData");
                    var c = this._save_kt.chunks[8].data;
                    d.outfits.init(c, "outfits")
                }
            }, {
                key: "_createComponent",
                value: function(e) {
                    for (var d = arguments.length, a = new Array(d > 1 ? d - 1 : 0), t = 1; t < d; t++)
                        a[t - 1] = arguments[t];
                    var o = Object(D["a"])(e, [this._components].concat(a));
                    return o
                }
            }, {
                key: "_registerMonitoredChunk",
                value: function(e) {
                    this.regionManager.registerMonitoredRange(e.sizeAddr, e.dataStart, e.addrEnd)
                }
            }, {
                key: "_getObjectVersion",
                value: function(e) {
                    var d = e.ktValue.data;
                    return d.hasOwnProperty("versionData") && (d = d.versionData),
                    d.hasOwnProperty("objectVersion") ? d.objectVersion : null
                }
            }, {
                key: "regionManager",
                get: function() {
                    return this._regionManager
                }
            }, {
                key: "isModified",
                get: function() {
                    return this._components.length > 0 || !!this._regionManager.isModified
                }
            }], [{
                key: "parseFile",
                value: function(e) {
                    var d = this;
                    return e.arrayBuffer().then((function(e) {
                        return d.parseBuffer(e)
                    }
                    ))
                }
            }, {
                key: "parseBuffer",
                value: function(d) {
                    var a = window
                      , t = a.KaitaiStream
                      , o = a.ControlSave
                      , c = new o(new t(d));
                    return c._read(),
                    new e(c)
                }
            }]),
            e
        }()
          , q = function() {
            function e(d) {
                Object(P["a"])(this, e),
                Object(C["a"])(this, "isDirty", !1),
                Object(C["a"])(this, "initialized", !1),
                Object(C["a"])(this, "ktParent", void 0),
                Object(C["a"])(this, "ktKey", void 0),
                Object(C["a"])(this, "_dirtiedComponentsArr", void 0),
                Object(C["a"])(this, "_insertedIntoDirtiedArr", void 0),
                Object(C["a"])(this, "parentContainer", null),
                Object(C["a"])(this, "requiresReparse", void 0),
                Object(C["a"])(this, "commitsInPlaceData", !0),
                Object(C["a"])(this, "commitsRegions", !1),
                Object(C["a"])(this, "originalValue", null),
                Object(C["a"])(this, "_value", null),
                Object(C["a"])(this, "_ktValueOverride", void 0),
                Object(C["a"])(this, "_ktDebugOverride", void 0),
                this._dirtiedComponentsArr = d
            }
            return Object(R["a"])(e, [{
                key: "init",
                value: function(e, d) {
                    this.ktParent = e,
                    this.ktKey = d,
                    this.isDirty = !1,
                    this.initialized = !0
                }
            }, {
                key: "initArray",
                value: function(e, d, a) {
                    this.init(e, d),
                    this._ktValueOverride = e[d][a],
                    this._ktDebugOverride = e._debug[d].arr[a]
                }
            }, {
                key: "markDirtied",
                value: function(e) {
                    e && !this._insertedIntoDirtiedArr && (this._insertedIntoDirtiedArr = !0,
                    this._dirtiedComponentsArr.push(this)),
                    this.isDirty = e
                }
            }, {
                key: "value",
                get: function() {
                    return this._value
                },
                set: function(e) {
                    this.originalValue === e ? this.markDirtied(!1) : this.markDirtied(!0),
                    this._value = e
                }
            }, {
                key: "ktValue",
                get: function() {
                    return null != this._ktValueOverride ? this._ktValueOverride : this.ktParent[this.ktKey]
                }
            }, {
                key: "ktDebug",
                get: function() {
                    return null != this._ktDebugOverride ? this._ktDebugOverride : this.ktParent._debug[this.ktKey]
                }
            }, {
                key: "addrStart",
                get: function() {
                    return this.ktDebug.ioOffset + this.ktDebug.start
                }
            }, {
                key: "addrEnd",
                get: function() {
                    return this.ktDebug.ioOffset + this.ktDebug.end
                }
            }, {
                key: "itemSize",
                get: function() {
                    return this.addrEnd - this.addrStart
                }
            }, {
                key: "rawBuffer",
                get: function() {
                    return this.ktParent._io.buffer
                }
            }, {
                key: "rawData",
                get: function() {
                    return new Uint8Array(this.ktParent._io.buffer,this.addrStart,this.itemSize)
                }
            }]),
            e
        }()
          , I = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                var e;
                Object(P["a"])(this, a);
                for (var t = arguments.length, o = new Array(t), c = 0; c < t; c++)
                    o[c] = arguments[c];
                return e = d.call.apply(d, [this].concat(o)),
                Object(C["a"])(Object(y["a"])(e), "requiresReparse", !1),
                Object(C["a"])(Object(y["a"])(e), "commitsInPlaceData", !0),
                Object(C["a"])(Object(y["a"])(e), "size", void 0),
                e
            }
            return Object(R["a"])(a, [{
                key: "init",
                value: function() {
                    for (var e, d = arguments.length, t = new Array(d), o = 0; o < d; o++)
                        t[o] = arguments[o];
                    (e = Object(k["a"])(Object(x["a"])(a.prototype), "init", this)).call.apply(e, [this].concat(t)),
                    this.originalValue = this._value = this.ktValue
                }
            }, {
                key: "commit",
                value: function(e) {
                    if (null == this.addrStart)
                        throw console.error("ERROR: No address for component", this),
                        "No address for component";
                    this.view = new DataView(e)
                }
            }]),
            a
        }(q)
          , L = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                var e;
                Object(P["a"])(this, a);
                for (var t = arguments.length, o = new Array(t), c = 0; c < t; c++)
                    o[c] = arguments[c];
                return e = d.call.apply(d, [this].concat(o)),
                Object(C["a"])(Object(y["a"])(e), "size", 4),
                e
            }
            return Object(R["a"])(a, [{
                key: "commit",
                value: function(e) {
                    Object(k["a"])(Object(x["a"])(a.prototype), "commit", this).call(this, e),
                    this.view.setUint32(this.addrStart, this.value, !0)
                }
            }, {
                key: "value",
                get: function() {
                    return Object(k["a"])(Object(x["a"])(a.prototype), "value", this)
                },
                set: function(e) {
                    Object(v["a"])(Object(x["a"])(a.prototype), "value", parseInt(e) || 0, this, !0)
                }
            }]),
            a
        }(I)
          , A = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                var e;
                Object(P["a"])(this, a);
                for (var t = arguments.length, o = new Array(t), c = 0; c < t; c++)
                    o[c] = arguments[c];
                return e = d.call.apply(d, [this].concat(o)),
                Object(C["a"])(Object(y["a"])(e), "size", 4),
                e
            }
            return Object(R["a"])(a, [{
                key: "commit",
                value: function(e) {
                    Object(k["a"])(Object(x["a"])(a.prototype), "commit", this).call(this, e),
                    this.view.setFloat32(this.addrStart, this.value, !0)
                }
            }, {
                key: "value",
                get: function() {
                    return Object(k["a"])(Object(x["a"])(a.prototype), "value", this)
                },
                set: function(e) {
                    Object(v["a"])(Object(x["a"])(a.prototype), "value", Number(e) || 0, this, !0)
                }
            }]),
            a
        }(I)
          , T = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                var e;
                Object(P["a"])(this, a);
                for (var t = arguments.length, o = new Array(t), c = 0; c < t; c++)
                    o[c] = arguments[c];
                return e = d.call.apply(d, [this].concat(o)),
                Object(C["a"])(Object(y["a"])(e), "size", 8),
                e
            }
            return Object(R["a"])(a, [{
                key: "commit",
                value: function(e) {
                    Object(k["a"])(Object(x["a"])(a.prototype), "commit", this).call(this, e),
                    this.view.setBigInt64(this.addrStart, this.value, !0)
                }
            }, {
                key: "value",
                get: function() {
                    return Object(k["a"])(Object(x["a"])(a.prototype), "value", this)
                },
                set: function(e) {
                    Object(v["a"])(Object(x["a"])(a.prototype), "value", BigInt(e), this, !0)
                }
            }]),
            a
        }(I)
          , V = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                var e;
                Object(P["a"])(this, a);
                for (var t = arguments.length, o = new Array(t), c = 0; c < t; c++)
                    o[c] = arguments[c];
                return e = d.call.apply(d, [this].concat(o)),
                Object(C["a"])(Object(y["a"])(e), "requiresReparse", !0),
                Object(C["a"])(Object(y["a"])(e), "_sizeFieldOffset", 8),
                Object(C["a"])(Object(y["a"])(e), "_dataOffset", 12),
                e
            }
            return Object(R["a"])(a, [{
                key: "sizeAddr",
                get: function() {
                    return this.addrStart + this._sizeFieldOffset
                }
            }, {
                key: "dataStart",
                get: function() {
                    return this.addrStart + this._dataOffset
                }
            }, {
                key: "dataEnd",
                get: function() {
                    return this.addrEnd
                }
            }, {
                key: "rawData",
                get: function() {
                    return new Uint8Array(this.rawBuffer,this.dataStart,this.dataEnd - this.dataStart)
                }
            }]),
            a
        }(q)
          , F = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a(e, t) {
                var o;
                return Object(P["a"])(this, a),
                o = d.call(this, e),
                Object(C["a"])(Object(y["a"])(o), "requiresReparse", !0),
                Object(C["a"])(Object(y["a"])(o), "commitsInPlaceData", !0),
                Object(C["a"])(Object(y["a"])(o), "commitsRegions", !0),
                Object(C["a"])(Object(y["a"])(o), "data", []),
                Object(C["a"])(Object(y["a"])(o), "length", void 0),
                Object(C["a"])(Object(y["a"])(o), "typeClass", void 0),
                Object(C["a"])(Object(y["a"])(o), "modifications", {
                    remove: [],
                    add: []
                }),
                o.typeClass = t,
                o
            }
            return Object(R["a"])(a, [{
                key: "init",
                value: function() {
                    for (var e, d = arguments.length, t = new Array(d), o = 0; o < d; o++)
                        t[o] = arguments[o];
                    (e = Object(k["a"])(Object(x["a"])(a.prototype), "init", this)).call.apply(e, [this].concat(t));
                    var c, _ = this.ktValue, i = Object(E["a"])(_);
                    try {
                        for (i.s(); !(c = i.n()).done; ) {
                            var r = c.value
                              , n = new this.typeClass(r,this._dirtiedComponentsArr);
                            this.data.push(n)
                        }
                    } catch (s) {
                        i.e(s)
                    } finally {
                        i.f()
                    }
                    this.length = this.data.length
                }
            }, {
                key: "getRawDataAt",
                value: function(e) {
                    var d = this.getKtDebugAt(e)
                      , a = d.ioOffset + d.start
                      , t = d.end - d.start;
                    return new Uint8Array(this.rawBuffer,a,t)
                }
            }, {
                key: "getKtDebugAt",
                value: function(e) {
                    return this.ktDebug.arr[e]
                }
            }, {
                key: "push",
                value: function(e) {
                    this.markDirtied(!0);
                    var d = {
                        addr: this.ktDebug.ioOffset + this.ktDebug.end,
                        data: e
                    };
                    this.modifications.add.push(d),
                    this.length++
                }
            }, {
                key: "remove",
                value: function(e) {
                    this.modifications.remove.includes(e) || (this.markDirtied(!0),
                    this.modifications.remove.push(e),
                    this.length--)
                }
            }, {
                key: "commitRegions",
                value: function(e) {
                    var d, a = Object(E["a"])(this.modifications.add);
                    try {
                        for (a.s(); !(d = a.n()).done; ) {
                            var t = d.value;
                            e.addRegion(t.addr, t.data)
                        }
                    } catch (s) {
                        a.e(s)
                    } finally {
                        a.f()
                    }
                    var o, c = Object(E["a"])(this.modifications.remove);
                    try {
                        for (c.s(); !(o = c.n()).done; ) {
                            var _ = o.value
                              , i = this.getKtDebugAt(_)
                              , r = i.ioOffset + i.start
                              , n = i.ioOffset + i.end;
                            e.removeRegion(r, n)
                        }
                    } catch (s) {
                        c.e(s)
                    } finally {
                        c.f()
                    }
                }
            }, {
                key: "commit",
                value: function(e) {
                    this.isDirty && new DataView(e).setUint32(this.addrStart, this.length, !0)
                }
            }, {
                key: "addrStart",
                get: function() {
                    return Object(k["a"])(Object(x["a"])(a.prototype), "addrStart", this) - 4
                }
            }]),
            a
        }(q)
          , z = function() {
            function e(d) {
                Object(P["a"])(this, e),
                Object(C["a"])(this, "_regions", []),
                Object(C["a"])(this, "isModified", !1),
                Object(C["a"])(this, "_sizeMonitoredRanges", []),
                d instanceof Array && (this._regions = d)
            }
            return Object(R["a"])(e, [{
                key: "addRegion",
                value: function(e, d) {
                    this.isModified = !0;
                    for (var a = 0; a < this._regions.length; a++) {
                        var t = this._regions[a];
                        if (t instanceof B && e >= t.addrStart && e <= t.addrEnd) {
                            var o, c = new B(t.addrStart,e), _ = new N(d), i = new B(e,t.addrEnd), r = [_];
                            return c.length > 0 && r.unshift(c),
                            i.length > 0 && r.push(i),
                            void (o = this._regions).splice.apply(o, [a, 1].concat(r))
                        }
                    }
                    throw "RegionManager::addRegion - Failed to insert ".concat(d.byteLength, " bytes at offset ").concat(e)
                }
            }, {
                key: "removeRegion",
                value: function(e, d) {
                    this.isModified = !0;
                    for (var a = 0; a < this._regions.length; a++) {
                        var t = this._regions[a];
                        if (t instanceof B && e >= t.addrStart && d <= t.addrEnd) {
                            var o, c = new B(t.addrStart,e), _ = new B(d,t.addrEnd), i = [];
                            return c.length > 0 && i.push(c),
                            _.length > 0 && i.push(_),
                            void (o = this._regions).splice.apply(o, [a, 1].concat(i))
                        }
                    }
                    throw "RegionManager::removeRegion - Failed to remove region with range [".concat(e, ", ").concat(d, ")")
                }
            }, {
                key: "replaceRegion",
                value: function(e, d, a) {
                    this.addRegion(e, a),
                    this.removeRegion(e, d)
                }
            }, {
                key: "registerMonitoredRange",
                value: function(e, d, a) {
                    this._sizeMonitoredRanges.push({
                        sizeAddr: e,
                        addrStart: d,
                        addrEnd: a
                    })
                }
            }, {
                key: "querySize",
                value: function(e, d) {
                    for (var a = 0; a < this._regions.length; a++) {
                        var t = this._regions[a];
                        if (t instanceof B && e >= t.addrStart && e <= t.addrEnd) {
                            if (d <= t.addrEnd)
                                return d - e;
                            for (var o = a; o < this._regions.length; o++) {
                                var c = this._regions[o];
                                if (c instanceof B && d >= c.addrStart && d <= c.addrEnd) {
                                    var _ = 0;
                                    _ += t.addrEnd - e;
                                    for (var i = a + 1; i < o; i++) {
                                        var r = this._regions[i];
                                        _ += r.length
                                    }
                                    return _ += d - c.addrStart,
                                    _
                                }
                            }
                            throw "RegionManager::querySize - Failed to find ending region for range ".concat(e, "-").concat(d)
                        }
                    }
                    throw "RegionManager::querySize - Failed to find starting region for range ".concat(e, "-").concat(d)
                }
            }, {
                key: "commit",
                value: function(e) {
                    var d, a = new DataView(e), t = Object(E["a"])(this._sizeMonitoredRanges);
                    try {
                        for (t.s(); !(d = t.n()).done; ) {
                            var o = d.value;
                            console.log("Examining monitored range: ".concat(o.addrStart, " to ").concat(o.addrEnd));
                            var c = a.getUint32(o.sizeAddr, !0)
                              , _ = this.querySize(o.addrStart, o.addrEnd);
                            c !== _ && (console.log(this._regions),
                            console.log("RegionManager: Monitored range (".concat(o.addrStart, " - ").concat(o.addrEnd, ") with size addr ").concat(o.sizeAddr, " has changed size from ").concat(c, " to ").concat(_, ".")),
                            a.setUint32(o.sizeAddr, _, !0))
                        }
                    } catch (w) {
                        t.e(w)
                    } finally {
                        t.f()
                    }
                    var i, r = 0, n = Object(E["a"])(this._regions);
                    try {
                        for (n.s(); !(i = n.n()).done; ) {
                            var s = i.value;
                            r += s.length
                        }
                    } catch (w) {
                        n.e(w)
                    } finally {
                        n.f()
                    }
                    var f, l = new Uint8Array(r), b = 0, m = Object(E["a"])(this._regions);
                    try {
                        for (m.s(); !(f = m.n()).done; ) {
                            var p = f.value;
                            if (p instanceof B) {
                                var u = new Uint8Array(e,p.addrStart,p.length);
                                l.set(u, b)
                            } else {
                                if (!(p instanceof N))
                                    throw "Unknown region type! " + p;
                                l.set(p.typedArray, b)
                            }
                            b += p.length
                        }
                    } catch (w) {
                        m.e(w)
                    } finally {
                        m.f()
                    }
                    return l.buffer
                }
            }, {
                key: "regions",
                get: function() {
                    return this._regions
                }
            }]),
            e
        }()
          , U = function() {
            function e() {
                Object(P["a"])(this, e)
            }
            return Object(R["a"])(e, [{
                key: "length",
                get: function() {
                    throw "Region.length(): Subclasses must override this function!"
                }
            }]),
            e
        }()
          , B = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a(e, t) {
                var o;
                return Object(P["a"])(this, a),
                o = d.call(this),
                Object(C["a"])(Object(y["a"])(o), "addrStart", void 0),
                Object(C["a"])(Object(y["a"])(o), "addrEnd", void 0),
                o.addrStart = e,
                o.addrEnd = t,
                o
            }
            return Object(R["a"])(a, [{
                key: "length",
                get: function() {
                    return this.addrEnd - this.addrStart
                }
            }]),
            a
        }(U)
          , N = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a(e) {
                var t;
                return Object(P["a"])(this, a),
                t = d.call(this),
                Object(C["a"])(Object(y["a"])(t), "typedArray", void 0),
                t.typedArray = e,
                t
            }
            return Object(R["a"])(a, [{
                key: "length",
                get: function() {
                    return this.typedArray.byteLength
                }
            }]),
            a
        }(U)
          , G = function e(d) {
            var a;
            Object(P["a"])(this, e),
            Object(C["a"])(this, "supportedVersions", Object.freeze((a = {},
            Object(C["a"])(a, e.INVENTORY, 4),
            Object(C["a"])(a, e.MISSION_MANAGER, 3),
            Object(C["a"])(a, e.OUTFITS, 3),
            Object(C["a"])(a, e.PLAYER_PROPERTIES, 21),
            a))),
            Object(C["a"])(this, "versions", void 0),
            this.versions = Object.freeze(d)
        };
        Object(C["a"])(G, "INVENTORY", "inventory"),
        Object(C["a"])(G, "MISSION_MANAGER", "mission_manager"),
        Object(C["a"])(G, "OUTFITS", "outfits"),
        Object(C["a"])(G, "PLAYER_PROPERTIES", "player_properties");
        var H = function e(d, a) {
            for (var t in Object(P["a"])(this, e),
            this.constructor._primitives)
                this[t] = new this.constructor._primitives[t](a),
                this[t].init(d, t)
        };
        Object(C["a"])(H, "_primitives", {});
        var K = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                return Object(P["a"])(this, a),
                d.apply(this, arguments)
            }
            return a
        }(H);
        Object(C["a"])(K, "_primitives", {
            gid: T,
            parameter: A,
            quantity: L,
            persistentId: T
        });
        var $ = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                return Object(P["a"])(this, a),
                d.apply(this, arguments)
            }
            return a
        }(H);
        Object(C["a"])($, "_primitives", {
            gidItem: T
        });
        var Y = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                return Object(P["a"])(this, a),
                d.apply(this, arguments)
            }
            return a
        }(H);
        Object(C["a"])(Y, "_primitives", {
            itemIndex: L,
            parentIndex: L
        });
        var Z = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                return Object(P["a"])(this, a),
                d.apply(this, arguments)
            }
            return a
        }(H);
        Object(C["a"])(Z, "_primitives", {
            outfitId: L,
            eStatus: L
        });
        var J = function(e) {
            Object(M["a"])(a, e);
            var d = Object(S["a"])(a);
            function a() {
                return Object(P["a"])(this, a),
                d.apply(this, arguments)
            }
            return a
        }(H);
        Object(C["a"])(J, "_primitives", {
            id: T,
            tagValue: L
        });
        var Q = W
          , X = function() {
            function e(d, a) {
                Object(P["a"])(this, e),
                Object(C["a"])(this, "destSaveData", void 0),
                Object(C["a"])(this, "sourceSaveData", void 0),
                this.destSaveData = Q.parseBuffer(d.getBuffer()),
                this.sourceSaveData = a
            }
            return Object(R["a"])(e, [{
                key: "performTransfer",
                value: function(e) {
                    e.source && this.transferSource(),
                    e.abilityPoints && this.transferAbilityPoints(),
                    console.log("About to commit and reparse");
                    var d = this.destSaveData.commit();
                    this.destSaveData = Q.parseBuffer(d),
                    console.log("Reparse complete"),
                    e.outfits && this.transferOutfits(),
                    e.inventory && this.transferInventory(),
                    console.log("Committing region changes...");
                    var a = this.destSaveData.commit();
                    console.log("About to reparse after region commit"),
                    this.destSaveData = Q.parseBuffer(a),
                    console.log("Reparse is complete");
                    var t = this.destSaveData.commit();
                    return t
                }
            }, {
                key: "transferAbilityPoints",
                value: function() {
                    this.destSaveData.data.abilityPoints.value = this.sourceSaveData.data.abilityPoints.value
                }
            }, {
                key: "transferSource",
                value: function() {
                    this.destSaveData.data.source.value = this.sourceSaveData.data.source.value
                }
            }, {
                key: "transferOutfits",
                value: function() {
                    var e = this.destSaveData.data.outfitsChunk
                      , d = this.sourceSaveData.data.outfitsChunk.rawData;
                    console.log("Outfits Transfer: Replacing region ".concat(e.dataStart, " - ").concat(e.dataEnd, " with data of size ").concat(d.byteLength)),
                    console.log(this.destSaveData.regionManager.regions),
                    this.destSaveData.regionManager.replaceRegion(e.dataStart, e.dataEnd, d)
                }
            }, {
                key: "transferInventory",
                value: function() {
                    var e = this.destSaveData.data.inventoryItems
                      , d = this.sourceSaveData.data.inventoryItems;
                    console.log("Inventory Transfer: Examining UITagManager");
                    var a, t = e.ktValue.map((function(e) {
                        return e.persistentId
                    }
                    )), o = d.ktValue.map((function(e) {
                        return e.persistentId
                    }
                    )), c = this.destSaveData.data.uiTagManager, _ = Object(E["a"])(t);
                    try {
                        var i = function() {
                            var e = a.value
                              , d = c.ktValue.findIndex((function(d) {
                                return e === d.id
                            }
                            ));
                            d > -1 && (console.log("Removing index ".concat(d, " from dst UITagManager")),
                            c.remove(d))
                        };
                        for (_.s(); !(a = _.n()).done; )
                            i()
                    } catch (m) {
                        _.e(m)
                    } finally {
                        _.f()
                    }
                    var r, n = this.sourceSaveData.data.uiTagManager, s = Object(E["a"])(o);
                    try {
                        var f = function() {
                            var e = r.value
                              , d = n.ktValue.findIndex((function(d) {
                                return e === d.id
                            }
                            ));
                            if (d > -1) {
                                console.log("Copying idx ".concat(d, " from src to dst UITagManager"));
                                var a = n.getRawDataAt(d);
                                console.log("Data is: ", a),
                                c.push(a)
                            }
                        };
                        for (s.s(); !(r = s.n()).done; )
                            f()
                    } catch (m) {
                        s.e(m)
                    } finally {
                        s.f()
                    }
                    console.log("Transferring inventory items..."),
                    this.destSaveData.regionManager.replaceRegion(e.addrStart, e.addrEnd, d.rawData),
                    console.log("Transferring active item data...");
                    var l = this.destSaveData.data.inventoryActiveItems
                      , b = this.sourceSaveData.data.inventoryActiveItems;
                    this.destSaveData.regionManager.replaceRegion(l.addrStart, l.addrEnd, b.rawData),
                    console.log("Done transferring inventory.")
                }
            }, {
                key: "_copyRegion",
                value: function(e, d, a, t) {
                    var o = this.sourceSaveData.getBuffer()
                      , c = this.destSaveData.getBuffer()
                      , _ = new Uint8Array(o,a,t - a)
                      , i = new Uint8Array(c,0,e)
                      , r = new Uint8Array(c,d)
                      , n = new Uint8Array(i.length + _.length + r.length);
                    return n.set(i, 0),
                    n.set(_, i.length),
                    n.set(r, i.length + _.length),
                    n
                }
            }]),
            e
        }()
          , ee = X
          , de = a("21a6")
          , ae = function() {
            function e() {
                Object(P["a"])(this, e)
            }
            return Object(R["a"])(e, null, [{
                key: "get",
                value: function(e) {
                    var d = e;
                    return Object.prototype.hasOwnProperty.call(te, d) ? te[d] : "[Unknown ID: ".concat(d, "]")
                }
            }, {
                key: "isRestricted",
                value: function(e) {
                    return [2756377209, 2961567163, 3404528982].includes(e)
                }
            }]),
            e
        }()
          , te = {
              2548037289: "平民",
              2298332541: "看门人助理",
              1617010995: "探险装备",
              2320418848: "异步套装",
              2272681173: "导演套装",
              2756377209: "战术反应",
              2961567163: "Astral 潜水服",
              2294418169: "P7 候选人",
              2872220490: "办公室助理",
              515893914: "金色套装",
              3404528982: "城市响应",
              2729692526: "超维度套装"
        };
        function oe() {
            if (null != this.destSaveData && null != this.sourceSaveData) {
                console.log("Starting transfer...");
                var e = new ee(this.destSaveData,this.sourceSaveData);
                try {
                    var d = e.performTransfer(this.transferTypes);
                    Object(de["saveAs"])(new Blob([d]), "persistent.chunk")
                } catch (a) {
                    this.displayError("Transfer Error", a)
                }
            } else
                console.error("Dest or source save is not set!")
        }
        var ce = {
            props: {
                saveData: {
                    required: !0
                },
                saveFile: File
            },
            data: function() {
                return {
                    showModal: !1,
                    modalTitle: "Transfer Error",
                    modalText: "An error occurred.",
                    destSaveData: null,
                    sourceSaveData: null,
                    transferTypes: {
                        outfits: !0,
                        inventory: !0,
                        source: !0,
                        abilityPoints: !0,
                        unlocks: !1
                    }
                }
            },
            created: function() {
                this.destSaveData = this.saveData
            },
            watch: {
                saveData: function(e) {
                    console.log("SaveTransfer: Dest save data changed."),
                    this.destSaveData = e
                }
            },
            methods: {
                transfer: oe,
                fileSelected: function(e, d) {
                    var a = this;
                    null != e && Q.parseFile(e).then((function(e) {
                        d ? a.sourceSaveData = e : a.destSaveData = e
                    }
                    )).catch((function(e) {
                        console.error("Error during file parse.", e),
                        a.displayError("File Load Error", e)
                    }
                    ))
                },
                getOutfitData: function(e) {
                    var d = 0
                      , a = 0;
                    return e.forEach((function(e) {
                        var t = 1 == e.eStatus.value;
                        ae.isRestricted(e.outfitId.value) && !t || (a++,
                        t && d++)
                    }
                    )),
                    {
                        numUnlocked: d,
                        numTotal: a
                    }
                },
                displayError: function(e, d) {
                    this.modalTitle = e,
                    this.modalText = "".concat(d, "\n\n").concat(d.stack),
                    this.showModal = !0
                }
            },
            computed: {
                canTransfer: function() {
                    return null != this.destSaveData && null != this.sourceSaveData
                },
                dstOutfitData: function() {
                    return this.getOutfitData(this.destSaveData.data.outfits.data)
                },
                srcOutfitData: function() {
                    return this.getOutfitData(this.sourceSaveData.data.outfits.data)
                }
            }
        }
          , _e = ce
          , ie = a("8336")
          , re = a("62ad")
          , ne = a("169a")
          , se = a("0fd9")
          , fe = a("2fa4")
          , le = a("b73d")
          , be = Object(s["a"])(_e, g, h, !1, null, null, null)
          , me = be.exports;
        l()(be, {
            VBtn: ie["a"],
            VCard: b["a"],
            VCardActions: m["a"],
            VCardText: m["b"],
            VCardTitle: m["c"],
            VCol: re["a"],
            VDialog: ne["a"],
            VFileInput: p["a"],
            VRow: se["a"],
            VSpacer: fe["a"],
            VSwitch: le["a"]
        });
        var pe = a("5530")
          , ue = function() {
            function e() {
                Object(P["a"])(this, e)
            }
            return Object(R["a"])(e, null, [{
                key: "get",
                value: function(e) {
                    var d = e.toString(16);
                    if (ve.hasOwnProperty(d)) {
                        var a = ve[d];
                        if ("<unknown>" !== a)
                            return a
                    }
                    return "[Unknown ID: ".concat(d, "]")
                }
            }]),
            e
        }()
          , we = {
            "2b2bd057c9474054": "Resource: House Memory",
            "11043e6f07cf0054": "Resource: Entropic Echo",
            "23a5eaa8bc3c054": "Resource: Threshold Remnant",
            "28d05c3e2cdf0054": "Resource: Corrupted Sample",
            "84cd2e503bdc054": "Resource: Undefined Reading",
            "39f050c0bfcc0054": "Resource: Hidden Trend",
            "3071940dc68d4054": "Resource: Ritual Impulse",
            "33257ce200bbc054": "Resource: Instrusive Pattern",
            "14b5e01a4a1a8054": "Resource: Remote Thought",
            "2947384e950f8054": "Resource: Untapped Potential",
            "2c6b227fef64054": "Resource: Astral Blip",
            "2fe6dac1bf248054": "Resource: Shifting Fragment",
            "2ba3ea34071d4054": "Resource: Jukebox Token"
        }
          , ge = {
            "277afa9c0caf0054": "_Nothing",
            "3e4864decbc58054": "Player Mod From Environment",
            "213e7df2fd688054": "Weapon Mod From Environment",
            "24df5f63154d4054": "Player Mod Common",
            "1fb62ea776a10054": "Player Mod Uncommon",
            "9f73653ebbe0054": "Player Mod Rare",
            "39cb644fda784054": "Player Mod Legendary",
            "34394b6895adc054": "Player Mod Exquisite",
            "1ae542cc516e8054": "Weapon Mod Common",
            "21943538b1338054": "Weapon Mod Uncommon",
            a842b46f81c8054: "Weapon Mod Rare",
            "3992ac1762bec054": "Weapon Mod Legendary",
            "22980bce01b64054": "Weapon Mod Exquisite",
            "3071940dc68d4054": "Resource Common Ritual Impulse",
            "14b5e01a4a1a8054": "Resource Common Remote Thought",
            "2c6b227fef64054": "Resource Uncommon Astral Blip",
            "11043e6f07cf0054": "Resource Uncommon Entropic Echo",
            "39f050c0bfcc0054": "Resource Rare Phased Quintessence",
            "84cd2e503bdc054": "Resource Common Undefined Reading",
            "33257ce200bbc054": "Resource Common Instructive Pattern",
            "2b2bd057c9474054": "Resource Uncommon House Memory",
            "2fe6dac1bf248054": "Resource Rare Cartographers Instinct",
            "28d05c3e2cdf0054": "Resource Rare Mycelium Cord",
            "23a5eaa8bc3c054": "Resource Uncommon Threshold Remnant",
            "2ba3ea34071d4054": "Expedition Ticket",
            "202dc13500790054": "Health Pack 1",
            "4c36ed296f24054": "Resource Pack 1",
            "14091c2aac440054": "Weapon Mod Common Reload",
            "2906b19bc3960054": "Weapon Mod Common Accuracy",
            "17919e63dd3d8054": "Weapon Mod Common Dead-eye",
            "1a6ce90e013e0054": "Weapon Mod Common Bloodthirst",
            "1c13820348600054": "Weapon Mod Common Controlled Fire",
            "2558a6a2a86b0054": "Weapon Mod Common Adrenaline",
            "399a1109845ac054": "Player Mod Common Mental Fortitude",
            f72884f35910054: "Player Mod Common Mental Focus",
            "35c8fdd9c1104054": "Player Mod Common Improved Physique",
            b3bc65b59bc4054: "Player Mod Common Rapid Recovery",
            "2e6a29a8e78cc054": "Player Mod Common Fleet Foot",
            "187dbde84bf60054": "Player Mod Common Launcher",
            "27a266773e240054": "Player Mod Common Efficient Shield",
            "37ac7b337a7bc054": "Player Mod Common Reinforced Shield",
            "1900fcde626c4054": "Player Mod Common Light Foot",
            "5b57da04e4e0054": "Weapon Mod Common Death Feeder",
            "251d4ccb1aaf8054": "Weapon Mod Uncommon Damage",
            "2dae5314af738054": "Weapon Mod Rare Damage",
            "322e985e6b2bc054": "Weapon Mod Legendary Damage",
            "34b162b754b74054": "Weapon Mod Exquisite Damage",
            "2591d35f54e68054": "Weapon Mod Uncommon Ammo Efficiency",
            "2d7237ed60a38054": "Weapon Mod Rare Ammo Efficiency",
            "8643647375b8054": "Weapon Mod Legendary Ammo Efficiency",
            "1f34bc1659174054": "Weapon Mod Exquisite Ammo Efficiency",
            "171a9b679634c054": "Weapon Mod Uncommon Reload",
            "33a369d543f34054": "Weapon Mod Rare Reload",
            cf5d9838cb00054: "Weapon Mod Legendary Reload",
            "14b248e8fcf78054": "Weapon Mod Exquisite Reload",
            "1355c9a896ee0054": "Weapon Mod Uncommon Accuracy",
            "2b7de92445e0c054": "Weapon Mod Rare Accuracy",
            "2e081ef96eb64054": "Weapon Mod Legendary Accuracy",
            "3e68d9c6cf30054": "Weapon Mod Exquisite Accuracy",
            "3f8312d34e118054": "Weapon Mod Uncommon Rate of Fire",
            "38530fba14084054": "Weapon Mod Rare Rate of Fire",
            "2fe64008f0d10054": "Weapon Mod Legendary Rate of Fire",
            "21132dd568828054": "Weapon Mod Exquisite Rate of Fire",
            "1dff217a9ad38054": "Weapon Mod Uncommon Bloodthirst",
            b17c0735ba54054: "Weapon Mod Rare Bloodthirst",
            "30dae767de308054": "Weapon Mod Legendary Bloodthirst",
            "282d8e0d682f0054": "Weapon Mod Exquisite Bloodthirst",
            "349cb75e461ac054": "Weapon Mod Uncommon Controlled Fire",
            "360ed6083acec054": "Weapon Mod Rare Controlled Fire",
            "2b8e23e8eb2d0054": "Weapon Mod Exquisite Controlled Fire",
            "3a0e899149638054": "Weapon Mod Uncommon Adrenaline",
            "26a8b79d73f1c054": "Weapon Mod Rare Adrenaline",
            "1831e7372e34054": "Weapon Mod Legendary Adrenaline",
            "20bbd0acf2bb8054": "Weapon Mod Exquisite Adrenaline",
            "296b77f499b00054": "Weapon Mod Uncommon Dead-eye",
            "268ad8821bf98054": "Weapon Mod Rare Dead-eye",
            "11bd38556eae4054": "Weapon Mod Legendary Dead-eye",
            "3dbca1ac3724054": "Weapon Mod Exquisite Dead-eye",
            "195ba6416f620054": "Player Mod Uncommon Efficient Shield",
            "2021e2aebb2dc054": "Player Mod Rare Efficient Shield",
            a9eda38e95c054: "Player Mod Legendary Efficient Shield",
            "3db45158abde0054": "Player Mod Exquisite Efficient Shield",
            "4ec4b67b1908054": "Player Mod Uncommon Fleet Foot",
            "2eebb0c5193e8054": "Player Mod Rare Fleet Foot",
            "136b7506db274054": "Player Mod Legendary Fleet Foot",
            "22a72842ade64054": "Player Mod Exquisite Fleet Foot",
            "11aa31263f310054": "Player Mod Uncommon Improved Physique",
            "111ead63ef780054": "Player Mod Rare Improved Physique",
            "2c56b490927b4054": "Player Mod Legendary Improved Physique",
            "14c70d2450d7c054": "Player Mod Exquisite Improved Physique",
            "395d499fde8fc054": "Player Mod Uncommon Launcher",
            "710eb1007034054": "Player Mod Rare Launcher",
            "397ae87f957bc054": "Player Mod Legendary Launcher",
            "18319f9ca0820054": "Player Mod Exquisite Launcher",
            "30dfea3a43960054": "Player Mod Uncommon Light Foot",
            "3d182d70e147c054": "Player Mod Rare Light Foot",
            "18dd349a66eb8054": "Player Mod Legendary Light Foot",
            fe906cd12db8054: "Player Mod Exquisite Light Foot",
            "143ec880ecdf4054": "Player Mod Uncommon Mental Focus",
            "1a780081335bc054": "Player Mod Rare Mental Focus",
            "1232320f80408054": "Player Mod Legendary Mental Focus",
            "2d7fea82d0a68054": "Player Mod Exquisite Mental Focus",
            "15321b9c6c4bc054": "Player Mod Uncommon Mental Fortitude",
            "26b40c2259bec054": "Player Mod Rare Mental Fortitude",
            "1bfc8c44b2d04054": "Player Mod Legendary Mental Fortitude",
            "1ad8610eecfc8054": "Player Mod Exquisite Mental Fortitude",
            "3816349a75ac8054": "Player Mod Uncommon Rapid Recovery",
            "1dcf75c552c18054": "Player Mod Rare Rapid Recovery",
            "1deab46bf6668054": "Player Mod Legendary Rapid Recovery",
            "2c5e8b91ca40c054": "Player Mod Exquisite Rapid Recovery",
            "2b87bf63cfd30054": "Player Mod Uncommon Reinforced Shield",
            "3673c759e0838054": "Player Mod Rare Reinforced Shield",
            "2b42766ac3f0c054": "Player Mod Legendary Reinforced Shield",
            "21a25b0ca9660054": "Player Mod Exquisite Reinforced Shield",
            "2947384e950f8054": "Resource Rare Untapped Potential",
            e133529e2bc054: "Weapon Mod Common Damage",
            "3e544079a1760054": "Weapon Mod Common Ammo Efficiency",
            "3935be226a0f0054": "Weapon Mod Common Rate of Fire",
            a923040682d8054: "Weapon Player Pistol1",
            "75c025463838054": "Weapon Player Railgun1",
            "2fa4fae703698054": "Weapon Player Rocket Launcher1",
            "1ba2ae67dc15c054": "Weapon Player Shotgun1",
            "20c82abe91744054": "Weapon Player SMG1",
            "3d762e449eac8054": "Weapon Player Sticky Granade1",
            "15bea66be78c8054": "Weapon Player Antiability",
            "37a6f5c84dfc8054": "Weapon AI Antiability",
            "1dbe3c6a0ac10054": "Weapon AI Assault Rifle",
            "3b30f2b3e9ef0054": "Weapon AI Bounce Grenade",
            "14c037d359140054": "Weapon AI Mop",
            "2d36091b9c1a4054": "Weapon AI Rifle",
            "1b8c2dd85ca64054": "Weapon AI Shotgun",
            "6f44bf043984054": "Weapon AI Sniper",
            "307bfcbbbd8f4054": "Weapon Player Pistol2",
            "1e681baec41ac054": "Weapon Player SMG2",
            "3c0c85ca089ec054": "Weapon Player SMG3",
            "194bfcc92d8c0054": "Weapon Player Shotgun2",
            "111b9aaaa6564054": "Weapon Player Shotgun3",
            "235ec2e34bb9c054": "Weapon Player Pistol3",
            "29b48debcedcc054": "Weapon Player Railgun2",
            "6a3d4190fa50054": "Weapon Player Railgun3",
            "3a14533c19db0054": "Weapon Mod Common Sustained Fire",
            "15ed87d5f6030054": "Weapon Mod Common Shield Reload",
            "2417c569475d4054": "_Dummy Object",
            "141681f8557f0054": "Expedition Mod T1 Mode Increased Weapon Damage",
            "261840538a588054": "Expedition Experimental Kill Healer",
            "423efcb986c0054": "Expedition Experimental No Willpower",
            "4ffd0b04f6c054": "Expedition Experimental Only Kill Reloads",
            "29f97a77895cc054": "Expedition Experimental Headshots Only",
            "161849ba2e6d8054": "Expedition Mod T1 Mode Decreased Weapon Damage",
            "2ac265ef8749c054": "Expedition Mod T1 Player Decreased Stamina Recharge",
            "17864eea502c0054": "Expedition Mod T1 Mode Faster Launch Objects",
            "102624a65cea8054": "Expedition Mod T1 Enemy Health Increase",
            bc89ea6ea578054: "Weapon AI Mold One Spore Launcher",
            "6b52d9d5b4c8054": "Weapon AI Restraining Chair",
            "363a3c5684fcc054": "Weapon AI Torment Launcher",
            "24ef8fa68d374054": "Weapon AI Turret Spore Launcher",
            "62e1fa28b720054": "Weapon AI Turret Bullet",
            "5b67493d8ba8054": "Weapon AI Pen Notepad",
            "133de1baf68f8054": "Weapon AI Mold One Volcano Rain",
            462311723184054: "Weapon AI Semi-Auto Shotgun",
            "306c8a927200c054": "Weapon AI RPG",
            "25271612987f8054": "Weapon AI Frame SMG",
            "3b0aebcd56794054": "Weapon AI Frame RPG",
            "3cc5f22259f08054": "Weapon AI SMG",
            "3ffec67faf760054": "Weapon AI Chain Gun",
            "24f564d1bb194054": "Weapon Mod Exquisite Specific Gyroscope",
            f56a66e21fcc054: "Weapon Mod Exquisite Specific Missile Blast Radius",
            "20a9171bc2fec054": "Weapon Mod Exquisite Specific Missile Velocity",
            "3aae75a1827d8054": "Weapon Mod Exquisite Specific Pellet Count",
            "1c4dec0acd5d0054": "Weapon Mod Exquisite Specific Pellet Scatter",
            d3acd5c5b098054: "Weapon Mod Exquisite Specific Receiver",
            "1c1036c8f70cc054": "Weapon Mod Exquisite Specific Stabilizer",
            "3546ebca05b20054": "Weapon Mod Exquisite Specific Zoom",
            cb38db54fb34054: "Weapon Mod Exquisite Specific Booster",
            "2696965ebe024054": "Roulette_Ball",
            "3228e5482ee90054": "Weapon Mod Legendary Specific Booster",
            "31d6a37f76a98054": "Weapon Mod Legendary Specific Gyroscope",
            "23339239b79d0054": "Weapon Mod Legendary Specific Missile Blast Radius",
            2848956291240054: "Weapon Mod Legendary Specific Missile Velocity",
            "8c3f4ba37e00054": "Weapon Mod Legendary Specific Pellet Count",
            "186a556c365a8054": "Weapon Mod Legendary Specific Pellet Scatter",
            "137fa77cd2a14054": "Weapon Mod Legendary Specific Receiver",
            "2600d122bc62c054": "Weapon Mod Legendary Specific Stabilizer",
            d12626938284054: "Weapon Mod Legendary Specific Zoom",
            "2e189bd64bb4c054": "Weapon Mod Rare Specific Booster",
            "1bbac61d2f944054": "Weapon Mod Rare Specific Gyroscope",
            "4719db129778054": "Weapon Mod Rare Specific Missile Blast Radius",
            "1f12d7cf39d68054": "Weapon Mod Rare Specific Missile Velocity",
            "26325de691648054": "Weapon Mod Rare Specific Pellet Count",
            "325dcb2bbd504054": "Weapon Mod Rare Specific Pellet Scatter",
            "239b7d216b31c054": "Weapon Mod Rare Specific Receiver",
            "38da81a6680d4054": "Weapon Mod Rare Specific Stabilizer",
            "3736c0e69d054054": "Weapon Mod Rare Specific Zoom",
            "639a9f20ebd0054": "Weapon Mod Uncommon Death Feeder",
            "3455d6ba22528054": "Weapon Mod Rare Death Feeder",
            "36d72cf82be08054": "Weapon Mod Legendary Death Feeder",
            "14c4abc926fc4054": "Weapon Mod Exquisite Death Feeder",
            addffbe80450054: "Weapon Mod Common Specific Booster",
            "1b091c670c05c054": "Weapon Mod Uncommon Specific Booster",
            "3e0f8b71ed264054": "Weapon Mod Common Specific Gyrosocpe",
            "247c72593d99c054": "Weapon Mod Common Specific Missile Blast Radius",
            "3f182238c3158054": "Weapon Mod Common Specific Missile Velocity",
            "19289f3de4df4054": "Weapon Mod Common Specific Pellet Count",
            "2edd383284f8054": "Weapon Mod Common Specific Pellet Scatter",
            "10441e01de22c054": "Weapon Mod Common Specific Receiver",
            "1fedd13ae2d94054": "Weapon Mod Common Specific Stabilizer",
            "3d163a1b14ee0054": "Weapon Mod Common Specific Zoom",
            "1f18549c77680054": "Weapon Mod Uncommon Specific Gyroscope",
            "39dc2fce634dc054": "Weapon Mod Uncommon Specific Missile Blast Radius",
            "30df58fa2ae00054": "Weapon Mod Uncommon Specific Missile Velocity",
            "1ffd1ecc9f374054": "Weapon Mod Uncommon Specific Pellet Count",
            "32564beed460c054": "Weapon Mod Uncommon Specific Pellet Scatter",
            b1cefc642878054: "Weapon Mod Uncommon Specific Receiver",
            "276edb100ecdc054": "Weapon Mod Uncommon Specific Stabilizer",
            "35321490d187c054": "Weapon Mod Uncommon Specific Zoom",
            "26eca82103c84054": "Weapon Mod Legendary Controlled Fire",
            "38dbcc4bf8ecc054": "Weapon Player Rocket Launcher2",
            "11d25f6a50c8054": "Weapon Player Rocket Launcher3",
            "28bfed3067d4054": "Vendor L1 Player Mod Set1",
            "90980daf7a00054": "Vendor L1 Player Mod Set2",
            "32a29f1433f50054": "Vendor L1 Weapon Mod Set1",
            "298abe0dbd4dc054": "Vendor L1 Weapon Mod Set2",
            "26ed1c9258ed0054": "Weapon AI Turret Launcher",
            "139a5ab490ec8054": "Weapon AI Rifle Astral Plane",
            "120b1cf50978054": "Weapon AI Shotgun Astral Plane",
            "2107325c0901c054": "Weapon AI SMG Astral Plane",
            "343b2d2daf664054": "Weapon AI RPG Astral Plane",
            "2940cd04fb898054": "Weapon Mod Common Armor Damage",
            "3e359089482b8054": "Weapon Mod Exquisite Armor Damage",
            "36eb123510e0c054": "Weapon Mod Legendary Armor Damage",
            "2b44ac4fed65c054": "Weapon Mod Rare Armor Damage",
            854908423370054: "Weapon Mod Uncommon Armor Damage",
            "27b5661de7e98054": "Player Mod From Enemy",
            abb3e44bdc7c054: "Weapon Mod From Enemy",
            c1356c74e7c4054: "Vendor L2 Player Mod Set1",
            "317a35c93b184054": "Vendor L4 Player Mod Set1",
            "909a184e3710054": "Vendor L3 Player Mod Set1",
            "5ab5cf74da6c054": "Vendor L5 Player Mod Set1",
            "2c208db76bb9c054": "Vendor L2 Player Mod Set2",
            "3a90ea4b0fa40054": "Vendor L3 Player Mod Set2",
            "2b4205ee2d8bc054": "Vendor L4 Player Mod Set2",
            "1f2468aea92ac054": "Vendor L5 Player Mod Set2",
            "2cdbe204d3378054": "Vendor L2 Weapon Mod Set1",
            "107a5d48dc958054": "Vendor L3 Weapon Mod Set1",
            "38c41cb64fc84054": "Vendor L4 Weapon Mod Set1",
            "1299b50c72bec054": "Vendor L5 Weapon Mod Set1",
            "152afc6d85bf4054": "Vendor L2 Weapon Mod Set2",
            "1158f373ecd1c054": "Vendor L3 Weapon Mod Set2",
            "261ab6ceb07e4054": "Vendor L4 Weapon Mod Set2",
            "3f90134ed8914054": "Vendor L5 Weapon Mod Set2",
            "5b45c0359c28054": "Weapon Mod Uncommon Shield Reload",
            "38f335f830f58054": "Weapon Mod Rare Shield Reload",
            "180847c210638054": "Weapon Mod Legendary Shield Reload",
            "39370aecef84c054": "Weapon Mod Exquisite Shield Reload",
            "35cba7ebf9a08054": "Player Mod Common Compeller",
            "3573b52bd4884054": "Player Mod Uncommon Compeller",
            "1e26e073f07c4054": "Player Mod Rare Compeller",
            "19ba09399f30054": "Player Mod Legendary Compeller",
            "233eeade10c9c054": "Player Mod Exquisite Compeller",
            ce79fa434714054: "Weapon Mod Uncommon Sustained Fire",
            "3636504621a34054": "Weapon Mod Rare Sustained Fire",
            "2036f6e3ccfa0054": "Weapon Mod Legendary Sustained Fire",
            "1574d4390baac054": "Weapon Mod Exquisite Sustained Fire",
            "2a76fa920f56c054": "Weapon Mod Rare PS4 Reload",
            "13a850eca82fc054": "Player Mod Rare PS4 Improved Physique",
            "20a48983004a0054": "Weapon Mod Exquisite Eternal Fire",
            bd6aec1d031c054: "Weapon Mod Common Deadly Rain",
            "261dcb3a1d7e4054": "Weapon Mod Uncommon Deadly Rain",
            "2034b6a6e21a4054": "Weapon Mod Rare Deadly Rain",
            "2c3b6c628f4c054": "Weapon Mod Legendary Deadly Rain",
            "552aeeed2638054": "Weapon Mod Exquisite Deadly Rain",
            "24f22f1da2fa8054": "Weapon AI Torment Launcher DLC1",
            "3d4a6a1740844054": "Weapon AI Master Laser",
            "2b284f5caf7fc054": "Weapon AI Follower Rifle",
            "3ae5375aed32c054": "Weapon AI Runner Melee",
            "281df18e8038c054": "Player Mod Exquisite Cash",
            f22324196c1c054: "Player Mod Rare Expedition Bullet Collector",
            "3a541009c801c054": "Player Mod Legendary Expedition Bullet Collector",
            "1c3b6331fb784054": "Player Mod Exquisite Expedition Bullet Collector",
            "33904e7756d38054": "Player Mod Exquisite Expedition Vampiric Touch",
            "3989e9c76f034054": "Player Mod Rare Expedition Vampiric Touch",
            "55b5a71fd18054": "Player Mod Legendary Expedition Healing Thoughts",
            "1cc4a13c87e04054": "Player Mod Exquisite Expedition Grave Robber",
            "3669727eb9254054": "Player Mod Rare Expedition Grave Robber",
            b3d5db5a73bc054: "Player Mod Legendary Expedition Grave Robber",
            "3394cac1d79b4054": "Player Mod Exquisite Expedition Energy Conservation",
            "2e9a56d12c104054": "Player Mod Rare Expedition Energy Conservation",
            "1b3fb5b0a174054": "Player Mod Legendary Expedition Energy Conservation",
            efbb4e61f464054: "Player Mod Legendary Expedition Emergency Reserves",
            "28e7616041ed8054": "Player Mod Rare Expedition Emergency Reserves",
            "13b70b1e1807c054": "Player Mod Exquisite Expedition Emergency Reserves",
            "373fd4ba4fb38054": "Weapon Mod Legendary Expedition Specific Pickpocket",
            "13eaa1a6eb130054": "Weapon Mod Exquisite Expedition Specific Pickpocket",
            "35c26e6e262e0054": "Weapon Mod Rare Expedition Specific Pickpocket",
            "19a1a987a9f70054": "Weapon Mod Exquisite Expedition Mind Opener",
            f06839e5b4b4054: "Weapon Mod Legendary Expedition Mind Opener",
            a65031429860054: "Weapon Mod Rare Expedition Mind Opener",
            "2d28f76853fa4054": "Weapon Mod Exquisite Expedition Specific Life Link",
            "65f34088dc68054": "Weapon Mod Rare Expedition Specific Life Link",
            "254f0af758d40054": "Weapon Mod Legendary Expedition Specific Life Link",
            "12dedfefe11bc054": "Weapon Mod Exquisite Expedition Specific Backup Mag",
            "3e17cb86ccf10054": "Weapon Mod Rare Expedition Specific Backup Mag",
            "17a5f7d01aea4054": "Weapon Mod Legendary Expedition Specific Backup Mag",
            bc2f9418608c054: "Weapon Mod Rare Expedition Specific Gift of Charon",
            df5b014b8d48054: "Weapon Mod Legendary Expedition Specific Gift of Charon",
            "2df4e20a15f34054": "Weapon Mod Exquisite Expedition Specific Gift of Charon",
            "2e936104fe068054": "Expedition Mod T1 Enemy Accuracy Increase",
            f28b22c0ddec054: "Expedition Mod T1 Enemy Damage Increase",
            "30e1dc08a04c8054": "Expedition Mod T1 Enemy Rocket Resist",
            "29c87d05144b0054": "Expedition Mod T1 Enemy SMG Resist",
            "7cc200d03cbc054": "Expedition Mod T1 Enemy Pistol Resist",
            "23c8cd88e40c0054": "Expedition Mod T1 Enemy Shotgun Resist",
            "8d7a0e37b4c0054": "Expedition Mod T1 Enemy Sniper Resist",
            "36a2bb9223fd4054": "Expedition Mod T2 Enemy Precision Resist",
            c3a25c39e110054: "Expedition Mod T2 Enemy Power Resist",
            "11c948652522c054": "Expedition Mod T2 Enemy Spray Resist",
            "2921b63bc22d0054": "Expedition Mod T2 Enemy Crowd Resist",
            "554786847c8054": "Expedition Mod T2 Enemy Health Increase",
            "28521f9601db8054": "Expedition Mod T2 Enemy Damage Increase",
            "19c83b077bd04054": "Expedition Mod T2 Enemy Accuracy Increase",
            "3dca2df6795ec054": "Expedition Mod T2 Mode Faster Launch Objects",
            "175e597995ddc054": "Expedition Mod T2 Mode Increased Weapon Damage",
            "39659bcdf76b4054": "Expedition Mod T2 Mode Decreased Weapon Damage",
            "10aa608fa62c0054": "Expedition Mod T2 Player Increased Weapon Damage",
            "2b814e419e804054": "Expedition Mod T2 Player Increased Stamina Pool",
            e137945d63f4054: "Expedition Mod T2 Player Increased Stamina Recharge",
            "10c9b88d764f4054": "Expedition Mod T2 Player Increased Health Pool",
            "19abac11b2db8054": "Expedition Mod T2 Player Increased Ammo Regen",
            "19c1511a42284054": "Expedition Mod T3 Mode Faster Launch Objects",
            "26da80094b934054": "Expedition Mod T3 Mode Increased Weapon Damage",
            "387c20a47f46c054": "Expedition Mod T3 Mode Decreased Weapon Damage",
            "38dfc237f638054": "Expedition Mod T3 Mode Empowered Pistol",
            "2ed49fe35b094054": "Expedition Mod T3 Mode Empowered SMG",
            "1d9e55b310f80054": "Expedition Mod T3 Mode Empowered Shotgun",
            "8a1659c2574054": "Expedition Mod T3 Mode Empowered Sniper",
            "1efcf2ba18cbc054": "Expedition Mod T3 Mode Empowered Rocket",
            d7d5c3b289fc054: "Expedition Mod T3 Enemy Health Increase",
            "20c654f24474c054": "Expedition Mod T3 Enemy Accuracy Increase",
            "20fdeb9817a8054": "Expedition Mod T3 Enemy Damage Increase",
            "284251c02f414054": "Expedition Mod T3 Enemy Weapon Resistance",
            "5897ac83e370054": "Expedition Mod T3 Player Health Increase",
            "1d996c7e03484054": "Expedition Mod T3 Player Stamina Increase",
            "2e79ec480ca70054": "Expedition Mod T3 Player Stamina Recharge",
            "3b8f7a9dce438054": "Expedition Mod T3 Player Weapon Damage",
            dfa9bfde2100054: "Expedition Mod T3 Player Ammo Regen",
            "25b3181542254054": "Experimental Golden Gun 1",
            "3b8571f92e714054": "Experimental Magic Butt Kick 1",
            "175292f216538054": "Experimental Adequate Response 1",
            "18ed488d7f678054": "Weapon Mod From Expedition",
            "38d829950fd0c054": "Player Mod from Expedition",
            "2d17358cbd884054": "Player Mod Exquisite Expedition Healing Thoughts",
            "20204c838d2a4054": "Player Mod Exquisite Expedition Pressure Points",
            "24d317eab372c054": "Player Mod Rare Expedition Pressure Points",
            "2726aefc08288054": "Player Mod Legendary Expedition Pressure Points",
            "24bd4c69a2ef8054": "Player Mod Exquisite Expedition Recycling",
            "2d21d40769c08054": "Player Mod Legendary Expedition Recycling",
            "21021fe88cd1c054": "Player Mod Rare Expedition Recycling",
            "1bce7995528f0054": "Player Mod Exquisite Expedition Scavenger",
            "2f5dda7894738054": "Player Mod Legendary Expedition Scavenger",
            b1a34e4b5c24054: "Player Mod Rare Expedition Scavenger",
            "291ffe95ef144054": "Player Mod Exquisite Expedition Shared Assets",
            "1385f5e0159f4054": "Player Mod Legendary Expedition Shared Assets",
            "327ef1b08d3d4054": "Player Mod Rare Expedition Shared Assets",
            "2c9f4fa4267e0054": "Weapon Mod Rare Expedition Specific Rampage",
            "261153f329a68054": "Weapon Mod Legendary Expedition Specific Rampage",
            "3f5555fa0d550054": "Weapon Mod Exquisite Expedition Specific Rampage",
            "2f0bf47a11d2c054": "Player Mod Rare Expedition Healing Thoughts",
            "1c730a143000c054": "Player Mod Legendary Expedition Vampiric Touch",
            "2191b5b22a1c054": "Expedition Rare Player Mods",
            "114b00120fd04054": "Expedition Legendary Player Mods",
            "33674c6eb4e74054": "Expedition Exquisite Player Mods",
            "2f22c346a4890054": "Expedition Rare Weapon Mods",
            "2cfd4eaa49160054": "Expedition Legendary Weapon Mods",
            "296ce52192c40054": "Expedition Exquisite Weapon Mods",
            "1386997affe80054": "Weapon AI Assault Rifle Marshall",
            "31079a19442d0054": "Weapon Mod Rare DLC1 Ballistic Recovery",
            "36a5e8ba41230054": "Weapon Mod Rare DLC1 Bombardment",
            "154cb22c066a4054": "Player Mod Rare DLC1 Coin Collector",
            "3b3170388dc5c054": "Player Mod Rare DLC1 Hazard Pay",
            "2542a28499ed8054": "Weapon Mod Rare DLC1 Immediate Response",
            "2e451eb4f6fa8054": "Player Mod Rare DLC1 Inner Peace",
            "2d472d116d724054": "Weapon Mod Rare DLC1 Kinetic Battery",
            "1ebb86a67704054": "Player Mod Rare DLC1 Kinetic Transfer",
            "10213508a364054": "Player Mod Rare DLC1 Masters Strike",
            "21f51c7a9058054": "Player Mod Rare DLC1 Mugging",
            "181820328c284054": "Player Mod Rare DLC1 Pink Mist",
            "2e2016438ced4054": "Weapon Mod Rare DLC1 Shard Refraction",
            "3ad60453963dc054": "Player Mod Rare DLC1 Lightning Reflex",
            "1d3f9ebb919cc054": "Player Mod Rare DLC1 Siphoning Touch",
            "68955403bebc054": "Player Mod Rare DLC1 Snap Reload",
            "1516ce41c8cbc054": "Weapon Mod Rare DLC1 Shrapnel Catcher",
            "797fd6162b04054": "Weapon Mod Legendary DLC1 Ballistic Recovery",
            "25b20c88b4af0054": "Weapon Mod Legendary DLC1 Bombardment",
            "26a856881230c054": "Player Mod Legendary DLC1 Coin Collector",
            d30ec423dcb4054: "Player Mod Legendary DLC1 Hazard Pay",
            "2cb59e4434b7c054": "Weapon Mod Legendary DLC1 Immediate Response",
            b3eb22b95c70054: "Player Mod Legendary DLC1 Inner Peace",
            "13af4d91f2d74054": "Weapon Mod Legendary DLC1 Kinetic Battery",
            "26b9fb8b0233c054": "Player Mod Legendary DLC1 Kinetic Transfer",
            d41abc7bb554054: "Player Mod Legendary DLC1 Masters Strike",
            "3f8924482cca8054": "Player Mod Legendary DLC1 Mugging",
            "18d3fcda13c0c054": "Player Mod Legendary DLC1 Pink Mist",
            "1447324bd3400054": "Weapon Mod Legendary DLC1 Shard Refraction",
            "18f578c2557b4054": "Player Mod Legendary DLC1 Lightning Reflex",
            "2edf41ccbfbac054": "Player Mod Legendary DLC1 Siphoning Touch",
            "1fab1eb41e408054": "Player Mod Legendary DLC1 Snap Reload",
            "745aeccc4918054": "Weapon Mod Legendary DLC1 Shrapnel Catcher",
            "395a289a0dec8054": "Weapon Mod Exquisite DLC1 Ballistic Recovery",
            "28c5e0dfde24054": "Weapon Mod Exquisite DLC1 Bombardment",
            "326b735388f44054": "Player Mod Exquisite DLC1 Coin Collector",
            "241eca8daa844054": "Player Mod Exquisite DLC1 Hazard Pay",
            "95609dbcc0d8054": "Weapon Mod Exquisite DLC1 Immediate Response",
            dbe39a825ae8054: "Player Mod Exquisite DLC1 Inner Peace",
            "3f8f99b76ae94054": "Weapon Mod Exquisite DLC1 Kinetic Battery",
            "222d00282fcd0054": "Player Mod Exquisite DLC1 Kinetic Transfer",
            "21a126f7c3208054": "Player Mod Exquisite DLC1 Masters Strike",
            "2e910c9534870054": "Player Mod Exquisite DLC1 Mugging",
            "32e5c8473e5dc054": "Player Mod Exquisite DLC1 Pink Mist",
            "38ef0891edc94054": "Weapon Mod Exquisite DLC1 Shard Refraction",
            "2fb737b020e0c054": "Player Mod Exquisite DLC1 Lightning Reflex",
            "25a1fc626e5d4054": "Player Mod Exquisite DLC1 Siphoning Touch",
            "3eee11c6131d0054": "Player Mod Exquisite DLC1 Snap Reload",
            "29bc5ddc10ec4054": "Weapon Mod Exquisite DLC1 Shrapnel Catcher",
            "37331e31f8930054": "DLC1 Player Mod Legendary",
            "7d08678413d4054": "DLC1 Player Mod Rare",
            "368aaa87278f0054": "DLC1 Player Mod Exquisite",
            "9731dd897b34054": "DLC1 Weapon Mod Legendary",
            "3b260b403ea20054": "DLC1 Weapon Mod Rare",
            "2c0184ba2b39c054": "DLC1 Weapon Mod Exquisite",
            "35dd2c8d7d494054": "Player Mod From DLC1 Enemy",
            "2227f6d99558054": "Player Mod From DLC1 Environment",
            "1f177e23d88d8054": "Weapon Mod From DLC1 Enemy",
            "337d2238997a0054": "Weapon Mod From DLC1 Environment",
            "7a3677c171f8054": "Vendor L6 Player Mod Set1",
            "22c8c98acb84c054": "Vendor L6 Player Mod Set2",
            "3b02c0ae56310054": "Vendor L6 Weapon Mod Set1",
            "7dd2de21231c054": "Vendor L6 Weapon Mod Set2",
            "548f358f2510054": "Weapon AI Sniper Elite",
            "113be03422cf4054": "Weapon Mod Ascendant DLC1 Shrapnel Catcher",
            "31f64f8a2d408054": "Player Mod Ascendant DLC1 Snap Reload",
            "12944ca0f7884054": "Weapon Mod Ascendant DLC1 Accuracy",
            "1c80435a79e98054": "Player Mod Ascendant DLC1 Adrenaline",
            "28a86fff9740054": "Weapon Mod Ascendant DLC1 Ballistic Recovery",
            eaee84575c4054: "Weapon Mod Ascendant DLC1 Bombardment",
            "200cf7727680054": "Player Mod Ascendant DLC1 Coin Collector",
            "47f29f186440054": "Player Mod Ascendant DLC1 Compeller",
            "27bea4b6a80054": "Weapon Mod Ascendant DLC1 Controlled Fire",
            "33578bb32e354054": "Weapon Mod Ascendant DLC1 Deadeye",
            cf540d9e55cc054: "Weapon Mod Ascendant DLC1 Death Feeder",
            "32c50c4be2aec054": "Player Mod Ascendant DLC1 Mental Fortitude",
            "1cdb9954e99d4054": "Player Mod Ascendant DLC1 Fleet Foot",
            a0f74d3dea8c054: "Player Mod Ascendant DLC1 Hazard Pay",
            "2ad252f1686f8054": "Weapon Mod Ascendant DLC1 Immediate Response",
            "29d55ca18a8cc054": "Player Mod Ascendant DLC1 Improved Physique",
            "2abde3314519c054": "Player Mod Ascendant DLC1 Inner Peace",
            "10516b2f244d4054": "Weapon Mod Ascendant DLC1 Kinetic Battery",
            "597ff20ac40c054": "Player Mod Ascendant DLC1 Kinetic Transfer",
            "335876257b054054": "Player Mod Ascendant DLC1 Lightning Reflex",
            "1bc6f98eb0864054": "Player Mod Ascendant DLC1 Masters Strike",
            "386e3ca91cd0054": "Player Mod Ascendant DLC1 Mental Focus",
            "1a5eb706f67ec054": "Player Mod Ascendant DLC1 Mugging",
            "16aef4abfc340054": "Player Mod Ascendant DLC1 Pink Mist",
            "13129a793c60054": "Player Mod Ascendant DLC1 Rapid Recovery",
            a214d71ed698054: "Player Mod Ascendant DLC1 Reinforced Shield",
            "3431cb4a46638054": "Weapon Mod Ascendant DLC1 Shard Refraction",
            "86925e2681e4054": "Player Mod Ascendant DLC1 Shield Reload",
            "1ff9f37296b20054": "Player Mod Ascendant DLC1 Siphoning Touch",
            e4103baa9a3c054: "Weapon Mod Ascendant DLC1 Specific Gyroscope",
            "1ef91ec87bb3c054": "Weapon Mod Ascendant DLC1 Specific Missile Blast Radius",
            "1fc4bdb52cb44054": "Weapon Mod Ascendant DLC1 Specific Missile Velocity",
            "177d3c95fe3f0054": "Weapon Mod Ascendant DLC1 Specific Pellet Count",
            "15e660e2361bc054": "Weapon Mod Ascendant DLC1 Specific Receiver",
            "8617683d7c1c054": "Weapon Mod Ascendant DLC1 Specific Zoom",
            "204bc9d8dd248054": "Weapon Mod Ascendant DLC1 Suppressive Fire",
            "2ed3ab5aab4bc054": "Weapon Mod Ascendant DLC1 Armor Damage",
            db38cf3ae20c054: "Weapon Mod Ascendant DLC1 Weapon Damage",
            "2c9b05154aae8054": "Weapon Mod Ascendant DLC1 Reload",
            "23808c607dfa8054": "Weapon Mod Ascendant DLC1 Rate of Fire",
            "1e5beb7f5fba8054": "DELETE ME 2",
            ec81e39ff040054: "Weapon Mod Ascendant DLC1 Specific Pellet Scatter",
            "26fe10ca46e1c054": "DELETE ME",
            "3e7ca57ad1b38054": "DLC1 Player Mod Ascendant",
            "36643bc0c3d8c054": "DLC1 Weapon Mod Ascendant"
        }
          , he = {
            "115af48e3cd7004d": "w0119",
            "13870e764747c04d": "e0564",
            "2dec5ea84597004d": "w0481",
            "140de34d47e0004d": "w0310",
            "21aa30d4540c804d": "e0517",
            "18f9bf658b17804d": "e_small_4w_marksmenrangersguards",
            "353d3d3d1854004d": "e0529",
            "32e626ea8df5404d": "progression_mod_drifter_t3_health",
            "1287f423d9ce404d": "e0054",
            "311461b05390804d": "e0676",
            "683f63575f1804d": "e_medium_2w_armoredguardguard",
            "1c713334379c804d": "e0268",
            "36178665e2b5804d": "w0236",
            c471cd8f6d7004d: "e0047",
            "14ec922bbd82804d": "e0506",
            "1ffcbcbe0ac8004d": "e_small_1w_1drifter",
            "299bbb18758b004d": "e0519",
            "11ebb53185b3404d": "e0714",
            "19a4593a1b6e804d": "e0256",
            cc9e2e3fe74404d: "w0100",
            e9945d58968004d: "tail_camera_000",
            "371bbe9f30c3004d": "e0117",
            "252c4ce74bac804d": "e0327",
            "2ef534c8135b404d": "p7_ai_character_000",
            cf282c4e2af804d: "e0101",
            "235bd2c2db8fc04d": "expedition_t1_mod_mode_fast_launch",
            "362013b2dd01004d": "e0415",
            "179080dd7f62c04d": "w0004",
            "1fe7def6f20e404d": "e0266",
            "2549d2ec3923c04d": "e_small_5w_marksmenrangersguards",
            "179ad167157e804d": "w0137",
            "1fbb7160992a804d": "e0725",
            "1197d9819525404d": "wave_1drifter_2enraged",
            "33134a49cdd5004d": "spotlight_marksman",
            "2c0793be3e42004d": "expedition_t2_mod_enemy_precision_resistance",
            ccbb8b9c8eb404d: "wave_2moldwalkers_3rangermix",
            "3c24b6e6057b404d": "w0457",
            "23ec36bfeb55404d": "wave_1drifter_3enraged",
            "2560c1709b4f004d": "e0318",
            "3fcaff592f10404d": "wave_5turrets",
            "18662c3473ac404d": "loot_item_mod_rare_specific_missile_velocity",
            "180aae8cf1ed804d": "w0243",
            "152091fe2945004d": "progression_mod_drifter_t1_charge_damage",
            "35dc5b878d1404d": "w0615",
            "172af1691e42804d": "unlock_launch_object_fallback",
            "1bdb614ee204404d": "w0134",
            "34218395f19c404d": "wave_3moldwalkers_3turrets",
            "1368b33acde4404d": "p7_ai_character_000",
            "39b55e3c566004d": "w0409",
            "30b9e7cd4f4c804d": "e0062",
            e017c684c92004d: "e_monolith_01",
            "1590fdb25341004d": "e0545",
            "126c151d2643004d": "e0209",
            "6c92aed25dc004d": "e0660",
            "16563d700363004d": "e0252",
            "28c88d678b62c04d": "e0137",
            "1ebf5a7700c1004d": "p7_weapon_player_stickygrenade",
            e3bf491f92e404d: "w0050",
            "2115292464c3c04d": "loot_item_resource_steel_pin",
            "9b60fc928f1c04d": "w0292",
            "3c1af79ca497c04d": "shield_object_005_floppydrive",
            "12453416b79f804d": "w0555",
            "1509707cfff9804d": "e0560",
            "890243c2917c04d": "e0616",
            "321bb6db876b404d": "w0688",
            "1321d7591cdb004d": "w_east_island_02_01",
            "3a45331338b9404d": "w0059",
            "37fadb25e3c8004d": "loot_item_dummy_object",
            "3d4748f17deb004d": "wave_2marksmen",
            "1183b2fe1806804d": "w0572",
            "1d287a872f7dc04d": "progression_mod_knight_miniboss_health",
            "208a8493dd3d404d": "w0189",
            "51458de4f10804d": "e0382",
            "2b3a99d9b7bc404d": "w0651",
            "299526aa3a2b404d": "wave_3guards_armored",
            "149c907d3038c04d": "e0187",
            "56c0d90ddd8804d": "tempest_multilaunch_chunk_001",
            "181a793a1446804d": "e0598",
            "14747fba55e3004d": "e0046",
            "9bbb392dc65c04d": "e0433",
            "1513f165ddb4c04d": "wave_2moldwalkers",
            "27d028dfbd18c04d": "loot_item_mod_rare_suppressivefire",
            "3ef1751ade4a004d": "w0810",
            "125633caf24f004d": "wave_4guards",
            "2fe85fbf51d7c04d": "w0326",
            "1b54e30af5d8804d": "e0133",
            e3e682c05e6404d: "w0351",
            "288c98349d23c04d": "e0059",
            "3824861e712b804d": "w0188",
            "3a0471422da9c04d": "upgrade_melee_dmg_2",
            "3e28f744106c404d": "e0645",
            d3eed6b5946804d: "e0226",
            "7cc205d1e61804d": "e0024",
            "36cd443f518004d": "e0345",
            "2c9cbb924917804d": "w0463",
            "22a15fbbf866804d": "basic_pistol",
            "1964b9f3a109c04d": "p7_ai_character_000",
            "38aa1bcfbcb5c04d": "upgrade_levitate_desc_5",
            "184a2b2e2d5e804d": "wave_6moldwalkers_1turret",
            "24d571d9aee2804d": "w0269",
            "11fcfa94d162004d": "loot_item_mod_rare_rapidrecovery",
            "2cd55ba68cfb004d": "e_large_2w_marksmenrangersenraged",
            "269ecaf4783d404d": "loot_item_mod_expedition_rare_gift_of_charon",
            "7247c12794004d": "wave_1rangerultra",
            "2254fe87421804d": "loot_item_mod_dlc1_exquisite_bombardment",
            "22b767ca1e90804d": "w0790",
            "3dcf560ec48b404d": "e0680",
            "3f0bf752a2eec04d": "w_tower_ritual_01",
            "22e391b9a1b2404d": "w0405",
            "3bb8d010ee8a804d": "e0308",
            "1b3640b2f86b404d": "encounter_002",
            "3a78298cfb23404d": "wave_1turret_projectile",
            "1f457b8991b6404d": "loot_item_mod_uncommon_specific_receiver",
            "89dc6e90822404d": "w0498",
            "16a062942982004d": "progression_mod_knight_miniboss_health",
            eee6cc5399d404d: "w_east_island_03_02",
            "17e498c8ee47c04d": "e0558",
            "3a4e5e5530cfc04d": "w0603",
            "3dd67d4dc4b5404d": "loot_item_mod_exquisite_specific_missile_blast_radius",
            f3b40225224c04d: "e0425",
            "3288de81cba5404d": "w0088",
            "30bb8c5bb937404d": "e0150",
            "384a3a140c1c804d": "w0016",
            "19ff585fbc02c04d": "p7_ai_character_000",
            e0a703b305c804d: "w_at_tower_enemies_01",
            "17a058cd3bf3004d": "w0370",
            "2dd163714fe4c04d": "e_small_1w_3moldwalkers_1ranger",
            "3dd4ac939a0404d": "e_large_1w_rangersarmoredguards",
            "1ec20bcfaa62404d": "w0635",
            "2fa1fe5c3221c04d": "wave_1guard_armored",
            "13d78feb73fa804d": "w0141",
            c0406d78ac404d: "p7_ai_character_000",
            "292b01a26756004d": "e_large_1w_9moldwalkers_3turrets",
            "4f7a451bed1c04d": "e0657",
            "3b2ed9660fa9404d": "e0742",
            "3859515db910804d": "w0209",
            "3c6fb3645106004d": "e_medium_2w_armoredguardguard",
            "9d337e9c9a8004d": "upgrade_health_amt_2",
            "1a05615f7426004d": "e0307",
            "336ad4ff8aa2c04d": "upgrade_launch_dmg_2",
            cf31e8c0aff404d: "p7_weapon_player_shotgun",
            "40aa63f017ac04d": "e0217",
            "26127eb3d403804d": "pointlight_muzzleflash_pistol",
            "315c56d398c9004d": "loot_item_mod_dlc1_exquisite_coin_collector",
            "386d7d094cf0004d": "loot_item_inventory_5",
            "3c39d67a8c0d004d": "e0405",
            "26a97e8c7ef804d": "loot_item_mod_rare_mentalfortitude",
            "3d99411d0f2b004d": "w0150",
            "3a5b48cd9098404d": "e0459",
            "938fb403e4a004d": "loot_item_recipe_daily_vendor_player_mod_set2",
            "36505172759b804d": "loot_item_experimental_adequate_response_1",
            "170e6b9cfbcc804d": "w0444",
            "28801df7ebff804d": "e0531",
            "26bee23abeb5c04d": "e_small_3w_moldwalkers_2_3_3",
            "148bff5bc126404d": "w0415",
            "1103f0d12e5a404d": "w0089",
            "118e9924594404d": "w0800",
            "2473f74b287c004d": "e0205",
            "69443be2c94c04d": "w0067",
            "38ba690053cc004d": "loot_item_mod_expedition_rare_recycling",
            "216aea8605ba404d": "w0482",
            "206e9653f148c04d": "e0588",
            "132d76ebf098004d": "loot_item_mod_exquisite_weapondamage",
            "1356e8586590804d": "e0515",
            "3f28e075e385404d": "w0441",
            "7f6208ddb9e004d": "loot_item_mod_dlc1_exquisite_ballistic_recovery",
            "3e10d5691a5e404d": "progression_mod_master_health",
            "12c4910dbdf8004d": "e0178",
            "3769785eca51804d": "loot_item_mod_common_specific_missile_velocity",
            "1c44428909afc04d": "wave_2rangers_1armoredguard_2guards",
            "218f42e00ba4404d": "e0654",
            "11ab6124de80404d": "loot_item_mod_rare_adrenaline",
            "15a9e852b0d1c04d": "p7_ai_character_000",
            "39b1896f9c19004d": "e0248",
            e1462a704ff804d: "e0234",
            "2984dc1a6465404d": "w0322",
            "1c3fd5edc765404d": "e0028",
            "18758403b0fc004d": "e_small_1w_2moldwalkers",
            "310aaaa9e342804d": "progression_mod_drifter_t3_miniboss_health",
            "3cd9b3597f82004d": "e0605",
            "146ff36e857b404d": "wave_1rangerelite",
            "18f056c48c3e404d": "w0075",
            "33407562c457404d": "progression_mod_knight_miniboss_health",
            ff970ed970f004d: "e0153",
            "3e20ffd720f0404d": "e_small_1w_2drifter",
            "256402336885004d": "w0646",
            "3e2582b63ceac04d": "e0734",
            "37a5b2c8608b804d": "upgrade_levitate_desc_1",
            "29a05a9cdb49c04d": "w0630",
            "3cbd6654c8a804d": "w0758",
            d1f26f756b5404d: "loot_item_mod_dlc1_exquisite_hazard_pay",
            "2b9ed191c0a8804d": "loot_item_mod_legendary_specific_stabilizer",
            "110b1d83c850c04d": "e0592",
            "1ce02ae8df61404d": "w0080",
            "3f0cbe72c127004d": "p7_weapon_ai_turret_bullet",
            "27b3d7493200404d": "e0412",
            "24c9ddbd09e0804d": "e0115",
            "28237ad023f4004d": "wave_test_perf_000",
            "23146213c6a7404d": "loot_playermod_legendary",
            "37cfa45994f3404d": "loot_item_mod_uncommon_specific_missile_blast_radius",
            d06c9a16f09c04d: "w0159",
            "25867e572540004d": "w0506",
            "1c52a7678843c04d": "loot_item_resource_common_instructive_pattern",
            "1cf30216f4e6404d": "e0031",
            "269152d3d90ac04d": "e0031",
            "256b6e6ddb3b004d": "progression_mod_knight_weapon_damage",
            "1fe62e0c8367404d": "ability_upgrade_item_000",
            "1e2e9e261ebdc04d": "w0789",
            f41f3ade1a7804d: "e0376",
            "111433ea0dbd004d": "upgrade_shield_active_regen_1",
            "3dfd37ba17cac04d": "w0152",
            "38753248f840804d": "upgrade_compel_drain_5",
            "3552f9108e79404d": "w0405",
            "2e8ce762268004d": "e0745",
            "2f8037ea99f1004d": "loot_item_mod_common_specific_booster",
            be49a59a38d004d: "e0003",
            e22b4d9ba2f404d: "e0628",
            d03e38dbb52804d: "w0342",
            "1096e7e0d745c04d": "w0369",
            "60aa74ada20c04d": "e0435",
            "3def5ac76dc1004d": "progression_mod_ranger_t3_armor",
            "33f029da5233c04d": "e_small_1w_1master",
            a66e77109de804d: "e0604",
            "53d5e2f0184404d": "w0186",
            "197e73206031004d": "e0275",
            "12e8460c705f004d": "e0322",
            "32ad08cdade5004d": "tempest_multilaunch_chunk_003",
            "1d40cd67713fc04d": "loot_item_mod_common_deadlyrain",
            e389e9d573c804d: "p7_ai_character_000",
            c304ae5f0fc804d: "progression_mod_ranger_t2_melee_damage",
            "28744c5ea0d7c04d": "e0514",
            "28a84fbcee02804d": "w0211",
            "287bffdc89a6404d": "w0336",
            "1245d9ab053ac04d": "enemy_forward_shield_elite_miniboss",
            "36ac5e7e1f98804d": "e0140",
            "10786b19a829004d": "progression_mod_ranger_t1_melee_damage",
            "2ad35484b1f6804d": "e0269",
            "3b5605242de2c04d": "energy_item_4",
            "8a11d5a5de0404d": "w0036",
            "298d793519e6c04d": "w0496",
            "3ddf32d41e1e404d": "loot_item_mod_common_launcher",
            "22f4c4a9d6be404d": "e0091",
            "2d432d8bc932804d": "e_small_3w_moldwalkers_1_2_2",
            "3364c8d4f116c04d": "progression_mod_ranger_t1_miniboss_melee_damage",
            "233a244aadbfc04d": "w0633",
            "34156c2b15bb804d": "w0396",
            "197a157ad556804d": "e0704",
            "162012dc0f94404d": "p7_ai_character_000",
            "9eee4d2b910004d": "e_small_1w_1ranger",
            "226e730f0015404d": "unlock_shield",
            "3c63cdece110404d": "p7_ai_knight_000",
            "1b300be2d85f004d": "insignificant_rigid_body_000",
            "1ff0e687312d404d": "progression_mod_enraged_t1_armor",
            "355e94616243404d": "e0080",
            a4d94cfcf4c004d: "wave_1knight",
            "106a6d8abb2004d": "launch_object_012_mug",
            "30e3106ceb9c404d": "progression_mod_tempest_t1_shield",
            "381f192697c6404d": "progression_mod_knight_miniboss_health",
            "2a9fdeb65660004d": "w0497",
            "1382ac76d0cf004d": "e0039",
            "3c94d18ce9b1c04d": "e0134",
            "19035cb61d87004d": "encounter_m10",
            "17e1c5196bf3804d": "w0778",
            "2f67520958e0004d": "e0021",
            d589ada42a004d: "e_small_3w_rangersarmoredguards",
            "2bb8bdf4a3bdc04d": "p7_weapon_ai_turret_bullet",
            "32f60ded97c2804d": "loot_item_mod_uncommon_deadeye",
            "144f5dabfd35c04d": "w0095",
            "19220c65b600404d": "encounterwave_002",
            "1d94e71d1358804d": "w0091",
            "1fd38913965c004d": "w0167",
            "10510a0a6402004d": "p7_ai_knight_000",
            f3fd8619d58c04d: "upgrade_launch_dmg_1",
            "2a9835ca922f004d": "loot_item_recipe_daily_vendor_player_mod_set1",
            "1e0d475d60f3c04d": "p7_area_rocket_2",
            "754338003fd804d": "wave_1enraged",
            "2e8f067b7861804d": "w0382",
            "376fbbb4acdac04d": "e0316",
            "868febf8fb004d": "upgrade_health_amt_5",
            "1282b805ddd0c04d": "wave_3tempests",
            "3020d07c4603404d": "w0355",
            "2e3a5214bb11404d": "mod_progression_knight_chaingun_miniboss_health",
            "10fd44104c02004d": "w0694",
            "2d35e5376711004d": "e_west_island_01_01",
            "3958a0435180404d": "e0720",
            "3fd241e8265d404d": "progression_mod_knight_miniboss_health",
            "166b8df75b62c04d": "w0773",
            "2b402c361444404d": "shield_object_006_concrete_chunk",
            "3bd517ba2c7ec04d": "w0062",
            "1271f426c1c9804d": "w0173",
            "966b9ccc368c04d": "e0672",
            "3202f84e912d004d": "w0661",
            "1d76af2ae6a004d": "w0210",
            "1e0b2adaa4c0804d": "e0224",
            d62ca3be92804d: "e0463",
            "2467a820aa3bc04d": "loot_weaponmod_rare",
            "32a5f6199f16404d": "e0451",
            "27c794e92466c04d": "e0683",
            "188fd4af9ed404d": "loot_item_mod_expedition_rare_healing_thoughts",
            "3f66397bfa9404d": "e0366",
            "3e11bf63c39c004d": "w0083",
            "20f69901830f804d": "e0281",
            "2c8cb6980b0c404d": "wave_2rangers_2enraged",
            "8f9ae0722c5404d": "e0333",
            "2d1a55d51dbb804d": "w0405",
            "18c69d2bb545c04d": "w0405",
            "22ba772f3686404d": "upgrade_melee_dmg_1",
            "20cf47390f7dc04d": "e0311",
            "422e3cfc7e7c04d": "w0447",
            "358756638c1d804d": "progression_mod_ranger_t2_miniboss_armor",
            "2a18c1f44af7404d": "p7_projectile_rocket",
            "3d9e823d909f804d": "tempest_multilaunch_chunk_005",
            "6346d3c90a9004d": "w0510",
            "3ebe2140d5f8804d": "loot_item_mod_uncommon_fleetfoot",
            "35763a8db12f404d": "w0567",
            "3f7ff16e9763004d": "w0749",
            b44d6016988804d: "w0702",
            "2708105b5e9ac04d": "w0384",
            "3188d23626be804d": "wave_2guards_armored",
            "1755d8bba9a3c04d": "progression_mod_knight_miniboss_health",
            "347e8e78054d404d": "e0208",
            "220b573c9235004d": "lens_flare_ai_sniper",
            db35751eef7404d: "wave_1drifter_4enraged",
            "1b75c2373144804d": "w0595",
            "3b4ce7811762804d": "loot_item_mod_expedition_exquisite_pickpocket",
            "39481abc0a76c04d": "w0794",
            "1f61526b6719804d": "loot_item_mod_rare_specific_pellet_count",
            "65643157920c04d": "e0605",
            "818ac716cdec04d": "w0015",
            "3419fb00d061004d": "p7_weapon_ai_chaingun",
            "3d52cf37e1eb404d": "e0614",
            "2545776274c0404d": "e0289",
            "1e2cb137a326c04d": "e0243",
            c73c3edc8d804d: "e0493",
            f3dfeb7d2c9c04d: "e0498",
            "22bf19ef4ad1404d": "e0635",
            d1f0529157ac04d: "e0707",
            "38edcd078ecbc04d": "w0711",
            "1a4efd5b8ae1804d": "w0258",
            "3f48e9c5f8f6c04d": "w0147",
            "394481b6ac62804d": "w0764",
            "358428cff12c404d": "w0077",
            "10a9a9ce9db8804d": "shield_object_004_phone",
            "1092a54028f0404d": "w0272",
            "30981193c19b004d": "wave_2tempests",
            "9da3c4db2a0004d": "loot_item_resource_red_brass_ingot",
            de8317424b1004d: "e0593",
            "328928f1bd3bc04d": "w0312",
            "9b0f1ef1a11c04d": "loot_item_mod_dlc1_exquisite_mugging",
            f9f27fd549c804d: "w0030",
            b8d73b0e959404d: "e0132",
            "649e96d1613c04d": "w_at_caves",
            "150184da9cf7004d": "expedition_t2_mod_mode_fast_launch",
            "21b1229d2588804d": "loot_item_mod_dlc1_exquisite_snap_reload",
            "2f34c51127ec004d": "camera_000",
            "357351405e3c04d": "progression_mod_ranger_t1_weapon_damage",
            "1fe4ff305a23c04d": "w0112",
            "2a5553e30993804d": "e0668",
            "3c9ee3f07bb6404d": "w0046",
            "2d0fd57ccf62804d": "e0480",
            "3c10676e0cf7004d": "wave_2drifters_4guards",
            "3308e126700f004d": "e0615",
            "3440b4c15198804d": "wave_3rangers",
            "235a67fd2220404d": "w0521",
            "225f571ec94a404d": "w0166",
            "3fb2ee85b1db404d": "shield_object_004_phone",
            a3a0c9519fcc04d: "loot_item_mod_uncommon_specific_missile_velocity",
            "17d8e5581ad6c04d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            "706ee3a1556404d": "e0072",
            "362c86924b97004d": "e0601",
            "2f72aad8b8b9804d": "e0063",
            "286ce8018e1804d": "e0273",
            "7d6c65e09ec004d": "w0365",
            "350e86e6be49404d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            d7f1b36f0f1004d: "e0145",
            fa2bb138676c04d: "e0303",
            "28fd98003e94404d": "e0147",
            "35d889d67904404d": "loot_playermod_exquisite",
            "37bd12f058e8004d": "wave_2rangers_2armoredguards_3guards",
            "12f2162f737c804d": "w0707",
            "1a6418eb362bc04d": "w0766",
            "1b75e66be258804d": "e0611",
            "22e4c888a1f6404d": "w0411",
            "648a1dd3178004d": "expedition_t1_mod_enemy_smg_resistance",
            "11aa49dfe0d9c04d": "loot_item_mod_expedition_legendary_pickpocket",
            "3cfe5ab2fe6ac04d": "w0343",
            "34efd04e33c4804d": "encounter_m10",
            "2a8dd45a451b804d": "w0808",
            "2e3b780f8c92804d": "e0068",
            "262a7007c941404d": "w0136",
            a3ead8a78e2404d: "loot_item_mod_expedition_exquisite_shared_assets",
            "2b4885c4e50404d": "w0219",
            "32154bd31294004d": "e_west_island_02_01",
            "2590a73cd9c4004d": "w0608",
            "2565da239e60004d": "w0315",
            "1416f21d1faf404d": "w0286",
            "29dd67b080d1004d": "encounter_002",
            "39232de45712004d": "e0321",
            "3625a1fbaa76404d": "w0814",
            "3341072e0570804d": "loot_item_mod_expedition_rare_shared_assets",
            "1014a9703198804d": "e0385",
            "17e6a7e092ae404d": "upgrade_melee_dmg_4",
            "29386c85eb95404d": "p7_weapon_ai_assaultrifle",
            "2c9d066adcd0804d": "progression_mod_knight_miniboss_health",
            "2a9b6e08e370404d": "e0546",
            "2adb702c4594c04d": "w0364",
            "30552b279c54804d": "e0613",
            "2368b2c70b43804d": "w0354",
            "15c76ef6c261804d": "p7_ai_marksman_000",
            "38dc26d8240d804d": "loot_item_mod_exquisite_efficientshield",
            "2a597d6b9761004d": "encounter_000",
            "357ba7db1027c04d": "expedition_t3_mod_mode_empowered_pistol",
            c2b3c886b7ec04d: "e0004",
            "1bbd048fa51b004d": "e0121",
            fdc75735b0ec04d: "w0726",
            "4758966f807c04d": "p7_ai_character_000",
            "29f56d1c4e97404d": "e0267",
            "75181645402404d": "e0580",
            "2a1705725448c04d": "loot_item_mod_common_specific_pellet_scatter",
            "37b4405a18ae404d": "w0085",
            "337cc61e7908c04d": "e0677",
            a1729e7c998c04d: "progression_mod_knight_miniboss_health",
            "64deff6c495404d": "w0305",
            "1a3ff8429318404d": "w0532",
            "277c78ade2f8c04d": "w0738",
            "6204d463d7e404d": "w0294",
            "13547cd041b5404d": "e0569",
            "18f0629c140c404d": "w0005",
            "24a4d4d6a106004d": "e0737",
            "7ed5e533ac2004d": "w_tower_ritual_03",
            "19fbc78e3fb9004d": "loot_item_mod_expedition_rare_backup_mag",
            "26ebbc7ea049404d": "w0165",
            "133c4baf448b404d": "e0392",
            "3ce20532205d004d": "e0036",
            "640f9b6ecfb004d": "loot_item_mod_dlc1_exquisite_siphoning_touch",
            "301e3524f224c04d": "progression_mod_knight_miniboss_health",
            "2f205483c0f5404d": "upgrade_melee_dmg_3",
            "1498c63cec2b804d": "w0166",
            "3daa435f5662404d": "w0723",
            "14528124385f404d": "w0634",
            "2658049b1aaac04d": "progression_mod_knight_miniboss_health",
            "2b77281cb24a804d": "progression_mod_guard_health",
            "3f695b6c0a97404d": "e0034",
            "57a6812acf2004d": "w0459",
            "14fe500a7327c04d": "testwave_driftersrangers",
            "3a0113f4af50c04d": "w0698",
            "8f9cf7b7800c04d": "point_light_001",
            "12655f4b7734004d": "p7_ai_character_000",
            "1b5357361d72c04d": "progression_mod_guard_health",
            f32f4bb88cfc04d: "w0639",
            "1f19804f1bdb004d": "loot_item_healthpack_1",
            c93a3cf712b404d: "e0350",
            "2526f707401a004d": "e0218",
            "3ebee072733c804d": "unlock_melee",
            "341c91aa22c3804d": "w0455",
            "3c10a9e09d63004d": "e_small_1w_1marksman",
            "3e823e215b21404d": "w0360",
            "1327aec1a396004d": "w0439",
            "26577c16f47e004d": "e0705",
            "33394e62aaebc04d": "loot_item_mod_exquisite_deadeye",
            b61445fc802404d: "antiabilitytrigger",
            bc0b284df1404d: "p7_ai_launch_drifter_000",
            "7f263f1c591404d": "loot_item_mod_uncommon_weaponrof",
            "347a46c9f089004d": "wave_4knights",
            "242c0aa8c235404d": "w0129",
            "386b478fe118004d": "e0566",
            "3fc9ebdaf179004d": "p7_ai_character_000",
            "1279a09e0a7b404d": "w0060",
            "317fc077bf85404d": "loot_item_mod_dlc1_exquisite_snap_reload",
            "17269dc65f0cc04d": "w0495",
            "2db6b635a4da804d": "e_medium_1w_6moldwalkers_3turrets",
            "3e42ad5c2faa804d": "wave_1tempest_2enraged",
            ac4421058c2c04d: "e0690",
            "7c23f6cb890004d": "testwave_tempest",
            "2016b819d8d1004d": "w0358",
            "3c24bb97b029004d": "p7_ai_character_000",
            "5d7dc632ebb404d": "loot_item_mod_legendary_specific_gyroscope",
            "2a2d6ea2b970404d": "w0779",
            "3db363e0894e804d": "w0097",
            "3cf77a09c375404d": "tempest_wind_area_box",
            a95f9992cee004d: "shield_object_002_bottle",
            "3108df3d6d03404d": "w0280",
            "1a4e7848f183404d": "e0730",
            "69d2aacc17004d": "e0064",
            "170416cc5e95c04d": "w0240",
            "4c67913e3a7804d": "w0245",
            "77afe1ee6db804d": "e0294",
            "239a2d3fbeabc04d": "e0220",
            "1342364a47a404d": "e0344",
            "32ef46604a83c04d": "w0511",
            "17b7166cfefe404d": "loot_item_mod_dlc1_exquisite_snap_reload",
            "303683214820404d": "p7_ai_character_000",
            "2067cbafdd1404d": "loot_item_resource_common_remote_thought",
            "1768fc526c61004d": "e0225",
            "146e5a643a69004d": "e0729",
            "29b46e9fd062404d": "e0240",
            "2079cab3984d804d": "e0583",
            "2bbed7b7f3004d": "progression_mod_tempest_t1_miniboss_launch_damage",
            "1bc53b82376cc04d": "w0628",
            db3d14fd1b5404d: "progression_mod_knight_miniboss_health",
            "1e8959e5405c804d": "progression_mod_knight_miniboss_health",
            c943e7f9caf404d: "e0176",
            "16196b5d92a2404d": "w0092",
            "939c307f4ee004d": "w0197",
            aa656c4c653004d: "w0405",
            "2e7429867a5404d": "loot_item_mod_rare_specific_stabilizer",
            "3c74e1460e9dc04d": "loot_item_mod_common_mentalfortitude",
            "103227aa78bcc04d": "e0307",
            "29f8bb9edec4404d": "progression_mod_knight_miniboss_health",
            "108fb96261d6004d": "e_at_tower_enemies",
            "2d6da034c6fd404d": "e0299",
            "365c51cbd690c04d": "w0731",
            "203d2c6b63a6804d": "e_large_1w_tempestenraged",
            "2f76c8663f65404d": "shield_object_006_concrete_chunk",
            "22fe4f7b3c55404d": "loot_item_mod_exquisite_leafonthewind",
            "2742edf32bee404d": "w0296",
            "9f1e0652254c04d": "loot_item_mod_exquisite_specific_gyroscope",
            ef2595d409b004d: "e_medium_3w_nomagic_nosnipers",
            df6713ce434804d: "e0325",
            "2d1b92ffe974804d": "e0111",
            "197b69637caf404d": "e0709",
            "23deac67fed804d": "e0562",
            "22e010b2f17e404d": "w0748",
            "2054a8ed943f404d": "wave_1knightelite",
            "3aa8275077ea404d": "w0706",
            "3366c4d72e1b804d": "e0120",
            "25774f8af04d004d": "e0717",
            "22a78beaf77cc04d": "loot_item_mod_common_accuracy",
            ef6277fa95b804d: "shield_object_006_concrete_chunk",
            "3811330d3c05c04d": "e0441",
            "261eaee6dc4d804d": "e0430",
            "2e0d8d63161a004d": "w0727",
            "2ce2adef260b404d": "loot_item_mod_exquisite_specific_missile_blast_radius",
            "3cfa595c2708c04d": "e_002_guard_1_large",
            "2656ceebea34404d": "w0204",
            cd57aedc660404d: "e_small_1w_2moldwalkers_2rangermix",
            "12ebf6257d86004d": "e0464",
            "1c6cfc831923404d": "e0094",
            "32f33c89d853c04d": "e0097",
            e2513bb991b004d: "e_small_1w_3rangers_2armoredguards",
            "3fe7884f5331804d": "wave_1flyingenraged",
            "2ef0ce988f1b804d": "e0452",
            "113eec34cc5ac04d": "w0120",
            "26ad0e535c2d804d": "w0148",
            "10d0e079ad33404d": "w0115",
            "5bbe9eb0617804d": "w0028",
            "12e03b026bebc04d": "e_large_5w_tempest_miniboss",
            "1327740558c2404d": "e_large_3w_2tempests",
            "173e12cf21d6804d": "e0265",
            "2782c1f6eb90c04d": "wave_5guards",
            "269839207febc04d": "progression_mod_ranger_t2_weapon_damage",
            "294186039069404d": "w0313",
            "25750f0de296804d": "loot_item_mod_expedition_exquisite_scavenger",
            "301c19d1c9f2804d": "e0310",
            "1bb9d46ef750004d": "e0439",
            "11f80a2b6a32804d": "p7_projectile_bigspore",
            "36680abb6624c04d": "unlock_levitate",
            "20e570648d4f004d": "wave_2armoredguards_3guards",
            "3b0ac07930f5804d": "loot_item_mod_dlc1_exquisite_pink_mist",
            "2fb92774aacc404d": "progression_mod_ranger_t2_health",
            "32952b498d3a804d": "w0435",
            "3af49814118ac04d": "w0008",
            "260e47e9587e804d": "e0664",
            "228f3fccf6ed404d": "e0005",
            "104f9551f082404d": "unlock_launch",
            "3f9b99b4a77f404d": "loot_item_mod_dlc1_exquisite_masters_strike",
            "38d39512ecf2404d": "w0505",
            "2b8574e78323c04d": "loot_item_mod_common_bloodthirst",
            "38e74d3264ca404d": "loot_item_mod_legendary_accuracy",
            "1bc68ac05791404d": "w0041",
            "79f27adbe12804d": "e0713",
            "3f16fb94b381804d": "w0199",
            "2472391a7513404d": "e0135",
            "1ebe6b5b942d404d": "e0595",
            "1439d697de11004d": "e0154",
            "1d168e460ef6804d": "progression_mod_knight_health",
            "1f5eddb435f9404d": "w0664",
            "37f84d153b9cc04d": "p7_weapon_ai_assaultrifle_marshall",
            "28b28f62e2c5c04d": "upgrade_resource_amt_4",
            "2854fac09a4ac04d": "progression_mod_ranger_t2_weapon_damage",
            "128f69a929bbc04d": "loot_item_mod_expedition_exquisite_recycling",
            "1962c8507f6c804d": "loot_item_mod_common_weapondamage",
            "3efddb3036ef004d": "e0420",
            "2c396c4c783c04d": "loot_item_mod_rare_leafonthewind",
            "517739a2668004d": "e0142",
            "1cca4a9be91a004d": "e_at_caves",
            dd1742e5689004d: "e0060",
            "2f97439e6d3bc04d": "shield_object_001_mug",
            "261106172616404d": "w0715",
            "32bd2fdd2d15c04d": "e0575",
            "1fb841a80e0f404d": "w0677",
            "149721089d63804d": "e0104",
            b2560f7e448404d: "loot_item_mod_dlc1_exquisite_lightning_reflex",
            "2bcca71a11ad804d": "wave_1marksman_2enraged",
            "3dfb2d9ff411004d": "w0469",
            "3464717d18a4804d": "w0302",
            "1006e3e5d0ed804d": "enemy_forward_shield_elite",
            "145f4f045ef1804d": "loot_item_mod_dlc1_exquisite_shard_refraction",
            "1c4ef706ef18804d": "progression_mod_knight_miniboss_health",
            "34fad70f12a3404d": "e0547",
            d2049b9be2c804d: "w0281",
            "1d14300ff29a004d": "e0133",
            "31db9cecc599004d": "loot_item_mod_rare_specific_receiver",
            "36cd209f6231004d": "e0134",
            "2949b90e2c4c804d": "progression_mod_knight_miniboss_health",
            f34224c7629804d: "w0195",
            "1baa94adc6a8004d": "expedition_t1_mod_enemy_increased_accuracy",
            "2957e7c79b4f004d": "e_small_1w_1rangerultra",
            "3180e58b1544c04d": "w0323",
            "3dde32dca92bc04d": "w0484",
            "3bf911824159404d": "upgrade_resource_amt_2",
            "36394a67d584804d": "e0282",
            "2bbd52a421f1804d": "upgrade_shield_strength_1",
            "762f6714bc8c04d": "w0056",
            "11ec42264caa404d": "e_small_1w_1moldwalker",
            cd3f47ae58c004d: "e0200",
            "22c4260d6a9f404d": "wave_2armoredguards_2guards",
            "25fed0ab6253404d": "e0020",
            "3b861e2aa688404d": "e0476",
            "35b59f03144e804d": "p7_weapon_player_railgun",
            "39df1f4d0c50004d": "e0529",
            "22a466ffda68804d": "e0398",
            "1053e4ad1b06004d": "p7_ai_drifter_000",
            "2797274fc77ec04d": "wave_3moldwalkers_1guard",
            "3f49a65cd8a8804d": "p7_ai_character_000",
            "93c2aa6d908c04d": "shield_object_003_leverarch",
            "2060096f27aa404d": "p7_weapon_ai_sniper",
            "9bfb41e3f60004d": "upgrade_levitate_desc_2",
            "2e192830e447404d": "loot_item_mod_common_weaponclipsize",
            "1684cf9150e2404d": "w0166",
            a06a17d6789c04d: "w_tower_02_02",
            "3a512bcd8ccf804d": "e0602",
            "38c530023b40804d": "expedition_t2_mod_mode_decreased_weapon_damage",
            "1e6ee85a9996c04d": "w0405",
            "1671a03b892ac04d": "e0180",
            "2d99ccd3547ac04d": "shield_object_004_phone",
            "151a25fa6669804d": "w0253",
            "1fc193ac2309c04d": "progression_mod_knight_miniboss_health",
            "10802ded1b18404d": "w0069",
            "3642e5e4bda6804d": "w0192",
            "1f6aaeb130f8804d": "w0550",
            "1b1e340c2921804d": "p7_ai_character_000",
            "3880b6b33458804d": "w0064",
            "5f13a584763404d": "e0724",
            "4628934d0e5804d": "progression_mod_tempest_t1_miniboss_shield_damage",
            b24b5963ca4004d: "progression_mod_turret_projectile_t1_damage",
            "10689a241e3cc04d": "e0029",
            "2aa79e59aad8804d": "w0632",
            "2604d26b7d6e804d": "w0330",
            "101ee32464f1004d": "p7_weapon_ai_pen_notepad",
            "12567dca0d0b804d": "w0473",
            "1ab7d575d0c7404d": "testwave_4marksmen",
            "273fea6cb651804d": "w0290",
            "3b45024cc804004d": "shield_object_004_phone",
            "2472ec7c5628404d": "e0655",
            "78cdec36a5e804d": "loot_item_mod_expedition_rare_graverobber",
            "27c00c94a87a404d": "loot_item_mod_exquisite_mentalfocus",
            "1abf478be6ddc04d": "w0373",
            c98be2c35b5804d: "expedition_t3_mod_mode_fast_launch",
            d259f2ad00f404d: "e0258",
            "36851e557365804d": "progression_mod_drifter_t2_health",
            "239fb41c650404d": "e0462",
            "1111c307bd70404d": "e0017",
            "3f728d0b1c4804d": "w0035",
            "2eb58d2d1bfc804d": "loot_item_mod_legendary_fleetfoot",
            ca3d885d3ec804d: "w0332",
            "9e3cf1d4089c04d": "e0334",
            "39f7f4e1de7ec04d": "e0168",
            "185295c33a22c04d": "w0587",
            "163dba068f8e404d": "loot_item_mod_expedition_legendary_graverobber",
            "2104555578ab004d": "p7_projectile_frame_rpg_rocket",
            "3a48bf8ff69cc04d": "w_monolith_03",
            "2206617f9512804d": "loot_item_mod_rare_fleetfoot",
            abdc02fdd85004d: "w0242",
            "27a08a4464e8c04d": "loot_item_mod_expedition_legendary_bullet_collector",
            "22d0d83d2871804d": "e0436",
            "27b86d25f4af804d": "w0421",
            "39a57a68d8f004d": "e0379",
            f15efae8a75c04d: "loot_item_mod_expedition_exquisite_mind_opener",
            "242c3f1bc707804d": "serviceweapon",
            "2d43f2b4c5d7004d": "w_tower_03_01",
            "1aac296469d7404d": "e0489",
            c557b343ec2c04d: "w0640",
            "2fc4e3a2b45004d": "e0561",
            "2aeb2031a3b3404d": "w0009",
            "1cdccf15d410804d": "loot_item_inventory_6",
            "3c0b13257be8c04d": "e0092",
            "1049582549d4804d": "progression_mod_healer_orb_health",
            "69462f8715d004d": "wave_2drifters_2rangers",
            "2b5bd821e146804d": "w0533",
            "32591f128fa4c04d": "tempest_multilaunch_chunk_001",
            "82237d4c616c04d": "p7_ai_character_000",
            "16defa93f8c9804d": "e0304",
            "32acdb9b6a83804d": "w0410",
            "32337769e74a004d": "w0680",
            "1ddd4cd3e8f804d": "e0472",
            "1b036a46e7d3004d": "progression_mod_knight_miniboss_health",
            "23e12d474973804d": "w0621",
            "16cda1c606d404d": "wave_3moldwalkers_1turret",
            "18f8771f081f404d": "loot_item_mod_exquisite_launcher",
            "106feec54be5c04d": "unlock_compel",
            "20b266e8d139804d": "w0438",
            "1fa04e5c83e4804d": "e0206",
            "2ea4871b6fa9c04d": "w0266",
            "2659ad05c961804d": "w0187",
            c3b5b4e8e16c04d: "progression_mod_knight_miniboss_health",
            "2c86da8f06a5c04d": "loot_item_mod_expedition_exquisite_bullet_collector",
            "14b7e1eaf2c0c04d": "w0101",
            "36fb28f86700804d": "shield_object_006_concrete_chunk",
            "9ff4646a3f4804d": "w0045",
            "1a70ba271292c04d": "e0574",
            "3799a27d88c5c04d": "w0696",
            "2e0f3d389114004d": "e_large_1w_6moldwalkers_hiss_mix3",
            "3790619c7a66804d": "loot_item_mod_uncommon_rapidrecovery",
            "3d2b57efa549804d": "point_light_000",
            "3fcec1ba0d59404d": "e0368",
            "1377ca6f1fb3404d": "p7_ai_knight_000",
            "2ba2e51dc873c04d": "w_west_island_02_01",
            "3056fa46f9e804d": "e0402",
            "2b12b2bf594b804d": "e_small_1w_2moldwalkers_3guardmix",
            "2e67cd9ec923404d": "progression_mod_guard_t1_miniboss_health",
            "1cbdd3dd27f804d": "loot_item_mod_common_weaponclipsize",
            "1bd124a076b0804d": "e0689",
            "3093a4033e6cc04d": "w0584",
            "93899c01746c04d": "shield_object_006_concrete_chunk",
            "1f789a01d664c04d": "e0332",
            "1935390331d8404d": "w0318",
            "138e72600c17404d": "e0267",
            "3a0c1ea7eed4804d": "w0279",
            "30d75eff0f8804d": "e0343",
            "264a6ad62b25c04d": "w0637",
            bbf875c81d5404d: "e0042",
            "21e3b83aef65c04d": "w_east_island_01_01",
            f7f7ce06a32004d: "expedition_t1_mod_enemy_rocketlauncher_resistance",
            "255d6bb2d4b9c04d": "w0454",
            "21c5d6d1d465804d": "progression_mod_marksman_t1_armor",
            "1c9ce9f1b26ec04d": "loot_item_recipe_daily_vendor_player_mod_set2",
            "28b5e2c9707e004d": "e0528",
            "3e9efa47f013c04d": "upgrade_compel_drain_1",
            "2105dc4c4ace004d": "e0496",
            "8894cbf4cb8404d": "w0557",
            "2654376e2f08c04d": "loot_item_mod_legendary_bloodthirst",
            "32e6a521a9d8c04d": "w0087",
            "3164b37525e8804d": "e0051",
            "2d239cd91898c04d": "w_cubicle_2",
            "3dc5f184bc96804d": "e0641",
            "21f96d126901404d": "expedition_t3_mod_mode_empowered_shotgun",
            "21f2f0e3d5f4804d": "w0259",
            e600bf543ed804d: "p7_ai_marksman_000",
            "33eb515f1e0c804d": "w0422",
            "1dead18f71c2004d": "w0014",
            "1558377e95c7c04d": "progression_mod_knight_miniboss_health",
            "21a922330a38004d": "w0780",
            "38161b6549cec04d": "w0185",
            "10d403911d41004d": "wave_2moldwalkers_3guardmix",
            "242b63bc7840004d": "progression_mod_guard_t1_miniboss_armor",
            "218637497120c04d": "expedition_experimental_no_resource",
            "13ea647de524404d": "loot_weaponmod",
            "3e45eb3ebaf804d": "loot_item_resource_tungsten_pin",
            c7b797ff898004d: "e0534",
            "40f86b2afd3804d": "e0058",
            "1b0d347cc3c4804d": "w0023",
            "163b7ae8bd61804d": "progression_mod_ranger_t2_weapon_damage",
            "3616abed0c4c004d": "e0509",
            cf46d0925e5404d: "loot_item_mod_dlc1_exquisite_kinetic_battery",
            "3172b0bc6029804d": "w0116",
            "1b43d8ef7920404d": "loot_item_mod_legendary_leafonthewind",
            "2611c28c5795c04d": "p7_weapon_ai_rpg",
            "1535894271d5404d": "p7_weapon_ai_moldone_sporelauncher",
            "54614def6c2c04d": "e0698",
            "327d08d2758e804d": "expedition_t3_mod_mode_empowered_smg",
            "3326c604522ac04d": "e0096",
            "30d7126431b5c04d": "loot_item_mod_expedition_legendary_gift_of_charon",
            "35e35c18c382404d": "w0644",
            "20cc8a7e7927c04d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            "1708a98034bf004d": "loot_item_mod_exquisite_lightfoot",
            "30c6ef49e48f804d": "expedition_t2_mod_player_increase_player_stamina",
            "212ee4f4136a004d": "w0683",
            "2a3867f45d9c804d": "p7_weapon_ai_smg",
            "29a1934ae03b804d": "e0066",
            "1017f37cdbdfc04d": "w0363",
            "308f287020c4804d": "w0562",
            "2b35829c07b3404d": "w0767",
            "3dd78144807c04d": "upgrade_shield_strength_3",
            "385869390165404d": "e0086",
            "25f3dd85251ac04d": "point_light_000",
            "38f20253630cc04d": "e0033",
            "3802a42ed675004d": "w0807",
            "2e2786e6e715804d": "e0533",
            "2fe7b95abbed004d": "p7_ai_character_000",
            "165012285420004d": "wave_e15w01_4guard_2ranger_2rangersmg_1tempest",
            "323e2b29cfbbc04d": "e0447",
            "5494b08dc37004d": "w0201",
            "2543b16e5527004d": "e0307",
            b9bbdfa8e6c804d: "e0130",
            "3abba4722634404d": "loot_item_mod_rare_lightfoot",
            "21f66bb286f8804d": "w0479",
            "1a300901e5c7404d": "w0405",
            "18662d5694f0804d": "w0058",
            "10d43767d471804d": "loot_item_mod_dlc1_exquisite_immediate_response",
            "22e1bfff6521c04d": "w0699",
            "3d1b5db48429404d": "loot_item_mod_legendary_specific_pellet_scatter",
            "180992cab003404d": "e0177",
            "12eb4fa8c44dc04d": "e_medium_5w_nomagic",
            "2852264cef11004d": "e_medium_1w_drifterenraged",
            "1d503bd87bd9804d": "w0142",
            "15fb4eb9dc65004d": "w0554",
            "18c2522f711404d": "w_monolith_01",
            "286b8520e823004d": "w0581",
            "2a061cec7488404d": "e0134",
            "22a4d63fa9cd804d": "e0156",
            "1c21c05eda0f404d": "loot_item_mod_dlc1_exquisite_coin_collector",
            "2e0ec27a5008c04d": "loot_item_mod_uncommon_improvedphysique",
            e06dbf4dc32004d: "wave_2enraged_2armoredguards",
            "385ce59cc49a404d": "e0721",
            "1d8f875bde77804d": "expedition_t2_mod_enemy_increased_accuracy",
            "2b1730e8608fc04d": "p7_significant_rigid_body_000",
            "39701480444404d": "w0535",
            "208a3dec6333c04d": "p7_ai_character_000",
            e15f4f61565404d: "w0619",
            "3b6652593610404d": "e0670",
            d14c8b28e9e404d: "e_large_5w_rangersmarksmen",
            "16a41b7d866bc04d": "loot_item_mod_expedition_legendary_vampiric",
            ce9e0944435804d: "e0085",
            "3bdc5e963f3c004d": "e0329",
            "36fc08d2efec04d": "w0334",
            "2bea13f1c368404d": "w0722",
            "29320f3b3275804d": "e0708",
            "73f92ec5e58804d": "e0106",
            fdb293c98c6804d: "e0182",
            "3d1dbed46727404d": "w0073",
            "133f440600f2004d": "p7_ai_character_000",
            "2d35d10036c8c04d": "loot_item_recipe_daily_vendor_player_mod_set2",
            "14586da84dd3404d": "e0069",
            "36ddb21a3029404d": "e0360",
            "3b314d0de306c04d": "pointlight_muzzleflash_charge",
            "2f4b2b9c2ae1004d": "wave_4moldwalkers",
            bcf665826ac04d: "e0434",
            bb5d0dba905404d: "progression_mod_knight_miniboss_health",
            "181d7d176e33004d": "w0297",
            "1df82e7aabe2c04d": "w0220",
            "3a7c5077c10d404d": "w0271",
            "39230f9063d7c04d": "p7_weapon_player_rocketlauncher",
            ecc40f752e804d: "expedition_t2_mod_player_increase_player_health",
            "9b2f64d054dc04d": "wave_1guard",
            "254a830d419dc04d": "wave_1drifter_3guards",
            b34aafc20c6804d: "e_small_3w_moldwalkers_1_1_1",
            "3a68407b8f5004d": "e0627",
            "2af6d21cf00d804d": "e0394",
            "329a00c7d1c7404d": "e_small_1w_4turrets",
            "23d0741acd2a404d": "loot_item_mod_dlc1_exquisite_siphoning_touch",
            "15ba45db0132804d": "e0524",
            "25658f6d6656404d": "w0801",
            "2e87e136e88a404d": "e0141",
            "131af1ab4210004d": "loot_item_mod_exquisite_specific_zoom",
            "16a1de3de7e1004d": "e0651",
            "2340e8bc04f5004d": "e0100",
            aae08da0e61404d: "expedition_t1_mod_enemy_increased_damage",
            "2aa9e6b8f124c04d": "w0660",
            "935b5e984f9004d": "loot_item_mod_rare_weapondamage",
            "3ab681ed1177804d": "wave_3enraged_2armoredguards",
            "1b195a2293b8804d": "e0466",
            "102a3282da14804d": "e0552",
            "189499f8cecd404d": "loot_item_mod_rare_bloodthirst",
            "274761f1b2fcc04d": "e0163",
            "2fa030ce3628004d": "w0592",
            "5e6c6694578804d": "w0538",
            "371aff4d7d8404d": "e0738",
            "3ec653ed3832c04d": "shield_object_006_concrete_chunk",
            "3eed1a31990c804d": "e0144",
            "3a5b649ec4b7404d": "w0180",
            "2a7c9591c36ac04d": "w0546",
            "6d9b6de9fbe804d": "enemy_launch_chunk",
            "15b05c499c75804d": "w0462",
            "114f9130922b804d": "e0367",
            "22f1eaa1cf68c04d": "e_014_tempest",
            "3136290df6b0c04d": "shield_object_006_concrete_chunk",
            "1bc43a937884004d": "e0652",
            "2a75317f7147004d": "e0324",
            "29e8eef9d1bb004d": "e0010",
            "3bee5a675e74404d": "e0663",
            "2c6d535ba767004d": "w0345",
            "184e53349958004d": "loot_item_recipe_daily_vendor_weapon_mod_set2",
            "2a15eeda67f1c04d": "w0488",
            a40ee608708804d: "w0501",
            "1a6ce4431d74004d": "launch_object_002_pen",
            "35a25dfee1804d": "w0166",
            "13e22c002adb404d": "e0336",
            "17a31ac6e105404d": "loot_item_empty",
            "282429b533f3404d": "e0522",
            "1e27b28897c6004d": "p7_ai_character_000",
            "2f7895b57453404d": "e0084",
            ef33d7acd39804d: "w0585",
            "74ad7afbbb1c04d": "loot_item_mod_dlc1_exquisite_kinetic_transfer",
            "14d47290897ac04d": "w0223",
            "2e16af876331804d": "wave_2moldwalkers_1guard",
            "232aa80f2a9d404d": "w0772",
            dd9b82757abc04d: "w0033",
            "30dc18c9d897004d": "expedition_t1_mod_mode_decreased_weapon_damage",
            "34128999d306004d": "w0194",
            "15738644909ac04d": "e0190",
            "38a79e9552ec804d": "e0105",
            "31bf67d50f27c04d": "e0625",
            "8e422ac8083c04d": "e_s030_caves_1",
            "14390956abba404d": "w_tower_02_01",
            "22363bee022c404d": "expedition_t2_mod_enemy_spray_resistance",
            "29eff9722156804d": "loot_item_mod_common_launcher",
            "1934dd8ab2aec04d": "w0215",
            "2397feaf264a404d": "e_medium_4w_drifterrangersguards",
            "1eab18aa5011404d": "shield_object_006_concrete_chunk",
            "1a793a7f1a04c04d": "loot_item_mod_exquisite_shieldreload",
            "1cdba76f4633804d": "w0232",
            "128303314add004d": "wave_3drifters",
            "3c91f9ce94bb404d": "p7_weapon_ai_sniper",
            "3c67a70609b5c04d": "e0485",
            f6a3b93f49d404d: "expedition_t2_mod_enemy_increased_damage",
            "79821b4baafc04d": "e0328",
            "2c23f2b9368e404d": "w0629",
            "353122f963c5c04d": "p7_weapon_ai_restrainingchair",
            "368ceacbdf8b804d": "p7_ai_character_000",
            "301a1165b867c04d": "e0739",
            "1e1d844584edc04d": "e_west_island_03_01",
            "5c16e5e207c804d": "enemy_forward_shield_miniboss",
            "2fa1b14577bcc04d": "w0212",
            "2181f308a9a4804d": "w0682",
            "1b6fe1c7cc02804d": "e0684",
            "2c6d70401a59004d": "wave_1ranger",
            "3a0c08cbc656004d": "shield_object_006_concrete_chunk",
            "61d420d332c404d": "w0007",
            "35144c8728f4c04d": "w0543",
            "1b73f84712e0404d": "progression_mod_knight_miniboss_health",
            "3b36d52be51cc04d": "wave_2rangers_2armoredguards",
            "151ad4c55a24004d": "e0357",
            "474b4af4c08004d": "e0740",
            "309ce0c86a4dc04d": "significant_rigid_body_000",
            "2ef7af01a558004d": "e0486",
            "7fccfbf188f804d": "w0311",
            "2095d41ffca6004d": "e0271",
            "25cdcd707059004d": "e_small_1w_2moldwalkers_1guard",
            "2cbfa9bab15b004d": "loot_item_mod_exquisite_specific_zoom",
            "35692d6548d5004d": "camera_man_camera_000",
            "136470d8df92c04d": "w0777",
            "1b06f01abd7c804d": "e0678",
            "2401b4819a89804d": "progression_mod_knight_miniboss_health",
            "55bf312f1ec004d": "loot_item_mod_dlc1_exquisite_masters_strike",
            "2c88ff4984eb404d": "loot_item_mod_common_deathfeeder",
            "3dab3d2fafd8c04d": "e0701",
            "2bcec7a40bdf004d": "w0151",
            "141a1c1b5ca2804d": "e0241",
            "2007dbb8a2b9404d": "e0167",
            "223d0a0c5b8b804d": "w0602",
            "80fffa9ab40004d": "loot_item_mod_exquisite_specific_receiver",
            "2df41ea84a41404d": "progression_mod_knight_melee_damage",
            "3183c1bb7f67c04d": "w0347",
            "20fb62e74a3f804d": "e0307",
            "1ff1e7d00f3ec04d": "w0793",
            "1e6804db1e84404d": "e_004_guard_2_large",
            "3207dce95135404d": "w0049",
            "13013fcc60d7404d": "w0724",
            "15bcd34a0d8e804d": "w0160",
            "27918c47a36c04d": "e0649",
            "19b142c6960ec04d": "e0581",
            "9d215052983c04d": "loot_item_inventory_3",
            "15cba419d47bc04d": "ability_upgrade_item_000",
            "20a775ad866fc04d": "w0079",
            "17b88e040be5004d": "e_011_drifter_mixed",
            "3dee55fd982c04d": "w0571",
            "4a47208a4da404d": "e0095",
            d53d5da36dfc04d: "e0122",
            "2b2141f65ab1004d": "wave_3rangers_2guards",
            "5d633aaed54404d": "e0211",
            "3a0cef3fdbed004d": "w0442",
            "19dcad96bd69804d": "w_west_island_03_01",
            "1d287bfdf150804d": "e0019",
            "156f61806d8004d": "p7_ai_character_000",
            "26353db8e20ac04d": "loot_item_resource_polymer_sheet",
            "9356571ff2b404d": "w0102",
            d71abe23c17404d: "upgrade_compel_drain_4",
            d73517bb9c6004d: "progression_mod_ranger_t3_miniboss_melee_damage",
            "3346fe748e4c004d": "p7_projectile_torment",
            "23fe4eb3f5c6804d": "e0437",
            "3bfe2d2d0109404d": "w0118",
            f4e80c4d5ca804d: "progression_mod_marksman_t1_weapon_damage",
            "81534b14c3e004d": "w0109",
            "1b6a7b2853e8804d": "e0582",
            "508fd5d810b404d": "w0019",
            bede873b5c3804d: "loot_playermod_rare",
            "2d18833fe934804d": "e0629",
            "1b12d5aa8dc9c04d": "p7_ai_character_000",
            "345fee763469804d": "upgrade_ground_slam_1",
            "3135ad1c1279804d": "w0528",
            "2b7e60eeb2b9004d": "upgrade_launch_object_category_2",
            "3004a92b34db004d": "p7_ai_enraged_000",
            "263e941da7b804d": "w0667",
            "22db5e4bb290804d": "upgrade_launch_dmg_1",
            "2c091a4fe893404d": "e0237",
            "3bbb52ce52f6804d": "w0275",
            "1b4eb7be24d9004d": "shield_object_006_concrete_chunk",
            "2cad32e63ec6804d": "w0776",
            ab632b28896404d: "w0654",
            "3e5a19999e43804d": "loot_item_inventory_2",
            "3165ad01e292004d": "e0549",
            "83d0ecaf841404d": "e0200",
            "30a4af3ca18ac04d": "e0559",
            "390d5cec9059c04d": "wave_1marksman_2rangers",
            "1e4d1ffeb17f804d": "upgrade_launch_dmg_1",
            "646540741a6804d": "w0502",
            "3f39f2a8510fc04d": "e_small_1w_3rangers",
            "2007324cad20404d": "e0166",
            "7a3f3054543c04d": "e0661",
            "371f798f0604004d": "wave_1ranger_1armoredguard_1guard",
            "236b4d8f7645804d": "w0309",
            "208bf3a92931004d": "e_s020_caves_2",
            "3ae91c08d5b8404d": "w0072",
            "90d61b52e2b404d": "e_small_1w_1rangerelite",
            "15c5b343ec24c04d": "w0610",
            "52b904cb0ee404d": "w0265",
            "2760747c6579004d": "e0490",
            "3d493f20de6c404d": "expedition_t2_mod_mode_increased_weapon_damage",
            "6fdf43ee46b004d": "wave_e13w02_4guard_3ag_1knightmg",
            "30829295cec1004d": "w0703",
            "1c2108c89977404d": "loot_item_mod_uncommon_shieldreload",
            "3d3900574ea8004d": "w0414",
            "36d499279341c04d": "w0448",
            "2fab44d45c02004d": "e0693",
            "166da6e5cb08804d": "loot_item_mod_expedition_legendary_rampage",
            "2bc43185feb9804d": "loot_item_mod_dlc1_exquisite_bombardment",
            "1fc5e7a5e428004d": "wave_1marksman_3enraged",
            "3d1d68400e76c04d": "w0125",
            "31370ec309cc804d": "p7_ai_character_000",
            d3e20ba2166004d: "w0689",
            "1314dd56c221c04d": "wave_9moldwalkers_3turrets",
            "282a94738449c04d": "w0805",
            "3b54a70d6b2cc04d": "e_small_1w_3armoredguards",
            "1c8ae2c1954004d": "e0359",
            "16bbf8a7febb404d": "e0314",
            "13be6cdfb81dc04d": "w0431",
            "23140702d6a3004d": "e_small_1w_4moldwalkers",
            "25764c24814bc04d": "expedition_t3_mod_player_increased_weapon_damage",
            "2272e9544281404d": "wave_3moldwalkers_2guardmix",
            "17f1fae344c1804d": "e_003_guard_2_intro",
            "19146b55c1b9004d": "e0612",
            "301e1b6a6cb3004d": "e0339",
            "2af662630a40004d": "progression_mod_tempest_t1_shield_damage",
            "292c753d6ab4004d": "e0686",
            "3ad92ecff485804d": "loot_item_mod_dlc1_exquisite_shard_refraction",
            "1d94cd866c3e404d": "loot_item_mod_rare_specific_zoom",
            "3997f25e2370004d": "e_small_1w_1drifterlaunch",
            "34b8d6818fd9004d": "w0162",
            "3bd2428eed00404d": "w0158",
            "33f0add0e1b5c04d": "w_s020_e1_w2",
            "1358f21be26ec04d": "w0564",
            "32fce31eac7f804d": "loot_item_mod_rare_weaponreload",
            "1397a85e6d5bc04d": "p7_ai_character_000",
            fc36e306005c04d: "w0520",
            f9d24f36c0804d: "e0551",
            "29423b1ba8c1404d": "loot_playermod",
            "1c0363f03d90c04d": "w0386",
            "2c06eaefe897404d": "loot_item_mod_rare_weaponreload",
            "158c9e3cf9b3404d": "p7_ai_character_000",
            "8efddc7386d004d": "upgrade_launch_dmg_1",
            "2c05b3ceb3b0804d": "e0626",
            "32f839b133b3004d": "loot_item_mod_expedition_legendary_mind_opener",
            "358368f7caf6404d": "w0126",
            "1dba762a01ba004d": "upgrade_resource_amt_3",
            "14fe7e08a0c404d": "progression_mod_knight_miniboss_health",
            "2ab7ba17f1cd004d": "p7_ai_character_000",
            "25aa8840bcec804d": "wave_1tempest_3enraged",
            "1d95040fe644404d": "e0143",
            "1dfe9e3e8faa404d": "loot_playermod",
            "2f485682194d004d": "loot_item_mod_expedition_legendary_healing_thoughts",
            "3c0601913a23c04d": "w0337",
            "4a794b64d3d004d": "w0393",
            "1624291bf3a8004d": "loot_item_mod_common_fleetfoot",
            "2fd2d734e7aa804d": "e_large_1w_9moldwalkers_5turrets",
            "13cfc89d5e28404d": "w0068",
            "34b57a1ff94c004d": "progression_mod_ranger_t2_miniboss_weapon_damage",
            de9b6deedcc404d: "loot_item_mod_common_weapondamage",
            "9d9bc9cf122404d": "w0098",
            "3ceeacb092cf004d": "wave_2rangers_3enraged",
            "30c0374c50f6004d": "p7_projectile_rocket",
            "277e7c8bd931c04d": "w0645",
            "2403b8ee069e004d": "w0166",
            "16bceca74835404d": "w0401",
            "231a11ebcfdf404d": "w0467",
            "24cc37af01b1804d": "e0186",
            "1c1cc1cb0610004d": "w_monolith_02",
            "9c3278f9486404d": "e_small_1w_3moldwalkers_3guardmix",
            "545d5d1f4eb804d": "e_small_1w_3moldwalkers",
            "334be19fe87b804d": "vfx_dummy_object",
            "3f8ff2efd9c9404d": "e0110",
            "1ce9454e397f404d": "w0798",
            "3ad68ab2206004d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            "28c21cd3df57804d": "p7_weapon_player_rocketlauncher",
            "39ad482182c0804d": "loot_item_mod_expedition_rare_emergency_reserves",
            "2474dde97807404d": "wave_3moldwalkers_3guardmix",
            "7dd61755190404d": "e0526",
            "227bdc8f8138004d": "w0256",
            "138e89ba9512004d": "w0128",
            "1e00a0c6b55d804d": "loot_weaponmod_rare",
            "335a2419e9c6c04d": "e0134",
            "1476aba1fd5f804d": "w0579",
            "448581874de004d": "e0082",
            "192caaf0c8e1004d": "loot_item_resource_common_undefined_reading",
            "34944e47d810404d": "e0637",
            "3c5af7d628f2c04d": "loot_item_mod_uncommon_launcher",
            abb49e7ccb6804d: "progression_mod_knight_miniboss_health",
            "1b4d5c27afd1404d": "wave_e08w01_4eliteranger_1horb",
            "378de1edc7b4c04d": "w0518",
            "1b37303f80c9804d": "e0554",
            "2873b4c19807c04d": "loot_item_mod_uncommon_specific_booster",
            "119157dae2fd804d": "e0426",
            "219571f3772e404d": "e0647",
            c550b018aa8804d: "e0578",
            "61565c6115ec04d": "w0618",
            "29f0b8010b27804d": "e0356",
            "215289d0b700004d": "e0619",
            "73d95e209e6c04d": "shield_object_006_concrete_chunk",
            "2212c779f41d404d": "p7_weapon_ai_antiability",
            f367ec1ec11c04d: "progression_mod_ranger_t3_weapon_damage",
            "1da1ffa2d8a8004d": "w0328",
            "27d36c502241c04d": "e0510",
            "32769dfb5260404d": "wave_2rangers_4enraged",
            "8100c533472404d": "pointlight_muzzleflash_enemy",
            "3c74da5d24d6004d": "wave_4enraged_2armoredguards",
            "125a4db5e9af804d": "progression_mod_knight_miniboss_health",
            "21efcb9910a8404d": "w0671",
            "1c3ce7fa47b004d": "w0166",
            "22fa1ecec1dfc04d": "e0695",
            "1d0c5e5c59da404d": "e0727",
            "7e6f02565f7c04d": "wave_1rangerrkt_2rangersmg_2guards",
            "3985b52abc78004d": "e0349",
            "6c820e15140c04d": "loot_item_mod_dlc1_exquisite_kinetic_transfer",
            b4b81943b8f804d: "progression_mod_ranger_t1_health",
            "23395c8a039fc04d": "upgrade_health_amt_4",
            "20238d48e485404d": "wave_2moldwalkers_2rangermix",
            a91eb34da64004d: "shield_object_006_concrete_chunk",
            "29e9c35d83fdc04d": "wave_1tempest",
            "3d9ca4f2ea80004d": "p7_ai_character_000",
            "2490f7dba4a8c04d": "loot_item_mod_uncommon_weapondamage",
            "110bb5b59600404d": "wave_3enraged_3armoredguards",
            "10142d473e81004d": "w0021",
            "5fbecab251004d": "loot_item_mod_common_suppressivefire",
            "1729299041be404d": "progression_mod_knight_miniboss_health",
            "1a98be0728d6804d": "w0282",
            "2af7a71551dfc04d": "w0388",
            "1db54ed19772804d": "e0049",
            "3419536137e0404d": "w0735",
            "2a086cd2a00c04d": "loot_item_mod_dlc1_exquisite_shrapnel_catcher",
            "270c23aa09f1404d": "loot_item_mod_common_weaponclipsize",
            "1c94049383b2004d": "w0750",
            "21058abcb45bc04d": "w0081",
            "1d1fd5abeb16804d": "expedition_t3_mod_mode_decreased_weapon_damage",
            c927002b83fc04d: "progression_mod_drifter_t3_miniboss_launch_damage",
            "28597161816804d": "progression_mod_knight_miniboss_melee_damage",
            "3e536e6c19e2c04d": "p7_ai_character_000",
            "303dfb7f9148404d": "p7_weapon_ai_moldone_volcanorain",
            "1ebedb31db62004d": "progression_mod_knight_miniboss_health",
            "52995ef391f404d": "e0338",
            "766074c7e0e404d": "w0367",
            "1dadbf8ed3a5804d": "w0658",
            "3bfa0f3c6551804d": "e0634",
            "3438f5489b59804d": "loot_weaponmod_common",
            "1f1a52ae25a1004d": "e_015_mixed_combat_03",
            "243c7f2978c804d": "w0308",
            "20cbbb9b9f23c04d": "w0379",
            "3d28dc04fd70004d": "e0307",
            "223e1671c165c04d": "loot_item_mod_legendary_specific_missile_blast_radius",
            "1a628234905ac04d": "p7_weapon_ai_smg",
            "51bd7bc04d9004d": "w0648",
            "965f7b1e447804d": "e0636",
            "364f71ad0819404d": "w0609",
            "14313235ca5d004d": "loot_item_mod_common_weaponclipsize",
            "38422e834350804d": "p7_ai_character_000",
            "36156abb3177804d": "loot_item_mod_rare_efficientshield",
            "449797b8247804d": "e0571",
            "51b7c79b504404d": "e0696",
            "16d3d1b074c9404d": "wave_2marksmen_3rangers",
            "1242a9f744da404d": "loot_item_mod_uncommon_weapondamage",
            "110948e3cfbac04d": "upgrade_compel_drain_2",
            "2acdefa8f095404d": "w0526",
            "438641653bdc04d": "p7_projectile_gun_000",
            "10d3edbcd041004d": "shield_object_006_concrete_chunk",
            "1ac12b76f407804d": "p7_weapon_player_shotgun",
            "1e3520dd5360c04d": "loot_item_mod_legendary_deadeye",
            "3d2abcbbe66d804d": "p7_weapon_player_shotgun",
            d38d63b64e5c04d: "w0350",
            "148f0f6f7d83404d": "ability_upgrade_item_000",
            "1f109e344116404d": "wave_6moldwalkers_hiss_mix3",
            "11a033d36c30c04d": "progression_mod_knight_miniboss_health",
            "113e8678b01cc04d": "e0542",
            "2a8c43cd3a33c04d": "e0136",
            e0de76cc85b004d: "e0687",
            "3402f2510d36404d": "wave_2enraged",
            "1e5832ab67ff404d": "w0537",
            "15a2fc486d7404d": "w0781",
            "24c8749cfc1d404d": "loot_item_experimental_magic_butt_kick_1",
            "1164ca68bdee404d": "progression_mod_guard_t2_miniboss_melee_damage",
            "234a999ab62d004d": "e0570",
            "13f37c722bfa804d": "e0413",
            "221056abaa72404d": "expedition_t1_mod_enemy_railgun_resistance",
            "3a3920c4047b804d": "e_012_master",
            "1f4a84771e8404d": "loot_playermod",
            "733a802ede0404d": "w0264",
            "25dd8f41d565804d": "loot_playermod_exquisite",
            "1b4be9a30ccf804d": "e0507",
            "1e1ca3868fb6c04d": "e0600",
            "8735b9e4e9c004d": "w0047",
            "5d5704554bd804d": "loot_item_mod_legendary_weaponreload",
            "3be9caea2c004d": "e0114",
            "11c79dd23518004d": "loot_item_mod_common_adrenaline",
            "124fb84282aec04d": "loot_item_mod_dlc1_exquisite_siphoning_touch",
            "36c3906463c6c04d": "loot_item_mod_exquisite_bloodthirst",
            "23fb634a5057804d": "e_large_2w_driftersmarksmenrangers",
            "1de054dd0eb9004d": "p7_ai_character_000",
            "102200ae6036004d": "w0162",
            "735b89fc328004d": "w0458",
            "35b09d8c9893004d": "e0567",
            "313cf6d5a241804d": "e0671",
            "29cbb32ae3cf004d": "w0641",
            "217235d37c92404d": "w0106",
            f22a827de41c04d: "e0238",
            fb3b7b1a60c04d: "wave_1ranger_2armoredguards_2guards",
            d25a0b54838c04d: "p7_ai_character_000",
            "38a921b259c1c04d": "progression_mod_knight_miniboss_health",
            "2cd00afa56f7004d": "e0062",
            "25a38af4e26dc04d": "w0792",
            "1723d21ec592004d": "e0228",
            bd28e5d6c1ec04d: "e0500",
            "2b5149b858c2804d": "e0259",
            "1a9a5c54f7f6c04d": "progression_mod_ranger_t1_miniboss_armor",
            "2dc3e71cc357804d": "e0675",
            "278f4ebfce5e404d": "w0001",
            "2ae5fea452d6c04d": "progression_mod_drifter_t3_charge_damage",
            "26bdfb91ce80804d": "wave_3rangers_4guards",
            "122066a5b5f4c04d": "e0621",
            "3ad08b968488404d": "w0248",
            "3c4bfb7d6984004d": "e0022",
            "20604c09b102c04d": "upgrade_launch_dmg_1",
            "24383cae51bdc04d": "e0315",
            "11533768ab15804d": "w0620",
            "284d9c87b834c04d": "w0139",
            "3f8800367d62c04d": "e0520",
            f28c767c833004d: "loot_item_mod_legendary_adrenaline",
            "25ba6a9ca4dd004d": "p7_weapon_ai_rifle",
            "1715296ac46d004d": "loot_item_mod_dlc1_exquisite_immediate_response",
            "1f432b155d71c04d": "e0342",
            "3aa4f1a2ced6404d": "loot_item_mod_dlc1_exquisite_hazard_pay",
            "238da9311835004d": "w0649",
            "664254e2fc804d": "wave_3enraged_3guards",
            "183eba79e3b804d": "loot_item_mod_exquisite_deathfeeder",
            "1250347baebac04d": "e0669",
            "17b7df710763004d": "wave_1marksman_2rangers_1armoredguard",
            "289915ca3eacc04d": "e0393",
            "254bedbf95aac04d": "w0636",
            "3784ffda1a85c04d": "w0107",
            "145c14c2a165c04d": "loot_item_mod_common_specific_pellet_count",
            "395a917bad75004d": "w0182",
            "28a9a01ae68a404d": "p7_weapon_ai_shotgun",
            ead2e807015004d: "w0802",
            "2eb68f0f1822004d": "w0198",
            "2dcfd78a39f004d": "e0692",
            "2a4ffd860634404d": "progression_mod_knight_miniboss_health",
            "18de503108c9404d": "gun",
            "35029166d7a1004d": "p7_ai_character_000",
            "2f9b72521efdc04d": "e0428",
            "3acf678ee134404d": "w_west_island_03_02",
            "11ae31855973004d": "e0319",
            "353f8eccbc1ec04d": "w0400",
            "4a92715a726804d": "loot_item_mod_expedition_exquisite_pressure_points",
            "34df84580077804d": "loot_item_mod_uncommon_specific_zoom",
            "1f0d5525a11a404d": "w0713",
            "611f8912058c04d": "w0643",
            "1669aad3ba14804d": "w0527",
            "3a111518320b004d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            "128611bd238f004d": "e0610",
            f30ba7d8a5bc04d: "progression_mod_guard_t2_health",
            "34f48343f23d404d": "upgrade_launch_dmg_1",
            f53d28cb38b404d: "e0388",
            "222a71910201804d": "w0018",
            cd3f1348b44c04d: "wave_3moldwalkers_3rangermix",
            "2b2c995a655a804d": "w0623",
            "131aff8b7460804d": "p7_insignificant_rigid_body_000",
            "22eaa08caf7e804d": "wave_2drifters_3rangers",
            b978fe5466dc04d: "expedition_t2_mod_player_increase_stamina_recharge",
            "2950ac0ccab9c04d": "e0487",
            "39c587a06ff5004d": "w0568",
            d01b3618ad0004d: "e0083",
            "1d318ffbe3d2404d": "loot_item_resource_titanium_pin",
            "3fa259046f67404d": "energy_item_1",
            "22b58bad82bf004d": "w0380",
            c9e896a3c4804d: "loot_item_recipe_daily_vendor_player_mod_set1",
            "3a474ca508a0c04d": "w0573",
            "3abc05a0b664404d": "loot_item_mod_expedition_legendary_backup_mag",
            b74b590f6f9c04d: "p7_ai_master_000",
            "13428f59b4a7c04d": "p7_ai_character_000",
            "6d0b1bf7d88c04d": "w0183",
            "290b6d0ffdb9404d": "w0476",
            "3664b5065aa4804d": "e0297",
            "269f9415e771804d": "e0313",
            "272f068a8ac6c04d": "p7_ai_elite_marksman_000",
            "7f058be992cc04d": "e_large_5w_rangersarmoredguards",
            bb1065ff4d2c04d: "loot_item_mod_common_launcher",
            "292ee5bcdf85404d": "w0321",
            "2aff19590e00004d": "encounterwave_000",
            "1a639ab45768004d": "p7_weapon_ai_sniper",
            "582dcd6f982804d": "w0129",
            "35b5ab34b28e004d": "w0591",
            "272e4a18c88dc04d": "progression_mod_ranger_t2_health",
            "37102894d3e4c04d": "loot_item_mod_dlc1_exquisite_ballistic_recovery",
            "1ec26b2fa315404d": "e0244",
            "5a6db376d90004d": "w0111",
            "21883885c36b004d": "e0110",
            "26f0fe9cd393404d": "loot_item_mod_common_mentalfocus",
            f9960248170c04d: "p7_ai_character_000",
            "1373a164d341404d": "w0129",
            "18d54101467ec04d": "e_large_3w_2tempests",
            "35923ce5252404d": "e_small_2w_enragedmarksmenrangers",
            "32b98c678a57004d": "w0324",
            "31878f4a50c4804d": "e0184",
            "15bf86eb2abbc04d": "p7_weapon_ai_rpg",
            "3be5b6eadd6b404d": "w0405",
            "3f53db0cdd55404d": "e0261",
            "13e3d63a6607404d": "loot_item_mod_expedition_exquisite_rampage",
            "26f6b3648d72404d": "e0181",
            a31e93101f1404d: "e_small_3w_moldwalkers_2_3_2",
            "364d64c6f76a804d": "w_at_tower_targets",
            "1f2feec9873ac04d": "e0341",
            "1723e2dda002004d": "loot_item_mod_common_specific_receiver",
            b5e755cea54404d: "wave_e16w02_5guard_1ranger_1ag_1master",
            "11d6cb842664804d": "encounter_001",
            "9acb55651bc404d": "loot_item_mod_legendary_efficientshield",
            "2bebde097995004d": "e0733",
            "3c8baddfdffc004d": "w0114",
            "39d8bd4f1c9a404d": "loot_item_mod_uncommon_specific_stabilizer",
            "46832a904c5004d": "p7_ai_character_000",
            "20f4fcfa4473004d": "loot_item_mod_legendary_specific_missile_velocity",
            "2a5884e3ddb0804d": "progression_mod_guard_t2_miniboss_health",
            "160470d5f7b2404d": "p7_ai_character_000",
            "1ab920e73374004d": "p7_weapon_ai_torment_launcher",
            "3b9d45b7bf43004d": "e0374",
            a7024e4bd4a404d: "e_small_5w_rangersenragedarmored",
            "345235e5dac5004d": "loot_item_mod_expedition_rare_pressure_points",
            "2ded0a7d6fc7804d": "w0569",
            "10631f9f1fea404d": "player_shield_chunk",
            "3d64769a8dbd404d": "loot_item_mod_exquisite_accuracy",
            "33aa5c9bd023004d": "e0009",
            "31eeeeef3dde004d": "progression_mod_guard_weapon_damage",
            "381e9cd725e6804d": "progression_mod_master_damage",
            "3a6a49ae53dec04d": "w0043",
            "355d4a2f404bc04d": "w0803",
            bf8cd29aefc804d: "w0551",
            "351272309482404d": "e_medium_3w_nomagic",
            "273a88c63d26804d": "loot_item_resource_aluminium_sheet",
            "3bc0f4d48f7004d": "e0146",
            "925c9d57db4004d": "p7_ai_character_000",
            "19793c3271ffc04d": "wave_1ranger_4armoredguards",
            "3921f18244fe004d": "e_large_5w_tempest_miniboss",
            "1f31f5dca7c8004d": "e0245",
            "212b12c103d4404d": "p7_ai_character_000",
            "29431b52a889004d": "wave_2marksmen_3enraged",
            "25ef13176b87404d": "e0563",
            "6742037943f004d": "loot_playermod_rare",
            "278f00d06a1b004d": "e_small_1w_1knight",
            "3b48e4b5b7c2404d": "e0475",
            "25504eb36e08404d": "loot_item_mod_uncommon_adrenaline",
            "2fd9d166db95404d": "w0221",
            "2356063a07f804d": "e0557",
            "12629ae33bdf004d": "e0263",
            "27881b39b779c04d": "w0795",
            "13961f04654bc04d": "p7_ai_character_000",
            "2d9a499433c804d": "dismembered_character_000",
            "2342116f9f48c04d": "e0134",
            "12b230c76219c04d": "w0449",
            "23fefa811a4e004d": "energy_item_3",
            "14390797b3e7c04d": "e0673",
            "595ad0526a5404d": "w_tower_03_02",
            "1b1ca60c4ba8004d": "loot_item_mod_legendary_shieldreload",
            "22f0c28bc16c804d": "e_small_3w_moldwalkers_3_3_2",
            "2a62f300f551404d": "w0676",
            "2ad2a1c71d4a804d": "upgrade_shield_strength_4",
            "2577584a667bc04d": "loot_item_mod_common_controlledfire",
            "1d1d690d0c69004d": "e_tower_ritual",
            "14cb5999ed78404d": "p7_ai_knight_000",
            "135ab1504160804d": "p7_ai_character_000",
            "2b637419694b004d": "e0716",
            "5f2aa861023804d": "w0159",
            "28e3cd4be54804d": "upgrade_compel_enemy_level",
            "13aa1642ed2c004d": "expedition_t1_mod_player_decreased_stamina_recharge",
            "19f0c4d759c4804d": "e0309",
            "291a166d737004d": "e0189",
            "37aa33db2631004d": "expedition_t3_mod_player_increase_player_health",
            "3ec58d9017d804d": "p7_weapon_player_railgun",
            "20ef4cf43802004d": "loot_weaponmod_rare",
            "345da63deffa404d": "e0285",
            e74780c5eef404d: "w0745",
            "38c78875763004d": "expedition_t1_mod_mode_increased_weapon_damage",
            "18eaa4762fb9c04d": "w0339",
            "37112e9d695c004d": "e0124",
            "2742274fc2ba004d": "w0405",
            "34c46be5bbd2804d": "e_009_knight_intro",
            "1841dae5cc3d804d": "whitebox_modules_box_1x1x1_000",
            "1d22380c840b404d": "w0504",
            "1c14e24839ebc04d": "w0394",
            "295283c789ac404d": "shield_object_006_concrete_chunk",
            ae5f5f35237404d: "w0331",
            "16f62bc7bf08c04d": "e0540",
            "39bea5b60a5c404d": "e0438",
            "60b0bd41dd1c04d": "e0006",
            "27625384e910004d": "progression_mod_knight_miniboss_health",
            "241cbc5fa4a9804d": "e0224",
            "6eeae853216404d": "progression_mod_ranger_t3_miniboss_weapon_damage",
            "36e5f6d4f245804d": "e0087",
            "39c01b182e38004d": "e0715",
            aa40aaf00dac04d: "e_small_1w_3moldwalkers_2guardmix",
            baa93c0021a804d: "wave_3rangers_4enraged",
            "1f1bbc1c38a8404d": "loot_item_mod_uncommon_bloodthirst",
            "23ecb5e95d71004d": "w0782",
            cb735a49aa1c04d: "e0057",
            "26e00dfd4fb6804d": "e0307",
            "12980ac9398e804d": "loot_item_mod_common_launcher",
            "3565e7f2351d804d": "e0253",
            "240a84cb5f65c04d": "e0665",
            "2bf462f3fc88c04d": "e0624",
            "1d80745931b3c04d": "p7_projectile_bouncegrenade02",
            "2a7e874e3d8d004d": "w0783",
            "1664e4f7f838004d": "e0403",
            "7b164f5897d404d": "e0470",
            "1a0014c7b2bf404d": "w0132",
            "2518021ff038804d": "p7_projectile_rocket_rpg",
            "26c77afb5b2c404d": "w0123",
            "292f1581b606004d": "e0419",
            "32ef09dd9335004d": "wave_1ranger_3armoredguards",
            "155d1b807b18804d": "e0011",
            "2521090ae025804d": "e0543",
            "3119010f0d0c404d": "loot_item_mod_common_launcher",
            "1017fa8afc0b004d": "progression_mod_guard_t1_miniboss_melee_damage",
            e3ec9d6de1b404d: "e0077",
            "14ffb789a526004d": "e0216",
            "26f07bbf8972804d": "loot_item_mod_legendary_reinforcedshield",
            "26ae44472b8ac04d": "ability_upgrade_item_000",
            "2c0eeb119a85004d": "wave_4marksmen",
            "20a39dd0d172c04d": "e0050",
            "9eb190082d8004d": "e0221",
            "6f21c086ecc04d": "p7_weapon_ai_shotgun_semiauto",
            "377d9720c0e6804d": "w0625",
            "1e860ddeb241804d": "e0706",
            "380e76df7dec04d": "e0107",
            "38542d32c56ec04d": "e_small_1w_1guard",
            "223ec1fa734804d": "progression_mod_tempest_t2_miniboss_launch_damage",
            ab775c0c0f7004d: "loot_item_mod_exquisite_deathfeeder",
            f720bcb9373c04d: "e0093",
            "374d41b41094c04d": "e0444",
            f9178c1b068c04d: "e0158",
            "37d49fc2948e404d": "e_medium_1w_armoredguardguard",
            "21bf121c4378804d": "progression_mod_drifter_t2_miniboss_health",
            "2427692fd8d9404d": "loot_item_resource_ceramic_panel",
            d254f567f9c404d: "w_cubicle_3",
            "3f66f7a0b213004d": "e0320",
            "14e7a2be894c404d": "e0148",
            "2427b472dba1804d": "progression_mod_knight_miniboss_health",
            "309a790d5ede804d": "w0237",
            "31030d09b7d4004d": "loot_item_mod_common_specific_stabilizer",
            "3e1a239a44ad404d": "progression_mod_knight_miniboss_health",
            "2c67d846fc90404d": "w0565",
            "281f20816a52404d": "w0287",
            "2cea3be1fcb2804d": "progression_mod_drifter_t1_health",
            "3456363da625c04d": "e0098",
            "1a3d871d4cb5804d": "loot_item_mod_uncommon_specific_gyroscope",
            "23762f06ceb804d": "w0692",
            de3d5309a3004d: "e_medium_4w_enraged_tempest_miniboss",
            "3b7515151948c04d": "e_tower_02",
            "25e7bdc4ca84404d": "p7_ai_character_000",
            "34dca34b20a9004d": "w0122",
            "16c8f4dd26e7404d": "loot_playermod_uncommon",
            "1f3e35cf73f4004d": "w0709",
            "393e2f22dacf404d": "w0381",
            "2e8d6c855dfe804d": "e0404",
            "2eefc08e23db804d": "w0131",
            "2802fe7a141bc04d": "loot_item_mod_dlc1_exquisite_kinetic_battery",
            "1e8cdb919e45804d": "e0529",
            "177f332e1ad8c04d": "w0271",
            "2c12ed5a16a2004d": "w0701",
            "939d25e4daa404d": "encounter_m10",
            "2005e64490e2c04d": "loot_item_mod_expedition_rare_vampiric",
            "292f50c13d46004d": "wave_5guards_armored",
            "17df78f21b63c04d": "progression_mod_drifter_t2_miniboss_launch_damage",
            "5d1b573214404d": "loot_item_mod_exquisite_deadeye",
            "2cf59c8c2854804d": "e0694",
            "1f81533289efc04d": "loot_weaponmod_exquisite",
            "5a3e6062256404d": "progression_mod_ranger_t3_melee_damage",
            b6ad82a2c15804d: "w0074",
            "323e870ac634c04d": "enraged_wind_area_box",
            "21e9b50dd09a404d": "w0070",
            "13ccc7e14478c04d": "w0613",
            "31cf7fb31ed2804d": "w0586",
            "22d2fdf46502404d": "e0456",
            "333242f5399fc04d": "e0455",
            "28ecf6f1a76e004d": "e0073",
            "168db3017a80404d": "e0037",
            "3faaed84b5e0404d": "w0301",
            "12e5f0ba5a9e804d": "e0719",
            "1180c70095b4004d": "wave_6moldwalkers_3turrets",
            "284281d87156004d": "e0644",
            "21cf64d4589b804d": "upgrade_levitate_desc_5",
            "2b84e11b574e804d": "e0012",
            "1fe6b3244babc04d": "bracket_clock_main_000",
            "2873789f424a004d": "upgrade_launch_dmg_1",
            fa1bea254df804d: "e_large_1w_6moldwalkers_hiss_mix2",
            "31a6fedcb348804d": "w0708",
            "2b4e0fdd5870004d": "w0402",
            e89a2d3b4dec04d: "loot_item_mod_dlc1_exquisite_inner_peace",
            "287924aac290c04d": "w0268",
            "27ac3363b0be804d": "e0516",
            "2704ff16da1b404d": "w0453",
            a8fbcb162d004d: "progression_mod_knight_miniboss_health",
            "3bd870be0884804d": "w0260",
            c3e58481084804d: "e0224",
            "29ef45d0af3f404d": "e0429",
            "3ffd6a7fd716c04d": "progression_mod_knight_miniboss_health",
            "3895740c180ac04d": "w0784",
            "3a5550ac5f76404d": "w0494",
            d96b168b2bd004d: "loot_item_recipe_daily_vendor_player_mod_set1",
            "36d15cc5eaea404d": "p7_weapon_player_shotgun",
            "2dc541c84b10c04d": "loot_item_mod_uncommon_specific_pellet_scatter",
            "9eab9061b44804d": "lens_flare_ai_sniper",
            "18b279c0306804d": "ability_upgrade_item_000",
            "13c69f696cff404d": "w0472",
            "384af1e64b78804d": "w0407",
            "1ba854591833004d": "e0521",
            "2a7a1de36428404d": "p7_weapon_ai_assaultrifle",
            "399e241410bc404d": "w0412",
            "81017a5454e804d": "pneumatic_tubes_carrier_temp_000",
            "15faf0918d91804d": "e0584",
            "373efd7bb7f1c04d": "loot_item_mod_common_launcher",
            "264e01d00bbe404d": "e0196",
            "688ad494400c04d": "p7_ai_tempest_000",
            "29536656a0a9c04d": "w0307",
            "1887a21561f4804d": "e0537",
            "16e6bcf7432f004d": "p7_weapon_player_smg",
            "3d2af9cf745e004d": "expedition_t3_mod_enemy_increased_health",
            "1e52250cb160804d": "e_large_3w_marksmenrangersenraged",
            bd31e8bc560004d: "p7_projectile_volcanospore",
            "3e890e077f85004d": "e0249",
            "29555b5f75eec04d": "e_small_1w_3moldwalkers_3rangermix",
            "362c7ea38283404d": "w0432",
            "23d87c9db774804d": "w0652",
            "29c33efb4d27c04d": "p7_ai_character_000",
            "6c75e411065c04d": "loot_item_recipe_daily_vendor_player_mod_set1",
            a0daecca5a7804d: "e0071",
            "131338a9e93004d": "e_small_1w_2drifters_launch",
            "27c21ca1cf7804d": "e0590",
            "1cde7d1f1524804d": "e0638",
            "1c046f2ab5a0c04d": "w0129",
            "123a1d5b57d9004d": "w0238",
            "18b770f89325404d": "loot_item_mod_dlc1_exquisite_ballistic_recovery",
            "25beca105f03c04d": "w0674",
            "2ab91db23c0f804d": "w0734",
            "3a1af76961cb004d": "w0423",
            "6f05f2f2bc9804d": "e0423",
            "2945bf80d1a1c04d": "p7_ai_character_000",
            "1986f6dc90da004d": "w0697",
            "3a70bb3487f2404d": "e0457",
            "327ad078ef9f004d": "w0717",
            "21e94aab111d404d": "w0687",
            "3a7eba0e291a004d": "w0231",
            bbec6f4bbb4004d: "w0295",
            "1181bd1eaabc004d": "w0646",
            "9d90ac8793a004d": "w0144",
            "212b7e84f566804d": "e0134",
            "3cd9218ac2a1404d": "wave_5moldwalkers",
            "924b01ebd21004d": "e_small_1w_mix1",
            "1b0655dfaeee004d": "w0763",
            "292f3e73c815804d": "p7_ai_character_000",
            "2104a2618619404d": "progression_mod_knight_miniboss_health",
            "25f9b9d1df1c404d": "e0473",
            "2fa727774be3c04d": "loot_item_mod_legendary_deadlyrain",
            "1f56fb15a647004d": "upgrade_compel_extra_char",
            "2f946e78649004d": "w0799",
            "17bced7f626b004d": "p7_weapon_player_pistol",
            "2d87873dc661c04d": "w0273",
            ddd5f1b8c82804d: "loot_item_mod_dlc1_exquisite_pink_mist",
            "1512b9389ec804d": "e0159",
            "19d0af695047804d": "e0488",
            "31fe5d3cad27404d": "e0351",
            "343f38d887ad004d": "loot_item_mod_legendary_weapondamage",
            "2cb22882e336404d": "w0061",
            "2bf8f2fd57ec404d": "progression_mod_knight_miniboss_health",
            "30258b103d74c04d": "e0631",
            d95f10c0195c04d: "loot_item_mod_common_deadeye",
            "1fceefc00d13404d": "loot_item_mod_exquisite_mentalfocus",
            "3e6953801df5404d": "p7_weapon_frame_rpg",
            "3343630710d9004d": "e_small_2w_moldwalkers_1_2",
            "376b36434852c04d": "w0756",
            "2c38895f2ec8004d": "loot_item_mod_exquisite_specific_gyroscope",
            "1187b59b0f60c04d": "e0139",
            "34c0f734c041804d": "w0344",
            bd89bfdb2e2404d: "e0126",
            "31f189074f4ac04d": "progression_mod_enraged_t1_damage",
            "271f0c283b6c404d": "e0556",
            "378da208ae74004d": "e_small_1w_1flyingenraged",
            "31e54fde6fdb404d": "wave_2moldwalkers_2guardmix",
            "1f63eddc5fed804d": "w0655",
            "238f14aee322804d": "w0022",
            "301e36aaa158804d": "p7_ai_character_000",
            "1e9f8238c06a404d": "progression_mod_knight_miniboss_health",
            "17cc81e3e066404d": "expedition_t3_mod_enemy_weapon_resistance",
            "3c2cf0e14600404d": "w0787",
            "2752400ff799004d": "w0493",
            "25613ca74db804d": "e0131",
            "3f59d4a0904dc04d": "e_small_3w_moldwalkers_1_1_2",
            "3ac3801670e8804d": "loot_item_mod_dlc1_exquisite_kinetic_battery",
            "322169084385004d": "loot_item_mod_dlc1_exquisite_shrapnel_catcher",
            "3b082c1d34c3804d": "e0467",
            "24bb72268e0f804d": "e_test_perf_000",
            "13e3637903c404d": "progression_mod_ranger_t2_armor",
            "1b0c10f3caf8004d": "w0044",
            "2d381cd276c1804d": "w0480",
            "1507a5baaa1d404d": "e0119",
            "93d78ab9a32c04d": "e0293",
            "31516846629804d": "e0620",
            "986790e5965804d": "w0622",
            "1a799a6821a804d": "w0208",
            d86903f67b5804d: "w0416",
            "349fa66e77b1804d": "w0475",
            "1102ef9e0545004d": "e_small_2w_enragedrangersguards",
            "981a08c7363004d": "progression_mod_moldwalker_health",
            "25134253e24a404d": "e0193",
            c4360398abb004d: "loot_item_mod_uncommon_mentalfocus",
            "343cba3cbf9b404d": "wave_6moldwalkers_5turrets",
            "2be053712871004d": "e0201",
            af016fdf746c04d: "e0600",
            "39ea5a995386404d": "pointlight_muzzleflash_enemy",
            "2e2dc78e8d27c04d": "wave_4enraged",
            "2162b4928003404d": "e0361",
            e5758478ab3c04d: "e_small_2w_guardsarmoredguardsenraged",
            "11ea7cd57ae2004d": "e0465",
            "25a6743f03bc404d": "e_small_2w_moldwalkers_2_2",
            "195d39cd67acc04d": "w0770",
            "34a0e07a0317c04d": "e0363",
            "279895d1b83ac04d": "p7_weapon_player_rocketlauncher",
            "705b7ba2d9dc04d": "w0468",
            "24304f1ecd5bc04d": "e0722",
            "3ac9a5415cc2004d": "loot_item_mod_common_rapidrecovery",
            "1a6a6e02afa0804d": "shield_object_006_concrete_chunk",
            "17952be1df6e004d": "progression_mod_knight_miniboss_health",
            "1555ff29c817804d": "loot_item_recipe_daily_vendor_player_mod_set1",
            "3865102cbcfc004d": "e0427",
            "2f721e57a201404d": "loot_item_mod_expedition_exquisite_backup_mag",
            "1d4158447759c04d": "p7_area_rocket_2",
            "8431d5670e0c04d": "loot_item_mod_exquisite_rapidrecovery",
            "36461b46ebfa404d": "loot_item_inventory_1",
            "4571b15c78f804d": "e0170",
            "284ac1c8f234404d": "progression_mod_moldwalker_damage",
            "3de922db9f38404d": "e_small_3w_enragedguards",
            "15eda7e9496ac04d": "e0247",
            "13a3855de175c04d": "e0224",
            "3907f8cd3da9804d": "w0505",
            "1efdac79e08b004d": "loot_playermod",
            "20ab32c30abfc04d": "e0418",
            "3dea97fd9d14004d": "progression_mod_ranger_t2_miniboss_melee_damage",
            "2e5c38901294404d": "w0228",
            "3bf25fbaa34dc04d": "e0607",
            "3311433715f9004d": "w0094",
            "1802395271c6c04d": "e0712",
            "358adae0b4e404d": "w0267",
            "8463c08eb1c04d": "e0108",
            "1d8835ece379004d": "progression_mod_knight_miniboss_health",
            "1a16f8dab8e9004d": "w0443",
            "1526f1f4eb79804d": "w_at_tower_targets",
            "135b712e42bd404d": "w0477",
            "15f3cfa12209804d": "loot_item_mod_exquisite_bloodthirst",
            "366be0160826804d": "loot_item_mod_dlc1_exquisite_lightning_reflex",
            "3637d9690a7c404d": "e_large_4w_driftersarmoredenraged",
            b6f68455429404d: "loot_playermod_exquisite",
            "17415b067f42404d": "w0743",
            "104c2882118dc04d": "e_small_1w_2moldwalkers_2guardmix",
            "21c479f761f6404d": "loot_item_mod_dlc1_exquisite_immediate_response",
            "7ea2bbef9dc004d": "loot_item_mod_legendary_specific_booster",
            "21408c680c5404d": "progression_mod_knight_miniboss_health",
            "3f37c4c81fab404d": "loot_item_mod_exquisite_specific_pellet_count",
            "1e01be91ade6c04d": "w0492",
            "2761d24b267f004d": "e0197",
            "148a64b64297404d": "e_small_2w_moldwalkers_2_3",
            "3003d99c61bf404d": "w0541",
            "129c315a2635404d": "e_large_1w_drifterenragedguards",
            "1716268d7493804d": "w_s030_e3_w2",
            "72d6c4610dbc04d": "loot_item_mod_dlc1_exquisite_shard_refraction",
            "276f8fd14605004d": "p7_ai_character_000",
            "179a5e3da594c04d": "e0257",
            "1127de401041004d": "w0631",
            f2df735cd41804d: "e0295",
            "1784e1a633ee004d": "e0195",
            "1eaa846ef815004d": "w0299",
            "29d75b321bdb004d": "w0283",
            "75f4a6fd51ec04d": "wave_1marksman_3rangers_1armoredguard",
            "1e60182c48c6404d": "w0149",
            d7843393cd8804d: "progression_mod_guard_t2_weapon_damage",
            "2810a1e82efbc04d": "e0548",
            "288c02b8ee29004d": "e0081",
            "396aec07f46b804d": "w0405",
            "39081575f80cc04d": "w0053",
            "1d0ff675df31804d": "w0582",
            "3d245453bc13404d": "e0417",
            "269d852e7d39404d": "loot_weaponmod_exquisite",
            "1e4341a97719804d": "w0246",
            "27f9e958746dc04d": "encounter_m10",
            "26fdec9db4b4804d": "loot_item_mod_expedition_rare_pickpocket",
            "24312c3ac82b404d": "w0413",
            "38c31e784815404d": "progression_mod_knight_miniboss_health",
            "17a03502bd00804d": "e0735",
            "21436f6bfa64c04d": "upgrade_shield_strength_5",
            "13e8baf2a0a3004d": "e0032",
            "1cf9d19a0fb6c04d": "w0812",
            "33ee77b20322c04d": "loot_item_mod_legendary_launcher",
            "9b3438ded7b804d": "e_large_1w_rangersenraged",
            "3e10e227eb3f804d": "w0505",
            "38d1ded97219004d": "w0252",
            "15d97c072611404d": "e_005_enraged_intro",
            "2518f722d86d004d": "e_small_1w_3moldwalkers_2rangermix",
            "11c840012b6b404d": "loot_item_recipe_daily_vendor_player_mod_set2",
            "19b47e0c8f43404d": "e0453",
            e564fd6f76bc04d: "e0171",
            d2b6df9411804d: "w0737",
            "271d2df49d21004d": "loot_item_mod_rare_weapondamage",
            "2895167f130a004d": "w0333",
            "3e8efb4a6281404d": "loot_item_resource_uncommon_house_memory",
            "3deed66523a4404d": "p7_ai_knight_000",
            "2834c8389898004d": "expedition_t1_mod_enemy_shotgun_resistance",
            "3c94a2906f80804d": "w0057",
            "35fe50b67a5a404d": "e0501",
            "2751f7d35fef804d": "w0600",
            "39a2cd984b96404d": "e_small_4w_armoredguardsguards",
            "3895d88d5ca7404d": "player_forward_shield",
            "393916f7ba08c04d": "w0686",
            "2d540f7a0484c04d": "e0585",
            "13a91d36ea0b004d": "player_launch_chunk",
            "1624cba00d6e804d": "loot_item_mod_legendary_mentalfocus",
            "1f524f96498804d": "upgrade_launch_dmg_5",
            "3590636bf254c04d": "w0135",
            "25f70f911b56804d": "w0329",
            bcddfef459bc04d: "p7_weapon_ai_rifle",
            "1a664b4afb76004d": "e0380",
            "3b3a46227753004d": "e0041",
            "2b98284ce9d9004d": "e0568",
            ae529a6fa6e004d: "expedition_t3_mod_mode_empowered_rocket",
            "1a041d1dbd17004d": "w0762",
            "14f0577b5daf004d": "progression_mod_ranger_t1_armor",
            "2a5c15f6d317804d": "e0364",
            "271e9a134fb6c04d": "w0580",
            fa879063945004d: "w0361",
            "25e98dda4377c04d": "e0481",
            "1a6a33de5c18004d": "wave_e06w02_2ranger_rpg_2ranger_smg",
            "2e2f0840c061804d": "loot_item_mod_legendary_specific_pellet_count",
            a81e7c253b3c04d: "w0524",
            "132e4a96b0db804d": "w0700",
            "3f3cecb3f737404d": "e0065",
            f20dafd2265804d: "e0633",
            "30348b09c418404d": "e0076",
            "144466c392bc404d": "w0376",
            "2d7ef45df8d9804d": "e0726",
            "3e92a2e4c82e004d": "loot_weaponmod",
            "68960858554404d": "w0235",
            "8570b5170aec04d": "e0078",
            "310014a17c56c04d": "upgrade_resource_amt_5",
            "1eec16573f1a404d": "loot_weaponmod",
            "25a3b284dd3404d": "loot_item_mod_exquisite_shieldreload",
            "12564e5869e9004d": "p7_ai_character_000",
            "398acc25891b804d": "e0395",
            "347c842bb85804d": "w0663",
            "213649259de8404d": "unlock_shield_launch",
            "11b71b83d4c1404d": "loot_item_mod_uncommon_specific_pellet_count",
            "12d4fd67b53d404d": "e0160",
            "133d2c34974e404d": "dismembered_character_000",
            bbdaff3ae08c04d: "loot_item_mod_common_shieldreload",
            "14a670777234404d": "w0529",
            "37bf86b92c2f004d": "w0548",
            "3a29db72fb53804d": "w0607",
            "1523a1ce05d0c04d": "w0691",
            "2243fcd4050d004d": "wave_3guards",
            "3e73500ec2fcc04d": "e0134",
            "2cd5230275ff004d": "loot_item_mod_expedition_exquisite_emergency_reserves",
            "12de8b401a97804d": "wave_9moldwalkers_1turret",
            "3f2ea98ab94dc04d": "e0194",
            "1810b015eedc804d": "w0121",
            "5c2a02276c2004d": "loot_item_mod_exquisite_suppressivefire",
            "8b9f06a82be004d": "e0015",
            "278830ac6a21804d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            "30f2ac4b3f5e404d": "w0598",
            "3aba1440450d804d": "w0666",
            "24639c69dff9804d": "e_008_horb_intro",
            "2c98c4bc56a4804d": "drifter_wind_area_box",
            "266cb76cb11f404d": "progression_mod_knight_miniboss_health",
            "3a2b3bb5f4df004d": "expedition_t3_mod_mode_empowered_sniper",
            "6b1b076595c404d": "w0143",
            "20bdfc3b2206004d": "e0127",
            "3b33c4b88b9c804d": "e0109",
            "162ed07dcb2d004d": "e0384",
            "169ada70ef73c04d": "progression_mod_knight_weapon_damage",
            "32da93902e84004d": "p7_ai_character_000",
            "30d54091b666004d": "w0646",
            "1203da08297c404d": "w0576",
            fe175d5b25e004d: "loot_item_mod_expedition_exquisite_graverobber",
            c0e7b69dd11804d: "e0229",
            "261e8a854fd404d": "unlock_compel",
            "34a3bc880150404d": "progression_mod_ranger_t3_miniboss_armor",
            "2b3643c4993b404d": "e0290",
            "3cd64306ac6c804d": "w0583",
            "97cf2646587404d": "encounter_m10",
            "2304622a690a004d": "e0443",
            "29c63980bc93404d": "w0319",
            "33f13734bce1c04d": "wave_2drifters_3enraged",
            "5f262888235804d": "e0736",
            "35afe71bf8b8804d": "shield_object_006_concrete_chunk",
            "2734d4b95a77c04d": "shield_object_006_concrete_chunk",
            "3ac6ef41fe60004d": "loot_item_inventory_4",
            "1051b31e033ec04d": "w0450",
            "324c8df71465c04d": "loot_item_mod_exquisite_fleetfoot",
            "296fcc8c72e7804d": "progression_mod_knight_miniboss_health",
            ae4e2fcf4ee804d: "loot_weaponmod_uncommon",
            "3c2ff5ea00a8c04d": "w0225",
            "35c84a8073f404d": "loot_item_mod_legendary_controlledfire",
            "1f27a81e7587804d": "w0503",
            "31abeb7226ca004d": "w0166",
            "35389d1c3063004d": "expedition_t3_mod_enemy_increased_damage",
            "20abe3827ca2404d": "w0405",
            "2ec3a6df1159004d": "e0099",
            "3aacd633ff3c404d": "w0289",
            c60c3fb7f55404d: "progression_mod_tempest_t2_launch_damage",
            "1ccb357232f404d": "w0374",
            a466ca8518b804d: "e0056",
            "3e6f85aa49e8004d": "encounter_000",
            "1afcd2f14983004d": "loot_item_mod_legendary_deathfeeder",
            c093aa347c7804d: "w0456",
            "320963e3cb11c04d": "w0720",
            "329f10ff9cc0804d": "loot_item_mod_uncommon_controlledfire",
            "35f7898dec8b804d": "loot_item_mod_uncommon_reinforcedshield",
            c3b5414d47404d: "w0589",
            "293f8d803306c04d": "e0134",
            "8071b0e2dcd804d": "e0161",
            "2eb32f9f93f5004d": "w0377",
            "44940430360004d": "progression_mod_guard_t1_miniboss_weapon_damage",
            "1ff7680ae0a2c04d": "w0172",
            "30287474d419804d": "w0611",
            "12d24e3c0271004d": "w0509",
            "25b6113bf25e004d": "w0474",
            f5a780767e7c04d: "e0134",
            "228f40cfa63b804d": "w0460",
            "3ddeec31af1bc04d": "w0039",
            "31e678a01c5cc04d": "w0712",
            cf02039f17404d: "progression_mod_tempest_t2_health",
            "86e06a3cda5404d": "w0673",
            "370f510a3f9b404d": "w0276",
            "707e4fa0d11404d": "w0547",
            "4f49b31a847804d": "loot_item_mod_expedition_exquisite_energy_conservation",
            "168d02e51f1e404d": "progression_mod_enraged_t1_health",
            "2d582a7447dfc04d": "e0031",
            "15ddd7a4e239404d": "loot_item_mod_exquisite_deadlyrain",
            "1efc35da85f804d": "e_marshall_encounter3",
            "84d7a9f6edb004d": "w0346",
            "1d4ec0c8dc08c04d": "progression_mod_knight_miniboss_health",
            "1a2225c36c89804d": "pointlight_muzzleflash_player",
            "3baed4904a23404d": "wave_4rangers",
            "3900798e25e2c04d": "wave_1armoredguard_2guards",
            c67e4c17a5d804d: "w0082",
            "332f3655d597004d": "e0492",
            "1a8f5cc3a247404d": "w0288",
            "2794f681ac07004d": "w0181",
            "370b270b1eddc04d": "wave_2rangers_3armoredguards",
            "58bab7a6f4e804d": "w0578",
            "308cc060ac4d004d": "p7_ai_master_000",
            "277839d6c353804d": "p7_ai_character_000",
            fcec420e3a4c04d: "w0026",
            "299f5a7cf044404d": "fps_camera_000",
            bd6f381a57d004d: "w0560",
            "37c99416e05fc04d": "e_small_1w_2moldwalkers_3rangermix",
            "2fea2e12591ec04d": "w0284",
            "3a761b10eeb7804d": "w0809",
            "12d9aac9dce404d": "w0612",
            "7c11dcb5f59c04d": "w0190",
            "2a4d011202d9404d": "wave_4drifters",
            "3ae684b975d8804d": "unlock_dodge",
            "85eb477e5dc404d": "w0196",
            "252f15f26742804d": "w0341",
            "1599c8142a2c804d": "w0451",
            "239ca19ee71cc04d": "e0023",
            "86e4e3e857a404d": "e0272",
            "27b28c602433404d": "w0665",
            "290274edd688804d": "p7_ai_character_000",
            "2afca040f1c0c04d": "e0646",
            "3dc90ebe5955804d": "e_small_1w_1turret_projectile",
            "1acc32d2ddec804d": "loot_item_mod_uncommon_deathfeeder",
            a960674206d004d: "loot_item_recipe_daily_vendor_weapon_mod_set1",
            aa22ee490f3404d: "loot_item_mod_expedition_rare_energy_conservation",
            "1bb84c31ace9004d": "loot_item_mod_rare_launcher",
            "276ed785f592804d": "e0227",
            "349d53bb9400404d": "wave_1turret_bullet",
            "3daba4a017b5804d": "w0320",
            "1a9ceefe55e2004d": "e_small_1w_1knight",
            a11ffb08c2dc04d: "e0326",
            "1cc4b6232bd004d": "loot_item_mod_exquisite_bloodthirst",
            "1558bb88a5cbc04d": "progression_mod_drifter_t2_launch_damage",
            "923d6cbd6f6c04d": "w0424",
            "1873fe98f9d9c04d": "tempest_multilaunch_chunk_001",
            "35517346913b804d": "loot_weaponmod_rare",
            "1e4c5f761ac4804d": "e0330",
            "112ca4da2568c04d": "w_s030_e3_w3",
            "2309abadd1d5804d": "expedition_t2_mod_enemy_increased_health",
            "104830ea6412804d": "e0572",
            "1177dd44b70cc04d": "e0199",
            "5d76c8110b3c04d": "loot_item_mod_uncommon_weaponreload",
            "205ee860c148404d": "e_small_1w_1enraged",
            "37a8ff5e06b0404d": "encounter",
            "24bd28111431404d": "wave_2drifters_3guards",
            "1511fb3f7e6e404d": "w0241",
            "20eea27e3460804d": "e0650",
            "339d2ccf75cd004d": "w0175",
            "1e77bb33ed2fc04d": "e0283",
            "2c0766a8741fc04d": "progression_mod_knight_armor",
            "1bc22f4ed7b6804d": "loot_item_resource_fiberglass_sheet",
            "1c811577c106c04d": "w0206",
            "36b6b1bdfa16804d": "w0417",
            "306c3d577963404d": "w0544",
            "13250f768f87404d": "wave_4enraged_2guards",
            "374ee403fd8f404d": "loot_item_mod_legendary_rapidrecovery",
            c8e2f29bb79004d: "loot_playermod",
            "1db859d0d1bac04d": "upgrade_launch_enemy_level_1",
            "388d5ca2817c004d": "progression_mod_tempest_t2_launch_damage",
            "10197d7eea8a004d": "pointlight_muzzleflash_enemy",
            "8a22f1adbe5804d": "e0236",
            "9a1a7b6b0d7004d": "p7_ai_character_000",
            "210fd0a032fa004d": "loot_item_resource_memetic_fiber",
            "3db76fb5b5bb404d": "p7_weapon_ai_shotgun",
            "11e9de6fab06004d": "p7_weapon_player_railgun",
            "23ecd6548113c04d": "w0140",
            "38890d9118ad004d": "w0705",
            "2c786bf898fb804d": "w0530",
            "15b74a6a0e6ec04d": "w0110",
            "29ae761a34eb404d": "e_small_2w_moldwalkers_2_1",
            "243d168e5dff004d": "w0202",
            "13df6d009094004d": "w0659",
            e1d0314282b004d: "w0076",
            "247da48ff5e6404d": "wave_3rangers_3enraged",
            "9e07dd72d3f404d": "e0400",
            "3813f69cc4df004d": "e_small_1w_1rangerrkt_2rangersmg_2guards",
            "16073bcf764a004d": "e0277",
            "114ad63691b004d": "e0381",
            "3da358d9f179404d": "w0359",
            "11e59bd5273bc04d": "w0293",
            "3060650e8fce404d": "w0596",
            "32bc155f04f8404d": "w0604",
            "2fd77fbc65c6404d": "p7_ai_character_000",
            "290bb94a6367004d": "wave_1ranger_3guards",
            "13b240ad3081404d": "loot_item_resource_titanium_ingot",
            "2845010ea2d0004d": "w0716",
            "2b9207962ed9c04d": "e0264",
            "35c92e6c343fc04d": "w0335",
            "360f0bf8ed2d404d": "e0284",
            "151948b8093c404d": "wave_1master",
            "2cf48433a56fc04d": "shield_object_006_concrete_chunk",
            "228442e3871c04d": "p7_weapon_ai_frame_smg",
            "27e0d870644a004d": "loot_playermod_legendary",
            "312a8cc05bbac04d": "e0317",
            "302e24def1e2804d": "e0192",
            "367328a9e1ad804d": "w0704",
            "4410f78f6f6c04d": "w0084",
            "5bf438182e1404d": "e0397",
            "2cb6fe443da2404d": "w0397",
            "36658840ce13c04d": "w0519",
            "2530b039be8c004d": "loot_item_resource_paracausal_essence",
            "3e0d5f9d7539c04d": "e_medium_1w_6moldwalkers_1turret",
            "2c5de4576b7d804d": "w0552",
            cb4db9a52bc04d: "e_small_1w_5turrets",
            "32ded449015cc04d": "loot_item_mod_exquisite_suppressivefire",
            "35925f92b898804d": "w0171",
            "17e2d06fe53f404d": "unlock_slam",
            "38d5ecd71a32004d": "e0682",
            adff4b10ed2404d: "w0405",
            "1957970855d6c04d": "e0390",
            "1d6f25bd93a5c04d": "e0450",
            "3184cec43c13404d": "progression_mod_guard_t2_miniboss_weapon_damage",
            "1b2b3a86cd7fc04d": "w0558",
            "18058c23cb80404d": "e0618",
            "23b4f66cd211804d": "w0316",
            "151ca6d8a04d004d": "loot_item_mod_dlc1_exquisite_lightning_reflex",
            "389f97dbda54804d": "w0013",
            "2f8ba9c40331804d": "e_medium_1w_marksmanranger",
            "1cc690c17ac5004d": "free_camera_000",
            "1041be25ffe2804d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            "31031f079d31804d": "e0307",
            "231672f6b965004d": "wave_3turrets",
            ba3f92bede7004d: "w0157",
            "308c5a4e222a004d": "p7_weapon_ai_torment_launcher",
            "36f50b60005804d": "w0291",
            "39eff9fe89d2404d": "loot_item_mod_dlc1_exquisite_coin_collector",
            "1c9446a71f9e804d": "w0262",
            ba8c7fc05d8404d: "w0490",
            "263502ca3bb3004d": "w0133",
            "21601af6dd4b404d": "w0564",
            "38be7ee34108004d": "w0155",
            "15aa8da5934a404d": "loot_item_mod_expedition_legendary_recycling",
            "1b9b4a4c2a35804d": "w0732",
            "7cfe699549d804d": "e0587",
            "242184cb478d404d": "enemy_forward_shield",
            "39aa90f7c650804d": "e0053",
            "57a8a4a26a6c04d": "loot_item_mod_rare_shieldreload",
            "11b866211e1c404d": "e_small_3w_armoredguardsguards",
            "992824ec82004d": "w0624",
            "3e945e96f030804d": "w0096",
            "233919afcfa2004d": "progression_mod_knight_miniboss_health",
            "3fd27da22670c04d": "e0250",
            "66d0d513629804d": "e0274",
            "2013aab1c837c04d": "wave_1tempest_5enraged",
            "26aca2c1a575004d": "e0358",
            fa01ef35b2c004d: "progression_mod_tempest_t2_shield_damage",
            "29bada969cf4c04d": "e0589",
            "2d88359590b2404d": "loot_item_mod_legendary_mentalfortitude",
            "2705242bb76f004d": "e0188",
            "3e5178191fba004d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            "1030a39f8826c04d": "e0134",
            "3ff7a81b6cacc04d": "loot_item_mod_legendary_specific_zoom",
            "1257a6fd9f1404d": "e_east_island_03_01",
            "3ad53a628378804d": "expedition_t1_mod_enemy_pistol_resistance",
            "3f231f5ca4ee004d": "e0703",
            "29997fa2b282804d": "e_small_1w_1armoredguard_2guards",
            "365671c00567404d": "w0011",
            "2095347f1b37c04d": "e0431",
            "3aabc257c95a804d": "expedition_t1_mod_enemy_increased_health",
            "2d6bb95ca694804d": "w0739",
            "29e9b58b0848c04d": "loot_item_experimental_golden_gun_1",
            c6f466e311e404d: "progression_mod_tempest_t2_miniboss_shield",
            "1001b13b37f2804d": "e0346",
            "4060d9ff675404d": "e0639",
            "11479e910344c04d": "loot_item_mod_exquisite_weaponreload",
            "48eb327df2fc04d": "camera_trigger_collider_000",
            "2a581e157ba9404d": "w0244",
            "3e570fa9ea01004d": "wave_1tempest_1enraged",
            c6e5c409769c04d: "e0075",
            "396b8f413fc5804d": "e0286",
            "2dd813d59c51c04d": "loot_item_mod_exquisite_mentalfortitude",
            "378d259dec76c04d": "w0040",
            "13c9c811724d404d": "progression_mod_turret_projectile_t1_armor",
            "28920d1f712cc04d": "e0354",
            "3f31dbab54e8004d": "shield_object_006_concrete_chunk",
            "37bb9d90372a404d": "p7_ai_character_000",
            "3146ab78b419804d": "e0203",
            e421987f609404d: "upgrade_launch_dmg_3",
            "34d9354704d004d": "e0040",
            "1c788b5b0a64c04d": "w0093",
            "3fb950133216404d": "w0597",
            "2ab304cf91f2c04d": "progression_mod_ranger_t2_miniboss_health",
            "3231ed886e6b004d": "wave_e07w01_2eliteranger_3guard_2ag",
            "11188177537a004d": "e0173",
            "101e03f0b5c5404d": "progression_mod_guard_t2_miniboss_armor",
            "18eb4972807b804d": "w0027",
            "31b2dd9af3c9404d": "energy_item_2",
            "1d7ba6537fe1004d": "w0278",
            "27d1a7b070ad804d": "e0246",
            "162b8a9b555a804d": "wave_6moldwalkers_hiss_mix1",
            "509751c6f0004d": "loot_item_roulette_ball",
            "3193bfb700e4004d": "unlock_launch_interact",
            "1a0bc9e3288f804d": "p7_weapon_player_smg",
            "3ce105bf9671404d": "w0166",
            "185c0c8b293d004d": "p7_ai_character_000",
            "1f0cbc58691d404d": "e0223",
            "16b5af4c02da404d": "tempest_multilaunch_chunk_004",
            "35aba8d1f928c04d": "w0638",
            "2297524dde61004d": "e0070",
            "12fabfc05053804d": "w0138",
            "3e2e54265840c04d": "e0525",
            "2403ee21be81004d": "e0743",
            "1c59b9671c93804d": "w0010",
            "1418e57f7d63c04d": "ability_upgrade_item_002",
            "10cd2fce21ff404d": "loot_item_mod_dlc1_exquisite_inner_peace",
            "3ac4f50774d7c04d": "w0037",
            "2e5e2242ee8ac04d": "expedition_t3_mod_player_increase_player_stamina",
            "281b11c7d947404d": "e_small_1w_5drifters",
            "3a682d01172cc04d": "progression_mod_tempest_t2_miniboss_health",
            "1097d6dc4bcec04d": "progression_mod_turret_projectile_t1_health",
            "9499a92cd63c04d": "loot_weaponmod_rare",
            "2a1dc87ca71c404d": "w0234",
            "2817ddea1041804d": "loot_item_mod_exquisite_improvedphysique",
            d022006240b804d: "w0371",
            c9d98e5af32804d: "p7_ai_character_000",
            "34668d518eadc04d": "w0130",
            "36fca890d234004d": "e0586",
            "12a0d10b170f404d": "e0296",
            "2adc077c5f5e404d": "w0684",
            c327bc11d62404d: "wave_6moldwalkers_hiss_mix2",
            "18a8fdb06a49804d": "e0061",
            "9b1739e5dfc404d": "w0314",
            "2a4aa405e70ec04d": "e_small_1w_3drifter",
            "37f9a51eb376404d": "e0541",
            "27489fa756e0404d": "p7_weapon_player_smg",
            "32f527bdc89e404d": "w0166",
            "1a32c8a36b004d": "expedition_t3_mod_player_increase_ammo_regeneration",
            "3c72ef52732b004d": "w0226",
            "29492b4a7e09804d": "loot_item_mod_dlc1_exquisite_kinetic_transfer",
            "20cd57471536004d": "w0003",
            "15b4d3219539c04d": "wave_1tempestelite",
            "1d884f1eeb5c004d": "e_small_1w_2turrets",
            "150db0d4477f804d": "e_small_1w_5moldwalkers",
            "2265f42358c9c04d": "e0113",
            "3b77ba10aba2804d": "progression_mod_astral_flyer_t1_health",
            "9f21b53ef29404d": "e0372",
            "1bc6e9040f81004d": "e_small_1w_3guards",
            "1bf6efd7e3d1004d": "e0235",
            "325d094b0da7004d": "loot_playermod_exquisite",
            "293c2a5a1bc7c04d": "e0079",
            "1bfce874e5cd404d": "loot_item_mod_exquisite_improvedphysique",
            "174076d1c6a6404d": "expedition_t2_mod_enemy_crowd_resistance",
            "3768439d78c8c04d": "p7_weapon_ai_mop",
            e17e13625a0404d: "mod_progression_knight_chaingun_miniboss_armor",
            a9d5fd883a2004d: "w0300",
            "1c3d6f95cde3c04d": "e0183",
            "1b1ba991d05d004d": "e0179",
            "113e932fdc77804d": "wave_1moldwalker",
            "1be3c7d5c91bc04d": "w0262",
            "3184a41b5440804d": "e0741",
            "20b73a0ade82404d": "w0575",
            "2abb92078d70004d": "w0420",
            "37ca0f8df7a804d": "e0504",
            "21edc5a49d1b004d": "p7_ai_astral_plane_flyer_000",
            "647510e3564804d": "w0161",
            "12fc6a1766c3c04d": "w0338",
            "27243f66d2f8004d": "e0045",
            "2f525ce2c76f004d": "e0491",
            "3be7bf840224804d": "w0051",
            "300320c15fa6004d": "w0166",
            "86c7c3fff5a804d": "e0484",
            "2dab0c327655404d": "e0353",
            "122efdd3cb6c404d": "w0718",
            "2e06eab8d7f5804d": "loot_item_resource_steel_ingot",
            "11f4e29f9f7f804d": "w0117",
            "2a28c90c0224c04d": "w0690",
            "3560d84b35eb804d": "progression_mod_drifter_t3_launch_damage",
            "1f685838aac5004d": "e0511",
            be3e17f412a004d: "e0603",
            "2a647cce305ec04d": "w0168",
            "2e77876159c6404d": "w_west_island_01_01",
            b98e1e2043804d: "loot_item_mod_dlc1_exquisite_lightning_reflex",
            "2370cd9c43a8004d": "loot_item_mod_dlc1_exquisite_bombardment",
            "186ab0fec24dc04d": "loot_item_mod_exquisite_specific_receiver",
            "18cb7562deebc04d": "e_cubicles_1",
            "24f38e8d2095804d": "e0157",
            ec0dbf92cc2804d: "e0355",
            "1c9afa6389e1c04d": "e_small_1w_mix3",
            "26321f0f34be804d": "loot_item_mod_rare_accuracy",
            "2cfe8ba5c74b004d": "e0505",
            "16150dffb5b9804d": "w0566",
            "25a0130de686004d": "wave_2rangers_3guards",
            "2635d6c4386a004d": "e0022",
            "12b4fb16f1a0004d": "w_at_tower_enemies_02",
            "36b3fee21940004d": "e0656",
            "1a86ace554b7404d": "e0102",
            "30cecd4a84e7004d": "w0164",
            "196f28061210404d": "e0300",
            "2213bdd8f54a004d": "e0702",
            "2688b91fc89d404d": "w0105",
            "2f2fb5726edb004d": "unlock_compel",
            "2c3c365d1859c04d": "e0460",
            "190d5b3d88d3804d": "w0166",
            "1523b447a963804d": "loot_item_recipe_daily_vendor_player_mod_set1",
            "7feb7eb774f404d": "w0754",
            a37d3ade12ec04d: "w0486",
            "2b137a4428b4c04d": "loot_item_mod_legendary_weapondamage",
            "26cf77155a6e404d": "progression_mod_marksman_t1_melee_damage",
            "19cb0a278442804d": "e0527",
            "26c9f3fd1db004d": "loot_item_resource_red_brass_pin",
            "1af54ee073b6004d": "e0550",
            "22f31a6e21e804d": "upgrade_levitate_desc_4",
            "38a4dad2ef7fc04d": "progression_mod_guard_t2_melee_damage",
            f07c91e05b0c04d: "w0163",
            "15158a4f5537004d": "w0517",
            "2457703314e5404d": "e0307",
            "19fcc527ac4c04d": "upgrade_compel_drain_3",
            c2df739c4c0004d: "e_medium_5w_tempestmarksmenarmoredguards",
            "1cba977b6178c04d": "e0409",
            "33c8683aec56004d": "w0213",
            "1c2fc8ebcf6dc04d": "upgrade_launch_dmg_1",
            "2f33448c7879004d": "e0323",
            "280b82101c80c04d": "e0600",
            "201e73ecb013804d": "e0007",
            "2f5580a3c7a8804d": "w0788",
            ad17769a18ac04d: "progression_mod_knight_miniboss_health",
            "11c025daf1a2004d": "w0678",
            "2afe7d890148804d": "w0599",
            add650c9b9f404d: "e0219",
            "34443cbfe601404d": "w0419",
            "18b11fd539e1404d": "loot_item_mod_exquisite_reinforcedshield",
            "233bad0fcdd004d": "progression_mod_moldwalker_armor",
            "3abf5af52fd0404d": "e0307",
            "664812654afc04d": "w0522",
            "3819be99302bc04d": "w0353",
            "2be6dde08e67404d": "p7_weapon_player_pistol",
            b283da4f65f004d: "e0348",
            "34184c25a05404d": "e0377",
            "2a2d6c2933c6004d": "w0217",
            "1184f2492f98004d": "p7_ai_character_000",
            "22b540413373804d": "e0103",
            "1542c7ec2243804d": "encounterwave_000",
            "350b3585940c004d": "wave_2marksmen_2rangers",
            "44218932161404d": "w0464",
            aa4a6873f70004d: "w0055",
            "1bfb2de95c76804d": "w0685",
            "23b4aa320719c04d": "e0497",
            "30b8101b702c004d": "w0553",
            "2d9dd29ef50c404d": "w0024",
            "2f4ddaa53aad004d": "loot_item_mod_uncommon_accuracy",
            "14bb03e1c8f7804d": "wave_e06w01_2ranger_rpg",
            "317dd7daf480004d": "p7_ai_tempest_000",
            "3dd05175fd81804d": "loot_item_mod_expedition_rare_scavenger",
            bfa89649dedc04d: "loot_item_mod_dlc1_exquisite_bombardment",
            "17c7de05faee004d": "w0103",
            "6165cb045ea404d": "wave_2turrets",
            "2bf4555eac97c04d": "p7_grenade_he",
            "36e954365e7b804d": "w_s020_e2_w3",
            "36d3d214473a004d": "w0129",
            "373b8b02c098c04d": "e0523",
            "127a5f46289ec04d": "e_small_1w_2moldwalkers_1ranger",
            "36cc20f5c6ea804d": "e_small_1w_1tempest",
            "27864034f0a6c04d": "w0029",
            "2a0be34658ad004d": "wave_1marksman_4enraged",
            "3ae955bad468004d": "w0124",
            "23e871692e46804d": "p7_ai_tempest_000",
            "2b14636ef711004d": "w0507",
            "341efc3877e3404d": "e0152",
            "33eb2f19f235c04d": "loot_item_mod_common_reinforcedshield",
            "2d7748ea7989804d": "loot_item_mod_common_weaponrof",
            c917a9b2f35404d: "w0765",
            "98bd08f867b004d": "w0038",
            "3277cd147f5b004d": "loot_playermod",
            "877b3e86312804d": "w0437",
            df3e5e40febc04d: "progression_mod_knight_miniboss_health",
            "3d98a2b34957004d": "basic_smg",
            "2d4ec9a9af3c404d": "w0048",
            ef3be01029004d: "e0149",
            "37b3aea9df5c404d": "p7_weapon_player_pistol",
            "1570cc377759404d": "e0539",
            "12e05e86d75cc04d": "expedition_t3_mod_player_increased_stamina_recharge",
            cb7212597ca004d: "progression_mod_knight_miniboss_weapon_damage",
            a4255a6a8bdc04d: "loot_item_mod_rare_reinforcedshield",
            "28a985e9827f404d": "e0202",
            "5cd7558041c404d": "wave_3marksmen",
            b299f9ff711404d: "loot_item_mod_exquisite_weapondamage",
            "1af56210db6d404d": "w0478",
            "173f0c23fc96404d": "w0570",
            "3149b81d4c39c04d": "e0579",
            "1d96f073cbff004d": "wave_2drifters_2enraged",
            "3b21f9efeb03c04d": "expedition_t2_mod_player_increase_ammo_regeneration",
            "197fa54c26a5c04d": "e0679",
            "30a0c6cfd3dd804d": "w0099",
            "2a1356df9853404d": "wave_2armoredguards_4guards",
            "33e25a186c14c04d": "w0349",
            "1fd89397c0e9004d": "w0646",
            "3212afe3164b804d": "e0744",
            "286d4ec5b725c04d": "w0405",
            "216359608c74c04d": "w0325",
            "284ae55b07f6004d": "loot_item_mod_common_leafonthewind",
            "24a975b72783004d": "progression_mod_knight_miniboss_health",
            "1d9675c15b0ac04d": "loot_item_mod_exquisite_rapidrecovery",
            "2a8ac94913e5404d": "w0466",
            "1ce1185995c7404d": "e0278",
            "3477d54e1bd2804d": "w0656",
            "382b403576af404d": "encounterwave_001",
            "2388443fbd15c04d": "w0539",
            "1e5f33bb371a404d": "e_small_1w_3rangers_1armoredguard_1marksman",
            "1220b91dacd6c04d": "e_016_big_fight",
            "2f93bda47530404d": "w0224",
            "2b0e835e7f11804d": "e_small_1w_4rangers",
            "51414d1a1f2404d": "w0002",
            "383274c52dfac04d": "wave_9moldwalkers_5turrets",
            "28dd131b4a03c04d": "e0013",
            "9ffb3c84ca8004d": "wave_2drifters_launch",
            "25dfdaa9c36004d": "e0499",
            "7be04333698004d": "p7_weapon_ai_turret_sporelauncher",
            "1456a17a8d01404d": "e_medium_2w_armoredguardguard",
            "215671bb3793404d": "loot_weaponmod_rare",
            "3e878e74a04c004d": "tempest_multilaunch_chunk_002",
            "26b88aec2dca004d": "e_small_1w_1guard",
            "378f97eabf8bc04d": "e0518",
            "2f1361a6fec7404d": "wave_1ranger_2armoredguards_3guards",
            "21d20b5faaeb804d": "e0650",
            "1a70c4f07278404d": "loot_item_mod_exquisite_specific_missile_velocity",
            "2372b9cda0e8804d": "e0573",
            "391a603d4ac004d": "e0207",
            "3f75081bb6c6c04d": "loot_item_mod_common_specific_gyroscope",
            "2ea53a3d533b004d": "e0055",
            "3033281adb5d804d": "e0162",
            "28b49e2c2551804d": "progression_mod_knight_miniboss_health",
            "30a303601185004d": "w0516",
            "24ce2fc63b66c04d": "w0534",
            "148beb14c669404d": "e0606",
            "1250f5ac909b804d": "e0667",
            "2c8d23b0a40b404d": "w0669",
            "538f62081e6804d": "e0617",
            "2d535a89c52b804d": "e0026",
            "178fc87217f5404d": "e0133",
            "2dbac35f49e804d": "loot_item_mod_exquisite_weaponrof",
            "22a8f88cb92b804d": "w0251",
            "22b26e64f324c04d": "w0811",
            "17bc83a55e4a804d": "progression_mod_guard_melee_damage",
            "240a9420e5ee004d": "w0207",
            "174787ec87cb804d": "w0559",
            "174618aba1eb404d": "e0112",
            "1fa8ee80f5b2c04d": "e0038",
            e83971c272a404d: "w0752",
            "1b0d41fffdd0c04d": "e0565",
            "18cb2b348ddb804d": "e0373",
            "17dcfeba566b804d": "w0200",
            "208e52c9a247404d": "w0127",
            "24c8193b9db3004d": "e0414",
            "3e825b0aa47f804d": "w_s020_e1_w3",
            "3f87d3a73ef7c04d": "wave_2moldwalkers_1ranger",
            "1c58c162c4c0804d": "e0025",
            "1a3fa1869fc4404d": "e_small_1w_3moldwalkers_3turret",
            "12fb897559bf004d": "unlock_launch_enemies",
            "9c903905722004d": "wave_e13w01_5enraged_2drifter",
            "29da633ad451404d": "w0736",
            "3baa4e0fa1c804d": "w0719",
            "37edcb9bd4f8c04d": "wave_1drifterhybrid",
            "298543fbb12404d": "w0627",
            "1c1a0e32b9ba004d": "e0123",
            "3c9606be11af404d": "e_at_tower",
            "1d6cb3f35ee1804d": "e0710",
            a6aa2aadf45c04d: "loot_item_resource_uncommon_astral_blip",
            "241c305a4d76004d": "basic_shotgun",
            "43755f218f804d": "e0408",
            "2e73bb034c31004d": "w0483",
            "34ef210d2dc1404d": "e_small_1w_1turret_bullet",
            "25d1f2e0ffab804d": "e0482",
            "7c8262328ed004d": "e_tower_03",
            "35d5b9cd7e03004d": "loot_item_mod_exquisite_bloodthirst",
            "3d2c5ee64754c04d": "w0508",
            "28fdae83d591404d": "e0212",
            "175add9d26a6004d": "e0002",
            "140ac01449d6404d": "progression_mod_drifter_t2_armor",
            "3f0840977346804d": "loot_item_mod_expedition_legendary_energy_conservation",
            "33d013cb656c404d": "expedition_t3_mod_mode_increased_weapon_damage",
            "9d4bf3bb792804d": "w0348",
            b8de233aa17c04d: "loot_item_mod_exquisite_suppressivefire",
            "1bfe8ec78186404d": "w0668",
            "2ab141e5f825c04d": "e0688",
            b8c6f92d512404d: "w0717",
            "25c03d9dff0a804d": "wave_1armoredguard_3guards",
            "2a554cdf50a804d": "e0711",
            "282ac7ce416404d": "e0536",
            a2d35188ba2004d: "e0340",
            "2449d4d1e7bcc04d": "e0731",
            "2f15893f0f22804d": "e0387",
            "2723d026a376804d": "pneumatic_tubes_carrier_temp_000",
            "339782a4e107804d": "w0717",
            "1340281eeac3c04d": "e0347",
            "59cba2cfb5f404d": "e0018",
            "1d8da6aefd43404d": "w0429",
            "2c925cd54dd9c04d": "w0440",
            "1fb8c13d8f64804d": "e_s020_caves_1",
            "1f169d4fb47c004d": "w0751",
            "191a5e3198bb004d": "w0203",
            "3f962e792b02c04d": "loot_weaponmod_rare",
            "22734ea47b7d404d": "e0185",
            "2c251ae9cc31804d": "e0089",
            "31637be0e25f404d": "wave_3rangers_3guards",
            "110da57402d1404d": "w0270",
            e42111640b2c04d: "w0177",
            "27aa929b38d3404d": "loot_item_mod_dlc1_exquisite_mugging",
            "345d615bca39004d": "w0514",
            "1a2801cda26b804d": "w0769",
            "1428f260d263804d": "w0362",
            "2d207be8c59c004d": "e0666",
            ada9f8717b3004d: "w0728",
            "228454b7a420404d": "w0485",
            "3d828c2de967404d": "point_light_000",
            "463539f7caf404d": "pointlight_muzzleflash_enemy",
            "12092e0c84f3c04d": "wave_4turrets",
            "3097f7ca328b804d": "w0574",
            "3380429978abc04d": "e0681",
            "115f2d08ea27404d": "e_test_1w_5armoredguard",
            "1572812e1dea804d": "loot_item_mod_common_efficientshield",
            "2e9ef787c016404d": "e0352",
            "1ca679283633004d": "w0774",
            "3432f80d93b5004d": "e_006_ranger_intro",
            "295c483e9780004d": "e0242",
            "184293de9299404d": "progression_mod_ranger_t2_melee_damage",
            "2105d3c25aa4404d": "e0544",
            "67620c69c0d004d": "p7_ai_launch_drifter_000",
            "11a09c1fcfb0c04d": "w0672",
            "209174aa46d6c04d": "p7_throwing_axe",
            "21b8a49ad2af404d": "w0391",
            c8b4c733601c04d: "progression_mod_drifter_t1_miniboss_charge_damage",
            "1217754089f3c04d": "w0191",
            "363e8f3e91dbc04d": "w0791",
            "2c90e6786284804d": "w0733",
            "8bfb1f2158c004d": "w0229",
            "1cca93253421804d": "loot_item_resource_uncommon_entropic_echo",
            "2a4d71ffba97804d": "w0257",
            "7de6de65cfdc04d": "w0317",
            a0046609c8e404d: "loot_item_mod_exquisite_suppressivefire",
            fad618f5220c04d: "loot_item_mod_rare_improvedphysique",
            "34365a177bad004d": "e_small_3w_moldwalkers_3_2_3",
            "22b23282c7e4404d": "e0535",
            "21baa62132a6804d": "upgrade_levitate_desc_3",
            "3b753b7ddc22004d": "e_medium_2w_drifterenraged",
            "38b3c4783b0c04d": "w0426",
            "1210b4495baa804d": "e_013_mixed_combat_02",
            "224e0a06642cc04d": "encounter_m10",
            "316503f54a5804d": "p7_weapon_ai_assaultrifle",
            "3474f7999cdfc04d": "w0594",
            "391ecbb371be404d": "w0430",
            "1e1279f601afc04d": "wave_1drifter_2rangers",
            "25c799da29bf004d": "w0012",
            "1d92f8a68c8e004d": "loot_item_resource_common_ritual_impulse",
            "449ce01bc55804d": "e0118",
            "39305c44ef01c04d": "w0054",
            "3176db2c3b39c04d": "upgrade_melee_dmg_5",
            "2c95321fed88804d": "e0043",
            "33738562bfda804d": "e0640",
            ce5ce30319b404d: "wave_2enraged_3armoredguards",
            "1d83b91e5464804d": "loot_item_mod_expedition_exquisite_vampiric",
            "164e88c647b5c04d": "loot_item_mod_rare_improvedphysique",
            cc2b3ab1a61404d: "loot_weaponmod",
            b8b356f15c7404d: "w0746",
            "26af84c5138f004d": "progression_mod_tempest_t1_launch_damage",
            "29abf10160f6c04d": "e0608",
            "8b4312c25f9804d": "e_small_1w_1armoredguard_3guards",
            "1aa11d016905004d": "e0468",
            "268155f84047c04d": "e0365",
            "1fc700a93c04c04d": "wave_1drifter_3rangers",
            "3f0d189c636d804d": "w0366",
            "22443ace72e0404d": "e0662",
            "361ecd2c5763404d": "loot_item_mod_dlc1_exquisite_coin_collector",
            "38818c2ab4ec404d": "w0222",
            "2cea240b647a004d": "w0408",
            "3c450a52c8ea804d": "w0230",
            "6e29bc95bef804d": "wave_1drifterlaunch",
            "2fef95f4a81b804d": "wave_3enraged",
            "1fed2a6ad0bc404d": "w0372",
            "2ec47709e4d7c04d": "w0170",
            "11a789ae8fa8c04d": "projectile_dummy_object",
            "185c4bdeb874c04d": "loot_item_mod_exquisite_mentalfortitude",
            eafa98d9348804d: "w0804",
            "39b319f763de004d": "p7_ai_enraged_000",
            "3e8470ff76f2004d": "w0588",
            "10c9ecab632c804d": "e_small_1w_3moldwalkers_1guard",
            b9d34845418804d: "wave_1guard",
            "5f1d48afffe004d": "w0601",
            "3789774bae5f804d": "e0031",
            e619f8b639a004d: "w0277",
            "1c07a95abb31804d": "loot_item_mod_expedition_rare_rampage",
            "222508737ae3404d": "e0301",
            "11c6dd094577004d": "loot_item_mod_exquisite_weaponrof",
            "25d0d911d704804d": "loot_item_mod_common_specific_zoom",
            "1dbe89e62e42404d": "w0593",
            "180c24a388b1804d": "progression_mod_drifter_t1_miniboss_armor",
            "307fae5cf062004d": "e0198",
            "1e5c4a2aa16404d": "w_cubicle_1",
            "1a9e3f3ab3e0c04d": "loot_item_mod_common_improvedphysique",
            e08aa5eebbe004d: "e0445",
            "33fe2597ea0b004d": "w0368",
            "212dad74b737404d": "w0405",
            f22e1b624b6004d: "progression_mod_guard_t2_armor",
            "1f3f21a3a76a804d": "e0267",
            "2e50423d6890404d": "w0129",
            "19f2d42557a2004d": "progression_mod_guard_health",
            "3dbc65af7ab3404d": "e0622",
            fdeb0edb07d804d: "w0545",
            efcb6ad51c9404d: "e0407",
            "206330e98de4004d": "w0176",
            "3c23ffef404a404d": "loot_item_mod_dlc1_exquisite_ballistic_recovery",
            "10ac6c33b3bfc04d": "p7_ai_tempest_000",
            "2618afffcc12804d": "w_east_island_03_01",
            "1bc1350719acc04d": "w0679",
            "15d9b782eb17804d": "w0405",
            c935ae5666dc04d: "e_large_4w_marksmenrangersenraged",
            "29936c01d5a6c04d": "e0391",
            "80b90ed50a1404d": "progression_mod_tempest_t2_miniboss_shield_damage",
            "1b71c007e73e804d": "e0140",
            "1c64b661c10a404d": "e0291",
            "18e6beaa1689804d": "p7_ai_character_000",
            f5c4e37f46dc04d: "e0469",
            cfa89f9c4ec404d: "progression_mod_drifter_t3_miniboss_armor",
            "137d7a0b2a6c004d": "w0775",
            "3443b7bdf52d804d": "progression_mod_knight_miniboss_health",
            "1031ff18017b804d": "w0179",
            a3661b95e10804d: "upgrade_health_amt_3",
            "3b0603d7fa0c404d": "loot_item_mod_exquisite_adrenaline",
            "2d3701f8436d004d": "w0489",
            "1a091e7623de404d": "encounter_001",
            "37a77bfed41ac04d": "e0214",
            "20f27003eb7d804d": "loot_item_mod_dlc1_exquisite_siphoning_touch",
            "26970af3e376804d": "shield_object_002_bottle",
            "33f506dff366c04d": "w0011",
            "2a7d7b7be3c04d": "w0797",
            "16bfaa6ff841004d": "loot_item_mod_common_weaponreload",
            "1314accfaa0e804d": "w0193",
            "1df262ef8a49c04d": "e0401",
            "396b654c8d51804d": "w0657",
            "1a6aae833806804d": "p7_ai_character_000",
            bfdeb094847004d: "expedition_t2_mod_player_increase_weapon_damage",
            "25fa995c9ae8004d": "progression_mod_drifter_t3_miniboss_charge_damage",
            "32cf2b3a4594c04d": "e_001_guard_1_intro",
            "20776b241c74004d": "w0512",
            "8c09c059e73004d": "w0285",
            c93b9e7449b004d: "w0375",
            "218fb2276e38004d": "w0434",
            "27a9bf0a1572004d": "e0125",
            "23a5add9b5ef004d": "loot_item_mod_legendary_suppressivefire",
            "3c27ad10c3a9c04d": "e0643",
            "1104a5045f7fc04d": "p7_projectile_smallspore",
            "18aa2127f1c9804d": "encounter_enraged",
            "3266b9ab1dea404d": "e0732",
            "27a570a73820404d": "e0383",
            "8e4e903ec8b804d": "e0494",
            "28dd8253faff004d": "loot_item_mod_uncommon_efficientshield",
            "1af55178c433804d": "e0213",
            "221bfae6fa38804d": "w0646",
            "88cc8337b57004d": "loot_item_mod_exquisite_specific_stabilizer",
            "3fd8863cd47004d": "e_small_1w_1armoredguard",
            "3354e8b886df004d": "progression_mod_marksman_t1_weapon_damage",
            "1450ac640825404d": "wave_4guards_armored",
            "319f22186666804d": "e0270",
            "3435fc5d25cf804d": "loot_item_mod_rare_specific_pellet_scatter",
            "1c90cf3441f9404d": "progression_mod_knight_miniboss_health",
            "25a676147831004d": "loot_item_mod_rare_specific_missile_blast_radius",
            "345b21be698f404d": "progression_mod_knight_miniboss_health",
            "16893efa290b804d": "loot_item_resource_titanium_ingot",
            "29eea679e57c004d": "e0215",
            "22981f240006004d": "w0153",
            "1cb5bd7d129ec04d": "progression_mod_knight_miniboss_health",
            "129497805b6fc04d": "progression_mod_drifter_t1_armor",
            "1d749599d98c04d": "e0699",
            "1d1ad832642d004d": "e0605",
            "1977d5c91abf804d": "p7_projectile_torment",
            "353f996463f4004d": "e0479",
            "12400648d362004d": "loot_item_recipe_daily_vendor_player_mod_set1",
            "12ac278179d3c04d": "w0606",
            "13c362336d43c04d": "expedition_experimental_kill_healer",
            "36e1c51035d004d": "e0471",
            "10ef00708836004d": "w0445",
            "86bc30bbdd6c04d": "loot_item_mod_common_lightfoot",
            "2e272bc63a41c04d": "loot_item_mod_expedition_exquisite_healing_thoughts",
            "2f4f372a5402004d": "w0387",
            "1316f47d47ee404d": "w0505",
            "308bb0b61305804d": "loot_item_mod_legendary_specific_receiver",
            d4acb9ad075004d: "e0370",
            "2ed40686488fc04d": "wave_2rangers_4guards",
            "209d33da5e18804d": "w0515",
            "19522eb9cafe404d": "e0600",
            "2d89a7d6ddfbc04d": "w0020",
            "1277c15eb7f7c04d": "w0768",
            "2407f91b3a23004d": "e_small_1w_1rangerrkt_2rangersmg_2guards",
            "316fbffaef4804d": "loot_item_mod_expedition_exquisite_life_link",
            c0766620033c04d: "loot_item_mod_common_specific_missile_blast_radius",
            "224a66ef692f404d": "w0614",
            "18ab62d30afac04d": "progression_mod_ranger_t1_miniboss_weapon_damage",
            "18e44b33b8ac04d": "w0406",
            "11134addcab1404d": "p7_projectile_antiability",
            "3b8e133d6a92804d": "w0233",
            "31a60950721d004d": "w0465",
            "23f214b4d24b804d": "loot_item_mod_dlc1_exquisite_kinetic_transfer",
            "183f16166cd1804d": "w0227",
            "3389fe37354cc04d": "upgrade_shield_strength_5",
            "28e7af168e5f404d": "w0740",
            "3a0804869cb5004d": "loot_item_mod_uncommon_suppressivefire",
            "191fc4c56246004d": "p7_ai_launch_drifter_000",
            "3b7a5a07e6d9004d": "w0796",
            "1f763d766a47c04d": "ability_upgrade_item_001",
            "344b966887b2c04d": "shield_object_006_concrete_chunk",
            "31757adaec3f404d": "w0052",
            "3569c4ca6b57004d": "e0697",
            "26bf0b146fa7804d": "w0500",
            "68ff57d8f74404d": "w0395",
            "311d0797d11cc04d": "e0014",
            fef0fefd7c3004d: "w0239",
            "14f0a9170544004d": "e_large_1w_6moldwalkers_hiss_mix1",
            d4da400b9c804d: "e0016",
            "26b19b420cc6c04d": "w0254",
            "1ff65e1de457404d": "e0287",
            "767df120f59004d": "wave_e01w01_2guard",
            bf3d70f5dac804d: "w0813",
            "3485abafcc70c04d": "w0786",
            "17f082dc18abc04d": "upgrade_launch_dmg_4",
            "13def6e3a444c04d": "wave_5enraged",
            "3f4db223191404d": "shield_object_004_phone",
            "1d724e2e7e1f804d": "wave_2drifters",
            "2365ed73b8a6004d": "e0658",
            "3c0ef5bbf86d804d": "w0577",
            "213474a52d38404d": "p7_grenade_he_marshall",
            "6fe06539ef9004d": "w0154",
            "3e1851e1b68c404d": "w0675",
            "1d7b73e38b49804d": "p7_ai_character_000",
            "1e25540178a0c04d": "camera__generic__000",
            d893f0fb431804d: "w0086",
            "201620e167aa004d": "loot_item_mod_legendary_weaponrof",
            "18a7c46bace7404d": "w0214",
            "3612c99e427ac04d": "p7_ai_character_000",
            "2acc58d4f668804d": "progression_mod_knight_miniboss_health",
            "192f6a2e67d004d": "progression_mod_tempest_t1_miniboss_health",
            "2ac9951e82e8c04d": "w0717",
            "3f49274c737dc04d": "p7_weapon_ai_bouncegrenade",
            "33d5c3587db1c04d": "e0538",
            "25c0870b3cbbc04d": "progression_mod_knight_miniboss_armor",
            "3a398fe9768d404d": "energy_item_5",
            "14277d58e3b7804d": "w0433",
            "2ee84e03418d404d": "upgrade_launch_dmg_5",
            "136068c5ab0a404d": "loot_item_mod_expedition_legendary_life_link",
            "3922a7a2745c004d": "loot_item_mod_dlc1_exquisite_mugging",
            "342303a6cc37804d": "wave_1marksman_3rangers",
            "2af5e58a5b36c04d": "w0025",
            "1063b2e88fee004d": "e_small_1w_1drifterhybrid",
            "30288977e630404d": "e_small_1w_mix2",
            "25fd3d22b10d004d": "e0648",
            "24278cca5fc9004d": "e0597",
            "29367eb9bc59c04d": "progression_mod_tempest_t2_shield",
            "57ff9993600804d": "w0742",
            cb6a67d08a9c04d: "e_small_5w_armoredguardsguards",
            "3e19ab2fcaa2404d": "progression_mod_drifter_t2_miniboss_armor",
            "1f4073acb8f1004d": "w0626",
            "1b4240a06a5cc04d": "w0357",
            "2b88d1395079004d": "progression_mod_ranger_t2_melee_damage",
            d2a17a7a5ba004d: "e0044",
            "16e3545eb217c04d": "e0700",
            "6d531808b2ec04d": "e_medium_5w_nomagic_nosnipers",
            "369e16da35fdc04d": "e0449",
            "2fcdddb58153804d": "progression_mod_ranger_t1_miniboss_health",
            "81a4fd24f6c04d": "loot_item_mod_exquisite_adrenaline",
            "2bec268cf2cf004d": "upgrade_compel_drain_5",
            "6def4c9c3ea804d": "p7_area_rocket_2",
            "28350ad94715404d": "e0331",
            "390a48732bff004d": "e0230",
            "17f88cfad9d1804d": "e0155",
            fbe30b4be39804d: "w0205",
            "1aeba84d143b004d": "w0471",
            d0d91b5d566404d: "progression_mod_knight_miniboss_health",
            "2b8c6fdd9cb6804d": "wave_1marksman_3guards",
            "248548ef2b2cc04d": "wave_3enraged_2guards",
            "25a6cb48177b004d": "e0001",
            "6e856c449cbc04d": "loot_item_mod_expedition_legendary_emergency_reserves",
            "3deb8391fbc7404d": "shield_object_006_concrete_chunk",
            "49c11f94505404d": "loot_item_mod_rare_deadeye",
            "20be395e38d0004d": "e0630",
            "2dcf3aa22480c04d": "w0352",
            "1cdbc858f028c04d": "progression_mod_knight_miniboss_health",
            "199bd2740858004d": "shield_object_004_phone",
            "227eda189533804d": "loot_item_mod_expedition_legendary_shared_assets",
            "168ee9f14da3404d": "w0523",
            "1b43dba8e505804d": "loot_item_mod_dlc1_exquisite_shrapnel_catcher",
            "2c16471e7d86804d": "loot_item_mod_dlc1_exquisite_masters_strike",
            "1186d0f0ceb5804d": "e0495",
            "2ec8ed70edf7404d": "e0306",
            "1d9aa5f4ceea804d": "e0088",
            "684214eddf8004d": "progression_mod_knight_miniboss_health",
            "52c84baebd8004d": "e0424",
            "31c2bcad4dc2004d": "e0267",
            "20fcb4682c48804d": "e0555",
            "1a7e81f78ed5804d": "w0747",
            "23359ee73766404d": "e0030",
            "6e54a2efb1b804d": "e0232",
            "32cd81c73a5c04d": "p7_ai_character_000",
            f6213975a8d004d: "w0670",
            "2bf57477c9f804d": "e0210",
            "1cb9f009937c804d": "p7_ai_character_000",
            "90dccc1f4a8804d": "loot_weaponmod_legendary",
            "38315ef9198a404d": "encounter_enraged",
            "24df8cba8d19804d": "w0169",
            "31841a868507404d": "e0421",
            "2e831dad867f804d": "loot_item_mod_dlc1_exquisite_hazard_pay",
            c3b6c187d13004d: "upgrade_resource_amt_5",
            "97da0b3cd9a804d": "w0108",
            "3509d3788bbbc04d": "wave_1marksman",
            "20684d054e68804d": "e0594",
            "109420af716f804d": "e0532",
            "680424bc262404d": "e0500",
            "14c9d1654d0c04d": "w0605",
            "172bc85f6441c04d": "e0474",
            db71935e111404d: "w0564",
            "12b111525187404d": "e_small_1w_3moldwalkers_1turret",
            "2b4e28a03fcf404d": "p7_ai_character_000",
            "36b22bf10cbb804d": "loot_playermod_rare",
            "343cf3442966804d": "e0222",
            "31629e2aae1ec04d": "e0371",
            "1bfedee54e14804d": "loot_item_mod_exquisite_accuracy",
            "39d32cead436404d": "w0410",
            "61db6866c3c004d": "loot_item_mod_rare_deadlyrain",
            "3bc58945928fc04d": "w0032",
            "1f41bce92ebdc04d": "w0561",
            "38b5b5632542804d": "progression_mod_drifter_t1_health",
            "2dbdd3161aba004d": "e0553",
            "3fef8ad0bf48c04d": "w0760",
            "1a300ba967b5c04d": "e0691",
            "29f6d8dc1cfb804d": "p7_weapon_player_railgun",
            "3f067902edd3804d": "encounterwave_000",
            "19a90869f128804d": "progression_mod_knight_miniboss_health",
            "6d6c1f9b21b004d": "w0730",
            "2186de37ba33004d": "wave_1drifter_2guards",
            "6cb1401adf004d": "e0442",
            "3ed6cf22a4e3804d": "w0616",
            "2b7ad7fe1cfb404d": "wtessts",
            "168e3d2f4144404d": "w0340",
            "3db282b76d92c04d": "encounter_m10",
            "385800560ea5004d": "e0576",
            "353443cb5529c04d": "w0398",
            ca8c6a332b8404d: "w0536",
            bdd0a690349c04d: "e0169",
            "149fbf3dbe0f004d": "loot_item_mod_expedition_rare_mind_opener",
            "319f7f6dbdef404d": "e0477",
            "15c95fe2c61404d": "e0165",
            "25963a0908d9804d": "p7_ai_healer_000",
            "220d00641a55404d": "e0623",
            "205a101a3321c04d": "upgrade_health_amt_1",
            "18f0789e4b0d804d": "e0461",
            "21d42fc5e9fd804d": "wave_1ranger_2armoredguards",
            "228e0684b548404d": "e0305",
            "204463c6aa55004d": "w0744",
            "2422f992aa80804d": "w0145",
            "22978376ae85404d": "e0279",
            ef17ef4a88fc04d: "e0008",
            "212ff35e7afc004d": "progression_mod_knight_miniboss_health",
            "147fcb58332ac04d": "e0478",
            c7821a124a8804d: "w0255",
            "3c9825676003804d": "loot_item_mod_exquisite_specific_missile_velocity",
            "1e3e39bc9df6804d": "upgrade_launch_dmg_1",
            "1cc32a4e5a23804d": "wave_2enraged_3guards",
            "2e62f4ef3b1cc04d": "w0261",
            "343fd3ca873e404d": "w0487",
            c6922a67300804d: "loot_item_recipe_daily_vendor_player_mod_set2",
            "3efaf43c227c804d": "loot_item_mod_dlc1_exquisite_immediate_response",
            "3f1ae114be97404d": "e_small_1w_1tempestelite",
            "1e6113e96f7b404d": "e_medium_3w_enraged_horde",
            "1f853569f8df804d": "wave_5drifters",
            "2306d382335a804d": "w0390",
            "33a8f6efadf3404d": "w0785",
            "29cf5e136f7ec04d": "wave_2enraged_1guard",
            "22f55716d7c2404d": "w0306",
            "30e04bc590cf404d": "loot_item_mod_dlc1_exquisite_kinetic_battery",
            "29bcb74ba748804d": "e0172",
            "195cc2698df8804d": "progression_mod_drifter_t1_miniboss_health",
            "2a51881f49ab404d": "e0116",
            "1f121ec36745404d": "w0389",
            "27ca854a30bc004d": "wave_2enraged_2guards",
            f2e3366b430404d: "loot_item_resourcepack",
            "216cc517f5b404d": "w0104",
            "435b4e2b8f7004d": "w0642",
            "201602392f1b804d": "w0761",
            "35b58175099b804d": "w0017",
            "3259fd067ead404d": "w0755",
            "18195ebc2b50404d": "e0276",
            "362ea728a6f5c04d": "w0693",
            "2850aa446921c04d": "pneumatic_tubes_carrier_temp_000",
            "27d26e27c694004d": "w0729",
            "26300ae23ddc404d": "loot_item_mod_uncommon_mentalfortitude",
            "27906f8881d3404d": "e0396",
            "1da956f4cfd6c04d": "p7_weapon_player_pistol",
            "35b55a003277004d": "e0129",
            "19cb61730fc1c04d": "loot_item_resource_pyrrhic_shard",
            "19c1b4602a69804d": "p7_ai_runner_000",
            "14bc8b10bd49004d": "e_small_1w_3enraged",
            "1931d7d379ac04d": "e0074",
            "3baf43901f31804d": "e0090",
            "216dd5f20a4c804d": "wave_3moldwalkers",
            "19626be53434c04d": "e_small_1w_5rangers",
            "107a5fd7b1e3804d": "w0563",
            af0057a6dc5c04d: "encounter_000",
            fb25b605ffcc04d: "e_large_1w_9moldwalkers_1turret",
            "2e1c52af713ac04d": "w0063",
            "36fe583f8801804d": "e0605",
            "39aba134dabe404d": "wave_3knights",
            "65b92d814f0804d": "w0404",
            "130e3583a056c04d": "e0133",
            "3c4fb03f6e99804d": "e_small_3w_marksmenrangersguards",
            "339d976bc285c04d": "e_010_drifter_intro",
            dc4bc3984aa804d: "loot_item_mod_rare_deathfeeder",
            "273dce91d3ff404d": "e_large_1w_6moldwalkers_5turrets",
            "208698da3888c04d": "loot_item_mod_dlc1_exquisite_shrapnel_catcher",
            "1986eb318c28c04d": "e0133",
            "37b75a87f646004d": "progression_mod_knight_miniboss_health",
            d47c7f80dcb404d: "w0249",
            "1dc6e3a228f4004d": "w0710",
            "3f20eb5948bf804d": "loot_item_mod_rare_weaponrof",
            "3d6e3274a52a404d": "e0138",
            "168825a8f6f6004d": "wave_3armoredguards_3guards",
            "12172b5c1524404d": "w0725",
            "1d415abb4842404d": "loot_item_mod_exquisite_weaponreload",
            "2cd128aba19ac04d": "e0432",
            "64b84fd877b004d": "w0303",
            "14dcd576eddb804d": "w0662",
            c8717acc119404d: "upgrade_health_amt_5",
            "15158c354c26804d": "w_s030_e3_w1",
            "1affdede41efc04d": "e0128",
            "15dea2401990404d": "e0048",
            "1be659592bb4004d": "w0590",
            "1db8a70884fe804d": "w_tower_ritual_02",
            "944a6e4fba404d": "w0356",
            "2d0629a171d1004d": "e0035",
            "2e7ac532f442404d": "loot_item_mod_rare_mentalfocus",
            "1aabbe717d51404d": "loot_item_mod_exquisite_specific_booster",
            "2db75dcc8ba8804d": "e0508",
            "13df2dbe2891404d": "p7_ai_character_000",
            "32a21b39a17404d": "loot_item_mod_legendary_lightfoot",
            "340f97ff32ab804d": "wave_3moldwalkers_2rangermix",
            "1b67075dbfb0804d": "w0461",
            "2971cec42aedc04d": "e0312",
            "19047bb98cd2404d": "e0362",
            "23a92b90c17e404d": "w0470",
            "3338608e66a9004d": "progression_mod_astral_flyer_t1_damage",
            "3a393d3e1a38404d": "wave_1armoredguard_2guards",
            "5e8cf75db9b404d": "loot_item_mod_uncommon_lightfoot",
            "2f6c66df2c4e404d": "loot_item_recipe_daily_vendor_player_mod_set2",
            "13bb62f3e994c04d": "w0428",
            "299257d92300004d": "w0757",
            "3a47d2134e72804d": "e0503",
            "3265fab35713004d": "loot_item_mod_expedition_legendary_pressure_points",
            "18288012eeb9c04d": "e_medium_2w_marksmanranger",
            "3aea19d7e246404d": "loot_item_mod_dlc1_exquisite_pink_mist",
            "35ed85ae0655804d": "e_007_mixed_combat_01",
            "368d3eef16b2804d": "loot_item_mod_expedition_legendary_scavenger",
            "1820860e15ec004d": "w0452",
            "122947e9899f004d": "loot_item_mod_common_weaponclipsize",
            "14be4f2859e4804d": "e0174",
            "3e5560aa00d4804d": "e0411",
            "66cbf1d2b0cc04d": "progression_mod_knight_miniboss_health",
            "33e605d86706404d": "e0109",
            "2ce5ddd3dc60004d": "loot_item_mod_dlc1_exquisite_shard_refraction",
            "2f0126d40a85c04d": "w0499",
            "3a50dce926aa804d": "loot_item_mod_uncommon_deadlyrain",
            b32a310f7004d: "w0129",
            "221537eefa99004d": "w0274",
            cd54559d503804d: "w_s020_e2_w2",
            "4ff3074bcb2004d": "e0335",
            c860ffdd848404d: "w0304",
            "120a74650171004d": "wave_2knights",
            "16033731c9df404d": "w0066",
            "199328b2e366404d": "p7_ai_master_000",
            "1c45a7cda401004d": "w0542",
            "142b279b2da0804d": "w0184",
            "1ccb871d78b404d": "w0446",
            f8447e523d2404d: "w0034",
            "1a8fff5b6c81c04d": "testwave_guardsrangers",
            "52ba42be7e4004d": "upgrade_launch_object_category_1",
            "27d5ef58846c004d": "e0599",
            "64e815f7b06804d": "e0292",
            "1d87839d219804d": "e0410",
            "10c0f72fe8da004d": "w0549",
            "1da74d05125e804d": "loot_playermod_legendary",
            "133cceddb0e7c04d": "progression_mod_ranger_t3_health",
            "10a077aa4b67804d": "shield_object_004_phone",
            "229088890799c04d": "w0540",
            "1ed30bff4da004d": "loot_item_mod_expedition_rare_life_link",
            "264165cbf88f804d": "e_small_1w_3turrets",
            "14d75e6ff3a2004d": "progression_mod_drifter_t3_armor",
            "38b928c0c36b804d": "w0090",
            b436d32ac35404d: "loot_item_mod_exquisite_reinforcedshield",
            "26d80425f9ce004d": "e0052",
            "35cd6248c627804d": "e0591",
            "2f606eca02e2404d": "w0525",
            "1f9242d0fe61404d": "w0071",
            "3604d9e5f4d6404d": "spotlight_marksman",
            "22fc20ba419404d": "w0771",
            "34d9d2453ef5804d": "launch_object_001_ashtray",
            "13cf9dcd6aeb804d": "w0425",
            "3f2342ff31a404d": "wave_3moldwalkers_1ranger",
            "2c3b267fc8a1804d": "e0204",
            "34938189abc0404d": "e0369",
            "3c4190233583404d": "w0378",
            "183e7cdc3ac0404d": "e0280",
            "1a97a3cf04a9404d": "w0113",
            e3aee25932d404d: "w0218",
            "28ad1f40cd53804d": "loot_item_mod_dlc1_exquisite_inner_peace",
            "368ea91bcabf404d": "w0753",
            "3cb2a8e85e95404d": "e0164",
            "177174616aa9004d": "w0491",
            "255d15abaf7bc04d": "e0022",
            "2ae88fbfb30804d": "e0378",
            "38e21f7cb4d0c04d": "e0027",
            "380d0918e729c04d": "e0596",
            a984510db62404d: "w0078",
            "787e86455f8c04d": "e0454",
            cc509faa173004d: "w0647",
            "279b4b385c93804d": "loot_item_mod_rare_controlledfire",
            "9ec5a10c937004d": "e_medium_4w_mostlyrangers",
            "1e4352a38e2d404d": "w0436",
            b222fd7c67b804d: "p7_ai_launch_drifter_000",
            "338d6ad9fed8c04d": "loot_item_recipe_daily_vendor_weapon_mod_set1",
            "10dd182a936d004d": "e_large_3w_marksmenrangersenraged",
            a8523eee271004d: "w0146",
            "313e9b7dd30004d": "e0239",
            "740b3fea8ab004d": "loot_item_mod_common_launcher",
            "1d3266e94fa8c04d": "w0166",
            "2f36e33bc027404d": "progression_mod_ranger_t3_miniboss_health",
            "1cc9db387f0f004d": "w0513",
            "1393c73d39c7c04d": "loot_item_mod_dlc1_exquisite_mugging",
            "37d2dd36e4ae404d": "wave_3rangers_2armoredguards",
            "27676fb35cb2404d": "w0156",
            "2b8550e52b69404d": "e0642",
            "199cdfab6202004d": "expedition_t3_mod_enemy_increased_accuracy",
            "134d3ecb5ba8004d": "pointlight_muzzleflash_spin",
            "6976db6ffb5804d": "e0718",
            "15f8639739c3404d": "w0653",
            "3aff92e03272404d": "w0695",
            "2e4af7087ab2404d": "e_small_2w_moldwalkers_3_2",
            "155006ebe3ec404d": "wave_2guards",
            ee4dc505ab804d: "loot_item_mod_dlc1_exquisite_inner_peace",
            d6519fddf47004d: "w0681",
            "371121fca3d3004d": "p7_ai_marksman_000",
            "3176f653e01cc04d": "w0178",
            "1cc62549a787804d": "e0513",
            "5faff638e62004d": "expedition_experimental_headshots_only",
            "15f4105b9617004d": "enemy_shield_chunk",
            "656df6fb59d404d": "w0759",
            "2360b56db89c004d": "e0262",
            "558111c37bd804d": "loot_item_mod_exquisite_specific_pellet_scatter",
            "1bfb1571c35dc04d": "p7_ai_character_000",
            "1d879aca9133c04d": "e0530",
            "4faa1b2baf6404d": "wave_e02w01_3guard",
            "3c2ac0185250c04d": "w0399",
            "7f2988ef57d404d": "w0392",
            "586ebcbc93f804d": "w0174",
            "2108a072b280404d": "e0067",
            "37abe97fc71cc04d": "p7_projectile_rocket",
            "37572843a98c404d": "expedition_t2_mod_enemy_power_resistance",
            "36cdfcbbf742c04d": "loot_item_mod_dlc1_exquisite_snap_reload",
            "37515f8c4af0804d": "e0653",
            a1fcbfc27ea804d: "wave_1drifter_4guards",
            "2942e5924b56004d": "wave_5rangers",
            "11f0f88df65e804d": "loot_item_mod_dlc1_exquisite_pink_mist",
            "114b9d4afe32004d": "loot_item_mod_legendary_improvedphysique",
            "27283e0d8fac804d": "wave_1marksman_1ranger",
            "1c721748404b404d": "player_camera_000",
            "2ab6f6d637bfc04d": "w0298",
            "1cdbc4a9ee49004d": "loot_item_mod_dlc1_exquisite_masters_strike",
            "3ea64dd1272d004d": "e0659",
            "1dd4ca49a92e804d": "progression_mod_knight_miniboss_health",
            "3ad577983f80404d": "w0721",
            "1c8dbc37b530804d": "w0806",
            "23870fed4eaec04d": "loot_item_resource_etheric_tissue",
            b67555ee035804d: "e0251",
            "268ffa9a09ae804d": "e0298",
            "2ca62d2f3f80804d": "e0440",
            "23de1db55c70004d": "w0556",
            "22b6775f444ac04d": "w0385",
            "3d8f106fb659c04d": "e0389",
            "217fba01f78b804d": "shield_object_004_phone",
            "1b61ace7c2fd804d": "pointlight_muzzleflash_player",
            "32483d01486fc04d": "e0175",
            "2787db6ef0b5404d": "e0674",
            "36e2e9339a33004d": "e0375",
            "44e10f98a34804d": "w0042",
            "10b141f5438e804d": "w0403",
            "3c3b1ea34c07404d": "p7_projectile_bouncegrenade",
            "13fedb84e4a2c04d": "e0288",
            "1d7f1dbfd95bc04d": "p7_weapon_player_rocketlauncher",
            "2795d7eccfd6004d": "w0250",
            "254f45a6343cc04d": "w0531",
            "783435e73d6004d": "w0065",
            "18e73edd46c3404d": "e0512",
            d2c4d08af1b004d: "e0448",
            "19db2164ff06804d": "wave_1drifter_3enraged_2guard",
            "2adb2dc979bc404d": "loot_item_mod_rare_specific_booster",
            "12889cfe2f7a004d": "p7_projectile_stickygrenade",
            "1dae32a45905804d": "e_large_4w_2tempests",
            "1ff2a14c26404d": "w0216",
            "7fe29ae761f404d": "e0231",
            f4d06826577c04d: "p7_ai_character_000",
            "33df8ae07d75004d": "wave_1drifter",
            "37419bd03138c04d": "upgrade_shield_strength_2",
            f7f4a1b54d4804d: "w0741",
            "1cdacb9ffd23804d": "w_s020_e2_w1",
            "3831ef7e83a2004d": "e0307",
            "503312691e6804d": "progression_mod_tempest_t1_health",
            "3c74e4f88f58804d": "w0617",
            "1f33f06f27ad804d": "e0728",
            ff829676a7404d: "wave_1tempest_4enraged",
            "87e18435606804d": "e0260",
            "32d49e7458e2404d": "e0151",
            c3fe9b22db4004d: "loot_playermod_common",
            "26c9c7e0c1d1804d": "muzzleflash_default",
            "2bd885a9260b804d": "e0191",
            "2779e32fac15804d": "e0723",
            "3d7807fba7fb804d": "e0685",
            "273279e8c5e004d": "progression_mod_tempest_t1_miniboss_shield",
            "13095e281e9f404d": "e0254",
            "139f69f5dde6804d": "upgrade_melee_dmg_5",
            "362258bc6119804d": "e0446",
            "30fcdf46f953804d": "e_small_4w_rangersenragedarmored",
            "11e41e500683004d": "e0337",
            "20cda34f49a7c04d": "loot_item_mod_uncommon_leafonthewind",
            "989f8721ca4804d": "w0327",
            "21ba48213378404d": "e0069",
            "26bd8c0c01a7804d": "wave_1drifter_4rangers",
            "2f89afe4e31fc04d": "e0233",
            "32a39eb6f0c004d": "w0418",
            "89a399f1827c04d": "e0302",
            "2b919356c29404d": "e0609",
            "298f5af476de004d": "e0386",
            "7bcb5ef0bf4004d": "e_large_3w_driftersarmoredenraged",
            "367e44ac83a4404d": "e0483",
            d20691c25c6404d: "w0427",
            "184e73fc7021404d": "e_small_3w_rangersenragedarmored",
            "18f8cc56c8f6c04d": "loot_item_mod_exquisite_specific_pellet_count",
            "8b5c542da34804d": "e0502",
            "1e444f1e81dc004d": "progression_mod_knight_miniboss_health",
            "2482ff03f491404d": "p7_ai_drifter_000",
            "3ef4c226e297404d": "p7_weapon_player_smg",
            "84f470b87d6c04d": "wave_2marksmen_2enraged",
            "3ca7f2638d31404d": "e0255",
            "2a423f9caaa2404d": "loot_item_mod_exquisite_controlledfire",
            "13545d964c77804d": "p7_ai_character_000",
            "818155cadfd404d": "e0416",
            "2848fbdf80ff004d": "expedition_experimental_only_kill_reloads",
            "33a111b4b1ca404d": "upgrade_resource_amt_1",
            "2ebded53af8c804d": "e0632",
            "3e08046a5d28004d": "loot_item_mod_dlc1_exquisite_hazard_pay",
            "15aace441fb3804d": "loot_item_mod_rare_specific_gyroscope",
            "1f1a7d23cd10804d": "w0650",
            "2793f4a8e00d004d": "e0034",
            "3b75c3bc6c4f004d": "loot_item_resource_aluminium_ingot",
            "1ea3895710ab004d": "loot_item_resource_uncommon_threshold_remnant",
            cbc869a33e6004d: "w_s020_e1_w1",
            "7bf61a13916c04d": "progression_mod_guard_t1_armor",
            "499c8aa5906404d": "progression_mod_knight_miniboss_health",
            "8c7af4794f1804d": "loot_item_mod_expedition_rare_bullet_collector",
            cb15df447f9404d: "e0577",
            "1533f191b50c004d": "progression_mod_marksman_t1_health",
            "3fc5657946bac04d": "w0247",
            "20bf7965723b404d": "w0383",
            "279303dec16f004d": "e0406",
            "32bfc6ca5593404d": "w0714",
            "1efdb379c9aa404d": "e0399",
            "1934a452ddad404d": "shield_object_006_concrete_chunk",
            "30aacf87b992004d": "p7_ai_character_000",
            "294f1a70c100004d": "e0458",
            a8fcea7f02f004d: "wave_2rangers",
            "17afedb94813c04d": "w0031",
            "22314d49d9b4004d": "w0263",
            "1d0d0df86a0a804d": "loot_item_mod_exquisite_controlledfire",
            "1f72bc72656d804d": "progression_mod_ranger_t2_health",
            "1c8f14216b5bc04d": "w0006",
            "3715c6284349804d": "loot_item_mod_expedition_exquisite_gift_of_charon",
            "5682e4d8ca5404d": "e0422"
        }
          , ve = Object(pe["a"])({}, ge, {}, he, {}, we)
          , ye = {
            components: {
                Intro: w,
                SaveTransfer: me
            },
            data: function() {
                return {
                    saveData: null,
                    saveFile: null,
                    revertConfirmDialogShown: !1,
                    showModal: !1,
                    modalTitle: "Error",
                    modalText: "出现错误.",
                    inventoryAllowIDChanges: !1,
                    inventoryEditDialog: !1,
                    inventoryEditItemIndex: -1,
                    inventoryEditItemData: {
                        name: "",
                        persistentId: 0n,
                        gid: 0n,
                        parameter: 0,
                        quantity: 0
                    },
                    inventorySearch: "",
                    inventoryHeaders: [{
                        text: "PID",
                        value: "persistentId"
                    }, {
                        text: "项目",
                        value: "itemName"
                    }, {
                        text: "修饰符",
                        value: "parameter"
                    }, {
                        text: "数量",
                        value: "quantity"
                    }, {
                        text: "操作",
                        value: "actions",
                        sortable: !1
                    }],
                    activePersistingItemHeaders: [{
                        text: "GID",
                        value: "gidItem"
                    }, {
                        text: "项目",
                        value: "itemName"
                    }],
                    outfitHeaders: [{
                        text: "ID",
                        value: "outfitIdHex"
                    }, {
                        text: "名字",
                        value: "outfitName"
                    }, {
                        text: "已解锁",
                        value: "unlocked"
                    }]
                }
            },
            methods: {
                fileSelected: function(e) {
                    var d = this;
                    null != e && (console.log("File selection received"),
                    this.saveFile = e,
                    Q.parseFile(e).then((function(e) {
                        console.log("File parse finished."),
                        console.log("Version data: ", e.versionData.versions);
                        var a = !0
                          , t = "";
                        for (var o in e.versionData.versions) {
                            var c = e.versionData.versions[o]
                              , _ = e.versionData.supportedVersions[o];
                            t += "\n".concat(o, ": 支持的版本: ").concat(_, ", 当前版本: ").concat(c),
                            c > _ && (a = !1,
                                console.warn("".concat(o, ": version ").concat(c, " 比支持的版本更新 ").concat(_)))
                        }
                        if (!a) {
                            var i = "此保存文件的格式比编辑器官方支持的格式更新.\n如果您选择继续，并非所有功能都可以工作. 请谨慎使用!\n\n版本数据:";
                            i += t,
                                d.displayError("保存版本警告", i)
                        }
                        d.setSaveData(e)
                    }
                    )).catch((function(e) {
                        console.error("文件分析过程中出错.", e),
                            d.displayError("文件加载错误", e)
                    }
                    )))
                },
                setSaveData: function(e) {
                    this.saveData = e,
                    window.saveData = e
                },
                displayError: function(e, d) {
                    this.modalTitle = e,
                    this.modalText = "".concat(d),
                    null != d.stack && (this.modalText += "\n\n".concat(d.stack)),
                    this.showModal = !0
                },
                commit: function() {
                    try {
                        var e = this.saveData.commit();
                        try {
                            console.log("提交后重新分析"),
                            this.setSaveData(Q.parseBuffer(e));
                            var d = new Blob([e]);
                            Object(de["saveAs"])(d, "persistent.chunk")
                        } catch (a) {
                            console.error("重新分析文件时出错.", a),
                                this.displayError("保存验证失败", a)
                        }
                    } catch (a) {
                        console.error("提交文件时出错.", a),
                            this.displayError("文件保存错误", a)
                    }
                },
                revert: function(e) {
                    this.revertConfirmDialogShown = !1,
                    e && (this.setSaveData(Q.parseBuffer(this.saveData.getBuffer())),
                        console.log("还原成功."))
                },
                editInvItem: function(e) {
                    var d = this.inventoryItems.indexOf(e);
                    if (d > -1) {
                        var a = this.saveData.data.inventoryItems.data[d];
                        this.inventoryEditItemIndex = d,
                        this.inventoryEditItemData.name = e.itemName,
                        this.inventoryEditItemData.persistentId = a.persistentId.value,
                        this.inventoryEditItemData.gid = a.gid.value.toString(16),
                        this.inventoryEditItemData.parameter = a.parameter.value,
                        this.inventoryEditItemData.quantity = a.quantity.value,
                        this.inventoryEditDialog = !0
                    }
                },
                saveInvItemChanges: function() {
                    if (this.inventoryEditItemIndex > -1) {
                        var e = this.saveData.data.inventoryItems.data[this.inventoryEditItemIndex];
                        this.inventoryAllowIDChanges && (e.persistentId.value = BigInt(this.inventoryEditItemData.persistentId),
                        e.gid.value = BigInt("0x" + this.inventoryEditItemData.gid)),
                        e.quantity.value = this.inventoryEditItemData.quantity,
                        e.parameter.value = this.inventoryEditItemData.parameter,
                        this.inventoryEditDialog = !1,
                        this.inventoryEditItemIndex = -1,
                            console.log("所做的更改.")
                    } else
                        console.error("无效的项目索引，无法保存更改")
                },
                deleteInvItem: function(e) {
                    console.log("请求删除库存项目:", e);
                    var d = this.saveData.data.inventoryItems.data.findIndex((function(d) {
                        return d.persistentId.value === e.persistentId
                    }
                    ));
                    d > -1 ? confirm("是否确实要删除此项目?") && (this.saveData.data.inventoryItems.remove(d),
                        console.log("已删除idx ".concat(d, " 来自库存."))) : console.warn("删除库存项目失败", e)
                },
                setOutfitUnlockState: function(e, d) {
                    var a = this.saveData.data.outfits.data.find((function(d) {
                        return d.outfitId.value === e.outfitId
                    }
                    ));
                    if (null != a) {
                        if (!d && !confirm("你确定要去除这套装备吗?"))
                            return;
                        a.eStatus.value = d ? 1 : 0
                    } else
                        console.warn("无法更改装备的解锁状态", e)
                }
            },
            computed: {
                inventoryItems: function() {
                    var e = this
                      , d = this.saveData.data.inventoryItems.data.filter((function(d, a) {
                        return !e.saveData.data.inventoryItems.modifications.remove.includes(a)
                    }
                    ));
                    return d.map((function(e) {
                        return {
                            persistentId: e.persistentId.value,
                            gid: e.gid.value.toString(16),
                            itemName: ue.get(e.gid.value),
                            parameter: e.parameter.value,
                            quantity: e.quantity.value
                        }
                    }
                    ))
                },
                inventoryActivePersistingItems: function() {
                    return this.saveData.data.inventoryActivePersistingItems.data.map((function(e) {
                        return {
                            gidItem: e.gidItem.value.toString(16),
                            itemName: ue.get(e.gidItem.value)
                        }
                    }
                    ))
                },
                outfits: function() {
                    var e = this.saveData.data.outfits.data.map((function(e) {
                        return {
                            outfitId: e.outfitId.value,
                            outfitIdHex: e.outfitId.value.toString(16).toUpperCase(),
                            outfitName: ae.get(e.outfitId.value),
                            unlocked: 1 == e.eStatus.value
                        }
                    }
                    ));
                    return e = e.filter((function(e) {
                        return !ae.isRestricted(e.outfitId) || e.unlocked
                    }
                    )),
                    e
                },
                shouldIncludeCounter: function() {
                    return "file:" !== window.location.protocol
                }
            }
        }
          , xe = ye
          , ke = (a("034f"),
        a("7496"))
          , Me = a("ac7c")
          , Se = a("a523")
          , De = a("a75b")
          , Ee = a("8fea")
          , Pe = a("132d")
          , Re = a("9e88")
          , Ce = a("71a3")
          , je = a("c671")
          , Oe = a("fe57")
          , We = a("8654")
          , qe = a("3a2f")
          , Ie = Object(s["a"])(xe, o, c, !1, null, null, null)
          , Le = Ie.exports;
        l()(Ie, {
            VApp: ke["a"],
            VBtn: ie["a"],
            VCard: b["a"],
            VCardActions: m["a"],
            VCardText: m["b"],
            VCardTitle: m["c"],
            VCheckbox: Me["a"],
            VCol: re["a"],
            VContainer: Se["a"],
            VContent: De["a"],
            VDataTable: Ee["a"],
            VDialog: ne["a"],
            VFileInput: p["a"],
            VIcon: Pe["a"],
            VRow: se["a"],
            VSimpleCheckbox: Re["a"],
            VSpacer: fe["a"],
            VTab: Ce["a"],
            VTabItem: je["a"],
            VTabs: Oe["a"],
            VTextField: We["a"],
            VTooltip: qe["a"]
        });
        var Ae = a("f309");
        t["a"].use(Ae["a"]);
        var Te = new Ae["a"]({});
        t["a"].config.productionTip = !1,
        new t["a"]({
            vuetify: Te,
            render: function(e) {
                return e(Le)
            }
        }).$mount("#app")
    },
    "8a23": function(e, d, a) {}
});
