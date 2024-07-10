export default const sidebar_list = [
  {
    "path": "/",
    "component": {
      "name": "Layout",
      "components": {
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-078753dd",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/AppMain.vue",
          "_Ctor": {}
        },
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "Hamburger",
              "props": {
                "isActive": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "_Ctor": {}
            },
            "ErrorLog": {
              "name": "ErrorLog",
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-cf51e862",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/ErrorLog/index.vue",
              "_Ctor": {}
            },
            "Screenfull": {
              "name": "Screenfull",
              "beforeDestroy": [
                null,
                null
              ],
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-29234bee",
              "beforeCreate": [
                null
              ],
              "__file": "src/components/Screenfull/index.vue",
              "_Ctor": {}
            },
            "SizeSelect": {
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/SizeSelect/index.vue",
              "_Ctor": {}
            },
            "Search": {
              "name": "HeaderSearch",
              "computed": {},
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-032bd1f0",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/HeaderSearch/index.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-d16d6306",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Navbar.vue",
          "_Ctor": {}
        },
        "RightPanel": {
          "name": "RightPanel",
          "props": {
            "clickNotClose": {
              "default": false
            },
            "buttonTop": {
              "default": 250
            }
          },
          "computed": {},
          "watch": {},
          "beforeDestroy": [
            null,
            null
          ],
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-1e488bfb",
          "beforeCreate": [
            null
          ],
          "__file": "src/components/RightPanel/index.vue"
        },
        "Settings": {
          "components": {
            "ThemePicker": {
              "computed": {},
              "watch": {
                "defaultTheme": {
                  "immediate": true
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/ThemePicker/index.vue"
            }
          },
          "computed": {
            "fixedHeader": {},
            "tagsView": {},
            "sidebarLogo": {}
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-126b135a",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Settings/index.vue"
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "components": {
                "Item": {
                  "name": "MenuItem",
                  "functional": true,
                  "props": {
                    "icon": {
                      "default": ""
                    },
                    "title": {
                      "default": ""
                    }
                  },
                  "_scopeId": "data-v-31ea41b3",
                  "__file": "src/layout/components/Sidebar/Item.vue",
                  "_Ctor": {}
                },
                "AppLink": {
                  "props": {
                    "to": {
                      "required": true
                    }
                  },
                  "computed": {},
                  "methods": {},
                  "staticRenderFns": [],
                  "_compiled": true,
                  "beforeCreate": [
                    null
                  ],
                  "beforeDestroy": [
                    null
                  ],
                  "__file": "src/layout/components/Sidebar/Link.vue",
                  "_Ctor": {}
                }
              },
              "mixins": [
                {
                  "computed": {},
                  "methods": {}
                }
              ],
              "props": {
                "item": {
                  "required": true
                },
                "isNest": {
                  "default": false
                },
                "basePath": {
                  "default": ""
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/layout/components/Sidebar/SidebarItem.vue",
              "_Ctor": {}
            },
            "Logo": {
              "name": "SidebarLogo",
              "props": {
                "collapse": {
                  "required": true
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-6494804b",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/layout/components/Sidebar/Logo.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null,
            null,
            null,
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Sidebar/index.vue",
          "_Ctor": {},
          "directives": {},
          "filters": {},
          "destroyed": [
            null
          ]
        },
        "TagsView": {
          "components": {
            "ScrollPane": {
              "name": "ScrollPane",
              "computed": {},
              "beforeDestroy": [
                null,
                null
              ],
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-be6b7bae",
              "beforeCreate": [
                null
              ],
              "__file": "src/layout/components/TagsView/ScrollPane.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "watch": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-fac8ca64",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/TagsView/index.vue",
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-13877386",
      "beforeCreate": [
        null
      ],
      "beforeDestroy": [
        null
      ],
      "__file": "src/layout/index.vue",
      "_Ctor": {}
    },
    "redirect": "/dashboard",
    "children": [
      {
        "path": "dashboard",
        "name": "首页统计",
        "meta": {
          "title": "首页统计",
          "icon": "dashboard",
          "affix": true
        }
      }
    ]
  },
  {
    "path": "/redirect",
    "component": {
      "name": "Layout",
      "components": {
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-078753dd",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/AppMain.vue",
          "_Ctor": {}
        },
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "Hamburger",
              "props": {
                "isActive": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "_Ctor": {}
            },
            "ErrorLog": {
              "name": "ErrorLog",
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-cf51e862",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/ErrorLog/index.vue",
              "_Ctor": {}
            },
            "Screenfull": {
              "name": "Screenfull",
              "beforeDestroy": [
                null,
                null
              ],
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-29234bee",
              "beforeCreate": [
                null
              ],
              "__file": "src/components/Screenfull/index.vue",
              "_Ctor": {}
            },
            "SizeSelect": {
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/SizeSelect/index.vue",
              "_Ctor": {}
            },
            "Search": {
              "name": "HeaderSearch",
              "computed": {},
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-032bd1f0",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/HeaderSearch/index.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-d16d6306",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Navbar.vue",
          "_Ctor": {}
        },
        "RightPanel": {
          "name": "RightPanel",
          "props": {
            "clickNotClose": {
              "default": false
            },
            "buttonTop": {
              "default": 250
            }
          },
          "computed": {},
          "watch": {},
          "beforeDestroy": [
            null,
            null
          ],
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-1e488bfb",
          "beforeCreate": [
            null
          ],
          "__file": "src/components/RightPanel/index.vue"
        },
        "Settings": {
          "components": {
            "ThemePicker": {
              "computed": {},
              "watch": {
                "defaultTheme": {
                  "immediate": true
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/ThemePicker/index.vue"
            }
          },
          "computed": {
            "fixedHeader": {},
            "tagsView": {},
            "sidebarLogo": {}
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-126b135a",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Settings/index.vue"
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "components": {
                "Item": {
                  "name": "MenuItem",
                  "functional": true,
                  "props": {
                    "icon": {
                      "default": ""
                    },
                    "title": {
                      "default": ""
                    }
                  },
                  "_scopeId": "data-v-31ea41b3",
                  "__file": "src/layout/components/Sidebar/Item.vue",
                  "_Ctor": {}
                },
                "AppLink": {
                  "props": {
                    "to": {
                      "required": true
                    }
                  },
                  "computed": {},
                  "methods": {},
                  "staticRenderFns": [],
                  "_compiled": true,
                  "beforeCreate": [
                    null
                  ],
                  "beforeDestroy": [
                    null
                  ],
                  "__file": "src/layout/components/Sidebar/Link.vue",
                  "_Ctor": {}
                }
              },
              "mixins": [
                {
                  "computed": {},
                  "methods": {}
                }
              ],
              "props": {
                "item": {
                  "required": true
                },
                "isNest": {
                  "default": false
                },
                "basePath": {
                  "default": ""
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/layout/components/Sidebar/SidebarItem.vue",
              "_Ctor": {}
            },
            "Logo": {
              "name": "SidebarLogo",
              "props": {
                "collapse": {
                  "required": true
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-6494804b",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/layout/components/Sidebar/Logo.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null,
            null,
            null,
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Sidebar/index.vue",
          "_Ctor": {},
          "directives": {},
          "filters": {},
          "destroyed": [
            null
          ]
        },
        "TagsView": {
          "components": {
            "ScrollPane": {
              "name": "ScrollPane",
              "computed": {},
              "beforeDestroy": [
                null,
                null
              ],
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-be6b7bae",
              "beforeCreate": [
                null
              ],
              "__file": "src/layout/components/TagsView/ScrollPane.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "watch": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-fac8ca64",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/TagsView/index.vue",
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-13877386",
      "beforeCreate": [
        null
      ],
      "beforeDestroy": [
        null
      ],
      "__file": "src/layout/index.vue",
      "_Ctor": {}
    },
    "hidden": true,
    "children": [
      {
        "path": "/redirect/:path(.*)"
      }
    ]
  },
  {
    "path": "/login",
    "hidden": true
  },
  {
    "path": "/order",
    "component": {
      "name": "Layout",
      "components": {
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-078753dd",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/AppMain.vue",
          "_Ctor": {}
        },
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "Hamburger",
              "props": {
                "isActive": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "_Ctor": {}
            },
            "ErrorLog": {
              "name": "ErrorLog",
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-cf51e862",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/ErrorLog/index.vue",
              "_Ctor": {}
            },
            "Screenfull": {
              "name": "Screenfull",
              "beforeDestroy": [
                null,
                null
              ],
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-29234bee",
              "beforeCreate": [
                null
              ],
              "__file": "src/components/Screenfull/index.vue",
              "_Ctor": {}
            },
            "SizeSelect": {
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/SizeSelect/index.vue",
              "_Ctor": {}
            },
            "Search": {
              "name": "HeaderSearch",
              "computed": {},
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-032bd1f0",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/HeaderSearch/index.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-d16d6306",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Navbar.vue",
          "_Ctor": {}
        },
        "RightPanel": {
          "name": "RightPanel",
          "props": {
            "clickNotClose": {
              "default": false
            },
            "buttonTop": {
              "default": 250
            }
          },
          "computed": {},
          "watch": {},
          "beforeDestroy": [
            null,
            null
          ],
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-1e488bfb",
          "beforeCreate": [
            null
          ],
          "__file": "src/components/RightPanel/index.vue"
        },
        "Settings": {
          "components": {
            "ThemePicker": {
              "computed": {},
              "watch": {
                "defaultTheme": {
                  "immediate": true
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/ThemePicker/index.vue"
            }
          },
          "computed": {
            "fixedHeader": {},
            "tagsView": {},
            "sidebarLogo": {}
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-126b135a",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Settings/index.vue"
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "components": {
                "Item": {
                  "name": "MenuItem",
                  "functional": true,
                  "props": {
                    "icon": {
                      "default": ""
                    },
                    "title": {
                      "default": ""
                    }
                  },
                  "_scopeId": "data-v-31ea41b3",
                  "__file": "src/layout/components/Sidebar/Item.vue",
                  "_Ctor": {}
                },
                "AppLink": {
                  "props": {
                    "to": {
                      "required": true
                    }
                  },
                  "computed": {},
                  "methods": {},
                  "staticRenderFns": [],
                  "_compiled": true,
                  "beforeCreate": [
                    null
                  ],
                  "beforeDestroy": [
                    null
                  ],
                  "__file": "src/layout/components/Sidebar/Link.vue",
                  "_Ctor": {}
                }
              },
              "mixins": [
                {
                  "computed": {},
                  "methods": {}
                }
              ],
              "props": {
                "item": {
                  "required": true
                },
                "isNest": {
                  "default": false
                },
                "basePath": {
                  "default": ""
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/layout/components/Sidebar/SidebarItem.vue",
              "_Ctor": {}
            },
            "Logo": {
              "name": "SidebarLogo",
              "props": {
                "collapse": {
                  "required": true
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-6494804b",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/layout/components/Sidebar/Logo.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null,
            null,
            null,
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Sidebar/index.vue",
          "_Ctor": {},
          "directives": {},
          "filters": {},
          "destroyed": [
            null
          ]
        },
        "TagsView": {
          "components": {
            "ScrollPane": {
              "name": "ScrollPane",
              "computed": {},
              "beforeDestroy": [
                null,
                null
              ],
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-be6b7bae",
              "beforeCreate": [
                null
              ],
              "__file": "src/layout/components/TagsView/ScrollPane.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "watch": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-fac8ca64",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/TagsView/index.vue",
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-13877386",
      "beforeCreate": [
        null
      ],
      "beforeDestroy": [
        null
      ],
      "__file": "src/layout/index.vue",
      "_Ctor": {}
    },
    "hidden": true,
    "children": [
      {
        "path": "details",
        "name": "订单详情",
        "meta": {
          "title": "订单详情"
        }
      }
    ]
  },
  {
    "path": "/profile",
    "component": {
      "name": "Layout",
      "components": {
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-078753dd",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/AppMain.vue",
          "_Ctor": {}
        },
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "Hamburger",
              "props": {
                "isActive": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "_Ctor": {}
            },
            "ErrorLog": {
              "name": "ErrorLog",
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-cf51e862",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/ErrorLog/index.vue",
              "_Ctor": {}
            },
            "Screenfull": {
              "name": "Screenfull",
              "beforeDestroy": [
                null,
                null
              ],
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-29234bee",
              "beforeCreate": [
                null
              ],
              "__file": "src/components/Screenfull/index.vue",
              "_Ctor": {}
            },
            "SizeSelect": {
              "computed": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/SizeSelect/index.vue",
              "_Ctor": {}
            },
            "Search": {
              "name": "HeaderSearch",
              "computed": {},
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-032bd1f0",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/HeaderSearch/index.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-d16d6306",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Navbar.vue",
          "_Ctor": {}
        },
        "RightPanel": {
          "name": "RightPanel",
          "props": {
            "clickNotClose": {
              "default": false
            },
            "buttonTop": {
              "default": 250
            }
          },
          "computed": {},
          "watch": {},
          "beforeDestroy": [
            null,
            null
          ],
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-1e488bfb",
          "beforeCreate": [
            null
          ],
          "__file": "src/components/RightPanel/index.vue"
        },
        "Settings": {
          "components": {
            "ThemePicker": {
              "computed": {},
              "watch": {
                "defaultTheme": {
                  "immediate": true
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/components/ThemePicker/index.vue"
            }
          },
          "computed": {
            "fixedHeader": {},
            "tagsView": {},
            "sidebarLogo": {}
          },
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-126b135a",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Settings/index.vue"
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "components": {
                "Item": {
                  "name": "MenuItem",
                  "functional": true,
                  "props": {
                    "icon": {
                      "default": ""
                    },
                    "title": {
                      "default": ""
                    }
                  },
                  "_scopeId": "data-v-31ea41b3",
                  "__file": "src/layout/components/Sidebar/Item.vue",
                  "_Ctor": {}
                },
                "AppLink": {
                  "props": {
                    "to": {
                      "required": true
                    }
                  },
                  "computed": {},
                  "methods": {},
                  "staticRenderFns": [],
                  "_compiled": true,
                  "beforeCreate": [
                    null
                  ],
                  "beforeDestroy": [
                    null
                  ],
                  "__file": "src/layout/components/Sidebar/Link.vue",
                  "_Ctor": {}
                }
              },
              "mixins": [
                {
                  "computed": {},
                  "methods": {}
                }
              ],
              "props": {
                "item": {
                  "required": true
                },
                "isNest": {
                  "default": false
                },
                "basePath": {
                  "default": ""
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/layout/components/Sidebar/SidebarItem.vue",
              "_Ctor": {}
            },
            "Logo": {
              "name": "SidebarLogo",
              "props": {
                "collapse": {
                  "required": true
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-6494804b",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "__file": "src/layout/components/Sidebar/Logo.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "beforeCreate": [
            null,
            null,
            null,
            null,
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/Sidebar/index.vue",
          "_Ctor": {},
          "directives": {},
          "filters": {},
          "destroyed": [
            null
          ]
        },
        "TagsView": {
          "components": {
            "ScrollPane": {
              "name": "ScrollPane",
              "computed": {},
              "beforeDestroy": [
                null,
                null
              ],
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-be6b7bae",
              "beforeCreate": [
                null
              ],
              "__file": "src/layout/components/TagsView/ScrollPane.vue",
              "_Ctor": {}
            }
          },
          "computed": {},
          "watch": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-fac8ca64",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "__file": "src/layout/components/TagsView/index.vue",
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "methods": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-13877386",
      "beforeCreate": [
        null
      ],
      "beforeDestroy": [
        null
      ],
      "__file": "src/layout/index.vue",
      "_Ctor": {}
    },
    "redirect": "/profile/index",
    "hidden": true,
    "children": [
      {
        "path": "index",
        "name": "个人信息",
        "meta": {
          "title": "个人信息",
          "icon": "user",
          "noCache": true
        }
      }
    ]
  },
  {
    "path": "/permissions",
    "name": "permissions_permission",
    "redirect": "/permissions/users",
    "meta": {
      "title": "权限管理",
      "icon": "el-icon-cpu",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/permissions/users",
        "name": "permissions_user",
        "meta": {
          "title": "用户管理",
          "icon": "el-icon-user"
        },
        "hidden": false
      },
      {
        "path": "/permissions/roles",
        "name": "permissions_role",
        "meta": {
          "title": "角色管理",
          "icon": "el-icon-s-custom"
        },
        "hidden": false
      },
      {
        "path": "/permissions/rules",
        "name": "permissions_permission",
        "meta": {
          "title": "菜单管理",
          "icon": "el-icon-collection-tag"
        },
        "hidden": false
      },
      {
        "path": "/permissions/departments",
        "name": "permissions_departments",
        "meta": {
          "title": "部门管理",
          "icon": "el-icon-monitor"
        },
        "hidden": false
      },
      {
        "path": "/permissions/jobs",
        "name": "permissions_job",
        "meta": {
          "title": "岗位管理",
          "icon": "el-icon-setting"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/cmsOrder",
    "name": "cms_cms",
    "meta": {
      "title": "订单管理",
      "icon": "el-icon-s-order",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/systemOrderList",
        "name": "cms_order",
        "meta": {
          "title": "系统订单",
          "icon": "el-icon-s-tools"
        },
        "hidden": false
      },
      {
        "path": "/waitingOrderList",
        "name": "cms_order",
        "meta": {
          "title": "待接单订单",
          "icon": "el-icon-s-order"
        },
        "hidden": false
      },
      {
        "path": "/reviewOrderList",
        "name": "cms_order",
        "meta": {
          "title": "待审核订单",
          "icon": "el-icon-document-copy"
        },
        "hidden": false
      },
      {
        "path": "/auditedOrderList",
        "name": "cms_order",
        "meta": {
          "title": "已审核订单",
          "icon": "el-icon-s-order"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/cmsBusiness",
    "name": "cms_cms",
    "meta": {
      "title": "业务管理",
      "icon": "el-icon-s-marketing",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/cmsHuozhu",
        "name": "cms_users",
        "meta": {
          "title": "货主管理",
          "icon": "el-icon-user-solid"
        },
        "hidden": false
      },
      {
        "path": "/cmsHuozhuSecure",
        "name": "cms_HzContract",
        "meta": {
          "title": "货主解约",
          "icon": "el-icon-user-solid"
        },
        "hidden": false
      },
      {
        "path": "/messagecode",
        "name": "cms_cms",
        "meta": {
          "title": "短信管理",
          "icon": "el-icon-s-promotion"
        },
        "hidden": false
      },
      {
        "path": "/cmsCarFix",
        "name": "cms_carFixLog",
        "meta": {
          "title": "车辆维修记录",
          "icon": "el-icon-warning"
        },
        "hidden": false
      },
      {
        "path": "/cmsDriver",
        "name": "cms_driver",
        "meta": {
          "title": "司机管理",
          "icon": "el-icon-s-custom"
        },
        "hidden": false
      },
      {
        "path": "/cmsCar",
        "name": "cms_car",
        "meta": {
          "title": "车辆管理",
          "icon": "el-icon-odometer"
        },
        "hidden": false
      },
      {
        "path": "/cmsFleet",
        "name": "cms_fleet",
        "meta": {
          "title": "车队管理",
          "icon": "el-icon-truck"
        },
        "hidden": false
      },
      {
        "path": "/cmsPowerOrderNew",
        "name": "cms_order",
        "meta": {
          "title": "新电厂订单",
          "icon": "el-icon-s-home"
        },
        "hidden": false
      },
      {
        "path": "/cmsPowerPlant",
        "name": "cms_powerPlat",
        "meta": {
          "title": "电厂管理",
          "icon": "el-icon-s-claim"
        },
        "hidden": false
      },
      {
        "path": "/cmsRecharge",
        "name": "cms_recharge",
        "meta": {
          "title": "充值管理",
          "icon": "el-icon-s-management"
        },
        "hidden": false
      },
      {
        "path": "/cmsOrderList",
        "name": "cms_order",
        "meta": {
          "title": "订单管理",
          "icon": "el-icon-c-scale-to-original"
        },
        "hidden": false
      },
      {
        "path": "/cmsAdress",
        "name": "cms_hzAddress",
        "meta": {
          "title": "地址管理",
          "icon": "el-icon-office-building"
        },
        "hidden": false
      },
      {
        "path": "/cmsReimbursementType",
        "name": "cms_reimbursementType",
        "meta": {
          "title": "报销类型管理",
          "icon": "el-icon-s-flag"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/cmsApply",
    "name": "cms_cms",
    "meta": {
      "title": "应用管理",
      "icon": "el-icon-menu",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/feedfback",
        "name": "cms_feedfback",
        "meta": {
          "title": "意见反馈",
          "icon": "el-icon-s-comment"
        },
        "hidden": false
      },
      {
        "path": "/cmsMessage",
        "name": "cms_announce",
        "meta": {
          "title": "消息管理",
          "icon": "el-icon-s-order"
        },
        "hidden": false
      },
      {
        "path": "/cmsAnnounceTemplate",
        "name": "cms_announceTemplate",
        "meta": {
          "title": "消息模板",
          "icon": "el-icon-message-solid"
        },
        "hidden": false
      },
      {
        "path": "/cmsTemplate",
        "name": "cms_templateManager",
        "meta": {
          "title": "模板管理",
          "icon": "el-icon-notebook-2"
        },
        "hidden": false
      },
      {
        "path": "/cmsContract",
        "name": "cms_contract",
        "meta": {
          "title": "合同管理",
          "icon": "el-icon-takeaway-box"
        },
        "hidden": false
      },
      {
        "path": "/cmsNotice",
        "name": "cms_announce",
        "meta": {
          "title": "公告管理",
          "icon": "el-icon-chat-dot-square"
        },
        "hidden": false
      },
      {
        "path": "/cmsGift",
        "name": "cms_gift",
        "meta": {
          "title": "礼包管理",
          "icon": "el-icon-present"
        },
        "hidden": false
      },
      {
        "path": "/cmsAgreement",
        "name": "cms_agreement",
        "meta": {
          "title": "协议管理",
          "icon": "el-icon-money"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/cmsPlat",
    "name": "cms_cms",
    "meta": {
      "title": "平台管理",
      "icon": "el-icon-box",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/cmsPriceWeightSon/:id",
        "name": "cms_priceConfigData",
        "meta": {
          "title": "重量区间列表",
          "icon": ""
        },
        "hidden": true
      },
      {
        "path": "cmsPriceWeight",
        "name": "cms_priceConfig",
        "meta": {
          "title": "重量管理",
          "icon": "el-icon-s-operation"
        },
        "hidden": false
      },
      {
        "path": "/cmsPriceMileageSon/:id?",
        "name": "cms_priceConfigData",
        "meta": {
          "title": "里程区间列表",
          "icon": "el-icon-plus"
        },
        "hidden": true
      },
      {
        "path": "/cmsPriceMileage",
        "name": "cms_priceConfig",
        "meta": {
          "title": "里程管理",
          "icon": "el-icon-s-operation"
        },
        "hidden": false
      },
      {
        "path": "/cmsClasses",
        "name": "cms_classes",
        "meta": {
          "title": "品类管理",
          "icon": "el-icon-help"
        },
        "hidden": false
      },
      {
        "path": "/cmsLimitPrice",
        "name": "cms_limitPrice",
        "meta": {
          "title": "品类限时特价",
          "icon": "el-icon-coffee-cup"
        },
        "hidden": false
      },
      {
        "path": "/cmsArea",
        "name": "cms_area",
        "meta": {
          "title": "区域管理",
          "icon": "el-icon-place"
        },
        "hidden": false
      },
      {
        "path": "/cmsCarType",
        "name": "cms_carType",
        "meta": {
          "title": "车型管理",
          "icon": "el-icon-truck"
        },
        "hidden": false
      },
      {
        "path": "/cmsSite",
        "name": "cms_site",
        "meta": {
          "title": "站点管理",
          "icon": "el-icon-wallet"
        },
        "hidden": false
      },
      {
        "path": "/cmsPriceStandard",
        "name": "cms_priceStandard",
        "meta": {
          "title": "收费标准管理",
          "icon": "el-icon-s-operation"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/cmsFinance",
    "name": "cms_cms",
    "meta": {
      "title": "财务管理",
      "icon": "el-icon-s-data",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/cmsReimbursement",
        "name": "cms_reimbursement",
        "meta": {
          "title": "报销管理",
          "icon": "el-icon-s-finance"
        },
        "hidden": false
      },
      {
        "path": "/cmsWithdraApply",
        "name": "cms_withdraApply",
        "meta": {
          "title": "提现管理",
          "icon": "el-icon-s-promotion"
        },
        "hidden": false
      },
      {
        "path": "/cmsStaffCommission",
        "name": "cms_staffCommission",
        "meta": {
          "title": "内部提成",
          "icon": "el-icon-money"
        },
        "hidden": false
      },
      {
        "path": "/cmsFlow",
        "name": "cms_flow",
        "meta": {
          "title": "货主流水",
          "icon": "el-icon-s-finance"
        },
        "hidden": false
      },
      {
        "path": "/cmsDriverFlow",
        "name": "cms_flow",
        "meta": {
          "title": "司机流水",
          "icon": "el-icon-document-copy"
        },
        "hidden": false
      },
      {
        "path": "/cmsReceiveState",
        "name": "cms_receiveState",
        "meta": {
          "title": "应收对账单",
          "icon": "el-icon-s-data"
        },
        "hidden": false
      },
      {
        "path": "/cmsPayState",
        "name": "cms_payState",
        "meta": {
          "title": "应付对账单",
          "icon": "el-icon-s-finance"
        },
        "hidden": false
      },
      {
        "path": "/siteFlow",
        "name": "cms_siteFlow",
        "meta": {
          "title": "站点流水",
          "icon": "el-icon-s-finance"
        },
        "hidden": false
      },
      {
        "path": "/cmsPromotion",
        "name": "cms_promotion",
        "meta": {
          "title": "佣金管理",
          "icon": "el-icon-s-ticket"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/sms",
    "name": "sms_sms",
    "meta": {
      "title": "短信管理",
      "icon": "el-icon-s-promotion",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/sms/config",
        "name": "sms_sms",
        "meta": {
          "title": "短信配置",
          "icon": "el-icon-copy-document"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/cmsPlant",
    "name": "cms_/cmsPlant",
    "meta": {
      "title": "电厂管理",
      "icon": "el-icon-video-camera",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/cmsPowerClass",
        "name": "cms_powerClass",
        "meta": {
          "title": "电厂品类",
          "icon": "el-icon-video-camera"
        },
        "hidden": false
      },
      {
        "path": "/cmsPowerOrderList",
        "name": "cms_order",
        "meta": {
          "title": "电厂订单",
          "icon": "el-icon-tickets"
        },
        "hidden": false
      },
      {
        "path": "/cmsPowerSetting",
        "name": "cms_powerPlat",
        "meta": {
          "title": "电厂设置",
          "icon": "el-icon-s-tools"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/system",
    "name": "system_system",
    "redirect": "attactments",
    "meta": {
      "title": "系统管理",
      "icon": "el-icon-s-tools",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/dictionary",
        "name": "system_dictionary",
        "meta": {
          "title": "数据字典",
          "icon": "el-icon-menu"
        },
        "hidden": false
      },
      {
        "path": "/system/attactments",
        "name": "system_attactments",
        "meta": {
          "title": "附件管理",
          "icon": "el-icon-folder-opened"
        },
        "hidden": false
      },
      {
        "path": "/system/config",
        "name": "system_config",
        "meta": {
          "title": "配置管理",
          "icon": "el-icon-setting"
        },
        "hidden": false
      },
      {
        "path": "/system/database",
        "name": "system_dataDictionary",
        "meta": {
          "title": "表结构",
          "icon": "el-icon-copy-document"
        },
        "hidden": false
      },
      {
        "path": "/system/log/login",
        "name": "system_loginLog",
        "meta": {
          "title": "登陆日志",
          "icon": "el-icon-coin"
        },
        "hidden": false
      },
      {
        "path": "/officia/index",
        "name": "cms_webSite",
        "meta": {
          "title": "官网配置",
          "icon": "el-icon-s-tools"
        },
        "hidden": false
      },
      {
        "path": "/system/module",
        "name": "system_module",
        "meta": {
          "title": "模块管理",
          "icon": "el-icon-postcard"
        },
        "hidden": false
      },
      {
        "path": "/system/develop",
        "name": "system_develop",
        "meta": {
          "title": "开发者",
          "icon": "el-icon-rank"
        },
        "hidden": false
      },
      {
        "path": "/sensitive/word",
        "name": "system_sensitiveWord",
        "meta": {
          "title": "敏感词库",
          "icon": "el-icon-folder-delete"
        },
        "hidden": false
      },
      {
        "path": "/system/generate",
        "name": "system_generate",
        "meta": {
          "title": "代码生成",
          "icon": "el-icon-scissors"
        },
        "hidden": false
      },
      {
        "path": "/system/log/operate",
        "name": "system_operateLog",
        "meta": {
          "title": "操作日志",
          "icon": "el-icon-house"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  },
  {
    "path": "/monitor",
    "name": "monitor_monitor",
    "redirect": "/monitor/crontab",
    "meta": {
      "title": "系统监控",
      "icon": "el-icon-view",
      "roles": [
        "admin",
        "1022",
        "power_admin"
      ]
    },
    "hidden": false,
    "children": [
      {
        "path": "/monitor/crontab/log/:crontab_id?",
        "name": "monitor_CrontabLog",
        "meta": {
          "title": "任务日志",
          "icon": "el-icon-guide"
        },
        "hidden": true
      },
      {
        "path": "/monitor/crontab",
        "name": "monitor_crontab",
        "meta": {
          "title": "定时任务",
          "icon": "el-icon-time"
        },
        "hidden": false
      }
    ],
    "alwaysShow": true
  }
]