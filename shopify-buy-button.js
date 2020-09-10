let footer = `{{^data.isEmpty}}
<div class="{{data.classes.cart.footer}}" data-element="cart.footer">{{#data.discounts}}
        <div class="{{data.classes.cart.discount}}" data-element="cart.discount"><span
                class="{{data.classes.cart.discountText}}" data-element="cart.discountText"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"
                    class="{{data.classes.cart.discountIcon}}" data-element="cart.discountIcon" aria-hidden="true">
                    <path
                        d="M10.001 2.99856C9.80327 2.99856 9.61002 2.93994 9.44565 2.83011C9.28128 2.72029 9.15317 2.56418 9.07752 2.38155C9.00187 2.19891 8.98207 1.99794 9.02064 1.80405C9.05921 1.61016 9.1544 1.43207 9.29419 1.29228C9.43397 1.1525 9.61207 1.0573 9.80596 1.01874C9.99984 0.980171 10.2008 0.999965 10.3834 1.07562C10.5661 1.15127 10.7222 1.27938 10.832 1.44375C10.9418 1.60812 11.0005 1.80136 11.0005 1.99905C11.0005 2.26414 10.8952 2.51837 10.7077 2.70581C10.5203 2.89326 10.266 2.99856 10.001 2.99856ZM10.001 1.67062e-05H7.0024C6.87086 -0.000743818 6.74046 0.024469 6.61868 0.0742095C6.49691 0.12395 6.38614 0.19724 6.29275 0.289876L0.295655 6.28697C0.201972 6.37989 0.127614 6.49044 0.0768697 6.61224C0.0261256 6.73404 0 6.86468 0 6.99663C0 7.12857 0.0261256 7.25922 0.0768697 7.38102C0.127614 7.50282 0.201972 7.61336 0.295655 7.70628L4.29372 11.7043C4.38664 11.798 4.49718 11.8724 4.61898 11.9231C4.74078 11.9739 4.87143 12 5.00337 12C5.13532 12 5.26596 11.9739 5.38776 11.9231C5.50956 11.8724 5.62011 11.798 5.71303 11.7043C5.90294 11.5044 11.5102 5.89716 11.7101 5.70725C11.8028 5.61386 11.876 5.50309 11.9258 5.38132C11.9755 5.25954 12.0007 5.12914 12 4.99759V1.99905C12 1.46887 11.7894 0.96041 11.4145 0.585519C11.0396 0.210628 10.5311 1.67062e-05 10.001 1.67062e-05Z" />
                </svg> <span class="visuallyhidden">Discount:</span>{{text}} </span> <span
                class="{{data.classes.cart.discountAmount}}" data-element="cart.discountAmount">{{amount}}</span>
        </div>
    {{/data.discounts}}
    <div style="font-weight:bold; margin-bottom:25px;">
        <p class="{{data.classes.cart.subtotalText}}" data-element="cart.total">{{data.text.total}}</p>
        <p class="{{data.classes.cart.subtotal}}" data-element="cart.subtotal">{{data.formattedTotal}}</p>
    </div> 
    <label>
    <input type="checkbox" value="I accept the terms and conditions."
                onclick="if (this.checked == true) { document.getElementById(\'checkoutButton\').disabled=false; } else { document.getElementById(\'checkoutButton\').disabled=true; }">
        <span class="{{data.classes.cart.notice}}">Ik ga akkoord met de <a href="./opleidingsvoorwaarden">algemene- en opleidingsvoorwaarden.</a>*</span>
</label>
    <button class="{{data.classes.cart.button}}" type="button" id="checkoutButton" data-element="cart.button"
        disabled>{{data.text.button}}</button>
</div>
{{/data.isEmpty}}`;

(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
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
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "winc-academy.myshopify.com",
      storefrontAccessToken: "af43b25c12722f2f6704964a5d9cb3f6",
    });
    const result = ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "5313849917598",
        node: document.getElementById("first-cta"),
        moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
        options: {
          product: {
            iframe: false,
            classes: {
              button: "cta-button-new",
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Roboto, sans-serif",
                color: "#1d334a",
                ":hover": {
                  color: "#1d334a",
                  "background-color": "#e6a010",
                },
                "background-color": "#ffb212",
                ":focus": {
                  "background-color": "#e6a010",
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px",
              },
            },
            buttonDestination: "cart",
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Koop nu",
            },
            googleFonts: ["Roboto"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Roboto, sans-serif",
                color: "#1d334a",
                ":hover": {
                  color: "#1d334a",
                  "background-color": "#e6a010",
                },
                "background-color": "#ffb212",
                ":focus": {
                  "background-color": "#e6a010",
                },
                "border-radius": "40px",
                "padding-left": "100px",
                "padding-right": "100px",
              },
            },
            googleFonts: ["Roboto"],
            text: {
              button: "Koop nu",
            },
          },
          cart: {
            contents: {
              title: true,
              lineItems: true,
              footer: true,
              note: false,
              discounts: true,
            },
            templates: {
              footer: footer,
            },
            styles: {
              button: {
                "font-family": "Roboto, sans-serif",
                color: "#1d334a",
                ":hover": {
                  color: "#1d334a",
                  "background-color": "#e6a010",
                },
                "background-color": "#ffb212",
                ":focus": {
                  "background-color": "#e6a010",
                },
                "border-radius": "40px",
              },
            },
            text: {
              total: "Subtotaal",
              button: "Afrekenen",
            },
            popup: false,
            googleFonts: ["Roboto"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Roboto, sans-serif",
                "background-color": "#ffb212",
                ":hover": {
                  "background-color": "#e6a010",
                },
                ":focus": {
                  "background-color": "#e6a010",
                },
              },
              count: {
                color: "#1d334a",
                ":hover": {
                  color: "#1d334a",
                },
              },
              iconPath: {
                fill: "#1d334a",
              },
            },
            googleFonts: ["Roboto"],
          },
        },
      });
    });
  }
})();
