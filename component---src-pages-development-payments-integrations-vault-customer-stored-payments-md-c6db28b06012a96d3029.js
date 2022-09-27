"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[11774],{64549:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return s}});var a=t(87462),r=t(63366),o=(t(15007),t(64983)),m=t(91515),d=t(1930),p=["components"],i={},c={_frontmatter:i},l=m.Z;function s(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.mdx)(l,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(d.default,{mdxType:"Docs"}),(0,o.mdx)("h1",{id:"display-the-stored-information"},"Display the stored information"),(0,o.mdx)("p",null,"This topic describes how to display stored tokens in the customer account and give customers ability to remove the tokens."),(0,o.mdx)("h2",{id:"token-renderer"},"Token renderer"),(0,o.mdx)("p",null,"To implement the displaying functionality, create a token renderer. Its\nimplementation depends on token type (card or account). But both types of renderers\nimplement the common ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Vault/Block/TokenRendererInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"TokenRendererInterface")),"\nand ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Vault/Block/Customer/IconInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"IconInterface"))," interfaces."),(0,o.mdx)("p",null,"If your vault integration uses card token type, then you need to extend ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Vault/Block/AbstractCardRenderer.php"},"AbstractCardRenderer"),". In other case extend ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Vault/Block/AbstractTokenRenderer.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"AbstractTokenRenderer")),"."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"AbstractCardRenderer")," implements ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Vault/Block/CardRendererInterface.php"},"CardRendererInterface")," and has additional method to get card details."),(0,o.mdx)("p",null,"The simple card renderer implementation might be like following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"class CardRenderer extends AbstractCardRenderer\n{\n    /**\n     * Can render specified token\n     *\n     * @param PaymentTokenInterface $token\n     * @return boolean\n     */\n    public function canRender(PaymentTokenInterface $token)\n    {\n        return $token->getPaymentMethodCode() === ConfigProvider::CODE;\n    }\n\n    /**\n     * @return string\n     */\n    public function getNumberLast4Digits()\n    {\n        return $this->getTokenDetails()['maskedCC'];\n    }\n\n    /**\n     * @return string\n     */\n    public function getExpDate()\n    {\n        return $this->getTokenDetails()['expirationDate'];\n    }\n\n    /**\n     * @return string\n     */\n    public function getIconUrl()\n    {\n        return $this->getIconForType($this->getTokenDetails()['type'])['url'];\n    }\n\n    /**\n     * @return int\n     */\n    public function getIconHeight()\n    {\n        return $this->getIconForType($this->getTokenDetails()['type'])['height'];\n    }\n\n    /**\n     * @return int\n     */\n    public function getIconWidth()\n    {\n        return $this->getIconForType($this->getTokenDetails()['type'])['width'];\n    }\n}\n")),(0,o.mdx)("h2",{id:"layout-and-template"},"Layout and template"),(0,o.mdx)("p",null,"Next, you need to create the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout"},"layout")," to be used for displaying token details. In this layout, specify the previously created token renderer."),(0,o.mdx)("p",null,"Example (",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/view/frontend/layout/vault_cards_listaction.xml"},"vault_cards_listaction.xml"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <body>\n        <referenceContainer name="content">\n            <referenceBlock name="vault.cards.list">\n                <block class="Magento\\Braintree\\Block\\Customer\\CardRenderer" name="braintree.card.renderer" template="Magento_Vault::customer_account/credit_card.phtml"/>\n            </referenceBlock>\n        </referenceContainer>\n    </body>\n</page>\n')),(0,o.mdx)("p",null,"In this example the default ",(0,o.mdx)("inlineCode",{parentName:"p"},"credit_card.phtml")," vault template is used. But you can create and specify a custom template. Add the template in the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/payment-method"},"payment method")," ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-vault-customer-stored-payments-md-c6db28b06012a96d3029.js.map