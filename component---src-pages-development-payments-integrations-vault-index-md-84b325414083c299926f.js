"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[86830],{47011:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return c}});var n=a(87462),m=a(63366),i=(a(15007),a(64983)),o=a(91515),r=a(1930),p=["components"],d={},l={_frontmatter:d},s=o.Z;function c(e){var t=e.components,a=(0,m.Z)(e,p);return(0,i.mdx)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(r.default,{mdxType:"Docs"}),(0,i.mdx)("h1",{id:"adding-vault-integration"},"Adding vault integration"),(0,i.mdx)("p",null,"Vault as a ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/payment-method"},"payment method")," provides store customers with ability to use the previously saved credit card information for ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/checkout"},"checkout"),". This information is stored safely on the side of trusted payments gateways (Braintree, PayPal). Not storing the sensitive credit card information is one of the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.pcisecuritystandards.org/"},"PCI compliance")," requirements."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Vault"},"Commerce Vault")," is implemented using the Adobe Commerce ",(0,i.mdx)("a",{parentName:"p",href:"../payment-gateway/index.md"},"payment gateway"),". It is used in the out-of-the-box vault implementation for the Braintree payment method. Third party developers can use it to add vault to their custom payment provider integration."),(0,i.mdx)("p",null,"The following diagram shows a simplified interaction flow between Commerce sales management, vault, payment integration and external payment service provider."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/e9839676092b92055487add900d73317/5530d/vault_interaction_flow1.webp 320w","/commerce-php/static/e9839676092b92055487add900d73317/0c8fb/vault_interaction_flow1.webp 640w","/commerce-php/static/e9839676092b92055487add900d73317/84c6d/vault_interaction_flow1.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/e9839676092b92055487add900d73317/dd4a7/vault_interaction_flow1.png 320w","/commerce-php/static/e9839676092b92055487add900d73317/0f09e/vault_interaction_flow1.png 640w","/commerce-php/static/e9839676092b92055487add900d73317/a27c6/vault_interaction_flow1.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/e9839676092b92055487add900d73317/a27c6/vault_interaction_flow1.png",alt:"Vault Interaction",title:"Vault Interaction",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"The flow is similar to usual Commerce ",(0,i.mdx)("a",{parentName:"p",href:"../payment-gateway/index.md"},"payment gateway interaction flow"),"."),(0,i.mdx)("p",null,"The main difference is that when vault is used, it defines what command is required and when it must be called."),(0,i.mdx)("h2",{id:"adding-vault-general-steps"},"Adding vault: general steps"),(0,i.mdx)("p",null,"Commerce vault implementation provides that vault is available as a separate payment method during order creation (storefront or admin). But technically it is tightly related to the corresponding payment provider integration.\nYou do not need to create a new ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," for vault implementation. All required configuration and entities are added to the module of the payment provider integration."),(0,i.mdx)("p",null,"The topics of this chapter describe how to add the vault functionality to a payment method (the payment method must be implemented using Commerce payment gateway):"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"module-configuration.md"},"Add vault to module dependencies"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"vault-payment-configuration.md"},"Configure vault general parameters"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"vault-di.md"},"Add vault and payment methods entities using dependency injection configuration"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"enabler.md"},"Implement the ability for customers to choose whether to use vault"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"payment-token.md"},"Storing and processing the payment related data"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"token-ui-component-provider.md"},"Adding and using UI_Vault component to place orders on the storefront"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"customer-stored-payments.md"},"Display stored tokens for customer and process their deleting"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"admin-integration.md"},"Using stored tokens to place an order from Admin panel"),"."))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-vault-index-md-84b325414083c299926f.js.map