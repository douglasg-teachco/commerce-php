"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[30822],{97085:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return s},default:function(){return l}});var t=n(87462),r=n(63366),i=(n(15007),n(64983)),o=n(91515),p=["components"],s={},m={_frontmatter:s},d=o.Z;function l(e){var a=e.components,n=(0,r.Z)(e,p);return(0,i.mdx)(d,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"security"},"Security"),(0,i.mdx)("p",null,"Using ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," features that are known to be exploitable or non-secure can lead to remote code execution or weak cryptography.\nAs a developer, you should avoid using features that introduce vulnerabilities in your code."),(0,i.mdx)("h2",{id:"php-functions-to-avoid"},"PHP functions to avoid"),(0,i.mdx)("p",null,"The following is a list of PHP functions that are known to be vulnerable and exploitable.\nAvoid using these functions in your code."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"http://php.net/manual/en/function.eval.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"eval"))," - Using ",(0,i.mdx)("inlineCode",{parentName:"li"},"eval")," is considered bad practice because of its ability to ",(0,i.mdx)("a",{parentName:"li",href:"https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet#Code_Injection"},"execute arbitrary PHP code"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"http://php.net/manual/en/function.serialize.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"serialize")),"/",(0,i.mdx)("a",{parentName:"li",href:"http://php.net/manual/en/function.unserialize.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"unserialize"))," - Attackers can create an exploit for these functions by passing a string with a serialized arbitrary object to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"unserialize")," function to ",(0,i.mdx)("a",{parentName:"li",href:"https://www.owasp.org/index.php/PHP_Object_Injection"},"run arbitrary code"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"http://php.net/manual/en/function.md5.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"md5"))," - The algorithm for this function is known to have ",(0,i.mdx)("a",{parentName:"li",href:"https://www.owasp.org/index.php/Guide_to_Cryptography#Hashes"},"cryptographic weaknesses"),".\nYou should never use this function for hashing passwords or any other sensitive data."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"http://php.net/manual/en/function.srand.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"srand"))," - Using a predetermined number to seed the random number generator results in a ",(0,i.mdx)("a",{parentName:"li",href:"http://programmers.stackexchange.com/questions/76229/predicting-the-output-of-phps-rand"},"predictable sequence of numbers"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"http://php.net/manual/en/function.mt-rand.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"mt_srand"))," - This function is a pseudo-random number generator (PRNG) and is ",(0,i.mdx)("a",{parentName:"li",href:"http://phpsecurity.readthedocs.io/en/latest/Insufficient-Entropy-For-Random-Values.html"},"not cryptographically secure"),".")),(0,i.mdx)("h2",{id:"standard-php-library-classes-to-avoid"},"Standard PHP library classes to avoid"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"http://php.net/manual/en/class.arrayobject.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"ArrayObject"))," - Using ",(0,i.mdx)("inlineCode",{parentName:"p"},"ArrayObject")," class is not recommended because it contains ",(0,i.mdx)("inlineCode",{parentName:"p"},"unserialize")," method, which attackers can use to create an exploit."),(0,i.mdx)("p",{parentName:"li"},"If you need to use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ArrayObject")," class, override the ",(0,i.mdx)("inlineCode",{parentName:"p"},"serialize"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"unserialize")," methods so that they use secure logic.\nConvert objects into arrays to serialize them, and reconstruct the objects using arrays during unserialization."),(0,i.mdx)("p",{parentName:"li"},"You can use ",(0,i.mdx)("a",{parentName:"p",href:"../../development/framework/serialize-library.md"},"Serialize Library")," in framework for a secure way of serializing/unserializing data."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-best-practices-security-index-md-634f3d28a2741b9521d2.js.map