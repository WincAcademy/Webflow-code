/*<![CDATA[*/
(function () {
    console.log("I'm loaded");
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'winc-academy.myshopify.com',
            storefrontAccessToken: 'af43b25c12722f2f6704964a5d9cb3f6',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '{{wf {&quot;path&quot;:&quot;shopify-product-info:product-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}',
                node: document.getElementById('first-cta'),
                moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                options: {
                    "product": {
                        "iframe": false,
                        "classes": {
                            "button": 'cta-button-new',
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "font-family": "Roboto, sans-serif",
                                "color": "#1d334a",
                                ":hover": {
                                    "color": "#1d334a",
                                    "background-color": "#E6A010"
                                },
                                "background-color": "#ffb212",
                                ":focus": {
                                    "background-color": "#E6A010"
                                },
                                "margin": "0px !important",
                                "border-radius": "10vw",
                                "font-weight": "bold",
                                "font-size": "1.25vw",
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": false,
                        },
                        "text": {
                            "button": "{{wf {&quot;path&quot;:&quot;cta-text&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
                        },
                        "googleFonts": [
                            "Roboto"
                        ]
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "font-family": "Roboto, sans-serif",
                                "color": "#1d334a",
                                ":hover": {
                                    "color": "#1d334a",
                                    "background-color": "#e6a010"
                                },
                                "background-color": "#ffb212",
                                ":focus": {
                                    "background-color": "#e6a010"
                                },
                                "border-radius": "40px",
                                "padding-left": "100px",
                                "padding-right": "100px"
                            }
                        },
                        "googleFonts": [
                            "Roboto"
                        ],
                        "text": {
                            "button": "{{wf {&quot;path&quot;:&quot;cta-text&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
                        }
                    },
                    "cart": {
                        "styles": {
                            "button": {
                                "font-family": "Roboto, sans-serif",
                                "color": "#1d334a",
                                ":hover": {
                                    "color": "#1d334a",
                                    "background-color": "#e6a010"
                                },
                                "background-color": "#ffb212",
                                ":focus": {
                                    "background-color": "#e6a010"
                                },
                                "border-radius": "40px"
                            }
                        },
                        "text": {
                            "total": "Subtotaal",
                            "button": "Afrekenen"
                        },
                        "popup": false,
                        "googleFonts": [
                            "Roboto"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "font-family": "Roboto, sans-serif",
                                "background-color": "#ffb212",
                                ":hover": {
                                    "background-color": "#e6a010"
                                },
                                ":focus": {
                                    "background-color": "#e6a010"
                                }
                            },
                            "count": {
                                "color": "#1d334a",
                                ":hover": {
                                    "color": "#1d334a"
                                }
                            },
                            "iconPath": {
                                "fill": "#1d334a"
                            }
                        },
                        "googleFonts": [
                            "Roboto"
                        ]
                    },
                },
            });
        });
    }
})();
/*]]>*/