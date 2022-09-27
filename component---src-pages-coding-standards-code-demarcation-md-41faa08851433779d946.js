"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[94073],{50754:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return p}});var a=t(87462),l=t(63366),s=(t(15007),t(64983)),m=t(91515),i=["components"],d={},r={_frontmatter:d},o=m.Z;function p(e){var n=e.components,t=(0,l.Z)(e,i);return(0,s.mdx)(o,(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"code-demarcation-standard"},"Code demarcation standard"),(0,s.mdx)("p",null,"Core developers must follow the code demarcation standard."),(0,s.mdx)("p",null,"This standard is recommended for third-party ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/extension"},"extension")," developers."),(0,s.mdx)("p",null,"Some parts of code might not comply with the standard, but we are working to gradually improve this."),(0,s.mdx)("p",null,"The standard was developed in the scope of our efforts to ensure the following:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Decouple visual (CSS) layer from the functional (JavaScript) layer."),(0,s.mdx)("li",{parentName:"ul"},"Decouple functional (JavaScript) layer from the ",(0,s.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/markup"},"markup")," (HTML)."),(0,s.mdx)("li",{parentName:"ul"},"Reinstate emphasis on using of ",(0,s.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/jquery"},"jQuery")," templates."),(0,s.mdx)("li",{parentName:"ul"},"Reinstate emphasis on decoupling HTML, ",(0,s.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/css"},"CSS")," and JS from ",(0,s.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/php"},"PHP")," classes.")),(0,s.mdx)("p",null,"Use ",(0,s.mdx)("a",{parentName:"p",href:"http://www.ietf.org/rfc/rfc2119.txt"},"RFC 2119"),' to interpret the "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL" keywords.'),(0,s.mdx)("h2",{id:"semantics"},"Semantics"),(0,s.mdx)("h3",{id:"attribute-names-and-values"},"Attribute names and values"),(0,s.mdx)("p",null,"For attribute names and values you must use meaningful unabbreviated lowercase words comprised of Latin characters concatenated with a hyphen (",(0,s.mdx)("inlineCode",{parentName:"p"},"-"),")"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Helps simplify and unify naming conventions that are used to apply visual styles to page elements.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'<section id="information-dialog-tree">\n   <p> ... </p>\n   <p> ... </p>\n</section>\n<a href="#information-dialog-tree">Scroll to text</a>\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'<section id="some_id">\n   <p> ... </p>\n   <p> ... </p>\n</section>\n<section id="some_id">\n   <p> ... </p>\n   <p> ... </p>\n</section>\n<a href="#some_id">Scroll to text</a>\n')),(0,s.mdx)("h3",{id:"attribute-ids"},"Attribute IDs"),(0,s.mdx)("p",null,"Semantic representation may rely on ID attribute"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Forces engineers to think about reusable page components instead of unique singleton components."),(0,s.mdx)("li",{parentName:"ul"},"Reduces long-term maintenance efforts.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable ",(0,s.mdx)("a",{parentName:"strong",href:"https://glossary.magento.com/phtml"},"PHTML")," template:")),(0,s.mdx)("p",null,"The following acceptable example is terse and uses an Accessible Rich Internet Applications (ARIA) approach."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'<ul>\n   <li class="first" type="button" aria-pressed="false" aria-controls="some-id">button 1</li>\n   <li type="button" aria-pressed="false" aria-controls="some-id">button 2</li>\n   <li type="button" aria-pressed="true" aria-controls="some-id">button 3</li>\n</ul>\n<div>\n   <label for="some-id">Enter text</label>\n   <textarea id="some-id"></textarea>\n</div>\n<a href="#some-id">Scroll to text</a>\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable combination of PHTML, JavaScript, and CSS files:")),(0,s.mdx)("p",null,"The following unacceptable example replaces a single PHTML file with a combination of a PHTML, JavaScript, and CSS files."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"PHTML file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},'<ul id="my-special-menu">\n   <li id="buttonId1" class="first" type="button">button 1</li>\n   <li id="buttonId2" type="button">button 2</li>\n   <li id="buttonId3" type="button">button 3</li>\n</ul>\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"JavaScript file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"$('#my-special-menu').on('click','li[id^=\"button\"]', function() { ... })\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"CSS file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-css"},"#my-special-menu { ... }\n#my-special-menu > li { ... }\n")),(0,s.mdx)("h3",{id:"presentation-and-content"},"Presentation and content"),(0,s.mdx)("p",null,"You must follow the separation of presentation and content methodology"),(0,s.mdx)("p",null,"The following list will help you make a distinction between the actual meaning of a document, and how this meaning is presented to its readers:"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Content (Semantics)")," includes:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"logic"),(0,s.mdx)("li",{parentName:"ul"},"information"),(0,s.mdx)("li",{parentName:"ul"},"data"),(0,s.mdx)("li",{parentName:"ul"},"model"),(0,s.mdx)("li",{parentName:"ul"},"outline"),(0,s.mdx)("li",{parentName:"ul"},"message")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Presentation")," includes:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"aesthetic"),(0,s.mdx)("li",{parentName:"ul"},"graphics"),(0,s.mdx)("li",{parentName:"ul"},"design"),(0,s.mdx)("li",{parentName:"ul"},"style"),(0,s.mdx)("li",{parentName:"ul"},"visualization"),(0,s.mdx)("li",{parentName:"ul"},"view")),(0,s.mdx)("h3",{id:"html-markup"},"HTML markup"),(0,s.mdx)("p",null,"You must use semantic HTML markup only, and must not use presentation markup"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},"<p>HTML has been created to <strong>semantically</strong> represent documents.</p>\n<p><strong>Warning:</strong> Following the procedure described below may irreparably damage your equipment.</p>\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},"<p>HTML has been created to <b>semantically</b> represent documents.</p>\n<p><b>Warning:</b> Following the procedure described below may irreparably damage your equipment.</p>\n")),(0,s.mdx)("h2",{id:"code-demarcation"},"Code demarcation"),(0,s.mdx)("h3",{id:"visual-representation"},"Visual representation"),(0,s.mdx)("p",null,"Visual representation must rely only on HTML ",(0,s.mdx)("inlineCode",{parentName:"p"},"class")," attributes, CSS pseudo-classes and pseudo-elements, HTML tags, and form element's type attribute and form elements state attributes (example: ",(0,s.mdx)("inlineCode",{parentName:"p"},"disabled"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"checked"),")."),(0,s.mdx)("p",null,"As the first option, you are required to use ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/html"},"HTML")," class attributes. In case this option is not applicable then it is recommended to use HTML tags and form element's type attribute."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Enforces clean, strict separation between visual and business logic layers."),(0,s.mdx)("li",{parentName:"ul"},"Allows ",(0,s.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/frontend"},"frontend")," and ",(0,s.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/backend"},"backend")," teams to work independently."),(0,s.mdx)("li",{parentName:"ul"},"Allows changing look and feel without affecting business functionality, and vice versa."),(0,s.mdx)("li",{parentName:"ul"},"Enables frontend teams to clean up old styles quickly and easily when refactoring.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable CSS selectors:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-css"},'.notices-wrapper { ... }\n.page-header:after { ... }\n.payment-list:first-child { ... }\n.caution { ... }\n.caution.link { ... }\nform input[type="password"] { ... }\n.control-text:focus { ... }\na:hover { ... }\nnav li._active { ... }\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable CSS selectors:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-css"},'#header { ... }\n[data-action="delete"] { ... }\nform input[name="password"] { ... }\nsection[role="main"] { ... }\n[role="menu"] [role="menuitem"] { ... }\n[role="menu"] [role="menuitem"].active { ... }\n')),(0,s.mdx)("h3",{id:"hard-coded-css-styles"},"Hard-coded CSS styles"),(0,s.mdx)("p",null,"You must not hard-code CSS styles in JavaScript files"),(0,s.mdx)("p",null,"Exception: CSS attributes where values must be calculated beyond the css-topics/LESS code."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Simplifies change of the default look and feel by adding CSS classes to and removing them from elements."),(0,s.mdx)("li",{parentName:"ul"},"Improves style extensibility."),(0,s.mdx)("li",{parentName:"ul"},"Reduces long-term maintenance efforts by containing CSS styles in a single place.'")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable ",(0,s.mdx)("a",{parentName:"strong",href:"https://glossary.magento.com/javascript"},"JavaScript")," ",(0,s.mdx)("a",{parentName:"strong",href:"https://glossary.magento.com/widget"},"widget")," file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"...\n   options: {\n      hOffset: 0,\n      myCustomElement: '[data-container=\"my-custom-element\"]',\n      hiddenClass: '_hidden'\n  }\n...\n   this.element.toggleClass(this.options.hiddenClass);\n...\n   this.options.hOffset = /* calculation based on dimensions of some DOM elements within a widget */\n   this.element.find(this.options.myCustomElement).css({'margin-top', this.options.hOffset + 'px'});\n...\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable JavaScript file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"this.element.on('click', function() {\n   if ($(this).is(':visible')) {\n      $(this).css({ visibility: 'hidden' });\n   } else {\n      $(this).css({ visibility: 'visible' });\n   }\n});\n")),(0,s.mdx)("h3",{id:"inline-css-styles"},"Inline CSS styles"),(0,s.mdx)("p",null,"You must not use inline CSS styles inside HTML tags"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Improves style extensibility allowing engineers to overload styles easier by toggling classes."),(0,s.mdx)("li",{parentName:"ul"},"Enforces clean, strict separation between visual presentation and markup."),(0,s.mdx)("li",{parentName:"ul"},"Enables frontend teams quickly and easily clean up old styles.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable PHTML template:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},'<div class="no-display"> ... </div>\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable PHTML template:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},'<div style="display: none;"> ... </div>\n')),(0,s.mdx)("h2",{id:"business-logic-and-javascript"},"Business logic and JavaScript"),(0,s.mdx)("p",null,"Business logic must rely on only the form, form element name attributes, or data attributes"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Enforces clean, strict separation between visual and business logic layers."),(0,s.mdx)("li",{parentName:"ul"},"Allows frontend and backend teams to work independently."),(0,s.mdx)("li",{parentName:"ul"},"Allows changing business logic without affecting styling and vice versa.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable PHTML template:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},'<div data-action="delete" data-mage-init="{myWidget: [option1: \'string\']}"></div>\n<div data-role="tooltip">More details</div>\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable JavaScript file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"options {\n deleteAction:  '[data-action=\"delete\"]',\n tooltip: '[data-role=\"tooltip\"]'\n}\n...\nthis.element.find(this.options.deleteAction).on( ... );\nthis.element.on('click', this.options.deleteAction , function() { ... });\n...\n// Globally initialized widgets\n$( this.options.tooltip).tooltip();  // Globally for ALL tooltip elements\n...\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable PHTML file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'<div id="my-widget"></div>\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable JavaScript file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"$('#my-widget').doSomething();\n$('.parent').on('click', '.button', function() { ... });\n$('form').validate();\n$('[role=\"menu\"]').navigation();\n")),(0,s.mdx)("h3",{id:"html-helper-classes"},"HTML helper classes"),(0,s.mdx)("p",null,"You must assign HTML helper classes in JavaScript to modify presentation layer"),(0,s.mdx)("p",null,'HTML helper class names added in JavaScript REQUIRE underscore symbol ("_") at the beginning and must be written in lowercase.'),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'<div class="tab-element _active">Content</div>\n<div class="sales-transactions _open">Content</div>\n<div class="billing-agreement _expanded">Content</div>\n<div class="sales-report _hidden">Content</div>\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},'<div class="tab-element active">Content</div>\n<div class="sales-transactions open">Content</div>\n<div class="billing-agreement expanded">Content</div>\n<div class="sales-report hidden">Content</div>\n')),(0,s.mdx)("h3",{id:"dom-elements"},"DOM elements"),(0,s.mdx)("p",null,"You must not select DOM elements based on HTML structure"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Allows frontend teams to modify markup and themes without affecting business logic.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable JavaScript file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"this.element.find('[data-action=\"edit\"]');\nthis.elements.closest('[data-container]');\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable JavaScript file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"this.element.children().children().html('hello world');\nthis.element.parent().find('[data-action=\"edit\"]').data('entity_id');\n")),(0,s.mdx)("h3",{id:"jquery-templates"},"jQuery templates"),(0,s.mdx)("p",null,"You must use jQuery templates to insert recurring markup into DOM structure"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Reinstates emphasis on jQuery templates. For more information, see JavaScript Coding Best Practices."),(0,s.mdx)("li",{parentName:"ul"},"Reduces long-term maintenance efforts by having markup code stored in one place."),(0,s.mdx)("li",{parentName:"ul"},"Simplifies frontend debugging efforts.")),(0,s.mdx)("h2",{id:"phtml-templates-and-php-files"},"PHTML templates and PHP files"),(0,s.mdx)("h3",{id:"hard-coded-css-styles-1"},"Hard-coded CSS styles"),(0,s.mdx)("p",null,"You must not hard-code inline CSS styles in PHP classes"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Reduces long-term maintenance efforts by having styles stored in one place."),(0,s.mdx)("li",{parentName:"ul"},"Simplifies debugging and reduces number of files to be modified."),(0,s.mdx)("li",{parentName:"ul"},"Makes styles more extensible and easier to override when needed.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable PHP file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"...\n$fieldset->addField('new_category_parent', 'text', [\n    'label'    => __('Parent Category'),\n    'title'    => __('Parent Category'),\n    'required' => true,\n    'class'    => 'parent category',\n]);\n...\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable PHP file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"...\n$fieldset->addField('new_category_parent', 'text', [\n    'label'    => __('Parent Category'),\n    'title'    => __('Parent Category'),\n    'required' => true,\n    'style'    => 'border: 1px solid #ccc;',\n]);\n...\n")),(0,s.mdx)("h3",{id:"inline-javascript"},"Inline JavaScript"),(0,s.mdx)("p",null,"You must not hard-code inline JavaScript in PHP classes"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Reduces long term maintenance by having frontend business logic stored in one place."),(0,s.mdx)("li",{parentName:"ul"},"Reduces the number of files to be modified.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable PHP file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"...\npublic function getSelectorOptions()\n{\n    return $selectorOptions;\n}\n...\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable PHTML template:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},'...\n<div data-mage-init="{treeSuggest: [<?php echo $this->getSelectorOptions(); ?>]}"></div>\n...\n')),(0,s.mdx)("p",null,"or"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable PHTML template:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},'...\n<div data-role="treeSuggest"></div>\n<script type="text/x-magento-init">\n{\n    "[data-role=\'treeSuggest\']": {\n        "treeSuggest": <?php echo $this->getSelectorOptions(); ?>\n    }\n}\n<\/script>\n...\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable PHP file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"...\npublic function getAfterElementHtml()\n{\n    return <<<HTML\n<script>\njQuery('#{$htmlId}-suggest').treeSuggest({$selectorOptions});\n<\/script>\n...\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable PHTML template:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"<?php echo $this->getAfterElementHtml(); ?>\n")),(0,s.mdx)("h3",{id:"html-markup-1"},"HTML markup"),(0,s.mdx)("p",null,"You must not hard-code HTML markup (used in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"<body>")," tag) in PHP classes"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Reduces long-term maintenance efforts by having markup stored in one place."),(0,s.mdx)("li",{parentName:"ul"},"Reduces the number of files to be modified.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable PHP file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"...\npublic function getAttributeName($element)\n{\n    return ($element->getExtType() === 'multiple') ? $element->getId() . '_checkbox' : NULL;\n}\n\npublic function getAttributeId($element)\n{\n    return $element->getId();\n}\n...\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Acceptable PHTML template:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"<span class=\"attribute-change-checkbox\">\n<label>\n   <input type=\"checkbox\"\n      <?php echo ($this->getAttributeName($element)) ? ' name=\"' . $this->getAttributeName($element) . '\"' : NULL; ?>\n      data-mage-init=\"{customToggleWidget: [elementSelector: \"input[name='someCustomName']\"]}\" />\n   <?php echo __('Change'); ?>\n</label>\n</span>\n\x3c!-- jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements. --\x3e\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable PHP file:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},'...\npublic function getCheckbox($elementName){\n    $elementNameTag = $this->getAttributeName($elementName) ? \'name="\' . $this->getAttributeName($elementName) . \'"\' : NULL;\n    $tpl = "<input type=\\"checkbox\\" {$elementNameTag} data-mage-init=\\"{customToggleWidget: [elementSelector: \\"input[name=\'someCustomName\']\\"]}\\" />";\n    return $tpl;\n}\n...\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Unacceptable PHTML template:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"<span class=\"attribute-change-checkbox\">\n   <label>\n      <?php echo $this->getCheckbox($element)?>\n      <?php echo __('Change'); ?>\n   </label>\n</span>\n\x3c!-- jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements. --\x3e\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-coding-standards-code-demarcation-md-41faa08851433779d946.js.map