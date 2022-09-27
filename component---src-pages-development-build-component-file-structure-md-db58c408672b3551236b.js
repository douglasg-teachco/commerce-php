"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[50880],{41495:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return c}});var t=a(87462),i=a(63366),o=(a(15007),a(64983)),l=a(91515),r=a(37259),m=["components"],s={},d={_frontmatter:s},p=l.Z;function c(e){var n=e.components,a=(0,i.Z)(e,m);return(0,o.mdx)(p,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-your-component-file-structure"},"Create your component file structure"),(0,o.mdx)("p",null,"In this section, we go over the different file structures for component types. The Adobe Commerce or Magento Open Source application looks for the files that make up a component ",(0,o.mdx)("em",{parentName:"p"},"including configuration files")," in particular places inside the component file structure. Follow the predefined file structures for the component type you are developing to ensure that it works as expected."),(0,o.mdx)("h2",{id:"root-directory-location"},"Root directory location"),(0,o.mdx)(r.default,{mdxType:"Docs"}),(0,o.mdx)("h2",{id:"module-file-structure"},"Module file structure"),(0,o.mdx)("p",null,"A typical file structure for a ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," can look like the following:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"510px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"312.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/b9212df1bbeb6e81c471570f9e76af34/5530d/pdg-config-file-structure.webp 320w","/commerce-php/static/b9212df1bbeb6e81c471570f9e76af34/a1a7b/pdg-config-file-structure.webp 510w"],sizes:"(max-width: 510px) 100vw, 510px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/b9212df1bbeb6e81c471570f9e76af34/dd4a7/pdg-config-file-structure.png 320w","/commerce-php/static/b9212df1bbeb6e81c471570f9e76af34/1b7d6/pdg-config-file-structure.png 510w"],sizes:"(max-width: 510px) 100vw, 510px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/b9212df1bbeb6e81c471570f9e76af34/1b7d6/pdg-config-file-structure.png",alt:"Module File Structure",title:"Module File Structure",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"common-directories"},"Common directories"),(0,o.mdx)("p",null,"Following are some common module directories:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Block"),": contains ",(0,o.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/php"},"PHP")," view classes as part of Model View Controller(MVC) vertical implementation of module logic."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Controller"),": contains PHP controller classes as part of MVC vertical implementation of module logic."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"etc"),": contains configuration files; in particular, ",(0,o.mdx)("inlineCode",{parentName:"li"},"module.xml"),", which is required."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Model"),": contains PHP model classes as part of MVC vertical implementation of module logic."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Setup"),": contains classes for module database structure and data setup which are invoked when installing or upgrading."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ViewModel"),": contains PHP model classes as part of a model-view-viewmodel (MVVM) implementation. It allows developers to offload features and business logic from block classes into separate classes that are easier to maintain, test, and reuse.")),(0,o.mdx)("h3",{id:"additional-directories"},"Additional directories"),(0,o.mdx)("p",null,"Additional folders can be added for configuration and other ancillary functions for items like ",(0,o.mdx)("a",{parentName:"p",href:"../components/plugins.md"},"plugin-ins"),", localization, and ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout"},"layout")," files."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Api"),": contains any PHP classes exposed to the ",(0,o.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/api"},"API"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Console"),": contains CLI commands. For more info, see ",(0,o.mdx)("a",{parentName:"li",href:"../cli-commands/custom.md"},"Add CLI commands"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Cron"),": contains cron job definitions."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"CustomerData"),": contains section files."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Helper"),": contains aggregated functionality."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"i18n"),": contains localization files."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Observer"),": contains files for executing commands from the listener."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Plugin"),": contains any needed ",(0,o.mdx)("a",{parentName:"li",href:"../components/plugins.md"},"plug-ins"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"UI"),": contains data generation files."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"view"),": contains view files, including static view files, design templates, email templates, and layout files.")),(0,o.mdx)("h2",{id:"theme-file-structure"},"Theme file structure"),(0,o.mdx)("p",null,"A typical ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/theme"},"theme")," file structure can look like the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tree"},"├── composer.json\n├── etc\n│   └── view.xml\n├── i18n\n│   └── en_US.csv\n├── LICENSE_AFL.txt\n├── LICENSE.txt\n├── media\n│   └── preview.jpg\n├── registration.php\n└── web\n    ├── css\n    │   ├── email.less\n    │   ├── print.less\n    │   ├── source\n    │   │   ├── _actions-toolbar.less\n    │   │   ├── _breadcrumbs.less\n    │   │   ├── _buttons.less\n    │   │   ├── components\n    │   │   │   └── _modals_extend.less\n    │   │   ├── _icons.less\n    │   │   ├── _layout.less\n    │   │   ├── _theme.less\n    │   │   ├── _tooltips.less\n    │   │   ├── _typography.less\n    │   │   └── _variables.less\n    │   ├── _styles.less\n    │   ├── styles-l.less\n    │   └── styles-m.less\n    ├── images\n    │   └── logo.svg\n    └── js\n        ├── navigation-menu.js\n        └── theme.js\n")),(0,o.mdx)("h3",{id:"common-directories-1"},"Common directories"),(0,o.mdx)("p",null,"Typical theme directories are:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"etc"),": Contains configuration files such as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml")," file which contains image configurations for all images and thumbnails.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"i18n"),": ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/translations/#m2devgde-xlate-dictionaries"},"Translation dictionaries"),", if any.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"media"),": Theme preview images (screen capture of your theme) can be put in here.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"web"),": Optional directory that contains ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/static-files"},"static files")," organized into the following subdirectories:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"css/source"),": Contains a theme's ",(0,o.mdx)("inlineCode",{parentName:"li"},"less")," configuration files that invoke mixins for global elements from the ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/frontend-core/guide/css/ui-library/"},"UI library"),", and the ",(0,o.mdx)("inlineCode",{parentName:"li"},"theme.less")," file that overrides the default variables values."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"css/source/lib"),": Contains view files that override the ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/frontend-core/guide/css/ui-library/"},"UI library")," files stored in ",(0,o.mdx)("inlineCode",{parentName:"li"},"lib/web/css/source/lib"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"fonts"),": The folder to place the different fonts for your theme."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"images"),": Static images folder."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"js"),": The folder for your JavaScript files.")))),(0,o.mdx)("p",null,"For more details on the theme folder structure, see ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/themes/structure/"},"theme structure"),"."),(0,o.mdx)("h3",{id:"language-package-file-structure"},"Language package file structure"),(0,o.mdx)("p",null,"A typical directory structure for three language packages follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tree"},"├── de_DE\n│   ├── composer.json\n│   ├── language.xml\n│   ├── LICENSE_AFL.txt\n│   ├── LICENSE.txt\n│   └── registration.php\n├── en_US\n│   ├── composer.json\n│   ├── language.xml\n│   ├── LICENSE_AFL.txt\n│   ├── LICENSE.txt\n│   └── registration.php\n├── pt_BR\n│   ├── composer.json\n│   ├── language.xml\n│   ├── LICENSE_AFL.txt\n│   ├── LICENSE.txt\n│   └── registration.php\n")),(0,o.mdx)("p",null,"The only required directory for a language package is the top-level directory. Although not required, we recommend that the directory name match the ",(0,o.mdx)("a",{parentName:"p",href:"http://www.iso.org/iso/home/standards/language_codes.htm"},"ISO")," code to identify the locale."),(0,o.mdx)("p",null,"For more information about language packages, see ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html"},"Translation dictionaries and language packages"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-build-component-file-structure-md-db58c408672b3551236b.js.map