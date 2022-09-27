"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[76855],{81129:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return o}});var i=t(87462),n=t(63366),l=(t(15007),t(64983)),m=t(91515),d=["components"],r={},p={_frontmatter:r},s=m.Z;function o(e){var a=e.components,t=(0,n.Z)(e,d);return(0,l.mdx)(s,(0,i.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"magento_mediagalleryapi-module"},"Magento_MediaGalleryApi module"),(0,l.mdx)("p",null,"The Magento_MediaGalleryApi module serves as application program interface (API) responsible for storing and managing media gallery asset attributes."),(0,l.mdx)("h2",{id:"installation-details"},"Installation details"),(0,l.mdx)("p",null,"For information about module installation in Magento 2, see ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,l.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,l.mdx)("p",null,"Extension developers can interact with the Magento_MediaGalleryApi module. For more information about the Magento extension mechanism, see ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_MediaGalleryApi module."),(0,l.mdx)("h3",{id:"public-apis"},"Public APIs"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\Data\\AssetInterface")),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"media asset entity data"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\Data\\AssetKeywordsInterface")),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"assets keywords aggregation"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\Data\\AssetKeywordsInterface")),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"media asset keyword entity data"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\CreateDirectoriesByPathsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"create new directories by provided paths"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\DeleteAssetsByPathsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"delete media assets by paths. Removes all the assets which paths start with provided paths"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\DeleteDirectoriesByPathsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"delete folders by provided paths"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\GetAssetsByIdsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"get media gallery assets by id attribute"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\GetAssetsByPathsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"get media gallery assets by paths in media storage"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\GetAssetsKeywordsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"get a media gallery asset keywords related to media gallery asset ids provided"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\IsPathExcludedInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"check if the path is excluded from displaying and processing in the media gallery"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\SaveAssetsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"save media gallery assets to the database"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\SaveAssetsKeywordsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"save keywords related to assets to the database"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\MediaGalleryApi\\Api\\SearchAssetsInterface"),":"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"search media gallery assets")))),(0,l.mdx)("p",null,"For information about a public API in Magento 2, see ",(0,l.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2./extension-dev-guide/api-concepts.html"},"Public interfaces & APIs"),"."),(0,l.mdx)("h2",{id:"additional-information"},"Additional information"),(0,l.mdx)("p",null,"For information about significant changes in patch releases, see ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/release-notes/bk-release-notes.html"},"2.4.x Release information"),"."))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-media-gallery-api-md-e7801cdee59573b9c499.js.map